import { Flashcard } from '../types';

/**
 * PCEP-30-0x SECTION 2: CONTROL FLOW – CONDITIONAL BLOCKS AND LOOPS (Part 1: Cards 1 to 35)
 * - Chapter 2.1: Conditional Statements: if, if-else, if-elif-else, ternary & nesting (Cards 1-20)
 * - Chapter 2.2: Relational and Equality Operators (Cards 21-35)
 */
export const pcepSection2CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.1: CONDITIONAL STATEMENTS (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pcep-s2-fc-001',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Basic if Statement Syntax & Colon Requirement',
    category: 'Conditionals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What punctuation character must terminate the header line of an if statement in Python?',
    codeSnippet: `x = 10
if x > 5:
    print("x is greater than 5")`,
    stdoutExpected: 'x is greater than 5',
    explanationTitle: 'Colon (:) Header Terminator',
    explanationText:
      'In Python, every compound statement header (including if, elif, else, while, for, def, class, and try) must end with a colon (:). Omitting the colon results in an immediate SyntaxError: invalid syntax.',
    complexityInfo: 'Official PCEP syllabus: conditional statement syntax rules',
  },
  {
    id: 'pcep-s2-fc-002',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'The if-else Dual Alternative Structure',
    category: 'Conditionals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Which block executes when the condition in an if-else structure evaluates to False?',
    codeSnippet: `temperature = 15
if temperature > 20:
    print("Warm")
else:
    print("Cool")`,
    stdoutExpected: 'Cool',
    explanationTitle: 'Mutually Exclusive if-else Branches',
    explanationText:
      'The if-else construct provides two mutually exclusive execution paths. If the condition evaluates to True (truthy), the if body executes; otherwise, the else body executes. Exactly one branch is guaranteed to execute.',
    complexityInfo: 'Fundamental binary decision structure in Python',
  },
  {
    id: 'pcep-s2-fc-003',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'The if-elif-else Multiway Cascade',
    category: 'Conditionals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'How does Python evaluate an if-elif-else cascade with multiple matching conditions?',
    codeSnippet: `score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"
print(grade)`,
    stdoutExpected: 'B',
    explanationTitle: 'First Matching elif Wins',
    explanationText:
      'Python evaluates elif conditions top-to-bottom in sequence. As soon as ONE condition evaluates to True, its corresponding block executes, and the entire remainder of the if-elif-else structure is immediately skipped, even if subsequent elif conditions would also evaluate to True.',
    complexityInfo: 'Core PCEP test on sequential short-circuiting in elif ladders',
  },
  {
    id: 'pcep-s2-fc-004',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Multiple Independent if Statements vs elif',
    category: 'Conditionals',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the output when multiple separate if statements are used instead of elif?',
    codeSnippet: `x = 15
if x > 5:
    print("Step 1")
if x > 10:
    print("Step 2")
if x > 20:
    print("Step 3")`,
    stdoutExpected: `Step 1
Step 2`,
    explanationTitle: 'Independent if Tests',
    explanationText:
      'Unlike an if-elif chain where at most one branch can run, independent if statements are completely separate constructs. Each condition is tested independently, so both "Step 1" and "Step 2" execute because 15 > 5 and 15 > 10 are both True.',
    complexityInfo: 'High-frequency exam trap comparing sequential ifs vs elif ladder',
  },
  {
    id: 'pcep-s2-fc-005',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Omitting the else Branch in Conditionals',
    category: 'Conditionals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Is the else branch mandatory in an if statement or elif chain?',
    codeSnippet: `x = 3
if x > 10:
    print("High")
elif x > 5:
    print("Medium")
print("Done")`,
    stdoutExpected: 'Done',
    explanationTitle: 'Optional else Clause',
    explanationText:
      'The else clause is completely optional in Python. If all if and elif conditions evaluate to False and no else clause is provided, the entire construct completes without doing anything, and execution resumes at the next unindented statement.',
    complexityInfo: 'Clarifies optional syntax in conditional blocks',
  },
  {
    id: 'pcep-s2-fc-006',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Nested if Statements & Indentation Levels',
    category: 'Conditionals',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Trace the output of this nested conditional block:',
    codeSnippet: `num = 12
if num > 0:
    if num % 2 == 0:
        print("Positive Even")
    else:
        print("Positive Odd")
else:
    print("Zero or Negative")`,
    stdoutExpected: 'Positive Even',
    explanationTitle: 'Nested Branch Hierarchy',
    explanationText:
      'Because 12 > 0 is True, Python enters the outer if block. Inside, 12 % 2 == 0 is True (12 has remainder 0 when divided by 2), so the nested if branch executes, printing "Positive Even". Neither else clause is reached.',
    complexityInfo: 'Exam favorite testing multi-level nested control paths',
  },
  {
    id: 'pcep-s2-fc-007',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Implicit Truth Value Testing (Truthiness)',
    category: 'Conditionals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What gets printed when an empty container or zero is passed directly as an if condition?',
    codeSnippet: `items = []
if items:
    print("Items found")
else:
    print("No items")`,
    stdoutExpected: 'No items',
    explanationTitle: 'Truthiness of Empty Collections and Numbers',
    explanationText:
      'In Python, conditions do not need to be boolean expressions (True or False). Values inherently evaluate to falsy or truthy. In Python: 0, 0.0, None, False, empty strings "", empty lists [], empty tuples (), and empty dicts {} are all falsy. Non-empty objects and non-zero numbers are truthy.',
    complexityInfo: 'PCEP syllabus: testing implicit truthiness in conditionals',
  },
  {
    id: 'pcep-s2-fc-008',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Arithmetic Expressions in Conditions',
    category: 'Conditionals',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the output of testing the arithmetic expression 5 - 5 as a condition?',
    codeSnippet: `if 5 - 5:
    print("Branch A")
else:
    print("Branch B")`,
    stdoutExpected: 'Branch B',
    explanationTitle: 'Zero Evaluates to False in Boolean Context',
    explanationText:
      'The expression `5 - 5` evaluates to the integer `0`. In Python conditional contexts, the integer `0` is falsy (`bool(0) == False`). Thus, the if condition fails and the else block executes.',
    complexityInfo: 'Subtle PCEP question testing arithmetic evaluation in conditional headers',
  },
  {
    id: 'pcep-s2-fc-009',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'The pass Statement in Conditional Blocks',
    category: 'Conditionals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the purpose of the pass statement inside an empty conditional block?',
    codeSnippet: `x = 5
if x > 0:
    pass
else:
    print("Negative")
print("Continued")`,
    stdoutExpected: 'Continued',
    explanationTitle: 'The pass Statement as a Null Operation',
    explanationText:
      'Python syntax requires at least one statement in every indented code block. Leaving an indented block completely empty produces an `IndentationError: expected an indented block`. The `pass` statement is a no-op (no operation) placeholder that satisfies the syntactic requirement without performing any action.',
    complexityInfo: 'Standard Python placeholder keyword tested in Section 2',
  },
  {
    id: 'pcep-s2-fc-010',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Dangling else Resolution via Indentation',
    category: 'Conditionals',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'To which if does the else clause belong in Python, and how is the "dangling else" ambiguity resolved?',
    codeSnippet: `a = 10
b = 20
if a > 5:
    if b < 15:
        print("Inner if")
    else:
        print("Inner else")`,
    stdoutExpected: 'Inner else',
    explanationTitle: 'Indentation Dictates Block Association',
    explanationText:
      'In languages like C or Java, the "dangling else" problem arises when it is ambiguous which if an else belongs to. In Python, indentation strictly and unambiguously resolves this: an else clause belongs to the if/elif statement that shares the exact same indentation level.',
    complexityInfo: 'Python language design principle: indentation replaces braces',
  },
  {
    id: 'pcep-s2-fc-011',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Conditional Expression (Ternary Operator: x if C else y)',
    category: 'Conditionals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the syntax and output of Python’s ternary conditional expression?',
    codeSnippet: `age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)`,
    stdoutExpected: 'Adult',
    explanationTitle: 'Python Ternary Operator Syntax',
    explanationText:
      'Python supports inline conditional expressions with the syntax: `<true_expr> if <condition> else <false_expr>`. Because `age >= 18` is True, `"Adult"` is evaluated and assigned to `status`.',
    complexityInfo: 'Frequent PCEP question on Python inline conditionals',
  },
  {
    id: 'pcep-s2-fc-012',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Lazy Evaluation in Conditional Expressions',
    category: 'Conditionals',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Why does the division by zero not raise a ZeroDivisionError in this ternary expression?',
    codeSnippet: `x = 10
result = x * 2 if x > 0 else 100 / 0
print(result)`,
    stdoutExpected: '20',
    explanationTitle: 'Lazy Branch Evaluation in Ternary',
    explanationText:
      'In a conditional expression `A if cond else B`, Python evaluates `cond` first. If `cond` is True, ONLY expression `A` is evaluated; expression `B` is never evaluated. Because `x > 0` is True, `100 / 0` is completely ignored and no error is raised.',
    complexityInfo: 'Tests understanding of short-circuiting in inline ternary expressions',
  },
  {
    id: 'pcep-s2-fc-013',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Nested Conditional Expressions (Chained Ternary)',
    category: 'Conditionals',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the output of the chained conditional expression below?',
    codeSnippet: `n = 0
label = "Positive" if n > 0 else ("Negative" if n < 0 else "Zero")
print(label)`,
    stdoutExpected: 'Zero',
    explanationTitle: 'Chained Ternary Expressions',
    explanationText:
      'First, `n > 0` evaluates to False (`0 > 0` is False). Python proceeds to the else expression, which evaluates `n < 0` (False). Finally, the innermost else branch evaluates to `"Zero"`.',
    complexityInfo: 'Parsing chained conditional expressions without syntax errors',
  },
  {
    id: 'pcep-s2-fc-014',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Variable Scope Inside Conditional Blocks',
    category: 'Conditionals',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Does a variable assigned inside an if block remain accessible outside of it?',
    codeSnippet: `if True:
    message = "Hello from inside if"
print(message)`,
    stdoutExpected: 'Hello from inside if',
    explanationTitle: 'No Block Scope in Python',
    explanationText:
      'In Python, if, elif, else, for, while, and with blocks DO NOT create a new local variable scope. Variables assigned inside an if block belong to the enclosing function or module scope and remain fully accessible outside the block.',
    complexityInfo: 'Key architectural difference between Python and C++/Java',
  },
  {
    id: 'pcep-s2-fc-015',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'IndentationError: expected an indented block',
    category: 'Conditionals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What error occurs if an if statement header is immediately followed by unindented code?',
    codeSnippet: `# if True:
# print("Test")
# IndentationError: expected an indented block after 'if' statement
print("IndentationError")`,
    stdoutExpected: 'IndentationError',
    explanationTitle: 'Mandatory Indented Block',
    explanationText:
      'Python uses whitespace indentation to define code blocks. Every statement that introduces a block (like if, for, while, def) must be followed by at least one indented statement, or an IndentationError will be raised at compile/parse time.',
    complexityInfo: 'Fundamental syntax rule tested on every PCEP exam',
  },
  {
    id: 'pcep-s2-fc-016',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Condition with Parentheses and Multiline Formatting',
    category: 'Conditionals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Are parentheses required around the condition of an if statement in Python?',
    codeSnippet: `x = 10
# Parentheses are optional in Python if statements:
if (x > 5 and x < 15):
    print("Valid")`,
    stdoutExpected: 'Valid',
    explanationTitle: 'Optional Parentheses in Conditions',
    explanationText:
      'Unlike languages like C, Java, or JavaScript where parentheses around `(condition)` are required, parentheses are optional in Python. However, parentheses are syntactically valid and often used for clarity or to split long conditions across multiple physical lines without needing a backslash `\\`.',
    complexityInfo: 'PEP 8 best practice for multiline conditional statements',
  },
  {
    id: 'pcep-s2-fc-017',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Chained Comparison Range Testing in if Conditions',
    category: 'Conditionals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the Pythonic way to test if variable x lies between 10 and 20 (inclusive)?',
    codeSnippet: `x = 15
if 10 <= x <= 20:
    print("In range")`,
    stdoutExpected: 'In range',
    explanationTitle: 'Chained Comparison Syntax: 10 <= x <= 20',
    explanationText:
      'Python supports chained comparisons directly matching mathematical notation: `10 <= x <= 20`. This is semantically equivalent to `10 <= x and x <= 20`, but `x` is evaluated only once, making it both more readable and efficient.',
    complexityInfo: 'A signature Python idiom heavily tested on PCEP exams',
  },
  {
    id: 'pcep-s2-fc-018',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Non-Boolean Expressions in elif Conditions',
    category: 'Conditionals',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What is the output of this elif chain using string values as conditions?',
    codeSnippet: `name = ""
if name:
    print("Has name")
elif "fallback":
    print("Fallback activated")
else:
    print("Default")`,
    stdoutExpected: 'Fallback activated',
    explanationTitle: 'String Truthiness in elif',
    explanationText:
      'First, `name` is the empty string `""`, which is falsy (`bool("") == False`). Python proceeds to the `elif "fallback":` line. A non-empty string `"fallback"` is truthy (`bool("fallback") == True`). Thus, "Fallback activated" executes.',
    complexityInfo: 'Testing truthiness of collections and strings in elif conditions',
  },
  {
    id: 'pcep-s2-fc-019',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'Order of Conditions: Specific Before General',
    category: 'Conditionals',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'Why does input value 15 print "Fizz" instead of "FizzBuzz" in this flawed code?',
    codeSnippet: `n = 15
if n % 3 == 0:
    print("Fizz")
elif n % 3 == 0 and n % 5 == 0:
    print("FizzBuzz")`,
    stdoutExpected: 'Fizz',
    explanationTitle: 'Condition Ordering Trap',
    explanationText:
      'Because `15 % 3 == 0` is True, Python executes the first branch ("Fizz") and immediately terminates the conditional construct. The more specific condition `n % 3 == 0 and n % 5 == 0` is never reached. In conditional chains, more specific conditions must always precede more general ones.',
    complexityInfo: 'Classic logical error tested in exam code analysis',
  },
  {
    id: 'pcep-s2-fc-020',
    track: 'pcep',
    cardType: 'PCEP 2.1 • Conditionals',
    topic: 'SyntaxError on Assignment (=) in if Condition',
    category: 'Conditionals',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.1',
    section: 'Section 2',
    question: 'What error occurs if you accidentally write if x = 5: instead of if x == 5: in standard Python?',
    codeSnippet: `# if x = 5:
#     print("Five")
# SyntaxError: invalid syntax (cannot use assignment operator = in standard if header)
print("SyntaxError")`,
    stdoutExpected: 'SyntaxError',
    explanationTitle: '= vs == in Conditions',
    explanationText:
      'In Python, the single equals sign `=` is strictly an assignment statement, not an expression. Writing `if x = 5:` raises an immediate `SyntaxError: invalid syntax`. Equality comparison requires the double equals operator `==`.',
    complexityInfo: 'Python guards against the accidental assignment bug common in C/C++',
  },

  // =========================================================================
  // CHAPTER 2.2: RELATIONAL AND EQUALITY OPERATORS (Cards 21 to 35)
  // =========================================================================
  {
    id: 'pcep-s2-fc-021',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Equality Operator (==) Semantics',
    category: 'Relational Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What does the == operator compare in Python, and what type does it return?',
    codeSnippet: `result = (5 == 5)
print(result)
print(type(result).__name__)`,
    stdoutExpected: `True
bool`,
    explanationTitle: 'Equality Comparison Operator',
    explanationText:
      'The `==` operator compares the values of two operands for equivalence and returns a boolean value (`True` or `False`). If the values are equal, it yields `True`; otherwise, `False`.',
    complexityInfo: 'Official PCEP syllabus: comparison operators and boolean returns',
  },
  {
    id: 'pcep-s2-fc-022',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Inequality Operator (!=) Semantics',
    category: 'Relational Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What does the != operator evaluate to when operands have different values?',
    codeSnippet: `a = 10
b = 20
print(a != b)
print(a != 10)`,
    stdoutExpected: `True
False`,
    explanationTitle: 'Inequality Operator (!=)',
    explanationText:
      'The `!=` operator returns `True` if the left and right operands have different values, and `False` if they are equal. Note: Python 2 allowed `<>` as an alternate inequality operator, but `<>` is completely removed and invalid in Python 3.',
    complexityInfo: 'PCEP syllabus: != operator behavior and Python 3 exclusivity',
  },
  {
    id: 'pcep-s2-fc-023',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Strict Relational Operators (< and >)',
    category: 'Relational Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What is the output of strict comparisons when two operands are identical?',
    codeSnippet: `x = 7
print(x < 7)
print(x > 7)`,
    stdoutExpected: `False
False`,
    explanationTitle: 'Strict Less Than (<) and Greater Than (>)',
    explanationText:
      'The `<` (less than) and `>` (greater than) operators are strict relational comparisons. If both operands have equal values, both `<` and `>` return `False`. Only non-strict comparisons (`<=` or `>=`) return `True` for equal operands.',
    complexityInfo: 'Foundational comparison operator boundary testing',
  },
  {
    id: 'pcep-s2-fc-024',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Non-Strict Relational Operators (<= and >=)',
    category: 'Relational Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What do <= and >= evaluate to when the operands are equal?',
    codeSnippet: `val = 10
print(val <= 10)
print(val >= 10)`,
    stdoutExpected: `True
True`,
    explanationTitle: 'Less-Than-or-Equal (<=) and Greater-Than-or-Equal (>=)',
    explanationText:
      'The `<=` operator returns `True` if the left operand is either less than OR equal to the right operand. Similarly, `>=` returns `True` if the left operand is greater than OR equal to the right operand.',
    complexityInfo: 'Standard relational operators in PCEP Section 2',
  },
  {
    id: 'pcep-s2-fc-025',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Equality Between Integer and Float (1 == 1.0)',
    category: 'Relational Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What is the result of comparing an int and a float of equivalent mathematical value?',
    codeSnippet: `print(1 == 1.0)
print(0 == 0.0)
print(type(1) == type(1.0))`,
    stdoutExpected: `True
True
False`,
    explanationTitle: 'Numeric Value Equivalence vs Type Equivalence',
    explanationText:
      'In Python, `1 == 1.0` is `True` because `==` compares the numerical value of numeric types, not their types. Python implicitly coerces integers to floats during numeric comparisons. However, comparing their types directly `type(1) == type(1.0)` is `False` (`int != float`).',
    complexityInfo: 'Very common PCEP question testing numeric equality across types',
  },
  {
    id: 'pcep-s2-fc-026',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Floating-Point Representation and Precision in Equality',
    category: 'Relational Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'Why does 0.1 + 0.2 == 0.3 evaluate to False in Python?',
    codeSnippet: `print(0.1 + 0.2)
print(0.1 + 0.2 == 0.3)`,
    stdoutExpected: `0.30000000000000004
False`,
    explanationTitle: 'IEEE 754 Floating-Point Inexactness',
    explanationText:
      'Floats are stored in binary IEEE 754 double precision format. Fractions like 0.1 and 0.2 cannot be represented with exact precision in binary, resulting in `0.30000000000000004`. Because this does not exactly match binary 0.3, direct equality returns `False`. Use `math.isclose()` or `abs(a - b) < 1e-9` for float comparisons.',
    complexityInfo: 'A classic Python puzzle and frequent certification question',
  },
  {
    id: 'pcep-s2-fc-027',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Lexicographical Comparison of Strings',
    category: 'Relational Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does Python compare two strings using relational operators like < and >?',
    codeSnippet: `print("apple" < "banana")
print("cat" > "car")`,
    stdoutExpected: `True
True`,
    explanationTitle: 'Alphabetical / Lexicographical Ordering',
    explanationText:
      'Strings are compared character-by-character from left to right using their underlying Unicode code point values (ASCII). Since "a" comes before "b" (ord("a") < ord("b")), `"apple" < "banana"` is `True`. In "cat" vs "car", the first two characters match, and "t" > "r" makes `"cat" > "car"` `True`.',
    complexityInfo: 'Official PCEP syllabus: string comparison semantics',
  },
  {
    id: 'pcep-s2-fc-028',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Case Sensitivity in String Comparisons (ord())',
    category: 'Relational Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What is the output of "Apple" < "apple" and why?',
    codeSnippet: `print(ord("A"), ord("a"))
print("Apple" < "apple")`,
    stdoutExpected: `65 97
True`,
    explanationTitle: 'Uppercase Precedes Lowercase in ASCII',
    explanationText:
      'In the ASCII and Unicode tables, all uppercase letters (A-Z: 65-90) have smaller numeric values than lowercase letters (a-z: 97-122). Therefore, `ord("A") = 65` is less than `ord("a") = 97`, making `"Apple" < "apple"` evaluate to `True`.',
    complexityInfo: 'One of the most famous PCEP exam traps on string ordering',
  },
  {
    id: 'pcep-s2-fc-029',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Comparing Strings of Different Lengths',
    category: 'Relational Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What is the output of "cat" < "caterpillar"?',
    codeSnippet: `print("cat" < "caterpillar")
print("dog" > "doggy")`,
    stdoutExpected: `True
False`,
    explanationTitle: 'Prefix String Length Comparison',
    explanationText:
      'When one string is an exact initial substring (prefix) of another, the shorter string is considered strictly less than the longer string. `"cat"` is a prefix of `"caterpillar"`, so `"cat" < "caterpillar"` is `True`.',
    complexityInfo: 'Lexicographical tie-breaking rules',
  },
  {
    id: 'pcep-s2-fc-030',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Relational Comparisons Between Incompatible Types (TypeError)',
    category: 'Relational Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What happens when using < or > between a string and an integer in Python 3?',
    codeSnippet: `# print("5" > 3)
# TypeError: '>' not supported between instances of 'str' and 'int'
print("TypeError: '>' not supported between instances of 'str' and 'int'")`,
    stdoutExpected: "TypeError: '>' not supported between instances of 'str' and 'int'",
    explanationTitle: 'No Implicit Type Coercion in Relational Ops',
    explanationText:
      'In Python 3, relational operators (`<`, `<=`, `>`, `>=`) between incompatible types (such as `str` and `int`) raise a `TypeError`. Python does NOT automatically convert string `"5"` to integer `5` for relational ordering.',
    complexityInfo: 'Python 3 strict typing vs Python 2 legacy behavior',
  },
  {
    id: 'pcep-s2-fc-031',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Equality Operator Between Incompatible Types (No Error!)',
    category: 'Relational Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What does "5" == 5 evaluate to in Python, and does it raise an error?',
    codeSnippet: `print("5" == 5)
print("5" != 5)`,
    stdoutExpected: `False
True`,
    explanationTitle: 'Equality Across Incompatible Types Returns False',
    explanationText:
      'Unlike relational operators (`<`, `>`) which raise a `TypeError`, the equality operators `==` and `!=` NEVER raise an exception when comparing incompatible types. Because a `str` and an `int` can never have equal values, `"5" == 5` simply evaluates to `False`, and `"5" != 5` evaluates to `True`.',
    complexityInfo: 'Critical distinction tested on PCEP: == returns False, while < raises TypeError',
  },
  {
    id: 'pcep-s2-fc-032',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Chained Relational Operators Evaluation Order',
    category: 'Relational Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does Python internally break down and evaluate the expression 1 < 2 < 3?',
    codeSnippet: `result = 1 < 2 < 3
print(result)`,
    stdoutExpected: 'True',
    explanationTitle: 'Chained Comparison Decomposition',
    explanationText:
      'In Python, chained comparisons like `a < b < c` are evaluated as `(a < b) and (b < c)`. Both sub-conditions must be True for the entire expression to be True: `1 < 2` is True, and `2 < 3` is True, so the result is True.',
    complexityInfo: 'PCEP syllabus: chained relational expressions',
  },
  {
    id: 'pcep-s2-fc-033',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Short-Circuiting in Chained Comparisons',
    category: 'Relational Operators',
    difficulty: 'Advanced',
    factor: '2.3',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'Why is function f() never called in 2 > 5 < f()?',
    codeSnippet: `def f():
    print("f() executed")
    return 10

result = 2 > 5 < f()
print("Result:", result)`,
    stdoutExpected: 'Result: False',
    explanationTitle: 'Short-Circuiting in Chained Relations',
    explanationText:
      'Because `a < b < c` translates to `(a < b) and (b < c)`, if the first comparison `2 > 5` evaluates to `False`, Python immediately short-circuits. The second comparison `< f()` is never evaluated, so `f()` is never called.',
    complexityInfo: 'Subtle PCEP question testing side-effects in chained comparisons',
  },
  {
    id: 'pcep-s2-fc-034',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Identity Operator (is) vs Equality Operator (==)',
    category: 'Relational Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What is the difference between == and is in Python?',
    codeSnippet: `list_a = [1, 2, 3]
list_b = [1, 2, 3]
print(list_a == list_b)
print(list_a is list_b)`,
    stdoutExpected: `True
False`,
    explanationTitle: 'Value Equality (==) vs Object Identity (is)',
    explanationText:
      '`==` tests for VALUE EQUIVALENCE (whether the contents of the objects are identical). `is` tests for OBJECT IDENTITY (whether both variables point to the exact same object in memory, i.e., `id(list_a) == id(list_b)`). Here, `list_a` and `list_b` have the same values, but are two distinct list objects in memory.',
    complexityInfo: 'Fundamental Python concept tested across both PCEP and PCAP',
  },
  {
    id: 'pcep-s2-fc-035',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'The is not Identity Operator',
    category: 'Relational Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What does is not test in Python, and how is it used with None?',
    codeSnippet: `val = 42
print(val is not None)
empty = None
print(empty is None)`,
    stdoutExpected: `True
True`,
    explanationTitle: 'Identity Verification with None',
    explanationText:
      'The `is not` operator evaluates to `True` if two variables refer to different objects in memory. PEP 8 specifically mandates using `is` and `is not` when testing for `None` (e.g. `if x is not None:`), because `None` is a singleton object in Python.',
    complexityInfo: 'PEP 8 requirement: identity comparison for singleton None',
  },
];
