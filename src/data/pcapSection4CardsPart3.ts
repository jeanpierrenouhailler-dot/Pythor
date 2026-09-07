import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 4: OBJECT-ORIENTED PROGRAMMING (OOP) (Part 3: Cards 71 to 100)
 * - Chapter 4.4: Methods, Constructor __init__, and Special Dunder Methods (Part 2: Cards 71-80)
 * - Chapter 4.5: Inheritance, Polymorphism & Method Resolution Order (MRO) (Cards 81-100)
 */
export const section4CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.4: METHODS, CONSTRUCTOR __init__, AND SPECIAL DUNDERS (Part 2: Cards 71 to 80)
  // =========================================================================
  {
    id: 'pcap-s4-fc-071',
    cardType: 'PCAP 4.4 • Operator Overloading',
    topic: '__add__ for addition (+) operator',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do you overload the addition operator `+` for a custom class in Python?',
    codeSnippet: `class Vector2D:
    def __init__(self, x, y): self.x, self.y = x, y
    def __add__(self, other):
        return Vector2D(self.x + other.x, self.y + other.y)
    def __str__(self):
        return f"({self.x}, {self.y})"

v1 = Vector2D(1, 2)
v2 = Vector2D(3, 4)
print(v1 + v2)`,
    stdoutExpected: '(4, 6)',
    explanationTitle: '__add__ Operator Overloading',
    explanationText:
      'Implementing `__add__(self, other)` instructs Python to invoke this method whenever the `+` operator is used with an instance of `Vector2D` on the left-hand side (`v1 + v2` -> `v1.__add__(v2)`).',
    complexityInfo: 'Binary operator protocol',
  },
  {
    id: 'pcap-s4-fc-072',
    cardType: 'PCAP 4.4 • Operator Overloading',
    topic: '__sub__ for subtraction (-) operator',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What special method overloads the subtraction `-` operator?',
    codeSnippet: `class Balance:
    def __init__(self, amount): self.amount = amount
    def __sub__(self, other):
        return Balance(self.amount - other.amount)

b1 = Balance(100)
b2 = Balance(35)
b3 = b1 - b2
print(b3.amount)`,
    stdoutExpected: '65',
    explanationTitle: '__sub__ Special Method',
    explanationText:
      'The `__sub__(self, other)` dunder method defines behavior for the binary subtraction operator `-`.',
    complexityInfo: 'Binary arithmetic overloading',
  },
  {
    id: 'pcap-s4-fc-073',
    cardType: 'PCAP 4.4 • Operator Overloading',
    topic: '__mul__ for multiplication (*) operator',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What special method overloads the multiplication `*` operator?',
    codeSnippet: `class Multiplier:
    def __init__(self, val): self.val = val
    def __mul__(self, factor):
        return self.val * factor

m = Multiplier("PCAP-")
print(m * 3)`,
    stdoutExpected: 'PCAP-PCAP-PCAP-',
    explanationTitle: '__mul__ Special Method',
    explanationText:
      '`__mul__(self, factor)` overloads the `*` operator, allowing custom multiplication behavior against scalars or other objects.',
    complexityInfo: 'Binary multiplication protocol',
  },
  {
    id: 'pcap-s4-fc-074',
    cardType: 'PCAP 4.4 • Operator Overloading',
    topic: '__eq__ for equality (==) comparison',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do you define value equality for instances using `__eq__`?',
    codeSnippet: `class Student:
    def __init__(self, sid): self.sid = sid
    def __eq__(self, other):
        return isinstance(other, Student) and self.sid == other.sid

s1 = Student(42)
s2 = Student(42)
s3 = Student(99)
print(s1 == s2, s1 == s3, s1 is s2)`,
    stdoutExpected: 'True False False',
    explanationTitle: '__eq__ Equality Overload',
    explanationText:
      'Without `__eq__`, Python tests object identity. Overriding `__eq__(self, other)` allows comparing internal attribute values, making `s1 == s2` return True even though they are distinct instances in memory (`s1 is s2` is False).',
    complexityInfo: 'Value vs reference equality',
  },
  {
    id: 'pcap-s4-fc-075',
    cardType: 'PCAP 4.4 • Operator Overloading',
    topic: '__lt__ for less-than (<) and sorting',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What special method enables `<` comparison and built-in list sorting with `sorted()`?',
    codeSnippet: `class Task:
    def __init__(self, priority, name):
        self.priority, self.name = priority, name
    def __lt__(self, other):
        return self.priority < other.priority

tasks = [Task(3, "Low"), Task(1, "High"), Task(2, "Mid")]
ordered = sorted(tasks)
print([t.name for t in ordered])`,
    stdoutExpected: "['High', 'Mid', 'Low']",
    explanationTitle: '__lt__ Ordering and Sorting',
    explanationText:
      '`__lt__(self, other)` overloads the less-than `<` operator. Python’s `sort()` and `sorted()` functions rely on `__lt__` to order elements in collections.',
    complexityInfo: 'Relational comparison protocol',
  },
  {
    id: 'pcap-s4-fc-076',
    cardType: 'PCAP 4.4 • Operator Overloading',
    topic: '__len__ for len() function support',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What special method enables `len(obj)`, and what constraint exists on its return value?',
    codeSnippet: `class Deck:
    def __init__(self): self.cards = ["A", "K", "Q", "J"]
    def __len__(self):
        return len(self.cards)

d = Deck()
print(len(d))`,
    stdoutExpected: '4',
    explanationTitle: '__len__ Container Protocol',
    explanationText:
      '`__len__(self)` is invoked by the `len()` built-in. It MUST return a non-negative integer (>= 0). Returning a negative number or a non-integer raises a `ValueError` or `TypeError`.',
    complexityInfo: 'Non-negative integer requirement',
  },
  {
    id: 'pcap-s4-fc-077',
    cardType: 'PCAP 4.4 • Operator Overloading',
    topic: '__getitem__ for square bracket indexing',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What special method overloads indexing notation `obj[key]`?',
    codeSnippet: `class Register:
    def __init__(self):
        self._data = {"alpha": 100, "beta": 200}
    def __getitem__(self, key):
        return self._data[key]

r = Register()
print(r["alpha"], r["beta"])`,
    stdoutExpected: '100 200',
    explanationTitle: '__getitem__ Indexing Protocol',
    explanationText:
      '`__getitem__(self, key)` allows an object to implement subscription indexing `obj[key]`. For sequences, `key` is typically an integer or slice; for mappings, it can be any hashable key.',
    complexityInfo: 'Subscripting emulation',
  },
  {
    id: 'pcap-s4-fc-078',
    cardType: 'PCAP 4.4 • Special Attributes',
    topic: '__module__ special attribute on classes',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What information is stored in the `__module__` attribute of a class?',
    codeSnippet: `class Example: pass
print(Example.__module__)`,
    stdoutExpected: '__main__',
    explanationTitle: '__module__ Attribute',
    explanationText:
      '`ClassName.__module__` contains a string with the name of the module in which the class was defined. If the class is declared in the top-level running script, it evaluates to `"__main__"`.',
    complexityInfo: 'Class introspection metadata',
  },
  {
    id: 'pcap-s4-fc-079',
    cardType: 'PCAP 4.4 • Special Attributes',
    topic: '__name__ attribute exists on classes, NOT instances',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'Does an instance have a `__name__` attribute, or does it exist only on the class?',
    codeSnippet: `class Widget: pass
w = Widget()

print(Widget.__name__)
try:
    print(w.__name__)
except AttributeError as err:
    print(type(err).__name__)`,
    stdoutExpected: `Widget
AttributeError`,
    explanationTitle: '__name__ Belongs to Class Objects',
    explanationText:
      '`__name__` is a string attribute on the class object itself representing its identifier (`"Widget"`). Direct instances do not have a `__name__` attribute (to find it, use `type(w).__name__`).',
    complexityInfo: 'Common PCAP trick question',
  },
  {
    id: 'pcap-s4-fc-080',
    cardType: 'PCAP 4.4 • Special Attributes',
    topic: '__bases__ special attribute on classes',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What data structure and content does `ClassName.__bases__` return?',
    codeSnippet: `class A: pass
class B: pass
class C(A, B): pass

print([cls.__name__ for cls in C.__bases__])
print([cls.__name__ for cls in A.__bases__])`,
    stdoutExpected: `['A', 'B']
['object']`,
    explanationTitle: '__bases__ Direct Ancestor Tuple',
    explanationText:
      '`ClassName.__bases__` returns a tuple containing the direct base (parent) classes of that class. Classes with no explicit base inherit directly from `object`.',
    complexityInfo: 'Tuple of direct superclasses',
  },

  // =========================================================================
  // CHAPTER 4.5: INHERITANCE, POLYMORPHISM & MRO (Cards 81 to 100)
  // =========================================================================
  {
    id: 'pcap-s4-fc-081',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'Single inheritance syntax',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What is the syntax for single inheritance, and what does the subclass inherit?',
    codeSnippet: `class Animal:
    def speak(self): return "sound"

class Cat(Animal):
    pass

c = Cat()
print(c.speak())
print(isinstance(c, Animal))`,
    stdoutExpected: `sound
True`,
    explanationTitle: 'Subclassing Syntax',
    explanationText:
      'Writing `class Child(Parent):` establishes single inheritance. The `Child` subclass inherits all methods, class attributes, and behaviors from `Parent`.',
    complexityInfo: 'Inheritance hierarchy establishment',
  },
  {
    id: 'pcap-s4-fc-082',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'The root superclass: object',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What is the ultimate root base class of all classes in Python 3?',
    codeSnippet: `class AnyClass: pass
print(issubclass(AnyClass, object))
print(issubclass(int, object))
print(issubclass(str, object))`,
    stdoutExpected: `True
True
True`,
    explanationTitle: 'object as Ultimate Root',
    explanationText:
      'In Python 3, every class automatically inherits from built-in `object`. Writing `class A:` is completely identical to writing `class A(object):`.',
    complexityInfo: 'New-style class hierarchy root',
  },
  {
    id: 'pcap-s4-fc-083',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'object.__bases__ is empty tuple',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What is the value of `object.__bases__` at the top of the inheritance tree?',
    codeSnippet: `print(object.__bases__)`,
    stdoutExpected: '()',
    explanationTitle: 'Root of Inheritance Has No Bases',
    explanationText:
      '`object` is the only class in Python that has no base classes. Its `__bases__` attribute is an empty tuple `()`.',
    complexityInfo: 'Termination of inheritance walk',
  },
  {
    id: 'pcap-s4-fc-084',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'Method overriding in subclasses',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What happens when a subclass defines a method with the identical name and signature as its superclass?',
    codeSnippet: `class Vehicle:
    def start(self): return "Generic vehicle started"

class ElectricCar(Vehicle):
    def start(self): return "Silent electric drive engaged"

v = Vehicle()
e = ElectricCar()
print(v.start())
print(e.start())`,
    stdoutExpected: `Generic vehicle started
Silent electric drive engaged`,
    explanationTitle: 'Method Overriding Polymorphism',
    explanationText:
      'The subclass implementation overrides (replaces) the inherited version. When invoked on an instance of the subclass, Python resolves the method on the subclass first.',
    complexityInfo: 'Dynamic dispatch over MRO',
  },
  {
    id: 'pcap-s4-fc-085',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'Using super() to call overridden methods',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How does `super()` delegate calls to parent methods without hardcoding the parent class name?',
    codeSnippet: `class Base:
    def ping(self): return "Base"

class Child(Base):
    def ping(self):
        return f"{super().ping()} -> Child"

print(Child().ping())`,
    stdoutExpected: 'Base -> Child',
    explanationTitle: 'super() Proxy Object',
    explanationText:
      '`super()` returns a proxy object that delegates method calls to a parent or sibling class along the MRO, promoting maintainability and loose coupling.',
    complexityInfo: 'Zero-argument super() in Python 3',
  },
  {
    id: 'pcap-s4-fc-086',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'Calling super().__init__() in subclass constructor',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.5',
    section: 'Section 4',
    question: 'Why and how should a subclass constructor invoke the superclass initializer?',
    codeSnippet: `class Person:
    def __init__(self, name):
        self.name = name

class Employee(Person):
    def __init__(self, name, emp_id):
        super().__init__(name)
        self.emp_id = emp_id

e = Employee("Sarah", "E-404")
print(e.name, e.emp_id)`,
    stdoutExpected: 'Sarah E-404',
    explanationTitle: 'Superclass Initializer Chaining',
    explanationText:
      'Overriding `__init__` in a subclass suppresses automatic invocation of the parent’s `__init__`. Calling `super().__init__(...)` ensures that attributes defined in base classes are properly initialized.',
    complexityInfo: 'Constructor chaining best practice',
  },
  {
    id: 'pcap-s4-fc-087',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'Explicit superclass method call: Super.method(self)',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What is the syntax to explicitly invoke a superclass method by its class name, and why must `self` be passed?',
    codeSnippet: `class Alpha:
    def greet(self): return "Hello from Alpha"

class Beta(Alpha):
    def greet(self):
        return Alpha.greet(self) + " and Beta"

print(Beta().greet())`,
    stdoutExpected: 'Hello from Alpha and Beta',
    explanationTitle: 'Explicit Unbound Method Invocation',
    explanationText:
      'Calling `Alpha.greet(self)` invokes the unbound method on `Alpha`, requiring `self` to be explicitly passed as the instance argument. While functional, `super()` is preferred for cooperative multiple inheritance.',
    complexityInfo: 'Explicit static dispatch',
  },
  {
    id: 'pcap-s4-fc-088',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'isinstance() with inheritance chain traversal',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'Does `isinstance(obj, Class)` return True for indirect ancestors in the inheritance tree?',
    codeSnippet: `class A: pass
class B(A): pass
class C(B): pass

c = C()
print(isinstance(c, C))
print(isinstance(c, B))
print(isinstance(c, A))
print(isinstance(c, object))`,
    stdoutExpected: `True
True
True
True`,
    explanationTitle: 'Recursive Ancestor Verification',
    explanationText:
      '`isinstance(obj, Class)` walks the entire inheritance hierarchy upward. An instance of a derived class is considered an instance of all its base classes.',
    complexityInfo: 'O(hierarchy depth) search',
  },
  {
    id: 'pcap-s4-fc-089',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'isinstance() with tuple of candidate classes',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How can `isinstance()` check if an object belongs to any one of several allowed classes in a single call?',
    codeSnippet: `val = 42
print(isinstance(val, (str, float, int)))
print(isinstance("PCAP", (int, list)))`,
    stdoutExpected: `True
False`,
    explanationTitle: 'Tuple Parameter for isinstance',
    explanationText:
      'Passing a tuple of classes `(ClassA, ClassB, ...)` to `isinstance(obj, class_tuple)` returns True if `obj` is an instance of ANY of the classes in the tuple (or their subclasses).',
    complexityInfo: 'Short-circuit evaluation across tuple',
  },
  {
    id: 'pcap-s4-fc-090',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'issubclass() vs isinstance()',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What error occurs if you pass an object instance rather than a class as the first argument to `issubclass()`?',
    codeSnippet: `class Shape: pass
class Polygon(Shape): pass

p = Polygon()
print(issubclass(Polygon, Shape))
try:
    print(issubclass(p, Shape))
except TypeError as err:
    print(type(err).__name__)`,
    stdoutExpected: `True
TypeError`,
    explanationTitle: 'TypeError: issubclass() Arg 1 Must Be a Class',
    explanationText:
      '`issubclass(class1, class2)` requires both arguments to be class objects. Passing an instance `p` raises `TypeError: issubclass() arg 1 must be a class`.',
    complexityInfo: 'Frequent PCAP trap question',
  },
  {
    id: 'pcap-s4-fc-091',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'Reflexivity of issubclass: issubclass(A, A)',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What does `issubclass(A, A)` return in Python?',
    codeSnippet: `class Device: pass
print(issubclass(Device, Device))
print(issubclass(int, int))`,
    stdoutExpected: `True
True`,
    explanationTitle: 'issubclass Reflexivity',
    explanationText:
      'In Python, every class is considered a subclass of itself. Thus `issubclass(A, A)` is always `True`.',
    complexityInfo: 'Mathematical reflexivity property',
  },
  {
    id: 'pcap-s4-fc-092',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'Multiple inheritance syntax',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What is the syntax for multiple inheritance in Python?',
    codeSnippet: `class Flyable:
    def fly(self): return "Flying"

class Swimmable:
    def swim(self): return "Swimming"

class Duck(Flyable, Swimmable):
    pass

d = Duck()
print(d.fly(), d.swim())`,
    stdoutExpected: 'Flying Swimming',
    explanationTitle: 'Multiple Superclass Declaration',
    explanationText:
      'Multiple inheritance is declared by separating parent class names with commas inside parentheses: `class Child(Base1, Base2):`. The child class inherits attributes and methods from all listed parents.',
    complexityInfo: 'Multiple inheritance support',
  },
  {
    id: 'pcap-s4-fc-093',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'Method Resolution Order (MRO) definition',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What is Method Resolution Order (MRO) and why is it essential in multiple inheritance?',
    codeSnippet: `# MRO is the deterministic path Python follows to resolve attributes/methods
class A:
    def who(self): return "A"
class B:
    def who(self): return "B"
class C(A, B):
    pass

print(C().who())`,
    stdoutExpected: 'A',
    explanationTitle: 'Deterministic Method Dispatch Order',
    explanationText:
      'Method Resolution Order (MRO) defines the exact order in which Python traverses classes in an inheritance hierarchy to resolve method and attribute lookups.',
    complexityInfo: 'C3 Linearization algorithm',
  },
  {
    id: 'pcap-s4-fc-094',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'Inspecting MRO with __mro__ vs mro()',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What are the two ways to inspect a class’s MRO, and what types do they return?',
    codeSnippet: `class Top: pass
class Bottom(Top): pass

print(type(Bottom.__mro__).__name__)
print(type(Bottom.mro()).__name__)
print([cls.__name__ for cls in Bottom.__mro__])`,
    stdoutExpected: `tuple
list
['Bottom', 'Top', 'object']`,
    explanationTitle: '__mro__ (tuple) vs mro() (list)',
    explanationText:
      '`ClassName.__mro__` returns the MRO sequence as a `tuple`. The class method `ClassName.mro()` returns the exact same sequence as a `list`.',
    complexityInfo: 'Tuple vs list return types',
  },
  {
    id: 'pcap-s4-fc-095',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'Left-to-right precedence in multiple inheritance',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.5',
    section: 'Section 4',
    question: 'How does the order of parent classes in `class C(A, B)` dictate method resolution?',
    codeSnippet: `class First:
    def identify(self): return "First"

class Second:
    def identify(self): return "Second"

class Order1(First, Second): pass
class Order2(Second, First): pass

print(Order1().identify())
print(Order2().identify())`,
    stdoutExpected: `First
Second`,
    explanationTitle: 'Left-to-Right Base Class Priority',
    explanationText:
      'Python searches base classes in the order they are listed in the class header (left-to-right). In `Order1(First, Second)`, `First` takes precedence over `Second`.',
    complexityInfo: 'Header order dictates resolution priority',
  },
  {
    id: 'pcap-s4-fc-096',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'The Diamond Problem and C3 Linearization',
    category: 'T2: Output',
    difficulty: 'Advanced',
    factor: '2.3',
    intervalDays: 3,
    chapter: '4.5',
    section: 'Section 4',
    question: 'In a diamond hierarchy `class D(B, C)` where both B and C inherit from A, what is the exact MRO?',
    codeSnippet: `class A:
    def ping(self): return "A"
class B(A):
    pass
class C(A):
    def ping(self): return "C"
class D(B, C):
    pass

print(D().ping())
print([cls.__name__ for cls in D.__mro__])`,
    stdoutExpected: `C
['D', 'B', 'C', 'A', 'object']`,
    explanationTitle: 'C3 Linearization Resolves Diamonds',
    explanationText:
      'Under Python’s C3 Linearization algorithm, a superclass (`A`) is checked only AFTER all its subclasses (`B` and `C`) have been checked. Therefore, MRO is `[D, B, C, A, object]`, allowing `C.ping()` to be found before `A.ping()`.',
    complexityInfo: 'Classic diamond problem solution',
  },
  {
    id: 'pcap-s4-fc-097',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'Inconsistent MRO raises TypeError',
    category: 'T4: Bugs',
    difficulty: 'Advanced',
    factor: '2.3',
    intervalDays: 3,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What exception is raised if an inheritance structure produces an ambiguous or conflicting MRO?',
    codeSnippet: `class A: pass
class B: pass
class X(A, B): pass
class Y(B, A): pass

try:
    class Z(X, Y): pass
except TypeError as err:
    print(type(err).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'TypeError: Inconsistent MRO',
    explanationText:
      'Because `X` requires `A` before `B`, but `Y` requires `B` before `A`, no monotonic linearization is mathematically possible. Python aborts class creation with `TypeError: Cannot create a consistent method resolution order (MRO)`.',
    complexityInfo: 'C3 monotonic consistency enforcement',
  },
  {
    id: 'pcap-s4-fc-098',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'Polymorphism in Python',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What is polymorphism in Python, and how is it demonstrated?',
    codeSnippet: `class Square:
    def draw(self): return "Drawing Square"
class Circle:
    def draw(self): return "Drawing Circle"

shapes = [Square(), Circle()]
for s in shapes:
    print(s.draw())`,
    stdoutExpected: `Drawing Square
Drawing Circle`,
    explanationTitle: 'Polymorphic Invocation',
    explanationText:
      'Polymorphism allows different classes to implement methods with the same name. Callers can treat heterogeneous objects uniformly through a common interface without knowing the concrete class.',
    complexityInfo: 'Core OOP concept / duck typing',
  },
  {
    id: 'pcap-s4-fc-099',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'super() follows MRO, not immediate parent',
    category: 'T2: Output',
    difficulty: 'Advanced',
    factor: '2.3',
    intervalDays: 3,
    chapter: '4.5',
    section: 'Section 4',
    question: 'In multiple inheritance, does `super()` call the lexical parent or the next class in the MRO?',
    codeSnippet: `class Root:
    def action(self): return "Root"

class Left(Root):
    def action(self):
        return f"Left -> {super().action()}"

class Right(Root):
    def action(self):
        return f"Right -> {super().action()}"

class Combined(Left, Right):
    def action(self):
        return f"Combined -> {super().action()}"

print(Combined().action())`,
    stdoutExpected: 'Combined -> Left -> Right -> Root',
    explanationTitle: 'super() Traverses Dynamic MRO',
    explanationText:
      'Inside `Left`, `super().action()` calls `Right.action()` rather than `Root.action()`. In Python, `super()` does not simply refer to the parent class; it dynamically dispatches to the NEXT class in the active instance’s MRO.',
    complexityInfo: 'Cooperative multiple inheritance dispatch',
  },
  {
    id: 'pcap-s4-fc-100',
    cardType: 'PCAP 4.5 • Inheritance',
    topic: 'Composition vs Inheritance ("has-a" vs "is-a")',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.5',
    section: 'Section 4',
    question: 'What is the distinction between Composition ("has-a") and Inheritance ("is-a") in OOP design?',
    codeSnippet: `class Engine:
    def start(self): return "V8 Roar"

class Car:  # Composition: Car HAS-A Engine
    def __init__(self):
        self.engine = Engine()
    def drive(self):
        return f"Car moving: {self.engine.start()}"

c = Car()
print(c.drive())`,
    stdoutExpected: 'Car moving: V8 Roar',
    explanationTitle: 'Composition over Inheritance Principle',
    explanationText:
      'Inheritance models an "is-a" relationship (e.g. `Dog is an Animal`). Composition models a "has-a" relationship by embedding instances of other classes as attributes (e.g. `Car has an Engine`), providing greater flexibility and lower coupling.',
    complexityInfo: 'Fundamental OOP architecture guideline',
  },
];
