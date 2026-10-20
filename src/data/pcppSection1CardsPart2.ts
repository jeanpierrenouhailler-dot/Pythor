import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 1: ADVANCED OBJECT-ORIENTED PROGRAMMING (Part 2: Cards 41 to 70)
 * - Chapter 1.3: Metaclasses, type Metaclass & Class Creation Internals (Cards 41 to 60)
 * - Chapter 1.4: Abstract Base Classes (ABCs), @abstractmethod & Duck Typing (Cards 61 to 70)
 */
export const pcppSection1CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 1.3: METACLASSES, TYPE METACLASS & CLASS CREATION (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pcpp-s1-fc-041',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'What is a metaclass in Python',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What is the definition of a metaclass in Python?',
    codeSnippet: `class Foo:
    pass

print(type(Foo), isinstance(Foo, type))`,
    stdoutExpected: "<class 'type'> True",
    explanationTitle: 'A Class is an Instance of a Metaclass',
    explanationText:
      'In Python, everything is an object, including classes. Just as an ordinary object is an instance of a class, a class is an instance of a metaclass. The default built-in metaclass for all classes in Python 3 is `type`.',
    complexityInfo: 'Python Metaclass hierarchy',
  },
  {
    id: 'pcpp-s1-fc-042',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Declaring a custom metaclass using metaclass= in class header',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'How is a custom metaclass specified when defining a class in Python 3?',
    codeSnippet: `class Meta(type):
    pass

class MyClass(metaclass=Meta):
    pass

print(type(MyClass).__name__)`,
    stdoutExpected: 'Meta',
    explanationTitle: 'The metaclass Keyword Argument',
    explanationText:
      'In Python 3, a custom metaclass is assigned using the keyword argument `metaclass=Meta` inside the class inheritance parentheses. In Python 2, this was specified via `__metaclass__ = Meta` inside the class body, which is no longer supported.',
    complexityInfo: 'Python 3 class definition syntax',
  },
  {
    id: 'pcpp-s1-fc-043',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Overriding __new__ in a custom metaclass',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What four arguments does a metaclass __new__ method receive?',
    codeSnippet: `class UpperMeta(type):
    def __new__(mcs, name, bases, dct):
        uppercase_attrs = {
            k.upper() if not k.startswith("__") else k: v
            for k, v in dct.items()
        }
        return super().__new__(mcs, name, bases, uppercase_attrs)

class Demo(metaclass=UpperMeta):
    x = 10

print(hasattr(Demo, 'X'), hasattr(Demo, 'x'))`,
    stdoutExpected: 'True False',
    explanationTitle: 'Metaclass __new__ Signature',
    explanationText:
      'A metaclass `__new__(mcs, name, bases, dct)` receives:\n1. `mcs`: the metaclass itself (`UpperMeta`)\n2. `name`: string name of the class being created (`"Demo"`)\n3. `bases`: tuple of base classes\n4. `dct`: dictionary containing the class body definitions.',
    complexityInfo: 'Class construction pipeline',
  },
  {
    id: 'pcpp-s1-fc-044',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Metaclass __init__ vs __new__',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'When is a metaclass __init__ method executed compared to __new__?',
    codeSnippet: `class ValidatingMeta(type):
    def __init__(cls, name, bases, dct):
        super().__init__(name, bases, dct)
        if 'validate' not in dct:
            raise TypeError(f"Class {name} must implement validate()")

try:
    class Bad(metaclass=ValidatingMeta): pass
except TypeError as e:
    print("Enforced rule:", e)`,
    stdoutExpected: 'Enforced rule: Class Bad must implement validate()',
    explanationTitle: '__init__ Initializes the Created Class Object',
    explanationText:
      'Metaclass `__new__` allocates and returns the class object. Metaclass `__init__` is invoked immediately afterwards to configure or validate the newly created class object `cls`.',
    complexityInfo: 'Metaclass lifecycle and validation hooks',
  },
  {
    id: 'pcpp-s1-fc-045',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Controlling instance creation via metaclass __call__',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What method of a metaclass is executed when a user calls MyClass(*args)?',
    codeSnippet: `class SingletonMeta(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=SingletonMeta):
    def __init__(self):
        self.connected = True

d1 = Database()
d2 = Database()
print(d1 is d2)`,
    stdoutExpected: 'True',
    explanationTitle: 'Metaclass __call__ Controls Class Instantiation',
    explanationText:
      'When an instance is created via `MyClass()`, Python invokes `type(MyClass).__call__(MyClass)`. By overriding `__call__` in a metaclass, you intercept every instance creation, making it the cleanest way to implement singletons.',
    complexityInfo: 'Metaclass __call__ interceptor',
  },
  {
    id: 'pcpp-s1-fc-046',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: '__prepare__ method in metaclasses for custom class namespace',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What is the purpose of the @classmethod __prepare__ in a metaclass?',
    codeSnippet: `class OrderedMeta(type):
    @classmethod
    def __prepare__(mcs, name, bases):
        # Returns the mapping object used to populate class namespace
        return dict()`,
    stdoutExpected: 'Returns the namespace mapping dictionary used while executing the class body',
    explanationTitle: 'The __prepare__ Metaclass Hook',
    explanationText:
      '`__prepare__(mcs, name, bases)` is called before the class body is evaluated. It returns a mapping (e.g. `dict` or custom mapping) used as the local namespace during class body execution, allowing tracking of member declaration order.',
    complexityInfo: 'PEP 3115 - Metaclasses in Python 3000',
  },
  {
    id: 'pcpp-s1-fc-047',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Metaclass inheritance and propagation to subclasses',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'Do subclasses automatically inherit the metaclass of their parent class?',
    codeSnippet: `class CustomMeta(type):
    pass

class Parent(metaclass=CustomMeta):
    pass

class Child(Parent):
    pass

print(type(Child) is CustomMeta)`,
    stdoutExpected: 'True',
    explanationTitle: 'Metaclass Inheritance',
    explanationText:
      'Yes. If a base class specifies a metaclass, all its derived subclasses automatically inherit that metaclass unless an explicit, compatible metaclass is specified on the subclass.',
    complexityInfo: 'Metaclass propagation rules',
  },
  {
    id: 'pcpp-s1-fc-048',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Metaclass conflict resolution error',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What error occurs when multiple base classes have different, unrelated metaclasses?',
    codeSnippet: `class MetaA(type): pass
class MetaB(type): pass

class A(metaclass=MetaA): pass
class B(metaclass=MetaB): pass

try:
    class C(A, B): pass
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'Metaclass Conflict Raises TypeError',
    explanationText:
      'When inheriting from multiple classes with different metaclasses, Python must determine the most derived metaclass. If neither metaclass inherits from the other, Python cannot resolve the conflict and raises a `TypeError: metaclass conflict`.',
    complexityInfo: 'Multiple inheritance metaclass constraints',
  },
  {
    id: 'pcpp-s1-fc-049',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Resolving metaclass conflicts with a common derived metaclass',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'How do you resolve a metaclass conflict between MetaA and MetaB?',
    codeSnippet: `class MetaA(type): pass
class MetaB(type): pass

class CombinedMeta(MetaA, MetaB): pass

class A(metaclass=MetaA): pass
class B(metaclass=MetaB): pass

class C(A, B, metaclass=CombinedMeta):
    pass

print(isinstance(C, MetaA) and isinstance(C, MetaB))`,
    stdoutExpected: 'True',
    explanationTitle: 'Subclassing Metaclasses to Solve Conflict',
    explanationText:
      'Creating a new metaclass that inherits from both conflicting metaclasses (`CombinedMeta(MetaA, MetaB)`) and specifying it on the child class solves the conflict.',
    complexityInfo: 'Metaclass resolution pattern',
  },
  {
    id: 'pcpp-s1-fc-050',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Validating class attributes at class definition time with a metaclass',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'How does a metaclass reject classes that fail naming conventions at definition time?',
    codeSnippet: `class StrictNamingMeta(type):
    def __new__(mcs, name, bases, dct):
        for attr, val in dct.items():
            if callable(val) and not attr.startswith("__") and not attr.islower():
                raise TypeError(f"Method '{attr}' must be lowercase")
        return super().__new__(mcs, name, bases, dct)

try:
    class BadService(metaclass=StrictNamingMeta):
        def DoWork(self): pass
except TypeError as e:
    print(e)`,
    stdoutExpected: "Method 'DoWork' must be lowercase",
    explanationTitle: 'Compile-Time / Definition-Time Code Validation',
    explanationText:
      'Because the metaclass `__new__` runs when the class is defined (module load time), it catches architectural or naming violations immediately before any instances can ever be created.',
    complexityInfo: 'API enforcement with metaclasses',
  },
  {
    id: 'pcpp-s1-fc-051',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Automatically registering subclasses in a metaclass registry',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What is the output when a metaclass auto-registers newly defined classes in a registry dictionary?',
    codeSnippet: `class RegistryMeta(type):
    registry = {}
    def __new__(mcs, name, bases, dct):
        cls = super().__new__(mcs, name, bases, dct)
        if bases:  # Don't register the root base
            mcs.registry[name] = cls
        return cls

class Shape(metaclass=RegistryMeta): pass
class Square(Shape): pass
class Circle(Shape): pass

print(list(RegistryMeta.registry.keys()))`,
    stdoutExpected: "['Square', 'Circle']",
    explanationTitle: 'Metaclass-driven Plugin Registration',
    explanationText:
      'As soon as `Square` and `Circle` are imported and defined, the metaclass detects them and adds them to `RegistryMeta.registry`. This implements zero-configuration plugin discovery.',
    complexityInfo: 'Plugin architecture design pattern',
  },
  {
    id: 'pcpp-s1-fc-052',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Class methods defined on metaclass vs class methods on ordinary class',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'Can instances of a class invoke methods defined on that class\'s metaclass?',
    codeSnippet: `class Meta(type):
    def meta_method(cls):
        return "I am on metaclass"

class MyClass(metaclass=Meta):
    pass

inst = MyClass()
print(MyClass.meta_method())
try:
    inst.meta_method()
except AttributeError as e:
    print(type(e).__name__)`,
    stdoutExpected: `I am on metaclass
AttributeError`,
    explanationTitle: 'Metaclass Methods Are Not Visible to Instances',
    explanationText:
      'Methods defined in a metaclass are available on the class itself (`MyClass.meta_method()`), but are NOT visible to instances of that class (`inst.meta_method()`). Instances look up methods in `MyClass.__dict__` and its base classes, not its metaclass.',
    complexityInfo: 'Lookup pathway separation between class and metaclass',
  },
  {
    id: 'pcpp-s1-fc-053',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Metaclass type isinstance and issubclass relationships',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What are the boolean values of isinstance(type, object) and isinstance(object, type)?',
    codeSnippet: `print(isinstance(type, object), isinstance(object, type))`,
    stdoutExpected: 'True True',
    explanationTitle: 'The Circular Foundation of Python\'s Type System',
    explanationText:
      'In Python\'s object model: `object` is the base of all classes, so `type` is an instance of `object`. Concurrently, `type` is the metaclass that creates all classes, and `object` is a class, so `object` is an instance of `type`. Both evaluations are `True`.',
    complexityInfo: 'Python type system core design',
  },
  {
    id: 'pcpp-s1-fc-054',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Difference between Metaclasses and Class Decorators',
    category: 'T3: Metaprogramming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What is a significant advantage of metaclasses over class decorators with respect to inheritance?',
    codeSnippet: `def dec(cls):
    cls.tagged = True
    return cls

@dec
class Base: pass
class Sub(Base): pass

print(hasattr(Base, 'tagged'), 'tagged' in Sub.__dict__)`,
    stdoutExpected: 'True False',
    explanationTitle: 'Metaclasses Propagate to Subclasses; Decorators Do Not',
    explanationText:
      'A class decorator only affects the specific class it decorates. A metaclass automatically governs all future subclasses created down the inheritance tree. For deep frameworks, metaclasses guarantee that subclasses cannot bypass rules.',
    complexityInfo: 'Metaclass vs decorator design tradeoffs',
  },
  {
    id: 'pcpp-s1-fc-055',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'The Descriptor protocol: __get__, __set__, __delete__',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What methods define a Python descriptor object?',
    codeSnippet: `class Descriptor:
    def __get__(self, instance, owner):
        return 42

class Owner:
    attr = Descriptor()

o = Owner()
print(o.attr)`,
    stdoutExpected: '42',
    explanationTitle: 'The Descriptor Protocol',
    explanationText:
      'A descriptor is any object that defines at least one of `__get__(self, instance, owner)`, `__set__(self, instance, value)`, or `__delete__(self, instance)`. Properties, methods, `@classmethod`, and `@staticmethod` are all implemented via descriptors.',
    complexityInfo: 'Python attribute lookup engine',
  },
  {
    id: 'pcpp-s1-fc-056',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Data Descriptors vs Non-Data Descriptors precedence',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'How does an attribute lookup prioritize between instance __dict__ and descriptors?',
    codeSnippet: `class NonData:
    def __get__(self, inst, owner): return "descriptor"

class Host:
    x = NonData()

h = Host()
h.__dict__['x'] = "instance"
print(h.x)`,
    stdoutExpected: 'instance',
    explanationTitle: 'Data Descriptors Beat Instance Dict; Non-Data Descriptors Yield',
    explanationText:
      'A Data Descriptor defines both `__get__` and `__set__` (or `__delete__`), taking precedence over an instance\'s `__dict__`. A Non-Data Descriptor defines only `__get__`; entries in the instance `__dict__` take precedence over it.',
    complexityInfo: 'Attribute resolution priority order',
  },
  {
    id: 'pcpp-s1-fc-057',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: '__set_name__ hook in descriptors (PEP 487)',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'What hook is called automatically on descriptor objects when the owner class is created?',
    codeSnippet: `class LoggedAttr:
    def __set_name__(self, owner, name):
        self.var_name = "_" + name

    def __get__(self, inst, owner):
        return getattr(inst, self.var_name, None)

    def __set__(self, inst, val):
        setattr(inst, self.var_name, val)

class Profile:
    email = LoggedAttr()

p = Profile()
p.email = "test@example.com"
print(p._email)`,
    stdoutExpected: 'test@example.com',
    explanationTitle: '__set_name__ Automates Attribute Name Binding',
    explanationText:
      'Introduced in Python 3.6 (PEP 487), `__set_name__(self, owner, name)` is called automatically by Python when the enclosing class `owner` is created, passing the assigned attribute name (`"email"`). Descriptors no longer need metaclasses to discover their variable name.',
    complexityInfo: 'Modern descriptor architecture',
  },
  {
    id: 'pcpp-s1-fc-058',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Dynamic method injection via metaclass',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'How can a metaclass dynamically inject a helper method into all created classes?',
    codeSnippet: `class InjectMeta(type):
    def __new__(mcs, name, bases, dct):
        dct['to_json'] = lambda self: f'{{"class": "{name}"}}'
        return super().__new__(mcs, name, bases, dct)

class User(metaclass=InjectMeta): pass

u = User()
print(u.to_json())`,
    stdoutExpected: '{"class": "User"}',
    explanationTitle: 'Dynamic Method Injection',
    explanationText:
      "Before passing `dct` to `super().__new__`, the metaclass inserts 'to_json' into the class dictionary. Every class governed by `InjectMeta` receives this method without manually writing it.",
    complexityInfo: 'Class enhancement via metaclass',
  },
  {
    id: 'pcpp-s1-fc-059',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Metaclass keyword arguments in class headers',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'How are extra keyword arguments in a class definition header passed to the metaclass?',
    codeSnippet: `class VersionMeta(type):
    def __new__(mcs, name, bases, dct, version=1.0):
        cls = super().__new__(mcs, name, bases, dct)
        cls.version = version
        return cls

class API(metaclass=VersionMeta, version=2.5):
    pass

print(API.version)`,
    stdoutExpected: '2.5',
    explanationTitle: 'Extra Class Header Arguments Forward to Metaclass',
    explanationText:
      'Any keyword arguments besides `metaclass=` in a class definition header (e.g. `version=2.5`) are passed directly as keyword parameters to the metaclass `__prepare__`, `__new__`, and `__init__` methods.',
    complexityInfo: 'Metaclass parameterization',
  },
  {
    id: 'pcpp-s1-fc-060',
    track: 'pcpp',
    cardType: 'PCPP 1.3 • Metaclasses',
    topic: 'Intercepting attribute access on a class object',
    category: 'T3: Metaprogramming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.3',
    section: 'Section 1',
    question: 'How can you customize property getters directly on a CLASS object (e.g. MyClass.attr)?',
    codeSnippet: `class ClassPropertyMeta(type):
    @property
    def platform_name(cls):
        return "Python 3.12 PCPP"

class System(metaclass=ClassPropertyMeta):
    pass

print(System.platform_name)`,
    stdoutExpected: 'Python 3.12 PCPP',
    explanationTitle: 'Class-Level Properties Require a Metaclass',
    explanationText:
      'A `@property` defined in an ordinary class applies to instances of that class (`inst.prop`). To create a property that works directly on the class itself (`System.platform_name`), the property must be defined inside the class\'s metaclass.',
    complexityInfo: 'Class-level descriptors',
  },

  // =========================================================================
  // CHAPTER 1.4: ABSTRACT BASE CLASSES (ABCs), @abstractmethod & DUCK TYPING (Cards 61 to 70)
  // =========================================================================
  {
    id: 'pcpp-s1-fc-061',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: 'Instantiating an Abstract Base Class with unimplemented methods',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What exception is raised when attempting to instantiate an ABC that has abstract methods?',
    codeSnippet: `from abc import ABC, abstractmethod

class Greeter(ABC):
    @abstractmethod
    def greet(self):
        pass

try:
    g = Greeter()
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'ABCs Cannot Be Instantiated Directly',
    explanationText:
      'Attempting to instantiate an abstract base class that contains unimplemented `@abstractmethod`s raises a `TypeError: Can\'t instantiate abstract class Greeter with abstract method greet`.',
    complexityInfo: 'Interface enforcement in Python',
  },
  {
    id: 'pcpp-s1-fc-062',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: 'Subclasses fulfilling the ABC contract',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'Can a concrete subclass be instantiated if it overrides all abstract methods of its parent ABC?',
    codeSnippet: `from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof"

d = Dog()
print(d.speak())`,
    stdoutExpected: 'Woof',
    explanationTitle: 'Concrete Subclass Fulfills Contract',
    explanationText:
      'Once a subclass implements all abstract methods defined in the ABC inheritance chain, it becomes a concrete class and can be instantiated without error.',
    complexityInfo: 'Object-oriented abstraction and polymorphism',
  },
  {
    id: 'pcpp-s1-fc-063',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: 'Abstract methods with default implementations and super() calls',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'Can an @abstractmethod have a concrete implementation that subclasses can invoke with super()?',
    codeSnippet: `from abc import ABC, abstractmethod

class BaseLogger(ABC):
    @abstractmethod
    def log(self, msg):
        return f"[BASE] {msg}"

class CustomLogger(BaseLogger):
    def log(self, msg):
        return super().log(msg) + " -> [CUSTOM]"

c = CustomLogger()
print(c.log("hello"))`,
    stdoutExpected: '[BASE] hello -> [CUSTOM]',
    explanationTitle: 'Abstract Methods May Provide Concrete Implementations',
    explanationText:
      'In Python, `@abstractmethod` does not forbid having a method body. The method can provide default or common logic that child classes invoke via `super().method(...)`. However, subclasses are still strictly required to override it.',
    complexityInfo: 'Template method pattern with ABCs',
  },
  {
    id: 'pcpp-s1-fc-064',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: 'Abstract property declaration using @property and @abstractmethod',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'In what order must @property and @abstractmethod decorators be stacked?',
    codeSnippet: `from abc import ABC, abstractmethod

class Measurable(ABC):
    @property
    @abstractmethod
    def size(self):
        pass`,
    stdoutExpected: '@property on top, @abstractmethod underneath',
    explanationTitle: 'Stacking @property and @abstractmethod',
    explanationText:
      'When combining `@property` with `@abstractmethod`, `@property` must be the outermost (top) decorator, and `@abstractmethod` must be directly above the `def` statement: `@property \\n @abstractmethod`.',
    complexityInfo: 'Decorator stacking order rules',
  },
  {
    id: 'pcpp-s1-fc-065',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: 'Virtual subclasses using register()',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is a virtual subclass registered via ABC.register() in Python?',
    codeSnippet: `from abc import ABC

class Media(ABC):
    pass

class Video:
    pass

Media.register(Video)

v = Video()
print(isinstance(v, Media), issubclass(Video, Media))`,
    stdoutExpected: 'True True',
    explanationTitle: 'Virtual Subclasses via ABC.register()',
    explanationText:
      '`ABC.register(Class)` marks `Class` as a virtual subclass of the ABC. `isinstance(v, Media)` and `issubclass(Video, Media)` evaluate to `True`, but `Media` is NOT in `Video.__mro__`. Virtual subclasses do not inherit any attributes or methods from the ABC.',
    complexityInfo: 'Structural typing and registration without inheritance',
  },
  {
    id: 'pcpp-s1-fc-066',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: 'Virtual subclasses and method inheritance absence',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'Does a virtual subclass inherit methods defined on the registering ABC?',
    codeSnippet: `from abc import ABC

class Greeter(ABC):
    def say_hi(self):
        return "Hi"

class Robot:
    pass

Greeter.register(Robot)
r = Robot()
print(hasattr(r, 'say_hi'))`,
    stdoutExpected: 'False',
    explanationTitle: 'Virtual Subclasses Do Not Inherit Implementation',
    explanationText:
      'Because the ABC does not appear in the virtual subclass\'s Method Resolution Order (MRO), virtual subclasses never inherit any methods or attributes from the registered ABC. It purely affects `isinstance()` and `issubclass()` checks.',
    complexityInfo: 'Virtual subclass mechanics',
  },
  {
    id: 'pcpp-s1-fc-067',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: 'Dynamic structural subtyping with __subclasshook__',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'How does __subclasshook__ enable automatic structural typing (duck typing) with ABCs?',
    codeSnippet: `from abc import ABC

class Sizable(ABC):
    @classmethod
    def __subclasshook__(cls, C):
        if cls is Sizable:
            if any("__len__" in B.__dict__ for B in C.__mro__):
                return True
        return NotImplemented

class CustomList:
    def __len__(self): return 10

print(issubclass(CustomList, Sizable))`,
    stdoutExpected: 'True',
    explanationTitle: '__subclasshook__ Enables Formal Duck Typing',
    explanationText:
      'When `issubclass(Sub, ABC)` is checked, the ABC\'s `__subclasshook__` class method runs. If it returns `True`, `Sub` is considered a subclass of `ABC` without explicit inheritance or `register()` calls. Returning `NotImplemented` falls back to standard mechanism.',
    complexityInfo: 'Structural typing and collections.abc mechanics',
  },
  {
    id: 'pcpp-s1-fc-068',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: 'Standard collections.abc hierarchy (Iterable, Sized, Mapping)',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What interface makes a custom class an instance of collections.abc.Iterable?',
    codeSnippet: `from collections.abc import Iterable

class MyIter:
    def __iter__(self):
        return iter([1, 2, 3])

obj = MyIter()
print(isinstance(obj, Iterable))`,
    stdoutExpected: 'True',
    explanationTitle: 'collections.abc.Iterable Recognizes __iter__',
    explanationText:
      '`collections.abc.Iterable` defines a `__subclasshook__` that tests for the presence of `__iter__` in the class MRO. Any class implementing `__iter__` is automatically recognized as an `Iterable` via `isinstance`.',
    complexityInfo: 'Standard library ABC protocols',
  },
  {
    id: 'pcpp-s1-fc-069',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: 'Abstract class methods and static methods (@abstractclassmethod)',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'How are abstract class methods declared in modern Python?',
    codeSnippet: `from abc import ABC, abstractmethod

class Factory(ABC):
    @classmethod
    @abstractmethod
    def create(cls):
        pass`,
    stdoutExpected: 'Combine @classmethod on top with @abstractmethod underneath',
    explanationTitle: 'Abstract Class Method Syntax',
    explanationText:
      'In modern Python, legacy helpers like `@abstractclassmethod` and `@abstractstaticmethod` are deprecated. The standard approach is to stack `@classmethod` (or `@staticmethod`) as the outer decorator and `@abstractmethod` directly above `def`.',
    complexityInfo: 'Modern ABC decorator guidelines',
  },
  {
    id: 'pcpp-s1-fc-070',
    track: 'pcpp',
    cardType: 'PCPP 1.4 • Abstract Base Classes',
    topic: 'ABCMeta metaclass vs inheriting from ABC',
    category: 'T4: ABCs & Inheritance',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What is the relationship between abc.ABC and abc.ABCMeta?',
    codeSnippet: `from abc import ABC, ABCMeta

class A(ABC): pass
class B(metaclass=ABCMeta): pass

print(type(A) is ABCMeta, type(B) is ABCMeta)`,
    stdoutExpected: 'True True',
    explanationTitle: 'ABC is a Helper Class Inheriting from ABCMeta',
    explanationText:
      '`abc.ABC` is simply a convenience helper class whose metaclass is `ABCMeta`. Writing `class A(ABC):` is functionally equivalent to writing `class A(metaclass=ABCMeta):`.',
    complexityInfo: 'ABC implementation details',
  },
];
