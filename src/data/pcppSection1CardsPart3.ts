import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 1: ADVANCED OBJECT-ORIENTED PROGRAMMING (Part 3: Cards 71 to 100)
 * - Chapter 1.4: Abstract Base Classes (ABCs) Continued (Cards 71 to 75)
 * - Chapter 1.5: Multiple Inheritance, C3 Linearization, Serialization (pickle/shelve) & copy (Cards 76 to 100)
 */
export const pcppSection1CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 1.4: ABCs CONTINUED (Cards 71 to 75)
  // =========================================================================
  {
    id: 'pcpp-s1-fc-071',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: 'Partial implementation in intermediate subclasses',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'Can an intermediate subclass implement only some abstract methods without becoming instantiable?',
    codeSnippet: `from abc import ABC, abstractmethod

class Base(ABC):
    @abstractmethod
    def f1(self): pass
    @abstractmethod
    def f2(self): pass

class Mid(Base):
    def f1(self): return 1

try:
    m = Mid()
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'Intermediate Subclasses Remain Abstract',
    explanationText:
      'As long as at least one `@abstractmethod` remains unimplemented in the inheritance chain (`f2` in this case), the subclass is considered abstract and Python prevents its instantiation with a `TypeError`.',
    complexityInfo: 'Partial ABC implementation rules',
  },
  {
    id: 'pcpp-s1-fc-072',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: '__abstractmethods__ internal frozenset attribute',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What special attribute on an ABC class holds the names of all unimplemented abstract methods?',
    codeSnippet: `from abc import ABC, abstractmethod

class Task(ABC):
    @abstractmethod
    def run(self): pass
    @abstractmethod
    def stop(self): pass

print(sorted(Task.__abstractmethods__))`,
    stdoutExpected: "['run', 'stop']",
    explanationTitle: '__abstractmethods__ Frozenset',
    explanationText:
      'Python tracks unfulfilled abstract methods in the `__abstractmethods__` attribute (a `frozenset` of strings). Python refuses to instantiate any class where `bool(cls.__abstractmethods__)` is `True`.',
    complexityInfo: 'ABC internal mechanics and introspection',
  },
  {
    id: 'pcpp-s1-fc-073',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: 'collections.abc.Mapping vs MutableMapping',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What methods are required by collections.abc.Mapping vs MutableMapping?',
    codeSnippet: `from collections.abc import Mapping, MutableMapping

# Mapping requires: __getitem__, __iter__, __len__
# MutableMapping adds: __setitem__, __delitem__`,
    stdoutExpected: 'Mapping: __getitem__, __iter__, __len__; MutableMapping adds: __setitem__, __delitem__',
    explanationTitle: 'Standard Mapping Interfaces',
    explanationText:
      '`Mapping` provides read-only dictionary operations (`keys()`, `values()`, `items()`, `get()`) derived from `__getitem__`, `__iter__`, and `__len__`. `MutableMapping` adds mutating operations (`pop()`, `update()`, `setdefault()`) derived from `__setitem__` and `__delitem__`.',
    complexityInfo: 'Collections ABC architecture',
  },
  {
    id: 'pcpp-s1-fc-074',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: 'ABC inheritance combined with multiple inheritance',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'Can a class inherit from both an ABC and a regular concrete class in Python?',
    codeSnippet: `from abc import ABC, abstractmethod

class Interface(ABC):
    @abstractmethod
    def execute(self): pass

class Helper:
    def helper_action(self): return "ok"

class Worker(Helper, Interface):
    def execute(self): return self.helper_action()

w = Worker()
print(w.execute())`,
    stdoutExpected: 'ok',
    explanationTitle: 'Mixing ABCs and Concrete Mixins',
    explanationText:
      'Yes, Python fully supports multiple inheritance combining ABCs and concrete mixin classes. As long as all abstract methods are overridden and metaclasses are compatible, the concrete class instantiates normally.',
    complexityInfo: 'Multiple inheritance with interfaces',
  },
  {
    id: 'pcpp-s1-fc-075',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: 'Runtime validation of virtual subclasses with register()',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'Does ABC.register() verify that the registered class actually implements all abstract methods?',
    codeSnippet: `from abc import ABC, abstractmethod

class Formatter(ABC):
    @abstractmethod
    def format(self, text): pass

class BadFormatter:
    pass

Formatter.register(BadFormatter)
print(issubclass(BadFormatter, Formatter), hasattr(BadFormatter, 'format'))`,
    stdoutExpected: 'True False',
    explanationTitle: 'register() Does Not Validate Method Signatures',
    explanationText:
      '`ABC.register()` performs no verification of methods or signatures. It blindly registers the target class as a virtual subtype. Developers must use caution when registering classes without verifying compliance.',
    complexityInfo: 'Virtual subclassing gotchas',
  },

  // =========================================================================
  // CHAPTER 1.5: MULTIPLE INHERITANCE, C3 MRO, SERIALIZATION & COPY (Cards 76 to 100)
  // =========================================================================
  {
    id: 'pcpp-s1-fc-076',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'C3 Linearization algorithm and __mro__',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What algorithm does Python 3 use to compute the Method Resolution Order (MRO)?',
    codeSnippet: `class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass

print([cls.__name__ for cls in D.__mro__])`,
    stdoutExpected: "['D', 'B', 'C', 'A', 'object']",
    explanationTitle: 'The C3 Linearization Algorithm',
    explanationText:
      'Python uses the C3 Linearization algorithm to compute the MRO. It guarantees two fundamental properties: monotonicity (subclasses are searched before superclasses) and local precedence order (base classes are searched in left-to-right order as listed in the class definition).',
    complexityInfo: 'Python C3 MRO algorithm',
  },
  {
    id: 'pcpp-s1-fc-077',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Inconsistent MRO order raises TypeError at class definition',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What happens when a class inheritance order violates C3 linearization monotonicity?',
    codeSnippet: `class X: pass
class Y(X): pass

try:
    class Z(X, Y): pass
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'Cannot Create a Consistent MRO',
    explanationText:
      '`Z(X, Y)` attempts to check `X` before `Y` due to left-to-right precedence, but `Y` inherits from `X`, requiring `Y` before `X`. These conflicting constraints cannot be resolved by C3 linearization, raising `TypeError: Cannot create a consistent method resolution order (MRO)`.',
    complexityInfo: 'MRO consistency check failure',
  },
  {
    id: 'pcpp-s1-fc-078',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Cooperative multiple inheritance with super()',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What does super() call in cooperative multiple inheritance?',
    codeSnippet: `class Base:
    def action(self):
        print("Base")

class A(Base):
    def action(self):
        print("A")
        super().action()

class B(Base):
    def action(self):
        print("B")
        super().action()

class C(A, B):
    def action(self):
        print("C")
        super().action()

c = C()
c.action()`,
    stdoutExpected: `C
A
B
Base`,
    explanationTitle: 'super() Calls the Next Class in the MRO',
    explanationText:
      '`super()` does NOT necessarily call the direct parent of the class where it appears. Instead, it delegates to the next class in the runtime `__mro__` of the calling object (`self`). For `C`, the MRO is `C -> A -> B -> Base -> object`. Thus, `A`\'s `super().action()` invokes `B.action()`!',
    complexityInfo: 'Cooperative multiple inheritance design pattern',
  },
  {
    id: 'pcpp-s1-fc-079',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'super() without arguments vs 2-argument super(cls, self)',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'How does Python zero-argument super() know which class and instance to use?',
    codeSnippet: `class Parent:
    def show(self): return "P"

class Child(Parent):
    def show(self):
        # In Python 3, super() automatically resolves (__class__, self)
        return super().show() + "C"

print(Child().show())`,
    stdoutExpected: 'PC',
    explanationTitle: 'Zero-Argument super() Compiler Magic',
    explanationText:
      'In Python 3, calling `super()` with no arguments inside a method is syntactic sugar for `super(__class__, self)`. Python\'s compiler automatically injects the cell variable `__class__` into the method scope to determine the enclosing class.',
    complexityInfo: 'Python 3 compiler closure mechanism',
  },
  {
    id: 'pcpp-s1-fc-080',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'mro() method vs __mro__ attribute',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the difference between Class.mro() and Class.__mro__?',
    codeSnippet: `class Alpha: pass
print(type(Alpha.mro()).__name__, type(Alpha.__mro__).__name__)`,
    stdoutExpected: 'list tuple',
    explanationTitle: 'mro() returns a list; __mro__ is a tuple',
    explanationText:
      '`Class.mro()` is a class method that returns the MRO as a new `list`. `Class.__mro__` is an attribute that stores the MRO as an immutable `tuple`. Python runtime uses `__mro__` for fast method dispatch.',
    complexityInfo: 'Introspection attributes on class objects',
  },
  {
    id: 'pcpp-s1-fc-081',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Serialization with pickle: pickle.dumps vs pickle.dump',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the difference between pickle.dumps() and pickle.dump()?',
    codeSnippet: `import pickle

data = {"score": 100}
bytes_data = pickle.dumps(data)
print(type(bytes_data).__name__)`,
    stdoutExpected: 'bytes',
    explanationTitle: 'dumps() returns bytes; dump() writes to a binary file stream',
    explanationText:
      '`pickle.dumps(obj)` serializes an object hierarchy and returns a `bytes` object in memory. `pickle.dump(obj, file)` writes the serialized byte stream directly into an open binary file-like object (`"wb"`).',
    complexityInfo: 'Standard library serialization module',
  },
  {
    id: 'pcpp-s1-fc-082',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Deserialization with pickle.loads and pickle.load',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the output of unpickling an object with pickle.loads()?',
    codeSnippet: `import pickle

original = [1, 2, 3]
serialized = pickle.dumps(original)
restored = pickle.loads(serialized)
print(restored == original, restored is original)`,
    stdoutExpected: 'True False',
    explanationTitle: 'Unpickling Reconstructs an Equivalent Distinct Object',
    explanationText:
      '`pickle.loads(bytes)` reconstructs a brand-new object hierarchy with identical values (`restored == original` is `True`), but it resides at a distinct memory address (`restored is original` is `False`).',
    complexityInfo: 'Pickle deserialization and object identity',
  },
  {
    id: 'pcpp-s1-fc-083',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'What can and cannot be pickled in Python',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'Which of the following cannot be pickled: functions defined at top module level or lambda functions?',
    codeSnippet: `import pickle

try:
    pickle.dumps(lambda x: x * 2)
except Exception as e:
    print(type(e).__name__)`,
    stdoutExpected: 'PicklingError',
    explanationTitle: 'Lambdas and Generators Cannot Be Pickled',
    explanationText:
      'Functions and classes can only be pickled if defined at the top level of a module (pickled by reference name). Anonymous functions (`lambda`), generators, open file handles, database sockets, and inner functions cannot be pickled.',
    complexityInfo: 'Pickle protocol constraints',
  },
  {
    id: 'pcpp-s1-fc-084',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Customizing serialization with __getstate__ and __setstate__',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'How do __getstate__ and __setstate__ customize what gets serialized by pickle?',
    codeSnippet: `import pickle

class SecureRecord:
    def __init__(self, user, token):
        self.user = user
        self.token = token

    def __getstate__(self):
        state = self.__dict__.copy()
        state['token'] = None  # Strip sensitive token
        return state

    def __setstate__(self, state):
        self.__dict__.update(state)

rec = SecureRecord("admin", "secret_token")
restored = pickle.loads(pickle.dumps(rec))
print(restored.user, restored.token)`,
    stdoutExpected: 'admin None',
    explanationTitle: '__getstate__ and __setstate__ Lifecycle Hooks',
    explanationText:
      '`__getstate__` returns the dictionary or state representation to be pickled (allowing stripping unpicklable or sensitive attributes). `__setstate__(state)` receives this state upon unpickling to restore the instance state without invoking `__init__`.',
    complexityInfo: 'Custom serialization protocol',
  },
  {
    id: 'pcpp-s1-fc-085',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Unpickling does NOT execute __init__',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'Is __init__ called when an object is reconstructed by pickle.loads()?',
    codeSnippet: `import pickle

class Counter:
    def __init__(self):
        print("Init executed")

c = Counter()
serialized = pickle.dumps(c)
print("--- Unpickling ---")
restored = pickle.loads(serialized)`,
    stdoutExpected: `Init executed
--- Unpickling ---`,
    explanationTitle: 'pickle Unpickling Bypasses __init__',
    explanationText:
      'When unpickling an object, Python creates an uninitialized instance directly via `__new__` and directly restores its `__dict__` or runs `__setstate__`. The constructor `__init__` is NEVER called during deserialization.',
    complexityInfo: 'Critical PCPP gotcha on object instantiation vs unpickling',
  },
  {
    id: 'pcpp-s1-fc-086',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Pickle protocols and pickle.HIGHEST_PROTOCOL',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the advantage of using protocol=pickle.HIGHEST_PROTOCOL in pickle.dump()?',
    codeSnippet: `import pickle
print(isinstance(pickle.HIGHEST_PROTOCOL, int), pickle.HIGHEST_PROTOCOL >= 4)`,
    stdoutExpected: 'True True',
    explanationTitle: 'Pickle Protocols for Performance and Feature Support',
    explanationText:
      'Python supports multiple pickle protocol versions (0 to 5). Higher protocols (Protocol 4+ introduced in Python 3.4+) produce smaller binary outputs, serialize a wider variety of objects, and run significantly faster using out-of-band buffer sharing.',
    complexityInfo: 'Pickle format versioning',
  },
  {
    id: 'pcpp-s1-fc-087',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Security hazards of unpickling untrusted data',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'Why is pickle.loads() unsafe to run on untrusted external data?',
    codeSnippet: `# Unpickling can execute arbitrary code via __reduce__`,
    stdoutExpected: 'It can execute arbitrary code during object reconstruction',
    explanationTitle: 'Pickle Is Inherently Insecure for Untrusted Inputs',
    explanationText:
      'The pickle format is an executable bytecode for an abstract virtual machine. It can invoke any callable in the Python runtime via `__reduce__`, allowing an attacker to execute arbitrary OS commands upon unpickling. Use JSON or signed tokens for untrusted data.',
    complexityInfo: 'Application security and safe deserialization',
  },
  {
    id: 'pcpp-s1-fc-088',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Persistent object storage with the shelve module',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the shelve module in Python?',
    codeSnippet: `import shelve

# with shelve.open("my_db") as db:
#     db['key'] = {'name': 'Alice', 'score': 95}`,
    stdoutExpected: 'A persistent, dictionary-like object storage backed by dbm and pickle',
    explanationTitle: 'The shelve Module',
    explanationText:
      '`shelve` provides a persistent, dictionary-like shelf backed by a DBM database. Shelf keys must always be strings, while values can be any picklable Python object.',
    complexityInfo: 'Standard library persistence utility',
  },
  {
    id: 'pcpp-s1-fc-089',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Shelf key restrictions in the shelve module',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What type must keys in a shelve database always be?',
    codeSnippet: `import shelve

# Keys in a shelve object must strictly be strings`,
    stdoutExpected: 'str (strings only)',
    explanationTitle: 'Shelve Keys Must Be Strings',
    explanationText:
      'Unlike standard Python dictionaries which accept any hashable object as keys, `shelve` keys are strictly restricted to strings (`str`). Passing integers or tuples as keys raises a `TypeError`.',
    complexityInfo: 'Shelve API constraints',
  },
  {
    id: 'pcpp-s1-fc-090',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Mutating mutable values in shelve and the writeback flag',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'Why does mutating a list stored in a shelf (shelf["lst"].append(x)) fail to persist by default?',
    codeSnippet: `import shelve

# shelf['items'].append('new_item') does NOT persist without writeback=True or reassigning`,
    stdoutExpected: 'Shelf deserializes a copy; changes to internal mutations are lost unless writeback=True or reassigned',
    explanationTitle: 'Shelve Mutation Trap and writeback=True',
    explanationText:
      'Accessing `shelf["k"]` unpickles a temporary copy into memory. Mutating this copy in-place (`.append()`) does not write it back to disk. You must either reassign `temp = shelf["k"]; temp.append(x); shelf["k"] = temp` or open the shelf with `shelve.open(..., writeback=True)`.',
    complexityInfo: 'Shelve caching and persistence trap',
  },
  {
    id: 'pcpp-s1-fc-091',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Shallow copy vs Deep copy with copy module',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the fundamental difference between copy.copy() and copy.deepcopy()?',
    codeSnippet: `import copy

original = [[1, 2], [3, 4]]
shallow = copy.copy(original)
deep = copy.deepcopy(original)

original[0][0] = 99
print(shallow[0][0], deep[0][0])`,
    stdoutExpected: '99 1',
    explanationTitle: 'Shallow vs Deep Copying',
    explanationText:
      '`copy.copy()` creates a new outer container but inserts references to the identical child objects. `copy.deepcopy()` recursively constructs duplicates of all nested child objects, fully isolating the new hierarchy from mutations to the original.',
    complexityInfo: 'Object reference graph and mutability',
  },
  {
    id: 'pcpp-s1-fc-092',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Customizing shallow copying with __copy__',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What special method is invoked when an object is copied using copy.copy()?',
    codeSnippet: `import copy

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __copy__(self):
        return Point(self.x * 10, self.y * 10)

p = Point(1, 2)
p_copy = copy.copy(p)
print(p_copy.x, p_copy.y)`,
    stdoutExpected: '10 20',
    explanationTitle: 'The __copy__ Protocol',
    explanationText:
      'Defining `__copy__(self)` allows a class to override the behavior of `copy.copy(obj)`. It should return a shallow copy of the object according to custom class requirements.',
    complexityInfo: 'Copy protocol hooks',
  },
  {
    id: 'pcpp-s1-fc-093',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Customizing deep copying with __deepcopy__ and memo dict',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'Why does __deepcopy__(self, memo) require the memo dictionary argument?',
    codeSnippet: `import copy

class Node:
    def __init__(self, val):
        self.val = val
        self.neighbor = None

    def __deepcopy__(self, memo):
        if id(self) in memo:
            return memo[id(self)]
        cp = Node(self.val)
        memo[id(self)] = cp
        cp.neighbor = copy.deepcopy(self.neighbor, memo)
        return cp`,
    stdoutExpected: 'To prevent infinite recursion when copying cyclic or self-referencing object graphs',
    explanationTitle: 'The memo Dictionary Prevents Infinite Recursion',
    explanationText:
      'The `memo` dictionary tracks objects that have already been copied during the current `deepcopy` call (`memo[id(obj)] = copied_obj`). Passing `memo` to recursive `copy.deepcopy` calls prevents infinite recursion on cyclic data structures.',
    complexityInfo: 'Cyclic graph traversal in deepcopy',
  },
  {
    id: 'pcpp-s1-fc-094',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Copying immutable objects: behavior of copy.copy() on tuples/strings/ints',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is returned when copy.copy() or copy.deepcopy() is called on an immutable type (tuple, int, str)?',
    codeSnippet: `import copy

t = (1, 2, 3)
t_copy = copy.copy(t)
print(t is t_copy)`,
    stdoutExpected: 'True',
    explanationTitle: 'Copying Immutable Objects Returns the Original Object',
    explanationText:
      'Because immutable objects (like `int`, `str`, `float`, `frozenset`, and tuples containing only immutables) cannot be modified in place, Python optimizes `copy.copy()` and `copy.deepcopy()` by simply returning the original object reference (`t is t_copy` is `True`).',
    complexityInfo: 'CPython optimization for immutable types',
  },
  {
    id: 'pcpp-s1-fc-095',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Pickling instances of classes with __slots__',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'Can instances of classes with __slots__ be pickled by modern Python pickle protocols?',
    codeSnippet: `import pickle

class Slotted:
    __slots__ = ('name', 'age')
    def __init__(self, name, age):
        self.name = name
        self.age = age

s = Slotted("Bob", 30)
restored = pickle.loads(pickle.dumps(s))
print(restored.name, restored.age)`,
    stdoutExpected: 'Bob 30',
    explanationTitle: 'Modern Pickle Supports __slots__ Directly',
    explanationText:
      'Starting with Protocol 2 (and default in modern Python 3), `pickle` handles slotted classes automatically by inspecting descriptors without requiring an instance `__dict__`.',
    complexityInfo: 'Slotted object serialization',
  },
  {
    id: 'pcpp-s1-fc-096',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Diamond inheritance attribute lookup walkthrough',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'In a classic diamond hierarchy D(B, C) where B(A) and C(A) both inherit from A, which method runs?',
    codeSnippet: `class A:
    def greet(self): return "A"

class B(A):
    pass

class C(A):
    def greet(self): return "C"

class D(B, C):
    pass

print(D().greet())`,
    stdoutExpected: 'C',
    explanationTitle: 'C3 MRO Checks Subclasses Before Common Ancestors',
    explanationText:
      'The MRO of `D` is `[D, B, C, A, object]`. Even though `B` appears before `C` in `D(B, C)`, `B` does not override `greet()`. Python continues to `C` before visiting `A` because `C` is a subclass of `A` and has higher precedence than `A`.',
    complexityInfo: 'Diamond inheritance resolution',
  },
  {
    id: 'pcpp-s1-fc-097',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'super() in multiple inheritance with mismatched parameters',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'How should cooperative methods be designed to handle varying arguments along the MRO?',
    codeSnippet: `class Root:
    def __init__(self, **kwargs):
        # Base object.__init__ takes no arguments
        pass

class ComponentA(Root):
    def __init__(self, a=1, **kwargs):
        self.a = a
        super().__init__(**kwargs)

class ComponentB(Root):
    def __init__(self, b=2, **kwargs):
        self.b = b
        super().__init__(**kwargs)

class Combined(ComponentA, ComponentB):
    pass

c = Combined(a=10, b=20)
print(c.a, c.b)`,
    stdoutExpected: '10 20',
    explanationTitle: 'Using **kwargs for Cooperative super() Arguments',
    explanationText:
      'Because each class in the MRO consumes its own expected named arguments and forwards the rest via `super().__init__(**kwargs)`, cooperative initialization succeeds without `TypeError`. The top-level `Root` strips remaining unused kwargs.',
    complexityInfo: 'Kwargs consumption design pattern',
  },
  {
    id: 'pcpp-s1-fc-098',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Pickling cyclic object graphs',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'Can pickle handle self-referential or cyclic references without infinite recursion?',
    codeSnippet: `import pickle

a = []
b = [a]
a.append(b)  # Cycle: a contains b, b contains a

restored_a = pickle.loads(pickle.dumps(a))
print(restored_a[0][0] is restored_a)`,
    stdoutExpected: 'True',
    explanationTitle: 'Pickle Handles Cyclic References Seamlessly',
    explanationText:
      'Unlike JSON, `pickle` tracks object memo IDs during serialization. When an object is encountered a second time, pickle writes an internal reference instead of re-serializing, faithfully reconstructing circular references.',
    complexityInfo: 'Pickle graph reconstruction',
  },
  {
    id: 'pcpp-s1-fc-099',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'shelve sync() and close() guarantees',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What method forces an open shelf to flush in-memory buffers to disk without closing it?',
    codeSnippet: `import shelve

# shelf.sync() flushes in-memory cache to the underlying dbm database`,
    stdoutExpected: 'shelf.sync()',
    explanationTitle: 'Flushing Shelf Buffers with sync()',
    explanationText:
      'Invoking `shelf.sync()` forces all synchronized writes and cached changes in the shelf to be flushed to persistent disk storage immediately, while keeping the shelf object open for further access.',
    complexityInfo: 'Shelve buffer lifecycle',
  },
  {
    id: 'pcpp-s1-fc-100',
    track: 'pcpp',
    cardType: 'PCPP 1.5 • MRO & Serialization',
    topic: 'Comprehensive Section 1 summary: OOP mastery on PCPP-32-101',
    category: 'T5: Advanced OOP & Serialization',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What are the five essential pillars of PCPP-32-101 Section 1 (Advanced OOP)?',
    codeSnippet: `# 1. Classes, static/class methods, properties, descriptors & __slots__
# 2. Magic dunders: __new__, container protocols, operator overloading
# 3. Metaclasses, type metaclass & __init_subclass__
# 4. Abstract Base Classes (ABCs), @abstractmethod & __subclasshook__
# 5. Multiple inheritance, C3 MRO, pickle, shelve & deepcopy`,
    stdoutExpected: '1. Classes & Descriptors, 2. Dunder Protocols, 3. Metaclasses, 4. ABCs, 5. MRO & Serialization',
    explanationTitle: 'The 5 Pillars of Advanced Python OOP',
    explanationText:
      'Mastery of these 5 pillars gives candidates a complete understanding of Python\'s dynamic object model, class creation lifecycle, cooperative multiple inheritance, and memory/persistence handling tested on the PCPP-32-101 certification exam.',
    complexityInfo: 'PCPP-32-101 Section 1 complete domain coverage',
  },
];
