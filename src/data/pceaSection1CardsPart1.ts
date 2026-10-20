import { Flashcard } from '../types';

export const pceaSection1CardsPart1: Flashcard[] = [
  {
    id: "pcea-1-001",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Automation Concepts",
    difficulty: "Beginner",
    question: "Which of the following tasks is the best candidate for automation with Python?",
    codeSnippet: "# Evaluating candidates for automation:\ntask_a = 'Rename and archive 500 daily log files'\ntask_b = 'Design a new creative marketing logo'\ntask_c = 'Negotiate contract terms with an external vendor'",
    options: [
      "Designing a brand new creative marketing logo",
      "Renaming and archiving 500 daily log files",
      "Negotiating contract terms with an enterprise client",
      "Conducting an in-person candidate job interview"
    ],
    correctAnswer: 1,
    explanation: "Repetitive, deterministic, rule-based, and high-frequency tasks (such as batch renaming and archiving files) are ideal candidates for software automation.",
    officialRef: "PCEA-30-01 Block 1.1 - Automation Concepts",
    tags: ["automation-concepts", "task-selection", "roi"]
  },
  {
    id: "pcea-1-002",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Automation ROI",
    difficulty: "Intermediate",
    question: "How is the net return on investment (ROI) or time payoff of automating a recurring task fundamentally calculated?",
    codeSnippet: "# Automation ROI formula:\n# Net Time Saved = (Time per manual task * Frequency * Horizon) - (Dev Time + Maintenance Time)",
    options: [
      "(Time per task / Frequency) + Development Time",
      "(Manual task duration * Occurrences) - (Development time + Maintenance time)",
      "Total lines of automation Python code / Execution seconds",
      "Number of CPU cores * Frequency of cron execution"
    ],
    correctAnswer: 1,
    explanation: "Automation payoff evaluates the total cumulative time saved across all future executions minus the initial scripting and ongoing maintenance overhead.",
    officialRef: "PCEA-30-01 Block 1.1 - Automation ROI",
    tags: ["roi", "time-savings", "planning"]
  },
  {
    id: "pcea-1-003",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Idempotency",
    difficulty: "Intermediate",
    question: "What is the definition of an 'idempotent' automation script?",
    codeSnippet: "import os\n\ndef ensure_directory(path):\n    # Running this once or ten times produces the exact same outcome\n    os.makedirs(path, exist_ok=True)",
    options: [
      "A script that runs faster on each subsequent execution",
      "A script that can be executed multiple times without changing the result beyond the initial application",
      "A script that runs strictly in parallel across all CPU cores",
      "A script that automatically deletes itself after completion"
    ],
    correctAnswer: 1,
    explanation: "An operation is idempotent if executing it multiple times leaves the system in the exact same state as running it once. Using exist_ok=True on os.makedirs is a classic idempotent pattern.",
    officialRef: "PCEA-30-01 Block 1.1 - Idempotency",
    tags: ["idempotency", "reliability", "best-practices"]
  },
  {
    id: "pcea-1-004",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Idempotency",
    difficulty: "Intermediate",
    question: "Why is `path.mkdir(exist_ok=True)` preferred over `path.mkdir()` without parameters in an automation workflow?",
    codeSnippet: "from pathlib import Path\n\nbackup_dir = Path('/backups/daily')\nbackup_dir.mkdir(exist_ok=True)",
    options: [
      "It automatically compresses the created directory",
      "It prevents FileExistsError when the directory already exists, maintaining idempotency",
      "It encrypts the directory contents with AES-256",
      "It changes directory permissions to 777 automatically"
    ],
    correctAnswer: 1,
    explanation: "Without exist_ok=True, mkdir raises FileExistsError if the target folder exists. With exist_ok=True, repeated script runs succeed idempotently without error.",
    officialRef: "PCEA-30-01 Block 1.1 - Idempotency",
    tags: ["pathlib", "idempotency", "exceptions"]
  },
  {
    id: "pcea-1-005",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Atomic Operations",
    difficulty: "Advanced",
    question: "In automation, what does 'atomicity' mean when modifying a critical configuration or database file?",
    codeSnippet: "# Writing to a temp file and atomically replacing the target:\nimport os, tempfile\n\nwith tempfile.NamedTemporaryFile('w', delete=False, dir='.') as tmp:\n    tmp.write('new_config=True')\n    temp_name = tmp.name\nos.replace(temp_name, 'config.ini')",
    options: [
      "The file modification completely succeeds or completely fails, leaving no corrupt partial state",
      "The file is compressed using atomic physics simulation",
      "The file is executed in multi-threaded asynchronous mode",
      "The file can only be read by the root superuser"
    ],
    correctAnswer: 0,
    explanation: "Atomic operations guarantee that an action is treated as a single indivisible unit: either all changes apply, or none do. Using os.replace with a temporary file prevents partial/corrupt configuration writes during unexpected crashes.",
    officialRef: "PCEA-30-01 Block 1.1 - Atomic Operations",
    tags: ["atomicity", "data-integrity", "tempfile"]
  },
  {
    id: "pcea-1-006",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Dry-Run Mode",
    difficulty: "Beginner",
    question: "What is the purpose of implementing a `--dry-run` or `--simulate` flag in an automation script?",
    codeSnippet: "def delete_old_logs(dry_run=False):\n    for log in ['app.log.1', 'app.log.2']:\n        if dry_run:\n            print(f'[DRY-RUN] Would delete: {log}')\n        else:\n            # os.remove(log)\n            pass",
    options: [
      "To benchmark script CPU and RAM consumption",
      "To preview what destructive actions the script would perform without actually executing them",
      "To execute the script twice as fast",
      "To bypass file permission security checks"
    ],
    correctAnswer: 1,
    explanation: "A dry-run mode simulates script actions and prints planned modifications, enabling safe verification before applying actual destructive changes.",
    officialRef: "PCEA-30-01 Block 1.1 - Safe Automation",
    tags: ["dry-run", "safety", "simulation"]
  },
  {
    id: "pcea-1-007",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Error Guardrails",
    difficulty: "Intermediate",
    question: "What is a common safety guardrail when automating bulk destructive operations like deleting files or terminating instances?",
    codeSnippet: "# Safety threshold guardrail\nMAX_DELETIONS_ALLOWED = 50\n\ndef prune_records(records_to_delete):\n    if len(records_to_delete) > MAX_DELETIONS_ALLOWED:\n        raise RuntimeError(f'Safety abort: {len(records_to_delete)} exceeds threshold!')",
    options: [
      "Never writing log messages to prevent disk full errors",
      "Implementing sanity-check thresholds to abort if an abnormally high number of deletions is detected",
      "Disabling all try-except blocks so Python immediately panics",
      "Hardcoding the admin password into the script"
    ],
    correctAnswer: 1,
    explanation: "Sanity thresholds and confirmation checks prevent catastrophic unintended mass deletions caused by upstream query bugs or bad regular expressions.",
    officialRef: "PCEA-30-01 Block 1.1 - Safety Guardrails",
    tags: ["guardrails", "defensive-coding", "safety"]
  },
  {
    id: "pcea-1-008",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Determinism",
    difficulty: "Intermediate",
    question: "Why is determinism crucial in unattended batch automation pipelines?",
    codeSnippet: "# Predictable input to output mapping:\ndef process_batch(items):\n    # Sorting guarantees identical processing order across runs\n    for item in sorted(items):\n        execute_step(item)",
    options: [
      "Determinism ensures identical inputs produce predictable, repeatable outcomes every time",
      "Determinism allows random values to be generated during database migrations",
      "Determinism forces Python to execute exclusively in C compiled mode",
      "Determinism bypasses Python's Global Interpreter Lock (GIL)"
    ],
    correctAnswer: 0,
    explanation: "Deterministic scripts guarantee reproducibility and eliminate race conditions or order-dependent inconsistencies in automated batch pipelines.",
    officialRef: "PCEA-30-01 Block 1.1 - Determinism",
    tags: ["determinism", "reproducibility", "pipeline"]
  },
  {
    id: "pcea-1-009",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Unattended Execution",
    difficulty: "Beginner",
    question: "Why should interactive `input()` calls generally be avoided in unattended automation scripts?",
    codeSnippet: "# Problematic in headless cron/daemon environments:\n# answer = input('Do you wish to proceed? (y/n): ')",
    options: [
      "input() causes a syntax error when imported by other modules",
      "input() hangs indefinitely waiting for human console input when running in headless background tasks",
      "input() always converts integers into floating-point numbers",
      "input() automatically restarts the operating system"
    ],
    correctAnswer: 1,
    explanation: "In scheduled cron jobs or CI/CD pipelines, there is no interactive TTY attached. An input() prompt will block execution indefinitely or throw an EOFError.",
    officialRef: "PCEA-30-01 Block 1.1 - Headless Scripting",
    tags: ["input", "headless", "unattended"]
  },
  {
    id: "pcea-1-010",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Automation Architecture",
    difficulty: "Intermediate",
    question: "Which automation pattern decouples data collection from data processing for scalable batch jobs?",
    codeSnippet: "# Producer-consumer queue architecture\n# Step 1: Collect / extract URLs or file paths\n# Step 2: Queue items\n# Step 3: Process items sequentially or with workers",
    options: [
      "Singleton pattern",
      "Producer-Consumer pipeline",
      "Model-View-Controller GUI",
      "Interpreter pattern"
    ],
    correctAnswer: 1,
    explanation: "The Producer-Consumer pattern separates the ingestion of work items from their execution, improving reliability, error isolation, and throughput.",
    officialRef: "PCEA-30-01 Block 1.1 - Automation Architecture",
    tags: ["architecture", "pipelines", "producer-consumer"]
  },
  {
    id: "pcea-1-011",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Pre-Flight Checks",
    difficulty: "Beginner",
    question: "What is the term for verifying prerequisites (such as network access, disk space, and tools) before running a task?",
    codeSnippet: "import shutil\n\ndef check_prerequisites():\n    if not shutil.which('git'):\n        raise SystemExit('Git executable not found!')",
    options: [
      "Post-mortem analysis",
      "Pre-flight checks",
      "Hot patching",
      "Dynamic polymorphism"
    ],
    correctAnswer: 1,
    explanation: "Pre-flight checks validate dependencies, credentials, available disk space, and tools early before performing any irreversible actions.",
    officialRef: "PCEA-30-01 Block 1.1 - Pre-Flight Checks",
    tags: ["preflight", "validation", "prerequisites"]
  },
  {
    id: "pcea-1-012",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Audit Trails",
    difficulty: "Intermediate",
    question: "Why is creating an audit trail essential for enterprise automation scripts?",
    codeSnippet: "# Audit log entry with timestamp and initiator:\n# 2026-10-01 02:40:00 [AUDIT] User: svc_backup | Action: Archived 142 items | Status: SUCCESS",
    options: [
      "It speeds up file compression algorithms",
      "It provides a verifiable chronological record of actions, inputs, and outcomes for compliance and troubleshooting",
      "It prevents Python from creating bytecode .pyc files",
      "It reduces network bandwidth consumption"
    ],
    correctAnswer: 1,
    explanation: "Audit logs record who ran the script, what parameters were passed, which records were touched, and the ultimate result, ensuring traceability and accountability.",
    officialRef: "PCEA-30-01 Block 1.1 - Audit Trails",
    tags: ["audit-trail", "traceability", "logging"]
  },
  {
    id: "pcea-1-013",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Fault Tolerance",
    difficulty: "Intermediate",
    question: "What does 'graceful degradation' mean in an automated reporting script?",
    codeSnippet: "def fetch_report_data():\n    data = get_primary_data()\n    try:\n        data['exchange_rates'] = fetch_live_rates()\n    except Exception:\n        data['exchange_rates'] = 'Unavailable (Cached)'\n    return data",
    options: [
      "The script crashes immediately if any non-essential service fails",
      "The script continues executing core functions even if optional sub-tasks encounter errors",
      "The script downgrades the Python version dynamically",
      "The script slows down execution by 50%"
    ],
    correctAnswer: 1,
    explanation: "Graceful degradation ensures that a non-critical failure (like an external currency rate API) does not bring down the entire automated business process.",
    officialRef: "PCEA-30-01 Block 1.1 - Fault Tolerance",
    tags: ["fault-tolerance", "resilience", "best-practices"]
  },
  {
    id: "pcea-1-014",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Exit Codes Convention",
    difficulty: "Beginner",
    question: "In standard POSIX and Windows automation environments, what does an exit code of `0` indicate?",
    codeSnippet: "import sys\nsys.exit(0)",
    options: [
      "Critical fatal exception",
      "Successful script completion without errors",
      "Script timed out and was killed",
      "Permission denied"
    ],
    correctAnswer: 1,
    explanation: "By international convention in Unix, Linux, and Windows, exit code 0 signifies successful execution, while any non-zero exit code (1-255) indicates failure.",
    officialRef: "PCEA-30-01 Block 1.1 - Exit Codes",
    tags: ["exit-codes", "posix", "sys-exit"]
  },
  {
    id: "pcea-1-015",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Automation Overhead",
    difficulty: "Beginner",
    question: "Which scenario represents a negative ROI for an automation effort?",
    codeSnippet: "# Task: Manual task takes 2 minutes once a year.\n# Automation dev time: 40 hours. Maintenance: 2 hours/year.",
    options: [
      "Automating a 10-minute task that runs 500 times a day",
      "Spending 40 hours automating a 2-minute task performed once per year",
      "Automating nightly backup file integrity verification",
      "Automating hourly employee onboarding status sync"
    ],
    correctAnswer: 1,
    explanation: "If the effort to develop and maintain the automation vastly exceeds the cumulative manual time saved across its lifetime, the automation produces negative ROI.",
    officialRef: "PCEA-30-01 Block 1.1 - Automation ROI",
    tags: ["roi", "cost-benefit", "planning"]
  },
  {
    id: "pcea-1-016",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Rollback Capability",
    difficulty: "Intermediate",
    question: "Why is implementing rollback functionality critical in automated file migration scripts?",
    codeSnippet: "# Moving files with rollback capability\n# If step 4 fails, restore all moved files from backup ledger",
    options: [
      "To revert the system to its initial known-good state if an error occurs midway through migration",
      "To speed up the network transfer rate",
      "To permanently delete old versions of Python",
      "To prevent users from opening the terminal"
    ],
    correctAnswer: 0,
    explanation: "A rollback mechanism restores original files and configurations if a catastrophic error occurs halfway through execution, avoiding corrupted half-migrated states.",
    officialRef: "PCEA-30-01 Block 1.1 - Rollback Mechanisms",
    tags: ["rollback", "reliability", "data-integrity"]
  },
  {
    id: "pcea-1-017",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Script Modularity",
    difficulty: "Beginner",
    question: "Why is breaking an automation script into smaller, focused functions recommended?",
    codeSnippet: "def fetch_data(): ...\ndef parse_data(raw): ...\ndef write_report(parsed): ...\ndef notify_team(): ...",
    options: [
      "Smaller functions run in parallel without threading",
      "It improves readability, testability, reusability, and makes isolated error handling simpler",
      "Python only allows a maximum of 50 lines per function",
      "Functions without arguments consume 0 memory"
    ],
    correctAnswer: 1,
    explanation: "Modular scripting isolates responsibilities into testable, reusable units, making complex automation pipelines significantly easier to maintain and debug.",
    officialRef: "PCEA-30-01 Block 1.1 - Script Modularity",
    tags: ["modularity", "clean-code", "functions"]
  },
  {
    id: "pcea-1-018",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Rate Limiting",
    difficulty: "Intermediate",
    question: "Why should an automated web or API harvesting script include rate limiting (`time.sleep`)?",
    codeSnippet: "import time, requests\n\nfor url in urls:\n    resp = requests.get(url)\n    time.sleep(1.0)  # Rate limiting delay",
    options: [
      "To prevent hitting server request quotas, IP bans, or overwhelming the target service",
      "To allow the Python interpreter to cool down the CPU",
      "Because HTTP requests fail if sent faster than 1 second",
      "To convert HTTP responses into JSON automatically"
    ],
    correctAnswer: 0,
    explanation: "Rate limiting respects the host's capacity, avoids triggering DoS defenses or HTTP 429 Too Many Requests errors, and complies with API terms of service.",
    officialRef: "PCEA-30-01 Block 1.1 - Rate Limiting",
    tags: ["rate-limiting", "politeness", "apis"]
  },
  {
    id: "pcea-1-019",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Environment Isolation",
    difficulty: "Beginner",
    question: "Why is using isolated virtual environments considered a best practice for automation scripts?",
    codeSnippet: "# Activating dedicated project environment\n# .venv/bin/python automation_script.py",
    options: [
      "It prevents dependency conflicts with the system Python installation and guarantees required package versions",
      "It encrypts the Python source code so nobody can edit it",
      "It allows Python to run without an operating system",
      "It increases script execution speed by 10x"
    ],
    correctAnswer: 0,
    explanation: "Virtual environments isolate package dependencies per project, preventing breakages caused by global package updates or mismatched third-party versions.",
    officialRef: "PCEA-30-01 Block 1.1 - Environment Isolation",
    tags: ["venv", "dependencies", "isolation"]
  },
  {
    id: "pcea-1-020",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.1",
    category: "Automation Documentation",
    difficulty: "Beginner",
    question: "What documentation should always accompany an automated operational script?",
    codeSnippet: "\"\"\"\\nScript: backup_db.py\\nPurpose: Automated nightly dump and S3 upload.\\nPrerequisites: AWS_ACCESS_KEY_ID in env, pg_dump installed.\\nExit codes: 0=Success, 1=Dump error, 2=Upload error.\\n\"\"\"",
    options: [
      "The personal biography of the script developer",
      "Clear usage instructions, prerequisite tools/env vars, expected arguments, and exit code meanings",
      "A printout of Python's copyright license",
      "A list of all computer passwords"
    ],
    correctAnswer: 1,
    explanation: "Operational scripts must document prerequisites, configuration requirements, invocation arguments, and exit codes so operators can maintain and troubleshoot them.",
    officialRef: "PCEA-30-01 Block 1.1 - Documentation",
    tags: ["documentation", "maintenance", "operational-readiness"]
  },
  {
    id: "pcea-1-021",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "sys.argv",
    difficulty: "Beginner",
    question: "Given the command line execution `python backup.py --daily /var/data`, what is the value of `sys.argv[0]`?",
    codeSnippet: "import sys\n# Execution: python backup.py --daily /var/data\nprint(sys.argv[0])",
    options: [
      "'python'",
      "'backup.py'",
      "'--daily'",
      "'/var/data'"
    ],
    correctAnswer: 1,
    explanation: "sys.argv[0] always represents the name or path of the executed Python script itself. User arguments begin at index 1.",
    officialRef: "PCEA-30-01 Block 1.2 - sys.argv",
    tags: ["sys-argv", "cli", "command-line"]
  },
  {
    id: "pcea-1-022",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "sys.argv",
    difficulty: "Beginner",
    question: "What exception is raised if code accesses `sys.argv[1]` when the user executed the script with no arguments?",
    codeSnippet: "import sys\n# Execution: python process.py\nfilename = sys.argv[1]",
    options: [
      "ValueError",
      "KeyError",
      "IndexError",
      "ArgumentError"
    ],
    correctAnswer: 2,
    explanation: "Because sys.argv is a standard Python list containing only ['process.py'] (length 1), accessing index 1 raises an IndexError.",
    officialRef: "PCEA-30-01 Block 1.2 - sys.argv",
    tags: ["sys-argv", "index-error", "exceptions"]
  },
  {
    id: "pcea-1-023",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "sys.argv",
    difficulty: "Intermediate",
    question: "What is the data type of all elements contained in `sys.argv`?",
    codeSnippet: "import sys\n# Execution: python count.py 42 3.14 True\nval = sys.argv[1]",
    options: [
      "int",
      "str",
      "float",
      "object"
    ],
    correctAnswer: 1,
    explanation: "The operating system passes all command line arguments to Python as strings (`str`). Any integers, floats, or booleans must be manually converted.",
    officialRef: "PCEA-30-01 Block 1.2 - sys.argv",
    tags: ["sys-argv", "types", "strings"]
  },
  {
    id: "pcea-1-024",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Beginner",
    question: "Which standard library module is recommended over `sys.argv` for building robust command-line tools?",
    codeSnippet: "import argparse\n\nparser = argparse.ArgumentParser(description='Automated deployment tool')\nparser.add_argument('--env', required=True)\nargs = parser.parse_args()",
    options: [
      "syslog",
      "argparse",
      "subprocess",
      "getopt"
    ],
    correctAnswer: 1,
    explanation: "argparse is the Python standard library's feature-rich CLI parser that automatically handles flags, types, help messages, and argument validation.",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "standard-library", "cli"]
  },
  {
    id: "pcea-1-025",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Beginner",
    question: "In `argparse`, how do you define a positional argument named `target`?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\n# Which line adds a positional argument?",
    options: [
      "parser.add_argument('-target')",
      "parser.add_argument('--target')",
      "parser.add_argument('target')",
      "parser.add_positional('target')"
    ],
    correctAnswer: 2,
    explanation: "Arguments defined without leading dashes (like 'target') are positional arguments, required by default in the order defined.",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "positional-arguments", "cli"]
  },
  {
    id: "pcea-1-026",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Intermediate",
    question: "How do you define a boolean flag `--verbose` that sets `args.verbose` to `True` when specified?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--verbose', action=???)",
    options: [
      "action='store_true'",
      "action='set_boolean'",
      "action='append'",
      "action='true'"
    ],
    correctAnswer: 0,
    explanation: "action='store_true' configures the argument to be False by default and True whenever the flag appears on the command line.",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "flags", "store-true"]
  },
  {
    id: "pcea-1-027",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Intermediate",
    question: "How do you enforce that a command line parameter must be parsed as an integer in `argparse`?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--port', type=???, default=8080)",
    options: [
      "type='integer'",
      "type=int",
      "cast=int",
      "datatype=int"
    ],
    correctAnswer: 1,
    explanation: "The `type=` parameter takes a callable converter, such as Python's built-in `int` or `float`, automatically validating and converting the input.",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "type-conversion", "validation"]
  },
  {
    id: "pcea-1-028",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Intermediate",
    question: "What happens if a user passes `--port abc` when an argument is defined with `type=int`?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--port', type=int)\nparser.parse_args()",
    options: [
      "Python converts 'abc' to 0 silently",
      "argparse prints an error message, displays usage instructions, and exits with code 2",
      "Python enters an infinite loop",
      "The script raises an unhandled NameError"
    ],
    correctAnswer: 1,
    explanation: "argparse automatically catches the ValueError from int('abc'), displays a formatted error message to stderr, and terminates the script cleanly.",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "error-handling", "validation"]
  },
  {
    id: "pcea-1-029",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Intermediate",
    question: "How do you restrict an argument's accepted values to only `'csv'`, `'json'`, or `'xml'`?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--format', choices=???)",
    options: [
      "choices=['csv', 'json', 'xml']",
      "options=['csv', 'json', 'xml']",
      "allowed=('csv', 'json', 'xml')",
      "filter=['csv', 'json', 'xml']"
    ],
    correctAnswer: 0,
    explanation: "The `choices` parameter takes a container of valid options and automatically rejects any input value not in that collection.",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "choices", "validation"]
  },
  {
    id: "pcea-1-030",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Intermediate",
    question: "How do you provide a short single-character alias `-d` alongside long flag `--dry-run`?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\n# Line to add both forms:",
    options: [
      "parser.add_argument('-d', '--dry-run', action='store_true')",
      "parser.add_argument(alias='-d', name='--dry-run')",
      "parser.add_argument('--dry-run', short='-d')",
      "parser.add_argument(['-d', '--dry-run'])"
    ],
    correctAnswer: 0,
    explanation: "Multiple string flags passed to add_argument register short and long options together. The resulting attribute defaults to the long name (`args.dry_run`).",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "flags", "aliases"]
  },
  {
    id: "pcea-1-031",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Intermediate",
    question: "If an optional argument is defined as `parser.add_argument('--output-file')`, how is it accessed on `args`?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--output-file')\nargs = parser.parse_args(['--output-file', 'res.txt'])",
    options: [
      "args['output-file']",
      "args.output-file",
      "args.output_file",
      "args.outputFile"
    ],
    correctAnswer: 2,
    explanation: "argparse converts dashes (`-`) in flag names to underscores (`_`) so they become valid Python identifier attributes on the Namespace object (`args.output_file`).",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "naming", "namespace"]
  },
  {
    id: "pcea-1-032",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Advanced",
    question: "How can you ensure that a user can pass `--json` OR `--csv`, but NOT both simultaneously?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\n# Which method creates mutually exclusive arguments?",
    options: [
      "group = parser.add_mutually_exclusive_group()",
      "group = parser.add_exclusive_set()",
      "parser.set_conflict_handler('resolve')",
      "group = parser.add_binary_pair()"
    ],
    correctAnswer: 0,
    explanation: "add_mutually_exclusive_group() creates a group where argparse enforces that at most one of the registered flags can be present in a single execution.",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "mutually-exclusive", "validation"]
  },
  {
    id: "pcea-1-033",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Beginner",
    question: "What default flag does `argparse` automatically create for every parser without explicit code?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser(description='Automator')\n# What flag is automatically available?",
    options: [
      "--version",
      "-h / --help",
      "--debug",
      "--quiet"
    ],
    correctAnswer: 1,
    explanation: "argparse automatically provisions `-h` and `--help`, outputting the script description, positional arguments, and optional flags, then exiting cleanly.",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "help", "cli"]
  },
  {
    id: "pcea-1-034",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Intermediate",
    question: "How do you specify a default value for an optional parameter if omitted by the user?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--retries', type=int, default=3)",
    options: [
      "fallback=3",
      "default=3",
      "initial=3",
      "standard=3"
    ],
    correctAnswer: 1,
    explanation: "The `default` parameter specifies the value assigned to the attribute if the argument is not provided on the command line.",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "default", "cli"]
  },
  {
    id: "pcea-1-035",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Intermediate",
    question: "How do you make an optional flag `--token` mandatory for the user to provide?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--token', required=True)",
    options: [
      "mandatory=True",
      "required=True",
      "optional=False",
      "enforce=True"
    ],
    correctAnswer: 1,
    explanation: "Setting `required=True` on an option prefixed with `--` forces the user to supply it, raising an error if it is missing.",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "required", "validation"]
  },
  {
    id: "pcea-1-036",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Advanced",
    question: "How do you accept an arbitrary list of file names (1 or more) for a single argument?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('files', nargs='+')",
    options: [
      "nargs='*'",
      "nargs='+'",
      "nargs='?'",
      "multiple=True"
    ],
    correctAnswer: 1,
    explanation: "nargs='+' gathers one or more arguments into a Python list. If 0 items are provided, it raises an error. `nargs='*'` accepts 0 or more.",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "nargs", "lists"]
  },
  {
    id: "pcea-1-037",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Intermediate",
    question: "What does `nargs='?'` indicate in `add_argument()`?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--config', nargs='?', const='default.ini', default='none.ini')",
    options: [
      "Exactly 2 arguments required",
      "One argument can be optionally consumed; if absent, defaults are applied",
      "An infinite number of arguments",
      "Argument is rejected if provided"
    ],
    correctAnswer: 1,
    explanation: "nargs='?' consumes a single value if present. It allows specifying `const` (value if flag is given without argument) and `default` (value if flag is absent).",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "nargs", "optional"]
  },
  {
    id: "pcea-1-038",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Advanced",
    question: "How can you create sub-commands (like `git commit` and `git push`) in a Python CLI automation tool?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\nsubparsers = parser.add_subparsers(dest='command')\nbuild_parser = subparsers.add_parser('build')\ndeploy_parser = subparsers.add_parser('deploy')",
    options: [
      "parser.add_subparsers()",
      "parser.create_child_parsers()",
      "parser.split_commands()",
      "parser.register_verbs()"
    ],
    correctAnswer: 0,
    explanation: "add_subparsers() enables modular sub-command architectures where each sub-command has its own unique arguments and options.",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "subparsers", "sub-commands"]
  },
  {
    id: "pcea-1-039",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Intermediate",
    question: "What type of object does `parser.parse_args()` return by default?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\nargs = parser.parse_args([])\nprint(type(args))",
    options: [
      "dict",
      "argparse.Namespace",
      "list",
      "tuple"
    ],
    correctAnswer: 1,
    explanation: "parse_args() returns an `argparse.Namespace` object whose attributes match the defined argument destination names.",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "namespace", "return-type"]
  },
  {
    id: "pcea-1-040",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.2",
    category: "argparse",
    difficulty: "Intermediate",
    question: "How do you convert an `argparse.Namespace` object into a standard Python dictionary?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--env', default='prod')\nargs = parser.parse_args([])\n# Convert args to dict:",
    options: [
      "dict(args)",
      "vars(args)",
      "args.to_dict()",
      "args.as_dict()"
    ],
    correctAnswer: 1,
    explanation: "Calling `vars(args)` returns the internal `__dict__` of the Namespace object as a standard mutable Python dictionary.",
    officialRef: "PCEA-30-01 Block 1.2 - argparse",
    tags: ["argparse", "vars", "dictionary"]
  },
  {
    id: "pcea-1-041",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "os.environ",
    difficulty: "Beginner",
    question: "What happens if your code accesses `os.environ['API_KEY']` and `API_KEY` is NOT set in the system environment?",
    codeSnippet: "import os\nkey = os.environ['API_KEY']",
    options: [
      "It returns None silently",
      "It returns an empty string ''",
      "It raises a KeyError",
      "It prompts the user to enter the key"
    ],
    correctAnswer: 2,
    explanation: "os.environ behaves like a standard Python mapping. Direct key lookup with bracket notation raises a KeyError if the variable is undefined.",
    officialRef: "PCEA-30-01 Block 1.3 - Environment Variables",
    tags: ["os-environ", "key-error", "environment-variables"]
  },
  {
    id: "pcea-1-042",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "os.environ",
    difficulty: "Beginner",
    question: "What is the safest way to read an environment variable with a default fallback if unset?",
    codeSnippet: "import os\n# Safely read PORT with fallback 8080:",
    options: [
      "os.environ['PORT'] or 8080",
      "os.environ.get('PORT', '8080')",
      "os.get_env('PORT', default=8080)",
      "os.read_env('PORT', 8080)"
    ],
    correctAnswer: 1,
    explanation: "os.environ.get('VAR', default) safely returns the default value if 'VAR' does not exist, without raising a KeyError.",
    officialRef: "PCEA-30-01 Block 1.3 - Environment Variables",
    tags: ["os-environ", "get", "safe-lookup"]
  },
  {
    id: "pcea-1-043",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "Environment Types",
    difficulty: "Intermediate",
    question: "An environment variable `BATCH_SIZE=100` is set. What is the type of `os.environ.get('BATCH_SIZE')` in Python?",
    codeSnippet: "import os\n# System environment: BATCH_SIZE=100\nval = os.environ.get('BATCH_SIZE')",
    options: [
      "int",
      "str",
      "float",
      "bytes"
    ],
    correctAnswer: 1,
    explanation: "All environment variables in the OS are retrieved as strings (`str`). You must explicitly convert them using `int(os.environ.get('BATCH_SIZE', '100'))`.",
    officialRef: "PCEA-30-01 Block 1.3 - Environment Variables",
    tags: ["os-environ", "types", "string-conversion"]
  },
  {
    id: "pcea-1-044",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "Setting Env Vars",
    difficulty: "Intermediate",
    question: "If a Python script sets `os.environ['TEMP_VAR'] = '123'`, who can access this variable?",
    codeSnippet: "import os\nos.environ['TEMP_VAR'] = '123'",
    options: [
      "The current Python process and any child processes spawned by it",
      "All users across the operating system permanently",
      "The parent bash shell that launched the Python script",
      "Only other Python scripts running concurrently"
    ],
    correctAnswer: 0,
    explanation: "Modifications to os.environ affect the running process and are inherited by its spawned child processes, but never alter the parent shell or system environment.",
    officialRef: "PCEA-30-01 Block 1.3 - Environment Variables",
    tags: ["os-environ", "process-scope", "inheritance"]
  },
  {
    id: "pcea-1-045",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "dotenv",
    difficulty: "Beginner",
    question: "What is the convention of using a `.env` file in automation scripting?",
    codeSnippet: "# .env file content:\n# DB_HOST=localhost\n# DB_PORT=5432\n# API_SECRET=super_secret_token",
    options: [
      "Storing compiled C binary extensions",
      "Storing local configuration and sensitive secrets outside of source control",
      "Configuring virtual memory allocation for Python",
      "Defining automated unit tests"
    ],
    correctAnswer: 1,
    explanation: ".env files allow developers and operators to declare environment-specific settings and credentials locally without committing secrets to git.",
    officialRef: "PCEA-30-01 Block 1.3 - Dotenv Configuration",
    tags: ["dotenv", "secrets", "configuration"]
  },
  {
    id: "pcea-1-046",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "Virtual Environments",
    difficulty: "Beginner",
    question: "What standard library command creates a virtual environment named `.venv`?",
    codeSnippet: "# Terminal shell command:",
    options: [
      "python -m venv .venv",
      "python -m make_env .venv",
      "python --create-env .venv",
      "python -m pip venv .venv"
    ],
    correctAnswer: 0,
    explanation: "The built-in `venv` module (`python -m venv <dir>`) creates a lightweight, isolated virtual environment with its own site-packages.",
    officialRef: "PCEA-30-01 Block 1.3 - Virtual Environments",
    tags: ["venv", "cli", "virtual-environments"]
  },
  {
    id: "pcea-1-047",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "venv Activation",
    difficulty: "Beginner",
    question: "How is a virtual environment activated on Linux/macOS bash shells?",
    codeSnippet: "# Activating environment located in .venv:",
    options: [
      "run .venv/bin/activate",
      "source .venv/bin/activate",
      "start .venv/Scripts/activate",
      "python .venv/activate"
    ],
    correctAnswer: 1,
    explanation: "On POSIX shells, `source .venv/bin/activate` sets the PATH variable so the virtual environment's Python and pip executables take precedence.",
    officialRef: "PCEA-30-01 Block 1.3 - Virtual Environments",
    tags: ["venv", "bash", "activation"]
  },
  {
    id: "pcea-1-048",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "sys.executable",
    difficulty: "Intermediate",
    question: "How can an automation script check the absolute path of the Python interpreter running it?",
    codeSnippet: "import sys\nprint(sys.executable)",
    options: [
      "sys.python_path",
      "sys.executable",
      "os.get_python()",
      "sys.interpreter"
    ],
    correctAnswer: 1,
    explanation: "sys.executable holds the absolute filesystem path to the Python binary currently executing the script, which is vital for spawning matching child processes.",
    officialRef: "PCEA-30-01 Block 1.3 - Python Internals",
    tags: ["sys-executable", "interpreter", "virtual-environments"]
  },
  {
    id: "pcea-1-049",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "requirements.txt",
    difficulty: "Beginner",
    question: "Which pip command records all installed packages and their exact versions for repeatable automation setup?",
    codeSnippet: "# Generating frozen dependency list:",
    options: [
      "pip list --save",
      "pip freeze > requirements.txt",
      "pip export requirements.txt",
      "pip snapshot requirements.txt"
    ],
    correctAnswer: 1,
    explanation: "`pip freeze` outputs installed packages in standard `<package>==<version>` format, allowing identical environments via `pip install -r requirements.txt`.",
    officialRef: "PCEA-30-01 Block 1.3 - Pip & Dependencies",
    tags: ["pip", "requirements-txt", "reproducibility"]
  },
  {
    id: "pcea-1-050",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "sys.prefix",
    difficulty: "Intermediate",
    question: "How can an automation script programmatically determine if it is executing inside a virtual environment?",
    codeSnippet: "import sys\nis_venv = sys.prefix != sys.base_prefix",
    options: [
      "sys.is_virtual",
      "sys.prefix != sys.base_prefix",
      "os.environ['IS_VENV'] == '1'",
      "sys.virtual_env is True"
    ],
    correctAnswer: 1,
    explanation: "Inside a virtual environment, `sys.prefix` points to the venv directory while `sys.base_prefix` points to the global Python installation. When equal, no venv is active.",
    officialRef: "PCEA-30-01 Block 1.3 - Virtual Environments",
    tags: ["sys-prefix", "virtual-environments", "detection"]
  }
];
