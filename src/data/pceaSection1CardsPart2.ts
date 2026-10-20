import { Flashcard } from '../types';

export const pceaSection1CardsPart2: Flashcard[] = [
  {
    id: "pcea-1-051",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "Boolean Env Vars",
    difficulty: "Intermediate",
    question: "What is the recommended pattern to parse a boolean flag from an environment variable?",
    codeSnippet: "import os\n# Parsing DEBUG flag from env:\nis_debug = os.environ.get('DEBUG', '').lower() in ('1', 'true', 'yes')",
    options: [
      "bool(os.environ.get('DEBUG'))",
      "os.environ.get('DEBUG', '').lower() in ('1', 'true', 'yes')",
      "os.environ.get('DEBUG') is True",
      "int(os.environ.get('DEBUG')) == 1"
    ],
    correctAnswer: 1,
    explanation: "bool('False') in Python evaluates to True because non-empty strings are truthy. Explicitly checking for strings like ('1', 'true', 'yes') is the correct pattern.",
    officialRef: "PCEA-30-01 Block 1.3 - Environment Variables",
    tags: ["boolean-parsing", "os-environ", "gotchas"]
  },
  {
    id: "pcea-1-052",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "Config Parser",
    difficulty: "Intermediate",
    question: "Which standard library module is designed to read `.ini` style configuration files for automation scripts?",
    codeSnippet: "# Reading config.ini:\n# [database]\n# host = localhost\n# port = 5432",
    options: [
      "ini_reader",
      "configparser",
      "settings",
      "json_config"
    ],
    correctAnswer: 1,
    explanation: "`configparser` parses INI-style configuration files organized into `[sections]` with `key = value` pairs.",
    officialRef: "PCEA-30-01 Block 1.3 - Configuration Management",
    tags: ["configparser", "ini-files", "standard-library"]
  },
  {
    id: "pcea-1-053",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "Secrets Management",
    difficulty: "Beginner",
    question: "Why should production API tokens and database passwords NEVER be hardcoded into Python automation scripts?",
    codeSnippet: "# Bad practice: API_KEY = 'super_secret_xyz123'",
    options: [
      "Hardcoded secrets get committed to version control, creating severe security vulnerabilities",
      "Hardcoded strings cause MemoryError in Python",
      "Python automatically deletes hardcoded passwords at runtime",
      "Hardcoded keys slow down network bandwidth"
    ],
    correctAnswer: 0,
    explanation: "Hardcoding secrets risks exposing them in source repositories, logs, or shared code. Secrets should be injected via environment variables or secret vaults.",
    officialRef: "PCEA-30-01 Block 1.3 - Secrets Management",
    tags: ["security", "secrets", "best-practices"]
  },
  {
    id: "pcea-1-054",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "os.getenv",
    difficulty: "Beginner",
    question: "What does `os.getenv('TIMEOUT', '30')` return if the `TIMEOUT` environment variable is not defined?",
    codeSnippet: "import os\nval = os.getenv('TIMEOUT', '30')",
    options: [
      "None",
      "'30'",
      "30",
      "KeyError"
    ],
    correctAnswer: 1,
    explanation: "`os.getenv(key, default)` is a convenience helper in the `os` module that returns the specified default string if the environment variable is not found.",
    officialRef: "PCEA-30-01 Block 1.3 - Environment Variables",
    tags: ["os-getenv", "defaults", "environment-variables"]
  },
  {
    id: "pcea-1-055",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "Path Environment",
    difficulty: "Intermediate",
    question: "What role does the `PATH` environment variable play when an automation script invokes external commands?",
    codeSnippet: "import shutil\n# How does shutil.which('curl') locate the binary?\npath = shutil.which('curl')",
    options: [
      "It defines the directories searched in order by the OS to find executable binaries",
      "It specifies the Python class inheritance tree",
      "It lists the available network IP addresses",
      "It records CPU temperature limits"
    ],
    correctAnswer: 0,
    explanation: "The PATH environment variable contains a colon- (POSIX) or semicolon- (Windows) separated list of directories where the OS searches for command executables.",
    officialRef: "PCEA-30-01 Block 1.3 - Environment Variables",
    tags: ["path", "executables", "os-environ"]
  },
  {
    id: "pcea-1-056",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "Config Precedence",
    difficulty: "Advanced",
    question: "What is the industry-standard order of configuration precedence for automation tools (from highest to lowest priority)?",
    codeSnippet: "# Where should settings take precedence?",
    options: [
      "Default values -> Config file -> Environment variables -> CLI arguments",
      "CLI arguments -> Environment variables -> Config file -> Default values",
      "Config file -> CLI arguments -> Default values -> Environment variables",
      "Environment variables -> Default values -> CLI arguments -> Config file"
    ],
    correctAnswer: 1,
    explanation: "Command-line flags override environment variables, which override file-based configuration settings, which in turn override hardcoded internal defaults.",
    officialRef: "PCEA-30-01 Block 1.3 - Configuration Precedence",
    tags: ["precedence", "cli", "configuration"]
  },
  {
    id: "pcea-1-057",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "Virtualenv Upgrades",
    difficulty: "Beginner",
    question: "How do you upgrade `pip` to the latest version within an active virtual environment?",
    codeSnippet: "# Terminal command:",
    options: [
      "python -m pip install --upgrade pip",
      "pip update all",
      "pip install pip --force-fresh",
      "python --upgrade-pip"
    ],
    correctAnswer: 0,
    explanation: "`python -m pip install --upgrade pip` safely upgrades pip using the active environment's Python interpreter.",
    officialRef: "PCEA-30-01 Block 1.3 - Pip & Dependencies",
    tags: ["pip", "upgrade", "virtual-environments"]
  },
  {
    id: "pcea-1-058",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "os.unsetenv",
    difficulty: "Intermediate",
    question: "How do you remove an environment variable from the current Python process?",
    codeSnippet: "import os\nos.environ['TEMP_KEY'] = 'test'\n# Remove it:",
    options: [
      "del os.environ['TEMP_KEY']",
      "os.environ.remove('TEMP_KEY')",
      "os.clear('TEMP_KEY')",
      "os.environ['TEMP_KEY'] = None"
    ],
    correctAnswer: 0,
    explanation: "`del os.environ[key]` or `os.environ.pop(key, None)` deletes the variable from the process environment dictionary and unsets it for child processes.",
    officialRef: "PCEA-30-01 Block 1.3 - Environment Variables",
    tags: ["os-environ", "del", "cleanup"]
  },
  {
    id: "pcea-1-059",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "Python Path",
    difficulty: "Intermediate",
    question: "Which environment variable adds extra directories to Python's module search path `sys.path`?",
    codeSnippet: "# Setting search path before running script:\n# export ???=/opt/custom_libs",
    options: [
      "PYTHONHOME",
      "PYTHONPATH",
      "PYTHONBIN",
      "PYTHONDONTWRITEBYTECODE"
    ],
    correctAnswer: 1,
    explanation: "PYTHONPATH specifies additional directories that Python prepends to `sys.path` when resolving import statements.",
    officialRef: "PCEA-30-01 Block 1.3 - Python Environment",
    tags: ["pythonpath", "sys-path", "imports"]
  },
  {
    id: "pcea-1-060",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.3",
    category: "pip install -e",
    difficulty: "Intermediate",
    question: "What does `pip install -e .` do when developing an automation package?",
    codeSnippet: "# Inside repository root with pyproject.toml / setup.py:\npip install -e .",
    options: [
      "Installs package in editable mode so code changes take effect immediately without reinstalling",
      "Installs package encrypted mode",
      "Installs package with enterprise debug symbols",
      "Erases the existing virtual environment"
    ],
    correctAnswer: 0,
    explanation: "`-e` or `--editable` links the source directory into the virtual environment, allowing developers to test and run scripts as packages while modifying code.",
    officialRef: "PCEA-30-01 Block 1.3 - Pip & Dependencies",
    tags: ["pip", "editable", "packaging"]
  },
  {
    id: "pcea-1-061",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "subprocess.run",
    difficulty: "Beginner",
    question: "Why is `subprocess.run()` preferred over `os.system()` for executing external commands?",
    codeSnippet: "import subprocess\nresult = subprocess.run(['git', 'status'], capture_output=True, text=True)",
    options: [
      "os.system() cannot run on 64-bit systems",
      "subprocess.run() provides secure argument escaping, capture of stdout/stderr, timeouts, and rich return objects",
      "os.system() was completely removed from Python 3",
      "subprocess.run() automatically translates commands into assembly language"
    ],
    correctAnswer: 1,
    explanation: "subprocess.run() provides granular control over inputs, outputs, error handling, return codes, and process timeouts without invoking an unsafe shell by default.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "os-system", "security"]
  },
  {
    id: "pcea-1-062",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "shell=False Security",
    difficulty: "Intermediate",
    question: "Why is passing command arguments as a list with `shell=False` safer than passing a concatenated string with `shell=True`?",
    codeSnippet: "import subprocess\nuser_input = 'file.txt; rm -rf /'\n# Safe approach:\nsubprocess.run(['cat', user_input])",
    options: [
      "It prevents shell command injection vulnerabilities by passing arguments directly to the OS exec system call",
      "It allows the script to run without Python installed",
      "It compresses the command arguments into a zip archive",
      "It runs the command as superuser automatically"
    ],
    correctAnswer: 0,
    explanation: "Passing arguments as a list with shell=False avoids launching a shell interpreter, preventing command chaining and shell injection attacks.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["security", "command-injection", "shell-false"]
  },
  {
    id: "pcea-1-063",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "capture_output",
    difficulty: "Beginner",
    question: "How do you capture standard output and standard error as strings from `subprocess.run()`?",
    codeSnippet: "import subprocess\n# Execute and capture output as text:\nresult = subprocess.run(['uptime'], capture_output=True, text=True)",
    options: [
      "result.read()",
      "result.stdout",
      "result.output()",
      "result.console"
    ],
    correctAnswer: 1,
    explanation: "When `capture_output=True` and `text=True` are set, `result.stdout` contains the command's standard output decoded as a Python string.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "capture-output", "stdout"]
  },
  {
    id: "pcea-1-064",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "text vs bytes",
    difficulty: "Intermediate",
    question: "What is the type of `result.stdout` if `capture_output=True` is passed WITHOUT `text=True` or `encoding`?",
    codeSnippet: "import subprocess\nres = subprocess.run(['echo', 'hello'], capture_output=True)\nprint(type(res.stdout))",
    options: [
      "str",
      "bytes",
      "bytearray",
      "int"
    ],
    correctAnswer: 1,
    explanation: "By default, subprocess captures streams as raw binary `bytes`. Specifying `text=True` (or `universal_newlines=True`) decodes them to `str` using the system encoding.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "bytes", "decoding"]
  },
  {
    id: "pcea-1-065",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "returncode",
    difficulty: "Beginner",
    question: "How do you check if an external command completed successfully via its `CompletedProcess` object?",
    codeSnippet: "import subprocess\nres = subprocess.run(['ping', '-c', '1', '127.0.0.1'], capture_output=True)\n# Check success:",
    options: [
      "res.status == 'OK'",
      "res.returncode == 0",
      "res.exit == True",
      "res.success()"
    ],
    correctAnswer: 1,
    explanation: "`result.returncode` stores the exit code returned by the child process; a returncode of `0` denotes success.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "returncode", "exit-codes"]
  },
  {
    id: "pcea-1-066",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "check=True",
    difficulty: "Intermediate",
    question: "What does passing `check=True` do in `subprocess.run()`?",
    codeSnippet: "import subprocess\nsubprocess.run(['ls', '/nonexistent_folder'], check=True)",
    options: [
      "Checks the syntax of the command without running it",
      "Automatically raises a subprocess.CalledProcessError if the command exits with a non-zero code",
      "Forces the command to run with root permissions",
      "Repeats the command until it succeeds"
    ],
    correctAnswer: 1,
    explanation: "`check=True` instructs subprocess.run() to raise a `CalledProcessError` if the executed command exits with a non-zero return code.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "check-true", "called-process-error"]
  },
  {
    id: "pcea-1-067",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "TimeoutExpired",
    difficulty: "Intermediate",
    question: "How do you prevent a subprocess command from hanging indefinitely if an external server stops responding?",
    codeSnippet: "import subprocess\ntry:\n    subprocess.run(['curl', 'https://api.internal'], timeout=5)\nexcept subprocess.TimeoutExpired:\n    print('Command timed out!')",
    options: [
      "Set timeout=5 and catch subprocess.TimeoutExpired",
      "Set max_seconds=5 on the Python interpreter",
      "Run the script inside a threading.Timer",
      "Use time.sleep(5) before the command"
    ],
    correctAnswer: 0,
    explanation: "Passing `timeout=N` raises `subprocess.TimeoutExpired` if the process runs longer than N seconds, allowing clean cancellation and logging.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "timeout", "timeout-expired"]
  },
  {
    id: "pcea-1-068",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "cwd Parameter",
    difficulty: "Intermediate",
    question: "How can you execute a command inside a specific directory without changing Python's global working directory?",
    codeSnippet: "import subprocess\n# Run 'npm install' inside /opt/app:\nsubprocess.run(['npm', 'install'], cwd='/opt/app')",
    options: [
      "subprocess.run(['cd', '/opt/app', '&&', 'npm', 'install'])",
      "subprocess.run(['npm', 'install'], cwd='/opt/app')",
      "os.chdir('/opt/app') then subprocess.run(['npm', 'install'])",
      "subprocess.run(['npm', 'install'], dir='/opt/app')"
    ],
    correctAnswer: 1,
    explanation: "The `cwd` parameter sets the child process's working directory independently without altering the parent Python process's current directory.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "cwd", "working-directory"]
  },
  {
    id: "pcea-1-069",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "env Parameter",
    difficulty: "Advanced",
    question: "How do you pass a customized environment dictionary to a subprocess while retaining existing system variables?",
    codeSnippet: "import os, subprocess\ncustom_env = os.environ.copy()\ncustom_env['APP_ENV'] = 'production'\nsubprocess.run(['python', 'deploy.py'], env=custom_env)",
    options: [
      "subprocess.run(..., env={'APP_ENV': 'production'})",
      "custom_env = os.environ.copy(); custom_env['APP_ENV'] = 'production'; subprocess.run(..., env=custom_env)",
      "os.environ['APP_ENV'] = 'production'; os.environ.clear()",
      "subprocess.run(..., setenv={'APP_ENV': 'production'})"
    ],
    correctAnswer: 1,
    explanation: "Copying `os.environ.copy()` and updating the copy ensures the child process inherits essential variables (like PATH and SYSTEMROOT) alongside new variables.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "env", "environment-variables"]
  },
  {
    id: "pcea-1-070",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "input Parameter",
    difficulty: "Intermediate",
    question: "How do you pass standard input data to a command running under `subprocess.run()`?",
    codeSnippet: "import subprocess\nres = subprocess.run(['grep', 'error'], input='info: ok\\nerror: bad disk\\n', text=True, capture_output=True)",
    options: [
      "input='...'",
      "stdin_data='...'",
      "pipe='...'",
      "feed='...'"
    ],
    correctAnswer: 0,
    explanation: "The `input` parameter feeds a string (if `text=True`) or bytes directly into the child process's stdin stream.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "stdin", "input"]
  },
  {
    id: "pcea-1-071",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "shutil.which",
    difficulty: "Beginner",
    question: "How should an automation script verify that an external binary (e.g. `docker` or `ffmpeg`) exists before attempting to run it?",
    codeSnippet: "import shutil\nexecutable_path = shutil.which('docker')\nif not executable_path:\n    print('Docker is not installed or not in PATH')",
    options: [
      "os.path.exists('docker')",
      "shutil.which('docker')",
      "subprocess.exists('docker')",
      "sys.find('docker')"
    ],
    correctAnswer: 1,
    explanation: "`shutil.which(cmd)` checks the system PATH and returns the full path to the executable if found, or `None` if absent.",
    officialRef: "PCEA-30-01 Block 1.4 - Pre-Flight Tools",
    tags: ["shutil-which", "prerequisites", "executables"]
  },
  {
    id: "pcea-1-072",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "CalledProcessError",
    difficulty: "Intermediate",
    question: "What attributes does a `CalledProcessError` object have when caught from `subprocess.run(..., check=True)`?",
    codeSnippet: "import subprocess\ntry:\n    subprocess.run(['false'], check=True, capture_output=True, text=True)\nexcept subprocess.CalledProcessError as e:\n    print(e.returncode, e.cmd, e.output, e.stderr)",
    options: [
      "e.returncode, e.cmd, e.output, e.stderr",
      "e.status, e.error_message, e.trace",
      "e.errno, e.strerror, e.filename",
      "e.code, e.reason, e.details"
    ],
    correctAnswer: 0,
    explanation: "`CalledProcessError` exposes `returncode`, `cmd`, `output` (stdout), and `stderr`, allowing detailed diagnostic reporting on failures.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "called-process-error", "error-handling"]
  },
  {
    id: "pcea-1-073",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "Redirect to File",
    difficulty: "Intermediate",
    question: "How do you redirect a subprocess's standard output directly into an open file object?",
    codeSnippet: "import subprocess\nwith open('output.log', 'w') as f:\n    subprocess.run(['df', '-h'], stdout=f)",
    options: [
      "stdout=f",
      "redirect_to='output.log'",
      "pipe_file=f",
      "write_to=f"
    ],
    correctAnswer: 0,
    explanation: "Passing a writable file handle to `stdout=` redirects the process output directly to the file at the OS level, minimizing Python memory consumption.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "redirection", "file-output"]
  },
  {
    id: "pcea-1-074",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "DEVNULL",
    difficulty: "Intermediate",
    question: "How do you completely discard standard error from a subprocess so it does not clutter the console?",
    codeSnippet: "import subprocess\nsubprocess.run(['ping', '-c', '1', '10.0.0.1'], stderr=subprocess.DEVNULL)",
    options: [
      "stderr=None",
      "stderr=subprocess.DEVNULL",
      "stderr=False",
      "stderr=0"
    ],
    correctAnswer: 1,
    explanation: "`subprocess.DEVNULL` discards all output written to the stream, equivalent to redirecting to `/dev/null` on Unix or `NUL` on Windows.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "devnull", "redirection"]
  },
  {
    id: "pcea-1-075",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "Cross-Platform CLI",
    difficulty: "Intermediate",
    question: "When running a shell script on Windows vs Linux, what executable differences should automation scripts anticipate?",
    codeSnippet: "# Windows scripts typically end in .bat/.cmd/.ps1 while Linux scripts use bash:\nimport platform, subprocess\ncmd = ['backup.bat'] if platform.system() == 'Windows' else ['./backup.sh']",
    options: [
      "Windows does not support file permissions or arguments",
      "Linux and Windows use different command names, shell binaries, path separators, and executable extensions",
      "Linux does not support python scripts",
      "Windows forbids using subprocess.run()"
    ],
    correctAnswer: 1,
    explanation: "Cross-platform scripts must account for differences like `dir` vs `ls`, path separators (`/` vs `\\\\`), and shell interpreters (`cmd.exe`/`PowerShell` vs `/bin/sh`).",
    officialRef: "PCEA-30-01 Block 1.4 - Cross-Platform Automation",
    tags: ["cross-platform", "windows", "linux"]
  },
  {
    id: "pcea-1-076",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "Process Piping",
    difficulty: "Advanced",
    question: "How do you pipe the output of one process into the input of another using `subprocess.Popen`?",
    codeSnippet: "import subprocess\np1 = subprocess.Popen(['cat', 'names.txt'], stdout=subprocess.PIPE)\np2 = subprocess.Popen(['sort'], stdin=p1.stdout, stdout=subprocess.PIPE, text=True)\np1.stdout.close()\nout, _ = p2.communicate()",
    options: [
      "Set p2's stdin to p1.stdout",
      "Use the '|' operator in subprocess.run() without shell",
      "Pass pipe=[p1, p2]",
      "Call p1.connect(p2)"
    ],
    correctAnswer: 0,
    explanation: "Setting `stdin=p1.stdout` binds the output stream of process 1 directly to the input stream of process 2, mimicking a Unix pipeline.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "popen", "piping"]
  },
  {
    id: "pcea-1-077",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "Child Process Kill",
    difficulty: "Intermediate",
    question: "How can an automation script forcibly terminate an unresponsive child process started with `subprocess.Popen`?",
    codeSnippet: "import subprocess, time\nproc = subprocess.Popen(['long_running_task'])\ntime.sleep(2)\nproc.kill()\nproc.wait()",
    options: [
      "proc.stop()",
      "proc.kill()",
      "proc.exit()",
      "proc.cancel()"
    ],
    correctAnswer: 1,
    explanation: "`proc.kill()` sends SIGKILL on POSIX or calls TerminateProcess on Windows to forcibly kill the child process immediately.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "kill", "process-management"]
  },
  {
    id: "pcea-1-078",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "Stderr Separation",
    difficulty: "Intermediate",
    question: "How can you capture stdout and stderr together into a single combined output stream?",
    codeSnippet: "import subprocess\nres = subprocess.run(['cmd'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)",
    options: [
      "stderr=subprocess.STDOUT",
      "combine=True",
      "merge_streams=True",
      "streams='all'"
    ],
    correctAnswer: 0,
    explanation: "Setting `stderr=subprocess.STDOUT` merges the standard error stream into standard output, preserving chronological order of all console lines.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "stdout", "stderr-merging"]
  },
  {
    id: "pcea-1-079",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "Non-Zero Exit Handling",
    difficulty: "Beginner",
    question: "What is the return value of `subprocess.run()` when the external program fails with exit code 1?",
    codeSnippet: "import subprocess\nres = subprocess.run(['false'])",
    options: [
      "It returns None",
      "It returns a CompletedProcess object with res.returncode == 1",
      "It crashes the Python interpreter",
      "It returns False"
    ],
    correctAnswer: 1,
    explanation: "Unless `check=True` is explicitly specified, `subprocess.run()` does not raise an exception on non-zero exit; it simply sets `res.returncode`.",
    officialRef: "PCEA-30-01 Block 1.4 - subprocess",
    tags: ["subprocess", "completed-process", "returncode"]
  },
  {
    id: "pcea-1-080",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.4",
    category: "Automating Git",
    difficulty: "Intermediate",
    question: "In an automation pipeline that executes `git commit`, what happens if there are no changes staged?",
    codeSnippet: "import subprocess\nres = subprocess.run(['git', 'commit', '-m', 'Auto update'], capture_output=True, text=True)",
    options: [
      "git raises a Python GitError",
      "git exits with code 1 (or non-zero) and outputs 'nothing to commit'",
      "git deletes the repository",
      "git creates an empty commit automatically without flags"
    ],
    correctAnswer: 1,
    explanation: "Git returns an exit code of 1 when there is nothing to commit. Automated scripts should check if git status is clean or inspect stderr to handle this gracefully.",
    officialRef: "PCEA-30-01 Block 1.4 - Practical Automation",
    tags: ["git", "automation", "subprocess"]
  },
  {
    id: "pcea-1-081",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "__name__ Guard",
    difficulty: "Beginner",
    question: "What is the primary reason for wrapping automation script logic inside `if __name__ == '__main__':`?",
    codeSnippet: "# script.py\ndef run_backup():\n    print('Running backup...')\n\nif __name__ == '__main__':\n    run_backup()",
    options: [
      "It accelerates function execution speed",
      "It allows functions to be imported into other scripts or unit tests without immediately running the script logic",
      "It prevents Python from compiling bytecode files",
      "It enforces object-oriented programming rules"
    ],
    correctAnswer: 1,
    explanation: "The `__name__ == '__main__'` guard ensures that the execution block only runs when the script is invoked directly, not when imported as a library module.",
    officialRef: "PCEA-30-01 Block 1.5 - Module Design",
    tags: ["dunder-name", "main-guard", "modularity"]
  },
  {
    id: "pcea-1-082",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "sys.exit",
    difficulty: "Beginner",
    question: "What is the effect of calling `sys.exit(1)` inside an automation script?",
    codeSnippet: "import sys\nif not is_healthy():\n    sys.exit(1)",
    options: [
      "It terminates the Python interpreter and returns exit code 1 to the calling shell or scheduler",
      "It pauses the script for 1 second",
      "It reboots the operating system",
      "It prints '1' to the console and continues running"
    ],
    correctAnswer: 0,
    explanation: "sys.exit(1) raises a `SystemExit(1)` exception which, if uncaught, terminates the interpreter and reports exit status code 1 to the parent shell.",
    officialRef: "PCEA-30-01 Block 1.5 - sys.exit",
    tags: ["sys-exit", "exit-codes", "process-lifecycle"]
  },
  {
    id: "pcea-1-083",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "sys.exit String",
    difficulty: "Intermediate",
    question: "What happens if you pass a string argument to `sys.exit('Error: database unreachable')`?",
    codeSnippet: "import sys\nsys.exit('Error: database unreachable')",
    options: [
      "The script raises a TypeError",
      "Python prints the string to sys.stderr and exits with code 1",
      "The string is saved to a file named 'sys.exit'",
      "The script continues running"
    ],
    correctAnswer: 1,
    explanation: "If a string is passed to sys.exit(), Python prints the string to stderr and exits with a non-zero exit code of 1.",
    officialRef: "PCEA-30-01 Block 1.5 - sys.exit",
    tags: ["sys-exit", "stderr", "error-reporting"]
  },
  {
    id: "pcea-1-084",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Top-Level Exception Handling",
    difficulty: "Intermediate",
    question: "What is the recommended practice for handling unexpected exceptions at the top level of an automation entry point?",
    codeSnippet: "import sys, logging\n\ndef main():\n    try:\n        run_pipeline()\n        return 0\n    except Exception as e:\n        logging.critical('Pipeline failed unexpectedly: %s', e, exc_info=True)\n        return 1\n\nif __name__ == '__main__':\n    sys.exit(main())",
    options: [
      "Swallow all exceptions silently with pass",
      "Log the full traceback to an audit file, alert operators, and exit with a non-zero code",
      "Re-run the main function in an infinite loop",
      "Delete the log files to hide the failure"
    ],
    correctAnswer: 1,
    explanation: "Top-level handlers should log the full traceback with timestamps to stderr/loggers and exit with a clean non-zero status so monitoring systems trigger alerts.",
    officialRef: "PCEA-30-01 Block 1.5 - Error Handling",
    tags: ["main-pattern", "exception-handling", "logging"]
  },
  {
    id: "pcea-1-085",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Standard Streams",
    difficulty: "Beginner",
    question: "Where should automated error and warning messages be directed versus normal data output?",
    codeSnippet: "import sys\nsys.stdout.write('Normal output data\\n')\nsys.stderr.write('Warning: Disk space low\\n')",
    options: [
      "All messages must be written to sys.stdin",
      "Normal data goes to sys.stdout; errors and warnings go to sys.stderr",
      "All output must go to a web socket",
      "Errors must only be printed to the screen, never to files"
    ],
    correctAnswer: 1,
    explanation: "Separating data (stdout) from operational diagnostics (stderr) allows downstream automation tools to pipe data cleanly without corrupting it with error messages.",
    officialRef: "PCEA-30-01 Block 1.5 - Streams",
    tags: ["stdout", "stderr", "unix-philosophy"]
  },
  {
    id: "pcea-1-086",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Signal Handling",
    difficulty: "Advanced",
    question: "How can an automation script intercept a `Ctrl+C` interrupt (SIGINT) to clean up temporary files before terminating?",
    codeSnippet: "import signal, sys\n\ndef cleanup_handler(signum, frame):\n    print('Received interrupt, cleaning temp files...')\n    cleanup_temp_files()\n    sys.exit(130)\n\nsignal.signal(signal.SIGINT, cleanup_handler)",
    options: [
      "Use signal.signal(signal.SIGINT, handler)",
      "Wrap every line of code in time.sleep()",
      "Use os.register_interrupt()",
      "Set sys.ignore_keyboard_interrupt = True"
    ],
    correctAnswer: 0,
    explanation: "Registering a signal handler with `signal.signal(signal.SIGINT, ...)` allows graceful shutdown, closing database connections and removing temporary files on interruption.",
    officialRef: "PCEA-30-01 Block 1.5 - Signal Handling",
    tags: ["signals", "sigint", "graceful-shutdown"]
  },
  {
    id: "pcea-1-087",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Exit Code 130",
    difficulty: "Intermediate",
    question: "In Unix convention, why does an application terminated by `Ctrl+C` (SIGINT) typically return exit code 130?",
    codeSnippet: "# Unix convention: Exit Code = 128 + Signal Number\n# SIGINT is signal 2: 128 + 2 = 130",
    options: [
      "It represents 130 bytes of memory remaining",
      "Standard Unix shells calculate exit status for fatal signals as 128 + signal_number (128 + 2 = 130)",
      "It is an arbitrary random number chosen by Linux",
      "It indicates that port 130 was closed"
    ],
    correctAnswer: 1,
    explanation: "POSIX shells calculate the exit code of processes killed by signals as 128 + N. For SIGINT (signal 2), the exit code is 130.",
    officialRef: "PCEA-30-01 Block 1.5 - Exit Codes",
    tags: ["posix", "sigint", "exit-codes"]
  },
  {
    id: "pcea-1-088",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Project Layout",
    difficulty: "Beginner",
    question: "Which standard directory layout is recommended for a scalable Python automation project?",
    codeSnippet: "# Standard structure:\n# my_automation/\n# \u251c\u2500\u2500 scripts/ (entry-point scripts)\n# \u251c\u2500\u2500 src/ or my_pkg/ (reusable libraries)\n# \u251c\u2500\u2500 tests/ (unit tests)\n# \u251c\u2500\u2500 requirements.txt\n# \u2514\u2500\u2500 README.md",
    options: [
      "Putting 10,000 lines of code into a single file on the Desktop",
      "Organizing into modular packages with separate entry points, libraries, tests, and configuration",
      "Storing all code directly in the Python system site-packages folder",
      "Using only .txt files instead of .py files"
    ],
    correctAnswer: 1,
    explanation: "Separating business logic into an importable library package and keeping CLI runners lightweight improves testability and maintainability.",
    officialRef: "PCEA-30-01 Block 1.5 - Project Organization",
    tags: ["project-structure", "packaging", "best-practices"]
  },
  {
    id: "pcea-1-089",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Clean main() Pattern",
    difficulty: "Intermediate",
    question: "What is the benefit of having `main()` return an integer exit code rather than calling `sys.exit()` directly inside functions?",
    codeSnippet: "def main() -> int:\n    if not step1():\n        return 1\n    return 0\n\nif __name__ == '__main__':\n    sys.exit(main())",
    options: [
      "It makes main() easily testable by asserting its integer return value in automated test suites",
      "It makes the script 5x faster",
      "It converts the script into an async coroutine",
      "It allows main() to accept unlimited arguments"
    ],
    correctAnswer: 0,
    explanation: "Returning exit codes instead of calling `sys.exit()` makes functions unit-testable without having to intercept or mock `SystemExit` exceptions.",
    officialRef: "PCEA-30-01 Block 1.5 - Testing & Modularity",
    tags: ["testability", "main-function", "architecture"]
  },
  {
    id: "pcea-1-090",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Configurable Verbosity",
    difficulty: "Intermediate",
    question: "How is logging verbosity typically controlled via command-line flags in an automation tool?",
    codeSnippet: "import argparse, logging\nparser = argparse.ArgumentParser()\nparser.add_argument('-v', '--verbose', action='store_true')\nargs = parser.parse_args()\n\nlevel = logging.DEBUG if args.verbose else logging.INFO\nlogging.basicConfig(level=level)",
    options: [
      "By switching logging level between DEBUG and INFO based on args.verbose",
      "By deleting print statements from the file at runtime",
      "By adjusting CPU clock speed",
      "By restarting the operating system"
    ],
    correctAnswer: 0,
    explanation: "A verbose flag dynamically toggles the root logger level between INFO/WARNING (standard summary output) and DEBUG (detailed wire and diagnostic tracing).",
    officialRef: "PCEA-30-01 Block 1.5 - Logging & CLI",
    tags: ["logging", "verbosity", "cli"]
  },
  {
    id: "pcea-1-091",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Dependency Validation",
    difficulty: "Intermediate",
    question: "How can an automation script check that installed third-party package versions meet minimum requirements?",
    codeSnippet: "import importlib.metadata\nfrom packaging.version import parse\n\nversion = importlib.metadata.version('requests')\nif parse(version) < parse('2.28.0'):\n    raise SystemExit('Outdated requests library!')",
    options: [
      "Using importlib.metadata.version() and version comparison",
      "Checking sys.version_info",
      "Reading the CPU model name",
      "Counting the lines of code in requests"
    ],
    correctAnswer: 0,
    explanation: "`importlib.metadata.version('pkg')` retrieves the installed distribution version string at runtime for dependency validation.",
    officialRef: "PCEA-30-01 Block 1.5 - Dependencies",
    tags: ["importlib", "dependencies", "validation"]
  },
  {
    id: "pcea-1-092",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Context Managers",
    difficulty: "Intermediate",
    question: "Why should automation scripts use context managers (`with` statements) for resources like files, locks, and network sessions?",
    codeSnippet: "with open('report.txt', 'w') as f:\n    f.write('Summary results')\n# File is automatically and reliably closed even if an exception occurs",
    options: [
      "To encrypt the data automatically",
      "To guarantee proper resource cleanup and closure even if unexpected exceptions are raised",
      "To bypass memory limitations",
      "To speed up disk write operations"
    ],
    correctAnswer: 1,
    explanation: "Context managers implement `__enter__` and `__exit__` protocols, ensuring reliable cleanup of file handles, sockets, and lock mutexes under all circumstances.",
    officialRef: "PCEA-30-01 Block 1.5 - Context Managers",
    tags: ["with-statement", "resource-management", "clean-code"]
  },
  {
    id: "pcea-1-093",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "File Locking",
    difficulty: "Advanced",
    question: "Why might an automation script implement a file lock (e.g., using `fcntl` on POSIX or `msvcrt` on Windows)?",
    codeSnippet: "# Prevent overlapping cron jobs:\nimport fcntl\nlock_file = open('/tmp/backup.lock', 'w')\ntry:\n    fcntl.flock(lock_file, fcntl.LOCK_EX | fcntl.LOCK_NB)\nexcept BlockingIOError:\n    raise SystemExit('Another instance is already running!')",
    options: [
      "To prevent duplicate concurrent instances of the script from executing simultaneously and conflicting",
      "To make the file read-only forever",
      "To prevent users from opening the terminal",
      "To hide the file from the operating system"
    ],
    correctAnswer: 0,
    explanation: "Lock files prevent overlapping execution of scheduled tasks when a previous run takes longer than the scheduling interval to finish.",
    officialRef: "PCEA-30-01 Block 1.5 - Concurrency & Locking",
    tags: ["concurrency", "file-locking", "cron-safety"]
  },
  {
    id: "pcea-1-094",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Shebang Line",
    difficulty: "Beginner",
    question: "What is the purpose of the first line `#!/usr/bin/env python3` in an automation script?",
    codeSnippet: "#!/usr/bin/env python3\nimport sys\nprint('Running script directly!')",
    options: [
      "It defines the script author",
      "It informs POSIX operating systems which interpreter to use when executing the file directly as a binary",
      "It disables all Python syntax errors",
      "It sets the terminal background color to black"
    ],
    correctAnswer: 1,
    explanation: "The shebang (`#!`) directs the operating system's program loader to execute the script using the `python3` binary found in the user's active PATH.",
    officialRef: "PCEA-30-01 Block 1.5 - Shebang",
    tags: ["shebang", "posix", "executable-scripts"]
  },
  {
    id: "pcea-1-095",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "File Permissions",
    difficulty: "Beginner",
    question: "On Linux/macOS, what command makes a Python automation script directly executable from the terminal (`./script.py`)?",
    codeSnippet: "# Terminal shell command:\nchmod +x script.py",
    options: [
      "chmod +x script.py",
      "chown root script.py",
      "python --make-exec script.py",
      "set-exec script.py"
    ],
    correctAnswer: 0,
    explanation: "`chmod +x script.py` adds execute permissions, allowing direct execution as `./script.py` when combined with a valid shebang line.",
    officialRef: "PCEA-30-01 Block 1.5 - File Permissions",
    tags: ["chmod", "posix", "executable"]
  },
  {
    id: "pcea-1-096",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Dry-Run Guard",
    difficulty: "Intermediate",
    question: "How should a function that performs destructive actions respect a dry-run flag?",
    codeSnippet: "def archive_directory(src, dry_run=False):\n    if dry_run:\n        print(f'[DRY-RUN] Would archive {src}')\n        return\n    # actual archiving logic here",
    options: [
      "Log the action and return early without executing the actual mutation",
      "Delete the files immediately anyway",
      "Throw a FatalError exception",
      "Prompt the user for a credit card"
    ],
    correctAnswer: 0,
    explanation: "A dry-run check logs the intended action and parameters and returns early, preventing side-effects while exercising path resolution logic.",
    officialRef: "PCEA-30-01 Block 1.5 - Safe Automation",
    tags: ["dry-run", "defensive-coding", "safety"]
  },
  {
    id: "pcea-1-097",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Log Rotation",
    difficulty: "Intermediate",
    question: "Why must automated scripts that write log files implement log rotation (e.g. `RotatingFileHandler`)?",
    codeSnippet: "# Logging configuration:\nfrom logging.handlers import RotatingFileHandler\nhandler = RotatingFileHandler('app.log', maxBytes=10_000_000, backupCount=5)",
    options: [
      "To prevent log files from growing boundlessly and filling up the server disk",
      "To translate logs into French",
      "To compress logs into executable binaries",
      "Because Python can only open files under 1 KB"
    ],
    correctAnswer: 0,
    explanation: "Unbounded log files can exhaust filesystem storage, causing crashes and system outages. Log rotation limits file size and preserves a fixed number of backups.",
    officialRef: "PCEA-30-01 Block 1.5 - Log Management",
    tags: ["logging", "log-rotation", "disk-management"]
  },
  {
    id: "pcea-1-098",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Sensible Defaults",
    difficulty: "Beginner",
    question: "What is the principle of 'sensible defaults' in automation tool design?",
    codeSnippet: "# Designing user friendly parameters:\n# If no --timeout is passed, default to 30 seconds rather than hanging or requiring manual input every time",
    options: [
      "Every parameter must be strictly required on every execution",
      "Scripts should work out-of-the-box with safe, reasonable configurations without forcing users to pass dozens of flags",
      "All defaults must be set to 0 or None",
      "Defaults are only allowed in object-oriented classes"
    ],
    correctAnswer: 1,
    explanation: "Sensible defaults allow scripts to run smoothly in standard environments while still offering flags for customized behavior when necessary.",
    officialRef: "PCEA-30-01 Block 1.5 - Script Design",
    tags: ["defaults", "usability", "cli"]
  },
  {
    id: "pcea-1-099",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Clean Stdout for Piping",
    difficulty: "Intermediate",
    question: "When designing a CLI tool meant to pipe output to other programs (e.g. `python get_ids.py | xargs ...`), what must be avoided?",
    codeSnippet: "# Bad for piping:\n# print('Starting script...')\n# print('Fetching IDs...')\n# print(12345)\n# print('Done!')",
    options: [
      "Writing decorative banners or conversational status messages to stdout instead of stderr",
      "Outputting newline characters",
      "Using Python 3",
      "Returning exit code 0 on success"
    ],
    correctAnswer: 0,
    explanation: "Informational banners and status updates should be directed to `sys.stderr` so that `sys.stdout` remains pristine machine-readable data suitable for piping.",
    officialRef: "PCEA-30-01 Block 1.5 - CLI Design",
    tags: ["piping", "stdout", "unix-philosophy"]
  },
  {
    id: "pcea-1-100",
    track: 'pcea',
    section: "Section 1",
    chapter: "1.5",
    category: "Healthcheck Endpoint",
    difficulty: "Intermediate",
    question: "In an automated microservice or worker daemon, what is the role of a `/health` or ping check?",
    codeSnippet: "# Simple automation health check probe:\ndef healthcheck():\n    db_ok = check_db()\n    disk_ok = check_disk_space()\n    return {'status': 'healthy' if (db_ok and disk_ok) else 'unhealthy'}",
    options: [
      "To monitor and report that the automated service is running, responsive, and has healthy dependencies",
      "To reboot the server every 5 minutes",
      "To clear browser cookies",
      "To download new wallpaper images"
    ],
    correctAnswer: 0,
    explanation: "Healthchecks enable external orchestrators and monitoring tools to detect failures, report status, and automatically restart failing automation containers.",
    officialRef: "PCEA-30-01 Block 1.5 - Monitoring",
    tags: ["healthcheck", "monitoring", "operational-readiness"]
  }
];
