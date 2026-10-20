import { Flashcard } from '../types';

export const pceiSection2CardsPart1: Flashcard[] = [
  {
    id: "pcei-2-001",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "ML Paradigms",
    difficulty: "Beginner",
    question: "What is the defining characteristic of Supervised Learning?",
    codeSnippet: "# Supervised learning dataset:\n# Features (X) paired with known ground-truth target labels (y)\nX = [[1500, 3], [2000, 4]]  # Square footage, bedrooms\ny = [350000, 450000]        # Known house prices\nmodel.fit(X, y)",
    options: [
      "The model learns patterns from input features paired with known ground-truth target labels",
      "The model discovers hidden groups without any labels or guidance",
      "The model learns purely through trial-and-error reward penalties in a game simulation",
      "The model operates without needing any digital training data"
    ],
    correctAnswer: 0,
    explanation: "In Supervised Learning, the training dataset consists of input features paired with corresponding target labels (ground truth). The algorithm learns a predictive function that maps inputs to outputs.",
    officialRef: "PCEI-30-01 Block 2.1 - Supervised Learning",
    tags: ["supervised-learning", "labels", "ground-truth"]
  },
  {
    id: "pcei-2-002",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "ML Paradigms",
    difficulty: "Beginner",
    question: "What is the core goal of Unsupervised Learning?",
    codeSnippet: "# Unsupervised learning dataset:\n# Features (X) only, without any target labels\nX = [[24, 50000], [52, 120000], [25, 48000]]\nclusters = kmeans.fit_predict(X)",
    options: [
      "To predict continuous stock market prices from historical tables",
      "To discover inherent patterns, groupings, or low-dimensional structures in data without pre-existing target labels",
      "To reward an agent for navigating a maze without bumping into walls",
      "To translate English sentences into French with human corrections"
    ],
    correctAnswer: 1,
    explanation: "Unsupervised Learning works with unlabeled data. Its primary goal is to find underlying structure, hidden clusters, or compressed representations (like customer segmentation with K-Means).",
    officialRef: "PCEI-30-01 Block 2.1 - Unsupervised Learning",
    tags: ["unsupervised-learning", "clustering", "unlabeled"]
  },
  {
    id: "pcei-2-003",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "ML Paradigms",
    difficulty: "Beginner",
    question: "How does Reinforcement Learning (RL) fundamentally differ from Supervised Learning?",
    codeSnippet: "# Reinforcement Learning loop:\n# Agent takes action -> Environment returns new state and scalar reward\nstate, reward, done, info = env.step(action)",
    options: [
      "RL learns from scalar reward or penalty feedback received through sequential trial-and-error interaction with an environment",
      "RL requires a human expert to label every single training row before learning begins",
      "RL cannot be implemented in Python",
      "RL only works on tabular Excel spreadsheets"
    ],
    correctAnswer: 0,
    explanation: "Unlike supervised learning (which relies on static input-label pairs), reinforcement learning involves an active agent interacting with a dynamic environment, learning a policy by maximizing cumulative rewards over time.",
    officialRef: "PCEI-30-01 Block 2.1 - Reinforcement Learning",
    tags: ["reinforcement-learning", "rewards", "agent-environment"]
  },
  {
    id: "pcei-2-004",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Semi-Supervised Learning",
    difficulty: "Intermediate",
    question: "When is 'Semi-Supervised Learning' the most practical paradigm choice?",
    codeSnippet: "# Semi-supervised dataset:\n# Small set of labeled data + Large volume of unlabeled data\nlabeled_data = load_samples(count=100)      # Expensive to label\nunlabeled_data = load_samples(count=100000)  # Cheap to collect",
    options: [
      "When labeling data is labor-intensive and expensive, but a massive volume of unlabeled data is readily available",
      "When no training data exists anywhere in the organization",
      "When target labels are 100% continuous floating-point numbers",
      "When deploying models exclusively on consumer smartwatch hardware"
    ],
    correctAnswer: 0,
    explanation: "Semi-supervised learning combines a small amount of labeled data with a large amount of unlabeled data during training, drastically cutting data annotation costs while boosting accuracy over purely unsupervised methods.",
    officialRef: "PCEI-30-01 Block 2.1 - Semi-Supervised",
    tags: ["semi-supervised", "annotation-cost", "data-efficiency"]
  },
  {
    id: "pcei-2-005",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Self-Supervised Learning",
    difficulty: "Intermediate",
    question: "How do modern Foundation Models and Large Language Models (LLMs) utilize 'Self-Supervised Learning' during pre-training?",
    codeSnippet: "# Self-supervised next-token prediction:\ntext = 'The capital of France is Paris'\ninput_seq = 'The capital of France is'\ntarget_token = 'Paris'  # Target generated automatically from the raw text itself!",
    options: [
      "By automatically generating supervisory training signals directly from the raw unannotated data (e.g., predicting masked words or the next token)",
      "By hiring millions of human workers to manually categorize every word",
      "By using genetic algorithms to physically rewire motherboard circuits",
      "By running supervised linear regressions on CSV spreadsheets"
    ],
    correctAnswer: 0,
    explanation: "Self-supervised learning creates pseudo-labels automatically from raw data (e.g., masking words in a sentence and training the model to predict the missing word), enabling pre-training on web-scale text without manual labels.",
    officialRef: "PCEI-30-01 Block 2.1 - Self-Supervised",
    tags: ["self-supervised", "foundation-models", "pre-training"]
  },
  {
    id: "pcei-2-006",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Features vs Labels",
    difficulty: "Beginner",
    question: "In tabular machine learning, what is the distinction between 'Features' (X) and 'Labels' (y)?",
    codeSnippet: "# Tabular representation:\n# Features: independent input variables\n# Label: dependent target variable to predict\nX = df[['age', 'income', 'credit_score']]\ny = df['loan_default']",
    options: [
      "Features are the input variables used to make a prediction; the label is the ground-truth target variable being predicted",
      "Features are database row indexes, while labels are file modification timestamps",
      "Features are strictly text strings, while labels must be negative integers",
      "There is no distinction; they are interchangeable technical synonyms"
    ],
    correctAnswer: 0,
    explanation: "Features (X) are the measurable independent properties or attributes of the phenomenon being observed. The label (y) is the dependent variable or outcome that the supervised model is trained to predict.",
    officialRef: "PCEI-30-01 Block 2.1 - Features vs Labels",
    tags: ["features", "labels", "tabular-ml"]
  },
  {
    id: "pcei-2-007",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Traditional vs ML",
    difficulty: "Beginner",
    question: "How does the traditional software programming paradigm compare to the machine learning paradigm?",
    codeSnippet: "# Traditional Programming: Rules + Data -> Answers\n# Machine Learning: Data + Answers -> Rules (Model)",
    options: [
      "Traditional programming combines hand-crafted rules and data to generate answers; machine learning takes data and answers to learn rules automatically",
      "Traditional programming requires GPUs, whereas machine learning requires mechanical punch cards",
      "Traditional programming cannot handle numbers greater than 100",
      "Machine learning never requires any computer hardware"
    ],
    correctAnswer: 0,
    explanation: "As articulated by Arthur Samuel, traditional programming requires humans to write explicit step-by-step logic (Rules + Data = Output). In machine learning, algorithms infer the rules automatically (Data + Outputs = Rules/Model).",
    officialRef: "PCEI-30-01 Block 2.1 - Traditional vs ML",
    tags: ["programming-paradigms", "data-driven", "rules"]
  },
  {
    id: "pcei-2-008",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Inductive Bias",
    difficulty: "Advanced",
    question: "What is 'Inductive Bias' in a machine learning algorithm?",
    codeSnippet: "# Linear regression inductive bias:\n# Assumes the underlying relationship between X and y is linear: y = wX + b",
    options: [
      "The set of foundational assumptions an algorithm uses to predict outputs for unseen inputs beyond the training data",
      "A deliberate mathematical prejudice programmed to discriminate against certain users",
      "The electrical voltage offset measured on motherboard power capacitors",
      "A hardware failure caused by overheating CPU heatsinks"
    ],
    correctAnswer: 0,
    explanation: "Inductive bias is the set of prior assumptions an algorithm makes about the target function (e.g., linear regression assumes linearity; decision trees assume orthogonal feature splits) enabling it to generalize from finite data.",
    officialRef: "PCEI-30-01 Block 2.1 - Inductive Bias",
    tags: ["inductive-bias", "generalization", "assumptions"]
  },
  {
    id: "pcei-2-009",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "No Free Lunch Theorem",
    difficulty: "Intermediate",
    question: "What does the famous 'No Free Lunch Theorem' state regarding machine learning algorithms?",
    codeSnippet: "# No single model dominates across all possible problems:\n# Linear models, Trees, Neural nets all have domains where they shine",
    options: [
      "No single machine learning algorithm outperforms all others across all possible mathematical problem domains",
      "All open-source Python libraries must be purchased with commercial subscription fees",
      "Deep neural networks are mathematically guaranteed to be 100% optimal for every dataset",
      "Algorithms require zero electricity if trained during morning hours"
    ],
    correctAnswer: 0,
    explanation: "The No Free Lunch theorem states that when averaged over all possible data distributions, no learning algorithm is universally superior to any other. Success requires matching the model's inductive bias to the specific problem.",
    officialRef: "PCEI-30-01 Block 2.1 - No Free Lunch",
    tags: ["no-free-lunch", "model-selection", "theory"]
  },
  {
    id: "pcei-2-010",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Parametric vs Non-Parametric",
    difficulty: "Intermediate",
    question: "What is the difference between a 'Parametric' and a 'Non-Parametric' machine learning model?",
    codeSnippet: "# Parametric: Fixed number of parameters (e.g., Linear Regression: w, b)\n# Non-Parametric: Number of parameters grows with data size (e.g., KNN)",
    options: [
      "Parametric models have a fixed number of parameters regardless of training set size; non-parametric models can grow in complexity with more data",
      "Parametric models only run on cloud servers, while non-parametric models only run on laptops",
      "Parametric models do not use numerical weights",
      "Non-parametric models cannot be evaluated using accuracy metrics"
    ],
    correctAnswer: 0,
    explanation: "Parametric algorithms (e.g., Linear Regression, Logistic Regression) summarize data with a fixed set of parameters. Non-parametric models (e.g., KNN, Decision Trees) make fewer prior assumptions and can grow in complexity with data.",
    officialRef: "PCEI-30-01 Block 2.1 - Parametric vs Non-Parametric",
    tags: ["parametric", "non-parametric", "model-complexity"]
  },
  {
    id: "pcei-2-011",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Batch vs Online Learning",
    difficulty: "Intermediate",
    question: "What distinguishes 'Online Learning' (Incremental Learning) from traditional 'Batch Learning'?",
    codeSnippet: "# Online learning:\nfor batch_sample in real_time_stream:\n    model.partial_fit(batch_sample.X, batch_sample.y)",
    options: [
      "Online learning updates model parameters incrementally in real time as individual data points or small streams arrive, without retraining from scratch",
      "Online learning requires an active web browser tab to remain open continuously",
      "Batch learning only runs on disconnected air-gapped computers",
      "Online learning cannot be used for classification problems"
    ],
    correctAnswer: 0,
    explanation: "In batch (offline) learning, the model is trained on a static dataset all at once. In online (incremental) learning, the system updates its weights continuously from a live stream of incoming data using methods like partial_fit().",
    officialRef: "PCEI-30-01 Block 2.1 - Online Learning",
    tags: ["online-learning", "incremental", "streaming"]
  },
  {
    id: "pcei-2-012",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Instance-Based Learning",
    difficulty: "Intermediate",
    question: "How does 'Instance-Based Learning' (like K-Nearest Neighbors) generate predictions for new data points?",
    codeSnippet: "# Instance-based (lazy learning):\n# Memorizes training instances; calculates distances to nearest neighbors at query time\ndistances = [euclidean_dist(x_new, x_i) for x_i in X_train]",
    options: [
      "It compares new query instances directly to stored training instances in memory rather than constructing an explicit generalized abstraction model",
      "It trains a 50-layer deep neural network before making each prediction",
      "It compiles Python code into native x86 machine instructions",
      "It queries an external SQL database to look up hardcoded answers"
    ],
    correctAnswer: 0,
    explanation: "Instance-based (lazy) learning algorithms simply store training examples in memory. When a new input arrives, they compute distances to stored instances to make predictions on the fly without building an explicit internal model.",
    officialRef: "PCEI-30-01 Block 2.1 - Instance-Based Learning",
    tags: ["instance-based", "knn", "lazy-learning"]
  },
  {
    id: "pcei-2-013",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Model-Based Learning",
    difficulty: "Beginner",
    question: "What characterizes 'Model-Based Learning' (like Linear Regression or Support Vector Machines)?",
    codeSnippet: "# Model-based learning:\n# Learns a parameterized mathematical model f(x) = wx + b from data during training\nprediction = model.predict(X_new)",
    options: [
      "It builds a parameterized mathematical abstraction or decision boundary during training that is subsequently used for fast inference",
      "It requires physical plastic models to be manufactured in a workshop",
      "It stores every single training data row permanently in RAM during runtime",
      "It cannot output numerical predictions"
    ],
    correctAnswer: 0,
    explanation: "Model-based learning extracts parameters from data to construct an explicit mathematical model (like a regression line or decision boundary). Once trained, raw training data can be discarded, and inference is very fast.",
    officialRef: "PCEI-30-01 Block 2.1 - Model-Based Learning",
    tags: ["model-based", "parameters", "inference"]
  },
  {
    id: "pcei-2-014",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Active Learning",
    difficulty: "Advanced",
    question: "What is the operational methodology of 'Active Learning' in machine learning workflows?",
    codeSnippet: "# Active learning cycle:\n# Model identifies samples with highest uncertainty -> queries human annotator for labels",
    options: [
      "The learning algorithm actively queries a human expert (oracle) to label only the most informative or uncertain unlabeled samples",
      "The computer runs physical fitness simulations while training neural networks",
      "The algorithm automatically deletes all low-performing model weights every 10 seconds",
      "The model runs exclusively on battery power"
    ],
    correctAnswer: 0,
    explanation: "Active learning prioritizes data annotation: the model analyzes a vast pool of unlabeled data, identifies the specific instances where it has highest uncertainty, and asks human experts to label only those high-value points.",
    officialRef: "PCEI-30-01 Block 2.1 - Active Learning",
    tags: ["active-learning", "annotation", "uncertainty"]
  },
  {
    id: "pcei-2-015",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Transfer Learning",
    difficulty: "Beginner",
    question: "What core capability does 'Transfer Learning' provide to machine learning practitioners?",
    codeSnippet: "# Transfer learning concept:\n# Take pre-trained base model (trained on millions of images) -> fine-tune on custom 500 images\nbase_model = load_pretrained('resnet50')\ncustom_classifier = add_top_layers(base_model)",
    options: [
      "Reusing knowledge and feature representations learned from a large dataset on one task to solve a related task with much less data and compute",
      "Transferring physical computer hardware from one office desk to another",
      "Converting Python scripts into executable Java JAR files",
      "Copying files across local network drives using FTP"
    ],
    correctAnswer: 0,
    explanation: "Transfer learning leverages models pre-trained on massive datasets (like ImageNet or web corpora) and adapts (fine-tunes) them to a specific target domain, drastically reducing training time and required labeled data.",
    officialRef: "PCEI-30-01 Block 2.1 - Transfer Learning",
    tags: ["transfer-learning", "fine-tuning", "efficiency"]
  },
  {
    id: "pcei-2-016",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Ensemble Learning",
    difficulty: "Intermediate",
    question: "What is the fundamental philosophy underlying 'Ensemble Learning' (e.g., Random Forests, Gradient Boosting)?",
    codeSnippet: "# Ensemble principle: Wisdom of the crowd\n# Combining multiple weak or diverse learners to produce a strong learner\nfinal_prediction = majority_vote([m.predict(x) for m in models])",
    options: [
      "Combining predictions from multiple individual models to achieve higher accuracy and robustness than any single constituent model",
      "Running Python code on multiple monitors simultaneously",
      "Formatting training code into musical rhythm patterns",
      "Using a single decision tree with infinite depth"
    ],
    correctAnswer: 0,
    explanation: "Ensemble methods combine multiple base models (either through bagging, boosting, or voting) to reduce variance and bias, producing aggregate predictions that are more reliable and accurate than individual models.",
    officialRef: "PCEI-30-01 Block 2.1 - Ensemble Learning",
    tags: ["ensemble", "bagging", "boosting"]
  },
  {
    id: "pcei-2-017",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Supervised Learning Tasks",
    difficulty: "Beginner",
    question: "Which of the following problems is an example of a Supervised Learning task?",
    codeSnippet: "# Task examples:\n# A: House price prediction (continuous target) -> Regression (Supervised)\n# B: Customer grouping -> Clustering (Unsupervised)\n# C: Robot maze navigation -> Reinforcement Learning",
    options: [
      "Predicting whether an email is spam or not based on labeled historical emails",
      "Grouping 10,000 unorganized customer transaction receipts into distinct clusters",
      "Teaching an autonomous drone to fly through windy canyons using reward signals",
      "Compressing a 100-dimensional matrix into 3 dimensions without target labels"
    ],
    correctAnswer: 0,
    explanation: "Classifying an email as spam or not spam is a classic supervised binary classification problem because the model is trained on emails that already possess known 'spam' or 'ham' ground-truth labels.",
    officialRef: "PCEI-30-01 Block 2.1 - Task Identification",
    tags: ["supervised", "classification", "spam-filter"]
  },
  {
    id: "pcei-2-018",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Unsupervised Learning Tasks",
    difficulty: "Beginner",
    question: "Which of the following problems is an example of an Unsupervised Learning task?",
    codeSnippet: "# Unsupervised scenario:\n# Discovering customer segments from raw demographic data without predefined categories",
    options: [
      "Customer market segmentation based on purchasing patterns without predefined target groups",
      "Forecasting tomorrow's exact temperature in Celsius from labeled sensor logs",
      "Classifying medical biopsies as malignant or benign from labeled pathology slides",
      "Training a robotic arm to catch a ball using distance penalties"
    ],
    correctAnswer: 0,
    explanation: "Customer segmentation is an unsupervised clustering task: the algorithm analyzes customer features to discover natural groupings without pre-assigned labels or predefined target categories.",
    officialRef: "PCEI-30-01 Block 2.1 - Task Identification",
    tags: ["unsupervised", "segmentation", "clustering"]
  },
  {
    id: "pcei-2-019",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Reinforcement Learning Tasks",
    difficulty: "Beginner",
    question: "Which of the following applications is an archetypal Reinforcement Learning task?",
    codeSnippet: "# RL scenario:\n# Training an agent to master Chess or Go by playing against itself and receiving win/loss rewards",
    options: [
      "Training an autonomous agent to master the game of Go through millions of self-play reward iterations",
      "Predicting annual revenue from a historical balance sheet CSV file",
      "Filtering duplicate rows out of a customer address database",
      "Converting scanned PDF documents into plain text using OCR"
    ],
    correctAnswer: 0,
    explanation: "Teaching an agent to master complex games (like Go, Chess, or Atari) through sequential actions and terminal win/loss rewards is the quintessential application of Reinforcement Learning.",
    officialRef: "PCEI-30-01 Block 2.1 - Task Identification",
    tags: ["reinforcement-learning", "alpha-go", "game-play"]
  },
  {
    id: "pcei-2-020",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.1",
    category: "Ground Truth",
    difficulty: "Beginner",
    question: "In machine learning terminology, what does the term 'Ground Truth' signify?",
    codeSnippet: "# Ground truth comparison:\ny_true = [1, 0, 1, 1]  # Ground truth (actual reality)\ny_pred = [1, 0, 0, 1]  # Model predictions",
    options: [
      "The verified, real-world factual label or measurement against which a model's predictions are compared and evaluated",
      "The elevation of the physical data center above sea level",
      "The default operating system root directory path",
      "The theoretical limit of CPU transistor density"
    ],
    correctAnswer: 0,
    explanation: "Ground truth represents the verified, objective empirical reality (the actual known values or human-validated labels) used to train models and against which prediction errors are measured.",
    officialRef: "PCEI-30-01 Block 2.1 - Ground Truth",
    tags: ["ground-truth", "labels", "evaluation"]
  },
  {
    id: "pcei-2-021",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Classification vs Regression",
    difficulty: "Beginner",
    question: "What is the fundamental difference between a 'Classification' problem and a 'Regression' problem in supervised learning?",
    codeSnippet: "# Classification vs Regression:\n# Regression: Output is continuous numerical value (e.g., house price: $340,500.50)\n# Classification: Output is discrete categorical class (e.g., 'Spam' vs 'Not Spam')",
    options: [
      "Classification predicts discrete categorical class labels; regression predicts continuous numerical quantities",
      "Classification works only on images, while regression works only on text",
      "Classification requires quantum computers, while regression runs on classical CPUs",
      "Regression cannot be evaluated with mathematical error formulas"
    ],
    correctAnswer: 0,
    explanation: "Supervised tasks fall into two categories: Classification outputs discrete categories (e.g., dog vs cat, loan approved vs rejected), while Regression outputs continuous numerical values (e.g., house price, temperature).",
    officialRef: "PCEI-30-01 Block 2.2 - Classification vs Regression",
    tags: ["classification", "regression", "prediction-types"]
  },
  {
    id: "pcei-2-022",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Linear Regression",
    difficulty: "Beginner",
    question: "In simple Linear Regression, what do the parameters 'w' (weight/slope) and 'b' (bias/intercept) represent in the formula y = w*x + b?",
    codeSnippet: "# Linear regression equation:\n# y: predicted value\n# w: slope (rate of change in y per unit change in x)\n# b: y-intercept (value of y when x = 0)\ny_pred = weight * x + bias",
    options: [
      "'w' is the rate of change in y per unit change in x (slope), and 'b' is the value of y when x equals zero (y-intercept)",
      "'w' is the web socket port number, and 'b' is the baud rate of the modem",
      "'w' is the number of CPU cores, and 'b' is the battery percentage",
      "'w' is the word count, and 'b' is the byte encoding format"
    ],
    correctAnswer: 0,
    explanation: "In the univariate line equation y = wx + b, w (weight or slope) determines the steepness and direction of the relationship, and b (bias or intercept) shifts the line vertically on the Cartesian coordinate plane.",
    officialRef: "PCEI-30-01 Block 2.2 - Linear Regression",
    tags: ["linear-regression", "slope", "intercept"]
  },
  {
    id: "pcei-2-023",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Ordinary Least Squares",
    difficulty: "Intermediate",
    question: "How does Ordinary Least Squares (OLS) find the optimal line of best fit in Linear Regression?",
    codeSnippet: "# Ordinary Least Squares objective:\n# Minimize sum of squared vertical differences (residuals) between actual and predicted values\nresiduals = y_actual - y_pred\nloss = sum(r**2 for r in residuals)",
    options: [
      "By minimizing the sum of squared differences (residuals) between actual target values and predicted values",
      "By drawing a random diagonal line across the scatter plot",
      "By maximizing the variance of the input features",
      "By rounding all numbers to the nearest prime integer"
    ],
    correctAnswer: 0,
    explanation: "Ordinary Least Squares (OLS) calculates optimal coefficients by minimizing the sum of squared residuals (the vertical distances between each empirical data point and the fitted regression line).",
    officialRef: "PCEI-30-01 Block 2.2 - OLS",
    tags: ["ols", "least-squares", "residuals"]
  },
  {
    id: "pcei-2-024",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Logistic Regression",
    difficulty: "Intermediate",
    question: "Despite its name containing 'Regression', what type of problem is Logistic Regression actually designed to solve?",
    codeSnippet: "# Logistic regression maps linear combination to a probability between 0 and 1:\nimport math\ndef sigmoid(z):\n    return 1 / (1 + math.exp(-z))",
    options: [
      "Binary (and multiclass) classification problems by predicting the probability that an instance belongs to a class",
      "Continuous real estate home valuation forecasting",
      "High-precision astronomical trajectory calculation",
      "Unsupervised centroid clustering of genomic sequences"
    ],
    correctAnswer: 0,
    explanation: "Logistic Regression is a classification algorithm. It takes a linear combination of features and passes it through the sigmoid (logistic) function, outputting a probability between 0 and 1 that maps to class labels.",
    officialRef: "PCEI-30-01 Block 2.2 - Logistic Regression",
    tags: ["logistic-regression", "classification", "sigmoid"]
  },
  {
    id: "pcei-2-025",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Sigmoid Function",
    difficulty: "Intermediate",
    question: "What mathematical property makes the Sigmoid (logistic) function S(z) = 1 / (1 + e^(-z)) ideal for binary classification?",
    codeSnippet: "# Sigmoid output bounds:\n# As z -> +infinity, S(z) -> 1.0\n# As z -> -infinity, S(z) -> 0.0\n# When z = 0, S(z) = 0.5",
    options: [
      "It squashes any real-valued number into a strictly bounded range between 0 and 1, allowing it to be interpreted as a probability",
      "It converts all negative numbers into imaginary complex numbers",
      "It returns negative infinity for all odd integers",
      "It executes in constant zero nanoseconds on all hardware"
    ],
    correctAnswer: 0,
    explanation: "The sigmoid function maps any input from (-\u221e, +\u221e) smoothly into the interval (0, 1), making its output directly interpretable as the probability P(y=1|x) of belonging to the positive class.",
    officialRef: "PCEI-30-01 Block 2.2 - Sigmoid Function",
    tags: ["sigmoid", "activation", "probability"]
  },
  {
    id: "pcei-2-026",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Decision Threshold",
    difficulty: "Beginner",
    question: "In binary classification with Logistic Regression, what is the default decision threshold for assigning the positive class?",
    codeSnippet: "# Standard binary decision threshold:\nprobability = model.predict_proba(X)[0][1]\npredicted_class = 1 if probability >= 0.5 else 0",
    options: [
      "0.5 (50% probability)",
      "0.0 (0% probability)",
      "1.0 (100% probability)",
      "0.99 (99% probability)"
    ],
    correctAnswer: 0,
    explanation: "By default, if the predicted probability output is >= 0.5, the instance is classified into the positive class (1); otherwise, it is assigned to the negative class (0). The threshold can be tuned to prioritize precision or recall.",
    officialRef: "PCEI-30-01 Block 2.2 - Decision Threshold",
    tags: ["decision-threshold", "binary-classification", "cutoff"]
  },
  {
    id: "pcei-2-027",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Decision Trees",
    difficulty: "Beginner",
    question: "How does a Decision Tree algorithm make predictions for new data points?",
    codeSnippet: "# Decision tree branching logic:\nif age > 50:\n    if cholesterol > 240:\n        return 'High Risk'\n    else:\n        return 'Moderate Risk'\nelse:\n    return 'Low Risk'",
    options: [
      "By traversing a hierarchical sequence of IF-THEN feature split tests from the root node down to a leaf node",
      "By calculating the inverse of a high-dimensional covariance matrix",
      "By simulating biological DNA mutation across generations",
      "By randomly picking a number between 1 and 100"
    ],
    correctAnswer: 0,
    explanation: "A Decision Tree recursively evaluates feature questions at each internal node (e.g., 'income > $50k?'), routing instances down branches until arriving at a terminal leaf node that assigns a class or numerical value.",
    officialRef: "PCEI-30-01 Block 2.2 - Decision Trees",
    tags: ["decision-trees", "nodes", "splits"]
  },
  {
    id: "pcei-2-028",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Tree Splitting Criteria",
    difficulty: "Intermediate",
    question: "What two mathematical metrics are most commonly used to evaluate the quality of a split in Classification Decision Trees?",
    codeSnippet: "# Splitting criteria formulas:\n# Gini Impurity: 1 - sum(p_i ** 2)\n# Entropy: -sum(p_i * log2(p_i))",
    options: [
      "Gini Impurity and Information Gain (Entropy)",
      "Euclidean distance and Manhattan distance",
      "Mean Squared Error and R-squared",
      "Pearson correlation and Spearman rank"
    ],
    correctAnswer: 0,
    explanation: "Decision trees evaluate split quality using purity metrics: Gini Impurity (used by CART) and Information Gain based on Entropy (used by ID3/C4.5). Both measure the degree of disorder or class mixing in a node.",
    officialRef: "PCEI-30-01 Block 2.2 - Splitting Criteria",
    tags: ["gini-impurity", "entropy", "information-gain"]
  },
  {
    id: "pcei-2-029",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Gini Impurity",
    difficulty: "Intermediate",
    question: "What is the Gini Impurity of a decision tree leaf node that contains only samples from a single class (pure node)?",
    codeSnippet: "# Pure node calculation:\n# p = 1.0 -> Gini = 1 - (1.0 ** 2) = 0.0\ngini_pure = 1 - (1.0**2)",
    options: [
      "0.0",
      "1.0",
      "0.5",
      "-1.0"
    ],
    correctAnswer: 0,
    explanation: "A completely pure node (where all samples belong to exactly one class) has a Gini Impurity of 0.0. A node with an even 50/50 split of two classes has maximum impurity of 0.5.",
    officialRef: "PCEI-30-01 Block 2.2 - Gini Calculation",
    tags: ["gini", "pure-node", "impurity"]
  },
  {
    id: "pcei-2-030",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Decision Tree Pruning",
    difficulty: "Intermediate",
    question: "Why is 'Pruning' (limiting max_depth or min_samples_split) critical when training Decision Trees?",
    codeSnippet: "# Preventing tree overfitting:\nfrom sklearn.tree import DecisionTreeClassifier\n# Constraining tree depth prevents memorizing noise\nclf = DecisionTreeClassifier(max_depth=4, min_samples_leaf=10)",
    options: [
      "Unconstrained decision trees will continue splitting until every training point is memorized, causing severe overfitting",
      "Decision trees cannot run if they have more than 3 branches",
      "Pruning increases the physical RAM memory consumed by 500%",
      "Pruning translates the tree logic into binary machine code"
    ],
    correctAnswer: 0,
    explanation: "Without depth constraints or pruning, a decision tree will split until each leaf holds a single training point, creating an over-complex tree that memorizes noise and fails to generalize to unseen test data.",
    officialRef: "PCEI-30-01 Block 2.2 - Tree Pruning",
    tags: ["pruning", "overfitting", "max-depth"]
  },
  {
    id: "pcei-2-031",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "K-Nearest Neighbors",
    difficulty: "Beginner",
    question: "How does the K-Nearest Neighbors (KNN) classification algorithm determine the class of an unknown query point?",
    codeSnippet: "# KNN majority voting:\n# 1. Compute distance to all training points\n# 2. Pick top K closest points\n# 3. Predict majority class among those K neighbors",
    options: [
      "By identifying the 'K' closest training points in feature space and taking a majority vote of their classes",
      "By fitting a straight regression line through all data points",
      "By constructing a deep neural network with K hidden layers",
      "By calculating the average salary of all users in the database"
    ],
    correctAnswer: 0,
    explanation: "KNN is an intuitive instance-based classifier: to classify a new point, it measures mathematical distance to all training points, identifies the K nearest neighbors, and assigns the most common class among them.",
    officialRef: "PCEI-30-01 Block 2.2 - KNN",
    tags: ["knn", "majority-voting", "distance"]
  },
  {
    id: "pcei-2-032",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Euclidean Distance",
    difficulty: "Intermediate",
    question: "What is the Euclidean distance formula between two 2D points (x1, y1) and (x2, y2)?",
    codeSnippet: "# Euclidean distance in Python:\nimport math\ndef euclidean_dist(p1, p2):\n    return math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2)",
    options: [
      "sqrt((x1 - x2)^2 + (y1 - y2)^2)",
      "|x1 - x2| + |y1 - y2|",
      "max(|x1 - x2|, |y1 - y2|)",
      "(x1 * x2) + (y1 * y2)"
    ],
    correctAnswer: 0,
    explanation: "Euclidean distance is the straight-line ('as the crow flies') distance between two points in Euclidean space, calculated as the square root of the sum of squared coordinate differences.",
    officialRef: "PCEI-30-01 Block 2.2 - Euclidean Distance",
    tags: ["euclidean-distance", "metrics", "geometry"]
  },
  {
    id: "pcei-2-033",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Manhattan Distance",
    difficulty: "Intermediate",
    question: "What is Manhattan Distance (L1 norm / taxicab distance) between two points?",
    codeSnippet: "# Manhattan distance in Python:\ndef manhattan_dist(p1, p2):\n    return abs(p1[0] - p2[0]) + abs(p1[1] - p2[1])",
    options: [
      "The sum of the absolute differences of their Cartesian coordinates: |x1 - x2| + |y1 - y2|",
      "The square root of the sum of squared differences",
      "The angle between two vectors measured in radians",
      "The multiplication of x coordinates divided by y coordinates"
    ],
    correctAnswer: 0,
    explanation: "Manhattan distance measures grid-like distance (as a taxi traverses city blocks), computed as the sum of absolute differences along each dimension: |x1 - x2| + |y1 - y2|.",
    officialRef: "PCEI-30-01 Block 2.2 - Manhattan Distance",
    tags: ["manhattan-distance", "l1-norm", "metrics"]
  },
  {
    id: "pcei-2-034",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "KNN Scaling Sensitivity",
    difficulty: "Intermediate",
    question: "Why is Feature Scaling (Normalization or Standardization) mandatory before applying K-Nearest Neighbors (KNN)?",
    codeSnippet: "# Why scaling matters in distance calculations:\n# Age: 20 to 80 (difference: 60)\n# Salary: $20,000 to $200,000 (difference: $180,000)\n# Without scaling, salary completely dominates distance!",
    options: [
      "Features with large numerical magnitudes (e.g., Salary: $100,000) will completely dominate the distance calculation over small features (e.g., Age: 25)",
      "KNN will throw an unhandled ZeroDivisionError exception if features are unscaled",
      "Unscaled data causes computer monitors to lose color resolution",
      "Unscaled features turn KNN into an unsupervised clustering algorithm"
    ],
    correctAnswer: 0,
    explanation: "Because distance metrics compute numerical differences, a feature spanning thousands (like income) will mathematically overshadow a feature spanning decimals (like GPA), rendering the smaller feature irrelevant unless scaled.",
    officialRef: "PCEI-30-01 Block 2.2 - KNN Feature Scaling",
    tags: ["feature-scaling", "knn", "distance-metrics"]
  },
  {
    id: "pcei-2-035",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Choice of K in KNN",
    difficulty: "Intermediate",
    question: "What is the consequence of choosing a very small value of K (e.g., K = 1) in K-Nearest Neighbors?",
    codeSnippet: "# Effect of K=1:\n# Decision boundary is extremely complex, jagged, and sensitive to isolated outliers/noise -> High variance / Overfitting",
    options: [
      "The model becomes highly sensitive to noise and outliers, resulting in complex jagged decision boundaries (High Variance / Overfitting)",
      "The model becomes completely linear and underfits the data",
      "The algorithm takes 100 times longer to train",
      "KNN will refuse to output any predictions"
    ],
    correctAnswer: 0,
    explanation: "When K=1, the model strictly follows the single closest point, making it vulnerable to mislabeled training points or noise (overfitting). Higher K smooths the boundary, reducing variance at the cost of slight bias.",
    officialRef: "PCEI-30-01 Block 2.2 - Choosing K",
    tags: ["k-value", "knn", "overfitting"]
  },
  {
    id: "pcei-2-036",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Naive Bayes Classifier",
    difficulty: "Intermediate",
    question: "What is the 'naive' assumption made by the Naive Bayes classification algorithm?",
    codeSnippet: "# Naive Bayes assumption:\n# P(x1, x2, ..., xn | y) = P(x1 | y) * P(x2 | y) * ... * P(xn | y)\n# Assumes all features are conditionally independent given class label y",
    options: [
      "It assumes that all input features are mutually independent of each other given the class label",
      "It assumes that all training labels are completely incorrect",
      "It assumes that computers cannot calculate logarithms",
      "It assumes that all dataset columns are formatted as strings"
    ],
    correctAnswer: 0,
    explanation: "Naive Bayes applies Bayes' Theorem with the strong ('naive') conditional independence assumption that the presence or value of one feature does not affect any other feature, given the class label.",
    officialRef: "PCEI-30-01 Block 2.2 - Naive Bayes",
    tags: ["naive-bayes", "conditional-independence", "probabilistic"]
  },
  {
    id: "pcei-2-037",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Bayes Theorem",
    difficulty: "Intermediate",
    question: "What does Bayes' Theorem P(A|B) = [P(B|A) * P(A)] / P(B) mathematically compute?",
    codeSnippet: "# Bayes' Theorem terms:\n# P(A|B): Posterior probability (probability of hypothesis A given observed evidence B)\n# P(B|A): Likelihood\n# P(A): Prior probability\n# P(B): Marginal evidence",
    options: [
      "The posterior probability of hypothesis A occurring given that evidence B has been observed",
      "The linear correlation between two continuous random variables",
      "The arithmetic mean of an array of integers",
      "The Euclidean distance between two geographic coordinates"
    ],
    correctAnswer: 0,
    explanation: "Bayes' Theorem provides a principled way to update probabilities in light of new evidence: Posterior = (Likelihood * Prior) / Evidence.",
    officialRef: "PCEI-30-01 Block 2.2 - Bayes Theorem",
    tags: ["bayes-theorem", "probability", "posterior"]
  },
  {
    id: "pcei-2-038",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Naive Bayes Applications",
    difficulty: "Beginner",
    question: "Why is Naive Bayes historically renowned and widely used for text spam filtering and sentiment analysis?",
    codeSnippet: "# Text classification with Naive Bayes:\n# Fast, handles high-dimensional vocabulary spaces well, works with word frequencies",
    options: [
      "It is fast to train, scales cleanly to high-dimensional word feature vocabularies, and performs surprisingly well despite the independence assumption",
      "It is the only algorithm allowed under international email protocol specifications",
      "It automatically decrypts private user passwords",
      "It requires zero training examples to classify spam"
    ],
    correctAnswer: 0,
    explanation: "In text classification, each word is a feature (tens of thousands of dimensions). Naive Bayes computes probabilities via simple counting, making it blazingly fast and remarkably effective for spam and sentiment.",
    officialRef: "PCEI-30-01 Block 2.2 - Naive Bayes Text",
    tags: ["spam-filter", "text-classification", "nlp"]
  },
  {
    id: "pcei-2-039",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "Support Vector Machines",
    difficulty: "Intermediate",
    question: "In Support Vector Machines (SVM), what is the 'Maximum Margin Hyperplane'?",
    codeSnippet: "# SVM objective:\n# Find separating hyperplane that maximizes the geometric distance (margin) to the closest support vectors of any class",
    options: [
      "The decision boundary that maximizes the geometric distance (margin) between the separating boundary and the nearest data points of each class",
      "A circular boundary that encloses all positive data points",
      "A line that connects the average coordinates of each class",
      "A plane that projects high-dimensional data onto a 1-dimensional line"
    ],
    correctAnswer: 0,
    explanation: "SVM searches for the optimal decision boundary (hyperplane) that separates classes while maximizing the margin (the gap to the nearest points, known as support vectors), providing strong theoretical generalization.",
    officialRef: "PCEI-30-01 Block 2.2 - SVM",
    tags: ["svm", "margin", "support-vectors"]
  },
  {
    id: "pcei-2-040",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.2",
    category: "SVM Kernel Trick",
    difficulty: "Advanced",
    question: "What is the 'Kernel Trick' in Support Vector Machines?",
    codeSnippet: "# Kernel trick:\n# Implicitly maps non-linearly separable inputs into higher-dimensional space where a linear boundary exists\n# Example kernels: RBF (Radial Basis Function), Polynomial",
    options: [
      "A mathematical technique that maps inputs into a higher-dimensional space where data becomes linearly separable, without explicitly computing high-dimensional coordinates",
      "A technique for modifying the Linux operating system kernel to increase model accuracy",
      "A hardware trick that overclocks CPU clock frequencies during model fitting",
      "A method for converting floating-point numbers into 8-bit integers"
    ],
    correctAnswer: 0,
    explanation: "The Kernel Trick uses kernel functions (like RBF or Polynomial) to calculate inner products in higher-dimensional feature space directly, finding non-linear decision boundaries efficiently without expensive explicit coordinate transformations.",
    officialRef: "PCEI-30-01 Block 2.2 - Kernel Trick",
    tags: ["kernel-trick", "svm", "non-linear"]
  },
  {
    id: "pcei-2-041",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "Clustering vs Classification",
    difficulty: "Beginner",
    question: "What is the primary difference between 'Clustering' and 'Classification'?",
    codeSnippet: "# Comparison:\n# Classification (Supervised): Predict predefined labels (e.g., Cat vs Dog)\n# Clustering (Unsupervised): Discover natural groupings in unlabeled data",
    options: [
      "Classification uses pre-labeled data to assign instances to known categories; clustering groups unlabeled data based on inherent similarities",
      "Clustering is supervised, while classification is unsupervised",
      "Classification only operates on continuous numbers, while clustering only operates on text",
      "There is no difference; both terms describe the exact same algorithm"
    ],
    correctAnswer: 0,
    explanation: "Classification assigns data points to predefined, known target classes using labeled training data. Clustering discovers natural, previously unknown clusters based on distance or feature similarity without target labels.",
    officialRef: "PCEI-30-01 Block 2.3 - Clustering vs Classification",
    tags: ["clustering", "classification", "comparison"]
  },
  {
    id: "pcei-2-042",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "K-Means Algorithm",
    difficulty: "Beginner",
    question: "What are the two iterative steps that K-Means clustering alternates between until convergence?",
    codeSnippet: "# K-Means iterative loop:\nwhile not converged:\n    # Step 1: Assign each point to nearest centroid\n    clusters = assign_points_to_centroids(X, centroids)\n    # Step 2: Recompute centroid as mean of assigned points\n    centroids = [points.mean(axis=0) for points in clusters]",
    options: [
      "1. Assignment step (assign each point to nearest centroid) and 2. Update step (recalculate centroids as the mean of assigned points)",
      "1. Forward propagation step and 2. Backpropagation step",
      "1. Compiling source code and 2. Linking object libraries",
      "1. Encrypting data blocks and 2. Generating hash digests"
    ],
    correctAnswer: 0,
    explanation: "K-Means iteratively alternates between: 1. Assignment (each point is assigned to its nearest centroid based on Euclidean distance) and 2. Update (centroids are recalculated as the mean position of all assigned points).",
    officialRef: "PCEI-30-01 Block 2.3 - K-Means",
    tags: ["k-means", "centroids", "clustering-algorithm"]
  },
  {
    id: "pcei-2-043",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "K-Means Centroid",
    difficulty: "Beginner",
    question: "In K-Means clustering, what is a 'Centroid'?",
    codeSnippet: "# Centroid definition:\n# The geometric center / arithmetic mean of all coordinates belonging to a cluster\ncentroid = sum(points_in_cluster) / len(points_in_cluster)",
    options: [
      "The arithmetic mean coordinate position of all data points belonging to a specific cluster",
      "The outlier point located farthest away from all other points",
      "The software license key associated with scikit-learn",
      "The physical center of the computer's CPU die"
    ],
    correctAnswer: 0,
    explanation: "A centroid represents the center of a cluster in multi-dimensional space, calculated as the arithmetic mean of all data points assigned to that cluster.",
    officialRef: "PCEI-30-01 Block 2.3 - Centroids",
    tags: ["centroids", "mean", "k-means"]
  },
  {
    id: "pcei-2-044",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "K-Means Inertia",
    difficulty: "Intermediate",
    question: "What does 'Inertia' (Within-Cluster Sum of Squares - WCSS) measure in K-Means clustering?",
    codeSnippet: "# Inertia (WCSS) formula:\n# Sum of squared distances of samples to their closest cluster center\ninertia = sum(distance(x, centroid_k)**2 for x in cluster_k for cluster_k in clusters)",
    options: [
      "The sum of squared Euclidean distances from each data point to its assigned cluster centroid (measuring cluster tightness)",
      "The time in seconds required for the clustering algorithm to complete",
      "The resistance of a computer motherboard to electrical current changes",
      "The number of rows with missing values in a dataset"
    ],
    correctAnswer: 0,
    explanation: "Inertia (or WCSS) measures how internally cohesive or tight clusters are: lower inertia indicates that points are packed tightly around their respective cluster centroids.",
    officialRef: "PCEI-30-01 Block 2.3 - Inertia",
    tags: ["inertia", "wcss", "cluster-compactness"]
  },
  {
    id: "pcei-2-045",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "Elbow Method",
    difficulty: "Intermediate",
    question: "How is the 'Elbow Method' used to select the optimal number of clusters (K) in K-Means?",
    codeSnippet: "# Elbow method visualization:\n# Plot Inertia vs K\n# Look for the bend ('elbow') where inertia decrease levels off significantly",
    options: [
      "By plotting Inertia against different values of K and identifying the 'elbow' point where the rate of inertia reduction sharply levels off",
      "By choosing the value of K that maximizes CPU memory usage",
      "By running K-Means until the computer crashes",
      "By selecting K equal to the total number of rows in the dataset"
    ],
    correctAnswer: 0,
    explanation: "The Elbow Method plots inertia against K. As K increases, inertia naturally drops; the optimal K is located at the 'elbow' bend where adding more clusters yields diminishing returns in variance explained.",
    officialRef: "PCEI-30-01 Block 2.3 - Elbow Method",
    tags: ["elbow-method", "k-selection", "hyperparameter"]
  },
  {
    id: "pcei-2-046",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "Silhouette Score",
    difficulty: "Intermediate",
    question: "What does the Silhouette Score measure when evaluating clustering results?",
    codeSnippet: "# Silhouette Score bounds:\n# Ranges from -1.0 to +1.0\n# +1: Well matched to own cluster and well separated from neighboring clusters\n#  0: On or very close to decision boundary\n# -1: Point may be assigned to wrong cluster",
    options: [
      "How similar an object is to its own cluster (cohesion) compared to other clusters (separation), ranging from -1 to +1",
      "The percentage of memory cache hits during dataset loading",
      "The ratio of male to female users in a demographic survey",
      "The number of clusters that have an odd number of members"
    ],
    correctAnswer: 0,
    explanation: "The Silhouette Coefficient evaluates cluster quality: a score near +1 means points are well within their own cluster and far from other clusters; 0 means points are on cluster boundaries; negative scores imply misclustering.",
    officialRef: "PCEI-30-01 Block 2.3 - Silhouette Score",
    tags: ["silhouette-score", "cluster-evaluation", "cohesion-separation"]
  },
  {
    id: "pcei-2-047",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "K-Means Limitations",
    difficulty: "Intermediate",
    question: "Which dataset characteristic poses a major difficulty for the standard K-Means clustering algorithm?",
    codeSnippet: "# K-Means assumptions:\n# Assumes spherical, equal-variance clusters\n# Fails on non-spherical shapes (e.g., concentric circles, crescents, moons)",
    options: [
      "Non-spherical, elongated, or complex geometric cluster shapes (like concentric circles or crescent moons)",
      "Datasets stored in CSV file format",
      "Datasets containing exactly two numerical columns",
      "Datasets with fewer than 1,000,000 rows"
    ],
    correctAnswer: 0,
    explanation: "K-Means assumes clusters are spherical and isotropic (equal variance in all directions). It struggles on non-convex geometries, elongated clusters, or clusters with widely differing densities.",
    officialRef: "PCEI-30-01 Block 2.3 - K-Means Limitations",
    tags: ["k-means-limitations", "non-spherical", "clustering"]
  },
  {
    id: "pcei-2-048",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "K-Means Initialization",
    difficulty: "Intermediate",
    question: "Why is the 'k-means++' initialization algorithm standard in scikit-learn instead of purely random centroid initialization?",
    codeSnippet: "# k-means++ logic:\n# Selects initial centroids spaced far apart from each other based on distance probability\n# Avoids poor local minima convergence",
    options: [
      "It spreads initial centroids far apart based on distance probabilities, preventing poor local minima traps and speeding convergence",
      "It runs in C++ instead of Python",
      "It automatically converts text data into audio files",
      "It guarantees that K will always equal 3"
    ],
    correctAnswer: 0,
    explanation: "Standard random initialization can place multiple centroids close together, trapping the algorithm in poor local minima. The k-means++ heuristic spreads initial centers out, leading to faster convergence and better clusterings.",
    officialRef: "PCEI-30-01 Block 2.3 - K-Means++",
    tags: ["k-means++", "initialization", "convergence"]
  },
  {
    id: "pcei-2-049",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "Hierarchical Clustering",
    difficulty: "Intermediate",
    question: "What graphical tree diagram is used in Hierarchical Clustering to visualize how nested clusters merge or split?",
    codeSnippet: "# Hierarchical clustering visualization:\nimport scipy.cluster.hierarchy as sch\n# A tree diagram showing the sequence of merges or splits\ndendrogram = sch.dendrogram(sch.linkage(X, method='ward'))",
    options: [
      "Dendrogram",
      "Scatter plot",
      "Histogram",
      "Confusion matrix"
    ],
    correctAnswer: 0,
    explanation: "A dendrogram is a tree diagram that illustrates the arrangement of clusters produced by hierarchical clustering, displaying the Euclidean distance or dissimilarity at which subclusters merge.",
    officialRef: "PCEI-30-01 Block 2.3 - Dendrogram",
    tags: ["dendrogram", "hierarchical-clustering", "visualization"]
  },
  {
    id: "pcei-2-050",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "Agglomerative Clustering",
    difficulty: "Intermediate",
    question: "How does 'Agglomerative' Hierarchical Clustering construct its hierarchy?",
    codeSnippet: "# Agglomerative (Bottom-up):\n# Start with each point as its own cluster -> iteratively merge closest clusters until one remains",
    options: [
      "A bottom-up approach: starts with each sample in its own individual cluster and iteratively merges the closest pairs of clusters",
      "A top-down approach: starts with one giant cluster containing all data and recursively splits it",
      "By fitting a linear regression line through the dataset",
      "By calculating the median of all columns simultaneously"
    ],
    correctAnswer: 0,
    explanation: "Agglomerative clustering is a bottom-up hierarchical method: each observation begins in its own cluster, and pairs of clusters are merged progressively up the hierarchy until a single cluster remains.",
    officialRef: "PCEI-30-01 Block 2.3 - Agglomerative",
    tags: ["agglomerative", "bottom-up", "hierarchical"]
  }
];
