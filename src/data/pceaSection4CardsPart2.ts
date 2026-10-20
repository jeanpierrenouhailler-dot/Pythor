import { Flashcard } from '../types';

export const pceaSection4CardsPart2: Flashcard[] = [
  {
    id: "pcea-4-051",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Structured Logging (JSON Logs)",
    difficulty: "Advanced",
    question: "Why are JSON-formatted logs widely adopted in automated cloud operations?",
    codeSnippet: "# JSON log entry: {\"timestamp\": \"...\", \"level\": \"INFO\", \"job_id\": 42, \"items\": 150}",
    options: [
      "JSON logs can be ingested, indexed, queried, and visualized directly by centralized log analyzers (Datadog, Splunk, Elastic) without complex regexes",
      "JSON logs consume 0 disk space",
      "JSON logs prevent server crashes",
      "JSON logs cannot be deleted"
    ],
    correctAnswer: 0,
    explanation: "Structured JSON logs allow log aggregation platforms to parse fields automatically, enabling instant filtering by user, job ID, or severity.",
    officialRef: "PCEA-30-01 Block 4.3 - Structured Logging",
    tags: ["structured-logging", "json-logs", "observability"]
  },
  {
    id: "pcea-4-052",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Custom Extra Data",
    difficulty: "Intermediate",
    question: "How do you pass custom contextual metadata (like `job_id=42`) into a log record?",
    codeSnippet: "logger.info('Task started', extra={'job_id': 42, 'server': 'web01'})",
    options: [
      "extra={'job_id': 42}",
      "metadata={'job_id': 42}",
      "params={'job_id': 42}",
      "context={'job_id': 42}"
    ],
    correctAnswer: 0,
    explanation: "The `extra` keyword argument passes a dictionary whose keys can be incorporated into log format strings or structured JSON loggers.",
    officialRef: "PCEA-30-01 Block 4.3 - logging module",
    tags: ["extra", "contextual-logging", "metadata"]
  },
  {
    id: "pcea-4-053",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Suppressing Third-Party Logs",
    difficulty: "Intermediate",
    question: "How do you silence noisy DEBUG logs from a third-party library like `urllib3` while keeping your own script at DEBUG level?",
    codeSnippet: "logging.getLogger('urllib3').setLevel(logging.WARNING)",
    options: [
      "logging.getLogger('urllib3').setLevel(logging.WARNING)",
      "urllib3.disable_logging()",
      "logging.silence('urllib3')",
      "del logging.loggers['urllib3']"
    ],
    correctAnswer: 0,
    explanation: "Calling `logging.getLogger('library_name').setLevel(logging.WARNING)` raises the threshold specifically for that library without affecting your application's logs.",
    officialRef: "PCEA-30-01 Block 4.3 - Log Filtering",
    tags: ["log-filtering", "third-party-logs", "verbosity"]
  },
  {
    id: "pcea-4-054",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Root vs Child Loggers",
    difficulty: "Intermediate",
    question: "If a child logger `logging.getLogger('app.worker')` emits a message, does it propagate to handlers on parent `logging.getLogger('app')`?",
    codeSnippet: "# Logger hierarchy propagation\nlogger = logging.getLogger('app.worker')\nlogger.info('Work done')  # Propagates up to parent handlers",
    options: [
      "Yes, messages propagate up the logger hierarchy by default unless propagate=False is set",
      "No, loggers never share messages",
      "Only if both loggers have identical names",
      "Only on Linux systems"
    ],
    correctAnswer: 0,
    explanation: "By default, records propagate up ancestor loggers to the root logger, allowing parent handlers to capture all child messages centrally.",
    officialRef: "PCEA-30-01 Block 4.3 - Logger Hierarchy",
    tags: ["propagation", "logger-hierarchy", "handlers"]
  },
  {
    id: "pcea-4-055",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "FileHandler Mode",
    difficulty: "Beginner",
    question: "By default, does `logging.FileHandler('run.log')` overwrite or append to existing log files?",
    codeSnippet: "from logging import FileHandler\nhandler = FileHandler('run.log', mode='a')",
    options: [
      "Appends ('a')",
      "Overwrites ('w')",
      "Creates a new file with timestamp suffix",
      "Raises FileExistsError"
    ],
    correctAnswer: 0,
    explanation: "By default, `FileHandler` opens files in append mode (`mode='a'`), preserving previous historical log records across restarts.",
    officialRef: "PCEA-30-01 Block 4.3 - FileHandler",
    tags: ["append-mode", "file-handler", "logging"]
  },
  {
    id: "pcea-4-056",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "CRITICAL Level Use Case",
    difficulty: "Beginner",
    question: "When should an automation script log a `CRITICAL` severity message?",
    codeSnippet: "logging.critical('Database disk full; all pipeline writes failed. Aborting script!')",
    options: [
      "When an unexpected, unrecoverable failure forces the entire automation pipeline to halt",
      "For routine routine status updates",
      "To benchmark execution speed",
      "When downloading a web image"
    ],
    correctAnswer: 0,
    explanation: "`CRITICAL` is reserved for catastrophic, fatal events that prevent the application from continuing to execute.",
    officialRef: "PCEA-30-01 Block 4.3 - Severity Levels",
    tags: ["critical-level", "fatal-errors", "logging"]
  },
  {
    id: "pcea-4-057",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Formatter Class",
    difficulty: "Intermediate",
    question: "Which class defines the string structure and timestamp format of records in the `logging` module?",
    codeSnippet: "from logging import Formatter\nformatter = Formatter('%(asctime)s - %(levelname)s: %(message)s', datefmt='%Y-%m-%d %H:%M:%S')",
    options: [
      "logging.Formatter",
      "logging.Template",
      "logging.Layout",
      "logging.StringSpec"
    ],
    correctAnswer: 0,
    explanation: "`logging.Formatter` objects configure the structure, directives, and date formatting for handlers.",
    officialRef: "PCEA-30-01 Block 4.3 - Formatting",
    tags: ["formatter", "datefmt", "logging"]
  },
  {
    id: "pcea-4-058",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Sensitive Data in Logs",
    difficulty: "Beginner",
    question: "Why must automated scripts never log raw passwords, credit cards, or API secrets?",
    codeSnippet: "# Bad: logging.info(f'User logged in with password: {password}')",
    options: [
      "Logs are stored in plain text and often sent to shared central monitoring tools, creating severe security and compliance breaches",
      "Passwords cause formatting errors in logging",
      "Loggers automatically convert passwords to hashtags",
      "It slows down the network"
    ],
    correctAnswer: 0,
    explanation: "Logs are often widely accessible to developers and administrators. Writing plain text credentials to logs violates security policies and compliance regulations (GDPR, PCI-DSS).",
    officialRef: "PCEA-30-01 Block 4.3 - Security in Logging",
    tags: ["secrets-leakage", "compliance", "security"]
  },
  {
    id: "pcea-4-059",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Line Number Directive",
    difficulty: "Intermediate",
    question: "Which format directive inserts the source code line number where the log call was invoked?",
    codeSnippet: "format='%(filename)s:%(lineno)d - %(message)s'",
    options: [
      "%(lineno)d",
      "%(line)s",
      "%(loc)d",
      "%(num)d"
    ],
    correctAnswer: 0,
    explanation: "`%(lineno)d` outputs the source code line number where the logging call was made, invaluable for diagnosing errors in production.",
    officialRef: "PCEA-30-01 Block 4.3 - Directives",
    tags: ["lineno", "debugging", "directives"]
  },
  {
    id: "pcea-4-060",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.3",
    category: "Audit Trail Ledger",
    difficulty: "Intermediate",
    question: "In automation, what is the key characteristic of an audit log compared to a debug log?",
    codeSnippet: "# Audit log: 2026-10-01 02:40:00 [AUDIT] Target: /etc/hosts | Action: UPDATED | User: backup_svc",
    options: [
      "Audit logs record business-critical actions, changes, and initiators for governance and compliance, whereas debug logs record technical diagnostics",
      "Audit logs are deleted every 10 seconds",
      "Audit logs must only be written in binary",
      "Audit logs cannot have timestamps"
    ],
    correctAnswer: 0,
    explanation: "Audit logs record who did what, when, and to which resource, creating an immutable paper trail for security and regulatory compliance.",
    officialRef: "PCEA-30-01 Block 4.3 - Audit Trails",
    tags: ["audit-logs", "compliance", "traceability"]
  },
  {
    id: "pcea-4-061",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "try-except-else-finally",
    difficulty: "Beginner",
    question: "In a `try-except-else-finally` block, when does the `else` block execute?",
    codeSnippet: "try:\n    perform_task()\nexcept SpecificError:\n    handle_error()\nelse:\n    print('Task succeeded without errors!')\nfinally:\n    cleanup()",
    options: [
      "Only when the try block completes WITHOUT raising any exceptions",
      "Only when an exception is caught",
      "Always, regardless of errors",
      "Before the try block starts"
    ],
    correctAnswer: 0,
    explanation: "The `else` block executes only if the code in the `try` block runs to completion without raising any exceptions.",
    officialRef: "PCEA-30-01 Block 4.4 - Exception Handling",
    tags: ["try-else", "flow-control", "exceptions"]
  },
  {
    id: "pcea-4-062",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "finally Block",
    difficulty: "Beginner",
    question: "When is the `finally` block executed in Python exception handling?",
    codeSnippet: "try:\n    f = open('data.bin', 'wb')\n    write_data(f)\nfinally:\n    f.close()",
    options: [
      "Always, whether an exception occurred, was caught, or not caught, or if return was called",
      "Only if an error was raised",
      "Only if no error occurred",
      "Only if the script is running in debug mode"
    ],
    correctAnswer: 0,
    explanation: "`finally` is guaranteed to execute under all circumstances before the block exits, ensuring reliable cleanup of resources.",
    officialRef: "PCEA-30-01 Block 4.4 - Exception Handling",
    tags: ["finally", "resource-cleanup", "guaranteed-execution"]
  },
  {
    id: "pcea-4-063",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Bare except Hazard",
    difficulty: "Intermediate",
    question: "Why is writing a bare `except:` or `except BaseException:` considered harmful in automation scripts?",
    codeSnippet: "# Dangerous bare except:\n# try: run() except: pass",
    options: [
      "It intercepts SystemExit and KeyboardInterrupt (Ctrl+C), preventing scripts from terminating or being stopped by operators",
      "It causes syntax errors in Python 3",
      "It slows down CPU clock speed",
      "It deletes variable contents"
    ],
    correctAnswer: 0,
    explanation: "A bare `except:` catches `BaseException`, swallowing `KeyboardInterrupt` (Ctrl+C) and `SystemExit`, making scripts impossible to stop cleanly.",
    officialRef: "PCEA-30-01 Block 4.4 - Anti-Patterns",
    tags: ["bare-except", "anti-patterns", "system-exit"]
  },
  {
    id: "pcea-4-064",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Catching Exception",
    difficulty: "Beginner",
    question: "Why is `except Exception as err:` preferred when catching general unexpected runtime errors?",
    codeSnippet: "try:\n    process_record()\nexcept Exception as err:\n    logging.error(f'Record failed: {err}')",
    options: [
      "It catches all standard runtime errors while still allowing KeyboardInterrupt and SystemExit to terminate the script cleanly",
      "It only catches division by zero errors",
      "It automatically fixes the bug",
      "It runs in an asynchronous thread"
    ],
    correctAnswer: 0,
    explanation: "Standard operational errors inherit from `Exception`, while system termination signals inherit directly from `BaseException`. Catching `Exception` leaves interrupts functional.",
    officialRef: "PCEA-30-01 Block 4.4 - Best Practices",
    tags: ["except-exception", "best-practices", "error-handling"]
  },
  {
    id: "pcea-4-065",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Custom Exceptions",
    difficulty: "Intermediate",
    question: "How do you define a custom domain exception for an automation tool?",
    codeSnippet: "class BackupFailedError(Exception):\n    \"\"\"Raised when database backup fails.\"\"\"\n    pass",
    options: [
      "class BackupFailedError(Exception): pass",
      "def BackupFailedError(): pass",
      "error BackupFailedError",
      "create_exception(BackupFailedError)"
    ],
    correctAnswer: 0,
    explanation: "Custom exceptions are defined by subclassing Python's built-in `Exception` class.",
    officialRef: "PCEA-30-01 Block 4.4 - Custom Exceptions",
    tags: ["custom-exceptions", "subclassing", "architecture"]
  },
  {
    id: "pcea-4-066",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Exception Chaining",
    difficulty: "Intermediate",
    question: "What syntax chains a low-level OS error to a high-level domain error while preserving the original cause?",
    codeSnippet: "try:\n    os.remove('protected.file')\nexcept OSError as err:\n    raise DeploymentError('Failed to remove lockfile') from err",
    options: [
      "raise DeploymentError(...) from err",
      "raise DeploymentError(...) with err",
      "raise DeploymentError(...) cause err",
      "raise DeploymentError(...).link(err)"
    ],
    correctAnswer: 0,
    explanation: "`raise NewException(...) from original_err` preserves the original traceback and exception context via explicit exception chaining (`__cause__`).",
    officialRef: "PCEA-30-01 Block 4.4 - Exception Chaining",
    tags: ["exception-chaining", "raise-from", "traceability"]
  },
  {
    id: "pcea-4-067",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Retry Loop Pattern",
    difficulty: "Intermediate",
    question: "What is the standard pattern for retrying a flaky network operation up to 3 times before giving up?",
    codeSnippet: "max_retries = 3\nfor attempt in range(1, max_retries + 1):\n    try:\n        return call_remote_service()\n    except TransientNetworkError as e:\n        if attempt == max_retries:\n            raise\n        time.sleep(2 ** attempt)",
    options: [
      "Loop over a range of attempts with a try-except, re-raising on the final attempt and sleeping between failures",
      "Call the function 3 times on the same line",
      "Use a recursive function with no base case",
      "Restart the Python virtualenv"
    ],
    correctAnswer: 0,
    explanation: "A counted loop with exponential sleep that catches transient errors and re-raises on the final attempt is the standard retry pattern.",
    officialRef: "PCEA-30-01 Block 4.4 - Retry Logic",
    tags: ["retry-loop", "transient-errors", "resilience"]
  },
  {
    id: "pcea-4-068",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Retry Decorator",
    difficulty: "Advanced",
    question: "How can a Python decorator be used to add automated retry capability to any function?",
    codeSnippet: "def retry(max_attempts=3):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for i in range(max_attempts):\n                try:\n                    return func(*args, **kwargs)\n                except Exception:\n                    if i == max_attempts - 1:\n                        raise\n                    time.sleep(1)\n        return wrapper\n    return decorator",
    options: [
      "Wrap the target function in an outer wrapper that executes a retry loop",
      "Decorators cannot catch exceptions",
      "Use @retry keyword built into Python",
      "Modify the bytecode of the function"
    ],
    correctAnswer: 0,
    explanation: "A decorator wraps the target function with retry loop mechanics, cleanly separating resilience logic from core business logic.",
    officialRef: "PCEA-30-01 Block 4.4 - Decorators",
    tags: ["decorators", "retry-decorator", "clean-code"]
  },
  {
    id: "pcea-4-069",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Circuit Breaker Concept",
    difficulty: "Advanced",
    question: "What is the purpose of the 'Circuit Breaker' pattern in automated external integrations?",
    codeSnippet: "# Circuit states: CLOSED (normal) -> OPEN (stop calling failing service) -> HALF-OPEN (test canary)",
    options: [
      "To immediately stop sending requests to an external service that has repeatedly failed, avoiding cascading timeouts and resource exhaustion",
      "To cut physical power to the server",
      "To bypass API rate limits",
      "To compress network payloads"
    ],
    correctAnswer: 0,
    explanation: "Circuit breakers detect repeated failures and 'trip open', failing fast locally without waiting for timeouts until the external service recovers.",
    officialRef: "PCEA-30-01 Block 4.4 - Architecture",
    tags: ["circuit-breaker", "fail-fast", "resilience"]
  },
  {
    id: "pcea-4-070",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Dead Letter Queue / Failure Ledger",
    difficulty: "Intermediate",
    question: "When processing a batch of 10,000 records, what should happen to individual records that fail processing?",
    codeSnippet: "failures = []\nfor record in records:\n    try:\n        process(record)\n    except Exception as e:\n        failures.append({'record': record, 'error': str(e)})\nsave_dead_letter_log(failures)",
    options: [
      "Record failed items to a failure ledger or dead-letter queue for offline inspection while continuing to process remaining records",
      "Crash the entire batch on the first failure",
      "Silently discard the failed records without logging",
      "Delete the database"
    ],
    correctAnswer: 0,
    explanation: "Recording failed items in a dead-letter log or queue allows the main automation batch to finish while isolating defective records for human review.",
    officialRef: "PCEA-30-01 Block 4.4 - Batch Processing",
    tags: ["dead-letter-queue", "failure-ledger", "batch-automation"]
  },
  {
    id: "pcea-4-071",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Re-Raising Exceptions",
    difficulty: "Beginner",
    question: "How do you re-raise the currently active exception inside an `except` block after logging it?",
    codeSnippet: "try:\n    critical_step()\nexcept Exception as e:\n    logging.error('Step failed!')\n    raise  # Re-raises current exception",
    options: [
      "Call `raise` with no arguments",
      "Call `raise e`",
      "Call `raise Exception`",
      "Call `sys.exit(1)`"
    ],
    correctAnswer: 0,
    explanation: "A bare `raise` statement inside an except block re-raises the active exception currently being handled, preserving the original traceback.",
    officialRef: "PCEA-30-01 Block 4.4 - Exception Handling",
    tags: ["bare-raise", "re-raise", "traceback-preservation"]
  },
  {
    id: "pcea-4-072",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Multiple Exception Types",
    difficulty: "Beginner",
    question: "How do you catch both `FileNotFoundError` and `PermissionError` with identical handling logic in a single `except` statement?",
    codeSnippet: "try:\n    read_config()\nexcept (FileNotFoundError, PermissionError) as err:\n    logging.warning(f'Config access issue: {err}')",
    options: [
      "except (FileNotFoundError, PermissionError) as err:",
      "except FileNotFoundError or PermissionError:",
      "except [FileNotFoundError, PermissionError]:",
      "except FileNotFoundError, PermissionError:"
    ],
    correctAnswer: 0,
    explanation: "Multiple exception classes can be caught together by specifying them as a parenthesized tuple: `except (ErrorA, ErrorB) as err:`.",
    officialRef: "PCEA-30-01 Block 4.4 - Syntax",
    tags: ["multiple-exceptions", "tuple-syntax", "error-handling"]
  },
  {
    id: "pcea-4-073",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Specific vs General Exceptions",
    difficulty: "Beginner",
    question: "When defining multiple `except` blocks, what order must they appear in?",
    codeSnippet: "try:\n    val = int('abc')\nexcept ValueError:\n    print('Specific handling')\nexcept Exception:\n    print('General fallback')",
    options: [
      "Most specific exception classes first, followed by more general base classes",
      "Most general classes first, then specific classes",
      "Alphabetical order",
      "Order does not matter"
    ],
    correctAnswer: 0,
    explanation: "Python evaluates `except` clauses top-to-bottom. Specific subclasses must appear first; otherwise, a broad base class would intercept them prematurely.",
    officialRef: "PCEA-30-01 Block 4.4 - Exception Hierarchy",
    tags: ["ordering", "specificity", "subclasses"]
  },
  {
    id: "pcea-4-074",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Idempotent Retry",
    difficulty: "Intermediate",
    question: "Why must operations executed inside automated retry loops be idempotent?",
    codeSnippet: "# Bad: Charging a customer credit card without an idempotency key inside a retry loop!",
    options: [
      "If a non-idempotent operation (like charging a credit card or appending to a file) is retried after a network timeout, it may execute multiple duplicate actions",
      "Because Python throws an error if retried functions are not idempotent",
      "Idempotent functions run twice as fast",
      "It enables multithreading"
    ],
    correctAnswer: 0,
    explanation: "If a request times out after reaching the server, retrying a non-idempotent action will execute it multiple times (e.g. double charging).",
    officialRef: "PCEA-30-01 Block 4.4 - Retry Logic",
    tags: ["idempotent-retries", "safety", "network-timeouts"]
  },
  {
    id: "pcea-4-075",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Assert Statements in Production",
    difficulty: "Intermediate",
    question: "Why should `assert` statements NOT be used for business logic error handling in production automation scripts?",
    codeSnippet: "# Dangerous: assert is_admin, 'Unauthorized!'\n# Running python with -O disables all assert statements!",
    options: [
      "Running Python with optimizations (-O flag) completely disables and removes all assert statements at compile time",
      "assert statements consume 50 MB of memory each",
      "assert statements cannot be caught by try-except",
      "assert is only available in Python 2"
    ],
    correctAnswer: 0,
    explanation: "Asserts are designed for internal debugging. Production code run with `python -O` strips asserts, bypassing security or data validation checks.",
    officialRef: "PCEA-30-01 Block 4.4 - Anti-Patterns",
    tags: ["assert-statements", "python-optimizations", "production-safety"]
  },
  {
    id: "pcea-4-076",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Uncaught Exception Hook",
    difficulty: "Advanced",
    question: "How can an automation script configure a global fallback handler to catch any unhandled exception before the script terminates?",
    codeSnippet: "import sys, logging\n\ndef global_exception_handler(exc_type, exc_value, exc_traceback):\n    logging.critical('Unhandled crash!', exc_info=(exc_type, exc_value, exc_traceback))\n    send_pager_alert()\n\nsys.excepthook = global_exception_handler",
    options: [
      "Assign a callback function to sys.excepthook",
      "Wrap the Python interpreter in a daemon",
      "Set sys.global_try = True",
      "Set os.on_error = callback"
    ],
    correctAnswer: 0,
    explanation: "`sys.excepthook` is called by Python when an exception is raised and uncaught, allowing global emergency notification before process exit.",
    officialRef: "PCEA-30-01 Block 4.4 - Global Hooks",
    tags: ["sys-excepthook", "crash-reporting", "observability"]
  },
  {
    id: "pcea-4-077",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "KeyboardInterrupt Clean Exit",
    difficulty: "Beginner",
    question: "How do you catch a user pressing `Ctrl+C` to display a clean exit message without printing an ugly traceback?",
    codeSnippet: "try:\n    run_loop()\nexcept KeyboardInterrupt:\n    print('\\nScript cancelled by operator.')\n    sys.exit(130)",
    options: [
      "Catch KeyboardInterrupt explicitly in the main entry point",
      "Disable the keyboard with os.system()",
      "Wrap code in while True: pass",
      "Use time.sleep()"
    ],
    correctAnswer: 0,
    explanation: "Catching `KeyboardInterrupt` enables clean cancellation, closing files and suppressing raw stack trace dumps when cancelled by operators.",
    officialRef: "PCEA-30-01 Block 4.4 - User Experience",
    tags: ["keyboard-interrupt", "clean-exit", "cli"]
  },
  {
    id: "pcea-4-078",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Validating Invariants",
    difficulty: "Intermediate",
    question: "What is the term for checking conditions that must always hold true throughout an automation pipeline (such as positive account balance)?",
    codeSnippet: "# Invariant check:\nif account.balance < 0:\n    raise InvariantViolationError('Balance cannot be negative!')",
    options: [
      "Invariant validation",
      "Dynamic typing",
      "Polymorphism",
      "Reflection"
    ],
    correctAnswer: 0,
    explanation: "Invariants are state assertions that must remain true across processing stages; checking them prevents corrupted states from persisting.",
    officialRef: "PCEA-30-01 Block 4.4 - Defensive Programming",
    tags: ["invariants", "data-integrity", "defensive-coding"]
  },
  {
    id: "pcea-4-079",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Safe Resource Cleanup",
    difficulty: "Intermediate",
    question: "If a file handle or network connection is opened before a `try` block, what construct ensures it is always closed?",
    codeSnippet: "with open('data.txt') as f:\n    process(f)",
    options: [
      "A context manager (with statement) or a finally block",
      "A global variable",
      "A lambda function",
      "A while loop"
    ],
    correctAnswer: 0,
    explanation: "Both context managers (`with`) and `finally` blocks guarantee cleanup execution even if unexpected exceptions occur.",
    officialRef: "PCEA-30-01 Block 4.4 - Resource Management",
    tags: ["context-managers", "finally", "cleanup"]
  },
  {
    id: "pcea-4-080",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.4",
    category: "Silent Failures Anti-Pattern",
    difficulty: "Beginner",
    question: "Why is `except Exception: pass` known as one of the most dangerous anti-patterns in automation?",
    codeSnippet: "# Anti-pattern: try: step() except Exception: pass",
    options: [
      "It hides genuine bugs, syntax errors, and data corruption, leaving automations in silently broken or unpredictable states",
      "It increases execution time by 10x",
      "It disables Python garbage collection",
      "It converts exceptions into integers"
    ],
    correctAnswer: 0,
    explanation: "Silently swallowing exceptions without logging makes debugging impossible and allows broken pipelines to continue producing corrupt results undetected.",
    officialRef: "PCEA-30-01 Block 4.4 - Anti-Patterns",
    tags: ["swallowing-exceptions", "silent-failures", "best-practices"]
  },
  {
    id: "pcea-4-081",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "smtplib Setup",
    difficulty: "Beginner",
    question: "Which standard library module handles sending email alerts over SMTP in Python?",
    codeSnippet: "import smtplib\nwith smtplib.SMTP('smtp.example.com', 587) as server:\n    pass",
    options: [
      "email_sender",
      "smtplib",
      "mailx",
      "socket.smtp"
    ],
    correctAnswer: 1,
    explanation: "`smtplib` is the Python standard library client implementation of the Simple Mail Transfer Protocol (SMTP).",
    officialRef: "PCEA-30-01 Block 4.5 - smtplib",
    tags: ["smtplib", "email", "standard-library"]
  },
  {
    id: "pcea-4-082",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "STARTTLS Encryption",
    difficulty: "Intermediate",
    question: "What is the purpose of calling `server.starttls()` when connecting to port 587?",
    codeSnippet: "import smtplib\nserver = smtplib.SMTP('smtp.example.com', 587)\nserver.starttls()  # Upgrade connection to TLS\nserver.login(user, password)",
    options: [
      "Upgrades an existing plain text connection to an encrypted TLS (SSL) session before transmitting credentials",
      "Restarts the SMTP server",
      "Sends the email in HTML format",
      "Compresses the email body"
    ],
    correctAnswer: 0,
    explanation: "`starttls()` negotiates Transport Layer Security (TLS) over an existing plaintext socket, encrypting login credentials and email messages.",
    officialRef: "PCEA-30-01 Block 4.5 - smtplib",
    tags: ["starttls", "encryption", "security"]
  },
  {
    id: "pcea-4-083",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "SMTP_SSL",
    difficulty: "Intermediate",
    question: "When connecting to an SMTP server on port 465, which smtplib class initiates direct SSL encryption from the outset?",
    codeSnippet: "import smtplib\nwith smtplib.SMTP_SSL('smtp.example.com', 465) as server:\n    server.login(user, password)",
    options: [
      "smtplib.SMTP_SSL",
      "smtplib.SecureSMTP",
      "smtplib.TLS_SMTP",
      "smtplib.SMTP(ssl=True)"
    ],
    correctAnswer: 0,
    explanation: "`smtplib.SMTP_SSL` creates a connection that is encrypted via SSL/TLS from the initial socket handshake (standard on port 465).",
    officialRef: "PCEA-30-01 Block 4.5 - smtplib",
    tags: ["smtp-ssl", "port-465", "tls"]
  },
  {
    id: "pcea-4-084",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "EmailMessage Class",
    difficulty: "Beginner",
    question: "Which modern standard library class is recommended for constructing email messages with headers, text, HTML, and attachments?",
    codeSnippet: "from email.message import EmailMessage\nmsg = EmailMessage()\nmsg['Subject'] = 'Automated Report'\nmsg['From'] = 'bot@example.com'\nmsg['To'] = 'ops@example.com'\nmsg.set_content('All jobs completed.')",
    options: [
      "email.message.EmailMessage",
      "email.MIMEText",
      "smtplib.MailObject",
      "email.Composer"
    ],
    correctAnswer: 0,
    explanation: "`EmailMessage` (introduced in Python 3.6+) is the modern, intuitive interface for assembling RFC 5322 compliant messages.",
    officialRef: "PCEA-30-01 Block 4.5 - email module",
    tags: ["email-message", "modern-email", "composition"]
  },
  {
    id: "pcea-4-085",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "Email Headers",
    difficulty: "Beginner",
    question: "How are email headers like `Subject`, `From`, and `To` set on an `EmailMessage` object?",
    codeSnippet: "msg = EmailMessage()\nmsg['Subject'] = 'Daily Report'\nmsg['From'] = 'bot@domain.com'\nmsg['To'] = 'admin@domain.com'",
    options: [
      "Using dictionary key assignment: msg['Header'] = 'value'",
      "Calling msg.set_header('Subject', 'value')",
      "Passing them as kwargs to EmailMessage()",
      "Writing them to a text file"
    ],
    correctAnswer: 0,
    explanation: "`EmailMessage` behaves like a dictionary for setting and retrieving standard email headers.",
    officialRef: "PCEA-30-01 Block 4.5 - EmailMessage",
    tags: ["headers", "subject", "recipient"]
  },
  {
    id: "pcea-4-086",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "Plain Text Body",
    difficulty: "Beginner",
    question: "How do you set the main plain-text content of an `EmailMessage` object?",
    codeSnippet: "msg = EmailMessage()\nmsg.set_content('Execution summary: 0 failures, 142 processed.')",
    options: [
      "msg.set_content('...')",
      "msg.body = '...'",
      "msg.write('...')",
      "msg['Body'] = '...'"
    ],
    correctAnswer: 0,
    explanation: "`msg.set_content(text)` sets the payload and specifies `Content-Type: text/plain` with UTF-8 encoding by default.",
    officialRef: "PCEA-30-01 Block 4.5 - EmailMessage",
    tags: ["set-content", "plain-text", "email-body"]
  },
  {
    id: "pcea-4-087",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "HTML Email Alternative",
    difficulty: "Intermediate",
    question: "How do you add an HTML formatted version of an alert email alongside the plain text version?",
    codeSnippet: "msg = EmailMessage()\nmsg.set_content('Plain text fallback')\nmsg.add_alternative('<h1>Alert</h1><p>Status: OK</p>', subtype='html')",
    options: [
      "msg.add_alternative(html_content, subtype='html')",
      "msg.set_html(html_content)",
      "msg['Content-Type'] = 'text/html'",
      "msg.html = html_content"
    ],
    correctAnswer: 0,
    explanation: "`msg.add_alternative(html_string, subtype='html')` creates a `multipart/alternative` container with both plain-text and rich HTML formats.",
    officialRef: "PCEA-30-01 Block 4.5 - HTML Emails",
    tags: ["html-email", "add-alternative", "multipart"]
  },
  {
    id: "pcea-4-088",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "Attaching Files to Email",
    difficulty: "Intermediate",
    question: "How do you attach a CSV report file `summary.csv` to an `EmailMessage` object?",
    codeSnippet: "with open('summary.csv', 'rb') as f:\n    data = f.read()\nmsg.add_attachment(data, maintype='text', subtype='csv', filename='summary.csv')",
    options: [
      "msg.add_attachment(data, maintype='text', subtype='csv', filename='summary.csv')",
      "msg.attach_file('summary.csv')",
      "msg.attachments.append('summary.csv')",
      "msg['Attachment'] = 'summary.csv'"
    ],
    correctAnswer: 0,
    explanation: "`msg.add_attachment(data, maintype=..., subtype=..., filename=...)` attaches binary data, setting MIME boundaries and headers automatically.",
    officialRef: "PCEA-30-01 Block 4.5 - Attachments",
    tags: ["add-attachment", "mime", "csv-attachment"]
  },
  {
    id: "pcea-4-089",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "send_message Method",
    difficulty: "Beginner",
    question: "Which method on an `SMTP` object sends an `EmailMessage` instance directly without needing manual recipient address lists?",
    codeSnippet: "server.send_message(msg)",
    options: [
      "server.send_message(msg)",
      "server.sendmail(msg)",
      "server.dispatch(msg)",
      "server.transmit(msg)"
    ],
    correctAnswer: 0,
    explanation: "`server.send_message(msg)` extracts envelope recipients (`To`, `Cc`, `Bcc`) and sender (`From`) directly from the message object.",
    officialRef: "PCEA-30-01 Block 4.5 - smtplib",
    tags: ["send-message", "smtplib", "dispatch"]
  },
  {
    id: "pcea-4-090",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "App-Specific Passwords",
    difficulty: "Intermediate",
    question: "Why do modern email providers (like Gmail or Outlook) require 'App-Specific Passwords' for automated Python SMTP scripts?",
    codeSnippet: "# Authenticating automated bots securely without compromising main account password",
    options: [
      "They protect the main account password when 2-Factor Authentication (2FA) is enabled, granting restricted access revocable at any time",
      "Python cannot send standard passwords over the internet",
      "App-specific passwords make emails deliver 5x faster",
      "SMTP port 587 requires 32-character keys"
    ],
    correctAnswer: 0,
    explanation: "App-specific passwords bypass 2FA challenges for headless scripts while keeping primary credentials secure and revocable.",
    officialRef: "PCEA-30-01 Block 4.5 - Email Security",
    tags: ["app-passwords", "2fa", "authentication"]
  },
  {
    id: "pcea-4-091",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "Multiple Recipients",
    difficulty: "Beginner",
    question: "How do you specify multiple email recipients in the `To` header of an `EmailMessage`?",
    codeSnippet: "msg['To'] = 'dev1@example.com, dev2@example.com, dev3@example.com'",
    options: [
      "Assign a comma-separated string of email addresses",
      "Assign a Python list of strings",
      "Call msg.add_recipient() for each",
      "Assign an integer count of recipients"
    ],
    correctAnswer: 0,
    explanation: "In standard email headers, multiple recipients are separated by commas within a single string (e.g. `'user1@domain.com, user2@domain.com'`).",
    officialRef: "PCEA-30-01 Block 4.5 - EmailMessage",
    tags: ["recipients", "to-header", "rfc5322"]
  },
  {
    id: "pcea-4-092",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "Authentication Errors",
    difficulty: "Intermediate",
    question: "Which exception is raised by `smtplib` when incorrect credentials are provided to `server.login()`?",
    codeSnippet: "import smtplib\ntry:\n    server.login('user', 'wrong_pass')\nexcept smtplib.SMTPAuthenticationError:\n    print('Login credentials rejected!')",
    options: [
      "smtplib.SMTPAuthenticationError",
      "smtplib.AuthFailure",
      "PermissionError",
      "ValueError"
    ],
    correctAnswer: 0,
    explanation: "`smtplib.SMTPAuthenticationError` is raised when the SMTP server rejects the provided username and password.",
    officialRef: "PCEA-30-01 Block 4.5 - Error Handling",
    tags: ["smtp-authentication-error", "exceptions", "login"]
  },
  {
    id: "pcea-4-093",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "Context Manager Cleanup",
    difficulty: "Beginner",
    question: "Why should SMTP connections be established using a `with` statement?",
    codeSnippet: "with smtplib.SMTP('smtp.example.com', 587) as server:\n    server.starttls()\n    server.login(u, p)\n    server.send_message(msg)\n# server.quit() is called automatically",
    options: [
      "It guarantees that server.quit() is called and the TCP connection is closed cleanly, even if sending fails with an exception",
      "It avoids having to enter a password",
      "It encrypts the Python file",
      "It delivers the email immediately"
    ],
    correctAnswer: 0,
    explanation: "Using `with smtplib.SMTP(...) as server:` guarantees that `server.quit()` is called, closing the socket session cleanly under all conditions.",
    officialRef: "PCEA-30-01 Block 4.5 - Resource Management",
    tags: ["context-manager", "server-quit", "clean-code"]
  },
  {
    id: "pcea-4-094",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "Attaching Log Files",
    difficulty: "Intermediate",
    question: "How do you read a text log file and attach it as a MIME attachment to an email alert?",
    codeSnippet: "with open('error.log', 'r', encoding='utf-8') as f:\n    log_text = f.read()\nmsg.add_attachment(log_text, subtype='plain', filename='error.log')",
    options: [
      "Read the text and call msg.add_attachment(log_text, subtype='plain', filename='error.log')",
      "Pass the filename to msg.attach()",
      "msg['Attachment'] = open('error.log')",
      "Embed the log in the email subject"
    ],
    correctAnswer: 0,
    explanation: "`msg.add_attachment(text_or_bytes, subtype=..., filename=...)` accepts both string and binary payloads, formatting appropriate MIME headers.",
    officialRef: "PCEA-30-01 Block 4.5 - Attachments",
    tags: ["log-attachment", "add-attachment", "troubleshooting"]
  },
  {
    id: "pcea-4-095",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "Bcc Recipients",
    difficulty: "Intermediate",
    question: "How can an automation script send a message to a Blind Carbon Copy (`Bcc`) recipient without exposing their address in email headers?",
    codeSnippet: "msg['Bcc'] = 'audit@example.com'\n# send_message extracts Bcc for envelope recipients, but removes Bcc header from outgoing message body",
    options: [
      "Set msg['Bcc'] = 'audit@example.com' (send_message handles stripping the header from the message body)",
      "Bcc is not supported in Python",
      "Manually encrypt the email address",
      "Send two separate emails"
    ],
    correctAnswer: 0,
    explanation: "`EmailMessage` allows setting `Bcc`. `server.send_message()` routes to Bcc recipients while stripping the header from the transmitted headers.",
    officialRef: "PCEA-30-01 Block 4.5 - EmailMessage",
    tags: ["bcc", "privacy", "email-headers"]
  },
  {
    id: "pcea-4-096",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "Alert Throttling",
    difficulty: "Intermediate",
    question: "Why must an automated monitoring script implement alert throttling (e.g. at most 1 alert email per hour per error)?",
    codeSnippet: "# Alert throttling pattern: prevent flooding inbox with 10,000 emails during an outage",
    options: [
      "To avoid flooding the on-call engineer's inbox with thousands of duplicate notification emails during an active outage",
      "Because SMTP servers only allow 1 email per year",
      "To prevent running out of hard drive space",
      "Because Python can only send 1 email per day"
    ],
    correctAnswer: 0,
    explanation: "Throttling or debouncing alerts prevents inbox spam and alert fatigue when a recurring error occurs hundreds of times per minute.",
    officialRef: "PCEA-30-01 Block 4.5 - Best Practices",
    tags: ["throttling", "alert-fatigue", "monitoring"]
  },
  {
    id: "pcea-4-097",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "HTML Report Summary",
    difficulty: "Intermediate",
    question: "What is the advantage of sending an HTML table summary in daily operational emails rather than raw CSV attachments only?",
    codeSnippet: "# Executive dashboard in email body:\n# <table><tr><th>Service</th><th>Status</th></tr><tr><td>DB</td><td>OK</td></tr></table>",
    options: [
      "Stakeholders can view key metrics and health status immediately inside mobile and desktop email clients without downloading files",
      "HTML emails bypass spam filters",
      "HTML emails take 0 bytes of bandwidth",
      "HTML emails require no internet connection"
    ],
    correctAnswer: 0,
    explanation: "Inline HTML tables allow recipients to review critical KPIs and execution statuses directly in their email preview pane.",
    officialRef: "PCEA-30-01 Block 4.5 - Reporting",
    tags: ["html-reporting", "executive-summary", "email-design"]
  },
  {
    id: "pcea-4-098",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "SMTPServerDisconnected",
    difficulty: "Intermediate",
    question: "Which exception is raised when the SMTP server abruptly closes the network socket during transmission?",
    codeSnippet: "import smtplib\ntry:\n    server.send_message(msg)\nexcept smtplib.SMTPServerDisconnected:\n    print('Server dropped the connection!')",
    options: [
      "smtplib.SMTPServerDisconnected",
      "smtplib.ConnectionLost",
      "ConnectionResetError only",
      "smtplib.Timeout"
    ],
    correctAnswer: 0,
    explanation: "`smtplib.SMTPServerDisconnected` is raised when the remote mail server closes the socket unexpectedly.",
    officialRef: "PCEA-30-01 Block 4.5 - Error Handling",
    tags: ["smtp-disconnected", "socket-drop", "exceptions"]
  },
  {
    id: "pcea-4-099",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "MIME Type Detection",
    difficulty: "Advanced",
    question: "Which standard library module can guess the MIME type and subtype of a file for email attachments?",
    codeSnippet: "import mimetypes\nctype, encoding = mimetypes.guess_type('report.xlsx')\n# ctype -> 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'",
    options: [
      "mimetypes",
      "file_guesser",
      "email.types",
      "os.mimetype"
    ],
    correctAnswer: 0,
    explanation: "`mimetypes.guess_type(filename)` looks up the filename's extension in the system MIME database, returning the correct MIME type and encoding.",
    officialRef: "PCEA-30-01 Block 4.5 - MIME Types",
    tags: ["mimetypes", "guess-type", "attachments"]
  },
  {
    id: "pcea-4-100",
    track: 'pcea',
    section: "Section 4",
    chapter: "4.5",
    category: "SMS / Chat Gateways",
    difficulty: "Intermediate",
    question: "Besides traditional email, how can `smtplib` trigger SMS alerts to mobile phones?",
    codeSnippet: "# Many telecom carriers provide email-to-SMS gateways:\n# msg['To'] = '5551234567@vtext.com'",
    options: [
      "By addressing the email to the carrier's email-to-SMS gateway address (e.g. number@carrier-gateway.com)",
      "By dialing the phone with a modem",
      "By connecting to port 80",
      "By sending a ping packet to the phone"
    ],
    correctAnswer: 0,
    explanation: "Most mobile carriers provide email-to-SMS gateways (e.g. `number@vtext.com`), allowing automated email scripts to dispatch mobile text messages without dedicated SMS APIs.",
    officialRef: "PCEA-30-01 Block 4.5 - Notification Dispatch",
    tags: ["email-to-sms", "mobile-alerts", "telecom-gateways"]
  }
];
