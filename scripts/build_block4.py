#!/usr/bin/env python3
import json

cards = []

def add_c(id_num, chap, cat, diff, q, snippet, opts, ans, exp, ref, tags):
    cards.append({
        "id": f"pces-4-{id_num:03d}",
        "section": "Section 4",
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

# --- CHAPTER 4.1: Secure Software Development Lifecycle & Code Review (Cards 1-20) ---
add_c(1, "4.1", "Secure SDLC", "Beginner",
      "What does 'Shift-Left' mean in secure software development?",
      "# Shift-Left security paradigm:\n# Traditional: Security tested right before release (expensive, delays release)\n# Shift-Left: Security requirements, threat modeling, and SAST integrated during planning and coding!",
      ["Integrating security testing, threat modeling, and reviews early in the design and development phases rather than waiting until right before deployment", "Moving all servers to the left side of the data center room", "Writing all code from right-to-left using Arabic script", "Shifting all developers to part-time contractors"],
      0,
      "'Shift-Left' moves security activities earlier in the development lifecycle (requirements, design, coding, CI/CD), reducing the cost and effort of remediating vulnerabilities.",
      "PCES-30-01 Block 4.1 - Secure SDLC",
      ["shift-left", "sdlc", "security-integration"])

add_c(2, "4.1", "Static Application Security Testing", "Beginner",
      "Which popular open-source Python tool analyzes AST (Abstract Syntax Trees) to find common security issues like hardcoded passwords, shell injections, and insecure deserialization?",
      "# Running static security analysis on Python codebase\n# $ bandit -r my_app/ -ll\n# Discovers insecure temp files, pickle usage, hardcoded passwords",
      ["bandit", "pytest", "black", "mypy"],
      0,
      "`bandit` is the premier dedicated security linter for Python that parses Python source code AST to report security flaws (CWE issues, dangerous functions, weak ciphers).",
      "PCES-30-01 Block 4.1 - SAST & Bandit",
      ["bandit", "sast", "ast-analysis", "python-security"])

add_c(3, "4.1", "Dependency Auditing", "Beginner",
      "Which tool is specifically designed to audit Python dependencies listed in `requirements.txt` or active environments against known vulnerability databases?",
      "# Checking installed packages for known CVE vulnerabilities\n# $ pip-audit\n# Checks packages against PyPI advisory database and OSV",
      ["pip-audit", "pip install --upgrade", "git log", "pylint"],
      0,
      "`pip-audit` scans Python packages in environments or requirement files for known security vulnerabilities using official vulnerability databases (OSV, PyPA advisory database).",
      "PCES-30-01 Block 4.1 - Dependency Auditing",
      ["pip-audit", "vulnerability-scanning", "supply-chain"])

add_c(4, "4.1", "Peer Code Review", "Beginner",
      "What is a primary objective of security-focused Peer Code Reviews?",
      "# Peer review checklist in pull request:\n# - Is all user input validated and sanitized?\n# - Are database queries parameterized?\n# - Are secrets kept out of source code?",
      ["To identify logic bugs, security anti-patterns, and vulnerabilities before code is merged into production branches", "To judge who writes code the fastest", "To ensure variable names are in Latin", "To format line breaks according to personal preference"],
      0,
      "Security code reviews examine pull requests for design flaws, improper validation, dangerous functions, and authentication bypasses before software reaches staging or production.",
      "PCES-30-01 Block 4.1 - Code Review",
      ["code-review", "peer-review", "defect-detection"])

add_c(5, "4.1", "SAST vs DAST", "Intermediate",
      "What is the difference between Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST)?",
      "# SAST: Inspects non-running source code (white-box, e.g. bandit)\n# DAST: Interacts with running application from the outside without source code (black-box, e.g. OWASP ZAP)",
      ["SAST inspects resting source code without executing it; DAST tests the running application from the outside by sending real HTTP probes", "SAST is for mobile apps; DAST is for desktops", "SAST requires an internet connection; DAST runs offline", "SAST only checks hardware temperature"],
      0,
      "SAST analyzes source code or bytecode statically without running the program (white-box). DAST interacts with the deployed, running application dynamically via external inputs (black-box).",
      "PCES-30-01 Block 4.1 - SAST vs DAST",
      ["sast", "dast", "security-testing"])

add_c(6, "4.1", "Threat Modeling in Sprints", "Intermediate",
      "How should security user stories or 'Abuse Cases' be structured in Agile security planning?",
      "# Agile Abuse Case example:\n# 'As an unauthorized attacker, I want to inject malicious SQL into the search field\n# in order to exfiltrate other customers' private credit card records.'",
      ["As an attacker persona describing a malicious action and intended harmful outcome to guide countermeasure design", "As a list of hardware parts to purchase", "As a legal contract with insurance providers", "As a description of office furniture"],
      0,
      "Abuse cases and evil user stories articulate how an adversary might attack or misuse a system, helping engineers design concrete security acceptance criteria and test cases.",
      "PCES-30-01 Block 4.1 - Threat Modeling",
      ["abuse-cases", "evil-user-stories", "agile-security"])

add_c(7, "4.1", "Fail-Secure Error Handling", "Intermediate",
      "What security vulnerability is introduced when generic exception handlers swallow errors and return sensitive debugging data?",
      "# Insecure exception handling:\ntry:\n    authenticate_db(username, password)\nexcept Exception as e:\n    # Vulnerability: Leaks database connection string and internal paths to user!\n    return {'error': str(e), 'traceback': traceback.format_exc()}",
      ["Information Disclosure: Exposes internal database stack traces, usernames, and file paths to potential attackers", "Denial of service", "CPU overheating", "Buffer overflow in CPython runtime"],
      0,
      "Returning detailed stack traces, file system paths, or raw database error messages exposes internal architectural details (Information Disclosure) that attackers use to craft exploits.",
      "PCES-30-01 Block 4.1 - Error Handling",
      ["information-disclosure", "stack-trace", "fail-secure"])

add_c(8, "4.1", "Fail-Secure Defaults", "Intermediate",
      "In an authorization function, what should the default return value be if an unexpected exception or network failure occurs?",
      "# Fail-secure authorization policy\ndef is_authorized(user_id, resource) -> bool:\n    try:\n        return check_policy_engine(user_id, resource)\n    except PolicyEngineUnavailable:\n        # Default DENY upon failure!\n        logger.error('Policy engine down; denying access safely')\n        return False",
      ["`False` (Deny access)", "`True` (Allow access to avoid inconveniencing the user)", "`None`", "`'grant_admin'\""],
      0,
      "A fail-secure system defaults to denying access whenever an error, timeout, or unexpected exception occurs, ensuring system integrity and confidentiality.",
      "PCES-30-01 Block 4.1 - Secure Defaults",
      ["fail-secure", "default-deny", "authorization"])

add_c(9, "4.1", "Input Validation Strategy", "Beginner",
      "Why is 'Allowlisting' (Positive Validation) preferred over 'Denylisting' (Negative Filtering) for input validation?",
      "# Allowlisting validation: Only accepts characters matching strict permitted pattern\nimport re\ndef validate_alphanumeric_username(username: str) -> bool:\n    return bool(re.match(r'^[a-zA-Z0-9_]{3,20}$', username))",
      ["Allowlists specify strictly what is allowed, avoiding bypasses that circumvent denylists with alternative encodings, casing, or new characters", "Allowlists run 100 times faster", "Denylists are forbidden by PEP 8", "Allowlists do not require regular expressions"],
      0,
      "Denylists frequently fail because attackers invent new attack payloads, bypasses, or alternative character encodings. Allowlists explicitly define the acceptable format and reject everything else.",
      "PCES-30-01 Block 4.1 - Input Validation",
      ["allowlisting", "positive-validation", "input-hygiene"])

add_c(10, "4.1", "Output Encoding", "Intermediate",
      "What is 'Output Encoding' and which vulnerability class does it primarily mitigate?",
      "# Context-aware output encoding in web templates\n# User input '<script>alert(1)</script>' is encoded as:\n# '&lt;script&gt;alert(1)&lt;/script&gt;' so the browser renders it as plain text rather than executing script",
      ["Encoding special characters into safe representations before rendering in browsers; primarily mitigates Cross-Site Scripting (XSS)", "Compressing files with gzip", "Encrypting database tables with AES", "Hashing passwords with bcrypt"],
      0,
      "Output encoding translates potentially dangerous characters (e.g. `<` to `&lt;`) so the rendering engine (e.g. web browser) interprets them safely as text rather than executable instructions, preventing XSS.",
      "PCES-30-01 Block 4.1 - Output Encoding",
      ["output-encoding", "xss-defense", "sanitization"])

add_c(11, "4.1", "CI/CD Security Automation", "Beginner",
      "How do automated security linters in CI/CD pipelines enforce the 'Security Quality Gate'?",
      "# CI/CD workflow step (e.g. GitHub Actions):\n# - name: Run Bandit Security Scan\n#   run: bandit -r src/ -lll -x tests/\n# Fails pipeline if any High severity issue is detected!",
      ["They automatically block pull requests from merging if security issues above a defined threshold are detected", "They email the developer's family", "They automatically delete the git repository", "They rewrite Python code into Java"],
      0,
      "Security quality gates fail the CI/CD pipeline build if static analyzers (like Bandit or pip-audit) find high-severity vulnerabilities, preventing insecure code from reaching production.",
      "PCES-30-01 Block 4.1 - CI/CD Security",
      ["security-gates", "ci-cd", "automation"])

add_c(12, "4.1", "Secret Scanning", "Beginner",
      "What is the purpose of automated 'Secret Scanning' tools (like Trufflehog or Gitleaks) in development workflows?",
      "# Secret scanning finds patterns like:\n# 'ghp_[A-Za-z0-9_]{36}' (GitHub tokens)\n# 'AKIA[0-9A-Z]{16}' (AWS Access Keys)\n# in source code commits and git history before pushing",
      ["To scan git commits and history for accidentally committed API keys, tokens, and private certificates", "To hide the source code from other developers", "To encrypt the repository with a password", "To convert code into secret binary files"],
      0,
      "Secret scanners scan repositories, commit history, and pull requests using regex patterns and Shannon entropy to detect leaked API keys, tokens, and passwords.",
      "PCES-30-01 Block 4.1 - Secret Scanning",
      ["secret-scanning", "git-leaks", "credential-protection"])

add_c(13, "4.1", "Software Bill of Materials", "Intermediate",
      "What is an SBOM (Software Bill of Materials)?",
      "# SBOM JSON manifest listing all software components, libraries, versions, and license details\n# (e.g. CycloneDX or SPDX format)",
      ["A formal, machine-readable inventory of all software components, third-party libraries, and dependencies that make up an application", "An invoice for purchasing cloud computing credits", "A hardware specification manual for server motherboards", "A list of employee salaries in the IT department"],
      0,
      "An SBOM is a structured nested inventory of software components, dependencies, and metadata, allowing organizations to rapidly query if they are impacted when a new CVE is announced.",
      "PCES-30-01 Block 4.1 - Supply Chain & SBOM",
      ["sbom", "supply-chain", "dependency-inventory"])

add_c(14, "4.1", "Code Complexity & Security", "Intermediate",
      "Why does high cyclomatic code complexity correlate with higher security defect rates?",
      "# High cyclomatic complexity: Deeply nested if/else statements with 20 branching pathways\n# Makes full test coverage and human security reasoning extremely difficult",
      ["Overly complex, convoluted code with many nested branches makes human reasoning, auditing, and edge-case testing difficult, hiding bugs and logic flaws", "Complex code consumes more physical disk space", "Complex code cannot be compiled by Python", "Complex code runs only on 32-bit CPUs"],
      0,
      "High complexity makes it difficult for developers and auditors to reason about all execution paths, leading to overlooked edge cases, unhandled states, and vulnerabilities.",
      "PCES-30-01 Block 4.1 - Code Quality & Security",
      ["cyclomatic-complexity", "maintainability", "auditability"])

add_c(15, "4.1", "Security Champions", "Beginner",
      "What is a 'Security Champion' in modern software engineering teams?",
      "# Security champion model: A developer within an engineering squad who acts as a security advocate and liaison with central AppSec",
      ["A software developer embedded in an engineering team who acts as a security advocate, mentor, and liaison with the AppSec team", "The winner of an annual corporate video game tournament", "The executive with the highest cybersecurity insurance policy", "A security guard who stands outside the server room"],
      0,
      "Security Champions are developers within standard product teams who receive extra AppSec training to champion secure coding practices, conduct initial reviews, and scale security culture.",
      "PCES-30-01 Block 4.1 - Security Culture",
      ["security-champions", "appsec", "engineering-culture"])

add_c(16, "4.1", "Pre-Commit Hooks", "Beginner",
      "How do 'pre-commit hooks' (using tools like `pre-commit`) prevent vulnerabilities from entering git repositories?",
      "# .pre-commit-config.yaml\n# Automatically runs 'bandit', 'check-json', and 'detect-secrets' before allowing 'git commit' to complete!",
      ["They execute automated checks (linters, secret detection) locally on the developer's workstation before each commit, blocking the commit if checks fail", "They automatically commit code every 5 minutes", "They push all code directly to the production branch", "They encrypt the developer's laptop keyboard"],
      0,
      "Pre-commit hooks run automated scripts locally before a git commit is finalized, catching hardcoded secrets, syntax errors, and security issues before they are ever committed to version control.",
      "PCES-30-01 Block 4.1 - Developer Tooling",
      ["pre-commit", "git-hooks", "secret-prevention"])

add_c(17, "4.1", "Deprecation of Insecure Functions", "Intermediate",
      "Why does Bandit flag uses of `random.random()` or `random.choice()` as a medium-severity security warning?",
      "# Bandit warning B311: Standard pseudo-random generators are not suitable for security/cryptographic purposes\n# Attacker can predict the internal Mersenne Twister state after 624 outputs!",
      ["The `random` module uses the Mersenne Twister PRNG, which is completely deterministic and predictable, making it insecure for cryptographic tokens or keys", "The `random` module is deprecated in Python 3", "The `random` module causes memory leaks", "The `random` module only produces even numbers"],
      0,
      "Python's `random` module uses the Mersenne Twister algorithm. It is not cryptographically secure; an observer who sees 624 outputs can predict all past and future values. Use `secrets` instead.",
      "PCES-30-01 Block 4.1 - Bandit Findings",
      ["bandit-b311", "pseudo-random", "secrets"])

add_c(18, "4.1", "Threat Modeling Methodologies", "Intermediate",
      "Which threat modeling framework focuses specifically on six threat categories: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege?",
      "# The STRIDE Threat Model\n# Created by Microsoft to categorize software threat vectors",
      ["STRIDE", "DREAD", "PASTA", "OCTAVE"],
      0,
      "STRIDE is the canonical threat classification model mapping directly to security properties: Authenticity, Integrity, Non-repudiation, Confidentiality, Availability, and Authorization.",
      "PCES-30-01 Block 4.1 - Threat Modeling",
      ["stride", "threat-categories", "appsec"])

add_c(19, "4.1", "Defensive Programming", "Beginner",
      "What is 'Defensive Programming' in secure software engineering?",
      "# Defensive programming mindset:\n# Never trust input from external users, network calls, or third-party APIs\n# Always validate types, boundaries, lengths, and fail safely",
      ["Designing software to function predictably and safely despite unexpected inputs, external failures, or deliberate attacks", "Writing code while physically wearing armor", "Encrypting source code so competitors cannot read it", "Refusing to connect computers to the internet"],
      0,
      "Defensive programming is an engineering practice ensuring software behaves safely and robustly under unexpected conditions, verifying all assumptions and treating all inputs as untrusted.",
      "PCES-30-01 Block 4.1 - Defensive Programming",
      ["defensive-programming", "robustness", "input-handling"])

add_c(20, "4.1", "Dependency Pinning", "Beginner",
      "Why should production dependencies in `requirements.txt` be pinned to exact versions with hashes (e.g. `requests==2.31.0 --hash=sha256:...`)?",
      "# Pinning exact version and sha256 checksum in requirements.txt\n# Prevents automated updates from pulling compromised or malicious supply-chain package versions",
      ["It guarantees reproducible builds and protects against software supply chain attacks where a compromised newer version is maliciously published", "It makes Python run faster", "It reduces download bandwidth costs", "It allows developers to skip code reviews"],
      0,
      "Pinning exact version numbers and cryptographic hashes ensures deterministic builds and protects against supply chain attacks where maintainer accounts are hijacked to distribute backdoored updates.",
      "PCES-30-01 Block 4.1 - Supply Chain Hygiene",
      ["dependency-pinning", "hash-checking", "reproducible-builds"])

# --- CHAPTER 4.2: Injection Vulnerabilities & Path Traversal (Cards 21-40) ---
add_c(21, "4.2", "SQL Injection", "Intermediate",
      "Why is string formatting in SQL queries vulnerable to SQL Injection, and what is the secure fix in Python's `sqlite3`?",
      "# VULNERABLE:\nquery = f'SELECT * FROM users WHERE username = \"{user_input}\"'\ncursor.execute(query)\n\n# SECURE (Parameterized query):\ncursor.execute('SELECT * FROM users WHERE username = ?', (user_input,))",
      ["String formatting interpolates untrusted text as raw SQL code; Parameterized queries pass user input separately as literal data, preventing command injection", "Parameterized queries encrypt the database disk partition", "String formatting only works on integers", "Parameterized queries disable user authentication"],
      0,
      "String concatenation allows malicious input (e.g. `' OR '1'='1`) to alter the SQL parser structure. Parameterized queries (`?` or `%s`) send parameters out-of-band as literal data.",
      "PCES-30-01 Block 4.2 - SQL Injection",
      ["sql-injection", "parameterized-queries", "sqlite3"])

add_c(22, "4.2", "Command Injection", "Intermediate",
      "In the vulnerable snippet `subprocess.run(f'nslookup {host}', shell=True)`, how can an attacker execute arbitrary OS commands?",
      "# Vulnerable command injection:\n# Attacker inputs: 'example.com; cat /etc/shadow'\n# Resulting command: 'nslookup example.com; cat /etc/shadow'\n# Executed by the shell!",
      ["By injecting shell metacharacters like `;`, `&&`, or `|` followed by arbitrary shell commands (e.g. `'example.com; cat /etc/passwd'`)", "By entering an invalid IP address", "By unplugging the network cable", "By typing the command in reverse"],
      0,
      "With `shell=True`, the shell parses metacharacters (`;`, `&&`, `|`, `` ` ``), executing whatever command follows the delimiter with the privileges of the Python script.",
      "PCES-30-01 Block 4.2 - Command Injection",
      ["command-injection", "shell-true", "subprocess-vulnerabilities"])

add_c(23, "4.2", "Remediating Command Injection", "Intermediate",
      "How should the vulnerable command `subprocess.run(f'ping -c 1 {target}', shell=True)` be remediated securely?",
      "# Secure remediation:\nsubprocess.run(['ping', '-c', '1', target], shell=False, check=True)",
      ["Pass the command as a list of separate arguments with `shell=False`: `subprocess.run(['ping', '-c', '1', target], shell=False)`", "Use `os.system()` instead", "Encrypt the target string with ROT13", "Surround the command in double quotation marks"],
      0,
      "Passing arguments as a list with `shell=False` invokes the OS binary directly. The argument is treated strictly as a single string argument, completely eliminating shell command parsing.",
      "PCES-30-01 Block 4.2 - Command Injection Defense",
      ["subprocess-list", "shell-false", "remediation"])

add_c(24, "4.2", "Shell Escaping with shlex", "Intermediate",
      "If invoking a shell command is strictly unavoidable, which standard library function escapes shell metacharacters safely?",
      "import shlex, subprocess\nsafe_target = shlex.quote(user_target)\nsubprocess.run(f'ping -c 1 {safe_target}', shell=True)",
      ["shlex.quote()", "string.escape()", "os.clean()", "urllib.parse.quote()"],
      0,
      "`shlex.quote(s)` returns a shell-escaped version of the string, wrapping it in single quotes and escaping internal quotes to prevent command injection when shell execution is mandatory.",
      "PCES-30-01 Block 4.2 - Shell Escaping",
      ["shlex-quote", "command-injection", "escaping"])

add_c(25, "4.2", "Path Traversal", "Intermediate",
      "What is Path Traversal (Directory Traversal), and which character sequence is the primary signature of this attack?",
      "# Vulnerable file retrieval:\ndef get_user_file(filename):\n    # Attacker requests: '../../../../etc/passwd'\n    return open(f'/var/www/uploads/{filename}').read()",
      ["An attack where dot-dot-slash (`../` or `..\\`) sequences are used to navigate out of the intended directory and access arbitrary files on the system", "A technique for speeding up directory search indexing", "A method of converting absolute paths to relative paths", "A tool for defragmenting hard drive file paths"],
      0,
      "Path traversal exploits unvalidated file paths by using `../` (dot-dot-slash) sequences to escape the designated folder sandbox and read or overwrite sensitive system files (e.g. `/etc/passwd`).",
      "PCES-30-01 Block 4.2 - Path Traversal",
      ["path-traversal", "dot-dot-slash", "directory-traversal"])

add_c(26, "4.2", "Path Traversal Defense with pathlib", "Intermediate",
      "How can `pathlib.Path.resolve()` defend against Path Traversal attacks in Python?",
      "from pathlib import Path\n\nBASE_DIR = Path('/var/www/uploads').resolve()\n\ndef safe_read_file(user_filename: str) -> bytes:\n    # Resolve canonical absolute path (resolves all '..' and symlinks)\n    target_path = (BASE_DIR / user_filename).resolve()\n    # Verify that resolved target is inside BASE_DIR sandbox!\n    if not str(target_path).startswith(str(BASE_DIR)):\n        raise PermissionError('Path Traversal detected!')\n    return target_path.read_bytes()",
      ["By resolving the canonical absolute path (following all symlinks and `..` components) and verifying it starts with the authorized base directory", "By deleting all files containing dots", "By renaming all files to uppercase", "By converting the path to an IP address"],
      0,
      "Resolving the path with `resolve()` computes the true canonical location, eliminating all relative `..` components. Checking that the resolved path starts with the authorized base directory enforces the sandbox.",
      "PCES-30-01 Block 4.2 - Path Traversal Defense",
      ["pathlib", "resolve", "sandbox", "path-security"])

add_c(27, "4.2", "Null Byte Injection", "Intermediate",
      "What was 'Null Byte Injection' (`%00` / `\\x00`) in legacy C/Python file interactions, and how does modern Python 3 handle it?",
      "# Attempting to access file with null byte in Python 3:\ntry:\n    with open('document.pdf\\x00.jpg', 'r') as f:\n        pass\nexcept ValueError as e:\n    print(e)  # Output: 'embedded null character'",
      ["In legacy C libraries, a null byte terminated strings, allowing attackers to bypass `.jpg` extension checks; Python 3 raises `ValueError: embedded null character` automatically", "It permanently corrupts the operating system registry", "It converts the file to base64 format", "It encrypts the hard drive with zeroes"],
      0,
      "In legacy systems, null bytes (`\x00`) tricked extension checks (e.g. `shell.php\x00.png` treated as PNG by Python, but PHP by C runtime). Modern Python 3 rejects null bytes in paths with `ValueError`.",
      "PCES-30-01 Block 4.2 - Null Byte Injection",
      ["null-byte", "valueerror", "legacy-vulnerabilities"])

add_c(28, "4.2", "LDAP Injection", "Intermediate",
      "What is LDAP Injection and how does it occur in Python applications interfacing with Active Directory?",
      "# Vulnerable LDAP filter construction:\nfilter_str = f'(&(uid={user_input})(userPassword={pwd}))'\n# Attacker inputs: user_input = '*) (uid=*)) (| (uid=*'\n# Manipulates the LDAP query tree logic!",
      ["Constructing LDAP search filters via unescaped string concatenation, allowing attackers to manipulate query logic to bypass authentication or extract directory trees", "Flooding an LDAP server with UDP packets", "Stealing physical Ethernet cables from a domain controller", "Injecting Python code into a database table"],
      0,
      "LDAP injection occurs when untrusted user input is directly concatenated into LDAP search filters without escaping special characters (`*`, `(`, `)`, `&`, `|`), subverting query logic.",
      "PCES-30-01 Block 4.2 - LDAP Injection",
      ["ldap-injection", "active-directory", "injection-attacks"])

add_c(29, "4.2", "Second-Order SQL Injection", "Intermediate",
      "What is 'Second-Order SQL Injection'?",
      "# Second-order SQLi:\n# 1. Attacker stores payload in DB legitimately: username = \"admin'--\"\n# 2. Later, a background cron job runs: f'UPDATE stats SET last_login = NOW() WHERE user = \"{stored_user}\"'\n# 3. Payload executes upon SECONDARY retrieval!",
      ["Malicious payload is safely stored in the database first, but later retrieved and concatenated into a second vulnerable SQL query where it executes", "SQL injection performed by two attackers simultaneously", "SQL injection that only works on secondary backup database servers", "SQL injection that targets two tables at once"],
      0,
      "In second-order SQL injection, the malicious input is initially stored safely in the database. The flaw occurs later when the application retrieves the stored data and treats it as trusted, concatenating it into another query.",
      "PCES-30-01 Block 4.2 - Advanced SQL Injection",
      ["second-order-sqli", "stored-injection", "database-security"])

add_c(30, "4.2", "Blind SQL Injection", "Intermediate",
      "What is 'Blind SQL Injection' and how do attackers infer information when error messages and data are suppressed?",
      "# Time-based Blind SQL Injection payload:\n# ' OR IF(SUBSTRING(password,1,1)='a', SLEEP(5), 0) --\n# Attacker measures HTTP response latency to deduce characters one by one!",
      ["The application does not show SQL errors or returned data, so the attacker deduces information by observing boolean response changes or measuring server sleep delays (time-based)", "An attack launched by an attacker who cannot see the monitor", "An attack performed on servers with broken display cards", "An automated scan that runs with the computer screen turned off"],
      0,
      "In blind SQLi, database output and errors are hidden. Attackers deduce data bit by bit by analyzing boolean differences (e.g. page renders differently) or injecting time-delay functions (`SLEEP()`).",
      "PCES-30-01 Block 4.2 - Blind SQL Injection",
      ["blind-sqli", "time-based", "boolean-based"])

add_c(31, "4.2", "ORM & SQL Injection", "Intermediate",
      "Do Object-Relational Mappers (ORMs like SQLAlchemy or Django ORM) completely eliminate SQL injection vulnerabilities?",
      "# Safe ORM usage:\nUser.query.filter_by(username=user_input).first()\n\n# VULNERABLE raw SQL inside ORM:\ndb.session.execute(text(f'SELECT * FROM users WHERE name = \"{user_input}\"'))",
      ["No; while standard ORM methods use parameterization, developers can still introduce SQLi if they use raw SQL escape hatches (`text()`, `raw()`) with string formatting", "Yes, ORMs make SQL injection mathematically impossible in all cases", "No, ORMs increase SQL injection risk by 1000%", "Yes, because ORMs translate Python code to C++"],
      0,
      "ORMs provide parameterized queries for standard operations, but developers frequently introduce vulnerabilities when using raw SQL clauses (`raw()`, `extra()`, `text()`) with concatenated strings.",
      "PCES-30-01 Block 4.2 - ORM Security",
      ["orm", "sqlalchemy", "raw-sql", "parameterization"])

add_c(32, "4.2", "XPath Injection", "Intermediate",
      "What is XPath Injection in Python applications that query XML data?",
      "# Vulnerable XPath query:\nquery = f'//users/user[username/text()=\"{user_input}\" and password/text()=\"{pwd_input}\"]'\n# Attacker input: ' or '1'='1\n# Bypasses XML authentication checks!",
      ["Manipulating untrusted input concatenated into an XPath query string to alter the XML query logic and access unauthorized data elements", "Injecting mathematical division by zero into coordinate axes", "Overwriting Windows system paths in the PATH variable", "Encrypting XML files with a public key"],
      0,
      "XPath injection occurs when untrusted input is concatenated into XML navigation queries, allowing attackers to manipulate XPath syntax to extract hidden elements or bypass authentication.",
      "PCES-30-01 Block 4.2 - XPath Injection",
      ["xpath-injection", "xml-security", "query-manipulation"])

add_c(33, "4.2", "Format String Vulnerabilities", "Intermediate",
      "Why can evaluating untrusted format strings (e.g. `user_string.format(...)`) lead to information leakage in Python?",
      "# Vulnerability: Untrusted format string\nsecret_key = 'super_secret_api_key'\n# Attacker provides format string: '{event.__init__.__globals__[secret_key]}'\nleaked = user_format_string.format(event=MyClass())",
      ["Python's `.format()` method allows accessing object attributes and global variable namespaces via attribute traversal, exposing in-memory secrets", "It crashes the computer's graphics driver", "It converts numbers into uppercase letters", "It deletes all formatting from text documents"],
      0,
      "Unvalidated format strings allow attackers to traverse object attributes (e.g. `{obj.__init__.__globals__}`) to extract global variables, configuration secrets, and API keys from process memory.",
      "PCES-30-01 Block 4.2 - Format String Leaks",
      ["format-strings", "information-disclosure", "attribute-traversal"])

add_c(34, "4.2", "Input Sanitization with re", "Beginner",
      "Which regular expression function in Python safely replaces or strips all characters except alphanumeric characters from a string?",
      "import re\nuser_input = 'my_file;rm -rf /..'\n# Replace any non-alphanumeric character with empty string\nsanitized = re.sub(r'[^a-zA-Z0-9]', '', user_input)\nprint(sanitized)  # Output: 'myfile' (safe!)",
      ["re.sub(r'[^a-zA-Z0-9]', '', input_str)", "re.match()", "re.findall()", "re.split()"],
      0,
      "`re.sub(pattern, replacement, string)` substitutes matching characters. Using `[^a-zA-Z0-9]` matches any character outside alphanumeric sets, stripping dangerous metacharacters.",
      "PCES-30-01 Block 4.2 - Regex Sanitization",
      ["re-sub", "regex", "input-sanitization"])

add_c(35, "4.2", "Secure File Path Joining", "Intermediate",
      "Why is `os.path.join('/safe/dir', user_input)` INSUFFICIENT to prevent path traversal if `user_input` starts with a slash (e.g. `'/etc/passwd'`)?",
      "import os\n# Dangerous behavior of os.path.join:\n# If a component is an absolute path (starts with '/'), ALL PREVIOUS PATHS ARE DISCARDED!\nresult = os.path.join('/safe/dir', '/etc/passwd')\nprint(result)  # Output: '/etc/passwd' (Sandbox escaped!)",
      ["In `os.path.join()`, if any component is an absolute path starting with a slash, all previous path components are discarded, returning the absolute path directly", "`os.path.join()` only works on Windows", "`os.path.join()` encrypts paths with AES", "`os.path.join()` is deprecated in Python 3"],
      0,
      "`os.path.join('/base', '/etc/passwd')` returns `'/etc/passwd'`, completely discarding `'/base'`. Developers must sanitize filenames or use `pathlib.Path` sandboxing.",
      "PCES-30-01 Block 4.2 - Path Security Traps",
      ["os-path-join", "path-traversal", "gotchas"])

add_c(36, "4.2", "Header Injection", "Intermediate",
      "What is HTTP Header Injection (CRLF Injection) and what characters enable it?",
      "# CRLF Injection: Carriage Return (\\r / %0D) and Line Feed (\\n / %0A)\n# Attacker injects new headers or response bodies into unescaped HTTP response:\n# 'user_input\\r\\nSet-Cookie: session=hacked\\r\\n\\r\\n<html>Defaced</html>'",
      ["Injecting Carriage Return (`\\r`) and Line Feed (`\\n`) sequences into header values to insert fraudulent HTTP response headers or split response bodies", "Injecting HTML tags into database queries", "Overwriting network interface MAC addresses", "Deleting HTTP headers over Wi-Fi"],
      0,
      "CRLF (`\r\n`) denotes the end of an HTTP header. Injecting CRLF into unvalidated header data allows attackers to add arbitrary headers (e.g. `Set-Cookie`) or split the HTTP response to execute XSS.",
      "PCES-30-01 Block 4.2 - Header Injection",
      ["crlf-injection", "http-headers", "response-splitting"])

add_c(37, "4.2", "Command Injection via shlex.split", "Intermediate",
      "Why is `subprocess.run(shlex.split(user_input))` STILL vulnerable if `user_input` contains command flags that trigger arbitrary code execution?",
      "# Example: user_input = 'find / -exec sh -i \\;'\n# shlex.split creates: ['find', '/', '-exec', 'sh', '-i', ';']\n# Passed to subprocess with shell=False, but 'find -exec' launches a shell natively!",
      ["Certain legitimate binaries (like `find`, `vim`, `tar`, `awk`) possess native execution flags (`-exec`, `--checkpoint-action`) that launch shells without needing shell metacharacters", "shlex.split only works on numbers", "shlex.split converts strings to base64", "shlex.split requires internet access"],
      0,
      "Even with `shell=False`, allowing users to specify the command or flags directly is vulnerable if the binary has built-in execution capabilities (e.g. `find -exec`, `nmap --script`).",
      "PCES-30-01 Block 4.2 - Argument Injection",
      ["argument-injection", "shlex-split", "living-off-the-land"])

add_c(38, "4.2", "Preventing SQLi in Dynamic IN Clauses", "Intermediate",
      "How do you securely parameterize an SQL query with a variable-length list of IDs (e.g. `[101, 102, 103]`) in `sqlite3`?",
      "ids = [101, 102, 103]\n# Dynamically generate matching number of '?' placeholders, then pass parameters safely\nplaceholders = ', '.join(['?'] * len(ids))\nquery = f'SELECT * FROM orders WHERE id IN ({placeholders})'\ncursor.execute(query, ids)",
      ["Generate a string of comma-separated `?` placeholders matching the list length, and pass the list as the parameters tuple", "Concatenate the IDs directly into the SQL string with `f'{ids}'`", "Convert the list of IDs into XML", "Drop the database and recreate it"],
      0,
      "Generate safe placeholders (`?, ?, ?`) corresponding to the number of elements, ensuring all list elements are passed out-of-band as parameterized data.",
      "PCES-30-01 Block 4.2 - Dynamic SQL Parameterization",
      ["in-clause", "sqlite3", "parameterization"])

add_c(39, "4.2", "Symlink Attacks", "Intermediate",
      "What is a Symlink (Symbolic Link) vulnerability in file operations?",
      "# Symlink attack scenario:\n# Application writes to /tmp/audit.log\n# Attacker creates symlink: ln -s /etc/passwd /tmp/audit.log\n# Application runs as root and overwrites /etc/passwd!",
      ["An attacker creates a symbolic link pointing to a sensitive system file, tricking a privileged application into reading or overwriting that sensitive file", "A broken network cable link", "A duplicate hyperlink on a web page", "A virus that infects CPU cache"],
      0,
      "In a symlink attack (or TOCTOU symlink race), an unprivileged attacker creates a symlink from an expected temporary file location to a target system file (like `/etc/passwd`), causing a privileged process to overwrite it.",
      "PCES-30-01 Block 4.2 - Symlink Vulnerabilities",
      ["symlink", "toctou", "file-security"])

add_c(40, "4.2", "Safe Symlink Verification", "Intermediate",
      "Which method in `pathlib.Path` checks whether a given file path is a symbolic link?",
      "from pathlib import Path\np = Path('/tmp/audit_upload')\nif p.is_symlink():\n    raise SecurityError('Refusing to process symbolic link!')",
      ["p.is_symlink()", "p.check_link()", "p.is_shortcut()", "p.has_alias()"],
      0,
      "`Path.is_symlink()` returns `True` if the path points to a symbolic link, allowing security code to reject untrusted symlinks before writing data.",
      "PCES-30-01 Block 4.2 - File Security",
      ["is_symlink", "pathlib", "symlink-defense"])

# --- CHAPTER 4.3: Insecure Deserialization & Unsafe Operations (Cards 41-60) ---
add_c(41, "4.3", "Pickle Insecurity", "Intermediate",
      "Why is deserializing untrusted data with Python's standard `pickle.loads()` a critical security flaw?",
      "import pickle\n# Pickle allows arbitrary code execution via the __reduce__ method!\n# Deserializing attacker-controlled pickle data executes arbitrary OS shell commands!",
      ["Pickle allows arbitrary code execution during deserialization by automatically executing the object's `__reduce__` method", "Pickle compresses data too much, causing CPU crashes", "Pickle files can only be read on Windows", "Pickle cannot serialize dictionaries"],
      0,
      "The `pickle` module is explicitly NOT secure against untrusted data. A crafted pickle payload using `__reduce__` triggers arbitrary Python and OS code execution immediately upon unpickling.",
      "PCES-30-01 Block 4.3 - Insecure Deserialization",
      ["pickle", "arbitrary-code-execution", "deserialization", "cwe-502"])

add_c(42, "4.3", "Pickle Exploit Mechanics", "Intermediate",
      "Which special dunder method in Python classes is exploited in pickle payloads to execute arbitrary operating system commands upon deserialization?",
      "import pickle, os\n\nclass Exploit:\n    def __reduce__(self):\n        # Instructs pickle to execute os.system with given arguments upon unpickling!\n        return (os.system, ('cat /etc/passwd',))\n\npayload = pickle.dumps(Exploit())\npickle.loads(payload)  # Triggers execution!",
      ["__reduce__", "__init__", "__str__", "__del__"],
      0,
      "The `__reduce__()` method instructs the pickle machine which callable and tuple of arguments to invoke when reconstructing the object, allowing attackers to invoke `os.system` or `subprocess.Popen`.",
      "PCES-30-01 Block 4.3 - Pickle Exploitation",
      ["reduce", "pickle-exploit", "cwe-502"])

add_c(43, "4.3", "Safe Serialization Alternatives", "Beginner",
      "What safe serialization format should be used instead of `pickle` for untrusted network communications?",
      "# Safe alternative: JSON only parses primitive data types (strings, numbers, lists, dicts)\n# Cannot instantiate arbitrary classes or execute code\nimport json\nsafe_data = json.loads(user_payload)",
      ["JSON (JavaScript Object Notation)", "pickle", "marshal", "shelve"],
      0,
      "JSON is a pure data interchange format supporting only primitives (strings, numbers, booleans, lists, dictionaries). It cannot instantiate arbitrary Python classes or execute code upon deserialization.",
      "PCES-30-01 Block 4.3 - Safe Serialization",
      ["json", "safe-serialization", "pickle-alternative"])

add_c(44, "4.3", "YAML Insecurity", "Intermediate",
      "Why is `yaml.load(payload, Loader=yaml.Loader)` dangerous in PyYAML, and what is the secure replacement?",
      "# VULNERABLE: yaml.load can instantiate arbitrary Python objects!\n# SECURE:\nimport yaml\nsafe_data = yaml.safe_load(user_yaml_string)",
      ["`yaml.load()` can instantiate arbitrary Python objects and execute code; `yaml.safe_load()` restricts parsing to basic types", "`yaml.safe_load()` encrypts the YAML file with AES", "`yaml.load()` only works on Python 2", "There is no security difference"],
      0,
      "PyYAML's standard loader supports full Python object tags (e.g. `!!python/object/apply:os.system`), enabling remote code execution. `yaml.safe_load()` disables object instantiation, parsing only primitives.",
      "PCES-30-01 Block 4.3 - YAML Security",
      ["yaml", "safe_load", "pyyaml-vulnerability"])

add_c(45, "4.3", "XML External Entity (XXE)", "Intermediate",
      "What is an XML External Entity (XXE) vulnerability?",
      "# XXE attack payload:\n# <!DOCTYPE test [ <!ENTITY xxe SYSTEM \"file:///etc/passwd\"> ]>\n# <user><name>&xxe;</name></user>\n# Parser resolves entity and leaks /etc/passwd in response!",
      ["An attack where an XML parser is coerced into evaluating external system entity references, leading to internal file disclosure or SSRF", "An XML parser deleting database records", "A technique for converting XML into HTML", "A syntax error in XML closing tags"],
      0,
      "XXE vulnerabilities occur when an XML parser processes external entity definitions referencing local files (`file:///etc/passwd`) or internal network resources (`http://169.254.169.254/`), leaking data.",
      "PCES-30-01 Block 4.3 - XXE Attacks",
      ["xxe", "xml-external-entity", "file-disclosure"])

add_c(46, "4.3", "Defending Against XXE", "Intermediate",
      "Which Python library is recommended by OWASP as a drop-in replacement to parse XML securely and defend against XXE and entity expansion bombs?",
      "# Using defusedxml for secure XML parsing\nimport defusedxml.ElementTree as ET\ntree = ET.fromstring(untrusted_xml_data)  # Safely rejects entity expansion and external entities!",
      ["defusedxml", "xml.etree.ElementTree with default settings", "simplexml", "xmlbuilder"],
      0,
      "`defusedxml` is the industry-standard package designed to protect against all known XML vulnerabilities (XXE, quadratic blowup, billion laughs entity expansion) across standard Python XML parsers.",
      "PCES-30-01 Block 4.3 - XML Defense",
      ["defusedxml", "xxe-mitigation", "xml-hardening"])

add_c(47, "4.3", "Billion Laughs Attack", "Intermediate",
      "What is the 'Billion Laughs' (XML Entity Expansion) attack?",
      "# Billion Laughs payload:\n# <!ENTITY lol \"lol\">\n# <!ENTITY lol1 \"&lol;&lol;&lol;...\"\n# ...\n# Exponential expansion exhausts all available server RAM (Denial of Service)!",
      ["An exponential XML entity expansion attack that exhausts server RAM and causes an immediate Denial of Service (DoS)", "A joke posted to a cybersecurity mailing list", "A virus that prints smiley faces on computer screens", "A database query that takes 1 billion seconds"],
      0,
      "The Billion Laughs attack defines nested XML entities that exponentially expand in memory during parsing, consuming gigabytes of RAM within milliseconds and crashing the server via OOM.",
      "PCES-30-01 Block 4.3 - XML DoS",
      ["billion-laughs", "entity-expansion", "dos"])

add_c(48, "4.3", "Dangers of eval()", "Beginner",
      "Why is calling `eval(user_input)` considered one of the most hazardous coding practices in Python?",
      "# VULNERABLE:\nresult = eval(user_input)\n# If user_input is '__import__(\"os\").system(\"rm -rf /\")',\n# it executes directly inside the Python interpreter!",
      ["`eval()` executes arbitrary Python expressions passed to it, granting full code execution privileges to untrusted input", "`eval()` only works on integer additions", "`eval()` slows down the computer monitor", "`eval()` causes syntax errors in all strings"],
      0,
      "`eval()` parses and evaluates arbitrary Python expressions directly in the running interpreter. Any user input passed to `eval()` allows instant, trivial remote code execution (RCE).",
      "PCES-30-01 Block 4.3 - Dangerous Functions",
      ["eval", "rce", "code-injection"])

add_c(49, "4.3", "Safe Evaluation with ast", "Intermediate",
      "Which standard library function safely evaluates a string containing Python literal structures (strings, numbers, tuples, lists, dicts, booleans) without executing code?",
      "import ast\n# SECURE literal parsing:\nsafe_dict = ast.literal_eval('{\"role\": \"user\", \"id\": 42}')\n# Rejects functions, method calls, and arbitrary code execution!",
      ["ast.literal_eval()", "eval()", "exec()", "json.eval()"],
      0,
      "`ast.literal_eval()` safely evaluates an expression node or string containing only Python literal structures. It raises an exception if the expression attempts to execute functions or code.",
      "PCES-30-01 Block 4.3 - Safe Parsing",
      ["literal_eval", "ast", "safe-parsing"])

add_c(50, "4.3", "Dangers of exec()", "Beginner",
      "How does `exec()` differ from `eval()` in Python, and what is its security implication?",
      "# exec() can execute complex multi-line statements, class definitions, and loops\nexec('''\nimport os\nos.system(\"touch /tmp/pwned\")\n''')",
      ["`eval()` only evaluates single expressions; `exec()` can execute multi-line statements, imports, and arbitrary system code dynamically, presenting severe RCE risk", "`exec()` is completely safe and encrypted", "`exec()` only runs on executive computers", "`exec()` requires root privileges to import math"],
      0,
      "`eval()` evaluates a single expression and returns a value. `exec()` dynamically executes arbitrary multi-line Python code, statements, and imports, making untrusted input fatal to security.",
      "PCES-30-01 Block 4.3 - Dangerous Functions",
      ["exec", "rce", "dynamic-execution"])

# --- CHAPTER 4.3 (cont): Cards 51-60 ---
add_c(51, "4.3", "Shelve and Marshal Insecurity", "Intermediate",
      "Why are Python's standard `shelve` and `marshal` modules also unsafe for handling untrusted data?",
      "# shelve is built on top of pickle under the hood!\n# marshal is an internal CPython serialization format not guarded against malicious code",
      ["`shelve` uses `pickle` internally, and `marshal` is an internal format not designed to be resilient against maliciously crafted payloads", "They only run on vintage 1980s hardware", "They delete files upon unpickling", "They require paid commercial licenses"],
      0,
      "`shelve` relies on `pickle` for object serialization and inherits all its RCE risks. `marshal` is an internal CPython bytecode format with zero security guarantees against corrupted or hostile input.",
      "PCES-30-01 Block 4.3 - Unsafe Serialization",
      ["shelve", "marshal", "serialization-risks"])

add_c(52, "4.3", "getattr / setattr Exploits", "Intermediate",
      "How can unvalidated user input passed to `getattr(obj, user_input)` lead to security bypasses or code execution?",
      "# Vulnerability: Dynamic attribute resolution on unvalidated user input\n# Attacker requests attribute: '__class__'\n# Navigates up object hierarchy: obj.__class__.__subclasses__()\n# Discovers and invokes subprocess.Popen!",
      ["Attackers can access private dunder attributes (like `__class__`, `__globals__`, or `__subclasses__`) to escape sandbox restrictions and access system modules", "It converts integers to floating-point numbers", "It changes the font size in terminal windows", "It deletes the Python documentation directory"],
      0,
      "Allowing unrestricted attribute lookup via `getattr()` enables object traversal attacks where attackers navigate up through `__class__` and `__globals__` to invoke internal dangerous functions.",
      "PCES-30-01 Block 4.3 - Object Traversal",
      ["getattr", "dunder-attributes", "sandbox-escape"])

add_c(53, "4.3", "Zip Slip Vulnerability", "Intermediate",
      "What is the 'Zip Slip' vulnerability when extracting zip or tar archives using Python's `zipfile` or `tarfile` modules?",
      "# Zip Slip vulnerability:\n# Archive contains malicious entry: '../../../../../../etc/shadow'\n# Standard extraction writes file OUTSIDE target destination directory!\nimport zipfile\nwith zipfile.ZipFile('untrusted.zip') as zf:\n    zf.extractall('/tmp/dest')  # Vulnerable if members contain '../' paths!",
      ["Archive files containing filenames with directory traversal sequences (`../`) write extracted files outside the destination directory, potentially overwriting critical system files", "A physical slip of a zipper on a server room door", "A zip file that compresses data so much it disappears", "A network error that causes zip files to download twice"],
      0,
      "Zip Slip occurs when an archive contains filenames with path traversal elements (`../../etc/cron.d/malicious`). Blindly calling `extractall()` writes files outside the target directory.",
      "PCES-30-01 Block 4.3 - Archive Security",
      ["zip-slip", "zipfile", "path-traversal"])

add_c(54, "4.3", "Defending Against Zip Slip", "Intermediate",
      "In modern Python 3.12+, what feature was introduced in `tarfile` to safely extract archives without directory traversal risk?",
      "# Python 3.12+ safe tar extraction filter\nimport tarfile\nwith tarfile.open('untrusted.tar.gz') as tar:\n    # 'data' filter blocks paths starting with '/' or containing '..'\n    tar.extractall('/tmp/dest', filter='data')",
      ["The `filter='data'` parameter in `extractall()`", "The `safe=True` argument", "The `encrypt=True` parameter", "The `antivirus=True` flag"],
      0,
      "Python 3.12 introduced extraction filters for `tarfile`. Specifying `filter='data'` blocks paths that are absolute, contain `..`, or link to external targets, neutralizing Zip Slip.",
      "PCES-30-01 Block 4.3 - Archive Hardening",
      ["tarfile-filter", "python312", "zip-slip-defense"])

add_c(55, "4.3", "Server-Side Template Injection (SSTI)", "Intermediate",
      "What is Server-Side Template Injection (SSTI) in template engines like Jinja2?",
      "# Vulnerable SSTI in Jinja2:\nfrom jinja2 import Template\n# Rendering unvalidated user input directly as template source!\nTemplate('Hello ' + user_input).render()\n# Attacker inputs: '{{ self.__init__.__globals__.__builtins__.__import__(\"os\").popen(\"id\").read() }}'",
      ["An attack where user input is concatenated directly into template source code, allowing attackers to evaluate template expressions and escape into OS command execution", "A hardware defect in printing physical templates", "An error that causes web page templates to lose their styling", "An attack that only targets CSS files"],
      0,
      "SSTI occurs when user input is concatenated into the template string itself rather than passed as a data variable. In Jinja2, attackers inject template syntax (`{{ ... }}`) to execute Python commands.",
      "PCES-30-01 Block 4.3 - SSTI",
      ["ssti", "jinja2", "template-injection"])

add_c(56, "4.3", "Safe Template Rendering", "Intermediate",
      "How do you safely render user input in Jinja2 without exposing the application to SSTI?",
      "# SECURE Jinja2 usage: Pass user input as a context DATA VARIABLE, not template code!\ntemplate = Template('Hello {{ name }}')\noutput = template.render(name=user_input)",
      ["Define a static template string with placeholders (`{{ name }}`) and pass untrusted user input as context variables into `render()`", "Concatenate the string with `+`", "Evaluate the template with `eval()`", "Disable all template variables"],
      0,
      "Templates must remain static. Passing user data as named arguments to `render(name=user_input)` treats the data strictly as variables and prevents the template engine from parsing it as code.",
      "PCES-30-01 Block 4.3 - SSTI Defense",
      ["jinja2-context", "safe-rendering", "template-security"])

add_c(57, "4.3", "Dynamic Module Import Risks", "Intermediate",
      "Why is dynamic importing with `__import__(user_module_name)` dangerous if the input is untrusted?",
      "# Dynamic import on untrusted input\n# Attacker supplies: '__import__(\"os\")' or a malicious installed package name\nmodule = __import__(user_input)",
      ["It allows an attacker to load arbitrary modules (such as `os` or malicious installed packages) and access their functions", "It deletes all Python packages from disk", "It reboots the server every time a module loads", "It causes syntax errors in import statements"],
      0,
      "Allowing untrusted input to specify module names in `__import__()` or `importlib.import_module()` lets attackers import sensitive internal or system modules (`os`, `subprocess`) to execute code.",
      "PCES-30-01 Block 4.3 - Dynamic Imports",
      ["dynamic-imports", "importlib", "code-execution"])

add_c(58, "4.3", "Regex Denial of Service (ReDoS)", "Intermediate",
      "What is a Regular Expression Denial of Service (ReDoS) attack?",
      "# Catastrophic backtracking regex: r'^(a+)+$'\n# Input: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa!' causes exponential evaluations\n# Freezes CPU at 100% for minutes or hours!",
      ["Exploiting catastrophic backtracking in poorly written regular expressions with malicious input, freezing the CPU at 100% and causing Denial of Service", "Injecting SQL queries into regex expressions", "Deleting the `re` module from Python", "Flooding an email inbox with regular expressions"],
      0,
      "ReDoS exploits regex engines (which use backtracking) with nested quantifiers (e.g. `(a+)+`). Pathological input forces exponential backtracking evaluations, locking CPU cores in a DoS state.",
      "PCES-30-01 Block 4.3 - ReDoS",
      ["redos", "catastrophic-backtracking", "regex-dos"])

add_c(59, "4.3", "Defending Against ReDoS", "Intermediate",
      "How do developers mitigate ReDoS vulnerabilities in Python applications?",
      "# ReDoS mitigation:\n# 1. Avoid nested quantifiers like (a+)+ or (x*)*\n# 2. Enforce strict maximum length on input strings before regex evaluation\n# 3. Use linear-time regex engines (like re2 / google-re2) for untrusted patterns",
      ["Avoid nested ambiguous quantifiers, limit input string lengths before evaluation, and use linear-time regex engines (like `re2`)", "Increase the CPU clock frequency", "Convert all text to numbers", "Avoid using the letter 'a' in strings"],
      0,
      "Remediations include eliminating nested quantifiers, validating input length limits, testing patterns against tools like `vuln-regex-detector`, or using non-backtracking engines like `re2`.",
      "PCES-30-01 Block 4.3 - ReDoS Defense",
      ["redos-defense", "re2", "regex-hardening"])

add_c(60, "4.3", "Insecure Deserialization in Requests/Cookies", "Intermediate",
      "If a web application stores serialized user state inside an encrypted or base64-encoded cookie, why must it use cryptographic signatures (like itsdangerous)?",
      "# Tamper-proof cookie token with itsdangerous\nfrom itsdangerous import URLSafeTimedSerializer\ns = URLSafeTimedSerializer('secret_server_key')\ntoken = s.dumps({'user': 'alice', 'role': 'user'})\n# Serializer signs with HMAC, preventing users from tampering with payload!",
      ["Without a cryptographic signature, users can alter the payload claims (e.g. changing role to 'admin') and re-encode the cookie", "Because base64 cookies cannot be decoded by web browsers", "Cookies cannot exceed 10 bytes in size", "To prevent cookies from expiring prematurely"],
      0,
      "Base64 is merely encoding, not security. Without a cryptographic signature (HMAC), any user can decode, modify permissions, re-encode, and impersonate administrators.",
      "PCES-30-01 Block 4.3 - Cookie Tampering",
      ["tamper-proofing", "hmac", "cookie-security"])

# --- CHAPTER 4.4: Data Anonymization, Log Sanitization & PII Protection (Cards 61-80) ---
add_c(61, "4.4", "PII Identification", "Beginner",
      "Which of the following constitutes Personally Identifiable Information (PII) that requires protection under privacy frameworks?",
      "# PII examples:\n# Full name, Social Security Number (SSN), biometric data, driver's license number, personal email address",
      ["Social Security Number, personal email address, and home physical address", "The server operating system version", "The public IP address of Google DNS (8.8.8.8)", "The CPU model of a cloud server"],
      0,
      "PII is any information that can be used to distinguish or trace an individual's identity, either alone or when combined with other personal or identifying information.",
      "PCES-30-01 Block 4.4 - PII Protection",
      ["pii", "privacy", "data-classification"])

add_c(62, "4.4", "Credit Card Masking", "Beginner",
      "Under PCI-DSS standards, what is the maximum number of credit card digits that may be displayed in plaintext reports or user receipts?",
      "# PCI-DSS compliant PAN masking:\n# Card: 4111 1111 1111 1234\n# Masked: ************1234 (First 6 and last 4 maximum permitted)\ndef mask_card(card_str: str) -> str:\n    return '*' * (len(card_str) - 4) + card_str[-4:]",
      ["Only the last 4 digits (or maximum first 6 and last 4)", "All 16 digits", "None; cards cannot be stored in databases", "Only the CVV code"],
      0,
      "PCI-DSS mandates that the Primary Account Number (PAN) must be masked when displayed, permitting at most the first six and last four digits (typically just the last four digits).",
      "PCES-30-01 Block 4.4 - PCI Masking",
      ["pci-dss", "pan-masking", "credit-cards"])

add_c(63, "4.4", "Regex Redaction for PII", "Intermediate",
      "How can a Python logging pipeline redact 9-digit US Social Security Numbers (`XXX-XX-XXXX`) before writing to disk?",
      "import re\ndef redact_ssn(log_message: str) -> str:\n    ssn_pattern = r'\\b\\d{3}-\\d{2}-\\d{4}\\b'\n    return re.sub(ssn_pattern, '[REDACTED_SSN]', log_message)",
      ["Using `re.sub(r'\\b\\d{3}-\\d{2}-\\d{4}\\b', '[REDACTED_SSN]', log_message)`", "Using `str.strip()`", "Converting text to uppercase", "Deleting the log file"],
      0,
      "`re.sub()` matches the SSN pattern (`\\b\\d{3}-\\d{2}-\\d{4}\\b`) and replaces it with a generic redaction token, ensuring PII is never persisted in plaintext logs.",
      "PCES-30-01 Block 4.4 - PII Redaction",
      ["re-sub", "ssn-redaction", "log-hygiene"])

add_c(64, "4.4", "Log Forging & Injection", "Intermediate",
      "What is 'Log Injection' (or Log Forging) and how does an attacker exploit unvalidated newline characters in log data?",
      "# Log Injection attack:\n# User inputs: 'Alice\\n2026-09-28 10:00:00 [INFO] Admin login successful: root'\n# Injects a fake log entry to confuse auditors and forge false forensic evidence!",
      ["Injecting carriage returns and newlines (`\\r\\n`) into log data to forge fake log entries and deceive forensic auditors", "Deleting log files from the server", "Changing the computer terminal color scheme", "Printing logs in bold font"],
      0,
      "If user input is logged without sanitizing newline characters (`\n`, `\r`), an attacker can inject fake log records, spoofing actions, timestamps, and severity levels to mislead investigators.",
      "PCES-30-01 Block 4.4 - Log Injection",
      ["log-injection", "log-forging", "audit-tampering"])

add_c(65, "4.4", "Log Sanitization Defense", "Intermediate",
      "How do developers sanitize user input before logging to prevent Log Forging?",
      "def sanitize_for_log(input_str: str) -> str:\n    # Strip carriage returns and newlines to prevent log record splitting\n    return input_str.replace('\\r', '_').replace('\\n', '_')",
      ["Replace or strip all newline (`\\n`) and carriage return (`\\r`) characters from untrusted strings before passing to loggers", "Encrypt the entire log file with AES-128", "Convert all text to hexadecimal numbers", "Delete logs after 5 minutes"],
      0,
      "Replacing or stripping newline and carriage return characters ensures that a single log event cannot be split into multiple counterfeit records.",
      "PCES-30-01 Block 4.4 - Log Sanitization",
      ["log-sanitization", "crlf-stripping", "auditability"])

add_c(66, "4.4", "Preventing Password Leaks in Logs", "Beginner",
      "Why must passwords, bearer tokens, and session secrets be filtered out of application log formatters?",
      "# Security filter in logging handler\nclass SecretFilter(logging.Filter):\n    def filter(self, record):\n        record.msg = re.sub(r'password=[^&\\s]+', 'password=[MASKED]', str(record.msg))\n        return True",
      ["Logs are frequently stored in plaintext, aggregated across central SIEMs, and viewed by wide teams of developers and operations staff, exposing secrets if logged", "Logging passwords crashes the logger daemon", "Passwords cannot be written to files in Linux", "Log files have a maximum size of 100 characters"],
      0,
      "Application logs are accessible to support staff, developers, and centralized log platforms. Plaintext passwords in logs lead to credential theft and regulatory violations.",
      "PCES-30-01 Block 4.4 - Secret Masking",
      ["secret-masking", "logging-hygiene", "credential-protection"])

add_c(67, "4.4", "Pseudonymization vs Anonymization", "Intermediate",
      "In data privacy engineering, what distinguishes 'Pseudonymization' from 'Anonymization'?",
      "# Pseudonymization: user_id = hmac.new(secret_salt, real_email.encode()).hexdigest()\n# Reversible if the secret_salt and original mapping key exist!\n# Anonymization: Irreversible removal of all direct and indirect identifiers",
      ["Pseudonymization replaces identifiers with aliases and remains reversible with a key; Anonymization irreversibly destroys identifiers so data can never be re-identified", "Pseudonymization is illegal under GDPR; Anonymization is mandatory", "Pseudonymization uses AES; Anonymization uses DES", "They are identical technical terms"],
      0,
      "Pseudonymization replaces personal identifiers with pseudonyms or tokens while retaining a separate key that allows re-identification. Anonymization irreversibly eliminates identifying links.",
      "PCES-30-01 Block 4.4 - Privacy Engineering",
      ["pseudonymization", "anonymization", "gdpr"])

add_c(68, "4.4", "K-Anonymity", "Intermediate",
      "What is 'K-Anonymity' in data privacy and anonymization datasets?",
      "# K-Anonymity guarantee: In a released dataset, each individual's quasi-identifiers\n# (e.g. Age, Gender, ZIP Code) are identical to at least K-1 other records\n# An individual cannot be distinguished from a group of at least K people!",
      ["A property ensuring that each individual in a dataset cannot be distinguished from at least k-1 other individuals whose quasi-identifiers are identical", "Encrypting data with k different AES keys", "Limiting database tables to k rows", "Deleting k columns from a dataset"],
      0,
      "K-Anonymity guarantees that for any combination of quasi-identifiers (such as age, gender, ZIP), at least `k` records share those exact values, preventing re-identification of individuals in released datasets.",
      "PCES-30-01 Block 4.4 - Privacy Metrics",
      ["k-anonymity", "quasi-identifiers", "data-privacy"])

add_c(69, "4.4", "Differential Privacy", "Intermediate",
      "What is 'Differential Privacy' in modern data analytics?",
      "# Differential privacy mechanism:\n# Injecting calibrated mathematical noise (Laplacian noise) into statistical query results\n# Ensures query output reveals population trends without compromising individual presence",
      ["A mathematical framework that adds controlled statistical noise to query results, providing formal mathematical privacy guarantees about individual data records", "A technique for calculating derivatives in calculus", "A protocol that speeds up database joins", "A backup system for SQL databases"],
      0,
      "Differential privacy introduces calibrated mathematical noise to query results, ensuring that whether any single individual's data is included in the dataset does not meaningfully change the output.",
      "PCES-30-01 Block 4.4 - Differential Privacy",
      ["differential-privacy", "statistical-noise", "privacy-guarantees"])

add_c(70, "4.4", "IP Address Anonymization", "Beginner",
      "How do analytics platforms (like Google Analytics) anonymize IPv4 addresses to protect visitor privacy?",
      "# IPv4 address anonymization: Zero out the last octet (host portion)\ndef anonymize_ip(ip_str: str) -> str:\n    parts = ip_str.split('.')\n    parts[-1] = '0'\n    return '.'.join(parts)  # '192.168.1.150' -> '192.168.1.0'",
      ["By zeroing out the last octet of the IPv4 address (e.g. `198.51.100.123` becomes `198.51.100.0`), preserving regional routing data while anonymizing the specific host", "By converting the IP to binary format", "By reversing the numbers in the IP", "By deleting the IP from the network packet"],
      0,
      "Zeroing the final octet of an IPv4 address removes individual host identification while retaining broad geographical and network routing information, satisfying privacy guidelines.",
      "PCES-30-01 Block 4.4 - IP Anonymization",
      ["ip-anonymization", "truncation", "privacy"])

add_c(71, "4.4", "Data Retention Policies", "Beginner",
      "What is an automated 'Data Retention Policy' in secure system implementation?",
      "# Automated data lifecycle cleanup script\ndef purge_expired_logs(log_dir, retention_days=90):\n    cutoff_time = time.time() - (retention_days * 86400)\n    for path in glob.glob(f'{log_dir}/*.log'):\n        if os.path.getmtime(path) < cutoff_time:\n            os.remove(path)  # Delete logs older than retention period",
      ["A systematic policy and automated technical process to securely delete or archive personal data and logs once their legitimate business retention window has expired", "A rule requiring companies to keep all emails forever", "A backup system that saves files to floppy disks", "A hardware policy for recycling old server monitors"],
      0,
      "Data retention policies define how long data should be kept. Automatically purging data past its retention period aligns with GDPR data minimization and limits exposure during future data breaches.",
      "PCES-30-01 Block 4.4 - Data Retention",
      ["data-retention", "purging", "lifecycle-management"])

add_c(72, "4.4", "Cryptographic Erasure", "Intermediate",
      "What is 'Crypto-Shredding' (Cryptographic Erasure)?",
      "# Crypto-shredding concept:\n# Data is encrypted with a unique key. To permanently 'erase' the data across all backups and cloud storage,\n# simply DESTROY THE ENCRYPTION KEY. Without the key, the ciphertext is permanently unrecoverable!",
      ["Encrypting data with a unique key and later permanently destroying that key, rendering the encrypted data irrevocably undecipherable across all backups and replicas", "Physically feeding hard drives into paper shredder machines", "Deleting files using the Windows Recycle Bin", "Overwriting hard drive sectors with all ones"],
      0,
      "Crypto-shredding renders encrypted data permanently unrecoverable by securely deleting the cryptographic keys. This is especially effective in cloud environments where physical drive sanitization is impossible.",
      "PCES-30-01 Block 4.4 - Data Sanitization",
      ["crypto-shredding", "key-destruction", "sanitization"])

add_c(73, "4.4", "Data Masking Techniques", "Intermediate",
      "What is the difference between Static Data Masking (SDM) and Dynamic Data Masking (DDM)?",
      "# SDM: Permanently modifies data in non-production database copies (test/dev)\n# DDM: Masks data in real time on the fly based on the user's role (DB query returns masked output to call center reps, unmasked to managers)",
      ["Static masking permanently alters data in non-production database copies; Dynamic masking redacts sensitive fields on-the-fly at query time based on user role", "Static masking is for images; Dynamic masking is for video", "Static masking is unencrypted; Dynamic masking is encrypted", "There is no difference"],
      0,
      "Static masking creates permanent masked copies for development/test environments. Dynamic masking redacts data in real-time as queries are processed, based on the requesting user's permissions.",
      "PCES-30-01 Block 4.4 - Data Masking",
      ["static-masking", "dynamic-masking", "database-privacy"])

add_c(74, "4.4", "Secure Deletion in Python", "Intermediate",
      "Why is simply calling `os.remove(filepath)` INSUFFICIENT for secure data destruction on magnetic storage media?",
      "# os.remove only unlinks the directory inode reference!\n# The underlying raw data bits remain intact on magnetic disk sectors until overwritten!",
      ["`os.remove()` only unlinks the file pointer in the filesystem directory table; raw data sectors remain on disk until overwritten", "`os.remove()` moves the file to the desktop", "`os.remove()` encrypts the file instead of deleting it", "`os.remove()` requires administrative approval from Microsoft"],
      0,
      "`os.remove()` merely frees the filesystem inode. The physical data sectors on magnetic drives remain intact and can be recovered using basic forensic tools unless explicitly overwritten (e.g. with `shred`).",
      "PCES-30-01 Block 4.4 - Secure File Deletion",
      ["secure-deletion", "os-remove", "data-remanence"])

add_c(75, "4.4", "Secure Memory Clearing", "Intermediate",
      "Why is zeroing out sensitive memory buffers (like encryption keys) difficult in standard Python compared to C?",
      "# Python objects are immutable and managed by garbage collection\n# Creating key = b'secret' and key = None does NOT immediately overwrite RAM memory!\n# Use bytearray or ctypes for explicit memory zeroing if necessary",
      ["Python strings and bytes are immutable, and memory reclamation is handled asynchronously by the garbage collector rather than direct immediate zeroing", "Python does not use computer RAM", "Python encrypts RAM automatically", "Memory cannot be cleared on 64-bit systems"],
      0,
      "Python's memory management abstracts hardware memory. Strings and bytes are immutable, meaning setting variables to `None` leaves sensitive data in RAM until garbage collected. Mutable `bytearray` can be zeroed in place.",
      "PCES-30-01 Block 4.4 - Memory Remanence",
      ["garbage-collection", "memory-hygiene", "immutability"])

add_c(76, "4.4", "Data Classification Levels", "Beginner",
      "What are typical data classification levels in an enterprise security policy?",
      "# Enterprise data classification hierarchy:\n# Public -> Internal / Restricted -> Confidential -> Highly Restricted (Secret)",
      ["Public, Internal, Confidential, and Restricted (or Highly Confidential)", "Small, Medium, Large, and Extra Large", "Bronze, Silver, Gold, and Platinum", "Alpha, Beta, Release Candidate, and Final"],
      0,
      "Enterprise classification hierarchies typically rank information into Public (open), Internal (routine business), Confidential (sensitive commercial/PII), and Restricted (critical secrets/trade secrets).",
      "PCES-30-01 Block 4.4 - Data Classification",
      ["classification", "confidentiality", "data-governance"])

add_c(77, "4.4", "Redacting Authorization Headers", "Intermediate",
      "In a Python proxy or network logging script, how should `Authorization` headers (e.g. `Bearer eyJ...`) be recorded?",
      "# Safe header logging\nheaders_to_log = dict(request.headers)\nif 'Authorization' in headers_to_log:\n    headers_to_log['Authorization'] = 'Bearer [REDACTED]'",
      ["Redact the token value entirely or replace it with a placeholder like `'Bearer [REDACTED]'`", "Log the entire token in plaintext for debugging", "Convert the token to uppercase", "Send the token via email to all developers"],
      0,
      "Bearer tokens represent active authenticated sessions. Logging them exposes credentials in log archives, enabling credential theft and account takeover.",
      "PCES-30-01 Block 4.4 - Token Protection",
      ["bearer-tokens", "header-redaction", "log-hygiene"])

add_c(78, "4.4", "Synthetic Test Data", "Beginner",
      "Why should production databases containing real customer PII NOT be copied directly into developer test environments?",
      "# Using synthetic data generators (like Faker) instead of real customer PII in test environments\nfrom faker import Faker\nfake = Faker()\nfake_user = {'name': fake.name(), 'email': fake.email(), 'ssn': fake.ssn()}",
      ["Developer and test environments often have weaker access controls, lack auditing, and are accessed by third parties, drastically increasing breach risk", "Test environments run 5 times slower with real data", "Databases refuse to copy customer names", "Synthetic data is required by Python syntax"],
      0,
      "Non-production environments rarely have the stringent access controls or compliance monitoring of production. Copying real customer PII to test environments frequently results in data breaches.",
      "PCES-30-01 Block 4.4 - Test Data Security",
      ["synthetic-data", "faker", "non-production-security"])

add_c(79, "4.4", "Right to be Forgotten", "Beginner",
      "Under GDPR Article 17, what is the 'Right to be Forgotten' (Right to Erasure)?",
      "# GDPR deletion request handler\ndef process_gdpr_erasure_request(user_id):\n    delete_user_profile(user_id)\n    delete_order_history(user_id)\n    anonymize_analytical_events(user_id)\n    send_erasure_confirmation(user_id)",
      ["The right of an individual to request the deletion or removal of their personal data without undue delay when there is no compelling reason for its continued processing", "The right to delete software you bought online", "The right to turn off computer monitors at night", "The right to rename your username every day"],
      0,
      "The Right to Erasure allows data subjects to demand an organization erase their personal information when data is no longer necessary or consent is withdrawn.",
      "PCES-30-01 Block 4.4 - Data Privacy Rights",
      ["right-to-erasure", "gdpr-article-17", "privacy-rights"])

add_c(80, "4.4", "Auditing PII Access", "Beginner",
      "Why must employee access to sensitive customer PII records be logged in an immutable access log?",
      "# Logging access to healthcare records\naudit_logger.info(f'timestamp={time.time()} doctor_id={doc_id} accessed_patient_id={patient_id}')",
      ["To ensure accountability, detect unauthorized employee snooping (insider threat), and prove compliance with privacy regulations like HIPAA and GDPR", "To calculate employee typing speed", "To monitor hard drive temperature", "To bill patients per keystroke"],
      0,
      "Logging all access to sensitive PII enables detection of unauthorized insider curiosity or snooping, supports forensic investigations, and proves compliance with regulatory standards.",
      "PCES-30-01 Block 4.4 - Access Auditing",
      ["audit-logs", "pii-access", "insider-threat"])

# --- CHAPTER 4.5: Cryptographic Best Practices & Security Libraries (Cards 81-100) ---
add_c(81, "4.5", "Cryptographic Randomness", "Beginner",
      "Why must `secrets` be used instead of `random` when generating session tokens, cryptographic nonces, or password reset links in Python?",
      "import secrets\n# secrets uses OS entropy (/dev/urandom) - cryptographically secure!\ntoken = secrets.token_hex(16)\nprint(f'Secure Nonce: {token}')",
      ["`secrets` uses cryptographically secure random sources provided by the OS kernel, whereas `random` uses a deterministic PRNG whose internal state can be predicted", "`secrets` is faster than `random`", "`random` only generates numbers between 0 and 10", "`secrets` is a third-party paid package"],
      0,
      "The standard `random` module uses the Mersenne Twister algorithm, which is completely deterministic. The `secrets` module accesses kernel entropy, providing unpredictable cryptographic randomness.",
      "PCES-30-01 Block 4.5 - Secrets Module",
      ["secrets", "prng", "cryptographic-randomness"])

add_c(82, "4.5", "Symmetric Encryption with Fernet", "Intermediate",
      "What cryptographic algorithms does `cryptography.fernet.Fernet` combine under the hood to provide authenticated symmetric encryption?",
      "from cryptography.fernet import Fernet\n# Fernet combines:\n# - AES-128 in CBC mode\n# - HMAC using SHA-256 for authentication and integrity\n# - PKCS7 padding\nkey = Fernet.generate_key()\nf = Fernet(key)\ntoken = f.encrypt(b'Classified Data')",
      ["AES-128 in CBC mode with PKCS7 padding and HMAC-SHA256 for authenticated integrity", "RSA-2048 with public keys", "DES in ECB mode", "MD5 hashing with XOR cipher"],
      0,
      "Fernet guarantees authenticated encryption: it uses AES-128 in CBC mode for confidentiality and HMAC-SHA256 for tamper-proof message authentication. Any tampering raises an `InvalidToken` exception.",
      "PCES-30-01 Block 4.5 - Fernet Encryption",
      ["fernet", "aes-128-cbc", "hmac-sha256", "authenticated-encryption"])

add_c(83, "4.5", "Fernet Tampering Detection", "Intermediate",
      "What occurs if an attacker alters even a single byte of a ciphertext token generated by `Fernet.encrypt()` before `Fernet.decrypt()` is called?",
      "from cryptography.fernet import Fernet, InvalidToken\nkey = Fernet.generate_key()\nf = Fernet(key)\ntoken = f.encrypt(b'Original Message')\ntampered_token = token[:-1] + b'X'  # Modify last byte\n\ntry:\n    f.decrypt(tampered_token)\nexcept InvalidToken:\n    print('Tampering detected! Decryption rejected.')",
      ["`Fernet.decrypt()` raises `cryptography.fernet.InvalidToken` and refuses to decrypt or output any data", "It decrypts corrupted garbage text without an error", "It crashes the computer operating system", "It automatically repairs the corrupted byte"],
      0,
      "Fernet uses authenticated encryption (HMAC-SHA256). If the signature does not match perfectly, `decrypt()` immediately raises `InvalidToken`, preventing chosen-ciphertext and padding oracle attacks.",
      "PCES-30-01 Block 4.5 - Fernet Integrity",
      ["invalidtoken", "tampering-detection", "authenticated-encryption"])

add_c(84, "4.5", "Key Generation in Fernet", "Beginner",
      "How do you generate a fresh, cryptographically secure key for use with `Fernet` in Python?",
      "from cryptography.fernet import Fernet\n# Generates a URL-safe base64-encoded 32-byte key\nkey = Fernet.generate_key()\nprint(key)  # e.g. b'f0_bWcK_G4w5yZ...='",
      ["Fernet.generate_key()", "Fernet.create_password()", "Fernet.random_string()", "Fernet.make_key(128)"],
      0,
      "`Fernet.generate_key()` securely generates a 32-byte (256-bit) cryptographically random key and returns it as a URL-safe base64-encoded bytes object.",
      "PCES-30-01 Block 4.5 - Key Management",
      ["generate_key", "fernet-api", "key-generation"])

add_c(85, "4.5", "Password Hashing with bcrypt", "Intermediate",
      "What is the correct way to hash a password using the industry-standard `bcrypt` library in Python?",
      "import bcrypt\npassword = b'MySecurePassword123'\n# Generate unique salt and hash password\nhashed = bcrypt.hashpw(password, bcrypt.gensalt(rounds=12))\nprint(hashed)  # Stored safely in database!",
      ["bcrypt.hashpw(password, bcrypt.gensalt(rounds=12))", "bcrypt.sha256(password)", "bcrypt.encrypt(password)", "bcrypt.hash(password)"],
      0,
      "`bcrypt.hashpw(password, bcrypt.gensalt(rounds=12))` automatically generates a cryptographically random salt and applies the adaptive, work-factored Blowfish-based bcrypt algorithm.",
      "PCES-30-01 Block 4.5 - bcrypt Hashing",
      ["bcrypt", "hashpw", "gensalt", "work-factor"])

add_c(86, "4.5", "Verifying bcrypt Passwords", "Intermediate",
      "How do you verify whether a user-submitted plaintext password matches a stored bcrypt hash?",
      "import bcrypt\n# Verifying password during login\nis_valid = bcrypt.checkpw(user_submitted_password, stored_hash)",
      ["bcrypt.checkpw(user_submitted_password, stored_hash)", "bcrypt.verify_hash(user_submitted_password) == stored_hash", "stored_hash.decrypt() == user_submitted_password", "bcrypt.equals(user_submitted_password, stored_hash)"],
      0,
      "`bcrypt.checkpw(password, hashed)` extracts the salt and work factor embedded in `hashed`, hashes `password` with those parameters, and performs a constant-time comparison.",
      "PCES-30-01 Block 4.5 - bcrypt Verification",
      ["checkpw", "bcrypt", "password-verification"])

add_c(87, "4.5", "Work Factor / Cost Factor", "Intermediate",
      "What is the purpose of the 'Work Factor' (or iteration rounds) in modern password hashing algorithms like bcrypt and Argon2?",
      "# Increasing bcrypt work factor\n# rounds=12 takes ~250ms on modern CPU, making brute-force cracking prohibitively slow\nsalt = bcrypt.gensalt(rounds=12)",
      ["It allows administrators to tune the computational difficulty and time required to compute each hash, slowing down attacker offline brute-force cracking as hardware speeds improve", "It increases network bandwidth", "It reduces the password character length", "It generates multiple passwords at once"],
      0,
      "The work factor parameter makes password hashing deliberately slow and computationally intensive. As Moore's Law makes GPUs faster, defenders increase the cost factor to maintain resistance against cracking.",
      "PCES-30-01 Block 4.5 - Work Factor",
      ["work-factor", "cost-factor", "adaptive-hashing"])

add_c(88, "4.5", "Argon2 Password Hashing", "Intermediate",
      "Why is Argon2 (winner of the Password Hashing Competition) considered superior to older hashing algorithms?",
      "# Argon2 uses both time-cost (iterations) AND memory-cost (RAM requirements)\n# Memory hardness neutralizes GPU and custom ASIC cracking rigs!",
      ["Argon2 is memory-hard, requiring significant RAM to compute each hash, which severely degrades the cracking efficiency of custom ASIC and GPU clusters", "Argon2 is an unencrypted text file", "Argon2 was created in 1970", "Argon2 cannot be stored in databases"],
      0,
      "Argon2 (specifically Argon2id) provides memory-hardness. While GPUs have thousands of parallel cores, they have limited memory per core; requiring large RAM buffers cripples GPU and ASIC parallel cracking.",
      "PCES-30-01 Block 4.5 - Argon2",
      ["argon2", "memory-hard", "password-hashing-competition"])

add_c(89, "4.5", "Constant-Time Comparison", "Intermediate",
      "In which module is `compare_digest` located, and what attack does it neutralize?",
      "import hmac\n# hmac.compare_digest prevents Timing Attacks\nis_match = hmac.compare_digest(user_token, valid_token)",
      ["It is located in `hmac` and neutralizes Timing Side-Channel attacks", "It is located in `math` and neutralizes buffer overflows", "It is located in `time` and neutralizes DDoS attacks", "It is located in `sys` and neutralizes syntax errors"],
      0,
      "`hmac.compare_digest()` is located in Python's standard `hmac` module. It performs constant-time string and bytes comparison, neutralizing timing side-channel attacks.",
      "PCES-30-01 Block 4.5 - Constant Time",
      ["compare_digest", "hmac", "timing-attacks"])

add_c(90, "4.5", "Block Cipher Modes: ECB Insecurity", "Intermediate",
      "Why is Electronic Codebook (ECB) mode notoriously insecure and strictly forbidden for block ciphers like AES?",
      "# ECB Mode Flaw: Identical 16-byte plaintext blocks ALWAYS produce identical ciphertext blocks!\n# Reveals underlying patterns (the famous encrypted Linux penguin image outline is still clearly visible in ECB!)",
      ["Identical plaintext blocks always encrypt to identical ciphertext blocks, preserving data patterns and leaking structural information", "ECB mode is too slow for modern computers", "ECB mode can only encrypt files smaller than 10 bytes", "ECB mode requires public keys"],
      0,
      "In ECB mode, identical plaintext blocks produce identical ciphertext blocks. This preserves structural patterns in data (such as bitmaps or structured records), violating confidentiality.",
      "PCES-30-01 Block 4.5 - Cipher Modes",
      ["ecb-mode", "aes-weakness", "block-ciphers"])

add_c(91, "4.5", "Initialization Vectors (IV)", "Intermediate",
      "What is the role of an Initialization Vector (IV) in CBC mode encryption, and must it be kept secret?",
      "# CBC Mode IV requirements:\n# - Must be UNIQUE and UNPREDICTABLE (cryptographically random) for every encryption operation\n# - Does NOT need to be kept secret (can be prepended in plaintext to the ciphertext)",
      ["The IV provides uniqueness ensuring identical plaintexts produce different ciphertexts; it must be unique and unpredictable, but does NOT need to be kept secret", "The IV must be kept strictly secret, even more secret than the key", "The IV is a password typed by the user", "The IV is the IP address of the encryption server"],
      0,
      "An Initialization Vector (IV) introduces randomness into the first block of CBC encryption, preventing pattern leakage across identical plaintexts. The IV does not need to be secret, but must be unique and unpredictable.",
      "PCES-30-01 Block 4.5 - Initialization Vectors",
      ["initialization-vector", "iv", "cbc-mode"])

add_c(92, "4.5", "Authenticated Encryption (AEAD)", "Intermediate",
      "What does Authenticated Encryption with Associated Data (AEAD, e.g. AES-GCM) provide that traditional AES-CBC alone does not?",
      "# AES-GCM (AEAD mode):\n# Provides BOTH Confidentiality (encryption) AND Integrity/Authenticity (authentication tag)\n# Detects unauthorized tampering without needing a separate HMAC!",
      ["Simultaneous confidentiality, data integrity, and authenticity verification in a single cryptographic operation", "Compression of data files to save bandwidth", "Automatic translation between English and French", "Hardware overclocking of CPU encryption chips"],
      0,
      "AEAD modes (like AES-GCM or ChaCha20-Poly1305) provide both confidentiality and cryptographic integrity verification simultaneously, ensuring any tampering with ciphertext is detected immediately.",
      "PCES-30-01 Block 4.5 - AEAD & AES-GCM",
      ["aead", "aes-gcm", "authenticated-encryption"])

add_c(93, "4.5", "Asymmetric Cryptography Basics", "Beginner",
      "In asymmetric public key cryptography (like RSA), which key is used to encrypt data so that only the designated recipient can read it?",
      "# Encrypting message for Bob:\n# Sender encrypts with Bob's PUBLIC KEY\n# Only Bob can decrypt with his secret PRIVATE KEY!",
      ["The recipient's Public Key", "The recipient's Private Key", "The sender's Private Key", "A shared symmetric passphrase"],
      0,
      "To ensure confidentiality, the sender encrypts data using the recipient's Public Key. Only the recipient's corresponding secret Private Key can decrypt the ciphertext.",
      "PCES-30-01 Block 4.5 - Asymmetric Cryptography",
      ["asymmetric", "public-key", "private-key", "rsa"])

add_c(94, "4.5", "Digital Signature Mechanics", "Intermediate",
      "In asymmetric cryptography, which key is used to generate a digital signature to prove message authenticity and non-repudiation?",
      "# Signing message: Alice signs with her PRIVATE KEY\n# Anyone can verify signature using Alice's PUBLIC KEY!",
      ["The sender's Private Key", "The sender's Public Key", "The recipient's Public Key", "The Certificate Authority's root password"],
      0,
      "Digital signatures are created using the sender's Private Key. Because only the sender holds that private key, anyone with the corresponding Public Key can verify that the sender created the signature.",
      "PCES-30-01 Block 4.5 - Digital Signatures",
      ["digital-signatures", "private-key", "non-repudiation"])

add_c(95, "4.5", "Key Storage Best Practices", "Beginner",
      "Where should private cryptographic keys and master encryption keys NEVER be stored?",
      "# Insecure practice: Hardcoding private key directly inside git repository\n# # my_app/crypto.py\n# PRIVATE_KEY = '-----BEGIN RSA PRIVATE KEY-----...'",
      ["Hardcoded directly in source code files or committed to public/shared git version control repositories", "Inside dedicated hardware security modules (HSM)", "Inside environment variables on isolated production servers", "Inside a cloud secrets vault like AWS KMS or HashiCorp Vault"],
      0,
      "Hardcoding private keys in source code is a leading cause of catastrophic breaches. Keys must be stored in secure key management vaults (KMS, HSM) and injected dynamically at runtime.",
      "PCES-30-01 Block 4.5 - Key Management",
      ["key-storage", "secrets-management", "hardcoded-secrets"])

add_c(96, "4.5", "Key Rotation", "Beginner",
      "What is 'Cryptographic Key Rotation'?",
      "# Key rotation workflow: Periodic replacement of operational encryption keys\n# Limits the amount of data encrypted under a single key and reduces exposure if a key leaks",
      ["Periodically retiring an operational cryptographic key and generating a new key to encrypt future data", "Rotating server racks 180 degrees in the data center", "Typing passwords upside down", "Changing file names from uppercase to lowercase"],
      0,
      "Key rotation limits the volume of data protected by a single key. If a key is compromised, rotation limits the window of vulnerability and the volume of exposed data.",
      "PCES-30-01 Block 4.5 - Key Lifecycle",
      ["key-rotation", "cryptographic-hygiene", "key-lifecycle"])

add_c(97, "4.5", "Quantum Computing & Cryptography", "Intermediate",
      "Which category of cryptography is most vulnerable to being broken by quantum computers running Shor's Algorithm?",
      "# Shor's Algorithm efficiently solves prime factorization and discrete logarithms in polynomial time,\n# breaking traditional asymmetric algorithms: RSA, ECC (Elliptic Curves), Diffie-Hellman!",
      ["Asymmetric public-key cryptography (RSA, ECC, Diffie-Hellman)", "Symmetric AES-256 encryption", "SHA-256 hashing", "One-Time Pad (OTP)"],
      0,
      "Shor's algorithm can solve discrete logarithms and prime factorization in polynomial time, threatening traditional asymmetric algorithms (RSA, ECC). Symmetric ciphers with 256-bit keys (AES-256) remain secure.",
      "PCES-30-01 Block 4.5 - Post-Quantum Cryptography",
      ["quantum-threat", "shor-algorithm", "asymmetric-vulnerability"])

add_c(98, "4.5", "Enforcing TLS in requests", "Intermediate",
      "In Python's `requests` library, what does setting `verify=False` do, and why is it dangerous in production?",
      "# INSECURE requests call:\nimport requests\n# verify=False disables TLS certificate verification!\nresponse = requests.get('https://internal.bank.com/api', verify=False)",
      ["It disables TLS/SSL certificate verification, exposing all traffic, credentials, and API responses to transparent Man-in-the-Middle (MitM) interception", "It encrypts the payload twice", "It forces the connection to use HTTP/2", "It speeds up network latency by 50%"],
      0,
      "`verify=False` disables certificate validation, causing `requests` to accept any certificate (including attacker self-signed certificates), completely negating the security of HTTPS.",
      "PCES-30-01 Block 4.5 - Python requests Security",
      ["requests-verify", "tls-verification", "mitm-risk"])

add_c(99, "4.5", "Perfect Forward Secrecy (PFS)", "Intermediate",
      "What is Perfect Forward Secrecy (PFS) in TLS communication?",
      "# Perfect Forward Secrecy (PFS):\n# Uses ephemeral Diffie-Hellman keys (ECDHE) for each individual session.\n# If the server's long-term private key is stolen tomorrow,\n# past recorded session traffic CANNOT be decrypted!",
      ["A feature of session key agreement protocols where compromise of the server's long-term private key does not compromise past recorded encrypted session traffic", "A guarantee that software has zero bugs", "An encryption algorithm that never needs to be updated", "A system where all passwords are deleted after 1 second"],
      0,
      "PFS uses ephemeral key exchanges (ECDHE). Session keys are discarded after communication. Even if an adversary records encrypted traffic and later steals the server's private key, past sessions remain unreadable.",
      "PCES-30-01 Block 4.5 - Forward Secrecy",
      ["perfect-forward-secrecy", "pfs", "tls-security"])

add_c(100, "4.5", "Cryptographic Agility", "Beginner",
      "What is 'Cryptographic Agility' in secure software architecture?",
      "# Cryptographically agile architecture:\n# Modular design allowing seamless migration from SHA-256 to SHA-3, or from RSA to Post-Quantum Kyber\n# without rewriting entire application core logic",
      ["Designing an application so that cryptographic algorithms, keys, and protocols can be easily upgraded or swapped without major architectural rewrites when algorithms weaken", "Writing cryptography algorithms while jogging", "A software library that encrypts text at maximum speed", "Changing encryption keys every 5 seconds"],
      0,
      "Cryptographic agility is the ability of an IT system or application to easily switch out vulnerable encryption, signature, or hashing algorithms for newer standards without requiring major software redesign.",
      "PCES-30-01 Block 4.5 - Cryptographic Agility",
      ["crypto-agility", "algorithm-migration", "future-proofing"])

print(f"Total Block 4 cards created: {len(cards)}")
assert len(cards) == 100, f"Expected 100 cards, got {len(cards)}"

def to_ts_card(c):
    return (
        "  {\n"
        f"    id: {json.dumps(c['id'])},\n"
        f"    track: 'pces',\n"
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

write_ts_file("src/data/pcesSection4CardsPart1.ts", "pcesSection4CardsPart1", cards[:50])
write_ts_file("src/data/pcesSection4CardsPart2.ts", "pcesSection4CardsPart2", cards[50:])

with open("src/data/pcesSection4Flashcards.ts", "w") as f:
    f.write("""import { Flashcard } from '../types';
import { pcesSection4CardsPart1 } from './pcesSection4CardsPart1';
import { pcesSection4CardsPart2 } from './pcesSection4CardsPart2';

export const pcesSection4Flashcards: Flashcard[] = [
  ...pcesSection4CardsPart1,
  ...pcesSection4CardsPart2,
];
""")
print("Wrote pcesSection4Flashcards.ts")
