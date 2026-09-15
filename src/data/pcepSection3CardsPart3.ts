import { Flashcard } from '../types';

/**
 * PCEP-30-0x SECTION 3: DATA COLLECTIONS – LISTS, TUPLES, DICTIONARIES (Part 3: Cards 71 to 100)
 * - Chapter 3.4 Completion: Tuple Methods, Mutability Nuances, Unpacking & Conversions (Cards 71-80)
 * - Chapter 3.5: Dictionaries: Key-Value Mappings, Hashability, Methods & Iteration (Cards 81-100)
 */
export const pcepSection3CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.4 COMPLETION: TUPLES (Cards 71 to 80)
  // =========================================================================
  {
    id: 'pcep-s3-fc-071',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'The tuple.count(value) Method',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How many methods does a tuple have, and what does count() return?',
    codeSnippet: `t = (1, 2, 3, 2, 2, 4)
print(t.count(2))
print(t.count(99))`,
    stdoutExpected: `3
0`,
    explanationTitle: 'Tuple count() Method',
    explanationText:
      'Tuples only have two built-in methods: `count()` and `index()`. `t.count(x)` returns the frequency of occurrences of `x`. If `x` is absent, it returns 0 without raising an error.',
    complexityInfo: 'Official PCEP syllabus: tuple methods',
  },
  {
    id: 'pcep-s3-fc-072',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'The tuple.index(value) Method',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What exception is raised when tuple.index() cannot find the target value?',
    codeSnippet: `tup = ('a', 'b', 'c')
try:
    print(tup.index('z'))
except ValueError as e:
    print("Caught ValueError")`,
    stdoutExpected: 'Caught ValueError',
    explanationTitle: 'index() ValueError on Missing Target',
    explanationText:
      '`tup.index(x)` returns the index of the first occurrence of `x`. If `x` is not in the tuple, a `ValueError: tuple.index(x): x not in tuple` is raised.',
    complexityInfo: 'Exception behavior consistency across sequence types',
  },
  {
    id: 'pcep-s3-fc-073',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'Tuples Containing Mutable Objects (e.g. Lists)',
    category: 'Tuples',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'Can you mutate a list that is contained inside a tuple?',
    codeSnippet: `t = ([1, 2], 3)
t[0].append(99)
print(t)`,
    stdoutExpected: '([1, 2, 99], 3)',
    explanationTitle: 'Immutability of Container vs Mutability of Contents',
    explanationText:
      'A tuple’s immutability means its references cannot be rebound (`t[0] = ...` is forbidden). However, if an element inside the tuple is itself a mutable object (like a list), that object can still be mutated in place via methods like `append()`.',
    complexityInfo: 'Famous PCEP trick question on container immutability',
  },
  {
    id: 'pcep-s3-fc-074',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'The += on Nested List in Tuple Paradox',
    category: 'Tuples',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What happens when executing t[0] += [3] on t = ([1, 2],)?',
    codeSnippet: `t = ([1, 2],)
try:
    t[0] += [3]
except TypeError:
    print("TypeError raised!")
print(t)`,
    stdoutExpected: `TypeError raised!
([1, 2, 3],)`,
    explanationTitle: 'Augmented Assignment on Tuple Item Paradox',
    explanationText:
      '`t[0] += [3]` executes in two steps: 1) `t[0].extend([3])` mutates the list in place; 2) it attempts to reassign the result back to `t[0] = ...`, which fails with `TypeError` because tuples are immutable. Thus, the mutation succeeds even though an exception is thrown!',
    complexityInfo: 'Advanced Python exam riddle on augmented assignment',
  },
  {
    id: 'pcep-s3-fc-075',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'Tuple Unpacking Syntax',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How does tuple unpacking assign values to multiple identifiers?',
    codeSnippet: `point = (4, 9, -2)
x, y, z = point
print(x + y + z)`,
    stdoutExpected: '11',
    explanationTitle: 'Tuple Unpacking Mechanics',
    explanationText:
      'Tuple unpacking distributes each element of the tuple to the corresponding variable on the left side of `=`. Here, `x=4`, `y=9`, `z=-2`, yielding `4 + 9 + -2 = 11`.',
    complexityInfo: 'Core sequence unpacking tested on PCEP',
  },
  {
    id: 'pcep-s3-fc-076',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'ValueError on Unpacking Mismatch',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What error occurs when the number of variables does not match the tuple length?',
    codeSnippet: `pair = (10, 20)
try:
    a, b, c = pair
except ValueError as e:
    print("Caught ValueError")`,
    stdoutExpected: 'Caught ValueError',
    explanationTitle: 'Unpacking Length Mismatch Raises ValueError',
    explanationText:
      'If there are fewer values than variables (or too many values), Python raises a `ValueError: not enough values to unpack (expected 3, got 2)`.',
    complexityInfo: 'Sequence unpacking error handling on PCEP',
  },
  {
    id: 'pcep-s3-fc-077',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'Swapping Variables with Tuple Packing/Unpacking (a, b = b, a)',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How does a, b = b, a swap variable values without a temporary variable?',
    codeSnippet: `a = 5
b = 10
a, b = b, a
print(f"a={a}, b={b}")`,
    stdoutExpected: 'a=10, b=5',
    explanationTitle: 'Atomic Tuple Value Swap',
    explanationText:
      'Python first evaluates the right-hand side `b, a` to construct a temporary 2-tuple `(10, 5)`. It then unpacks that tuple into the targets on the left `a, b`, cleanly swapping both variables in a single atomic statement.',
    complexityInfo: 'Quintessential Python idiom tested on PCEP',
  },
  {
    id: 'pcep-s3-fc-078',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'Type Conversion Between Lists and Tuples',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'How do list() and tuple() constructors convert between collections?',
    codeSnippet: `original_tup = (1, 2, 3)
lst = list(original_tup)
lst.append(4)
new_tup = tuple(lst)
print(new_tup)`,
    stdoutExpected: '(1, 2, 3, 4)',
    explanationTitle: 'Inter-Collection Type Conversion',
    explanationText:
      '`list(tup)` converts an immutable tuple into a mutable list. After modifying the list, `tuple(lst)` converts it back into an immutable tuple. This is the canonical way to "edit" tuple data.',
    complexityInfo: 'Type conversion workflow on PCEP collections',
  },
  {
    id: 'pcep-s3-fc-079',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'Tuples as Dictionary Keys (Hashability)',
    category: 'Tuples',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'Can a tuple containing a list be used as a dictionary key?',
    codeSnippet: `t1 = (1, 2)
t2 = (1, [2])
d = {t1: "valid"}
print(d[t1])

try:
    d[t2] = "invalid"
except TypeError as e:
    print("Caught TypeError")`,
    stdoutExpected: `valid
Caught TypeError`,
    explanationTitle: 'Recursive Hashability of Tuples',
    explanationText:
      'A tuple is hashable only if ALL of its contained elements are also hashable. `t1` contains integers (immutable), so it is a valid dictionary key. `t2` contains a mutable list, so attempting to use it as a key raises `TypeError: unhashable type: \'list\'`.',
    complexityInfo: 'Critical bridge concept between Tuples (3.4) and Dictionaries (3.5)',
  },
  {
    id: 'pcep-s3-fc-080',
    track: 'pcep',
    cardType: 'PCEP 3.4 • Tuples & Immutability',
    topic: 'Tuples vs Lists: Structural Differences',
    category: 'Tuples',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.4',
    section: 'Section 3',
    question: 'What are the main advantages of tuples over lists in Python?',
    codeSnippet: `import sys
t = (1, 2, 3, 4, 5)
l = [1, 2, 3, 4, 5]
print(sys.getsizeof(t) < sys.getsizeof(l))`,
    stdoutExpected: 'True',
    explanationTitle: 'Tuples: Lighter Memory and Hashable',
    explanationText:
      'Tuples have smaller memory overhead than lists because their size is fixed (no over-allocation for growth). They guarantee write-protection against accidental modification and can serve as dictionary keys and set elements.',
    complexityInfo: 'Data collection design characteristics on PCEP',
  },

  // =========================================================================
  // CHAPTER 3.5: DICTIONARIES – KEY-VALUE MAPPINGS (Cards 81 to 100)
  // =========================================================================
  {
    id: 'pcep-s3-fc-081',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'Dictionary Definition with Key:Value Pairs',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How are key-value pairs formatted in a Python dictionary literal?',
    codeSnippet: `user = {"name": "Alice", "age": 25}
print(type(user).__name__)
print(user["name"])`,
    stdoutExpected: `dict
Alice`,
    explanationTitle: 'Dictionary Key-Value Mapping',
    explanationText:
      'Dictionaries are mutable mappings of keys to values enclosed in curly braces `{}`. Each pair is separated by a colon (`key: value`), and pairs are separated by commas.',
    complexityInfo: 'Official PCEP syllabus: dictionary mapping syntax',
  },
  {
    id: 'pcep-s3-fc-082',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'The Empty Literal {} Defines a dict, Not a set',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What type is created by empty curly braces {} in Python?',
    codeSnippet: `obj = {}
print(type(obj).__name__)`,
    stdoutExpected: 'dict',
    explanationTitle: '{} Literal Defaults to dict',
    explanationText:
      'In Python, `{}` creates an empty dictionary (`dict`), NOT an empty set. To create an empty set, you must call the constructor `set()`.',
    complexityInfo: 'Classic PCEP question on collection literals',
  },
  {
    id: 'pcep-s3-fc-083',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'Dictionary Key Requirements (Hashability)',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What types of data can serve as valid keys in a Python dictionary?',
    codeSnippet: `valid_dict = {
    "str_key": 1,
    42: "int_key",
    3.14: "float_key",
    (1, 2): "tuple_key"
}
print(len(valid_dict))`,
    stdoutExpected: '4',
    explanationTitle: 'Hashable Types as Dictionary Keys',
    explanationText:
      'Any immutable, hashable type can be used as a dictionary key: strings, integers, floats, booleans, and tuples of immutables. Values, on the other hand, can be of any arbitrary type (including mutable lists or nested dicts).',
    complexityInfo: 'Fundamental dictionary key constraints on PCEP',
  },
  {
    id: 'pcep-s3-fc-084',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'Mutable Types as Keys Raise TypeError',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What exception is raised when using a list as a dictionary key?',
    codeSnippet: `try:
    d = {[1, 2]: "numbers"}
except TypeError as e:
    print("Caught TypeError")`,
    stdoutExpected: 'Caught TypeError',
    explanationTitle: 'Unhashable Types Cannot Be Keys',
    explanationText:
      'Because lists are mutable, their contents (and resulting hash) can change during runtime. Python raises `TypeError: unhashable type: \'list\'`. Dictionaries and sets are also mutable and cannot be keys.',
    complexityInfo: 'High-frequency PCEP question on unhashable types',
  },
  {
    id: 'pcep-s3-fc-085',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'Duplicate Keys in Dictionary Literal',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What happens when a dictionary literal defines duplicate keys?',
    codeSnippet: `d = {"a": 1, "b": 2, "a": 99}
print(d)
print(len(d))`,
    stdoutExpected: `{'a': 99, 'b': 2}
2`,
    explanationTitle: 'Last Defined Key Overwrites Earlier Value',
    explanationText:
      'Dictionary keys must be unique. When duplicate keys appear in a dictionary literal, the last key-value pair silently overwrites any earlier pairs with that same key. The resulting dictionary contains only two keys.',
    complexityInfo: 'Dictionary uniqueness constraint on PCEP',
  },
  {
    id: 'pcep-s3-fc-086',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'Bracket Key Access d[key]',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do you look up the value associated with a key?',
    codeSnippet: `capitals = {"FR": "Paris", "DE": "Berlin"}
print(capitals["FR"])`,
    stdoutExpected: 'Paris',
    explanationTitle: 'Subscript Bracket Lookup',
    explanationText:
      '`d[key]` retrieves the value mapped to `key`. This lookup is performed in O(1) average time via hash table lookup.',
    complexityInfo: 'Primary dictionary access syntax',
  },
  {
    id: 'pcep-s3-fc-087',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'KeyError on Missing Key Lookup',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What exception is raised when looking up a non-existent key with []?',
    codeSnippet: `person = {"name": "Bob"}
try:
    print(person["salary"])
except KeyError as e:
    print("Caught KeyError")`,
    stdoutExpected: 'Caught KeyError',
    explanationTitle: 'Direct Subscript Lookup Raises KeyError',
    explanationText:
      'If the key does not exist in the dictionary, subscript access `d[missing_key]` raises a `KeyError`. It does NOT return `None` or an empty value.',
    complexityInfo: 'KeyError exception handling in PCEP Section 3 and 4',
  },
  {
    id: 'pcep-s3-fc-088',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'Safe Access with dict.get(key)',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does dict.get(key) return if the key does not exist?',
    codeSnippet: `info = {"title": "Engineer"}
val = info.get("department")
print(val is None)`,
    stdoutExpected: 'True',
    explanationTitle: 'get() Safely Returns None',
    explanationText:
      'The `.get(key)` method attempts to retrieve the value. If the key is absent, it returns `None` instead of raising a `KeyError`.',
    complexityInfo: 'Preferred defensive programming technique for dict lookups',
  },
  {
    id: 'pcep-s3-fc-089',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'dict.get(key, default) with Custom Fallback',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What is returned by d.get("city", "Unknown") when "city" is missing?',
    codeSnippet: `profile = {"username": "coder123"}
city = profile.get("city", "Unknown")
username = profile.get("username", "Guest")
print(f"city: {city}, user: {username}")`,
    stdoutExpected: 'city: Unknown, user: coder123',
    explanationTitle: 'get() Fallback Default Value',
    explanationText:
      '`d.get(key, default)` returns the value if `key` is present in `d`. If the key is not found, it returns the provided `default` value.',
    complexityInfo: 'High-frequency PCEP exam question on dict.get()',
  },
  {
    id: 'pcep-s3-fc-090',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'Adding or Updating Key-Value Pairs (d[k] = v)',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do you add a new entry or update an existing entry in a dictionary?',
    codeSnippet: `config = {"mode": "dark"}
config["mode"] = "light"      # Update existing
config["fontSize"] = 14       # Insert new
print(config)`,
    stdoutExpected: "{'mode': 'light', 'fontSize': 14}",
    explanationTitle: 'Subscript Assignment Semantics',
    explanationText:
      'Assigning `d[key] = value` updates the value if `key` already exists, or inserts a new `key: value` pair if `key` does not yet exist.',
    complexityInfo: 'Core dictionary mutation mechanics',
  },
  {
    id: 'pcep-s3-fc-091',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'Checking Membership with in Checks Keys, Not Values',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'Does "val in d" check dictionary keys or dictionary values?',
    codeSnippet: `d = {"a": 1, "b": 2}
print("a" in d)
print(1 in d)`,
    stdoutExpected: `True
False`,
    explanationTitle: 'in Operator Checks Keys by Default',
    explanationText:
      'Using the `in` operator directly on a dictionary checks for existence among the KEYS. `"a" in d` is `True` because `"a"` is a key. `1 in d` is `False` because `1` is a value, not a key (to check values, write `1 in d.values()`).',
    complexityInfo: 'Top 3 most common PCEP dictionary exam pitfalls',
  },
  {
    id: 'pcep-s3-fc-092',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'len() Function on Dictionaries',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does len(d) measure on a dictionary?',
    codeSnippet: `inventory = {"apples": 10, "bananas": 5, "oranges": 8}
print(len(inventory))`,
    stdoutExpected: '3',
    explanationTitle: 'Counting Key-Value Pairs with len()',
    explanationText:
      '`len(d)` returns the number of key-value pairs stored in the dictionary.',
    complexityInfo: 'Standard collection length inspection',
  },
  {
    id: 'pcep-s3-fc-093',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'The del Statement on Dictionary Keys',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What happens when executing del d[key] on an existing vs missing key?',
    codeSnippet: `d = {"x": 1, "y": 2}
del d["x"]
print(d)

try:
    del d["z"]
except KeyError:
    print("KeyError on missing key")`,
    stdoutExpected: `{'y': 2}
KeyError on missing key`,
    explanationTitle: 'del Removes Key-Value Pair',
    explanationText:
      '`del d[key]` removes the key-value pair from the dictionary. If the specified `key` does not exist, it raises a `KeyError`.',
    complexityInfo: 'Deletion keyword behavior on dictionary entries',
  },
  {
    id: 'pcep-s3-fc-094',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'The dict.pop(key) Method',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does dict.pop(key) return, and what is its side effect?',
    codeSnippet: `scores = {"math": 95, "chem": 88}
val = scores.pop("math")
print(val)
print(scores)`,
    stdoutExpected: `95
{'chem': 88}`,
    explanationTitle: 'pop() Removes and Returns Value',
    explanationText:
      '`d.pop(key)` removes the key and returns its associated value. If `key` is not found and no default is supplied, it raises a `KeyError`.',
    complexityInfo: 'Key removal with value retrieval on PCEP',
  },
  {
    id: 'pcep-s3-fc-095',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'dict.pop(key, default) with Fallback',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do you safely pop an optional key from a dictionary without KeyError?',
    codeSnippet: `settings = {"volume": 80}
val = settings.pop("brightness", 50)
print(val)
print(settings)`,
    stdoutExpected: `50
{'volume': 80}`,
    explanationTitle: 'pop() Safe Fallback Default',
    explanationText:
      'Passing a second argument `d.pop(key, default)` returns the default value instead of raising `KeyError` when `key` is absent. The dictionary remains unchanged.',
    complexityInfo: 'Safe deletion patterns on Python dictionaries',
  },
  {
    id: 'pcep-s3-fc-096',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'The dict.keys() Method View',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does d.keys() return, and how can it be converted to a list?',
    codeSnippet: `user = {"id": 1, "role": "admin"}
k_view = user.keys()
k_list = list(k_view)
print(k_list)`,
    stdoutExpected: "['id', 'role']",
    explanationTitle: 'Dictionary Keys View Object',
    explanationText:
      '`d.keys()` returns a dynamic `dict_keys` view object reflecting all current keys in the dictionary. It can be iterated over directly or converted into a list via `list(d.keys())`.',
    complexityInfo: 'Official PCEP syllabus: dictionary view methods',
  },
  {
    id: 'pcep-s3-fc-097',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'The dict.values() Method View',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'How do you check if a value exists inside a dictionary?',
    codeSnippet: `prices = {"apple": 1.5, "banana": 0.8}
print(1.5 in prices.values())
print(2.0 in prices.values())`,
    stdoutExpected: `True
False`,
    explanationTitle: 'Dictionary Values View Object',
    explanationText:
      '`d.values()` returns a `dict_values` view of all values in the dictionary. You can use the `in` operator on `d.values()` to test value membership.',
    complexityInfo: 'Value search operations on dictionaries',
  },
  {
    id: 'pcep-s3-fc-098',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'The dict.items() Method and (key, value) Pairs',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What tuple structure is yielded by iterating over d.items()?',
    codeSnippet: `metrics = {"a": 10, "b": 20}
for k, v in metrics.items():
    print(f"{k}->{v}", end=" ")`,
    stdoutExpected: 'a->10 b->20 ',
    explanationTitle: 'Key-Value Tuple Unpacking with items()',
    explanationText:
      '`d.items()` returns a view yielding 2-tuples of `(key, value)`. This allows simultaneous unpacking of both the key and the value in a `for` loop.',
    complexityInfo: 'Standard iteration pattern for dictionaries',
  },
  {
    id: 'pcep-s3-fc-099',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'The dict.update() Method',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does d.update(other) do when keys overlap?',
    codeSnippet: `d1 = {"a": 1, "b": 2}
d2 = {"b": 99, "c": 3}
d1.update(d2)
print(d1)`,
    stdoutExpected: "{'a': 1, 'b': 99, 'c': 3}",
    explanationTitle: 'Merging Dictionaries with update()',
    explanationText:
      '`d1.update(d2)` merges key-value pairs from `d2` into `d1` in place. For any duplicate keys (like `"b"`), the value from `d2` overwrites the existing value in `d1`. It returns `None`.',
    complexityInfo: 'Dictionary merge operations on PCEP',
  },
  {
    id: 'pcep-s3-fc-100',
    track: 'pcep',
    cardType: 'PCEP 3.5 • Dictionaries & Key-Value',
    topic: 'Default Dictionary Iteration Yields Keys',
    category: 'Dictionaries',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '3.5',
    section: 'Section 3',
    question: 'What does for item in dict: iterate over by default?',
    codeSnippet: `student = {"name": "Charlie", "grade": "A"}
for item in student:
    print(item, end=" ")`,
    stdoutExpected: 'name grade ',
    explanationTitle: 'Default Dictionary Iteration Over Keys',
    explanationText:
      'Iterating directly over a dictionary `for item in d:` iterates through the KEYS, not values or key-value pairs. It is functionally equivalent to `for item in d.keys():`.',
    complexityInfo: 'Crucial PCEP exam question on collection iteration defaults',
  },
];
