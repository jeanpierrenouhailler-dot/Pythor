#!/usr/bin/env python3
"""
Generator for PCEA Block 1: Automation Fundamentals & CLI Operations (100 Cards)
Covers Chapters 1.1 - 1.5 for PCEA-30-01.
"""
import json

cards = []

def add_c(id_num, chap, cat, diff, q, snippet, opts, ans, exp, ref, tags):
    cards.append({
        "id": f"pcea-1-{id_num:03d}",
        "section": "Section 1",
        "chapter": chap,
        "category": cat,
        "difficulty": diff,
        "question": q,
        "codeSnippet": snippet,
        "options": opts,
        "correctAnswer": ans,
        "explanation": exp,
        "officialRef": ref,
        "tags": tags
    })

# ==========================================
# CHAPTER 1.1: Automation Concepts, ROI & Idempotency (Cards 1-20)
# ==========================================
add_c(1, "1.1", "Automation Concepts", "Beginner",
      "Which of the following tasks is the best candidate for automation with Python?",
      "# Evaluating candidates for automation:\ntask_a = 'Rename and archive 500 daily log files'\ntask_b = 'Design a new creative marketing logo'\ntask_c = 'Negotiate contract terms with an external vendor'",
      ["Designing a brand new creative marketing logo", "Renaming and archiving 500 daily log files", "Negotiating contract terms with an enterprise client", "Conducting an in-person candidate job interview"],
      1,
      "Repetitive, deterministic, rule-based, and high-frequency tasks (such as batch renaming and archiving files) are ideal candidates for software automation.",
      "PCEA-30-01 Block 1.1 - Automation Concepts",
      ["automation-concepts", "task-selection", "roi"])

add_c(2, "1.1", "Automation ROI", "Intermediate",
      "How is the net return on investment (ROI) or time payoff of automating a recurring task fundamentally calculated?",
      "# Automation ROI formula:\n# Net Time Saved = (Time per manual task * Frequency * Horizon) - (Dev Time + Maintenance Time)",
      ["(Time per task / Frequency) + Development Time", "(Manual task duration * Occurrences) - (Development time + Maintenance time)", "Total lines of automation Python code / Execution seconds", "Number of CPU cores * Frequency of cron execution"],
      1,
      "Automation payoff evaluates the total cumulative time saved across all future executions minus the initial scripting and ongoing maintenance overhead.",
      "PCEA-30-01 Block 1.1 - Automation ROI",
      ["roi", "time-savings", "planning"])

add_c(3, "1.1", "Idempotency", "Intermediate",
      "What is the definition of an 'idempotent' automation script?",
      "import os\n\ndef ensure_directory(path):\n    # Running this once or ten times produces the exact same outcome\n    os.makedirs(path, exist_ok=True)",
      ["A script that runs faster on each subsequent execution", "A script that can be executed multiple times without changing the result beyond the initial application", "A script that runs strictly in parallel across all CPU cores", "A script that automatically deletes itself after completion"],
      1,
      "An operation is idempotent if executing it multiple times leaves the system in the exact same state as running it once. Using exist_ok=True on os.makedirs is a classic idempotent pattern.",
      "PCEA-30-01 Block 1.1 - Idempotency",
      ["idempotency", "reliability", "best-practices"])

add_c(4, "1.1", "Idempotency", "Intermediate",
      "Why is `path.mkdir(exist_ok=True)` preferred over `path.mkdir()` without parameters in an automation workflow?",
      "from pathlib import Path\n\nbackup_dir = Path('/backups/daily')\nbackup_dir.mkdir(exist_ok=True)",
      ["It automatically compresses the created directory", "It prevents FileExistsError when the directory already exists, maintaining idempotency", "It encrypts the directory contents with AES-256", "It changes directory permissions to 777 automatically"],
      1,
      "Without exist_ok=True, mkdir raises FileExistsError if the target folder exists. With exist_ok=True, repeated script runs succeed idempotently without error.",
      "PCEA-30-01 Block 1.1 - Idempotency",
      ["pathlib", "idempotency", "exceptions"])

add_c(5, "1.1", "Atomic Operations", "Advanced",
      "In automation, what does 'atomicity' mean when modifying a critical configuration or database file?",
      "# Writing to a temp file and atomically replacing the target:\nimport os, tempfile\n\nwith tempfile.NamedTemporaryFile('w', delete=False, dir='.') as tmp:\n    tmp.write('new_config=True')\n    temp_name = tmp.name\nos.replace(temp_name, 'config.ini')",
      ["The file modification completely succeeds or completely fails, leaving no corrupt partial state", "The file is compressed using atomic physics simulation", "The file is executed in multi-threaded asynchronous mode", "The file can only be read by the root superuser"],
      0,
      "Atomic operations guarantee that an action is treated as a single indivisible unit: either all changes apply, or none do. Using os.replace with a temporary file prevents partial/corrupt configuration writes during unexpected crashes.",
      "PCEA-30-01 Block 1.1 - Atomic Operations",
      ["atomicity", "data-integrity", "tempfile"])

add_c(6, "1.1", "Dry-Run Mode", "Beginner",
      "What is the purpose of implementing a `--dry-run` or `--simulate` flag in an automation script?",
      "def delete_old_logs(dry_run=False):\n    for log in ['app.log.1', 'app.log.2']:\n        if dry_run:\n            print(f'[DRY-RUN] Would delete: {log}')\n        else:\n            # os.remove(log)\n            pass",
      ["To benchmark script CPU and RAM consumption", "To preview what destructive actions the script would perform without actually executing them", "To execute the script twice as fast", "To bypass file permission security checks"],
      1,
      "A dry-run mode simulates script actions and prints planned modifications, enabling safe verification before applying actual destructive changes.",
      "PCEA-30-01 Block 1.1 - Safe Automation",
      ["dry-run", "safety", "simulation"])

add_c(7, "1.1", "Error Guardrails", "Intermediate",
      "What is a common safety guardrail when automating bulk destructive operations like deleting files or terminating instances?",
      "# Safety threshold guardrail\nMAX_DELETIONS_ALLOWED = 50\n\ndef prune_records(records_to_delete):\n    if len(records_to_delete) > MAX_DELETIONS_ALLOWED:\n        raise RuntimeError(f'Safety abort: {len(records_to_delete)} exceeds threshold!')",
      ["Never writing log messages to prevent disk full errors", "Implementing sanity-check thresholds to abort if an abnormally high number of deletions is detected", "Disabling all try-except blocks so Python immediately panics", "Hardcoding the admin password into the script"],
      1,
      "Sanity thresholds and confirmation checks prevent catastrophic unintended mass deletions caused by upstream query bugs or bad regular expressions.",
      "PCEA-30-01 Block 1.1 - Safety Guardrails",
      ["guardrails", "defensive-coding", "safety"])

add_c(8, "1.1", "Determinism", "Intermediate",
      "Why is determinism crucial in unattended batch automation pipelines?",
      "# Predictable input to output mapping:\ndef process_batch(items):\n    # Sorting guarantees identical processing order across runs\n    for item in sorted(items):\n        execute_step(item)",
      ["Determinism ensures identical inputs produce predictable, repeatable outcomes every time", "Determinism allows random values to be generated during database migrations", "Determinism forces Python to execute exclusively in C compiled mode", "Determinism bypasses Python's Global Interpreter Lock (GIL)"],
      0,
      "Deterministic scripts guarantee reproducibility and eliminate race conditions or order-dependent inconsistencies in automated batch pipelines.",
      "PCEA-30-01 Block 1.1 - Determinism",
      ["determinism", "reproducibility", "pipeline"])

add_c(9, "1.1", "Unattended Execution", "Beginner",
      "Why should interactive `input()` calls generally be avoided in unattended automation scripts?",
      "# Problematic in headless cron/daemon environments:\n# answer = input('Do you wish to proceed? (y/n): ')",
      ["input() causes a syntax error when imported by other modules", "input() hangs indefinitely waiting for human console input when running in headless background tasks", "input() always converts integers into floating-point numbers", "input() automatically restarts the operating system"],
      1,
      "In scheduled cron jobs or CI/CD pipelines, there is no interactive TTY attached. An input() prompt will block execution indefinitely or throw an EOFError.",
      "PCEA-30-01 Block 1.1 - Headless Scripting",
      ["input", "headless", "unattended"])

add_c(10, "1.1", "Automation Architecture", "Intermediate",
      "Which automation pattern decouples data collection from data processing for scalable batch jobs?",
      "# Producer-consumer queue architecture\n# Step 1: Collect / extract URLs or file paths\n# Step 2: Queue items\n# Step 3: Process items sequentially or with workers",
      ["Singleton pattern", "Producer-Consumer pipeline", "Model-View-Controller GUI", "Interpreter pattern"],
      1,
      "The Producer-Consumer pattern separates the ingestion of work items from their execution, improving reliability, error isolation, and throughput.",
      "PCEA-30-01 Block 1.1 - Automation Architecture",
      ["architecture", "pipelines", "producer-consumer"])

add_c(11, "1.1", "Pre-Flight Checks", "Beginner",
      "What is the term for verifying prerequisites (such as network access, disk space, and tools) before running a task?",
      "import shutil\n\ndef check_prerequisites():\n    if not shutil.which('git'):\n        raise SystemExit('Git executable not found!')",
      ["Post-mortem analysis", "Pre-flight checks", "Hot patching", "Dynamic polymorphism"],
      1,
      "Pre-flight checks validate dependencies, credentials, available disk space, and tools early before performing any irreversible actions.",
      "PCEA-30-01 Block 1.1 - Pre-Flight Checks",
      ["preflight", "validation", "prerequisites"])

add_c(12, "1.1", "Audit Trails", "Intermediate",
      "Why is creating an audit trail essential for enterprise automation scripts?",
      "# Audit log entry with timestamp and initiator:\n# 2026-10-01 02:40:00 [AUDIT] User: svc_backup | Action: Archived 142 items | Status: SUCCESS",
      ["It speeds up file compression algorithms", "It provides a verifiable chronological record of actions, inputs, and outcomes for compliance and troubleshooting", "It prevents Python from creating bytecode .pyc files", "It reduces network bandwidth consumption"],
      1,
      "Audit logs record who ran the script, what parameters were passed, which records were touched, and the ultimate result, ensuring traceability and accountability.",
      "PCEA-30-01 Block 1.1 - Audit Trails",
      ["audit-trail", "traceability", "logging"])

add_c(13, "1.1", "Fault Tolerance", "Intermediate",
      "What does 'graceful degradation' mean in an automated reporting script?",
      "def fetch_report_data():\n    data = get_primary_data()\n    try:\n        data['exchange_rates'] = fetch_live_rates()\n    except Exception:\n        data['exchange_rates'] = 'Unavailable (Cached)'\n    return data",
      ["The script crashes immediately if any non-essential service fails", "The script continues executing core functions even if optional sub-tasks encounter errors", "The script downgrades the Python version dynamically", "The script slows down execution by 50%"],
      1,
      "Graceful degradation ensures that a non-critical failure (like an external currency rate API) does not bring down the entire automated business process.",
      "PCEA-30-01 Block 1.1 - Fault Tolerance",
      ["fault-tolerance", "resilience", "best-practices"])

add_c(14, "1.1", "Exit Codes Convention", "Beginner",
      "In standard POSIX and Windows automation environments, what does an exit code of `0` indicate?",
      "import sys\nsys.exit(0)",
      ["Critical fatal exception", "Successful script completion without errors", "Script timed out and was killed", "Permission denied"],
      1,
      "By international convention in Unix, Linux, and Windows, exit code 0 signifies successful execution, while any non-zero exit code (1-255) indicates failure.",
      "PCEA-30-01 Block 1.1 - Exit Codes",
      ["exit-codes", "posix", "sys-exit"])

add_c(15, "1.1", "Automation Overhead", "Beginner",
      "Which scenario represents a negative ROI for an automation effort?",
      "# Task: Manual task takes 2 minutes once a year.\n# Automation dev time: 40 hours. Maintenance: 2 hours/year.",
      ["Automating a 10-minute task that runs 500 times a day", "Spending 40 hours automating a 2-minute task performed once per year", "Automating nightly backup file integrity verification", "Automating hourly employee onboarding status sync"],
      1,
      "If the effort to develop and maintain the automation vastly exceeds the cumulative manual time saved across its lifetime, the automation produces negative ROI.",
      "PCEA-30-01 Block 1.1 - Automation ROI",
      ["roi", "cost-benefit", "planning"])

add_c(16, "1.1", "Rollback Capability", "Intermediate",
      "Why is implementing rollback functionality critical in automated file migration scripts?",
      "# Moving files with rollback capability\n# If step 4 fails, restore all moved files from backup ledger",
      ["To revert the system to its initial known-good state if an error occurs midway through migration", "To speed up the network transfer rate", "To permanently delete old versions of Python", "To prevent users from opening the terminal"],
      0,
      "A rollback mechanism restores original files and configurations if a catastrophic error occurs halfway through execution, avoiding corrupted half-migrated states.",
      "PCEA-30-01 Block 1.1 - Rollback Mechanisms",
      ["rollback", "reliability", "data-integrity"])

add_c(17, "1.1", "Script Modularity", "Beginner",
      "Why is breaking an automation script into smaller, focused functions recommended?",
      "def fetch_data(): ...\ndef parse_data(raw): ...\ndef write_report(parsed): ...\ndef notify_team(): ...",
      ["Smaller functions run in parallel without threading", "It improves readability, testability, reusability, and makes isolated error handling simpler", "Python only allows a maximum of 50 lines per function", "Functions without arguments consume 0 memory"],
      1,
      "Modular scripting isolates responsibilities into testable, reusable units, making complex automation pipelines significantly easier to maintain and debug.",
      "PCEA-30-01 Block 1.1 - Script Modularity",
      ["modularity", "clean-code", "functions"])

add_c(18, "1.1", "Rate Limiting", "Intermediate",
      "Why should an automated web or API harvesting script include rate limiting (`time.sleep`)?",
      "import time, requests\n\nfor url in urls:\n    resp = requests.get(url)\n    time.sleep(1.0)  # Rate limiting delay",
      ["To prevent hitting server request quotas, IP bans, or overwhelming the target service", "To allow the Python interpreter to cool down the CPU", "Because HTTP requests fail if sent faster than 1 second", "To convert HTTP responses into JSON automatically"],
      0,
      "Rate limiting respects the host's capacity, avoids triggering DoS defenses or HTTP 429 Too Many Requests errors, and complies with API terms of service.",
      "PCEA-30-01 Block 1.1 - Rate Limiting",
      ["rate-limiting", "politeness", "apis"])

add_c(19, "1.1", "Environment Isolation", "Beginner",
      "Why is using isolated virtual environments considered a best practice for automation scripts?",
      "# Activating dedicated project environment\n# .venv/bin/python automation_script.py",
      ["It prevents dependency conflicts with the system Python installation and guarantees required package versions", "It encrypts the Python source code so nobody can edit it", "It allows Python to run without an operating system", "It increases script execution speed by 10x"],
      0,
      "Virtual environments isolate package dependencies per project, preventing breakages caused by global package updates or mismatched third-party versions.",
      "PCEA-30-01 Block 1.1 - Environment Isolation",
      ["venv", "dependencies", "isolation"])

add_c(20, "1.1", "Automation Documentation", "Beginner",
      "What documentation should always accompany an automated operational script?",
      '"""\\nScript: backup_db.py\\nPurpose: Automated nightly dump and S3 upload.\\nPrerequisites: AWS_ACCESS_KEY_ID in env, pg_dump installed.\\nExit codes: 0=Success, 1=Dump error, 2=Upload error.\\n"""',
      ["The personal biography of the script developer", "Clear usage instructions, prerequisite tools/env vars, expected arguments, and exit code meanings", "A printout of Python's copyright license", "A list of all computer passwords"],
      1,
      "Operational scripts must document prerequisites, configuration requirements, invocation arguments, and exit codes so operators can maintain and troubleshoot them.",
      "PCEA-30-01 Block 1.1 - Documentation",
      ["documentation", "maintenance", "operational-readiness"])

# ==========================================
# CHAPTER 1.2: Command-Line Interfaces with sys.argv & argparse (Cards 21-40)
# ==========================================
add_c(21, "1.2", "sys.argv", "Beginner",
      "Given the command line execution `python backup.py --daily /var/data`, what is the value of `sys.argv[0]`?",
      "import sys\n# Execution: python backup.py --daily /var/data\nprint(sys.argv[0])",
      ["'python'", "'backup.py'", "'--daily'", "'/var/data'"],
      1,
      "sys.argv[0] always represents the name or path of the executed Python script itself. User arguments begin at index 1.",
      "PCEA-30-01 Block 1.2 - sys.argv",
      ["sys-argv", "cli", "command-line"])

add_c(22, "1.2", "sys.argv", "Beginner",
      "What exception is raised if code accesses `sys.argv[1]` when the user executed the script with no arguments?",
      "import sys\n# Execution: python process.py\nfilename = sys.argv[1]",
      ["ValueError", "KeyError", "IndexError", "ArgumentError"],
      2,
      "Because sys.argv is a standard Python list containing only ['process.py'] (length 1), accessing index 1 raises an IndexError.",
      "PCEA-30-01 Block 1.2 - sys.argv",
      ["sys-argv", "index-error", "exceptions"])

add_c(23, "1.2", "sys.argv", "Intermediate",
      "What is the data type of all elements contained in `sys.argv`?",
      "import sys\n# Execution: python count.py 42 3.14 True\nval = sys.argv[1]",
      ["int", "str", "float", "object"],
      1,
      "The operating system passes all command line arguments to Python as strings (`str`). Any integers, floats, or booleans must be manually converted.",
      "PCEA-30-01 Block 1.2 - sys.argv",
      ["sys-argv", "types", "strings"])

add_c(24, "1.2", "argparse", "Beginner",
      "Which standard library module is recommended over `sys.argv` for building robust command-line tools?",
      "import argparse\n\nparser = argparse.ArgumentParser(description='Automated deployment tool')\nparser.add_argument('--env', required=True)\nargs = parser.parse_args()",
      ["syslog", "argparse", "subprocess", "getopt"],
      1,
      "argparse is the Python standard library's feature-rich CLI parser that automatically handles flags, types, help messages, and argument validation.",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "standard-library", "cli"])

add_c(25, "1.2", "argparse", "Beginner",
      "In `argparse`, how do you define a positional argument named `target`?",
      "import argparse\nparser = argparse.ArgumentParser()\n# Which line adds a positional argument?",
      ["parser.add_argument('-target')", "parser.add_argument('--target')", "parser.add_argument('target')", "parser.add_positional('target')"],
      2,
      "Arguments defined without leading dashes (like 'target') are positional arguments, required by default in the order defined.",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "positional-arguments", "cli"])

add_c(26, "1.2", "argparse", "Intermediate",
      "How do you define a boolean flag `--verbose` that sets `args.verbose` to `True` when specified?",
      "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--verbose', action=???)",
      ["action='store_true'", "action='set_boolean'", "action='append'", "action='true'"],
      0,
      "action='store_true' configures the argument to be False by default and True whenever the flag appears on the command line.",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "flags", "store-true"])

add_c(27, "1.2", "argparse", "Intermediate",
      "How do you enforce that a command line parameter must be parsed as an integer in `argparse`?",
      "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--port', type=???, default=8080)",
      ["type='integer'", "type=int", "cast=int", "datatype=int"],
      1,
      "The `type=` parameter takes a callable converter, such as Python's built-in `int` or `float`, automatically validating and converting the input.",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "type-conversion", "validation"])

add_c(28, "1.2", "argparse", "Intermediate",
      "What happens if a user passes `--port abc` when an argument is defined with `type=int`?",
      "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--port', type=int)\nparser.parse_args()",
      ["Python converts 'abc' to 0 silently", "argparse prints an error message, displays usage instructions, and exits with code 2", "Python enters an infinite loop", "The script raises an unhandled NameError"],
      1,
      "argparse automatically catches the ValueError from int('abc'), displays a formatted error message to stderr, and terminates the script cleanly.",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "error-handling", "validation"])

add_c(29, "1.2", "argparse", "Intermediate",
      "How do you restrict an argument's accepted values to only `'csv'`, `'json'`, or `'xml'`?",
      "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--format', choices=???)",
      ["choices=['csv', 'json', 'xml']", "options=['csv', 'json', 'xml']", "allowed=('csv', 'json', 'xml')", "filter=['csv', 'json', 'xml']"],
      0,
      "The `choices` parameter takes a container of valid options and automatically rejects any input value not in that collection.",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "choices", "validation"])

add_c(30, "1.2", "argparse", "Intermediate",
      "How do you provide a short single-character alias `-d` alongside long flag `--dry-run`?",
      "import argparse\nparser = argparse.ArgumentParser()\n# Line to add both forms:",
      ["parser.add_argument('-d', '--dry-run', action='store_true')", "parser.add_argument(alias='-d', name='--dry-run')", "parser.add_argument('--dry-run', short='-d')", "parser.add_argument(['-d', '--dry-run'])"],
      0,
      "Multiple string flags passed to add_argument register short and long options together. The resulting attribute defaults to the long name (`args.dry_run`).",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "flags", "aliases"])

add_c(31, "1.2", "argparse", "Intermediate",
      "If an optional argument is defined as `parser.add_argument('--output-file')`, how is it accessed on `args`?",
      "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--output-file')\nargs = parser.parse_args(['--output-file', 'res.txt'])",
      ["args['output-file']", "args.output-file", "args.output_file", "args.outputFile"],
      2,
      "argparse converts dashes (`-`) in flag names to underscores (`_`) so they become valid Python identifier attributes on the Namespace object (`args.output_file`).",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "naming", "namespace"])

add_c(32, "1.2", "argparse", "Advanced",
      "How can you ensure that a user can pass `--json` OR `--csv`, but NOT both simultaneously?",
      "import argparse\nparser = argparse.ArgumentParser()\n# Which method creates mutually exclusive arguments?",
      ["group = parser.add_mutually_exclusive_group()", "group = parser.add_exclusive_set()", "parser.set_conflict_handler('resolve')", "group = parser.add_binary_pair()"],
      0,
      "add_mutually_exclusive_group() creates a group where argparse enforces that at most one of the registered flags can be present in a single execution.",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "mutually-exclusive", "validation"])

add_c(33, "1.2", "argparse", "Beginner",
      "What default flag does `argparse` automatically create for every parser without explicit code?",
      "import argparse\nparser = argparse.ArgumentParser(description='Automator')\n# What flag is automatically available?",
      ["--version", "-h / --help", "--debug", "--quiet"],
      1,
      "argparse automatically provisions `-h` and `--help`, outputting the script description, positional arguments, and optional flags, then exiting cleanly.",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "help", "cli"])

add_c(34, "1.2", "argparse", "Intermediate",
      "How do you specify a default value for an optional parameter if omitted by the user?",
      "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--retries', type=int, default=3)",
      ["fallback=3", "default=3", "initial=3", "standard=3"],
      1,
      "The `default` parameter specifies the value assigned to the attribute if the argument is not provided on the command line.",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "default", "cli"])

add_c(35, "1.2", "argparse", "Intermediate",
      "How do you make an optional flag `--token` mandatory for the user to provide?",
      "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--token', required=True)",
      ["mandatory=True", "required=True", "optional=False", "enforce=True"],
      1,
      "Setting `required=True` on an option prefixed with `--` forces the user to supply it, raising an error if it is missing.",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "required", "validation"])

add_c(36, "1.2", "argparse", "Advanced",
      "How do you accept an arbitrary list of file names (1 or more) for a single argument?",
      "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('files', nargs='+')",
      ["nargs='*'", "nargs='+'", "nargs='?'", "multiple=True"],
      1,
      "nargs='+' gathers one or more arguments into a Python list. If 0 items are provided, it raises an error. `nargs='*'` accepts 0 or more.",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "nargs", "lists"])

add_c(37, "1.2", "argparse", "Intermediate",
      "What does `nargs='?'` indicate in `add_argument()`?",
      "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--config', nargs='?', const='default.ini', default='none.ini')",
      ["Exactly 2 arguments required", "One argument can be optionally consumed; if absent, defaults are applied", "An infinite number of arguments", "Argument is rejected if provided"],
      1,
      "nargs='?' consumes a single value if present. It allows specifying `const` (value if flag is given without argument) and `default` (value if flag is absent).",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "nargs", "optional"])

add_c(38, "1.2", "argparse", "Advanced",
      "How can you create sub-commands (like `git commit` and `git push`) in a Python CLI automation tool?",
      "import argparse\nparser = argparse.ArgumentParser()\nsubparsers = parser.add_subparsers(dest='command')\nbuild_parser = subparsers.add_parser('build')\ndeploy_parser = subparsers.add_parser('deploy')",
      ["parser.add_subparsers()", "parser.create_child_parsers()", "parser.split_commands()", "parser.register_verbs()"],
      0,
      "add_subparsers() enables modular sub-command architectures where each sub-command has its own unique arguments and options.",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "subparsers", "sub-commands"])

add_c(39, "1.2", "argparse", "Intermediate",
      "What type of object does `parser.parse_args()` return by default?",
      "import argparse\nparser = argparse.ArgumentParser()\nargs = parser.parse_args([])\nprint(type(args))",
      ["dict", "argparse.Namespace", "list", "tuple"],
      1,
      "parse_args() returns an `argparse.Namespace` object whose attributes match the defined argument destination names.",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "namespace", "return-type"])

add_c(40, "1.2", "argparse", "Intermediate",
      "How do you convert an `argparse.Namespace` object into a standard Python dictionary?",
      "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--env', default='prod')\nargs = parser.parse_args([])\n# Convert args to dict:",
      ["dict(args)", "vars(args)", "args.to_dict()", "args.as_dict()"],
      1,
      "Calling `vars(args)` returns the internal `__dict__` of the Namespace object as a standard mutable Python dictionary.",
      "PCEA-30-01 Block 1.2 - argparse",
      ["argparse", "vars", "dictionary"])

# ==========================================
# CHAPTER 1.3: Environment Variables, Configuration & Virtual Environments (Cards 41-60)
# ==========================================
add_c(41, "1.3", "os.environ", "Beginner",
      "What happens if your code accesses `os.environ['API_KEY']` and `API_KEY` is NOT set in the system environment?",
      "import os\nkey = os.environ['API_KEY']",
      ["It returns None silently", "It returns an empty string ''", "It raises a KeyError", "It prompts the user to enter the key"],
      2,
      "os.environ behaves like a standard Python mapping. Direct key lookup with bracket notation raises a KeyError if the variable is undefined.",
      "PCEA-30-01 Block 1.3 - Environment Variables",
      ["os-environ", "key-error", "environment-variables"])

add_c(42, "1.3", "os.environ", "Beginner",
      "What is the safest way to read an environment variable with a default fallback if unset?",
      "import os\n# Safely read PORT with fallback 8080:",
      ["os.environ['PORT'] or 8080", "os.environ.get('PORT', '8080')", "os.get_env('PORT', default=8080)", "os.read_env('PORT', 8080)"],
      1,
      "os.environ.get('VAR', default) safely returns the default value if 'VAR' does not exist, without raising a KeyError.",
      "PCEA-30-01 Block 1.3 - Environment Variables",
      ["os-environ", "get", "safe-lookup"])

add_c(43, "1.3", "Environment Types", "Intermediate",
      "An environment variable `BATCH_SIZE=100` is set. What is the type of `os.environ.get('BATCH_SIZE')` in Python?",
      "import os\n# System environment: BATCH_SIZE=100\nval = os.environ.get('BATCH_SIZE')",
      ["int", "str", "float", "bytes"],
      1,
      "All environment variables in the OS are retrieved as strings (`str`). You must explicitly convert them using `int(os.environ.get('BATCH_SIZE', '100'))`.",
      "PCEA-30-01 Block 1.3 - Environment Variables",
      ["os-environ", "types", "string-conversion"])

add_c(44, "1.3", "Setting Env Vars", "Intermediate",
      "If a Python script sets `os.environ['TEMP_VAR'] = '123'`, who can access this variable?",
      "import os\nos.environ['TEMP_VAR'] = '123'",
      ["The current Python process and any child processes spawned by it", "All users across the operating system permanently", "The parent bash shell that launched the Python script", "Only other Python scripts running concurrently"],
      0,
      "Modifications to os.environ affect the running process and are inherited by its spawned child processes, but never alter the parent shell or system environment.",
      "PCEA-30-01 Block 1.3 - Environment Variables",
      ["os-environ", "process-scope", "inheritance"])

add_c(45, "1.3", "dotenv", "Beginner",
      "What is the convention of using a `.env` file in automation scripting?",
      "# .env file content:\n# DB_HOST=localhost\n# DB_PORT=5432\n# API_SECRET=super_secret_token",
      ["Storing compiled C binary extensions", "Storing local configuration and sensitive secrets outside of source control", "Configuring virtual memory allocation for Python", "Defining automated unit tests"],
      1,
      ".env files allow developers and operators to declare environment-specific settings and credentials locally without committing secrets to git.",
      "PCEA-30-01 Block 1.3 - Dotenv Configuration",
      ["dotenv", "secrets", "configuration"])

add_c(46, "1.3", "Virtual Environments", "Beginner",
      "What standard library command creates a virtual environment named `.venv`?",
      "# Terminal shell command:",
      ["python -m venv .venv", "python -m make_env .venv", "python --create-env .venv", "python -m pip venv .venv"],
      0,
      "The built-in `venv` module (`python -m venv <dir>`) creates a lightweight, isolated virtual environment with its own site-packages.",
      "PCEA-30-01 Block 1.3 - Virtual Environments",
      ["venv", "cli", "virtual-environments"])

add_c(47, "1.3", "venv Activation", "Beginner",
      "How is a virtual environment activated on Linux/macOS bash shells?",
      "# Activating environment located in .venv:",
      ["run .venv/bin/activate", "source .venv/bin/activate", "start .venv/Scripts/activate", "python .venv/activate"],
      1,
      "On POSIX shells, `source .venv/bin/activate` sets the PATH variable so the virtual environment's Python and pip executables take precedence.",
      "PCEA-30-01 Block 1.3 - Virtual Environments",
      ["venv", "bash", "activation"])

add_c(48, "1.3", "sys.executable", "Intermediate",
      "How can an automation script check the absolute path of the Python interpreter running it?",
      "import sys\nprint(sys.executable)",
      ["sys.python_path", "sys.executable", "os.get_python()", "sys.interpreter"],
      1,
      "sys.executable holds the absolute filesystem path to the Python binary currently executing the script, which is vital for spawning matching child processes.",
      "PCEA-30-01 Block 1.3 - Python Internals",
      ["sys-executable", "interpreter", "virtual-environments"])

add_c(49, "1.3", "requirements.txt", "Beginner",
      "Which pip command records all installed packages and their exact versions for repeatable automation setup?",
      "# Generating frozen dependency list:",
      ["pip list --save", "pip freeze > requirements.txt", "pip export requirements.txt", "pip snapshot requirements.txt"],
      1,
      "`pip freeze` outputs installed packages in standard `<package>==<version>` format, allowing identical environments via `pip install -r requirements.txt`.",
      "PCEA-30-01 Block 1.3 - Pip & Dependencies",
      ["pip", "requirements-txt", "reproducibility"])

add_c(50, "1.3", "sys.prefix", "Intermediate",
      "How can an automation script programmatically determine if it is executing inside a virtual environment?",
      "import sys\nis_venv = sys.prefix != sys.base_prefix",
      ["sys.is_virtual", "sys.prefix != sys.base_prefix", "os.environ['IS_VENV'] == '1'", "sys.virtual_env is True"],
      1,
      "Inside a virtual environment, `sys.prefix` points to the venv directory while `sys.base_prefix` points to the global Python installation. When equal, no venv is active.",
      "PCEA-30-01 Block 1.3 - Virtual Environments",
      ["sys-prefix", "virtual-environments", "detection"])

add_c(51, "1.3", "Boolean Env Vars", "Intermediate",
      "What is the recommended pattern to parse a boolean flag from an environment variable?",
      "import os\n# Parsing DEBUG flag from env:\nis_debug = os.environ.get('DEBUG', '').lower() in ('1', 'true', 'yes')",
      ["bool(os.environ.get('DEBUG'))", "os.environ.get('DEBUG', '').lower() in ('1', 'true', 'yes')", "os.environ.get('DEBUG') is True", "int(os.environ.get('DEBUG')) == 1"],
      1,
      "bool('False') in Python evaluates to True because non-empty strings are truthy. Explicitly checking for strings like ('1', 'true', 'yes') is the correct pattern.",
      "PCEA-30-01 Block 1.3 - Environment Variables",
      ["boolean-parsing", "os-environ", "gotchas"])

add_c(52, "1.3", "Config Parser", "Intermediate",
      "Which standard library module is designed to read `.ini` style configuration files for automation scripts?",
      "# Reading config.ini:\n# [database]\n# host = localhost\n# port = 5432",
      ["ini_reader", "configparser", "settings", "json_config"],
      1,
      "`configparser` parses INI-style configuration files organized into `[sections]` with `key = value` pairs.",
      "PCEA-30-01 Block 1.3 - Configuration Management",
      ["configparser", "ini-files", "standard-library"])

add_c(53, "1.3", "Secrets Management", "Beginner",
      "Why should production API tokens and database passwords NEVER be hardcoded into Python automation scripts?",
      "# Bad practice: API_KEY = 'super_secret_xyz123'",
      ["Hardcoded secrets get committed to version control, creating severe security vulnerabilities", "Hardcoded strings cause MemoryError in Python", "Python automatically deletes hardcoded passwords at runtime", "Hardcoded keys slow down network bandwidth"],
      0,
      "Hardcoding secrets risks exposing them in source repositories, logs, or shared code. Secrets should be injected via environment variables or secret vaults.",
      "PCEA-30-01 Block 1.3 - Secrets Management",
      ["security", "secrets", "best-practices"])

add_c(54, "1.3", "os.getenv", "Beginner",
      "What does `os.getenv('TIMEOUT', '30')` return if the `TIMEOUT` environment variable is not defined?",
      "import os\nval = os.getenv('TIMEOUT', '30')",
      ["None", "'30'", "30", "KeyError"],
      1,
      "`os.getenv(key, default)` is a convenience helper in the `os` module that returns the specified default string if the environment variable is not found.",
      "PCEA-30-01 Block 1.3 - Environment Variables",
      ["os-getenv", "defaults", "environment-variables"])

add_c(55, "1.3", "Path Environment", "Intermediate",
      "What role does the `PATH` environment variable play when an automation script invokes external commands?",
      "import shutil\n# How does shutil.which('curl') locate the binary?\npath = shutil.which('curl')",
      ["It defines the directories searched in order by the OS to find executable binaries", "It specifies the Python class inheritance tree", "It lists the available network IP addresses", "It records CPU temperature limits"],
      0,
      "The PATH environment variable contains a colon- (POSIX) or semicolon- (Windows) separated list of directories where the OS searches for command executables.",
      "PCEA-30-01 Block 1.3 - Environment Variables",
      ["path", "executables", "os-environ"])

add_c(56, "1.3", "Config Precedence", "Advanced",
      "What is the industry-standard order of configuration precedence for automation tools (from highest to lowest priority)?",
      "# Where should settings take precedence?",
      ["Default values -> Config file -> Environment variables -> CLI arguments", "CLI arguments -> Environment variables -> Config file -> Default values", "Config file -> CLI arguments -> Default values -> Environment variables", "Environment variables -> Default values -> CLI arguments -> Config file"],
      1,
      "Command-line flags override environment variables, which override file-based configuration settings, which in turn override hardcoded internal defaults.",
      "PCEA-30-01 Block 1.3 - Configuration Precedence",
      ["precedence", "cli", "configuration"])

add_c(57, "1.3", "Virtualenv Upgrades", "Beginner",
      "How do you upgrade `pip` to the latest version within an active virtual environment?",
      "# Terminal command:",
      ["python -m pip install --upgrade pip", "pip update all", "pip install pip --force-fresh", "python --upgrade-pip"],
      0,
      "`python -m pip install --upgrade pip` safely upgrades pip using the active environment's Python interpreter.",
      "PCEA-30-01 Block 1.3 - Pip & Dependencies",
      ["pip", "upgrade", "virtual-environments"])

add_c(58, "1.3", "os.unsetenv", "Intermediate",
      "How do you remove an environment variable from the current Python process?",
      "import os\nos.environ['TEMP_KEY'] = 'test'\n# Remove it:",
      ["del os.environ['TEMP_KEY']", "os.environ.remove('TEMP_KEY')", "os.clear('TEMP_KEY')", "os.environ['TEMP_KEY'] = None"],
      0,
      "`del os.environ[key]` or `os.environ.pop(key, None)` deletes the variable from the process environment dictionary and unsets it for child processes.",
      "PCEA-30-01 Block 1.3 - Environment Variables",
      ["os-environ", "del", "cleanup"])

add_c(59, "1.3", "Python Path", "Intermediate",
      "Which environment variable adds extra directories to Python's module search path `sys.path`?",
      "# Setting search path before running script:\n# export ???=/opt/custom_libs",
      ["PYTHONHOME", "PYTHONPATH", "PYTHONBIN", "PYTHONDONTWRITEBYTECODE"],
      1,
      "PYTHONPATH specifies additional directories that Python prepends to `sys.path` when resolving import statements.",
      "PCEA-30-01 Block 1.3 - Python Environment",
      ["pythonpath", "sys-path", "imports"])

add_c(60, "1.3", "pip install -e", "Intermediate",
      "What does `pip install -e .` do when developing an automation package?",
      "# Inside repository root with pyproject.toml / setup.py:\npip install -e .",
      ["Installs package in editable mode so code changes take effect immediately without reinstalling", "Installs package encrypted mode", "Installs package with enterprise debug symbols", "Erases the existing virtual environment"],
      0,
      "`-e` or `--editable` links the source directory into the virtual environment, allowing developers to test and run scripts as packages while modifying code.",
      "PCEA-30-01 Block 1.3 - Pip & Dependencies",
      ["pip", "editable", "packaging"])

# ==========================================
# CHAPTER 1.4: Subprocess Execution & Process Automation (Cards 61-80)
# ==========================================
add_c(61, "1.4", "subprocess.run", "Beginner",
      "Why is `subprocess.run()` preferred over `os.system()` for executing external commands?",
      "import subprocess\nresult = subprocess.run(['git', 'status'], capture_output=True, text=True)",
      ["os.system() cannot run on 64-bit systems", "subprocess.run() provides secure argument escaping, capture of stdout/stderr, timeouts, and rich return objects", "os.system() was completely removed from Python 3", "subprocess.run() automatically translates commands into assembly language"],
      1,
      "subprocess.run() provides granular control over inputs, outputs, error handling, return codes, and process timeouts without invoking an unsafe shell by default.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "os-system", "security"])

add_c(62, "1.4", "shell=False Security", "Intermediate",
      "Why is passing command arguments as a list with `shell=False` safer than passing a concatenated string with `shell=True`?",
      "import subprocess\nuser_input = 'file.txt; rm -rf /'\n# Safe approach:\nsubprocess.run(['cat', user_input])",
      ["It prevents shell command injection vulnerabilities by passing arguments directly to the OS exec system call", "It allows the script to run without Python installed", "It compresses the command arguments into a zip archive", "It runs the command as superuser automatically"],
      0,
      "Passing arguments as a list with shell=False avoids launching a shell interpreter, preventing command chaining and shell injection attacks.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["security", "command-injection", "shell-false"])

add_c(63, "1.4", "capture_output", "Beginner",
      "How do you capture standard output and standard error as strings from `subprocess.run()`?",
      "import subprocess\n# Execute and capture output as text:\nresult = subprocess.run(['uptime'], capture_output=True, text=True)",
      ["result.read()", "result.stdout", "result.output()", "result.console"],
      1,
      "When `capture_output=True` and `text=True` are set, `result.stdout` contains the command's standard output decoded as a Python string.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "capture-output", "stdout"])

add_c(64, "1.4", "text vs bytes", "Intermediate",
      "What is the type of `result.stdout` if `capture_output=True` is passed WITHOUT `text=True` or `encoding`?",
      "import subprocess\nres = subprocess.run(['echo', 'hello'], capture_output=True)\nprint(type(res.stdout))",
      ["str", "bytes", "bytearray", "int"],
      1,
      "By default, subprocess captures streams as raw binary `bytes`. Specifying `text=True` (or `universal_newlines=True`) decodes them to `str` using the system encoding.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "bytes", "decoding"])

add_c(65, "1.4", "returncode", "Beginner",
      "How do you check if an external command completed successfully via its `CompletedProcess` object?",
      "import subprocess\nres = subprocess.run(['ping', '-c', '1', '127.0.0.1'], capture_output=True)\n# Check success:",
      ["res.status == 'OK'", "res.returncode == 0", "res.exit == True", "res.success()"],
      1,
      "`result.returncode` stores the exit code returned by the child process; a returncode of `0` denotes success.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "returncode", "exit-codes"])

add_c(66, "1.4", "check=True", "Intermediate",
      "What does passing `check=True` do in `subprocess.run()`?",
      "import subprocess\nsubprocess.run(['ls', '/nonexistent_folder'], check=True)",
      ["Checks the syntax of the command without running it", "Automatically raises a subprocess.CalledProcessError if the command exits with a non-zero code", "Forces the command to run with root permissions", "Repeats the command until it succeeds"],
      1,
      "`check=True` instructs subprocess.run() to raise a `CalledProcessError` if the executed command exits with a non-zero return code.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "check-true", "called-process-error"])

add_c(67, "1.4", "TimeoutExpired", "Intermediate",
      "How do you prevent a subprocess command from hanging indefinitely if an external server stops responding?",
      "import subprocess\ntry:\n    subprocess.run(['curl', 'https://api.internal'], timeout=5)\nexcept subprocess.TimeoutExpired:\n    print('Command timed out!')",
      ["Set timeout=5 and catch subprocess.TimeoutExpired", "Set max_seconds=5 on the Python interpreter", "Run the script inside a threading.Timer", "Use time.sleep(5) before the command"],
      0,
      "Passing `timeout=N` raises `subprocess.TimeoutExpired` if the process runs longer than N seconds, allowing clean cancellation and logging.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "timeout", "timeout-expired"])

add_c(68, "1.4", "cwd Parameter", "Intermediate",
      "How can you execute a command inside a specific directory without changing Python's global working directory?",
      "import subprocess\n# Run 'npm install' inside /opt/app:\nsubprocess.run(['npm', 'install'], cwd='/opt/app')",
      ["subprocess.run(['cd', '/opt/app', '&&', 'npm', 'install'])", "subprocess.run(['npm', 'install'], cwd='/opt/app')", "os.chdir('/opt/app') then subprocess.run(['npm', 'install'])", "subprocess.run(['npm', 'install'], dir='/opt/app')"],
      1,
      "The `cwd` parameter sets the child process's working directory independently without altering the parent Python process's current directory.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "cwd", "working-directory"])

add_c(69, "1.4", "env Parameter", "Advanced",
      "How do you pass a customized environment dictionary to a subprocess while retaining existing system variables?",
      "import os, subprocess\ncustom_env = os.environ.copy()\ncustom_env['APP_ENV'] = 'production'\nsubprocess.run(['python', 'deploy.py'], env=custom_env)",
      ["subprocess.run(..., env={'APP_ENV': 'production'})", "custom_env = os.environ.copy(); custom_env['APP_ENV'] = 'production'; subprocess.run(..., env=custom_env)", "os.environ['APP_ENV'] = 'production'; os.environ.clear()", "subprocess.run(..., setenv={'APP_ENV': 'production'})"],
      1,
      "Copying `os.environ.copy()` and updating the copy ensures the child process inherits essential variables (like PATH and SYSTEMROOT) alongside new variables.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "env", "environment-variables"])

add_c(70, "1.4", "input Parameter", "Intermediate",
      "How do you pass standard input data to a command running under `subprocess.run()`?",
      "import subprocess\nres = subprocess.run(['grep', 'error'], input='info: ok\\nerror: bad disk\\n', text=True, capture_output=True)",
      ["input='...'", "stdin_data='...'", "pipe='...'", "feed='...'"],
      0,
      "The `input` parameter feeds a string (if `text=True`) or bytes directly into the child process's stdin stream.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "stdin", "input"])

add_c(71, "1.4", "shutil.which", "Beginner",
      "How should an automation script verify that an external binary (e.g. `docker` or `ffmpeg`) exists before attempting to run it?",
      "import shutil\nexecutable_path = shutil.which('docker')\nif not executable_path:\n    print('Docker is not installed or not in PATH')",
      ["os.path.exists('docker')", "shutil.which('docker')", "subprocess.exists('docker')", "sys.find('docker')"],
      1,
      "`shutil.which(cmd)` checks the system PATH and returns the full path to the executable if found, or `None` if absent.",
      "PCEA-30-01 Block 1.4 - Pre-Flight Tools",
      ["shutil-which", "prerequisites", "executables"])

add_c(72, "1.4", "CalledProcessError", "Intermediate",
      "What attributes does a `CalledProcessError` object have when caught from `subprocess.run(..., check=True)`?",
      "import subprocess\ntry:\n    subprocess.run(['false'], check=True, capture_output=True, text=True)\nexcept subprocess.CalledProcessError as e:\n    print(e.returncode, e.cmd, e.output, e.stderr)",
      ["e.returncode, e.cmd, e.output, e.stderr", "e.status, e.error_message, e.trace", "e.errno, e.strerror, e.filename", "e.code, e.reason, e.details"],
      0,
      "`CalledProcessError` exposes `returncode`, `cmd`, `output` (stdout), and `stderr`, allowing detailed diagnostic reporting on failures.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "called-process-error", "error-handling"])

add_c(73, "1.4", "Redirect to File", "Intermediate",
      "How do you redirect a subprocess's standard output directly into an open file object?",
      "import subprocess\nwith open('output.log', 'w') as f:\n    subprocess.run(['df', '-h'], stdout=f)",
      ["stdout=f", "redirect_to='output.log'", "pipe_file=f", "write_to=f"],
      0,
      "Passing a writable file handle to `stdout=` redirects the process output directly to the file at the OS level, minimizing Python memory consumption.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "redirection", "file-output"])

add_c(74, "1.4", "DEVNULL", "Intermediate",
      "How do you completely discard standard error from a subprocess so it does not clutter the console?",
      "import subprocess\nsubprocess.run(['ping', '-c', '1', '10.0.0.1'], stderr=subprocess.DEVNULL)",
      ["stderr=None", "stderr=subprocess.DEVNULL", "stderr=False", "stderr=0"],
      1,
      "`subprocess.DEVNULL` discards all output written to the stream, equivalent to redirecting to `/dev/null` on Unix or `NUL` on Windows.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "devnull", "redirection"])

add_c(75, "1.4", "Cross-Platform CLI", "Intermediate",
      "When running a shell script on Windows vs Linux, what executable differences should automation scripts anticipate?",
      "# Windows scripts typically end in .bat/.cmd/.ps1 while Linux scripts use bash:\nimport platform, subprocess\ncmd = ['backup.bat'] if platform.system() == 'Windows' else ['./backup.sh']",
      ["Windows does not support file permissions or arguments", "Linux and Windows use different command names, shell binaries, path separators, and executable extensions", "Linux does not support python scripts", "Windows forbids using subprocess.run()"],
      1,
      "Cross-platform scripts must account for differences like `dir` vs `ls`, path separators (`/` vs `\\\\`), and shell interpreters (`cmd.exe`/`PowerShell` vs `/bin/sh`).",
      "PCEA-30-01 Block 1.4 - Cross-Platform Automation",
      ["cross-platform", "windows", "linux"])

add_c(76, "1.4", "Process Piping", "Advanced",
      "How do you pipe the output of one process into the input of another using `subprocess.Popen`?",
      "import subprocess\np1 = subprocess.Popen(['cat', 'names.txt'], stdout=subprocess.PIPE)\np2 = subprocess.Popen(['sort'], stdin=p1.stdout, stdout=subprocess.PIPE, text=True)\np1.stdout.close()\nout, _ = p2.communicate()",
      ["Set p2's stdin to p1.stdout", "Use the '|' operator in subprocess.run() without shell", "Pass pipe=[p1, p2]", "Call p1.connect(p2)"],
      0,
      "Setting `stdin=p1.stdout` binds the output stream of process 1 directly to the input stream of process 2, mimicking a Unix pipeline.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "popen", "piping"])

add_c(77, "1.4", "Child Process Kill", "Intermediate",
      "How can an automation script forcibly terminate an unresponsive child process started with `subprocess.Popen`?",
      "import subprocess, time\nproc = subprocess.Popen(['long_running_task'])\ntime.sleep(2)\nproc.kill()\nproc.wait()",
      ["proc.stop()", "proc.kill()", "proc.exit()", "proc.cancel()"],
      1,
      "`proc.kill()` sends SIGKILL on POSIX or calls TerminateProcess on Windows to forcibly kill the child process immediately.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "kill", "process-management"])

add_c(78, "1.4", "Stderr Separation", "Intermediate",
      "How can you capture stdout and stderr together into a single combined output stream?",
      "import subprocess\nres = subprocess.run(['cmd'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)",
      ["stderr=subprocess.STDOUT", "combine=True", "merge_streams=True", "streams='all'"],
      0,
      "Setting `stderr=subprocess.STDOUT` merges the standard error stream into standard output, preserving chronological order of all console lines.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "stdout", "stderr-merging"])

add_c(79, "1.4", "Non-Zero Exit Handling", "Beginner",
      "What is the return value of `subprocess.run()` when the external program fails with exit code 1?",
      "import subprocess\nres = subprocess.run(['false'])",
      ["It returns None", "It returns a CompletedProcess object with res.returncode == 1", "It crashes the Python interpreter", "It returns False"],
      1,
      "Unless `check=True` is explicitly specified, `subprocess.run()` does not raise an exception on non-zero exit; it simply sets `res.returncode`.",
      "PCEA-30-01 Block 1.4 - subprocess",
      ["subprocess", "completed-process", "returncode"])

add_c(80, "1.4", "Automating Git", "Intermediate",
      "In an automation pipeline that executes `git commit`, what happens if there are no changes staged?",
      "import subprocess\nres = subprocess.run(['git', 'commit', '-m', 'Auto update'], capture_output=True, text=True)",
      ["git raises a Python GitError", "git exits with code 1 (or non-zero) and outputs 'nothing to commit'", "git deletes the repository", "git creates an empty commit automatically without flags"],
      1,
      "Git returns an exit code of 1 when there is nothing to commit. Automated scripts should check if git status is clean or inspect stderr to handle this gracefully.",
      "PCEA-30-01 Block 1.4 - Practical Automation",
      ["git", "automation", "subprocess"])

# ==========================================
# CHAPTER 1.5: Modular Automation Scripting & Exit Codes (Cards 81-100)
# ==========================================
add_c(81, "1.5", "__name__ Guard", "Beginner",
      "What is the primary reason for wrapping automation script logic inside `if __name__ == '__main__':`?",
      "# script.py\ndef run_backup():\n    print('Running backup...')\n\nif __name__ == '__main__':\n    run_backup()",
      ["It accelerates function execution speed", "It allows functions to be imported into other scripts or unit tests without immediately running the script logic", "It prevents Python from compiling bytecode files", "It enforces object-oriented programming rules"],
      1,
      "The `__name__ == '__main__'` guard ensures that the execution block only runs when the script is invoked directly, not when imported as a library module.",
      "PCEA-30-01 Block 1.5 - Module Design",
      ["dunder-name", "main-guard", "modularity"])

add_c(82, "1.5", "sys.exit", "Beginner",
      "What is the effect of calling `sys.exit(1)` inside an automation script?",
      "import sys\nif not is_healthy():\n    sys.exit(1)",
      ["It terminates the Python interpreter and returns exit code 1 to the calling shell or scheduler", "It pauses the script for 1 second", "It reboots the operating system", "It prints '1' to the console and continues running"],
      0,
      "sys.exit(1) raises a `SystemExit(1)` exception which, if uncaught, terminates the interpreter and reports exit status code 1 to the parent shell.",
      "PCEA-30-01 Block 1.5 - sys.exit",
      ["sys-exit", "exit-codes", "process-lifecycle"])

add_c(83, "1.5", "sys.exit String", "Intermediate",
      "What happens if you pass a string argument to `sys.exit('Error: database unreachable')`?",
      "import sys\nsys.exit('Error: database unreachable')",
      ["The script raises a TypeError", "Python prints the string to sys.stderr and exits with code 1", "The string is saved to a file named 'sys.exit'", "The script continues running"],
      1,
      "If a string is passed to sys.exit(), Python prints the string to stderr and exits with a non-zero exit code of 1.",
      "PCEA-30-01 Block 1.5 - sys.exit",
      ["sys-exit", "stderr", "error-reporting"])

add_c(84, "1.5", "Top-Level Exception Handling", "Intermediate",
      "What is the recommended practice for handling unexpected exceptions at the top level of an automation entry point?",
      "import sys, logging\n\ndef main():\n    try:\n        run_pipeline()\n        return 0\n    except Exception as e:\n        logging.critical('Pipeline failed unexpectedly: %s', e, exc_info=True)\n        return 1\n\nif __name__ == '__main__':\n    sys.exit(main())",
      ["Swallow all exceptions silently with pass", "Log the full traceback to an audit file, alert operators, and exit with a non-zero code", "Re-run the main function in an infinite loop", "Delete the log files to hide the failure"],
      1,
      "Top-level handlers should log the full traceback with timestamps to stderr/loggers and exit with a clean non-zero status so monitoring systems trigger alerts.",
      "PCEA-30-01 Block 1.5 - Error Handling",
      ["main-pattern", "exception-handling", "logging"])

add_c(85, "1.5", "Standard Streams", "Beginner",
      "Where should automated error and warning messages be directed versus normal data output?",
      "import sys\nsys.stdout.write('Normal output data\\n')\nsys.stderr.write('Warning: Disk space low\\n')",
      ["All messages must be written to sys.stdin", "Normal data goes to sys.stdout; errors and warnings go to sys.stderr", "All output must go to a web socket", "Errors must only be printed to the screen, never to files"],
      1,
      "Separating data (stdout) from operational diagnostics (stderr) allows downstream automation tools to pipe data cleanly without corrupting it with error messages.",
      "PCEA-30-01 Block 1.5 - Streams",
      ["stdout", "stderr", "unix-philosophy"])

add_c(86, "1.5", "Signal Handling", "Advanced",
      "How can an automation script intercept a `Ctrl+C` interrupt (SIGINT) to clean up temporary files before terminating?",
      "import signal, sys\n\ndef cleanup_handler(signum, frame):\n    print('Received interrupt, cleaning temp files...')\n    cleanup_temp_files()\n    sys.exit(130)\n\nsignal.signal(signal.SIGINT, cleanup_handler)",
      ["Use signal.signal(signal.SIGINT, handler)", "Wrap every line of code in time.sleep()", "Use os.register_interrupt()", "Set sys.ignore_keyboard_interrupt = True"],
      0,
      "Registering a signal handler with `signal.signal(signal.SIGINT, ...)` allows graceful shutdown, closing database connections and removing temporary files on interruption.",
      "PCEA-30-01 Block 1.5 - Signal Handling",
      ["signals", "sigint", "graceful-shutdown"])

add_c(87, "1.5", "Exit Code 130", "Intermediate",
      "In Unix convention, why does an application terminated by `Ctrl+C` (SIGINT) typically return exit code 130?",
      "# Unix convention: Exit Code = 128 + Signal Number\n# SIGINT is signal 2: 128 + 2 = 130",
      ["It represents 130 bytes of memory remaining", "Standard Unix shells calculate exit status for fatal signals as 128 + signal_number (128 + 2 = 130)", "It is an arbitrary random number chosen by Linux", "It indicates that port 130 was closed"],
      1,
      "POSIX shells calculate the exit code of processes killed by signals as 128 + N. For SIGINT (signal 2), the exit code is 130.",
      "PCEA-30-01 Block 1.5 - Exit Codes",
      ["posix", "sigint", "exit-codes"])

add_c(88, "1.5", "Project Layout", "Beginner",
      "Which standard directory layout is recommended for a scalable Python automation project?",
      "# Standard structure:\n# my_automation/\n# ├── scripts/ (entry-point scripts)\n# ├── src/ or my_pkg/ (reusable libraries)\n# ├── tests/ (unit tests)\n# ├── requirements.txt\n# └── README.md",
      ["Putting 10,000 lines of code into a single file on the Desktop", "Organizing into modular packages with separate entry points, libraries, tests, and configuration", "Storing all code directly in the Python system site-packages folder", "Using only .txt files instead of .py files"],
      1,
      "Separating business logic into an importable library package and keeping CLI runners lightweight improves testability and maintainability.",
      "PCEA-30-01 Block 1.5 - Project Organization",
      ["project-structure", "packaging", "best-practices"])

add_c(89, "1.5", "Clean main() Pattern", "Intermediate",
      "What is the benefit of having `main()` return an integer exit code rather than calling `sys.exit()` directly inside functions?",
      "def main() -> int:\n    if not step1():\n        return 1\n    return 0\n\nif __name__ == '__main__':\n    sys.exit(main())",
      ["It makes main() easily testable by asserting its integer return value in automated test suites", "It makes the script 5x faster", "It converts the script into an async coroutine", "It allows main() to accept unlimited arguments"],
      0,
      "Returning exit codes instead of calling `sys.exit()` makes functions unit-testable without having to intercept or mock `SystemExit` exceptions.",
      "PCEA-30-01 Block 1.5 - Testing & Modularity",
      ["testability", "main-function", "architecture"])

add_c(90, "1.5", "Configurable Verbosity", "Intermediate",
      "How is logging verbosity typically controlled via command-line flags in an automation tool?",
      "import argparse, logging\nparser = argparse.ArgumentParser()\nparser.add_argument('-v', '--verbose', action='store_true')\nargs = parser.parse_args()\n\nlevel = logging.DEBUG if args.verbose else logging.INFO\nlogging.basicConfig(level=level)",
      ["By switching logging level between DEBUG and INFO based on args.verbose", "By deleting print statements from the file at runtime", "By adjusting CPU clock speed", "By restarting the operating system"],
      0,
      "A verbose flag dynamically toggles the root logger level between INFO/WARNING (standard summary output) and DEBUG (detailed wire and diagnostic tracing).",
      "PCEA-30-01 Block 1.5 - Logging & CLI",
      ["logging", "verbosity", "cli"])

add_c(91, "1.5", "Dependency Validation", "Intermediate",
      "How can an automation script check that installed third-party package versions meet minimum requirements?",
      "import importlib.metadata\nfrom packaging.version import parse\n\nversion = importlib.metadata.version('requests')\nif parse(version) < parse('2.28.0'):\n    raise SystemExit('Outdated requests library!')",
      ["Using importlib.metadata.version() and version comparison", "Checking sys.version_info", "Reading the CPU model name", "Counting the lines of code in requests"],
      0,
      "`importlib.metadata.version('pkg')` retrieves the installed distribution version string at runtime for dependency validation.",
      "PCEA-30-01 Block 1.5 - Dependencies",
      ["importlib", "dependencies", "validation"])

add_c(92, "1.5", "Context Managers", "Intermediate",
      "Why should automation scripts use context managers (`with` statements) for resources like files, locks, and network sessions?",
      "with open('report.txt', 'w') as f:\n    f.write('Summary results')\n# File is automatically and reliably closed even if an exception occurs",
      ["To encrypt the data automatically", "To guarantee proper resource cleanup and closure even if unexpected exceptions are raised", "To bypass memory limitations", "To speed up disk write operations"],
      1,
      "Context managers implement `__enter__` and `__exit__` protocols, ensuring reliable cleanup of file handles, sockets, and lock mutexes under all circumstances.",
      "PCEA-30-01 Block 1.5 - Context Managers",
      ["with-statement", "resource-management", "clean-code"])

add_c(93, "1.5", "File Locking", "Advanced",
      "Why might an automation script implement a file lock (e.g., using `fcntl` on POSIX or `msvcrt` on Windows)?",
      "# Prevent overlapping cron jobs:\nimport fcntl\nlock_file = open('/tmp/backup.lock', 'w')\ntry:\n    fcntl.flock(lock_file, fcntl.LOCK_EX | fcntl.LOCK_NB)\nexcept BlockingIOError:\n    raise SystemExit('Another instance is already running!')",
      ["To prevent duplicate concurrent instances of the script from executing simultaneously and conflicting", "To make the file read-only forever", "To prevent users from opening the terminal", "To hide the file from the operating system"],
      0,
      "Lock files prevent overlapping execution of scheduled tasks when a previous run takes longer than the scheduling interval to finish.",
      "PCEA-30-01 Block 1.5 - Concurrency & Locking",
      ["concurrency", "file-locking", "cron-safety"])

add_c(94, "1.5", "Shebang Line", "Beginner",
      "What is the purpose of the first line `#!/usr/bin/env python3` in an automation script?",
      "#!/usr/bin/env python3\nimport sys\nprint('Running script directly!')",
      ["It defines the script author", "It informs POSIX operating systems which interpreter to use when executing the file directly as a binary", "It disables all Python syntax errors", "It sets the terminal background color to black"],
      1,
      "The shebang (`#!`) directs the operating system's program loader to execute the script using the `python3` binary found in the user's active PATH.",
      "PCEA-30-01 Block 1.5 - Shebang",
      ["shebang", "posix", "executable-scripts"])

add_c(95, "1.5", "File Permissions", "Beginner",
      "On Linux/macOS, what command makes a Python automation script directly executable from the terminal (`./script.py`)?",
      "# Terminal shell command:\nchmod +x script.py",
      ["chmod +x script.py", "chown root script.py", "python --make-exec script.py", "set-exec script.py"],
      0,
      "`chmod +x script.py` adds execute permissions, allowing direct execution as `./script.py` when combined with a valid shebang line.",
      "PCEA-30-01 Block 1.5 - File Permissions",
      ["chmod", "posix", "executable"])

add_c(96, "1.5", "Dry-Run Guard", "Intermediate",
      "How should a function that performs destructive actions respect a dry-run flag?",
      "def archive_directory(src, dry_run=False):\n    if dry_run:\n        print(f'[DRY-RUN] Would archive {src}')\n        return\n    # actual archiving logic here",
      ["Log the action and return early without executing the actual mutation", "Delete the files immediately anyway", "Throw a FatalError exception", "Prompt the user for a credit card"],
      0,
      "A dry-run check logs the intended action and parameters and returns early, preventing side-effects while exercising path resolution logic.",
      "PCEA-30-01 Block 1.5 - Safe Automation",
      ["dry-run", "defensive-coding", "safety"])

add_c(97, "1.5", "Log Rotation", "Intermediate",
      "Why must automated scripts that write log files implement log rotation (e.g. `RotatingFileHandler`)?",
      "# Logging configuration:\nfrom logging.handlers import RotatingFileHandler\nhandler = RotatingFileHandler('app.log', maxBytes=10_000_000, backupCount=5)",
      ["To prevent log files from growing boundlessly and filling up the server disk", "To translate logs into French", "To compress logs into executable binaries", "Because Python can only open files under 1 KB"],
      0,
      "Unbounded log files can exhaust filesystem storage, causing crashes and system outages. Log rotation limits file size and preserves a fixed number of backups.",
      "PCEA-30-01 Block 1.5 - Log Management",
      ["logging", "log-rotation", "disk-management"])

add_c(98, "1.5", "Sensible Defaults", "Beginner",
      "What is the principle of 'sensible defaults' in automation tool design?",
      "# Designing user friendly parameters:\n# If no --timeout is passed, default to 30 seconds rather than hanging or requiring manual input every time",
      ["Every parameter must be strictly required on every execution", "Scripts should work out-of-the-box with safe, reasonable configurations without forcing users to pass dozens of flags", "All defaults must be set to 0 or None", "Defaults are only allowed in object-oriented classes"],
      1,
      "Sensible defaults allow scripts to run smoothly in standard environments while still offering flags for customized behavior when necessary.",
      "PCEA-30-01 Block 1.5 - Script Design",
      ["defaults", "usability", "cli"])

add_c(99, "1.5", "Clean Stdout for Piping", "Intermediate",
      "When designing a CLI tool meant to pipe output to other programs (e.g. `python get_ids.py | xargs ...`), what must be avoided?",
      "# Bad for piping:\n# print('Starting script...')\n# print('Fetching IDs...')\n# print(12345)\n# print('Done!')",
      ["Writing decorative banners or conversational status messages to stdout instead of stderr", "Outputting newline characters", "Using Python 3", "Returning exit code 0 on success"],
      0,
      "Informational banners and status updates should be directed to `sys.stderr` so that `sys.stdout` remains pristine machine-readable data suitable for piping.",
      "PCEA-30-01 Block 1.5 - CLI Design",
      ["piping", "stdout", "unix-philosophy"])

add_c(100, "1.5", "Healthcheck Endpoint", "Intermediate",
      "In an automated microservice or worker daemon, what is the role of a `/health` or ping check?",
      "# Simple automation health check probe:\ndef healthcheck():\n    db_ok = check_db()\n    disk_ok = check_disk_space()\n    return {'status': 'healthy' if (db_ok and disk_ok) else 'unhealthy'}",
      ["To monitor and report that the automated service is running, responsive, and has healthy dependencies", "To reboot the server every 5 minutes", "To clear browser cookies", "To download new wallpaper images"],
      0,
      "Healthchecks enable external orchestrators and monitoring tools to detect failures, report status, and automatically restart failing automation containers.",
      "PCEA-30-01 Block 1.5 - Monitoring",
      ["healthcheck", "monitoring", "operational-readiness"])

assert len(cards) == 100, f"Expected 100 cards, got {len(cards)}"

def to_ts_card(c):
    return (
        "  {\n"
        f"    id: {json.dumps(c['id'])},\n"
        f"    track: 'pcea',\n"
        f"    section: {json.dumps(c['section'])},\n"
        f"    chapter: {json.dumps(c['chapter'])},\n"
        f"    category: {json.dumps(c['category'])},\n"
        f"    difficulty: {json.dumps(c['difficulty'])},\n"
        f"    question: {json.dumps(c['question'])},\n"
        f"    codeSnippet: {json.dumps(c['codeSnippet'])},\n"
        f"    options: [\n" + ",\n".join(f"      {json.dumps(opt)}" for opt in c['options']) + "\n    ],\n"
        f"    correctAnswer: {c['correctAnswer']},\n"
        f"    explanation: {json.dumps(c['explanation'])},\n"
        f"    officialRef: {json.dumps(c['officialRef'])},\n"
        f"    tags: {json.dumps(c['tags'])}\n"
        "  }"
    )

def write_ts_file(filepath, var_name, cards_list):
    content = "import { Flashcard } from '../types';\n\n"
    content += f"export const {var_name}: Flashcard[] = [\n"
    content += ",\n".join(to_ts_card(c) for c in cards_list)
    content += "\n];\n"
    with open(filepath, "w") as f:
        f.write(content)
    print(f"Wrote {len(cards_list)} cards to {filepath}")

write_ts_file("src/data/pceaSection1CardsPart1.ts", "pceaSection1CardsPart1", cards[:50])
write_ts_file("src/data/pceaSection1CardsPart2.ts", "pceaSection1CardsPart2", cards[50:])

with open("src/data/pceaSection1Flashcards.ts", "w") as f:
    f.write("""import { Flashcard } from '../types';
import { pceaSection1CardsPart1 } from './pceaSection1CardsPart1';
import { pceaSection1CardsPart2 } from './pceaSection1CardsPart2';

export const pceaSection1Flashcards: Flashcard[] = [
  ...pceaSection1CardsPart1,
  ...pceaSection1CardsPart2,
];
""")
print("Wrote pceaSection1Flashcards.ts successfully!")
