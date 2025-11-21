import type { NextConfig } from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const [repositoryOwner, repositoryName] =
    process.env.GITHUB_REPOSITORY?.split('/') || [];
const isUserGithubPage =
    repositoryOwner && repositoryName === `${repositoryOwner}.github.io`;

const computedBasePath =
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (isGithubActions && repositoryName && !isUserGithubPage
        ? `/${repositoryName}`
        : '');

const computedSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (repositoryOwner
        ? `https://${repositoryOwner}.github.io${computedBasePath}`
        : '');

const nextConfig: NextConfig = {
    /** Static export for GitHub Pages */
    output: 'export',
    trailingSlash: true,
    basePath: computedBasePath || undefined,
    assetPrefix: computedBasePath ? `${computedBasePath}/` : undefined,
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: computedBasePath,
        NEXT_PUBLIC_SITE_URL: computedSiteUrl,
    },
};

export default nextConfig;
