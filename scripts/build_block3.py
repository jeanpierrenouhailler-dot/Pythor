#!/usr/bin/env python3
import json

cards = []

def add_c(id_num, chap, cat, diff, q, snippet, opts, ans, exp, ref, tags):
    cards.append({
        "id": f"pces-3-{id_num:03d}",
        "section": "Section 3",
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

# --- CHAPTER 3.1: Ethical Testing, Scoping & Python Automation (Cards 1-20) ---
add_c(1, "3.1", "Ethical Scoping", "Beginner",
      "Before running a Python security scanning script against any target, what document must be formally signed by the system owner?",
      "# Pre-engagement authorization check in Python script\nimport sys\n\ndef check_legal_authorization():\n    if not os.path.exists('signed_rules_of_engagement.pdf'):\n        print('[FATAL] Unauthorized scanning is illegal. Aborting.')\n        sys.exit(1)",
      ["A non-disclosure agreement with a software vendor", "A formal Rules of Engagement (ROE) document with explicit written authorization", "A user agreement from an Internet Service Provider", "A software purchase invoice receipt"],
      1,
      "Before initiating any security assessment, an ethical security specialist must obtain a signed Rules of Engagement (ROE) and formal written authorization defining the allowed scope and boundaries.",
      "PCES-30-01 Block 3.1 - Ethical Testing & Scoping",
      ["roe", "authorization", "ethics", "scoping"])

add_c(2, "3.1", "Reconnaissance Types", "Beginner",
      "What is the difference between Passive Reconnaissance and Active Reconnaissance?",
      "# Passive recon: Gathering OSINT without transmitting packets directly to target\n# Active recon: Transmitting packets directly to target ports (e.g. socket port scan)",
      ["Passive recon gathers publicly available intelligence (OSINT) without direct packet interaction; Active recon directly probes and interacts with target systems", "Passive recon is illegal; Active recon is always legal", "Passive recon uses Wi-Fi; Active recon uses satellite signals", "Passive recon only scans Linux systems; Active recon only scans Windows"],
      0,
      "Passive reconnaissance (OSINT, WHOIS, public records) gathers data without sending packets directly to the target. Active reconnaissance directly probes the target's IP and ports, creating network logs.",
      "PCES-30-01 Block 3.1 - Reconnaissance",
      ["passive-recon", "active-recon", "osint"])

add_c(3, "3.1", "Scoping & Boundaries", "Intermediate",
      "What is 'Scope Creep' during a security assessment, and why is it dangerous?",
      "# Scope definition in assessment script\nAUTHORIZED_SUBNET = '192.168.10.0/24'\n# If the script accidentally scans 192.168.20.0/24 (a third-party partner network),\n# the tester has committed unauthorized access under cyber crime laws!",
      ["Expanding testing activities beyond the explicitly agreed upon IP addresses or applications, risking unauthorized access to out-of-scope third-party systems", "Writing more than 500 lines of Python code in a day", "Slow internet bandwidth extending testing duration", "Upgrading the testing laptop's operating system during a test"],
      0,
      "Testing outside agreed boundaries (scope creep) is dangerous and potentially criminal. If an out-of-scope system or vendor host is probed without permission, the tester faces civil and criminal liability.",
      "PCES-30-01 Block 3.1 - Scoping & Boundaries",
      ["scoping", "scope-creep", "legal-risk"])

add_c(4, "3.1", "CLI Tooling with Python", "Beginner",
      "Which standard library module is recommended in Python for building professional command-line security tools with flags, help menus, and argument parsing?",
      "# Building a security CLI scanner\nimport argparse\n\nparser = argparse.ArgumentParser(description='SecOps Port Scanner')\nparser.add_argument('--target', required=True, help='Target IP or hostname')\nparser.add_argument('--ports', default='1-1024', help='Port range to scan')\nargs = parser.parse_args()",
      ["sys.argv raw string splitting only", "argparse", "math", "random"],
      1,
      "The `argparse` module in Python's standard library is the standard tool for parsing command-line options, arguments, and generating automatic `--help` interfaces.",
      "PCES-30-01 Block 3.1 - Python Tooling",
      ["argparse", "cli", "python-automation"])

add_c(5, "3.1", "Automation in SecOps", "Beginner",
      "What is the primary benefit of using Python scripts for routine security operations (SecOps)?",
      "# Automating repetitive log auditing across 500 servers\n# Script executes consistently in 45 seconds without human fatigue or oversight error",
      ["Python scripts can automatically crack any AES-256 encryption in seconds", "Automation provides repeatable, fast, consistent execution of audit, collection, and reporting tasks without human error", "Python eliminates the need for any firewalls or antivirus software", "Python scripts run faster than bare-metal microcode"],
      1,
      "Python automation enables security analysts to eliminate tedious manual workflows, rapidly aggregate disparate telemetry, schedule audits, and respond consistently without fatigue.",
      "PCES-30-01 Block 3.1 - SecOps Automation",
      ["automation", "secops", "efficiency"])

add_c(6, "3.1", "Input Validation in SecOps Tools", "Intermediate",
      "When accepting a target IP address from a CLI argument, which standard library module allows you to validate that the string is a valid IPv4 or IPv6 address?",
      "import ipaddress\n\ndef validate_target(target_str: str):\n    try:\n        return ipaddress.ip_address(target_str)\n    except ValueError:\n        raise ValueError(f'Invalid IP address format: {target_str}')",
      ["ipaddress", "urllib", "os", "string"],
      0,
      "The `ipaddress` module provides robust classes (`ip_address`, `ip_network`) to inspect, manipulate, and validate IPv4 and IPv6 addresses and subnets.",
      "PCES-30-01 Block 3.1 - Python Tooling",
      ["ipaddress", "validation", "networking"])

add_c(7, "3.1", "OSINT with Python", "Beginner",
      "What does 'OSINT' stand for in security operations and reconnaissance?",
      "# OSINT collection script: Querying public DNS records, WHOIS data, and certificates\n# Collects intelligence legally from public sources without intrusive scanning",
      ["Operating System Internal Network Telemetry", "Open Source Intelligence", "Optical Sensor Interface Network Transit", "Organization of Security International Trust"],
      1,
      "OSINT (Open Source Intelligence) refers to intelligence collected from publicly available, open sources (such as DNS records, certificate transparency logs, WHOIS, and public repositories).",
      "PCES-30-01 Block 3.1 - OSINT",
      ["osint", "reconnaissance", "intelligence"])

add_c(8, "3.1", "Exit Codes in Security Scripts", "Intermediate",
      "In automated CI/CD security quality gates, why should a Python security audit script return a non-zero exit code (`sys.exit(1)`) when a critical vulnerability is detected?",
      "# Security quality gate in CI pipeline\nif critical_vulns_found:\n    print('[FAIL] Security audit failed: Critical CVEs detected!')\n    sys.exit(1)  # Signals pipeline runner to HALT the build!\nsys.exit(0)",
      ["Non-zero exit codes signal to pipeline runners (like GitHub Actions) that a failure occurred, automatically blocking deployment", "It shuts down the operating system immediately", "It prints text in red color on all terminals", "It restarts the web server in debug mode"],
      0,
      "In Unix/Linux and CI/CD pipelines, an exit code of 0 denotes success, while any non-zero exit code (e.g. 1) indicates failure, halting the automated deployment pipeline.",
      "PCES-30-01 Block 3.1 - Python Automation & CI/CD",
      ["exit-codes", "sys-exit", "ci-cd-quality-gates"])

add_c(9, "3.1", "Logging Best Practices", "Intermediate",
      "Which Python module should be used instead of raw `print()` statements for structured audit trails with timestamps, severity levels, and log rotation?",
      "import logging\n\nlogging.basicConfig(\n    level=logging.INFO,\n    format='%(asctime)s [%(levelname)s] %(message)s',\n    handlers=[logging.FileHandler('secops.log'), logging.StreamHandler()]\n)\nlogging.warning('Unusual outbound traffic spike detected on port 4444')",
      ["logging", "sys.stdout", "builtins", "time"],
      0,
      "Python's `logging` module provides standardized log levels (DEBUG, INFO, WARNING, ERROR, CRITICAL), configurable formatters, timestamps, and multi-destination handlers (files, SIEM).",
      "PCES-30-01 Block 3.1 - Python Tooling",
      ["logging", "auditability", "secops"])

add_c(10, "3.1", "Safety in Security Scripts", "Beginner",
      "Why must automated vulnerability scanning scripts include rate-limiting or delay intervals (`time.sleep()`)?",
      "# Polite scanning with rate limiting\nimport time\n\nfor port in ports_to_scan:\n    scan_port(target, port)\n    time.sleep(0.05)  # Prevents crashing fragile legacy network switches or triggering DoS",
      ["To prevent overwhelming target network devices or accidentally causing a Denial of Service (DoS)", "To allow the CPU fan to cool down", "Because Python cannot make more than 1 network request per minute", "Because internet service providers charge fees per millisecond"],
      0,
      "Aggressive, rapid-fire packet generation can crash fragile production switches, exhaust server resources, or trigger defensive rate-limiting and false DoS alarms.",
      "PCES-30-01 Block 3.1 - Responsible Testing",
      ["rate-limiting", "polite-scanning", "dos-prevention"])

add_c(11, "3.1", "Environment Variables for Secrets", "Beginner",
      "Where should API keys and database credentials used in a SecOps Python script be loaded from?",
      "# Secure configuration loading\nimport os\n\napi_key = os.environ.get('SIEM_API_KEY')\nif not api_key:\n    raise ValueError('SIEM_API_KEY environment variable is not set!')",
      ["Hardcoded directly into the script as a plaintext string", "Loaded from secure environment variables or a dedicated secrets manager", "Written on the first line of the README.md file", "Stored in a public GitHub repository comment"],
      1,
      "Hardcoding secrets in source code risks accidental leakage. Credentials should always be loaded at runtime from environment variables or a secure key management system.",
      "PCES-30-01 Block 3.1 - Python Security",
      ["environment-variables", "secrets-management", "secure-coding"])

add_c(12, "3.1", "Testing Scopes", "Beginner",
      "In penetration testing terminology, what is a 'Black Box' test versus a 'White Box' test?",
      "# Black Box: Zero prior knowledge of target architecture\n# White Box: Full access to source code, architecture diagrams, and internal docs\n# Gray Box: Partial knowledge (e.g. standard user credentials)",
      ["Black box tests are conducted with zero prior internal knowledge; White box tests provide full internal architecture and source code access", "Black box tests are illegal; White box tests are legal", "Black box tests only run in the dark; White box tests run in daylight", "Black box tests only inspect hardware cables"],
      0,
      "In black-box testing, the tester simulates an external attacker with zero prior internal knowledge. In white-box testing, the tester has full access to blueprints, code, and documentation.",
      "PCES-30-01 Block 3.1 - Assessment Methodologies",
      ["black-box", "white-box", "testing-methodology"])

add_c(13, "3.1", "Virtual Environments", "Beginner",
      "Why is creating a Python virtual environment (`python -m venv venv`) recommended when installing security tools and packages?",
      "# Creating and activating an isolated virtual environment\n# python3 -m venv .venv\n# source .venv/bin/activate\n# pip install psutil cryptography",
      ["To isolate third-party library dependencies from the host system Python, preventing package version conflicts and system corruption", "To run Python scripts 10 times faster", "To encrypt the computer's hard drive automatically", "To bypass Linux user permission checks"],
      0,
      "Virtual environments isolate package dependencies per project, preventing conflicts between tools and avoiding pollution or breakage of the underlying system Python installation.",
      "PCES-30-01 Block 3.1 - Python Best Practices",
      ["venv", "virtual-environment", "dependency-isolation"])

add_c(14, "3.1", "Standard Library Strength", "Beginner",
      "Why is Python considered a premier language for security operations and rapid tool development?",
      "# Rapid prototyping in Python: Rich standard library (socket, hashlib, ssl, subprocess)\n# High-level readability, cross-platform support, massive security ecosystem",
      ["Python has a rich standard library for networking, cryptography, and OS interaction, combined with concise readable syntax for rapid scripting", "Python programs cannot be hacked by outside attackers", "Python is the only language recognized by cybersecurity courts", "Python executes faster than pure C code in all scenarios"],
      0,
      "Python's 'batteries included' standard library (socket, ssl, hashlib, subprocess, json) and clear syntax enable security specialists to write and deploy functional audit tools rapidly.",
      "PCES-30-01 Block 3.1 - Python in Security",
      ["python-strengths", "batteries-included", "secops"])

add_c(15, "3.1", "Graceful Degradation", "Intermediate",
      "What is the security value of catching `KeyboardInterrupt` in Python security scanning scripts?",
      "try:\n    run_long_network_audit()\nexcept KeyboardInterrupt:\n    print('\\n[!] Audit interrupted by user. Cleaning up sockets and saving partial results...')\n    save_partial_report()\n    sys.exit(0)",
      ["Allows the script to cleanly close open network sockets, release file handles, and save partial audit logs instead of abruptly crashing", "Prevents the user from ever stopping the script", "Reboots the remote target server", "Deletes all temporary files on the entire computer"],
      0,
      "Handling `KeyboardInterrupt` (Ctrl+C) ensures the script terminates gracefully, releasing network resources, closing sockets, and persisting collected data cleanly.",
      "PCES-30-01 Block 3.1 - Robust Scripting",
      ["keyboard-interrupt", "exception-handling", "clean-exit"])

add_c(16, "3.1", "Data Serialization", "Beginner",
      "Which standard Python module is best suited for exporting structured security findings into machine-readable format for ingestion into SIEMs?",
      "import json\n\nfinding = {\n    'host': '192.168.1.100',\n    'vuln': 'Outdated OpenSSH 7.4',\n    'severity': 'HIGH',\n    'cve': 'CVE-2018-15473'\n}\nwith open('finding.json', 'w') as f:\n    json.dump(finding, f, indent=2)",
      ["pickle", "json", "marshal", "ctypes"],
      1,
      "The `json` module produces standardized, portable, human-readable text that can be ingested by nearly all SIEM platforms, databases, and reporting engines without deserialization risks.",
      "PCES-30-01 Block 3.1 - Python Tooling",
      ["json", "data-export", "siem-ingestion"])

add_c(17, "3.1", "Command-Line Flags", "Intermediate",
      "In `argparse`, how do you create a boolean flag `--verbose` that defaults to `False` and becomes `True` when specified?",
      "import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('-v', '--verbose', action='store_true', help='Enable verbose output')",
      ["action='store_true'", "type=bool", "default=True", "action='store_false'"],
      0,
      "`action='store_true'` automatically sets the argument value to `True` when the flag is present on the command line, defaulting to `False` when omitted.",
      "PCES-30-01 Block 3.1 - Python Tooling",
      ["argparse", "store-true", "cli-flags"])

add_c(18, "3.1", "Defensive Automation", "Beginner",
      "What is 'SOAR' in enterprise cybersecurity operations?",
      "# SOAR: Security Orchestration, Automation, and Response\n# Automated playbooks (often written in Python) that execute remediation actions when alerts trigger",
      ["Security Orchestration, Automation, and Response", "System Operating Architecture Routing", "Secure Open Access Resource", "Standard Online Anti-virus Record"],
      0,
      "SOAR (Security Orchestration, Automation, and Response) platforms execute automated playbooks (frequently scripted in Python) to ingest alerts, triage events, and remediate threats automatically.",
      "PCES-30-01 Block 3.1 - SOAR & Automation",
      ["soar", "orchestration", "automation"])

add_c(19, "3.1", "Code Maintainability", "Beginner",
      "Why is modularizing Python security code into functions and classes beneficial for security teams?",
      "# Reusable SecOps module: port_scanner.py, hash_checker.py, report_builder.py\n# Allows easy unit testing, code reuse across scripts, and maintainability",
      ["It enables reuse across multiple audit scripts, simplifies peer review, and allows isolated unit testing of critical security logic", "It prevents Python from compiling code into bytecode", "It automatically hides the source code from hackers", "It removes the need to use comments or documentation"],
      0,
      "Modular design organizes code into reusable components, making security utilities testable, easier to peer-review, and simpler to integrate into larger automation pipelines.",
      "PCES-30-01 Block 3.1 - Code Structure",
      ["modularization", "clean-code", "maintainability"])

add_c(20, "3.1", "Legal Boundaries", "Beginner",
      "Under what condition is it legally permissible to run a port scanner against a company's public IP range?",
      "# Checking legal boundary: Explicit written agreement signed by authorized asset owner",
      ["Only when you have explicit, verifiable written permission from the asset owner", "Whenever the IP address is reachable via Google", "If you are a student learning cybersecurity", "If you promise not to steal any passwords"],
      0,
      "Network scanning without authorization is illegal under computer crime legislation (such as CFAA or Computer Misuse Act). Written authorization from the legitimate owner is required.",
      "PCES-30-01 Block 3.1 - Legal & Ethical Standards",
      ["authorization", "cfaa", "legality"])

# --- CHAPTER 3.2: Network Scanning & Socket Programming (Cards 21-40) ---
add_c(21, "3.2", "Socket Basics", "Beginner",
      "In Python's `socket` module, which address family constant specifies IPv4 networking?",
      "import socket\n# Creating an IPv4 TCP socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)",
      ["socket.AF_INET", "socket.AF_INET6", "socket.AF_UNIX", "socket.AF_PACKET"],
      0,
      "`socket.AF_INET` designates the IPv4 address family. `socket.AF_INET6` is for IPv6, and `socket.AF_UNIX` is for Unix domain sockets.",
      "PCES-30-01 Block 3.2 - Socket Programming",
      ["socket", "af_inet", "ipv4"])

add_c(22, "3.2", "Socket Basics", "Beginner",
      "Which socket type constant specifies a connection-oriented TCP socket in Python?",
      "import socket\n# socket.SOCK_STREAM = TCP | socket.SOCK_DGRAM = UDP\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)",
      ["socket.SOCK_STREAM", "socket.SOCK_DGRAM", "socket.SOCK_RAW", "socket.SOCK_RDM"],
      0,
      "`socket.SOCK_STREAM` specifies a reliable, stream-oriented TCP socket. `socket.SOCK_DGRAM` specifies a datagram-oriented UDP socket.",
      "PCES-30-01 Block 3.2 - Socket Programming",
      ["socket", "sock_stream", "tcp"])

add_c(23, "3.2", "Port Scanning", "Intermediate",
      "What is the difference between `socket.connect()` and `socket.connect_ex()` in Python port scanning scripts?",
      "import socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n# connect() raises an exception if connection fails\n# connect_ex() returns an integer error code (0 on success, errno on failure)\nresult = s.connect_ex(('192.168.1.1', 80))\nif result == 0:\n    print('Port 80 is OPEN!')",
      ["`connect()` raises an exception on error; `connect_ex()` returns an error indicator (0 for success) instead of raising an exception", "`connect_ex()` connects to IPv6 exclusively", "`connect()` uses UDP; `connect_ex()` uses TCP", "`connect_ex()` requires root administrative privileges"],
      0,
      "`connect_ex()` returns `0` if the connection succeeded (port is open) or a C error code (like `errno.ECONNREFUSED`) on failure, making it ideal for clean port scanning without try/except blocks.",
      "PCES-30-01 Block 3.2 - Socket Methods",
      ["connect_ex", "port-scanning", "error-codes"])

add_c(24, "3.2", "Socket Timeouts", "Intermediate",
      "Why is setting `s.settimeout(1.0)` critical when developing a network port scanner in Python?",
      "import socket\ndef check_port(host, port):\n    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\n    s.settimeout(0.5)  # Set timeout to 500ms\n    result = s.connect_ex((host, port))\n    s.close()\n    return result == 0",
      ["Without a timeout, the socket will hang and block indefinitely waiting for non-responsive or filtered ports", "It speeds up the CPU clock speed", "It limits the maximum file size that can be downloaded", "It prevents the Python interpreter from consuming more than 1MB of RAM"],
      0,
      "If a remote port is filtered by a firewall, connection packets are silently dropped. Without an explicit timeout, `connect()` or `connect_ex()` can hang for minutes, stalling the entire scan.",
      "PCES-30-01 Block 3.2 - Socket Timeouts",
      ["settimeout", "blocking", "port-scanner"])

add_c(25, "3.2", "Banner Grabbing", "Intermediate",
      "What is 'Banner Grabbing' using Python sockets, and what is its purpose during reconnaissance?",
      "import socket\ndef grab_banner(ip, port):\n    s = socket.socket()\n    s.settimeout(2.0)\n    s.connect((ip, port))\n    s.send(b'HEAD / HTTP/1.0\\r\\n\\r\\n')  # Probe payload\n    banner = s.recv(1024)\n    s.close()\n    return banner.decode(errors='ignore')",
      ["Connecting to an open port and reading the initial text response sent by the service to identify software versions (e.g. Apache/2.4.41, OpenSSH_8.2)", "Stealing physical graphical advertising banners from website headers", "Downloading website logos using web scrapers", "Taking a screenshot of the remote desktop screen"],
      0,
      "Banner grabbing connects to a service port and reads the service's greeting string or response headers to identify the application name and exact version number for vulnerability mapping.",
      "PCES-30-01 Block 3.2 - Banner Grabbing",
      ["banner-grabbing", "service-enumeration", "reconnaissance"])

add_c(26, "3.2", "Socket Resource Cleanup", "Beginner",
      "Why must `s.close()` (or a `with` context manager) be used with Python sockets?",
      "# Proper socket context manager\nwith socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:\n    s.settimeout(1.0)\n    s.connect(('192.168.1.1', 22))\n# Socket file descriptor is automatically closed upon exit",
      ["To release the underlying operating system file descriptor and network socket resources, preventing socket leaks", "To permanently delete the destination server", "To disconnect the host computer from the Wi-Fi router", "To clear the Python terminal screen"],
      0,
      "Sockets consume operating system file descriptors and kernel buffers. Failing to close them causes resource leaks that eventually trigger 'Too many open files' errors.",
      "PCES-30-01 Block 3.2 - Resource Management",
      ["socket-close", "context-manager", "file-descriptors"])

add_c(27, "3.2", "Concurrency in Scanning", "Intermediate",
      "Which Python standard library module allows you to easily execute port checks across multiple threads concurrently for high-speed scanning?",
      "from concurrent.futures import ThreadPoolExecutor\n\ndef scan_host_ports(target_ip, ports):\n    with ThreadPoolExecutor(max_workers=50) as executor:\n        results = executor.map(lambda p: check_port(target_ip, p), ports)\n    return list(results)",
      ["concurrent.futures (ThreadPoolExecutor)", "ctypes", "turtle", "pickle"],
      0,
      "`concurrent.futures.ThreadPoolExecutor` provides an interface to execute I/O-bound tasks (like socket network requests) concurrently across multiple worker threads.",
      "PCES-30-01 Block 3.2 - Multi-threading",
      ["threadpoolexecutor", "concurrent-futures", "speed"])

add_c(28, "3.2", "DNS Resolution in Sockets", "Beginner",
      "Which function in Python's `socket` module resolves a human-readable hostname (e.g. `'example.com'`) into its corresponding IPv4 address?",
      "import socket\nip_address = socket.gethostbyname('example.com')\nprint(f'Resolved IP: {ip_address}')",
      ["socket.gethostbyname()", "socket.resolve_ip()", "socket.lookup_dns()", "socket.translate_host()"],
      0,
      "`socket.gethostbyname(hostname)` performs a DNS lookup and returns the IPv4 address string corresponding to the specified domain name.",
      "PCES-30-01 Block 3.2 - DNS in Sockets",
      ["gethostbyname", "dns-lookup", "socket"])

add_c(29, "3.2", "Socket Exceptions", "Intermediate",
      "Which exception does Python's `socket` module raise if a DNS resolution failure occurs during `socket.gethostbyname()`?",
      "import socket\ntry:\n    ip = socket.gethostbyname('nonexistent-domain-xyz12345.org')\nexcept socket.gaierror as err:\n    print(f'DNS resolution failed: {err}')",
      ["socket.gaierror (Get Address Info Error)", "socket.timeout", "FileNotFoundError", "ZeroDivisionError"],
      0,
      "`socket.gaierror` (getaddrinfo error) is raised when address-related lookups or DNS resolutions fail.",
      "PCES-30-01 Block 3.2 - Socket Exceptions",
      ["gaierror", "socket-exceptions", "dns-errors"])

add_c(30, "3.2", "Socket Exceptions", "Intermediate",
      "Which exception is raised when a socket operation exceeds its defined timeout limit?",
      "import socket\ntry:\n    s = socket.socket()\n    s.settimeout(0.1)\n    s.connect(('192.0.2.1', 80))  # Non-routable test IP\nexcept socket.timeout:\n    print('Connection timed out!')",
      ["socket.timeout", "IndexError", "BrokenPipeError", "RecursionError"],
      0,
      "`socket.timeout` is raised when a socket operation (like `connect()`, `recv()`, or `send()`) takes longer than the duration specified by `settimeout()`.",
      "PCES-30-01 Block 3.2 - Socket Exceptions",
      ["socket-timeout", "exceptions", "error-handling"])

add_c(31, "3.2", "Socket Receiving Data", "Intermediate",
      "Why must data received via `s.recv(1024)` be decoded before string operations can be performed on it in Python 3?",
      "import socket\ns = socket.socket()\ns.connect(('example.com', 80))\ns.send(b'GET / HTTP/1.0\\r\\nHost: example.com\\r\\n\\r\\n')\nraw_data = s.recv(1024)  # Returns bytes (e.g. b'HTTP/1.0 200 OK...')\ntext = raw_data.decode('utf-8', errors='replace')  # Converts bytes to str",
      ["`recv()` returns raw `bytes`, which must be decoded into a `str` using a character encoding like UTF-8 or ASCII", "`recv()` returns encrypted data that requires an AES key to view", "`recv()` returns numbers that must be converted to Roman numerals", "Python 3 cannot print text to the console"],
      0,
      "In Python 3, network sockets transmit and receive raw `bytes`. To manipulate or search received data as text, you must explicitly decode it (e.g. `.decode('utf-8')`).",
      "PCES-30-01 Block 3.2 - Bytes vs Strings",
      ["recv", "decode", "bytes-handling"])

add_c(32, "3.2", "Sending Data over Sockets", "Beginner",
      "In Python 3, what prefix must be added to a string literal (e.g. `b'PING\\n'`) to transmit it directly over a socket using `s.send()`?",
      "import socket\ns = socket.socket()\ns.connect(('127.0.0.1', 9999))\n# Must send bytes, not str!\ns.send(b'PING\\n')",
      ["The byte literal prefix `b`", "The raw string prefix `r`", "The formatted string prefix `f`", "The unicode prefix `u`"],
      0,
      "Socket `send()` requires `bytes`. You must use a byte literal (`b'data'`) or encode a string (`'data'.encode('utf-8')`).",
      "PCES-30-01 Block 3.2 - Socket Transmission",
      ["bytes-literal", "send", "python3-sockets"])

add_c(33, "3.2", "Port Scanning Types", "Intermediate",
      "What type of scan does a basic Python script using standard `socket.connect()` perform?",
      "# Standard TCP full handshake scan\n# Client completes SYN -> SYN-ACK -> ACK full handshake, then closes connection\n# Leaves a full connection record in server application logs",
      ["TCP Connect Scan (Full 3-way handshake)", "TCP SYN Stealth Scan", "UDP Inverted Scan", "ICMP Echo Sweep"],
      0,
      "Using standard user-space OS sockets performs a TCP Connect scan: the operating system completes the entire 3-way TCP handshake (SYN, SYN-ACK, ACK), making the connection visible in server access logs.",
      "PCES-30-01 Block 3.2 - Scan Types",
      ["tcp-connect-scan", "full-handshake", "socket-scan"])

add_c(34, "3.2", "Stealth Scanning & Raw Sockets", "Intermediate",
      "Why can standard unprivileged Python scripts on non-root systems NOT perform a TCP SYN 'Stealth' Scan?",
      "# SYN scan requires raw socket crafting (socket.SOCK_RAW)\n# Crafting custom IP and TCP headers requires root/administrator privileges!\nimport socket\ntry:\n    raw_sock = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_TCP)\nexcept PermissionError:\n    print('Raw sockets require administrative/root privileges!')",
      ["Crafting raw TCP packets (sending SYN and dropping without ACK) requires raw sockets (`SOCK_RAW`), which operating systems restrict strictly to root/administrator users", "Python does not support networking without third-party plugins", "TCP SYN packets are blocked by the Python compiler", "Non-root users cannot read environment variables"],
      0,
      "TCP SYN stealth scanning leaves connections half-open. Because standard OS network stacks automatically send RST/ACK to complete or tear down connections, SYN scans require raw sockets (`SOCK_RAW`), requiring root.",
      "PCES-30-01 Block 3.2 - Raw Sockets",
      ["raw-sockets", "syn-scan", "root-privileges"])

add_c(35, "3.2", "Using python-nmap", "Intermediate",
      "When using the `python-nmap` library, what prerequisite must be installed on the underlying operating system?",
      "# Using python-nmap in Python\nimport nmap\n\nnm = nmap.PortScanner()  # Calls the system 'nmap' binary under the hood!\nnm.scan('127.0.0.1', '22-80')",
      ["The system `nmap` command-line binary must be installed on the OS and available in PATH", "An Nvidia GPU running CUDA drivers", "A secondary physical Ethernet network card", "A MySQL relational database server"],
      0,
      "`python-nmap` is a Python wrapper that invokes the underlying system `nmap` binary via subprocess. The system `nmap` tool must be installed on the host.",
      "PCES-30-01 Block 3.2 - python-nmap",
      ["python-nmap", "wrappers", "dependencies"])

add_c(36, "3.2", "UDP Scanning Challenges", "Intermediate",
      "Why is UDP port scanning significantly slower and less reliable than TCP port scanning?",
      "# UDP is connectionless: If a UDP port is open, the service typically sends NO RESPONSE back!\n# Closed ports may return an ICMP 'Port Unreachable' error, which is heavily rate-limited by OS kernels",
      ["UDP is connectionless; open ports often send no acknowledgment, and closed ports return ICMP unreachable messages that are heavily rate-limited by operating systems", "UDP packets can only be sent once per hour", "UDP sockets consume 1GB of memory per port", "UDP cannot travel through commercial routers"],
      0,
      "Because UDP does not use handshakes, an open UDP port often produces silence. Closed ports reply with ICMP Port Unreachable packets, but OS kernels rate-limit these ICMP replies (e.g. 1 per second in Linux), slowing down scans.",
      "PCES-30-01 Block 3.2 - UDP Scanning",
      ["udp-scanning", "rate-limiting", "icmp-unreachable"])

add_c(37, "3.2", "Socket Error Handling", "Intermediate",
      "Which specific error number from the `errno` module indicates that a remote port actively rejected a TCP connection attempt (port closed)?",
      "import socket\nimport errno\n\ns = socket.socket()\nres = s.connect_ex(('127.0.0.1', 9999))\nif res == errno.ECONNREFUSED:\n    print('Port 9999 is CLOSED (Connection Refused)')",
      ["errno.ECONNREFUSED", "errno.ETIMEDOUT", "errno.EACCES", "errno.ENOENT"],
      0,
      "`errno.ECONNREFUSED` (Error Connection Refused) indicates that the target host received the SYN packet and actively responded with a RST/ACK packet, indicating the port is closed.",
      "PCES-30-01 Block 3.2 - Error Handling",
      ["econnrefused", "errno", "port-status"])

add_c(38, "3.2", "Parsing Port Ranges", "Beginner",
      "In a Python CLI scanner, what code snippet correctly parses a user-supplied port range string `'20-25'` into a list of integers `[20, 21, 22, 23, 24, 25]`?",
      "port_str = '20-25'\nstart, end = map(int, port_str.split('-'))\nports = list(range(start, end + 1))",
      ["`list(range(start, end + 1))` where start and end are parsed with `.split('-')`", "`port_str.split(',')`", "`int(port_str) * 25`", "`[port_str]`"],
      0,
      "Splitting `'20-25'` on `'-'` yields `'20'` and `'25'`. Converting them to integers and using `range(start, end + 1)` produces the inclusive integer list `[20, 21, 22, 23, 24, 25]`.",
      "PCES-30-01 Block 3.2 - Python String Parsing",
      ["port-range", "range", "parsing"])

add_c(39, "3.2", "Service Identification", "Beginner",
      "Which standard library function maps a well-known port number (e.g. `80`) to its standard protocol service name (`'http'`)?",
      "import socket\nservice = socket.getservbyport(80, 'tcp')\nprint(service)  # Outputs: 'http'",
      ["socket.getservbyport(80, 'tcp')", "socket.port_to_name(80)", "socket.lookup_service(80)", "socket.decode_port(80)"],
      0,
      "`socket.getservbyport(port, protocol_name)` queries the system services database (`/etc/services`) and returns the registered service name (e.g. `80` -> `'http'`, `22` -> `'ssh'`).",
      "PCES-30-01 Block 3.2 - Socket Utilities",
      ["getservbyport", "services", "iana-ports"])

add_c(40, "3.2", "IP String Formatting", "Beginner",
      "Given a tuple `addr = ('192.168.1.50', 443)`, how does a Python socket identify connection parameters?",
      "# In AF_INET, addresses are represented as (host_ip_str, port_int) tuples\ns.connect(('192.168.1.50', 443))",
      ["A 2-element tuple consisting of a string IP address and an integer port number: `(host, port)`", "A single concatenated string `'192.168.1.50:443'`", "A dictionary `{'ip': 192, 'port': 443}`", "A floating-point number representing latency"],
      0,
      "In Python's `socket` module for `AF_INET`, endpoint addresses are structured as a 2-tuple: `(host_str, port_int)`.",
      "PCES-30-01 Block 3.2 - Socket Addresses",
      ["address-tuples", "socket-api", "networking"])

# --- CHAPTER 3.3: System & Process Monitoring with psutil (Cards 41-60) ---
add_c(41, "3.3", "psutil Basics", "Beginner",
      "What is the primary function of the third-party Python library `psutil` (process and system utilities)?",
      "# Monitoring processes and system metrics using psutil\nimport psutil\nprint(f'CPU Percent: {psutil.cpu_percent()}%')\nprint(f'RAM Usage: {psutil.virtual_memory().percent}%')",
      ["Retrieving information on running processes and system utilization (CPU, memory, disks, network) across cross-platform OSes", "Encrypting database backups with AES", "Hosting Python web applications over HTTP", "Drawing 2D vector diagrams in GUI windows"],
      0,
      "`psutil` provides cross-platform Python APIs for monitoring running processes, resource utilization (CPU, memory, disk, network), and system hardware telemetry.",
      "PCES-30-01 Block 3.3 - psutil Library",
      ["psutil", "system-monitoring", "process-telemetry"])

add_c(42, "3.3", "Process Enumeration", "Intermediate",
      "Which method in `psutil` allows you to iterate through all active processes on the system while safely handling processes that terminate during iteration?",
      "import psutil\n\nfor proc in psutil.process_iter(['pid', 'name', 'username']):\n    try:\n        print(proc.info)\n    except (psutil.NoSuchProcess, psutil.AccessDenied):\n        pass",
      ["psutil.process_iter()", "psutil.get_all_pids()", "psutil.list_processes()", "psutil.enumerate_tasks()"],
      0,
      "`psutil.process_iter()` yields `Process` instances for all running processes, optionally caching requested attributes (like `['pid', 'name', 'username']`) efficiently.",
      "PCES-30-01 Block 3.3 - Process Enumeration",
      ["process_iter", "psutil", "process-monitoring"])

add_c(43, "3.3", "Handling Process Exceptions", "Intermediate",
      "Which exception must always be handled when querying an active process using `psutil`, because short-lived processes may exit between enumeration and inspection?",
      "import psutil\ntry:\n    p = psutil.Process(target_pid)\n    exe_path = p.exe()\nexcept psutil.NoSuchProcess:\n    print(f'Process {target_pid} terminated before query completed!')",
      ["psutil.NoSuchProcess", "psutil.InfiniteLoopError", "MemoryError", "SystemExit"],
      0,
      "`psutil.NoSuchProcess` is raised when query methods are called on a PID that has already exited or no longer exists in the OS process table.",
      "PCES-30-01 Block 3.3 - psutil Exceptions",
      ["nosuchprocess", "exceptions", "robustness"])

add_c(44, "3.3", "Detecting Suspicious Binaries", "Intermediate",
      "How can a SecOps Python monitoring script identify a malicious binary attempting to execute from a temporary directory?",
      "import psutil\n\ndef audit_process_executables():\n    suspicious_dirs = ['/tmp', '/var/tmp', '/dev/shm', r'C:\\Users\\Public']\n    for proc in psutil.process_iter(['pid', 'name', 'exe']):\n        try:\n            exe = proc.info.get('exe')\n            if exe and any(exe.startswith(d) for d in suspicious_dirs):\n                print(f'[ALERT] Process {proc.info[\"name\"]} (PID {proc.info[\"pid\"]}) running from temp directory: {exe}')\n        except (psutil.NoSuchProcess, psutil.AccessDenied):\n            continue",
      ["By inspecting `proc.exe()` or `proc.cmdline()` to check if the binary path is located inside world-writable directories like `/tmp` or `/dev/shm`", "By checking if the process name is typed in capital letters", "By measuring the screen brightness", "By calculating the CPU temperature"],
      0,
      "Attackers frequently download and execute payloads in world-writable temp directories (like `/tmp`, `/dev/shm`, or `C:\\Users\\Public`). Checking `proc.exe()` against these paths flags unauthorized software.",
      "PCES-30-01 Block 3.3 - Anomaly Detection",
      ["suspicious-paths", "tmp-execution", "threat-hunting"])

add_c(45, "3.3", "Process Network Connections", "Intermediate",
      "Which method on a `psutil.Process` instance returns all active network sockets and open IP connections belonging to that specific process?",
      "import psutil\n\ndef find_process_connections(pid):\n    p = psutil.Process(pid)\n    # Returns list of pconn tuples: fd, family, type, laddr, raddr, status\n    return p.net_connections(kind='inet')",
      ["p.net_connections()", "p.get_sockets()", "p.network_adapters()", "p.list_ip_routes()"],
      0,
      "`p.net_connections(kind='inet')` retrieves socket connections opened by the process, including local IP/port, remote IP/port, and TCP connection state (e.g. `ESTABLISHED`, `LISTEN`).",
      "PCES-30-01 Block 3.3 - Network Telemetry",
      ["net_connections", "listening-ports", "sockets"])

add_c(46, "3.3", "Parent-Child Process Trees", "Intermediate",
      "In malware analysis, why is inspecting `proc.parent()` (the parent process) critical for threat detection?",
      "import psutil\n\n# Suspicious lineage: Microsoft Word (WINWORD.EXE) spawning cmd.exe or powershell.exe!\nfor p in psutil.process_iter(['name', 'ppid']):\n    try:\n        if p.name().lower() in ['cmd.exe', 'powershell.exe', 'bash']:\n            parent = p.parent()\n            if parent and parent.name().lower() in ['winword.exe', 'excel.exe', 'nginx']:\n                print(f'[CRITICAL] Web server or Office app spawned shell! PID: {p.pid}')\n    except (psutil.NoSuchProcess, psutil.AccessDenied):\n        pass",
      ["Abnormal process lineages (like a web server or document reader spawning a command shell) strongly indicate an active exploit or malicious payload", "Parent processes always pay server hosting bills", "Child processes run 10 times slower than parent processes", "Parent processes are deleted every 10 seconds"],
      0,
      "Legitimate Office applications or web daemons rarely spawn command shells (`cmd.exe`, `powershell`, `/bin/bash`). Inspecting parent-child lineage uncovers exploit payloads immediately.",
      "PCES-30-01 Block 3.3 - Threat Hunting",
      ["process-lineage", "parent-process", "exploit-detection"])

add_c(47, "3.3", "Resource Exhaustion & DoS", "Beginner",
      "How can `psutil` be used to detect a runaway process attempting a resource-exhaustion Denial of Service (DoS) attack?",
      "import psutil\n\ndef detect_cpu_hogs(threshold=90.0):\n    for p in psutil.process_iter(['pid', 'name']):\n        try:\n            # Check CPU utilization percentage\n            if p.cpu_percent(interval=0.1) > threshold:\n                print(f'[WARNING] High CPU usage: PID {p.pid} ({p.name()})')\n        except (psutil.NoSuchProcess, psutil.AccessDenied):\n            pass",
      ["By sampling `p.cpu_percent()` and `p.memory_percent()` and alerting when utilization exceeds defined security thresholds", "By sending ping packets to the hard drive", "By counting the total lines of code in the program", "By measuring network packet latency"],
      0,
      "Monitoring CPU and memory usage with `p.cpu_percent()` and `p.memory_percent()` enables security automation to identify runaway crypto-miners or DoS conditions and terminate offending PIDs.",
      "PCES-30-01 Block 3.3 - Resource Monitoring",
      ["cpu_percent", "resource-exhaustion", "crypto-mining"])

add_c(48, "3.3", "Process Privileges", "Intermediate",
      "Which method on a `psutil.Process` object returns the operating system username or service account under which the process is executing?",
      "import psutil\np = psutil.Process(1234)\nprint(f'Process runs as user: {p.username()}')",
      ["p.username()", "p.owner()", "p.get_account()", "p.whoami()"],
      0,
      "`p.username()` returns the user account name executing the process, allowing security scripts to audit whether unprivileged services are improperly executing as `root` or `SYSTEM`.",
      "PCES-30-01 Block 3.3 - Process Privileges",
      ["username", "least-privilege", "psutil"])

add_c(49, "3.3", "Detecting Reverse Shells", "Intermediate",
      "What signature of a reverse shell can be detected by correlating `proc.name()` and `proc.net_connections()`?",
      "# Reverse shell pattern: Shell binary (/bin/bash, powershell.exe) with an ESTABLISHED outbound TCP socket\n# to an external unknown public IP address",
      ["A command shell process (`bash`, `sh`, `powershell.exe`) having an active `ESTABLISHED` outbound socket connection to an external remote IP", "A web browser with multiple open tabs", "A text editor saving a file to disk", "A database server listening on localhost port 3306"],
      0,
      "Interactive command interpreters should not maintain direct outbound network connections to unknown foreign IPs. A shell binary holding an established external socket is a classic reverse shell indicator.",
      "PCES-30-01 Block 3.3 - Reverse Shell Detection",
      ["reverse-shell", "net_connections", "soc-detection"])

add_c(50, "3.3", "Process Termination", "Intermediate",
      "What is the difference between `proc.terminate()` and `proc.kill()` in `psutil` when isolating a compromised process?",
      "# Process termination options:\n# terminate() sends SIGTERM (polite request to cleanly exit)\n# kill() sends SIGKILL (immediate kernel termination, cannot be caught or ignored)\np = psutil.Process(malicious_pid)\np.terminate()  # SIGTERM\ntry:\n    p.wait(timeout=3)\nexcept psutil.TimeoutExpired:\n    p.kill()       # SIGKILL",
      ["`terminate()` sends SIGTERM (graceful shutdown); `kill()` sends SIGKILL (immediate forceful kernel termination)", "`terminate()` deletes the file on disk; `kill()` freezes the screen", "`terminate()` is for Linux; `kill()` is only for Windows", "`terminate()` requires rebooting the server"],
      0,
      "`terminate()` sends SIGTERM allowing processes to save state. If a malicious process catches or ignores SIGTERM, `kill()` sends SIGKILL which immediately kills the process at the OS kernel level.",
      "PCES-30-01 Block 3.3 - Process Containment",
      ["terminate", "kill", "sigterm", "sigkill"])

# --- CHAPTER 3.3 (cont): Cards 51-60 ---
add_c(51, "3.3", "Process Creation Time", "Intermediate",
      "Which method in `psutil.Process` returns the epoch timestamp when the process was started?",
      "import psutil, time\np = psutil.Process(450)\nstart_time = p.create_time()\nage_seconds = time.time() - start_time\nprint(f'Process has been running for {age_seconds:.1f} seconds')",
      ["p.create_time()", "p.start_timestamp()", "p.boot_time()", "p.elapsed_time()"],
      0,
      "`p.create_time()` returns the process creation time as floating-point seconds since the Unix epoch, allowing analysts to correlate process start times with incident timelines.",
      "PCES-30-01 Block 3.3 - Forensic Timelines",
      ["create_time", "forensics", "incident-timeline"])

add_c(52, "3.3", "Disk Usage Monitoring", "Beginner",
      "How does `psutil.disk_usage('/')` help prevent availability attacks targeting disk space exhaustion?",
      "import psutil\nusage = psutil.disk_usage('/')\nif usage.percent > 95.0:\n    print(f'[CRITICAL] Root partition {usage.percent}% full! Alerting SysAdmin.')",
      ["It returns total, used, and free disk space, enabling proactive alerting before disk exhaustion crashes logging or database daemons", "It defragments files in real time", "It formats unallocated disk sectors", "It compresses text files on the fly"],
      0,
      "Log-flooding attacks can exhaust disk partitions, halting databases and system services. `psutil.disk_usage()` allows automated monitoring of partition capacity to trigger alerts before failures.",
      "PCES-30-01 Block 3.3 - Disk Monitoring",
      ["disk_usage", "availability", "log-exhaustion"])

add_c(53, "3.3", "Memory Telemetry", "Intermediate",
      "What is the difference between RSS (Resident Set Size) and VMS (Virtual Memory Size) when evaluating process memory in `p.memory_info()`?",
      "import psutil\np = psutil.Process(120)\nmem = p.memory_info()\nprint(f'Physical RAM in use: {mem.rss / (1024**2):.1f} MB')",
      ["RSS is the actual non-swapped physical RAM currently occupied by the process; VMS is the total virtual memory space allocated", "RSS is for network buffers; VMS is for video memory", "RSS is measured in megabytes; VMS is measured in gigahertz", "There is no difference"],
      0,
      "Resident Set Size (RSS) is the actual physical memory (RAM) allocated and held by the process. Virtual Memory Size (VMS) represents the total virtual memory space the process can address.",
      "PCES-30-01 Block 3.3 - Memory Telemetry",
      ["memory_info", "rss", "vms", "memory-monitoring"])

add_c(54, "3.3", "Detecting Masquerading", "Intermediate",
      "How can an attacker use 'Process Masquerading' and how can Python detect it?",
      "# Masquerading: Malicious executable named 'svchost.exe' or 'lsass.exe' running from C:\\Users\\Public\\svchost.exe\n# Real Windows svchost.exe must run from C:\\Windows\\System32\\svchost.exe\nfor p in psutil.process_iter(['name', 'exe']):\n    if p.info['name'] == 'svchost.exe' and p.info['exe'] != r'C:\\Windows\\System32\\svchost.exe':\n        print('[ALERT] Fake svchost process detected!')",
      ["An attacker names malware after a legitimate system binary (e.g. `svchost.exe`), but runs it from an illegitimate directory path detectable by comparing `proc.name()` and `proc.exe()`", "An attacker changes their user profile picture in Windows", "An attacker changes their keyboard layout to Dvorak", "An attacker runs a script with lowercase file extensions"],
      0,
      "In process masquerading (MITRE ATT&CK T1036), malware adopts legitimate system names. SecOps scripts detect this by verifying whether the binary's actual path matches the expected system directory.",
      "PCES-30-01 Block 3.3 - Masquerading Detection",
      ["masquerading", "threat-hunting", "mitre-attack"])

add_c(55, "3.3", "Listening Ports Audit", "Intermediate",
      "Which function in `psutil` returns all active network connections system-wide, including listening server ports?",
      "import psutil\n# Retrieve all listening TCP sockets across all processes\nlistening_ports = [c.laddr.port for c in psutil.net_connections(kind='tcp') if c.status == 'LISTEN']\nprint(f'System listening ports: {listening_ports}')",
      ["psutil.net_connections()", "psutil.get_all_ports()", "psutil.scan_network()", "psutil.route_table()"],
      0,
      "`psutil.net_connections()` returns a list of system-wide socket connections, enabling instant discovery of listening servers (`c.status == 'LISTEN'`) without running external port scanners.",
      "PCES-30-01 Block 3.3 - Local Port Auditing",
      ["net_connections", "listening-ports", "local-audit"])

add_c(56, "3.3", "Process Environment Inspection", "Intermediate",
      "Which method on `psutil.Process` allows security auditors to inspect the environment variables passed to a running process?",
      "import psutil\np = psutil.Process(204)\ntry:\n    env = p.environ()\n    if 'AWS_SECRET_ACCESS_KEY' in env:\n        print('[WARNING] AWS Secret found in process environment!')\nexcept psutil.AccessDenied:\n    pass",
      ["p.environ()", "p.get_env_vars()", "p.read_profile()", "p.os_environment()"],
      0,
      "`p.environ()` returns a dictionary of the process's environment variables, allowing analysts to audit running daemons for exposed credentials or malicious injection variables (like `LD_PRELOAD`).",
      "PCES-30-01 Block 3.3 - Environment Variables",
      ["environ", "ld_preload", "credential-audit"])

add_c(57, "3.3", "Command-Line Arguments", "Intermediate",
      "Why is inspecting `proc.cmdline()` invaluable during forensic incident triage?",
      "import psutil\n# Searching for encoded PowerShell execution\nfor p in psutil.process_iter(['name', 'cmdline']):\n    cmd = ' '.join(p.info.get('cmdline') or [])\n    if '-EncodedCommand' in cmd or 'downloadstring' in cmd.lower():\n        print(f'[ALERT] Malicious PowerShell script execution: {cmd}')",
      ["It reveals the exact command-line arguments and flags used to launch the binary, uncovering obfuscated download commands or suspicious parameters", "It reveals the user's desktop background color", "It displays the monitor's refresh rate", "It recalculates the process file size on disk"],
      0,
      "`proc.cmdline()` provides the full command line with all flags. Threat actors frequently pass encoded commands (e.g. `powershell.exe -enc ...`), which are immediately visible in `cmdline()`.",
      "PCES-30-01 Block 3.3 - Threat Hunting",
      ["cmdline", "encoded-commands", "powershell-detection"])

add_c(58, "3.3", "AccessDenied Handling", "Beginner",
      "When running a `psutil` audit script as a standard unprivileged user, why is `psutil.AccessDenied` frequently encountered?",
      "import psutil\nfor p in psutil.process_iter(['pid', 'name']):\n    try:\n        print(p.exe())\n    except psutil.AccessDenied:\n        # Operating system prevents unprivileged users from reading root process paths\n        pass",
      ["Operating systems enforce kernel security boundaries that prevent unprivileged users from inspecting process details of other users or root/SYSTEM daemons", "The user's computer monitor is locked", "The Python script has syntax errors", "The network cable has been unplugged"],
      0,
      "Standard OS access controls prevent normal user accounts from inspecting the memory, executable paths, or environments of processes owned by other users or root/SYSTEM, triggering `AccessDenied`.",
      "PCES-30-01 Block 3.3 - Permissions",
      ["accessdenied", "privilege-boundaries", "exceptions"])

add_c(59, "3.3", "Tracking Network I/O", "Beginner",
      "How does `psutil.net_io_counters()` assist in detecting data exfiltration attacks?",
      "import psutil, time\nio_before = psutil.net_io_counters().bytes_sent\ntime.sleep(60)\nio_after = psutil.net_io_counters().bytes_sent\nmb_sent = (io_after - io_before) / (1024**2)\nif mb_sent > 5000:\n    print(f'[ALERT] Massive data transmission detected: {mb_sent:.1f} MB sent in 1 min!')",
      ["By tracking total network bytes sent over time, flagging abnormal outbound data transmission spikes indicative of bulk data exfiltration", "By measuring Wi-Fi radio frequencies", "By displaying network printer ink levels", "By blocking all incoming telephone calls"],
      0,
      "`psutil.net_io_counters()` returns network packet and byte statistics. An unexpected surge in `bytes_sent` during off-hours is a primary signal of unauthorized data exfiltration.",
      "PCES-30-01 Block 3.3 - Exfiltration Detection",
      ["net_io_counters", "data-exfiltration", "traffic-monitoring"])

add_c(60, "3.3", "System Boot Time", "Beginner",
      "Which `psutil` function returns the system uptime / boot timestamp in seconds since Unix epoch?",
      "import psutil, datetime\nboot_ts = psutil.boot_time()\nboot_dt = datetime.datetime.fromtimestamp(boot_ts)\nprint(f'System last booted: {boot_dt}')",
      ["psutil.boot_time()", "psutil.get_uptime()", "psutil.system_start()", "psutil.power_on()"],
      0,
      "`psutil.boot_time()` returns the system boot time expressed in seconds since the epoch, assisting in uptime calculations and detecting unexpected host reboots.",
      "PCES-30-01 Block 3.3 - System Telemetry",
      ["boot_time", "uptime", "system-telemetry"])

# --- CHAPTER 3.4: File Integrity Verification with hashlib (Cards 61-80) ---
add_c(61, "3.4", "hashlib Basics", "Beginner",
      "Which standard library module is used in Python for calculating cryptographic hash digests like SHA-256 and SHA-512?",
      "import hashlib\nhash_obj = hashlib.sha256(b'Secure Data')\nprint(hash_obj.hexdigest())",
      ["hashlib", "crypto", "security", "hmac_base"],
      0,
      "`hashlib` is the standard library module that provides a common interface to secure hash algorithms including SHA-256, SHA-512, SHA-3, and legacy algorithms (MD5, SHA-1).",
      "PCES-30-01 Block 3.4 - hashlib Basics",
      ["hashlib", "sha256", "cryptographic-hashing"])

add_c(62, "3.4", "Input Encoding", "Beginner",
      "Why does passing a standard string `hashlib.sha256('secret')` raise a `TypeError` in Python 3?",
      "import hashlib\ntry:\n    # Raises TypeError: Strings must be encoded before hashing\n    hashlib.sha256('secret')\nexcept TypeError:\n    # Fix: Encode string to bytes first!\n    correct_hash = hashlib.sha256('secret'.encode('utf-8')).hexdigest()",
      ["Cryptographic hash functions operate strictly on sequences of raw `bytes`, requiring strings to be encoded (e.g. `.encode('utf-8')`)", "Strings can only be hashed on 32-bit operating systems", "Python 3 does not allow passwords to be hashed", "Hash functions only accept integer numbers"],
      0,
      "Hash algorithms process raw binary bytes, not abstract Unicode text. In Python 3, strings must be explicitly converted to bytes (e.g. `'text'.encode('utf-8')`) before hashing.",
      "PCES-30-01 Block 3.4 - Hashing Mechanics",
      ["bytes", "encode", "typeerror", "hashlib"])

add_c(63, "3.4", "Chunked File Hashing", "Intermediate",
      "Why is reading a file in fixed-size chunks (e.g. 4096 or 65536 bytes) the required best practice when computing file hashes in Python?",
      "import hashlib\n\ndef hash_file_safely(filepath: str) -> str:\n    hasher = hashlib.sha256()\n    with open(filepath, 'rb') as f:\n        while chunk := f.read(65536):\n            hasher.update(chunk)\n    return hasher.hexdigest()",
      ["Reading chunks iteratively prevents loading multi-gigabyte files entirely into RAM at once, avoiding Out of Memory (OOM) crashes", "Chunking speeds up CPU processing by 1000%", "Files larger than 1MB cannot be read by Python in binary mode", "Chunking automatically encrypts the file on disk"],
      0,
      "Calling `f.read()` on a 50GB database dump or VM disk image attempts to allocate 50GB of RAM, causing an OOM crash. Streaming in chunks (`while chunk := f.read(65536)`) consumes minimal, constant RAM.",
      "PCES-30-01 Block 3.4 - Efficient File Hashing",
      ["chunking", "oom-prevention", "hashlib-update"])

add_c(64, "3.4", "Binary Mode Opening", "Beginner",
      "Which file mode must always be specified in `open(filepath, 'rb')` when calculating cryptographic checksums of files?",
      "# Must open in binary mode ('rb') to avoid line-ending alterations (CRLF vs LF)!\nwith open('program.exe', 'rb') as f:\n    digest = hashlib.sha256(f.read()).hexdigest()",
      ["Binary read mode (`'rb'`)", "Text read mode (`'r'`)", "Append mode (`'a'`)", "Write text mode (`'w'`)"],
      0,
      "Files must be read in binary mode (`'rb'`). Opening in text mode (`'r'`) triggers OS-specific newline transformations (CRLF to LF), altering the bytes and corrupting the computed hash.",
      "PCES-30-01 Block 3.4 - File I/O",
      ["binary-mode", "rb", "hash-integrity"])

add_c(65, "3.4", "Digest Formats", "Beginner",
      "What is the difference between `hasher.digest()` and `hasher.hexdigest()` in `hashlib`?",
      "import hashlib\nh = hashlib.sha256(b'PCES')\nraw_bytes = h.digest()     # Returns 32 raw binary bytes\nhex_str = h.hexdigest()    # Returns 64 lowercase hexadecimal characters",
      ["`digest()` returns raw binary `bytes`; `hexdigest()` returns a readable hexadecimal `str` representation", "`digest()` is for SHA-1; `hexdigest()` is for SHA-256", "`hexdigest()` encrypts data; `digest()` decrypts it", "There is no difference"],
      0,
      "`digest()` outputs the hash as raw binary bytes (32 bytes for SHA-256). `hexdigest()` formats those bytes as a 64-character lowercase hex string suitable for printing, saving, and comparing.",
      "PCES-30-01 Block 3.4 - Digest Representation",
      ["digest", "hexdigest", "bytes-vs-hex"])

add_c(66, "3.4", "Baseline Integrity Checking", "Intermediate",
      "How does a Python File Integrity Checker detect unauthorized file tampering?",
      "# Integrity Baseline Verification:\n# 1. Create baseline manifest: {filepath: expected_sha256}\n# 2. Re-compute current sha256 for each file\n# 3. If current_sha256 != expected_sha256 -> File has been modified/tampered with!",
      ["By comparing the current cryptographic hash of a file against a previously recorded known-good baseline hash", "By comparing the font size of text files", "By checking if the file creation date is on a weekend", "By asking the user if they modified the file"],
      0,
      "File Integrity Monitoring (FIM) records a known-good baseline of cryptographic hashes. If an attacker modifies or injects code into a file, the computed hash will not match the baseline.",
      "PCES-30-01 Block 3.4 - File Integrity Monitoring",
      ["fim", "tampering-detection", "baseline-verification"])

add_c(67, "3.4", "Hash Collisions", "Intermediate",
      "What is a 'Cryptographic Hash Collision'?",
      "# Hash Collision: Hash(Message_A) == Hash(Message_B) where Message_A != Message_B\n# Practical collisions have been demonstrated against MD5 and SHA-1!",
      ["When two distinct, different inputs produce the exact same cryptographic hash digest output", "When a computer screen crashes during a hash operation", "When a hard drive runs out of sectors", "When two users share the same username"],
      0,
      "A hash collision occurs when two distinct inputs yield the identical hash digest. A secure cryptographic hash algorithm must be collision-resistant; practical collisions invalidate an algorithm for security.",
      "PCES-30-01 Block 3.4 - Collision Resistance",
      ["collision", "collision-resistance", "cryptographic-weakness"])

add_c(68, "3.4", "Deprecated Algorithms", "Beginner",
      "Why are MD5 and SHA-1 deprecated and considered unsuitable for security verification and digital signatures?",
      "# Legacy algorithms: MD5 and SHA-1 have proven practical collision attacks\n# Industry standard requires SHA-256 or SHA-3 for security applications",
      ["Practical collision vulnerabilities have been demonstrated, allowing attackers to forge certificates and tamper with files while preserving the hash", "MD5 and SHA-1 only run on Windows 95", "They are too slow for modern computers", "They cannot hash files larger than 10 kilobytes"],
      0,
      "Both MD5 and SHA-1 have demonstrated practical collision vulnerabilities. Attackers can create two different files with identical hashes, undermining authenticity and integrity.",
      "PCES-30-01 Block 3.4 - Deprecated Hash Algorithms",
      ["md5", "sha1", "deprecated", "collisions"])

add_c(69, "3.4", "Available Algorithms", "Intermediate",
      "Which attribute in Python's `hashlib` returns the set of all hash algorithms guaranteed to be supported across all platforms?",
      "import hashlib\nprint(hashlib.algorithms_guaranteed)\n# Returns: {'sha256', 'sha384', 'sha512', 'sha1', 'sha224', 'md5', 'sha3_256', ...}",
      ["hashlib.algorithms_guaranteed", "hashlib.all_hashes", "hashlib.supported_ciphers", "hashlib.list_algorithms()"],
      0,
      "`hashlib.algorithms_guaranteed` contains the set of algorithms guaranteed to be present across all Python platforms (`sha256`, `sha512`, `sha3_256`, etc.).",
      "PCES-30-01 Block 3.4 - hashlib Algorithms",
      ["algorithms_guaranteed", "hashlib-api", "compatibility"])

add_c(70, "3.4", "Timing Attacks in Hash Comparison", "Intermediate",
      "Why should `hmac.compare_digest(a, b)` be used instead of standard `==` when comparing cryptographic digests or secrets in Python?",
      "import hmac\n# Standard '==' exits early on the first non-matching byte (vulnerable to timing attacks!)\n# hmac.compare_digest runs in CONSTANT TIME, neutralizing timing analysis attacks!\nis_valid = hmac.compare_digest(expected_hash, computed_hash)",
      ["Standard `==` terminates comparisons early upon encountering the first differing byte, exposing timing side-channels; `compare_digest` operates in constant time", "`==` cannot compare strings longer than 10 characters", "`compare_digest` encrypts the strings before comparison", "`==` raises a SyntaxError in Python 3.12"],
      0,
      "Standard string comparison `==` returns `False` immediately upon the first mismatched character, leaking timing information. `hmac.compare_digest()` takes constant time regardless of where differences occur.",
      "PCES-30-01 Block 3.4 - Timing Attack Defense",
      ["compare_digest", "timing-attacks", "side-channel"])

add_c(71, "3.4", "HMAC Verification", "Intermediate",
      "What is a Hash-based Message Authentication Code (HMAC) and what does it verify that a plain hash does not?",
      "import hmac, hashlib\n# HMAC incorporates a SECRET KEY:\n# HMAC = Hash(Key XOR opad || Hash(Key XOR ipad || Message))\nmac = hmac.new(b'secret_key', b'Transfer $500', hashlib.sha256).hexdigest()",
      ["HMAC combines a cryptographic hash with a secret shared key, verifying both data integrity AND data authenticity (proving the sender knows the secret key)", "HMAC compresses files to 50% of their original size", "HMAC replaces public key RSA infrastructure", "HMAC is a hardware chip on motherboards"],
      0,
      "A standard hash only verifies integrity (detects corruption). An HMAC uses a secret key to provide both integrity and authenticity, proving the message originated from a party holding the secret.",
      "PCES-30-01 Block 3.4 - HMAC",
      ["hmac", "authenticity", "integrity", "secret-key"])

add_c(72, "3.4", "Recursive Directory Integrity", "Intermediate",
      "When building a directory baseline integrity scanner, which standard library function recursively traverses all files and subfolders in a path?",
      "import os, hashlib\n\ndef build_directory_manifest(root_dir):\n    manifest = {}\n    for root, dirs, files in os.walk(root_dir):\n        for file in files:\n            path = os.path.join(root, file)\n            manifest[path] = calculate_file_sha256(path)\n    return manifest",
      ["os.walk()", "os.listdir()", "sys.walk()", "pathlib.Path.read()"],
      0,
      "`os.walk(root_dir)` generates the file names in a directory tree by walking the tree either top-down or bottom-up, ideal for indexing entire filesystem hierarchies.",
      "PCES-30-01 Block 3.4 - Filesystem Traversal",
      ["os-walk", "directory-traversal", "manifest"])

add_c(73, "3.4", "Detecting Added and Deleted Files", "Intermediate",
      "In a Python FIM scanner, how can set operations identify files that were newly created or deleted compared to a baseline dictionary?",
      "baseline_files = set(baseline_manifest.keys())\ncurrent_files = set(current_manifest.keys())\n\nadded_files = current_files - baseline_files\ndeleted_files = baseline_files - current_files",
      ["Using set differences: `current_files - baseline_files` gives added files; `baseline_files - current_files` gives deleted files", "Using regular expressions on file sizes", "Converting dictionary keys to floating-point numbers", "Deleting all files and restoring from backup"],
      0,
      "By converting file path lists to Python `set` objects, set difference operators (`current - baseline` and `baseline - current`) instantly identify created and deleted files.",
      "PCES-30-01 Block 3.4 - Set Operations in FIM",
      ["set-difference", "fim", "change-detection"])

add_c(74, "3.4", "Digital Forensics & Evidence Hashing", "Beginner",
      "Why do forensic investigators immediately compute the SHA-256 hash of a seized digital drive before beginning analysis?",
      "# Preserving forensic evidence integrity\n# The initial drive hash is documented on the chain-of-custody form\n# Any subsequent verification must produce the identical hash to prove evidence was never altered",
      ["To establish an immutable mathematical baseline proving in court that the digital evidence remained unaltered throughout investigation", "To speed up the drive's read speed", "To decrypt hidden password vaults", "To erase temporary browser cookies"],
      0,
      "Forensic hashing establishes a cryptographic fingerprint of the digital media at the moment of seizure. Matching hashes later prove that investigators did not alter the evidence.",
      "PCES-30-01 Block 3.4 - Digital Forensics",
      ["forensic-hashing", "evidence-integrity", "chain-of-custody"])

add_c(75, "3.4", "SHA-3 Standard", "Intermediate",
      "What is SHA-3 (Keccak) and why was it standardized by NIST alongside the SHA-2 family?",
      "# SHA-3 algorithm supported in hashlib\nimport hashlib\nh = hashlib.sha3_256(b'PCES Security').hexdigest()",
      ["A cryptographic hash standard based on the sponge construction, designed as a backup with a completely different mathematical structure than the Merkle-Damgård SHA-2 family", "A proprietary encryption algorithm sold by Microsoft", "A replacement for AES encryption", "A hardware protocol for wireless routers"],
      0,
      "SHA-3 uses a sponge construction (Keccak), providing structural diversity. If a mathematical vulnerability is ever found in the Merkle-Damgård construction of SHA-2, SHA-3 remains secure.",
      "PCES-30-01 Block 3.4 - SHA-3",
      ["sha3", "sponge-construction", "keccak"])

add_c(76, "3.4", "Hash Output Length", "Beginner",
      "What is the exact bit length and hexadecimal character length of an output digest generated by SHA-256?",
      "# SHA-256 properties:\n# 256 bits = 32 bytes\n# 32 bytes in hexadecimal representation (2 hex chars per byte) = 64 characters\nimport hashlib\nassert len(hashlib.sha256(b'test').hexdigest()) == 64",
      ["256 bits (32 bytes), producing a 64-character hexadecimal string", "128 bits (16 bytes), producing a 32-character hexadecimal string", "512 bits (64 bytes), producing a 128-character hexadecimal string", "1024 bits (128 bytes), producing a 256-character hexadecimal string"],
      0,
      "SHA-256 produces a fixed 256-bit (32-byte) digest. When represented in hexadecimal (where each byte is represented by two hex characters `0-9, a-f`), it is exactly 64 characters long.",
      "PCES-30-01 Block 3.4 - Hash Characteristics",
      ["sha256-length", "64-chars", "bit-length"])

add_c(77, "3.4", "Salting with Hashing", "Beginner",
      "How is a salt appended to data in Python before hashing?",
      "import hashlib, os\nsalt = os.urandom(16)  # 16 cryptographically secure random bytes\ndata = b'UserPassword123'\n# Concat salt to data before passing to hash\nhash_digest = hashlib.sha256(salt + data).hexdigest()",
      ["By concatenating the random salt bytes to the data bytes (`salt + data`) before passing them into the hash function", "By multiplying the string by 2", "By converting the string to uppercase", "By writing the salt into a text file"],
      0,
      "Salting simply prepends or appends a cryptographically random byte sequence to the plaintext data (`salt + data`) before computing the hash.",
      "PCES-30-01 Block 3.4 - Salting Technique",
      ["salting", "urandom", "hashlib"])

add_c(78, "3.4", "Preimage Resistance", "Intermediate",
      "In cryptography, what does 'Preimage Resistance' (one-way property) mean?",
      "# One-way hash property:\n# Given Hash(x) = 'a591a6d40bf4...'\n# It must be computationally infeasible to find the original input 'x'",
      ["Given a hash output digest, it is computationally infeasible to reverse it and find the original input data", "Hashes can easily be decrypted back into plain text with a key", "Images cannot be uploaded to web servers", "Two files with different names cannot have the same extension"],
      0,
      "Preimage resistance (one-way property) ensures that given a hash digest `h`, it is computationally infeasible to find any message `m` such that `hash(m) = h`.",
      "PCES-30-01 Block 3.4 - Cryptographic Properties",
      ["preimage-resistance", "one-way", "properties"])

add_c(79, "3.4", "Second Preimage Resistance", "Intermediate",
      "What is 'Second Preimage Resistance' (Weak Collision Resistance)?",
      "# Second Preimage Resistance:\n# Given a specific input x, it is computationally infeasible to find a different input y such that Hash(x) == Hash(y)",
      ["Given a specific input `x`, it is computationally infeasible to find a different input `y` such that `hash(x) == hash(y)`", "A user cannot enter two passwords at the same time", "A hard drive cannot store two copies of the same file", "A computer cannot boot twice in one day"],
      0,
      "Second preimage resistance means that given a specific input `x`, an attacker cannot find a distinct substitute input `y` that produces the identical hash, preventing forged replacement documents.",
      "PCES-30-01 Block 3.4 - Cryptographic Properties",
      ["second-preimage", "tamper-resistance", "properties"])

add_c(80, "3.4", "Manifest Storage Security", "Intermediate",
      "If a FIM script stores its baseline hash database in a local file (`/var/log/baseline.json`), how must that database be protected against attacker tampering?",
      "# Hardening the integrity baseline database:\n# If an attacker compromises the server and can write to baseline.json,\n# they will simply update the hashes of their trojanized binaries!\n# Mitigations: Store on write-once media, digitally sign baseline, or ship off-host to SIEM",
      ["The baseline manifest must be stored on read-only/write-once media, cryptographically signed, or shipped immediately to an external remote SIEM", "The baseline should be deleted every morning", "The baseline should be renamed to a secret filename", "The baseline should be written in comic sans font"],
      0,
      "If an attacker can overwrite the baseline manifest, they can update it to match their backdoor binaries. Baselines must be digitally signed, stored on append-only/read-only media, or shipped to external SIEMs.",
      "PCES-30-01 Block 3.4 - FIM Hardening",
      ["baseline-protection", "tamper-proofing", "audit-integrity"])

# --- CHAPTER 3.5: Security Automation, Subprocess & Structured Reporting (Cards 81-100) ---
add_c(81, "3.5", "Safe Subprocess Execution", "Intermediate",
      "Why is `subprocess.run(['ping', '-c', '1', host], shell=False)` significantly safer than `os.system('ping -c 1 ' + host)`?",
      "# OS Command Injection comparison:\n# os.system('ping -c 1 ' + host) where host = '127.0.0.1; cat /etc/passwd'\n# executes the shell command injection!\n# subprocess.run(..., shell=False) passes arguments directly to OS execvp without shell interpolation!",
      ["`shell=False` passes arguments directly to the OS executable without invoking a shell interpreter, completely preventing shell command injection", "`os.system()` runs 10 times faster", "`subprocess.run()` automatically encrypts ping packets", "`shell=False` only works on Apple computers"],
      0,
      "Invoking the shell (`shell=True` or `os.system`) allows metacharacters (`;`, `&&`, `|`) to execute injected shell commands. `shell=False` treats inputs strictly as literal string arguments to the executable.",
      "PCES-30-01 Block 3.5 - Safe Subprocess",
      ["subprocess", "command-injection", "shell-false"])

add_c(82, "3.5", "Capturing Subprocess Output", "Beginner",
      "In modern Python 3, which parameter in `subprocess.run()` automatically captures stdout and stderr and decodes them to text?",
      "import subprocess\nresult = subprocess.run(\n    ['uptime'],\n    capture_output=True,\n    text=True,  # Decodes stdout/stderr to str automatically!\n    check=True\n)\nprint(f'System Uptime: {result.stdout.strip()}')",
      ["`capture_output=True` and `text=True`", "`record=True`", "`save_output=True`", "`log_terminal=True`"],
      0,
      "`capture_output=True` captures both standard output and standard error into `result.stdout` and `result.stderr`. Adding `text=True` decodes them to strings using the system encoding.",
      "PCES-30-01 Block 3.5 - Subprocess API",
      ["capture_output", "text-mode", "subprocess"])

add_c(83, "3.5", "Subprocess Timeouts", "Intermediate",
      "How do you prevent a hung external CLI utility from causing a Python automation script to freeze indefinitely?",
      "import subprocess\ntry:\n    # Abort command if it runs longer than 5 seconds\n    res = subprocess.run(['nmap', '-F', target], timeout=5.0)\nexcept subprocess.TimeoutExpired:\n    print('[ERROR] Scan command exceeded 5-second timeout and was killed!')",
      ["By setting the `timeout` parameter in `subprocess.run()` and catching `subprocess.TimeoutExpired`", "By adding more RAM to the server", "By running the command in an infinite while loop", "By unplugging the mouse"],
      0,
      "The `timeout` parameter in `subprocess.run()` specifies the maximum allowed runtime in seconds. If the process does not terminate within that window, it is killed and `subprocess.TimeoutExpired` is raised.",
      "PCES-30-01 Block 3.5 - Subprocess Timeouts",
      ["timeoutexpired", "subprocess-timeout", "resilience"])

add_c(84, "3.5", "Subprocess Check Parameter", "Intermediate",
      "What does setting `check=True` in `subprocess.run()` enforce?",
      "import subprocess\ntry:\n    subprocess.run(['ls', '/nonexistent_dir'], check=True)\nexcept subprocess.CalledProcessError as err:\n    print(f'Command failed with return code {err.returncode}')",
      ["It raises `subprocess.CalledProcessError` if the executed external command exits with a non-zero exit code", "It checks if the command contains syntax typos", "It scans the binary for malware before running", "It verifies that the user is logged in as an administrator"],
      0,
      "`check=True` automatically raises `subprocess.CalledProcessError` if the child process returns an exit code other than 0, ensuring failures are not silently ignored.",
      "PCES-30-01 Block 3.5 - Subprocess Error Handling",
      ["check-parameter", "calledprocesserror", "exit-codes"])

add_c(85, "3.5", "Structured Reporting with CSV", "Beginner",
      "Which class in Python's standard `csv` module allows you to write structured security vulnerability dictionaries directly to a CSV spreadsheet?",
      "import csv\nfindings = [\n    {'host': '10.0.0.1', 'port': 22, 'service': 'OpenSSH', 'status': 'VULNERABLE'},\n    {'host': '10.0.0.2', 'port': 80, 'service': 'Apache', 'status': 'OK'}\n]\nwith open('audit_report.csv', 'w', newline='') as f:\n    writer = csv.DictWriter(f, fieldnames=['host', 'port', 'service', 'status'])\n    writer.writeheader()\n    writer.writerows(findings)",
      ["csv.DictWriter", "csv.DictionarySaver", "csv.TableSerializer", "csv.ObjectWriter"],
      0,
      "`csv.DictWriter` maps dictionary keys to CSV column headers and writes dictionary records cleanly into structured spreadsheet rows.",
      "PCES-30-01 Block 3.5 - CSV Reporting",
      ["dictwriter", "csv-reports", "reporting"])

add_c(86, "3.5", "Remote Automation with Paramiko", "Intermediate",
      "What is `Paramiko` in the Python security ecosystem?",
      "# Paramiko SSH client connection example\nimport paramiko\n\nssh = paramiko.SSHClient()\nssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())\nssh.connect('192.168.1.10', username='audit_user', key_filename='/home/user/.ssh/id_ed25519')\nstdin, stdout, stderr = ssh.exec_command('uname -a')\nprint(stdout.read().decode())",
      ["A Python implementation of the SSHv2 protocol providing programmatic SSH client and server capabilities for automated remote administration and auditing", "An open-source database engine replacing SQLite", "A web browser automation framework", "A machine learning library for malware classification"],
      0,
      "`Paramiko` is the de facto Python library implementing the SSHv2 protocol, enabling automated secure shell connections, remote command execution, and SFTP transfers.",
      "PCES-30-01 Block 3.5 - Paramiko & SSH",
      ["paramiko", "ssh-automation", "remote-execution"])

add_c(87, "3.5", "SSH Host Key Verification", "Intermediate",
      "Why is blindly setting `ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())` a potential security vulnerability in production scripts?",
      "# Insecure Paramiko practice: AutoAddPolicy automatically trusts any host key presented\n# Vulnerable to Man-in-the-Middle (MitM) attacks!\n# Secure practice: RejectPolicy() and pre-load known_hosts file",
      ["It automatically accepts and trusts any unknown server public key, exposing the connection to Man-in-the-Middle (MitM) spoofing attacks", "It disables password authentication", "It slows down SSH transfer speeds", "It prevents Paramiko from executing commands"],
      0,
      "`AutoAddPolicy()` blindly trusts unknown host keys. If an attacker intercepts the connection (MitM), the script accepts the attacker's key without warning, negating SSH host verification.",
      "PCES-30-01 Block 3.5 - Paramiko Security",
      ["autoaddpolicy", "host-keys", "mitm-vulnerability"])

add_c(88, "3.5", "Validating TLS Certificates", "Intermediate",
      "Which Python standard library module and function should be used to establish a secure SSL context that strictly validates server certificates?",
      "import ssl, socket\n# Secure context with default CA certificates and hostname verification\ncontext = ssl.create_default_context()\nwith socket.create_connection(('example.com', 443)) as sock:\n    with context.wrap_socket(sock, server_hostname='example.com') as ssock:\n        print(f'TLS Established: {ssock.version()}')",
      ["ssl.create_default_context()", "ssl.disable_verification()", "socket.open_tls()", "urllib.make_ssl()"],
      0,
      "`ssl.create_default_context()` creates an `SSLContext` configured with secure defaults: it enables certificate verification against system CAs and enforces hostname validation.",
      "PCES-30-01 Block 3.5 - SSL Context",
      ["ssl", "create_default_context", "tls-verification"])

add_c(89, "3.5", "Insecure TLS Verification", "Intermediate",
      "What security vulnerability is introduced if a developer sets `context.check_hostname = False` and `context.verify_mode = ssl.CERT_NONE`?",
      "# Insecure TLS context:\ncontext.check_hostname = False\ncontext.verify_mode = ssl.CERT_NONE\n# Server certificate is never validated against CAs or hostname!\n# An attacker on public Wi-Fi can easily present a fake self-signed cert and intercept traffic!",
      ["Certificate and hostname validation are completely disabled, exposing encrypted traffic to trivial Man-in-the-Middle (MitM) interception", "The connection speed is halved", "The web server drops all database connections", "The Python script cannot read files"],
      0,
      "Disabling certificate and hostname verification (`CERT_NONE`) causes the client to accept any certificate (including forged or self-signed certs), allowing eavesdroppers to decrypt traffic in transit.",
      "PCES-30-01 Block 3.5 - Insecure TLS",
      ["cert_none", "mitm", "tls-vulnerabilities"])

add_c(90, "3.5", "JSON Report Formatting", "Beginner",
      "When writing audit results to a JSON file using `json.dump()`, which argument formats the file with indentation for human readability?",
      "import json\naudit_data = {'status': 'PASS', 'scanned_hosts': 12}\nwith open('report.json', 'w') as f:\n    json.dump(audit_data, f, indent=4)  # Formats with 4-space indentation",
      ["`indent=4`", "`pretty=True`", "`readable=True`", "`format='pretty'`"],
      0,
      "Passing `indent=4` (or any integer) to `json.dump()` or `json.dumps()` formats the JSON output with newlines and indentation levels, making it clean and readable for human operators.",
      "PCES-30-01 Block 3.5 - JSON Reporting",
      ["json-indent", "pretty-print", "reporting"])

add_c(91, "3.5", "Managing Temporary Files", "Intermediate",
      "Which standard library module securely creates temporary files with unique unpredictable names and restricted permissions, preventing race conditions?",
      "import tempfile\n# Secure temporary file creation (permissions 0600, unique randomized name)\nwith tempfile.NamedTemporaryFile(mode='w+', delete=True) as temp_audit:\n    temp_audit.write('Confidential audit data')\n    temp_audit.seek(0)\n    process_audit(temp_audit.name)",
      ["tempfile", "os.random", "fileutils", "sys.tmp"],
      0,
      "The `tempfile` module creates temporary files and directories safely using randomized names and restrictive permissions (`0600`), mitigating symlink attacks and race conditions.",
      "PCES-30-01 Block 3.5 - Secure Temp Files",
      ["tempfile", "race-conditions", "secure-storage"])

add_c(92, "3.5", "Datetime Formatting in Reports", "Beginner",
      "How do you generate an ISO 8601 standardized UTC timestamp string in Python for inclusion in security incident reports?",
      "import datetime\n# Generates standardized UTC timestamp: '2026-09-28T14:30:00Z'\ntimestamp = datetime.datetime.now(datetime.timezone.utc).isoformat()",
      ["`datetime.datetime.now(datetime.timezone.utc).isoformat()`", "`time.clock()`", "`datetime.date.today().to_string()`", "`str(time.time() * 1000)`"],
      0,
      "Using `datetime.datetime.now(datetime.timezone.utc).isoformat()` produces a standardized ISO 8601 string (e.g. `'2026-09-28T14:30:00+00:00'`), standard for SIEM and forensic correlation.",
      "PCES-30-01 Block 3.5 - Timestamps & Forensics",
      ["isoformat", "utc", "datetime", "reporting"])

add_c(93, "3.5", "Sanitizing Filenames", "Intermediate",
      "Why must filenames derived from user input or remote targets be sanitized before being passed to `open()` in reporting scripts?",
      "# Target provided: '../../../../etc/passwd' or 'scan;rm -rf /'\n# Must sanitize to prevent Path Traversal or directory escape!\nimport re, os\nsafe_filename = re.sub(r'[^a-zA-Z0-9_.-]', '_', user_supplied_target)\nreport_path = os.path.join('/reports', safe_filename + '.txt')",
      ["Unsanitized filenames containing `../` characters can cause Path Traversal, allowing attackers to overwrite critical system files outside the designated report folder", "Unsanitized filenames slow down hard drive read times", "Files with hyphens cannot be opened in Linux", "Python crashes if a filename has more than 5 letters"],
      0,
      "Failing to sanitize user-provided target names or report identifiers allows Path Traversal attacks (`../../etc/cron.d/malicious`), overwriting arbitrary system files.",
      "PCES-30-01 Block 3.5 - Path Traversal Prevention",
      ["path-traversal", "filename-sanitization", "secure-io"])

add_c(94, "3.5", "Signal Handling in Automation", "Intermediate",
      "Which standard library module allows a Python SecOps daemon to intercept OS signals like `SIGTERM` and `SIGHUP` to perform clean shutdowns or reload configs?",
      "import signal, sys\n\ndef handle_sigterm(signum, frame):\n    print('[INFO] Received SIGTERM. Closing network connections and saving state...')\n    cleanup_and_save()\n    sys.exit(0)\n\nsignal.signal(signal.SIGTERM, handle_sigterm)",
      ["signal", "os.signals", "events", "process_control"],
      0,
      "The `signal` module allows Python programs to define custom handler functions for asynchronous OS signals like `SIGINT` (Ctrl+C), `SIGTERM` (termination request), and `SIGHUP`.",
      "PCES-30-01 Block 3.5 - Signal Handling",
      ["signal", "sigterm", "clean-shutdown"])

add_c(95, "3.5", "Cron Automation in SecOps", "Beginner",
      "In Linux environments, what scheduler is commonly used to execute Python security audit scripts automatically at specified intervals (e.g. nightly at 2 AM)?",
      "# Linux crontab entry running audit script nightly at 02:00 AM\n# 0 2 * * * /usr/bin/python3 /opt/secops/nightly_audit.py >> /var/log/audit.log 2>&1",
      ["cron (crontab)", "system_scheduler", "timer_app", "linux_alarm"],
      0,
      "`cron` is the time-based job scheduler in Unix/Linux operating systems, frequently configured via `crontab` to trigger automated Python security scans and log audits.",
      "PCES-30-01 Block 3.5 - Automation Scheduling",
      ["cron", "crontab", "scheduled-tasks"])

add_c(96, "3.5", "Parsing HTML/XML Reports", "Intermediate",
      "Which standard library module parses XML output produced by security tools like Nmap, but must be protected against XML External Entity (XXE) attacks?",
      "# Parsing Nmap XML report\nimport xml.etree.ElementTree as ET\ntree = ET.parse('nmap_scan.xml')\nroot = tree.getroot()",
      ["xml.etree.ElementTree", "json.xml", "html.parser", "re.xml"],
      0,
      "`xml.etree.ElementTree` is the standard library module for parsing XML data (commonly exported by vulnerability scanners and Nmap). Defenses must prevent XXE on untrusted XML.",
      "PCES-30-01 Block 3.5 - XML Processing",
      ["elementtree", "xml", "nmap-xml"])

add_c(97, "3.5", "Automated Email Alerts", "Intermediate",
      "Which standard library modules can send automated alert emails with TLS encryption when a security incident occurs?",
      "import smtplib\nfrom email.message import EmailMessage\n\nmsg = EmailMessage()\nmsg['Subject'] = '[CRITICAL] Unauthorized Root Login Detected'\nmsg['From'] = 'secops@company.internal'\nmsg['To'] = 'soc-oncall@company.internal'\nmsg.set_content('An unauthorized root SSH session was initiated from IP 198.51.100.55.')\n\nwith smtplib.SMTP_SSL('smtp.company.internal', 465) as smtp:\n    smtp.login('secops', 'app_password')\n    smtp.send_message(msg)",
      ["`smtplib` and `email.message`", "`urllib.mail`", "`socket.email`", "`net.mailer`"],
      0,
      "`smtplib` provides client-side SMTP protocol handling (including `SMTP_SSL` for encrypted mail delivery), while `email.message` constructs MIME and plaintext email payloads.",
      "PCES-30-01 Block 3.5 - Incident Alerting",
      ["smtplib", "email", "alerting", "soc-notifications"])

add_c(98, "3.5", "Hashing Passwords Securely in Python", "Intermediate",
      "Which standard library function in `hashlib` provides a secure, salted Key Derivation Function (KDF) with configurable iteration count for password hashing?",
      "import hashlib, os\nsalt = os.urandom(16)\n# PBKDF2 with SHA-256 and 600,000 iterations (OWASP recommendation)\nkey = hashlib.pbkdf2_hmac(\n    hash_name='sha256',\n    password=b'UserP@ssw0rd!',\n    salt=salt,\n    iterations=600000\n)",
      ["hashlib.pbkdf2_hmac()", "hashlib.quick_hash()", "hashlib.caesar_cipher()", "hashlib.xor_encrypt()"],
      0,
      "`hashlib.pbkdf2_hmac()` implements the PBKDF2 key derivation function using HMAC, supporting configurable salt and high iteration counts to resist offline brute-force cracking.",
      "PCES-30-01 Block 3.5 - Password Hashing",
      ["pbkdf2_hmac", "kdf", "password-storage"])

add_c(99, "3.5", "Generating Cryptographic Tokens", "Beginner",
      "Which Python 3 module should always be used to generate secure random tokens, password reset links, and nonces instead of the `random` module?",
      "import secrets\n# Cryptographically secure URL-safe token (pseudo-random, unpredictable)\ntoken = secrets.token_urlsafe(32)\nprint(f'Secure Session Token: {token}')",
      ["secrets", "random", "math", "os.time"],
      0,
      "The `secrets` module (introduced in Python 3.6) uses operating system entropy (`/dev/urandom` / `CryptGenRandom`) to generate cryptographically secure, unpredictable numbers and tokens.",
      "PCES-30-01 Block 3.5 - Cryptographic Randomness",
      ["secrets", "token_urlsafe", "random-vs-secrets"])

add_c(100, "3.5", "Executive Summary Metrics", "Beginner",
      "In a security audit report, why are aggregated summary metrics (e.g. Total Scanned, Critical, High, Medium, Low) presented at the very top of the report?",
      "# Aggregating summary metrics for executive triage\nsummary = {\n    'total_hosts_scanned': 250,\n    'critical_vulns': 2,\n    'high_vulns': 7,\n    'medium_vulns': 15,\n    'low_vulns': 42\n}",
      ["To provide executive leadership and technical managers with immediate high-level situational awareness before diving into deep technical details", "Because PDF documents cannot store numbers at the bottom of a page", "To comply with international font sizing laws", "To confuse attackers who steal the report"],
      0,
      "Executive summaries provide decision-makers with instant clarity regarding organizational risk posture and urgent remediation priorities before delving into granular technical logs.",
      "PCES-30-01 Block 3.5 - Executive Reporting",
      ["executive-summary", "metrics", "reporting"])

print(f"Total Block 3 cards created: {len(cards)}")
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

write_ts_file("src/data/pcesSection3CardsPart1.ts", "pcesSection3CardsPart1", cards[:50])
write_ts_file("src/data/pcesSection3CardsPart2.ts", "pcesSection3CardsPart2", cards[50:])

with open("src/data/pcesSection3Flashcards.ts", "w") as f:
    f.write("""import { Flashcard } from '../types';
import { pcesSection3CardsPart1 } from './pcesSection3CardsPart1';
import { pcesSection3CardsPart2 } from './pcesSection3CardsPart2';

export const pcesSection3Flashcards: Flashcard[] = [
  ...pcesSection3CardsPart1,
  ...pcesSection3CardsPart2,
];
""")
print("Wrote pcesSection3Flashcards.ts")
