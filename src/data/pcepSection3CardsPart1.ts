import { Flashcard } from '../types';

/**
 * PCEP-30-0x SECTION 3: DATA COLLECTIONS – LISTS, TUPLES, DICTIONARIES (Part 1: Cards 1 to 35)
 * - Chapter 3.1: Lists: Indexing, Negative Indices, Slicing [start:stop:step], Operations (Cards 1-20)
 * - Chapter 3.2: List Methods & Mutations (Part A: Cards 21-35)
 */
export const pcepSection3CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.1: LISTS – INDEXING, SLICING & BASIC OPERATIONS (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pcep-s3-fc-001',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'List Literal Definition & Empty List',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How is an empty list created in Python, and what type does it have?',
    codeSnippet: `lst1 = []
lst2 = list()
print(lst1 == lst2)
print(type(lst1).__name__)`,
    stdoutExpected: `True
list`,
    explanationTitle: 'List Literals and Constructors',
    explanationText:
      'In Python, a list is an ordered, mutable collection. An empty list can be instantiated using square brackets `[]` or the built-in `list()` constructor. Both forms produce equivalent empty lists of type `list`.',
    complexityInfo: 'Official PCEP syllabus: list data collection fundamentals',
  },
  {
    id: 'pcep-s3-fc-002',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'Zero-Based Positive Indexing',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What index accesses the first element of a Python list?',
    codeSnippet: `colors = ["red", "green", "blue"]
first = colors[0]
print(first)`,
    stdoutExpected: 'red',
    explanationTitle: 'Zero-Based Indexing',
    explanationText:
      'Python sequences (lists, tuples, strings) use zero-based indexing. The first element is always at index 0, the second at index 1, and the n-th element at index n - 1.',
    complexityInfo: 'Fundamental sequence indexing rule in Python',
  },
  {
    id: 'pcep-s3-fc-003',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'Negative Indexing for Tail Access',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What does an index of -1 return when applied to a list?',
    codeSnippet: `numbers = [10, 20, 30, 40]
print(numbers[-1])
print(numbers[-2])`,
    stdoutExpected: `40
30`,
    explanationTitle: 'Negative Indexing Semantics',
    explanationText:
      'Negative indices count backwards from the end of the sequence. Index `-1` refers to the last element, `-2` refers to the penultimate element, and `-len(lst)` refers to the first element.',
    complexityInfo: 'High-frequency PCEP exam question pattern',
  },
  {
    id: 'pcep-s3-fc-004',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'IndexError on Out-of-Range Indexing',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What exception is raised when accessing an index equal to len(lst)?',
    codeSnippet: `lst = [1, 2, 3]
# len(lst) is 3, valid indices are 0, 1, 2
try:
    print(lst[3])
except IndexError as e:
    print("IndexError")`,
    stdoutExpected: 'IndexError',
    explanationTitle: 'IndexError Boundary Rules',
    explanationText:
      'For a list of length N, valid positive indices are 0 through N - 1. Attempting to directly index `lst[N]` or beyond raises an `IndexError: list index out of range`.',
    complexityInfo: 'Crucial exception boundary on the PCEP exam',
  },
  {
    id: 'pcep-s3-fc-005',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'The len() Function on Lists',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What does the len() function return when passed a list?',
    codeSnippet: `items = [10, "apple", True, 3.14]
print(len(items))`,
    stdoutExpected: '4',
    explanationTitle: 'Sequence Length Determination',
    explanationText:
      'The built-in `len()` function returns the number of elements contained in the list. Python lists can hold heterogeneous items (integers, strings, booleans, floats, or nested collections).',
    complexityInfo: 'Core built-in function tested in PCEP Section 3',
  },
  {
    id: 'pcep-s3-fc-006',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'Basic Slice [start:stop] Exclusion Rule',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'In a slice lst[1:3], is index 3 included in the returned slice?',
    codeSnippet: `vals = [10, 20, 30, 40, 50]
sub = vals[1:3]
print(sub)`,
    stdoutExpected: '[20, 30]',
    explanationTitle: 'Slice Stop Boundary is Exclusive',
    explanationText:
      'In Python slice syntax `lst[start:stop]`, the `start` index is inclusive, but the `stop` index is strictly exclusive. `vals[1:3]` extracts elements at index 1 (20) and index 2 (30). Index 3 (40) is not included.',
    complexityInfo: 'Fundamental slicing rule tested extensively on PCEP',
  },
  {
    id: 'pcep-s3-fc-007',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'Slice with Omitted Start Index [:stop]',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the default start index when start is omitted in a slice with positive step?',
    codeSnippet: `data = ["a", "b", "c", "d"]
print(data[:2])`,
    stdoutExpected: "['a', 'b']",
    explanationTitle: 'Default Start Index in Slicing',
    explanationText:
      'When the `start` parameter is omitted (e.g. `[:stop]`) with a positive step, Python defaults `start` to 0 (the beginning of the sequence). Thus, `data[:2]` extracts elements at index 0 and index 1.',
    complexityInfo: 'Default slicing boundaries behavior',
  },
  {
    id: 'pcep-s3-fc-008',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'Slice with Omitted Stop Index [start:]',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is extracted when the stop index is omitted in a slice?',
    codeSnippet: `nums = [1, 2, 3, 4, 5]
print(nums[2:])`,
    stdoutExpected: '[3, 4, 5]',
    explanationTitle: 'Default Stop Index in Slicing',
    explanationText:
      'When the `stop` parameter is omitted (e.g. `[start:]`), Python defaults `stop` to the length of the list, slicing up to and including the very last element.',
    complexityInfo: 'Standard slice boundary defaults',
  },
  {
    id: 'pcep-s3-fc-009',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'Full Slice [:] Shallow Copy',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What does the slice [:] without start or stop produce?',
    codeSnippet: `original = [1, 2, 3]
copy_lst = original[:]
print(copy_lst)
print(copy_lst == original)
print(copy_lst is original)`,
    stdoutExpected: `[1, 2, 3]
True
False`,
    explanationTitle: 'Full Slice Shallow Copy',
    explanationText:
      '`original[:]` extracts all elements from beginning to end, returning a new distinct shallow copy of the list. They have equal values (`copy_lst == original` is True), but reside at different memory addresses (`copy_lst is original` is False).',
    complexityInfo: 'PCEP key concept: value equality vs object identity',
  },
  {
    id: 'pcep-s3-fc-010',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'The Step Parameter in Slices [start:stop:step]',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What elements are extracted by [::2] across a list?',
    codeSnippet: `letters = ['a', 'b', 'c', 'd', 'e', 'f']
print(letters[::2])`,
    stdoutExpected: "['a', 'c', 'e']",
    explanationTitle: 'Slicing Step Stride',
    explanationText:
      'The third parameter in `[start:stop:step]` dictates the stride. A step of 2 picks every second element starting at index 0 (indices 0, 2, 4, etc.).',
    complexityInfo: 'Step stride mechanics tested in PCEP',
  },
  {
    id: 'pcep-s3-fc-011',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'List Reversal with Step -1 [::-1]',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the output of reversing a list with [::-1]?',
    codeSnippet: `arr = [10, 20, 30, 40]
rev = arr[::-1]
print(rev)`,
    stdoutExpected: '[40, 30, 20, 10]',
    explanationTitle: 'Reverse Slicing Idiom',
    explanationText:
      'When the step is negative (-1) and start/stop are omitted, Python sets start to `-1` (end of list) and steps backward to the beginning, creating a new reversed copy of the list without modifying the original.',
    complexityInfo: 'Standard Python idiom on certification exams',
  },
  {
    id: 'pcep-s3-fc-012',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'Negative Step with Explicit Boundaries [4:1:-1]',
    category: 'Lists & Slices',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What does lst[4:1:-1] output for [0, 10, 20, 30, 40, 50]?',
    codeSnippet: `nums = [0, 10, 20, 30, 40, 50]
result = nums[4:1:-1]
print(result)`,
    stdoutExpected: '[40, 30, 20]',
    explanationTitle: 'Reverse Slicing with Boundaries',
    explanationText:
      'With a negative step, slicing moves from higher indices down toward lower indices. `nums[4:1:-1]` starts at index 4 (40), moves down to index 3 (30) and index 2 (20), stopping before index 1 (exclusive stop).',
    complexityInfo: 'Tricky slice index computation on PCEP',
  },
  {
    id: 'pcep-s3-fc-013',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'Out-of-Bounds Slicing Safety',
    category: 'Lists & Slices',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'Does slicing beyond list boundaries raise an IndexError?',
    codeSnippet: `lst = [1, 2, 3]
print(lst[1:100])
print(lst[50:100])`,
    stdoutExpected: `[2, 3]
[]`,
    explanationTitle: 'Graceful Slicing Clamping',
    explanationText:
      'Unlike direct indexing `lst[100]` which raises `IndexError`, slicing never raises an error for out-of-bounds indices. Python automatically clamps indices to `len(lst)`. Slicing entirely past the list length returns an empty list `[]`.',
    complexityInfo: 'Key distinction: indexing vs slicing error handling',
  },
  {
    id: 'pcep-s3-fc-014',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'List Concatenation with + Operator',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What does the binary + operator do when used between two lists?',
    codeSnippet: `a = [1, 2]
b = [3, 4]
c = a + b
print(c)
print(a)
print(b)`,
    stdoutExpected: `[1, 2, 3, 4]
[1, 2]
[3, 4]`,
    explanationTitle: 'List Concatenation',
    explanationText:
      'The `+` operator concatenates two lists, creating and returning a NEW list containing all elements from both operands in order. Both original lists remain unaltered.',
    complexityInfo: 'PCEP syllabus: sequence concatenation operators',
  },
  {
    id: 'pcep-s3-fc-015',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'List Repetition with * Operator',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What does multiplying a list by an integer n produce?',
    codeSnippet: `zeros = [0] * 4
pattern = [1, 2] * 3
print(zeros)
print(pattern)`,
    stdoutExpected: `[0, 0, 0, 0]
[1, 2, 1, 2, 1, 2]`,
    explanationTitle: 'List Repetition Operator',
    explanationText:
      'Multiplying a list by integer `n` repeats the sequence `n` times to construct a new list. Multiplying by `n <= 0` results in an empty list `[]`.',
    complexityInfo: 'Fundamental sequence repetition on PCEP',
  },
  {
    id: 'pcep-s3-fc-016',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'Augmented Assignment += on Lists',
    category: 'Lists & Slices',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'Does lst += [x] mutate the existing list in place?',
    codeSnippet: `a = [1, 2]
b = a
a += [3, 4]
print(a)
print(b)
print(a is b)`,
    stdoutExpected: `[1, 2, 3, 4]
[1, 2, 3, 4]
True`,
    explanationTitle: 'In-Place List Extension with +=',
    explanationText:
      'For lists, `+=` calls `extend()` internally and mutates the list IN PLACE. Because `b` references the same list object in memory, `b` also observes the changes and `a is b` remains `True`.',
    complexityInfo: 'Subtle PCEP memory mutability question',
  },
  {
    id: 'pcep-s3-fc-017',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'Built-in min() and max() on Lists',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How do min() and max() evaluate lists of numbers?',
    codeSnippet: `scores = [88, 42, 99, 73, 42]
print(min(scores))
print(max(scores))`,
    stdoutExpected: `42
99`,
    explanationTitle: 'Extreme Values Identification',
    explanationText:
      '`min()` returns the smallest element in an iterable, and `max()` returns the largest. All elements must be mutually comparable; passing a list with incompatible types (like `[1, "two"]`) raises a `TypeError`.',
    complexityInfo: 'Standard built-in function usage on collections',
  },
  {
    id: 'pcep-s3-fc-018',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'Built-in sum() with Optional Start Value',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What is the result of sum([1, 2, 3], 10)?',
    codeSnippet: `nums = [1, 2, 3]
print(sum(nums))
print(sum(nums, 10))`,
    stdoutExpected: `6
16`,
    explanationTitle: 'The sum() Function with Start Parameter',
    explanationText:
      '`sum(iterable, start=0)` sums all numbers in the iterable, adding them to `start`. When `start=10`, it evaluates `10 + 1 + 2 + 3 = 16`. The start parameter cannot be a string.',
    complexityInfo: 'High-yield built-in function detail for PCEP',
  },
  {
    id: 'pcep-s3-fc-019',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'Element Reassignment via Index (Mutability)',
    category: 'Lists & Slices',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'How does indexing assignment demonstrate list mutability?',
    codeSnippet: `fruits = ["apple", "banana", "cherry"]
fruits[1] = "blueberry"
print(fruits)`,
    stdoutExpected: "['apple', 'blueberry', 'cherry']",
    explanationTitle: 'In-Place Element Reassignment',
    explanationText:
      'Lists are mutable sequences. Assigning to an existing valid index replaces the element at that position in place without changing the identity or memory address of the list.',
    complexityInfo: 'Core mutability concept in Python collections',
  },
  {
    id: 'pcep-s3-fc-020',
    track: 'pcep',
    cardType: 'PCEP 3.1 • Lists & Slicing',
    topic: 'Slice Assignment and List Resizing',
    category: 'Lists & Slices',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.1',
    section: 'Section 3',
    question: 'What happens when assigning an iterable to a slice lst[1:3]?',
    codeSnippet: `nums = [1, 2, 3, 4]
nums[1:3] = [20, 30, 40]
print(nums)`,
    stdoutExpected: '[1, 20, 30, 40, 4]',
    explanationTitle: 'Slice Replacement & Dynamic Resizing',
    explanationText:
      'Assigning to a slice replaces the specified range (indices 1 and 2, which held `2` and `3`) with the elements from the assigned iterable. The length of the assigned iterable does not need to match the slice length, dynamically expanding or contracting the list.',
    complexityInfo: 'Advanced slice manipulation tested on PCEP',
  },

  // =========================================================================
  // CHAPTER 3.2: LIST METHODS & OPERATIONS (Part A: Cards 21 to 35)
  // =========================================================================
  {
    id: 'pcep-s3-fc-021',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'The append() Method & Return Value',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What does list.append(x) return, and where is x added?',
    codeSnippet: `lst = [1, 2]
ret = lst.append(3)
print(lst)
print(ret is None)`,
    stdoutExpected: `[1, 2, 3]
True`,
    explanationTitle: 'append() Adds to End and Returns None',
    explanationText:
      '`lst.append(x)` modifies the list in place by appending `x` as the single new last element. Like most in-place mutating list methods, it returns `None`.',
    complexityInfo: 'PCEP classic trap: assigning lst = lst.append(x) results in None',
  },
  {
    id: 'pcep-s3-fc-022',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'The insert() Method Parameters',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What are the two arguments to list.insert(), and what is their order?',
    codeSnippet: `letters = ['a', 'c', 'd']
letters.insert(1, 'b')
print(letters)`,
    stdoutExpected: "['a', 'b', 'c', 'd']",
    explanationTitle: 'insert(index, element) Signature',
    explanationText:
      '`lst.insert(index, object)` inserts the element before the given `index`. Existing elements from that index onward are shifted right by one position. The method returns `None`.',
    complexityInfo: 'Signature memorization: index first, then value',
  },
  {
    id: 'pcep-s3-fc-023',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'Out-of-Bounds insert() Index Behavior',
    category: 'List Methods',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What happens when insert() is called with an index greater than the list length?',
    codeSnippet: `nums = [1, 2]
nums.insert(999, 3)
nums.insert(-999, 0)
print(nums)`,
    stdoutExpected: '[0, 1, 2, 3]',
    explanationTitle: 'insert() Never Raises IndexError',
    explanationText:
      'Unlike direct index assignment `nums[999] = 3`, `insert()` safely handles out-of-range indices. An index greater than `len(lst)` appends the element to the end; a negative index beyond `-len(lst)` prepends to index 0.',
    complexityInfo: 'Subtle PCEP boundary behavior question',
  },
  {
    id: 'pcep-s3-fc-024',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'The pop() Method Without Arguments',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'Which element is removed and returned by pop() when called with no arguments?',
    codeSnippet: `stack = [10, 20, 30]
val = stack.pop()
print(val)
print(stack)`,
    stdoutExpected: `30
[10, 20]`,
    explanationTitle: 'pop() Default Last-Element Behavior',
    explanationText:
      '`lst.pop()` removes and returns the last element of the list (`index=-1`). It mutates the list and provides LIFO (stack) behavior.',
    complexityInfo: 'Core list method on the PCEP exam',
  },
  {
    id: 'pcep-s3-fc-025',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'The pop(index) Method with Specific Position',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What does list.pop(index) do when an index is specified?',
    codeSnippet: `queue = ["first", "second", "third"]
item = queue.pop(0)
print(item)
print(queue)`,
    stdoutExpected: `first
['second', 'third']`,
    explanationTitle: 'pop(index) Position Removal',
    explanationText:
      '`lst.pop(i)` removes and returns the element at index `i`. Subsequent elements are shifted left by one position. If `i` is out of range, it raises an `IndexError`.',
    complexityInfo: 'List FIFO simulation and index removal',
  },
  {
    id: 'pcep-s3-fc-026',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'pop() on an Empty List Exception',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What exception is raised when pop() is called on an empty list?',
    codeSnippet: `empty = []
try:
    empty.pop()
except IndexError as e:
    print("Caught IndexError")`,
    stdoutExpected: 'Caught IndexError',
    explanationTitle: 'Empty List pop() Raises IndexError',
    explanationText:
      'Attempting to pop from an empty list raises `IndexError: pop from empty list`. It does NOT return `None`.',
    complexityInfo: 'Essential PCEP exception handling pattern',
  },
  {
    id: 'pcep-s3-fc-027',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'The remove(value) Method Semantics',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How many occurrences does remove(value) delete from a list?',
    codeSnippet: `items = [1, 2, 3, 2, 4]
items.remove(2)
print(items)`,
    stdoutExpected: '[1, 3, 2, 4]',
    explanationTitle: 'remove() Deletes First Occurrence Only',
    explanationText:
      '`lst.remove(x)` searches for the value `x` and removes ONLY the FIRST occurrence encountered. It does not remove all duplicates, and it returns `None`.',
    complexityInfo: 'Frequent PCEP exam question on list manipulation',
  },
  {
    id: 'pcep-s3-fc-028',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'remove(value) ValueError on Missing Item',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What exception is raised when calling remove() with a value not in the list?',
    codeSnippet: `nums = [10, 20, 30]
try:
    nums.remove(99)
except ValueError as e:
    print("Caught ValueError")`,
    stdoutExpected: 'Caught ValueError',
    explanationTitle: 'Missing Item in remove() Raises ValueError',
    explanationText:
      'If the specified value is not found in the list, `lst.remove(x)` raises a `ValueError: list.remove(x): x not in list`. Notice it is a `ValueError`, NOT an `IndexError`.',
    complexityInfo: 'Distinction between IndexError and ValueError on PCEP',
  },
  {
    id: 'pcep-s3-fc-029',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'The del Statement for Element Removal',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'How does del lst[index] differ from lst.pop(index)?',
    codeSnippet: `colors = ["red", "green", "blue", "yellow"]
del colors[1]
print(colors)`,
    stdoutExpected: "['red', 'blue', 'yellow']",
    explanationTitle: 'del Statement by Index',
    explanationText:
      '`del lst[i]` is a Python statement that deletes the item at index `i` directly. Unlike `pop()`, `del` is a keyword statement (not a method) and does not return the deleted value.',
    complexityInfo: 'PCEP syllabus: del keyword vs list methods',
  },
  {
    id: 'pcep-s3-fc-030',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'The del Statement on a Slice',
    category: 'List Methods',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What is the effect of del lst[start:stop] on a list?',
    codeSnippet: `nums = [0, 1, 2, 3, 4, 5]
del nums[1:4]
print(nums)`,
    stdoutExpected: '[0, 4, 5]',
    explanationTitle: 'Slice Deletion with del',
    explanationText:
      '`del nums[1:4]` removes the entire range of elements from index 1 up to index 3 inclusive (values 1, 2, and 3). The list collapses to `[0, 4, 5]`.',
    complexityInfo: 'Bulk deletion syntax tested on PCEP',
  },
  {
    id: 'pcep-s3-fc-031',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'The clear() Method',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What does list.clear() do, and what does it return?',
    codeSnippet: `data = [1, 2, 3]
res = data.clear()
print(data)
print(res is None)`,
    stdoutExpected: `[]
True`,
    explanationTitle: 'Emptying a List with clear()',
    explanationText:
      '`lst.clear()` empties all elements from the list in place, resulting in `len(lst) == 0`. It is equivalent to `del lst[:]` and returns `None`.',
    complexityInfo: 'List lifecycle methods in Python',
  },
  {
    id: 'pcep-s3-fc-032',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'extend() vs append() with an Iterable',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What is the difference between append([3, 4]) and extend([3, 4])?',
    codeSnippet: `a = [1, 2]
b = [1, 2]
a.append([3, 4])
b.extend([3, 4])
print(a)
print(b)`,
    stdoutExpected: `[1, 2, [3, 4]]
[1, 2, 3, 4]`,
    explanationTitle: 'append() vs extend() Comparison',
    explanationText:
      '`append(x)` adds `x` as a single element (if `x` is a list, it becomes a nested list). In contrast, `extend(iterable)` unpacks each element of the iterable and appends them individually to the end.',
    complexityInfo: 'Top 3 most frequently tested list questions on PCEP',
  },
  {
    id: 'pcep-s3-fc-033',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'The index(value) Method',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What does list.index(value) return when duplicates exist?',
    codeSnippet: `vals = [10, 20, 30, 20, 40]
print(vals.index(20))`,
    stdoutExpected: '1',
    explanationTitle: 'First Index Search with index()',
    explanationText:
      '`lst.index(x)` returns the zero-based index of the FIRST item whose value is equal to `x`. If `x` is not present, it raises a `ValueError`.',
    complexityInfo: 'Linear search method behavior on Python lists',
  },
  {
    id: 'pcep-s3-fc-034',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'The count(value) Method',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What does list.count(value) return if the value is not in the list?',
    codeSnippet: `letters = ['a', 'b', 'a', 'c', 'a']
print(letters.count('a'))
print(letters.count('z'))`,
    stdoutExpected: `3
0`,
    explanationTitle: 'Frequency Count with count()',
    explanationText:
      '`lst.count(x)` returns the number of times `x` appears in the list. If `x` is not present, it safely returns `0` (it NEVER raises an exception).',
    complexityInfo: 'Exception-free frequency querying in Python',
  },
  {
    id: 'pcep-s3-fc-035',
    track: 'pcep',
    cardType: 'PCEP 3.2 • List Methods',
    topic: 'The sort() Method Return Value',
    category: 'List Methods',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.2',
    section: 'Section 3',
    question: 'What happens when you write sorted_lst = original.sort()?',
    codeSnippet: `original = [3, 1, 2]
result = original.sort()
print(original)
print(result)`,
    stdoutExpected: `[1, 2, 3]
None`,
    explanationTitle: 'sort() is In-Place and Returns None',
    explanationText:
      '`lst.sort()` sorts the list in place in ascending order using Python’s Timsort algorithm. It modifies `original` directly and returns `None`. Reassigning `result = original.sort()` sets `result` to `None`.',
    complexityInfo: 'Major PCEP exam trap on in-place sorting',
  },
];
