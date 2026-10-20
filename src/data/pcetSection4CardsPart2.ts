import { Flashcard } from '../types';

export const pcetSection4CardsPart2: Flashcard[] = [
  // Chapter 4.3: pytest Fixtures (Cards 51-60)
  {
    id: 'pcet-4-051',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Fixtures',
    difficulty: 'Intermediate',
    question: 'How does fixture parametrization work in `pytest`?',
    codeSnippet: '@pytest.fixture(params=["mysql", "postgresql", "sqlite"])\ndef database_engine(request):\n    return connect(request.param)\n\ndef test_query(database_engine):\n    assert database_engine.is_alive() is True',
    options: [
      'The fixture executes the dependent test multiple times (once for each value in `params`), accessible via `request.param`',
      'It creates three databases simultaneously in one test run',
      'It causes a syntax error',
      'It converts parameters into string variables'
    ],
    correctAnswer: 0,
    explanation: 'Using `params=[...]` on a `@pytest.fixture` causes pytest to execute any test using that fixture multiple times, passing each parameter in turn through `request.param`.',
    officialRef: 'PCET-30-01 Block 4.3 - Parametrizing Fixtures',
    tags: ['pytest', 'fixture-params', 'request-param']
  },
  {
    id: 'pcet-4-052',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Fixtures',
    difficulty: 'Intermediate',
    question: 'Can a `@pytest.fixture` request and depend on other fixtures?',
    codeSnippet: '@pytest.fixture\ndef db_connection():\n    return create_connection()\n\n@pytest.fixture\ndef user_repository(db_connection):\n    return UserRepository(db_connection)',
    options: [
      'Yes, pytest fixtures support modular composition: fixtures can declare and consume other fixtures as dependencies in their signatures',
      'No, fixtures cannot call other fixtures',
      'Only if both fixtures are defined in the same file',
      'Only if the fixtures have session scope'
    ],
    correctAnswer: 0,
    explanation: 'pytest fixtures are fully modular and composable. Fixtures can declare other fixtures in their parameters, forming a dependency graph that pytest resolves and executes in order.',
    officialRef: 'PCET-30-01 Block 4.3 - Modular Fixtures',
    tags: ['pytest', 'fixture-composition', 'dependency-injection']
  },
  {
    id: 'pcet-4-053',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Fixtures',
    difficulty: 'Intermediate',
    question: 'What is the scope hierarchy rule for fixtures depending on other fixtures in `pytest`?',
    codeSnippet: '# Scope rule check:\n# A fixture of narrower scope (e.g. function)\n# requesting a fixture of broader scope (e.g. session)',
    options: [
      'A broader scoped fixture (e.g. session) CANNOT depend on a narrower scoped fixture (e.g. function); narrower fixtures can depend on broader ones',
      'Fixtures can only depend on fixtures of identical scope',
      'Any fixture can depend on any scope with no restrictions',
      'Session fixtures must always depend on function fixtures'
    ],
    correctAnswer: 0,
    explanation: 'A fixture can depend on another fixture of equal or broader scope (e.g., function -> module -> session). A broader fixture depending on a narrower fixture triggers `ScopeMismatch` error.',
    officialRef: 'PCET-30-01 Block 4.3 - Scope Hierarchy and Mismatches',
    tags: ['pytest', 'fixture-scopes', 'scope-mismatch']
  },
  {
    id: 'pcet-4-054',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Configuration',
    difficulty: 'Intermediate',
    question: 'What is the `addopts` setting in `pytest.ini` used for?',
    codeSnippet: '# pytest.ini:\n# [pytest]\n# addopts = -v --strict-markers --tb=short',
    options: [
      'To specify default command-line flags and options that pytest should automatically append to every test run',
      'To add new options to Python\'s setup.py',
      'To add optional third-party pip dependencies',
      'To add options to git commit'
    ],
    correctAnswer: 0,
    explanation: '`addopts` in `pytest.ini` or `pyproject.toml` defines default CLI arguments that are automatically added whenever `pytest` is invoked, ensuring consistent team conventions.',
    officialRef: 'PCET-30-01 Block 4.3 - pytest.ini addopts',
    tags: ['pytest-ini', 'addopts', 'configuration']
  },
  {
    id: 'pcet-4-055',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Configuration',
    difficulty: 'Intermediate',
    question: 'What does the `--import-mode=importlib` setting do in pytest?',
    codeSnippet: '# pyproject.toml:\n# [tool.pytest.ini_options]\n# addopts = "--import-mode=importlib"',
    options: [
      'It uses Python\'s modern `importlib` system to import test files, avoiding sys.path mutations and namespace clashes between test files with identical names',
      'It imports all C libraries into memory',
      'It speeds up Python bytecode compilation',
      'It prevents importing any external packages'
    ],
    correctAnswer: 0,
    explanation: '`--import-mode=importlib` imports test modules using standard importlib mechanics without prepending test directories to `sys.path`, avoiding name collisions when multiple folders have `test_api.py`.',
    officialRef: 'PCET-30-01 Block 4.3 - pytest Import Modes',
    tags: ['pytest', 'import-mode', 'importlib']
  },
  {
    id: 'pcet-4-056',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Hooks',
    difficulty: 'Intermediate',
    question: 'What is a pytest "Hook" (e.g. `pytest_runtest_setup`)?',
    codeSnippet: '# In conftest.py:\ndef pytest_runtest_setup(item):\n    print(f"About to run test: {item.name}")',
    options: [
      'A callback function defined in `conftest.py` that hooks into pytest\'s internal execution lifecycle to customize collection, execution, or reporting',
      'A fish hook stored in Python\'s standard library',
      'A hardware trigger attached to server racks',
      'A way to steal passwords during testing'
    ],
    correctAnswer: 0,
    explanation: 'pytest hooks (defined with `pytest_*` naming in `conftest.py` or plugins) allow customizing pytest\'s test discovery, execution flow, parameter handling, and report generation.',
    officialRef: 'PCET-30-01 Block 4.3 - pytest Hooks',
    tags: ['pytest-hooks', 'conftest', 'extensibility']
  },
  {
    id: 'pcet-4-057',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Configuration',
    difficulty: 'Beginner',
    question: 'How can you instruct pytest to find tests in a specific folder like `tests/unit/`?',
    codeSnippet: '# CLI command execution:',
    options: [
      '`pytest tests/unit/`',
      '`pytest --folder unit`',
      '`pytest -d tests/unit/`',
      '`python run unit`'
    ],
    correctAnswer: 0,
    explanation: 'Passing a directory path directly to `pytest` (e.g. `pytest tests/unit/`) limits test discovery and execution to that specific directory.',
    officialRef: 'PCET-30-01 Block 4.3 - Path-based Test Execution',
    tags: ['pytest', 'cli', 'directory-targeting']
  },
  {
    id: 'pcet-4-058',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Configuration',
    difficulty: 'Intermediate',
    question: 'How do you run a single specific test function inside a specific test file using `pytest`?',
    codeSnippet: '# Target file: tests/test_billing.py\n# Target class: TestInvoicing\n# Target method: test_pdf_generation',
    options: [
      '`pytest tests/test_billing.py::TestInvoicing::test_pdf_generation`',
      '`pytest tests/test_billing.py -> TestInvoicing -> test_pdf_generation`',
      '`pytest tests/test_billing.py.TestInvoicing.test_pdf_generation`',
      '`pytest -t test_pdf_generation`'
    ],
    correctAnswer: 0,
    explanation: 'pytest uses double-colons `::` as node specifier delimiters: `path/to/file.py::ClassName::method_name` executes that single exact test.',
    officialRef: 'PCET-30-01 Block 4.3 - Node ID Targeting',
    tags: ['pytest', 'nodeid', 'cli']
  },
  {
    id: 'pcet-4-059',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Fixtures',
    difficulty: 'Intermediate',
    question: 'What is the built-in `request` fixture in `pytest`?',
    codeSnippet: '@pytest.fixture\ndef contextual_fixture(request):\n    test_name = request.node.name\n    marker = request.node.get_closest_marker("env")\n    return {"test": test_name, "marker": marker}',
    options: [
      'A special built-in fixture that provides information about the requesting test function, module, class, markers, and execution context',
      'The requests library for making HTTP calls',
      'A request to buy more server memory',
      'A fixture that prompts the user for terminal input'
    ],
    correctAnswer: 0,
    explanation: 'The built-in `request` fixture allows fixtures to inspect the context of the calling test (such as `request.node.name`, `request.param`, `request.cls`, or attached markers).',
    officialRef: 'PCET-30-01 Block 4.3 - The request Built-in Fixture',
    tags: ['request-fixture', 'introspection', 'pytest']
  },
  {
    id: 'pcet-4-060',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.3',
    category: 'pytest Plugins',
    difficulty: 'Beginner',
    question: 'What is the standard tool to execute tests in parallel across multiple CPU cores in `pytest`?',
    codeSnippet: '# Terminal command:\n$ pytest -n 4\n# Runs tests distributed across 4 worker processes.',
    options: [
      '`pytest-xdist`',
      '`pytest-parallel`',
      '`pytest-multiprocess`',
      '`pytest-threads`'
    ],
    correctAnswer: 0,
    explanation: '`pytest-xdist` is the official plugin for parallel test execution. The `-n NUM` flag spins up worker processes to run test cases in parallel across available CPU cores.',
    officialRef: 'PCET-30-01 Block 4.3 - Parallel Testing with pytest-xdist',
    tags: ['pytest-xdist', 'parallel-testing', 'performance']
  },

  // Chapter 4.4: Mocking, Test Doubles & Isolation (Cards 61-80)
  {
    id: 'pcet-4-061',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Beginner',
    question: 'In Python\'s standard library `unittest.mock`, what is the primary difference between `Mock` and `MagicMock`?',
    codeSnippet: 'from unittest.mock import Mock, MagicMock\n\nm = Mock()\nmm = MagicMock()\n\n# What happens with len(m) vs len(mm)?\n# len(m) -> TypeError: object of type \'Mock\' has no len()\n# len(mm) -> returns 0 by default',
    options: [
      '`MagicMock` is a subclass of `Mock` with default implementations of most magic/dunder methods (e.g. `__iter__`, `__len__`, `__enter__`, `__exit__`)',
      '`MagicMock` is encrypted with SSL',
      '`Mock` can only be used in Django; `MagicMock` is for Flask',
      '`MagicMock` runs asynchronously'
    ],
    correctAnswer: 0,
    explanation: '`MagicMock` provides pre-configured magic (dunder) methods (`__str__`, `__iter__`, `__len__`, `__enter__`, `__exit__`), making it ideal for mocking context managers, iterables, and operators.',
    officialRef: 'PCET-30-01 Block 4.4 - Mock vs MagicMock',
    tags: ['unittest-mock', 'magicmock', 'dunder-methods']
  },
  {
    id: 'pcet-4-062',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'What is the golden rule regarding "where to patch" when using `unittest.mock.patch`?',
    codeSnippet: '# Structure:\n# File: app/worker.py\n# from app.services import email_sender\n# def run(): email_sender.send("Hello")\n#\n# File: tests/test_worker.py\n# Should we patch "app.services.email_sender" or "app.worker.email_sender"?',
    options: [
      'Patch where an object is LOOKED UP / USED (`app.worker.email_sender`), not where it is originally defined (`app.services.email_sender`)',
      'Always patch where it is originally defined',
      'Patch every file in the repository simultaneously',
      'Patching only works on standard library modules'
    ],
    correctAnswer: 0,
    explanation: 'The golden rule of `mock.patch` is: "Patch where it is used, not where it is defined." If `worker.py` imports `email_sender`, patch `app.worker.email_sender`.',
    officialRef: 'PCET-30-01 Block 4.4 - Where to Patch',
    tags: ['patch', 'mocking', 'where-to-patch']
  },
  {
    id: 'pcet-4-063',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Beginner',
    question: 'How do `return_value` and `side_effect` differ on a mock object?',
    codeSnippet: 'from unittest.mock import Mock\n\n# Mock A:\nmock_a = Mock(return_value=42)\n\n# Mock B:\nmock_b = Mock(side_effect=ValueError("Network timeout"))',
    options: [
      '`return_value` returns a fixed value on call; `side_effect` can raise an exception, return values from an iterable per call, or execute a custom callback function',
      '`return_value` is only for strings; `side_effect` is for numbers',
      '`side_effect` is called when tests fail',
      'They are identical'
    ],
    correctAnswer: 0,
    explanation: '`return_value` returns a fixed result when the mock is called. `side_effect` allows raising exceptions, yielding dynamic values from an iterable per call, or executing a custom function.',
    officialRef: 'PCET-30-01 Block 4.4 - return_value vs side_effect',
    tags: ['mock', 'return-value', 'side-effect']
  },
  {
    id: 'pcet-4-064',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'Which assertion method verifies that a mock was called exactly once with specific arguments?',
    codeSnippet: 'mock_mailer = Mock()\nmock_mailer.send_email("alice@test.com", subject="Welcome")\n\n# How to assert call and arguments?\nmock_mailer.send_email.[ ? ]("alice@test.com", subject="Welcome")',
    options: [
      'assert_called_once_with',
      'assert_called_with',
      'assert_single_call',
      'assert_has_called'
    ],
    correctAnswer: 0,
    explanation: '`assert_called_once_with(*args, **kwargs)` asserts both that the mock was invoked exactly one time and that the arguments matched the expected parameters.',
    officialRef: 'PCET-30-01 Block 4.4 - Mock Assertions',
    tags: ['mock', 'assert_called_once_with', 'assertions']
  },
  {
    id: 'pcet-4-065',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'What happens when you accidentally call a misspelled assertion method like `mock.assert_calld_once()`?',
    codeSnippet: 'mock_service = Mock()\n# Typo in assertion method name:\nmock_service.assert_calld_once()  # Notice the typo: "calld" instead of "called"',
    options: [
      'A plain `Mock` treats `assert_calld_once` as another attribute access, returning a new Mock and silently PASSING the test without asserting anything!',
      'Python throws an immediate AttributeError',
      'The test runner crashes',
      'pytest automatically fixes the spelling'
    ],
    correctAnswer: 0,
    explanation: 'By default, accessing any attribute on a `Mock` creates a child mock. Calling a misspelled assertion method does not fail—it silently returns a mock and produces a false green test!',
    officialRef: 'PCET-30-01 Block 4.4 - Mock Attribute Pitfalls',
    tags: ['mock-pitfalls', 'typo-risk', 'false-pass']
  },
  {
    id: 'pcet-4-066',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'How does setting `autospec=True` (or using `spec=Class`) protect against misspelled mock methods and invalid arguments?',
    codeSnippet: 'from unittest.mock import patch\n\n# Using autospec:\n@patch("app.services.PaymentService", autospec=True)\ndef test_payment(mock_service_cls):\n    instance = mock_service_cls()\n    # Calling a non-existent method:\n    instance.non_existent_method()  # What happens now?',
    options: [
      'It raises an `AttributeError` because `autospec=True` inspects the real class and restricts mock attributes to existing methods with correct signatures',
      'It passes silently',
      'It creates the method in the real class automatically',
      'It reboots the Python interpreter'
    ],
    correctAnswer: 0,
    explanation: '`autospec=True` inspects the target object and restricts the mock to only methods and attributes that actually exist on the real object, raising an `AttributeError` for typos or incorrect parameter signatures.',
    officialRef: 'PCET-30-01 Block 4.4 - Autospec and Spec Protection',
    tags: ['autospec', 'mock-safety', 'attribute-error']
  },
  {
    id: 'pcet-4-067',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'How can `patch` be used as a context manager inside a test function?',
    codeSnippet: 'from unittest.mock import patch\n\ndef test_external_weather():\n    with patch("weather_module.get_temperature") as mock_get_temp:\n        mock_get_temp.return_value = 22.5\n        assert read_sensor() == 22.5\n    # After with-block, get_temperature is restored to original function!',
    options: [
      'Using `with patch(...) as mock_obj:`, which applies the patch within the context block and automatically restores original behavior on exit',
      'Using `try: patch(...) except: restore()`',
      'Context managers cannot be used with patch',
      'Using `with mock.lock():`'
    ],
    correctAnswer: 0,
    explanation: 'Using `patch` as a context manager temporarily replaces the target object for the duration of the `with` block and safely restores the original object upon exiting the block.',
    officialRef: 'PCET-30-01 Block 4.4 - patch as Context Manager',
    tags: ['patch', 'context-manager', 'mocking']
  },
  {
    id: 'pcet-4-068',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'How do you mock a `@property` attribute on a class using `unittest.mock`?',
    codeSnippet: 'from unittest.mock import patch, PropertyMock\n\nwith patch("app.models.User.is_authenticated", new_callable=PropertyMock) as mock_auth:\n    mock_auth.return_value = True\n    user = User()\n    assert user.is_authenticated is True',
    options: [
      'Using `PropertyMock` via the `new_callable=PropertyMock` parameter in `patch`',
      'By setting `user.is_authenticated = Mock()`',
      'Properties cannot be mocked in Python',
      'By converting the property to a lambda'
    ],
    correctAnswer: 0,
    explanation: 'Properties are evaluated upon attribute access without parentheses (`user.is_authenticated`). `PropertyMock` provides the special descriptor mechanics needed to mock property getters/setters.',
    officialRef: 'PCET-30-01 Block 4.4 - PropertyMock',
    tags: ['propertymock', 'properties', 'mocking']
  },
  {
    id: 'pcet-4-069',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'What is `unittest.mock.ANY` used for in assertions?',
    codeSnippet: 'from unittest.mock import Mock, ANY\n\nmock_db = Mock()\nmock_db.insert("users", {"name": "Alice", "created_at": 1711234567})\n\n# We care about the name, but created_at is dynamic timestamp:\nmock_db.insert.assert_called_with("users", {"name": "Alice", "created_at": ANY})',
    options: [
      'A special sentinel object that compares equal to any value, useful for ignoring dynamic or non-deterministic arguments (like timestamps or UUIDs)',
      'A function that generates random integers',
      'A wildcard character in SQL queries',
      'A method that matches any exception'
    ],
    correctAnswer: 0,
    explanation: '`ANY` compares equal to anything. In `assert_called_with`, it lets you verify known arguments while ignoring dynamic, non-deterministic values like timestamps or generated IDs.',
    officialRef: 'PCET-30-01 Block 4.4 - mock.ANY Sentinel',
    tags: ['mock-any', 'assertions', 'sentinel']
  },
  {
    id: 'pcet-4-070',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'What is a "Spy" test double and how is it implemented using `unittest.mock`?',
    codeSnippet: 'from unittest.mock import Mock\n\n# Real function:\ndef add(a, b): return a + b\n\n# Wrapping real function with Mock:\nspy_add = Mock(wraps=add)\nresult = spy_add(2, 3)\nassert result == 5\nspy_add.assert_called_once_with(2, 3)',
    options: [
      'Using `Mock(wraps=original_object)`: it delegates execution to the real underlying implementation while recording call history and arguments for verification',
      'An undercover agent who inspects developer source code',
      'A tool that steals sensitive tokens',
      'A mock that cannot be called'
    ],
    correctAnswer: 0,
    explanation: 'Passing `wraps=obj` creates a Test Spy: calls are executed by the real function/object, while the mock records calls, arguments, and return values for assertions.',
    officialRef: 'PCET-30-01 Block 4.4 - Test Spies with wraps',
    tags: ['spy', 'wraps', 'test-doubles']
  },
  {
    id: 'pcet-4-071',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Beginner',
    question: 'How do you assert that a mock was NEVER called during a test?',
    codeSnippet: 'mock_payment_processor = Mock()\n# Test path where order total is $0.00 (free item):\nprocess_order(order_total=0.0, processor=mock_payment_processor)\n\nmock_payment_processor.charge.[ ? ]()',
    options: [
      'assert_not_called',
      'assert_never_called',
      'assert_zero_calls',
      'assert_uncalled'
    ],
    correctAnswer: 0,
    explanation: '`mock.assert_not_called()` asserts that the mock function or method was not called during test execution.',
    officialRef: 'PCET-30-01 Block 4.4 - assert_not_called',
    tags: ['mock', 'assert_not_called', 'assertions']
  },
  {
    id: 'pcet-4-072',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'How do you check how many times a mock was called?',
    codeSnippet: 'mock_logger = Mock()\nmock_logger.info("Log 1")\nmock_logger.info("Log 2")\n\nassert mock_logger.info.[ ? ] == 2',
    options: [
      'call_count',
      'total_calls',
      'times_called',
      'invocation_count'
    ],
    correctAnswer: 0,
    explanation: '`mock.call_count` is an integer attribute tracking the exact number of times the mock was invoked.',
    officialRef: 'PCET-30-01 Block 4.4 - Mock call_count',
    tags: ['mock', 'call_count', 'metrics']
  },
  {
    id: 'pcet-4-073',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'How can `side_effect` be used to return different values on sequential calls?',
    codeSnippet: 'mock_generator = Mock(side_effect=[10, 20, 30])\nassert mock_generator() == 10\nassert mock_generator() == 20\nassert mock_generator() == 30\n# What happens on the 4th call?\n# mock_generator() -> raises StopIteration!',
    options: [
      'By assigning an iterable (e.g. list, tuple, generator) to `side_effect`, returning each element in order on successive calls',
      'By passing a list to return_value',
      'By calling mock.next()',
      'Sequential returns are not supported'
    ],
    correctAnswer: 0,
    explanation: 'When an iterable is assigned to `side_effect`, each call to the mock yields the next item from the iterable. When exhausted, subsequent calls raise `StopIteration`.',
    officialRef: 'PCET-30-01 Block 4.4 - Sequential side_effects',
    tags: ['side_effect', 'sequential-mocking', 'iterables']
  },
  {
    id: 'pcet-4-074',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'What is `mock_calls` on a `Mock` object?',
    codeSnippet: 'mock_service = Mock()\nmock_service.auth.login("admin")\nmock_service.data.fetch(limit=10)\n\n# Inspecting all chained calls in sequence:\nprint(mock_service.mock_calls)',
    options: [
      'A list recording all calls made to the mock and its child attributes/methods in chronological order',
      'A phone directory for developers',
      'A log of failed network calls',
      'A list of Python errors'
    ],
    correctAnswer: 0,
    explanation: '`mock.mock_calls` records all calls made to the mock object, its methods, and magic methods as a list of `call` objects, facilitating verification of invocation ordering.',
    officialRef: 'PCET-30-01 Block 4.4 - mock_calls Ordering',
    tags: ['mock_calls', 'call-history', 'order-verification']
  },
  {
    id: 'pcet-4-075',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'What is the `pytest-mock` plugin and what fixture does it provide?',
    codeSnippet: '# In a pytest test function:\ndef test_payment_service(mocker):\n    mock_charge = mocker.patch("payment.charge", return_value=True)\n    process_order()\n    mock_charge.assert_called_once()',
    options: [
      'It provides the `mocker` fixture, a thin wrapper around `unittest.mock` that automatically cleans up and unpatches everything after the test completes without explicit teardown boilerplate',
      'It mocks Python bytecode with LLVM',
      'It mocks GitHub pull requests',
      'It runs tests inside a sandbox container'
    ],
    correctAnswer: 0,
    explanation: '`pytest-mock` provides the `mocker` fixture. It manages mocking with `mocker.patch()` and guarantees automatic unpatching at test teardown, preventing leaked patches.',
    officialRef: 'PCET-30-01 Block 4.4 - pytest-mock and mocker Fixture',
    tags: ['pytest-mock', 'mocker-fixture', 'plugins']
  },
  {
    id: 'pcet-4-076',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'When multiple `@patch` decorators are stacked on a test function, in what order are the mock arguments passed into the function signature?',
    codeSnippet: '@patch("module.service_c")  # Patch 1 (Top)\n@patch("module.service_b")  # Patch 2 (Middle)\n@patch("module.service_a")  # Patch 3 (Bottom)\ndef test_pipeline(self, mock_a, mock_b, mock_c):  # Notice argument order!\n    pass',
    options: [
      'In bottom-up order (from innermost decorator closest to the function up to the outermost decorator)',
      'In top-down order',
      'In alphabetical order',
      'Random order'
    ],
    correctAnswer: 0,
    explanation: 'In Python, decorators wrap from inside out. When stacking `@patch`, arguments are injected bottom-up: the decorator closest to `def` becomes the first argument.',
    officialRef: 'PCET-30-01 Block 4.4 - Stacking @patch Decorators',
    tags: ['patch', 'decorator-order', 'stacking']
  },
  {
    id: 'pcet-4-077',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'What is `unittest.mock.mock_open` used for?',
    codeSnippet: 'from unittest.mock import patch, mock_open\n\nm = mock_open(read_data="config_param=123")\nwith patch("builtins.open", m):\n    with open("config.ini", "r") as f:\n        data = f.read()\nassert data == "config_param=123"',
    options: [
      'A helper function specifically designed to create a mock that replaces the built-in `open()` function, simulating file reading and writing without touching the file system',
      'A function that unlocks open-source licenses',
      'A tool that opens network ports on a router',
      'A tool that opens browser tabs'
    ],
    correctAnswer: 0,
    explanation: '`mock_open` creates a mock object tailored to emulate Python\'s built-in `open()` context manager and file handles (`read()`, `readlines()`, `write()`) without disk I/O.',
    officialRef: 'PCET-30-01 Block 4.4 - mock_open Helper',
    tags: ['mock_open', 'file-io', 'built-in-mocking']
  },
  {
    id: 'pcet-4-078',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'How do you reset the call history of a mock object in the middle of a test without resetting its configured return values?',
    codeSnippet: 'mock_logger = Mock(return_value="logged")\nmock_logger("event 1")\n\n# Clear call count and recorded call history:\nmock_logger.[ ? ]()\n\nassert mock_logger.call_count == 0\nassert mock_logger() == "logged"  # return_value preserved!',
    options: [
      'reset_mock',
      'clear',
      'clean_history',
      'restart'
    ],
    correctAnswer: 0,
    explanation: '`mock.reset_mock()` clears call history, call counts, and recorded args/kwargs while preserving custom configurations like `return_value` and `side_effect`.',
    officialRef: 'PCET-30-01 Block 4.4 - reset_mock',
    tags: ['reset_mock', 'state-reset', 'mocking']
  },
  {
    id: 'pcet-4-079',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'What is `unittest.mock.AsyncMock` used for in Python 3.8+?',
    codeSnippet: 'from unittest.mock import AsyncMock\n\nasync def fetch_user_data(client):\n    return await client.get_user()\n\nasync def test_fetch():\n    mock_client = AsyncMock()\n    mock_client.get_user.return_value = {"id": 1}\n    result = await fetch_user_data(mock_client)\n    assert result["id"] == 1',
    options: [
      'A mock object designed for asynchronous code that returns an awaitable coroutine when called, supporting async context managers (`__aenter__`/`__aexit__`)',
      'A mock that runs on separate CPU threads',
      'A mock that cannot be awaited',
      'A mock that runs only on asyncio loop 0'
    ],
    correctAnswer: 0,
    explanation: '`AsyncMock` creates awaitable mock coroutines for testing `async def` functions, `await` expressions, and asynchronous context managers (`async with`).',
    officialRef: 'PCET-30-01 Block 4.4 - AsyncMock in Python 3.8+',
    tags: ['asyncmock', 'asyncio', 'coroutines']
  },
  {
    id: 'pcet-4-080',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.4',
    category: 'Mocking',
    difficulty: 'Intermediate',
    question: 'Why is over-relying on mocks considered a major risk for software quality?',
    codeSnippet: '# Test warning:\n# "100% of unit tests pass using mocks, but the system crashes in staging\n# because the third-party payment gateway changed its JSON response format."',
    options: [
      'Mocks reflect what the test author assumed an external service would do, not necessarily what it actually does; over-mocking leaves real interface discrepancies undetected',
      'Mocks use up too much RAM on server machines',
      'Mocks are not supported in production releases',
      'Mocks cause Python garbage collection to halt'
    ],
    correctAnswer: 0,
    explanation: 'Mocks only simulate developer assumptions. If the real API or service behavior changes, mock-heavy tests remain green despite production breakage. Integration tests with real or containerized services are essential.',
    officialRef: 'PCET-30-01 Block 4.4 - Risks of Mocking',
    tags: ['mock-risks', 'integration-testing', 'fidelity']
  },

  // Chapter 4.5: Code Coverage, CI/CD & Test Automation Pipelines (Cards 81-100)
  {
    id: 'pcet-4-081',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'Code Coverage',
    difficulty: 'Beginner',
    question: 'What does "Statement Coverage" (or Line Coverage) measure?',
    codeSnippet: '# Coverage formula:\n# Total executable lines: 100\n# Lines executed during test run: 85\n# Statement Coverage = (85 / 100) * 100 = 85%',
    options: [
      'The percentage of executable statements/lines of source code that have been executed by the test suite',
      'The percentage of comments in the codebase',
      'The number of characters per line',
      'The percentage of developers who wrote tests'
    ],
    correctAnswer: 0,
    explanation: 'Statement (Line) Coverage measures the proportion of executable statements in the source code executed at least once during test suite execution.',
    officialRef: 'PCET-30-01 Block 4.5 - Statement Coverage',
    tags: ['code-coverage', 'statement-coverage', 'metrics']
  },
  {
    id: 'pcet-4-082',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'Code Coverage',
    difficulty: 'Intermediate',
    question: 'Why is "Branch Coverage" stronger than simple Statement Coverage?',
    codeSnippet: 'def process(x):\n    if x > 0:\n        print("Positive")\n    # No else branch!\n    return x\n\n# Test with x = 5: Executes 100% of statements!\n# Did we test what happens when x <= 0? NO!',
    options: [
      'Branch coverage requires verifying that both True and False outcomes of every decision point (e.g. if/else) are exercised, catching edge cases that 100% statement coverage misses',
      'Branch coverage checks git branches in GitHub',
      'Branch coverage only runs on Sundays',
      'Branch coverage takes less time to calculate'
    ],
    correctAnswer: 0,
    explanation: '100% statement coverage can be achieved without testing the False path of an `if` statement without an `else`. Branch coverage measures whether every branch outcome (True and False) was evaluated.',
    officialRef: 'PCET-30-01 Block 4.5 - Branch Coverage vs Statement Coverage',
    tags: ['branch-coverage', 'decision-coverage', 'metrics']
  },
  {
    id: 'pcet-4-083',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'Code Coverage',
    difficulty: 'Beginner',
    question: 'What package is standard for measuring code coverage when running `pytest`?',
    codeSnippet: '# Terminal command:\n$ pytest --cov=my_app --cov-report=term-missing',
    options: [
      '`pytest-cov` (powered by `coverage.py`)',
      '`pytest-monitor`',
      '`pytest-lines`',
      '`coverage-reporter`'
    ],
    correctAnswer: 0,
    explanation: '`pytest-cov` is the standard plugin bundling Ned Batchelder\'s `coverage.py` into pytest, measuring line and branch coverage with flexible terminal and HTML reporting.',
    officialRef: 'PCET-30-01 Block 4.5 - pytest-cov Plugin',
    tags: ['pytest-cov', 'coverage-py', 'tooling']
  },
  {
    id: 'pcet-4-084',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'Code Coverage',
    difficulty: 'Intermediate',
    question: 'How do you enable branch coverage reporting using `pytest-cov`?',
    codeSnippet: '# CLI command:',
    options: [
      '`pytest --cov=my_app --cov-branch`',
      '`pytest --branches`',
      '`pytest --cov-decision`',
      '`pytest -b`'
    ],
    correctAnswer: 0,
    explanation: 'Adding `--cov-branch` instructs `pytest-cov` / `coverage.py` to instrument decision points and measure branch coverage alongside statement coverage.',
    officialRef: 'PCET-30-01 Block 4.5 - Branch Coverage Flag',
    tags: ['pytest-cov', 'cov-branch', 'cli']
  },
  {
    id: 'pcet-4-085',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'Code Coverage',
    difficulty: 'Intermediate',
    question: 'What does the `--cov-report=term-missing` option do in `pytest-cov`?',
    codeSnippet: '# Coverage report:\n# Name                Stmts   Miss  Cover   Missing\n# -------------------------------------------------\n# my_app/billing.py      40      4    90%   23-26',
    options: [
      'It prints a summary table in the terminal and displays the exact line numbers of statements that were NOT executed by any test',
      'It reports missing dependencies in requirements.txt',
      'It reports missing test files',
      'It deletes missing files'
    ],
    correctAnswer: 0,
    explanation: '`--cov-report=term-missing` adds a "Missing" column showing exact line numbers not touched by tests, allowing developers to target missing branches directly.',
    officialRef: 'PCET-30-01 Block 4.5 - term-missing Option',
    tags: ['pytest-cov', 'term-missing', 'coverage-gaps']
  },
  {
    id: 'pcet-4-086',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'Code Coverage',
    difficulty: 'Intermediate',
    question: 'How can a developer instruct `coverage.py` to exclude boilerplate lines (e.g. `if __name__ == "__main__":`) from coverage calculations?',
    codeSnippet: 'if __name__ == "__main__":  # pragma: no cover\n    main()',
    options: [
      'By appending `# pragma: no cover` at the end of the line',
      'By adding `# ignore coverage`',
      'By placing the code in parenthesis',
      'By writing pass on the next line'
    ],
    correctAnswer: 0,
    explanation: '`# pragma: no cover` tells `coverage.py` to exclude that line (or block) from coverage accounting, preventing untestable entry points from depressing coverage percentages.',
    officialRef: 'PCET-30-01 Block 4.5 - pragma: no cover',
    tags: ['coverage', 'pragma-no-cover', 'exclusions']
  },
  {
    id: 'pcet-4-087',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'Code Coverage',
    difficulty: 'Intermediate',
    question: 'Why does achieving 100% code coverage NOT guarantee that software is free of bugs?',
    codeSnippet: '# Code with 100% statement coverage:\ndef divide(a, b):\n    return a / b\n\n# Test:\ndef test_divide():\n    assert divide(10, 2) == 5\n# 100% covered! But what happens when b = 0? (ZeroDivisionError crashes program!)',
    options: [
      'Coverage only verifies that lines were executed; it does not prove that all boundary conditions, invalid inputs, concurrency issues, or missing requirements were tested',
      'Because Python coverage tools are mathematically inaccurate',
      'Because 100% coverage makes compilers fail',
      'Because coverage tools only count comments'
    ],
    correctAnswer: 0,
    explanation: 'Coverage measures execution presence, not semantic correctness. A test can execute every line with a happy-path input while completely missing division-by-zero, negative numbers, or null handling.',
    officialRef: 'PCET-30-01 Block 4.5 - Coverage Fallacies',
    tags: ['coverage-limits', 'quality-myths', 'boundary-cases']
  },
  {
    id: 'pcet-4-088',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'Code Coverage',
    difficulty: 'Intermediate',
    question: 'How can you enforce a minimum coverage threshold (e.g. 85%) that fails the build if not achieved?',
    codeSnippet: '# In terminal or CI pipeline:\n$ pytest --cov=my_app --cov-fail-under=85',
    options: [
      'Using the `--cov-fail-under=85` option, which returns a non-zero exit code if total coverage is below 85%',
      'Using `--minimum-cover 85`',
      'By writing a custom if statement in python',
      'Coverage thresholds cannot be enforced automatically'
    ],
    correctAnswer: 0,
    explanation: '`--cov-fail-under=N` sets a quality gate: if the test run results in a total coverage percentage below $N$, pytest exits with a failure exit code, failing the CI build.',
    officialRef: 'PCET-30-01 Block 4.5 - --cov-fail-under Quality Gate',
    tags: ['pytest-cov', 'cov-fail-under', 'quality-gate']
  },
  {
    id: 'pcet-4-089',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'Code Coverage',
    difficulty: 'Beginner',
    question: 'What command generates a visual, interactive HTML coverage report with `coverage.py`?',
    codeSnippet: '$ coverage html\n# Generates htmlcov/index.html directory with color-coded browsable source code.',
    options: [
      '`coverage html`',
      '`coverage web`',
      '`coverage ui`',
      '`coverage browser`'
    ],
    correctAnswer: 0,
    explanation: '`coverage html` (or `pytest --cov-report=html`) generates an interactive HTML report in `htmlcov/` where developers can inspect which specific lines and branches were touched.',
    officialRef: 'PCET-30-01 Block 4.5 - HTML Coverage Reports',
    tags: ['coverage-py', 'html-reports', 'visualization']
  },
  {
    id: 'pcet-4-090',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'CI/CD Pipelines',
    difficulty: 'Beginner',
    question: 'What is Continuous Integration (CI)?',
    codeSnippet: '# CI workflow:\n# 1. Developer pushes code branch to GitHub.\n# 2. Automated runner clones code, installs dependencies.\n# 3. Automated runner executes linters and pytest suite.\n# 4. Results reported back to PR before merging.',
    options: [
      'A software development practice where team members integrate code changes frequently into a shared repository, verified by automated builds and tests',
      'Deploying code directly to production servers without testing',
      'A hardware testing lab in a factory',
      'Merging code only once a year'
    ],
    correctAnswer: 0,
    explanation: 'Continuous Integration (CI) automatically builds and tests code with every commit, enabling early defect detection and rapid feedback before code reaches main branches.',
    officialRef: 'PCET-30-01 Block 4.5 - Continuous Integration Principles',
    tags: ['ci-cd', 'continuous-integration', 'automation']
  },
  {
    id: 'pcet-4-091',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'CI/CD Pipelines',
    difficulty: 'Intermediate',
    question: 'In a GitHub Actions workflow YAML file, where are test automation steps defined?',
    codeSnippet: '# .github/workflows/tests.yml\nname: Python CI\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: "3.11"\n      - run: pip install -r requirements.txt\n      - run: pytest',
    options: [
      'In a YAML file located inside `.github/workflows/` directory in the repository',
      'In a text file on the developer\'s desktop',
      'In the git commit description',
      'Inside pyproject.toml'
    ],
    correctAnswer: 0,
    explanation: 'GitHub Actions workflows are defined in YAML configuration files placed in the `.github/workflows/` directory of the repository.',
    officialRef: 'PCET-30-01 Block 4.5 - GitHub Actions Workflows',
    tags: ['github-actions', 'yaml', 'ci-cd']
  },
  {
    id: 'pcet-4-092',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'CI/CD Pipelines',
    difficulty: 'Intermediate',
    question: 'What is a "Matrix Build" in Continuous Integration testing?',
    codeSnippet: '# GitHub Actions matrix:\nstrategy:\n  matrix:\n    os: [ubuntu-latest, windows-latest, macos-latest]\n    python-version: ["3.10", "3.11", "3.12"]',
    options: [
      'A CI feature that automatically executes test suites across a multidimensional grid of operating systems and Python versions simultaneously',
      'A movie about virtual reality',
      'A 2D array calculation in NumPy',
      'A test that builds hardware circuits'
    ],
    correctAnswer: 0,
    explanation: 'A matrix build runs parallel jobs across all combinations of specified configurations (e.g. 3 operating systems $\\times$ 3 Python versions = 9 parallel test runs), verifying compatibility.',
    officialRef: 'PCET-30-01 Block 4.5 - Matrix Testing in CI',
    tags: ['matrix-build', 'cross-platform', 'github-actions']
  },
  {
    id: 'pcet-4-093',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'CI/CD Pipelines',
    difficulty: 'Intermediate',
    question: 'Why should dependency caching (e.g. pip cache) be configured in CI pipelines?',
    codeSnippet: '- uses: actions/setup-python@v5\n  with:\n    python-version: "3.11"\n    cache: "pip"  # Caches ~/.cache/pip between CI runs',
    options: [
      'It prevents redownloading external packages on every build, reducing CI execution duration from minutes to seconds',
      'It prevents Python from creating bytecode',
      'It saves disk space on the developer\'s laptop',
      'It stops pip from upgrading Python'
    ],
    correctAnswer: 0,
    explanation: 'Dependency caching preserves downloaded package wheels across pipeline runs. When dependencies have not changed, pip installs from cache, dramatically accelerating CI turnaround time.',
    officialRef: 'PCET-30-01 Block 4.5 - CI Caching Strategies',
    tags: ['pip-cache', 'ci-optimization', 'github-actions']
  },
  {
    id: 'pcet-4-094',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'CI/CD Pipelines',
    difficulty: 'Intermediate',
    question: 'What is the standard format used by pytest to output machine-readable test results for CI reporting dashboards?',
    codeSnippet: '$ pytest --junitxml=reports/junit.xml',
    options: [
      'JUnit XML format',
      'Binary pickle format',
      'CSV spreadsheet',
      'Plain HTML text'
    ],
    correctAnswer: 0,
    explanation: '`--junitxml=path.xml` exports test results into standard JUnit XML format, which CI engines (GitHub Actions, Jenkins, GitLab, Azure DevOps) parse to render test summaries and trends.',
    officialRef: 'PCET-30-01 Block 4.5 - JUnit XML Test Reports',
    tags: ['junit-xml', 'ci-reports', 'pytest']
  },
  {
    id: 'pcet-4-095',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'CI/CD Pipelines',
    difficulty: 'Beginner',
    question: 'What does a "Failing Quality Gate" in a pull request indicate?',
    codeSnippet: '# Pull Request status checks:\n# ✖ Lint (flake8) — Failed\n# ✔ Type Check (mypy) — Passed\n# ✖ Tests (pytest) — 2 failed\n# Merge button: DISABLED',
    options: [
      'The code change violates predefined quality criteria (failing tests, linter errors, or insufficient coverage) and is blocked from merging until resolved',
      'The developer has forgotten their password',
      'The GitHub server has shut down',
      'The code passed with distinction'
    ],
    correctAnswer: 0,
    explanation: 'A quality gate blocks merging when automated checks fail (e.g. failing unit tests or lint errors), ensuring defective code cannot contaminate stable branches.',
    officialRef: 'PCET-30-01 Block 4.5 - Automated Quality Gates',
    tags: ['quality-gates', 'branch-protection', 'ci-cd']
  },
  {
    id: 'pcet-4-096',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'Continuous Delivery',
    difficulty: 'Intermediate',
    question: 'What is the distinction between "Continuous Delivery" (CD) and "Continuous Deployment" (CD)?',
    codeSnippet: '# Model A: Every passing build is automatically packaged and ready to deploy, but requires human approval to push to production.\n# Model B: Every passing build is automatically deployed directly to production with zero manual human intervention.',
    options: [
      'Model A is Continuous Delivery; Model B is Continuous Deployment',
      'Model A is Continuous Deployment; Model B is Continuous Delivery',
      'Both models represent Continuous Integration',
      'Continuous Deployment requires manual tape backups'
    ],
    correctAnswer: 0,
    explanation: 'In Continuous Delivery, every change is tested and automatically deployable, but release to production requires manual business sign-off. Continuous Deployment deploys every passing change directly to production automatically.',
    officialRef: 'PCET-30-01 Block 4.5 - Delivery vs Deployment',
    tags: ['continuous-delivery', 'continuous-deployment', 'devops']
  },
  {
    id: 'pcet-4-097',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'Testing in CI',
    difficulty: 'Intermediate',
    question: 'What is a "Canary Release" in automated deployment pipelines?',
    codeSnippet: '# Deployment strategy:\n# New version 2.0 is deployed to 2% of user traffic while 98% remains on version 1.9.\n# Automated monitors check error rates for 30 minutes before gradually rolling out to 100%.',
    options: [
      'A release technique where an update is exposed to a small subset of real users to monitor stability and performance before rolling out across the entire infrastructure',
      'Releasing software for yellow pet birds',
      'Releasing software only during daytime hours',
      'A release that requires miners underground'
    ],
    correctAnswer: 0,
    explanation: 'A Canary Release (inspired by canaries in coal mines) releases new features to a tiny fraction of users to verify health and error rates under real traffic before full-scale rollout.',
    officialRef: 'PCET-30-01 Block 4.5 - Canary Releases',
    tags: ['canary-release', 'progressive-delivery', 'deployment']
  },
  {
    id: 'pcet-4-098',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'CI/CD Pipelines',
    difficulty: 'Intermediate',
    question: 'What is "Shift-Left Testing" in modern DevOps workflows?',
    codeSnippet: '# DevOps lifecycle:\n# Requirements -> Design -> Coding -> Testing -> Release -> Ops\n# Shift-Left: Moving testing activities, static analysis, and automation earlier (to the left) in the development lifecycle.',
    options: [
      'The practice of moving testing, validation, and quality activities as early as possible in the software lifecycle rather than waiting for post-development testing phases',
      'Writing test code using only the left hand',
      'Moving test servers to the Western Hemisphere',
      'Shifting bits to the left in binary arithmetic'
    ],
    correctAnswer: 0,
    explanation: 'Shift-Left Testing introduces quality checks early (linters, pre-commit hooks, unit tests during coding, requirement reviews) to catch and fix defects when they are cheapest to resolve.',
    officialRef: 'PCET-30-01 Block 4.5 - Shift-Left Testing',
    tags: ['shift-left', 'devops', 'early-testing']
  },
  {
    id: 'pcet-4-099',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'CI/CD Pipelines',
    difficulty: 'Intermediate',
    question: 'What is a "Pipeline as Code"?',
    codeSnippet: '# Storing the CI/CD pipeline definition (.github/workflows/ci.yml or Jenkinsfile)\n# in the version-controlled Git repository alongside application source code.',
    options: [
      'The practice of defining deployment and CI/CD pipelines in version-controlled configuration files (YAML/Groovy) stored with the code itself',
      'Writing computer pipes using C pointers',
      'A plumber\'s software application',
      'Hardcoding pipeline commands into the Linux kernel'
    ],
    correctAnswer: 0,
    explanation: 'Pipeline as Code stores CI/CD workflows as version-controlled code files inside the repository, allowing pipelines to be tracked, reviewed, branched, and audited just like software.',
    officialRef: 'PCET-30-01 Block 4.5 - Pipeline as Code',
    tags: ['pipeline-as-code', 'git', 'infrastructure-as-code']
  },
  {
    id: 'pcet-4-100',
    track: 'pcet',
    section: 'Section 4',
    chapter: '4.5',
    category: 'CI/CD Pipelines',
    difficulty: 'Beginner',
    question: 'What is the primary role of a certified Python Software Tester in modern software delivery?',
    codeSnippet: '# Testing mindset:\n# - Championing test automation and CI quality gates\n# - Preventing defects through static review and test design\n# - Ensuring rapid, confident, and reliable releases to users',
    options: [
      'Serving as a quality advocate who integrates automated testing, static analysis, and reliable test strategies into the delivery pipeline to ensure software quality and confidence',
      'Manually clicking buttons on a screen 8 hours a day without writing code',
      'Blaming developers whenever a bug occurs',
      'Preventing software from ever being released to users'
    ],
    correctAnswer: 0,
    explanation: 'A certified Python Software Tester bridges software development and quality engineering, leveraging automation frameworks, static analysis, and CI/CD pipelines to ensure rapid, dependable software delivery.',
    officialRef: 'PCET-30-01 Block 4.5 - Role of Certified Tester',
    tags: ['certified-tester', 'pcet', 'quality-engineering', 'automation']
  }
];
