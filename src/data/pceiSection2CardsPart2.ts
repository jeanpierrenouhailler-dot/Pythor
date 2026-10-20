import { Flashcard } from '../types';

export const pceiSection2CardsPart2: Flashcard[] = [
  {
    id: "pcei-2-051",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "DBSCAN",
    difficulty: "Intermediate",
    question: "What is the core operational principle of the DBSCAN clustering algorithm?",
    codeSnippet: "# DBSCAN parameters:\n# eps: maximum distance between two samples to be considered neighbors\n# min_samples: minimum points in a neighborhood to form a dense core region",
    options: [
      "Density-based: groups points that are packed closely together in high-density regions and marks points in low-density regions as noise/outliers",
      "Centroid-based: calculates K arithmetic means across spherical clusters",
      "Tree-based: splits features using Gini impurity thresholds",
      "Gradient-based: computes partial derivatives of cross-entropy loss"
    ],
    correctAnswer: 0,
    explanation: "DBSCAN (Density-Based Spatial Clustering of Applications with Noise) finds core samples in high-density areas and expands clusters from them, successfully handling arbitrary cluster shapes and isolating outliers as noise.",
    officialRef: "PCEI-30-01 Block 2.3 - DBSCAN",
    tags: ["dbscan", "density-based", "outliers"]
  },
  {
    id: "pcei-2-052",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "DBSCAN Parameters",
    difficulty: "Intermediate",
    question: "What are the two key hyperparameters required to configure the DBSCAN algorithm?",
    codeSnippet: "# Configuring DBSCAN in scikit-learn:\nfrom sklearn.cluster import DBSCAN\nclustering = DBSCAN(eps=0.5, min_samples=5)",
    options: [
      "eps (neighborhood radius distance) and min_samples (minimum points required to form a dense region)",
      "K (number of clusters) and max_iter (number of iterations)",
      "learning_rate and batch_size",
      "n_estimators and max_depth"
    ],
    correctAnswer: 0,
    explanation: "DBSCAN requires two parameters: eps (the radius defining a point's local neighborhood) and min_samples (the minimum number of points required within that radius to establish a core dense region).",
    officialRef: "PCEI-30-01 Block 2.3 - DBSCAN Parameters",
    tags: ["dbscan", "eps", "min-samples"]
  },
  {
    id: "pcei-2-053",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "Dimensionality Reduction",
    difficulty: "Beginner",
    question: "What is the primary motivation for performing 'Dimensionality Reduction' on high-dimensional datasets?",
    codeSnippet: "# Dimensionality reduction:\n# 100 features -> 2 or 3 principal components\n# Enables 2D/3D visualization, speeds up training, mitigates Curse of Dimensionality",
    options: [
      "To compress features into fewer dimensions while preserving variance, enabling 2D/3D visualization and combating the curse of dimensionality",
      "To increase the physical file size on the hard drive",
      "To convert numerical datasets into audio podcast episodes",
      "To encrypt confidential customer records with AES-GCM"
    ],
    correctAnswer: 0,
    explanation: "Dimensionality reduction reduces the number of random variables under consideration by obtaining a set of principal variables, mitigating the curse of dimensionality, speeding computation, and allowing 2D/3D visualization.",
    officialRef: "PCEI-30-01 Block 2.3 - Dimensionality Reduction",
    tags: ["dimensionality-reduction", "visualization", "compression"]
  },
  {
    id: "pcei-2-054",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "Curse of Dimensionality",
    difficulty: "Intermediate",
    question: "What problem is known as the 'Curse of Dimensionality' in machine learning?",
    codeSnippet: "# Curse of dimensionality effect:\n# As feature count increases, data becomes extremely sparse, and all points become equidistant",
    options: [
      "As the number of dimensions/features increases, the volume of the space grows exponentially, making data points sparse and distance metrics ineffective",
      "The operating system crashes when opening files with more than 10 columns",
      "Hard drives run out of storage space after storing 5 features",
      "Neural networks refuse to calculate gradients in 3D space"
    ],
    correctAnswer: 0,
    explanation: "As dimensions increase, feature space volume expands exponentially, causing data to become extremely sparse. Points become roughly equidistant from one another, severely undermining distance-based algorithms (like KNN and K-Means).",
    officialRef: "PCEI-30-01 Block 2.3 - Curse of Dimensionality",
    tags: ["curse-of-dimensionality", "sparsity", "distance-metrics"]
  },
  {
    id: "pcei-2-055",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "Principal Component Analysis",
    difficulty: "Intermediate",
    question: "What does Principal Component Analysis (PCA) mathematically maximize when projecting data onto new orthogonal axes?",
    codeSnippet: "# PCA objective:\n# Find orthogonal directions (principal components) that maximize variance of the projected data\nfrom sklearn.decomposition import PCA\npca = PCA(n_components=2)\nX_reduced = pca.fit_transform(X)",
    options: [
      "The variance of the projected data (preserving maximum information)",
      "The number of negative numbers in the matrix",
      "The time required to compute matrix inversions",
      "The classification accuracy of a decision tree"
    ],
    correctAnswer: 0,
    explanation: "PCA is an unsupervised linear transformation that finds new orthogonal axes (principal components) ordered by the amount of variance they explain, maximizing preserved information while reducing dimensions.",
    officialRef: "PCEI-30-01 Block 2.3 - PCA",
    tags: ["pca", "variance", "principal-components"]
  },
  {
    id: "pcei-2-056",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "PCA Orthogonality",
    difficulty: "Intermediate",
    question: "In Principal Component Analysis (PCA), what is the relationship between the first principal component (PC1) and the second principal component (PC2)?",
    codeSnippet: "# Orthogonality condition:\n# PC2 is strictly perpendicular (orthogonal / uncorrelated) to PC1",
    options: [
      "PC2 is strictly orthogonal (perpendicular and uncorrelated) to PC1",
      "PC2 is identical and parallel to PC1",
      "PC2 is the negative inverse of PC1",
      "PC2 has twice as many features as PC1"
    ],
    correctAnswer: 0,
    explanation: "All principal components in PCA are mutually orthogonal (perpendicular at 90 degrees), ensuring that the new projected feature axes are completely uncorrelated with one another.",
    officialRef: "PCEI-30-01 Block 2.3 - PCA Orthogonality",
    tags: ["pca", "orthogonality", "uncorrelated"]
  },
  {
    id: "pcei-2-057",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "Explained Variance Ratio",
    difficulty: "Intermediate",
    question: "In scikit-learn's PCA, what does the `explained_variance_ratio_` attribute indicate?",
    codeSnippet: "# Analyzing explained variance in PCA:\npca = PCA(n_components=3)\npca.fit(X)\nprint(pca.explained_variance_ratio_)  # Output: [0.72, 0.18, 0.06] -> PC1 + PC2 capture 90% of total variance!",
    options: [
      "The proportion of the dataset's total variance that lies along each principal component axis",
      "The percentage of memory consumed by the Python script",
      "The ratio of training rows to testing rows",
      "The probability of the model encountering a division by zero error"
    ],
    correctAnswer: 0,
    explanation: "The explained_variance_ratio_ returns an array showing the fraction of total dataset variance captured by each principal component (e.g., [0.72, 0.18] means PC1 and PC2 preserve 90% of the original variance).",
    officialRef: "PCEI-30-01 Block 2.3 - Explained Variance",
    tags: ["pca", "explained-variance", "scikit-learn"]
  },
  {
    id: "pcei-2-058",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "PCA Preprocessing",
    difficulty: "Intermediate",
    question: "Why must data be mean-centered and standardized before applying Principal Component Analysis (PCA)?",
    codeSnippet: "# PCA is sensitive to feature variance scales:\n# If one feature is measured in millimeters and another in kilometers, the larger scale artificially dominates PCA!",
    options: [
      "Features with larger raw numeric scales will artificially dominate the first principal component simply due to magnitude rather than true variance",
      "PCA algorithms cannot process positive numbers",
      "Unscaled data will cause PCA to output complex imaginary matrices",
      "Standardization converts non-linear relationships into linear lines"
    ],
    correctAnswer: 0,
    explanation: "PCA seeks directions of maximum variance. If features are not standardized (mean=0, variance=1), a feature measured in large units (like Annual Income) will falsely dominate the principal axes over smaller features (like Age).",
    officialRef: "PCEI-30-01 Block 2.3 - PCA Scaling",
    tags: ["pca", "standardization", "scaling"]
  },
  {
    id: "pcei-2-059",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "t-SNE vs PCA",
    difficulty: "Advanced",
    question: "What is the key advantage of t-SNE (t-Distributed Stochastic Neighbor Embedding) over PCA for exploratory data visualization?",
    codeSnippet: "# t-SNE capability:\n# Non-linear dimensionality reduction that preserves local manifold neighbor relationships\nfrom sklearn.manifold import TSNE\nX_embedded = TSNE(n_components=2).fit_transform(X)",
    options: [
      "t-SNE captures complex non-linear relationships and preserves local neighborhood structures, separating non-linear clusters that PCA overlays",
      "t-SNE is 1,000 times faster to compute than PCA on large datasets",
      "t-SNE can be used directly for linear regression modeling",
      "t-SNE preserves global distances perfectly across all dimensions"
    ],
    correctAnswer: 0,
    explanation: "PCA is a linear technique that struggles with complex manifolds. t-SNE is a non-linear probabilistic technique that keeps similar points close together in 2D/3D space, making it exceptional for visualizing high-dimensional clusters.",
    officialRef: "PCEI-30-01 Block 2.3 - t-SNE",
    tags: ["t-sne", "non-linear", "visualization"]
  },
  {
    id: "pcei-2-060",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.3",
    category: "Anomaly Detection",
    difficulty: "Intermediate",
    question: "How is unsupervised anomaly detection (e.g., using Isolation Forests or One-Class SVM) used in production monitoring?",
    codeSnippet: "# Anomaly detection concept:\n# Normal points cluster in high-density regions; anomalies are rare, isolated outliers that split easily",
    options: [
      "By modeling normal data distributions and flagging instances that fall into sparse regions or deviate significantly from the norm",
      "By asking customers to manually verify every server log entry",
      "By restarting all production servers every 15 minutes",
      "By deleting all database records that have even numbers in their primary keys"
    ],
    correctAnswer: 0,
    explanation: "Unsupervised anomaly detection learns the baseline distribution of normal behavior from unannotated logs. Outlying points that occur in sparse regions or require very few splits (Isolation Forest) are flagged as suspicious anomalies.",
    officialRef: "PCEI-30-01 Block 2.3 - Anomaly Detection",
    tags: ["anomaly-detection", "isolation-forest", "outliers"]
  },
  {
    id: "pcei-2-061",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "RL Loop",
    difficulty: "Beginner",
    question: "What are the four core elements of the Reinforcement Learning agent-environment interaction loop?",
    codeSnippet: "# RL interaction cycle:\n# State (S), Action (A), Reward (R), Next State (S')\naction = policy(state)\nnext_state, reward, done, _ = env.step(action)",
    options: [
      "State, Action, Reward, and Next State",
      "Compiler, Linker, Assembler, and CPU",
      "Input tensor, Kernel weight, Stride, and Pooling",
      "HTML, CSS, JavaScript, and WebAssembly"
    ],
    correctAnswer: 0,
    explanation: "The fundamental RL loop consists of: the Agent observing the Environment's current State (S), taking an Action (A), and receiving a scalar Reward (R) along with the resulting Next State (S').",
    officialRef: "PCEI-30-01 Block 2.4 - RL Loop",
    tags: ["rl-loop", "state", "action", "reward"]
  },
  {
    id: "pcei-2-062",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "RL Policy",
    difficulty: "Beginner",
    question: "In Reinforcement Learning, what is an agent's 'Policy' (denoted as \u03c0)?",
    codeSnippet: "# Policy definition:\n# Mapping from states to actions: pi(s) -> a\n# Deterministic: a = pi(s)\n# Stochastic: pi(a | s) = P(A_t = a | S_t = s)",
    options: [
      "The strategy or function that maps an observed state to the action the agent should choose",
      "The legal terms of service document signed by the software developer",
      "The maximum clock frequency allowable for GPU cooling",
      "The database access permissions granted to guest users"
    ],
    correctAnswer: 0,
    explanation: "A policy (\u03c0) defines the agent's behavior at any given time. It is a mapping from perceived states of the environment to actions to be taken (either deterministic: a = \u03c0(s), or stochastic: \u03c0(a|s)).",
    officialRef: "PCEI-30-01 Block 2.4 - Policy",
    tags: ["policy", "strategy", "decision-making"]
  },
  {
    id: "pcei-2-063",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Reward Signal",
    difficulty: "Beginner",
    question: "What is the role of the 'Reward Signal' in Reinforcement Learning?",
    codeSnippet: "# Reward feedback:\n# Scalar value indicating immediate success or failure of an action\nreward = +10 if reached_goal else -1",
    options: [
      "A scalar feedback value from the environment indicating the immediate desirability of an action taken in a given state",
      "A monetary payment automatically sent to the developer's bank account",
      "The number of floating-point operations executed per millisecond",
      "An encrypted token granting root access to the operating system"
    ],
    correctAnswer: 0,
    explanation: "The reward is an immediate numerical feedback value sent by the environment to the agent on each step, defining what is good and bad in an immediate sense. The agent's sole goal is to maximize total cumulative reward.",
    officialRef: "PCEI-30-01 Block 2.4 - Reward Signal",
    tags: ["reward", "feedback", "reinforcement"]
  },
  {
    id: "pcei-2-064",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Discount Factor",
    difficulty: "Intermediate",
    question: "What is the role of the 'Discount Factor' (gamma, \u03b3) in calculating the return G_t in Reinforcement Learning?",
    codeSnippet: "# Discounted return formula:\n# G_t = R_{t+1} + gamma * R_{t+2} + (gamma**2) * R_{t+3} + ...\n# 0 <= gamma < 1 determines the present value of future rewards",
    options: [
      "It determines how much the agent values future rewards compared to immediate rewards (0 <= \u03b3 < 1)",
      "It offers a commercial percentage discount on cloud computing invoices",
      "It reduces the physical screen resolution of game monitors",
      "It divides the learning rate by the number of CPU threads"
    ],
    correctAnswer: 0,
    explanation: "The discount factor \u03b3 (between 0 and 1) values immediate rewards higher than distant future rewards. A \u03b3 near 0 makes the agent 'myopic' (greedy for immediate rewards), while \u03b3 near 1 makes it 'farsighted'.",
    officialRef: "PCEI-30-01 Block 2.4 - Discount Factor",
    tags: ["discount-factor", "gamma", "return"]
  },
  {
    id: "pcei-2-065",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Exploration vs Exploitation",
    difficulty: "Intermediate",
    question: "What is the classical 'Exploration vs Exploitation' dilemma in Reinforcement Learning?",
    codeSnippet: "# Exploration: Try new actions to discover better rewards\n# Exploitation: Choose the best currently known action to maximize reward",
    options: [
      "The trade-off between trying novel, untested actions to discover better strategies (exploration) versus choosing the best currently known action (exploitation)",
      "The trade-off between purchasing desktop computers versus laptop computers",
      "The decision between using Python 3.10 versus Python 3.11",
      "The challenge of balancing internet download speed against upload speed"
    ],
    correctAnswer: 0,
    explanation: "An agent must exploit what it already knows to obtain rewards, but it must also explore unvisited states and actions to discover potentially superior strategies that yield higher long-term cumulative rewards.",
    officialRef: "PCEI-30-01 Block 2.4 - Exploration vs Exploitation",
    tags: ["exploration", "exploitation", "dilemma"]
  },
  {
    id: "pcei-2-066",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Epsilon-Greedy Strategy",
    difficulty: "Intermediate",
    question: "How does the 'Epsilon-Greedy' action selection strategy balance exploration and exploitation?",
    codeSnippet: "# Epsilon-greedy implementation:\nimport random\nif random.random() < epsilon:\n    action = random_action()  # Explore with probability epsilon\nelse:\n    action = best_action()    # Exploit with probability 1 - epsilon",
    options: [
      "It chooses a random exploratory action with probability \u03b5 (epsilon) and chooses the best currently known greedy action with probability 1 - \u03b5",
      "It always takes random actions on weekends and greedy actions on weekdays",
      "It divides the action space into positive and negative integers",
      "It evaluates decisions using a convolutional neural network filter"
    ],
    correctAnswer: 0,
    explanation: "Epsilon-greedy is a simple, effective balancing method: with small probability \u03b5 (e.g., 0.1), the agent explores by picking a random action; with probability 1 - \u03b5 (0.9), it exploits its best known action.",
    officialRef: "PCEI-30-01 Block 2.4 - Epsilon-Greedy",
    tags: ["epsilon-greedy", "action-selection", "exploration"]
  },
  {
    id: "pcei-2-067",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Markov Decision Process",
    difficulty: "Intermediate",
    question: "What mathematical framework forms the formal foundation for almost all Reinforcement Learning problems?",
    codeSnippet: "# Markov Decision Process (MDP) tuple:\n# (S, A, P, R, gamma)\n# States, Actions, Transition probabilities, Rewards, Discount factor",
    options: [
      "Markov Decision Process (MDP)",
      "Fast Fourier Transform (FFT)",
      "Relational Database Normalization",
      "Convolutional Max-Pooling"
    ],
    correctAnswer: 0,
    explanation: "A Markov Decision Process (MDP) formally defines the RL problem using a 5-tuple: States (S), Actions (A), Transition probability distribution P(s'|s,a), Reward function R(s,a), and Discount factor \u03b3.",
    officialRef: "PCEI-30-01 Block 2.4 - MDP",
    tags: ["mdp", "markov-decision-process", "formalism"]
  },
  {
    id: "pcei-2-068",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Markov Property",
    difficulty: "Intermediate",
    question: "What does the 'Markov Property' state regarding the state transitions of an environment?",
    codeSnippet: "# Markov property: Future is independent of past given present\n# P(S_{t+1} | S_t, A_t, S_{t-1}, A_{t-1}, ...) = P(S_{t+1} | S_t, A_t)",
    options: [
      "The future state depends only on the current state and current action, not on the historical sequence of past states",
      "The future state is strictly non-deterministic and can never be modeled mathematically",
      "All actions in the environment must be reversible",
      "The environment can only be stored in memory as an adjacency matrix"
    ],
    correctAnswer: 0,
    explanation: "The Markov Property states that 'the future is independent of the past given the present.' The current state S_t captures all relevant information needed to determine future transitions.",
    officialRef: "PCEI-30-01 Block 2.4 - Markov Property",
    tags: ["markov-property", "state-transitions", "memoryless"]
  },
  {
    id: "pcei-2-069",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Value Function",
    difficulty: "Intermediate",
    question: "In Reinforcement Learning, what does the State-Value Function V(s) quantify?",
    codeSnippet: "# Value Function V(s):\n# Expected cumulative discounted return starting from state s following policy pi\nV_s = expected_return(start_state=s, policy=pi)",
    options: [
      "The expected cumulative discounted future reward an agent will receive starting from state s and following policy \u03c0 thereafter",
      "The monetary resale value of the computer hardware executing the simulation",
      "The total number of CPU clock cycles needed to parse the Python script",
      "The likelihood of a hard drive experiencing a mechanical head crash"
    ],
    correctAnswer: 0,
    explanation: "The value function V(s) specifies the long-term desirability of being in a state: it computes the expected cumulative return starting from state s under policy \u03c0, accounting for all anticipated future rewards.",
    officialRef: "PCEI-30-01 Block 2.4 - Value Function",
    tags: ["value-function", "expected-return", "states"]
  },
  {
    id: "pcei-2-070",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Q-Function",
    difficulty: "Intermediate",
    question: "What does the Action-Value Function Q(s, a) represent in Q-Learning?",
    codeSnippet: "# Q(s, a) function:\n# Expected cumulative return of taking action a in state s, and then following policy pi\nQ_sa = expected_return(state=s, action=a, policy=pi)",
    options: [
      "The expected cumulative return of taking action 'a' in state 's', and continuing with policy \u03c0 thereafter",
      "The quality assurance testing score of the Python interpreter",
      "The quantum state superposition coefficient of a qubit register",
      "The queue length of pending HTTP network socket packets"
    ],
    correctAnswer: 0,
    explanation: "The Q-function (Action-Value Function Q(s, a)) evaluates the expected cumulative return of choosing specific action a in state s, forming the core matrix updated during Q-learning algorithms.",
    officialRef: "PCEI-30-01 Block 2.4 - Q-Function",
    tags: ["q-function", "action-value", "q-learning"]
  },
  {
    id: "pcei-2-071",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Q-Learning",
    difficulty: "Intermediate",
    question: "What kind of Reinforcement Learning algorithm is classical 'Q-Learning'?",
    codeSnippet: "# Q-Learning characteristics:\n# Model-free (does not need environment transition dynamics)\n# Off-policy (learns optimal Q* while following exploratory epsilon-greedy behavior)",
    options: [
      "A model-free, off-policy Temporal Difference algorithm that learns optimal action-values without knowing environment transition dynamics",
      "A supervised classification algorithm that requires labeled training images",
      "An unsupervised clustering algorithm that groups tabular CSV files",
      "A hardware diagnostic tool used to test GPU memory bandwidth"
    ],
    correctAnswer: 0,
    explanation: "Q-Learning is model-free (learns without an explicit model of transition probabilities) and off-policy (learns optimal target action-values while following an exploratory epsilon-greedy behavior policy).",
    officialRef: "PCEI-30-01 Block 2.4 - Q-Learning",
    tags: ["q-learning", "model-free", "off-policy"]
  },
  {
    id: "pcei-2-072",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Bellman Equation",
    difficulty: "Advanced",
    question: "What fundamental mathematical equation expresses the recursive relationship between the value of a state and the values of its successor states?",
    codeSnippet: "# Bellman Equation for V(s):\n# V(s) = sum_a pi(a|s) sum_{s',r} p(s',r|s,a) [r + gamma * V(s')]",
    options: [
      "The Bellman Equation",
      "The Navier-Stokes Equation",
      "Schr\u00f6dinger's Wave Equation",
      "The Pythagorean Theorem"
    ],
    correctAnswer: 0,
    explanation: "The Bellman Equation decomposes value functions into two parts: the immediate reward plus the discounted expected value of the next state, enabling dynamic programming and temporal difference learning.",
    officialRef: "PCEI-30-01 Block 2.4 - Bellman Equation",
    tags: ["bellman-equation", "recursion", "dynamic-programming"]
  },
  {
    id: "pcei-2-073",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Deep Q-Networks",
    difficulty: "Intermediate",
    question: "What breakthrough allowed Deep Q-Networks (DQN, e.g., DeepMind's Atari player) to master video games with vast visual state spaces?",
    codeSnippet: "# Deep Q-Network:\n# Replacing tabular Q-table with a deep convolutional neural network that approximates Q(s, a; theta)\nQ_values = dqn_network(screen_pixels)",
    options: [
      "Replacing the discrete tabular Q-table with a deep neural network function approximator to estimate Q-values from raw pixel inputs",
      "Connecting the computer to a faster mechanical keyboard",
      "Writing the game emulator in assembly language instead of C",
      "Manually hardcoding optimal keystrokes for every single game level"
    ],
    correctAnswer: 0,
    explanation: "Tabular Q-learning fails when state spaces are vast or continuous. Deep Q-Networks (DQN) use deep convolutional neural networks as function approximators, predicting Q-values directly from raw screen pixels.",
    officialRef: "PCEI-30-01 Block 2.4 - DQN",
    tags: ["dqn", "deep-q-network", "function-approximation"]
  },
  {
    id: "pcei-2-074",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Experience Replay",
    difficulty: "Advanced",
    question: "Why is 'Experience Replay' (storing transitions in a buffer and sampling random mini-batches) essential in training Deep Q-Networks?",
    codeSnippet: "# Experience replay buffer:\nreplay_buffer.append((state, action, reward, next_state, done))\n# Sampling breaks temporal correlation between consecutive video frames\nbatch = random.sample(replay_buffer, 32)",
    options: [
      "It breaks temporal correlations between consecutive experience frames and provides independently distributed training samples for gradient descent",
      "It records high-definition gameplay videos to upload to YouTube",
      "It prevents game controllers from running out of battery charge",
      "It eliminates the need to use loss functions during backpropagation"
    ],
    correctAnswer: 0,
    explanation: "Sequential game frames are highly correlated, violating the independent and identically distributed (i.i.d.) assumption of gradient descent. Experience replay samples random past transitions, stabilizing training.",
    officialRef: "PCEI-30-01 Block 2.4 - Experience Replay",
    tags: ["experience-replay", "dqn", "stability"]
  },
  {
    id: "pcei-2-075",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Reward Shaping",
    difficulty: "Intermediate",
    question: "What is 'Reward Shaping' in Reinforcement Learning system design?",
    codeSnippet: "# Reward shaping:\n# Modifying the reward function to provide intermediate guidance bonuses rather than sparse terminal rewards\nshaped_reward = base_reward + distance_to_goal_reduction",
    options: [
      "Designing supplemental intermediate reward signals to guide the agent toward the goal more efficiently in sparse-reward environments",
      "Physically carving plastic trophies to present to algorithm designers",
      "Rounding floating-point rewards to the nearest dollar amount",
      "Converting negative penalties into positive rewards to improve agent morale"
    ],
    correctAnswer: 0,
    explanation: "In sparse-reward environments (like a maze where reward is 0 until exit), agents struggle to stumble upon success. Reward shaping injects intermediate hints or progress milestones to accelerate learning.",
    officialRef: "PCEI-30-01 Block 2.4 - Reward Shaping",
    tags: ["reward-shaping", "sparse-rewards", "engineering"]
  },
  {
    id: "pcei-2-076",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Reward Hacking",
    difficulty: "Intermediate",
    question: "What dangerous phenomenon occurs when an RL agent engages in 'Reward Hacking' (Specification Gaming)?",
    codeSnippet: "# Reward hacking example:\n# Boat racing game agent finds a loop where it can crash repeatedly and farm bonus points without finishing the race!",
    options: [
      "The agent exploits a flaw in the reward function to maximize its numerical score in an unintended, dysfunctional, or bizarre manner without solving the actual problem",
      "A hacker breaches the cloud server and alters the database balance",
      "The computer processor overheats due to infinite while loops",
      "The agent refuses to execute the game emulator application"
    ],
    correctAnswer: 0,
    explanation: "Reward hacking occurs when an agent exploits loopholes in a poorly specified reward function (e.g., driving in circles to accumulate score points indefinitely rather than finishing the race), illustrating that agents do what we reward, not what we intend.",
    officialRef: "PCEI-30-01 Block 2.4 - Reward Hacking",
    tags: ["reward-hacking", "alignment", "specification-gaming"]
  },
  {
    id: "pcei-2-077",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Actor-Critic",
    difficulty: "Advanced",
    question: "In Actor-Critic reinforcement learning architectures, what are the distinct roles of the 'Actor' and the 'Critic'?",
    codeSnippet: "# Actor-Critic roles:\n# Actor: Updates policy weights pi(a|s) to select actions\n# Critic: Evaluates how good the action was using value function V(s)",
    options: [
      "The Actor proposes actions by updating the policy; the Critic evaluates those actions by computing value baselines to adjust policy updates",
      "The Actor records audio voiceover, while the Critic writes newspaper movie reviews",
      "The Actor compiles the Python code, while the Critic runs unit tests",
      "The Actor runs on GPU hardware, while the Critic runs on mechanical hard drives"
    ],
    correctAnswer: 0,
    explanation: "Actor-Critic methods combine policy and value learning: the Actor controls agent behavior by learning policy parameters, while the Critic estimates value functions to critique the Actor's choices and guide improvements.",
    officialRef: "PCEI-30-01 Block 2.4 - Actor-Critic",
    tags: ["actor-critic", "policy-gradient", "value-function"]
  },
  {
    id: "pcei-2-078",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Model-Based vs Model-Free RL",
    difficulty: "Intermediate",
    question: "What distinguishes 'Model-Based RL' from 'Model-Free RL'?",
    codeSnippet: "# Model-Based: Agent learns/uses internal model of environment dynamics P(s'|s, a) to plan ahead\n# Model-Free: Agent learns policy or Q-values directly from trial-and-error experience without modeling transition physics",
    options: [
      "Model-based RL learns or possesses an internal predictive model of environment state transitions to simulate and plan actions; model-free RL learns directly from experience without a world model",
      "Model-based RL only runs on physical robots, while model-free RL only runs on software",
      "Model-free RL requires zero lines of Python code",
      "Model-based RL cannot calculate discounted cumulative returns"
    ],
    correctAnswer: 0,
    explanation: "Model-free RL (like Q-learning) maps states to values/actions purely by trial-and-error. Model-based RL builds an internal simulator of environment dynamics, allowing the agent to deliberate, simulate, and plan future trajectories.",
    officialRef: "PCEI-30-01 Block 2.4 - Model-Based vs Model-Free",
    tags: ["model-based-rl", "model-free-rl", "planning"]
  },
  {
    id: "pcei-2-079",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "Credit Assignment Problem",
    difficulty: "Advanced",
    question: "What is the 'Credit Assignment Problem' in Reinforcement Learning?",
    codeSnippet: "# Credit assignment challenge:\n# In a game of 100 moves, the agent wins at move 100\n# Which specific moves among the 100 were responsible for the eventual victory?",
    options: [
      "The difficulty of determining which specific past action(s) in a long sequence was actually responsible for an eventual delayed reward or failure",
      "The process of verifying an applicant's credit score for a home loan approval",
      "The challenge of tracking electrical power costs across multiple cloud data centers",
      "The allocation of copyright royalties to open-source software contributors"
    ],
    correctAnswer: 0,
    explanation: "When rewards are delayed (e.g., winning a game of chess after 50 moves), temporal credit assignment is the fundamental challenge of figuring out which particular moves contributed to victory and which were suboptimal.",
    officialRef: "PCEI-30-01 Block 2.4 - Credit Assignment",
    tags: ["credit-assignment", "delayed-rewards", "rl-theory"]
  },
  {
    id: "pcei-2-080",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.4",
    category: "RLHF",
    difficulty: "Intermediate",
    question: "What is 'Reinforcement Learning from Human Feedback' (RLHF) used for in training modern LLMs?",
    codeSnippet: "# RLHF alignment workflow:\n# 1. Human annotators rank model responses\n# 2. Train reward model on preferences\n# 3. Optimize LLM policy via PPO against reward model",
    options: [
      "Aligning foundation language models with human preferences, helpfulness, and safety by fine-tuning with a reward model trained on human comparison rankings",
      "Teaching humanoid robots to perform gymnastics using physical safety ropes",
      "Manually proofreading every response generated by a chatbot before it is displayed",
      "Rewriting neural network kernels in the Rust programming language"
    ],
    correctAnswer: 0,
    explanation: "RLHF aligns LLMs with human expectations: human evaluators rank candidate outputs, a reward model learns these preferences, and reinforcement learning (PPO) fine-tunes the LLM to maximize the reward score.",
    officialRef: "PCEI-30-01 Block 2.4 - RLHF",
    tags: ["rlhf", "alignment", "llm-training"]
  },
  {
    id: "pcei-2-081",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "Train Test Split",
    difficulty: "Beginner",
    question: "Why must a dataset be split into distinct Training and Testing subsets before developing an ML model?",
    codeSnippet: "# Splitting dataset in scikit-learn:\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)",
    options: [
      "To evaluate how well the model generalizes to new, unseen data and detect memorization/overfitting",
      "To reduce the physical storage size of the dataset on disk",
      "Because scikit-learn functions throw an error if passed an unsplit dataset",
      "To encrypt the testing data against unauthorized employee access"
    ],
    correctAnswer: 0,
    explanation: "Evaluating a model on the same data it was trained on only measures rote memorization. Splitting out a hold-out test set provides an unbiased assessment of the model's true generalization performance on unseen inputs.",
    officialRef: "PCEI-30-01 Block 2.5 - Train Test Split",
    tags: ["train-test-split", "evaluation", "generalization"]
  },
  {
    id: "pcei-2-082",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "Validation Set",
    difficulty: "Intermediate",
    question: "In a three-way split (Train / Validation / Test), what is the specific role of the 'Validation Set'?",
    codeSnippet: "# Train/Val/Test roles:\n# Train: Fit model parameters (weights, biases)\n# Validation: Tune hyperparameters and select best model architecture\n# Test: Final unbiased evaluation of selected model",
    options: [
      "To tune model hyperparameters (like tree depth, learning rate) and select the best model architecture without contaminating the final test set",
      "To store corrupted data rows that could not be processed",
      "To train the initial weights of linear regression models",
      "To generate animated visual charts for non-technical stakeholders"
    ],
    correctAnswer: 0,
    explanation: "The validation set guides model selection and hyperparameter tuning (e.g., choosing max_depth or regularization strength). Keeping the test set untouched until the very end ensures the final evaluation remains strictly unbiased.",
    officialRef: "PCEI-30-01 Block 2.5 - Validation Set",
    tags: ["validation-set", "hyperparameter-tuning", "model-selection"]
  },
  {
    id: "pcei-2-083",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "Overfitting",
    difficulty: "Beginner",
    question: "What are the diagnostic symptoms of 'Overfitting' (High Variance)?",
    codeSnippet: "# Overfitting diagnostic:\n# Training Accuracy: 99.8%  (Near perfect on known data)\n# Test Accuracy:     64.2%  (Poor performance on unseen data)",
    options: [
      "Near-perfect performance on the training data combined with poor performance on unseen test data",
      "Poor performance on both the training data and the testing data",
      "The computer's central processing unit reaches 100\u00b0C temperature",
      "The model executes predictions in zero milliseconds"
    ],
    correctAnswer: 0,
    explanation: "Overfitting occurs when a model learns the detailed noise and random fluctuations in the training dataset rather than the general underlying signal, resulting in stellar training metrics but abysmal test metrics.",
    officialRef: "PCEI-30-01 Block 2.5 - Overfitting",
    tags: ["overfitting", "high-variance", "diagnostics"]
  },
  {
    id: "pcei-2-084",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "Underfitting",
    difficulty: "Beginner",
    question: "What are the diagnostic symptoms of 'Underfitting' (High Bias)?",
    codeSnippet: "# Underfitting diagnostic:\n# Training Accuracy: 58.0%  (Poor performance on training data)\n# Test Accuracy:     57.5%  (Poor performance on testing data)",
    options: [
      "Poor performance on the training data as well as on the testing data, indicating the model is too simple to capture the underlying pattern",
      "Near-perfect accuracy on test data with high error on training data",
      "A model that requires over 1 terabyte of memory to train",
      "A dataset that contains zero missing values"
    ],
    correctAnswer: 0,
    explanation: "Underfitting occurs when a model is overly simplistic (e.g., fitting a linear line to an obviously quadratic relationship) and cannot capture the fundamental structure of the data, performing poorly on both train and test sets.",
    officialRef: "PCEI-30-01 Block 2.5 - Underfitting",
    tags: ["underfitting", "high-bias", "diagnostics"]
  },
  {
    id: "pcei-2-085",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "Bias-Variance Tradeoff",
    difficulty: "Intermediate",
    question: "In machine learning theory, what is the 'Bias-Variance Tradeoff'?",
    codeSnippet: "# Total Error = Bias^2 + Variance + Irreducible Error\n# Simple models: High Bias, Low Variance\n# Complex models: Low Bias, High Variance",
    options: [
      "The tension between error introduced by oversimplifying assumptions (bias) and error introduced by sensitivity to small fluctuations in training data (variance)",
      "The trade-off between processor clock speed and hard disk capacity",
      "The balance between open-source software and proprietary software",
      "The tension between frontend web design and backend database indexing"
    ],
    correctAnswer: 0,
    explanation: "Total prediction error consists of Bias (underfitting due to overly simple models), Variance (overfitting due to over-sensitive models), and irreducible noise. Minimizing total error requires finding the optimal balance between model complexity and simplicity.",
    officialRef: "PCEI-30-01 Block 2.5 - Bias-Variance Tradeoff",
    tags: ["bias-variance", "model-complexity", "error-decomposition"]
  },
  {
    id: "pcei-2-086",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "K-Fold Cross-Validation",
    difficulty: "Intermediate",
    question: "How does K-Fold Cross-Validation work?",
    codeSnippet: "# K-Fold Cross-Validation:\n# Split data into K folds (e.g., K=5)\n# Train on K-1 folds, validate on 1 fold\n# Repeat K times and average the scores\nfrom sklearn.model_selection import cross_val_score\nscores = cross_val_score(model, X, y, cv=5)",
    options: [
      "The dataset is split into K equal folds; the model is trained on K-1 folds and evaluated on the remaining fold, repeating K times and averaging the performance scores",
      "The dataset is multiplied K times to artificially increase sample size",
      "The algorithm is trained on K different cloud hosting providers simultaneously",
      "The dataset is filtered to only include rows with K or more words"
    ],
    correctAnswer: 0,
    explanation: "K-Fold Cross-Validation divides data into K partitions. It trains K separate models, each using a different fold as validation and the rest for training. Averaging results provides a robust estimate of generalization and eliminates split bias.",
    officialRef: "PCEI-30-01 Block 2.5 - K-Fold Cross-Validation",
    tags: ["cross-validation", "k-fold", "robustness"]
  },
  {
    id: "pcei-2-087",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "Data Leakage",
    difficulty: "Intermediate",
    question: "What is 'Data Leakage' (Information Leakage) in a machine learning pipeline?",
    codeSnippet: "# Data leakage example:\n# Fitting a scaler on the ENTIRE dataset BEFORE splitting into train/test!\n# Test data statistics leak into training!",
    options: [
      "When information from outside the training dataset (such as target labels or test set distributions) inadvertently contaminates model training, creating deceptively optimistic evaluation scores",
      "When a physical water cooling pipe leaks onto server rack motherboards",
      "When an employee accidentally emails a customer spreadsheet to the wrong address",
      "When a hard drive loses magnetic charge over several years"
    ],
    correctAnswer: 0,
    explanation: "Data leakage occurs when information about the target or test distribution is accidentally introduced into the model during training (e.g., standardizing features using the full dataset before splitting), creating artificially inflated test scores that fail in production.",
    officialRef: "PCEI-30-01 Block 2.5 - Data Leakage",
    tags: ["data-leakage", "pipeline-integrity", "pitfalls"]
  },
  {
    id: "pcei-2-088",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "Confusion Matrix",
    difficulty: "Beginner",
    question: "What are the four fundamental outcomes in a binary classification Confusion Matrix?",
    codeSnippet: "# Confusion Matrix table:\n#                  Predicted Positive | Predicted Negative\n# Actual Positive: True Positive (TP) | False Negative (FN)\n# Actual Negative: False Positive (FP)| True Negative (TN)",
    options: [
      "True Positives (TP), False Positives (FP), True Negatives (TN), and False Negatives (FN)",
      "Mean, Median, Mode, and Standard Deviation",
      "Training Loss, Validation Loss, Epoch, and Learning Rate",
      "Alpha, Beta, Gamma, and Delta"
    ],
    correctAnswer: 0,
    explanation: "A confusion matrix summarizes classification results across four quadrants: True Positive (correct positive), False Positive (Type I error), True Negative (correct negative), and False Negative (Type II error).",
    officialRef: "PCEI-30-01 Block 2.5 - Confusion Matrix",
    tags: ["confusion-matrix", "tp-fp-tn-fn", "classification-metrics"]
  },
  {
    id: "pcei-2-089",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "Accuracy Metric",
    difficulty: "Beginner",
    question: "What is the mathematical formula for classification 'Accuracy'?",
    codeSnippet: "# Accuracy formula:\naccuracy = (TP + TN) / (TP + TN + FP + FN)",
    options: [
      "(TP + TN) / (TP + TN + FP + FN)",
      "TP / (TP + FP)",
      "TP / (TP + FN)",
      "(2 * Precision * Recall) / (Precision + Recall)"
    ],
    correctAnswer: 0,
    explanation: "Accuracy measures the proportion of total predictions that were correct: (True Positives + True Negatives) divided by the total number of evaluated samples.",
    officialRef: "PCEI-30-01 Block 2.5 - Accuracy",
    tags: ["accuracy", "metrics", "formula"]
  },
  {
    id: "pcei-2-090",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "Accuracy Paradox",
    difficulty: "Intermediate",
    question: "Why is Accuracy a misleading and dangerous metric for evaluating models on highly imbalanced datasets (e.g., credit card fraud where 99.9% of transactions are legitimate)?",
    codeSnippet: "# Accuracy paradox:\n# If 999 transactions are legitimate and 1 is fraud:\n# A dumb model predicting 'Legitimate' 100% of the time gets 99.9% accuracy, but catches ZERO fraud!",
    options: [
      "A naive model that always predicts the majority class will achieve deceptively high accuracy while failing to detect any instances of the critical minority class",
      "Accuracy can only be computed if the dataset has an odd number of rows",
      "Accuracy calculations consume too much CPU processing power on imbalanced data",
      "Accuracy is mathematically restricted to values between 50% and 75%"
    ],
    correctAnswer: 0,
    explanation: "The Accuracy Paradox shows that on imbalanced data (e.g., 99% negative, 1% positive), a trivial model predicting 'negative' for every sample scores 99% accuracy while being completely useless for detecting positives.",
    officialRef: "PCEI-30-01 Block 2.5 - Accuracy Paradox",
    tags: ["accuracy-paradox", "class-imbalance", "metrics"]
  },
  {
    id: "pcei-2-091",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "Precision",
    difficulty: "Intermediate",
    question: "What does the 'Precision' metric measure in classification, and what is its formula?",
    codeSnippet: "# Precision formula:\n# Out of all points PREDICTED as positive, how many were ACTUALLY positive?\nprecision = TP / (TP + FP)",
    options: [
      "The proportion of predicted positives that were truly positive: TP / (TP + FP)",
      "The proportion of actual positives that were correctly captured: TP / (TP + FN)",
      "The total number of samples processed per second",
      "The ratio of true negatives to false positives"
    ],
    correctAnswer: 0,
    explanation: "Precision answers: 'Of all instances the model labeled positive, how many were correct?' Formula: TP / (TP + FP). High precision is critical when False Positives are costly (e.g., spam filter moving important emails to junk).",
    officialRef: "PCEI-30-01 Block 2.5 - Precision",
    tags: ["precision", "false-positives", "metrics"]
  },
  {
    id: "pcei-2-092",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "Recall",
    difficulty: "Intermediate",
    question: "What does 'Recall' (Sensitivity / True Positive Rate) measure in classification, and what is its formula?",
    codeSnippet: "# Recall formula:\n# Out of all ACTUALLY positive points, how many did the model CATCH?\nrecall = TP / (TP + FN)",
    options: [
      "The proportion of actual real-world positive cases that the model successfully identified: TP / (TP + FN)",
      "The proportion of predicted positives that were correct: TP / (TP + FP)",
      "The percentage of memory cleared after garbage collection",
      "The speed of downloading training batches from cloud storage"
    ],
    correctAnswer: 0,
    explanation: "Recall (Sensitivity) answers: 'Of all actual positive instances in the data, how many did the model find?' Formula: TP / (TP + FN). High recall is essential when False Negatives are dangerous (e.g., cancer detection).",
    officialRef: "PCEI-30-01 Block 2.5 - Recall",
    tags: ["recall", "sensitivity", "false-negatives"]
  },
  {
    id: "pcei-2-093",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "F1 Score",
    difficulty: "Intermediate",
    question: "What is the 'F1-Score' and why is it preferred over accuracy on imbalanced datasets?",
    codeSnippet: "# F1-Score formula (Harmonic mean of Precision and Recall):\nf1 = 2 * (precision * recall) / (precision + recall)",
    options: [
      "The harmonic mean of Precision and Recall, providing a balanced evaluation metric that severely penalizes models with poor precision or poor recall",
      "The arithmetic sum of True Positives and False Positives",
      "The ratio of the first principal component to the second principal component",
      "The number of features divided by the number of tree splits"
    ],
    correctAnswer: 0,
    explanation: "The F1-score is the harmonic mean of Precision and Recall: 2 * (P * R) / (P + R). The harmonic mean penalizes extreme imbalances, ensuring that an F1 score is high only if both Precision and Recall are strong.",
    officialRef: "PCEI-30-01 Block 2.5 - F1 Score",
    tags: ["f1-score", "harmonic-mean", "imbalance"]
  },
  {
    id: "pcei-2-094",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "Type I vs Type II Errors",
    difficulty: "Intermediate",
    question: "What is the statistical distinction between a 'Type I Error' and a 'Type II Error'?",
    codeSnippet: "# Type I Error: False Positive (FP) -> Model alarms when nothing is there\n# Type II Error: False Negative (FN) -> Model misses an actual event",
    options: [
      "A Type I Error is a False Positive (false alarm); a Type II Error is a False Negative (missed detection)",
      "A Type I Error occurs in training; a Type II Error occurs in testing",
      "A Type I Error is a hardware fault; a Type II Error is a software bug",
      "A Type I Error affects text files; a Type II Error affects image files"
    ],
    correctAnswer: 0,
    explanation: "In hypothesis testing and ML: Type I Error = False Positive (rejecting a true null hypothesis, e.g., convicting an innocent person); Type II Error = False Negative (failing to reject false null, e.g., acquitting a guilty person).",
    officialRef: "PCEI-30-01 Block 2.5 - Type I vs Type II",
    tags: ["type-i", "type-ii", "errors"]
  },
  {
    id: "pcei-2-095",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "ROC Curve",
    difficulty: "Intermediate",
    question: "What does a Receiver Operating Characteristic (ROC) curve plot?",
    codeSnippet: "# ROC curve plotting:\n# True Positive Rate (Recall) on Y-axis vs False Positive Rate (1 - Specificity) on X-axis\nfrom sklearn.metrics import roc_curve\nfpr, tpr, thresholds = roc_curve(y_test, y_probs)",
    options: [
      "True Positive Rate (Recall) on the Y-axis against False Positive Rate on the X-axis across all possible classification decision thresholds",
      "Training Loss on the Y-axis against Epoch Number on the X-axis",
      "CPU Clock Frequency on the Y-axis against Memory Bandwidth on the X-axis",
      "Feature Importance on the Y-axis against Tree Depth on the X-axis"
    ],
    correctAnswer: 0,
    explanation: "The ROC curve visualizes a binary classifier's diagnostic trade-off by plotting True Positive Rate (Sensitivity) vs False Positive Rate (1 - Specificity) across every threshold setting from 0.0 to 1.0.",
    officialRef: "PCEI-30-01 Block 2.5 - ROC Curve",
    tags: ["roc-curve", "tpr", "fpr"]
  },
  {
    id: "pcei-2-096",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "ROC-AUC",
    difficulty: "Intermediate",
    question: "What does the Area Under the ROC Curve (ROC-AUC) score measure, and what does a score of 0.5 represent?",
    codeSnippet: "# ROC-AUC interpretation:\n# 1.0: Perfect discrimination\n# 0.5: No discrimination (equivalent to random guessing)\n# < 0.5: Worse than random (predictions are inverted)",
    options: [
      "The probability that the model ranks a randomly chosen positive instance higher than a randomly chosen negative instance; 0.5 indicates random guessing performance",
      "The physical surface area of the graphics processing unit; 0.5 indicates 50 square centimeters",
      "The ratio of missing values in the testing split; 0.5 indicates half of rows are null",
      "The percentage of code lines covered by unit tests"
    ],
    correctAnswer: 0,
    explanation: "ROC-AUC evaluates ranking ability independent of threshold. A score of 1.0 indicates perfect class separation; 0.5 means the classifier has zero discriminative ability (no better than random flipping of a fair coin).",
    officialRef: "PCEI-30-01 Block 2.5 - ROC-AUC",
    tags: ["roc-auc", "discrimination", "ranking"]
  },
  {
    id: "pcei-2-097",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "Mean Squared Error",
    difficulty: "Beginner",
    question: "What is the mathematical formula for Mean Squared Error (MSE) in regression model evaluation?",
    codeSnippet: "# MSE formula:\nmse = sum((y_actual - y_pred)**2 for y_actual, y_pred in zip(y_true, y_pred)) / len(y_true)",
    options: [
      "The average of the squared differences between predicted values and actual target values",
      "The average of the absolute differences without squaring",
      "The maximum difference between any two predictions",
      "The percentage of predictions that match exactly to four decimal places"
    ],
    correctAnswer: 0,
    explanation: "MSE calculates the mean of squared residuals: (1/n) * \u03a3(y_true - y_pred)^2. Squaring penalizes large errors much more severely than small errors and prevents positive and negative errors from canceling each other out.",
    officialRef: "PCEI-30-01 Block 2.5 - MSE",
    tags: ["mse", "regression-metrics", "residuals"]
  },
  {
    id: "pcei-2-098",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "RMSE vs MAE",
    difficulty: "Intermediate",
    question: "Why is Root Mean Squared Error (RMSE) often preferred over Mean Absolute Error (MAE) when large prediction errors are especially dangerous?",
    codeSnippet: "# RMSE penalizes large outliers heavily due to squaring:\n# Error = 10 -> Squared = 100\n# Error = 2  -> Squared = 4",
    options: [
      "RMSE squares the errors before averaging, which disproportionately penalizes large outlier errors compared to MAE",
      "RMSE cannot be calculated on negative numbers",
      "MAE is 1,000 times slower to calculate on modern CPUs",
      "RMSE eliminates the need to calculate square roots"
    ],
    correctAnswer: 0,
    explanation: "Because RMSE squares errors before taking the root, large deviations produce outsized penalties. If being off by 10 units is more than five times worse than being off by 2 units, RMSE is the metric of choice.",
    officialRef: "PCEI-30-01 Block 2.5 - RMSE vs MAE",
    tags: ["rmse", "mae", "error-metrics"]
  },
  {
    id: "pcei-2-099",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "R-Squared",
    difficulty: "Intermediate",
    question: "What does the R-squared (Coefficient of Determination) metric signify in regression analysis?",
    codeSnippet: "# R^2 formula: 1 - (SS_res / SS_tot)\n# Proportion of total target variance explained by the regression model",
    options: [
      "The proportion of variance in the target variable that is predictable from the independent input features",
      "The radius of the circular scatter plot boundary",
      "The correlation between the model filename and the dataset name",
      "The percentage of rows that contain zero missing values"
    ],
    correctAnswer: 0,
    explanation: "R\u00b2 (Coefficient of Determination) measures the proportion of variance in the dependent variable explained by the model: 1.0 means the model explains 100% of variance; 0.0 means the model performs no better than predicting the mean.",
    officialRef: "PCEI-30-01 Block 2.5 - R-Squared",
    tags: ["r-squared", "coefficient-of-determination", "variance-explained"]
  },
  {
    id: "pcei-2-100",
    track: 'pcei',
    section: "Section 2",
    chapter: "2.5",
    category: "Regularization",
    difficulty: "Intermediate",
    question: "How do L1 Regularization (Lasso) and L2 Regularization (Ridge) prevent overfitting in linear models?",
    codeSnippet: "# Regularized loss functions:\n# Ridge (L2): Loss + lambda * sum(w_i ** 2)      -> Shrinks weights towards zero\n# Lasso (L1): Loss + lambda * sum(abs(w_i))     -> Shrinks weights to exact zero (feature selection)",
    options: [
      "By adding a mathematical penalty on the magnitude of the model coefficients (weights) to the loss function, discouraging overly complex models",
      "By deleting half of the columns randomly before every prediction",
      "By increasing the learning rate to infinity",
      "By forcing all weights to be positive prime numbers"
    ],
    correctAnswer: 0,
    explanation: "Regularization penalizes large model weights during optimization: L2 (Ridge) penalizes squared weights (shrinking them smoothly), while L1 (Lasso) penalizes absolute weights, driving irrelevant feature weights to exact zero.",
    officialRef: "PCEI-30-01 Block 2.5 - Regularization",
    tags: ["regularization", "lasso", "ridge"]
  }
];
