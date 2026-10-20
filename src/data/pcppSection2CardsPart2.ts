import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 2: CODING CONVENTIONS, BEST PRACTICES & DESIGN PATTERNS (Part 2: Cards 41 to 75)
 * - Chapter 2.3: Creational Design Patterns (Cards 41 to 60)
 * - Chapter 2.4: Structural Design Patterns (Part 1: Cards 61 to 75)
 */
export const pcppSection2CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.3: CREATIONAL DESIGN PATTERNS (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pcpp-s2-fc-041',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Singleton pattern intent and core responsibility',
    category: 'T2: Design Patterns',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the intent of the Singleton creational design pattern, and what two problems does it solve?',
    codeSnippet: `# Singleton Pattern:
# 1. Ensure a class has only _____ instance.
# 2. Provide a _____ point of access to it.`,
    stdoutExpected: 'Ensure a class has only ONE instance and provide a GLOBAL point of access to it',
    explanationTitle: 'Singleton Pattern Intent',
    explanationText:
      'The Singleton pattern guarantees that a class has only one instance throughout the runtime lifecycle of an application and provides a global access point to that instance. Common use cases include database connection pools, loggers, and hardware drivers.',
    complexityInfo: 'Foundational GoF creational pattern',
  },
  {
    id: 'pcpp-s2-fc-042',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Singleton implementation via __new__ override',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How does overriding __new__ enforce the Singleton pattern in Python?',
    codeSnippet: `class Database:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

db1 = Database()
db2 = Database()
print(db1 is db2)`,
    stdoutExpected: 'True',
    explanationTitle: 'Singleton via __new__ Constructor Hook',
    explanationText:
      'Because __new__ is responsible for creating and returning the object instance, checking cls._instance intercepts allocation. If None, it creates the instance once and caches it; subsequent calls return the exact same cached reference.',
    complexityInfo: 'High-frequency exam code question',
  },
  {
    id: 'pcpp-s2-fc-043',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'The __init__ trap in __new__-based Singletons',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What subtle bug occurs if a Singleton implemented via __new__ also defines a standard __init__ method?',
    codeSnippet: `class Counter:
    _instance = None
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        self.count = 0

c1 = Counter()
c1.count = 10
c2 = Counter()
print(c1.count)`,
    stdoutExpected: '0 (c2 = Counter() re-invoked __init__, resetting count to 0!)',
    explanationTitle: 'The Singleton __init__ Re-initialization Trap',
    explanationText:
      'In Python, Python automatically calls __init__ on whatever instance __new__ returns if it is an instance of cls! Thus, every call to Counter() re-runs __init__, re-initializing instance variables unless guarded with an initialization flag.',
    complexityInfo: 'Famous Python Singleton pitfall',
  },
  {
    id: 'pcpp-s2-fc-044',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Metaclass-based Singleton implementation',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Why is a Metaclass often considered the cleanest way to implement a Singleton in Python?',
    codeSnippet: `class SingletonMeta(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            instance = super().__call__(*args, **kwargs)
            cls._instances[cls] = instance
        return cls._instances[cls]

class Logger(metaclass=SingletonMeta):
    def __init__(self):
        self.entries = []`,
    stdoutExpected: 'The metaclass __call__ controls instantiation and ensures __init__ is called exactly once',
    explanationTitle: 'Metaclass Singleton Elegance',
    explanationText:
      'When a class is instantiated (e.g. Logger()), its metaclass\'s __call__ method executes. By caching instances in the metaclass dictionary, super().__call__() is only invoked once, avoiding the __init__ re-execution bug entirely.',
    complexityInfo: 'Advanced PCPP OOP & Pattern combination',
  },
  {
    id: 'pcpp-s2-fc-045',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'The Borg / Monostate pattern (Alex Martelli)',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How does the Borg / Monostate pattern differ from a traditional Singleton?',
    codeSnippet: `class Borg:
    _shared_state = {}

    def __init__(self):
        self.__dict__ = self._shared_state

b1 = Borg()
b2 = Borg()
b1.value = 99
print(b1 is b2, b2.value)`,
    stdoutExpected: 'False 99 (different instance identities, but shared internal state dictionary)',
    explanationTitle: 'Borg / Monostate Pattern',
    explanationText:
      'Devised by Python core developer Alex Martelli, Borg focuses on sharing STATE rather than identity. Different instances exist (b1 is not b2), but all instances share the exact same __dict__, synchronizing all attributes instantaneously.',
    complexityInfo: 'Iconic Python-specific creational idiom',
  },
  {
    id: 'pcpp-s2-fc-046',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Python modules as natural singletons',
    category: 'T2: Design Patterns',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Why are Python modules considered the most Pythonic implementation of the Singleton pattern?',
    codeSnippet: `# config.py:
API_ENDPOINT = "https://api.example.com"
token = None

# main.py and service.py both do:
import config`,
    stdoutExpected: 'Modules are loaded once and cached in sys.modules, acting as true runtime singletons',
    explanationTitle: 'Modules as Natural Singletons',
    explanationText:
      'Python executes the code in a module only once when first imported, caching the module object in sys.modules. All subsequent imports across the application reference that same loaded module object.',
    complexityInfo: 'Idiomatic Python pattern',
  },
  {
    id: 'pcpp-s2-fc-047',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Decorator-based Singleton',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How does a class decorator enforce singleton behavior?',
    codeSnippet: `def singleton(cls):
    instances = {}
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return get_instance

@singleton
class Registry:
    pass

r1 = Registry()
r2 = Registry()
print(r1 is r2)`,
    stdoutExpected: 'True',
    explanationTitle: 'Function Closure Singleton Decorator',
    explanationText:
      'The @singleton decorator wraps the class in a closure function (get_instance) that retains an instances dictionary. When Registry() is called, the wrapper checks whether the instance exists, creating and caching it if needed.',
    complexityInfo: 'Functional pattern application',
  },
  {
    id: 'pcpp-s2-fc-048',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Factory Method pattern intent',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the intent of the Factory Method design pattern?',
    codeSnippet: `# Factory Method Pattern:
# Define an interface for creating an object,
# but let subclasses decide which class to instantiate.`,
    stdoutExpected: 'Defines an interface for creating an object, but defers the actual instantiation to subclasses or specialized creators',
    explanationTitle: 'Factory Method Intent',
    explanationText:
      'The Factory Method pattern delegates the responsibility of instantiating concrete classes to specialized creator methods or subclasses, decoupling the client code from specific concrete product implementations.',
    complexityInfo: 'Classic GoF creational pattern',
  },
  {
    id: 'pcpp-s2-fc-049',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Factory Method implementation with dictionary dispatch',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How does Python\'s first-class function support enable lightweight factory methods without complex class hierarchies?',
    codeSnippet: `class JSONSerializer:
    def serialize(self, data): return "JSON"

class XMLSerializer:
    def serialize(self, data): return "XML"

serializers = {
    'json': JSONSerializer,
    'xml': XMLSerializer,
}

def get_serializer(format_name):
    creator = serializers.get(format_name.lower())
    if not creator:
        raise ValueError(format_name)
    return creator()`,
    stdoutExpected: 'Classes are first-class callable objects that can be stored in dictionaries and called on demand',
    explanationTitle: 'Pythonic Dictionary-Based Factory',
    explanationText:
      'Because Python classes are first-class objects (callables), you can map string keys directly to class types in a dictionary. Calling creator() dynamically invokes the constructor without cumbersome switch statements.',
    complexityInfo: 'Pythonic Factory implementation',
  },
  {
    id: 'pcpp-s2-fc-050',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Abstract Factory pattern intent and structure',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What distinguishes the Abstract Factory pattern from the standard Factory Method pattern?',
    codeSnippet: `# Abstract Factory:
# Provides an interface for creating families of related or dependent objects
# without specifying their concrete classes.`,
    stdoutExpected: 'Abstract Factory creates families of related products (e.g. DarkButton + DarkCheckbox vs LightButton + LightCheckbox)',
    explanationTitle: 'Abstract Factory vs Factory Method',
    explanationText:
      'A Factory Method typically creates a single product type. An Abstract Factory creates entire suites/families of coordinated products (e.g. WindowsGUIFactory producing WinButton, WinMenu; MacGUIFactory producing MacButton, MacMenu) ensuring compatibility.',
    complexityInfo: 'GoF architectural pattern',
  },
  {
    id: 'pcpp-s2-fc-051',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Builder pattern intent and problem domain',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What problem does the Builder design pattern solve?',
    codeSnippet: `# Telescoping constructor anti-pattern:
# House(doors=4, windows=8, roof="pitched", pool=True, garage=True, garden=False, ...)
# vs
# HouseBuilder().add_doors(4).add_roof("pitched").build()`,
    stdoutExpected: 'Separates construction of a complex object from its representation, avoiding telescoping constructors',
    explanationTitle: 'Builder Pattern Intent',
    explanationText:
      'The Builder pattern constructs complex objects step by step. It prevents telescoping constructor parameters (functions with dozens of optional parameters) and allows the same construction process to produce different representations.',
    complexityInfo: 'Creational pattern for complex initialization',
  },
  {
    id: 'pcpp-s2-fc-052',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Builder pattern: method chaining (fluent interface)',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How do builder methods achieve method chaining (fluent interface) in Python?',
    codeSnippet: `class QueryBuilder:
    def __init__(self):
        self.query = {}

    def filter_by(self, field, val):
        self.query[field] = val
        return self  # What does returning self enable?

    def limit(self, count):
        self.query['limit'] = count
        return self

q = QueryBuilder().filter_by('active', True).limit(10)`,
    stdoutExpected: 'Returning "self" allows chaining multiple configuration calls sequentially',
    explanationTitle: 'Fluent Interface via "return self"',
    explanationText:
      'By returning "self" at the end of each mutating builder method, the caller can chain method calls consecutively on a single expression line, culminating in a terminal .build() call.',
    complexityInfo: 'Fluent API implementation technique',
  },
  {
    id: 'pcpp-s2-fc-053',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Builder pattern: Director class responsibility',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the role of the "Director" class in the classic Gang of Four Builder pattern?',
    codeSnippet: `class Director:
    def __init__(self, builder):
        self._builder = builder

    def construct_sports_car(self):
        self._builder.reset()
        self._builder.set_seats(2)
        self._builder.set_engine("V8")
        self._builder.set_trip_computer(True)`,
    stdoutExpected: 'The Director defines the order and steps of construction; the Builder provides the implementation',
    explanationTitle: 'Role of the Director in Builder',
    explanationText:
      'The Director class controls the assembly sequence. It executes building steps in a specific order to create predefined product configurations, isolating recipe workflows from product manufacturing details.',
    complexityInfo: 'GoF Builder architecture',
  },
  {
    id: 'pcpp-s2-fc-054',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Prototype design pattern intent and copy mechanism',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the intent of the Prototype pattern and which standard library module is used to implement it in Python?',
    codeSnippet: `import copy

class Prototype:
    def clone(self):
        return copy.deepcopy(self)`,
    stdoutExpected: 'Creates new objects by copying an existing prototype instance; implemented using the "copy" module',
    explanationTitle: 'Prototype Pattern & copy.deepcopy()',
    explanationText:
      'The Prototype pattern specifies the kind of objects to create using a prototypical instance and creates new objects by cloning this prototype. In Python, this is cleanly implemented using copy.copy() (shallow) or copy.deepcopy() (deep).',
    complexityInfo: 'Creational cloning pattern',
  },
  {
    id: 'pcpp-s2-fc-055',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Object Pool creational pattern',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'What is the purpose of the Object Pool design pattern and when is it employed?',
    codeSnippet: `# Object Pool Pattern:
# Acquire object -> Use object -> Release back to pool (not destroyed)`,
    stdoutExpected: 'Manages a collection of pre-initialized, reusable objects (e.g. database connections, socket threads) to avoid expensive creation/destruction overhead',
    explanationTitle: 'Object Pool Pattern',
    explanationText:
      'Object Pool reuses objects that are expensive to allocate and instantiate (such as database connections or network sockets). Instead of creating and destroying instances repeatedly, clients acquire an existing idle object from the pool and return it after use.',
    complexityInfo: 'Resource management pattern',
  },
  {
    id: 'pcpp-s2-fc-056',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Lazy Initialization pattern in Python properties',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How does the Lazy Initialization pattern defer expensive object construction in Python?',
    codeSnippet: `class HeavyResource:
    def __init__(self):
        self._data = None

    @property
    def data(self):
        if self._data is None:
            self._data = self._load_massive_dataset()
        return self._data`,
    stdoutExpected: 'Defers creation of an object or calculation of an expensive value until the exact moment it is first accessed',
    explanationTitle: 'Lazy Initialization Pattern',
    explanationText:
      'Lazy Initialization postpones expensive resource allocation (loading heavy datasets, establishing network sessions) until the property or method is first requested by client code, caching the result for future accesses.',
    complexityInfo: 'Performance optimization pattern',
  },
  {
    id: 'pcpp-s2-fc-057',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Thread-safe Singleton implementation',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Why is a threading.Lock required for thread-safe Singleton creation in multi-threaded Python applications?',
    codeSnippet: `import threading

class SafeSingleton:
    _instance = None
    _lock = threading.Lock()

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:  # Double-checked locking
                    cls._instance = super().__new__(cls)
        return cls._instance`,
    stdoutExpected: 'Prevents race conditions where two concurrent threads simultaneously evaluate _instance is None and create two distinct instances',
    explanationTitle: 'Double-Checked Locking Pattern',
    explanationText:
      'Without locking, two threads running concurrently can simultaneously evaluate "cls._instance is None" before either has assigned it, producing two instances. Double-checked locking acquires the lock only when needed to maintain performance.',
    complexityInfo: 'Concurrency & creational safety',
  },
  {
    id: 'pcpp-s2-fc-058',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Singleton criticism and unit testing hazards',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'Why is the Singleton pattern frequently considered an anti-pattern in modern software engineering?',
    codeSnippet: `# Test 1 modifies Singleton state -> Test 2 fails unpredictably!`,
    stdoutExpected: 'It introduces hidden global state, creates tight coupling, and makes isolated unit testing difficult',
    explanationTitle: 'Singleton Drawbacks and Testing Hazards',
    explanationText:
      'Singletons act as disguised global variables. They couple classes to concrete implementations, prevent dependency injection, and cause test contamination when state persists between test suite executions.',
    complexityInfo: 'Software engineering trade-offs',
  },
  {
    id: 'pcpp-s2-fc-059',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Registration-based Factory with class decorators',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How do class decorators implement an extensible, open-closed Factory in Python?',
    codeSnippet: `PLUGINS = {}

def register_plugin(name):
    def decorator(cls):
        PLUGINS[name] = cls
        return cls
    return decorator

@register_plugin("pdf")
class PDFExporter: pass

@register_plugin("html")
class HTMLExporter: pass`,
    stdoutExpected: 'New product classes register themselves upon import without modifying the central factory dispatcher code',
    explanationTitle: 'Self-Registering Factory Decorator',
    explanationText:
      'This pattern respects the Open/Closed Principle: the factory registry is open for extension by adding new decorated classes in separate modules, but closed for modification because the central dispatch dictionary does not require editing.',
    complexityInfo: 'Extensible architecture design',
  },
  {
    id: 'pcpp-s2-fc-060',
    track: 'pcpp',
    cardType: 'PCPP 2.3 • Creational Patterns',
    topic: 'Dynamic class creation via type() factory',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.3',
    section: 'Section 2',
    question: 'How can the 3-argument type() built-in serve as a dynamic creational factory for classes?',
    codeSnippet: `def create_record_class(class_name, fields):
    def __init__(self, **kwargs):
        for k, v in kwargs.items():
            if k in fields:
                setattr(self, k, v)

    methods = {'__init__': __init__, 'fields': fields}
    return type(class_name, (object,), methods)

UserRecord = create_record_class('UserRecord', ['id', 'email'])
u = UserRecord(id=1, email="test@domain.com")
print(u.email)`,
    stdoutExpected: 'test@domain.com',
    explanationTitle: 'Dynamic Metaprogramming Factory',
    explanationText:
      'The 3-argument type(name, bases, dict) dynamically manufactures new class types at runtime. This allows factories to generate tailored classes on the fly based on schemas, database models, or external configuration files.',
    complexityInfo: 'Metaprogramming creational pattern',
  },

  // =========================================================================
  // CHAPTER 2.4: STRUCTURAL DESIGN PATTERNS (Cards 61 to 75)
  // =========================================================================
  {
    id: 'pcpp-s2-fc-061',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Adapter pattern intent and core problem',
    category: 'T2: Design Patterns',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the intent of the Adapter (Wrapper) design pattern?',
    codeSnippet: `# Adapter Pattern:
# Convert the interface of a class into another interface clients expect.
# Lets classes work together that couldn't otherwise because of incompatible interfaces.`,
    stdoutExpected: 'Converts an incompatible interface of an existing class into an interface that client code expects',
    explanationTitle: 'Adapter Pattern Intent',
    explanationText:
      'The Adapter pattern acts as a translator between two incompatible interfaces. It wraps an existing service (adaptee) so that clients programmed against a target interface can consume it without modifying the original source code.',
    complexityInfo: 'Foundational GoF structural pattern',
  },
  {
    id: 'pcpp-s2-fc-062',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Object Adapter vs Class Adapter architectures',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the structural difference between an "Object Adapter" and a "Class Adapter"?',
    codeSnippet: `# Object Adapter: Uses composition (holds a reference to adaptee)
# Class Adapter:  Uses multiple inheritance (inherits from both Target and Adaptee)`,
    stdoutExpected: 'Object Adapter wraps an adaptee instance via composition; Class Adapter inherits from both interfaces via multiple inheritance',
    explanationTitle: 'Object Adapter vs Class Adapter',
    explanationText:
      'In Python, Object Adapters use composition (self._adaptee = adaptee) and delegate calls. Class Adapters use multiple inheritance (class Adapter(TargetInterface, AdapteeClass):). Object Adapters are widely preferred because they favor composition.',
    complexityInfo: 'GoF architectural classification',
  },
  {
    id: 'pcpp-s2-fc-063',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Object Adapter implementation in Python',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How does this Adapter class bridge the legacy third-party service to the modern billing system?',
    codeSnippet: `class LegacyPaymentGateway:
    def make_payment(self, cents):
        return f"Paid {cents} cents"

class PaymentAdapter:
    def __init__(self, legacy_gw):
        self._gw = legacy_gw

    def pay(self, dollars: float):
        cents = int(dollars * 100)
        return self._gw.make_payment(cents)

adapter = PaymentAdapter(LegacyPaymentGateway())
print(adapter.pay(25.50))`,
    stdoutExpected: 'Paid 2550 cents',
    explanationTitle: 'Composition-Based Adapter',
    explanationText:
      'The PaymentAdapter wraps LegacyPaymentGateway and translates the modern client call (pay with dollars) into the legacy format (make_payment with integer cents), shielding client code from obsolete legacy interfaces.',
    complexityInfo: 'Standard adapter implementation',
  },
  {
    id: 'pcpp-s2-fc-064',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Decorator structural design pattern (OOP vs Functional)',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the intent of the classic GoF Decorator structural pattern, and how does it relate to Python\'s @decorator syntax?',
    codeSnippet: `# GoF Decorator: Attach additional responsibilities to an object dynamically.
# Provides a flexible alternative to subclassing for extending functionality.`,
    stdoutExpected: 'Dynamically wraps an object to augment behavior at runtime; Python\'s @syntax is syntactic sugar for wrapping callables',
    explanationTitle: 'GoF Decorator Pattern',
    explanationText:
      'The GoF Decorator wraps an object to dynamically attach additional behaviors without affecting other instances of the same class. While Python provides @decorator syntax for functions/methods, class-level wrappers achieve the true OOP structural pattern.',
    complexityInfo: 'GoF pattern vs Python language feature',
  },
  {
    id: 'pcpp-s2-fc-065',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'OOP Decorator wrapper with dynamic delegation (__getattr__)',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How does __getattr__ enable a generic OOP Decorator to pass un-intercepted methods to the wrapped component?',
    codeSnippet: `class LoggingDecorator:
    def __init__(self, wrapped):
        self._wrapped = wrapped

    def execute(self):
        print("Logging start")
        result = self._wrapped.execute()
        print("Logging end")
        return result

    def __getattr__(self, name):
        return getattr(self._wrapped, name)`,
    stdoutExpected: '__getattr__ dynamically delegates any attribute or method not explicitly overridden to self._wrapped',
    explanationTitle: 'Transparent Delegation via __getattr__',
    explanationText:
      'When client code invokes a method not explicitly defined on LoggingDecorator, Python falls back to __getattr__. By delegating to getattr(self._wrapped, name), the decorator transparently preserves the entire interface of the wrapped object.',
    complexityInfo: 'Pythonic structural delegation',
  },
  {
    id: 'pcpp-s2-fc-066',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Facade pattern intent and responsibilities',
    category: 'T2: Design Patterns',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the intent of the Facade design pattern?',
    codeSnippet: `# Facade Pattern:
# Provide a unified interface to a set of interfaces in a subsystem.
# Defines a higher-level interface that makes the subsystem easier to use.`,
    stdoutExpected: 'Provides a unified, simplified high-level interface to a complex subsystem of interdependent classes',
    explanationTitle: 'Facade Pattern Intent',
    explanationText:
      'The Facade pattern shields client code from the complexity of a multi-class subsystem (e.g. video decoder, audio mixer, optical disc reader). It provides a single straightforward entry point (e.g. dvd_player.play_movie()).',
    complexityInfo: 'Classic architectural simplification pattern',
  },
  {
    id: 'pcpp-s2-fc-067',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Facade pattern implementation example',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How does ComputerFacade simplify starting a computer subsystem?',
    codeSnippet: `class CPU:
    def freeze(self): pass
    def jump(self, position): pass
    def execute(self): return "Running"

class Memory:
    def load(self, position, data): pass

class HardDrive:
    def read(self, lba, size): return "boot_data"

class ComputerFacade:
    def __init__(self):
        self.cpu = CPU()
        self.mem = Memory()
        self.hd = HardDrive()

    def start(self):
        self.cpu.freeze()
        data = self.hd.read(0, 1024)
        self.mem.load(0, data)
        self.cpu.jump(0)
        return self.cpu.execute()`,
    stdoutExpected: 'Clients call computer.start() instead of managing the coordination between CPU, Memory, and HardDrive',
    explanationTitle: 'Subsystem Coordination via Facade',
    explanationText:
      'The client interacts solely with ComputerFacade through a clean, high-level method start(), eliminating direct dependencies on CPU, Memory, or HardDrive classes and reducing overall system coupling.',
    complexityInfo: 'Structural pattern implementation',
  },
  {
    id: 'pcpp-s2-fc-068',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Proxy pattern intent and classification',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the intent of the Proxy design pattern, and what are its three primary variations?',
    codeSnippet: `# Proxy Pattern:
# Provide a surrogate or placeholder for another object to control access to it.`,
    stdoutExpected: 'Controls access to a subject object; variations: (1) Virtual Proxy (lazy loading), (2) Protection Proxy (authorization), (3) Remote Proxy (network)',
    explanationTitle: 'Proxy Pattern Intent & Types',
    explanationText:
      'A Proxy acts as an intermediary controlling access to a real subject object. Virtual Proxies defer instantiation of heavy resources; Protection Proxies verify security permissions; Remote Proxies represent remote services running in other processes.',
    complexityInfo: 'GoF structural proxy taxonomy',
  },
  {
    id: 'pcpp-s2-fc-069',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Virtual Proxy for lazy loading in Python',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How does this Virtual Proxy avoid loading heavy image bytes into memory until display() is called?',
    codeSnippet: `class RealImage:
    def __init__(self, filename):
        self.filename = filename
        self._load_from_disk()

    def _load_from_disk(self):
        print(f"Loading {self.filename} (Heavy)")

    def display(self):
        return f"Displaying {self.filename}"

class ProxyImage:
    def __init__(self, filename):
        self.filename = filename
        self._real_image = None

    def display(self):
        if self._real_image is None:
            self._real_image = RealImage(self.filename)
        return self._real_image.display()`,
    stdoutExpected: 'ProxyImage instantiates RealImage only when display() is invoked, avoiding premature disk I/O',
    explanationTitle: 'Virtual Proxy Lazy Loading',
    explanationText:
      'The client holds a ProxyImage object with zero disk overhead upon construction. Only when display() is called does the proxy initialize the actual RealImage, caching it for subsequent calls.',
    complexityInfo: 'Virtual proxy design pattern',
  },
  {
    id: 'pcpp-s2-fc-070',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Protection Proxy for authorization access control',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How does a Protection Proxy safeguard sensitive operations on a real subject?',
    codeSnippet: `class SensitiveReport:
    def view(self): return "Classified Data"

class ReportProtectionProxy:
    def __init__(self, report, user_role):
        self._report = report
        self.user_role = user_role

    def view(self):
        if self.user_role != "admin":
            raise PermissionError("Access Denied")
        return self._report.view()`,
    stdoutExpected: 'Intercepts access to the real subject and validates caller permissions before delegating',
    explanationTitle: 'Protection Proxy Pattern',
    explanationText:
      'Protection Proxies control access to the underlying object by verifying caller credentials or permissions before delegating requests. Unauthorized calls are rejected with an exception without ever touching the real subject.',
    complexityInfo: 'Security structural pattern',
  },
  {
    id: 'pcpp-s2-fc-071',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Composite pattern intent and tree structures',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the intent of the Composite design pattern and what are Leaf and Composite components?',
    codeSnippet: `# Composite Pattern:
# Compose objects into tree structures to represent part-whole hierarchies.
# Clients treat individual objects (Leaf) and compositions (Composite) uniformly.`,
    stdoutExpected: 'Composes objects into tree hierarchies where individual items (Leaves) and containers (Composites) share the same interface',
    explanationTitle: 'Composite Pattern Intent',
    explanationText:
      'The Composite pattern allows clients to treat individual objects (Leaf) and groupings of objects (Composite) identically. Common examples include file systems (File vs Folder) and GUI element hierarchies (Widget vs Container).',
    complexityInfo: 'Hierarchical tree structural pattern',
  },
  {
    id: 'pcpp-s2-fc-072',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Composite pattern implementation (File System example)',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is output when get_size() is called on the root folder composite?',
    codeSnippet: `class File:
    def __init__(self, name, size):
        self.name = name
        self.size = size
    def get_size(self): return self.size

class Folder:
    def __init__(self, name):
        self.name = name
        self.children = []
    def add(self, component): self.children.append(component)
    def get_size(self):
        return sum(child.get_size() for child in self.children)

root = Folder("root")
root.add(File("a.txt", 100))
sub = Folder("sub")
sub.add(File("b.txt", 250))
root.add(sub)
print(root.get_size())`,
    stdoutExpected: '350',
    explanationTitle: 'Uniform Recursive Traversal in Composite',
    explanationText:
      'Because both File and Folder implement get_size(), the Folder composite simply sums the get_size() calls across its children, enabling recursive tree evaluation without type checking (isinstance checks).',
    complexityInfo: 'Composite recursive dispatch',
  },
  {
    id: 'pcpp-s2-fc-073',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Adapter vs Decorator vs Facade vs Proxy distinction',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Summarize the primary purpose difference between Adapter, Decorator, Facade, and Proxy.',
    codeSnippet: `# Match the pattern to its primary purpose:
# 1. Adapter:   changes the _____
# 2. Decorator: adds _____ without changing the interface
# 3. Facade:    simplifies the _____ to a subsystem
# 4. Proxy:     controls _____ to an object`,
    stdoutExpected: '1. Interface; 2. Responsibilities/behavior; 3. Interface; 4. Access',
    explanationTitle: 'Structural Pattern Purpose Comparison',
    explanationText:
      'Adapter changes an interface to resolve incompatibility; Decorator enhances responsibilities while keeping the same interface; Facade creates a new simpler interface over multiple classes; Proxy controls access to the same interface.',
    complexityInfo: 'Core PCPP-32-10x pattern comparison question',
  },
  {
    id: 'pcpp-s2-fc-074',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Flyweight pattern intent and memory optimization',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the intent of the Flyweight pattern, and what is the difference between intrinsic and extrinsic state?',
    codeSnippet: `# Flyweight Pattern:
# Share common state among multiple objects to support large numbers of fine-grained objects efficiently.`,
    stdoutExpected: 'Intrinsic state is invariant and shared; Extrinsic state is context-dependent and supplied by the client',
    explanationTitle: 'Flyweight Pattern & State Segregation',
    explanationText:
      'Flyweight prevents RAM exhaustion when rendering millions of similar objects (e.g. tree models in a forest simulator). Intrinsic state (tree texture, mesh) is stored once in shared flyweights; extrinsic state (x, y coordinate) is passed in per-instance.',
    complexityInfo: 'Advanced memory structural pattern',
  },
  {
    id: 'pcpp-s2-fc-075',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Bridge pattern intent: decoupling abstraction from implementation',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What problem does the Bridge design pattern solve?',
    codeSnippet: `# Bridge Pattern:
# Decouple an abstraction from its implementation so that the two can vary independently.`,
    stdoutExpected: 'Prevents Cartesian product class explosion (e.g. M shapes x N renderers = M*N subclasses) by replacing inheritance with composition',
    explanationTitle: 'Bridge Pattern Architecture',
    explanationText:
      'Without Bridge, supporting Circle and Square across Windows and Linux requires CircleWindows, CircleLinux, SquareWindows, SquareLinux (M*N). Bridge splits them into Abstraction (Shape) with a reference to Implementor (Renderer), requiring only M+N classes.',
    complexityInfo: 'Class explosion prevention pattern',
  },
];
