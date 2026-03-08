import { IAchievement, IProject, IPublication } from '@/types';

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

export const ACHIEVEMENTS: IAchievement[] = [
    {
        title: 'Oracle Race to Certification',
        icon: 'Trophy',
        category: 'global challenge',
        year: '2025',
        highlight: 'Top 500',
        description:
            'Completed Oracle\'s Race to Certification track and secured a global Top 500 finish. Built consistency across weekly cloud challenges and validated practical OCI knowledge under score-based evaluation.',
        tags: ['OCI', 'Cloud', 'Global Ranking'],
        proofUrl:
            'https://drive.google.com/file/d/10hzALEWNwTMBYR-sbiCPl7eMJt6y-mkq/view?usp=sharing',
        proofLabel: 'Proof',
    },
    {
        title: 'Oracle Cloud Infrastructure 2025 Networking Professional',
        icon: 'Cloud',
        category: 'cloud certification',
        year: '2025',
        highlight: 'Certified',
        description:
            'Earned the Oracle Cloud Infrastructure 2025 Certified Networking Professional credential. Demonstrates applied competency in OCI networking architecture, connectivity, and production-grade cloud networking operations.',
        tags: ['OCI', 'Networking', 'Cloud Architecture'],
        proofUrl: withBasePath(
            '/docs/certificates/oracle-oci-2025-networking-professional.pdf',
        ),
        proofLabel: 'Certificate',
    },
    {
        title: 'Microsoft Azure AI Engineer Associate',
        icon: 'Award',
        category: 'cloud certification',
        year: '2025',
        highlight: 'Certified',
        description:
            'Earned the Azure AI Engineer Associate credential by demonstrating end-to-end AI solution delivery on Azure. Covered model integration, cognitive services, deployment architecture, and responsible AI practices.',
        tags: ['Azure AI', 'MLOps', 'Responsible AI'],
        proofUrl:
            'https://learn.microsoft.com/api/credentials/share/en-us/LikheetShetty/EDFCAD1071EAD80A?sharingId=C44F415D6E32A2E7',
        proofLabel: 'Credential',
    },
    {
        title: 'Google Cloud Digital Leader',
        icon: 'Cloud',
        category: 'cloud certification',
        year: '2024',
        highlight: 'Certified',
        description:
            'Completed the Google Cloud Digital Leader certification with focus on cloud value, architecture, and business impact. Demonstrated cross-domain fluency across data, AI, security, and product decision-making on GCP.',
        tags: ['GCP', 'Cloud Strategy', 'Architecture'],
        proofUrl: 'https://www.credential.net/b5f87fcd-f9e1-49b4-b108-bcfd71ebfd54',
        proofLabel: 'Credential',
    },
    {
        title: 'GitHub Foundations',
        icon: 'Star',
        category: 'certification',
        year: '2024',
        highlight: 'Certified',
        description:
            'Completed GitHub Foundations certification covering core Git workflows, repository collaboration patterns, and GitHub platform fundamentals for team-based software development.',
        tags: ['Git', 'GitHub', 'Version Control'],
        proofUrl: 'https://www.credly.com/go/0AREjkSg',
        proofLabel: 'Credential',
    },
    {
        title: 'JPMorgan Chase & Co. Software Engineering Job Simulation',
        icon: 'BarChart',
        category: 'job simulation',
        year: '2024',
        highlight: 'Completed',
        description:
            'Completed the Forage software engineering simulation with JPMorgan Chase & Co., including practical tasks on stock price data interfacing, framework usage, and trader-facing data visualization workflows.',
        tags: ['Forage', 'JPMorgan', 'Applied Practice'],
        proofUrl:
            withBasePath(
                '/docs/certificates/jpmorgan-software-engineering-job-simulation.pdf',
            ),
        proofLabel: 'Certificate',
    },
    {
        title: 'HackerRank Software Engineer Certification',
        icon: 'Award',
        category: 'coding assessment',
        year: '2024',
        highlight: 'Certified',
        description:
            'Passed HackerRank\'s Software Engineer role certification exam, validating practical coding and role-focused software engineering assessment performance.',
        tags: ['HackerRank', 'Software Engineer', 'Competitive Coding'],
        proofUrl: withBasePath(
            '/docs/certificates/hackerrank-software-engineer.pdf',
        ),
        proofLabel: 'Certificate',
    },
    {
        title: 'HackerRank Problem Solving (Intermediate)',
        icon: 'Star',
        category: 'coding assessment',
        year: '2024',
        highlight: 'Certified',
        description:
            'Cleared HackerRank\'s Problem Solving (Intermediate) skill assessment through algorithmic and data-structure problem solving under timed constraints.',
        tags: ['DSA', 'Algorithms', 'Competitive Coding'],
        proofUrl: withBasePath(
            '/docs/certificates/hackerrank-problem-solving-intermediate.pdf',
        ),
        proofLabel: 'Certificate',
    },
    {
        title: 'Mastering Data Structures & Algorithms using C and C++',
        icon: 'Beaker',
        category: 'course completion',
        year: '2024',
        highlight: 'Completed',
        description:
            'Completed Abdul Bari\'s in-depth Udemy course focused on core data structures, algorithm design, complexity analysis, and implementation in C/C++.',
        tags: ['Udemy', 'C/C++', 'Data Structures'],
        proofUrl: 'https://ude.my/UC-bfac3c49-cf56-453f-a8bb-60f7fe08ed9d',
        proofLabel: 'Certificate',
    },
    {
        title: 'Machine Learning Pipelines with Azure ML Studio',
        icon: 'Beaker',
        category: 'hands-on project',
        year: '2025',
        highlight: 'Completed',
        description:
            'Completed a Coursera Project Network hands-on project on Azure ML Studio, covering pipeline setup, model workflow orchestration, and practical cloud ML operations.',
        tags: ['Coursera', 'Azure ML', 'MLOps'],
        proofUrl: 'https://coursera.org/verify/C1WU8HUCEB4D',
        proofLabel: 'Certificate',
    },
    {
        title: 'MATLAB Onramp',
        icon: 'BarChart',
        category: 'learning milestone',
        year: '2024',
        highlight: 'Completed',
        description:
            'Completed MathWorks MATLAB Onramp, building practical fluency in matrix operations, scripting, visualization, and numerical-computing fundamentals.',
        tags: ['MATLAB', 'Numerical Computing', 'Visualization'],
        proofUrl: withBasePath('/docs/certificates/matlab-onramp.pdf'),
        proofLabel: 'Certificate',
    },
    {
        title: 'GeeksforGeeks Weekly Contest 162',
        icon: 'Medal',
        category: 'contest ranking',
        year: '2024',
        highlight: 'Rank 20',
        description:
            'Placed 20th on the GeeksforGeeks Weekly Contest 162 leaderboard in a timed competitive programming round.',
        tags: ['GeeksforGeeks', 'Contest', 'Problem Solving'],
        proofUrl:
            'https://practice.geeksforgeeks.org/contest/gfg-weekly-162-rated-contest/leaderboard',
        proofLabel: 'Leaderboard',
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
            A production-style ML pipeline that spots anomalous credit card activity using advanced ensemble methods.
            <ul>
                <li>Engineered a robust pipeline using Random Forest, Gradient Boosting, and Stacking classifiers to maximize recall.</li>
                <li>Addressed extreme class imbalance (fraud < 0.1%) using SMOTE combined with Near-Miss undersampling.</li>
                <li>Guided by LIME (Local Interpretable Model-agnostic Explanations) principles to ensure model transparency.</li>
            </ul>
        `,
        role: `
            <p>Lead ML Engineer</p>
            <ul>
                <li>Conducted extensive EDA including correlation matrices and time-based analysis of fraud patterns.</li>
                <li>Implemented dimensionality reduction techniques like PCA, SVD, and LDA to optimize feature space.</li>
                <li>Benchmarked 6+ algorithms including Logistic Regression, k-NN, and Decision Trees against the ensemble model.</li>
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
            'SMOTE & Near-Miss Sampling',
            'LIME Interpretability',
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
            An interactive web app that demystifies graph search for students with real-time visualization.
            <ul>
                <li>Implemented complex algorithms: A*, Bidirectional Greedy, Dijkstra, BFS, DFS, and Greedy Best-First Search.</li>
                <li>Features instant maze generation using Recursive Division, Horizontal/Vertical skew, and Random layouts.</li>
                <li>Allows users to draw custom walls, move start/end nodes, and adjust visualization speed dynamically.</li>
            </ul>
        `,
        role: `
            <p>Frontend Engineer & UX Designer</p>
            <ul>
                <li>Designed a responsive grid system that handles thousands of nodes without performance degradation.</li>
                <li>Created a clean, user-friendly interface with clear path highlighting and real-time feedback.</li>
                <li>Optimized the rendering loop to ensure smooth animations across different devices.</li>
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
            A voice-controlled news application powered by Alan AI for hands-free interaction.
            <ul>
                <li>Integrated Alan AI to enable conversational voice commands for fetching and reading news.</li>
                <li>Features real-time news fetching with capabilities to filter by categories and open articles by voice.</li>
                <li>Built with a responsive Material UI design to ensure a seamless experience on mobile and desktop.</li>
            </ul>
        `,
        role: `
            <p>Solo Developer</p>
            <ul>
                <li>Scripted the Alan AI dialogue flows to handle various user intents and edge cases naturally.</li>
                <li>Implemented synchronized state management between the voice assistant and the React frontend.</li>
                <li>Optimized the app for low-latency voice responses and smooth UI transitions.</li>
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
            A 3D physics-based stacking game built with Three.js and Cannon.js.
            <ul>
                <li>Leveraged Cannon.js for realistic physics simulations, including collision detection and gravity.</li>
                <li>Implemented an 'Autopilot Mode' that demonstrates perfect stacking strategies automatically.</li>
                <li>Designed a 500ms input cooldown system to promote deliberate gameplay and prevent spamming.</li>
            </ul>
        `,
        role: `
            <p>Game & Physics Programmer</p>
            <ul>
                <li>Built the core game loop and physics world integration from scratch.</li>
                <li>Created dynamic camera movements and visual effects to enhance immersion.</li>
                <li>Implemented game state management including scoring, resetting, and difficulty scaling.</li>
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
        slug: 'tokenizer-benchmarking',
        year: '2025',
        conference: 'Zenodo',
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
        title: 'GPT Discord',
        slug: 'gpt-discord',
        techStack: ['Python', 'OpenAI API', 'Discord.py', 'DALL-E'],
        thumbnail: '/projects/thumbnail/placeholder.png', // Placeholder
        longThumbnail: '/projects/long/placeholder.png',
        images: [],
        sourceCode: 'https://github.com/Likheet/GPTDiscord',
        year: 2023,
        description:
            'A robust, all-in-one GPT interface for Discord featuring multi-modality, code interpretation, and AI moderation.',
        role: 'Lead Developer',
    },
    {
        title: 'Project Archive',
        slug: 'project-archive',
        techStack: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
        thumbnail: '/projects/thumbnail/placeholder.png', // Placeholder
        longThumbnail: '/projects/long/placeholder.png',
        images: [],
        sourceCode: 'https://github.com/Likheet/project_archive',
        liveUrl: 'https://codecompasss.github.io/project_archive/',
        year: 2023,
        description:
            'A centralized repository and static website designed to collect and showcase student projects for industry exposure.',
        role: 'Contributor',
    },
];
