import { SyllabusSection, Flashcard, CertificationTrackInfo } from '../types';
import { pcedSection1Flashcards } from './pcedSection1Flashcards';
import { pcedSection2Flashcards } from './pcedSection2Flashcards';
import { pcedSection3Flashcards } from './pcedSection3Flashcards';
import { pcedSection4Flashcards } from './pcedSection4Flashcards';

export const pcedTrackInfo: CertificationTrackInfo = {
  id: 'pced',
  code: 'PCED-30-02',
  name: 'Certified Entry-Level Data Analyst with Python',
  shortName: 'PCED',
  level: 'Entry-Level Data Analyst',
  officialRef: 'Python Institute PCED-30-02',
  totalSections: 4,
  durationMinutes: 60,
  questionCount: 40,
  passingScore: 70,
  description:
    'Demonstrates fundamental competency in foundational data analysis concepts, data classification, sources and storage, lifecycle management, the scope of analytics vs data science, Python programming basics, data structures, and ethical/legal frameworks.',
};

export const pcedSyllabusSections: SyllabusSection[] = [
  {
    id: 'pced-section-1',
    number: 1,
    title: 'Introduction to Data and Data Analysis Concepts',
    weight: '22.5%',
    description:
      'Understanding data taxonomy (quantitative, qualitative, nominal, ordinal, interval, ratio, structured, semi-structured, unstructured), primary/secondary sources, storage architectures (RDBMS, NoSQL, data warehouses, data lakes, metadata), the complete 8-stage data lifecycle, data quality dimensions (DAMA), the scope of analytics vs data science (descriptive, diagnostic, predictive, prescriptive), CRISP-DM, and ethical, legal, and privacy principles (PII, GDPR, CCPA, HIPAA, anonymization, differential privacy).',
    chapters: [
      { id: '1.1', title: 'Defining and Classifying Data', cardCount: 20 },
      { id: '1.2', title: 'Data Sources, Collection Methods, and Storage', cardCount: 20 },
      { id: '1.3', title: 'Data Lifecycle and Management', cardCount: 20 },
      { id: '1.4', title: 'Scope of Data Science, Analytics, and Analysis', cardCount: 20 },
      { id: '1.5', title: 'Ethical, Legal, and Compliance Principles in Data Handling', cardCount: 20 },
    ],
  },
  {
    id: 'pced-section-2',
    number: 2,
    title: 'Python Basics for Data Analysis',
    weight: '32.5%',
    description:
      'Variables, data types, type casting, arithmetic/logical operators, control flow (if/elif/else, while, for loops), functions, scope, lambdas, built-in stats and math modules, exception handling, collections (lists, tuples, sets, dictionaries, comprehensions), and file I/O (CSV/JSON).',
    chapters: [
      { id: '2.1', title: 'Variables, Data Types, Type Inspection & String Operations', cardCount: 20 },
      { id: '2.2', title: 'Control Flow, Loops & Iteration in Data Processing', cardCount: 20 },
      { id: '2.3', title: 'Functions, Scopes, Lambdas & Built-in Analytical Modules', cardCount: 20 },
      { id: '2.4', title: 'Sequential & Set Structures: Lists, Tuples, Sets & Comprehensions', cardCount: 20 },
      { id: '2.5', title: 'Dictionaries, Structured Records, File I/O & Parsing (CSV / JSON)', cardCount: 20 },
    ],
  },
  {
    id: 'pced-section-3',
    number: 3,
    title: 'Working with Data and Performing Simple Analyses',
    weight: '32.5%',
    description:
      'Reading/writing text and CSV files (open, csv.reader, csv.DictReader), data cleansing (missing value detection/imputation, duplicate elimination, type validation), data transformation (string operations, min-max normalization, z-score standardization), NumPy array operations (indexing, slicing, vectorization, broadcasting, boolean masking), and exploratory data analysis (central tendency, dispersion, IQR outlier fences, Pearson correlation, sorting and aggregation).',
    chapters: [
      { id: '3.1', title: 'File Operations & Ingestion: Plain Text & CSV with open() & csv', cardCount: 20 },
      { id: '3.2', title: 'Data Cleansing: Handling Missing Values, Duplicates & Types', cardCount: 20 },
      { id: '3.3', title: 'Data Transformation, Normalization & String Operations', cardCount: 20 },
      { id: '3.4', title: 'NumPy Fundamentals & Vectorized Calculations', cardCount: 20 },
      { id: '3.5', title: 'Descriptive Statistics, Aggregations & Exploratory Data Analysis (EDA)', cardCount: 20 },
    ],
  },
  {
    id: 'pced-section-4',
    number: 4,
    title: 'Communicating Insights and Reporting',
    weight: '12.5%',
    description:
      'Data visualization principles, charting with matplotlib and seaborn, visual storytelling, dashboard construction concepts, and effectively presenting data findings to technical and non-technical stakeholders.',
    chapters: [
      { id: '4.1', title: 'Chart Types, Visual Encodings & Graphic Integrity', cardCount: 20 },
      { id: '4.2', title: 'Matplotlib Fundamentals & Object-Oriented API', cardCount: 20 },
      { id: '4.3', title: 'Seaborn Statistical Visualizations', cardCount: 20 },
      { id: '4.4', title: 'Dashboard Layouts & Executive Reporting', cardCount: 20 },
      { id: '4.5', title: 'Narrative Data Storytelling & Presentation', cardCount: 20 },
    ],
  },
];

export const pcedStarterFlashcards: Flashcard[] = [
  // SECTION 1 (100 Complete Cards: Chapters 1.1 to 1.5)
  ...pcedSection1Flashcards,
  // SECTION 2 (100 Complete Cards: Chapters 2.1 to 2.5)
  ...pcedSection2Flashcards,
  // SECTION 3 (100 Complete Cards: Chapters 3.1 to 3.5)
  ...pcedSection3Flashcards,
  // SECTION 4 (100 Complete Cards: Chapters 4.1 to 4.5)
  ...pcedSection4Flashcards,
];

export const pcedFlashcardsData = pcedStarterFlashcards;
export { pcedSection1Flashcards, pcedSection2Flashcards, pcedSection3Flashcards, pcedSection4Flashcards };

