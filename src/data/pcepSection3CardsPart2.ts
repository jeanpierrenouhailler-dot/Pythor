import { Flashcard } from '../types';

/**
 * PCEP-30-0x SECTION 3: DATA COLLECTIONS – LISTS, TUPLES, DICTIONARIES (Part 2: Cards 36 to 70)
 * - Chapter 3.2 Completion: Sorting Options, sorted() vs sort(), reverse() & Membership (Cards 36-40)
 * - Chapter 3.3: Memory Model: Aliases, Copies, Mutability & Nested Lists / Matrices (Cards 41-60)
 * - Chapter 3.4 Start: Tuples: Immutability, Syntax & Sequence Operations (Cards 61-70)
 */
export const pcepSection3CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.2 COMPLETION: LIST METHODS (Cards 36 to 40)
  // =========================================================================
  {
    id: 'pcep-s3-fc-036',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'Descending In-Place Sort with sort(reverse=True)',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How do you sort a list in descending order using the sort() method?',
    codeSnippet: `scores = [50, 10, 90, 30]
scores.sort(reverse=True)
print(scores)`,
    stdoutExpected: '[90, 50, 30, 10]',
    explanationTitle: 'The reverse Parameter of sort()',
    explanationText:
      '`lst.sort(reverse=True)` sorts elements in place from highest to lowest. By default, `reverse=False` (ascending order). It returns `None`.',
    complexityInfo: 'Official PCEP syllabus: list method keyword parameters',
  },
  {
    id: 'pcep-s3-fc-037',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'TypeError on Sorting Heterogeneous Types',
    category: 'List Methods',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What exception is raised when sorting a list containing both strings and integers?',
    codeSnippet: `mixed = [1, "two", 3]
try:
    mixed.sort()
except TypeError as e:
    print("Caught TypeError")`,
    stdoutExpected: 'Caught TypeError',
    explanationTitle: 'Incomparable Types Raise TypeError in sort()',
    explanationText:
      'Python 3 does not support comparison (`<`) between numbers and strings (e.g. `1 < "two"`). Attempting to sort a heterogeneous list of incompatible types raises a `TypeError: \'<\' not supported between instances of \'str\' and \'int\'.',
    complexityInfo: 'Crucial Python 3 typing requirement tested on PCEP',
  },
  {
    id: 'pcep-s3-fc-038',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'Built-in sorted() vs List Method sort()',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What is the primary difference between sorted(lst) and lst.sort()?',
    codeSnippet: `nums = [3, 1, 4]
new_nums = sorted(nums)
print("nums:", nums)
print("new_nums:", new_nums)`,
    stdoutExpected: `nums: [3, 1, 4]
new_nums: [1, 3, 4]`,
    explanationTitle: 'sorted() Returns New List vs sort() In-Place',
    explanationText:
      '`sorted(iterable)` is a built-in function that leaves the original collection untouched and returns a brand-new sorted list. In contrast, `lst.sort()` is a list method that mutates `lst` in place and returns `None`.',
    complexityInfo: 'High-frequency PCEP exam distinction',
  },
  {
    id: 'pcep-s3-fc-039',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'The reverse() Method In-Place Reversal',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What does list.reverse() do, and what does it return?',
    codeSnippet: `letters = ['x', 'y', 'z']
ret = letters.reverse()
print(letters)
print(ret is None)`,
    stdoutExpected: `['z', 'y', 'x']
True`,
    explanationTitle: 'In-Place Reversal with reverse()',
    explanationText:
      '`lst.reverse()` reverses the elements of the list in place, modifying the original object. It returns `None`. To get a reversed list without mutating the original, use slicing `lst[::-1]`.',
    complexityInfo: 'List manipulation methods on PCEP',
  },
  {
    id: 'pcep-s3-fc-040',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'Membership Testing with in and not in',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How do in and not in evaluate membership within a list?',
    codeSnippet: `primes = [2, 3, 5, 7, 11]
print(5 in primes)
print(4 not in primes)
print(9 in primes)`,
    stdoutExpected: `True
True
False`,
    explanationTitle: 'Sequence Membership Testing',
    explanationText:
      'The `in` operator performs a linear scan over the list to check if an element is equal to the target value, returning `True` or `False`. The `not in` operator returns the inverse boolean result.',
    complexityInfo: 'Standard membership operators on Python collections',
  },

  // =========================================================================
  // CHAPTER 3.3: MEMORY MODELS: ALIASES, COPIES & NESTED LISTS (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pcep-s3-fc-041',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Reference Assignment Creates an Alias (b = a)',
    category: 'Memory & Mutability',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'Does writing b = a copy the list elements or copy the reference?',
    codeSnippet: `a = [1, 2, 3]
b = a
print(a is b)`,
    stdoutExpected: 'True',
    explanationTitle: 'Object Reference Binding',
    explanationText:
      'In Python, assignment (`b = a`) never duplicates container objects. It binds the name `b` to the exact same list instance in memory that `a` references. Hence, `a is b` evaluates to `True`.',
    complexityInfo: 'Foundational Python memory model concept',
  },
  {
    id: 'pcep-s3-fc-042',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Mutating an Aliased List',
    category: 'Memory & Mutability',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What is the output when a list modified via b is printed through a?',
    codeSnippet: `a = [10, 20]
b = a
b.append(30)
print(a)`,
    stdoutExpected: '[10, 20, 30]',
    explanationTitle: 'Shared Mutation Across Aliases',
    explanationText:
      'Because `a` and `b` point to the same list object in memory, mutating the list via `b.append(30)` alters the single underlying object. Printing `a` displays `[10, 20, 30]`.',
    complexityInfo: 'Core question pattern on PCEP: identifying shared mutation',
  },
  {
    id: 'pcep-s3-fc-043',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'The id() Function and the is Identity Operator',
    category: 'Memory & Mutability',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What is the relationship between id(x) == id(y) and x is y?',
    codeSnippet: `x = [1, 2]
y = [1, 2]
print(x == y)
print(x is y)
print(id(x) == id(y))`,
    stdoutExpected: `True
False
False`,
    explanationTitle: 'Equality (==) vs Identity (is / id())',
    explanationText:
      '`x == y` tests for structural value equivalence (both hold `[1, 2]`). `x is y` tests whether `x` and `y` are the same object in memory, which is strictly identical to `id(x) == id(y)`. Distinct list literals create separate objects.',
    complexityInfo: 'PCEP exam distinction between value equality and identity',
  },
  {
    id: 'pcep-s3-fc-044',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Creating a Shallow Copy with Slice Syntax [:]',
    category: 'Memory & Mutability',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'Does mutating a slice copy b = a[:] affect the original list a?',
    codeSnippet: `a = [1, 2, 3]
b = a[:]
b.append(4)
print("a:", a)
print("b:", b)`,
    stdoutExpected: `a: [1, 2, 3]
b: [1, 2, 3, 4]`,
    explanationTitle: 'Independent Shallow Copy with [:]',
    explanationText:
      '`a[:]` creates a new shallow copy of the list. `b` points to a distinct list in memory (`a is b` is False). Mutating `b` has zero impact on `a`.',
    complexityInfo: 'Standard technique to avoid unintended mutations',
  },
  {
    id: 'pcep-s3-fc-045',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Shallow Copying with the list() Constructor',
    category: 'Memory & Mutability',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How does b = list(a) behave compared to b = a[:]?',
    codeSnippet: `a = [10, 20]
b = list(a)
print(a == b)
print(a is b)`,
    stdoutExpected: `True
False`,
    explanationTitle: 'list() Copying Mechanism',
    explanationText:
      'Passing an existing list to the `list()` constructor constructs a new list containing the same elements. It is functionally identical to slice copying `a[:]`: equal in contents, but occupying separate memory locations.',
    complexityInfo: 'Alternative shallow copying syntax tested on PCEP',
  },
  {
    id: 'pcep-s3-fc-046',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'The list.copy() Method',
    category: 'Memory & Mutability',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does the list.copy() method return?',
    codeSnippet: `orig = ["alpha", "beta"]
dup = orig.copy()
dup.append("gamma")
print(orig)
print(dup)`,
    stdoutExpected: `['alpha', 'beta']
['alpha', 'beta', 'gamma']`,
    explanationTitle: 'Explicit list.copy() Method',
    explanationText:
      'The `.copy()` method on a list returns a shallow copy of the list (equivalent to `orig[:]`). Modifying `dup` does not modify `orig`.',
    complexityInfo: 'Modern explicit copy syntax in Python',
  },
  {
    id: 'pcep-s3-fc-047',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Variable Reassignment vs In-Place Mutation',
    category: 'Memory & Mutability',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What happens to b when a is reassigned to a new list?',
    codeSnippet: `a = [1, 2]
b = a
a = [3, 4]  # Reassignment, not in-place mutation
print("a:", a)
print("b:", b)`,
    stdoutExpected: `a: [3, 4]
b: [1, 2]`,
    explanationTitle: 'Reassignment Breaks Name Binding',
    explanationText:
      '`a = [3, 4]` binds the identifier `a` to a newly created list `[3, 4]`. The variable `b` continues to point to the original list `[1, 2]`. Reassignment does not mutate the old object.',
    complexityInfo: 'High-frequency exam trap: mutation vs reassignment',
  },
  {
    id: 'pcep-s3-fc-048',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Two-Dimensional (2D) Lists / Matrices',
    category: 'Nested Lists & Matrices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How is a 2D matrix represented using nested lists in Python?',
    codeSnippet: `matrix = [
    [1, 2, 3],
    [4, 5, 6]
]
print(len(matrix))
print(len(matrix[0]))`,
    stdoutExpected: `2
3`,
    explanationTitle: 'Nested Lists Representation',
    explanationText:
      'In Python, multidimensional arrays are represented as lists of lists. `matrix` has 2 elements (2 rows), and each row has 3 elements (3 columns).',
    complexityInfo: 'Official PCEP syllabus: multidimensional collections',
  },
  {
    id: 'pcep-s3-fc-049',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Indexing Elements in a 2D List [row][col]',
    category: 'Nested Lists & Matrices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What syntax accesses row 1, column 2 of a 2D list?',
    codeSnippet: `grid = [
    [10, 20, 30],
    [40, 50, 60]
]
val = grid[1][2]
print(val)`,
    stdoutExpected: '60',
    explanationTitle: 'Chained Double Indexing',
    explanationText:
      '`grid[1]` accesses row index 1 (the second row: `[40, 50, 60]`). The second bracket `[2]` accesses column index 2 (the third element: `60`).',
    complexityInfo: 'Standard 2D array coordinate access',
  },
  {
    id: 'pcep-s3-fc-050',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Mutating an Element in a 2D Matrix',
    category: 'Nested Lists & Matrices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What is the output after assigning grid[0][1] = 99?',
    codeSnippet: `grid = [
    [1, 2],
    [3, 4]
]
grid[0][1] = 99
print(grid)`,
    stdoutExpected: '[[1, 99], [3, 4]]',
    explanationTitle: 'Nested List In-Place Mutation',
    explanationText:
      '`grid[0][1] = 99` mutates the second element of the first row list in place. The outer list container and the other row sublists remain unaffected.',
    complexityInfo: 'Nested list mutation mechanics on PCEP',
  },
  {
    id: 'pcep-s3-fc-051',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Shallow Copying Nested Lists (Inner Sublist Sharing)',
    category: 'Nested Lists & Matrices',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'Why does mutating b[0][0] also change a[0][0] when b = a[:]?',
    codeSnippet: `a = [[1, 2], [3, 4]]
b = a[:]
b[0][0] = 99
print(a)`,
    stdoutExpected: '[[99, 2], [3, 4]]',
    explanationTitle: 'Shallow Copy Shares Inner References',
    explanationText:
      'A shallow copy (`a[:]` or `a.copy()`) copies only the outer list. The elements inside are object references. Both `a[0]` and `b[0]` refer to the exact same inner list in memory. Mutating the inner list affects both.',
    complexityInfo: 'PCEP advanced memory model question on nested collections',
  },
  {
    id: 'pcep-s3-fc-052',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'The Matrix Multiplication Trap [[0] * 3] * 3',
    category: 'Nested Lists & Matrices',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What happens when you mutate one cell in a matrix created with [[0] * 3] * 3?',
    codeSnippet: `matrix = [[0] * 3] * 3
matrix[0][0] = 1
print(matrix)`,
    stdoutExpected: '[[1, 0, 0], [1, 0, 0], [1, 0, 0]]',
    explanationTitle: 'List Repetition Duplicates the Same Inner Reference',
    explanationText:
      '`[inner] * 3` does not create 3 independent lists; it creates an outer list containing 3 references to the EXACT SAME inner list object. Modifying `matrix[0][0]` changes column 0 for all rows!',
    complexityInfo: 'Legendary Python exam trap tested on PCEP and PCAP',
  },
  {
    id: 'pcep-s3-fc-053',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Proper Matrix Initialization with List Comprehension',
    category: 'Nested Lists & Matrices',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How do you correctly initialize a 3x3 zero matrix with independent rows?',
    codeSnippet: `matrix = [[0 for _ in range(3)] for _ in range(3)]
matrix[0][0] = 1
print(matrix)`,
    stdoutExpected: '[[1, 0, 0], [0, 0, 0], [0, 0, 0]]',
    explanationTitle: 'Independent Row Construction',
    explanationText:
      'Using a nested comprehension or loop evaluates `[0 for _ in range(3)]` three separate times, creating three distinct list objects in memory. Mutating `matrix[0][0]` alters only the first row.',
    complexityInfo: 'Idiomatic matrix creation in Python',
  },
  {
    id: 'pcep-s3-fc-054',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Iterating Through a 2D List with Nested Loops',
    category: 'Nested Lists & Matrices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does this nested loop print for a 2x2 matrix?',
    codeSnippet: `matrix = [[1, 2], [3, 4]]
for row in matrix:
    for val in row:
        print(val, end=" ")`,
    stdoutExpected: '1 2 3 4 ',
    explanationTitle: 'Nested Sequence Traversal',
    explanationText:
      'The outer loop iterates through each row list (`[1, 2]`, then `[3, 4]`). The inner loop iterates through the integer values within each row, printing `1 2 3 4 ` sequentially.',
    complexityInfo: 'Combining loops with multidimensional data structures',
  },
  {
    id: 'pcep-s3-fc-055',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Passing Lists to Functions (Pass-by-Assignment)',
    category: 'Memory & Mutability',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'Is a list modified in place inside a function visible to the caller?',
    codeSnippet: `def add_item(lst):
    lst.append(99)

my_list = [1, 2]
add_item(my_list)
print(my_list)`,
    stdoutExpected: '[1, 2, 99]',
    explanationTitle: 'In-Place Parameter Mutation',
    explanationText:
      'Python passes arguments by assignment (object reference). The parameter `lst` references the exact same list as `my_list`. Mutating methods like `append()` alter the caller’s original list.',
    complexityInfo: 'Core question connecting PCEP Section 3 and Section 4',
  },
  {
    id: 'pcep-s3-fc-056',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Function Parameter Reassignment Inside a Function',
    category: 'Memory & Mutability',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'Does reassigning parameter lst inside a function modify the caller list?',
    codeSnippet: `def reset_list(lst):
    lst = [0, 0]  # Rebinds local variable lst

my_list = [1, 2]
reset_list(my_list)
print(my_list)`,
    stdoutExpected: '[1, 2]',
    explanationTitle: 'Local Parameter Rebinding',
    explanationText:
      'Reassigning `lst = [0, 0]` merely rebinds the local parameter name to a new list object within the function scope. The caller’s `my_list` variable still references `[1, 2]`.',
    complexityInfo: 'Crucial distinction between mutating an object and rebinding a name',
  },
  {
    id: 'pcep-s3-fc-057',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Length of a 2D List with len()',
    category: 'Nested Lists & Matrices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'What does len(matrix) return for a 3x5 matrix?',
    codeSnippet: `matrix = [[0] * 5 for _ in range(3)]
print(len(matrix))`,
    stdoutExpected: '3',
    explanationTitle: 'len() Counts Top-Level Elements Only',
    explanationText:
      '`len(matrix)` counts the number of elements in the outermost list, which corresponds to the number of rows (3). To get the number of columns in row 0, use `len(matrix[0])` (5).',
    complexityInfo: 'Standard 2D array dimension inspection',
  },
  {
    id: 'pcep-s3-fc-058',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Jagged / Ragged Nested Lists',
    category: 'Nested Lists & Matrices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'Can nested sublists in Python have different lengths?',
    codeSnippet: `ragged = [
    [1],
    [2, 3],
    [4, 5, 6]
]
print(len(ragged[0]), len(ragged[2]))`,
    stdoutExpected: '1 3',
    explanationTitle: 'Ragged Arrays Supported Natively',
    explanationText:
      'Unlike some languages with rigid rectangular multidimensional array constraints, Python lists can contain sublists of arbitrary and differing lengths (ragged arrays).',
    complexityInfo: 'Python dynamic container flexibility',
  },
  {
    id: 'pcep-s3-fc-059',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Sequence Unpacking with Lists',
    category: 'Memory & Mutability',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How does list unpacking assign elements to variables?',
    codeSnippet: `coords = [10, 20]
x, y = coords
print(f"x={x}, y={y}")`,
    stdoutExpected: 'x=10, y=20',
    explanationTitle: 'Sequence Unpacking Assignment',
    explanationText:
      'When assigning a list to a comma-separated list of variables, Python unpacks the elements in order. The number of variables on the left must exactly equal the number of elements in the list.',
    complexityInfo: 'Sequence unpacking rules tested in PCEP',
  },
  {
    id: 'pcep-s3-fc-060',
    track: 'pcep',
    cardType: 'PCEP 3.3 • Memory Model & Aliases',
    topic: 'Lexicographical List Comparison',
    category: 'Memory & Mutability',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.3',
    section: 'Section 3',
    question: 'How does Python evaluate [1, 2, 5] < [1, 3, 0]?',
    codeSnippet: `print([1, 2, 5] < [1, 3, 0])
print([1, 2] < [1, 2, 0])`,
    stdoutExpected: `True
True`,
    explanationTitle: 'Element-by-Element List Comparison',
    explanationText:
      'Python compares lists lexicographically: it compares elements at index 0 first. Because `1 == 1`, it compares index 1 (`2 < 3`), which is `True`, so evaluation immediately terminates. If all shared elements are equal, the shorter list is considered smaller.',
    complexityInfo: 'Subtle comparison semantics on PCEP',
  },

  // =========================================================================
  // CHAPTER 3.4 START: TUPLES – IMMUTABILITY & SYNTAX (Cards 61 to 70)
  // =========================================================================
  {
    id: 'pcep-s3-fc-061',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'Tuple Definition and Parentheses Syntax',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What is a tuple in Python, and how is it written?',
    codeSnippet: `tup = (1, 2, 3)
print(type(tup).__name__)
print(tup[0])`,
    stdoutExpected: `tuple
1`,
    explanationTitle: 'Tuple Definition & Ordered Nature',
    explanationText:
      'A tuple is an ordered, immutable sequence of elements. Tuples are written with round parentheses `(val1, val2, ...)` and support positive and negative zero-based indexing.',
    complexityInfo: 'Official PCEP syllabus: tuple fundamentals',
  },
  {
    id: 'pcep-s3-fc-062',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'Creating an Empty Tuple',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do you create an empty tuple in Python?',
    codeSnippet: `empty1 = ()
empty2 = tuple()
print(empty1 == empty2)
print(len(empty1))`,
    stdoutExpected: `True
0`,
    explanationTitle: 'Empty Tuple Syntax',
    explanationText:
      'An empty tuple can be created using empty parentheses `()` or the constructor `tuple()`. Both produce a tuple of length 0.',
    complexityInfo: 'Tuple initialization syntax',
  },
  {
    id: 'pcep-s3-fc-063',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'The Single-Element Tuple Trailing Comma (x,)',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What is the type of a = (42) versus b = (42,)?',
    codeSnippet: `a = (42)
b = (42,)
print(type(a).__name__)
print(type(b).__name__)`,
    stdoutExpected: `int
tuple`,
    explanationTitle: 'Mandatory Trailing Comma for 1-Tuples',
    explanationText:
      'In Python, parentheses around a single expression without a comma `(42)` are treated as mathematical grouping parentheses, leaving the expression an `int`. A trailing comma `(42,)` is MANDATORY to define a single-element tuple.',
    complexityInfo: 'Top 3 most famous PCEP exam trick questions',
  },
  {
    id: 'pcep-s3-fc-064',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'Tuple Packing Without Parentheses',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'Is t = 1, 2, 3 a valid tuple in Python?',
    codeSnippet: `t = 10, 20, 30
print(type(t).__name__)
print(t)`,
    stdoutExpected: `tuple
(10, 20, 30)`,
    explanationTitle: 'Implicit Tuple Packing',
    explanationText:
      'Comma-separated values without enclosing brackets or braces default to creating a tuple. This is called tuple packing. Parentheses are only mandatory for empty tuples `()` or when resolving syntactic ambiguity.',
    complexityInfo: 'Syntax flexibility in tuple creation',
  },
  {
    id: 'pcep-s3-fc-065',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'Tuple Immutability and TypeError on Item Assignment',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What exception is raised when executing tup[0] = 99 on a tuple?',
    codeSnippet: `tup = (1, 2, 3)
try:
    tup[0] = 99
except TypeError as e:
    print("Caught TypeError")`,
    stdoutExpected: 'Caught TypeError',
    explanationTitle: 'Tuples Do Not Support Item Assignment',
    explanationText:
      'Tuples are immutable. Once created, their elements cannot be changed, added, or removed. Attempting to assign `tup[0] = 99` raises `TypeError: \'tuple\' object does not support item assignment`.',
    complexityInfo: 'Core immutability property tested on PCEP',
  },
  {
    id: 'pcep-s3-fc-066',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'The del Statement on Tuple Elements',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What happens when attempting del tup[0] on a tuple?',
    codeSnippet: `tup = (10, 20)
try:
    del tup[0]
except TypeError as e:
    print("Caught TypeError")`,
    stdoutExpected: 'Caught TypeError',
    explanationTitle: 'Tuples Do Not Support Item Deletion',
    explanationText:
      'Because tuples are immutable, `del tup[0]` raises `TypeError: \'tuple\' object doesn\'t support item deletion`. You can delete the entire tuple variable using `del tup`, but not individual elements.',
    complexityInfo: 'Immutability constraints on keyword operations',
  },
  {
    id: 'pcep-s3-fc-067',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'Tuple Positive and Negative Indexing',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do positive and negative indices work on tuples?',
    codeSnippet: `t = ("alpha", "beta", "gamma", "delta")
print(t[1])
print(t[-1])`,
    stdoutExpected: `beta
delta`,
    explanationTitle: 'Tuple Indexing Mechanics',
    explanationText:
      'Tuples follow identical sequence indexing rules as lists: zero-based positive indexing (`t[1]` is "beta") and negative indexing from the end (`t[-1]` is "delta").',
    complexityInfo: 'Sequence indexing consistency across Python types',
  },
  {
    id: 'pcep-s3-fc-068',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'Tuple Slicing Returns a New Tuple',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What is returned by slicing a tuple, and does it modify the original?',
    codeSnippet: `numbers = (0, 1, 2, 3, 4, 5)
sub = numbers[1:4]
print(sub)
print(type(sub).__name__)`,
    stdoutExpected: `(1, 2, 3)
tuple`,
    explanationTitle: 'Tuple Slicing Returns a Tuple',
    explanationText:
      'Slicing a tuple `t[start:stop:step]` returns a brand new tuple containing the sliced elements. The original tuple remains completely untouched.',
    complexityInfo: 'Standard sequence slicing on immutable objects',
  },
  {
    id: 'pcep-s3-fc-069',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'Tuple Concatenation with + Operator',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What does the + operator produce when used between two tuples?',
    codeSnippet: `t1 = (1, 2)
t2 = (3, 4)
t3 = t1 + t2
print(t3)`,
    stdoutExpected: '(1, 2, 3, 4)',
    explanationTitle: 'Tuple Concatenation Creates a New Tuple',
    explanationText:
      'The `+` operator concatenates two tuples into a new third tuple containing elements from both. Operands must both be tuples; attempting `(1, 2) + [3, 4]` raises a `TypeError`.',
    complexityInfo: 'PCEP sequence concatenation rules',
  },
  {
    id: 'pcep-s3-fc-070',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'Tuple Repetition with * Operator',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What is the output of ("py",) * 3?',
    codeSnippet: `t = ("py",) * 3
print(t)
print(len(t))`,
    stdoutExpected: `('py', 'py', 'py')
3`,
    explanationTitle: 'Tuple Repetition Operator',
    explanationText:
      'Multiplying a tuple by an integer `n` repeats the elements `n` times to create a new tuple. If `n <= 0`, an empty tuple `()` is produced.',
    complexityInfo: 'Sequence repetition on tuple types',
  },
];
