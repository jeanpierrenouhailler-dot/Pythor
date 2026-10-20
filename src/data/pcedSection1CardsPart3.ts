import { Flashcard } from '../types';

/**
 * PCED-30-02 SECTION 1: INTRODUCTION TO DATA AND DATA ANALYSIS CONCEPTS (Part 3: Cards 76 to 100)
 * - Chapter 1.4: Scope of Data Science, Analytics, and Analysis (Conclusion: Cards 76 to 80)
 * - Chapter 1.5: Ethical, Legal, and Compliance Principles in Data Handling (Cards 81 to 100)
 */
export const pcedSection1CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 1.4: SCOPE OF DATA SCIENCE & ANALYTICS (Cards 76 to 80)
  // =========================================================================
  {
    id: 'pced-s1-fc-076',
    track: 'pced',
    cardType: 'PCED 1.4 • Scope of Data Science & Analytics',
    topic: 'The OSEMN Data Science Pipeline',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What do the letters in the OSEMN data science framework stand for?',
    codeSnippet: `osemn_steps = {
    "O - Obtain": "Acquire data from databases, APIs, web scraping, flat files",
    "S - Scrub": "Clean, filter, handle missing values, and cast data types",
    "E - Explore": "Conduct EDA, calculate summary statistics, plot distributions",
    "M - Model": "Apply statistical tests, regression, clustering, or machine learning",
    "N - iNterpret": "Translate findings into actionable business recommendations and reports"
}

for step, desc in osemn_steps.items():
    print(f"{step}: {desc}")`,
    stdoutExpected: 'O - Obtain: Acquire data from databases, APIs, web scraping, flat files\nS - Scrub: Clean, filter, handle missing values, and cast data types\nE - Explore: Conduct EDA, calculate summary statistics, plot distributions\nM - Model: Apply statistical tests, regression, clustering, or machine learning\nN - iNterpret: Translate findings into actionable business recommendations and reports',
    explanationTitle: 'The OSEMN Pipeline',
    explanationText:
      'OSEMN is a lightweight, widely adopted mnemonic representing the core workflow of data analysis and data science: Obtain (gather data), Scrub (clean and sanitize), Explore (visualize and inspect), Model (statistical or ML analysis), and iNterpret (communicate results to stakeholders).',
    complexityInfo: 'PCED 1.4 Standard analytics workflow: OSEMN',
  },
  {
    id: 'pced-s1-fc-077',
    track: 'pced',
    cardType: 'PCED 1.4 • Scope of Data Science & Analytics',
    topic: 'Hypothesis-Driven vs. Exploratory Analytics',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the difference between Hypothesis-Driven Analysis and Exploratory Data Analysis (EDA)?',
    codeSnippet: `approaches = {
    "Hypothesis-Driven Analysis": {
        "Starting Point": "A specific theory or business hypothesis formulated BEFORE looking at the data",
        "Method": "Statistical hypothesis testing (Null vs Alternative hypothesis, p-values, A/B tests)",
        "Example": "'Does changing the checkout button from blue to green increase conversions by 5%?'"
    },
    "Exploratory Analysis (EDA)": {
        "Starting Point": "No preconceived hypothesis; open-ended investigation of an unfamiliar dataset",
        "Method": "Plotting histograms, correlation heatmaps, detecting outliers, finding unexpected clusters",
        "Example": "'What patterns exist in our newly acquired customer dataset?'"
    }
}

print("Hypothesis-Driven: Confirmatory testing of specific claims")
print("Exploratory (EDA): Open discovery of unexpected patterns and structures")`,
    stdoutExpected: 'Hypothesis-Driven: Confirmatory testing of specific claims\nExploratory (EDA): Open discovery of unexpected patterns and structures',
    explanationTitle: 'Hypothesis-Driven vs. Exploratory Analysis',
    explanationText:
      'Hypothesis-driven analysis is confirmatory: the analyst formulates a testable business hypothesis beforehand and uses statistical tests to accept or reject it. Exploratory Data Analysis (EDA) is open-ended: the analyst explores data distributions, correlations, and anomalies without rigid preconceptions.',
    complexityInfo: 'PCED 1.4 Analytical methodology: Confirmatory vs Exploratory',
  },
  {
    id: 'pced-s1-fc-078',
    track: 'pced',
    cardType: 'PCED 1.4 • Scope of Data Science & Analytics',
    topic: 'Correlation vs. Causation & Spurious Correlations',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'Why does "Correlation does not imply Causation", and what is a confounding (lurking) variable?',
    codeSnippet: `# Classical Spurious Correlation:
# Ice cream sales and drowning incidents correlate strongly (r = 0.89)!
# Does eating ice cream cause people to drown? NO!
confounding_variable = "Summer Outdoor Temperature"

print("Variable A: Ice cream sales increase in summer")
print("Variable B: Drowning incidents increase in summer (more people swimming)")
print("Confounder C:", confounding_variable, "causes BOTH A and B!")
print("Golden Rule: Establishing causation requires controlled experiments (A/B testing) or causal inference!")`,
    stdoutExpected: 'Variable A: Ice cream sales increase in summer\nVariable B: Drowning incidents increase in summer (more people swimming)\nConfounder C: Summer Outdoor Temperature causes BOTH A and B!\nGolden Rule: Establishing causation requires controlled experiments (A/B testing) or causal inference!',
    explanationTitle: 'Correlation vs. Causation',
    explanationText:
      'Correlation measures the statistical association between two variables, but does not prove that one causes the other. A confounding (or lurking) variable often drives both. To establish true causality, analysts must conduct randomized controlled trials (A/B tests) or apply causal inference techniques.',
    complexityInfo: 'PCED 1.4 Pitfalls in data interpretation: Confounding variables',
  },
  {
    id: 'pced-s1-fc-079',
    track: 'pced',
    cardType: 'PCED 1.4 • Scope of Data Science & Analytics',
    topic: "Simpson's Paradox in Aggregate Data Analysis",
    category: 'T1: Data Concepts',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: "What is Simpson's Paradox, and why is it dangerous when analyzing aggregated datasets?",
    codeSnippet: `# Demonstration of Simpson's Paradox:
# Treatment A vs Treatment B success rates across two patient severity groups:
# Mild Cases:
# Treatment A: 80/100 (80%) | Treatment B: 90/100 (90%) -> B wins
# Severe Cases:
# Treatment A: 20/100 (20%) | Treatment B: 30/100 (30%) -> B wins
#
# BUT if Treatment A was assigned primarily to mild cases (e.g. 900 mild, 100 severe)
# and Treatment B to severe cases, aggregate totals can REVERSE the winner!

print("Simpson's Paradox Definition:")
print("A trend appearing in different groups can REVERSE when the groups are aggregated together.")
print("Key Lesson: Always check for confounding subgroups before drawing conclusions from aggregated data!")`,
    stdoutExpected: "Simpson's Paradox Definition:\nA trend appearing in different groups can REVERSE when the groups are aggregated together.\nKey Lesson: Always check for confounding subgroups before drawing conclusions from aggregated data!",
    explanationTitle: "Simpson's Paradox",
    explanationText:
      "Simpson's Paradox occurs when a statistical trend or relationship observed within several individual subgroups disappears or reverses when the data is aggregated. It is caused by lurking confounding variables and disproportionate group weighting. Analysts must always disaggregate data by key segments.",
    complexityInfo: "PCED 1.4 Advanced statistical bias: Simpson's Paradox",
  },
  {
    id: 'pced-s1-fc-080',
    track: 'pced',
    cardType: 'PCED 1.4 • Scope of Data Science & Analytics',
    topic: 'Cognitive Biases in Analytics: Survivorship & Selection Bias',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What are Survivorship Bias and Selection Bias in data analytics sampling?',
    codeSnippet: `sampling_biases = {
    "Selection Bias": "When the sample analyzed is not representative of the true target population (e.g. surveying only paid app subscribers about pricing)",
    "Survivorship Bias": "Focusing only on successful entities that 'survived' a process while ignoring those that failed (e.g. studying only billionaire college dropouts while ignoring thousands who dropped out and struggled)",
    "Confirmation Bias": "Seeking, interpreting, or prioritizing data that confirms pre-existing business beliefs while ignoring contradictory evidence"
}

for bias, desc in sampling_biases.items():
    print(f"{bias}:\\n  {desc}")`,
    stdoutExpected: 'Selection Bias:\n  When the sample analyzed is not representative of the true target population (e.g. surveying only paid app subscribers about pricing)\nSurvivorship Bias:\n  Focusing only on successful entities that \'survived\' a process while ignoring those that failed (e.g. studying only billionaire college dropouts while ignoring thousands who dropped out and struggled)\nConfirmation Bias:\n  Seeking, interpreting, or prioritizing data that confirms pre-existing business beliefs while ignoring contradictory evidence',
    explanationTitle: 'Sampling & Cognitive Biases',
    explanationText:
      'Biased data collection distorts analytical conclusions. Selection bias occurs when sampling excludes certain demographics. Survivorship bias occurs when analysts study only successful cases and ignore failed ones. Analysts must design randomized, representative sampling frameworks.',
    complexityInfo: 'PCED 1.4 Analytical traps: Sampling and survivorship bias',
  },

  // =========================================================================
  // CHAPTER 1.5: ETHICAL, LEGAL, AND COMPLIANCE PRINCIPLES (Cards 81 to 100)
  // =========================================================================
  {
    id: 'pced-s1-fc-081',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Foundations of Data Ethics',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is Data Ethics, and what core moral principles guide responsible data practice?',
    codeSnippet: `data_ethics_pillars = [
    "1. Transparency: Openness about what data is collected, how it is processed, and who accesses it",
    "2. Fairness & Non-Discrimination: Ensuring algorithms and analyses do not disadvantage vulnerable groups",
    "3. Privacy & Autonomy: Respecting user boundaries and obtaining genuine informed consent",
    "4. Accountability: Taking responsibility for data errors, algorithmic harms, and breach consequences",
    "5. Beneficence: Striving to use data to produce societal benefit while minimizing harm"
]

for pillar in data_ethics_pillars:
    print(pillar)`,
    stdoutExpected: '1. Transparency: Openness about what data is collected, how it is processed, and who accesses it\n2. Fairness & Non-Discrimination: Ensuring algorithms and analyses do not disadvantage vulnerable groups\n3. Privacy & Autonomy: Respecting user boundaries and obtaining genuine informed consent\n4. Accountability: Taking responsibility for data errors, algorithmic harms, and breach consequences\n5. Beneficence: Striving to use data to produce societal benefit while minimizing harm',
    explanationTitle: 'Foundations of Data Ethics',
    explanationText:
      'Data Ethics goes beyond legal compliance to address moral responsibility in the collection, storage, analysis, and application of data. It ensures that data practices respect human dignity, avoid reinforcing societal prejudices, and operate with transparency and accountability.',
    complexityInfo: 'PCED 1.5 Core ethical pillars in data handling',
  },
  {
    id: 'pced-s1-fc-082',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Algorithmic Bias and Algorithmic Fairness',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'How do historical data biases enter machine learning models and cause algorithmic discrimination?',
    codeSnippet: `# Demonstration of how biased historical training data perpetuates bias:
# Historical hiring data where 95% of past engineering managers were male:
historical_hires = [
    {"gender": "M", "experience_yrs": 8, "hired": 1},
    {"gender": "M", "experience_yrs": 6, "hired": 1},
    {"gender": "F", "experience_yrs": 8, "hired": 0} # Historical bias in human decisions
]

print("Mechanisms of Algorithmic Bias:")
print("1. Historical Bias: Society's past prejudices reflected in historical training labels")
print("2. Representation / Sampling Bias: Minority groups underrepresented in the dataset")
print("3. Proxy Variables: Excluding 'gender' or 'race' while keeping zip codes or school names that correlate with them")`,
    stdoutExpected: 'Mechanisms of Algorithmic Bias:\n1. Historical Bias: Society\'s past prejudices reflected in historical training labels\n2. Representation / Sampling Bias: Minority groups underrepresented in the dataset\n3. Proxy Variables: Excluding \'gender\' or \'race\' while keeping zip codes or school names that correlate with them',
    explanationTitle: 'Algorithmic Bias and Fairness',
    explanationText:
      'Machine learning models learn patterns directly from training data. If historical data reflects human bias or systemic discrimination, the model will codify and amplify that bias in automated hiring, lending, or criminal sentencing. Analysts must audit datasets for disparate impact and proxy variables.',
    complexityInfo: 'PCED 1.5 Ethical modeling and algorithmic bias mitigation',
  },
  {
    id: 'pced-s1-fc-083',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Personally Identifiable Information (PII) Definition',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is Personally Identifiable Information (PII), and what are classic examples?',
    codeSnippet: `pii_examples = {
    "Direct PII": [
        "Full Legal Name",
        "Social Security Number (SSN) / National Identity Number",
        "Passport Number",
        "Driver's License Number",
        "Email Address",
        "Biometric data (fingerprint, facial geometry, retina scan)"
    ],
    "Indirect / Quasi-PII": [
        "IP Address",
        "Geolocation coordinates",
        "MAC Address",
        "Combination of: Date of Birth + Gender + 5-digit ZIP code"
    ]
}

print("Direct PII explicitly identifies a single individual alone.")
print("Quasi-PII can identify an individual when combined with other public records.")`,
    stdoutExpected: 'Direct PII explicitly identifies a single individual alone.\nQuasi-PII can identify an individual when combined with other public records.',
    explanationTitle: 'Personally Identifiable Information (PII)',
    explanationText:
      'Personally Identifiable Information (PII) is any information that can be used to distinguish or trace an individual\'s identity, either alone or when combined with other personal or identifying information. Data analysts must safeguard PII through encryption, access control, and anonymization.',
    complexityInfo: 'PCED 1.5 PII classification and regulatory standards',
  },
  {
    id: 'pced-s1-fc-084',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Quasi-Identifiers and Re-Identification Risks',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'How do Quasi-Identifiers enable the re-identification of "anonymized" datasets?',
    codeSnippet: `# Dr. Latanya Sweeney's Landmark Privacy Study:
# 87% of the US population can be uniquely identified by just THREE quasi-identifiers:
quasi_identifiers = ["5-Digit ZIP Code", "Gender", "Date of Birth"]

print("Quasi-identifiers in isolation appear anonymous:")
for qi in quasi_identifiers:
    print(f"  - {qi}")
print("When linked with public voter registration lists, 87% of individuals become uniquely identifiable!")
print("Lesson: Removing names alone is NOT sufficient for data anonymization!")`,
    stdoutExpected: 'Quasi-identifiers in isolation appear anonymous:\n  - 5-Digit ZIP Code\n  - Gender\n  - Date of Birth\nWhen linked with public voter registration lists, 87% of individuals become uniquely identifiable!\nLesson: Removing names alone is NOT sufficient for data anonymization!',
    explanationTitle: 'Quasi-Identifiers and Re-Identification',
    explanationText:
      'Quasi-identifiers are pieces of information that are not unique identifiers by themselves, but when correlated with external datasets, can uniquely re-identify individuals (the linkage attack). Merely stripping names while retaining birthdates and zip codes leaves datasets vulnerable.',
    complexityInfo: 'PCED 1.5 Linkage attacks and quasi-identifier vulnerability',
  },
  {
    id: 'pced-s1-fc-085',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Sensitive Personal Data (Special Category Data)',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What constitutes Sensitive Personal Data under GDPR (Article 9), and why does it receive heightened legal protection?',
    codeSnippet: `sensitive_categories = [
    "1. Racial or ethnic origin",
    "2. Political opinions and party affiliations",
    "3. Religious or philosophical beliefs",
    "4. Trade union membership",
    "5. Genetic and biometric data used for unique identification",
    "6. Health data (medical records, diagnoses, prescriptions)",
    "7. Data concerning an individual's sex life or sexual orientation"
]

print("GDPR Article 9: Processing sensitive categories is PROHIBITED by default,")
print("requiring explicit, affirmative consent or specific statutory exemptions!")`,
    stdoutExpected: 'GDPR Article 9: Processing sensitive categories is PROHIBITED by default,\nrequiring explicit, affirmative consent or specific statutory exemptions!',
    explanationTitle: 'Sensitive Personal Data (GDPR Article 9)',
    explanationText:
      'Special Category Data consists of sensitive personal information that presents substantial risks to fundamental human rights and freedoms if mishandled. Under GDPR, processing this data is prohibited by default unless stringent legal exemptions or explicit, freely given user consent are fulfilled.',
    complexityInfo: 'PCED 1.5 Special category data regulations',
  },
  {
    id: 'pced-s1-fc-086',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'GDPR Core Principles (Article 5)',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What are the 6 foundational principles of GDPR Article 5 governing personal data processing?',
    codeSnippet: `gdpr_principles = [
    "1. Lawfulness, Fairness, and Transparency: Valid legal basis; transparent to user",
    "2. Purpose Limitation: Collected strictly for specified, explicit, legitimate purposes",
    "3. Data Minimization: Adequate, relevant, and limited to what is strictly necessary",
    "4. Accuracy: Kept accurate and up to date; inaccurate data erased immediately",
    "5. Storage Limitation: Retained only as long as necessary for the stated purpose",
    "6. Integrity & Confidentiality: Processed securely with encryption and protection against breaches"
]

for principle in gdpr_principles:
    print(principle)`,
    stdoutExpected: '1. Lawfulness, Fairness, and Transparency: Valid legal basis; transparent to user\n2. Purpose Limitation: Collected strictly for specified, explicit, legitimate purposes\n3. Data Minimization: Adequate, relevant, and limited to what is strictly necessary\n4. Accuracy: Kept accurate and up to date; inaccurate data erased immediately\n5. Storage Limitation: Retained only as long as necessary for the stated purpose\n6. Integrity & Confidentiality: Processed securely with encryption and protection against breaches',
    explanationTitle: 'GDPR 6 Foundational Principles',
    explanationText:
      'The European Union General Data Protection Regulation (GDPR) establishes six core data protection principles: Lawfulness, Purpose Limitation, Data Minimization, Accuracy, Storage Limitation, and Integrity/Confidentiality. Organizations must also demonstrate Accountability for all principles.',
    complexityInfo: 'PCED 1.5 Regulatory standard: GDPR Article 5 principles',
  },
  {
    id: 'pced-s1-fc-087',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Data Minimization Principle in Practice',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'How does a data analyst apply the Data Minimization principle when building an analytics pipeline?',
    codeSnippet: `# Non-compliant: Ingesting the entire user table including PII:
# SELECT user_id, full_name, ssn, credit_card, age_years, churn_label FROM users;

# Compliant with Data Minimization: Extracting ONLY fields strictly necessary for the analysis:
compliant_query = "SELECT age_years, churn_label FROM users;"

print("Data Minimization Rule:")
print("Collect and process ONLY the minimum data strictly required to achieve the analytical goal.")
print("Reduces breach liability, speeds up pipelines, and lowers storage costs!")`,
    stdoutExpected: 'Data Minimization Rule:\nCollect and process ONLY the minimum data strictly required to achieve the analytical goal.\nReduces breach liability, speeds up pipelines, and lowers storage costs!',
    explanationTitle: 'Data Minimization Principle',
    explanationText:
      'Data minimization mandates that organizations collect only the personal data that is adequate, relevant, and limited to what is strictly necessary in relation to the specified purpose. Analysts must avoid gathering "just in case" attributes and drop unused PII columns early.',
    complexityInfo: 'PCED 1.5 Practical data minimization implementation',
  },
  {
    id: 'pced-s1-fc-088',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Fundamental Data Subject Rights under GDPR',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What are the major individual rights granted to data subjects under GDPR?',
    codeSnippet: `data_subject_rights = {
    "Right to Access": "Individuals can request a full copy of their personal data",
    "Right to Rectification": "Individuals can correct inaccurate or incomplete data",
    "Right to Erasure ('Right to be Forgotten')": "Individuals can mandate permanent deletion of their data",
    "Right to Restriction": "Individuals can freeze processing while disputes are resolved",
    "Right to Data Portability": "Individuals can receive their data in a machine-readable format (e.g. CSV/JSON)",
    "Right to Object": "Individuals can stop processing for marketing or profiling purposes"
}

for right, desc in data_subject_rights.items():
    print(f"{right}: {desc}")`,
    stdoutExpected: 'Right to Access: Individuals can request a full copy of their personal data\nRight to Rectification: Individuals can correct inaccurate or incomplete data\nRight to Erasure (\'Right to be Forgotten\'): Individuals can mandate permanent deletion of their data\nRight to Restriction: Individuals can freeze processing while disputes are resolved\nRight to Data Portability: Individuals can receive their data in a machine-readable format (e.g. CSV/JSON)\nRight to Object: Individuals can stop processing for marketing or profiling purposes',
    explanationTitle: 'GDPR Data Subject Rights',
    explanationText:
      'GDPR grants data subjects extensive control over their personal information. Data architectures must support user requests, such as searching for all instances of a user\'s record across pipelines (Access/Portability) or permanently deleting records upon request (Right to Erasure).',
    complexityInfo: 'PCED 1.5 Legal compliance: Data subject rights & erasure',
  },
  {
    id: 'pced-s1-fc-089',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'CCPA and CPRA Privacy Frameworks',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What are the key provisions of the California Consumer Privacy Act (CCPA/CPRA)?',
    codeSnippet: `ccpa_rights = [
    "1. Right to Know: What personal info businesses collect, sell, or share",
    "2. Right to Delete: Consumer can request deletion of personal information",
    "3. Right to Opt-Out: 'Do Not Sell or Share My Personal Information' mandate",
    "4. Right to Non-Discrimination: Businesses cannot charge higher prices or degrade services if rights are exercised",
    "5. Right to Correct: Rectify inaccurate personal data held by businesses"
]

for right in ccpa_rights:
    print(right)`,
    stdoutExpected: '1. Right to Know: What personal info businesses collect, sell, or share\n2. Right to Delete: Consumer can request deletion of personal information\n3. Right to Opt-Out: \'Do Not Sell or Share My Personal Information\' mandate\n4. Right to Non-Discrimination: Businesses cannot charge higher prices or degrade services if rights are exercised\n5. Right to Correct: Rectify inaccurate personal data held by businesses',
    explanationTitle: 'CCPA / CPRA Consumer Rights',
    explanationText:
      'The California Consumer Privacy Act (CCPA) and its amendment (CPRA) give California residents significant rights over their personal data. Notable is the explicit right to opt out of the sale or sharing of personal data, and strict penalties for failure to protect consumer data.',
    complexityInfo: 'PCED 1.5 US privacy regulation: CCPA/CPRA',
  },
  {
    id: 'pced-s1-fc-090',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'HIPAA and Protected Health Information (PHI)',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is HIPAA, and what defines Protected Health Information (PHI) in health data analytics?',
    codeSnippet: `hipaa_rules = {
    "Scope": "Applies to 'Covered Entities' (hospitals, doctors, health insurers) and Business Associates",
    "PHI Definition": "Any health data created or received by a healthcare provider that relates to past, present, or future physical/mental health condition, provision of healthcare, or payment",
    "De-identification Standard": "HIPAA Safe Harbor requires removing 18 specific identifiers (names, dates, zip codes, medical record numbers, facial photos)"
}

for k, v in hipaa_rules.items():
    print(f"{k}:\\n  {v}")`,
    stdoutExpected: 'Scope:\n  Applies to \'Covered Entities\' (hospitals, doctors, health insurers) and Business Associates\nPHI Definition:\n  Any health data created or received by a healthcare provider that relates to past, present, or future physical/mental health condition, provision of healthcare, or payment\nDe-identification Standard:\n  HIPAA Safe Harbor requires removing 18 specific identifiers (names, dates, zip codes, medical record numbers, facial photos)',
    explanationTitle: 'HIPAA & Protected Health Information (PHI)',
    explanationText:
      'The Health Insurance Portability and Accountability Act (HIPAA) protects Protected Health Information (PHI) in the United States. To use health data for analytics without patient authorization, datasets must be formally de-identified under the Safe Harbor method (removing 18 direct/quasi identifiers) or Expert Determination.',
    complexityInfo: 'PCED 1.5 Healthcare data compliance & Safe Harbor rules',
  },
  {
    id: 'pced-s1-fc-091',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Anonymization vs. Pseudonymization',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the critical legal and technical difference between Data Anonymization and Pseudonymization?',
    codeSnippet: `# Technical comparison:
# 1. Pseudonymization: Replace name with token; reversible WITH a secret key:
original = "Alice Walker"
pseudonym = "USER-88219" # Mapping key stored securely in encrypted lookup table

# 2. Anonymization: Irreversible destruction of all identifiable associations:
# Data CANNOT be linked back to the individual by anyone, anywhere, ever!

print("Pseudonymization = REVERSIBLE (Still considered personal data under GDPR!)")
print("Anonymization = IRREVERSIBLE (Exempt from GDPR once truly anonymized!)")`,
    stdoutExpected: 'Pseudonymization = REVERSIBLE (Still considered personal data under GDPR!)\nAnonymization = IRREVERSIBLE (Exempt from GDPR once truly anonymized!)',
    explanationTitle: 'Anonymization vs. Pseudonymization',
    explanationText:
      'Pseudonymization replaces identifying fields with artificial pseudonyms or tokens; because the data can be re-identified using an external key, it remains personal data under GDPR. True Anonymization irreversibly alters data so the individual can never be identified, exempting it from GDPR.',
    complexityInfo: 'PCED 1.5 Privacy engineering: Reversibility & GDPR status',
  },
  {
    id: 'pced-s1-fc-092',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Data Masking and Redaction Techniques',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'How do Data Masking and Redaction safeguard sensitive values during display and testing?',
    codeSnippet: `raw_credit_card = "4532-8921-9874-1234"
raw_ssn = "123-45-6789"

# Partial data masking:
masked_cc = "****-****-****-" + raw_credit_card[-4:]
masked_ssn = "***-**-" + raw_ssn[-4:]

print("Masked Credit Card:", masked_cc)
print("Masked SSN:        ", masked_ssn)
print("Purpose: Allows staff to verify customer identity without exposing cleartext credentials")`,
    stdoutExpected: 'Masked Credit Card: ****-****-****-1234\nMasked SSN:         ***-**-6789\nPurpose: Allows staff to verify customer identity without exposing cleartext credentials',
    explanationTitle: 'Data Masking & Redaction',
    explanationText:
      'Data masking replaces or obscures sensitive characters with placeholder symbols (e.g., asterisks or hashes), revealing only safe partial segments (such as the last 4 digits). It allows customer support and developers to work with realistic data without exposing full confidential credentials.',
    complexityInfo: 'PCED 1.5 Data masking and credential protection',
  },
  {
    id: 'pced-s1-fc-093',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Cryptographic Hashing for Identity Protection',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'Why is Cryptographic Hashing with Salting used to protect sensitive identity columns in analytics tables?',
    codeSnippet: `import hashlib

# One-way cryptographic hash function (SHA-256):
email = "user@example.com"
salt = "unique_random_salt_value" # Prevents rainbow table lookup attacks

hashed_id = hashlib.sha256((email + salt).encode()).hexdigest()

print("Original Email:", email)
print("Salted Hash:   ", hashed_id[:24] + "...")
print("Characteristics: Deterministic (same input -> same hash), one-way (irreversible), fixed output length")`,
    stdoutExpected: 'Original Email: user@example.com\nSalted Hash:    c6a99ce4878a2e7c9bf10e47...\nCharacteristics: Deterministic (same input -> same hash), one-way (irreversible), fixed output length',
    explanationTitle: 'Cryptographic Hashing & Salting',
    explanationText:
      'Cryptographic hashing (e.g., SHA-256) is a one-way mathematical transformation converting arbitrary input into a fixed-length string that cannot be reversed. Salting appends random data before hashing to thwart rainbow table dictionary attacks. It allows join operations without exposing raw email addresses.',
    complexityInfo: 'PCED 1.5 Cryptographic identity protection in analytics',
  },
  {
    id: 'pced-s1-fc-094',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Data Encryption: At Rest vs. In Transit vs. In Use',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What are the three states of data encryption, and how is data secured in each state?',
    codeSnippet: `encryption_states = {
    "1. Data at Rest": "Data stored on physical media (hard drives, SSDs, database files, backups). Protected by AES-256 disk and database encryption.",
    "2. Data in Transit (in Motion)": "Data moving across networks (browser to server, API calls, pipeline replication). Protected by TLS 1.3 / HTTPS and SSH tunnels.",
    "3. Data in Use": "Data actively loaded into CPU registers and RAM during computation. Protected by confidential computing and secure enclaves."
}

for state, desc in encryption_states.items():
    print(f"{state}:\\n  {desc}")`,
    stdoutExpected: '1. Data at Rest:\n  Data stored on physical media (hard drives, SSDs, database files, backups). Protected by AES-256 disk and database encryption.\n2. Data in Transit (in Motion):\n  Data moving across networks (browser to server, API calls, pipeline replication). Protected by TLS 1.3 / HTTPS and SSH tunnels.\n3. Data in Use:\n  Data actively loaded into CPU registers and RAM during computation. Protected by confidential computing and secure enclaves.',
    explanationTitle: 'Three States of Data Encryption',
    explanationText:
      'Data security requires defense-in-depth across all three states: At Rest (encrypted on disk via AES-256), In Transit (encrypted over networks via TLS/HTTPS), and In Use (protected in memory using secure enclaves). Organizations must manage cryptographic keys securely via KMS systems.',
    complexityInfo: 'PCED 1.5 Encryption architecture: Rest, Transit & Use',
  },
  {
    id: 'pced-s1-fc-095',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Differential Privacy Concepts',
    category: 'T1: Data Concepts',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is Differential Privacy, and how does injecting mathematical noise protect individual records?',
    codeSnippet: `# Conceptual differential privacy:
# Goal: Compute accurate population aggregates while making it mathematically
# impossible to infer whether any single specific individual participated.

print("Differential Privacy Mechanism:")
print("1. A user queries: 'How many people in this hospital have Disease X?'")
print("2. The privacy engine injects calibrated mathematical noise (Laplace or Gaussian distribution)")
print("3. Query result returned: True aggregate + Epsilon Noise")
print("4. Mathematical guarantee: Output distribution is nearly identical with or without any one individual!")`,
    stdoutExpected: 'Differential Privacy Mechanism:\n1. A user queries: \'How many people in this hospital have Disease X?\'\n2. The privacy engine injects calibrated mathematical noise (Laplace or Gaussian distribution)\n3. Query result returned: True aggregate + Epsilon Noise\n4. Mathematical guarantee: Output distribution is nearly identical with or without any one individual!',
    explanationTitle: 'Differential Privacy',
    explanationText:
      'Differential Privacy is the gold standard in statistical privacy. It adds calibrated mathematical noise (controlled by privacy budget parameter ε, epsilon) to query responses. This ensures that the presence or absence of any single individual in the database cannot be deduced, even with unlimited auxiliary external data.',
    complexityInfo: 'PCED 1.5 Advanced privacy engineering: Differential Privacy',
  },
  {
    id: 'pced-s1-fc-096',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'k-Anonymity and l-Diversity Privacy Models',
    category: 'T1: Data Concepts',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What are the formal privacy models k-Anonymity and l-Diversity?',
    codeSnippet: `privacy_models = {
    "k-Anonymity": "Each released record must be indistinguishable from at least k-1 other records regarding its quasi-identifiers (ZIP, age, gender). Achieved via generalization and suppression.",
    "l-Diversity": "Extends k-anonymity by requiring that sensitive attributes within each group of k indistinguishable records have at least l well-represented, diverse values (prevents homogeneity attacks).",
    "t-Closeness": "Requires that the distribution of a sensitive attribute within any subgroup is close to the global population distribution."
}

for model, desc in privacy_models.items():
    print(f"{model}:\\n  {desc}")`,
    stdoutExpected: 'k-Anonymity:\n  Each released record must be indistinguishable from at least k-1 other records regarding its quasi-identifiers (ZIP, age, gender). Achieved via generalization and suppression.\nl-Diversity:\n  Extends k-anonymity by requiring that sensitive attributes within each group of k indistinguishable records have at least l well-represented, diverse values (prevents homogeneity attacks).\nt-Closeness:\n  Requires that the distribution of a sensitive attribute within any subgroup is close to the global population distribution.',
    explanationTitle: 'k-Anonymity and l-Diversity',
    explanationText:
      'k-Anonymity guarantees that every individual in a released dataset is indistinguishable from at least k-1 other individuals with respect to quasi-identifiers. l-Diversity prevents homogeneity attacks by ensuring each equivalence class contains at least l distinct sensitive values.',
    complexityInfo: 'PCED 1.5 Formal tabular privacy models: k-Anonymity',
  },
  {
    id: 'pced-s1-fc-097',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Data Controller vs. Data Processor Responsibilities',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the legal distinction between a Data Controller and a Data Processor under privacy law?',
    codeSnippet: `gdpr_roles = {
    "Data Controller": {
        "Definition": "The entity that determines the PURPOSES and MEANS of processing personal data",
        "Role": "Direct relationship with the individual; primary legal liability for compliance and consent",
        "Example": "An e-commerce retailer selling goods to consumers"
    },
    "Data Processor": {
        "Definition": "The third-party entity that processes personal data strictly ON BEHALF of the Controller",
        "Role": "Executes data processing per Controller instructions; cannot use data for own purposes",
        "Example": "A cloud hosting provider (AWS) or SaaS email marketing platform (Mailchimp)"
    }
}

print("Controller: Decides WHY and HOW data is processed.")
print("Processor: Operates under contract to process data on behalf of Controller.")`,
    stdoutExpected: 'Controller: Decides WHY and HOW data is processed.\nProcessor: Operates under contract to process data on behalf of Controller.',
    explanationTitle: 'Data Controller vs. Data Processor',
    explanationText:
      'Under GDPR and international privacy laws, the Data Controller decides why and how personal data is collected and processed, bearing ultimate legal accountability. A Data Processor acts strictly on the controller\'s instructions to store or compute data under a binding Data Processing Agreement (DPA).',
    complexityInfo: 'PCED 1.5 Legal accountability: Controllers and Processors',
  },
  {
    id: 'pced-s1-fc-098',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Valid and Informed User Consent Standards',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What conditions must be satisfied for User Consent to be legally valid under modern privacy regulations?',
    codeSnippet: `consent_criteria = [
    "1. Freely Given: No coercion; service cannot be denied for refusing non-essential tracking",
    "2. Specific: Separate consent requested for distinct processing purposes (no bundled consent)",
    "3. Informed: Plain, accessible language explaining who is collecting data and for what purpose",
    "4. Unambiguous: Requires a clear affirmative action (e.g. checking an un-ticked box; pre-checked boxes are ILLEGAL)",
    "5. Easily Withdrawn: Withdrawing consent must be as easy as giving it"
]

for criterion in consent_criteria:
    print(criterion)`,
    stdoutExpected: '1. Freely Given: No coercion; service cannot be denied for refusing non-essential tracking\n2. Specific: Separate consent requested for distinct processing purposes (no bundled consent)\n3. Informed: Plain, accessible language explaining who is collecting data and for what purpose\n4. Unambiguous: Requires a clear affirmative action (e.g. checking an un-ticked box; pre-checked boxes are ILLEGAL)\n5. Easily Withdrawn: Withdrawing consent must be as easy as giving it',
    explanationTitle: 'Requirements for Valid User Consent',
    explanationText:
      'Valid consent under GDPR must be freely given, specific, informed, unambiguous, and revocable at any time. Pre-ticked checkboxes, dark patterns, silence, or bundling non-essential tracking with service terms are legally invalid.',
    complexityInfo: 'PCED 1.5 Lawful basis: Affirmative consent standards',
  },
  {
    id: 'pced-s1-fc-099',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Intellectual Property and Data Licensing (Creative Commons)',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What must a data analyst verify regarding Intellectual Property (IP) and licensing when using public datasets?',
    codeSnippet: `open_licenses = {
    "CC0 / Public Domain": "No copyright restrictions; free for commercial and non-commercial use with zero attribution required",
    "CC-BY (Attribution)": "Free to use, share, and adapt commercially, PROVIDED author attribution is credited",
    "CC-BY-NC (Non-Commercial)": "Free to adapt and share, but strictly FORBIDDEN for commercial enterprise use",
    "CC-BY-SA (Share-Alike)": "Derived works must be released under the exact same open license copyleft rules",
    "Database Rights (sui generis)": "In the EU, the database structure itself is protected even if individual data facts are public"
}

for lic, rules in open_licenses.items():
    print(f"{lic}:\\n  {rules}")`,
    stdoutExpected: 'CC0 / Public Domain:\n  No copyright restrictions; free for commercial and non-commercial use with zero attribution required\nCC-BY (Attribution):\n  Free to use, share, and adapt commercially, PROVIDED author attribution is credited\nCC-BY-NC (Non-Commercial):\n  Free to adapt and share, but strictly FORBIDDEN for commercial enterprise use\nCC-BY-SA (Share-Alike):\n  Derived works must be released under the exact same open license copyleft rules\nDatabase Rights (sui generis):\n  In the EU, the database structure itself is protected even if individual data facts are public',
    explanationTitle: 'Data Licensing and Copyright',
    explanationText:
      'Datasets obtained from public portals (Kaggle, GitHub, government portals) are governed by specific intellectual property licenses. Analysts must verify whether commercial use is permitted (avoiding CC-BY-NC in commercial products) and ensure proper author attribution (CC-BY).',
    complexityInfo: 'PCED 1.5 Legal compliance: Licensing and copyright',
  },
  {
    id: 'pced-s1-fc-100',
    track: 'pced',
    cardType: 'PCED 1.5 • Ethical & Legal Principles',
    topic: 'Data Ethics, Compliance, and Governance Synthesis',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What comprehensive checklist should a Certified Entry-Level Data Analyst follow before deploying an analytical model or report?',
    codeSnippet: `compliance_checklist = [
    "[ ] 1. Data Classification: Have all PII and sensitive columns been identified?",
    "[ ] 2. Data Minimization: Have unneeded personal identifiers been dropped early?",
    "[ ] 3. Bias Audit: Have model outputs been checked for disparate impact across demographics?",
    "[ ] 4. Security & Encryption: Is data encrypted at rest and in transit?",
    "[ ] 5. Lineage & Provenance: Are source systems, transformations, and data dictionaries documented?",
    "[ ] 6. Lawful Consent & Licensing: Is there a legal basis (GDPR/CCPA) and valid license for all data?"
]

print("Professional Compliance & Ethics Pre-Flight Checklist:")
for item in compliance_checklist:
    print(item)`,
    stdoutExpected: 'Professional Compliance & Ethics Pre-Flight Checklist:\n[ ] 1. Data Classification: Have all PII and sensitive columns been identified?\n[ ] 2. Data Minimization: Have unneeded personal identifiers been dropped early?\n[ ] 3. Bias Audit: Have model outputs been checked for disparate impact across demographics?\n[ ] 4. Security & Encryption: Is data encrypted at rest and in transit?\n[ ] 5. Lineage & Provenance: Are source systems, transformations, and data dictionaries documented?\n[ ] 6. Lawful Consent & Licensing: Is there a legal basis (GDPR/CCPA) and valid license for all data?',
    explanationTitle: 'Professional Data Ethics Checklist',
    explanationText:
      'A professional data analyst adheres to an end-to-end ethics and compliance checklist covering data classification, minimization, algorithmic fairness auditing, encryption, lineage tracking, and licensing compliance. This ensures data projects are accurate, secure, fair, and legally compliant.',
    complexityInfo: 'PCED 1.5 Capstone synthesis: Ethical data analyst checklist',
  },
];
