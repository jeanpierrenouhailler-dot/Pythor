import { Flashcard } from '../types';

/**
 * PCEP-30-0x SECTION 4: FUNCTIONS AND EXCEPTIONS (Part 1: Cards 1 to 35)
 * - Chapter 4.1: Function Definition (def), Invocations, Arguments vs Parameters & Return Values (Cards 1-20)
 * - Chapter 4.2 Start: Positional vs Keyword Arguments & Default Parameters (Cards 21-35)
 */
export const pcepSection4CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.1: FUNCTION DEFINITION, INVOCATION & RETURN (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pcep-s4-fc-001',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Function Definition Syntax with def Keyword',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What keyword defines a function in Python, and what punctuation is required at the end of the header?',
    codeSnippet: `def greet():
    print("Hello, PCEP!")

greet()`,
    stdoutExpected: 'Hello, PCEP!',
    explanationTitle: 'The def Statement and Colon Header',
    explanationText:
      'Functions in Python are introduced using the `def` keyword, followed by the function name, parentheses `()` enclosing optional parameters, and a mandatory colon `:`. The function body must be indented.',
    complexityInfo: 'Official PCEP syllabus: function definition fundamentals',
  },
  {
    id: 'pcep-s4-fc-002',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Function Invocation vs Function Object Reference',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is the difference between writing func and func()?',
    codeSnippet: `def ping():
    return "pong"

print(type(ping).__name__)
print(ping())`,
    stdoutExpected: `function
pong`,
    explanationTitle: 'Invocation Parentheses Operator',
    explanationText:
      'Writing the function name without parentheses (`ping`) refers to the first-class function object itself (type `function`). Appending parentheses `ping()` triggers the actual function invocation, executing its body and returning the result.',
    complexityInfo: 'High-frequency exam distinction on function referencing',
  },
  {
    id: 'pcep-s4-fc-003',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Invoking a Function Before Its Definition',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What happens if you invoke a function prior to its def statement in the source file?',
    codeSnippet: `try:
    compute()
except NameError as e:
    print("Caught NameError")

def compute():
    return 42`,
    stdoutExpected: 'Caught NameError',
    explanationTitle: 'Top-to-Bottom Interpretation & NameError',
    explanationText:
      'Python is an interpreted language executed from top to bottom. A function does not exist in the namespace until the interpreter reaches and executes its `def` statement. Calling it earlier raises a `NameError`.',
    complexityInfo: 'Core Python execution lifecycle rule on PCEP',
  },
  {
    id: 'pcep-s4-fc-004',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Execution Flow and Function Transfer of Control',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'In what order are the print statements executed in this program?',
    codeSnippet: `print("Step 1")

def task():
    print("Step 2")

print("Step 3")
task()
print("Step 4")`,
    stdoutExpected: `Step 1
Step 3
Step 2
Step 4`,
    explanationTitle: 'Function Call Control Flow',
    explanationText:
      'Defining a function does NOT execute its body. Execution proceeds sequentially: "Step 1" prints, the `def task():` header registers the function without running it, "Step 3" prints, `task()` transfers control inside the function printing "Step 2", and finally "Step 4" prints.',
    complexityInfo: 'PCEP control flow analysis question pattern',
  },
  {
    id: 'pcep-s4-fc-005',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'The return Statement Terminates Execution',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is printed by this function with an early return?',
    codeSnippet: `def check():
    print("A")
    return 100
    print("B")

val = check()
print(val)`,
    stdoutExpected: `A
100`,
    explanationTitle: 'Immediate Termination on return',
    explanationText:
      'The `return` statement immediately exits the function and hands control (and any return value) back to the caller. Any statements positioned after `return` in the same block are unreachable and will never execute.',
    complexityInfo: 'Fundamental function execution mechanics',
  },
  {
    id: 'pcep-s4-fc-006',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Default Return Value of Functions (Implicit None)',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What value is returned by a Python function that has no return statement?',
    codeSnippet: `def no_return():
    x = 10 + 20

res = no_return()
print(res is None)`,
    stdoutExpected: 'True',
    explanationTitle: 'Implicit None Return Value',
    explanationText:
      'In Python, every function returns a value. If a function completes execution without encountering a `return` statement, it automatically and implicitly returns `None`.',
    complexityInfo: 'Official PCEP syllabus: return values & None',
  },
  {
    id: 'pcep-s4-fc-007',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Bare return Statement Without an Expression',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What does a bare return statement (with no expression) return?',
    codeSnippet: `def leave_early(flag):
    if flag:
        return
    return "done"

print(leave_early(True))
print(leave_early(False))`,
    stdoutExpected: `None
done`,
    explanationTitle: 'Bare return Yields None',
    explanationText:
      'A `return` statement written without an operand expression is equivalent to `return None`. It immediately halts function execution and returns `None` to the caller.',
    complexityInfo: 'PCEP standard return keyword behavior',
  },
  {
    id: 'pcep-s4-fc-008',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Returning Expressions and Computed Results',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'Can the return statement contain arbitrary mathematical expressions?',
    codeSnippet: `def square_sum(a, b):
    return (a + b) ** 2

print(square_sum(2, 3))`,
    stdoutExpected: '25',
    explanationTitle: 'Expression Evaluation on return',
    explanationText:
      'The expression following `return` is evaluated first (`(2 + 3) ** 2 = 25`), and the resulting single object is returned to the caller.',
    complexityInfo: 'Standard function computation pattern',
  },
  {
    id: 'pcep-s4-fc-009',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Returning Multiple Values via Implicit Tuple Packing',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What data type is returned when writing return a, b in Python?',
    codeSnippet: `def get_dimensions():
    width = 1920
    height = 1080
    return width, height

res = get_dimensions()
print(type(res).__name__)
print(res)`,
    stdoutExpected: `tuple
(1920, 1080)`,
    explanationTitle: 'Tuple Packing on Multiple Returns',
    explanationText:
      'In Python, separating expressions with commas after `return` packs them into a single `tuple`. Functions always return exactly one object, which in this case is a tuple containing the items.',
    complexityInfo: 'Core Python idiom tested on PCEP',
  },
  {
    id: 'pcep-s4-fc-010',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Unpacking Multiple Returned Values Directly',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'How do you unpack multiple returned values into separate variables at invocation?',
    codeSnippet: `def min_max(a, b):
    return (a if a < b else b), (a if a > b else b)

low, high = min_max(10, 4)
print(f"low={low}, high={high}")`,
    stdoutExpected: 'low=4, high=10',
    explanationTitle: 'Return Tuple Unpacking',
    explanationText:
      'Because `min_max()` returns a 2-tuple `(4, 10)`, placing two variables `low, high = ...` on the left unpacks the tuple elements into the respective identifiers.',
    complexityInfo: 'Sequence unpacking from function results',
  },
  {
    id: 'pcep-s4-fc-011',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Conditional Branches and Multiple return Statements',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is returned when n = 0 in this sign function?',
    codeSnippet: `def sign(n):
    if n > 0:
        return 1
    elif n < 0:
        return -1

print(sign(0))`,
    stdoutExpected: 'None',
    explanationTitle: 'Missing Conditional Branch Falls Through to None',
    explanationText:
      'When `n == 0`, neither the `if` nor the `elif` branch is entered. Python reaches the end of the function body without executing any `return` statement, so it implicitly returns `None`.',
    complexityInfo: 'High-frequency exam trap: fallen-through conditionals in functions',
  },
  {
    id: 'pcep-s4-fc-012',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Testing None Return with is None and Falsiness',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'How does None evaluate in boolean contexts like if not result:?',
    codeSnippet: `def do_nothing():
    pass

val = do_nothing()
if not val:
    print("val is falsy")
if val is None:
    print("val is None")`,
    stdoutExpected: `val is falsy
val is None`,
    explanationTitle: 'None Type and Boolean Evaluation',
    explanationText:
      '`None` belongs to `NoneType` and evaluates to `False` in boolean conditions. The idiomatic way to test if a function returned `None` is using the identity operator `val is None`.',
    complexityInfo: 'None identity and truthiness on PCEP',
  },
  {
    id: 'pcep-s4-fc-013',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Parameters vs Arguments Terminology',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is the technical distinction between a parameter and an argument?',
    codeSnippet: `def multiply(x, y):  # x, y are parameters
    return x * y

ans = multiply(3, 5) # 3, 5 are arguments
print(ans)`,
    stdoutExpected: '15',
    explanationTitle: 'Parameters in Definition vs Arguments in Invocation',
    explanationText:
      'A **parameter** is a variable listed inside the parentheses of a function definition (`def multiply(x, y)`). An **argument** is the actual value or expression passed to the function when it is invoked (`multiply(3, 5)`).',
    complexityInfo: 'Official PCEP terminology requirement',
  },
  {
    id: 'pcep-s4-fc-014',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Passing Immutable Objects (Pass-by-Assignment)',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'Does reassigning an integer parameter inside a function modify the caller variable?',
    codeSnippet: `def modify_int(val):
    val = val + 10

num = 5
modify_int(num)
print(num)`,
    stdoutExpected: '5',
    explanationTitle: 'Immutable Arguments Cannot Be Changed In-Place',
    explanationText:
      'Integers are immutable. Inside `modify_int`, `val = val + 10` creates a new integer object `15` and binds local variable `val` to it. The caller’s `num` remains bound to `5`.',
    complexityInfo: 'Pass-by-object-reference mechanics on PCEP',
  },
  {
    id: 'pcep-s4-fc-015',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Passing Mutable Objects (In-Place Mutation)',
    category: 'Functions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What happens to the caller list when a function calls lst.append()?',
    codeSnippet: `def add_element(lst):
    lst.append(99)

items = [1, 2]
add_element(items)
print(items)`,
    stdoutExpected: '[1, 2, 99]',
    explanationTitle: 'In-Place Mutation Visible to Caller',
    explanationText:
      'Both `items` and parameter `lst` reference the exact same list in memory. Calling a mutating method like `lst.append(99)` alters the underlying object, so the caller observes the change.',
    complexityInfo: 'High-frequency exam question bridging Section 3 and 4',
  },
  {
    id: 'pcep-s4-fc-016',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Rebinding a Mutable Parameter Name',
    category: 'Functions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What happens to the caller list when parameter lst is reassigned with lst = [...]?',
    codeSnippet: `def reset(lst):
    lst = [0, 0]

data = [1, 2, 3]
reset(data)
print(data)`,
    stdoutExpected: '[1, 2, 3]',
    explanationTitle: 'Rebinding vs Mutating in Functions',
    explanationText:
      '`lst = [0, 0]` rebinds the local identifier `lst` to a newly created list inside the function scope. It does NOT mutate the original list object. The caller’s `data` remains untouched.',
    complexityInfo: 'Classic PCEP question distinguishing mutation from rebinding',
  },
  {
    id: 'pcep-s4-fc-017',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Expression Evaluation Before Function Call',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'In what order are argument expressions evaluated when calling a function?',
    codeSnippet: `def display(val):
    print("val is", val)

display(2 * 3 + 4)`,
    stdoutExpected: 'val is 10',
    explanationTitle: 'Eager Evaluation of Arguments',
    explanationText:
      'Before entering `display()`, Python evaluates the argument expression `2 * 3 + 4 = 10`. The evaluated result `10` is then passed to parameter `val`.',
    complexityInfo: 'Expression evaluation order prior to function dispatch',
  },
  {
    id: 'pcep-s4-fc-018',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Recursive Function Basics (Factorial)',
    category: 'Functions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is the output of this recursive factorial function for n = 3?',
    codeSnippet: `def fact(n):
    if n <= 1:
        return 1
    return n * fact(n - 1)

print(fact(3))`,
    stdoutExpected: '6',
    explanationTitle: 'Recursion with Base Case',
    explanationText:
      '`fact(3)` calls `3 * fact(2)`. `fact(2)` calls `2 * fact(1)`. `fact(1)` hits the base case `n <= 1` returning `1`. The call stack unwinds: `2 * 1 = 2`, then `3 * 2 = 6`.',
    complexityInfo: 'Standard recursive calculation pattern on PCEP',
  },
  {
    id: 'pcep-s4-fc-019',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'RecursionError on Infinite Recursion',
    category: 'Functions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What exception is raised when a recursive function lacks a terminating base case?',
    codeSnippet: `def runaway():
    return runaway()

try:
    runaway()
except RecursionError:
    print("Caught RecursionError")`,
    stdoutExpected: 'Caught RecursionError',
    explanationTitle: 'RecursionError and Maximum Recursion Depth',
    explanationText:
      'Python protects memory by setting a maximum recursion depth (default 1000). When a recursive function calls itself indefinitely without reaching a base case, Python raises a `RecursionError: maximum recursion depth exceeded`.',
    complexityInfo: 'Built-in recursion limit exception tested on PCEP',
  },
  {
    id: 'pcep-s4-fc-020',
    track: 'pcep',
    cardType: 'PCEP 4.1 • Functions & Returns',
    topic: 'Function Chaining and Composition',
    category: 'Functions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is the result of calling double(increment(5))?',
    codeSnippet: `def double(x):
    return x * 2

def increment(x):
    return x + 1

print(double(increment(5)))`,
    stdoutExpected: '12',
    explanationTitle: 'Inner-to-Outer Function Composition',
    explanationText:
      'Function calls evaluate from inside out: `increment(5)` evaluates first, returning `6`. Then `double(6)` is evaluated, returning `12`.',
    complexityInfo: 'Standard nested function invocation order',
  },

  // =========================================================================
  // CHAPTER 4.2: POSITIONAL & KEYWORD ARGUMENTS, DEFAULTS (Cards 21 to 35)
  // =========================================================================
  {
    id: 'pcep-s4-fc-021',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'Positional Argument Binding',
    category: 'Arguments',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How are positional arguments bound to parameters?',
    codeSnippet: `def sub(a, b):
    return a - b

print(sub(10, 4))
print(sub(4, 10))`,
    stdoutExpected: `6
-6`,
    explanationTitle: 'Positional Ordering Matters',
    explanationText:
      'Positional arguments are mapped strictly by their position: the first argument binds to the first parameter, the second to the second, and so on. Swapping the argument order changes the values assigned to parameters.',
    complexityInfo: 'Official PCEP syllabus: positional argument matching',
  },
  {
    id: 'pcep-s4-fc-022',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'TypeError on Missing Required Positional Arguments',
    category: 'Arguments',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What exception is raised when invoking a function with fewer arguments than required?',
    codeSnippet: `def add(a, b):
    return a + b

try:
    add(5)
except TypeError as e:
    print("Caught TypeError")`,
    stdoutExpected: 'Caught TypeError',
    explanationTitle: 'Missing Positional Argument Raises TypeError',
    explanationText:
      'If a function expects two required positional arguments and only one is passed, Python raises `TypeError: add() missing 1 required positional argument: \'b\'`.',
    complexityInfo: 'Parameter arity error handling on PCEP',
  },
  {
    id: 'pcep-s4-fc-023',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'TypeError on Too Many Positional Arguments',
    category: 'Arguments',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What exception is raised when passing more arguments than parameters defined?',
    codeSnippet: `def greet(name):
    print("Hi", name)

try:
    greet("Alice", "Bob")
except TypeError as e:
    print("Caught TypeError")`,
    stdoutExpected: 'Caught TypeError',
    explanationTitle: 'Surplus Positional Arguments Raise TypeError',
    explanationText:
      'Passing surplus arguments to a function that does not accept variable arguments raises `TypeError: greet() takes 1 positional argument but 2 were given`.',
    complexityInfo: 'Parameter count matching rules on PCEP',
  },
  {
    id: 'pcep-s4-fc-024',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'Keyword Arguments Syntax (name=value)',
    category: 'Arguments',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How do keyword arguments match parameters in an invocation?',
    codeSnippet: `def introduce(first, last):
    print(f"{first} {last}")

introduce(last="Smith", first="John")`,
    stdoutExpected: 'John Smith',
    explanationTitle: 'Keyword Matching by Name',
    explanationText:
      'Keyword arguments are passed in the format `parameter_name=value`. Because the parameter name is explicitly stated, the arguments can be passed in ANY order without affecting how they bind.',
    complexityInfo: 'Official PCEP syllabus: keyword arguments',
  },
  {
    id: 'pcep-s4-fc-025',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'Order Independence of Keyword Arguments',
    category: 'Arguments',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'Does the order of keyword arguments affect the function execution result?',
    codeSnippet: `def division(num, den):
    return num / den

print(division(den=4, num=20))`,
    stdoutExpected: '5.0',
    explanationTitle: 'Keyword Argument Ordering Independence',
    explanationText:
      'With keyword arguments, Python binds values to parameters by parameter identifier, completely ignoring positional order. `num` receives `20` and `den` receives `4`, calculating `20 / 4 = 5.0`.',
    complexityInfo: 'Keyword parameter flexibility on PCEP',
  },
  {
    id: 'pcep-s4-fc-026',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'TypeError on Unexpected Keyword Argument Name',
    category: 'Arguments',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What exception is raised when passing a keyword argument with an unrecognized name?',
    codeSnippet: `def calc(x, y):
    return x + y

try:
    calc(x=1, z=2)
except TypeError as e:
    print("Caught TypeError")`,
    stdoutExpected: 'Caught TypeError',
    explanationTitle: 'Unrecognized Keyword Argument Raises TypeError',
    explanationText:
      'If you supply a keyword argument whose name does not match any parameter defined in the function signature, Python raises `TypeError: calc() got an unexpected keyword argument \'z\'`.',
    complexityInfo: 'Keyword parameter validation on PCEP',
  },
  {
    id: 'pcep-s4-fc-027',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'Mixing Positional and Keyword Arguments',
    category: 'Arguments',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'Can positional and keyword arguments be mixed in a single call?',
    codeSnippet: `def profile(name, age, city):
    print(f"{name}, {age}, {city}")

profile("Alice", city="London", age=30)`,
    stdoutExpected: 'Alice, 30, London',
    explanationTitle: 'Positional Arguments Preceding Keyword Arguments',
    explanationText:
      'Positional and keyword arguments can be mixed freely, provided that ALL positional arguments appear BEFORE any keyword arguments in the call. Here, `"Alice"` binds positionally to `name`, while `city` and `age` bind by keyword.',
    complexityInfo: 'Mixing argument types in Python invocations',
  },
  {
    id: 'pcep-s4-fc-028',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'SyntaxError: Positional Argument Follows Keyword Argument',
    category: 'Arguments',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'Why does func(a=1, 2) cause a compile-time SyntaxError?',
    codeSnippet: `# func(a=1, 2)
# SyntaxError: positional argument follows keyword argument
print("SyntaxError is fatal at parse time")`,
    stdoutExpected: 'SyntaxError is fatal at parse time',
    explanationTitle: 'Positional Cannot Follow Keyword Rule',
    explanationText:
      'In Python call syntax, once a keyword argument is used, all subsequent arguments in that call MUST also be keyword arguments. Placing a positional argument after a keyword argument causes a compile-time `SyntaxError`.',
    complexityInfo: 'Top 3 most tested call syntax rules on PCEP',
  },
  {
    id: 'pcep-s4-fc-029',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'TypeError on Multiple Values for the Same Parameter',
    category: 'Arguments',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What exception occurs when a parameter receives both a positional and a keyword value?',
    codeSnippet: `def show(x, y):
    print(x, y)

try:
    show(10, x=20)
except TypeError as e:
    print("Caught TypeError")`,
    stdoutExpected: 'Caught TypeError',
    explanationTitle: 'Duplicate Parameter Assignment Raises TypeError',
    explanationText:
      'Passing `10` positionally binds `x = 10`. Passing `x=20` as a keyword argument attempts to assign `x` a second time. Python raises `TypeError: show() got multiple values for argument \'x\'`.',
    complexityInfo: 'High-frequency PCEP exam trap',
  },
  {
    id: 'pcep-s4-fc-030',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'Default Parameter Values Syntax',
    category: 'Arguments',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What happens when a parameter with a default value is omitted by the caller?',
    codeSnippet: `def power(base, exp=2):
    return base ** exp

print(power(5))
print(power(5, 3))`,
    stdoutExpected: `25
125`,
    explanationTitle: 'Default Parameter Fallback',
    explanationText:
      'When an argument is omitted during invocation (`power(5)`), the parameter automatically adopts its specified default value (`exp=2`), computing `5 ** 2 = 25`. When passed explicitly (`power(5, 3)`), the default is overridden (`125`).',
    complexityInfo: 'Official PCEP syllabus: default parameter values',
  },
  {
    id: 'pcep-s4-fc-031',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'Overriding Default Parameters by Keyword',
    category: 'Arguments',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How do default parameters interact with keyword arguments?',
    codeSnippet: `def send(msg, priority="NORMAL", retry=3):
    print(f"{msg}|{priority}|{retry}")

send("Alert", retry=5)`,
    stdoutExpected: 'Alert|NORMAL|5',
    explanationTitle: 'Selective Default Overriding',
    explanationText:
      'Keyword arguments allow you to selectively override specific default parameters without needing to supply values for intermediate default parameters. `priority` keeps its default `"NORMAL"`, while `retry` is overridden to `5`.',
    complexityInfo: 'Clean API invocation patterns with defaults',
  },
  {
    id: 'pcep-s4-fc-032',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'SyntaxError: Non-Default Parameter Follows Default Parameter',
    category: 'Arguments',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'Why is def calc(x=1, y): illegal in Python?',
    codeSnippet: `# def calc(x=1, y):
#     return x + y
# SyntaxError: non-default argument follows default argument
print("SyntaxError at function definition")`,
    stdoutExpected: 'SyntaxError at function definition',
    explanationTitle: 'Mandatory Non-Default Before Default Ordering',
    explanationText:
      'In a function definition header, all parameters without default values MUST precede any parameters with default values. Placing a non-default parameter after a default parameter (`def f(x=1, y):`) is a fatal `SyntaxError`.',
    complexityInfo: 'Top 3 most famous PCEP exam syntax questions',
  },
  {
    id: 'pcep-s4-fc-033',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'Multiple Default Parameters and Positional Assignment',
    category: 'Arguments',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What is the output of box(7, 8) when def box(w=1, h=2, d=3): is defined?',
    codeSnippet: `def box(w=1, h=2, d=3):
    return w * h * d

print(box(7, 8))`,
    stdoutExpected: '168',
    explanationTitle: 'Positional Overriding of Default Parameters',
    explanationText:
      'Positional arguments override defaults from left to right: `w` becomes `7`, `h` becomes `8`, while `d` retains its default `3`. The calculation is `7 * 8 * 3 = 168`.',
    complexityInfo: 'Sequential default parameter binding',
  },
  {
    id: 'pcep-s4-fc-034',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'Combining Required, Default, and Keyword Arguments',
    category: 'Arguments',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What does this function print when invoked with mixed parameters?',
    codeSnippet: `def render(tag, content="body", color="black"):
    return f"<{tag} color={color}>{content}</{tag}>"

print(render("p", color="red"))`,
    stdoutExpected: '<p color=red>body</p>',
    explanationTitle: 'Selective Keyword Overriding with Positional Required',
    explanationText:
      '`tag` receives `"p"` positionally. `content` retains its default `"body"`. `color` is overridden to `"red"` via keyword argument.',
    complexityInfo: 'Idiomatic parameter passing flexibility',
  },
  {
    id: 'pcep-s4-fc-035',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'Default Value Evaluation Time (Definition Time)',
    category: 'Arguments',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'When are default argument expressions evaluated in Python?',
    codeSnippet: `x = 10

def show(val=x):
    print(val)

x = 99
show()`,
    stdoutExpected: '10',
    explanationTitle: 'Default Expressions Evaluated Once at def Time',
    explanationText:
      'In Python, default parameter expressions are evaluated ONCE when the `def` statement is first executed by the interpreter, NOT every time the function is called. When `def show(val=x):` ran, `x` was `10`. Modifying `x` later does not alter the bound default value.',
    complexityInfo: 'Crucial memory and binding concept on PCEP',
  },
];
