import { Flashcard } from '../types';

export const pcedSection2CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.4: SEQUENTIAL & SET STRUCTURES (Continuation: Cards 71 to 80)
  // =========================================================================
  {
    id: 'pced-s2-fc-071',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'Set Operations: Union (|) and Intersection (&)',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How do union (|) and intersection (&) identify shared and pooled audience cohorts?',
    codeSnippet: `campaign_a = {"user_1", "user_2", "user_3", "user_4"}
campaign_b = {"user_3", "user_4", "user_5", "user_6"}

# Union: users exposed to ANY campaign
all_users = campaign_a | campaign_b

# Intersection: users exposed to BOTH campaigns
overlap_users = campaign_a & campaign_b

print("Total reached (Union):      ", sorted(all_users))
print("Cross-over (Intersection):  ", sorted(overlap_users))`,
    stdoutExpected: "Total reached (Union):       ['user_1', 'user_2', 'user_3', 'user_4', 'user_5', 'user_6']\nCross-over (Intersection):   ['user_3', 'user_4']",
    explanationTitle: 'Set Union and Intersection',
    explanationText:
      'Set union (A | B or A.union(B)) combines elements from both sets without duplication. Set intersection (A & B or A.intersection(B)) returns only elements present in both sets, ideal for measuring audience crossover.',
    complexityInfo: 'PCED 2.2.2 Set algebra: union and intersection',
  },
  {
    id: 'pced-s2-fc-072',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'Set Operations: Difference (-) and Symmetric Difference (^)',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How do set difference (-) and symmetric difference (^) find churned vs unshared customer segments?',
    codeSnippet: `jan_customers = {"Alice", "Bob", "Charlie", "David"}
feb_customers = {"Charlie", "David", "Eve", "Frank"}

# Difference (A - B): In Jan but NOT in Feb (Churned)
churned = jan_customers - feb_customers

# Symmetric Difference (A ^ B): In Jan OR Feb, but NOT both
single_month_only = jan_customers ^ feb_customers

print("Churned customers (Jan - Feb): ", sorted(churned))
print("Single month only (Jan ^ Feb): ", sorted(single_month_only))`,
    stdoutExpected: "Churned customers (Jan - Feb):  ['Alice', 'Bob']\nSingle month only (Jan ^ Feb):  ['Alice', 'Bob', 'Eve', 'Frank']",
    explanationTitle: 'Difference and Symmetric Difference',
    explanationText:
      'Difference (A - B) isolates elements in set A that are not in set B (identifying churn). Symmetric difference (A ^ B) yields elements present in either A or B, but not both.',
    complexityInfo: 'PCED 2.2.2 Cohort churn and symmetric difference calculation',
  },
  {
    id: 'pced-s2-fc-073',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'Set Methods vs Operators Argument Flexibility',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Why does set.union() accept arbitrary iterables (like lists or generators), while the | operator requires both operands to be sets?',
    codeSnippet: `base_set = {1, 2, 3}
supplemental_list = [3, 4, 5]

# Method accepts any iterable:
merged = base_set.union(supplemental_list)
print("Method call with list: ", merged)

try:
    # Operator fails if right operand is not a set:
    bad_op = base_set | supplemental_list
except TypeError:
    print("Operator failed with list: TypeError")`,
    stdoutExpected: 'Method call with list:  {1, 2, 3, 4, 5}\nOperator failed with list: TypeError',
    explanationTitle: 'Set Methods vs Infix Operators',
    explanationText:
      'Set methods (union, intersection, difference) accept any iterable (lists, tuples, generators) as arguments. In contrast, bitwise set operators (|, &, -, ^) strictly require both operands to be set instances, raising TypeError otherwise.',
    complexityInfo: 'PCED 2.2.2 Set method flexibility vs operator constraints',
  },
  {
    id: 'pced-s2-fc-074',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'Set Mutators: discard() vs remove()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Why is set.discard() preferred over set.remove() when cleaning non-guaranteed elements?',
    codeSnippet: `active_tags = {"promo", "beta", "vip"}

# discard() silently succeeds if element does not exist
active_tags.discard("expired_tag")
print("After safe discard:", active_tags)

try:
    # remove() raises KeyError if element is absent
    active_tags.remove("expired_tag")
except KeyError:
    print("remove() failed: KeyError")`,
    stdoutExpected: "After safe discard: {'beta', 'promo', 'vip'}\nremove() failed: KeyError",
    explanationTitle: 'set.discard() vs set.remove()',
    explanationText:
      'set.remove(elem) deletes elem and raises a KeyError if elem is not found in the set. set.discard(elem) removes elem if present, but does nothing if elem is absent, avoiding try-except boilerplate during data sanitization.',
    complexityInfo: 'PCED 2.2.2 Safe element removal without KeyError',
  },
  {
    id: 'pced-s2-fc-075',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'Set Subset and Superset Relationships',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How do .issubset() and .issuperset() verify that mandatory database columns are present?',
    codeSnippet: `required_schema = {"id", "timestamp", "user_email", "amount"}
incoming_headers = {"id", "timestamp", "user_email", "amount", "ip_address"}

# Does incoming contain all required schema columns?
is_valid_payload = required_schema.issubset(incoming_headers)
# Equivalent: incoming_headers.issuperset(required_schema)

print("Schema compliance verified:", is_valid_payload)`,
    stdoutExpected: 'Schema compliance verified: True',
    explanationTitle: 'Subset & Superset Schema Verification',
    explanationText:
      'A.issubset(B) (or A <= B) checks if every element in A exists in B. A.issuperset(B) (or A >= B) checks if A contains all elements of B. In data ingestion, this provides instant validation of required columns against incoming headers.',
    complexityInfo: 'PCED 2.2.2 Schema header validation with issubset',
  },
  {
    id: 'pced-s2-fc-076',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'Set Comprehensions for Distinct Feature Extraction',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How does set comprehension syntax: {expr for item in seq if cond} isolate unique normalized categories?',
    codeSnippet: `raw_emails = [
    "Alice@EXAMPLE.com",
    "bob@work.org",
    "alice@example.com",
    "  Charlie@Domain.net  "
]

# Extract unique domains normalized to lowercase
unique_domains = {e.strip().lower().split("@")[1] for e in raw_emails}
print("Unique domains:", sorted(unique_domains))`,
    stdoutExpected: "Unique domains: ['domain.net', 'example.com', 'work.org']",
    explanationTitle: 'Set Comprehensions in Data Cleaning',
    explanationText:
      'A set comprehension uses curly braces: {expression for item in iterable if condition}. It computes each element and adds it to an underlying set, automatically discarding duplicates during construction.',
    complexityInfo: 'PCED 2.2.2 Categorical extraction via set comprehensions',
  },
  {
    id: 'pced-s2-fc-077',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'frozenset: The Immutable, Hashable Set',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'When and why do data analysts use frozenset instead of standard set objects?',
    codeSnippet: `group_a = frozenset(["feature_1", "feature_2"])
group_b = frozenset(["feature_2", "feature_3"])

# Can be used as keys in a dictionary (e.g. tracking interaction effects)
interaction_weights = {
    group_a: 0.85,
    group_b: 0.42
}

print("Weight for group A:", interaction_weights[group_a])`,
    stdoutExpected: 'Weight for group A: 0.85',
    explanationTitle: 'frozenset for Hashable Sets',
    explanationText:
      'Standard sets are mutable and therefore unhashable. A frozenset is an immutable variant of set. Because its contents cannot change after creation, frozenset objects are hashable and can serve as dictionary keys or members of other sets.',
    complexityInfo: 'PCED 2.2.2 frozenset immutability & dictionary keys',
  },
  {
    id: 'pced-s2-fc-078',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'Tuple Slicing and Named Unpacking',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How does extended tuple unpacking using the asterisk operator (*rest) capture variable-length record tails?',
    codeSnippet: `record = ("2026-09-21", "US_WEST", 120.5, 98.2, 114.0, 105.8)

date, region, *sensor_readings = record

print(f"Date:    {date}")
print(f"Region:  {region}")
print(f"Sensors: {sensor_readings} ({type(sensor_readings).__name__})")
print(f"Mean:    {sum(sensor_readings) / len(sensor_readings):.2f}")`,
    stdoutExpected: 'Date:    2026-09-21\nRegion:  US_WEST\nSensors: [120.5, 98.2, 114.0, 105.8] (list)\nMean:    109.62',
    explanationTitle: 'Extended Unpacking with *rest',
    explanationText:
      'Extended iterable unpacking allows using a starred variable (e.g., *sensor_readings) to collect any excess elements into a list, regardless of the tuple length. This is ideal for parsing variable-width time series rows.',
    complexityInfo: 'PCED 2.2.1 Extended unpacking for variable-width records',
  },
  {
    id: 'pced-s2-fc-079',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'Set Membership Testing Performance: O(1) vs O(n)',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Why is testing "x in my_set" orders of magnitude faster than "x in my_list" on millions of records?',
    codeSnippet: `# Demonstration of set hash lookup
blacklist_ids = set(["ID_992", "ID_441", "ID_883"])

incoming_id = "ID_441"
# Set membership uses hash tables: O(1) average time complexity
# List membership performs linear scan: O(n) time complexity
is_blocked = incoming_id in blacklist_ids
print("Is blocked via O(1) set lookup:", is_blocked)`,
    stdoutExpected: 'Is blocked via O(1) set lookup: True',
    explanationTitle: 'Set O(1) Hash Table Lookup Complexity',
    explanationText:
      'Python sets are implemented using hash tables. Checking membership ("x in my_set") computes the hash of x and performs an instant O(1) lookup. In contrast, lists perform a linear O(n) scan, making sets crucial for filtering large ID tables.',
    complexityInfo: 'PCED 2.2.2 Computational complexity: set vs list lookup',
  },
  {
    id: 'pced-s2-fc-080',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'Sorting Sets and Preserving Sequence Invariance',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What happens when sorted() is called on an unordered set?',
    codeSnippet: `disordered_set = {95, 12, 45, 88, 3}

# sorted() accepts any iterable and ALWAYS returns a new sorted list
sorted_list = sorted(disordered_set)

print("Return type: ", type(sorted_list).__name__)
print("Sorted values:", sorted_list)`,
    stdoutExpected: 'Return type:  list\nSorted values: [3, 12, 45, 88, 95]',
    explanationTitle: 'Sorting Unordered Sets',
    explanationText:
      'Because sets are fundamentally unordered, they do not possess an in-place .sort() method. Passing a set to the built-in sorted(my_set) extracts the elements and returns a brand-new sorted list.',
    complexityInfo: 'PCED 2.2.2 Converting unordered sets to ordered lists',
  },

  // =========================================================================
  // CHAPTER 2.5: DICTIONARIES, STRUCTURED RECORDS & FILE I/O (Cards 81 to 100)
  // =========================================================================
  {
    id: 'pced-s2-fc-081',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Dictionary Creation and Key Lookup: O(1) Efficiency',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How do Python dictionaries store key-value mappings, and what makes key lookup O(1)?',
    codeSnippet: `country_codes = {"US": "United States", "DE": "Germany", "JP": "Japan"}

print("Lookup DE: ", country_codes["DE"])
print("Total keys:", len(country_codes))
print("Is 'FR' in dict:", "FR" in country_codes)`,
    stdoutExpected: 'Lookup DE:  Germany\nTotal keys: 3\nIs \'FR\' in dict: False',
    explanationTitle: 'Dictionary Key-Value Architecture',
    explanationText:
      'Dictionaries store associations between keys and values using an internal hash table. Accessing a value by key (dict[k]) runs in O(1) average time complexity.',
    complexityInfo: 'PCED 2.2.3 Dictionary key hashing and O(1) access',
  },
  {
    id: 'pced-s2-fc-082',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Safe Access with dict.get() and Fallback Defaults',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Why does dict.get() prevent KeyErrors when handling sparse or optional columns?',
    codeSnippet: `user_profile = {"id": "U109", "name": "Sarah"}

# Square brackets raise KeyError if key is missing:
# email = user_profile["email"]  -> KeyError!

# .get(key, default) returns default (or None) safely
email = user_profile.get("email", "no-email-provided")
status = user_profile.get("status")

print(f"Email:  {email}")
print(f"Status: {status}")`,
    stdoutExpected: 'Email:  no-email-provided\nStatus: None',
    explanationTitle: 'Safe Key Access with dict.get()',
    explanationText:
      'dict.get(key, default=None) returns the associated value if key exists; if the key is absent, it returns the specified default value without raising a KeyError, making it essential for processing sparse JSON payloads.',
    complexityInfo: 'PCED 2.2.3 Defensive key retrieval with default fallbacks',
  },
  {
    id: 'pced-s2-fc-083',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Dictionary Views: keys(), values(), and items()',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What are dynamic view objects in Python 3 dictionaries, and how do they reflect live updates?',
    codeSnippet: `kpis = {"Revenue": 50000, "Cost": 35000}

k_view = kpis.keys()
print("Initial keys:", list(k_view))

# Adding a new key updates the view object dynamically!
kpis["Profit"] = 15000
print("After update:", list(k_view))`,
    stdoutExpected: "Initial keys: ['Revenue', 'Cost']\nAfter update: ['Revenue', 'Cost', 'Profit']",
    explanationTitle: 'Dictionary Dynamic View Objects',
    explanationText:
      'In Python 3, dict.keys(), dict.values(), and dict.items() return dynamic view objects, not static lists. They provide a live window into the dictionary that automatically reflects insertions and deletions without requiring re-computation.',
    complexityInfo: 'PCED 2.2.3 Dynamic dictionary view objects',
  },
  {
    id: 'pced-s2-fc-084',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Dictionary Mutation: update() and pop()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How do .update() and .pop() modify dictionary contents during batch ETL operations?',
    codeSnippet: `record = {"user": "Alice", "city": "NYC", "temp_flag": True}

# .pop(key, default) removes the key and returns its value
flag = record.pop("temp_flag", None)
print(f"Popped flag: {flag}")

# .update() merges another dictionary or iterable of key-values in-place
record.update({"tier": "Premium", "points": 450})
print("Updated record:", record)`,
    stdoutExpected: "Popped flag: True\nUpdated record: {'user': 'Alice', 'city': 'NYC', 'tier': 'Premium', 'points': 450}",
    explanationTitle: 'Dictionary Mutation with pop() and update()',
    explanationText:
      'dict.pop(key, default) removes and returns the value for key. dict.update(other) merges pairs from other into the dictionary in-place, overwriting existing keys and inserting new ones.',
    complexityInfo: 'PCED 2.2.3 In-place dictionary update and key popping',
  },
  {
    id: 'pced-s2-fc-085',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Frequency Counting with Dictionaries',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How do you build a category frequency distribution using a plain dictionary and dict.get()?',
    codeSnippet: `browsers = ["Chrome", "Firefox", "Chrome", "Safari", "Chrome", "Firefox"]

freq = {}
for b in browsers:
    freq[b] = freq.get(b, 0) + 1

for browser, count in sorted(freq.items(), key=lambda x: x[1], reverse=True):
    print(f"{browser}: {count}")`,
    stdoutExpected: 'Chrome: 3\nFirefox: 2\nSafari: 1',
    explanationTitle: 'Frequency Counting Pattern with dict.get()',
    explanationText:
      'The expression freq[key] = freq.get(key, 0) + 1 increments the counter for an existing key or initializes it to 0 + 1 if encountered for the first time. This is the foundational pattern for building categorical histograms.',
    complexityInfo: 'PCED 2.2.3 Categorical frequency tallying with dict.get()',
  },
  {
    id: 'pced-s2-fc-086',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'The collections.defaultdict Pattern for Grouping',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How does collections.defaultdict(list) group tabular transaction records by customer?',
    codeSnippet: `from collections import defaultdict

transactions = [
    ("Alice", 120),
    ("Bob", 80),
    ("Alice", 45),
    ("Charlie", 200),
    ("Bob", 15)
]

grouped = defaultdict(list)
for customer, amount in transactions:
    grouped[customer].append(amount)

for cust, orders in sorted(grouped.items()):
    print(f"{cust}: Total=\${sum(orders)}, Orders={orders}")`,
    stdoutExpected: 'Alice: Total=$165, Orders=[120, 45]\nBob: Total=$95, Orders=[80, 15]\nCharlie: Total=$200, Orders=[200]',
    explanationTitle: 'Grouping Data with defaultdict',
    explanationText:
      'defaultdict from collections automatically calls a factory function (like list) to create a default value whenever a nonexistent key is accessed, eliminating manual if-key-not-in-dict initialization checks.',
    complexityInfo: 'PCED 2.2.3 Data aggregation and grouping with defaultdict',
  },
  {
    id: 'pced-s2-fc-087',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Dictionary Comprehensions: Filtering and Inversion',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How do dictionary comprehensions filter metrics and invert key-value lookup tables?',
    codeSnippet: `scores = {"Alice": 92, "Bob": 54, "Charlie": 88, "Diana": 48}

# Filter passing scores (>= 60) and normalize to 100-pt scale
passing = {name: score for name, score in scores.items() if score >= 60}
print("Passing:", passing)

# Invert dictionary: mapping unique IDs to usernames
id_to_user = {101: "Alice", 102: "Bob"}
user_to_id = {user: uid for uid, user in id_to_user.items()}
print("Inverted:", user_to_id)`,
    stdoutExpected: "Passing: {'Alice': 92, 'Charlie': 88}\nInverted: {'Alice': 101, 'Bob': 102}",
    explanationTitle: 'Dictionary Comprehensions',
    explanationText:
      'Dictionary comprehensions follow the syntax {key_expr: val_expr for item in iterable if condition}. They provide a concise, expressive mechanism for filtering records, transforming values, and inverting lookup tables.',
    complexityInfo: 'PCED 2.2.3 Dictionary comprehension filtering & key inversion',
  },
  {
    id: 'pced-s2-fc-088',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Dictionary Merge (|) and Update (|=) Operators',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How do the merge (|) and update (|=) operators combine dictionaries in Python 3.9+?',
    codeSnippet: `default_config = {"env": "prod", "timeout": 30, "retries": 3}
user_overrides = {"timeout": 60, "debug": True}

# Python 3.9+ union operator: right-hand operand wins on conflicts
merged_config = default_config | user_overrides
print("Merged config:", merged_config)
print("Original untouched:", default_config["timeout"])`,
    stdoutExpected: "Merged config: {'env': 'prod', 'timeout': 60, 'retries': 3, 'debug': True}\nOriginal untouched: 30",
    explanationTitle: 'Dictionary Merge Operator (|)',
    explanationText:
      'Python 3.9 introduced the dictionary merge operator (|) and in-place update operator (|=). When keys conflict, values from the right-hand operand take precedence, providing a clean way to overlay configuration overrides.',
    complexityInfo: 'PCED 2.2.3 Dictionary merge operator (|) semantics',
  },
  {
    id: 'pced-s2-fc-089',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Nested Dictionaries for Hierarchical Records',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How do nested dictionaries model hierarchical entity records, and how are nested values accessed?',
    codeSnippet: `dataset = {
    "org_id": "CORP-01",
    "departments": {
        "engineering": {"headcount": 140, "budget": 2500000},
        "marketing": {"headcount": 45, "budget": 950000}
    }
}

eng_budget = dataset["departments"]["engineering"]["budget"]
print(f"Engineering Budget: \${eng_budget:,}")`,
    stdoutExpected: 'Engineering Budget: $2,500,000',
    explanationTitle: 'Nested Dictionaries for Hierarchical Data',
    explanationText:
      'Nested dictionaries mirror JSON data structures. Accessing deep values requires chaining square brackets or .get() calls. In analytical processing, nested dictionaries often serve as the raw staging structure before tabular flattening.',
    complexityInfo: 'PCED 2.2.3 Multi-level nested dictionary traversal',
  },
  {
    id: 'pced-s2-fc-090',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'File I/O Context Manager: with open()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Why must file operations in Python always use the "with open()" context manager?',
    codeSnippet: `import io

# Simulating file with io.StringIO
virtual_file = io.StringIO("header1,header2\\n10,20\\n")

# Standard context manager pattern:
# with open("data.csv", "r", encoding="utf-8") as f:
#     content = f.read()

content = virtual_file.getvalue()
print("File successfully read:")
print(content.strip())`,
    stdoutExpected: 'File successfully read:\nheader1,header2\n10,20',
    explanationTitle: 'The Context Manager (with open())',
    explanationText:
      'The "with open()" statement establishes a context manager that guarantees the underlying file descriptor is automatically closed when execution leaves the block, even if an unhandled exception or crash occurs, preventing resource leaks.',
    complexityInfo: 'PCED 2.1.5 Context managers & file descriptor lifecycle',
  },
  {
    id: 'pced-s2-fc-091',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'File Access Modes: r, w, a, and x',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What are the behaviors of file modes "r", "w", "a", and "x" in open()?',
    codeSnippet: `# File Modes Summary:
# 'r' -> Read only (default). File MUST exist; otherwise FileNotFoundError.
# 'w' -> Write only. Creates file or TRUNCATES (erases) existing contents!
# 'a' -> Append only. Appends new data to end of file without erasing.
# 'x' -> Exclusive creation. Creates new file; fails with FileExistsError if it exists.

modes = {"r": "Read existing", "w": "Overwrite/truncate", "a": "Append", "x": "Exclusive create"}
for m, desc in modes.items():
    print(f"Mode '{m}': {desc}")`,
    stdoutExpected: "Mode 'r': Read existing\nMode 'w': Overwrite/truncate\nMode 'a': Append\nMode 'x': Exclusive create",
    explanationTitle: 'File Access Modes in Python',
    explanationText:
      'Selecting the correct mode prevents accidental data loss. Mode "w" truncates existing files immediately upon opening, while mode "a" preserves existing lines and writes exclusively to the end of the file.',
    complexityInfo: 'PCED 2.1.5 File opening modes & truncation precautions',
  },
  {
    id: 'pced-s2-fc-092',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Line-by-Line Iteration for Memory-Efficient File Reading',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Why should large multi-gigabyte log files be iterated with "for line in f" rather than f.read() or f.readlines()?',
    codeSnippet: `import io

stream = io.StringIO("row_1\\nrow_2\\nrow_3\\n")

# Reading line-by-line streams lazily without buffering entire file in RAM:
rows_counted = 0
for line in stream:
    rows_counted += 1

print(f"Total lines processed streamingly: {rows_counted}")`,
    stdoutExpected: 'Total lines processed streamingly: 3',
    explanationTitle: 'Lazy Streaming File Iteration',
    explanationText:
      'Iterating directly over a file object ("for line in f:") uses Python’s internal buffer to read one line at a time lazily (O(1) memory). Calling f.read() or f.readlines() loads the entire file into RAM at once, risking Out-Of-Memory (OOM) crashes on large datasets.',
    complexityInfo: 'PCED 2.1.5 Streaming file iteration vs memory exhaustion',
  },
  {
    id: 'pced-s2-fc-093',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Reading Delimited Files with the csv.reader Module',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How does csv.reader handle quoted fields containing internal commas?',
    codeSnippet: `import csv, io

# Notice "San Francisco, CA" contains a comma inside quotes!
raw_csv = '''ID,City,Population
1,"San Francisco, CA",873965
2,"New York, NY",8804190'''

f = io.StringIO(raw_csv.strip())
reader = csv.reader(f)

header = next(reader)
rows = [row for row in reader]

print("Header:  ", header)
print("Row 1:   ", rows[0])
print("City name preserved:", rows[0][1])`,
    stdoutExpected: "Header:   ['ID', 'City', 'Population']\nRow 1:    ['1', 'San Francisco, CA', '873965']\nCity name preserved: San Francisco, CA",
    explanationTitle: 'The csv.reader Object',
    explanationText:
      'Plain str.split(",") breaks when field values contain commas enclosed in quotation marks. The standard csv.reader properly implements RFC 4180 parsing, recognizing quotation boundaries, escaped quotes, and multiline cells.',
    complexityInfo: 'PCED 2.1.5 RFC 4180 CSV parsing with csv.reader',
  },
  {
    id: 'pced-s2-fc-094',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Header-Mapped Ingestion with csv.DictReader',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How does csv.DictReader automatically map CSV rows into dictionaries using column header names?',
    codeSnippet: `import csv, io

raw_data = '''product,quantity,unit_price
Widget_A,15,4.50
Widget_B,40,12.00'''

f = io.StringIO(raw_data.strip())
dict_reader = csv.DictReader(f)

records = []
for row in dict_reader:
    # row is an OrderedDict/dict where keys are header names!
    total = int(row["quantity"]) * float(row["unit_price"])
    records.append(f"{row['product']}: \${total:.2f}")

for r in records:
    print(r)`,
    stdoutExpected: 'Widget_A: $67.50\nWidget_B: $480.00',
    explanationTitle: 'csv.DictReader for Named Column Access',
    explanationText:
      'csv.DictReader reads the first line as a header row and produces a dictionary for each subsequent row, mapping header names to field values. This avoids fragile numerical index referencing (row[0], row[1]) if column orders change.',
    complexityInfo: 'PCED 2.1.5 Dictionary-mapped CSV ingestion',
  },
  {
    id: 'pced-s2-fc-095',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Writing CSVs with csv.writer and the newline="" Parameter',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Why is newline="" mandatory when opening files for writing with csv.writer on Windows platforms?',
    codeSnippet: `import csv, io

output = io.StringIO()
# On Windows, omitting newline="" results in double line returns (\\r\\r\\n)
writer = csv.writer(output)

writer.writerow(["Month", "Signups"])
writer.writerows([["Jan", 120], ["Feb", 185]])

print(output.getvalue().strip())`,
    stdoutExpected: 'Month,Signups\r\nJan,120\r\nFeb,185',
    explanationTitle: 'Writing CSVs and the newline Parameter',
    explanationText:
      'The csv module performs its own internal newline handling (RFC 4180 specifies \\r\\n). When open() is called without newline="", Python’s universal newline translation adds an extra carriage return on Windows, creating blank rows between data.',
    complexityInfo: 'PCED 2.1.5 Writing CSV records & platform line ending hygiene',
  },
  {
    id: 'pced-s2-fc-096',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Writing Structured Records with csv.DictWriter',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How do you write a list of dictionaries to a CSV file using csv.DictWriter and writeheader()?',
    codeSnippet: `import csv, io

data = [
    {"metric": "latency", "val": 12.4},
    {"metric": "cpu", "val": 84.1}
]

out = io.StringIO()
fieldnames = ["metric", "val"]
writer = csv.DictWriter(out, fieldnames=fieldnames)

writer.writeheader()
writer.writerows(data)

print(out.getvalue().strip())`,
    stdoutExpected: 'metric,val\r\nlatency,12.4\r\ncpu,84.1',
    explanationTitle: 'csv.DictWriter and writeheader()',
    explanationText:
      'csv.DictWriter takes an output file and a sequence of "fieldnames" defining the column order. Calling writer.writeheader() writes the initial header row, and writer.writerows(dict_list) writes the corresponding rows in order.',
    complexityInfo: 'PCED 2.1.5 Exporting dictionary records via csv.DictWriter',
  },
  {
    id: 'pced-s2-fc-097',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Parsing JSON Strings with json.loads()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How does json.loads() deserialize JSON string payloads into native Python dictionaries and lists?',
    codeSnippet: `import json

json_payload = '{"experiment_id": "EXP-44", "metrics": [0.85, 0.89, 0.92], "active": true}'

data = json.loads(json_payload)
print("Type:           ", type(data).__name__)
print("Experiment ID:  ", data["experiment_id"])
print("Boolean mapped: ", data["active"], f"({type(data['active']).__name__})")
print("Average metric: ", sum(data["metrics"]) / len(data["metrics"]))`,
    stdoutExpected: 'Type:            dict\nExperiment ID:   EXP-44\nBoolean mapped:  True (bool)\nAverage metric:  0.8866666666666667',
    explanationTitle: 'JSON Deserialization with json.loads()',
    explanationText:
      'json.loads(str) parses a JSON formatted string and maps it to corresponding Python data structures: JSON objects become dicts, arrays become lists, booleans (true/false) become True/False, and null becomes None.',
    complexityInfo: 'PCED 2.1.5 Deserializing JSON text with json.loads()',
  },
  {
    id: 'pced-s2-fc-098',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'Serializing Objects to JSON with json.dumps()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How does json.dumps() serialize Python dictionaries into formatted JSON strings with indentation?',
    codeSnippet: `import json

summary = {
    "status": "COMPLETED",
    "records": 450,
    "success": True,
    "error_log": None
}

# json.dumps() converts Python dict -> JSON string
json_str = json.dumps(summary, indent=2)
print("Serialized JSON string:")
print(json_str)`,
    stdoutExpected: 'Serialized JSON string:\n{\n  "status": "COMPLETED",\n  "records": 450,\n  "success": true,\n  "error_log": null\n}',
    explanationTitle: 'Serializing to JSON with json.dumps()',
    explanationText:
      'json.dumps(obj) converts Python objects into a JSON formatted string. The "indent" parameter formats output with readable indentation. Python True becomes JSON true, False becomes false, and None becomes null.',
    complexityInfo: 'PCED 2.1.5 Formatting and serializing JSON with json.dumps',
  },
  {
    id: 'pced-s2-fc-099',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'File Stream JSON Operations: json.load() vs json.dump()',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the distinction between json.loads/dumps (strings) and json.load/dump (file streams)?',
    codeSnippet: `import json, io

# 1. json.dump() writes directly to a file-like stream:
buffer = io.StringIO()
state = {"model": "LinearRegression", "r2": 0.94}
json.dump(state, buffer)

# 2. json.load() reads directly from a file-like stream:
buffer.seek(0)
loaded_state = json.load(buffer)

print("Loaded from stream:", loaded_state)
print("R-squared score:   ", loaded_state["r2"])`,
    stdoutExpected: "Loaded from stream: {'model': 'LinearRegression', 'r2': 0.94}\nR-squared score:    0.94",
    explanationTitle: 'json.load/dump vs json.loads/dumps',
    explanationText:
      'The "s" in loads() and dumps() stands for "string": they process Python str objects. The non-s versions, load() and dump(), take file-like objects (streams supporting .read() or .write()) directly, avoiding intermediate string creation.',
    complexityInfo: 'PCED 2.1.5 Stream JSON handling with json.load and json.dump',
  },
  {
    id: 'pced-s2-fc-100',
    track: 'pced',
    cardType: 'PCED 2.5 • Dictionaries & File I/O',
    topic: 'UTF-8 Encoding Specification in File I/O',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Why should data analysts explicitly specify encoding="utf-8" in open() across different operating systems?',
    codeSnippet: `# Best practice for cross-platform data pipeline reproducibility:
# with open("survey_responses.csv", mode="r", encoding="utf-8") as f:
#     data = f.read()

# Without explicit encoding, Python defaults to locale encoding
# (e.g. Windows cp1252), which crashes with UnicodeDecodeError
# when encountering foreign currency symbols (€, ¥), accents (é, ñ), or emojis!
currency_sample = "Price: €45.00, ¥3000"
encoded_bytes = currency_sample.encode("utf-8")
decoded = encoded_bytes.decode("utf-8")
print("Explicit UTF-8 preservation:", decoded)`,
    stdoutExpected: 'Explicit UTF-8 preservation: Price: €45.00, ¥3000',
    explanationTitle: 'Explicit UTF-8 Encoding in File I/O',
    explanationText:
      'In Python, omitting the encoding parameter makes open() use the platform-dependent default (e.g. Windows-1252 or macOS/Linux UTF-8). If international characters or symbols are read under the wrong locale encoding, Python crashes with UnicodeDecodeError. Always explicitly pass encoding="utf-8".',
    complexityInfo: 'PCED 2.1.5 Cross-platform file encoding hygiene & UTF-8',
  },
];
