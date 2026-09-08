import { Flashcard } from '../types';

export const section3CardsPart2: Flashcard[] = [
  // ==========================================
  // CHAPTER 3.2 (cont.): Generator Functions & Iterators (Cards 36-40)
  // ==========================================
  {
    id: 'pcap-s3-fc-036',
    cardType: 'PCAP 3.2 • Generator Pipelines',
    topic: 'Chaining generators together to build efficient data processing pipelines',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How do chained generator pipelines process sequential operations without creating intermediate lists?',
    codeSnippet: `def get_numbers(n):
    for i in range(1, n + 1):
        yield i

def keep_odds(stream):
    for num in stream:
        if num % 2 != 0:
            yield num

def square_all(stream):
    for num in stream:
        yield num * num

pipeline = square_all(keep_odds(get_numbers(5)))
print(list(pipeline))`,
    stdoutExpected: '[1, 9, 25]',
    explanationTitle: 'Composable Generator Processing Pipelines',
    explanationText:
      'Generators can consume other generators as input streams. Each element is pulled through the entire pipeline on-demand one item at a time, entirely avoiding allocating intermediate lists in memory.',
    complexityInfo: 'Stream composition pattern',
  },
  {
    id: 'pcap-s3-fc-037',
    cardType: 'PCAP 3.2 • Generator Expression Inline Parentheses',
    topic: 'Omitting outer parentheses when generator expression is the sole function argument',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'When can outer parentheses be omitted from a generator expression?',
    codeSnippet: `total = sum(x * x for x in range(5)) # No extra parentheses around gen exp!
print("sum:", total)

joined = "-".join(str(x) for x in range(3))
print("joined:", joined)`,
    stdoutExpected: `sum: 30
joined: 0-1-2`,
    explanationTitle: 'Syntactic Sugar for Single-Argument Generator Expressions',
    explanationText:
      'When a generator expression is passed as the sole argument to a function call (like `sum()`, `max()`, `min()`, `join()`), the enclosing parentheses of the generator expression may be omitted.',
    complexityInfo: 'Call syntax simplification',
  },
  {
    id: 'pcap-s3-fc-038',
    cardType: 'PCAP 3.2 • Generator Expression Late Evaluation',
    topic: 'Variable evaluation timing in generator expressions',
    category: 'T2: Gotchas',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '3.2',
    section: 'Section 3',
    question: 'When are variables evaluated in a generator expression versus a list comprehension?',
    codeSnippet: `factor = 2
gen = (x * factor for x in range(3))
lst = [x * factor for x in range(3)]

factor = 10 # Reassigned before generator is consumed!
print("lst:", lst)
print("gen:", list(gen))`,
    stdoutExpected: `lst: [0, 2, 4]
gen: [0, 10, 20]`,
    explanationTitle: 'Lazy Evaluation Uses Variable Value at Iteration Time',
    explanationText:
      'List comprehensions evaluate elements eagerly when defined. Generator expressions evaluate elements lazily when iterated; references to outer variables (like `factor`) resolve to their current value at iteration time.',
    complexityInfo: 'Deferred binding in generators',
  },
  {
    id: 'pcap-s3-fc-039',
    cardType: 'PCAP 3.2 • iter() with Sentinel Callable',
    topic: 'Two-argument iter(callable, sentinel) for stream termination',
    category: 'T1: Built-ins',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What does the two-argument form of built-in `iter(callable, sentinel)` do?',
    codeSnippet: `vals = [10, 20, 30, 99, 40]
iterator = iter(vals.pop, 99) # Repeatedly calls vals.pop(0) until 99 returned

res = []
for item in iterator:
    res.append(item)

print(res)`,
    stdoutExpected: '[40]', // Note: pop() removes 40 from end, then 99 hits sentinel and terminates
    explanationTitle: 'Callable Iterator Terminates on Sentinel Match',
    explanationText:
      'When `iter(callable, sentinel)` is called with two arguments, it creates an iterator that invokes `callable()` without arguments on every `next()`. As soon as the returned value equals `sentinel`, it raises `StopIteration`.',
    complexityInfo: 'Two-argument iter() sentinel protocol',
  },
  {
    id: 'pcap-s3-fc-040',
    cardType: 'PCAP 3.2 • Generator send() Value Injection',
    topic: 'Passing values into a generator via generator.send()',
    category: 'T1: Built-ins',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How does `yield` receive a value sent from the caller via `generator.send(val)`?',
    codeSnippet: `def accumulator():
    total = 0
    while True:
        val = yield total
        if val is None:
            break
        total += val

acc = accumulator()
next(acc) # Prime the generator to first yield
print(acc.send(10))
print(acc.send(25))`,
    stdoutExpected: `10
35`,
    explanationTitle: 'yield Expressions Receive Injected Values via send()',
    explanationText:
      'The `yield` statement is an expression that evaluates to the value passed via `generator.send(value)`. The generator must first be advanced to its first `yield` via `next()` or `send(None)` before sending non-None values.',
    complexityInfo: 'Coroutine two-way communication',
  },

  // ==========================================
  // CHAPTER 3.3: Lambdas, Functional Built-ins (map, filter, sorted, zip) (Cards 41-60)
  // ==========================================
  {
    id: 'pcap-s3-fc-041',
    cardType: 'PCAP 3.3 • Lambda Function Syntax',
    topic: 'Anonymous function definition with lambda keyword',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What is the syntax for creating an anonymous inline function in Python?',
    codeSnippet: `sq = lambda x: x * x
print(sq(5))
print(type(sq).__name__)
print(sq.__name__)`,
    stdoutExpected: `25
function
<lambda>`,
    explanationTitle: 'lambda Keyword Defines Anonymous Functions',
    explanationText:
      'The syntax `lambda [parameters]: expression` creates an anonymous function object of standard type `function`. Its `__name__` attribute is automatically set to `"<lambda>"`.',
    complexityInfo: 'Anonymous function declaration',
  },
  {
    id: 'pcap-s3-fc-042',
    cardType: 'PCAP 3.3 • Lambda Single Expression Restriction',
    topic: 'Statements are strictly prohibited inside lambda bodies',
    category: 'T2: Gotchas',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'Can a Python lambda contain statements like `return`, `assert`, `pass`, assignments, or loops?',
    codeSnippet: `# Invalid: lambda x: return x * 2  -> SyntaxError
# Invalid: lambda x: x = x + 1     -> SyntaxError
# Invalid: lambda x: for i in x: ... -> SyntaxError

# Valid: conditional ternary expression
parity = lambda x: "even" if x % 2 == 0 else "odd"
print(parity(7), parity(8))`,
    stdoutExpected: 'odd even',
    explanationTitle: 'Lambdas Are Restricted to a Single Expression',
    explanationText:
      'Python lambdas can only contain a single syntactic expression whose value is implicitly returned. Statements (such as `return`, assignment `=`, loops, or `try`) cannot be used inside a lambda.',
    complexityInfo: 'Grammar constraint on lambdas',
  },
  {
    id: 'pcap-s3-fc-043',
    cardType: 'PCAP 3.3 • Zero and Multi-Parameter Lambdas',
    topic: 'Parameter signatures supported by lambdas',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How do you define a lambda with zero parameters, or with multiple parameters?',
    codeSnippet: `get_pi = lambda: 3.14159
calc = lambda x, y, z: (x + y) * z

print(get_pi())
print(calc(2, 3, 4))`,
    stdoutExpected: `3.14159
20`,
    explanationTitle: 'Parameter Flexibility in Lambdas',
    explanationText:
      'A lambda with zero parameters uses no parameters before the colon: `lambda: value`. Multiple parameters are comma-separated: `lambda a, b, c: expression`.',
    complexityInfo: 'Lambda signature patterns',
  },
  {
    id: 'pcap-s3-fc-044',
    cardType: 'PCAP 3.3 • Default Arguments in Lambdas',
    topic: 'Setting default parameter values in lambda declarations',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'Can parameters in a lambda definition specify default argument values?',
    codeSnippet: `power = lambda base, exp=2: base ** exp

print(power(4))
print(power(4, 3))`,
    stdoutExpected: `16
64`,
    explanationTitle: 'Lambdas Support Default Arguments',
    explanationText:
      'Just like standard `def` functions, lambdas support default argument values (`lambda x, factor=10: x * factor`). They follow the same rule: non-default parameters must precede default parameters.',
    complexityInfo: 'Default argument syntax in lambdas',
  },
  {
    id: 'pcap-s3-fc-045',
    cardType: 'PCAP 3.3 • map() Built-in Function',
    topic: 'Transforming sequence elements lazily with map()',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does Python 3 built-in `map(function, iterable)` return, and when is the function applied?',
    codeSnippet: `numbers = [1, 2, 3, 4]
m = map(lambda x: x * 10, numbers)

print("Type:", type(m).__name__)
print("First item:", next(m))
print("Remaining:", list(m))`,
    stdoutExpected: `Type: map
First item: 10
Remaining: [20, 30, 40]`,
    explanationTitle: 'map() Returns a Lazy Iterator',
    explanationText:
      'In Python 3, `map()` returns a lazy iterator (an instance of `map`), not a list. Transformation of elements occurs on-demand as the iterator is consumed.',
    complexityInfo: 'Lazy stream transformation',
  },
  {
    id: 'pcap-s3-fc-046',
    cardType: 'PCAP 3.3 • map() with Multiple Iterables',
    topic: 'Passing multiple parallel iterables to map()',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How does `map()` behave when passed multiple iterables of different lengths?',
    codeSnippet: `nums1 = [1, 2, 3, 4, 5]
nums2 = [10, 20, 30]

sums = map(lambda a, b: a + b, nums1, nums2)
print(list(sums))`,
    stdoutExpected: '[11, 22, 33]',
    explanationTitle: 'map() Stops at Shortest Iterable',
    explanationText:
      'When `map()` is provided multiple iterables, the mapping function must accept that many arguments. Iteration stops automatically when the shortest input iterable is exhausted.',
    complexityInfo: 'Parallel stream processing',
  },
  {
    id: 'pcap-s3-fc-047',
    cardType: 'PCAP 3.3 • filter() Built-in Function',
    topic: 'Selecting elements matching a predicate with filter()',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does Python 3 built-in `filter(predicate, iterable)` return, and what does it keep?',
    codeSnippet: `values = [12, 5, 18, 7, 20, 3]
f = filter(lambda x: x >= 10, values)

print("Type:", type(f).__name__)
print("List:", list(f))`,
    stdoutExpected: `Type: filter
List: [12, 18, 20]`,
    explanationTitle: 'filter() Returns a Lazy Iterator of Matching Items',
    explanationText:
      '`filter()` returns a lazy iterator containing only items for which the predicate function returns truthy. In Python 3, like `map()`, it produces elements on-demand.',
    complexityInfo: 'Predicate-based filtering',
  },
  {
    id: 'pcap-s3-fc-048',
    cardType: 'PCAP 3.3 • filter() with None as Predicate',
    topic: 'Using None as predicate to filter out falsy elements',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What happens when `None` is passed as the first argument to `filter(None, iterable)`?',
    codeSnippet: `mixed = [0, 1, False, True, "", "hello", None, [], [42]]
truthy_only = filter(None, mixed)

print(list(truthy_only))`,
    stdoutExpected: "[1, True, 'hello', [42]]",
    explanationTitle: 'filter(None, ...) Removes All Falsy Elements',
    explanationText:
      'If the first argument to `filter()` is `None`, Python uses the identity truth function, filtering out all falsy values (`0`, `False`, `""`, `None`, `[]`, `{}`) and preserving only truthy items.',
    complexityInfo: 'Boolean identity filtering',
  },
  {
    id: 'pcap-s3-fc-049',
    cardType: 'PCAP 3.3 • sorted() with key Function',
    topic: 'Custom sort ordering using key=lambda',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How does the `key` parameter in `sorted()` control item ordering?',
    codeSnippet: `words = ["banana", "pie", "apple", "kiwi"]
by_length = sorted(words, key=lambda w: len(w))
print(by_length)

by_last_char = sorted(words, key=lambda w: w[-1])
print(by_last_char)`,
    stdoutExpected: `['pie', 'kiwi', 'apple', 'banana']
['banana', 'pie', 'apple', 'kiwi']`,
    explanationTitle: 'key Function Extracts Comparison Key for Each Item',
    explanationText:
      'The `key` parameter takes a single-argument function applied to each element before comparison. Python sorts elements based on the values returned by the `key` function, preserving stable ordering for ties.',
    complexityInfo: 'Custom sort comparison',
  },
  {
    id: 'pcap-s3-fc-050',
    cardType: 'PCAP 3.3 • Multi-Criteria Sorting with Tuples in key',
    topic: 'Sorting by multiple attributes using a tuple in lambda key',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How can you sort items by primary and secondary criteria using a lambda key?',
    codeSnippet: `students = [("Bob", 85), ("Alice", 92), ("Charlie", 85), ("David", 92)]
# Sort by grade descending (-grade), then by name ascending
ranked = sorted(students, key=lambda s: (-s[1], s[0]))
print(ranked)`,
    stdoutExpected: "[('Alice', 92), ('David', 92), ('Bob', 85), ('Charlie', 85)]",
    explanationTitle: 'Tuple-Based Lexicographical Comparison Keys',
    explanationText:
      'Returning a tuple from the key lambda `(criteria1, criteria2)` causes Python to compare elements by `criteria1` first, and break ties using `criteria2`. Negating numeric values reverses that specific criterion.',
    complexityInfo: 'Compound sort hierarchy',
  },
  {
    id: 'pcap-s3-fc-051',
    cardType: 'PCAP 3.3 • list.sort() vs sorted() Built-in',
    topic: 'In-place mutation vs returning a new sorted list',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What are the two major differences between `list.sort()` and `sorted()`?',
    codeSnippet: `nums = [3, 1, 2]
ret_sort = nums.sort() # In-place mutation, returns None
print("nums after sort():", nums)
print("ret_sort:", ret_sort)

data = (5, 2, 8)
new_lst = sorted(data) # Works on any iterable, returns new list
print("new_lst:", new_lst)`,
    stdoutExpected: `nums after sort(): [1, 2, 3]
ret_sort: None
new_lst: [2, 5, 8]`,
    explanationTitle: 'list.sort() Mutates in Place; sorted() Returns a New List',
    explanationText:
      '`list.sort()` is a list method that mutates the existing list in-place and returns `None`. `sorted()` is a built-in function that accepts any iterable and always returns a brand new sorted `list`.',
    complexityInfo: 'Method vs built-in comparison',
  },
  {
    id: 'pcap-s3-fc-052',
    cardType: 'PCAP 3.3 • zip() Built-in Function',
    topic: 'Pairing elements from multiple iterables into tuples',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does `zip()` return in Python 3, and how does it handle sequences of unequal length?',
    codeSnippet: `names = ["Alice", "Bob", "Charlie", "Diana"]
scores = [95, 88, 72]

z = zip(names, scores)
print("Type:", type(z).__name__)
print("Result:", list(z))`,
    stdoutExpected: `Type: zip
Result: [('Alice', 95), ('Bob', 88), ('Charlie', 72)]`,
    explanationTitle: 'zip() Produces Tuples and Truncates to Shortest Iterable',
    explanationText:
      '`zip()` returns an iterator of tuples where the i-th tuple contains the i-th element from each argument sequence. It stops as soon as the shortest input iterable is exhausted.',
    complexityInfo: 'Tuple pairing iterator',
  },
  {
    id: 'pcap-s3-fc-053',
    cardType: 'PCAP 3.3 • Unzipping with zip(*paired)',
    topic: 'Reversing a zip operation using the unpack operator',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How do you "unzip" a list of paired tuples back into individual separated sequences?',
    codeSnippet: `pairs = [('A', 1), ('B', 2), ('C', 3)]
letters, numbers = zip(*pairs)

print("letters:", letters)
print("numbers:", numbers)`,
    stdoutExpected: `letters: ('A', 'B', 'C')
numbers: (1, 2, 3)`,
    explanationTitle: 'zip(*pairs) Reconstitutes Original Dimensions',
    explanationText:
      'Passing `*pairs` unpacks the collection of tuples as separate positional arguments into `zip()`. `zip()` groups the first elements together and the second elements together, reconstituting tuples.',
    complexityInfo: 'Sequence transposition pattern',
  },
  {
    id: 'pcap-s3-fc-054',
    cardType: 'PCAP 3.3 • any() Built-in Function',
    topic: 'Testing if at least one iterable element is truthy with short-circuiting',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How does `any()` evaluate an iterable, and what is its return value on an empty sequence?',
    codeSnippet: `print(any([0, False, "", 5, None]))
print(any([0, False, ""]))
print(any([])) # Empty sequence test`,
    stdoutExpected: `True
False
False`,
    explanationTitle: 'any() Returns True if Any Element Is Truthy; False on Empty',
    explanationText:
      '`any(iterable)` returns `True` if any element is truthy, short-circuiting and stopping evaluation immediately upon encountering the first truthy value. On an empty iterable, it returns `False`.',
    complexityInfo: 'Short-circuit predicate disjunction',
  },
  {
    id: 'pcap-s3-fc-055',
    cardType: 'PCAP 3.3 • all() Built-in Function',
    topic: 'Testing if all iterable elements are truthy with vacuous truth on empty',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How does `all()` evaluate an iterable, and what does it return for an empty sequence?',
    codeSnippet: `print(all([True, 1, "hello"]))
print(all([True, 0, "hello"])) # 0 is falsy
print(all([])) # Empty sequence test (vacuous truth!)`,
    stdoutExpected: `True
False
True`,
    explanationTitle: 'all() Returns True if All Truthy; True on Empty Sequence',
    explanationText:
      '`all(iterable)` returns `True` if every element is truthy. It short-circuits to `False` on the first falsy value. Crucially for exams: on an empty iterable, `all([])` returns `True` (vacuous truth).',
    complexityInfo: 'Vacuous truth and conjunction semantics',
  },
  {
    id: 'pcap-s3-fc-056',
    cardType: 'PCAP 3.3 • all() with Generator Expression Short-Circuit',
    topic: 'Preventing unnecessary computations via generator short-circuiting',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How does passing a generator expression to `all()` or `any()` ensure efficiency?',
    codeSnippet: `evaluated = []

def check(n):
    evaluated.append(n)
    return n > 0

nums = [5, 2, -1, 10, 20]
# all() short-circuits as soon as check(-1) returns False
res = all(check(x) for x in nums)

print("all result:", res)
print("evaluated:", evaluated)`,
    stdoutExpected: `all result: False
evaluated: [5, 2, -1]`,
    explanationTitle: 'Generator Expressions Allow Short-Circuit Termination',
    explanationText:
      'Because generator expressions yield items lazily, `all()` or `any()` pulls items only until the outcome is determined (`False` for `all()`, `True` for `any()`), stopping immediately without evaluating remaining items.',
    complexityInfo: 'Lazy predicate evaluation',
  },
  {
    id: 'pcap-s3-fc-057',
    cardType: 'PCAP 3.3 • Combining map() and filter()',
    topic: 'Composing functional data pipelines',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How do you compose `filter()` and `map()` into a single transformation pipeline?',
    codeSnippet: `data = [1, 2, 3, 4, 5, 6]

# Step 1: filter even numbers (2, 4, 6)
# Step 2: map to square them (4, 16, 36)
pipeline = map(lambda x: x ** 2, filter(lambda x: x % 2 == 0, data))
print(list(pipeline))`,
    stdoutExpected: '[4, 16, 36]',
    explanationTitle: 'Composition of filter() and map() Iterators',
    explanationText:
      'By nesting `filter()` inside `map()`, only elements passing the predicate are forwarded to the transformation function. Both remain lazy iterators until materialized by `list()`.',
    complexityInfo: 'Functional stream pipelining',
  },
  {
    id: 'pcap-s3-fc-058',
    cardType: 'PCAP 3.3 • List Comprehension vs map/filter',
    topic: 'Idiomatic equivalence between comprehensions and functional built-ins',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What is the idiomatic Python list comprehension equivalent to `list(map(f, filter(p, seq)))`?',
    codeSnippet: `seq = [1, 2, 3, 4, 5, 6]
functional = list(map(lambda x: x * 10, filter(lambda x: x % 2 != 0, seq)))
comprehension = [x * 10 for x in seq if x % 2 != 0]

print(functional == comprehension)
print(comprehension)`,
    stdoutExpected: `True
[10, 30, 50]`,
    explanationTitle: 'Comprehension Equivalence to map() and filter()',
    explanationText:
      '`[f(x) for x in seq if p(x)]` is functionally equivalent to `list(map(f, filter(p, seq)))`. Comprehensions are often preferred in Python for readability and avoiding lambda overhead.',
    complexityInfo: 'Syntactic equivalence and idioms',
  },
  {
    id: 'pcap-s3-fc-059',
    cardType: 'PCAP 3.3 • enumerate() Built-in Function',
    topic: 'Generating index-value pairs with optional start index',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does `enumerate()` yield on each iteration, and how can you change the starting index?',
    codeSnippet: `colors = ['red', 'green', 'blue']
indexed = list(enumerate(colors, start=1))

print(indexed)
for idx, val in enumerate(colors, start=10):
    if idx == 11:
        print("At 11:", val)`,
    stdoutExpected: `[(1, 'red'), (2, 'green'), (3, 'blue')]
At 11: green`,
    explanationTitle: 'enumerate(iterable, start=0) Yields (index, value) Pairs',
    explanationText:
      '`enumerate()` returns an iterator yielding 2-element tuples `(index, item)`. The optional `start` keyword sets the initial counter value (defaulting to 0).',
    complexityInfo: 'Indexed iteration helper',
  },
  {
    id: 'pcap-s3-fc-060',
    cardType: 'PCAP 3.3 • reversed() vs list.reverse()',
    topic: 'Reverse iterator vs in-place sequence mutation',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What is the difference between built-in `reversed(seq)` and method `seq.reverse()`?',
    codeSnippet: `orig = [10, 20, 30]
rev_it = reversed(orig)

print("Type of rev_it:", type(rev_it).__name__)
print("orig unchanged:", orig)
print("rev_it as list:", list(rev_it))

ret = orig.reverse() # In-place mutation
print("orig after reverse():", orig)
print("reverse() return value:", ret)`,
    stdoutExpected: `Type of rev_it: list_reverseiterator
orig unchanged: [10, 20, 30]
rev_it as list: [30, 20, 10]
orig after reverse(): [30, 20, 10]
reverse() return value: None`,
    explanationTitle: 'reversed() Yields Reverse Iterator; reverse() Mutates in Place',
    explanationText:
      '`reversed()` returns a reverse iterator without modifying the original sequence. `list.reverse()` reverses the list in-place and returns `None`.',
    complexityInfo: 'Iterator vs mutation semantics',
  },

  // ==========================================
  // CHAPTER 3.4: Closures, Nested Scopes & Variable Binding (Cards 61-70 in Part 2)
  // ==========================================
  {
    id: 'pcap-s3-fc-061',
    cardType: 'PCAP 3.4 • Closure Definition',
    topic: 'Inner function retaining access to enclosing lexical scope',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What is a closure in Python?',
    codeSnippet: `def make_printer(msg):
    def printer():
        print("Message:", msg)
    return printer

p = make_printer("Hello Closures")
# make_printer has completed, yet printer retains 'msg'!
p()`,
    stdoutExpected: 'Message: Hello Closures',
    explanationTitle: 'Closures Bind Enclosing Scope Variables',
    explanationText:
      'A closure is an inner function that remembers and retains access to variables in its enclosing lexical scope, even after the outer function has finished executing and its stack frame is popped.',
    complexityInfo: 'Lexical scoping and closure mechanics',
  },
  {
    id: 'pcap-s3-fc-062',
    cardType: 'PCAP 3.4 • Closure Three Prerequisites',
    topic: 'The three technical criteria required to form a closure in Python',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What three conditions must be satisfied for a Python closure to exist?',
    codeSnippet: `def outer(x):          # 1. Nested function inside an outer function
    def inner():       # 2. Inner function references variable from enclosing scope (x)
        return x * 2
    return inner       # 3. Outer function returns the inner function object

fn = outer(21)
print(fn())`,
    stdoutExpected: '42',
    explanationTitle: 'Three Structural Requirements for a Closure',
    explanationText:
      'A closure requires: (1) an enclosing (outer) function containing a nested (inner) function, (2) the inner function must reference at least one variable in the enclosing function scope, (3) the enclosing function must return the inner function.',
    complexityInfo: 'Closure architectural criteria',
  },
  {
    id: 'pcap-s3-fc-063',
    cardType: 'PCAP 3.4 • __closure__ Attribute and Cell Objects',
    topic: 'Inspecting closure bindings via __closure__ and cell_contents',
    category: 'T1: Built-ins',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How can you programmatically inspect the captured variables stored inside a closure?',
    codeSnippet: `def outer(val):
    def inner():
        return val
    return inner

fn = outer("secret")
print("Has closure:", fn.__closure__ is not None)
print("Number of cells:", len(fn.__closure__))
cell = fn.__closure__[0]
print("Cell content:", cell.cell_contents)`,
    stdoutExpected: `Has closure: True
Number of cells: 1
Cell content: secret`,
    explanationTitle: '__closure__ Stores a Tuple of Cell Objects',
    explanationText:
      'Functions that form a closure have a non-None `__closure__` attribute containing a tuple of `cell` objects. Each cell holds a reference to a captured variable via `cell.cell_contents`. If no variables are captured, `__closure__` is `None`.',
    complexityInfo: 'Internal closure data structure',
  },
  {
    id: 'pcap-s3-fc-064',
    cardType: 'PCAP 3.4 • Reading vs Modifying Enclosing Variables',
    topic: 'Reading enclosing scope is implicit; modifying requires nonlocal',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'Why does reading an enclosing variable work automatically, while reassigning it triggers an UnboundLocalError?',
    codeSnippet: `def outer():
    count = 0
    def inner():
        try:
            count += 1 # Assignment makes 'count' local, but read happens first!
        except UnboundLocalError as err:
            print("Caught:", type(err).__name__)
    inner()

outer()`,
    stdoutExpected: 'Caught: UnboundLocalError',
    explanationTitle: 'Rebinding Requires the nonlocal Keyword',
    explanationText:
      'Reading an enclosing variable follows the LEGB search order. But any assignment statement (`count = ...` or `count += 1`) causes Python to treat the symbol as local to `inner`. Reading it before assignment raises `UnboundLocalError`.',
    complexityInfo: 'Local assignment shadow analysis',
  },
  {
    id: 'pcap-s3-fc-065',
    cardType: 'PCAP 3.4 • nonlocal Keyword',
    topic: 'Rebinding enclosing non-global variables with nonlocal',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What keyword enables an inner function to rebind a variable in an enclosing (non-global) scope?',
    codeSnippet: `def make_counter(start=0):
    count = start
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

c1 = make_counter(10)
print(c1(), c1(), c1())`,
    stdoutExpected: '11 12 13',
    explanationTitle: 'nonlocal Binds to Nearest Enclosing Scope',
    explanationText:
      'The `nonlocal` statement declares that a name refers to a previously bound variable in the nearest enclosing scope (excluding the global module scope), allowing it to be modified and reassigned.',
    complexityInfo: 'Enclosing scope rebinding',
  },
  {
    id: 'pcap-s3-fc-066',
    cardType: 'PCAP 3.4 • nonlocal vs global Scope Targets',
    topic: 'nonlocal cannot target global scope or unassigned names',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What error occurs if `nonlocal` targets a variable that only exists in the global scope or does not exist at all?',
    codeSnippet: `# Attempting:
# g_var = 10
# def outer():
#     nonlocal g_var -> SyntaxError: no binding for nonlocal 'g_var' found

def outer():
    x = 1
    def inner():
        nonlocal x
        x = 5
        return x
    return inner()

print(outer())`,
    stdoutExpected: '5',
    explanationTitle: 'nonlocal Requires an Enclosing Non-Global Binding',
    explanationText:
      'Unlike `global` (which can introduce new global variables), `nonlocal` MUST find an already existing variable in an enclosing function scope. If none exists (or it only exists globally), a compile-time `SyntaxError` is raised.',
    complexityInfo: 'Compile-time binding validation',
  },
  {
    id: 'pcap-s3-fc-067',
    cardType: 'PCAP 3.4 • Function Factories with Closures',
    topic: 'Generating specialized functions using closure parameterization',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do function factories leverage closures to produce custom-configured functions?',
    codeSnippet: `def make_power_fn(exponent):
    def power(base):
        return base ** exponent
    return power

square = make_power_fn(2)
cube = make_power_fn(3)

print("square(5):", square(5))
print("cube(5):", cube(5))`,
    stdoutExpected: `square(5): 25
cube(5): 125`,
    explanationTitle: 'Function Factories Generate Configured Functions',
    explanationText:
      'A function factory uses closures to bake arguments (like `exponent`) into newly created inner functions. Each invocation of the factory produces a distinct function object maintaining its own isolated closure state.',
    complexityInfo: 'Closure generator pattern',
  },
  {
    id: 'pcap-s3-fc-068',
    cardType: 'PCAP 3.4 • Late Binding Closure Trap in Loops',
    topic: 'Functions in loops capture variables by reference, not value',
    category: 'T2: Gotchas',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '3.4',
    section: 'Section 3',
    question: 'Why does creating a list of lambdas in a `for` loop cause all of them to evaluate to the loop last value?',
    codeSnippet: `funcs = []
for i in range(3):
    funcs.append(lambda: i) # Late binding: captures variable 'i', not its current value!

results = [f() for f in funcs]
print(results)`,
    stdoutExpected: '[2, 2, 2]',
    explanationTitle: 'Closures Bind Names by Reference (Late Binding)',
    explanationText:
      'Python closures bind variables by reference, not by value. All three lambdas look up the symbol `i` when called; by that time, the loop has completed and `i` equals `2`, so all functions return `2`.',
    complexityInfo: 'Late binding loop trap',
  },
  {
    id: 'pcap-s3-fc-069',
    cardType: 'PCAP 3.4 • Fixing Late Binding with Default Arguments',
    topic: 'Freezing loop variables using default parameter binding at definition time',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do you fix the late-binding loop trap so each function captures the current iteration value?',
    codeSnippet: `funcs = []
for i in range(3):
    # Default argument 'val=i' is evaluated eagerly at definition time!
    funcs.append(lambda val=i: val)

results = [f() for f in funcs]
print(results)`,
    stdoutExpected: '[0, 1, 2]',
    explanationTitle: 'Default Argument Freezes Value at Function Creation Time',
    explanationText:
      'Because default parameter expressions are evaluated when the function is defined, `lambda val=i: val` binds the current value of `i` into each function instance default argument, decoupling it from later loop mutations.',
    complexityInfo: 'Early binding idiom',
  },
  {
    id: 'pcap-s3-fc-070',
    cardType: 'PCAP 3.4 • Independent Closure State Instances',
    topic: 'Multiple calls to factory produce distinct, isolated closure environments',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.4',
    section: 'Section 3',
    question: 'Do multiple instances created by the same closure factory share or isolate their state?',
    codeSnippet: `def make_bank_account(balance):
    def deposit(amount):
        nonlocal balance
        balance += amount
        return balance
    return deposit

acc1 = make_bank_account(100)
acc2 = make_bank_account(500)

acc1(50)
print("acc1:", acc1(0))
print("acc2:", acc2(0))`,
    stdoutExpected: `acc1: 150
acc2: 500`,
    explanationTitle: 'Each Factory Invocation Creates an Isolated Closure Frame',
    explanationText:
      'Every time the enclosing function is called, a completely new execution frame and set of cell objects are allocated. Changes to `acc1` balance have zero effect on `acc2`.',
    complexityInfo: 'State isolation across closure instances',
  },
];
