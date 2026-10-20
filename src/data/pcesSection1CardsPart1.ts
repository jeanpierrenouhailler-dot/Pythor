import { Flashcard } from '../types';

export const pcesSection1CardsPart1: Flashcard[] = [
  {
    id: "pces-1-001",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "CIA Triad",
    difficulty: "Beginner",
    question: "Which core pillar of the CIA Triad is directly violated when an attacker sniffs unencrypted cleartext database passwords over Wi-Fi?",
    codeSnippet: "# Packet inspection for plaintext credentials\nimport socket\ndef check_packet(payload: bytes):\n    if b'password=' in payload:\n        print('[ALERT] Sensitive credential exposed in transit!')",
    options: [
      "Integrity",
      "Confidentiality",
      "Availability",
      "Non-repudiation"
    ],
    correctAnswer: 1,
    explanation: "Confidentiality ensures that sensitive information is kept secret from unauthorized entities. Sniffing passwords in transit is a direct breach of confidentiality.",
    officialRef: "PCES-30-01 Block 1.1 - The CIA Triad",
    tags: ["cia-triad", "confidentiality", "network-traffic"]
  },
  {
    id: "pces-1-002",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "CIA Triad",
    difficulty: "Beginner",
    question: "A rogue script silently modifies an existing customer shipping address in the orders database. Which security goal has been violated?",
    codeSnippet: "# Validating record checksum against unauthorized changes\nimport hashlib\ndef verify_record(data: bytes, expected_hash: str) -> bool:\n    return hashlib.sha256(data).hexdigest() == expected_hash",
    options: [
      "Availability",
      "Integrity",
      "Accountability",
      "Authentication"
    ],
    correctAnswer: 1,
    explanation: "Integrity guarantees that data has not been altered or tampered with by unauthorized parties.",
    officialRef: "PCES-30-01 Block 1.1 - The CIA Triad",
    tags: ["cia-triad", "integrity", "data-tampering"]
  },
  {
    id: "pces-1-003",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "CIA Triad",
    difficulty: "Beginner",
    question: "An attacker sends millions of junk UDP packets to an API gateway, causing the server CPU to reach 100% and rejecting valid customer requests. Which pillar is attacked?",
    codeSnippet: "# Health check detecting degraded service availability\nimport urllib.request\ntry:\n    res = urllib.request.urlopen('https://api.example.com/health', timeout=2)\nexcept Exception as err:\n    print('Service down or timing out!')",
    options: [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Authorization"
    ],
    correctAnswer: 2,
    explanation: "Availability ensures that services and systems remain accessible and responsive to authorized users when needed. Denial of service impairs availability.",
    officialRef: "PCES-30-01 Block 1.1 - The CIA Triad",
    tags: ["cia-triad", "availability", "dos"]
  },
  {
    id: "pces-1-004",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "Extended Security Concepts",
    difficulty: "Intermediate",
    question: "What security property guarantees that a user who performed a critical transaction cannot later falsely deny having done so?",
    codeSnippet: "# Digital signature verification providing non-repudiation\n# Signature = PrivateKey(Hash(Transaction))\n# Anyone with PublicKey can verify that only the key holder signed it",
    options: [
      "Confidentiality",
      "Non-repudiation",
      "High Availability",
      "Least Privilege"
    ],
    correctAnswer: 1,
    explanation: "Non-repudiation provides indisputable cryptographic proof that a specific party performed an action or sent a message, preventing them from denying it.",
    officialRef: "PCES-30-01 Block 1.1 - Extended Security Concepts",
    tags: ["non-repudiation", "digital-signatures", "authenticity"]
  },
  {
    id: "pces-1-005",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "Extended Security Concepts",
    difficulty: "Beginner",
    question: "Which security attribute verifies that a communicating system or message origin is genuine and not an imposter?",
    codeSnippet: "# Verification of certificate origin in TLS\nimport ssl\ncontext = ssl.create_default_context()\n# Validates remote server authenticity against trusted CA root certificates",
    options: [
      "Authenticity",
      "Availability",
      "Anonymity",
      "Asymmetry"
    ],
    correctAnswer: 0,
    explanation: "Authenticity validates that an identity, entity, or message origin is genuine and corresponds to what it claims to be.",
    officialRef: "PCES-30-01 Block 1.1 - Extended Security Concepts",
    tags: ["authenticity", "identity", "cia-triad"]
  },
  {
    id: "pces-1-006",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "Extended Security Concepts",
    difficulty: "Beginner",
    question: "Which operational mechanism is most crucial for enforcing 'Accountability' in a secure enterprise environment?",
    codeSnippet: "# Audit event logging with user identity and timestamp\nimport logging, time\ndef log_admin_action(admin_id: str, action: str):\n    logging.info(f'time={time.time()} user={admin_id} action={action}')",
    options: [
      "Data compression algorithms",
      "Tamper-resistant audit logging",
      "Dynamic RAM allocation",
      "Increasing network MTU size"
    ],
    correctAnswer: 1,
    explanation: "Accountability requires that every user or system action can be traced back to its specific originator, which relies on secure, immutable audit logs.",
    officialRef: "PCES-30-01 Block 1.1 - Extended Security Concepts",
    tags: ["accountability", "audit-logs", "tracing"]
  },
  {
    id: "pces-1-007",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "CIA Triad",
    difficulty: "Beginner",
    question: "A developer prints plaintext API secret keys into standard application output logs that are accessible to all junior interns. What has been breached?",
    codeSnippet: "# Insecure logging practice\napi_secret = 'sk_live_99482710398471'\nprint(f'DEBUG: initializing client with {api_secret}')",
    options: [
      "Integrity",
      "Confidentiality",
      "Availability",
      "Non-repudiation"
    ],
    correctAnswer: 1,
    explanation: "Exposing secret keys to unauthorized viewers is a direct violation of confidentiality.",
    officialRef: "PCES-30-01 Block 1.1 - The CIA Triad",
    tags: ["confidentiality", "secrets", "logging"]
  },
  {
    id: "pces-1-008",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "CIA Triad",
    difficulty: "Intermediate",
    question: "An unauthorized database query changes the status of an unpaid invoice from 'PENDING' to 'PAID' without moving funds. This is a violation of:",
    codeSnippet: "# Database state alteration\nquery = \"UPDATE invoices SET status = 'PAID' WHERE id = 401;\"\n# Executed without payment validation",
    options: [
      "Confidentiality",
      "Availability",
      "Integrity",
      "Fault Tolerance"
    ],
    correctAnswer: 2,
    explanation: "Changing the factual state or accuracy of information without authorization violates data integrity.",
    officialRef: "PCES-30-01 Block 1.1 - The CIA Triad",
    tags: ["integrity", "database", "tampering"]
  },
  {
    id: "pces-1-009",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "Integrity & Hashing",
    difficulty: "Beginner",
    question: "How does the cryptographic 'avalanche effect' in SHA-256 support data integrity verification?",
    codeSnippet: "import hashlib\nh1 = hashlib.sha256(b'PCES 2026').hexdigest()\nh2 = hashlib.sha256(b'pces 2026').hexdigest()\n# Even a 1-bit case difference creates a completely different output",
    options: [
      "It hides the file size by padding with random zeroes",
      "A tiny modification in the input causes a drastic, unpredictable change in the hash digest",
      "It encrypts the payload so that only a private key can decode it",
      "It recovers corrupt sectors on magnetic hard drives"
    ],
    correctAnswer: 1,
    explanation: "The avalanche effect ensures that even a 1-bit change in data radically changes the hash output, making any tampering instantly detectable.",
    officialRef: "PCES-30-01 Block 1.1 - Integrity & Hashing",
    tags: ["integrity", "avalanche-effect", "sha256"]
  },
  {
    id: "pces-1-010",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "Availability & Resilience",
    difficulty: "Beginner",
    question: "What is the primary security goal of implementing redundant server power supplies and clustered database failovers?",
    codeSnippet: "# High availability cluster configuration\ncluster_nodes = ['node-1.prod', 'node-2.prod', 'node-3.prod']\n# If node-1 fails, node-2 automatically assumes primary role",
    options: [
      "Confidentiality",
      "Availability",
      "Authentication",
      "Data minimization"
    ],
    correctAnswer: 1,
    explanation: "Redundancy and failover architectures prevent single points of failure, ensuring system availability despite hardware or network issues.",
    officialRef: "PCES-30-01 Block 1.1 - Availability & Resilience",
    tags: ["availability", "redundancy", "clustering"]
  },
  {
    id: "pces-1-011",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "Authentication vs Authorization",
    difficulty: "Beginner",
    question: "In identity security, how do 'Authentication' and 'Authorization' differ?",
    codeSnippet: "def handle_login_and_access(token, resource):\n    user = authenticate(token)   # Step A: Validate who you are\n    if not authorize(user, resource):  # Step B: Validate permissions\n        raise PermissionError('Denied')",
    options: [
      "Authentication determines permissions; Authorization checks who you are",
      "Authentication validates identity; Authorization determines what resources the identity can access",
      "Authentication requires biometric devices; Authorization requires passwords",
      "They are identical concepts in standard RFC documents"
    ],
    correctAnswer: 1,
    explanation: "Authentication asks 'Who are you?' while Authorization asks 'What are you allowed to do?'.",
    officialRef: "PCES-30-01 Block 1.1 - Auth Concepts",
    tags: ["authentication", "authorization", "identity"]
  },
  {
    id: "pces-1-012",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "Extended Security Concepts",
    difficulty: "Intermediate",
    question: "A developer signs a software release package using their RSA private key. When users verify it using the vendor public key, what two security attributes are verified?",
    codeSnippet: "# Verifying release tarball\n# 1. Vendor identity verified by public key match\n# 2. Package content has not been altered since signing",
    options: [
      "Confidentiality and Storage Compression",
      "Authenticity and Integrity",
      "Availability and Anonymity",
      "Redundancy and Throughput"
    ],
    correctAnswer: 1,
    explanation: "Digital signatures prove Authenticity (the software originates from the authentic vendor) and Integrity (the binary has not been modified).",
    officialRef: "PCES-30-01 Block 1.1 - Extended Security Concepts",
    tags: ["authenticity", "integrity", "digital-signatures"]
  },
  {
    id: "pces-1-013",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "Least Privilege",
    difficulty: "Beginner",
    question: "What is the core principle of 'Least Privilege'?",
    codeSnippet: "# Enforcing non-root container user\n# Dockerfile: USER nonroot\nimport os\nif os.getuid() == 0:\n    raise SystemExit('Running as root violates least privilege!')",
    options: [
      "Every user should have admin rights to speed up operations",
      "Users and processes must be granted only the minimum rights necessary to perform their legitimate tasks",
      "Passwords must be changed every 7 days",
      "All network traffic must be routed over UDP port 53"
    ],
    correctAnswer: 1,
    explanation: "The Principle of Least Privilege limits access rights for users, applications, and processes to only what is strictly required to do their job, reducing the blast radius of any compromise.",
    officialRef: "PCES-30-01 Block 1.1 - Least Privilege",
    tags: ["least-privilege", "access-control", "blast-radius"]
  },
  {
    id: "pces-1-014",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "CIA Triad",
    difficulty: "Intermediate",
    question: "Which of the following incidents represents an Integrity violation rather than an Availability violation?",
    codeSnippet: "# Incident analysis:\n# A: Database offline due to ransomware\n# B: Bank records updated to add $10,000 to an attacker account\n# C: Fiber cable cut by backhoe\n# D: SYN flood knocking server offline",
    options: [
      "Database offline due to ransomware encryption",
      "Bank balance records modified without legitimate deposit transactions",
      "Fiber-optic cable severed outside data center",
      "Web server unresponsive due to SYN flood"
    ],
    correctAnswer: 1,
    explanation: "Unauthorized modification of data records is an integrity violation, while service downtime or server crashes are availability violations.",
    officialRef: "PCES-30-01 Block 1.1 - The CIA Triad",
    tags: ["integrity", "availability", "incident-classification"]
  },
  {
    id: "pces-1-015",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "Authentication & MFA",
    difficulty: "Beginner",
    question: "What are the three canonical authentication factor categories in Multi-Factor Authentication?",
    codeSnippet: "# Multi-factor check: knowledge, possession, inherence\nfactor_1 = 'password'           # Something you know\nfactor_2 = 'hardware_yubikey'   # Something you have\nfactor_3 = 'fingerprint'        # Something you are",
    options: [
      "Something you know, something you have, and something you are",
      "Something you see, something you hear, and something you say",
      "Your username, your password, and your backup password",
      "Your IP address, your MAC address, and your subnet mask"
    ],
    correctAnswer: 0,
    explanation: "The three standard MFA factor categories are Knowledge (something you know), Possession (something you have), and Inherence (something you are).",
    officialRef: "PCES-30-01 Block 1.1 - Authentication & MFA",
    tags: ["mfa", "authentication", "factors"]
  },
  {
    id: "pces-1-016",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "Kerckhoffs Principle",
    difficulty: "Intermediate",
    question: "What is Kerckhoffs's Principle regarding cryptographic system design?",
    codeSnippet: "# Kerckhoffs's Principle: System security must depend only on the secrecy of the key,\n# not on the secrecy of the algorithm.\nfrom cryptography.fernet import Fernet\n# Algorithm (AES-128-CBC) is public; only Fernet key is secret!",
    options: [
      "A cryptosystem must be secure even if everything about the system except the key is public knowledge",
      "Cryptographic keys must be changed every 24 hours",
      "Encryption algorithms must always be kept strictly confidential from the public",
      "Public keys must never be shared across the Internet"
    ],
    correctAnswer: 0,
    explanation: "Kerckhoffs's Principle states that a security system should remain secure even if its design and algorithms are publicly known, provided the key remains secret.",
    officialRef: "PCES-30-01 Block 1.1 - Security Principles",
    tags: ["kerckhoffs", "cryptography", "design-principles"]
  },
  {
    id: "pces-1-017",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "CIA Triad",
    difficulty: "Beginner",
    question: "Why does unencrypted HTTP fail to provide Confidentiality?",
    codeSnippet: "# Plaintext HTTP communication\nimport urllib.request\n# HTTP traffic traverses intermediate routers in plaintext\n# Any router administrator can inspect request and response headers and body",
    options: [
      "HTTP requests are encrypted with ROT13",
      "Any network device along the transmission path can inspect the plaintext payload",
      "HTTP automatically terminates after 10 seconds",
      "HTTP cannot transmit binary files"
    ],
    correctAnswer: 1,
    explanation: "Plaintext HTTP does not encrypt data in transit, allowing any intermediary device, proxy, or eavesdropper to read sensitive payloads.",
    officialRef: "PCES-30-01 Block 1.1 - Confidentiality & HTTP",
    tags: ["confidentiality", "http", "cleartext"]
  },
  {
    id: "pces-1-018",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "Security Architecture",
    difficulty: "Intermediate",
    question: "What is 'Defense-in-Depth' in security architecture?",
    codeSnippet: "# Layered security defense\n# Layer 1: Cloud WAF\n# Layer 2: Network Firewall & DMZ\n# Layer 3: Application Authentication & Input Validation\n# Layer 4: Encrypted Database with Column-Level Grants",
    options: [
      "Relying exclusively on a single strong perimeter firewall",
      "Employing multiple layered security controls so that if one fails, others continue to protect assets",
      "Using multiple antivirus scanners simultaneously on one PC",
      "Installing deep machine learning models on network switches"
    ],
    correctAnswer: 1,
    explanation: "Defense-in-depth is the practice of layering multiple defensive mechanisms across physical, network, system, and application tiers so no single failure allows full compromise.",
    officialRef: "PCES-30-01 Block 1.1 - Security Principles",
    tags: ["defense-in-depth", "architecture", "security-layers"]
  },
  {
    id: "pces-1-019",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "Auditability",
    difficulty: "Beginner",
    question: "What does 'Log Tampering' by an attacker attempt to destroy in an IT system?",
    codeSnippet: "# Attacker attempting to cover tracks\n# rm -rf /var/log/auth.log\n# Destroys evidence linking their IP to the intrusion",
    options: [
      "Accountability and Forensics",
      "CPU processing speed",
      "Network bandwidth",
      "DRAM refresh cycles"
    ],
    correctAnswer: 0,
    explanation: "Deleting or altering logs destroys accountability and forensic audit trails, preventing investigators from determining how the breach occurred and who was responsible.",
    officialRef: "PCES-30-01 Block 1.1 - Auditability",
    tags: ["auditability", "logs", "forensics"]
  },
  {
    id: "pces-1-020",
    track: 'pces',
    section: "Section 1",
    chapter: "1.1",
    category: "Non-repudiation",
    difficulty: "Intermediate",
    question: "Why can symmetric key encryption alone NOT guarantee Non-repudiation?",
    codeSnippet: "# Symmetric key shared between Alice and Bob\nkey = b'sixteen-byte-key'\n# Both Alice and Bob have the EXACT SAME KEY.\n# Either one could have generated and encrypted the message!",
    options: [
      "Symmetric keys are too slow to encrypt large messages",
      "Because the exact same secret key is shared by both parties, either party could have created the message",
      "Symmetric encryption does not work on modern 64-bit operating systems",
      "Symmetric keys cannot be stored in environment variables"
    ],
    correctAnswer: 1,
    explanation: "With symmetric encryption, both parties hold the identical secret key. Therefore, either party could have generated the message, making non-repudiation impossible without asymmetric keys.",
    officialRef: "PCES-30-01 Block 1.1 - Non-Repudiation",
    tags: ["non-repudiation", "symmetric-crypto", "asymmetric"]
  },
  {
    id: "pces-1-021",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Risk Concepts",
    difficulty: "Beginner",
    question: "What is the relationship between Threat, Vulnerability, and Risk?",
    codeSnippet: "# Standard Risk Formula: Risk = Threat x Vulnerability x Impact\ndef calculate_risk(threat_prob: float, vuln_severity: float, asset_impact: float) -> float:\n    return threat_prob * vuln_severity * asset_impact",
    options: [
      "Threat is a flaw; Vulnerability is the hacker; Risk is the firewall",
      "A vulnerability is an existing weakness; a threat is a potential danger; risk is the potential harm when a threat exploits a vulnerability",
      "Risk and Vulnerability are identical terms",
      "Threat is the cost of software; Vulnerability is the patch"
    ],
    correctAnswer: 1,
    explanation: "A vulnerability is a weakness in a system; a threat is a potential event or agent that could exploit that weakness; risk is the potential loss if the threat succeeds.",
    officialRef: "PCES-30-01 Block 1.2 - Threats, Vulnerabilities & Risk",
    tags: ["threat", "vulnerability", "risk"]
  },
  {
    id: "pces-1-022",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Threat Actors",
    difficulty: "Beginner",
    question: "Which term best describes an attacker who uses automated, pre-packaged tools and exploits created by others without understanding how they work?",
    codeSnippet: "# Attacker executing uncustomized downloaded exploits\n# python3 downloaded_exploit.py 192.168.1.50",
    options: [
      "Nation-state APT",
      "Script Kiddie",
      "Organized Crime Boss",
      "Hardware Cryptanalyst"
    ],
    correctAnswer: 1,
    explanation: "A script kiddie is an unsophisticated attacker who relies on publicly available scripts and automated tools without deep technical understanding.",
    officialRef: "PCES-30-01 Block 1.2 - Threat Actors",
    tags: ["threat-actors", "script-kiddies", "basics"]
  },
  {
    id: "pces-1-023",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Threat Actors",
    difficulty: "Intermediate",
    question: "What characterizes an Advanced Persistent Threat (APT)?",
    codeSnippet: "# APT Signature: Stealthy, patient, long-dwell persistence\n# Infiltrate -> Establish persistence -> Evade detection -> Lateral movement -> Data exfiltration",
    options: [
      "Fast, noisy automated DDoS botnets targeting video game lobbies",
      "A highly skilled, well-resourced adversary that maintains stealthy, long-term unauthorized access to high-value networks",
      "An accidental command executed by a junior developer",
      "An open-source software maintenance team"
    ],
    correctAnswer: 1,
    explanation: "APTs are sophisticated, state-sponsored or well-funded groups that infiltrate target networks stealthily, maintaining persistent access for long-term intelligence gathering or espionage.",
    officialRef: "PCES-30-01 Block 1.2 - Threat Actors",
    tags: ["apt", "threat-actors", "persistence"]
  },
  {
    id: "pces-1-024",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Threat Actors",
    difficulty: "Beginner",
    question: "Why do Insider Threats often present a greater risk to organizations than external attackers?",
    codeSnippet: "# Insider privilege check\nuser = {'role': 'db_admin', 'internal_ip': True, 'mfa_authenticated': True}\n# Insiders already possess credentials and understand asset locations",
    options: [
      "Insiders are legally immune to prosecution",
      "Insiders already possess authorized access, internal credentials, and knowledge of valuable assets and weak points",
      "Insiders cannot be detected by firewalls or SIEM logs",
      "Insiders only use zero-day exploits"
    ],
    correctAnswer: 1,
    explanation: "Insiders have legitimate credentials, direct access past perimeter firewalls, and knowledge of business processes and sensitive data repositories.",
    officialRef: "PCES-30-01 Block 1.2 - Threat Actors",
    tags: ["insider-threat", "threat-landscape", "risk"]
  },
  {
    id: "pces-1-025",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Vulnerability Management",
    difficulty: "Beginner",
    question: "What is a 'Zero-Day Vulnerability'?",
    codeSnippet: "# Zero-day state:\npatch_available_from_vendor = False\nexploit_known_to_attackers = True",
    options: [
      "A bug discovered on the 0th day of the fiscal quarter",
      "A security flaw known to attackers or researchers for which the vendor has zero days of patch protection (no fix released yet)",
      "A computer virus that executes in 0 milliseconds",
      "A network connection with 0 latency"
    ],
    correctAnswer: 1,
    explanation: "A zero-day vulnerability is an undisclosed or unpatched vulnerability that is exploited by threat actors before the software vendor has developed and distributed a fix.",
    officialRef: "PCES-30-01 Block 1.2 - Vulnerability Management",
    tags: ["zero-day", "vulnerabilities", "cve"]
  },
  {
    id: "pces-1-026",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Standards & Catalogs",
    difficulty: "Beginner",
    question: "What is the primary function of the CVE (Common Vulnerabilities and Exposures) system managed by MITRE?",
    codeSnippet: "# Example CVE format:\ncve_id = 'CVE-2024-21413'  # Standardized unique identifier for a public vulnerability",
    options: [
      "To provide a standardized, unique identifier for publicly known cybersecurity vulnerabilities",
      "To compile Python source code into native machine executables",
      "To register internet domain names",
      "To encrypt credit card transactions in web browsers"
    ],
    correctAnswer: 0,
    explanation: "CVE provides a standardized, globally recognized identifier (e.g. CVE-2023-XXXX) for public software and hardware security vulnerabilities.",
    officialRef: "PCES-30-01 Block 1.2 - Standards & Catalogs",
    tags: ["cve", "mitre", "vulnerability-catalog"]
  },
  {
    id: "pces-1-027",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "CVSS Scoring",
    difficulty: "Intermediate",
    question: "In the Common Vulnerability Scoring System (CVSS v3.1), what does a Base Score of 9.8 indicate?",
    codeSnippet: "# CVSS Rating Classification\ndef get_cvss_severity(score: float) -> str:\n    if score >= 9.0: return 'Critical'\n    elif score >= 7.0: return 'High'\n    elif score >= 4.0: return 'Medium'\n    return 'Low'",
    options: [
      "Low severity, cosmetic visual bug",
      "Critical severity, typically remotely exploitable without privileges and with high impact",
      "Informational advisory with zero risk",
      "Medium severity requiring local physical access"
    ],
    correctAnswer: 1,
    explanation: "CVSS base scores from 9.0 to 10.0 indicate Critical severity vulnerabilities, typically exploitable over the network with low attack complexity and no privileges required.",
    officialRef: "PCES-30-01 Block 1.2 - CVSS Scoring",
    tags: ["cvss", "severity", "scoring"]
  },
  {
    id: "pces-1-028",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Attack Surface",
    difficulty: "Beginner",
    question: "What constitutes a system's 'Attack Surface'?",
    codeSnippet: "# Examining attack surface: open ports, listening services, web inputs\nopen_ports = [21, 22, 80, 443, 3389]\n# Hardening reduces attack surface by closing unused ports (e.g. closing FTP port 21)",
    options: [
      "The physical outer dimensions of a rack server",
      "The sum total of all points, interfaces, protocols, and code where an unauthorized entity can try to enter or extract data",
      "The resolution of the SOC analyst's monitor",
      "The total count of RAM chips on a motherboard"
    ],
    correctAnswer: 1,
    explanation: "An attack surface encompasses all accessible entry points, network ports, software services, user inputs, and APIs that an attacker can target.",
    officialRef: "PCES-30-01 Block 1.2 - Attack Surface",
    tags: ["attack-surface", "hardening", "exposure"]
  },
  {
    id: "pces-1-029",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Attack Vectors",
    difficulty: "Beginner",
    question: "Which of the following is the best example of an 'Attack Vector'?",
    codeSnippet: "# Phishing email serving as the delivery mechanism for malicious macro\nvector = 'Phishing email with malicious attachment delivered to finance staff'",
    options: [
      "A spear-phishing email containing a weaponized attachment",
      "The SHA-256 hash of an executable file",
      "The warranty expiration date of a router",
      "The legal terms of service on a website"
    ],
    correctAnswer: 0,
    explanation: "An attack vector is the specific path, vehicle, or method used by a threat actor to deliver an exploit or gain access to a target.",
    officialRef: "PCES-30-01 Block 1.2 - Attack Vectors",
    tags: ["attack-vector", "phishing", "entry-points"]
  },
  {
    id: "pces-1-030",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Threat Modeling",
    difficulty: "Intermediate",
    question: "What does the 'T' in Microsoft's STRIDE threat modeling framework stand for?",
    codeSnippet: "# STRIDE Framework:\n# S: Spoofing\n# T: Tampering\n# R: Repudiation\n# I: Information Disclosure\n# D: Denial of Service\n# E: Elevation of Privilege",
    options: [
      "Telemetry",
      "Tampering",
      "Tracking",
      "Throughput"
    ],
    correctAnswer: 1,
    explanation: "In STRIDE, 'T' stands for Tampering (violating Integrity by unauthorized modification of data or code).",
    officialRef: "PCES-30-01 Block 1.2 - STRIDE Threat Modeling",
    tags: ["stride", "threat-modeling", "tampering"]
  },
  {
    id: "pces-1-031",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "CWE Taxonomy",
    difficulty: "Intermediate",
    question: "What is CWE (Common Weakness Enumeration)?",
    codeSnippet: "# Sample CWE: CWE-89 (Improper Neutralization of Special Elements used in an SQL Command)\n# CWE categorizes underlying software flaws that lead to CVEs",
    options: [
      "A standardized taxonomy and categorization of software and hardware weakness types",
      "A cryptographic certificate authority",
      "An anti-malware engine for Python applications",
      "A network routing protocol for secure VPN tunnels"
    ],
    correctAnswer: 0,
    explanation: "CWE is a community-driven catalog of common software architecture, design, and code weaknesses that can result in security vulnerabilities.",
    officialRef: "PCES-30-01 Block 1.2 - CWE Taxonomy",
    tags: ["cwe", "mitre", "software-weakness"]
  },
  {
    id: "pces-1-032",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Threat Intelligence",
    difficulty: "Intermediate",
    question: "What is an Indicator of Compromise (IoC) in cybersecurity investigations?",
    codeSnippet: "# Security incident IoC dictionary\niocs = {\n    'malicious_md5': '44d88612fea8a8f36de82e1278abb02f',\n    'c2_server_ip': '203.0.113.15',\n    'compromised_reg_key': r'HKLM\\Software\\Microsoft\\Windows\\Run\\Backdoor'\n}",
    options: [
      "A measurable piece of forensic evidence indicating that an intrusion or compromise has occurred on a system or network",
      "A performance indicator measuring CPU clock frequency",
      "An invoice indicating renewal of an antivirus license",
      "A metric showing how many lines of Python code were reviewed"
    ],
    correctAnswer: 0,
    explanation: "Indicators of Compromise (IoCs) are forensic artifacts (such as malware hashes, suspicious IP addresses, or altered system files) that signify a potential or active security breach.",
    officialRef: "PCES-30-01 Block 1.2 - Threat Intelligence",
    tags: ["ioc", "forensics", "indicators"]
  },
  {
    id: "pces-1-033",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Vulnerability vs Penetration Testing",
    difficulty: "Intermediate",
    question: "How does a Vulnerability Scan differ from an authorized Penetration Test?",
    codeSnippet: "# Security Assessment Types:\n# Scan: Automated discovery of known unpatched software\n# PenTest: Human authorized attempt to exploit findings and pivot deeper",
    options: [
      "Scans are passive or automated discovery of flaws without exploitation; Penetration tests actively exploit flaws to evaluate real-world risk and defensive resilience",
      "Scans only check Python code; Penetration tests only check Cisco hardware",
      "Vulnerability scans are illegal without a court order; Pen tests are mandatory daily",
      "There is no functional difference"
    ],
    correctAnswer: 0,
    explanation: "A vulnerability scan uses automated tools to identify potential weaknesses, whereas a penetration test actively and safely attempts to exploit vulnerabilities to assess actual business impact.",
    officialRef: "PCES-30-01 Block 1.2 - Vulnerability vs Pen Testing",
    tags: ["vulnerability-scan", "penetration-testing", "methodology"]
  },
  {
    id: "pces-1-034",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Threat Actors",
    difficulty: "Beginner",
    question: "What distinguishes a 'Hacktivist' from a financially motivated cybercriminal?",
    codeSnippet: "# Evaluating attacker motivations\ndef classify_actor(primary_goal: str) -> str:\n    if primary_goal in ['political_protest', 'social_change', 'ideology']:\n        return 'Hacktivist'\n    elif primary_goal in ['ransom_extortion', 'credit_card_theft']:\n        return 'Cybercriminal'",
    options: [
      "Hacktivists are motivated by political, ideological, or social causes rather than monetary extortion",
      "Hacktivists only target Linux workstations",
      "Hacktivists are employed directly by intelligence agencies",
      "Hacktivists never use malware or DDoS attacks"
    ],
    correctAnswer: 0,
    explanation: "Hacktivists launch cyber operations to express political grievances, advocate for human rights, or protest corporate/government actions, rather than for personal financial gain.",
    officialRef: "PCES-30-01 Block 1.2 - Threat Actors",
    tags: ["hacktivist", "threat-actors", "motivation"]
  },
  {
    id: "pces-1-035",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Patch Management",
    difficulty: "Beginner",
    question: "Why is regular patch management one of the most effective security hygiene practices?",
    codeSnippet: "# Checking system for missing security updates\n# Regular patching eliminates known vulnerabilities listed in CVE databases",
    options: [
      "It eliminates the need to use passwords or multi-factor authentication",
      "It remediates known vulnerabilities before threat actors can exploit them with automated toolkits",
      "It doubles the physical processing speed of the CPU",
      "It converts unencrypted HTTP traffic to HTTPS automatically"
    ],
    correctAnswer: 1,
    explanation: "The vast majority of cyber attacks exploit known vulnerabilities for which vendor patches already exist; systematic patching closes these exploitable doors.",
    officialRef: "PCES-30-01 Block 1.2 - Patch Management",
    tags: ["patching", "vulnerabilities", "remediation"]
  },
  {
    id: "pces-1-036",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Supply Chain Security",
    difficulty: "Intermediate",
    question: "What is a 'Software Supply Chain Attack'?",
    codeSnippet: "# Compromised dependency scenario\n# requirements.txt contains 'popular-utility==2.4.1'\n# Attacker compromises the maintainer account on PyPI and injects a backdoor into version 2.4.1",
    options: [
      "An attack targeting the physical trucks delivering server racks",
      "Compromising an upstream third-party component, package repository, or build pipeline to distribute malware to downstream users",
      "Stealing power supply cables from a data center warehouse",
      "An employee submitting an inflated invoice for software licenses"
    ],
    correctAnswer: 1,
    explanation: "In a supply chain attack, attackers compromise a trusted upstream dependency (like an npm or PyPI package, or a vendor build pipeline) to infect downstream organizations.",
    officialRef: "PCES-30-01 Block 1.2 - Supply Chain Security",
    tags: ["supply-chain", "dependencies", "threats"]
  },
  {
    id: "pces-1-037",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Misconfiguration",
    difficulty: "Beginner",
    question: "Which of the following is considered a Security Misconfiguration vulnerability?",
    codeSnippet: "# Insecure default application configuration\nAPP_DEBUG = True\nSECRET_KEY = 'change_me_in_production'\nALLOW_ALL_ORIGINS = True",
    options: [
      "Deploying an application with default passwords, debug mode enabled, and unrestricted directory listing",
      "Writing code in Python instead of assembly",
      "Upgrading a Linux kernel to the latest LTS release",
      "Configuring an automated daily backup job"
    ],
    correctAnswer: 0,
    explanation: "Security misconfiguration includes retaining default credentials, enabling verbose debug mode in production, leaving unnecessary services enabled, and permissive access controls.",
    officialRef: "PCES-30-01 Block 1.2 - Misconfiguration",
    tags: ["misconfiguration", "hardening", "owasp"]
  },
  {
    id: "pces-1-038",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Social Engineering",
    difficulty: "Beginner",
    question: "What attack vector relies primarily on manipulating human psychology rather than software code vulnerabilities?",
    codeSnippet: "# Social engineering impersonation\ncall = 'Hello, this is IT support. We detected a virus on your workstation. Please read me your MFA code.'",
    options: [
      "SQL injection",
      "Social engineering",
      "Buffer overflow",
      "Cross-site request forgery"
    ],
    correctAnswer: 1,
    explanation: "Social engineering targets human vulnerabilities\u2014such as trust, urgency, fear, or helpfulness\u2014to trick people into compromising security or handing over credentials.",
    officialRef: "PCES-30-01 Block 1.2 - Social Engineering",
    tags: ["social-engineering", "human-factors", "threats"]
  },
  {
    id: "pces-1-039",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Vulnerability Databases",
    difficulty: "Beginner",
    question: "What is the National Vulnerability Database (NVD) maintained by NIST?",
    codeSnippet: "# Querying NVD via API for CVE analysis\n# NVD provides standardized CVSS analysis, CPE match criteria, and CWE mappings",
    options: [
      "A private chat server for cyber criminals",
      "The U.S. government repository of standards-based vulnerability management data integrating CVE and CVSS",
      "A proprietary commercial antivirus scanner",
      "A replacement package index for Python wheels"
    ],
    correctAnswer: 1,
    explanation: "NIST's National Vulnerability Database (NVD) provides standardized vulnerability management data including CVSS scores, impacted product identifiers (CPE), and CWE classifications.",
    officialRef: "PCES-30-01 Block 1.2 - Vulnerability Databases",
    tags: ["nvd", "nist", "cve"]
  },
  {
    id: "pces-1-040",
    track: 'pces',
    section: "Section 1",
    chapter: "1.2",
    category: "Threat Landscape",
    difficulty: "Intermediate",
    question: "What is 'Dwell Time' in cyber incident response?",
    codeSnippet: "# Dwell time metric calculation\ndef calculate_dwell_time(initial_compromise_ts, detection_ts):\n    return detection_ts - initial_compromise_ts  # Duration attacker went undetected",
    options: [
      "The time a user spends reading an email before clicking",
      "The duration of time an attacker remains undetected inside a compromised network between initial breach and discovery",
      "The boot time required for a Linux server to restart",
      "The time it takes for a DNS record to propagate globally"
    ],
    correctAnswer: 1,
    explanation: "Dwell time is the duration between an attacker's initial unauthorized access and the moment the organization's defenders detect the intrusion.",
    officialRef: "PCES-30-01 Block 1.2 - Incident Response Metrics",
    tags: ["dwell-time", "incident-response", "metrics"]
  },
  {
    id: "pces-1-041",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Attack Types",
    difficulty: "Beginner",
    question: "What is 'Whaling' in the taxonomy of phishing attacks?",
    codeSnippet: "# Targeted whaling email header\nheaders = {\n    'To': 'cfo@company.example',\n    'Subject': 'CONFIDENTIAL: Wire instructions for merger closing',\n    'From': 'ceo-personal@company-directors.org'\n}",
    options: [
      "Phishing attacks launched against maritime naval vessels",
      "A spear-phishing attack specifically targeting high-profile corporate executives, board members, or high-value individuals",
      "Mass spam sent to millions of random residential email addresses",
      "An attack exploiting deep sea fiber cables"
    ],
    correctAnswer: 1,
    explanation: "Whaling specifically targets high-ranking executives (CEOs, CFOs) to authorize large financial transfers or reveal highly sensitive corporate secrets.",
    officialRef: "PCES-30-01 Block 1.3 - Attack Types",
    tags: ["whaling", "spear-phishing", "social-engineering"]
  },
  {
    id: "pces-1-042",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Malware Taxonomy",
    difficulty: "Beginner",
    question: "What distinguishes a Computer Worm from a Computer Virus?",
    codeSnippet: "# Worm vs Virus classification\ndef is_worm(replicates_autonomously: bool, requires_host_file: bool) -> bool:\n    return replicates_autonomously and not requires_host_file",
    options: [
      "A worm spreads autonomously across networks without human intervention; a virus requires attaching to a host file and user execution to propagate",
      "A worm only attacks mobile devices; a virus only attacks Unix servers",
      "A virus is harmless; a worm is always fatal to hardware",
      "They are identical in replication mechanism"
    ],
    correctAnswer: 0,
    explanation: "A virus must attach to a host program and relies on user action to execute and spread. A worm is self-contained and replicates autonomously across network vulnerabilities.",
    officialRef: "PCES-30-01 Block 1.3 - Malware Taxonomy",
    tags: ["worm", "virus", "malware"]
  },
  {
    id: "pces-1-043",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Ransomware",
    difficulty: "Beginner",
    question: "What is the operational objective of modern Ransomware?",
    codeSnippet: "# Ransomware execution pattern:\n# 1. Enumerate file extensions (.docx, .xlsx, .db, .pdf)\n# 2. Encrypt with strong symmetric cipher\n# 3. Exfiltrate data for double extortion\n# 4. Display ransom note demanding payment for decryption key",
    options: [
      "To permanently destroy server CPU hardware chips",
      "To encrypt user/enterprise files and demand an extortion ransom in exchange for the decryption key",
      "To convert server RAM into swap storage space",
      "To speed up internet connectivity on client machines"
    ],
    correctAnswer: 1,
    explanation: "Ransomware encrypts critical data and demands ransom payment. Modern variants often use 'double extortion' by also exfiltrating sensitive data and threatening public release.",
    officialRef: "PCES-30-01 Block 1.3 - Ransomware",
    tags: ["ransomware", "malware", "extortion"]
  },
  {
    id: "pces-1-044",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Malware Taxonomy",
    difficulty: "Beginner",
    question: "What is a 'Trojan Horse'?",
    codeSnippet: "# Trojan disguise\n# Program name: 'Free_Screen_Recorder.exe'\n# Visible behavior: Records screen\n# Hidden payload: Connects reverse shell to attacker IP",
    options: [
      "Malware that masquerades as desirable or legitimate software while hiding malicious functionality",
      "A network router manufactured in Greece",
      "A protocol that speeds up web requests",
      "A hardware firewall tool"
    ],
    correctAnswer: 0,
    explanation: "A Trojan horse misleads users by appearing as a harmless or useful program while concealing a malicious payload such as a backdoor, spyware, or downloader.",
    officialRef: "PCES-30-01 Block 1.3 - Malware Taxonomy",
    tags: ["trojan", "malware", "deception"]
  },
  {
    id: "pces-1-045",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Denial of Service",
    difficulty: "Beginner",
    question: "How does a Distributed Denial of Service (DDoS) attack differ from a simple Denial of Service (DoS) attack?",
    codeSnippet: "# DDoS: Traffic originating from thousands of distributed botnet nodes\n# DoS: Traffic originating from a single source IP address",
    options: [
      "DDoS attacks use only UDP port 80; DoS uses TCP port 443",
      "DDoS originates from a distributed network of thousands of compromised systems (botnet), whereas DoS originates from a single source",
      "DDoS attacks are completely legal in most countries",
      "DDoS attacks steal passwords; DoS attacks corrupt hard drives"
    ],
    correctAnswer: 1,
    explanation: "A simple DoS comes from a single source and is easily blocked by firewall IP filters. A DDoS uses hundreds or thousands of distributed compromised machines (a botnet), making mitigation much harder.",
    officialRef: "PCES-30-01 Block 1.3 - Denial of Service",
    tags: ["ddos", "dos", "botnet"]
  },
  {
    id: "pces-1-046",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Network Attacks",
    difficulty: "Beginner",
    question: "What occurs during a Man-in-the-Middle (MitM) attack?",
    codeSnippet: "# ARP spoofing / MitM scenario\n# Attacker intercepts packets between Client and Default Gateway\n# Can read, modify, or drop packets before forwarding them",
    options: [
      "An attacker intercepts, relays, and possibly modifies communications between two parties who believe they are communicating directly with each other",
      "A server administrator resets the root password from the local console",
      "A database performs a two-phase commit transaction",
      "A router updates its internal routing table via BGP"
    ],
    correctAnswer: 0,
    explanation: "In a MitM attack, an adversary positions themselves between two endpoints (e.g. via ARP spoofing or rogue Wi-Fi AP) to eavesdrop on or alter unencrypted traffic.",
    officialRef: "PCES-30-01 Block 1.3 - Network Attacks",
    tags: ["mitm", "eavesdropping", "network-security"]
  },
  {
    id: "pces-1-047",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Web & Social Engineering",
    difficulty: "Intermediate",
    question: "What is 'Drive-by Download' in web security?",
    codeSnippet: "# Drive-by download mechanism\n# Victim visits compromised web page -> Malicious script exploits browser plugin flaw\n# -> Malware downloaded and executed without user clicking 'Download'",
    options: [
      "Downloading games from a car's dashboard browser",
      "The automatic, unintentional download of malicious code onto a visitor's device simply by visiting a compromised webpage without clicking download",
      "Transferring Python scripts using Bluetooth",
      "Updating Linux packages while connected to mobile cellular data"
    ],
    correctAnswer: 1,
    explanation: "Drive-by downloads silently install malware by exploiting browser or operating system vulnerabilities when a victim visits an infected or compromised website.",
    officialRef: "PCES-30-01 Block 1.3 - Web Attacks",
    tags: ["drive-by-download", "browser-exploit", "malware"]
  },
  {
    id: "pces-1-048",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Password Attacks",
    difficulty: "Beginner",
    question: "What is 'Credential Stuffing'?",
    codeSnippet: "# Credential stuffing script prototype\n# Reads leaked (email, password) breach dumps and replays them on target service\nfor line in open('breached_credentials.txt'):\n    user, pwd = line.strip().split(':')\n    test_login(user, pwd)",
    options: [
      "Testing thousands of leaked username/password combinations from previous data breaches against multiple other websites, exploiting password reuse",
      "Using a physical device to rapidly type keys into a keyboard port",
      "Guessing every alphanumeric combination from 'a' to 'zzzz'",
      "Resetting user passwords via phone calls to helpdesk"
    ],
    correctAnswer: 0,
    explanation: "Credential stuffing exploits user password reuse by automatically injecting large lists of stolen username/password pairs into login forms across various unrelated services.",
    officialRef: "PCES-30-01 Block 1.3 - Password Attacks",
    tags: ["credential-stuffing", "passwords", "reuse"]
  },
  {
    id: "pces-1-049",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Password Attacks",
    difficulty: "Intermediate",
    question: "How does 'Password Spraying' evade standard account lockout policies?",
    codeSnippet: "# Password spraying logic: One password across many different usernames\n# Avoids triggering '5 failed attempts -> Lock Account' for any single user!\ncommon_pwd = 'Autumn2026!'\nfor account in all_corporate_accounts:\n    attempt_login(account, common_pwd)",
    options: [
      "It tests a single common password against thousands of distinct user accounts instead of trying many passwords against a single account",
      "It disables the Windows Active Directory domain controller",
      "It uses rainbow tables precomputed with MD5 hashes",
      "It intercepts hashes over Kerberos network packets"
    ],
    correctAnswer: 0,
    explanation: "Password spraying avoids account lockouts by attempting a single common password against many different user accounts rather than hammering one user account.",
    officialRef: "PCES-30-01 Block 1.3 - Password Attacks",
    tags: ["password-spraying", "lockout", "brute-force"]
  },
  {
    id: "pces-1-050",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Social Engineering",
    difficulty: "Beginner",
    question: "What is 'Typosquatting' (URL hijacking)?",
    codeSnippet: "# Typosquatting domain registration\nlegitimate_domain = 'bankofamerica.com'\ntyposquat_domain = 'bamkofamerica.com'  # Targets typing errors by users",
    options: [
      "Hacking mechanical keyboards to invert keys",
      "Registering domain names with common spelling mistakes of popular brand websites to deceive users into visiting malicious sites",
      "Writing unit tests with intentional syntax typos",
      "Changing variable casing from snake_case to camelCase"
    ],
    correctAnswer: 1,
    explanation: "Typosquatting relies on common typing mistakes made by internet users (e.g. 'goolge.com') to redirect victims to malicious lookalike websites for phishing or malware delivery.",
    officialRef: "PCES-30-01 Block 1.3 - Typosquatting",
    tags: ["typosquatting", "dns", "phishing"]
  }
];
