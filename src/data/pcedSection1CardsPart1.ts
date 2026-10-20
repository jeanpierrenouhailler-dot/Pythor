import { Flashcard } from '../types';

/**
 * PCED-30-02 SECTION 1: INTRODUCTION TO DATA AND DATA ANALYSIS CONCEPTS (Part 1: Cards 1 to 40)
 * - Chapter 1.1: Defining and Classifying Data (Cards 1 to 20)
 * - Chapter 1.2: Data Sources, Collection Methods, and Storage (Cards 21 to 40)
 */
export const pcedSection1CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 1.1: DEFINING AND CLASSIFYING DATA (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pced-s1-fc-001',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Definition of Data vs. Information vs. Knowledge',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'How does the DIKW pyramid differentiate raw data, information, and knowledge in data analysis?',
    codeSnippet: `# Demonstration of the DIKW transformation:
# 1. Raw Data: Unprocessed facts and figures with no context
raw_data = [98.6, 102.4, 99.1]

# 2. Information: Data processed with context and meaning
info = [{"patient": i + 1, "temp_f": temp, "status": "Fever" if temp >= 100.4 else "Normal"} 
        for i, temp in enumerate(raw_data)]

# 3. Knowledge: Understanding patterns, relationships, and applying rules
fever_patients = [p["patient"] for p in info if p["status"] == "Fever"]

print("Raw Data:", raw_data)
print("Information:", info[1])
print("Actionable Knowledge: Patient", fever_patients, "requires medical triage")`,
    stdoutExpected: "Raw Data: [98.6, 102.4, 99.1]\nInformation: {'patient': 2, 'temp_f': 102.4, 'status': 'Fever'}\nActionable Knowledge: Patient [2] requires medical triage",
    explanationTitle: 'The DIKW Hierarchy',
    explanationText:
      'In data analytics, Data consists of raw, unorganized facts and signals without context (e.g., numbers, text). Information is data that has been cleaned, contextualized, and structured to answer "who", "what", "where", or "when". Knowledge applies human experience and domain rules to information to answer "how" or "why", guiding informed decision-making.',
    complexityInfo: 'PCED 1.1 Fundamental concept: Data vs. Information vs. Knowledge',
  },
  {
    id: 'pced-s1-fc-002',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Quantitative vs. Qualitative Data Taxonomy',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is the fundamental distinction between Quantitative and Qualitative data?',
    codeSnippet: `# Python representation of Quantitative vs. Qualitative data:
quantitative_data = {
    "price_usd": 49.99,       # Numerical measurement
    "items_sold": 150          # Countable quantity
}

qualitative_data = {
    "product_name": "Keyboard", # Categorical label
    "customer_review": "Excellent typing feel", # Descriptive text
    "sentiment": "Positive"    # Non-numeric category
}

print("Quantitative (can compute mean):", sum(quantitative_data.values()) / len(quantitative_data))
print("Qualitative keys:", list(qualitative_data.keys()))`,
    stdoutExpected: 'Quantitative (can compute mean): 99.995\nQualitative keys: [\'product_name\', \'customer_review\', \'sentiment\']',
    explanationTitle: 'Quantitative vs. Qualitative Data',
    explanationText:
      'Quantitative data represents numerical values that can be counted or measured, and upon which mathematical operations (e.g., mean, variance, sum) are meaningful. Qualitative data represents non-numerical qualities, characteristics, descriptions, or categories (e.g., colors, reviews, user feedback) that cannot be directly measured with standard arithmetic.',
    complexityInfo: 'PCED 1.1 Core taxonomy: Numerical vs Categorical',
  },
  {
    id: 'pced-s1-fc-003',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Discrete Quantitative Data',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What defines Discrete Quantitative data, and what are typical real-world examples?',
    codeSnippet: `# Discrete data consists of separate, distinct, countable integers:
daily_store_visitors = [45, 62, 38, 80] # You cannot have 45.7 visitors!
items_in_cart = 3                      # Distinct countable units

print("Type of items_in_cart:", type(items_in_cart).__name__)
print("Are discrete items countable whole numbers?", all(isinstance(x, int) for x in daily_store_visitors))`,
    stdoutExpected: 'Type of items_in_cart: int\nAre discrete items countable whole numbers? True',
    explanationTitle: 'Discrete Quantitative Data',
    explanationText:
      'Discrete data can only take on specific, distinct individual values (usually non-negative integers). It arises from counting items. Examples include number of children, website page views, error counts, and items in stock. You cannot divide a discrete count into infinite fractional increments.',
    complexityInfo: 'PCED 1.1 Quantitative subtypes: Discrete (countable)',
  },
  {
    id: 'pced-s1-fc-004',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Continuous Quantitative Data',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What defines Continuous Quantitative data, and how does it differ from discrete data?',
    codeSnippet: `# Continuous data can take any numeric value within a given continuum:
package_weight_kg = 2.4589
delivery_time_seconds = 142.381
ambient_temp_celsius = 21.65

# It can be divided into infinitely smaller measurements:
print(f"Weight: {package_weight_kg:.2f} kg, higher precision: {package_weight_kg:.4f} kg")
print("Continuous types in Python are typically:", type(package_weight_kg).__name__)`,
    stdoutExpected: 'Weight: 2.46 kg, higher precision: 2.4589 kg\nContinuous types in Python are typically: float',
    explanationTitle: 'Continuous Quantitative Data',
    explanationText:
      'Continuous data represents measurements along a continuous scale that can take any real value within an interval (theoretically infinite precision). Examples include distance, weight, temperature, time, and revenue. Continuous values are represented by floating-point numbers in Python.',
    complexityInfo: 'PCED 1.1 Quantitative subtypes: Continuous (measurable)',
  },
  {
    id: 'pced-s1-fc-005',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Nominal Qualitative Data',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is Nominal Qualitative data, and does it support mathematical ordering or ranking?',
    codeSnippet: `# Nominal data has named categories with NO natural order or ranking:
device_os = ["Windows", "macOS", "Linux", "Android", "iOS"]
blood_types = ["A", "B", "AB", "O"]
payment_methods = ["Credit Card", "PayPal", "Bank Transfer", "Crypto"]

# Mathematical ordering (> or <) is meaningless for nominal categories:
print("Nominal categories:", device_os[:3])
print("Is there a natural 'greater than' order between Linux and Windows?", False)`,
    stdoutExpected: "Nominal categories: ['Windows', 'macOS', 'Linux']\nIs there a natural 'greater than' order between Linux and Windows? False",
    explanationTitle: 'Nominal Qualitative Data',
    explanationText:
      'Nominal data (from Latin "nomen" = name) represents categorical labels or names with no intrinsic ranking, hierarchy, or mathematical distance. Operations like "greater than" or arithmetic averaging are invalid; only equality testing, mode (most frequent), and frequency counts apply.',
    complexityInfo: 'PCED 1.1 Categorical subtypes: Nominal (unordered labels)',
  },
  {
    id: 'pced-s1-fc-006',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Ordinal Qualitative Data',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is Ordinal Qualitative data, and how does it differ from nominal data?',
    codeSnippet: `# Ordinal data has a defined, natural order or ranking,
# but the exact interval/distance between categories is NOT mathematically defined:
satisfaction_scale = ["Poor", "Fair", "Good", "Very Good", "Excellent"]
education_levels = ["High School", "Bachelor's", "Master's", "PhD"]

# We can rank categories:
order_map = {rating: rank for rank, rating in enumerate(satisfaction_scale)}
print("Rank of 'Poor':", order_map["Poor"])
print("Rank of 'Excellent':", order_map["Excellent"])
print("Is Excellent > Poor?", order_map["Excellent"] > order_map["Poor"])`,
    stdoutExpected: "Rank of 'Poor': 0\nRank of 'Excellent': 4\nIs Excellent > Poor? True",
    explanationTitle: 'Ordinal Qualitative Data',
    explanationText:
      'Ordinal data consists of categories with a natural, clear ranking or sequence (e.g., Likert scale surveys, shirt sizes S/M/L/XL, military ranks). While "Excellent > Good" is true, you cannot claim that the difference between Excellent and Good is quantitatively equal to that between Fair and Poor.',
    complexityInfo: 'PCED 1.1 Categorical subtypes: Ordinal (ranked categories)',
  },
  {
    id: 'pced-s1-fc-007',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Interval vs. Ratio Measurement Scales',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is the critical distinction between Interval scale and Ratio scale numerical data?',
    codeSnippet: `# Interval scale: Has order and equal intervals, but NO true (absolute) zero.
# 0°C does NOT mean "absence of heat" (0°C = 273.15 K).
# 20°C is NOT twice as hot as 10°C!
temp_celsius = 0 # Arbitrary zero point

# Ratio scale: Has order, equal intervals, AND an absolute true zero (0 = absence of value).
# $0 means zero money. $200 IS exactly twice as much as $100.
revenue_usd = 200.0

print("Interval: 0°C means freezing, not absence of temperature.")
print("Ratio: 2x ratio comparison valid for $200 vs $100:", revenue_usd / 100.0 == 2.0)`,
    stdoutExpected: 'Interval: 0°C means freezing, not absence of temperature.\nRatio: 2x ratio comparison valid for $200 vs $100: True',
    explanationTitle: 'Interval vs. Ratio Scales',
    explanationText:
      'The key difference lies in the nature of zero. An Interval scale (e.g., Celsius, calendar years) has an arbitrary zero; multiplication or ratio statements (e.g., "twice as hot") are invalid. A Ratio scale (e.g., Kelvin, salary, weight, age) has a true, absolute zero indicating absence of the quantity, making multiplicative ratios meaningful.',
    complexityInfo: 'PCED 1.1 Advanced measurement scales: Interval vs. Ratio',
  },
  {
    id: 'pced-s1-fc-008',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Structured Data Architecture',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What defines Structured Data, and in what systems is it primarily stored?',
    codeSnippet: `# Structured data adheres to a rigid, predefined tabular schema (rows & columns):
# Every record has the exact same fields and strict data types:
structured_table = [
    {"user_id": 101, "username": "alice", "age": 28, "active": True},
    {"user_id": 102, "username": "bob",   "age": 34, "active": False},
    {"user_id": 103, "username": "carol", "age": 22, "active": True}
]

print("Columns:", list(structured_table[0].keys()))
print("Total rows:", len(structured_table))`,
    stdoutExpected: "Columns: ['user_id', 'username', 'age', 'active']\nTotal rows: 3",
    explanationTitle: 'Structured Data',
    explanationText:
      'Structured data conforms to a predefined data model or schema, typically organized in tabular form with clearly named columns and rows. It is standard in Relational Database Management Systems (RDBMS like PostgreSQL, MySQL, SQLite) and flat tabular files (CSV). It is easily indexed and queried using SQL.',
    complexityInfo: 'PCED 1.1 Data structures: Tabular RDBMS schemas',
  },
  {
    id: 'pced-s1-fc-009',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Semi-Structured Data Architecture',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is Semi-Structured Data, and what standard file formats exemplify it?',
    codeSnippet: `import json

# Semi-structured data does NOT require a rigid table schema.
# Instead, it uses self-describing tags, markers, or key-value hierarchies:
semi_structured = {
    "user_id": 101,
    "username": "alice",
    "skills": ["Python", "SQL", "Tableau"], # Variable-length list
    "contact": {"email": "alice@example.com"} # Nested dictionary
}

json_str = json.dumps(semi_structured)
print("Formats: JSON, XML, YAML, NoSQL document stores")
print("Self-describing JSON keys:", list(semi_structured.keys()))`,
    stdoutExpected: 'Formats: JSON, XML, YAML, NoSQL document stores\nSelf-describing JSON keys: [\'user_id\', \'username\', \'skills\', \'contact\']',
    explanationTitle: 'Semi-Structured Data',
    explanationText:
      'Semi-structured data does not fit into a strict relational table schema, but contains tags, markers, or hierarchical nesting that separate elements and enforce structure. Common examples include JSON, XML, YAML, and document-oriented databases like MongoDB.',
    complexityInfo: 'PCED 1.1 Data structures: Self-describing hierarchies (JSON/XML)',
  },
  {
    id: 'pced-s1-fc-010',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Unstructured Data Architecture',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What defines Unstructured Data, and what challenges does it present to data analysts?',
    codeSnippet: `# Unstructured data has no predefined format, tags, or schema:
audio_recording = b"\\xff\\xfb\\x90d\\x00\\x00\\x00..." # Raw binary audio bytes
customer_email = """
Hi Support,
I bought your product yesterday and the screen won't turn on!
Please refund me or send a replacement ASAP! Thanks, Dave.
"""

print("Examples: Free text, PDF reports, images (JPEG/PNG), audio, video")
print("Requires: NLP (Natural Language Processing) or Computer Vision to extract insights")`,
    stdoutExpected: 'Examples: Free text, PDF reports, images (JPEG/PNG), audio, video\nRequires: NLP (Natural Language Processing) or Computer Vision to extract insights',
    explanationTitle: 'Unstructured Data',
    explanationText:
      'Unstructured data lacks a predefined conceptual model or schema. It comprises the vast majority (~80-90%) of generated enterprise data (e.g., customer emails, call center audio recordings, PDF reports, social media posts, videos). Analyzing it requires specialized AI/ML techniques like NLP, OCR, and Computer Vision.',
    complexityInfo: 'PCED 1.1 Data structures: Text, audio, images & video',
  },
  {
    id: 'pced-s1-fc-011',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Time-Series Data',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What defines Time-Series data, and why is the temporal index critical in its analysis?',
    codeSnippet: `# Time-series data consists of observations recorded at successive, ordered timestamps:
time_series_sales = [
    {"timestamp": "2026-01-01 09:00", "sales": 120},
    {"timestamp": "2026-01-01 10:00", "sales": 185},
    {"timestamp": "2026-01-01 11:00", "sales": 210},
    {"timestamp": "2026-01-01 12:00", "sales": 340},
]

# Order matters: shuffling destroys the sequential dependencies (trends, seasonality)!
print("First timestamp:", time_series_sales[0]["timestamp"])
print("Sequential trend: Increasing over successive hourly intervals")`,
    stdoutExpected: 'First timestamp: 2026-01-01 09:00\nSequential trend: Increasing over successive hourly intervals',
    explanationTitle: 'Time-Series Data',
    explanationText:
      'Time-series data is a sequence of observations captured at successive, equally or unequally spaced points in time. Unlike static cross-sectional data, observations are autocorrelated: past values influence present and future values. Key analytical components include trend, seasonality, cyclicality, and noise.',
    complexityInfo: 'PCED 1.1 Temporal data indexing & ordering',
  },
  {
    id: 'pced-s1-fc-012',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Cross-Sectional vs. Longitudinal / Panel Data',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'How does Cross-Sectional data differ from Longitudinal (Panel) data?',
    codeSnippet: `# 1. Cross-Sectional Data: Multiple entities observed at a SINGLE snapshot in time
cross_sectional = [
    {"country": "France", "gdp_growth_2025": 1.2},
    {"country": "Japan",  "gdp_growth_2025": 0.8},
    {"country": "USA",    "gdp_growth_2025": 2.5}
]

# 2. Longitudinal / Panel Data: Tracking the SAME entities across MULTIPLE time periods
panel_data = [
    {"country": "France", "year": 2024, "gdp_growth": 1.1},
    {"country": "France", "year": 2025, "gdp_growth": 1.2},
    {"country": "USA",    "year": 2024, "gdp_growth": 2.4},
    {"country": "USA",    "year": 2025, "gdp_growth": 2.5}
]

print("Cross-sectional entities at one time point:", len(cross_sectional))
print("Panel data tracks changes over time across entities:", len(panel_data))`,
    stdoutExpected: 'Cross-sectional entities at one time point: 3\nPanel data tracks changes over time across entities: 4',
    explanationTitle: 'Cross-Sectional vs. Longitudinal Data',
    explanationText:
      'Cross-sectional data captures a snapshot of many subjects (e.g., individuals, firms, countries) at a single fixed point in time. Longitudinal (or panel) data follows the exact same subjects over multiple repeated time intervals, enabling analysts to observe behavioral evolution, trends, and causal changes.',
    complexityInfo: 'PCED 1.1 Observational sampling frameworks',
  },
  {
    id: 'pced-s1-fc-013',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Primary vs. Secondary Data',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is the difference between Primary and Secondary data in research and business analytics?',
    codeSnippet: `# Primary Data: Collected directly by the investigator/organization for a specific purpose:
survey_responses = ["Customer A: Very happy", "Customer B: Needs faster shipping"]

# Secondary Data: Previously gathered and published by another entity for another purpose:
census_data = {"zipcode": "90210", "median_income": 125000} # From government bureau
kaggle_dataset = "world_bank_indicators.csv"                 # Pre-existing repository

print("Primary: First-hand, tailored, but higher cost and time to collect")
print("Secondary: Pre-existing, fast, cost-effective, but may lack exact specificity")`,
    stdoutExpected: 'Primary: First-hand, tailored, but higher cost and time to collect\nSecondary: Pre-existing, fast, cost-effective, but may lack exact specificity',
    explanationTitle: 'Primary vs. Secondary Data',
    explanationText:
      'Primary data is first-hand data collected directly by the researcher/analyst specifically for the problem at hand (e.g., custom user surveys, lab experiments, product telemetry). Secondary data is data collected by third parties (e.g., government census bureaus, industry benchmark reports, public datasets) and reused for a new analysis.',
    complexityInfo: 'PCED 1.1 Data origin & sourcing models',
  },
  {
    id: 'pced-s1-fc-014',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'The 5 Vs of Big Data',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What are the 5 core characteristics (5 Vs) that define Big Data?',
    codeSnippet: `big_data_v5 = {
    "Volume": "Massive scale and size of data (terabytes to petabytes)",
    "Velocity": "High speed of data generation and ingestion (real-time streams)",
    "Variety": "Diversity of data types (structured, semi-structured, unstructured)",
    "Veracity": "Trustworthiness, quality, and accuracy of data (handling noise)",
    "Value": "Actionable business insights and ROI extracted from the data"
}

for v, definition in big_data_v5.items():
    print(f"{v}: {definition}")`,
    stdoutExpected: 'Volume: Massive scale and size of data (terabytes to petabytes)\nVelocity: High speed of data generation and ingestion (real-time streams)\nVariety: Diversity of data types (structured, semi-structured, unstructured)\nVeracity: Trustworthiness, quality, and accuracy of data (handling noise)\nValue: Actionable business insights and ROI extracted from the data',
    explanationTitle: 'The 5 Vs of Big Data',
    explanationText:
      'Big Data exceeds the processing capabilities of traditional single-node relational databases. The 5 Vs describe its properties: Volume (scale/size), Velocity (speed of streaming/generation), Variety (multiple heterogeneous formats), Veracity (reliability/cleanliness), and Value (the ultimate business return derived from analysis).',
    complexityInfo: 'PCED 1.1 Big Data dimensions: Volume, Velocity, Variety, Veracity, Value',
  },
  {
    id: 'pced-s1-fc-015',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Synthetic Data vs. Real-World Observational Data',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is Synthetic Data, and why is it increasingly used in data analytics and testing?',
    codeSnippet: `import random

# Synthetic data is artificially generated rather than produced by real-world events:
random.seed(42)
synthetic_users = [
    {"user_id": 1000 + i, "age": random.randint(18, 70), "score": round(random.uniform(50, 100), 1)}
    for i in range(3)
]

print("Synthetic Dataset Sample:", synthetic_users)
print("Key Advantages: Zero PII privacy risks, simulates rare edge-case scenarios, rapid testing")`,
    stdoutExpected: "Synthetic Dataset Sample: [{'user_id': 1000, 'age': 69, 'score': 56.4}, {'user_id': 1001, 'age': 32, 'score': 63.8}, {'user_id': 1002, 'age': 46, 'score': 63.8}]\nKey Advantages: Zero PII privacy risks, simulates rare edge-case scenarios, rapid testing",
    explanationTitle: 'Synthetic Data in Analytics',
    explanationText:
      'Synthetic data is created programmatically or via generative algorithms to mimic the statistical distributions, patterns, and structure of real data. It is vital when real data contains sensitive PII, is subject to strict privacy regulations (GDPR/HIPAA), or when historical edge cases are insufficient for testing.',
    complexityInfo: 'PCED 1.1 Modern data synthesis & privacy protection',
  },
  {
    id: 'pced-s1-fc-016',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Continuous vs. Discrete Variable Identification in Python',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'How do you inspect and categorize a dataset column as discrete, continuous, or categorical in Python?',
    codeSnippet: `dataset = {
    "num_children": [0, 1, 2, 0, 3],       # Discrete (integer count)
    "annual_salary": [55000.50, 72000.0, 94500.75], # Continuous (float)
    "department": ["HR", "Engineering", "Sales"]     # Categorical / Nominal (str)
}

for col, values in dataset.items():
    sample_type = type(values[0]).__name__
    if sample_type == "int":
        classification = "Quantitative (Discrete)"
    elif sample_type == "float":
        classification = "Quantitative (Continuous)"
    else:
        classification = "Qualitative (Categorical)"
    print(f"{col}: {classification}")`,
    stdoutExpected: 'num_children: Quantitative (Discrete)\nannual_salary: Quantitative (Continuous)\ndepartment: Qualitative (Categorical)',
    explanationTitle: 'Classifying Variables in Python',
    explanationText:
      'In Python and libraries like pandas, integer columns (`int64`) typically represent discrete counts, float columns (`float64`) represent continuous measurements, and string/object columns (`str` or `category`) represent qualitative/categorical variables.',
    complexityInfo: 'PCED 1.1 Practical variable typing in code',
  },
  {
    id: 'pced-s1-fc-017',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Boolean / Binary Categorical Data (Dichotomous Data)',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is Binary / Dichotomous data, and how is it typically encoded for numerical analysis?',
    codeSnippet: `# Binary / Dichotomous data has exactly TWO mutually exclusive states:
# Examples: Churn (Yes/No), Transaction (Fraud/Legit), Status (Pass/Fail)
churn_responses = ["Yes", "No", "No", "Yes", "No"]

# In Python analytics, binary data is standardly encoded as 1 and 0 (dummy encoding):
binary_encoded = [1 if r == "Yes" else 0 for r in churn_responses]

print("Raw labels:", churn_responses)
print("Binary encoded (0/1):", binary_encoded)
print("Mean churn rate:", sum(binary_encoded) / len(binary_encoded))`,
    stdoutExpected: 'Raw labels: [\'Yes\', \'No\', \'No\', \'Yes\', \'No\']\nBinary encoded (0/1): [1, 0, 0, 1, 0]\nMean churn rate: 0.4',
    explanationTitle: 'Binary / Dichotomous Data',
    explanationText:
      'Binary (or dichotomous) data is a special subtype of nominal qualitative data with exactly two mutually exclusive categories (e.g., True/False, 1/0, Male/Female, Pass/Fail). Encoding binary categories as 0 and 1 allows analysts to compute proportions directly as the arithmetic mean.',
    complexityInfo: 'PCED 1.1 Binary encoding & proportion analysis',
  },
  {
    id: 'pced-s1-fc-018',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Data Density: Dense vs. Sparse Data',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is the difference between Dense data and Sparse data in analytics arrays and tables?',
    codeSnippet: `# Dense data: Most values in the matrix/array are non-zero:
dense_sales = [120, 145, 98, 204, 175]

# Sparse data: The vast majority of elements are ZERO or NULL:
# Common in user-item recommendation matrices, document term matrices (bag of words)
sparse_ratings = [0, 0, 0, 5, 0, 0, 0, 0, 0, 4, 0, 0]

sparsity = sparse_ratings.count(0) / len(sparse_ratings)
print(f"Sparsity: {sparsity * 100:.1f}% empty/zero elements")
print("Sparse representation stores only non-zero entries (index, value) to save memory!")`,
    stdoutExpected: 'Sparsity: 83.3% empty/zero elements\nSparse representation stores only non-zero entries (index, value) to save memory!',
    explanationTitle: 'Dense vs. Sparse Data',
    explanationText:
      'Dense data contains primarily meaningful, non-zero values across its rows and columns. Sparse data contains predominantly zeros or missing values (e.g., e-commerce user ratings where most users rate < 0.1% of available products). Specialized sparse matrices store only (row, col, value) tuples to prevent memory exhaustion.',
    complexityInfo: 'PCED 1.1 Memory efficiency & data sparsity',
  },
  {
    id: 'pced-s1-fc-019',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Role of Data in Modern Business Decision-Making',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'How has data analytics transformed traditional intuition-based decision-making into Data-Driven Decision Making (DDDM)?',
    codeSnippet: `# Traditional Intuition (HiPPO: Highest Paid Person's Opinion) vs Data-Driven:
decision_matrix = {
    "Intuition-based": "Rely on gut feelings, personal anecdotes, and historical habits",
    "Data-Driven (DDDM)": "Rely on empirical evidence, metric tracking, A/B testing, and statistical validation"
}

print("Core benefits of Data-Driven Decision Making:")
print("1. Reduced cognitive bias and subjectivity")
print("2. Measurable, repeatable KPI accountability")
print("3. Ability to spot early market shifts and customer friction points")`,
    stdoutExpected: 'Core benefits of Data-Driven Decision Making:\n1. Reduced cognitive bias and subjectivity\n2. Measurable, repeatable KPI accountability\n3. Ability to spot early market shifts and customer friction points',
    explanationTitle: 'Data-Driven Decision Making (DDDM)',
    explanationText:
      'Data-Driven Decision Making (DDDM) involves basing business choices on factual analysis and empirical data rather than intuition, tradition, or guesswork. Organizations leveraging DDDM consistently achieve higher productivity, operational agility, and customer retention.',
    complexityInfo: 'PCED 1.1 Business value of empirical analytics',
  },
  {
    id: 'pced-s1-fc-020',
    track: 'pced',
    cardType: 'PCED 1.1 • Defining & Classifying Data',
    topic: 'Comprehensive Classification Synthesis',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Identify the exact data scale (Nominal, Ordinal, Interval, Ratio) for: Zip Code, Customer Rating (1-5 stars), Celsius Temperature, and Monthly Revenue ($).',
    codeSnippet: `variables = {
    "Zip Code (e.g., 90210)": "Nominal (Numbers act strictly as labels; math operations are meaningless)",
    "Customer Rating (1-5 Stars)": "Ordinal (Ranked order: 5 > 4, but intervals are subjective)",
    "Celsius Temperature (e.g., 25°C)": "Interval (Equal degrees, but arbitrary zero point)",
    "Monthly Revenue (e.g., $15,000)": "Ratio (True zero exists: $0 = absence of revenue, 2x ratio valid)"
}

for var, scale in variables.items():
    print(f"{var} -> {scale.split(' (')[0]}")`,
    stdoutExpected: 'Zip Code (e.g., 90210) -> Nominal\nCustomer Rating (1-5 Stars) -> Ordinal\nCelsius Temperature (e.g., 25°C) -> Interval\nMonthly Revenue (e.g., $15,000) -> Ratio',
    explanationTitle: 'Four Measurement Scales Synthesis',
    explanationText:
      'Classifying scales correctly is essential for choosing appropriate statistical tests: Nominal data (mode, frequency); Ordinal data (median, percentiles, rank correlation); Interval data (mean, standard deviation, correlation); Ratio data (geometric mean, coefficient of variation, ratio comparisons).',
    complexityInfo: 'PCED 1.1 High-yield exam classification matrix',
  },

  // =========================================================================
  // CHAPTER 1.2: DATA SOURCES, COLLECTION METHODS, AND STORAGE (Cards 21 to 40)
  // =========================================================================
  {
    id: 'pced-s1-fc-021',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Survey Data Collection Methodology',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What are the strengths and common biases associated with Survey and Questionnaire data collection?',
    codeSnippet: `# Common survey data types and bias vulnerabilities:
survey_components = {
    "Closed-Ended Questions": "Multiple choice or Likert scales (easy to aggregate quantitatively)",
    "Open-Ended Questions": "Free-form text boxes (rich qualitative detail, harder to quantify)",
    "Non-Response Bias": "When respondents differ systematically from non-respondents",
    "Social Desirability Bias": "Tendency of participants to answer favorably rather than truthfully"
}

for k, v in survey_components.items():
    print(f"{k}: {v}")`,
    stdoutExpected: 'Closed-Ended Questions: Multiple choice or Likert scales (easy to aggregate quantitatively)\nOpen-Ended Questions: Free-form text boxes (rich qualitative detail, harder to quantify)\nNon-Response Bias: When respondents differ systematically from non-respondents\nSocial Desirability Bias: Tendency of participants to answer favorably rather than truthfully',
    explanationTitle: 'Surveys and Questionnaires',
    explanationText:
      'Surveys collect structured or semi-structured primary data directly from target populations. While cost-effective and scalable, survey data is prone to cognitive biases (e.g., selection bias, leading questions, recall bias, and social desirability bias) which analysts must recognize and mitigate.',
    complexityInfo: 'PCED 1.2 Primary data collection methodologies',
  },
  {
    id: 'pced-s1-fc-022',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Web Scraping as a Data Collection Technique',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is Web Scraping, and what ethical/legal rule governs crawler behavior via robots.txt?',
    codeSnippet: `# Web scraping extracts unstructured HTML content into structured tables:
sample_html = """
<div class="product">
    <span class="name">Laptop Pro</span>
    <span class="price">$1299</span>
</div>
"""
# Python tools: BeautifulSoup, Scrapy, requests

print("Legal and ethical considerations:")
print("1. robots.txt specifies allowed and disallowed crawler paths")
print("2. Rate limiting (request delays) avoids overloading target web servers")
print("3. Respect Terms of Service (ToS) and copyright protections")`,
    stdoutExpected: 'Legal and ethical considerations:\n1. robots.txt specifies allowed and disallowed crawler paths\n2. Rate limiting (request delays) avoids overloading target web servers\n3. Respect Terms of Service (ToS) and copyright protections',
    explanationTitle: 'Web Scraping and robots.txt',
    explanationText:
      'Web scraping programmatically requests and parses HTML web pages to extract data. Analysts must review `robots.txt` (the Robots Exclusion Protocol) at the site root, adhere to rate limits, avoid scraping authenticated private data, and comply with site Terms of Service and local privacy laws.',
    complexityInfo: 'PCED 1.2 Automated web data extraction standards',
  },
  {
    id: 'pced-s1-fc-023',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Application Programming Interfaces (APIs)',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'Why are RESTful APIs preferred over web scraping for automated data collection?',
    codeSnippet: `# REST API returns structured JSON data directly over HTTP:
mock_api_response = {
    "status": 200,
    "data": {
        "city": "London",
        "temperature_c": 18.5,
        "humidity_pct": 65
    }
}

print("Status Code:", mock_api_response["status"])
print("City:", mock_api_response["data"]["city"])
print("Advantages over scraping: Stable schemas, structured JSON, official authorization, rate limits")`,
    stdoutExpected: 'Status Code: 200\nCity: London\nAdvantages over scraping: Stable schemas, structured JSON, official authorization, rate limits',
    explanationTitle: 'APIs vs. Web Scraping',
    explanationText:
      'APIs (Application Programming Interfaces) provide formal, documented programmatic endpoints to exchange data (usually JSON over HTTPS). Unlike web scraping—which breaks when UI HTML layouts change—APIs offer stable versioned contracts, documented rate limits, and secure authentication (API keys/OAuth).',
    complexityInfo: 'PCED 1.2 Programmatic data exchange standards',
  },
  {
    id: 'pced-s1-fc-024',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Sensors and IoT Telemetry Data',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What unique characteristics define Sensor and Internet of Things (IoT) data streams?',
    codeSnippet: `# IoT telemetry: High-velocity time-stamped sensor readings
sensor_packet = {
    "device_id": "SENSOR-HVAC-04",
    "timestamp_utc": "2026-09-21T10:30:00Z",
    "vibration_hz": 42.1,
    "temperature_c": 68.4,
    "battery_pct": 94
}

print("Device:", sensor_packet["device_id"])
print("Telemetry:", f"{sensor_packet['temperature_c']}°C at {sensor_packet['timestamp_utc']}")
print("Key Traits: Continuous generation, high velocity, automated, time-series indexed")`,
    stdoutExpected: 'Device: SENSOR-HVAC-04\nTelemetry: 68.4°C at 2026-09-21T10:30:00Z\nKey Traits: Continuous generation, high velocity, automated, time-series indexed',
    explanationTitle: 'Sensor and IoT Data',
    explanationText:
      'Internet of Things (IoT) devices and industrial sensors generate high-velocity, real-time data streams (telemetry) without human intervention. Characteristics include automated regular sampling, timestamped indexing, high volume, and vulnerability to sensor drift or missing signals.',
    complexityInfo: 'PCED 1.2 Automated high-velocity data sources',
  },
  {
    id: 'pced-s1-fc-025',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Application and System Log Files',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'How do application and server log files serve as valuable secondary data sources for analysts?',
    codeSnippet: `# Web server access log line (Common Log Format):
log_line = '192.168.1.50 - frank [21/Sep/2026:10:35:12 +0000] "GET /cart HTTP/1.1" 200 4520'

# Analysts extract behavioral and operational metrics from logs:
print("Log sample:", log_line)
print("Analytical uses:")
print("1. User funnel / clickstream navigation paths")
print("2. HTTP error rate spikes (404 Not Found, 500 Server Error)")
print("3. Geolocation and device traffic distribution")`,
    stdoutExpected: 'Log sample: 192.168.1.50 - frank [21/Sep/2026:10:35:12 +0000] "GET /cart HTTP/1.1" 200 4520\nAnalytical uses:\n1. User funnel / clickstream navigation paths\n2. HTTP error rate spikes (404 Not Found, 500 Server Error)\n3. Geolocation and device traffic distribution',
    explanationTitle: 'Log Files as Data Sources',
    explanationText:
      'Log files are automatically generated, append-only time-stamped text records of events occurring in operating systems, web servers, and applications. Data analysts parse logs to reconstruct customer journey paths (clickstreams), detect checkout bottlenecks, and monitor system performance.',
    complexityInfo: 'PCED 1.2 Log telemetry & clickstream auditing',
  },
  {
    id: 'pced-s1-fc-026',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Flat Files: CSV and TSV Storage Formats',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What are the advantages and key limitations of CSV (Comma-Separated Values) storage?',
    codeSnippet: `csv_text = """id,product,price
101,Monitor,199.99
102,Mouse,24.50"""

print(csv_text)
print("--- Pros & Cons ---")
print("Pros: Human-readable plain text, universal software support, lightweight")
print("Cons: No schema enforcement, no native data types (everything parses as string), no relations")`,
    stdoutExpected: 'id,product,price\n101,Monitor,199.99\n102,Mouse,24.50\n--- Pros & Cons ---\nPros: Human-readable plain text, universal software support, lightweight\nCons: No schema enforcement, no native data types (everything parses as string), no relations',
    explanationTitle: 'CSV and TSV File Formats',
    explanationText:
      'CSV (Comma-Separated Values) and TSV (Tab-Separated Values) store tabular data as plain text. Their primary benefits are universal compatibility, simplicity, and human readability. However, they lack native data type specifications (dates and numbers are stored as text), support no relations, and do not enforce integrity constraints.',
    complexityInfo: 'PCED 1.2 Tabular flat file storage formats',
  },
  {
    id: 'pced-s1-fc-027',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Spreadsheet Storage: Excel (.xlsx) Formats',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'When is Excel (.xlsx) appropriate for data storage, and what are its strict capacity limits?',
    codeSnippet: `# Excel capabilities vs constraints:
excel_limits = {
    "Max Rows per Sheet": 1048576,  # Exactly 2^20 rows
    "Max Columns per Sheet": 16384, # Column XFD
    "Features": ["Formulas", "Charts", "Cell formatting", "Multiple sheets in one workbook"],
    "Risks": ["Accidental cell formula overwrites", "Silent auto-conversion of text to dates", "Poor performance on large datasets"]
}

print(f"Excel row capacity limit: {excel_limits['Max Rows per Sheet']:,} rows")
print(f"Excel column capacity limit: {excel_limits['Max Columns per Sheet']:,} cols")`,
    stdoutExpected: 'Excel row capacity limit: 1,048,576 rows\nExcel column capacity limit: 16,384 cols',
    explanationTitle: 'Spreadsheet (.xlsx) Constraints',
    explanationText:
      'Microsoft Excel (.xlsx) files are convenient for business users, combining multiple sheets, formulas, and charts in one file. However, for serious data analysis, Excel is limited to 1,048,576 rows, lacks automated audit trails, often misinterprets gene names or codes as dates, and can be easily corrupted by manual edits.',
    complexityInfo: 'PCED 1.2 Spreadsheet boundary constraints',
  },
  {
    id: 'pced-s1-fc-028',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Hierarchical Storage: JSON (JavaScript Object Notation)',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'Why is JSON the dominant data interchange format across the modern web and cloud APIs?',
    codeSnippet: `import json

json_data = {
    "order_id": 98765,
    "customer": "Alice Smith",
    "items": [
        {"sku": "A1", "qty": 2, "price": 15.0},
        {"sku": "B2", "qty": 1, "price": 45.0}
    ],
    "fulfilled": True
}

# Native conversion in Python:
json_string = json.dumps(json_data, indent=2)
print("JSON Data Type Mapping:")
print("Python dict -> JSON object {}")
print("Python list -> JSON array []")
print("Python bool (True/False) -> JSON boolean (true/false)")`,
    stdoutExpected: 'JSON Data Type Mapping:\nPython dict -> JSON object {}\nPython list -> JSON array []\nPython bool (True/False) -> JSON boolean (true/false)',
    explanationTitle: 'JSON Data Interchange Format',
    explanationText:
      'JSON is a text-based, lightweight, language-independent data format based on key-value pairs and ordered lists. It allows arbitrary hierarchical nesting, supports standard types (string, number, boolean, null, array, object), and maps directly to Python dictionaries and lists.',
    complexityInfo: 'PCED 1.2 Hierarchical data interchange format',
  },
  {
    id: 'pced-s1-fc-029',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'XML (eXtensible Markup Language) Storage',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What are the characteristics of XML, and how does it differ from JSON in data storage?',
    codeSnippet: `xml_example = """<?xml version="1.0" encoding="UTF-8"?>
<catalog>
    <book id="bk101">
        <author>Gambardella, Matthew</author>
        <title>XML Developer's Guide</title>
        <price>44.95</price>
    </book>
</catalog>"""

print(xml_example.strip())
print("--- XML vs JSON ---")
print("XML: Uses opening/closing tags, supports tag attributes (<tag attr='val'>), strict schemas (XSD/DTD)")
print("JSON: Simpler syntax, smaller file size, faster parsing, no tag attributes")`,
    stdoutExpected: '<?xml version="1.0" encoding="UTF-8"?>\n<catalog>\n    <book id="bk101">\n        <author>Gambardella, Matthew</author>\n        <title>XML Developer\'s Guide</title>\n        <price>44.95</price>\n    </book>\n</catalog>\n--- XML vs JSON ---\nXML: Uses opening/closing tags, supports tag attributes (<tag attr=\'val\'>), strict schemas (XSD/DTD)\nJSON: Simpler syntax, smaller file size, faster parsing, no tag attributes',
    explanationTitle: 'XML Data Format',
    explanationText:
      'XML is a markup language that defines rules for encoding documents in a format that is both human-readable and machine-readable. Unlike JSON, XML elements can contain both text and attributes, and can be formally validated against strict DTD or XSD schemas. It is common in enterprise, banking, and legacy systems.',
    complexityInfo: 'PCED 1.2 Tagged hierarchical storage & schemas',
  },
  {
    id: 'pced-s1-fc-030',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Relational Database Management Systems (RDBMS)',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What core principles define Relational Databases (RDBMS) like PostgreSQL, MySQL, and SQLite?',
    codeSnippet: `# Core Relational concepts:
rdbms_concepts = {
    "Tables": "Entities represented as relations with rows (tuples) and columns (attributes)",
    "Primary Key (PK)": "Unique identifier for each row in a table",
    "Foreign Key (FK)": "Field referencing the Primary Key of another table (creates relationships)",
    "ACID Properties": "Atomicity, Consistency, Isolation, Durability for reliable transactions",
    "Query Language": "Structured Query Language (SQL)"
}

for k, v in rdbms_concepts.items():
    print(f"{k}: {v}")`,
    stdoutExpected: 'Tables: Entities represented as relations with rows (tuples) and columns (attributes)\nPrimary Key (PK): Unique identifier for each row in a table\nForeign Key (FK): Field referencing the Primary Key of another table (creates relationships)\nACID Properties: Atomicity, Consistency, Isolation, Durability for reliable transactions\nQuery Language: Structured Query Language (SQL)',
    explanationTitle: 'Relational Databases (RDBMS)',
    explanationText:
      'RDBMS organize data into tables consisting of columns and rows with predefined schemas. Relationships between tables are maintained through primary and foreign keys. They enforce ACID properties to guarantee transactional reliability and are queried using SQL.',
    complexityInfo: 'PCED 1.2 Relational database fundamentals & ACID',
  },
  {
    id: 'pced-s1-fc-031',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Non-Relational (NoSQL) Databases',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What are the 4 main types of NoSQL databases, and when are they chosen over relational databases?',
    codeSnippet: `nosql_families = {
    "Document Stores": "MongoDB, CouchDB (store JSON/BSON documents with flexible schemas)",
    "Key-Value Stores": "Redis, DynamoDB (fast O(1) hash lookup by key, used for caching)",
    "Column-Family Stores": "Apache Cassandra, ScyllaDB (optimized for heavy writes and queries across massive columns)",
    "Graph Databases": "Neo4j, Amazon Neptune (nodes & edges optimized for social networks, fraud detection)"
}

for family, desc in nosql_families.items():
    print(f"{family}: {desc}")`,
    stdoutExpected: 'Document Stores: MongoDB, CouchDB (store JSON/BSON documents with flexible schemas)\nKey-Value Stores: Redis, DynamoDB (fast O(1) hash lookup by key, used for caching)\nColumn-Family Stores: Apache Cassandra, ScyllaDB (optimized for heavy writes and queries across massive columns)\nGraph Databases: Neo4j, Amazon Neptune (nodes & edges optimized for social networks, fraud detection)',
    explanationTitle: 'NoSQL Database Architectures',
    explanationText:
      'NoSQL ("Not Only SQL") databases provide flexible schemas, horizontal scaling, and high-velocity read/write performance. The 4 major categories are Document (JSON), Key-Value (cache/sessions), Wide-Column (petabyte scaling), and Graph (complex networked entity relationships).',
    complexityInfo: 'PCED 1.2 NoSQL data models and tradeoffs',
  },
  {
    id: 'pced-s1-fc-032',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Data Warehouses vs. Data Lakes',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the architectural difference between a Data Warehouse and a Data Lake?',
    codeSnippet: `storage_comparison = {
    "Data Warehouse": {
        "Data Nature": "Cleaned, transformed, structured relational data (Schema-on-Write)",
        "Optimization": "Fast OLAP SQL queries, BI dashboards, historical trend reporting",
        "Examples": "Snowflake, Google BigQuery, Amazon Redshift"
    },
    "Data Lake": {
        "Data Nature": "Raw, unprocessed data in original formats: structured, JSON, images, audio (Schema-on-Read)",
        "Optimization": "Low-cost high-volume storage, big data processing, machine learning exploration",
        "Examples": "Amazon S3, Azure Data Lake Storage, Google Cloud Storage"
    }
}

print("Warehouse: Schema-on-Write (Curated for BI)")
print("Lake: Schema-on-Read (Raw repository for ML & Big Data)")`,
    stdoutExpected: 'Warehouse: Schema-on-Write (Curated for BI)\nLake: Schema-on-Read (Raw repository for ML & Big Data)',
    explanationTitle: 'Data Warehouse vs. Data Lake',
    explanationText:
      'A Data Warehouse stores cleaned, structured, and aggregated data optimized for analytical SQL queries and BI reporting (Schema-on-Write). A Data Lake stores vast quantities of raw data in its native format (structured, semi-structured, unstructured) at lower storage cost, applying schema only when data is read (Schema-on-Read).',
    complexityInfo: 'PCED 1.2 Enterprise storage: Warehouse vs. Lake',
  },
  {
    id: 'pced-s1-fc-033',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Data Marts within Enterprise Architecture',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is a Data Mart, and how does it relate to an enterprise Data Warehouse?',
    codeSnippet: `# Enterprise Storage Hierarchy:
# Raw Storage -> Data Lake -> Central Enterprise Data Warehouse -> Departmental Data Marts

data_marts = {
    "Marketing Data Mart": "Campaign ROI, customer acquisition cost (CAC), lead conversions",
    "Finance Data Mart": "Cash flow, accounts receivable, general ledger reconciliations",
    "HR Data Mart": "Employee retention, headcount trends, payroll expenditures"
}

print("Data Mart definition:")
print("A focused, subject-oriented subset of a Data Warehouse tailored for a specific business unit or department.")`,
    stdoutExpected: 'Data Mart definition:\nA focused, subject-oriented subset of a Data Warehouse tailored for a specific business unit or department.',
    explanationTitle: 'Data Marts',
    explanationText:
      'A Data Mart is a subset of an enterprise data warehouse focused on a specific business function, department, or team (e.g., Marketing, Sales, Finance). Data marts provide faster query performance, simpler data schemas, and role-based data security for business analysts.',
    complexityInfo: 'PCED 1.2 Departmental analytical storage',
  },
  {
    id: 'pced-s1-fc-034',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'OLTP vs. OLAP Database Systems',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the distinction between OLTP (Online Transaction Processing) and OLAP (Online Analytical Processing)?',
    codeSnippet: `oltp_vs_olap = {
    "OLTP (Transactional)": {
        "Focus": "Day-to-day business operations (e.g., ATM withdrawals, e-commerce checkouts)",
        "Queries": "Simple, fast read/writes affecting 1 or few rows",
        "Storage Model": "Row-oriented (PostgreSQL, MySQL)",
        "Design": "Highly normalized to prevent redundant writes"
    },
    "OLAP (Analytical)": {
        "Focus": "Historical aggregation and business intelligence",
        "Queries": "Complex read queries scanning millions of rows across few columns (SUM, AVG)",
        "Storage Model": "Columnar storage (BigQuery, Snowflake, ClickHouse)",
        "Design": "Denormalized (star schema, snowflake schema)"
    }
}

print("OLTP: High write concurrency, row-by-row updates")
print("OLAP: Massive historical reads, columnar aggregations")`,
    stdoutExpected: 'OLTP: High write concurrency, row-by-row updates\nOLAP: Massive historical reads, columnar aggregations',
    explanationTitle: 'OLTP vs. OLAP Paradigms',
    explanationText:
      'OLTP systems are optimized for executing many small, fast transactional operations concurrently (e.g., order placement, banking). OLAP systems are designed for querying and aggregating massive historical datasets across multiple dimensions (e.g., total sales by country by quarter over 5 years).',
    complexityInfo: 'PCED 1.2 Processing models: OLTP vs. OLAP',
  },
  {
    id: 'pced-s1-fc-035',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Storage Evaluation Criteria for Data Projects',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What factors must a data analyst evaluate when choosing an optimal data storage solution?',
    codeSnippet: `storage_criteria = [
    "1. Volume: Expected storage size (Megabytes vs. Terabytes vs. Petabytes)",
    "2. Velocity / Latency: Batch daily uploads vs. sub-second real-time streaming",
    "3. Variety: Rigid tabular structure vs. nested documents vs. unstructured media",
    "4. Query Patterns: Row-level lookups vs. large-scale column aggregations",
    "5. Concurrency: Single analyst access vs. thousands of concurrent users",
    "6. Cost & Maintenance: Managed cloud service vs. self-hosted server infrastructure"
]

for criterion in storage_criteria:
    print(criterion)`,
    stdoutExpected: '1. Volume: Expected storage size (Megabytes vs. Terabytes vs. Petabytes)\n2. Velocity / Latency: Batch daily uploads vs. sub-second real-time streaming\n3. Variety: Rigid tabular structure vs. nested documents vs. unstructured media\n4. Query Patterns: Row-level lookups vs. large-scale column aggregations\n5. Concurrency: Single analyst access vs. thousands of concurrent users\n6. Cost & Maintenance: Managed cloud service vs. self-hosted server infrastructure',
    explanationTitle: 'Storage Evaluation Framework',
    explanationText:
      'Selecting data storage requires balancing technical requirements (data volume, access latency, schema stability) against business constraints (budget, maintenance overhead, compliance). Flat files suit small local analyses; RDBMS suit transactional apps; Cloud Data Warehouses suit enterprise analytics.',
    complexityInfo: 'PCED 1.2 Architectural selection criteria',
  },
  {
    id: 'pced-s1-fc-036',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Definition and Role of Metadata',
    category: 'T1: Data Concepts',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is Metadata, and why is it described as "data about data"?',
    codeSnippet: `# Data vs Metadata in a file object:
data_payload = "User 101 purchased 2 books for $30.00"

metadata = {
    "file_name": "transactions_20260921.csv",
    "file_size_bytes": 1048576,
    "created_timestamp": "2026-09-21T08:00:00Z",
    "file_format": "CSV (RFC 4180)",
    "encoding": "UTF-8",
    "data_owner": "Finance Team",
    "row_count": 25000
}

print("Metadata provides essential context, provenance, and structure for data:")
print("Encoding:", metadata["encoding"])
print("Rows:", metadata["row_count"])`,
    stdoutExpected: 'Metadata provides essential context, provenance, and structure for data:\nEncoding: UTF-8\nRows: 25000',
    explanationTitle: 'Metadata Concept',
    explanationText:
      'Metadata is structured information that describes, explains, locates, or otherwise makes it easier to retrieve, use, or manage an information resource. Without metadata (e.g., column names, units of measure, creation date, character encoding), raw data is difficult or impossible to interpret reliably.',
    complexityInfo: 'PCED 1.2 Metadata definition and importance',
  },
  {
    id: 'pced-s1-fc-037',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Three Primary Types of Metadata',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What are Descriptive, Structural, and Administrative metadata?',
    codeSnippet: `metadata_types = {
    "Descriptive Metadata": "Enables discovery and identification (e.g., Title, Author, Keywords, Abstract, Subject)",
    "Structural Metadata": "Describes relationships and composition of components (e.g., Table schemas, column data types, page sequences in a book)",
    "Administrative Metadata": "Helps manage resource lifecycle (e.g., File creation date, file format, access rights, encryption, archival retention)"
}

for m_type, desc in metadata_types.items():
    print(f"{m_type}:\\n  -> {desc}")`,
    stdoutExpected: 'Descriptive Metadata:\n  -> Enables discovery and identification (e.g., Title, Author, Keywords, Abstract, Subject)\nStructural Metadata:\n  -> Describes relationships and composition of components (e.g., Table schemas, column data types, page sequences in a book)\nAdministrative Metadata:\n  -> Helps manage resource lifecycle (e.g., File creation date, file format, access rights, encryption, archival retention)',
    explanationTitle: 'Descriptive, Structural & Administrative Metadata',
    explanationText:
      'Information science categorizes metadata into three main branches: Descriptive (for searching and identifying resources), Structural (for understanding internal organization, schemas, and element hierarchies), and Administrative (for tracking creation dates, permissions, storage, and legal rights).',
    complexityInfo: 'PCED 1.2 Three metadata taxonomy branches',
  },
  {
    id: 'pced-s1-fc-038',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Data Dictionaries and Data Catalogs',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is a Data Dictionary, and how does it prevent analytical errors across an enterprise?',
    codeSnippet: `# A Data Dictionary defines every field in a table:
data_dictionary = {
    "cust_id": {"type": "INT", "nullable": False, "description": "Unique primary key for customer"},
    "tenure_months": {"type": "INT", "range": "0-600", "description": "Number of consecutive active months"},
    "mrr_usd": {"type": "FLOAT", "unit": "USD", "description": "Monthly Recurring Revenue normalized in US dollars"},
    "churn_flag": {"type": "BOOLEAN", "values": [0, 1], "description": "1 = Cancelled account in current month"}
}

for col, spec in data_dictionary.items():
    print(f"{col} ({spec['type']}): {spec['description']}")`,
    stdoutExpected: 'cust_id (INT): Unique primary key for customer\ntenure_months (INT): Number of consecutive active months\nmrr_usd (FLOAT): Monthly Recurring Revenue normalized in US dollars\nchurn_flag (BOOLEAN): 1 = Cancelled account in current month',
    explanationTitle: 'Data Dictionaries',
    explanationText:
      'A Data Dictionary is a centralized repository of metadata that documents names, data types, valid value ranges, nullability, default values, and business definitions for all database columns. It ensures consistent interpretation and prevents analysts from calculating erroneous metrics.',
    complexityInfo: 'PCED 1.2 Metadata documentation: Data Dictionaries',
  },
  {
    id: 'pced-s1-fc-039',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Character Encodings in Data Storage: ASCII vs. UTF-8',
    category: 'T1: Data Concepts',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'Why is UTF-8 character encoding the global standard, and what occurs when opening a file with the wrong encoding in Python?',
    codeSnippet: `# UTF-8 handles any Unicode character worldwide; ASCII is limited to 128 English characters:
text = "Café résumé 🐍"

# UTF-8 encoded bytes:
utf8_bytes = text.encode("utf-8")
print("Decoded cleanly with UTF-8:", utf8_bytes.decode("utf-8"))

# Trying to decode non-ASCII bytes with ASCII raises UnicodeDecodeError:
try:
    utf8_bytes.decode("ascii")
except UnicodeDecodeError as e:
    print("Caught expected exception:", type(e).__name__)`,
    stdoutExpected: 'Decoded cleanly with UTF-8: Café résumé 🐍\nCaught expected exception: UnicodeDecodeError',
    explanationTitle: 'Character Encodings: UTF-8 vs ASCII',
    explanationText:
      'Character encoding maps human characters to binary bytes. ASCII (7-bit) only supports 128 basic Latin characters. UTF-8 is a variable-width (1 to 4 bytes) encoding backward-compatible with ASCII that represents all 150,000+ Unicode characters. Using the wrong encoding triggers `UnicodeDecodeError` or mojibake (garbled text).',
    complexityInfo: 'PCED 1.2 Text encoding and internationalization',
  },
  {
    id: 'pced-s1-fc-040',
    track: 'pced',
    cardType: 'PCED 1.2 • Data Sources & Storage',
    topic: 'Columnar File Formats: Apache Parquet vs. Row-Based CSV',
    category: 'T1: Data Concepts',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'Why do modern Big Data and cloud analytics pipelines prefer Apache Parquet over CSV files?',
    codeSnippet: `# Architectural comparison:
storage_layout = {
    "CSV (Row-Oriented)": "Row 1 (all columns), then Row 2, then Row 3... Must read entire file from disk even to aggregate 1 column!",
    "Parquet (Column-Oriented)": "Col 1 values grouped together, Col 2 values grouped together... Highly compressed via Snappy, reads ONLY requested columns (column projection)!"
}

print("Parquet Advantages:")
print("1. Column projection: Read only required columns, saving I/O")
print("2. Extreme compression: Similar data types adjacent compress drastically")
print("3. Preserves schemas and data types natively (no type inference needed)")`,
    stdoutExpected: 'Parquet Advantages:\n1. Column projection: Read only required columns, saving I/O\n2. Extreme compression: Similar data types adjacent compress drastically\n3. Preserves schemas and data types natively (no type inference needed)',
    explanationTitle: 'Columnar Storage: Apache Parquet',
    explanationText:
      'Apache Parquet is an open-source, columnar storage file format optimized for fast analytical query engines (Pandas, Spark, DuckDB, BigQuery). By storing data by column rather than row, query engines read only the relevant columns from disk, dramatically accelerating analytical aggregations (SUM, AVG) and reducing cloud storage costs.',
    complexityInfo: 'PCED 1.2 Columnar storage vs row-based text files',
  },
];
