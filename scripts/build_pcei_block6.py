#!/usr/bin/env python3
"""
Generator for PCEI Block 6: AI Projects, Collaboration, and Communication (100 Cards)
Covers Chapters 6.1 - 6.5 for PCEI-30-01.
"""
import json

cards = []

def add_c(id_num, chap, cat, diff, q, snippet, opts, ans, exp, ref, tags):
    cards.append({
        "id": f"pcei-6-{id_num:03d}",
        "section": "Section 6",
        "chapter": chap,
        "category": cat,
        "difficulty": diff,
        "question": q,
        "codeSnippet": snippet,
        "options": opts,
        "correctAnswer": ans,
        "explanation": exp,
        "officialRef": ref,
        "tags": tags
    })

# ==========================================
# CHAPTER 6.1: Identify Opportunities for AI Solutions in Real-World Contexts (Cards 1-20)
# ==========================================
add_c(1, "6.1", "AI Feasibility", "Beginner",
      "Which of the following problems is best suited for an Artificial Intelligence or Machine Learning approach rather than traditional deterministic programming?",
      "# Problem types:\n# A) Calculating sales tax based on exact city/state statutory tax brackets\n# B) Classifying incoming customer support emails into sentiment categories\n# C) Sorting an array of customer IDs numerically\n# D) Formatting dates from 'YYYY-MM-DD' to 'DD/MM/YYYY'",
      ["Classifying customer support emails into sentiment categories (positive, neutral, negative)",
       "Calculating sales tax based on exact statutory tax brackets",
       "Sorting an array of customer IDs numerically",
       "Formatting dates from 'YYYY-MM-DD' to 'DD/MM/YYYY'"],
      0,
      "AI and Machine Learning excel at complex pattern recognition, natural language comprehension, and handling unstructured data where explicit deterministic rules are too fragile or difficult to codify. Tasks with fixed, statutory mathematical rules (like tax calculation or date formatting) should always use traditional programming.",
      "PCEI-30-01 Block 6.1 - Opportunities for AI Solutions",
      ["ai-opportunities", "problem-selection", "ml-vs-traditional"])

add_c(2, "6.1", "AI vs Traditional Programming", "Beginner",
      "How does the fundamental problem-solving paradigm of Machine Learning differ from traditional software programming?",
      "# Traditional Programming:\n# Data + Rules  --> Answers\n# Machine Learning:\n# Data + Answers --> Rules (Model)",
      ["Traditional programming combines Data and explicit Rules to produce Answers; Machine Learning combines Data and Answers to learn the underlying Rules (Model)",
       "Traditional programming requires a GPU, whereas Machine Learning runs exclusively in CPU registers",
       "Machine Learning guarantees 100% mathematical precision with zero errors, whereas traditional code is inherently stochastic",
       "Traditional programming cannot accept numbers as input"],
      0,
      "In traditional programming, software engineers manually write explicit algorithmic rules. In Machine Learning, an algorithm analyzes historical data and corresponding known answers/outcomes to infer the statistical rules and patterns automatically.",
      "PCEI-30-01 Block 6.1 - AI Paradigms",
      ["programming-paradigm", "ml-foundations", "rules-vs-data"])

add_c(3, "6.1", "When NOT to Use AI", "Intermediate",
      "In which scenario is applying Machine Learning generally INAPPROPRIATE or inadvisable?",
      "# Considerations:\n# 1. 100% deterministic precision required by law/audit\n# 2. Complete absence of historical training data\n# 3. Simple static mathematical formulas exist (e.g. Gross Profit = Revenue - Cost)",
      ["When exact 100% deterministic precision is required and a known, unambiguous mathematical formula exists with zero tolerance for probabilistic error",
       "When predicting future churn among thousands of mobile subscribers based on behavioral telemetry",
       "When detecting fraudulent credit card transactions from high-dimensional purchase streams",
       "When transcribing audio speech into text transcripts"],
      0,
      "ML models are fundamentally probabilistic and produce statistical approximations. When a problem has strict, deterministic statutory formulas (e.g., payroll calculations, cryptographic hashing, or accounting balances) with zero tolerance for probabilistic variance, traditional rule-based code is required.",
      "PCEI-30-01 Block 6.1 - AI Limitations & Suitability",
      ["problem-selection", "rule-based", "decision-framework"])

add_c(4, "6.1", "Problem Formulation", "Beginner",
      "What is the first step in scoping a real-world AI project?",
      "# Project lifecycle stage 1:\n# Clarify objective, determine input X and target y, and assess feasibility",
      ["Translating a vague business need into a concrete, measurable machine learning problem (defining inputs, target variable, and success metrics)",
       "Purchasing 100 GPU servers immediately",
       "Writing 10,000 lines of complex neural network architecture in PyTorch",
       "Deploying an untrained model directly into production"],
      0,
      "Before writing any code or training models, AI practitioners must formulate the problem: translating ambiguous business goals into well-defined mathematical tasks (e.g., classification, regression, clustering), identifying available inputs (features) and desired outputs (labels), and establishing evaluation criteria.",
      "PCEI-30-01 Block 6.1 - Scoping & Feasibility",
      ["problem-formulation", "project-scoping", "planning"])

add_c(5, "6.1", "Problem Mapping", "Beginner",
      "An e-commerce store wants to estimate the exact dollar amount a new customer will spend over their first 12 months. What ML problem formulation is this?",
      "# Input: Customer demographics, first session clicks, acquisition channel\n# Output: Continuous dollar value (e.g., $342.50)",
      ["Regression (continuous numerical prediction)",
       "Binary Classification (True/False prediction)",
       "Unsupervised Clustering (grouping unlabeled data)",
       "Dimensionality Reduction"],
      0,
      "Predicting a continuous numerical quantity (such as lifetime dollar value, housing price, or temperature) is formulated as a Regression problem.",
      "PCEI-30-01 Block 6.1 - ML Problem Types",
      ["regression", "problem-types", "customer-lifetime-value"])

add_c(6, "6.1", "Problem Mapping", "Beginner",
      "A bank wants an automated system to flag whether an outgoing wire transfer is 'Fraudulent' or 'Legitimate'. What ML problem formulation is this?",
      "# Input: Transaction amount, location, timestamp, device fingerprint\n# Output: Label in {'Fraudulent', 'Legitimate'}",
      ["Binary Classification (categorical prediction into two distinct classes)",
       "Continuous Regression",
       "Reinforcement Learning without feedback",
       "Text Summarization"],
      0,
      "Classifying instances into one of two mutually exclusive categories (Fraud vs. Legitimate, Spam vs. Not Spam, Positive vs. Negative) is a Binary Classification problem.",
      "PCEI-30-01 Block 6.1 - Binary Classification",
      ["classification", "fraud-detection", "problem-mapping"])

add_c(7, "6.1", "Problem Mapping", "Beginner",
      "A streaming platform wants to segment its millions of users into behavioral clusters without having any pre-existing user categories or labels. What ML approach is needed?",
      "# Input: Unlabeled listening history, frequency, genres\n# Output: Discovered clusters of similar users",
      ["Unsupervised Learning (specifically Clustering, such as k-Means or DBSCAN)",
       "Supervised Linear Regression",
       "Supervised Binary Classification",
       "Rule-based unit testing"],
      0,
      "When training data lacks ground-truth labels and the objective is to discover latent patterns, affinities, or natural groupings among instances, Unsupervised Clustering is the appropriate formulation.",
      "PCEI-30-01 Block 6.1 - Unsupervised Clustering",
      ["clustering", "unsupervised-learning", "user-segmentation"])

add_c(8, "6.1", "Recommendation Systems", "Beginner",
      "What type of AI application suggests relevant books or movies to users based on their past ratings and similarities to other users?",
      "# User-Item interaction matrix:\n# Recommendations = collaborative_filtering(user_history, community_ratings)",
      ["Recommendation System (Recommender Engine)",
       "Computer Vision Optical Character Recognition (OCR)",
       "Static database sorting query",
       "Speech synthesizer"],
      0,
      "Recommendation Systems utilize collaborative filtering, content-based filtering, or hybrid models to predict user preferences and suggest items (e.g., movies, products, articles) they are most likely to engage with.",
      "PCEI-30-01 Block 6.1 - Recommendation Systems",
      ["recommender-systems", "collaborative-filtering", "ai-use-cases"])

add_c(9, "6.1", "Data Feasibility", "Intermediate",
      "Why is 'Data Availability and Quality' the single greatest bottleneck determining AI project feasibility?",
      "# ML Axiom: Garbage In, Garbage Out (GIGO)\n# Without representative, cleanly labeled, and accessible training data, no ML algorithm can succeed.",
      ["Because machine learning models learn patterns exclusively from empirical data; missing, corrupt, heavily biased, or unlabelled data directly prevents successful learning",
       "Because modern CPUs refuse to execute Python scripts unless a 1 Terabyte file is attached",
       "Because data quality only affects the download speed of the code repository",
       "Because neural networks can only train on synthetic data generated by quantum computers"],
      0,
      "Data is the foundation of machine learning ('Garbage In, Garbage Out'). If sufficient, accurate, relevant, and representative historical data is unavailable or prohibitively noisy, building a viable ML system is mathematically infeasible.",
      "PCEI-30-01 Block 6.1 - Data Feasibility",
      ["data-feasibility", "data-quality", "gigo"])

add_c(10, "6.1", "Latency & Constraints", "Intermediate",
      "An autonomous vehicle collision-avoidance system requires real-time braking decisions within 15 milliseconds. What critical project constraint must be evaluated?",
      "# Constraint Check:\n# Cloud API latency = 250ms roundtrip (FAILS requirement)\n# On-device Edge inference = 8ms (SUCCEEDS requirement)",
      ["Inference latency and hardware compute constraints (edge deployment vs. cloud roundtrip latency)",
       "The visual color scheme of the car's navigation dashboard",
       "The number of social media followers the automotive company has",
       "The brand of mouse used by the software developers"],
      0,
      "Real-time safety-critical systems impose strict latency constraints. Round-trip cloud network calls (100-300ms) are far too slow for sub-20ms braking decisions, requiring lightweight on-device edge AI models optimized for local hardware.",
      "PCEI-30-01 Block 6.1 - Project Constraints",
      ["latency", "edge-ai", "real-time", "constraints"])

add_c(11, "6.1", "Target Variable Definition", "Intermediate",
      "In a project predicting equipment failure in a factory, what is the 'Target Variable' (Label)?",
      "# Factory sensor data:\n# Features X = [temperature, vibration_rpm, oil_pressure, hours_run]\n# Target y = ?",
      ["The operational status outcome to be predicted (e.g., 1 for 'Will Fail within 48 Hours', 0 for 'Normal Operation')",
       "The physical weight of the machinery in metric tons",
       "The name of the technician who installed the machine",
       "The SQL database connection string"],
      0,
      "The Target Variable (often denoted as 'y' or the label) is the specific outcome or ground truth that the supervised machine learning model is trained to predict from input features (X).",
      "PCEI-30-01 Block 6.1 - Target Variable",
      ["target-variable", "labels", "supervised-learning"])

add_c(12, "6.1", "Business Metric Alignment", "Intermediate",
      "Why must AI engineers align technical model evaluation metrics (e.g., ROC-AUC, F1-score) with business objectives?",
      "# Alignment Example:\n# Hospital triage model with 99% accuracy might fail business goals if it misses 100% of rare fatal heart attacks (High False Negatives!)",
      ["Because a technically high accuracy score is useless or disastrous if it fails the real-world business objective (such as minimizing costly false negatives or maximizing user retention)",
       "Because Python code cannot compile unless a CEO approves the cost function",
       "Because scikit-learn will throw a TypeError if profit margins are not passed into fit()",
       "Because business stakeholders always prefer reading raw loss matrices over profit metrics"],
      0,
      "A model can achieve 99% overall accuracy on an imbalanced dataset by simply predicting the majority class every time, yet completely fail the business mission (e.g., catching cancer or detecting credit card fraud). Technical metrics must reflect actual operational costs and risks.",
      "PCEI-30-01 Block 6.1 - Business Alignment",
      ["business-metrics", "kpis", "evaluation"])

add_c(13, "6.1", "Rule-Based vs AI", "Beginner",
      "A company wants to route incoming inquiries: 'If billing, send to accounting; if password, send to IT'. What is the most practical initial approach?",
      "# Simple deterministic rules:\nif 'invoice' in text or 'charge' in text:\n    route('accounting')\nelif 'password' in text or 'login' in text:\n    route('it')",
      ["Start with simple keyword matching / rule-based logic; only introduce NLP/ML if linguistic variability and ambiguity render rules ineffective",
       "Train a multi-billion parameter transformer model from scratch immediately",
       "Hire a team of 50 data scientists to build an ensemble of deep neural networks",
       "Abandon the project because rule-based software is obsolete"],
      0,
      "The best engineering practice follows Occam's razor: start with the simplest viable solution (simple heuristics or regex rules). Only introduce machine learning complexity when deterministic rules fail to handle natural variations, idioms, and nuances.",
      "PCEI-30-01 Block 6.1 - Solution Selection",
      ["rule-based", "baseline", "engineering-pragmatism"])

add_c(14, "6.1", "Data Privacy & Legal Constraints", "Intermediate",
      "Before initiating an AI project utilizing patient health records, which feasibility factor must take priority?",
      "# Legal & Compliance Gate:\n# HIPAA / GDPR: Storing or processing protected health information (PHI) requires strict anonymization and legal consent.",
      ["Legal, regulatory, and privacy compliance (e.g., HIPAA, GDPR, patient consent, and data anonymization)",
       "Deciding whether to use light mode or dark mode in the IDE",
       "Choosing between Python 3.11 and Python 3.12",
       "Selecting an aesthetic chart color for matplotlib"],
      0,
      "Legal and regulatory compliance is an absolute prerequisite. Processing protected personal, financial, or medical data without regulatory adherence (HIPAA, GDPR) exposes organizations to catastrophic liabilities and halts projects before deployment.",
      "PCEI-30-01 Block 6.1 - Legal & Privacy Constraints",
      ["gdpr", "hipaa", "compliance", "privacy"])

add_c(15, "6.1", "Anomaly Detection", "Intermediate",
      "A nuclear power plant needs to detect unusual sensor behaviors that have never occurred before. Which ML formulation is most appropriate?",
      "# Problem:\n# Normal operational data is abundant; failure instances are virtually non-existent or unknown in advance.\n# Approach: Learn normal baseline, flag deviations!",
      ["Anomaly Detection / Outlier Detection (learning normal patterns and flagging statistical anomalies)",
       "Supervised Classification with balanced 50/50 classes",
       "Static table lookup",
       "Linear Regression predicting turbine temperature from year"],
      0,
      "When failures are rare, catastrophic, or never seen in training history, supervised learning cannot be used because failure labels do not exist. Anomaly detection models the distribution of 'normal' operations and triggers alerts on significant deviations.",
      "PCEI-30-01 Block 6.1 - Anomaly Detection",
      ["anomaly-detection", "outliers", "predictive-maintenance"])

add_c(16, "6.1", "Generative AI Feasibility", "Beginner",
      "A marketing team wants to automatically draft varied product descriptions for 5,000 new retail catalog items. Which AI capability fits best?",
      "# Input: Item attributes (fabric: cotton, color: navy, style: casual polo)\n# Output: Engaging marketing paragraph",
      ["Generative AI (Large Language Model text generation with structured prompting)",
       "K-Means Clustering",
       "Linear Regression",
       "Principal Component Analysis (PCA)"],
      0,
      "Generative AI and Large Language Models (LLMs) are uniquely suited for natural language generation tasks, synthesizing engaging, coherent descriptive text from structured bullet points or product attributes.",
      "PCEI-30-01 Block 6.1 - Generative AI Use Cases",
      ["generative-ai", "llm", "copywriting", "text-generation"])

add_c(17, "6.1", "Human-in-the-Loop", "Intermediate",
      "When planning an AI system for high-stakes medical diagnoses or judicial parole recommendations, what operational architecture is strongly recommended?",
      "# Decision Architecture:\n# Model -> Generates recommendation with confidence score -> Qualified Human Expert approves/rejects",
      ["Human-in-the-Loop (HITL), where the AI acts as an assistive decision-support tool and final decisions require human verification",
       "Fully autonomous execution without any human logging or oversight",
       "Random coin-flipping to prevent algorithmic fatigue",
       "Hardcoding all decisions to the majority class"],
      0,
      "In high-stakes domains with severe ethical, legal, or health consequences, AI should be deployed as decision support ('Human-in-the-Loop'), providing insights, probabilities, and highlights while preserving ultimate human accountability and judgment.",
      "PCEI-30-01 Block 6.1 - Human-in-the-Loop",
      ["human-in-the-loop", "hitl", "decision-support", "ethics"])

add_c(18, "6.1", "Feasibility Checklist", "Beginner",
      "Which three core criteria form the foundational feasibility triad for any proposed AI project?",
      "# Feasibility Triad:\n# 1. Technical/Data Feasibility (Do we have quality data and viable algorithms?)\n# 2. Business Feasibility (Does the ROI justify the cost?)\n# 3. Ethical/Regulatory Feasibility (Is it legal, safe, and fair?)",
      ["Technical feasibility (data/models), Business feasibility (ROI/value), and Ethical/Legal feasibility (compliance/safety)",
       "Monitor size, keyboard brand, and desk ergonomics",
       "Number of git branches, commit messages, and repository stars",
       "Electricity voltage, mouse sensitivity, and browser bookmarks"],
      0,
      "A viable AI project requires all three pillars: (1) Technical/Data feasibility (can it be built with sufficient data?), (2) Business feasibility (does it deliver measurable value exceeding cost?), and (3) Ethical/Legal feasibility (is it compliant and fair?).",
      "PCEI-30-01 Block 6.1 - Feasibility Triad",
      ["feasibility", "roi", "planning", "business-case"])

add_c(19, "6.1", "Minimum Viable Product (MVP)", "Beginner",
      "What is the primary objective of building a Minimum Viable Product (MVP) in an AI project?",
      "# MVP workflow:\n# Simple heuristic or baseline model -> Test on sample users -> Validate value quickly before heavy investment",
      ["To validate core assumptions, test end-to-end data flow, and demonstrate practical utility with minimal time and resource investment",
       "To write all possible features and train the largest possible neural network on day one",
       "To immediately patent every line of code without testing",
       "To avoid speaking with stakeholders or users until launch"],
      0,
      "An AI MVP allows teams to rapidly test end-to-end feasibility, validate data pipelines, gather user feedback, and prove business value with simple models before investing extensive capital in complex architectures.",
      "PCEI-30-01 Block 6.1 - AI MVP",
      ["mvp", "agile", "prototyping", "project-management"])

add_c(20, "6.1", "Project Failure Modes", "Intermediate",
      "What is one of the most common reasons why enterprise AI proofs-of-concept (PoCs) fail to transition into production?",
      "# PoC Trap:\n# Works in isolated Jupyter notebook with clean static CSV, but fails when exposed to messy, changing, real-time live data streams with missing values.",
      ["Data drift, pipeline integration challenges, and failure to account for real-world operational constraints outside clean static notebooks",
       "Python running out of variable names",
       "SQL databases becoming illegal",
       "Computers running too cold during winter months"],
      0,
      "Many AI prototypes work on curated, static historical CSVs in Jupyter notebooks, but fail in production due to messy real-time data feeds, latency bottlenecks, infrastructure mismatches, data drift, and lack of integration with enterprise systems.",
      "PCEI-30-01 Block 6.1 - AI Production Realities",
      ["production-ml", "poc-to-prod", "data-drift", "deployment"])

# ==========================================
# CHAPTER 6.2: Recognize Basic Cost Considerations When Planning AI Projects (Cards 21-40)
# ==========================================
add_c(21, "6.2", "Cost Components", "Beginner",
      "Which of the following is typically a major recurring operating cost (OpEx) for deployed Machine Learning systems?",
      "# AI Lifecycle Costs:\n# - Upfront: Data collection, model development\n# - Recurring: Cloud GPU/CPU inference compute, API tokens, continuous monitoring & retraining",
      ["Inference compute infrastructure (cloud GPU/CPU hosting, serverless instances, or per-token API fees)",
       "The initial purchase of Python licenses (Python is free open-source)",
       "Paying copyright fees for using the 'import' statement",
       "Replacing physical keyboard keys worn out by typing code"],
      0,
      "While Python and open-source libraries are free, hosting production models for continuous inference, processing API queries, and provisioning scalable cloud servers (especially GPUs/TPUs) represent major ongoing operational expenditures.",
      "PCEI-30-01 Block 6.2 - AI Cost Considerations",
      ["ai-costs", "cloud-compute", "inference-costs", "opex"])

add_c(22, "6.2", "Data Labeling Costs", "Beginner",
      "Why is high-quality human data labeling often one of the most expensive phases of supervised machine learning?",
      "# Labeling 50,000 medical scans:\n# 50,000 images * $15/image (board-certified radiologist) = $750,000 labeling cost!",
      ["Because manually annotating tens of thousands of examples requires substantial human labor, domain expertise, and rigorous quality verification",
       "Because computer hard drives charge a tax per labeled byte",
       "Because human labelers must build physical wooden frames for digital images",
       "Because data labels expire after 24 hours if not uploaded"],
      0,
      "Supervised learning requires ground-truth labels. Labeling vast datasets (e.g., segmenting tumors in MRI scans, classifying legal contracts, or tagging bounding boxes) is labor-intensive and frequently requires costly domain specialists.",
      "PCEI-30-01 Block 6.2 - Data Labeling Costs",
      ["data-labeling", "annotation", "costs", "ground-truth"])

add_c(23, "6.2", "Model Selection Economics", "Intermediate",
      "When should a team prefer using an existing pre-trained open-source or commercial foundation model over training a custom model from scratch?",
      "# Decision Tree:\n# Training GPT-4 / Llama-3 from scratch: Millions of dollars in GPU compute & petabytes of data\n# Pre-trained / Fine-tuning: Hours of compute, thousands of dollars, immediate state-of-the-art results",
      ["In almost all standard NLP and computer vision tasks, because pre-trained models require orders of magnitude less data, time, and computational budget",
       "Only when the company has zero internet connectivity",
       "Only when the custom dataset contains fewer than 3 rows",
       "Never; training a model from scratch is always cheaper than downloading pre-trained weights"],
      0,
      "Training large deep learning models from scratch costs millions of dollars in compute, energy, and specialized engineering. Transfer learning and leveraging pre-trained foundation models provide massive cost savings and state-of-the-art accuracy.",
      "PCEI-30-01 Block 6.2 - Pre-trained Models vs Scratch",
      ["pre-trained-models", "transfer-learning", "economics", "compute-costs"])

add_c(24, "6.2", "API vs Self-Hosting", "Intermediate",
      "What is a primary economic advantage of consuming external AI via commercial APIs (e.g., OpenAI, Google Cloud AI) for low-to-medium traffic applications?",
      "# API Model:\n# Cost = $0.002 per 1,000 tokens (Pay-as-you-go, $0 fixed monthly server cost)\n# Self-hosted GPU:\n# Cost = $1,500/month 24/7 dedicated GPU instance",
      ["Pay-as-you-go pricing: you only pay for actual API requests without maintaining expensive, idle, dedicated 24/7 GPU server infrastructure",
       "Commercial APIs run without using any electricity",
       "Commercial APIs eliminate the need for an internet connection",
       "Commercial APIs guarantee that all user data is publicly broadcast"],
      0,
      "Pay-per-token or pay-per-request API services eliminate the high fixed capital expenditure of dedicated GPU servers. For projects with moderate or unpredictable query volumes, serverless APIs are vastly more cost-effective.",
      "PCEI-30-01 Block 6.2 - Cloud APIs vs Self-Hosting",
      ["api-costs", "pay-as-you-go", "cloud-economics", "serverless"])

add_c(25, "6.2", "API vs Self-Hosting", "Intermediate",
      "At what point does self-hosting an open-source model (like Llama or Mistral) on dedicated hardware become cheaper than using paid commercial APIs?",
      "# Cost Crossover Analysis:\n# API Cost: $0.01 * 10,000,000 daily queries = $100,000/day!\n# Self-hosted Cluster: $5,000/month in cloud infrastructure costs",
      ["When query volume reaches massive sustained scale, where the cumulative per-token API costs exceed the fixed monthly cost of dedicated GPU servers",
       "When the project has fewer than 10 users per month",
       "When the code is transferred to a floppy disk",
       "Immediately upon creating a GitHub account"],
      0,
      "At hyper-scale (millions of daily queries), per-token API charges compound exponentially. Deploying self-hosted, quantized open-source models on dedicated hardware becomes significantly cheaper once fixed server costs undercut variable API fees.",
      "PCEI-30-01 Block 6.2 - Scale Economics",
      ["scale-economics", "crossover-point", "self-hosting", "inference"])

add_c(26, "6.2", "Compute Hardware Costs", "Beginner",
      "Why are GPUs (Graphics Processing Units) widely preferred over CPUs for training deep neural networks, despite their higher purchase and rental costs?",
      "# Hardware comparison:\n# CPU: 8-64 powerful cores, optimized for sequential logic\n# GPU: 1,000s of specialized tensor/ALU cores, parallelizing matrix multiplication 50x-100x faster!",
      ["GPUs have thousands of parallel cores optimized for massive matrix multiplication, training deep models in days rather than the months or years a CPU would require",
       "GPUs use less electricity than a single LED lightbulb",
       "CPUs are physically incapable of storing floating-point numbers",
       "GPUs are completely free when downloading Python"],
      0,
      "Deep learning is fundamentally massive parallel matrix algebra. GPUs process thousands of tensor operations concurrently, drastically reducing training time and overall cloud rental expenditure compared to running slow CPU instances for months.",
      "PCEI-30-01 Block 6.2 - Hardware Acceleration",
      ["gpu-vs-cpu", "parallel-compute", "hardware-costs", "deep-learning"])

add_c(27, "6.2", "Token Usage & Prompt Optimization", "Intermediate",
      "In commercial Large Language Model APIs, how does reducing prompt length directly reduce project costs?",
      "# API Billing Formula:\n# Total Cost = (Prompt_Tokens * Prompt_Rate) + (Completion_Tokens * Completion_Rate)\n# Trimming 1,000 unnecessary context tokens over 100,000 calls saves 100,000,000 tokens!",
      ["API providers bill based on token counts; concise prompts and compact system instructions directly lower per-request token consumption and overall billing",
       "Shorter prompts cause the API server to issue a 50% discount coupon",
       "Shorter prompts force the LLM to output binary machine code",
       "Token counts do not affect API pricing"],
      0,
      "LLM cloud APIs charge on a per-token basis for both input (prompt) and output (completion). Optimizing prompt structure, removing bloated examples, and using concise system prompts directly decreases token volume and operational costs.",
      "PCEI-30-01 Block 6.2 - Prompt Economics",
      ["token-cost", "prompt-engineering", "cost-optimization", "llm-apis"])

add_c(28, "6.2", "Data Storage Costs", "Beginner",
      "What storage consideration impacts long-term budget in computer vision and audio AI projects?",
      "# Multi-modal data scale:\n# 1,000,000 high-res training images = 10 Terabytes of raw storage + backups + versioned snapshots",
      ["Storing terabytes of raw high-resolution media, intermediate preprocessed artifacts, and versioned datasets incurs significant ongoing cloud storage and egress fees",
       "Image files shrink to zero bytes once trained on by a model",
       "Cloud storage providers provide infinite free storage for AI researchers",
       "Computer vision models delete the original photos after viewing them"],
      0,
      "Unstructured multimedia data (video, audio, high-res medical imagery) consumes vast cloud storage (AWS S3, Google Cloud Storage). Keeping multiple versioned copies, backups, and augmented datasets can add substantial monthly cloud storage costs.",
      "PCEI-30-01 Block 6.2 - Storage & Data Lifecycle Costs",
      ["storage-costs", "cloud-storage", "data-management", "computer-vision"])

add_c(29, "6.2", "Maintenance & Retraining Costs", "Intermediate",
      "Why does the cost of an AI project continue long after the initial model has been successfully trained and deployed?",
      "# Model Degradation:\n# Customer behavior changes -> Data drift occurs -> Accuracy drops -> Engineers must collect new data and retrain periodically!",
      ["Because models experience performance degradation over time (data and concept drift), requiring continuous monitoring, fresh data collection, and periodic retraining",
       "Because models physically wear out digital circuits on servers",
       "Because Python requires an annual subscription renewal fee for every function",
       "Because machine learning weights evaporate if not continuously cooled with liquid nitrogen"],
      0,
      "Deploying a model is not a one-time event. Real-world patterns shift over time (data drift, macroeconomic changes, evolving fraud tactics). Maintaining accuracy requires ongoing monitoring, logging infrastructure, engineer salaries, and retraining pipelines.",
      "PCEI-30-01 Block 6.2 - Ongoing Maintenance & Drift",
      ["maintenance", "concept-drift", "retraining", "mlops"])

add_c(30, "6.2", "Free vs Paid AI Tools", "Beginner",
      "Which tool in the standard Python AI ecosystem is open-source and free of licensing fees for commercial development?",
      "# Python AI Stack:\nimport numpy as np\nimport pandas as pd\nfrom sklearn.ensemble import RandomForestClassifier",
      ["scikit-learn (along with Python, NumPy, and pandas)",
       "Proprietary cloud API endpoints",
       "Dedicated private GPU cloud instances",
       "Commercial data labeling agency contracts"],
      0,
      "Core Python libraries including scikit-learn, pandas, NumPy, PyTorch, and TensorFlow are open-source and released under permissive licenses (e.g., BSD, Apache 2.0), allowing royalty-free commercial development.",
      "PCEI-30-01 Block 6.2 - Open-Source Tools",
      ["open-source", "scikit-learn", "licensing", "software-costs"])

add_c(31, "6.2", "Rate Limiting & Cold Starts", "Intermediate",
      "What hidden operational risk comes with relying on free or low-tier AI cloud APIs for production user traffic?",
      "# Free Tier Limitations:\n# - Strict rate limits: 3 requests/minute -> HTTP 429 Too Many Requests\n# - Cold start delays: 30-second initialization pauses",
      ["Strict rate limits (throttling with HTTP 429 errors), unpredictable cold-start latency, and lack of Service Level Agreements (SLAs) for uptime",
       "The API server sending physical mail to your office",
       "The computer crashing permanently",
       "All python files being automatically renamed"],
      0,
      "Free and budget cloud tiers enforce strict rate limits (queries per second/minute) and experience cold-start latency spikes. Without commercial SLAs, production applications will fail or hang during traffic bursts.",
      "PCEI-30-01 Block 6.2 - Cloud API Limitations",
      ["rate-limits", "cold-starts", "sla", "operational-risk"])

add_c(32, "6.2", "Model Quantization Savings", "Intermediate",
      "How does 'Model Quantization' (e.g., converting 32-bit floating point weights to 8-bit or 4-bit integers) dramatically reduce deployment costs?",
      "# Weight precision reduction:\n# FP32 model: 16 GB VRAM needed (Requires expensive $10k GPU)\n# INT4 quantized: 3.5 GB VRAM needed (Runs smoothly on consumer hardware or low-cost cloud instances!)",
      ["It reduces memory footprint (VRAM/RAM) and computational requirements, allowing models to run on cheaper hardware or edge devices with minimal accuracy loss",
       "It deletes 90% of the training data from disk",
       "It changes the language of the code from Python to HTML",
       "It converts images from RGB to black and white"],
      0,
      "Quantization compresses neural network parameters from 32-bit floats to 8-bit or 4-bit representations. This drastically slashes GPU memory (VRAM) demands, enabling deployment on lower-tier cloud instances or local laptops without massive cost.",
      "PCEI-30-01 Block 6.2 - Model Quantization",
      ["quantization", "vram", "compression", "cost-reduction"])

add_c(33, "6.2", "Synthetic Data Economics", "Intermediate",
      "Why are organizations increasingly exploring 'Synthetic Data' generation to control AI project budgets?",
      "# Synthetic data:\n# Writing a script to simulate 100,000 edge-case driving scenarios instead of driving 5,000,000 real miles with physical cars.",
      ["It can generate large volumes of accurately pre-labeled training data programmatically at a fraction of the cost and time of physical data collection and manual human labeling",
       "Synthetic data is legally exempt from computer processing",
       "Synthetic data makes Python run 1,000 times faster",
       "Synthetic data permanently eliminates the need for software testing"],
      0,
      "Generating synthetic data (via simulation, 3D engines, or generative models) provides instant, perfectly labeled training examples, particularly for dangerous or rare edge cases (e.g., self-driving car crashes), drastically reducing physical collection and labeling costs.",
      "PCEI-30-01 Block 6.2 - Synthetic Data Economics",
      ["synthetic-data", "data-collection", "cost-efficiency"])

add_c(34, "6.2", "Active Learning Cost Optimization", "Intermediate",
      "What is 'Active Learning' and how does it optimize data annotation budgets?",
      "# Active Learning cycle:\n# 1. Model evaluates 100,000 unlabeled samples\n# 2. Only routes the 2,000 samples with highest predictive uncertainty to human annotators!",
      ["An algorithmic strategy where the model queries human annotators to label only the most ambiguous or uncertain data points, maximizing learning while minimizing labeling expenses",
       "A fitness routine for machine learning engineers",
       "A technique that forces the computer to train without consuming electricity",
       "Automatically labeling data using random coin tosses"],
      0,
      "Active learning prioritizes human labeling effort on samples where the current model is most uncertain. Instead of spending budget labeling 100,000 redundant examples, teams label only the most informative subset, slashing annotation costs by up to 80%.",
      "PCEI-30-01 Block 6.2 - Active Learning",
      ["active-learning", "annotation-budget", "sampling-efficiency"])

add_c(35, "6.2", "Batch vs Real-Time Inference Costs", "Intermediate",
      "Why is 'Batch Inference' (offline scheduled processing) generally far more cost-effective than 'Real-Time Inference' (online 24/7 web endpoints)?",
      "# Real-Time: Requires dedicated 24/7 server running, ready to answer in <100ms\n# Batch: Spin up ephemeral cheap spot instances, process 1,000,000 records at 2 AM, immediately shut down server!",
      ["Batch processing allows models to maximize hardware utilization and leverage ephemeral spot/discounted instances, spinning down servers completely when idle",
       "Batch processing eliminates the need for data to exist",
       "Real-time inference is prohibited by open-source licenses",
       "Batch processing guarantees zero predictive error"],
      0,
      "Real-time endpoints require low-latency 24/7 active servers with headroom for traffic spikes, leading to idle waste. Batch processing bundles predictions (e.g., nightly recommendation updates), running on cheap ephemeral instances that terminate immediately upon completion.",
      "PCEI-30-01 Block 6.2 - Batch vs Real-Time Economics",
      ["batch-inference", "real-time", "spot-instances", "infrastructure-cost"])

add_c(36, "6.2", "Environmental & Energy Costs", "Beginner",
      "What environmental consideration has become a major topic in large-scale AI project planning?",
      "# Carbon Footprint:\n# Training a single massive frontier model can consume megawatt-hours of electricity, generating metric tons of CO2.",
      ["The carbon footprint, energy consumption, and water cooling demands of hyperscale AI data centers running continuous model training and inference",
       "The physical noise produced by monitor pixels",
       "The paper waste generated by printing Python source code",
       "The electromagnetic interference on analog TV antennas"],
      0,
      "Massive deep learning models demand substantial electrical power and cooling infrastructure. Modern AI governance and budget planning increasingly incorporate environmental impact, carbon footprint, and energy efficiency metrics.",
      "PCEI-30-01 Block 6.2 - Environmental Impact",
      ["energy-consumption", "carbon-footprint", "green-ai", "sustainability"])

add_c(37, "6.2", "Vendor Lock-in Risks", "Intermediate",
      "What is 'Vendor Lock-in' and why is it a strategic financial risk in cloud AI planning?",
      "# Proprietary Cloud Lock-in:\n# Building an entire product tightly coupled to proprietary, closed-source cloud APIs\n# Risk: Vendor increases token prices 300% or deprecates the endpoint!",
      ["Becoming entirely dependent on a single cloud vendor's proprietary APIs and data formats, making it technically difficult and costly to switch if prices rise or services are discontinued",
       "Purchasing a laptop that cannot be opened",
       "Signing an agreement that forbids hiring programmers",
       "Using a keyboard that only types in uppercase"],
      0,
      "Relying heavily on closed, proprietary cloud AI services exposes companies to unexpected price hikes, terms-of-service changes, or service deprecation. Architecture abstractions that allow swapping models mitigate vendor lock-in.",
      "PCEI-30-01 Block 6.2 - Vendor Lock-in",
      ["vendor-lock-in", "cloud-risk", "financial-planning"])

add_c(38, "6.2", "Total Cost of Ownership (TCO)", "Intermediate",
      "In the context of enterprise AI, what does 'Total Cost of Ownership' (TCO) encompass beyond initial model training?",
      "# TCO Equation:\n# TCO = Data Gathering + Annotation + Infrastructure + Model Training + Security Audits + Ongoing Monitoring + MLOps Retraining + Incident Response",
      ["All direct and indirect expenses throughout the entire AI lifecycle, including data curation, compliance, infrastructure, deployment, monitoring, and ongoing human maintenance",
       "Only the initial invoice for purchasing the developer's laptop",
       "The exact price of the Python textbook used by the engineer",
       "Only the cost of electricity during the first hour of training"],
      0,
      "TCO calculates the full lifecycle financial burden. A model that is cheap to train may incur immense operational TCO if its complex pipeline requires constant manual oversight, frequent retraining, and high inference latency.",
      "PCEI-30-01 Block 6.2 - Total Cost of Ownership",
      ["tco", "lifecycle-costs", "mlops-budget"])

add_c(39, "6.2", "Open Source Licensing Costs", "Beginner",
      "Can a commercial business legally sell products built with software licensed under the MIT or Apache 2.0 open-source licenses?",
      "# Permissive Open Source (MIT / Apache 2.0):\n# Grants broad permission to use, modify, distribute, and sell software commercially without paying royalties.",
      ["Yes; MIT and Apache 2.0 are permissive open-source licenses that explicitly permit commercial use, modification, and distribution without royalty fees",
       "No; any commercial use of open-source software is strictly illegal",
       "Yes, but only if 50% of company stock is transferred to the Python Institute",
       "No; software must always be written entirely from scratch without libraries"],
      0,
      "Permissive licenses like MIT, Apache 2.0, and BSD allow commercial exploitation and closed proprietary distribution without software royalty fees, forming the legal bedrock of the open-source Python AI ecosystem.",
      "PCEI-30-01 Block 6.2 - Open Source Licensing",
      ["mit-license", "apache-2.0", "open-source", "licensing"])

add_c(40, "6.2", "Budget Contingency", "Intermediate",
      "Why is allocating a 20-30% budget contingency buffer particularly vital for Machine Learning research and development compared to standard web development?",
      "# R&D Uncertainty:\n# In standard web dev, building a login page is predictable.\n# In ML, an experimental hypothesis may fail to reach target accuracy, requiring new feature engineering or alternative data collection!",
      ["Because machine learning development is fundamentally experimental; achieving acceptable model accuracy cannot be guaranteed on the first iteration and often requires experimental pivots",
       "Because GPU prices increase every minute automatically",
       "Because Python charges random fines for indentation errors",
       "Because machine learning code cannot be saved without purchasing cloud credits"],
      0,
      "Unlike traditional software where requirements map directly to programmatic features, ML performance is bounded by data quality and statistical patterns. Unexpected data sparsity, noise, or baseline underperformance often necessitate additional iterations.",
      "PCEI-30-01 Block 6.2 - R&D Risk & Budgeting",
      ["budget-contingency", "experimental-nature", "ml-risk"])

# ==========================================
# CHAPTER 6.3: Apply Basic AI Development Steps to a Small Project (Cards 41-60)
# ==========================================
add_c(41, "6.3", "Project Workflow", "Beginner",
      "What is the standard, logical sequence of steps when developing a small supervised Machine Learning project?",
      "# Standard ML Pipeline Workflow:\n# 1. Define Problem -> 2. Ingest & Clean Data -> 3. Explore & Preprocess -> 4. Train Baseline -> 5. Evaluate & Tune -> 6. Deploy & Monitor",
      ["Problem Scoping -> Data Ingestion & Cleaning -> Exploratory Data Analysis -> Model Training -> Evaluation -> Deployment",
       "Model Deployment -> Model Training -> Data Cleaning -> Problem Scoping",
       "Model Evaluation -> Hyperparameter Tuning -> Data Collection -> Writing Documentation",
       "Writing Unit Tests -> Buying GPUs -> Deploying Empty Flask App -> Collecting Data"],
      0,
      "A principled ML project always begins with understanding the objective, followed by acquiring and understanding data, establishing baselines, tuning algorithms against rigorous evaluation metrics, and finally deploying with monitoring.",
      "PCEI-30-01 Block 6.3 - AI Project Lifecycle",
      ["project-lifecycle", "ml-workflow", "pipeline"])

add_c(42, "6.3", "Data Ingestion", "Beginner",
      "Which Python snippet correctly loads a comma-separated dataset into a pandas DataFrame for analysis?",
      "# Python data ingestion:\nimport pandas as pd\ndf = pd.read_csv('housing_data.csv')",
      ["import pandas as pd; df = pd.read_csv('housing_data.csv')",
       "import csv; df = csv.load_into_neural_net('housing_data.csv')",
       "df = open('housing_data.csv').fit_transform()",
       "import pandas as pd; df = pd.write_file('housing_data.csv')"],
      0,
      "The `pd.read_csv()` function in pandas is the standard and ubiquitous utility for loading tabular CSV files into an in-memory DataFrame for exploration and modeling.",
      "PCEI-30-01 Block 6.3 - Data Ingestion",
      ["pandas", "read_csv", "data-loading", "python"])

add_c(43, "6.3", "Missing Values", "Beginner",
      "Why must missing values (NaNs) be identified and resolved before feeding tabular data into standard scikit-learn estimators?",
      "# Missing value check:\nimport numpy as np\n# Standard estimators like LinearRegression, LogisticRegression, or SVC raise a ValueError if NaNs are present!",
      ["Standard scikit-learn algorithms (like LinearRegression or LogisticRegression) raise a ValueError if numerical arrays contain NaN values",
       "Missing values cause computer screens to flicker",
       "Missing values automatically delete the entire Python environment",
       "scikit-learn automatically substitutes random dictionary words for missing numbers"],
      0,
      "Most core classical machine learning estimators perform mathematical linear algebra operations that cannot compute with NaN (Not a Number) values, raising a ValueError unless imputed or dropped.",
      "PCEI-30-01 Block 6.3 - Handling Missing Values",
      ["missing-values", "nan", "scikit-learn", "data-cleaning"])

add_c(44, "6.3", "Baseline Model", "Beginner",
      "What is the purpose of establishing a simple 'Baseline Model' (e.g., DummyClassifier or simple linear regression) early in an AI project?",
      "# Establishing a baseline:\nfrom sklearn.dummy import DummyClassifier\ndummy = DummyClassifier(strategy='most_frequent')\ndummy.fit(X_train, y_train)\nbaseline_acc = dummy.score(X_test, y_test)",
      ["To set a minimum benchmark score that any complex model must clearly outperform to justify its computational complexity and maintenance overhead",
       "To serve as the final production deployment without further development",
       "To generate random test data for unit tests",
       "To ensure the CPU temperature remains above 80 degrees Celsius"],
      0,
      "A baseline model (such as always predicting the majority class or the historical mean) establishes a benchmark. If a complex deep neural network cannot beat a trivial baseline, the complex model is useless and poorly formulated.",
      "PCEI-30-01 Block 6.3 - Baseline Models",
      ["baseline-model", "benchmarking", "dummy-classifier"])

add_c(45, "6.3", "Train-Test Split", "Beginner",
      "Why must training data and test data be strictly separated before training any machine learning model?",
      "# Train-Test Separation:\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)",
      ["To evaluate how well the model generalizes to previously unseen data and to detect whether it has simply memorized (overfitted) the training examples",
       "To reduce the physical file size on the hard drive",
       "Because Python cannot fit models with more than 100 data rows",
       "To run half of the code on Windows and half on Linux"],
      0,
      "Evaluating a model on the data it was trained on only measures rote memorization. A clean, held-out test set is mandatory to measure generalization performance on real-world unseen data and detect overfitting.",
      "PCEI-30-01 Block 6.3 - Generalization & Overfitting",
      ["train-test-split", "generalization", "overfitting", "evaluation"])

add_c(46, "6.3", "Data Leakage", "Intermediate",
      "What is 'Data Leakage' during the feature engineering and preprocessing phase of an AI project?",
      "# Data Leakage Example:\n# Scaling features using statistics from the ENTIRE dataset BEFORE splitting!\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)  # BAD! Info from test set leaks into train set!\nX_train, X_test = train_test_split(X_scaled)",
      ["When information from outside the training dataset (such as target labels or test set statistics) inadvertently contaminates model training, causing unrealistically optimistic validation results",
       "When computer liquid cooling fluid leaks onto a server rack",
       "When someone accidentally emails a CSV file to an unauthorized recipient",
       "When a hard drive runs out of sectors to write data"],
      0,
      "Data leakage occurs when test set signals (e.g., test set mean/variance during scaling, or future target information) leak into the training process. The model appears to perform brilliantly during training but collapses when exposed to genuine unseen data in production.",
      "PCEI-30-01 Block 6.3 - Data Leakage",
      ["data-leakage", "pipeline-integrity", "preprocessing-pitfalls"])

add_c(47, "6.3", "k-Nearest Neighbors (k-NN)", "Beginner",
      "How does the simple k-Nearest Neighbors (k-NN) classification algorithm make predictions for a new, unseen sample?",
      "# k-NN intuition:\n# Find the k closest data points in feature space using Euclidean distance;\n# assign the majority class label among those k neighbors!",
      ["It calculates the geometric distance to all training points and assigns the majority class among the 'k' closest neighbors",
       "It trains a 50-layer deep convolutional neural network",
       "It constructs a decision tree based on information entropy",
       "It solves a system of differential equations"],
      0,
      "k-NN is an intuitive instance-based learning algorithm. It stores the training examples, calculates geometric distance (e.g., Euclidean) between the new query point and all training instances, and assigns the mode (majority vote) of the nearest k points.",
      "PCEI-30-01 Block 6.3 - k-NN Algorithm",
      ["knn", "classification", "instance-based-learning"])

add_c(48, "6.3", "Feature Scaling", "Intermediate",
      "Why is feature scaling (e.g., StandardScaler or MinMaxScaler) critical before applying distance-based models like k-NN or SVM?",
      "# Scale Disparity:\n# Feature 1: Age (range 20 to 80)\n# Feature 2: Annual Income (range $20,000 to $500,000)\n# Without scaling, Income completely dominates Euclidean distance calculations!",
      ["Because features with large numerical magnitudes will mathematically dominate distance metrics, rendering features with smaller numerical ranges virtually irrelevant",
       "Because unscaled numbers cause integer overflow in Python",
       "Because scikit-learn will refuse to import unless all numbers are between 0 and 1",
       "Because scaling improves image screen resolution"],
      0,
      "Distance calculations (like Euclidean distance in k-NN and SVM) compute differences squared. If feature A has a scale in thousands while feature B has a scale from 0 to 1, feature A will completely dominate the distance metric unless standardized.",
      "PCEI-30-01 Block 6.3 - Feature Scaling",
      ["feature-scaling", "standardscaler", "distance-metrics", "knn"])

add_c(49, "6.3", "Model Evaluation Metrics", "Beginner",
      "Which metric is most appropriate for evaluating a binary classification model when the dataset is severely imbalanced (e.g., 99% negative, 1% positive)?",
      "# Imbalanced Data:\n# 990 negative samples, 10 positive samples\n# A naive classifier predicting all Negative gets 99% Accuracy, but catches 0% of positives!",
      ["Precision, Recall, and F1-Score (or PR-AUC)",
       "Raw Overall Accuracy",
       "Mean Squared Error (MSE)",
       "Coefficient of Determination (R²)"],
      0,
      "When class distributions are heavily skewed (e.g., fraud, disease detection), raw Accuracy is misleading because a trivial model predicting only the majority class achieves high accuracy while missing every target. Precision, Recall, and F1-Score focus on performance on the positive minority class.",
      "PCEI-30-01 Block 6.3 - Imbalanced Classification Metrics",
      ["precision", "recall", "f1-score", "imbalanced-data"])

add_c(50, "6.3", "Confusion Matrix", "Beginner",
      "What does a 'False Positive' represent in a medical cancer screening test?",
      "# Confusion Matrix:\n# Actual Cancer = False, Model Predicted = True -> False Positive (Type I Error)\n# Actual Cancer = True, Model Predicted = False -> False Negative (Type II Error)",
      ["The model predicts the patient has cancer when they are actually healthy (Type I error)",
       "The model correctly identifies that the patient has cancer",
       "The model predicts the patient is healthy when they actually have cancer",
       "The laboratory test was dropped on the floor"],
      0,
      "A False Positive (Type I error) occurs when the model predicts the positive condition (has cancer / fraud) when the actual ground truth is negative (healthy / legitimate).",
      "PCEI-30-01 Block 6.3 - Confusion Matrix Terminology",
      ["false-positive", "confusion-matrix", "type-1-error"])

add_c(51, "6.3", "Confusion Matrix", "Beginner",
      "What does a 'False Negative' represent in an airport baggage security weapons-detection scanner?",
      "# Security Scanner Outcome:\n# Actual Weapon = Present, Model Predicted = Safe/No Weapon -> False Negative!",
      ["A weapon is present, but the AI system fails to detect it and classifies the bag as safe (Type II error)",
       "The bag has no weapon, but the alarm rings anyway",
       "The bag is correctly verified as containing a laptop",
       "The scanner runs out of electricity"],
      0,
      "A False Negative (Type II error) occurs when the positive condition (presence of a threat or disease) is missed by the model and falsely labeled as negative, often carrying severe safety risks.",
      "PCEI-30-01 Block 6.3 - Type II Errors",
      ["false-negative", "confusion-matrix", "type-2-error", "safety"])

add_c(52, "6.3", "Overfitting vs Underfitting", "Beginner",
      "What are the diagnostic symptoms of an 'Overfitted' machine learning model?",
      "# Diagnostics:\n# Train Error: 0.2% (Near-perfect memorization)\n# Test Error: 35.8% (Severe failure on new data!)",
      ["Exceptionally high accuracy on the training data, but significantly lower accuracy and poor generalization on the held-out test data",
       "Terrible performance on both the training set and the test set",
       "The model runs in zero seconds without executing any loops",
       "The model predicts exactly the same number for every output"],
      0,
      "Overfitting occurs when a model learns the random noise and idiosyncratic details of the training set rather than the underlying general trend. The classic hallmark is near-perfect training score accompanied by poor test score.",
      "PCEI-30-01 Block 6.3 - Overfitting Diagnostics",
      ["overfitting", "diagnostics", "train-vs-test"])

add_c(53, "6.3", "Cross-Validation", "Intermediate",
      "Why is k-Fold Cross-Validation preferred over a single static train-test split for evaluating small datasets?",
      "# k-Fold Cross-Validation:\nfrom sklearn.model_selection import KFold, cross_val_score\n# Splits data into k subsets, rotating each subset as test set once across k iterations.\nscores = cross_val_score(model, X, y, cv=5)",
      ["It ensures every data point is used for both training and testing across multiple rotations, providing a more robust, low-variance estimate of model generalization",
       "It converts tabular datasets into deep neural network audio files",
       "It guarantees that model accuracy increases by at least 25%",
       "It allows models to train without requiring any target labels"],
      0,
      "On small datasets, a single train-test split might yield an overly optimistic or pessimistic score due to random sampling luck. k-Fold cross-validation trains k separate models across rotated folds, averaging results to provide a reliable performance estimate.",
      "PCEI-30-01 Block 6.3 - Cross-Validation",
      ["cross-validation", "k-fold", "evaluation-variance"])

add_c(54, "6.3", "Hyperparameter Tuning", "Intermediate",
      "What is the difference between a model 'Parameter' and a model 'Hyperparameter'?",
      "# Definitions:\n# Parameter: Learned internally during training (e.g., weights w and bias b in linear regression)\n# Hyperparameter: Set manually by the practitioner BEFORE training (e.g., k in k-NN, max_depth in DecisionTree)",
      ["Parameters are learned internally by the model during training (e.g., regression weights); Hyperparameters are configuration settings chosen by the engineer before training begins (e.g., learning rate, k in k-NN)",
       "Parameters are written in Python; Hyperparameters are written in C++",
       "Parameters must be strings; Hyperparameters must be booleans",
       "Parameters are only used on weekends; Hyperparameters are used on weekdays"],
      0,
      "Model parameters (like weights, intercepts, coefficients) are adjusted automatically during mathematical optimization (`fit()`). Hyperparameters (like `n_neighbors`, `max_depth`, `learning_rate`) are external configuration knobs tuned by the practitioner.",
      "PCEI-30-01 Block 6.3 - Parameters vs Hyperparameters",
      ["hyperparameters", "parameters", "model-tuning"])

add_c(55, "6.3", "Grid Search", "Intermediate",
      "How does GridSearchCV from scikit-learn automate the hyperparameter tuning process?",
      "# Grid Search:\nfrom sklearn.model_selection import GridSearchCV\nparam_grid = {'n_neighbors': [3, 5, 7, 9], 'weights': ['uniform', 'distance']}\ngrid = GridSearchCV(estimator=KNeighborsClassifier(), param_grid=param_grid, cv=5)\ngrid.fit(X_train, y_train)",
      ["It systematically trains and evaluates models across every possible combination of specified hyperparameters using cross-validation to identify the optimal configuration",
       "It searches the internet for pre-trained weights on GitHub",
       "It converts Python source code into an HTML grid layout",
       "It randomly deletes 50% of model parameters to save space"],
      0,
      "`GridSearchCV` takes a dictionary of candidate hyperparameter values, exhaustively trains models on every combinatorial permutation using k-fold cross-validation, and tracks the best-performing parameter set.",
      "PCEI-30-01 Block 6.3 - GridSearchCV",
      ["gridsearchcv", "hyperparameter-optimization", "tuning"])

add_c(56, "6.3", "Model Serialization", "Beginner",
      "Which Python module is standard for saving a trained scikit-learn model object to disk for subsequent deployment?",
      "# Model serialization:\nimport joblib\n# Save model to disk\njoblib.dump(trained_model, 'classifier.joblib')\n# Load model later for inference\nloaded_model = joblib.load('classifier.joblib')",
      ["joblib (or pickle)",
       "json.dump() directly on raw model objects",
       "csv.writer",
       "math.save()"],
      0,
      "The `joblib` library (optimized for NumPy arrays) or standard `pickle` serialize Python in-memory objects to binary files on disk, allowing trained models to be saved and later loaded in production APIs without retraining.",
      "PCEI-30-01 Block 6.3 - Model Serialization",
      ["joblib", "pickle", "serialization", "model-persistence"])

add_c(57, "6.3", "Deployment with Flask/FastAPI", "Intermediate",
      "What is the standard architecture for deploying a serialized Python ML model as a web microservice?",
      "# Web API endpoint for inference:\nfrom fastapi import FastAPI\nimport joblib\napp = FastAPI()\nmodel = joblib.load('classifier.joblib')\n\n@app.post('/predict')\ndef predict(data: dict):\n    prediction = model.predict([data['features']])\n    return {'prediction': int(prediction[0])}",
      ["Wrapping the loaded model inside a lightweight web framework (FastAPI or Flask) that exposes HTTP endpoints to receive JSON requests and return model predictions",
       "Printing the predictions onto a physical receipt printer",
       "Uploading the raw Python source code to YouTube",
       "Compiling Python code into a native audio file"],
      0,
      "Modern machine learning microservices load the model into memory within an API framework like FastAPI or Flask, exposing RESTful endpoints (`/predict`) that parse incoming JSON feature payloads and return predictions in real-time.",
      "PCEI-30-01 Block 6.3 - ML Model Deployment",
      ["fastapi", "flask", "api-deployment", "microservices"])

add_c(58, "6.3", "Model Limitations", "Beginner",
      "Why must a responsible AI project explicitly document its known limitations and failure conditions?",
      "# Model Card Documentation:\n# Limitations: Model was trained exclusively on daytime imagery; will fail in heavy rain, snow, or nighttime lighting!",
      ["To prevent unsafe deployment in operating environments or demographic domains where the model is untested, unreliable, or prone to catastrophic errors",
       "To deliberately lower customer expectations so engineers can work fewer hours",
       "Because open-source licenses impose monetary fines for successful models",
       "Because documentation must always be longer than the code itself"],
      0,
      "Documenting limitations (e.g., performance degradation in low-light, sensitivity to missing features, or bias across certain demographics) protects users and organizations from misapplying models beyond their valid operational scope.",
      "PCEI-30-01 Block 6.3 - Documenting Limitations",
      ["model-limitations", "safe-deployment", "documentation"])

add_c(59, "6.3", "Monitoring & Drift", "Intermediate",
      "What is 'Data Drift' (Covariate Shift) in a live production machine learning environment?",
      "# Covariate Shift:\n# P(X) changes over time while P(y|X) remains constant.\n# Example: A retail model trained before inflation sees sudden shifts in customer income distributions!",
      ["A statistical shift in the distribution of incoming production input features compared to the distribution of features used during model training",
       "A computer fan slowing down over years of use",
       "A slow decline in the speed of the internet connection",
       "Software developers forgetting how the model works"],
      0,
      "Data drift occurs when real-world production inputs change over time (e.g., changes in user demographics, sensor wear, or macroeconomic shifts), diverging from the training distribution and degrading model prediction accuracy.",
      "PCEI-30-01 Block 6.3 - Data Drift & Monitoring",
      ["data-drift", "covariate-shift", "monitoring", "production"])

add_c(60, "6.3", "Iterative Improvement", "Beginner",
      "What should an AI developer do when initial model evaluation yields unsatisfactory accuracy?",
      "# Iterative improvement loop:\n# 1. Inspect error cases (Error Analysis)\n# 2. Collect cleaner/more diverse data\n# 3. Engineer informative features\n# 4. Try different model families",
      ["Perform error analysis on misclassified samples, refine feature engineering, gather cleaner or more representative data, or experiment with different algorithm families",
       "Manually edit the test scores in the report to look higher",
       "Delete the entire codebase and switch careers",
       "Overfit the test set until it achieves 100% accuracy"],
      0,
      "AI development is inherently iterative. When baseline performance is inadequate, practitioners perform error analysis on mispredicted samples, engineer more informative features, address data quality issues, or test different modeling architectures.",
      "PCEI-30-01 Block 6.3 - Error Analysis & Iteration",
      ["error-analysis", "feature-engineering", "iteration", "problem-solving"])

# ==========================================
# CHAPTER 6.4: Collaborate Effectively in AI Projects (Cards 61-80)
# ==========================================
add_c(61, "6.4", "AI Project Roles", "Beginner",
      "What is the primary responsibility of a 'Data Engineer' on an AI team?",
      "# Role specialization:\n# Data Engineer: Builds robust, scalable data ingestion pipelines, storage architectures, and ETL pipelines that feed clean data to models.",
      ["Designing, constructing, and maintaining scalable data architectures, pipelines, and ETL processes that ingest and store data for modeling",
       "Drafting marketing copy for consumer television commercials",
       "Conducting legal negotiations for corporate mergers",
       "Physically soldering resistors onto circuit boards"],
      0,
      "Data Engineers specialize in infrastructure: building reliable automated ETL (Extract, Transform, Load) data pipelines, distributed data storage (data lakes, warehouses), and ensuring clean data availability for Data Scientists.",
      "PCEI-30-01 Block 6.4 - Team Roles & Collaboration",
      ["data-engineer", "roles", "etl-pipelines", "teamwork"])

add_c(62, "6.4", "AI Project Roles", "Beginner",
      "What is the primary responsibility of a 'Machine Learning Engineer' (MLE)?",
      "# MLE specialization:\n# Bridges Data Science and Software Engineering: Scales models, deploys REST APIs, manages CI/CD, and monitors live production inference systems.",
      ["Taking trained statistical models and packaging, optimizing, deploying, and maintaining them in scalable, reliable production software environments",
       "Manually classifying 10,000 photos every single day",
       "Cleaning office computer monitors",
       "Auditing corporate employee tax returns"],
      0,
      "Machine Learning Engineers (MLEs) bridge the gap between experimental data science and software engineering, focusing on operationalizing models: model optimization, Docker containerization, cloud deployment, and MLOps monitoring.",
      "PCEI-30-01 Block 6.4 - Machine Learning Engineer Role",
      ["ml-engineer", "mle", "production-ml", "deployment"])

add_c(63, "6.4", "Domain Experts", "Beginner",
      "Why is continuous collaboration with Subject Matter Experts (SMEs / Domain Experts) essential for AI project success?",
      "# SME Collaboration:\n# In a cardiology AI project, software engineers do NOT know what an anomalous ST-segment on an ECG indicates; a Cardiologist (SME) must guide feature relevance and label accuracy!",
      ["Domain experts understand the contextual meaning of features, identify hidden flaws in training labels, and validate whether model predictions are practically meaningful and safe",
       "Domain experts are required to type the Python code because engineers cannot type",
       "Domain experts ensure that computers are turned off at night",
       "Domain experts only attend celebratory launch parties"],
      0,
      "AI models possess no intrinsic common sense. Without domain experts (e.g., cardiologists, fraud investigators, geologists), engineers risk optimizing for spurious statistical correlations and building systems that solve the wrong real-world problems.",
      "PCEI-30-01 Block 6.4 - Domain Expert Collaboration",
      ["domain-experts", "sme", "interdisciplinary", "validation"])

add_c(64, "6.4", "Version Control with Git", "Beginner",
      "Which tool is universally used in software and AI teams to track code changes, manage collaborative branches, and review pull requests?",
      "# Version control command:\n# git checkout -b feature/model-pipeline\n# git commit -m 'Add data preprocessing and train script'\n# git push origin feature/model-pipeline",
      ["Git (and platforms like GitHub / GitLab)",
       "Microsoft Paint",
       "Dropbox shared links",
       "USB thumb drives passed by hand"],
      0,
      "Git is the industry-standard distributed version control system. It enables developers to work simultaneously on isolated branches, record historical revisions, track changes, and perform collaborative code reviews via Pull Requests.",
      "PCEI-30-01 Block 6.4 - Version Control & Git",
      ["git", "github", "version-control", "collaboration"])

add_c(65, "6.4", "Data Version Control (DVC)", "Intermediate",
      "Why is standard Git alone INSUFFICIENT for tracking datasets and large model weight files in AI projects?",
      "# Challenge:\n# Git is designed for small plain text files (code).\n# Storing 50 GB CSV datasets or multi-gigabyte .pth / .bin model weights in Git repositories causes performance degradation and repository bloat.",
      ["Git is optimized for text source code; committing large multi-gigabyte binary datasets or model weights bloats repositories and degrades performance, necessitating tools like DVC or Git LFS",
       "Git automatically corrupts any file larger than 1 Megabyte",
       "Git requires all datasets to be written in Roman numerals",
       "Git is only compatible with HTML files"],
      0,
      "Git tracks incremental line diffs in text files. It is not built to store large binary artifacts (datasets, model checkpoints). Specialized tools like Data Version Control (DVC) or Git Large File Storage (LFS) decouple large files from Git history while maintaining version tracking.",
      "PCEI-30-01 Block 6.4 - Data Versioning",
      ["dvc", "git-lfs", "data-versioning", "large-files"])

add_c(66, "6.4", "Reproducibility & Seeds", "Beginner",
      "How do machine learning practitioners ensure that experimental results and model training runs are mathematically reproducible across different team members?",
      "# Setting random seeds for deterministic execution:\nimport random\nimport numpy as np\n\nrandom.seed(42)\nnp.random.seed(42)",
      ["By setting fixed random seeds (e.g., random.seed(42), np.random.seed(42)) across all stochastic operations (splitting, initialization, shuffling)",
       "By running code on the exact same day of the week",
       "By using only odd numbers for dataset rows",
       "By typing code with both hands simultaneously"],
      0,
      "Algorithms (like k-means, decision trees, random forests, and train_test_split) rely on pseudorandom number generators. Setting a deterministic random seed ensures that pseudo-random operations produce identical results on any machine, enabling scientific reproducibility.",
      "PCEI-30-01 Block 6.4 - Reproducibility",
      ["random-seed", "reproducibility", "numpy", "experimentation"])

add_c(67, "6.4", "Dependency Management", "Beginner",
      "Which file in a Python repository standardizes project library versions so that collaborators can install the identical environment?",
      "# Generating requirement manifest:\n# pip freeze > requirements.txt\n# Installing identical dependencies on colleague's machine:\n# pip install -r requirements.txt",
      ["requirements.txt (or environment.yml / pyproject.toml)",
       "passwords.txt",
       "history.log",
       "readme.doc"],
      0,
      "A `requirements.txt` file (or `environment.yml` for Conda) pins the exact version numbers of libraries (e.g., `scikit-learn==1.3.2`, `pandas==2.1.0`), preventing breaking version mismatches when teammates run the project on their local systems.",
      "PCEI-30-01 Block 6.4 - Environment & Dependencies",
      ["requirements.txt", "pip", "dependencies", "virtual-environment"])

add_c(68, "6.4", "Virtual Environments", "Beginner",
      "Why should AI developers always use isolated Python virtual environments (e.g., venv or conda) for their projects?",
      "# Creating an isolated environment:\n# python -m venv my_ai_env\n# source my_ai_env/bin/activate  # on Linux/macOS\n# my_ai_env\\Scripts\\activate     # on Windows",
      ["To prevent dependency conflicts between different projects and avoid altering system-wide global Python packages",
       "To run Python code without using computer memory",
       "Because virtual environments make computer graphics render in 3D",
       "Because operating systems delete unvirtualized Python scripts every Friday"],
      0,
      "Virtual environments (`venv`, `conda`) create self-contained directories containing specific Python interpreter versions and project-specific packages. This isolates projects so updating a package in Project A does not break Project B.",
      "PCEI-30-01 Block 6.4 - Virtual Environments",
      ["venv", "conda", "isolation", "python-environments"])

add_c(69, "6.4", "Code Reviews & Peer Feedback", "Beginner",
      "What is the primary benefit of conducting collaborative Code Reviews via Pull Requests on an AI team?",
      "# Pull Request Workflow:\n# Developer submits PR -> Teammate reviews code, checks data leakage, suggests vectorization -> Approved & Merged",
      ["Catching bugs, detecting data leakage, improving code readability, and ensuring shared understanding of codebase architecture across the team",
       "Publicly criticizing colleagues to establish dominance",
       "Ensuring that all code files contain exactly the same number of lines",
       "Converting all Python code into encrypted binary"],
      0,
      "Peer code reviews provide a critical quality gate: catching subtle logical flaws (such as train-test leakage, improper metric calculations, or unvectorized slow loops) while distributing architectural knowledge across the engineering team.",
      "PCEI-30-01 Block 6.4 - Code Reviews",
      ["code-review", "pull-request", "quality-assurance", "collaboration"])

add_c(70, "6.4", "Jupyter Notebook Pitfalls", "Intermediate",
      "What common collaboration issue occurs when teams rely heavily on Jupyter Notebooks (.ipynb) without best practices?",
      "# Out-of-order execution risk:\n# User runs Cell 5, then Cell 2, then Cell 9\n# Notebook shows state that cannot be reproduced by running cells top-to-bottom!",
      ["Out-of-order cell execution creates hidden internal states that cannot be reproduced from scratch, and complex JSON diffs make Git reviews difficult",
       "Jupyter notebooks automatically delete all variables every 60 seconds",
       "Jupyter notebooks cannot display charts or text",
       "Jupyter notebooks require an analog telephone modem"],
      0,
      "Jupyter notebooks store code, outputs, and metadata in complex JSON, resulting in messy Git diffs. Crucially, non-linear cell execution allows developers to run cells out of sequence, producing results that fail when the notebook is executed cleanly from top to bottom.",
      "PCEI-30-01 Block 6.4 - Jupyter Notebook Best Practices",
      ["jupyter", "reproducibility", "out-of-order-execution", "git-diffs"])

add_c(71, "6.4", "Modular Code Refactoring", "Intermediate",
      "What transition is recommended when an experimental AI prototype moves from exploratory notebooks toward production engineering?",
      "# Refactoring from scratchpad to modules:\n# notebook.ipynb  -->  src/data_loader.py, src/preprocessor.py, src/model.py, src/train.py",
      ["Refactoring exploratory notebook code into clean, modular, reusable Python scripts and functions (`.py` files) with unit tests and clear interfaces",
       "Taking screenshots of notebook cells and saving them as Word documents",
       "Compressing the notebook into a password-protected ZIP archive",
       "Leaving the messy notebook untouched on a developer's desktop"],
      0,
      "Exploratory notebooks are great for initial prototyping, but production-grade ML demands modular code: separating data loading, feature transformation, model definitions, and training loops into clean `.py` modules with automated tests.",
      "PCEI-30-01 Block 6.4 - Modular Refactoring",
      ["refactoring", "modular-code", "software-engineering", "clean-code"])

add_c(72, "6.4", "Model Cards", "Beginner",
      "What is a 'Model Card' in AI project documentation?",
      "# Model Card Standard (Mitchell et al.):\n# A structured document detailing intended use, model architecture, training data, performance benchmarks, limitations, and ethical considerations.",
      ["A standardized technical document providing comprehensive details on a model's architecture, training data, intended use cases, performance metrics, and ethical limitations",
       "A physical plastic identification badge worn by machine learning engineers",
       "A credit card used to purchase cloud compute hours",
       "A digital certificate that eliminates all software errors"],
      0,
      "Proposed by Margaret Mitchell et al., a Model Card is a standardized transparency artifact accompanying an ML model. It documents intended uses, out-of-scope applications, evaluation metrics across demographics, and ethical considerations.",
      "PCEI-30-01 Block 6.4 - Model Cards",
      ["model-cards", "documentation", "transparency", "governance"])

add_c(73, "6.4", "Datasheets for Datasets", "Intermediate",
      "What is the purpose of documenting a 'Datasheet for a Dataset' (Gebru et al.)?",
      "# Dataset Documentation:\n# Details motivation for creation, composition, collection process, preprocessing, uses, and maintenance plan.",
      ["To record the provenance, creation motivation, demographic composition, preprocessing steps, and known biases of a dataset to promote responsible reuse",
       "To print out all rows of a 50-million-row dataset on physical paper",
       "To encrypt the data so no one can read it",
       "To calculate the total sales tax of the data collection"],
      0,
      "Datasheets for Datasets provide standardized metadata about how data was collected, who labeled it, what consent was gathered, and what demographic skews exist, fostering accountability and preventing inappropriate downstream use.",
      "PCEI-30-01 Block 6.4 - Dataset Documentation",
      ["datasheets-for-datasets", "provenance", "data-governance", "documentation"])

add_c(74, "6.4", "Experiment Tracking", "Intermediate",
      "Why do modern AI teams use experiment tracking platforms (such as MLflow, Weights & Biases, or TensorBoard)?",
      "# Experiment Logging:\n# mlflow.log_param('learning_rate', 0.001)\n# mlflow.log_metric('accuracy', 0.942)\n# mlflow.log_artifact('model.joblib')",
      ["To automatically record hyperparameters, evaluation metrics, code commits, and model artifacts across hundreds of experimental runs, enabling systematic comparison",
       "To monitor employees' personal internet browsing history",
       "To ensure all computers have matching screen savers",
       "To prevent developers from running more than one experiment per week"],
      0,
      "Tuning models involves testing hundreds of combinations of architectures, hyperparameters, and feature subsets. Experiment tracking platforms log all parameters, metrics, loss curves, and artifact files, allowing teams to compare runs scientifically.",
      "PCEI-30-01 Block 6.4 - Experiment Tracking",
      ["experiment-tracking", "mlflow", "wandb", "logging"])

add_c(75, "6.4", "Agile & Kanban in AI", "Beginner",
      "How do Agile project management tools (like Kanban boards on Jira or Trello) support AI team collaboration?",
      "# Agile workflows:\n# Backlog -> In Progress -> Code Review -> Blocked -> Done",
      ["They visualize work-in-progress, track tasks across sprints, identify workflow bottlenecks, and clarify team member responsibilities",
       "They automatically write the Python code for the user",
       "They format hard drives whenever a task is marked complete",
       "They replace the need for software developers entirely"],
      0,
      "Visual task boards (Kanban / Scrum) provide visibility into project status, distribute workloads, highlight dependencies or blockers (such as waiting on dataset annotation), and keep multi-disciplinary team members aligned.",
      "PCEI-30-01 Block 6.4 - Agile & Task Management",
      ["agile", "kanban", "scrum", "project-management"])

add_c(76, "6.4", "Documentation Best Practices", "Beginner",
      "What essential information should be clearly detailed in an AI repository's root README.md file?",
      "# README Structure:\n# 1. Project overview & goal\n# 2. Prerequisites & setup instructions (venv, dependencies)\n# 3. How to run training & evaluation\n# 4. API usage examples",
      ["Project purpose, installation instructions, how to reproduce training, and examples of how to run inference",
       "The home address and phone numbers of all contributors",
       "A complete list of every computer sold in the last 10 years",
       "The complete hexadecimal dump of the compiled Python bytecode"],
      0,
      "A professional README is the front door of a project. It must clearly outline the problem solved, prerequisites, setup instructions (virtual environments, requirements), commands to train models, and how to query the inference endpoint.",
      "PCEI-30-01 Block 6.4 - Project README",
      ["readme", "documentation", "setup-guide", "best-practices"])

add_c(77, "6.4", "Logging vs Printing", "Intermediate",
      "Why is Python's standard `logging` module strongly preferred over raw `print()` statements in collaborative AI code?",
      "# Professional Logging:\nimport logging\nlogging.basicConfig(level=logging.INFO)\nlogging.info('Dataset loaded: %d rows', len(df))\nlogging.warning('Feature column %s contains 12%% NaNs', col)",
      ["The `logging` module provides configurable severity levels (DEBUG, INFO, WARNING, ERROR), timestamps, module origin, and seamless routing to log files and monitoring dashboards",
       "`print()` statements cause Python to throw a SyntaxError in production",
       "`print()` statements can only display integers, not text",
       "`logging` makes code execute without using CPU cycles"],
      0,
      "Unlike ad-hoc `print()` statements, the `logging` module allows teams to categorize message severity, include timestamps and line numbers, toggle verbosity via configuration without editing code, and pipe logs to centralized monitoring infrastructure.",
      "PCEI-30-01 Block 6.4 - Professional Logging",
      ["logging", "print-vs-log", "observability", "code-quality"])

add_c(78, "6.4", "Handling Knowledge Silos", "Beginner",
      "What is a 'Knowledge Silo' in an engineering team, and how is it mitigated?",
      "# Risk: Only Alice knows how the data pipeline transforms raw coordinates, and Alice goes on a 3-week vacation!",
      ["When critical technical knowledge is concentrated in a single individual; mitigated by thorough documentation, pair programming, and peer code reviews",
       "A large agricultural silo used to store server racks",
       "A software bug that occurs when data is stored in alphabetical order",
       "A legal restriction preventing people from speaking about computers"],
      0,
      "Knowledge silos occur when only one person understands how a vital script or model works. If they leave or are unavailable, the team is paralyzed. Pair programming, shared documentation, and peer code reviews distribute expertise across the team.",
      "PCEI-30-01 Block 6.4 - Knowledge Sharing",
      ["knowledge-silos", "bus-factor", "team-resilience", "collaboration"])

add_c(79, "6.4", "Continuous Integration (CI)", "Intermediate",
      "What role does Continuous Integration (CI) (e.g., GitHub Actions) play in an AI codebase?",
      "# CI Pipeline on git push:\n# 1. Lint code (flake8 / ruff)\n# 2. Run unit tests (pytest)\n# 3. Check data schema validation\n# 4. Block merge if tests fail!",
      ["It automatically runs automated test suites, linter checks, and pipeline validation every time new code is committed, preventing broken code from merging",
       "It allows users to download movies faster",
       "It trains a new trillion-parameter model every second",
       "It automatically converts Python code into JavaScript"],
      0,
      "CI pipelines automatically trigger on pull requests, executing automated unit tests, code style linters, and smoke tests. If a proposed change breaks existing functionality or data pipeline expectations, the CI system prevents it from merging into the main branch.",
      "PCEI-30-01 Block 6.4 - Continuous Integration",
      ["ci-cd", "github-actions", "automated-testing", "devops"])

add_c(80, "6.4", "Ethical Governance in Teams", "Beginner",
      "When a team member discovers significant algorithmic bias or unfair performance disparities during model testing, what is the professional responsibility?",
      "# Ethical escalation:\n# Identify disparity -> Document evidence -> Flag to team and leadership -> Pause deployment until mitigated!",
      ["Document the findings transparently, alert the team and stakeholders, and halt deployment until the bias is investigated and addressed",
       "Delete the test results so nobody finds out",
       "Change the labels of the test data so the model appears unbiased",
       "Blame the hardware manufacturer and ignore the issue"],
      0,
      "Responsible AI engineering demands integrity. Discovering biased performance against demographic groups or severe safety failure modes must be documented, shared with project leadership, and resolved prior to releasing the system to production.",
      "PCEI-30-01 Block 6.4 - Ethical Team Culture",
      ["ethics", "integrity", "responsible-ai", "governance"])

# ==========================================
# CHAPTER 6.5: Communicate AI Findings, Explanations, Visualizations, and Limitations (Cards 81-100)
# ==========================================
add_c(81, "6.5", "Tailoring to Audience", "Beginner",
      "When presenting machine learning project outcomes to non-technical executive stakeholders, what should you emphasize?",
      "# Technical audience: Loss curves, learning rates, F1-scores, ROC-AUC, regularization lambda\n# Business audience: Business impact, cost savings, customer retention, risk mitigation, and actionable recommendations",
      ["Business impact, ROI, actionable recommendations, and how the model solves organizational challenges, using clear, non-jargon language",
       "Deep mathematical derivations of backpropagation equations and gradient descent formulas",
       "The exact number of lines of C++ code inside the PyTorch wheel",
       "The specific hex codes of the colors used in terminal printouts"],
      0,
      "Executive stakeholders care about business value, return on investment, operational risk, and strategic decisions. Technical jargon (e.g., cross-entropy loss, eigenvectors) obscures meaning; communication should focus on practical outcomes, reliability, and business impact.",
      "PCEI-30-01 Block 6.5 - Communicating to Stakeholders",
      ["audience-tailoring", "business-communication", "stakeholder-management"])

add_c(82, "6.5", "Technical Communication", "Beginner",
      "When presenting model results to fellow data scientists and machine learning engineers, what information is essential to provide?",
      "# Technical Reporting Checklist:\n# Evaluation metrics (precision, recall, ROC-AUC), validation methodology (k-fold), baseline comparisons, hyperparameters, and error analysis",
      ["Validation methodology, concrete evaluation metrics (precision, recall, AUC), baseline benchmarks, hyperparameter choices, and known error failure modes",
       "Only a single subjective statement saying 'the model works great'",
       "A slideshow containing only stock photos of robots shaking hands",
       "A copy of the Python software license agreement"],
      0,
      "Technical peers require precise, rigorous specifications: validation strategy (k-fold, stratified split), metrics beyond raw accuracy, benchmark comparisons against baselines, feature importances, and granular error analyses to assess scientific validity.",
      "PCEI-30-01 Block 6.5 - Technical Reporting",
      ["technical-reporting", "peer-communication", "metrics", "methodology"])

add_c(83, "6.5", "Visualizing Confusion Matrices", "Beginner",
      "Why is a visualized Confusion Matrix heatmap so effective for communicating classification results?",
      "# Confusion Matrix Visualization:\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nsns.heatmap(cm, annot=True, fmt='d', cmap='Blues')\n# Displays True Positives, False Positives, True Negatives, and False Negatives at a glance!",
      ["It visually breaks down predictions across all classes, immediately revealing which specific categories the model confuses most frequently",
       "It converts numerical predictions into animated video clips",
       "It changes the font of the operating system",
       "It hides all prediction errors from the viewer"],
      0,
      "A confusion matrix heatmap displays True Positives, False Positives, True Negatives, and False Negatives clearly. Rather than a single summary percentage, it exposes exactly which class pairs suffer from confusion (e.g., confusing Class B with Class C).",
      "PCEI-30-01 Block 6.5 - Confusion Matrix Visualization",
      ["confusion-matrix", "heatmap", "visualization", "classification"])

add_c(84, "6.5", "Feature Importance Visualization", "Beginner",
      "How does a horizontal bar chart of 'Feature Importances' help explain a tree-based model's decisions to stakeholders?",
      "# Feature Importance plot:\nimport matplotlib.pyplot as plt\nplt.barh(feature_names, model.feature_importances_)\nplt.xlabel('Importance Score')\n# Shows which variables had the greatest statistical weight in predictions!",
      ["It ranks and displays which input variables contributed most significantly to the model's predictions, providing transparency into decision drivers",
       "It shows the physical temperature of the computer's CPU during training",
       "It shows how many hours the software engineer worked on each feature",
       "It proves that the model makes zero mistakes on any input"],
      0,
      "Feature importance charts rank inputs by their predictive power (e.g., showing that 'Credit Score' and 'Debt-to-Income' drove 75% of loan decisions), making complex ensemble models interpretable and understandable to business users.",
      "PCEI-30-01 Block 6.5 - Feature Importance",
      ["feature-importance", "interpretability", "bar-chart", "transparency"])

add_c(85, "6.5", "Deceptive Visualizations", "Intermediate",
      "What constitutes a misleading or deceptive visualization when presenting AI model performance?",
      "# Misleading visualization practice:\n# Truncating the y-axis (e.g., plotting accuracy from 98.2% to 98.6% on a tall axis to make a 0.4% improvement look like a 500% leap!)",
      ["Truncating the vertical axis (e.g., zooming from 98% to 99%) to exaggerate a negligible improvement, or cherry-picking only the best test batches",
       "Labeling both axes with accurate numbers and clear units",
       "Including a title that accurately describes the plotted data",
       "Using a standard blue color for chart bars"],
      0,
      "Misleading chart practices (such as truncated axes that exaggerate minuscule differences, non-linear scaling without notation, or cherry-picked test samples) distort truth and violate ethical professional communication standards.",
      "PCEI-30-01 Block 6.5 - Visual Ethics & Integrity",
      ["misleading-charts", "data-ethics", "visualization-integrity", "axes"])

add_c(86, "6.5", "Explaining Probabilities vs Decisions", "Intermediate",
      "How should an AI practitioner explain model probability outputs to users (e.g., a churn model outputting 0.73)?",
      "# Model prediction: probability = 0.73\n# Interpretation: 'The model estimates a 73% likelihood that this customer will churn, given their current behavioral patterns.'",
      ["Clarify that the model outputs a statistical confidence or likelihood score (73% likelihood of churn), which is converted to an action via a chosen decision threshold",
       "State that exactly 73 customers have already left the company today",
       "Claim that the customer will definitely leave in exactly 73 minutes",
       "State that the computer is 73% finished calculating the answer"],
      0,
      "Machine learning classifiers output calibrated probabilities (between 0.0 and 1.0). Communicating this as an estimated statistical likelihood helps users understand uncertainty, risk tiers, and why threshold tuning (e.g., 0.5 vs 0.7) affects decisions.",
      "PCEI-30-01 Block 6.5 - Explaining Probabilities",
      ["probabilities", "confidence-scores", "decision-threshold", "uncertainty"])

add_c(87, "6.5", "Explaining Trade-offs (Precision vs Recall)", "Intermediate",
      "In a fraud detection system, how do you explain the practical trade-off between Precision and Recall to an operations manager?",
      "# Trade-off explanation:\n# Higher Recall = Catches almost all fraud, but flags more innocent customers (higher false alarms)\n# Higher Precision = When it flags fraud it is almost always right, but misses subtle fraudsters!",
      ["Prioritizing Recall catches nearly all fraud but increases false alarms that annoy legitimate customers; prioritizing Precision minimizes false alarms but allows more fraudsters to slip through",
       "Precision measures speed in seconds; Recall measures speed in minutes",
       "Precision applies to female users; Recall applies to male users",
       "There is no trade-off; models can achieve 100% precision and 100% recall simultaneously at zero cost"],
      0,
      "The Precision-Recall trade-off is an operational reality. Teams must tune the threshold to match business risk tolerance: high recall for life-safety/fraud (catch everything, tolerate false alarms) vs high precision when false alarms are costly or disruptive.",
      "PCEI-30-01 Block 6.5 - Precision-Recall Trade-off",
      ["precision-recall-tradeoff", "business-decisions", "thresholds"])

add_c(88, "6.5", "ROC and PR Curves", "Intermediate",
      "When comparing multiple machine learning models, what does a Receiver Operating Characteristic (ROC) curve illustrate?",
      "# ROC Curve:\n# Plots True Positive Rate (Sensitivity) vs False Positive Rate (1 - Specificity) across ALL possible classification thresholds!\n# Area Under Curve (AUC) summarizes aggregate discriminative power.",
      ["The model's diagnostic trade-off between True Positive Rate and False Positive Rate across all possible classification threshold settings",
       "The download speed of the model file over an Ethernet cable",
       "The change in CPU temperature during training epochs",
       "The total number of lines of documentation written per day"],
      0,
      "An ROC curve plots True Positive Rate against False Positive Rate across all classification thresholds from 0.0 to 1.0. The Area Under the Curve (ROC-AUC) provides an aggregate measure of discriminative performance independent of a single threshold.",
      "PCEI-30-01 Block 6.5 - ROC Curves",
      ["roc-curve", "auc", "model-comparison", "evaluation"])

add_c(89, "6.5", "Executive Summary Writing", "Beginner",
      "What structure provides an effective, professional Executive Summary for an AI project report?",
      "# Executive Summary Structure:\n# 1. Business Problem & Objective\n# 2. Solution Approach & Data Used\n# 3. Key Findings & Performance Metrics\n# 4. Business Impact & Recommended Next Steps",
      ["1. The Business Problem -> 2. The AI Solution & Data -> 3. Key Results & Performance -> 4. Business Recommendations & Next Steps",
       "1. 500 lines of raw Python code -> 2. A list of computer hardware -> 3. A blank page",
       "1. An apology for errors -> 2. The author's resume -> 3. A list of favorite websites",
       "1. A copy of the dictionary definitions of 'Computer' and 'Artificial'"],
      0,
      "A high-impact executive summary is concise (1-2 pages): defining the core business challenge, the data and ML approach, key measurable performance outcomes, and actionable recommendations with clear limitations.",
      "PCEI-30-01 Block 6.5 - Executive Summaries",
      ["executive-summary", "report-structure", "business-writing"])

add_c(90, "6.5", "Residual Plots for Regression", "Intermediate",
      "When communicating regression model performance, what does a 'Residual Plot' (Residuals vs Predicted Values) demonstrate?",
      "# Residuals = Actual y - Predicted y\n# A healthy model has residuals randomly dispersed around 0 with no clear patterns or curves!",
      ["Whether prediction errors are randomly and uniformly distributed, or if systematic non-linear patterns and heteroscedasticity (varying error variance) exist",
       "The amount of physical dust remaining inside the computer server",
       "The time remaining until the machine learning model expires",
       "The percentage of missing values in the SQL database"],
      0,
      "Residual plots visualize prediction errors (y_true - y_pred). If errors exhibit a curved funnel or cone shape (heteroscedasticity), it visually reveals to stakeholders that the model systematically underperforms for certain value ranges.",
      "PCEI-30-01 Block 6.5 - Residual Plots",
      ["residuals", "regression", "residual-plots", "diagnostics"])

add_c(91, "6.5", "Communicating Uncertainty", "Beginner",
      "Why is presenting 'Confidence Intervals' (or prediction intervals) preferable to presenting single-point estimates in business forecasting?",
      "# Forecasting communication:\n# Point estimate: 'Revenue will be $1,250,000 next quarter.'\n# Interval: 'Revenue will be between $1,150,000 and $1,350,000 with 95% confidence.'",
      ["It transparently communicates uncertainty and the realistic range of expected variation, enabling stakeholders to plan for best-case and worst-case scenarios",
       "It doubles the amount of money the company makes automatically",
       "It prevents the computer from overheating during prediction",
       "It is legally required that all numbers have plus-or-minus signs"],
      0,
      "Real-world business environments are uncertain. Single-point predictions create a false illusion of mathematical certainty. Communicating confidence intervals equips decision-makers with risk boundaries for planning and budgeting.",
      "PCEI-30-01 Block 6.5 - Uncertainty Communication",
      ["confidence-intervals", "uncertainty", "forecasting", "risk-communication"])

add_c(92, "6.5", "Explaining AI Errors to Users", "Beginner",
      "When a consumer-facing AI system fails or makes an incorrect recommendation, how should the error be communicated in the UI?",
      "# User-friendly error message:\n# 'We couldn't recognize that document. Please ensure the page is well-lit, fully visible, and try uploading again.'",
      ["With polite, plain-language guidance that acknowledges the limitation, avoids technical stack traces, and suggests a clear corrective action for the user",
       "Displaying a raw Python traceback with 50 lines of memory hex addresses",
       "Insulting the user for uploading bad data",
       "Freezing the user's web browser without any visual message"],
      0,
      "User-facing error messages must be accessible, empathetic, and actionable. Displaying raw code tracebacks creates confusion and security risks; apps should provide clear next steps (e.g., 'Image is too blurry, please retake in good lighting').",
      "PCEI-30-01 Block 6.5 - User-Facing Error Messages",
      ["ux", "error-messages", "plain-language", "ui-communication"])

add_c(93, "6.5", "Communicating Data Limitations", "Intermediate",
      "A housing price prediction model was trained entirely on suburban homes built between 1990 and 2015. How should this constraint be stated in the final report?",
      "# Scope definition:\n# Explicit statement: 'This model is calibrated specifically for suburban single-family homes (1990-2015); predictions on urban apartments, historic homes, or rural land are unsupported.'",
      ["Explicitly define the training data boundaries and warn that predictions on urban high-rises or pre-1990 historic homes represent out-of-distribution risks",
       "Do not mention the data source and claim the model works for all properties on Earth",
       "Assert that all houses built before 1990 no longer exist",
       "State that the model is universal because math is universal"],
      0,
      "Responsible communication requires stating operational boundaries. Highlighting that the model was trained on a specific subset (suburban homes 1990-2015) prevents users from disastrously misapplying it to unsupported property types.",
      "PCEI-30-01 Block 6.5 - Boundary Communication",
      ["data-boundaries", "out-of-distribution", "limitations", "transparency"])

add_c(94, "6.5", "Interactive Dashboards", "Beginner",
      "Why are interactive dashboard tools (such as Streamlit, Gradio, or Dash) popular for presenting AI project demos to stakeholders?",
      "# Interactive Prototyping with Streamlit:\n# import streamlit as st\n# age = st.slider('Customer Age', 18, 90)\n# st.write('Churn Risk:', model.predict_proba([[age]]))",
      ["They allow non-technical stakeholders to interactively adjust input features with sliders and buttons, witnessing model predictions and behavior in real time",
       "They automatically convert machine learning models into video games",
       "They eliminate the need for having a computer processor",
       "They make all machine learning predictions 100% accurate"],
      0,
      "Tools like Streamlit and Gradio turn Python scripts into interactive web dashboards in minutes. Allowing stakeholders to test scenarios themselves (e.g., sliding customer age or credit score) builds intuitive trust and engagement far better than static slides.",
      "PCEI-30-01 Block 6.5 - Interactive Demos",
      ["streamlit", "gradio", "dashboards", "demos"])

add_c(95, "6.5", "Visualizing High Dimensions (t-SNE & UMAP)", "Intermediate",
      "When communicating complex clustering or high-dimensional embeddings to stakeholders, what do dimensionality reduction plots (like t-SNE or UMAP) provide?",
      "# Embedding Projection:\n# Projects 512-dimensional text embeddings into a 2D scatter plot where similar customer reviews naturally group together!",
      ["They project high-dimensional data points onto an intuitive 2D or 3D scatter plot, allowing human viewers to visually explore natural cluster separations and groupings",
       "They increase the number of columns in the SQL database to 1,000",
       "They measure the physical dimensions of the computer monitor in centimeters",
       "They convert text sentences into spoken audio podcasts"],
      0,
      "Humans cannot visualize 100-dimensional feature spaces. Dimensionality reduction techniques like t-SNE and UMAP project complex multi-dimensional embeddings onto 2D scatter plots, visually illustrating cluster separations and affinities.",
      "PCEI-30-01 Block 6.5 - Dimensionality Reduction Visualization",
      ["tsne", "umap", "embeddings", "clustering-visualization"])

add_c(96, "6.5", "Explaining Black-Box Models (SHAP & LIME)", "Intermediate",
      "What is the purpose of using explainable AI frameworks like SHAP (SHapley Additive exPlanations) or LIME when communicating individual model decisions?",
      "# Local Explanation with SHAP:\n# Shows exactly which features pushed this specific applicant's credit approval up (+0.15 for High Income) or down (-0.35 for Recent Delinquency)!",
      ["They provide granular local explanations for individual predictions, showing exactly how much each feature contributed to or subtracted from that specific output",
       "They convert Python code into legal contracts",
       "They eliminate the need for training data",
       "They ensure that models run without consuming memory"],
      0,
      "SHAP and LIME demystify complex 'black-box' models (like XGBoost or deep neural nets). They quantify the exact contribution of each feature for a single specific prediction, enabling compliant and transparent explanations (e.g., explaining adverse credit actions).",
      "PCEI-30-01 Block 6.5 - SHAP & Explainable AI",
      ["shap", "lime", "xai", "interpretability", "local-explanations"])

add_c(97, "6.5", "Answering Difficult Stakeholder Questions", "Beginner",
      "When a stakeholder asks, 'Can you guarantee this AI system will never make a mistake?', what is the most honest and professional response?",
      "# Handling Perfection Expectations:\n# 'No. Machine learning models are probabilistic, not infallible. We can measure and minimize error rates, establish guardrails, and provide human oversight, but 100% perfection is mathematically impossible.'",
      ["Explain transparently that machine learning models are probabilistic approximations and cannot guarantee 100% perfection, but emphasize the robust error-handling, fallback guardrails, and human oversight in place",
       "Promise that the model is mathematically incapable of making any error",
       "State that errors only occur if the user types with their left hand",
       "Ignore the question and immediately change the topic of discussion"],
      0,
      "Promising zero errors is dishonest and dangerous. Professional AI practitioners educate stakeholders that ML is inherently probabilistic, demonstrating instead how risk is managed through safety guardrails, confidence thresholds, and human fallbacks.",
      "PCEI-30-01 Block 6.5 - Managing Expectations",
      ["probabilistic-nature", "stakeholder-trust", "risk-management", "professionalism"])

add_c(98, "6.5", "Documenting Model Versioning", "Beginner",
      "Why must technical presentations and reports clearly specify the exact Model Version and dataset timestamp being evaluated?",
      "# Model Tagging:\n# Model: FraudDetector_v2.4.1\n# Dataset: Transactions_2023_Q3_Snap (SHA: 8a4f91)\n# Evaluated: 2023-11-15",
      ["To ensure auditability, traceability, and prevent confusion, since model weights and training datasets evolve continuously over time",
       "To satisfy computer copyright expiration dates",
       "Because Python refuses to run models without version tags",
       "To ensure the presentation slides take up more storage space"],
      0,
      "In dynamic AI development, results change across iterations. Clearly stating the model version (e.g., v1.4.2), git commit hash, and dataset snapshot guarantees that reported metrics can be verified, audited, and reproduced.",
      "PCEI-30-01 Block 6.5 - Auditability & Versioning",
      ["versioning", "auditability", "reproducibility", "traceability"])

add_c(99, "6.5", "Data Storytelling", "Beginner",
      "What is 'Data Storytelling' in the context of communicating AI insights to an organization?",
      "# Data Storytelling Framework:\n# Narrative (Context & Problem) + Visuals (Clear Data Trends) + Action (Clear Business Decisions)",
      ["Combining a compelling context-driven narrative, intuitive data visualizations, and actionable business insights to motivate informed decision-making",
       "Inventing fictional stories about made-up computer characters",
       "Reading aloud every number in a CSV table without charts",
       "Writing poetry about artificial neural networks"],
      0,
      "Data storytelling bridges raw statistics and human decision-making. By framing insights within a structured narrative (the business challenge, what the data revealed, and the recommended concrete action), practitioners inspire organizational action.",
      "PCEI-30-01 Block 6.5 - Data Storytelling",
      ["data-storytelling", "narrative", "communication", "persuasion"])

add_c(100, "6.5", "Post-Launch Feedback Loops", "Intermediate",
      "Why is establishing a user feedback channel (e.g., 'Report incorrect prediction' button) essential after deploying an AI feature?",
      "# Continuous Feedback Loop:\n# User flags bad prediction -> Logged with input payload -> Added to failure case analysis -> Retrained in next release!",
      ["It captures real-world edge cases and failure modes directly from users, creating a rich dataset of hard examples for future error analysis and model retraining",
       "It allows users to send chat messages directly to the server's CPU",
       "It automatically rewrites the model's neural network weights in the user's browser",
       "It is a legal requirement that eliminates all software liability"],
      0,
      "User feedback mechanisms (like thumbs up/down or 'flag incorrect result') provide critical ground-truth failure telemetry. These flagged edge cases form the most valuable training data for diagnosing blind spots and retraining more resilient future models.",
      "PCEI-30-01 Block 6.5 - User Feedback Loops",
      ["feedback-loops", "edge-cases", "active-monitoring", "continuous-improvement"])

# ==========================================
# FILE GENERATION
# ==========================================
def to_ts_card(c):
    return (
        "  {\n"
        f"    id: {json.dumps(c['id'])},\n"
        f"    track: 'pcei',\n"
        f"    section: {json.dumps(c['section'])},\n"
        f"    chapter: {json.dumps(c['chapter'])},\n"
        f"    category: {json.dumps(c['category'])},\n"
        f"    difficulty: {json.dumps(c['difficulty'])},\n"
        f"    question: {json.dumps(c['question'])},\n"
        f"    codeSnippet: {json.dumps(c['codeSnippet'])},\n"
        f"    options: [\n" + ",\n".join(f"      {json.dumps(opt)}" for opt in c['options']) + "\n    ],\n"
        f"    correctAnswer: {c['correctAnswer']},\n"
        f"    explanation: {json.dumps(c['explanation'])},\n"
        f"    officialRef: {json.dumps(c['officialRef'])},\n"
        f"    tags: {json.dumps(c['tags'])}\n"
        "  }"
    )

def write_ts_file(filepath, var_name, cards_list):
    content = "import { Flashcard } from '../types';\n\n"
    content += f"export const {var_name}: Flashcard[] = [\n"
    content += ",\n".join(to_ts_card(c) for c in cards_list)
    content += "\n];\n"
    with open(filepath, "w") as f:
        f.write(content)
    print(f"Wrote {len(cards_list)} cards to {filepath}")

write_ts_file("src/data/pceiSection6CardsPart1.ts", "pceiSection6CardsPart1", cards[:50])
write_ts_file("src/data/pceiSection6CardsPart2.ts", "pceiSection6CardsPart2", cards[50:])

with open("src/data/pceiSection6Flashcards.ts", "w") as f:
    f.write("""import { Flashcard } from '../types';
import { pceiSection6CardsPart1 } from './pceiSection6CardsPart1';
import { pceiSection6CardsPart2 } from './pceiSection6CardsPart2';

export const pceiSection6Flashcards: Flashcard[] = [
  ...pceiSection6CardsPart1,
  ...pceiSection6CardsPart2,
];
""")
print("Wrote pceiSection6Flashcards.ts successfully!")
