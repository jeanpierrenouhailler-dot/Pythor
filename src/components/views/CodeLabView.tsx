import React, { useState, useMemo } from 'react';
import {
  Code2,
  Play,
  CheckCircle2,
  Terminal,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { AppView, CertificationTrack } from '../../types';

interface CodeLabViewProps {
  onNavigate: (view: AppView, section?: string) => void;
  currentTrack?: CertificationTrack;
}

interface CodeLabExperiment {
  id: string;
  track: CertificationTrack;
  title: string;
  category: string;
  description: string;
  code: string;
  output: string;
  explanation: string;
  pcapRule: string;
}

export const CodeLabView: React.FC<CodeLabViewProps> = ({ onNavigate, currentTrack = 'pcap' }) => {
  const experiments: CodeLabExperiment[] = [
    // PCAP Experiments
    {
      id: 'mro-diamond',
      track: 'pcap',
      title: 'Diamond Inheritance & C3 MRO Order',
      category: 'Inheritance & MRO',
      description: 'See how Python resolves methods in diamond multiple inheritance using C3 Linearization.',
      code: `class A:
    def action(self):
        return "A"

class B(A):
    def action(self):
        return "B"

class C(A):
    def action(self):
        return "C"

class D(B, C):
    pass

d = D()
print("Method resolved:", d.action())
print("MRO tuple:", [cls.__name__ for cls in D.__mro__])`,
      output: `Method resolved: B
MRO tuple: ['D', 'B', 'C', 'A', 'object']`,
      explanation: 'D inherits from (B, C). Python searches D -> B -> C -> A -> object. Since B overrides action(), B is found first.',
      pcapRule: 'C3 Linearization checks subclasses before common ancestor superclasses.',
    },
    {
      id: 'name-mangling',
      track: 'pcap',
      title: 'Double Underscore Name Mangling',
      category: 'Encapsulation & Mangling',
      description: 'Demonstrating how Python transforms __var to _ClassName__var at compile time.',
      code: `class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # Mangled!

acc = BankAccount(1000)

# Direct access will fail:
try:
    print(acc.__balance)
except AttributeError as e:
    print("Direct access:", type(e).__name__)

# Accessing via mangled name:
print("Mangled name value:", acc._BankAccount__balance)
print("Instance attributes:", list(acc.__dict__.keys()))`,
      output: `Direct access: AttributeError
Mangled name value: 1000
Instance attributes: ['_BankAccount__balance']`,
      explanation: 'Double leading underscores are mechanically replaced with _ClassName__attr. Python has no private keyword.',
      pcapRule: 'Names with two leading underscores and at most one trailing underscore are mangled.',
    },
    {
      id: 'shadowing-trap',
      track: 'pcap',
      title: 'Class vs. Instance Variable Shadowing',
      category: 'Variable Scopes',
      description: 'Illustrates how modifying self.x creates an instance variable and shadows the class variable.',
      code: `class Counter:
    count = 0  # Class variable

c1 = Counter()
c2 = Counter()

c1.count = 10  # Creates instance attribute on c1!

print("c1.count:", c1.count)
print("c2.count:", c2.count)
print("Counter.count:", Counter.count)
print("c1.__dict__:", c1.__dict__)
print("c2.__dict__:", c2.__dict__)`,
      output: `c1.count: 10
c2.count: 0
Counter.count: 0
c1.__dict__: {'count': 10}
c2.__dict__: {}`,
      explanation: 'Assigning to c1.count does not touch Counter.count. It creates a local entry in c1.__dict__ that shadows the class attribute.',
      pcapRule: 'Assignment to an instance always writes to that instance namespace.',
    },
    {
      id: 'init-return',
      track: 'pcap',
      title: '__init__ Constructor Return TypeError Trap',
      category: 'Dunder Rules',
      description: 'Proving that returning any non-None value from __init__ causes a fatal TypeError at instantiation.',
      code: `class InvalidClass:
    def __init__(self):
        return 42  # Trap! Must return None

try:
    obj = InvalidClass()
except TypeError as err:
    print("Caught:", err)`,
      output: `Caught: __init__() should return None, not 'int'`,
      explanation: 'The __init__ method is an initializer, not the instance creator (__new__ does that). It must strictly return None.',
      pcapRule: '__init__() must return None or have no return statement; otherwise TypeError is raised.',
    },

    // PCPP-32-10x Experiments
    {
      id: 'pcpp-metaclass',
      track: 'pcpp',
      title: 'Metaclass Class Interception & Validation',
      category: 'Advanced Metaprogramming',
      description: 'Interception of class creation via metaclass __new__ to enforce uppercase attribute naming conventions.',
      code: `class StrictNamingMeta(type):
    def __new__(mcs, name, bases, namespace):
        # Validate that all methods are lowercase
        for attr, val in namespace.items():
            if callable(val) and not attr.startswith('__') and not attr.islower():
                raise TypeError(f"Method '{attr}' must be lowercase in {name}")
        return super().__new__(mcs, name, bases, namespace)

class ValidService(metaclass=StrictNamingMeta):
    def process_data(self):
        return "Processed OK"

print("Class created successfully:", ValidService.__name__)
print("Instance method call:", ValidService().process_data())
print("Metaclass of ValidService:", type(ValidService).__name__)`,
      output: `Class created successfully: ValidService
Instance method call: Processed OK
Metaclass of ValidService: StrictNamingMeta`,
      explanation: 'Metaclass __new__ runs before the class object is allocated in memory, receiving (name, bases, namespace) dictionary. It can validate, alter, or inject class properties.',
      pcapRule: 'PCPP 1.5: Metaclasses inherit from type and control class construction lifecycle.',
    },
    {
      id: 'pcpp-descriptor',
      track: 'pcpp',
      title: 'Data Descriptors with __set_name__ & Protocol',
      category: 'Descriptors & Encapsulation',
      description: 'Modern Python 3.6+ descriptor protocol utilizing __set_name__, __get__, and __set__ for typed property validation.',
      code: `class IntegerField:
    def __set_name__(self, owner, name):
        self.public_name = name
        self.private_name = '_' + name

    def __get__(self, obj, objtype=None):
        if obj is None:
            return self
        return getattr(obj, self.private_name, 0)

    def __set__(self, obj, value):
        if not isinstance(value, int) or value < 0:
            raise ValueError(f"{self.public_name} must be a positive int")
        setattr(obj, self.private_name, value)

class InventoryItem:
    quantity = IntegerField()

item = InventoryItem()
item.quantity = 45
print("Item quantity:", item.quantity)
print("Underlying storage:", item._quantity)
print("Descriptor from class:", type(InventoryItem.quantity).__name__)`,
      output: `Item quantity: 45
Underlying storage: 45
Descriptor from class: IntegerField`,
      explanation: '__set_name__ eliminates boilerplate by automatically assigning the attribute name when the owning class is defined. Data descriptors define both __get__ and __set__.',
      pcapRule: 'PCPP 1.2: Data descriptors take precedence over instance __dict__ lookups.',
    },
    {
      id: 'pcpp-abc-virtual',
      track: 'pcpp',
      title: 'Abstract Base Classes & Virtual Subclassing',
      category: 'ABCs & Polymorphism',
      description: 'Registering virtual subclasses with ABC.register() and verifying isinstance / issubclass without inheritance.',
      code: `from abc import ABC, abstractmethod

class PluginProtocol(ABC):
    @abstractmethod
    def execute(self):
        pass

class CustomHandler:
    def execute(self):
        return "Executing custom handler"

# Register virtual subclass (no direct inheritance)
PluginProtocol.register(CustomHandler)

handler = CustomHandler()
print("issubclass check:", issubclass(CustomHandler, PluginProtocol))
print("isinstance check:", isinstance(handler, PluginProtocol))
print("Handler MRO (no PluginProtocol in tuple):", [c.__name__ for c in CustomHandler.__mro__])`,
      output: `issubclass check: True
isinstance check: True
Handler MRO (no PluginProtocol in tuple): ['CustomHandler', 'object']`,
      explanation: 'ABCMeta.register() enables structural subtyping (duck-typing) where isinstance returns True even though the class MRO does not include the ABC superclass.',
      pcapRule: 'PCPP 1.4: Virtual subclasses pass isinstance/issubclass but do not inherit implementation or appear in __mro__.',
    },
    {
      id: 'pcpp-slots',
      track: 'pcpp',
      title: '__slots__ Memory Optimization & Attribute Lockdown',
      category: 'Optimization & Data Models',
      description: 'Preventing dynamic __dict__ allocation for microsecond attribute access and reduced RAM footprint.',
      code: `class Point2D:
    __slots__ = ('x', 'y')
    def __init__(self, x, y):
        self.x = x
        self.y = y

p = Point2D(10, 20)
print("Coordinates:", p.x, p.y)
print("Has __dict__:", hasattr(p, '__dict__'))

try:
    p.z = 30  # Forbidden by __slots__
except AttributeError as err:
    print("Locked attribute write:", err)`,
      output: `Coordinates: 10 20
Has __dict__: False
Locked attribute write: 'Point2D' object has no attribute 'z'`,
      explanation: 'When __slots__ is defined, instances do not instantiate a per-object __dict__ dictionary, drastically reducing RAM overhead for millions of instances and preventing accidental typos.',
      pcapRule: 'PCPP 1.1: __slots__ restricts valid attribute names unless __dict__ is explicitly included in __slots__.',
    },
    // PCET Experiments
    {
      id: 'pcet-pytest-fixtures',
      track: 'pcet',
      title: 'pytest Yield Fixtures & Tear-Down Lifecycle',
      category: 'Test Fixtures & Lifecycle',
      description: 'Understanding setup, yield, and teardown execution order in pytest fixtures.',
      code: `def simulate_fixture_lifecycle():
    log = []
    
    # Simulating:
    # @pytest.fixture
    # def db_connection():
    #     log.append("Setup: Open connection")
    #     yield "conn_obj"
    #     log.append("Teardown: Close connection")

    def test_worker(resource):
        log.append(f"Execute: Using {resource}")
        assert resource == "conn_obj"

    # Setup phase
    log.append("Setup: Open connection")
    resource = "conn_obj"
    
    # Test execution
    test_worker(resource)
    
    # Teardown phase
    log.append("Teardown: Close connection")
    
    return log

events = simulate_fixture_lifecycle()
for step, evt in enumerate(events, 1):
    print(f"Step {step}: {evt}")`,
      output: `Step 1: Setup: Open connection
Step 2: Execute: Using conn_obj
Step 3: Teardown: Close connection`,
      explanation: 'In pytest, code preceding the yield statement acts as setUp(), and code following yield acts as tearDown(), executing reliably even if test assertions succeed.',
      pcapRule: 'PCET 4.2: pytest yield fixtures guarantee teardown execution to prevent state leakage and resource exhaustion between test cases.',
    },
    {
      id: 'pcet-mocking-patch',
      track: 'pcet',
      title: 'unittest.mock & Monkeypatching API Calls',
      category: 'Test Doubles & Isolation',
      description: 'Isolating external network/disk dependencies using unittest.mock.MagicMock and patch.',
      code: `from unittest.mock import MagicMock

def fetch_exchange_rate(pair: str) -> float:
    # Real implementation would call external web API
    raise ConnectionError("No internet connectivity in test sandbox")

def convert_currency(amount: float, rate_fn) -> float:
    rate = rate_fn("EUR/USD")
    return round(amount * rate, 2)

# Create Mock test double
mock_api = MagicMock(return_value=1.085)

converted = convert_currency(100.0, mock_api)
print("Converted Amount:", converted)
print("Mock call count:", mock_api.call_count)
print("Mock called with:", mock_api.call_args)`,
      output: `Converted Amount: 108.5
Mock call count: 1
Mock called with: call('EUR/USD')`,
      explanation: 'Test doubles (stubs/mocks) prevent unit tests from making real HTTP calls, ensuring unit tests run deterministically, fast, and offline.',
      pcapRule: 'PCET 2.3: Unit test isolation mandates replacing external volatile dependencies (I/O, database, network) with test doubles.',
    },
    // PCAT Experiments
    {
      id: 'pcat-subtest-data-driven',
      track: 'pcat',
      title: 'Data-Driven Subtests with self.subTest()',
      category: 'Advanced Unit Testing',
      description: 'Isolating parameterized matrix failures cleanly with Python standard library subtests.',
      code: `import unittest

class TestMathOperations(unittest.TestCase):
    def run_subtest_demo(self):
        log = []
        test_matrix = [
            (2, 4, True),
            (3, 9, True),
            (4, 16, True),
            (5, 25, True),
        ]
        for base, expected_sq, should_pass in test_matrix:
            # Simulating with self.subTest(base=base):
            actual = base ** 2
            passed = (actual == expected_sq)
            log.append(f"SubTest(base={base}): {'PASS' if passed else 'FAIL'}")
        return log

demo = TestMathOperations()
results = demo.run_subtest_demo()
for res in results:
    print(res)`,
      output: `SubTest(base=2): PASS
SubTest(base=3): PASS
SubTest(base=4): PASS
SubTest(base=5): PASS`,
      explanation: 'self.subTest() allows all iterations in a data-driven test loop to run and report independently, preventing an early failure from aborting remaining checks.',
      pcapRule: 'PCAT 5.2: subTest provides granular failure isolation and diagnostic context in table-driven unit tests.',
    },
    {
      id: 'pcat-behave-bdd-workflow',
      track: 'pcat',
      title: 'BDD Given-When-Then Step Execution',
      category: 'Test-Driven & Behavior-Driven Dev',
      description: 'Understanding ubiquitous language and state passing with the BDD context object.',
      code: `class BDDContext:
    def __init__(self):
        self.user = None
        self.cart = []
        self.total = 0.0

def step_given_user(ctx, username):
    ctx.user = username
    print(f"Given: Logged in as {username}")

def step_when_add_item(ctx, item, price):
    ctx.cart.append(item)
    ctx.total += price
    print(f"When: Added {item} ($ {price})")

def step_then_total_is(ctx, expected):
    assert ctx.total == expected
    print(f"Then: Verified cart total matches \${expected:.2f}")

context = BDDContext()
step_given_user(context, "Alice")
step_when_add_item(context, "Python Testing Book", 45.0)
step_then_total_is(context, 45.0)`,
      output: `Given: Logged in as Alice
When: Added Python Testing Book ($ 45.0)
Then: Verified cart total matches $45.00`,
      explanation: 'In BDD frameworks like Behave, the context object encapsulates scenario state as execution progresses through Given, When, and Then step definitions.',
      pcapRule: 'PCAT 6.4: BDD scenarios bind business domain requirements to executable step definitions using shared context.',
    },
    // PCES Experiments
    {
      id: 'pces-socket-scanner',
      track: 'pces',
      title: 'Defensive Socket Port Audit & Banner Grab',
      category: 'SecOps Sockets',
      description: 'Check service responsiveness using socket.connect_ex() non-blocking pattern and handle timeouts gracefully.',
      code: `import socket

def audit_port(host, port, timeout=1.0):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(timeout)
    # connect_ex returns 0 on success, or an errno error code
    result = s.connect_ex((host, port))
    s.close()
    return result == 0

ports = {22: 'SSH', 80: 'HTTP', 443: 'HTTPS', 3389: 'RDP'}
results = {p: audit_port('127.0.0.1', p) for p in [22, 80]}
print("Audit complete:", results)
print("connect_ex error code for closed port:", 111)  # ECONNREFUSED`,
      output: `Audit complete: {22: False, 80: False}
connect_ex error code for closed port: 111`,
      explanation: 'socket.connect_ex() returns an integer error code instead of raising an exception for connection failures, making it the standard defensive choice for rapid network port auditing.',
      pcapRule: 'PCES 3.2: socket.connect_ex() returns 0 on success and C errno codes on failure without crashing the scanner.',
    },
    {
      id: 'pces-hashlib-integrity',
      track: 'pces',
      title: 'File Integrity Verification & Tamper Detection',
      category: 'File Integrity',
      description: 'Compute cryptographic SHA-256 digest baselines and detect data modification using hashlib.',
      code: `import hashlib

def generate_digest(data: bytes) -> str:
    hasher = hashlib.sha256()
    hasher.update(data)
    return hasher.hexdigest()

baseline_config = b"ALLOWED_HOSTS=['app.internal']\\nDEBUG=False"
tampered_config = b"ALLOWED_HOSTS=['*']\\nDEBUG=True"

base_hash = generate_digest(baseline_config)
curr_hash = generate_digest(tampered_config)

print("Baseline SHA-256:", base_hash[:16] + "...")
print("Tampered SHA-256:", curr_hash[:16] + "...")
print("Integrity Verified:", base_hash == curr_hash)`,
      output: `Baseline SHA-256: 4f981e4b85d39e24...
Tampered SHA-256: 9e32a67e07a3c30a...
Integrity Verified: False`,
      explanation: 'Cryptographic hash functions provide avalanche protection: changing even a single byte produces an entirely distinct digest, allowing immediate detection of unauthorized changes.',
      pcapRule: 'PCES 3.4: hashlib.sha256() provides one-way deterministic baselines for critical system configuration files.',
    },
    {
      id: 'pcea-cli-argparse',
      track: 'pcea',
      title: 'Automated CLI Flag Parsing with argparse',
      category: 'CLI & Automation',
      description: 'Build a production command-line interface with type validation, default flags, and action switches.',
      code: `import argparse

parser = argparse.ArgumentParser(description="Automated Backup Tool")
parser.add_argument("target", help="Directory or file target")
parser.add_argument("--retries", type=int, default=3, help="Max retry attempts")
parser.add_argument("--dry-run", action="store_true", help="Simulate execution without changes")

# Simulate parsed arguments
cli_args = ["/data/reports", "--retries", "5", "--dry-run"]
args = parser.parse_args(cli_args)

print(f"Target: {args.target}")
print(f"Max Retries: {args.retries} (type: {type(args.retries).__name__})")
print(f"Dry-Run Mode: {args.dry_run}")`,
      output: `Target: /data/reports
Max Retries: 5 (type: int)
Dry-Run Mode: True`,
      explanation: 'argparse handles CLI inputs cleanly with automatic type casting, store_true booleans, and built-in help documentation, critical for robust automation.',
      pcapRule: 'PCEA 1.2: argparse parses positional parameters and typed options with built-in validation and default values.',
    },
    {
      id: 'pcea-pathlib-automation',
      track: 'pcea',
      title: 'Modern Path Manipulation & Pattern Matching',
      category: 'File Automation',
      description: 'Utilize pathlib.Path for cross-platform path building, suffix inspection, and batch file filtering.',
      code: `from pathlib import Path

# Constructing path with slash operator
base_dir = Path("/var/log/automation")
archive_file = base_dir / "2026-Q1" / "daily_sync.json.gz"

print("Full Path:", archive_file.as_posix())
print("Parent Directory:", archive_file.parent.as_posix())
print("File Stem:", archive_file.stem)  # daily_sync.json
print("Final Suffix:", archive_file.suffix)  # .gz
print("All Suffixes:", archive_file.suffixes)  # ['.json', '.gz']

# Demonstrate path replacement
renamed = archive_file.with_suffix(".bak")
print("Renamed Path:", renamed.as_posix())`,
      output: `Full Path: /var/log/automation/2026-Q1/daily_sync.json.gz
Parent Directory: /var/log/automation/2026-Q1
File Stem: daily_sync.json
Final Suffix: .gz
All Suffixes: ['.json', '.gz']
Renamed Path: /var/log/automation/2026-Q1/daily_sync.json.bak`,
      explanation: 'pathlib treats file paths as first-class object representations instead of raw strings, providing robust attributes like stem, suffix, and suffixes without manual string splits.',
      pcapRule: 'PCEA 2.1: pathlib.Path provides object-oriented filesystem manipulation with slash joining and suffix inspection.',
    },
    {
      id: 'pcei-knn-classification',
      track: 'pcei',
      title: 'k-Nearest Neighbors Classification Logic',
      category: 'Machine Learning',
      description: 'Implement instance-based classification using Euclidean distance and majority voting.',
      code: `import math
from collections import Counter

# Training dataset: [feature1, feature2], label
dataset = [
    ([2.0, 3.0], "Approve"),
    ([2.5, 3.5], "Approve"),
    ([1.0, 1.5], "Approve"),
    ([6.0, 7.0], "Reject"),
    ([7.0, 8.0], "Reject"),
    ([6.5, 6.0], "Reject"),
]

def euclidean_dist(p1, p2):
    return math.sqrt(sum((a - b) ** 2 for a, b in zip(p1, p2)))

def knn_predict(query_point, data, k=3):
    distances = [(euclidean_dist(query_point, pt[0]), pt[1]) for pt in data]
    distances.sort(key=lambda x: x[0])
    k_nearest = [label for _, label in distances[:k]]
    return Counter(k_nearest).most_common(1)[0][0]

new_applicant = [2.2, 2.8]
prediction = knn_predict(new_applicant, dataset, k=3)
print(f"Query Point: {new_applicant}")
print(f"k-NN (k=3) Prediction: {prediction}")`,
      output: `Query Point: [2.2, 2.8]
k-NN (k=3) Prediction: Approve`,
      explanation: 'k-Nearest Neighbors computes geometric distances between feature vectors and assigns the majority label of the closest k samples, forming an intuitive non-parametric baseline.',
      pcapRule: 'PCEI 2.2: k-NN is an instance-based supervised algorithm that classifies instances via majority vote of nearest Euclidean neighbors.',
    },
    {
      id: 'pcei-feature-scaling',
      track: 'pcei',
      title: 'Feature Standardization (Z-Score Scaling)',
      category: 'Data Preprocessing',
      description: 'Standardize heterogeneous numerical features to zero mean and unit variance.',
      code: `# Raw feature vectors: [Age (20-60), Salary ($20k-$120k)]
raw_data = [
    [25, 30000],
    [35, 60000],
    [45, 90000],
    [55, 120000]
]

# Calculate mean and standard deviation per column
n = len(raw_data)
cols = list(zip(*raw_data))
means = [sum(c) / n for c in cols]
stds = [(sum((x - m) ** 2 for x in c) / n) ** 0.5 for c, m in zip(cols, means)]

# Standardize: (x - mean) / std
scaled = []
for row in raw_data:
    scaled_row = [(val - m) / s for val, m, s in zip(row, means, stds)]
    scaled.append(scaled_row)

print("Original [Age, Salary]:", raw_data[0])
print(f"Standardized [Age, Salary]: [{scaled[0][0]:.3f}, {scaled[0][1]:.3f}]")
print("Standardized Mean: ~0.0, Standardized Std: ~1.0")`,
      output: `Original [Age, Salary]: [25, 30000]
Standardized [Age, Salary]: [-1.342, -1.342]
Standardized Mean: ~0.0, Standardized Std: ~1.0`,
      explanation: 'StandardScaler centers features to mean 0 and scales to variance 1, preventing large-scale features (like salary) from dominating gradient descent and Euclidean distance calculations.',
      pcapRule: 'PCEI 3.3: Feature scaling ensures equitable feature weight and faster convergence in gradient-based and distance-based AI algorithms.',
    },
  ];

  const filteredExperiments = useMemo(() => {
    const list = experiments.filter((e) => e.track === currentTrack || (currentTrack === 'pcep' && e.track === 'pcap'));
    return list.length > 0 ? list : experiments.filter((e) => e.track === 'pcap');
  }, [experiments, currentTrack]);

  const [activeExp, setActiveExp] = useState<CodeLabExperiment>(filteredExperiments[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [hasRun, setHasRun] = useState(true);
  const [copied, setCopied] = useState(false);

  // Sync active experiment if track changes
  React.useEffect(() => {
    if (filteredExperiments.length > 0) {
      setActiveExp(filteredExperiments[0]);
      setHasRun(true);
    }
  }, [currentTrack, filteredExperiments]);

  const handleRun = () => {
    setIsRunning(true);
    setHasRun(false);
    setTimeout(() => {
      setIsRunning(false);
      setHasRun(true);
    }, 400);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <Code2 className="w-5 h-5 text-indigo-400" />
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              {currentTrack === 'pcpp'
                ? 'Python PCPP-32-10x Advanced Code Lab'
                : currentTrack === 'pcet'
                ? 'Python PCET-30-01 Testing & QA Code Lab'
                : currentTrack === 'pcat'
                ? 'Python PCAT-31-0x Automated Testing Code Lab'
                : 'Python Code Lab & Sandbox'}
            </h1>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {currentTrack === 'pcpp'
              ? 'Interactive execution sandbox for metaclasses, descriptors, ABCs, and __slots__ in PCPP-32-10x.'
              : currentTrack === 'pcet'
              ? 'Interactive execution sandbox for pytest fixtures, assertions, and test double mock patterns in PCET-30-01.'
              : currentTrack === 'pcat'
              ? 'Interactive execution sandbox for self.subTest(), mock doubles, and BDD Given-When-Then patterns in PCAT-31-0x.'
              : 'Interactive syntax runner and mechanics breakdown for the trickiest PCAP-31-03 topics.'}
          </p>
        </div>

        <button
          onClick={() => onNavigate('flashcards', currentTrack === 'pcpp' ? 'Section 1' : 'Section 4')}
          className="self-start sm:self-auto px-4 py-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/25 transition-colors flex items-center space-x-2"
        >
          <span>Jump to {currentTrack.toUpperCase()} Flashcards</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Experiments Navigation Sidebar */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block px-1 mb-2">
            {currentTrack.toUpperCase()} Code Experiments ({filteredExperiments.length})
          </span>
          {filteredExperiments.map((exp) => {
            const isActive = activeExp.id === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => {
                  setActiveExp(exp);
                  setHasRun(true);
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                  isActive
                    ? 'bg-indigo-950/40 border-indigo-500/50 text-indigo-200 shadow-md ring-1 ring-indigo-400/20'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/60 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                    {exp.category}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-100">{exp.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{exp.description}</p>
              </button>
            );
          })}
        </div>

        {/* Code Runner & Console Output Main Stage */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-indigo-400 font-bold">{activeExp.category}</span>
                <h3 className="text-base font-bold text-white">{activeExp.title}</h3>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleCopy(activeExp.code)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Copy code"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>

                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20 flex items-center space-x-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isRunning ? 'Executing...' : 'Run Code'}</span>
                </button>
              </div>
            </div>

            {/* Python Code Window */}
            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto">
              <pre>{activeExp.code}</pre>
            </div>

            {/* Terminal Console Output */}
            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Console stdout</span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-emerald-400 whitespace-pre-wrap">
                {hasRun ? activeExp.output : 'Press "Run Code" to inspect output...'}
              </div>
            </div>

            {/* Conceptual Breakdown & PCAP/PCPP Rule */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-2">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <strong className="text-slate-200">How Python Executes This:</strong>
              </div>
              <p className="text-slate-400 leading-relaxed">{activeExp.explanation}</p>
              <div className="pt-2 border-t border-slate-800/80">
                <span className="font-mono text-cyan-300 font-semibold">
                  {currentTrack === 'pcpp' ? 'PCPP Blueprint Rule: ' : 'PCAP Blueprint Rule: '}
                </span>
                <span className="text-slate-300">{activeExp.pcapRule}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
