import { Flashcard } from '../types';

/**
 * PCEP-30-0x SECTION 1: COMPUTER PROGRAMMING & PYTHON FUNDAMENTALS (Part 3: Cards 71 to 100)
 * - Chapter 1.4: Operators, Precedence, and Expressions completion (Cards 71-80)
 * - Chapter 1.5: Variables, Assignment, Dynamic Typing & PEP 8 Rules (Cards 81-100)
 */
export const pcepSection1CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 1.4 COMPLETION: OPERATORS, PRECEDENCE & EXPRESSIONS (Cards 71 to 80)
  // =========================================================================
  {
    id: 'pcep-s1-fc-071',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Right-to-Left Associativity of Exponentiation (**)',
    category: 'Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the output of 2 ** 3 ** 2 in Python, and which power is evaluated first?',
    codeSnippet: `result = 2 ** 3 ** 2
print(result)`,
    stdoutExpected: '512',
    explanationTitle: 'Exponentiation Right-Associative Rule',
    explanationText:
      'Unlike almost all other binary operators in Python which evaluate left-to-right, the exponentiation operator `**` is right-to-left associative. `2 ** 3 ** 2` is grouped as `2 ** (3 ** 2)` = `2 ** 9 = 512`, NOT `(2 ** 3) ** 2 = 64`.',
    complexityInfo: 'One of the most famous and frequent questions on PCEP exams',
  },
  {
    id: 'pcep-s1-fc-072',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Unary Minus vs Binary Minus',
    category: 'Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'How does unary minus differ from binary subtraction?',
    codeSnippet: `x = 5
print(-x)       # Unary minus (1 operand)
print(10 - x)   # Binary subtraction (2 operands)`,
    stdoutExpected: `-5
5`,
    explanationTitle: 'Unary vs Binary Operators',
    explanationText:
      'Unary operators take a single operand (e.g. `-x` flips the sign of `x`). Binary operators take two operands (e.g. `10 - x` computes the difference between 10 and x). Unary operators have higher precedence than binary addition/subtraction.',
    complexityInfo: 'Official PCEP syllabus distinguishes unary and binary operators',
  },
  {
    id: 'pcep-s1-fc-073',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Unary Minus Precedence with Exponentiation',
    category: 'Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the output of -2 ** 4 vs (-2) ** 4 in Python?',
    codeSnippet: `print(-2 ** 4)
print((-2) ** 4)`,
    stdoutExpected: `-16
16`,
    explanationTitle: 'Exponentiation Binds Tighter Than Unary Minus',
    explanationText:
      'The exponentiation operator `**` has higher precedence than the unary minus operator `-`. Therefore, `-2 ** 4` evaluates as `-(2 ** 4) = -16`. In contrast, parentheses force `(-2) ** 4 = (-2) × (-2) × (-2) × (-2) = 16`.',
    complexityInfo: 'High-frequency PCEP question on operator precedence traps',
  },
  {
    id: 'pcep-s1-fc-074',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Multiplication and Division Precedence over Addition and Subtraction',
    category: 'Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the evaluated output of 2 + 3 * 4 in Python?',
    codeSnippet: `result = 2 + 3 * 4
print(result)`,
    stdoutExpected: '14',
    explanationTitle: 'BODMAS / Standard Precedence',
    explanationText:
      'Multiplication `*`, division `/`, floor division `//`, and modulo `%` share equal precedence and bind tighter than addition `+` and subtraction `-`. `3 * 4` evaluates to 12 first, followed by `2 + 12 = 14`.',
    complexityInfo: 'Foundational arithmetic hierarchy rule',
  },
  {
    id: 'pcep-s1-fc-075',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Left-to-Right Associativity of Division Operators',
    category: 'Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the output of 100 / 5 / 2 in Python?',
    codeSnippet: `result = 100 / 5 / 2
print(result)`,
    stdoutExpected: '10.0',
    explanationTitle: 'Left-to-Right Evaluation Order',
    explanationText:
      'Operators of equal precedence (like multiple division operators `/`) evaluate strictly from left to right: `(100 / 5) / 2 = 20.0 / 2 = 10.0`.',
    complexityInfo: 'Never right-to-left for standard division',
  },
  {
    id: 'pcep-s1-fc-076',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Parentheses Overriding Precedence',
    category: 'Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'How do parentheses modify the evaluation of (2 + 3) * 4?',
    codeSnippet: `print((2 + 3) * 4)`,
    stdoutExpected: '20',
    explanationTitle: 'Parentheses Have Highest Precedence',
    explanationText:
      'Expressions inside parentheses `(...)` are always evaluated first, regardless of the operators involved. `(2 + 3)` yields 5, and `5 * 4 = 20`.',
    complexityInfo: 'Parentheses are the universal tool to enforce evaluation order',
  },
  {
    id: 'pcep-s1-fc-077',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Complex Multi-Operator Expression Trace',
    category: 'Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'Trace the exact output of: 2 + 3 * 4 ** 2 / 8',
    codeSnippet: `# Step 1: 4 ** 2 = 16
# Step 2: 3 * 16 = 48
# Step 3: 48 / 8 = 6.0
# Step 4: 2 + 6.0 = 8.0
print(2 + 3 * 4 ** 2 / 8)`,
    stdoutExpected: '8.0',
    explanationTitle: 'Step-by-Step Expression Evaluation',
    explanationText:
      '1. Exponentiation first: `4 ** 2 = 16`.\n2. Left-to-right multiplication & division: `3 * 16 = 48`, then `48 / 8 = 6.0`.\n3. Addition last: `2 + 6.0 = 8.0` (yields float due to true division).',
    complexityInfo: 'Classic PCEP arithmetic challenge problem',
  },
  {
    id: 'pcep-s1-fc-078',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Floor Division and Modulo Combined',
    category: 'Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the output of the expression 15 // 4 % 2 + 1 in Python?',
    codeSnippet: `# Step 1: 15 // 4 = 3
# Step 2: 3 % 2 = 1
# Step 3: 1 + 1 = 2
val = 15 // 4 % 2 + 1
print(val)`,
    stdoutExpected: '2',
    explanationTitle: 'Chained Modulo and Floor Division',
    explanationText:
      '`//` and `%` share equal precedence and associate left-to-right. First, `15 // 4 = 3`. Next, `3 % 2 = 1`. Finally, `1 + 1 = 2`.',
    complexityInfo: 'Precedence testing without parentheses',
  },
  {
    id: 'pcep-s1-fc-079',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Unary Plus Operator (+x)',
    category: 'Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the effect of the unary plus operator + on a numeric variable?',
    codeSnippet: `x = -10
print(+x)
y = 15
print(+y)`,
    stdoutExpected: `-10
15`,
    explanationTitle: 'Unary Plus Operator Semantics',
    explanationText:
      'The unary `+` operator returns its numeric operand unchanged. It does NOT make negative numbers positive; `+(-10)` remains `-10`.',
    complexityInfo: 'Frequently tested subtle point in Python operators',
  },
  {
    id: 'pcep-s1-fc-080',
    track: 'pcep',
    cardType: 'PCEP 1.4 • Operators & Precedence',
    topic: 'Parentheses vs Tuples with Single Expressions',
    category: 'Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the type of x = (42) compared to y = (42,)?',
    codeSnippet: `x = (42)
y = (42,)
print(type(x).__name__)
print(type(y).__name__)`,
    stdoutExpected: `int
tuple`,
    explanationTitle: 'Parentheses for Grouping vs Tuples',
    explanationText:
      'Parentheses around a single expression `(42)` act purely as grouping operators and evaluate to the enclosed value (`int`). To create a single-element tuple, a trailing comma is mandatory: `(42,)`.',
    complexityInfo: 'Bridge concept between Section 1 expressions and Section 3 tuples',
  },

  // =========================================================================
  // CHAPTER 1.5: VARIABLES, ASSIGNMENT, DYNAMIC TYPING & PEP 8 RULES (Cards 81 to 100)
  // =========================================================================
  {
    id: 'pcep-s1-fc-081',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Variable Creation and Assignment Operator (=)',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'When is a variable created in Python, and what does = signify?',
    codeSnippet: `age = 25
print("Variable created upon first assignment")`,
    stdoutExpected: 'Variable created upon first assignment',
    explanationTitle: 'Variable Lifecycle in Python',
    explanationText:
      'Python does not have explicit variable declaration keywords (like `var`, `let`, or `int`). A variable is automatically created the very first time a value is assigned to it using the assignment operator `=`. The `=` operator binds a name to an object in memory.',
    complexityInfo: 'Fundamental concept of Python variable assignment',
  },
  {
    id: 'pcep-s1-fc-082',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Legal Characters in Python Identifiers',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What characters are permitted in Python variable identifiers?',
    codeSnippet: `valid_1 = 10
_private = 20
User_Count = 30
print(valid_1 + _private + User_Count)`,
    stdoutExpected: '60',
    explanationTitle: 'Identifier Composition Rules',
    explanationText:
      'Python variable names can contain: uppercase letters (A-Z), lowercase letters (a-z), digits (0-9), and underscores (`_`). No other punctuation or whitespace characters are permitted.',
    complexityInfo: 'Official PCEP syllabus identifier requirements',
  },
  {
    id: 'pcep-s1-fc-083',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Identifier Starting Character Constraint',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'Why does 2variable = 10 produce a SyntaxError in Python?',
    codeSnippet: `# 2variable = 10
# SyntaxError: invalid decimal literal
print("SyntaxError: identifiers cannot begin with a digit")`,
    stdoutExpected: 'SyntaxError: identifiers cannot begin with a digit',
    explanationTitle: 'Leading Digit Constraint',
    explanationText:
      'An identifier MUST begin with a letter (a-z, A-Z) or an underscore (`_`). It can NEVER begin with a digit (0-9), because the Python lexer treats tokens beginning with digits as numeric literals.',
    complexityInfo: 'Number one syntax trap on PCEP Section 1 exams',
  },
  {
    id: 'pcep-s1-fc-084',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Identifier Case Sensitivity',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'Are variable, Variable, and VARIABLE the same variable in Python?',
    codeSnippet: `variable = 1
Variable = 2
VARIABLE = 3
print(variable, Variable, VARIABLE)`,
    stdoutExpected: '1 2 3',
    explanationTitle: 'Strict Case Sensitivity',
    explanationText:
      'Python is strictly case-sensitive. `variable`, `Variable`, and `VARIABLE` are three completely independent identifiers referring to three distinct variables in the namespace.',
    complexityInfo: 'Always inspect variable capitalization in PCEP code snippets',
  },
  {
    id: 'pcep-s1-fc-085',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Reserved Keywords Cannot Be Used as Identifiers',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'Which of the following can NOT be used as a variable name: for, import, in, or value?',
    codeSnippet: `# for = 10     -> SyntaxError: invalid syntax
# import = 20  -> SyntaxError: invalid syntax
# in = 30      -> SyntaxError: invalid syntax
value = 40     # Valid!
print(value)`,
    stdoutExpected: '40',
    explanationTitle: 'Python Reserved Keywords',
    explanationText:
      'Python reserves approximately 35 keywords that define the language structure (such as `if`, `for`, `while`, `def`, `class`, `import`, `in`, `True`, `False`, `None`). None of these reserved words can be used as variable identifiers.',
    complexityInfo: 'PCEP exams test recognizing keywords from regular identifiers',
  },
  {
    id: 'pcep-s1-fc-086',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Programmatic Keyword Verification with keyword.iskeyword()',
    category: 'Variables & PEP 8',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'How can you verify if a word is a reserved Python keyword using the standard library?',
    codeSnippet: `import keyword
print(keyword.iskeyword("pass"))
print(keyword.iskeyword("score"))`,
    stdoutExpected: `True
False`,
    explanationTitle: 'The keyword Module',
    explanationText:
      'The standard `keyword` module contains `keyword.kwlist` (a list of all reserved keywords) and `keyword.iskeyword(s)` which returns `True` if string `s` is a reserved language keyword.',
    complexityInfo: 'Standard library introspection for Python identifiers',
  },
  {
    id: 'pcep-s1-fc-087',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'PEP 8 Naming Convention for Variables and Functions',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What naming style does PEP 8 recommend for variable and function names?',
    codeSnippet: `# PEP 8 style:
user_total_score = 100  # snake_case
print(user_total_score)`,
    stdoutExpected: '100',
    explanationTitle: 'snake_case Naming Style',
    explanationText:
      'PEP 8 recommends `snake_case` for variable names and function names: all lowercase letters with words separated by underscores (e.g. `total_price`, `calculate_average`).',
    complexityInfo: 'Official PEP 8 style guidelines tested in PCEP',
  },
  {
    id: 'pcep-s1-fc-088',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'PEP 8 Naming Convention for Constants',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'How should constants be named according to PEP 8?',
    codeSnippet: `MAX_CONNECTIONS = 50
PI = 3.14159
print(MAX_CONNECTIONS, PI)`,
    stdoutExpected: '50 3.14159',
    explanationTitle: 'SCREAMING_SNAKE_CASE for Constants',
    explanationText:
      'PEP 8 dictates that variables intended to act as constants should be named using all capital letters with underscores separating words (e.g. `MAX_SPEED`, `DATABASE_TIMEOUT`). Python has no `const` keyword; this is a stylistic convention.',
    complexityInfo: 'Python constants are by convention, not compiler-enforced',
  },
  {
    id: 'pcep-s1-fc-089',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Augmented Assignment (+=) Operator',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the evaluated output of x += 5 when x is initialized to 10?',
    codeSnippet: `x = 10
x += 5
print(x)`,
    stdoutExpected: '15',
    explanationTitle: 'Addition Shortcut Operator',
    explanationText:
      'The augmented assignment operator `x += 5` is shorthand for `x = x + 5`. It evaluates `x + 5` (15) and binds the result back to `x`. Note: `x` must already exist before augmented assignment; otherwise a `NameError` occurs.',
    complexityInfo: 'PCEP syllabus: shortcut operators',
  },
  {
    id: 'pcep-s1-fc-090',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Augmented Assignment (-=, *=, /=)',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the output and type of x /= 2 when x = 10?',
    codeSnippet: `x = 10
x /= 2
print(x)
print(type(x).__name__)`,
    stdoutExpected: `5.0
float`,
    explanationTitle: '/= Promotes Variable to float',
    explanationText:
      'Because true division `/` always returns a `float`, performing `x /= 2` converts `x` from `int` to `float`, producing `5.0`.',
    complexityInfo: 'Common subtle type conversion question on PCEP',
  },
  {
    id: 'pcep-s1-fc-091',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Augmented Assignment (**= and //=)',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the output of applying **= and //= in sequence?',
    codeSnippet: `a = 3
a **= 2   # a = 3 ** 2 = 9
a //= 4   # a = 9 // 4 = 2
print(a)`,
    stdoutExpected: '2',
    explanationTitle: 'Sequential Augmented Assignments',
    explanationText:
      'First, `a **= 2` squares `a` from 3 to 9. Then, `a //= 4` performs floor division of 9 by 4, which is 2.',
    complexityInfo: 'Tracking variable mutations across statements',
  },
  {
    id: 'pcep-s1-fc-092',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Multiple Variable Assignment (Chained Assignment)',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What values are assigned to a, b, and c by a = b = c = 100?',
    codeSnippet: `a = b = c = 100
print(a, b, c)`,
    stdoutExpected: '100 100 100',
    explanationTitle: 'Chained Variable Assignment',
    explanationText:
      'In Python, chained assignment `a = b = c = 100` assigns the object `100` to `c`, `b`, and `a` in a single statement. All three variables reference the same value.',
    complexityInfo: 'Standard Python initialization pattern',
  },
  {
    id: 'pcep-s1-fc-093',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Simultaneous Multi-Variable Assignment (Unpacking)',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the output of assigning x, y = 10, 20 in Python?',
    codeSnippet: `x, y = 10, 20
print(x + y)`,
    stdoutExpected: '30',
    explanationTitle: 'Parallel Assignment / Tuple Unpacking',
    explanationText:
      'Python evaluates all expressions on the right-hand side first (forming a tuple `(10, 20)`), and then unpacks them into the variables on the left-hand side in corresponding positional order.',
    complexityInfo: 'Both sides must match in length or a ValueError is raised',
  },
  {
    id: 'pcep-s1-fc-094',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Idiomatic Variable Swapping in Python',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'How do you swap the values of two variables a and b in Python without a temporary variable?',
    codeSnippet: `a = 1
b = 2
a, b = b, a
print(a, b)`,
    stdoutExpected: '2 1',
    explanationTitle: 'Pythonic Swapping: a, b = b, a',
    explanationText:
      'Python creates a temporary tuple of the right-side values `(b, a)` = `(2, 1)` before assigning them to the left-side variables `a` and `b`. This eliminates the need for a temporary third variable.',
    complexityInfo: 'Beloved Python idiom tested on every beginner certification',
  },
  {
    id: 'pcep-s1-fc-095',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Dynamic Typing and Variable Re-Binding',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'Can a variable that currently holds an integer be reassigned to a string?',
    codeSnippet: `data = 42
print(type(data).__name__)
data = "Now a string"
print(type(data).__name__)`,
    stdoutExpected: `int
str`,
    explanationTitle: 'Dynamic Typing Model',
    explanationText:
      'Python is dynamically typed. Variables in Python are simply names (labels/pointers) attached to objects in memory. The variable itself has no fixed type; only the object it currently references has a type. Thus, `data` can freely re-bind to an object of any other type.',
    complexityInfo: 'Contrast with statically typed languages like Java or C',
  },
  {
    id: 'pcep-s1-fc-096',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'NameError on Unassigned Variable Reference',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What exception is raised when you try to print or use a variable that has never been assigned?',
    codeSnippet: `# print(unknown_var)
# NameError: name 'unknown_var' is not defined
print("NameError: name 'unknown_var' is not defined")`,
    stdoutExpected: "NameError: name 'unknown_var' is not defined",
    explanationTitle: 'NameError on Undefined Names',
    explanationText:
      'Attempting to access a variable name that does not exist in any local, enclosing, global, or built-in scope immediately raises a `NameError`. Variables must be assigned before they can be read.',
    complexityInfo: 'Fundamental runtime error in Section 1 and Section 4',
  },
  {
    id: 'pcep-s1-fc-097',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Single-Line Comments and PEP 8 Formatting',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What symbol denotes a comment in Python, and how does the interpreter treat it?',
    codeSnippet: `# This is a complete line comment
x = 5  # This is an inline comment
print(x)`,
    stdoutExpected: '5',
    explanationTitle: 'Hash (#) Comments',
    explanationText:
      'In Python, the hash character `#` marks the beginning of a comment. Everything from `#` to the end of that physical line is ignored by the interpreter. PEP 8 recommends separating inline comments from statements by at least two spaces, followed by `#` and a single space.',
    complexityInfo: 'Official PCEP syllabus: comments and PEP 8 guidelines',
  },
  {
    id: 'pcep-s1-fc-098',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'The del Statement',
    category: 'Variables & PEP 8',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What happens when you execute del x on a variable?',
    codeSnippet: `x = 100
del x
# print(x) -> raises NameError: name 'x' is not defined
print("Variable name removed from namespace")`,
    stdoutExpected: 'Variable name removed from namespace',
    explanationTitle: 'The del Keyword',
    explanationText:
      'The `del` statement unbinds a variable name from the current namespace. If that variable was the only reference to the object, the object becomes eligible for garbage collection. Referencing the variable after `del` raises a `NameError`.',
    complexityInfo: 'PCEP syllabus testing variable deletion and lifecycle',
  },
  {
    id: 'pcep-s1-fc-099',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'PEP 8 Indentation Rules',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the official PEP 8 standard for code block indentation in Python?',
    codeSnippet: `# PEP 8 indentation rule:
spaces_per_indent = 4
use_tabs = False
print(f"Indentation: {spaces_per_indent} spaces, tabs allowed: {use_tabs}")`,
    stdoutExpected: 'Indentation: 4 spaces, tabs allowed: False',
    explanationTitle: 'PEP 8 Four-Space Indentation',
    explanationText:
      'PEP 8 strictly dictates using 4 spaces per indentation level. Python 3 prohibits mixing tabs and spaces in the same source file, raising a `TabError` or `IndentationError`.',
    complexityInfo: 'Core PEP 8 question in PCEP',
  },
  {
    id: 'pcep-s1-fc-100',
    track: 'pcep',
    cardType: 'PCEP 1.5 • Variables & PEP 8',
    topic: 'Maximum Line Length in PEP 8',
    category: 'Variables & PEP 8',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the maximum recommended line length in PEP 8 for code and comments?',
    codeSnippet: `code_max = 79
docstring_max = 72
print(f"Code: {code_max} chars | Comments/Docstrings: {docstring_max} chars")`,
    stdoutExpected: 'Code: 79 chars | Comments/Docstrings: 72 chars',
    explanationTitle: 'PEP 8 79-Character Limit',
    explanationText:
      'PEP 8 recommends limiting all lines of code to a maximum of 79 characters. For flowing long blocks of text (such as docstrings or comments), the limit is recommended at 72 characters.',
    complexityInfo: 'Frequently cited PEP 8 numerical rule on Python exams',
  },
];
