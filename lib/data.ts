import { IProject, IPublication } from '@/types';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const withBasePath = (path: string) =>
    path.startsWith('/') ? `${BASE_PATH}${path}` : path;

export const GENERAL_INFO = {
    email: 'likheet.s@gmail.com',

    emailSubject: "Let's build an AI-driven experience",
    emailBody:
        'Hi Likheet, I came across your portfolio and would love to collaborate on...',

    oldPortfolio: 'https://github.com/Likheet',
    upworkProfile: 'https://www.linkedin.com/in/likheet/',
};

export const SOCIAL_LINKS = [
    { name: 'GitHub', url: 'https://github.com/Likheet' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/likheet/' },
    { name: 'Instagram', url: 'https://www.instagram.com/likheetshetty/' },
    { name: 'Kaggle', url: 'https://www.kaggle.com/likheet' },
    {
        name: 'Resume',
        url: withBasePath('/docs/likheet-shetty-resume.pdf'),
    },
];

export const MY_STACK = {
    languages: [
        {
            name: 'Python',
            icon: '/logo/python.svg',
        },
        {
            name: 'C / C++',
            icon: '/logo/cpp.svg',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'SQL',
            icon: '/logo/sql.svg',
        },
    ],
    frontend: [
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'Three.js',
            icon: '/logo/threejs.svg',
        },
    ],
    'ai & cloud': [
        {
            name: 'Azure AI Services',
            icon: '/logo/azure.svg',
        },
        {
            name: 'Google Cloud Platform',
            icon: '/logo/gcp.svg',
        },
        {
            name: 'Oracle OCI',
            icon: '/logo/oracle.svg',
        },
        {
            name: 'Hugging Face',
            icon: '/logo/huggingface.svg',
        },
        {
            name: 'Stable Diffusion',
            icon: '/logo/stablediffusion.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Postman',
            icon: '/logo/postman.svg',
        },
        {
            name: 'Vercel',
            icon: '/logo/vercel.svg',
        },
        {
            name: 'VS Code',
            icon: '/logo/vscode.svg',
        },
        {
            name: 'Jupyter Notebook',
            icon: '/logo/jupyter.svg',
        },
        {
            name: 'RapidAPI',
            icon: '/logo/rapidapi.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Credit Card Fraud Detection',
        slug: 'credit-card-fraud-detection',
        techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'SMOTE'],
        thumbnail: '/projects/thumbnail/credit-card-fraud.png',
        longThumbnail: '/projects/long/credit-card-fraud.png',
        images: [
            '/projects/images/credit-card-fraud-1.png',
            '/projects/images/credit-card-fraud-2.png',
            '/projects/images/credit-card-fraud-3.png',
        ],
        sourceCode: 'https://github.com/Likheet/Fraud-Detection-ML',
        year: 2024,
        description: `
            A production-style ML pipeline that spots anomalous credit card activity.
            <ul>
                <li>Engineered ensemble models (Random Forest, Gradient Boosting, Stacking) to maximize recall on rare fraud cases.</li>
                <li>Balanced the heavily skewed dataset using SMOTE and Near-Miss to preserve signal in minority classes.</li>
                <li>Benchmarked 6+ classical algorithms with cross-validation and tracked metrics in experiment logs.</li>
            </ul>
        `,
        role: `
            <p>Lead ML Engineer</p>
            <ul>
                <li>Owned data preprocessing, feature engineering, and evaluation scripts.</li>
                <li>Tuned hyperparameters with grid searches and automated the reporting stack.</li>
                <li>Packaged the notebook experiments into a clean, reproducible repository for teammates.</li>
            </ul>
        `,
        challenge:
            'Detecting fraud in financial transactions is notoriously difficult due to the extreme class imbalance—fraudulent transactions represent less than 0.1% of the data. Traditional accuracy metrics are misleading, and false negatives (missing a fraud) are extremely costly.',
        solution:
            'I engineered a robust ML pipeline using an ensemble of Random Forest, Gradient Boosting, and Stacking classifiers. To address the imbalance, I applied SMOTE (Synthetic Minority Over-sampling Technique) combined with Near-Miss undersampling to create a balanced training set without losing critical information.',
        impact: 'Achieved a 98% Recall rate on the minority class, significantly outperforming baseline logistic regression models. The final model reduced false negatives by 40%, potentially saving thousands in lost revenue.',
        key_features: [
            'Real-time Anomaly Detection',
            'Ensemble Learning Architecture',
            'Automated Reporting Pipeline',
            'Interactive Performance Metrics',
        ],
        team_size: '3 Engineers',
        duration: '3 Months',
    },
    {
        title: 'Pathfinding Algorithms Visualizer',
        slug: 'pathfinding-visualizer',
        techStack: ['JavaScript', 'HTML/CSS', 'Vis.js', 'Algorithms'],
        thumbnail: '/projects/thumbnail/pathfinding-visualizer.png',
        longThumbnail: '/projects/long/pathfinding-visualizer.png',
        images: [
            '/projects/images/pathfinding-visualizer-1.png',
            '/projects/images/pathfinding-visualizer-2.png',
            '/projects/images/pathfinding-visualizer-3.png',
        ],
        sourceCode: 'https://github.com/Likheet/pathfinding-algorithm',
        liveUrl: 'https://likheet.github.io/pathfinding-algorithm/',
        year: 2024,
        description: `
            An interactive web app that demystifies graph search for students.
            <ul>
                <li>Implemented DFS, BFS, Dijkstra, and A* with clear animations and adjustable step speed.</li>
                <li>Let users draw custom mazes, drop weighted nodes, and inspect how heuristics change routes.</li>
                <li>Used Vis.js to keep the grid performant even with thousands of cells.</li>
            </ul>
        `,
        role: `
            <p>Frontend Engineer & UX Designer</p>
            <ul>
                <li>Designed the control surface and timeline scrubber for a smooth learning experience.</li>
                <li>Optimized the render loop to avoid layout thrashing when animating long paths.</li>
                <li>Wrote reusable visualization utilities to add new algorithms quickly.</li>
            </ul>
        `,
    },
    {
        title: 'AI News App',
        slug: 'ai-news-app',
        techStack: ['Alan AI', 'React', 'Material UI', 'JavaScript'],
        thumbnail: '/projects/thumbnail/ai-news-app.png',
        longThumbnail: '/projects/long/ai-news-app.png',
        images: [
            '/projects/images/ai-news-app-1.png',
            '/projects/images/ai-news-app-2.png',
            '/projects/images/ai-news-app-3.png',
        ],
        sourceCode: 'https://github.com/Likheet/AI-News-App',
        year: 2023,
        description: `
            Voice-driven news reader powered by Alan AI and real-time APIs.
            <ul>
                <li>Implemented conversational flows so users can fetch, open, and summarize stories hands-free.</li>
                <li>Synced Alan intents with React state to keep cards, highlights, and transcripts aligned.</li>
                <li>Used Material UI theming plus custom CSS for an accessible mobile-first layout.</li>
            </ul>
        `,
        role: `
            <p>Solo Developer</p>
            <ul>
                <li>Integrated Alan AI SDK, scripted dialogue responses, and handled edge cases for repeated commands.</li>
                <li>Wired the news API layer with graceful fallbacks when categories return zero articles.</li>
                <li>Focused on latency so responses feel instant during voice conversations.</li>
            </ul>
        `,
    },
    {
        title: 'Stack-It!',
        slug: 'stack-it',
        techStack: ['Three.js', 'Cannon.js', 'JavaScript', 'CSS'],
        thumbnail: '/projects/thumbnail/stack-it.png',
        longThumbnail: '/projects/long/stack-it.png',
        images: [
            '/projects/images/stack-it-1.png',
            '/projects/images/stack-it-2.png',
            '/projects/images/stack-it-3.png',
        ],
        sourceCode: 'https://github.com/Likheet/stack-game',
        liveUrl: 'https://stack-game-pearl.vercel.app/',
        year: 2024,
        description: `
            A relaxing physics-based stacking game with both manual and autopilot play.
            <ul>
                <li>Used Three.js + Cannon.js to render 3D blocks, collisions, and camera sweeps.</li>
                <li>Introduced an auto mode plus 500ms input cooldown to balance challenge and flow.</li>
                <li>Added subtle audio cues and themeable palettes for better immersion.</li>
            </ul>
        `,
        role: `
            <p>Game & Physics Programmer</p>
            <ul>
                <li>Built the physics loop, scoring, and fail-state handling from scratch.</li>
                <li>Authored reusable hooks for camera tweening and easing curves.</li>
                <li>Deployed to Vercel with asset compression for fast loads.</li>
            </ul>
        `,
    },
];
export const MY_EXPERIENCE = [
    {
        title: 'Data Analyst Intern (Python)',
        company: 'KaroStartup Technology India Pvt Ltd',
        duration: 'Jan 2025 - May 2025',
    },
    {
        title: 'Software Development Intern',
        company: 'DesiQna (Remote, India)',
        duration: 'Jul 2023 - Dec 2023',
    },
];

export const MY_EDUCATION = [
    {
        degree: 'Master of Information Technology (Artificial Intelligence)',
        institution: 'University of New South Wales (UNSW)',
        location: 'Sydney, Australia',
        duration: 'Upcoming (2026)',
        description:
            'Focusing on Advanced AI, Machine Learning, and Data Science.',
        score: '-',
    },
    {
        degree: 'B.E. in Electronics & Communication Engineering',
        institution: 'RV Institute of Technology & Management',
        location: 'Bengaluru, India',
        duration: '2021 - 2025',
        description: 'Specializing in Electronics and Communication.',
        score: 'CGPA: 8.68',
    },
    {
        degree: 'Higher Secondary (12th)',
        institution: 'Sri Chaitanya PU College (CBSE)',
        location: 'India',
        duration: '2020',
        description: 'Completed with distinction.',
        score: '93%',
    },
    {
        degree: 'Secondary (10th)',
        institution: 'Sri Chaitanya Techno School',
        location: 'India',
        duration: '2018',
        description: 'Completed with distinction.',
        score: '91%',
    },
];

export const PUBLICATIONS: IPublication[] = [
    {
        title: 'Tokenizer Benchmarking Across Indic and Code‑Mixed Scripts',
        year: '2025',
        url: 'https://doi.org/10.5281/zenodo.17273988',
        sourceCode: 'https://github.com/Likheet/indic-tokenizer-paper',
        description:
            'Systematic comparison of 11 production tokenizers across monolingual English, Indic scripts, and Hinglish code-mixing.',
        abstract:
            'Tokenization is the first irreversible decision in most LLM pipelines: it determines context budgets, costs, and robustness to noisy or code‑mixed inputs. This project systematically compares 11 production tokenizers (OpenAI, Meta, Mistral, Indic‑trained WordPiece/SentencePiece models) across monolingual English and three Indic scripts, plus Hinglish (Devanagari+Latin) code‑mixing. All measures (tokens-per-100-chars, bytes/token, [UNK] incidence, fragmentation metrics) were computed with a browser-based harness and exported as CSVs for reproducibility.',
        key_contributions: [
            'Comprehensive benchmark of 11 production tokenizers on Indic and code-mixed text',
            'Browser-based measurement harness using transformers.js and tiktoken WebAssembly',
            'Curated baseline input pools with PII-scrubbing for reproducibility',
            'CSV-first analysis pipeline with full statistical tests and reproducible figures',
            'Open-source repository with complete data artifacts tracked via Git LFS',
        ],
        methodology:
            'Developed a browser-based harness to measure tokenizer performance across multiple metrics (tokens-per-100-chars, bytes/token, [UNK] incidence, fragmentation). Created curated baseline input pools covering English, three Indic scripts, and Hinglish code-mixing. Used transformers.js and tiktoken WebAssembly for consistent measurements. All data exported as CSVs with checksums for verification. Analysis conducted using Python scripts for figure generation and statistical testing.',
        results:
            'Published comprehensive dataset with 50-60 MB CSV artifacts per tokenizer, enabling reproducible comparisons. Demonstrated significant performance variations across tokenizers for Indic scripts compared to English. Released complete analysis pipeline with figures, tables, and statistical tests. All artifacts openly available on Zenodo and GitHub with DOI: 10.5281/zenodo.17273988.',
        citation:
            'Shetty, L. (2025). Tokenizer Benchmarking Across Indic and Code‑Mixed Scripts. Zenodo. DOI: 10.5281/zenodo.17273988',
        stats: [
            { label: 'Tokenizers Compared', value: '11', icon: 'Code2' },
            { label: 'Scripts Analyzed', value: '4', icon: 'Languages' },
            { label: 'Dataset Size', value: '50-60MB', icon: 'Database' },
            { label: 'Reproducibility', value: '100%', icon: 'CheckCircle2' },
        ],
        technologies: [
            'Python',
            'transformers.js',
            'tiktoken',
            'Git LFS',
            'Zenodo',
        ],
        resources: [
            {
                title: 'Zenodo Dataset',
                url: 'https://doi.org/10.5281/zenodo.17273988',
                type: 'dataset' as const,
                description: 'Complete dataset with CSV artifacts',
            },
            {
                title: 'Source Code',
                url: 'https://github.com/Likheet/indic-tokenizer-paper',
                type: 'code' as const,
                description: 'Full analysis pipeline and paper source',
            },
            {
                title: 'TokenizerLab',
                url: 'https://github.com/Likheet/tokenizer-lab',
                type: 'demo' as const,
                description: 'Browser-based tokenizer measurement tool',
            },
            {
                title: 'Research Paper PDF',
                url: 'https://zenodo.org/records/17274071/files/main.pdf',
                type: 'pdf' as const,
                description: 'Main paper (1.1 MB)',
            },
        ],
        timeline: [
            {
                phase: 'Research',
                description: 'Designed benchmark methodology',
                icon: 'Microscope',
            },
            {
                phase: 'Implementation',
                description: 'Built browser harness with transformers.js',
                icon: 'Code',
            },
            {
                phase: 'Publication',
                description: 'Published on Zenodo with DOI',
                icon: 'BookOpen',
            },
            {
                phase: 'Open Source',
                description: 'Released code and data publicly',
                icon: 'Share2',
            },
        ],
    },
];

export const ARCHIVE_PROJECTS: IProject[] = [
    {
        title: 'Project Alpha',
        slug: 'project-alpha',
        techStack: ['Python', 'FastAPI'],
        thumbnail: '/projects/thumbnail/placeholder.png', // Placeholder
        longThumbnail: '/projects/long/placeholder.png',
        images: [],
        sourceCode: '#',
        year: 2023,
        description: 'A cool project from the archives.',
        role: 'Developer',
    },
    {
        title: 'Project Beta',
        slug: 'project-beta',
        techStack: ['React', 'Firebase'],
        thumbnail: '/projects/thumbnail/placeholder.png', // Placeholder
        longThumbnail: '/projects/long/placeholder.png',
        images: [],
        sourceCode: '#',
        year: 2022,
        description: 'Another cool project.',
        role: 'Frontend Dev',
    },
];
