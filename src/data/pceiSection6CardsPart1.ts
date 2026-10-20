import { Flashcard } from '../types';

export const pceiSection6CardsPart1: Flashcard[] = [
  {
    id: "pcei-6-001",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "AI Feasibility",
    difficulty: "Beginner",
    question: "Which of the following problems is best suited for an Artificial Intelligence or Machine Learning approach rather than traditional deterministic programming?",
    codeSnippet: "# Problem types:\n# A) Calculating sales tax based on exact city/state statutory tax brackets\n# B) Classifying incoming customer support emails into sentiment categories\n# C) Sorting an array of customer IDs numerically\n# D) Formatting dates from 'YYYY-MM-DD' to 'DD/MM/YYYY'",
    options: [
      "Classifying customer support emails into sentiment categories (positive, neutral, negative)",
      "Calculating sales tax based on exact statutory tax brackets",
      "Sorting an array of customer IDs numerically",
      "Formatting dates from 'YYYY-MM-DD' to 'DD/MM/YYYY'"
    ],
    correctAnswer: 0,
    explanation: "AI and Machine Learning excel at complex pattern recognition, natural language comprehension, and handling unstructured data where explicit deterministic rules are too fragile or difficult to codify. Tasks with fixed, statutory mathematical rules (like tax calculation or date formatting) should always use traditional programming.",
    officialRef: "PCEI-30-01 Block 6.1 - Opportunities for AI Solutions",
    tags: ["ai-opportunities", "problem-selection", "ml-vs-traditional"]
  },
  {
    id: "pcei-6-002",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "AI vs Traditional Programming",
    difficulty: "Beginner",
    question: "How does the fundamental problem-solving paradigm of Machine Learning differ from traditional software programming?",
    codeSnippet: "# Traditional Programming:\n# Data + Rules  --> Answers\n# Machine Learning:\n# Data + Answers --> Rules (Model)",
    options: [
      "Traditional programming combines Data and explicit Rules to produce Answers; Machine Learning combines Data and Answers to learn the underlying Rules (Model)",
      "Traditional programming requires a GPU, whereas Machine Learning runs exclusively in CPU registers",
      "Machine Learning guarantees 100% mathematical precision with zero errors, whereas traditional code is inherently stochastic",
      "Traditional programming cannot accept numbers as input"
    ],
    correctAnswer: 0,
    explanation: "In traditional programming, software engineers manually write explicit algorithmic rules. In Machine Learning, an algorithm analyzes historical data and corresponding known answers/outcomes to infer the statistical rules and patterns automatically.",
    officialRef: "PCEI-30-01 Block 6.1 - AI Paradigms",
    tags: ["programming-paradigm", "ml-foundations", "rules-vs-data"]
  },
  {
    id: "pcei-6-003",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "When NOT to Use AI",
    difficulty: "Intermediate",
    question: "In which scenario is applying Machine Learning generally INAPPROPRIATE or inadvisable?",
    codeSnippet: "# Considerations:\n# 1. 100% deterministic precision required by law/audit\n# 2. Complete absence of historical training data\n# 3. Simple static mathematical formulas exist (e.g. Gross Profit = Revenue - Cost)",
    options: [
      "When exact 100% deterministic precision is required and a known, unambiguous mathematical formula exists with zero tolerance for probabilistic error",
      "When predicting future churn among thousands of mobile subscribers based on behavioral telemetry",
      "When detecting fraudulent credit card transactions from high-dimensional purchase streams",
      "When transcribing audio speech into text transcripts"
    ],
    correctAnswer: 0,
    explanation: "ML models are fundamentally probabilistic and produce statistical approximations. When a problem has strict, deterministic statutory formulas (e.g., payroll calculations, cryptographic hashing, or accounting balances) with zero tolerance for probabilistic variance, traditional rule-based code is required.",
    officialRef: "PCEI-30-01 Block 6.1 - AI Limitations & Suitability",
    tags: ["problem-selection", "rule-based", "decision-framework"]
  },
  {
    id: "pcei-6-004",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Problem Formulation",
    difficulty: "Beginner",
    question: "What is the first step in scoping a real-world AI project?",
    codeSnippet: "# Project lifecycle stage 1:\n# Clarify objective, determine input X and target y, and assess feasibility",
    options: [
      "Translating a vague business need into a concrete, measurable machine learning problem (defining inputs, target variable, and success metrics)",
      "Purchasing 100 GPU servers immediately",
      "Writing 10,000 lines of complex neural network architecture in PyTorch",
      "Deploying an untrained model directly into production"
    ],
    correctAnswer: 0,
    explanation: "Before writing any code or training models, AI practitioners must formulate the problem: translating ambiguous business goals into well-defined mathematical tasks (e.g., classification, regression, clustering), identifying available inputs (features) and desired outputs (labels), and establishing evaluation criteria.",
    officialRef: "PCEI-30-01 Block 6.1 - Scoping & Feasibility",
    tags: ["problem-formulation", "project-scoping", "planning"]
  },
  {
    id: "pcei-6-005",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Problem Mapping",
    difficulty: "Beginner",
    question: "An e-commerce store wants to estimate the exact dollar amount a new customer will spend over their first 12 months. What ML problem formulation is this?",
    codeSnippet: "# Input: Customer demographics, first session clicks, acquisition channel\n# Output: Continuous dollar value (e.g., $342.50)",
    options: [
      "Regression (continuous numerical prediction)",
      "Binary Classification (True/False prediction)",
      "Unsupervised Clustering (grouping unlabeled data)",
      "Dimensionality Reduction"
    ],
    correctAnswer: 0,
    explanation: "Predicting a continuous numerical quantity (such as lifetime dollar value, housing price, or temperature) is formulated as a Regression problem.",
    officialRef: "PCEI-30-01 Block 6.1 - ML Problem Types",
    tags: ["regression", "problem-types", "customer-lifetime-value"]
  },
  {
    id: "pcei-6-006",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Problem Mapping",
    difficulty: "Beginner",
    question: "A bank wants an automated system to flag whether an outgoing wire transfer is 'Fraudulent' or 'Legitimate'. What ML problem formulation is this?",
    codeSnippet: "# Input: Transaction amount, location, timestamp, device fingerprint\n# Output: Label in {'Fraudulent', 'Legitimate'}",
    options: [
      "Binary Classification (categorical prediction into two distinct classes)",
      "Continuous Regression",
      "Reinforcement Learning without feedback",
      "Text Summarization"
    ],
    correctAnswer: 0,
    explanation: "Classifying instances into one of two mutually exclusive categories (Fraud vs. Legitimate, Spam vs. Not Spam, Positive vs. Negative) is a Binary Classification problem.",
    officialRef: "PCEI-30-01 Block 6.1 - Binary Classification",
    tags: ["classification", "fraud-detection", "problem-mapping"]
  },
  {
    id: "pcei-6-007",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Problem Mapping",
    difficulty: "Beginner",
    question: "A streaming platform wants to segment its millions of users into behavioral clusters without having any pre-existing user categories or labels. What ML approach is needed?",
    codeSnippet: "# Input: Unlabeled listening history, frequency, genres\n# Output: Discovered clusters of similar users",
    options: [
      "Unsupervised Learning (specifically Clustering, such as k-Means or DBSCAN)",
      "Supervised Linear Regression",
      "Supervised Binary Classification",
      "Rule-based unit testing"
    ],
    correctAnswer: 0,
    explanation: "When training data lacks ground-truth labels and the objective is to discover latent patterns, affinities, or natural groupings among instances, Unsupervised Clustering is the appropriate formulation.",
    officialRef: "PCEI-30-01 Block 6.1 - Unsupervised Clustering",
    tags: ["clustering", "unsupervised-learning", "user-segmentation"]
  },
  {
    id: "pcei-6-008",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Recommendation Systems",
    difficulty: "Beginner",
    question: "What type of AI application suggests relevant books or movies to users based on their past ratings and similarities to other users?",
    codeSnippet: "# User-Item interaction matrix:\n# Recommendations = collaborative_filtering(user_history, community_ratings)",
    options: [
      "Recommendation System (Recommender Engine)",
      "Computer Vision Optical Character Recognition (OCR)",
      "Static database sorting query",
      "Speech synthesizer"
    ],
    correctAnswer: 0,
    explanation: "Recommendation Systems utilize collaborative filtering, content-based filtering, or hybrid models to predict user preferences and suggest items (e.g., movies, products, articles) they are most likely to engage with.",
    officialRef: "PCEI-30-01 Block 6.1 - Recommendation Systems",
    tags: ["recommender-systems", "collaborative-filtering", "ai-use-cases"]
  },
  {
    id: "pcei-6-009",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Data Feasibility",
    difficulty: "Intermediate",
    question: "Why is 'Data Availability and Quality' the single greatest bottleneck determining AI project feasibility?",
    codeSnippet: "# ML Axiom: Garbage In, Garbage Out (GIGO)\n# Without representative, cleanly labeled, and accessible training data, no ML algorithm can succeed.",
    options: [
      "Because machine learning models learn patterns exclusively from empirical data; missing, corrupt, heavily biased, or unlabelled data directly prevents successful learning",
      "Because modern CPUs refuse to execute Python scripts unless a 1 Terabyte file is attached",
      "Because data quality only affects the download speed of the code repository",
      "Because neural networks can only train on synthetic data generated by quantum computers"
    ],
    correctAnswer: 0,
    explanation: "Data is the foundation of machine learning ('Garbage In, Garbage Out'). If sufficient, accurate, relevant, and representative historical data is unavailable or prohibitively noisy, building a viable ML system is mathematically infeasible.",
    officialRef: "PCEI-30-01 Block 6.1 - Data Feasibility",
    tags: ["data-feasibility", "data-quality", "gigo"]
  },
  {
    id: "pcei-6-010",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Latency & Constraints",
    difficulty: "Intermediate",
    question: "An autonomous vehicle collision-avoidance system requires real-time braking decisions within 15 milliseconds. What critical project constraint must be evaluated?",
    codeSnippet: "# Constraint Check:\n# Cloud API latency = 250ms roundtrip (FAILS requirement)\n# On-device Edge inference = 8ms (SUCCEEDS requirement)",
    options: [
      "Inference latency and hardware compute constraints (edge deployment vs. cloud roundtrip latency)",
      "The visual color scheme of the car's navigation dashboard",
      "The number of social media followers the automotive company has",
      "The brand of mouse used by the software developers"
    ],
    correctAnswer: 0,
    explanation: "Real-time safety-critical systems impose strict latency constraints. Round-trip cloud network calls (100-300ms) are far too slow for sub-20ms braking decisions, requiring lightweight on-device edge AI models optimized for local hardware.",
    officialRef: "PCEI-30-01 Block 6.1 - Project Constraints",
    tags: ["latency", "edge-ai", "real-time", "constraints"]
  },
  {
    id: "pcei-6-011",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Target Variable Definition",
    difficulty: "Intermediate",
    question: "In a project predicting equipment failure in a factory, what is the 'Target Variable' (Label)?",
    codeSnippet: "# Factory sensor data:\n# Features X = [temperature, vibration_rpm, oil_pressure, hours_run]\n# Target y = ?",
    options: [
      "The operational status outcome to be predicted (e.g., 1 for 'Will Fail within 48 Hours', 0 for 'Normal Operation')",
      "The physical weight of the machinery in metric tons",
      "The name of the technician who installed the machine",
      "The SQL database connection string"
    ],
    correctAnswer: 0,
    explanation: "The Target Variable (often denoted as 'y' or the label) is the specific outcome or ground truth that the supervised machine learning model is trained to predict from input features (X).",
    officialRef: "PCEI-30-01 Block 6.1 - Target Variable",
    tags: ["target-variable", "labels", "supervised-learning"]
  },
  {
    id: "pcei-6-012",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Business Metric Alignment",
    difficulty: "Intermediate",
    question: "Why must AI engineers align technical model evaluation metrics (e.g., ROC-AUC, F1-score) with business objectives?",
    codeSnippet: "# Alignment Example:\n# Hospital triage model with 99% accuracy might fail business goals if it misses 100% of rare fatal heart attacks (High False Negatives!)",
    options: [
      "Because a technically high accuracy score is useless or disastrous if it fails the real-world business objective (such as minimizing costly false negatives or maximizing user retention)",
      "Because Python code cannot compile unless a CEO approves the cost function",
      "Because scikit-learn will throw a TypeError if profit margins are not passed into fit()",
      "Because business stakeholders always prefer reading raw loss matrices over profit metrics"
    ],
    correctAnswer: 0,
    explanation: "A model can achieve 99% overall accuracy on an imbalanced dataset by simply predicting the majority class every time, yet completely fail the business mission (e.g., catching cancer or detecting credit card fraud). Technical metrics must reflect actual operational costs and risks.",
    officialRef: "PCEI-30-01 Block 6.1 - Business Alignment",
    tags: ["business-metrics", "kpis", "evaluation"]
  },
  {
    id: "pcei-6-013",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Rule-Based vs AI",
    difficulty: "Beginner",
    question: "A company wants to route incoming inquiries: 'If billing, send to accounting; if password, send to IT'. What is the most practical initial approach?",
    codeSnippet: "# Simple deterministic rules:\nif 'invoice' in text or 'charge' in text:\n    route('accounting')\nelif 'password' in text or 'login' in text:\n    route('it')",
    options: [
      "Start with simple keyword matching / rule-based logic; only introduce NLP/ML if linguistic variability and ambiguity render rules ineffective",
      "Train a multi-billion parameter transformer model from scratch immediately",
      "Hire a team of 50 data scientists to build an ensemble of deep neural networks",
      "Abandon the project because rule-based software is obsolete"
    ],
    correctAnswer: 0,
    explanation: "The best engineering practice follows Occam's razor: start with the simplest viable solution (simple heuristics or regex rules). Only introduce machine learning complexity when deterministic rules fail to handle natural variations, idioms, and nuances.",
    officialRef: "PCEI-30-01 Block 6.1 - Solution Selection",
    tags: ["rule-based", "baseline", "engineering-pragmatism"]
  },
  {
    id: "pcei-6-014",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Data Privacy & Legal Constraints",
    difficulty: "Intermediate",
    question: "Before initiating an AI project utilizing patient health records, which feasibility factor must take priority?",
    codeSnippet: "# Legal & Compliance Gate:\n# HIPAA / GDPR: Storing or processing protected health information (PHI) requires strict anonymization and legal consent.",
    options: [
      "Legal, regulatory, and privacy compliance (e.g., HIPAA, GDPR, patient consent, and data anonymization)",
      "Deciding whether to use light mode or dark mode in the IDE",
      "Choosing between Python 3.11 and Python 3.12",
      "Selecting an aesthetic chart color for matplotlib"
    ],
    correctAnswer: 0,
    explanation: "Legal and regulatory compliance is an absolute prerequisite. Processing protected personal, financial, or medical data without regulatory adherence (HIPAA, GDPR) exposes organizations to catastrophic liabilities and halts projects before deployment.",
    officialRef: "PCEI-30-01 Block 6.1 - Legal & Privacy Constraints",
    tags: ["gdpr", "hipaa", "compliance", "privacy"]
  },
  {
    id: "pcei-6-015",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Anomaly Detection",
    difficulty: "Intermediate",
    question: "A nuclear power plant needs to detect unusual sensor behaviors that have never occurred before. Which ML formulation is most appropriate?",
    codeSnippet: "# Problem:\n# Normal operational data is abundant; failure instances are virtually non-existent or unknown in advance.\n# Approach: Learn normal baseline, flag deviations!",
    options: [
      "Anomaly Detection / Outlier Detection (learning normal patterns and flagging statistical anomalies)",
      "Supervised Classification with balanced 50/50 classes",
      "Static table lookup",
      "Linear Regression predicting turbine temperature from year"
    ],
    correctAnswer: 0,
    explanation: "When failures are rare, catastrophic, or never seen in training history, supervised learning cannot be used because failure labels do not exist. Anomaly detection models the distribution of 'normal' operations and triggers alerts on significant deviations.",
    officialRef: "PCEI-30-01 Block 6.1 - Anomaly Detection",
    tags: ["anomaly-detection", "outliers", "predictive-maintenance"]
  },
  {
    id: "pcei-6-016",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Generative AI Feasibility",
    difficulty: "Beginner",
    question: "A marketing team wants to automatically draft varied product descriptions for 5,000 new retail catalog items. Which AI capability fits best?",
    codeSnippet: "# Input: Item attributes (fabric: cotton, color: navy, style: casual polo)\n# Output: Engaging marketing paragraph",
    options: [
      "Generative AI (Large Language Model text generation with structured prompting)",
      "K-Means Clustering",
      "Linear Regression",
      "Principal Component Analysis (PCA)"
    ],
    correctAnswer: 0,
    explanation: "Generative AI and Large Language Models (LLMs) are uniquely suited for natural language generation tasks, synthesizing engaging, coherent descriptive text from structured bullet points or product attributes.",
    officialRef: "PCEI-30-01 Block 6.1 - Generative AI Use Cases",
    tags: ["generative-ai", "llm", "copywriting", "text-generation"]
  },
  {
    id: "pcei-6-017",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Human-in-the-Loop",
    difficulty: "Intermediate",
    question: "When planning an AI system for high-stakes medical diagnoses or judicial parole recommendations, what operational architecture is strongly recommended?",
    codeSnippet: "# Decision Architecture:\n# Model -> Generates recommendation with confidence score -> Qualified Human Expert approves/rejects",
    options: [
      "Human-in-the-Loop (HITL), where the AI acts as an assistive decision-support tool and final decisions require human verification",
      "Fully autonomous execution without any human logging or oversight",
      "Random coin-flipping to prevent algorithmic fatigue",
      "Hardcoding all decisions to the majority class"
    ],
    correctAnswer: 0,
    explanation: "In high-stakes domains with severe ethical, legal, or health consequences, AI should be deployed as decision support ('Human-in-the-Loop'), providing insights, probabilities, and highlights while preserving ultimate human accountability and judgment.",
    officialRef: "PCEI-30-01 Block 6.1 - Human-in-the-Loop",
    tags: ["human-in-the-loop", "hitl", "decision-support", "ethics"]
  },
  {
    id: "pcei-6-018",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Feasibility Checklist",
    difficulty: "Beginner",
    question: "Which three core criteria form the foundational feasibility triad for any proposed AI project?",
    codeSnippet: "# Feasibility Triad:\n# 1. Technical/Data Feasibility (Do we have quality data and viable algorithms?)\n# 2. Business Feasibility (Does the ROI justify the cost?)\n# 3. Ethical/Regulatory Feasibility (Is it legal, safe, and fair?)",
    options: [
      "Technical feasibility (data/models), Business feasibility (ROI/value), and Ethical/Legal feasibility (compliance/safety)",
      "Monitor size, keyboard brand, and desk ergonomics",
      "Number of git branches, commit messages, and repository stars",
      "Electricity voltage, mouse sensitivity, and browser bookmarks"
    ],
    correctAnswer: 0,
    explanation: "A viable AI project requires all three pillars: (1) Technical/Data feasibility (can it be built with sufficient data?), (2) Business feasibility (does it deliver measurable value exceeding cost?), and (3) Ethical/Legal feasibility (is it compliant and fair?).",
    officialRef: "PCEI-30-01 Block 6.1 - Feasibility Triad",
    tags: ["feasibility", "roi", "planning", "business-case"]
  },
  {
    id: "pcei-6-019",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Minimum Viable Product (MVP)",
    difficulty: "Beginner",
    question: "What is the primary objective of building a Minimum Viable Product (MVP) in an AI project?",
    codeSnippet: "# MVP workflow:\n# Simple heuristic or baseline model -> Test on sample users -> Validate value quickly before heavy investment",
    options: [
      "To validate core assumptions, test end-to-end data flow, and demonstrate practical utility with minimal time and resource investment",
      "To write all possible features and train the largest possible neural network on day one",
      "To immediately patent every line of code without testing",
      "To avoid speaking with stakeholders or users until launch"
    ],
    correctAnswer: 0,
    explanation: "An AI MVP allows teams to rapidly test end-to-end feasibility, validate data pipelines, gather user feedback, and prove business value with simple models before investing extensive capital in complex architectures.",
    officialRef: "PCEI-30-01 Block 6.1 - AI MVP",
    tags: ["mvp", "agile", "prototyping", "project-management"]
  },
  {
    id: "pcei-6-020",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.1",
    category: "Project Failure Modes",
    difficulty: "Intermediate",
    question: "What is one of the most common reasons why enterprise AI proofs-of-concept (PoCs) fail to transition into production?",
    codeSnippet: "# PoC Trap:\n# Works in isolated Jupyter notebook with clean static CSV, but fails when exposed to messy, changing, real-time live data streams with missing values.",
    options: [
      "Data drift, pipeline integration challenges, and failure to account for real-world operational constraints outside clean static notebooks",
      "Python running out of variable names",
      "SQL databases becoming illegal",
      "Computers running too cold during winter months"
    ],
    correctAnswer: 0,
    explanation: "Many AI prototypes work on curated, static historical CSVs in Jupyter notebooks, but fail in production due to messy real-time data feeds, latency bottlenecks, infrastructure mismatches, data drift, and lack of integration with enterprise systems.",
    officialRef: "PCEI-30-01 Block 6.1 - AI Production Realities",
    tags: ["production-ml", "poc-to-prod", "data-drift", "deployment"]
  },
  {
    id: "pcei-6-021",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Cost Components",
    difficulty: "Beginner",
    question: "Which of the following is typically a major recurring operating cost (OpEx) for deployed Machine Learning systems?",
    codeSnippet: "# AI Lifecycle Costs:\n# - Upfront: Data collection, model development\n# - Recurring: Cloud GPU/CPU inference compute, API tokens, continuous monitoring & retraining",
    options: [
      "Inference compute infrastructure (cloud GPU/CPU hosting, serverless instances, or per-token API fees)",
      "The initial purchase of Python licenses (Python is free open-source)",
      "Paying copyright fees for using the 'import' statement",
      "Replacing physical keyboard keys worn out by typing code"
    ],
    correctAnswer: 0,
    explanation: "While Python and open-source libraries are free, hosting production models for continuous inference, processing API queries, and provisioning scalable cloud servers (especially GPUs/TPUs) represent major ongoing operational expenditures.",
    officialRef: "PCEI-30-01 Block 6.2 - AI Cost Considerations",
    tags: ["ai-costs", "cloud-compute", "inference-costs", "opex"]
  },
  {
    id: "pcei-6-022",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Data Labeling Costs",
    difficulty: "Beginner",
    question: "Why is high-quality human data labeling often one of the most expensive phases of supervised machine learning?",
    codeSnippet: "# Labeling 50,000 medical scans:\n# 50,000 images * $15/image (board-certified radiologist) = $750,000 labeling cost!",
    options: [
      "Because manually annotating tens of thousands of examples requires substantial human labor, domain expertise, and rigorous quality verification",
      "Because computer hard drives charge a tax per labeled byte",
      "Because human labelers must build physical wooden frames for digital images",
      "Because data labels expire after 24 hours if not uploaded"
    ],
    correctAnswer: 0,
    explanation: "Supervised learning requires ground-truth labels. Labeling vast datasets (e.g., segmenting tumors in MRI scans, classifying legal contracts, or tagging bounding boxes) is labor-intensive and frequently requires costly domain specialists.",
    officialRef: "PCEI-30-01 Block 6.2 - Data Labeling Costs",
    tags: ["data-labeling", "annotation", "costs", "ground-truth"]
  },
  {
    id: "pcei-6-023",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Model Selection Economics",
    difficulty: "Intermediate",
    question: "When should a team prefer using an existing pre-trained open-source or commercial foundation model over training a custom model from scratch?",
    codeSnippet: "# Decision Tree:\n# Training GPT-4 / Llama-3 from scratch: Millions of dollars in GPU compute & petabytes of data\n# Pre-trained / Fine-tuning: Hours of compute, thousands of dollars, immediate state-of-the-art results",
    options: [
      "In almost all standard NLP and computer vision tasks, because pre-trained models require orders of magnitude less data, time, and computational budget",
      "Only when the company has zero internet connectivity",
      "Only when the custom dataset contains fewer than 3 rows",
      "Never; training a model from scratch is always cheaper than downloading pre-trained weights"
    ],
    correctAnswer: 0,
    explanation: "Training large deep learning models from scratch costs millions of dollars in compute, energy, and specialized engineering. Transfer learning and leveraging pre-trained foundation models provide massive cost savings and state-of-the-art accuracy.",
    officialRef: "PCEI-30-01 Block 6.2 - Pre-trained Models vs Scratch",
    tags: ["pre-trained-models", "transfer-learning", "economics", "compute-costs"]
  },
  {
    id: "pcei-6-024",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "API vs Self-Hosting",
    difficulty: "Intermediate",
    question: "What is a primary economic advantage of consuming external AI via commercial APIs (e.g., OpenAI, Google Cloud AI) for low-to-medium traffic applications?",
    codeSnippet: "# API Model:\n# Cost = $0.002 per 1,000 tokens (Pay-as-you-go, $0 fixed monthly server cost)\n# Self-hosted GPU:\n# Cost = $1,500/month 24/7 dedicated GPU instance",
    options: [
      "Pay-as-you-go pricing: you only pay for actual API requests without maintaining expensive, idle, dedicated 24/7 GPU server infrastructure",
      "Commercial APIs run without using any electricity",
      "Commercial APIs eliminate the need for an internet connection",
      "Commercial APIs guarantee that all user data is publicly broadcast"
    ],
    correctAnswer: 0,
    explanation: "Pay-per-token or pay-per-request API services eliminate the high fixed capital expenditure of dedicated GPU servers. For projects with moderate or unpredictable query volumes, serverless APIs are vastly more cost-effective.",
    officialRef: "PCEI-30-01 Block 6.2 - Cloud APIs vs Self-Hosting",
    tags: ["api-costs", "pay-as-you-go", "cloud-economics", "serverless"]
  },
  {
    id: "pcei-6-025",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "API vs Self-Hosting",
    difficulty: "Intermediate",
    question: "At what point does self-hosting an open-source model (like Llama or Mistral) on dedicated hardware become cheaper than using paid commercial APIs?",
    codeSnippet: "# Cost Crossover Analysis:\n# API Cost: $0.01 * 10,000,000 daily queries = $100,000/day!\n# Self-hosted Cluster: $5,000/month in cloud infrastructure costs",
    options: [
      "When query volume reaches massive sustained scale, where the cumulative per-token API costs exceed the fixed monthly cost of dedicated GPU servers",
      "When the project has fewer than 10 users per month",
      "When the code is transferred to a floppy disk",
      "Immediately upon creating a GitHub account"
    ],
    correctAnswer: 0,
    explanation: "At hyper-scale (millions of daily queries), per-token API charges compound exponentially. Deploying self-hosted, quantized open-source models on dedicated hardware becomes significantly cheaper once fixed server costs undercut variable API fees.",
    officialRef: "PCEI-30-01 Block 6.2 - Scale Economics",
    tags: ["scale-economics", "crossover-point", "self-hosting", "inference"]
  },
  {
    id: "pcei-6-026",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Compute Hardware Costs",
    difficulty: "Beginner",
    question: "Why are GPUs (Graphics Processing Units) widely preferred over CPUs for training deep neural networks, despite their higher purchase and rental costs?",
    codeSnippet: "# Hardware comparison:\n# CPU: 8-64 powerful cores, optimized for sequential logic\n# GPU: 1,000s of specialized tensor/ALU cores, parallelizing matrix multiplication 50x-100x faster!",
    options: [
      "GPUs have thousands of parallel cores optimized for massive matrix multiplication, training deep models in days rather than the months or years a CPU would require",
      "GPUs use less electricity than a single LED lightbulb",
      "CPUs are physically incapable of storing floating-point numbers",
      "GPUs are completely free when downloading Python"
    ],
    correctAnswer: 0,
    explanation: "Deep learning is fundamentally massive parallel matrix algebra. GPUs process thousands of tensor operations concurrently, drastically reducing training time and overall cloud rental expenditure compared to running slow CPU instances for months.",
    officialRef: "PCEI-30-01 Block 6.2 - Hardware Acceleration",
    tags: ["gpu-vs-cpu", "parallel-compute", "hardware-costs", "deep-learning"]
  },
  {
    id: "pcei-6-027",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Token Usage & Prompt Optimization",
    difficulty: "Intermediate",
    question: "In commercial Large Language Model APIs, how does reducing prompt length directly reduce project costs?",
    codeSnippet: "# API Billing Formula:\n# Total Cost = (Prompt_Tokens * Prompt_Rate) + (Completion_Tokens * Completion_Rate)\n# Trimming 1,000 unnecessary context tokens over 100,000 calls saves 100,000,000 tokens!",
    options: [
      "API providers bill based on token counts; concise prompts and compact system instructions directly lower per-request token consumption and overall billing",
      "Shorter prompts cause the API server to issue a 50% discount coupon",
      "Shorter prompts force the LLM to output binary machine code",
      "Token counts do not affect API pricing"
    ],
    correctAnswer: 0,
    explanation: "LLM cloud APIs charge on a per-token basis for both input (prompt) and output (completion). Optimizing prompt structure, removing bloated examples, and using concise system prompts directly decreases token volume and operational costs.",
    officialRef: "PCEI-30-01 Block 6.2 - Prompt Economics",
    tags: ["token-cost", "prompt-engineering", "cost-optimization", "llm-apis"]
  },
  {
    id: "pcei-6-028",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Data Storage Costs",
    difficulty: "Beginner",
    question: "What storage consideration impacts long-term budget in computer vision and audio AI projects?",
    codeSnippet: "# Multi-modal data scale:\n# 1,000,000 high-res training images = 10 Terabytes of raw storage + backups + versioned snapshots",
    options: [
      "Storing terabytes of raw high-resolution media, intermediate preprocessed artifacts, and versioned datasets incurs significant ongoing cloud storage and egress fees",
      "Image files shrink to zero bytes once trained on by a model",
      "Cloud storage providers provide infinite free storage for AI researchers",
      "Computer vision models delete the original photos after viewing them"
    ],
    correctAnswer: 0,
    explanation: "Unstructured multimedia data (video, audio, high-res medical imagery) consumes vast cloud storage (AWS S3, Google Cloud Storage). Keeping multiple versioned copies, backups, and augmented datasets can add substantial monthly cloud storage costs.",
    officialRef: "PCEI-30-01 Block 6.2 - Storage & Data Lifecycle Costs",
    tags: ["storage-costs", "cloud-storage", "data-management", "computer-vision"]
  },
  {
    id: "pcei-6-029",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Maintenance & Retraining Costs",
    difficulty: "Intermediate",
    question: "Why does the cost of an AI project continue long after the initial model has been successfully trained and deployed?",
    codeSnippet: "# Model Degradation:\n# Customer behavior changes -> Data drift occurs -> Accuracy drops -> Engineers must collect new data and retrain periodically!",
    options: [
      "Because models experience performance degradation over time (data and concept drift), requiring continuous monitoring, fresh data collection, and periodic retraining",
      "Because models physically wear out digital circuits on servers",
      "Because Python requires an annual subscription renewal fee for every function",
      "Because machine learning weights evaporate if not continuously cooled with liquid nitrogen"
    ],
    correctAnswer: 0,
    explanation: "Deploying a model is not a one-time event. Real-world patterns shift over time (data drift, macroeconomic changes, evolving fraud tactics). Maintaining accuracy requires ongoing monitoring, logging infrastructure, engineer salaries, and retraining pipelines.",
    officialRef: "PCEI-30-01 Block 6.2 - Ongoing Maintenance & Drift",
    tags: ["maintenance", "concept-drift", "retraining", "mlops"]
  },
  {
    id: "pcei-6-030",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Free vs Paid AI Tools",
    difficulty: "Beginner",
    question: "Which tool in the standard Python AI ecosystem is open-source and free of licensing fees for commercial development?",
    codeSnippet: "# Python AI Stack:\nimport numpy as np\nimport pandas as pd\nfrom sklearn.ensemble import RandomForestClassifier",
    options: [
      "scikit-learn (along with Python, NumPy, and pandas)",
      "Proprietary cloud API endpoints",
      "Dedicated private GPU cloud instances",
      "Commercial data labeling agency contracts"
    ],
    correctAnswer: 0,
    explanation: "Core Python libraries including scikit-learn, pandas, NumPy, PyTorch, and TensorFlow are open-source and released under permissive licenses (e.g., BSD, Apache 2.0), allowing royalty-free commercial development.",
    officialRef: "PCEI-30-01 Block 6.2 - Open-Source Tools",
    tags: ["open-source", "scikit-learn", "licensing", "software-costs"]
  },
  {
    id: "pcei-6-031",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Rate Limiting & Cold Starts",
    difficulty: "Intermediate",
    question: "What hidden operational risk comes with relying on free or low-tier AI cloud APIs for production user traffic?",
    codeSnippet: "# Free Tier Limitations:\n# - Strict rate limits: 3 requests/minute -> HTTP 429 Too Many Requests\n# - Cold start delays: 30-second initialization pauses",
    options: [
      "Strict rate limits (throttling with HTTP 429 errors), unpredictable cold-start latency, and lack of Service Level Agreements (SLAs) for uptime",
      "The API server sending physical mail to your office",
      "The computer crashing permanently",
      "All python files being automatically renamed"
    ],
    correctAnswer: 0,
    explanation: "Free and budget cloud tiers enforce strict rate limits (queries per second/minute) and experience cold-start latency spikes. Without commercial SLAs, production applications will fail or hang during traffic bursts.",
    officialRef: "PCEI-30-01 Block 6.2 - Cloud API Limitations",
    tags: ["rate-limits", "cold-starts", "sla", "operational-risk"]
  },
  {
    id: "pcei-6-032",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Model Quantization Savings",
    difficulty: "Intermediate",
    question: "How does 'Model Quantization' (e.g., converting 32-bit floating point weights to 8-bit or 4-bit integers) dramatically reduce deployment costs?",
    codeSnippet: "# Weight precision reduction:\n# FP32 model: 16 GB VRAM needed (Requires expensive $10k GPU)\n# INT4 quantized: 3.5 GB VRAM needed (Runs smoothly on consumer hardware or low-cost cloud instances!)",
    options: [
      "It reduces memory footprint (VRAM/RAM) and computational requirements, allowing models to run on cheaper hardware or edge devices with minimal accuracy loss",
      "It deletes 90% of the training data from disk",
      "It changes the language of the code from Python to HTML",
      "It converts images from RGB to black and white"
    ],
    correctAnswer: 0,
    explanation: "Quantization compresses neural network parameters from 32-bit floats to 8-bit or 4-bit representations. This drastically slashes GPU memory (VRAM) demands, enabling deployment on lower-tier cloud instances or local laptops without massive cost.",
    officialRef: "PCEI-30-01 Block 6.2 - Model Quantization",
    tags: ["quantization", "vram", "compression", "cost-reduction"]
  },
  {
    id: "pcei-6-033",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Synthetic Data Economics",
    difficulty: "Intermediate",
    question: "Why are organizations increasingly exploring 'Synthetic Data' generation to control AI project budgets?",
    codeSnippet: "# Synthetic data:\n# Writing a script to simulate 100,000 edge-case driving scenarios instead of driving 5,000,000 real miles with physical cars.",
    options: [
      "It can generate large volumes of accurately pre-labeled training data programmatically at a fraction of the cost and time of physical data collection and manual human labeling",
      "Synthetic data is legally exempt from computer processing",
      "Synthetic data makes Python run 1,000 times faster",
      "Synthetic data permanently eliminates the need for software testing"
    ],
    correctAnswer: 0,
    explanation: "Generating synthetic data (via simulation, 3D engines, or generative models) provides instant, perfectly labeled training examples, particularly for dangerous or rare edge cases (e.g., self-driving car crashes), drastically reducing physical collection and labeling costs.",
    officialRef: "PCEI-30-01 Block 6.2 - Synthetic Data Economics",
    tags: ["synthetic-data", "data-collection", "cost-efficiency"]
  },
  {
    id: "pcei-6-034",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Active Learning Cost Optimization",
    difficulty: "Intermediate",
    question: "What is 'Active Learning' and how does it optimize data annotation budgets?",
    codeSnippet: "# Active Learning cycle:\n# 1. Model evaluates 100,000 unlabeled samples\n# 2. Only routes the 2,000 samples with highest predictive uncertainty to human annotators!",
    options: [
      "An algorithmic strategy where the model queries human annotators to label only the most ambiguous or uncertain data points, maximizing learning while minimizing labeling expenses",
      "A fitness routine for machine learning engineers",
      "A technique that forces the computer to train without consuming electricity",
      "Automatically labeling data using random coin tosses"
    ],
    correctAnswer: 0,
    explanation: "Active learning prioritizes human labeling effort on samples where the current model is most uncertain. Instead of spending budget labeling 100,000 redundant examples, teams label only the most informative subset, slashing annotation costs by up to 80%.",
    officialRef: "PCEI-30-01 Block 6.2 - Active Learning",
    tags: ["active-learning", "annotation-budget", "sampling-efficiency"]
  },
  {
    id: "pcei-6-035",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Batch vs Real-Time Inference Costs",
    difficulty: "Intermediate",
    question: "Why is 'Batch Inference' (offline scheduled processing) generally far more cost-effective than 'Real-Time Inference' (online 24/7 web endpoints)?",
    codeSnippet: "# Real-Time: Requires dedicated 24/7 server running, ready to answer in <100ms\n# Batch: Spin up ephemeral cheap spot instances, process 1,000,000 records at 2 AM, immediately shut down server!",
    options: [
      "Batch processing allows models to maximize hardware utilization and leverage ephemeral spot/discounted instances, spinning down servers completely when idle",
      "Batch processing eliminates the need for data to exist",
      "Real-time inference is prohibited by open-source licenses",
      "Batch processing guarantees zero predictive error"
    ],
    correctAnswer: 0,
    explanation: "Real-time endpoints require low-latency 24/7 active servers with headroom for traffic spikes, leading to idle waste. Batch processing bundles predictions (e.g., nightly recommendation updates), running on cheap ephemeral instances that terminate immediately upon completion.",
    officialRef: "PCEI-30-01 Block 6.2 - Batch vs Real-Time Economics",
    tags: ["batch-inference", "real-time", "spot-instances", "infrastructure-cost"]
  },
  {
    id: "pcei-6-036",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Environmental & Energy Costs",
    difficulty: "Beginner",
    question: "What environmental consideration has become a major topic in large-scale AI project planning?",
    codeSnippet: "# Carbon Footprint:\n# Training a single massive frontier model can consume megawatt-hours of electricity, generating metric tons of CO2.",
    options: [
      "The carbon footprint, energy consumption, and water cooling demands of hyperscale AI data centers running continuous model training and inference",
      "The physical noise produced by monitor pixels",
      "The paper waste generated by printing Python source code",
      "The electromagnetic interference on analog TV antennas"
    ],
    correctAnswer: 0,
    explanation: "Massive deep learning models demand substantial electrical power and cooling infrastructure. Modern AI governance and budget planning increasingly incorporate environmental impact, carbon footprint, and energy efficiency metrics.",
    officialRef: "PCEI-30-01 Block 6.2 - Environmental Impact",
    tags: ["energy-consumption", "carbon-footprint", "green-ai", "sustainability"]
  },
  {
    id: "pcei-6-037",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Vendor Lock-in Risks",
    difficulty: "Intermediate",
    question: "What is 'Vendor Lock-in' and why is it a strategic financial risk in cloud AI planning?",
    codeSnippet: "# Proprietary Cloud Lock-in:\n# Building an entire product tightly coupled to proprietary, closed-source cloud APIs\n# Risk: Vendor increases token prices 300% or deprecates the endpoint!",
    options: [
      "Becoming entirely dependent on a single cloud vendor's proprietary APIs and data formats, making it technically difficult and costly to switch if prices rise or services are discontinued",
      "Purchasing a laptop that cannot be opened",
      "Signing an agreement that forbids hiring programmers",
      "Using a keyboard that only types in uppercase"
    ],
    correctAnswer: 0,
    explanation: "Relying heavily on closed, proprietary cloud AI services exposes companies to unexpected price hikes, terms-of-service changes, or service deprecation. Architecture abstractions that allow swapping models mitigate vendor lock-in.",
    officialRef: "PCEI-30-01 Block 6.2 - Vendor Lock-in",
    tags: ["vendor-lock-in", "cloud-risk", "financial-planning"]
  },
  {
    id: "pcei-6-038",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Total Cost of Ownership (TCO)",
    difficulty: "Intermediate",
    question: "In the context of enterprise AI, what does 'Total Cost of Ownership' (TCO) encompass beyond initial model training?",
    codeSnippet: "# TCO Equation:\n# TCO = Data Gathering + Annotation + Infrastructure + Model Training + Security Audits + Ongoing Monitoring + MLOps Retraining + Incident Response",
    options: [
      "All direct and indirect expenses throughout the entire AI lifecycle, including data curation, compliance, infrastructure, deployment, monitoring, and ongoing human maintenance",
      "Only the initial invoice for purchasing the developer's laptop",
      "The exact price of the Python textbook used by the engineer",
      "Only the cost of electricity during the first hour of training"
    ],
    correctAnswer: 0,
    explanation: "TCO calculates the full lifecycle financial burden. A model that is cheap to train may incur immense operational TCO if its complex pipeline requires constant manual oversight, frequent retraining, and high inference latency.",
    officialRef: "PCEI-30-01 Block 6.2 - Total Cost of Ownership",
    tags: ["tco", "lifecycle-costs", "mlops-budget"]
  },
  {
    id: "pcei-6-039",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Open Source Licensing Costs",
    difficulty: "Beginner",
    question: "Can a commercial business legally sell products built with software licensed under the MIT or Apache 2.0 open-source licenses?",
    codeSnippet: "# Permissive Open Source (MIT / Apache 2.0):\n# Grants broad permission to use, modify, distribute, and sell software commercially without paying royalties.",
    options: [
      "Yes; MIT and Apache 2.0 are permissive open-source licenses that explicitly permit commercial use, modification, and distribution without royalty fees",
      "No; any commercial use of open-source software is strictly illegal",
      "Yes, but only if 50% of company stock is transferred to the Python Institute",
      "No; software must always be written entirely from scratch without libraries"
    ],
    correctAnswer: 0,
    explanation: "Permissive licenses like MIT, Apache 2.0, and BSD allow commercial exploitation and closed proprietary distribution without software royalty fees, forming the legal bedrock of the open-source Python AI ecosystem.",
    officialRef: "PCEI-30-01 Block 6.2 - Open Source Licensing",
    tags: ["mit-license", "apache-2.0", "open-source", "licensing"]
  },
  {
    id: "pcei-6-040",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.2",
    category: "Budget Contingency",
    difficulty: "Intermediate",
    question: "Why is allocating a 20-30% budget contingency buffer particularly vital for Machine Learning research and development compared to standard web development?",
    codeSnippet: "# R&D Uncertainty:\n# In standard web dev, building a login page is predictable.\n# In ML, an experimental hypothesis may fail to reach target accuracy, requiring new feature engineering or alternative data collection!",
    options: [
      "Because machine learning development is fundamentally experimental; achieving acceptable model accuracy cannot be guaranteed on the first iteration and often requires experimental pivots",
      "Because GPU prices increase every minute automatically",
      "Because Python charges random fines for indentation errors",
      "Because machine learning code cannot be saved without purchasing cloud credits"
    ],
    correctAnswer: 0,
    explanation: "Unlike traditional software where requirements map directly to programmatic features, ML performance is bounded by data quality and statistical patterns. Unexpected data sparsity, noise, or baseline underperformance often necessitate additional iterations.",
    officialRef: "PCEI-30-01 Block 6.2 - R&D Risk & Budgeting",
    tags: ["budget-contingency", "experimental-nature", "ml-risk"]
  },
  {
    id: "pcei-6-041",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.3",
    category: "Project Workflow",
    difficulty: "Beginner",
    question: "What is the standard, logical sequence of steps when developing a small supervised Machine Learning project?",
    codeSnippet: "# Standard ML Pipeline Workflow:\n# 1. Define Problem -> 2. Ingest & Clean Data -> 3. Explore & Preprocess -> 4. Train Baseline -> 5. Evaluate & Tune -> 6. Deploy & Monitor",
    options: [
      "Problem Scoping -> Data Ingestion & Cleaning -> Exploratory Data Analysis -> Model Training -> Evaluation -> Deployment",
      "Model Deployment -> Model Training -> Data Cleaning -> Problem Scoping",
      "Model Evaluation -> Hyperparameter Tuning -> Data Collection -> Writing Documentation",
      "Writing Unit Tests -> Buying GPUs -> Deploying Empty Flask App -> Collecting Data"
    ],
    correctAnswer: 0,
    explanation: "A principled ML project always begins with understanding the objective, followed by acquiring and understanding data, establishing baselines, tuning algorithms against rigorous evaluation metrics, and finally deploying with monitoring.",
    officialRef: "PCEI-30-01 Block 6.3 - AI Project Lifecycle",
    tags: ["project-lifecycle", "ml-workflow", "pipeline"]
  },
  {
    id: "pcei-6-042",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.3",
    category: "Data Ingestion",
    difficulty: "Beginner",
    question: "Which Python snippet correctly loads a comma-separated dataset into a pandas DataFrame for analysis?",
    codeSnippet: "# Python data ingestion:\nimport pandas as pd\ndf = pd.read_csv('housing_data.csv')",
    options: [
      "import pandas as pd; df = pd.read_csv('housing_data.csv')",
      "import csv; df = csv.load_into_neural_net('housing_data.csv')",
      "df = open('housing_data.csv').fit_transform()",
      "import pandas as pd; df = pd.write_file('housing_data.csv')"
    ],
    correctAnswer: 0,
    explanation: "The `pd.read_csv()` function in pandas is the standard and ubiquitous utility for loading tabular CSV files into an in-memory DataFrame for exploration and modeling.",
    officialRef: "PCEI-30-01 Block 6.3 - Data Ingestion",
    tags: ["pandas", "read_csv", "data-loading", "python"]
  },
  {
    id: "pcei-6-043",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.3",
    category: "Missing Values",
    difficulty: "Beginner",
    question: "Why must missing values (NaNs) be identified and resolved before feeding tabular data into standard scikit-learn estimators?",
    codeSnippet: "# Missing value check:\nimport numpy as np\n# Standard estimators like LinearRegression, LogisticRegression, or SVC raise a ValueError if NaNs are present!",
    options: [
      "Standard scikit-learn algorithms (like LinearRegression or LogisticRegression) raise a ValueError if numerical arrays contain NaN values",
      "Missing values cause computer screens to flicker",
      "Missing values automatically delete the entire Python environment",
      "scikit-learn automatically substitutes random dictionary words for missing numbers"
    ],
    correctAnswer: 0,
    explanation: "Most core classical machine learning estimators perform mathematical linear algebra operations that cannot compute with NaN (Not a Number) values, raising a ValueError unless imputed or dropped.",
    officialRef: "PCEI-30-01 Block 6.3 - Handling Missing Values",
    tags: ["missing-values", "nan", "scikit-learn", "data-cleaning"]
  },
  {
    id: "pcei-6-044",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.3",
    category: "Baseline Model",
    difficulty: "Beginner",
    question: "What is the purpose of establishing a simple 'Baseline Model' (e.g., DummyClassifier or simple linear regression) early in an AI project?",
    codeSnippet: "# Establishing a baseline:\nfrom sklearn.dummy import DummyClassifier\ndummy = DummyClassifier(strategy='most_frequent')\ndummy.fit(X_train, y_train)\nbaseline_acc = dummy.score(X_test, y_test)",
    options: [
      "To set a minimum benchmark score that any complex model must clearly outperform to justify its computational complexity and maintenance overhead",
      "To serve as the final production deployment without further development",
      "To generate random test data for unit tests",
      "To ensure the CPU temperature remains above 80 degrees Celsius"
    ],
    correctAnswer: 0,
    explanation: "A baseline model (such as always predicting the majority class or the historical mean) establishes a benchmark. If a complex deep neural network cannot beat a trivial baseline, the complex model is useless and poorly formulated.",
    officialRef: "PCEI-30-01 Block 6.3 - Baseline Models",
    tags: ["baseline-model", "benchmarking", "dummy-classifier"]
  },
  {
    id: "pcei-6-045",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.3",
    category: "Train-Test Split",
    difficulty: "Beginner",
    question: "Why must training data and test data be strictly separated before training any machine learning model?",
    codeSnippet: "# Train-Test Separation:\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)",
    options: [
      "To evaluate how well the model generalizes to previously unseen data and to detect whether it has simply memorized (overfitted) the training examples",
      "To reduce the physical file size on the hard drive",
      "Because Python cannot fit models with more than 100 data rows",
      "To run half of the code on Windows and half on Linux"
    ],
    correctAnswer: 0,
    explanation: "Evaluating a model on the data it was trained on only measures rote memorization. A clean, held-out test set is mandatory to measure generalization performance on real-world unseen data and detect overfitting.",
    officialRef: "PCEI-30-01 Block 6.3 - Generalization & Overfitting",
    tags: ["train-test-split", "generalization", "overfitting", "evaluation"]
  },
  {
    id: "pcei-6-046",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.3",
    category: "Data Leakage",
    difficulty: "Intermediate",
    question: "What is 'Data Leakage' during the feature engineering and preprocessing phase of an AI project?",
    codeSnippet: "# Data Leakage Example:\n# Scaling features using statistics from the ENTIRE dataset BEFORE splitting!\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)  # BAD! Info from test set leaks into train set!\nX_train, X_test = train_test_split(X_scaled)",
    options: [
      "When information from outside the training dataset (such as target labels or test set statistics) inadvertently contaminates model training, causing unrealistically optimistic validation results",
      "When computer liquid cooling fluid leaks onto a server rack",
      "When someone accidentally emails a CSV file to an unauthorized recipient",
      "When a hard drive runs out of sectors to write data"
    ],
    correctAnswer: 0,
    explanation: "Data leakage occurs when test set signals (e.g., test set mean/variance during scaling, or future target information) leak into the training process. The model appears to perform brilliantly during training but collapses when exposed to genuine unseen data in production.",
    officialRef: "PCEI-30-01 Block 6.3 - Data Leakage",
    tags: ["data-leakage", "pipeline-integrity", "preprocessing-pitfalls"]
  },
  {
    id: "pcei-6-047",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.3",
    category: "k-Nearest Neighbors (k-NN)",
    difficulty: "Beginner",
    question: "How does the simple k-Nearest Neighbors (k-NN) classification algorithm make predictions for a new, unseen sample?",
    codeSnippet: "# k-NN intuition:\n# Find the k closest data points in feature space using Euclidean distance;\n# assign the majority class label among those k neighbors!",
    options: [
      "It calculates the geometric distance to all training points and assigns the majority class among the 'k' closest neighbors",
      "It trains a 50-layer deep convolutional neural network",
      "It constructs a decision tree based on information entropy",
      "It solves a system of differential equations"
    ],
    correctAnswer: 0,
    explanation: "k-NN is an intuitive instance-based learning algorithm. It stores the training examples, calculates geometric distance (e.g., Euclidean) between the new query point and all training instances, and assigns the mode (majority vote) of the nearest k points.",
    officialRef: "PCEI-30-01 Block 6.3 - k-NN Algorithm",
    tags: ["knn", "classification", "instance-based-learning"]
  },
  {
    id: "pcei-6-048",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.3",
    category: "Feature Scaling",
    difficulty: "Intermediate",
    question: "Why is feature scaling (e.g., StandardScaler or MinMaxScaler) critical before applying distance-based models like k-NN or SVM?",
    codeSnippet: "# Scale Disparity:\n# Feature 1: Age (range 20 to 80)\n# Feature 2: Annual Income (range $20,000 to $500,000)\n# Without scaling, Income completely dominates Euclidean distance calculations!",
    options: [
      "Because features with large numerical magnitudes will mathematically dominate distance metrics, rendering features with smaller numerical ranges virtually irrelevant",
      "Because unscaled numbers cause integer overflow in Python",
      "Because scikit-learn will refuse to import unless all numbers are between 0 and 1",
      "Because scaling improves image screen resolution"
    ],
    correctAnswer: 0,
    explanation: "Distance calculations (like Euclidean distance in k-NN and SVM) compute differences squared. If feature A has a scale in thousands while feature B has a scale from 0 to 1, feature A will completely dominate the distance metric unless standardized.",
    officialRef: "PCEI-30-01 Block 6.3 - Feature Scaling",
    tags: ["feature-scaling", "standardscaler", "distance-metrics", "knn"]
  },
  {
    id: "pcei-6-049",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.3",
    category: "Model Evaluation Metrics",
    difficulty: "Beginner",
    question: "Which metric is most appropriate for evaluating a binary classification model when the dataset is severely imbalanced (e.g., 99% negative, 1% positive)?",
    codeSnippet: "# Imbalanced Data:\n# 990 negative samples, 10 positive samples\n# A naive classifier predicting all Negative gets 99% Accuracy, but catches 0% of positives!",
    options: [
      "Precision, Recall, and F1-Score (or PR-AUC)",
      "Raw Overall Accuracy",
      "Mean Squared Error (MSE)",
      "Coefficient of Determination (R\u00b2)"
    ],
    correctAnswer: 0,
    explanation: "When class distributions are heavily skewed (e.g., fraud, disease detection), raw Accuracy is misleading because a trivial model predicting only the majority class achieves high accuracy while missing every target. Precision, Recall, and F1-Score focus on performance on the positive minority class.",
    officialRef: "PCEI-30-01 Block 6.3 - Imbalanced Classification Metrics",
    tags: ["precision", "recall", "f1-score", "imbalanced-data"]
  },
  {
    id: "pcei-6-050",
    track: 'pcei',
    section: "Section 6",
    chapter: "6.3",
    category: "Confusion Matrix",
    difficulty: "Beginner",
    question: "What does a 'False Positive' represent in a medical cancer screening test?",
    codeSnippet: "# Confusion Matrix:\n# Actual Cancer = False, Model Predicted = True -> False Positive (Type I Error)\n# Actual Cancer = True, Model Predicted = False -> False Negative (Type II Error)",
    options: [
      "The model predicts the patient has cancer when they are actually healthy (Type I error)",
      "The model correctly identifies that the patient has cancer",
      "The model predicts the patient is healthy when they actually have cancer",
      "The laboratory test was dropped on the floor"
    ],
    correctAnswer: 0,
    explanation: "A False Positive (Type I error) occurs when the model predicts the positive condition (has cancer / fraud) when the actual ground truth is negative (healthy / legitimate).",
    officialRef: "PCEI-30-01 Block 6.3 - Confusion Matrix Terminology",
    tags: ["false-positive", "confusion-matrix", "type-1-error"]
  }
];
