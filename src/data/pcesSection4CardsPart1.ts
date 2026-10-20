import { Flashcard } from '../types';

export const pcesSection4CardsPart1: Flashcard[] = [
  {
    id: "pces-4-001",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Secure SDLC",
    difficulty: "Beginner",
    question: "What does 'Shift-Left' mean in secure software development?",
    codeSnippet: "# Shift-Left security paradigm:\n# Traditional: Security tested right before release (expensive, delays release)\n# Shift-Left: Security requirements, threat modeling, and SAST integrated during planning and coding!",
    options: [
      "Integrating security testing, threat modeling, and reviews early in the design and development phases rather than waiting until right before deployment",
      "Moving all servers to the left side of the data center room",
      "Writing all code from right-to-left using Arabic script",
      "Shifting all developers to part-time contractors"
    ],
    correctAnswer: 0,
    explanation: "'Shift-Left' moves security activities earlier in the development lifecycle (requirements, design, coding, CI/CD), reducing the cost and effort of remediating vulnerabilities.",
    officialRef: "PCES-30-01 Block 4.1 - Secure SDLC",
    tags: ["shift-left", "sdlc", "security-integration"]
  },
  {
    id: "pces-4-002",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Static Application Security Testing",
    difficulty: "Beginner",
    question: "Which popular open-source Python tool analyzes AST (Abstract Syntax Trees) to find common security issues like hardcoded passwords, shell injections, and insecure deserialization?",
    codeSnippet: "# Running static security analysis on Python codebase\n# $ bandit -r my_app/ -ll\n# Discovers insecure temp files, pickle usage, hardcoded passwords",
    options: [
      "bandit",
      "pytest",
      "black",
      "mypy"
    ],
    correctAnswer: 0,
    explanation: "`bandit` is the premier dedicated security linter for Python that parses Python source code AST to report security flaws (CWE issues, dangerous functions, weak ciphers).",
    officialRef: "PCES-30-01 Block 4.1 - SAST & Bandit",
    tags: ["bandit", "sast", "ast-analysis", "python-security"]
  },
  {
    id: "pces-4-003",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Dependency Auditing",
    difficulty: "Beginner",
    question: "Which tool is specifically designed to audit Python dependencies listed in `requirements.txt` or active environments against known vulnerability databases?",
    codeSnippet: "# Checking installed packages for known CVE vulnerabilities\n# $ pip-audit\n# Checks packages against PyPI advisory database and OSV",
    options: [
      "pip-audit",
      "pip install --upgrade",
      "git log",
      "pylint"
    ],
    correctAnswer: 0,
    explanation: "`pip-audit` scans Python packages in environments or requirement files for known security vulnerabilities using official vulnerability databases (OSV, PyPA advisory database).",
    officialRef: "PCES-30-01 Block 4.1 - Dependency Auditing",
    tags: ["pip-audit", "vulnerability-scanning", "supply-chain"]
  },
  {
    id: "pces-4-004",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Peer Code Review",
    difficulty: "Beginner",
    question: "What is a primary objective of security-focused Peer Code Reviews?",
    codeSnippet: "# Peer review checklist in pull request:\n# - Is all user input validated and sanitized?\n# - Are database queries parameterized?\n# - Are secrets kept out of source code?",
    options: [
      "To identify logic bugs, security anti-patterns, and vulnerabilities before code is merged into production branches",
      "To judge who writes code the fastest",
      "To ensure variable names are in Latin",
      "To format line breaks according to personal preference"
    ],
    correctAnswer: 0,
    explanation: "Security code reviews examine pull requests for design flaws, improper validation, dangerous functions, and authentication bypasses before software reaches staging or production.",
    officialRef: "PCES-30-01 Block 4.1 - Code Review",
    tags: ["code-review", "peer-review", "defect-detection"]
  },
  {
    id: "pces-4-005",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "SAST vs DAST",
    difficulty: "Intermediate",
    question: "What is the difference between Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST)?",
    codeSnippet: "# SAST: Inspects non-running source code (white-box, e.g. bandit)\n# DAST: Interacts with running application from the outside without source code (black-box, e.g. OWASP ZAP)",
    options: [
      "SAST inspects resting source code without executing it; DAST tests the running application from the outside by sending real HTTP probes",
      "SAST is for mobile apps; DAST is for desktops",
      "SAST requires an internet connection; DAST runs offline",
      "SAST only checks hardware temperature"
    ],
    correctAnswer: 0,
    explanation: "SAST analyzes source code or bytecode statically without running the program (white-box). DAST interacts with the deployed, running application dynamically via external inputs (black-box).",
    officialRef: "PCES-30-01 Block 4.1 - SAST vs DAST",
    tags: ["sast", "dast", "security-testing"]
  },
  {
    id: "pces-4-006",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Threat Modeling in Sprints",
    difficulty: "Intermediate",
    question: "How should security user stories or 'Abuse Cases' be structured in Agile security planning?",
    codeSnippet: "# Agile Abuse Case example:\n# 'As an unauthorized attacker, I want to inject malicious SQL into the search field\n# in order to exfiltrate other customers' private credit card records.'",
    options: [
      "As an attacker persona describing a malicious action and intended harmful outcome to guide countermeasure design",
      "As a list of hardware parts to purchase",
      "As a legal contract with insurance providers",
      "As a description of office furniture"
    ],
    correctAnswer: 0,
    explanation: "Abuse cases and evil user stories articulate how an adversary might attack or misuse a system, helping engineers design concrete security acceptance criteria and test cases.",
    officialRef: "PCES-30-01 Block 4.1 - Threat Modeling",
    tags: ["abuse-cases", "evil-user-stories", "agile-security"]
  },
  {
    id: "pces-4-007",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Fail-Secure Error Handling",
    difficulty: "Intermediate",
    question: "What security vulnerability is introduced when generic exception handlers swallow errors and return sensitive debugging data?",
    codeSnippet: "# Insecure exception handling:\ntry:\n    authenticate_db(username, password)\nexcept Exception as e:\n    # Vulnerability: Leaks database connection string and internal paths to user!\n    return {'error': str(e), 'traceback': traceback.format_exc()}",
    options: [
      "Information Disclosure: Exposes internal database stack traces, usernames, and file paths to potential attackers",
      "Denial of service",
      "CPU overheating",
      "Buffer overflow in CPython runtime"
    ],
    correctAnswer: 0,
    explanation: "Returning detailed stack traces, file system paths, or raw database error messages exposes internal architectural details (Information Disclosure) that attackers use to craft exploits.",
    officialRef: "PCES-30-01 Block 4.1 - Error Handling",
    tags: ["information-disclosure", "stack-trace", "fail-secure"]
  },
  {
    id: "pces-4-008",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Fail-Secure Defaults",
    difficulty: "Intermediate",
    question: "In an authorization function, what should the default return value be if an unexpected exception or network failure occurs?",
    codeSnippet: "# Fail-secure authorization policy\ndef is_authorized(user_id, resource) -> bool:\n    try:\n        return check_policy_engine(user_id, resource)\n    except PolicyEngineUnavailable:\n        # Default DENY upon failure!\n        logger.error('Policy engine down; denying access safely')\n        return False",
    options: [
      "`False` (Deny access)",
      "`True` (Allow access to avoid inconveniencing the user)",
      "`None`",
      "`'grant_admin'\""
    ],
    correctAnswer: 0,
    explanation: "A fail-secure system defaults to denying access whenever an error, timeout, or unexpected exception occurs, ensuring system integrity and confidentiality.",
    officialRef: "PCES-30-01 Block 4.1 - Secure Defaults",
    tags: ["fail-secure", "default-deny", "authorization"]
  },
  {
    id: "pces-4-009",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Input Validation Strategy",
    difficulty: "Beginner",
    question: "Why is 'Allowlisting' (Positive Validation) preferred over 'Denylisting' (Negative Filtering) for input validation?",
    codeSnippet: "# Allowlisting validation: Only accepts characters matching strict permitted pattern\nimport re\ndef validate_alphanumeric_username(username: str) -> bool:\n    return bool(re.match(r'^[a-zA-Z0-9_]{3,20}$', username))",
    options: [
      "Allowlists specify strictly what is allowed, avoiding bypasses that circumvent denylists with alternative encodings, casing, or new characters",
      "Allowlists run 100 times faster",
      "Denylists are forbidden by PEP 8",
      "Allowlists do not require regular expressions"
    ],
    correctAnswer: 0,
    explanation: "Denylists frequently fail because attackers invent new attack payloads, bypasses, or alternative character encodings. Allowlists explicitly define the acceptable format and reject everything else.",
    officialRef: "PCES-30-01 Block 4.1 - Input Validation",
    tags: ["allowlisting", "positive-validation", "input-hygiene"]
  },
  {
    id: "pces-4-010",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Output Encoding",
    difficulty: "Intermediate",
    question: "What is 'Output Encoding' and which vulnerability class does it primarily mitigate?",
    codeSnippet: "# Context-aware output encoding in web templates\n# User input '<script>alert(1)</script>' is encoded as:\n# '&lt;script&gt;alert(1)&lt;/script&gt;' so the browser renders it as plain text rather than executing script",
    options: [
      "Encoding special characters into safe representations before rendering in browsers; primarily mitigates Cross-Site Scripting (XSS)",
      "Compressing files with gzip",
      "Encrypting database tables with AES",
      "Hashing passwords with bcrypt"
    ],
    correctAnswer: 0,
    explanation: "Output encoding translates potentially dangerous characters (e.g. `<` to `&lt;`) so the rendering engine (e.g. web browser) interprets them safely as text rather than executable instructions, preventing XSS.",
    officialRef: "PCES-30-01 Block 4.1 - Output Encoding",
    tags: ["output-encoding", "xss-defense", "sanitization"]
  },
  {
    id: "pces-4-011",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "CI/CD Security Automation",
    difficulty: "Beginner",
    question: "How do automated security linters in CI/CD pipelines enforce the 'Security Quality Gate'?",
    codeSnippet: "# CI/CD workflow step (e.g. GitHub Actions):\n# - name: Run Bandit Security Scan\n#   run: bandit -r src/ -lll -x tests/\n# Fails pipeline if any High severity issue is detected!",
    options: [
      "They automatically block pull requests from merging if security issues above a defined threshold are detected",
      "They email the developer's family",
      "They automatically delete the git repository",
      "They rewrite Python code into Java"
    ],
    correctAnswer: 0,
    explanation: "Security quality gates fail the CI/CD pipeline build if static analyzers (like Bandit or pip-audit) find high-severity vulnerabilities, preventing insecure code from reaching production.",
    officialRef: "PCES-30-01 Block 4.1 - CI/CD Security",
    tags: ["security-gates", "ci-cd", "automation"]
  },
  {
    id: "pces-4-012",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Secret Scanning",
    difficulty: "Beginner",
    question: "What is the purpose of automated 'Secret Scanning' tools (like Trufflehog or Gitleaks) in development workflows?",
    codeSnippet: "# Secret scanning finds patterns like:\n# 'ghp_[A-Za-z0-9_]{36}' (GitHub tokens)\n# 'AKIA[0-9A-Z]{16}' (AWS Access Keys)\n# in source code commits and git history before pushing",
    options: [
      "To scan git commits and history for accidentally committed API keys, tokens, and private certificates",
      "To hide the source code from other developers",
      "To encrypt the repository with a password",
      "To convert code into secret binary files"
    ],
    correctAnswer: 0,
    explanation: "Secret scanners scan repositories, commit history, and pull requests using regex patterns and Shannon entropy to detect leaked API keys, tokens, and passwords.",
    officialRef: "PCES-30-01 Block 4.1 - Secret Scanning",
    tags: ["secret-scanning", "git-leaks", "credential-protection"]
  },
  {
    id: "pces-4-013",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Software Bill of Materials",
    difficulty: "Intermediate",
    question: "What is an SBOM (Software Bill of Materials)?",
    codeSnippet: "# SBOM JSON manifest listing all software components, libraries, versions, and license details\n# (e.g. CycloneDX or SPDX format)",
    options: [
      "A formal, machine-readable inventory of all software components, third-party libraries, and dependencies that make up an application",
      "An invoice for purchasing cloud computing credits",
      "A hardware specification manual for server motherboards",
      "A list of employee salaries in the IT department"
    ],
    correctAnswer: 0,
    explanation: "An SBOM is a structured nested inventory of software components, dependencies, and metadata, allowing organizations to rapidly query if they are impacted when a new CVE is announced.",
    officialRef: "PCES-30-01 Block 4.1 - Supply Chain & SBOM",
    tags: ["sbom", "supply-chain", "dependency-inventory"]
  },
  {
    id: "pces-4-014",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Code Complexity & Security",
    difficulty: "Intermediate",
    question: "Why does high cyclomatic code complexity correlate with higher security defect rates?",
    codeSnippet: "# High cyclomatic complexity: Deeply nested if/else statements with 20 branching pathways\n# Makes full test coverage and human security reasoning extremely difficult",
    options: [
      "Overly complex, convoluted code with many nested branches makes human reasoning, auditing, and edge-case testing difficult, hiding bugs and logic flaws",
      "Complex code consumes more physical disk space",
      "Complex code cannot be compiled by Python",
      "Complex code runs only on 32-bit CPUs"
    ],
    correctAnswer: 0,
    explanation: "High complexity makes it difficult for developers and auditors to reason about all execution paths, leading to overlooked edge cases, unhandled states, and vulnerabilities.",
    officialRef: "PCES-30-01 Block 4.1 - Code Quality & Security",
    tags: ["cyclomatic-complexity", "maintainability", "auditability"]
  },
  {
    id: "pces-4-015",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Security Champions",
    difficulty: "Beginner",
    question: "What is a 'Security Champion' in modern software engineering teams?",
    codeSnippet: "# Security champion model: A developer within an engineering squad who acts as a security advocate and liaison with central AppSec",
    options: [
      "A software developer embedded in an engineering team who acts as a security advocate, mentor, and liaison with the AppSec team",
      "The winner of an annual corporate video game tournament",
      "The executive with the highest cybersecurity insurance policy",
      "A security guard who stands outside the server room"
    ],
    correctAnswer: 0,
    explanation: "Security Champions are developers within standard product teams who receive extra AppSec training to champion secure coding practices, conduct initial reviews, and scale security culture.",
    officialRef: "PCES-30-01 Block 4.1 - Security Culture",
    tags: ["security-champions", "appsec", "engineering-culture"]
  },
  {
    id: "pces-4-016",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Pre-Commit Hooks",
    difficulty: "Beginner",
    question: "How do 'pre-commit hooks' (using tools like `pre-commit`) prevent vulnerabilities from entering git repositories?",
    codeSnippet: "# .pre-commit-config.yaml\n# Automatically runs 'bandit', 'check-json', and 'detect-secrets' before allowing 'git commit' to complete!",
    options: [
      "They execute automated checks (linters, secret detection) locally on the developer's workstation before each commit, blocking the commit if checks fail",
      "They automatically commit code every 5 minutes",
      "They push all code directly to the production branch",
      "They encrypt the developer's laptop keyboard"
    ],
    correctAnswer: 0,
    explanation: "Pre-commit hooks run automated scripts locally before a git commit is finalized, catching hardcoded secrets, syntax errors, and security issues before they are ever committed to version control.",
    officialRef: "PCES-30-01 Block 4.1 - Developer Tooling",
    tags: ["pre-commit", "git-hooks", "secret-prevention"]
  },
  {
    id: "pces-4-017",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Deprecation of Insecure Functions",
    difficulty: "Intermediate",
    question: "Why does Bandit flag uses of `random.random()` or `random.choice()` as a medium-severity security warning?",
    codeSnippet: "# Bandit warning B311: Standard pseudo-random generators are not suitable for security/cryptographic purposes\n# Attacker can predict the internal Mersenne Twister state after 624 outputs!",
    options: [
      "The `random` module uses the Mersenne Twister PRNG, which is completely deterministic and predictable, making it insecure for cryptographic tokens or keys",
      "The `random` module is deprecated in Python 3",
      "The `random` module causes memory leaks",
      "The `random` module only produces even numbers"
    ],
    correctAnswer: 0,
    explanation: "Python's `random` module uses the Mersenne Twister algorithm. It is not cryptographically secure; an observer who sees 624 outputs can predict all past and future values. Use `secrets` instead.",
    officialRef: "PCES-30-01 Block 4.1 - Bandit Findings",
    tags: ["bandit-b311", "pseudo-random", "secrets"]
  },
  {
    id: "pces-4-018",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Threat Modeling Methodologies",
    difficulty: "Intermediate",
    question: "Which threat modeling framework focuses specifically on six threat categories: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege?",
    codeSnippet: "# The STRIDE Threat Model\n# Created by Microsoft to categorize software threat vectors",
    options: [
      "STRIDE",
      "DREAD",
      "PASTA",
      "OCTAVE"
    ],
    correctAnswer: 0,
    explanation: "STRIDE is the canonical threat classification model mapping directly to security properties: Authenticity, Integrity, Non-repudiation, Confidentiality, Availability, and Authorization.",
    officialRef: "PCES-30-01 Block 4.1 - Threat Modeling",
    tags: ["stride", "threat-categories", "appsec"]
  },
  {
    id: "pces-4-019",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Defensive Programming",
    difficulty: "Beginner",
    question: "What is 'Defensive Programming' in secure software engineering?",
    codeSnippet: "# Defensive programming mindset:\n# Never trust input from external users, network calls, or third-party APIs\n# Always validate types, boundaries, lengths, and fail safely",
    options: [
      "Designing software to function predictably and safely despite unexpected inputs, external failures, or deliberate attacks",
      "Writing code while physically wearing armor",
      "Encrypting source code so competitors cannot read it",
      "Refusing to connect computers to the internet"
    ],
    correctAnswer: 0,
    explanation: "Defensive programming is an engineering practice ensuring software behaves safely and robustly under unexpected conditions, verifying all assumptions and treating all inputs as untrusted.",
    officialRef: "PCES-30-01 Block 4.1 - Defensive Programming",
    tags: ["defensive-programming", "robustness", "input-handling"]
  },
  {
    id: "pces-4-020",
    track: 'pces',
    section: "Section 4",
    chapter: "4.1",
    category: "Dependency Pinning",
    difficulty: "Beginner",
    question: "Why should production dependencies in `requirements.txt` be pinned to exact versions with hashes (e.g. `requests==2.31.0 --hash=sha256:...`)?",
    codeSnippet: "# Pinning exact version and sha256 checksum in requirements.txt\n# Prevents automated updates from pulling compromised or malicious supply-chain package versions",
    options: [
      "It guarantees reproducible builds and protects against software supply chain attacks where a compromised newer version is maliciously published",
      "It makes Python run faster",
      "It reduces download bandwidth costs",
      "It allows developers to skip code reviews"
    ],
    correctAnswer: 0,
    explanation: "Pinning exact version numbers and cryptographic hashes ensures deterministic builds and protects against supply chain attacks where maintainer accounts are hijacked to distribute backdoored updates.",
    officialRef: "PCES-30-01 Block 4.1 - Supply Chain Hygiene",
    tags: ["dependency-pinning", "hash-checking", "reproducible-builds"]
  },
  {
    id: "pces-4-021",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "SQL Injection",
    difficulty: "Intermediate",
    question: "Why is string formatting in SQL queries vulnerable to SQL Injection, and what is the secure fix in Python's `sqlite3`?",
    codeSnippet: "# VULNERABLE:\nquery = f'SELECT * FROM users WHERE username = \"{user_input}\"'\ncursor.execute(query)\n\n# SECURE (Parameterized query):\ncursor.execute('SELECT * FROM users WHERE username = ?', (user_input,))",
    options: [
      "String formatting interpolates untrusted text as raw SQL code; Parameterized queries pass user input separately as literal data, preventing command injection",
      "Parameterized queries encrypt the database disk partition",
      "String formatting only works on integers",
      "Parameterized queries disable user authentication"
    ],
    correctAnswer: 0,
    explanation: "String concatenation allows malicious input (e.g. `' OR '1'='1`) to alter the SQL parser structure. Parameterized queries (`?` or `%s`) send parameters out-of-band as literal data.",
    officialRef: "PCES-30-01 Block 4.2 - SQL Injection",
    tags: ["sql-injection", "parameterized-queries", "sqlite3"]
  },
  {
    id: "pces-4-022",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Command Injection",
    difficulty: "Intermediate",
    question: "In the vulnerable snippet `subprocess.run(f'nslookup {host}', shell=True)`, how can an attacker execute arbitrary OS commands?",
    codeSnippet: "# Vulnerable command injection:\n# Attacker inputs: 'example.com; cat /etc/shadow'\n# Resulting command: 'nslookup example.com; cat /etc/shadow'\n# Executed by the shell!",
    options: [
      "By injecting shell metacharacters like `;`, `&&`, or `|` followed by arbitrary shell commands (e.g. `'example.com; cat /etc/passwd'`)",
      "By entering an invalid IP address",
      "By unplugging the network cable",
      "By typing the command in reverse"
    ],
    correctAnswer: 0,
    explanation: "With `shell=True`, the shell parses metacharacters (`;`, `&&`, `|`, `` ` ``), executing whatever command follows the delimiter with the privileges of the Python script.",
    officialRef: "PCES-30-01 Block 4.2 - Command Injection",
    tags: ["command-injection", "shell-true", "subprocess-vulnerabilities"]
  },
  {
    id: "pces-4-023",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Remediating Command Injection",
    difficulty: "Intermediate",
    question: "How should the vulnerable command `subprocess.run(f'ping -c 1 {target}', shell=True)` be remediated securely?",
    codeSnippet: "# Secure remediation:\nsubprocess.run(['ping', '-c', '1', target], shell=False, check=True)",
    options: [
      "Pass the command as a list of separate arguments with `shell=False`: `subprocess.run(['ping', '-c', '1', target], shell=False)`",
      "Use `os.system()` instead",
      "Encrypt the target string with ROT13",
      "Surround the command in double quotation marks"
    ],
    correctAnswer: 0,
    explanation: "Passing arguments as a list with `shell=False` invokes the OS binary directly. The argument is treated strictly as a single string argument, completely eliminating shell command parsing.",
    officialRef: "PCES-30-01 Block 4.2 - Command Injection Defense",
    tags: ["subprocess-list", "shell-false", "remediation"]
  },
  {
    id: "pces-4-024",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Shell Escaping with shlex",
    difficulty: "Intermediate",
    question: "If invoking a shell command is strictly unavoidable, which standard library function escapes shell metacharacters safely?",
    codeSnippet: "import shlex, subprocess\nsafe_target = shlex.quote(user_target)\nsubprocess.run(f'ping -c 1 {safe_target}', shell=True)",
    options: [
      "shlex.quote()",
      "string.escape()",
      "os.clean()",
      "urllib.parse.quote()"
    ],
    correctAnswer: 0,
    explanation: "`shlex.quote(s)` returns a shell-escaped version of the string, wrapping it in single quotes and escaping internal quotes to prevent command injection when shell execution is mandatory.",
    officialRef: "PCES-30-01 Block 4.2 - Shell Escaping",
    tags: ["shlex-quote", "command-injection", "escaping"]
  },
  {
    id: "pces-4-025",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Path Traversal",
    difficulty: "Intermediate",
    question: "What is Path Traversal (Directory Traversal), and which character sequence is the primary signature of this attack?",
    codeSnippet: "# Vulnerable file retrieval:\ndef get_user_file(filename):\n    # Attacker requests: '../../../../etc/passwd'\n    return open(f'/var/www/uploads/{filename}').read()",
    options: [
      "An attack where dot-dot-slash (`../` or `..\\`) sequences are used to navigate out of the intended directory and access arbitrary files on the system",
      "A technique for speeding up directory search indexing",
      "A method of converting absolute paths to relative paths",
      "A tool for defragmenting hard drive file paths"
    ],
    correctAnswer: 0,
    explanation: "Path traversal exploits unvalidated file paths by using `../` (dot-dot-slash) sequences to escape the designated folder sandbox and read or overwrite sensitive system files (e.g. `/etc/passwd`).",
    officialRef: "PCES-30-01 Block 4.2 - Path Traversal",
    tags: ["path-traversal", "dot-dot-slash", "directory-traversal"]
  },
  {
    id: "pces-4-026",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Path Traversal Defense with pathlib",
    difficulty: "Intermediate",
    question: "How can `pathlib.Path.resolve()` defend against Path Traversal attacks in Python?",
    codeSnippet: "from pathlib import Path\n\nBASE_DIR = Path('/var/www/uploads').resolve()\n\ndef safe_read_file(user_filename: str) -> bytes:\n    # Resolve canonical absolute path (resolves all '..' and symlinks)\n    target_path = (BASE_DIR / user_filename).resolve()\n    # Verify that resolved target is inside BASE_DIR sandbox!\n    if not str(target_path).startswith(str(BASE_DIR)):\n        raise PermissionError('Path Traversal detected!')\n    return target_path.read_bytes()",
    options: [
      "By resolving the canonical absolute path (following all symlinks and `..` components) and verifying it starts with the authorized base directory",
      "By deleting all files containing dots",
      "By renaming all files to uppercase",
      "By converting the path to an IP address"
    ],
    correctAnswer: 0,
    explanation: "Resolving the path with `resolve()` computes the true canonical location, eliminating all relative `..` components. Checking that the resolved path starts with the authorized base directory enforces the sandbox.",
    officialRef: "PCES-30-01 Block 4.2 - Path Traversal Defense",
    tags: ["pathlib", "resolve", "sandbox", "path-security"]
  },
  {
    id: "pces-4-027",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Null Byte Injection",
    difficulty: "Intermediate",
    question: "What was 'Null Byte Injection' (`%00` / `\\x00`) in legacy C/Python file interactions, and how does modern Python 3 handle it?",
    codeSnippet: "# Attempting to access file with null byte in Python 3:\ntry:\n    with open('document.pdf\\x00.jpg', 'r') as f:\n        pass\nexcept ValueError as e:\n    print(e)  # Output: 'embedded null character'",
    options: [
      "In legacy C libraries, a null byte terminated strings, allowing attackers to bypass `.jpg` extension checks; Python 3 raises `ValueError: embedded null character` automatically",
      "It permanently corrupts the operating system registry",
      "It converts the file to base64 format",
      "It encrypts the hard drive with zeroes"
    ],
    correctAnswer: 0,
    explanation: "In legacy systems, null bytes (`\u0000`) tricked extension checks (e.g. `shell.php\u0000.png` treated as PNG by Python, but PHP by C runtime). Modern Python 3 rejects null bytes in paths with `ValueError`.",
    officialRef: "PCES-30-01 Block 4.2 - Null Byte Injection",
    tags: ["null-byte", "valueerror", "legacy-vulnerabilities"]
  },
  {
    id: "pces-4-028",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "LDAP Injection",
    difficulty: "Intermediate",
    question: "What is LDAP Injection and how does it occur in Python applications interfacing with Active Directory?",
    codeSnippet: "# Vulnerable LDAP filter construction:\nfilter_str = f'(&(uid={user_input})(userPassword={pwd}))'\n# Attacker inputs: user_input = '*) (uid=*)) (| (uid=*'\n# Manipulates the LDAP query tree logic!",
    options: [
      "Constructing LDAP search filters via unescaped string concatenation, allowing attackers to manipulate query logic to bypass authentication or extract directory trees",
      "Flooding an LDAP server with UDP packets",
      "Stealing physical Ethernet cables from a domain controller",
      "Injecting Python code into a database table"
    ],
    correctAnswer: 0,
    explanation: "LDAP injection occurs when untrusted user input is directly concatenated into LDAP search filters without escaping special characters (`*`, `(`, `)`, `&`, `|`), subverting query logic.",
    officialRef: "PCES-30-01 Block 4.2 - LDAP Injection",
    tags: ["ldap-injection", "active-directory", "injection-attacks"]
  },
  {
    id: "pces-4-029",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Second-Order SQL Injection",
    difficulty: "Intermediate",
    question: "What is 'Second-Order SQL Injection'?",
    codeSnippet: "# Second-order SQLi:\n# 1. Attacker stores payload in DB legitimately: username = \"admin'--\"\n# 2. Later, a background cron job runs: f'UPDATE stats SET last_login = NOW() WHERE user = \"{stored_user}\"'\n# 3. Payload executes upon SECONDARY retrieval!",
    options: [
      "Malicious payload is safely stored in the database first, but later retrieved and concatenated into a second vulnerable SQL query where it executes",
      "SQL injection performed by two attackers simultaneously",
      "SQL injection that only works on secondary backup database servers",
      "SQL injection that targets two tables at once"
    ],
    correctAnswer: 0,
    explanation: "In second-order SQL injection, the malicious input is initially stored safely in the database. The flaw occurs later when the application retrieves the stored data and treats it as trusted, concatenating it into another query.",
    officialRef: "PCES-30-01 Block 4.2 - Advanced SQL Injection",
    tags: ["second-order-sqli", "stored-injection", "database-security"]
  },
  {
    id: "pces-4-030",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Blind SQL Injection",
    difficulty: "Intermediate",
    question: "What is 'Blind SQL Injection' and how do attackers infer information when error messages and data are suppressed?",
    codeSnippet: "# Time-based Blind SQL Injection payload:\n# ' OR IF(SUBSTRING(password,1,1)='a', SLEEP(5), 0) --\n# Attacker measures HTTP response latency to deduce characters one by one!",
    options: [
      "The application does not show SQL errors or returned data, so the attacker deduces information by observing boolean response changes or measuring server sleep delays (time-based)",
      "An attack launched by an attacker who cannot see the monitor",
      "An attack performed on servers with broken display cards",
      "An automated scan that runs with the computer screen turned off"
    ],
    correctAnswer: 0,
    explanation: "In blind SQLi, database output and errors are hidden. Attackers deduce data bit by bit by analyzing boolean differences (e.g. page renders differently) or injecting time-delay functions (`SLEEP()`).",
    officialRef: "PCES-30-01 Block 4.2 - Blind SQL Injection",
    tags: ["blind-sqli", "time-based", "boolean-based"]
  },
  {
    id: "pces-4-031",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "ORM & SQL Injection",
    difficulty: "Intermediate",
    question: "Do Object-Relational Mappers (ORMs like SQLAlchemy or Django ORM) completely eliminate SQL injection vulnerabilities?",
    codeSnippet: "# Safe ORM usage:\nUser.query.filter_by(username=user_input).first()\n\n# VULNERABLE raw SQL inside ORM:\ndb.session.execute(text(f'SELECT * FROM users WHERE name = \"{user_input}\"'))",
    options: [
      "No; while standard ORM methods use parameterization, developers can still introduce SQLi if they use raw SQL escape hatches (`text()`, `raw()`) with string formatting",
      "Yes, ORMs make SQL injection mathematically impossible in all cases",
      "No, ORMs increase SQL injection risk by 1000%",
      "Yes, because ORMs translate Python code to C++"
    ],
    correctAnswer: 0,
    explanation: "ORMs provide parameterized queries for standard operations, but developers frequently introduce vulnerabilities when using raw SQL clauses (`raw()`, `extra()`, `text()`) with concatenated strings.",
    officialRef: "PCES-30-01 Block 4.2 - ORM Security",
    tags: ["orm", "sqlalchemy", "raw-sql", "parameterization"]
  },
  {
    id: "pces-4-032",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "XPath Injection",
    difficulty: "Intermediate",
    question: "What is XPath Injection in Python applications that query XML data?",
    codeSnippet: "# Vulnerable XPath query:\nquery = f'//users/user[username/text()=\"{user_input}\" and password/text()=\"{pwd_input}\"]'\n# Attacker input: ' or '1'='1\n# Bypasses XML authentication checks!",
    options: [
      "Manipulating untrusted input concatenated into an XPath query string to alter the XML query logic and access unauthorized data elements",
      "Injecting mathematical division by zero into coordinate axes",
      "Overwriting Windows system paths in the PATH variable",
      "Encrypting XML files with a public key"
    ],
    correctAnswer: 0,
    explanation: "XPath injection occurs when untrusted input is concatenated into XML navigation queries, allowing attackers to manipulate XPath syntax to extract hidden elements or bypass authentication.",
    officialRef: "PCES-30-01 Block 4.2 - XPath Injection",
    tags: ["xpath-injection", "xml-security", "query-manipulation"]
  },
  {
    id: "pces-4-033",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Format String Vulnerabilities",
    difficulty: "Intermediate",
    question: "Why can evaluating untrusted format strings (e.g. `user_string.format(...)`) lead to information leakage in Python?",
    codeSnippet: "# Vulnerability: Untrusted format string\nsecret_key = 'super_secret_api_key'\n# Attacker provides format string: '{event.__init__.__globals__[secret_key]}'\nleaked = user_format_string.format(event=MyClass())",
    options: [
      "Python's `.format()` method allows accessing object attributes and global variable namespaces via attribute traversal, exposing in-memory secrets",
      "It crashes the computer's graphics driver",
      "It converts numbers into uppercase letters",
      "It deletes all formatting from text documents"
    ],
    correctAnswer: 0,
    explanation: "Unvalidated format strings allow attackers to traverse object attributes (e.g. `{obj.__init__.__globals__}`) to extract global variables, configuration secrets, and API keys from process memory.",
    officialRef: "PCES-30-01 Block 4.2 - Format String Leaks",
    tags: ["format-strings", "information-disclosure", "attribute-traversal"]
  },
  {
    id: "pces-4-034",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Input Sanitization with re",
    difficulty: "Beginner",
    question: "Which regular expression function in Python safely replaces or strips all characters except alphanumeric characters from a string?",
    codeSnippet: "import re\nuser_input = 'my_file;rm -rf /..'\n# Replace any non-alphanumeric character with empty string\nsanitized = re.sub(r'[^a-zA-Z0-9]', '', user_input)\nprint(sanitized)  # Output: 'myfile' (safe!)",
    options: [
      "re.sub(r'[^a-zA-Z0-9]', '', input_str)",
      "re.match()",
      "re.findall()",
      "re.split()"
    ],
    correctAnswer: 0,
    explanation: "`re.sub(pattern, replacement, string)` substitutes matching characters. Using `[^a-zA-Z0-9]` matches any character outside alphanumeric sets, stripping dangerous metacharacters.",
    officialRef: "PCES-30-01 Block 4.2 - Regex Sanitization",
    tags: ["re-sub", "regex", "input-sanitization"]
  },
  {
    id: "pces-4-035",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Secure File Path Joining",
    difficulty: "Intermediate",
    question: "Why is `os.path.join('/safe/dir', user_input)` INSUFFICIENT to prevent path traversal if `user_input` starts with a slash (e.g. `'/etc/passwd'`)?",
    codeSnippet: "import os\n# Dangerous behavior of os.path.join:\n# If a component is an absolute path (starts with '/'), ALL PREVIOUS PATHS ARE DISCARDED!\nresult = os.path.join('/safe/dir', '/etc/passwd')\nprint(result)  # Output: '/etc/passwd' (Sandbox escaped!)",
    options: [
      "In `os.path.join()`, if any component is an absolute path starting with a slash, all previous path components are discarded, returning the absolute path directly",
      "`os.path.join()` only works on Windows",
      "`os.path.join()` encrypts paths with AES",
      "`os.path.join()` is deprecated in Python 3"
    ],
    correctAnswer: 0,
    explanation: "`os.path.join('/base', '/etc/passwd')` returns `'/etc/passwd'`, completely discarding `'/base'`. Developers must sanitize filenames or use `pathlib.Path` sandboxing.",
    officialRef: "PCES-30-01 Block 4.2 - Path Security Traps",
    tags: ["os-path-join", "path-traversal", "gotchas"]
  },
  {
    id: "pces-4-036",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Header Injection",
    difficulty: "Intermediate",
    question: "What is HTTP Header Injection (CRLF Injection) and what characters enable it?",
    codeSnippet: "# CRLF Injection: Carriage Return (\\r / %0D) and Line Feed (\\n / %0A)\n# Attacker injects new headers or response bodies into unescaped HTTP response:\n# 'user_input\\r\\nSet-Cookie: session=hacked\\r\\n\\r\\n<html>Defaced</html>'",
    options: [
      "Injecting Carriage Return (`\\r`) and Line Feed (`\\n`) sequences into header values to insert fraudulent HTTP response headers or split response bodies",
      "Injecting HTML tags into database queries",
      "Overwriting network interface MAC addresses",
      "Deleting HTTP headers over Wi-Fi"
    ],
    correctAnswer: 0,
    explanation: "CRLF (`\r\n`) denotes the end of an HTTP header. Injecting CRLF into unvalidated header data allows attackers to add arbitrary headers (e.g. `Set-Cookie`) or split the HTTP response to execute XSS.",
    officialRef: "PCES-30-01 Block 4.2 - Header Injection",
    tags: ["crlf-injection", "http-headers", "response-splitting"]
  },
  {
    id: "pces-4-037",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Command Injection via shlex.split",
    difficulty: "Intermediate",
    question: "Why is `subprocess.run(shlex.split(user_input))` STILL vulnerable if `user_input` contains command flags that trigger arbitrary code execution?",
    codeSnippet: "# Example: user_input = 'find / -exec sh -i \\;'\n# shlex.split creates: ['find', '/', '-exec', 'sh', '-i', ';']\n# Passed to subprocess with shell=False, but 'find -exec' launches a shell natively!",
    options: [
      "Certain legitimate binaries (like `find`, `vim`, `tar`, `awk`) possess native execution flags (`-exec`, `--checkpoint-action`) that launch shells without needing shell metacharacters",
      "shlex.split only works on numbers",
      "shlex.split converts strings to base64",
      "shlex.split requires internet access"
    ],
    correctAnswer: 0,
    explanation: "Even with `shell=False`, allowing users to specify the command or flags directly is vulnerable if the binary has built-in execution capabilities (e.g. `find -exec`, `nmap --script`).",
    officialRef: "PCES-30-01 Block 4.2 - Argument Injection",
    tags: ["argument-injection", "shlex-split", "living-off-the-land"]
  },
  {
    id: "pces-4-038",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Preventing SQLi in Dynamic IN Clauses",
    difficulty: "Intermediate",
    question: "How do you securely parameterize an SQL query with a variable-length list of IDs (e.g. `[101, 102, 103]`) in `sqlite3`?",
    codeSnippet: "ids = [101, 102, 103]\n# Dynamically generate matching number of '?' placeholders, then pass parameters safely\nplaceholders = ', '.join(['?'] * len(ids))\nquery = f'SELECT * FROM orders WHERE id IN ({placeholders})'\ncursor.execute(query, ids)",
    options: [
      "Generate a string of comma-separated `?` placeholders matching the list length, and pass the list as the parameters tuple",
      "Concatenate the IDs directly into the SQL string with `f'{ids}'`",
      "Convert the list of IDs into XML",
      "Drop the database and recreate it"
    ],
    correctAnswer: 0,
    explanation: "Generate safe placeholders (`?, ?, ?`) corresponding to the number of elements, ensuring all list elements are passed out-of-band as parameterized data.",
    officialRef: "PCES-30-01 Block 4.2 - Dynamic SQL Parameterization",
    tags: ["in-clause", "sqlite3", "parameterization"]
  },
  {
    id: "pces-4-039",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Symlink Attacks",
    difficulty: "Intermediate",
    question: "What is a Symlink (Symbolic Link) vulnerability in file operations?",
    codeSnippet: "# Symlink attack scenario:\n# Application writes to /tmp/audit.log\n# Attacker creates symlink: ln -s /etc/passwd /tmp/audit.log\n# Application runs as root and overwrites /etc/passwd!",
    options: [
      "An attacker creates a symbolic link pointing to a sensitive system file, tricking a privileged application into reading or overwriting that sensitive file",
      "A broken network cable link",
      "A duplicate hyperlink on a web page",
      "A virus that infects CPU cache"
    ],
    correctAnswer: 0,
    explanation: "In a symlink attack (or TOCTOU symlink race), an unprivileged attacker creates a symlink from an expected temporary file location to a target system file (like `/etc/passwd`), causing a privileged process to overwrite it.",
    officialRef: "PCES-30-01 Block 4.2 - Symlink Vulnerabilities",
    tags: ["symlink", "toctou", "file-security"]
  },
  {
    id: "pces-4-040",
    track: 'pces',
    section: "Section 4",
    chapter: "4.2",
    category: "Safe Symlink Verification",
    difficulty: "Intermediate",
    question: "Which method in `pathlib.Path` checks whether a given file path is a symbolic link?",
    codeSnippet: "from pathlib import Path\np = Path('/tmp/audit_upload')\nif p.is_symlink():\n    raise SecurityError('Refusing to process symbolic link!')",
    options: [
      "p.is_symlink()",
      "p.check_link()",
      "p.is_shortcut()",
      "p.has_alias()"
    ],
    correctAnswer: 0,
    explanation: "`Path.is_symlink()` returns `True` if the path points to a symbolic link, allowing security code to reject untrusted symlinks before writing data.",
    officialRef: "PCES-30-01 Block 4.2 - File Security",
    tags: ["is_symlink", "pathlib", "symlink-defense"]
  },
  {
    id: "pces-4-041",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Pickle Insecurity",
    difficulty: "Intermediate",
    question: "Why is deserializing untrusted data with Python's standard `pickle.loads()` a critical security flaw?",
    codeSnippet: "import pickle\n# Pickle allows arbitrary code execution via the __reduce__ method!\n# Deserializing attacker-controlled pickle data executes arbitrary OS shell commands!",
    options: [
      "Pickle allows arbitrary code execution during deserialization by automatically executing the object's `__reduce__` method",
      "Pickle compresses data too much, causing CPU crashes",
      "Pickle files can only be read on Windows",
      "Pickle cannot serialize dictionaries"
    ],
    correctAnswer: 0,
    explanation: "The `pickle` module is explicitly NOT secure against untrusted data. A crafted pickle payload using `__reduce__` triggers arbitrary Python and OS code execution immediately upon unpickling.",
    officialRef: "PCES-30-01 Block 4.3 - Insecure Deserialization",
    tags: ["pickle", "arbitrary-code-execution", "deserialization", "cwe-502"]
  },
  {
    id: "pces-4-042",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Pickle Exploit Mechanics",
    difficulty: "Intermediate",
    question: "Which special dunder method in Python classes is exploited in pickle payloads to execute arbitrary operating system commands upon deserialization?",
    codeSnippet: "import pickle, os\n\nclass Exploit:\n    def __reduce__(self):\n        # Instructs pickle to execute os.system with given arguments upon unpickling!\n        return (os.system, ('cat /etc/passwd',))\n\npayload = pickle.dumps(Exploit())\npickle.loads(payload)  # Triggers execution!",
    options: [
      "__reduce__",
      "__init__",
      "__str__",
      "__del__"
    ],
    correctAnswer: 0,
    explanation: "The `__reduce__()` method instructs the pickle machine which callable and tuple of arguments to invoke when reconstructing the object, allowing attackers to invoke `os.system` or `subprocess.Popen`.",
    officialRef: "PCES-30-01 Block 4.3 - Pickle Exploitation",
    tags: ["reduce", "pickle-exploit", "cwe-502"]
  },
  {
    id: "pces-4-043",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Safe Serialization Alternatives",
    difficulty: "Beginner",
    question: "What safe serialization format should be used instead of `pickle` for untrusted network communications?",
    codeSnippet: "# Safe alternative: JSON only parses primitive data types (strings, numbers, lists, dicts)\n# Cannot instantiate arbitrary classes or execute code\nimport json\nsafe_data = json.loads(user_payload)",
    options: [
      "JSON (JavaScript Object Notation)",
      "pickle",
      "marshal",
      "shelve"
    ],
    correctAnswer: 0,
    explanation: "JSON is a pure data interchange format supporting only primitives (strings, numbers, booleans, lists, dictionaries). It cannot instantiate arbitrary Python classes or execute code upon deserialization.",
    officialRef: "PCES-30-01 Block 4.3 - Safe Serialization",
    tags: ["json", "safe-serialization", "pickle-alternative"]
  },
  {
    id: "pces-4-044",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "YAML Insecurity",
    difficulty: "Intermediate",
    question: "Why is `yaml.load(payload, Loader=yaml.Loader)` dangerous in PyYAML, and what is the secure replacement?",
    codeSnippet: "# VULNERABLE: yaml.load can instantiate arbitrary Python objects!\n# SECURE:\nimport yaml\nsafe_data = yaml.safe_load(user_yaml_string)",
    options: [
      "`yaml.load()` can instantiate arbitrary Python objects and execute code; `yaml.safe_load()` restricts parsing to basic types",
      "`yaml.safe_load()` encrypts the YAML file with AES",
      "`yaml.load()` only works on Python 2",
      "There is no security difference"
    ],
    correctAnswer: 0,
    explanation: "PyYAML's standard loader supports full Python object tags (e.g. `!!python/object/apply:os.system`), enabling remote code execution. `yaml.safe_load()` disables object instantiation, parsing only primitives.",
    officialRef: "PCES-30-01 Block 4.3 - YAML Security",
    tags: ["yaml", "safe_load", "pyyaml-vulnerability"]
  },
  {
    id: "pces-4-045",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "XML External Entity (XXE)",
    difficulty: "Intermediate",
    question: "What is an XML External Entity (XXE) vulnerability?",
    codeSnippet: "# XXE attack payload:\n# <!DOCTYPE test [ <!ENTITY xxe SYSTEM \"file:///etc/passwd\"> ]>\n# <user><name>&xxe;</name></user>\n# Parser resolves entity and leaks /etc/passwd in response!",
    options: [
      "An attack where an XML parser is coerced into evaluating external system entity references, leading to internal file disclosure or SSRF",
      "An XML parser deleting database records",
      "A technique for converting XML into HTML",
      "A syntax error in XML closing tags"
    ],
    correctAnswer: 0,
    explanation: "XXE vulnerabilities occur when an XML parser processes external entity definitions referencing local files (`file:///etc/passwd`) or internal network resources (`http://169.254.169.254/`), leaking data.",
    officialRef: "PCES-30-01 Block 4.3 - XXE Attacks",
    tags: ["xxe", "xml-external-entity", "file-disclosure"]
  },
  {
    id: "pces-4-046",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Defending Against XXE",
    difficulty: "Intermediate",
    question: "Which Python library is recommended by OWASP as a drop-in replacement to parse XML securely and defend against XXE and entity expansion bombs?",
    codeSnippet: "# Using defusedxml for secure XML parsing\nimport defusedxml.ElementTree as ET\ntree = ET.fromstring(untrusted_xml_data)  # Safely rejects entity expansion and external entities!",
    options: [
      "defusedxml",
      "xml.etree.ElementTree with default settings",
      "simplexml",
      "xmlbuilder"
    ],
    correctAnswer: 0,
    explanation: "`defusedxml` is the industry-standard package designed to protect against all known XML vulnerabilities (XXE, quadratic blowup, billion laughs entity expansion) across standard Python XML parsers.",
    officialRef: "PCES-30-01 Block 4.3 - XML Defense",
    tags: ["defusedxml", "xxe-mitigation", "xml-hardening"]
  },
  {
    id: "pces-4-047",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Billion Laughs Attack",
    difficulty: "Intermediate",
    question: "What is the 'Billion Laughs' (XML Entity Expansion) attack?",
    codeSnippet: "# Billion Laughs payload:\n# <!ENTITY lol \"lol\">\n# <!ENTITY lol1 \"&lol;&lol;&lol;...\"\n# ...\n# Exponential expansion exhausts all available server RAM (Denial of Service)!",
    options: [
      "An exponential XML entity expansion attack that exhausts server RAM and causes an immediate Denial of Service (DoS)",
      "A joke posted to a cybersecurity mailing list",
      "A virus that prints smiley faces on computer screens",
      "A database query that takes 1 billion seconds"
    ],
    correctAnswer: 0,
    explanation: "The Billion Laughs attack defines nested XML entities that exponentially expand in memory during parsing, consuming gigabytes of RAM within milliseconds and crashing the server via OOM.",
    officialRef: "PCES-30-01 Block 4.3 - XML DoS",
    tags: ["billion-laughs", "entity-expansion", "dos"]
  },
  {
    id: "pces-4-048",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Dangers of eval()",
    difficulty: "Beginner",
    question: "Why is calling `eval(user_input)` considered one of the most hazardous coding practices in Python?",
    codeSnippet: "# VULNERABLE:\nresult = eval(user_input)\n# If user_input is '__import__(\"os\").system(\"rm -rf /\")',\n# it executes directly inside the Python interpreter!",
    options: [
      "`eval()` executes arbitrary Python expressions passed to it, granting full code execution privileges to untrusted input",
      "`eval()` only works on integer additions",
      "`eval()` slows down the computer monitor",
      "`eval()` causes syntax errors in all strings"
    ],
    correctAnswer: 0,
    explanation: "`eval()` parses and evaluates arbitrary Python expressions directly in the running interpreter. Any user input passed to `eval()` allows instant, trivial remote code execution (RCE).",
    officialRef: "PCES-30-01 Block 4.3 - Dangerous Functions",
    tags: ["eval", "rce", "code-injection"]
  },
  {
    id: "pces-4-049",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Safe Evaluation with ast",
    difficulty: "Intermediate",
    question: "Which standard library function safely evaluates a string containing Python literal structures (strings, numbers, tuples, lists, dicts, booleans) without executing code?",
    codeSnippet: "import ast\n# SECURE literal parsing:\nsafe_dict = ast.literal_eval('{\"role\": \"user\", \"id\": 42}')\n# Rejects functions, method calls, and arbitrary code execution!",
    options: [
      "ast.literal_eval()",
      "eval()",
      "exec()",
      "json.eval()"
    ],
    correctAnswer: 0,
    explanation: "`ast.literal_eval()` safely evaluates an expression node or string containing only Python literal structures. It raises an exception if the expression attempts to execute functions or code.",
    officialRef: "PCES-30-01 Block 4.3 - Safe Parsing",
    tags: ["literal_eval", "ast", "safe-parsing"]
  },
  {
    id: "pces-4-050",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Dangers of exec()",
    difficulty: "Beginner",
    question: "How does `exec()` differ from `eval()` in Python, and what is its security implication?",
    codeSnippet: "# exec() can execute complex multi-line statements, class definitions, and loops\nexec('''\nimport os\nos.system(\"touch /tmp/pwned\")\n''')",
    options: [
      "`eval()` only evaluates single expressions; `exec()` can execute multi-line statements, imports, and arbitrary system code dynamically, presenting severe RCE risk",
      "`exec()` is completely safe and encrypted",
      "`exec()` only runs on executive computers",
      "`exec()` requires root privileges to import math"
    ],
    correctAnswer: 0,
    explanation: "`eval()` evaluates a single expression and returns a value. `exec()` dynamically executes arbitrary multi-line Python code, statements, and imports, making untrusted input fatal to security.",
    officialRef: "PCES-30-01 Block 4.3 - Dangerous Functions",
    tags: ["exec", "rce", "dynamic-execution"]
  }
];
