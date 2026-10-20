# scripts/generate_pces_section1.py
import json

cards = []

# --- CHAPTER 1.1: The CIA Triad & Expanded Security Model (Cards 1-20) ---
ch1_1 = [
    (
        "Which core pillar of the CIA Triad is directly violated when an unauthorized user intercepts and reads unencrypted network traffic containing database credentials?",
        """# Monitoring network traffic for plaintext credentials
import socket

def inspect_packet(payload: bytes):
    if b"password=" in payload:
        print("[ALERT] Sensitive credential exposed in transit!")
""",
        [
            "Integrity",
            "Confidentiality",
            "Availability",
            "Non-repudiation"
        ],
        1,
        "Confidentiality ensures that sensitive data is shielded from unauthorized inspection, disclosure, or interception. Eavesdropping on plaintext credentials directly breaches confidentiality.",
        "PCES-30-01 Block 1.1 - The CIA Triad",
        ["cia-triad", "confidentiality", "network-traffic"],
        "Beginner"
    ),
    (
        "A malicious actor tampers with a configuration file in an automated pipeline, altering an API endpoint URL. Which security objective has been compromised?",
        """# Validating config file consistency
import hashlib

def verify_checksum(filepath: str, expected_hash: str) -> bool:
    with open(filepath, "rb") as f:
        actual_hash = hashlib.sha256(f.read()).hexdigest()
    return actual_hash == expected_hash
""",
        [
            "Availability",
            "Integrity",
            "Accountability",
            "Authentication"
        ],
        1,
        "Integrity ensures that information and systems are protected against unauthorized modification, tampering, or destruction. Modifying a file or data in transit violates integrity.",
        "PCES-30-01 Block 1.1 - The CIA Triad",
        ["cia-triad", "integrity", "checksum"],
        "Beginner"
    ),
    (
        "An attacker floods an e-commerce API server with 1,000,000 requests per minute, exhausting server memory and causing HTTP 503 errors for legitimate customers. Which pillar of the CIA Triad is impacted?",
        """# Simulating an availability health check
import urllib.request
import urllib.error

def check_service_health(url: str):
    try:
        res = urllib.request.urlopen(url, timeout=3)
        return res.status == 200
    except urllib.error.URLError:
        return False  # Service unreachable / degraded
""",
        [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Authorization"
        ],
        2,
        "Availability guarantees that systems, networks, and applications are accessible and operational for authorized users when needed. Denial of service attacks target availability.",
        "PCES-30-01 Block 1.1 - The CIA Triad",
        ["cia-triad", "availability", "dos"],
        "Beginner"
    ),
    (
        "In the extended security model, what does 'Non-repudiation' provide in a digital transaction or audit log?",
        """# Digital signature verification concept
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives import hashes

def verify_sender(signature, message, public_key):
    # Verifies that the sender cannot deny having sent the message
    public_key.verify(signature, message, padding.PSS(...), hashes.SHA256())
""",
        [
            "It guarantees that communication latency is kept under 50 milliseconds",
            "It ensures that a sender or actor cannot deny having performed an action or sent a message",
            "It compresses logs to save disk storage on production servers",
            "It automatically rotates database encryption keys every 30 days"
        ],
        1,
        "Non-repudiation provides indisputable proof of the origin and integrity of data, ensuring a party cannot successfully deny the authenticity of their signature or action.",
        "PCES-30-01 Block 1.1 - Extended Security Concepts",
        ["non-repudiation", "digital-signatures", "authenticity"],
        "Intermediate"
    ),
    (
        "Which security property ensures that a user or system entity is genuinely who or what they claim to be?",
        """# Entity verification workflow
def authenticate_user(username: str, provided_token: str, token_store: dict) -> bool:
    expected_token = token_store.get(username)
    if not expected_token:
        return False
    return provided_token == expected_token
""",
        [
            "Authenticity",
            "Availability",
            "Accountability",
            "Anonymity"
        ],
        0,
        "Authenticity ensures that an entity or communication is genuine, verifying the identity of the user, system, or data origin.",
        "PCES-30-01 Block 1.1 - Extended Security Concepts",
        ["authenticity", "identity", "cia-extended"],
        "Beginner"
    ),
    (
        "Why is 'Accountability' essential in security engineering, and what technical control most directly supports it?",
        """# Audit logging with timestamp, user ID, and action
import logging
import time

audit_logger = logging.getLogger("audit")

def log_sensitive_action(user_id: str, action: str):
    audit_logger.info(f"ts={time.time()} user={user_id} action={action}")
""",
        [
            "It eliminates software bugs; supported by unit tests",
            "It ensures actions can be traced to a specific entity; supported by immutable audit logging",
            "It guarantees 100% server uptime; supported by load balancers",
            "It encrypts hard drives at rest; supported by BitLocker"
        ],
        1,
        "Accountability ensures that every action in a system can be uniquely traced to the responsible individual or service, primarily achieved through robust, tamper-resistant audit logs.",
        "PCES-30-01 Block 1.1 - Extended Security Concepts",
        ["accountability", "audit-logging", "traceability"],
        "Beginner"
    ),
    (
        "A company stores passwords in plaintext in an internal SQLite database. An insider with read access views the passwords. What primary CIA Triad failure occurred?",
        """# Insecure user storage
import sqlite3

conn = sqlite3.connect("users.db")
cursor = conn.cursor()
cursor.execute("SELECT username, password FROM accounts")
rows = cursor.fetchall()  # Passwords exposed in plaintext!
""",
        [
            "Loss of Integrity",
            "Loss of Availability",
            "Loss of Confidentiality",
            "Loss of Non-repudiation"
        ],
        2,
        "Storing passwords in plaintext allows unauthorized reading of sensitive secrets, representing a direct breach of confidentiality.",
        "PCES-30-01 Block 1.1 - The CIA Triad",
        ["confidentiality", "passwords", "plaintext"],
        "Beginner"
    ),
    (
        "Which of the following scenarios is an example of an Integrity violation rather than an Availability violation?",
        """# Data validation scenario
record = {"account_id": 104, "balance": 5000.0}
# Unauthorized modification occurred in transit:
record["balance"] = 999999.0
""",
        [
            "A DDoS attack rendering a payment gateway unreachable",
            "A hard drive failure destroying an unbacked-up log server",
            "An unauthorized database query silently altering bank account balances",
            "A network firewall accidentally dropping all inbound UDP traffic"
        ],
        2,
        "Altering records or balances without authorization changes the truth/correctness of data, which is an integrity violation. Service downtime or hardware crashes are availability issues.",
        "PCES-30-01 Block 1.1 - The CIA Triad",
        ["integrity", "data-tampering", "cia-triad"],
        "Intermediate"
    ),
    (
        "How does cryptographic hashing specifically support the Integrity requirement of the CIA Triad?",
        """import hashlib

def calculate_file_hash(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()

original = b"Transfer $100 to Alice"
modified = b"Transfer $1000 to Alice"
assert calculate_file_hash(original) != calculate_file_hash(modified)
""",
        [
            "It reversibly encrypts data so only authorized users can read it",
            "Any change to the input data produces a drastically different hash output (avalanche effect)",
            "It automatically blocks network connections from unauthorized IP addresses",
            "It increases network throughput by compressing large data streams"
        ],
        1,
        "Cryptographic hash functions possess the avalanche effect: even a single-bit alteration in the input produces a completely different hash digest, enabling immediate detection of data tampering.",
        "PCES-30-01 Block 1.1 - Integrity & Hashing",
        ["integrity", "hashlib", "sha256"],
        "Beginner"
    ),
    (
        "A system administrator implements automated backups with geographically separated disaster recovery replicas. Which CIA Triad property is this control designed to guarantee?",
        """# Backup verification check
import os

def check_backup_freshness(backup_path: str, max_age_seconds: int) -> bool:
    if not os.path.exists(backup_path):
        return False
    age = time.time() - os.path.getmtime(backup_path)
    return age <= max_age_seconds
""",
        [
            "Confidentiality",
            "Availability",
            "Integrity only",
            "Authenticity"
        ],
        1,
        "Backups and disaster recovery sites ensure that systems and data can be restored following ransomware, hardware failure, or environmental disaster, ensuring availability.",
        "PCES-30-01 Block 1.1 - Availability & Backups",
        ["availability", "backups", "disaster-recovery"],
        "Beginner"
    ),
    (
        "Which mathematical concept prevents a sender from modifying a message after signing it without invalidating the signature?",
        """# Digital signature concept
# Signature = PrivateKey(Hash(Message))
# Verification = PublicKey(Signature) == Hash(Message)
""",
        [
            "Asymmetric cryptography combined with cryptographic hashing",
            "Symmetric XOR ciphering",
            "Base64 ASCII armor encoding",
            "Round-robin load balancing"
        ],
        0,
        "Digital signatures combine asymmetric cryptography (signing with a private key) and cryptographic hashing. Modifying the message changes its hash, invalidating the signature and providing non-repudiation.",
        "PCES-30-01 Block 1.1 - Non-Repudiation",
        ["digital-signatures", "asymmetric", "non-repudiation"],
        "Intermediate"
    ),
    (
        "What is the key difference between Authentication and Authorization in access security?",
        """def access_control(request):
    # Step 1: Who are you?
    user = authenticate(request.headers.get("Authorization"))
    # Step 2: What are you allowed to do?
    if not authorize(user, "read:financial_records"):
        raise PermissionError("Access forbidden")
""",
        [
            "Authentication proves who you are; Authorization determines what actions or resources you are permitted to access",
            "Authentication is for networks; Authorization is exclusively for relational databases",
            "Authentication uses AES; Authorization uses RSA",
            "Authentication requires root privileges; Authorization is performed by guest users"
        ],
        0,
        "Authentication is the process of verifying an entity's claimed identity. Authorization is the process of granting or denying specific permissions and access to resources.",
        "PCES-30-01 Block 1.1 - Authentication vs Authorization",
        ["authentication", "authorization", "access-control"],
        "Beginner"
    ),
    (
        "An API returns error code 401 Unauthorized when a user has not logged in, and 403 Forbidden when a logged-in user tries to access admin settings. What does 403 represent?",
        """# HTTP Status distinction
# 401: Missing or invalid authentication credentials
# 403: Authenticated, but lacking authorized permissions
""",
        [
            "Authentication failure (unrecognized credentials)",
            "Authorization failure (recognized user lacks necessary permissions)",
            "Availability failure (server is undergoing maintenance)",
            "Integrity failure (payload hash mismatch)"
        ],
        1,
        "HTTP 401 indicates missing or invalid authentication (identity unknown). HTTP 403 indicates authorization failure (identity is verified, but permissions are insufficient).",
        "PCES-30-01 Block 1.1 - Auth Concepts",
        ["authorization", "http-codes", "security-fundamentals"],
        "Beginner"
    ),
    (
        "Which security mechanism addresses both Confidentiality and Authenticity simultaneously during data transmission over the Internet?",
        """# Establishing a secure TLS socket connection
import ssl
import socket

context = ssl.create_default_context()
with socket.create_connection(("example.com", 443)) as sock:
    with context.wrap_socket(sock, server_hostname="example.com") as ssock:
        print(f"Connected using {ssock.version()} with cipher {ssock.cipher()[0]}")
""",
        [
            "Plain HTTP over TCP port 80",
            "Transport Layer Security (TLS)",
            "Telnet protocol",
            "Simple Network Time Protocol (SNTP)"
        ],
        1,
        "TLS provides confidentiality through symmetric encryption of data and authenticity through digital certificates validating server (and optionally client) identities.",
        "PCES-30-01 Block 1.1 - TLS & CIA",
        ["tls", "confidentiality", "authenticity"],
        "Intermediate"
    ),
    (
        "When designing a secure system, why is the 'Principle of Least Privilege' (PoLP) considered fundamental?",
        """# Enforcing least privilege in Python service
# Running application as unprivileged 'appuser' rather than root/superuser
import os

def check_execution_context():
    if hasattr(os, "getuid") and os.getuid() == 0:
        raise SecurityError("Application must not run as root!")
""",
        [
            "It minimizes the potential damage if an account or service is compromised",
            "It ensures that all users have identical administrative rights to simplify debugging",
            "It guarantees that server response times will not exceed 100 milliseconds",
            "It prevents users from changing their passwords more than once per year"
        ],
        0,
        "Least privilege dictates that entities are granted only the minimum permissions necessary to perform their legitimate duties, restricting an attacker's blast radius upon compromise.",
        "PCES-30-01 Block 1.1 - Security Principles",
        ["least-privilege", "security-principles", "blast-radius"],
        "Beginner"
    ),
    (
        "In security auditing, what does 'Auditability' require of log entries?",
        """import json
import time

def format_audit_log(actor_id: str, action: str, target: str, outcome: str) -> str:
    return json.dumps({
        "timestamp_utc": time.time(),
        "actor": actor_id,
        "action": action,
        "target": target,
        "outcome": outcome,
        "source_ip": "192.168.1.50"
    })
""",
        [
            "Logs must be formatted as raw binary blobs without timestamps",
            "Logs must contain enough unambiguous context (who, what, when, where, outcome) to reconstruct security events",
            "Logs must be deleted automatically every 24 hours to preserve hard disk space",
            "Logs must only record successful logins and ignore failed attempts"
        ],
        1,
        "Auditability requires recording sufficient detail—such as timestamps, actor IDs, actions taken, targets, and outcomes—to allow forensic investigation and non-repudiation.",
        "PCES-30-01 Block 1.1 - Auditability",
        ["auditability", "logging", "forensics"],
        "Beginner"
    ),
    (
        "Which of the following would NOT be classified as an Availability threat?",
        """# Evaluating threats
# Threat A: Ransomware encrypting the file system and demanding Bitcoin
# Threat B: SYN Flood exhausting kernel TCP socket connections
# Threat C: Eavesdropper sniffing unencrypted HTTP cookies on public Wi-Fi
# Threat D: Fiber-optic cable severed by construction equipment
""",
        [
            "Ransomware encrypting production disks",
            "SYN Flood overwhelming socket connections",
            "Eavesdropping on unencrypted cookies over public Wi-Fi",
            "Severed physical network fiber cable"
        ],
        2,
        "Eavesdropping on cookies is a Confidentiality threat (unauthorized access to sensitive data). The other options deny or prevent authorized access to services or data (Availability threats).",
        "PCES-30-01 Block 1.1 - CIA Classification",
        ["cia-triad", "availability", "confidentiality"],
        "Beginner"
    ),
    (
        "How does Multi-Factor Authentication (MFA) extend beyond single-factor password authentication?",
        """# MFA verification logic
def verify_mfa_login(has_password: bool, has_totp_code: bool, has_biometric: bool) -> bool:
    # Requires at least two distinct authentication factors
    factors = sum([has_password, has_totp_code, has_biometric])
    return factors >= 2
""",
        [
            "It requires two different passwords from the same person",
            "It requires evidence from two or more distinct categories: something you know, something you have, or something you are",
            "It requires logging in from two separate computers at the exact same second",
            "It requires passing an automated reCAPTCHA challenge twice"
        ],
        1,
        "MFA requires two or more independent credential categories: Knowledge (something you know), Possession (something you have), or Inherence (something you are).",
        "PCES-30-01 Block 1.1 - Authentication & MFA",
        ["mfa", "authentication", "identity"],
        "Beginner"
    ),
    (
        "What security problem arises when a system relies solely on Obscurity ('Security through Obscurity') rather than sound architecture?",
        """# Bad practice: Relying on hidden secret URL
# Assuming nobody can find: /api/v1/hidden_admin_delete_all_users_xyz987
def handle_request(path: str):
    if path == "/api/v1/hidden_admin_delete_all_users_xyz987":
        delete_all_users()  # No authentication check!
""",
        [
            "Obscurity violates the Kerckhoffs's principle: once the secret method/URL is discovered, the entire security breaks down",
            "Obscurity uses too much memory in Python data structures",
            "Obscurity causes SSL certificates to expire prematurely",
            "Obscurity prevents the Python interpreter from compiling bytecode into .pyc files"
        ],
        0,
        "Security through obscurity relies on the secrecy of the design or implementation. Once discovered through fuzzing, reverse engineering, or leaks, the lack of real controls leaves the system defenseless.",
        "PCES-30-01 Block 1.1 - Security Principles",
        ["obscurity", "kerckhoffs", "principles"],
        "Intermediate"
    ),
    (
        "What is the term for ensuring that data has not been altered or deleted by unauthorized entities during both storage and transit?",
        """import hmac
import hashlib

def verify_tamper_proof(key: bytes, message: bytes, received_mac: bytes) -> bool:
    expected_mac = hmac.new(key, message, hashlib.sha256).digest()
    return hmac.compare_digest(expected_mac, received_mac)
""",
        [
            "Data Confidentiality",
            "Data Integrity",
            "Data Deduplication",
            "Data Normalization"
        ],
        1,
        "Data Integrity is the state where data remains accurate, complete, and untampered with across storage, transmission, and processing lifecycles.",
        "PCES-30-01 Block 1.1 - Data Integrity",
        ["integrity", "hmac", "data-protection"],
        "Beginner"
    )
]

# --- CHAPTER 1.2: IT Threats, Vulnerabilities & Threat Actors (Cards 21-40) ---
ch1_2 = [
    (
        "What is the fundamental difference between a 'Threat', a 'Vulnerability', and a 'Risk'?",
        """# Risk calculation formula
# Risk = Threat x Vulnerability x Impact
def calculate_risk(threat_likelihood: float, vulnerability_severity: float, impact_value: float) -> float:
    return threat_likelihood * vulnerability_severity * impact_value
""",
        [
            "A threat is a weakness; a vulnerability is the attacker; risk is the firewall",
            "A threat is a potential danger or actor; a vulnerability is a flaw or weakness; risk is the potential loss when a threat exploits a vulnerability",
            "Risk is the patch; threat is the software version; vulnerability is the cost of hardware",
            "Threat and vulnerability are synonymous terms in cybersecurity standards"
        ],
        1,
        "A threat is any circumstance or event with the potential to adversely impact a system. A vulnerability is a flaw or weakness in design, code, or configuration. Risk is the expected harm if a threat exploits a vulnerability.",
        "PCES-30-01 Block 1.2 - Threats, Vulnerabilities & Risk",
        ["threat-vs-vulnerability", "risk-formula", "terminology"],
        "Beginner"
    ),
    (
        "Which threat actor category is typically defined as an attacker with low technical skill who utilizes pre-built scripts and publicly available exploit tools?",
        """# Script kiddie behavioral signature:
# Running uncustomized downloaded exploit scripts against random IP ranges
# e.g., python3 mass_scanner_exploit.py 192.168.1.0/24
""",
        [
            "Advanced Persistent Threat (APT)",
            "Nation-state sponsored intelligence agency",
            "Script Kiddie",
            "Insider threat"
        ],
        2,
        "A 'Script Kiddie' is an unsophisticated attacker who uses automated tools, exploits, or scripts developed by others without deep understanding of the underlying technology.",
        "PCES-30-01 Block 1.2 - Threat Actors",
        ["threat-actors", "script-kiddies", "basics"],
        "Beginner"
    ),
    (
        "What characterizes an 'Advanced Persistent Threat' (APT)?",
        """# APT Characteristics:
# - Highly sophisticated, well-funded (often nation-state backed)
# - Long-term persistent stealth access rather than immediate disruptive destruction
# - Custom-developed zero-day exploits and multi-stage evasion
""",
        [
            "Random DDoS attacks conducted by disgruntled gaming enthusiasts",
            "A sophisticated, well-resourced adversary that gains unauthorized access to a network and remains undetected for an extended period",
            "An automated web crawler that indexes pages for search engines",
            "A system administrator accidentally running rm -rf on a test environment"
        ],
        1,
        "APTs are sophisticated, patient, well-resourced adversaries (often state-sponsored) who maintain stealthy, long-term access to high-value networks to exfiltrate intelligence.",
        "PCES-30-01 Block 1.2 - Threat Actors",
        ["threat-actors", "apt", "nation-state"],
        "Intermediate"
    ),
    (
        "Why is an 'Insider Threat' uniquely dangerous to an organization compared to external adversaries?",
        """# Insider risk simulation
def check_insider_access(employee_role: str, db_access: bool):
    # Insiders already possess legitimate credentials, network access,
    # and institutional knowledge of where sensitive data resides
    return db_access and employee_role in ["dba", "sysadmin", "developer"]
""",
        [
            "Insiders only attack physical server cables with scissors",
            "Insiders already possess legitimate credentials, authorized network access, and knowledge of internal defenses",
            "Insiders are immune to legal prosecution under cybersecurity law",
            "Insiders cannot be detected by any modern log monitoring tool"
        ],
        1,
        "Insider threats (disgruntled, negligent, or compromised employees) already have authorized access, bypass perimeter firewalls, and know where valuable data and weak points are located.",
        "PCES-30-01 Block 1.2 - Threat Actors",
        ["insider-threat", "threat-landscape", "risk"],
        "Beginner"
    ),
    (
        "What is a 'Zero-Day Vulnerability'?",
        """# Zero-day definition:
# Flaw known to attackers (or security researchers) before the vendor has released a patch
vendor_patch_available = False
exploit_in_the_wild = True
is_zero_day = exploit_in_the_wild and not vendor_patch_available
""",
        [
            "A bug that takes exactly zero days to fix automatically",
            "A software security flaw that is known to attackers or researchers but has no official vendor patch or fix available",
            "A vulnerability that only affects software installed on day 0 of a month",
            "A hardware defect that causes instant CPU reboot at 00:00 UTC"
        ],
        1,
        "A zero-day vulnerability is a flaw in software or hardware that is unknown to the vendor, or known but unpatched, leaving 0 days of vendor protection for users.",
        "PCES-30-01 Block 1.2 - Vulnerabilities",
        ["zero-day", "vulnerabilities", "cve"],
        "Beginner"
    ),
    (
        "What standard dictionary provides standardized identifiers for publicly known cybersecurity vulnerabilities (e.g., CVE-2021-44228)?",
        """# Sample vulnerability identification dictionary entry
vuln_record = {
    "identifier": "CVE-2021-44228",
    "name": "Log4Shell",
    "base_score": 10.0,
    "description": "Remote code execution in Apache Log4j JNDI lookup"
}
""",
        [
            "CVE (Common Vulnerabilities and Exposures)",
            "DNS (Domain Name System)",
            "DHCP (Dynamic Host Configuration Protocol)",
            "IEEE (Institute of Electrical and Electronics Engineers)"
        ],
        0,
        "CVE (Common Vulnerabilities and Exposures) is the industry standard catalog operated by MITRE providing unique identifiers for publicly disclosed security flaws.",
        "PCES-30-01 Block 1.2 - Vulnerability Identifiers",
        ["cve", "mitre", "vulnerability-management"],
        "Beginner"
    ),
    (
        "What does the Common Vulnerability Scoring System (CVSS) measure?",
        """# Evaluating CVSS Base Score range:
# 0.0: None
# 0.1 - 3.9: Low
# 4.0 - 6.9: Medium
# 7.0 - 8.9: High
# 9.0 - 10.0: Critical
def classify_cvss(score: float) -> str:
    if score >= 9.0: return "CRITICAL"
    if score >= 7.0: return "HIGH"
    if score >= 4.0: return "MEDIUM"
    return "LOW"
""",
        [
            "The financial stock market price of the affected software vendor",
            "The standardized numerical severity and exploitability characteristics of a vulnerability",
            "The download speed of patch files over HTTPS",
            "The number of lines of Python code required to fix a bug"
        ],
        1,
        "CVSS provides an open framework for communicating the characteristics and severity of software vulnerabilities via a numerical score from 0.0 to 10.0.",
        "PCES-30-01 Block 1.2 - CVSS Scoring",
        ["cvss", "severity", "vulnerability-scoring"],
        "Beginner"
    ),
    (
        "What is an 'Attack Surface' in IT systems security?",
        """# Conceptual Attack Surface evaluation
open_ports = [22, 80, 443, 3306, 8080]
running_daemons = ["sshd", "nginx", "mysqld", "tomcat"]
unauthenticated_endpoints = ["/login", "/register", "/public-feed"]

# Attack surface = total sum of all entry points accessible to an attacker
""",
        [
            "The physical exterior metal casing of a rack-mounted server",
            "The total sum of all possible points (entry points, protocols, code, interfaces) where an unauthorized user can try to enter or extract data",
            "The pixel resolution of a cybersecurity dashboard monitor",
            "The total number of antivirus agents installed on employee workstations"
        ],
        1,
        "The attack surface consists of all reachable and exploitable vulnerabilities across software, hardware, networks, and humans. Hardening aims to minimize this surface.",
        "PCES-30-01 Block 1.2 - Attack Surface",
        ["attack-surface", "hardening", "architecture"],
        "Beginner"
    ),
    (
        "Which of the following describes an 'Attack Vector'?",
        """# Threat Model mapping:
# Vulnerability: Unsanitized input parameter
# Threat Actor: External cybercriminal
# Attack Vector: Malicious phishing email with weaponized PDF attachment
""",
        [
            "The specific pathway or method an attacker uses to deliver a payload or exploit a vulnerability",
            "The mathematical angle of a wireless antenna router",
            "The cryptographic key used in AES-256 GCM mode",
            "The total monetary budget allocated to cybersecurity insurance"
        ],
        0,
        "An attack vector is the route, channel, or technique (e.g., email phishing, unpatched exposed port, USB drive) that a threat actor uses to gain unauthorized access.",
        "PCES-30-01 Block 1.2 - Attack Vectors",
        ["attack-vector", "threat-modeling", "entry-points"],
        "Beginner"
    ),
    (
        "A company discovers an open S3 cloud storage bucket containing unencrypted customer passport scans accessible to anyone on the Internet. What is this classified as?",
        """# Cloud resource configuration check
bucket_policy = {
    "Principal": "*",
    "Action": "s3:GetObject",
    "Effect": "Allow"
}
# Publicly accessible without authentication!
""",
        [
            "A Zero-Day buffer overflow exploit",
            "A Security Misconfiguration vulnerability",
            "A hardware firmware malfunction",
            "A distributed denial of service attack"
        ],
        1,
        "Leaving default settings, unprotected public storage buckets, or open debug endpoints is classified as a Security Misconfiguration vulnerability.",
        "PCES-30-01 Block 1.2 - Misconfigurations",
        ["misconfiguration", "cloud-security", "s3"],
        "Beginner"
    ),
    (
        "What is the difference between a Vulnerability Assessment and a Penetration Test?",
        """# Security testing approaches
# Approach A: Automated scanner cataloging known CVEs across all subnets
# Approach B: Human authorized ethical hacker exploiting a flaw to test defensive depth
""",
        [
            "Vulnerability assessment identifies and catalogs known flaws; penetration testing actively exploits vulnerabilities to determine the real-world impact and depth of compromise",
            "Vulnerability assessment is illegal; penetration testing is required by law",
            "Vulnerability assessment only tests hardware; penetration testing only tests Python code",
            "There is no difference between the two terms"
        ],
        0,
        "A vulnerability assessment scans for and catalogs potential weaknesses. A penetration test goes further by attempting to safely exploit vulnerabilities to prove impact and test detection/response.",
        "PCES-30-01 Block 1.2 - Vulnerability vs Pen Testing",
        ["vulnerability-assessment", "penetration-testing", "secops"],
        "Intermediate"
    ),
    (
        "Which threat actor motivation is primarily driven by political, ideological, or social causes rather than purely financial gain?",
        """# Classifying motivation
def classify_actor_motivation(motive: str):
    if motive in ["political_statement", "whistleblowing", "ideology"]:
        return "Hacktivist"
    elif motive == "monetary_extortion":
        return "Cybercriminal"
""",
        [
            "Hacktivist",
            "Script Kiddie",
            "Organized cybercrime syndicate",
            "Automated adware botnet"
        ],
        0,
        "Hacktivists launch cyber attacks (e.g., website defacements, data leaks, DDoS) to promote social, religious, environmental, or political agendas.",
        "PCES-30-01 Block 1.2 - Threat Actors",
        ["hacktivism", "threat-actors", "motivation"],
        "Beginner"
    ),
    (
        "What type of threat involves an attacker exploiting human psychology rather than software code bugs to gain unauthorized access?",
        """# Human manipulation scenario
caller_id = "Internal Helpdesk"
request = "Please read me your two-factor SMS code to reset your account password."
""",
        [
            "Buffer overflow attack",
            "Social Engineering",
            "Cross-Site Scripting (XSS)",
            "SQL Injection"
        ],
        1,
        "Social engineering manipulates individuals into divulging confidential information, clicking malicious links, or performing actions that compromise security.",
        "PCES-30-01 Block 1.2 - Social Engineering",
        ["social-engineering", "human-factors", "threats"],
        "Beginner"
    ),
    (
        "In a threat risk matrix, how is Risk Level typically evaluated?",
        """def risk_matrix(likelihood: str, impact: str) -> str:
    # High Likelihood + High Impact = Critical Risk
    matrix = {
        ("High", "High"): "CRITICAL",
        ("High", "Medium"): "HIGH",
        ("Low", "High"): "HIGH",
        ("Low", "Low"): "LOW"
    }
    return matrix.get((likelihood, impact), "MEDIUM")
""",
        [
            "By multiplying CPU clock speed by RAM capacity",
            "By evaluating the Likelihood of occurrence against the magnitude of Impact",
            "By counting the total lines of Python source code in the repository",
            "By calculating the physical distance between data centers"
        ],
        1,
        "Risk is assessed by evaluating the probability (likelihood) of a threat exploiting a vulnerability and the resulting business, financial, or operational impact.",
        "PCES-30-01 Block 1.2 - Risk Assessment",
        ["risk-matrix", "likelihood", "impact"],
        "Beginner"
    ),
    (
        "What is the National Vulnerability Database (NVD)?",
        """# Querying vulnerability data
# NVD synchronizes with CVE list and enhances it with CVSS scores,
# Common Platform Enumeration (CPE), and CWE weakness classifications
""",
        [
            "A proprietary anti-virus signature file sold by Microsoft",
            "The US government repository of standards-based vulnerability management data integrating CVE and CVSS",
            "A private forum where zero-day exploits are auctioned",
            "A Python package manager replacing PyPI for security tools"
        ],
        1,
        "The NVD (National Vulnerability Database), maintained by NIST, is the official repository of vulnerability management data, providing CVSS ratings, CWE mappings, and fix advisories.",
        "PCES-30-01 Block 1.2 - NVD & CVE",
        ["nvd", "nist", "vulnerability-database"],
        "Beginner"
    ),
    (
        "Which of the following is a Common Weakness Enumeration (CWE)?",
        """# Sample CWE reference
# CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')
# CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')
""",
        [
            "A community-developed list of common software and hardware weakness types/categories",
            "A Python standard library module for encrypting passwords",
            "A wireless networking protocol for IoT smart home gadgets",
            "An international trade agreement for fiber optic cabling"
        ],
        0,
        "CWE (Common Weakness Enumeration) is a formal taxonomy of software architecture, design, and code weaknesses that can lead to exploitable security vulnerabilities.",
        "PCES-30-01 Block 1.2 - CWE Taxonomy",
        ["cwe", "vulnerabilities", "taxonomy"],
        "Intermediate"
    ),
    (
        "What is 'Patch Management' in the context of IT systems security?",
        """# Checking package updates in Linux/Python
# Automated scanning for vulnerable installed packages:
# pip list --outdated
# safety check / pip-audit
""",
        [
            "The systematic process of identifying, acquiring, testing, and installing updates to remediate software vulnerabilities",
            "Sewing protective physical covers over server racks in damp basements",
            "Renaming variable names in Python scripts to obfuscate them",
            "Buying new laptop computers whenever a browser crashes"
        ],
        0,
        "Patch management is the continuous lifecycle of discovering, testing, approving, and deploying vendor security updates to eliminate known vulnerabilities.",
        "PCES-30-01 Block 1.2 - Patch Management",
        ["patching", "vulnerability-management", "remediation"],
        "Beginner"
    ),
    (
        "Why is running unsupported, end-of-life (EOL) operating systems or software dangerous?",
        """# Operating system support check
def is_os_supported(release_year: int) -> bool:
    current_year = 2026
    # Software past EOL receives zero security patches from vendors
    return (current_year - release_year) < 5
""",
        [
            "EOL software cannot run Python 3 scripts under any circumstances",
            "The vendor no longer produces security patches, leaving newly discovered vulnerabilities permanently unfixable",
            "EOL software automatically erases the local hard drive after 30 days",
            "Internet Service Providers block all network packets originating from older OS versions"
        ],
        1,
        "End-of-life software no longer receives security patches, meaning any new vulnerabilities discovered can be weaponized by threat actors with zero resistance.",
        "PCES-30-01 Block 1.2 - Vulnerability Exposure",
        ["eol", "unsupported-software", "patching"],
        "Beginner"
    ),
    (
        "What is 'Threat Modeling' in the secure development lifecycle?",
        """# STRIDE threat model categories:
# S - Spoofing
# T - Tampering
# R - Repudiation
# I - Information Disclosure
# D - Denial of Service
# E - Elevation of Privilege
""",
        [
            "A structured process for identifying, analyzing, and prioritizing potential threats and attack vectors before or during software design",
            "An AI tool that writes marketing copy for cybersecurity software",
            "A 3D simulation of a server room fire",
            "A physical security guard patrolling the office perimeter"
        ],
        0,
        "Threat modeling is an engineering process (often using frameworks like STRIDE) to systematically discover potential threats, design mitigations, and improve security early in development.",
        "PCES-30-01 Block 1.2 - Threat Modeling",
        ["threat-modeling", "stride", "sdlc"],
        "Intermediate"
    ),
    (
        "In a threat intelligence report, what does an 'Indicator of Compromise' (IoC) refer to?",
        """# Sample Indicators of Compromise (IoCs)
ioc_manifest = {
    "malicious_ip": "198.51.100.23",
    "c2_domain": "update-service-check.biz",
    "malware_sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
}
""",
        [
            "Pieces of digital evidence, artifacts, or signatures that indicate a system or network has been breached",
            "The invoice receipt sent by a cybersecurity insurance broker",
            "The physical fingerprint of a computer manufacturer",
            "The Wi-Fi password printed on the back of an office router"
        ],
        0,
        "An Indicator of Compromise (IoC) is forensic evidence (such as malware hashes, bad IP addresses, abnormal registry keys, or phishing URLs) pointing to a security breach.",
        "PCES-30-01 Block 1.2 - Threat Intelligence",
        ["ioc", "threat-intel", "forensics"],
        "Beginner"
    )
]

# --- CHAPTER 1.3: Common Attack Types & Threat Vectors (Cards 41-60) ---
ch1_3 = [
    (
        "What type of social engineering attack specifically targets high-profile executives or individuals with high-level access using customized, convincing emails?",
        """# Analyzing suspicious inbound email
email_headers = {
    "To": "cfo@company.com",
    "From": "ceo-urgent@company-internal-review.net",
    "Subject": "CONFIDENTIAL: Immediate wire transfer for overseas acquisition"
}
""",
        [
            "Whaling",
            "Vishing",
            "Drive-by download",
            "Typosquatting"
        ],
        0,
        "Whaling is a specialized form of spear phishing that specifically targets high-ranking executives (CEOs, CFOs) or individuals with high authority to execute fraudulent wire transfers or disclose sensitive data.",
        "PCES-30-01 Block 1.3 - Attack Types",
        ["whaling", "spear-phishing", "social-engineering"],
        "Beginner"
    ),
    (
        "What is the difference between Phishing and Spear Phishing?",
        """# Spear phishing personalization check
def is_spear_phishing(target_name: str, email_body: str) -> bool:
    # Uses specific recon: target's real name, company role, project names
    return target_name in email_body and "Q3 Finance Audit" in email_body
""",
        [
            "Phishing is mass, untargeted spam; Spear Phishing is highly customized and targeted at a specific individual or organization",
            "Phishing is conducted via SMS; Spear Phishing is conducted exclusively via voice phone calls",
            "Phishing is legal; Spear Phishing is illegal",
            "Phishing uses Python; Spear Phishing uses C++"
        ],
        0,
        "Generic phishing casts a wide net with mass emails. Spear phishing is carefully researched and tailored with personal details to deceive a specific person or company.",
        "PCES-30-01 Block 1.3 - Attack Types",
        ["phishing", "spear-phishing", "social-engineering"],
        "Beginner"
    ),
    (
        "What is 'Ransomware'?",
        """# Ransomware behavior signature
# 1. Traverse directory tree
# 2. Encrypt documents using AES/RSA
# 3. Delete volume shadow copies (vssadmin delete shadows)
# 4. Display ransom note (HOW_TO_DECRYPT_FILES.txt)
""",
        [
            "A malware type that encrypts the victim's files and demands payment for the decryption key",
            "A hardware component that charges a fee every time the CPU executes an instruction",
            "A legitimate backup tool created by open-source Linux distributions",
            "A protocol that speeds up web page downloads over satellite connections"
        ],
        0,
        "Ransomware is malicious software that encrypts user or enterprise files, demanding extortion payment (often in cryptocurrency) in exchange for the decryption key.",
        "PCES-30-01 Block 1.3 - Ransomware",
        ["ransomware", "malware", "cryptography"],
        "Beginner"
    ),
    (
        "How does a Computer Worm differ from a Computer Virus?",
        """# Malware replication classification
def spreads_autonomously(malware_type: str) -> bool:
    # Worms propagate across networks without human intervention or host file execution
    # Viruses require a host file and user execution to spread
    return malware_type == "worm"
""",
        [
            "A worm replicates and spreads across networks autonomously without user intervention; a virus requires a host file and user interaction to spread",
            "A worm is harmless; a virus always destroys the computer BIOS",
            "A worm only infects mobile phones; a virus only infects mainframe computers",
            "A worm can only be written in Python; a virus can only be written in assembly"
        ],
        0,
        "A virus attaches to a host executable and requires user action to propagate. A worm is self-replicating and spreads across network vulnerabilities automatically without user intervention.",
        "PCES-30-01 Block 1.3 - Malware Types",
        ["worm", "virus", "malware"],
        "Beginner"
    ),
    (
        "What characterizes a 'Trojan Horse' in malware taxonomy?",
        """# Trojan disguised as a utility
# filename: "Free_PDF_Converter_Installer.exe"
# Inside: Legitimate PDF converter + hidden backdoor reverse shell
""",
        [
            "Software that masquerades as legitimate or beneficial software while concealing malicious functionality",
            "A hardware bug discovered in ancient microprocessors",
            "A networking protocol used to route packets between Greek universities",
            "An antivirus scanner that operates inside an encrypted enclave"
        ],
        0,
        "A Trojan horse misleads users of its true intent by appearing as a desirable program (e.g., game, utility, crack) while carrying a hidden malicious payload.",
        "PCES-30-01 Block 1.3 - Malware Taxonomy",
        ["trojan", "malware", "deception"],
        "Beginner"
    ),
    (
        "What is a 'Distributed Denial of Service' (DDoS) attack, and how is it typically executed?",
        """# Distributed botnet architecture
# Command & Control (C2) -> Millions of compromised IoT bots -> Target web service
def simulate_ddos(bot_count: int, requests_per_bot: int):
    total_traffic = bot_count * requests_per_bot
    return f"Flooding target with {total_traffic} requests/sec"
""",
        [
            "A single computer sending one malformed packet that crashes a router",
            "A coordinated flood of overwhelming traffic directed at a target from thousands or millions of distributed, compromised devices (botnet)",
            "An attacker cutting power cables to a server rack",
            "A legal court injunction ordering a website to shut down"
        ],
        1,
        "DDoS attacks leverage a botnet (network of compromised systems) to flood a target's bandwidth or application resources from many geographical sources, overwhelming its capacity.",
        "PCES-30-01 Block 1.3 - DDoS",
        ["ddos", "botnet", "availability"],
        "Beginner"
    ),
    (
        "What attack occurs when a malicious actor positions themselves between two communicating parties to intercept, eavesdrop, or alter communications without their knowledge?",
        """# ARP Spoofing / Man-in-the-Middle concept
# Attacker tells Client: "I am Gateway (192.168.1.1)"
# Attacker tells Gateway: "I am Client (192.168.1.100)"
# Traffic now routes through attacker machine
""",
        [
            "Man-in-the-Middle (MitM) attack",
            "Cross-Site Request Forgery (CSRF)",
            "SQL Injection",
            "Denial of Service (DoS)"
        ],
        0,
        "A Man-in-the-Middle (MitM) attack occurs when an adversary intercepts, relays, or modifies messages between two parties who believe they are directly communicating with each other.",
        "PCES-30-01 Block 1.3 - MitM Attacks",
        ["mitm", "eavesdropping", "network-attacks"],
        "Beginner"
    ),
    (
        "What is 'Drive-by Download' in web security?",
        """# Drive-by download scenario
# User visits compromised website
# Malicious JavaScript exploits browser vulnerability in background
# Malware downloads and executes without explicit user consent
""",
        [
            "Downloading software while riding in a car connected to cellular Wi-Fi",
            "The unintentional download of malicious software onto a device merely by visiting a compromised or malicious web page without user clicking or consenting",
            "Purchasing hard drives from an online marketplace",
            "Updating Python packages using the pip command line tool"
        ],
        1,
        "Drive-by downloads occur when visiting a website triggers the download and installation of malicious code by exploiting browser or plugin vulnerabilities without user consent.",
        "PCES-30-01 Block 1.3 - Attack Types",
        ["drive-by-download", "web-security", "browser-exploit"],
        "Intermediate"
    ),
    (
        "What is 'Credential Stuffing'?",
        """# Automated credential stuffing concept
# Using breach dumps (user:password combinations) to test other websites
import requests

def test_breached_credentials(username, password):
    # Tests if user reused the same password on Target Site
    res = requests.post("https://target.com/login", data={"user": username, "pwd": password})
    return res.status_code == 200
""",
        [
            "Physically writing passwords on sticky notes and stuffing them into a drawer",
            "Automated injection of stolen pairs of usernames/passwords across multiple websites, exploiting user password reuse",
            "A brute-force attack testing every combination of numbers from 0000 to 9999",
            "Encrypting a database of passwords using triple DES"
        ],
        1,
        "Credential stuffing is the automated testing of large lists of compromised credentials obtained from prior breaches against other sites, taking advantage of people reusing passwords.",
        "PCES-30-01 Block 1.3 - Password Attacks",
        ["credential-stuffing", "passwords", "authentication"],
        "Beginner"
    ),
    (
        "How does a Password Spraying attack differ from a traditional Brute-Force password attack?",
        """# Password spraying strategy
# Instead of: 1 user + 10,000 passwords (triggers account lockout!)
# Spraying: 10,000 users + 1 common password ("Spring2026!") (avoids lockouts!)
""",
        [
            "Password spraying tests a single common password across many different user accounts to avoid account lockout thresholds",
            "Password spraying generates rainbow tables using graphic cards",
            "Password spraying only targets Linux root accounts via SSH",
            "Password spraying physically sprays liquids on server keyboards"
        ],
        0,
        "Password spraying avoids account lockouts by attempting one or a few common passwords (e.g., 'Company2026!') against thousands of user accounts rather than hammering one account with thousands of guesses.",
        "PCES-30-01 Block 1.3 - Password Attacks",
        ["password-spraying", "brute-force", "lockout"],
        "Intermediate"
    )
]

print(f"Loaded {len(ch1_1)} cards for Ch 1.1, {len(ch1_2)} cards for Ch 1.2, {len(ch1_3)} cards for Ch 1.3")
