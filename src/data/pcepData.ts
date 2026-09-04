import { SkillModule, CodingChallenge, Flashcard, PcepExamQuestion } from '../types';

/**
 * PCEP-30-02 Certified Entry-Level Python Programmer
 * Official Syllabus Specification from Python Institute
 * Sections / Blocks:
 * 1. Computer Programming and Python Fundamentals (18%) -> PCEP-30-02 1.1 to 1.4
 * 2. Control Flow – Conditional Blocks and Loops (29%) -> PCEP-30-02 2.1 to 2.4
 * 3. Data Collections – Tuples, Dictionaries, Lists, and Strings (25%) -> PCEP-30-02 3.1 to 3.4
 * 4. Functions and Exceptions (28%) -> PCEP-30-02 4.1 to 4.4
 */

export const pcepModulesData: SkillModule[] = [
  {
    id: 'block-1',
    moduleNumber: 'Section 1',
    pcepBlockCode: 'PCEP-30-02 Block 1',
    title: 'Computer Programming & Python Fundamentals',
    examWeightPercent: 18,
    status: 'mastered',
    completionText: '4 / 4 Chapters completed • 100% Mastered',
    syllabusDescription:
      'Fundamental terminology, CPython execution model, syntax structure, dynamic typing, literals, numeral systems, and operator precedence.',
    quizStatus: 'Quiz Passed (100% Score)',
    nodes: [
      {
        id: 'pcep-1-1',
        pcepCode: 'PCEP-30-02 1.1',
        title: 'Fundamental terms and definitions',
        shortDesc: 'Interpreting vs Compilation, Lexis, Syntax & Semantics.',
        fullDesc:
          'Grasp the core concepts of Python\'s execution model: the essential distinction between Ahead-of-Time compilation (AOT) and on-the-fly interpretation, the role of the CPython Virtual Machine and .pyc bytecode files, and the rigorous boundaries between lexis (valid tokens), syntax (grammar rules), and semantics (runtime meaning of instructions).',
        status: 'mastered',
        stars: 3,
        duration: '15 min',
        xp: 120,
        progressText: '3/3 Exercises completed',
        progressPercent: 100,
        iconName: 'terminal',
        challengeId: 'challenge-pcep-1-1',
        examWeight: '18% of exam (Block 1)',
        syllabusItems: [
          'Interpreting and the interpreter (CPython bytecode execution)',
          'Compilation and the compiler (.pyc generation)',
          'Lexis, syntax, and semantics of programming languages',
        ],
        exercises: [
          { title: '1. Lexical analysis and valid tokens', completed: true, time: '0.03s' },
          { title: '2. Distinguish SyntaxError from runtime semantic errors', completed: true, time: '0.05s' },
          { title: '3. PCEP Challenge: CPython bytecode lifecycle', completed: true, time: '0.04s' },
        ],
        codeSnippet: `# PCEP-30-02 1.1 Example: Lexical vs Syntax vs Semantic Error
# Valid syntax but semantic runtime failure (ZeroDivisionError):
def divide(a, b):
    return a / b  # Syntax is OK, semantics require b != 0

result = divide(10, 2)
print("Valid quotient:", result)`,
      },
      {
        id: 'pcep-1-2',
        pcepCode: 'PCEP-30-02 1.2',
        title: "Python's logic and structure",
        shortDesc: 'Keywords, PEP 8 indentation, line continuation, comments.',
        fullDesc:
          'Understand Python script structure: inventory of 35 reserved keywords (False, None, True, and, as, assert, async, await, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield), strict indentation rules (4 spaces, no mixing tabs and spaces), line continuation with backslash (\\), and PEP 8 comment best practices.',
        status: 'mastered',
        stars: 3,
        duration: '15 min',
        xp: 120,
        progressText: '3/3 Exercises completed',
        progressPercent: 100,
        iconName: 'code',
        challengeId: 'challenge-pcep-1-2',
        examWeight: '18% of exam (Block 1)',
        syllabusItems: [
          'Keywords: reserved words in Python that cannot be variable names',
          'Instructions: statements, line continuation character (\\)',
          'Indentation: 4 spaces standard, IndentationError vs TabError',
          'Comments: single line (#) and PEP 8 best practices',
        ],
        exercises: [
          { title: '1. Identify reserved keyword naming violations', completed: true, time: '0.04s' },
          { title: '2. Fix IndentationError indentation blocks', completed: true, time: '0.03s' },
          { title: '3. Multi-line statement continuation with \\', completed: true, time: '0.06s' },
        ],
        codeSnippet: `# PCEP-30-02 1.2 Example: Keywords and strict indentation
# 'for' and 'in' are reserved Python keywords
total = 0
for value in [10, 20, 30]:
    # Mandatory 4-space block indentation
    total += value

# Multi-line statement continuation
status = "OK" if total > 50 \
    else "INSUFFICIENT"
print(status, "Total:", total)`,
      },
      {
        id: 'pcep-1-3',
        pcepCode: 'PCEP-30-02 1.3',
        title: 'Literals, variables and numeral systems',
        shortDesc: 'Integers, floats, scientific notation, binary/octal/hex.',
        fullDesc:
          'Master Python\'s fundamental data types and literals: decimal, binary (0b), octal (0o), and hexadecimal (0x) number representations. Understand scientific floating-point notation (3e-4), string delimiters, boolean values (True / False), dynamic typing without explicit declaration, and Python\'s internal naming rules for variables.',
        status: 'mastered',
        stars: 3,
        duration: '20 min',
        xp: 150,
        progressText: '3/3 Exercises completed',
        progressPercent: 100,
        iconName: 'hash',
        challengeId: 'challenge-pcep-1-3',
        examWeight: '18% of exam (Block 1)',
        syllabusItems: [
          'Literals: boolean, integer, floating-point, scientific notation',
          'Numeral systems: binary (0b), octal (0o), hexadecimal (0x)',
          'String literals, quotes escaping, and multiline quotes',
          'Variables and naming conventions (PEP 8 snake_case)',
        ],
        exercises: [
          { title: '1. Convert bases: 0b1101, 0o17, 0x1F to decimal', completed: true, time: '0.04s' },
          { title: '2. Floats, scientific notation (1e3 vs 1e-3)', completed: true, time: '0.03s' },
          { title: '3. Variable re-assignment and dynamic typing', completed: true, time: '0.05s' },
        ],
        codeSnippet: `# PCEP-30-02 1.3 Example: Numeral bases and literal types
bin_val = 0b1011    # 11 in decimal
oct_val = 0o17      # 15 in decimal
hex_val = 0x1F      # 31 in decimal
sci_flt = 2.5e-3    # 0.0025 float

print(f"Bases: {bin_val}, {oct_val}, {hex_val}")
print(f"Float: {sci_flt} (type: {type(sci_flt).__name__})")`,
      },
      {
        id: 'pcep-1-4',
        pcepCode: 'PCEP-30-02 1.4',
        title: 'Operators and data types',
        shortDesc: 'Precedence, floor division, right-associativity of **.',
        fullDesc:
          'Master the exact arithmetic operators (+, -, *, /, //, %, **), bitwise operators (~, &, ^, |, <<, >>), and logical operators (not, and, or). Deep dive into floor division behavior with negative numbers (-6 // 4 == -2), right-to-left associativity of exponentiation (2 ** 3 ** 2 == 512), and type casting with int(), float(), str().',
        status: 'mastered',
        stars: 3,
        duration: '25 min',
        xp: 180,
        progressText: '4/4 Exercises completed',
        progressPercent: 100,
        iconName: 'cpu',
        challengeId: 'challenge-pcep-1-4',
        examWeight: '18% of exam (Block 1)',
        syllabusItems: [
          'Arithmetic operators and unary vs binary binding',
          'Floor division (//) and modulo (%) on negative operands',
          'Right-associativity of exponentiation operator (**)',
          'Operator precedence table & explicit parentheses',
          'Type casting: int(), float(), str() conversion rules',
        ],
        exercises: [
          { title: '1. Right-associativity: 2 ** 3 ** 2 == 512', completed: true, time: '0.02s' },
          { title: '2. Floor division with negative numbers (-7 // 2 == -4)', completed: true, time: '0.04s' },
          { title: '3. Modulo operator logic with negative values', completed: true, time: '0.03s' },
          { title: '4. Operator precedence evaluation ladder', completed: true, time: '0.05s' },
        ],
        codeSnippet: `# PCEP-30-02 1.4 Example: Operator precedence traps
# Exponentiation binds right-to-left:
val1 = 2 ** 3 ** 2   # 2 ** (3 ** 2) = 2 ** 9 = 512

# Floor division rounds toward negative infinity:
val2 = -7 // 2       # -4 (not -3)

# String replication vs addition:
val3 = "Py" * 2 + "thon" # "PyPython"

print("val1:", val1, "| val2:", val2, "| val3:", val3)`,
      },
    ],
  },
  {
    id: 'block-2',
    moduleNumber: 'Section 2',
    pcepBlockCode: 'PCEP-30-02 Block 2',
    title: 'Control Flow – Conditional Blocks and Loops',
    examWeightPercent: 29,
    status: 'active',
    completionText: '3 / 4 Chapters completed • 75% Mastered',
    syllabusDescription:
      'Relational and comparison operators, conditional branching (if-elif-else), while and for loops, loop control statements (break, continue), loop else blocks, and nested loop patterns.',
    quizStatus: 'In Progress (Score 88%)',
    nodes: [
      {
        id: 'pcep-2-1',
        pcepCode: 'PCEP-30-02 2.1',
        title: 'Decision making with if instructions',
        shortDesc: 'Comparison operators, boolean logic, nested branching.',
        fullDesc:
          'Construct conditional logic using equality (==, !=) and comparison (<, <=, >, >=) operators. Understand short-circuit evaluation of logical operators and/or, falsy values in Python (0, 0.0, "", [], (), {}, None), and clean branching with if-elif-else structures.',
        status: 'mastered',
        stars: 3,
        duration: '20 min',
        xp: 140,
        progressText: '3/3 Exercises completed',
        progressPercent: 100,
        iconName: 'git-branch',
        challengeId: 'challenge-pcep-2-1',
        examWeight: '29% of exam (Block 2)',
        syllabusItems: [
          'Relational operators: ==, !=, >, >=, <, <=',
          'Logical expressions: and, or, not (short-circuiting)',
          'Conditional statements: if, if-else, if-elif-else',
          'Truthiness: falsy evaluation of empty containers and 0',
        ],
        exercises: [
          { title: '1. Short-circuit evaluation traps with and/or', completed: true, time: '0.03s' },
          { title: '2. Multi-tier tiering with if-elif-else', completed: true, time: '0.04s' },
          { title: '3. Falsy values evaluation (0, "", [], None)', completed: true, time: '0.02s' },
        ],
        codeSnippet: `# PCEP-30-02 2.1 Example: Short-circuiting and truthiness
x = 0
y = 10
# 'and' short-circuits on first falsy operand:
res = x and (y / x > 1) # Does not raise ZeroDivisionError!

# Multi-condition branching:
score = 85
if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
else:
    grade = 'C'
print("Result:", res, "| Grade:", grade)`,
      },
      {
        id: 'pcep-2-2',
        pcepCode: 'PCEP-30-02 2.2',
        title: 'Perform different types of iterations',
        shortDesc: 'while loops, for loops with range(start, stop, step).',
        fullDesc:
          'Master iterative control structures in Python: count-controlled loops using range() with 1, 2, and 3 arguments (start, stop, step, including negative decrements), condition-controlled while loops, and off-by-one boundary conditions.',
        status: 'mastered',
        stars: 3,
        duration: '20 min',
        xp: 150,
        progressText: '3/3 Exercises completed',
        progressPercent: 100,
        iconName: 'repeat',
        challengeId: 'challenge-pcep-2-2',
        examWeight: '29% of exam (Block 2)',
        syllabusItems: [
          'The while loop: condition evaluation and termination',
          'The for loop: iterating over iterable sequences',
          'The range() function: range(stop), range(start, stop), range(start, stop, step)',
          'Negative step loops: range(10, 0, -2)',
        ],
        exercises: [
          { title: '1. range(1, 10, 2) step sequence analysis', completed: true, time: '0.03s' },
          { title: '2. Decrement loops with range(5, 0, -1)', completed: true, time: '0.04s' },
          { title: '3. while loop convergence and sentinel values', completed: true, time: '0.05s' },
        ],
        codeSnippet: `# PCEP-30-02 2.2 Example: range() stop boundary and negative step
# Stop value is strictly excluded:
evens = list(range(2, 10, 2))  # [2, 4, 6, 8]

# Negative step countdown:
countdown = []
for n in range(5, 0, -1):
    countdown.append(n)
print("Evens:", evens, "| Countdown:", countdown)`,
      },
      {
        id: 'pcep-2-3',
        pcepCode: 'PCEP-30-02 2.3',
        title: 'Control loop execution with break and continue',
        shortDesc: 'Early termination with break, skipping with continue.',
        fullDesc:
          'Control loop flow using break (immediate exit of the innermost active loop) and continue (skip remaining body and proceed to next iteration). Study exam edge cases such as code placed after continue or loop counters skipped.',
        status: 'active',
        stars: 2,
        duration: '25 min',
        xp: 160,
        progressText: '2/3 Exercises completed',
        progressPercent: 66,
        iconName: 'skip-forward',
        challengeId: 'challenge-pcep-2-3',
        examWeight: '29% of exam (Block 2)',
        syllabusItems: [
          'The break statement: immediate loop exit',
          'The continue statement: skip remainder of current iteration',
          'Impact of break/continue on loop counters and accumulators',
        ],
        exercises: [
          { title: '1. break on sentinel value encounter', completed: true, time: '0.04s' },
          { title: '2. continue to filter odd numbers', completed: true, time: '0.03s' },
          { title: '3. PCEP Challenge: Nested loops break behavior', completed: false, time: '---' },
        ],
        codeSnippet: `# PCEP-30-02 2.3 Example: break and continue interaction
accum = 0
for i in range(1, 10):
    if i % 2 == 0:
        continue  # Skip even numbers
    if i > 6:
        break     # Stop once odd number exceeds 6
    accum += i

# Evaluated i values: 1 (+1), 2 (skip), 3 (+3), 4 (skip), 5 (+5), 6 (skip), 7 (break)
print("Accumulated sum:", accum) # 9`,
      },
      {
        id: 'pcep-2-4',
        pcepCode: 'PCEP-30-02 2.4',
        title: 'Loop extensions: else branch & nested loops',
        shortDesc: 'for...else, while...else, nested loop traversal.',
        fullDesc:
          'Deep dive into one of Python\'s signature constructs: the loop else clause. Understand that the else block executes ONLY if the loop finishes naturally without encountering a break statement. Master multi-dimensional nested loops (matrices, coordinate grids).',
        status: 'ready',
        stars: 0,
        duration: '25 min',
        xp: 170,
        progressText: '0/3 Exercises completed',
        progressPercent: 0,
        iconName: 'layers',
        challengeId: 'challenge-pcep-2-4',
        examWeight: '29% of exam (Block 2)',
        syllabusItems: [
          'The else clause in while and for loops',
          'The rule: else is executed only when no break occurs',
          'Nested loops and inner vs outer loop termination',
        ],
        exercises: [
          { title: '1. for...else prime number search pattern', completed: false, time: '---' },
          { title: '2. while...else with break exit vs natural exit', completed: false, time: '---' },
          { title: '3. Flattening 2D coordinate nested loops', completed: false, time: '---' },
        ],
        codeSnippet: `# PCEP-30-02 2.4 Example: Loop 'else' clause
target = 7
numbers = [1, 3, 5, 9]

for n in numbers:
    if n == target:
        print("Found!")
        break
else:
    # Executed ONLY because no 'break' was triggered
    print(f"Target {target} not found in sequence.")`,
      },
    ],
  },
  {
    id: 'block-3',
    moduleNumber: 'Section 3',
    pcepBlockCode: 'PCEP-30-02 Block 3',
    title: 'Data Collections – Lists, Tuples, Dictionaries & Strings',
    examWeightPercent: 25,
    status: 'active',
    completionText: '2 / 4 Chapters completed • 50% Mastered',
    syllabusDescription:
      'Indexing, slicing [start:stop:step], list methods (append, insert, pop, sort), tuples and immutability, dictionaries (key-value pairs, get, update), string operations and immutability.',
    quizStatus: 'In Progress (Score 75%)',
    nodes: [
      {
        id: 'pcep-3-1',
        pcepCode: 'PCEP-30-02 3.1',
        title: 'Collect and process data using lists',
        shortDesc: 'Indexing, slicing, in/not in, append, insert, pop, sort.',
        fullDesc:
          'Explore Python lists as mutable dynamic arrays: 0-based positive indexing, negative indexing (-1), slicing syntax list[start:stop:step], membership testing with in and not in, del statement, and key methods: append(), insert(), pop(), remove(), sort(), reverse(), and len().',
        status: 'mastered',
        stars: 3,
        duration: '30 min',
        xp: 200,
        progressText: '4/4 Exercises completed',
        progressPercent: 100,
        iconName: 'list',
        challengeId: 'challenge-pcep-3-1',
        examWeight: '25% of exam (Block 3)',
        syllabusItems: [
          'List indexing and negative indices (lst[-1])',
          'Slicing: lst[1:4], lst[::-1], lst[:3], slice assignment',
          'List mutation: append(), insert(), extend(), del, pop()',
          'List sorting: lst.sort() in-place vs sorted(lst) copy',
        ],
        exercises: [
          { title: '1. Slicing with step and reversal: seq[::-1]', completed: true, time: '0.03s' },
          { title: '2. In-place sorting vs sorted() returning new list', completed: true, time: '0.04s' },
          { title: '3. insert(index, val) and pop() shift operations', completed: true, time: '0.04s' },
          { title: '4. List aliasing vs shallow copy (lst[:] or copy())', completed: true, time: '0.05s' },
        ],
        codeSnippet: `# PCEP-30-02 3.1 Example: List mutation and slicing
nums = [10, 20, 30, 40, 50]
nums.append(60)
nums.insert(1, 15)   # [10, 15, 20, 30, 40, 50, 60]

sub = nums[1:5:2]    # indices 1 and 3 -> [15, 30]
reversed_nums = nums[::-1]
print("Slice:", sub, "| Reversed:", reversed_nums[:3])`,
      },
      {
        id: 'pcep-3-2',
        pcepCode: 'PCEP-30-02 3.2',
        title: 'Collect and process data using tuples',
        shortDesc: 'Immutability, tuple creation, single element (item,).',
        fullDesc:
          'Understand tuples as immutable ordered sequences: tuple creation syntax (including the critical single-element tuple syntax (42,)), TypeError when attempting item assignment, tuple unpacking, and converting between lists and tuples with list() and tuple().',
        status: 'mastered',
        stars: 3,
        duration: '20 min',
        xp: 150,
        progressText: '3/3 Exercises completed',
        progressPercent: 100,
        iconName: 'shield',
        challengeId: 'challenge-pcep-3-2',
        examWeight: '25% of exam (Block 3)',
        syllabusItems: [
          'Tuple immutability and memory efficiency',
          'Single-element tuple trap: t = (1,) vs t = (1)',
          'Tuple unpacking: a, b = (10, 20)',
          'Sequence conversion: tuple(lst) and list(tup)',
        ],
        exercises: [
          { title: '1. Distinguish integer in parens from 1-tuple (x,)', completed: true, time: '0.02s' },
          { title: '2. Immutability guarantee: catch TypeError on write', completed: true, time: '0.03s' },
          { title: '3. Sequence unpacking in for loops', completed: true, time: '0.04s' },
        ],
        codeSnippet: `# PCEP-30-02 3.2 Example: Tuple syntax and immutability
not_a_tuple = (50)    # int!
real_tuple = (50,)    # tuple!

coords = (100, 200)
# coords[0] = 150     # Raises TypeError: 'tuple' does not support item assignment
x, y = coords         # Unpacking
print(f"type(not_a_tuple): {type(not_a_tuple).__name__}")
print(f"type(real_tuple): {type(real_tuple).__name__} | x={x}, y={y}")`,
      },
      {
        id: 'pcep-3-3',
        pcepCode: 'PCEP-30-02 3.3',
        title: 'Collect and process data using dictionaries',
        shortDesc: 'Key-value pairs, keys(), values(), items(), get(), in.',
        fullDesc:
          'Master Python dictionaries as mutable mappings of hashable keys to arbitrary values: key constraints (strings, integers, tuples are allowed; lists and dicts are forbidden), key lookup, dict.keys(), dict.values(), dict.items(), dict.get() with defaults, update(), and pop().',
        status: 'active',
        stars: 1,
        duration: '25 min',
        xp: 180,
        progressText: '2/4 Exercises completed',
        progressPercent: 50,
        iconName: 'database',
        challengeId: 'challenge-pcep-3-3',
        examWeight: '25% of exam (Block 3)',
        syllabusItems: [
          'Dictionary structure: keys, values, and key uniqueness',
          'Hashable key requirement (unhashable type: list raises TypeError)',
          'Methods: keys(), values(), items(), get(key, default)',
          'Membership testing: "key" in dict checks KEYS (not values)',
        ],
        exercises: [
          { title: '1. Key lookup and handling KeyError with get()', completed: true, time: '0.04s' },
          { title: '2. "x in d" verifies keys, not values', completed: true, time: '0.03s' },
          { title: '3. PCEP Challenge: Dict aggregation and update()', completed: false, time: '---' },
          { title: '4. Iterating over .items() unpacking (k, v)', completed: false, time: '---' },
        ],
        codeSnippet: `# PCEP-30-02 3.3 Example: Dictionary operations
user = {"name": "Alice", "role": "admin", "level": 3}

# 'in' checks keys by default:
has_role = "role" in user       # True
has_admin = "admin" in user     # False! "admin" is a value

# Safe retrieval with fallback default:
xp = user.get("xp", 0)          # 0, no KeyError
print("has_role:", has_role, "| has_admin:", has_admin, "| xp:", xp)`,
      },
      {
        id: 'pcep-3-4',
        pcepCode: 'PCEP-30-02 3.4',
        title: 'Operate with strings',
        shortDesc: 'String immutability, chr/ord, find, split, join, strip.',
        fullDesc:
          'Understand strings as immutable sequences of Unicode characters: indexing, slicing, ASCII/Unicode conversions with ord() and chr(), string methods: .find(), .count(), .index(), .lower(), .upper(), .strip(), .replace(), .split(), and delimiter.join().',
        status: 'ready',
        stars: 0,
        duration: '25 min',
        xp: 170,
        progressText: '0/3 Exercises completed',
        progressPercent: 0,
        iconName: 'type',
        challengeId: 'challenge-pcep-3-4',
        examWeight: '25% of exam (Block 3)',
        syllabusItems: [
          'String immutability (TypeError on str[0] = "x")',
          'Character points: ord("A") == 65 and chr(65) == "A"',
          'Searching: str.find() returns -1 on miss vs str.index() raises ValueError',
          'Transformation: split(), join(), strip(), replace()',
        ],
        exercises: [
          { title: '1. ord() and chr() round-trip conversions', completed: false, time: '---' },
          { title: '2. find() returning -1 vs index() raising ValueError', completed: false, time: '---' },
          { title: '3. CSV parsing with .split(",") and .join()', completed: false, time: '---' },
        ],
        codeSnippet: `# PCEP-30-02 3.4 Example: String methods & immutability
text = "PCEP-Certified-Python"
parts = text.split("-")         # ['PCEP', 'Certified', 'Python']
rebuilt = "::".join(parts)      # 'PCEP::Certified::Python'

pos = text.find("Python")       # 15
missing = text.find("Java")     # -1 (does NOT raise ValueError)

print("Rebuilt:", rebuilt, "| pos:", pos, "| missing:", missing)`,
      },
    ],
  },
  {
    id: 'block-4',
    moduleNumber: 'Section 4',
    pcepBlockCode: 'PCEP-30-02 Block 4',
    title: 'Functions and Exceptions',
    examWeightPercent: 28,
    status: 'active',
    completionText: '1 / 4 Chapters completed • 25% Mastered',
    syllabusDescription:
      'Function definition (def), parameters vs arguments, positional vs keyword arguments, default parameters, return and None, scope rules (global keyword), exception hierarchy, try-except blocks, else and finally clauses.',
    quizStatus: 'In Progress (Score 65%)',
    nodes: [
      {
        id: 'pcep-4-1',
        pcepCode: 'PCEP-4-1',
        title: 'Decompose the code using functions',
        shortDesc: 'def, return, None, positional vs keyword arguments.',
        fullDesc:
          'Decompose programs into modular functions using def: understanding return values (implicit return None when return statement is omitted), passing positional vs keyword arguments, ordering rules (positional arguments must precede keyword arguments), and default parameter values.',
        status: 'mastered',
        stars: 3,
        duration: '25 min',
        xp: 180,
        progressText: '3/3 Exercises completed',
        progressPercent: 100,
        iconName: 'box',
        challengeId: 'challenge-pcep-4-1',
        examWeight: '28% of exam (Block 4)',
        syllabusItems: [
          'Function declaration: def function_name():',
          'The return statement and implicit None return value',
          'Positional arguments and keyword arguments',
          'Default parameter values and position rules',
        ],
        exercises: [
          { title: '1. Mixing positional and keyword arguments correctly', completed: true, time: '0.03s' },
          { title: '2. Default parameters evaluation behavior', completed: true, time: '0.04s' },
          { title: '3. Functions returning None implicitly', completed: true, time: '0.02s' },
        ],
        codeSnippet: `# PCEP-30-02 4.1 Example: Positional and keyword argument rules
def power(base, exp=2):
    return base ** exp

val1 = power(3)              # 9 (default exp=2)
val2 = power(exp=3, base=2)  # 8 (keyword arguments)
# power(base=2, 3)           # SyntaxError: positional argument follows keyword argument

print("val1:", val1, "| val2:", val2)`,
      },
      {
        id: 'pcep-4-2',
        pcepCode: 'PCEP-30-02 4.2',
        title: 'Function and environment interaction',
        shortDesc: 'Variable scopes (LEGB), the global keyword, parameter shadow.',
        fullDesc:
          'Master Python scope resolution rules (LEGB: Local, Enclosing, Global, Built-in): reading global variables from within functions, UnboundLocalError when assigning locally without declaring global, mutating mutable arguments in-place, and variable shadowing.',
        status: 'active',
        stars: 1,
        duration: '20 min',
        xp: 150,
        progressText: '1/3 Exercises completed',
        progressPercent: 33,
        iconName: 'share-2',
        challengeId: 'challenge-pcep-4-2',
        examWeight: '28% of exam (Block 4)',
        syllabusItems: [
          'Variable scope: Local vs Global scopes',
          'The global keyword: modifying global variables inside functions',
          'UnboundLocalError trap when assigning before declaration',
          'Passing mutable objects (lists) and in-place side effects',
        ],
        exercises: [
          { title: '1. The global keyword and module-level variables', completed: true, time: '0.04s' },
          { title: '2. UnboundLocalError diagnostic and resolution', completed: false, time: '---' },
          { title: '3. List modification as function side effect', completed: false, time: '---' },
        ],
        codeSnippet: `# PCEP-30-02 4.2 Example: Scope and 'global' keyword
counter = 100

def increment():
    global counter
    counter += 1

increment()
print("Counter after increment:", counter) # 101`,
      },
      {
        id: 'pcep-4-3',
        pcepCode: 'PCEP-30-02 4.3',
        title: 'Python built-in exceptions hierarchy',
        shortDesc: 'BaseException, Exception, ArithmeticError, LookupError.',
        fullDesc:
          'Study Python\'s official exception inheritance tree: BaseException -> Exception -> (ArithmeticError, LookupError, ValueError, TypeError, etc.). Understand that ArithmeticError is the parent class of ZeroDivisionError and OverflowError, and LookupError is the parent class of IndexError and KeyError.',
        status: 'ready',
        stars: 0,
        duration: '25 min',
        xp: 190,
        progressText: '0/3 Exercises completed',
        progressPercent: 0,
        iconName: 'alert-triangle',
        challengeId: 'challenge-pcep-4-3',
        examWeight: '28% of exam (Block 4)',
        syllabusItems: [
          'BaseException vs Exception tree hierarchy',
          'ArithmeticError: ZeroDivisionError, OverflowError',
          'LookupError: IndexError, KeyError',
          'Order of except clauses: specific before generic subclasses',
        ],
        exercises: [
          { title: '1. Exception tree traversal: LookupError parentage', completed: false, time: '---' },
          { title: '2. ArithmeticError catching ZeroDivisionError', completed: false, time: '---' },
          { title: '3. Ordering except clauses to avoid unreachable code', completed: false, time: '---' },
        ],
        codeSnippet: `# PCEP-30-02 4.3 Example: Exception inheritance
# LookupError is the base class for both IndexError and KeyError
try:
    items = [1, 2, 3]
    val = items[99] # IndexError
except LookupError as err:
    # Catches IndexError because IndexError inherits from LookupError
    print("Caught by LookupError handler:", type(err).__name__)`,
      },
      {
        id: 'pcep-4-4',
        pcepCode: 'PCEP-30-02 4.4',
        title: 'Basics of Python exception handling',
        shortDesc: 'try, except, else, finally, raise, ZeroDivisionError.',
        fullDesc:
          'Implement structured error handling in Python: try block, multiple except clauses, catching multiple exceptions in a tuple except (ValueError, TypeError):, the else block (executes only when no exception occurs), the finally block (guaranteed cleanup), and the raise keyword.',
        status: 'ready',
        stars: 0,
        duration: '30 min',
        xp: 220,
        progressText: '0/4 Exercises completed',
        progressPercent: 0,
        iconName: 'shield-alert',
        challengeId: 'challenge-pcep-4-4',
        examWeight: '28% of exam (Block 4)',
        syllabusItems: [
          'The try-except structure for graceful error recovery',
          'Multiple except handlers and exception argument binding',
          'The else block: executed only when try succeeds',
          'The finally block: guaranteed execution for cleanup',
          'The raise statement to trigger exceptions intentionally',
        ],
        exercises: [
          { title: '1. Catch multiple exceptions in tuple except (TypeError, ValueError)', completed: false, time: '---' },
          { title: '2. The else block in try-except-else constructs', completed: false, time: '---' },
          { title: '3. The finally block guarantee across return statements', completed: false, time: '---' },
          { title: '4. PCEP Challenge: Resilient calculator and raise', completed: false, time: '---' },
        ],
        codeSnippet: `# PCEP-30-02 4.4 Example: try-except-else-finally lifecycle
def safe_divide(a, b):
    try:
        res = a / b
    except ZeroDivisionError:
        print("Error: division by zero!")
        return None
    else:
        print("Success! Division succeeded.")
        return res
    finally:
        print("Cleanup: execution completed.")

ans = safe_divide(10, 2)`,
      },
    ],
  },
];

/**
 * PCEP-30-02 Interactive Coding Challenges for Pythor IDE
 */
export const pcepChallengesData: Record<string, CodingChallenge> = {
  'challenge-pcep-1-1': {
    id: 'challenge-pcep-1-1',
    track: 'PCEP-30-02 Block 1',
    category: '1.1 Definitions & CPython Model',
    pcepCode: 'PCEP-30-02 1.1',
    pcepObjective: 'Understand fundamental terms, interpreter vs compiler, lexis, syntax, and semantics.',
    challengeNumber: 1,
    title: 'Lexical Analyzer & CPython Error Classifier',
    difficulty: 'Beginner',
    xpReward: 120,
    estimatedMinutes: 8,
    mode: 'free',
    pedagogicalObjective:
      'In the PCEP exam, you must instantly distinguish syntax errors from semantic runtime errors. Write a function classify_error(error_name) that categorizes common Python errors.',
    guidelines: [
      'If error_name is "SyntaxError", return "Syntactic".',
      'If error_name is in ["ZeroDivisionError", "IndexError", "TypeError", "ValueError"], return "Semantic".',
      'For any other string, return "Unknown".',
    ],
    executionSteps: {
      input: '"ZeroDivisionError"',
      step1: 'Check if the name is in the list of runtime semantic errors',
      step2: 'Validate CPython classification',
      output: '"Semantic"',
    },
    starterCode: `def classify_error(error_name: str) -> str:
    # Return "Syntactic" for SyntaxError,
    # "Semantic" for runtime errors (ZeroDivisionError, IndexError, etc.),
    # and "Unknown" otherwise.
    if error_name == "SyntaxError":
        return "Syntactic"
    elif error_name in ["ZeroDivisionError", "IndexError", "TypeError", "ValueError"]:
        return "Semantic"
    return "Unknown"

if __name__ == "__main__":
    print(classify_error("ZeroDivisionError"))
`,
    blankCode: `def classify_error(error_name: str) -> str:
    if error_name == "SyntaxError":
        return "____"
    elif error_name in ["ZeroDivisionError", "IndexError", "TypeError", "ValueError"]:
        return "____"
    return "Unknown"
`,
    solutionCode: `def classify_error(error_name: str) -> str:
    if error_name == "SyntaxError":
        return "Syntactic"
    elif error_name in ["ZeroDivisionError", "IndexError", "TypeError", "ValueError"]:
        return "Semantic"
    return "Unknown"
`,
    testCases: [
      {
        id: 't-1',
        name: 'Test 1: Semantic runtime error',
        invocation: 'classify_error("ZeroDivisionError")',
        expectedOutput: '"Semantic"',
        passed: true,
      },
      {
        id: 't-2',
        name: 'Test 2: Syntactic grammar error',
        invocation: 'classify_error("SyntaxError")',
        expectedOutput: '"Syntactic"',
        passed: true,
      },
      {
        id: 't-3',
        name: 'Test 3: Unlisted error',
        invocation: 'classify_error("CustomError")',
        expectedOutput: '"Unknown"',
        passed: true,
      },
    ],
    hints: [
      { tier: 1, title: 'Parse time vs Runtime', cost: 0, content: 'SyntaxError occurs before bytecode execution during the parsing phase.', unlocked: true },
      { tier: 2, title: 'List of runtime errors', cost: 10, content: 'ZeroDivisionError, IndexError, TypeError, ValueError are all semantic runtime exceptions.', unlocked: false },
      { tier: 3, title: 'Default branch', cost: 20, content: 'Any other error name should return "Unknown".', unlocked: false },
    ],
    aiFeedback: {
      badge: 'CPython Engine Analysis',
      title: 'Distinction between parsing and execution',
      text: 'Always remember that SyntaxError prevents code from starting, while semantic errors arise during execution.',
    },
  },
  'challenge-pcep-1-3': {
    id: 'challenge-pcep-1-3',
    track: 'PCEP-30-02 Block 1',
    category: '1.3 Numeral Systems & Literals',
    pcepCode: 'PCEP-30-02 1.3',
    pcepObjective: 'Work with literals, variables, dynamic typing, and numeral systems (binary, octal, hex).',
    challengeNumber: 2,
    title: 'Multi-Base Number Parser (Binary, Octal, Hex)',
    difficulty: 'Beginner',
    xpReward: 150,
    estimatedMinutes: 10,
    mode: 'free',
    pedagogicalObjective:
      'The PCEP syllabus tests binary (0b), octal (0o), and hexadecimal (0x) integer representations. Write parse_literal(literal_str) that parses string literals into integer values.',
    guidelines: [
      'If the string starts with "0b" or "0B", parse as base 2.',
      'If the string starts with "0o" or "0O", parse as base 8.',
      'If the string starts with "0x" or "0X", parse as base 16.',
      'Otherwise, parse as standard decimal (base 10).',
    ],
    executionSteps: {
      input: '"0b1011"',
      step1: 'Detect prefix 0b -> base 2',
      step2: 'Convert "1011" base 2 to integer 11',
      output: '11',
    },
    starterCode: `def parse_literal(literal_str: str) -> int:
    prefix = literal_str[:2].lower()
    if prefix == "0b":
        return int(literal_str[2:], 2)
    elif prefix == "0o":
        return int(literal_str[2:], 8)
    elif prefix == "0x":
        return int(literal_str[2:], 16)
    return int(literal_str, 10)

if __name__ == "__main__":
    print(parse_literal("0b1011"))
    print(parse_literal("0x1F"))
`,
    blankCode: `def parse_literal(literal_str: str) -> int:
    prefix = literal_str[:2].lower()
    if prefix == "0b":
        return int(literal_str[2:], 2)
    elif prefix == "0o":
        return int(literal_str[2:], 8)
    elif prefix == "0x":
        return int(literal_str[2:], 16)
    return int(literal_str, 10)
`,
    solutionCode: `def parse_literal(literal_str: str) -> int:
    prefix = literal_str[:2].lower()
    if prefix == "0b":
        return int(literal_str[2:], 2)
    elif prefix == "0o":
        return int(literal_str[2:], 8)
    elif prefix == "0x":
        return int(literal_str[2:], 16)
    return int(literal_str, 10)
`,
    testCases: [
      {
        id: 't-1',
        name: 'Test 1: Binary 0b1011',
        invocation: 'parse_literal("0b1011")',
        expectedOutput: '11',
        passed: true,
      },
      {
        id: 't-2',
        name: 'Test 2: Octal 0o17',
        invocation: 'parse_literal("0o17")',
        expectedOutput: '15',
        passed: true,
      },
      {
        id: 't-3',
        name: 'Test 3: Hexadecimal 0x1F',
        invocation: 'parse_literal("0x1F")',
        expectedOutput: '31',
        passed: true,
      },
    ],
    hints: [
      { tier: 1, title: 'Prefix Detection', cost: 0, content: 'Check the first two characters using literal_str[:2].lower().', unlocked: true },
      { tier: 2, title: 'int() with Base', cost: 10, content: 'Use int(literal_str[2:], 2) for binary, base 8 for octal, base 16 for hex.', unlocked: false },
      { tier: 3, title: 'Decimal Fallback', cost: 20, content: 'Standard integers can be parsed directly with int(literal_str, 10).', unlocked: false },
    ],
    aiFeedback: {
      badge: 'Radix Conversion Logic',
      title: 'Numeral Bases Representation',
      text: 'Python 3 supports 0b (binary), 0o (octal), and 0x (hexadecimal) literal representations natively.',
    },
  },
  'challenge-pcep-2-3': {
    id: 'challenge-pcep-2-3',
    track: 'PCEP-30-02 Block 2',
    category: '2.3 Control Flow & Loops',
    pcepCode: 'PCEP-30-02 2.3',
    pcepObjective: 'Control loop execution using break and continue in conditional iterations.',
    challengeNumber: 3,
    title: 'Loop Filter with Sentinel break and continue',
    difficulty: 'Intermediate',
    xpReward: 160,
    estimatedMinutes: 12,
    mode: 'free',
    pedagogicalObjective:
      'Iterate through a sequence, skip values satisfying a filter condition using continue, and terminate immediately with break when encountering a sentinel value.',
    guidelines: [
      'Iterate over the list numbers.',
      'If a number is equal to sentinel, immediately stop the loop with break.',
      'If a number is negative (n < 0), skip it using continue.',
      'Accumulate all positive numbers before the sentinel and return the sum.',
    ],
    executionSteps: {
      input: 'numbers=[5, -2, 10, -8, 999, 20], sentinel=999',
      step1: 'Add 5, skip -2, add 10, skip -8',
      step2: 'Encounter 999 -> break (stop, ignore 20)',
      output: '15',
    },
    starterCode: `def sum_until_sentinel(numbers: list, sentinel: int) -> int:
    total = 0
    for n in numbers:
        if n == sentinel:
            break
        if n < 0:
            continue
        total += n
    return total

if __name__ == "__main__":
    nums = [10, -5, 20, 999, 50]
    print("Sum:", sum_until_sentinel(nums, 999))
`,
    blankCode: `def sum_until_sentinel(numbers: list, sentinel: int) -> int:
    total = 0
    for n in numbers:
        if n == sentinel:
            break
        if n < 0:
            continue
        total += n
    return total
`,
    solutionCode: `def sum_until_sentinel(numbers: list, sentinel: int) -> int:
    total = 0
    for n in numbers:
        if n == sentinel:
            break
        if n < 0:
            continue
        total += n
    return total
`,
    testCases: [
      {
        id: 't-1',
        name: 'Test 1: Standard sequence with sentinel',
        invocation: 'sum_until_sentinel([10, -5, 20, 999, 50], 999)',
        expectedOutput: '30',
        passed: true,
      },
      {
        id: 't-2',
        name: 'Test 2: Sentinel in first position',
        invocation: 'sum_until_sentinel([999, 10, 20], 999)',
        expectedOutput: '0',
        passed: true,
      },
      {
        id: 't-3',
        name: 'Test 3: No sentinel encountered',
        invocation: 'sum_until_sentinel([1, 2, -3, 4], 999)',
        expectedOutput: '7',
        passed: true,
      },
    ],
    hints: [
      { tier: 1, title: 'Check Sentinel First', cost: 0, content: 'Evaluate if n == sentinel before updating the total.', unlocked: true },
      { tier: 2, title: 'Skip with continue', cost: 10, content: 'If n < 0, use continue to immediately advance to the next iteration.', unlocked: false },
      { tier: 3, title: 'Break Immediately', cost: 20, content: 'When the sentinel is met, break out of the loop without adding further numbers.', unlocked: false },
    ],
    aiFeedback: {
      badge: 'Loop Execution Flow',
      title: 'Effective Loop Control',
      text: 'break terminates the loop completely while continue only aborts the current iteration cycle.',
    },
  },
  'challenge-pcep-3-3': {
    id: 'challenge-pcep-3-3',
    track: 'PCEP-30-02 Block 3',
    category: '3.3 Data Collections: Dictionaries',
    pcepCode: 'PCEP-30-02 3.3',
    pcepObjective: 'Collect and process data using dictionaries and their methods.',
    challengeNumber: 4,
    title: 'Word Frequency Counter & Dictionary Aggregator',
    difficulty: 'Intermediate',
    xpReward: 180,
    estimatedMinutes: 12,
    mode: 'free',
    pedagogicalObjective:
      'Dictionaries are a core component of Block 3. Write word_frequencies(words) which counts the occurrences of each word in a list using the .get() method.',
    guidelines: [
      'Initialize an empty dictionary counts = {}.',
      'For each word in the list words, increment its counter.',
      'Use counts[word] = counts.get(word, 0) + 1.',
      'Return the resulting dictionary.',
    ],
    executionSteps: {
      input: '["python", "pcep", "python", "code"]',
      step1: 'Iterate through word list',
      step2: 'Aggregate counts using dict.get(key, 0) + 1',
      output: '{"python": 2, "pcep": 1, "code": 1}',
    },
    starterCode: `def word_frequencies(words: list) -> dict:
    counts = {}
    for word in words:
        counts[word] = counts.get(word, 0) + 1
    return counts

if __name__ == "__main__":
    items = ["cat", "dog", "cat", "bird", "dog", "cat"]
    print(word_frequencies(items))
`,
    blankCode: `def word_frequencies(words: list) -> dict:
    counts = {}
    for word in words:
        counts[word] = counts.get(word, 0) + 1
    return counts
`,
    solutionCode: `def word_frequencies(words: list) -> dict:
    counts = {}
    for word in words:
        counts[word] = counts.get(word, 0) + 1
    return counts
`,
    testCases: [
      {
        id: 't-1',
        name: 'Test 1: Standard word count',
        invocation: 'word_frequencies(["a", "b", "a"])',
        expectedOutput: '{"a": 2, "b": 1}',
        passed: true,
      },
      {
        id: 't-2',
        name: 'Test 2: Empty list',
        invocation: 'word_frequencies([])',
        expectedOutput: '{}',
        passed: true,
      },
    ],
    hints: [
      { tier: 1, title: 'Dictionary Initialization', cost: 0, content: 'Start with an empty dictionary: counts = {}.', unlocked: true },
      { tier: 2, title: 'Safe Retrieval', cost: 10, content: 'Use dict.get(word, 0) to avoid KeyError on new words.', unlocked: false },
      { tier: 3, title: 'Aggregation', cost: 20, content: 'Assign counts[word] = counts.get(word, 0) + 1 on each step.', unlocked: false },
    ],
    aiFeedback: {
      badge: 'Hash Map Aggregation',
      title: 'Dictionary Lookup Optimization',
      text: 'Using .get() with a default value is idiomatic and safer than checking key membership beforehand.',
    },
  },
  'challenge-pcep-4-4': {
    id: 'challenge-pcep-4-4',
    track: 'PCEP-30-02 Block 4',
    category: '4.4 Functions & Exceptions',
    pcepCode: 'PCEP-30-02 4.4',
    pcepObjective: 'Implement structured exception handling with try, except, else, finally, and raise.',
    challengeNumber: 5,
    title: 'Resilient Calculator with Complete Exception Handling',
    difficulty: 'Intermediate',
    xpReward: 220,
    estimatedMinutes: 15,
    mode: 'free',
    pedagogicalObjective:
      'Build a robust calculation function that handles ZeroDivisionError and TypeError gracefully, raising a custom ValueError when an invalid operator is supplied.',
    guidelines: [
      'Support operators "+", "-", "*", "/".',
      'If the operator is not supported, raise ValueError("Unsupported operator").',
      'Wrap operations in a try-except block.',
      'Catch ZeroDivisionError and return "Error: ZeroDivisionError".',
      'Catch TypeError and return "Error: TypeError".',
      'On success, return the numerical result.',
    ],
    executionSteps: {
      input: 'a=10, b=0, op="/"',
      step1: 'Execute division in try block',
      step2: 'Catch ZeroDivisionError',
      output: '"Error: ZeroDivisionError"',
    },
    starterCode: `def calculate(a, b, op: str):
    if op not in ["+", "-", "*", "/"]:
        raise ValueError("Unsupported operator")
    try:
        if op == "+":
            return a + b
        elif op == "-":
            return a - b
        elif op == "*":
            return a * b
        elif op == "/":
            return a / b
    except ZeroDivisionError:
        return "Error: ZeroDivisionError"
    except TypeError:
        return "Error: TypeError"

if __name__ == "__main__":
    print(calculate(10, 2, "/"))
    print(calculate(10, 0, "/"))
    print(calculate(10, "5", "+"))
`,
    blankCode: `def calculate(a, b, op: str):
    if op not in ["+", "-", "*", "/"]:
        raise ValueError("Unsupported operator")
    try:
        if op == "+":
            return a + b
        elif op == "-":
            return a - b
        elif op == "*":
            return a * b
        elif op == "/":
            return a / b
    except ZeroDivisionError:
        return "Error: ZeroDivisionError"
    except TypeError:
        return "Error: TypeError"
`,
    solutionCode: `def calculate(a, b, op: str):
    if op not in ["+", "-", "*", "/"]:
        raise ValueError("Unsupported operator")
    try:
        if op == "+":
            return a + b
        elif op == "-":
            return a - b
        elif op == "*":
            return a * b
        elif op == "/":
            return a / b
    except ZeroDivisionError:
        return "Error: ZeroDivisionError"
    except TypeError:
        return "Error: TypeError"
`,
    testCases: [
      {
        id: 't-1',
        name: 'Test 1: Division by zero caught',
        invocation: 'calculate(10, 0, "/")',
        expectedOutput: '"Error: ZeroDivisionError"',
        passed: true,
      },
      {
        id: 't-2',
        name: 'Test 2: TypeError with invalid types caught',
        invocation: 'calculate(10, "2", "+")',
        expectedOutput: '"Error: TypeError"',
        passed: true,
      },
      {
        id: 't-3',
        name: 'Test 3: Valid subtraction',
        invocation: 'calculate(20, 5, "-")',
        expectedOutput: '15',
        passed: true,
      },
    ],
    hints: [
      { tier: 1, title: 'Validate Operator', cost: 0, content: 'Check if op in ["+", "-", "*", "/"] and raise ValueError if not.', unlocked: true },
      { tier: 2, title: 'Try-Except Block', cost: 10, content: 'Wrap the arithmetic operation in a try block.', unlocked: false },
      { tier: 3, title: 'Specific Handlers', cost: 20, content: 'Catch ZeroDivisionError and TypeError separately and return the designated error strings.', unlocked: false },
    ],
    aiFeedback: {
      badge: 'Exception Resilience',
      title: 'Graceful Error Handling',
      text: 'Catching specific exceptions rather than a broad Exception clause ensures unexpected bugs are not masked.',
    },
  },
};

export const pcepFlashcardsData: Flashcard[] = [
  {
    id: 'pcep-card-1',
    cardType: 'PCEP 1.4: OPERATOR PRECEDENCE',
    topic: 'Right-associativity of **',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.50 (6d)',
    intervalDays: 6,
    question: 'What integer value does this Python code print when executed?',
    codeSnippet: `x = 2 ** 3 ** 2
print(x)`,
    stdoutExpected: '512',
    explanationTitle: 'Right-to-left associativity for exponentiation (**)',
    explanationText:
      'Unlike almost all binary operators in Python (+, -, *, /) which evaluate from left to right, the exponentiation operator (**) binds from right to left. Thus, 2 ** 3 ** 2 is evaluated as 2 ** (3 ** 2) = 2 ** 9 = 512, NOT as (2 ** 3) ** 2 = 64.',
    complexityInfo: 'Strict rule from official PCEP-30-02 operator precedence table.',
  },
  {
    id: 'pcep-card-2',
    cardType: 'PCEP 1.4: FLOOR DIVISION & ROUNDING',
    topic: 'Floor division with negative numbers',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.40 (4d)',
    intervalDays: 4,
    question: 'What is the output of print(-6 // 4) in Python 3?',
    codeSnippet: `val = -6 // 4
print(val)`,
    stdoutExpected: '-2',
    explanationTitle: 'Floor division rounds toward negative infinity',
    explanationText:
      'The // operator performs floor division, which rounds down towards negative infinity. -6 / 4 = -1.5. The nearest integer less than or equal to -1.5 on the real number line is -2 (not -1, because -1 is greater than -1.5).',
    complexityInfo: 'CPython floor division rule: floor(-1.5) == -2.',
  },
  {
    id: 'pcep-card-3',
    cardType: 'PCEP 4.3: EXCEPTION HIERARCHY',
    topic: 'Exception inheritance tree',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.60 (10d)',
    intervalDays: 10,
    question: 'Which exception class is the direct parent of both IndexError and KeyError?',
    codeSnippet: `# Official CPython Hierarchy:
# BaseException -> Exception -> ??? -> (IndexError, KeyError)`,
    stdoutExpected: 'LookupError',
    explanationTitle: 'The LookupError superclass',
    explanationText:
      'LookupError is the direct base class for exceptions raised when a key or index used on a mapping or sequence is invalid. Both IndexError (invalid sequence index) and KeyError (nonexistent dictionary key) inherit directly from LookupError.',
    complexityInfo: 'Official PCEP syllabus: BaseException -> Exception -> LookupError.',
  },
  {
    id: 'pcep-card-4',
    cardType: 'PCEP 2.4: LOOP ELSE BRANCH',
    topic: 'for...else termination logic',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.30 (3d)',
    intervalDays: 3,
    question: 'What does this loop construct print?',
    codeSnippet: `for i in range(3):
    if i == 1:
        continue
else:
    print("Done")`,
    stdoutExpected: 'Done',
    explanationTitle: 'The loop else block executes if no break occurred',
    explanationText:
      'A loop else block executes whenever the loop finishes its iterations normally. Because continue skips only the rest of the current iteration (and does not terminate the loop early like break does), the loop terminates naturally and the else block is executed.',
    complexityInfo: 'PCEP rule: break suppresses the else clause; continue does not.',
  },
  {
    id: 'pcep-card-5',
    cardType: 'PCEP 3.2: TUPLE LITERAL SYNTAX',
    topic: 'Single-element tuple declaration',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.50 (7d)',
    intervalDays: 7,
    question: 'What is the type of variable x declared as: x = (42)?',
    codeSnippet: `x = (42)
print(type(x).__name__)`,
    stdoutExpected: 'int',
    explanationTitle: 'Parentheses alone do not create a tuple',
    explanationText:
      'In Python, parentheses around an expression are treated as mathematical grouping. To create a single-element tuple, a trailing comma is mandatory: (42,). Therefore, (42) is simply the integer 42 of type int.',
    complexityInfo: 'Single-element tuple syntax: (item,) is required.',
  },
  {
    id: 'pcep-card-6',
    cardType: 'PCEP 3.1: LIST SLICING WITH STEP',
    topic: 'Negative step slicing',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.40 (5d)',
    intervalDays: 5,
    question: 'What is the output of the slice lst[4:1:-1] on lst = [10, 20, 30, 40, 50]?',
    codeSnippet: `lst = [10, 20, 30, 40, 50]
print(lst[4:1:-1])`,
    stdoutExpected: '[50, 40, 30]',
    explanationTitle: 'Negative step moves from right to left',
    explanationText:
      'With start=4 (value 50) and stop=1 (value 20, excluded) and step=-1, Python collects elements at indices 4, 3, and 2. The result is [50, 40, 30]. Notice index 1 (value 20) is excluded as stop is exclusive.',
    complexityInfo: 'Negative step slicing: start > stop is required to be non-empty.',
  },
  {
    id: 'pcep-card-7',
    cardType: 'PCEP 4.1: DEFAULT PARAMETERS',
    topic: 'Keyword argument binding rules',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.50 (6d)',
    intervalDays: 6,
    question: 'Is this function call valid in Python 3?',
    codeSnippet: `def compute(x, y=10, z=20):
    return x + y + z

# Call:
res = compute(5, z=50)`,
    stdoutExpected: 'Valid (returns 65)',
    explanationTitle: 'Positional followed by keyword argument',
    explanationText:
      'This call is completely valid. Positional arguments must appear before keyword arguments. Here, x takes positional value 5, y retains its default value 10, and z is explicitly overridden with 50. Sum = 5 + 10 + 50 = 65.',
    complexityInfo: 'Rule: Positional arguments must never follow keyword arguments.',
  },
  {
    id: 'pcep-card-8',
    cardType: 'PCEP 3.4: STRING IMMUTABILITY',
    topic: 'In-place item assignment attempt',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.60 (8d)',
    intervalDays: 8,
    question: 'What exception is raised by the statement s[0] = "H" if s = "hello"?',
    codeSnippet: `s = "hello"
s[0] = "H"`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'Strings are immutable sequences in Python',
    explanationText:
      'Strings in Python cannot be mutated in place. Any attempt to modify an element by index raises TypeError: \'str\' object does not support item assignment. To modify a string, a new string must be constructed.',
    complexityInfo: 'Immutability: strings, tuples, and frozensets are immutable.',
  },
];

/**
 * 30 Official-Style PCEP Exam Questions for Mock Exam Simulator (40 min, 70% passing threshold)
 */
export const pcepMockExamQuestions: PcepExamQuestion[] = [
  {
    id: 'q-1',
    pcepCode: 'PCEP-30-02 1.1',
    blockNumber: 1,
    blockName: 'Computer Programming & Fundamentals',
    question: 'Which component of CPython is responsible for translating Python source code into portable bytecode (.pyc)?',
    options: [
      { id: 'a', text: 'The internal compiler of the CPython interpreter', isCorrect: true },
      { id: 'b', text: 'The host operating system kernel', isCorrect: false },
      { id: 'c', text: 'The Garbage Collector', isCorrect: false },
      { id: 'd', text: 'The dynamic link library loader', isCorrect: false },
    ],
    explanation: 'CPython first compiles source code (.py) into intermediate bytecode (.pyc), which is subsequently executed by the Python Virtual Machine (PVM).',
    format: 'single_choice',
  },
  {
    id: 'q-2',
    pcepCode: 'PCEP-30-02 1.2',
    blockNumber: 1,
    blockName: 'Computer Programming & Fundamentals',
    question: 'Which of the following identifiers is a reserved Python 3 keyword and CANNOT be used as a variable name?',
    options: [
      { id: 'a', text: 'total', isCorrect: false },
      { id: 'b', text: 'pass', isCorrect: true },
      { id: 'c', text: 'output', isCorrect: false },
      { id: 'd', text: 'integer', isCorrect: false },
    ],
    explanation: "'pass' is a reserved keyword in Python (representing a no-op statement). Reserved keywords cannot be used as variable names or identifiers.",
    format: 'single_choice',
  },
  {
    id: 'q-3',
    pcepCode: 'PCEP-30-02 1.3',
    blockNumber: 1,
    blockName: 'Computer Programming & Fundamentals',
    question: 'What is the decimal value of the integer literal 0b1011?',
    options: [
      { id: 'a', text: '1011', isCorrect: false },
      { id: 'b', text: '11', isCorrect: true },
      { id: 'c', text: '13', isCorrect: false },
      { id: 'd', text: '7', isCorrect: false },
    ],
    explanation: 'The 0b prefix indicates a binary literal: 1*8 + 0*4 + 1*2 + 1*1 = 11.',
    format: 'single_choice',
  },
  {
    id: 'q-4',
    pcepCode: 'PCEP-30-02 1.3',
    blockNumber: 1,
    blockName: 'Computer Programming & Fundamentals',
    question: 'What is the data type of the variable created by the expression: x = 3e-2?',
    options: [
      { id: 'a', text: 'int', isCorrect: false },
      { id: 'b', text: 'float', isCorrect: true },
      { id: 'c', text: 'scientific', isCorrect: false },
      { id: 'd', text: 'decimal', isCorrect: false },
    ],
    explanation: 'In Python, any numeric literal using scientific exponent notation (e or E) is evaluated as a floating-point number (float), here equal to 0.03.',
    format: 'single_choice',
  },
  {
    id: 'q-5',
    pcepCode: 'PCEP-30-02 1.4',
    blockNumber: 1,
    blockName: 'Computer Programming & Fundamentals',
    question: 'What value will be printed by the following code snippet?\n\nx = 2 ** 3 ** 2\nprint(x)',
    options: [
      { id: 'a', text: '64', isCorrect: false },
      { id: 'b', text: '512', isCorrect: true },
      { id: 'c', text: '36', isCorrect: false },
      { id: 'd', text: '256', isCorrect: false },
    ],
    explanation: 'The exponentiation operator (**) binds from right to left: 2 ** (3 ** 2) = 2 ** 9 = 512, not (2 ** 3) ** 2.',
    format: 'single_choice',
  },
  {
    id: 'q-6',
    pcepCode: 'PCEP-30-02 1.4',
    blockNumber: 1,
    blockName: 'Computer Programming & Fundamentals',
    question: 'What is the result of the expression: -6 // 4 in Python 3?',
    options: [
      { id: 'a', text: '-1', isCorrect: false },
      { id: 'b', text: '-2', isCorrect: true },
      { id: 'c', text: '-1.5', isCorrect: false },
      { id: 'd', text: '1', isCorrect: false },
    ],
    explanation: 'Floor division (//) rounds down towards negative infinity: -6 / 4 = -1.5, and the greatest integer <= -1.5 is -2.',
    format: 'single_choice',
  },
  {
    id: 'q-7',
    pcepCode: 'PCEP-30-02 2.1',
    blockNumber: 2,
    blockName: 'Control Flow – Blocks & Loops',
    question: 'Which of the following values evaluates to TRUTHY (True) in a boolean condition?',
    options: [
      { id: 'a', text: '"" (empty string)', isCorrect: false },
      { id: 'b', text: '0.0', isCorrect: false },
      { id: 'c', text: '"0" (string containing "0")', isCorrect: true },
      { id: 'd', text: '[] (empty list)', isCorrect: false },
    ],
    explanation: 'Any non-empty string in Python evaluates to True in a boolean context, even if its content is the character "0". Empty collections, empty strings, and numeric zero evaluate to False.',
    format: 'single_choice',
  },
  {
    id: 'q-8',
    pcepCode: 'PCEP-30-02 2.1',
    blockNumber: 2,
    blockName: 'Control Flow – Blocks & Loops',
    question: 'What is the output of the following script?\n\nx = 10\nif x > 5:\n    if x == 10:\n        print("A", end="")\nelif x > 2:\n    print("B", end="")\nelse:\n    print("C", end="")',
    options: [
      { id: 'a', text: 'AB', isCorrect: false },
      { id: 'b', text: 'A', isCorrect: true },
      { id: 'c', text: 'ABC', isCorrect: false },
      { id: 'd', text: 'B', isCorrect: false },
    ],
    explanation: 'The condition x > 5 is True, so Python enters the first block and prints "A". Because this primary if was satisfied, the elif and else branches are skipped entirely.',
    format: 'single_choice',
  },
  {
    id: 'q-9',
    pcepCode: 'PCEP-30-02 2.2',
    blockNumber: 2,
    blockName: 'Control Flow – Blocks & Loops',
    question: 'How many times will "Python" be printed?\n\nfor i in range(1, 10, 3):\n    print("Python")',
    options: [
      { id: 'a', text: '3 times (values 1, 4, 7)', isCorrect: true },
      { id: 'b', text: '4 times (values 1, 4, 7, 10)', isCorrect: false },
      { id: 'c', text: '2 times (values 1, 4)', isCorrect: false },
      { id: 'd', text: '10 times', isCorrect: false },
    ],
    explanation: 'range(1, 10, 3) generates the values 1, 4, 7. The next value would be 10, but the stop value 10 is strictly exclusive. Hence, the loop runs exactly 3 times.',
    format: 'single_choice',
  },
  {
    id: 'q-10',
    pcepCode: 'PCEP-30-02 2.3',
    blockNumber: 2,
    blockName: 'Control Flow – Blocks & Loops',
    question: 'What is the output of this code snippet?\n\ntotal = 0\nfor i in range(5):\n    if i == 2:\n        continue\n    if i == 4:\n        break\n    total += i\nprint(total)',
    options: [
      { id: 'a', text: '4', isCorrect: true },
      { id: 'b', text: '6', isCorrect: false },
      { id: 'c', text: '10', isCorrect: false },
      { id: 'd', text: '3', isCorrect: false },
    ],
    explanation: 'i=0: total=0; i=1: total=1; i=2: continue (skipped); i=3: total=1+3=4; i=4: break (loop terminated). Total printed is 4.',
    format: 'single_choice',
  },
  {
    id: 'q-11',
    pcepCode: 'PCEP-30-02 2.4',
    blockNumber: 2,
    blockName: 'Control Flow – Blocks & Loops',
    question: 'What does the else branch in a while or for loop do?',
    options: [
      { id: 'a', text: 'It executes only if the loop terminates naturally without hitting a break statement', isCorrect: true },
      { id: 'b', text: 'It executes only if the loop was interrupted by a break statement', isCorrect: false },
      { id: 'c', text: 'It executes on every iteration after the loop body', isCorrect: false },
      { id: 'd', text: 'It executes only if an exception is raised inside the loop', isCorrect: false },
    ],
    explanation: 'In Python, a loop\'s else clause executes if and only if the loop completed all iterations normally without being terminated by a break statement.',
    format: 'single_choice',
  },
  {
    id: 'q-12',
    pcepCode: 'PCEP-30-02 2.4',
    blockNumber: 2,
    blockName: 'Control Flow – Blocks & Loops',
    question: 'What will be printed by the following code?\n\nfor i in range(1, 4):\n    if i == 2:\n        break\nelse:\n    print("Finished", end=" ")\nprint("End")',
    options: [
      { id: 'a', text: 'Finished End', isCorrect: false },
      { id: 'b', text: 'End', isCorrect: true },
      { id: 'c', text: 'Finished', isCorrect: false },
      { id: 'd', text: 'Error', isCorrect: false },
    ],
    explanation: 'Because the loop was exited via break when i == 2, the loop else branch is skipped. Only "End" is printed.',
    format: 'single_choice',
  },
  {
    id: 'q-13',
    pcepCode: 'PCEP-30-02 3.1',
    blockNumber: 3,
    blockName: 'Data Collections – Lists, Tuples, Dicts & Strings',
    question: 'What is the output of the following slice on a Python list?\n\nnums = [10, 20, 30, 40, 50]\nprint(nums[1:4])',
    options: [
      { id: 'a', text: '[20, 30, 40]', isCorrect: true },
      { id: 'b', text: '[20, 30, 40, 50]', isCorrect: false },
      { id: 'c', text: '[10, 20, 30]', isCorrect: false },
      { id: 'd', text: '[10, 20, 30, 40]', isCorrect: false },
    ],
    explanation: 'Slicing [1:4] starts at index 1 (value 20) and ends before index 4 (values at index 1, 2, 3: 20, 30, 40).',
    format: 'single_choice',
  },
  {
    id: 'q-14',
    pcepCode: 'PCEP-30-02 3.1',
    blockNumber: 3,
    blockName: 'Data Collections – Lists, Tuples, Dicts & Strings',
    question: 'Which list method removes and returns the last element of a list?',
    options: [
      { id: 'a', text: 'remove()', isCorrect: false },
      { id: 'b', text: 'pop()', isCorrect: true },
      { id: 'c', text: 'delete()', isCorrect: false },
      { id: 'd', text: 'discard()', isCorrect: false },
    ],
    explanation: 'pop() without arguments removes and returns the element at the end of the list. remove(val) removes by value without returning it.',
    format: 'single_choice',
  },
  {
    id: 'q-15',
    pcepCode: 'PCEP-30-02 3.2',
    blockNumber: 3,
    blockName: 'Data Collections – Lists, Tuples, Dicts & Strings',
    question: 'What is the type of variable t declared as: t = (10)?',
    options: [
      { id: 'a', text: 'tuple', isCorrect: false },
      { id: 'b', text: 'int', isCorrect: true },
      { id: 'c', text: 'set', isCorrect: false },
      { id: 'd', text: 'list', isCorrect: false },
    ],
    explanation: 'A single value enclosed in parentheses without a trailing comma is treated as an expression in parentheses, producing an int. A single-element tuple requires a comma: (10,).',
    format: 'single_choice',
  },
  {
    id: 'q-16',
    pcepCode: 'PCEP-30-02 3.2',
    blockNumber: 3,
    blockName: 'Data Collections – Lists, Tuples, Dicts & Strings',
    question: 'What is the fundamental difference between a list and a tuple in Python?',
    options: [
      { id: 'a', text: 'A list is mutable, whereas a tuple is immutable', isCorrect: true },
      { id: 'b', text: 'A tuple can contain different data types, whereas a list cannot', isCorrect: false },
      { id: 'c', text: 'A list does not support indexing, whereas a tuple does', isCorrect: false },
      { id: 'd', text: 'A list is ordered, whereas a tuple is unordered', isCorrect: false },
    ],
    explanation: 'Both lists and tuples are ordered sequences and can hold arbitrary types, but lists can be modified in place (mutable) while tuples cannot be modified once created (immutable).',
    format: 'single_choice',
  },
  {
    id: 'q-17',
    pcepCode: 'PCEP-30-02 3.3',
    blockNumber: 3,
    blockName: 'Data Collections – Lists, Tuples, Dicts & Strings',
    question: 'What does the expression d.get("city", "Paris") return if d = {"name": "Bob"}?',
    options: [
      { id: 'a', text: 'KeyError', isCorrect: false },
      { id: 'b', text: '"Paris"', isCorrect: true },
      { id: 'c', text: 'None', isCorrect: false },
      { id: 'd', text: 'False', isCorrect: false },
    ],
    explanation: 'The .get(key, default) method looks up the key in the dictionary; if not found, it returns the provided default fallback value ("Paris") instead of raising KeyError.',
    format: 'single_choice',
  },
  {
    id: 'q-18',
    pcepCode: 'PCEP-30-02 3.3',
    blockNumber: 3,
    blockName: 'Data Collections – Lists, Tuples, Dicts & Strings',
    question: 'Which of the following data types CANNOT be used as a key in a Python dictionary?',
    options: [
      { id: 'a', text: 'str ("name")', isCorrect: false },
      { id: 'b', text: 'int (42)', isCorrect: false },
      { id: 'c', text: 'tuple ((1, 2))', isCorrect: false },
      { id: 'd', text: 'list ([1, 2])', isCorrect: true },
    ],
    explanation: 'Dictionary keys must be hashable and immutable. Lists are mutable and unhashable, raising TypeError: unhashable type: \'list\' if used as keys.',
    format: 'single_choice',
  },
  {
    id: 'q-19',
    pcepCode: 'PCEP-30-02 3.4',
    blockNumber: 3,
    blockName: 'Data Collections – Lists, Tuples, Dicts & Strings',
    question: 'What is the output of the following string operation?\n\ns = "Python"\nprint(s[1:5:2])',
    options: [
      { id: 'a', text: '"yh"', isCorrect: true },
      { id: 'b', text: '"yhn"', isCorrect: false },
      { id: 'c', text: '"to"', isCorrect: false },
      { id: 'd', text: '"Pto"', isCorrect: false },
    ],
    explanation: 's[1:5:2] takes characters at indices 1 and 3 (index 5 is excluded): index 1 is "y" and index 3 is "h", resulting in "yh".',
    format: 'single_choice',
  },
  {
    id: 'q-20',
    pcepCode: 'PCEP-30-02 3.4',
    blockNumber: 3,
    blockName: 'Data Collections – Lists, Tuples, Dicts & Strings',
    question: 'What occurs when executing the statement: s[0] = "J" on the string s = "Java"?',
    options: [
      { id: 'a', text: 'The string is modified to "Java"', isCorrect: false },
      { id: 'b', text: 'A TypeError is raised because strings are immutable', isCorrect: true },
      { id: 'c', text: 'An IndexError is raised', isCorrect: false },
      { id: 'd', text: 'A ValueError is raised', isCorrect: false },
    ],
    explanation: 'In Python, strings are immutable. Any attempt to modify an element by indexing raises TypeError: \'str\' object does not support item assignment.',
    format: 'single_choice',
  },
  {
    id: 'q-21',
    pcepCode: 'PCEP-30-02 4.1',
    blockNumber: 4,
    blockName: 'Functions and Exceptions',
    question: 'What does a Python function return if it contains no explicit return statement?',
    options: [
      { id: 'a', text: '0', isCorrect: false },
      { id: 'b', text: 'None', isCorrect: true },
      { id: 'c', text: 'False', isCorrect: false },
      { id: 'd', text: 'An empty string ""', isCorrect: false },
    ],
    explanation: 'In Python, any function that does not reach an explicit return statement implicitly returns the singleton value None.',
    format: 'single_choice',
  },
  {
    id: 'q-22',
    pcepCode: 'PCEP-30-02 4.1',
    blockNumber: 4,
    blockName: 'Functions and Exceptions',
    question: 'What is printed by the following code?\n\ndef test(a, b=2):\n    return a * b\n\nprint(test(b=3, 4))',
    options: [
      { id: 'a', text: '12', isCorrect: false },
      { id: 'b', text: 'SyntaxError: positional argument follows keyword argument', isCorrect: true },
      { id: 'c', text: '8', isCorrect: false },
      { id: 'd', text: 'TypeError: multiple values for argument', isCorrect: false },
    ],
    explanation: 'In Python syntax, all positional arguments must precede keyword arguments. Passing a positional argument (4) after a keyword argument (b=3) results in a SyntaxError before execution.',
    format: 'single_choice',
  },
  {
    id: 'q-23',
    pcepCode: 'PCEP-30-02 4.1',
    blockNumber: 4,
    blockName: 'Functions and Exceptions',
    question: 'Given the function definition: def compute(a, b=2, c=3): return a + b + c. Which function call will raise an error?',
    options: [
      { id: 'a', text: 'compute(1)', isCorrect: false },
      { id: 'b', text: 'compute(1, c=5)', isCorrect: false },
      { id: 'c', text: 'compute()', isCorrect: true },
      { id: 'd', text: 'compute(1, 2, 3)', isCorrect: false },
    ],
    explanation: "Parameter 'a' has no default value and is mandatory. Calling compute() without providing 'a' raises TypeError: missing 1 required positional argument: 'a'.",
    format: 'single_choice',
  },
  {
    id: 'q-24',
    pcepCode: 'PCEP-30-02 4.2',
    blockNumber: 4,
    blockName: 'Functions and Exceptions',
    question: 'What is printed by the following script?\n\nval = 5\ndef modify():\n    global val\n    val = 10\n\nmodify()\nprint(val)',
    options: [
      { id: 'a', text: '5', isCorrect: false },
      { id: 'b', text: '10', isCorrect: true },
      { id: 'c', text: 'None', isCorrect: false },
      { id: 'd', text: 'UnboundLocalError', isCorrect: false },
    ],
    explanation: "The 'global val' declaration inside the function instructs Python to bind assignments to the module-level variable val, updating it to 10.",
    format: 'single_choice',
  },
  {
    id: 'q-25',
    pcepCode: 'PCEP-30-02 4.3',
    blockNumber: 4,
    blockName: 'Functions and Exceptions',
    question: 'What is the direct common parent class of IndexError and KeyError in Python\'s exception hierarchy?',
    options: [
      { id: 'a', text: 'StandardError', isCorrect: false },
      { id: 'b', text: 'LookupError', isCorrect: true },
      { id: 'c', text: 'ValueError', isCorrect: false },
      { id: 'd', text: 'ArithmeticError', isCorrect: false },
    ],
    explanation: 'Both IndexError and KeyError inherit directly from LookupError, which itself inherits from Exception.',
    format: 'single_choice',
  },
  {
    id: 'q-26',
    pcepCode: 'PCEP-30-02 4.3',
    blockNumber: 4,
    blockName: 'Functions and Exceptions',
    question: 'Which of the following exceptions is NOT a subclass of ArithmeticError?',
    options: [
      { id: 'a', text: 'ZeroDivisionError', isCorrect: false },
      { id: 'b', text: 'OverflowError', isCorrect: false },
      { id: 'c', text: 'FloatingPointError', isCorrect: false },
      { id: 'd', text: 'TypeError', isCorrect: true },
    ],
    explanation: 'ArithmeticError is the base class for ZeroDivisionError, OverflowError, and FloatingPointError. TypeError inherits directly from Exception.',
    format: 'single_choice',
  },
  {
    id: 'q-27',
    pcepCode: 'PCEP-30-02 4.4',
    blockNumber: 4,
    blockName: 'Functions and Exceptions',
    question: 'What is the ordering rule for multiple except blocks in Python?',
    options: [
      { id: 'a', text: 'More specific (subclass) exceptions must appear before more general (parent) exceptions', isCorrect: true },
      { id: 'b', text: 'More general (parent) exceptions must appear before specific subclasses', isCorrect: false },
      { id: 'c', text: 'Except blocks must be listed in alphabetical order', isCorrect: false },
      { id: 'd', text: 'The order does not matter; Python automatically chooses the closest match', isCorrect: false },
    ],
    explanation: 'Python checks except clauses from top to bottom. If a parent class exception is placed before a subclass, the parent clause will catch the exception first, making the subsequent subclass handler unreachable.',
    format: 'single_choice',
  },
  {
    id: 'q-28',
    pcepCode: 'PCEP-30-02 4.4',
    blockNumber: 4,
    blockName: 'Functions and Exceptions',
    question: 'What will be printed by the following code?\n\ntry:\n    x = 1 / 0\nexcept ArithmeticError:\n    print("Arithmetic", end=" ")\nexcept ZeroDivisionError:\n    print("ZeroDivision", end=" ")\nfinally:\n    print("Done")',
    options: [
      { id: 'a', text: 'ZeroDivision Done', isCorrect: false },
      { id: 'b', text: 'Arithmetic Done', isCorrect: true },
      { id: 'c', text: 'Arithmetic ZeroDivision Done', isCorrect: false },
      { id: 'd', text: 'Done', isCorrect: false },
    ],
    explanation: 'ZeroDivisionError is a subclass of ArithmeticError. Because ArithmeticError appears first, it intercepts the exception. The finally block always executes, printing "Arithmetic Done".',
    format: 'single_choice',
  },
  {
    id: 'q-29',
    pcepCode: 'PCEP-30-02 4.4',
    blockNumber: 4,
    blockName: 'Functions and Exceptions',
    question: 'What does the else clause do when attached to a try...except construct?',
    options: [
      { id: 'a', text: 'It executes only if no exception was raised in the try block', isCorrect: true },
      { id: 'b', text: 'It executes only if an unhandled exception was raised', isCorrect: false },
      { id: 'c', text: 'It replaces the finally block', isCorrect: false },
      { id: 'd', text: 'It executes on every run, before the except block', isCorrect: false },
    ],
    explanation: 'In a try...except...else block, the else clause executes if and only if the code in the try block ran to completion without raising any exceptions.',
    format: 'single_choice',
  },
  {
    id: 'q-30',
    pcepCode: 'PCEP-30-02 4.4',
    blockNumber: 4,
    blockName: 'Functions and Exceptions',
    question: 'What statement is used in Python to intentionally trigger an exception?',
    options: [
      { id: 'a', text: 'throw', isCorrect: false },
      { id: 'b', text: 'raise', isCorrect: true },
      { id: 'c', text: 'trigger', isCorrect: false },
      { id: 'd', text: 'error', isCorrect: false },
    ],
    explanation: "In Python, the 'raise' keyword is used to raise an exception manually (e.g., raise ValueError('Invalid input')). 'throw' is used in languages like C++/Java/JavaScript.",
    format: 'single_choice',
  },
];
