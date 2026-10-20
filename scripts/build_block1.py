#!/usr/bin/env python3
import json
import os

cards = []

def add_c(id_num, chap, cat, diff, q, snippet, opts, ans, exp, ref, tags):
    cards.append({
        "id": f"pces-1-{id_num:03d}",
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

# --- CHAPTER 1.1: The CIA Triad & Beyond (Cards 1-20) ---
add_c(1, "1.1", "CIA Triad", "Beginner",
      "Which core pillar of the CIA Triad is directly violated when an attacker sniffs unencrypted cleartext database passwords over Wi-Fi?",
      "# Packet inspection for plaintext credentials\nimport socket\ndef check_packet(payload: bytes):\n    if b'password=' in payload:\n        print('[ALERT] Sensitive credential exposed in transit!')",
      ["Integrity", "Confidentiality", "Availability", "Non-repudiation"],
      1,
      "Confidentiality ensures that sensitive information is kept secret from unauthorized entities. Sniffing passwords in transit is a direct breach of confidentiality.",
      "PCES-30-01 Block 1.1 - The CIA Triad",
      ["cia-triad", "confidentiality", "network-traffic"])

add_c(2, "1.1", "CIA Triad", "Beginner",
      "A rogue script silently modifies an existing customer shipping address in the orders database. Which security goal has been violated?",
      "# Validating record checksum against unauthorized changes\nimport hashlib\ndef verify_record(data: bytes, expected_hash: str) -> bool:\n    return hashlib.sha256(data).hexdigest() == expected_hash",
      ["Availability", "Integrity", "Accountability", "Authentication"],
      1,
      "Integrity guarantees that data has not been altered or tampered with by unauthorized parties.",
      "PCES-30-01 Block 1.1 - The CIA Triad",
      ["cia-triad", "integrity", "data-tampering"])

add_c(3, "1.1", "CIA Triad", "Beginner",
      "An attacker sends millions of junk UDP packets to an API gateway, causing the server CPU to reach 100% and rejecting valid customer requests. Which pillar is attacked?",
      "# Health check detecting degraded service availability\nimport urllib.request\ntry:\n    res = urllib.request.urlopen('https://api.example.com/health', timeout=2)\nexcept Exception as err:\n    print('Service down or timing out!')",
      ["Confidentiality", "Integrity", "Availability", "Authorization"],
      2,
      "Availability ensures that services and systems remain accessible and responsive to authorized users when needed. Denial of service impairs availability.",
      "PCES-30-01 Block 1.1 - The CIA Triad",
      ["cia-triad", "availability", "dos"])

add_c(4, "1.1", "Extended Security Concepts", "Intermediate",
      "What security property guarantees that a user who performed a critical transaction cannot later falsely deny having done so?",
      "# Digital signature verification providing non-repudiation\n# Signature = PrivateKey(Hash(Transaction))\n# Anyone with PublicKey can verify that only the key holder signed it",
      ["Confidentiality", "Non-repudiation", "High Availability", "Least Privilege"],
      1,
      "Non-repudiation provides indisputable cryptographic proof that a specific party performed an action or sent a message, preventing them from denying it.",
      "PCES-30-01 Block 1.1 - Extended Security Concepts",
      ["non-repudiation", "digital-signatures", "authenticity"])

add_c(5, "1.1", "Extended Security Concepts", "Beginner",
      "Which security attribute verifies that a communicating system or message origin is genuine and not an imposter?",
      "# Verification of certificate origin in TLS\nimport ssl\ncontext = ssl.create_default_context()\n# Validates remote server authenticity against trusted CA root certificates",
      ["Authenticity", "Availability", "Anonymity", "Asymmetry"],
      0,
      "Authenticity validates that an identity, entity, or message origin is genuine and corresponds to what it claims to be.",
      "PCES-30-01 Block 1.1 - Extended Security Concepts",
      ["authenticity", "identity", "cia-triad"])

add_c(6, "1.1", "Extended Security Concepts", "Beginner",
      "Which operational mechanism is most crucial for enforcing 'Accountability' in a secure enterprise environment?",
      "# Audit event logging with user identity and timestamp\nimport logging, time\ndef log_admin_action(admin_id: str, action: str):\n    logging.info(f'time={time.time()} user={admin_id} action={action}')",
      ["Data compression algorithms", "Tamper-resistant audit logging", "Dynamic RAM allocation", "Increasing network MTU size"],
      1,
      "Accountability requires that every user or system action can be traced back to its specific originator, which relies on secure, immutable audit logs.",
      "PCES-30-01 Block 1.1 - Extended Security Concepts",
      ["accountability", "audit-logs", "tracing"])

add_c(7, "1.1", "CIA Triad", "Beginner",
      "A developer prints plaintext API secret keys into standard application output logs that are accessible to all junior interns. What has been breached?",
      "# Insecure logging practice\napi_secret = 'sk_live_99482710398471'\nprint(f'DEBUG: initializing client with {api_secret}')",
      ["Integrity", "Confidentiality", "Availability", "Non-repudiation"],
      1,
      "Exposing secret keys to unauthorized viewers is a direct violation of confidentiality.",
      "PCES-30-01 Block 1.1 - The CIA Triad",
      ["confidentiality", "secrets", "logging"])

add_c(8, "1.1", "CIA Triad", "Intermediate",
      "An unauthorized database query changes the status of an unpaid invoice from 'PENDING' to 'PAID' without moving funds. This is a violation of:",
      "# Database state alteration\nquery = \"UPDATE invoices SET status = 'PAID' WHERE id = 401;\"\n# Executed without payment validation",
      ["Confidentiality", "Availability", "Integrity", "Fault Tolerance"],
      2,
      "Changing the factual state or accuracy of information without authorization violates data integrity.",
      "PCES-30-01 Block 1.1 - The CIA Triad",
      ["integrity", "database", "tampering"])

add_c(9, "1.1", "Integrity & Hashing", "Beginner",
      "How does the cryptographic 'avalanche effect' in SHA-256 support data integrity verification?",
      "import hashlib\nh1 = hashlib.sha256(b'PCES 2026').hexdigest()\nh2 = hashlib.sha256(b'pces 2026').hexdigest()\n# Even a 1-bit case difference creates a completely different output",
      ["It hides the file size by padding with random zeroes", "A tiny modification in the input causes a drastic, unpredictable change in the hash digest", "It encrypts the payload so that only a private key can decode it", "It recovers corrupt sectors on magnetic hard drives"],
      1,
      "The avalanche effect ensures that even a 1-bit change in data radically changes the hash output, making any tampering instantly detectable.",
      "PCES-30-01 Block 1.1 - Integrity & Hashing",
      ["integrity", "avalanche-effect", "sha256"])

add_c(10, "1.1", "Availability & Resilience", "Beginner",
      "What is the primary security goal of implementing redundant server power supplies and clustered database failovers?",
      "# High availability cluster configuration\ncluster_nodes = ['node-1.prod', 'node-2.prod', 'node-3.prod']\n# If node-1 fails, node-2 automatically assumes primary role",
      ["Confidentiality", "Availability", "Authentication", "Data minimization"],
      1,
      "Redundancy and failover architectures prevent single points of failure, ensuring system availability despite hardware or network issues.",
      "PCES-30-01 Block 1.1 - Availability & Resilience",
      ["availability", "redundancy", "clustering"])

add_c(11, "1.1", "Authentication vs Authorization", "Beginner",
      "In identity security, how do 'Authentication' and 'Authorization' differ?",
      "def handle_login_and_access(token, resource):\n    user = authenticate(token)   # Step A: Validate who you are\n    if not authorize(user, resource):  # Step B: Validate permissions\n        raise PermissionError('Denied')",
      ["Authentication determines permissions; Authorization checks who you are", "Authentication validates identity; Authorization determines what resources the identity can access", "Authentication requires biometric devices; Authorization requires passwords", "They are identical concepts in standard RFC documents"],
      1,
      "Authentication asks 'Who are you?' while Authorization asks 'What are you allowed to do?'.",
      "PCES-30-01 Block 1.1 - Auth Concepts",
      ["authentication", "authorization", "identity"])

add_c(12, "1.1", "Extended Security Concepts", "Intermediate",
      "A developer signs a software release package using their RSA private key. When users verify it using the vendor public key, what two security attributes are verified?",
      "# Verifying release tarball\n# 1. Vendor identity verified by public key match\n# 2. Package content has not been altered since signing",
      ["Confidentiality and Storage Compression", "Authenticity and Integrity", "Availability and Anonymity", "Redundancy and Throughput"],
      1,
      "Digital signatures prove Authenticity (the software originates from the authentic vendor) and Integrity (the binary has not been modified).",
      "PCES-30-01 Block 1.1 - Extended Security Concepts",
      ["authenticity", "integrity", "digital-signatures"])

add_c(13, "1.1", "Least Privilege", "Beginner",
      "What is the core principle of 'Least Privilege'?",
      "# Enforcing non-root container user\n# Dockerfile: USER nonroot\nimport os\nif os.getuid() == 0:\n    raise SystemExit('Running as root violates least privilege!')",
      ["Every user should have admin rights to speed up operations", "Users and processes must be granted only the minimum rights necessary to perform their legitimate tasks", "Passwords must be changed every 7 days", "All network traffic must be routed over UDP port 53"],
      1,
      "The Principle of Least Privilege limits access rights for users, applications, and processes to only what is strictly required to do their job, reducing the blast radius of any compromise.",
      "PCES-30-01 Block 1.1 - Least Privilege",
      ["least-privilege", "access-control", "blast-radius"])

add_c(14, "1.1", "CIA Triad", "Intermediate",
      "Which of the following incidents represents an Integrity violation rather than an Availability violation?",
      "# Incident analysis:\n# A: Database offline due to ransomware\n# B: Bank records updated to add $10,000 to an attacker account\n# C: Fiber cable cut by backhoe\n# D: SYN flood knocking server offline",
      ["Database offline due to ransomware encryption", "Bank balance records modified without legitimate deposit transactions", "Fiber-optic cable severed outside data center", "Web server unresponsive due to SYN flood"],
      1,
      "Unauthorized modification of data records is an integrity violation, while service downtime or server crashes are availability violations.",
      "PCES-30-01 Block 1.1 - The CIA Triad",
      ["integrity", "availability", "incident-classification"])

add_c(15, "1.1", "Authentication & MFA", "Beginner",
      "What are the three canonical authentication factor categories in Multi-Factor Authentication?",
      "# Multi-factor check: knowledge, possession, inherence\nfactor_1 = 'password'           # Something you know\nfactor_2 = 'hardware_yubikey'   # Something you have\nfactor_3 = 'fingerprint'        # Something you are",
      ["Something you know, something you have, and something you are", "Something you see, something you hear, and something you say", "Your username, your password, and your backup password", "Your IP address, your MAC address, and your subnet mask"],
      0,
      "The three standard MFA factor categories are Knowledge (something you know), Possession (something you have), and Inherence (something you are).",
      "PCES-30-01 Block 1.1 - Authentication & MFA",
      ["mfa", "authentication", "factors"])

add_c(16, "1.1", "Kerckhoffs Principle", "Intermediate",
      "What is Kerckhoffs's Principle regarding cryptographic system design?",
      "# Kerckhoffs's Principle: System security must depend only on the secrecy of the key,\n# not on the secrecy of the algorithm.\nfrom cryptography.fernet import Fernet\n# Algorithm (AES-128-CBC) is public; only Fernet key is secret!",
      ["A cryptosystem must be secure even if everything about the system except the key is public knowledge", "Cryptographic keys must be changed every 24 hours", "Encryption algorithms must always be kept strictly confidential from the public", "Public keys must never be shared across the Internet"],
      0,
      "Kerckhoffs's Principle states that a security system should remain secure even if its design and algorithms are publicly known, provided the key remains secret.",
      "PCES-30-01 Block 1.1 - Security Principles",
      ["kerckhoffs", "cryptography", "design-principles"])

add_c(17, "1.1", "CIA Triad", "Beginner",
      "Why does unencrypted HTTP fail to provide Confidentiality?",
      "# Plaintext HTTP communication\nimport urllib.request\n# HTTP traffic traverses intermediate routers in plaintext\n# Any router administrator can inspect request and response headers and body",
      ["HTTP requests are encrypted with ROT13", "Any network device along the transmission path can inspect the plaintext payload", "HTTP automatically terminates after 10 seconds", "HTTP cannot transmit binary files"],
      1,
      "Plaintext HTTP does not encrypt data in transit, allowing any intermediary device, proxy, or eavesdropper to read sensitive payloads.",
      "PCES-30-01 Block 1.1 - Confidentiality & HTTP",
      ["confidentiality", "http", "cleartext"])

add_c(18, "1.1", "Security Architecture", "Intermediate",
      "What is 'Defense-in-Depth' in security architecture?",
      "# Layered security defense\n# Layer 1: Cloud WAF\n# Layer 2: Network Firewall & DMZ\n# Layer 3: Application Authentication & Input Validation\n# Layer 4: Encrypted Database with Column-Level Grants",
      ["Relying exclusively on a single strong perimeter firewall", "Employing multiple layered security controls so that if one fails, others continue to protect assets", "Using multiple antivirus scanners simultaneously on one PC", "Installing deep machine learning models on network switches"],
      1,
      "Defense-in-depth is the practice of layering multiple defensive mechanisms across physical, network, system, and application tiers so no single failure allows full compromise.",
      "PCES-30-01 Block 1.1 - Security Principles",
      ["defense-in-depth", "architecture", "security-layers"])

add_c(19, "1.1", "Auditability", "Beginner",
      "What does 'Log Tampering' by an attacker attempt to destroy in an IT system?",
      "# Attacker attempting to cover tracks\n# rm -rf /var/log/auth.log\n# Destroys evidence linking their IP to the intrusion",
      ["Accountability and Forensics", "CPU processing speed", "Network bandwidth", "DRAM refresh cycles"],
      0,
      "Deleting or altering logs destroys accountability and forensic audit trails, preventing investigators from determining how the breach occurred and who was responsible.",
      "PCES-30-01 Block 1.1 - Auditability",
      ["auditability", "logs", "forensics"])

add_c(20, "1.1", "Non-repudiation", "Intermediate",
      "Why can symmetric key encryption alone NOT guarantee Non-repudiation?",
      "# Symmetric key shared between Alice and Bob\nkey = b'sixteen-byte-key'\n# Both Alice and Bob have the EXACT SAME KEY.\n# Either one could have generated and encrypted the message!",
      ["Symmetric keys are too slow to encrypt large messages", "Because the exact same secret key is shared by both parties, either party could have created the message", "Symmetric encryption does not work on modern 64-bit operating systems", "Symmetric keys cannot be stored in environment variables"],
      1,
      "With symmetric encryption, both parties hold the identical secret key. Therefore, either party could have generated the message, making non-repudiation impossible without asymmetric keys.",
      "PCES-30-01 Block 1.1 - Non-Repudiation",
      ["non-repudiation", "symmetric-crypto", "asymmetric"])

# --- CHAPTER 1.2: Threats, Vulnerabilities & Risk (Cards 21-40) ---
add_c(21, "1.2", "Risk Concepts", "Beginner",
      "What is the relationship between Threat, Vulnerability, and Risk?",
      "# Standard Risk Formula: Risk = Threat x Vulnerability x Impact\ndef calculate_risk(threat_prob: float, vuln_severity: float, asset_impact: float) -> float:\n    return threat_prob * vuln_severity * asset_impact",
      ["Threat is a flaw; Vulnerability is the hacker; Risk is the firewall", "A vulnerability is an existing weakness; a threat is a potential danger; risk is the potential harm when a threat exploits a vulnerability", "Risk and Vulnerability are identical terms", "Threat is the cost of software; Vulnerability is the patch"],
      1,
      "A vulnerability is a weakness in a system; a threat is a potential event or agent that could exploit that weakness; risk is the potential loss if the threat succeeds.",
      "PCES-30-01 Block 1.2 - Threats, Vulnerabilities & Risk",
      ["threat", "vulnerability", "risk"])

add_c(22, "1.2", "Threat Actors", "Beginner",
      "Which term best describes an attacker who uses automated, pre-packaged tools and exploits created by others without understanding how they work?",
      "# Attacker executing uncustomized downloaded exploits\n# python3 downloaded_exploit.py 192.168.1.50",
      ["Nation-state APT", "Script Kiddie", "Organized Crime Boss", "Hardware Cryptanalyst"],
      1,
      "A script kiddie is an unsophisticated attacker who relies on publicly available scripts and automated tools without deep technical understanding.",
      "PCES-30-01 Block 1.2 - Threat Actors",
      ["threat-actors", "script-kiddies", "basics"])

add_c(23, "1.2", "Threat Actors", "Intermediate",
      "What characterizes an Advanced Persistent Threat (APT)?",
      "# APT Signature: Stealthy, patient, long-dwell persistence\n# Infiltrate -> Establish persistence -> Evade detection -> Lateral movement -> Data exfiltration",
      ["Fast, noisy automated DDoS botnets targeting video game lobbies", "A highly skilled, well-resourced adversary that maintains stealthy, long-term unauthorized access to high-value networks", "An accidental command executed by a junior developer", "An open-source software maintenance team"],
      1,
      "APTs are sophisticated, state-sponsored or well-funded groups that infiltrate target networks stealthily, maintaining persistent access for long-term intelligence gathering or espionage.",
      "PCES-30-01 Block 1.2 - Threat Actors",
      ["apt", "threat-actors", "persistence"])

add_c(24, "1.2", "Threat Actors", "Beginner",
      "Why do Insider Threats often present a greater risk to organizations than external attackers?",
      "# Insider privilege check\nuser = {'role': 'db_admin', 'internal_ip': True, 'mfa_authenticated': True}\n# Insiders already possess credentials and understand asset locations",
      ["Insiders are legally immune to prosecution", "Insiders already possess authorized access, internal credentials, and knowledge of valuable assets and weak points", "Insiders cannot be detected by firewalls or SIEM logs", "Insiders only use zero-day exploits"],
      1,
      "Insiders have legitimate credentials, direct access past perimeter firewalls, and knowledge of business processes and sensitive data repositories.",
      "PCES-30-01 Block 1.2 - Threat Actors",
      ["insider-threat", "threat-landscape", "risk"])

add_c(25, "1.2", "Vulnerability Management", "Beginner",
      "What is a 'Zero-Day Vulnerability'?",
      "# Zero-day state:\npatch_available_from_vendor = False\nexploit_known_to_attackers = True",
      ["A bug discovered on the 0th day of the fiscal quarter", "A security flaw known to attackers or researchers for which the vendor has zero days of patch protection (no fix released yet)", "A computer virus that executes in 0 milliseconds", "A network connection with 0 latency"],
      1,
      "A zero-day vulnerability is an undisclosed or unpatched vulnerability that is exploited by threat actors before the software vendor has developed and distributed a fix.",
      "PCES-30-01 Block 1.2 - Vulnerability Management",
      ["zero-day", "vulnerabilities", "cve"])

add_c(26, "1.2", "Standards & Catalogs", "Beginner",
      "What is the primary function of the CVE (Common Vulnerabilities and Exposures) system managed by MITRE?",
      "# Example CVE format:\ncve_id = 'CVE-2024-21413'  # Standardized unique identifier for a public vulnerability",
      ["To provide a standardized, unique identifier for publicly known cybersecurity vulnerabilities", "To compile Python source code into native machine executables", "To register internet domain names", "To encrypt credit card transactions in web browsers"],
      0,
      "CVE provides a standardized, globally recognized identifier (e.g. CVE-2023-XXXX) for public software and hardware security vulnerabilities.",
      "PCES-30-01 Block 1.2 - Standards & Catalogs",
      ["cve", "mitre", "vulnerability-catalog"])

add_c(27, "1.2", "CVSS Scoring", "Intermediate",
      "In the Common Vulnerability Scoring System (CVSS v3.1), what does a Base Score of 9.8 indicate?",
      "# CVSS Rating Classification\ndef get_cvss_severity(score: float) -> str:\n    if score >= 9.0: return 'Critical'\n    elif score >= 7.0: return 'High'\n    elif score >= 4.0: return 'Medium'\n    return 'Low'",
      ["Low severity, cosmetic visual bug", "Critical severity, typically remotely exploitable without privileges and with high impact", "Informational advisory with zero risk", "Medium severity requiring local physical access"],
      1,
      "CVSS base scores from 9.0 to 10.0 indicate Critical severity vulnerabilities, typically exploitable over the network with low attack complexity and no privileges required.",
      "PCES-30-01 Block 1.2 - CVSS Scoring",
      ["cvss", "severity", "scoring"])

add_c(28, "1.2", "Attack Surface", "Beginner",
      "What constitutes a system's 'Attack Surface'?",
      "# Examining attack surface: open ports, listening services, web inputs\nopen_ports = [21, 22, 80, 443, 3389]\n# Hardening reduces attack surface by closing unused ports (e.g. closing FTP port 21)",
      ["The physical outer dimensions of a rack server", "The sum total of all points, interfaces, protocols, and code where an unauthorized entity can try to enter or extract data", "The resolution of the SOC analyst's monitor", "The total count of RAM chips on a motherboard"],
      1,
      "An attack surface encompasses all accessible entry points, network ports, software services, user inputs, and APIs that an attacker can target.",
      "PCES-30-01 Block 1.2 - Attack Surface",
      ["attack-surface", "hardening", "exposure"])

add_c(29, "1.2", "Attack Vectors", "Beginner",
      "Which of the following is the best example of an 'Attack Vector'?",
      "# Phishing email serving as the delivery mechanism for malicious macro\nvector = 'Phishing email with malicious attachment delivered to finance staff'",
      ["A spear-phishing email containing a weaponized attachment", "The SHA-256 hash of an executable file", "The warranty expiration date of a router", "The legal terms of service on a website"],
      0,
      "An attack vector is the specific path, vehicle, or method used by a threat actor to deliver an exploit or gain access to a target.",
      "PCES-30-01 Block 1.2 - Attack Vectors",
      ["attack-vector", "phishing", "entry-points"])

add_c(30, "1.2", "Threat Modeling", "Intermediate",
      "What does the 'T' in Microsoft's STRIDE threat modeling framework stand for?",
      "# STRIDE Framework:\n# S: Spoofing\n# T: Tampering\n# R: Repudiation\n# I: Information Disclosure\n# D: Denial of Service\n# E: Elevation of Privilege",
      ["Telemetry", "Tampering", "Tracking", "Throughput"],
      1,
      "In STRIDE, 'T' stands for Tampering (violating Integrity by unauthorized modification of data or code).",
      "PCES-30-01 Block 1.2 - STRIDE Threat Modeling",
      ["stride", "threat-modeling", "tampering"])

add_c(31, "1.2", "CWE Taxonomy", "Intermediate",
      "What is CWE (Common Weakness Enumeration)?",
      "# Sample CWE: CWE-89 (Improper Neutralization of Special Elements used in an SQL Command)\n# CWE categorizes underlying software flaws that lead to CVEs",
      ["A standardized taxonomy and categorization of software and hardware weakness types", "A cryptographic certificate authority", "An anti-malware engine for Python applications", "A network routing protocol for secure VPN tunnels"],
      0,
      "CWE is a community-driven catalog of common software architecture, design, and code weaknesses that can result in security vulnerabilities.",
      "PCES-30-01 Block 1.2 - CWE Taxonomy",
      ["cwe", "mitre", "software-weakness"])

add_c(32, "1.2", "Threat Intelligence", "Intermediate",
      "What is an Indicator of Compromise (IoC) in cybersecurity investigations?",
      "# Security incident IoC dictionary\niocs = {\n    'malicious_md5': '44d88612fea8a8f36de82e1278abb02f',\n    'c2_server_ip': '203.0.113.15',\n    'compromised_reg_key': r'HKLM\\Software\\Microsoft\\Windows\\Run\\Backdoor'\n}",
      ["A measurable piece of forensic evidence indicating that an intrusion or compromise has occurred on a system or network", "A performance indicator measuring CPU clock frequency", "An invoice indicating renewal of an antivirus license", "A metric showing how many lines of Python code were reviewed"],
      0,
      "Indicators of Compromise (IoCs) are forensic artifacts (such as malware hashes, suspicious IP addresses, or altered system files) that signify a potential or active security breach.",
      "PCES-30-01 Block 1.2 - Threat Intelligence",
      ["ioc", "forensics", "indicators"])

add_c(33, "1.2", "Vulnerability vs Penetration Testing", "Intermediate",
      "How does a Vulnerability Scan differ from an authorized Penetration Test?",
      "# Security Assessment Types:\n# Scan: Automated discovery of known unpatched software\n# PenTest: Human authorized attempt to exploit findings and pivot deeper",
      ["Scans are passive or automated discovery of flaws without exploitation; Penetration tests actively exploit flaws to evaluate real-world risk and defensive resilience", "Scans only check Python code; Penetration tests only check Cisco hardware", "Vulnerability scans are illegal without a court order; Pen tests are mandatory daily", "There is no functional difference"],
      0,
      "A vulnerability scan uses automated tools to identify potential weaknesses, whereas a penetration test actively and safely attempts to exploit vulnerabilities to assess actual business impact.",
      "PCES-30-01 Block 1.2 - Vulnerability vs Pen Testing",
      ["vulnerability-scan", "penetration-testing", "methodology"])

add_c(34, "1.2", "Threat Actors", "Beginner",
      "What distinguishes a 'Hacktivist' from a financially motivated cybercriminal?",
      "# Evaluating attacker motivations\ndef classify_actor(primary_goal: str) -> str:\n    if primary_goal in ['political_protest', 'social_change', 'ideology']:\n        return 'Hacktivist'\n    elif primary_goal in ['ransom_extortion', 'credit_card_theft']:\n        return 'Cybercriminal'",
      ["Hacktivists are motivated by political, ideological, or social causes rather than monetary extortion", "Hacktivists only target Linux workstations", "Hacktivists are employed directly by intelligence agencies", "Hacktivists never use malware or DDoS attacks"],
      0,
      "Hacktivists launch cyber operations to express political grievances, advocate for human rights, or protest corporate/government actions, rather than for personal financial gain.",
      "PCES-30-01 Block 1.2 - Threat Actors",
      ["hacktivist", "threat-actors", "motivation"])

add_c(35, "1.2", "Patch Management", "Beginner",
      "Why is regular patch management one of the most effective security hygiene practices?",
      "# Checking system for missing security updates\n# Regular patching eliminates known vulnerabilities listed in CVE databases",
      ["It eliminates the need to use passwords or multi-factor authentication", "It remediates known vulnerabilities before threat actors can exploit them with automated toolkits", "It doubles the physical processing speed of the CPU", "It converts unencrypted HTTP traffic to HTTPS automatically"],
      1,
      "The vast majority of cyber attacks exploit known vulnerabilities for which vendor patches already exist; systematic patching closes these exploitable doors.",
      "PCES-30-01 Block 1.2 - Patch Management",
      ["patching", "vulnerabilities", "remediation"])

add_c(36, "1.2", "Supply Chain Security", "Intermediate",
      "What is a 'Software Supply Chain Attack'?",
      "# Compromised dependency scenario\n# requirements.txt contains 'popular-utility==2.4.1'\n# Attacker compromises the maintainer account on PyPI and injects a backdoor into version 2.4.1",
      ["An attack targeting the physical trucks delivering server racks", "Compromising an upstream third-party component, package repository, or build pipeline to distribute malware to downstream users", "Stealing power supply cables from a data center warehouse", "An employee submitting an inflated invoice for software licenses"],
      1,
      "In a supply chain attack, attackers compromise a trusted upstream dependency (like an npm or PyPI package, or a vendor build pipeline) to infect downstream organizations.",
      "PCES-30-01 Block 1.2 - Supply Chain Security",
      ["supply-chain", "dependencies", "threats"])

add_c(37, "1.2", "Misconfiguration", "Beginner",
      "Which of the following is considered a Security Misconfiguration vulnerability?",
      "# Insecure default application configuration\nAPP_DEBUG = True\nSECRET_KEY = 'change_me_in_production'\nALLOW_ALL_ORIGINS = True",
      ["Deploying an application with default passwords, debug mode enabled, and unrestricted directory listing", "Writing code in Python instead of assembly", "Upgrading a Linux kernel to the latest LTS release", "Configuring an automated daily backup job"],
      0,
      "Security misconfiguration includes retaining default credentials, enabling verbose debug mode in production, leaving unnecessary services enabled, and permissive access controls.",
      "PCES-30-01 Block 1.2 - Misconfiguration",
      ["misconfiguration", "hardening", "owasp"])

add_c(38, "1.2", "Social Engineering", "Beginner",
      "What attack vector relies primarily on manipulating human psychology rather than software code vulnerabilities?",
      "# Social engineering impersonation\ncall = 'Hello, this is IT support. We detected a virus on your workstation. Please read me your MFA code.'",
      ["SQL injection", "Social engineering", "Buffer overflow", "Cross-site request forgery"],
      1,
      "Social engineering targets human vulnerabilities—such as trust, urgency, fear, or helpfulness—to trick people into compromising security or handing over credentials.",
      "PCES-30-01 Block 1.2 - Social Engineering",
      ["social-engineering", "human-factors", "threats"])

add_c(39, "1.2", "Vulnerability Databases", "Beginner",
      "What is the National Vulnerability Database (NVD) maintained by NIST?",
      "# Querying NVD via API for CVE analysis\n# NVD provides standardized CVSS analysis, CPE match criteria, and CWE mappings",
      ["A private chat server for cyber criminals", "The U.S. government repository of standards-based vulnerability management data integrating CVE and CVSS", "A proprietary commercial antivirus scanner", "A replacement package index for Python wheels"],
      1,
      "NIST's National Vulnerability Database (NVD) provides standardized vulnerability management data including CVSS scores, impacted product identifiers (CPE), and CWE classifications.",
      "PCES-30-01 Block 1.2 - Vulnerability Databases",
      ["nvd", "nist", "cve"])

add_c(40, "1.2", "Threat Landscape", "Intermediate",
      "What is 'Dwell Time' in cyber incident response?",
      "# Dwell time metric calculation\ndef calculate_dwell_time(initial_compromise_ts, detection_ts):\n    return detection_ts - initial_compromise_ts  # Duration attacker went undetected",
      ["The time a user spends reading an email before clicking", "The duration of time an attacker remains undetected inside a compromised network between initial breach and discovery", "The boot time required for a Linux server to restart", "The time it takes for a DNS record to propagate globally"],
      1,
      "Dwell time is the duration between an attacker's initial unauthorized access and the moment the organization's defenders detect the intrusion.",
      "PCES-30-01 Block 1.2 - Incident Response Metrics",
      ["dwell-time", "incident-response", "metrics"])

# --- CHAPTER 1.3: Common Attack Types & Threat Vectors (Cards 41-60) ---
add_c(41, "1.3", "Attack Types", "Beginner",
      "What is 'Whaling' in the taxonomy of phishing attacks?",
      "# Targeted whaling email header\nheaders = {\n    'To': 'cfo@company.example',\n    'Subject': 'CONFIDENTIAL: Wire instructions for merger closing',\n    'From': 'ceo-personal@company-directors.org'\n}",
      ["Phishing attacks launched against maritime naval vessels", "A spear-phishing attack specifically targeting high-profile corporate executives, board members, or high-value individuals", "Mass spam sent to millions of random residential email addresses", "An attack exploiting deep sea fiber cables"],
      1,
      "Whaling specifically targets high-ranking executives (CEOs, CFOs) to authorize large financial transfers or reveal highly sensitive corporate secrets.",
      "PCES-30-01 Block 1.3 - Attack Types",
      ["whaling", "spear-phishing", "social-engineering"])

add_c(42, "1.3", "Malware Taxonomy", "Beginner",
      "What distinguishes a Computer Worm from a Computer Virus?",
      "# Worm vs Virus classification\ndef is_worm(replicates_autonomously: bool, requires_host_file: bool) -> bool:\n    return replicates_autonomously and not requires_host_file",
      ["A worm spreads autonomously across networks without human intervention; a virus requires attaching to a host file and user execution to propagate", "A worm only attacks mobile devices; a virus only attacks Unix servers", "A virus is harmless; a worm is always fatal to hardware", "They are identical in replication mechanism"],
      0,
      "A virus must attach to a host program and relies on user action to execute and spread. A worm is self-contained and replicates autonomously across network vulnerabilities.",
      "PCES-30-01 Block 1.3 - Malware Taxonomy",
      ["worm", "virus", "malware"])

add_c(43, "1.3", "Ransomware", "Beginner",
      "What is the operational objective of modern Ransomware?",
      "# Ransomware execution pattern:\n# 1. Enumerate file extensions (.docx, .xlsx, .db, .pdf)\n# 2. Encrypt with strong symmetric cipher\n# 3. Exfiltrate data for double extortion\n# 4. Display ransom note demanding payment for decryption key",
      ["To permanently destroy server CPU hardware chips", "To encrypt user/enterprise files and demand an extortion ransom in exchange for the decryption key", "To convert server RAM into swap storage space", "To speed up internet connectivity on client machines"],
      1,
      "Ransomware encrypts critical data and demands ransom payment. Modern variants often use 'double extortion' by also exfiltrating sensitive data and threatening public release.",
      "PCES-30-01 Block 1.3 - Ransomware",
      ["ransomware", "malware", "extortion"])

add_c(44, "1.3", "Malware Taxonomy", "Beginner",
      "What is a 'Trojan Horse'?",
      "# Trojan disguise\n# Program name: 'Free_Screen_Recorder.exe'\n# Visible behavior: Records screen\n# Hidden payload: Connects reverse shell to attacker IP",
      ["Malware that masquerades as desirable or legitimate software while hiding malicious functionality", "A network router manufactured in Greece", "A protocol that speeds up web requests", "A hardware firewall tool"],
      0,
      "A Trojan horse misleads users by appearing as a harmless or useful program while concealing a malicious payload such as a backdoor, spyware, or downloader.",
      "PCES-30-01 Block 1.3 - Malware Taxonomy",
      ["trojan", "malware", "deception"])

add_c(45, "1.3", "Denial of Service", "Beginner",
      "How does a Distributed Denial of Service (DDoS) attack differ from a simple Denial of Service (DoS) attack?",
      "# DDoS: Traffic originating from thousands of distributed botnet nodes\n# DoS: Traffic originating from a single source IP address",
      ["DDoS attacks use only UDP port 80; DoS uses TCP port 443", "DDoS originates from a distributed network of thousands of compromised systems (botnet), whereas DoS originates from a single source", "DDoS attacks are completely legal in most countries", "DDoS attacks steal passwords; DoS attacks corrupt hard drives"],
      1,
      "A simple DoS comes from a single source and is easily blocked by firewall IP filters. A DDoS uses hundreds or thousands of distributed compromised machines (a botnet), making mitigation much harder.",
      "PCES-30-01 Block 1.3 - Denial of Service",
      ["ddos", "dos", "botnet"])

add_c(46, "1.3", "Network Attacks", "Beginner",
      "What occurs during a Man-in-the-Middle (MitM) attack?",
      "# ARP spoofing / MitM scenario\n# Attacker intercepts packets between Client and Default Gateway\n# Can read, modify, or drop packets before forwarding them",
      ["An attacker intercepts, relays, and possibly modifies communications between two parties who believe they are communicating directly with each other", "A server administrator resets the root password from the local console", "A database performs a two-phase commit transaction", "A router updates its internal routing table via BGP"],
      0,
      "In a MitM attack, an adversary positions themselves between two endpoints (e.g. via ARP spoofing or rogue Wi-Fi AP) to eavesdrop on or alter unencrypted traffic.",
      "PCES-30-01 Block 1.3 - Network Attacks",
      ["mitm", "eavesdropping", "network-security"])

add_c(47, "1.3", "Web & Social Engineering", "Intermediate",
      "What is 'Drive-by Download' in web security?",
      "# Drive-by download mechanism\n# Victim visits compromised web page -> Malicious script exploits browser plugin flaw\n# -> Malware downloaded and executed without user clicking 'Download'",
      ["Downloading games from a car's dashboard browser", "The automatic, unintentional download of malicious code onto a visitor's device simply by visiting a compromised webpage without clicking download", "Transferring Python scripts using Bluetooth", "Updating Linux packages while connected to mobile cellular data"],
      1,
      "Drive-by downloads silently install malware by exploiting browser or operating system vulnerabilities when a victim visits an infected or compromised website.",
      "PCES-30-01 Block 1.3 - Web Attacks",
      ["drive-by-download", "browser-exploit", "malware"])

add_c(48, "1.3", "Password Attacks", "Beginner",
      "What is 'Credential Stuffing'?",
      "# Credential stuffing script prototype\n# Reads leaked (email, password) breach dumps and replays them on target service\nfor line in open('breached_credentials.txt'):\n    user, pwd = line.strip().split(':')\n    test_login(user, pwd)",
      ["Testing thousands of leaked username/password combinations from previous data breaches against multiple other websites, exploiting password reuse", "Using a physical device to rapidly type keys into a keyboard port", "Guessing every alphanumeric combination from 'a' to 'zzzz'", "Resetting user passwords via phone calls to helpdesk"],
      0,
      "Credential stuffing exploits user password reuse by automatically injecting large lists of stolen username/password pairs into login forms across various unrelated services.",
      "PCES-30-01 Block 1.3 - Password Attacks",
      ["credential-stuffing", "passwords", "reuse"])

add_c(49, "1.3", "Password Attacks", "Intermediate",
      "How does 'Password Spraying' evade standard account lockout policies?",
      "# Password spraying logic: One password across many different usernames\n# Avoids triggering '5 failed attempts -> Lock Account' for any single user!\ncommon_pwd = 'Autumn2026!'\nfor account in all_corporate_accounts:\n    attempt_login(account, common_pwd)",
      ["It tests a single common password against thousands of distinct user accounts instead of trying many passwords against a single account", "It disables the Windows Active Directory domain controller", "It uses rainbow tables precomputed with MD5 hashes", "It intercepts hashes over Kerberos network packets"],
      0,
      "Password spraying avoids account lockouts by attempting a single common password against many different user accounts rather than hammering one user account.",
      "PCES-30-01 Block 1.3 - Password Attacks",
      ["password-spraying", "lockout", "brute-force"])

add_c(50, "1.3", "Social Engineering", "Beginner",
      "What is 'Typosquatting' (URL hijacking)?",
      "# Typosquatting domain registration\nlegitimate_domain = 'bankofamerica.com'\ntyposquat_domain = 'bamkofamerica.com'  # Targets typing errors by users",
      ["Hacking mechanical keyboards to invert keys", "Registering domain names with common spelling mistakes of popular brand websites to deceive users into visiting malicious sites", "Writing unit tests with intentional syntax typos", "Changing variable casing from snake_case to camelCase"],
      1,
      "Typosquatting relies on common typing mistakes made by internet users (e.g. 'goolge.com') to redirect victims to malicious lookalike websites for phishing or malware delivery.",
      "PCES-30-01 Block 1.3 - Typosquatting",
      ["typosquatting", "dns", "phishing"])

# --- CHAPTER 1.3 (cont): Cards 51-60 ---
add_c(51, "1.3", "Web Attacks", "Intermediate",
      "What is a 'Watering Hole' attack?",
      "# Watering hole strategy\n# 1. Profile target group (e.g. defense aerospace engineers)\n# 2. Identify legitimate third-party website they frequently visit (e.g. aerospace news forum)\n# 3. Compromise the news forum and inject exploit targeted at visitors from the defense contractor IP block",
      ["Dumping toxic liquids into a municipal data center reservoir", "Compromising a legitimate third-party website that is known to be frequently visited by members of a specific target organization", "Flooding an IRC chat room with repetitive text spam", "Intercepting satellite communications over coastal waters"],
      1,
      "In a watering hole attack, attackers identify and compromise legitimate websites frequently visited by their target demographic to infect them via drive-by exploits.",
      "PCES-30-01 Block 1.3 - Watering Hole",
      ["watering-hole", "targeted-attacks", "apt"])

add_c(52, "1.3", "Physical & Social Engineering", "Beginner",
      "What is 'Tailgating' (or 'Piggybacking') in physical access security?",
      "# Physical security access badge simulation\ndef access_turnstile(badge_id: str, person_count: int):\n    # Tailgating occurs when person_count > 1 on a single badge_id scan\n    return person_count > 1",
      ["Following an authorized employee through a secure door or barrier without scanning one's own credential", "Sniffing Bluetooth packets behind a delivery vehicle", "Stealing copper cables from telephone poles", "Tracing IP packets using traceroute"],
      0,
      "Tailgating is a physical security breach where an unauthorized individual closely follows an authorized person through a secured entry point.",
      "PCES-30-01 Block 1.3 - Physical Security",
      ["tailgating", "physical-security", "social-engineering"])

add_c(53, "1.3", "Physical Security & Baiting", "Beginner",
      "An attacker leaves infected USB flash drives labeled 'Q4 Executive Salaries.xlsx' in an office parking lot. What attack technique is this?",
      "# USB Baiting / Drop attack\n# Attacker exploits curiosity or greed to trick victim into plugging malicious hardware into corporate PC",
      ["Watering hole attack", "Baiting (USB drop)", "Typosquatting", "DNS poisoning"],
      1,
      "Baiting (such as leaving infected USB drives in public locations) exploits human curiosity or greed to entice victims into connecting malicious storage media to internal networks.",
      "PCES-30-01 Block 1.3 - Social Engineering",
      ["baiting", "usb-drop", "social-engineering"])

add_c(54, "1.3", "Wireless Attacks", "Intermediate",
      "What is an 'Evil Twin' attack in wireless networking?",
      "# Evil twin access point configuration\n# Attacker broadcasts exact same SSID ('Starbucks_Guest') with stronger signal\n# Victims automatically associate with attacker's rogue AP",
      ["A rogue Wi-Fi access point configured to broadcast the exact same SSID as a legitimate trusted network to intercept traffic", "A computer with two identical network interface cards running in parallel", "A mirror database replica configured on AWS", "A duplicate SSH key used by two different administrators"],
      0,
      "An Evil Twin is a rogue wireless access point masquerading as a legitimate network by spoofing its SSID and MAC address to harvest credentials and intercept victim traffic.",
      "PCES-30-01 Block 1.3 - Wireless Attacks",
      ["evil-twin", "wireless", "rogue-ap"])

add_c(55, "1.3", "Network Attacks", "Intermediate",
      "What is DNS Cache Poisoning (DNS Spoofing)?",
      "# DNS cache poisoning concept\n# Corrupting DNS resolver cache with fraudulent IP mappings:\n# 'mybank.com' -> Attacker IP (198.51.100.99) instead of Legitimate IP (203.0.113.1)",
      ["Corrupting a DNS resolver's cache so that domain name queries return the IP address of an attacker-controlled server", "Deleting the /etc/hosts file on a local computer", "Flooding an authoritative name server with ICMP ping requests", "Purchasing an expired domain name legally on a domain exchange"],
      0,
      "DNS cache poisoning corrupts the resolver's cache with fraudulent IP records, silently redirecting users trying to access legitimate sites to attacker-controlled phishing servers.",
      "PCES-30-01 Block 1.3 - Network Attacks",
      ["dns-poisoning", "dns-spoofing", "network-attacks"])

add_c(56, "1.3", "Social Engineering", "Beginner",
      "How do 'Smishing' and 'Vishing' differ from standard email phishing?",
      "# Attack delivery channel classification\ndef classify_channel(medium: str) -> str:\n    if medium == 'sms': return 'Smishing'\n    elif medium == 'voice_call': return 'Vishing'\n    elif medium == 'email': return 'Phishing'",
      ["Smishing uses SMS text messages; Vishing uses voice phone calls", "Smishing targets small businesses; Vishing targets universities", "Smishing uses malicious USBs; Vishing uses compromised websites", "Smishing is legal; Vishing is illegal"],
      0,
      "Smishing is phishing delivered via SMS text messages. Vishing is voice phishing conducted via telephone calls.",
      "PCES-30-01 Block 1.3 - Social Engineering",
      ["smishing", "vishing", "phishing"])

add_c(57, "1.3", "Malware Types", "Beginner",
      "What is a 'Keylogger'?",
      "# Keylogger concept\n# Intercepts keyboard input interrupts to record keystrokes\ndef on_key_press(key):\n    with open('keylog.txt', 'a') as f:\n        f.write(str(key))",
      ["A hardware or software tool that silently records every keystroke typed by a user to capture passwords and sensitive data", "A device that locks server rack doors using cryptographic keys", "A Python utility that automatically formats source code indentation", "A protocol that synchronizes keyboard layouts across international servers"],
      0,
      "A keylogger is spyware (hardware or software) designed to covertly record keystrokes typed by a victim to harvest usernames, passwords, credit card numbers, and confidential messages.",
      "PCES-30-01 Block 1.3 - Malware Types",
      ["keylogger", "spyware", "credential-theft"])

add_c(58, "1.3", "Malware Types", "Beginner",
      "What is 'Spyware'?",
      "# Spyware stealth operation\n# Covertly gathers telemetry, browser history, microphone audio without user consent",
      ["Malware designed to covertly monitor user activity, gather confidential data, and transmit it to an unauthorized third party", "Software used by intelligence agents to play chess online", "A Python framework for unit testing async functions", "A network router diagnostic utility"],
      0,
      "Spyware covertly tracks user activity, keystrokes, browsing history, and credentials, exfiltrating this telemetry without user knowledge or consent.",
      "PCES-30-01 Block 1.3 - Malware Types",
      ["spyware", "privacy", "malware"])

add_c(59, "1.3", "Social Engineering", "Beginner",
      "What is 'Shoulder Surfing'?",
      "# Shoulder surfing mitigation: Privacy filters on laptop screens\n# Restricts viewing angle to prevent casual eavesdropping from bystanders",
      ["Looking over someone's shoulder to covertly view passwords, PINs, or confidential information displayed on their screen or keypad", "Tapping someone on the shoulder to ask for the time", "Hacking into fitness tracker shoulder sensors", "Connecting a secondary monitor over HDMI without authorization"],
      0,
      "Shoulder surfing is a direct observation technique where an attacker watches a victim's keyboard, screen, or ATM keypad to steal passwords, PINs, or sensitive information.",
      "PCES-30-01 Block 1.3 - Physical Security",
      ["shoulder-surfing", "physical-security", "social-engineering"])

add_c(60, "1.3", "Cryptographic Attacks", "Intermediate",
      "What is a 'Rainbow Table' attack against password hashes?",
      "# Rainbow table concept:\n# Precomputed table of plaintext passwords and their corresponding cryptographic hash digests\n# Looking up hash in table reveals plaintext instantly: hash -> plaintext",
      ["A visual display of colorful server log metrics on a SOC dashboard", "Using precomputed tables of reverse cryptographic hash values to rapidly crack password hashes", "Flooding a wireless access point with multi-frequency radio interference", "Using optical lasers to transmit data between server racks"],
      1,
      "Rainbow tables are precomputed lookup tables of cryptographic hashes used to reverse password hashes without performing time-consuming brute-force hashing in real time (defeated by salting).",
      "PCES-30-01 Block 1.3 - Cryptographic Attacks",
      ["rainbow-tables", "passwords", "salting"])

# --- CHAPTER 1.4: Impacts of Security Incidents & Risk Management (Cards 61-80) ---
add_c(61, "1.4", "Risk Management", "Intermediate",
      "What is the mathematical definition of Annualized Loss Expectancy (ALE) in quantitative risk analysis?",
      "# Quantitative risk formula\n# ALE = SLE x ARO\ndef calculate_ale(single_loss_expectancy: float, annualized_rate_of_occurrence: float) -> float:\n    return single_loss_expectancy * annualized_rate_of_occurrence",
      ["ALE = Single Loss Expectancy (SLE) x Annualized Rate of Occurrence (ARO)", "ALE = Asset Value / Annual Depreciation", "ALE = Total Vulnerabilities x Patch Speed", "ALE = Number of Employees x Insurance Deductible"],
      0,
      "In quantitative risk analysis, Annualized Loss Expectancy (ALE) equals the cost of a single incident (Single Loss Expectancy, SLE) multiplied by the frequency of occurrence per year (ARO).",
      "PCES-30-01 Block 1.4 - Quantitative Risk",
      ["ale", "sle", "aro", "quantitative-risk"])

add_c(62, "1.4", "Risk Treatment", "Beginner",
      "When an organization purchases a comprehensive Cybersecurity Insurance policy, which risk treatment strategy are they employing?",
      "# Risk treatment strategies:\n# 1. Mitigation (apply controls)\n# 2. Transference (shift financial burden via insurance/outsourcing)\n# 3. Acceptance (retain risk)\n# 4. Avoidance (eliminate risky activity)",
      ["Risk Mitigation", "Risk Transference", "Risk Avoidance", "Risk Acceptance"],
      1,
      "Risk Transference (or risk sharing) shifts the financial consequences of a loss to a third party, most commonly through insurance policies or contractual warranties.",
      "PCES-30-01 Block 1.4 - Risk Treatment",
      ["risk-transference", "cyber-insurance", "risk-treatment"])

add_c(63, "1.4", "Risk Treatment", "Beginner",
      "An enterprise decides to shut down and decommission an insecure legacy FTP server completely rather than attempting to patch it. Which risk strategy is this?",
      "# Decommissioning the high-risk asset entirely\n# Result: Risk probability drops to zero because the activity ceases",
      ["Risk Acceptance", "Risk Transference", "Risk Avoidance", "Risk Diffusion"],
      2,
      "Risk Avoidance involves eliminating the risk entirely by ceasing the risky activity, shutting down the vulnerable system, or not deploying a high-risk feature.",
      "PCES-30-01 Block 1.4 - Risk Treatment",
      ["risk-avoidance", "decommissioning", "risk-treatment"])

add_c(64, "1.4", "Risk Treatment", "Beginner",
      "Implementing multi-factor authentication (MFA) and host firewalls to reduce the likelihood of credential theft is an example of which risk strategy?",
      "# Applying security controls to reduce risk probability/impact\n# Controls deployed: MFA, firewalls, endpoint detection",
      ["Risk Mitigation", "Risk Avoidance", "Risk Transference", "Risk Ignorance"],
      0,
      "Risk Mitigation (or risk reduction) involves implementing technical, administrative, or physical controls to reduce the likelihood and/or impact of a threat.",
      "PCES-30-01 Block 1.4 - Risk Treatment",
      ["risk-mitigation", "controls", "remediation"])

add_c(65, "1.4", "Risk Treatment", "Intermediate",
      "When is 'Risk Acceptance' an appropriate business decision?",
      "# Cost-benefit evaluation for risk treatment\ncontrol_cost = 50000.0   # $50,000 annual cost to implement WAF control\nannualized_loss = 1200.0  # $1,200 annual expected loss\n# If control cost drastically exceeds the potential loss, risk acceptance may be rational",
      ["When the cost of implementing a countermeasure significantly exceeds the total potential loss of the asset", "Whenever a vulnerability has a CVSS score of 10.0", "When the CEO does not want to read security reports", "Only when all servers are disconnected from the internet"],
      0,
      "Risk Acceptance is appropriate when the cost of remediating or transferring the risk is greater than the potential loss, or when the risk falls well within the organization's defined risk tolerance.",
      "PCES-30-01 Block 1.4 - Risk Treatment",
      ["risk-acceptance", "risk-tolerance", "cost-benefit"])

add_c(66, "1.4", "Business Continuity", "Intermediate",
      "In disaster recovery and business continuity planning, what does Recovery Time Objective (RTO) define?",
      "# RTO: Maximum acceptable downtime duration\n# Target: Database must be fully restored and online within 4 hours of failure",
      ["The maximum acceptable amount of time that a system can remain offline following a disaster", "The maximum age of data that can be lost in a failure", "The time required to complete an annual cybersecurity audit", "The duration of an employee's password reset call"],
      0,
      "Recovery Time Objective (RTO) is the targeted duration of time within which a business process or IT system must be restored after a disruption to avoid unacceptable consequences.",
      "PCES-30-01 Block 1.4 - Business Continuity",
      ["rto", "recovery-time-objective", "bcp"])

add_c(67, "1.4", "Business Continuity", "Intermediate",
      "In disaster recovery planning, what does Recovery Point Objective (RPO) define?",
      "# RPO: Maximum acceptable data loss period\n# If backups run every 6 hours, maximum data loss in a crash is 6 hours (RPO = 6h)",
      ["The maximum acceptable amount of data loss measured in time backwards from the disruption point", "The geographic coordinates of the secondary data center", "The number of hours needed to rewrite all Python code", "The percentage of CPU utilization allowed during recovery"],
      0,
      "Recovery Point Objective (RPO) is the maximum acceptable period of data loss measured in time (e.g. up to 1 hour of transactions), determining how frequently backups must be performed.",
      "PCES-30-01 Block 1.4 - Business Continuity",
      ["rpo", "recovery-point-objective", "backups"])

add_c(68, "1.4", "Impact Analysis", "Beginner",
      "What is the primary objective of a Business Impact Analysis (BIA)?",
      "# BIA objectives: Catalog critical business functions, assess disruption impacts, define RTO/RPO",
      ["To determine the impact of a disruption on critical business operations and identify resource recovery requirements", "To calculate the marketing budget for advertising new products", "To install antivirus agents on guest Wi-Fi smartphones", "To fire employees who click simulated phishing links"],
      0,
      "A Business Impact Analysis (BIA) identifies critical business processes, evaluates the operational and financial impact of their disruption, and establishes recovery priorities (RTO/RPO).",
      "PCES-30-01 Block 1.4 - Business Impact Analysis",
      ["bia", "business-impact", "continuity"])

add_c(69, "1.4", "Incident Fallout", "Beginner",
      "Which of the following is considered an Indirect (intangible) financial impact of a major customer data breach?",
      "# Categorizing breach consequences\n# Direct: Incident response contractor fees, legal penalties, forensic retainer\n# Indirect: Reputational brand damage, loss of customer trust, declining stock valuation",
      ["Reputational damage and loss of future customer trust", "Paying an immediate invoice to an external forensic consultant", "Mailing notification letters to breached customers", "Replacing broken hard drive hardware"],
      0,
      "While forensic fees and notification mailings are direct out-of-pocket costs, reputational damage, customer churn, and depressed brand value are indirect, long-term impacts.",
      "PCES-30-01 Block 1.4 - Incident Fallout",
      ["reputational-damage", "breach-impact", "intangible-costs"])

add_c(70, "1.4", "Operational Metrics", "Intermediate",
      "What does Mean Time to Detect (MTTD) measure in security operations?",
      "# MTTD Metric calculation\ndef calculate_mttd(incident_durations: list) -> float:\n    # Average time from initial breach/event to detection by SOC\n    return sum(incident_durations) / len(incident_durations)",
      ["The average time elapsed between when a security incident begins and when security personnel first detect it", "The average time it takes a developer to fix a syntax error in Python", "The time required to install security patches on Windows", "The download speed of threat intelligence feeds"],
      0,
      "Mean Time to Detect (MTTD) measures the average time an organization takes to discover and identify a security incident or intrusion.",
      "PCES-30-01 Block 1.4 - SecOps Metrics",
      ["mttd", "metrics", "detection"])

add_c(71, "1.4", "Operational Metrics", "Intermediate",
      "What does Mean Time to Remediate (MTTR) measure?",
      "# MTTR calculation: Time from detection to complete resolution/containment\ndef calculate_mttr(resolution_times: list) -> float:\n    return sum(resolution_times) / len(resolution_times)",
      ["The average time required to contain, eliminate, and resolve a security incident after it has been detected", "The duration of time an attacker remains quiet before striking", "The time required to reboot a web server after a power outage", "The time taken to write a post-mortem blog post"],
      0,
      "Mean Time to Remediate (MTTR) is the average time taken from the moment an incident is identified until the vulnerability is closed and systems are fully restored to clean operation.",
      "PCES-30-01 Block 1.4 - SecOps Metrics",
      ["mttr", "remediation", "metrics"])

add_c(72, "1.4", "Risk Assessment", "Beginner",
      "What distinguishes Qualitative Risk Assessment from Quantitative Risk Assessment?",
      "# Assessment comparison\n# Qualitative: High / Medium / Low rating based on expert consensus\n# Quantitative: Concrete financial dollar figures ($ALE, $SLE)",
      ["Qualitative uses descriptive rankings (e.g. High/Medium/Low); Quantitative uses numerical and financial dollar calculations", "Qualitative is for hardware; Quantitative is for software", "Qualitative is conducted by law enforcement; Quantitative is conducted by internal developers", "Qualitative requires Python; Quantitative requires C++"],
      0,
      "Qualitative risk assessment relies on subjective scales (High, Medium, Low) based on impact and likelihood. Quantitative risk assessment calculates concrete numerical values and monetary losses.",
      "PCES-30-01 Block 1.4 - Risk Assessment",
      ["qualitative", "quantitative", "risk-methodology"])

add_c(73, "1.4", "Quantitative Risk", "Intermediate",
      "If a database server has an Asset Value (AV) of $200,000 and an Exposure Factor (EF) of 25% for a flood event, what is the Single Loss Expectancy (SLE)?",
      "# SLE formula: SLE = Asset Value (AV) x Exposure Factor (EF)\nav = 200000.0\nef = 0.25\nsle = av * ef  # $50,000.0",
      ["$5,000", "$50,000", "$150,000", "$25,000"],
      1,
      "SLE = AV x EF = $200,000 x 0.25 = $50,000. If the event occurs, the expected monetary loss for that single occurrence is $50,000.",
      "PCES-30-01 Block 1.4 - Quantitative Risk",
      ["sle", "exposure-factor", "calculations"])

add_c(74, "1.4", "Quantitative Risk", "Intermediate",
      "If an organization calculates an SLE of $50,000 and expects an event to occur once every 2 years (ARO = 0.5), what is the Annualized Loss Expectancy (ALE)?",
      "# ALE calculation\nsle = 50000.0\naro = 0.5  # Once every 2 years\nale = sle * aro  # $25,000 per year",
      ["$25,000", "$50,000", "$100,000", "$12,500"],
      0,
      "ALE = SLE x ARO = $50,000 x 0.5 = $25,000 per year. The company can justify spending up to $25,000 annually on countermeasures to mitigate this risk.",
      "PCES-30-01 Block 1.4 - Quantitative Risk",
      ["ale", "aro", "calculations"])

add_c(75, "1.4", "Risk Governance", "Beginner",
      "What is a 'Risk Register' in cybersecurity management?",
      "# Sample risk register row dictionary\nrisk_item = {\n    'id': 'RISK-014',\n    'threat': 'Ransomware via unpatched VPN',\n    'owner': 'SecOps Lead',\n    'inherent_risk': 'Critical',\n    'mitigation_plan': 'Deploy MFA and emergency VPN firmware patch',\n    'status': 'In Progress'\n}",
      ["A centralized document or database that logs identified risks, their severity, assigned owners, and remediation status", "A cryptographic ledger for buying bitcoin during ransomware extortion", "A list of employee usernames who forgot their passwords", "A hardware registry inside the CPU memory controller"],
      0,
      "A Risk Register is an essential governance document that catalogs all identified risks, their potential impact/likelihood, remediation actions, and accountability owners.",
      "PCES-30-01 Block 1.4 - Risk Governance",
      ["risk-register", "governance", "risk-management"])

add_c(76, "1.4", "Risk Types", "Intermediate",
      "What is 'Residual Risk' in risk management?",
      "# Risk equation:\n# Residual Risk = Inherent Risk - Countermeasure Effect\n# (The risk that remains after all controls are implemented)",
      ["The risk that remains after security countermeasures and controls have been implemented", "The risk present before any security controls were designed", "The cost of disposing of old server hardware", "The risk that all employees will leave the company on the same day"],
      0,
      "Residual risk is the remaining level of risk after security countermeasures, policies, and controls have been applied to mitigate inherent risk.",
      "PCES-30-01 Block 1.4 - Risk Types",
      ["residual-risk", "inherent-risk", "controls"])

add_c(77, "1.4", "Regulatory Impact", "Beginner",
      "How do data protection regulations (such as GDPR) increase the financial impact of a data breach?",
      "# Calculating total breach liability\nregulatory_fine = min(20000000, annual_global_turnover * 0.04)\n# Regulatory fines can reach up to 4% of global annual turnover under GDPR",
      ["By eliminating the need to report breaches to authorities", "By imposing severe statutory monetary fines and mandatory breach disclosure timelines", "By prohibiting companies from buying cyber insurance", "By requiring all Python code to be audited by government inspectors"],
      1,
      "Regulations like GDPR introduce heavy financial penalties (up to €20M or 4% of global turnover) for failing to safeguard personal data and notify authorities within tight deadlines (72 hours).",
      "PCES-30-01 Block 1.4 - Regulatory Impact",
      ["gdpr", "compliance", "penalties"])

add_c(78, "1.4", "Disaster Recovery", "Intermediate",
      "What is the difference between a 'Hot Site' and a 'Cold Site' in disaster recovery architecture?",
      "# Disaster Recovery site types:\n# Hot Site: Fully equipped, synchronized real-time data, near-instantaneous cutover\n# Cold Site: Physical facility with power/cooling but no pre-installed hardware or active data",
      ["A Hot Site is a fully redundant, operational replica ready for immediate failover; a Cold Site has space and utilities but requires hardware and data restoration before use", "A Hot Site is located in tropical climates; a Cold Site is located near the Arctic", "A Hot Site only runs Python; a Cold Site runs COBOL", "A Hot Site is owned by the government; a Cold Site is private"],
      0,
      "A Hot Site is a continuously synchronized facility capable of taking over operations in minutes. A Cold Site provides basic infrastructure (power, space) but takes days or weeks to equip and load data.",
      "PCES-30-01 Block 1.4 - Disaster Recovery",
      ["hot-site", "cold-site", "disaster-recovery"])

add_c(79, "1.4", "Supply Chain Risk", "Intermediate",
      "Why is third-party vendor risk management critical to organizational security?",
      "# Vendor integration check\n# A breach at a SaaS billing vendor can expose customer payment records\n# even if the company's internal servers are completely uncompromised",
      ["Third-party vendors never use encryption", "A security breach at a vendor or partner who has access to enterprise networks or data can compromise the parent organization", "Vendors are legally responsible for all internal IT mistakes", "Vendors cannot sign non-disclosure agreements"],
      1,
      "Organizations frequently grant third-party vendors network access or share sensitive data with them. A compromise at a vendor creates an attack vector into the contracting enterprise.",
      "PCES-30-01 Block 1.4 - Vendor Risk",
      ["vendor-risk", "supply-chain", "third-party"])

add_c(80, "1.4", "Incident Fallout", "Beginner",
      "How does unmitigated operational downtime directly impact an e-commerce business during peak holiday sales?",
      "# Estimating downtime revenue loss\ndef downtime_loss(hourly_sales: float, hours_down: float) -> float:\n    return hourly_sales * hours_down\n# e.g. $100,000/hr x 6 hours = $600,000 lost revenue",
      ["Immediate lost transactional revenue and permanent loss of shoppers to competing retailers", "Increased server performance due to lower CPU temperature", "Decreased bandwidth costs saving significant money", "Automatic upgrade of database software versions"],
      0,
      "System unavailability during peak periods causes immediate transactional revenue loss, damages brand reputation, and permanently drives frustrated customers to competitors.",
      "PCES-30-01 Block 1.4 - Incident Fallout",
      ["downtime", "business-impact", "availability"])

# --- CHAPTER 1.5: Legal, Compliance & Incident Response Ethics (Cards 81-100) ---
add_c(81, "1.5", "Data Privacy & GDPR", "Beginner",
      "Under the European Union General Data Protection Regulation (GDPR), what is the mandatory reporting window to notify supervisory authorities of a personal data breach?",
      "# GDPR Article 33 compliance timer\nmax_notification_window_hours = 72\ndef is_gdpr_notification_compliant(hours_elapsed: int) -> bool:\n    return hours_elapsed <= 72",
      ["Within 24 hours", "Within 72 hours", "Within 30 business days", "Only at the end of the calendar year"],
      1,
      "GDPR Article 33 mandates that organizations notify the relevant supervisory authority without undue delay and, where feasible, not later than 72 hours after becoming aware of a personal data breach.",
      "PCES-30-01 Block 1.5 - GDPR Compliance",
      ["gdpr", "breach-notification", "72-hours"])

add_c(82, "1.5", "Data Privacy & GDPR", "Intermediate",
      "What is the GDPR principle of 'Data Minimization'?",
      "# Data minimization implementation in user signup model\n# Only collecting fields strictly necessary for the service\nuser_signup = {\n    'email': 'user@example.com',  # Necessary\n    'password_hash': '...',       # Necessary\n    # 'ssn', 'shoe_size', 'political_party' EXCLUDED - violates minimization!\n}",
      ["Collecting only the personal data that is strictly necessary for the specified, legitimate processing purposes", "Compressing databases using zip algorithms to minimize hard drive usage", "Deleting all company emails every 30 days", "Restricting database queries to 10 rows maximum"],
      0,
      "Data Minimization requires that personal data collected must be adequate, relevant, and limited to what is strictly necessary in relation to the purposes for which it is processed.",
      "PCES-30-01 Block 1.5 - Data Privacy",
      ["data-minimization", "gdpr", "privacy"])

add_c(83, "1.5", "Healthcare Regulations", "Beginner",
      "Which US federal law governs the security and privacy of Protected Health Information (PHI)?",
      "# Healthcare data classification\n# PHI: Medical history, patient records, diagnostic lab tests, insurance billing",
      ["HIPAA (Health Insurance Portability and Accountability Act)", "DMCA (Digital Millennium Copyright Act)", "FERPA (Family Educational Rights and Privacy Act)", "CFAA (Computer Fraud and Abuse Act)"],
      0,
      "HIPAA mandates strict administrative, physical, and technical safeguards to ensure the confidentiality, integrity, and availability of Protected Health Information (PHI).",
      "PCES-30-01 Block 1.5 - Regulatory Standards",
      ["hipaa", "phi", "compliance"])

add_c(84, "1.5", "State Privacy Laws", "Beginner",
      "What notable rights does the California Consumer Privacy Act (CCPA) grant to consumers regarding their personal data?",
      "# CCPA rights: Know what data is collected, delete personal data, opt-out of data sale",
      ["The right to know what personal information is collected, the right to delete it, and the right to opt-out of the sale of personal information", "The right to free high-speed broadband internet in California", "The right to access the source code of proprietary operating systems", "The right to launch penetration tests against any California company"],
      0,
      "The CCPA gives California consumers the right to know what personal info is collected, request its deletion, and opt out of the sale or sharing of their personal information.",
      "PCES-30-01 Block 1.5 - Privacy Regulations",
      ["ccpa", "privacy", "consumer-rights"])

add_c(85, "1.5", "Ethical Hacking", "Beginner",
      "What is the single most critical factor that distinguishes an Ethical Hacker (White Hat) from a Malicious Hacker (Black Hat)?",
      "# Checking authorization status before port scanning\nauthorized_by_written_contract = True\nif not authorized_by_written_contract:\n    raise PermissionError('Unauthorized testing is illegal under CFAA!')",
      ["Ethical hackers only use open-source operating systems", "Ethical hackers have explicit, formal written authorization from the system owner before conducting security testing", "Ethical hackers never use automated tools", "Ethical hackers write code exclusively in Python"],
      1,
      "Explicit, formal written permission and authorization from the system owner defines ethical security testing; without authorization, testing is illegal under computer crime legislation.",
      "PCES-30-01 Block 1.5 - Ethical Hacking",
      ["authorization", "rules-of-engagement", "ethics"])

add_c(86, "1.5", "Computer Crime Laws", "Intermediate",
      "Which major United States federal statute criminalizes unauthorized access to protected computers?",
      "# Legal reference: Accessing computers without authorization or exceeding authorized access\n# Penalties include federal imprisonment and significant fines",
      ["CFAA (Computer Fraud and Abuse Act)", "Sarbanes-Oxley Act (SOX)", "Federal Information Security Modernization Act (FISMA)", "Telecommunications Act of 1996"],
      0,
      "The Computer Fraud and Abuse Act (CFAA, 18 U.S.C. § 1030) is the primary U.S. federal anti-hacking statute, penalizing unauthorized access to protected computer systems.",
      "PCES-30-01 Block 1.5 - Legal Standards",
      ["cfaa", "anti-hacking", "legal"])

add_c(87, "1.5", "Vulnerability Disclosure", "Intermediate",
      "What is 'Responsible Disclosure' (Coordinated Vulnerability Disclosure) in security research?",
      "# Coordinated disclosure workflow\n# 1. Researcher discovers flaw\n# 2. Privately notifies vendor security team\n# 3. Grants vendor 90 days to develop and release a patch\n# 4. Joint public advisory released after fix is distributed",
      ["Publishing exploit code immediately to social media to force users to stop using the software", "Privately reporting the vulnerability to the affected vendor and giving them a reasonable time window to patch before making it public", "Selling zero-day exploits to unregulated dark web marketplaces", "Secretly using the exploit to download database tables without alerting the vendor"],
      1,
      "Responsible disclosure entails privately informing the vendor of a flaw and agreeing on a reasonable timeframe to develop a patch before disclosing details to the public.",
      "PCES-30-01 Block 1.5 - Vulnerability Disclosure",
      ["responsible-disclosure", "coordination", "ethics"])

add_c(88, "1.5", "Bug Bounty Programs", "Beginner",
      "What is the purpose of an organization hosting a public 'Bug Bounty' program?",
      "# HackerOne / Bugcrowd scope definition\nscope = {\n    'in_scope': ['*.api.company.com', 'webapp.company.com'],\n    'out_of_scope': ['Denial of service', 'Physical offices', 'Social engineering'],\n    'rewards': {'Critical': 5000, 'High': 2000, 'Medium': 500}\n}",
      ["To crowd-source vulnerability discovery by offering financial rewards and safe-harbor rules of engagement to external security researchers", "To hire full-time exterminators to clean bugs from server hardware rooms", "To replace internal software engineering teams with external hackers", "To sell customer telemetry data to advertising agencies"],
      0,
      "Bug bounty programs incentivize external security researchers to discover and report security vulnerabilities responsibly within a defined scope in exchange for monetary rewards.",
      "PCES-30-01 Block 1.5 - Bug Bounties",
      ["bug-bounty", "crowd-sourced", "incentives"])

add_c(89, "1.5", "Incident Response Lifecycle", "Intermediate",
      "What are the six phases of the incident response lifecycle according to the NIST SP 800-61 / SANS frameworks?",
      "# NIST Incident Response Framework\nphases = [\n    'Preparation',\n    'Detection and Analysis',\n    'Containment',\n    'Eradication',\n    'Recovery',\n    'Post-Incident Activity (Lessons Learned)'\n]",
      ["Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Lessons Learned", "Planning, Coding, Building, Testing, Deploying, and Maintaining", "Scanning, Exploiting, Rooting, Exfiltrating, Erasing, and Departing", "Buying, Unboxing, Installing, Configuring, Backing up, and Decommissioning"],
      0,
      "The canonical NIST SP 800-61 incident response phases are Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Post-Incident Activity (Lessons Learned).",
      "PCES-30-01 Block 1.5 - Incident Response Lifecycle",
      ["nist", "sans", "incident-response-phases"])

add_c(90, "1.5", "Incident Response Lifecycle", "Intermediate",
      "During an ongoing active breach where an infected server is communicating with an external Command & Control (C2) server, which phase takes immediate priority?",
      "# Isolating compromised host from production network\n# Phase: Containment\n# Action: Disconnect VLAN / apply firewall rule blocking egress to C2 IP",
      ["Lessons Learned", "Containment", "Preparation", "Decommissioning"],
      1,
      "Containment is prioritized to prevent the intruder or malware from expanding their foothold, exfiltrating more data, or spreading laterally across the enterprise.",
      "PCES-30-01 Block 1.5 - Incident Response",
      ["containment", "incident-response", "mitigation"])

add_c(91, "1.5", "Incident Response Lifecycle", "Beginner",
      "What action takes place during the 'Eradication' phase of incident response?",
      "# Eradication activities:\n# - Remove malware binaries and persistence artifacts\n# - Disable compromised credentials\n# - Patch the underlying vulnerability exploited for initial access",
      ["Writing the initial corporate security policy document", "Eliminating all components of the malware or intrusion, closing vulnerabilities, and cleaning compromised accounts", "Reconnecting the server to the internet without testing", "Sending the final marketing press release to customers"],
      1,
      "Eradication involves locating and completely removing all malicious software, tools, backdoors, and compromised credentials from the environment, and patching the initial attack vector.",
      "PCES-30-01 Block 1.5 - Incident Response",
      ["eradication", "remediation", "incident-phases"])

add_c(92, "1.5", "Incident Response Lifecycle", "Beginner",
      "Why is the 'Lessons Learned' (Post-Incident Review) phase vital for organizational security maturity?",
      "# Post-incident retrospective agenda:\n# - How did the breach occur?\n# - Were our detection mechanisms fast enough?\n# - What procedural or technical gaps need remediation to prevent recurrence?",
      ["It provides an opportunity to assign blame and publicly fire junior staff", "It identifies what worked well, what failed, and how to improve defenses and response playbooks to prevent recurrence", "It allows the legal team to destroy all forensic evidence", "It guarantees that the company will never experience another attack"],
      1,
      "The Lessons Learned phase ensures the organization reflects on the incident, updates defense playbooks, fixes architectural gaps, and improves training to prevent similar breaches.",
      "PCES-30-01 Block 1.5 - Lessons Learned",
      ["lessons-learned", "post-incident", "continuous-improvement"])

add_c(93, "1.5", "Digital Forensics", "Intermediate",
      "What is 'Chain of Custody' in digital forensics and cyber incident investigations?",
      "# Forensic evidence tracking record\nlog_entry = {\n    'evidence_id': 'EVD-2026-08',\n    'description': 'Bitstream image of compromised web server NVMe drive',\n    'sha256': 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e',\n    'custody_transferred_from': 'Analyst Alice',\n    'custody_transferred_to': 'Lead Investigator Bob',\n    'timestamp': '2026-09-28T14:30:00Z'\n}",
      ["A physical chain used to lock server rack doors", "The chronological documentation demonstrating the collection, custody, transfer, analysis, and preservation of digital evidence", "A blockchain network for recording financial transactions", "A list of employee badge swipes at the data center door"],
      1,
      "Chain of custody provides an unbroken, verifiable audit trail demonstrating who handled digital evidence, when, and where, ensuring its admissibility in court proceedings.",
      "PCES-30-01 Block 1.5 - Forensics & Chain of Custody",
      ["chain-of-custody", "forensics", "evidence"])

add_c(94, "1.5", "Incident Response Ethics", "Beginner",
      "When responding to an active cyber attack, why should security teams NOT attempt to 'hack back' against the suspected attacker's servers?",
      "# Attacker infrastructure analysis\n# Attackers often route traffic through compromised third-party servers (e.g. hospitals or schools)\n# Counter-attacking ('hacking back') risks damaging innocent third parties and is illegal!",
      ["Attacking external servers without legal authorization is illegal and risks harming innocent intermediary third-party infrastructure", "Hacking back requires installing ancient versions of Python", "Modern firewalls automatically ban users who hack back", "Attackers will always be protected by diplomatic immunity"],
      0,
      "'Hacking back' is illegal under anti-hacking statutes like the CFAA. Attackers routinely route attacks through compromised legitimate servers (e.g. universities, hospitals), risking severe collateral harm.",
      "PCES-30-01 Block 1.5 - Legal & Ethical Boundaries",
      ["hack-back", "legality", "ethics"])

add_c(95, "1.5", "Forensics Best Practices", "Intermediate",
      "Why must digital forensics investigators work from a bitstream cryptographic image (clone) rather than the live original storage device?",
      "# Forensic imaging with dd and sha256 checksum\n# dd if=/dev/sdb of=/forensics/evidence.img bs=64K status=progress\n# Read-only write-blocker ensures original drive bits remain pristine",
      ["To preserve the original physical media in its pristine, untampered state and avoid altering volatile forensic evidence", "To speed up the file transfer over USB 2.0 cables", "Because original hard drives can only be booted once", "Because Python cannot read SATA hard drives directly"],
      0,
      "Booting or examining original media alters metadata, access timestamps, and temporary files. Forensic examiners use hardware write-blockers to create exact bitstream images for analysis.",
      "PCES-30-01 Block 1.5 - Digital Forensics",
      ["forensic-imaging", "evidence-integrity", "write-blocker"])

add_c(96, "1.5", "Security Teamwork & Communication", "Beginner",
      "During a major corporate ransomware incident, who should manage external communications with media and the public?",
      "# Incident response communication plan\n# Individual technicians must NOT post updates to personal social media\n# Communications must be synchronized through designated Public Relations / Legal counsel",
      ["Any developer who is active on social media", "The designated communications / PR team and legal counsel in alignment with corporate incident response policy", "The external ransom negotiator only", "The server hardware manufacturer"],
      1,
      "Unauthorized, contradictory statements damage credibility and increase legal liability. External public and press communication must be managed strictly by designated spokespersons.",
      "PCES-30-01 Block 1.5 - Incident Communication",
      ["incident-communication", "pr", "teamwork"])

add_c(97, "1.5", "Data Privacy & Anonymization", "Intermediate",
      "What is the difference between 'Anonymization' and 'Pseudonymization' under privacy regulations?",
      "# Privacy transformations\n# Pseudonymization: Replace 'Alice Smith' with 'User_8921' (reversible with lookup key)\n# Anonymization: Irreversibly strip all identifying linkages so data cannot be re-identified",
      ["Anonymization is permanently irreversible; Pseudonymization separates identity using a key or token and remains reversible", "Anonymization uses AES; Pseudonymization uses SHA-256", "Anonymization is forbidden by GDPR; Pseudonymization is required", "They are identical techniques with no legal difference"],
      0,
      "Anonymized data is irreversibly destroyed of all identifying links and falls outside GDPR. Pseudonymized data replaces identifiers with pseudonyms but can be re-identified using a separate key.",
      "PCES-30-01 Block 1.5 - Data Privacy",
      ["anonymization", "pseudonymization", "gdpr"])

add_c(98, "1.5", "Incident Response Readiness", "Beginner",
      "What is a 'Tabletop Exercise' in incident response readiness?",
      "# Tabletop exercise simulation\n# Scenario: 'It is Friday 5 PM. The Active Directory domain controller is encrypting files with .locked extension. What does each team member do?'",
      ["A discussion-based simulation where team members walk through their roles and responses to a hypothetical cyber incident scenario", "Testing the physical weight capacity of wooden computer desks in the office", "A competitive video gaming tournament among network engineers", "Replacing network switch cables while sitting around a conference table"],
      0,
      "Tabletop exercises gather key technical, legal, executive, and communications stakeholders to talk through hypothetical breach scenarios and test incident readiness without touching production systems.",
      "PCES-30-01 Block 1.5 - Incident Readiness",
      ["tabletop-exercise", "simulation", "preparedness"])

add_c(99, "1.5", "Professional Ethics", "Beginner",
      "If a security professional accidentally discovers a severe vulnerability in an unauthorized third-party system while performing personal browsing, what is the ethical course of action?",
      "# Ethical response decision\n# Do NOT exploit, exfiltrate data, or run automated scanners\n# Notify the organization securely through their established vulnerability disclosure channel",
      ["Exploit the bug immediately to extract database records as proof", "Report the issue responsibly through the organization's official vulnerability disclosure or security contact without exploiting it", "Post the vulnerability details and exploit code to Reddit immediately", "Demand $10,000 in cryptocurrency before telling them where the flaw is"],
      1,
      "Ethical guidelines dictate reporting the issue through official security contact channels (e.g. security.txt, responsible disclosure) without attempting further exploitation or demanding extortion.",
      "PCES-30-01 Block 1.5 - Professional Ethics",
      ["ethics", "disclosure", "professionalism"])

add_c(100, "1.5", "PCI-DSS Compliance", "Beginner",
      "Which security compliance standard applies specifically to entities that store, process, or transmit cardholder payment data?",
      "# Payment security standard check\n# Requires strict firewalling, encryption in transit and rest, and regular penetration testing",
      ["PCI-DSS (Payment Card Industry Data Security Standard)", "FERPA (Family Educational Rights and Privacy Act)", "FedRAMP (Federal Risk and Authorization Management Program)", "OSHA (Occupational Safety and Health Administration)"],
      0,
      "PCI-DSS (Payment Card Industry Data Security Standard) is the global technical and operational standard required of all organizations handling credit card transactions and cardholder data.",
      "PCES-30-01 Block 1.5 - PCI-DSS Compliance",
      ["pci-dss", "cardholder-data", "compliance"])

print(f"Total cards created: {len(cards)}")
assert len(cards) == 100, f"Expected 100 cards, got {len(cards)}"

# Write Part 1 (cards 1-50)
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

write_ts_file("src/data/pcesSection1CardsPart1.ts", "pcesSection1CardsPart1", cards[:50])
write_ts_file("src/data/pcesSection1CardsPart2.ts", "pcesSection1CardsPart2", cards[50:])

with open("src/data/pcesSection1Flashcards.ts", "w") as f:
    f.write("""import { Flashcard } from '../types';
import { pcesSection1CardsPart1 } from './pcesSection1CardsPart1';
import { pcesSection1CardsPart2 } from './pcesSection1CardsPart2';

export const pcesSection1Flashcards: Flashcard[] = [
  ...pcesSection1CardsPart1,
  ...pcesSection1CardsPart2,
];
""")
print("Wrote pcesSection1Flashcards.ts")
