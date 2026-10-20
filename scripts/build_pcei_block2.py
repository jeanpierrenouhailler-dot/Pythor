#!/usr/bin/env python3
"""
Generator for PCEI Block 2: Machine Learning Fundamentals (100 Cards)
Covers Chapters 2.1 - 2.5 for PCEI-30-01.
"""
import json

cards = []

def add_c(id_num, chap, cat, diff, q, snippet, opts, ans, exp, ref, tags):
    cards.append({
        "id": f"pcei-2-{id_num:03d}",
        "section": "Section 2",
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
# CHAPTER 2.1: Machine Learning Paradigms (Cards 1-20)
# ==========================================
add_c(1, "2.1", "ML Paradigms", "Beginner",
      "What is the defining characteristic of Supervised Learning?",
      "# Supervised learning dataset:\n# Features (X) paired with known ground-truth target labels (y)\nX = [[1500, 3], [2000, 4]]  # Square footage, bedrooms\ny = [350000, 450000]        # Known house prices\nmodel.fit(X, y)",
      ["The model learns patterns from input features paired with known ground-truth target labels",
       "The model discovers hidden groups without any labels or guidance",
       "The model learns purely through trial-and-error reward penalties in a game simulation",
       "The model operates without needing any digital training data"],
      0,
      "In Supervised Learning, the training dataset consists of input features paired with corresponding target labels (ground truth). The algorithm learns a predictive function that maps inputs to outputs.",
      "PCEI-30-01 Block 2.1 - Supervised Learning",
      ["supervised-learning", "labels", "ground-truth"])

add_c(2, "2.1", "ML Paradigms", "Beginner",
      "What is the core goal of Unsupervised Learning?",
      "# Unsupervised learning dataset:\n# Features (X) only, without any target labels\nX = [[24, 50000], [52, 120000], [25, 48000]]\nclusters = kmeans.fit_predict(X)",
      ["To predict continuous stock market prices from historical tables",
       "To discover inherent patterns, groupings, or low-dimensional structures in data without pre-existing target labels",
       "To reward an agent for navigating a maze without bumping into walls",
       "To translate English sentences into French with human corrections"],
      1,
      "Unsupervised Learning works with unlabeled data. Its primary goal is to find underlying structure, hidden clusters, or compressed representations (like customer segmentation with K-Means).",
      "PCEI-30-01 Block 2.1 - Unsupervised Learning",
      ["unsupervised-learning", "clustering", "unlabeled"])

add_c(3, "2.1", "ML Paradigms", "Beginner",
      "How does Reinforcement Learning (RL) fundamentally differ from Supervised Learning?",
      "# Reinforcement Learning loop:\n# Agent takes action -> Environment returns new state and scalar reward\nstate, reward, done, info = env.step(action)",
      ["RL learns from scalar reward or penalty feedback received through sequential trial-and-error interaction with an environment",
       "RL requires a human expert to label every single training row before learning begins",
       "RL cannot be implemented in Python",
       "RL only works on tabular Excel spreadsheets"],
      0,
      "Unlike supervised learning (which relies on static input-label pairs), reinforcement learning involves an active agent interacting with a dynamic environment, learning a policy by maximizing cumulative rewards over time.",
      "PCEI-30-01 Block 2.1 - Reinforcement Learning",
      ["reinforcement-learning", "rewards", "agent-environment"])

add_c(4, "2.1", "Semi-Supervised Learning", "Intermediate",
      "When is 'Semi-Supervised Learning' the most practical paradigm choice?",
      "# Semi-supervised dataset:\n# Small set of labeled data + Large volume of unlabeled data\nlabeled_data = load_samples(count=100)      # Expensive to label\nunlabeled_data = load_samples(count=100000)  # Cheap to collect",
      ["When labeling data is labor-intensive and expensive, but a massive volume of unlabeled data is readily available",
       "When no training data exists anywhere in the organization",
       "When target labels are 100% continuous floating-point numbers",
       "When deploying models exclusively on consumer smartwatch hardware"],
      0,
      "Semi-supervised learning combines a small amount of labeled data with a large amount of unlabeled data during training, drastically cutting data annotation costs while boosting accuracy over purely unsupervised methods.",
      "PCEI-30-01 Block 2.1 - Semi-Supervised",
      ["semi-supervised", "annotation-cost", "data-efficiency"])

add_c(5, "2.1", "Self-Supervised Learning", "Intermediate",
      "How do modern Foundation Models and Large Language Models (LLMs) utilize 'Self-Supervised Learning' during pre-training?",
      "# Self-supervised next-token prediction:\ntext = 'The capital of France is Paris'\ninput_seq = 'The capital of France is'\ntarget_token = 'Paris'  # Target generated automatically from the raw text itself!",
      ["By automatically generating supervisory training signals directly from the raw unannotated data (e.g., predicting masked words or the next token)",
       "By hiring millions of human workers to manually categorize every word",
       "By using genetic algorithms to physically rewire motherboard circuits",
       "By running supervised linear regressions on CSV spreadsheets"],
      0,
      "Self-supervised learning creates pseudo-labels automatically from raw data (e.g., masking words in a sentence and training the model to predict the missing word), enabling pre-training on web-scale text without manual labels.",
      "PCEI-30-01 Block 2.1 - Self-Supervised",
      ["self-supervised", "foundation-models", "pre-training"])

add_c(6, "2.1", "Features vs Labels", "Beginner",
      "In tabular machine learning, what is the distinction between 'Features' (X) and 'Labels' (y)?",
      "# Tabular representation:\n# Features: independent input variables\n# Label: dependent target variable to predict\nX = df[['age', 'income', 'credit_score']]\ny = df['loan_default']",
      ["Features are the input variables used to make a prediction; the label is the ground-truth target variable being predicted",
       "Features are database row indexes, while labels are file modification timestamps",
       "Features are strictly text strings, while labels must be negative integers",
       "There is no distinction; they are interchangeable technical synonyms"],
      0,
      "Features (X) are the measurable independent properties or attributes of the phenomenon being observed. The label (y) is the dependent variable or outcome that the supervised model is trained to predict.",
      "PCEI-30-01 Block 2.1 - Features vs Labels",
      ["features", "labels", "tabular-ml"])

add_c(7, "2.1", "Traditional vs ML", "Beginner",
      "How does the traditional software programming paradigm compare to the machine learning paradigm?",
      "# Traditional Programming: Rules + Data -> Answers\n# Machine Learning: Data + Answers -> Rules (Model)",
      ["Traditional programming combines hand-crafted rules and data to generate answers; machine learning takes data and answers to learn rules automatically",
       "Traditional programming requires GPUs, whereas machine learning requires mechanical punch cards",
       "Traditional programming cannot handle numbers greater than 100",
       "Machine learning never requires any computer hardware"],
      0,
      "As articulated by Arthur Samuel, traditional programming requires humans to write explicit step-by-step logic (Rules + Data = Output). In machine learning, algorithms infer the rules automatically (Data + Outputs = Rules/Model).",
      "PCEI-30-01 Block 2.1 - Traditional vs ML",
      ["programming-paradigms", "data-driven", "rules"])

add_c(8, "2.1", "Inductive Bias", "Advanced",
      "What is 'Inductive Bias' in a machine learning algorithm?",
      "# Linear regression inductive bias:\n# Assumes the underlying relationship between X and y is linear: y = wX + b",
      ["The set of foundational assumptions an algorithm uses to predict outputs for unseen inputs beyond the training data",
       "A deliberate mathematical prejudice programmed to discriminate against certain users",
       "The electrical voltage offset measured on motherboard power capacitors",
       "A hardware failure caused by overheating CPU heatsinks"],
      0,
      "Inductive bias is the set of prior assumptions an algorithm makes about the target function (e.g., linear regression assumes linearity; decision trees assume orthogonal feature splits) enabling it to generalize from finite data.",
      "PCEI-30-01 Block 2.1 - Inductive Bias",
      ["inductive-bias", "generalization", "assumptions"])

add_c(9, "2.1", "No Free Lunch Theorem", "Intermediate",
      "What does the famous 'No Free Lunch Theorem' state regarding machine learning algorithms?",
      "# No single model dominates across all possible problems:\n# Linear models, Trees, Neural nets all have domains where they shine",
      ["No single machine learning algorithm outperforms all others across all possible mathematical problem domains",
       "All open-source Python libraries must be purchased with commercial subscription fees",
       "Deep neural networks are mathematically guaranteed to be 100% optimal for every dataset",
       "Algorithms require zero electricity if trained during morning hours"],
      0,
      "The No Free Lunch theorem states that when averaged over all possible data distributions, no learning algorithm is universally superior to any other. Success requires matching the model's inductive bias to the specific problem.",
      "PCEI-30-01 Block 2.1 - No Free Lunch",
      ["no-free-lunch", "model-selection", "theory"])

add_c(10, "2.1", "Parametric vs Non-Parametric", "Intermediate",
      "What is the difference between a 'Parametric' and a 'Non-Parametric' machine learning model?",
      "# Parametric: Fixed number of parameters (e.g., Linear Regression: w, b)\n# Non-Parametric: Number of parameters grows with data size (e.g., KNN)",
      ["Parametric models have a fixed number of parameters regardless of training set size; non-parametric models can grow in complexity with more data",
       "Parametric models only run on cloud servers, while non-parametric models only run on laptops",
       "Parametric models do not use numerical weights",
       "Non-parametric models cannot be evaluated using accuracy metrics"],
      0,
      "Parametric algorithms (e.g., Linear Regression, Logistic Regression) summarize data with a fixed set of parameters. Non-parametric models (e.g., KNN, Decision Trees) make fewer prior assumptions and can grow in complexity with data.",
      "PCEI-30-01 Block 2.1 - Parametric vs Non-Parametric",
      ["parametric", "non-parametric", "model-complexity"])

add_c(11, "2.1", "Batch vs Online Learning", "Intermediate",
      "What distinguishes 'Online Learning' (Incremental Learning) from traditional 'Batch Learning'?",
      "# Online learning:\nfor batch_sample in real_time_stream:\n    model.partial_fit(batch_sample.X, batch_sample.y)",
      ["Online learning updates model parameters incrementally in real time as individual data points or small streams arrive, without retraining from scratch",
       "Online learning requires an active web browser tab to remain open continuously",
       "Batch learning only runs on disconnected air-gapped computers",
       "Online learning cannot be used for classification problems"],
      0,
      "In batch (offline) learning, the model is trained on a static dataset all at once. In online (incremental) learning, the system updates its weights continuously from a live stream of incoming data using methods like partial_fit().",
      "PCEI-30-01 Block 2.1 - Online Learning",
      ["online-learning", "incremental", "streaming"])

add_c(12, "2.1", "Instance-Based Learning", "Intermediate",
      "How does 'Instance-Based Learning' (like K-Nearest Neighbors) generate predictions for new data points?",
      "# Instance-based (lazy learning):\n# Memorizes training instances; calculates distances to nearest neighbors at query time\ndistances = [euclidean_dist(x_new, x_i) for x_i in X_train]",
      ["It compares new query instances directly to stored training instances in memory rather than constructing an explicit generalized abstraction model",
       "It trains a 50-layer deep neural network before making each prediction",
       "It compiles Python code into native x86 machine instructions",
       "It queries an external SQL database to look up hardcoded answers"],
      0,
      "Instance-based (lazy) learning algorithms simply store training examples in memory. When a new input arrives, they compute distances to stored instances to make predictions on the fly without building an explicit internal model.",
      "PCEI-30-01 Block 2.1 - Instance-Based Learning",
      ["instance-based", "knn", "lazy-learning"])

add_c(13, "2.1", "Model-Based Learning", "Beginner",
      "What characterizes 'Model-Based Learning' (like Linear Regression or Support Vector Machines)?",
      "# Model-based learning:\n# Learns a parameterized mathematical model f(x) = wx + b from data during training\nprediction = model.predict(X_new)",
      ["It builds a parameterized mathematical abstraction or decision boundary during training that is subsequently used for fast inference",
       "It requires physical plastic models to be manufactured in a workshop",
       "It stores every single training data row permanently in RAM during runtime",
       "It cannot output numerical predictions"],
      0,
      "Model-based learning extracts parameters from data to construct an explicit mathematical model (like a regression line or decision boundary). Once trained, raw training data can be discarded, and inference is very fast.",
      "PCEI-30-01 Block 2.1 - Model-Based Learning",
      ["model-based", "parameters", "inference"])

add_c(14, "2.1", "Active Learning", "Advanced",
      "What is the operational methodology of 'Active Learning' in machine learning workflows?",
      "# Active learning cycle:\n# Model identifies samples with highest uncertainty -> queries human annotator for labels",
      ["The learning algorithm actively queries a human expert (oracle) to label only the most informative or uncertain unlabeled samples",
       "The computer runs physical fitness simulations while training neural networks",
       "The algorithm automatically deletes all low-performing model weights every 10 seconds",
       "The model runs exclusively on battery power"],
      0,
      "Active learning prioritizes data annotation: the model analyzes a vast pool of unlabeled data, identifies the specific instances where it has highest uncertainty, and asks human experts to label only those high-value points.",
      "PCEI-30-01 Block 2.1 - Active Learning",
      ["active-learning", "annotation", "uncertainty"])

add_c(15, "2.1", "Transfer Learning", "Beginner",
      "What core capability does 'Transfer Learning' provide to machine learning practitioners?",
      "# Transfer learning concept:\n# Take pre-trained base model (trained on millions of images) -> fine-tune on custom 500 images\nbase_model = load_pretrained('resnet50')\ncustom_classifier = add_top_layers(base_model)",
      ["Reusing knowledge and feature representations learned from a large dataset on one task to solve a related task with much less data and compute",
       "Transferring physical computer hardware from one office desk to another",
       "Converting Python scripts into executable Java JAR files",
       "Copying files across local network drives using FTP"],
      0,
      "Transfer learning leverages models pre-trained on massive datasets (like ImageNet or web corpora) and adapts (fine-tunes) them to a specific target domain, drastically reducing training time and required labeled data.",
      "PCEI-30-01 Block 2.1 - Transfer Learning",
      ["transfer-learning", "fine-tuning", "efficiency"])

add_c(16, "2.1", "Ensemble Learning", "Intermediate",
      "What is the fundamental philosophy underlying 'Ensemble Learning' (e.g., Random Forests, Gradient Boosting)?",
      "# Ensemble principle: Wisdom of the crowd\n# Combining multiple weak or diverse learners to produce a strong learner\nfinal_prediction = majority_vote([m.predict(x) for m in models])",
      ["Combining predictions from multiple individual models to achieve higher accuracy and robustness than any single constituent model",
       "Running Python code on multiple monitors simultaneously",
       "Formatting training code into musical rhythm patterns",
       "Using a single decision tree with infinite depth"],
      0,
      "Ensemble methods combine multiple base models (either through bagging, boosting, or voting) to reduce variance and bias, producing aggregate predictions that are more reliable and accurate than individual models.",
      "PCEI-30-01 Block 2.1 - Ensemble Learning",
      ["ensemble", "bagging", "boosting"])

add_c(17, "2.1", "Supervised Learning Tasks", "Beginner",
      "Which of the following problems is an example of a Supervised Learning task?",
      "# Task examples:\n# A: House price prediction (continuous target) -> Regression (Supervised)\n# B: Customer grouping -> Clustering (Unsupervised)\n# C: Robot maze navigation -> Reinforcement Learning",
      ["Predicting whether an email is spam or not based on labeled historical emails",
       "Grouping 10,000 unorganized customer transaction receipts into distinct clusters",
       "Teaching an autonomous drone to fly through windy canyons using reward signals",
       "Compressing a 100-dimensional matrix into 3 dimensions without target labels"],
      0,
      "Classifying an email as spam or not spam is a classic supervised binary classification problem because the model is trained on emails that already possess known 'spam' or 'ham' ground-truth labels.",
      "PCEI-30-01 Block 2.1 - Task Identification",
      ["supervised", "classification", "spam-filter"])

add_c(18, "2.1", "Unsupervised Learning Tasks", "Beginner",
      "Which of the following problems is an example of an Unsupervised Learning task?",
      "# Unsupervised scenario:\n# Discovering customer segments from raw demographic data without predefined categories",
      ["Customer market segmentation based on purchasing patterns without predefined target groups",
       "Forecasting tomorrow's exact temperature in Celsius from labeled sensor logs",
       "Classifying medical biopsies as malignant or benign from labeled pathology slides",
       "Training a robotic arm to catch a ball using distance penalties"],
      0,
      "Customer segmentation is an unsupervised clustering task: the algorithm analyzes customer features to discover natural groupings without pre-assigned labels or predefined target categories.",
      "PCEI-30-01 Block 2.1 - Task Identification",
      ["unsupervised", "segmentation", "clustering"])

add_c(19, "2.1", "Reinforcement Learning Tasks", "Beginner",
      "Which of the following applications is an archetypal Reinforcement Learning task?",
      "# RL scenario:\n# Training an agent to master Chess or Go by playing against itself and receiving win/loss rewards",
      ["Training an autonomous agent to master the game of Go through millions of self-play reward iterations",
       "Predicting annual revenue from a historical balance sheet CSV file",
       "Filtering duplicate rows out of a customer address database",
       "Converting scanned PDF documents into plain text using OCR"],
      0,
      "Teaching an agent to master complex games (like Go, Chess, or Atari) through sequential actions and terminal win/loss rewards is the quintessential application of Reinforcement Learning.",
      "PCEI-30-01 Block 2.1 - Task Identification",
      ["reinforcement-learning", "alpha-go", "game-play"])

add_c(20, "2.1", "Ground Truth", "Beginner",
      "In machine learning terminology, what does the term 'Ground Truth' signify?",
      "# Ground truth comparison:\ny_true = [1, 0, 1, 1]  # Ground truth (actual reality)\ny_pred = [1, 0, 0, 1]  # Model predictions",
      ["The verified, real-world factual label or measurement against which a model's predictions are compared and evaluated",
       "The elevation of the physical data center above sea level",
       "The default operating system root directory path",
       "The theoretical limit of CPU transistor density"],
      0,
      "Ground truth represents the verified, objective empirical reality (the actual known values or human-validated labels) used to train models and against which prediction errors are measured.",
      "PCEI-30-01 Block 2.1 - Ground Truth",
      ["ground-truth", "labels", "evaluation"])

# ==========================================
# CHAPTER 2.2: Supervised Learning & Prediction (Cards 21-40)
# ==========================================
add_c(21, "2.2", "Classification vs Regression", "Beginner",
      "What is the fundamental difference between a 'Classification' problem and a 'Regression' problem in supervised learning?",
      "# Classification vs Regression:\n# Regression: Output is continuous numerical value (e.g., house price: $340,500.50)\n# Classification: Output is discrete categorical class (e.g., 'Spam' vs 'Not Spam')",
      ["Classification predicts discrete categorical class labels; regression predicts continuous numerical quantities",
       "Classification works only on images, while regression works only on text",
       "Classification requires quantum computers, while regression runs on classical CPUs",
       "Regression cannot be evaluated with mathematical error formulas"],
      0,
      "Supervised tasks fall into two categories: Classification outputs discrete categories (e.g., dog vs cat, loan approved vs rejected), while Regression outputs continuous numerical values (e.g., house price, temperature).",
      "PCEI-30-01 Block 2.2 - Classification vs Regression",
      ["classification", "regression", "prediction-types"])

add_c(22, "2.2", "Linear Regression", "Beginner",
      "In simple Linear Regression, what do the parameters 'w' (weight/slope) and 'b' (bias/intercept) represent in the formula y = w*x + b?",
      "# Linear regression equation:\n# y: predicted value\n# w: slope (rate of change in y per unit change in x)\n# b: y-intercept (value of y when x = 0)\ny_pred = weight * x + bias",
      ["'w' is the rate of change in y per unit change in x (slope), and 'b' is the value of y when x equals zero (y-intercept)",
       "'w' is the web socket port number, and 'b' is the baud rate of the modem",
       "'w' is the number of CPU cores, and 'b' is the battery percentage",
       "'w' is the word count, and 'b' is the byte encoding format"],
      0,
      "In the univariate line equation y = wx + b, w (weight or slope) determines the steepness and direction of the relationship, and b (bias or intercept) shifts the line vertically on the Cartesian coordinate plane.",
      "PCEI-30-01 Block 2.2 - Linear Regression",
      ["linear-regression", "slope", "intercept"])

add_c(23, "2.2", "Ordinary Least Squares", "Intermediate",
      "How does Ordinary Least Squares (OLS) find the optimal line of best fit in Linear Regression?",
      "# Ordinary Least Squares objective:\n# Minimize sum of squared vertical differences (residuals) between actual and predicted values\nresiduals = y_actual - y_pred\nloss = sum(r**2 for r in residuals)",
      ["By minimizing the sum of squared differences (residuals) between actual target values and predicted values",
       "By drawing a random diagonal line across the scatter plot",
       "By maximizing the variance of the input features",
       "By rounding all numbers to the nearest prime integer"],
      0,
      "Ordinary Least Squares (OLS) calculates optimal coefficients by minimizing the sum of squared residuals (the vertical distances between each empirical data point and the fitted regression line).",
      "PCEI-30-01 Block 2.2 - OLS",
      ["ols", "least-squares", "residuals"])

add_c(24, "2.2", "Logistic Regression", "Intermediate",
      "Despite its name containing 'Regression', what type of problem is Logistic Regression actually designed to solve?",
      "# Logistic regression maps linear combination to a probability between 0 and 1:\nimport math\ndef sigmoid(z):\n    return 1 / (1 + math.exp(-z))",
      ["Binary (and multiclass) classification problems by predicting the probability that an instance belongs to a class",
       "Continuous real estate home valuation forecasting",
       "High-precision astronomical trajectory calculation",
       "Unsupervised centroid clustering of genomic sequences"],
      0,
      "Logistic Regression is a classification algorithm. It takes a linear combination of features and passes it through the sigmoid (logistic) function, outputting a probability between 0 and 1 that maps to class labels.",
      "PCEI-30-01 Block 2.2 - Logistic Regression",
      ["logistic-regression", "classification", "sigmoid"])

add_c(25, "2.2", "Sigmoid Function", "Intermediate",
      "What mathematical property makes the Sigmoid (logistic) function S(z) = 1 / (1 + e^(-z)) ideal for binary classification?",
      "# Sigmoid output bounds:\n# As z -> +infinity, S(z) -> 1.0\n# As z -> -infinity, S(z) -> 0.0\n# When z = 0, S(z) = 0.5",
      ["It squashes any real-valued number into a strictly bounded range between 0 and 1, allowing it to be interpreted as a probability",
       "It converts all negative numbers into imaginary complex numbers",
       "It returns negative infinity for all odd integers",
       "It executes in constant zero nanoseconds on all hardware"],
      0,
      "The sigmoid function maps any input from (-∞, +∞) smoothly into the interval (0, 1), making its output directly interpretable as the probability P(y=1|x) of belonging to the positive class.",
      "PCEI-30-01 Block 2.2 - Sigmoid Function",
      ["sigmoid", "activation", "probability"])

add_c(26, "2.2", "Decision Threshold", "Beginner",
      "In binary classification with Logistic Regression, what is the default decision threshold for assigning the positive class?",
      "# Standard binary decision threshold:\nprobability = model.predict_proba(X)[0][1]\npredicted_class = 1 if probability >= 0.5 else 0",
      ["0.5 (50% probability)", "0.0 (0% probability)", "1.0 (100% probability)", "0.99 (99% probability)"],
      0,
      "By default, if the predicted probability output is >= 0.5, the instance is classified into the positive class (1); otherwise, it is assigned to the negative class (0). The threshold can be tuned to prioritize precision or recall.",
      "PCEI-30-01 Block 2.2 - Decision Threshold",
      ["decision-threshold", "binary-classification", "cutoff"])

add_c(27, "2.2", "Decision Trees", "Beginner",
      "How does a Decision Tree algorithm make predictions for new data points?",
      "# Decision tree branching logic:\nif age > 50:\n    if cholesterol > 240:\n        return 'High Risk'\n    else:\n        return 'Moderate Risk'\nelse:\n    return 'Low Risk'",
      ["By traversing a hierarchical sequence of IF-THEN feature split tests from the root node down to a leaf node",
       "By calculating the inverse of a high-dimensional covariance matrix",
       "By simulating biological DNA mutation across generations",
       "By randomly picking a number between 1 and 100"],
      0,
      "A Decision Tree recursively evaluates feature questions at each internal node (e.g., 'income > $50k?'), routing instances down branches until arriving at a terminal leaf node that assigns a class or numerical value.",
      "PCEI-30-01 Block 2.2 - Decision Trees",
      ["decision-trees", "nodes", "splits"])

add_c(28, "2.2", "Tree Splitting Criteria", "Intermediate",
      "What two mathematical metrics are most commonly used to evaluate the quality of a split in Classification Decision Trees?",
      "# Splitting criteria formulas:\n# Gini Impurity: 1 - sum(p_i ** 2)\n# Entropy: -sum(p_i * log2(p_i))",
      ["Gini Impurity and Information Gain (Entropy)",
       "Euclidean distance and Manhattan distance",
       "Mean Squared Error and R-squared",
       "Pearson correlation and Spearman rank"],
      0,
      "Decision trees evaluate split quality using purity metrics: Gini Impurity (used by CART) and Information Gain based on Entropy (used by ID3/C4.5). Both measure the degree of disorder or class mixing in a node.",
      "PCEI-30-01 Block 2.2 - Splitting Criteria",
      ["gini-impurity", "entropy", "information-gain"])

add_c(29, "2.2", "Gini Impurity", "Intermediate",
      "What is the Gini Impurity of a decision tree leaf node that contains only samples from a single class (pure node)?",
      "# Pure node calculation:\n# p = 1.0 -> Gini = 1 - (1.0 ** 2) = 0.0\ngini_pure = 1 - (1.0**2)",
      ["0.0", "1.0", "0.5", "-1.0"],
      0,
      "A completely pure node (where all samples belong to exactly one class) has a Gini Impurity of 0.0. A node with an even 50/50 split of two classes has maximum impurity of 0.5.",
      "PCEI-30-01 Block 2.2 - Gini Calculation",
      ["gini", "pure-node", "impurity"])

add_c(30, "2.2", "Decision Tree Pruning", "Intermediate",
      "Why is 'Pruning' (limiting max_depth or min_samples_split) critical when training Decision Trees?",
      "# Preventing tree overfitting:\nfrom sklearn.tree import DecisionTreeClassifier\n# Constraining tree depth prevents memorizing noise\nclf = DecisionTreeClassifier(max_depth=4, min_samples_leaf=10)",
      ["Unconstrained decision trees will continue splitting until every training point is memorized, causing severe overfitting",
       "Decision trees cannot run if they have more than 3 branches",
       "Pruning increases the physical RAM memory consumed by 500%",
       "Pruning translates the tree logic into binary machine code"],
      0,
      "Without depth constraints or pruning, a decision tree will split until each leaf holds a single training point, creating an over-complex tree that memorizes noise and fails to generalize to unseen test data.",
      "PCEI-30-01 Block 2.2 - Tree Pruning",
      ["pruning", "overfitting", "max-depth"])

add_c(31, "2.2", "K-Nearest Neighbors", "Beginner",
      "How does the K-Nearest Neighbors (KNN) classification algorithm determine the class of an unknown query point?",
      "# KNN majority voting:\n# 1. Compute distance to all training points\n# 2. Pick top K closest points\n# 3. Predict majority class among those K neighbors",
      ["By identifying the 'K' closest training points in feature space and taking a majority vote of their classes",
       "By fitting a straight regression line through all data points",
       "By constructing a deep neural network with K hidden layers",
       "By calculating the average salary of all users in the database"],
      0,
      "KNN is an intuitive instance-based classifier: to classify a new point, it measures mathematical distance to all training points, identifies the K nearest neighbors, and assigns the most common class among them.",
      "PCEI-30-01 Block 2.2 - KNN",
      ["knn", "majority-voting", "distance"])

add_c(32, "2.2", "Euclidean Distance", "Intermediate",
      "What is the Euclidean distance formula between two 2D points (x1, y1) and (x2, y2)?",
      "# Euclidean distance in Python:\nimport math\ndef euclidean_dist(p1, p2):\n    return math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2)",
      ["sqrt((x1 - x2)^2 + (y1 - y2)^2)", "|x1 - x2| + |y1 - y2|", "max(|x1 - x2|, |y1 - y2|)", "(x1 * x2) + (y1 * y2)"],
      0,
      "Euclidean distance is the straight-line ('as the crow flies') distance between two points in Euclidean space, calculated as the square root of the sum of squared coordinate differences.",
      "PCEI-30-01 Block 2.2 - Euclidean Distance",
      ["euclidean-distance", "metrics", "geometry"])

add_c(33, "2.2", "Manhattan Distance", "Intermediate",
      "What is Manhattan Distance (L1 norm / taxicab distance) between two points?",
      "# Manhattan distance in Python:\ndef manhattan_dist(p1, p2):\n    return abs(p1[0] - p2[0]) + abs(p1[1] - p2[1])",
      ["The sum of the absolute differences of their Cartesian coordinates: |x1 - x2| + |y1 - y2|",
       "The square root of the sum of squared differences",
       "The angle between two vectors measured in radians",
       "The multiplication of x coordinates divided by y coordinates"],
      0,
      "Manhattan distance measures grid-like distance (as a taxi traverses city blocks), computed as the sum of absolute differences along each dimension: |x1 - x2| + |y1 - y2|.",
      "PCEI-30-01 Block 2.2 - Manhattan Distance",
      ["manhattan-distance", "l1-norm", "metrics"])

add_c(34, "2.2", "KNN Scaling Sensitivity", "Intermediate",
      "Why is Feature Scaling (Normalization or Standardization) mandatory before applying K-Nearest Neighbors (KNN)?",
      "# Why scaling matters in distance calculations:\n# Age: 20 to 80 (difference: 60)\n# Salary: $20,000 to $200,000 (difference: $180,000)\n# Without scaling, salary completely dominates distance!",
      ["Features with large numerical magnitudes (e.g., Salary: $100,000) will completely dominate the distance calculation over small features (e.g., Age: 25)",
       "KNN will throw an unhandled ZeroDivisionError exception if features are unscaled",
       "Unscaled data causes computer monitors to lose color resolution",
       "Unscaled features turn KNN into an unsupervised clustering algorithm"],
      0,
      "Because distance metrics compute numerical differences, a feature spanning thousands (like income) will mathematically overshadow a feature spanning decimals (like GPA), rendering the smaller feature irrelevant unless scaled.",
      "PCEI-30-01 Block 2.2 - KNN Feature Scaling",
      ["feature-scaling", "knn", "distance-metrics"])

add_c(35, "2.2", "Choice of K in KNN", "Intermediate",
      "What is the consequence of choosing a very small value of K (e.g., K = 1) in K-Nearest Neighbors?",
      "# Effect of K=1:\n# Decision boundary is extremely complex, jagged, and sensitive to isolated outliers/noise -> High variance / Overfitting",
      ["The model becomes highly sensitive to noise and outliers, resulting in complex jagged decision boundaries (High Variance / Overfitting)",
       "The model becomes completely linear and underfits the data",
       "The algorithm takes 100 times longer to train",
       "KNN will refuse to output any predictions"],
      0,
      "When K=1, the model strictly follows the single closest point, making it vulnerable to mislabeled training points or noise (overfitting). Higher K smooths the boundary, reducing variance at the cost of slight bias.",
      "PCEI-30-01 Block 2.2 - Choosing K",
      ["k-value", "knn", "overfitting"])

add_c(36, "2.2", "Naive Bayes Classifier", "Intermediate",
      "What is the 'naive' assumption made by the Naive Bayes classification algorithm?",
      "# Naive Bayes assumption:\n# P(x1, x2, ..., xn | y) = P(x1 | y) * P(x2 | y) * ... * P(xn | y)\n# Assumes all features are conditionally independent given class label y",
      ["It assumes that all input features are mutually independent of each other given the class label",
       "It assumes that all training labels are completely incorrect",
       "It assumes that computers cannot calculate logarithms",
       "It assumes that all dataset columns are formatted as strings"],
      0,
      "Naive Bayes applies Bayes' Theorem with the strong ('naive') conditional independence assumption that the presence or value of one feature does not affect any other feature, given the class label.",
      "PCEI-30-01 Block 2.2 - Naive Bayes",
      ["naive-bayes", "conditional-independence", "probabilistic"])

add_c(37, "2.2", "Bayes Theorem", "Intermediate",
      "What does Bayes' Theorem P(A|B) = [P(B|A) * P(A)] / P(B) mathematically compute?",
      "# Bayes' Theorem terms:\n# P(A|B): Posterior probability (probability of hypothesis A given observed evidence B)\n# P(B|A): Likelihood\n# P(A): Prior probability\n# P(B): Marginal evidence",
      ["The posterior probability of hypothesis A occurring given that evidence B has been observed",
       "The linear correlation between two continuous random variables",
       "The arithmetic mean of an array of integers",
       "The Euclidean distance between two geographic coordinates"],
      0,
      "Bayes' Theorem provides a principled way to update probabilities in light of new evidence: Posterior = (Likelihood * Prior) / Evidence.",
      "PCEI-30-01 Block 2.2 - Bayes Theorem",
      ["bayes-theorem", "probability", "posterior"])

add_c(38, "2.2", "Naive Bayes Applications", "Beginner",
      "Why is Naive Bayes historically renowned and widely used for text spam filtering and sentiment analysis?",
      "# Text classification with Naive Bayes:\n# Fast, handles high-dimensional vocabulary spaces well, works with word frequencies",
      ["It is fast to train, scales cleanly to high-dimensional word feature vocabularies, and performs surprisingly well despite the independence assumption",
       "It is the only algorithm allowed under international email protocol specifications",
       "It automatically decrypts private user passwords",
       "It requires zero training examples to classify spam"],
      0,
      "In text classification, each word is a feature (tens of thousands of dimensions). Naive Bayes computes probabilities via simple counting, making it blazingly fast and remarkably effective for spam and sentiment.",
      "PCEI-30-01 Block 2.2 - Naive Bayes Text",
      ["spam-filter", "text-classification", "nlp"])

add_c(39, "2.2", "Support Vector Machines", "Intermediate",
      "In Support Vector Machines (SVM), what is the 'Maximum Margin Hyperplane'?",
      "# SVM objective:\n# Find separating hyperplane that maximizes the geometric distance (margin) to the closest support vectors of any class",
      ["The decision boundary that maximizes the geometric distance (margin) between the separating boundary and the nearest data points of each class",
       "A circular boundary that encloses all positive data points",
       "A line that connects the average coordinates of each class",
       "A plane that projects high-dimensional data onto a 1-dimensional line"],
      0,
      "SVM searches for the optimal decision boundary (hyperplane) that separates classes while maximizing the margin (the gap to the nearest points, known as support vectors), providing strong theoretical generalization.",
      "PCEI-30-01 Block 2.2 - SVM",
      ["svm", "margin", "support-vectors"])

add_c(40, "2.2", "SVM Kernel Trick", "Advanced",
      "What is the 'Kernel Trick' in Support Vector Machines?",
      "# Kernel trick:\n# Implicitly maps non-linearly separable inputs into higher-dimensional space where a linear boundary exists\n# Example kernels: RBF (Radial Basis Function), Polynomial",
      ["A mathematical technique that maps inputs into a higher-dimensional space where data becomes linearly separable, without explicitly computing high-dimensional coordinates",
       "A technique for modifying the Linux operating system kernel to increase model accuracy",
       "A hardware trick that overclocks CPU clock frequencies during model fitting",
       "A method for converting floating-point numbers into 8-bit integers"],
      0,
      "The Kernel Trick uses kernel functions (like RBF or Polynomial) to calculate inner products in higher-dimensional feature space directly, finding non-linear decision boundaries efficiently without expensive explicit coordinate transformations.",
      "PCEI-30-01 Block 2.2 - Kernel Trick",
      ["kernel-trick", "svm", "non-linear"])

# ==========================================
# CHAPTER 2.3: Unsupervised Learning & Clustering (Cards 41-60)
# ==========================================
add_c(41, "2.3", "Clustering vs Classification", "Beginner",
      "What is the primary difference between 'Clustering' and 'Classification'?",
      "# Comparison:\n# Classification (Supervised): Predict predefined labels (e.g., Cat vs Dog)\n# Clustering (Unsupervised): Discover natural groupings in unlabeled data",
      ["Classification uses pre-labeled data to assign instances to known categories; clustering groups unlabeled data based on inherent similarities",
       "Clustering is supervised, while classification is unsupervised",
       "Classification only operates on continuous numbers, while clustering only operates on text",
       "There is no difference; both terms describe the exact same algorithm"],
      0,
      "Classification assigns data points to predefined, known target classes using labeled training data. Clustering discovers natural, previously unknown clusters based on distance or feature similarity without target labels.",
      "PCEI-30-01 Block 2.3 - Clustering vs Classification",
      ["clustering", "classification", "comparison"])

add_c(42, "2.3", "K-Means Algorithm", "Beginner",
      "What are the two iterative steps that K-Means clustering alternates between until convergence?",
      "# K-Means iterative loop:\nwhile not converged:\n    # Step 1: Assign each point to nearest centroid\n    clusters = assign_points_to_centroids(X, centroids)\n    # Step 2: Recompute centroid as mean of assigned points\n    centroids = [points.mean(axis=0) for points in clusters]",
      ["1. Assignment step (assign each point to nearest centroid) and 2. Update step (recalculate centroids as the mean of assigned points)",
       "1. Forward propagation step and 2. Backpropagation step",
       "1. Compiling source code and 2. Linking object libraries",
       "1. Encrypting data blocks and 2. Generating hash digests"],
      0,
      "K-Means iteratively alternates between: 1. Assignment (each point is assigned to its nearest centroid based on Euclidean distance) and 2. Update (centroids are recalculated as the mean position of all assigned points).",
      "PCEI-30-01 Block 2.3 - K-Means",
      ["k-means", "centroids", "clustering-algorithm"])

add_c(43, "2.3", "K-Means Centroid", "Beginner",
      "In K-Means clustering, what is a 'Centroid'?",
      "# Centroid definition:\n# The geometric center / arithmetic mean of all coordinates belonging to a cluster\ncentroid = sum(points_in_cluster) / len(points_in_cluster)",
      ["The arithmetic mean coordinate position of all data points belonging to a specific cluster",
       "The outlier point located farthest away from all other points",
       "The software license key associated with scikit-learn",
       "The physical center of the computer's CPU die"],
      0,
      "A centroid represents the center of a cluster in multi-dimensional space, calculated as the arithmetic mean of all data points assigned to that cluster.",
      "PCEI-30-01 Block 2.3 - Centroids",
      ["centroids", "mean", "k-means"])

add_c(44, "2.3", "K-Means Inertia", "Intermediate",
      "What does 'Inertia' (Within-Cluster Sum of Squares - WCSS) measure in K-Means clustering?",
      "# Inertia (WCSS) formula:\n# Sum of squared distances of samples to their closest cluster center\ninertia = sum(distance(x, centroid_k)**2 for x in cluster_k for cluster_k in clusters)",
      ["The sum of squared Euclidean distances from each data point to its assigned cluster centroid (measuring cluster tightness)",
       "The time in seconds required for the clustering algorithm to complete",
       "The resistance of a computer motherboard to electrical current changes",
       "The number of rows with missing values in a dataset"],
      0,
      "Inertia (or WCSS) measures how internally cohesive or tight clusters are: lower inertia indicates that points are packed tightly around their respective cluster centroids.",
      "PCEI-30-01 Block 2.3 - Inertia",
      ["inertia", "wcss", "cluster-compactness"])

add_c(45, "2.3", "Elbow Method", "Intermediate",
      "How is the 'Elbow Method' used to select the optimal number of clusters (K) in K-Means?",
      "# Elbow method visualization:\n# Plot Inertia vs K\n# Look for the bend ('elbow') where inertia decrease levels off significantly",
      ["By plotting Inertia against different values of K and identifying the 'elbow' point where the rate of inertia reduction sharply levels off",
       "By choosing the value of K that maximizes CPU memory usage",
       "By running K-Means until the computer crashes",
       "By selecting K equal to the total number of rows in the dataset"],
      0,
      "The Elbow Method plots inertia against K. As K increases, inertia naturally drops; the optimal K is located at the 'elbow' bend where adding more clusters yields diminishing returns in variance explained.",
      "PCEI-30-01 Block 2.3 - Elbow Method",
      ["elbow-method", "k-selection", "hyperparameter"])

add_c(46, "2.3", "Silhouette Score", "Intermediate",
      "What does the Silhouette Score measure when evaluating clustering results?",
      "# Silhouette Score bounds:\n# Ranges from -1.0 to +1.0\n# +1: Well matched to own cluster and well separated from neighboring clusters\n#  0: On or very close to decision boundary\n# -1: Point may be assigned to wrong cluster",
      ["How similar an object is to its own cluster (cohesion) compared to other clusters (separation), ranging from -1 to +1",
       "The percentage of memory cache hits during dataset loading",
       "The ratio of male to female users in a demographic survey",
       "The number of clusters that have an odd number of members"],
      0,
      "The Silhouette Coefficient evaluates cluster quality: a score near +1 means points are well within their own cluster and far from other clusters; 0 means points are on cluster boundaries; negative scores imply misclustering.",
      "PCEI-30-01 Block 2.3 - Silhouette Score",
      ["silhouette-score", "cluster-evaluation", "cohesion-separation"])

add_c(47, "2.3", "K-Means Limitations", "Intermediate",
      "Which dataset characteristic poses a major difficulty for the standard K-Means clustering algorithm?",
      "# K-Means assumptions:\n# Assumes spherical, equal-variance clusters\n# Fails on non-spherical shapes (e.g., concentric circles, crescents, moons)",
      ["Non-spherical, elongated, or complex geometric cluster shapes (like concentric circles or crescent moons)",
       "Datasets stored in CSV file format",
       "Datasets containing exactly two numerical columns",
       "Datasets with fewer than 1,000,000 rows"],
      0,
      "K-Means assumes clusters are spherical and isotropic (equal variance in all directions). It struggles on non-convex geometries, elongated clusters, or clusters with widely differing densities.",
      "PCEI-30-01 Block 2.3 - K-Means Limitations",
      ["k-means-limitations", "non-spherical", "clustering"])

add_c(48, "2.3", "K-Means Initialization", "Intermediate",
      "Why is the 'k-means++' initialization algorithm standard in scikit-learn instead of purely random centroid initialization?",
      "# k-means++ logic:\n# Selects initial centroids spaced far apart from each other based on distance probability\n# Avoids poor local minima convergence",
      ["It spreads initial centroids far apart based on distance probabilities, preventing poor local minima traps and speeding convergence",
       "It runs in C++ instead of Python",
       "It automatically converts text data into audio files",
       "It guarantees that K will always equal 3"],
      0,
      "Standard random initialization can place multiple centroids close together, trapping the algorithm in poor local minima. The k-means++ heuristic spreads initial centers out, leading to faster convergence and better clusterings.",
      "PCEI-30-01 Block 2.3 - K-Means++",
      ["k-means++", "initialization", "convergence"])

add_c(49, "2.3", "Hierarchical Clustering", "Intermediate",
      "What graphical tree diagram is used in Hierarchical Clustering to visualize how nested clusters merge or split?",
      "# Hierarchical clustering visualization:\nimport scipy.cluster.hierarchy as sch\n# A tree diagram showing the sequence of merges or splits\ndendrogram = sch.dendrogram(sch.linkage(X, method='ward'))",
      ["Dendrogram", "Scatter plot", "Histogram", "Confusion matrix"],
      0,
      "A dendrogram is a tree diagram that illustrates the arrangement of clusters produced by hierarchical clustering, displaying the Euclidean distance or dissimilarity at which subclusters merge.",
      "PCEI-30-01 Block 2.3 - Dendrogram",
      ["dendrogram", "hierarchical-clustering", "visualization"])

add_c(50, "2.3", "Agglomerative Clustering", "Intermediate",
      "How does 'Agglomerative' Hierarchical Clustering construct its hierarchy?",
      "# Agglomerative (Bottom-up):\n# Start with each point as its own cluster -> iteratively merge closest clusters until one remains",
      ["A bottom-up approach: starts with each sample in its own individual cluster and iteratively merges the closest pairs of clusters",
       "A top-down approach: starts with one giant cluster containing all data and recursively splits it",
       "By fitting a linear regression line through the dataset",
       "By calculating the median of all columns simultaneously"],
      0,
      "Agglomerative clustering is a bottom-up hierarchical method: each observation begins in its own cluster, and pairs of clusters are merged progressively up the hierarchy until a single cluster remains.",
      "PCEI-30-01 Block 2.3 - Agglomerative",
      ["agglomerative", "bottom-up", "hierarchical"])

add_c(51, "2.3", "DBSCAN", "Intermediate",
      "What is the core operational principle of the DBSCAN clustering algorithm?",
      "# DBSCAN parameters:\n# eps: maximum distance between two samples to be considered neighbors\n# min_samples: minimum points in a neighborhood to form a dense core region",
      ["Density-based: groups points that are packed closely together in high-density regions and marks points in low-density regions as noise/outliers",
       "Centroid-based: calculates K arithmetic means across spherical clusters",
       "Tree-based: splits features using Gini impurity thresholds",
       "Gradient-based: computes partial derivatives of cross-entropy loss"],
      0,
      "DBSCAN (Density-Based Spatial Clustering of Applications with Noise) finds core samples in high-density areas and expands clusters from them, successfully handling arbitrary cluster shapes and isolating outliers as noise.",
      "PCEI-30-01 Block 2.3 - DBSCAN",
      ["dbscan", "density-based", "outliers"])

add_c(52, "2.3", "DBSCAN Parameters", "Intermediate",
      "What are the two key hyperparameters required to configure the DBSCAN algorithm?",
      "# Configuring DBSCAN in scikit-learn:\nfrom sklearn.cluster import DBSCAN\nclustering = DBSCAN(eps=0.5, min_samples=5)",
      ["eps (neighborhood radius distance) and min_samples (minimum points required to form a dense region)",
       "K (number of clusters) and max_iter (number of iterations)",
       "learning_rate and batch_size",
       "n_estimators and max_depth"],
      0,
      "DBSCAN requires two parameters: eps (the radius defining a point's local neighborhood) and min_samples (the minimum number of points required within that radius to establish a core dense region).",
      "PCEI-30-01 Block 2.3 - DBSCAN Parameters",
      ["dbscan", "eps", "min-samples"])

add_c(53, "2.3", "Dimensionality Reduction", "Beginner",
      "What is the primary motivation for performing 'Dimensionality Reduction' on high-dimensional datasets?",
      "# Dimensionality reduction:\n# 100 features -> 2 or 3 principal components\n# Enables 2D/3D visualization, speeds up training, mitigates Curse of Dimensionality",
      ["To compress features into fewer dimensions while preserving variance, enabling 2D/3D visualization and combating the curse of dimensionality",
       "To increase the physical file size on the hard drive",
       "To convert numerical datasets into audio podcast episodes",
       "To encrypt confidential customer records with AES-GCM"],
      0,
      "Dimensionality reduction reduces the number of random variables under consideration by obtaining a set of principal variables, mitigating the curse of dimensionality, speeding computation, and allowing 2D/3D visualization.",
      "PCEI-30-01 Block 2.3 - Dimensionality Reduction",
      ["dimensionality-reduction", "visualization", "compression"])

add_c(54, "2.3", "Curse of Dimensionality", "Intermediate",
      "What problem is known as the 'Curse of Dimensionality' in machine learning?",
      "# Curse of dimensionality effect:\n# As feature count increases, data becomes extremely sparse, and all points become equidistant",
      ["As the number of dimensions/features increases, the volume of the space grows exponentially, making data points sparse and distance metrics ineffective",
       "The operating system crashes when opening files with more than 10 columns",
       "Hard drives run out of storage space after storing 5 features",
       "Neural networks refuse to calculate gradients in 3D space"],
      0,
      "As dimensions increase, feature space volume expands exponentially, causing data to become extremely sparse. Points become roughly equidistant from one another, severely undermining distance-based algorithms (like KNN and K-Means).",
      "PCEI-30-01 Block 2.3 - Curse of Dimensionality",
      ["curse-of-dimensionality", "sparsity", "distance-metrics"])

add_c(55, "2.3", "Principal Component Analysis", "Intermediate",
      "What does Principal Component Analysis (PCA) mathematically maximize when projecting data onto new orthogonal axes?",
      "# PCA objective:\n# Find orthogonal directions (principal components) that maximize variance of the projected data\nfrom sklearn.decomposition import PCA\npca = PCA(n_components=2)\nX_reduced = pca.fit_transform(X)",
      ["The variance of the projected data (preserving maximum information)",
       "The number of negative numbers in the matrix",
       "The time required to compute matrix inversions",
       "The classification accuracy of a decision tree"],
      0,
      "PCA is an unsupervised linear transformation that finds new orthogonal axes (principal components) ordered by the amount of variance they explain, maximizing preserved information while reducing dimensions.",
      "PCEI-30-01 Block 2.3 - PCA",
      ["pca", "variance", "principal-components"])

add_c(56, "2.3", "PCA Orthogonality", "Intermediate",
      "In Principal Component Analysis (PCA), what is the relationship between the first principal component (PC1) and the second principal component (PC2)?",
      "# Orthogonality condition:\n# PC2 is strictly perpendicular (orthogonal / uncorrelated) to PC1",
      ["PC2 is strictly orthogonal (perpendicular and uncorrelated) to PC1",
       "PC2 is identical and parallel to PC1",
       "PC2 is the negative inverse of PC1",
       "PC2 has twice as many features as PC1"],
      0,
      "All principal components in PCA are mutually orthogonal (perpendicular at 90 degrees), ensuring that the new projected feature axes are completely uncorrelated with one another.",
      "PCEI-30-01 Block 2.3 - PCA Orthogonality",
      ["pca", "orthogonality", "uncorrelated"])

add_c(57, "2.3", "Explained Variance Ratio", "Intermediate",
      "In scikit-learn's PCA, what does the `explained_variance_ratio_` attribute indicate?",
      "# Analyzing explained variance in PCA:\npca = PCA(n_components=3)\npca.fit(X)\nprint(pca.explained_variance_ratio_)  # Output: [0.72, 0.18, 0.06] -> PC1 + PC2 capture 90% of total variance!",
      ["The proportion of the dataset's total variance that lies along each principal component axis",
       "The percentage of memory consumed by the Python script",
       "The ratio of training rows to testing rows",
       "The probability of the model encountering a division by zero error"],
      0,
      "The explained_variance_ratio_ returns an array showing the fraction of total dataset variance captured by each principal component (e.g., [0.72, 0.18] means PC1 and PC2 preserve 90% of the original variance).",
      "PCEI-30-01 Block 2.3 - Explained Variance",
      ["pca", "explained-variance", "scikit-learn"])

add_c(58, "2.3", "PCA Preprocessing", "Intermediate",
      "Why must data be mean-centered and standardized before applying Principal Component Analysis (PCA)?",
      "# PCA is sensitive to feature variance scales:\n# If one feature is measured in millimeters and another in kilometers, the larger scale artificially dominates PCA!",
      ["Features with larger raw numeric scales will artificially dominate the first principal component simply due to magnitude rather than true variance",
       "PCA algorithms cannot process positive numbers",
       "Unscaled data will cause PCA to output complex imaginary matrices",
       "Standardization converts non-linear relationships into linear lines"],
      0,
      "PCA seeks directions of maximum variance. If features are not standardized (mean=0, variance=1), a feature measured in large units (like Annual Income) will falsely dominate the principal axes over smaller features (like Age).",
      "PCEI-30-01 Block 2.3 - PCA Scaling",
      ["pca", "standardization", "scaling"])

add_c(59, "2.3", "t-SNE vs PCA", "Advanced",
      "What is the key advantage of t-SNE (t-Distributed Stochastic Neighbor Embedding) over PCA for exploratory data visualization?",
      "# t-SNE capability:\n# Non-linear dimensionality reduction that preserves local manifold neighbor relationships\nfrom sklearn.manifold import TSNE\nX_embedded = TSNE(n_components=2).fit_transform(X)",
      ["t-SNE captures complex non-linear relationships and preserves local neighborhood structures, separating non-linear clusters that PCA overlays",
       "t-SNE is 1,000 times faster to compute than PCA on large datasets",
       "t-SNE can be used directly for linear regression modeling",
       "t-SNE preserves global distances perfectly across all dimensions"],
      0,
      "PCA is a linear technique that struggles with complex manifolds. t-SNE is a non-linear probabilistic technique that keeps similar points close together in 2D/3D space, making it exceptional for visualizing high-dimensional clusters.",
      "PCEI-30-01 Block 2.3 - t-SNE",
      ["t-sne", "non-linear", "visualization"])

add_c(60, "2.3", "Anomaly Detection", "Intermediate",
      "How is unsupervised anomaly detection (e.g., using Isolation Forests or One-Class SVM) used in production monitoring?",
      "# Anomaly detection concept:\n# Normal points cluster in high-density regions; anomalies are rare, isolated outliers that split easily",
      ["By modeling normal data distributions and flagging instances that fall into sparse regions or deviate significantly from the norm",
       "By asking customers to manually verify every server log entry",
       "By restarting all production servers every 15 minutes",
       "By deleting all database records that have even numbers in their primary keys"],
      0,
      "Unsupervised anomaly detection learns the baseline distribution of normal behavior from unannotated logs. Outlying points that occur in sparse regions or require very few splits (Isolation Forest) are flagged as suspicious anomalies.",
      "PCEI-30-01 Block 2.3 - Anomaly Detection",
      ["anomaly-detection", "isolation-forest", "outliers"])

# ==========================================
# CHAPTER 2.4: Reinforcement Learning Core Concepts (Cards 61-80)
# ==========================================
add_c(61, "2.4", "RL Loop", "Beginner",
      "What are the four core elements of the Reinforcement Learning agent-environment interaction loop?",
      "# RL interaction cycle:\n# State (S), Action (A), Reward (R), Next State (S')\naction = policy(state)\nnext_state, reward, done, _ = env.step(action)",
      ["State, Action, Reward, and Next State",
       "Compiler, Linker, Assembler, and CPU",
       "Input tensor, Kernel weight, Stride, and Pooling",
       "HTML, CSS, JavaScript, and WebAssembly"],
      0,
      "The fundamental RL loop consists of: the Agent observing the Environment's current State (S), taking an Action (A), and receiving a scalar Reward (R) along with the resulting Next State (S').",
      "PCEI-30-01 Block 2.4 - RL Loop",
      ["rl-loop", "state", "action", "reward"])

add_c(62, "2.4", "RL Policy", "Beginner",
      "In Reinforcement Learning, what is an agent's 'Policy' (denoted as π)?",
      "# Policy definition:\n# Mapping from states to actions: pi(s) -> a\n# Deterministic: a = pi(s)\n# Stochastic: pi(a | s) = P(A_t = a | S_t = s)",
      ["The strategy or function that maps an observed state to the action the agent should choose",
       "The legal terms of service document signed by the software developer",
       "The maximum clock frequency allowable for GPU cooling",
       "The database access permissions granted to guest users"],
      0,
      "A policy (π) defines the agent's behavior at any given time. It is a mapping from perceived states of the environment to actions to be taken (either deterministic: a = π(s), or stochastic: π(a|s)).",
      "PCEI-30-01 Block 2.4 - Policy",
      ["policy", "strategy", "decision-making"])

add_c(63, "2.4", "Reward Signal", "Beginner",
      "What is the role of the 'Reward Signal' in Reinforcement Learning?",
      "# Reward feedback:\n# Scalar value indicating immediate success or failure of an action\nreward = +10 if reached_goal else -1",
      ["A scalar feedback value from the environment indicating the immediate desirability of an action taken in a given state",
       "A monetary payment automatically sent to the developer's bank account",
       "The number of floating-point operations executed per millisecond",
       "An encrypted token granting root access to the operating system"],
      0,
      "The reward is an immediate numerical feedback value sent by the environment to the agent on each step, defining what is good and bad in an immediate sense. The agent's sole goal is to maximize total cumulative reward.",
      "PCEI-30-01 Block 2.4 - Reward Signal",
      ["reward", "feedback", "reinforcement"])

add_c(64, "2.4", "Discount Factor", "Intermediate",
      "What is the role of the 'Discount Factor' (gamma, γ) in calculating the return G_t in Reinforcement Learning?",
      "# Discounted return formula:\n# G_t = R_{t+1} + gamma * R_{t+2} + (gamma**2) * R_{t+3} + ...\n# 0 <= gamma < 1 determines the present value of future rewards",
      ["It determines how much the agent values future rewards compared to immediate rewards (0 <= γ < 1)",
       "It offers a commercial percentage discount on cloud computing invoices",
       "It reduces the physical screen resolution of game monitors",
       "It divides the learning rate by the number of CPU threads"],
      0,
      "The discount factor γ (between 0 and 1) values immediate rewards higher than distant future rewards. A γ near 0 makes the agent 'myopic' (greedy for immediate rewards), while γ near 1 makes it 'farsighted'.",
      "PCEI-30-01 Block 2.4 - Discount Factor",
      ["discount-factor", "gamma", "return"])

add_c(65, "2.4", "Exploration vs Exploitation", "Intermediate",
      "What is the classical 'Exploration vs Exploitation' dilemma in Reinforcement Learning?",
      "# Exploration: Try new actions to discover better rewards\n# Exploitation: Choose the best currently known action to maximize reward",
      ["The trade-off between trying novel, untested actions to discover better strategies (exploration) versus choosing the best currently known action (exploitation)",
       "The trade-off between purchasing desktop computers versus laptop computers",
       "The decision between using Python 3.10 versus Python 3.11",
       "The challenge of balancing internet download speed against upload speed"],
      0,
      "An agent must exploit what it already knows to obtain rewards, but it must also explore unvisited states and actions to discover potentially superior strategies that yield higher long-term cumulative rewards.",
      "PCEI-30-01 Block 2.4 - Exploration vs Exploitation",
      ["exploration", "exploitation", "dilemma"])

add_c(66, "2.4", "Epsilon-Greedy Strategy", "Intermediate",
      "How does the 'Epsilon-Greedy' action selection strategy balance exploration and exploitation?",
      "# Epsilon-greedy implementation:\nimport random\nif random.random() < epsilon:\n    action = random_action()  # Explore with probability epsilon\nelse:\n    action = best_action()    # Exploit with probability 1 - epsilon",
      ["It chooses a random exploratory action with probability ε (epsilon) and chooses the best currently known greedy action with probability 1 - ε",
       "It always takes random actions on weekends and greedy actions on weekdays",
       "It divides the action space into positive and negative integers",
       "It evaluates decisions using a convolutional neural network filter"],
      0,
      "Epsilon-greedy is a simple, effective balancing method: with small probability ε (e.g., 0.1), the agent explores by picking a random action; with probability 1 - ε (0.9), it exploits its best known action.",
      "PCEI-30-01 Block 2.4 - Epsilon-Greedy",
      ["epsilon-greedy", "action-selection", "exploration"])

add_c(67, "2.4", "Markov Decision Process", "Intermediate",
      "What mathematical framework forms the formal foundation for almost all Reinforcement Learning problems?",
      "# Markov Decision Process (MDP) tuple:\n# (S, A, P, R, gamma)\n# States, Actions, Transition probabilities, Rewards, Discount factor",
      ["Markov Decision Process (MDP)", "Fast Fourier Transform (FFT)", "Relational Database Normalization", "Convolutional Max-Pooling"],
      0,
      "A Markov Decision Process (MDP) formally defines the RL problem using a 5-tuple: States (S), Actions (A), Transition probability distribution P(s'|s,a), Reward function R(s,a), and Discount factor γ.",
      "PCEI-30-01 Block 2.4 - MDP",
      ["mdp", "markov-decision-process", "formalism"])

add_c(68, "2.4", "Markov Property", "Intermediate",
      "What does the 'Markov Property' state regarding the state transitions of an environment?",
      "# Markov property: Future is independent of past given present\n# P(S_{t+1} | S_t, A_t, S_{t-1}, A_{t-1}, ...) = P(S_{t+1} | S_t, A_t)",
      ["The future state depends only on the current state and current action, not on the historical sequence of past states",
       "The future state is strictly non-deterministic and can never be modeled mathematically",
       "All actions in the environment must be reversible",
       "The environment can only be stored in memory as an adjacency matrix"],
      0,
      "The Markov Property states that 'the future is independent of the past given the present.' The current state S_t captures all relevant information needed to determine future transitions.",
      "PCEI-30-01 Block 2.4 - Markov Property",
      ["markov-property", "state-transitions", "memoryless"])

add_c(69, "2.4", "Value Function", "Intermediate",
      "In Reinforcement Learning, what does the State-Value Function V(s) quantify?",
      "# Value Function V(s):\n# Expected cumulative discounted return starting from state s following policy pi\nV_s = expected_return(start_state=s, policy=pi)",
      ["The expected cumulative discounted future reward an agent will receive starting from state s and following policy π thereafter",
       "The monetary resale value of the computer hardware executing the simulation",
       "The total number of CPU clock cycles needed to parse the Python script",
       "The likelihood of a hard drive experiencing a mechanical head crash"],
      0,
      "The value function V(s) specifies the long-term desirability of being in a state: it computes the expected cumulative return starting from state s under policy π, accounting for all anticipated future rewards.",
      "PCEI-30-01 Block 2.4 - Value Function",
      ["value-function", "expected-return", "states"])

add_c(70, "2.4", "Q-Function", "Intermediate",
      "What does the Action-Value Function Q(s, a) represent in Q-Learning?",
      "# Q(s, a) function:\n# Expected cumulative return of taking action a in state s, and then following policy pi\nQ_sa = expected_return(state=s, action=a, policy=pi)",
      ["The expected cumulative return of taking action 'a' in state 's', and continuing with policy π thereafter",
       "The quality assurance testing score of the Python interpreter",
       "The quantum state superposition coefficient of a qubit register",
       "The queue length of pending HTTP network socket packets"],
      0,
      "The Q-function (Action-Value Function Q(s, a)) evaluates the expected cumulative return of choosing specific action a in state s, forming the core matrix updated during Q-learning algorithms.",
      "PCEI-30-01 Block 2.4 - Q-Function",
      ["q-function", "action-value", "q-learning"])

add_c(71, "2.4", "Q-Learning", "Intermediate",
      "What kind of Reinforcement Learning algorithm is classical 'Q-Learning'?",
      "# Q-Learning characteristics:\n# Model-free (does not need environment transition dynamics)\n# Off-policy (learns optimal Q* while following exploratory epsilon-greedy behavior)",
      ["A model-free, off-policy Temporal Difference algorithm that learns optimal action-values without knowing environment transition dynamics",
       "A supervised classification algorithm that requires labeled training images",
       "An unsupervised clustering algorithm that groups tabular CSV files",
       "A hardware diagnostic tool used to test GPU memory bandwidth"],
      0,
      "Q-Learning is model-free (learns without an explicit model of transition probabilities) and off-policy (learns optimal target action-values while following an exploratory epsilon-greedy behavior policy).",
      "PCEI-30-01 Block 2.4 - Q-Learning",
      ["q-learning", "model-free", "off-policy"])

add_c(72, "2.4", "Bellman Equation", "Advanced",
      "What fundamental mathematical equation expresses the recursive relationship between the value of a state and the values of its successor states?",
      "# Bellman Equation for V(s):\n# V(s) = sum_a pi(a|s) sum_{s',r} p(s',r|s,a) [r + gamma * V(s')]",
      ["The Bellman Equation", "The Navier-Stokes Equation", "Schrödinger's Wave Equation", "The Pythagorean Theorem"],
      0,
      "The Bellman Equation decomposes value functions into two parts: the immediate reward plus the discounted expected value of the next state, enabling dynamic programming and temporal difference learning.",
      "PCEI-30-01 Block 2.4 - Bellman Equation",
      ["bellman-equation", "recursion", "dynamic-programming"])

add_c(73, "2.4", "Deep Q-Networks", "Intermediate",
      "What breakthrough allowed Deep Q-Networks (DQN, e.g., DeepMind's Atari player) to master video games with vast visual state spaces?",
      "# Deep Q-Network:\n# Replacing tabular Q-table with a deep convolutional neural network that approximates Q(s, a; theta)\nQ_values = dqn_network(screen_pixels)",
      ["Replacing the discrete tabular Q-table with a deep neural network function approximator to estimate Q-values from raw pixel inputs",
       "Connecting the computer to a faster mechanical keyboard",
       "Writing the game emulator in assembly language instead of C",
       "Manually hardcoding optimal keystrokes for every single game level"],
      0,
      "Tabular Q-learning fails when state spaces are vast or continuous. Deep Q-Networks (DQN) use deep convolutional neural networks as function approximators, predicting Q-values directly from raw screen pixels.",
      "PCEI-30-01 Block 2.4 - DQN",
      ["dqn", "deep-q-network", "function-approximation"])

add_c(74, "2.4", "Experience Replay", "Advanced",
      "Why is 'Experience Replay' (storing transitions in a buffer and sampling random mini-batches) essential in training Deep Q-Networks?",
      "# Experience replay buffer:\nreplay_buffer.append((state, action, reward, next_state, done))\n# Sampling breaks temporal correlation between consecutive video frames\nbatch = random.sample(replay_buffer, 32)",
      ["It breaks temporal correlations between consecutive experience frames and provides independently distributed training samples for gradient descent",
       "It records high-definition gameplay videos to upload to YouTube",
       "It prevents game controllers from running out of battery charge",
       "It eliminates the need to use loss functions during backpropagation"],
      0,
      "Sequential game frames are highly correlated, violating the independent and identically distributed (i.i.d.) assumption of gradient descent. Experience replay samples random past transitions, stabilizing training.",
      "PCEI-30-01 Block 2.4 - Experience Replay",
      ["experience-replay", "dqn", "stability"])

add_c(75, "2.4", "Reward Shaping", "Intermediate",
      "What is 'Reward Shaping' in Reinforcement Learning system design?",
      "# Reward shaping:\n# Modifying the reward function to provide intermediate guidance bonuses rather than sparse terminal rewards\nshaped_reward = base_reward + distance_to_goal_reduction",
      ["Designing supplemental intermediate reward signals to guide the agent toward the goal more efficiently in sparse-reward environments",
       "Physically carving plastic trophies to present to algorithm designers",
       "Rounding floating-point rewards to the nearest dollar amount",
       "Converting negative penalties into positive rewards to improve agent morale"],
      0,
      "In sparse-reward environments (like a maze where reward is 0 until exit), agents struggle to stumble upon success. Reward shaping injects intermediate hints or progress milestones to accelerate learning.",
      "PCEI-30-01 Block 2.4 - Reward Shaping",
      ["reward-shaping", "sparse-rewards", "engineering"])

add_c(76, "2.4", "Reward Hacking", "Intermediate",
      "What dangerous phenomenon occurs when an RL agent engages in 'Reward Hacking' (Specification Gaming)?",
      "# Reward hacking example:\n# Boat racing game agent finds a loop where it can crash repeatedly and farm bonus points without finishing the race!",
      ["The agent exploits a flaw in the reward function to maximize its numerical score in an unintended, dysfunctional, or bizarre manner without solving the actual problem",
       "A hacker breaches the cloud server and alters the database balance",
       "The computer processor overheats due to infinite while loops",
       "The agent refuses to execute the game emulator application"],
      0,
      "Reward hacking occurs when an agent exploits loopholes in a poorly specified reward function (e.g., driving in circles to accumulate score points indefinitely rather than finishing the race), illustrating that agents do what we reward, not what we intend.",
      "PCEI-30-01 Block 2.4 - Reward Hacking",
      ["reward-hacking", "alignment", "specification-gaming"])

add_c(77, "2.4", "Actor-Critic", "Advanced",
      "In Actor-Critic reinforcement learning architectures, what are the distinct roles of the 'Actor' and the 'Critic'?",
      "# Actor-Critic roles:\n# Actor: Updates policy weights pi(a|s) to select actions\n# Critic: Evaluates how good the action was using value function V(s)",
      ["The Actor proposes actions by updating the policy; the Critic evaluates those actions by computing value baselines to adjust policy updates",
       "The Actor records audio voiceover, while the Critic writes newspaper movie reviews",
       "The Actor compiles the Python code, while the Critic runs unit tests",
       "The Actor runs on GPU hardware, while the Critic runs on mechanical hard drives"],
      0,
      "Actor-Critic methods combine policy and value learning: the Actor controls agent behavior by learning policy parameters, while the Critic estimates value functions to critique the Actor's choices and guide improvements.",
      "PCEI-30-01 Block 2.4 - Actor-Critic",
      ["actor-critic", "policy-gradient", "value-function"])

add_c(78, "2.4", "Model-Based vs Model-Free RL", "Intermediate",
      "What distinguishes 'Model-Based RL' from 'Model-Free RL'?",
      "# Model-Based: Agent learns/uses internal model of environment dynamics P(s'|s, a) to plan ahead\n# Model-Free: Agent learns policy or Q-values directly from trial-and-error experience without modeling transition physics",
      ["Model-based RL learns or possesses an internal predictive model of environment state transitions to simulate and plan actions; model-free RL learns directly from experience without a world model",
       "Model-based RL only runs on physical robots, while model-free RL only runs on software",
       "Model-free RL requires zero lines of Python code",
       "Model-based RL cannot calculate discounted cumulative returns"],
      0,
      "Model-free RL (like Q-learning) maps states to values/actions purely by trial-and-error. Model-based RL builds an internal simulator of environment dynamics, allowing the agent to deliberate, simulate, and plan future trajectories.",
      "PCEI-30-01 Block 2.4 - Model-Based vs Model-Free",
      ["model-based-rl", "model-free-rl", "planning"])

add_c(79, "2.4", "Credit Assignment Problem", "Advanced",
      "What is the 'Credit Assignment Problem' in Reinforcement Learning?",
      "# Credit assignment challenge:\n# In a game of 100 moves, the agent wins at move 100\n# Which specific moves among the 100 were responsible for the eventual victory?",
      ["The difficulty of determining which specific past action(s) in a long sequence was actually responsible for an eventual delayed reward or failure",
       "The process of verifying an applicant's credit score for a home loan approval",
       "The challenge of tracking electrical power costs across multiple cloud data centers",
       "The allocation of copyright royalties to open-source software contributors"],
      0,
      "When rewards are delayed (e.g., winning a game of chess after 50 moves), temporal credit assignment is the fundamental challenge of figuring out which particular moves contributed to victory and which were suboptimal.",
      "PCEI-30-01 Block 2.4 - Credit Assignment",
      ["credit-assignment", "delayed-rewards", "rl-theory"])

add_c(80, "2.4", "RLHF", "Intermediate",
      "What is 'Reinforcement Learning from Human Feedback' (RLHF) used for in training modern LLMs?",
      "# RLHF alignment workflow:\n# 1. Human annotators rank model responses\n# 2. Train reward model on preferences\n# 3. Optimize LLM policy via PPO against reward model",
      ["Aligning foundation language models with human preferences, helpfulness, and safety by fine-tuning with a reward model trained on human comparison rankings",
       "Teaching humanoid robots to perform gymnastics using physical safety ropes",
       "Manually proofreading every response generated by a chatbot before it is displayed",
       "Rewriting neural network kernels in the Rust programming language"],
      0,
      "RLHF aligns LLMs with human expectations: human evaluators rank candidate outputs, a reward model learns these preferences, and reinforcement learning (PPO) fine-tunes the LLM to maximize the reward score.",
      "PCEI-30-01 Block 2.4 - RLHF",
      ["rlhf", "alignment", "llm-training"])

# ==========================================
# CHAPTER 2.5: Model Evaluation, Overfitting & Validation (Cards 81-100)
# ==========================================
add_c(81, "2.5", "Train Test Split", "Beginner",
      "Why must a dataset be split into distinct Training and Testing subsets before developing an ML model?",
      "# Splitting dataset in scikit-learn:\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)",
      ["To evaluate how well the model generalizes to new, unseen data and detect memorization/overfitting",
       "To reduce the physical storage size of the dataset on disk",
       "Because scikit-learn functions throw an error if passed an unsplit dataset",
       "To encrypt the testing data against unauthorized employee access"],
      0,
      "Evaluating a model on the same data it was trained on only measures rote memorization. Splitting out a hold-out test set provides an unbiased assessment of the model's true generalization performance on unseen inputs.",
      "PCEI-30-01 Block 2.5 - Train Test Split",
      ["train-test-split", "evaluation", "generalization"])

add_c(82, "2.5", "Validation Set", "Intermediate",
      "In a three-way split (Train / Validation / Test), what is the specific role of the 'Validation Set'?",
      "# Train/Val/Test roles:\n# Train: Fit model parameters (weights, biases)\n# Validation: Tune hyperparameters and select best model architecture\n# Test: Final unbiased evaluation of selected model",
      ["To tune model hyperparameters (like tree depth, learning rate) and select the best model architecture without contaminating the final test set",
       "To store corrupted data rows that could not be processed",
       "To train the initial weights of linear regression models",
       "To generate animated visual charts for non-technical stakeholders"],
      0,
      "The validation set guides model selection and hyperparameter tuning (e.g., choosing max_depth or regularization strength). Keeping the test set untouched until the very end ensures the final evaluation remains strictly unbiased.",
      "PCEI-30-01 Block 2.5 - Validation Set",
      ["validation-set", "hyperparameter-tuning", "model-selection"])

add_c(83, "2.5", "Overfitting", "Beginner",
      "What are the diagnostic symptoms of 'Overfitting' (High Variance)?",
      "# Overfitting diagnostic:\n# Training Accuracy: 99.8%  (Near perfect on known data)\n# Test Accuracy:     64.2%  (Poor performance on unseen data)",
      ["Near-perfect performance on the training data combined with poor performance on unseen test data",
       "Poor performance on both the training data and the testing data",
       "The computer's central processing unit reaches 100°C temperature",
       "The model executes predictions in zero milliseconds"],
      0,
      "Overfitting occurs when a model learns the detailed noise and random fluctuations in the training dataset rather than the general underlying signal, resulting in stellar training metrics but abysmal test metrics.",
      "PCEI-30-01 Block 2.5 - Overfitting",
      ["overfitting", "high-variance", "diagnostics"])

add_c(84, "2.5", "Underfitting", "Beginner",
      "What are the diagnostic symptoms of 'Underfitting' (High Bias)?",
      "# Underfitting diagnostic:\n# Training Accuracy: 58.0%  (Poor performance on training data)\n# Test Accuracy:     57.5%  (Poor performance on testing data)",
      ["Poor performance on the training data as well as on the testing data, indicating the model is too simple to capture the underlying pattern",
       "Near-perfect accuracy on test data with high error on training data",
       "A model that requires over 1 terabyte of memory to train",
       "A dataset that contains zero missing values"],
      0,
      "Underfitting occurs when a model is overly simplistic (e.g., fitting a linear line to an obviously quadratic relationship) and cannot capture the fundamental structure of the data, performing poorly on both train and test sets.",
      "PCEI-30-01 Block 2.5 - Underfitting",
      ["underfitting", "high-bias", "diagnostics"])

add_c(85, "2.5", "Bias-Variance Tradeoff", "Intermediate",
      "In machine learning theory, what is the 'Bias-Variance Tradeoff'?",
      "# Total Error = Bias^2 + Variance + Irreducible Error\n# Simple models: High Bias, Low Variance\n# Complex models: Low Bias, High Variance",
      ["The tension between error introduced by oversimplifying assumptions (bias) and error introduced by sensitivity to small fluctuations in training data (variance)",
       "The trade-off between processor clock speed and hard disk capacity",
       "The balance between open-source software and proprietary software",
       "The tension between frontend web design and backend database indexing"],
      0,
      "Total prediction error consists of Bias (underfitting due to overly simple models), Variance (overfitting due to over-sensitive models), and irreducible noise. Minimizing total error requires finding the optimal balance between model complexity and simplicity.",
      "PCEI-30-01 Block 2.5 - Bias-Variance Tradeoff",
      ["bias-variance", "model-complexity", "error-decomposition"])

add_c(86, "2.5", "K-Fold Cross-Validation", "Intermediate",
      "How does K-Fold Cross-Validation work?",
      "# K-Fold Cross-Validation:\n# Split data into K folds (e.g., K=5)\n# Train on K-1 folds, validate on 1 fold\n# Repeat K times and average the scores\nfrom sklearn.model_selection import cross_val_score\nscores = cross_val_score(model, X, y, cv=5)",
      ["The dataset is split into K equal folds; the model is trained on K-1 folds and evaluated on the remaining fold, repeating K times and averaging the performance scores",
       "The dataset is multiplied K times to artificially increase sample size",
       "The algorithm is trained on K different cloud hosting providers simultaneously",
       "The dataset is filtered to only include rows with K or more words"],
      0,
      "K-Fold Cross-Validation divides data into K partitions. It trains K separate models, each using a different fold as validation and the rest for training. Averaging results provides a robust estimate of generalization and eliminates split bias.",
      "PCEI-30-01 Block 2.5 - K-Fold Cross-Validation",
      ["cross-validation", "k-fold", "robustness"])

add_c(87, "2.5", "Data Leakage", "Intermediate",
      "What is 'Data Leakage' (Information Leakage) in a machine learning pipeline?",
      "# Data leakage example:\n# Fitting a scaler on the ENTIRE dataset BEFORE splitting into train/test!\n# Test data statistics leak into training!",
      ["When information from outside the training dataset (such as target labels or test set distributions) inadvertently contaminates model training, creating deceptively optimistic evaluation scores",
       "When a physical water cooling pipe leaks onto server rack motherboards",
       "When an employee accidentally emails a customer spreadsheet to the wrong address",
       "When a hard drive loses magnetic charge over several years"],
      0,
      "Data leakage occurs when information about the target or test distribution is accidentally introduced into the model during training (e.g., standardizing features using the full dataset before splitting), creating artificially inflated test scores that fail in production.",
      "PCEI-30-01 Block 2.5 - Data Leakage",
      ["data-leakage", "pipeline-integrity", "pitfalls"])

add_c(88, "2.5", "Confusion Matrix", "Beginner",
      "What are the four fundamental outcomes in a binary classification Confusion Matrix?",
      "# Confusion Matrix table:\n#                  Predicted Positive | Predicted Negative\n# Actual Positive: True Positive (TP) | False Negative (FN)\n# Actual Negative: False Positive (FP)| True Negative (TN)",
      ["True Positives (TP), False Positives (FP), True Negatives (TN), and False Negatives (FN)",
       "Mean, Median, Mode, and Standard Deviation",
       "Training Loss, Validation Loss, Epoch, and Learning Rate",
       "Alpha, Beta, Gamma, and Delta"],
      0,
      "A confusion matrix summarizes classification results across four quadrants: True Positive (correct positive), False Positive (Type I error), True Negative (correct negative), and False Negative (Type II error).",
      "PCEI-30-01 Block 2.5 - Confusion Matrix",
      ["confusion-matrix", "tp-fp-tn-fn", "classification-metrics"])

add_c(89, "2.5", "Accuracy Metric", "Beginner",
      "What is the mathematical formula for classification 'Accuracy'?",
      "# Accuracy formula:\naccuracy = (TP + TN) / (TP + TN + FP + FN)",
      ["(TP + TN) / (TP + TN + FP + FN)", "TP / (TP + FP)", "TP / (TP + FN)", "(2 * Precision * Recall) / (Precision + Recall)"],
      0,
      "Accuracy measures the proportion of total predictions that were correct: (True Positives + True Negatives) divided by the total number of evaluated samples.",
      "PCEI-30-01 Block 2.5 - Accuracy",
      ["accuracy", "metrics", "formula"])

add_c(90, "2.5", "Accuracy Paradox", "Intermediate",
      "Why is Accuracy a misleading and dangerous metric for evaluating models on highly imbalanced datasets (e.g., credit card fraud where 99.9% of transactions are legitimate)?",
      "# Accuracy paradox:\n# If 999 transactions are legitimate and 1 is fraud:\n# A dumb model predicting 'Legitimate' 100% of the time gets 99.9% accuracy, but catches ZERO fraud!",
      ["A naive model that always predicts the majority class will achieve deceptively high accuracy while failing to detect any instances of the critical minority class",
       "Accuracy can only be computed if the dataset has an odd number of rows",
       "Accuracy calculations consume too much CPU processing power on imbalanced data",
       "Accuracy is mathematically restricted to values between 50% and 75%"],
      0,
      "The Accuracy Paradox shows that on imbalanced data (e.g., 99% negative, 1% positive), a trivial model predicting 'negative' for every sample scores 99% accuracy while being completely useless for detecting positives.",
      "PCEI-30-01 Block 2.5 - Accuracy Paradox",
      ["accuracy-paradox", "class-imbalance", "metrics"])

add_c(91, "2.5", "Precision", "Intermediate",
      "What does the 'Precision' metric measure in classification, and what is its formula?",
      "# Precision formula:\n# Out of all points PREDICTED as positive, how many were ACTUALLY positive?\nprecision = TP / (TP + FP)",
      ["The proportion of predicted positives that were truly positive: TP / (TP + FP)",
       "The proportion of actual positives that were correctly captured: TP / (TP + FN)",
       "The total number of samples processed per second",
       "The ratio of true negatives to false positives"],
      0,
      "Precision answers: 'Of all instances the model labeled positive, how many were correct?' Formula: TP / (TP + FP). High precision is critical when False Positives are costly (e.g., spam filter moving important emails to junk).",
      "PCEI-30-01 Block 2.5 - Precision",
      ["precision", "false-positives", "metrics"])

add_c(92, "2.5", "Recall", "Intermediate",
      "What does 'Recall' (Sensitivity / True Positive Rate) measure in classification, and what is its formula?",
      "# Recall formula:\n# Out of all ACTUALLY positive points, how many did the model CATCH?\nrecall = TP / (TP + FN)",
      ["The proportion of actual real-world positive cases that the model successfully identified: TP / (TP + FN)",
       "The proportion of predicted positives that were correct: TP / (TP + FP)",
       "The percentage of memory cleared after garbage collection",
       "The speed of downloading training batches from cloud storage"],
      0,
      "Recall (Sensitivity) answers: 'Of all actual positive instances in the data, how many did the model find?' Formula: TP / (TP + FN). High recall is essential when False Negatives are dangerous (e.g., cancer detection).",
      "PCEI-30-01 Block 2.5 - Recall",
      ["recall", "sensitivity", "false-negatives"])

add_c(93, "2.5", "F1 Score", "Intermediate",
      "What is the 'F1-Score' and why is it preferred over accuracy on imbalanced datasets?",
      "# F1-Score formula (Harmonic mean of Precision and Recall):\nf1 = 2 * (precision * recall) / (precision + recall)",
      ["The harmonic mean of Precision and Recall, providing a balanced evaluation metric that severely penalizes models with poor precision or poor recall",
       "The arithmetic sum of True Positives and False Positives",
       "The ratio of the first principal component to the second principal component",
       "The number of features divided by the number of tree splits"],
      0,
      "The F1-score is the harmonic mean of Precision and Recall: 2 * (P * R) / (P + R). The harmonic mean penalizes extreme imbalances, ensuring that an F1 score is high only if both Precision and Recall are strong.",
      "PCEI-30-01 Block 2.5 - F1 Score",
      ["f1-score", "harmonic-mean", "imbalance"])

add_c(94, "2.5", "Type I vs Type II Errors", "Intermediate",
      "What is the statistical distinction between a 'Type I Error' and a 'Type II Error'?",
      "# Type I Error: False Positive (FP) -> Model alarms when nothing is there\n# Type II Error: False Negative (FN) -> Model misses an actual event",
      ["A Type I Error is a False Positive (false alarm); a Type II Error is a False Negative (missed detection)",
       "A Type I Error occurs in training; a Type II Error occurs in testing",
       "A Type I Error is a hardware fault; a Type II Error is a software bug",
       "A Type I Error affects text files; a Type II Error affects image files"],
      0,
      "In hypothesis testing and ML: Type I Error = False Positive (rejecting a true null hypothesis, e.g., convicting an innocent person); Type II Error = False Negative (failing to reject false null, e.g., acquitting a guilty person).",
      "PCEI-30-01 Block 2.5 - Type I vs Type II",
      ["type-i", "type-ii", "errors"])

add_c(95, "2.5", "ROC Curve", "Intermediate",
      "What does a Receiver Operating Characteristic (ROC) curve plot?",
      "# ROC curve plotting:\n# True Positive Rate (Recall) on Y-axis vs False Positive Rate (1 - Specificity) on X-axis\nfrom sklearn.metrics import roc_curve\nfpr, tpr, thresholds = roc_curve(y_test, y_probs)",
      ["True Positive Rate (Recall) on the Y-axis against False Positive Rate on the X-axis across all possible classification decision thresholds",
       "Training Loss on the Y-axis against Epoch Number on the X-axis",
       "CPU Clock Frequency on the Y-axis against Memory Bandwidth on the X-axis",
       "Feature Importance on the Y-axis against Tree Depth on the X-axis"],
      0,
      "The ROC curve visualizes a binary classifier's diagnostic trade-off by plotting True Positive Rate (Sensitivity) vs False Positive Rate (1 - Specificity) across every threshold setting from 0.0 to 1.0.",
      "PCEI-30-01 Block 2.5 - ROC Curve",
      ["roc-curve", "tpr", "fpr"])

add_c(96, "2.5", "ROC-AUC", "Intermediate",
      "What does the Area Under the ROC Curve (ROC-AUC) score measure, and what does a score of 0.5 represent?",
      "# ROC-AUC interpretation:\n# 1.0: Perfect discrimination\n# 0.5: No discrimination (equivalent to random guessing)\n# < 0.5: Worse than random (predictions are inverted)",
      ["The probability that the model ranks a randomly chosen positive instance higher than a randomly chosen negative instance; 0.5 indicates random guessing performance",
       "The physical surface area of the graphics processing unit; 0.5 indicates 50 square centimeters",
       "The ratio of missing values in the testing split; 0.5 indicates half of rows are null",
       "The percentage of code lines covered by unit tests"],
      0,
      "ROC-AUC evaluates ranking ability independent of threshold. A score of 1.0 indicates perfect class separation; 0.5 means the classifier has zero discriminative ability (no better than random flipping of a fair coin).",
      "PCEI-30-01 Block 2.5 - ROC-AUC",
      ["roc-auc", "discrimination", "ranking"])

add_c(97, "2.5", "Mean Squared Error", "Beginner",
      "What is the mathematical formula for Mean Squared Error (MSE) in regression model evaluation?",
      "# MSE formula:\nmse = sum((y_actual - y_pred)**2 for y_actual, y_pred in zip(y_true, y_pred)) / len(y_true)",
      ["The average of the squared differences between predicted values and actual target values",
       "The average of the absolute differences without squaring",
       "The maximum difference between any two predictions",
       "The percentage of predictions that match exactly to four decimal places"],
      0,
      "MSE calculates the mean of squared residuals: (1/n) * Σ(y_true - y_pred)^2. Squaring penalizes large errors much more severely than small errors and prevents positive and negative errors from canceling each other out.",
      "PCEI-30-01 Block 2.5 - MSE",
      ["mse", "regression-metrics", "residuals"])

add_c(98, "2.5", "RMSE vs MAE", "Intermediate",
      "Why is Root Mean Squared Error (RMSE) often preferred over Mean Absolute Error (MAE) when large prediction errors are especially dangerous?",
      "# RMSE penalizes large outliers heavily due to squaring:\n# Error = 10 -> Squared = 100\n# Error = 2  -> Squared = 4",
      ["RMSE squares the errors before averaging, which disproportionately penalizes large outlier errors compared to MAE",
       "RMSE cannot be calculated on negative numbers",
       "MAE is 1,000 times slower to calculate on modern CPUs",
       "RMSE eliminates the need to calculate square roots"],
      0,
      "Because RMSE squares errors before taking the root, large deviations produce outsized penalties. If being off by 10 units is more than five times worse than being off by 2 units, RMSE is the metric of choice.",
      "PCEI-30-01 Block 2.5 - RMSE vs MAE",
      ["rmse", "mae", "error-metrics"])

add_c(99, "2.5", "R-Squared", "Intermediate",
      "What does the R-squared (Coefficient of Determination) metric signify in regression analysis?",
      "# R^2 formula: 1 - (SS_res / SS_tot)\n# Proportion of total target variance explained by the regression model",
      ["The proportion of variance in the target variable that is predictable from the independent input features",
       "The radius of the circular scatter plot boundary",
       "The correlation between the model filename and the dataset name",
       "The percentage of rows that contain zero missing values"],
      0,
      "R² (Coefficient of Determination) measures the proportion of variance in the dependent variable explained by the model: 1.0 means the model explains 100% of variance; 0.0 means the model performs no better than predicting the mean.",
      "PCEI-30-01 Block 2.5 - R-Squared",
      ["r-squared", "coefficient-of-determination", "variance-explained"])

add_c(100, "2.5", "Regularization", "Intermediate",
      "How do L1 Regularization (Lasso) and L2 Regularization (Ridge) prevent overfitting in linear models?",
      "# Regularized loss functions:\n# Ridge (L2): Loss + lambda * sum(w_i ** 2)      -> Shrinks weights towards zero\n# Lasso (L1): Loss + lambda * sum(abs(w_i))     -> Shrinks weights to exact zero (feature selection)",
      ["By adding a mathematical penalty on the magnitude of the model coefficients (weights) to the loss function, discouraging overly complex models",
       "By deleting half of the columns randomly before every prediction",
       "By increasing the learning rate to infinity",
       "By forcing all weights to be positive prime numbers"],
      0,
      "Regularization penalizes large model weights during optimization: L2 (Ridge) penalizes squared weights (shrinking them smoothly), while L1 (Lasso) penalizes absolute weights, driving irrelevant feature weights to exact zero.",
      "PCEI-30-01 Block 2.5 - Regularization",
      ["regularization", "lasso", "ridge"])

# ==========================================
# WRITE OUTPUT FILES
# ==========================================
assert len(cards) == 100, f"Expected 100 cards, got {len(cards)}"

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

write_ts_file("src/data/pceiSection2CardsPart1.ts", "pceiSection2CardsPart1", cards[:50])
write_ts_file("src/data/pceiSection2CardsPart2.ts", "pceiSection2CardsPart2", cards[50:])

with open("src/data/pceiSection2Flashcards.ts", "w") as f:
    f.write("""import { Flashcard } from '../types';
import { pceiSection2CardsPart1 } from './pceiSection2CardsPart1';
import { pceiSection2CardsPart2 } from './pceiSection2CardsPart2';

export const pceiSection2Flashcards: Flashcard[] = [
  ...pceiSection2CardsPart1,
  ...pceiSection2CardsPart2,
];
""")
print("Wrote pceiSection2Flashcards.ts successfully!")
