import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 1: ADVANCED OBJECT-ORIENTED PROGRAMMING (Part 1: Cards 1 to 40)
 * - Chapter 1.1: Advanced Classes, Instances, Class vs Static Methods & Properties (Cards 1 to 20)
 * - Chapter 1.2: Special Dunder Methods, Custom Containers & Operator Overloading (Cards 21 to 40)
 */
export const pcppSection1CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 1.1: ADVANCED CLASSES, CLASS VS STATIC METHODS & PROPERTIES (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pcpp-s1-fc-001',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: '@classmethod vs @staticmethod execution context',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is the primary difference between a method decorated with @classmethod and one decorated with @staticmethod in Python?',
    codeSnippet: `class Demo:
    counter = 0

    @classmethod
    def from_string(cls, data):
        return cls()

    @staticmethod
    def is_valid(data):
        return isinstance(data, str) and len(data) > 0`,
    stdoutExpected: '@classmethod receives cls implicitly; @staticmethod receives neither self nor cls',
    explanationTitle: 'Class Methods vs Static Methods',
    explanationText:
      'A method decorated with @classmethod receives the class object (conventionally named cls) as its first implicit parameter, allowing access to class attributes and polymorphic subclass instantiation. A method decorated with @staticmethod is an isolated utility function placed inside the class namespace; it receives no implicit self or cls argument.',
    complexityInfo: 'PCPP-32-101 Section 1.1 core competency',
  },
  {
    id: 'pcpp-s1-fc-002',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'Polymorphic factory methods with @classmethod',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is output when a subclass invokes an inherited @classmethod factory constructor?',
    codeSnippet: `class Base:
    def __init__(self, val):
        self.val = val

    @classmethod
    def make_zero(cls):
        return cls(0)

class Sub(Base):
    pass

s = Sub.make_zero()
print(type(s).__name__)`,
    stdoutExpected: 'Sub',
    explanationTitle: 'Polymorphic Instantiation with cls()',
    explanationText:
      'Because `make_zero` is a @classmethod, when invoked via `Sub.make_zero()`, the `cls` argument bound at runtime is `Sub`, not `Base`. Calling `cls(0)` returns an instance of `Sub`. This enables polymorphic alternative constructors.',
    complexityInfo: 'Inheritance and runtime class binding',
  },
  {
    id: 'pcpp-s1-fc-003',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'Calling @staticmethod from an instance vs class',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'Can a @staticmethod be invoked both through the class and through an instance of that class without error?',
    codeSnippet: `class Tool:
    @staticmethod
    def compute(a, b):
        return a * b + 1

t = Tool()
print(Tool.compute(2, 3) == t.compute(2, 3))`,
    stdoutExpected: 'True',
    explanationTitle: 'Dual Invocation of Static Methods',
    explanationText:
      'Static methods do not bind `self` or `cls`. Python allows invoking `@staticmethod` either directly via the class (`Tool.compute(...)`) or via an instance (`t.compute(...)`). Both produce identical behavior and return values.',
    complexityInfo: 'Descriptor protocol for staticmethod',
  },
  {
    id: 'pcpp-s1-fc-004',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'The @property decorator and managed getter',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'How does the @property decorator alter attribute access syntax?',
    codeSnippet: `class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

c = Circle(5)
print(c.radius)`,
    stdoutExpected: '5',
    explanationTitle: 'Read-Only Property Access',
    explanationText:
      '@property converts a zero-argument method into a managed read-only attribute getter. The caller accesses `c.radius` without parentheses `()` as if it were a direct instance variable.',
    complexityInfo: 'Python Descriptor protocol abstraction',
  },
  {
    id: 'pcpp-s1-fc-005',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'Attribute setter validation with @<property>.setter',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What happens if a caller attempts to assign a value to a @property that lacks a corresponding .setter method?',
    codeSnippet: `class ReadOnly:
    def __init__(self, val):
        self._val = val

    @property
    def val(self):
        return self._val

r = ReadOnly(42)
try:
    r.val = 99
except AttributeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'AttributeError',
    explanationTitle: 'Missing Property Setter Raises AttributeError',
    explanationText:
      'In Python, a property defined only with `@property` without a corresponding `@val.setter` decorator is immutable from the outside. Attempting to assign `r.val = 99` raises an `AttributeError: can\'t set attribute`.',
    complexityInfo: 'Encapsulation and immutability guard',
  },
  {
    id: 'pcpp-s1-fc-006',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'Implementing property setters and deleter',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What are the three components of a full Python property definition?',
    codeSnippet: `class Managed:
    def __init__(self, x):
        self._x = x

    @property
    def x(self):
        return self._x

    @x.setter
    def x(self, val):
        if val < 0:
            raise ValueError("Must be non-negative")
        self._x = val

    @x.deleter
    def x(self):
        del self._x`,
    stdoutExpected: 'Getter (@property), Setter (@x.setter), and Deleter (@x.deleter)',
    explanationTitle: 'The Complete Property Lifecycle',
    explanationText:
      'A full property descriptor provides a getter (`@property`), a setter (`@prop.setter`), and an optional deleter (`@prop.deleter`) to handle `del obj.prop`. All three decorator methods must share the exact same method name.',
    complexityInfo: 'Python Descriptor protocol',
  },
  {
    id: 'pcpp-s1-fc-007',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'Class attribute shadowing by instance attribute',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is printed after assigning an instance variable with the same name as an existing class variable?',
    codeSnippet: `class Config:
    timeout = 30

c1 = Config()
c2 = Config()
c1.timeout = 60
print(c1.timeout, c2.timeout, Config.timeout)`,
    stdoutExpected: '60 30 30',
    explanationTitle: 'Instance Attribute Shadows Class Attribute',
    explanationText:
      'Executing `c1.timeout = 60` writes an entry `"timeout": 60` directly into `c1.__dict__`. It does NOT modify `Config.timeout`. Other instances (`c2`) and the class itself continue to resolve to the class attribute `30`.',
    complexityInfo: 'Namespace separation between instance and class',
  },
  {
    id: 'pcpp-s1-fc-008',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: '__slots__ memory optimization and __dict__ suppression',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is the primary effect of defining __slots__ in a Python class?',
    codeSnippet: `class Point:
    __slots__ = ('x', 'y')
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point(1, 2)
print(hasattr(p, '__dict__'))`,
    stdoutExpected: 'False',
    explanationTitle: '__slots__ Prevents __dict__ Creation',
    explanationText:
      'Defining `__slots__` tells Python not to create a per-instance dynamic dictionary (`__dict__`). Instead, Python allocates fixed descriptors for the listed attribute names. This drastically reduces memory overhead and prevents arbitrary attribute creation.',
    complexityInfo: 'Memory layout and C-level optimization in CPython',
  },
  {
    id: 'pcpp-s1-fc-009',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: '__slots__ restricting dynamic attribute assignment',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What exception is raised when attempting to add an attribute not declared in __slots__?',
    codeSnippet: `class Node:
    __slots__ = ('val', 'next')
    def __init__(self, val):
        self.val = val

n = Node(10)
try:
    n.prev = None
except AttributeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'AttributeError',
    explanationTitle: '__slots__ Disallows Undeclared Attributes',
    explanationText:
      'Because `__slots__` prevents the creation of an instance `__dict__`, attempting to assign any attribute not explicitly listed in `__slots__` raises an `AttributeError: \'Node\' object has no attribute \'prev\'`.',
    complexityInfo: 'Attribute restriction and memory control',
  },
  {
    id: 'pcpp-s1-fc-010',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: '__slots__ inheritance and subclass behavior',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'If a subclass inherits from a class with __slots__ but does NOT declare __slots__ itself, does it have a __dict__?',
    codeSnippet: `class Parent:
    __slots__ = ('a',)

class Child(Parent):
    pass

c = Child()
c.b = 100
print(hasattr(c, '__dict__'))`,
    stdoutExpected: 'True',
    explanationTitle: 'Subclasses Reintroduce __dict__ Unless __slots__ Is Declared',
    explanationText:
      'A subclass of a slotted class does NOT automatically inherit slotted behavior. Unless the subclass explicitly declares its own `__slots__ = ()`, Python automatically generates a `__dict__` for the subclass instances, allowing arbitrary attributes.',
    complexityInfo: 'Inheritance rules with __slots__',
  },
  {
    id: 'pcpp-s1-fc-011',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'Dynamic attribute introspection with getattr(), setattr(), hasattr(), delattr()',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is the output of safe attribute inspection using getattr() with a default fallback?',
    codeSnippet: `class Item:
    def __init__(self, title):
        self.title = title

item = Item("Book")
print(getattr(item, "price", 0.0))`,
    stdoutExpected: '0.0',
    explanationTitle: 'Safe Attribute Access with Default Fallback',
    explanationText:
      '`getattr(obj, name, default)` retrieves the named attribute. If the attribute does not exist, instead of raising an `AttributeError`, it returns the provided default value `0.0`.',
    complexityInfo: 'Dynamic reflection and metaprogramming primitives',
  },
  {
    id: 'pcpp-s1-fc-012',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'Class dictionary inspection: Class.__dict__ vs instance.__dict__',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What type is returned by Class.__dict__ versus instance.__dict__?',
    codeSnippet: `class Sample:
    shared = 1
    def __init__(self):
        self.own = 2

s = Sample()
print(type(s.__dict__).__name__, type(Sample.__dict__).__name__)`,
    stdoutExpected: 'dict mappingproxy',
    explanationTitle: 'Instance dict vs Class mappingproxy',
    explanationText:
      'An instance\'s `__dict__` is a standard mutable `dict`. A class\'s `__dict__` is wrapped inside a `mappingproxy`, an immutable dictionary view that prevents direct modification like `Sample.__dict__["x"] = 1`. Modifying class attributes must be done via `setattr` or `Sample.x = 1`.',
    complexityInfo: 'Internal Python runtime architecture',
  },
  {
    id: 'pcpp-s1-fc-013',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'Attribute resolution order: __getattribute__ vs __getattr__',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'When is __getattr__ called compared to __getattribute__ in Python?',
    codeSnippet: `class Smart:
    def __init__(self):
        self.exists = "yes"

    def __getattr__(self, name):
        return f"fallback_{name}"

s = Smart()
print(s.exists, s.missing)`,
    stdoutExpected: 'yes fallback_missing',
    explanationTitle: '__getattribute__ is Unconditional; __getattr__ is Fallback',
    explanationText:
      '`__getattribute__` is called unconditionally for every attribute lookup. Only if `__getattribute__` raises an `AttributeError` does Python call `__getattr__` as a fallback. For existing attributes, `__getattr__` is completely bypassed.',
    complexityInfo: 'Python attribute lookup mechanism',
  },
  {
    id: 'pcpp-s1-fc-014',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'Preventing infinite recursion in __getattribute__ and __setattr__',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'How must you access attributes inside __getattribute__ to avoid infinite recursion?',
    codeSnippet: `class Safe:
    def __getattribute__(self, name):
        # Must delegate to super()
        return super().__getattribute__(name)`,
    stdoutExpected: 'Delegate via super().__getattribute__(name) or object.__getattribute__(self, name)',
    explanationTitle: 'Avoiding Recursion in Magic Hook Methods',
    explanationText:
      'Accessing `self.any_attr` inside `__getattribute__` recursively invokes `__getattribute__`, resulting in a `RecursionError`. You must call `super().__getattribute__(name)` or `object.__getattribute__(self, name)`. Similarly in `__setattr__`, use `super().__setattr__(name, value)`.',
    complexityInfo: 'Recursion traps in low-level dunders',
  },
  {
    id: 'pcpp-s1-fc-015',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'Callable instances via __call__ method',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What special method allows instances of a class to be invoked like regular functions?',
    codeSnippet: `class Multiplier:
    def __init__(self, factor):
        self.factor = factor

    def __call__(self, val):
        return self.factor * val

double = Multiplier(2)
print(double(10), callable(double))`,
    stdoutExpected: '20 True',
    explanationTitle: 'The __call__ Magic Method',
    explanationText:
      'Implementing `__call__(self, *args, **kwargs)` makes instances of the class callable. `callable(obj)` returns `True`, and invoking `double(10)` translates directly to `double.__call__(10)`.',
    complexityInfo: 'Callable objects, function objects, and stateful closures',
  },
  {
    id: 'pcpp-s1-fc-016',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'Class decorators modifying class definitions',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What does a class decorator take as its argument and what must it return?',
    codeSnippet: `def add_id(cls):
    cls.category_id = 999
    return cls

@add_id
class Product:
    pass

print(Product.category_id)`,
    stdoutExpected: '999',
    explanationTitle: 'Class Decorator Mechanics',
    explanationText:
      'A class decorator is a callable that receives the newly defined class object as its sole argument. It can inspect, modify, monkey-patch, or wrap the class and must return a class object (either the modified class or a wrapper).',
    complexityInfo: 'Metaprogramming alternative to metaclasses',
  },
  {
    id: 'pcpp-s1-fc-017',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: '__init_subclass__ hook for subclass registration',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What built-in class hook introduced in Python 3.6 simplifies subclass customization without metaclasses?',
    codeSnippet: `class PluginBase:
    registry = []

    def __init_subclass__(cls, **kwargs):
        super().__init_subclass__(**kwargs)
        cls.registry.append(cls.__name__)

class AudioPlugin(PluginBase): pass
class VideoPlugin(PluginBase): pass

print(PluginBase.registry)`,
    stdoutExpected: "['AudioPlugin', 'VideoPlugin']",
    explanationTitle: '__init_subclass__ Replaces Metaclasses for Subclass Registration',
    explanationText:
      '`__init_subclass__(cls, **kwargs)` is a class method called whenever the containing class is subclassed. It receives the new subclass `cls` and can validate attributes or register it, avoiding metaclass complexity for simple customizations.',
    complexityInfo: 'PEP 487 - Simpler customisation of class creation',
  },
  {
    id: 'pcpp-s1-fc-018',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'Passing keyword arguments to __init_subclass__',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'How are keyword arguments passed in the class definition header to __init_subclass__?',
    codeSnippet: `class Base:
    def __init_subclass__(cls, role="user", **kwargs):
        super().__init_subclass__(**kwargs)
        cls.role = role

class AdminUser(Base, role="administrator"):
    pass

print(AdminUser.role)`,
    stdoutExpected: 'administrator',
    explanationTitle: 'Class Definition Keyword Arguments',
    explanationText:
      'Keyword arguments passed in the class inheritance header (e.g. `class AdminUser(Base, role="administrator"):`) are forwarded directly to `__init_subclass__`. This allows clean, declarative configuration of subclasses.',
    complexityInfo: 'Class declaration syntax and PEP 487',
  },
  {
    id: 'pcpp-s1-fc-019',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'Bound methods vs unbound functions',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'What is the distinction between accessing a standard method on a class versus on an instance in Python 3?',
    codeSnippet: `class Greeter:
    def greet(self):
        return "hello"

g = Greeter()
print(type(Greeter.greet).__name__, type(g.greet).__name__)`,
    stdoutExpected: 'function method',
    explanationTitle: 'Unbound Function vs Bound Method',
    explanationText:
      'In Python 3, `Greeter.greet` is a regular `function` object taking `self` explicitly. `g.greet` is a `method` object bound to instance `g`, where `self` is automatically passed when invoked.',
    complexityInfo: 'Method descriptor binding mechanism',
  },
  {
    id: 'pcpp-s1-fc-020',
    track: 'pcpp',
    cardType: 'PCPP 1.1 • Advanced OOP',
    topic: 'The type() built-in as a 3-argument class factory',
    category: 'T1: OOP Fundamentals',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.1',
    section: 'Section 1',
    question: 'How do you create a new class dynamically at runtime using the 3-argument form of type()?',
    codeSnippet: `# type(name, bases, namespace_dict)
DynamicClass = type('DynamicClass', (), {'version': 1.0, 'get_ver': lambda self: self.version})
obj = DynamicClass()
print(obj.get_ver(), type(obj).__name__)`,
    stdoutExpected: '1.0 DynamicClass',
    explanationTitle: 'Dynamic Class Creation with type(name, bases, dict)',
    explanationText:
      'The 3-argument invocation `type(name, bases, dict)` dynamically constructs and returns a new class object. `name` is the class name string, `bases` is a tuple of superclasses, and `dict` contains class attributes and methods.',
    complexityInfo: 'Metaprogramming foundation: type is the default metaclass',
  },

  // =========================================================================
  // CHAPTER 1.2: SPECIAL DUNDER METHODS, CUSTOM CONTAINERS & OPERATOR OVERLOADING (Cards 21 to 40)
  // =========================================================================
  {
    id: 'pcpp-s1-fc-021',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: '__new__ vs __init__ object lifecycle',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the role of __new__ compared to __init__ during object instantiation?',
    codeSnippet: `class Demo:
    def __new__(cls, *args, **kwargs):
        print("Creating instance")
        return super().__new__(cls)

    def __init__(self):
        print("Initializing instance")

d = Demo()`,
    stdoutExpected: `Creating instance
Initializing instance`,
    explanationTitle: '__new__ Allocates; __init__ Initializes',
    explanationText:
      '`__new__(cls, ...)` is the actual constructor: it is a static method (no decorator needed) that allocates and returns the new instance of `cls`. `__init__(self, ...)` is an initializer that configures the created instance. `__init__` is only called if `__new__` returns an instance of `cls`.',
    complexityInfo: 'Python object lifecycle',
  },
  {
    id: 'pcpp-s1-fc-022',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Implementing the Singleton pattern using __new__',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is output when checking object identity for two instances of a Singleton class using __new__?',
    codeSnippet: `class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

s1 = Singleton()
s2 = Singleton()
print(s1 is s2)`,
    stdoutExpected: 'True',
    explanationTitle: 'Singleton Pattern via __new__',
    explanationText:
      'By overriding `__new__`, the class caches the first created instance in `cls._instance` and returns that cached reference on subsequent calls. Both `s1` and `s2` refer to the identical object in memory (`s1 is s2` is `True`).',
    complexityInfo: 'Design patterns in Python',
  },
  {
    id: 'pcpp-s1-fc-023',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: '__str__ vs __repr__ and fallback semantics',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'If a class defines __repr__ but does NOT define __str__, what does str(instance) return?',
    codeSnippet: `class Item:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"Item({self.name!r})"

it = Item("Pen")
print(str(it), repr(it))`,
    stdoutExpected: "Item('Pen') Item('Pen')",
    explanationTitle: 'str() Falls Back to __repr__',
    explanationText:
      '`str(obj)` checks for `__str__`. If `__str__` is not defined, it falls back to `__repr__`. However, `repr(obj)` only calls `__repr__` and will NEVER fall back to `__str__`.',
    complexityInfo: 'Representation dunders and debugging best practices',
  },
  {
    id: 'pcpp-s1-fc-024',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Comparison operator overloading: __eq__ and identity fallback',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What is the default behavior of the == operator if a class does NOT define __eq__?',
    codeSnippet: `class Box:
    def __init__(self, size):
        self.size = size

b1 = Box(10)
b2 = Box(10)
print(b1 == b2, b1 is b2)`,
    stdoutExpected: 'False False',
    explanationTitle: 'Default __eq__ Fallback to Identity (is)',
    explanationText:
      'In Python, the default `object.__eq__` implementation tests object identity (`self is other`). Even though `b1` and `b2` have identical attributes, they are different objects in memory, so `b1 == b2` evaluates to `False`.',
    complexityInfo: 'Object model comparison rules',
  },
  {
    id: 'pcpp-s1-fc-025',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Returning NotImplemented from comparison dunders',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'Why should comparison methods return NotImplemented instead of raising a TypeError when unable to compare types?',
    codeSnippet: `class Temperature:
    def __init__(self, celsius):
        self.celsius = celsius

    def __eq__(self, other):
        if not isinstance(other, Temperature):
            return NotImplemented
        return self.celsius == other.celsius`,
    stdoutExpected: 'Allows Python to delegate comparison to other.__eq__(self)',
    explanationTitle: 'NotImplemented Triggers Reflected Operation',
    explanationText:
      'Returning the singleton `NotImplemented` signals to Python that this operand does not support the operation. Python then tries the reflected operation on the second operand (`other.__eq__(self)`). If both return `NotImplemented`, Python falls back to identity or raises `TypeError`.',
    complexityInfo: 'Two-operand protocol and reflected dunders',
  },
  {
    id: 'pcpp-s1-fc-026',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Arithmetic dunders and reflected methods (__radd__)',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'When is __radd__ invoked instead of __add__?',
    codeSnippet: `class Dollar:
    def __init__(self, amount):
        self.amount = amount

    def __add__(self, other):
        return Dollar(self.amount + other)

    def __radd__(self, other):
        return self.__add__(other)

d = Dollar(10)
print((5 + d).amount)`,
    stdoutExpected: '15',
    explanationTitle: 'Reflected Arithmetic Dunders (__radd__)',
    explanationText:
      'When evaluating `5 + d`, Python first calls `int.__add__(5, d)`. Because `int` does not know how to add a `Dollar`, it returns `NotImplemented`. Python then attempts the reflected right-hand method `d.__radd__(5)`.',
    complexityInfo: 'Binary operator resolution order',
  },
  {
    id: 'pcpp-s1-fc-027',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'In-place operator overloading with __iadd__',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What must an in-place arithmetic method like __iadd__ return?',
    codeSnippet: `class Counter:
    def __init__(self, count=0):
        self.count = count

    def __iadd__(self, step):
        self.count += step
        return self  # Crucial!

c = Counter(5)
c += 3
print(c.count)`,
    stdoutExpected: '8',
    explanationTitle: '__iadd__ Must Return self',
    explanationText:
      'In-place operator methods (`__iadd__`, `__isub__`, `__imul__`, etc.) must explicitly return `self`. The target variable `c` is rebound to the result of `c.__iadd__(3)`. If it returned `None`, `c` would become `None`.',
    complexityInfo: 'Reassignment semantics of augmented operators',
  },
  {
    id: 'pcpp-s1-fc-028',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Sequence container protocol: __len__ and __getitem__',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What two methods form the minimal read-only sequence container protocol?',
    codeSnippet: `class Word:
    def __init__(self, text):
        self._text = text

    def __len__(self):
        return len(self._text)

    def __getitem__(self, idx):
        return self._text[idx]

w = Word("PCPP")
print(len(w), w[1], list(w))`,
    stdoutExpected: "4 C ['P', 'C', 'P', 'P']",
    explanationTitle: 'Sequence Protocol Enables Iteration and Indexing',
    explanationText:
      'Implementing `__len__` and `__getitem__` is sufficient to support indexing (`w[1]`), slicing (`w[0:2]`), and iteration (`for char in w:` or `list(w)`), even without explicitly implementing `__iter__`.',
    complexityInfo: 'Python Sequence Protocol duck typing',
  },
  {
    id: 'pcpp-s1-fc-029',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Handling slice objects in __getitem__',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What type of argument is passed to __getitem__ when sliced with obj[start:stop:step]?',
    codeSnippet: `class CustomSeq:
    def __getitem__(self, item):
        return (type(item).__name__, item.start, item.stop, item.step)

s = CustomSeq()
print(s[1:5:2])`,
    stdoutExpected: "('slice', 1, 5, 2)",
    explanationTitle: 'Slice Objects in __getitem__',
    explanationText:
      'When slicing syntax `obj[1:5:2]` is used, Python packages the arguments into a `slice(start, stop, step)` object and passes it to `__getitem__`. Robust containers check `if isinstance(item, slice):`.',
    complexityInfo: 'Slice protocol and custom indexing',
  },
  {
    id: 'pcpp-s1-fc-030',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Mutable sequence protocol: __setitem__ and __delitem__',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'Which magic methods enable item assignment obj[k] = v and deletion del obj[k]?',
    codeSnippet: `class Registry:
    def __init__(self):
        self._store = {}

    def __setitem__(self, key, value):
        self._store[key] = value

    def __delitem__(self, key):
        del self._store[key]

r = Registry()
r['x'] = 100
del r['x']
print(r._store)`,
    stdoutExpected: '{}',
    explanationTitle: '__setitem__ and __delitem__',
    explanationText:
      '`obj[k] = v` invokes `obj.__setitem__(k, v)`. `del obj[k]` invokes `obj.__delitem__(k)`. Together with `__getitem__`, they implement mutable mapping or mutable sequence subscripting.',
    complexityInfo: 'Container and mapping protocols',
  },
  {
    id: 'pcpp-s1-fc-031',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'The in operator and __contains__ method',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'How does Python evaluate item in container when __contains__ is NOT defined?',
    codeSnippet: `class Range5:
    def __getitem__(self, idx):
        if idx >= 5:
            raise IndexError
        return idx * 2

r = Range5()
print(6 in r, 7 in r)`,
    stdoutExpected: 'True False',
    explanationTitle: 'Fallback for the in Operator',
    explanationText:
      'If `__contains__` is defined, Python calls `obj.__contains__(item)`. If `__contains__` is missing, Python falls back to linear search via `__iter__`, and if that is missing, iterates by calling `__getitem__` starting at index 0 until `IndexError`.',
    complexityInfo: 'Membership test fallback chain',
  },
  {
    id: 'pcpp-s1-fc-032',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Iterator protocol: __iter__ and __next__',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What exception must __next__ raise to terminate iteration?',
    codeSnippet: `class CountDown:
    def __init__(self, count):
        self.count = count

    def __iter__(self):
        return self

    def __next__(self):
        if self.count <= 0:
            raise StopIteration
        self.count -= 1
        return self.count + 1

print(list(CountDown(3)))`,
    stdoutExpected: '[3, 2, 1]',
    explanationTitle: 'The Iterator Protocol and StopIteration',
    explanationText:
      'An iterable provides `__iter__()` returning an iterator object. An iterator must provide `__next__()` returning the next item or raising `StopIteration` when the sequence is exhausted. It must also provide `__iter__()` returning `self`.',
    complexityInfo: 'Python Iterator Protocol',
  },
  {
    id: 'pcpp-s1-fc-033',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Hashability rules: __hash__ and __eq__ correlation',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What happens to __hash__ if a class defines __eq__ but does NOT define __hash__?',
    codeSnippet: `class Person:
    def __init__(self, name):
        self.name = name

    def __eq__(self, other):
        return isinstance(other, Person) and self.name == other.name

p = Person("Alice")
try:
    s = {p}
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'Overriding __eq__ Sets __hash__ = None',
    explanationText:
      'If a class overrides `__eq__` without defining `__hash__`, Python automatically sets `__hash__ = None`, making instances unhashable (`TypeError: unhashable type`). This enforces the invariant: if two objects compare equal, their hash codes must be equal.',
    complexityInfo: 'Python Hashability and dictionary key invariants',
  },
  {
    id: 'pcpp-s1-fc-034',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Properly implementing __hash__ for immutable classes',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'How do you correctly implement __hash__ using a tuple of immutable fields?',
    codeSnippet: `class Coordinate:
    def __init__(self, x, y):
        self._x = x
        self._y = y

    def __eq__(self, other):
        return isinstance(other, Coordinate) and (self._x, self._y) == (other._x, other._y)

    def __hash__(self):
        return hash((self._x, self._y))

c1 = Coordinate(1, 2)
c2 = Coordinate(1, 2)
print(len({c1, c2}))`,
    stdoutExpected: '1',
    explanationTitle: 'Hashing a Tuple of Attributes',
    explanationText:
      'A hashable object must have a consistent hash value during its lifetime. Hashing a tuple of its immutable attributes (`hash((self._x, self._y))`) ensures that equal objects always produce identical hash values, allowing sets and dicts to deduplicate them.',
    complexityInfo: 'Hash contract and container efficiency',
  },
  {
    id: 'pcpp-s1-fc-035',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'The context manager protocol: __enter__ and __exit__',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What four arguments does __exit__ receive?',
    codeSnippet: `class ManagedResource:
    def __enter__(self):
        return "RESOURCE"

    def __exit__(self, exc_type, exc_val, exc_tb):
        return False  # Do not suppress exceptions

with ManagedResource() as r:
    print(r)`,
    stdoutExpected: 'RESOURCE',
    explanationTitle: 'The Context Manager Protocol',
    explanationText:
      '`__enter__(self)` initializes and returns the context resource bound by `as`. `__exit__(self, exc_type, exc_val, exc_tb)` receives the exception class, exception instance, and traceback if an exception was raised inside the `with` block (or `None, None, None` if clean exit).',
    complexityInfo: 'Context management protocol (with statement)',
  },
  {
    id: 'pcpp-s1-fc-036',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Suppressing exceptions in __exit__ by returning True',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What happens if __exit__ returns True when an exception occurs inside the with block?',
    codeSnippet: `class Suppressor:
    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        return True  # Suppress any exception

with Suppressor():
    x = 1 / 0
print("Continued cleanly")`,
    stdoutExpected: 'Continued cleanly',
    explanationTitle: 'Returning True in __exit__ Suppresses Exceptions',
    explanationText:
      'If an exception occurs within a `with` block and `__exit__` returns a truthy value (`True`), the exception is swallowed and execution continues normally directly after the `with` statement.',
    complexityInfo: 'Exception suppression control flow',
  },
  {
    id: 'pcpp-s1-fc-037',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Contextlib and the @contextmanager generator decorator',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'How does @contextmanager transform a generator into a context manager?',
    codeSnippet: `from contextlib import contextmanager

@contextmanager
def tag(name):
    print(f"<{name}>")
    yield
    print(f"</{name}>")

with tag("b"):
    print("bold text")`,
    stdoutExpected: `<b>
bold text
</b>`,
    explanationTitle: '@contextmanager Generator Pattern',
    explanationText:
      'Code before `yield` runs in `__enter__`. The yielded value is bound to the `as` variable. Code after `yield` executes in `__exit__`. If an exception occurs in the with block, it is re-raised at the point of `yield`.',
    complexityInfo: 'Standard library contextlib utility',
  },
  {
    id: 'pcpp-s1-fc-038',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Ordering comparison dunders and @functools.total_ordering',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What minimum methods must a class define to use @total_ordering?',
    codeSnippet: `from functools import total_ordering

@total_ordering
class Student:
    def __init__(self, grade):
        self.grade = grade

    def __eq__(self, other):
        return self.grade == other.grade

    def __lt__(self, other):
        return self.grade < other.grade

s1 = Student(85)
s2 = Student(90)
print(s1 <= s2, s1 > s2)`,
    stdoutExpected: 'True False',
    explanationTitle: 'Total Ordering Decorator',
    explanationText:
      '`@total_ordering` requires `__eq__` and any one of the other comparison operators (`__lt__`, `__le__`, `__gt__`, or `__ge__`). It automatically derives and generates the remaining comparison methods.',
    complexityInfo: 'Standard library functools utility',
  },
  {
    id: 'pcpp-s1-fc-039',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Truthiness and the __bool__ vs __len__ dunder methods',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'How does bool(obj) resolve truthiness if __bool__ is NOT defined on the class?',
    codeSnippet: `class Basket:
    def __init__(self, items):
        self.items = items

    def __len__(self):
        return len(self.items)

b_empty = Basket([])
b_full = Basket(["apple"])
print(bool(b_empty), bool(b_full))`,
    stdoutExpected: 'False True',
    explanationTitle: 'Truthiness Resolution: __bool__ Falls Back to __len__',
    explanationText:
      'Python first looks for `__bool__()`. If not found, it checks `__len__()`, considering the object truthy if `len > 0` and falsey if `len == 0`. If neither exists, all instances of user-defined classes are considered `True`.',
    complexityInfo: 'Boolean value resolution protocol',
  },
  {
    id: 'pcpp-s1-fc-040',
    track: 'pcpp',
    cardType: 'PCPP 1.2 • Dunder Methods',
    topic: 'Object format specifications with __format__',
    category: 'T2: Dunders & Protocols',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.2',
    section: 'Section 1',
    question: 'What special method is called by format(obj, spec) or f"{obj:spec}"?',
    codeSnippet:
      'class Currency:\n' +
      '    def __init__(self, amount):\n' +
      '        self.amount = amount\n\n' +
      '    def __format__(self, format_spec):\n' +
      '        if format_spec == "usd":\n' +
      '            return f"${self.amount:,.2f}"\n' +
      '        return str(self.amount)\n\n' +
      'c = Currency(1250.5)\n' +
      'print(f"{c:usd}")',
    stdoutExpected: '$1,250.50',
    explanationTitle: 'Custom Formatting with __format__',
    explanationText:
      'The `__format__(self, format_spec)` method receives the format specification string following the colon in f-strings or `.format()`. It must return a string representing the formatted object.',
    complexityInfo: 'String formatting protocol in Python',
  },
];
