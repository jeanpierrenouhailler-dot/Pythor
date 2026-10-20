import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 2: CODING CONVENTIONS, BEST PRACTICES & DESIGN PATTERNS (Part 3: Cards 76 to 100)
 * - Chapter 2.4: Structural Design Patterns (Part 2: Cards 76 to 80)
 * - Chapter 2.5: Behavioral Design Patterns (Cards 81 to 100)
 */
export const pcppSection2CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.4: STRUCTURAL PATTERNS (Continued: Cards 76 to 80)
  // =========================================================================
  {
    id: 'pcpp-s2-fc-076',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Core principle: "Favor object composition over class inheritance"',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'Why does GoF software architecture advocate "Favor object composition over class inheritance"?',
    codeSnippet: `# Inheritance (rigid, compile-time coupling):
class FlyingMonster(Monster, Flyer): pass

# Composition (flexible, runtime swappable):
class Monster:
    def __init__(self, movement_behavior):
        self.movement = movement_behavior`,
    stdoutExpected: 'Composition decouples components, avoids fragile base-class problems, and allows runtime behavior swapping',
    explanationTitle: 'Composition Over Inheritance',
    explanationText:
      'Inheritance creates tight compile-time coupling (white-box reuse) that breaks encapsulation if superclass internals change. Composition (black-box reuse) defines behavior by assembling components with well-defined interfaces, which can be swapped at runtime.',
    complexityInfo: 'Fundamental GoF architectural rule',
  },
  {
    id: 'pcpp-s2-fc-077',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Dynamic Proxy with logging and execution timing',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How does this dynamic proxy intercept and time all method calls on the target object?',
    codeSnippet: `import time

class TimingProxy:
    def __init__(self, target):
        self._target = target

    def __getattr__(self, name):
        attr = getattr(self._target, name)
        if callable(attr):
            def timed_method(*args, **kwargs):
                start = time.perf_counter()
                result = attr(*args, **kwargs)
                elapsed = time.perf_counter() - start
                return result, elapsed
            return timed_method
        return attr`,
    stdoutExpected: 'Intercepts method lookups via __getattr__ and returns a wrapper closure that measures execution time',
    explanationTitle: 'Dynamic Generic Proxying in Python',
    explanationText:
      'By combining __getattr__ with callable checking and dynamic closure generation, Python can construct universal proxies that wrap every method of any target object without manually writing stub methods for each one.',
    complexityInfo: 'Dynamic metaprogramming proxy',
  },
  {
    id: 'pcpp-s2-fc-078',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Duck typing as Python\'s implicit structural adapter',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'How does Python\'s duck typing often reduce the need for rigid formal Adapter classes?',
    codeSnippet: `class FileLogger:
    def write(self, msg): pass

class SocketStream:
    def write(self, msg): pass

def record_event(stream, event):
    # stream can be anything with a .write() method!
    stream.write(str(event))`,
    stdoutExpected: 'If an object provides the expected methods (e.g. write()), it works directly without explicit interface adaptation',
    explanationTitle: 'Duck Typing and Structural Equivalence',
    explanationText:
      '"If it walks like a duck and quacks like a duck, it is a duck." Because Python does not enforce nominal compile-time interfaces, any object implementing the required protocol functions directly as a structural substitute without formal adapter wrappers.',
    complexityInfo: 'Pythonic structural philosophy',
  },
  {
    id: 'pcpp-s2-fc-079',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Anti-Corruption Layer (ACL) structural pattern',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'What is the role of an Anti-Corruption Layer (combining Adapter and Facade) in enterprise Python systems?',
    codeSnippet: `# Modern Domain Model <---> [ Anti-Corruption Layer ] <---> Messy Legacy 3rd Party API`,
    stdoutExpected: 'Translates data models and exceptions between two subsystems to prevent legacy models from leaking into clean domain logic',
    explanationTitle: 'Anti-Corruption Layer Pattern',
    explanationText:
      'An Anti-Corruption Layer uses Facades and Adapters to translate external third-party schemas and exceptions into clean, native domain models. This prevents ugly external APIs or legacy data structures from polluting modern domain logic.',
    complexityInfo: 'Enterprise structural design',
  },
  {
    id: 'pcpp-s2-fc-080',
    track: 'pcpp',
    cardType: 'PCPP 2.4 • Structural Patterns',
    topic: 'Combining Facade and Adapter for clean microservice interfaces',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.4',
    section: 'Section 2',
    question: 'When building a modern service integration, how do Facade and Adapter work together?',
    codeSnippet: `# Client code calls:
# EmailService.send_alert(user, message)
# 
# Behind EmailService:
# 1. Adapter translates User object into SendGrid API payload
# 2. Facade handles session creation, auth token renewal, and retry loops`,
    stdoutExpected: 'The Adapter handles schema/interface translation; the Facade coordinates session lifecycle and complexity',
    explanationTitle: 'Facade & Adapter Coexistence',
    explanationText:
      'While an Adapter solves interface mismatches between two classes (translating format A to format B), the Facade provides a simplified single-point entry over the complex coordination of multiple internal networking and authentication classes.',
    complexityInfo: 'Architecture integration pattern',
  },

  // =========================================================================
  // CHAPTER 2.5: BEHAVIORAL DESIGN PATTERNS (Cards 81 to 100)
  // =========================================================================
  {
    id: 'pcpp-s2-fc-081',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Observer pattern intent and core components',
    category: 'T2: Design Patterns',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the intent of the Observer design pattern and what are the two main participant roles?',
    codeSnippet: `# Observer Pattern:
# Define a one-to-many dependency between objects so that when one object changes state,
# all its dependents are notified and updated automatically.`,
    stdoutExpected: 'One-to-many state notification; Participants: Subject (Publisher) and Observers (Subscribers/Listeners)',
    explanationTitle: 'Observer Pattern Intent',
    explanationText:
      'The Observer pattern decouples an event producer (Subject) from event consumers (Observers). When the Subject\'s state mutates, it notifies all registered observers without needing to know their concrete classes or internal implementations.',
    complexityInfo: 'Core GoF behavioral pattern',
  },
  {
    id: 'pcpp-s2-fc-082',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Classic OOP Observer implementation in Python',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Complete the notification dispatch loop in this classic Subject implementation.',
    codeSnippet: `class Subject:
    def __init__(self):
        self._observers = []

    def attach(self, observer):
        self._observers.append(observer)

    def detach(self, observer):
        self._observers.remove(observer)

    def notify(self, message):
        for observer in self._observers:
            observer.update(message)  # What method is invoked on observers?`,
    stdoutExpected: 'observer.update(message) is called on each observer in self._observers',
    explanationTitle: 'Classic Subject-Observer Lifecycle',
    explanationText:
      'The Subject provides registration methods (attach/detach) and iterates through its observer collection in notify() to call the standard update() callback method on each observer, propagating state updates.',
    complexityInfo: 'Standard OOP observer mechanics',
  },
  {
    id: 'pcpp-s2-fc-083',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Pythonic Observer using set of callable callbacks',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How do first-class functions in Python allow lightweight Observer implementations without formal classes?',
    codeSnippet: `class EventEmitter:
    def __init__(self):
        self._subscribers = set()

    def subscribe(self, callback):
        self._subscribers.add(callback)

    def emit(self, data):
        for callback in self._subscribers:
            callback(data)

def on_login(user): print(f"User {user} logged in")

bus = EventEmitter()
bus.subscribe(on_login)
bus.emit("alice")`,
    stdoutExpected: 'User alice logged in',
    explanationTitle: 'Callback-Based Event Dispatcher',
    explanationText:
      'Because functions and lambdas are first-class callable objects in Python, an EventEmitter can simply store function references in a set or list and invoke them directly (callback(data)) without requiring observers to subclass an abstract Observer interface.',
    complexityInfo: 'Pythonic event-driven programming',
  },
  {
    id: 'pcpp-s2-fc-084',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Strategy pattern intent and problem domain',
    category: 'T2: Design Patterns',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the intent of the Strategy design pattern?',
    codeSnippet: `# Strategy Pattern:
# Define a family of algorithms, encapsulate each one, and make them interchangeable.
# Lets the algorithm vary independently from clients that use it.`,
    stdoutExpected: 'Encapsulates a family of algorithms into interchangeable classes or callables, allowing the algorithm to be swapped at runtime',
    explanationTitle: 'Strategy Pattern Intent',
    explanationText:
      'The Strategy pattern eliminates giant conditional switch/if-elif chains by extracting different computational algorithms (e.g. sorting algorithms, discount calculations, compression routines) into separate encapsulated strategies that can be plugged in at runtime.',
    complexityInfo: 'Foundational algorithmic pattern',
  },
  {
    id: 'pcpp-s2-fc-085',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Function-based Strategy pattern in Python',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How does Python\'s built-in "sorted(items, key=...)" function exemplify the Strategy pattern?',
    codeSnippet: `words = ['banana', 'pie', 'apple', 'kiwi']

# Strategy 1: Sort by length
print(sorted(words, key=len))

# Strategy 2: Sort by last letter
print(sorted(words, key=lambda w: w[-1]))`,
    stdoutExpected: "['pie', 'kiwi', 'apple', 'banana'] and ['banana', 'apple', 'pie', 'kiwi']",
    explanationTitle: 'Standard Library Strategy Pattern',
    explanationText:
      'The "key=" parameter of sorted() or list.sort() takes any callable strategy. Instead of requiring a SortStrategy class hierarchy, Python passes functions (len, lambdas, custom functions) directly as algorithmic strategies.',
    complexityInfo: 'Idiomatic Strategy pattern in stdlib',
  },
  {
    id: 'pcpp-s2-fc-086',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Command pattern intent and components',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the intent of the Command design pattern and what are its core participants?',
    codeSnippet: `# Command Pattern:
# Encapsulate a request as an object, thereby letting you parameterize clients
# with different requests, queue or log requests, and support undoable operations.`,
    stdoutExpected: 'Encapsulates requests as objects; Participants: Invoker, Command (execute/undo), Receiver, and Client',
    explanationTitle: 'Command Pattern Architecture',
    explanationText:
      'The Command pattern decouples the object that invokes an operation (Invoker, e.g. a UI button or task scheduler) from the object that actually knows how to perform it (Receiver). The Command object binds them together via an execute() method.',
    complexityInfo: 'GoF command encapsulation',
  },
  {
    id: 'pcpp-s2-fc-087',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Command pattern with Undo / Redo history stack',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How does this Command pattern implementation support reversible operations (Undo)?',
    codeSnippet: `class InsertTextCommand:
    def __init__(self, doc, text):
        self.doc = doc
        self.text = text

    def execute(self):
        self.doc.content += self.text

    def undo(self):
        length = len(self.text)
        self.doc.content = self.doc.content[:-length]

class Document:
    def __init__(self): self.content = ""`,
    stdoutExpected: 'By pairing execute() with an inverse undo() method and storing executed commands in a history list',
    explanationTitle: 'Undoable Command Architecture',
    explanationText:
      'To implement Undo/Redo, each command encapsulates all necessary state (or previous snapshots). An Invoker maintains an undo_stack of executed commands; calling undo() pops the last command and invokes its .undo() method.',
    complexityInfo: 'Reversible state command pattern',
  },
  {
    id: 'pcpp-s2-fc-088',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Template Method pattern intent and the Hollywood Principle',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the Template Method pattern and how does it embody the "Hollywood Principle" ("Don\'t call us, we\'ll call you")?',
    codeSnippet: `# Template Method:
# Define the skeleton of an algorithm in an operation, deferring some steps to subclasses.
# Lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.`,
    stdoutExpected: 'The base class controls the algorithm sequence (calls subclasses); subclasses only implement specific step hooks',
    explanationTitle: 'Template Method & Inverted Control',
    explanationText:
      'In the Template Method pattern, the base class defines an invariant master algorithm sequence (the template method). Subclasses implement or override specific hook methods. The base class controls execution, calling down to subclass hooks (Hollywood Principle).',
    complexityInfo: 'Control inversion pattern',
  },
  {
    id: 'pcpp-s2-fc-089',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Template Method implementation with abc.ABC',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Identify the template method and the abstract step in this data miner class.',
    codeSnippet: `from abc import ABC, abstractmethod

class DataMiner(ABC):
    def mine(self, path):       # 1. Which method is this?
        raw = self.open_file(path)
        data = self.parse_data(raw)
        self.close_file()
        return data

    def open_file(self, path): return "raw_bytes"
    def close_file(self): pass

    @abstractmethod
    def parse_data(self, raw):  # 2. Which method is this?
        pass`,
    stdoutExpected: 'mine() is the Template Method; parse_data() is the abstract primitive step implemented by subclasses',
    explanationTitle: 'Abstract Steps in Template Method',
    explanationText:
      'mine() defines the mandatory invariant sequence: open -> parse -> close. The actual parsing logic parse_data() is marked @abstractmethod, forcing concrete subclasses (e.g. PDFMiner, CSVMiner) to supply specialized parsing.',
    complexityInfo: 'Object-oriented algorithm skeleton',
  },
  {
    id: 'pcpp-s2-fc-090',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'State design pattern intent',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the intent of the State design pattern?',
    codeSnippet: `# State Pattern:
# Allow an object to alter its behavior when its internal state changes.
# The object will appear to change its class.`,
    stdoutExpected: 'Allows an object to alter its behavior when its internal state changes by delegating execution to state-specific classes',
    explanationTitle: 'State Pattern Intent',
    explanationText:
      'The State pattern replaces massive conditionals (if self.state == "DRAFT": ... elif self.state == "PUBLISHED": ...) by encapsulating state-dependent behaviors into distinct State classes, delegating requests to the active state object.',
    complexityInfo: 'Behavioral state machine pattern',
  },
  {
    id: 'pcpp-s2-fc-091',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'State pattern implementation in Python',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How does Context change its behavior dynamically as its state transitions?',
    codeSnippet: `class DraftState:
    def publish(self, doc):
        doc.state = PublishedState()
        return "Published successfully"

class PublishedState:
    def publish(self, doc):
        return "Already published!"

class Document:
    def __init__(self):
        self.state = DraftState()

    def publish(self):
        return self.state.publish(self)

doc = Document()
print(doc.publish())
print(doc.publish())`,
    stdoutExpected: 'Published successfully \\n Already published!',
    explanationTitle: 'State Transition Delegation',
    explanationText:
      'When Document.publish() is called first, DraftState transitions doc.state to PublishedState. On the second call, the new PublishedState handles the request, returning a different message without any if-else branching in Document.',
    complexityInfo: 'State machine object delegation',
  },
  {
    id: 'pcpp-s2-fc-092',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Chain of Responsibility pattern intent and structure',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the intent of the Chain of Responsibility pattern?',
    codeSnippet: `# Chain of Responsibility:
# Avoid coupling the sender of a request to its receiver by giving more than one
# object a chance to handle the request. Chain the receiving objects and pass the
# request along the chain until an object handles it.`,
    stdoutExpected: 'Passes a request along a dynamic chain of handlers until one handles it or reaches the end',
    explanationTitle: 'Chain of Responsibility Intent',
    explanationText:
      'Chain of Responsibility decouples senders and receivers. Each handler holds a reference to the next handler in the pipeline (self._next). When a request arrives, the handler either processes it or forwards it down the chain.',
    complexityInfo: 'Request pipeline pattern',
  },
  {
    id: 'pcpp-s2-fc-093',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Chain of Responsibility implementation (Authentication / Authorization)',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How does this handler chain process or propagate requests in Python?',
    codeSnippet: `class Handler:
    def __init__(self, next_handler=None):
        self._next = next_handler

    def handle(self, request):
        if self._can_handle(request):
            return self._process(request)
        if self._next:
            return self._next.handle(request)
        return "Unhandled"

    def _can_handle(self, req): return False
    def _process(self, req): pass`,
    stdoutExpected: 'Evaluates if current handler can process the request; if not, forwards recursively to self._next',
    explanationTitle: 'Sequential Handler Forwarding',
    explanationText:
      'Handlers are linked into a chain (h1 -> h2 -> h3). If h1 cannot fulfill the request, it passes it to h2. This pattern forms the architectural basis for HTTP middleware pipelines (e.g. Django, Flask, Express).',
    complexityInfo: 'Middleware pipeline architecture',
  },
  {
    id: 'pcpp-s2-fc-094',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Memento pattern intent: state capture and encapsulation preservation',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the intent of the Memento design pattern and how does it protect object encapsulation?',
    codeSnippet: `# Memento Pattern:
# Without violating encapsulation, capture and externalize an object's internal state
# so that the object can be restored to this state later.`,
    stdoutExpected: 'Captures and restores an object\'s internal state without exposing private fields to external objects',
    explanationTitle: 'Memento Pattern Intent',
    explanationText:
      'Memento creates an opaque snapshot object (Memento) containing the internal state of the Originator. A Caretaker can store history snapshots without ever inspecting or understanding the private attributes saved inside.',
    complexityInfo: 'State snapshot pattern',
  },
  {
    id: 'pcpp-s2-fc-095',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Iterator pattern: Python\'s native protocol (__iter__ & __next__)',
    category: 'T2: Design Patterns',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How is the GoF Iterator pattern natively built into the Python language syntax?',
    codeSnippet: `class Countdown:
    def __init__(self, start): self.val = start
    def __iter__(self): return self
    def __next__(self):
        if self.val <= 0:
            raise StopIteration
        self.val -= 1
        return self.val + 1`,
    stdoutExpected: 'Via the iterator protocol: __iter__() returns the iterator; __next__() returns items and signals termination with StopIteration',
    explanationTitle: 'Python Native Iterator Protocol',
    explanationText:
      'The GoF Iterator pattern provides sequential access to elements of an aggregate without exposing its internal representation. Python bakes this pattern directly into the core runtime via the __iter__() and __next__() dunder methods.',
    complexityInfo: 'Core language protocol',
  },
  {
    id: 'pcpp-s2-fc-096',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Generators with "yield" as lightweight Iterator implementations',
    category: 'T2: Design Patterns',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Why are Python generator functions considered the most elegant implementation of the Iterator pattern?',
    codeSnippet: `def fibonacci_stream(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

# Automatically implements __iter__ and __next__!`,
    stdoutExpected: 'Generators automatically create iterator objects, manage state across suspensions, and raise StopIteration upon completion',
    explanationTitle: 'Generators as Idiomatic Iterators',
    explanationText:
      'Writing custom iterator classes requires boilerplate (__iter__, __next__, manual state tracking, StopIteration). Generator functions with "yield" automatically save local frame state and synthesize an iterator object with minimal code.',
    complexityInfo: 'Python language design triumph',
  },
  {
    id: 'pcpp-s2-fc-097',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Visitor design pattern intent and double dispatch',
    category: 'T2: Design Patterns',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What is the intent of the Visitor pattern and what is "double dispatch"?',
    codeSnippet: `# Visitor Pattern:
# Represent an operation to be performed on the elements of an object structure.
# Lets you define a new operation without changing the classes of the elements on which it operates.`,
    stdoutExpected: 'Separates algorithms from the object structure on which they operate; uses double dispatch (element.accept(visitor) calling visitor.visit(element))',
    explanationTitle: 'Visitor Pattern & AST Processing',
    explanationText:
      'Visitor allows adding new operations to existing class hierarchies without editing their code. In Python, Python\'s standard library "ast.NodeVisitor" uses this pattern extensively to traverse syntax tree nodes (e.g. visit_FunctionDef, visit_ClassDef).',
    complexityInfo: 'Advanced AST and compiler pattern',
  },
  {
    id: 'pcpp-s2-fc-098',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Mediator pattern intent: preventing chaotic many-to-many communication',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'What problem does the Mediator design pattern solve?',
    codeSnippet: `# Without Mediator (Chaotic mesh):
# 5 components all communicating directly with each other (10 connections)
#
# With Mediator (Hub-and-spoke):
# 5 components communicate ONLY with the central Mediator (5 connections)`,
    stdoutExpected: 'Replaces complex many-to-many connections between colleague objects with centralized one-to-many communication through a Mediator',
    explanationTitle: 'Mediator Pattern Intent',
    explanationText:
      'The Mediator pattern prevents tight coupling where every component has direct references to every other component (like air traffic controllers directing planes, or dialog windows coordinating buttons, checkboxes, and text entries).',
    complexityInfo: 'Decoupling communication pattern',
  },
  {
    id: 'pcpp-s2-fc-099',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Null Object pattern: eliminating repetitive "if obj is not None" checks',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'How does the Null Object pattern simplify client code that deals with optional dependencies?',
    codeSnippet: `class NullLogger:
    def log(self, msg): pass  # No-op!

class Service:
    def __init__(self, logger=None):
        self.logger = logger or NullLogger()

    def do_work(self):
        # No "if self.logger is not None:" needed!
        self.logger.log("Working...")`,
    stdoutExpected: 'Provides a do-nothing (no-op) substitute object implementing the interface, avoiding ubiquitous None checks',
    explanationTitle: 'Null Object Pattern',
    explanationText:
      'Rather than returning or storing None and forcing every caller to write defensive "if obj is not None:" guards, a Null Object provides a harmless dummy implementation of the expected interface with empty methods.',
    complexityInfo: 'Defensive code reduction pattern',
  },
  {
    id: 'pcpp-s2-fc-100',
    track: 'pcpp',
    cardType: 'PCPP 2.5 • Behavioral Patterns',
    topic: 'Design Pattern taxonomy matrix for PCPP-32-10x',
    category: 'T2: Design Patterns',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '2.5',
    section: 'Section 2',
    question: 'Categorize these 6 GoF patterns into their official groups (Creational, Structural, or Behavioral): Singleton, Adapter, Strategy, Builder, Facade, Observer.',
    codeSnippet: `# Group 1: Creational (Instantiation mechanisms)
# Group 2: Structural (Class and object composition)
# Group 3: Behavioral (Algorithms and assignment of responsibilities)`,
    stdoutExpected: 'Creational: Singleton, Builder; Structural: Adapter, Facade; Behavioral: Strategy, Observer',
    explanationTitle: 'Gang of Four 3-Way Classification Matrix',
    explanationText:
      'Creational patterns deal with object creation mechanisms (Singleton, Factory Method, Abstract Factory, Builder, Prototype). Structural patterns deal with object and class composition (Adapter, Decorator, Facade, Proxy, Composite, Bridge, Flyweight). Behavioral patterns deal with algorithms and communication (Observer, Strategy, Command, State, Template Method, Chain of Responsibility, Iterator, Visitor, Mediator, Memento).',
    complexityInfo: 'Comprehensive PCPP-32-10x pattern taxonomy mastery',
  },
];
