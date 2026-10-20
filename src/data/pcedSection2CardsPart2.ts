import { Flashcard } from '../types';

export const pcedSection2CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.2: CONTROL FLOW, LOOPS & ITERATION (Continuation: Cards 36 to 40)
  // =========================================================================
  {
    id: 'pced-s2-fc-036',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'Reversed Iteration with reversed()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does reversed() iterate over a sequence in reverse order without mutating the original list?',
    codeSnippet: `timeline = ["2023", "2024", "2025", "2026"]

rev_iter = reversed(timeline)
print("Reversed list:", list(rev_iter))
print("Original untouched:", timeline)`,
    stdoutExpected: "Reversed list: ['2026', '2025', '2024', '2023']\nOriginal untouched: ['2023', '2024', '2025', '2026']",
    explanationTitle: 'reversed() Built-in Function',
    explanationText:
      'reversed(seq) returns a reverse iterator over the values of the given sequence without copying or modifying the underlying list, preserving memory and original data ordering.',
    complexityInfo: 'PCED 2.1.2 Non-destructive reverse traversal',
  },
  {
    id: 'pced-s2-fc-037',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'Guard Clauses and the Early Return Pattern',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does the guard clause pattern reduce cyclomatic complexity and deep nesting in data validation?',
    codeSnippet: `def compute_growth(curr: float, prev: float) -> str:
    # Guard clauses handle boundary exceptions early
    if prev == 0:
        return "N/A (Division by zero)"
    if curr < 0 or prev < 0:
        return "Invalid negative metric"
    
    # Happy path code remains flat and unnested
    pct_change = (curr - prev) / prev
    return f"{pct_change:+.1%}"

print("Growth (120, 100):", compute_growth(120, 100))
print("Growth (50, 0):   ", compute_growth(50, 0))`,
    stdoutExpected: 'Growth (120, 100): +20.0%\nGrowth (50, 0):    N/A (Division by zero)',
    explanationTitle: 'Guard Clauses vs Nested Conditionals',
    explanationText:
      'Instead of deeply nested if-else pyramids (the "arrow anti-pattern"), guard clauses test invalid edge cases at the top of a function and return immediately, keeping core data transformation logic linear and readable.',
    complexityInfo: 'PCED 2.1.2 Clean code: guard clauses & cyclomatic complexity',
  },
  {
    id: 'pced-s2-fc-038',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'Handling Infinite Loops and Timeout Guards',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How do analysts implement iteration caps to prevent runaway while loops during streaming polling?',
    codeSnippet: `attempt = 0
max_retries = 3
stream_connected = False

while not stream_connected:
    attempt += 1
    if attempt > max_retries:
        print(f"Aborting: exceeded max retries ({max_retries})")
        break
    print(f"Connection attempt {attempt} failed, retrying...")`,
    stdoutExpected: 'Connection attempt 1 failed, retrying...\nConnection attempt 2 failed, retrying...\nConnection attempt 3 failed, retrying...\nAborting: exceeded max retries (3)',
    explanationTitle: 'Defensive while Loop Termination',
    explanationText:
      'An infinite loop occurs when the while condition never resolves to False and no break statement is encountered. Defensive programming incorporates iteration counters or timeout thresholds to force loop termination.',
    complexityInfo: 'PCED 2.1.2 Defensive looping & loop termination bounds',
  },
  {
    id: 'pced-s2-fc-039',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'Compound Logical Conditions and De Morgan’s Laws',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How do De Morgan’s Laws apply when simplifying negated filtering expressions in Python?',
    codeSnippet: `is_missing = False
is_outlier = False

# De Morgan's Law: not (A or B) == (not A) and (not B)
cond_1 = not (is_missing or is_outlier)
cond_2 = (not is_missing) and (not is_outlier)

print("not (A or B):            ", cond_1)
print("(not A) and (not B):     ", cond_2)
print("Equivalence verified:    ", cond_1 == cond_2)`,
    stdoutExpected: 'not (A or B):             True\n(not A) and (not B):      True\nEquivalence verified:     True',
    explanationTitle: "De Morgan's Laws in Data Filtering",
    explanationText:
      'De Morgan’s Laws state that: not (A or B) is equivalent to (not A and not B), and not (A and B) is equivalent to (not A or not B). Applying these equivalences simplifies complex conditional filtering logic in analytics pipelines.',
    complexityInfo: 'PCED 2.1.2 Boolean algebra & De Morgan equivalence',
  },
  {
    id: 'pced-s2-fc-040',
    track: 'pced',
    cardType: 'PCED 2.2 • Control Flow & Iteration',
    topic: 'Assignment Expression (The Walrus Operator :=)',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does the walrus operator (:=) assign values within conditional checks and filtering loops?',
    codeSnippet: `stream_readings = [12, 19, 85, 4, 99, 15]

# Assign and test in a single step
anomalies = [val for r in stream_readings if (val := r * 1.5) > 100]
print("Scaled anomalies > 100:", anomalies)`,
    stdoutExpected: 'Scaled anomalies > 100: [127.5, 148.5]',
    explanationTitle: 'The Walrus Operator (:=)',
    explanationText:
      'Introduced in Python 3.8, the assignment expression operator (:=) allows assigning a value to a variable within an expression itself, avoiding redundant recalculations in conditionals and comprehensions.',
    complexityInfo: 'PCED 2.1.2 Walrus operator (:=) in data pipelines',
  },

  // =========================================================================
  // CHAPTER 2.3: FUNCTIONS, SCOPES, LAMBDAS & ANALYTICAL MODULES (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pced-s2-fc-041',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'Function Definition, Positional & Keyword Arguments',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How do positional arguments, keyword arguments, and default parameter values behave in Python functions?',
    codeSnippet: `def calculate_metric(base: float, multiplier: float = 1.0, offset: float = 0.0) -> float:
    return (base * multiplier) + offset

# Positional call
print("Positional: ", calculate_metric(10.0, 2.5))

# Keyword call with default offset
print("Keyword:    ", calculate_metric(base=10.0, multiplier=2.5))

# Reordered keywords
print("Reordered:  ", calculate_metric(offset=5.0, multiplier=2.0, base=10.0))`,
    stdoutExpected: 'Positional:  25.0\nKeyword:     25.0\nReordered:   25.0',
    explanationTitle: 'Function Parameters and Invocation',
    explanationText:
      'Functions are defined with "def". Positional arguments are matched left-to-right. Keyword arguments are matched by name regardless of position. Parameters with default values must always follow parameters without default values in the signature.',
    complexityInfo: 'PCED 2.1.3 Function signatures & argument binding',
  },
  {
    id: 'pced-s2-fc-042',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'The Default Mutable Argument Trap',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Why should default parameter values never be mutable objects like empty lists or dictionaries?',
    codeSnippet: `# Anti-pattern: def append_reading(val, target=[])
# Correct Pythonic pattern using None sentinel:
def append_reading(val: float, target: list = None) -> list:
    if target is None:
        target = []
    target.append(val)
    return target

b1 = append_reading(10.5)
b2 = append_reading(20.0)
print("Batch 1:", b1)
print("Batch 2:", b2)
print("Independent lists:", b1 is not b2)`,
    stdoutExpected: 'Batch 1: [10.5]\nBatch 2: [20.0]\nIndependent lists: True',
    explanationTitle: 'Mutable Default Arguments Trap',
    explanationText:
      'Default parameter values are evaluated once when the function definition is executed, not at each call. If you use a mutable default like target=[], the same list object is shared across every subsequent call. Always use "target = None" and initialize inside the function.',
    complexityInfo: 'PCED 2.1.3 Function parameter evaluation & None sentinel',
  },
  {
    id: 'pced-s2-fc-043',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'Multiple Return Values via Tuple Packing',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How do Python functions return multiple analytical metrics from a single call?',
    codeSnippet: `def summarize_series(numbers: list):
    min_val = min(numbers)
    max_val = max(numbers)
    avg_val = sum(numbers) / len(numbers)
    # Python automatically packs these into a single tuple
    return min_val, max_val, avg_val

result = summarize_series([10, 20, 30, 40])
print("Return type:", type(result).__name__)

# Direct unpacking
low, high, mean = summarize_series([10, 20, 30, 40])
print(f"Low: {low}, High: {high}, Mean: {mean}")`,
    stdoutExpected: 'Return type: tuple\nLow: 10, High: 40, Mean: 25.0',
    explanationTitle: 'Returning Multiple Values',
    explanationText:
      'When multiple comma-separated values follow a return statement, Python automatically packs them into a single tuple. The caller can unpack the tuple into distinct variables in a single assignment statement.',
    complexityInfo: 'PCED 2.1.3 Tuple packing and return unpacking',
  },
  {
    id: 'pced-s2-fc-044',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'Variable Scope and the LEGB Lookup Rule',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the LEGB scope resolution rule in Python, and how does it prevent variable collisions?',
    codeSnippet: `factor = 1.2  # Global scope

def outer():
    factor = 2.0  # Enclosing scope
    def inner():
        factor = 3.0  # Local scope
        return factor * 10
    return inner()

print("Inner result (Local):", outer())
print("Global factor still:", factor)`,
    stdoutExpected: 'Inner result (Local): 30.0\nGlobal factor still: 1.2',
    explanationTitle: 'LEGB Scope Hierarchy',
    explanationText:
      'Python resolves variable names using the LEGB rule: Local -> Enclosing -> Global -> Built-in. It checks the local scope first, then any enclosing function scopes, then module global scope, and finally built-in scope.',
    complexityInfo: 'PCED 2.1.3 Scope resolution & variable shadowing',
  },
  {
    id: 'pced-s2-fc-045',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'The global Keyword and Its Risks in Data Pipelines',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What does the global keyword do inside a function, and why is mutating global state discouraged in pipelines?',
    codeSnippet: `row_counter = 0

def process_record(record: dict):
    global row_counter  # Bind directly to module global
    row_counter += 1
    return record.get("id")

process_record({"id": 101})
process_record({"id": 102})
print("Total rows processed via global:", row_counter)`,
    stdoutExpected: 'Total rows processed via global: 2',
    explanationTitle: 'The global Keyword',
    explanationText:
      'The "global" keyword declares that a variable name inside a function refers to the module-level namespace. While it allows in-place re-binding of global variables, it creates hidden side-effects that make data pipelines difficult to debug and test.',
    complexityInfo: 'PCED 2.1.3 Global state mutation vs pure functions',
  },
  {
    id: 'pced-s2-fc-046',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'Arbitrary Arguments: *args and **kwargs',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How do *args and **kwargs collect arbitrary positional and keyword arguments in data utility functions?',
    codeSnippet: `def custom_aggregate(*args, **kwargs):
    operation = kwargs.get("op", "sum")
    if operation == "sum":
        return sum(args)
    elif operation == "max":
        return max(args)

print("Sum:", custom_aggregate(10, 20, 30, op="sum"))
print("Max:", custom_aggregate(5, 88, 12, op="max"))`,
    stdoutExpected: 'Sum: 60\nMax: 88',
    explanationTitle: '*args and **kwargs in Python',
    explanationText:
      '*args collects arbitrary positional arguments into a tuple. **kwargs collects arbitrary keyword arguments into a dictionary. This allows building flexible wrapper and aggregation functions.',
    complexityInfo: 'PCED 2.1.3 Variadic parameter handling with *args and **kwargs',
  },
  {
    id: 'pced-s2-fc-047',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'Anonymous Functions (lambda) for Lightweight Transformations',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the syntax and purpose of a lambda expression in Python data transformations?',
    codeSnippet: `# Syntax: lambda <arguments>: <single_expression>
celsius_to_fahr = lambda c: (c * 9/5) + 32

temps_c = [0, 20, 37, 100]
temps_f = [celsius_to_fahr(t) for t in temps_c]
print("Fahrenheit temps:", temps_f)`,
    stdoutExpected: 'Fahrenheit temps: [32.0, 68.0, 98.6, 212.0]',
    explanationTitle: 'Python lambda Expressions',
    explanationText:
      'A lambda function is a small, anonymous function defined with the "lambda" keyword. It can take any number of arguments, but can only contain a single expression whose evaluated result is automatically returned.',
    complexityInfo: 'PCED 2.1.3 Anonymous inline lambda functions',
  },
  {
    id: 'pced-s2-fc-048',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'Custom Sorting with sorted() and key=lambda',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How do you sort complex tabular records or dictionaries using the key parameter in sorted()?',
    codeSnippet: `products = [
    {"name": "Server_A", "price": 1200, "latency": 15},
    {"name": "Server_B", "price": 850, "latency": 45},
    {"name": "Server_C", "price": 1500, "latency": 8}
]

# Sort by latency ascending
by_latency = sorted(products, key=lambda p: p["latency"])
print("Lowest latency:", [p["name"] for p in by_latency])

# Sort by price descending
by_price_desc = sorted(products, key=lambda p: p["price"], reverse=True)
print("Most expensive:", [p["name"] for p in by_price_desc])`,
    stdoutExpected: "Lowest latency: ['Server_C', 'Server_A', 'Server_B']\nMost expensive: ['Server_C', 'Server_A', 'Server_B']",
    explanationTitle: 'Key-Based Sorting with sorted()',
    explanationText:
      'The built-in sorted() function accepts a "key" callable that specifies a custom sorting criterion evaluated on each element before comparison. Setting "reverse=True" inverts the sorting order.',
    complexityInfo: 'PCED 2.1.3 Custom sort keys on structured records',
  },
  {
    id: 'pced-s2-fc-049',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'Functional Iteration: map() and filter()',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How do map() and filter() apply transformations and predicates lazily across data streams?',
    codeSnippet: `raw_scores = [45, 88, 72, 95, 30, 60]

# filter(predicate, iterable) keeps items where predicate evaluates True
passed = filter(lambda s: s >= 60, raw_scores)

# map(func, iterable) applies func to each item
scaled = map(lambda s: round(s * 1.05, 1), passed)

print("Scaled passing scores:", list(scaled))`,
    stdoutExpected: 'Scaled passing scores: [92.4, 75.6, 99.8, 63.0]',
    explanationTitle: 'map() and filter() Iterators',
    explanationText:
      'map() and filter() return lazy iterators that process items one at a time on demand rather than building full lists in memory. In modern Python, list comprehensions are often preferred for readability, but map/filter remain fundamental functional tools.',
    complexityInfo: 'PCED 2.1.3 Lazy functional transformations: map & filter',
  },
  {
    id: 'pced-s2-fc-050',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'Essential Built-in Aggregations: sum, min, max, len',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How do Python’s built-in sum(), min(), max(), and len() compute summary statistics?',
    codeSnippet: `numbers = [40, 15, 85, 20, 90]

total = sum(numbers)
count = len(numbers)
low = min(numbers)
high = max(numbers)
mean = total / count

print(f"Count={count}, Sum={total}, Min={low}, Max={high}, Mean={mean}")

# sum with start offset (e.g. baseline charge of 100)
adjusted_total = sum(numbers, 100)
print(f"Total with \$100 base: {adjusted_total}")`,
    stdoutExpected: 'Count=5, Sum=250, Min=15, Max=90, Mean=50.0\nTotal with $100 base: 350',
    explanationTitle: 'Built-in Aggregation Primitives',
    explanationText:
      'sum(), min(), max(), and len() are fast, C-optimized built-ins. sum(iterable, start=0) accepts an optional second argument that is added to the total. Calculating mean as sum(seq) / len(seq) is the standard base-Python pattern.',
    complexityInfo: 'PCED 2.1.3 Base aggregation functions & arithmetic summary',
  },
  {
    id: 'pced-s2-fc-051',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'Logical Aggregations: any() and all()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How do any() and all() validate dataset constraints (e.g., checking for nulls or anomalies)?',
    codeSnippet: `batch_a = [12.0, 15.5, 9.8, 14.2]
batch_b = [12.0, -1.5, 9.8, 14.2]

# Are all readings positive?
all_pos_a = all(x > 0 for x in batch_a)
all_pos_b = all(x > 0 for x in batch_b)

# Are there any outliers exceeding 15.0?
has_outliers_a = any(x > 15.0 for x in batch_a)

print("Batch A all positive:", all_pos_a)
print("Batch B all positive:", all_pos_b)
print("Batch A has outlier:  ", has_outliers_a)`,
    stdoutExpected: 'Batch A all positive: True\nBatch B all positive: False\nBatch A has outlier:   True',
    explanationTitle: 'any() and all() for Quality Checks',
    explanationText:
      'all(iterable) returns True if every element is truthy (or if the iterable is empty). any(iterable) returns True if at least one element is truthy. Both functions short-circuit immediately as soon as the outcome is determined.',
    complexityInfo: 'PCED 2.1.3 Dataset constraint verification with any() and all()',
  },
  {
    id: 'pced-s2-fc-052',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'Rounding Semantics and Bankers Rounding (round)',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Why does round(2.5) return 2, while round(3.5) returns 4 in Python?',
    codeSnippet: `print("round(2.5):", round(2.5))
print("round(3.5):", round(3.5))
print("round(4.5):", round(4.5))

# Rounding to specific decimal places
metric = 14.2857
print(f"round(metric, 2): {round(metric, 2)}")
print(f"round(metric, 3): {round(metric, 3)}")`,
    stdoutExpected: 'round(2.5): 2\nround(3.5): 4\nround(4.5): 4\nround(metric, 2): 14.29\nround(metric, 3): 14.286',
    explanationTitle: "Banker's Rounding (Round Half to Even)",
    explanationText:
      'Python 3 uses "round half to even" (Banker’s rounding) for floating-point numbers. When a number is equidistant between two integers (e.g. .5), Python rounds to the nearest even integer to prevent statistical upward bias in aggregations.',
    complexityInfo: 'PCED 2.1.3 Banker rounding behavior & statistical bias',
  },
  {
    id: 'pced-s2-fc-053',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'Absolute Values and Distance: abs()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How is the built-in abs() function used to calculate prediction residuals and Mean Absolute Error (MAE)?',
    codeSnippet: `actuals = [100, 150, 200, 250]
predictions = [110, 140, 205, 235]

errors = [abs(act - pred) for act, pred in zip(actuals, predictions)]
mae = sum(errors) / len(errors)

print("Absolute errors:", errors)
print(f"Mean Absolute Error (MAE): {mae}")`,
    stdoutExpected: 'Absolute errors: [10, 10, 5, 15]\nMean Absolute Error (MAE): 10.0',
    explanationTitle: 'abs() and Error Residuals',
    explanationText:
      'abs(x) returns the absolute value of a number, stripping any negative sign. It is essential in residual calculations (such as Mean Absolute Error), ensuring that positive and negative deviations do not cancel each other out.',
    complexityInfo: 'PCED 2.1.3 Error residual calculation using abs()',
  },
  {
    id: 'pced-s2-fc-054',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'The math Module: ceil, floor, sqrt, and isnan',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How do math.ceil(), math.floor(), math.sqrt(), and math.isnan() perform mathematical operations?',
    codeSnippet: `import math

val = 7.25
print("math.ceil(7.25): ", math.ceil(val))   # Round up
print("math.floor(7.25):", math.floor(val))  # Round down
print("math.sqrt(64.0): ", math.sqrt(64.0))

nan_val = float('nan')
print("math.isnan(nan):  ", math.isnan(nan_val))`,
    stdoutExpected: 'math.ceil(7.25):  8\nmath.floor(7.25): 7\nmath.sqrt(64.0):  8.0\nmath.isnan(nan):   True',
    explanationTitle: 'Python math Standard Module',
    explanationText:
      'math.ceil() rounds a number up to the nearest integer, math.floor() rounds down, math.sqrt() returns the square root as a float, and math.isnan() safely checks whether a float is NaN (Not a Number), which cannot be tested with == since NaN != NaN.',
    complexityInfo: 'PCED 2.1.3 Standard math library operations',
  },
  {
    id: 'pced-s2-fc-055',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'The statistics Module: Central Tendency (mean, median, mode)',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How does Python’s statistics module compute mean, median, and mode on sample data?',
    codeSnippet: `import statistics

salaries = [45000, 52000, 52000, 58000, 62000, 180000]

mean_val = statistics.mean(salaries)
median_val = statistics.median(salaries)
mode_val = statistics.mode(salaries)

print(f"Mean:   \${mean_val:,.2f} (Distorted by CEO outlier)")
print(f"Median: \${median_val:,.2f} (Robust central tendency)")
print(f"Mode:   \${mode_val:,.2f} (Most frequent)")`,
    stdoutExpected: 'Mean:   $74,833.33 (Distorted by CEO outlier)\nMedian: $55,000.00 (Robust central tendency)\nMode:   $52,000.00 (Most frequent)',
    explanationTitle: 'Central Tendency with the statistics Module',
    explanationText:
      'Python’s built-in statistics module provides exact statistical calculations: mean() computes the arithmetic average, median() finds the middle value (or average of two middle values for even lengths), and mode() returns the single most common data point.',
    complexityInfo: 'PCED 2.1.3 Central tendency calculations with statistics',
  },
  {
    id: 'pced-s2-fc-056',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'The statistics Module: Dispersion (variance, stdev)',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the difference between sample statistics (variance, stdev) and population statistics (pvariance, pstdev)?',
    codeSnippet: `import statistics

sample_readings = [10, 12, 14, 15, 18, 20]

# Sample standard deviation (Bessel's correction n - 1 in denominator)
s_dev = statistics.stdev(sample_readings)

# Population standard deviation (uses N in denominator)
p_dev = statistics.pstdev(sample_readings)

print(f"Sample stdev (n-1):     {s_dev:.4f}")
print(f"Population stdev (N):   {p_dev:.4f}")`,
    stdoutExpected: 'Sample stdev (n-1):     3.7238\nPopulation stdev (N):   3.3993',
    explanationTitle: 'Sample vs Population Dispersion',
    explanationText:
      'statistics.stdev() and variance() calculate sample dispersion using n-1 degrees of freedom (Bessel’s correction for unbiased sample estimation). statistics.pstdev() and pvariance() divide by N, assuming the dataset contains the entire population.',
    complexityInfo: 'PCED 2.1.3 Sample vs population dispersion & Bessel correction',
  },
  {
    id: 'pced-s2-fc-057',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'The random Module: Reproducibility with random.seed()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Why is setting random.seed() critical when splitting or sampling data for analysis?',
    codeSnippet: `import random

# Setting seed guarantees exact repeatability
random.seed(42)
sample_1 = [random.randint(1, 100) for _ in range(3)]

random.seed(42)
sample_2 = [random.randint(1, 100) for _ in range(3)]

print("Run 1:", sample_1)
print("Run 2:", sample_2)
print("Reproducible match:", sample_1 == sample_2)`,
    stdoutExpected: 'Run 1: [82, 15, 4]\nRun 2: [82, 15, 4]\nReproducible match: True',
    explanationTitle: 'Pseudo-Randomness and random.seed()',
    explanationText:
      'Computers generate pseudo-random numbers using deterministic algorithms. Calling random.seed(x) initializes the internal state to a fixed starting point, ensuring that random sampling, train/test splits, and simulations produce identical, reproducible results.',
    complexityInfo: 'PCED 2.1.3 Reproducibility & pseudo-random seeding',
  },
  {
    id: 'pced-s2-fc-058',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'Random Sampling: random.choice vs random.sample',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the difference between random.choice() and random.sample() in survey bootstrapping?',
    codeSnippet: `import random
random.seed(99)

population = ["User_1", "User_2", "User_3", "User_4", "User_5"]

# random.sample(seq, k): sampling WITHOUT replacement (all k items unique)
without_replacement = random.sample(population, 3)
print("Without replacement (sample):", without_replacement)

# random.choices(seq, k=n): sampling WITH replacement (duplicates allowed)
with_replacement = random.choices(population, k=3)
print("With replacement (choices):   ", with_replacement)`,
    stdoutExpected: "Without replacement (sample): ['User_1', 'User_5', 'User_3']\nWith replacement (choices):    ['User_1', 'User_1', 'User_2']",
    explanationTitle: 'Sampling With vs Without Replacement',
    explanationText:
      'random.sample(population, k) draws k unique elements without replacement (raising ValueError if k > len(population)). random.choices(population, k=n) draws n elements with replacement, allowing the same entity to be selected multiple times.',
    complexityInfo: 'PCED 2.1.3 Statistical sampling methods in random module',
  },
  {
    id: 'pced-s2-fc-059',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'Handling Exceptions: try, except, else, and finally',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How do the try, except, else, and finally blocks function together during data ingestion?',
    codeSnippet: `def parse_float_safe(val: str) -> str:
    try:
        parsed = float(val)
    except ValueError:
        return "HANDLED_ERROR: invalid number"
    else:
        # Executes ONLY if NO exception was raised in try
        return f"SUCCESS: {parsed * 2}"
    finally:
        # Executes ALWAYS, whether an exception occurred or not
        pass

print(parse_float_safe("50.5"))
print(parse_float_safe("corrupt_val"))`,
    stdoutExpected: 'SUCCESS: 101.0\nHANDLED_ERROR: invalid number',
    explanationTitle: 'The Complete try-except-else-finally Block',
    explanationText:
      'The "try" block holds hazardous code. The "except" block catches specific exceptions. The "else" block executes only if the try block ran without error. The "finally" block always executes, even if an unhandled exception or return statement occurred.',
    complexityInfo: 'PCED 2.1.4 Structured exception handling architecture',
  },
  {
    id: 'pced-s2-fc-060',
    track: 'pced',
    cardType: 'PCED 2.3 • Functions & Built-in Modules',
    topic: 'Catching Specific Built-in Exceptions',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What are the most common exceptions encountered in data pipelines (ValueError, TypeError, KeyError, IndexError)?',
    codeSnippet: `data_dict = {"age": 28}
data_list = [10, 20]

try:
    # 1. KeyError: accessing missing key
    val = data_dict["salary"]
except KeyError:
    print("Caught KeyError: missing column")

try:
    # 2. TypeError: invalid operand types
    res = "100" + 5
except TypeError:
    print("Caught TypeError: mismatched types")

try:
    # 3. IndexError: out of bounds
    item = data_list[5]
except IndexError:
    print("Caught IndexError: position out of range")`,
    stdoutExpected: 'Caught KeyError: missing column\nCaught TypeError: mismatched types\nCaught IndexError: position out of range',
    explanationTitle: 'Common Data Analysis Exceptions',
    explanationText:
      'Always catch specific exceptions rather than using a bare "except:". KeyError occurs when a dictionary key does not exist; TypeError occurs when an operation is applied to an incompatible data type; IndexError occurs when a sequence index is out of bounds.',
    complexityInfo: 'PCED 2.1.4 Targeted exception types in tabular parsing',
  },

  // =========================================================================
  // CHAPTER 2.4: SEQUENTIAL & SET STRUCTURES: LISTS, TUPLES & SETS (Cards 61 to 70)
  // =========================================================================
  {
    id: 'pced-s2-fc-061',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'List Mutation: append() vs extend()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the critical difference between list.append() and list.extend() when merging batch data?',
    codeSnippet: `list_a = [1, 2]
list_b = [1, 2]

new_items = [3, 4]

list_a.append(new_items)
list_b.extend(new_items)

print("append result: ", list_a)
print("extend result: ", list_b)`,
    stdoutExpected: 'append result:  [1, 2, [3, 4]]\nextend result:  [1, 2, 3, 4]',
    explanationTitle: 'append() vs extend()',
    explanationText:
      'append(obj) adds its argument as a single element to the end of the list, resulting in nested lists if obj is a list. extend(iterable) unpacks and appends each element of the iterable individually, flattening the addition.',
    complexityInfo: 'PCED 2.2.1 Sequence concatenation: append vs extend',
  },
  {
    id: 'pced-s2-fc-062',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'List Element Removal: pop(), remove(), and clear()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How do .remove(), .pop(), and .clear() delete elements from a Python list?',
    codeSnippet: `readings = [10, 999, 20, 30, 999]

# remove(val): removes FIRST occurrence of val by value
readings.remove(999)
print("After remove(999):", readings)

# pop(index): removes and RETURNS element at index (default: last)
popped_last = readings.pop()
print(f"Popped last item: {popped_last}, List now: {readings}")

# clear(): empties the list entirely
readings.clear()
print("After clear():", readings)`,
    stdoutExpected: 'After remove(999): [10, 20, 30, 999]\nPopped last item: 999, List now: [10, 20, 30]\nAfter clear(): []',
    explanationTitle: 'List Element Deletion Methods',
    explanationText:
      'remove(x) searches for the first item with value x and deletes it (raising ValueError if absent). pop([i]) removes and returns the item at position i (defaults to -1). clear() removes all elements, leaving an empty list [] in-place.',
    complexityInfo: 'PCED 2.2.1 In-place list item deletion methods',
  },
  {
    id: 'pced-s2-fc-063',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'In-Place .sort() vs Built-in sorted()',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Why does my_list.sort() return None, while sorted(my_list) returns a new sorted list?',
    codeSnippet: `raw_scores = [88, 42, 95, 12]

# sorted() returns a NEW sorted list, preserving original
new_sorted = sorted(raw_scores)
print("sorted() return: ", new_sorted)
print("Original list:   ", raw_scores)

# .sort() mutates the list IN PLACE and returns None
ret_val = raw_scores.sort()
print(".sort() return:  ", ret_val)
print("Original mutated:", raw_scores)`,
    stdoutExpected: 'sorted() return:  [12, 42, 88, 95]\nOriginal list:    [88, 42, 95, 12]\n.sort() return:   None\nOriginal mutated: [12, 42, 88, 95]',
    explanationTitle: 'list.sort() vs sorted()',
    explanationText:
      'list.sort() modifies the existing list in-place and returns None (by Python convention for in-place mutators). sorted(iterable) works on any iterable and constructs a new sorted list, leaving the original sequence unchanged.',
    complexityInfo: 'PCED 2.2.1 In-place list sorting vs non-destructive sorted()',
  },
  {
    id: 'pced-s2-fc-064',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'List Comprehensions with Filtering Conditions',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How do list comprehensions combine mapping and filtering syntax: [expr for item in seq if cond]?',
    codeSnippet: `measurements = [12.4, -999.0, 18.2, -999.0, 24.5, 30.1]

# Filter out missing sentinel values (-999.0) and convert to integer
cleaned_integers = [int(round(m)) for m in measurements if m != -999.0]
print("Cleaned integers:", cleaned_integers)`,
    stdoutExpected: 'Cleaned integers: [12, 18, 25, 30]',
    explanationTitle: 'List Comprehensions with if Condition',
    explanationText:
      'A list comprehension provides concise syntax: [output_expression for item in iterable if condition]. The "if" clause filters elements before the output expression is evaluated, providing a fast, Pythonic alternative to for loops.',
    complexityInfo: 'PCED 2.2.1 Filtering & transforming with list comprehensions',
  },
  {
    id: 'pced-s2-fc-065',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'List Comprehensions with if-else Ternary Mapping',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Where is the if-else placed in a list comprehension when replacing outliers or nulls rather than filtering them?',
    codeSnippet: `readings = [15.0, 200.0, 18.5, 350.0, 22.0]
ceiling = 100.0

# When using if-else, it sits BEFORE the 'for' as a ternary expression
winsorized = [r if r <= ceiling else ceiling for r in readings]
print("Winsorized (capped) data:", winsorized)`,
    stdoutExpected: 'Winsorized (capped) data: [15.0, 100.0, 18.5, 100.0, 22.0]',
    explanationTitle: 'Ternary Mapping in List Comprehensions',
    explanationText:
      'If you want to filter elements out of the list, place "if cond" at the end. If you want to transform elements based on a condition (retaining the same output length), place "[expr_true if cond else expr_false for x in seq]" before the for clause.',
    complexityInfo: 'PCED 2.2.1 Comprehension ternary mapping vs filtering placement',
  },
  {
    id: 'pced-s2-fc-066',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'Nested List Comprehensions for 2D Matrix Flattening',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the syntax order for flattening a 2D table using a nested list comprehension?',
    codeSnippet: `matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Order matches the standard for-loop nesting order:
flattened = [val for row in matrix for val in row]
print("Flattened array:", flattened)`,
    stdoutExpected: 'Flattened array: [1, 2, 3, 4, 5, 6, 7, 8, 9]',
    explanationTitle: 'Nested List Comprehensions',
    explanationText:
      'In nested list comprehensions, the "for" clauses appear in the exact same left-to-right order as standard nested for loops: "for row in matrix" followed by "for val in row".',
    complexityInfo: 'PCED 2.2.1 2D array flattening via nested comprehensions',
  },
  {
    id: 'pced-s2-fc-067',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'Tuple Immutability and Hashability',
    category: 'T2: Python Basics',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Why can a tuple be used as a dictionary key or set element, whereas a list cannot?',
    codeSnippet: `coord_tuple = (37.7749, -122.4194)
geo_lookup = {coord_tuple: "San Francisco"}
print("Lookup by tuple coordinate:", geo_lookup[coord_tuple])

try:
    coord_list = [37.7749, -122.4194]
    bad_dict = {coord_list: "Fails"}
except TypeError as e:
    print("List as key failed: TypeError unhashable type: 'list'")`,
    stdoutExpected: "Lookup by tuple coordinate: San Francisco\nList as key failed: TypeError unhashable type: 'list'",
    explanationTitle: 'Tuple Immutability & Hashability',
    explanationText:
      'Dictionary keys and set members must be hashable, which requires an immutable hash value across their lifetime. Because tuples containing immutable elements are immutable, they are hashable and can serve as composite dictionary keys (e.g. (lat, lon) coordinates).',
    complexityInfo: 'PCED 2.2.1 Hashability & tuples as composite dictionary keys',
  },
  {
    id: 'pced-s2-fc-068',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'Single-Element Tuples and Syntax Traps',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Why does single = (42) produce an int instead of a tuple, and what is the correct syntax?',
    codeSnippet: `not_a_tuple = (42)
is_a_tuple = (42,)  # The trailing comma defines the tuple!

print("type((42)): ", type(not_a_tuple).__name__)
print("type((42,)):", type(is_a_tuple).__name__)
print("Length of tuple:", len(is_a_tuple))`,
    stdoutExpected: 'type((42)):  int\ntype((42,)): tuple\nLength of tuple: 1',
    explanationTitle: 'Single-Element Tuple Syntax',
    explanationText:
      'In Python, parentheses alone do not create a tuple—they denote mathematical grouping. It is the comma that creates a tuple! A single-element tuple requires a trailing comma: (element,).',
    complexityInfo: 'PCED 2.2.1 Single-element tuple comma requirement',
  },
  {
    id: 'pced-s2-fc-069',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'Set Creation and Deduplication of Sequences',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How does passing a list to set() deduplicate customer IDs, and what happens to item ordering?',
    codeSnippet: `raw_user_ids = ["U101", "U102", "U101", "U103", "U102", "U104"]

unique_users = set(raw_user_ids)
print("Deduplicated count:", len(unique_users))
print("Is U101 present:   ", "U101" in unique_users)

# Deduplicate while preserving original appearance order:
ordered_unique = list(dict.fromkeys(raw_user_ids))
print("Order-preserved:   ", ordered_unique)`,
    stdoutExpected: "Deduplicated count: 4\nIs U101 present:    True\nOrder-preserved:    ['U101', 'U102', 'U103', 'U104']",
    explanationTitle: 'Set Deduplication and Ordering',
    explanationText:
      'A set is an unordered collection of distinct, hashable items. Converting a list to a set eliminates all duplicate entries in O(n) time. However, sets do not preserve sequence order; to deduplicate while preserving insertion order, use dict.fromkeys(seq).',
    complexityInfo: 'PCED 2.2.2 Fast set deduplication & insertion order nuances',
  },
  {
    id: 'pced-s2-fc-070',
    track: 'pced',
    cardType: 'PCED 2.4 • Lists, Tuples & Sets',
    topic: 'Empty Set Syntax Trap ({} vs set())',
    category: 'T2: Python Basics',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Why does empty_obj = {} instantiate a dictionary rather than a set?',
    codeSnippet: `empty_braces = {}
empty_set = set()

print("type({}):    ", type(empty_braces).__name__)
print("type(set()): ", type(empty_set).__name__)`,
    stdoutExpected: 'type({}):     dict\ntype(set()):  set',
    explanationTitle: 'Empty Set vs Empty Dictionary',
    explanationText:
      'In Python, empty curly braces {} create an empty dictionary (dict) because dictionaries predate sets in Python’s history. An empty set can only be initialized using the set() constructor.',
    complexityInfo: 'PCED 2.2.2 Empty set constructor vs dictionary literal',
  },
];
