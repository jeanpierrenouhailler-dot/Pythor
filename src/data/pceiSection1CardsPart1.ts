import { Flashcard } from '../types';

export const pceiSection1CardsPart1: Flashcard[] = [
  {
    id: "pcei-1-001",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "AI Fundamentals",
    difficulty: "Beginner",
    question: "Which definition best describes Artificial Intelligence (AI) in computer science?",
    codeSnippet: "# Conceptual definition of AI:\nsystem = {'capability': 'simulate human intelligence and reasoning', 'methods': ['learning', 'perception', 'problem-solving']}",
    options: [
      "The hardware architecture of multi-core graphics processing units (GPUs)",
      "The simulation of human intelligence and cognitive capabilities by computer systems",
      "The automated conversion of Python bytecode into native machine assembly",
      "A relational database management system optimized for rapid SQL queries"
    ],
    correctAnswer: 1,
    explanation: "Artificial Intelligence (AI) refers to the simulation of human intelligence processes by computer systems, including learning, reasoning, pattern recognition, and self-correction.",
    officialRef: "PCEI-30-01 Block 1.1 - Core AI Concepts",
    tags: ["ai-definitions", "fundamentals", "overview"]
  },
  {
    id: "pcei-1-002",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "AI Subfields",
    difficulty: "Beginner",
    question: "What is the difference between Narrow AI (Weak AI) and Artificial General Intelligence (AGI)?",
    codeSnippet: "# Narrow AI vs AGI:\nspam_filter = {'domain': 'text classification', 'type': 'Narrow AI'}\nhypothetical_agi = {'domain': 'universal cognitive capabilities', 'type': 'AGI'}",
    options: [
      "Narrow AI runs only on microcontrollers, whereas AGI runs on cloud servers",
      "Narrow AI is designed for a specific dedicated task, whereas AGI possesses universal human-like cognitive abilities across any domain",
      "Narrow AI requires quantum computing, whereas AGI uses standard CPU threads",
      "Narrow AI is strictly open-source, whereas AGI is proprietary software"
    ],
    correctAnswer: 1,
    explanation: "Narrow AI (or Weak AI) is trained and focused to perform a single specific task (like spam filtering or chess). Artificial General Intelligence (AGI) is a theoretical form of AI with generalized human-grade cognitive abilities across any intellectual task.",
    officialRef: "PCEI-30-01 Block 1.1 - Narrow AI vs AGI",
    tags: ["narrow-ai", "agi", "taxonomy"]
  },
  {
    id: "pcei-1-003",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "AI History & Tests",
    difficulty: "Intermediate",
    question: "What was the original purpose of Alan Turing's 'Imitation Game' (the Turing Test)?",
    codeSnippet: "# The Turing Test concept:\ndef turing_test(interrogator, response_a, response_b):\n    # Can human judge distinguish human vs machine?\n    return interrogator.guess_machine() == actual_machine",
    options: [
      "To determine if a computer can execute 1 billion floating-point instructions per second",
      "To evaluate whether a machine can exhibit conversational behavior indistinguishable from that of a human",
      "To verify that an operating system kernel is free from memory leaks and race conditions",
      "To measure the cryptographic entropy of an automated pseudo-random number generator"
    ],
    correctAnswer: 1,
    explanation: "The Turing Test, introduced by Alan Turing in 1950, tests a machine's ability to exhibit intelligent conversational behavior indistinguishable from, or equivalent to, that of a human.",
    officialRef: "PCEI-30-01 Block 1.1 - Turing Test",
    tags: ["turing-test", "history", "evaluation"]
  },
  {
    id: "pcei-1-004",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "AI Paradigms",
    difficulty: "Intermediate",
    question: "How does 'Symbolic AI' (Good Old-Fashioned AI / GOFAI) fundamentally differ from modern 'Connectionist' or statistical AI?",
    codeSnippet: "# Symbolic AI (explicit rules):\nif temperature > 38.0 and cough:\n    diagnosis = 'Fever'\n\n# Connectionist AI (learned weights from data):\nprediction = model.predict(patient_features)",
    options: [
      "Symbolic AI relies on explicit human-coded rules and logic representations, whereas Connectionist AI learns patterns and weights from raw data",
      "Symbolic AI only operates on images, while Connectionist AI only operates on integers",
      "Symbolic AI requires deep neural network backpropagation, while Connectionist AI uses if-then statements",
      "Symbolic AI is non-deterministic, while Connectionist AI is purely hardcoded"
    ],
    correctAnswer: 0,
    explanation: "Symbolic AI operates on high-level human-readable symbols, logic, and explicit expert rules. Modern connectionist/machine learning approaches learn statistical representations and numerical weights automatically from empirical data.",
    officialRef: "PCEI-30-01 Block 1.1 - AI Paradigms",
    tags: ["symbolic-ai", "connectionism", "expert-systems"]
  },
  {
    id: "pcei-1-005",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "Superintelligence",
    difficulty: "Beginner",
    question: "What term describes a hypothetical future AI that surpasses human intellectual capabilities across virtually all economically and creatively valuable domains?",
    codeSnippet: "# Future intelligence taxonomy:\nlevels = ['Narrow AI', 'Artificial General Intelligence (AGI)', 'Artificial Superintelligence (ASI)']",
    options: [
      "Artificial Superintelligence (ASI)",
      "Deterministic Sub-Agent",
      "Edge Computing Unit",
      "Quantum Bit Register"
    ],
    correctAnswer: 0,
    explanation: "Artificial Superintelligence (ASI) refers to an intellect that is much smarter than the best human brains in practically every field, including scientific creativity, general wisdom, and social skills.",
    officialRef: "PCEI-30-01 Block 1.1 - AI Taxonomy",
    tags: ["asi", "superintelligence", "concepts"]
  },
  {
    id: "pcei-1-006",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "Chinese Room",
    difficulty: "Intermediate",
    question: "What core philosophical critique does John Searle's 'Chinese Room' thought experiment argue against Strong AI?",
    codeSnippet: "# Searle's Chinese Room argument:\n# Syntactic manipulation of symbols does not equal semantic understanding",
    options: [
      "Computers can never process non-English natural languages",
      "Syntax manipulation and rule-following do not equate to genuine semantic understanding or consciousness",
      "Neural networks cannot scale beyond 1000 hidden layers",
      "Hardware chips will overheat when simulating recursive functions"
    ],
    correctAnswer: 1,
    explanation: "Searle's Chinese Room thought experiment argues that a program merely manipulating formal symbols according to programmatic rules (syntax) does not possess true semantic understanding or intentionality.",
    officialRef: "PCEI-30-01 Block 1.1 - Chinese Room",
    tags: ["philosophy", "semantics", "understanding"]
  },
  {
    id: "pcei-1-007",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "Cognitive Computing",
    difficulty: "Beginner",
    question: "What is the primary focus of 'Cognitive Computing' systems?",
    codeSnippet: "# Cognitive computing goal:\nfeature = 'Augment human decision-making by simulating human thought processes in complex, ambiguous environments'",
    options: [
      "Replacing all human workers in mechanical assembly lines",
      "Simulating human thought processes to assist and augment human decision-making in ambiguous domains",
      "Designing physical chassis hardware for humanoid bipedal robots",
      "Formatting relational SQL tables into third normal form"
    ],
    correctAnswer: 1,
    explanation: "Cognitive computing mimics human brain functioning to help humans make better decisions when analyzing massive, ambiguous, and unstructured datasets.",
    officialRef: "PCEI-30-01 Block 1.1 - Cognitive Computing",
    tags: ["cognitive-computing", "decision-support", "applications"]
  },
  {
    id: "pcei-1-008",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "AI Subfields",
    difficulty: "Beginner",
    question: "Which of the following is considered a primary subfield of Artificial Intelligence?",
    codeSnippet: "ai_subfields = ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Robotics']",
    options: [
      "Machine Learning (ML)",
      "Hypertext Transfer Protocol (HTTP)",
      "Relational Database Indexing",
      "Static HTML Layout Design"
    ],
    correctAnswer: 0,
    explanation: "Machine Learning, Computer Vision, Natural Language Processing, and Robotics are primary subfields under the broader umbrella of Artificial Intelligence.",
    officialRef: "PCEI-30-01 Block 1.1 - AI Subfields",
    tags: ["subfields", "taxonomy", "ml"]
  },
  {
    id: "pcei-1-009",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "AI Hierarchy",
    difficulty: "Beginner",
    question: "What is the hierarchical relationship between AI, Machine Learning (ML), and Deep Learning (DL)?",
    codeSnippet: "# Nesting relationship:\n# AI contains ML, and ML contains DL\nassert 'Deep Learning' in 'Machine Learning' and 'Machine Learning' in 'Artificial Intelligence'",
    options: [
      "DL is the broadest field, containing ML, which contains AI",
      "AI is the broadest field; ML is a subset of AI; DL is a subset of ML based on multi-layered neural networks",
      "ML and AI are completely unrelated competitors to DL",
      "DL is hardware-only, ML is database-only, and AI is web-only"
    ],
    correctAnswer: 1,
    explanation: "AI is the overarching discipline. Machine Learning is a subset of AI focusing on learning from data. Deep Learning is a specialized subset of ML utilizing multi-layered artificial neural networks.",
    officialRef: "PCEI-30-01 Block 1.1 - AI Hierarchy",
    tags: ["hierarchy", "deep-learning", "ml"]
  },
  {
    id: "pcei-1-010",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "Data-Driven AI",
    difficulty: "Beginner",
    question: "Why has the resurgence of modern AI in recent decades been largely driven by Machine Learning rather than Symbolic AI?",
    codeSnippet: "# Factors enabling modern AI:\nenablers = ['Big Data availability', 'High-performance GPUs/TPUs', 'Advanced statistical learning algorithms']",
    options: [
      "Rule-based systems became illegal under international copyright laws",
      "Massive availability of data, exponential increases in compute power (GPUs), and flexible statistical algorithms",
      "Computer programming languages eliminated support for Boolean logic",
      "Computers can no longer execute conditional if-else statements"
    ],
    correctAnswer: 1,
    explanation: "The modern AI boom is fueled by three converging drivers: the explosion of digital training data (Big Data), specialized parallel computing hardware (GPUs/TPUs), and breakthrough statistical learning algorithms.",
    officialRef: "PCEI-30-01 Block 1.1 - Modern AI Drivers",
    tags: ["drivers", "big-data", "gpus"]
  },
  {
    id: "pcei-1-011",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "Expert Systems",
    difficulty: "Intermediate",
    question: "Which component is a fundamental building block of a classical Expert System?",
    codeSnippet: "# Architecture of an Expert System:\nexpert_system = {\n    'knowledge_base': 'Rules and facts domain expertise',\n    'inference_engine': 'Deductive reasoning engine'\n}",
    options: [
      "A backpropagation gradient optimizer",
      "A knowledge base paired with an inference engine",
      "A convolutional pooling layer",
      "A multi-head self-attention tensor"
    ],
    correctAnswer: 1,
    explanation: "Traditional expert systems consist of a knowledge base (containing domain-specific facts and heuristic IF-THEN rules) and an inference engine (which applies logical rules to deduce conclusions).",
    officialRef: "PCEI-30-01 Block 1.1 - Expert Systems",
    tags: ["expert-systems", "knowledge-base", "inference"]
  },
  {
    id: "pcei-1-012",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "Heuristics",
    difficulty: "Intermediate",
    question: "In the context of artificial intelligence problem-solving, what is a 'heuristic'?",
    codeSnippet: "# A heuristic function h(n) estimates distance to goal:\ndef manhattan_distance(x1, y1, x2, y2):\n    return abs(x1 - x2) + abs(y1 - y2)",
    options: [
      "A mathematical guarantee that an algorithm will run in constant O(1) time",
      "A practical rule of thumb or shortcut that estimates a solution when finding an optimal solution is computationally impractical",
      "An unrecoverable system crash caused by infinite recursion",
      "A hardware device used to measure CPU thermal output"
    ],
    correctAnswer: 1,
    explanation: "A heuristic is an informed estimate, rule of thumb, or shortcut used in algorithms to speed up the process of finding a satisfactory solution when exhaustive search is too computationally expensive.",
    officialRef: "PCEI-30-01 Block 1.1 - Heuristics",
    tags: ["heuristics", "problem-solving", "search"]
  },
  {
    id: "pcei-1-013",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "Deterministic vs Stochastic",
    difficulty: "Intermediate",
    question: "What does it mean if an AI decision model is 'deterministic'?",
    codeSnippet: "# Deterministic function example:\ndef add_constant(x):\n    return x + 5  # Same input ALWAYS yields exact same output",
    options: [
      "The model incorporates random Gaussian noise into every execution",
      "Given the exact same input, the model will always produce the exact same output",
      "The model runs exclusively on decentralized blockchain nodes",
      "The model requires human intervention before every calculation"
    ],
    correctAnswer: 1,
    explanation: "A deterministic system produces identical outputs whenever given the exact same initial state and inputs, without randomness or probabilistic variation.",
    officialRef: "PCEI-30-01 Block 1.1 - Deterministic Models",
    tags: ["deterministic", "probability", "reproducibility"]
  },
  {
    id: "pcei-1-014",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "Stochastic Systems",
    difficulty: "Beginner",
    question: "Why are many modern generative AI models and reinforcement learning agents described as 'stochastic'?",
    codeSnippet: "# Sampling with probability distribution:\nimport random\ntokens = ['apple', 'banana', 'cherry']\nprobs = [0.7, 0.2, 0.1]\nchosen = random.choices(tokens, weights=probs)[0]",
    options: [
      "They contain elements of randomness and probabilistic sampling in their decision-making or output generation",
      "They are physically broken and cannot execute arithmetic instructions",
      "They only run on analog mechanical clocks",
      "They never produce answers in human languages"
    ],
    correctAnswer: 0,
    explanation: "Stochastic models involve randomness or probability distributions. For instance, LLMs use temperature and top-p sampling to select the next token probabilistically, yielding different creative variations.",
    officialRef: "PCEI-30-01 Block 1.1 - Stochastic Systems",
    tags: ["stochastic", "probability", "sampling"]
  },
  {
    id: "pcei-1-015",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "Inductive vs Deductive",
    difficulty: "Intermediate",
    question: "How does 'inductive reasoning' (characteristic of Machine Learning) differ from 'deductive reasoning' (characteristic of Rule-Based Logic)?",
    codeSnippet: "# Inductive (ML): Specific observations -> General rule\n# Deductive (Logic): General premise -> Specific conclusion",
    options: [
      "Inductive reasoning infers general patterns from specific observed data, whereas deductive reasoning derives specific facts from general rules and axioms",
      "Inductive reasoning only works on audio files, whereas deductive reasoning works on video",
      "Inductive reasoning requires 100% mathematical certainty, while deductive reasoning is always probabilistic",
      "Deductive reasoning is illegal in commercial cloud deployments"
    ],
    correctAnswer: 0,
    explanation: "Deductive logic moves from generalized premises to a specific, guaranteed conclusion. Inductive reasoning (the core of ML) observes specific examples and generalizes predictive models from those patterns.",
    officialRef: "PCEI-30-01 Block 1.1 - Inductive vs Deductive",
    tags: ["inductive", "deductive", "reasoning"]
  },
  {
    id: "pcei-1-016",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "AI Winter",
    difficulty: "Beginner",
    question: "What historical phenomenon does the term 'AI Winter' describe?",
    codeSnippet: "# AI historical cycles:\nperiods = ['Initial Optimism (1950s-60s)', 'First AI Winter (1970s)', 'Expert Systems Boom (1980s)', 'Second AI Winter (late 80s-90s)', 'Deep Learning Revolution (2010s+)']",
    options: [
      "A severe software bug caused by date rollovers in December",
      "A period of reduced funding, commercial interest, and public skepticism following overhyped expectations and unmet AI promises",
      "A cooling technology designed to keep high-density GPU data centers cold",
      "The hibernation mode triggered when laptop batteries fall below 10%"
    ],
    correctAnswer: 1,
    explanation: "An 'AI Winter' refers to a historical downturn in research funding and commercial investment in AI, occurring when inflated expectations failed to materialize (notably in the 1970s and late 1980s).",
    officialRef: "PCEI-30-01 Block 1.1 - AI Winter",
    tags: ["history", "ai-winter", "trends"]
  },
  {
    id: "pcei-1-017",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "Pattern Recognition",
    difficulty: "Beginner",
    question: "Why is pattern recognition considered the foundational cornerstone of modern applied AI?",
    codeSnippet: "# Pattern recognition concept:\nfeatures = [2.5, 3.1, 1.8]\npredicted_class = classifier.predict([features])",
    options: [
      "It enables algorithms to detect regularities, correlations, and structures in complex datasets to categorize or predict unseen instances",
      "It allows monitors to display graphical user interfaces without video drivers",
      "It converts Python source files directly into compiled C++ headers",
      "It automates network cable routing inside server rooms"
    ],
    correctAnswer: 0,
    explanation: "Pattern recognition is the automated identification of patterns and regularities in data. It underpins classification, regression, computer vision, speech recognition, and language modeling.",
    officialRef: "PCEI-30-01 Block 1.1 - Pattern Recognition",
    tags: ["patterns", "classification", "core-concepts"]
  },
  {
    id: "pcei-1-018",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "Symbolic Grounding",
    difficulty: "Advanced",
    question: "What is the 'Symbol Grounding Problem' in artificial intelligence theory?",
    codeSnippet: "# The challenge: How do internal symbols gain real-world meaning?\nsymbol = 'cup'\n# Does the machine know what a physical cup feels, holds, or does?",
    options: [
      "How to connect abstract computational symbols to physical, sensory experiences and real-world semantic meaning",
      "How to convert 32-bit floating point numbers to 64-bit integers without overflow",
      "How to ensure ground wires in electrical server racks prevent power surges",
      "How to serialize Python dictionary keys into alphabetical JSON strings"
    ],
    correctAnswer: 0,
    explanation: "The Symbol Grounding Problem questions how abstract symbols inside a computer system can acquire genuine meaning related to external, physical reality, rather than just referring to other meaningless symbols.",
    officialRef: "PCEI-30-01 Block 1.1 - Symbol Grounding",
    tags: ["semantics", "grounding", "philosophy"]
  },
  {
    id: "pcei-1-019",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "Embodied AI",
    difficulty: "Intermediate",
    question: "What distinguishes 'Embodied AI' from disembodied software agents like chatbots?",
    codeSnippet: "# Embodied AI interaction:\nrobot_state = {'sensor_inputs': camera_feed, 'motor_actuators': wheel_motors}",
    options: [
      "Embodied AI operates within physical or simulated physical bodies that perceive and interact directly with a physical environment",
      "Embodied AI is strictly restricted to text-only terminal prompts",
      "Embodied AI does not use electricity to compute outputs",
      "Embodied AI cannot run machine learning algorithms"
    ],
    correctAnswer: 0,
    explanation: "Embodied AI refers to AI systems embedded in physical agents (like robots or autonomous vehicles) or physics simulators, which interact dynamically with the physical world through sensors and physical actuators.",
    officialRef: "PCEI-30-01 Block 1.1 - Embodied AI",
    tags: ["embodied-ai", "robotics", "sensors"]
  },
  {
    id: "pcei-1-020",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.1",
    category: "Automated Reasoning",
    difficulty: "Intermediate",
    question: "In classical AI, what is 'Forward Chaining' in an expert rule-based system?",
    codeSnippet: "# Forward chaining (Data-driven):\n# Start with known facts -> apply rules -> infer new facts\nfacts = {'has_feathers', 'lays_eggs'}\n# Rule: has_feathers and lays_eggs => bird\nif 'has_feathers' in facts and 'lays_eggs' in facts:\n    facts.add('bird')",
    options: [
      "Starting with known facts and applying inference rules forward to extract new facts until a goal is reached",
      "Starting with a goal hypothesis and working backward to see if supporting evidence exists",
      "Chaining multiple GPU PCIe cards with copper bridge cables",
      "Encrypting data blocks in forward chronological order using AES"
    ],
    correctAnswer: 0,
    explanation: "Forward chaining is a data-driven reasoning method: it starts with known facts and asserts new facts by triggering matching IF-THEN rules until a conclusion or goal state is established.",
    officialRef: "PCEI-30-01 Block 1.1 - Forward Chaining",
    tags: ["reasoning", "forward-chaining", "expert-systems"]
  },
  {
    id: "pcei-1-021",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Intelligent Agents",
    difficulty: "Beginner",
    question: "In AI agent theory, what are the two core mechanisms through which an agent interacts with its environment?",
    codeSnippet: "# Agent-Environment interaction loop:\npercept = agent.sensor.read(environment)\naction = agent.decide(percept)\nagent.actuator.execute(action, environment)",
    options: [
      "Sensors to perceive and Actuators to act",
      "Monitors to display and Printers to output",
      "Compilers to parse and Linkers to bind",
      "CPUs to calculate and Fans to cool"
    ],
    correctAnswer: 0,
    explanation: "An AI agent perceives its environment through sensors (cameras, microphones, data feeds) and acts upon that environment using actuators (motors, network requests, screen outputs).",
    officialRef: "PCEI-30-01 Block 1.2 - Agent Architecture",
    tags: ["agents", "sensors", "actuators"]
  },
  {
    id: "pcei-1-022",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Rational Agent",
    difficulty: "Intermediate",
    question: "What defines a 'rational agent' according to standard AI architecture principles?",
    codeSnippet: "# Rationality principle:\n# An agent that selects an action expected to maximize its performance measure",
    options: [
      "An agent that has human-like biological consciousness and emotional empathy",
      "An agent that always selects actions that maximize its expected performance measure given its percept history",
      "An agent that never makes any prediction mistakes even with zero training data",
      "An agent that only executes code written in pure functional programming languages"
    ],
    correctAnswer: 1,
    explanation: "In AI, a rational agent is one that acts so as to achieve the best outcome or, when there is uncertainty, the best expected outcome based on its performance measure and current knowledge.",
    officialRef: "PCEI-30-01 Block 1.2 - Rational Agents",
    tags: ["rationality", "agent-theory", "performance-measure"]
  },
  {
    id: "pcei-1-023",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Simple Reflex Agents",
    difficulty: "Beginner",
    question: "How does a 'Simple Reflex Agent' make decisions?",
    codeSnippet: "# Simple reflex agent logic:\ndef reflex_agent(percept):\n    if percept == 'dirty':\n        return 'clean'\n    return 'move_forward'",
    options: [
      "By consulting an internal long-term episodic memory database spanning multiple years",
      "By using condition-action rules based solely on the current immediate percept, ignoring history",
      "By running millions of Monte Carlo tree search simulations into the future",
      "By generating novel philosophical essays using transformer attention"
    ],
    correctAnswer: 1,
    explanation: "Simple reflex agents select actions based exclusively on the current percept, ignoring the history of past percepts (e.g., condition-action rules: IF dirty THEN vacuum).",
    officialRef: "PCEI-30-01 Block 1.2 - Simple Reflex Agent",
    tags: ["simple-reflex", "condition-action", "agents"]
  },
  {
    id: "pcei-1-024",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Model-Based Reflex Agents",
    difficulty: "Intermediate",
    question: "Why does a 'Model-Based Reflex Agent' maintain an internal state?",
    codeSnippet: "# Model-based agent:\nclass ModelAgent:\n    def __init__(self):\n        self.internal_state = {}  # Tracks unseen aspects of world\n    def update_state(self, percept):\n        self.internal_state['last_seen'] = percept",
    options: [
      "To track aspects of the environment that cannot be seen in the current percept alone (partially observable worlds)",
      "To store copyrighted training datasets indefinitely on local disk",
      "To run automated cryptocurrency mining scripts in the background",
      "To bypass operating system kernel security permissions"
    ],
    correctAnswer: 0,
    explanation: "In partially observable environments, the current sensor reading does not reveal the whole world state. A model-based agent maintains an internal state reflecting how the world evolves and how its own actions change the world.",
    officialRef: "PCEI-30-01 Block 1.2 - Model-Based Agent",
    tags: ["model-based", "internal-state", "partial-observability"]
  },
  {
    id: "pcei-1-025",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Goal-Based Agents",
    difficulty: "Intermediate",
    question: "What differentiates a 'Goal-Based Agent' from a reflex agent?",
    codeSnippet: "# Goal-based agent logic:\ndef plan_actions(current_state, goal_state):\n    # Searches for a path or sequence of actions leading to goal\n    return find_path(current_state, goal_state)",
    options: [
      "Goal-based agents combine state information with explicit goal descriptions to plan actions that achieve desired future states",
      "Goal-based agents do not use sensors or actuators",
      "Goal-based agents only run on mobile smartphones",
      "Goal-based agents cannot execute conditional logic"
    ],
    correctAnswer: 0,
    explanation: "Goal-based agents go beyond reflex responses by incorporating explicit goal information. They search and plan future sequences of actions that will lead to achieving the desired goal state.",
    officialRef: "PCEI-30-01 Block 1.2 - Goal-Based Agent",
    tags: ["goal-based", "planning", "search"]
  },
  {
    id: "pcei-1-026",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Utility-Based Agents",
    difficulty: "Intermediate",
    question: "What extra capability does a 'Utility-Based Agent' possess compared to a strictly goal-based agent?",
    codeSnippet: "# Utility evaluation:\ndef evaluate_action(action):\n    # Maps state to a real number indicating preference/happiness\n    return utility_function(resulting_state)",
    options: [
      "It measures and optimizes how desirable, efficient, or high-quality different paths to a goal are using a continuous utility function",
      "It can run without electrical power",
      "It translates natural language into binary machine code without an interpreter",
      "It replaces all database indexes with sorted linked lists"
    ],
    correctAnswer: 0,
    explanation: "Goals provide a crude binary distinction between happy (achieved) and unhappy states. A utility-based agent uses a utility function to score trade-offs, finding the best, quickest, cheapest, or safest way to succeed.",
    officialRef: "PCEI-30-01 Block 1.2 - Utility-Based Agent",
    tags: ["utility-function", "tradeoffs", "optimization"]
  },
  {
    id: "pcei-1-027",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Learning Agents",
    difficulty: "Intermediate",
    question: "What are the four conceptual components of a 'Learning Agent' architecture?",
    codeSnippet: "# Learning Agent architecture:\ncomponents = ['Learning element', 'Performance element', 'Critic', 'Problem generator']",
    options: [
      "Learning element, Performance element, Critic, and Problem generator",
      "Hard drive, RAM stick, CPU cache, and Motherboard",
      "Frontend HTML, Backend Flask, Database PostgreSQL, and Nginx proxy",
      "Keyboard, Mouse, Monitor, and Audio speakers"
    ],
    correctAnswer: 0,
    explanation: "A learning agent is separated into four components: the Learning element (makes improvements), the Performance element (selects external actions), the Critic (provides feedback against standards), and the Problem generator (suggests exploratory actions).",
    officialRef: "PCEI-30-01 Block 1.2 - Learning Agent",
    tags: ["learning-agent", "critic", "problem-generator"]
  },
  {
    id: "pcei-1-028",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Environment Properties",
    difficulty: "Intermediate",
    question: "What is the difference between a 'Fully Observable' and a 'Partially Observable' environment?",
    codeSnippet: "# Fully observable: Chess board (all pieces visible)\n# Partially observable: Poker game (opponents' cards hidden)",
    options: [
      "In a fully observable environment, an agent's sensors give complete access to the state of the world at any point in time",
      "Fully observable environments only exist in text files, while partially observable ones are strictly graphical",
      "Partially observable environments require no sensors",
      "Fully observable environments cannot run machine learning algorithms"
    ],
    correctAnswer: 0,
    explanation: "An environment is fully observable if sensors detect all aspects relevant to choice of action at any given time (like chess). It is partially observable if sensors have blind spots, noise, or hidden information (like poker or driving in fog).",
    officialRef: "PCEI-30-01 Block 1.2 - Observability",
    tags: ["fully-observable", "partially-observable", "environment"]
  },
  {
    id: "pcei-1-029",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Deterministic Environments",
    difficulty: "Beginner",
    question: "Why is chess considered a 'deterministic' environment while backgammon is 'stochastic'?",
    codeSnippet: "# Deterministic vs Stochastic game:\n# Chess: Next state determined entirely by current state and chosen move\n# Backgammon: Next state involves random dice roll",
    options: [
      "Chess involves rolling dice before each piece moves",
      "In chess, the next board state is completely determined by the current state and player's action; in backgammon, dice rolls introduce randomness",
      "Backgammon has no rules, whereas chess is completely unregulated",
      "Chess requires high-end neural networks to play legal moves"
    ],
    correctAnswer: 1,
    explanation: "In a deterministic environment, the next state is completely determined by the current state and the agent's action. If randomness or probability (like dice rolls or weather) is involved, it is stochastic.",
    officialRef: "PCEI-30-01 Block 1.2 - Determinism vs Stochasticity",
    tags: ["deterministic", "stochastic", "games"]
  },
  {
    id: "pcei-1-030",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Episodic vs Sequential",
    difficulty: "Intermediate",
    question: "What characterizes an 'Episodic' environment in AI agent design?",
    codeSnippet: "# Episodic task example: Defect classification in factory\n# The classification of part N does not affect whether part N+1 is defective",
    options: [
      "The agent's experience is divided into atomic episodes where current actions do not affect future episodes",
      "The agent must play an entire season of a television drama",
      "Every action permanently alters all future states for the rest of the agent's lifetime",
      "The agent can only execute commands once per calendar year"
    ],
    correctAnswer: 0,
    explanation: "In episodic environments, each episode consists of the agent perceiving and performing a single action. The quality of its action depends only on the episode itself, as current choices do not affect future episodes.",
    officialRef: "PCEI-30-01 Block 1.2 - Episodic Environments",
    tags: ["episodic", "sequential", "environment-types"]
  },
  {
    id: "pcei-1-031",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Static vs Dynamic",
    difficulty: "Beginner",
    question: "What distinguishes a 'Dynamic' environment from a 'Static' environment?",
    codeSnippet: "# Dynamic environment: Self-driving car in traffic (world changes while agent deliberates)\n# Static environment: Crossword puzzle (world waits indefinitely for user input)",
    options: [
      "The environment can change while the agent is deliberating or computing its next move",
      "The environment uses dynamic HTML rather than static CSS files",
      "The environment can only be stored on solid-state drives",
      "The environment automatically recompiles the Python interpreter"
    ],
    correctAnswer: 0,
    explanation: "An environment is dynamic if it changes while the agent is thinking (e.g., self-driving car in real-time traffic). It is static if it remains unchanged until the agent decides to act (e.g., solving a crossword puzzle).",
    officialRef: "PCEI-30-01 Block 1.2 - Static vs Dynamic",
    tags: ["dynamic", "static", "real-time"]
  },
  {
    id: "pcei-1-032",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Discrete vs Continuous",
    difficulty: "Intermediate",
    question: "Which of the following environments is considered 'Continuous' rather than 'Discrete'?",
    codeSnippet: "# Discrete: Chess positions, Go board squares\n# Continuous: Vehicle steering wheel angle, velocity, sensor telemetry",
    options: [
      "Chess board state representation",
      "Autonomous vehicle steering and speed control",
      "Tic-tac-toe grid coordinates",
      "Word count in a text document"
    ],
    correctAnswer: 1,
    explanation: "Continuous environments involve continuous quantities (like time, speed, temperature, coordinates, or steering angles). Chess and Tic-tac-toe have discrete, distinct states and turns.",
    officialRef: "PCEI-30-01 Block 1.2 - Discrete vs Continuous",
    tags: ["continuous", "discrete", "state-space"]
  },
  {
    id: "pcei-1-033",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Single vs Multi-Agent",
    difficulty: "Beginner",
    question: "What makes an environment 'Competitive Multi-Agent' rather than 'Cooperative Multi-Agent'?",
    codeSnippet: "# Competitive (Zero-Sum): Agent A's win is Agent B's loss\n# Cooperative: Both agents work together to maximize shared reward",
    options: [
      "Agents have opposing goals where one agent maximizing its utility minimizes another agent's utility",
      "All agents share the exact same reward function and pool their CPU power",
      "Agents cannot communicate over network sockets",
      "Only one agent has access to a Python compiler"
    ],
    correctAnswer: 0,
    explanation: "In competitive multi-agent environments (e.g., chess, poker), agents have conflicting goals (zero-sum). In cooperative environments, agents work together towards a common goal or shared utility function.",
    officialRef: "PCEI-30-01 Block 1.2 - Multi-Agent",
    tags: ["multi-agent", "competitive", "cooperative"]
  },
  {
    id: "pcei-1-034",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "PEAS Framework",
    difficulty: "Intermediate",
    question: "In AI design, what does the 'PEAS' framework stand for when specifying task environments?",
    codeSnippet: "# PEAS specification for an automated taxi:\npeas = {\n    'P': 'Performance measure (Safety, speed, comfort, legal compliance)',\n    'E': 'Environment (City roads, traffic, pedestrians)',\n    'A': 'Actuators (Steering, accelerator, brake, display)',\n    'S': 'Sensors (Cameras, LiDAR, speedometer, GPS)'\n}",
    options: [
      "Performance measure, Environment, Actuators, Sensors",
      "Processor, Ethernet, Audio, Storage",
      "Parallel execution, Asynchronous sockets, System calls",
      "Python environment, Anaconda distribution, Scripting"
    ],
    correctAnswer: 0,
    explanation: "PEAS (Performance measure, Environment, Actuators, Sensors) is the standard AI engineering framework for formally defining the complete specification of an agent's task environment.",
    officialRef: "PCEI-30-01 Block 1.2 - PEAS Framework",
    tags: ["peas", "specification", "agent-design"]
  },
  {
    id: "pcei-1-035",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Agent Program vs Function",
    difficulty: "Intermediate",
    question: "What is the theoretical difference between an 'Agent Function' and an 'Agent Program'?",
    codeSnippet: "# Mathematical mapping vs real implementation:\n# Agent Function: f: P* -> A (abstract mathematical mapping from percept sequences to actions)\n# Agent Program: Concrete Python code running on an architecture",
    options: [
      "The agent function is an abstract mathematical mapping from percept histories to actions, whereas the agent program is the concrete software implementation running on physical architecture",
      "Agent functions are written in C, while agent programs are written in Python",
      "Agent functions can only run on quantum computers",
      "There is no difference; they are exact technical synonyms in computer science"
    ],
    correctAnswer: 0,
    explanation: "Mathematically, the agent function is an abstract specification mapping any given percept sequence to an action: f: P* -> A. The agent program is the concrete algorithm executed on physical hardware.",
    officialRef: "PCEI-30-01 Block 1.2 - Agent Function vs Program",
    tags: ["agent-function", "agent-program", "theory"]
  },
  {
    id: "pcei-1-036",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Omniscience vs Rationality",
    difficulty: "Intermediate",
    question: "Why is 'Rationality' not the same as 'Omniscience' in AI agent theory?",
    codeSnippet: "# Rationality maximizes EXPECTED performance based on current information:\n# Omniscience knows the actual outcome of actions in advance",
    options: [
      "Omniscience knows the actual future outcome of its actions and is impossible in reality; rationality maximizes expected performance given what is known",
      "Rational agents can see through walls using infrared cameras",
      "Omniscient agents are slower than rational agents on CPU benchmarks",
      "Rational agents only operate on deterministic algorithms"
    ],
    correctAnswer: 0,
    explanation: "An omniscient agent knows the actual outcome of its actions and can act accordingly; but omniscience is impossible in reality. Rationality is concerned with expected success given the available perceptual evidence.",
    officialRef: "PCEI-30-01 Block 1.2 - Rationality vs Omniscience",
    tags: ["rationality", "omniscience", "expected-utility"]
  },
  {
    id: "pcei-1-037",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Autonomous Behavior",
    difficulty: "Beginner",
    question: "When is an AI agent said to exhibit 'Autonomy'?",
    codeSnippet: "# Autonomous behavior:\n# Extent to which agent behavior is determined by own experience rather than pre-programmed knowledge",
    options: [
      "When its behavior is determined by its own experience and learning rather than solely relying on the designer's prior built-in assumptions",
      "When it runs continuously without being plugged into electrical wall power",
      "When it refuses to follow software updates issued by developers",
      "When it has been granted legal citizenship by a government"
    ],
    correctAnswer: 0,
    explanation: "An agent is autonomous to the extent that its actions are guided by its own experience (learning and adapting) rather than solely by the initial knowledge programmed into it by its designer.",
    officialRef: "PCEI-30-01 Block 1.2 - Autonomy",
    tags: ["autonomy", "adaptation", "learning"]
  },
  {
    id: "pcei-1-038",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Exploration vs Exploitation",
    difficulty: "Intermediate",
    question: "In learning agents, what is the role of the 'Problem Generator' component?",
    codeSnippet: "# Exploration component in learning agents:\n# Suggests actions that lead to new experiences even if suboptimal in the short term",
    options: [
      "It intentionally crashes the operating system kernel to test stability",
      "It suggests exploratory actions that lead to new and informative experiences, discovering better strategies for the long term",
      "It writes unit tests for frontend user interfaces",
      "It prevents the agent from making any network requests"
    ],
    correctAnswer: 1,
    explanation: "The problem generator is responsible for suggesting actions that lead to new, informative experiences (exploration), ensuring the agent does not merely repeat known routines (exploitation).",
    officialRef: "PCEI-30-01 Block 1.2 - Problem Generator",
    tags: ["problem-generator", "exploration", "learning"]
  },
  {
    id: "pcei-1-039",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Reactive vs Deliberative",
    difficulty: "Intermediate",
    question: "What is the fundamental architectural trade-off between Reactive Agents and Deliberative Agents?",
    codeSnippet: "# Reactive: Fast response, no deep planning\n# Deliberative: Deep planning, slower response time",
    options: [
      "Reactive agents respond very quickly to stimuli but lack long-term foresight; deliberative agents plan ahead with internal models but have higher computational latency",
      "Reactive agents cannot be programmed in Python",
      "Deliberative agents are immune to all software bugs",
      "Reactive agents require GPUs, while deliberative agents require tape drives"
    ],
    correctAnswer: 0,
    explanation: "Reactive agents emphasize speed and immediate response to sensor data (reflexes). Deliberative agents maintain world models and use search/planning, which yields better long-term decisions but requires more time and compute.",
    officialRef: "PCEI-30-01 Block 1.2 - Reactive vs Deliberative",
    tags: ["reactive", "deliberative", "planning"]
  },
  {
    id: "pcei-1-040",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.2",
    category: "Software Agents / Bots",
    difficulty: "Beginner",
    question: "What is a common example of a purely software-based intelligent agent?",
    codeSnippet: "# Software agent in digital environment:\nweb_crawler = {'sensors': 'HTTP GET requests', 'actuators': 'URL queue updates and database writes'}",
    options: [
      "An autonomous search engine web scraper or algorithmic trading bot",
      "A hydraulic mechanical backhoe on a construction site",
      "A silicon wafer fabrication cleanroom ventilation duct",
      "A copper coaxial television cable"
    ],
    correctAnswer: 0,
    explanation: "Software agents (softbots) inhabit purely digital environments (like web servers, operating systems, or financial exchanges), using network requests as sensors and database updates or orders as actuators.",
    officialRef: "PCEI-30-01 Block 1.2 - Software Agents",
    tags: ["softbots", "web-crawlers", "software-agents"]
  },
  {
    id: "pcei-1-041",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Search Algorithms",
    difficulty: "Intermediate",
    question: "Which graph traversal search strategy explores the shallowest unexpanded nodes first using a FIFO (first-in, first-out) queue?",
    codeSnippet: "# Graph search using queue:\nfrom collections import deque\nqueue = deque([start_node])\n# Breadth-First Search (BFS)",
    options: [
      "Depth-First Search (DFS)",
      "Breadth-First Search (BFS)",
      "Depth-Limited Search",
      "Genetic Algorithm Selection"
    ],
    correctAnswer: 1,
    explanation: "Breadth-First Search (BFS) systematically expands the root node first, then all successors at depth 1, then depth 2. It uses a FIFO queue and is guaranteed to find the shortest path in unweighted graphs.",
    officialRef: "PCEI-30-01 Block 1.3 - Search Algorithms",
    tags: ["bfs", "graph-search", "queues"]
  },
  {
    id: "pcei-1-042",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Search Algorithms",
    difficulty: "Intermediate",
    question: "What is the main advantage of Depth-First Search (DFS) over Breadth-First Search (BFS) in large search spaces?",
    codeSnippet: "# Memory footprint comparison:\n# BFS: O(b^d) memory (exponential in depth)\n# DFS: O(b * m) memory (linear in max depth)",
    options: [
      "DFS has vastly lower memory requirements because it only needs to store nodes on the current path",
      "DFS is guaranteed to find the shortest path in all graphs",
      "DFS never gets stuck in infinite loops in graphs with cycles",
      "DFS requires zero CPU cycles to execute"
    ],
    correctAnswer: 0,
    explanation: "DFS requires only O(b*m) space (linear in maximum search depth m for branching factor b), whereas BFS must keep all generated nodes in memory (O(b^d)), which quickly exhausts RAM.",
    officialRef: "PCEI-30-01 Block 1.3 - DFS vs BFS",
    tags: ["dfs", "bfs", "memory-complexity"]
  },
  {
    id: "pcei-1-043",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Informed Search",
    difficulty: "Advanced",
    question: "In the A* search algorithm, what does the evaluation function f(n) = g(n) + h(n) represent?",
    codeSnippet: "# A* evaluation formula:\n# g(n): exact cost to reach node n from start\n# h(n): estimated heuristic cost from node n to goal\nf_cost = g_cost + h_cost",
    options: [
      "f(n) is the total estimated cost of the cheapest solution path through node n",
      "f(n) is the number of CPU threads multiplied by RAM bandwidth",
      "f(n) is the probability of a network packet collision",
      "f(n) is the loss function of a convolutional neural network"
    ],
    correctAnswer: 0,
    explanation: "In A* search, g(n) is the known path cost from start to node n, and h(n) is the heuristic estimate of the cost from node n to the goal. f(n) is the estimated total cost through node n.",
    officialRef: "PCEI-30-01 Block 1.3 - A* Search",
    tags: ["a-star", "heuristic-search", "evaluation-function"]
  },
  {
    id: "pcei-1-044",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Heuristic Admissibility",
    difficulty: "Advanced",
    question: "What condition must a heuristic h(n) satisfy to be considered 'admissible' in A* search?",
    codeSnippet: "# Admissible heuristic condition:\n# h(n) <= h*(n), where h*(n) is the true optimal cost to goal\n# It must NEVER overestimate the true cost",
    options: [
      "It must never overestimate the true minimum cost to reach the goal state",
      "It must always return negative numbers",
      "It must calculate floating-point numbers to at least 128 bits of precision",
      "It must overestimate costs by at least 50% to ensure safety margins"
    ],
    correctAnswer: 0,
    explanation: "An admissible heuristic is an optimistic estimate: it never overestimates the actual cost to reach the goal (h(n) <= true cost). Admissibility guarantees that A* tree search finds the optimal solution.",
    officialRef: "PCEI-30-01 Block 1.3 - Admissibility",
    tags: ["admissibility", "a-star", "optimality"]
  },
  {
    id: "pcei-1-045",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Game Theory Search",
    difficulty: "Intermediate",
    question: "What is the primary purpose of the 'Minimax' algorithm in two-player zero-sum adversarial games like Chess or Tic-Tac-Toe?",
    codeSnippet: "# Minimax principle:\n# MAX player seeks to maximize score\n# MIN player seeks to minimize MAX's score",
    options: [
      "To maximize the player's worst-case payoff assuming the opponent plays optimally",
      "To randomly guess the opponent's moves using a dice generator",
      "To verify that the computer's CPU temperature remains below 70\u00b0C",
      "To compress board states using gzip archive compression"
    ],
    correctAnswer: 0,
    explanation: "The Minimax algorithm determines the optimal move for a player assuming that the opponent is also playing optimally, maximizing the player's minimum possible gain (minimizing the maximum loss).",
    officialRef: "PCEI-30-01 Block 1.3 - Minimax",
    tags: ["minimax", "game-theory", "adversarial-search"]
  },
  {
    id: "pcei-1-046",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Search Optimization",
    difficulty: "Advanced",
    question: "How does 'Alpha-Beta Pruning' improve the computational efficiency of the Minimax algorithm?",
    codeSnippet: "# Alpha-Beta pruning condition:\n# If beta <= alpha, prune the remaining branches of this node",
    options: [
      "It eliminates branches of the search tree that cannot possibly influence the final decision, reducing the effective branching factor",
      "It simplifies the game rules by removing half of the opponent's pieces",
      "It replaces recursive function calls with simple regular expressions",
      "It runs exclusively on decentralized blockchain networks"
    ],
    correctAnswer: 0,
    explanation: "Alpha-Beta pruning returns the same optimal move as Minimax while skipping (pruning) subtrees that are mathematically proven to be inferior to moves already examined, doubling the searchable search depth.",
    officialRef: "PCEI-30-01 Block 1.3 - Alpha-Beta Pruning",
    tags: ["alpha-beta", "pruning", "minimax"]
  },
  {
    id: "pcei-1-047",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Knowledge Representation",
    difficulty: "Intermediate",
    question: "In AI knowledge representation, what is an 'Ontology'?",
    codeSnippet: "# Conceptual ontology definition:\nontology = {\n    'classes': ['Animal', 'Mammal', 'Canine'],\n    'relations': ['is_a', 'has_part'],\n    'properties': ['warm_blooded', 'barks']\n}",
    options: [
      "A formal, explicit specification of shared concepts, categories, properties, and relationships within a specific domain of knowledge",
      "The hardware firmware stored inside a computer's BIOS chip",
      "A unit test framework for checking Python variable naming conventions",
      "An encrypted cryptographic key used for SSH server authentication"
    ],
    correctAnswer: 0,
    explanation: "An ontology is a formal representation of domain knowledge consisting of concepts (classes), attributes, relationships, and axioms that enable machines to reason about entities in that domain.",
    officialRef: "PCEI-30-01 Block 1.3 - Ontologies",
    tags: ["ontology", "knowledge-representation", "semantics"]
  },
  {
    id: "pcei-1-048",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Semantic Networks",
    difficulty: "Beginner",
    question: "How do 'Semantic Networks' represent knowledge visually and computationally?",
    codeSnippet: "# Semantic network structure:\n# Nodes represent concepts/objects\n# Edges represent relationships (e.g., 'is-a', 'has-a')\n# 'Canary' --(is-a)--> 'Bird' --(can)--> 'Fly'",
    options: [
      "As a graph data structure where nodes represent concepts/objects and directed labeled edges represent relationships between them",
      "As a flat comma-separated text file of raw floating-point numbers",
      "As a series of animated video frames",
      "As binary machine language opcodes"
    ],
    correctAnswer: 0,
    explanation: "Semantic networks represent knowledge using graphs: vertices (nodes) represent objects, concepts, or situations, and directed edges represent semantic relationships (such as 'is-a', 'has-a', or 'part-of').",
    officialRef: "PCEI-30-01 Block 1.3 - Semantic Networks",
    tags: ["semantic-networks", "graphs", "knowledge-graphs"]
  },
  {
    id: "pcei-1-049",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "Propositional Logic",
    difficulty: "Intermediate",
    question: "In propositional logic, if P is True and Q is False, what is the truth value of the implication 'P -> Q'?",
    codeSnippet: "# Truth table for logical implication (P -> Q):\n# True -> False evaluates to False\nP = True\nQ = False\nimplication = (not P) or Q\nprint(implication)  # Output: False",
    options: [
      "True",
      "False",
      "None",
      "Indeterminate"
    ],
    correctAnswer: 1,
    explanation: "In formal logic, an implication (P -> Q) is only False when the antecedent (P) is True and the consequent (Q) is False. In all other cases, implication evaluates to True.",
    officialRef: "PCEI-30-01 Block 1.3 - Propositional Logic",
    tags: ["logic", "implication", "truth-tables"]
  },
  {
    id: "pcei-1-050",
    track: 'pcei',
    section: "Section 1",
    chapter: "1.3",
    category: "First-Order Logic",
    difficulty: "Intermediate",
    question: "What expressive capability does 'First-Order Logic' (Predicate Logic) add over basic Propositional Logic?",
    codeSnippet: "# First-Order Logic elements:\n# Predicates, objects, functions, and quantifiers: forall (\u2200), exists (\u2203)\n# \u2200x (Human(x) -> Mortal(x))",
    options: [
      "Objects, predicates, functions, and quantifiers (Universal: \u2200 'for all', Existential: \u2203 'there exists')",
      "Graphical user interface buttons and CSS color styling",
      "Asynchronous event loops and thread pooling",
      "Binary file compression algorithms"
    ],
    correctAnswer: 0,
    explanation: "Unlike propositional logic (which treats whole propositions as indivisible atoms), first-order logic can represent objects, relations/predicates between objects, and universal/existential quantifiers (\u2200 and \u2203).",
    officialRef: "PCEI-30-01 Block 1.3 - First-Order Logic",
    tags: ["first-order-logic", "predicates", "quantifiers"]
  }
];
