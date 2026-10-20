import json
import os

with open("tmp/make_pces_block1.py", "r", encoding="utf-8") as f:
    base_code = f.read()

# Append remaining chapters to base_code
chapters_code = '''
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
        "codeSnippet": "# Phishing variant classification:\n# Target: Chief Financial Officer (CFO)\n# Payload: Urgent invoice spoofed from CEO email\nattack_type = 'Whaling'  # Executive-targeted spear phishing",
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
        "codeSnippet": "# SMS payload example:\n# 'URGENT: Your bank account is locked. Click https://bank-verify-fraud.com to verify.'",
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
        "codeSnippet": "# Propagation mechanism comparison:\n# Entity A: Infects legitimate host executable; requires user execution to spread\n# Entity B: Exploits network vulnerability; self-replicates across subnets autonomously",
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
        "codeSnippet": "# Ransom note generated on victim endpoint\nwith open('README_DECRYPT.txt', 'w') as f:\n    f.write('Your files have been encrypted with AES-256. Pay 2 BTC to recover.')",
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
        "codeSnippet": "# Deep OS hooking: intercepting system calls (e.g. sys_read, sys_getdents)\n# Hidden from standard process listing utilities (ps, top, taskmgr)",
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
        "codeSnippet": "# TCP 3-Way Handshake abuse\n# Client -> SYN (Spoofed IP)\n# Server -> SYN-ACK (Allocates TCB memory in backlog queue)\n# Client -> [Never sends final ACK, leaving socket in SYN_RECEIVED state]",
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
        "codeSnippet": "# Reflection amplification premise:\n# Attacker sends 64-byte UDP request with SPOOFED victim IP to open NTP server\n# NTP server sends 3000-byte response back to victim IP\n# UDP does not require connection handshake, permitting IP spoofing",
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
        "codeSnippet": "# ARP Spoofing concept:\n# Target IP: 192.168.1.1 (Gateway)\n# Attacker MAC: 00:11:22:33:44:55 claims 'I have 192.168.1.1'\n# Local LAN switch updates ARP cache, routing traffic through attacker",
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
        "codeSnippet": "# Replaying stolen session identifier\nheaders = {\n    'Cookie': 'session_id=9f8e7d6c5b4a3120; HttpOnly=False'\n}\nrequests.get('https://intranet.company.com/profile', headers=headers)",
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
        "codeSnippet": "# APT characteristics:\n# - Nation-state or highly funded cyber syndicate\n# - Stealthy, long-term foothold in victim network (dwell time months/years)\n# - Custom zero-day exploits and multi-stage lateral movement",
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
        "codeSnippet": "# Timeline of a Zero-Day:\n# Day 0: Flaw discovered by researcher or attacker before software vendor is aware\n# Vendor patch available? NO\n# Exploitable in the wild? YES",
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
        "codeSnippet": "# Rogue AP configuration\n# Legitimate AP: SSID 'CoffeeShop_Free', BSSID AA:BB:CC:11:22:33\n# Rogue AP:      SSID 'CoffeeShop_Free', BSSID 00:11:22:99:88:77 (higher signal power)",
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
        "codeSnippet": "# Human curiosity exploitation\n# Weaponized USB contains autorun shortcut or HID microcontroller (Rubber Ducky)",
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
        "codeSnippet": "# Physical access control bypass\n# Employee badges in -> Access door unlocks for 5 seconds\n# Attacker slips in directly behind employee without scanning",
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
        "codeSnippet": "# Threat Vector: Compromising a trusted third-party website frequented by target\n# Target: Industrial engineers at EnergyCorp\n# Attacker compromises: 'TurbineEngineeringForum.org' and embeds zero-day exploit",
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
        "codeSnippet": "# Credential reuse script simulation\n# for email, password in leaked_breach_dump:\n#     response = requests.post('https://bank.com/api/login', json={'u': email, 'p': password})\n#     if response.status_code == 200: save_compromised(email)",
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
        "codeSnippet": "# Password Spraying technique:\n# Instead of trying 10,000 passwords against Alice (which locks account)\n# Attacker tries ONE common password ('Summer2026!') across 10,000 different user accounts",
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
        "codeSnippet": "# Insider Threat Profile:\n# Actor: Disgruntled employee who already possesses legitimate root credentials\n# Actions: Exfiltrating proprietary intellectual property before resigning",
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
        "codeSnippet": "# DNS Poisoning impact:\n# Victim queries DNS for 'banking.com'\n# Poisoned cache returns attacker IP (198.51.100.42) instead of real IP (203.0.113.1)\n# Victim connects to rogue phishing site",
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
        "codeSnippet": "# Direct visual observation of credentials\n# Attacker stands nearby observing numeric key presses on a payment terminal",
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
        "codeSnippet": "# Symmetric: Single shared key for encrypt & decrypt\n# Asymmetric: Mathematically linked key pair (Public Key encrypts, Private Key decrypts)",
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
        "codeSnippet": "# Standard symmetric cipher implementation\nfrom cryptography.fernet import Fernet\n# Fernet uses AES-128 in CBC mode under the hood\nsymmetric_key = Fernet.generate_key()",
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
        "codeSnippet": "# Cryptographic Hash Function Property:\nimport hashlib\nhash1 = hashlib.sha256(b'Hello World').hexdigest()\nhash2 = hashlib.sha256(b'Hello World!').hexdigest()\n# Completely different digests; computationally infeasible to invert back to original plaintext",
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
        "codeSnippet": "# Insecure hash algorithms (MD5 / SHA-1)\n# Vulnerability: Practical hash collisions demonstrated where Hash(M1) == Hash(M2)",
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
        "codeSnippet": "import hashlib\nd1 = hashlib.sha256(b'password123').hexdigest()\nd2 = hashlib.sha256(b'password124').hexdigest()  # single bit flipped in input\n# Over 50% of the bits in d2 differ from d1",
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
        "codeSnippet": "# Digital Signature Mechanism:\n# Sender signs hash of message with Sender's PRIVATE key\n# Recipient verifies signature with Sender's PUBLIC key",
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
        "codeSnippet": "# X.509 Certificate structure\n# Subject: bank.com\n# Public Key: [bank's public key]\n# Issuer: DigiCert Global Root CA\n# Signature: [DigiCert's digital signature over the certificate contents]",
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
        "codeSnippet": "import hmac, hashlib\nsecret_key = b'super_secret_shared_key'\nmessage = b'transfer:alice:bob:500'\n# Generates Hash-based Message Authentication Code\nmac = hmac.new(secret_key, message, hashlib.sha256).hexdigest()",
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
        "codeSnippet": "# Ephemeral Key Exchange configuration\n# Diffie-Hellman Ephemeral (DHE) or ECDHE generates disposable session keys\n# Compromise of server private key cannot decrypt historical captured sessions",
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
        "codeSnippet": "# AES-GCM encryption with random Nonce\nimport os\nfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM\nkey = AESGCM.generate_key(bit_length=256)\nnonce = os.urandom(12)  # Nonce/IV MUST be unique per encryption\naesgcm = AESGCM(key)\nct = aesgcm.encrypt(nonce, b'Sensitive Payload', None)",
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
'''

# Combine and execute
full_code = base_code + "\n" + chapters_code
with open("tmp/make_pces_block1_full.py", "w", encoding="utf-8") as f:
    f.write(full_code)

print("Saved make_pces_block1_full.py")
