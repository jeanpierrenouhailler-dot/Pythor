import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 5: MISCELLANEOUS (Part 1: Cards 1 to 35)
 * - Chapter 5.1: List, Dict & Set Comprehensions and Conditional Expressions (Cards 1-20)
 * - Chapter 5.2: Lambdas and Anonymous Functions (Cards 21-35)
 */
export const section5CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 5.1: LIST, DICT & SET COMPREHENSIONS (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pcap-s5-fc-001',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Basic List Comprehension Syntax and Semantics',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'What is the syntax of a basic list comprehension and what does it evaluate to?',
    codeSnippet: `squares = [x ** 2 for x in range(5)]
print(squares)
print(type(squares).__name__)`,
    stdoutExpected: `[0, 1, 4, 9, 16]
list`,
    explanationTitle: 'Basic List Comprehension Syntax',
    explanationText:
      'A list comprehension provides a concise syntax to construct lists. The general form is `[expression for item in iterable]`. It iterates over the iterable, evaluates the expression for each element, and returns a new list in memory.',
    complexityInfo: 'Core Python 3 syntactic construct',
  },
  {
    id: 'pcap-s5-fc-002',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Filtering with if Clause in List Comprehensions',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'Where is the filtering `if` clause placed in a list comprehension and what is the output?',
    codeSnippet: `evens = [x for x in range(10) if x % 2 == 0]
print(evens)`,
    stdoutExpected: '[0, 2, 4, 6, 8]',
    explanationTitle: 'Filtering Elements with if',
    explanationText:
      'When filtering elements, the `if` clause is placed at the end: `[expr for item in iterable if condition]`. Only items for which the condition evaluates to True are included in the resulting list.',
    complexityInfo: 'Conditional element selection',
  },
  {
    id: 'pcap-s5-fc-003',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Ternary Conditional Expression in Comprehensions',
    category: 'T4: Syntax & Traps',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.1',
    section: 'Section 5',
    question: 'Where is an `if-else` ternary conditional expression placed in a list comprehension?',
    codeSnippet: `result = ['even' if x % 2 == 0 else 'odd' for x in range(4)]
print(result)`,
    stdoutExpected: "['even', 'odd', 'even', 'odd']",
    explanationTitle: 'Ternary Expression Position vs Filtering if',
    explanationText:
      'A common PCAP trap: If you need an `if-else` construct, it is a Python ternary expression (`val1 if cond else val2`) and MUST precede the `for` keyword. A trailing `if` (without `else`) is a filter and comes after `iterable`.',
    complexityInfo: 'Placement of ternary vs filtering if',
  },
  {
    id: 'pcap-s5-fc-004',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Syntax Error with trailing else',
    category: 'T4: Syntax & Traps',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.1',
    section: 'Section 5',
    question: 'What happens if you write an `else` clause at the end of a list comprehension after the filter `if`?',
    codeSnippet: `# Attempting to use else at the end:
# [x for x in range(5) if x > 2 else 0]`,
    stdoutExpected: 'SyntaxError: invalid syntax',
    explanationTitle: 'Trailing else is Invalid Syntax',
    explanationText:
      'The comprehension filter clause only supports `if condition`. A trailing `else` causes a `SyntaxError`. If an alternative value is needed when condition fails, move the ternary expression before `for`: `[x if x > 2 else 0 for x in range(5)]`.',
    complexityInfo: 'Frequent PCAP multiple-choice syntax trap',
  },
  {
    id: 'pcap-s5-fc-005',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Scope of Iteration Variable in Python 3',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.1',
    section: 'Section 5',
    question: 'Does the iteration variable of a list comprehension leak into the enclosing scope in Python 3?',
    codeSnippet: `x = 100
lst = [x for x in range(5)]
print(x)`,
    stdoutExpected: '100',
    explanationTitle: 'Comprehensions Have Dedicated Local Scope',
    explanationText:
      'In Python 3, list comprehensions are executed in their own hidden function-like scope. The variable `x` inside the comprehension does not overwrite or leak into the outer variable `x`. In Python 2 it leaked, but Python 3 strictly isolates it.',
    complexityInfo: 'Python 2 vs Python 3 architectural difference',
  },
  {
    id: 'pcap-s5-fc-006',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Nested List Comprehensions (Matrix Creation)',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.1',
    section: 'Section 5',
    question: 'What does this nested list comprehension produce?',
    codeSnippet: `matrix = [[row * 2 + col for col in range(2)] for row in range(3)]
print(matrix)`,
    stdoutExpected: '[[0, 1], [2, 3], [4, 5]]',
    explanationTitle: 'Matrix Generation with Nested Comprehensions',
    explanationText:
      'The outer comprehension `for row in range(3)` executes 3 times. On each iteration, the inner comprehension `[row * 2 + col for col in range(2)]` generates a 2-element list, producing a 3x2 2D list matrix.',
    complexityInfo: 'Nested list comprehension order of execution',
  },
  {
    id: 'pcap-s5-fc-007',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Multiple for Clauses (Flattening Matrix)',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.1',
    section: 'Section 5',
    question: 'In what order do multiple `for` clauses execute in a single list comprehension?',
    codeSnippet: `matrix = [[1, 2], [3, 4]]
flattened = [val for row in matrix for val in row]
print(flattened)`,
    stdoutExpected: '[1, 2, 3, 4]',
    explanationTitle: 'Order of Multiple for Clauses',
    explanationText:
      'Multiple `for` clauses in a comprehension appear in the same order as standard nested loops: the first `for row in matrix` is the outer loop, and the second `for val in row` is the inner loop.',
    complexityInfo: 'Flattening pattern syntax order',
  },
  {
    id: 'pcap-s5-fc-008',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Multiple for Clauses with Dependent Iterables',
    category: 'T2: Output',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '5.1',
    section: 'Section 5',
    question: 'What is the output when an inner `for` clause depends on the variable of the outer `for` clause?',
    codeSnippet: `pairs = [(x, y) for x in range(3) for y in range(x)]
print(pairs)`,
    stdoutExpected: '[(1, 0), (2, 0), (2, 1)]',
    explanationTitle: 'Dependent Inner Iterable Loop',
    explanationText:
      'When x=0, range(0) is empty. When x=1, range(1) yields y=0 -> (1, 0). When x=2, range(2) yields y=0, 1 -> (2, 0), (2, 1). Total pairs produced: 3.',
    complexityInfo: 'Nested variable scoping across for clauses',
  },
  {
    id: 'pcap-s5-fc-009',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Multiple Filtering if Clauses',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How do multiple consecutive `if` clauses at the end of a comprehension behave?',
    codeSnippet: `nums = [x for x in range(30) if x % 2 == 0 if x % 3 == 0 if x % 5 == 0]
print(nums)`,
    stdoutExpected: '[0, 30] (wait, range(30) stops at 29 -> [0])',
    explanationTitle: 'Consecutive if Clauses Act as Logical AND',
    explanationText:
      'Writing multiple `if` clauses consecutively is equivalent to combining them with `and`. Here `x % 2 == 0 and x % 3 == 0 and x % 5 == 0` is `x % 30 == 0`. In `range(30)`, only 0 satisfies this condition, so the output is `[0]`.',
    complexityInfo: 'Multiple trailing if semantics',
  },
  {
    id: 'pcap-s5-fc-010',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Dictionary Comprehension Syntax',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'What is the syntax for a dictionary comprehension in Python?',
    codeSnippet: `d = {k: k ** 2 for k in range(1, 4)}
print(d)
print(type(d).__name__)`,
    stdoutExpected: `{1: 1, 2: 4, 3: 9}
dict`,
    explanationTitle: 'Dictionary Comprehension Structure',
    explanationText:
      'A dictionary comprehension uses curly braces `{}` with a colon separating key and value: `{key_expr: val_expr for item in iterable}`. It directly constructs a dictionary instance.',
    complexityInfo: 'Dict comprehension syntax and type',
  },
  {
    id: 'pcap-s5-fc-011',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Dictionary Comprehension with Duplicate Keys',
    category: 'T4: Syntax & Traps',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.1',
    section: 'Section 5',
    question: 'What happens in a dict comprehension when the key expression produces duplicate keys?',
    codeSnippet: `words = ['apple', 'banana', 'avocado', 'blueberry']
# Key is first letter, value is the word
d = {w[0]: w for w in words}
print(d)`,
    stdoutExpected: "{'a': 'avocado', 'b': 'blueberry'}",
    explanationTitle: 'Duplicate Keys Overwrite Previous Values',
    explanationText:
      'Dictionary keys must be unique. When a duplicate key is encountered during iteration, the newer value overwrites the earlier value. "avocado" overwrites "apple" for key \'a\', and "blueberry" overwrites "banana" for key \'b\'.',
    complexityInfo: 'Dictionary key uniqueness rule in comprehensions',
  },
  {
    id: 'pcap-s5-fc-012',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Swapping Keys and Values with Dict Comprehension',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How can you invert a dictionary using a dictionary comprehension and `.items()`?',
    codeSnippet: `original = {'a': 1, 'b': 2, 'c': 3}
inverted = {v: k for k, v in original.items()}
print(inverted[2])`,
    stdoutExpected: 'b',
    explanationTitle: 'Inverting Dictionaries with Comprehensions',
    explanationText:
      'By iterating over `original.items()` unpacking `(k, v)`, we can assign `{v: k}`. Here `inverted` becomes `{1: \'a\', 2: \'b\', 3: \'c\'}`, so `inverted[2]` evaluates to \'b\'. Note that values must be hashable.',
    complexityInfo: 'Dictionary inversion pattern and hashability',
  },
  {
    id: 'pcap-s5-fc-013',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Set Comprehension Syntax and Deduplication',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How do you create a set comprehension and how does it handle duplicates?',
    codeSnippet: `s = {x % 3 for x in range(10)}
print(sorted(list(s)))
print(type(s).__name__)`,
    stdoutExpected: `[0, 1, 2]
set`,
    explanationTitle: 'Set Comprehensions',
    explanationText:
      'Set comprehensions use `{expr for item in iterable}` without colons. Since sets only hold unique elements, all duplicate values are automatically discarded. Elements must be hashable.',
    complexityInfo: 'Set comprehension syntax and uniqueness guarantee',
  },
  {
    id: 'pcap-s5-fc-014',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Parentheses with Comprehension Syntax: Generator Expression',
    category: 'T4: Syntax & Traps',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.1',
    section: 'Section 5',
    question: 'Does `(x for x in range(5))` create a tuple?',
    codeSnippet: `g = (x for x in range(5))
print(type(g).__name__)
print(isinstance(g, tuple))`,
    stdoutExpected: `generator
False`,
    explanationTitle: 'Parentheses Create a Generator, NOT a Tuple',
    explanationText:
      'A classic PCAP trap: `(x for x in ...)` does NOT create a "tuple comprehension" (there is no tuple comprehension in Python). It creates a generator object that computes values lazily on demand. To create a tuple, use `tuple(x for x in range(5))`.',
    complexityInfo: 'Common PCAP misconception: generator vs tuple',
  },
  {
    id: 'pcap-s5-fc-015',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Memory Efficiency: List Comprehension vs Generator Expression',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.1',
    section: 'Section 5',
    question: 'What is the main operational difference between a list comprehension and a generator expression?',
    codeSnippet: `import sys
lst = [x for x in range(1000000)]
gen = (x for x in range(1000000))
print(sys.getsizeof(lst) > sys.getsizeof(gen))`,
    stdoutExpected: 'True',
    explanationTitle: 'Eager vs Lazy Evaluation',
    explanationText:
      'A list comprehension evaluates eagerly and allocates all elements in memory immediately. A generator expression produces values lazily on-the-fly one by one, using constant minimal memory regardless of sequence size.',
    complexityInfo: 'Memory allocation and evaluation timing',
  },
  {
    id: 'pcap-s5-fc-016',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Comprehension with zip() Pairing',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.1',
    section: 'Section 5',
    question: 'What is the output when iterating over `zip()` in a list comprehension?',
    codeSnippet: `keys = ['name', 'age', 'role']
vals = ['Alice', 30, 'Admin', 'EXTRA']
pairs = [f"{k}={v}" for k, v in zip(keys, vals)]
print(pairs)`,
    stdoutExpected: "['name=Alice', 'age=30', 'role=Admin']",
    explanationTitle: 'zip() Stops at Shortest Iterable',
    explanationText:
      'When unpacking `k, v` from `zip(keys, vals)`, iteration stops as soon as the shortest iterable (`keys`, length 3) is exhausted. The extra item in `vals` is ignored.',
    complexityInfo: 'zip truncation with list comprehension',
  },
  {
    id: 'pcap-s5-fc-017',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Calling Methods and Transforming Strings',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How can methods like `.strip()` and `.upper()` be applied inside a list comprehension?',
    codeSnippet: `raw = ['  python ', '  pcap  ', ' cert  ']
cleaned = [s.strip().upper() for s in raw if len(s.strip()) > 4]
print(cleaned)`,
    stdoutExpected: "['PYTHON']",
    explanationTitle: 'Method Chaining in Expression and Filter',
    explanationText:
      'The expression `s.strip().upper()` is evaluated only for items that pass the filter `len(s.strip()) > 4`. The lengths of stripped strings are: "python" (6), "pcap" (4), "cert" (4). Only "python" passes > 4.',
    complexityInfo: 'Method chaining inside comprehension expressions',
  },
  {
    id: 'pcap-s5-fc-018',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Nested Matrix Transposition',
    category: 'T2: Output',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How does a nested comprehension transpose a 2D matrix?',
    codeSnippet: `matrix = [
    [1, 2, 3],
    [4, 5, 6]
]
transposed = [[row[i] for row in matrix] for i in range(3)]
print(transposed)`,
    stdoutExpected: '[[1, 4], [2, 5], [3, 6]]',
    explanationTitle: 'Transposing Matrix via Comprehensions',
    explanationText:
      'The outer loop runs for `i in range(3)` (columns 0, 1, 2). For each `i`, the inner comprehension extracts `row[i]` for each `row` in the matrix, turning the 2x3 matrix into a 3x2 transposed matrix.',
    complexityInfo: 'Index transposition pattern tested on PCAP',
  },
  {
    id: 'pcap-s5-fc-019',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Side-effects and Mutable State inside Comprehensions',
    category: 'T5: Edge Cases',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.1',
    section: 'Section 5',
    question: 'What is the output when a mutating method like `.append()` is called inside a comprehension expression?',
    codeSnippet: `out = []
lst = [out.append(x) for x in range(3)]
print(lst)
print(out)`,
    stdoutExpected: `[None, None, None]
[0, 1, 2]`,
    explanationTitle: 'append() Returns None',
    explanationText:
      '`list.append()` mutates the list in-place and returns `None`. Therefore, `[out.append(x) ...]` evaluates to `[None, None, None]`. Mutating outer state inside comprehensions is an anti-pattern often tested to see if candidates know `append` returns `None`.',
    complexityInfo: 'None return value of in-place mutators',
  },
  {
    id: 'pcap-s5-fc-020',
    cardType: 'PCAP 5.1 • Comprehensions',
    topic: 'Unpacking Tuples in Comprehension for Clause',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.1',
    section: 'Section 5',
    question: 'Can you unpack multi-element tuples directly in the `for` clause of a list comprehension?',
    codeSnippet: `points = [(1, 2, 3), (4, 5, 6)]
sums = [a + b + c for a, b, c in points]
print(sums)`,
    stdoutExpected: '[6, 15]',
    explanationTitle: 'Sequence Unpacking in for Clause',
    explanationText:
      'Yes, Python allows full sequence unpacking in the comprehension `for` header. Each 3-tuple `(a, b, c)` is unpacked directly into the target variables `a`, `b`, and `c`.',
    complexityInfo: 'Tuple unpacking within comprehensions',
  },

  // =========================================================================
  // CHAPTER 5.2: LAMBDAS AND ANONYMOUS FUNCTIONS (Cards 21 to 35)
  // =========================================================================
  {
    id: 'pcap-s5-fc-021',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'Basic Lambda Definition and Syntax',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What is the syntax for creating an anonymous lambda function in Python?',
    codeSnippet: `f = lambda x, y: x + y
print(type(f).__name__)
print(f(3, 4))`,
    stdoutExpected: `function
7`,
    explanationTitle: 'Lambda Syntax: lambda args: expr',
    explanationText:
      'The `lambda` keyword defines an inline anonymous function. The syntax is `lambda param1, param2, ...: expression`. It evaluates the expression and implicitly returns its result without an explicit `return` keyword.',
    complexityInfo: 'Fundamental lambda grammar in Python',
  },
  {
    id: 'pcap-s5-fc-022',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'No return Statement in Lambda Body',
    category: 'T4: Syntax & Traps',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'Can you write an explicit `return` statement inside a lambda function?',
    codeSnippet: `# Attempting to use return inside a lambda:
# f = lambda x: return x * 2`,
    stdoutExpected: 'SyntaxError: invalid syntax',
    explanationTitle: 'Lambdas Cannot Contain Statements',
    explanationText:
      'A lambda body can only contain a single expression, NEVER statements. The `return` keyword is a statement and causes a `SyntaxError`. The result of the expression is returned automatically.',
    complexityInfo: 'Expressions vs statements restriction',
  },
  {
    id: 'pcap-s5-fc-023',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'Lambdas with Zero Arguments',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.2',
    section: 'Section 5',
    question: 'Can a lambda function take zero arguments? How is it defined and called?',
    codeSnippet: `get_pi = lambda: 3.14159
print(get_pi())`,
    stdoutExpected: '3.14159',
    explanationTitle: 'Zero-argument Lambda',
    explanationText:
      'Yes, a lambda can take zero arguments by placing the colon directly after the `lambda` keyword: `lambda: expression`. It is invoked with empty parentheses `()`.',
    complexityInfo: 'Zero-parameter lambda syntax',
  },
  {
    id: 'pcap-s5-fc-024',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'Default Parameter Values in Lambdas',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.2',
    section: 'Section 5',
    question: 'Can lambdas have default parameter values?',
    codeSnippet: `power = lambda base, exp=2: base ** exp
print(power(5))
print(power(2, 3))`,
    stdoutExpected: `25
8`,
    explanationTitle: 'Default Arguments in Lambdas',
    explanationText:
      'Lambdas follow the exact same parameter rules as regular functions (`def`). Parameters can have default values (`exp=2`), which must follow any non-default parameters.',
    complexityInfo: 'Default argument syntax in lambda declarations',
  },
  {
    id: 'pcap-s5-fc-025',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'Variadic *args and **kwargs in Lambdas',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.2',
    section: 'Section 5',
    question: 'Can a lambda accept `*args` and `**kwargs`?',
    codeSnippet: `summarizer = lambda *args, **kwargs: sum(args) + kwargs.get('bonus', 0)
print(summarizer(10, 20, 30, bonus=5))`,
    stdoutExpected: '65',
    explanationTitle: 'Variadic Parameters in Lambdas',
    explanationText:
      'Lambdas fully support `*args` (positional arguments collected into a tuple) and `**kwargs` (keyword arguments collected into a dict). Here `sum((10, 20, 30)) + 5 = 65`.',
    complexityInfo: 'Variadic argument forwarding in lambdas',
  },
  {
    id: 'pcap-s5-fc-026',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'Immediate Lambda Invocation (IIFE)',
    category: 'T4: Syntax & Traps',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How do you define and immediately invoke an anonymous lambda without assigning it to a variable?',
    codeSnippet: `val = (lambda x, y: x * y + 1)(4, 5)
print(val)`,
    stdoutExpected: '21',
    explanationTitle: 'Immediately Invoked Lambda Expression',
    explanationText:
      'By enclosing the lambda definition in parentheses `(lambda x, y: ...)` and immediately placing argument parentheses `(4, 5)` after it, the lambda is executed anonymously upon definition. 4 * 5 + 1 = 21.',
    complexityInfo: 'Immediate evaluation syntax',
  },
  {
    id: 'pcap-s5-fc-027',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'Ternary Conditional Expression inside Lambda',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How do you implement branching logic inside a lambda without `if` statements?',
    codeSnippet: `classifier = lambda n: "positive" if n > 0 else ("zero" if n == 0 else "negative")
print(classifier(10), classifier(0), classifier(-5))`,
    stdoutExpected: 'positive zero negative',
    explanationTitle: 'Nested Conditional Expressions in Lambdas',
    explanationText:
      'Because statements like `if ...: ...` are forbidden in lambdas, branching must be achieved using expressions: `val1 if cond1 else (val2 if cond2 else val3)`.',
    complexityInfo: 'Conditional branching in single expression constraint',
  },
  {
    id: 'pcap-s5-fc-028',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'Lambda as a Sorting Key with sorted()',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How is a lambda used as the `key` argument in `sorted()` to sort words by their last character?',
    codeSnippet: `words = ['cherry', 'apple', 'banana', 'fig']
res = sorted(words, key=lambda w: w[-1])
print(res)`,
    stdoutExpected: "['banana', 'apple', 'fig', 'cherry']",
    explanationTitle: 'Custom Key Sorting',
    explanationText:
      'The `key` parameter expects a callable that extracts a comparison key from each element. The last characters are: \'cherry\'->\'y\', \'apple\'->\'e\', \'banana\'->\'a\', \'fig\'->\'g\'. Alphabetical order of last letters is \'a\', \'e\', \'g\', \'y\'.',
    complexityInfo: 'sorted() key extraction callable',
  },
  {
    id: 'pcap-s5-fc-029',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'Multi-criteria Sorting with Lambda Tuples',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How can a lambda return a tuple to achieve multi-level sorting (e.g. by score descending, then name)?',
    codeSnippet: `students = [('Alice', 85), ('Bob', 92), ('Charlie', 85)]
# Sort by score descending (-score), then name ascending
students.sort(key=lambda s: (-s[1], s[0]))
print(students)`,
    stdoutExpected: "[('Bob', 92), ('Alice', 85), ('Charlie', 85)]",
    explanationTitle: 'Multi-level Sort Keys Using Tuples',
    explanationText:
      'Python compares tuples element by element. By returning `(-score, name)`, Python sorts primarily by score descending (since negating reverses numerical order), and breaks ties using name alphabetically.',
    complexityInfo: 'Tuple key comparison order',
  },
  {
    id: 'pcap-s5-fc-030',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'Sorting Dictionaries by Value using Lambda',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How do you sort a dictionary by its values rather than its keys?',
    codeSnippet: `inventory = {'pens': 50, 'notebooks': 15, 'erasers': 30}
sorted_items = sorted(inventory.items(), key=lambda item: item[1])
print(sorted_items)`,
    stdoutExpected: "[('notebooks', 15), ('erasers', 30), ('pens', 50)]",
    explanationTitle: 'Sorting dict.items() by Value',
    explanationText:
      '`inventory.items()` yields `(key, value)` tuples. The lambda `lambda item: item[1]` extracts the value (index 1), sorting the items in ascending order of quantity (15, 30, 50).',
    complexityInfo: 'Dictionary item value sorting',
  },
  {
    id: 'pcap-s5-fc-031',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'Lambdas in list.sort() vs sorted()',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What is the crucial return value difference between `list.sort(key=...)` and `sorted(list, key=...)`?',
    codeSnippet: `nums = [3, -1, 5, -9]
res1 = nums.sort(key=lambda x: abs(x))
res2 = sorted(nums, key=lambda x: -x)
print(res1)
print(nums)`,
    stdoutExpected: `None
[-1, 3, 5, -9]`,
    explanationTitle: 'In-place sort() Returns None',
    explanationText:
      '`list.sort()` sorts the list in-place and returns `None`. In contrast, the built-in function `sorted()` returns a new sorted list and leaves the original untouched.',
    complexityInfo: 'In-place mutation vs new list creation',
  },
  {
    id: 'pcap-s5-fc-032',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'The map() Built-in with Lambda',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What does `map(func, iterable)` return in Python 3 and how does it execute?',
    codeSnippet: `m = map(lambda x: x * 2, [1, 2, 3])
print(type(m).__name__)
print(list(m))`,
    stdoutExpected: `map
[2, 4, 6]`,
    explanationTitle: 'map() Returns a Lazy Iterator',
    explanationText:
      'In Python 3, `map()` returns a lazy map object (an iterator), not a list. It applies the given function to each item of the iterable upon demand. Wrapping it in `list()` forces evaluation of all items.',
    complexityInfo: 'Python 3 iterator protocol for map',
  },
  {
    id: 'pcap-s5-fc-033',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'map() with Multiple Iterables',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What happens when `map()` is passed multiple iterables of unequal length?',
    codeSnippet: `a = [1, 2, 3, 4]
b = [10, 20, 30]
res = list(map(lambda x, y: x + y, a, b))
print(res)`,
    stdoutExpected: '[11, 22, 33]',
    explanationTitle: 'map() Stops at Shortest Iterable',
    explanationText:
      'When given multiple iterables, `map()` passes one element from each iterable to the function simultaneously. In Python 3, it stops as soon as the shortest iterable is exhausted (here `b` has length 3, so element 4 in `a` is never processed).',
    complexityInfo: 'Multi-iterable truncation semantics in map',
  },
  {
    id: 'pcap-s5-fc-034',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'The filter() Built-in with Lambda',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What does `filter(func, iterable)` do and what type does it return in Python 3?',
    codeSnippet: `f = filter(lambda x: x % 2 != 0, range(6))
print(type(f).__name__)
print(list(f))`,
    stdoutExpected: `filter
[1, 3, 5]`,
    explanationTitle: 'filter() Yields Elements where func is Truthy',
    explanationText:
      '`filter()` returns a lazy iterator that yields elements from iterable for which `func(item)` evaluates to True. In Python 3, `filter()` returns a filter iterator, not a list.',
    complexityInfo: 'filter() lazy iterator behavior',
  },
  {
    id: 'pcap-s5-fc-035',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'filter() with None as Function Argument',
    category: 'T4: Syntax & Traps',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What happens if you pass `None` as the first argument to `filter(None, iterable)`?',
    codeSnippet: `items = [0, 'hello', '', None, [], [1], False, True]
truthy = list(filter(None, items))
print(truthy)`,
    stdoutExpected: "['hello', [1], True]",
    explanationTitle: 'filter(None, ...) Filters for Truthy Elements',
    explanationText:
      'When the first argument to `filter` is `None`, the identity function is assumed: it removes all falsy elements (`0`, empty strings, `None`, empty lists, `False`) and keeps only truthy values.',
    complexityInfo: 'filter(None, ...) special built-in behavior',
  },
];
