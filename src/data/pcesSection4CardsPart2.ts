import { Flashcard } from '../types';

export const pcesSection4CardsPart2: Flashcard[] = [
  {
    id: "pces-4-051",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Shelve and Marshal Insecurity",
    difficulty: "Intermediate",
    question: "Why are Python's standard `shelve` and `marshal` modules also unsafe for handling untrusted data?",
    codeSnippet: "# shelve is built on top of pickle under the hood!\n# marshal is an internal CPython serialization format not guarded against malicious code",
    options: [
      "`shelve` uses `pickle` internally, and `marshal` is an internal format not designed to be resilient against maliciously crafted payloads",
      "They only run on vintage 1980s hardware",
      "They delete files upon unpickling",
      "They require paid commercial licenses"
    ],
    correctAnswer: 0,
    explanation: "`shelve` relies on `pickle` for object serialization and inherits all its RCE risks. `marshal` is an internal CPython bytecode format with zero security guarantees against corrupted or hostile input.",
    officialRef: "PCES-30-01 Block 4.3 - Unsafe Serialization",
    tags: ["shelve", "marshal", "serialization-risks"]
  },
  {
    id: "pces-4-052",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "getattr / setattr Exploits",
    difficulty: "Intermediate",
    question: "How can unvalidated user input passed to `getattr(obj, user_input)` lead to security bypasses or code execution?",
    codeSnippet: "# Vulnerability: Dynamic attribute resolution on unvalidated user input\n# Attacker requests attribute: '__class__'\n# Navigates up object hierarchy: obj.__class__.__subclasses__()\n# Discovers and invokes subprocess.Popen!",
    options: [
      "Attackers can access private dunder attributes (like `__class__`, `__globals__`, or `__subclasses__`) to escape sandbox restrictions and access system modules",
      "It converts integers to floating-point numbers",
      "It changes the font size in terminal windows",
      "It deletes the Python documentation directory"
    ],
    correctAnswer: 0,
    explanation: "Allowing unrestricted attribute lookup via `getattr()` enables object traversal attacks where attackers navigate up through `__class__` and `__globals__` to invoke internal dangerous functions.",
    officialRef: "PCES-30-01 Block 4.3 - Object Traversal",
    tags: ["getattr", "dunder-attributes", "sandbox-escape"]
  },
  {
    id: "pces-4-053",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Zip Slip Vulnerability",
    difficulty: "Intermediate",
    question: "What is the 'Zip Slip' vulnerability when extracting zip or tar archives using Python's `zipfile` or `tarfile` modules?",
    codeSnippet: "# Zip Slip vulnerability:\n# Archive contains malicious entry: '../../../../../../etc/shadow'\n# Standard extraction writes file OUTSIDE target destination directory!\nimport zipfile\nwith zipfile.ZipFile('untrusted.zip') as zf:\n    zf.extractall('/tmp/dest')  # Vulnerable if members contain '../' paths!",
    options: [
      "Archive files containing filenames with directory traversal sequences (`../`) write extracted files outside the destination directory, potentially overwriting critical system files",
      "A physical slip of a zipper on a server room door",
      "A zip file that compresses data so much it disappears",
      "A network error that causes zip files to download twice"
    ],
    correctAnswer: 0,
    explanation: "Zip Slip occurs when an archive contains filenames with path traversal elements (`../../etc/cron.d/malicious`). Blindly calling `extractall()` writes files outside the target directory.",
    officialRef: "PCES-30-01 Block 4.3 - Archive Security",
    tags: ["zip-slip", "zipfile", "path-traversal"]
  },
  {
    id: "pces-4-054",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Defending Against Zip Slip",
    difficulty: "Intermediate",
    question: "In modern Python 3.12+, what feature was introduced in `tarfile` to safely extract archives without directory traversal risk?",
    codeSnippet: "# Python 3.12+ safe tar extraction filter\nimport tarfile\nwith tarfile.open('untrusted.tar.gz') as tar:\n    # 'data' filter blocks paths starting with '/' or containing '..'\n    tar.extractall('/tmp/dest', filter='data')",
    options: [
      "The `filter='data'` parameter in `extractall()`",
      "The `safe=True` argument",
      "The `encrypt=True` parameter",
      "The `antivirus=True` flag"
    ],
    correctAnswer: 0,
    explanation: "Python 3.12 introduced extraction filters for `tarfile`. Specifying `filter='data'` blocks paths that are absolute, contain `..`, or link to external targets, neutralizing Zip Slip.",
    officialRef: "PCES-30-01 Block 4.3 - Archive Hardening",
    tags: ["tarfile-filter", "python312", "zip-slip-defense"]
  },
  {
    id: "pces-4-055",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Server-Side Template Injection (SSTI)",
    difficulty: "Intermediate",
    question: "What is Server-Side Template Injection (SSTI) in template engines like Jinja2?",
    codeSnippet: "# Vulnerable SSTI in Jinja2:\nfrom jinja2 import Template\n# Rendering unvalidated user input directly as template source!\nTemplate('Hello ' + user_input).render()\n# Attacker inputs: '{{ self.__init__.__globals__.__builtins__.__import__(\"os\").popen(\"id\").read() }}'",
    options: [
      "An attack where user input is concatenated directly into template source code, allowing attackers to evaluate template expressions and escape into OS command execution",
      "A hardware defect in printing physical templates",
      "An error that causes web page templates to lose their styling",
      "An attack that only targets CSS files"
    ],
    correctAnswer: 0,
    explanation: "SSTI occurs when user input is concatenated into the template string itself rather than passed as a data variable. In Jinja2, attackers inject template syntax (`{{ ... }}`) to execute Python commands.",
    officialRef: "PCES-30-01 Block 4.3 - SSTI",
    tags: ["ssti", "jinja2", "template-injection"]
  },
  {
    id: "pces-4-056",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Safe Template Rendering",
    difficulty: "Intermediate",
    question: "How do you safely render user input in Jinja2 without exposing the application to SSTI?",
    codeSnippet: "# SECURE Jinja2 usage: Pass user input as a context DATA VARIABLE, not template code!\ntemplate = Template('Hello {{ name }}')\noutput = template.render(name=user_input)",
    options: [
      "Define a static template string with placeholders (`{{ name }}`) and pass untrusted user input as context variables into `render()`",
      "Concatenate the string with `+`",
      "Evaluate the template with `eval()`",
      "Disable all template variables"
    ],
    correctAnswer: 0,
    explanation: "Templates must remain static. Passing user data as named arguments to `render(name=user_input)` treats the data strictly as variables and prevents the template engine from parsing it as code.",
    officialRef: "PCES-30-01 Block 4.3 - SSTI Defense",
    tags: ["jinja2-context", "safe-rendering", "template-security"]
  },
  {
    id: "pces-4-057",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Dynamic Module Import Risks",
    difficulty: "Intermediate",
    question: "Why is dynamic importing with `__import__(user_module_name)` dangerous if the input is untrusted?",
    codeSnippet: "# Dynamic import on untrusted input\n# Attacker supplies: '__import__(\"os\")' or a malicious installed package name\nmodule = __import__(user_input)",
    options: [
      "It allows an attacker to load arbitrary modules (such as `os` or malicious installed packages) and access their functions",
      "It deletes all Python packages from disk",
      "It reboots the server every time a module loads",
      "It causes syntax errors in import statements"
    ],
    correctAnswer: 0,
    explanation: "Allowing untrusted input to specify module names in `__import__()` or `importlib.import_module()` lets attackers import sensitive internal or system modules (`os`, `subprocess`) to execute code.",
    officialRef: "PCES-30-01 Block 4.3 - Dynamic Imports",
    tags: ["dynamic-imports", "importlib", "code-execution"]
  },
  {
    id: "pces-4-058",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Regex Denial of Service (ReDoS)",
    difficulty: "Intermediate",
    question: "What is a Regular Expression Denial of Service (ReDoS) attack?",
    codeSnippet: "# Catastrophic backtracking regex: r'^(a+)+$'\n# Input: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa!' causes exponential evaluations\n# Freezes CPU at 100% for minutes or hours!",
    options: [
      "Exploiting catastrophic backtracking in poorly written regular expressions with malicious input, freezing the CPU at 100% and causing Denial of Service",
      "Injecting SQL queries into regex expressions",
      "Deleting the `re` module from Python",
      "Flooding an email inbox with regular expressions"
    ],
    correctAnswer: 0,
    explanation: "ReDoS exploits regex engines (which use backtracking) with nested quantifiers (e.g. `(a+)+`). Pathological input forces exponential backtracking evaluations, locking CPU cores in a DoS state.",
    officialRef: "PCES-30-01 Block 4.3 - ReDoS",
    tags: ["redos", "catastrophic-backtracking", "regex-dos"]
  },
  {
    id: "pces-4-059",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Defending Against ReDoS",
    difficulty: "Intermediate",
    question: "How do developers mitigate ReDoS vulnerabilities in Python applications?",
    codeSnippet: "# ReDoS mitigation:\n# 1. Avoid nested quantifiers like (a+)+ or (x*)*\n# 2. Enforce strict maximum length on input strings before regex evaluation\n# 3. Use linear-time regex engines (like re2 / google-re2) for untrusted patterns",
    options: [
      "Avoid nested ambiguous quantifiers, limit input string lengths before evaluation, and use linear-time regex engines (like `re2`)",
      "Increase the CPU clock frequency",
      "Convert all text to numbers",
      "Avoid using the letter 'a' in strings"
    ],
    correctAnswer: 0,
    explanation: "Remediations include eliminating nested quantifiers, validating input length limits, testing patterns against tools like `vuln-regex-detector`, or using non-backtracking engines like `re2`.",
    officialRef: "PCES-30-01 Block 4.3 - ReDoS Defense",
    tags: ["redos-defense", "re2", "regex-hardening"]
  },
  {
    id: "pces-4-060",
    track: 'pces',
    section: "Section 4",
    chapter: "4.3",
    category: "Insecure Deserialization in Requests/Cookies",
    difficulty: "Intermediate",
    question: "If a web application stores serialized user state inside an encrypted or base64-encoded cookie, why must it use cryptographic signatures (like itsdangerous)?",
    codeSnippet: "# Tamper-proof cookie token with itsdangerous\nfrom itsdangerous import URLSafeTimedSerializer\ns = URLSafeTimedSerializer('secret_server_key')\ntoken = s.dumps({'user': 'alice', 'role': 'user'})\n# Serializer signs with HMAC, preventing users from tampering with payload!",
    options: [
      "Without a cryptographic signature, users can alter the payload claims (e.g. changing role to 'admin') and re-encode the cookie",
      "Because base64 cookies cannot be decoded by web browsers",
      "Cookies cannot exceed 10 bytes in size",
      "To prevent cookies from expiring prematurely"
    ],
    correctAnswer: 0,
    explanation: "Base64 is merely encoding, not security. Without a cryptographic signature (HMAC), any user can decode, modify permissions, re-encode, and impersonate administrators.",
    officialRef: "PCES-30-01 Block 4.3 - Cookie Tampering",
    tags: ["tamper-proofing", "hmac", "cookie-security"]
  },
  {
    id: "pces-4-061",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "PII Identification",
    difficulty: "Beginner",
    question: "Which of the following constitutes Personally Identifiable Information (PII) that requires protection under privacy frameworks?",
    codeSnippet: "# PII examples:\n# Full name, Social Security Number (SSN), biometric data, driver's license number, personal email address",
    options: [
      "Social Security Number, personal email address, and home physical address",
      "The server operating system version",
      "The public IP address of Google DNS (8.8.8.8)",
      "The CPU model of a cloud server"
    ],
    correctAnswer: 0,
    explanation: "PII is any information that can be used to distinguish or trace an individual's identity, either alone or when combined with other personal or identifying information.",
    officialRef: "PCES-30-01 Block 4.4 - PII Protection",
    tags: ["pii", "privacy", "data-classification"]
  },
  {
    id: "pces-4-062",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Credit Card Masking",
    difficulty: "Beginner",
    question: "Under PCI-DSS standards, what is the maximum number of credit card digits that may be displayed in plaintext reports or user receipts?",
    codeSnippet: "# PCI-DSS compliant PAN masking:\n# Card: 4111 1111 1111 1234\n# Masked: ************1234 (First 6 and last 4 maximum permitted)\ndef mask_card(card_str: str) -> str:\n    return '*' * (len(card_str) - 4) + card_str[-4:]",
    options: [
      "Only the last 4 digits (or maximum first 6 and last 4)",
      "All 16 digits",
      "None; cards cannot be stored in databases",
      "Only the CVV code"
    ],
    correctAnswer: 0,
    explanation: "PCI-DSS mandates that the Primary Account Number (PAN) must be masked when displayed, permitting at most the first six and last four digits (typically just the last four digits).",
    officialRef: "PCES-30-01 Block 4.4 - PCI Masking",
    tags: ["pci-dss", "pan-masking", "credit-cards"]
  },
  {
    id: "pces-4-063",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Regex Redaction for PII",
    difficulty: "Intermediate",
    question: "How can a Python logging pipeline redact 9-digit US Social Security Numbers (`XXX-XX-XXXX`) before writing to disk?",
    codeSnippet: "import re\ndef redact_ssn(log_message: str) -> str:\n    ssn_pattern = r'\\b\\d{3}-\\d{2}-\\d{4}\\b'\n    return re.sub(ssn_pattern, '[REDACTED_SSN]', log_message)",
    options: [
      "Using `re.sub(r'\\b\\d{3}-\\d{2}-\\d{4}\\b', '[REDACTED_SSN]', log_message)`",
      "Using `str.strip()`",
      "Converting text to uppercase",
      "Deleting the log file"
    ],
    correctAnswer: 0,
    explanation: "`re.sub()` matches the SSN pattern (`\\b\\d{3}-\\d{2}-\\d{4}\\b`) and replaces it with a generic redaction token, ensuring PII is never persisted in plaintext logs.",
    officialRef: "PCES-30-01 Block 4.4 - PII Redaction",
    tags: ["re-sub", "ssn-redaction", "log-hygiene"]
  },
  {
    id: "pces-4-064",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Log Forging & Injection",
    difficulty: "Intermediate",
    question: "What is 'Log Injection' (or Log Forging) and how does an attacker exploit unvalidated newline characters in log data?",
    codeSnippet: "# Log Injection attack:\n# User inputs: 'Alice\\n2026-09-28 10:00:00 [INFO] Admin login successful: root'\n# Injects a fake log entry to confuse auditors and forge false forensic evidence!",
    options: [
      "Injecting carriage returns and newlines (`\\r\\n`) into log data to forge fake log entries and deceive forensic auditors",
      "Deleting log files from the server",
      "Changing the computer terminal color scheme",
      "Printing logs in bold font"
    ],
    correctAnswer: 0,
    explanation: "If user input is logged without sanitizing newline characters (`\n`, `\r`), an attacker can inject fake log records, spoofing actions, timestamps, and severity levels to mislead investigators.",
    officialRef: "PCES-30-01 Block 4.4 - Log Injection",
    tags: ["log-injection", "log-forging", "audit-tampering"]
  },
  {
    id: "pces-4-065",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Log Sanitization Defense",
    difficulty: "Intermediate",
    question: "How do developers sanitize user input before logging to prevent Log Forging?",
    codeSnippet: "def sanitize_for_log(input_str: str) -> str:\n    # Strip carriage returns and newlines to prevent log record splitting\n    return input_str.replace('\\r', '_').replace('\\n', '_')",
    options: [
      "Replace or strip all newline (`\\n`) and carriage return (`\\r`) characters from untrusted strings before passing to loggers",
      "Encrypt the entire log file with AES-128",
      "Convert all text to hexadecimal numbers",
      "Delete logs after 5 minutes"
    ],
    correctAnswer: 0,
    explanation: "Replacing or stripping newline and carriage return characters ensures that a single log event cannot be split into multiple counterfeit records.",
    officialRef: "PCES-30-01 Block 4.4 - Log Sanitization",
    tags: ["log-sanitization", "crlf-stripping", "auditability"]
  },
  {
    id: "pces-4-066",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Preventing Password Leaks in Logs",
    difficulty: "Beginner",
    question: "Why must passwords, bearer tokens, and session secrets be filtered out of application log formatters?",
    codeSnippet: "# Security filter in logging handler\nclass SecretFilter(logging.Filter):\n    def filter(self, record):\n        record.msg = re.sub(r'password=[^&\\s]+', 'password=[MASKED]', str(record.msg))\n        return True",
    options: [
      "Logs are frequently stored in plaintext, aggregated across central SIEMs, and viewed by wide teams of developers and operations staff, exposing secrets if logged",
      "Logging passwords crashes the logger daemon",
      "Passwords cannot be written to files in Linux",
      "Log files have a maximum size of 100 characters"
    ],
    correctAnswer: 0,
    explanation: "Application logs are accessible to support staff, developers, and centralized log platforms. Plaintext passwords in logs lead to credential theft and regulatory violations.",
    officialRef: "PCES-30-01 Block 4.4 - Secret Masking",
    tags: ["secret-masking", "logging-hygiene", "credential-protection"]
  },
  {
    id: "pces-4-067",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Pseudonymization vs Anonymization",
    difficulty: "Intermediate",
    question: "In data privacy engineering, what distinguishes 'Pseudonymization' from 'Anonymization'?",
    codeSnippet: "# Pseudonymization: user_id = hmac.new(secret_salt, real_email.encode()).hexdigest()\n# Reversible if the secret_salt and original mapping key exist!\n# Anonymization: Irreversible removal of all direct and indirect identifiers",
    options: [
      "Pseudonymization replaces identifiers with aliases and remains reversible with a key; Anonymization irreversibly destroys identifiers so data can never be re-identified",
      "Pseudonymization is illegal under GDPR; Anonymization is mandatory",
      "Pseudonymization uses AES; Anonymization uses DES",
      "They are identical technical terms"
    ],
    correctAnswer: 0,
    explanation: "Pseudonymization replaces personal identifiers with pseudonyms or tokens while retaining a separate key that allows re-identification. Anonymization irreversibly eliminates identifying links.",
    officialRef: "PCES-30-01 Block 4.4 - Privacy Engineering",
    tags: ["pseudonymization", "anonymization", "gdpr"]
  },
  {
    id: "pces-4-068",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "K-Anonymity",
    difficulty: "Intermediate",
    question: "What is 'K-Anonymity' in data privacy and anonymization datasets?",
    codeSnippet: "# K-Anonymity guarantee: In a released dataset, each individual's quasi-identifiers\n# (e.g. Age, Gender, ZIP Code) are identical to at least K-1 other records\n# An individual cannot be distinguished from a group of at least K people!",
    options: [
      "A property ensuring that each individual in a dataset cannot be distinguished from at least k-1 other individuals whose quasi-identifiers are identical",
      "Encrypting data with k different AES keys",
      "Limiting database tables to k rows",
      "Deleting k columns from a dataset"
    ],
    correctAnswer: 0,
    explanation: "K-Anonymity guarantees that for any combination of quasi-identifiers (such as age, gender, ZIP), at least `k` records share those exact values, preventing re-identification of individuals in released datasets.",
    officialRef: "PCES-30-01 Block 4.4 - Privacy Metrics",
    tags: ["k-anonymity", "quasi-identifiers", "data-privacy"]
  },
  {
    id: "pces-4-069",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Differential Privacy",
    difficulty: "Intermediate",
    question: "What is 'Differential Privacy' in modern data analytics?",
    codeSnippet: "# Differential privacy mechanism:\n# Injecting calibrated mathematical noise (Laplacian noise) into statistical query results\n# Ensures query output reveals population trends without compromising individual presence",
    options: [
      "A mathematical framework that adds controlled statistical noise to query results, providing formal mathematical privacy guarantees about individual data records",
      "A technique for calculating derivatives in calculus",
      "A protocol that speeds up database joins",
      "A backup system for SQL databases"
    ],
    correctAnswer: 0,
    explanation: "Differential privacy introduces calibrated mathematical noise to query results, ensuring that whether any single individual's data is included in the dataset does not meaningfully change the output.",
    officialRef: "PCES-30-01 Block 4.4 - Differential Privacy",
    tags: ["differential-privacy", "statistical-noise", "privacy-guarantees"]
  },
  {
    id: "pces-4-070",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "IP Address Anonymization",
    difficulty: "Beginner",
    question: "How do analytics platforms (like Google Analytics) anonymize IPv4 addresses to protect visitor privacy?",
    codeSnippet: "# IPv4 address anonymization: Zero out the last octet (host portion)\ndef anonymize_ip(ip_str: str) -> str:\n    parts = ip_str.split('.')\n    parts[-1] = '0'\n    return '.'.join(parts)  # '192.168.1.150' -> '192.168.1.0'",
    options: [
      "By zeroing out the last octet of the IPv4 address (e.g. `198.51.100.123` becomes `198.51.100.0`), preserving regional routing data while anonymizing the specific host",
      "By converting the IP to binary format",
      "By reversing the numbers in the IP",
      "By deleting the IP from the network packet"
    ],
    correctAnswer: 0,
    explanation: "Zeroing the final octet of an IPv4 address removes individual host identification while retaining broad geographical and network routing information, satisfying privacy guidelines.",
    officialRef: "PCES-30-01 Block 4.4 - IP Anonymization",
    tags: ["ip-anonymization", "truncation", "privacy"]
  },
  {
    id: "pces-4-071",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Data Retention Policies",
    difficulty: "Beginner",
    question: "What is an automated 'Data Retention Policy' in secure system implementation?",
    codeSnippet: "# Automated data lifecycle cleanup script\ndef purge_expired_logs(log_dir, retention_days=90):\n    cutoff_time = time.time() - (retention_days * 86400)\n    for path in glob.glob(f'{log_dir}/*.log'):\n        if os.path.getmtime(path) < cutoff_time:\n            os.remove(path)  # Delete logs older than retention period",
    options: [
      "A systematic policy and automated technical process to securely delete or archive personal data and logs once their legitimate business retention window has expired",
      "A rule requiring companies to keep all emails forever",
      "A backup system that saves files to floppy disks",
      "A hardware policy for recycling old server monitors"
    ],
    correctAnswer: 0,
    explanation: "Data retention policies define how long data should be kept. Automatically purging data past its retention period aligns with GDPR data minimization and limits exposure during future data breaches.",
    officialRef: "PCES-30-01 Block 4.4 - Data Retention",
    tags: ["data-retention", "purging", "lifecycle-management"]
  },
  {
    id: "pces-4-072",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Cryptographic Erasure",
    difficulty: "Intermediate",
    question: "What is 'Crypto-Shredding' (Cryptographic Erasure)?",
    codeSnippet: "# Crypto-shredding concept:\n# Data is encrypted with a unique key. To permanently 'erase' the data across all backups and cloud storage,\n# simply DESTROY THE ENCRYPTION KEY. Without the key, the ciphertext is permanently unrecoverable!",
    options: [
      "Encrypting data with a unique key and later permanently destroying that key, rendering the encrypted data irrevocably undecipherable across all backups and replicas",
      "Physically feeding hard drives into paper shredder machines",
      "Deleting files using the Windows Recycle Bin",
      "Overwriting hard drive sectors with all ones"
    ],
    correctAnswer: 0,
    explanation: "Crypto-shredding renders encrypted data permanently unrecoverable by securely deleting the cryptographic keys. This is especially effective in cloud environments where physical drive sanitization is impossible.",
    officialRef: "PCES-30-01 Block 4.4 - Data Sanitization",
    tags: ["crypto-shredding", "key-destruction", "sanitization"]
  },
  {
    id: "pces-4-073",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Data Masking Techniques",
    difficulty: "Intermediate",
    question: "What is the difference between Static Data Masking (SDM) and Dynamic Data Masking (DDM)?",
    codeSnippet: "# SDM: Permanently modifies data in non-production database copies (test/dev)\n# DDM: Masks data in real time on the fly based on the user's role (DB query returns masked output to call center reps, unmasked to managers)",
    options: [
      "Static masking permanently alters data in non-production database copies; Dynamic masking redacts sensitive fields on-the-fly at query time based on user role",
      "Static masking is for images; Dynamic masking is for video",
      "Static masking is unencrypted; Dynamic masking is encrypted",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "Static masking creates permanent masked copies for development/test environments. Dynamic masking redacts data in real-time as queries are processed, based on the requesting user's permissions.",
    officialRef: "PCES-30-01 Block 4.4 - Data Masking",
    tags: ["static-masking", "dynamic-masking", "database-privacy"]
  },
  {
    id: "pces-4-074",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Secure Deletion in Python",
    difficulty: "Intermediate",
    question: "Why is simply calling `os.remove(filepath)` INSUFFICIENT for secure data destruction on magnetic storage media?",
    codeSnippet: "# os.remove only unlinks the directory inode reference!\n# The underlying raw data bits remain intact on magnetic disk sectors until overwritten!",
    options: [
      "`os.remove()` only unlinks the file pointer in the filesystem directory table; raw data sectors remain on disk until overwritten",
      "`os.remove()` moves the file to the desktop",
      "`os.remove()` encrypts the file instead of deleting it",
      "`os.remove()` requires administrative approval from Microsoft"
    ],
    correctAnswer: 0,
    explanation: "`os.remove()` merely frees the filesystem inode. The physical data sectors on magnetic drives remain intact and can be recovered using basic forensic tools unless explicitly overwritten (e.g. with `shred`).",
    officialRef: "PCES-30-01 Block 4.4 - Secure File Deletion",
    tags: ["secure-deletion", "os-remove", "data-remanence"]
  },
  {
    id: "pces-4-075",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Secure Memory Clearing",
    difficulty: "Intermediate",
    question: "Why is zeroing out sensitive memory buffers (like encryption keys) difficult in standard Python compared to C?",
    codeSnippet: "# Python objects are immutable and managed by garbage collection\n# Creating key = b'secret' and key = None does NOT immediately overwrite RAM memory!\n# Use bytearray or ctypes for explicit memory zeroing if necessary",
    options: [
      "Python strings and bytes are immutable, and memory reclamation is handled asynchronously by the garbage collector rather than direct immediate zeroing",
      "Python does not use computer RAM",
      "Python encrypts RAM automatically",
      "Memory cannot be cleared on 64-bit systems"
    ],
    correctAnswer: 0,
    explanation: "Python's memory management abstracts hardware memory. Strings and bytes are immutable, meaning setting variables to `None` leaves sensitive data in RAM until garbage collected. Mutable `bytearray` can be zeroed in place.",
    officialRef: "PCES-30-01 Block 4.4 - Memory Remanence",
    tags: ["garbage-collection", "memory-hygiene", "immutability"]
  },
  {
    id: "pces-4-076",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Data Classification Levels",
    difficulty: "Beginner",
    question: "What are typical data classification levels in an enterprise security policy?",
    codeSnippet: "# Enterprise data classification hierarchy:\n# Public -> Internal / Restricted -> Confidential -> Highly Restricted (Secret)",
    options: [
      "Public, Internal, Confidential, and Restricted (or Highly Confidential)",
      "Small, Medium, Large, and Extra Large",
      "Bronze, Silver, Gold, and Platinum",
      "Alpha, Beta, Release Candidate, and Final"
    ],
    correctAnswer: 0,
    explanation: "Enterprise classification hierarchies typically rank information into Public (open), Internal (routine business), Confidential (sensitive commercial/PII), and Restricted (critical secrets/trade secrets).",
    officialRef: "PCES-30-01 Block 4.4 - Data Classification",
    tags: ["classification", "confidentiality", "data-governance"]
  },
  {
    id: "pces-4-077",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Redacting Authorization Headers",
    difficulty: "Intermediate",
    question: "In a Python proxy or network logging script, how should `Authorization` headers (e.g. `Bearer eyJ...`) be recorded?",
    codeSnippet: "# Safe header logging\nheaders_to_log = dict(request.headers)\nif 'Authorization' in headers_to_log:\n    headers_to_log['Authorization'] = 'Bearer [REDACTED]'",
    options: [
      "Redact the token value entirely or replace it with a placeholder like `'Bearer [REDACTED]'`",
      "Log the entire token in plaintext for debugging",
      "Convert the token to uppercase",
      "Send the token via email to all developers"
    ],
    correctAnswer: 0,
    explanation: "Bearer tokens represent active authenticated sessions. Logging them exposes credentials in log archives, enabling credential theft and account takeover.",
    officialRef: "PCES-30-01 Block 4.4 - Token Protection",
    tags: ["bearer-tokens", "header-redaction", "log-hygiene"]
  },
  {
    id: "pces-4-078",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Synthetic Test Data",
    difficulty: "Beginner",
    question: "Why should production databases containing real customer PII NOT be copied directly into developer test environments?",
    codeSnippet: "# Using synthetic data generators (like Faker) instead of real customer PII in test environments\nfrom faker import Faker\nfake = Faker()\nfake_user = {'name': fake.name(), 'email': fake.email(), 'ssn': fake.ssn()}",
    options: [
      "Developer and test environments often have weaker access controls, lack auditing, and are accessed by third parties, drastically increasing breach risk",
      "Test environments run 5 times slower with real data",
      "Databases refuse to copy customer names",
      "Synthetic data is required by Python syntax"
    ],
    correctAnswer: 0,
    explanation: "Non-production environments rarely have the stringent access controls or compliance monitoring of production. Copying real customer PII to test environments frequently results in data breaches.",
    officialRef: "PCES-30-01 Block 4.4 - Test Data Security",
    tags: ["synthetic-data", "faker", "non-production-security"]
  },
  {
    id: "pces-4-079",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Right to be Forgotten",
    difficulty: "Beginner",
    question: "Under GDPR Article 17, what is the 'Right to be Forgotten' (Right to Erasure)?",
    codeSnippet: "# GDPR deletion request handler\ndef process_gdpr_erasure_request(user_id):\n    delete_user_profile(user_id)\n    delete_order_history(user_id)\n    anonymize_analytical_events(user_id)\n    send_erasure_confirmation(user_id)",
    options: [
      "The right of an individual to request the deletion or removal of their personal data without undue delay when there is no compelling reason for its continued processing",
      "The right to delete software you bought online",
      "The right to turn off computer monitors at night",
      "The right to rename your username every day"
    ],
    correctAnswer: 0,
    explanation: "The Right to Erasure allows data subjects to demand an organization erase their personal information when data is no longer necessary or consent is withdrawn.",
    officialRef: "PCES-30-01 Block 4.4 - Data Privacy Rights",
    tags: ["right-to-erasure", "gdpr-article-17", "privacy-rights"]
  },
  {
    id: "pces-4-080",
    track: 'pces',
    section: "Section 4",
    chapter: "4.4",
    category: "Auditing PII Access",
    difficulty: "Beginner",
    question: "Why must employee access to sensitive customer PII records be logged in an immutable access log?",
    codeSnippet: "# Logging access to healthcare records\naudit_logger.info(f'timestamp={time.time()} doctor_id={doc_id} accessed_patient_id={patient_id}')",
    options: [
      "To ensure accountability, detect unauthorized employee snooping (insider threat), and prove compliance with privacy regulations like HIPAA and GDPR",
      "To calculate employee typing speed",
      "To monitor hard drive temperature",
      "To bill patients per keystroke"
    ],
    correctAnswer: 0,
    explanation: "Logging all access to sensitive PII enables detection of unauthorized insider curiosity or snooping, supports forensic investigations, and proves compliance with regulatory standards.",
    officialRef: "PCES-30-01 Block 4.4 - Access Auditing",
    tags: ["audit-logs", "pii-access", "insider-threat"]
  },
  {
    id: "pces-4-081",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Cryptographic Randomness",
    difficulty: "Beginner",
    question: "Why must `secrets` be used instead of `random` when generating session tokens, cryptographic nonces, or password reset links in Python?",
    codeSnippet: "import secrets\n# secrets uses OS entropy (/dev/urandom) - cryptographically secure!\ntoken = secrets.token_hex(16)\nprint(f'Secure Nonce: {token}')",
    options: [
      "`secrets` uses cryptographically secure random sources provided by the OS kernel, whereas `random` uses a deterministic PRNG whose internal state can be predicted",
      "`secrets` is faster than `random`",
      "`random` only generates numbers between 0 and 10",
      "`secrets` is a third-party paid package"
    ],
    correctAnswer: 0,
    explanation: "The standard `random` module uses the Mersenne Twister algorithm, which is completely deterministic. The `secrets` module accesses kernel entropy, providing unpredictable cryptographic randomness.",
    officialRef: "PCES-30-01 Block 4.5 - Secrets Module",
    tags: ["secrets", "prng", "cryptographic-randomness"]
  },
  {
    id: "pces-4-082",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Symmetric Encryption with Fernet",
    difficulty: "Intermediate",
    question: "What cryptographic algorithms does `cryptography.fernet.Fernet` combine under the hood to provide authenticated symmetric encryption?",
    codeSnippet: "from cryptography.fernet import Fernet\n# Fernet combines:\n# - AES-128 in CBC mode\n# - HMAC using SHA-256 for authentication and integrity\n# - PKCS7 padding\nkey = Fernet.generate_key()\nf = Fernet(key)\ntoken = f.encrypt(b'Classified Data')",
    options: [
      "AES-128 in CBC mode with PKCS7 padding and HMAC-SHA256 for authenticated integrity",
      "RSA-2048 with public keys",
      "DES in ECB mode",
      "MD5 hashing with XOR cipher"
    ],
    correctAnswer: 0,
    explanation: "Fernet guarantees authenticated encryption: it uses AES-128 in CBC mode for confidentiality and HMAC-SHA256 for tamper-proof message authentication. Any tampering raises an `InvalidToken` exception.",
    officialRef: "PCES-30-01 Block 4.5 - Fernet Encryption",
    tags: ["fernet", "aes-128-cbc", "hmac-sha256", "authenticated-encryption"]
  },
  {
    id: "pces-4-083",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Fernet Tampering Detection",
    difficulty: "Intermediate",
    question: "What occurs if an attacker alters even a single byte of a ciphertext token generated by `Fernet.encrypt()` before `Fernet.decrypt()` is called?",
    codeSnippet: "from cryptography.fernet import Fernet, InvalidToken\nkey = Fernet.generate_key()\nf = Fernet(key)\ntoken = f.encrypt(b'Original Message')\ntampered_token = token[:-1] + b'X'  # Modify last byte\n\ntry:\n    f.decrypt(tampered_token)\nexcept InvalidToken:\n    print('Tampering detected! Decryption rejected.')",
    options: [
      "`Fernet.decrypt()` raises `cryptography.fernet.InvalidToken` and refuses to decrypt or output any data",
      "It decrypts corrupted garbage text without an error",
      "It crashes the computer operating system",
      "It automatically repairs the corrupted byte"
    ],
    correctAnswer: 0,
    explanation: "Fernet uses authenticated encryption (HMAC-SHA256). If the signature does not match perfectly, `decrypt()` immediately raises `InvalidToken`, preventing chosen-ciphertext and padding oracle attacks.",
    officialRef: "PCES-30-01 Block 4.5 - Fernet Integrity",
    tags: ["invalidtoken", "tampering-detection", "authenticated-encryption"]
  },
  {
    id: "pces-4-084",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Key Generation in Fernet",
    difficulty: "Beginner",
    question: "How do you generate a fresh, cryptographically secure key for use with `Fernet` in Python?",
    codeSnippet: "from cryptography.fernet import Fernet\n# Generates a URL-safe base64-encoded 32-byte key\nkey = Fernet.generate_key()\nprint(key)  # e.g. b'f0_bWcK_G4w5yZ...='",
    options: [
      "Fernet.generate_key()",
      "Fernet.create_password()",
      "Fernet.random_string()",
      "Fernet.make_key(128)"
    ],
    correctAnswer: 0,
    explanation: "`Fernet.generate_key()` securely generates a 32-byte (256-bit) cryptographically random key and returns it as a URL-safe base64-encoded bytes object.",
    officialRef: "PCES-30-01 Block 4.5 - Key Management",
    tags: ["generate_key", "fernet-api", "key-generation"]
  },
  {
    id: "pces-4-085",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Password Hashing with bcrypt",
    difficulty: "Intermediate",
    question: "What is the correct way to hash a password using the industry-standard `bcrypt` library in Python?",
    codeSnippet: "import bcrypt\npassword = b'MySecurePassword123'\n# Generate unique salt and hash password\nhashed = bcrypt.hashpw(password, bcrypt.gensalt(rounds=12))\nprint(hashed)  # Stored safely in database!",
    options: [
      "bcrypt.hashpw(password, bcrypt.gensalt(rounds=12))",
      "bcrypt.sha256(password)",
      "bcrypt.encrypt(password)",
      "bcrypt.hash(password)"
    ],
    correctAnswer: 0,
    explanation: "`bcrypt.hashpw(password, bcrypt.gensalt(rounds=12))` automatically generates a cryptographically random salt and applies the adaptive, work-factored Blowfish-based bcrypt algorithm.",
    officialRef: "PCES-30-01 Block 4.5 - bcrypt Hashing",
    tags: ["bcrypt", "hashpw", "gensalt", "work-factor"]
  },
  {
    id: "pces-4-086",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Verifying bcrypt Passwords",
    difficulty: "Intermediate",
    question: "How do you verify whether a user-submitted plaintext password matches a stored bcrypt hash?",
    codeSnippet: "import bcrypt\n# Verifying password during login\nis_valid = bcrypt.checkpw(user_submitted_password, stored_hash)",
    options: [
      "bcrypt.checkpw(user_submitted_password, stored_hash)",
      "bcrypt.verify_hash(user_submitted_password) == stored_hash",
      "stored_hash.decrypt() == user_submitted_password",
      "bcrypt.equals(user_submitted_password, stored_hash)"
    ],
    correctAnswer: 0,
    explanation: "`bcrypt.checkpw(password, hashed)` extracts the salt and work factor embedded in `hashed`, hashes `password` with those parameters, and performs a constant-time comparison.",
    officialRef: "PCES-30-01 Block 4.5 - bcrypt Verification",
    tags: ["checkpw", "bcrypt", "password-verification"]
  },
  {
    id: "pces-4-087",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Work Factor / Cost Factor",
    difficulty: "Intermediate",
    question: "What is the purpose of the 'Work Factor' (or iteration rounds) in modern password hashing algorithms like bcrypt and Argon2?",
    codeSnippet: "# Increasing bcrypt work factor\n# rounds=12 takes ~250ms on modern CPU, making brute-force cracking prohibitively slow\nsalt = bcrypt.gensalt(rounds=12)",
    options: [
      "It allows administrators to tune the computational difficulty and time required to compute each hash, slowing down attacker offline brute-force cracking as hardware speeds improve",
      "It increases network bandwidth",
      "It reduces the password character length",
      "It generates multiple passwords at once"
    ],
    correctAnswer: 0,
    explanation: "The work factor parameter makes password hashing deliberately slow and computationally intensive. As Moore's Law makes GPUs faster, defenders increase the cost factor to maintain resistance against cracking.",
    officialRef: "PCES-30-01 Block 4.5 - Work Factor",
    tags: ["work-factor", "cost-factor", "adaptive-hashing"]
  },
  {
    id: "pces-4-088",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Argon2 Password Hashing",
    difficulty: "Intermediate",
    question: "Why is Argon2 (winner of the Password Hashing Competition) considered superior to older hashing algorithms?",
    codeSnippet: "# Argon2 uses both time-cost (iterations) AND memory-cost (RAM requirements)\n# Memory hardness neutralizes GPU and custom ASIC cracking rigs!",
    options: [
      "Argon2 is memory-hard, requiring significant RAM to compute each hash, which severely degrades the cracking efficiency of custom ASIC and GPU clusters",
      "Argon2 is an unencrypted text file",
      "Argon2 was created in 1970",
      "Argon2 cannot be stored in databases"
    ],
    correctAnswer: 0,
    explanation: "Argon2 (specifically Argon2id) provides memory-hardness. While GPUs have thousands of parallel cores, they have limited memory per core; requiring large RAM buffers cripples GPU and ASIC parallel cracking.",
    officialRef: "PCES-30-01 Block 4.5 - Argon2",
    tags: ["argon2", "memory-hard", "password-hashing-competition"]
  },
  {
    id: "pces-4-089",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Constant-Time Comparison",
    difficulty: "Intermediate",
    question: "In which module is `compare_digest` located, and what attack does it neutralize?",
    codeSnippet: "import hmac\n# hmac.compare_digest prevents Timing Attacks\nis_match = hmac.compare_digest(user_token, valid_token)",
    options: [
      "It is located in `hmac` and neutralizes Timing Side-Channel attacks",
      "It is located in `math` and neutralizes buffer overflows",
      "It is located in `time` and neutralizes DDoS attacks",
      "It is located in `sys` and neutralizes syntax errors"
    ],
    correctAnswer: 0,
    explanation: "`hmac.compare_digest()` is located in Python's standard `hmac` module. It performs constant-time string and bytes comparison, neutralizing timing side-channel attacks.",
    officialRef: "PCES-30-01 Block 4.5 - Constant Time",
    tags: ["compare_digest", "hmac", "timing-attacks"]
  },
  {
    id: "pces-4-090",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Block Cipher Modes: ECB Insecurity",
    difficulty: "Intermediate",
    question: "Why is Electronic Codebook (ECB) mode notoriously insecure and strictly forbidden for block ciphers like AES?",
    codeSnippet: "# ECB Mode Flaw: Identical 16-byte plaintext blocks ALWAYS produce identical ciphertext blocks!\n# Reveals underlying patterns (the famous encrypted Linux penguin image outline is still clearly visible in ECB!)",
    options: [
      "Identical plaintext blocks always encrypt to identical ciphertext blocks, preserving data patterns and leaking structural information",
      "ECB mode is too slow for modern computers",
      "ECB mode can only encrypt files smaller than 10 bytes",
      "ECB mode requires public keys"
    ],
    correctAnswer: 0,
    explanation: "In ECB mode, identical plaintext blocks produce identical ciphertext blocks. This preserves structural patterns in data (such as bitmaps or structured records), violating confidentiality.",
    officialRef: "PCES-30-01 Block 4.5 - Cipher Modes",
    tags: ["ecb-mode", "aes-weakness", "block-ciphers"]
  },
  {
    id: "pces-4-091",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Initialization Vectors (IV)",
    difficulty: "Intermediate",
    question: "What is the role of an Initialization Vector (IV) in CBC mode encryption, and must it be kept secret?",
    codeSnippet: "# CBC Mode IV requirements:\n# - Must be UNIQUE and UNPREDICTABLE (cryptographically random) for every encryption operation\n# - Does NOT need to be kept secret (can be prepended in plaintext to the ciphertext)",
    options: [
      "The IV provides uniqueness ensuring identical plaintexts produce different ciphertexts; it must be unique and unpredictable, but does NOT need to be kept secret",
      "The IV must be kept strictly secret, even more secret than the key",
      "The IV is a password typed by the user",
      "The IV is the IP address of the encryption server"
    ],
    correctAnswer: 0,
    explanation: "An Initialization Vector (IV) introduces randomness into the first block of CBC encryption, preventing pattern leakage across identical plaintexts. The IV does not need to be secret, but must be unique and unpredictable.",
    officialRef: "PCES-30-01 Block 4.5 - Initialization Vectors",
    tags: ["initialization-vector", "iv", "cbc-mode"]
  },
  {
    id: "pces-4-092",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Authenticated Encryption (AEAD)",
    difficulty: "Intermediate",
    question: "What does Authenticated Encryption with Associated Data (AEAD, e.g. AES-GCM) provide that traditional AES-CBC alone does not?",
    codeSnippet: "# AES-GCM (AEAD mode):\n# Provides BOTH Confidentiality (encryption) AND Integrity/Authenticity (authentication tag)\n# Detects unauthorized tampering without needing a separate HMAC!",
    options: [
      "Simultaneous confidentiality, data integrity, and authenticity verification in a single cryptographic operation",
      "Compression of data files to save bandwidth",
      "Automatic translation between English and French",
      "Hardware overclocking of CPU encryption chips"
    ],
    correctAnswer: 0,
    explanation: "AEAD modes (like AES-GCM or ChaCha20-Poly1305) provide both confidentiality and cryptographic integrity verification simultaneously, ensuring any tampering with ciphertext is detected immediately.",
    officialRef: "PCES-30-01 Block 4.5 - AEAD & AES-GCM",
    tags: ["aead", "aes-gcm", "authenticated-encryption"]
  },
  {
    id: "pces-4-093",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Asymmetric Cryptography Basics",
    difficulty: "Beginner",
    question: "In asymmetric public key cryptography (like RSA), which key is used to encrypt data so that only the designated recipient can read it?",
    codeSnippet: "# Encrypting message for Bob:\n# Sender encrypts with Bob's PUBLIC KEY\n# Only Bob can decrypt with his secret PRIVATE KEY!",
    options: [
      "The recipient's Public Key",
      "The recipient's Private Key",
      "The sender's Private Key",
      "A shared symmetric passphrase"
    ],
    correctAnswer: 0,
    explanation: "To ensure confidentiality, the sender encrypts data using the recipient's Public Key. Only the recipient's corresponding secret Private Key can decrypt the ciphertext.",
    officialRef: "PCES-30-01 Block 4.5 - Asymmetric Cryptography",
    tags: ["asymmetric", "public-key", "private-key", "rsa"]
  },
  {
    id: "pces-4-094",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Digital Signature Mechanics",
    difficulty: "Intermediate",
    question: "In asymmetric cryptography, which key is used to generate a digital signature to prove message authenticity and non-repudiation?",
    codeSnippet: "# Signing message: Alice signs with her PRIVATE KEY\n# Anyone can verify signature using Alice's PUBLIC KEY!",
    options: [
      "The sender's Private Key",
      "The sender's Public Key",
      "The recipient's Public Key",
      "The Certificate Authority's root password"
    ],
    correctAnswer: 0,
    explanation: "Digital signatures are created using the sender's Private Key. Because only the sender holds that private key, anyone with the corresponding Public Key can verify that the sender created the signature.",
    officialRef: "PCES-30-01 Block 4.5 - Digital Signatures",
    tags: ["digital-signatures", "private-key", "non-repudiation"]
  },
  {
    id: "pces-4-095",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Key Storage Best Practices",
    difficulty: "Beginner",
    question: "Where should private cryptographic keys and master encryption keys NEVER be stored?",
    codeSnippet: "# Insecure practice: Hardcoding private key directly inside git repository\n# # my_app/crypto.py\n# PRIVATE_KEY = '-----BEGIN RSA PRIVATE KEY-----...'",
    options: [
      "Hardcoded directly in source code files or committed to public/shared git version control repositories",
      "Inside dedicated hardware security modules (HSM)",
      "Inside environment variables on isolated production servers",
      "Inside a cloud secrets vault like AWS KMS or HashiCorp Vault"
    ],
    correctAnswer: 0,
    explanation: "Hardcoding private keys in source code is a leading cause of catastrophic breaches. Keys must be stored in secure key management vaults (KMS, HSM) and injected dynamically at runtime.",
    officialRef: "PCES-30-01 Block 4.5 - Key Management",
    tags: ["key-storage", "secrets-management", "hardcoded-secrets"]
  },
  {
    id: "pces-4-096",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Key Rotation",
    difficulty: "Beginner",
    question: "What is 'Cryptographic Key Rotation'?",
    codeSnippet: "# Key rotation workflow: Periodic replacement of operational encryption keys\n# Limits the amount of data encrypted under a single key and reduces exposure if a key leaks",
    options: [
      "Periodically retiring an operational cryptographic key and generating a new key to encrypt future data",
      "Rotating server racks 180 degrees in the data center",
      "Typing passwords upside down",
      "Changing file names from uppercase to lowercase"
    ],
    correctAnswer: 0,
    explanation: "Key rotation limits the volume of data protected by a single key. If a key is compromised, rotation limits the window of vulnerability and the volume of exposed data.",
    officialRef: "PCES-30-01 Block 4.5 - Key Lifecycle",
    tags: ["key-rotation", "cryptographic-hygiene", "key-lifecycle"]
  },
  {
    id: "pces-4-097",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Quantum Computing & Cryptography",
    difficulty: "Intermediate",
    question: "Which category of cryptography is most vulnerable to being broken by quantum computers running Shor's Algorithm?",
    codeSnippet: "# Shor's Algorithm efficiently solves prime factorization and discrete logarithms in polynomial time,\n# breaking traditional asymmetric algorithms: RSA, ECC (Elliptic Curves), Diffie-Hellman!",
    options: [
      "Asymmetric public-key cryptography (RSA, ECC, Diffie-Hellman)",
      "Symmetric AES-256 encryption",
      "SHA-256 hashing",
      "One-Time Pad (OTP)"
    ],
    correctAnswer: 0,
    explanation: "Shor's algorithm can solve discrete logarithms and prime factorization in polynomial time, threatening traditional asymmetric algorithms (RSA, ECC). Symmetric ciphers with 256-bit keys (AES-256) remain secure.",
    officialRef: "PCES-30-01 Block 4.5 - Post-Quantum Cryptography",
    tags: ["quantum-threat", "shor-algorithm", "asymmetric-vulnerability"]
  },
  {
    id: "pces-4-098",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Enforcing TLS in requests",
    difficulty: "Intermediate",
    question: "In Python's `requests` library, what does setting `verify=False` do, and why is it dangerous in production?",
    codeSnippet: "# INSECURE requests call:\nimport requests\n# verify=False disables TLS certificate verification!\nresponse = requests.get('https://internal.bank.com/api', verify=False)",
    options: [
      "It disables TLS/SSL certificate verification, exposing all traffic, credentials, and API responses to transparent Man-in-the-Middle (MitM) interception",
      "It encrypts the payload twice",
      "It forces the connection to use HTTP/2",
      "It speeds up network latency by 50%"
    ],
    correctAnswer: 0,
    explanation: "`verify=False` disables certificate validation, causing `requests` to accept any certificate (including attacker self-signed certificates), completely negating the security of HTTPS.",
    officialRef: "PCES-30-01 Block 4.5 - Python requests Security",
    tags: ["requests-verify", "tls-verification", "mitm-risk"]
  },
  {
    id: "pces-4-099",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Perfect Forward Secrecy (PFS)",
    difficulty: "Intermediate",
    question: "What is Perfect Forward Secrecy (PFS) in TLS communication?",
    codeSnippet: "# Perfect Forward Secrecy (PFS):\n# Uses ephemeral Diffie-Hellman keys (ECDHE) for each individual session.\n# If the server's long-term private key is stolen tomorrow,\n# past recorded session traffic CANNOT be decrypted!",
    options: [
      "A feature of session key agreement protocols where compromise of the server's long-term private key does not compromise past recorded encrypted session traffic",
      "A guarantee that software has zero bugs",
      "An encryption algorithm that never needs to be updated",
      "A system where all passwords are deleted after 1 second"
    ],
    correctAnswer: 0,
    explanation: "PFS uses ephemeral key exchanges (ECDHE). Session keys are discarded after communication. Even if an adversary records encrypted traffic and later steals the server's private key, past sessions remain unreadable.",
    officialRef: "PCES-30-01 Block 4.5 - Forward Secrecy",
    tags: ["perfect-forward-secrecy", "pfs", "tls-security"]
  },
  {
    id: "pces-4-100",
    track: 'pces',
    section: "Section 4",
    chapter: "4.5",
    category: "Cryptographic Agility",
    difficulty: "Beginner",
    question: "What is 'Cryptographic Agility' in secure software architecture?",
    codeSnippet: "# Cryptographically agile architecture:\n# Modular design allowing seamless migration from SHA-256 to SHA-3, or from RSA to Post-Quantum Kyber\n# without rewriting entire application core logic",
    options: [
      "Designing an application so that cryptographic algorithms, keys, and protocols can be easily upgraded or swapped without major architectural rewrites when algorithms weaken",
      "Writing cryptography algorithms while jogging",
      "A software library that encrypts text at maximum speed",
      "Changing encryption keys every 5 seconds"
    ],
    correctAnswer: 0,
    explanation: "Cryptographic agility is the ability of an IT system or application to easily switch out vulnerable encryption, signature, or hashing algorithms for newer standards without requiring major software redesign.",
    officialRef: "PCES-30-01 Block 4.5 - Cryptographic Agility",
    tags: ["crypto-agility", "algorithm-migration", "future-proofing"]
  }
];
