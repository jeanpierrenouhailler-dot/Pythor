import { SyllabusSection, Flashcard, CertificationTrackInfo } from '../types';
import { pceiSection1Flashcards } from './pceiSection1Flashcards';
import { pceiSection2Flashcards } from './pceiSection2Flashcards';
import { pceiSection3Flashcards } from './pceiSection3Flashcards';
import { pceiSection4Flashcards } from './pceiSection4Flashcards';
import { pceiSection5Flashcards } from './pceiSection5Flashcards';
import { pceiSection6Flashcards } from './pceiSection6Flashcards';

export const pceiTrackInfo: CertificationTrackInfo = {
  id: 'pcei',
  code: 'PCEI-30-01',
  name: 'Certified Entry-Level AI Specialist with Python',
  shortName: 'PCEI',
  level: 'Entry-Level AI Specialist',
  officialRef: 'Python Institute PCEI-30-01',
  totalSections: 6,
  durationMinutes: 60,
  questionCount: 36,
  passingScore: 75,
  description:
    'Validates foundational artificial intelligence literacy and practical reasoning using Python. Covers core AI definitions and intelligent agents; machine learning paradigms, algorithms, and validation; data handling, exploratory analysis, and visualization with pandas and matplotlib; neural networks, deep learning architectures, computer vision, NLP, and generative AI; ethical AI principles, bias mitigation, privacy, governance, and safety; and practical AI project lifecycles, cost estimation, team collaboration, and stakeholder communication.',
};

export const pceiSyllabusSections: SyllabusSection[] = [
  {
    id: 'pcei-section-1',
    number: 1,
    title: 'Artificial Intelligence Fundamentals',
    weight: '14.0%',
    description:
      'Definitions and taxonomy of AI, Machine Learning, and Deep Learning; intelligent agents, environments, percepts, and actuators; knowledge representation, semantic networks, logic, and state-space search; capabilities, computational boundaries, and the Turing Test; and real-world domain applications and industry impacts.',
    chapters: [
      { id: '1.1', title: 'Core AI Concepts, Subfields & Definitions', cardCount: 20 },
      { id: '1.2', title: 'AI Agents, Environments & Architectures', cardCount: 20 },
      { id: '1.3', title: 'Knowledge Representation, Logic & Search', cardCount: 20 },
      { id: '1.4', title: 'Capabilities, Limitations & Turing Test', cardCount: 20 },
      { id: '1.5', title: 'Real-World Applications & Industry Impact', cardCount: 20 },
    ],
  },
  {
    id: 'pcei-section-2',
    number: 2,
    title: 'Machine Learning Fundamentals',
    weight: '16.5%',
    description:
      'Core learning paradigms (supervised, unsupervised, reinforcement); classification and regression algorithms; clustering, k-means, and dimensionality reduction; reward functions, agent exploration, and Markov decision processes; and evaluation metrics, confusion matrices, bias-variance trade-off, and cross-validation.',
    chapters: [
      { id: '2.1', title: 'Machine Learning Paradigms', cardCount: 20 },
      { id: '2.2', title: 'Supervised Learning & Prediction', cardCount: 20 },
      { id: '2.3', title: 'Unsupervised Learning & Clustering', cardCount: 20 },
      { id: '2.4', title: 'Reinforcement Learning Core Concepts', cardCount: 20 },
      { id: '2.5', title: 'Model Evaluation, Overfitting & Validation', cardCount: 20 },
    ],
  },
  {
    id: 'pcei-section-3',
    number: 3,
    title: 'Data Handling, Analysis, and Visualization',
    weight: '16.5%',
    description:
      'Tabular data loading and ingestion using pandas; data cleaning, missing value imputation, outlier detection, and duplicate removal; feature encoding (One-Hot, Label Encoding) and numerical feature scaling (StandardScaler, MinMaxScaler); exploratory data analysis and descriptive statistics; and visualization for AI insights with matplotlib and seaborn.',
    chapters: [
      { id: '3.1', title: 'Data Loading & Ingestion with Python', cardCount: 20 },
      { id: '3.2', title: 'Data Cleaning & Preprocessing', cardCount: 20 },
      { id: '3.3', title: 'Feature Preparation & Encoding', cardCount: 20 },
      { id: '3.4', title: 'Exploratory Data Analysis & Descriptive Statistics', cardCount: 20 },
      { id: '3.5', title: 'Data Visualization for AI', cardCount: 20 },
    ],
  },
  {
    id: 'pcei-section-4',
    number: 4,
    title: 'Neural Networks, Deep Learning, and Generative AI',
    weight: '22.5%',
    description:
      'Biological inspiration, artificial perceptrons, activation functions (ReLU, Sigmoid, Softmax), forward propagation, and backpropagation; deep feedforward networks, loss functions, optimizers (SGD, Adam), and epochs; convolutional neural networks (CNNs), pooling, and computer vision filters; NLP tokenization, embeddings, and sequence models; and Large Language Models (LLMs), attention mechanisms, generative models, and prompt engineering.',
    chapters: [
      { id: '4.1', title: 'Foundations of Artificial Neural Networks', cardCount: 20 },
      { id: '4.2', title: 'Deep Learning Principles & Model Training', cardCount: 20 },
      { id: '4.3', title: 'Computer Vision & Convolutional Neural Networks', cardCount: 20 },
      { id: '4.4', title: 'Natural Language Processing (NLP) Fundamentals', cardCount: 20 },
      { id: '4.5', title: 'Generative AI, Large Language Models & Prompt Engineering', cardCount: 20 },
    ],
  },
  {
    id: 'pcei-section-5',
    number: 5,
    title: 'Responsible AI, Ethics, and Critical Thinking',
    weight: '16.5%',
    description:
      'Algorithmic bias, historical prejudice, representation skews, disparate impact, and fairness definitions; data privacy, anonymization, consent, GDPR, and cybersecurity vulnerabilities; transparency, black-box models, interpretability (SHAP/LIME), and accountability; safety, hallucination mitigation, grounding, and adversarial robustness; and human-in-the-loop oversight, AI governance frameworks, EU AI Act risk tiers, and societal impact.',
    chapters: [
      { id: '5.1', title: 'AI Bias, Fairness & Discrimination', cardCount: 20 },
      { id: '5.2', title: 'Privacy, Data Protection & Security', cardCount: 20 },
      { id: '5.3', title: 'Transparency, Explainability & Accountability', cardCount: 20 },
      { id: '5.4', title: 'Safety, Hallucination & Robustness', cardCount: 20 },
      { id: '5.5', title: 'Human Oversight, Governance & Societal Impact', cardCount: 20 },
    ],
  },
  {
    id: 'pcei-section-6',
    number: 6,
    title: 'AI Projects, Collaboration, and Communication',
    weight: '14.0%',
    description:
      'Identifying real-world AI opportunities versus deterministic programming, problem scoping, and feasibility analysis; budget, resource, and cost factors including data labeling, cloud GPUs, API pricing, and quantization; applying basic development steps from baseline models and k-NN to deployment; collaborative engineering with Git, DVC, virtual environments, reproducibility seeds, and peer reviews; and communicating technical findings, visualizations, limitations, and uncertainty clearly to diverse audiences.',
    chapters: [
      { id: '6.1', title: 'Opportunities for AI Solutions in Real-World Contexts', cardCount: 20 },
      { id: '6.2', title: 'Basic Cost & Resource Considerations in AI Projects', cardCount: 20 },
      { id: '6.3', title: 'Apply Basic AI Development Steps to a Small Project', cardCount: 20 },
      { id: '6.4', title: 'Effective Collaboration, Version Control & Team Workflows in AI', cardCount: 20 },
      { id: '6.5', title: 'Communicating AI Findings, Visualizations & Explaining Limitations', cardCount: 20 },
    ],
  },
];

export const pceiAllFlashcards: Flashcard[] = [
  ...pceiSection1Flashcards,
  ...pceiSection2Flashcards,
  ...pceiSection3Flashcards,
  ...pceiSection4Flashcards,
  ...pceiSection5Flashcards,
  ...pceiSection6Flashcards,
];
