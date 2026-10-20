import { Flashcard } from '../types';

export const pcesSection2CardsPart2: Flashcard[] = [
  {
    id: "pces-2-051",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "Virtual Private Networks",
    difficulty: "Beginner",
    question: "What is the primary function of a Virtual Private Network (VPN)?",
    codeSnippet: "# VPN tunnel creation\n# Encapsulates and encrypts traffic across an untrusted network (Internet)\n# Providing a secure virtual extension of a private enterprise network",
    options: [
      "To create an encrypted tunnel over an untrusted public network, protecting data confidentiality and integrity in transit",
      "To double the physical download speed of home internet connections",
      "To automatically remove viruses from a laptop hard drive",
      "To allow users to bypass copyright laws legally"
    ],
    correctAnswer: 0,
    explanation: "A VPN creates an encrypted tunnel across untrusted networks (such as the Internet or public Wi-Fi), providing confidentiality, integrity, and secure access to private resources.",
    officialRef: "PCES-30-01 Block 2.3 - VPNs",
    tags: ["vpn", "encryption", "tunnels"]
  },
  {
    id: "pces-2-052",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "TLS/SSL Handshake",
    difficulty: "Intermediate",
    question: "During a TLS handshake, how does the client verify the identity of the web server?",
    codeSnippet: "# TLS Certificate verification: Client verifies server's X.509 certificate signature\n# against trusted Certificate Authority (CA) root certificates stored in OS/browser trust store",
    options: [
      "By validating the digital signature on the server's X.509 certificate against trusted root Certificate Authorities (CAs)",
      "By sending a ping request to port 80",
      "By matching the server's IP address with the user's home ZIP code",
      "By checking if the server URL contains numbers"
    ],
    correctAnswer: 0,
    explanation: "The client verifies the server's X.509 digital certificate against pre-installed trusted root Certificate Authorities (CAs) in the client's trust store, confirming authenticity.",
    officialRef: "PCES-30-01 Block 2.3 - TLS Certificates",
    tags: ["tls", "certificates", "x509", "pki"]
  },
  {
    id: "pces-2-053",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "VLAN Segmentation",
    difficulty: "Beginner",
    question: "What is the security purpose of configuring Virtual Local Area Networks (VLANs) on network switches?",
    codeSnippet: "# Switch configuration: Segmenting networks into isolated broadcast domains\n# VLAN 10: Guest Wi-Fi | VLAN 20: Corporate Staff | VLAN 30: Production Databases",
    options: [
      "To logically segment a physical network into isolated broadcast domains, containing traffic and preventing unauthorized lateral snooping",
      "To increase the physical cable length of Ethernet lines",
      "To turn on Wi-Fi on desktop computers that lack antennas",
      "To automatically recharge server batteries"
    ],
    correctAnswer: 0,
    explanation: "VLANs divide a single physical network switch into isolated logical networks, keeping sensitive traffic (e.g. database communication) segregated from untrusted guest or user traffic.",
    officialRef: "PCES-30-01 Block 2.3 - VLANs",
    tags: ["vlan", "segmentation", "switch-security"]
  },
  {
    id: "pces-2-054",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "WAF",
    difficulty: "Intermediate",
    question: "What is the difference between a Network Firewall and a Web Application Firewall (WAF)?",
    codeSnippet: "# WAF inspection at Layer 7: Inspects HTTP body and headers for SQLi, XSS, CSRF\n# Network Firewall at Layers 3/4: Inspects IP addresses, TCP/UDP ports",
    options: [
      "A network firewall filters by IP and port (Layers 3/4); a WAF inspects Layer 7 application traffic for web attacks like SQL injection and XSS",
      "A network firewall protects web servers; a WAF protects physical printers",
      "A WAF only works on Linux; a network firewall only works on Windows",
      "They are identical tools with different marketing names"
    ],
    correctAnswer: 0,
    explanation: "Traditional network firewalls filter packets based on IP, protocol, and port (Layers 3 and 4). A Web Application Firewall (WAF) operates at Layer 7, inspecting HTTP/HTTPS payloads for web application vulnerabilities.",
    officialRef: "PCES-30-01 Block 2.3 - WAF",
    tags: ["waf", "layer-7", "web-security"]
  },
  {
    id: "pces-2-055",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "SYN Flood",
    difficulty: "Intermediate",
    question: "How does a SYN Flood attack exploit the TCP 3-way handshake mechanism?",
    codeSnippet: "# SYN Flood attack mechanism:\n# Attacker sends flood of SYN packets with spoofed source IPs\n# Server allocates resources in half-open SYN_RCVD state and waits for ACK\n# Server connection queue (backlog) exhausts, rejecting legitimate users!",
    options: [
      "The attacker sends massive numbers of SYN packets with spoofed IPs, filling the server's half-open connection table and exhausting its memory",
      "The attacker sends FIN packets that immediately reset all user passwords",
      "The attacker steals the server's private RSA encryption keys over TCP",
      "The attacker physically burns out the Ethernet network card"
    ],
    correctAnswer: 0,
    explanation: "A SYN flood sends a flood of SYN requests without completing the handshake with an ACK, forcing the server to keep connections half-open until its connection backlog is exhausted.",
    officialRef: "PCES-30-01 Block 2.3 - SYN Flood",
    tags: ["syn-flood", "tcp", "dos"]
  },
  {
    id: "pces-2-056",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "SYN Flood Defense",
    difficulty: "Intermediate",
    question: "What defense mechanism allows a server to resist SYN Flood attacks without pre-allocating connection state memory?",
    codeSnippet: "# SYN Cookies mechanism:\n# Server encodes connection state into the Initial Sequence Number (ISN) of the SYN-ACK\n# No memory allocated until client returns valid ACK containing calculated cookie!",
    options: [
      "SYN Cookies",
      "Disabling TCP completely and using only UDP",
      "Increasing the font size of web pages",
      "Resetting the server every 60 seconds"
    ],
    correctAnswer: 0,
    explanation: "SYN Cookies encode TCP connection parameters into the Initial Sequence Number (ISN) sent in the SYN-ACK packet, eliminating the need to allocate kernel memory until the final ACK arrives.",
    officialRef: "PCES-30-01 Block 2.3 - SYN Cookies",
    tags: ["syn-cookies", "dos-mitigation", "tcp-defense"]
  },
  {
    id: "pces-2-057",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "IPsec",
    difficulty: "Intermediate",
    question: "In IPsec VPN architecture, what is the difference between Transport Mode and Tunnel Mode?",
    codeSnippet: "# IPsec Modes:\n# Transport Mode: Encrypts only payload; original IP header preserved (host-to-host)\n# Tunnel Mode: Encrypts entire original packet (payload + original header) and adds new IP header (site-to-site / gateway-to-gateway)",
    options: [
      "Transport mode encrypts only the payload; Tunnel mode encrypts the entire original IP packet and adds a new IP header",
      "Transport mode is for airplanes; Tunnel mode is for subways",
      "Transport mode uses UDP; Tunnel mode uses ICMP",
      "Transport mode is unencrypted; Tunnel mode is encrypted"
    ],
    correctAnswer: 0,
    explanation: "Transport mode encrypts only the IP data payload, leaving original headers visible (typical for host-to-host). Tunnel mode encapsulates and encrypts the entire original packet inside a new IP header (typical for site-to-site VPNs).",
    officialRef: "PCES-30-01 Block 2.3 - IPsec",
    tags: ["ipsec", "tunnel-mode", "vpn"]
  },
  {
    id: "pces-2-058",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "Dynamic ARP Inspection",
    difficulty: "Intermediate",
    question: "What network switch security feature mitigates ARP Poisoning attacks on a LAN?",
    codeSnippet: "# Dynamic ARP Inspection (DAI) on managed switches\n# Validates ARP packets against DHCP snooping database and drops invalid IP-to-MAC bindings",
    options: [
      "Dynamic ARP Inspection (DAI)",
      "Spanning Tree Protocol (STP)",
      "Quality of Service (QoS)",
      "Jumbo Frames"
    ],
    correctAnswer: 0,
    explanation: "Dynamic ARP Inspection (DAI) is a switch security feature that inspects ARP packets on untrusted ports, verifying IP-to-MAC bindings against a trusted DHCP snooping database.",
    officialRef: "PCES-30-01 Block 2.3 - DAI & Switch Security",
    tags: ["dai", "arp-inspection", "switch-security"]
  },
  {
    id: "pces-2-059",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "ICMP & Security",
    difficulty: "Beginner",
    question: "Why do enterprise firewalls often restrict or disable inbound ICMP Echo Request (Ping) traffic from the public Internet?",
    codeSnippet: "# Firewall rule dropping public ping requests\n# iptables -A INPUT -p icmp --icmp-type echo-request -j DROP\n# Prevents automated network sweeps from discovering active live hosts",
    options: [
      "To prevent automated network scanning tools from easily discovering live hosts and map the internal IP topology",
      "Because ping packets permanently delete routing tables",
      "Because ICMP packets consume 100% of CPU memory per packet",
      "Because ICMP traffic is forbidden by international law"
    ],
    correctAnswer: 0,
    explanation: "Blocking inbound ICMP echo requests prevents automated reconnaissance scanners from discovering live active hosts on public IP ranges.",
    officialRef: "PCES-30-01 Block 2.3 - ICMP & Scanning",
    tags: ["icmp", "ping", "reconnaissance-defense"]
  },
  {
    id: "pces-2-060",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "Standard Ports",
    difficulty: "Beginner",
    question: "Which well-known port is standard for RDP (Remote Desktop Protocol)?",
    codeSnippet: "# Connecting to Windows remote desktop\n# mstsc.exe /v:server.example:3389",
    options: [
      "Port 22",
      "Port 80",
      "Port 3389",
      "Port 8080"
    ],
    correctAnswer: 2,
    explanation: "Port 3389 is the standard TCP/UDP port for Microsoft Remote Desktop Protocol (RDP).",
    officialRef: "PCES-30-01 Block 2.3 - Well-Known Ports",
    tags: ["rdp", "port-3389", "remote-access"]
  },
  {
    id: "pces-2-061",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Access Control Models",
    difficulty: "Beginner",
    question: "What is Role-Based Access Control (RBAC)?",
    codeSnippet: "# RBAC implementation model\ndef check_rbac(user_roles: list, required_permission: str, role_permissions: dict) -> bool:\n    for role in user_roles:\n        if required_permission in role_permissions.get(role, []):\n            return True\n    return False",
    options: [
      "An access control model where permissions are assigned to specific roles, and users are assigned to roles based on their job responsibilities",
      "An access control system where users roll dice to determine their password",
      "A model where only managers have access to computers",
      "A system where permissions change randomly every 24 hours"
    ],
    correctAnswer: 0,
    explanation: "Role-Based Access Control (RBAC) grants permissions based on defined job roles (e.g. 'Auditor', 'Developer', 'HR') rather than assigning permissions directly to individual users.",
    officialRef: "PCES-30-01 Block 2.4 - RBAC",
    tags: ["rbac", "access-control", "roles"]
  },
  {
    id: "pces-2-062",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Access Control Models",
    difficulty: "Intermediate",
    question: "What is Attribute-Based Access Control (ABAC)?",
    codeSnippet: "# ABAC evaluation: Subject attributes + Resource attributes + Environmental context\ndef check_abac(user, resource, context):\n    return (\n        user['department'] == resource['department'] and\n        user['clearance'] >= resource['classification'] and\n        context['time_of_day'] in range(8, 18) and\n        context['device_location'] == 'Office_LAN'\n    )",
    options: [
      "An access control model that evaluates attributes of the subject, resource, action, and environment dynamically to determine access",
      "Access control based solely on a user's date of birth",
      "A system where users must attribute their code in comments",
      "A method of securing passwords with SHA-1"
    ],
    correctAnswer: 0,
    explanation: "ABAC evaluates multiple contextual attributes (subject, resource, action, and environmental factors like time, IP, location) using boolean logic to make fine-grained access decisions.",
    officialRef: "PCES-30-01 Block 2.4 - ABAC",
    tags: ["abac", "dynamic-access", "attributes"]
  },
  {
    id: "pces-2-063",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Access Control Models",
    difficulty: "Intermediate",
    question: "What characterizes Mandatory Access Control (MAC) as used in military and high-security systems?",
    codeSnippet: "# MAC Model: Fixed classification labels (Top Secret, Secret, Confidential)\n# Access is strictly enforced by operating system kernel based on clearance levels\n# Data owners CANNOT change or transfer permissions themselves!",
    options: [
      "The operating system enforces access based on fixed security labels (e.g. Top Secret) and user clearance levels; data owners cannot change permissions",
      "The system administrator must manually click 'Allow' for every mouse click",
      "Users are mandated to change passwords every 3 hours",
      "Access is decided by an external voting committee"
    ],
    correctAnswer: 0,
    explanation: "In Mandatory Access Control (MAC), access is strictly determined by central system security policy and classification labels. Users and resource owners cannot override or grant access to others.",
    officialRef: "PCES-30-01 Block 2.4 - MAC",
    tags: ["mac", "mandatory-access", "security-labels"]
  },
  {
    id: "pces-2-064",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Access Control Models",
    difficulty: "Beginner",
    question: "What characterizes Discretionary Access Control (DAC) such as standard Unix file permissions?",
    codeSnippet: "# DAC: File owner has full discretion to set permissions\n# Alice can run 'chmod 777 alice_doc.txt' to grant everyone access at her own discretion",
    options: [
      "The resource owner has the discretion to grant or deny access permissions to other users",
      "Access is determined exclusively by government agencies",
      "Permissions cannot be modified once a file is saved",
      "All files are public by default with zero access controls"
    ],
    correctAnswer: 0,
    explanation: "In Discretionary Access Control (DAC), the creator or owner of an object has full discretion to define which users or groups can access or modify that object.",
    officialRef: "PCES-30-01 Block 2.4 - DAC",
    tags: ["dac", "discretionary-access", "unix-permissions"]
  },
  {
    id: "pces-2-065",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "AAA Framework",
    difficulty: "Beginner",
    question: "What do the three 'A's in the network security AAA framework stand for?",
    codeSnippet: "# AAA Framework in RADIUS / TACACS+:\n# Authentication: Verify who the user is\n# Authorization: Determine what the user can do\n# Accounting: Log and track what the user did and for how long",
    options: [
      "Authentication, Authorization, and Accounting",
      "Access, Action, and Auditing",
      "Algorithm, Asymmetry, and Availability",
      "Address, Allocation, and Assertion"
    ],
    correctAnswer: 0,
    explanation: "AAA stands for Authentication (verifying identity), Authorization (enforcing permissions), and Accounting (tracking resource consumption and recording activity logs).",
    officialRef: "PCES-30-01 Block 2.4 - AAA Framework",
    tags: ["aaa", "authentication", "authorization", "accounting"]
  },
  {
    id: "pces-2-066",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "MFA Mechanics",
    difficulty: "Intermediate",
    question: "How does a Time-Based One-Time Password (TOTP) algorithm (like Google Authenticator) work?",
    codeSnippet: "# TOTP calculation: TOTP = HMAC(Shared_Secret, Floor(Current_Time / 30))\n# Both client and server calculate identical 6-digit code based on shared key and current 30-sec time slice",
    options: [
      "It generates a temporary numeric code using a cryptographic HMAC of a shared secret key and the current Unix time interval (typically 30 seconds)",
      "It sends an unencrypted SMS message through the local cell tower",
      "It generates random numbers based on ambient room temperature",
      "It requires scanning an iris photo every 10 seconds"
    ],
    correctAnswer: 0,
    explanation: "TOTP (RFC 6238) computes a one-time code using HMAC between a pre-shared secret key and the current counter derived from Unix epoch time divided by a step interval (usually 30s).",
    officialRef: "PCES-30-01 Block 2.4 - TOTP & MFA",
    tags: ["totp", "mfa", "hmac"]
  },
  {
    id: "pces-2-067",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "MFA Security",
    difficulty: "Beginner",
    question: "Why is SMS-based verification considered less secure than hardware security keys (FIDO2/WebAuthn)?",
    codeSnippet: "# SMS vulnerabilities: SIM swapping, SS7 network interception, lack of mutual origin binding\n# FIDO2 keys provide hardware cryptographic challenge-response immune to phishing",
    options: [
      "SMS is susceptible to SIM swapping attacks, mobile network interception (SS7 flaws), and phishing websites",
      "SMS messages use 10 times more smartphone battery power",
      "SMS text messages can only contain lowercase letters",
      "SMS is banned by telecommunication laws in Europe"
    ],
    correctAnswer: 0,
    explanation: "SMS OTPs are vulnerable to SIM swapping, cellular interception, and adversary-in-the-middle phishing. FIDO2/WebAuthn keys use cryptographic origin binding that completely defeats phishing.",
    officialRef: "PCES-30-01 Block 2.4 - MFA Security",
    tags: ["mfa", "sms-risks", "fido2", "sim-swapping"]
  },
  {
    id: "pces-2-068",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Password Security",
    difficulty: "Beginner",
    question: "According to modern NIST SP 800-63B password guidelines, which practice is recommended?",
    codeSnippet: "# NIST SP 800-63B Recommendations:\n# - Prioritize password length (passphrases >= 16 chars) over arbitrary special character complexity\n# - Screen passwords against known breached password dictionaries\n# - Eliminate arbitrary 30-day periodic password expirations",
    options: [
      "Encouraging long passphrases and screening passwords against lists of breached credentials rather than forcing arbitrary periodic resets",
      "Forcing users to change passwords every 30 days without fail",
      "Requiring at least 4 symbols and 2 non-ASCII emojis",
      "Storing passwords in base64 format in configuration files"
    ],
    correctAnswer: 0,
    explanation: "NIST SP 800-63B advises prioritizing length (passphrases >= 16 characters), screening against compromised dictionaries, and discontinuing mandatory periodic changes that cause users to choose predictable patterns.",
    officialRef: "PCES-30-01 Block 2.4 - Password Guidelines",
    tags: ["nist-800-63b", "passwords", "hygiene"]
  },
  {
    id: "pces-2-069",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Password Hashing",
    difficulty: "Intermediate",
    question: "Why is SHA-256 by itself INSUFFICIENT for securely storing user passwords?",
    codeSnippet: "# Fast hash functions like SHA-256 can be computed BILLIONS of times per second on GPUs:\n# Attackers crack fast hashes using offline GPU brute force in minutes!\n# Password storage requires SLOW, memory-hard key derivation functions (bcrypt, Argon2)",
    options: [
      "SHA-256 is designed to be extremely fast, enabling modern GPU rigs to compute billions of guesses per second during offline dictionary cracking",
      "SHA-256 passwords can be reversed with a single click",
      "SHA-256 only works on numbers, not letters",
      "SHA-256 causes database index corruption"
    ],
    correctAnswer: 0,
    explanation: "General-purpose hash functions (like SHA-256 or MD5) are engineered for high throughput. Password hashing requires adaptive, slow, memory-hard algorithms (bcrypt, Argon2, PBKDF2) to resist GPU cracking.",
    officialRef: "PCES-30-01 Block 2.4 - Password Storage",
    tags: ["password-hashing", "bcrypt", "argon2", "gpu-cracking"]
  },
  {
    id: "pces-2-070",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Password Salting",
    difficulty: "Beginner",
    question: "What is the security purpose of adding a unique 'Salt' to each password before hashing?",
    codeSnippet: "# Salting passwords\n# hash = bcrypt.hashpw(password, bcrypt.gensalt())\n# Ensures two users with identical password 'Secret123' have completely different hashes\n# Defeats precomputed rainbow tables!",
    options: [
      "To ensure identical passwords generate distinct hash outputs, neutralizing precomputed rainbow table attacks",
      "To make passwords taste better to database engines",
      "To encrypt the password using AES-GCM",
      "To compress the password string to under 4 bytes"
    ],
    correctAnswer: 0,
    explanation: "A cryptographic salt is random data added to a password before hashing. It guarantees that identical passwords produce completely different hashes, thwarting rainbow tables and multi-target attacks.",
    officialRef: "PCES-30-01 Block 2.4 - Password Salting",
    tags: ["salting", "rainbow-tables", "passwords"]
  },
  {
    id: "pces-2-071",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Tokens & Sessions",
    difficulty: "Intermediate",
    question: "What is a JSON Web Token (JWT) and what are its three components?",
    codeSnippet: "# JWT structure: Header.Payload.Signature\n# eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    options: [
      "A compact, URL-safe token consisting of Header, Payload, and Signature, used to securely transmit identity claims between parties",
      "A hardware token plugged into a USB port",
      "A Python library for parsing XML files",
      "A database record stored exclusively in SQLite"
    ],
    correctAnswer: 0,
    explanation: "A JSON Web Token (JWT) is composed of three Base64URL-encoded parts separated by periods: Header (algorithm), Payload (claims/data), and Signature (cryptographic tamper-proofing).",
    officialRef: "PCES-30-01 Block 2.4 - JWT",
    tags: ["jwt", "tokens", "authentication"]
  },
  {
    id: "pces-2-072",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Tokens & Security",
    difficulty: "Intermediate",
    question: "What critical vulnerability occurs if a backend JWT validation service fails to verify the token signature or accepts the 'none' algorithm?",
    codeSnippet: "# Vulnerable JWT validation accepting 'alg': 'none'\n# Attacker modifies payload: {'user': 'admin'} and strips signature\n# Server trusts altered claims without cryptographic proof!",
    options: [
      "An attacker can tamper with claims (e.g. change user ID or role to 'admin') and the server will trust the forged token without verification",
      "The server automatically reboots into recovery mode",
      "The database drops all customer records",
      "The web browser displays a CSS styling error"
    ],
    correctAnswer: 0,
    explanation: "If the signature is ignored or the 'none' algorithm is permitted, an attacker can modify token payload claims (privilege escalation to admin) without possessing the server's secret signing key.",
    officialRef: "PCES-30-01 Block 2.4 - JWT Security",
    tags: ["jwt-vulnerabilities", "signature-verification", "tokens"]
  },
  {
    id: "pces-2-073",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "OAuth 2.0",
    difficulty: "Intermediate",
    question: "What is the primary purpose of the OAuth 2.0 framework?",
    codeSnippet: "# OAuth 2.0 Authorization Flow:\n# User allows Third-Party App to access Google Photos WITHOUT giving Third-Party App their Google password!",
    options: [
      "To enable delegated authorization, allowing a third-party application to access user resources without exposing user credentials to the application",
      "To encrypt hard drives on Windows laptops",
      "To replace SQL queries with GraphQL",
      "To establish high-speed IPsec VPN tunnels"
    ],
    correctAnswer: 0,
    explanation: "OAuth 2.0 is an authorization framework that lets users grant applications limited access to their protected resources (via scoped access tokens) without sharing their passwords.",
    officialRef: "PCES-30-01 Block 2.4 - OAuth 2.0",
    tags: ["oauth2", "delegated-authorization", "access-tokens"]
  },
  {
    id: "pces-2-074",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "SSO",
    difficulty: "Beginner",
    question: "What is Single Sign-On (SSO)?",
    codeSnippet: "# SSO workflow: Authenticate once at central IdP (e.g. Okta / Azure AD)\n# Access multiple enterprise applications (Slack, GitHub, Salesforce) without re-entering credentials",
    options: [
      "An authentication service that permits a user to log in once with a single set of credentials and access multiple related applications and services",
      "Writing passwords on a single whiteboard in the office",
      "Allowing only a single user to log into a server at any one time",
      "Using a single 4-digit PIN for all company bank accounts"
    ],
    correctAnswer: 0,
    explanation: "Single Sign-On (SSO) enables a user to authenticate once with a centralized Identity Provider (IdP) and gain seamless, authorized access to multiple disparate software systems.",
    officialRef: "PCES-30-01 Block 2.4 - SSO",
    tags: ["sso", "identity-provider", "federation"]
  },
  {
    id: "pces-2-075",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Session Management",
    difficulty: "Intermediate",
    question: "Why must the 'HttpOnly' flag be set on sensitive session cookies in web applications?",
    codeSnippet: "# Setting secure cookie headers in Python web framework\nresponse.set_cookie('session_id', token, httponly=True, secure=True, samesite='Strict')",
    options: [
      "It prevents client-side JavaScript from accessing the cookie, mitigating session hijacking via Cross-Site Scripting (XSS)",
      "It ensures cookies can only be loaded on high-speed internet connections",
      "It forces the cookie to expire in 5 seconds",
      "It encrypts the cookie using the user's graphics card"
    ],
    correctAnswer: 0,
    explanation: "The HttpOnly flag blocks client-side scripts (e.g. document.cookie in JavaScript) from reading the cookie, shielding session tokens from exfiltration during XSS attacks.",
    officialRef: "PCES-30-01 Block 2.4 - Session Cookies",
    tags: ["httponly", "cookies", "xss-mitigation"]
  },
  {
    id: "pces-2-076",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Session Management",
    difficulty: "Beginner",
    question: "What does the 'Secure' flag on an HTTP cookie enforce?",
    codeSnippet: "# Cookie Secure attribute check\n# Instructs browser that cookie must ONLY be transmitted over encrypted HTTPS connections",
    options: [
      "The cookie must only be transmitted over secure, encrypted HTTPS connections, never over unencrypted plaintext HTTP",
      "The cookie cannot be viewed by system administrators",
      "The cookie is stored in a password-protected zip file",
      "The cookie can only be edited using Python"
    ],
    correctAnswer: 0,
    explanation: "The Secure cookie flag instructs browsers to only transmit the cookie over encrypted TLS/HTTPS connections, preventing transmission over unencrypted HTTP where it could be sniffed.",
    officialRef: "PCES-30-01 Block 2.4 - Cookie Security",
    tags: ["secure-flag", "cookies", "tls"]
  },
  {
    id: "pces-2-077",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Session Management",
    difficulty: "Intermediate",
    question: "What is 'Session Fixation' in web security?",
    codeSnippet: "# Session Fixation attack pattern:\n# 1. Attacker obtains valid session ID 'XYZ'\n# 2. Attacker tricks victim into logging in with session 'XYZ'\n# 3. Attacker uses session 'XYZ' to access victim's authenticated account!\n# Fix: Always regenerate session ID immediately upon successful login!",
    options: [
      "An attack where an attacker forces a victim to use a known session identifier, enabling the attacker to hijack the session once the victim logs in",
      "Permanently fixing broken database sessions with a software patch",
      "Locking user accounts after three incorrect password entries",
      "A technique for speeding up browser rendering times"
    ],
    correctAnswer: 0,
    explanation: "In a session fixation attack, the attacker tricks the victim into authenticating using a predetermined session ID known to the attacker. Mitigated by regenerating session IDs upon login.",
    officialRef: "PCES-30-01 Block 2.4 - Session Fixation",
    tags: ["session-fixation", "session-management", "web-attacks"]
  },
  {
    id: "pces-2-078",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Access Control Matrix",
    difficulty: "Intermediate",
    question: "What is an Access Control Matrix (ACM)?",
    codeSnippet: "# Conceptual Access Control Matrix:\n# Columns: Objects (Files, Resources) | Rows: Subjects (Users, Roles)\n# Cell(Subject, Object): Set of permitted operations {Read, Write, Execute}",
    options: [
      "A table that defines the permissions of subjects (users/processes) over objects (resources/files)",
      "A 3D matrix screen used by cybersecurity movie hackers",
      "A mathematical formula used exclusively in quantum physics",
      "A spreadsheet tracking employee salaries"
    ],
    correctAnswer: 0,
    explanation: "An Access Control Matrix is a fundamental security model representing the rights each subject has over each object in a two-dimensional grid of rows (subjects) and columns (objects).",
    officialRef: "PCES-30-01 Block 2.4 - Access Models",
    tags: ["access-matrix", "acm", "access-control"]
  },
  {
    id: "pces-2-079",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Privilege Creep",
    difficulty: "Beginner",
    question: "What is 'Privilege Creep' (or Privilege Accumulation) in access management?",
    codeSnippet: "# Privilege creep scenario:\n# Alice moves from Support -> Sales -> Engineering\n# Retains old Support and Sales permissions on top of Engineering grants!\n# Violates least privilege over time",
    options: [
      "The gradual accumulation of access rights and permissions by users as they change roles or projects over time, exceeding what is necessary for their current job",
      "A software bug that causes CPU clock speed to decrease slowly",
      "A hacker moving slowly through a corporate building",
      "A memory leak in a Python dictionary"
    ],
    correctAnswer: 0,
    explanation: "Privilege creep occurs when employees change roles or projects and are granted new permissions without old, unnecessary permissions being revoked, violating least privilege over time.",
    officialRef: "PCES-30-01 Block 2.4 - Access Hygiene",
    tags: ["privilege-creep", "least-privilege", "identity-governance"]
  },
  {
    id: "pces-2-080",
    track: 'pces',
    section: "Section 2",
    chapter: "2.4",
    category: "Access Reviews",
    difficulty: "Beginner",
    question: "What security control directly combats Privilege Creep?",
    codeSnippet: "# Scheduled access review workflow\n# Managers must formally review and certify employee access rights quarterly",
    options: [
      "Periodic User Access Reviews (access recertification audits)",
      "Upgrading to faster network cables",
      "Changing all user desktop wallpapers to company logos",
      "Reinstalling the operating system weekly"
    ],
    correctAnswer: 0,
    explanation: "Regular periodic User Access Reviews (recertification) require managers to review and confirm whether each user still requires their assigned permissions, revoking stale access.",
    officialRef: "PCES-30-01 Block 2.4 - Access Hygiene",
    tags: ["access-reviews", "recertification", "governance"]
  },
  {
    id: "pces-2-081",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Cloud Shared Responsibility",
    difficulty: "Beginner",
    question: "In the Cloud Shared Responsibility Model for Infrastructure as a Service (IaaS), which component is the CUSTOMER's responsibility?",
    codeSnippet: "# Cloud IaaS Responsibility:\n# Provider: Physical data center, hardware, virtualization hypervisor\n# Customer: Guest OS, patching, middleware, application code, data encryption, IAM",
    options: [
      "Physical data center security and server rack cabling",
      "Guest operating system patching, application code, and data configuration",
      "Replacing failed hard drive hardware in the cloud provider's facility",
      "Cooling the provider's server facility"
    ],
    correctAnswer: 1,
    explanation: "In IaaS (like AWS EC2 or GCP Compute Engine), the customer manages the guest OS, software updates, firewall rules, identity access, and customer data, while the CSP manages the physical infrastructure.",
    officialRef: "PCES-30-01 Block 2.5 - Shared Responsibility",
    tags: ["shared-responsibility", "iaas", "cloud-security"]
  },
  {
    id: "pces-2-082",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Cloud Shared Responsibility",
    difficulty: "Intermediate",
    question: "In a Software as a Service (SaaS) cloud model (like Google Workspace or Microsoft 365), what is the customer primarily responsible for?",
    codeSnippet: "# SaaS Responsibility:\n# Provider manages: Physical infra, OS, runtime, application code, high availability\n# Customer manages: User access management, data classification, and data sharing policies",
    options: [
      "Managing customer data, identity and access management (IAM), and endpoint device security",
      "Patching the underlying Linux operating system kernels running the SaaS software",
      "Managing physical data center generators",
      "Maintaining database storage hardware"
    ],
    correctAnswer: 0,
    explanation: "In SaaS, the provider manages the entire application, runtime, and infrastructure. The customer remains responsible for managing their users, access permissions, and their own data.",
    officialRef: "PCES-30-01 Block 2.5 - Shared Responsibility",
    tags: ["saas", "cloud-security", "iam"]
  },
  {
    id: "pces-2-083",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Cloud Storage Misconfiguration",
    difficulty: "Beginner",
    question: "What is one of the most common and damaging cloud security misconfigurations?",
    codeSnippet: "# Insecure Cloud Storage Bucket Policy:\n# 'Principal': '*', 'Action': 's3:GetObject', 'Effect': 'Allow'\n# Exposes proprietary files publicly to anyone on the Internet!",
    options: [
      "Leaving cloud storage buckets (e.g. AWS S3) publicly readable to the unauthenticated Internet",
      "Running Python scripts in a Linux container",
      "Using TLS 1.3 for API endpoints",
      "Setting up automated daily snapshots"
    ],
    correctAnswer: 0,
    explanation: "Unrestricted public read/write permissions on cloud object storage buckets (like AWS S3 or GCP Cloud Storage) have led to numerous massive data breaches worldwide.",
    officialRef: "PCES-30-01 Block 2.5 - Cloud Misconfigurations",
    tags: ["s3-buckets", "cloud-storage", "misconfiguration"]
  },
  {
    id: "pces-2-084",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Cloud IAM",
    difficulty: "Intermediate",
    question: "What is an IAM 'Role' versus an IAM 'User' in cloud security architecture?",
    codeSnippet: "# Cloud IAM Role assumption\n# EC2 Instance assumes temporary IAM Role to read S3 bucket\n# No long-term hardcoded access keys stored in configuration files!",
    options: [
      "An IAM Role is an identity with specific permissions meant to be assumed temporarily by trusted users, applications, or cloud services without hardcoding static credentials",
      "An IAM Role is only for human executives; Users are for developers",
      "An IAM Role is permanently deleted after 1 hour",
      "There is no difference between the two"
    ],
    correctAnswer: 0,
    explanation: "An IAM Role provides temporary security credentials for workloads or federated users to assume as needed, eliminating the risk of hardcoded, static long-term secret keys.",
    officialRef: "PCES-30-01 Block 2.5 - Cloud IAM",
    tags: ["iam-roles", "cloud-security", "least-privilege"]
  },
  {
    id: "pces-2-085",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "SSH Hardening",
    difficulty: "Intermediate",
    question: "Which configuration setting in `/etc/ssh/sshd_config` enforces public key authentication and blocks password guessing attacks?",
    codeSnippet: "# /etc/ssh/sshd_config\nPasswordAuthentication no\nPubkeyAuthentication yes",
    options: [
      "PasswordAuthentication no",
      "PermitEmptyPasswords yes",
      "X11Forwarding yes",
      "Port 23"
    ],
    correctAnswer: 0,
    explanation: "Setting `PasswordAuthentication no` disables password-based logins, requiring users to authenticate exclusively using cryptographic SSH key pairs, rendering brute-force guessing useless.",
    officialRef: "PCES-30-01 Block 2.5 - SSH Hardening",
    tags: ["ssh", "key-authentication", "sshd_config"]
  },
  {
    id: "pces-2-086",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Remote Access & RDP",
    difficulty: "Intermediate",
    question: "Why is exposing RDP (TCP port 3389) directly to the public Internet without a VPN or gateway highly dangerous?",
    codeSnippet: "# Public RDP risks:\n# - Automated brute-force botnets scanning 3389 24/7\n# - Critical past RCE vulnerabilities (e.g. BlueKeep CVE-2019-0708)\n# Best practice: Restrict RDP behind VPN or RDP Gateway with MFA",
    options: [
      "RDP services are targeted by relentless automated brute-force attacks and known unauthenticated remote code execution vulnerabilities (e.g. BlueKeep)",
      "RDP cannot display graphics over the Internet",
      "RDP disables Windows Defender antivirus when exposed",
      "RDP packets are blocked by all major telecommunications companies"
    ],
    correctAnswer: 0,
    explanation: "Publicly exposed RDP ports are heavily targeted by ransomware operators and brute-force botnets, and have been subject to wormable vulnerabilities like BlueKeep.",
    officialRef: "PCES-30-01 Block 2.5 - Remote Access Security",
    tags: ["rdp", "remote-access", "bluekeep"]
  },
  {
    id: "pces-2-087",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "BYOD Security",
    difficulty: "Beginner",
    question: "What is 'BYOD' (Bring Your Own Device) and what is its primary security risk?",
    codeSnippet: "# BYOD challenge: Corporate sensitive data intermingled with personal apps, games, and unmanaged devices",
    options: [
      "Employees using personal laptops/phones for work; unmanaged personal devices may lack security controls, harbor malware, and mix corporate and personal data",
      "Buying brand new computers for all employees every month",
      "A policy banning all personal smartphones from office premises",
      "A program where employees build their own desktop computers from parts"
    ],
    correctAnswer: 0,
    explanation: "BYOD introduces risks because personal devices are not under full IT management, may run outdated OS versions, lack encryption, and can expose corporate data if lost or compromised.",
    officialRef: "PCES-30-01 Block 2.5 - BYOD",
    tags: ["byod", "mobile-security", "endpoint-risk"]
  },
  {
    id: "pces-2-088",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Mobile Device Management",
    difficulty: "Beginner",
    question: "How does a Mobile Device Management (MDM) solution secure mobile devices and corporate data?",
    codeSnippet: "# MDM capabilities:\n# - Enforce PIN/biometrics and disk encryption\n# - Containerize corporate apps away from personal apps\n# - Remotely wipe corporate data if device is lost or employee leaves",
    options: [
      "Enforces encryption, passcode policies, application whitelisting, and allows remote wipe of corporate data if the device is lost or stolen",
      "Boosts cellular download speeds by overriding telecom limits",
      "Replaces the smartphone camera with a fingerprint scanner",
      "Prevents employees from making telephone calls after 5 PM"
    ],
    correctAnswer: 0,
    explanation: "MDM allows enterprise administrators to enforce device encryption, require passcodes, deploy security policies, containerize business apps, and remotely wipe data from lost devices.",
    officialRef: "PCES-30-01 Block 2.5 - MDM",
    tags: ["mdm", "remote-wipe", "mobile-security"]
  },
  {
    id: "pces-2-089",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Remote Work & Wi-Fi",
    difficulty: "Beginner",
    question: "Why is connecting to open, unencrypted public Wi-Fi networks in coffee shops or airports risky for remote workers?",
    codeSnippet: "# Open Wi-Fi risks: Eavesdropping on unencrypted packets, evil twin access points, rogue DHCP/DNS",
    options: [
      "Anyone in physical radio range can eavesdrop on unencrypted traffic, execute ARP spoofing, or host rogue Evil Twin access points",
      "Public Wi-Fi permanently damages computer laptop batteries",
      "Public Wi-Fi only connects to search engine websites",
      "Laptops cannot display web pages without an Ethernet cable"
    ],
    correctAnswer: 0,
    explanation: "Open public Wi-Fi networks transmit data across unencrypted radio waves, enabling attackers to intercept cleartext traffic, inject malicious packets, or set up rogue Evil Twin networks.",
    officialRef: "PCES-30-01 Block 2.5 - Wi-Fi Security",
    tags: ["public-wifi", "evil-twin", "remote-work"]
  },
  {
    id: "pces-2-090",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Split Tunneling",
    difficulty: "Intermediate",
    question: "What is 'Split Tunneling' in enterprise VPN configuration and why does it present a security trade-off?",
    codeSnippet: "# Split Tunneling configuration:\n# Corporate traffic -> Routed through encrypted VPN tunnel\n# General Internet traffic (YouTube, browsing) -> Direct to local ISP\n# Risk: Compromised home LAN can pivot into corporate network!",
    options: [
      "Routing only corporate traffic through the VPN while general internet traffic goes directly out the local ISP; saves corporate bandwidth but bypasses corporate security inspection",
      "Splitting an Ethernet wire into two physical connections",
      "A technique for encrypting data with two different keys simultaneously",
      "A mechanism that doubles internet download speeds"
    ],
    correctAnswer: 0,
    explanation: "Split tunneling conserves corporate network bandwidth by directing non-work web traffic directly out the user's home ISP, but leaves the client exposed to local network threats that can pivot into corporate assets.",
    officialRef: "PCES-30-01 Block 2.5 - VPN Architecture",
    tags: ["split-tunneling", "vpn", "traffic-inspection"]
  },
  {
    id: "pces-2-091",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Cloud Security Posture",
    difficulty: "Intermediate",
    question: "What does a Cloud Security Posture Management (CSPM) tool do?",
    codeSnippet: "# CSPM automated scan:\n# Discovers unencrypted S3 buckets, open security groups (0.0.0.0/0 on port 22), overly permissive IAM policies",
    options: [
      "Continuously monitors cloud environments for misconfigurations, compliance deviations, and security policy violations",
      "Designs 3D architectural models of cloud data centers",
      "Measures the physical altitude of satellites in orbit",
      "Calculates monthly server power bills"
    ],
    correctAnswer: 0,
    explanation: "CSPM tools automatically scan cloud infrastructure against security baselines (e.g. CIS benchmarks) to detect misconfigurations, public buckets, and compliance gaps across cloud tenants.",
    officialRef: "PCES-30-01 Block 2.5 - CSPM",
    tags: ["cspm", "cloud-misconfiguration", "compliance"]
  },
  {
    id: "pces-2-092",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Cloud Storage & Ransomware",
    difficulty: "Beginner",
    question: "What cloud storage feature helps protect stored objects from accidental deletion or malicious ransomware tampering?",
    codeSnippet: "# S3 Object Versioning & Object Lock (WORM: Write Once, Read Many)\n# Even if an attacker overwrites a file, prior versions remain intact and unmodifiable",
    options: [
      "Object Versioning and Object Lock (WORM storage)",
      "Converting images to JPEG format",
      "Renaming files with uppercase letters",
      "Downloading files to a desktop floppy disk"
    ],
    correctAnswer: 0,
    explanation: "Object Versioning keeps previous iterations of objects, and Object Lock (Write Once, Read Many) prevents objects from being overwritten or deleted for a fixed retention period.",
    officialRef: "PCES-30-01 Block 2.5 - Cloud Storage Resilience",
    tags: ["object-versioning", "worm-storage", "ransomware-defense"]
  },
  {
    id: "pces-2-093",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Cloud Network Security",
    difficulty: "Intermediate",
    question: "In Amazon Web Services (AWS) or similar clouds, what is the difference between a Security Group and a Network ACL (NACL)?",
    codeSnippet: "# AWS Security Groups vs NACLs:\n# Security Group: Operates at instance/ENI level, stateful\n# NACL: Operates at subnet level, stateless",
    options: [
      "Security Groups are stateful and operate at the virtual instance/ENI level; NACLs are stateless and operate at the subnet boundary level",
      "Security Groups are only for Linux; NACLs are only for Windows",
      "Security Groups are physical firewalls; NACLs are software firewalls",
      "There is no difference between them"
    ],
    correctAnswer: 0,
    explanation: "Security Groups act as stateful firewalls attached to individual virtual network interfaces. Network Access Control Lists (NACLs) are stateless subnet-level packet filters.",
    officialRef: "PCES-30-01 Block 2.5 - Cloud Firewalls",
    tags: ["security-groups", "nacl", "aws-security"]
  },
  {
    id: "pces-2-094",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Remote Wipe",
    difficulty: "Beginner",
    question: "When an employee resigns or their smartphone is stolen, what MDM capability protects corporate email and documents from falling into unauthorized hands?",
    codeSnippet: "# Remote Wipe action executed via MDM console\n# Erases all corporate profiles, tokens, emails, and data from the mobile device instantly",
    options: [
      "Remote Wipe",
      "Screen Mirroring",
      "Bluetooth Pairing",
      "GPS Navigation"
    ],
    correctAnswer: 0,
    explanation: "Remote Wipe allows administrators to wirelessly erase all enterprise data, profiles, and certificates from a managed mobile device when it is reported lost, stolen, or during offboarding.",
    officialRef: "PCES-30-01 Block 2.5 - MDM & Data Protection",
    tags: ["remote-wipe", "mobile-security", "offboarding"]
  },
  {
    id: "pces-2-095",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "SSH Bastion",
    difficulty: "Intermediate",
    question: "What is a 'Bastion Host' (or Jump Box) in cloud network architecture?",
    codeSnippet: "# Bastion Host (Jump Box) architecture:\n# Internet -> SSH -> Bastion Host (in Public Subnet, strictly hardened, MFA enforced)\n# Bastion Host -> SSH -> Private Database / Application Servers (no public IPs!)",
    options: [
      "A strictly hardened, monitored proxy server that serves as the single secure entry point for administrators connecting to private internal cloud instances",
      "A powerful gaming server used during lunch breaks",
      "A tool for compressing log archives before uploading to S3",
      "A backup battery unit for cloud servers"
    ],
    correctAnswer: 0,
    explanation: "A bastion host is a specially hardened server positioned in a public subnet to provide a single, strictly controlled, and audited entry point to manage instances residing in private subnets.",
    officialRef: "PCES-30-01 Block 2.5 - Bastion Hosts",
    tags: ["bastion-host", "jump-box", "cloud-architecture"]
  },
  {
    id: "pces-2-096",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Zero Trust Network Access",
    difficulty: "Intermediate",
    question: "How does Zero Trust Network Access (ZTNA) differ from traditional corporate perimeter VPNs?",
    codeSnippet: "# VPN vs ZTNA:\n# VPN: Connects user to ENTIRE subnet (broad lateral network access)\n# ZTNA: Grants access ONLY to the specific authorized application, never the underlying network",
    options: [
      "Traditional VPNs grant broad network-level access to the entire subnet; ZTNA grants granular, identity-based access only to specific authorized applications",
      "ZTNA requires copper cables; VPNs use Wi-Fi",
      "ZTNA is only for mobile phones; VPN is for servers",
      "ZTNA transmits passwords in plaintext"
    ],
    correctAnswer: 0,
    explanation: "Traditional VPNs place the remote worker directly on the corporate LAN, enabling lateral movement. ZTNA abstracts network access, providing access strictly to specific authorized applications.",
    officialRef: "PCES-30-01 Block 2.5 - ZTNA",
    tags: ["ztna", "vpn-alternative", "zero-trust"]
  },
  {
    id: "pces-2-097",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Shadow IT",
    difficulty: "Beginner",
    question: "What is 'Shadow IT' in corporate enterprise security?",
    codeSnippet: "# Shadow IT scenario:\n# Employees using unapproved consumer cloud apps (Dropbox, Trello, ChatGPT)\n# to store confidential company files without IT security review or governance",
    options: [
      "Information technology systems, software, or cloud services used within an organization without explicit IT department approval or oversight",
      "Computers used by hackers at night in dark rooms",
      "Hardware components that have no serial numbers",
      "Software written exclusively in dark mode themes"
    ],
    correctAnswer: 0,
    explanation: "Shadow IT refers to unvetted software, cloud apps, and hardware used by staff without organizational knowledge, creating unmonitored compliance risks and data leaks.",
    officialRef: "PCES-30-01 Block 2.5 - Shadow IT",
    tags: ["shadow-it", "cloud-risk", "governance"]
  },
  {
    id: "pces-2-098",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "CASB",
    difficulty: "Intermediate",
    question: "What is a Cloud Access Security Broker (CASB)?",
    codeSnippet: "# CASB enforcement point:\n# Positioned between cloud users and cloud applications (SaaS/IaaS)\n# Enforces security policies: DLP, access control, threat protection, and Shadow IT discovery",
    options: [
      "A security policy enforcement point situated between cloud service consumers and providers to consolidate security controls across multiple clouds",
      "A stockbroker who trades cloud computing company equities",
      "A hardware switch installed in physical telephone closets",
      "A database server running PostgreSQL in the cloud"
    ],
    correctAnswer: 0,
    explanation: "A CASB is a software tool or service that sits between on-premises infrastructure and cloud providers, enforcing security policies, data loss prevention (DLP), encryption, and compliance.",
    officialRef: "PCES-30-01 Block 2.5 - CASB",
    tags: ["casb", "cloud-governance", "dlp"]
  },
  {
    id: "pces-2-099",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Container Security",
    difficulty: "Intermediate",
    question: "Why is running a Docker container with `--privileged` considered dangerous in production?",
    codeSnippet: "# Insecure container launch:\n# docker run --privileged ...\n# Grants container access to ALL host devices and kernel capabilities, bypassing container isolation!",
    options: [
      "It grants the container full root capabilities and direct access to all host devices, effectively breaking container isolation and enabling easy host takeover",
      "It slows down container startup by 30 minutes",
      "It prevents Python scripts from reading environment variables",
      "It automatically exposes all ports to the public internet"
    ],
    correctAnswer: 0,
    explanation: "The `--privileged` flag gives the container almost all capabilities of the host kernel and access to host devices, severely compromising isolation and allowing container escape to host root.",
    officialRef: "PCES-30-01 Block 2.5 - Container Security",
    tags: ["containers", "docker", "privilege-escalation"]
  },
  {
    id: "pces-2-100",
    track: 'pces',
    section: "Section 2",
    chapter: "2.5",
    category: "Credential Exposure",
    difficulty: "Beginner",
    question: "What is the danger of accidentally committing a `.env` file containing cloud access secret keys (`AWS_SECRET_ACCESS_KEY`) to a public GitHub repository?",
    codeSnippet: "# Accidental secret leak in git commit\n# Automated bots scan public commits within SECONDS of push\n# Attackers immediately spin up unauthorized crypto-mining clusters or exfiltrate databases!",
    options: [
      "Automated scraper bots scan public code commits in real time, immediately extracting exposed credentials to compromise cloud infrastructure",
      "Git will refuse to push files that end in .env",
      "The GitHub repository will automatically be converted to private",
      "The computer processor will permanently throttle its speed"
    ],
    correctAnswer: 0,
    explanation: "Malicious bots continually monitor public GitHub commits. Leaked API secrets and cloud credentials are often exploited within seconds to deploy crypto-miners or steal data.",
    officialRef: "PCES-30-01 Block 2.5 - Secret Management",
    tags: ["secret-exposure", "api-keys", "git-leaks"]
  }
];
