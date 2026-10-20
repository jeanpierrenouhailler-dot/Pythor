import json
import os

cards = []

def format_card(c):
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
        f"    options: {json.dumps(c['options'])},\n"
        f"    correctAnswer: {c['correctAnswer']},\n"
        f"    explanation: {json.dumps(c['explanation'])},\n"
        f"    officialRef: {json.dumps(c['officialRef'])},\n"
        f"    tags: {json.dumps(c['tags'])}\n"
        "  }"
    )

def write_ts_file(filepath, var_name, card_list):
    content = (
        "import { Flashcard } from '../types';\n\n"
        f"export const {var_name}: Flashcard[] = [\n"
        + ",\n".join(format_card(c) for c in card_list)
        + "\n];\n"
    )
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Wrote {len(card_list)} cards to {filepath}")

# =========================================================================
# CHAPTER 1.1: Core Cybersecurity Principles & CIA Triad (Cards 1-20)
# =========================================================================
cards.extend([
    {
        "id": "pces-1-001",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "CIA Triad",
        "difficulty": "Beginner",
        "question": "Which pillar of the CIA Triad is directly violated when an unauthorized user intercepts and reads unencrypted sensitive network traffic?",
        "codeSnippet": "# Network sniffer intercepting plaintext communication\npacket_data = b'USER=alice&PASS=Secret123&ACC=987654321'\n# The attacker can inspect packet_data in transit",
        "options": [
            "Integrity",
            "Availability",
            "Confidentiality",
            "Non-repudiation"
        ],
        "correctAnswer": 2,
        "explanation": "Confidentiality ensures that information is accessible only to authorized entities. When sensitive cleartext payload is intercepted and read by an eavesdropper, confidentiality is breached.",
        "officialRef": "PCES-30-01 Block 1.1 - Core Cybersecurity Principles",
        "tags": ["cia-triad", "confidentiality", "security-fundamentals"]
    },
    {
        "id": "pces-1-002",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "CIA Triad",
        "difficulty": "Beginner",
        "question": "An attacker alters a financial transaction amount in a database from $10.00 to $1,000.00 without authorization. Which security objective has been compromised?",
        "codeSnippet": "# Unauthorized modification of state\naccount['balance'] -= 1000.00  # Original intended transfer was 10.00",
        "options": [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Scalability"
        ],
        "correctAnswer": 1,
        "explanation": "Integrity guarantees the accuracy, completeness, and unauthorized modification resistance of data across its lifecycle. Altering data in transit or at rest violates integrity.",
        "officialRef": "PCES-30-01 Block 1.1 - Core Cybersecurity Principles",
        "tags": ["cia-triad", "integrity", "data-protection"]
    },
    {
        "id": "pces-1-003",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "CIA Triad",
        "difficulty": "Beginner",
        "question": "A distributed denial-of-service (DDoS) attack floods a company's web server with junk HTTP requests, causing it to crash. Which element of the CIA Triad is primarily degraded?",
        "codeSnippet": "# Simulating resource exhaustion leading to service outage\nimport socket\ndef check_service():\n    try:\n        s = socket.create_connection(('api.target.com', 443), timeout=2)\n        return 'ONLINE'\n    except (socket.timeout, ConnectionRefusedError):\n        return 'OFFLINE'",
        "options": [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Authorization"
        ],
        "correctAnswer": 2,
        "explanation": "Availability guarantees timely and reliable access to systems, data, and services for authorized users. Denial-of-service attacks specifically target availability by exhausting network or compute resources.",
        "officialRef": "PCES-30-01 Block 1.1 - Core Cybersecurity Principles",
        "tags": ["cia-triad", "availability", "ddos"]
    },
    {
        "id": "pces-1-004",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Security Principles",
        "difficulty": "Intermediate",
        "question": "Which cybersecurity concept ensures that a sender cannot deny having sent a message or initiated an action?",
        "codeSnippet": "# Cryptographic proof of origin and authorship\nfrom cryptography.hazmat.primitives.asymmetric import padding\nfrom cryptography.hazmat.primitives import hashes\n\ndef verify_origin(public_key, signature, message):\n    # If verification succeeds, sender cannot dispute authorship\n    public_key.verify(signature, message, padding.PSS(...), hashes.SHA256())",
        "options": [
            "Anonymity",
            "Non-repudiation",
            "Plausible deniability",
            "Obfuscation"
        ],
        "correctAnswer": 1,
        "explanation": "Non-repudiation provides indisputable proof of the origin, authenticity, and integrity of data, typically achieved via asymmetric digital signatures and audit logging, so neither party can refute their transaction.",
        "officialRef": "PCES-30-01 Block 1.1 - Authenticity and Accountability",
        "tags": ["non-repudiation", "digital-signatures", "accountability"]
    },
    {
        "id": "pces-1-005",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Security Principles",
        "difficulty": "Beginner",
        "question": "What is the security design principle that dictates a user, process, or program should have access only to the minimal set of resources required to perform its legitimate function?",
        "codeSnippet": "# Principle in action: Service account granted only read-access to one bucket\niam_policy = {\n    'Effect': 'Allow',\n    'Action': ['s3:GetObject'],\n    'Resource': 'arn:aws:s3:::app-readonly-data/*'\n}",
        "options": [
            "Security through obscurity",
            "Principle of Least Privilege (PoLP)",
            "Defense in depth",
            "Fail-open execution"
        ],
        "correctAnswer": 1,
        "explanation": "The Principle of Least Privilege (PoLP) restricts access permissions to the bare minimum required for normal operational duties, reducing the blast radius if an account is compromised.",
        "officialRef": "PCES-30-01 Block 1.1 - Security Principles",
        "tags": ["least-privilege", "access-control", "design-principles"]
    },
    {
        "id": "pces-1-006",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Security Principles",
        "difficulty": "Intermediate",
        "question": "Deploying firewalls, endpoint detection (EDR), multi-factor authentication (MFA), and encrypted database backups is an implementation of which security architectural strategy?",
        "codeSnippet": "# Layered defense architecture\n# Layer 1: Cloud WAF / Firewall\n# Layer 2: Network Segmentation\n# Layer 3: Host Bastion with MFA\n# Layer 4: Role-Based Access Control\n# Layer 5: Data Encryption at Rest & in Transit",
        "options": [
            "Single Point of Failure (SPOF)",
            "Defense in Depth (Layered Defense)",
            "Perimeter-only Security",
            "Security by Default Obscurity"
        ],
        "correctAnswer": 1,
        "explanation": "Defense in Depth employs multiple redundant defensive controls across different layers (physical, network, host, application, data) so that if one control fails, subsequent controls prevent complete compromise.",
        "officialRef": "PCES-30-01 Block 1.1 - Security Principles and Layered Defense",
        "tags": ["defense-in-depth", "architecture", "controls"]
    },
    {
        "id": "pces-1-007",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Risk Management",
        "difficulty": "Intermediate",
        "question": "In qualitative risk assessment, what is the standard formula relating Risk, Threat, Vulnerability, and Impact?",
        "codeSnippet": "# Conceptual Risk Evaluation model\ndef evaluate_risk(threat_likelihood, vulnerability_severity, asset_impact):\n    return threat_likelihood * vulnerability_severity * asset_impact",
        "options": [
            "Risk = Threat + Asset Value",
            "Risk = Likelihood (Threat × Vulnerability) × Impact",
            "Risk = Safeguard Cost / Annual Loss Expectancy",
            "Risk = Vulnerability - Threat"
        ],
        "correctAnswer": 1,
        "explanation": "Risk is fundamentally the product of the likelihood of a threat exploiting an existing vulnerability and the resulting financial, operational, or reputational impact on the asset.",
        "officialRef": "PCES-30-01 Block 1.1 - Threat, Vulnerability, and Risk",
        "tags": ["risk-management", "threat-modeling", "metrics"]
    },
    {
        "id": "pces-1-008",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Risk Management",
        "difficulty": "Beginner",
        "question": "What is the distinction between a 'Vulnerability' and a 'Threat'?",
        "codeSnippet": "# Distinguishing terms:\n# Component A: Outdated OpenSSL library with known buffer overflow (CVE-xxxx)\n# Component B: Cybercriminal group active on the dark web scanning for OpenSSL flaws",
        "options": [
            "A vulnerability is an active attacker; a threat is a flaw in software",
            "A vulnerability is a flaw or weakness; a threat is a potential circumstance or entity that could exploit it",
            "A vulnerability only exists in hardware; a threat only exists in source code",
            "They are exact synonyms under ISO 27001 standards"
        ],
        "correctAnswer": 1,
        "explanation": "A vulnerability is a weakness or flaw in software, hardware, or process. A threat is an entity, actor, or event that has the capability and intent to exploit that vulnerability.",
        "officialRef": "PCES-30-01 Block 1.1 - Threat vs Vulnerability",
        "tags": ["vulnerability", "threat", "terminology"]
    },
    {
        "id": "pces-1-009",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Risk Management",
        "difficulty": "Intermediate",
        "question": "Purchasing a cyber insurance policy to cover costs associated with potential data breach remediation is an example of which risk response strategy?",
        "codeSnippet": "# Risk treatment strategy:\n# Transferring financial liability of ransomware recovery to insurer\nannual_premium = 25000\ncoverage_limit = 5000000",
        "options": [
            "Risk Avoidance",
            "Risk Mitigation",
            "Risk Transference",
            "Risk Acceptance"
        ],
        "correctAnswer": 2,
        "explanation": "Risk Transference shifts the financial consequences or operational burden of a risk to a third party, most commonly through insurance contracts or vendor warranties.",
        "officialRef": "PCES-30-01 Block 1.1 - Risk Response Strategies",
        "tags": ["risk-transference", "governance", "insurance"]
    },
    {
        "id": "pces-1-010",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Risk Management",
        "difficulty": "Intermediate",
        "question": "A company decides to shut down and decommission a legacy FTP service completely because it cannot be secured. Which risk response strategy was executed?",
        "codeSnippet": "# Action: Service decommission\ndef decommission_ftp():\n    stop_service('vsftpd')\n    close_port(21)\n    remove_component()",
        "options": [
            "Risk Mitigation",
            "Risk Acceptance",
            "Risk Avoidance",
            "Risk Transference"
        ],
        "correctAnswer": 2,
        "explanation": "Risk Avoidance eliminates the risk entirely by ceasing the activity, disconnecting the vulnerable asset, or opting not to engage in the risky process.",
        "officialRef": "PCES-30-01 Block 1.1 - Risk Response Strategies",
        "tags": ["risk-avoidance", "system-lifecycle"]
    },
    {
        "id": "pces-1-011",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Security Principles",
        "difficulty": "Beginner",
        "question": "Which design principle asserts that the security of a cryptosystem should depend only on the secrecy of the key, not on keeping the cryptographic algorithm secret?",
        "codeSnippet": "# Kerckhoffs's Principle demonstration\n# The AES algorithm (Rijndael) is public and peer-reviewed worldwide\n# Only the 256-bit symmetric key must remain strictly private\nkey = b'0123456789abcdef0123456789abcdef'",
        "options": [
            "Shannon's Law of Entropy",
            "Kerckhoffs's Principle",
            "Occam's Razor",
            "Metcalfe's Law"
        ],
        "correctAnswer": 1,
        "explanation": "Kerckhoffs's principle states that a cryptosystem should remain secure even if everything about the system, except the cryptographic key, is public knowledge. Relying on secrecy of algorithms is 'security through obscurity'.",
        "officialRef": "PCES-30-01 Block 1.1 - Cryptographic Principles",
        "tags": ["kerckhoffs", "cryptography", "open-design"]
    },
    {
        "id": "pces-1-012",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Security Principles",
        "difficulty": "Intermediate",
        "question": "Why is 'Security through Obscurity' considered an anti-pattern in modern software engineering?",
        "codeSnippet": "# Flawed approach: relying on non-standard port and hidden variable names\ndef check_auth(p):\n    # Secret admin port 8492 and hardcoded obfuscated string\n    return p == 'x9_secret_obfuscated_token'",
        "options": [
            "It requires too much CPU overhead to maintain",
            "It creates a false sense of security; once the secret mechanism is discovered or reverse-engineered, zero security remains",
            "It is strictly illegal under the US Computer Fraud and Abuse Act",
            "It prevents Python code from compiling to bytecode"
        ],
        "correctAnswer": 1,
        "explanation": "Security through obscurity relies on attackers not discovering how the system works. Since reverse-engineering, decompilation, and sniffing easily unmask hidden details, obscurity provides no genuine defense.",
        "officialRef": "PCES-30-01 Block 1.1 - Security Anti-Patterns",
        "tags": ["security-through-obscurity", "anti-patterns"]
    },
    {
        "id": "pces-1-013",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Security Principles",
        "difficulty": "Intermediate",
        "question": "What does the principle of 'Fail-Safe Defaults' (or 'Default Deny') prescribe in firewall and authorization configurations?",
        "codeSnippet": "# Default Deny Firewall Pattern:\n# Rule 1: Allow TCP 443 from Any to Web-Server\n# Rule 2: Allow TCP 80 from Any to Web-Server\n# Final Rule: DROP / DENY ALL traffic",
        "options": [
            "If an error occurs, grant access to avoid disrupting business continuity",
            "Unless access is explicitly granted by a rule, all requests are denied by default",
            "Store all system error logs on open public shares for debugging",
            "Allow all incoming traffic unless an IP address is on an active denylist"
        ],
        "correctAnswer": 1,
        "explanation": "Fail-safe defaults (Default Deny) ensures that access is refused unless an explicit allow rule matches. If the system fails or encounters an unknown state, it fails closed (denies access), preventing security bypasses.",
        "officialRef": "PCES-30-01 Block 1.1 - Security Principles",
        "tags": ["default-deny", "fail-safe", "access-control"]
    },
    {
        "id": "pces-1-014",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Security Principles",
        "difficulty": "Intermediate",
        "question": "Requiring two different financial managers to approve a wire transfer over $50,000 is an operational security practice known as:",
        "codeSnippet": "# Two-person control verification\ndef execute_transfer(amount, approver1, approver2):\n    assert amount > 50000\n    assert approver1.role == 'Manager'\n    assert approver2.role == 'Manager'\n    assert approver1.id != approver2.id, 'Single individual cannot self-approve'",
        "options": [
            "Separation of Duties (Dual Control)",
            "Discretionary Access",
            "Delegated Impersonation",
            "Single Sign-On"
        ],
        "correctAnswer": 0,
        "explanation": "Separation of Duties (SoD) divides critical tasks among multiple individuals so that no single person possesses unilateral control to execute fraud or critical errors undetected.",
        "officialRef": "PCES-30-01 Block 1.1 - Governance & Separation of Duties",
        "tags": ["separation-of-duties", "dual-control", "internal-controls"]
    },
    {
        "id": "pces-1-015",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Security Terminology",
        "difficulty": "Beginner",
        "question": "What is an 'Exploit' in cybersecurity terminology?",
        "codeSnippet": "# Vulnerability: Unchecked buffer length\n# Exploit: Crafting the specific payload that overrides the return pointer\nexploit_payload = b'A' * 64 + b'\\xef\\xbe\\xad\\xde'",
        "options": [
            "A security patch released by an operating system vendor",
            "A specific piece of software, sequence of commands, or technique used to take advantage of a vulnerability",
            "A comprehensive legal contract signed between a pen-tester and client",
            "A cryptographic algorithm used to generate digital signatures"
        ],
        "correctAnswer": 1,
        "explanation": "An exploit is a specialized payload, software tool, or command sequence engineered to take advantage of a specific software or hardware vulnerability to achieve unauthorized execution or access.",
        "officialRef": "PCES-30-01 Block 1.1 - Cybersecurity Terminology",
        "tags": ["exploit", "vulnerability", "terminology"]
    },
    {
        "id": "pces-1-016",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "CIA Triad",
        "difficulty": "Intermediate",
        "question": "A cryptographic checksum (such as SHA-256) published alongside a downloadable Python wheel package on PyPI is intended to verify which property?",
        "codeSnippet": "# Verifying downloaded installer package\nimport hashlib\n\nwith open('package.whl', 'rb') as f:\n    digest = hashlib.sha256(f.read()).hexdigest()\n\nassert digest == expected_sha256, 'Integrity check failed: package tampered!'",
        "options": [
            "Confidentiality of the installer code",
            "Integrity of the downloaded file against corruption or tampering",
            "Availability of the distribution mirror servers",
            "Anonymity of the developer who published the package"
        ],
        "correctAnswer": 1,
        "explanation": "Cryptographic hashes verify file integrity. Comparing the downloaded file's digest against the vendor's published hash confirms the file was not altered in transit or replaced with malware.",
        "officialRef": "PCES-30-01 Block 1.1 - Core Cybersecurity Principles",
        "tags": ["integrity", "hashing", "supply-chain"]
    },
    {
        "id": "pces-1-017",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Security Principles",
        "difficulty": "Intermediate",
        "question": "What is the concept of 'Attack Surface' in system security analysis?",
        "codeSnippet": "# Evaluating attack surface: open network listening endpoints\n# Port 22 (SSH), Port 80 (HTTP), Port 443 (HTTPS), Port 3306 (MySQL), Port 6379 (Redis)\n# Closing Ports 3306 and 6379 to external traffic reduces the attack surface",
        "options": [
            "The physical exterior surface area of server hardware in a datacenter",
            "The total sum of all points, interfaces, and vectors where an unauthorized user can try to enter or extract data",
            "The number of security patches installed within a 30-day window",
            "The bandwidth capacity of the organization's primary internet gateway"
        ],
        "correctAnswer": 1,
        "explanation": "The attack surface is the aggregate of all reachable entry points (open ports, running services, exposed APIs, user inputs, human interactions) that can be targeted by an adversary.",
        "officialRef": "PCES-30-01 Block 1.1 - Attack Surface Reduction",
        "tags": ["attack-surface", "threat-modeling", "hardening"]
    },
    {
        "id": "pces-1-018",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Security Metrics",
        "difficulty": "Intermediate",
        "question": "What does CVSS stand for in vulnerability management, and what is its standard score range?",
        "codeSnippet": "# Vulnerability Assessment metadata\ncve_id = 'CVE-2024-XXXX'\ncvss_version = '3.1'\nbase_score = 9.8  # Critical vulnerability",
        "options": [
            "Cyber Vector Security Suite (range: 1 to 5)",
            "Common Vulnerability Scoring System (range: 0.0 to 10.0)",
            "Certified Vulnerability Software Standard (range: -100 to +100)",
            "Continuous Verification Security Service (range: 0% to 100%)"
        ],
        "correctAnswer": 1,
        "explanation": "CVSS stands for Common Vulnerability Scoring System. It provides an open standard for assessing the severity of security vulnerabilities, rated on a numeric scale from 0.0 (None) to 10.0 (Critical).",
        "officialRef": "PCES-30-01 Block 1.1 - Vulnerability Scoring & CVSS",
        "tags": ["cvss", "vulnerability-management", "metrics"]
    },
    {
        "id": "pces-1-019",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Security Principles",
        "difficulty": "Intermediate",
        "question": "What is the primary objective of 'Economy of Mechanism' as formulated by Saltzer and Schroeder?",
        "codeSnippet": "# Simpler security designs are easier to audit and less prone to edge-case bugs\ndef authenticate(token):\n    # Keep security validation logic compact and verifiable\n    return token_service.validate(token)",
        "options": [
            "Purchasing the least expensive commercial antivirus license",
            "Keeping security design and implementation as simple and small as possible to facilitate verification",
            "Running security tools only during off-peak economic hours",
            "Automating tax compliance calculations in e-commerce apps"
        ],
        "correctAnswer": 1,
        "explanation": "Economy of Mechanism states that security architectures should be kept simple and straightforward. Complex designs are harder to understand, test, and audit, significantly increasing the probability of exploitable flaws.",
        "officialRef": "PCES-30-01 Block 1.1 - Saltzer-Schroeder Security Principles",
        "tags": ["economy-of-mechanism", "security-design"]
    },
    {
        "id": "pces-1-020",
        "section": "Section 1",
        "chapter": "1.1",
        "category": "Security Principles",
        "difficulty": "Beginner",
        "question": "Which security concept describes maintaining comprehensive, tamper-evident logs that link actions to specific individual identities?",
        "codeSnippet": "# Audit Log Entry\nimport logging\nlogging.info('User admin_user_42 initiated role elevation for user_99 at 2026-09-28T12:00:00Z')",
        "options": [
            "Accountability (Auditing)",
            "Confidentiality",
            "Obfuscation",
            "Replication"
        ],
        "correctAnswer": 0,
        "explanation": "Accountability ensures that all user actions, privilege changes, and transactions can be traced directly to an authenticated individual identity via secure, tamper-resistant audit logs.",
        "officialRef": "PCES-30-01 Block 1.1 - Accountability and Auditing",
        "tags": ["accountability", "auditing", "logging"]
    }
])
print(f"Total cards so far: {len(cards)}")


# =========================================================================
# CHAPTER 1.2: Threat Landscape, Attack Vectors & Social Engineering (Cards 21-40)
# =========================================================================
cards.extend([
    {
        "id": "pces-1-021",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Social Engineering",
        "difficulty": "Beginner",
        "question": "What type of social engineering attack specifically targets high-profile executives or senior decision-makers to authorize fraudulent wire transfers?",
        "codeSnippet": "# Phishing variant classification:
# Target: Chief Financial Officer (CFO)
# Payload: Urgent invoice spoofed from CEO email
attack_type = 'Whaling'  # Executive-targeted spear phishing",
        "options": [
            "Vishing",
            "Whaling",
            "Smishing",
            "Baiting"
        ],
        "correctAnswer": 1,
        "explanation": "Whaling is a highly targeted form of spear phishing directed specifically at C-suite executives, senior leadership, or high-net-worth targets to steal valuable credentials or trigger financial fraud.",
        "officialRef": "PCES-30-01 Block 1.2 - Social Engineering Attacks",
        "tags": ["social-engineering", "phishing", "whaling"]
    },
    {
        "id": "pces-1-022",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Social Engineering",
        "difficulty": "Beginner",
        "question": "Which social engineering attack is executed via fraudulent SMS text messages containing malicious links?",
        "codeSnippet": "# SMS payload example:
# 'URGENT: Your bank account is locked. Click https://bank-verify-fraud.com to verify.'",
        "options": [
            "Vishing (Voice Phishing)",
            "Smishing (SMS Phishing)",
            "Spear Phishing",
            "Watering Hole"
        ],
        "correctAnswer": 1,
        "explanation": "Smishing (SMS phishing) uses deceptive short text messages to trick recipients into clicking malicious links or revealing sensitive OTP credentials.",
        "officialRef": "PCES-30-01 Block 1.2 - Social Engineering Attacks",
        "tags": ["smishing", "mobile-security", "phishing"]
    },
    {
        "id": "pces-1-023",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Malware Analysis",
        "difficulty": "Intermediate",
        "question": "What is the primary operational difference between a computer 'Virus' and a 'Worm'?",
        "codeSnippet": "# Propagation mechanism comparison:
# Entity A: Infects legitimate host executable; requires user execution to spread
# Entity B: Exploits network vulnerability; self-replicates across subnets autonomously",
        "options": [
            "A virus targets Linux; a worm only targets Windows",
            "A virus requires a host program and user interaction to spread; a worm is self-contained and propagates autonomously across networks",
            "A virus encrypts files for ransom; a worm only logs keystrokes",
            "A virus uses symmetric encryption; a worm uses asymmetric encryption"
        ],
        "correctAnswer": 1,
        "explanation": "A virus attaches itself to an existing host executable file and needs a user to launch it to spread. A worm is an autonomous standalone program that exploits network vulnerabilities to replicate across systems without user action.",
        "officialRef": "PCES-30-01 Block 1.2 - Malware Taxonomy",
        "tags": ["malware", "virus", "worm"]
    },
    {
        "id": "pces-1-024",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Malware Analysis",
        "difficulty": "Beginner",
        "question": "What type of malware restricts user access to system files by encrypting them and demands payment for the decryption key?",
        "codeSnippet": "# Ransom note generated on victim endpoint
with open('README_DECRYPT.txt', 'w') as f:
    f.write('Your files have been encrypted with AES-256. Pay 2 BTC to recover.')",
        "options": [
            "Spyware",
            "Rootkit",
            "Ransomware",
            "Adware"
        ],
        "correctAnswer": 2,
        "explanation": "Ransomware is malicious software that encrypts victim files or locks system access, demanding payment (frequently cryptocurrency) in exchange for restoring access.",
        "officialRef": "PCES-30-01 Block 1.2 - Malware Taxonomy",
        "tags": ["ransomware", "malware", "threats"]
    },
    {
        "id": "pces-1-025",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Malware Analysis",
        "difficulty": "Intermediate",
        "question": "What type of malware is engineered to conceal its existence and unauthorized privileged access deeply inside operating system kernel structures?",
        "codeSnippet": "# Deep OS hooking: intercepting system calls (e.g. sys_read, sys_getdents)
# Hidden from standard process listing utilities (ps, top, taskmgr)",
        "options": [
            "Rootkit",
            "Adware",
            "Macro virus",
            "Keylogger"
        ],
        "correctAnswer": 0,
        "explanation": "A rootkit is a collection of software tools designed to grant unauthorized administrative or kernel-level control while actively masking its presence from antivirus, process tables, and system diagnostics.",
        "officialRef": "PCES-30-01 Block 1.2 - Malware Taxonomy",
        "tags": ["rootkit", "kernel", "persistence"]
    },
    {
        "id": "pces-1-026",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Network Attacks",
        "difficulty": "Intermediate",
        "question": "In a TCP SYN flood attack, which state does the attacker exploit on the victim's server?",
        "codeSnippet": "# TCP 3-Way Handshake abuse
# Client -> SYN (Spoofed IP)
# Server -> SYN-ACK (Allocates TCB memory in backlog queue)
# Client -> [Never sends final ACK, leaving socket in SYN_RECEIVED state]",
        "options": [
            "TIME_WAIT saturation",
            "SYN_RECEIVED half-open connection table exhaustion",
            "ESTABLISHED buffer overflow",
            "FIN_WAIT-2 timeout failure"
        ],
        "correctAnswer": 1,
        "explanation": "In a SYN flood, the attacker sends an avalanche of SYN requests with spoofed source IPs and never responds to the server's SYN-ACK. The server's half-open connection queue (Transmission Control Block table) fills up, denying legitimate connections.",
        "officialRef": "PCES-30-01 Block 1.2 - Network Attacks & DoS",
        "tags": ["dos", "syn-flood", "tcp-handshake"]
    },
    {
        "id": "pces-1-027",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Network Attacks",
        "difficulty": "Intermediate",
        "question": "Why do attackers utilize UDP (rather than TCP) to orchestrate reflective amplification DDoS attacks (e.g., via NTP, DNS, or SNMP)?",
        "codeSnippet": "# Reflection amplification premise:
# Attacker sends 64-byte UDP request with SPOOFED victim IP to open NTP server
# NTP server sends 3000-byte response back to victim IP
# UDP does not require connection handshake, permitting IP spoofing",
        "options": [
            "UDP enforces stronger encryption than TCP",
            "UDP is connectionless and stateless, allowing easy spoofing of the victim source IP address",
            "UDP packets cannot be filtered by enterprise edge firewalls",
            "TCP ports above 1024 are reserved solely for operating system kernels"
        ],
        "correctAnswer": 1,
        "explanation": "UDP is connectionless and does not require a 3-way handshake. Attackers can forge (spoof) the source IP to match the victim's IP, causing intermediate reflection servers to deliver amplified response payloads to the target.",
        "officialRef": "PCES-30-01 Block 1.2 - Amplification Attacks",
        "tags": ["udp-amplification", "ddos", "spoofing"]
    },
    {
        "id": "pces-1-028",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Network Attacks",
        "difficulty": "Intermediate",
        "question": "Which layer-2 attack sends fraudulent ARP messages across a local area network to link the attacker's MAC address with the IP address of the default gateway?",
        "codeSnippet": "# ARP Spoofing concept:
# Target IP: 192.168.1.1 (Gateway)
# Attacker MAC: 00:11:22:33:44:55 claims 'I have 192.168.1.1'
# Local LAN switch updates ARP cache, routing traffic through attacker",
        "options": [
            "DNS Amplification",
            "ARP Poisoning / ARP Spoofing",
            "BGP Hijacking",
            "DHCP Starvation"
        ],
        "correctAnswer": 1,
        "explanation": "ARP poisoning broadcasts gratuitous ARP replies containing the attacker's MAC mapped to a legitimate host (e.g., gateway) IP. This allows the attacker to intercept, inspect, or modify LAN frames in a Man-in-the-Middle position.",
        "officialRef": "PCES-30-01 Block 1.2 - Network Attacks",
        "tags": ["arp-poisoning", "mitm", "layer-2"]
    },
    {
        "id": "pces-1-029",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Web Attacks",
        "difficulty": "Intermediate",
        "question": "An attacker intercepts an authenticated user's active session cookie over an unencrypted Wi-Fi connection and reuses it to impersonate the user. What is this attack called?",
        "codeSnippet": "# Replaying stolen session identifier
headers = {
    'Cookie': 'session_id=9f8e7d6c5b4a3120; HttpOnly=False'
}
requests.get('https://intranet.company.com/profile', headers=headers)",
        "options": [
            "Buffer Overflow",
            "Session Hijacking (Cookie Replay)",
            "SQL Injection",
            "Clickjacking"
        ],
        "correctAnswer": 1,
        "explanation": "Session hijacking (or session sidejacking) involves capturing a valid session token or cookie to impersonate an authenticated user without needing their password. Mitigated by HTTPS and Secure cookie flags.",
        "officialRef": "PCES-30-01 Block 1.2 - Web & Network Attacks",
        "tags": ["session-hijacking", "cookies", "web-security"]
    },
    {
        "id": "pces-1-030",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Threat Actor Taxonomy",
        "difficulty": "Intermediate",
        "question": "What is an Advanced Persistent Threat (APT)?",
        "codeSnippet": "# APT characteristics:
# - Nation-state or highly funded cyber syndicate
# - Stealthy, long-term foothold in victim network (dwell time months/years)
# - Custom zero-day exploits and multi-stage lateral movement",
        "options": [
            "An automated antivirus scanning tool running continuously in the background",
            "A sophisticated, well-funded adversary group with specific objectives that maintains prolonged stealthy access to a network",
            "An entry-level script kiddie using downloaded public exploit scripts",
            "A temporary software license expiration alert"
        ],
        "correctAnswer": 1,
        "explanation": "An APT (Advanced Persistent Threat) is an adversary (often nation-state backed or sophisticated criminal group) with advanced capabilities, significant resources, and long-term strategic objectives, remaining undetected in victim networks for extended periods.",
        "officialRef": "PCES-30-01 Block 1.2 - Threat Actors",
        "tags": ["apt", "threat-actors", "cybersecurity"]
    },
    {
        "id": "pces-1-031",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Vulnerability Concepts",
        "difficulty": "Beginner",
        "question": "What is a 'Zero-Day' (0-day) vulnerability?",
        "codeSnippet": "# Timeline of a Zero-Day:
# Day 0: Flaw discovered by researcher or attacker before software vendor is aware
# Vendor patch available? NO
# Exploitable in the wild? YES",
        "options": [
            "A vulnerability that takes zero days to patch automatically",
            "A software flaw that is known to attackers or researchers but has no official patch or fix available from the vendor",
            "A bug discovered zero days before software enters beta testing",
            "A non-critical flaw that expires after 24 hours"
        ],
        "correctAnswer": 1,
        "explanation": "A zero-day vulnerability is a flaw that is unknown to the software creator or for which no official security patch exists yet, leaving systems exposed to zero-day exploits.",
        "officialRef": "PCES-30-01 Block 1.2 - Vulnerability Concepts",
        "tags": ["zero-day", "vulnerabilities", "patching"]
    },
    {
        "id": "pces-1-032",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Social Engineering",
        "difficulty": "Intermediate",
        "question": "An attacker sets up a malicious rogue Wi-Fi access point in a coffee shop with the same SSID as the shop's legitimate public network ('CoffeeShop_Free'). What is this attack called?",
        "codeSnippet": "# Rogue AP configuration
# Legitimate AP: SSID 'CoffeeShop_Free', BSSID AA:BB:CC:11:22:33
# Rogue AP:      SSID 'CoffeeShop_Free', BSSID 00:11:22:99:88:77 (higher signal power)",
        "options": [
            "Evil Twin Attack",
            "Bluejacking",
            "WPS Brute-Force",
            "Rainbow Table Attack"
        ],
        "correctAnswer": 0,
        "explanation": "An Evil Twin attack is a rogue wireless access point that masquerades as a trusted, legitimate Wi-Fi network by cloning its SSID, tricking nearby devices into connecting through the attacker's interception equipment.",
        "officialRef": "PCES-30-01 Block 1.2 - Wireless Attacks",
        "tags": ["evil-twin", "wi-fi", "wireless-security"]
    },
    {
        "id": "pces-1-033",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Social Engineering",
        "difficulty": "Beginner",
        "question": "Leaving infected USB drives labeled 'Confidential Salaries 2026' in a company parking lot hoping employees plug them into corporate computers is an example of:",
        "codeSnippet": "# Human curiosity exploitation
# Weaponized USB contains autorun shortcut or HID microcontroller (Rubber Ducky)",
        "options": [
            "Tailgating",
            "Baiting",
            "Quid Pro Quo",
            "Dumpster Diving"
        ],
        "correctAnswer": 1,
        "explanation": "Baiting exploits human curiosity or greed by promising a good (or intriguing content) in exchange for connecting an infected medium, such as a malicious USB flash drive or CD.",
        "officialRef": "PCES-30-01 Block 1.2 - Social Engineering Attacks",
        "tags": ["baiting", "social-engineering", "usb-threats"]
    },
    {
        "id": "pces-1-034",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Social Engineering",
        "difficulty": "Beginner",
        "question": "An unauthorized person follows closely behind an employee through an access-controlled security door without badge authentication. This physical security breach is known as:",
        "codeSnippet": "# Physical access control bypass
# Employee badges in -> Access door unlocks for 5 seconds
# Attacker slips in directly behind employee without scanning",
        "options": [
            "Tailgating (Piggybacking)",
            "Shoulder Surfing",
            "Watering Hole",
            "Spear Phishing"
        ],
        "correctAnswer": 0,
        "explanation": "Tailgating (or piggybacking) occurs when an unauthorized individual closely follows an authorized person into a restricted physical facility or secured area without scanning a valid credential.",
        "officialRef": "PCES-30-01 Block 1.2 - Physical Security & Social Engineering",
        "tags": ["tailgating", "physical-security", "social-engineering"]
    },
    {
        "id": "pces-1-035",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Social Engineering",
        "difficulty": "Intermediate",
        "question": "What is a 'Watering Hole' attack?",
        "codeSnippet": "# Threat Vector: Compromising a trusted third-party website frequented by target
# Target: Industrial engineers at EnergyCorp
# Attacker compromises: 'TurbineEngineeringForum.org' and embeds zero-day exploit",
        "options": [
            "Flooding a drinking water utility SCADA network with false sensor metrics",
            "Compromising a specific legitimate website known to be regularly visited by the targeted organization's employees",
            "Injecting SQL payloads into employee payroll databases",
            "Cracking password hashes using precomputed hash tables"
        ],
        "correctAnswer": 1,
        "explanation": "A Watering Hole attack identifies websites frequently visited by members of a targeted group or organization, compromises one of those trusted third-party sites, and infects visitors with targeted malware.",
        "officialRef": "PCES-30-01 Block 1.2 - Advanced Attack Vectors",
        "tags": ["watering-hole", "targeted-attacks", "threats"]
    },
    {
        "id": "pces-1-036",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Password Attacks",
        "difficulty": "Intermediate",
        "question": "An attacker uses a list of millions of username/password pairs breached from one public website to systematically attempt logins on thousands of unrelated online services. What attack is this?",
        "codeSnippet": "# Credential reuse script simulation
# for email, password in leaked_breach_dump:
#     response = requests.post('https://bank.com/api/login', json={'u': email, 'p': password})
#     if response.status_code == 200: save_compromised(email)",
        "options": [
            "Rainbow Table Attack",
            "Credential Stuffing",
            "Password Spraying",
            "Side-channel timing attack"
        ],
        "correctAnswer": 1,
        "explanation": "Credential stuffing automatedly tests stolen username/password pairs from prior breaches against multiple other services, banking on users reusing the same passwords across different platforms.",
        "officialRef": "PCES-30-01 Block 1.2 - Authentication Attacks",
        "tags": ["credential-stuffing", "password-attacks", "breaches"]
    },
    {
        "id": "pces-1-037",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Password Attacks",
        "difficulty": "Intermediate",
        "question": "What distinguishes 'Password Spraying' from a traditional brute-force attack against a single user account?",
        "codeSnippet": "# Password Spraying technique:
# Instead of trying 10,000 passwords against Alice (which locks account)
# Attacker tries ONE common password ('Summer2026!') across 10,000 different user accounts",
        "options": [
            "Password spraying tests multiple passwords against one account until locked out",
            "Password spraying tries a small set of commonly used passwords across thousands of user accounts to evade account lockout thresholds",
            "Password spraying requires physical access to the domain controller",
            "Password spraying is only effective against Linux shadow files"
        ],
        "correctAnswer": 1,
        "explanation": "Password spraying attempts one or two common passwords (e.g., 'SeasonYear!') against a large list of accounts, intentionally avoiding the account lockout threshold that would trigger from repeatedly failing one user.",
        "officialRef": "PCES-30-01 Block 1.2 - Authentication Attacks",
        "tags": ["password-spraying", "account-lockout", "evasion"]
    },
    {
        "id": "pces-1-038",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Insider Threat",
        "difficulty": "Intermediate",
        "question": "What is an 'Insider Threat' in organizational cybersecurity?",
        "codeSnippet": "# Insider Threat Profile:
# Actor: Disgruntled employee who already possesses legitimate root credentials
# Actions: Exfiltrating proprietary intellectual property before resigning",
        "options": [
            "An external attacker scanning ports from an IP address in the same country",
            "A security threat originating from within an organization (current/former employee, contractor, or partner) with authorized access",
            "A hardware failure inside an air-conditioned server chassis",
            "A software bug located within an internal private class method"
        ],
        "correctAnswer": 1,
        "explanation": "An insider threat comes from individuals within or affiliated with an organization (employees, contractors, partners) who have legitimate authorized access and misuse that privilege intentionally or through negligence.",
        "officialRef": "PCES-30-01 Block 1.2 - Insider Threats",
        "tags": ["insider-threat", "privilege-abuse", "governance"]
    },
    {
        "id": "pces-1-039",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Network Attacks",
        "difficulty": "Intermediate",
        "question": "What occurs during a 'DNS Spoofing' (DNS Cache Poisoning) attack?",
        "codeSnippet": "# DNS Poisoning impact:
# Victim queries DNS for 'banking.com'
# Poisoned cache returns attacker IP (198.51.100.42) instead of real IP (203.0.113.1)
# Victim connects to rogue phishing site",
        "options": [
            "The victim's local DNS service is deleted from the filesystem",
            "Corrupt DNS data is injected into a resolver's cache, redirecting queries for a legitimate domain to an attacker-controlled server",
            "DNS queries are encrypted with an unrecoverable private key",
            "The root DNS zone servers are physically powered off"
        ],
        "correctAnswer": 1,
        "explanation": "DNS cache poisoning injects false DNS mapping records into a caching resolver so that queries for legitimate domain names resolve to attacker-controlled IP addresses. Mitigated by DNSSEC.",
        "officialRef": "PCES-30-01 Block 1.2 - Network Attacks",
        "tags": ["dns-spoofing", "cache-poisoning", "dnssec"]
    },
    {
        "id": "pces-1-040",
        "section": "Section 1",
        "chapter": "1.2",
        "category": "Social Engineering",
        "difficulty": "Beginner",
        "question": "Surreptitiously watching someone enter their PIN at an ATM or typing their password at a keyboard is known as:",
        "codeSnippet": "# Direct visual observation of credentials
# Attacker stands nearby observing numeric key presses on a payment terminal",
        "options": [
            "Shoulder Surfing",
            "Keylogging",
            "Eavesdropping",
            "Dumpster Diving"
        ],
        "correctAnswer": 0,
        "explanation": "Shoulder surfing is the direct observation of private data (such as passwords, PINs, or screen contents) over someone's shoulder or via binoculars/cameras without digital interception.",
        "officialRef": "PCES-30-01 Block 1.2 - Physical Threats",
        "tags": ["shoulder-surfing", "physical-security", "passwords"]
    }
])

# =========================================================================
# CHAPTER 1.3: Cryptography Foundations, Encryption & Hashing (Cards 41-60)
# =========================================================================
cards.extend([
    {
        "id": "pces-1-041",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Beginner",
        "question": "What is the primary difference between symmetric and asymmetric encryption?",
        "codeSnippet": "# Symmetric: Single shared key for encrypt & decrypt
# Asymmetric: Mathematically linked key pair (Public Key encrypts, Private Key decrypts)",
        "options": [
            "Symmetric encryption uses two different keys; asymmetric uses one single key",
            "Symmetric encryption uses one single shared key for both encryption and decryption; asymmetric uses a public/private key pair",
            "Symmetric encryption is only used for hashing; asymmetric is used for passwords",
            "Symmetric encryption is one-way irreversible; asymmetric is two-way reversible"
        ],
        "correctAnswer": 1,
        "explanation": "Symmetric cryptography uses the identical secret key for both encryption and decryption (fast, bulk data). Asymmetric cryptography uses a public key (distributed widely) and a private key (held secret).",
        "officialRef": "PCES-30-01 Block 1.3 - Cryptography Fundamentals",
        "tags": ["symmetric", "asymmetric", "cryptography"]
    },
    {
        "id": "pces-1-042",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Beginner",
        "question": "Which of the following is an industry-standard symmetric block cipher recommended by NIST for securing sensitive data?",
        "codeSnippet": "# Standard symmetric cipher implementation
from cryptography.fernet import Fernet
# Fernet uses AES-128 in CBC mode under the hood
symmetric_key = Fernet.generate_key()",
        "options": [
            "RSA",
            "AES (Advanced Encryption Standard)",
            "Diffie-Hellman",
            "ECC (Elliptic Curve Cryptography)"
        ],
        "correctAnswer": 1,
        "explanation": "AES (Advanced Encryption Standard, Rijndael) is the global symmetric block cipher standard approved by NIST (with 128, 192, or 256-bit key sizes). RSA, ECC, and Diffie-Hellman are asymmetric algorithms.",
        "officialRef": "PCES-30-01 Block 1.3 - Symmetric Ciphers",
        "tags": ["aes", "symmetric-encryption", "nist"]
    },
    {
        "id": "pces-1-043",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Hashing",
        "difficulty": "Beginner",
        "question": "What is a defining mathematical property of a cryptographic hash function?",
        "codeSnippet": "# Cryptographic Hash Function Property:
import hashlib
hash1 = hashlib.sha256(b'Hello World').hexdigest()
hash2 = hashlib.sha256(b'Hello World!').hexdigest()
# Completely different digests; computationally infeasible to invert back to original plaintext",
        "options": [
            "It can be decrypted back into plaintext using a private key",
            "It is a one-way deterministic function that maps input of arbitrary length to a fixed-size output",
            "Its output length expands proportionally to the input text size",
            "It produces random output every time it is run with the same input"
        ],
        "correctAnswer": 1,
        "explanation": "A cryptographic hash function is one-way (irreversible), deterministic (same input produces exact same output), and maps arbitrary-length inputs into a fixed-length output (e.g., 256 bits for SHA-256).",
        "officialRef": "PCES-30-01 Block 1.3 - Cryptographic Hash Functions",
        "tags": ["hashing", "sha256", "one-way"]
    },
    {
        "id": "pces-1-044",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Hashing",
        "difficulty": "Intermediate",
        "question": "Why are MD5 and SHA-1 deprecated and considered unsafe for security-sensitive verification?",
        "codeSnippet": "# Insecure hash algorithms (MD5 / SHA-1)
# Vulnerability: Practical hash collisions demonstrated where Hash(M1) == Hash(M2)",
        "options": [
            "They are too slow to run on modern multi-core processors",
            "They have documented collision vulnerabilities, allowing attackers to create two different files with the exact same hash",
            "They only support uppercase letters in inputs",
            "They were removed from the Python hashlib module completely in Python 3"
        ],
        "correctAnswer": 1,
        "explanation": "MD5 and SHA-1 suffer from collision vulnerabilities. Attackers can mathematically generate two distinct inputs that yield the identical hash digest, defeating integrity guarantees.",
        "officialRef": "PCES-30-01 Block 1.3 - Deprecated Cryptographic Primitives",
        "tags": ["md5", "sha1", "collisions", "deprecated"]
    },
    {
        "id": "pces-1-045",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Hashing",
        "difficulty": "Intermediate",
        "question": "What is the 'Avalanche Effect' in cryptographic hashing and encryption algorithms?",
        "codeSnippet": "import hashlib
d1 = hashlib.sha256(b'password123').hexdigest()
d2 = hashlib.sha256(b'password124').hexdigest()  # single bit flipped in input
# Over 50% of the bits in d2 differ from d1",
        "options": [
            "The memory usage increases exponentially as hashing progresses",
            "A minor change in input (such as flipping a single bit) causes a radical, unpredictable change in more than half of the output bits",
            "Older hashes naturally decay and become invalid over time",
            "The algorithm slows down when processing cold data"
        ],
        "correctAnswer": 1,
        "explanation": "The avalanche effect ensures that even a microscopic modification in the input text results in a drastically different, seemingly random digest, preventing attackers from deducing patterns.",
        "officialRef": "PCES-30-01 Block 1.3 - Hash Properties",
        "tags": ["avalanche-effect", "hashing", "cryptography"]
    },
    {
        "id": "pces-1-046",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Intermediate",
        "question": "In public key cryptography, how is a digital signature created by the sender and verified by the recipient?",
        "codeSnippet": "# Digital Signature Mechanism:
# Sender signs hash of message with Sender's PRIVATE key
# Recipient verifies signature with Sender's PUBLIC key",
        "options": [
            "Sender signs with recipient's public key; recipient verifies with sender's private key",
            "Sender signs with sender's private key; recipient verifies with sender's public key",
            "Sender signs with a shared symmetric key; recipient decrypts with AES",
            "Sender hashes with MD5; recipient compares with SHA-256"
        ],
        "correctAnswer": 1,
        "explanation": "A digital signature is created by encrypting the message's cryptographic hash using the sender's private key. Anyone with the sender's public key can verify the signature, proving authenticity and integrity.",
        "officialRef": "PCES-30-01 Block 1.3 - Digital Signatures",
        "tags": ["digital-signatures", "asymmetric", "pki"]
    },
    {
        "id": "pces-1-047",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Intermediate",
        "question": "What is the primary role of a Certificate Authority (CA) in Public Key Infrastructure (PKI)?",
        "codeSnippet": "# X.509 Certificate structure
# Subject: bank.com
# Public Key: [bank's public key]
# Issuer: DigiCert Global Root CA
# Signature: [DigiCert's digital signature over the certificate contents]",
        "options": [
            "To secretly store the private keys of all websites worldwide",
            "To act as a trusted third party that validates an entity's identity and issues signed digital certificates binding public keys to identities",
            "To scan web traffic for SQL injection attacks",
            "To manage DNS routing tables on root nameservers"
        ],
        "correctAnswer": 1,
        "explanation": "A Certificate Authority (CA) is a trusted third party that validates the identity of individuals or organizations and cryptographically signs their X.509 digital certificates, binding their public key to their identity.",
        "officialRef": "PCES-30-01 Block 1.3 - Public Key Infrastructure",
        "tags": ["pki", "certificate-authority", "tls"]
    },
    {
        "id": "pces-1-048",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Intermediate",
        "question": "What is HMAC, and what two security objectives does it simultaneously provide?",
        "codeSnippet": "import hmac, hashlib
secret_key = b'super_secret_shared_key'
message = b'transfer:alice:bob:500'
# Generates Hash-based Message Authentication Code
mac = hmac.new(secret_key, message, hashlib.sha256).hexdigest()",
        "options": [
            "Confidentiality and Data Compression",
            "Data Integrity and Origin Authenticity",
            "Password Salting and Memory Hardening",
            "Key Exchange and Key Wrapping"
        ],
        "correctAnswer": 1,
        "explanation": "HMAC (Hash-based Message Authentication Code) combines a cryptographic hash function with a secret shared key. It verifies both data integrity (data wasn't altered) and message authenticity (only someone with the shared key could have produced it).",
        "officialRef": "PCES-30-01 Block 1.3 - Message Authentication Codes",
        "tags": ["hmac", "integrity", "authenticity"]
    },
    {
        "id": "pces-1-049",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Intermediate",
        "question": "What security mechanism protects against an attacker intercepting an encrypted communication session and later decrypting it if the server's long-term private key is eventually compromised?",
        "codeSnippet": "# Ephemeral Key Exchange configuration
# Diffie-Hellman Ephemeral (DHE) or ECDHE generates disposable session keys
# Compromise of server private key cannot decrypt historical captured sessions",
        "options": [
            "Pre-shared keys (PSK)",
            "Perfect Forward Secrecy (PFS)",
            "Certificate Pinning",
            "Static RSA Key Exchange"
        ],
        "correctAnswer": 1,
        "explanation": "Perfect Forward Secrecy (PFS) ensures that session keys are generated ephemerally (e.g. via ECDHE). Even if the server's long-term private key is leaked in the future, past encrypted sessions cannot be decrypted.",
        "officialRef": "PCES-30-01 Block 1.3 - Transport Security & PFS",
        "tags": ["forward-secrecy", "pfs", "tls"]
    },
    {
        "id": "pces-1-050",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Intermediate",
        "question": "What is an Initial Vector (IV) or Nonce in symmetric block cipher encryption (e.g. AES in CBC or GCM mode)?",
        "codeSnippet": "# AES-GCM encryption with random Nonce
import os
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
key = AESGCM.generate_key(bit_length=256)
nonce = os.urandom(12)  # Nonce/IV MUST be unique per encryption
aesgcm = AESGCM(key)
ct = aesgcm.encrypt(nonce, b'Sensitive Payload', None)",
        "options": [
            "A backup key stored on a recovery server",
            "An arbitrary or random number used once in a cryptographic operation to ensure that encrypting identical plaintexts results in distinct ciphertexts",
            "A hash digest used to verify server domain ownership",
            "The permanent master password set by the system administrator"
        ],
        "correctAnswer": 1,
        "explanation": "An Initialization Vector (IV) or Nonce (number used once) provides randomness to the encryption process. It guarantees that encrypting the exact same plaintext multiple times with the same key produces completely different ciphertexts.",
        "officialRef": "PCES-30-01 Block 1.3 - Symmetric Cipher Modes & Nonces",
        "tags": ["iv", "nonce", "aes-gcm", "cryptography"]
    }
])
