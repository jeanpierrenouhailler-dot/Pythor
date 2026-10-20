import { Flashcard } from '../types';

export const pceiSection4CardsPart1: Flashcard[] = [
  {
    id: "pcei-4-001",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Perceptron Architecture",
    difficulty: "Beginner",
    question: "What is the mathematical operation performed inside a single artificial neuron (Perceptron)?",
    codeSnippet: "# Artificial neuron computation:\n# 1. Compute weighted sum of inputs plus bias: z = sum(w_i * x_i) + b\n# 2. Pass z through activation function: output = activation(z)\nz = sum(w * x for w, x in zip(weights, inputs)) + bias\ny = activation(z)",
    options: [
      "Computing the weighted sum of inputs plus a bias term, then passing that sum through an activation function",
      "Calculating the square root of the number of inputs",
      "Sorting the input features in alphabetical order",
      "Encrypting the input vector using a public RSA key"
    ],
    correctAnswer: 0,
    explanation: "An artificial neuron takes inputs (x_i), multiplies each by an adjustable weight (w_i), sums them together with a bias term (b), and passes the linear combination through an activation function: f(\u03a3(w_i*x_i) + b).",
    officialRef: "PCEI-30-01 Block 4.1 - Perceptron",
    tags: ["perceptron", "weights", "bias", "activation"]
  },
  {
    id: "pcei-4-002",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Neuron Weights and Bias",
    difficulty: "Beginner",
    question: "In an artificial neuron, what are the distinct functional roles of the 'Weights' (w) and the 'Bias' (b)?",
    codeSnippet: "# Weights scale input influence; bias shifts the activation boundary:\n# z = w1*x1 + w2*x2 + b",
    options: [
      "Weights determine the relative strength/influence of each input feature; the bias shifts the activation threshold independently of inputs",
      "Weights store the model's filename; the bias stores the author's name",
      "Weights are always positive integers; bias is always a negative float",
      "Weights control screen brightness; bias controls audio volume"
    ],
    correctAnswer: 0,
    explanation: "Weights scale the importance of individual input signals. The bias provides an offset that shifts the activation function curve horizontally, allowing the neuron to fire even when all input values are zero.",
    officialRef: "PCEI-30-01 Block 4.1 - Weights vs Bias",
    tags: ["weights", "bias", "neuron-architecture"]
  },
  {
    id: "pcei-4-003",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Activation Functions Purpose",
    difficulty: "Beginner",
    question: "Why are non-linear Activation Functions essential in Multi-Layer Neural Networks?",
    codeSnippet: "# Without non-linear activation:\n# Layer 2: y = W2 * (W1 * x + b1) + b2 = (W2*W1)*x + (W2*b1 + b2) -> Still just a simple linear model!\n# Non-linearity enables learning complex curved decision boundaries",
    options: [
      "Without non-linear activations, stacking multiple layers collapses mathematically into a single linear regression, incapable of learning complex patterns",
      "They prevent the computer from running out of virtual memory",
      "They convert floating-point tensors into standard string objects",
      "They reduce the number of training epochs to exactly one"
    ],
    correctAnswer: 0,
    explanation: "A linear combination of linear functions is always strictly linear. Non-linear activations (like ReLU, Sigmoid) allow deep networks to approximate arbitrary non-linear functions (Universal Approximation Theorem).",
    officialRef: "PCEI-30-01 Block 4.1 - Activation Functions",
    tags: ["activation-functions", "non-linearity", "universal-approximation"]
  },
  {
    id: "pcei-4-004",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "ReLU Activation",
    difficulty: "Beginner",
    question: "What is the mathematical definition of the Rectified Linear Unit (ReLU) activation function: f(z)?",
    codeSnippet: "# ReLU implementation in Python:\ndef relu(z):\n    return max(0.0, z)",
    options: [
      "f(z) = max(0, z) (returns z if z > 0, else returns 0)",
      "f(z) = 1 / (1 + e^(-z))",
      "f(z) = (e^z - e^(-z)) / (e^z + e^(-z))",
      "f(z) = z^2"
    ],
    correctAnswer: 0,
    explanation: "ReLU (Rectified Linear Unit) is defined as f(z) = max(0, z). It passes positive values unchanged and clips negative values to 0. It is computationally simple and mitigates vanishing gradient problems.",
    officialRef: "PCEI-30-01 Block 4.1 - ReLU",
    tags: ["relu", "rectified-linear-unit", "activation"]
  },
  {
    id: "pcei-4-005",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Dying ReLU Problem",
    difficulty: "Intermediate",
    question: "What is the 'Dying ReLU' problem in deep neural network training?",
    codeSnippet: "# Dying ReLU:\n# If a neuron's weights get updated such that z < 0 for all training data, gradient is always 0, and the neuron permanently stops learning!",
    options: [
      "When neurons output 0 for all training inputs, resulting in a gradient of zero so the neuron's weights never update again (it becomes inactive)",
      "When a computer cooling fan stops spinning during training",
      "When a GPU runs out of video memory and aborts execution",
      "When all input features are scaled to negative infinity"
    ],
    correctAnswer: 0,
    explanation: "If a large gradient updates weights such that a neuron outputs negative values across the entire dataset, its output is 0 and its gradient is 0. The neuron becomes 'dead' and cannot recover because backpropagation gradients cannot flow through it.",
    officialRef: "PCEI-30-01 Block 4.1 - Dying ReLU",
    tags: ["dying-relu", "gradients", "neural-networks"]
  },
  {
    id: "pcei-4-006",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Leaky ReLU",
    difficulty: "Intermediate",
    question: "How does 'Leaky ReLU' solve the Dying ReLU problem?",
    codeSnippet: "# Leaky ReLU implementation:\ndef leaky_relu(z, alpha=0.01):\n    return z if z > 0 else alpha * z",
    options: [
      "By allowing a small, non-zero gradient slope (e.g., 0.01 * z) when z < 0, ensuring gradients can still flow through negative activations",
      "By replacing negative numbers with random positive numbers",
      "By restricting the network to only two layers",
      "By converting all weights into complex numbers"
    ],
    correctAnswer: 0,
    explanation: "Leaky ReLU replaces the flat zero slope for negative values with a small positive slope (e.g., f(z) = 0.01z when z < 0). This ensures a small non-zero gradient persists, allowing dead neurons to recover and continue learning.",
    officialRef: "PCEI-30-01 Block 4.1 - Leaky ReLU",
    tags: ["leaky-relu", "vanishing-gradients", "activation"]
  },
  {
    id: "pcei-4-007",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Sigmoid Activation",
    difficulty: "Beginner",
    question: "What is the output range of the Sigmoid activation function \u03c3(z) = 1 / (1 + e^(-z))?",
    codeSnippet: "# Sigmoid output range:\n# Bounded strictly between 0 and 1\n# Often used in output layer of binary classification models",
    options: [
      "Strictly between 0.0 and 1.0",
      "Between -1.0 and +1.0",
      "Between 0.0 and infinity",
      "Between -infinity and +infinity"
    ],
    correctAnswer: 0,
    explanation: "The Sigmoid function squashes any real-valued number into the strictly bounded interval (0, 1), making it ideal for modeling probabilities in the output layer of binary classification networks.",
    officialRef: "PCEI-30-01 Block 4.1 - Sigmoid Range",
    tags: ["sigmoid", "output-range", "binary-classification"]
  },
  {
    id: "pcei-4-008",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Tanh Activation",
    difficulty: "Intermediate",
    question: "What is the output range of the Hyperbolic Tangent (Tanh) activation function, and why is it often preferred over Sigmoid in hidden layers?",
    codeSnippet: "# Tanh output bounds:\n# tanh(z) ranges from -1.0 to +1.0\n# Zero-centered output (mean near 0) makes optimization in hidden layers faster",
    options: [
      "Ranges from -1.0 to +1.0; its zero-centered output helps prevent bias shifts during backpropagation in hidden layers",
      "Ranges from 0.0 to 100.0; it runs faster on CPUs",
      "Ranges from -infinity to 0.0; it only processes negative numbers",
      "Ranges from 1.0 to 2.0; it eliminates all rounding errors"
    ],
    correctAnswer: 0,
    explanation: "Tanh outputs values between -1.0 and +1.0. Because it is centered at zero (mean output is close to 0), it facilitates faster gradient descent convergence in hidden layers compared to strictly positive Sigmoid activations.",
    officialRef: "PCEI-30-01 Block 4.1 - Tanh",
    tags: ["tanh", "zero-centered", "activation"]
  },
  {
    id: "pcei-4-009",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Softmax Function",
    difficulty: "Beginner",
    question: "What is the primary role of the 'Softmax' activation function in deep learning?",
    codeSnippet: "# Softmax calculation on logits vector:\nimport numpy as np\ndef softmax(z):\n    exp_z = np.exp(z - np.max(z))\n    return exp_z / np.sum(exp_z)\n# Outputs sum to exactly 1.0!",
    options: [
      "Applied to the final output layer of multiclass classification networks to convert raw logits into a valid probability distribution that sums to 1.0",
      "Applied to image pixels to compress them into JPEG files",
      "Used to reduce physical heat generation on graphics cards",
      "Used to encrypt network communications between servers"
    ],
    correctAnswer: 0,
    explanation: "Softmax takes a vector of raw unnormalized real-valued logits and exponentiates and normalizes them, transforming them into a probability distribution over K mutually exclusive classes where all probabilities sum to 1.0.",
    officialRef: "PCEI-30-01 Block 4.1 - Softmax",
    tags: ["softmax", "multiclass", "probability-distribution"]
  },
  {
    id: "pcei-4-010",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Biological vs Artificial Neuron",
    difficulty: "Beginner",
    question: "In biological neuroscience analogies, what biological structures correspond roughly to an artificial neuron's Inputs, Weights, and Output?",
    codeSnippet: "# Biological to artificial mapping:\n# Dendrites -> Inputs\n# Synaptic strengths -> Weights\n# Soma (Cell body) -> Summation & Activation\n# Axon -> Output transmission",
    options: [
      "Dendrites (Inputs), Synaptic strengths (Weights), and Axon (Output signal)",
      "Bones (Inputs), Muscles (Weights), and Blood vessels (Output)",
      "Lungs (Inputs), Heart (Weights), and Kidneys (Output)",
      "Skin (Inputs), Hair (Weights), and Nails (Output)"
    ],
    correctAnswer: 0,
    explanation: "Biological neurons receive electrical signals through dendrites (inputs), modulated by synaptic gaps (weights). The cell body sums these potentials and, if an action threshold is breached, fires down the axon (output).",
    officialRef: "PCEI-30-01 Block 4.1 - Biological Analogy",
    tags: ["biological-neuron", "axon", "dendrite", "synapse"]
  },
  {
    id: "pcei-4-011",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Single-Layer Perceptron Limits",
    difficulty: "Intermediate",
    question: "What famous limitation of the Single-Layer Perceptron did Minsky and Papert prove in their 1969 book?",
    codeSnippet: "# XOR truth table:\n# (0, 0) -> 0, (0, 1) -> 1, (1, 0) -> 1, (1, 1) -> 0\n# Cannot be separated by a single straight line!",
    options: [
      "A single-layer perceptron cannot solve non-linearly separable problems, such as the simple XOR (Exclusive OR) logical function",
      "Perceptrons cannot perform integer addition",
      "Perceptrons can only run on computers with 64-bit processors",
      "Perceptrons require infinite training data to learn AND gates"
    ],
    correctAnswer: 0,
    explanation: "Minsky and Papert demonstrated that single-layer perceptrons can only classify linearly separable patterns. Simple non-linear logic gates like XOR cannot be solved without adding at least one hidden layer.",
    officialRef: "PCEI-30-01 Block 4.1 - XOR Problem",
    tags: ["xor-problem", "linear-separability", "history"]
  },
  {
    id: "pcei-4-012",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Vanishing Gradient Problem",
    difficulty: "Intermediate",
    question: "Why do Sigmoid and Tanh activations suffer from the 'Vanishing Gradient' problem in deep multi-layer networks?",
    codeSnippet: "# Derivative of sigmoid:\n# S'(z) = S(z) * (1 - S(z)) -> Max derivative is only 0.25!\n# Multiplying many fractions < 0.25 across layers shrinks gradients to near ZERO!",
    options: [
      "Their derivatives are very small (Sigmoid's maximum derivative is 0.25); multiplying these fractions across many layers during backpropagation causes gradients to shrink to near zero, halting learning in early layers",
      "They cause numbers to become too large, overflowing GPU memory",
      "They convert all floating-point numbers into zeros on every forward pass",
      "They require operating systems to reboot after 10 epochs"
    ],
    correctAnswer: 0,
    explanation: "In deep networks, backpropagation applies the chain rule, multiplying layer derivatives. Since Sigmoid derivatives are <= 0.25, multiplying across 10+ layers drives gradients exponentially toward 0, freezing early layer weights.",
    officialRef: "PCEI-30-01 Block 4.1 - Vanishing Gradient",
    tags: ["vanishing-gradient", "backpropagation", "sigmoid"]
  },
  {
    id: "pcei-4-013",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Exploding Gradient Problem",
    difficulty: "Intermediate",
    question: "What is the 'Exploding Gradient' problem, and what common technique is used to counteract it?",
    codeSnippet: "# Exploding gradients & gradient clipping:\n# Gradients grow exponentially large -> weight updates destabilize (NaN)\n# Gradient clipping clamps gradients to a maximum norm threshold\ntorch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)",
    options: [
      "Gradients accumulate exponentially large values during backpropagation, causing unstable weight updates and NaN values; solved using Gradient Clipping",
      "The GPU physically catches fire; solved using fire extinguishers",
      "The dataset expands exponentially; solved by deleting columns",
      "The loss function drops to negative infinity; solved by restarting the script"
    ],
    correctAnswer: 0,
    explanation: "Exploding gradients occur when large weight updates compound through deep layers, causing weights to oscillate wildly or overflow to NaN/infinity. Gradient clipping caps the maximum gradient norm to stabilize updates.",
    officialRef: "PCEI-30-01 Block 4.1 - Exploding Gradient",
    tags: ["exploding-gradient", "gradient-clipping", "stability"]
  },
  {
    id: "pcei-4-014",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Universal Approximation Theorem",
    difficulty: "Advanced",
    question: "What does the Universal Approximation Theorem establish about feedforward neural networks?",
    codeSnippet: "# Universal Approximation Theorem:\n# A feedforward network with a single hidden layer containing a finite number of non-linear neurons can approximate any continuous function on compact subsets of R^n",
    options: [
      "A standard feedforward network with a single hidden layer containing finite non-linear neurons can approximate any continuous function to arbitrary precision",
      "Any machine learning model can be converted into a linear regression line",
      "Neural networks are guaranteed to achieve 100% accuracy on every dataset",
      "Deep networks require zero training data to solve computer vision tasks"
    ],
    correctAnswer: 0,
    explanation: "The Universal Approximation Theorem proves that a feedforward network with even a single hidden layer and non-linear activation functions can approximate any continuous function on a compact domain given sufficient neurons.",
    officialRef: "PCEI-30-01 Block 4.1 - Universal Approximation",
    tags: ["universal-approximation", "theory", "representation"]
  },
  {
    id: "pcei-4-015",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Weight Initialization",
    difficulty: "Intermediate",
    question: "Why is initializing all neural network weights to exact zeros (`w = 0.0`) a fatal mistake?",
    codeSnippet: "# Symmetry problem:\n# If all weights are 0, all neurons in a layer compute identical outputs and receive identical gradients!\n# Neurons remain symmetric clones forever!",
    options: [
      "All hidden neurons will compute the exact same output and receive the exact same gradient updates, destroying symmetry breaking and preventing neurons from learning distinct features",
      "It causes an instant ZeroDivisionError exception in Python",
      "It corrupts the operating system virtual memory registers",
      "It forces the network to only output negative numbers"
    ],
    correctAnswer: 0,
    explanation: "If all weights start at zero, every neuron in a hidden layer computes the exact same forward output and receives the identical backpropagation gradient. They will update symmetrically, acting as one giant redundant neuron.",
    officialRef: "PCEI-30-01 Block 4.1 - Symmetry Breaking",
    tags: ["weight-initialization", "symmetry-breaking", "zero-initialization"]
  },
  {
    id: "pcei-4-016",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "He / Xavier Initialization",
    difficulty: "Advanced",
    question: "Why are specialized weight initializers like 'He (Kaiming) Initialization' used with ReLU activations?",
    codeSnippet: "# He / Kaiming normal initialization:\n# std = sqrt(2 / fan_in) -> preserves activation variance across layers with ReLU",
    options: [
      "They draw initial weights from distributions scaled to the number of input nodes, preserving variance of activations and gradients across deep layers",
      "They guarantee that training will complete in under 5 seconds",
      "They eliminate the need for GPU acceleration",
      "They format weight matrices into human-readable text strings"
    ],
    correctAnswer: 0,
    explanation: "He initialization scales initial weights based on fan-in (variance = 2 / fan_in), keeping signal variance constant across layers. This prevents forward activations and backward gradients from vanishing or exploding when using ReLU.",
    officialRef: "PCEI-30-01 Block 4.1 - Weight Initialization",
    tags: ["he-initialization", "xavier", "kaiming", "variance"]
  },
  {
    id: "pcei-4-017",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Multilayer Perceptron (MLP)",
    difficulty: "Beginner",
    question: "What are the three structural layers that comprise a standard Multilayer Perceptron (MLP)?",
    codeSnippet: "# MLP layer architecture:\n# Input Layer -> One or more Hidden Layers -> Output Layer",
    options: [
      "Input Layer, Hidden Layer(s), and Output Layer",
      "Database Layer, Controller Layer, and View Layer",
      "Hardware Layer, Operating System Layer, and Application Layer",
      "Network Layer, Transport Layer, and Session Layer"
    ],
    correctAnswer: 0,
    explanation: "An MLP consists of: an Input Layer (receives raw features), one or more Hidden Layers (extracts hierarchical representations), and an Output Layer (produces the final prediction or classification probability).",
    officialRef: "PCEI-30-01 Block 4.1 - MLP Architecture",
    tags: ["mlp", "layers", "architecture"]
  },
  {
    id: "pcei-4-018",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Feedforward Network",
    difficulty: "Beginner",
    question: "Why is an MLP called a 'Feedforward' neural network?",
    codeSnippet: "# Feedforward flow:\n# Information moves in only one direction: forward from inputs, through hidden units, to outputs (no cycles/loops)",
    options: [
      "Information moves in strictly one forward direction from input nodes through hidden units to output nodes, with no backward feedback loops or cycles",
      "It feeds raw text files to the computer's CPU cache",
      "It only processes inputs that are positive numbers",
      "It requires constant user input during every second of execution"
    ],
    correctAnswer: 0,
    explanation: "In a feedforward network, information flows unidirectionally from inputs to outputs. There are no recurrent feedback connections or cyclic loops (unlike Recurrent Neural Networks).",
    officialRef: "PCEI-30-01 Block 4.1 - Feedforward",
    tags: ["feedforward", "unidirectional", "no-cycles"]
  },
  {
    id: "pcei-4-019",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Logits",
    difficulty: "Intermediate",
    question: "In deep learning classification pipelines, what are 'Logits'?",
    codeSnippet: "# Logits: Unnormalized raw outputs of the final linear layer BEFORE applying softmax/sigmoid\nlogits = model.linear_layer(hidden_state)\nprobabilities = torch.softmax(logits, dim=-1)",
    options: [
      "The raw, unnormalized real-valued output scores produced by the final linear layer of a network before applying Softmax or Sigmoid",
      "The mathematical logarithms of the training loss values",
      "The debug log statements written to a server log file",
      "The timing logs measuring forward propagation latency in milliseconds"
    ],
    correctAnswer: 0,
    explanation: "Logits are the raw numerical outputs of the last linear layer of a neural network before an activation function (like Softmax or Sigmoid) squashes them into calibrated probabilities.",
    officialRef: "PCEI-30-01 Block 4.1 - Logits",
    tags: ["logits", "softmax", "neural-outputs"]
  },
  {
    id: "pcei-4-020",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.1",
    category: "Forward Propagation",
    difficulty: "Beginner",
    question: "What occurs during the 'Forward Propagation' (Forward Pass) phase of a neural network?",
    codeSnippet: "# Forward pass:\n# Input data travels through layers, computing activations layer by layer to generate a prediction and calculate loss\npred = model(X)\nloss = loss_fn(pred, y)",
    options: [
      "Input features pass sequentially through the network's layers, computing activations at each stage to generate a final prediction and calculate loss",
      "The model updates its synaptic weights using gradient descent partial derivatives",
      "The computer downloads updated software drivers from the cloud",
      "The training dataset is shuffled and split into test folds"
    ],
    correctAnswer: 0,
    explanation: "During forward propagation, input data flows forward through the network: each layer multiplies inputs by weights, adds biases, and applies activations, culminating in a model prediction and an initial loss calculation.",
    officialRef: "PCEI-30-01 Block 4.1 - Forward Propagation",
    tags: ["forward-pass", "activations", "prediction"]
  },
  {
    id: "pcei-4-021",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Loss Function",
    difficulty: "Beginner",
    question: "What is the role of a 'Loss Function' (Cost Function) in training deep neural networks?",
    codeSnippet: "# Loss function evaluates prediction error:\nloss = criterion(y_predicted, y_actual)\n# The optimizer's goal is to minimize this scalar loss value",
    options: [
      "To quantify the mathematical error or discrepancy between the model's predictions and the actual ground-truth targets",
      "To measure the electrical power lost by the computer's power supply",
      "To track memory packets lost during network transmission",
      "To count the number of deleted records in the database"
    ],
    correctAnswer: 0,
    explanation: "A loss function maps model predictions and actual targets to a single scalar value measuring error. The training process adjusts network weights to minimize this loss.",
    officialRef: "PCEI-30-01 Block 4.2 - Loss Function",
    tags: ["loss-function", "cost-function", "optimization"]
  },
  {
    id: "pcei-4-022",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Binary Cross-Entropy",
    difficulty: "Intermediate",
    question: "Which loss function is standard for training Binary Classification neural networks?",
    codeSnippet: "# Binary Cross-Entropy Loss formula:\n# L = - [y * log(p) + (1 - y) * log(1 - p)]\nimport torch.nn as nn\ncriterion = nn.BCELoss()",
    options: [
      "Binary Cross-Entropy (Log Loss)",
      "Mean Squared Error (MSE)",
      "Categorical Hinge Loss",
      "K-Means Inertia"
    ],
    correctAnswer: 0,
    explanation: "Binary Cross-Entropy (BCE) measures the distance between true binary labels and predicted probabilities: -[y*log(p) + (1-y)*log(1-p)]. It heavily penalizes confident incorrect predictions.",
    officialRef: "PCEI-30-01 Block 4.2 - BCE Loss",
    tags: ["binary-cross-entropy", "bce", "log-loss"]
  },
  {
    id: "pcei-4-023",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Categorical Cross-Entropy",
    difficulty: "Intermediate",
    question: "Which loss function is standard for training Multiclass Classification neural networks (e.g., ImageNet with 1,000 classes)?",
    codeSnippet: "# Categorical Cross-Entropy formula:\n# L = - sum(y_i * log(p_i))\nimport torch.nn as nn\ncriterion = nn.CrossEntropyLoss()",
    options: [
      "Categorical Cross-Entropy",
      "Mean Absolute Error (MAE)",
      "Binary Cross-Entropy",
      "Euclidean Distance Loss"
    ],
    correctAnswer: 0,
    explanation: "Categorical Cross-Entropy evaluates multiclass classification with mutually exclusive classes (paired with Softmax outputs). It sums the negative log probabilities of the true class labels across samples.",
    officialRef: "PCEI-30-01 Block 4.2 - Categorical Cross-Entropy",
    tags: ["categorical-cross-entropy", "multiclass-loss", "softmax"]
  },
  {
    id: "pcei-4-024",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Backpropagation",
    difficulty: "Intermediate",
    question: "What is the core mechanism of the 'Backpropagation' algorithm in deep learning?",
    codeSnippet: "# Backpropagation applying chain rule:\n# dLoss/dW = (dLoss/dOutput) * (dOutput/dHidden) * (dHidden/dW)\nloss.backward()  # PyTorch computes gradients automatically via reverse-mode autodiff",
    options: [
      "Applying the calculus Chain Rule backwards from the output layer through hidden layers to compute the partial derivative (gradient) of the loss with respect to each weight",
      "Running the neural network in reverse to generate synthetic training data",
      "Deleting weights that produce negative activations",
      "Converting the neural network architecture into a decision tree"
    ],
    correctAnswer: 0,
    explanation: "Backpropagation uses the calculus chain rule in reverse (reverse-mode automatic differentiation) to efficiently calculate the partial derivative (gradient) of the loss function with respect to every trainable weight in the network.",
    officialRef: "PCEI-30-01 Block 4.2 - Backpropagation",
    tags: ["backpropagation", "chain-rule", "gradients"]
  },
  {
    id: "pcei-4-025",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Gradient Descent",
    difficulty: "Beginner",
    question: "How does 'Gradient Descent' use calculated gradients to update neural network weights?",
    codeSnippet: "# Gradient descent weight update formula:\n# w_new = w_old - learning_rate * gradient\nweight = weight - lr * grad",
    options: [
      "It steps model weights in the opposite direction of the gradient by an amount scaled by the learning rate: w = w - \u03b7 * (\u2202L/\u2202w)",
      "It multiplies weights by the square root of the gradient",
      "It adds random noise to all weights until the loss drops",
      "It sets all weights equal to the calculated loss value"
    ],
    correctAnswer: 0,
    explanation: "The gradient points in the direction of steepest increase in loss. Gradient descent steps weights in the opposite direction (downhill) scaled by the learning rate (\u03b7): w_new = w_old - \u03b7 * gradient.",
    officialRef: "PCEI-30-01 Block 4.2 - Gradient Descent",
    tags: ["gradient-descent", "optimization", "weight-update"]
  },
  {
    id: "pcei-4-026",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Learning Rate",
    difficulty: "Beginner",
    question: "What happens if the 'Learning Rate' hyperparameter is set too large, versus too small?",
    codeSnippet: "# Learning rate trade-off:\n# Too large: Overshoots minimum, oscillates wildly, or diverges to NaN\n# Too small: Takes millions of epochs to converge, gets trapped in poor local minima",
    options: [
      "Too large causes weights to overshoot minima and diverge; too small makes training painfully slow and prone to getting stuck in local plateaus",
      "Too large crashes the operating system; too small turns off the monitor",
      "Too large changes the network into a decision tree; too small changes it into a database",
      "There is no effect; learning rate is purely cosmetic"
    ],
    correctAnswer: 0,
    explanation: "Learning rate (\u03b7) governs step size. An overly large learning rate causes updates to overshoot the valley and diverge. An overly small learning rate results in sluggish convergence and stagnation in shallow local minima.",
    officialRef: "PCEI-30-01 Block 4.2 - Learning Rate",
    tags: ["learning-rate", "hyperparameters", "convergence"]
  },
  {
    id: "pcei-4-027",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Stochastic vs Batch vs Mini-Batch",
    difficulty: "Intermediate",
    question: "What is 'Mini-Batch Gradient Descent', and why is it the universal industry standard over pure Batch or pure Stochastic Gradient Descent?",
    codeSnippet: "# Mini-batch processing:\n# Computes gradients over small subsets (e.g., batch_size = 32, 64, or 128)\nfor batch_X, batch_y in dataloader:\n    optimizer.zero_grad()\n    loss = criterion(model(batch_X), batch_y)\n    loss.backward()\n    optimizer.step()",
    options: [
      "It computes gradients and updates weights on small subsets of data (e.g., 32-128 samples), balancing computational efficiency on GPU tensor cores with smooth, stable gradient convergence",
      "It processes the entire 10-terabyte dataset all at once on a single CPU core",
      "It updates weights only once per calendar year",
      "It trains models without calculating gradients"
    ],
    correctAnswer: 0,
    explanation: "Batch GD (all data at once) is memory-prohibitive. Pure SGD (1 sample per update) is noisy and underutilizes parallel GPUs. Mini-batch GD balances hardware vectorization efficiency on GPUs with stable gradient updates.",
    officialRef: "PCEI-30-01 Block 4.2 - Mini-Batch GD",
    tags: ["mini-batch", "sgd", "gpu-optimization"]
  },
  {
    id: "pcei-4-028",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Epoch vs Iteration vs Batch Size",
    difficulty: "Beginner",
    question: "If a training dataset has 1,000 samples and a batch size of 50, how many iterations constitute one 'Epoch'?",
    codeSnippet: "# Epoch calculation:\n# Total Samples = 1000, Batch Size = 50\n# Iterations per Epoch = 1000 / 50 = 20 iterations\niterations = total_samples // batch_size",
    options: [
      "20 iterations",
      "50 iterations",
      "1,000 iterations",
      "1 iteration"
    ],
    correctAnswer: 0,
    explanation: "An 'Epoch' is one complete pass through the entire training dataset. With 1,000 samples and batch size of 50, one epoch requires 1000 / 50 = 20 batch update iterations.",
    officialRef: "PCEI-30-01 Block 4.2 - Epoch and Batch Size",
    tags: ["epoch", "batch-size", "iterations"]
  },
  {
    id: "pcei-4-029",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Adam Optimizer",
    difficulty: "Intermediate",
    question: "Why is the 'Adam' (Adaptive Moment Estimation) optimizer widely adopted as the default choice in deep learning?",
    codeSnippet: "# Adam combines Momentum + RMSProp:\n# Tracks both first moment (mean of gradients) and second moment (uncentered variance of gradients)\nimport torch.optim as optim\noptimizer = optim.Adam(model.parameters(), lr=0.001)",
    options: [
      "It combines the benefits of Momentum (smoothing oscillations) and RMSProp (adapting individual learning rates per parameter based on historical gradient variance)",
      "It was named after a famous video game character",
      "It guarantees zero training loss on the first epoch",
      "It requires no hyperparameter configuration whatsoever"
    ],
    correctAnswer: 0,
    explanation: "Adam computes adaptive learning rates for each parameter: it stores an exponentially decaying average of past gradients (momentum) and past squared gradients (RMSprop), providing robust, fast convergence across diverse architectures.",
    officialRef: "PCEI-30-01 Block 4.2 - Adam Optimizer",
    tags: ["adam", "momentum", "rmsprop", "optimizers"]
  },
  {
    id: "pcei-4-030",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Momentum in Optimization",
    difficulty: "Intermediate",
    question: "How does 'Momentum' help standard Gradient Descent navigate ravines and escape shallow local minima?",
    codeSnippet: "# Momentum update:\n# velocity = beta * velocity + (1 - beta) * gradient\n# w = w - lr * velocity\n# Acts like a heavy ball rolling down a hill",
    options: [
      "It accumulates past gradient vectors in a velocity term (like a heavy physical ball rolling downhill), smoothing high-frequency oscillations and accelerating through flat plateaus",
      "It increases the physical clock speed of GPU memory",
      "It reverses the direction of backpropagation every 10 steps",
      "It converts 2D matrices into 3D tensors"
    ],
    correctAnswer: 0,
    explanation: "Momentum adds a fraction of the previous update to the current update. This damps oscillations across steep ravines while building momentum down gentle consistent slopes, accelerating convergence.",
    officialRef: "PCEI-30-01 Block 4.2 - Momentum",
    tags: ["momentum", "gradient-descent", "optimization"]
  },
  {
    id: "pcei-4-031",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Dropout Regularization",
    difficulty: "Beginner",
    question: "How does 'Dropout' prevent overfitting during the training of deep neural networks?",
    codeSnippet: "# Dropout in PyTorch:\nimport torch.nn as nn\n# Randomly sets 50% of neuron activations to 0 on each forward pass during training\ndropout_layer = nn.Dropout(p=0.5)",
    options: [
      "By randomly deactivating (setting to zero) a chosen percentage of neuron activations during each training forward pass, preventing neurons from co-adapting",
      "By dropping low-accuracy training images directly into the computer's recycle bin",
      "By automatically disconnecting the computer from the local network",
      "By permanently deleting 50% of the model's weights after training finishes"
    ],
    correctAnswer: 0,
    explanation: "During training, Dropout randomly turns off a fraction (e.g., p=0.5) of neurons on each forward pass. This forces remaining neurons to learn robust independent representations without relying on brittle co-adaptations.",
    officialRef: "PCEI-30-01 Block 4.2 - Dropout",
    tags: ["dropout", "regularization", "co-adaptation"]
  },
  {
    id: "pcei-4-032",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Batch Normalization",
    difficulty: "Intermediate",
    question: "What primary benefit does 'Batch Normalization' (BatchNorm) provide when inserted between neural network layers?",
    codeSnippet: "# Batch Normalization in PyTorch:\n# Normalizes activations across the mini-batch to mean=0, var=1\nimport torch.nn as nn\nbn_layer = nn.BatchNorm1d(num_features=128)",
    options: [
      "It normalizes the layer activations across each mini-batch (mean 0, variance 1), stabilizing training dynamics and allowing much higher learning rates",
      "It formats the training dataset into alphabetical batches",
      "It eliminates the need to use activation functions",
      "It compresses neural network weights into 8-bit integers"
    ],
    correctAnswer: 0,
    explanation: "Batch Normalization standardizes layer inputs across the current mini-batch, stabilizing internal covariate shift. This accelerates training, permits higher learning rates, and provides a slight regularizing effect.",
    officialRef: "PCEI-30-01 Block 4.2 - Batch Normalization",
    tags: ["batch-normalization", "covariate-shift", "training-stability"]
  },
  {
    id: "pcei-4-033",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Early Stopping",
    difficulty: "Beginner",
    question: "What is 'Early Stopping' in deep learning training loops?",
    codeSnippet: "# Early stopping logic:\nif val_loss < best_val_loss:\n    best_val_loss = val_loss\n    patience_counter = 0\nelse:\n    patience_counter += 1\n    if patience_counter >= patience:\n        print('Early stopping triggered!')\n        break",
    options: [
      "Monitoring validation loss and halting training when validation performance stops improving for a set number of epochs (patience), preventing overfitting",
      "Terminating training whenever the user presses the Escape key",
      "Stopping training after exactly 60 seconds regardless of progress",
      "Closing the Python interpreter when the battery falls below 20%"
    ],
    correctAnswer: 0,
    explanation: "Early stopping tracks validation loss. When validation loss stops decreasing and begins creeping upwards (signaling that the model is beginning to memorize training noise), training halts and the best weights are restored.",
    officialRef: "PCEI-30-01 Block 4.2 - Early Stopping",
    tags: ["early-stopping", "validation-loss", "patience"]
  },
  {
    id: "pcei-4-034",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Learning Rate Schedulers",
    difficulty: "Intermediate",
    question: "Why are Learning Rate Schedulers (e.g., StepLR, Cosine Annealing) used during deep model training?",
    codeSnippet: "# Learning rate scheduling:\n# Start with higher lr for rapid initial progress; decay lr later for fine-tuning near the minimum\nscheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=50)",
    options: [
      "To start with a higher learning rate for fast initial exploration, and gradually reduce the rate as training progresses to settle precisely into deep minima",
      "To change the computer's calendar date automatically",
      "To schedule training jobs to run exclusively at midnight",
      "To force learning rates to remain strictly constant forever"
    ],
    correctAnswer: 0,
    explanation: "Early in training, large learning rate steps help escape shallow local plateaus. As the network nears the optimal minimum, decaying the learning rate allows it to settle into the valley without overshooting.",
    officialRef: "PCEI-30-01 Block 4.2 - LR Schedulers",
    tags: ["lr-scheduler", "cosine-annealing", "decay"]
  },
  {
    id: "pcei-4-035",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Weight Decay",
    difficulty: "Intermediate",
    question: "In deep learning optimizers, how is L2 Regularization mathematically implemented via 'Weight Decay'?",
    codeSnippet: "# Weight decay update step:\n# w = w - lr * gradient - lr * weight_decay * w\n# Directly shrinks weights on each update step",
    options: [
      "By subtracting a small percentage of the current weight value on each step, penalizing large weights and encouraging simpler network representations",
      "By allowing weights to physically degrade on the silicon chip over time",
      "By deleting weights that are less than 0.001",
      "By multiplying weights by negative one on alternating epochs"
    ],
    correctAnswer: 0,
    explanation: "Weight decay subtracts a fraction of the current weight vector on every update step (w_new = (1 - \u03bb)*w_old - lr*grad), directly penalizing large weights to prevent overfitting.",
    officialRef: "PCEI-30-01 Block 4.2 - Weight Decay",
    tags: ["weight-decay", "l2-regularization", "optimizers"]
  },
  {
    id: "pcei-4-036",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Autoencoders",
    difficulty: "Intermediate",
    question: "What is an 'Autoencoder' neural network architecture, and what is it trained to do?",
    codeSnippet: "# Autoencoder architecture:\n# Input (X) -> Encoder -> Bottleneck Latent Space (Z) -> Decoder -> Reconstruction (X')\n# Loss = MSE(X, X')",
    options: [
      "An unsupervised neural network trained to reconstruct its own input data through an information bottleneck (latent space), learning compressed feature representations",
      "An automated system that writes Python code without human intervention",
      "A compiler that translates C++ into assembly language",
      "A tool that encodes passwords using MD5 hashes"
    ],
    correctAnswer: 0,
    explanation: "An Autoencoder consists of an Encoder that compresses input data into a low-dimensional bottleneck (latent code) and a Decoder that reconstructs the input from that code, widely used for dimensionality reduction and denoising.",
    officialRef: "PCEI-30-01 Block 4.2 - Autoencoders",
    tags: ["autoencoders", "latent-space", "unsupervised-dl"]
  },
  {
    id: "pcei-4-037",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "GANs Architecture",
    difficulty: "Intermediate",
    question: "In Generative Adversarial Networks (GANs), what are the opposing roles of the 'Generator' and the 'Discriminator'?",
    codeSnippet: "# GAN minimax game:\n# Generator: Creates realistic synthetic samples from random noise\n# Discriminator: Evaluates whether a sample is Real (from dataset) or Fake (from generator)",
    options: [
      "The Generator creates synthetic data from noise; the Discriminator evaluates whether samples are real (from training data) or fake (from the generator)",
      "The Generator writes source code; the Discriminator runs the unit tests",
      "The Generator encrypts files; the Discriminator decrypts files",
      "The Generator trains on CPUs; the Discriminator trains on GPUs"
    ],
    correctAnswer: 0,
    explanation: "GANs use an adversarial game: the Generator tries to produce realistic synthetic data (like photos) from noise, while the Discriminator tries to distinguish real dataset images from generator fakes, driving mutual improvement.",
    officialRef: "PCEI-30-01 Block 4.2 - GANs",
    tags: ["gans", "generator", "discriminator", "adversarial"]
  },
  {
    id: "pcei-4-038",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Gradient Checking",
    difficulty: "Advanced",
    question: "What is 'Gradient Checking' used for when developing custom neural network layers?",
    codeSnippet: "# Numerical gradient verification:\n# grad_approx = (J(theta + eps) - J(theta - eps)) / (2 * eps)\n# Compare grad_approx with analytical backprop gradient",
    options: [
      "Numerically approximating derivatives using finite differences to verify that analytical backpropagation calculations are coded correctly without bugs",
      "Checking that the GPU temperature remains within safe limits",
      "Verifying that training images have valid dimensions",
      "Counting how many gradients are positive vs negative"
    ],
    correctAnswer: 0,
    explanation: "Gradient checking verifies analytical backpropagation implementations by computing two-sided finite difference numerical approximations: (J(\u03b8+\u03b5) - J(\u03b8-\u03b5)) / (2\u03b5) and ensuring the relative difference is minuscule (< 1e-7).",
    officialRef: "PCEI-30-01 Block 4.2 - Gradient Checking",
    tags: ["gradient-checking", "finite-differences", "debugging"]
  },
  {
    id: "pcei-4-039",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "Evaluation Mode",
    difficulty: "Beginner",
    question: "Why must `model.eval()` be called in PyTorch before performing inference or testing?",
    codeSnippet: "# PyTorch model modes:\nmodel.eval()  # Disables Dropout and freezes BatchNorm running statistics\nwith torch.no_grad():\n    predictions = model(X_test)",
    options: [
      "It disables stochastic layers like Dropout and switches Batch Normalization to use frozen running statistics rather than batch statistics",
      "It compiles the PyTorch model into native machine assembly",
      "It deletes the training dataset from system RAM",
      "It grants administrator access to the neural network"
    ],
    correctAnswer: 0,
    explanation: "In PyTorch, model.eval() switches behavioral flags for layers that behave differently during training vs inference: Dropout is disabled (no nodes dropped), and BatchNorm uses historical population running statistics.",
    officialRef: "PCEI-30-01 Block 4.2 - model.eval",
    tags: ["model-eval", "inference", "pytorch"]
  },
  {
    id: "pcei-4-040",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.2",
    category: "torch.no_grad",
    difficulty: "Beginner",
    question: "Why is inference code wrapped in `with torch.no_grad():` in PyTorch?",
    codeSnippet: "# Disabling autograd during inference:\nwith torch.no_grad():\n    outputs = model(inputs)\n# Saves vast amounts of GPU memory by not storing intermediate tensors for backprop",
    options: [
      "It deactivates the autograd gradient computation engine, significantly reducing memory consumption and speeding up inference",
      "It prevents the model from generating incorrect predictions",
      "It hides the prediction outputs from unauthorized users",
      "It translates tensor outputs into audio speech"
    ],
    correctAnswer: 0,
    explanation: "During inference, backpropagation is not performed. torch.no_grad() disables the computational tracking graph, preventing PyTorch from caching intermediate activation tensors and saving massive amounts of VRAM.",
    officialRef: "PCEI-30-01 Block 4.2 - torch.no_grad",
    tags: ["no_grad", "autograd", "inference-optimization"]
  },
  {
    id: "pcei-4-041",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.3",
    category: "Digital Images as Tensors",
    difficulty: "Beginner",
    question: "How is a standard color digital image represented computationally as a tensor?",
    codeSnippet: "# Color image tensor dimensions (Height, Width, Channels):\n# E.g., (1080, 1920, 3) for Full HD with RGB channels\nimport numpy as np\nimage_tensor = np.zeros((224, 224, 3), dtype=np.uint8)",
    options: [
      "As a 3D numerical array of pixel values with dimensions: (Height, Width, Channels), where channels are Red, Green, and Blue (RGB) spanning 0 to 255",
      "As a single continuous text string of hexadecimal numbers",
      "As a 1D list of image filenames",
      "As an audio frequency waveform spectrogram"
    ],
    correctAnswer: 0,
    explanation: "A digital color image is stored as a 3D matrix (Height x Width x Channels). Each pixel coordinate contains integer intensity values (typically 0-255 for 8-bit color) across the Red, Green, and Blue (RGB) color channels.",
    officialRef: "PCEI-30-01 Block 4.3 - Image Tensors",
    tags: ["images", "pixels", "rgb", "tensors"]
  },
  {
    id: "pcei-4-042",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.3",
    category: "Convolution Operation",
    difficulty: "Beginner",
    question: "What is the mathematical 'Convolution' operation in a Convolutional Neural Network (CNN)?",
    codeSnippet: "# Convolution operation:\n# Sliding a small kernel filter across an image, computing element-wise products and summing to create a feature map",
    options: [
      "Sliding a small learnable filter matrix (kernel) across an image, computing the element-wise dot product at each position to produce a Feature Map",
      "Rotating an image 180 degrees upside down",
      "Compressing an image using standard ZIP compression",
      "Inverting the colors from RGB to CMYK"
    ],
    correctAnswer: 0,
    explanation: "A 2D convolution slides a small matrix of weights (kernel/filter, e.g., 3x3) over an input tensor, calculating element-wise multiplications and summing them into a scalar output at each location, producing a Feature Map.",
    officialRef: "PCEI-30-01 Block 4.3 - Convolution",
    tags: ["convolution", "kernel", "feature-map"]
  },
  {
    id: "pcei-4-043",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.3",
    category: "Kernels and Feature Extraction",
    difficulty: "Intermediate",
    question: "What low-level visual features do early convolutional layers in a deep CNN naturally learn to detect?",
    codeSnippet: "# Hierarchical visual feature representation:\n# Layer 1: Edges, gradients, lines, color blobs\n# Mid Layers: Textures, corners, curves, shapes\n# High Layers: Object parts (eyes, wheels, noses)",
    options: [
      "Basic low-level visual primitives such as edges, lines, corners, and color gradients",
      "High-level complete semantics like entire human faces and car models",
      "Customer credit scores and bank account balances",
      "Natural language grammar parse trees"
    ],
    correctAnswer: 0,
    explanation: "Deep CNNs learn hierarchical visual representations: early layers act as Gabor-like edge and contour filters; intermediate layers detect textures and shapes; deep layers detect complete object parts (eyes, wheels).",
    officialRef: "PCEI-30-01 Block 4.3 - Feature Hierarchy",
    tags: ["kernels", "feature-hierarchy", "edges"]
  },
  {
    id: "pcei-4-044",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.3",
    category: "Stride",
    difficulty: "Intermediate",
    question: "In a Convolutional layer, what does the 'Stride' hyperparameter control?",
    codeSnippet: "# Stride = 1: Filter shifts 1 pixel at a time (fine spatial resolution)\n# Stride = 2: Filter shifts 2 pixels at a time (downsamples spatial dimensions by half)\nimport torch.nn as nn\nconv = nn.Conv2d(in_channels=3, out_channels=16, kernel_size=3, stride=2)",
    options: [
      "The step size (number of pixels) the filter shifts horizontally and vertically across the input image",
      "The maximum memory size of the graphics card",
      "The number of epochs before learning rate decay",
      "The percentage of dropout applied to the linear layer"
    ],
    correctAnswer: 0,
    explanation: "Stride controls the step size of the moving kernel filter. A stride of 1 moves the kernel one pixel at a time; a stride of 2 shifts by two pixels, effectively halving the output feature map's spatial dimensions.",
    officialRef: "PCEI-30-01 Block 4.3 - Stride",
    tags: ["stride", "cnn-hyperparameters", "downsampling"]
  },
  {
    id: "pcei-4-045",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.3",
    category: "Padding: Valid vs Same",
    difficulty: "Intermediate",
    question: "What is the difference between 'Valid' padding and 'Same' padding in a convolutional layer?",
    codeSnippet: "# Padding in PyTorch:\n# padding=0 ('valid'): Output size shrinks -> (W - K + 1)\n# padding='same': Output spatial size matches input size exactly\nconv_same = nn.Conv2d(3, 16, kernel_size=3, padding='same')",
    options: [
      "'Valid' padding adds no zero-padding and shrinks feature map dimensions; 'Same' padding adds border zeros so the output has the exact same spatial dimensions as the input",
      "'Valid' padding only accepts verified images, while 'Same' accepts duplicates",
      "'Same' padding converts images to grayscale, while 'Valid' keeps RGB color",
      "There is no difference; they are exact technical synonyms"
    ],
    correctAnswer: 0,
    explanation: "'Valid' padding means no padding (padding=0): as kernels slide, spatial dimensions shrink: (N - F + 1). 'Same' padding pads the image borders with zeros so that the output spatial height and width match the input.",
    officialRef: "PCEI-30-01 Block 4.3 - Padding",
    tags: ["padding", "valid-padding", "same-padding"]
  },
  {
    id: "pcei-4-046",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.3",
    category: "Pooling Layers",
    difficulty: "Beginner",
    question: "What is the primary function of a 'MaxPooling' layer in a CNN architecture?",
    codeSnippet: "# MaxPool2d in PyTorch:\n# Takes the maximum value in each 2x2 grid window -> halves height & width\nimport torch.nn as nn\npool = nn.MaxPool2d(kernel_size=2, stride=2)",
    options: [
      "To downsample spatial dimensions, reducing computational parameters while introducing translation invariance to small image shifts",
      "To pool water cooling around GPU processors",
      "To increase the image resolution from 720p to 4K",
      "To encrypt the convolutional feature maps"
    ],
    correctAnswer: 0,
    explanation: "MaxPooling takes the maximum activation in a local grid (e.g., 2x2), reducing spatial dimensionality (cutting parameters and compute) while providing translation invariance (features detected regardless of slight position shifts).",
    officialRef: "PCEI-30-01 Block 4.3 - MaxPooling",
    tags: ["maxpooling", "downsampling", "translation-invariance"]
  },
  {
    id: "pcei-4-047",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.3",
    category: "Translation Invariance",
    difficulty: "Intermediate",
    question: "What is 'Translation Invariance' in computer vision classification?",
    codeSnippet: "# Translation invariance:\n# The model recognizes a cat whether it is centered, in the top-left corner, or in the bottom-right corner of the image frame",
    options: [
      "The model's ability to recognize an object regardless of where it appears within the image frame",
      "The ability to translate image captions from French to English",
      "The property of keeping image file sizes constant during compression",
      "The ability to run models without translating Python into machine code"
    ],
    correctAnswer: 0,
    explanation: "Translation invariance means that if an object (e.g., a cat) shifts its physical position within an image, the network's classification output remains unchanged, a key property achieved via shared convolutional weights and pooling.",
    officialRef: "PCEI-30-01 Block 4.3 - Translation Invariance",
    tags: ["translation-invariance", "object-recognition", "cnn"]
  },
  {
    id: "pcei-4-048",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.3",
    category: "CNN Parameter Sharing",
    difficulty: "Intermediate",
    question: "Why do Convolutional layers require vastly fewer parameters than Fully Connected (dense) layers on image data?",
    codeSnippet: "# Parameter sharing principle:\n# A 3x3 filter has only 9 weights + 1 bias, reused across all millions of image pixel locations!",
    options: [
      "Parameter Sharing: the same small kernel filter weights are reused across every spatial location of the entire image",
      "Convolutional layers delete 90% of the image pixels before processing",
      "Convolutional layers store weights in cloud servers instead of RAM",
      "Convolutional layers cannot process color images"
    ],
    correctAnswer: 0,
    explanation: "In a dense layer, every input pixel connects to every neuron (millions of parameters). In a CNN, a 3x3 filter (only 9 weights) is slid across the entire image (Parameter Sharing), drastically reducing parameter counts.",
    officialRef: "PCEI-30-01 Block 4.3 - Parameter Sharing",
    tags: ["parameter-sharing", "efficiency", "cnn-architecture"]
  },
  {
    id: "pcei-4-049",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.3",
    category: "Flattening Layer",
    difficulty: "Beginner",
    question: "What does a 'Flatten' layer do when transitioning from convolutional/pooling layers to dense classification layers?",
    codeSnippet: "# Flattening in PyTorch:\n# Tensor shape (batch, 64, 7, 7) -> (batch, 64 * 7 * 7) = (batch, 3136)\nimport torch.nn as nn\nflatten = nn.Flatten()",
    options: [
      "It reshapes multi-dimensional feature maps (e.g., 64 channels of 7x7) into a 1D feature vector so fully connected layers can process them",
      "It compresses image files using lossy JPEG compression",
      "It reduces the brightness of all pixels to zero",
      "It deletes negative activation values"
    ],
    correctAnswer: 0,
    explanation: "Convolutional and pooling layers output 3D tensors (Channels x Height x Width). Fully connected dense layers require 1D input vectors. A Flatten layer unrolls the multi-dimensional tensor into a continuous 1D array.",
    officialRef: "PCEI-30-01 Block 4.3 - Flattening",
    tags: ["flatten", "dense-transition", "tensor-reshape"]
  },
  {
    id: "pcei-4-050",
    track: 'pcei',
    section: "Section 4",
    chapter: "4.3",
    category: "Data Augmentation",
    difficulty: "Beginner",
    question: "What is 'Data Augmentation' in computer vision training pipelines?",
    codeSnippet: "# Vision data augmentation:\n# Generating modified variations (horizontal flips, small rotations, color jitter, crops)\nfrom torchvision import transforms\naugment = transforms.Compose([\n    transforms.RandomHorizontalFlip(p=0.5),\n    transforms.RandomRotation(degrees=15)\n])",
    options: [
      "Artificially expanding training data by applying realistic transformations (random flips, rotations, crops, color jitters) to prevent overfitting",
      "Purchasing additional graphics cards to augment computing power",
      "Adding fictional entries to customer spreadsheets",
      "Increasing the screen brightness on computer displays"
    ],
    correctAnswer: 0,
    explanation: "Data augmentation creates synthetic variations of existing training images (random rotations, horizontal flips, zooms, brightness shifts), teaching the model to become invariant to realistic real-world visual distortions.",
    officialRef: "PCEI-30-01 Block 4.3 - Data Augmentation",
    tags: ["data-augmentation", "vision", "generalization"]
  }
];
