import { Flashcard } from '../types';

/**
 * PCAP-31-03 SECTION 1: CONTROL AND EVALUATIONS (Part 3: Cards 71 to 100)
 * - Chapter 1.4: random & platform Modules (Cards 71-84)
 * - Chapter 1.5: Package Management with PIP & PyPI Ecosystem (Cards 85-100)
 */
export const section1CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 1.4: RANDOM & PLATFORM MODULES (Cards 71 to 84)
  // =========================================================================
  {
    id: 'pcap-s1-fc-071',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'random.random() output interval',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What numerical range and interval does `random.random()` generate?',
    codeSnippet: `import random
val = random.random()
print(0.0 <= val < 1.0)
print(type(val).__name__)`,
    stdoutExpected: `True
float`,
    explanationTitle: 'Semi-Open Range [0.0, 1.0)',
    explanationText:
      '`random.random()` returns a pseudorandom floating-point number in the semi-open range `[0.0, 1.0)`, meaning 0.0 is inclusive and 1.0 is strictly exclusive.',
    complexityInfo: 'Exact numerical range definition in PCAP',
  },
  {
    id: 'pcap-s1-fc-072',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'random.seed() reproducibility',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What happens when you seed the random generator twice with the same integer?',
    codeSnippet: `import random
random.seed(42)
seq1 = [random.randint(1, 100) for _ in range(3)]

random.seed(42)
seq2 = [random.randint(1, 100) for _ in range(3)]

print(seq1 == seq2)`,
    stdoutExpected: 'True',
    explanationTitle: 'Deterministic Pseudorandom Sequence via seed()',
    explanationText:
      '`random.seed(a)` initializes the internal state of the Mersenne Twister pseudorandom generator. Using the same seed produces an identical sequence of pseudorandom numbers.',
    complexityInfo: 'Pseudorandom generation mechanics',
  },
  {
    id: 'pcap-s1-fc-073',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'random.choice() and empty sequence exception',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What does `random.choice(seq)` do, and what exception is raised on an empty sequence?',
    codeSnippet: `import random
items = ["apple", "banana", "cherry"]
picked = random.choice(items)
print(picked in items)

try:
    random.choice([])
except IndexError as e:
    print(type(e).__name__)`,
    stdoutExpected: `True
IndexError`,
    explanationTitle: 'random.choice() Raises IndexError on Empty Sequence',
    explanationText:
      '`random.choice(seq)` returns a random element from a non-empty sequence (list, tuple, str). If the sequence is empty, it raises `IndexError: Cannot choose from an empty sequence`.',
    complexityInfo: 'Exception behavior on edge cases',
  },
  {
    id: 'pcap-s1-fc-074',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'random.sample() sampling without replacement',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.4',
    section: 'Section 1',
    question: 'Does `random.sample(population, k)` allow duplicate picks from unique elements, and what if `k > len(population)`?',
    codeSnippet: `import random
pool = [1, 2, 3, 4, 5]
sub = random.sample(pool, 3)
print(len(sub) == len(set(sub)))

try:
    random.sample(pool, 10)
except ValueError as e:
    print(type(e).__name__)`,
    stdoutExpected: `True
ValueError`,
    explanationTitle: 'random.sample() Has No Replacement',
    explanationText:
      '`random.sample(seq, k)` returns a new list of `k` unique elements chosen without replacement. If `k` is larger than the population size, it raises `ValueError`.',
    complexityInfo: 'Sampling algorithm constraints',
  },
  {
    id: 'pcap-s1-fc-075',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'random.randrange() stop endpoint exclusivity',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.4',
    section: 'Section 1',
    question: 'Can `random.randrange(1, 10)` ever return `10`?',
    codeSnippet: `import random
# random.randrange(start, stop[, step])
# Like range(), the 'stop' value is strictly EXCLUSIVE.
outcomes = [random.randrange(1, 10) for _ in range(100)]
print(10 in outcomes)`,
    stdoutExpected: 'False',
    explanationTitle: 'random.randrange() Endpoint is Exclusive',
    explanationText:
      '`random.randrange(start, stop[, step])` chooses a randomly selected element from `range(start, stop, step)`. The `stop` argument is strictly **exclusive** and can never be returned.',
    complexityInfo: 'Range equivalence in random',
  },
  {
    id: 'pcap-s1-fc-076',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'random.randint() endpoint inclusivity trap',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.4',
    section: 'Section 1',
    question: 'Can `random.randint(1, 10)` return `10`?',
    codeSnippet: `import random
# Major PCAP trap:
# randint(a, b) includes BOTH endpoints: a <= N <= b
# Equivalent to: randrange(a, b + 1)
print("Yes, both endpoints 1 and 10 are INCLUSIVE")`,
    stdoutExpected: 'Yes, both endpoints 1 and 10 are INCLUSIVE',
    explanationTitle: 'randint(a, b) Endpoints are INCLUSIVE',
    explanationText:
      'One of the most frequently tested distinctions in PCAP: unlike `range()` and `randrange()`, `random.randint(a, b)` has **both endpoints inclusive** (`a <= N <= b`).',
    complexityInfo: 'Top-frequency PCAP exam trap',
  },
  {
    id: 'pcap-s1-fc-077',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'platform.platform() operating system details',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What does `platform.platform()` return, and what do its `aliased` and `terse` parameters do?',
    codeSnippet: `import platform
info = platform.platform()
print(isinstance(info, str))
print(len(info) > 0)`,
    stdoutExpected: `True
True`,
    explanationTitle: 'platform.platform() System Identification',
    explanationText:
      '`platform.platform(aliased=False, terse=False)` returns a single string identifying the underlying platform. Setting `terse=True` returns a briefer summary.',
    complexityInfo: 'System identification function',
  },
  {
    id: 'pcap-s1-fc-078',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'platform.machine() hardware architecture',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What string does `platform.machine()` return?',
    codeSnippet: `import platform
arch = platform.machine()
print(isinstance(arch, str))
print(arch in ["x86_64", "AMD64", "arm64", "aarch64", "i386"])`,
    stdoutExpected: `True
True`,
    explanationTitle: 'platform.machine() Hardware Architecture',
    explanationText:
      '`platform.machine()` returns the hardware architecture string (e.g. `\'x86_64\'`, `\'arm64\'`, `\'AMD64\'`). If it cannot be determined, an empty string is returned.',
    complexityInfo: 'Hardware query function',
  },
  {
    id: 'pcap-s1-fc-079',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'platform.processor() real CPU name',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What does `platform.processor()` return?',
    codeSnippet: `import platform
proc = platform.processor()
print(isinstance(proc, str))`,
    stdoutExpected: 'True',
    explanationTitle: 'platform.processor() CPU Identifier',
    explanationText:
      '`platform.processor()` returns the (real) processor name string (e.g. `\'Intel(R) Core(TM) ...\'` or `\'arm\'`). Returns an empty string if unknown.',
    complexityInfo: 'CPU architecture inspection',
  },
  {
    id: 'pcap-s1-fc-080',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'platform.system() OS generic name',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What does `platform.system()` return on Linux, macOS, and Windows?',
    codeSnippet: `import platform
os_name = platform.system()
print(os_name in ["Linux", "Darwin", "Windows"])`,
    stdoutExpected: 'True',
    explanationTitle: 'platform.system() Operating System Name',
    explanationText:
      '`platform.system()` returns the OS name, such as `\'Linux\'`, `\'Darwin\'` (macOS), or `\'Windows\'`. It returns an empty string if unable to determine.',
    complexityInfo: 'Core OS inspection function',
  },
  {
    id: 'pcap-s1-fc-081',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'platform.version() OS release build',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'How does `platform.version()` differ from `platform.system()`?',
    codeSnippet: `import platform
ver = platform.version()
sys_name = platform.system()
print(isinstance(ver, str) and ver != sys_name)`,
    stdoutExpected: 'True',
    explanationTitle: 'platform.version() Release Build String',
    explanationText:
      'While `platform.system()` returns the broad OS family name (`\'Linux\'`), `platform.version()` returns the detailed OS release version string or kernel build number.',
    complexityInfo: 'System vs version breakdown',
  },
  {
    id: 'pcap-s1-fc-082',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'platform.python_implementation() identifier',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What string does `platform.python_implementation()` typically return for standard Python?',
    codeSnippet: `import platform
impl = platform.python_implementation()
print(impl in ["CPython", "PyPy", "Jython", "IronPython"])`,
    stdoutExpected: 'True',
    explanationTitle: 'platform.python_implementation()',
    explanationText:
      '`platform.python_implementation()` returns a string identifying the Python implementation. For standard reference Python, it returns `\'CPython\'`.',
    complexityInfo: 'Python VM implementation',
  },
  {
    id: 'pcap-s1-fc-083',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'platform.python_version() format',
    category: 'T1: Built-ins',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What format does `platform.python_version()` return?',
    codeSnippet: `import platform
ver = platform.python_version()
print(isinstance(ver, str))
print(len(ver.split(".")) >= 3)`,
    stdoutExpected: `True
True`,
    explanationTitle: 'platform.python_version() String Format',
    explanationText:
      '`platform.python_version()` returns the Python version as a string in `\'major.minor.patchlevel\'` format (for example, `\'3.10.4\'`).',
    complexityInfo: 'Version string representation',
  },
  {
    id: 'pcap-s1-fc-084',
    cardType: 'PCAP 1.4 • Standard Modules',
    topic: 'platform.python_version_tuple() return types trap',
    category: 'T1: Built-ins',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.4',
    section: 'Section 1',
    question: 'What are the types of the elements in `platform.python_version_tuple()`?',
    codeSnippet: `import platform
tup = platform.python_version_tuple()
print(type(tup).__name__)
print(len(tup))
print(all(type(item) is str for item in tup))`,
    stdoutExpected: `tuple
3
True`,
    explanationTitle: 'python_version_tuple() Contains STRINGS, Not Integers!',
    explanationText:
      'A classic PCAP trap: `platform.python_version_tuple()` returns a 3-element tuple of **strings** `(\'major\', \'minor\', \'patchlevel\')` (e.g. `(\'3\', \'10\', \'4\')`), NOT integers.',
    complexityInfo: 'High-yield PCAP trick question',
  },

  // =========================================================================
  // CHAPTER 1.5: PACKAGE MANAGEMENT WITH PIP & PYPI ECOSYSTEM (Cards 85 to 100)
  // =========================================================================
  {
    id: 'pcap-s1-fc-085',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'What is PIP in Python ecosystem',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What does PIP stand for and what is its primary function?',
    codeSnippet: `# PIP is a recursive acronym: "Pip Installs Packages"
# (or "Preferred Installer Program")
# Primary function: The official standard package manager for Python
print("Standard package manager for installing packages from PyPI")`,
    stdoutExpected: 'Standard package manager for installing packages from PyPI',
    explanationTitle: 'PIP Definition and Role',
    explanationText:
      'PIP is Python\'s official package installer. It connects to the Python Package Index (PyPI), resolves dependencies, downloads archives, and installs packages into `site-packages`.',
    complexityInfo: 'Core tooling concept',
  },
  {
    id: 'pcap-s1-fc-086',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'pip --version command',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What information does `pip --version` display on the command line?',
    codeSnippet: `# Command: pip --version
# Output format:
# pip 23.2.1 from /usr/local/lib/python3.10/site-packages/pip (python 3.10)
print("Pip version, installation path, and associated Python version")`,
    stdoutExpected: 'Pip version, installation path, and associated Python version',
    explanationTitle: 'pip --version CLI Output',
    explanationText:
      '`pip --version` prints the currently installed pip version number, the directory path where pip resides, and the specific Python runtime interpreter it is linked to.',
    complexityInfo: 'CLI inspection tool',
  },
  {
    id: 'pcap-s1-fc-087',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'pip help and command-specific help',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'How do you view available CLI options for a specific pip command such as `install`?',
    codeSnippet: `# Either:
# pip help install
# or:
# pip install --help
print("pip help <command> or pip <command> --help")`,
    stdoutExpected: 'pip help <command> or pip <command> --help',
    explanationTitle: 'pip Built-in Help System',
    explanationText:
      '`pip help <command>` and `pip <command> --help` display syntax, description, and flags (such as `--upgrade`, `--user`, `--target`) for any pip sub-command.',
    complexityInfo: 'CLI command documentation',
  },
  {
    id: 'pcap-s1-fc-088',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'pip install basic syntax and dependency resolution',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What does `pip install requests` do if `requests` requires `urllib3` and `certifi`?',
    codeSnippet: `# Command: pip install requests
# Pip reads the package metadata
# Automatically downloads and installs requests AND all required dependencies
print("Installs package and automatically resolves and installs all dependencies")`,
    stdoutExpected: 'Installs package and automatically resolves and installs all dependencies',
    explanationTitle: 'Automatic Dependency Resolution',
    explanationText:
      '`pip install <package>` contacts PyPI, fetches the requested package, inspects its dependency declarations, and automatically installs all required prerequisite libraries.',
    complexityInfo: 'Package installation mechanics',
  },
  {
    id: 'pcap-s1-fc-089',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'pip install version pinning with ==',
    category: 'T4: Modifiers',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'How do you install an exact, specific version of a package using pip?',
    codeSnippet: `# Command to install exactly version 2.28.1:
# pip install requests==2.28.1
print("Using double equals: pip install <package>==<version>")`,
    stdoutExpected: 'Using double equals: pip install <package>==<version>',
    explanationTitle: 'Version Pinning with ==',
    explanationText:
      '`pip install package_name==version_number` instructs pip to download and install that exact release, preventing accidental updates to newer, incompatible versions.',
    complexityInfo: 'Version specification syntax',
  },
  {
    id: 'pcap-s1-fc-090',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'pip install --upgrade (-U) flag',
    category: 'T4: Modifiers',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What flags tell pip to upgrade an already installed package to the newest version?',
    codeSnippet: `# Either full flag:
# pip install --upgrade requests
# Or short flag:
# pip install -U requests
print("pip install --upgrade <pkg> or pip install -U <pkg>")`,
    stdoutExpected: 'pip install --upgrade <pkg> or pip install -U <pkg>',
    explanationTitle: '--upgrade / -U Flag',
    explanationText:
      'The `--upgrade` (or short `-U`) option forces pip to check PyPI for newer releases of the package and its dependencies, replacing the existing installation.',
    complexityInfo: 'Package upgrade command',
  },
  {
    id: 'pcap-s1-fc-091',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'pip install -r requirements.txt file',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What command installs all packages listed inside a `requirements.txt` file?',
    codeSnippet: `# Command:
# pip install -r requirements.txt
print("pip install -r requirements.txt")`,
    stdoutExpected: 'pip install -r requirements.txt',
    explanationTitle: 'Requirements File Installation with -r',
    explanationText:
      'The `-r` (or `--requirement`) flag tells pip to read a text file containing a list of packages and version specifiers, installing each of them sequentially.',
    complexityInfo: 'Project dependency manifest',
  },
  {
    id: 'pcap-s1-fc-092',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'pip uninstall command and -y confirmation',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What command removes a package, and how do you bypass the interactive `[y/N]` confirmation prompt?',
    codeSnippet: `# Interactive:
# pip uninstall package_name
# Non-interactive / automatic confirmation:
# pip uninstall -y package_name
print("pip uninstall -y <package>")`,
    stdoutExpected: 'pip uninstall -y <package>',
    explanationTitle: 'pip uninstall Command & -y Flag',
    explanationText:
      '`pip uninstall <package>` removes the installed package files. The `-y` (or `--yes`) flag suppresses the interactive prompt and automatically confirms deletion.',
    complexityInfo: 'Package removal command',
  },
  {
    id: 'pcap-s1-fc-093',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'pip list command output',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the output of the `pip list` command?',
    codeSnippet: `# Command: pip list
# Package    Version
# ---------- -------
# pip        23.2.1
# requests   2.28.1
print("Tabular list of all installed packages and their version numbers")`,
    stdoutExpected: 'Tabular list of all installed packages and their version numbers',
    explanationTitle: 'pip list Environment Inventory',
    explanationText:
      '`pip list` displays a clean table of every installed package in the current Python environment alongside its currently installed version number.',
    complexityInfo: 'Environment package listing',
  },
  {
    id: 'pcap-s1-fc-094',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'pip list --outdated flag',
    category: 'T4: Modifiers',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What does `pip list --outdated` (or `pip list -o`) show?',
    codeSnippet: `# Command: pip list --outdated
# Package  Version  Latest  Type
# -------- -------- ------- -----
# certifi  2022.9.0 2023.7.22 wheel
print("Lists installed packages for which newer versions are available on PyPI")`,
    stdoutExpected: 'Lists installed packages for which newer versions are available on PyPI',
    explanationTitle: 'Checking Outdated Packages',
    explanationText:
      '`pip list --outdated` queries PyPI and filters the installed list to display only packages that have a newer release available, showing both current and latest version numbers.',
    complexityInfo: 'Upgrade auditing tool',
  },
  {
    id: 'pcap-s1-fc-095',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'pip show command metadata fields',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What information does `pip show <package>` display?',
    codeSnippet: `# Command: pip show requests
# Name: requests
# Version: 2.28.1
# Summary: Python HTTP for Humans.
# Author: Kenneth Reitz
# License: Apache 2.0
# Location: /lib/python3.10/site-packages
# Requires: certifi, charset-normalizer, idna, urllib3
print("Detailed package metadata: Name, Version, Summary, Location, Requires")`,
    stdoutExpected: 'Detailed package metadata: Name, Version, Summary, Location, Requires',
    explanationTitle: 'pip show Package Details',
    explanationText:
      '`pip show <package>` displays key metadata for an installed package: official Name, Version, Summary, Author, License, installation filesystem Location, and dependencies (`Requires`).',
    complexityInfo: 'Package metadata inspection',
  },
  {
    id: 'pcap-s1-fc-096',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'pip show -f flag file listing',
    category: 'T4: Modifiers',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What does the `-f` (or `--files`) flag add to `pip show`?',
    codeSnippet: `# Command: pip show -f requests
# Displays regular pip show metadata PLUS:
# Files:
#   requests/__init__.py
#   requests/api.py
#   ...
print("Lists all files and directories installed by the package")`,
    stdoutExpected: 'Lists all files and directories installed by the package',
    explanationTitle: 'pip show -f File Manifest',
    explanationText:
      '`pip show -f <package>` (or `--files`) prints the full list of files installed into the filesystem by that package, relative to its package installation directory.',
    complexityInfo: 'Detailed file manifest inspection',
  },
  {
    id: 'pcap-s1-fc-097',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'pip check dependency compatibility',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is the purpose of the `pip check` command?',
    codeSnippet: `# Command: pip check
# Output if all ok: "No broken requirements found."
# Output if conflict: "pkg_a has requirement pkg_b<2.0, but you have pkg_b 2.1"
print("Verifies that installed packages have compatible dependencies and no missing requirements")`,
    stdoutExpected: 'Verifies that installed packages have compatible dependencies and no missing requirements',
    explanationTitle: 'pip check Health Verification',
    explanationText:
      '`pip check` inspects all installed packages in the environment to confirm that all declared dependency requirements are satisfied and reports broken or conflicting versions.',
    complexityInfo: 'Environment health validation',
  },
  {
    id: 'pcap-s1-fc-098',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'What is PyPI (Python Package Index)',
    category: 'T3: Theory',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is PyPI (pypi.org) and how does pip interact with it?',
    codeSnippet: `# PyPI: Python Package Index
# Official third-party public software repository for Python.
# pip connects to PyPI by default to locate, download, and install packages.
print("Official default public repository for Python packages")`,
    stdoutExpected: 'Official default public repository for Python packages',
    explanationTitle: 'PyPI Central Repository',
    explanationText:
      'PyPI (Python Package Index) is the official centralized repository where Python developers publish open-source libraries. PIP downloads from PyPI by default.',
    complexityInfo: 'Python ecosystem infrastructure',
  },
  {
    id: 'pcap-s1-fc-099',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'Wheel format (.whl, PEP 427)',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.5',
    section: 'Section 1',
    question: 'What is a Python Wheel (`.whl`) file and why is it preferred over source distributions (`.tar.gz`)?',
    codeSnippet: `# Wheel (.whl) is a built-package format (PEP 427)
# It is a ZIP archive containing pre-compiled or ready-to-copy files.
# It skips the 'build' / compilation step during pip install!
print("Built package format (ZIP archive) that avoids compilation during installation")`,
    stdoutExpected: 'Built package format (ZIP archive) that avoids compilation during installation',
    explanationTitle: 'Wheel (.whl) Built Distribution Standard',
    explanationText:
      'A Wheel (`.whl`, PEP 427) is a built-package distribution standard. Because it does not require running `setup.py` or compiling C extensions at install time, installations are substantially faster and more reliable.',
    complexityInfo: 'Distribution format standard',
  },
  {
    id: 'pcap-s1-fc-100',
    cardType: 'PCAP 1.5 • Package Management',
    topic: 'Virtual environments and pip isolation',
    category: 'T3: Theory',
    difficulty: 'Intermediate',
    factor: '2.4',
    intervalDays: 2,
    chapter: '1.5',
    section: 'Section 1',
    question: 'Why are Python virtual environments (`python -m venv <env_name>`) used with pip?',
    codeSnippet: `# Virtual environment creates an isolated directory tree
# with its own Python binary and independent site-packages directory.
print("Isolates package versions and dependencies to prevent project conflicts")`,
    stdoutExpected: 'Isolates package versions and dependencies to prevent project conflicts',
    explanationTitle: 'Virtual Environment Isolation',
    explanationText:
      'Virtual environments prevent version collisions between different Python projects by giving each project its own isolated `site-packages` directory managed independently by pip.',
    complexityInfo: 'Environment management best practices',
  },
];
