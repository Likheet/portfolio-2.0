import { IAchievement, IProject, IPublication } from '@/types';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const withBasePath = (path: string) =>
    path.startsWith('/') ? `${BASE_PATH}${path}` : path;

export const RESUME_URL = withBasePath('/docs/likheet-shetty-resume.pdf');

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
        url: RESUME_URL,
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
            "Completed Oracle's Race to Certification track and secured a global Top 500 finish. Built consistency across weekly cloud challenges and validated practical OCI knowledge under score-based evaluation.",
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
        proofUrl:
            'https://www.credential.net/b5f87fcd-f9e1-49b4-b108-bcfd71ebfd54',
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
        proofUrl: withBasePath(
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
            "Passed HackerRank's Software Engineer role certification exam, validating practical coding and role-focused software engineering assessment performance.",
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
            "Cleared HackerRank's Problem Solving (Intermediate) skill assessment through algorithmic and data-structure problem solving under timed constraints.",
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
            "Completed Abdul Bari's in-depth Udemy course focused on core data structures, algorithm design, complexity analysis, and implementation in C/C++.",
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
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'Rust',
            icon: '/logo/rust.svg',
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
            name: 'React Native',
            icon: '/logo/react.png',
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
        title: 'YTFast',
        slug: 'ytfast',
        techStack: ['Rust', 'egui', 'wgpu', 'Tokio'],
        thumbnail: '/projects/thumbnail/ytfast.jpg',
        longThumbnail: '/projects/long/ytfast.jpg',
        images: ['/projects/images/ytfast-1.jpg', '/projects/images/ytfast-2.jpg'],
        liveUrl: 'https://github.com/Likheet/YTFast/releases/latest',
        sourceCode: 'https://github.com/Likheet/YTFast',
        year: 2026,
        description: `
            A native desktop app for YouTube Music on Mac and Windows, written in Rust with no browser underneath.
            <ul>
                <li>Finds a song ahead while the pointer rests on it, so a click starts playback almost at once.</li>
                <li>Plays from the first moments while the rest downloads, and readies the next song during the current one.</li>
                <li>Uses 0% of the processor when paused and about 120 MB of memory, against a 200 MB budget.</li>
            </ul>
        `,
        role: `
            <p>Developer (Solo)</p>
            <ul>
                <li>Built the app in Rust on egui and wgpu, with Home, Explore, Library and search laid out one to one against music.youtube.com.</li>
                <li>Wrote the audio pipeline (Tokio, Symphonia, rodio) and the word-by-word synced lyrics with translation and romanisation.</li>
                <li>Shipped signed-in account sync, three visual themes and background self-updates for Mac (Apple Silicon) and Windows.</li>
            </ul>
        `,
        challenge:
            'On a computer, YouTube Music is a web page: songs take a moment to start, and the browser underneath costs memory and battery.',
        solution:
            'I rebuilt the client as a native Rust app that predicts the next click, streams audio while it downloads and keeps every screen and shortcut people already know.',
        impact: 'Released through v1.3.1 for Mac and Windows with automatic updates, running at about 120 MB of memory and no processor use while paused.',
        key_features: [
            'Preloads on Hover',
            'Word-by-Word Synced Lyrics',
            'Three Visual Themes',
            'Background Self-Updates',
        ],
        team_size: 'Solo Project',
        duration: 'Ongoing',
    },
    {
        title: 'Life Ledger',
        slug: 'life-ledger',
        techStack: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
        thumbnail: '/projects/thumbnail/life-ledger.png',
        longThumbnail: '/projects/long/life-ledger.png',
        images: ['/projects/images/life-ledger.png'],
        liveUrl: 'https://life-ledger.tech',
        year: 2026,
        description: `
            An Android app, now in public beta, that keeps goals, ongoing commitments, tasks and meals in one calm daily view.
            <ul>
                <li>Captures a goal, commitment or task from one short line and tidies the wording without adding anything.</li>
                <li>Tracks commitments as ongoing promises, with an honest lapse count instead of a completion tick.</li>
                <li>Records spending in the background from payment notifications and exports everything for review in ChatGPT.</li>
            </ul>
        `,
        role: `
            <p>Creator (Solo)</p>
            <ul>
                <li>Defined the product, from the combined home view to the one-tap food logging tile.</li>
                <li>Built an offline-first data layer on SQLite and a native module that reads payment notifications.</li>
                <li>Built and launched the landing page at life-ledger.tech.</li>
            </ul>
        `,
        challenge:
            'Intentions made in a moment of clarity get lost in ordinary days, and most planners turn them into clutter or busywork.',
        solution:
            'I built a minimal app that makes capturing a goal or promise take seconds and keeps it in view, with finance and food logging collected quietly in the background.',
        impact: 'Released as a public beta on Android, with everything exportable at any time.',
        key_features: [
            'One-Line Capture',
            'Commitment Lapse Tracking',
            'Background Payment Capture',
            'Export for ChatGPT',
        ],
        team_size: 'Solo Project',
        duration: 'Ongoing',
    },
    {
        title: 'Nucleus AI',
        slug: 'nucleus-ai',
        techStack: ['Python', 'FastAPI', 'ChromaDB', 'Gemini API'],
        thumbnail: '/projects/thumbnail/nucleus-ai.jpg',
        longThumbnail: '/projects/long/nucleus-ai.jpg',
        images: ['/projects/images/nucleus-ai.jpg'],
        sourceCode: 'https://github.com/Likheet/Nucleus-AI',
        year: 2026,
        description: `
            A grounded chatbot for the UNSW Nucleus Student Hub that answers only from official UNSW pages and cites a source for every answer.
            <ul>
                <li>Crawls the UNSW website and Handbook, then chunks and indexes the pages into a vector store.</li>
                <li>Retrieves with hybrid search, combining semantic vectors with BM25 keyword matching.</li>
                <li>Runs free on Gemini Flash, or fully locally on Ollama with Gemma 3.</li>
            </ul>
        `,
        role: `
            <p>Developer (Solo)</p>
            <ul>
                <li>Wrote the Scrapy crawlers, including Handbook-aware chunking that keeps course details together.</li>
                <li>Built the retrieval-augmented generation chain and the FastAPI backend.</li>
                <li>Designed the chat interface with suggested questions and linked citations.</li>
            </ul>
        `,
        challenge:
            'Students ask the same questions about enrolment, fees and graduation, and a general chatbot will confidently invent the answers.',
        solution:
            'I restricted the model to retrieved passages from official UNSW pages and required a cited source for every answer.',
        impact: 'Every answer links back to the official page it came from, and one command refreshes the knowledge base when UNSW updates its pages.',
        key_features: [
            'Answers Only From UNSW Pages',
            'Source Citations',
            'Hybrid Vector + BM25 Search',
            'Gemini or Local Ollama',
        ],
        team_size: 'Solo Project',
        duration: 'Ongoing',
    },
    {
        title: 'Hermes Monitoring',
        slug: 'hermes-monitoring',
        techStack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/hermes-monitoring.jpg',
        longThumbnail: '/projects/long/hermes-monitoring.jpg',
        images: ['/projects/images/hermes-monitoring.jpg'],
        liveUrl: 'https://hermes-monitoring.vercel.app',
        sourceCode: 'https://github.com/Likheet/hermes-monitoring',
        year: 2025,
        description: `
            A resort operations app that gives every staff role its own workspace for tasks, shifts, maintenance and supervisor checks.
            <ul>
                <li>Separate views for workers, supervisors, front office, managers and admins.</li>
                <li>Supervisors verify completed tasks, and workers leave handover notes between shifts.</li>
                <li>Maintenance calendar by room and location, with reports exported to PDF and Excel.</li>
            </ul>
        `,
        role: `
            <p>Full-Stack Developer (Solo)</p>
            <ul>
                <li>Modelled tasks, shifts and maintenance schedules in Supabase (Postgres).</li>
                <li>Built the role-based Next.js interface as an installable app for staff phones.</li>
                <li>Added analytics and PDF/Excel reporting for supervisors and managers.</li>
            </ul>
        `,
        challenge:
            'A resort runs on tasks, shifts and maintenance spread across many roles, and it is hard to see what has been done and who checked it.',
        solution:
            'I built one app where front office and supervisors assign work, staff complete it on their phones and supervisors verify it, with maintenance scheduled by room.',
        impact: 'Puts task assignment, verification and maintenance history for every role in one app, with reports managers can export.',
        key_features: [
            'Role-Based Workspaces',
            'Supervisor Verification',
            'Maintenance Calendar',
            'PDF & Excel Reports',
        ],
        team_size: 'Solo Project',
        duration: 'Ongoing',
    },
    {
        title: 'Prompt Enhancer Extension',
        slug: 'prompt-enhancer-extension',
        techStack: [
            'JavaScript',
            'Chrome Extension APIs',
            'Gemini API',
            'HTML/CSS',
        ],
        thumbnail: '/projects/thumbnail/prompt-enhancer.png',
        longThumbnail: '/projects/long/prompt-enhancer.png',
        images: ['/projects/images/prompt-enhancer.png'],
        sourceCode: 'https://github.com/Likheet/prompt-enhancer-extension',
        year: 2025,
        description: `
            A Chrome extension that helps non-technical users turn vague prompts into high-quality AI instructions with one click.
            <ul>
                <li>Built inline prompt enhancement directly inside chat inputs, so users can optimize prompts without leaving ChatGPT or Claude.</li>
                <li>Implemented multiple enhancement templates (concise, detailed, technical, creative, and custom) for different use cases.</li>
                <li>Added context-aware enhancement with optional BYOK Gemini API support and keyboard shortcuts for fast workflows.</li>
            </ul>
        `,
        role: `
            <p>Extension Developer (Solo)</p>
            <ul>
                <li>Designed the DOM observer and platform-specific injection logic for reliable cross-platform behavior.</li>
                <li>Built the settings UX, preset management, and local persistence for customization and ease of use.</li>
                <li>Implemented enhancement pipeline behavior balancing free rule-based mode with API-powered mode.</li>
            </ul>
        `,
        challenge:
            'Most users can describe what they want, but struggle to phrase prompts in a way that consistently gets strong AI responses.',
        solution:
            'I built a one-click enhancement flow with preset strategies, optional custom instructions, and conversation-context handling so users can improve prompts without prompt-engineering knowledge.',
        impact: 'Reduced prompt-writing friction for non-technical users and made high-quality prompting repeatable through templates and shortcut-driven workflows.',
        key_features: [
            'Inline Prompt Enhancement',
            'Preset + Custom Templates',
            'BYOK Gemini Integration',
            'Keyboard Shortcut Workflow',
        ],
        team_size: 'Solo Project',
        duration: 'Ongoing',
    },
    {
        title: 'Sky Prophet',
        slug: 'sky-prophet',
        techStack: ['JavaScript', 'HTML/CSS', 'OpenWeather API', 'PWA'],
        thumbnail: '/projects/thumbnail/sky-prophet.png',
        longThumbnail: '/projects/long/sky-prophet.png',
        images: ['/projects/images/sky-prophet.png'],
        sourceCode: 'https://github.com/Likheet/Sky-Prophet',
        liveUrl: 'https://sky-prophet.vercel.app',
        year: 2023,
        description: `
            A weather intelligence dashboard with rich daily and hourly forecasting, air-quality highlights, and location-aware city search.
            <ul>
                <li>Built a clean weather UI with current conditions, five-day forecast, hourly timeline, and highlight cards for AQI, humidity, pressure, and visibility.</li>
                <li>Integrated geolocation + city search flows to quickly fetch weather data for current location or user-selected places.</li>
                <li>Packaged the app as a Progressive Web App (PWA) for installable, app-like usage across desktop and mobile.</li>
            </ul>
        `,
        role: `
            <p>Frontend Developer (Solo)</p>
            <ul>
                <li>Designed and implemented the complete dashboard interface and component layout.</li>
                <li>Built data fetching and route/hash handling for location-based weather updates.</li>
                <li>Implemented air-quality visualization and responsive behavior across screen sizes.</li>
            </ul>
        `,
        challenge:
            'Weather apps often overload users with raw numbers but miss clarity and actionable visual structure.',
        solution:
            'I designed a card-based dashboard that prioritizes key signals first (temperature, AQI, sunrise/sunset, and hourly trend) while keeping deeper details accessible in the same view.',
        impact: 'Created an installable, user-friendly forecasting app that makes complex weather and air-quality data faster to read and compare.',
        key_features: [
            'Location-Aware Forecasting',
            'Air Quality Insights',
            'Hourly + Multi-Day Views',
            'Progressive Web App Support',
        ],
        team_size: 'Solo Project',
        duration: '4 Weeks',
    },
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
        title: 'Peer Mentor',
        company: 'UNSW Psychology and Wellness (The Landing)',
        duration: 'Oct 2026 - Present',
    },
    {
        title: 'Student Help Assistant (Administrative Officer)',
        company: 'UNSW Nucleus Student Hub',
        duration: 'Mar 2026 - Present',
    },
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
        degree: 'Master of Information Technology',
        institution: 'University of New South Wales (UNSW)',
        location: 'Sydney, Australia',
        duration: '2026 - 2028',
        description:
            'Currently pursuing Master of Information Technology at UNSW, with expected graduation in Feb 2028. Focused on advanced AI, machine learning, and data-centric systems.',
        score: 'CWAM: 77%',
    },
    {
        degree: 'B.E. in Electronics & Communication Engineering',
        institution: 'RV Institute of Technology & Management',
        location: 'Bengaluru, India',
        duration: '2021 - 2025',
        description: 'Specializing in Electronics and Communication.',
        score: 'CGPA: 8.69',
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

export const OPEN_SOURCE = [
    {
        project: 'Monty',
        repo: 'pydantic/monty',
        description:
            'A secure Python sandbox, written in Rust, for code written by AI.',
        mergedUrl:
            'https://github.com/pydantic/monty/pulls?q=is%3Apr+is%3Amerged+author%3ALikheet',
        pullRequests: [
            {
                title: 'Include capture groups in re.split() results',
                url: 'https://github.com/pydantic/monty/pull/1036',
            },
        ],
    },
    {
        project: 'Vorssaint Utils',
        repo: 'vorssaint/vorssaint-utils',
        description: 'A free and open-source macOS menu bar toolkit.',
        mergedUrl:
            'https://github.com/vorssaint/vorssaint-utils/pulls?q=is%3Apr+is%3Amerged+author%3ALikheet',
        pullRequests: [
            {
                title: 'Keep the desktop from taking a selection drag',
                url: 'https://github.com/vorssaint/vorssaint-utils/pull/3104',
            },
            {
                title: 'Keep volume keys moving on outputs with coarse steps',
                url: 'https://github.com/vorssaint/vorssaint-utils/pull/3042',
            },
            {
                title: 'Keep Studio Pro out of the audio routing like Studio One',
                url: 'https://github.com/vorssaint/vorssaint-utils/pull/3152',
            },
            {
                title: "Find Xcode's tools like Instruments and Device Hub",
                url: 'https://github.com/vorssaint/vorssaint-utils/pull/3043',
            },
            {
                title: 'Say why replacing ⌘Tab locks apps with no open window',
                url: 'https://github.com/vorssaint/vorssaint-utils/pull/3041',
            },
            {
                title: 'Let thumbnail capture pause in a program that is not an app',
                url: 'https://github.com/vorssaint/vorssaint-utils/pull/3103',
            },
            {
                title: 'Match a Java runtime picked by its path (mouse)',
                url: 'https://github.com/vorssaint/vorssaint-utils/pull/3156',
            },
            {
                title: 'Match a Java runtime picked by its path (switcher)',
                url: 'https://github.com/vorssaint/vorssaint-utils/pull/3154',
            },
        ],
    },
    {
        project: 'fontkit',
        repo: 'foliojs/fontkit',
        description: 'An advanced font engine for Node and the browser.',
        mergedUrl:
            'https://github.com/foliojs/fontkit/pulls?q=is%3Apr+is%3Amerged+author%3ALikheet',
        pullRequests: [
            {
                title: 'Fix USE shaper crash on characters outside a syllable',
                url: 'https://github.com/foliojs/fontkit/pull/399',
            },
            {
                title: 'Read hdmx device records at their padded size',
                url: 'https://github.com/foliojs/fontkit/pull/396',
            },
        ],
    },
    {
        project: 'SchemaStore',
        repo: 'SchemaStore/schemastore',
        description:
            'JSON schemas that editors such as VS Code use for validation and autocomplete.',
        mergedUrl:
            'https://github.com/SchemaStore/schemastore/pulls?q=is%3Apr+is%3Amerged+author%3ALikheet',
        pullRequests: [
            {
                title: 'pre-commit-hooks: add Haskell and Julia languages, fix fail_fast description',
                url: 'https://github.com/SchemaStore/schemastore/pull/6487',
            },
        ],
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
