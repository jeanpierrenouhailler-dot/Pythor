import { Flashcard } from '../types';

export const pceiSection1CardsPart2: Flashcard[] = [
  {
    id: "pcei-1-051",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Inference Rules",
    difficulty: "Intermediate",
    question: "What classic logical inference rule states: 'If P is True, and P implies Q is True, then Q must be True'?",
    codeSnippet: "# Modus Ponens:\n# Premise 1: P\n# Premise 2: P -> Q\n# Conclusion: Q",
    options: [
      "Modus Ponens",
      "Modus Tollens",
      "Reductio ad Absurdum",
      "Affirming the Consequent"
    ],
    correctAnswer: 0,
    explanation: "Modus Ponens (Latin for 'method of affirming') is a fundamental rule of inference: from 'P' and 'P -> Q', one directly infers 'Q'.",
    officialRef: "PCEI-30-01 Block 1.3 - Modus Ponens",
    tags: ["inference", "modus-ponens", "logic"]
  },
  {
    id: "pcei-1-052",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Backward Chaining",
    difficulty: "Intermediate",
    question: "In which practical scenario is 'Backward Chaining' preferred over 'Forward Chaining' in an expert diagnostic system?",
    codeSnippet: "# Backward chaining (Goal-driven):\n# Goal: 'Does patient have condition X?'\n# Look for rules that conclude X, then check their preconditions",
    options: [
      "When the system needs to verify or refute a specific known hypothesis or goal",
      "When all sensor data is streaming in with zero initial goals",
      "When computing the inverse of a mathematical matrix",
      "When rendering 3D graphics polygons onto a screen"
    ],
    correctAnswer: 0,
    explanation: "Backward chaining is goal-driven: it starts with a specific hypothesis (e.g., 'Does the patient have Diabetes?') and works backward, querying only relevant facts needed to confirm or deny that goal.",
    officialRef: "PCEI-30-01 Block 1.3 - Backward Chaining",
    tags: ["backward-chaining", "goal-driven", "diagnostics"]
  },
  {
    id: "pcei-1-053",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Conflict Resolution",
    difficulty: "Intermediate",
    question: "In an expert system where multiple IF-THEN rules are triggered simultaneously, what mechanism determines which rule fires first?",
    codeSnippet: "# Rule engine conflict resolution:\nrules = [{'id': 'R1', 'priority': 10}, {'id': 'R2', 'priority': 25}]\n# Conflict resolution strategy picks highest priority rule",
    options: [
      "Conflict resolution strategy (e.g., specificity, recency, or rule priority weights)",
      "Random operating system thread crash",
      "The rule with the longest filename in the directory",
      "Automatic deletion of all contradictory rules"
    ],
    correctAnswer: 0,
    explanation: "Conflict resolution strategies (such as highest assigned priority, most specific condition, or most recently updated facts) resolve ambiguities when multiple rules match the current working memory.",
    officialRef: "PCEI-30-01 Block 1.3 - Conflict Resolution",
    tags: ["conflict-resolution", "expert-systems", "inference"]
  },
  {
    id: "pcei-1-054",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "State Space",
    difficulty: "Beginner",
    question: "In AI problem formulation, what constitutes the 'State Space'?",
    codeSnippet: "# State space representation:\n# Set of all possible states reachable from initial state by any sequence of actions",
    options: [
      "The physical dimensions of the computer's CPU casing",
      "The set of all possible configurations or states reachable from the initial state through valid actions",
      "The amount of unused disk space on a hard drive",
      "The country in which the data center is legally located"
    ],
    correctAnswer: 1,
    explanation: "The state space is the complete mathematical configuration space representing all possible states of a problem reachable from the start state via valid action sequences.",
    officialRef: "PCEI-30-01 Block 1.3 - State Space",
    tags: ["state-space", "search", "problem-formulation"]
  },
  {
    id: "pcei-1-055",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Uniform Cost Search",
    difficulty: "Intermediate",
    question: "How does Uniform Cost Search (Dijkstra's algorithm variant) select which node to expand next?",
    codeSnippet: "# Priority queue ordered by cumulative path cost g(n):\nimport heapq\nfrontier = []\nheapq.heappush(frontier, (cost, node))",
    options: [
      "It expands the unexpanded node with the lowest cumulative path cost g(n) from the start node",
      "It expands nodes strictly in alphabetical order of their labels",
      "It randomly chooses a node without regard to cost",
      "It selects the node that is farthest away from the start"
    ],
    correctAnswer: 0,
    explanation: "Uniform Cost Search uses a priority queue ordered by cumulative path cost g(n). It always expands the node with the minimum accumulated cost, guaranteeing the optimal path for non-negative edge costs.",
    officialRef: "PCEI-30-01 Block 1.3 - Uniform Cost Search",
    tags: ["uniform-cost-search", "dijkstra", "path-cost"]
  },
  {
    id: "pcei-1-056",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Local Search",
    difficulty: "Intermediate",
    question: "What is the defining characteristic of 'Local Search' algorithms like Hill Climbing or Simulated Annealing?",
    codeSnippet: "# Hill climbing:\ncurrent = initial_state\nwhile True:\n    neighbor = best_neighbor(current)\n    if value(neighbor) <= value(current):\n        break  # Local optimum reached\n    current = neighbor",
    options: [
      "They operate on a single current state and move to neighboring states, requiring very little memory without storing a search tree",
      "They always guarantee finding the global optimum in infinite search spaces",
      "They store the entire path history from start to goal in RAM",
      "They can only run on local Ethernet networks"
    ],
    correctAnswer: 0,
    explanation: "Local search algorithms (e.g., hill climbing, simulated annealing, genetic algorithms) evaluate neighboring states from a current state, using minimal memory because they do not retain a full search tree.",
    officialRef: "PCEI-30-01 Block 1.3 - Local Search",
    tags: ["local-search", "hill-climbing", "optimization"]
  },
  {
    id: "pcei-1-057",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Local Maxima",
    difficulty: "Intermediate",
    question: "What common pitfall affects the basic greedy 'Hill Climbing' search algorithm?",
    codeSnippet: "# Getting trapped in local optima:\n# Neighbor values are all lower, but global maximum is higher on another hill",
    options: [
      "It can easily get stuck in local maxima, plateaus, or ridges, failing to reach the global optimum",
      "It uses too much memory and crashes the computer's operating system",
      "It can only solve problems with negative numbers",
      "It reverses the direction of all network packets"
    ],
    correctAnswer: 0,
    explanation: "Hill climbing is a greedy local search. If it reaches a state where all immediate neighbors have lower values (a local maximum), it terminates prematurely, missing higher global peaks.",
    officialRef: "PCEI-30-01 Block 1.3 - Hill Climbing",
    tags: ["hill-climbing", "local-maxima", "optimization"]
  },
  {
    id: "pcei-1-058",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Constraint Satisfaction",
    difficulty: "Intermediate",
    question: "Sudoku puzzles, map coloring, and automated university timetable scheduling are classic examples of which AI problem formulation?",
    codeSnippet: "# CSP formulation:\n# Variables (V), Domains (D), Constraints (C)\nvariables = ['Region1', 'Region2']\ndomains = {'Region1': ['Red', 'Green', 'Blue']}\nconstraints = [('Region1', '!=', 'Region2')]",
    options: [
      "Constraint Satisfaction Problems (CSPs)",
      "Generative Adversarial Networks",
      "Recurrent Neural Language Modeling",
      "Unsupervised Centroid Clustering"
    ],
    correctAnswer: 0,
    explanation: "A Constraint Satisfaction Problem (CSP) represents a problem as a set of variables, each with a domain of possible values, and a set of constraints restricting which value combinations are valid.",
    officialRef: "PCEI-30-01 Block 1.3 - CSP",
    tags: ["csp", "constraints", "problem-solving"]
  },
  {
    id: "pcei-1-059",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Knowledge Graphs",
    difficulty: "Beginner",
    question: "What is a 'Knowledge Graph' in modern AI systems (such as those used by Google or enterprise search)?",
    codeSnippet: "# Knowledge Graph Triple: (Subject, Predicate, Object)\ntriple = ('Python', 'created_by', 'Guido van Rossum')",
    options: [
      "A network of interconnected real-world entities, concepts, and relationships stored as RDF triples or graph databases",
      "A line chart displaying CPU utilization over 24 hours",
      "A matrix of random numbers used for encrypting files",
      "A diagram showing company office floor plans"
    ],
    correctAnswer: 0,
    explanation: "A knowledge graph organizes structured information about real-world entities (people, places, things) and their semantic connections, typically represented as subject-predicate-object triples.",
    officialRef: "PCEI-30-01 Block 1.3 - Knowledge Graphs",
    tags: ["knowledge-graphs", "triples", "semantic-web"]
  },
  {
    id: "pcei-1-060",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Non-Monotonic Logic",
    difficulty: "Advanced",
    question: "What is the key property of 'Non-Monotonic Logic' in artificial intelligence?",
    codeSnippet: "# Non-monotonic reasoning:\n# Fact 1: Tweety is a bird -> Conclude: Tweety can fly\n# New Fact: Tweety is a penguin -> Retract: Tweety can fly",
    options: [
      "Adding new information can invalidate or retract previously deduced conclusions",
      "Conclusions once derived can never be modified or questioned under any circumstances",
      "The algorithm can only run on single-core processors",
      "All logical statements must be formatted as hexadecimal numbers"
    ],
    correctAnswer: 0,
    explanation: "In classical monotonic logic, adding new premises never invalidates existing theorems. Non-monotonic logic models real-world common-sense reasoning: new evidence can overturn default assumptions (e.g., learning Tweety is a penguin).",
    officialRef: "PCEI-30-01 Block 1.3 - Non-Monotonic Logic",
    tags: ["non-monotonic", "reasoning", "common-sense"]
  },
  {
    id: "pcei-1-061",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "AI Limitations",
    difficulty: "Beginner",
    question: "What is 'Moravec's Paradox' in artificial intelligence robotics?",
    codeSnippet: "# Moravec's Paradox observation:\n# Hard problems (chess, calculus) are easy for AI\n# Easy problems (walking, folding laundry, perception) are extremely difficult for AI",
    options: [
      "Tasks that are intellectually challenging for adult humans (like chess and logic) are relatively easy for AI, while tasks that are easy for human toddlers (like physical perception and mobility) are extraordinarily difficult for AI",
      "Computers become 50% slower every 18 months unless cooled with liquid helium",
      "Neural networks cannot learn arithmetic addition without floating point math coprocessors",
      "Software bugs increase in direct proportion to lines of Python code"
    ],
    correctAnswer: 0,
    explanation: "Moravec's Paradox observes that high-level reasoning requires very little computational power, but low-level sensorimotor skills honed by millions of years of biological evolution require enormous computation.",
    officialRef: "PCEI-30-01 Block 1.4 - Moravec's Paradox",
    tags: ["moravec-paradox", "limitations", "robotics"]
  },
  {
    id: "pcei-1-062",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Combinatorial Explosion",
    difficulty: "Intermediate",
    question: "What does 'Combinatorial Explosion' refer to in search and decision trees?",
    codeSnippet: "# Exponential branching:\n# Branching factor b=10, depth d=20 -> 10^20 states\nstates = 10 ** 20  # Infeasible to search exhaustively",
    options: [
      "The rapid exponential growth in possible states as problem size or depth increases, making brute-force search mathematically infeasible",
      "The physical explosion of lithium-ion batteries inside GPU chassis",
      "The corrupt compilation of Python virtual environment packages",
      "The duplication of rows inside a relational SQL database"
    ],
    correctAnswer: 0,
    explanation: "Combinatorial explosion occurs when the number of state combinations grows exponentially with problem parameters, rendering exhaustive or brute-force search impossible without heuristics or pruning.",
    officialRef: "PCEI-30-01 Block 1.4 - Combinatorial Explosion",
    tags: ["combinatorial-explosion", "search-complexity", "heuristics"]
  },
  {
    id: "pcei-1-063",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Brittleness of AI",
    difficulty: "Beginner",
    question: "What is meant by the 'Brittleness' of traditional AI systems?",
    codeSnippet: "# Brittleness example:\n# System works perfectly under exact conditions, but fails catastrophically on minor unexpected inputs\ninput_data = 'slightly altered format'\n# Model produces nonsense output or crashes",
    options: [
      "The tendency of an AI model to fail catastrophically when encountering inputs slightly outside its narrow training distribution or rule set",
      "The physical fragility of silicon processor dies during transport",
      "The vulnerability of hard disk platters to magnetic interference",
      "The inability of Python scripts to execute on Linux servers"
    ],
    correctAnswer: 0,
    explanation: "Brittleness describes how an AI system that performs remarkably well under familiar conditions can fail abruptly and spectacularly when presented with novel, atypical, or slightly modified inputs.",
    officialRef: "PCEI-30-01 Block 1.4 - AI Brittleness",
    tags: ["brittleness", "robustness", "generalization"]
  },
  {
    id: "pcei-1-064",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Hallucination vs Fact",
    difficulty: "Beginner",
    question: "In the context of modern generative language models, what is an AI 'Hallucination'?",
    codeSnippet: "# Hallucination illustration:\n# Prompt: 'Who won the 1845 lunar marathon?'\n# Response: 'Captain Arthur Vance won the 1845 lunar marathon in 2 hours.' (Plausible sounding, but completely fabricated)",
    options: [
      "A response generated by the model that is confident and fluent but factually incorrect or completely fabricated",
      "A visual optical illusion experienced by human data center technicians",
      "A hardware failure causing monitors to display randomized RGB static",
      "An intentional cryptographic signature generated by the operating system"
    ],
    correctAnswer: 0,
    explanation: "An AI hallucination occurs when a generative model outputs statements that sound authoritative and fluent but are factually baseless, invented, or contradicted by reality.",
    officialRef: "PCEI-30-01 Block 1.4 - Hallucination",
    tags: ["hallucination", "generative-ai", "accuracy"]
  },
  {
    id: "pcei-1-065",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Common Sense Reasoning",
    difficulty: "Intermediate",
    question: "Why is 'Common Sense Reasoning' one of the most challenging frontiers for artificial intelligence?",
    codeSnippet: "# Common sense facts humans take for granted:\n# - Water is wet\n# - Objects fall down when dropped\n# - You cannot push a rope",
    options: [
      "Common sense consists of millions of implicit, unwritten assumptions about the physical and social world that are rarely explicitly documented in training datasets",
      "Computers are strictly banned from storing everyday human language",
      "Common sense requires 1024-bit floating point arithmetic",
      "Python does not support string comparison operations"
    ],
    correctAnswer: 0,
    explanation: "Humans possess immense background knowledge about physics, biology, and human social norms gained through lived experience. AI models only see text/images and lack this implicit world model.",
    officialRef: "PCEI-30-01 Block 1.4 - Common Sense",
    tags: ["common-sense", "world-models", "reasoning"]
  },
  {
    id: "pcei-1-066",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Frame Problem",
    difficulty: "Advanced",
    question: "What is the classical 'Frame Problem' in AI philosophy and planning?",
    codeSnippet: "# The challenge of representing non-effects:\n# When you move a cup, the color of the wall does NOT change\n# How does an agent know what stays the same without checking every fact in the universe?",
    options: [
      "The challenge of representing and computing which aspects of the world remain unchanged after an action is taken",
      "The problem of formatting digital video frames into MP4 files",
      "The difficulty of mounting server racks into 19-inch metal frames",
      "The inability of HTML browsers to render iframe elements"
    ],
    correctAnswer: 0,
    explanation: "The Frame Problem deals with how to represent what does NOT change when an action occurs. In an dynamic world, explicitly stating that millions of unrelated facts remain unchanged quickly overwhelms reasoning systems.",
    officialRef: "PCEI-30-01 Block 1.4 - Frame Problem",
    tags: ["frame-problem", "planning", "philosophy"]
  },
  {
    id: "pcei-1-067",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Turing Test Limitations",
    difficulty: "Intermediate",
    question: "Why do many contemporary AI researchers consider the traditional Turing Test an inadequate benchmark for true machine intelligence?",
    codeSnippet: "# Critique of Turing Test:\n# Focuses on deception and conversational trickery rather than genuine problem-solving or reasoning",
    options: [
      "It tests whether a machine can deceive humans through conversational deception rather than measuring genuine comprehension, reasoning, or real-world problem-solving",
      "The test takes over 100 years to execute to completion",
      "The test requires all participants to speak ancient Latin",
      "The test cannot be run on computers connected to the Internet"
    ],
    correctAnswer: 0,
    explanation: "Chatbots can 'pass' or score well on conversational tests through evasion, deflection, and superficial mimicry without possessing genuine understanding, spatial awareness, or problem-solving capability.",
    officialRef: "PCEI-30-01 Block 1.4 - Turing Test Critique",
    tags: ["turing-test", "evaluation", "benchmarks"]
  },
  {
    id: "pcei-1-068",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Winograd Schema",
    difficulty: "Intermediate",
    question: "What is a 'Winograd Schema' used for in AI evaluation?",
    codeSnippet: "# Winograd Schema Challenge example:\n# 'The city councilmen refused the demonstrators a permit because they [feared/advocated] violence.'\n# Who does 'they' refer to?",
    options: [
      "A pair of sentences differing in only one or two words, requiring common-sense reasoning to resolve ambiguous pronoun references",
      "A database schema designed for storing high-dimensional vector embeddings",
      "A cryptographic hashing schema used in blockchain proof-of-work",
      "A visual flowchart tool for planning sprint deliverables"
    ],
    correctAnswer: 0,
    explanation: "The Winograd Schema Challenge tests an AI's comprehension and common-sense reasoning by presenting sentences where a pronoun's referent flips depending on a single changed word (which humans easily resolve).",
    officialRef: "PCEI-30-01 Block 1.4 - Winograd Schema",
    tags: ["winograd-schema", "common-sense", "pronoun-resolution"]
  },
  {
    id: "pcei-1-069",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Generalization",
    difficulty: "Beginner",
    question: "What does 'Generalization' mean when evaluating an artificial intelligence model?",
    codeSnippet: "# Generalization capability:\n# Model trained on Dataset A accurately predicts unseen samples in Dataset B\naccuracy_unseen = model.score(X_test, y_test)",
    options: [
      "The model's ability to perform accurately on new, previously unseen inputs that were not part of its training data",
      "The process of converting specific Python code into generic C++ code",
      "The capability of a server to host multiple virtual operating systems",
      "The deletion of all outlier records from a production database"
    ],
    correctAnswer: 0,
    explanation: "Generalization is the core objective of machine learning: rather than simply memorizing the training examples, the model must discover underlying rules that allow it to make accurate predictions on new data.",
    officialRef: "PCEI-30-01 Block 1.4 - Generalization",
    tags: ["generalization", "unseen-data", "overfitting"]
  },
  {
    id: "pcei-1-070",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Out-of-Distribution",
    difficulty: "Intermediate",
    question: "What happens when an AI model is given 'Out-of-Distribution' (OOD) data during real-world inference?",
    codeSnippet: "# Out-of-Distribution (OOD):\n# Training: Clean highway driving on sunny days\n# Inference: Heavy blizzard in dense urban construction zone",
    options: [
      "The model's predictions frequently degrade sharply and unpredictably because the inputs differ significantly from the data distribution it was trained on",
      "The computer hardware automatically doubles its clock frequency",
      "The model re-writes its own source code to fix the issue instantaneously",
      "The data is automatically converted into standard normal distributions"
    ],
    correctAnswer: 0,
    explanation: "Machine learning models assume test data shares the same statistical distribution as training data. When encountering Out-of-Distribution (OOD) inputs, model confidence remains deceptively high while accuracy collapses.",
    officialRef: "PCEI-30-01 Block 1.4 - OOD Data",
    tags: ["ood", "distribution-shift", "robustness"]
  },
  {
    id: "pcei-1-071",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Clever Hans Effect",
    difficulty: "Intermediate",
    question: "In machine learning evaluation, what is the 'Clever Hans Effect'?",
    codeSnippet: "# Clever Hans: Model relies on spurious shortcuts or background artifacts rather than intended concepts\n# E.g., classifying an image as a 'wolf' because there is snow in the background",
    options: [
      "A model appearing to perform an intelligent task while actually relying on unintended spurious correlations, shortcuts, or artifacts in the training data",
      "An algorithm that automatically solves horse racing handicaps",
      "A compression algorithm that reduces neural network file size by 90%",
      "An error where GPU cooling fans spin at maximum velocity"
    ],
    correctAnswer: 0,
    explanation: "Named after a horse that appeared to solve math by reading trainer body language, the Clever Hans effect occurs when an AI achieves high test scores by latching onto spurious background cues rather than true underlying concepts.",
    officialRef: "PCEI-30-01 Block 1.4 - Clever Hans Effect",
    tags: ["clever-hans", "spurious-correlation", "shortcuts"]
  },
  {
    id: "pcei-1-072",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Adversarial Examples",
    difficulty: "Advanced",
    question: "What is an 'Adversarial Example' in deep learning vision systems?",
    codeSnippet: "# Adversarial perturbation:\n# Adding imperceptible mathematical noise delta to an image:\nperturbed_image = original_image + epsilon * noise\n# Human sees panda; model predicts gibbon with 99.9% confidence",
    options: [
      "An input intentionally crafted with tiny, human-imperceptible perturbations designed to cause a machine learning model to make an erroneous prediction",
      "A unit test that fails because of a syntax error in Python",
      "An image file that is corrupted by bad sectors on a hard drive",
      "A sample that has been downsampled to 8x8 pixels"
    ],
    correctAnswer: 0,
    explanation: "Adversarial examples are carefully crafted inputs where subtle, calculated mathematical noise (invisible to human eyes) causes deep neural networks to misclassify objects with high confidence.",
    officialRef: "PCEI-30-01 Block 1.4 - Adversarial Examples",
    tags: ["adversarial-attacks", "perturbations", "robustness"]
  },
  {
    id: "pcei-1-073",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Compute Constraints",
    difficulty: "Beginner",
    question: "Why is computational resource availability (FLOPs, memory, power) a primary bottleneck in advancing frontier AI models?",
    codeSnippet: "# Training frontier models requires vast compute:\n# Compute = Operations/sec * Training duration * Number of GPUs",
    options: [
      "Training modern large-scale neural networks requires billions of calculations across thousands of specialized chips, costing millions of dollars in hardware and electricity",
      "Modern processors are not legally allowed to perform multiplication operations",
      "Operating systems can only execute code for a maximum of 60 minutes per day",
      "Python scripts cannot access more than 4 megabytes of system RAM"
    ],
    correctAnswer: 0,
    explanation: "Frontier models require enormous computational resources (measured in floating-point operations, or FLOPs) spanning thousands of interconnected GPUs/TPUs, making compute cost and energy availability critical bottlenecks.",
    officialRef: "PCEI-30-01 Block 1.4 - Compute Constraints",
    tags: ["compute", "flops", "hardware"]
  },
  {
    id: "pcei-1-074",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Data Hunger",
    difficulty: "Beginner",
    question: "Why are modern deep learning models often described as 'Data Hungry'?",
    codeSnippet: "# Data scaling requirements:\n# Unlike humans who can learn from 1-2 examples, deep models need millions of labeled instances",
    options: [
      "They require hundreds of thousands to billions of training examples to extract meaningful generalizable patterns across high-dimensional feature spaces",
      "They automatically delete training data after reading it once",
      "They cannot read files stored on solid-state drives",
      "They consume all available internet bandwidth downloading video games"
    ],
    correctAnswer: 0,
    explanation: "Unlike humans (who can learn concepts from one or two examples), statistical deep learning models require vast quantities of training data to tune millions or billions of parameters without overfitting.",
    officialRef: "PCEI-30-01 Block 1.4 - Data Requirements",
    tags: ["data-hunger", "sample-efficiency", "deep-learning"]
  },
  {
    id: "pcei-1-075",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Catastrophic Forgetting",
    difficulty: "Advanced",
    question: "What is 'Catastrophic Forgetting' in artificial neural networks?",
    codeSnippet: "# Catastrophic forgetting:\n# Model trains on Task A -> achieves 98% accuracy\n# Model then trains on Task B -> Task A accuracy collapses to 10%",
    options: [
      "When an artificial neural network trained on a new task completely loses its ability to perform previously learned tasks because weights are overwritten",
      "When an operating system fails to save an edited text file before rebooting",
      "When a hard disk drive loses data due to magnetic degradation",
      "When a programmer forgets their account password"
    ],
    correctAnswer: 0,
    explanation: "Catastrophic forgetting occurs when a neural network trained sequentially on new tasks overwrites the synaptic weights supporting older tasks, abruptly losing its previously mastered capabilities.",
    officialRef: "PCEI-30-01 Block 1.4 - Catastrophic Forgetting",
    tags: ["catastrophic-forgetting", "continual-learning", "neural-networks"]
  },
  {
    id: "pcei-1-076",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Stochastic Parrot",
    difficulty: "Intermediate",
    question: "In the critique of large language models, what does the metaphor of a 'Stochastic Parrot' suggest?",
    codeSnippet: "# Stochastic Parrot metaphor:\n# The model probabilistically stitches together linguistic patterns without understanding meaning or intent",
    options: [
      "The model stitches together sequences of linguistic forms observed in vast training data according to probabilistic correlations, without communicative intent or true semantic understanding",
      "The model can only repeat phrases spoken by pet birds in laboratory cages",
      "The model was developed entirely using audio recording equipment",
      "The model only works when deployed on Amazon Web Services"
    ],
    correctAnswer: 0,
    explanation: "The 'Stochastic Parrot' metaphor (coined by Bender et al.) critiques the assumption that LLMs understand text, arguing they merely recombine linguistic patterns probabilistically based on statistical correlations in text.",
    officialRef: "PCEI-30-01 Block 1.4 - Stochastic Parrot",
    tags: ["stochastic-parrot", "critique", "llm-capabilities"]
  },
  {
    id: "pcei-1-077",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Sample Efficiency",
    difficulty: "Intermediate",
    question: "What does 'Sample Efficiency' measure in machine learning algorithms?",
    codeSnippet: "# Sample efficiency comparison:\n# Algorithm A needs 100 examples to reach 90% accuracy\n# Algorithm B needs 1,000,000 examples to reach 90% accuracy -> A has higher sample efficiency",
    options: [
      "How much training data an algorithm requires to achieve a specific level of task performance",
      "How fast an analog-to-digital audio converter samples sound waves",
      "The number of CPU cache hits during database queries",
      "The file compression ratio achieved on tabular CSV datasets"
    ],
    correctAnswer: 0,
    explanation: "Sample efficiency measures how effectively a learning algorithm extracts knowledge from data: higher sample efficiency means the algorithm requires fewer training examples to reach a given level of competence.",
    officialRef: "PCEI-30-01 Block 1.4 - Sample Efficiency",
    tags: ["sample-efficiency", "learning-rate", "benchmarking"]
  },
  {
    id: "pcei-1-078",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "ARC Benchmark",
    difficulty: "Advanced",
    question: "What makes the Abstraction and Reasoning Corpus (ARC), created by Fran\u00e7ois Chollet, a distinct test of general intelligence?",
    codeSnippet: "# ARC tasks:\n# Solving novel visual grid puzzles with only 2-3 demonstration examples, testing abstract reasoning rather than memorization",
    options: [
      "It tests an AI's ability to acquire new skills and solve novel visual grid puzzles with minimal demonstration examples, resisting pure memorization",
      "It measures the speed of compiling 10,000 lines of C source code",
      "It tests whether a computer can win in poker against professional players",
      "It measures the cryptographic hashing speed of graphics cards"
    ],
    correctAnswer: 0,
    explanation: "The ARC benchmark tests fluid intelligence and broad generalization: it presents novel transformation rules on visual grids with only a few examples, preventing models from relying on rote training-data memorization.",
    officialRef: "PCEI-30-01 Block 1.4 - ARC Benchmark",
    tags: ["arc-benchmark", "fluid-intelligence", "generalization"]
  },
  {
    id: "pcei-1-079",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Moravec vs Turing",
    difficulty: "Intermediate",
    question: "If an AI defeats the world grandmaster in Chess but cannot reliably pick up a physical chess piece from a table, what does this demonstrate?",
    codeSnippet: "# Asymmetry in AI capabilities:\n# Abstract formal logic is computationally tractable; sensory-motor physical interaction is exceptionally complex",
    options: [
      "A manifestation of Moravec's Paradox, where abstract symbolic reasoning is easier to automate than sensory-motor physical dexterity",
      "A direct software violation of the Python Institute Code of Conduct",
      "That chess is not a valid benchmark for computer science research",
      "That the physical chess board must be defective"
    ],
    correctAnswer: 0,
    explanation: "This classic scenario highlights Moravec's Paradox: discrete, symbolic rule-based domains (chess) yield to algorithmic search, while physical perception and motor control require vast, subtle evolutionary sensory systems.",
    officialRef: "PCEI-30-01 Block 1.4 - Moravec's Paradox Application",
    tags: ["moravec", "chess", "robotics"]
  },
  {
    id: "pcei-1-080",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.4",
    category: "Overreliance Risk",
    difficulty: "Beginner",
    question: "Why is human 'Automation Bias' or overreliance on AI system outputs a significant operational risk?",
    codeSnippet: "# Automation bias:\n# Humans tend to uncritically trust automated suggestions even when contrary evidence is visible",
    options: [
      "Humans tend to uncritically accept automated suggestions or diagnoses, ignoring contradictory evidence or failing to verify critical outputs",
      "Automated systems refuse to execute commands if humans disagree with them",
      "Computers become physically heavier when operating in automated mode",
      "Automation bias causes computer hard drives to fragment prematurely"
    ],
    correctAnswer: 0,
    explanation: "Automation bias is the psychological tendency for humans to favor suggestions from automated decision-making systems and ignore contradictory information made without computer assistance, leading to uncritical errors.",
    officialRef: "PCEI-30-01 Block 1.4 - Automation Bias",
    tags: ["automation-bias", "human-factors", "risk"]
  },
  {
    id: "pcei-1-081",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Computer Vision Applications",
    difficulty: "Beginner",
    question: "Which real-world application relies primarily on Computer Vision (CV) techniques?",
    codeSnippet: "# Real-world CV task:\nimport cv2\n# Object detection in autonomous vehicles to identify pedestrians and signs",
    options: [
      "Real-time pedestrian and traffic sign detection in self-driving cars",
      "Encrypting sensitive database columns using salted hashes",
      "Sorting tabular numerical columns in a spreadsheet",
      "Parsing HTTP cookie headers in web browser requests"
    ],
    correctAnswer: 0,
    explanation: "Pedestrian and obstacle detection in autonomous vehicles relies on Computer Vision to process, analyze, and understand visual digital inputs from cameras and LiDAR.",
    officialRef: "PCEI-30-01 Block 1.5 - Computer Vision",
    tags: ["computer-vision", "autonomous-driving", "applications"]
  },
  {
    id: "pcei-1-082",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "NLP Applications",
    difficulty: "Beginner",
    question: "Which enterprise application is a quintessential use case of Natural Language Processing (NLP)?",
    codeSnippet: "# NLP application:\n# Automated sentiment analysis of customer support tickets and reviews\nsentiment = analyze_text('Great product, fast delivery!')",
    options: [
      "Automated sentiment analysis and summarization of customer service tickets",
      "Calculating employee payroll taxes based on national tax brackets",
      "Compressing JPEG image archives into ZIP files",
      "Detecting physical vibrations in cooling fan bearings"
    ],
    correctAnswer: 0,
    explanation: "Natural Language Processing (NLP) enables machines to read, decipher, summarize, and categorize human text, making automated customer service ticket analysis a core NLP application.",
    officialRef: "PCEI-30-01 Block 1.5 - NLP Applications",
    tags: ["nlp", "sentiment-analysis", "customer-service"]
  },
  {
    id: "pcei-1-083",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Recommendation Systems",
    difficulty: "Beginner",
    question: "What type of AI application powers movie recommendations on streaming platforms and product suggestions on e-commerce sites?",
    codeSnippet: "# Recommendation engine types:\n# Collaborative filtering & Content-based filtering\nrecommendations = model.predict_user_ratings(user_id=42)",
    options: [
      "Recommendation Systems (Collaborative and Content-Based Filtering)",
      "Domain Name System (DNS) recursive resolvers",
      "Network Address Translation (NAT) router tables",
      "Operating system disk defragmentation utilities"
    ],
    correctAnswer: 0,
    explanation: "Recommendation Systems analyze user preferences, past behavior, and item characteristics using collaborative or content-based filtering algorithms to suggest relevant products, movies, or music.",
    officialRef: "PCEI-30-01 Block 1.5 - Recommendation Systems",
    tags: ["recommendations", "collaborative-filtering", "streaming"]
  },
  {
    id: "pcei-1-084",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Healthcare AI",
    difficulty: "Intermediate",
    question: "In healthcare diagnostics, what is an accepted best practice for integrating AI image analysis models (e.g., chest X-ray screening)?",
    codeSnippet: "# AI in healthcare:\n# Act as decision-support tool (Second opinion) with certified radiologist in the loop",
    options: [
      "Using the AI as a clinical decision-support tool to assist, flag, and prioritize scans for certified human radiologists",
      "Allowing the AI model to autonomously schedule patient surgeries without physician review",
      "Deleting all raw X-ray scans once the AI outputs a numerical score",
      "Replacing all hospital staff with automated chatbots"
    ],
    correctAnswer: 0,
    explanation: "In clinical environments, AI systems are deployed as decision-support tools (second opinions) that flag urgent abnormalities and reduce radiologist fatigue, with final diagnostic accountability retained by licensed doctors.",
    officialRef: "PCEI-30-01 Block 1.5 - Healthcare AI",
    tags: ["healthcare", "decision-support", "radiology"]
  },
  {
    id: "pcei-1-085",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Finance & Fraud Detection",
    difficulty: "Intermediate",
    question: "Why is anomaly detection using machine learning widely deployed in credit card transaction processing?",
    codeSnippet: "# Fraud detection:\n# Flagging transactions that deviate significantly from user's historical spending profile\nis_fraud = anomaly_detector.predict(transaction_features)",
    options: [
      "It can analyze millions of transaction attributes in milliseconds to flag irregular patterns that deviate from normal user spending profiles",
      "It permanently reduces banking transaction fees to zero",
      "It prints physical cash currency using high-speed laser printers",
      "It eliminates the need for cardholder passwords and PIN numbers entirely"
    ],
    correctAnswer: 0,
    explanation: "Machine learning models can evaluate spending volume, geographic location, merchant type, and timing in milliseconds, flagging anomalous transactions for verification before fraud loss occurs.",
    officialRef: "PCEI-30-01 Block 1.5 - Fraud Detection",
    tags: ["fraud-detection", "anomaly-detection", "finance"]
  },
  {
    id: "pcei-1-086",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Predictive Maintenance",
    difficulty: "Intermediate",
    question: "What is 'Predictive Maintenance' in industrial IoT and manufacturing AI?",
    codeSnippet: "# Predictive maintenance:\n# Monitoring sensor telemetry (temperature, vibration) to forecast equipment failure before it happens\nstatus = failure_model.predict(vibration_stream)",
    options: [
      "Analyzing sensor telemetry (vibration, heat, acoustics) with ML models to forecast mechanical failures before they cause costly downtime",
      "Replacing all factory equipment every Monday morning regardless of condition",
      "Running factory machinery until it catches fire to test fire extinguishers",
      "Installing decorative lighting fixtures across industrial assembly lines"
    ],
    correctAnswer: 0,
    explanation: "Predictive maintenance uses ML algorithms trained on equipment sensor data (vibration, acoustic, temperature) to predict wear-and-tear and schedule targeted repairs before unplanned breakdowns happen.",
    officialRef: "PCEI-30-01 Block 1.5 - Predictive Maintenance",
    tags: ["predictive-maintenance", "iot", "manufacturing"]
  },
  {
    id: "pcei-1-087",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Edge AI vs Cloud AI",
    difficulty: "Intermediate",
    question: "What is the primary benefit of deploying 'Edge AI' (running models locally on IoT devices, cameras, or drones) compared to centralized Cloud AI?",
    codeSnippet: "# Edge AI execution:\n# Model runs on device microcontroller or NPU\n# Low latency, works offline, data privacy",
    options: [
      "Ultra-low latency inference, offline operation without internet connectivity, and enhanced data privacy",
      "Access to infinite server RAM and petabytes of cloud disk storage",
      "Elimination of all local battery consumption",
      "Ability to train 100-billion-parameter foundation models directly on microcontrollers"
    ],
    correctAnswer: 0,
    explanation: "Edge AI runs inference directly on local hardware (smartphones, drones, cameras). This eliminates round-trip network latency, preserves privacy by keeping raw data local, and works without an active internet connection.",
    officialRef: "PCEI-30-01 Block 1.5 - Edge AI",
    tags: ["edge-ai", "low-latency", "privacy"]
  },
  {
    id: "pcei-1-088",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Automated Speech Recognition",
    difficulty: "Beginner",
    question: "What does an Automatic Speech Recognition (ASR) system do?",
    codeSnippet: "# ASR pipeline:\n# Spoken audio waveform -> Acoustic model -> Language model -> Written text transcript",
    options: [
      "Converts spoken audio waveforms into written natural language text",
      "Converts text files into synthesized computer voice output",
      "Translates Python code into executable binary assembly",
      "Compresses MP3 audio files into smaller bitrates"
    ],
    correctAnswer: 0,
    explanation: "Automatic Speech Recognition (ASR) takes acoustic speech signals and transcribes them into readable natural language text, powering voice assistants and automated subtitles.",
    officialRef: "PCEI-30-01 Block 1.5 - ASR",
    tags: ["speech-recognition", "asr", "audio"]
  },
  {
    id: "pcei-1-089",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Text-to-Speech",
    difficulty: "Beginner",
    question: "What is the function of a Text-to-Speech (TTS) AI system?",
    codeSnippet: "# TTS pipeline:\n# Written text -> Phoneme mapping -> Neural vocoder -> Audible speech audio",
    options: [
      "Synthesizing natural-sounding spoken audio from written text",
      "Transcribing audio dictation into Microsoft Word documents",
      "Translating French text into German text",
      "Filtering background ambient noise from microphone recordings"
    ],
    correctAnswer: 0,
    explanation: "Text-to-Speech (TTS) synthesizes audible, natural-sounding human speech from input text, used in GPS navigation, screen readers for the visually impaired, and virtual voice agents.",
    officialRef: "PCEI-30-01 Block 1.5 - TTS",
    tags: ["text-to-speech", "tts", "voice-synthesis"]
  },
  {
    id: "pcei-1-090",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Supply Chain Optimization",
    difficulty: "Intermediate",
    question: "How is artificial intelligence applied in modern supply chain management?",
    codeSnippet: "# Supply chain AI:\n# Demand forecasting + Route optimization + Inventory balancing\noptimal_reorder = forecast_model.predict(sales_history, weather, promotions)",
    options: [
      "Forecasting customer demand, dynamically optimizing logistics shipping routes, and automating warehouse inventory replenishment",
      "Replacing all shipping containers with lighter cardboard boxes",
      "Mandating that all freight trucks travel at the exact same constant speed",
      "Eliminating international customs paperwork by ignoring trade regulations"
    ],
    correctAnswer: 0,
    explanation: "AI in supply chains leverages historical sales, seasonal trends, external indicators, and graph routing algorithms to optimize inventory levels, forecast demand, and reduce transportation costs.",
    officialRef: "PCEI-30-01 Block 1.5 - Supply Chain",
    tags: ["supply-chain", "demand-forecasting", "logistics"]
  },
  {
    id: "pcei-1-091",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Algorithmic Trading",
    difficulty: "Intermediate",
    question: "What role do machine learning models play in high-frequency quantitative trading in financial markets?",
    codeSnippet: "# Quantitative finance:\n# Analyzing order book depth, market signals, and news sentiment to execute trades in microseconds",
    options: [
      "Executing trades in sub-millisecond timeframes based on mathematical pattern recognition in market depth and price signals",
      "Manually telephoning stockbrokers on the trading floor",
      "Printing physical share certificates for corporate archives",
      "Guaranteeing that every single transaction makes an astronomical profit with zero risk"
    ],
    correctAnswer: 0,
    explanation: "Quantitative financial algorithms use ML models to detect subtle price discrepancies, analyze high-velocity order book feeds, and execute automated arbitrage or hedging transactions in microseconds.",
    officialRef: "PCEI-30-01 Block 1.5 - Algorithmic Trading",
    tags: ["finance", "algorithmic-trading", "quantitative"]
  },
  {
    id: "pcei-1-092",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Precision Agriculture",
    difficulty: "Beginner",
    question: "How is computer vision and drone technology used in 'Precision Agriculture'?",
    codeSnippet: "# Precision agriculture with multispectral imagery:\n# Identifying crop stress, weed infestations, and targeted fertilizer application",
    options: [
      "Analyzing multispectral aerial imagery to detect weed infestations, plant disease, and soil moisture variations for targeted pesticide spraying",
      "Replacing farm soil with synthetic plastic turf",
      "Manually hand-pollinating every individual flower blossom",
      "Using artificial intelligence to change the orbit of the earth around the sun"
    ],
    correctAnswer: 0,
    explanation: "Precision agriculture pairs computer vision with drones and sensors to monitor crop health, identify localized weeds or diseases, and apply water and chemicals only where needed, reducing environmental waste.",
    officialRef: "PCEI-30-01 Block 1.5 - Precision Agriculture",
    tags: ["agriculture", "drone-imaging", "sustainability"]
  },
  {
    id: "pcei-1-093",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Cybersecurity AI",
    difficulty: "Intermediate",
    question: "In enterprise cybersecurity, how do User and Entity Behavior Analytics (UEBA) systems leverage machine learning?",
    codeSnippet: "# UEBA anomaly detection:\n# Establishing baseline user behavior -> flagging atypical logins or massive data downloads",
    options: [
      "Establishing a baseline profile of normal user activity and flagging anomalous deviations that could indicate compromised credentials or insider threats",
      "Blocking all employee access to the internet permanently",
      "Decrypting all SSL traffic without encryption keys",
      "Automating the physical locking of office doors during lunch hours"
    ],
    correctAnswer: 0,
    explanation: "UEBA uses machine learning to learn normal operational baselines for users and devices. When a user suddenly accesses sensitive servers at 3 AM or downloads unusual volumes of data, the system flags the anomalous risk.",
    officialRef: "PCEI-30-01 Block 1.5 - Cybersecurity AI",
    tags: ["cybersecurity", "ueba", "anomaly-detection"]
  },
  {
    id: "pcei-1-094",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Code Generation AI",
    difficulty: "Beginner",
    question: "How do developer-assistive AI tools (like GitHub Copilot or code assistants) boost software engineering productivity?",
    codeSnippet: "# AI developer assistant:\n# Autocompletes boilerplate code, docstrings, and unit test templates based on contextual comments",
    options: [
      "By autocompleting boilerplate code, suggesting function implementations from comments, and generating test fixtures",
      "By replacing all human programmers and closing down software companies",
      "By formatting hard drives whenever a syntax error occurs",
      "By translating Python code into ancient hieroglyphics"
    ],
    correctAnswer: 0,
    explanation: "Code generation models assist developers by providing contextual code autocompletions, translating natural language prompts into function scaffolding, and drafting repetitive boilerplate or unit tests.",
    officialRef: "PCEI-30-01 Block 1.5 - Code Generation",
    tags: ["code-generation", "developer-tools", "productivity"]
  },
  {
    id: "pcei-1-095",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Autonomous Robotics",
    difficulty: "Intermediate",
    question: "What key technical problem do Simultaneous Localization and Mapping (SLAM) algorithms solve for mobile robots?",
    codeSnippet: "# SLAM challenge:\n# Robot in unknown environment must build a map of the room while simultaneously keeping track of its own location",
    options: [
      "Enabling an autonomous robot to construct a map of an unknown environment while simultaneously keeping track of its own position within that map",
      "Translating Python source code into robotic servo motor voltage levels",
      "Formatting robotic user manuals into PDF documents",
      "Connecting robotic vacuum cleaners to social media networks"
    ],
    correctAnswer: 0,
    explanation: "SLAM (Simultaneous Localization and Mapping) is a foundational robotics algorithm that enables an agent to explore an unfamiliar environment, create a geometric map, and pinpoint where it is inside that map.",
    officialRef: "PCEI-30-01 Block 1.5 - SLAM",
    tags: ["slam", "robotics", "localization"]
  },
  {
    id: "pcei-1-096",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Customer Support Chatbots",
    difficulty: "Beginner",
    question: "What is the primary operational advantage of implementing conversational AI in customer support?",
    codeSnippet: "# Conversational customer support:\n# 24/7 availability + immediate response to tier-1 common queries",
    options: [
      "Providing instant 24/7 self-service resolutions to common tier-1 inquiries, reducing queue wait times and routing complex issues to human agents",
      "Ensuring that customers are permanently prevented from speaking to human staff",
      "Generating randomized responses to confuse callers into hanging up",
      "Eliminating the need for companies to have web servers"
    ],
    correctAnswer: 0,
    explanation: "Conversational AI handles repetitive high-volume customer inquiries (order status, FAQ, password reset) instantly and continuously, freeing human support staff to resolve complex edge cases.",
    officialRef: "PCEI-30-01 Block 1.5 - Customer Support",
    tags: ["chatbots", "customer-support", "automation"]
  },
  {
    id: "pcei-1-097",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Document Processing",
    difficulty: "Intermediate",
    question: "In banking and legal sectors, what does Intelligent Document Processing (IDP) combine to digitize paper forms?",
    codeSnippet: "# IDP pipeline:\n# Scanned PDF -> OCR (Optical Character Recognition) -> NLP entity extraction -> Database insertion",
    options: [
      "Optical Character Recognition (OCR), computer vision layout analysis, and natural language entity extraction",
      "Ink cartridge recycling sensors and paper shredder motors",
      "High-voltage electrical circuit breakers and cooling coils",
      "Manual transcription by outsourced human typists"
    ],
    correctAnswer: 0,
    explanation: "Intelligent Document Processing (IDP) combines Optical Character Recognition (OCR) to read pixel text, CV to parse tables and layouts, and NLP to extract key-value entities (invoices, tax forms, contracts) into databases.",
    officialRef: "PCEI-30-01 Block 1.5 - IDP",
    tags: ["idp", "ocr", "document-processing"]
  },
  {
    id: "pcei-1-098",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Entertainment & Gaming AI",
    difficulty: "Beginner",
    question: "In video game development, what is the role of Non-Player Character (NPC) AI?",
    codeSnippet: "# Game AI:\n# Controls enemy tactics, pathfinding (A*), and realistic NPC behavior to create engaging gameplay",
    options: [
      "Governing the behaviors, tactical decisions, and movement pathfinding of non-player characters to provide engaging gameplay",
      "Designing physical plastic packaging for game console discs",
      "Processing credit card transactions for digital in-game purchases",
      "Regulating the internal clock speed of television monitors"
    ],
    correctAnswer: 0,
    explanation: "Video game AI controls enemy behaviors, crowd navigation, and squad tactics using finite state machines, behavior trees, and pathfinding algorithms (like A*) to create convincing interactive challenges.",
    officialRef: "PCEI-30-01 Block 1.5 - Game AI",
    tags: ["gaming", "npc", "pathfinding"]
  },
  {
    id: "pcei-1-099",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "Smart Assistants",
    difficulty: "Beginner",
    question: "When a user activates a smart speaker by saying a 'Wake Word' (like 'Hey Siri' or 'Alexa'), where is that initial wake word typically processed?",
    codeSnippet: "# Wake-word detection:\n# Runs on low-power local device microcontroller without transmitting audio to the cloud until wake-word is verified",
    options: [
      "On a low-power, dedicated on-device chip (Edge AI) that listens locally without transmitting continuous audio to the cloud",
      "By streaming all household conversations 24/7 to satellite servers in orbit",
      "By sending physical radio signals to the local telephone exchange",
      "By calculating millions of blockchain proof-of-stake hashes"
    ],
    correctAnswer: 0,
    explanation: "To conserve battery, minimize latency, and protect consumer privacy, wake-word detection runs locally on a tiny low-power audio coprocessor on the device. Only after the wake-word is confirmed is full audio streamed to the cloud.",
    officialRef: "PCEI-30-01 Block 1.5 - Wake Words",
    tags: ["smart-assistants", "edge-detection", "privacy"]
  },
  {
    id: "pcei-1-100",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.5",
    category: "AI Impact Summary",
    difficulty: "Beginner",
    question: "What is the consensus perspective among professional AI researchers regarding the ultimate objective of applied artificial intelligence?",
    codeSnippet: "# Applied AI objective:\n# Augment human capability, automate hazardous or mundane tasks, and solve complex societal and scientific challenges",
    options: [
      "To augment human capabilities, automate dangerous or repetitive labor, and accelerate scientific discovery in medicine, climate, and engineering",
      "To deliberately replace all human social interaction with synthetic computer code",
      "To exhaust global electrical power grids through continuous unconstrained matrix multiplications",
      "To eliminate the need for human beings to think or learn new skills"
    ],
    correctAnswer: 0,
    explanation: "The primary professional objective of applied AI is augmentation: building intelligent computational tools that enhance human productivity, eliminate perilous or drudging labor, and unlock solutions to complex scientific frontiers.",
    officialRef: "PCEI-30-01 Block 1.5 - AI Objectives",
    tags: ["objectives", "augmentation", "future-of-ai"]
  }
];
