import { Flashcard } from '../types';

export const pcesSection3CardsPart2: Flashcard[] = [
  {
    id: "pces-3-051",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Process Creation Time",
    difficulty: "Intermediate",
    question: "Which method in `psutil.Process` returns the epoch timestamp when the process was started?",
    codeSnippet: "import psutil, time\np = psutil.Process(450)\nstart_time = p.create_time()\nage_seconds = time.time() - start_time\nprint(f'Process has been running for {age_seconds:.1f} seconds')",
    options: [
      "p.create_time()",
      "p.start_timestamp()",
      "p.boot_time()",
      "p.elapsed_time()"
    ],
    correctAnswer: 0,
    explanation: "`p.create_time()` returns the process creation time as floating-point seconds since the Unix epoch, allowing analysts to correlate process start times with incident timelines.",
    officialRef: "PCES-30-01 Block 3.3 - Forensic Timelines",
    tags: ["create_time", "forensics", "incident-timeline"]
  },
  {
    id: "pces-3-052",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Disk Usage Monitoring",
    difficulty: "Beginner",
    question: "How does `psutil.disk_usage('/')` help prevent availability attacks targeting disk space exhaustion?",
    codeSnippet: "import psutil\nusage = psutil.disk_usage('/')\nif usage.percent > 95.0:\n    print(f'[CRITICAL] Root partition {usage.percent}% full! Alerting SysAdmin.')",
    options: [
      "It returns total, used, and free disk space, enabling proactive alerting before disk exhaustion crashes logging or database daemons",
      "It defragments files in real time",
      "It formats unallocated disk sectors",
      "It compresses text files on the fly"
    ],
    correctAnswer: 0,
    explanation: "Log-flooding attacks can exhaust disk partitions, halting databases and system services. `psutil.disk_usage()` allows automated monitoring of partition capacity to trigger alerts before failures.",
    officialRef: "PCES-30-01 Block 3.3 - Disk Monitoring",
    tags: ["disk_usage", "availability", "log-exhaustion"]
  },
  {
    id: "pces-3-053",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Memory Telemetry",
    difficulty: "Intermediate",
    question: "What is the difference between RSS (Resident Set Size) and VMS (Virtual Memory Size) when evaluating process memory in `p.memory_info()`?",
    codeSnippet: "import psutil\np = psutil.Process(120)\nmem = p.memory_info()\nprint(f'Physical RAM in use: {mem.rss / (1024**2):.1f} MB')",
    options: [
      "RSS is the actual non-swapped physical RAM currently occupied by the process; VMS is the total virtual memory space allocated",
      "RSS is for network buffers; VMS is for video memory",
      "RSS is measured in megabytes; VMS is measured in gigahertz",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "Resident Set Size (RSS) is the actual physical memory (RAM) allocated and held by the process. Virtual Memory Size (VMS) represents the total virtual memory space the process can address.",
    officialRef: "PCES-30-01 Block 3.3 - Memory Telemetry",
    tags: ["memory_info", "rss", "vms", "memory-monitoring"]
  },
  {
    id: "pces-3-054",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Detecting Masquerading",
    difficulty: "Intermediate",
    question: "How can an attacker use 'Process Masquerading' and how can Python detect it?",
    codeSnippet: "# Masquerading: Malicious executable named 'svchost.exe' or 'lsass.exe' running from C:\\Users\\Public\\svchost.exe\n# Real Windows svchost.exe must run from C:\\Windows\\System32\\svchost.exe\nfor p in psutil.process_iter(['name', 'exe']):\n    if p.info['name'] == 'svchost.exe' and p.info['exe'] != r'C:\\Windows\\System32\\svchost.exe':\n        print('[ALERT] Fake svchost process detected!')",
    options: [
      "An attacker names malware after a legitimate system binary (e.g. `svchost.exe`), but runs it from an illegitimate directory path detectable by comparing `proc.name()` and `proc.exe()`",
      "An attacker changes their user profile picture in Windows",
      "An attacker changes their keyboard layout to Dvorak",
      "An attacker runs a script with lowercase file extensions"
    ],
    correctAnswer: 0,
    explanation: "In process masquerading (MITRE ATT&CK T1036), malware adopts legitimate system names. SecOps scripts detect this by verifying whether the binary's actual path matches the expected system directory.",
    officialRef: "PCES-30-01 Block 3.3 - Masquerading Detection",
    tags: ["masquerading", "threat-hunting", "mitre-attack"]
  },
  {
    id: "pces-3-055",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Listening Ports Audit",
    difficulty: "Intermediate",
    question: "Which function in `psutil` returns all active network connections system-wide, including listening server ports?",
    codeSnippet: "import psutil\n# Retrieve all listening TCP sockets across all processes\nlistening_ports = [c.laddr.port for c in psutil.net_connections(kind='tcp') if c.status == 'LISTEN']\nprint(f'System listening ports: {listening_ports}')",
    options: [
      "psutil.net_connections()",
      "psutil.get_all_ports()",
      "psutil.scan_network()",
      "psutil.route_table()"
    ],
    correctAnswer: 0,
    explanation: "`psutil.net_connections()` returns a list of system-wide socket connections, enabling instant discovery of listening servers (`c.status == 'LISTEN'`) without running external port scanners.",
    officialRef: "PCES-30-01 Block 3.3 - Local Port Auditing",
    tags: ["net_connections", "listening-ports", "local-audit"]
  },
  {
    id: "pces-3-056",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Process Environment Inspection",
    difficulty: "Intermediate",
    question: "Which method on `psutil.Process` allows security auditors to inspect the environment variables passed to a running process?",
    codeSnippet: "import psutil\np = psutil.Process(204)\ntry:\n    env = p.environ()\n    if 'AWS_SECRET_ACCESS_KEY' in env:\n        print('[WARNING] AWS Secret found in process environment!')\nexcept psutil.AccessDenied:\n    pass",
    options: [
      "p.environ()",
      "p.get_env_vars()",
      "p.read_profile()",
      "p.os_environment()"
    ],
    correctAnswer: 0,
    explanation: "`p.environ()` returns a dictionary of the process's environment variables, allowing analysts to audit running daemons for exposed credentials or malicious injection variables (like `LD_PRELOAD`).",
    officialRef: "PCES-30-01 Block 3.3 - Environment Variables",
    tags: ["environ", "ld_preload", "credential-audit"]
  },
  {
    id: "pces-3-057",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Command-Line Arguments",
    difficulty: "Intermediate",
    question: "Why is inspecting `proc.cmdline()` invaluable during forensic incident triage?",
    codeSnippet: "import psutil\n# Searching for encoded PowerShell execution\nfor p in psutil.process_iter(['name', 'cmdline']):\n    cmd = ' '.join(p.info.get('cmdline') or [])\n    if '-EncodedCommand' in cmd or 'downloadstring' in cmd.lower():\n        print(f'[ALERT] Malicious PowerShell script execution: {cmd}')",
    options: [
      "It reveals the exact command-line arguments and flags used to launch the binary, uncovering obfuscated download commands or suspicious parameters",
      "It reveals the user's desktop background color",
      "It displays the monitor's refresh rate",
      "It recalculates the process file size on disk"
    ],
    correctAnswer: 0,
    explanation: "`proc.cmdline()` provides the full command line with all flags. Threat actors frequently pass encoded commands (e.g. `powershell.exe -enc ...`), which are immediately visible in `cmdline()`.",
    officialRef: "PCES-30-01 Block 3.3 - Threat Hunting",
    tags: ["cmdline", "encoded-commands", "powershell-detection"]
  },
  {
    id: "pces-3-058",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "AccessDenied Handling",
    difficulty: "Beginner",
    question: "When running a `psutil` audit script as a standard unprivileged user, why is `psutil.AccessDenied` frequently encountered?",
    codeSnippet: "import psutil\nfor p in psutil.process_iter(['pid', 'name']):\n    try:\n        print(p.exe())\n    except psutil.AccessDenied:\n        # Operating system prevents unprivileged users from reading root process paths\n        pass",
    options: [
      "Operating systems enforce kernel security boundaries that prevent unprivileged users from inspecting process details of other users or root/SYSTEM daemons",
      "The user's computer monitor is locked",
      "The Python script has syntax errors",
      "The network cable has been unplugged"
    ],
    correctAnswer: 0,
    explanation: "Standard OS access controls prevent normal user accounts from inspecting the memory, executable paths, or environments of processes owned by other users or root/SYSTEM, triggering `AccessDenied`.",
    officialRef: "PCES-30-01 Block 3.3 - Permissions",
    tags: ["accessdenied", "privilege-boundaries", "exceptions"]
  },
  {
    id: "pces-3-059",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Tracking Network I/O",
    difficulty: "Beginner",
    question: "How does `psutil.net_io_counters()` assist in detecting data exfiltration attacks?",
    codeSnippet: "import psutil, time\nio_before = psutil.net_io_counters().bytes_sent\ntime.sleep(60)\nio_after = psutil.net_io_counters().bytes_sent\nmb_sent = (io_after - io_before) / (1024**2)\nif mb_sent > 5000:\n    print(f'[ALERT] Massive data transmission detected: {mb_sent:.1f} MB sent in 1 min!')",
    options: [
      "By tracking total network bytes sent over time, flagging abnormal outbound data transmission spikes indicative of bulk data exfiltration",
      "By measuring Wi-Fi radio frequencies",
      "By displaying network printer ink levels",
      "By blocking all incoming telephone calls"
    ],
    correctAnswer: 0,
    explanation: "`psutil.net_io_counters()` returns network packet and byte statistics. An unexpected surge in `bytes_sent` during off-hours is a primary signal of unauthorized data exfiltration.",
    officialRef: "PCES-30-01 Block 3.3 - Exfiltration Detection",
    tags: ["net_io_counters", "data-exfiltration", "traffic-monitoring"]
  },
  {
    id: "pces-3-060",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "System Boot Time",
    difficulty: "Beginner",
    question: "Which `psutil` function returns the system uptime / boot timestamp in seconds since Unix epoch?",
    codeSnippet: "import psutil, datetime\nboot_ts = psutil.boot_time()\nboot_dt = datetime.datetime.fromtimestamp(boot_ts)\nprint(f'System last booted: {boot_dt}')",
    options: [
      "psutil.boot_time()",
      "psutil.get_uptime()",
      "psutil.system_start()",
      "psutil.power_on()"
    ],
    correctAnswer: 0,
    explanation: "`psutil.boot_time()` returns the system boot time expressed in seconds since the epoch, assisting in uptime calculations and detecting unexpected host reboots.",
    officialRef: "PCES-30-01 Block 3.3 - System Telemetry",
    tags: ["boot_time", "uptime", "system-telemetry"]
  },
  {
    id: "pces-3-061",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "hashlib Basics",
    difficulty: "Beginner",
    question: "Which standard library module is used in Python for calculating cryptographic hash digests like SHA-256 and SHA-512?",
    codeSnippet: "import hashlib\nhash_obj = hashlib.sha256(b'Secure Data')\nprint(hash_obj.hexdigest())",
    options: [
      "hashlib",
      "crypto",
      "security",
      "hmac_base"
    ],
    correctAnswer: 0,
    explanation: "`hashlib` is the standard library module that provides a common interface to secure hash algorithms including SHA-256, SHA-512, SHA-3, and legacy algorithms (MD5, SHA-1).",
    officialRef: "PCES-30-01 Block 3.4 - hashlib Basics",
    tags: ["hashlib", "sha256", "cryptographic-hashing"]
  },
  {
    id: "pces-3-062",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Input Encoding",
    difficulty: "Beginner",
    question: "Why does passing a standard string `hashlib.sha256('secret')` raise a `TypeError` in Python 3?",
    codeSnippet: "import hashlib\ntry:\n    # Raises TypeError: Strings must be encoded before hashing\n    hashlib.sha256('secret')\nexcept TypeError:\n    # Fix: Encode string to bytes first!\n    correct_hash = hashlib.sha256('secret'.encode('utf-8')).hexdigest()",
    options: [
      "Cryptographic hash functions operate strictly on sequences of raw `bytes`, requiring strings to be encoded (e.g. `.encode('utf-8')`)",
      "Strings can only be hashed on 32-bit operating systems",
      "Python 3 does not allow passwords to be hashed",
      "Hash functions only accept integer numbers"
    ],
    correctAnswer: 0,
    explanation: "Hash algorithms process raw binary bytes, not abstract Unicode text. In Python 3, strings must be explicitly converted to bytes (e.g. `'text'.encode('utf-8')`) before hashing.",
    officialRef: "PCES-30-01 Block 3.4 - Hashing Mechanics",
    tags: ["bytes", "encode", "typeerror", "hashlib"]
  },
  {
    id: "pces-3-063",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Chunked File Hashing",
    difficulty: "Intermediate",
    question: "Why is reading a file in fixed-size chunks (e.g. 4096 or 65536 bytes) the required best practice when computing file hashes in Python?",
    codeSnippet: "import hashlib\n\ndef hash_file_safely(filepath: str) -> str:\n    hasher = hashlib.sha256()\n    with open(filepath, 'rb') as f:\n        while chunk := f.read(65536):\n            hasher.update(chunk)\n    return hasher.hexdigest()",
    options: [
      "Reading chunks iteratively prevents loading multi-gigabyte files entirely into RAM at once, avoiding Out of Memory (OOM) crashes",
      "Chunking speeds up CPU processing by 1000%",
      "Files larger than 1MB cannot be read by Python in binary mode",
      "Chunking automatically encrypts the file on disk"
    ],
    correctAnswer: 0,
    explanation: "Calling `f.read()` on a 50GB database dump or VM disk image attempts to allocate 50GB of RAM, causing an OOM crash. Streaming in chunks (`while chunk := f.read(65536)`) consumes minimal, constant RAM.",
    officialRef: "PCES-30-01 Block 3.4 - Efficient File Hashing",
    tags: ["chunking", "oom-prevention", "hashlib-update"]
  },
  {
    id: "pces-3-064",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Binary Mode Opening",
    difficulty: "Beginner",
    question: "Which file mode must always be specified in `open(filepath, 'rb')` when calculating cryptographic checksums of files?",
    codeSnippet: "# Must open in binary mode ('rb') to avoid line-ending alterations (CRLF vs LF)!\nwith open('program.exe', 'rb') as f:\n    digest = hashlib.sha256(f.read()).hexdigest()",
    options: [
      "Binary read mode (`'rb'`)",
      "Text read mode (`'r'`)",
      "Append mode (`'a'`)",
      "Write text mode (`'w'`)"
    ],
    correctAnswer: 0,
    explanation: "Files must be read in binary mode (`'rb'`). Opening in text mode (`'r'`) triggers OS-specific newline transformations (CRLF to LF), altering the bytes and corrupting the computed hash.",
    officialRef: "PCES-30-01 Block 3.4 - File I/O",
    tags: ["binary-mode", "rb", "hash-integrity"]
  },
  {
    id: "pces-3-065",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Digest Formats",
    difficulty: "Beginner",
    question: "What is the difference between `hasher.digest()` and `hasher.hexdigest()` in `hashlib`?",
    codeSnippet: "import hashlib\nh = hashlib.sha256(b'PCES')\nraw_bytes = h.digest()     # Returns 32 raw binary bytes\nhex_str = h.hexdigest()    # Returns 64 lowercase hexadecimal characters",
    options: [
      "`digest()` returns raw binary `bytes`; `hexdigest()` returns a readable hexadecimal `str` representation",
      "`digest()` is for SHA-1; `hexdigest()` is for SHA-256",
      "`hexdigest()` encrypts data; `digest()` decrypts it",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "`digest()` outputs the hash as raw binary bytes (32 bytes for SHA-256). `hexdigest()` formats those bytes as a 64-character lowercase hex string suitable for printing, saving, and comparing.",
    officialRef: "PCES-30-01 Block 3.4 - Digest Representation",
    tags: ["digest", "hexdigest", "bytes-vs-hex"]
  },
  {
    id: "pces-3-066",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Baseline Integrity Checking",
    difficulty: "Intermediate",
    question: "How does a Python File Integrity Checker detect unauthorized file tampering?",
    codeSnippet: "# Integrity Baseline Verification:\n# 1. Create baseline manifest: {filepath: expected_sha256}\n# 2. Re-compute current sha256 for each file\n# 3. If current_sha256 != expected_sha256 -> File has been modified/tampered with!",
    options: [
      "By comparing the current cryptographic hash of a file against a previously recorded known-good baseline hash",
      "By comparing the font size of text files",
      "By checking if the file creation date is on a weekend",
      "By asking the user if they modified the file"
    ],
    correctAnswer: 0,
    explanation: "File Integrity Monitoring (FIM) records a known-good baseline of cryptographic hashes. If an attacker modifies or injects code into a file, the computed hash will not match the baseline.",
    officialRef: "PCES-30-01 Block 3.4 - File Integrity Monitoring",
    tags: ["fim", "tampering-detection", "baseline-verification"]
  },
  {
    id: "pces-3-067",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Hash Collisions",
    difficulty: "Intermediate",
    question: "What is a 'Cryptographic Hash Collision'?",
    codeSnippet: "# Hash Collision: Hash(Message_A) == Hash(Message_B) where Message_A != Message_B\n# Practical collisions have been demonstrated against MD5 and SHA-1!",
    options: [
      "When two distinct, different inputs produce the exact same cryptographic hash digest output",
      "When a computer screen crashes during a hash operation",
      "When a hard drive runs out of sectors",
      "When two users share the same username"
    ],
    correctAnswer: 0,
    explanation: "A hash collision occurs when two distinct inputs yield the identical hash digest. A secure cryptographic hash algorithm must be collision-resistant; practical collisions invalidate an algorithm for security.",
    officialRef: "PCES-30-01 Block 3.4 - Collision Resistance",
    tags: ["collision", "collision-resistance", "cryptographic-weakness"]
  },
  {
    id: "pces-3-068",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Deprecated Algorithms",
    difficulty: "Beginner",
    question: "Why are MD5 and SHA-1 deprecated and considered unsuitable for security verification and digital signatures?",
    codeSnippet: "# Legacy algorithms: MD5 and SHA-1 have proven practical collision attacks\n# Industry standard requires SHA-256 or SHA-3 for security applications",
    options: [
      "Practical collision vulnerabilities have been demonstrated, allowing attackers to forge certificates and tamper with files while preserving the hash",
      "MD5 and SHA-1 only run on Windows 95",
      "They are too slow for modern computers",
      "They cannot hash files larger than 10 kilobytes"
    ],
    correctAnswer: 0,
    explanation: "Both MD5 and SHA-1 have demonstrated practical collision vulnerabilities. Attackers can create two different files with identical hashes, undermining authenticity and integrity.",
    officialRef: "PCES-30-01 Block 3.4 - Deprecated Hash Algorithms",
    tags: ["md5", "sha1", "deprecated", "collisions"]
  },
  {
    id: "pces-3-069",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Available Algorithms",
    difficulty: "Intermediate",
    question: "Which attribute in Python's `hashlib` returns the set of all hash algorithms guaranteed to be supported across all platforms?",
    codeSnippet: "import hashlib\nprint(hashlib.algorithms_guaranteed)\n# Returns: {'sha256', 'sha384', 'sha512', 'sha1', 'sha224', 'md5', 'sha3_256', ...}",
    options: [
      "hashlib.algorithms_guaranteed",
      "hashlib.all_hashes",
      "hashlib.supported_ciphers",
      "hashlib.list_algorithms()"
    ],
    correctAnswer: 0,
    explanation: "`hashlib.algorithms_guaranteed` contains the set of algorithms guaranteed to be present across all Python platforms (`sha256`, `sha512`, `sha3_256`, etc.).",
    officialRef: "PCES-30-01 Block 3.4 - hashlib Algorithms",
    tags: ["algorithms_guaranteed", "hashlib-api", "compatibility"]
  },
  {
    id: "pces-3-070",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Timing Attacks in Hash Comparison",
    difficulty: "Intermediate",
    question: "Why should `hmac.compare_digest(a, b)` be used instead of standard `==` when comparing cryptographic digests or secrets in Python?",
    codeSnippet: "import hmac\n# Standard '==' exits early on the first non-matching byte (vulnerable to timing attacks!)\n# hmac.compare_digest runs in CONSTANT TIME, neutralizing timing analysis attacks!\nis_valid = hmac.compare_digest(expected_hash, computed_hash)",
    options: [
      "Standard `==` terminates comparisons early upon encountering the first differing byte, exposing timing side-channels; `compare_digest` operates in constant time",
      "`==` cannot compare strings longer than 10 characters",
      "`compare_digest` encrypts the strings before comparison",
      "`==` raises a SyntaxError in Python 3.12"
    ],
    correctAnswer: 0,
    explanation: "Standard string comparison `==` returns `False` immediately upon the first mismatched character, leaking timing information. `hmac.compare_digest()` takes constant time regardless of where differences occur.",
    officialRef: "PCES-30-01 Block 3.4 - Timing Attack Defense",
    tags: ["compare_digest", "timing-attacks", "side-channel"]
  },
  {
    id: "pces-3-071",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "HMAC Verification",
    difficulty: "Intermediate",
    question: "What is a Hash-based Message Authentication Code (HMAC) and what does it verify that a plain hash does not?",
    codeSnippet: "import hmac, hashlib\n# HMAC incorporates a SECRET KEY:\n# HMAC = Hash(Key XOR opad || Hash(Key XOR ipad || Message))\nmac = hmac.new(b'secret_key', b'Transfer $500', hashlib.sha256).hexdigest()",
    options: [
      "HMAC combines a cryptographic hash with a secret shared key, verifying both data integrity AND data authenticity (proving the sender knows the secret key)",
      "HMAC compresses files to 50% of their original size",
      "HMAC replaces public key RSA infrastructure",
      "HMAC is a hardware chip on motherboards"
    ],
    correctAnswer: 0,
    explanation: "A standard hash only verifies integrity (detects corruption). An HMAC uses a secret key to provide both integrity and authenticity, proving the message originated from a party holding the secret.",
    officialRef: "PCES-30-01 Block 3.4 - HMAC",
    tags: ["hmac", "authenticity", "integrity", "secret-key"]
  },
  {
    id: "pces-3-072",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Recursive Directory Integrity",
    difficulty: "Intermediate",
    question: "When building a directory baseline integrity scanner, which standard library function recursively traverses all files and subfolders in a path?",
    codeSnippet: "import os, hashlib\n\ndef build_directory_manifest(root_dir):\n    manifest = {}\n    for root, dirs, files in os.walk(root_dir):\n        for file in files:\n            path = os.path.join(root, file)\n            manifest[path] = calculate_file_sha256(path)\n    return manifest",
    options: [
      "os.walk()",
      "os.listdir()",
      "sys.walk()",
      "pathlib.Path.read()"
    ],
    correctAnswer: 0,
    explanation: "`os.walk(root_dir)` generates the file names in a directory tree by walking the tree either top-down or bottom-up, ideal for indexing entire filesystem hierarchies.",
    officialRef: "PCES-30-01 Block 3.4 - Filesystem Traversal",
    tags: ["os-walk", "directory-traversal", "manifest"]
  },
  {
    id: "pces-3-073",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Detecting Added and Deleted Files",
    difficulty: "Intermediate",
    question: "In a Python FIM scanner, how can set operations identify files that were newly created or deleted compared to a baseline dictionary?",
    codeSnippet: "baseline_files = set(baseline_manifest.keys())\ncurrent_files = set(current_manifest.keys())\n\nadded_files = current_files - baseline_files\ndeleted_files = baseline_files - current_files",
    options: [
      "Using set differences: `current_files - baseline_files` gives added files; `baseline_files - current_files` gives deleted files",
      "Using regular expressions on file sizes",
      "Converting dictionary keys to floating-point numbers",
      "Deleting all files and restoring from backup"
    ],
    correctAnswer: 0,
    explanation: "By converting file path lists to Python `set` objects, set difference operators (`current - baseline` and `baseline - current`) instantly identify created and deleted files.",
    officialRef: "PCES-30-01 Block 3.4 - Set Operations in FIM",
    tags: ["set-difference", "fim", "change-detection"]
  },
  {
    id: "pces-3-074",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Digital Forensics & Evidence Hashing",
    difficulty: "Beginner",
    question: "Why do forensic investigators immediately compute the SHA-256 hash of a seized digital drive before beginning analysis?",
    codeSnippet: "# Preserving forensic evidence integrity\n# The initial drive hash is documented on the chain-of-custody form\n# Any subsequent verification must produce the identical hash to prove evidence was never altered",
    options: [
      "To establish an immutable mathematical baseline proving in court that the digital evidence remained unaltered throughout investigation",
      "To speed up the drive's read speed",
      "To decrypt hidden password vaults",
      "To erase temporary browser cookies"
    ],
    correctAnswer: 0,
    explanation: "Forensic hashing establishes a cryptographic fingerprint of the digital media at the moment of seizure. Matching hashes later prove that investigators did not alter the evidence.",
    officialRef: "PCES-30-01 Block 3.4 - Digital Forensics",
    tags: ["forensic-hashing", "evidence-integrity", "chain-of-custody"]
  },
  {
    id: "pces-3-075",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "SHA-3 Standard",
    difficulty: "Intermediate",
    question: "What is SHA-3 (Keccak) and why was it standardized by NIST alongside the SHA-2 family?",
    codeSnippet: "# SHA-3 algorithm supported in hashlib\nimport hashlib\nh = hashlib.sha3_256(b'PCES Security').hexdigest()",
    options: [
      "A cryptographic hash standard based on the sponge construction, designed as a backup with a completely different mathematical structure than the Merkle-Damg\u00e5rd SHA-2 family",
      "A proprietary encryption algorithm sold by Microsoft",
      "A replacement for AES encryption",
      "A hardware protocol for wireless routers"
    ],
    correctAnswer: 0,
    explanation: "SHA-3 uses a sponge construction (Keccak), providing structural diversity. If a mathematical vulnerability is ever found in the Merkle-Damg\u00e5rd construction of SHA-2, SHA-3 remains secure.",
    officialRef: "PCES-30-01 Block 3.4 - SHA-3",
    tags: ["sha3", "sponge-construction", "keccak"]
  },
  {
    id: "pces-3-076",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Hash Output Length",
    difficulty: "Beginner",
    question: "What is the exact bit length and hexadecimal character length of an output digest generated by SHA-256?",
    codeSnippet: "# SHA-256 properties:\n# 256 bits = 32 bytes\n# 32 bytes in hexadecimal representation (2 hex chars per byte) = 64 characters\nimport hashlib\nassert len(hashlib.sha256(b'test').hexdigest()) == 64",
    options: [
      "256 bits (32 bytes), producing a 64-character hexadecimal string",
      "128 bits (16 bytes), producing a 32-character hexadecimal string",
      "512 bits (64 bytes), producing a 128-character hexadecimal string",
      "1024 bits (128 bytes), producing a 256-character hexadecimal string"
    ],
    correctAnswer: 0,
    explanation: "SHA-256 produces a fixed 256-bit (32-byte) digest. When represented in hexadecimal (where each byte is represented by two hex characters `0-9, a-f`), it is exactly 64 characters long.",
    officialRef: "PCES-30-01 Block 3.4 - Hash Characteristics",
    tags: ["sha256-length", "64-chars", "bit-length"]
  },
  {
    id: "pces-3-077",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Salting with Hashing",
    difficulty: "Beginner",
    question: "How is a salt appended to data in Python before hashing?",
    codeSnippet: "import hashlib, os\nsalt = os.urandom(16)  # 16 cryptographically secure random bytes\ndata = b'UserPassword123'\n# Concat salt to data before passing to hash\nhash_digest = hashlib.sha256(salt + data).hexdigest()",
    options: [
      "By concatenating the random salt bytes to the data bytes (`salt + data`) before passing them into the hash function",
      "By multiplying the string by 2",
      "By converting the string to uppercase",
      "By writing the salt into a text file"
    ],
    correctAnswer: 0,
    explanation: "Salting simply prepends or appends a cryptographically random byte sequence to the plaintext data (`salt + data`) before computing the hash.",
    officialRef: "PCES-30-01 Block 3.4 - Salting Technique",
    tags: ["salting", "urandom", "hashlib"]
  },
  {
    id: "pces-3-078",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Preimage Resistance",
    difficulty: "Intermediate",
    question: "In cryptography, what does 'Preimage Resistance' (one-way property) mean?",
    codeSnippet: "# One-way hash property:\n# Given Hash(x) = 'a591a6d40bf4...'\n# It must be computationally infeasible to find the original input 'x'",
    options: [
      "Given a hash output digest, it is computationally infeasible to reverse it and find the original input data",
      "Hashes can easily be decrypted back into plain text with a key",
      "Images cannot be uploaded to web servers",
      "Two files with different names cannot have the same extension"
    ],
    correctAnswer: 0,
    explanation: "Preimage resistance (one-way property) ensures that given a hash digest `h`, it is computationally infeasible to find any message `m` such that `hash(m) = h`.",
    officialRef: "PCES-30-01 Block 3.4 - Cryptographic Properties",
    tags: ["preimage-resistance", "one-way", "properties"]
  },
  {
    id: "pces-3-079",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Second Preimage Resistance",
    difficulty: "Intermediate",
    question: "What is 'Second Preimage Resistance' (Weak Collision Resistance)?",
    codeSnippet: "# Second Preimage Resistance:\n# Given a specific input x, it is computationally infeasible to find a different input y such that Hash(x) == Hash(y)",
    options: [
      "Given a specific input `x`, it is computationally infeasible to find a different input `y` such that `hash(x) == hash(y)`",
      "A user cannot enter two passwords at the same time",
      "A hard drive cannot store two copies of the same file",
      "A computer cannot boot twice in one day"
    ],
    correctAnswer: 0,
    explanation: "Second preimage resistance means that given a specific input `x`, an attacker cannot find a distinct substitute input `y` that produces the identical hash, preventing forged replacement documents.",
    officialRef: "PCES-30-01 Block 3.4 - Cryptographic Properties",
    tags: ["second-preimage", "tamper-resistance", "properties"]
  },
  {
    id: "pces-3-080",
    track: 'pces',
    section: "Section 3",
    chapter: "3.4",
    category: "Manifest Storage Security",
    difficulty: "Intermediate",
    question: "If a FIM script stores its baseline hash database in a local file (`/var/log/baseline.json`), how must that database be protected against attacker tampering?",
    codeSnippet: "# Hardening the integrity baseline database:\n# If an attacker compromises the server and can write to baseline.json,\n# they will simply update the hashes of their trojanized binaries!\n# Mitigations: Store on write-once media, digitally sign baseline, or ship off-host to SIEM",
    options: [
      "The baseline manifest must be stored on read-only/write-once media, cryptographically signed, or shipped immediately to an external remote SIEM",
      "The baseline should be deleted every morning",
      "The baseline should be renamed to a secret filename",
      "The baseline should be written in comic sans font"
    ],
    correctAnswer: 0,
    explanation: "If an attacker can overwrite the baseline manifest, they can update it to match their backdoor binaries. Baselines must be digitally signed, stored on append-only/read-only media, or shipped to external SIEMs.",
    officialRef: "PCES-30-01 Block 3.4 - FIM Hardening",
    tags: ["baseline-protection", "tamper-proofing", "audit-integrity"]
  },
  {
    id: "pces-3-081",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Safe Subprocess Execution",
    difficulty: "Intermediate",
    question: "Why is `subprocess.run(['ping', '-c', '1', host], shell=False)` significantly safer than `os.system('ping -c 1 ' + host)`?",
    codeSnippet: "# OS Command Injection comparison:\n# os.system('ping -c 1 ' + host) where host = '127.0.0.1; cat /etc/passwd'\n# executes the shell command injection!\n# subprocess.run(..., shell=False) passes arguments directly to OS execvp without shell interpolation!",
    options: [
      "`shell=False` passes arguments directly to the OS executable without invoking a shell interpreter, completely preventing shell command injection",
      "`os.system()` runs 10 times faster",
      "`subprocess.run()` automatically encrypts ping packets",
      "`shell=False` only works on Apple computers"
    ],
    correctAnswer: 0,
    explanation: "Invoking the shell (`shell=True` or `os.system`) allows metacharacters (`;`, `&&`, `|`) to execute injected shell commands. `shell=False` treats inputs strictly as literal string arguments to the executable.",
    officialRef: "PCES-30-01 Block 3.5 - Safe Subprocess",
    tags: ["subprocess", "command-injection", "shell-false"]
  },
  {
    id: "pces-3-082",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Capturing Subprocess Output",
    difficulty: "Beginner",
    question: "In modern Python 3, which parameter in `subprocess.run()` automatically captures stdout and stderr and decodes them to text?",
    codeSnippet: "import subprocess\nresult = subprocess.run(\n    ['uptime'],\n    capture_output=True,\n    text=True,  # Decodes stdout/stderr to str automatically!\n    check=True\n)\nprint(f'System Uptime: {result.stdout.strip()}')",
    options: [
      "`capture_output=True` and `text=True`",
      "`record=True`",
      "`save_output=True`",
      "`log_terminal=True`"
    ],
    correctAnswer: 0,
    explanation: "`capture_output=True` captures both standard output and standard error into `result.stdout` and `result.stderr`. Adding `text=True` decodes them to strings using the system encoding.",
    officialRef: "PCES-30-01 Block 3.5 - Subprocess API",
    tags: ["capture_output", "text-mode", "subprocess"]
  },
  {
    id: "pces-3-083",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Subprocess Timeouts",
    difficulty: "Intermediate",
    question: "How do you prevent a hung external CLI utility from causing a Python automation script to freeze indefinitely?",
    codeSnippet: "import subprocess\ntry:\n    # Abort command if it runs longer than 5 seconds\n    res = subprocess.run(['nmap', '-F', target], timeout=5.0)\nexcept subprocess.TimeoutExpired:\n    print('[ERROR] Scan command exceeded 5-second timeout and was killed!')",
    options: [
      "By setting the `timeout` parameter in `subprocess.run()` and catching `subprocess.TimeoutExpired`",
      "By adding more RAM to the server",
      "By running the command in an infinite while loop",
      "By unplugging the mouse"
    ],
    correctAnswer: 0,
    explanation: "The `timeout` parameter in `subprocess.run()` specifies the maximum allowed runtime in seconds. If the process does not terminate within that window, it is killed and `subprocess.TimeoutExpired` is raised.",
    officialRef: "PCES-30-01 Block 3.5 - Subprocess Timeouts",
    tags: ["timeoutexpired", "subprocess-timeout", "resilience"]
  },
  {
    id: "pces-3-084",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Subprocess Check Parameter",
    difficulty: "Intermediate",
    question: "What does setting `check=True` in `subprocess.run()` enforce?",
    codeSnippet: "import subprocess\ntry:\n    subprocess.run(['ls', '/nonexistent_dir'], check=True)\nexcept subprocess.CalledProcessError as err:\n    print(f'Command failed with return code {err.returncode}')",
    options: [
      "It raises `subprocess.CalledProcessError` if the executed external command exits with a non-zero exit code",
      "It checks if the command contains syntax typos",
      "It scans the binary for malware before running",
      "It verifies that the user is logged in as an administrator"
    ],
    correctAnswer: 0,
    explanation: "`check=True` automatically raises `subprocess.CalledProcessError` if the child process returns an exit code other than 0, ensuring failures are not silently ignored.",
    officialRef: "PCES-30-01 Block 3.5 - Subprocess Error Handling",
    tags: ["check-parameter", "calledprocesserror", "exit-codes"]
  },
  {
    id: "pces-3-085",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Structured Reporting with CSV",
    difficulty: "Beginner",
    question: "Which class in Python's standard `csv` module allows you to write structured security vulnerability dictionaries directly to a CSV spreadsheet?",
    codeSnippet: "import csv\nfindings = [\n    {'host': '10.0.0.1', 'port': 22, 'service': 'OpenSSH', 'status': 'VULNERABLE'},\n    {'host': '10.0.0.2', 'port': 80, 'service': 'Apache', 'status': 'OK'}\n]\nwith open('audit_report.csv', 'w', newline='') as f:\n    writer = csv.DictWriter(f, fieldnames=['host', 'port', 'service', 'status'])\n    writer.writeheader()\n    writer.writerows(findings)",
    options: [
      "csv.DictWriter",
      "csv.DictionarySaver",
      "csv.TableSerializer",
      "csv.ObjectWriter"
    ],
    correctAnswer: 0,
    explanation: "`csv.DictWriter` maps dictionary keys to CSV column headers and writes dictionary records cleanly into structured spreadsheet rows.",
    officialRef: "PCES-30-01 Block 3.5 - CSV Reporting",
    tags: ["dictwriter", "csv-reports", "reporting"]
  },
  {
    id: "pces-3-086",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Remote Automation with Paramiko",
    difficulty: "Intermediate",
    question: "What is `Paramiko` in the Python security ecosystem?",
    codeSnippet: "# Paramiko SSH client connection example\nimport paramiko\n\nssh = paramiko.SSHClient()\nssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())\nssh.connect('192.168.1.10', username='audit_user', key_filename='/home/user/.ssh/id_ed25519')\nstdin, stdout, stderr = ssh.exec_command('uname -a')\nprint(stdout.read().decode())",
    options: [
      "A Python implementation of the SSHv2 protocol providing programmatic SSH client and server capabilities for automated remote administration and auditing",
      "An open-source database engine replacing SQLite",
      "A web browser automation framework",
      "A machine learning library for malware classification"
    ],
    correctAnswer: 0,
    explanation: "`Paramiko` is the de facto Python library implementing the SSHv2 protocol, enabling automated secure shell connections, remote command execution, and SFTP transfers.",
    officialRef: "PCES-30-01 Block 3.5 - Paramiko & SSH",
    tags: ["paramiko", "ssh-automation", "remote-execution"]
  },
  {
    id: "pces-3-087",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "SSH Host Key Verification",
    difficulty: "Intermediate",
    question: "Why is blindly setting `ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())` a potential security vulnerability in production scripts?",
    codeSnippet: "# Insecure Paramiko practice: AutoAddPolicy automatically trusts any host key presented\n# Vulnerable to Man-in-the-Middle (MitM) attacks!\n# Secure practice: RejectPolicy() and pre-load known_hosts file",
    options: [
      "It automatically accepts and trusts any unknown server public key, exposing the connection to Man-in-the-Middle (MitM) spoofing attacks",
      "It disables password authentication",
      "It slows down SSH transfer speeds",
      "It prevents Paramiko from executing commands"
    ],
    correctAnswer: 0,
    explanation: "`AutoAddPolicy()` blindly trusts unknown host keys. If an attacker intercepts the connection (MitM), the script accepts the attacker's key without warning, negating SSH host verification.",
    officialRef: "PCES-30-01 Block 3.5 - Paramiko Security",
    tags: ["autoaddpolicy", "host-keys", "mitm-vulnerability"]
  },
  {
    id: "pces-3-088",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Validating TLS Certificates",
    difficulty: "Intermediate",
    question: "Which Python standard library module and function should be used to establish a secure SSL context that strictly validates server certificates?",
    codeSnippet: "import ssl, socket\n# Secure context with default CA certificates and hostname verification\ncontext = ssl.create_default_context()\nwith socket.create_connection(('example.com', 443)) as sock:\n    with context.wrap_socket(sock, server_hostname='example.com') as ssock:\n        print(f'TLS Established: {ssock.version()}')",
    options: [
      "ssl.create_default_context()",
      "ssl.disable_verification()",
      "socket.open_tls()",
      "urllib.make_ssl()"
    ],
    correctAnswer: 0,
    explanation: "`ssl.create_default_context()` creates an `SSLContext` configured with secure defaults: it enables certificate verification against system CAs and enforces hostname validation.",
    officialRef: "PCES-30-01 Block 3.5 - SSL Context",
    tags: ["ssl", "create_default_context", "tls-verification"]
  },
  {
    id: "pces-3-089",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Insecure TLS Verification",
    difficulty: "Intermediate",
    question: "What security vulnerability is introduced if a developer sets `context.check_hostname = False` and `context.verify_mode = ssl.CERT_NONE`?",
    codeSnippet: "# Insecure TLS context:\ncontext.check_hostname = False\ncontext.verify_mode = ssl.CERT_NONE\n# Server certificate is never validated against CAs or hostname!\n# An attacker on public Wi-Fi can easily present a fake self-signed cert and intercept traffic!",
    options: [
      "Certificate and hostname validation are completely disabled, exposing encrypted traffic to trivial Man-in-the-Middle (MitM) interception",
      "The connection speed is halved",
      "The web server drops all database connections",
      "The Python script cannot read files"
    ],
    correctAnswer: 0,
    explanation: "Disabling certificate and hostname verification (`CERT_NONE`) causes the client to accept any certificate (including forged or self-signed certs), allowing eavesdroppers to decrypt traffic in transit.",
    officialRef: "PCES-30-01 Block 3.5 - Insecure TLS",
    tags: ["cert_none", "mitm", "tls-vulnerabilities"]
  },
  {
    id: "pces-3-090",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "JSON Report Formatting",
    difficulty: "Beginner",
    question: "When writing audit results to a JSON file using `json.dump()`, which argument formats the file with indentation for human readability?",
    codeSnippet: "import json\naudit_data = {'status': 'PASS', 'scanned_hosts': 12}\nwith open('report.json', 'w') as f:\n    json.dump(audit_data, f, indent=4)  # Formats with 4-space indentation",
    options: [
      "`indent=4`",
      "`pretty=True`",
      "`readable=True`",
      "`format='pretty'`"
    ],
    correctAnswer: 0,
    explanation: "Passing `indent=4` (or any integer) to `json.dump()` or `json.dumps()` formats the JSON output with newlines and indentation levels, making it clean and readable for human operators.",
    officialRef: "PCES-30-01 Block 3.5 - JSON Reporting",
    tags: ["json-indent", "pretty-print", "reporting"]
  },
  {
    id: "pces-3-091",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Managing Temporary Files",
    difficulty: "Intermediate",
    question: "Which standard library module securely creates temporary files with unique unpredictable names and restricted permissions, preventing race conditions?",
    codeSnippet: "import tempfile\n# Secure temporary file creation (permissions 0600, unique randomized name)\nwith tempfile.NamedTemporaryFile(mode='w+', delete=True) as temp_audit:\n    temp_audit.write('Confidential audit data')\n    temp_audit.seek(0)\n    process_audit(temp_audit.name)",
    options: [
      "tempfile",
      "os.random",
      "fileutils",
      "sys.tmp"
    ],
    correctAnswer: 0,
    explanation: "The `tempfile` module creates temporary files and directories safely using randomized names and restrictive permissions (`0600`), mitigating symlink attacks and race conditions.",
    officialRef: "PCES-30-01 Block 3.5 - Secure Temp Files",
    tags: ["tempfile", "race-conditions", "secure-storage"]
  },
  {
    id: "pces-3-092",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Datetime Formatting in Reports",
    difficulty: "Beginner",
    question: "How do you generate an ISO 8601 standardized UTC timestamp string in Python for inclusion in security incident reports?",
    codeSnippet: "import datetime\n# Generates standardized UTC timestamp: '2026-09-28T14:30:00Z'\ntimestamp = datetime.datetime.now(datetime.timezone.utc).isoformat()",
    options: [
      "`datetime.datetime.now(datetime.timezone.utc).isoformat()`",
      "`time.clock()`",
      "`datetime.date.today().to_string()`",
      "`str(time.time() * 1000)`"
    ],
    correctAnswer: 0,
    explanation: "Using `datetime.datetime.now(datetime.timezone.utc).isoformat()` produces a standardized ISO 8601 string (e.g. `'2026-09-28T14:30:00+00:00'`), standard for SIEM and forensic correlation.",
    officialRef: "PCES-30-01 Block 3.5 - Timestamps & Forensics",
    tags: ["isoformat", "utc", "datetime", "reporting"]
  },
  {
    id: "pces-3-093",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Sanitizing Filenames",
    difficulty: "Intermediate",
    question: "Why must filenames derived from user input or remote targets be sanitized before being passed to `open()` in reporting scripts?",
    codeSnippet: "# Target provided: '../../../../etc/passwd' or 'scan;rm -rf /'\n# Must sanitize to prevent Path Traversal or directory escape!\nimport re, os\nsafe_filename = re.sub(r'[^a-zA-Z0-9_.-]', '_', user_supplied_target)\nreport_path = os.path.join('/reports', safe_filename + '.txt')",
    options: [
      "Unsanitized filenames containing `../` characters can cause Path Traversal, allowing attackers to overwrite critical system files outside the designated report folder",
      "Unsanitized filenames slow down hard drive read times",
      "Files with hyphens cannot be opened in Linux",
      "Python crashes if a filename has more than 5 letters"
    ],
    correctAnswer: 0,
    explanation: "Failing to sanitize user-provided target names or report identifiers allows Path Traversal attacks (`../../etc/cron.d/malicious`), overwriting arbitrary system files.",
    officialRef: "PCES-30-01 Block 3.5 - Path Traversal Prevention",
    tags: ["path-traversal", "filename-sanitization", "secure-io"]
  },
  {
    id: "pces-3-094",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Signal Handling in Automation",
    difficulty: "Intermediate",
    question: "Which standard library module allows a Python SecOps daemon to intercept OS signals like `SIGTERM` and `SIGHUP` to perform clean shutdowns or reload configs?",
    codeSnippet: "import signal, sys\n\ndef handle_sigterm(signum, frame):\n    print('[INFO] Received SIGTERM. Closing network connections and saving state...')\n    cleanup_and_save()\n    sys.exit(0)\n\nsignal.signal(signal.SIGTERM, handle_sigterm)",
    options: [
      "signal",
      "os.signals",
      "events",
      "process_control"
    ],
    correctAnswer: 0,
    explanation: "The `signal` module allows Python programs to define custom handler functions for asynchronous OS signals like `SIGINT` (Ctrl+C), `SIGTERM` (termination request), and `SIGHUP`.",
    officialRef: "PCES-30-01 Block 3.5 - Signal Handling",
    tags: ["signal", "sigterm", "clean-shutdown"]
  },
  {
    id: "pces-3-095",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Cron Automation in SecOps",
    difficulty: "Beginner",
    question: "In Linux environments, what scheduler is commonly used to execute Python security audit scripts automatically at specified intervals (e.g. nightly at 2 AM)?",
    codeSnippet: "# Linux crontab entry running audit script nightly at 02:00 AM\n# 0 2 * * * /usr/bin/python3 /opt/secops/nightly_audit.py >> /var/log/audit.log 2>&1",
    options: [
      "cron (crontab)",
      "system_scheduler",
      "timer_app",
      "linux_alarm"
    ],
    correctAnswer: 0,
    explanation: "`cron` is the time-based job scheduler in Unix/Linux operating systems, frequently configured via `crontab` to trigger automated Python security scans and log audits.",
    officialRef: "PCES-30-01 Block 3.5 - Automation Scheduling",
    tags: ["cron", "crontab", "scheduled-tasks"]
  },
  {
    id: "pces-3-096",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Parsing HTML/XML Reports",
    difficulty: "Intermediate",
    question: "Which standard library module parses XML output produced by security tools like Nmap, but must be protected against XML External Entity (XXE) attacks?",
    codeSnippet: "# Parsing Nmap XML report\nimport xml.etree.ElementTree as ET\ntree = ET.parse('nmap_scan.xml')\nroot = tree.getroot()",
    options: [
      "xml.etree.ElementTree",
      "json.xml",
      "html.parser",
      "re.xml"
    ],
    correctAnswer: 0,
    explanation: "`xml.etree.ElementTree` is the standard library module for parsing XML data (commonly exported by vulnerability scanners and Nmap). Defenses must prevent XXE on untrusted XML.",
    officialRef: "PCES-30-01 Block 3.5 - XML Processing",
    tags: ["elementtree", "xml", "nmap-xml"]
  },
  {
    id: "pces-3-097",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Automated Email Alerts",
    difficulty: "Intermediate",
    question: "Which standard library modules can send automated alert emails with TLS encryption when a security incident occurs?",
    codeSnippet: "import smtplib\nfrom email.message import EmailMessage\n\nmsg = EmailMessage()\nmsg['Subject'] = '[CRITICAL] Unauthorized Root Login Detected'\nmsg['From'] = 'secops@company.internal'\nmsg['To'] = 'soc-oncall@company.internal'\nmsg.set_content('An unauthorized root SSH session was initiated from IP 198.51.100.55.')\n\nwith smtplib.SMTP_SSL('smtp.company.internal', 465) as smtp:\n    smtp.login('secops', 'app_password')\n    smtp.send_message(msg)",
    options: [
      "`smtplib` and `email.message`",
      "`urllib.mail`",
      "`socket.email`",
      "`net.mailer`"
    ],
    correctAnswer: 0,
    explanation: "`smtplib` provides client-side SMTP protocol handling (including `SMTP_SSL` for encrypted mail delivery), while `email.message` constructs MIME and plaintext email payloads.",
    officialRef: "PCES-30-01 Block 3.5 - Incident Alerting",
    tags: ["smtplib", "email", "alerting", "soc-notifications"]
  },
  {
    id: "pces-3-098",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Hashing Passwords Securely in Python",
    difficulty: "Intermediate",
    question: "Which standard library function in `hashlib` provides a secure, salted Key Derivation Function (KDF) with configurable iteration count for password hashing?",
    codeSnippet: "import hashlib, os\nsalt = os.urandom(16)\n# PBKDF2 with SHA-256 and 600,000 iterations (OWASP recommendation)\nkey = hashlib.pbkdf2_hmac(\n    hash_name='sha256',\n    password=b'UserP@ssw0rd!',\n    salt=salt,\n    iterations=600000\n)",
    options: [
      "hashlib.pbkdf2_hmac()",
      "hashlib.quick_hash()",
      "hashlib.caesar_cipher()",
      "hashlib.xor_encrypt()"
    ],
    correctAnswer: 0,
    explanation: "`hashlib.pbkdf2_hmac()` implements the PBKDF2 key derivation function using HMAC, supporting configurable salt and high iteration counts to resist offline brute-force cracking.",
    officialRef: "PCES-30-01 Block 3.5 - Password Hashing",
    tags: ["pbkdf2_hmac", "kdf", "password-storage"]
  },
  {
    id: "pces-3-099",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Generating Cryptographic Tokens",
    difficulty: "Beginner",
    question: "Which Python 3 module should always be used to generate secure random tokens, password reset links, and nonces instead of the `random` module?",
    codeSnippet: "import secrets\n# Cryptographically secure URL-safe token (pseudo-random, unpredictable)\ntoken = secrets.token_urlsafe(32)\nprint(f'Secure Session Token: {token}')",
    options: [
      "secrets",
      "random",
      "math",
      "os.time"
    ],
    correctAnswer: 0,
    explanation: "The `secrets` module (introduced in Python 3.6) uses operating system entropy (`/dev/urandom` / `CryptGenRandom`) to generate cryptographically secure, unpredictable numbers and tokens.",
    officialRef: "PCES-30-01 Block 3.5 - Cryptographic Randomness",
    tags: ["secrets", "token_urlsafe", "random-vs-secrets"]
  },
  {
    id: "pces-3-100",
    track: 'pces',
    section: "Section 3",
    chapter: "3.5",
    category: "Executive Summary Metrics",
    difficulty: "Beginner",
    question: "In a security audit report, why are aggregated summary metrics (e.g. Total Scanned, Critical, High, Medium, Low) presented at the very top of the report?",
    codeSnippet: "# Aggregating summary metrics for executive triage\nsummary = {\n    'total_hosts_scanned': 250,\n    'critical_vulns': 2,\n    'high_vulns': 7,\n    'medium_vulns': 15,\n    'low_vulns': 42\n}",
    options: [
      "To provide executive leadership and technical managers with immediate high-level situational awareness before diving into deep technical details",
      "Because PDF documents cannot store numbers at the bottom of a page",
      "To comply with international font sizing laws",
      "To confuse attackers who steal the report"
    ],
    correctAnswer: 0,
    explanation: "Executive summaries provide decision-makers with instant clarity regarding organizational risk posture and urgent remediation priorities before delving into granular technical logs.",
    officialRef: "PCES-30-01 Block 3.5 - Executive Reporting",
    tags: ["executive-summary", "metrics", "reporting"]
  }
];
