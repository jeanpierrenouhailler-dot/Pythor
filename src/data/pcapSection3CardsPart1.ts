import { Flashcard } from '../types';

export const section3CardsPart1: Flashcard[] = [
  // ==========================================
  // CHAPTER 3.1: Advanced Functions, Parameters, *args, **kwargs & LEGB Scope (Cards 1-20)
  // ==========================================
  {
    id: 'pcap-s3-fc-001',
    cardType: 'PCAP 3.1 • Function Return Value',
    topic: 'Default return value when return statement is omitted',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is returned by a Python function that terminates without an explicit return statement or with an empty return?',
    codeSnippet: `def greet(name):
    print("Hello", name)

res = greet("Python")
print(res is None)
print(type(res).__name__)`,
    stdoutExpected: `Hello Python
True
NoneType`,
    explanationTitle: 'Implicit Return of None',
    explanationText:
      'In Python, every function returns a value. If execution reaches the end of the function body without a return statement, or encounters a bare `return`, the built-in constant `None` (of type NoneType) is returned automatically.',
    complexityInfo: 'Return value semantics',
  },
  {
    id: 'pcap-s3-fc-002',
    cardType: 'PCAP 3.1 • Positional vs Keyword Arguments',
    topic: 'Mixing positional and keyword arguments at call time',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What rule dictates the ordering of positional and keyword arguments during a function call, and what error occurs if violated?',
    codeSnippet: `def compute(a, b, c):
    return a + 2 * b + 3 * c

# Valid: positional first, then keyword
print(compute(1, c=3, b=2))

# Invalid attempt:
# compute(a=1, 2, c=3) -> SyntaxError: positional argument follows keyword argument`,
    stdoutExpected: '14',
    explanationTitle: 'Positional Arguments Precede Keyword Arguments',
    explanationText:
      'In Python function calls, all positional arguments must precede any keyword arguments. Placing a positional argument after a keyword argument causes a compile-time `SyntaxError: positional argument follows keyword argument`.',
    complexityInfo: 'Call-site argument syntax',
  },
  {
    id: 'pcap-s3-fc-003',
    cardType: 'PCAP 3.1 • Default Parameter Trap',
    topic: 'Mutable default parameter persistence across function calls',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is printed when a function with a default mutable argument (like a list) is repeatedly invoked without passing that argument?',
    codeSnippet: `def append_item(val, target=[]):
    target.append(val)
    return target

print(append_item(1))
print(append_item(2))
print(append_item(3, []))
print(append_item(4))`,
    stdoutExpected: `[1]
[1, 2]
[3]
[1, 2, 4]`,
    explanationTitle: 'Default Arguments Are Evaluated Once at Definition Time',
    explanationText:
      'In Python, default parameter expressions are evaluated once when the function is defined, NOT each time the function is called. A mutable object (list, dict, set) used as a default is shared across all subsequent invocations that do not provide an explicit argument.',
    complexityInfo: 'Mutable default argument trap',
  },
  {
    id: 'pcap-s3-fc-004',
    cardType: 'PCAP 3.1 • Safe Default Argument Pattern',
    topic: 'Using None sentinel for optional mutable parameters',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the canonical idiomatic Python pattern to safely provide a fresh mutable default object on each function call?',
    codeSnippet: `def append_safe(val, target=None):
    if target is None:
        target = []
    target.append(val)
    return target

print(append_safe('a'))
print(append_safe('b'))`,
    stdoutExpected: `['a']
['b']`,
    explanationTitle: 'None Sentinel with Fresh Instantiation',
    explanationText:
      'To prevent mutable sharing across calls, idiomatic Python sets the default parameter value to `None`. Inside the body, `if target is None:` checks for the sentinel and instantiates a brand new list or dictionary for that invocation.',
    complexityInfo: 'Defensive parameter initialization',
  },
  {
    id: 'pcap-s3-fc-005',
    cardType: 'PCAP 3.1 • Parameter Definition Ordering',
    topic: 'Ordering default and non-default parameters in def',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'Can a parameter without a default value follow a parameter with a default value in a function definition header?',
    codeSnippet: `# Attempting: def calc(a=10, b): pass
# Result: SyntaxError: non-default parameter follows default parameter

def calc(b, a=10):
    return b * a

print(calc(5))
print(calc(5, 2))`,
    stdoutExpected: `50
10`,
    explanationTitle: 'Non-Default Parameters Must Precede Default Parameters',
    explanationText:
      'In Python function definitions, all non-default positional parameters must appear before any parameter with a default value. Violating this triggers `SyntaxError: non-default parameter follows default parameter`.',
    complexityInfo: 'Function signature grammar',
  },
  {
    id: 'pcap-s3-fc-006',
    cardType: 'PCAP 3.1 • Variable Positional Arguments (*args)',
    topic: 'Tuple packing with asterisk parameter syntax',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What data structure does `*args` pack positional arguments into inside the function body?',
    codeSnippet: `def summarize(first, *args):
    print("first:", first)
    print("args type:", type(args).__name__)
    print("args value:", args)

summarize(10, 20, 30, 40)`,
    stdoutExpected: `first: 10
args type: tuple
args value: (20, 30, 40)`,
    explanationTitle: '*args Packs Positional Arguments into an Immutable Tuple',
    explanationText:
      'The `*` prefix in a parameter declaration collects any extra positional arguments into an immutable tuple. If no extra arguments are supplied, `args` evaluates to an empty tuple `()`.',
    complexityInfo: 'Positional argument packing',
  },
  {
    id: 'pcap-s3-fc-007',
    cardType: 'PCAP 3.1 • Variable Keyword Arguments (**kwargs)',
    topic: 'Dictionary packing with double-asterisk parameter syntax',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What data structure does `**kwargs` pack arbitrary keyword arguments into inside the function body?',
    codeSnippet: `def configure(name, **kwargs):
    print("name:", name)
    print("kwargs type:", type(kwargs).__name__)
    print("items:", sorted(kwargs.items()))

configure("app", host="localhost", port=8080)`,
    stdoutExpected: `name: app
kwargs type: dict
items: [('host', 'localhost'), ('port', 8080)]`,
    explanationTitle: '**kwargs Packs Keyword Arguments into a Dictionary',
    explanationText:
      'The `**` prefix in a parameter declaration collects any extra keyword arguments (key-value pairs) into a standard dictionary. Keys are converted to strings matching argument names.',
    complexityInfo: 'Keyword argument packing',
  },
  {
    id: 'pcap-s3-fc-008',
    cardType: 'PCAP 3.1 • Call-Site Unpacking (* and **)',
    topic: 'Unpacking sequence into positional and dict into keyword arguments',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How do the `*` and `**` operators behave when applied at call time to iterables and dictionaries?',
    codeSnippet: `def calculate(a, b, c, op="add"):
    if op == "add":
        return a + b + c
    return a * b * c

nums = [2, 3, 4]
opts = {"op": "mul"}
print(calculate(*nums, **opts))`,
    stdoutExpected: '24',
    explanationTitle: 'Call-Site Sequence and Mapping Unpacking',
    explanationText:
      'At call time, `*iterable` unpacks sequence elements into separate positional arguments, while `**dict` unpacks key-value pairs into matching keyword arguments. Keys must match parameter names or `TypeError` is raised.',
    complexityInfo: 'Call-site unpacking semantics',
  },
  {
    id: 'pcap-s3-fc-009',
    cardType: 'PCAP 3.1 • Keyword-Only Parameters',
    topic: 'Bare asterisk (*) parameter enforcing keyword-only arguments',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What does a bare asterisk `*` in a function parameter list enforce?',
    codeSnippet: `def create_user(name, *, role="user", active=True):
    return f"{name}:{role}:{active}"

print(create_user("Alice", role="admin"))

# Attempting: create_user("Bob", "admin")
# Result: TypeError: create_user() takes 1 positional argument but 2 were given`,
    stdoutExpected: 'Alice:admin:True',
    explanationTitle: 'Bare Asterisk Enforces Keyword-Only Parameters',
    explanationText:
      'Any parameters defined after a bare `*` (or after `*args`) must be supplied as keyword arguments at call time. Supplying them positionally raises `TypeError: function takes N positional argument but M were given`.',
    complexityInfo: 'Keyword-only parameter constraint',
  },
  {
    id: 'pcap-s3-fc-010',
    cardType: 'PCAP 3.1 • Positional-Only Parameters (/)',
    topic: 'Forward slash parameter syntax enforcing positional-only arguments',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What does a forward slash `/` in a function parameter list enforce in Python 3.8+?',
    codeSnippet: `def divide(x, y, /):
    return x // y

print(divide(20, 4))

# Attempting: divide(x=20, y=4)
# Result: TypeError: divide() got some positional-only arguments passed as keyword arguments: 'x, y'`,
    stdoutExpected: '5',
    explanationTitle: 'Forward Slash Enforces Positional-Only Arguments',
    explanationText:
      'Parameters defined before a `/` are positional-only. They cannot be passed as keyword arguments. Calling them with keywords triggers `TypeError: got some positional-only arguments passed as keyword arguments`.',
    complexityInfo: 'Positional-only parameter constraint',
  },
  {
    id: 'pcap-s3-fc-011',
    cardType: 'PCAP 3.1 • Parameter Ordering Hierarchy',
    topic: 'Complete canonical parameter order in def signatures',
    category: 'T3: Theory',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the full valid sequence order for all parameter types in a Python function definition header?',
    codeSnippet: `def full_sig(pos_only, /, standard, default=1, *args, kw_only, kw_default=2, **kwargs):
    return (pos_only, standard, default, args, kw_only, kw_default, kwargs)

res = full_sig(10, 20, 30, 40, 50, kw_only=60, extra="val")
print(res[0], res[1], res[2], res[3], res[4], res[5], res[6]["extra"])`,
    stdoutExpected: '10 20 30 (40, 50) 60 2 val',
    explanationTitle: 'Complete Formal Parameter Ordering',
    explanationText:
      'The strict parameter declaration order is: (1) positional-only parameters, (2) `/`, (3) standard positional-or-keyword, (4) default positional parameters, (5) `*args`, (6) keyword-only parameters (with or without defaults), (7) `**kwargs`.',
    complexityInfo: 'Python language formal syntax',
  },
  {
    id: 'pcap-s3-fc-012',
    cardType: 'PCAP 3.1 • LEGB Scope Rule',
    topic: 'Namespace lookup hierarchy: Local, Enclosing, Global, Built-in',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the LEGB rule and in what exact order does Python search for variable names?',
    codeSnippet: `x = "Global"

def outer():
    x = "Enclosing"
    def inner():
        x = "Local"
        return x
    return inner()

print(outer())
print(x)`,
    stdoutExpected: `Local
Global`,
    explanationTitle: 'LEGB Namespace Search Order',
    explanationText:
      'When resolving a name, Python searches scopes from inside out: (L)ocal -> (E)nclosing functions -> (G)lobal (module level) -> (B)uilt-in namespace. It uses the first match found and stops searching.',
    complexityInfo: 'Name resolution semantics',
  },
  {
    id: 'pcap-s3-fc-013',
    cardType: 'PCAP 3.1 • Global Keyword',
    topic: 'Rebinding global module variables from inside a function',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What keyword allows a function to modify and rebind a variable in the module-level global namespace?',
    codeSnippet: `counter = 0

def increment():
    global counter
    counter += 1

increment()
increment()
print("counter:", counter)`,
    stdoutExpected: 'counter: 2',
    explanationTitle: 'global Keyword Enables Rebinding at Module Level',
    explanationText:
      'Without `global counter`, the assignment `counter += 1` treats `counter` as a local variable before assignment, causing `UnboundLocalError`. The `global` statement instructs Python to bind the symbol to the module-level global scope.',
    complexityInfo: 'Global scope mutation',
  },
  {
    id: 'pcap-s3-fc-014',
    cardType: 'PCAP 3.1 • UnboundLocalError Trap',
    topic: 'Assignment makes variable local throughout entire function body',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'Why does accessing a global variable before reassigning it inside a function raise an UnboundLocalError?',
    codeSnippet: `val = 100

def test():
    try:
        print(val) # Triggers error because 'val = 200' exists below!
        val = 200
    except UnboundLocalError as err:
        print("Caught:", type(err).__name__)

test()`,
    stdoutExpected: 'Caught: UnboundLocalError',
    explanationTitle: 'Compile-Time Local Scope Determination',
    explanationText:
      'Python inspects function bodies at compile time. Any variable assigned to anywhere within the function is flagged as a local variable for the ENTIRE function body. Reading it before the assignment statement executes raises `UnboundLocalError`.',
    complexityInfo: 'Python compiler local symbol analysis',
  },
  {
    id: 'pcap-s3-fc-015',
    cardType: 'PCAP 3.1 • Multiple Return Values',
    topic: 'Returning comma-separated values as an implicit tuple',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What Python object is actually produced when a function returns multiple values separated by commas?',
    codeSnippet: `def stats(numbers):
    return min(numbers), max(numbers), sum(numbers)

res = stats([4, 1, 9, 2])
print(type(res).__name__)
print(res)

low, high, total = stats([4, 1, 9, 2])
print("low:", low, "high:", high, "total:", total)`,
    stdoutExpected: `tuple
(1, 9, 16)
low: 1 high: 9 total: 16`,
    explanationTitle: 'Comma-Separated Returns Pack into a Tuple',
    explanationText:
      'In Python, `return a, b, c` creates and returns a single 3-element `tuple`. The caller can receive the tuple directly as a single variable or unpack it into multiple matching variables.',
    complexityInfo: 'Tuple packing and unpacking on return',
  },
  {
    id: 'pcap-s3-fc-016',
    cardType: 'PCAP 3.1 • First-Class Functions',
    topic: 'Passing functions as arguments and storing in data structures',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What does it mean that functions are "first-class citizens" in Python?',
    codeSnippet: `def square(x): return x * x
def cube(x): return x * x * x

operations = [square, cube]
for func in operations:
    print(func.__name__, func(3))`,
    stdoutExpected: `square 9
cube 27`,
    explanationTitle: 'Functions Are Objects with Identity and Attributes',
    explanationText:
      'In Python, functions are first-class objects (instances of `function` type). They can be assigned to variables, stored in collections (lists, dicts), passed as arguments to other functions, and returned from functions.',
    complexityInfo: 'First-class citizen semantics',
  },
  {
    id: 'pcap-s3-fc-017',
    cardType: 'PCAP 3.1 • Higher-Order Functions',
    topic: 'Functions that take or return other functions',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is a higher-order function in Python?',
    codeSnippet: `def apply_twice(func, arg):
    return func(func(arg))

def add_five(n):
    return n + 5

print(apply_twice(add_five, 10))`,
    stdoutExpected: '20',
    explanationTitle: 'Higher-Order Functions Accept or Return Functions',
    explanationText:
      'A higher-order function is any function that accepts one or more functions as arguments, or returns a function as its result. Classic standard built-in examples include `map()`, `filter()`, and `sorted()`.',
    complexityInfo: 'Functional programming paradigm',
  },
  {
    id: 'pcap-s3-fc-018',
    cardType: 'PCAP 3.1 • Function Annotations (__annotations__)',
    topic: 'Type hints syntax and the __annotations__ dictionary attribute',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'Does Python enforce type annotations at runtime, and where are they stored?',
    codeSnippet: `def multiply(a: int, b: float = 2.5) -> float:
    return a * b

print(multiply("Py", 3)) # Runtime does NOT enforce int/float!
print(sorted(multiply.__annotations__.items()))`,
    stdoutExpected: `PyPyPy
[('a', <class 'int'>), ('b', <class 'float'>), ('return', <class 'float'>)]`,
    explanationTitle: 'Annotations Are Stored in __annotations__ Without Runtime Enforcement',
    explanationText:
      'Python function annotations (type hints) are purely syntactic and are stored in the function attribute `__annotations__`. CPython does not enforce them at runtime; passing arguments of different types executes normally.',
    complexityInfo: 'Runtime type hints inspection',
  },
  {
    id: 'pcap-s3-fc-019',
    cardType: 'PCAP 3.1 • Recursion and RecursionError',
    topic: 'Maximum recursion depth and sys.getrecursionlimit()',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What exception is raised when a recursive function exceeds Python call stack depth limit?',
    codeSnippet: `import sys

def runaway(depth):
    return runaway(depth + 1)

try:
    runaway(1)
except RecursionError as err:
    print("Caught:", type(err).__name__)
    print("Limit is int:", isinstance(sys.getrecursionlimit(), int))`,
    stdoutExpected: `Caught: RecursionError
Limit is int: True`,
    explanationTitle: 'RecursionError Protects C Stack Overflow',
    explanationText:
      'Python guards against infinite recursion and C stack overflow by limiting call depth (default is typically 1000). Exceeding this limit raises `RecursionError` (which subclasses `RuntimeError`).',
    complexityInfo: 'Call stack limits and safety',
  },
  {
    id: 'pcap-s3-fc-020',
    cardType: 'PCAP 3.1 • Pass-By-Assignment Semantics',
    topic: 'Object reference sharing vs reassignment in function calls',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How does Python pass arguments to functions (pass-by-value vs pass-by-reference)?',
    codeSnippet: `def modify(lst, num):
    lst.append(99) # In-place mutation of mutable object
    num = num + 10 # Rebinding local variable to new int

my_list = [1, 2]
my_num = 5
modify(my_list, my_num)
print("my_list:", my_list)
print("my_num:", my_num)`,
    stdoutExpected: `my_list: [1, 2, 99]
my_num: 5`,
    explanationTitle: 'Pass-By-Assignment (Call-By-Object-Reference)',
    explanationText:
      'Python uses "call by object reference" (pass-by-assignment). Mutating a mutable argument in-place modifies the original object outside. However, reassigning the parameter name inside (`num = ...`) merely changes a local reference without affecting the caller.',
    complexityInfo: 'Evaluation strategy and memory binding',
  },

  // ==========================================
  // CHAPTER 3.2: Generator Functions, yield & Iterator Protocol (Cards 21-35 in Part 1)
  // ==========================================
  {
    id: 'pcap-s3-fc-021',
    cardType: 'PCAP 3.2 • Generator Definition',
    topic: 'Presence of yield keyword creates generator function',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What makes a function a generator function in Python, and what happens when it is called?',
    codeSnippet: `def count_to(n):
    print("Function started")
    for i in range(1, n + 1):
        yield i

gen = count_to(3)
print("Type:", type(gen).__name__)
# Notice: 'Function started' was NOT printed yet!`,
    stdoutExpected: 'Type: generator',
    explanationTitle: 'Calling a Generator Function Does Not Execute Body Immediately',
    explanationText:
      'Any function containing the `yield` keyword is compiled as a generator function. Calling it does NOT execute the body immediately; instead, it instantly returns a generator iterator object in a paused state.',
    complexityInfo: 'Generator initialization and lazy invocation',
  },
  {
    id: 'pcap-s3-fc-022',
    cardType: 'PCAP 3.2 • yield vs return State Suspension',
    topic: 'Execution frame preservation across yield statements',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How does `yield` differ fundamentally from `return` in terms of function execution state?',
    codeSnippet: `def step_tracker():
    step = 1
    yield step
    step += 10
    yield step

gen = step_tracker()
print(next(gen))
print(next(gen))`,
    stdoutExpected: `1
11`,
    explanationTitle: 'yield Suspends Execution and Preserves Local Frame',
    explanationText:
      'Whereas `return` terminates function execution and destroys its stack frame, `yield` pauses execution, yields a value to the caller, and retains all local variable values and execution pointers until resumed.',
    complexityInfo: 'Execution frame suspension',
  },
  {
    id: 'pcap-s3-fc-023',
    cardType: 'PCAP 3.2 • next() Built-in Function',
    topic: 'Resuming generator execution with built-in next()',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What built-in function advances an iterator or generator to its next yield point?',
    codeSnippet: `def letters():
    yield 'A'
    yield 'B'

g = letters()
val1 = next(g)
val2 = next(g)
print(val1, val2)`,
    stdoutExpected: 'A B',
    explanationTitle: 'next() Calls __next__() on Iterators',
    explanationText:
      'The built-in `next(iterator)` function invokes the underlying `__next__()` method on the iterator, resuming execution until the next `yield` expression is evaluated.',
    complexityInfo: 'Iterator advancement',
  },
  {
    id: 'pcap-s3-fc-024',
    cardType: 'PCAP 3.2 • StopIteration Exception',
    topic: 'Signaling end of iteration when generator exhausts',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What exception is raised when next() is called on an exhausted generator or iterator?',
    codeSnippet: `def single():
    yield 42

g = single()
print(next(g))
try:
    next(g)
except StopIteration:
    print("Caught StopIteration!")`,
    stdoutExpected: `42
Caught StopIteration!`,
    explanationTitle: 'StopIteration Signals End of Stream',
    explanationText:
      'When a generator function finishes executing (returns or reaches the end of its block), any subsequent call to `next()` raises a `StopIteration` exception to signal termination of the sequence.',
    complexityInfo: 'Iterator termination signal',
  },
  {
    id: 'pcap-s3-fc-025',
    cardType: 'PCAP 3.2 • next() with Default Fallback Value',
    topic: 'Suppressing StopIteration using the two-argument form of next()',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How can you call `next()` on an exhausted iterator without raising a StopIteration exception?',
    codeSnippet: `def numbers():
    yield 100

g = numbers()
print(next(g, -1))
print(next(g, -1))
print(next(g, "EMPTY"))`,
    stdoutExpected: `100
-1
EMPTY`,
    explanationTitle: 'next(iterator, default) Suppresses StopIteration',
    explanationText:
      'The built-in `next()` accepts an optional second argument: `next(iterator, default)`. If the iterator is exhausted, instead of raising `StopIteration`, it returns the specified default fallback value.',
    complexityInfo: 'Defensive iteration pattern',
  },
  {
    id: 'pcap-s3-fc-026',
    cardType: 'PCAP 3.2 • for Loops and StopIteration',
    topic: 'Automatic exception handling and iterator protocol in for loops',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How does Python `for` loop handle generator exhaustion under the hood?',
    codeSnippet: `def countdown(n):
    while n > 0:
        yield n
        n -= 1

output = []
for val in countdown(3):
    output.append(val)

print(output)`,
    stdoutExpected: '[3, 2, 1]',
    explanationTitle: 'for Loops Automatically Catch StopIteration',
    explanationText:
      'A Python `for` loop calls `iter()` on the target, repeatedly invokes `__next__()` to retrieve items, and automatically catches and terminates upon encountering `StopIteration` without error.',
    complexityInfo: 'Language loop mechanics',
  },
  {
    id: 'pcap-s3-fc-027',
    cardType: 'PCAP 3.2 • Iterator Protocol (__iter__ and __next__)',
    topic: 'The two dunder methods defining the Python iterator protocol',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What two special dunder methods must an object implement to satisfy the Python iterator protocol?',
    codeSnippet: `class Evens:
    def __init__(self, limit):
        self.val = 0
        self.limit = limit
    def __iter__(self):
        return self
    def __next__(self):
        if self.val >= self.limit:
            raise StopIteration
        res = self.val
        self.val += 2
        return res

print(list(Evens(7)))`,
    stdoutExpected: '[0, 2, 4, 6]',
    explanationTitle: 'Iterator Protocol: __iter__() and __next__()',
    explanationText:
      'The iterator protocol requires: (1) `__iter__()` which must return the iterator object itself (`self`), and (2) `__next__()` which returns the next item or raises `StopIteration`.',
    complexityInfo: 'Dunder protocol compliance',
  },
  {
    id: 'pcap-s3-fc-028',
    cardType: 'PCAP 3.2 • Generator Identity with iter()',
    topic: 'Generators are their own iterators (iter(g) is g)',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What is returned when built-in `iter()` is called on a generator object?',
    codeSnippet: `def my_gen():
    yield 1

g = my_gen()
it = iter(g)
print("it is g:", it is g)
print(hasattr(g, '__iter__') and hasattr(g, '__next__'))`,
    stdoutExpected: `it is g: True
True`,
    explanationTitle: 'A Generator Is Both an Iterable and an Iterator',
    explanationText:
      'All generator objects implement both `__iter__()` and `__next__()`. Calling `iter(g)` returns `g` itself (`iter(g) is g`), confirming that generators are self-iterating.',
    complexityInfo: 'Object identity and type traits',
  },
  {
    id: 'pcap-s3-fc-029',
    cardType: 'PCAP 3.2 • Generator Exhaustion is One-Way',
    topic: 'Generators cannot be rewound or restarted once consumed',
    category: 'T2: Gotchas',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What happens if you iterate over an already-exhausted generator a second time?',
    codeSnippet: `def seq():
    yield 1
    yield 2

g = seq()
list1 = list(g)
list2 = list(g) # Second iteration on same generator!

print("list1:", list1)
print("list2:", list2)`,
    stdoutExpected: `list1: [1, 2]
list2: []`,
    explanationTitle: 'Generators Are Single-Pass Consumable Streams',
    explanationText:
      'Generators are one-way data pipelines. Once exhausted, they remain exhausted and yield nothing on further iterations. To iterate again, you must invoke the generator function anew to create a fresh generator object.',
    complexityInfo: 'Stream consumption lifecycle',
  },
  {
    id: 'pcap-s3-fc-030',
    cardType: 'PCAP 3.2 • Generator Expressions vs List Comprehensions',
    topic: 'Parentheses syntax creates lazy generator expression',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What type of object is created by enclosing a comprehension in parentheses `(x*2 for x in data)`?',
    codeSnippet: `nums = [1, 2, 3]
comp = [x * 2 for x in nums]
gen_exp = (x * 2 for x in nums)

print("comp type:", type(comp).__name__)
print("gen_exp type:", type(gen_exp).__name__)
print(next(gen_exp), next(gen_exp))`,
    stdoutExpected: `comp type: list
gen_exp type: generator
2 4`,
    explanationTitle: 'Parentheses Form Generator Expressions',
    explanationText:
      'While square brackets `[...]` produce an eager list comprehension that allocates memory for all elements immediately, parentheses `(...)` create a lazy generator expression evaluated item-by-item on demand.',
    complexityInfo: 'Comprehension syntax differentiation',
  },
  {
    id: 'pcap-s3-fc-031',
    cardType: 'PCAP 3.2 • Memory Efficiency of Generators',
    topic: 'O(1) memory footprint regardless of stream size',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'Why are generators preferred over lists when processing millions of items in memory?',
    codeSnippet: `import sys

# List allocates 10,000 integers in memory
lst = [i for i in range(10000)]
# Generator allocates only a generator state object
gen = (i for i in range(10000))

print(sys.getsizeof(lst) > sys.getsizeof(gen))`,
    stdoutExpected: 'True',
    explanationTitle: 'Generators Provide Lazy O(1) Memory Usage',
    explanationText:
      'Lists store all items in memory simultaneously (O(N) space). Generators produce values on-the-fly one at a time (O(1) space), enabling the processing of arbitrarily huge or even infinite datasets without memory exhaustion.',
    complexityInfo: 'Computational complexity & memory profile',
  },
  {
    id: 'pcap-s3-fc-032',
    cardType: 'PCAP 3.2 • Infinite Generators',
    topic: 'Producing boundless sequences using while True loops',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How can a generator produce an infinite sequence without causing an infinite memory overflow?',
    codeSnippet: `def infinite_fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

fib = infinite_fib()
first_six = [next(fib) for _ in range(6)]
print(first_six)`,
    stdoutExpected: '[0, 1, 1, 2, 3, 5]',
    explanationTitle: 'Infinite Streams with while True and yield',
    explanationText:
      'Because `yield` suspends execution and waits for the caller to invoke `next()`, an infinite loop (`while True`) in a generator only produces values on request without ever freezing the program or overflowing memory.',
    complexityInfo: 'Infinite sequence generation',
  },
  {
    id: 'pcap-s3-fc-033',
    cardType: 'PCAP 3.2 • return Statement Inside Generator',
    topic: 'return statement raises StopIteration with return value',
    category: 'T2: Gotchas',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What happens when a `return value` statement executes inside a generator function in Python 3?',
    codeSnippet: `def gen_with_return():
    yield 1
    yield 2
    return "FINISHED"

g = gen_with_return()
print(next(g))
print(next(g))
try:
    next(g)
except StopIteration as err:
    print("Caught StopIteration value:", err.value)`,
    stdoutExpected: `1
2
Caught StopIteration value: FINISHED`,
    explanationTitle: 'return in Generator Raises StopIteration(value)',
    explanationText:
      'In Python 3.3+, executing a `return val` inside a generator terminates the generator and raises `StopIteration(val)`. The return value is stored in the `.value` attribute of the exception object.',
    complexityInfo: 'Generator termination semantics',
  },
  {
    id: 'pcap-s3-fc-034',
    cardType: 'PCAP 3.2 • yield from Delegation',
    topic: 'Delegating iteration to a sub-generator or iterable',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What does the `yield from` syntax accomplish inside a generator function?',
    codeSnippet: `def chain_iterables():
    yield from [10, 20]
    yield from "AB"

print(list(chain_iterables()))`,
    stdoutExpected: "[10, 20, 'A', 'B']",
    explanationTitle: 'yield from Transparently Delegates to Sub-Iterables',
    explanationText:
      '`yield from iterable` delegates iteration directly to another sub-generator or iterable, transparently yielding all of its elements one by one without needing an explicit `for x in iterable: yield x` loop.',
    complexityInfo: 'Sub-generator delegation',
  },
  {
    id: 'pcap-s3-fc-035',
    cardType: 'PCAP 3.2 • Generator close() Method',
    topic: 'Prematurely terminating a generator with close()',
    category: 'T1: Built-ins',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What method can be called on a generator to force it to close and raise GeneratorExit internally?',
    codeSnippet: `def monitor():
    try:
        while True:
            yield "running"
    finally:
        print("Cleanup completed")

g = monitor()
print(next(g))
g.close()
print("After close, next raises:")
try:
    next(g)
except StopIteration:
    print("StopIteration")`,
    stdoutExpected: `running
Cleanup completed
After close, next raises:
StopIteration`,
    explanationTitle: 'g.close() Raises GeneratorExit for Cleanup',
    explanationText:
      'Calling `g.close()` raises `GeneratorExit` at the point of suspension inside the generator, triggering any `finally` blocks for resource cleanup. Subsequent `next()` calls immediately raise `StopIteration`.',
    complexityInfo: 'Generator resource disposal',
  },
];
