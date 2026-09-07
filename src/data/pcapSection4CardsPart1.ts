import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 4: OBJECT-ORIENTED PROGRAMMING (OOP) (Part 1: Cards 1 to 40)
 * - Chapter 4.1: Understand the Object-Oriented Approach (Cards 1-20)
 * - Chapter 4.2: Instance Variables vs Class Variables (Cards 21-40)
 */
export const section4CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.1: UNDERSTAND THE OBJECT-ORIENTED APPROACH (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pcap-s4-fc-001',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Procedural vs Object-Oriented paradigm',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'How does the Object-Oriented paradigm fundamentally differ from the Procedural paradigm in Python?',
    codeSnippet: `# Procedural: Data and functions are separate
data = {"balance": 100}
def deposit(acc, amount): acc["balance"] += amount

# OOP: Data and operations are bundled together in an object
class Account:
    def __init__(self, balance): self.balance = balance
    def deposit(self, amount): self.balance += amount`,
    stdoutExpected: 'OOP bundles state and behavior into cohesive objects',
    explanationTitle: 'Paradigm Shift: State + Behavior Bundling',
    explanationText:
      'In procedural programming, data structures and functions are decoupled. In OOP, classes combine internal state (attributes) with behaviors (methods) into autonomous instances, promoting modularity and encapsulation.',
    complexityInfo: 'Fundamental concept tested on PCAP',
  },
  {
    id: 'pcap-s4-fc-002',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Class definition syntax and pass keyword',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is the minimal valid class definition in Python?',
    codeSnippet: `class EmptyClass:
    pass

obj = EmptyClass()
print(type(obj).__name__)`,
    stdoutExpected: 'EmptyClass',
    explanationTitle: 'The Minimal Class',
    explanationText:
      'A class block requires at least one statement. The `pass` keyword acts as a null operation placeholder, creating a valid, instantiable empty class.',
    complexityInfo: 'Grammar rule: indented block requirement',
  },
  {
    id: 'pcap-s4-fc-003',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Class vs Instance distinction',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is the relationship between a Class and an Instance in Python?',
    codeSnippet: `class Blueprint: pass

inst1 = Blueprint()
inst2 = Blueprint()

print(isinstance(inst1, Blueprint), isinstance(inst2, Blueprint))
print(inst1 is inst2)`,
    stdoutExpected: `True True
False`,
    explanationTitle: 'Blueprint vs Object In Memory',
    explanationText:
      'A class is a blueprint or template. An instance is a concrete manifestation created from that class with its own distinct identity and memory space.',
    complexityInfo: 'Identity vs Type verification',
  },
  {
    id: 'pcap-s4-fc-004',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Object identity vs Object equality',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is the difference between `is` and `==` when comparing two freshly created instances of an empty class?',
    codeSnippet: `class Node: pass
a = Node()
b = Node()
print(a == b, a is b)`,
    stdoutExpected: 'False False',
    explanationTitle: 'Default Equality Tests Identity',
    explanationText:
      'Without an overridden `__eq__` method, Python’s `==` operator on custom class instances falls back to comparing object identities (memory addresses). Since `a` and `b` are distinct instances, both `==` and `is` return False.',
    complexityInfo: 'Default identity comparison semantics',
  },
  {
    id: 'pcap-s4-fc-005',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Dynamic attribute creation on instances',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.1',
    section: 'Section 4',
    question: 'Can you dynamically assign a new attribute to an instance that was not defined in the class body?',
    codeSnippet: `class Item: pass

x = Item()
x.price = 29.99
x.name = "Python Guide"

print(f"{x.name}: " + "$" + str(x.price))`,
    stdoutExpected: 'Python Guide: $29.99',
    explanationTitle: 'Dynamic Attribute Binding',
    explanationText:
      'Python instances have open namespaces (stored in `__dict__`). You can dynamically attach arbitrary new attributes to an instance at any time during execution without modifying the class.',
    complexityInfo: 'Dynamic typing in Python objects',
  },
  {
    id: 'pcap-s4-fc-006',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Accessing an undefined attribute raises AttributeError',
    category: 'T4: Bugs',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What specific exception is raised when reading an attribute that has not been defined on the instance or class?',
    codeSnippet: `class Box: pass
b = Box()
try:
    print(b.volume)
except AttributeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'AttributeError',
    explanationTitle: 'AttributeError Exception',
    explanationText:
      'When an attribute lookup fails on both the instance dictionary and the class hierarchy, Python raises an `AttributeError`.',
    complexityInfo: 'Core Python exception hierarchy',
  },
  {
    id: 'pcap-s4-fc-007',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Classes are first-class citizens',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What does it mean that classes are first-class objects in Python?',
    codeSnippet: `class Vehicle: pass

def factory(cls):
    return cls()

v = factory(Vehicle)
print(type(v).__name__)`,
    stdoutExpected: 'Vehicle',
    explanationTitle: 'Classes as First-Class Objects',
    explanationText:
      'In Python, classes are themselves instances of metaclass `type`. They can be assigned to variables, passed as arguments into functions, returned from functions, and inspected at runtime.',
    complexityInfo: 'Metaclass and first-class types',
  },
  {
    id: 'pcap-s4-fc-008',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'The id() built-in function',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What does `id(obj)` return in Python, and how does it relate to `is`?',
    codeSnippet: `class Point: pass
p1 = Point()
p2 = p1
p3 = Point()
print(p1 is p2, id(p1) == id(p2))
print(p1 is p3, id(p1) == id(p3))`,
    stdoutExpected: `True True
False False`,
    explanationTitle: 'Memory Identity via id()',
    explanationText:
      '`id()` returns an integer representing the identity of the object (its memory address in CPython). The `is` operator evaluates to True if and only if `id(a) == id(b)`.',
    complexityInfo: 'Identity evaluation mechanics',
  },
  {
    id: 'pcap-s4-fc-009',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Encapsulation principle',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is the core definition of encapsulation in Python OOP?',
    codeSnippet: `# Encapsulation: restricting direct access to internal state
# and providing controlled methods to manipulate it.
class BankAccount:
    def __init__(self, initial):
        self._balance = initial
    def get_balance(self):
        return self._balance

acc = BankAccount(100)
print(acc.get_balance())`,
    stdoutExpected: '100',
    explanationTitle: 'Encapsulation Concept',
    explanationText:
      'Encapsulation bundles data and the methods operating on that data within a class unit, shielding the internal representation from arbitrary direct manipulation from the outside.',
    complexityInfo: 'Core OOP pillar on PCAP syllabus',
  },
  {
    id: 'pcap-s4-fc-010',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Inheritance definition',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'How does inheritance promote code reuse across classes?',
    codeSnippet: `class Super:
    def greet(self): return "Hello from Super"

class Sub(Super):
    pass

s = Sub()
print(s.greet())`,
    stdoutExpected: 'Hello from Super',
    explanationTitle: 'Subclass Code Reuse',
    explanationText:
      'Inheritance allows a child class (`Sub`) to inherit all methods and attributes of a parent class (`Super`), enabling incremental extension and eliminating code duplication.',
    complexityInfo: 'Core OOP pillar on PCAP syllabus',
  },
  {
    id: 'pcap-s4-fc-011',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Polymorphism definition',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is polymorphism in Python OOP?',
    codeSnippet: `class Dog:
    def speak(self): return "Woof!"
class Cat:
    def speak(self): return "Meow!"

animals = [Dog(), Cat()]
print([a.speak() for a in animals])`,
    stdoutExpected: "['Woof!', 'Meow!']",
    explanationTitle: 'Single Interface, Multiple Forms',
    explanationText:
      'Polymorphism allows different classes to implement methods with the same name. Callers can invoke `speak()` on any object providing that interface without caring about the concrete type.',
    complexityInfo: 'Duck typing & polymorphism',
  },
  {
    id: 'pcap-s4-fc-012',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Class body execution happens at definition time',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.1',
    section: 'Section 4',
    question: 'When is code inside the class body executed in Python?',
    codeSnippet: `print("Before class")
class Greeter:
    print("Inside class body")
print("After class")`,
    stdoutExpected: `Before class
Inside class body
After class`,
    explanationTitle: 'Class Definition-Time Execution',
    explanationText:
      'The body of a class is executed immediately as the class statement is defined, creating a local namespace that is subsequently transformed into the class object attributes.',
    complexityInfo: 'Execution order of class blocks',
  },
  {
    id: 'pcap-s4-fc-013',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Multiple independent instances',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'Do modifications to an attribute of one instance affect other instances of the same class?',
    codeSnippet: `class User: pass
u1 = User()
u2 = User()
u1.role = "Admin"
u2.role = "Guest"
print(u1.role, u2.role)`,
    stdoutExpected: 'Admin Guest',
    explanationTitle: 'Instance Independence',
    explanationText:
      'Each instance has its own dedicated namespace (`__dict__`). Setting `u1.role` does not modify or overwrite `u2.role`.',
    complexityInfo: 'Isolated instance namespaces',
  },
  {
    id: 'pcap-s4-fc-014',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'type() function on instances vs classes',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What does `type(obj)` return when passed a custom class instance?',
    codeSnippet: `class Robot: pass
r = Robot()
print(type(r) is Robot)
print(type(Robot) is type)`,
    stdoutExpected: `True
True`,
    explanationTitle: 'type() Reflection',
    explanationText:
      '`type(r)` returns the class `Robot` from which `r` was instantiated. `type(Robot)` returns `<class \'type\'>`, demonstrating that classes are instances of `type`.',
    complexityInfo: 'Type introspection in Python',
  },
  {
    id: 'pcap-s4-fc-015',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'isinstance() check on custom classes',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'How does `isinstance(obj, Class)` verify an object’s class affiliation?',
    codeSnippet: `class Car: pass
class Truck: pass

c = Car()
print(isinstance(c, Car))
print(isinstance(c, Truck))
print(isinstance(c, object))`,
    stdoutExpected: `True
False
True`,
    explanationTitle: 'isinstance() Type Checking',
    explanationText:
      '`isinstance(c, Car)` returns True because `c` was instantiated from `Car`. It also returns True for `object` because all Python 3 classes inherit from `object`.',
    complexityInfo: 'Hierarchy-aware type verification',
  },
  {
    id: 'pcap-s4-fc-016',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Deleting an instance attribute with del',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.1',
    section: 'Section 4',
    question: 'How do you remove an instance attribute, and what happens when accessing it afterwards?',
    codeSnippet: `class Sample: pass
s = Sample()
s.tag = "v1"
del s.tag
try:
    print(s.tag)
except AttributeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'AttributeError',
    explanationTitle: 'Attribute Deletion with del',
    explanationText:
      'The `del` statement removes the attribute binding from the instance namespace. Subsequent lookups for `s.tag` trigger an `AttributeError`.',
    complexityInfo: 'Attribute lifecycle manipulation',
  },
  {
    id: 'pcap-s4-fc-017',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Aliasing vs Copying instances',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What happens when you assign an existing object to another variable (`b = a`)?',
    codeSnippet: `class Box: pass
a = Box()
a.val = 10
b = a
b.val = 99
print(a.val, b.val, a is b)`,
    stdoutExpected: '99 99 True',
    explanationTitle: 'Reference Aliasing',
    explanationText:
      'Variable assignment in Python binds a new name to the existing object in memory; it does not clone or copy. Modifying `b.val` mutates the same object referenced by `a`.',
    complexityInfo: 'Reference assignment semantics',
  },
  {
    id: 'pcap-s4-fc-018',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: '__doc__ string on classes',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'Where is the docstring of a class stored, and how is it accessed?',
    codeSnippet: `class Calculator:
    """PCAP Certification Calculator class."""
    pass

print(Calculator.__doc__)`,
    stdoutExpected: 'PCAP Certification Calculator class.',
    explanationTitle: 'Class Docstring Reflection',
    explanationText:
      'The first string literal in a class definition becomes the class documentation, stored in the `__doc__` special attribute.',
    complexityInfo: 'Class introspection attribute',
  },
  {
    id: 'pcap-s4-fc-019',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'Callable objects and class instantiation',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.1',
    section: 'Section 4',
    question: 'Why can a class be called like a function with parentheses `ClassName()`?',
    codeSnippet: `class Factory: pass
print(callable(Factory))
print(callable(Factory()))`,
    stdoutExpected: `True
False`,
    explanationTitle: 'Class Objects Are Callables',
    explanationText:
      'Classes implement the `__call__` method at the metaclass level, making the class object callable. Calling `Factory()` executes constructor logic and returns a new instance.',
    complexityInfo: 'Callable protocol in Python',
  },
  {
    id: 'pcap-s4-fc-020',
    cardType: 'PCAP 4.1 • OOP Approach',
    topic: 'PEP 8 Class naming convention',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What casing convention does PEP 8 recommend for naming classes in Python?',
    codeSnippet: `# PEP 8 class naming convention
class UserAccountManager:  # CapWords / PascalCase
    pass

print(UserAccountManager.__name__)`,
    stdoutExpected: 'UserAccountManager',
    explanationTitle: 'CapWords / PascalCase Convention',
    explanationText:
      'PEP 8 dictates that class names should use CapWords (PascalCase) convention with uppercase initials for every word and no underscores.',
    complexityInfo: 'PEP 8 style guide question',
  },

  // =========================================================================
  // CHAPTER 4.2: INSTANCE VARIABLES VS CLASS VARIABLES (Cards 21 to 40)
  // =========================================================================
  {
    id: 'pcap-s4-fc-021',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'Class variable definition and sharing',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How do you define a class variable in Python, and how is it shared across instances?',
    codeSnippet: `class Server:
    count = 0  # Class variable

s1 = Server()
s2 = Server()
print(s1.count, s2.count, Server.count)`,
    stdoutExpected: '0 0 0',
    explanationTitle: 'Shared Class Variable',
    explanationText:
      'A variable declared inside the class body but outside any method is a class variable. It is owned by the class and shared across all instances.',
    complexityInfo: 'Class vs Instance storage',
  },
  {
    id: 'pcap-s4-fc-022',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'Modifying a class variable via ClassName',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What happens to instances when a class variable is modified via `ClassName.var = new_val`?',
    codeSnippet: `class Config:
    timeout = 30

c1 = Config()
c2 = Config()
Config.timeout = 60
print(c1.timeout, c2.timeout, Config.timeout)`,
    stdoutExpected: '60 60 60',
    explanationTitle: 'Class-Level Mutation Reflects Everywhere',
    explanationText:
      'When looked up on an instance without a shadowing attribute, Python searches the class dictionary. Changing `Config.timeout` updates the value visible to all instances.',
    complexityInfo: 'Namespace delegation lookup',
  },
  {
    id: 'pcap-s4-fc-023',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'Shadowing a class variable by instance assignment',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What happens when you execute `instance.class_var = value` on an instance?',
    codeSnippet: `class Device:
    status = "offline"

d1 = Device()
d2 = Device()

d1.status = "online"  # Creates instance variable on d1!
print(d1.status, d2.status, Device.status)`,
    stdoutExpected: 'online offline offline',
    explanationTitle: 'Attribute Shadowing Pitfall',
    explanationText:
      'Assigning to `d1.status` creates an instance variable in `d1.__dict__`. It shadows (hides) the class variable for `d1` without altering `Device.status` or `d2.status`.',
    complexityInfo: 'Classic PCAP exam trap question',
  },
  {
    id: 'pcap-s4-fc-024',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'Mutable class variable modification trap',
    category: 'T4: Bugs',
    difficulty: 'Advanced',
    factor: '2.3',
    intervalDays: 3,
    chapter: '4.2',
    section: 'Section 4',
    question: 'Why does mutating an in-place list class variable affect all instances?',
    codeSnippet: `class Team:
    members = []  # Shared mutable list

t1 = Team()
t2 = Team()
t1.members.append("Alice")
print(t2.members)`,
    stdoutExpected: "['Alice']",
    explanationTitle: 'Shared Mutable Class Attribute Trap',
    explanationText:
      '`t1.members.append()` mutates the underlying list in-place without reassigning `t1.members`. Since `t1.members` and `t2.members` point to the exact same list object, both instances reflect the mutation.',
    complexityInfo: 'Critical OOP bug pattern',
  },
  {
    id: 'pcap-s4-fc-025',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'Instance variables in __init__',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How do you ensure every instance receives its own unique list attribute?',
    codeSnippet: `class SafeTeam:
    def __init__(self):
        self.members = []  # Unique to each instance

st1 = SafeTeam()
st2 = SafeTeam()
st1.members.append("Bob")
print(st1.members, st2.members)`,
    stdoutExpected: "['Bob'] []",
    explanationTitle: 'Instance Initialization in __init__',
    explanationText:
      'Initializing attributes in `__init__` attached to `self` guarantees that a fresh list is allocated for each new instance, avoiding cross-instance state pollution.',
    complexityInfo: 'Standard OOP design pattern',
  },
  {
    id: 'pcap-s4-fc-026',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'The __dict__ attribute on instances',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What is the `__dict__` attribute on a Python object, and what does it contain?',
    codeSnippet: `class Car:
    wheels = 4
    def __init__(self, brand):
        self.brand = brand

c = Car("Tesla")
print(c.__dict__)
print("wheels" in c.__dict__)`,
    stdoutExpected: `{'brand': 'Tesla'}
False`,
    explanationTitle: 'Instance Namespace Dictionary',
    explanationText:
      '`instance.__dict__` is a dictionary storing the instance-specific attributes. Notice class variables like `wheels` reside in `Car.__dict__`, not `c.__dict__`.',
    complexityInfo: 'Namespace separation between class and instance',
  },
  {
    id: 'pcap-s4-fc-027',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'The __dict__ attribute on class objects',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How does `ClassName.__dict__` differ from `instance.__dict__`?',
    codeSnippet: `class Demo:
    shared_var = 100
    def do_work(self): pass

print("shared_var" in Demo.__dict__)
print("do_work" in Demo.__dict__)`,
    stdoutExpected: `True
True`,
    explanationTitle: 'Class Namespace Dictionary',
    explanationText:
      '`Demo.__dict__` contains class variables, methods, docstrings, and class metadata. In CPython, `Demo.__dict__` is a read-only `mappingproxy`.',
    complexityInfo: 'Class mappingproxy introspection',
  },
  {
    id: 'pcap-s4-fc-028',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'Attribute resolution order (Instance -> Class)',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.2',
    section: 'Section 4',
    question: 'In what exact order does Python search for an attribute when evaluating `obj.attr`?',
    codeSnippet: `class Sample:
    value = "class_val"

s = Sample()
print(s.value)  # 1: Not in s.__dict__, found in Sample.__dict__
s.value = "inst_val"
print(s.value)  # 2: Found in s.__dict__
del s.value
print(s.value)  # 3: Falls back to Sample.__dict__ again`,
    stdoutExpected: `class_val
inst_val
class_val`,
    explanationTitle: 'Attribute Lookup Fallback Hierarchy',
    explanationText:
      'Python first checks the instance’s `__dict__`. If absent, it checks the class’s `__dict__`, followed by superclasses along the MRO. Deleting `s.value` removes the shadow, exposing the class attribute again.',
    complexityInfo: 'Core attribute lookup mechanics',
  },
  {
    id: 'pcap-s4-fc-029',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'hasattr() built-in function',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How does built-in `hasattr(obj, name)` check for the existence of an attribute?',
    codeSnippet: `class User:
    role = "member"
    def __init__(self, name):
        self.name = name

u = User("John")
print(hasattr(u, "name"))
print(hasattr(u, "role"))
print(hasattr(u, "password"))`,
    stdoutExpected: `True
True
False`,
    explanationTitle: 'hasattr() Attribute Inspection',
    explanationText:
      '`hasattr(object, "attr_name")` returns True if the string attribute exists on either the instance or anywhere in its class hierarchy.',
    complexityInfo: 'Inspection function frequently in PCAP',
  },
  {
    id: 'pcap-s4-fc-030',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'getattr() built-in with default fallback',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What is the syntax of `getattr()`, and how do you prevent an AttributeError on missing keys?',
    codeSnippet: `class Config:
    port = 8080

c = Config()
print(getattr(c, "port"))
print(getattr(c, "host", "127.0.0.1"))`,
    stdoutExpected: `8080
127.0.0.1`,
    explanationTitle: 'getattr() Safe Attribute Retrieval',
    explanationText:
      '`getattr(object, "name", [default])` retrieves the attribute value. If the attribute does not exist and a default is provided, it returns the default rather than raising `AttributeError`.',
    complexityInfo: 'Dynamic attribute accessor with fallback',
  },
  {
    id: 'pcap-s4-fc-031',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'setattr() built-in function',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How does `setattr(obj, name, value)` dynamically set attributes at runtime?',
    codeSnippet: `class Record: pass
r = Record()
setattr(r, "status", "active")
print(r.status)
print(r.__dict__["status"])`,
    stdoutExpected: `active
active`,
    explanationTitle: 'setattr() Dynamic Assignment',
    explanationText:
      '`setattr(r, "status", "active")` is the programmatic equivalent of writing `r.status = "active"`. It allows assigning attributes whose names are determined at runtime.',
    complexityInfo: 'Dynamic attribute mutator',
  },
  {
    id: 'pcap-s4-fc-032',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'delattr() built-in function',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What is the function equivalent of `del obj.attr`?',
    codeSnippet: `class Entity:
    def __init__(self): self.temp = 99

e = Entity()
delattr(e, "temp")
print(hasattr(e, "temp"))`,
    stdoutExpected: 'False',
    explanationTitle: 'delattr() Attribute Removal',
    explanationText:
      '`delattr(e, "temp")` dynamically deletes the attribute specified by the string name from the object’s namespace. If the attribute does not exist, it raises `AttributeError`.',
    complexityInfo: 'Dynamic attribute deletion',
  },
  {
    id: 'pcap-s4-fc-033',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'Tracking instance counts with a class variable',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How do you accurately track the total number of created instances using a class variable?',
    codeSnippet: `class Session:
    counter = 0
    def __init__(self):
        Session.counter += 1  # Note: Session.counter, NOT self.counter!

s1 = Session()
s2 = Session()
s3 = Session()
print(Session.counter, s1.counter, s3.counter)`,
    stdoutExpected: '3 3 3',
    explanationTitle: 'Class-Level Accumulator Pattern',
    explanationText:
      'Incrementing `Session.counter += 1` directly on the class modifies the single shared class variable. If `self.counter += 1` were used, it would create an instance attribute shadowing the class variable.',
    complexityInfo: 'Classic OOP counter pattern',
  },
  {
    id: 'pcap-s4-fc-034',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'self.counter += 1 bug in instance tracking',
    category: 'T4: Bugs',
    difficulty: 'Advanced',
    factor: '2.3',
    intervalDays: 3,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What happens if you write `self.counter += 1` inside `__init__` when trying to track instance count?',
    codeSnippet: `class BuggyCounter:
    count = 0
    def __init__(self):
        self.count += 1  # BUG: reads class count (0), writes to self.count (1)!

b1 = BuggyCounter()
b2 = BuggyCounter()
print(BuggyCounter.count, b1.count, b2.count)`,
    stdoutExpected: '0 1 1',
    explanationTitle: 'self.var += 1 Read-Then-Shadow Bug',
    explanationText:
      '`self.count += 1` expands to `self.count = self.count + 1`. The right side reads `BuggyCounter.count` (0), adds 1, and assigns 1 to `b1.__dict__["count"]`. `BuggyCounter.count` remains 0 forever.',
    complexityInfo: 'Frequent subtle exam bug',
  },
  {
    id: 'pcap-s4-fc-035',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'Direct dictionary modification via __dict__',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.2',
    section: 'Section 4',
    question: 'Can you inject an attribute into an instance by mutating `instance.__dict__` directly?',
    codeSnippet: `class Bag: pass
b = Bag()
b.__dict__["color"] = "Blue"
b.__dict__["weight"] = 15

print(b.color, b.weight)`,
    stdoutExpected: 'Blue 15',
    explanationTitle: 'Direct __dict__ Modification',
    explanationText:
      'Yes, in standard Python objects without `__slots__`, `instance.__dict__` is a mutable dictionary. Writing `b.__dict__["color"] = "Blue"` directly creates the attribute `b.color`.',
    complexityInfo: 'Low-level Python namespace access',
  },
  {
    id: 'pcap-s4-fc-036',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'dir() function on instances vs classes',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What does `dir(obj)` return when passed an instance?',
    codeSnippet: `class Base:
    cls_attr = 10
    def __init__(self):
        self.inst_attr = 20

b = Base()
attrs = dir(b)
print("cls_attr" in attrs, "inst_attr" in attrs)`,
    stdoutExpected: 'True True',
    explanationTitle: 'dir() Returns Combined Namespaces',
    explanationText:
      '`dir(b)` returns an alphabetically sorted list of attribute and method names available on `b`, including instance attributes, class attributes, and inherited dunder methods.',
    complexityInfo: 'Object introspection',
  },
  {
    id: 'pcap-s4-fc-037',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'Modifying a class attribute on a subclass',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What happens when a subclass defines a class variable with the same name as its parent?',
    codeSnippet: `class Parent:
    version = 1.0

class Child(Parent):
    version = 2.0

print(Parent.version, Child.version)`,
    stdoutExpected: '1.0 2.0',
    explanationTitle: 'Subclass Class Variable Overriding',
    explanationText:
      'The subclass dictionary stores its own `version = 2.0`, overriding lookup for `Child` and its instances without altering the parent’s `Parent.version`.',
    complexityInfo: 'Class hierarchy namespace isolation',
  },
  {
    id: 'pcap-s4-fc-038',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'Deleting a class variable via instance raises AttributeError',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.2',
    section: 'Section 4',
    question: 'Can an instance delete a class variable using `del instance.class_var`?',
    codeSnippet: `class System:
    os_name = "Linux"

s = System()
try:
    del s.os_name
except AttributeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'AttributeError',
    explanationTitle: 'Instances Cannot Delete Class Attributes',
    explanationText:
      '`del s.os_name` attempts to delete `os_name` from `s.__dict__`. Since it is not in the instance dictionary, Python raises `AttributeError`. It must be deleted via `del System.os_name`.',
    complexityInfo: 'Namespace protection rule',
  },
  {
    id: 'pcap-s4-fc-039',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'Function attributes dynamically added to instances',
    category: 'T2: Output',
    difficulty: 'Advanced',
    factor: '2.3',
    intervalDays: 3,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What happens when you attach an external lambda or function directly to an instance?',
    codeSnippet: `class Runner: pass
r = Runner()
r.run = lambda msg: f"Running: {msg}"
print(r.run("Fast"))`,
    stdoutExpected: 'Running: Fast',
    explanationTitle: 'Instance-Level Callable Attributes',
    explanationText:
      'Assigning a function or lambda directly to an instance creates a regular callable attribute. Because it was not defined in the class body, it is NOT wrapped as a bound method (does not receive implicit `self`).',
    complexityInfo: 'Callable attribute vs bound method',
  },
  {
    id: 'pcap-s4-fc-040',
    cardType: 'PCAP 4.2 • Variables & Scope',
    topic: 'Comparison: instance attributes vs class attributes in memory',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How do class variables and instance variables differ in memory footprint and lifecycle?',
    codeSnippet: `class Widget:
    registry = []  # Single object shared by all instances
    def __init__(self, serial):
        self.serial = serial  # Created per instance

w1 = Widget("SN-1")
w2 = Widget("SN-2")
print(w1.registry is w2.registry, w1.serial is w2.serial)`,
    stdoutExpected: 'True False',
    explanationTitle: 'Memory Footprint Comparison',
    explanationText:
      'Class variables exist once for the lifetime of the class in memory. Instance variables are allocated each time a new object is created and deallocated when the instance is garbage collected.',
    complexityInfo: 'Memory lifecycle in Python runtime',
  },
];
