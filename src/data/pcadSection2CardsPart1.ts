import { Flashcard } from '../types';

export const pcadSection2CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.1: PYTHON DATA STRUCTURES & ALGORITHMIC EFFICIENCY [Cards 1-20]
  // =========================================================================
  {
    id: 'pcad-sec2-001',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Data Structures',
    topic: 'Lists vs. Tuples: Mutability, Memory & Hashability',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'Why are tuples preferred over lists for storing immutable reference data (e.g. database connection parameters, GPS coordinates) in data pipelines?',
    codeSnippet: `import sys

lst = [40.7128, -74.0060]
tup = (40.7128, -74.0060)

# Memory & Hashability comparison:
print(sys.getsizeof(lst) > sys.getsizeof(tup)) # True (lists allocate over-allocation buffers)
coord_dict = {tup: "New York"}                # Valid (tuple is hashable)`,
    options: [
      'Tuples are immutable, consume less memory, prevent accidental in-place modification, and can be used as dictionary keys or set members because they are hashable',
      'Tuples can only store strings; lists can only store numbers',
      'Tuples are executed on the GPU, whereas lists are executed on the CPU',
      'Lists cannot be sorted; tuples can be sorted in place'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Tuples are immutable, consume less memory, prevent accidental in-place modification, and can be used as dictionary keys or set members because they are hashable',
    explanationTitle: 'Tuple Immutability, Memory Efficiency & Hashability',
    explanationText:
      'Tuples are fixed-size immutable sequences. Python optimizes their memory allocation (no over-allocation buffer for dynamic resizing). Because they cannot be altered after creation, tuples containing only hashable elements have a fixed hash value and serve as valid dictionary keys.',
    deepDive:
      'Attempting to use a mutable list as a dictionary key or set element raises `TypeError: unhashable type: "list"`.',
    tags: ['Tuples', 'Lists', 'Immutability', 'Memory', 'Hashable', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-002',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Data Structures',
    topic: 'Set Operations for Audience Overlap Analysis',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How do you find customers who purchased Product A OR Product B, but NOT both products simultaneously, using Python set operators?',
    codeSnippet: `buyers_A = {'alice', 'bob', 'charlie', 'david'}
buyers_B = {'charlie', 'david', 'emma', 'frank'}

# Find symmetric difference:
exclusive_buyers = buyers_A ^ buyers_B # or buyers_A.symmetric_difference(buyers_B)
print(exclusive_buyers) # {'alice', 'bob', 'emma', 'frank'}`,
    options: [
      'buyers_A ^ buyers_B (Symmetric Difference)',
      'buyers_A & buyers_B (Intersection)',
      'buyers_A | buyers_B (Union)',
      'buyers_A - buyers_B (Difference)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'buyers_A ^ buyers_B (Symmetric Difference)',
    explanationTitle: 'Set Theory Operators in Python',
    explanationText:
      'Python sets implement mathematical set operations: `|` (Union - all members in either), `&` (Intersection - members in both), `-` (Difference - members in A but not B), and `^` (Symmetric Difference - members in exactly one set, but not both).',
    deepDive:
      'Set membership testing (`val in my_set`) operates in $O(1)$ average time, compared to $O(N)$ for lists.',
    tags: ['Sets', 'Symmetric Difference', 'Set Theory', 'Python', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-003',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Algorithmic Efficiency',
    topic: 'Dictionary Hash Map Lookup: O(1) vs. List Scanning O(N)',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'When looking up 100,000 transaction IDs against a blacklist containing 1,000,000 IDs, why is searching a `set` or `dict` thousands of times faster than searching a `list`?',
    codeSnippet: `# Searching in a list (O(N) linear search):
# if trans_id in blacklist_list: ... # Must scan up to 1,000,000 items per lookup!

# Searching in a set/dict (O(1) hash table lookup):
# if trans_id in blacklist_set: ... # Directly computes hash bucket index in constant time!`,
    options: [
      'Sets and dicts use hash tables where key lookup is O(1) average constant time; lists require an O(N) linear scan through elements from start to finish',
      'Lists require hard drive reads, while dicts reside in CPU L1 cache',
      'Python executes list lookups on a single thread and set lookups on 64 threads',
      'Sets convert all elements into binary integers automatically'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Sets and dicts use hash tables where key lookup is O(1) average constant time; lists require an O(N) linear scan through elements from start to finish',
    explanationTitle: 'Hash Table Lookups vs. Linear Scans',
    explanationText:
      'Searching an item in a list of size $N$ requires scanning $N/2$ elements on average ($O(N)$). For 100,000 lookups against 1,000,000 items, a list performs $\approx 10^{11}$ operations (minutes/hours), whereas a hash table performs $\approx 10^5$ constant-time bucket lookups ($O(1)$), finishing in milliseconds.',
    deepDive:
      'Hash collisions are resolved in Python using open addressing with quadratic probing, maintaining near-perfect $O(1)$ average performance.',
    tags: ['Big-O', 'Hash Tables', 'dict', 'set', 'Performance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-004',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Data Structures',
    topic: 'Dictionary Unpacking & Merging in Python 3.9+',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'In modern Python (3.9+), what is the cleanest syntax to merge two configuration dictionaries `defaults` and `user_overrides`, giving precedence to user overrides?',
    codeSnippet: `defaults = {'timeout': 30, 'retries': 3, 'env': 'prod'}
user_overrides = {'timeout': 60, 'retries': 5}

# Merge with precedence to the right-hand operand:
config = defaults | user_overrides
print(config['timeout']) # 60`,
    options: [
      'config = defaults | user_overrides (or the in-place update operator defaults |= user_overrides)',
      'config = defaults + user_overrides',
      'config = defaults.append(user_overrides)',
      'config = dict.merge(defaults, user_overrides)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'config = defaults | user_overrides (or the in-place update operator defaults |= user_overrides)',
    explanationTitle: 'Dictionary Merge (|) and Update (|=) Operators',
    explanationText:
      'PEP 584 introduced the union operator `|` for dictionaries in Python 3.9. When keys overlap, the right-hand dictionary takes precedence. Prior to Python 3.9, `{**defaults, **user_overrides}` was the standard idiom.',
    deepDive:
      'The in-place operator `defaults |= user_overrides` updates `defaults` in place without creating an intermediate dictionary object.',
    tags: ['dict', 'Union Operator', 'PEP 584', 'Python 3.9', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-005',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Collections Module',
    topic: 'Grouping Records with collections.defaultdict',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How does `collections.defaultdict(list)` eliminate explicit `if key not in d:` initialization checks when grouping data?',
    codeSnippet: `from collections import defaultdict

transactions = [
    ('Electronics', 120.0), ('Groceries', 45.0), ('Electronics', 80.0)
]

grouped = defaultdict(list)
for category, amount in transactions:
    grouped[category].append(amount)

print(dict(grouped))
# {'Electronics': [120.0, 80.0], 'Groceries': [45.0]}`,
    options: [
      'When an unseen key is accessed, defaultdict automatically calls the provided default factory callable (list) to create a new empty list without raising a KeyError',
      'It sorts all keys in alphabetical order before appending',
      'It converts the dictionary into an SQL table',
      'It limits each category to exactly one item'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'When an unseen key is accessed, defaultdict automatically calls the provided default factory callable (list) to create a new empty list without raising a KeyError',
    explanationTitle: 'Group-By Pipelines with defaultdict',
    explanationText:
      'Standard Python dictionaries raise `KeyError` when accessing a missing key. `defaultdict(factory)` calls `default_factory()` when a missing key is encountered. Using `defaultdict(int)` enables instant counters (`d[key] += 1`); using `defaultdict(list)` enables seamless grouping.',
    deepDive:
      'Under the hood, `defaultdict` overrides the special method `__missing__(key)`, which is invoked by `__getitem__` whenever a key is not found.',
    tags: ['defaultdict', 'collections', 'Grouping', 'Clean Code', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-006',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Collections Module',
    topic: 'Frequency Tallies with collections.Counter',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How do you extract the top 3 most frequently occurring product categories from a stream of 100,000 orders using `collections.Counter`?',
    codeSnippet: `from collections import Counter

orders = ['Shoes', 'Shirt', 'Shoes', 'Hat', 'Shoes', 'Shirt', 'Watch']
counts = Counter(orders)

# Extract top 3 most frequent categories:
top_3 = counts.most_common(3)
print(top_3) # [('Shoes', 3), ('Shirt', 2), ('Hat', 1)]`,
    options: [
      'Call Counter(orders).most_common(3), which returns a list of (item, count) tuples sorted in descending order of frequency',
      'Call Counter(orders).top(3)',
      'Call sorted(orders)[:3]',
      'Call max(orders, count=3)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Call Counter(orders).most_common(3), which returns a list of (item, count) tuples sorted in descending order of frequency',
    explanationTitle: 'Frequency Analysis with Counter.most_common()',
    explanationText:
      '`Counter` is a dictionary subclass designed for counting hashable objects. `counts.most_common(k)` uses a heap under the hood (`heapq.nlargest`) to return the $k$ most common elements in $O(N \log k)$ time.',
    deepDive:
      'Counters can be combined using arithmetic: `c1 + c2` sums counts, `c1 - c2` subtracts counts (keeping only positive counts), and `c1 & c2` returns the minimum of shared keys.',
    tags: ['Counter', 'collections', 'most_common', 'Frequency', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-007',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Data Structures',
    topic: 'Memory-Efficient Records with namedtuple',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Why are `namedtuple` objects superior to dictionaries when holding millions of uniform data records (e.g. coordinates or table rows)?',
    codeSnippet: `from collections import namedtuple
import sys

Point = namedtuple('Point', ['x', 'y', 'z'])
p_named = Point(10.0, 20.0, 30.0)
p_dict = {'x': 10.0, 'y': 20.0, 'z': 30.0}

print(sys.getsizeof(p_dict) > sys.getsizeof(p_named)) # True!
print(p_named.x) # Named field access like an object`,
    options: [
      'namedtuples provide named attribute access like objects with zero per-instance dictionary overhead (__dict__), slashing memory footprint by 60–75% across millions of records',
      'namedtuples run on the GPU',
      'namedtuples can only hold strings',
      'Dictionaries cannot be indexed by keys'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'namedtuples provide named attribute access like objects with zero per-instance dictionary overhead (__dict__), slashing memory footprint by 60–75% across millions of records',
    explanationTitle: 'Memory Efficiency of namedtuple Records',
    explanationText:
      'Standard Python objects and dictionaries store attributes in a dynamic per-instance `__dict__` hash table, which has substantial memory overhead. A `namedtuple` inherits from `tuple`, storing values in a compact C-struct array while allowing dot-notation field access (`p.x`).',
    deepDive:
      'Modern Python also provides `typing.NamedTuple`, which supports type hints: `class Point(NamedTuple): x: float; y: float; z: float`.',
    tags: ['namedtuple', 'collections', 'Memory', 'Data Records', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-008',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Comprehensions',
    topic: 'List Comprehensions with Filtering Conditions',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'What is the syntax for a list comprehension that extracts the uppercase product names for products with sales greater than 100?',
    codeSnippet: `products = [
    {'name': 'laptop', 'sales': 150},
    {'name': 'mouse', 'sales': 45},
    {'name': 'keyboard', 'sales': 210}
]

# Extract uppercase names of high-selling products:
high_sellers = [p['name'].upper() for p in products if p['sales'] > 100]
print(high_sellers) # ['LAPTOP', 'KEYBOARD']`,
    options: [
      '[p["name"].upper() for p in products if p["sales"] > 100]',
      '[if p["sales"] > 100: p["name"].upper() for p in products]',
      '[p["name"].upper() if p["sales"] > 100 for p in products]',
      'products.filter(lambda p: p["sales"] > 100).map(upper)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '[p["name"].upper() for p in products if p["sales"] > 100]',
    explanationTitle: 'List Comprehension Filtering Syntax',
    explanationText:
      'In a list comprehension, the filtering `if` clause appears at the very end of the expression: `[expression for item in iterable if condition]`. It evaluates each item and includes only those where the condition evaluates to `True`.',
    deepDive:
      'If you need an `if-else` ternary transform (mapping), it appears before the `for`: `[p["name"] if p["sales"] > 100 else "LOW" for p in products]`.',
    tags: ['List Comprehension', 'Filtering', 'Python Syntax', 'Clean Code', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-009',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Comprehensions',
    topic: 'Dictionary Comprehensions for Data Inversion',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How do you invert a unique code-to-country lookup dictionary (swapping keys and values) using a dictionary comprehension?',
    codeSnippet: `code_to_country = {'US': 'United States', 'CA': 'Canada', 'FR': 'France'}

# Invert dictionary:
country_to_code = {country: code for code, country in code_to_country.items()}
print(country_to_code['Canada']) # 'CA'`,
    options: [
      '{country: code for code, country in code_to_country.items()}',
      'code_to_country.invert()',
      '{k: v for v, k in code_to_country}',
      'dict(reversed(code_to_country))'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '{country: code for code, country in code_to_country.items()}',
    explanationTitle: 'Dictionary Inversion via Dict Comprehension',
    explanationText:
      'Iterating through `.items()` yields `(key, value)` tuples. By placing `{value: key for key, value in dict.items()}`, you create an inverted mapping. This assumes original values are unique and hashable.',
    deepDive:
      'If values are non-unique, later keys will overwrite earlier keys. To preserve all keys for duplicate values, use a `defaultdict(list)` instead.',
    tags: ['dict comprehension', 'Inversion', 'items', 'Data Structures', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-010',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Comprehensions',
    topic: 'Flattening 2D Matrices with Nested Comprehensions',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Which nested list comprehension correctly flattens a 2D matrix (list of lists) `matrix = [[1, 2], [3, 4], [5, 6]]` into a 1D list `[1, 2, 3, 4, 5, 6]`?',
    codeSnippet: `matrix = [[1, 2], [3, 4], [5, 6]]

# Flatten 2D matrix to 1D list:
flat = [num for row in matrix for num in row]
print(flat) # [1, 2, 3, 4, 5, 6]`,
    options: [
      '[num for row in matrix for num in row]',
      '[num for num in row for row in matrix]',
      '[num in row for row in matrix]',
      'matrix.flatten()'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '[num for row in matrix for num in row]',
    explanationTitle: 'Nested Comprehension Order of Execution',
    explanationText:
      'Nested comprehensions follow the exact same order as traditional nested `for` loops. The outer loop comes first (`for row in matrix`), followed by the inner loop (`for num in row`), with the emitted item at the beginning (`num`).',
    deepDive:
      'Alternatively, `itertools.chain.from_iterable(matrix)` flattens iterables with optimal C-level iterator efficiency.',
    tags: ['Nested Comprehension', 'Flattening', 'Matrices', 'Python', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-011',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Generators',
    topic: 'Generator Expressions: Lazy Evaluation vs. List Materialization',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Why does calculating `sum(x**2 for x in range(100_000_000))` consume near-zero memory, whereas `sum([x**2 for x in range(100_000_000)])` crashes with `MemoryError`?',
    codeSnippet: `import sys

# Generator expression (round parentheses):
gen = (x**2 for x in range(100_000_000))
print(sys.getsizeof(gen)) # ~112 bytes (fixed constant memory!)

# List comprehension (square brackets):
# lst = [x**2 for x in range(100_000_000)] # Allocates gigabytes of RAM!`,
    options: [
      'The generator expression evaluates lazily on demand, computing one value at a time and discarding it after aggregation; the list comprehension eagerly materializes all 100 million numbers simultaneously into RAM',
      'The generator expression uses GPU hardware memory',
      'The sum function runs in parallel only when using round parentheses',
      'range(100_000_000) is only supported in generator expressions'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The generator expression evaluates lazily on demand, computing one value at a time and discarding it after aggregation; the list comprehension eagerly materializes all 100 million numbers simultaneously into RAM',
    explanationTitle: 'Lazy Evaluation via Generator Expressions',
    explanationText:
      'Generator expressions use round parentheses `(...)` and implement the iterator protocol. They do not store values in memory; they calculate the next item only when `.next()` is requested by consumer functions like `sum()`, `min()`, or `for` loops.',
    deepDive:
      'When a generator expression is the sole argument to a function, the outer enclosing parentheses can be omitted: `sum(x**2 for x in data)`.',
    tags: ['Generators', 'Lazy Evaluation', 'Memory Management', 'Performance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-012',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Generators',
    topic: 'Streaming Large Datasets with the yield Keyword',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How does a Python generator function using `yield` process a multi-gigabyte log file without loading the entire file into memory?',
    codeSnippet: `def stream_error_logs(filepath):
    with open(filepath, 'r') as f:
        for line in f:
            if 'ERROR' in line:
                yield line.strip() # Pauses and returns line to caller

# Consumer:
for error_entry in stream_error_logs('large_system.log'):
    print(error_entry)`,
    options: [
      'yield suspends function execution, returns the current value, and preserves local state; execution resumes immediately after yield on the next iteration',
      'yield permanently terminates the function like return',
      'yield writes the line to a temporary SQLite database on disk',
      'yield converts the text file into an MP3 audio stream'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'yield suspends function execution, returns the current value, and preserves local state; execution resumes immediately after yield on the next iteration',
    explanationTitle: 'Stateful Streaming via the yield Keyword',
    explanationText:
      'A function containing `yield` becomes a generator factory. Calling it returns a generator object without executing function code. When iterated, it runs until reaching `yield`, emits the value, freezes its state, and resumes upon the next call.',
    deepDive:
      'Generators can also receive data dynamically from callers using the `.send(value)` method, forming coroutine processing pipelines.',
    tags: ['yield', 'Generators', 'Streaming', 'File I/O', 'Memory', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-013',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Algorithmic Complexity',
    topic: 'Big-O Time Complexity Hierarchy',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Rank the following common computational complexities from fastest to slowest as input size $N$ scales towards infinity:',
    codeSnippet: `# Algorithm Complexities:
# A: O(N log N) - Efficient sorting (Timsort / Merge sort)
# B: O(1)        - Hash map key lookup
# C: O(N^2)      - Nested loop pairwise comparison
# D: O(N)        - Single-pass linear scan`,
    options: [
      'O(1) < O(log N) < O(N) < O(N log N) < O(N^2) < O(2^N)',
      'O(N^2) < O(N log N) < O(N) < O(log N) < O(1)',
      'O(1) < O(N^2) < O(N) < O(N log N)',
      'O(log N) < O(1) < O(N) < O(N^2)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'O(1) < O(log N) < O(N) < O(N log N) < O(N^2) < O(2^N)',
    explanationTitle: 'Big-O Complexity Asymptotic Order',
    explanationText:
      'Constant time $O(1)$ is fastest. Logarithmic $O(\log N)$ (binary search) grows minimally. Linear $O(N)$ scales proportionally. Linearithmic $O(N \log N)$ is standard for sorting. Quadratic $O(N^2)$ (nested loops) becomes bottlenecked on big data.',
    deepDive:
      'Replacing an $O(N^2)$ nested loop join with an $O(N)$ dictionary-based hash join is one of the most common performance optimizations in data analytics.',
    tags: ['Big-O', 'Complexity', 'Algorithms', 'Performance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-014',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Algorithmic Complexity',
    topic: 'Space Complexity & Recursion Depth Limits',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Why does calculating factorial using deep recursion (`factorial(50000)`) fail in Python with `RecursionError: maximum recursion depth exceeded`?',
    codeSnippet: `def rec_factorial(n):
    if n <= 1:
        return 1
    return n * rec_factorial(n - 1)

# rec_factorial(50000) # RecursionError!`,
    options: [
      'Each recursive function call allocates a new stack frame in memory (O(N) space complexity); Python enforces a recursion limit (default 1000) to prevent C-stack overflow crashes',
      'Python does not support multiplying numbers larger than 1,000',
      'Recursion is only supported in C++, not Python',
      'The CPU overheating protection kicks in'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Each recursive function call allocates a new stack frame in memory (O(N) space complexity); Python enforces a recursion limit (default 1000) to prevent C-stack overflow crashes',
    explanationTitle: 'Call Stack Frames and Recursion Limits',
    explanationText:
      'Unlike languages with Tail Call Optimization (TCO), Python does NOT optimize tail-recursive calls. Every call pushes a frame containing local variables onto the call stack. Iterative loops ($O(1)$ auxiliary space) should be used instead of deep recursion.',
    deepDive:
      'You can inspect or alter the limit via `sys.getrecursionlimit()` and `sys.setrecursionlimit()`, but increasing it risks segmentation faults.',
    tags: ['Recursion', 'Call Stack', 'Space Complexity', 'RecursionError', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-015',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Sorting Algorithms',
    topic: 'Custom Multi-Key Sorting with sorted(key=lambda)',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How do you sort a list of employee dictionaries by `department` ascending, and then by `salary` descending within each department?',
    codeSnippet: `employees = [
    {'name': 'Alice', 'dept': 'Sales', 'salary': 85000},
    {'name': 'Bob',   'dept': 'Sales', 'salary': 95000},
    {'name': 'Carol', 'dept': 'Eng',   'salary': 120000}
]

# Sort by dept ascending, salary descending:
sorted_emps = sorted(
    employees, key=lambda e: (e['dept'], -e['salary'])
)`,
    options: [
      'Pass key=lambda e: (e["dept"], -e["salary"]) to sorted(), utilizing a tuple where numeric negation (-salary) reverses sorting order for that specific key',
      'Call employees.sort("dept", "salary:desc")',
      'sorted(employees, reverse=[False, True])',
      'Call employees.order_by("dept", ascending=True).then_by("salary", ascending=False)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pass key=lambda e: (e["dept"], -e["salary"]) to sorted(), utilizing a tuple where numeric negation (-salary) reverses sorting order for that specific key',
    explanationTitle: 'Multi-Key Sorting via Tuples in Python',
    explanationText:
      'Python compares tuples element-by-element (`tuple[0]`, then `tuple[1]`). By returning `(e["dept"], -e["salary"])`, strings are sorted alphabetically ascending, and numerical salaries are inverted by negation to sort descending.',
    deepDive:
      'Python’s sorting algorithm is Timsort, which is stable (guaranteeing that equal elements retain their original relative input order).',
    tags: ['sorted', 'lambda', 'Multi-Key Sorting', 'Timsort', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-016',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Itertools Module',
    topic: 'High-Performance Iteration with itertools',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Which `itertools` function generates all possible pairwise combinations of 2 items from a list of 5 features without replacement and without regard to order?',
    codeSnippet: `import itertools

features = ['age', 'income', 'credit_score', 'debt', 'assets']

# Generate all unique 2-feature pairs:
feature_pairs = list(itertools.combinations(features, 2))
print(len(feature_pairs)) # 5! / (2! * 3!) = 10 pairs`,
    options: [
      'itertools.combinations(features, 2)',
      'itertools.permutations(features, 2)',
      'itertools.product(features, repeat=2)',
      'itertools.pairwise(features)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'itertools.combinations(features, 2)',
    explanationTitle: 'itertools Combinatorics: combinations vs. permutations',
    explanationText:
      '`itertools.combinations(iterable, r)` emits $r$-length tuples in sorted order with no repeated elements and where order does not matter (`("age", "income")` is the same as `("income", "age")`). In contrast, `permutations` considers ordering distinct.',
    deepDive:
      '`itertools.product(*iterables)` computes the Cartesian product, equivalent to nested `for` loops.',
    tags: ['itertools', 'combinations', 'permutations', 'Feature Engineering', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-017',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Functional Programming',
    topic: 'Cumulative Reductions with functools.reduce',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How does `functools.reduce(lambda acc, x: acc * x, [1, 2, 3, 4], 1)` compute the cumulative product across an iterable?',
    codeSnippet: `from functools import reduce

numbers = [1, 2, 3, 4]
# Cumulative product: ((1*1) * 2) * 3) * 4 = 24
product = reduce(lambda acc, x: acc * x, numbers, 1)
print(product) # 24`,
    options: [
      'It applies a binary function cumulatively to items, carrying the accumulated result forward from left to right, initialized by the optional third parameter',
      'It splits the list into halves and multiplies them concurrently',
      'It reduces the memory footprint of the list by 50%',
      'It removes duplicate numbers from the list'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It applies a binary function cumulatively to items, carrying the accumulated result forward from left to right, initialized by the optional third parameter',
    explanationTitle: 'Cumulative Reduction Mechanics',
    explanationText:
      '`reduce(function, sequence, initial)` successively applies the function to the accumulator and next element. In data processing, `reduce` is the foundational concept behind MapReduce aggregations.',
    deepDive:
      'For cumulative sequences (emitting intermediate results), use `itertools.accumulate(numbers, operator.mul)`.',
    tags: ['functools', 'reduce', 'Functional Programming', 'Aggregations', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-018',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Python Syntax',
    topic: 'Extended Iterable Unpacking with Starred Expressions',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'Given a time-series record `[date, val1, val2, val3, val4, status]`, how do you extract the `date`, the list of all intermediate `values`, and the final `status` using extended unpacking?',
    codeSnippet: `record = ['2026-10-12', 14.5, 18.2, 19.1, 16.0, 'VALIDATED']

# Extended iterable unpacking:
date, *values, status = record

print(date)    # '2026-10-12'
print(values)  # [14.5, 18.2, 19.1, 16.0]
print(status)  # 'VALIDATED'`,
    options: [
      'date, *values, status = record (PEP 3132 starred unpacking captures intermediate items into a list)',
      'date, values[], status = record',
      'date, &values, status = record',
      'record.unpack("date", "values*", "status")'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'date, *values, status = record (PEP 3132 starred unpacking captures intermediate items into a list)',
    explanationTitle: 'Extended Starred Unpacking (PEP 3132)',
    explanationText:
      'A starred target `*variable` captures all elements not assigned to preceding or succeeding variable targets, collecting them into a list. Only one starred expression is allowed in an assignment.',
    deepDive:
      'If there are no remaining items for the starred variable, it evaluates to an empty list `[]` without raising an error.',
    tags: ['Unpacking', 'Starred Expressions', 'PEP 3132', 'Python Syntax', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-019',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Memory Models',
    topic: 'Shallow Copy vs. Deep Copy on Nested Structures',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Why does modifying `b[0]["score"] = 99` alter `a[0]["score"]` when `b = a.copy()` is used on a nested list of dictionaries?',
    codeSnippet: `import copy

a = [{'score': 10}, {'score': 20}]
b = a.copy() # Shallow copy!
b[0]['score'] = 99
print(a[0]['score']) # 99! (Mutated!)

# Safe independent clone:
c = copy.deepcopy(a)
c[0]['score'] = 50
print(a[0]['score']) # 99 (Unaffected)`,
    options: [
      'A shallow copy creates a new outer container but inserts references to the exact same inner dictionary objects; copy.deepcopy() recursively copies all child objects independently',
      'Because Python dictionaries are immutable',
      'Because copy() is deprecated in Python 3',
      'Lists of dictionaries cannot be copied in Python'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A shallow copy creates a new outer container but inserts references to the exact same inner dictionary objects; copy.deepcopy() recursively copies all child objects independently',
    explanationTitle: 'Shallow vs. Deep Copy Memory References',
    explanationText:
      '`a.copy()` or `list(a)` is a shallow copy. The outer list is duplicated, but its elements are pointers to the original heap dictionaries. `copy.deepcopy()` traverses the object graph recursively, generating independent clones of all nested containers.',
    deepDive:
      'In pandas, `df.copy(deep=True)` creates a full copy of the underlying NumPy data buffers as well as index labels.',
    tags: ['copy', 'deepcopy', 'Mutability', 'Memory References', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-020',
    section: 'Section 2',
    chapter: '2.1',
    track: 'pcad',
    cardType: 'Performance Profiling',
    topic: 'Benchmarking Execution Time with timeit',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How do you accurately measure the execution time of a code snippet across 1,000 runs using Python’s built-in `timeit` module?',
    codeSnippet: `import timeit

# Benchmark list comprehension vs map:
setup = "data = list(range(1000))"
stmt = "[x * 2 for x in data]"

elapsed = timeit.timeit(stmt=stmt, setup=setup, number=1000)
print(f"Total execution time: {elapsed:.4f} seconds")`,
    options: [
      'timeit.timeit(stmt=stmt, setup=setup, number=1000) executes setup once, disables garbage collection fluctuations, and runs stmt 1,000 times to return total elapsed seconds',
      'time.time() inside a 1000-iteration while loop',
      'cProfile.run("1000")',
      'timeit.benchmark(code, runs=1000)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'timeit.timeit(stmt=stmt, setup=setup, number=1000) executes setup once, disables garbage collection fluctuations, and runs stmt 1,000 times to return total elapsed seconds',
    explanationTitle: 'Accurate Benchmarking with timeit',
    explanationText:
      'Using `time.time()` for micro-benchmarks is unreliable due to background OS context switching and garbage collection pauses. `timeit` isolates the statement, runs it thousands of times, and provides statistically sound execution metrics.',
    deepDive:
      'In Jupyter / IPython environments, use the magic commands `%timeit` (for single lines) and `%%timeit` (for full cells).',
    tags: ['timeit', 'Benchmarking', 'Profiling', 'Optimization', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 2.2: FUNCTIONS, OOP & EXCEPTION HANDLING [Cards 21-35]
  // =========================================================================
  {
    id: 'pcad-sec2-021',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Function Signatures',
    topic: 'Positional-Only (/) and Keyword-Only (*) Parameters',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'In the function signature `def process_data(data, /, threshold=0.5, *, engine="c"):`, what constraints do `/` and `*` enforce?',
    codeSnippet: `def process_data(data, /, threshold=0.5, *, engine="c"):
    pass

# Valid call:
process_data([1, 2, 3], 0.8, engine="python")

# Invalid call (raises TypeError):
# process_data(data=[1, 2, 3])  # Error: 'data' is positional-only!
# process_data([1, 2, 3], 0.8, "python") # Error: 'engine' is keyword-only!`,
    options: [
      'Parameters before / must be passed positionally; parameters between / and * can be positional or keyword; parameters after * must be passed as keyword arguments',
      '/ divides arguments; * multiplies arguments',
      '/ indicates optional arguments; * indicates required arguments',
      'It is invalid Python syntax'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Parameters before / must be passed positionally; parameters between / and * can be positional or keyword; parameters after * must be passed as keyword arguments',
    explanationTitle: 'Positional-Only and Keyword-Only Parameters',
    explanationText:
      'Introduced in PEP 570 (Python 3.8), `/` enforces positional-only calling (protecting API authors from callers coupling to internal parameter names). `*` enforces keyword-only calling, ensuring critical configuration flags are explicitly named at call sites.',
    deepDive:
      'Built-in C functions (like `len()`, `abs()`) are positional-only: `len([1, 2])` works, but `len(obj=[1, 2])` raises `TypeError`.',
    tags: ['Function Signatures', 'PEP 570', 'Positional-Only', 'Keyword-Only', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-022',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Functions',
    topic: 'Arbitrary Arguments: *args and **kwargs Forwarding',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How do `*args` and `**kwargs` receive variable numbers of arguments inside a function definition, and how are they structured?',
    codeSnippet: `def custom_logger(*args, **kwargs):
    print(type(args))   # <class 'tuple'>
    print(type(kwargs)) # <class 'dict'>

custom_logger("File saved", 200, user="admin", status="OK")`,
    options: [
      '*args packs arbitrary positional arguments into a tuple; **kwargs packs arbitrary keyword arguments into a dictionary',
      '*args is a list; **kwargs is a set',
      '*args must contain integers; **kwargs must contain strings',
      '*args and **kwargs are reserved for GPU functions'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '*args packs arbitrary positional arguments into a tuple; **kwargs packs arbitrary keyword arguments into a dictionary',
    explanationTitle: 'Variable Argument Packing via *args and **kwargs',
    explanationText:
      'The single asterisk `*` gathers excess positional arguments into an immutable `tuple`. The double asterisk `**` gathers excess keyword arguments into a standard mutable `dict`. They are essential for writing flexible wrappers and decorators.',
    deepDive:
      'When forwarding arguments to another function, unpack them using the same syntax: `target_func(*args, **kwargs)`.',
    tags: ['*args', '**kwargs', 'Functions', 'Unpacking', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-023',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Variable Scope',
    topic: 'LEGB Scope Rule & global / nonlocal Keywords',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'What is Python’s LEGB variable resolution order, and which keyword allows a nested function to modify a variable in its enclosing (outer) scope?',
    codeSnippet: `def outer():
    count = 0
    def inner():
        nonlocal count # Target enclosing scope variable
        count += 1
        return count
    return inner

counter = outer()
print(counter()) # 1
print(counter()) # 2`,
    options: [
      'LEGB: Local -> Enclosing -> Global -> Built-in; the nonlocal keyword binds to variables in the nearest enclosing non-global scope',
      'LEGB: Linear -> Elastic -> Graphic -> Binary; the global keyword binds to enclosing scopes',
      'LEGB: List -> Element -> Group -> Block; the outer keyword binds to local scopes',
      'Python searches Global scope before searching Local scope'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'LEGB: Local -> Enclosing -> Global -> Built-in; the nonlocal keyword binds to variables in the nearest enclosing non-global scope',
    explanationTitle: 'LEGB Scope Hierarchy and nonlocal',
    explanationText:
      'Python looks for names first in Local scope, then Enclosing closures, then module Global scope, then Built-in scope. Without `nonlocal`, attempting `count += 1` in an inner function raises `UnboundLocalError` because Python treats assignments as local variable creations.',
    deepDive:
      'Use `global` to bind module-level variables; use `nonlocal` to bind enclosing function variables inside closures.',
    tags: ['LEGB', 'Scope', 'nonlocal', 'global', 'Closures', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-024',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Functional Programming',
    topic: 'Higher-Order Functions: map(), filter(), and lambda',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How do `map()` and `filter()` process an iterable, and what type of object do they return in Python 3?',
    codeSnippet: `nums = [1, 2, 3, 4, 5, 6]

# Filter evens, then square them:
evens = filter(lambda x: x % 2 == 0, nums)
squared_evens = map(lambda x: x**2, evens)

print(type(squared_evens)) # <class 'map'> (an iterator!)
print(list(squared_evens)) # [4, 16, 36]`,
    options: [
      'They return lazy iterator objects (map and filter iterators) that evaluate items on demand without materializing a full list in memory',
      'They return pandas Series objects',
      'They return lists immediately',
      'They execute asynchronously in separate CPU threads'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'They return lazy iterator objects (map and filter iterators) that evaluate items on demand without materializing a full list in memory',
    explanationTitle: 'Lazy Iterators: map() and filter()',
    explanationText:
      'In Python 3, `map()` and `filter()` do not construct lists; they return lazy iterators consuming $O(1)$ memory. To materialize all results into RAM, wrap them in `list()` or consume them in a `for` loop.',
    deepDive:
      'In modern Python, list comprehensions (`[x**2 for x in nums if x % 2 == 0]`) are generally preferred over `map(lambda ...)` for readability.',
    tags: ['map', 'filter', 'lambda', 'Iterators', 'Functional', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-025',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Decorators',
    topic: 'Function Decorators & Caching with @lru_cache',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How does `@functools.lru_cache(maxsize=128)` optimize expensive, repetitive analytical functions (e.g. dynamic programming or API lookups)?',
    codeSnippet: `from functools import lru_cache

@lru_cache(maxsize=128)
def fetch_user_metadata(user_id):
    # Simulate heavy DB query or API call:
    return query_database(user_id)`,
    options: [
      'It wraps the function with a memoizing decorator that caches return values based on input arguments; repeat calls with identical arguments return cached results instantly in O(1) time',
      'It saves function return values to a permanent SQLite database on disk',
      'It restricts function execution to at most 128 milliseconds',
      'It limits function inputs to integers below 128'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It wraps the function with a memoizing decorator that caches return values based on input arguments; repeat calls with identical arguments return cached results instantly in O(1) time',
    explanationTitle: 'Memoization with @lru_cache',
    explanationText:
      'Least Recently Used (LRU) caching stores up to `maxsize` results. When the cache fills, the least recently accessed entry is discarded. This turns exponential dynamic programming algorithms (like Fibonacci) into linear time $O(N)$.',
    deepDive:
      'Input arguments to cached functions MUST be hashable. Passing an unhashable list or dictionary raises `TypeError: unhashable type`.',
    tags: ['lru_cache', 'Decorators', 'Memoization', 'functools', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-026',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'OOP',
    topic: 'Instance Attributes vs. Class Attributes',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'In an analytics pipeline class, what is the critical behavioral difference between an attribute defined directly on the class body versus one defined inside `__init__` on `self`?',
    codeSnippet: `class PipelineConfig:
    version = "1.0"        # Class attribute (shared by ALL instances)
    
    def __init__(self, source):
        self.source = source # Instance attribute (unique to this instance)`,
    options: [
      'Class attributes are shared across all instances of the class; instance attributes (self.attr) are unique to each individual object instance',
      'Class attributes can only be integers; instance attributes can be any type',
      'Instance attributes are deleted when the function returns; class attributes persist forever in SQL',
      'There is no difference in Python'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Class attributes are shared across all instances of the class; instance attributes (self.attr) are unique to each individual object instance',
    explanationTitle: 'Class Attributes vs. Instance Attributes',
    explanationText:
      'Class attributes are defined on the class object itself and shared by all instances. A common bug occurs when assigning a mutable list as a class attribute: modifying that list in one instance modifies it across all instances! Instance attributes bound to `self` are strictly isolated.',
    deepDive:
      'Accessing `instance.version` searches the instance dict first; if not found, it falls back to the class dict.',
    tags: ['OOP', 'Class Attributes', 'Instance Attributes', 'self', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-027',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'OOP',
    topic: 'Encapsulation with @property and Validation Setters',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How do `@property` and `@setter` decorators implement validation logic when updating an attribute, while maintaining clean dot-notation syntax?',
    codeSnippet: `class Experiment:
    def __init__(self, p_value):
        self.p_value = p_value # Invokes setter below!

    @property
    def p_value(self):
        return self._p_value

    @p_value.setter
    def p_value(self, val):
        if not (0.0 <= val <= 1.0):
            raise ValueError("p-value must be between 0.0 and 1.0")
        self._p_value = val`,
    options: [
      'They define getter and setter methods that execute custom validation code transparently whenever client code reads or assigns instance.p_value',
      'They convert Python code to private C++ member variables',
      'They prevent other developers from viewing the source code',
      'They make the attribute read-only permanently'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'They define getter and setter methods that execute custom validation code transparently whenever client code reads or assigns instance.p_value',
    explanationTitle: 'Pythonic Getters and Setters via @property',
    explanationText:
      'Unlike Java which uses verbose `getVal()` and `setVal()`, Python uses `@property`. Callers write natural code (`exp.p_value = 0.04`), while the setter method intercepts the assignment, runs assertion checks, and updates the private backing variable `self._p_value`.',
    deepDive:
      'Omitting the `@p_value.setter` makes the property strictly read-only, raising `AttributeError: can\'t set attribute` on assignment.',
    tags: ['@property', 'Encapsulation', 'Setters', 'Validation', 'OOP', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-028',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'OOP',
    topic: 'Inheritance & super() in Data Loader Pipelines',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Why is `super().__init__(...)` called inside the subclass `__init__` method in an object-oriented data architecture?',
    codeSnippet: `class BaseLoader:
    def __init__(self, uri):
        self.uri = uri
        self.connected = False

class PostgresLoader(BaseLoader):
    def __init__(self, uri, port=5432):
        super().__init__(uri) # Delegate initialization to base class
        self.port = port`,
    options: [
      'To execute the initialization logic of the parent (super) class, ensuring inherited base attributes are properly configured before the subclass initializes its own fields',
      'To convert the subclass into a supercomputer process',
      'Because Python Institute syntax rules forbid subclasses from having their own __init__',
      'To restart the PostgreSQL database daemon'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'To execute the initialization logic of the parent (super) class, ensuring inherited base attributes are properly configured before the subclass initializes its own fields',
    explanationTitle: 'Cooperative Inheritance via super()',
    explanationText:
      '`super()` delegates method calls to parent classes according to the class Method Resolution Order (MRO). In subclasses, failing to call `super().__init__()` leaves inherited base attributes uninitialized, causing `AttributeError` down the line.',
    deepDive:
      'You can inspect any class’s inheritance search order via `Subclass.__mro__` or `Subclass.mro()`.',
    tags: ['super()', 'Inheritance', 'OOP', 'MRO', 'Pipelines', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-029',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'OOP Dunder Methods',
    topic: 'Emulating Container Protocols: __len__ and __getitem__',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Which two special (dunder) methods must a custom `Dataset` class implement so that instances support `len(dataset)` and indexing `dataset[0]`?',
    codeSnippet: `class Dataset:
    def __init__(self, records):
        self._records = records

    def __len__(self):
        return len(self._records)

    def __getitem__(self, idx):
        return self._records[idx]

ds = Dataset(['row1', 'row2', 'row3'])
print(len(ds))    # 3
print(ds[1])      # 'row2'`,
    options: [
      '__len__(self) and __getitem__(self, idx)',
      '__size__(self) and __index__(self, idx)',
      '__count__(self) and __lookup__(self, idx)',
      '__length__(self) and __get__(self, idx)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '__len__(self) and __getitem__(self, idx)',
    explanationTitle: 'Sequence Protocols: __len__ and __getitem__',
    explanationText:
      'Python uses duck typing and protocols. Implementing `__len__` hooks into the built-in `len()` function. Implementing `__getitem__` hooks into square bracket indexing (`obj[i]`), slicing (`obj[1:3]`), and automatically makes the object iterable in `for item in obj` loops.',
    deepDive:
      'This pattern is the exact foundational interface used by PyTorch’s `torch.utils.data.Dataset` for training neural networks.',
    tags: ['Dunder Methods', '__len__', '__getitem__', 'Protocols', 'OOP', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-030',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'OOP Architecture',
    topic: 'Enforcing Pipeline Contracts with Abstract Base Classes (ABC)',
    category: 'Programming and Database Skills',
    difficulty: 'advanced',
    question: 'How does an Abstract Base Class (`abc.ABC`) prevent instantiation of incomplete pipeline plugins that forget to implement a mandatory method like `extract()`?',
    codeSnippet: `from abc import ABC, abstractmethod

class BaseExtractor(ABC):
    @abstractmethod
    def extract(self):
        """Mandatory data extraction method."""
        pass

class BadExtractor(BaseExtractor):
    pass # Forgot to implement extract()!

# Instantiation fails:
# obj = BadExtractor() # TypeError: Can't instantiate abstract class BadExtractor with abstract method extract`,
    options: [
      'Python raises a TypeError at instantiation time if any method decorated with @abstractmethod has not been overridden and implemented by the concrete subclass',
      'The Python compiler deletes the subclass file from disk',
      'The subclass automatically inherits a dummy implementation that returns None',
      'Abstract base classes can only be run on Linux'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Python raises a TypeError at instantiation time if any method decorated with @abstractmethod has not been overridden and implemented by the concrete subclass',
    explanationTitle: 'Contract Enforcement with ABC and @abstractmethod',
    explanationText:
      'Abstract Base Classes define formal interfaces. If a junior developer creates a plugin subclass but forgets to implement `extract()`, Python refuses to instantiate the class at runtime, preventing silent downstream bugs before production data processing starts.',
    deepDive:
      'Abstract classes can also contain concrete helper methods that subclasses inherit alongside abstract method requirements.',
    tags: ['ABC', 'abstractmethod', 'OOP', 'Interfaces', 'Architecture', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-031',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Dataclasses',
    topic: 'Type-Annotated Records with @dataclass',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'What boilerplate code does the `@dataclass` decorator automatically synthesize for a class?',
    codeSnippet: `from dataclasses import dataclass

@dataclass
class MetricRecord:
    metric_name: str
    value: float
    timestamp: str

m = MetricRecord("latency_ms", 42.5, "2026-10-12T10:00:00Z")
print(m) # MetricRecord(metric_name='latency_ms', value=42.5, timestamp='2026-10-12T10:00:00Z')`,
    options: [
      'It automatically generates __init__(), __repr__(), and __eq__() methods based on class type annotations, eliminating repetitive boilerplate',
      'It creates an SQL table in PostgreSQL matching the class schema',
      'It compiles the class into Cython for 100x execution speed',
      'It turns the class into a web API server'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It automatically generates __init__(), __repr__(), and __eq__() methods based on class type annotations, eliminating repetitive boilerplate',
    explanationTitle: 'Automated Boilerplate Generation via @dataclass',
    explanationText:
      'Introduced in Python 3.7 (PEP 557), `@dataclass` inspects type annotations to synthesize constructors (`__init__`), human-readable string representations (`__repr__`), and value-equality comparisons (`__eq__`).',
    deepDive:
      'Setting `@dataclass(frozen=True)` makes instances immutable and hashable, allowing them to be stored in sets or used as dictionary keys.',
    tags: ['dataclass', 'PEP 557', 'Boilerplate', 'Clean Code', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-032',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Context Managers',
    topic: 'Deterministic Resource Management via with Statement',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'What is the primary guarantee provided by using the `with` statement (context manager) when opening files or database connections?',
    codeSnippet: `# Safe file management:
with open('data.csv', 'r') as f:
    content = f.read()
# f is guaranteed to be closed here, even if f.read() crashed!`,
    options: [
      'It guarantees that cleanup actions (like closing file descriptors or releasing database locks) are executed deterministically, even if an unhandled exception occurs inside the block',
      'It accelerates file reading speed by 4x',
      'It encrypts the file while open',
      'It prevents other applications from viewing the computer screen'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It guarantees that cleanup actions (like closing file descriptors or releasing database locks) are executed deterministically, even if an unhandled exception occurs inside the block',
    explanationTitle: 'Context Managers and Resource Cleanup',
    explanationText:
      'Context managers implement `__enter__()` and `__exit__()`. When entering the `with` block, `__enter__` acquires the resource. When exiting the block (normally or via an error/exception), `__exit__` runs unconditionally, preventing operating system file descriptor leaks.',
    deepDive:
      'If `__exit__` returns `True`, it suppresses the exception; if it returns `None` or `False`, the exception propagates outward.',
    tags: ['Context Managers', 'with statement', '__enter__', '__exit__', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-033',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Context Managers',
    topic: 'Creating Custom Context Managers with @contextmanager',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How do you create a custom execution timer context manager using `@contextlib.contextmanager` and `yield`?',
    codeSnippet: `import time
from contextlib import contextmanager

@contextmanager
def execution_timer(task_name):
    start = time.perf_counter()
    try:
        yield # Code inside the with block executes here!
    finally:
        elapsed = time.perf_counter() - start
        print(f"[{task_name}] took {elapsed:.3f}s")

with execution_timer("Matrix Multiply"):
    # Heavy analytical processing...
    pass`,
    options: [
      'Decorate a generator function with @contextmanager; code before yield runs on entry (__enter__), yield hands control to the with block, and code in the finally block runs on exit (__exit__)',
      'Create a while loop that sleeps for 1 second',
      'Use the @timer decorator on a class',
      'Context managers cannot be written as generator functions'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Decorate a generator function with @contextmanager; code before yield runs on entry (__enter__), yield hands control to the with block, and code in the finally block runs on exit (__exit__)',
    explanationTitle: 'Generator-Based Context Managers via contextlib',
    explanationText:
      '`contextlib.contextmanager` turns a generator into a context manager without writing a full class with `__enter__` and `__exit__`. Wrapping the `yield` inside a `try...finally` block guarantees that exit code runs even if the `with` body raises an exception.',
    deepDive:
      'If an exception occurs inside the `with` block, it is re-raised at the point of the `yield` statement inside the generator.',
    tags: ['contextlib', 'contextmanager', 'yield', 'Clean Code', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-034',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Exception Handling',
    topic: 'Exception Hierarchy: BaseException vs. Specific Exceptions',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'Why is catching bare `except:` or `except BaseException:` considered an anti-pattern in production Python pipelines?',
    codeSnippet: `# Dangerous anti-pattern:
# try:
#     run_etl_pipeline()
# except: # Catches EVERYTHING, including KeyboardInterrupt!
#     pass`,
    options: [
      'It inadvertently catches critical system-exiting signals like KeyboardInterrupt (Ctrl+C) and SystemExit, making it impossible to stop or gracefully terminate the script from the terminal',
      'Because Python Institute syntax rules reject bare except clauses',
      'It slows down Python execution by 500%',
      'It deletes log files automatically'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It inadvertently catches critical system-exiting signals like KeyboardInterrupt (Ctrl+C) and SystemExit, making it impossible to stop or gracefully terminate the script from the terminal',
    explanationTitle: 'Python Exception Class Hierarchy',
    explanationText:
      'In Python’s hierarchy, `BaseException` is the root, with children `SystemExit`, `KeyboardInterrupt`, and `Exception`. All standard application errors inherit from `Exception`. Always catch specific exceptions (e.g. `except (ValueError, KeyError):`) or at most `except Exception:`.',
    deepDive:
      'Catching specific exceptions ensures unexpected bugs (like `NameError` or `TypeError`) surface immediately during development rather than being swallowed silently.',
    tags: ['Exceptions', 'BaseException', 'Anti-Patterns', 'Error Handling', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-035',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Exception Handling',
    topic: 'Lifecycle of try-except-else-finally',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Under what specific condition does the `else` block execute in a `try-except-else-finally` construct?',
    codeSnippet: `try:
    data = load_records()
except FileNotFoundError:
    handle_missing_file()
else:
    # When does this run?
    run_statistical_model(data)
finally:
    close_db_connection()`,
    options: [
      'The else block executes only if NO exception was raised inside the try block',
      'The else block executes only when an exception occurs',
      'The else block executes before the try block',
      'The else block executes only if the finally block fails'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The else block executes only if NO exception was raised inside the try block',
    explanationTitle: 'The Complete try-except-else-finally Flow',
    explanationText:
      '`try` attempts the risky operation. `except` catches designated errors. `else` runs strictly if the `try` block succeeded without any exception. `finally` runs unconditionally on every path, guaranteed.',
    deepDive:
      'Putting subsequent processing inside `else` rather than `try` keeps the `try` block minimal, preventing accidental masking of unrelated errors in downstream code.',
    tags: ['try-except-else-finally', 'Control Flow', 'Exception Handling', 'PCAD-31-02']
  }
];
