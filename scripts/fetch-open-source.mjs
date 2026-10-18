// Writes lib/open-source.json, the data behind the Open Source section: every
// merged pull request of USER in public repositories owned by someone else,
// grouped by repository, most-starred repository first.
// If GitHub can't be reached, the saved file is kept as it is.
import { readFile, writeFile } from 'node:fs/promises';

const USER = 'Likheet';
const OUT = new URL('../lib/open-source.json', import.meta.url);

// Display names where the repository name reads badly on its own.
const DISPLAY_NAMES = {
    'pydantic/monty': 'Monty',
    'vorssaint/vorssaint-utils': 'Vorssaint Utils',
    'SchemaStore/schemastore': 'SchemaStore',
};

// Repositories left off the site: practice and sign-up repos, and small
// README or CI fixes. Remove one to show it.
const HIDDEN_REPOS = [
    'firstcontributions/first-contributions',
    'is-a-dev/register',
    'devopness/devopness',
    'Empowered-Indian/indian-potholes',
    'ByMuhmd/Url-Shortener',
];

// Conventional-commit prefixes such as "fix(switcher): ".
const TITLE_PREFIX =
    /^(fix|feat|docs|test|chore|refactor|perf|build|ci|style|revert)(?:\(([^)]*)\))?!?:\s*/i;

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

const github = async (path) => {
    const response = await fetch(`https://api.github.com${path}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            ...(token && { Authorization: `Bearer ${token}` }),
        },
    });
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText} for ${path}`);
    }
    return response.json();
};

// Drops the prefix and backticks, and capitalises. When two titles in a repository read the
// same without it, they keep their scope: "... by its path (mouse)".
const tidyTitles = (titles) => {
    const tidied = titles.map((title) => {
        const scope = title.match(TITLE_PREFIX)?.[2];
        const text = title.replace(TITLE_PREFIX, '').replace(/`/g, '').trim();
        return { scope, text: text.charAt(0).toUpperCase() + text.slice(1) };
    });
    return tidied.map(({ scope, text }) =>
        scope && tidied.filter((other) => other.text === text).length > 1
            ? `${text} (${scope})`
            : text,
    );
};

const asSentence = (text) => (text && !/[.!?]$/.test(text) ? `${text}.` : text);

const fetchMergedPullRequests = async () => {
    const query = encodeURIComponent(
        `author:${USER} is:pr is:merged is:public -user:${USER}`,
    );
    const pullRequests = [];
    // The search API returns at most 1,000 results, 100 per page.
    for (let page = 1; page <= 10; page++) {
        const result = await github(
            `/search/issues?q=${query}&per_page=100&page=${page}`,
        );
        if (result.incomplete_results) {
            throw new Error('GitHub returned incomplete search results');
        }
        pullRequests.push(...result.items);
        if (result.items.length < 100) break;
    }
    return pullRequests;
};

const buildProjects = async () => {
    const byRepo = new Map();
    for (const pr of await fetchMergedPullRequests()) {
        const repo = pr.repository_url.split('/repos/')[1];
        if (HIDDEN_REPOS.includes(repo)) continue;
        byRepo.set(repo, [...(byRepo.get(repo) ?? []), pr]);
    }
    if (!byRepo.size) {
        throw new Error('GitHub returned no merged pull requests');
    }

    const projects = await Promise.all(
        [...byRepo].map(async ([repo, prs]) => {
            const info = await github(`/repos/${repo}`);
            prs.sort((a, b) =>
                b.pull_request.merged_at.localeCompare(a.pull_request.merged_at),
            );
            const titles = tidyTitles(prs.map((pr) => pr.title));
            return {
                project: DISPLAY_NAMES[info.full_name] ?? info.name,
                repo: info.full_name,
                // Rounded to what the site shows ("27.9k"), so the file only
                // changes when a visible number does.
                stars: Math.round(info.stargazers_count / 100) * 100,
                exactStars: info.stargazers_count,
                description: asSentence(info.description ?? ''),
                mergedUrl: `https://github.com/${info.full_name}/pulls?q=is%3Apr+is%3Amerged+author%3A${USER}`,
                pullRequests: prs.map((pr, i) => ({
                    title: titles[i],
                    url: pr.html_url,
                })),
            };
        }),
    );

    return projects
        .sort((a, b) => b.exactStars - a.exactStars)
        .map(({ exactStars, ...project }) => project);
};

try {
    const json = `${JSON.stringify(await buildProjects(), null, 4)}\n`;
    const saved = await readFile(OUT, 'utf8').catch(() => '');
    if (json === saved) {
        console.log('lib/open-source.json is already up to date.');
    } else {
        await writeFile(OUT, json);
        console.log('Updated lib/open-source.json.');
    }
} catch (error) {
    console.warn(
        `Could not refresh open-source data, keeping the saved file: ${error.message}`,
    );
}
