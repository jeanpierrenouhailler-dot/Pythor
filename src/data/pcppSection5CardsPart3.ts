import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 5: FILE PROCESSING AND DATA PERSISTENCE (Part 3: Cards 76 to 100)
 * - Chapter 5.4: Logging Architecture (Continuation: Cards 76 to 80)
 * - Chapter 5.5: Configuring Log Levels, Rotation & Enterprise Logging (Cards 81 to 100)
 */
export const pcppSection5CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 5.4: LOGGING ARCHITECTURE (Continuation: Cards 76 to 80)
  // =========================================================================
  {
    id: 'pcpp-s5-fc-076',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Logging exceptions and tracebacks with logger.exception() vs. exc_info=True',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What is the difference between logger.error() and logger.exception(), and what level does logger.exception() emit?',
    codeSnippet: `import logging
import io

stream = io.StringIO()
logger = logging.getLogger("exc_demo")
handler = logging.StreamHandler(stream)
logger.addHandler(handler)
logger.propagate = False

try:
    1 / 0
except ZeroDivisionError:
    # 1. logger.exception() ALWAYS logs at ERROR level and appends the full traceback:
    logger.exception("Calculation failed")
    # Equivalent to: logger.error("Calculation failed", exc_info=True)

output = stream.getvalue()
print("Contains ERROR level:", "ERROR" in output)
print("Contains Traceback:", "Traceback" in output)
print("Contains ZeroDivisionError:", "ZeroDivisionError" in output)`,
    stdoutExpected: 'Contains ERROR level: True\nContains Traceback: True\nContains ZeroDivisionError: True',
    explanationTitle: 'logger.exception() and exc_info',
    explanationText:
      'logger.exception(msg) is a convenience method that logs a message with severity ERROR and automatically attaches current exception traceback information. Calling it outside an except block produces unhelpful NoneType traceback info. Any log method (debug, info, error) can also append tracebacks by setting exc_info=True.',
    complexityInfo: 'Exam trap: logger.exception() always emits at ERROR level (40)',
  },
  {
    id: 'pcpp-s5-fc-077',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Injecting contextual data using the extra parameter',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'How do you pass dynamic user-defined variables into LogRecords using the extra parameter?',
    codeSnippet: `import logging
import io

stream = io.StringIO()
# Format string references custom key %(client_ip)s:
formatter = logging.Formatter("%(levelname)s [%(client_ip)s]: %(message)s")
handler = logging.StreamHandler(stream)
handler.setFormatter(formatter)

logger = logging.getLogger("web")
logger.addHandler(handler)
logger.propagate = False

# Pass dictionary to 'extra' parameter:
logger.info("Login attempt", extra={"client_ip": "192.168.1.50"})

print(stream.getvalue().strip())`,
    stdoutExpected: 'INFO [192.168.1.50]: Login attempt',
    explanationTitle: 'The extra Parameter',
    explanationText:
      'The extra keyword parameter accepts a dictionary whose keys populate the LogRecord attribute dictionary. The custom keys can then be referenced directly inside the Formatter string template (e.g. %(client_ip)s). Note: If a log record is formatted with a template referencing an extra key that was not provided, a KeyError is raised.',
    complexityInfo: 'PCPP 5.4 Contextual data passing with extra',
  },
  {
    id: 'pcpp-s5-fc-078',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Capturing call stack information with stack_info=True',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'How do you capture and log the current call stack without having an active exception?',
    codeSnippet: `import logging
import io

stream = io.StringIO()
handler = logging.StreamHandler(stream)
logger = logging.getLogger("stack_demo")
logger.addHandler(handler)
logger.propagate = False

def inner():
    # stack_info=True captures the current execution stack frame:
    logger.warning("Checkpoint reached", stack_info=True)

def outer():
    inner()

outer()
output = stream.getvalue()
print("Contains Stack info:", "Stack (most recent call last):" in output)
print("Contains function 'outer':", "outer" in output)`,
    stdoutExpected: "Contains Stack info: True\nContains function 'outer': True",
    explanationTitle: 'stack_info Parameter',
    explanationText:
      'Passing stack_info=True to any logging method appends the current thread call stack to the log message, even when no exception has occurred. This is useful for auditing execution pathways leading to warning checkpoints.',
    complexityInfo: 'PCPP 5.4 Call stack diagnostic capture',
  },
  {
    id: 'pcpp-s5-fc-079',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Custom Log Filters: subclassing logging.Filter and overriding filter(record)',
    category: 'T5: Data Persistence',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'How do you build a custom Filter class in Python to selectively drop or enrich log records?',
    codeSnippet: `import logging
import io

class SensitiveDataFilter(logging.Filter):
    # filter(record) must return True to ALLOW the record, or False to DROP it!
    def filter(self, record):
        if "PASSWORD" in record.getMessage():
            return False # Drop record!
        # Filters can also enrich or mutate records:
        record.masked_user = "REDACTED"
        return True

stream = io.StringIO()
handler = logging.StreamHandler(stream)
handler.addFilter(SensitiveDataFilter())

logger = logging.getLogger("security")
logger.addHandler(handler)
logger.propagate = False

logger.warning("User submitted PASSWORD=secret") # Dropped!
logger.warning("Normal operation OK")            # Allowed!

lines = stream.getvalue().strip().splitlines()
print("Allowed lines count:", len(lines))
print("Captured line:", lines[0])`,
    stdoutExpected: 'Allowed lines count: 1\nCaptured line: Normal operation OK',
    explanationTitle: 'Custom Filter Subclasses',
    explanationText:
      'A custom filter subclasses logging.Filter and implements filter(record). If filter() returns False (or 0), the record is discarded without being emitted. If it returns True, processing continues. Filters can also mutate the record attributes in-place to redact sensitive data.',
    complexityInfo: 'PCPP 5.4 Advanced record filtering and redaction',
  },
  {
    id: 'pcpp-s5-fc-080',
    track: 'pcpp',
    cardType: 'PCPP 5.4 • Logging Architecture',
    topic: 'Attaching filters to Loggers versus Handlers',
    category: 'T5: Data Persistence',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'What is the architectural difference between attaching a filter to a Logger versus attaching it to a Handler?',
    codeSnippet: `import logging

# Architectural distinction:
# 1. Attached to a LOGGER (logger.addFilter(f)):
#    - Filter runs BEFORE records are passed to any attached handlers.
#    - Filter runs BEFORE records are propagated to parent loggers!
#    - If dropped by logger filter, no handler or ancestor ever sees it.

# 2. Attached to a HANDLER (handler.addFilter(f)):
#    - Filter runs ONLY for that specific handler's output pipeline.
#    - Other handlers on the same logger still receive the record!
#    - Ancestor loggers still receive propagated records!

print("Logger filter = global gatekeeper; Handler filter = destination-specific gatekeeper")`,
    stdoutExpected: 'Logger filter = global gatekeeper; Handler filter = destination-specific gatekeeper',
    explanationTitle: 'Logger Filters vs Handler Filters',
    explanationText:
      'Filters attached to loggers consult filter() before dispatching to handlers and before propagation. If rejected at the logger level, the event is completely dropped. Filters attached to handlers only filter events destined for that specific output target.',
    complexityInfo: 'PCPP 5.4 Filter placement topology',
  },

  // =========================================================================
  // CHAPTER 5.5: CONFIGURING LOG LEVELS, ROTATION & ENTERPRISE LOGGING (Cards 81 to 100)
  // =========================================================================
  {
    id: 'pcpp-s5-fc-081',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'Size-based file rotation with RotatingFileHandler',
    category: 'T5: Persistence & Logging',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How does logging.handlers.RotatingFileHandler manage disk space using maxBytes and backupCount?',
    codeSnippet: `from logging.handlers import RotatingFileHandler
import os

# RotatingFileHandler(filename, mode='a', maxBytes=0, backupCount=0)
# - maxBytes: Max file size in bytes before rotating (rollover occurs when next write exceeds maxBytes)
# - backupCount: Number of historical backup files to retain

# Rotation scheme:
# app.log (current active file)
# app.log.1 (previous log)
# app.log.2 (older log)
# ... up to app.log.backupCount. Oldest file beyond backupCount is deleted!

print("RotatingFileHandler manages size threshold and historical backups")`,
    stdoutExpected: 'RotatingFileHandler manages size threshold and historical backups',
    explanationTitle: 'RotatingFileHandler',
    explanationText:
      'RotatingFileHandler in logging.handlers rotates log files when the current file reaches maxBytes. It renames the current file to file.1, file.1 to file.2, etc., keeping at most backupCount archive files and preventing log files from consuming infinite disk space.',
    complexityInfo: 'PCPP 5.5 Size-based file rotation',
  },
  {
    id: 'pcpp-s5-fc-082',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'Time-based rotation with TimedRotatingFileHandler',
    category: 'T5: Persistence & Logging',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'What parameters control time-based log rollover in TimedRotatingFileHandler (e.g. daily, midnight)?',
    codeSnippet: `from logging.handlers import TimedRotatingFileHandler

# TimedRotatingFileHandler(filename, when='h', interval=1, backupCount=0)
# Valid values for 'when':
# 'S' : Seconds
# 'M' : Minutes
# 'H' : Hours
# 'D' : Days
# 'midnight' : Roll over at midnight
# 'W0'-'W6'  : Specific day of the week (W0 = Monday)

handler = TimedRotatingFileHandler(
    filename="service.log",
    when="midnight",
    interval=1,
    backupCount=30, # Keep 30 days of logs
    delay=True
)
print("Configured 'midnight' daily rotation with 30-day retention")`,
    stdoutExpected: "Configured 'midnight' daily rotation with 30-day retention",
    explanationTitle: 'TimedRotatingFileHandler',
    explanationText:
      'TimedRotatingFileHandler rotates log files at periodic intervals specified by when ("S", "M", "H", "D", "midnight", "W0"-"W6") and interval. Rotated files are suffixed with a date/time stamp.',
    complexityInfo: 'PCPP 5.5 Time-based log archiving',
  },
  {
    id: 'pcpp-s5-fc-083',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'Dictionary-based configuration with logging.config.dictConfig()',
    category: 'T5: Persistence & Logging',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'Why is dictConfig() the modern standard for configuring logging, and what is its top-level schema?',
    codeSnippet: `import logging.config

# dictConfig schema requires 'version': 1
LOGGING_CONFIG = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "standard": {
            "format": "%(asctime)s [%(levelname)s] %(name)s: %(message)s"
        }
    },
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "level": "INFO",
            "formatter": "standard",
            "stream": "ext://sys.stdout"
        }
    },
    "root": {
        "level": "INFO",
        "handlers": ["console"]
    }
}

logging.config.dictConfig(LOGGING_CONFIG)
print("Configured via dictConfig version 1")`,
    stdoutExpected: 'Configured via dictConfig version 1',
    explanationTitle: 'logging.config.dictConfig()',
    explanationText:
      'dictConfig() provides a declarative, structured dictionary specification for formatters, filters, handlers, and loggers. The dictionary must include the key "version": 1. Configuration can be easily loaded from JSON or YAML files.',
    complexityInfo: 'PCPP 5.5 Declarative dictConfig architecture',
  },
  {
    id: 'pcpp-s5-fc-084',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'INI file-based configuration with logging.config.fileConfig()',
    category: 'T5: Persistence & Logging',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How do you load logging settings from an INI file using logging.config.fileConfig()?',
    codeSnippet: `# logging.ini format:
# [loggers]
# keys=root,app
#
# [handlers]
# keys=consoleHandler
#
# [formatters]
# keys=simpleFormatter
#
# [logger_root]
# level=DEBUG
# handlers=consoleHandler

import logging.config
# Usage:
# logging.config.fileConfig('logging.ini', disable_existing_loggers=False)

print("fileConfig reads classic INI config sections [loggers], [handlers], [formatters]")`,
    stdoutExpected: 'fileConfig reads classic INI config sections [loggers], [handlers], [formatters]',
    explanationTitle: 'logging.config.fileConfig()',
    explanationText:
      'fileConfig(fname, defaults=None, disable_existing_loggers=True) parses a configparser-format INI file containing mandatory sections: [loggers], [handlers], [formatters], and their respective configuration blocks.',
    complexityInfo: 'PCPP 5.5 INI file configuration parsing',
  },
  {
    id: 'pcpp-s5-fc-085',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'The disable_existing_loggers trap in dictConfig and fileConfig',
    category: 'T5: Persistence & Logging',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'CRITICAL TRAP: Why does calling dictConfig() or fileConfig() often silence third-party library loggers unexpectedly?',
    codeSnippet: `import logging
import logging.config

# In dictConfig and fileConfig:
# disable_existing_loggers defaults to TRUE!
# When True, ANY logger created BEFORE the config call is SILENCED/DISABLED!

pre_existing = logging.getLogger("requests")

config = {
    "version": 1,
    "disable_existing_loggers": True, # THE TRAP!
    "root": {"level": "INFO"}
}
logging.config.dictConfig(config)
print("Pre-existing logger disabled:", pre_existing.disabled)

# BEST PRACTICE: ALWAYS set "disable_existing_loggers": False!`,
    stdoutExpected: 'Pre-existing logger disabled: True',
    explanationTitle: 'disable_existing_loggers Trap',
    explanationText:
      'Both fileConfig and dictConfig have disable_existing_loggers=True by default for backwards compatibility with Python 2. This disables all loggers that were instantiated prior to configuration, silencing libraries like requests or sqlalchemy. Always set disable_existing_loggers=False.',
    complexityInfo: 'Critical exam trap: disable_existing_loggers defaults to True',
  },
  {
    id: 'pcpp-s5-fc-086',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'Logging performance: lazy string formatting (%s) vs. eager f-strings',
    category: 'T5: Persistence & Logging',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.4',
    section: 'Section 5',
    question: 'Why is logger.debug("User %s calculated %s", user, val) much faster than logger.debug(f"User {user} calculated {val}")?',
    codeSnippet: `# Consider a disabled DEBUG level in production:
# 1. EAGER EVALUATION (f-string):
#    logger.debug(f"Computed matrix: {heavy_calculation()}")
#    -> heavy_calculation() runs and formats the string REGARDLESS of level,
#       even if DEBUG is disabled and nothing is ever logged!

# 2. LAZY EVALUATION (logging positional arguments):
#    logger.debug("Computed matrix: %s", heavy_result)
#    -> The logging module checks: isEnabledFor(DEBUG)?
#    -> If FALSE: returns immediately without formatting the string!

import logging
print("Lazy formatting skips string interpolation when level threshold is not met")`,
    stdoutExpected: 'Lazy formatting skips string interpolation when level threshold is not met',
    explanationTitle: 'Lazy vs. Eager Log Formatting',
    explanationText:
      'Logging methods accept *args for string formatting (e.g. logger.info("val: %s", x)). String interpolation is deferred until the logger determines the message level meets the threshold. Using f-strings or str.format() incurs performance overhead even for dropped messages.',
    complexityInfo: 'PCPP 5.4 Performance optimization in logging',
  },
  {
    id: 'pcpp-s5-fc-087',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'Global logging disabling with logging.disable()',
    category: 'T5: Persistence & Logging',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How do you globally silence all logging output across the entire Python process regardless of logger settings?',
    codeSnippet: `import logging
import io

stream = io.StringIO()
logger = logging.getLogger("demo")
logger.setLevel(logging.DEBUG)
logger.addHandler(logging.StreamHandler(stream))

# logging.disable(lvl): Silences all log events at or below lvl globally!
logging.disable(logging.CRITICAL) # Mutes ALL standard log events!

logger.critical("This critical error will NOT be emitted")
print("Stream content after global disable:", repr(stream.getvalue()))

# To re-enable logging, call with NOTSET:
logging.disable(logging.NOTSET)
logger.critical("Emitted after re-enabling")
print("Emitted:", "Emitted after re-enabling" in stream.getvalue())`,
    stdoutExpected: "Stream content after global disable: ''\nEmitted: True",
    explanationTitle: 'logging.disable() Global Override',
    explanationText:
      'logging.disable(level) overrides level thresholds across all loggers process-wide. Any log record with a level equal to or below level is immediately discarded. Calling logging.disable(logging.NOTSET) restores normal logger-level evaluation.',
    complexityInfo: 'PCPP 5.5 Global logging suppression',
  },
  {
    id: 'pcpp-s5-fc-088',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'Thread safety of the logging module',
    category: 'T5: Persistence & Logging',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'Is the logging module thread-safe, and how does it prevent interleaved output in multithreaded applications?',
    codeSnippet: `import logging

# Thread Safety in logging:
# 1. The logging module is designed to be completely thread-safe.
# 2. Handlers use threading.RLock instances (handler.lock) internally:
#    - acquire() is called before formatting and emitting records.
#    - release() is called afterwards.
# 3. Multiple threads can call logger.info() simultaneously without corrupting file streams or interlacing lines.

h = logging.StreamHandler()
print("Handler has internal lock:", hasattr(h, "lock"))`,
    stdoutExpected: 'Handler has internal lock: True',
    explanationTitle: 'Logging Thread Safety',
    explanationText:
      'The Python logging module is thread-safe without requiring application-level locking. Each Handler acquires a threading.RLock before formatting and emitting LogRecords, ensuring atomic log line writes even with high concurrency.',
    complexityInfo: 'PCPP 5.5 Concurrency guarantees in logging',
  },
  {
    id: 'pcpp-s5-fc-089',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'Structured JSON logging with custom Formatter',
    category: 'T5: Persistence & Logging',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How do you create a structured JSON logging Formatter for modern cloud logging platforms?',
    codeSnippet: `import logging
import json
import io

class JSONFormatter(logging.Formatter):
    def format(self, record):
        log_obj = {
            "timestamp": self.formatTime(record, self.datefmt),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
        }
        if record.exc_info:
            log_obj["exception"] = self.formatException(record.exc_info)
        return json.dumps(log_obj)

stream = io.StringIO()
handler = logging.StreamHandler(stream)
handler.setFormatter(JSONFormatter())

logger = logging.getLogger("api")
logger.addHandler(handler)
logger.propagate = False
logger.info("Order processed")

parsed = json.loads(stream.getvalue().strip())
print("JSON log level:", parsed["level"])
print("JSON log message:", parsed["message"])`,
    stdoutExpected: 'JSON log level: INFO\nJSON log message: Order processed',
    explanationTitle: 'Structured JSON Logging',
    explanationText:
      'In microservices and cloud environments, logs are collected in structured formats. Subclassing logging.Formatter and overriding format(record) to return json.dumps(dict) provides machine-parseable log events compatible with Elasticsearch, Datadog, and CloudWatch.',
    complexityInfo: 'PCPP 5.5 Enterprise structured logging architecture',
  },
  {
    id: 'pcpp-s5-fc-090',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'Defining custom log levels with logging.addLevelName()',
    category: 'T5: Persistence & Logging',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How do you register a custom numeric log level (e.g. TRACE = 5 or AUDIT = 45)?',
    codeSnippet: `import logging

# Defining a custom level between INFO (20) and WARNING (30):
SUCCESS_LEVEL = 25
logging.addLevelName(SUCCESS_LEVEL, "SUCCESS")

def log_success(logger, message, *args, **kwargs):
    if logger.isEnabledFor(SUCCESS_LEVEL):
        logger._log(SUCCESS_LEVEL, message, args, **kwargs)

# Verify level registration:
print("Level name for 25:", logging.getLevelName(25))
print("Numeric level for 'SUCCESS':", logging.getLevelName("SUCCESS"))`,
    stdoutExpected: 'Level name for 25: SUCCESS\nNumeric level for \'SUCCESS\': 25',
    explanationTitle: 'logging.addLevelName()',
    explanationText:
      'logging.addLevelName(levelNum, levelName) associates a custom integer severity with a string name. logging.getLevelName() works bidirectionally: passing an int returns the string name; passing a string returns the integer level.',
    complexityInfo: 'PCPP 5.5 Custom severity level definition',
  },
  {
    id: 'pcpp-s5-fc-091',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'NullHandler for library development',
    category: 'T5: Persistence & Logging',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'Why should library developers always attach logging.NullHandler() to top-level library loggers?',
    codeSnippet: `import logging

# In library code (e.g. my_library/__init__.py):
# logger = logging.getLogger(__name__)
# logger.addHandler(logging.NullHandler())

# WHY:
# 1. Prevents "No handler was found for logger X" warning messages if the consuming application does not configure logging.
# 2. Does NOT output messages to sys.stderr by default.
# 3. Leaves all handler and formatting decisions to the end application developer!

nh = logging.NullHandler()
print("NullHandler is instance of Handler:", isinstance(nh, logging.Handler))`,
    stdoutExpected: 'NullHandler is instance of Handler: True',
    explanationTitle: 'logging.NullHandler() in Libraries',
    explanationText:
      'Python documentation strongly recommends that library authors attach logging.NullHandler() to the top-level package logger. This acts as a no-op handler, silencing unconfigured handler warnings for consumers while allowing applications to add real handlers when desired.',
    complexityInfo: 'PCPP 5.5 Reusable library logging pattern',
  },
  {
    id: 'pcpp-s5-fc-092',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'MemoryHandler: in-memory buffering and flushing',
    category: 'T5: Persistence & Logging',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'What is the role of logging.handlers.MemoryHandler, and when does it flush records to its target handler?',
    codeSnippet: `from logging.handlers import MemoryHandler
import logging
import io

stream = io.StringIO()
target_handler = logging.StreamHandler(stream)

# MemoryHandler buffers records in memory (capacity=5).
# Flushes buffer to target_handler when:
# 1. A record with level >= flushLevel (e.g. ERROR) arrives.
# 2. Buffer capacity is exceeded.
# 3. Explicit handler.flush() is called.
mem_handler = MemoryHandler(capacity=10, flushLevel=logging.ERROR, target=target_handler)

logger = logging.getLogger("buffered")
logger.addHandler(mem_handler)
logger.setLevel(logging.DEBUG)
logger.propagate = False

logger.info("Normal setup info")   # Buffered in RAM
print("Stream before error:", repr(stream.getvalue()))

logger.error("Crash event!")       # Triggers automatic flush of buffer!
print("Stream contains info line:", "Normal setup info" in stream.getvalue())`,
    stdoutExpected: "Stream before error: ''\nStream contains info line: True",
    explanationTitle: 'MemoryHandler Buffering',
    explanationText:
      'MemoryHandler buffers records in an in-memory deque. When an event at or above flushLevel occurs (or capacity is reached), it flushes all buffered records to a target handler. This allows debug trails to be logged only when an error actually occurs.',
    complexityInfo: 'PCPP 5.5 In-memory buffer flush pattern',
  },
  {
    id: 'pcpp-s5-fc-093',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'SMTPHandler for email notifications',
    category: 'T5: Persistence & Logging',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How does logging.handlers.SMTPHandler send alert emails upon CRITICAL errors?',
    codeSnippet: `from logging.handlers import SMTPHandler

# SMTPHandler(mailhost, fromaddr, toaddrs, subject, credentials=None, secure=None)
# Connects to an SMTP server and emails formatted log records (typically setLevel(CRITICAL))

# handler = SMTPHandler(
#     mailhost=("smtp.example.com", 587),
#     fromaddr="alerts@example.com",
#     toaddrs=["oncall@example.com"],
#     subject="Production Error Alert",
#     credentials=("user", "password"),
#     secure=() # Enables TLS
# )
# handler.setLevel(logging.CRITICAL)

print("SMTPHandler dispatches emails for high-severity log events")`,
    stdoutExpected: 'SMTPHandler dispatches emails for high-severity log events',
    explanationTitle: 'SMTPHandler Email Alerts',
    explanationText:
      'SMTPHandler sends formatted log records to designated email addresses via SMTP. In production, it is typically filtered to CRITICAL levels so engineers receive immediate email alerts when catastrophic unhandled failures occur.',
    complexityInfo: 'PCPP 5.5 Critical alert dispatch via SMTP',
  },
  {
    id: 'pcpp-s5-fc-094',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'SysLogHandler for UNIX system logging',
    category: 'T5: Persistence & Logging',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How do you send logs to the local UNIX syslog daemon using logging.handlers.SysLogHandler?',
    codeSnippet: `from logging.handlers import SysLogHandler
import os

# SysLogHandler(address=('localhost', 514), facility=LOG_USER, socktype=socket.SOCK_DGRAM)
# On Linux/macOS, can point to local domain socket:
# address='/dev/log' (Linux) or '/var/run/syslog' (macOS)

print("SysLogHandler connects to syslog daemon over UDP, TCP, or UNIX domain socket")`,
    stdoutExpected: 'SysLogHandler connects to syslog daemon over UDP, TCP, or UNIX domain socket',
    explanationTitle: 'SysLogHandler Integration',
    explanationText:
      'SysLogHandler dispatches log messages to standard UNIX syslog services (rsyslog, syslog-ng, journald). It maps Python log levels to syslog priority levels and supports standard syslog facilities (LOG_USER, LOG_DAEMON, LOG_LOCAL0-7).',
    complexityInfo: 'PCPP 5.5 OS-level syslog integration',
  },
  {
    id: 'pcpp-s5-fc-095',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'SocketHandler for remote TCP log shipping',
    category: 'T5: Persistence & Logging',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How does SocketHandler serialize and transmit LogRecords across a network to a central log server?',
    codeSnippet: `from logging.handlers import SocketHandler

# SocketHandler(host, port)
# 1. Establishes a TCP connection to a centralized receiver server.
# 2. Pickles each LogRecord and prefixes it with a 4-byte big-endian length prefix.
# 3. Transmits the binary frame over the TCP stream without blocking application execution.

print("SocketHandler transmits pickled LogRecords over TCP with 4-byte length prefix")`,
    stdoutExpected: 'SocketHandler transmits pickled LogRecords over TCP with 4-byte length prefix',
    explanationTitle: 'SocketHandler Remote Transmission',
    explanationText:
      'SocketHandler transmits log records over a TCP socket to a network receiver. It converts each LogRecord into a pickled byte stream prefixed with a 4-byte packet length. The receiver unpickles the record for centralized storage.',
    complexityInfo: 'PCPP 5.5 Distributed network logging',
  },
  {
    id: 'pcpp-s5-fc-096',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'Persistence comparison: SQLite vs XML vs CSV vs Logging',
    category: 'T5: Persistence & Logging',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'When should an enterprise Python system select SQLite vs XML vs CSV vs Logging?',
    codeSnippet: `# Tradeoff Matrix:
# 1. SQLite: Relational queries, ACID transactions, primary keys, indexing, multi-table joins.
# 2. XML (ElementTree): Hierarchical nested data, strict schemas/DTDs, legacy enterprise interchange.
# 3. CSV: Flat tabular data, spreadsheet interoperability, high-speed data science imports/exports.
# 4. Logging: Append-only event history, auditing, diagnostics, multiple destination dispatching.

print("Selection: Relational (SQLite) | Hierarchical (XML) | Tabular (CSV) | Telemetry (Logging)")`,
    stdoutExpected: 'Selection: Relational (SQLite) | Hierarchical (XML) | Tabular (CSV) | Telemetry (Logging)',
    explanationTitle: 'Persistence Formats Comparison',
    explanationText:
      'PCPP-32-10x tests holistic understanding of data persistence: SQLite for relational ACID state; XML for deeply nested trees with attributes; CSV for lightweight tabular exchange; and Logging for time-ordered, level-categorized event auditing.',
    complexityInfo: 'PCPP Section 5 Architectural synthesis',
  },
  {
    id: 'pcpp-s5-fc-097',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Atomic transactions with rollback in sqlite3 during batch operations',
    category: 'T5: Data Persistence',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How do you guarantee that a multi-step database update is completely atomic using try/except/rollback?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE inventory (item TEXT PRIMARY KEY, qty INT)")
cur.execute("INSERT INTO inventory VALUES ('CPU', 10)")
conn.commit()

# Atomic transfer:
try:
    with conn: # Manages transaction commit/rollback automatically!
        cur.execute("UPDATE inventory SET qty = qty - 5 WHERE item = 'CPU'")
        # Simulate an intentional failure mid-transaction:
        raise RuntimeError("Network failure mid-transfer")
except RuntimeError:
    pass

cur.execute("SELECT qty FROM inventory WHERE item = 'CPU'")
print("Quantity after failed transaction rollback:", cur.fetchone()[0])`,
    stdoutExpected: 'Quantity after failed transaction rollback: 10',
    explanationTitle: 'Atomic SQLite Transactions',
    explanationText:
      'Using "with conn:" provides atomic transaction boundaries. If any step fails with an unhandled exception before exiting the with block, the transaction is automatically rolled back, preserving database integrity.',
    complexityInfo: 'PCPP 5.1 Transactional atomicity pattern',
  },
  {
    id: 'pcpp-s5-fc-098',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'ElementTree XPath limitations compared to full XPath 1.0/2.0',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What advanced XPath features are NOT supported by standard xml.etree.ElementTree?',
    codeSnippet: `# ElementTree XPath Limitations:
# Unsupported in standard xml.etree.ElementTree:
# 1. No XPath functions (e.g. text(), count(), string-length(), position()).
# 2. No boolean logic inside predicates (e.g. [@a and @b]).
# 3. No axis selectors (e.g. ancestor::, following-sibling::, preceding::).
# 4. No numeric comparison predicates (e.g. [price > 50]). Only exact string matches [@attr='val'].

# For full XPath 1.0/2.0 support, use the third-party 'lxml' package!
print("ElementTree supports a small subset of XPath: tags, wildcards, and simple attribute equality")`,
    stdoutExpected: 'ElementTree supports a small subset of XPath: tags, wildcards, and simple attribute equality',
    explanationTitle: 'ElementTree XPath Limitations',
    explanationText:
      'Standard ElementTree deliberately implements only a minimal subset of XPath to remain compact. It lacks XPath functions, sibling axes, and relational comparisons. For full XPath 1.0 or 2.0 capabilities, applications should use lxml.',
    complexityInfo: 'PCPP 5.2 ElementTree specification scope',
  },
  {
    id: 'pcpp-s5-fc-099',
    track: 'pcpp',
    cardType: 'PCPP 5.3 • CSV File Processing',
    topic: 'CSV delimiter sniffing edge cases with quotes and escaped characters',
    category: 'T5: Data Persistence',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.3',
    section: 'Section 5',
    question: 'What are the edge cases where csv.Sniffer() can fail, and how should robust code handle them?',
    codeSnippet: `import csv

# Sniffer failure scenarios:
# 1. Very short sample (< 1-2 lines) lacks sufficient frequency distribution.
# 2. Inconsistent delimiters across lines.
# 3. Complex quoted fields containing more candidate delimiters than the actual column separator.

sample = "1;data"
try:
    dialect = csv.Sniffer().sniff(sample)
    print("Sniffed delimiter:", repr(dialect.delimiter))
except csv.Error as e:
    print("Sniffer fallback required:", type(e).__name__)

# BEST PRACTICE: Always provide a fallback default dialect (e.g. 'excel')!`,
    stdoutExpected: "Sniffed delimiter: ';'",
    explanationTitle: 'csv.Sniffer Edge Cases & Fallback',
    explanationText:
      'csv.Sniffer().sniff() uses heuristic statistical analysis of delimiter frequencies. If a sample is too brief or ambiguous, it raises csv.Error. Production code should wrap sniff() in a try/except block with a known default dialect fallback.',
    complexityInfo: 'PCPP 5.3 Heuristic sniffing resilience',
  },
  {
    id: 'pcpp-s5-fc-100',
    track: 'pcpp',
    cardType: 'PCPP 5.5 • Log Handlers & Config',
    topic: 'End-to-End Enterprise Data Processing & Logging Architecture',
    category: 'T5: Persistence & Logging',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.5',
    section: 'Section 5',
    question: 'How do professional Python applications combine SQLite persistence, CSV/XML ingestion, and structured logging in a clean architecture?',
    codeSnippet: `import sqlite3
import csv
import xml.etree.ElementTree as ET
import logging
import io

# 1. Setup Logging
log_stream = io.StringIO()
handler = logging.StreamHandler(log_stream)
handler.setFormatter(logging.Formatter("%(asctime)s [%(levelname)s] %(message)s"))
logger = logging.getLogger("pipeline")
logger.addHandler(handler)
logger.setLevel(logging.INFO)
logger.propagate = False

# 2. Ingest CSV Data
csv_data = "sku,qty\\nWIDGET-1,50\\nGADGET-2,120"
records = []
for row in csv.DictReader(io.StringIO(csv_data)):
    records.append((row["sku"], int(row["qty"])))
logger.info("CSV parsed: %d records", len(records))

# 3. Persist to SQLite
conn = sqlite3.connect(":memory:")
with conn:
    conn.execute("CREATE TABLE inventory (sku TEXT PRIMARY KEY, qty INT)")
    conn.executemany("INSERT INTO inventory VALUES (?, ?)", records)
logger.info("SQLite table populated successfully")

# 4. Export to XML
root = ET.Element("inventory")
cur = conn.cursor()
for row in cur.execute("SELECT sku, qty FROM inventory"):
    item = ET.SubElement(root, "item", {"sku": row[0]})
    item.text = str(row[1])

xml_output = ET.tostring(root, encoding="unicode")
logger.info("XML generated: %s", xml_output)

print("Pipeline executed with zero errors!")`,
    stdoutExpected: 'Pipeline executed with zero errors!',
    explanationTitle: 'Enterprise Data Processing Architecture',
    explanationText:
      'This complete pipeline demonstrates Section 5 mastery: receiving flat CSV feeds, transforming and storing them into an ACID-compliant SQLite database, serializing state into a hierarchical XML structure, and instrumenting all operations with structured logging.',
    complexityInfo: 'PCPP-32-10x Section 5 capstone architecture',
  },
];
