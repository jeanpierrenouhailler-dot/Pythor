import { Flashcard } from '../types';

/**
 * PCEP-30-0x SECTION 2: CONTROL FLOW – CONDITIONAL BLOCKS AND LOOPS (Part 3: Cards 71 to 100)
 * - Chapter 2.4 Completion: Bitwise Precedence, Idioms & Binary Formatting (Cards 71-80)
 * - Chapter 2.5: Loops: while, for, range(), break, continue & loop-else (Cards 81-100)
 */
export const pcepSection2CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.4 COMPLETION: BITWISE PRECEDENCE, IDIOMS & BINARY (Cards 71 to 80)
  // =========================================================================
  {
    id: 'pcep-s2-fc-071',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Bitwise Operator Precedence Hierarchy',
    category: 'Bitwise Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the order of precedence among bitwise NOT (~), shifts (<<, >>), AND (&), XOR (^), and OR (|)?',
    codeSnippet: `# Bitwise precedence from highest to lowest:
# 1. ~ (unary bitwise NOT)
# 2. <<, >> (bit shifts)
# 3. & (bitwise AND)
# 4. ^ (bitwise XOR)
# 5. | (bitwise OR)
val = 1 | 2 ^ 3 & 4
print(val)`,
    stdoutExpected: '3',
    explanationTitle: 'Bitwise Precedence: ~ > <<, >> > & > ^ > |',
    explanationText:
      'Bitwise NOT `~` has highest precedence. Next are shifts `<<`, `>>`. Then `&` (AND), followed by `^` (XOR), and finally `|` (OR) at lowest precedence. In `1 | 2 ^ 3 & 4`, `3 & 4` = 0, then `2 ^ 0` = 2, then `1 | 2` = 3.',
    complexityInfo: 'Official Python operator precedence hierarchy tested on PCEP',
  },
  {
    id: 'pcep-s2-fc-072',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Negative Shift Count Raises ValueError',
    category: 'Bitwise Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What happens when you execute a bitwise shift with a negative count, like 5 << -1?',
    codeSnippet: `# print(5 << -1)
# ValueError: negative shift count
print("ValueError: negative shift count")`,
    stdoutExpected: 'ValueError: negative shift count',
    explanationTitle: 'Negative Shift Counts are Illegal',
    explanationText:
      'In Python, shifting by a negative number of bits does not shift in the opposite direction; it raises an immediate `ValueError: negative shift count`. Shifting by 0 is valid and leaves the number unchanged.',
    complexityInfo: 'Exception testing on bitwise operations in PCEP',
  },
  {
    id: 'pcep-s2-fc-073',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Inspecting Binary Representation with bin()',
    category: 'Bitwise Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What does the built-in bin() function return for an integer?',
    codeSnippet: `print(bin(10))
print(bin(0))
print(type(bin(10)).__name__)`,
    stdoutExpected: `0b1010
0b0
str`,
    explanationTitle: 'The bin() Built-in Function',
    explanationText:
      '`bin(x)` returns the binary representation of an integer `x` as a string prefixed with `"0b"`. For 10, it returns `"0b1010"`. The returned type is always `str`.',
    complexityInfo: 'Standard built-in function for base conversion in Section 1 & 2',
  },
  {
    id: 'pcep-s2-fc-074',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Parsing Binary Literals with int(s, 2)',
    category: 'Bitwise Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How do you convert a binary string "1011" into a decimal integer?',
    codeSnippet: `dec_val = int("1011", 2)
print(dec_val)
print(dec_val == 0b1011)`,
    stdoutExpected: `11
True`,
    explanationTitle: 'Base 2 Parsing with int()',
    explanationText:
      'The built-in `int(string, base)` function converts a string representation in any base (from 2 to 36) into a decimal integer. `int("1011", 2)` parses binary `1011` as `1*8 + 0*4 + 1*2 + 1*1 = 11`.',
    complexityInfo: 'Dual representation: numeric literals and base conversion',
  },
  {
    id: 'pcep-s2-fc-075',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Bitwise XOR Swap Algorithm',
    category: 'Bitwise Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What happens to variables x and y after the three XOR operations below?',
    codeSnippet: `x = 10
y = 25
x ^= y
y ^= x
x ^= y
print(x, y)`,
    stdoutExpected: '25 10',
    explanationTitle: 'The XOR Swap Algorithm',
    explanationText:
      'Because `a ^ a = 0` and `a ^ 0 = a`, three successive XOR operations swap the values of two integer variables without needing any extra memory or temporary variable. Python natively prefers `x, y = y, x`, but the XOR swap is a classic computer science concept tested in PCEP.',
    complexityInfo: 'Bit manipulation application in low-level programming',
  },
  {
    id: 'pcep-s2-fc-076',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Checking Even or Odd with Bitwise AND (n & 1)',
    category: 'Bitwise Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Why does n & 1 evaluate to 0 for even numbers and 1 for odd numbers?',
    codeSnippet: `for n in [4, 7, 12, 19]:
    is_odd = bool(n & 1)
    print(f"{n}: {'Odd' if is_odd else 'Even'}")`,
    stdoutExpected: `4: Even
7: Odd
12: Even
19: Odd`,
    explanationTitle: 'Least Significant Bit Parity Check',
    explanationText:
      'In binary representation, bit 0 represents `2^0 = 1`. All higher bits represent even powers of 2 (`2, 4, 8...`). Therefore, the parity of an integer depends solely on its least significant bit. `n & 1` masks bit 0: if it is 0, the number is even; if it is 1, the number is odd.',
    complexityInfo: 'Fastest bitwise parity check idiom',
  },
  {
    id: 'pcep-s2-fc-077',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Checking Power of 2 with Bitwise AND: (n & (n - 1)) == 0',
    category: 'Bitwise Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Why does (n & (n - 1)) == 0 test if a positive integer n is a power of 2?',
    codeSnippet: `def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0

print(is_power_of_two(8))
print(is_power_of_two(12))
print(is_power_of_two(16))`,
    stdoutExpected: `True
False
True`,
    explanationTitle: 'Power of Two Bit Property',
    explanationText:
      'A power of 2 has exactly one binary bit set to 1 (e.g. 8 is `0b1000`). Subtracting 1 flips that bit to 0 and turns all lower bits to 1 (7 is `0b0111`). Their bitwise AND `8 & 7` = `0b1000 & 0b0111` = `0`. Any non-power of two retains other bits.',
    complexityInfo: 'Classic bitwise algorithm frequently featured in exam challenges',
  },
  {
    id: 'pcep-s2-fc-078',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Augmented Bitwise Assignment Operators (&=, |=, ^=, <<=, >>=)',
    category: 'Bitwise Operators',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the evaluated output of x <<= 2 when x = 3?',
    codeSnippet: `x = 3
x <<= 2
print(x)
x |= 1
print(x)`,
    stdoutExpected: `12
13`,
    explanationTitle: 'In-Place Bitwise Mutation',
    explanationText:
      '`x <<= 2` is shorthand for `x = x << 2`. It shifts 3 (`0b0011`) left by 2 positions to 12 (`0b1100`). Next, `x |= 1` performs bitwise OR with 1 (`0b0001`), producing 13 (`0b1101`).',
    complexityInfo: 'Shorthand assignment with bitwise operators',
  },
  {
    id: 'pcep-s2-fc-079',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Bitwise Operations on Booleans',
    category: 'Bitwise Operators',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the output and type of True & False, and True ^ False?',
    codeSnippet: `r1 = True & False
r2 = True ^ False
print(r1, type(r1).__name__)
print(r2, type(r2).__name__)`,
    stdoutExpected: `False bool
True bool`,
    explanationTitle: 'bool Overloads Bitwise Operators to Return bool',
    explanationText:
      'When bitwise operators are applied between two `bool` operands, Python evaluates them using integer bitwise logic (`1 & 0 = 0`, `1 ^ 0 = 1`) and returns a `bool` result (`False` and `True`). However, unlike `and`/`or`, bitwise operators NEVER short-circuit!',
    complexityInfo: 'Subtle interaction between boolean type and bitwise operators',
  },
  {
    id: 'pcep-s2-fc-080',
    track: 'pcep',
    cardType: 'PCEP 2.4 • Bitwise Operations',
    topic: 'Precedence Trap: Bitwise AND (&) vs Equality (==)',
    category: 'Bitwise Operators',
    difficulty: 'Advanced',
    factor: '2.3',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Why does 1 & 2 == 0 evaluate to 0 instead of True in Python?',
    codeSnippet: `result = 1 & 2 == 0
print(result)
# With explicit grouping:
print((1 & 2) == 0)`,
    stdoutExpected: `0
True`,
    explanationTitle: 'Equality (==) Binds Tighter Than Bitwise AND (&)',
    explanationText:
      'Comparison operators (`==`, `!=`, `<`, `>`) have HIGHER precedence than bitwise `&`, `^`, and `|`. Therefore, `1 & 2 == 0` evaluates as `1 & (2 == 0)` -> `1 & False` -> `1 & 0` = `0` (which is integer 0, falsy!). To test bit results, parentheses are mandatory: `(1 & 2) == 0` yields `True`.',
    complexityInfo: 'One of the most treacherous precedence traps on Python certification exams',
  },

  // =========================================================================
  // CHAPTER 2.5: LOOPS: while, for, range(), break, continue, loop-else (Cards 81 to 100)
  // =========================================================================
  {
    id: 'pcep-s2-fc-081',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'The while Loop Syntax and Mechanics',
    category: 'Loops & Iteration',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How does a while loop evaluate its condition and how many times does it run?',
    codeSnippet: `count = 0
while count < 3:
    print(count, end=" ")
    count += 1`,
    stdoutExpected: '0 1 2 ',
    explanationTitle: 'Condition-Controlled Iteration',
    explanationText:
      'The `while` loop checks its condition before every iteration. As long as the condition evaluates to True (truthy), the body executes. When `count` reaches 3, `count < 3` becomes False, and the loop terminates. It executed 3 times (for count = 0, 1, 2).',
    complexityInfo: 'Official PCEP syllabus: while statement execution model',
  },
  {
    id: 'pcep-s2-fc-082',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'Infinite Loops and Missing Loop Counter Updates',
    category: 'Loops & Iteration',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What happens if the loop counter variable is never updated inside a while loop?',
    codeSnippet: `# i = 0
# while i < 5:
#     print(i)
# Infinite loop because i is never incremented!
print("Infinite loop / Non-terminating execution")`,
    stdoutExpected: 'Infinite loop / Non-terminating execution',
    explanationTitle: 'Infinite Loop Condition',
    explanationText:
      'If the condition of a while loop never becomes False and no `break` or `return` statement is encountered, the loop runs infinitely until the program is manually terminated (e.g. KeyboardInterrupt) or system resources are exhausted.',
    complexityInfo: 'PCEP syllabus: infinite loops and condition mutation',
  },
  {
    id: 'pcep-s2-fc-083',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'The for Loop and Iterable Traversal',
    category: 'Loops & Iteration',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How does a for loop iterate over elements in Python?',
    codeSnippet: `for char in "PCEP":
    print(char, end="-")`,
    stdoutExpected: 'P-C-E-P-',
    explanationTitle: 'Collection-Controlled for Loop',
    explanationText:
      'In Python, the `for` statement is a collection-controlled loop that iterates sequentially over each item of any iterable object (strings, lists, tuples, ranges, dicts). In each iteration, the target variable (`char`) receives the next item until all elements are exhausted.',
    complexityInfo: 'Python for loop traverses iterables directly, unlike C style for(;;)',
  },
  {
    id: 'pcep-s2-fc-084',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'range(stop) with a Single Argument',
    category: 'Loops & Iteration',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What sequence of numbers is produced by range(4)?',
    codeSnippet: `for n in range(4):
    print(n, end=" ")`,
    stdoutExpected: '0 1 2 3 ',
    explanationTitle: 'Default Start at 0, Exclusive Stop',
    explanationText:
      'When called with a single argument `range(stop)`, Python defaults the starting value to `0`, increments by `1`, and stops BEFORE reaching `stop`. Therefore, `range(4)` generates integers `0, 1, 2, 3` (4 values in total, excluding 4).',
    complexityInfo: 'Foundational range() behavior on every Python exam',
  },
  {
    id: 'pcep-s2-fc-085',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'range(start, stop) with Two Arguments',
    category: 'Loops & Iteration',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What integers are generated by range(2, 6)?',
    codeSnippet: `print(list(range(2, 6)))`,
    stdoutExpected: '[2, 3, 4, 5]',
    explanationTitle: 'Start Inclusive, Stop Exclusive',
    explanationText:
      '`range(start, stop)` starts at integer `start` (inclusive) and generates integers up to `stop - 1` (stop is exclusive). `range(2, 6)` generates `[2, 3, 4, 5]`. Notice that `6` is NOT included.',
    complexityInfo: 'Exclusive upper boundary rule',
  },
  {
    id: 'pcep-s2-fc-086',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'range(start, stop, step) with Positive Step',
    category: 'Loops & Iteration',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What sequence does range(1, 10, 3) generate?',
    codeSnippet: `values = list(range(1, 10, 3))
print(values)`,
    stdoutExpected: '[1, 4, 7]',
    explanationTitle: 'Step Increment in range()',
    explanationText:
      'The third argument specifies the step increment. Starting at 1: `1 + 3 = 4`, `4 + 3 = 7`. The next value would be `7 + 3 = 10`, but since the stop value 10 is exclusive, generation stops at 7. The result is `[1, 4, 7]`.',
    complexityInfo: 'Stepped arithmetic sequences',
  },
  {
    id: 'pcep-s2-fc-087',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'range(start, stop, step) with Negative Step',
    category: 'Loops & Iteration',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is generated by range(10, 2, -3)?',
    codeSnippet: `print(list(range(10, 2, -3)))`,
    stdoutExpected: '[10, 7, 4]',
    explanationTitle: 'Counting Downwards with Negative Step',
    explanationText:
      'With a negative step, `start` must be greater than `stop`. Starting at 10: `10 - 3 = 7`, `7 - 3 = 4`. The next candidate `4 - 3 = 1` is less than or equal to stop (2), so it is excluded. The output is `[10, 7, 4]`.',
    complexityInfo: 'Reverse range iteration testing',
  },
  {
    id: 'pcep-s2-fc-088',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'Empty range() When Boundary Direction Mismatches Step',
    category: 'Loops & Iteration',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the output of converting range(5, 2) and range(2, 5, -1) to lists?',
    codeSnippet: `r1 = list(range(5, 2))
r2 = list(range(2, 5, -1))
print(r1)
print(r2)`,
    stdoutExpected: `[]
[]`,
    explanationTitle: 'Empty Sequences on Contradictory Bounds',
    explanationText:
      'If `start > stop` with a positive step (default step is +1), or if `start < stop` with a negative step, the range generates no values and is completely empty `[]`. Python does not throw an error; it simply produces an empty sequence.',
    complexityInfo: 'Frequent exam question where a loop executes zero times',
  },
  {
    id: 'pcep-s2-fc-089',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'range() Memory Model in Python 3',
    category: 'Loops & Iteration',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Does range(1000000) allocate a list of 1 million integers in memory in Python 3?',
    codeSnippet: `import sys
r_small = range(10)
r_huge = range(1000000000)
print(sys.getsizeof(r_small) == sys.getsizeof(r_huge))`,
    stdoutExpected: 'True',
    explanationTitle: 'range Object is Lazy and Constant Memory O(1)',
    explanationText:
      'In Python 3, `range()` is an immutable sequence type that calculates values on-demand (lazy evaluation). It stores only the `start`, `stop`, and `step` values. Therefore, `range(10)` and `range(1000000000)` consume the exact same tiny amount of memory (48 bytes).',
    complexityInfo: 'Key architectural upgrade from Python 2 range() to Python 3',
  },
  {
    id: 'pcep-s2-fc-090',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'The break Statement: Immediate Loop Termination',
    category: 'Loops & Iteration',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What does the break statement do, and what is printed by this loop?',
    codeSnippet: `for i in range(10):
    if i == 3:
        break
    print(i, end=" ")`,
    stdoutExpected: '0 1 2 ',
    explanationTitle: 'Immediate Loop Termination with break',
    explanationText:
      'The `break` statement immediately terminates the execution of the innermost enclosing loop (`for` or `while`). Control passes directly to the first statement following the loop block. In this loop, when `i == 3`, break triggers and 3 is never printed.',
    complexityInfo: 'Official PCEP syllabus: loop control statements',
  },
  {
    id: 'pcep-s2-fc-091',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'The continue Statement: Skipping Current Iteration',
    category: 'Loops & Iteration',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How does continue differ from break in a loop?',
    codeSnippet: `for i in range(5):
    if i % 2 == 0:
        continue
    print(i, end=" ")`,
    stdoutExpected: '1 3 ',
    explanationTitle: 'Skipping Iterations with continue',
    explanationText:
      '`break` terminates the entire loop permanently. In contrast, `continue` only terminates the CURRENT iteration: it skips all remaining statements in the loop body for that iteration and jumps immediately to the next iteration (updating the loop variable/condition). Here, even numbers 0, 2, 4 are skipped.',
    complexityInfo: 'break vs continue comparison in PCEP',
  },
  {
    id: 'pcep-s2-fc-092',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'The else Clause in a for Loop',
    category: 'Loops & Iteration',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Under what condition does the else clause of a for loop execute?',
    codeSnippet: `for n in [1, 2, 3]:
    print(n, end=" ")
else:
    print("All processed!")`,
    stdoutExpected: '1 2 3 All processed!',
    explanationTitle: 'Loop else Executes on Natural Completion',
    explanationText:
      'In Python, loops can have an `else` branch. The loop `else` block executes when and ONLY when the loop completes all its iterations naturally without encountering a `break` statement.',
    complexityInfo: 'Unique Python feature heavily featured on PCEP certification',
  },
  {
    id: 'pcep-s2-fc-093',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'Loop else Block Skipped Upon break',
    category: 'Loops & Iteration',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Does the else block execute if a break occurs inside the loop?',
    codeSnippet: `for item in [10, 20, 30]:
    if item == 20:
        break
    print(item, end=" ")
else:
    print("Done")`,
    stdoutExpected: '10 ',
    explanationTitle: 'break Bypasses the Loop else Clause',
    explanationText:
      'If a loop is terminated prematurely by a `break` statement, the loop `else` block is completely bypassed and will NOT execute. Because `break` triggered on item 20, "Done" is never printed.',
    complexityInfo: 'Essential rule for Python search loops',
  },
  {
    id: 'pcep-s2-fc-094',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'Loop else Execution When Loop Never Iterates',
    category: 'Loops & Iteration',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Does the else block execute if a while loop condition is initially False?',
    codeSnippet: `x = 10
while x < 5:
    print("Looping")
else:
    print("Else executed immediately")`,
    stdoutExpected: 'Else executed immediately',
    explanationTitle: 'Zero-Iteration Loops Still Trigger else',
    explanationText:
      'A loop `else` executes whenever the loop terminates because its condition is/became False. Since `x < 5` is False from the very beginning, the while loop body never runs, but because NO `break` occurred, the `else` block executes immediately.',
    complexityInfo: 'Major edge case tested on Python exams',
  },
  {
    id: 'pcep-s2-fc-095',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'Scope of break in Nested Loops',
    category: 'Loops & Iteration',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Does break terminate both inner and outer loops in nested iteration?',
    codeSnippet: `for i in range(2):
    for j in range(5):
        if j == 1:
            break
        print(f"({i},{j})", end=" ")`,
    stdoutExpected: '(0,0) (1,0) ',
    explanationTitle: 'break Affects Only the Innermost Loop',
    explanationText:
      'A `break` statement strictly terminates only the single, innermost loop that directly encloses it. The outer loop continues running normally. In iteration `i = 0`, the inner loop breaks at `j = 1`. Then the outer loop advances to `i = 1`, and the inner loop runs again.',
    complexityInfo: 'Core multi-loop control trace',
  },
  {
    id: 'pcep-s2-fc-096',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'Nested Loops with continue',
    category: 'Loops & Iteration',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the exact output of this nested loop with continue?',
    codeSnippet: `for i in [1, 2]:
    for j in [10, 20]:
        if i == 1 and j == 10:
            continue
        print(i + j, end=" ")`,
    stdoutExpected: '21 12 22 ',
    explanationTitle: 'Innermost Loop continue Scope',
    explanationText:
      '`continue` skips only the current iteration of the innermost loop. For `i=1, j=10`, `continue` triggers and skips printing. Then `i=1, j=20` prints `21`. Next, for outer loop `i=2`, both inner values run: `2+10=12` and `2+20=22`. The final output is `21 12 22 `.',
    complexityInfo: 'Detailed tracing of nested iterations and state updates',
  },
  {
    id: 'pcep-s2-fc-097',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'Loop Target Variable Retention in Scope',
    category: 'Loops & Iteration',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the value of variable i after the for loop finishes executing?',
    codeSnippet: `for i in range(5):
    pass
print("Final i:", i)`,
    stdoutExpected: 'Final i: 4',
    explanationTitle: 'Loop Variables Persist After Loop Termination',
    explanationText:
      'In Python, loop variables are NOT scoped to the loop block. After a `for` loop terminates normally, the loop variable retains the value of the last item yielded by the iterable. Since `range(5)` yields `0, 1, 2, 3, 4`, `i` remains in scope holding the value `4`.',
    complexityInfo: 'Python scoping rules vs other languages with block scope',
  },
  {
    id: 'pcep-s2-fc-098',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'Iterating Over Strings and Filtering Vowels',
    category: 'Loops & Iteration',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What output is produced by filtering non-vowel letters in a for loop?',
    codeSnippet: `word = "Python"
consonants = ""
for char in word:
    if char.lower() in "aeiou":
        continue
    consonants += char
print(consonants)`,
    stdoutExpected: 'Pythn',
    explanationTitle: 'Character-by-Character String Processing',
    explanationText:
      'A `for` loop iterates through a string one character at a time. When `char == "o"`, `char.lower() in "aeiou"` is True, triggering `continue` which skips appending `"o"`. The resulting string has `"o"` removed: `"Pythn"`.',
    complexityInfo: 'PCEP syllabus: combining loops, string membership, and continue',
  },
  {
    id: 'pcep-s2-fc-099',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'Accumulator Pattern in Loops',
    category: 'Loops & Iteration',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Trace the value of total calculated by this loop with range(1, 5):',
    codeSnippet: `total = 0
for k in range(1, 5):
    total += k
print("Total:", total)`,
    stdoutExpected: 'Total: 10',
    explanationTitle: 'Loop Accumulator Pattern',
    explanationText:
      'The loop iterates through `k = 1, 2, 3, 4`. Total increments at each step:\n1. `total = 0 + 1 = 1`\n2. `total = 1 + 2 = 3`\n3. `total = 3 + 3 = 6`\n4. `total = 6 + 4 = 10`. Final total is 10.',
    complexityInfo: 'Fundamental algorithm accumulator pattern',
  },
  {
    id: 'pcep-s2-fc-100',
    track: 'pcep',
    cardType: 'PCEP 2.5 • Loops & Control',
    topic: 'Nested Loop Multiplication Table Trace',
    category: 'Loops & Iteration',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the sum of all values printed by this 2x2 nested loop?',
    codeSnippet: `sum_val = 0
for a in range(1, 3):       # a = 1, 2
    for b in range(1, 3):   # b = 1, 2
        sum_val += a * b
print(sum_val)`,
    stdoutExpected: '9',
    explanationTitle: 'Nested Loop Product Summation',
    explanationText:
      'The nested loop produces 4 pairs of `(a, b)`:\n- `a=1, b=1`: `1 * 1 = 1`\n- `a=1, b=2`: `1 * 2 = 2`\n- `a=2, b=1`: `2 * 1 = 2`\n- `a=2, b=2`: `2 * 2 = 4`\nTotal sum = `1 + 2 + 2 + 4 = 9`.',
    complexityInfo: 'Multi-variable iteration tracing on PCEP Section 2',
  },
];
