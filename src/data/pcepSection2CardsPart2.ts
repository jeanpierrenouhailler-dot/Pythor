import { Flashcard } from '../types';

/**
 * PCEP-30-0x SECTION 2: CONTROL FLOW – CONDITIONAL BLOCKS AND LOOPS (Part 2: Cards 36 to 70)
 * - Chapter 2.2 Completion: Comparisons, Precedence & Membership (Cards 36-40)
 * - Chapter 2.3: Logical Operators & Short-Circuit Evaluation (Cards 41-60)
 * - Chapter 2.4 Start: Bitwise Operators & Bit Shifting (Cards 61-70)
 */
export const pcepSection2CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.2 COMPLETION: COMPARISONS, PRECEDENCE & MEMBERSHIP (Cards 36 to 40)
  // =========================================================================
  {
    id: 'pcep-s2-fc-036',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Membership Operators: in and not in',
    category: 'Relational Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How do in and not in evaluate membership within a collection?',
    codeSnippet: `fruits = ["apple", "banana", "orange"]
print("apple" in fruits)
print("grape" not in fruits)
print("ban" in "banana")`,
    stdoutExpected: `True
True
True`,
    explanationTitle: 'Membership Testing with in and not in',
    explanationText:
      'The `in` operator returns `True` if a target item is found inside a sequence (list, tuple, string, set, dict keys). `not in` is its logical negation. When applied to strings, `in` tests whether the left operand is a substring of the right operand.',
    complexityInfo: 'Core sequence membership testing in PCEP syllabus',
  },
  {
    id: 'pcep-s2-fc-037',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Comparison vs Arithmetic Operator Precedence',
    category: 'Relational Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'What is the output of 3 + 4 > 2 * 3 in Python?',
    codeSnippet: `result = 3 + 4 > 2 * 3
print(result)`,
    stdoutExpected: 'True',
    explanationTitle: 'Arithmetic Binds Tighter Than Comparison',
    explanationText:
      'All arithmetic operators (`+`, `-`, `*`, `/`, `//`, `%`, `**`) have higher precedence than relational and equality operators (`<`, `<=`, `>`, `>=`, `==`, `!=`). The expression evaluates as `(3 + 4) > (2 * 3)` -> `7 > 6` -> `True`.',
    complexityInfo: 'Official PCEP precedence hierarchy test',
  },
  {
    id: 'pcep-s2-fc-038',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Boolean Equality with Integers (True == 1)',
    category: 'Relational Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'Why does True == 1 and False == 0 evaluate to True in Python?',
    codeSnippet: `print(True == 1)
print(False == 0)
print(isinstance(True, int))`,
    stdoutExpected: `True
True
True`,
    explanationTitle: 'bool is a Subclass of int',
    explanationText:
      'In Python, the `bool` type is an explicit subclass of `int`. `True` has the numerical integer value `1`, and `False` has the numerical integer value `0`. Therefore, `True == 1` and `False == 0` are both `True`. However, `True is 1` is `False` because they are different objects.',
    complexityInfo: 'A classic Python internals question frequently seen on PCEP',
  },
  {
    id: 'pcep-s2-fc-039',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Lexicographical Comparison of Tuples and Lists',
    category: 'Relational Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How does Python compare two tuples with relational operators?',
    codeSnippet: `t1 = (1, 2, 4)
t2 = (1, 3, 0)
print(t1 < t2)`,
    stdoutExpected: 'True',
    explanationTitle: 'Element-by-Element Tuple Ordering',
    explanationText:
      'Tuples and lists are compared element-by-element from index 0. First, `1 == 1` (tie). Next, `2 < 3` evaluates to `True`. Python immediately stops and returns `True`, completely ignoring the remaining elements (4 and 0).',
    complexityInfo: 'Sequence comparison mechanics in Section 2 & Section 3',
  },
  {
    id: 'pcep-s2-fc-040',
    track: 'pcep',
    cardType: 'PCEP 2.2 • Comparisons',
    topic: 'Relational Operator Precedence Relative to Logical Operators',
    category: 'Relational Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.2',
    section: 'Section 2',
    question: 'How is 5 > 2 and 3 < 1 evaluated by Python without parentheses?',
    codeSnippet: `result = 5 > 2 and 3 < 1
print(result)`,
    stdoutExpected: 'False',
    explanationTitle: 'Comparisons Bind Tighter Than and / or',
    explanationText:
      'Relational and equality operators (`<`, `>`, `==`, etc.) have higher precedence than the logical operators `not`, `and`, and `or`. Python parses `5 > 2 and 3 < 1` as `(5 > 2) and (3 < 1)` -> `True and False` -> `False`.',
    complexityInfo: 'Precedence hierarchy spanning Chapter 2.2 and Chapter 2.3',
  },

  // =========================================================================
  // CHAPTER 2.3: LOGICAL OPERATORS & SHORT-CIRCUIT EVALUATION (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pcep-s2-fc-041',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'The not Logical Operator',
    category: 'Logical Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What does the unary not operator return in Python?',
    codeSnippet: `print(not True)
print(not False)
print(not 0)
print(not "Python")`,
    stdoutExpected: `False
True
True
False`,
    explanationTitle: 'Boolean Negation with not',
    explanationText:
      'The unary operator `not` inverts the truth value of its operand and ALWAYS returns an explicit boolean (`True` or `False`). If the operand is truthy, `not` returns `False`. If the operand is falsy (like `0` or `""`), `not` returns `True`.',
    complexityInfo: 'Unary boolean negation behavior',
  },
  {
    id: 'pcep-s2-fc-042',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'The and Operator Truth Table',
    category: 'Logical Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the truth table for the and operator in Python?',
    codeSnippet: `print(True and True)
print(True and False)
print(False and True)
print(False and False)`,
    stdoutExpected: `True
False
False
False`,
    explanationTitle: 'and Yields True Only If Both Operands Are Truthy',
    explanationText:
      'The `and` operator requires BOTH operands to be True to result in True. If either operand (or both) is False, the expression evaluates to False.',
    complexityInfo: 'Foundational boolean logic in PCEP syllabus',
  },
  {
    id: 'pcep-s2-fc-043',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'The or Operator Truth Table',
    category: 'Logical Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the truth table for the or operator in Python?',
    codeSnippet: `print(True or True)
print(True or False)
print(False or True)
print(False or False)`,
    stdoutExpected: `True
True
True
False`,
    explanationTitle: 'or Yields True If At Least One Operand Is Truthy',
    explanationText:
      'The `or` operator returns True if at least one of its operands is True. It evaluates to False ONLY when BOTH operands are False.',
    complexityInfo: 'Boolean disjunction truth table',
  },
  {
    id: 'pcep-s2-fc-044',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'Logical Operator Precedence: not > and > or',
    category: 'Logical Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the order of precedence among not, and, and or?',
    codeSnippet: `result = True or False and not True
print(result)`,
    stdoutExpected: 'True',
    explanationTitle: 'Hierarchy: not binds first, then and, then or',
    explanationText:
      'The precedence hierarchy of Python logical operators is:\n1. `not` (highest)\n2. `and`\n3. `or` (lowest)\n`True or False and not True` evaluates as:\nStep 1: `not True` -> `False`\nStep 2: `False and False` -> `False`\nStep 3: `True or False` -> `True`.',
    complexityInfo: 'A critical precedence rule tested on almost every PCEP exam',
  },
  {
    id: 'pcep-s2-fc-045',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'Short-Circuiting in and Expressions',
    category: 'Logical Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Why does Python not execute func() in the expression False and func()?',
    codeSnippet: `def func():
    print("Function called!")
    return True

val = False and func()
print("Val:", val)`,
    stdoutExpected: 'Val: False',
    explanationTitle: 'Short-Circuit Evaluation with and',
    explanationText:
      'In an `and` operation, if the left operand evaluates to False (or falsy), the entire expression can NEVER be True regardless of the right operand. Python immediately returns the left falsy value without evaluating the right operand. Thus `func()` is never invoked.',
    complexityInfo: 'Official PCEP syllabus objective: short-circuiting mechanics',
  },
  {
    id: 'pcep-s2-fc-046',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'Short-Circuiting in or Expressions',
    category: 'Logical Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Why is right() not called in True or right()?',
    codeSnippet: `def right():
    print("Right called!")
    return False

val = True or right()
print("Val:", val)`,
    stdoutExpected: 'Val: True',
    explanationTitle: 'Short-Circuit Evaluation with or',
    explanationText:
      'In an `or` operation, if the left operand is True (or truthy), the entire expression is guaranteed to be True. Python immediately halts evaluation and returns the left operand. The right-hand operand is never evaluated.',
    complexityInfo: 'Core property of logical evaluation in Python',
  },
  {
    id: 'pcep-s2-fc-047',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'Preventing Runtime Errors via Short-Circuiting',
    category: 'Logical Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How does short-circuiting prevent a ZeroDivisionError in x != 0 and 10 / x > 1?',
    codeSnippet: `x = 0
if x != 0 and 10 / x > 1:
    print("Valid")
else:
    print("Protected from ZeroDivisionError")`,
    stdoutExpected: 'Protected from ZeroDivisionError',
    explanationTitle: 'Guard Conditions in Logical Expressions',
    explanationText:
      'Because `x != 0` evaluates to `False`, the `and` operator short-circuits. Python never evaluates `10 / x > 1`, completely avoiding what would otherwise be a fatal `ZeroDivisionError: division by zero`.',
    complexityInfo: 'Common real-world programming pattern tested on PCEP',
  },
  {
    id: 'pcep-s2-fc-048',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'Return Value of and with Non-Boolean Operands',
    category: 'Logical Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is returned by 0 and 5, and what is returned by 3 and 7 in Python?',
    codeSnippet: `print(0 and 5)
print(3 and 7)`,
    stdoutExpected: `0
7`,
    explanationTitle: 'and Returns the Determining Operand',
    explanationText:
      'In Python, `a and b` does NOT convert values to booleans. It returns `a` if `a` is falsy; otherwise, it returns `b`. Therefore:\n`0 and 5` -> `0` (first falsy value)\n`3 and 7` -> `7` (3 is truthy, so second operand 7 is returned).',
    complexityInfo: 'One of the most heavily tested Python-specific logical behaviors',
  },
  {
    id: 'pcep-s2-fc-049',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'Return Value of or with Non-Boolean Operands',
    category: 'Logical Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is returned by "hello" or "world", and "" or "fallback"?',
    codeSnippet: `print("hello" or "world")
print("" or "fallback")`,
    stdoutExpected: `hello
fallback`,
    explanationTitle: 'or Returns the First Truthy Operand',
    explanationText:
      'In Python, `a or b` returns `a` if `a` is truthy; otherwise, it returns `b`. Since `"hello"` is truthy, `"hello" or "world"` immediately returns `"hello"`. For `"" or "fallback"`, `""` is falsy, so `"fallback"` is returned.',
    complexityInfo: 'High-frequency exam question on operand return types',
  },
  {
    id: 'pcep-s2-fc-050',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'The Fallback Default Value Idiom Using or',
    category: 'Logical Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How is the or operator used to provide fallback default values for empty inputs?',
    codeSnippet: `user_name = ""
display_name = user_name or "Guest"
print(display_name)`,
    stdoutExpected: 'Guest',
    explanationTitle: 'Fallback Default Value Idiom',
    explanationText:
      'Because empty strings `""` are falsy, `user_name or "Guest"` evaluates the left operand as falsy and returns the right operand `"Guest"`. If `user_name` was `"Alice"`, `"Alice"` would be returned.',
    complexityInfo: 'Idiomatic Python pattern for default assignment',
  },
  {
    id: 'pcep-s2-fc-051',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'Chained and with Multiple Operands',
    category: 'Logical Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the evaluated result of 1 and 2 and 0 and 4 in Python?',
    codeSnippet: `result = 1 and 2 and 0 and 4
print(result)`,
    stdoutExpected: '0',
    explanationTitle: 'Chained and Halts on First Falsy Value',
    explanationText:
      'When multiple `and` operators are chained, Python evaluates left-to-right until it hits the first falsy operand, which it immediately returns. Here, `1` and `2` are truthy, but `0` is falsy, so evaluation stops and returns `0`. `4` is never evaluated.',
    complexityInfo: 'Chained logical expressions trace',
  },
  {
    id: 'pcep-s2-fc-052',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'Chained or with Multiple Operands',
    category: 'Logical Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the evaluated result of False or 0 or "Found" or None?',
    codeSnippet: `result = False or 0 or "Found" or None
print(result)`,
    stdoutExpected: 'Found',
    explanationTitle: 'Chained or Halts on First Truthy Value',
    explanationText:
      'Chained `or` operators evaluate left-to-right and stop at the very first truthy operand. `False` and `0` are falsy. `"Found"` is a non-empty string and thus truthy. Evaluation immediately returns `"Found"` without inspecting `None`.',
    complexityInfo: 'Short-circuit evaluation across chained disjunctions',
  },
  {
    id: 'pcep-s2-fc-053',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'The Double not Idiom (not not x)',
    category: 'Logical Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What does applying not not x produce on any value x?',
    codeSnippet: `x = [1, 2, 3]
print(not not x)
print(bool(x))
y = ""
print(not not y)`,
    stdoutExpected: `True
True
False`,
    explanationTitle: 'Strict Boolean Conversion via Double Negation',
    explanationText:
      'Applying `not not x` converts any value into its canonical boolean equivalent (`bool(x)`). The first `not` negates truthiness to a boolean opposite (`False` for a non-empty list), and the second `not` flips it back to `True`.',
    complexityInfo: 'Equivalent to bool(x) type casting',
  },
  {
    id: 'pcep-s2-fc-054',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: "De Morgan's Laws in Python Logic",
    category: 'Logical Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: "According to De Morgan's laws, what is the logical equivalent of not (a or b)?",
    codeSnippet: `a = True
b = False
exp1 = not (a or b)
exp2 = not a and not b
print(exp1 == exp2)
print(exp1)`,
    stdoutExpected: `True
False`,
    explanationTitle: "De Morgan's Laws Equivalence",
    explanationText:
      "De Morgan's laws state that:\n1. `not (A or B)` is logically identical to `not A and not B`.\n2. `not (A and B)` is logically identical to `not A or not B`.\nPython simplifies negations accordingly.",
    complexityInfo: 'Core boolean algebra tested in Python logic sections',
  },
  {
    id: 'pcep-s2-fc-055',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'Parentheses Overriding Logical Precedence',
    category: 'Logical Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How do parentheses alter (True or False) and False vs True or False and False?',
    codeSnippet: `r1 = True or False and False
r2 = (True or False) and False
print(r1, r2)`,
    stdoutExpected: 'True False',
    explanationTitle: 'Enforcing Evaluation with Parentheses',
    explanationText:
      'Without parentheses, `and` binds first: `False and False` = `False`, then `True or False` = `True`. With parentheses, `(True or False)` evaluates to `True` first, then `True and False` = `False`.',
    complexityInfo: 'Parentheses role in overriding standard precedence',
  },
  {
    id: 'pcep-s2-fc-056',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'Falsy Numeric Representations',
    category: 'Logical Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Which of the following numeric literals evaluate to False in a boolean context?',
    codeSnippet: `print(bool(0))
print(bool(0.0))
print(bool(0j))
print(bool(-1))`,
    stdoutExpected: `False
False
False
True`,
    explanationTitle: 'Zero Numbers are Falsy, Non-Zero are Truthy',
    explanationText:
      'In Python, any numeric zero (integer `0`, float `0.0`, complex `0j`) evaluates to `False`. All non-zero numbers (including negative integers like `-1` and negative floats like `-0.001`) evaluate to `True`.',
    complexityInfo: 'Negative numbers are truthy—a frequent PCEP trick question',
  },
  {
    id: 'pcep-s2-fc-057',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'Falsy Container Representations',
    category: 'Logical Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the boolean evaluation of empty strings, lists, tuples, sets, and dicts?',
    codeSnippet: `falsy_items = ["", [], (), set(), {}, None]
results = [bool(item) for item in falsy_items]
print(any(results))`,
    stdoutExpected: 'False',
    explanationTitle: 'Empty Collections are Always Falsy',
    explanationText:
      'All empty sequences and collections (`""`, `[]`, `()`, `set()`, `{}`) as well as `None` and `False` evaluate to `False`. Since none of them are truthy, `any(results)` is `False`. Any collection containing at least one item evaluates to `True`.',
    complexityInfo: 'Complete inventory of Python falsy values',
  },
  {
    id: 'pcep-s2-fc-058',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'Combining Comparisons and Logical Operators',
    category: 'Logical Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Trace the output of: not 10 > 5 or 3 == 3 and not 4 < 2',
    codeSnippet: `# 1. Comparisons: 10 > 5 is True; 3 == 3 is True; 4 < 2 is False
# 2. not: not True is False; not False is True
# 3. and: True and True is True
# 4. or: False or True is True
result = not 10 > 5 or 3 == 3 and not 4 < 2
print(result)`,
    stdoutExpected: 'True',
    explanationTitle: 'Full Precedence Trace',
    explanationText:
      'Precedence order:\n1. Comparisons (`> `, `==`, `<`) evaluated first: `not True or True and not False`\n2. `not` evaluated next: `False or True and True`\n3. `and` evaluated next: `True and True` -> `True`\n4. `or` evaluated last: `False or True` -> `True`.',
    complexityInfo: 'Advanced precedence tracing question in PCEP',
  },
  {
    id: 'pcep-s2-fc-059',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'Bitwise AND (&) vs Logical and Difference',
    category: 'Logical Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Why do True & False and True and False produce different behavior with functions?',
    codeSnippet: `def side_effect():
    print("Executed")
    return False

# With logical 'and':
_ = False and side_effect()  # Short-circuits, side_effect NOT called

# With bitwise '&':
# _ = False & side_effect()  # BOTH operands evaluated, side_effect IS called
print("Done")`,
    stdoutExpected: 'Done',
    explanationTitle: 'Short-Circuiting vs Eager Bitwise Evaluation',
    explanationText:
      '`and` is a logical operator that performs short-circuit evaluation. `&` is a bitwise operator that ALWAYS evaluates BOTH operands eagerly and performs bitwise conjunction. `&` never short-circuits.',
    complexityInfo: 'Critical distinction between logical and bitwise operators',
  },
  {
    id: 'pcep-s2-fc-060',
    track: 'pcep',
    cardType: 'PCEP 2.3 • Logical Operators',
    topic: 'Boolean Truthiness of String "False"',
    category: 'Logical Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is bool("False") and bool("0") in Python?',
    codeSnippet: `print(bool("False"))
print(bool("0"))
print(bool(""))`,
    stdoutExpected: `True
True
False`,
    explanationTitle: 'Non-Empty Strings are Always Truthy',
    explanationText:
      'In Python, string truthiness is determined strictly by whether the string is non-empty (`len(s) > 0`). The strings `"False"` and `"0"` contain characters, so `bool("False")` and `bool("0")` are both `True`! Only the empty string `""` evaluates to `False`.',
    complexityInfo: 'A notoriously tricky PCEP question about string conversion',
  },

  // =========================================================================
  // CHAPTER 2.4 START: BITWISE OPERATORS & BIT SHIFTING (Cards 61 to 70)
  // =========================================================================
  {
    id: 'pcep-s2-fc-061',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Bitwise Operators Overview in Python',
    category: 'Bitwise Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What are the 6 bitwise operators supported in Python?',
    codeSnippet: `# Bitwise operators in Python:
# &  : Bitwise AND
# |  : Bitwise OR
# ^  : Bitwise XOR
# ~  : Bitwise NOT (Inversion)
# << : Bitwise Left Shift
# >> : Bitwise Right Shift
print("6 bitwise operators")`,
    stdoutExpected: '6 bitwise operators',
    explanationTitle: 'Python Bitwise Operators Suite',
    explanationText:
      'Python provides six bitwise operators that operate on integers at the binary bit level: `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (left shift), and `>>` (right shift).',
    complexityInfo: 'Official PCEP syllabus: bitwise operator symbols and purposes',
  },
  {
    id: 'pcep-s2-fc-062',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Bitwise AND (&) Truth Table and Calculation',
    category: 'Bitwise Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the output of 5 & 3 in Python?',
    codeSnippet: `# 5 in binary = 0101
# 3 in binary = 0011
# Bitwise AND = 0001 (1 in decimal)
print(5 & 3)`,
    stdoutExpected: '1',
    explanationTitle: 'Bitwise AND (&)',
    explanationText:
      'Bitwise `&` compares each bit of its operands. If both bits are 1, the corresponding result bit is set to 1; otherwise it is set to 0.\n  0101 (5)\n& 0011 (3)\n= 0001 (1 in decimal).',
    complexityInfo: 'Fundamental bitwise calculation tested on PCEP',
  },
  {
    id: 'pcep-s2-fc-063',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Bitwise OR (|) Truth Table and Calculation',
    category: 'Bitwise Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the output of 5 | 3 in Python?',
    codeSnippet: `# 5 in binary = 0101
# 3 in binary = 0011
# Bitwise OR  = 0111 (7 in decimal)
print(5 | 3)`,
    stdoutExpected: '7',
    explanationTitle: 'Bitwise OR (|)',
    explanationText:
      'Bitwise `|` compares each bit of its operands. If at least one bit is 1, the corresponding result bit is set to 1; it is 0 only if both bits are 0.\n  0101 (5)\n| 0011 (3)\n= 0111 (7 in decimal).',
    complexityInfo: 'Binary disjunction calculation',
  },
  {
    id: 'pcep-s2-fc-064',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Bitwise XOR (^) Truth Table and Calculation',
    category: 'Bitwise Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the output of 5 ^ 3 in Python?',
    codeSnippet: `# 5 in binary = 0101
# 3 in binary = 0011
# Bitwise XOR = 0110 (6 in decimal)
print(5 ^ 3)`,
    stdoutExpected: '6',
    explanationTitle: 'Bitwise Exclusive OR (^)',
    explanationText:
      'Bitwise `^` (exclusive OR) sets the result bit to 1 if the corresponding bits of the operands are DIFFERENT (one is 1 and the other is 0). If both bits are the same (both 0 or both 1), the result bit is 0.\n  0101 (5)\n^ 0011 (3)\n= 0110 (6 in decimal).',
    complexityInfo: 'XOR logic and arithmetic results',
  },
  {
    id: 'pcep-s2-fc-065',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Bitwise NOT (~) Inversion Formula: ~x = -(x + 1)',
    category: 'Bitwise Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the output of ~5 and ~0 in Python, and what formula defines it?',
    codeSnippet: `print(~5)
print(~0)
print(~(-6))`,
    stdoutExpected: `-6
-1
5`,
    explanationTitle: 'The Bitwise Inversion Formula ~x = -(x + 1)',
    explanationText:
      'In Python, integers use two\'s complement binary representation. The bitwise NOT operator `~` flips all bits. Because of two\'s complement, `~x` is mathematically equal to `-(x + 1)`. Therefore:\n`~5` = `-(5 + 1) = -6`\n`~0` = `-(0 + 1) = -1`\n`~(-6)` = `-(-6 + 1) = 5`.',
    complexityInfo: 'One of the most frequently asked bitwise questions on PCEP',
  },
  {
    id: 'pcep-s2-fc-066',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Bitwise Left Shift (<<) and Multiplication by Powers of 2',
    category: 'Bitwise Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the output of 5 << 2 in Python, and how does it relate to multiplication?',
    codeSnippet: `val = 5 << 2
print(val)
# 5 * (2 ** 2) = 5 * 4 = 20
print(val == 5 * (2 ** 2))`,
    stdoutExpected: `20
True`,
    explanationTitle: 'Left Shift: x << n equals x * 2^n',
    explanationText:
      'The left shift operator `x << n` shifts the binary bits of `x` to the left by `n` positions, filling vacant lower bits with zeros. Each shift left by 1 position multiplies the number by 2. Shifting left by `n` positions multiplies `x` by `2**n`. `5 << 2 = 5 * 4 = 20`.',
    complexityInfo: 'PCEP syllabus: bit shift arithmetic equivalences',
  },
  {
    id: 'pcep-s2-fc-067',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Bitwise Right Shift (>>) and Division by Powers of 2',
    category: 'Bitwise Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the output of 20 >> 2 and 15 >> 1?',
    codeSnippet: `print(20 >> 2)
print(15 >> 1)`,
    stdoutExpected: `5
7`,
    explanationTitle: 'Right Shift: x >> n equals x // 2^n',
    explanationText:
      'The right shift operator `x >> n` shifts the binary representation of `x` to the right by `n` positions, discarding the rightmost bits. This is equivalent to floor division by `2**n`: `20 // (2**2) = 20 // 4 = 5`, and `15 // (2**1) = 15 // 2 = 7`.',
    complexityInfo: 'PCEP syllabus: integer floor division via right shift',
  },
  {
    id: 'pcep-s2-fc-068',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Bit Masking: Checking if a Specific Bit is Set',
    category: 'Bitwise Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How do you check if the 3rd bit (value 4 = 0b100) of variable flags is set?',
    codeSnippet: `flags = 13  # binary: 0b1101 (bits 0, 2, 3 set)
MASK = 4    # binary: 0b0100 (bit 2 / 3rd bit)
is_set = (flags & MASK) != 0
print(is_set)`,
    stdoutExpected: 'True',
    explanationTitle: 'Bit Masking with Bitwise AND',
    explanationText:
      'To test if a particular bit is 1, perform a bitwise AND `&` with a mask where only that bit is set. If the result is non-zero, the bit is set. `13 & 4` = `0b1101 & 0b0100` = `0b0100` = `4 != 0` -> `True`.',
    complexityInfo: 'Standard bitwise mask testing technique in computer science',
  },
  {
    id: 'pcep-s2-fc-069',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Bit Masking: Clearing a Bit with & and ~',
    category: 'Bitwise Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How do you clear a specific bit in an integer using bitwise operators?',
    codeSnippet: `x = 7       # binary: 0b0111
MASK = 2    # binary: 0b0010
x = x & ~MASK
print(x)`,
    stdoutExpected: '5',
    explanationTitle: 'Bit Clearing: x & ~MASK',
    explanationText:
      '`~MASK` inverts the mask, making the target bit 0 and all other bits 1. Performing `x & ~MASK` clears only the target bit while preserving all other bits: `0b0111 & ~0b0010` = `0b0111 & ...1101` = `0b0101` = `5`.',
    complexityInfo: 'Bit manipulation techniques tested in PCEP',
  },
  {
    id: 'pcep-s2-fc-070',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Bit Masking: Toggling a Bit with XOR (^)',
    category: 'Bitwise Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What operator toggles (flips) a specific bit without affecting other bits?',
    codeSnippet: `x = 5       # 0b0101
MASK = 1    # 0b0001 (flip bit 0)
x = x ^ MASK
print(x)    # Now 4 (0b0100)
x = x ^ MASK
print(x)    # Back to 5 (0b0101)`,
    stdoutExpected: `4
5`,
    explanationTitle: 'Bit Toggling with XOR (^)',
    explanationText:
      'Because `1 ^ 1 = 0` and `0 ^ 1 = 1`, XORing a bit with `1` toggles its state (1 becomes 0, 0 becomes 1). XORing any bit with `0` leaves it unchanged (`b ^ 0 = b`).',
    complexityInfo: 'XOR properties in bit manipulation',
  },
];
