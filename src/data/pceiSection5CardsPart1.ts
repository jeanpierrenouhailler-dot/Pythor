import { Flashcard } from '../types';

export const pceiSection5CardsPart1: Flashcard[] = [
  {
    id: "pcei-5-001",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Algorithmic Bias",
    difficulty: "Beginner",
    question: "What is 'Algorithmic Bias' in artificial intelligence systems?",
    codeSnippet: "# Algorithmic bias observation:\n# Model systematically outputs less favorable predictions or higher error rates for certain demographic groups",
    options: [
      "Systematic, repeatable errors in a computer system that create unfair outcomes, favoring or disadvantaging certain demographic groups",
      "A hardware failure in the arithmetic logic unit of a CPU",
      "An intentional syntax error written into a Python script",
      "The mathematical variance of random Gaussian noise"
    ],
    correctAnswer: 0,
    explanation: "Algorithmic bias occurs when an automated system reflects human prejudices, unrepresentative training data, or flawed modeling choices, producing systematically unfair or discriminatory predictions against protected groups.",
    officialRef: "PCEI-30-01 Block 5.1 - Algorithmic Bias",
    tags: ["algorithmic-bias", "fairness", "ethics"]
  },
  {
    id: "pcei-5-002",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Historical Bias",
    difficulty: "Intermediate",
    question: "What is 'Historical Bias' in machine learning datasets?",
    codeSnippet: "# Historical bias example:\n# Hiring tool trained on 10 years of tech resumes learns that men were hired far more often in the past, and penalizes female applicants!",
    options: [
      "Bias that exists in the real world and is faithfully captured in historical data, reflecting past cultural, institutional, or social inequalities",
      "Errors caused by historical computer punch cards from the 1960s",
      "A software glitch that only occurs on historical leap years",
      "A bug that deletes git commit history"
    ],
    correctAnswer: 0,
    explanation: "Historical bias exists when real-world historical prejudices are embedded in data. Even with perfect sampling and feature engineering, the model learns and automates historical human inequalities (e.g., past hiring disparities).",
    officialRef: "PCEI-30-01 Block 5.1 - Historical Bias",
    tags: ["historical-bias", "societal-bias", "training-data"]
  },
  {
    id: "pcei-5-003",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Representation Bias",
    difficulty: "Beginner",
    question: "How does 'Representation Bias' (Selection Bias) manifest in computer vision datasets (like facial recognition)?",
    codeSnippet: "# Representation bias in training data:\n# Dataset composed of 85% light-skinned male faces -> Model fails on women and darker skin tones",
    options: [
      "When the training dataset underrepresents or severely omits certain demographic sub-populations, leading to elevated error rates for those groups in production",
      "When pictures are saved in low-resolution GIF format",
      "When computer monitors display incorrect color contrasts",
      "When facial images are mirrored horizontally"
    ],
    correctAnswer: 0,
    explanation: "Representation bias arises when the training sample does not reflect the diversity of the deployment population. If a vision system trains primarily on light-skinned men, accuracy degrades significantly on women and people of color.",
    officialRef: "PCEI-30-01 Block 5.1 - Representation Bias",
    tags: ["representation-bias", "facial-recognition", "demographics"]
  },
  {
    id: "pcei-5-004",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Measurement Bias",
    difficulty: "Intermediate",
    question: "What causes 'Measurement Bias' during the data collection phase?",
    codeSnippet: "# Measurement bias example:\n# Using 'number of arrests' as a proxy for 'crime rate' when certain neighborhoods are far more heavily policed!",
    options: [
      "Using flawed, proxy, or inconsistent metrics to measure underlying real-world concepts (e.g., using arrest records as a proxy for criminal activity)",
      "Using a metric ruler instead of an imperial tape measure",
      "Measuring server download latency in seconds rather than milliseconds",
      "Rounding continuous numbers to two decimal places"
    ],
    correctAnswer: 0,
    explanation: "Measurement bias occurs when the chosen proxy variable misrepresents the actual construct being studied (e.g., arrest counts measure policing concentration rather than actual crime incidence, injecting measurement distortion).",
    officialRef: "PCEI-30-01 Block 5.1 - Measurement Bias",
    tags: ["measurement-bias", "proxies", "data-collection"]
  },
  {
    id: "pcei-5-005",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Disparate Impact",
    difficulty: "Intermediate",
    question: "In legal and AI ethics frameworks, what is 'Disparate Impact' (Unintentional Discrimination)?",
    codeSnippet: "# Disparate Impact (Four-Fifths Rule):\n# Selection rate for protected group < 80% of selection rate for majority group\nratio = selection_rate_minority / selection_rate_majority\nis_disparate = ratio < 0.80",
    options: [
      "When a facially neutral policy, rule, or algorithm results in an adverse, disproportionate impact on a protected demographic group, even without malicious intent",
      "A physical impact from dropping computer hardware on the floor",
      "The difference in internet bandwidth between urban and rural areas",
      "An intentional, explicit racial slur written in code comments"
    ],
    correctAnswer: 0,
    explanation: "Disparate impact occurs when an apparently neutral algorithm or criterion disproportionately screens out protected demographic classes (e.g., credit denial or hiring exclusion), regardless of whether the developer intended to discriminate.",
    officialRef: "PCEI-30-01 Block 5.1 - Disparate Impact",
    tags: ["disparate-impact", "legal", "four-fifths-rule"]
  },
  {
    id: "pcei-5-006",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Proxy Variables",
    difficulty: "Intermediate",
    question: "Why does simply deleting protected attributes (like Race or Gender) from a dataset fail to prevent algorithmic discrimination?",
    codeSnippet: "# Proxy variables recreate protected attributes:\n# ZIP code, browsing history, and purchasing habits correlate strongly with race and gender!\nX = df.drop(columns=['race', 'gender'])  # Model easily reconstructs them from ZIP code!",
    options: [
      "Other correlated features (like ZIP code, school attended, shopping history) act as proxy variables that allow the model to reconstruct the omitted protected attributes",
      "Algorithms automatically restore deleted columns from the recycle bin",
      "Protected attributes are legally required to be present in all databases",
      "Deleting columns causes an irrecoverable crash in scikit-learn"
    ],
    correctAnswer: 0,
    explanation: "Merely removing protected attributes ('fairness through unawareness') is ineffective because machine learning algorithms easily infer the missing protected traits from redundant proxy variables (like postal code, income, or purchase history).",
    officialRef: "PCEI-30-01 Block 5.1 - Proxy Variables",
    tags: ["proxies", "fairness-through-unawareness", "correlation"]
  },
  {
    id: "pcei-5-007",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Demographic Parity",
    difficulty: "Intermediate",
    question: "What condition must be satisfied to achieve 'Demographic Parity' (Statistical Parity) in a binary lending model?",
    codeSnippet: "# Demographic parity condition:\n# P(Prediction = Approved | Group = A) == P(Prediction = Approved | Group = B)",
    options: [
      "The probability of receiving a positive prediction (e.g., loan approval) is identical across all demographic groups, regardless of underlying historical base rates",
      "Every loan applicant receives the exact same dollar amount",
      "All applicants have the exact same credit score",
      "The model makes zero prediction mistakes on all applicants"
    ],
    correctAnswer: 0,
    explanation: "Demographic Parity requires that the proportion of positive predictions be equal across all protected groups: P(Y_hat = 1 | A = 0) = P(Y_hat = 1 | A = 1), ensuring that selection rates do not depend on group membership.",
    officialRef: "PCEI-30-01 Block 5.1 - Demographic Parity",
    tags: ["demographic-parity", "fairness-metrics", "equal-acceptance"]
  },
  {
    id: "pcei-5-008",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Equalized Odds",
    difficulty: "Advanced",
    question: "How does 'Equalized Odds' (Equal Opportunity) define fairness across demographic groups?",
    codeSnippet: "# Equalized odds condition:\n# Both True Positive Rate (TPR) and False Positive Rate (FPR) must be equal across protected groups:\n# TPR(Group A) == TPR(Group B)  and  FPR(Group A) == FPR(Group B)",
    options: [
      "The model must have equal True Positive Rates (Recall) and equal False Positive Rates across all demographic groups",
      "All applicants must roll an even number on a random die",
      "The model must approve 50% of applicants and reject 50%",
      "The training loss must equal the validation loss"
    ],
    correctAnswer: 0,
    explanation: "Equalized Odds requires that the model is equally accurate for all groups: the probability of a qualified candidate getting approved (TPR) and an unqualified candidate being misapproved (FPR) must be equal across all protected groups.",
    officialRef: "PCEI-30-01 Block 5.1 - Equalized Odds",
    tags: ["equalized-odds", "equal-opportunity", "fairness"]
  },
  {
    id: "pcei-5-009",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Fairness Impossibility Theorem",
    difficulty: "Advanced",
    question: "What mathematical reality is proven by the 'Fairness Impossibility Theorem' (Kleinberg et al.)?",
    codeSnippet: "# Impossibility theorem:\n# Unless base rates are identical, you CANNOT simultaneously satisfy:\n# 1. Demographic Parity\n# 2. Equalized Odds\n# 3. Predictive Parity (Equal Precision)",
    options: [
      "It is mathematically impossible to satisfy multiple competing mathematical definitions of fairness (Demographic Parity, Equalized Odds, Predictive Parity) simultaneously when group base rates differ",
      "Computers can never be programmed to follow ethical rules",
      "Fairness metrics can only be calculated on binary numbers",
      "All machine learning models are fundamentally biased by 50%"
    ],
    correctAnswer: 0,
    explanation: "Kleinberg's theorem proves that when groups have different base rates of a condition, competing mathematical definitions of fairness are mutually exclusive. Choosing which fairness metric to prioritize is a human policy decision, not purely technical.",
    officialRef: "PCEI-30-01 Block 5.1 - Impossibility Theorem",
    tags: ["fairness-impossibility", "trade-offs", "kleinberg"]
  },
  {
    id: "pcei-5-010",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Debiasing Techniques",
    difficulty: "Intermediate",
    question: "At what three distinct stages of an ML pipeline can debiasing techniques be applied?",
    codeSnippet: "# Stages of debiasing:\n# 1. Pre-processing: Resampling, reweighing training data\n# 2. In-processing: Adding fairness regularization constraints to loss function\n# 3. Post-processing: Adjusting decision thresholds per demographic group",
    options: [
      "Pre-processing (data reweighing/resampling), In-processing (fairness-constrained loss functions), and Post-processing (threshold adjustment per group)",
      "Compilation, Linking, and Assembly",
      "Design, Manufacture, and Shipping",
      "Marketing, Sales, and Customer Billing"
    ],
    correctAnswer: 0,
    explanation: "Debiasing can occur at three pipeline stages: Pre-processing (reweighing or balancing the training dataset), In-processing (adding fairness penalties during model optimization), and Post-processing (adjusting decision cutoff thresholds post-inference).",
    officialRef: "PCEI-30-01 Block 5.1 - Debiasing Stages",
    tags: ["debiasing", "pre-processing", "in-processing", "post-processing"]
  },
  {
    id: "pcei-5-011",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Feedback Loops in AI",
    difficulty: "Intermediate",
    question: "What is a 'Perverse Feedback Loop' (Runaway Feedback) in predictive policing or credit scoring systems?",
    codeSnippet: "# Feedback loop cycle:\n# Model predicts high crime in Area X -> More police dispatched to Area X -> More arrests recorded in Area X -> Model reinforces Area X as higher crime!",
    options: [
      "When a model's biased predictions influence real-world actions, which generate new biased data that further reinforces and amplifies the initial bias in future retraining",
      "When microphone audio feedback squeals through speakers",
      "When a cooling fan speeds up as server temperature rises",
      "When a recursive function terminates normally"
    ],
    correctAnswer: 0,
    explanation: "A runaway feedback loop occurs when model predictions alter the world in a way that generates data confirming the prediction (e.g., sending more police to an area produces more arrests, 'proving' the model right and compounding bias).",
    officialRef: "PCEI-30-01 Block 5.1 - Feedback Loops",
    tags: ["feedback-loops", "amplification", "societal-impact"]
  },
  {
    id: "pcei-5-012",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Aggregation Bias",
    difficulty: "Intermediate",
    question: "What is 'Aggregation Bias' in medical diagnostic machine learning models?",
    codeSnippet: "# Aggregation bias:\n# One global model fits the majority population well, but fails for subgroups that have fundamentally different biological baselines (e.g., symptoms presenting differently in women)",
    options: [
      "When a single one-size-fits-all model is trained on a combined heterogeneous population, failing to represent distinct biological or behavioral variations across sub-populations",
      "When SQL databases perform SUM() operations incorrectly",
      "When multiple servers are aggregated into a single cluster",
      "When data is compressed using standard ZIP utilities"
    ],
    correctAnswer: 0,
    explanation: "Aggregation bias occurs when distinct sub-populations with different underlying characteristics are lumped into a single homogeneous model. What is predictive for one group may be irrelevant or inverted for another.",
    officialRef: "PCEI-30-01 Block 5.1 - Aggregation Bias",
    tags: ["aggregation-bias", "subgroups", "medical-ai"]
  },
  {
    id: "pcei-5-013",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Evaluation Bias",
    difficulty: "Intermediate",
    question: "What causes 'Evaluation Bias' in standard AI performance benchmarks?",
    codeSnippet: "# Evaluation bias:\n# Benchmark dataset (e.g., ImageNet, LFW) is itself biased and does not reflect diverse real-world populations",
    options: [
      "When the benchmark dataset used to evaluate models is unrepresentative, misleading developers into believing a model is accurate when it actually fails on underrepresented groups",
      "When human examiners grade student exams with red ink",
      "When evaluation scripts take more than 10 minutes to run",
      "When models are evaluated on test sets with zero noise"
    ],
    correctAnswer: 0,
    explanation: "Evaluation bias happens when the test or benchmark dataset itself suffers from representation bias. High benchmark accuracy creates a false sense of universal competence that crumbles when deployed in diverse real-world environments.",
    officialRef: "PCEI-30-01 Block 5.1 - Evaluation Bias",
    tags: ["evaluation-bias", "benchmarks", "testing"]
  },
  {
    id: "pcei-5-014",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Cognitive Confirmation Bias",
    difficulty: "Beginner",
    question: "How can 'Confirmation Bias' in human developers inadvertently compromise an AI project?",
    codeSnippet: "# Confirmation bias in data science:\n# Ignoring contradictory validation results and only testing hypotheses that support pre-existing expectations",
    options: [
      "Developers seek out and emphasize test results that confirm their pre-existing hypotheses while ignoring or explaining away warning signs and edge-case failures",
      "Developers verify their code using automated unit tests",
      "Developers confirm appointment meetings via calendar invites",
      "Developers back up their datasets to secondary hard drives"
    ],
    correctAnswer: 0,
    explanation: "Confirmation bias leads engineers to interpret model behavior favorably, selectively celebrating tests that validate their intuition while brushing off anomalies or discriminatory edge cases as statistical flukes.",
    officialRef: "PCEI-30-01 Block 5.1 - Confirmation Bias",
    tags: ["confirmation-bias", "human-factors", "critical-thinking"]
  },
  {
    id: "pcei-5-015",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Fairness Auditing",
    difficulty: "Intermediate",
    question: "What is a standard industry best practice for 'Fairness Auditing' prior to deploying a high-stakes AI model?",
    codeSnippet: "# Disaggregated evaluation audit:\n# Evaluate accuracy, false positive rate, and false negative rate SEPARATELY across each demographic subgroup\nfor group in ['female', 'male', 'non-binary']:\n    print(group, compute_metrics(model, X[group], y[group]))",
    options: [
      "Performing disaggregated evaluations: measuring accuracy, error rates, and confusion matrices separately across protected sub-populations rather than relying on aggregate global scores",
      "Asking the marketing team to approve the visual styling of charts",
      "Deleting all test results that fall below 80% accuracy",
      "Publishing model source code on an anonymous message board"
    ],
    correctAnswer: 0,
    explanation: "Fairness auditing mandates disaggregated evaluation: breaking down performance metrics (FPR, FNR, Precision, Recall) across demographic slices (gender, race, age, socioeconomic status) to spot disparate harm hidden by aggregate metrics.",
    officialRef: "PCEI-30-01 Block 5.1 - Fairness Auditing",
    tags: ["auditing", "disaggregated-metrics", "compliance"]
  },
  {
    id: "pcei-5-016",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Label Bias",
    difficulty: "Intermediate",
    question: "How does 'Label Bias' enter a supervised learning dataset?",
    codeSnippet: "# Label bias in subjective tasks:\n# Human annotators bring their own implicit biases when rating resumes or flagging content as 'toxic'",
    options: [
      "When human annotators or labeling processes reflect subjective prejudices, stereotypes, or cultural assumptions when assigning ground-truth target labels",
      "When printed adhesive labels peel off physical computer chassis",
      "When column header strings contain uppercase characters",
      "When labels are assigned by random number generators"
    ],
    correctAnswer: 0,
    explanation: "In subjective labeling tasks (e.g., sentiment, resume quality, content moderation toxicity), human annotators project their personal cultural biases into the 'ground truth' labels, teaching the model to replicate those biases.",
    officialRef: "PCEI-30-01 Block 5.1 - Label Bias",
    tags: ["label-bias", "annotation", "subjectivity"]
  },
  {
    id: "pcei-5-017",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Fairlearn Toolkit",
    difficulty: "Beginner",
    question: "What is the open-source Python library 'Fairlearn' designed to help data scientists accomplish?",
    codeSnippet: "# Using Fairlearn in Python:\n# from fairlearn.metrics import MetricFrame, selection_rate\n# from fairlearn.reductions import ExponentiatedGradient, DemographicParity",
    options: [
      "Assessing and mitigating unfairness and bias in machine learning models across diverse demographic groups",
      "Accelerating deep learning training on quantum computers",
      "Generating synthetic computer voices for audiobooks",
      "Automating the physical assembly of computer circuit boards"
    ],
    correctAnswer: 0,
    explanation: "Fairlearn is a widely adopted open-source Python toolkit (originally developed by Microsoft) offering fairness metrics calculation across sensitive groups and algorithms for mitigating disparate impact during training.",
    officialRef: "PCEI-30-01 Block 5.1 - Fairlearn",
    tags: ["fairlearn", "toolkits", "mitigation"]
  },
  {
    id: "pcei-5-018",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Gender Shades Study",
    difficulty: "Intermediate",
    question: "What famous finding did the landmark 'Gender Shades' study (Joy Buolamwini & Timnit Gebru, 2018) reveal about commercial facial analysis APIs?",
    codeSnippet: "# Gender Shades finding:\n# Commercial vision APIs had near-perfect accuracy (99%) on lighter-skinned males,\n# but error rates up to 34.7% on darker-skinned females!",
    options: [
      "Commercial facial analysis APIs had error rates up to 34% on darker-skinned females while maintaining near 99% accuracy on lighter-skinned males",
      "Facial recognition algorithms cannot operate in sunlight",
      "Webcam video cameras degrade after 100 hours of recording",
      "Deep neural networks refuse to classify smiling faces"
    ],
    correctAnswer: 0,
    explanation: "The Gender Shades research demonstrated severe intersectional bias in major commercial vision APIs: error rates were lowest for lighter-skinned men (<1%) and dramatically higher for darker-skinned women (up to 34.7%) due to skewed training datasets.",
    officialRef: "PCEI-30-01 Block 5.1 - Gender Shades",
    tags: ["gender-shades", "intersectional-bias", "facial-recognition"]
  },
  {
    id: "pcei-5-019",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Intersectional Fairness",
    difficulty: "Advanced",
    question: "What is 'Intersectional Fairness' in AI bias analysis?",
    codeSnippet: "# Intersectional analysis evaluates overlapping protected identities:\n# E.g., examining outcomes not just by Gender or Race alone,\n# but specifically for [Race x Gender] intersections (e.g., Black Women)",
    options: [
      "Evaluating fairness across overlapping, interacting social identities (e.g., examining race and gender combined, rather than in isolated silos)",
      "Ensuring that traffic intersections have working traffic lights",
      "Evaluating the geometric intersection of two decision planes",
      "Measuring the overlap between training and testing datasets"
    ],
    correctAnswer: 0,
    explanation: "Intersectional fairness recognizes that individuals belong to multiple identity categories simultaneously. A model might appear fair across gender overall and race overall, yet exhibit extreme disparate harm at the intersection (e.g., Black women).",
    officialRef: "PCEI-30-01 Block 5.1 - Intersectional Fairness",
    tags: ["intersectionality", "demographics", "fairness"]
  },
  {
    id: "pcei-5-020",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.1",
    category: "Cultural Bias in NLP",
    difficulty: "Beginner",
    question: "How does 'Cultural Bias' manifest in large language models trained predominantly on Western, English-language internet text?",
    codeSnippet: "# Cultural bias in LLMs:\n# Defaulting to Western cultural, legal, and ethical norms while marginalizing non-Western perspectives and languages",
    options: [
      "The model defaults to Western cultural norms, moral values, and idioms while misinterpreting or underrepresenting non-Western cultural traditions and languages",
      "The model refuses to process non-English text",
      "The model automatically translates text into British English only",
      "The model cannot process numbers written in Arabic numerals"
    ],
    correctAnswer: 0,
    explanation: "Because web training corpora disproportionately originate in North America and Western Europe, models internalize Western legal, cultural, and moral perspectives as universal defaults, exhibiting cultural blind spots for other societies.",
    officialRef: "PCEI-30-01 Block 5.1 - Cultural Bias",
    tags: ["cultural-bias", "nlp", "representation"]
  },
  {
    id: "pcei-5-021",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Personally Identifiable Information",
    difficulty: "Beginner",
    question: "What constitutes Personally Identifiable Information (PII) that requires strict protection in AI pipelines?",
    codeSnippet: "# PII examples:\npii_attributes = ['Full Name', 'Social Security Number', 'Home Address', 'Biometric Face Data', 'Email']",
    options: [
      "Any data that can be used to identify, contact, or locate a specific individual person directly or indirectly",
      "The model's internal hyperparameter settings",
      "The version number of the Python interpreter",
      "The physical weight of the server chassis in kilograms"
    ],
    correctAnswer: 0,
    explanation: "PII encompasses any information linking directly or indirectly to an identified individual (names, national ID numbers, home addresses, phone numbers, biometric templates, IP addresses, medical records).",
    officialRef: "PCEI-30-01 Block 5.2 - PII",
    tags: ["pii", "privacy", "data-protection"]
  },
  {
    id: "pcei-5-022",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Data Minimization",
    difficulty: "Beginner",
    question: "What does the fundamental privacy principle of 'Data Minimization' dictate under GDPR and privacy regulations?",
    codeSnippet: "# Data Minimization principle:\n# Collect ONLY the data strictly necessary for the specific intended processing purpose",
    options: [
      "Organizations should collect and process only the minimum amount of personal data strictly necessary to accomplish the intended AI objective",
      "Databases must be compressed into 8-bit text files",
      "Models must be trained with fewer than 10 lines of Python code",
      "Engineers must minimize the physical size of computer desks"
    ],
    correctAnswer: 0,
    explanation: "Data minimization mandates that data controllers collect and retain only personal data that is adequate, relevant, and strictly limited to what is necessary in relation to the specific stated purpose of the AI application.",
    officialRef: "PCEI-30-01 Block 5.2 - Data Minimization",
    tags: ["data-minimization", "gdpr", "privacy-principles"]
  },
  {
    id: "pcei-5-023",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Anonymization vs Pseudonymization",
    difficulty: "Intermediate",
    question: "What is the legal and technical difference between 'Anonymization' and 'Pseudonymization'?",
    codeSnippet: "# Pseudonymization: Names replaced with tokens (ID_884); re-identification possible with key table\n# Anonymization: Irreversible destruction of all identifiers; individual can NEVER be re-identified",
    options: [
      "Anonymization irreversibly removes identifiers so an individual can never be re-identified; pseudonymization replaces identifiers with artificial keys that can be reversed using a separate mapping key",
      "Anonymization is for audio files; pseudonymization is for video files",
      "Pseudonymization makes data publicly accessible to anyone online",
      "There is no difference; they are exact technical synonyms"
    ],
    correctAnswer: 0,
    explanation: "Anonymized data is irreversibly stripped of all identifying links and falls outside privacy laws like GDPR. Pseudonymized data replaces direct IDs with pseudonyms (tokens); because it can be re-linked using a key table, it remains regulated personal data.",
    officialRef: "PCEI-30-01 Block 5.2 - Anonymization vs Pseudonymization",
    tags: ["anonymization", "pseudonymization", "gdpr"]
  },
  {
    id: "pcei-5-024",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Differential Privacy",
    difficulty: "Advanced",
    question: "What mathematical guarantee does 'Differential Privacy' (DP) provide when training AI models or querying databases?",
    codeSnippet: "# Differential privacy epsilon (\u03b5) bound:\n# An observer cannot determine whether any single individual was included in the training dataset\n# Injected calibrated noise (e.g., Laplace mechanism) protects individuals while preserving aggregate statistical utility",
    options: [
      "It mathematically bounds the risk that an observer can deduce whether any specific individual's data was included in the training dataset, by injecting calibrated statistical noise",
      "It guarantees that models will make zero classification mistakes",
      "It completely prevents hackers from logging into cloud servers",
      "It differentiates continuous functions automatically during backpropagation"
    ],
    correctAnswer: 0,
    explanation: "Differential Privacy provides a quantifiable privacy budget (epsilon, \u03b5): it injects calibrated mathematical noise such that the output distribution is virtually identical whether any single individual's data is present or absent.",
    officialRef: "PCEI-30-01 Block 5.2 - Differential Privacy",
    tags: ["differential-privacy", "epsilon", "mathematical-guarantee"]
  },
  {
    id: "pcei-5-025",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Model Inversion Attacks",
    difficulty: "Advanced",
    question: "What occurs during a 'Model Inversion Attack' against a deployed machine learning model?",
    codeSnippet: "# Model inversion attack:\n# Attacker repeatedly queries a facial recognition API and analyzes prediction probabilities to reconstruct the recognizable face image of a specific person in the training set!",
    options: [
      "An attacker reconstructs sensitive private training data (such as recognizable human faces or medical records) by repeatedly querying the model and analyzing output probabilities",
      "An attacker reverses the direction of neural network forward propagation",
      "An attacker turns the computer monitor upside down",
      "An attacker modifies the algorithm to predict negative numbers"
    ],
    correctAnswer: 0,
    explanation: "In a model inversion attack, an adversary with access to a model's outputs exploits confidence scores to computationally reconstruct the sensitive personal training examples (e.g., reconstructing a patient's face or genomic profile).",
    officialRef: "PCEI-30-01 Block 5.2 - Model Inversion",
    tags: ["model-inversion", "privacy-attacks", "adversarial"]
  },
  {
    id: "pcei-5-026",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Membership Inference Attacks",
    difficulty: "Advanced",
    question: "What does an attacker attempt to determine in a 'Membership Inference Attack'?",
    codeSnippet: "# Membership inference attack:\n# Attacker checks whether Patient 42's clinical record was part of the model's training set (violating medical privacy if the model is for rare disease detection!)",
    options: [
      "Whether a specific individual's private data record was included in the model's training dataset or not",
      "Whether the developer is a member of the Python Software Foundation",
      "Whether the server is a member of a local area network",
      "Whether a user has a paid subscription to an online service"
    ],
    correctAnswer: 0,
    explanation: "Membership inference attacks exploit differences in how models behave on data they trained on (overfitted lower loss) versus unseen data, allowing an attacker to determine if a specific person's record was in the training set.",
    officialRef: "PCEI-30-01 Block 5.2 - Membership Inference",
    tags: ["membership-inference", "privacy-leakage", "overfitting"]
  },
  {
    id: "pcei-5-027",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Data Poisoning Attacks",
    difficulty: "Intermediate",
    question: "What is a 'Data Poisoning Attack' (Adversarial Training Data Contamination)?",
    codeSnippet: "# Data poisoning attack:\n# Injecting malicious backdoor samples into the training dataset\n# Model functions normally in general, but misclassifies whenever a secret trigger pattern appears",
    options: [
      "Maliciously injecting corrupted, mislabeled, or backdoor samples into the training dataset to compromise the model's future integrity or create secret exploits",
      "Pouring liquid chemicals onto server motherboards",
      "Sending spam emails to machine learning researchers",
      "Corrupting hard disk firmware using physical magnets"
    ],
    correctAnswer: 0,
    explanation: "Data poisoning targets the training phase: an adversary inserts manipulated samples into the training pipeline (e.g., web scrapes), introducing hidden backdoors where the model behaves normally except when triggered by a specific watermark.",
    officialRef: "PCEI-30-01 Block 5.2 - Data Poisoning",
    tags: ["data-poisoning", "backdoor-attacks", "security"]
  },
  {
    id: "pcei-5-028",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Evasion Attacks",
    difficulty: "Intermediate",
    question: "What is an 'Evasion Attack' (Adversarial Example) at inference time?",
    codeSnippet: "# Evasion attack at inference time:\n# Adding human-imperceptible perturbation to an image of a stop sign so the autonomous car model sees a 65 mph speed limit sign!",
    options: [
      "Manipulating an input at test/inference time with subtle perturbations designed to cause a deployed model to misclassify it without modifying the model's weights",
      "Evading paying cloud computing subscription fees",
      "Disconnecting a computer from the internet before running scripts",
      "Writing code that skips conditional statement evaluation"
    ],
    correctAnswer: 0,
    explanation: "Evasion attacks occur post-deployment: without touching model weights, the attacker crafts adversarial inputs (e.g., adding imperceptible stickers to a stop sign) that trick the vision model into misclassifying it as a speed limit sign.",
    officialRef: "PCEI-30-01 Block 5.2 - Evasion Attacks",
    tags: ["evasion-attacks", "adversarial-examples", "inference-security"]
  },
  {
    id: "pcei-5-029",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "EU AI Act Risk Tiers",
    difficulty: "Intermediate",
    question: "Under the European Union Artificial Intelligence Act (EU AI Act), what are the four established risk tiers for AI applications?",
    codeSnippet: "# EU AI Act four-tier risk classification:\n# 1. Unacceptable Risk (Banned: Social scoring, biometric categorization for sensitive traits)\n# 2. High Risk (Heavily regulated: Medical devices, hiring, law enforcement)\n# 3. Specific Transparency Risk (Chatbots, deepfakes: Disclosure required)\n# 4. Minimal / No Risk (Unregulated: Spam filters, video games)",
    options: [
      "Unacceptable Risk (Banned), High Risk (Strict compliance), Specific Transparency Risk (Disclosure), and Minimal/No Risk (Unregulated)",
      "Bronze, Silver, Gold, and Platinum",
      "Local Risk, Regional Risk, National Risk, and Global Risk",
      "Alpha, Beta, Gamma, and Delta"
    ],
    correctAnswer: 0,
    explanation: "The EU AI Act classifies AI systems based on risk: Unacceptable (banned outright, like social scoring), High (strictly audited and certified, like hiring/medical algorithms), Specific Transparency (chatbots/deepfakes requiring disclosure), and Minimal (free use).",
    officialRef: "PCEI-30-01 Block 5.2 - EU AI Act",
    tags: ["eu-ai-act", "risk-tiers", "regulations"]
  },
  {
    id: "pcei-5-030",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "GDPR Right to Explanation",
    difficulty: "Intermediate",
    question: "Under the European Union General Data Protection Regulation (GDPR, Articles 13-15 and 22), what right do individuals have regarding fully automated decisions?",
    codeSnippet: "# GDPR Article 22:\n# Right not to be subject to solely automated decision making producing legal effects + Right to meaningful explanation and human intervention",
    options: [
      "The right to receive meaningful information about the logic involved and the right to human intervention/review for decisions with significant legal effects",
      "The right to receive free computer hardware from the government",
      "The right to view the private source code of all commercial software",
      "The right to erase other people's data from public servers"
    ],
    correctAnswer: 0,
    explanation: "GDPR grants individuals protection against solely automated decisions that produce legal or similarly significant effects (like loan rejections or hiring), requiring data controllers to provide meaningful explanations and the right to human appeal.",
    officialRef: "PCEI-30-01 Block 5.2 - GDPR Article 22",
    tags: ["gdpr", "right-to-explanation", "automated-decisions"]
  },
  {
    id: "pcei-5-031",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Right to be Forgotten",
    difficulty: "Beginner",
    question: "What challenge does the GDPR 'Right to Erasure' (Right to be Forgotten) pose for deep learning neural networks?",
    codeSnippet: "# Machine unlearning challenge:\n# If a user requests their data deleted under GDPR, how do you remove their specific influence from a model trained on billions of parameters without expensive retraining?",
    options: [
      "It is computationally difficult and expensive to 'unlearn' or remove an individual user's data from a trained neural network's millions of weights without retraining from scratch",
      "It causes computer monitors to permanently forget their color calibration",
      "It deletes the entire operating system whenever a user logs out",
      "It is illegal to delete data from digital databases"
    ],
    correctAnswer: 0,
    explanation: "Neural networks store knowledge distributed across billions of synaptic weights. 'Machine Unlearning' is an active research challenge: purging a user's specific influence from trained weights without costly complete retraining is very difficult.",
    officialRef: "PCEI-30-01 Block 5.2 - Right to Erasure",
    tags: ["right-to-be-forgotten", "machine-unlearning", "gdpr"]
  },
  {
    id: "pcei-5-032",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Synthetic Data Privacy",
    difficulty: "Intermediate",
    question: "Why is generating 'Synthetic Data' increasingly used in privacy-preserving AI development?",
    codeSnippet: "# Synthetic data generation:\n# Train generative model on patient records -> generate artificial realistic records containing NO real patient identities",
    options: [
      "It mimics the statistical properties and correlations of sensitive real-world datasets without exposing real individuals' private records",
      "It allows models to achieve 100% accuracy without training",
      "It reduces the financial cost of computer electricity to zero",
      "It eliminates the need for software engineering teams"
    ],
    correctAnswer: 0,
    explanation: "Synthetic data uses generative models (like GANs or diffusion) to synthesize realistic artificial records that replicate real-world distributions and correlations without containing any actual individual's real PII.",
    officialRef: "PCEI-30-01 Block 5.2 - Synthetic Data",
    tags: ["synthetic-data", "privacy-preservation", "generative-ai"]
  },
  {
    id: "pcei-5-033",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Federated Learning",
    difficulty: "Intermediate",
    question: "What is 'Federated Learning', and how does it protect user privacy on mobile devices?",
    codeSnippet: "# Federated learning workflow:\n# 1. Central server sends global model to smartphones\n# 2. Phones train model locally on private user data\n# 3. Only model weight updates (gradients) are sent back to server, NOT raw private data!",
    options: [
      "A decentralized machine learning framework where models train locally on user devices, transmitting only aggregated model weight updates back to a central server, keeping raw data private",
      "A cloud system where governments store all citizen data on centralized servers",
      "A model that only runs on United States federal government computers",
      "A networking protocol for transferring files between mobile phones via Bluetooth"
    ],
    correctAnswer: 0,
    explanation: "Federated learning inverts traditional AI: instead of bringing private data to the model on a central server, the model is sent to edge devices (e.g., phones). Training happens locally, and only encrypted parameter updates are aggregated.",
    officialRef: "PCEI-30-01 Block 5.2 - Federated Learning",
    tags: ["federated-learning", "decentralized", "privacy"]
  },
  {
    id: "pcei-5-034",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Model Extraction / Stealing",
    difficulty: "Advanced",
    question: "What is a 'Model Extraction' (Model Stealing) attack against a proprietary cloud AI service?",
    codeSnippet: "# Model stealing:\n# Attacker queries cloud API with 100,000 synthetic inputs, captures output probabilities, and trains a clone model for free!",
    options: [
      "An adversary reconstructs or clones a proprietary commercial model by repeatedly querying its public API and using the inputs/outputs to train an emulator model",
      "A thief physically breaking into a data center and carrying away a server tower",
      "A software bug where the model deletes its own weights",
      "An authorized backup of model weights to Amazon S3"
    ],
    correctAnswer: 0,
    explanation: "Model stealing queries a black-box model API with thousands of synthetic inputs to observe its input-output mappings, using those labels to train an identical copycat model, effectively stealing millions of dollars in IP without authorization.",
    officialRef: "PCEI-30-01 Block 5.2 - Model Extraction",
    tags: ["model-stealing", "ip-theft", "api-security"]
  },
  {
    id: "pcei-5-035",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Consent and AI Training",
    difficulty: "Beginner",
    question: "What is the ethical and legal concern regarding scraping public web data (artists' paintings, public social media) to train commercial generative AI models?",
    codeSnippet: "# Ethical debate in GenAI training:\n# Creators' copyrighted works were used to train models that compete with them without explicit consent, compensation, or attribution",
    options: [
      "Creators' intellectual property, creative artworks, and personal data were ingested without explicit consent, licensing agreements, or financial compensation",
      "Web scraping consumes too much physical paper",
      "Internet browsers crash if images are downloaded repeatedly",
      "Public web data can only be viewed on desktop computers"
    ],
    correctAnswer: 0,
    explanation: "Training foundation models on web-scraped data raises contentious legal and ethical questions over copyright, fair use, and consent, as artists' copyrighted styles and private data were ingested without permission to build commercial products.",
    officialRef: "PCEI-30-01 Block 5.2 - Web Scraping Consent",
    tags: ["consent", "copyright", "ethics", "web-scraping"]
  },
  {
    id: "pcei-5-036",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Adversarial Robustness",
    difficulty: "Intermediate",
    question: "What is 'Adversarial Training' in defensive deep learning?",
    codeSnippet: "# Adversarial training defense:\n# Intentionally generate adversarial examples and include them in the training dataset with correct labels\n# Teaches model to resist perturbations",
    options: [
      "Augmenting the training dataset with generated adversarial examples labeled correctly, teaching the model to withstand subtle input perturbations",
      "Having human programmers physically fight while writing code",
      "Running software stress tests on server cooling fans",
      "Training two models on different programming languages"
    ],
    correctAnswer: 0,
    explanation: "Adversarial training is a primary defense against evasion attacks: during training, adversarial perturbations are continuously computed and added to training mini-batches, forcing the model to learn robust, noise-invariant features.",
    officialRef: "PCEI-30-01 Block 5.2 - Adversarial Training",
    tags: ["adversarial-training", "robustness", "defense"]
  },
  {
    id: "pcei-5-037",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "PII Redaction with Regex",
    difficulty: "Beginner",
    question: "Why do AI data pipelines employ automated regex and NER filters to mask PII (e.g., replacing emails with `[REDACTED_EMAIL]`) prior to model training?",
    codeSnippet: "# Pre-training PII redaction:\nimport re\nclean_text = re.sub(r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+', '[REDACTED_EMAIL]', raw_text)",
    options: [
      "To prevent language models from memorizing and subsequently leaking private customer emails, phone numbers, or passwords during user conversations",
      "To decrease the number of vowel letters in text documents",
      "To format text according to PEP 8 Python standards",
      "To translate emails into French"
    ],
    correctAnswer: 0,
    explanation: "Language models memorize rare strings. If personal emails or phone numbers are left in pre-training data, models can regurgitate them to arbitrary users when prompted. Automated PII scrubbing sanitizes data before training.",
    officialRef: "PCEI-30-01 Block 5.2 - PII Scrubbing",
    tags: ["pii-redaction", "regex", "data-sanitization"]
  },
  {
    id: "pcei-5-038",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Data Provenance & Lineage",
    difficulty: "Intermediate",
    question: "What is 'Data Provenance' (Data Lineage) in AI system governance?",
    codeSnippet: "# Data lineage tracking:\n# Documenting origin, transformations, and chain of custody for every training sample from raw source to model weights",
    options: [
      "The documented audit trail detailing the origin, chain of custody, transformations, and handling of data throughout its entire lifecycle",
      "The country where the data scientist was born",
      "The physical hardware manufacturer of the server motherboard",
      "The file extension used when saving datasets on disk"
    ],
    correctAnswer: 0,
    explanation: "Data provenance tracks the complete historical lineage of data: where it came from, who collected it, how it was filtered, transformed, and labeled, ensuring legal compliance, reproducibility, and security auditing.",
    officialRef: "PCEI-30-01 Block 5.2 - Data Provenance",
    tags: ["provenance", "data-lineage", "governance"]
  },
  {
    id: "pcei-5-039",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Watermarking Generative AI",
    difficulty: "Intermediate",
    question: "What is the purpose of 'Digital Watermarking' in generative AI outputs (images, audio, text)?",
    codeSnippet: "# Watermarking AI content:\n# Embedding subtle, imperceptible cryptographic signatures into generated content to verify provenance and detect deepfakes",
    options: [
      "Embedding imperceptible cryptographic signals into synthetic outputs to verify that content was machine-generated, facilitating provenance verification and deepfake detection",
      "Placing a giant opaque black rectangle over the middle of generated images",
      "Printing physical stamps on paper copies of invoices",
      "Adding copyright text in red font at the bottom of web pages"
    ],
    correctAnswer: 0,
    explanation: "Digital watermarking embeds invisible statistical patterns or cryptographic signatures into AI-generated text, audio, or images, enabling automated tools to verify origin, detect deepfakes, and combat disinformation.",
    officialRef: "PCEI-30-01 Block 5.2 - Watermarking",
    tags: ["watermarking", "deepfakes", "provenance", "authenticity"]
  },
  {
    id: "pcei-5-040",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.2",
    category: "Security Principles Summary",
    difficulty: "Beginner",
    question: "What does 'Defense-in-Depth' mean when securing an AI production pipeline?",
    codeSnippet: "# Defense-in-depth architecture:\n# Input validation + API rate limiting + Anomaly monitoring + Output guardrails + Model sandboxing",
    options: [
      "Implementing multiple layered security controls (input sanitation, authentication, anomaly detection, output guardrails) so that if one layer fails, others stop attacks",
      "Placing server racks deep underground in concrete basements",
      "Using 100-character passwords for database access",
      "Ensuring that all code files are written in deep learning frameworks"
    ],
    correctAnswer: 0,
    explanation: "Defense-in-depth employs overlapping defensive layers: sanitizing inputs against prompt injection, monitoring inference calls for extraction, bounding rate limits, and screening model outputs with safety guardrails.",
    officialRef: "PCEI-30-01 Block 5.2 - Defense-in-Depth",
    tags: ["defense-in-depth", "ai-security", "pipeline-hardening"]
  },
  {
    id: "pcei-5-041",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.3",
    category: "Black-Box vs White-Box",
    difficulty: "Beginner",
    question: "What is the difference between a 'White-Box' (Interpretable) model and a 'Black-Box' model in AI?",
    codeSnippet: "# White-Box: Decision Tree, Linear Regression (internal reasoning is transparent)\n# Black-Box: Deep Neural Network with 100 layers (millions of matrix weights; reasoning cannot be directly audited by inspection)",
    options: [
      "White-box models are inherently interpretable by design; black-box models have complex internal representations that cannot be easily understood by direct inspection",
      "White-box models run on desktop computers, while black-box models run inside aircraft cockpits",
      "White-box models are free open-source software, while black-box models are commercial software",
      "White-box models can only process image data, while black-box models process numbers"
    ],
    correctAnswer: 0,
    explanation: "White-box models (e.g., shallow decision trees, linear regression) offer clear mathematical transparency. Black-box models (e.g., deep neural networks, ensembles) achieve high predictive power but obscure the exact logic behind decisions.",
    officialRef: "PCEI-30-01 Block 5.3 - Black-Box vs White-Box",
    tags: ["black-box", "white-box", "interpretability"]
  },
  {
    id: "pcei-5-042",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.3",
    category: "Interpretability vs Accuracy Trade-off",
    difficulty: "Intermediate",
    question: "What classic trade-off frequently confronts data scientists when choosing between traditional linear models and deep ensembles?",
    codeSnippet: "# The Interpretability vs Performance tension:\n# High Interpretability, Lower Accuracy: Linear Regression, Decision Tree\n# Lower Interpretability, High Accuracy: Deep Neural Net, XGBoost",
    options: [
      "The Interpretability vs Predictive Accuracy trade-off: simpler models are easily explained but may lack accuracy, while complex models achieve top accuracy but are harder to explain",
      "The trade-off between computer screen resolution and audio speaker quality",
      "The tension between Python software versions and Linux kernel releases",
      "The decision between storing data in JSON vs XML"
    ],
    correctAnswer: 0,
    explanation: "Practitioners often face a dilemma: simple models (linear regression, decision trees) are transparent and compliant with regulations, but complex non-linear models (deep nets, gradient boosting) often deliver superior predictive accuracy.",
    officialRef: "PCEI-30-01 Block 5.3 - Interpretability vs Accuracy",
    tags: ["trade-offs", "accuracy", "transparency"]
  },
  {
    id: "pcei-5-043",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.3",
    category: "Explainable AI (XAI)",
    difficulty: "Beginner",
    question: "What is the core objective of 'Explainable AI' (XAI)?",
    codeSnippet: "# XAI goal:\n# Provide human-understandable explanations for how and why an AI model reached a specific decision or prediction",
    options: [
      "To produce human-comprehensible justifications for machine learning decisions, fostering trust, safety, and regulatory compliance",
      "To translate Python source code into English language poetry",
      "To automate the customer support phone hotline for tech companies",
      "To train AI models that do not use mathematical numbers"
    ],
    correctAnswer: 0,
    explanation: "Explainable AI (XAI) develops methods and techniques that explain a model's predictions in terms understandable to human operators, domain experts, and impacted users, ensuring accountability in high-stakes domains.",
    officialRef: "PCEI-30-01 Block 5.3 - XAI",
    tags: ["xai", "explainable-ai", "trust", "accountability"]
  },
  {
    id: "pcei-5-044",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.3",
    category: "Local vs Global Explanations",
    difficulty: "Intermediate",
    question: "What is the difference between 'Global Explanations' and 'Local Explanations' in model interpretability?",
    codeSnippet: "# Global: Explains entire model behavior across the whole dataset (e.g., overall feature importances)\n# Local: Explains why the model made a specific prediction for ONE individual applicant (e.g., 'Why was John's loan denied?')",
    options: [
      "Global explanations describe overall model behavior across the entire dataset; local explanations explain the specific rationale behind an individual single prediction",
      "Global explanations are written in English, while local explanations are written in local dialects",
      "Global explanations run on cloud networks, while local explanations run on local desktop hard drives",
      "There is no difference; they are exact technical synonyms"
    ],
    correctAnswer: 0,
    explanation: "Global interpretability illuminates the overarching decision logic and feature dynamics across the whole dataset. Local interpretability explains a single specific decision (e.g., 'Why was patient Jane's biopsy flagged as high risk?').",
    officialRef: "PCEI-30-01 Block 5.3 - Local vs Global",
    tags: ["local-explanations", "global-explanations", "interpretability"]
  },
  {
    id: "pcei-5-045",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.3",
    category: "LIME Algorithm",
    difficulty: "Intermediate",
    question: "How does LIME (Local Interpretable Model-agnostic Explanations) generate local explanations for a black-box model's prediction?",
    codeSnippet: "# LIME methodology:\n# 1. Perturb input sample creating local variations\n# 2. Query black-box model on variations\n# 3. Fit an interpretable linear surrogate model locally around the prediction\nimport lime",
    options: [
      "By perturbing the input sample with small variations, querying the black-box model, and fitting a simple, interpretable linear surrogate model locally around that prediction",
      "By calculating the exact inverse of the neural network's weight matrix",
      "By converting the input image into black-and-white pixels",
      "By searching Google for similar text descriptions"
    ],
    correctAnswer: 0,
    explanation: "LIME is model-agnostic: to explain a single prediction, it creates perturbed variations of the input, gets the black-box model's predictions for those variations, and fits an interpretable linear model locally around that point.",
    officialRef: "PCEI-30-01 Block 5.3 - LIME",
    tags: ["lime", "surrogate-models", "local-interpretability"]
  },
  {
    id: "pcei-5-046",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.3",
    category: "SHAP (Shapley Values)",
    difficulty: "Intermediate",
    question: "What game-theoretic foundation underpins SHAP (SHapley Additive exPlanations) values in feature attribution?",
    codeSnippet: "# SHAP based on Lloyd Shapley's cooperative game theory (1953):\n# Fairly distributes the payout (model prediction) among players (features) based on marginal contributions across all coalitions\nimport shap",
    options: [
      "Lloyd Shapley's Nobel Prize-winning cooperative game theory, which calculates the marginal contribution of each feature across all possible feature coalitions",
      "John Nash's non-cooperative equilibrium theory",
      "Alan Turing's imitation game theory",
      "Charles Darwin's natural selection theory"
    ],
    correctAnswer: 0,
    explanation: "SHAP grounds feature attribution in cooperative game theory: features act as 'players' in a coalition, and Shapley values compute each feature's average marginal contribution to the prediction across all possible feature combinations.",
    officialRef: "PCEI-30-01 Block 5.3 - SHAP",
    tags: ["shap", "shapley-values", "game-theory", "feature-attribution"]
  },
  {
    id: "pcei-5-047",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.3",
    category: "SHAP Force Plot",
    difficulty: "Intermediate",
    question: "In a SHAP Force Plot or waterfall plot for an individual prediction, what do the red and blue horizontal bars indicate?",
    codeSnippet: "# SHAP waterfall/force plot:\n# Base value (dataset average) -> Features push prediction higher (Red) or lower (Blue) -> Final model prediction",
    options: [
      "Red bars indicate features pushing the prediction higher than the baseline average; blue bars indicate features pushing the prediction lower",
      "Red bars indicate software errors; blue bars indicate successful calculations",
      "Red bars represent training data; blue bars represent testing data",
      "Red bars represent GPU memory; blue bars represent CPU memory"
    ],
    correctAnswer: 0,
    explanation: "A SHAP force plot illustrates how individual features influence a single prediction: features pushing the prediction above the base value are highlighted in red (positive contribution), while features pulling it down are blue.",
    officialRef: "PCEI-30-01 Block 5.3 - SHAP Force Plot",
    tags: ["shap-force-plot", "waterfall-plot", "visualization"]
  },
  {
    id: "pcei-5-048",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.3",
    category: "Model Cards",
    difficulty: "Beginner",
    question: "What is a 'Model Card' (Mitchell et al., 2019) in responsible AI documentation?",
    codeSnippet: "# Model Card sections:\n# - Intended Use & Target Users\n# - Model Architecture & Version\n# - Training Data & Evaluation Datasets\n# - Out-of-Scope Use Cases & Known Limitations\n# - Ethical Considerations & Disaggregated Performance",
    options: [
      "A standardized technical document providing comprehensive metadata on an AI model's intended use, training data, evaluation benchmarks, known limitations, and ethical considerations",
      "A plastic identification badge worn by machine learning engineers in data centers",
      "A promotional marketing flyer given to software sales clients",
      "A gift card used to purchase cloud computing subscription credits"
    ],
    correctAnswer: 0,
    explanation: "Model Cards are standardized documentation artifacts (analogous to nutrition labels) detailing an AI model's intended domain, performance across demographic groups, training limitations, and potential misuse cases.",
    officialRef: "PCEI-30-01 Block 5.3 - Model Cards",
    tags: ["model-cards", "documentation", "transparency", "mitchell"]
  },
  {
    id: "pcei-5-049",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.3",
    category: "Datasheets for Datasets",
    difficulty: "Beginner",
    question: "What is the purpose of 'Datasheets for Datasets' (Gebru et al., 2021)?",
    codeSnippet: "# Datasheet for Datasets structure:\n# Motivation, Composition, Collection Process, Preprocessing, Uses, Distribution, Maintenance",
    options: [
      "To provide transparent documentation detailing why a dataset was created, who funded it, its demographic composition, collection methodology, and recommended usage boundaries",
      "To convert tabular CSV files into Microsoft Excel spreadsheets",
      "To encrypt raw data files with commercial DRM licenses",
      "To compress image archives into RAR files"
    ],
    correctAnswer: 0,
    explanation: "Datasheets for Datasets standardizes documentation for machine learning datasets, detailing creation motivations, composition, demographic representation, consent protocols, and warnings regarding inappropriate uses.",
    officialRef: "PCEI-30-01 Block 5.3 - Datasheets for Datasets",
    tags: ["datasheets", "dataset-documentation", "transparency", "gebru"]
  },
  {
    id: "pcei-5-050",
    track: 'pcei',
    section: "Section 5",
    chapter: "5.3",
    category: "Counterfactual Explanations",
    difficulty: "Intermediate",
    question: "What question does a 'Counterfactual Explanation' answer for an applicant whose loan was rejected by an AI?",
    codeSnippet: "# Counterfactual explanation:\n# 'Your loan was denied. If your annual income had been $5,000 higher and your credit score was 680, your loan would have been approved.'",
    options: [
      "'What is the minimum specific change in your input features that would have resulted in an approved loan decision?'",
      "'What was the exact temperature of the server when your loan was reviewed?'",
      "'What are the names of other applicants who applied on the same day?'",
      "'How many layers are in the neural network that evaluated your application?'"
    ],
    correctAnswer: 0,
    explanation: "Counterfactual explanations provide actionable recourse: they specify the smallest real-world changes an individual would need to make to change the model's decision (e.g., 'If your credit score were 20 points higher, approved').",
    officialRef: "PCEI-30-01 Block 5.3 - Counterfactuals",
    tags: ["counterfactual-explanations", "recourse", "actionability"]
  }
];
