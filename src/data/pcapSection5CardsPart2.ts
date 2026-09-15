import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 5: MISCELLANEOUS (Part 2: Cards 36 to 70)
 * - Chapter 5.2: Lambdas & Functional Operations (Cards 36-40)
 * - Chapter 5.3: Closures, Nested Scopes & nonlocal (Cards 41-60)
 * - Chapter 5.4: File Streams & Text I/O Part 1 (Cards 61-70)
 */
export const section5CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 5.2 (CONTINUED): FUNCTIONAL OPERATIONS & LAMBDAS (Cards 36 to 40)
  // =========================================================================
  {
    id: 'pcap-s5-fc-036',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'functools.reduce() with Lambda',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How does `functools.reduce()` work with a lambda to compute a single cumulative value?',
    codeSnippet: `from functools import reduce
numbers = [1, 2, 3, 4]
product = reduce(lambda acc, x: acc * x, numbers)
print(product)`,
    stdoutExpected: '24',
    explanationTitle: 'Cumulative Reduction with reduce()',
    explanationText:
      '`reduce()` applies a function of two arguments cumulatively to the sequence elements. First `1 * 2 = 2`, then `2 * 3 = 6`, then `6 * 4 = 24`. Note: In Python 3, `reduce` is in the `functools` module, not a built-in.',
    complexityInfo: 'functools module import and folding behavior',
  },
  {
    id: 'pcap-s5-fc-037',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'reduce() with Optional Initializer',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What is the role of the 3rd argument (initializer) in `reduce()`?',
    codeSnippet: `from functools import reduce
nums = [10, 20]
res = reduce(lambda a, b: a + b, nums, 100)
print(res)`,
    stdoutExpected: '130',
    explanationTitle: 'Initial Value in reduce()',
    explanationText:
      'If the optional initializer is provided, it is placed before the items of the iterable in the calculation. First `100 + 10 = 110`, then `110 + 20 = 130`. If the sequence is empty, the initializer is returned.',
    complexityInfo: 'Optional 3rd argument default seed in reduce',
  },
  {
    id: 'pcap-s5-fc-038',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'Higher-Order Function Returning a Lambda',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How can a regular function return a customized lambda?',
    codeSnippet: `def make_incrementor(n):
    return lambda x: x + n

f = make_incrementor(42)
print(f(0))
print(f(1))`,
    stdoutExpected: `42
43`,
    explanationTitle: 'Lambda Factory Function',
    explanationText:
      'Functions in Python are first-class citizens. `make_incrementor` generates and returns a new lambda that retains access to parameter `n` from the enclosing scope.',
    complexityInfo: 'First-class function return values and closures',
  },
  {
    id: 'pcap-s5-fc-039',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'Lambda Dictionary Dispatch Table',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How can a dictionary of lambdas be used as a switch/case dispatch table?',
    codeSnippet: `ops = {
    'add': lambda a, b: a + b,
    'sub': lambda a, b: a - b,
    'mul': lambda a, b: a * b,
}
print(ops['mul'](6, 7))`,
    stdoutExpected: '42',
    explanationTitle: 'Dictionary Dispatch Table Pattern',
    explanationText:
      'Mapping string command keys to lambda callables in a dictionary provides a clean, O(1) replacement for multi-branch `elif` chains.',
    complexityInfo: 'Callable storage in dictionary structures',
  },
  {
    id: 'pcap-s5-fc-040',
    cardType: 'PCAP 5.2 • Lambdas',
    topic: 'any() and all() Combined with Lambdas / Comprehensions',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How do `all()` and `any()` evaluate boolean conditions over collections?',
    codeSnippet: `data = [2, 4, 6, 8]
has_odd = any(x % 2 != 0 for x in data)
all_even = all(x % 2 == 0 for x in data)
print(has_odd, all_even)`,
    stdoutExpected: 'False True',
    explanationTitle: 'Short-Circuiting any() and all()',
    explanationText:
      '`all()` returns True if all elements evaluate to truthy (short-circuits on first False). `any()` returns True if any element is truthy (short-circuits on first True).',
    complexityInfo: 'Short-circuit Boolean aggregation over generators',
  },

  // =========================================================================
  // CHAPTER 5.3: CLOSURES, NESTED SCOPES & NONLOCAL (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pcap-s5-fc-041',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Definition and Criteria of a Closure',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What three criteria must be met for a function to be considered a closure in Python?',
    codeSnippet: `def outer(msg):
    # 1. Nested function
    def inner():
        # 2. Refers to variable msg from enclosing scope
        print(msg)
    # 3. Outer function returns the nested function
    return inner

my_func = outer("PCAP Closure")
my_func()`,
    stdoutExpected: 'PCAP Closure',
    explanationTitle: 'The Three Pillars of a Closure',
    explanationText:
      'A closure requires: 1) A nested function; 2) The nested function references a variable bound in its enclosing non-global scope (a free variable); 3) The enclosing function returns the nested function.',
    complexityInfo: 'Official PCAP theoretical definition of closures',
  },
  {
    id: 'pcap-s5-fc-042',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Inspection of Closure via __closure__ and Cell Objects',
    category: 'T1: Built-ins',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How does Python store closed-over variables internally on a function object?',
    codeSnippet: `def make_printer(val):
    def printer():
        return val
    return printer

p = make_printer(99)
print(p.__closure__ is not None)
cell = p.__closure__[0]
print(cell.cell_contents)`,
    stdoutExpected: `True
99`,
    explanationTitle: 'The __closure__ Attribute and cell Objects',
    explanationText:
      'A closure stores referenced enclosing variables in its `__closure__` tuple as `cell` objects. Each cell has a `cell_contents` attribute storing the current value of the free variable.',
    complexityInfo: 'Function introspection attributes in Python',
  },
  {
    id: 'pcap-s5-fc-043',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Free Variables Attribute: __code__.co_freevars',
    category: 'T1: Built-ins',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '5.3',
    section: 'Section 5',
    question: 'Which code object attribute lists the names of free variables referenced in a closure?',
    codeSnippet: `def outer(a, b):
    def inner():
        return a + b
    return inner

f = outer(1, 2)
print(f.__code__.co_freevars)`,
    stdoutExpected: "('a', 'b')",
    explanationTitle: 'co_freevars in Code Objects',
    explanationText:
      '`func.__code__.co_freevars` contains a tuple of strings representing the names of all free variables used in the function body that are resolved from an enclosing scope.',
    complexityInfo: 'Bytecode and code object inspection',
  },
  {
    id: 'pcap-s5-fc-044',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Rebinding Enclosing Variable without nonlocal',
    category: 'T4: Syntax & Traps',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What error occurs if an inner function attempts to reassign `count += 1` without declaring `nonlocal`?',
    codeSnippet: `def counter():
    count = 0
    def increment():
        count += 1  # Reassignment without nonlocal
        return count
    return increment

# c = counter(); c()`,
    stdoutExpected: 'UnboundLocalError: local variable \'count\' referenced before assignment',
    explanationTitle: 'UnboundLocalError on Augmented Assignment',
    explanationText:
      'Any assignment (`count = ...` or `count += 1`) inside a function causes Python to treat `count` as local to that scope at compile time. Referencing it before the assignment completes raises `UnboundLocalError`.',
    complexityInfo: 'LEGB compile-time variable binding rule',
  },
  {
    id: 'pcap-s5-fc-045',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'The nonlocal Keyword Syntax and Behavior',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How does the `nonlocal` keyword resolve variable reassignment in closures?',
    codeSnippet: `def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

c = counter()
print(c(), c(), c())`,
    stdoutExpected: '1 2 3',
    explanationTitle: 'nonlocal Modifies Enclosing Scope',
    explanationText:
      'The `nonlocal` keyword tells Python that `count` refers to a variable in the nearest enclosing (non-global) namespace, allowing the inner function to modify it and retain state across invocations.',
    complexityInfo: 'nonlocal keyword syntax and execution',
  },
  {
    id: 'pcap-s5-fc-046',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'nonlocal Cannot Bind to Global Scope',
    category: 'T4: Syntax & Traps',
    difficulty: 'Intermediate',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What happens if you use `nonlocal` to bind a variable that only exists in the global module scope?',
    codeSnippet: `x = 10
def test():
    # Attempting to declare nonlocal for a global variable:
    # nonlocal x
    pass`,
    stdoutExpected: 'SyntaxError: no binding for nonlocal \'x\' found',
    explanationTitle: 'nonlocal Excludes Global Scope',
    explanationText:
      '`nonlocal` explicitly requires the variable to exist in an enclosing *function* scope. If the variable is only defined globally, Python raises `SyntaxError: no binding for nonlocal \'x\' found`. For global variables, use `global`.',
    complexityInfo: 'nonlocal scope resolution constraints',
  },
  {
    id: 'pcap-s5-fc-047',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Mutating Mutable Objects without nonlocal',
    category: 'T5: Edge Cases',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.3',
    section: 'Section 5',
    question: 'Is `nonlocal` required if the inner function mutates a list (e.g. `lst.append()`) rather than reassigning it?',
    codeSnippet: `def history_tracker():
    history = []
    def add(item):
        history.append(item)  # Mutating in-place, not reassigning
        return history
    return add

tracker = history_tracker()
print(tracker('A'))
print(tracker('B'))`,
    stdoutExpected: `['A']
['A', 'B']`,
    explanationTitle: 'In-place Mutation Needs No nonlocal',
    explanationText:
      'Because `history` is not reassigned (there is no `history = ...` statement), Python looks up `history` from the enclosing scope as a read operation and mutates the referenced list directly. `nonlocal` is only required for reassignment.',
    complexityInfo: 'Mutation vs rebinding in nested scopes',
  },
  {
    id: 'pcap-s5-fc-048',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Function Factory Pattern (Multipliers)',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What is the output of this classic multiplier closure generator?',
    codeSnippet: `def make_multiplier(factor):
    def multiply(number):
        return number * factor
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)
print(double(5), triple(5))`,
    stdoutExpected: '10 15',
    explanationTitle: 'Independent Closure State',
    explanationText:
      'Each call to `make_multiplier` creates a new function with its own independent closure holding its specific `factor`. `double` captures `factor=2` and `triple` captures `factor=3`.',
    complexityInfo: 'Function factory and state encapsulation',
  },
  {
    id: 'pcap-s5-fc-049',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Multi-Level Nested Scopes and nonlocal',
    category: 'T2: Output',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '5.3',
    section: 'Section 5',
    question: 'In three levels of nested functions, which scope does `nonlocal` modify?',
    codeSnippet: `def level1():
    x = "level1"
    def level2():
        x = "level2"
        def level3():
            nonlocal x
            x = "modified"
        level3()
        return x
    return level2(), x

res2, res1 = level1()
print(res2, res1)`,
    stdoutExpected: 'modified level1',
    explanationTitle: 'nonlocal Binds to Nearest Enclosing Scope',
    explanationText:
      '`nonlocal` searches outward from the current scope and binds to the *first* (nearest) enclosing function namespace where `x` is defined. Therefore, `level3` modifies `x` in `level2`, leaving `level1`\'s `x` unchanged.',
    complexityInfo: 'Nearest enclosing scope resolution rule',
  },
  {
    id: 'pcap-s5-fc-050',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'The Late-Binding Closure Loop Trap',
    category: 'T4: Syntax & Traps',
    difficulty: 'Advanced',
    factor: '2.1',
    intervalDays: 3,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What is the output of calling closures created inside a loop without parameter binding?',
    codeSnippet: `funcs = []
for i in range(3):
    funcs.append(lambda: i)

results = [f() for f in funcs]
print(results)`,
    stdoutExpected: '[2, 2, 2]',
    explanationTitle: 'Late-Binding of Free Variables',
    explanationText:
      'A notorious PCAP trap! Python closures bind free variables by *reference*, not by value. The variable `i` is looked up when the lambda is called, not when defined. At call time, the loop has completed and `i` equals 2 for all three functions.',
    complexityInfo: 'Late binding trap tested frequently on PCAP',
  },
  {
    id: 'pcap-s5-fc-051',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Fixing the Late-Binding Trap with Default Arguments',
    category: 'T2: Output',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How does assigning `i=i` as a default parameter fix the late-binding loop trap?',
    codeSnippet: `funcs = []
for i in range(3):
    # Default argument evaluated at definition time
    funcs.append(lambda i=i: i)

results = [f() for f in funcs]
print(results)`,
    stdoutExpected: '[0, 1, 2]',
    explanationTitle: 'Early Binding via Default Parameters',
    explanationText:
      'Default argument expressions are evaluated when the function/lambda is *defined*, capturing the current value of `i` in a local parameter. When called without arguments, the saved default is returned.',
    complexityInfo: 'Default argument evaluation timing fix',
  },
  {
    id: 'pcap-s5-fc-052',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Fixing the Late-Binding Trap with Nested Factory',
    category: 'T2: Output',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How can an auxiliary factory function prevent late binding in a loop?',
    codeSnippet: `def make_getter(val):
    return lambda: val

funcs = [make_getter(i) for i in range(3)]
print([f() for f in funcs])`,
    stdoutExpected: '[0, 1, 2]',
    explanationTitle: 'Factory Function Creates New Scope per Iteration',
    explanationText:
      'Calling `make_getter(i)` creates a distinct call frame and new local variable `val` on each iteration, each captured independently by its respective closure.',
    complexityInfo: 'Scope isolation using factory functions',
  },
  {
    id: 'pcap-s5-fc-053',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Basic Decorator Syntax and Role of Closures',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How is a decorator implemented as a closure and applied using the `@` symbol?',
    codeSnippet: `def uppercase_decorator(func):
    def wrapper():
        result = func()
        return result.upper()
    return wrapper

@uppercase_decorator
def greet():
    return "hello pcap"

print(greet())`,
    stdoutExpected: 'HELLO PCAP',
    explanationTitle: 'Decorators are Closures',
    explanationText:
      '`@uppercase_decorator` is syntactic sugar for `greet = uppercase_decorator(greet)`. The returned `wrapper` function closes over `func`, executes it, modifies the return value, and returns it.',
    complexityInfo: 'Decorator syntactic sugar and wrapper closure',
  },
  {
    id: 'pcap-s5-fc-054',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Decorator Forwarding *args and **kwargs',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How must a decorator wrapper be written to accept any arbitrary arguments passed to the decorated function?',
    codeSnippet: `def double_result(func):
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs) * 2
    return wrapper

@double_result
def add(a, b, bonus=0):
    return a + b + bonus

print(add(2, 3, bonus=5))`,
    stdoutExpected: '20',
    explanationTitle: 'Generic Wrapper with *args and **kwargs',
    explanationText:
      'Using `*args, **kwargs` in `wrapper` signature and `func(*args, **kwargs)` invocation allows the decorator to wrap functions with any signature. Here `(2 + 3 + 5) * 2 = 20`.',
    complexityInfo: 'Argument forwarding in wrapper closures',
  },
  {
    id: 'pcap-s5-fc-055',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Decorator Execution Timing',
    category: 'T3: Theory',
    difficulty: 'Advanced',
    factor: '2.3',
    intervalDays: 2,
    chapter: '5.3',
    section: 'Section 5',
    question: 'When is a decorator function executed: when the decorated function is defined or when it is called?',
    codeSnippet: `def my_dec(func):
    print("Decorator executed at import/definition time")
    def wrapper():
        return func()
    return wrapper

print("Before defining function")
@my_dec
def hello(): pass
print("After defining function")`,
    stdoutExpected: `Before defining function
Decorator executed at import/definition time
After defining function`,
    explanationTitle: 'Decorators Run at Definition Time',
    explanationText:
      'The outer decorator function runs immediately when the module is loaded / when the `def` block is compiled. Only the inner `wrapper` is executed when the decorated function is subsequently called.',
    complexityInfo: 'Import-time vs call-time decorator lifecycle',
  },
  {
    id: 'pcap-s5-fc-056',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Chaining Multiple Decorators',
    category: 'T2: Output',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '5.3',
    section: 'Section 5',
    question: 'In what order are multiple chained decorators applied?',
    codeSnippet: `def add_stars(func):
    def wrapper(): return "***" + func() + "***"
    return wrapper

def add_brackets(func):
    def wrapper(): return "[" + func() + "]"
    return wrapper

@add_stars
@add_brackets
def text(): return "PCAP"

print(text())`,
    stdoutExpected: '***[PCAP]***',
    explanationTitle: 'Bottom-Up Decorator Application',
    explanationText:
      'Decorators are applied from bottom to top: `text = add_stars(add_brackets(text))`. First `add_brackets` wraps "PCAP" into "[PCAP]", then `add_stars` wraps that into "***[PCAP]***".',
    complexityInfo: 'Decorator stacking order of execution',
  },
  {
    id: 'pcap-s5-fc-057',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Decorators with Arguments (Three Levels of Functions)',
    category: 'T2: Output',
    difficulty: 'Advanced',
    factor: '2.1',
    intervalDays: 3,
    chapter: '5.3',
    section: 'Section 5',
    question: 'Why do decorators that take arguments require three levels of nested functions?',
    codeSnippet: `def repeat(times):
    def decorator(func):
        def wrapper(*args):
            res = []
            for _ in range(times):
                res.append(func(*args))
            return res
        return wrapper
    return decorator

@repeat(3)
def greet(name): return f"Hi {name}"

print(greet("Sam"))`,
    stdoutExpected: "['Hi Sam', 'Hi Sam', 'Hi Sam']",
    explanationTitle: 'Three-Level Nested Decorator Architecture',
    explanationText:
      '`@repeat(3)` first calls `repeat(3)` which returns the actual `decorator` function. That decorator then receives `greet` and returns `wrapper`. Three levels are required: Outer (params), Middle (func), Inner (execution).',
    complexityInfo: 'Parameterized decorator architecture',
  },
  {
    id: 'pcap-s5-fc-058',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Stateful Accumulator Closure',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.3',
    section: 'Section 5',
    question: 'How does an accumulator closure maintain running averages across invocations?',
    codeSnippet: `def make_averager():
    count = 0
    total = 0
    def averager(new_value):
        nonlocal count, total
        count += 1
        total += new_value
        return total / count
    return averager

avg = make_averager()
print(avg(10), avg(20), avg(30))`,
    stdoutExpected: '10.0 15.0 20.0',
    explanationTitle: 'Stateful Closures as Lightweight Objects',
    explanationText:
      'Closures provide data encapsulation and state retention without defining a class. `count` and `total` persist across calls inside the function closure environment.',
    complexityInfo: 'Lightweight state encapsulation pattern',
  },
  {
    id: 'pcap-s5-fc-059',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'LEGB Rule Scope Lookup Hierarchy',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What is the exact name and sequence of the LEGB rule in Python variable resolution?',
    codeSnippet: `x = "global"
def outer():
    x = "enclosing"
    def inner():
        # What is the lookup order for unassigned x?
        return x
    return inner()

print(outer())`,
    stdoutExpected: 'enclosing',
    explanationTitle: 'Local -> Enclosing -> Global -> Built-in',
    explanationText:
      'Python searches namespaces in strict order: L: Local (inside current def); E: Enclosing (any enclosing defs from inside out); G: Global (current module level); B: Built-in (built-in module symbols like len, range).',
    complexityInfo: 'Core namespace hierarchy tested on PCAP',
  },
  {
    id: 'pcap-s5-fc-060',
    cardType: 'PCAP 5.3 • Closures',
    topic: 'Deleting Enclosing Function Does Not Destroy Closure State',
    category: 'T5: Edge Cases',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What happens to a closure when the enclosing outer function is deleted with `del`?',
    codeSnippet: `def outer(val):
    def inner():
        return val * 2
    return inner

fn = outer(21)
del outer  # Delete the outer factory function
print(fn())`,
    stdoutExpected: '42',
    explanationTitle: 'Closure Retains Strong Reference to Cells',
    explanationText:
      'The returned `inner` function holds a direct reference to the closure cell object containing `val`. Deleting `outer` from the module namespace only unbinds the factory name; `fn` and its captured state remain valid.',
    complexityInfo: 'Reference counting and garbage collection resilience',
  },

  // =========================================================================
  // CHAPTER 5.4: FILE STREAMS & TEXT I/O PART 1 (Cards 61 to 70)
  // =========================================================================
  {
    id: 'pcap-s5-fc-061',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'The open() Built-in Function Signatures and Default Mode',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What are the default mode and format when calling `open(filename)` without mode arguments?',
    codeSnippet: `# Calling open with only filename:
# f = open("test.txt")`,
    stdoutExpected: 'Mode is \'rt\' (Read mode, Text format)',
    explanationTitle: 'Default File Open Mode: \'rt\'',
    explanationText:
      'If the `mode` parameter is omitted, `open()` defaults to `\'r\'` (reading) in `\'t\'` (text) mode. Characters are automatically decoded to `str` using the platform-dependent default encoding.',
    complexityInfo: 'Default parameters of the open() built-in',
  },
  {
    id: 'pcap-s5-fc-062',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'Mode \'r\' Behaviour on Missing File',
    category: 'T4: Syntax & Traps',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What exception is raised when opening a non-existent file in `\'r\'` mode?',
    codeSnippet: `try:
    f = open("non_existent_file_xyz.txt", "r")
except FileNotFoundError as e:
    print(type(e).__name__)
    print(issubclass(FileNotFoundError, OSError))`,
    stdoutExpected: `FileNotFoundError
True`,
    explanationTitle: 'FileNotFoundError on Missing Read Target',
    explanationText:
      'Attempting to open a non-existent file for reading raises `FileNotFoundError`. In Python 3.3+, `FileNotFoundError` is a subclass of `OSError` (and `IOError` is an alias for `OSError`).',
    complexityInfo: 'I/O exception hierarchy verification',
  },
  {
    id: 'pcap-s5-fc-063',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'Mode \'w\' Immediate File Truncation',
    category: 'T4: Syntax & Traps',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What happens to the existing content of a file when it is opened with mode `\'w\'`?',
    codeSnippet: `# Suppose data.txt contains 500 lines of data:
# f = open("data.txt", "w")
# f.close()`,
    stdoutExpected: 'File is immediately truncated to 0 bytes',
    explanationTitle: 'Immediate Truncation in Write Mode',
    explanationText:
      'Opening a file in `\'w\'` mode immediately wipes and truncates the existing file to 0 bytes before any write operations take place. If the file does not exist, a new empty file is created.',
    complexityInfo: 'Critical data-loss trap tested on PCAP',
  },
  {
    id: 'pcap-s5-fc-064',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'Mode \'a\' (Append Mode) Stream Positioning',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.4',
    section: 'Section 5',
    question: 'How does mode `\'a\'` (append) treat existing file contents and write positions?',
    codeSnippet: `# Opening in append mode:
# f = open("log.txt", "a")
# f.write("new entry\\n")`,
    stdoutExpected: 'Appends data to the end without truncating',
    explanationTitle: 'Append Mode Preserves Data',
    explanationText:
      'Mode `\'a\'` creates the file if it does not exist. If it already exists, all new data written is guaranteed to be appended to the end of the file. Existing data is completely preserved.',
    complexityInfo: 'Append mode position semantics',
  },
  {
    id: 'pcap-s5-fc-065',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'Mode \'x\' (Exclusive Creation)',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What does mode `\'x\'` do and what exception is raised if the file already exists?',
    codeSnippet: `# Attempting exclusive creation on an existing file:
# open("existing_file.txt", "x")`,
    stdoutExpected: 'FileExistsError',
    explanationTitle: 'Exclusive Creation Mode \'x\'',
    explanationText:
      'Mode `\'x\'` opens a file exclusively for writing. If the file already exists, the operation fails and raises `FileExistsError`. This guarantees that you never overwrite an existing file.',
    complexityInfo: 'Safe file creation mode semantics',
  },
  {
    id: 'pcap-s5-fc-066',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'Read and Write Mode: \'r+\' vs \'w+\'',
    category: 'T4: Syntax & Traps',
    difficulty: 'Advanced',
    factor: '2.2',
    intervalDays: 3,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What is the vital difference between mode `\'r+\'` and mode `\'w+\'`?',
    codeSnippet: `# Both allow reading AND writing:
# open("notes.txt", "r+")  # Option A
# open("notes.txt", "w+")  # Option B`,
    stdoutExpected: '\'r+\' preserves content; \'w+\' truncates existing content to 0 bytes!',
    explanationTitle: '\'r+\' vs \'w+\' Truncation Difference',
    explanationText:
      'A major PCAP exam trap! Both modes allow both reading and writing. However, `\'r+\'` opens the file with the pointer at position 0 without truncating, whereas `\'w+\'` immediately truncates the file to 0 bytes on open.',
    complexityInfo: 'High-frequency exam distinction trap',
  },
  {
    id: 'pcap-s5-fc-067',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'The with Statement and Context Manager',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'Why is the `with` statement preferred over manual `f.close()` calls?',
    codeSnippet: `# with open("file.txt", "r") as f:
#     data = f.read()
# print(f.closed)`,
    stdoutExpected: 'True (guaranteed automatic closure even if exceptions occur)',
    explanationTitle: 'Automatic Resource Management with with',
    explanationText:
      'The `with` statement utilizes Python\'s Context Manager protocol (`__enter__` and `__exit__`). When exiting the block, `f.close()` is guaranteed to be executed, even if unhandled exceptions are raised inside the block.',
    complexityInfo: 'Context manager protocol guarantee',
  },
  {
    id: 'pcap-s5-fc-068',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'The f.closed Boolean Attribute',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'How do you check whether a stream has been closed?',
    codeSnippet: `import io
stream = io.StringIO("sample text")
print(stream.closed)
stream.close()
print(stream.closed)`,
    stdoutExpected: `False
True`,
    explanationTitle: 'Stream closed Attribute',
    explanationText:
      'All Python stream and file objects provide a read-only boolean attribute `f.closed`. It returns `False` while the stream is open and `True` once `close()` has been called.',
    complexityInfo: 'Stream state verification attribute',
  },
  {
    id: 'pcap-s5-fc-069',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'f.read() with Character Limit Argument',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '5.4',
    section: 'Section 5',
    question: 'In text mode, what does `f.read(n)` read and return when `n` is specified?',
    codeSnippet: `import io
f = io.StringIO("Python Certification")
chunk1 = f.read(6)
chunk2 = f.read(7)
print(f"'{chunk1}'", f"'{chunk2}'")`,
    stdoutExpected: "'Python' ' Certif'",
    explanationTitle: 'Chunk Reading in Text Mode',
    explanationText:
      'In text mode, `f.read(n)` reads at most `n` *characters* (not bytes) and advances the internal stream pointer. Successive calls continue from where the previous read left off.',
    complexityInfo: 'Character-based chunk read semantics',
  },
  {
    id: 'pcap-s5-fc-070',
    cardType: 'PCAP 5.4 • File I/O',
    topic: 'End-Of-File (EOF) Detection with f.read()',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What does `f.read()` return when the end of file (EOF) is reached?',
    codeSnippet: `import io
f = io.StringIO("end")
f.read()  # reads all content
eof_check = f.read()
print(eof_check == "")
print(len(eof_check))`,
    stdoutExpected: `True
0`,
    explanationTitle: 'EOF Returns Empty String',
    explanationText:
      'When reaching End-Of-File, `read()`, `readline()`, and `read(n)` return an empty string `""`. An empty string is falsy, allowing idioms like `while chunk := f.read(1024): ...` to detect EOF.',
    complexityInfo: 'EOF signal in Python text streams',
  },
];
