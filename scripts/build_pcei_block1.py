#!/usr/bin/env python3
"""
Generator for PCEI Block 1: Artificial Intelligence Fundamentals (100 Cards)
Covers Chapters 1.1 - 1.5 for PCEI-30-01.
"""
import json

cards = []

def add_c(id_num, chap, cat, diff, q, snippet, opts, ans, exp, ref, tags):
    cards.append({
        "id": f"pcei-1-{id_num:03d}",
        "section": "Section 1",
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
# CHAPTER 1.1: Core AI Concepts, Subfields & Definitions (Cards 1-20)
# ==========================================
add_c(1, "1.1", "AI Fundamentals", "Beginner",
      "Which definition best describes Artificial Intelligence (AI) in computer science?",
      "# Conceptual definition of AI:\nsystem = {'capability': 'simulate human intelligence and reasoning', 'methods': ['learning', 'perception', 'problem-solving']}",
      ["The hardware architecture of multi-core graphics processing units (GPUs)",
       "The simulation of human intelligence and cognitive capabilities by computer systems",
       "The automated conversion of Python bytecode into native machine assembly",
       "A relational database management system optimized for rapid SQL queries"],
      1,
      "Artificial Intelligence (AI) refers to the simulation of human intelligence processes by computer systems, including learning, reasoning, pattern recognition, and self-correction.",
      "PCEI-30-01 Block 1.1 - Core AI Concepts",
      ["ai-definitions", "fundamentals", "overview"])

add_c(2, "1.1", "AI Subfields", "Beginner",
      "What is the difference between Narrow AI (Weak AI) and Artificial General Intelligence (AGI)?",
      "# Narrow AI vs AGI:\nspam_filter = {'domain': 'text classification', 'type': 'Narrow AI'}\nhypothetical_agi = {'domain': 'universal cognitive capabilities', 'type': 'AGI'}",
      ["Narrow AI runs only on microcontrollers, whereas AGI runs on cloud servers",
       "Narrow AI is designed for a specific dedicated task, whereas AGI possesses universal human-like cognitive abilities across any domain",
       "Narrow AI requires quantum computing, whereas AGI uses standard CPU threads",
       "Narrow AI is strictly open-source, whereas AGI is proprietary software"],
      1,
      "Narrow AI (or Weak AI) is trained and focused to perform a single specific task (like spam filtering or chess). Artificial General Intelligence (AGI) is a theoretical form of AI with generalized human-grade cognitive abilities across any intellectual task.",
      "PCEI-30-01 Block 1.1 - Narrow AI vs AGI",
      ["narrow-ai", "agi", "taxonomy"])

add_c(3, "1.1", "AI History & Tests", "Intermediate",
      "What was the original purpose of Alan Turing's 'Imitation Game' (the Turing Test)?",
      "# The Turing Test concept:\ndef turing_test(interrogator, response_a, response_b):\n    # Can human judge distinguish human vs machine?\n    return interrogator.guess_machine() == actual_machine",
      ["To determine if a computer can execute 1 billion floating-point instructions per second",
       "To evaluate whether a machine can exhibit conversational behavior indistinguishable from that of a human",
       "To verify that an operating system kernel is free from memory leaks and race conditions",
       "To measure the cryptographic entropy of an automated pseudo-random number generator"],
      1,
      "The Turing Test, introduced by Alan Turing in 1950, tests a machine's ability to exhibit intelligent conversational behavior indistinguishable from, or equivalent to, that of a human.",
      "PCEI-30-01 Block 1.1 - Turing Test",
      ["turing-test", "history", "evaluation"])

add_c(4, "1.1", "AI Paradigms", "Intermediate",
      "How does 'Symbolic AI' (Good Old-Fashioned AI / GOFAI) fundamentally differ from modern 'Connectionist' or statistical AI?",
      "# Symbolic AI (explicit rules):\nif temperature > 38.0 and cough:\n    diagnosis = 'Fever'\n\n# Connectionist AI (learned weights from data):\nprediction = model.predict(patient_features)",
      ["Symbolic AI relies on explicit human-coded rules and logic representations, whereas Connectionist AI learns patterns and weights from raw data",
       "Symbolic AI only operates on images, while Connectionist AI only operates on integers",
       "Symbolic AI requires deep neural network backpropagation, while Connectionist AI uses if-then statements",
       "Symbolic AI is non-deterministic, while Connectionist AI is purely hardcoded"],
      0,
      "Symbolic AI operates on high-level human-readable symbols, logic, and explicit expert rules. Modern connectionist/machine learning approaches learn statistical representations and numerical weights automatically from empirical data.",
      "PCEI-30-01 Block 1.1 - AI Paradigms",
      ["symbolic-ai", "connectionism", "expert-systems"])

add_c(5, "1.1", "Superintelligence", "Beginner",
      "What term describes a hypothetical future AI that surpasses human intellectual capabilities across virtually all economically and creatively valuable domains?",
      "# Future intelligence taxonomy:\nlevels = ['Narrow AI', 'Artificial General Intelligence (AGI)', 'Artificial Superintelligence (ASI)']",
      ["Artificial Superintelligence (ASI)", "Deterministic Sub-Agent", "Edge Computing Unit", "Quantum Bit Register"],
      0,
      "Artificial Superintelligence (ASI) refers to an intellect that is much smarter than the best human brains in practically every field, including scientific creativity, general wisdom, and social skills.",
      "PCEI-30-01 Block 1.1 - AI Taxonomy",
      ["asi", "superintelligence", "concepts"])

add_c(6, "1.1", "Chinese Room", "Intermediate",
      "What core philosophical critique does John Searle's 'Chinese Room' thought experiment argue against Strong AI?",
      "# Searle's Chinese Room argument:\n# Syntactic manipulation of symbols does not equal semantic understanding",
      ["Computers can never process non-English natural languages",
       "Syntax manipulation and rule-following do not equate to genuine semantic understanding or consciousness",
       "Neural networks cannot scale beyond 1000 hidden layers",
       "Hardware chips will overheat when simulating recursive functions"],
      1,
      "Searle's Chinese Room thought experiment argues that a program merely manipulating formal symbols according to programmatic rules (syntax) does not possess true semantic understanding or intentionality.",
      "PCEI-30-01 Block 1.1 - Chinese Room",
      ["philosophy", "semantics", "understanding"])

add_c(7, "1.1", "Cognitive Computing", "Beginner",
      "What is the primary focus of 'Cognitive Computing' systems?",
      "# Cognitive computing goal:\nfeature = 'Augment human decision-making by simulating human thought processes in complex, ambiguous environments'",
      ["Replacing all human workers in mechanical assembly lines",
       "Simulating human thought processes to assist and augment human decision-making in ambiguous domains",
       "Designing physical chassis hardware for humanoid bipedal robots",
       "Formatting relational SQL tables into third normal form"],
      1,
      "Cognitive computing mimics human brain functioning to help humans make better decisions when analyzing massive, ambiguous, and unstructured datasets.",
      "PCEI-30-01 Block 1.1 - Cognitive Computing",
      ["cognitive-computing", "decision-support", "applications"])

add_c(8, "1.1", "AI Subfields", "Beginner",
      "Which of the following is considered a primary subfield of Artificial Intelligence?",
      "ai_subfields = ['Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Robotics']",
      ["Machine Learning (ML)", "Hypertext Transfer Protocol (HTTP)", "Relational Database Indexing", "Static HTML Layout Design"],
      0,
      "Machine Learning, Computer Vision, Natural Language Processing, and Robotics are primary subfields under the broader umbrella of Artificial Intelligence.",
      "PCEI-30-01 Block 1.1 - AI Subfields",
      ["subfields", "taxonomy", "ml"])

add_c(9, "1.1", "AI Hierarchy", "Beginner",
      "What is the hierarchical relationship between AI, Machine Learning (ML), and Deep Learning (DL)?",
      "# Nesting relationship:\n# AI contains ML, and ML contains DL\nassert 'Deep Learning' in 'Machine Learning' and 'Machine Learning' in 'Artificial Intelligence'",
      ["DL is the broadest field, containing ML, which contains AI",
       "AI is the broadest field; ML is a subset of AI; DL is a subset of ML based on multi-layered neural networks",
       "ML and AI are completely unrelated competitors to DL",
       "DL is hardware-only, ML is database-only, and AI is web-only"],
      1,
      "AI is the overarching discipline. Machine Learning is a subset of AI focusing on learning from data. Deep Learning is a specialized subset of ML utilizing multi-layered artificial neural networks.",
      "PCEI-30-01 Block 1.1 - AI Hierarchy",
      ["hierarchy", "deep-learning", "ml"])

add_c(10, "1.1", "Data-Driven AI", "Beginner",
      "Why has the resurgence of modern AI in recent decades been largely driven by Machine Learning rather than Symbolic AI?",
      "# Factors enabling modern AI:\nenablers = ['Big Data availability', 'High-performance GPUs/TPUs', 'Advanced statistical learning algorithms']",
      ["Rule-based systems became illegal under international copyright laws",
       "Massive availability of data, exponential increases in compute power (GPUs), and flexible statistical algorithms",
       "Computer programming languages eliminated support for Boolean logic",
       "Computers can no longer execute conditional if-else statements"],
      1,
      "The modern AI boom is fueled by three converging drivers: the explosion of digital training data (Big Data), specialized parallel computing hardware (GPUs/TPUs), and breakthrough statistical learning algorithms.",
      "PCEI-30-01 Block 1.1 - Modern AI Drivers",
      ["drivers", "big-data", "gpus"])

add_c(11, "1.1", "Expert Systems", "Intermediate",
      "Which component is a fundamental building block of a classical Expert System?",
      "# Architecture of an Expert System:\nexpert_system = {\n    'knowledge_base': 'Rules and facts domain expertise',\n    'inference_engine': 'Deductive reasoning engine'\n}",
      ["A backpropagation gradient optimizer", "A knowledge base paired with an inference engine", "A convolutional pooling layer", "A multi-head self-attention tensor"],
      1,
      "Traditional expert systems consist of a knowledge base (containing domain-specific facts and heuristic IF-THEN rules) and an inference engine (which applies logical rules to deduce conclusions).",
      "PCEI-30-01 Block 1.1 - Expert Systems",
      ["expert-systems", "knowledge-base", "inference"])

add_c(12, "1.1", "Heuristics", "Intermediate",
      "In the context of artificial intelligence problem-solving, what is a 'heuristic'?",
      "# A heuristic function h(n) estimates distance to goal:\ndef manhattan_distance(x1, y1, x2, y2):\n    return abs(x1 - x2) + abs(y1 - y2)",
      ["A mathematical guarantee that an algorithm will run in constant O(1) time",
       "A practical rule of thumb or shortcut that estimates a solution when finding an optimal solution is computationally impractical",
       "An unrecoverable system crash caused by infinite recursion",
       "A hardware device used to measure CPU thermal output"],
      1,
      "A heuristic is an informed estimate, rule of thumb, or shortcut used in algorithms to speed up the process of finding a satisfactory solution when exhaustive search is too computationally expensive.",
      "PCEI-30-01 Block 1.1 - Heuristics",
      ["heuristics", "problem-solving", "search"])

add_c(13, "1.1", "Deterministic vs Stochastic", "Intermediate",
      "What does it mean if an AI decision model is 'deterministic'?",
      "# Deterministic function example:\ndef add_constant(x):\n    return x + 5  # Same input ALWAYS yields exact same output",
      ["The model incorporates random Gaussian noise into every execution",
       "Given the exact same input, the model will always produce the exact same output",
       "The model runs exclusively on decentralized blockchain nodes",
       "The model requires human intervention before every calculation"],
      1,
      "A deterministic system produces identical outputs whenever given the exact same initial state and inputs, without randomness or probabilistic variation.",
      "PCEI-30-01 Block 1.1 - Deterministic Models",
      ["deterministic", "probability", "reproducibility"])

add_c(14, "1.1", "Stochastic Systems", "Beginner",
      "Why are many modern generative AI models and reinforcement learning agents described as 'stochastic'?",
      "# Sampling with probability distribution:\nimport random\ntokens = ['apple', 'banana', 'cherry']\nprobs = [0.7, 0.2, 0.1]\nchosen = random.choices(tokens, weights=probs)[0]",
      ["They contain elements of randomness and probabilistic sampling in their decision-making or output generation",
       "They are physically broken and cannot execute arithmetic instructions",
       "They only run on analog mechanical clocks",
       "They never produce answers in human languages"],
      0,
      "Stochastic models involve randomness or probability distributions. For instance, LLMs use temperature and top-p sampling to select the next token probabilistically, yielding different creative variations.",
      "PCEI-30-01 Block 1.1 - Stochastic Systems",
      ["stochastic", "probability", "sampling"])

add_c(15, "1.1", "Inductive vs Deductive", "Intermediate",
      "How does 'inductive reasoning' (characteristic of Machine Learning) differ from 'deductive reasoning' (characteristic of Rule-Based Logic)?",
      "# Inductive (ML): Specific observations -> General rule\n# Deductive (Logic): General premise -> Specific conclusion",
      ["Inductive reasoning infers general patterns from specific observed data, whereas deductive reasoning derives specific facts from general rules and axioms",
       "Inductive reasoning only works on audio files, whereas deductive reasoning works on video",
       "Inductive reasoning requires 100% mathematical certainty, while deductive reasoning is always probabilistic",
       "Deductive reasoning is illegal in commercial cloud deployments"],
      0,
      "Deductive logic moves from generalized premises to a specific, guaranteed conclusion. Inductive reasoning (the core of ML) observes specific examples and generalizes predictive models from those patterns.",
      "PCEI-30-01 Block 1.1 - Inductive vs Deductive",
      ["inductive", "deductive", "reasoning"])

add_c(16, "1.1", "AI Winter", "Beginner",
      "What historical phenomenon does the term 'AI Winter' describe?",
      "# AI historical cycles:\nperiods = ['Initial Optimism (1950s-60s)', 'First AI Winter (1970s)', 'Expert Systems Boom (1980s)', 'Second AI Winter (late 80s-90s)', 'Deep Learning Revolution (2010s+)']",
      ["A severe software bug caused by date rollovers in December",
       "A period of reduced funding, commercial interest, and public skepticism following overhyped expectations and unmet AI promises",
       "A cooling technology designed to keep high-density GPU data centers cold",
       "The hibernation mode triggered when laptop batteries fall below 10%"],
      1,
      "An 'AI Winter' refers to a historical downturn in research funding and commercial investment in AI, occurring when inflated expectations failed to materialize (notably in the 1970s and late 1980s).",
      "PCEI-30-01 Block 1.1 - AI Winter",
      ["history", "ai-winter", "trends"])

add_c(17, "1.1", "Pattern Recognition", "Beginner",
      "Why is pattern recognition considered the foundational cornerstone of modern applied AI?",
      "# Pattern recognition concept:\nfeatures = [2.5, 3.1, 1.8]\npredicted_class = classifier.predict([features])",
      ["It enables algorithms to detect regularities, correlations, and structures in complex datasets to categorize or predict unseen instances",
       "It allows monitors to display graphical user interfaces without video drivers",
       "It converts Python source files directly into compiled C++ headers",
       "It automates network cable routing inside server rooms"],
      0,
      "Pattern recognition is the automated identification of patterns and regularities in data. It underpins classification, regression, computer vision, speech recognition, and language modeling.",
      "PCEI-30-01 Block 1.1 - Pattern Recognition",
      ["patterns", "classification", "core-concepts"])

add_c(18, "1.1", "Symbolic Grounding", "Advanced",
      "What is the 'Symbol Grounding Problem' in artificial intelligence theory?",
      "# The challenge: How do internal symbols gain real-world meaning?\nsymbol = 'cup'\n# Does the machine know what a physical cup feels, holds, or does?",
      ["How to connect abstract computational symbols to physical, sensory experiences and real-world semantic meaning",
       "How to convert 32-bit floating point numbers to 64-bit integers without overflow",
       "How to ensure ground wires in electrical server racks prevent power surges",
       "How to serialize Python dictionary keys into alphabetical JSON strings"],
      0,
      "The Symbol Grounding Problem questions how abstract symbols inside a computer system can acquire genuine meaning related to external, physical reality, rather than just referring to other meaningless symbols.",
      "PCEI-30-01 Block 1.1 - Symbol Grounding",
      ["semantics", "grounding", "philosophy"])

add_c(19, "1.1", "Embodied AI", "Intermediate",
      "What distinguishes 'Embodied AI' from disembodied software agents like chatbots?",
      "# Embodied AI interaction:\nrobot_state = {'sensor_inputs': camera_feed, 'motor_actuators': wheel_motors}",
      ["Embodied AI operates within physical or simulated physical bodies that perceive and interact directly with a physical environment",
       "Embodied AI is strictly restricted to text-only terminal prompts",
       "Embodied AI does not use electricity to compute outputs",
       "Embodied AI cannot run machine learning algorithms"],
      0,
      "Embodied AI refers to AI systems embedded in physical agents (like robots or autonomous vehicles) or physics simulators, which interact dynamically with the physical world through sensors and physical actuators.",
      "PCEI-30-01 Block 1.1 - Embodied AI",
      ["embodied-ai", "robotics", "sensors"])

add_c(20, "1.1", "Automated Reasoning", "Intermediate",
      "In classical AI, what is 'Forward Chaining' in an expert rule-based system?",
      "# Forward chaining (Data-driven):\n# Start with known facts -> apply rules -> infer new facts\nfacts = {'has_feathers', 'lays_eggs'}\n# Rule: has_feathers and lays_eggs => bird\nif 'has_feathers' in facts and 'lays_eggs' in facts:\n    facts.add('bird')",
      ["Starting with known facts and applying inference rules forward to extract new facts until a goal is reached",
       "Starting with a goal hypothesis and working backward to see if supporting evidence exists",
       "Chaining multiple GPU PCIe cards with copper bridge cables",
       "Encrypting data blocks in forward chronological order using AES"],
      0,
      "Forward chaining is a data-driven reasoning method: it starts with known facts and asserts new facts by triggering matching IF-THEN rules until a conclusion or goal state is established.",
      "PCEI-30-01 Block 1.1 - Forward Chaining",
      ["reasoning", "forward-chaining", "expert-systems"])

# ==========================================
# CHAPTER 1.2: AI Agents, Environments & Architectures (Cards 21-40)
# ==========================================
add_c(21, "1.2", "Intelligent Agents", "Beginner",
      "In AI agent theory, what are the two core mechanisms through which an agent interacts with its environment?",
      "# Agent-Environment interaction loop:\npercept = agent.sensor.read(environment)\naction = agent.decide(percept)\nagent.actuator.execute(action, environment)",
      ["Sensors to perceive and Actuators to act",
       "Monitors to display and Printers to output",
       "Compilers to parse and Linkers to bind",
       "CPUs to calculate and Fans to cool"],
      0,
      "An AI agent perceives its environment through sensors (cameras, microphones, data feeds) and acts upon that environment using actuators (motors, network requests, screen outputs).",
      "PCEI-30-01 Block 1.2 - Agent Architecture",
      ["agents", "sensors", "actuators"])

add_c(22, "1.2", "Rational Agent", "Intermediate",
      "What defines a 'rational agent' according to standard AI architecture principles?",
      "# Rationality principle:\n# An agent that selects an action expected to maximize its performance measure",
      ["An agent that has human-like biological consciousness and emotional empathy",
       "An agent that always selects actions that maximize its expected performance measure given its percept history",
       "An agent that never makes any prediction mistakes even with zero training data",
       "An agent that only executes code written in pure functional programming languages"],
      1,
      "In AI, a rational agent is one that acts so as to achieve the best outcome or, when there is uncertainty, the best expected outcome based on its performance measure and current knowledge.",
      "PCEI-30-01 Block 1.2 - Rational Agents",
      ["rationality", "agent-theory", "performance-measure"])

add_c(23, "1.2", "Simple Reflex Agents", "Beginner",
      "How does a 'Simple Reflex Agent' make decisions?",
      "# Simple reflex agent logic:\ndef reflex_agent(percept):\n    if percept == 'dirty':\n        return 'clean'\n    return 'move_forward'",
      ["By consulting an internal long-term episodic memory database spanning multiple years",
       "By using condition-action rules based solely on the current immediate percept, ignoring history",
       "By running millions of Monte Carlo tree search simulations into the future",
       "By generating novel philosophical essays using transformer attention"],
      1,
      "Simple reflex agents select actions based exclusively on the current percept, ignoring the history of past percepts (e.g., condition-action rules: IF dirty THEN vacuum).",
      "PCEI-30-01 Block 1.2 - Simple Reflex Agent",
      ["simple-reflex", "condition-action", "agents"])

add_c(24, "1.2", "Model-Based Reflex Agents", "Intermediate",
      "Why does a 'Model-Based Reflex Agent' maintain an internal state?",
      "# Model-based agent:\nclass ModelAgent:\n    def __init__(self):\n        self.internal_state = {}  # Tracks unseen aspects of world\n    def update_state(self, percept):\n        self.internal_state['last_seen'] = percept",
      ["To track aspects of the environment that cannot be seen in the current percept alone (partially observable worlds)",
       "To store copyrighted training datasets indefinitely on local disk",
       "To run automated cryptocurrency mining scripts in the background",
       "To bypass operating system kernel security permissions"],
      0,
      "In partially observable environments, the current sensor reading does not reveal the whole world state. A model-based agent maintains an internal state reflecting how the world evolves and how its own actions change the world.",
      "PCEI-30-01 Block 1.2 - Model-Based Agent",
      ["model-based", "internal-state", "partial-observability"])

add_c(25, "1.2", "Goal-Based Agents", "Intermediate",
      "What differentiates a 'Goal-Based Agent' from a reflex agent?",
      "# Goal-based agent logic:\ndef plan_actions(current_state, goal_state):\n    # Searches for a path or sequence of actions leading to goal\n    return find_path(current_state, goal_state)",
      ["Goal-based agents combine state information with explicit goal descriptions to plan actions that achieve desired future states",
       "Goal-based agents do not use sensors or actuators",
       "Goal-based agents only run on mobile smartphones",
       "Goal-based agents cannot execute conditional logic"],
      0,
      "Goal-based agents go beyond reflex responses by incorporating explicit goal information. They search and plan future sequences of actions that will lead to achieving the desired goal state.",
      "PCEI-30-01 Block 1.2 - Goal-Based Agent",
      ["goal-based", "planning", "search"])

add_c(26, "1.2", "Utility-Based Agents", "Intermediate",
      "What extra capability does a 'Utility-Based Agent' possess compared to a strictly goal-based agent?",
      "# Utility evaluation:\ndef evaluate_action(action):\n    # Maps state to a real number indicating preference/happiness\n    return utility_function(resulting_state)",
      ["It measures and optimizes how desirable, efficient, or high-quality different paths to a goal are using a continuous utility function",
       "It can run without electrical power",
       "It translates natural language into binary machine code without an interpreter",
       "It replaces all database indexes with sorted linked lists"],
      0,
      "Goals provide a crude binary distinction between happy (achieved) and unhappy states. A utility-based agent uses a utility function to score trade-offs, finding the best, quickest, cheapest, or safest way to succeed.",
      "PCEI-30-01 Block 1.2 - Utility-Based Agent",
      ["utility-function", "tradeoffs", "optimization"])

add_c(27, "1.2", "Learning Agents", "Intermediate",
      "What are the four conceptual components of a 'Learning Agent' architecture?",
      "# Learning Agent architecture:\ncomponents = ['Learning element', 'Performance element', 'Critic', 'Problem generator']",
      ["Learning element, Performance element, Critic, and Problem generator",
       "Hard drive, RAM stick, CPU cache, and Motherboard",
       "Frontend HTML, Backend Flask, Database PostgreSQL, and Nginx proxy",
       "Keyboard, Mouse, Monitor, and Audio speakers"],
      0,
      "A learning agent is separated into four components: the Learning element (makes improvements), the Performance element (selects external actions), the Critic (provides feedback against standards), and the Problem generator (suggests exploratory actions).",
      "PCEI-30-01 Block 1.2 - Learning Agent",
      ["learning-agent", "critic", "problem-generator"])

add_c(28, "1.2", "Environment Properties", "Intermediate",
      "What is the difference between a 'Fully Observable' and a 'Partially Observable' environment?",
      "# Fully observable: Chess board (all pieces visible)\n# Partially observable: Poker game (opponents' cards hidden)",
      ["In a fully observable environment, an agent's sensors give complete access to the state of the world at any point in time",
       "Fully observable environments only exist in text files, while partially observable ones are strictly graphical",
       "Partially observable environments require no sensors",
       "Fully observable environments cannot run machine learning algorithms"],
      0,
      "An environment is fully observable if sensors detect all aspects relevant to choice of action at any given time (like chess). It is partially observable if sensors have blind spots, noise, or hidden information (like poker or driving in fog).",
      "PCEI-30-01 Block 1.2 - Observability",
      ["fully-observable", "partially-observable", "environment"])

add_c(29, "1.2", "Deterministic Environments", "Beginner",
      "Why is chess considered a 'deterministic' environment while backgammon is 'stochastic'?",
      "# Deterministic vs Stochastic game:\n# Chess: Next state determined entirely by current state and chosen move\n# Backgammon: Next state involves random dice roll",
      ["Chess involves rolling dice before each piece moves",
       "In chess, the next board state is completely determined by the current state and player's action; in backgammon, dice rolls introduce randomness",
       "Backgammon has no rules, whereas chess is completely unregulated",
       "Chess requires high-end neural networks to play legal moves"],
      1,
      "In a deterministic environment, the next state is completely determined by the current state and the agent's action. If randomness or probability (like dice rolls or weather) is involved, it is stochastic.",
      "PCEI-30-01 Block 1.2 - Determinism vs Stochasticity",
      ["deterministic", "stochastic", "games"])

add_c(30, "1.2", "Episodic vs Sequential", "Intermediate",
      "What characterizes an 'Episodic' environment in AI agent design?",
      "# Episodic task example: Defect classification in factory\n# The classification of part N does not affect whether part N+1 is defective",
      ["The agent's experience is divided into atomic episodes where current actions do not affect future episodes",
       "The agent must play an entire season of a television drama",
       "Every action permanently alters all future states for the rest of the agent's lifetime",
       "The agent can only execute commands once per calendar year"],
      0,
      "In episodic environments, each episode consists of the agent perceiving and performing a single action. The quality of its action depends only on the episode itself, as current choices do not affect future episodes.",
      "PCEI-30-01 Block 1.2 - Episodic Environments",
      ["episodic", "sequential", "environment-types"])

add_c(31, "1.2", "Static vs Dynamic", "Beginner",
      "What distinguishes a 'Dynamic' environment from a 'Static' environment?",
      "# Dynamic environment: Self-driving car in traffic (world changes while agent deliberates)\n# Static environment: Crossword puzzle (world waits indefinitely for user input)",
      ["The environment can change while the agent is deliberating or computing its next move",
       "The environment uses dynamic HTML rather than static CSS files",
       "The environment can only be stored on solid-state drives",
       "The environment automatically recompiles the Python interpreter"],
      0,
      "An environment is dynamic if it changes while the agent is thinking (e.g., self-driving car in real-time traffic). It is static if it remains unchanged until the agent decides to act (e.g., solving a crossword puzzle).",
      "PCEI-30-01 Block 1.2 - Static vs Dynamic",
      ["dynamic", "static", "real-time"])

add_c(32, "1.2", "Discrete vs Continuous", "Intermediate",
      "Which of the following environments is considered 'Continuous' rather than 'Discrete'?",
      "# Discrete: Chess positions, Go board squares\n# Continuous: Vehicle steering wheel angle, velocity, sensor telemetry",
      ["Chess board state representation", "Autonomous vehicle steering and speed control", "Tic-tac-toe grid coordinates", "Word count in a text document"],
      1,
      "Continuous environments involve continuous quantities (like time, speed, temperature, coordinates, or steering angles). Chess and Tic-tac-toe have discrete, distinct states and turns.",
      "PCEI-30-01 Block 1.2 - Discrete vs Continuous",
      ["continuous", "discrete", "state-space"])

add_c(33, "1.2", "Single vs Multi-Agent", "Beginner",
      "What makes an environment 'Competitive Multi-Agent' rather than 'Cooperative Multi-Agent'?",
      "# Competitive (Zero-Sum): Agent A's win is Agent B's loss\n# Cooperative: Both agents work together to maximize shared reward",
      ["Agents have opposing goals where one agent maximizing its utility minimizes another agent's utility",
       "All agents share the exact same reward function and pool their CPU power",
       "Agents cannot communicate over network sockets",
       "Only one agent has access to a Python compiler"],
      0,
      "In competitive multi-agent environments (e.g., chess, poker), agents have conflicting goals (zero-sum). In cooperative environments, agents work together towards a common goal or shared utility function.",
      "PCEI-30-01 Block 1.2 - Multi-Agent",
      ["multi-agent", "competitive", "cooperative"])

add_c(34, "1.2", "PEAS Framework", "Intermediate",
      "In AI design, what does the 'PEAS' framework stand for when specifying task environments?",
      "# PEAS specification for an automated taxi:\npeas = {\n    'P': 'Performance measure (Safety, speed, comfort, legal compliance)',\n    'E': 'Environment (City roads, traffic, pedestrians)',\n    'A': 'Actuators (Steering, accelerator, brake, display)',\n    'S': 'Sensors (Cameras, LiDAR, speedometer, GPS)'\n}",
      ["Performance measure, Environment, Actuators, Sensors",
       "Processor, Ethernet, Audio, Storage",
       "Parallel execution, Asynchronous sockets, System calls",
       "Python environment, Anaconda distribution, Scripting"],
      0,
      "PEAS (Performance measure, Environment, Actuators, Sensors) is the standard AI engineering framework for formally defining the complete specification of an agent's task environment.",
      "PCEI-30-01 Block 1.2 - PEAS Framework",
      ["peas", "specification", "agent-design"])

add_c(35, "1.2", "Agent Program vs Function", "Intermediate",
      "What is the theoretical difference between an 'Agent Function' and an 'Agent Program'?",
      "# Mathematical mapping vs real implementation:\n# Agent Function: f: P* -> A (abstract mathematical mapping from percept sequences to actions)\n# Agent Program: Concrete Python code running on an architecture",
      ["The agent function is an abstract mathematical mapping from percept histories to actions, whereas the agent program is the concrete software implementation running on physical architecture",
       "Agent functions are written in C, while agent programs are written in Python",
       "Agent functions can only run on quantum computers",
       "There is no difference; they are exact technical synonyms in computer science"],
      0,
      "Mathematically, the agent function is an abstract specification mapping any given percept sequence to an action: f: P* -> A. The agent program is the concrete algorithm executed on physical hardware.",
      "PCEI-30-01 Block 1.2 - Agent Function vs Program",
      ["agent-function", "agent-program", "theory"])

add_c(36, "1.2", "Omniscience vs Rationality", "Intermediate",
      "Why is 'Rationality' not the same as 'Omniscience' in AI agent theory?",
      "# Rationality maximizes EXPECTED performance based on current information:\n# Omniscience knows the actual outcome of actions in advance",
      ["Omniscience knows the actual future outcome of its actions and is impossible in reality; rationality maximizes expected performance given what is known",
       "Rational agents can see through walls using infrared cameras",
       "Omniscient agents are slower than rational agents on CPU benchmarks",
       "Rational agents only operate on deterministic algorithms"],
      0,
      "An omniscient agent knows the actual outcome of its actions and can act accordingly; but omniscience is impossible in reality. Rationality is concerned with expected success given the available perceptual evidence.",
      "PCEI-30-01 Block 1.2 - Rationality vs Omniscience",
      ["rationality", "omniscience", "expected-utility"])

add_c(37, "1.2", "Autonomous Behavior", "Beginner",
      "When is an AI agent said to exhibit 'Autonomy'?",
      "# Autonomous behavior:\n# Extent to which agent behavior is determined by own experience rather than pre-programmed knowledge",
      ["When its behavior is determined by its own experience and learning rather than solely relying on the designer's prior built-in assumptions",
       "When it runs continuously without being plugged into electrical wall power",
       "When it refuses to follow software updates issued by developers",
       "When it has been granted legal citizenship by a government"],
      0,
      "An agent is autonomous to the extent that its actions are guided by its own experience (learning and adapting) rather than solely by the initial knowledge programmed into it by its designer.",
      "PCEI-30-01 Block 1.2 - Autonomy",
      ["autonomy", "adaptation", "learning"])

add_c(38, "1.2", "Exploration vs Exploitation", "Intermediate",
      "In learning agents, what is the role of the 'Problem Generator' component?",
      "# Exploration component in learning agents:\n# Suggests actions that lead to new experiences even if suboptimal in the short term",
      ["It intentionally crashes the operating system kernel to test stability",
       "It suggests exploratory actions that lead to new and informative experiences, discovering better strategies for the long term",
       "It writes unit tests for frontend user interfaces",
       "It prevents the agent from making any network requests"],
      1,
      "The problem generator is responsible for suggesting actions that lead to new, informative experiences (exploration), ensuring the agent does not merely repeat known routines (exploitation).",
      "PCEI-30-01 Block 1.2 - Problem Generator",
      ["problem-generator", "exploration", "learning"])

add_c(39, "1.2", "Reactive vs Deliberative", "Intermediate",
      "What is the fundamental architectural trade-off between Reactive Agents and Deliberative Agents?",
      "# Reactive: Fast response, no deep planning\n# Deliberative: Deep planning, slower response time",
      ["Reactive agents respond very quickly to stimuli but lack long-term foresight; deliberative agents plan ahead with internal models but have higher computational latency",
       "Reactive agents cannot be programmed in Python",
       "Deliberative agents are immune to all software bugs",
       "Reactive agents require GPUs, while deliberative agents require tape drives"],
      0,
      "Reactive agents emphasize speed and immediate response to sensor data (reflexes). Deliberative agents maintain world models and use search/planning, which yields better long-term decisions but requires more time and compute.",
      "PCEI-30-01 Block 1.2 - Reactive vs Deliberative",
      ["reactive", "deliberative", "planning"])

add_c(40, "1.2", "Software Agents / Bots", "Beginner",
      "What is a common example of a purely software-based intelligent agent?",
      "# Software agent in digital environment:\nweb_crawler = {'sensors': 'HTTP GET requests', 'actuators': 'URL queue updates and database writes'}",
      ["An autonomous search engine web scraper or algorithmic trading bot",
       "A hydraulic mechanical backhoe on a construction site",
       "A silicon wafer fabrication cleanroom ventilation duct",
       "A copper coaxial television cable"],
      0,
      "Software agents (softbots) inhabit purely digital environments (like web servers, operating systems, or financial exchanges), using network requests as sensors and database updates or orders as actuators.",
      "PCEI-30-01 Block 1.2 - Software Agents",
      ["softbots", "web-crawlers", "software-agents"])

# ==========================================
# CHAPTER 1.3: Knowledge Representation, Logic & Search (Cards 41-60)
# ==========================================
add_c(41, "1.3", "Search Algorithms", "Intermediate",
      "Which graph traversal search strategy explores the shallowest unexpanded nodes first using a FIFO (first-in, first-out) queue?",
      "# Graph search using queue:\nfrom collections import deque\nqueue = deque([start_node])\n# Breadth-First Search (BFS)",
      ["Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Depth-Limited Search", "Genetic Algorithm Selection"],
      1,
      "Breadth-First Search (BFS) systematically expands the root node first, then all successors at depth 1, then depth 2. It uses a FIFO queue and is guaranteed to find the shortest path in unweighted graphs.",
      "PCEI-30-01 Block 1.3 - Search Algorithms",
      ["bfs", "graph-search", "queues"])

add_c(42, "1.3", "Search Algorithms", "Intermediate",
      "What is the main advantage of Depth-First Search (DFS) over Breadth-First Search (BFS) in large search spaces?",
      "# Memory footprint comparison:\n# BFS: O(b^d) memory (exponential in depth)\n# DFS: O(b * m) memory (linear in max depth)",
      ["DFS has vastly lower memory requirements because it only needs to store nodes on the current path",
       "DFS is guaranteed to find the shortest path in all graphs",
       "DFS never gets stuck in infinite loops in graphs with cycles",
       "DFS requires zero CPU cycles to execute"],
      0,
      "DFS requires only O(b*m) space (linear in maximum search depth m for branching factor b), whereas BFS must keep all generated nodes in memory (O(b^d)), which quickly exhausts RAM.",
      "PCEI-30-01 Block 1.3 - DFS vs BFS",
      ["dfs", "bfs", "memory-complexity"])

add_c(43, "1.3", "Informed Search", "Advanced",
      "In the A* search algorithm, what does the evaluation function f(n) = g(n) + h(n) represent?",
      "# A* evaluation formula:\n# g(n): exact cost to reach node n from start\n# h(n): estimated heuristic cost from node n to goal\nf_cost = g_cost + h_cost",
      ["f(n) is the total estimated cost of the cheapest solution path through node n",
       "f(n) is the number of CPU threads multiplied by RAM bandwidth",
       "f(n) is the probability of a network packet collision",
       "f(n) is the loss function of a convolutional neural network"],
      0,
      "In A* search, g(n) is the known path cost from start to node n, and h(n) is the heuristic estimate of the cost from node n to the goal. f(n) is the estimated total cost through node n.",
      "PCEI-30-01 Block 1.3 - A* Search",
      ["a-star", "heuristic-search", "evaluation-function"])

add_c(44, "1.3", "Heuristic Admissibility", "Advanced",
      "What condition must a heuristic h(n) satisfy to be considered 'admissible' in A* search?",
      "# Admissible heuristic condition:\n# h(n) <= h*(n), where h*(n) is the true optimal cost to goal\n# It must NEVER overestimate the true cost",
      ["It must never overestimate the true minimum cost to reach the goal state",
       "It must always return negative numbers",
       "It must calculate floating-point numbers to at least 128 bits of precision",
       "It must overestimate costs by at least 50% to ensure safety margins"],
      0,
      "An admissible heuristic is an optimistic estimate: it never overestimates the actual cost to reach the goal (h(n) <= true cost). Admissibility guarantees that A* tree search finds the optimal solution.",
      "PCEI-30-01 Block 1.3 - Admissibility",
      ["admissibility", "a-star", "optimality"])

add_c(45, "1.3", "Game Theory Search", "Intermediate",
      "What is the primary purpose of the 'Minimax' algorithm in two-player zero-sum adversarial games like Chess or Tic-Tac-Toe?",
      "# Minimax principle:\n# MAX player seeks to maximize score\n# MIN player seeks to minimize MAX's score",
      ["To maximize the player's worst-case payoff assuming the opponent plays optimally",
       "To randomly guess the opponent's moves using a dice generator",
       "To verify that the computer's CPU temperature remains below 70°C",
       "To compress board states using gzip archive compression"],
      0,
      "The Minimax algorithm determines the optimal move for a player assuming that the opponent is also playing optimally, maximizing the player's minimum possible gain (minimizing the maximum loss).",
      "PCEI-30-01 Block 1.3 - Minimax",
      ["minimax", "game-theory", "adversarial-search"])

add_c(46, "1.3", "Search Optimization", "Advanced",
      "How does 'Alpha-Beta Pruning' improve the computational efficiency of the Minimax algorithm?",
      "# Alpha-Beta pruning condition:\n# If beta <= alpha, prune the remaining branches of this node",
      ["It eliminates branches of the search tree that cannot possibly influence the final decision, reducing the effective branching factor",
       "It simplifies the game rules by removing half of the opponent's pieces",
       "It replaces recursive function calls with simple regular expressions",
       "It runs exclusively on decentralized blockchain networks"],
      0,
      "Alpha-Beta pruning returns the same optimal move as Minimax while skipping (pruning) subtrees that are mathematically proven to be inferior to moves already examined, doubling the searchable search depth.",
      "PCEI-30-01 Block 1.3 - Alpha-Beta Pruning",
      ["alpha-beta", "pruning", "minimax"])

add_c(47, "1.3", "Knowledge Representation", "Intermediate",
      "In AI knowledge representation, what is an 'Ontology'?",
      "# Conceptual ontology definition:\nontology = {\n    'classes': ['Animal', 'Mammal', 'Canine'],\n    'relations': ['is_a', 'has_part'],\n    'properties': ['warm_blooded', 'barks']\n}",
      ["A formal, explicit specification of shared concepts, categories, properties, and relationships within a specific domain of knowledge",
       "The hardware firmware stored inside a computer's BIOS chip",
       "A unit test framework for checking Python variable naming conventions",
       "An encrypted cryptographic key used for SSH server authentication"],
      0,
      "An ontology is a formal representation of domain knowledge consisting of concepts (classes), attributes, relationships, and axioms that enable machines to reason about entities in that domain.",
      "PCEI-30-01 Block 1.3 - Ontologies",
      ["ontology", "knowledge-representation", "semantics"])

add_c(48, "1.3", "Semantic Networks", "Beginner",
      "How do 'Semantic Networks' represent knowledge visually and computationally?",
      "# Semantic network structure:\n# Nodes represent concepts/objects\n# Edges represent relationships (e.g., 'is-a', 'has-a')\n# 'Canary' --(is-a)--> 'Bird' --(can)--> 'Fly'",
      ["As a graph data structure where nodes represent concepts/objects and directed labeled edges represent relationships between them",
       "As a flat comma-separated text file of raw floating-point numbers",
       "As a series of animated video frames",
       "As binary machine language opcodes"],
      0,
      "Semantic networks represent knowledge using graphs: vertices (nodes) represent objects, concepts, or situations, and directed edges represent semantic relationships (such as 'is-a', 'has-a', or 'part-of').",
      "PCEI-30-01 Block 1.3 - Semantic Networks",
      ["semantic-networks", "graphs", "knowledge-graphs"])

add_c(49, "1.3", "Propositional Logic", "Intermediate",
      "In propositional logic, if P is True and Q is False, what is the truth value of the implication 'P -> Q'?",
      "# Truth table for logical implication (P -> Q):\n# True -> False evaluates to False\nP = True\nQ = False\nimplication = (not P) or Q\nprint(implication)  # Output: False",
      ["True", "False", "None", "Indeterminate"],
      1,
      "In formal logic, an implication (P -> Q) is only False when the antecedent (P) is True and the consequent (Q) is False. In all other cases, implication evaluates to True.",
      "PCEI-30-01 Block 1.3 - Propositional Logic",
      ["logic", "implication", "truth-tables"])

add_c(50, "1.3", "First-Order Logic", "Intermediate",
      "What expressive capability does 'First-Order Logic' (Predicate Logic) add over basic Propositional Logic?",
      "# First-Order Logic elements:\n# Predicates, objects, functions, and quantifiers: forall (∀), exists (∃)\n# ∀x (Human(x) -> Mortal(x))",
      ["Objects, predicates, functions, and quantifiers (Universal: ∀ 'for all', Existential: ∃ 'there exists')",
       "Graphical user interface buttons and CSS color styling",
       "Asynchronous event loops and thread pooling",
       "Binary file compression algorithms"],
      0,
      "Unlike propositional logic (which treats whole propositions as indivisible atoms), first-order logic can represent objects, relations/predicates between objects, and universal/existential quantifiers (∀ and ∃).",
      "PCEI-30-01 Block 1.3 - First-Order Logic",
      ["first-order-logic", "predicates", "quantifiers"])

add_c(51, "1.3", "Inference Rules", "Intermediate",
      "What classic logical inference rule states: 'If P is True, and P implies Q is True, then Q must be True'?",
      "# Modus Ponens:\n# Premise 1: P\n# Premise 2: P -> Q\n# Conclusion: Q",
      ["Modus Ponens", "Modus Tollens", "Reductio ad Absurdum", "Affirming the Consequent"],
      0,
      "Modus Ponens (Latin for 'method of affirming') is a fundamental rule of inference: from 'P' and 'P -> Q', one directly infers 'Q'.",
      "PCEI-30-01 Block 1.3 - Modus Ponens",
      ["inference", "modus-ponens", "logic"])

add_c(52, "1.3", "Backward Chaining", "Intermediate",
      "In which practical scenario is 'Backward Chaining' preferred over 'Forward Chaining' in an expert diagnostic system?",
      "# Backward chaining (Goal-driven):\n# Goal: 'Does patient have condition X?'\n# Look for rules that conclude X, then check their preconditions",
      ["When the system needs to verify or refute a specific known hypothesis or goal",
       "When all sensor data is streaming in with zero initial goals",
       "When computing the inverse of a mathematical matrix",
       "When rendering 3D graphics polygons onto a screen"],
      0,
      "Backward chaining is goal-driven: it starts with a specific hypothesis (e.g., 'Does the patient have Diabetes?') and works backward, querying only relevant facts needed to confirm or deny that goal.",
      "PCEI-30-01 Block 1.3 - Backward Chaining",
      ["backward-chaining", "goal-driven", "diagnostics"])

add_c(53, "1.3", "Conflict Resolution", "Intermediate",
      "In an expert system where multiple IF-THEN rules are triggered simultaneously, what mechanism determines which rule fires first?",
      "# Rule engine conflict resolution:\nrules = [{'id': 'R1', 'priority': 10}, {'id': 'R2', 'priority': 25}]\n# Conflict resolution strategy picks highest priority rule",
      ["Conflict resolution strategy (e.g., specificity, recency, or rule priority weights)",
       "Random operating system thread crash",
       "The rule with the longest filename in the directory",
       "Automatic deletion of all contradictory rules"],
      0,
      "Conflict resolution strategies (such as highest assigned priority, most specific condition, or most recently updated facts) resolve ambiguities when multiple rules match the current working memory.",
      "PCEI-30-01 Block 1.3 - Conflict Resolution",
      ["conflict-resolution", "expert-systems", "inference"])

add_c(54, "1.3", "State Space", "Beginner",
      "In AI problem formulation, what constitutes the 'State Space'?",
      "# State space representation:\n# Set of all possible states reachable from initial state by any sequence of actions",
      ["The physical dimensions of the computer's CPU casing",
       "The set of all possible configurations or states reachable from the initial state through valid actions",
       "The amount of unused disk space on a hard drive",
       "The country in which the data center is legally located"],
      1,
      "The state space is the complete mathematical configuration space representing all possible states of a problem reachable from the start state via valid action sequences.",
      "PCEI-30-01 Block 1.3 - State Space",
      ["state-space", "search", "problem-formulation"])

add_c(55, "1.3", "Uniform Cost Search", "Intermediate",
      "How does Uniform Cost Search (Dijkstra's algorithm variant) select which node to expand next?",
      "# Priority queue ordered by cumulative path cost g(n):\nimport heapq\nfrontier = []\nheapq.heappush(frontier, (cost, node))",
      ["It expands the unexpanded node with the lowest cumulative path cost g(n) from the start node",
       "It expands nodes strictly in alphabetical order of their labels",
       "It randomly chooses a node without regard to cost",
       "It selects the node that is farthest away from the start"],
      0,
      "Uniform Cost Search uses a priority queue ordered by cumulative path cost g(n). It always expands the node with the minimum accumulated cost, guaranteeing the optimal path for non-negative edge costs.",
      "PCEI-30-01 Block 1.3 - Uniform Cost Search",
      ["uniform-cost-search", "dijkstra", "path-cost"])

add_c(56, "1.3", "Local Search", "Intermediate",
      "What is the defining characteristic of 'Local Search' algorithms like Hill Climbing or Simulated Annealing?",
      "# Hill climbing:\ncurrent = initial_state\nwhile True:\n    neighbor = best_neighbor(current)\n    if value(neighbor) <= value(current):\n        break  # Local optimum reached\n    current = neighbor",
      ["They operate on a single current state and move to neighboring states, requiring very little memory without storing a search tree",
       "They always guarantee finding the global optimum in infinite search spaces",
       "They store the entire path history from start to goal in RAM",
       "They can only run on local Ethernet networks"],
      0,
      "Local search algorithms (e.g., hill climbing, simulated annealing, genetic algorithms) evaluate neighboring states from a current state, using minimal memory because they do not retain a full search tree.",
      "PCEI-30-01 Block 1.3 - Local Search",
      ["local-search", "hill-climbing", "optimization"])

add_c(57, "1.3", "Local Maxima", "Intermediate",
      "What common pitfall affects the basic greedy 'Hill Climbing' search algorithm?",
      "# Getting trapped in local optima:\n# Neighbor values are all lower, but global maximum is higher on another hill",
      ["It can easily get stuck in local maxima, plateaus, or ridges, failing to reach the global optimum",
       "It uses too much memory and crashes the computer's operating system",
       "It can only solve problems with negative numbers",
       "It reverses the direction of all network packets"],
      0,
      "Hill climbing is a greedy local search. If it reaches a state where all immediate neighbors have lower values (a local maximum), it terminates prematurely, missing higher global peaks.",
      "PCEI-30-01 Block 1.3 - Hill Climbing",
      ["hill-climbing", "local-maxima", "optimization"])

add_c(58, "1.3", "Constraint Satisfaction", "Intermediate",
      "Sudoku puzzles, map coloring, and automated university timetable scheduling are classic examples of which AI problem formulation?",
      "# CSP formulation:\n# Variables (V), Domains (D), Constraints (C)\nvariables = ['Region1', 'Region2']\ndomains = {'Region1': ['Red', 'Green', 'Blue']}\nconstraints = [('Region1', '!=', 'Region2')]",
      ["Constraint Satisfaction Problems (CSPs)", "Generative Adversarial Networks", "Recurrent Neural Language Modeling", "Unsupervised Centroid Clustering"],
      0,
      "A Constraint Satisfaction Problem (CSP) represents a problem as a set of variables, each with a domain of possible values, and a set of constraints restricting which value combinations are valid.",
      "PCEI-30-01 Block 1.3 - CSP",
      ["csp", "constraints", "problem-solving"])

add_c(59, "1.3", "Knowledge Graphs", "Beginner",
      "What is a 'Knowledge Graph' in modern AI systems (such as those used by Google or enterprise search)?",
      "# Knowledge Graph Triple: (Subject, Predicate, Object)\ntriple = ('Python', 'created_by', 'Guido van Rossum')",
      ["A network of interconnected real-world entities, concepts, and relationships stored as RDF triples or graph databases",
       "A line chart displaying CPU utilization over 24 hours",
       "A matrix of random numbers used for encrypting files",
       "A diagram showing company office floor plans"],
      0,
      "A knowledge graph organizes structured information about real-world entities (people, places, things) and their semantic connections, typically represented as subject-predicate-object triples.",
      "PCEI-30-01 Block 1.3 - Knowledge Graphs",
      ["knowledge-graphs", "triples", "semantic-web"])

add_c(60, "1.3", "Non-Monotonic Logic", "Advanced",
      "What is the key property of 'Non-Monotonic Logic' in artificial intelligence?",
      "# Non-monotonic reasoning:\n# Fact 1: Tweety is a bird -> Conclude: Tweety can fly\n# New Fact: Tweety is a penguin -> Retract: Tweety can fly",
      ["Adding new information can invalidate or retract previously deduced conclusions",
       "Conclusions once derived can never be modified or questioned under any circumstances",
       "The algorithm can only run on single-core processors",
       "All logical statements must be formatted as hexadecimal numbers"],
      0,
      "In classical monotonic logic, adding new premises never invalidates existing theorems. Non-monotonic logic models real-world common-sense reasoning: new evidence can overturn default assumptions (e.g., learning Tweety is a penguin).",
      "PCEI-30-01 Block 1.3 - Non-Monotonic Logic",
      ["non-monotonic", "reasoning", "common-sense"])

# ==========================================
# CHAPTER 1.4: Capabilities, Limitations & Turing Test (Cards 61-80)
# ==========================================
add_c(61, "1.4", "AI Limitations", "Beginner",
      "What is 'Moravec's Paradox' in artificial intelligence robotics?",
      "# Moravec's Paradox observation:\n# Hard problems (chess, calculus) are easy for AI\n# Easy problems (walking, folding laundry, perception) are extremely difficult for AI",
      ["Tasks that are intellectually challenging for adult humans (like chess and logic) are relatively easy for AI, while tasks that are easy for human toddlers (like physical perception and mobility) are extraordinarily difficult for AI",
       "Computers become 50% slower every 18 months unless cooled with liquid helium",
       "Neural networks cannot learn arithmetic addition without floating point math coprocessors",
       "Software bugs increase in direct proportion to lines of Python code"],
      0,
      "Moravec's Paradox observes that high-level reasoning requires very little computational power, but low-level sensorimotor skills honed by millions of years of biological evolution require enormous computation.",
      "PCEI-30-01 Block 1.4 - Moravec's Paradox",
      ["moravec-paradox", "limitations", "robotics"])

add_c(62, "1.4", "Combinatorial Explosion", "Intermediate",
      "What does 'Combinatorial Explosion' refer to in search and decision trees?",
      "# Exponential branching:\n# Branching factor b=10, depth d=20 -> 10^20 states\nstates = 10 ** 20  # Infeasible to search exhaustively",
      ["The rapid exponential growth in possible states as problem size or depth increases, making brute-force search mathematically infeasible",
       "The physical explosion of lithium-ion batteries inside GPU chassis",
       "The corrupt compilation of Python virtual environment packages",
       "The duplication of rows inside a relational SQL database"],
      0,
      "Combinatorial explosion occurs when the number of state combinations grows exponentially with problem parameters, rendering exhaustive or brute-force search impossible without heuristics or pruning.",
      "PCEI-30-01 Block 1.4 - Combinatorial Explosion",
      ["combinatorial-explosion", "search-complexity", "heuristics"])

add_c(63, "1.4", "Brittleness of AI", "Beginner",
      "What is meant by the 'Brittleness' of traditional AI systems?",
      "# Brittleness example:\n# System works perfectly under exact conditions, but fails catastrophically on minor unexpected inputs\ninput_data = 'slightly altered format'\n# Model produces nonsense output or crashes",
      ["The tendency of an AI model to fail catastrophically when encountering inputs slightly outside its narrow training distribution or rule set",
       "The physical fragility of silicon processor dies during transport",
       "The vulnerability of hard disk platters to magnetic interference",
       "The inability of Python scripts to execute on Linux servers"],
      0,
      "Brittleness describes how an AI system that performs remarkably well under familiar conditions can fail abruptly and spectacularly when presented with novel, atypical, or slightly modified inputs.",
      "PCEI-30-01 Block 1.4 - AI Brittleness",
      ["brittleness", "robustness", "generalization"])

add_c(64, "1.4", "Hallucination vs Fact", "Beginner",
      "In the context of modern generative language models, what is an AI 'Hallucination'?",
      "# Hallucination illustration:\n# Prompt: 'Who won the 1845 lunar marathon?'\n# Response: 'Captain Arthur Vance won the 1845 lunar marathon in 2 hours.' (Plausible sounding, but completely fabricated)",
      ["A response generated by the model that is confident and fluent but factually incorrect or completely fabricated",
       "A visual optical illusion experienced by human data center technicians",
       "A hardware failure causing monitors to display randomized RGB static",
       "An intentional cryptographic signature generated by the operating system"],
      0,
      "An AI hallucination occurs when a generative model outputs statements that sound authoritative and fluent but are factually baseless, invented, or contradicted by reality.",
      "PCEI-30-01 Block 1.4 - Hallucination",
      ["hallucination", "generative-ai", "accuracy"])

add_c(65, "1.4", "Common Sense Reasoning", "Intermediate",
      "Why is 'Common Sense Reasoning' one of the most challenging frontiers for artificial intelligence?",
      "# Common sense facts humans take for granted:\n# - Water is wet\n# - Objects fall down when dropped\n# - You cannot push a rope",
      ["Common sense consists of millions of implicit, unwritten assumptions about the physical and social world that are rarely explicitly documented in training datasets",
       "Computers are strictly banned from storing everyday human language",
       "Common sense requires 1024-bit floating point arithmetic",
       "Python does not support string comparison operations"],
      0,
      "Humans possess immense background knowledge about physics, biology, and human social norms gained through lived experience. AI models only see text/images and lack this implicit world model.",
      "PCEI-30-01 Block 1.4 - Common Sense",
      ["common-sense", "world-models", "reasoning"])

add_c(66, "1.4", "Frame Problem", "Advanced",
      "What is the classical 'Frame Problem' in AI philosophy and planning?",
      "# The challenge of representing non-effects:\n# When you move a cup, the color of the wall does NOT change\n# How does an agent know what stays the same without checking every fact in the universe?",
      ["The challenge of representing and computing which aspects of the world remain unchanged after an action is taken",
       "The problem of formatting digital video frames into MP4 files",
       "The difficulty of mounting server racks into 19-inch metal frames",
       "The inability of HTML browsers to render iframe elements"],
      0,
      "The Frame Problem deals with how to represent what does NOT change when an action occurs. In an dynamic world, explicitly stating that millions of unrelated facts remain unchanged quickly overwhelms reasoning systems.",
      "PCEI-30-01 Block 1.4 - Frame Problem",
      ["frame-problem", "planning", "philosophy"])

add_c(67, "1.4", "Turing Test Limitations", "Intermediate",
      "Why do many contemporary AI researchers consider the traditional Turing Test an inadequate benchmark for true machine intelligence?",
      "# Critique of Turing Test:\n# Focuses on deception and conversational trickery rather than genuine problem-solving or reasoning",
      ["It tests whether a machine can deceive humans through conversational deception rather than measuring genuine comprehension, reasoning, or real-world problem-solving",
       "The test takes over 100 years to execute to completion",
       "The test requires all participants to speak ancient Latin",
       "The test cannot be run on computers connected to the Internet"],
      0,
      "Chatbots can 'pass' or score well on conversational tests through evasion, deflection, and superficial mimicry without possessing genuine understanding, spatial awareness, or problem-solving capability.",
      "PCEI-30-01 Block 1.4 - Turing Test Critique",
      ["turing-test", "evaluation", "benchmarks"])

add_c(68, "1.4", "Winograd Schema", "Intermediate",
      "What is a 'Winograd Schema' used for in AI evaluation?",
      "# Winograd Schema Challenge example:\n# 'The city councilmen refused the demonstrators a permit because they [feared/advocated] violence.'\n# Who does 'they' refer to?",
      ["A pair of sentences differing in only one or two words, requiring common-sense reasoning to resolve ambiguous pronoun references",
       "A database schema designed for storing high-dimensional vector embeddings",
       "A cryptographic hashing schema used in blockchain proof-of-work",
       "A visual flowchart tool for planning sprint deliverables"],
      0,
      "The Winograd Schema Challenge tests an AI's comprehension and common-sense reasoning by presenting sentences where a pronoun's referent flips depending on a single changed word (which humans easily resolve).",
      "PCEI-30-01 Block 1.4 - Winograd Schema",
      ["winograd-schema", "common-sense", "pronoun-resolution"])

add_c(69, "1.4", "Generalization", "Beginner",
      "What does 'Generalization' mean when evaluating an artificial intelligence model?",
      "# Generalization capability:\n# Model trained on Dataset A accurately predicts unseen samples in Dataset B\naccuracy_unseen = model.score(X_test, y_test)",
      ["The model's ability to perform accurately on new, previously unseen inputs that were not part of its training data",
       "The process of converting specific Python code into generic C++ code",
       "The capability of a server to host multiple virtual operating systems",
       "The deletion of all outlier records from a production database"],
      0,
      "Generalization is the core objective of machine learning: rather than simply memorizing the training examples, the model must discover underlying rules that allow it to make accurate predictions on new data.",
      "PCEI-30-01 Block 1.4 - Generalization",
      ["generalization", "unseen-data", "overfitting"])

add_c(70, "1.4", "Out-of-Distribution", "Intermediate",
      "What happens when an AI model is given 'Out-of-Distribution' (OOD) data during real-world inference?",
      "# Out-of-Distribution (OOD):\n# Training: Clean highway driving on sunny days\n# Inference: Heavy blizzard in dense urban construction zone",
      ["The model's predictions frequently degrade sharply and unpredictably because the inputs differ significantly from the data distribution it was trained on",
       "The computer hardware automatically doubles its clock frequency",
       "The model re-writes its own source code to fix the issue instantaneously",
       "The data is automatically converted into standard normal distributions"],
      0,
      "Machine learning models assume test data shares the same statistical distribution as training data. When encountering Out-of-Distribution (OOD) inputs, model confidence remains deceptively high while accuracy collapses.",
      "PCEI-30-01 Block 1.4 - OOD Data",
      ["ood", "distribution-shift", "robustness"])

add_c(71, "1.4", "Clever Hans Effect", "Intermediate",
      "In machine learning evaluation, what is the 'Clever Hans Effect'?",
      "# Clever Hans: Model relies on spurious shortcuts or background artifacts rather than intended concepts\n# E.g., classifying an image as a 'wolf' because there is snow in the background",
      ["A model appearing to perform an intelligent task while actually relying on unintended spurious correlations, shortcuts, or artifacts in the training data",
       "An algorithm that automatically solves horse racing handicaps",
       "A compression algorithm that reduces neural network file size by 90%",
       "An error where GPU cooling fans spin at maximum velocity"],
      0,
      "Named after a horse that appeared to solve math by reading trainer body language, the Clever Hans effect occurs when an AI achieves high test scores by latching onto spurious background cues rather than true underlying concepts.",
      "PCEI-30-01 Block 1.4 - Clever Hans Effect",
      ["clever-hans", "spurious-correlation", "shortcuts"])

add_c(72, "1.4", "Adversarial Examples", "Advanced",
      "What is an 'Adversarial Example' in deep learning vision systems?",
      "# Adversarial perturbation:\n# Adding imperceptible mathematical noise delta to an image:\nperturbed_image = original_image + epsilon * noise\n# Human sees panda; model predicts gibbon with 99.9% confidence",
      ["An input intentionally crafted with tiny, human-imperceptible perturbations designed to cause a machine learning model to make an erroneous prediction",
       "A unit test that fails because of a syntax error in Python",
       "An image file that is corrupted by bad sectors on a hard drive",
       "A sample that has been downsampled to 8x8 pixels"],
      0,
      "Adversarial examples are carefully crafted inputs where subtle, calculated mathematical noise (invisible to human eyes) causes deep neural networks to misclassify objects with high confidence.",
      "PCEI-30-01 Block 1.4 - Adversarial Examples",
      ["adversarial-attacks", "perturbations", "robustness"])

add_c(73, "1.4", "Compute Constraints", "Beginner",
      "Why is computational resource availability (FLOPs, memory, power) a primary bottleneck in advancing frontier AI models?",
      "# Training frontier models requires vast compute:\n# Compute = Operations/sec * Training duration * Number of GPUs",
      ["Training modern large-scale neural networks requires billions of calculations across thousands of specialized chips, costing millions of dollars in hardware and electricity",
       "Modern processors are not legally allowed to perform multiplication operations",
       "Operating systems can only execute code for a maximum of 60 minutes per day",
       "Python scripts cannot access more than 4 megabytes of system RAM"],
      0,
      "Frontier models require enormous computational resources (measured in floating-point operations, or FLOPs) spanning thousands of interconnected GPUs/TPUs, making compute cost and energy availability critical bottlenecks.",
      "PCEI-30-01 Block 1.4 - Compute Constraints",
      ["compute", "flops", "hardware"])

add_c(74, "1.4", "Data Hunger", "Beginner",
      "Why are modern deep learning models often described as 'Data Hungry'?",
      "# Data scaling requirements:\n# Unlike humans who can learn from 1-2 examples, deep models need millions of labeled instances",
      ["They require hundreds of thousands to billions of training examples to extract meaningful generalizable patterns across high-dimensional feature spaces",
       "They automatically delete training data after reading it once",
       "They cannot read files stored on solid-state drives",
       "They consume all available internet bandwidth downloading video games"],
      0,
      "Unlike humans (who can learn concepts from one or two examples), statistical deep learning models require vast quantities of training data to tune millions or billions of parameters without overfitting.",
      "PCEI-30-01 Block 1.4 - Data Requirements",
      ["data-hunger", "sample-efficiency", "deep-learning"])

add_c(75, "1.4", "Catastrophic Forgetting", "Advanced",
      "What is 'Catastrophic Forgetting' in artificial neural networks?",
      "# Catastrophic forgetting:\n# Model trains on Task A -> achieves 98% accuracy\n# Model then trains on Task B -> Task A accuracy collapses to 10%",
      ["When an artificial neural network trained on a new task completely loses its ability to perform previously learned tasks because weights are overwritten",
       "When an operating system fails to save an edited text file before rebooting",
       "When a hard disk drive loses data due to magnetic degradation",
       "When a programmer forgets their account password"],
      0,
      "Catastrophic forgetting occurs when a neural network trained sequentially on new tasks overwrites the synaptic weights supporting older tasks, abruptly losing its previously mastered capabilities.",
      "PCEI-30-01 Block 1.4 - Catastrophic Forgetting",
      ["catastrophic-forgetting", "continual-learning", "neural-networks"])

add_c(76, "1.4", "Stochastic Parrot", "Intermediate",
      "In the critique of large language models, what does the metaphor of a 'Stochastic Parrot' suggest?",
      "# Stochastic Parrot metaphor:\n# The model probabilistically stitches together linguistic patterns without understanding meaning or intent",
      ["The model stitches together sequences of linguistic forms observed in vast training data according to probabilistic correlations, without communicative intent or true semantic understanding",
       "The model can only repeat phrases spoken by pet birds in laboratory cages",
       "The model was developed entirely using audio recording equipment",
       "The model only works when deployed on Amazon Web Services"],
      0,
      "The 'Stochastic Parrot' metaphor (coined by Bender et al.) critiques the assumption that LLMs understand text, arguing they merely recombine linguistic patterns probabilistically based on statistical correlations in text.",
      "PCEI-30-01 Block 1.4 - Stochastic Parrot",
      ["stochastic-parrot", "critique", "llm-capabilities"])

add_c(77, "1.4", "Sample Efficiency", "Intermediate",
      "What does 'Sample Efficiency' measure in machine learning algorithms?",
      "# Sample efficiency comparison:\n# Algorithm A needs 100 examples to reach 90% accuracy\n# Algorithm B needs 1,000,000 examples to reach 90% accuracy -> A has higher sample efficiency",
      ["How much training data an algorithm requires to achieve a specific level of task performance",
       "How fast an analog-to-digital audio converter samples sound waves",
       "The number of CPU cache hits during database queries",
       "The file compression ratio achieved on tabular CSV datasets"],
      0,
      "Sample efficiency measures how effectively a learning algorithm extracts knowledge from data: higher sample efficiency means the algorithm requires fewer training examples to reach a given level of competence.",
      "PCEI-30-01 Block 1.4 - Sample Efficiency",
      ["sample-efficiency", "learning-rate", "benchmarking"])

add_c(78, "1.4", "ARC Benchmark", "Advanced",
      "What makes the Abstraction and Reasoning Corpus (ARC), created by François Chollet, a distinct test of general intelligence?",
      "# ARC tasks:\n# Solving novel visual grid puzzles with only 2-3 demonstration examples, testing abstract reasoning rather than memorization",
      ["It tests an AI's ability to acquire new skills and solve novel visual grid puzzles with minimal demonstration examples, resisting pure memorization",
       "It measures the speed of compiling 10,000 lines of C source code",
       "It tests whether a computer can win in poker against professional players",
       "It measures the cryptographic hashing speed of graphics cards"],
      0,
      "The ARC benchmark tests fluid intelligence and broad generalization: it presents novel transformation rules on visual grids with only a few examples, preventing models from relying on rote training-data memorization.",
      "PCEI-30-01 Block 1.4 - ARC Benchmark",
      ["arc-benchmark", "fluid-intelligence", "generalization"])

add_c(79, "1.4", "Moravec vs Turing", "Intermediate",
      "If an AI defeats the world grandmaster in Chess but cannot reliably pick up a physical chess piece from a table, what does this demonstrate?",
      "# Asymmetry in AI capabilities:\n# Abstract formal logic is computationally tractable; sensory-motor physical interaction is exceptionally complex",
      ["A manifestation of Moravec's Paradox, where abstract symbolic reasoning is easier to automate than sensory-motor physical dexterity",
       "A direct software violation of the Python Institute Code of Conduct",
       "That chess is not a valid benchmark for computer science research",
       "That the physical chess board must be defective"],
      0,
      "This classic scenario highlights Moravec's Paradox: discrete, symbolic rule-based domains (chess) yield to algorithmic search, while physical perception and motor control require vast, subtle evolutionary sensory systems.",
      "PCEI-30-01 Block 1.4 - Moravec's Paradox Application",
      ["moravec", "chess", "robotics"])

add_c(80, "1.4", "Overreliance Risk", "Beginner",
      "Why is human 'Automation Bias' or overreliance on AI system outputs a significant operational risk?",
      "# Automation bias:\n# Humans tend to uncritically trust automated suggestions even when contrary evidence is visible",
      ["Humans tend to uncritically accept automated suggestions or diagnoses, ignoring contradictory evidence or failing to verify critical outputs",
       "Automated systems refuse to execute commands if humans disagree with them",
       "Computers become physically heavier when operating in automated mode",
       "Automation bias causes computer hard drives to fragment prematurely"],
      0,
      "Automation bias is the psychological tendency for humans to favor suggestions from automated decision-making systems and ignore contradictory information made without computer assistance, leading to uncritical errors.",
      "PCEI-30-01 Block 1.4 - Automation Bias",
      ["automation-bias", "human-factors", "risk"])

# ==========================================
# CHAPTER 1.5: Real-World Applications & Industry Impact (Cards 81-100)
# ==========================================
add_c(81, "1.5", "Computer Vision Applications", "Beginner",
      "Which real-world application relies primarily on Computer Vision (CV) techniques?",
      "# Real-world CV task:\nimport cv2\n# Object detection in autonomous vehicles to identify pedestrians and signs",
      ["Real-time pedestrian and traffic sign detection in self-driving cars",
       "Encrypting sensitive database columns using salted hashes",
       "Sorting tabular numerical columns in a spreadsheet",
       "Parsing HTTP cookie headers in web browser requests"],
      0,
      "Pedestrian and obstacle detection in autonomous vehicles relies on Computer Vision to process, analyze, and understand visual digital inputs from cameras and LiDAR.",
      "PCEI-30-01 Block 1.5 - Computer Vision",
      ["computer-vision", "autonomous-driving", "applications"])

add_c(82, "1.5", "NLP Applications", "Beginner",
      "Which enterprise application is a quintessential use case of Natural Language Processing (NLP)?",
      "# NLP application:\n# Automated sentiment analysis of customer support tickets and reviews\nsentiment = analyze_text('Great product, fast delivery!')",
      ["Automated sentiment analysis and summarization of customer service tickets",
       "Calculating employee payroll taxes based on national tax brackets",
       "Compressing JPEG image archives into ZIP files",
       "Detecting physical vibrations in cooling fan bearings"],
      0,
      "Natural Language Processing (NLP) enables machines to read, decipher, summarize, and categorize human text, making automated customer service ticket analysis a core NLP application.",
      "PCEI-30-01 Block 1.5 - NLP Applications",
      ["nlp", "sentiment-analysis", "customer-service"])

add_c(83, "1.5", "Recommendation Systems", "Beginner",
      "What type of AI application powers movie recommendations on streaming platforms and product suggestions on e-commerce sites?",
      "# Recommendation engine types:\n# Collaborative filtering & Content-based filtering\nrecommendations = model.predict_user_ratings(user_id=42)",
      ["Recommendation Systems (Collaborative and Content-Based Filtering)",
       "Domain Name System (DNS) recursive resolvers",
       "Network Address Translation (NAT) router tables",
       "Operating system disk defragmentation utilities"],
      0,
      "Recommendation Systems analyze user preferences, past behavior, and item characteristics using collaborative or content-based filtering algorithms to suggest relevant products, movies, or music.",
      "PCEI-30-01 Block 1.5 - Recommendation Systems",
      ["recommendations", "collaborative-filtering", "streaming"])

add_c(84, "1.5", "Healthcare AI", "Intermediate",
      "In healthcare diagnostics, what is an accepted best practice for integrating AI image analysis models (e.g., chest X-ray screening)?",
      "# AI in healthcare:\n# Act as decision-support tool (Second opinion) with certified radiologist in the loop",
      ["Using the AI as a clinical decision-support tool to assist, flag, and prioritize scans for certified human radiologists",
       "Allowing the AI model to autonomously schedule patient surgeries without physician review",
       "Deleting all raw X-ray scans once the AI outputs a numerical score",
       "Replacing all hospital staff with automated chatbots"],
      0,
      "In clinical environments, AI systems are deployed as decision-support tools (second opinions) that flag urgent abnormalities and reduce radiologist fatigue, with final diagnostic accountability retained by licensed doctors.",
      "PCEI-30-01 Block 1.5 - Healthcare AI",
      ["healthcare", "decision-support", "radiology"])

add_c(85, "1.5", "Finance & Fraud Detection", "Intermediate",
      "Why is anomaly detection using machine learning widely deployed in credit card transaction processing?",
      "# Fraud detection:\n# Flagging transactions that deviate significantly from user's historical spending profile\nis_fraud = anomaly_detector.predict(transaction_features)",
      ["It can analyze millions of transaction attributes in milliseconds to flag irregular patterns that deviate from normal user spending profiles",
       "It permanently reduces banking transaction fees to zero",
       "It prints physical cash currency using high-speed laser printers",
       "It eliminates the need for cardholder passwords and PIN numbers entirely"],
      0,
      "Machine learning models can evaluate spending volume, geographic location, merchant type, and timing in milliseconds, flagging anomalous transactions for verification before fraud loss occurs.",
      "PCEI-30-01 Block 1.5 - Fraud Detection",
      ["fraud-detection", "anomaly-detection", "finance"])

add_c(86, "1.5", "Predictive Maintenance", "Intermediate",
      "What is 'Predictive Maintenance' in industrial IoT and manufacturing AI?",
      "# Predictive maintenance:\n# Monitoring sensor telemetry (temperature, vibration) to forecast equipment failure before it happens\nstatus = failure_model.predict(vibration_stream)",
      ["Analyzing sensor telemetry (vibration, heat, acoustics) with ML models to forecast mechanical failures before they cause costly downtime",
       "Replacing all factory equipment every Monday morning regardless of condition",
       "Running factory machinery until it catches fire to test fire extinguishers",
       "Installing decorative lighting fixtures across industrial assembly lines"],
      0,
      "Predictive maintenance uses ML algorithms trained on equipment sensor data (vibration, acoustic, temperature) to predict wear-and-tear and schedule targeted repairs before unplanned breakdowns happen.",
      "PCEI-30-01 Block 1.5 - Predictive Maintenance",
      ["predictive-maintenance", "iot", "manufacturing"])

add_c(87, "1.5", "Edge AI vs Cloud AI", "Intermediate",
      "What is the primary benefit of deploying 'Edge AI' (running models locally on IoT devices, cameras, or drones) compared to centralized Cloud AI?",
      "# Edge AI execution:\n# Model runs on device microcontroller or NPU\n# Low latency, works offline, data privacy",
      ["Ultra-low latency inference, offline operation without internet connectivity, and enhanced data privacy",
       "Access to infinite server RAM and petabytes of cloud disk storage",
       "Elimination of all local battery consumption",
       "Ability to train 100-billion-parameter foundation models directly on microcontrollers"],
      0,
      "Edge AI runs inference directly on local hardware (smartphones, drones, cameras). This eliminates round-trip network latency, preserves privacy by keeping raw data local, and works without an active internet connection.",
      "PCEI-30-01 Block 1.5 - Edge AI",
      ["edge-ai", "low-latency", "privacy"])

add_c(88, "1.5", "Automated Speech Recognition", "Beginner",
      "What does an Automatic Speech Recognition (ASR) system do?",
      "# ASR pipeline:\n# Spoken audio waveform -> Acoustic model -> Language model -> Written text transcript",
      ["Converts spoken audio waveforms into written natural language text",
       "Converts text files into synthesized computer voice output",
       "Translates Python code into executable binary assembly",
       "Compresses MP3 audio files into smaller bitrates"],
      0,
      "Automatic Speech Recognition (ASR) takes acoustic speech signals and transcribes them into readable natural language text, powering voice assistants and automated subtitles.",
      "PCEI-30-01 Block 1.5 - ASR",
      ["speech-recognition", "asr", "audio"])

add_c(89, "1.5", "Text-to-Speech", "Beginner",
      "What is the function of a Text-to-Speech (TTS) AI system?",
      "# TTS pipeline:\n# Written text -> Phoneme mapping -> Neural vocoder -> Audible speech audio",
      ["Synthesizing natural-sounding spoken audio from written text",
       "Transcribing audio dictation into Microsoft Word documents",
       "Translating French text into German text",
       "Filtering background ambient noise from microphone recordings"],
      0,
      "Text-to-Speech (TTS) synthesizes audible, natural-sounding human speech from input text, used in GPS navigation, screen readers for the visually impaired, and virtual voice agents.",
      "PCEI-30-01 Block 1.5 - TTS",
      ["text-to-speech", "tts", "voice-synthesis"])

add_c(90, "1.5", "Supply Chain Optimization", "Intermediate",
      "How is artificial intelligence applied in modern supply chain management?",
      "# Supply chain AI:\n# Demand forecasting + Route optimization + Inventory balancing\noptimal_reorder = forecast_model.predict(sales_history, weather, promotions)",
      ["Forecasting customer demand, dynamically optimizing logistics shipping routes, and automating warehouse inventory replenishment",
       "Replacing all shipping containers with lighter cardboard boxes",
       "Mandating that all freight trucks travel at the exact same constant speed",
       "Eliminating international customs paperwork by ignoring trade regulations"],
      0,
      "AI in supply chains leverages historical sales, seasonal trends, external indicators, and graph routing algorithms to optimize inventory levels, forecast demand, and reduce transportation costs.",
      "PCEI-30-01 Block 1.5 - Supply Chain",
      ["supply-chain", "demand-forecasting", "logistics"])

add_c(91, "1.5", "Algorithmic Trading", "Intermediate",
      "What role do machine learning models play in high-frequency quantitative trading in financial markets?",
      "# Quantitative finance:\n# Analyzing order book depth, market signals, and news sentiment to execute trades in microseconds",
      ["Executing trades in sub-millisecond timeframes based on mathematical pattern recognition in market depth and price signals",
       "Manually telephoning stockbrokers on the trading floor",
       "Printing physical share certificates for corporate archives",
       "Guaranteeing that every single transaction makes an astronomical profit with zero risk"],
      0,
      "Quantitative financial algorithms use ML models to detect subtle price discrepancies, analyze high-velocity order book feeds, and execute automated arbitrage or hedging transactions in microseconds.",
      "PCEI-30-01 Block 1.5 - Algorithmic Trading",
      ["finance", "algorithmic-trading", "quantitative"])

add_c(92, "1.5", "Precision Agriculture", "Beginner",
      "How is computer vision and drone technology used in 'Precision Agriculture'?",
      "# Precision agriculture with multispectral imagery:\n# Identifying crop stress, weed infestations, and targeted fertilizer application",
      ["Analyzing multispectral aerial imagery to detect weed infestations, plant disease, and soil moisture variations for targeted pesticide spraying",
       "Replacing farm soil with synthetic plastic turf",
       "Manually hand-pollinating every individual flower blossom",
       "Using artificial intelligence to change the orbit of the earth around the sun"],
      0,
      "Precision agriculture pairs computer vision with drones and sensors to monitor crop health, identify localized weeds or diseases, and apply water and chemicals only where needed, reducing environmental waste.",
      "PCEI-30-01 Block 1.5 - Precision Agriculture",
      ["agriculture", "drone-imaging", "sustainability"])

add_c(93, "1.5", "Cybersecurity AI", "Intermediate",
      "In enterprise cybersecurity, how do User and Entity Behavior Analytics (UEBA) systems leverage machine learning?",
      "# UEBA anomaly detection:\n# Establishing baseline user behavior -> flagging atypical logins or massive data downloads",
      ["Establishing a baseline profile of normal user activity and flagging anomalous deviations that could indicate compromised credentials or insider threats",
       "Blocking all employee access to the internet permanently",
       "Decrypting all SSL traffic without encryption keys",
       "Automating the physical locking of office doors during lunch hours"],
      0,
      "UEBA uses machine learning to learn normal operational baselines for users and devices. When a user suddenly accesses sensitive servers at 3 AM or downloads unusual volumes of data, the system flags the anomalous risk.",
      "PCEI-30-01 Block 1.5 - Cybersecurity AI",
      ["cybersecurity", "ueba", "anomaly-detection"])

add_c(94, "1.5", "Code Generation AI", "Beginner",
      "How do developer-assistive AI tools (like GitHub Copilot or code assistants) boost software engineering productivity?",
      "# AI developer assistant:\n# Autocompletes boilerplate code, docstrings, and unit test templates based on contextual comments",
      ["By autocompleting boilerplate code, suggesting function implementations from comments, and generating test fixtures",
       "By replacing all human programmers and closing down software companies",
       "By formatting hard drives whenever a syntax error occurs",
       "By translating Python code into ancient hieroglyphics"],
      0,
      "Code generation models assist developers by providing contextual code autocompletions, translating natural language prompts into function scaffolding, and drafting repetitive boilerplate or unit tests.",
      "PCEI-30-01 Block 1.5 - Code Generation",
      ["code-generation", "developer-tools", "productivity"])

add_c(95, "1.5", "Autonomous Robotics", "Intermediate",
      "What key technical problem do Simultaneous Localization and Mapping (SLAM) algorithms solve for mobile robots?",
      "# SLAM challenge:\n# Robot in unknown environment must build a map of the room while simultaneously keeping track of its own location",
      ["Enabling an autonomous robot to construct a map of an unknown environment while simultaneously keeping track of its own position within that map",
       "Translating Python source code into robotic servo motor voltage levels",
       "Formatting robotic user manuals into PDF documents",
       "Connecting robotic vacuum cleaners to social media networks"],
      0,
      "SLAM (Simultaneous Localization and Mapping) is a foundational robotics algorithm that enables an agent to explore an unfamiliar environment, create a geometric map, and pinpoint where it is inside that map.",
      "PCEI-30-01 Block 1.5 - SLAM",
      ["slam", "robotics", "localization"])

add_c(96, "1.5", "Customer Support Chatbots", "Beginner",
      "What is the primary operational advantage of implementing conversational AI in customer support?",
      "# Conversational customer support:\n# 24/7 availability + immediate response to tier-1 common queries",
      ["Providing instant 24/7 self-service resolutions to common tier-1 inquiries, reducing queue wait times and routing complex issues to human agents",
       "Ensuring that customers are permanently prevented from speaking to human staff",
       "Generating randomized responses to confuse callers into hanging up",
       "Eliminating the need for companies to have web servers"],
      0,
      "Conversational AI handles repetitive high-volume customer inquiries (order status, FAQ, password reset) instantly and continuously, freeing human support staff to resolve complex edge cases.",
      "PCEI-30-01 Block 1.5 - Customer Support",
      ["chatbots", "customer-support", "automation"])

add_c(97, "1.5", "Document Processing", "Intermediate",
      "In banking and legal sectors, what does Intelligent Document Processing (IDP) combine to digitize paper forms?",
      "# IDP pipeline:\n# Scanned PDF -> OCR (Optical Character Recognition) -> NLP entity extraction -> Database insertion",
      ["Optical Character Recognition (OCR), computer vision layout analysis, and natural language entity extraction",
       "Ink cartridge recycling sensors and paper shredder motors",
       "High-voltage electrical circuit breakers and cooling coils",
       "Manual transcription by outsourced human typists"],
      0,
      "Intelligent Document Processing (IDP) combines Optical Character Recognition (OCR) to read pixel text, CV to parse tables and layouts, and NLP to extract key-value entities (invoices, tax forms, contracts) into databases.",
      "PCEI-30-01 Block 1.5 - IDP",
      ["idp", "ocr", "document-processing"])

add_c(98, "1.5", "Entertainment & Gaming AI", "Beginner",
      "In video game development, what is the role of Non-Player Character (NPC) AI?",
      "# Game AI:\n# Controls enemy tactics, pathfinding (A*), and realistic NPC behavior to create engaging gameplay",
      ["Governing the behaviors, tactical decisions, and movement pathfinding of non-player characters to provide engaging gameplay",
       "Designing physical plastic packaging for game console discs",
       "Processing credit card transactions for digital in-game purchases",
       "Regulating the internal clock speed of television monitors"],
      0,
      "Video game AI controls enemy behaviors, crowd navigation, and squad tactics using finite state machines, behavior trees, and pathfinding algorithms (like A*) to create convincing interactive challenges.",
      "PCEI-30-01 Block 1.5 - Game AI",
      ["gaming", "npc", "pathfinding"])

add_c(99, "1.5", "Smart Assistants", "Beginner",
      "When a user activates a smart speaker by saying a 'Wake Word' (like 'Hey Siri' or 'Alexa'), where is that initial wake word typically processed?",
      "# Wake-word detection:\n# Runs on low-power local device microcontroller without transmitting audio to the cloud until wake-word is verified",
      ["On a low-power, dedicated on-device chip (Edge AI) that listens locally without transmitting continuous audio to the cloud",
       "By streaming all household conversations 24/7 to satellite servers in orbit",
       "By sending physical radio signals to the local telephone exchange",
       "By calculating millions of blockchain proof-of-stake hashes"],
      0,
      "To conserve battery, minimize latency, and protect consumer privacy, wake-word detection runs locally on a tiny low-power audio coprocessor on the device. Only after the wake-word is confirmed is full audio streamed to the cloud.",
      "PCEI-30-01 Block 1.5 - Wake Words",
      ["smart-assistants", "edge-detection", "privacy"])

add_c(100, "1.5", "AI Impact Summary", "Beginner",
      "What is the consensus perspective among professional AI researchers regarding the ultimate objective of applied artificial intelligence?",
      "# Applied AI objective:\n# Augment human capability, automate hazardous or mundane tasks, and solve complex societal and scientific challenges",
      ["To augment human capabilities, automate dangerous or repetitive labor, and accelerate scientific discovery in medicine, climate, and engineering",
       "To deliberately replace all human social interaction with synthetic computer code",
       "To exhaust global electrical power grids through continuous unconstrained matrix multiplications",
       "To eliminate the need for human beings to think or learn new skills"],
      0,
      "The primary professional objective of applied AI is augmentation: building intelligent computational tools that enhance human productivity, eliminate perilous or drudging labor, and unlock solutions to complex scientific frontiers.",
      "PCEI-30-01 Block 1.5 - AI Objectives",
      ["objectives", "augmentation", "future-of-ai"])

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

write_ts_file("src/data/pceiSection1CardsPart1.ts", "pceiSection1CardsPart1", cards[:50])
write_ts_file("src/data/pceiSection1CardsPart2.ts", "pceiSection1CardsPart2", cards[50:])

with open("src/data/pceiSection1Flashcards.ts", "w") as f:
    f.write("""import { Flashcard } from '../types';
import { pceiSection1CardsPart1 } from './pceiSection1CardsPart1';
import { pceiSection1CardsPart2 } from './pceiSection1CardsPart2';

export const pceiSection1Flashcards: Flashcard[] = [
  ...pceiSection1CardsPart1,
  ...pceiSection1CardsPart2,
];
""")
print("Wrote pceiSection1Flashcards.ts successfully!")
