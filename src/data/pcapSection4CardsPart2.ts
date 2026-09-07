import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 4: OBJECT-ORIENTED PROGRAMMING (OOP) (Part 2: Cards 41 to 70)
 * - Chapter 4.3: Name Mangling & Private Attributes (Cards 41-60)
 * - Chapter 4.4: Methods, Constructor __init__, and Special Dunder Methods (Part 1: Cards 61-70)
 */
export const section4CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.3: NAME MANGLING & PRIVATE ATTRIBUTES (Cards 41 to 60)
  // =========================================================================
  {
    id: 'pcap-s4-fc-041',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Python public vs private philosophy',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What is Python’s philosophical approach regarding private attributes and access control?',
    codeSnippet: `# "We are all consenting adults here"
# Python relies on conventions and name transformations rather than access specifiers
class Bank:
    def __init__(self, balance):
        self.public_id = "ACC-01"
        self._internal_code = 9921
        self.__balance = balance

b = Bank(1000)
print(b.public_id)`,
    stdoutExpected: 'ACC-01',
    explanationTitle: 'Consenting Adults Philosophy',
    explanationText:
      'Python has no hard access specifiers like `private` or `protected` in C++ or Java. Instead, it uses naming conventions (`_`) and compile-time name mangling (`__`) to signal intent and avoid naming collisions.',
    complexityInfo: 'Core language philosophy',
  },
  {
    id: 'pcap-s4-fc-042',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Single leading underscore convention',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Does a single leading underscore (`_var`) prevent external access to an attribute in Python?',
    codeSnippet: `class Vault:
    def __init__(self):
        self._secret = "pcap_pass"

v = Vault()
print(v._secret)  # Accessible without error!`,
    stdoutExpected: 'pcap_pass',
    explanationTitle: 'Convention Without Enforcement',
    explanationText:
      'A single leading underscore is strictly a convention indicating that an attribute or method is intended for internal use only. The Python interpreter does not enforce privacy or alter the attribute name.',
    complexityInfo: 'Stylistic and API contract convention',
  },
  {
    id: 'pcap-s4-fc-043',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Double leading underscore triggers name mangling',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What happens when an attribute name begins with two or more leading underscores (and at most one trailing)?',
    codeSnippet: `class Secret:
    def __init__(self):
        self.__code = 1234

s = Secret()
try:
    print(s.__code)
except AttributeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'AttributeError',
    explanationTitle: 'Name Mangling Trigger',
    explanationText:
      'Any identifier with at least two leading underscores and at most one trailing underscore is textually replaced by the compiler with `_ClassName__identifier`, causing direct access by the original name to fail with `AttributeError`.',
    complexityInfo: 'Compile-time symbol transformation',
  },
  {
    id: 'pcap-s4-fc-044',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'The exact name mangling formula',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What exact formula does Python use to rewrite private attributes?',
    codeSnippet: `class Account:
    def __init__(self, bal):
        self.__balance = bal

a = Account(500)
print(a._Account__balance)`,
    stdoutExpected: '500',
    explanationTitle: '_ClassName__attributeName Formula',
    explanationText:
      'The compiler rewrites `__attribute` as `_ClassName__attribute`. The class name is prepended with a single leading underscore, followed by the original double-underscored identifier.',
    complexityInfo: 'Key PCAP exam formula',
  },
  {
    id: 'pcap-s4-fc-045',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Direct access to mangled attributes',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Can you still access a mangled attribute from outside the class if you use its mangled name?',
    codeSnippet: `class LockBox:
    def __init__(self, key):
        self.__key = key

b = LockBox("master-key")
print(hasattr(b, "__key"))
print(hasattr(b, "_LockBox__key"))
print(b._LockBox__key)`,
    stdoutExpected: `False
True
master-key`,
    explanationTitle: 'No True Hard Privacy',
    explanationText:
      'Because name mangling is a name rewriting mechanism and not cryptographic or VM-level encapsulation, mangled attributes can still be read and modified using `instance._ClassName__var`.',
    complexityInfo: 'Demonstrates non-strict privacy',
  },
  {
    id: 'pcap-s4-fc-046',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Purpose of name mangling in inheritance',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What primary problem does name mangling solve in class inheritance hierarchies?',
    codeSnippet: `class Base:
    def __init__(self):
        self.__value = "BaseValue"
    def get_base_val(self):
        return self.__value

class Sub(Base):
    def __init__(self):
        super().__init__()
        self.__value = "SubValue"

s = Sub()
print(s.get_base_val(), s._Sub__value)`,
    stdoutExpected: 'BaseValue SubValue',
    explanationTitle: 'Subclass Namespace Collision Prevention',
    explanationText:
      'Name mangling ensures that a subclass defining an attribute with the same private name (`self.__value`) does not accidentally overwrite the superclass’s attribute, because `_Base__value` and `_Sub__value` exist independently.',
    complexityInfo: 'Namespace isolation in hierarchies',
  },
  {
    id: 'pcap-s4-fc-047',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Private methods are also mangled',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Does name mangling apply to methods defined with double leading underscores?',
    codeSnippet: `class Service:
    def __init__(self): pass
    def __authenticate(self):
        return "Auth OK"
    def run(self):
        return self.__authenticate()

s = Service()
print(s.run())
print(hasattr(s, "_Service__authenticate"))`,
    stdoutExpected: `Auth OK
True`,
    explanationTitle: 'Private Method Mangling',
    explanationText:
      'Methods beginning with double underscores are mangled in the exact same manner as attributes: `def __authenticate(self)` becomes `_Service__authenticate`. Internal calls like `self.__authenticate()` work seamlessly.',
    complexityInfo: 'Method symbol rewriting',
  },
  {
    id: 'pcap-s4-fc-048',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Double leading and double trailing underscore exclusion',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Are names with two leading AND two trailing underscores (dunders) mangled by Python?',
    codeSnippet: `class Magic:
    def __custom__(self):
        return "Not mangled"

m = Magic()
print(hasattr(m, "__custom__"))
print(hasattr(m, "_Magic__custom__"))`,
    stdoutExpected: `True
False`,
    explanationTitle: 'Dunder Names Are Never Mangled',
    explanationText:
      'Identifiers that both begin and end with double underscores (e.g., `__init__`, `__str__`, `__doc__`, `__custom__`) are reserved for Python special methods and are NOT subject to name mangling.',
    complexityInfo: 'Dunder exception to mangling rule',
  },
  {
    id: 'pcap-s4-fc-049',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Double leading and single trailing underscore',
    category: 'T1: Built-ins',
    difficulty: 'Advanced',
    factor: '2.3',
    intervalDays: 3,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Is an identifier with two leading underscores and ONE trailing underscore mangled?',
    codeSnippet: `class Odd:
    def __init__(self):
        self.__var_ = 42

o = Odd()
print(hasattr(o, "_Odd__var_"))
print(hasattr(o, "__var_"))`,
    stdoutExpected: `True
False`,
    explanationTitle: 'At Most One Trailing Underscore',
    explanationText:
      'The Python rule states: identifiers with at least two leading underscores and AT MOST one trailing underscore are mangled. Therefore, `__var_` is mangled to `_Odd__var_`.',
    complexityInfo: 'Strict language specification rule',
  },
  {
    id: 'pcap-s4-fc-050',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Single trailing underscore convention for keywords',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What is the standard PEP 8 convention when a variable or attribute name conflicts with a Python keyword?',
    codeSnippet: `class Tag:
    def __init__(self, class_name):
        self.class_ = class_name  # Avoid keyword 'class'

t = Tag("btn-primary")
print(t.class_)`,
    stdoutExpected: 'btn-primary',
    explanationTitle: 'Trailing Underscore Keyword Avoidance',
    explanationText:
      'PEP 8 recommends appending a single trailing underscore (e.g., `class_`, `def_`, `id_`, `list_`) when a chosen name conflicts with a Python reserved keyword or built-in.',
    complexityInfo: 'PEP 8 naming convention',
  },
  {
    id: 'pcap-s4-fc-051',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Name mangling when class name has leading underscores',
    category: 'T2: Output',
    difficulty: 'Advanced',
    factor: '2.3',
    intervalDays: 3,
    chapter: '4.3',
    section: 'Section 4',
    question: 'How is an attribute `__val` mangled if the class itself is named `_Helper` or `__Hidden`?',
    codeSnippet: `class _Helper:
    def __init__(self):
        self.__val = 99

h = _Helper()
print(hasattr(h, "_Helper__val"))`,
    stdoutExpected: 'True',
    explanationTitle: 'Mangled Class Name Stripping',
    explanationText:
      'When mangling, leading underscores in the class name are stripped before prepending a single leading underscore: class `_Helper` with `__val` becomes `_Helper__val`.',
    complexityInfo: 'Class name normalization during mangling',
  },
  {
    id: 'pcap-s4-fc-052',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Private class variables are mangled too',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Are class variables defined with `__` inside the class body also mangled?',
    codeSnippet: `class Config:
    __SECRET_KEY = "xyz789"

print(hasattr(Config, "__SECRET_KEY"))
print(hasattr(Config, "_Config__SECRET_KEY"))
print(Config._Config__SECRET_KEY)`,
    stdoutExpected: `False
True
xyz789`,
    explanationTitle: 'Class Variable Name Mangling',
    explanationText:
      'Yes, name mangling applies to ANY identifier inside a class definition that starts with `__`. `Config.__SECRET_KEY` becomes `Config._Config__SECRET_KEY`.',
    complexityInfo: 'Applied uniformly across class definitions',
  },
  {
    id: 'pcap-s4-fc-053',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Dynamic private attribute added outside class is NOT mangled',
    category: 'T4: Bugs',
    difficulty: 'Advanced',
    factor: '2.3',
    intervalDays: 3,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What happens if you assign `obj.__extra = 1` outside the class definition?',
    codeSnippet: `class Box: pass
b = Box()
b.__extra = "dynamic"

print(hasattr(b, "__extra"))
print(hasattr(b, "_Box__extra"))
print(b.__extra)`,
    stdoutExpected: `True
False
dynamic`,
    explanationTitle: 'Compile-Time vs Runtime Binding',
    explanationText:
      'Name mangling occurs at COMPILE TIME within the class code block. Setting `b.__extra = ...` dynamically from outside the class does not trigger mangling; the attribute is stored literally as `"__extra"`.',
    complexityInfo: 'Compile-time syntax transformation',
  },
  {
    id: 'pcap-s4-fc-054',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Calling private method of superclass from subclass raises AttributeError',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Why does a subclass method calling `self.__private()` fail even if the superclass defined it?',
    codeSnippet: `class Parent:
    def __hidden(self): return "Parent secret"

class Child(Parent):
    def reveal(self):
        return self.__hidden()

c = Child()
try:
    c.reveal()
except AttributeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'AttributeError',
    explanationTitle: 'Subclass Looks for Mangled Subclass Name',
    explanationText:
      'Inside `Child`, `self.__hidden()` is compiled to `self._Child__hidden()`. However, the method in `Parent` was mangled to `_Parent__hidden()`. Because `_Child__hidden` does not exist, an `AttributeError` is raised.',
    complexityInfo: 'Classic PCAP inheritance trap',
  },
  {
    id: 'pcap-s4-fc-055',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Explicitly invoking superclass mangled method',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.3',
    section: 'Section 4',
    question: 'How can a subclass method explicitly invoke a private mangled method of its superclass?',
    codeSnippet: `class Parent:
    def __secret(self): return "Parent Secret"

class Child(Parent):
    def reveal(self):
        return self._Parent__secret()

print(Child().reveal())`,
    stdoutExpected: 'Parent Secret',
    explanationTitle: 'Explicit Mangled Call',
    explanationText:
      'A subclass can call the superclass method by using the fully qualified mangled name `self._Parent__secret()`.',
    complexityInfo: 'Bypasses compile-time renaming',
  },
  {
    id: 'pcap-s4-fc-056',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Inspecting mangled attributes in __dict__',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.3',
    section: 'Section 4',
    question: 'How do mangled attributes appear in an object’s `__dict__` keys?',
    codeSnippet: `class Point:
    def __init__(self, x, y):
        self.__x = x
        self.y = y

p = Point(3, 4)
print(sorted(p.__dict__.keys()))`,
    stdoutExpected: "['_Point__x', 'y']",
    explanationTitle: 'Mangled Keys in __dict__',
    explanationText:
      '`p.__dict__` stores attributes under their rewritten names. Thus, `self.__x` is stored under key `\'_Point__x\'`, while public `y` is stored under `\'y\'`.',
    complexityInfo: 'Direct representation in instance namespace',
  },
  {
    id: 'pcap-s4-fc-057',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Single leading underscore import behavior with wildcard',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.3',
    section: 'Section 4',
    question: 'How does a single leading underscore on a module-level variable affect `from module import *`?',
    codeSnippet: `# If module.py defines:
# _internal = 10
# public = 20
# 'from module import *' imports only 'public'
print("Single underscore names are omitted from wildcard imports unless in __all__")`,
    stdoutExpected: 'Single underscore names are omitted from wildcard imports unless in __all__',
    explanationTitle: 'Wildcard Import Filtering',
    explanationText:
      'In addition to being a class attribute convention, a single leading underscore on module-level objects prevents them from being imported when a client executes `from module import *`.',
    complexityInfo: 'PCAP Section 1 & Section 4 cross-topic',
  },
  {
    id: 'pcap-s4-fc-058',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'More than two leading underscores',
    category: 'T1: Built-ins',
    difficulty: 'Advanced',
    factor: '2.3',
    intervalDays: 3,
    chapter: '4.3',
    section: 'Section 4',
    question: 'What happens if an identifier has 3 or 4 leading underscores, such as `___var`?',
    codeSnippet: `class Test:
    def __init__(self):
        self.___tri = "triple"

t = Test()
print(hasattr(t, "_Test___tri"))`,
    stdoutExpected: 'True',
    explanationTitle: 'At Least Two Leading Underscores Rule',
    explanationText:
      'The rule triggers on "at least two" leading underscores. In `___tri`, the compiler leaves all three underscores intact and prepends `_ClassName`: `_Test___tri`.',
    complexityInfo: 'Handles variable-length leading underscores',
  },
  {
    id: 'pcap-s4-fc-059',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'dir() output with mangled attributes',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Does built-in `dir(obj)` list mangled attributes under their original or mangled names?',
    codeSnippet: `class Shield:
    def __init__(self):
        self.__power = 100

s = Shield()
print("__power" in dir(s))
print("_Shield__power" in dir(s))`,
    stdoutExpected: `False
True`,
    explanationTitle: 'dir() Reflects Mangled Names',
    explanationText:
      '`dir()` reports actual runtime attribute names found in namespaces. Because `__power` was transformed to `_Shield__power`, only the mangled name appears.',
    complexityInfo: 'Namespace reflection via dir()',
  },
  {
    id: 'pcap-s4-fc-060',
    cardType: 'PCAP 4.3 • Name Mangling',
    topic: 'Summary: Name mangling is NOT security',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.3',
    section: 'Section 4',
    question: 'Is name mangling intended as a security mechanism to hide secrets from unauthorized code?',
    codeSnippet: `class PasswordStore:
    def __init__(self, pw): self.__pw = pw

store = PasswordStore("SuperSecret123")
# Anyone with access to the object can read it:
print(getattr(store, "_PasswordStore__pw"))`,
    stdoutExpected: 'SuperSecret123',
    explanationTitle: 'Safety vs Security',
    explanationText:
      'Name mangling is designed solely to prevent accidental name collisions in class inheritance. It provides NO security against malicious inspection, debugging tools, or serialization.',
    complexityInfo: 'Fundamental architectural principle',
  },

  // =========================================================================
  // CHAPTER 4.4: METHODS, CONSTRUCTOR __init__, AND SPECIAL DUNDER METHODS (Cards 61 to 70)
  // =========================================================================
  {
    id: 'pcap-s4-fc-061',
    cardType: 'PCAP 4.4 • Methods & Dunders',
    topic: 'Explicit self argument requirement in methods',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'Why must instance methods explicitly declare `self` as their first parameter in Python?',
    codeSnippet: `class Printer:
    def print_msg(self, msg):
        return f"MSG: {msg}"

p = Printer()
print(p.print_msg("PCAP Exam"))`,
    stdoutExpected: 'MSG: PCAP Exam',
    explanationTitle: 'Explicit Instance Passing',
    explanationText:
      'Unlike languages with an implicit `this`, Python explicitly passes the instance as the first argument to any instance method call: `p.print_msg("...")` becomes `Printer.print_msg(p, "...")`.',
    complexityInfo: 'Python method binding mechanics',
  },
  {
    id: 'pcap-s4-fc-062',
    cardType: 'PCAP 4.4 • Methods & Dunders',
    topic: 'Syntactic equivalence: obj.method() vs Class.method(obj)',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What is the exact functional equivalence of `instance.method(arg)` using the class object?',
    codeSnippet: `class Calc:
    def double(self, n): return n * 2

c = Calc()
res1 = c.double(5)
res2 = Calc.double(c, 5)
print(res1, res2, res1 == res2)`,
    stdoutExpected: '10 10 True',
    explanationTitle: 'Bound Method Call Equivalence',
    explanationText:
      '`c.double(5)` accesses a bound method where `self` is automatically bound to `c`. Calling `Calc.double(c, 5)` invokes the unbound function on the class, passing `c` explicitly.',
    complexityInfo: 'Descriptor protocol under the hood',
  },
  {
    id: 'pcap-s4-fc-063',
    cardType: 'PCAP 4.4 • Methods & Dunders',
    topic: 'TypeError when omitting self in instance method',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What error occurs when calling `obj.foo()` if `foo()` was defined with zero parameters in class body?',
    codeSnippet: `class Broken:
    def no_self():
        return "Oops"

b = Broken()
try:
    b.no_self()
except TypeError as err:
    print(type(err).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'TypeError: Positional Argument Mismatch',
    explanationText:
      'Calling `b.no_self()` automatically passes `b` as the first argument. Since `no_self()` was defined without parameters, Python raises `TypeError: no_self() takes 0 positional arguments but 1 was given`.',
    complexityInfo: 'Top-frequency PCAP question',
  },
  {
    id: 'pcap-s4-fc-064',
    cardType: 'PCAP 4.4 • Methods & Dunders',
    topic: 'Calling parameterless method through ClassName directly',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'Can you call a parameterless class method directly using `ClassName.method()` in Python 3?',
    codeSnippet: `class Utility:
    def info():
        return "Utility v1.0"

print(Utility.info())`,
    stdoutExpected: 'Utility v1.0',
    explanationTitle: 'Unbound Functions in Class Namespace',
    explanationText:
      'In Python 3, a function defined inside a class without `self` is simply an ordinary function in the class dictionary. Invoking it via `Utility.info()` passes no arguments and succeeds.',
    complexityInfo: 'Python 3 unbound function behavior',
  },
  {
    id: 'pcap-s4-fc-065',
    cardType: 'PCAP 4.4 • Methods & Dunders',
    topic: 'Constructor initialization with __init__',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What is the role of `__init__`, and when is it automatically invoked?',
    codeSnippet: `class Person:
    def __init__(self, name):
        self.name = name
        print("Initialized:", self.name)

p = Person("Alex")`,
    stdoutExpected: 'Initialized: Alex',
    explanationTitle: '__init__ Initializer Mechanics',
    explanationText:
      '`__init__` is the initializer method in Python. When `Person("Alex")` is called, Python creates a blank instance via `__new__` and immediately passes it to `__init__(self, "Alex")` to set up initial state.',
    complexityInfo: 'Instance lifecycle step 2',
  },
  {
    id: 'pcap-s4-fc-066',
    cardType: 'PCAP 4.4 • Methods & Dunders',
    topic: '__init__ must return None',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What happens if `__init__` explicitly returns a non-None value (e.g. `return 10`)?',
    codeSnippet: `class Faulty:
    def __init__(self):
        return 42

try:
    f = Faulty()
except TypeError as err:
    print(type(err).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'TypeError: __init__ Must Return None',
    explanationText:
      '`__init__` is strictly an initializer, not a constructor factory. Returning any value other than `None` raises `TypeError: __init__() should return None, not \'int\'`. A bare `return` or `return None` is allowed.',
    complexityInfo: 'Strict language constraint',
  },
  {
    id: 'pcap-s4-fc-067',
    cardType: 'PCAP 4.4 • Methods & Dunders',
    topic: 'Default arguments in __init__',
    category: 'T2: Output',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'How do default argument values in `__init__` allow flexible instantiation?',
    codeSnippet: `class Canvas:
    def __init__(self, width=800, height=600):
        self.width = width
        self.height = height

c1 = Canvas()
c2 = Canvas(1920, 1080)
print(f"{c1.width}x{c1.height}, {c2.width}x{c2.height}")`,
    stdoutExpected: '800x600, 1920x1080',
    explanationTitle: 'Default Constructor Parameters',
    explanationText:
      '`__init__` accepts default arguments according to standard Python function parameter rules. Callers can omit arguments with defaults or provide positional/keyword overrides.',
    complexityInfo: 'Standard function evaluation rules',
  },
  {
    id: 'pcap-s4-fc-068',
    cardType: 'PCAP 4.4 • Methods & Dunders',
    topic: '__str__ for user-friendly string representation',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What built-in functions trigger an object’s `__str__` method?',
    codeSnippet: `class Book:
    def __init__(self, title): self.title = title
    def __str__(self): return f"Book: '{self.title}'"

b = Book("Fluent Python")
print(str(b))
print(b)
print(f"{b}")`,
    stdoutExpected: `Book: 'Fluent Python'
Book: 'Fluent Python'
Book: 'Fluent Python'`,
    explanationTitle: '__str__ Invocation Triggers',
    explanationText:
      '`__str__` is called by `str(obj)`, `print(obj)`, and string formatting (`f"{obj}"`). Its purpose is to return a human-readable, user-facing representation of the object.',
    complexityInfo: 'Must return a string',
  },
  {
    id: 'pcap-s4-fc-069',
    cardType: 'PCAP 4.4 • Methods & Dunders',
    topic: '__repr__ fallback when __str__ is missing',
    category: 'T2: Output',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What happens when `print(obj)` or `str(obj)` is called on an object that defines `__repr__` but NOT `__str__`?',
    codeSnippet: `class Coordinate:
    def __init__(self, x, y): self.x, self.y = x, y
    def __repr__(self): return f"Coordinate({self.x}, {self.y})"

c = Coordinate(10, 20)
print(str(c))
print(c)`,
    stdoutExpected: `Coordinate(10, 20)
Coordinate(10, 20)`,
    explanationTitle: '__repr__ as Fallback for __str__',
    explanationText:
      'If a class implements `__repr__` but not `__str__`, Python automatically falls back to calling `__repr__` when `str()` or `print()` is invoked.',
    complexityInfo: 'Graceful fallback delegation',
  },
  {
    id: 'pcap-s4-fc-070',
    cardType: 'PCAP 4.4 • Methods & Dunders',
    topic: '__str__ must return str type',
    category: 'T4: Bugs',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '4.4',
    section: 'Section 4',
    question: 'What exception is raised if `__str__` returns an integer or None instead of a string?',
    codeSnippet: `class BadStr:
    def __str__(self):
        return 12345

try:
    print(str(BadStr()))
except TypeError as e:
    print(type(e).__name__)`,
    stdoutExpected: 'TypeError',
    explanationTitle: 'TypeError: __str__ Returned Non-String',
    explanationText:
      '`__str__` is strictly required to return an object of type `str`. If it returns any other type (such as `int` or `None`), Python raises `TypeError: __str__ returned non-string (type int)`.',
    complexityInfo: 'Return type enforcement',
  },
];
