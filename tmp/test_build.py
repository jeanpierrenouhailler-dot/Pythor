import json
import os

def write_card_file(filepath, var_name, cards):
    lines = ["import { Flashcard } from '../types';", "", f"export const {var_name}: Flashcard[] = ["]
    for i, card in enumerate(cards):
        card_json = json.dumps(card, indent=2)
        # Indent card by 2 spaces
        indented = "\n".join("  " + l for l in card_json.split("\n"))
        comma = "," if i < len(cards) - 1 else ""
        lines.append(indented + comma)
    lines.append("];\n")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"Wrote {len(cards)} cards to {filepath}")

# Cards 1-20
cards_ch1 = [
    {
        "id": "pces-1-001",
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
        "track": "pces",
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
]

print(f"Loaded {len(cards_ch1)} cards from Chapter 1.1")
