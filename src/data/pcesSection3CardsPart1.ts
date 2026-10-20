import { Flashcard } from '../types';

export const pcesSection3CardsPart1: Flashcard[] = [
  {
    id: "pces-3-001",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Ethical Scoping",
    difficulty: "Beginner",
    question: "Before running a Python security scanning script against any target, what document must be formally signed by the system owner?",
    codeSnippet: "# Pre-engagement authorization check in Python script\nimport sys\n\ndef check_legal_authorization():\n    if not os.path.exists('signed_rules_of_engagement.pdf'):\n        print('[FATAL] Unauthorized scanning is illegal. Aborting.')\n        sys.exit(1)",
    options: [
      "A non-disclosure agreement with a software vendor",
      "A formal Rules of Engagement (ROE) document with explicit written authorization",
      "A user agreement from an Internet Service Provider",
      "A software purchase invoice receipt"
    ],
    correctAnswer: 1,
    explanation: "Before initiating any security assessment, an ethical security specialist must obtain a signed Rules of Engagement (ROE) and formal written authorization defining the allowed scope and boundaries.",
    officialRef: "PCES-30-01 Block 3.1 - Ethical Testing & Scoping",
    tags: ["roe", "authorization", "ethics", "scoping"]
  },
  {
    id: "pces-3-002",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Reconnaissance Types",
    difficulty: "Beginner",
    question: "What is the difference between Passive Reconnaissance and Active Reconnaissance?",
    codeSnippet: "# Passive recon: Gathering OSINT without transmitting packets directly to target\n# Active recon: Transmitting packets directly to target ports (e.g. socket port scan)",
    options: [
      "Passive recon gathers publicly available intelligence (OSINT) without direct packet interaction; Active recon directly probes and interacts with target systems",
      "Passive recon is illegal; Active recon is always legal",
      "Passive recon uses Wi-Fi; Active recon uses satellite signals",
      "Passive recon only scans Linux systems; Active recon only scans Windows"
    ],
    correctAnswer: 0,
    explanation: "Passive reconnaissance (OSINT, WHOIS, public records) gathers data without sending packets directly to the target. Active reconnaissance directly probes the target's IP and ports, creating network logs.",
    officialRef: "PCES-30-01 Block 3.1 - Reconnaissance",
    tags: ["passive-recon", "active-recon", "osint"]
  },
  {
    id: "pces-3-003",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Scoping & Boundaries",
    difficulty: "Intermediate",
    question: "What is 'Scope Creep' during a security assessment, and why is it dangerous?",
    codeSnippet: "# Scope definition in assessment script\nAUTHORIZED_SUBNET = '192.168.10.0/24'\n# If the script accidentally scans 192.168.20.0/24 (a third-party partner network),\n# the tester has committed unauthorized access under cyber crime laws!",
    options: [
      "Expanding testing activities beyond the explicitly agreed upon IP addresses or applications, risking unauthorized access to out-of-scope third-party systems",
      "Writing more than 500 lines of Python code in a day",
      "Slow internet bandwidth extending testing duration",
      "Upgrading the testing laptop's operating system during a test"
    ],
    correctAnswer: 0,
    explanation: "Testing outside agreed boundaries (scope creep) is dangerous and potentially criminal. If an out-of-scope system or vendor host is probed without permission, the tester faces civil and criminal liability.",
    officialRef: "PCES-30-01 Block 3.1 - Scoping & Boundaries",
    tags: ["scoping", "scope-creep", "legal-risk"]
  },
  {
    id: "pces-3-004",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "CLI Tooling with Python",
    difficulty: "Beginner",
    question: "Which standard library module is recommended in Python for building professional command-line security tools with flags, help menus, and argument parsing?",
    codeSnippet: "# Building a security CLI scanner\nimport argparse\n\nparser = argparse.ArgumentParser(description='SecOps Port Scanner')\nparser.add_argument('--target', required=True, help='Target IP or hostname')\nparser.add_argument('--ports', default='1-1024', help='Port range to scan')\nargs = parser.parse_args()",
    options: [
      "sys.argv raw string splitting only",
      "argparse",
      "math",
      "random"
    ],
    correctAnswer: 1,
    explanation: "The `argparse` module in Python's standard library is the standard tool for parsing command-line options, arguments, and generating automatic `--help` interfaces.",
    officialRef: "PCES-30-01 Block 3.1 - Python Tooling",
    tags: ["argparse", "cli", "python-automation"]
  },
  {
    id: "pces-3-005",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Automation in SecOps",
    difficulty: "Beginner",
    question: "What is the primary benefit of using Python scripts for routine security operations (SecOps)?",
    codeSnippet: "# Automating repetitive log auditing across 500 servers\n# Script executes consistently in 45 seconds without human fatigue or oversight error",
    options: [
      "Python scripts can automatically crack any AES-256 encryption in seconds",
      "Automation provides repeatable, fast, consistent execution of audit, collection, and reporting tasks without human error",
      "Python eliminates the need for any firewalls or antivirus software",
      "Python scripts run faster than bare-metal microcode"
    ],
    correctAnswer: 1,
    explanation: "Python automation enables security analysts to eliminate tedious manual workflows, rapidly aggregate disparate telemetry, schedule audits, and respond consistently without fatigue.",
    officialRef: "PCES-30-01 Block 3.1 - SecOps Automation",
    tags: ["automation", "secops", "efficiency"]
  },
  {
    id: "pces-3-006",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Input Validation in SecOps Tools",
    difficulty: "Intermediate",
    question: "When accepting a target IP address from a CLI argument, which standard library module allows you to validate that the string is a valid IPv4 or IPv6 address?",
    codeSnippet: "import ipaddress\n\ndef validate_target(target_str: str):\n    try:\n        return ipaddress.ip_address(target_str)\n    except ValueError:\n        raise ValueError(f'Invalid IP address format: {target_str}')",
    options: [
      "ipaddress",
      "urllib",
      "os",
      "string"
    ],
    correctAnswer: 0,
    explanation: "The `ipaddress` module provides robust classes (`ip_address`, `ip_network`) to inspect, manipulate, and validate IPv4 and IPv6 addresses and subnets.",
    officialRef: "PCES-30-01 Block 3.1 - Python Tooling",
    tags: ["ipaddress", "validation", "networking"]
  },
  {
    id: "pces-3-007",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "OSINT with Python",
    difficulty: "Beginner",
    question: "What does 'OSINT' stand for in security operations and reconnaissance?",
    codeSnippet: "# OSINT collection script: Querying public DNS records, WHOIS data, and certificates\n# Collects intelligence legally from public sources without intrusive scanning",
    options: [
      "Operating System Internal Network Telemetry",
      "Open Source Intelligence",
      "Optical Sensor Interface Network Transit",
      "Organization of Security International Trust"
    ],
    correctAnswer: 1,
    explanation: "OSINT (Open Source Intelligence) refers to intelligence collected from publicly available, open sources (such as DNS records, certificate transparency logs, WHOIS, and public repositories).",
    officialRef: "PCES-30-01 Block 3.1 - OSINT",
    tags: ["osint", "reconnaissance", "intelligence"]
  },
  {
    id: "pces-3-008",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Exit Codes in Security Scripts",
    difficulty: "Intermediate",
    question: "In automated CI/CD security quality gates, why should a Python security audit script return a non-zero exit code (`sys.exit(1)`) when a critical vulnerability is detected?",
    codeSnippet: "# Security quality gate in CI pipeline\nif critical_vulns_found:\n    print('[FAIL] Security audit failed: Critical CVEs detected!')\n    sys.exit(1)  # Signals pipeline runner to HALT the build!\nsys.exit(0)",
    options: [
      "Non-zero exit codes signal to pipeline runners (like GitHub Actions) that a failure occurred, automatically blocking deployment",
      "It shuts down the operating system immediately",
      "It prints text in red color on all terminals",
      "It restarts the web server in debug mode"
    ],
    correctAnswer: 0,
    explanation: "In Unix/Linux and CI/CD pipelines, an exit code of 0 denotes success, while any non-zero exit code (e.g. 1) indicates failure, halting the automated deployment pipeline.",
    officialRef: "PCES-30-01 Block 3.1 - Python Automation & CI/CD",
    tags: ["exit-codes", "sys-exit", "ci-cd-quality-gates"]
  },
  {
    id: "pces-3-009",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Logging Best Practices",
    difficulty: "Intermediate",
    question: "Which Python module should be used instead of raw `print()` statements for structured audit trails with timestamps, severity levels, and log rotation?",
    codeSnippet: "import logging\n\nlogging.basicConfig(\n    level=logging.INFO,\n    format='%(asctime)s [%(levelname)s] %(message)s',\n    handlers=[logging.FileHandler('secops.log'), logging.StreamHandler()]\n)\nlogging.warning('Unusual outbound traffic spike detected on port 4444')",
    options: [
      "logging",
      "sys.stdout",
      "builtins",
      "time"
    ],
    correctAnswer: 0,
    explanation: "Python's `logging` module provides standardized log levels (DEBUG, INFO, WARNING, ERROR, CRITICAL), configurable formatters, timestamps, and multi-destination handlers (files, SIEM).",
    officialRef: "PCES-30-01 Block 3.1 - Python Tooling",
    tags: ["logging", "auditability", "secops"]
  },
  {
    id: "pces-3-010",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Safety in Security Scripts",
    difficulty: "Beginner",
    question: "Why must automated vulnerability scanning scripts include rate-limiting or delay intervals (`time.sleep()`)?",
    codeSnippet: "# Polite scanning with rate limiting\nimport time\n\nfor port in ports_to_scan:\n    scan_port(target, port)\n    time.sleep(0.05)  # Prevents crashing fragile legacy network switches or triggering DoS",
    options: [
      "To prevent overwhelming target network devices or accidentally causing a Denial of Service (DoS)",
      "To allow the CPU fan to cool down",
      "Because Python cannot make more than 1 network request per minute",
      "Because internet service providers charge fees per millisecond"
    ],
    correctAnswer: 0,
    explanation: "Aggressive, rapid-fire packet generation can crash fragile production switches, exhaust server resources, or trigger defensive rate-limiting and false DoS alarms.",
    officialRef: "PCES-30-01 Block 3.1 - Responsible Testing",
    tags: ["rate-limiting", "polite-scanning", "dos-prevention"]
  },
  {
    id: "pces-3-011",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Environment Variables for Secrets",
    difficulty: "Beginner",
    question: "Where should API keys and database credentials used in a SecOps Python script be loaded from?",
    codeSnippet: "# Secure configuration loading\nimport os\n\napi_key = os.environ.get('SIEM_API_KEY')\nif not api_key:\n    raise ValueError('SIEM_API_KEY environment variable is not set!')",
    options: [
      "Hardcoded directly into the script as a plaintext string",
      "Loaded from secure environment variables or a dedicated secrets manager",
      "Written on the first line of the README.md file",
      "Stored in a public GitHub repository comment"
    ],
    correctAnswer: 1,
    explanation: "Hardcoding secrets in source code risks accidental leakage. Credentials should always be loaded at runtime from environment variables or a secure key management system.",
    officialRef: "PCES-30-01 Block 3.1 - Python Security",
    tags: ["environment-variables", "secrets-management", "secure-coding"]
  },
  {
    id: "pces-3-012",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Testing Scopes",
    difficulty: "Beginner",
    question: "In penetration testing terminology, what is a 'Black Box' test versus a 'White Box' test?",
    codeSnippet: "# Black Box: Zero prior knowledge of target architecture\n# White Box: Full access to source code, architecture diagrams, and internal docs\n# Gray Box: Partial knowledge (e.g. standard user credentials)",
    options: [
      "Black box tests are conducted with zero prior internal knowledge; White box tests provide full internal architecture and source code access",
      "Black box tests are illegal; White box tests are legal",
      "Black box tests only run in the dark; White box tests run in daylight",
      "Black box tests only inspect hardware cables"
    ],
    correctAnswer: 0,
    explanation: "In black-box testing, the tester simulates an external attacker with zero prior internal knowledge. In white-box testing, the tester has full access to blueprints, code, and documentation.",
    officialRef: "PCES-30-01 Block 3.1 - Assessment Methodologies",
    tags: ["black-box", "white-box", "testing-methodology"]
  },
  {
    id: "pces-3-013",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Virtual Environments",
    difficulty: "Beginner",
    question: "Why is creating a Python virtual environment (`python -m venv venv`) recommended when installing security tools and packages?",
    codeSnippet: "# Creating and activating an isolated virtual environment\n# python3 -m venv .venv\n# source .venv/bin/activate\n# pip install psutil cryptography",
    options: [
      "To isolate third-party library dependencies from the host system Python, preventing package version conflicts and system corruption",
      "To run Python scripts 10 times faster",
      "To encrypt the computer's hard drive automatically",
      "To bypass Linux user permission checks"
    ],
    correctAnswer: 0,
    explanation: "Virtual environments isolate package dependencies per project, preventing conflicts between tools and avoiding pollution or breakage of the underlying system Python installation.",
    officialRef: "PCES-30-01 Block 3.1 - Python Best Practices",
    tags: ["venv", "virtual-environment", "dependency-isolation"]
  },
  {
    id: "pces-3-014",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Standard Library Strength",
    difficulty: "Beginner",
    question: "Why is Python considered a premier language for security operations and rapid tool development?",
    codeSnippet: "# Rapid prototyping in Python: Rich standard library (socket, hashlib, ssl, subprocess)\n# High-level readability, cross-platform support, massive security ecosystem",
    options: [
      "Python has a rich standard library for networking, cryptography, and OS interaction, combined with concise readable syntax for rapid scripting",
      "Python programs cannot be hacked by outside attackers",
      "Python is the only language recognized by cybersecurity courts",
      "Python executes faster than pure C code in all scenarios"
    ],
    correctAnswer: 0,
    explanation: "Python's 'batteries included' standard library (socket, ssl, hashlib, subprocess, json) and clear syntax enable security specialists to write and deploy functional audit tools rapidly.",
    officialRef: "PCES-30-01 Block 3.1 - Python in Security",
    tags: ["python-strengths", "batteries-included", "secops"]
  },
  {
    id: "pces-3-015",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Graceful Degradation",
    difficulty: "Intermediate",
    question: "What is the security value of catching `KeyboardInterrupt` in Python security scanning scripts?",
    codeSnippet: "try:\n    run_long_network_audit()\nexcept KeyboardInterrupt:\n    print('\\n[!] Audit interrupted by user. Cleaning up sockets and saving partial results...')\n    save_partial_report()\n    sys.exit(0)",
    options: [
      "Allows the script to cleanly close open network sockets, release file handles, and save partial audit logs instead of abruptly crashing",
      "Prevents the user from ever stopping the script",
      "Reboots the remote target server",
      "Deletes all temporary files on the entire computer"
    ],
    correctAnswer: 0,
    explanation: "Handling `KeyboardInterrupt` (Ctrl+C) ensures the script terminates gracefully, releasing network resources, closing sockets, and persisting collected data cleanly.",
    officialRef: "PCES-30-01 Block 3.1 - Robust Scripting",
    tags: ["keyboard-interrupt", "exception-handling", "clean-exit"]
  },
  {
    id: "pces-3-016",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Data Serialization",
    difficulty: "Beginner",
    question: "Which standard Python module is best suited for exporting structured security findings into machine-readable format for ingestion into SIEMs?",
    codeSnippet: "import json\n\nfinding = {\n    'host': '192.168.1.100',\n    'vuln': 'Outdated OpenSSH 7.4',\n    'severity': 'HIGH',\n    'cve': 'CVE-2018-15473'\n}\nwith open('finding.json', 'w') as f:\n    json.dump(finding, f, indent=2)",
    options: [
      "pickle",
      "json",
      "marshal",
      "ctypes"
    ],
    correctAnswer: 1,
    explanation: "The `json` module produces standardized, portable, human-readable text that can be ingested by nearly all SIEM platforms, databases, and reporting engines without deserialization risks.",
    officialRef: "PCES-30-01 Block 3.1 - Python Tooling",
    tags: ["json", "data-export", "siem-ingestion"]
  },
  {
    id: "pces-3-017",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Command-Line Flags",
    difficulty: "Intermediate",
    question: "In `argparse`, how do you create a boolean flag `--verbose` that defaults to `False` and becomes `True` when specified?",
    codeSnippet: "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('-v', '--verbose', action='store_true', help='Enable verbose output')",
    options: [
      "action='store_true'",
      "type=bool",
      "default=True",
      "action='store_false'"
    ],
    correctAnswer: 0,
    explanation: "`action='store_true'` automatically sets the argument value to `True` when the flag is present on the command line, defaulting to `False` when omitted.",
    officialRef: "PCES-30-01 Block 3.1 - Python Tooling",
    tags: ["argparse", "store-true", "cli-flags"]
  },
  {
    id: "pces-3-018",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Defensive Automation",
    difficulty: "Beginner",
    question: "What is 'SOAR' in enterprise cybersecurity operations?",
    codeSnippet: "# SOAR: Security Orchestration, Automation, and Response\n# Automated playbooks (often written in Python) that execute remediation actions when alerts trigger",
    options: [
      "Security Orchestration, Automation, and Response",
      "System Operating Architecture Routing",
      "Secure Open Access Resource",
      "Standard Online Anti-virus Record"
    ],
    correctAnswer: 0,
    explanation: "SOAR (Security Orchestration, Automation, and Response) platforms execute automated playbooks (frequently scripted in Python) to ingest alerts, triage events, and remediate threats automatically.",
    officialRef: "PCES-30-01 Block 3.1 - SOAR & Automation",
    tags: ["soar", "orchestration", "automation"]
  },
  {
    id: "pces-3-019",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Code Maintainability",
    difficulty: "Beginner",
    question: "Why is modularizing Python security code into functions and classes beneficial for security teams?",
    codeSnippet: "# Reusable SecOps module: port_scanner.py, hash_checker.py, report_builder.py\n# Allows easy unit testing, code reuse across scripts, and maintainability",
    options: [
      "It enables reuse across multiple audit scripts, simplifies peer review, and allows isolated unit testing of critical security logic",
      "It prevents Python from compiling code into bytecode",
      "It automatically hides the source code from hackers",
      "It removes the need to use comments or documentation"
    ],
    correctAnswer: 0,
    explanation: "Modular design organizes code into reusable components, making security utilities testable, easier to peer-review, and simpler to integrate into larger automation pipelines.",
    officialRef: "PCES-30-01 Block 3.1 - Code Structure",
    tags: ["modularization", "clean-code", "maintainability"]
  },
  {
    id: "pces-3-020",
    track: 'pces',
    section: "Section 3",
    chapter: "3.1",
    category: "Legal Boundaries",
    difficulty: "Beginner",
    question: "Under what condition is it legally permissible to run a port scanner against a company's public IP range?",
    codeSnippet: "# Checking legal boundary: Explicit written agreement signed by authorized asset owner",
    options: [
      "Only when you have explicit, verifiable written permission from the asset owner",
      "Whenever the IP address is reachable via Google",
      "If you are a student learning cybersecurity",
      "If you promise not to steal any passwords"
    ],
    correctAnswer: 0,
    explanation: "Network scanning without authorization is illegal under computer crime legislation (such as CFAA or Computer Misuse Act). Written authorization from the legitimate owner is required.",
    officialRef: "PCES-30-01 Block 3.1 - Legal & Ethical Standards",
    tags: ["authorization", "cfaa", "legality"]
  },
  {
    id: "pces-3-021",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Socket Basics",
    difficulty: "Beginner",
    question: "In Python's `socket` module, which address family constant specifies IPv4 networking?",
    codeSnippet: "import socket\n# Creating an IPv4 TCP socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)",
    options: [
      "socket.AF_INET",
      "socket.AF_INET6",
      "socket.AF_UNIX",
      "socket.AF_PACKET"
    ],
    correctAnswer: 0,
    explanation: "`socket.AF_INET` designates the IPv4 address family. `socket.AF_INET6` is for IPv6, and `socket.AF_UNIX` is for Unix domain sockets.",
    officialRef: "PCES-30-01 Block 3.2 - Socket Programming",
    tags: ["socket", "af_inet", "ipv4"]
  },
  {
    id: "pces-3-022",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Socket Basics",
    difficulty: "Beginner",
    question: "Which socket type constant specifies a connection-oriented TCP socket in Python?",
    codeSnippet: "import socket\n# socket.SOCK_STREAM = TCP | socket.SOCK_DGRAM = UDP\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)",
    options: [
      "socket.SOCK_STREAM",
      "socket.SOCK_DGRAM",
      "socket.SOCK_RAW",
      "socket.SOCK_RDM"
    ],
    correctAnswer: 0,
    explanation: "`socket.SOCK_STREAM` specifies a reliable, stream-oriented TCP socket. `socket.SOCK_DGRAM` specifies a datagram-oriented UDP socket.",
    officialRef: "PCES-30-01 Block 3.2 - Socket Programming",
    tags: ["socket", "sock_stream", "tcp"]
  },
  {
    id: "pces-3-023",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Port Scanning",
    difficulty: "Intermediate",
    question: "What is the difference between `socket.connect()` and `socket.connect_ex()` in Python port scanning scripts?",
    codeSnippet: "import socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n# connect() raises an exception if connection fails\n# connect_ex() returns an integer error code (0 on success, errno on failure)\nresult = s.connect_ex(('192.168.1.1', 80))\nif result == 0:\n    print('Port 80 is OPEN!')",
    options: [
      "`connect()` raises an exception on error; `connect_ex()` returns an error indicator (0 for success) instead of raising an exception",
      "`connect_ex()` connects to IPv6 exclusively",
      "`connect()` uses UDP; `connect_ex()` uses TCP",
      "`connect_ex()` requires root administrative privileges"
    ],
    correctAnswer: 0,
    explanation: "`connect_ex()` returns `0` if the connection succeeded (port is open) or a C error code (like `errno.ECONNREFUSED`) on failure, making it ideal for clean port scanning without try/except blocks.",
    officialRef: "PCES-30-01 Block 3.2 - Socket Methods",
    tags: ["connect_ex", "port-scanning", "error-codes"]
  },
  {
    id: "pces-3-024",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Socket Timeouts",
    difficulty: "Intermediate",
    question: "Why is setting `s.settimeout(1.0)` critical when developing a network port scanner in Python?",
    codeSnippet: "import socket\ndef check_port(host, port):\n    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    s.settimeout(0.5)  # Set timeout to 500ms\n    result = s.connect_ex((host, port))\n    s.close()\n    return result == 0",
    options: [
      "Without a timeout, the socket will hang and block indefinitely waiting for non-responsive or filtered ports",
      "It speeds up the CPU clock speed",
      "It limits the maximum file size that can be downloaded",
      "It prevents the Python interpreter from consuming more than 1MB of RAM"
    ],
    correctAnswer: 0,
    explanation: "If a remote port is filtered by a firewall, connection packets are silently dropped. Without an explicit timeout, `connect()` or `connect_ex()` can hang for minutes, stalling the entire scan.",
    officialRef: "PCES-30-01 Block 3.2 - Socket Timeouts",
    tags: ["settimeout", "blocking", "port-scanner"]
  },
  {
    id: "pces-3-025",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Banner Grabbing",
    difficulty: "Intermediate",
    question: "What is 'Banner Grabbing' using Python sockets, and what is its purpose during reconnaissance?",
    codeSnippet: "import socket\ndef grab_banner(ip, port):\n    s = socket.socket()\n    s.settimeout(2.0)\n    s.connect((ip, port))\n    s.send(b'HEAD / HTTP/1.0\\r\\n\\r\\n')  # Probe payload\n    banner = s.recv(1024)\n    s.close()\n    return banner.decode(errors='ignore')",
    options: [
      "Connecting to an open port and reading the initial text response sent by the service to identify software versions (e.g. Apache/2.4.41, OpenSSH_8.2)",
      "Stealing physical graphical advertising banners from website headers",
      "Downloading website logos using web scrapers",
      "Taking a screenshot of the remote desktop screen"
    ],
    correctAnswer: 0,
    explanation: "Banner grabbing connects to a service port and reads the service's greeting string or response headers to identify the application name and exact version number for vulnerability mapping.",
    officialRef: "PCES-30-01 Block 3.2 - Banner Grabbing",
    tags: ["banner-grabbing", "service-enumeration", "reconnaissance"]
  },
  {
    id: "pces-3-026",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Socket Resource Cleanup",
    difficulty: "Beginner",
    question: "Why must `s.close()` (or a `with` context manager) be used with Python sockets?",
    codeSnippet: "# Proper socket context manager\nwith socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:\n    s.settimeout(1.0)\n    s.connect(('192.168.1.1', 22))\n# Socket file descriptor is automatically closed upon exit",
    options: [
      "To release the underlying operating system file descriptor and network socket resources, preventing socket leaks",
      "To permanently delete the destination server",
      "To disconnect the host computer from the Wi-Fi router",
      "To clear the Python terminal screen"
    ],
    correctAnswer: 0,
    explanation: "Sockets consume operating system file descriptors and kernel buffers. Failing to close them causes resource leaks that eventually trigger 'Too many open files' errors.",
    officialRef: "PCES-30-01 Block 3.2 - Resource Management",
    tags: ["socket-close", "context-manager", "file-descriptors"]
  },
  {
    id: "pces-3-027",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Concurrency in Scanning",
    difficulty: "Intermediate",
    question: "Which Python standard library module allows you to easily execute port checks across multiple threads concurrently for high-speed scanning?",
    codeSnippet: "from concurrent.futures import ThreadPoolExecutor\n\ndef scan_host_ports(target_ip, ports):\n    with ThreadPoolExecutor(max_workers=50) as executor:\n        results = executor.map(lambda p: check_port(target_ip, p), ports)\n    return list(results)",
    options: [
      "concurrent.futures (ThreadPoolExecutor)",
      "ctypes",
      "turtle",
      "pickle"
    ],
    correctAnswer: 0,
    explanation: "`concurrent.futures.ThreadPoolExecutor` provides an interface to execute I/O-bound tasks (like socket network requests) concurrently across multiple worker threads.",
    officialRef: "PCES-30-01 Block 3.2 - Multi-threading",
    tags: ["threadpoolexecutor", "concurrent-futures", "speed"]
  },
  {
    id: "pces-3-028",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "DNS Resolution in Sockets",
    difficulty: "Beginner",
    question: "Which function in Python's `socket` module resolves a human-readable hostname (e.g. `'example.com'`) into its corresponding IPv4 address?",
    codeSnippet: "import socket\nip_address = socket.gethostbyname('example.com')\nprint(f'Resolved IP: {ip_address}')",
    options: [
      "socket.gethostbyname()",
      "socket.resolve_ip()",
      "socket.lookup_dns()",
      "socket.translate_host()"
    ],
    correctAnswer: 0,
    explanation: "`socket.gethostbyname(hostname)` performs a DNS lookup and returns the IPv4 address string corresponding to the specified domain name.",
    officialRef: "PCES-30-01 Block 3.2 - DNS in Sockets",
    tags: ["gethostbyname", "dns-lookup", "socket"]
  },
  {
    id: "pces-3-029",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Socket Exceptions",
    difficulty: "Intermediate",
    question: "Which exception does Python's `socket` module raise if a DNS resolution failure occurs during `socket.gethostbyname()`?",
    codeSnippet: "import socket\ntry:\n    ip = socket.gethostbyname('nonexistent-domain-xyz12345.org')\nexcept socket.gaierror as err:\n    print(f'DNS resolution failed: {err}')",
    options: [
      "socket.gaierror (Get Address Info Error)",
      "socket.timeout",
      "FileNotFoundError",
      "ZeroDivisionError"
    ],
    correctAnswer: 0,
    explanation: "`socket.gaierror` (getaddrinfo error) is raised when address-related lookups or DNS resolutions fail.",
    officialRef: "PCES-30-01 Block 3.2 - Socket Exceptions",
    tags: ["gaierror", "socket-exceptions", "dns-errors"]
  },
  {
    id: "pces-3-030",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Socket Exceptions",
    difficulty: "Intermediate",
    question: "Which exception is raised when a socket operation exceeds its defined timeout limit?",
    codeSnippet: "import socket\ntry:\n    s = socket.socket()\n    s.settimeout(0.1)\n    s.connect(('192.0.2.1', 80))  # Non-routable test IP\nexcept socket.timeout:\n    print('Connection timed out!')",
    options: [
      "socket.timeout",
      "IndexError",
      "BrokenPipeError",
      "RecursionError"
    ],
    correctAnswer: 0,
    explanation: "`socket.timeout` is raised when a socket operation (like `connect()`, `recv()`, or `send()`) takes longer than the duration specified by `settimeout()`.",
    officialRef: "PCES-30-01 Block 3.2 - Socket Exceptions",
    tags: ["socket-timeout", "exceptions", "error-handling"]
  },
  {
    id: "pces-3-031",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Socket Receiving Data",
    difficulty: "Intermediate",
    question: "Why must data received via `s.recv(1024)` be decoded before string operations can be performed on it in Python 3?",
    codeSnippet: "import socket\ns = socket.socket()\ns.connect(('example.com', 80))\ns.send(b'GET / HTTP/1.0\\r\\nHost: example.com\\r\\n\\r\\n')\nraw_data = s.recv(1024)  # Returns bytes (e.g. b'HTTP/1.0 200 OK...')\ntext = raw_data.decode('utf-8', errors='replace')  # Converts bytes to str",
    options: [
      "`recv()` returns raw `bytes`, which must be decoded into a `str` using a character encoding like UTF-8 or ASCII",
      "`recv()` returns encrypted data that requires an AES key to view",
      "`recv()` returns numbers that must be converted to Roman numerals",
      "Python 3 cannot print text to the console"
    ],
    correctAnswer: 0,
    explanation: "In Python 3, network sockets transmit and receive raw `bytes`. To manipulate or search received data as text, you must explicitly decode it (e.g. `.decode('utf-8')`).",
    officialRef: "PCES-30-01 Block 3.2 - Bytes vs Strings",
    tags: ["recv", "decode", "bytes-handling"]
  },
  {
    id: "pces-3-032",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Sending Data over Sockets",
    difficulty: "Beginner",
    question: "In Python 3, what prefix must be added to a string literal (e.g. `b'PING\\n'`) to transmit it directly over a socket using `s.send()`?",
    codeSnippet: "import socket\ns = socket.socket()\ns.connect(('127.0.0.1', 9999))\n# Must send bytes, not str!\ns.send(b'PING\\n')",
    options: [
      "The byte literal prefix `b`",
      "The raw string prefix `r`",
      "The formatted string prefix `f`",
      "The unicode prefix `u`"
    ],
    correctAnswer: 0,
    explanation: "Socket `send()` requires `bytes`. You must use a byte literal (`b'data'`) or encode a string (`'data'.encode('utf-8')`).",
    officialRef: "PCES-30-01 Block 3.2 - Socket Transmission",
    tags: ["bytes-literal", "send", "python3-sockets"]
  },
  {
    id: "pces-3-033",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Port Scanning Types",
    difficulty: "Intermediate",
    question: "What type of scan does a basic Python script using standard `socket.connect()` perform?",
    codeSnippet: "# Standard TCP full handshake scan\n# Client completes SYN -> SYN-ACK -> ACK full handshake, then closes connection\n# Leaves a full connection record in server application logs",
    options: [
      "TCP Connect Scan (Full 3-way handshake)",
      "TCP SYN Stealth Scan",
      "UDP Inverted Scan",
      "ICMP Echo Sweep"
    ],
    correctAnswer: 0,
    explanation: "Using standard user-space OS sockets performs a TCP Connect scan: the operating system completes the entire 3-way TCP handshake (SYN, SYN-ACK, ACK), making the connection visible in server access logs.",
    officialRef: "PCES-30-01 Block 3.2 - Scan Types",
    tags: ["tcp-connect-scan", "full-handshake", "socket-scan"]
  },
  {
    id: "pces-3-034",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Stealth Scanning & Raw Sockets",
    difficulty: "Intermediate",
    question: "Why can standard unprivileged Python scripts on non-root systems NOT perform a TCP SYN 'Stealth' Scan?",
    codeSnippet: "# SYN scan requires raw socket crafting (socket.SOCK_RAW)\n# Crafting custom IP and TCP headers requires root/administrator privileges!\nimport socket\ntry:\n    raw_sock = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_TCP)\nexcept PermissionError:\n    print('Raw sockets require administrative/root privileges!')",
    options: [
      "Crafting raw TCP packets (sending SYN and dropping without ACK) requires raw sockets (`SOCK_RAW`), which operating systems restrict strictly to root/administrator users",
      "Python does not support networking without third-party plugins",
      "TCP SYN packets are blocked by the Python compiler",
      "Non-root users cannot read environment variables"
    ],
    correctAnswer: 0,
    explanation: "TCP SYN stealth scanning leaves connections half-open. Because standard OS network stacks automatically send RST/ACK to complete or tear down connections, SYN scans require raw sockets (`SOCK_RAW`), requiring root.",
    officialRef: "PCES-30-01 Block 3.2 - Raw Sockets",
    tags: ["raw-sockets", "syn-scan", "root-privileges"]
  },
  {
    id: "pces-3-035",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Using python-nmap",
    difficulty: "Intermediate",
    question: "When using the `python-nmap` library, what prerequisite must be installed on the underlying operating system?",
    codeSnippet: "# Using python-nmap in Python\nimport nmap\n\nnm = nmap.PortScanner()  # Calls the system 'nmap' binary under the hood!\nnm.scan('127.0.0.1', '22-80')",
    options: [
      "The system `nmap` command-line binary must be installed on the OS and available in PATH",
      "An Nvidia GPU running CUDA drivers",
      "A secondary physical Ethernet network card",
      "A MySQL relational database server"
    ],
    correctAnswer: 0,
    explanation: "`python-nmap` is a Python wrapper that invokes the underlying system `nmap` binary via subprocess. The system `nmap` tool must be installed on the host.",
    officialRef: "PCES-30-01 Block 3.2 - python-nmap",
    tags: ["python-nmap", "wrappers", "dependencies"]
  },
  {
    id: "pces-3-036",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "UDP Scanning Challenges",
    difficulty: "Intermediate",
    question: "Why is UDP port scanning significantly slower and less reliable than TCP port scanning?",
    codeSnippet: "# UDP is connectionless: If a UDP port is open, the service typically sends NO RESPONSE back!\n# Closed ports may return an ICMP 'Port Unreachable' error, which is heavily rate-limited by OS kernels",
    options: [
      "UDP is connectionless; open ports often send no acknowledgment, and closed ports return ICMP unreachable messages that are heavily rate-limited by operating systems",
      "UDP packets can only be sent once per hour",
      "UDP sockets consume 1GB of memory per port",
      "UDP cannot travel through commercial routers"
    ],
    correctAnswer: 0,
    explanation: "Because UDP does not use handshakes, an open UDP port often produces silence. Closed ports reply with ICMP Port Unreachable packets, but OS kernels rate-limit these ICMP replies (e.g. 1 per second in Linux), slowing down scans.",
    officialRef: "PCES-30-01 Block 3.2 - UDP Scanning",
    tags: ["udp-scanning", "rate-limiting", "icmp-unreachable"]
  },
  {
    id: "pces-3-037",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Socket Error Handling",
    difficulty: "Intermediate",
    question: "Which specific error number from the `errno` module indicates that a remote port actively rejected a TCP connection attempt (port closed)?",
    codeSnippet: "import socket\nimport errno\n\ns = socket.socket()\nres = s.connect_ex(('127.0.0.1', 9999))\nif res == errno.ECONNREFUSED:\n    print('Port 9999 is CLOSED (Connection Refused)')",
    options: [
      "errno.ECONNREFUSED",
      "errno.ETIMEDOUT",
      "errno.EACCES",
      "errno.ENOENT"
    ],
    correctAnswer: 0,
    explanation: "`errno.ECONNREFUSED` (Error Connection Refused) indicates that the target host received the SYN packet and actively responded with a RST/ACK packet, indicating the port is closed.",
    officialRef: "PCES-30-01 Block 3.2 - Error Handling",
    tags: ["econnrefused", "errno", "port-status"]
  },
  {
    id: "pces-3-038",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Parsing Port Ranges",
    difficulty: "Beginner",
    question: "In a Python CLI scanner, what code snippet correctly parses a user-supplied port range string `'20-25'` into a list of integers `[20, 21, 22, 23, 24, 25]`?",
    codeSnippet: "port_str = '20-25'\nstart, end = map(int, port_str.split('-'))\nports = list(range(start, end + 1))",
    options: [
      "`list(range(start, end + 1))` where start and end are parsed with `.split('-')`",
      "`port_str.split(',')`",
      "`int(port_str) * 25`",
      "`[port_str]`"
    ],
    correctAnswer: 0,
    explanation: "Splitting `'20-25'` on `'-'` yields `'20'` and `'25'`. Converting them to integers and using `range(start, end + 1)` produces the inclusive integer list `[20, 21, 22, 23, 24, 25]`.",
    officialRef: "PCES-30-01 Block 3.2 - Python String Parsing",
    tags: ["port-range", "range", "parsing"]
  },
  {
    id: "pces-3-039",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "Service Identification",
    difficulty: "Beginner",
    question: "Which standard library function maps a well-known port number (e.g. `80`) to its standard protocol service name (`'http'`)?",
    codeSnippet: "import socket\nservice = socket.getservbyport(80, 'tcp')\nprint(service)  # Outputs: 'http'",
    options: [
      "socket.getservbyport(80, 'tcp')",
      "socket.port_to_name(80)",
      "socket.lookup_service(80)",
      "socket.decode_port(80)"
    ],
    correctAnswer: 0,
    explanation: "`socket.getservbyport(port, protocol_name)` queries the system services database (`/etc/services`) and returns the registered service name (e.g. `80` -> `'http'`, `22` -> `'ssh'`).",
    officialRef: "PCES-30-01 Block 3.2 - Socket Utilities",
    tags: ["getservbyport", "services", "iana-ports"]
  },
  {
    id: "pces-3-040",
    track: 'pces',
    section: "Section 3",
    chapter: "3.2",
    category: "IP String Formatting",
    difficulty: "Beginner",
    question: "Given a tuple `addr = ('192.168.1.50', 443)`, how does a Python socket identify connection parameters?",
    codeSnippet: "# In AF_INET, addresses are represented as (host_ip_str, port_int) tuples\ns.connect(('192.168.1.50', 443))",
    options: [
      "A 2-element tuple consisting of a string IP address and an integer port number: `(host, port)`",
      "A single concatenated string `'192.168.1.50:443'`",
      "A dictionary `{'ip': 192, 'port': 443}`",
      "A floating-point number representing latency"
    ],
    correctAnswer: 0,
    explanation: "In Python's `socket` module for `AF_INET`, endpoint addresses are structured as a 2-tuple: `(host_str, port_int)`.",
    officialRef: "PCES-30-01 Block 3.2 - Socket Addresses",
    tags: ["address-tuples", "socket-api", "networking"]
  },
  {
    id: "pces-3-041",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "psutil Basics",
    difficulty: "Beginner",
    question: "What is the primary function of the third-party Python library `psutil` (process and system utilities)?",
    codeSnippet: "# Monitoring processes and system metrics using psutil\nimport psutil\nprint(f'CPU Percent: {psutil.cpu_percent()}%')\nprint(f'RAM Usage: {psutil.virtual_memory().percent}%')",
    options: [
      "Retrieving information on running processes and system utilization (CPU, memory, disks, network) across cross-platform OSes",
      "Encrypting database backups with AES",
      "Hosting Python web applications over HTTP",
      "Drawing 2D vector diagrams in GUI windows"
    ],
    correctAnswer: 0,
    explanation: "`psutil` provides cross-platform Python APIs for monitoring running processes, resource utilization (CPU, memory, disk, network), and system hardware telemetry.",
    officialRef: "PCES-30-01 Block 3.3 - psutil Library",
    tags: ["psutil", "system-monitoring", "process-telemetry"]
  },
  {
    id: "pces-3-042",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Process Enumeration",
    difficulty: "Intermediate",
    question: "Which method in `psutil` allows you to iterate through all active processes on the system while safely handling processes that terminate during iteration?",
    codeSnippet: "import psutil\n\nfor proc in psutil.process_iter(['pid', 'name', 'username']):\n    try:\n        print(proc.info)\n    except (psutil.NoSuchProcess, psutil.AccessDenied):\n        pass",
    options: [
      "psutil.process_iter()",
      "psutil.get_all_pids()",
      "psutil.list_processes()",
      "psutil.enumerate_tasks()"
    ],
    correctAnswer: 0,
    explanation: "`psutil.process_iter()` yields `Process` instances for all running processes, optionally caching requested attributes (like `['pid', 'name', 'username']`) efficiently.",
    officialRef: "PCES-30-01 Block 3.3 - Process Enumeration",
    tags: ["process_iter", "psutil", "process-monitoring"]
  },
  {
    id: "pces-3-043",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Handling Process Exceptions",
    difficulty: "Intermediate",
    question: "Which exception must always be handled when querying an active process using `psutil`, because short-lived processes may exit between enumeration and inspection?",
    codeSnippet: "import psutil\ntry:\n    p = psutil.Process(target_pid)\n    exe_path = p.exe()\nexcept psutil.NoSuchProcess:\n    print(f'Process {target_pid} terminated before query completed!')",
    options: [
      "psutil.NoSuchProcess",
      "psutil.InfiniteLoopError",
      "MemoryError",
      "SystemExit"
    ],
    correctAnswer: 0,
    explanation: "`psutil.NoSuchProcess` is raised when query methods are called on a PID that has already exited or no longer exists in the OS process table.",
    officialRef: "PCES-30-01 Block 3.3 - psutil Exceptions",
    tags: ["nosuchprocess", "exceptions", "robustness"]
  },
  {
    id: "pces-3-044",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Detecting Suspicious Binaries",
    difficulty: "Intermediate",
    question: "How can a SecOps Python monitoring script identify a malicious binary attempting to execute from a temporary directory?",
    codeSnippet: "import psutil\n\ndef audit_process_executables():\n    suspicious_dirs = ['/tmp', '/var/tmp', '/dev/shm', r'C:\\Users\\Public']\n    for proc in psutil.process_iter(['pid', 'name', 'exe']):\n        try:\n            exe = proc.info.get('exe')\n            if exe and any(exe.startswith(d) for d in suspicious_dirs):\n                print(f'[ALERT] Process {proc.info[\"name\"]} (PID {proc.info[\"pid\"]}) running from temp directory: {exe}')\n        except (psutil.NoSuchProcess, psutil.AccessDenied):\n            continue",
    options: [
      "By inspecting `proc.exe()` or `proc.cmdline()` to check if the binary path is located inside world-writable directories like `/tmp` or `/dev/shm`",
      "By checking if the process name is typed in capital letters",
      "By measuring the screen brightness",
      "By calculating the CPU temperature"
    ],
    correctAnswer: 0,
    explanation: "Attackers frequently download and execute payloads in world-writable temp directories (like `/tmp`, `/dev/shm`, or `C:\\Users\\Public`). Checking `proc.exe()` against these paths flags unauthorized software.",
    officialRef: "PCES-30-01 Block 3.3 - Anomaly Detection",
    tags: ["suspicious-paths", "tmp-execution", "threat-hunting"]
  },
  {
    id: "pces-3-045",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Process Network Connections",
    difficulty: "Intermediate",
    question: "Which method on a `psutil.Process` instance returns all active network sockets and open IP connections belonging to that specific process?",
    codeSnippet: "import psutil\n\ndef find_process_connections(pid):\n    p = psutil.Process(pid)\n    # Returns list of pconn tuples: fd, family, type, laddr, raddr, status\n    return p.net_connections(kind='inet')",
    options: [
      "p.net_connections()",
      "p.get_sockets()",
      "p.network_adapters()",
      "p.list_ip_routes()"
    ],
    correctAnswer: 0,
    explanation: "`p.net_connections(kind='inet')` retrieves socket connections opened by the process, including local IP/port, remote IP/port, and TCP connection state (e.g. `ESTABLISHED`, `LISTEN`).",
    officialRef: "PCES-30-01 Block 3.3 - Network Telemetry",
    tags: ["net_connections", "listening-ports", "sockets"]
  },
  {
    id: "pces-3-046",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Parent-Child Process Trees",
    difficulty: "Intermediate",
    question: "In malware analysis, why is inspecting `proc.parent()` (the parent process) critical for threat detection?",
    codeSnippet: "import psutil\n\n# Suspicious lineage: Microsoft Word (WINWORD.EXE) spawning cmd.exe or powershell.exe!\nfor p in psutil.process_iter(['name', 'ppid']):\n    try:\n        if p.name().lower() in ['cmd.exe', 'powershell.exe', 'bash']:\n            parent = p.parent()\n            if parent and parent.name().lower() in ['winword.exe', 'excel.exe', 'nginx']:\n                print(f'[CRITICAL] Web server or Office app spawned shell! PID: {p.pid}')\n    except (psutil.NoSuchProcess, psutil.AccessDenied):\n        pass",
    options: [
      "Abnormal process lineages (like a web server or document reader spawning a command shell) strongly indicate an active exploit or malicious payload",
      "Parent processes always pay server hosting bills",
      "Child processes run 10 times slower than parent processes",
      "Parent processes are deleted every 10 seconds"
    ],
    correctAnswer: 0,
    explanation: "Legitimate Office applications or web daemons rarely spawn command shells (`cmd.exe`, `powershell`, `/bin/bash`). Inspecting parent-child lineage uncovers exploit payloads immediately.",
    officialRef: "PCES-30-01 Block 3.3 - Threat Hunting",
    tags: ["process-lineage", "parent-process", "exploit-detection"]
  },
  {
    id: "pces-3-047",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Resource Exhaustion & DoS",
    difficulty: "Beginner",
    question: "How can `psutil` be used to detect a runaway process attempting a resource-exhaustion Denial of Service (DoS) attack?",
    codeSnippet: "import psutil\n\ndef detect_cpu_hogs(threshold=90.0):\n    for p in psutil.process_iter(['pid', 'name']):\n        try:\n            # Check CPU utilization percentage\n            if p.cpu_percent(interval=0.1) > threshold:\n                print(f'[WARNING] High CPU usage: PID {p.pid} ({p.name()})')\n        except (psutil.NoSuchProcess, psutil.AccessDenied):\n            pass",
    options: [
      "By sampling `p.cpu_percent()` and `p.memory_percent()` and alerting when utilization exceeds defined security thresholds",
      "By sending ping packets to the hard drive",
      "By counting the total lines of code in the program",
      "By measuring network packet latency"
    ],
    correctAnswer: 0,
    explanation: "Monitoring CPU and memory usage with `p.cpu_percent()` and `p.memory_percent()` enables security automation to identify runaway crypto-miners or DoS conditions and terminate offending PIDs.",
    officialRef: "PCES-30-01 Block 3.3 - Resource Monitoring",
    tags: ["cpu_percent", "resource-exhaustion", "crypto-mining"]
  },
  {
    id: "pces-3-048",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Process Privileges",
    difficulty: "Intermediate",
    question: "Which method on a `psutil.Process` object returns the operating system username or service account under which the process is executing?",
    codeSnippet: "import psutil\np = psutil.Process(1234)\nprint(f'Process runs as user: {p.username()}')",
    options: [
      "p.username()",
      "p.owner()",
      "p.get_account()",
      "p.whoami()"
    ],
    correctAnswer: 0,
    explanation: "`p.username()` returns the user account name executing the process, allowing security scripts to audit whether unprivileged services are improperly executing as `root` or `SYSTEM`.",
    officialRef: "PCES-30-01 Block 3.3 - Process Privileges",
    tags: ["username", "least-privilege", "psutil"]
  },
  {
    id: "pces-3-049",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Detecting Reverse Shells",
    difficulty: "Intermediate",
    question: "What signature of a reverse shell can be detected by correlating `proc.name()` and `proc.net_connections()`?",
    codeSnippet: "# Reverse shell pattern: Shell binary (/bin/bash, powershell.exe) with an ESTABLISHED outbound TCP socket\n# to an external unknown public IP address",
    options: [
      "A command shell process (`bash`, `sh`, `powershell.exe`) having an active `ESTABLISHED` outbound socket connection to an external remote IP",
      "A web browser with multiple open tabs",
      "A text editor saving a file to disk",
      "A database server listening on localhost port 3306"
    ],
    correctAnswer: 0,
    explanation: "Interactive command interpreters should not maintain direct outbound network connections to unknown foreign IPs. A shell binary holding an established external socket is a classic reverse shell indicator.",
    officialRef: "PCES-30-01 Block 3.3 - Reverse Shell Detection",
    tags: ["reverse-shell", "net_connections", "soc-detection"]
  },
  {
    id: "pces-3-050",
    track: 'pces',
    section: "Section 3",
    chapter: "3.3",
    category: "Process Termination",
    difficulty: "Intermediate",
    question: "What is the difference between `proc.terminate()` and `proc.kill()` in `psutil` when isolating a compromised process?",
    codeSnippet: "# Process termination options:\n# terminate() sends SIGTERM (polite request to cleanly exit)\n# kill() sends SIGKILL (immediate kernel termination, cannot be caught or ignored)\np = psutil.Process(malicious_pid)\np.terminate()  # SIGTERM\ntry:\n    p.wait(timeout=3)\nexcept psutil.TimeoutExpired:\n    p.kill()       # SIGKILL",
    options: [
      "`terminate()` sends SIGTERM (graceful shutdown); `kill()` sends SIGKILL (immediate forceful kernel termination)",
      "`terminate()` deletes the file on disk; `kill()` freezes the screen",
      "`terminate()` is for Linux; `kill()` is only for Windows",
      "`terminate()` requires rebooting the server"
    ],
    correctAnswer: 0,
    explanation: "`terminate()` sends SIGTERM allowing processes to save state. If a malicious process catches or ignores SIGTERM, `kill()` sends SIGKILL which immediately kills the process at the OS kernel level.",
    officialRef: "PCES-30-01 Block 3.3 - Process Containment",
    tags: ["terminate", "kill", "sigterm", "sigkill"]
  }
];
