import { Flashcard } from '../types';

/**
 * PCEP-30-0x SECTION 4: FUNCTIONS AND EXCEPTIONS (Part 2: Cards 36 to 70)
 * - Chapter 4.2 Completion: Mutable Default Argument Trap & Call Rules (Cards 36-40)
 * - Chapter 4.3: Variable Scope: Local vs Global, the global Keyword, LEGB Rule (Cards 41-60)
 * - Chapter 4.4 Start: Basic Exception Handling: try-except Blocks & Control Flow (Cards 61-70)
 */
export const pcepSection4CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.2 COMPLETION: ARGUMENTS & DEFAULTS (Cards 36 to 40)
  // =========================================================================
  {
    id: 'pcep-s4-fc-036',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'The Mutable Default Argument Trap (lst=[])',
    category: 'Arguments',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What is printed across multiple calls when a mutable list is used as a default parameter?',
    codeSnippet: `def add_item(val, lst=[]):
    lst.append(val)
    return lst

print(add_item("a"))
print(add_item("b"))`,
    stdoutExpected: `['a']
['a', 'b']`,
    explanationTitle: 'Shared Mutable Default Object',
    explanationText:
      'Because default parameters are evaluated once at function definition time, `lst` is bound to a single list instance in memory. Successive calls that omit the second argument mutate and share that exact same list object.',
    complexityInfo: 'Legendary Python exam question tested on PCEP and PCAP',
  },
  {
    id: 'pcep-s4-fc-037',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'Idiomatic None Sentinel for Mutable Defaults',
    category: 'Arguments',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How do you avoid the mutable default trap using None as a sentinel value?',
    codeSnippet: `def add_safe(val, lst=None):
    if lst is None:
        lst = []
    lst.append(val)
    return lst

print(add_safe(1))
print(add_safe(2))`,
    stdoutExpected: `[1]
[2]`,
    explanationTitle: 'None Sentinel Default Pattern',
    explanationText:
      'The standard Python idiom is to set the default parameter to immutable `None`. Inside the body, if `lst is None`, instantiate a fresh new list `[]` specifically for that invocation.',
    complexityInfo: 'Standard defensive coding pattern in Python',
  },
  {
    id: 'pcep-s4-fc-038',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'Passing Variables with Names Matching Parameters (x=x)',
    category: 'Arguments',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'Is writing func(x=x) valid when caller variable name matches the parameter name?',
    codeSnippet: `def scale(x):
    return x * 10

x = 5
print(scale(x=x))`,
    stdoutExpected: '50',
    explanationTitle: 'Keyword Argument Name Disambiguation',
    explanationText:
      'Writing `scale(x=x)` is completely valid. The left `x` specifies the parameter name of `scale`, while the right `x` refers to the caller’s local variable whose value `5` is passed, producing `5 * 10 = 50`.',
    complexityInfo: 'Common syntax pattern on PCEP',
  },
  {
    id: 'pcep-s4-fc-039',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'Argument Resolution: Positional Mapped Before Keyword',
    category: 'Arguments',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How does Python resolve arguments when combining positional and keyword values?',
    codeSnippet: `def greet(greeting, name, punct="!"):
    return f"{greeting}, {name}{punct}"

print(greet("Hello", punct=".", name="World"))`,
    stdoutExpected: 'Hello, World.',
    explanationTitle: 'Resolution Order: Positional Then Keyword',
    explanationText:
      'Python first resolves positional arguments from left to right (`greeting` receives `"Hello"`). Then it resolves keyword arguments by identifier (`punct="."` and `name="World"`), successfully filling all parameters.',
    complexityInfo: 'Argument binding mechanics on PCEP',
  },
  {
    id: 'pcep-s4-fc-040',
    track: 'pcep',
    cardType: 'PCEP 4.2 • Arguments & Defaults',
    topic: 'Function Signature Validation Rules Summary',
    category: 'Arguments',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'Which rule governs parameter ordering in def statements vs argument ordering in calls?',
    codeSnippet: `def valid_def(a, b=2): pass
# def invalid_def(a=1, b): pass -> SyntaxError

valid_def(1, b=3)
# valid_def(b=3, 1) -> SyntaxError`,
    stdoutExpected: '',
    explanationTitle: 'The Non-Default / Positional Precedence Rules',
    explanationText:
      'In a `def` signature: non-default parameters MUST come before default parameters. In an invocation: positional arguments MUST come before keyword arguments. Violating either results in a `SyntaxError`.',
    complexityInfo: 'Core takeaway summary of PCEP Chapter 4.2',
  },

  // =========================================================================
  // CHAPTER 4.3: VARIABLE SCOPE: LOCAL, GLOBAL & THE global KEYWORD (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pcep-s4-fc-041',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'Local Scope of Variables Inside Functions',
    category: 'Variable Scope',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Where can a variable defined inside a function be accessed?',
    codeSnippet: `def create_var():
    msg = "local secret"
    print("Inside:", msg)

create_var()`,
    stdoutExpected: 'Inside: local secret',
    explanationTitle: 'Function Local Scope Isolation',
    explanationText:
      'Variables created inside a function body belong to that function’s local scope. They are only visible and accessible during the execution of that specific function call.',
    complexityInfo: 'Official PCEP syllabus: local variable scope',
  },
  {
    id: 'pcep-s4-fc-042',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'NameError on Accessing Local Variable Outside Function',
    category: 'Variable Scope',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What exception occurs when attempting to read a function’s local variable in module scope?',
    codeSnippet: `def init():
    temp = 100

init()
try:
    print(temp)
except NameError as e:
    print("Caught NameError")`,
    stdoutExpected: 'Caught NameError',
    explanationTitle: 'Local Variables Do Not Exist Globally',
    explanationText:
      'Once `init()` completes, its local frame and variables are discarded. Attempting to reference `temp` outside the function raises `NameError: name \'temp\' is not defined`.',
    complexityInfo: 'Variable scope boundary rules on PCEP',
  },
  {
    id: 'pcep-s4-fc-043',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'Reading Global Variables Inside Functions',
    category: 'Variable Scope',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Can a function read the value of a global variable without the global keyword?',
    codeSnippet: `score = 50

def show_score():
    print("Score is", score)

show_score()`,
    stdoutExpected: 'Score is 50',
    explanationTitle: 'Read-Only Global Access is Free',
    explanationText:
      'If a variable is only being read (and not assigned to) inside a function, Python searches the local scope, does not find it, and looks up into the enclosing global scope. No `global` keyword is needed for read-only access.',
    complexityInfo: 'Official PCEP syllabus: reading global variables',
  },
  {
    id: 'pcep-s4-fc-044',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'Variable Shadowing (Local Hiding Global)',
    category: 'Variable Scope',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What happens when a local variable shares the same name as a global variable?',
    codeSnippet: `x = "global"

def test():
    x = "local"
    print("Inside:", x)

test()
print("Outside:", x)`,
    stdoutExpected: `Inside: local
Outside: global`,
    explanationTitle: 'Local Variable Shadows Global',
    explanationText:
      'Assigning `x = "local"` inside `test()` creates a local variable named `x` that shadows (hides) the global `x` within that function. The outer global variable `x` remains completely untouched.',
    complexityInfo: 'Variable shadowing fundamentals on PCEP',
  },
  {
    id: 'pcep-s4-fc-045',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'Lifetime of Local Variables Between Calls',
    category: 'Variable Scope',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Do local variables retain their values between consecutive function invocations?',
    codeSnippet: `def count():
    n = 0
    n += 1
    print(n, end=" ")

count()
count()
count()`,
    stdoutExpected: '1 1 1 ',
    explanationTitle: 'Local Variables Destroyed at Return',
    explanationText:
      'Each function invocation creates a brand-new local execution frame. `n` is re-initialized to `0` and incremented to `1` on every call. Local state is not retained across separate calls.',
    complexityInfo: 'Function stack frame lifecycle',
  },
  {
    id: 'pcep-s4-fc-046',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'UnboundLocalError on Modification Without global',
    category: 'Variable Scope',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Why does x += 1 inside a function raise UnboundLocalError when global x exists?',
    codeSnippet: `val = 10

def update():
    val += 1

try:
    update()
except UnboundLocalError as e:
    print("Caught UnboundLocalError")`,
    stdoutExpected: 'Caught UnboundLocalError',
    explanationTitle: 'Assignment Makes Variable Local at Compile Time',
    explanationText:
      'If Python sees any assignment to `val` within a function (`val += 1` is `val = val + 1`), it classifies `val` as a LOCAL variable throughout the entire function. When trying to read `val` to add 1 before assignment has occurred, it raises `UnboundLocalError`.',
    complexityInfo: 'Top 3 most famous Python scope exam traps',
  },
  {
    id: 'pcep-s4-fc-047',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'The global Keyword Declaration',
    category: 'Variable Scope',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'How do you tell Python that an assignment inside a function should modify a global variable?',
    codeSnippet: `counter = 0

def increment():
    global counter
    counter += 1

increment()
increment()
print(counter)`,
    stdoutExpected: '2',
    explanationTitle: 'The global Keyword Statement',
    explanationText:
      'The `global counter` statement explicitly instructs Python that references and assignments to `counter` within this function refer to the module-level global variable, not a local one.',
    complexityInfo: 'Official PCEP syllabus: the global keyword',
  },
  {
    id: 'pcep-s4-fc-048',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'Creating a New Global Variable from Inside a Function',
    category: 'Variable Scope',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Can the global keyword create a brand-new global variable that did not previously exist?',
    codeSnippet: `def create_global():
    global new_var
    new_var = "I am global"

create_global()
print(new_var)`,
    stdoutExpected: 'I am global',
    explanationTitle: 'Global Variable Creation from Local Scope',
    explanationText:
      '`global new_var` declares that `new_var` belongs to the module scope. When `new_var = "I am global"` executes, the variable is inserted into the global namespace and remains accessible after the function exits.',
    complexityInfo: 'Global declaration behavior on non-existing variables',
  },
  {
    id: 'pcep-s4-fc-049',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'Multiple Variables in a Single global Statement',
    category: 'Variable Scope',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Can you declare multiple global variables in one statement separated by commas?',
    codeSnippet: `a = 1
b = 2

def modify():
    global a, b
    a = 10
    b = 20

modify()
print(a + b)`,
    stdoutExpected: '30',
    explanationTitle: 'Comma-Separated global Declarations',
    explanationText:
      '`global a, b` declares both `a` and `b` as global in a single statement. Inside `modify()`, assigning to either updates the corresponding global variable.',
    complexityInfo: 'Syntax variations of global declarations',
  },
  {
    id: 'pcep-s4-fc-050',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'SyntaxError: Parameter Name Cannot Be Declared global',
    category: 'Variable Scope',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What happens if you declare a function parameter as global inside the function?',
    codeSnippet: `# def test(x):
#     global x
# SyntaxError: name 'x' is parameter and global
print("SyntaxError on global parameter")`,
    stdoutExpected: 'SyntaxError on global parameter',
    explanationTitle: 'Parameters Cannot Be Declared Global',
    explanationText:
      'Function parameters are fundamentally local to the function. Attempting to declare a parameter as `global` in the same scope produces a `SyntaxError: name \'x\' is parameter and global`.',
    complexityInfo: 'High-yield PCEP exam trick question',
  },
  {
    id: 'pcep-s4-fc-051',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'Mutating Global Objects Without global Keyword',
    category: 'Variable Scope',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Does mutating a global list (e.g. append) require the global keyword?',
    codeSnippet: `numbers = [1, 2]

def add():
    numbers.append(3) # Method call, NOT assignment to 'numbers'

add()
print(numbers)`,
    stdoutExpected: '[1, 2, 3]',
    explanationTitle: 'In-Place Mutation Does Not Rebind Variable',
    explanationText:
      'The `global` keyword is only required when REBINDING (assigning) a variable (`numbers = [...]`). Calling methods like `numbers.append(3)` merely reads the global reference and mutates the object in place, which does not require `global`.',
    complexityInfo: 'Critical distinction between mutation and rebinding',
  },
  {
    id: 'pcep-s4-fc-052',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'Reassigning a Global Container vs Mutating It',
    category: 'Variable Scope',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What is the output when a function reassigns lst = [99] without global?',
    codeSnippet: `lst = [1, 2]

def reassign():
    lst = [99]

reassign()
print(lst)`,
    stdoutExpected: '[1, 2]',
    explanationTitle: 'Reassignment Creates Local Variable',
    explanationText:
      'Because `lst = [99]` is an assignment, Python creates a local variable `lst` within `reassign()`. The global `lst` is unaffected and continues to reference `[1, 2]`.',
    complexityInfo: 'Scope rebinding vs object mutation',
  },
  {
    id: 'pcep-s4-fc-053',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'Parameters Shadowing Global Variables',
    category: 'Variable Scope',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What is the output when a function parameter has the same name as a global variable?',
    codeSnippet: `city = "Paris"

def travel(city):
    print("Visiting:", city)

travel("Tokyo")
print("Home:", city)`,
    stdoutExpected: `Visiting: Tokyo
Home: Paris`,
    explanationTitle: 'Parameter Shadows Outer Scope',
    explanationText:
      'The parameter `city` is strictly local to `travel()`. Inside `travel("Tokyo")`, `city` resolves to `"Tokyo"`. In global scope, `city` remains `"Paris"`.',
    complexityInfo: 'Local parameter shadowing on PCEP',
  },
  {
    id: 'pcep-s4-fc-054',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'Nested Function Scope (Enclosing Scope)',
    category: 'Variable Scope',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Can an inner function read variables from its enclosing outer function?',
    codeSnippet: `def outer():
    msg = "from outer"
    def inner():
        print(msg)
    inner()

outer()`,
    stdoutExpected: 'from outer',
    explanationTitle: 'Enclosing Lexical Scope',
    explanationText:
      'Python functions can be nested. The inner function has read access to names in its enclosing outer function’s scope. When `inner()` looks for `msg`, it finds it in `outer()`.',
    complexityInfo: 'Lexical scoping in Python',
  },
  {
    id: 'pcep-s4-fc-055',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'The LEGB Scope Resolution Rule',
    category: 'Variable Scope',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'In what order does Python search namespaces when looking up an identifier?',
    codeSnippet: `# L: Local (inside current function)
# E: Enclosing (nested outer functions)
# G: Global (module-level)
# B: Built-in (predefined Python names)
print("LEGB order")`,
    stdoutExpected: 'LEGB order',
    explanationTitle: 'LEGB Namespace Lookup Order',
    explanationText:
      'Python resolves names using the LEGB rule: **L**ocal first, then **E**nclosing functions, then **G**lobal (module), and finally **B**uilt-in (e.g. `len`, `range`, `print`). The first matching name found is used.',
    complexityInfo: 'Foundational Python architecture concept on PCEP',
  },
  {
    id: 'pcep-s4-fc-056',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'Shadowing Built-in Identifiers',
    category: 'Variable Scope',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What happens if you assign a variable named max in global scope?',
    codeSnippet: `max = 99
print(max)

try:
    print(max(1, 2))
except TypeError as e:
    print("Caught TypeError")`,
    stdoutExpected: `99
Caught TypeError`,
    explanationTitle: 'Global Scope Shadows Built-in Scope',
    explanationText:
      'Because Global (G) comes before Built-in (B) in LEGB, assigning `max = 99` shadows the built-in `max()` function. Attempting to call `max(1, 2)` attempts to call integer `99()`, raising a `TypeError: \'int\' object is not callable`.',
    complexityInfo: 'High-frequency exam trap on shadowing built-ins',
  },
  {
    id: 'pcep-s4-fc-057',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'State Persistence Across Invocations via Global Variables',
    category: 'Variable Scope',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What is the final value of total after three calls to accumulate()?',
    codeSnippet: `total = 0

def accumulate(n):
    global total
    total += n

accumulate(5)
accumulate(10)
accumulate(15)
print(total)`,
    stdoutExpected: '30',
    explanationTitle: 'Global State Accumulation',
    explanationText:
      'Because `total` is declared `global`, each call updates the persistent module-level variable: `0 + 5 + 10 + 15 = 30`.',
    complexityInfo: 'Global state persistence across calls',
  },
  {
    id: 'pcep-s4-fc-058',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'Function Execution Has Zero Side-Effects on Unmodified Globals',
    category: 'Variable Scope',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What is the output of this code snippet?',
    codeSnippet: `x = 100

def test(x):
    x = 200
    return x

test(300)
print(x)`,
    stdoutExpected: '100',
    explanationTitle: 'Caller Scope Isolation',
    explanationText:
      'The parameter `x` and local assignment `x = 200` are completely confined to `test()`. The global variable `x` remains `100`. Calling the function does not change global `x`.',
    complexityInfo: 'Exam pattern: tracking variable values through calls',
  },
  {
    id: 'pcep-s4-fc-059',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'Global Declaration with Initializer is Invalid Syntax',
    category: 'Variable Scope',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Can you assign a value on the same line as the global statement (global x = 10)?',
    codeSnippet: `# def init():
#     global x = 10
# SyntaxError: invalid syntax
print("SyntaxError on global assignment")`,
    stdoutExpected: 'SyntaxError on global assignment',
    explanationTitle: 'global Statement Does Not Accept Values',
    explanationText:
      'The `global` statement only accepts variable names (`global x`). Assigning a value on the same line (`global x = 10`) is a compile-time `SyntaxError`. You must declare `global x` first, and assign `x = 10` on a subsequent line.',
    complexityInfo: 'PCEP syntax precision rule',
  },
  {
    id: 'pcep-s4-fc-060',
    track: 'pcep',
    cardType: 'PCEP 4.3 • Variable Scope',
    topic: 'Pure Functions vs Impure Functions',
    category: 'Variable Scope',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What distinguishes a pure function from a function with side effects?',
    codeSnippet: `def pure_add(a, b):
    return a + b

print(pure_add(2, 3))`,
    stdoutExpected: '5',
    explanationTitle: 'Pure Function Characteristics',
    explanationText:
      'A pure function depends solely on its input arguments, does not modify any external/global state (no side effects), and consistently returns the exact same result for identical arguments.',
    complexityInfo: 'Functional programming concept on PCEP',
  },

  // =========================================================================
  // CHAPTER 4.4: BASIC EXCEPTION HANDLING: try-except BLOCKS (Cards 61 to 70)
  // =========================================================================
  {
    id: 'pcep-s4-fc-061',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & try-except',
    topic: 'What is an Exception in Python?',
    category: 'Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What is an exception, and what happens when an unhandled exception occurs?',
    codeSnippet: `print("Before error")
try:
    1 / 0
except ZeroDivisionError:
    print("Caught error!")
print("After error")`,
    stdoutExpected: `Before error
Caught error!
After error`,
    explanationTitle: 'Exceptions and Crash Prevention',
    explanationText:
      'An exception is an event or error that disrupts the normal flow of instructions during program execution. If unhandled, it halts the program with a traceback. With `try-except`, the program gracefully catches the error and continues running.',
    complexityInfo: 'Official PCEP syllabus: exception handling fundamentals',
  },
  {
    id: 'pcep-s4-fc-062',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & try-except',
    topic: 'The Basic try-except Syntax',
    category: 'Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What are the two mandatory clauses of a basic exception handling block?',
    codeSnippet: `try:
    num = int("abc")
except ValueError:
    num = 0

print("num =", num)`,
    stdoutExpected: 'num = 0',
    explanationTitle: 'try and except Clause Pair',
    explanationText:
      'The code that may fail is placed inside the `try:` block. If an exception matches the `except:` clause, execution jumps immediately to the `except:` block to handle the error.',
    complexityInfo: 'Core try-except structure on PCEP',
  },
  {
    id: 'pcep-s4-fc-063',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & try-except',
    topic: 'Execution Flow When No Exception Occurs in try',
    category: 'Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'Does the except block execute if no exception is raised inside try?',
    codeSnippet: `try:
    print("Line 1")
    x = 10 / 2
    print("Line 2")
except ZeroDivisionError:
    print("Caught division by zero")
print("Line 3")`,
    stdoutExpected: `Line 1
Line 2
Line 3`,
    explanationTitle: 'Except Block Skipped on Success',
    explanationText:
      'If all statements inside the `try` block complete without raising an exception, Python skips the `except` block entirely and continues execution with the subsequent code.',
    complexityInfo: 'Control flow through successful try blocks',
  },
  {
    id: 'pcep-s4-fc-064',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & try-except',
    topic: 'Immediate Control Transfer on Exception',
    category: 'Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'Do lines in a try block following a faulting line execute?',
    codeSnippet: `try:
    print("A")
    res = 1 / 0
    print("B")
except ZeroDivisionError:
    print("C")
print("D")`,
    stdoutExpected: `A
C
D`,
    explanationTitle: 'Statements After Error Are Abandoned',
    explanationText:
      'The moment an exception occurs at `res = 1 / 0`, execution inside the `try` block instantly terminates. Statement `"B"` is never reached. Execution resumes inside the matching `except` block (`"C"`), then proceeds to `"D"`.',
    complexityInfo: 'High-frequency exam control flow question',
  },
  {
    id: 'pcep-s4-fc-065',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & try-except',
    topic: 'Catching Specific Exceptions vs Wrong Type',
    category: 'Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What happens if the exception raised does not match the type in except?',
    codeSnippet: `try:
    try:
        val = int("hello")
    except ZeroDivisionError:
        print("Caught ZeroDivisionError")
except ValueError:
    print("Caught unhandled ValueError externally")`,
    stdoutExpected: 'Caught unhandled ValueError externally',
    explanationTitle: 'Mismatched Exception Escapes',
    explanationText:
      'If the raised exception (`ValueError`) does not match the type declared in the `except` clause (`ZeroDivisionError`), the inner `except` block is bypassed and the exception propagates upward.',
    complexityInfo: 'Exception matching rules on PCEP',
  },
  {
    id: 'pcep-s4-fc-066',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & try-except',
    topic: 'Bare except: Clause (Catch-All)',
    category: 'Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What does a bare except: statement without an exception name do?',
    codeSnippet: `try:
    x = [1, 2][99]
except:
    print("Caught an exception with bare except")`,
    stdoutExpected: 'Caught an exception with bare except',
    explanationTitle: 'Bare except Catches Everything',
    explanationText:
      'An `except:` clause without a specified class name is a wildcard catch-all that catches any exception (including system exit signals). It must always be placed as the LAST except clause.',
    complexityInfo: 'Wildcard except clause syntax on PCEP',
  },
  {
    id: 'pcep-s4-fc-067',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & try-except',
    topic: 'Multiple except Clauses',
    category: 'Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do multiple except blocks handle different error conditions?',
    codeSnippet: `def parse_and_divide(s):
    try:
        n = int(s)
        return 100 / n
    except ValueError:
        return "Invalid integer"
    except ZeroDivisionError:
        return "Cannot divide by zero"

print(parse_and_divide("0"))
print(parse_and_divide("xyz"))`,
    stdoutExpected: `Cannot divide by zero
Invalid integer`,
    explanationTitle: 'Multiple Specialized except Clauses',
    explanationText:
      'A `try` block can be followed by multiple `except` clauses. Python checks them in sequential order from top to bottom, executing only the FIRST matching clause and skipping the rest.',
    complexityInfo: 'Handling distinct error types gracefully',
  },
  {
    id: 'pcep-s4-fc-068',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & try-except',
    topic: 'SyntaxError: Bare except Must Be Last',
    category: 'Exceptions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'Why does placing a bare except: before except ValueError: cause a SyntaxError?',
    codeSnippet: `# try:
#     x = 1
# except:
#     pass
# except ValueError:
#     pass
# SyntaxError: default 'except:' must be last
print("SyntaxError: bare except must be last")`,
    stdoutExpected: 'SyntaxError: bare except must be last',
    explanationTitle: 'Default except Clause Positioning Rule',
    explanationText:
      'In Python, a bare `except:` acts as the default fallback. It is syntactically invalid to place any other `except` clause after a bare `except:`. Violating this produces `SyntaxError: default \'except:\' must be last`.',
    complexityInfo: 'Top PCEP exam syntax trap on exception structure',
  },
  {
    id: 'pcep-s4-fc-069',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & try-except',
    topic: 'Catching Multiple Exceptions in a Single Tuple',
    category: 'Exceptions',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do you catch both ValueError and TypeError in a single except clause?',
    codeSnippet: `def test(val):
    try:
        return int(val)
    except (ValueError, TypeError):
        return -1

print(test("abc"))
print(test([1, 2]))`,
    stdoutExpected: `-1
-1`,
    explanationTitle: 'Tuple of Exceptions Syntax',
    explanationText:
      'To catch multiple exception types with identical handling, specify them as a parenthesized tuple: `except (ValueError, TypeError):`. Parentheses are mandatory; omitting them causes a syntax or runtime error.',
    complexityInfo: 'Multi-exception tuple syntax on PCEP',
  },
  {
    id: 'pcep-s4-fc-070',
    track: 'pcep',
    cardType: 'PCEP 4.4 • Exceptions & try-except',
    topic: 'Exception Propagation Up the Call Stack',
    category: 'Exceptions',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What happens when an exception is raised inside a function without a try block?',
    codeSnippet: `def level2():
    return 10 / 0

def level1():
    try:
        level2()
    except ZeroDivisionError:
        print("Caught in level1")

level1()`,
    stdoutExpected: 'Caught in level1',
    explanationTitle: 'Call Stack Exception Propagation',
    explanationText:
      'If an exception is not caught inside the function where it occurred (`level2`), it propagates up the call stack to the caller (`level1`). If `level1` has an enclosing `try-except` that matches, it catches the exception there.',
    complexityInfo: 'Exception bubbling and stack unwinding on PCEP',
  },
];
