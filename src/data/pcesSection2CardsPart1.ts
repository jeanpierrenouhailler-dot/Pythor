import { Flashcard } from '../types';

export const pcesSection2CardsPart1: Flashcard[] = [
  {
    id: "pces-2-001",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Zero Trust Architecture",
    difficulty: "Intermediate",
    question: "What is the foundational philosophy behind Zero Trust Architecture (ZTA)?",
    codeSnippet: "# Zero Trust verification logic\ndef grant_access(request):\n    # 1. Never trust implicitly, regardless of network location\n    # 2. Always verify identity, device health, and context dynamically\n    # 3. Assume breach has already occurred\n    return verify_identity(request) and verify_posture(request)",
    options: [
      "Never trust, always verify every request regardless of whether it originates inside or outside the corporate perimeter",
      "Trust all internal network traffic once inside the corporate office Wi-Fi",
      "Disable all user passwords and rely on IP whitelisting",
      "Grant root privileges to all network monitoring services"
    ],
    correctAnswer: 0,
    explanation: "Zero Trust eliminates implicit trust based on network location. Its core tenets are: verify explicitly, use least privileged access, and assume breach.",
    officialRef: "PCES-30-01 Block 2.1 - Zero Trust Architecture",
    tags: ["zero-trust", "principles", "perimeterless"]
  },
  {
    id: "pces-2-002",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Zero Trust Principles",
    difficulty: "Intermediate",
    question: "Which of the following is NOT one of the three core principles of NIST Zero Trust Architecture (SP 800-207)?",
    codeSnippet: "# NIST SP 800-207 Zero Trust Tenets:\n# - Verify explicitly\n# - Use least privilege access\n# - Assume breach",
    options: [
      "Verify explicitly",
      "Use least privilege access",
      "Assume breach",
      "Trust internal VLAN traffic implicitly"
    ],
    correctAnswer: 3,
    explanation: "Zero Trust explicitly rejects trusting internal networks or VLANs. All requests must be authenticated, authorized, and encrypted regardless of origin.",
    officialRef: "PCES-30-01 Block 2.1 - Zero Trust Architecture",
    tags: ["zero-trust", "nist-800-207", "principles"]
  },
  {
    id: "pces-2-003",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Security Architecture",
    difficulty: "Beginner",
    question: "What is 'Defense in Depth'?",
    codeSnippet: "# Layered defensive architecture\n# Layer 1: DNS Filtering -> Layer 2: Cloud WAF -> Layer 3: Network Firewall\n# -> Layer 4: Host EDR -> Layer 5: Database Column Encryption",
    options: [
      "A strategy that employs multiple concentric defensive layers of security controls throughout an IT infrastructure",
      "Burying database servers in deep underground bunkers",
      "Installing multiple antivirus scanners on the exact same Windows machine",
      "Encrypting files multiple times with the exact same Caesar cipher"
    ],
    correctAnswer: 0,
    explanation: "Defense-in-depth ensures that if one security barrier is breached or fails (e.g. firewall), subsequent layers (e.g. host EDR, database encryption) continue to protect critical assets.",
    officialRef: "PCES-30-01 Block 2.1 - Defense in Depth",
    tags: ["defense-in-depth", "layered-security", "architecture"]
  },
  {
    id: "pces-2-004",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Security Principles",
    difficulty: "Beginner",
    question: "What does the Principle of 'Separation of Duties' (SoD) prevent?",
    codeSnippet: "# Separation of Duties in finance deployment\ndef deploy_financial_release(code_author: str, approver: str):\n    # An engineer cannot approve their own code deployment to production\n    if code_author == approver:\n        raise SecurityError('Separation of duties violation!')",
    options: [
      "A single person from possessing total control to execute a critical or fraudulent task without oversight or collusion",
      "Developers from talking to quality assurance testers",
      "Computers from connecting to more than one Wi-Fi network",
      "Python scripts from running on multi-core processors"
    ],
    correctAnswer: 0,
    explanation: "Separation of Duties (SoD) divides critical tasks among multiple individuals so no single rogue employee can commit fraud, abuse, or unauthorized changes unnoticed.",
    officialRef: "PCES-30-01 Block 2.1 - Separation of Duties",
    tags: ["separation-of-duties", "governance", "fraud-prevention"]
  },
  {
    id: "pces-2-005",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Security Defaults",
    difficulty: "Intermediate",
    question: "In software design and firewall configuration, what is 'Fail-Secure' (Fail-Closed) versus 'Fail-Open'?",
    codeSnippet: "# Fail-Secure access control evaluation\ndef verify_authorization(user_id: str) -> bool:\n    try:\n        return auth_service.check_permission(user_id)\n    except NetworkTimeoutError:\n        # Fail-secure: If auth service is unreachable, DEFAULT TO DENY ACCESS!\n        return False",
    options: [
      "Fail-secure defaults to denying access upon system failure; Fail-open defaults to granting access",
      "Fail-secure shuts down the entire data center power grid; Fail-open restarts the server",
      "Fail-secure is used only for air conditioners; Fail-open is for databases",
      "Fail-secure means passwords are saved in plaintext upon error"
    ],
    correctAnswer: 0,
    explanation: "A fail-secure (fail-closed) architecture ensures that if an exception or failure occurs, the system defaults to the safest state (denying access or blocking traffic).",
    officialRef: "PCES-30-01 Block 2.1 - Secure Defaults",
    tags: ["fail-secure", "fail-closed", "error-handling"]
  },
  {
    id: "pces-2-006",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Security Lifecycle",
    difficulty: "Beginner",
    question: "Why is cybersecurity described as a 'Continuous Lifecycle Process' rather than a one-time project?",
    codeSnippet: "# Continuous security lifecycle: Identify -> Protect -> Detect -> Respond -> Recover -> Iterate\n# New vulnerabilities emerge daily; IT environments and threats evolve constantly",
    options: [
      "Because once a firewall is configured, software never changes",
      "Because threats, vulnerabilities, software updates, and organizational infrastructure evolve continuously over time",
      "Because security engineers must be paid hourly rather than on salary",
      "Because operating systems can only boot for 24 hours at a time"
    ],
    correctAnswer: 1,
    explanation: "Security is an ongoing operational lifecycle. New vulnerabilities (CVEs) and attack tactics emerge constantly, requiring continuous monitoring, patching, and adaptation.",
    officialRef: "PCES-30-01 Block 2.1 - Security Lifecycle",
    tags: ["continuous-process", "security-lifecycle", "adaptation"]
  },
  {
    id: "pces-2-007",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Security Principles",
    difficulty: "Beginner",
    question: "What is 'Economy of Mechanism' in secure system design?",
    codeSnippet: "# Keeping security design as simple and small as possible\n# Simple designs are easier to test, verify, audit, and maintain without hidden flaws",
    options: [
      "Keeping the security design and architecture as simple and small as possible to minimize flaws and simplify verification",
      "Spending as little money as possible on cybersecurity software",
      "Outsourcing all server hosting to foreign countries to save taxes",
      "Using cheap hardware components to maximize profit margins"
    ],
    correctAnswer: 0,
    explanation: "Economy of mechanism (one of Saltzer and Schroeder's design principles) states that simpler designs are easier to understand, test, verify, and defend against unintended vulnerabilities.",
    officialRef: "PCES-30-01 Block 2.1 - Design Principles",
    tags: ["economy-of-mechanism", "simplicity", "saltzer-schroeder"]
  },
  {
    id: "pces-2-008",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Security Principles",
    difficulty: "Intermediate",
    question: "What does 'Complete Mediation' require in an operating system or web service?",
    codeSnippet: "# Complete Mediation: Every single access request must be checked against access policy\ndef handle_file_read(user, file_id):\n    # Cannot rely on cached permissions from 2 hours ago without re-checking\n    if not access_control_matrix.can_read(user, file_id):\n        raise PermissionDenied('Access check failed')",
    options: [
      "Every single access to every resource must be checked for authorization, without bypassing checks via cached shortcuts",
      "Access is only checked when the user first powers on their laptop in the morning",
      "Mediation occurs only when a court order is filed",
      "Mediation is only performed on Saturdays during maintenance windows"
    ],
    correctAnswer: 0,
    explanation: "Complete mediation requires that every access request to any resource must be validated against the access control policy, preventing bypasses or stale permission caching.",
    officialRef: "PCES-30-01 Block 2.1 - Design Principles",
    tags: ["complete-mediation", "access-control", "principles"]
  },
  {
    id: "pces-2-009",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Security Principles",
    difficulty: "Beginner",
    question: "What is the Principle of 'Open Design' in cryptography and security engineering?",
    codeSnippet: "# Open Design: Security does not depend on keeping the algorithm secret\n# AES, RSA, and SHA-256 are fully public specifications; their security lies in keys and mathematics",
    options: [
      "The design should be open to public scrutiny; security should not depend on secrecy of the algorithm (reaffirming Kerckhoffs's principle)",
      "The server room doors should be left open to the public",
      "Source code must have zero access controls so anyone can edit it",
      "Databases should accept unauthenticated connections from any IP"
    ],
    correctAnswer: 0,
    explanation: "Open design states that the security of a mechanism should not depend on keeping its inner workings secret; public scrutiny and battle-testing make designs robust.",
    officialRef: "PCES-30-01 Block 2.1 - Design Principles",
    tags: ["open-design", "kerckhoffs", "principles"]
  },
  {
    id: "pces-2-010",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Security Principles",
    difficulty: "Intermediate",
    question: "What is 'Least Common Mechanism'?",
    codeSnippet: "# Least Common Mechanism:\n# Minimize mechanisms shared between different users/tenants to avoid cross-tenant information leakage\n# e.g. Container isolation vs shared single global temp directory (/tmp)",
    options: [
      "The design should minimize the functions and mechanisms shared by different users to avoid unintentional sharing channels and privilege leaks",
      "Using the cheapest network switch available on the market",
      "Sharing a single administrator account among all staff members",
      "Reusing the same database connection string across all microservices"
    ],
    correctAnswer: 0,
    explanation: "Least common mechanism dictates minimizing shared resources and mechanisms between distinct users or processes, preventing accidental cross-talk, data leakage, and covert channels.",
    officialRef: "PCES-30-01 Block 2.1 - Design Principles",
    tags: ["least-common-mechanism", "isolation", "tenancy"]
  },
  {
    id: "pces-2-011",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Attack Surface Reduction",
    difficulty: "Beginner",
    question: "Which action directly accomplishes Attack Surface Reduction on a Linux production database server?",
    codeSnippet: "# Hardening script: Disabling unneeded services and stopping listeners\n# systemctl disable --now cups.service      # Disable print daemon\n# systemctl disable --now avahi-daemon.service  # Disable mDNS\n# systemctl disable --now telnet.service        # Disable insecure telnet",
    options: [
      "Uninstalling and disabling unnecessary network services, daemons, and closing unused firewall ports",
      "Increasing the hard drive capacity from 1TB to 4TB",
      "Adding 10 additional administrative users to the server",
      "Opening port 21 so support technicians can upload logs via FTP"
    ],
    correctAnswer: 0,
    explanation: "Attack surface reduction involves eliminating unnecessary software, closing unused ports, disabling legacy protocols, and restricting network exposure to the bare minimum.",
    officialRef: "PCES-30-01 Block 2.1 - Attack Surface Reduction",
    tags: ["attack-surface", "hardening", "services"]
  },
  {
    id: "pces-2-012",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Security Architecture",
    difficulty: "Intermediate",
    question: "What is a 'DMZ' (Demilitarized Zone) in network security architecture?",
    codeSnippet: "# Network architecture segmentation:\n# Internet <-> External Firewall <-> DMZ (Public Web/Mail Proxies) <-> Internal Firewall <-> LAN (Database/Active Directory)",
    options: [
      "A physical buffer zone between two warring nations",
      "A perimeter network segment that separates an internal private network from untrusted external networks like the Internet",
      "A software utility that deletes temp files every night",
      "A high-speed Wi-Fi router used in military camps"
    ],
    correctAnswer: 1,
    explanation: "A DMZ is an isolated subnetwork hosting public-facing services (e.g. web servers, reverse proxies). If a server in the DMZ is compromised, internal firewalls prevent lateral movement into the private corporate LAN.",
    officialRef: "PCES-30-01 Block 2.1 - Network Architecture",
    tags: ["dmz", "perimeter", "segmentation"]
  },
  {
    id: "pces-2-013",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Security Principles",
    difficulty: "Beginner",
    question: "What is the difference between 'Need to Know' and 'Least Privilege'?",
    codeSnippet: "# Access evaluation\n# Least Privilege: Grants minimum necessary technical rights (e.g. read-only instead of admin)\n# Need-to-Know: Requires a legitimate business/operational justification to access specific data",
    options: [
      "Least privilege restricts technical permissions; Need-to-know restricts access to specific information based on legitimate job necessity",
      "Least privilege applies only to executives; Need-to-know applies only to interns",
      "They are identical technical concepts in Python code",
      "Need-to-know is for Linux; Least privilege is for Windows"
    ],
    correctAnswer: 0,
    explanation: "Least privilege limits the scope of actions and technical rights a user or process possesses. Need-to-know ensures that even if a user has clearance, they can only access data required for their specific current task.",
    officialRef: "PCES-30-01 Block 2.1 - Access Principles",
    tags: ["need-to-know", "least-privilege", "access-control"]
  },
  {
    id: "pces-2-014",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Security Architecture",
    difficulty: "Intermediate",
    question: "What is 'Microsegmentation' in modern data center and cloud security?",
    codeSnippet: "# Microsegmentation policy:\n# Workload A (Billing Web) can ONLY talk to Workload B (Billing DB) on TCP 5432\n# Lateral communication between peer web servers is completely blocked!",
    options: [
      "Creating granular, isolated network security zones down to individual workloads or containers to prevent lateral movement",
      "Splitting an Ethernet cable into smaller copper strands",
      "Dividing hard drives into 1MB FAT32 partitions",
      "Compressing network packets to under 64 bytes"
    ],
    correctAnswer: 0,
    explanation: "Microsegmentation applies fine-grained security policies to individual workloads, containers, or VMs, isolating workloads from each other to halt lateral threat propagation.",
    officialRef: "PCES-30-01 Block 2.1 - Microsegmentation",
    tags: ["microsegmentation", "cloud-security", "zero-trust"]
  },
  {
    id: "pces-2-015",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Threat Modeling",
    difficulty: "Intermediate",
    question: "In the PASTA threat modeling methodology, what is the core focus?",
    codeSnippet: "# PASTA: Process for Attack Simulation and Threat Analysis\n# Risk-centric approach linking technical vulnerabilities to business impact and asset value",
    options: [
      "A risk-centric framework that aligns technical vulnerabilities with business objectives and threat simulation",
      "A recipe book for Italian cybersecurity conferences",
      "A Python package for parsing JSON configuration files",
      "A physical lock mechanism for server room doors"
    ],
    correctAnswer: 0,
    explanation: "PASTA (Process for Attack Simulation and Threat Analysis) is a structured 7-step risk-centric threat modeling methodology that aligns business context and asset values with attack simulation.",
    officialRef: "PCES-30-01 Block 2.1 - Threat Modeling",
    tags: ["pasta", "threat-modeling", "risk-centric"]
  },
  {
    id: "pces-2-016",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Zero Trust Architecture",
    difficulty: "Intermediate",
    question: "How does Zero Trust handle device security (device posture)?",
    codeSnippet: "# Device posture verification check before granting session\ndef evaluate_device_posture(device_info: dict) -> bool:\n    return (\n        device_info['disk_encrypted'] and\n        device_info['os_patched'] and\n        device_info['edr_active'] and\n        not device_info['is_jailbroken']\n    )",
    options: [
      "Devices are trusted forever once they connect to office Wi-Fi",
      "Device health, encryption status, OS patch level, and security agent telemetry are continually evaluated before granting resource access",
      "Only devices manufactured by Apple are permitted on the network",
      "Device security is ignored if the user knows their password"
    ],
    correctAnswer: 1,
    explanation: "In Zero Trust, device posture (disk encryption, compliance, up-to-date EDR agent, OS patching) is continuously assessed; untrusted or non-compliant devices are denied access.",
    officialRef: "PCES-30-01 Block 2.1 - Zero Trust Posture",
    tags: ["device-posture", "zero-trust", "endpoint"]
  },
  {
    id: "pces-2-017",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Security Principles",
    difficulty: "Beginner",
    question: "What does 'Psychological Acceptability' mean as a security design principle?",
    codeSnippet: "# Principle of Psychological Acceptability:\n# Security mechanisms should not make normal work so frustrating or complex\n# that users bypass them (e.g. users writing 30-char passwords on yellow sticky notes)",
    options: [
      "Security controls should be intuitive and not impose excessive burdens, ensuring users do not actively circumvent them to get work done",
      "Psychologists must interview all employees before granting email access",
      "Using soothing blue background colors on login screens to calm angry users",
      "Allowing users to opt out of security rules whenever they feel stressed"
    ],
    correctAnswer: 0,
    explanation: "Psychological acceptability (Saltzer and Schroeder) emphasizes that security controls must be user-friendly; overly cumbersome procedures lead users to find dangerous workarounds.",
    officialRef: "PCES-30-01 Block 2.1 - Design Principles",
    tags: ["psychological-acceptability", "usability", "human-factors"]
  },
  {
    id: "pces-2-018",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "System Baselines",
    difficulty: "Beginner",
    question: "What is a 'Security Baseline Configuration'?",
    codeSnippet: "# Security baseline deployment\n# All corporate workstations must conform to documented standard:\n# - Disk encryption: Enabled\n# - Screen lock timeout: 5 minutes\n# - Guest account: Disabled\n# - Firewall: Active",
    options: [
      "A documented, standardized set of security specifications and settings established as the required minimum configuration for all systems",
      "The physical height of server cabinets in a warehouse",
      "The minimum typing speed required for system administrators",
      "The baseline internet bandwidth contract with an ISP"
    ],
    correctAnswer: 0,
    explanation: "A security baseline defines the mandatory minimum configuration settings (hardening, password rules, services, audit logging) that must be applied across an enterprise's systems.",
    officialRef: "PCES-30-01 Block 2.1 - Security Baselines",
    tags: ["baseline", "hardening", "configuration"]
  },
  {
    id: "pces-2-019",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Security Architecture",
    difficulty: "Intermediate",
    question: "What is an 'Air Gap' in high-security environment architecture?",
    codeSnippet: "# Air-gapped network: Completely isolated from public Internet and external LANs\n# No physical cables, no wireless interfaces, no routing pathways",
    options: [
      "A physical network isolation measure where a secure network has no physical or wireless connections to external untrusted networks",
      "An empty space between two server racks to improve cooling airflow",
      "A pause in network transmissions to reduce packet collisions",
      "A ventilation duct above the server room ceiling"
    ],
    correctAnswer: 0,
    explanation: "An air-gapped system or network is physically and logically isolated from unsecured networks, including the Internet and local corporate LANs, preventing remote electronic intrusion.",
    officialRef: "PCES-30-01 Block 2.1 - Network Isolation",
    tags: ["air-gap", "isolation", "physical-security"]
  },
  {
    id: "pces-2-020",
    track: 'pces',
    section: "Section 2",
    chapter: "2.1",
    category: "Security Architecture",
    difficulty: "Beginner",
    question: "What is the security risk of a 'Single Point of Failure' (SPOF)?",
    codeSnippet: "# Architecture evaluation: If Router-1 fails, entire corporate network loses connection!\n# Redundant Router-2 eliminates this SPOF",
    options: [
      "If that specific single component fails or is compromised, the entire system or availability collapses",
      "It speeds up network traffic by removing duplicate routers",
      "It requires two passwords to log in",
      "It prevents Python from executing recursive functions"
    ],
    correctAnswer: 0,
    explanation: "A Single Point of Failure (SPOF) is any component whose failure will disrupt the entire system's operation, violating the Availability pillar of the CIA Triad.",
    officialRef: "PCES-30-01 Block 2.1 - High Availability",
    tags: ["spof", "availability", "redundancy"]
  },
  {
    id: "pces-2-021",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "System Hardening",
    difficulty: "Beginner",
    question: "What is the primary objective of 'System Hardening'?",
    codeSnippet: "# Hardening workflow: Close ports, update firmware, remove bloatware, enforce strict permissions",
    options: [
      "To physically reinforce computer metal casings against sledgehammer attacks",
      "To securely configure an operating system or application by reducing vulnerabilities and eliminating unnecessary services and features",
      "To overclock CPU clock speeds for faster gaming",
      "To make computer screens resistant to scratches"
    ],
    correctAnswer: 1,
    explanation: "System hardening is the process of securing a system by minimizing its vulnerabilities and reducing its attack surface (e.g. disabling unused services, enforcing least privilege, applying patches).",
    officialRef: "PCES-30-01 Block 2.2 - System Hardening",
    tags: ["hardening", "configuration", "attack-surface"]
  },
  {
    id: "pces-2-022",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "CIS Benchmarks",
    difficulty: "Beginner",
    question: "What are the CIS (Center for Internet Security) Benchmarks?",
    codeSnippet: "# CIS Benchmark reference\n# Globally recognized, consensus-based best practice configuration guidelines for hardening OSes, clouds, and databases",
    options: [
      "Prescriptive, consensus-based best-practice configuration guides and checklists for securely hardening operating systems, software, and cloud environments",
      "A Python benchmarking tool that tests floating-point calculation speeds",
      "A certification exam for selling computer hardware",
      "A database of retail laptop prices"
    ],
    correctAnswer: 0,
    explanation: "CIS Benchmarks provide vendor-agnostic, industry-standard configuration guidelines for hardening operating systems, web servers, databases, and network devices.",
    officialRef: "PCES-30-01 Block 2.2 - CIS Benchmarks",
    tags: ["cis-benchmarks", "hardening", "best-practices"]
  },
  {
    id: "pces-2-023",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Host Firewalls",
    difficulty: "Beginner",
    question: "What is the difference between a Network Firewall and a Host-Based Firewall?",
    codeSnippet: "# Linux host firewall: UFW (Uncomplicated Firewall)\n# sudo ufw default deny incoming\n# sudo ufw allow 22/tcp\n# sudo ufw enable",
    options: [
      "Network firewalls filter traffic entering/exiting subnets; Host firewalls run as software directly on individual endpoints protecting that specific host",
      "Network firewalls are made of software; Host firewalls are made of brick",
      "Host firewalls protect the entire building; Network firewalls only protect one laptop",
      "Network firewalls operate only on Wi-Fi; Host firewalls operate only on Bluetooth"
    ],
    correctAnswer: 0,
    explanation: "Network firewalls protect perimeter boundaries and subnets. Host-based firewalls (like Windows Defender Firewall or Linux iptables/ufw) inspect traffic directly on individual endpoints.",
    officialRef: "PCES-30-01 Block 2.2 - Host Firewalls",
    tags: ["host-firewall", "ufw", "iptables"]
  },
  {
    id: "pces-2-024",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Endpoint Security",
    difficulty: "Intermediate",
    question: "What does an Endpoint Detection and Response (EDR) agent do that traditional Antivirus (AV) typically does not?",
    codeSnippet: "# EDR telemetry monitoring: Continuous behavioral tracking of process spawns, memory injection, and network connections",
    options: [
      "EDR provides continuous behavioral monitoring, threat hunting, telemetry recording, and automated incident response capabilities across endpoints",
      "Traditional AV scans incoming emails; EDR cleans dust from computer cooling fans",
      "EDR deletes all Python scripts automatically",
      "EDR replaces the need for operating system kernels"
    ],
    correctAnswer: 0,
    explanation: "While legacy AV relies primarily on static file signature matching, EDR continuously collects granular process, memory, and network behaviors, detecting zero-days and living-off-the-land attacks.",
    officialRef: "PCES-30-01 Block 2.2 - EDR & Endpoint",
    tags: ["edr", "endpoint", "behavioral-analysis"]
  },
  {
    id: "pces-2-025",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Linux Security & Permissions",
    difficulty: "Intermediate",
    question: "In Unix/Linux file permissions, what does 'chmod 600 config.json' enforce?",
    codeSnippet: "# chmod 600 config.json\n# Owner: read + write (4 + 2 = 6)\n# Group: no permissions (0)\n# Others: no permissions (0)",
    options: [
      "Read and write access exclusively for the file owner; no access for group or others",
      "Read, write, and execute for all users on the system",
      "Read-only access for everyone",
      "Executes the file as root automatically"
    ],
    correctAnswer: 0,
    explanation: "chmod 600 grants read (4) and write (2) permissions to the owner (6), and zero permissions (0) to group members and all other users.",
    officialRef: "PCES-30-01 Block 2.2 - File Permissions",
    tags: ["chmod", "linux-permissions", "hardening"]
  },
  {
    id: "pces-2-026",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Linux Security & SUID",
    difficulty: "Intermediate",
    question: "Why is the SUID (Set User ID) permission bit a potential security hazard on Linux executables?",
    codeSnippet: "# SUID bit represented by 's' in owner execute position: -rwsr-xr-x\n# When executed, the binary runs with the PRIVILEGES OF THE FILE OWNER (e.g. root)!\n# If the binary has a buffer overflow or command injection flaw, an attacker gains root!",
    options: [
      "It causes the file to be deleted upon execution",
      "It causes the executable to run with the privileges of the file owner (often root) rather than the executing user, risking privilege escalation if flawed",
      "It slows down hard drive read speeds by 50%",
      "It encrypts the source code using an unreadable cipher"
    ],
    correctAnswer: 1,
    explanation: "SUID binaries run with the file owner's permissions (frequently root). If a SUID binary has any vulnerability, an unprivileged user can exploit it to achieve root privilege escalation.",
    officialRef: "PCES-30-01 Block 2.2 - SUID & Privileges",
    tags: ["suid", "privilege-escalation", "linux-security"]
  },
  {
    id: "pces-2-027",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "System Auditing",
    difficulty: "Beginner",
    question: "What is the role of 'syslog' and remote log aggregation in enterprise system security?",
    codeSnippet: "# Configuring rsyslog to forward local events to centralized SIEM collector\n# *.* @@siem.corp.internal:514\n# If an attacker compromises a host, they cannot delete logs already shipped to SIEM!",
    options: [
      "Forwarding system logs to a centralized server ensures logs cannot be easily altered or wiped if a local host is compromised",
      "Compressing photos to save cloud storage space",
      "Automatically restarting failed web services",
      "Upgrading Linux distributions across Wi-Fi"
    ],
    correctAnswer: 0,
    explanation: "Centralized log forwarding (e.g. via syslog to a SIEM) preserves an immutable audit trail off-host, preventing an attacker who roots an endpoint from tampering with forensic evidence.",
    officialRef: "PCES-30-01 Block 2.2 - Logging & Syslog",
    tags: ["syslog", "centralized-logging", "auditability"]
  },
  {
    id: "pces-2-028",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Boot Security",
    difficulty: "Intermediate",
    question: "What is 'Secure Boot'?",
    codeSnippet: "# Secure Boot workflow: UEFI firmware validates cryptographic signatures of bootloader and OS kernel against trusted keys embedded in firmware before booting",
    options: [
      "A mechanism where UEFI firmware checks cryptographic digital signatures of boot loaders and OS kernels before allowing them to execute, preventing bootkits",
      "A password typed when turning on a computer monitor",
      "A feature that only allows computers to boot when plugged into wall power",
      "A physical metal lock that clamps around the laptop power button"
    ],
    correctAnswer: 0,
    explanation: "Secure Boot uses cryptographic signatures in UEFI firmware to verify the authenticity of the bootloader, kernel, and boot drivers, blocking persistent rootkits and bootkits.",
    officialRef: "PCES-30-01 Block 2.2 - Secure Boot",
    tags: ["secure-boot", "uefi", "bootkit-defense"]
  },
  {
    id: "pces-2-029",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Account Hardening",
    difficulty: "Beginner",
    question: "Why should the default 'root' (or 'Administrator') account be disabled or blocked from direct remote SSH logins?",
    codeSnippet: "# /etc/ssh/sshd_config hardening\n# PermitRootLogin no\n# Forces administrators to log in as named user and sudo, providing individual accountability",
    options: [
      "Attackers constantly target known default usernames like 'root'; disabling direct root login enforces named user login and individual auditability",
      "Root accounts cannot process network packets over port 22",
      "Linux servers crash if root logs in remotely",
      "Root accounts cannot execute Python scripts"
    ],
    correctAnswer: 0,
    explanation: "Blocking direct remote root access prevents automated brute-force attacks against the known root username and ensures all administrative actions are tied to individual named user accounts via sudo.",
    officialRef: "PCES-30-01 Block 2.2 - Account Hardening",
    tags: ["ssh-hardening", "root-account", "accountability"]
  },
  {
    id: "pces-2-030",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Application Whitelisting",
    difficulty: "Intermediate",
    question: "What is Application Whitelisting (Application Control)?",
    codeSnippet: "# Whitelisting policy: Default DENY\n# Only binaries with matching cryptographic hash or vendor signature in approved list can execute",
    options: [
      "A security practice that only allows explicitly approved and authorized programs and scripts to execute, blocking all others by default",
      "A list of email addresses allowed to send marketing newsletters",
      "A whitelist of IP addresses allowed to access public YouTube videos",
      "An automated tool that colors Python code editor syntax white"
    ],
    correctAnswer: 0,
    explanation: "Application whitelisting (application control) uses default-deny: only executables, DLLs, and scripts that match approved cryptographic hashes or trusted vendor certificates are permitted to run.",
    officialRef: "PCES-30-01 Block 2.2 - Application Control",
    tags: ["whitelisting", "application-control", "malware-prevention"]
  },
  {
    id: "pces-2-031",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Patch Management",
    difficulty: "Beginner",
    question: "What does 'Automated Vulnerability Patching' accomplish in system administration?",
    codeSnippet: "# Automated security patching script / unattended-upgrades\n# Automatically fetches and applies critical security patches for CVEs",
    options: [
      "Automatically applies vendor security updates to operating systems and dependencies to remediate vulnerabilities quickly",
      "Automatically rewrites legacy Python code to Rust",
      "Automatically deletes user files that are older than 1 year",
      "Automatically orders new hard drives when storage reaches 90%"
    ],
    correctAnswer: 0,
    explanation: "Automated patching reduces exposure windows by promptly deploying critical security fixes before threat actors can exploit newly disclosed vulnerabilities.",
    officialRef: "PCES-30-01 Block 2.2 - Patch Management",
    tags: ["patching", "automation", "vulnerability-management"]
  },
  {
    id: "pces-2-032",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Linux Security & Umask",
    difficulty: "Intermediate",
    question: "What is the function of the 'umask' in Linux?",
    codeSnippet: "# umask calculation\n# Default base for files: 666\n# umask: 027\n# Resulting permissions: 666 - 027 = 640 (Owner rw, Group r, Others none)",
    options: [
      "A mask that determines the default permissions stripped from newly created files and directories",
      "A facial recognition mask used for biometric login",
      "A tool that hides IP addresses during ping requests",
      "A firewall that filters UDP broadcast packets"
    ],
    correctAnswer: 0,
    explanation: "The umask (user file-creation mask) specifies which permission bits are automatically masked (removed) when a process creates new files or directories.",
    officialRef: "PCES-30-01 Block 2.2 - Umask & Permissions",
    tags: ["umask", "linux-security", "permissions"]
  },
  {
    id: "pces-2-033",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Endpoint Security",
    difficulty: "Beginner",
    question: "What is 'Full Disk Encryption' (FDE) such as BitLocker or LUKS designed to protect against?",
    codeSnippet: "# LUKS encryption on Linux partition /dev/nvme0n1p3\n# If laptop is physically stolen, data cannot be read without the decryption passphrase/TPM key",
    options: [
      "Data extraction and theft if a physical laptop or storage drive is lost or stolen",
      "Phishing emails received over the Internet",
      "DDoS attacks overwhelming the network card",
      "SQL injection vulnerabilities in web applications"
    ],
    correctAnswer: 0,
    explanation: "Full Disk Encryption (FDE) protects data at rest by encrypting the entire volume, ensuring that if a device is physically stolen, unauthorized actors cannot access files without the key.",
    officialRef: "PCES-30-01 Block 2.2 - Full Disk Encryption",
    tags: ["fde", "bitlocker", "luks", "data-at-rest"]
  },
  {
    id: "pces-2-034",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Service Hardening",
    difficulty: "Beginner",
    question: "Why should legacy protocols like Telnet, FTP, and HTTP be replaced with SSH, SFTP, and HTTPS?",
    codeSnippet: "# Legacy vs Secure protocol comparison:\n# Telnet (port 23) -> SSH (port 22) [Encrypted]\n# FTP (port 21)    -> SFTP (port 22) [Encrypted]\n# HTTP (port 80)   -> HTTPS (port 443) [Encrypted]",
    options: [
      "Because legacy protocols transmit credentials and data in cleartext plaintext across the network, exposing them to packet sniffing",
      "Because SSH and HTTPS use 10 times less CPU than Telnet",
      "Because Telnet only works on monochrome computer screens",
      "Because FTP cannot transmit files larger than 1 megabyte"
    ],
    correctAnswer: 0,
    explanation: "Legacy protocols lack encryption, transmitting passwords and data in unencrypted plaintext across networks where any eavesdropper or intermediary can intercept them.",
    officialRef: "PCES-30-01 Block 2.2 - Protocol Hardening",
    tags: ["legacy-protocols", "cleartext", "ssh", "https"]
  },
  {
    id: "pces-2-035",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Linux Security & Mandatory Access",
    difficulty: "Intermediate",
    question: "What are SELinux and AppArmor in Linux operating systems?",
    codeSnippet: "# SELinux enforcing mode check\n# getenforce -> 'Enforcing'\n# Enforces Mandatory Access Control (MAC) policies restricting even root processes",
    options: [
      "Mandatory Access Control (MAC) security modules that restrict programs to only the files, sockets, and capabilities they need",
      "Text editors used for writing bash scripts",
      "Network hardware drivers for Realtek Ethernet cards",
      "Python web frameworks for building e-commerce sites"
    ],
    correctAnswer: 0,
    explanation: "SELinux and AppArmor provide Mandatory Access Control (MAC) in Linux, confining processes to strict security profiles so that even compromised root daemons cannot access unauthorized resources.",
    officialRef: "PCES-30-01 Block 2.2 - MAC & SELinux",
    tags: ["selinux", "apparmor", "mac", "hardening"]
  },
  {
    id: "pces-2-036",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Screen Lock & Inactivity",
    difficulty: "Beginner",
    question: "What physical security threat is mitigated by enforcing an automated 5-minute screen lock policy on workstations?",
    codeSnippet: "# Screen lock policy: Screen locks and requires password after 300 seconds of inactivity\n# Mitigates unauthorized access by passerby when employee walks away from desk",
    options: [
      "Unauthorized physical access or tampering by unauthorized persons while the employee is away from their unattended desk",
      "Overheating of the computer monitor backlight",
      "Power outages in the local city electric grid",
      "Automated port scanning over the internet"
    ],
    correctAnswer: 0,
    explanation: "Automated screen lock prevents unauthorized individuals (e.g. visitors, cleaners, malicious coworkers) from accessing unattended unlocked computers.",
    officialRef: "PCES-30-01 Block 2.2 - Physical Hardening",
    tags: ["screen-lock", "unattended-workstation", "physical-security"]
  },
  {
    id: "pces-2-037",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Integrity Monitoring",
    difficulty: "Intermediate",
    question: "What does a File Integrity Monitoring (FIM) tool (such as Tripwire or AIDE) do?",
    codeSnippet: "# AIDE / FIM monitoring logic:\n# Baseline: /bin/ls -> sha256: 4a8f...\n# Nightly scan: Computes current sha256 and alerts if hash changed unexpectedly (trojanized!)",
    options: [
      "Monitors system files, libraries, and binaries against a baseline of cryptographic hashes, alerting administrators if unauthorized modifications occur",
      "Defragments file system clusters to improve disk read speed",
      "Automatically deletes duplicate PDF downloads",
      "Backs up photos to external USB drives"
    ],
    correctAnswer: 0,
    explanation: "File Integrity Monitoring (FIM) computes cryptographic hashes of critical system files and compares them against a known-good baseline, detecting unauthorized modifications or rootkits.",
    officialRef: "PCES-30-01 Block 2.2 - File Integrity Monitoring",
    tags: ["fim", "aide", "tripwire", "integrity"]
  },
  {
    id: "pces-2-038",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "System Hardening",
    difficulty: "Beginner",
    question: "What is 'Bloatware' and why does removing it improve endpoint security?",
    codeSnippet: "# Pre-installed unnecessary OEM software: trial games, promotional toolbars\n# Each unneeded application increases the attack surface and potential CVE exposure",
    options: [
      "Unnecessary pre-installed software; removing it reduces the attack surface and eliminates unneeded background services and vulnerabilities",
      "A specialized virus that inflates hard drive partition tables",
      "Excessive thermal paste applied on top of the CPU chip",
      "Large font sizes used in terminal windows"
    ],
    correctAnswer: 0,
    explanation: "Bloatware refers to unneeded pre-installed applications and utilities. Removing bloatware minimizes the attack surface and removes vulnerable third-party update services.",
    officialRef: "PCES-30-01 Block 2.2 - Bloatware & Hardening",
    tags: ["bloatware", "attack-surface", "clean-os"]
  },
  {
    id: "pces-2-039",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Configuration Management",
    difficulty: "Intermediate",
    question: "How do Infrastructure as Code (IaC) and configuration management tools (like Ansible, Terraform, Puppet) improve system hardening?",
    codeSnippet: "# Ansible hardening playbook snippet:\n# - name: Enforce SSH hardening\n#   lineinfile:\n#     path: /etc/ssh/sshd_config\n#     regexp: '^PermitRootLogin'\n#     line: 'PermitRootLogin no'",
    options: [
      "They allow automated, reproducible, and verifiable baseline hardening across thousands of servers without human configuration drift",
      "They translate Python code into assembly language",
      "They eliminate the need for server operating systems",
      "They provide free hardware upgrades from cloud providers"
    ],
    correctAnswer: 0,
    explanation: "Configuration management ensures that hardening baselines are applied consistently, reproducibly, and auditably across all infrastructure, preventing human error and configuration drift.",
    officialRef: "PCES-30-01 Block 2.2 - Configuration Management",
    tags: ["iac", "ansible", "hardening-automation"]
  },
  {
    id: "pces-2-040",
    track: 'pces',
    section: "Section 2",
    chapter: "2.2",
    category: "Hardware Security",
    difficulty: "Intermediate",
    question: "What is a TPM (Trusted Platform Module)?",
    codeSnippet: "# TPM 2.0 cryptographic chip on motherboard\n# Hardware-based secure storage for cryptographic keys, platform measurements, and BitLocker keys",
    options: [
      "A dedicated hardware crypto-processor chip on the motherboard that securely stores cryptographic keys and ensures platform integrity",
      "A software program that speeds up internet downloads",
      "A high-capacity external backup hard drive",
      "A temperature monitoring sensor for computer chassis fans"
    ],
    correctAnswer: 0,
    explanation: "A Trusted Platform Module (TPM) is a hardware security chip that provides hardware-based key generation, secure cryptographic storage (e.g. for BitLocker keys), and tamper detection.",
    officialRef: "PCES-30-01 Block 2.2 - Hardware Security & TPM",
    tags: ["tpm", "hardware-security", "cryptography"]
  },
  {
    id: "pces-2-041",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "Network Models",
    difficulty: "Beginner",
    question: "At which layer of the OSI model do IP addressing and packet routing occur?",
    codeSnippet: "# OSI Layers:\n# Layer 7: Application | Layer 4: Transport (TCP/UDP)\n# Layer 3: Network (IP, ICMP, Routing) | Layer 2: Data Link (MAC, ARP)",
    options: [
      "Layer 1 (Physical)",
      "Layer 2 (Data Link)",
      "Layer 3 (Network)",
      "Layer 4 (Transport)"
    ],
    correctAnswer: 2,
    explanation: "Layer 3 (Network Layer) handles logical addressing (IPv4, IPv6), packet forwarding, and path routing between disparate networks.",
    officialRef: "PCES-30-01 Block 2.3 - OSI Model",
    tags: ["osi-model", "layer-3", "network-layer"]
  },
  {
    id: "pces-2-042",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "TCP vs UDP",
    difficulty: "Beginner",
    question: "What is the key functional difference between TCP and UDP at the Transport layer?",
    codeSnippet: "# Transport protocols\n# TCP: Connection-oriented, 3-way handshake, guaranteed delivery, retransmission\n# UDP: Connectionless, lightweight, fire-and-forget, no delivery guarantee (DNS, VoIP)",
    options: [
      "TCP is connection-oriented and guarantees reliable packet delivery; UDP is connectionless and prioritizes low latency without delivery guarantees",
      "TCP is wireless; UDP is wired Ethernet",
      "TCP cannot transmit data over the Internet; UDP is the only web protocol",
      "TCP is unencrypted; UDP is always encrypted with AES"
    ],
    correctAnswer: 0,
    explanation: "TCP establishes a stateful connection via a 3-way handshake and guarantees in-order delivery. UDP is lightweight and connectionless, suitable for streaming and DNS queries where speed matters.",
    officialRef: "PCES-30-01 Block 2.3 - TCP vs UDP",
    tags: ["tcp", "udp", "transport-layer"]
  },
  {
    id: "pces-2-043",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "TCP Handshake",
    difficulty: "Intermediate",
    question: "What sequence of flags is exchanged during the standard TCP 3-Way Handshake?",
    codeSnippet: "# Client -> Server: SYN\n# Server -> Client: SYN-ACK\n# Client -> Server: ACK\n# (Connection established!)",
    options: [
      "SYN -> SYN-ACK -> ACK",
      "ACK -> SYN -> FIN",
      "RST -> SYN -> PSH",
      "HELLO -> VERIFY -> READY"
    ],
    correctAnswer: 0,
    explanation: "The TCP 3-way handshake establishes a reliable connection using the sequence: SYN (Synchronize), SYN-ACK (Synchronize-Acknowledge), and ACK (Acknowledge).",
    officialRef: "PCES-30-01 Block 2.3 - TCP Handshake",
    tags: ["tcp-handshake", "syn", "ack"]
  },
  {
    id: "pces-2-044",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "Standard Ports",
    difficulty: "Beginner",
    question: "Which standard well-known port is assigned to secure SSH (Secure Shell) remote administration?",
    codeSnippet: "# Connecting via SSH: ssh user@server.example -p 22",
    options: [
      "Port 21",
      "Port 22",
      "Port 23",
      "Port 25"
    ],
    correctAnswer: 1,
    explanation: "Port 22 is the standard TCP port for SSH. Port 21 is FTP, Port 23 is Telnet, and Port 25 is SMTP.",
    officialRef: "PCES-30-01 Block 2.3 - Well-Known Ports",
    tags: ["ssh", "port-22", "ports"]
  },
  {
    id: "pces-2-045",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "Standard Ports",
    difficulty: "Beginner",
    question: "Which well-known port and protocol are primarily used for Domain Name System (DNS) queries?",
    codeSnippet: "# Standard DNS query: Resolves hostname to IP\n# Protocol: UDP (and TCP for zone transfers/large responses) on Port 53",
    options: [
      "Port 53 (UDP/TCP)",
      "Port 80 (TCP)",
      "Port 443 (TCP)",
      "Port 3389 (TCP)"
    ],
    correctAnswer: 0,
    explanation: "Port 53 is the standard port for DNS operations, primarily utilizing UDP for standard name resolution queries and TCP for zone transfers or large responses.",
    officialRef: "PCES-30-01 Block 2.3 - DNS Port",
    tags: ["dns", "port-53", "protocols"]
  },
  {
    id: "pces-2-046",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "Standard Ports",
    difficulty: "Beginner",
    question: "Which port is standard for HTTPS (Hypertext Transfer Protocol Secure)?",
    codeSnippet: "# HTTPS server listening on default encrypted TLS port\n# https://example.com:443",
    options: [
      "Port 80",
      "Port 443",
      "Port 8080",
      "Port 8443"
    ],
    correctAnswer: 1,
    explanation: "Port 443 is the standard port for HTTPS encrypted with TLS. Port 80 is unencrypted plaintext HTTP.",
    officialRef: "PCES-30-01 Block 2.3 - Well-Known Ports",
    tags: ["https", "port-443", "tls"]
  },
  {
    id: "pces-2-047",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "ARP Spoofing",
    difficulty: "Intermediate",
    question: "How does ARP Spoofing (ARP Poisoning) operate on a local Area Network (LAN)?",
    codeSnippet: "# ARP Poisoning packet craft:\n# Attacker sends gratuitous ARP replies mapping Default Gateway IP to Attacker MAC address\n# Target victim caches fake mapping and sends all outbound packets to attacker!",
    options: [
      "An attacker sends forged ARP messages to associate their MAC address with the IP address of a legitimate default gateway or server",
      "An attacker alters DNS records on a root name server",
      "An attacker physically cuts Ethernet cables in a wall jack",
      "An attacker floods the CPU with mathematical division by zero"
    ],
    correctAnswer: 0,
    explanation: "ARP spoofing exploits the lack of authentication in ARP by broadcasting forged ARP replies, tricking hosts into routing their traffic through the attacker's machine.",
    officialRef: "PCES-30-01 Block 2.3 - ARP Spoofing",
    tags: ["arp-spoofing", "layer-2", "mitm"]
  },
  {
    id: "pces-2-048",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "DNS Security",
    difficulty: "Intermediate",
    question: "What security extension was designed to protect DNS against spoofing and cache poisoning by cryptographically signing DNS records?",
    codeSnippet: "# DNSSEC validation: Verifies cryptographic signatures (RRSIG) using DNSKEY public keys\n# Proves that DNS response originated from legitimate zone and was not tampered with",
    options: [
      "DNSSEC (DNS Security Extensions)",
      "DNSSPEED",
      "HTTP/3",
      "DHCPv6"
    ],
    correctAnswer: 0,
    explanation: "DNSSEC (Domain Name System Security Extensions) provides origin authentication and integrity verification for DNS responses using public key cryptography and digital signatures.",
    officialRef: "PCES-30-01 Block 2.3 - DNSSEC",
    tags: ["dnssec", "dns-security", "cryptography"]
  },
  {
    id: "pces-2-049",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "Network Address Translation",
    difficulty: "Beginner",
    question: "What is Network Address Translation (NAT) and what incidental security benefit does it provide?",
    codeSnippet: "# NAT router: Translates internal private IPs (192.168.1.50) to single public IP (203.0.113.1)\n# Inbound connections from Internet cannot directly address private internal hosts",
    options: [
      "NAT maps multiple private internal IP addresses to a single public IP, hiding internal IP topology from direct unsolicited inbound internet probes",
      "NAT encrypts all web traffic with AES-256",
      "NAT prevents malware from executing in RAM",
      "NAT speeds up Wi-Fi signal frequencies"
    ],
    correctAnswer: 0,
    explanation: "NAT translates private RFC 1918 IP addresses to a public routable IP. By default, external internet hosts cannot initiate unsolicited inbound connections directly to private IP hosts behind NAT.",
    officialRef: "PCES-30-01 Block 2.3 - NAT",
    tags: ["nat", "ip-addressing", "perimeter"]
  },
  {
    id: "pces-2-050",
    track: 'pces',
    section: "Section 2",
    chapter: "2.3",
    category: "Firewall Types",
    difficulty: "Intermediate",
    question: "What distinguishes a Stateful Packet Inspection (SPI) firewall from a Stateless Packet Filtering firewall?",
    codeSnippet: "# Stateful tracking: Firewall maintains connection state table (SYN_SENT, ESTABLISHED)\n# Automatically permits inbound packets if they belong to an existing outbound connection initiated by client!",
    options: [
      "Stateful firewalls track active connection states (e.g. TCP handshakes) and allow return traffic automatically; Stateless filters evaluate each packet in isolation against static rules",
      "Stateful firewalls run on battery power; Stateless run on wall electricity",
      "Stateful firewalls only block email; Stateless only block video games",
      "There is no technical difference"
    ],
    correctAnswer: 0,
    explanation: "A stateful firewall tracks the context and state of active network conversations. When an internal client initiates an outbound connection, return packets are automatically allowed without needing static inbound rules.",
    officialRef: "PCES-30-01 Block 2.3 - Firewall Architecture",
    tags: ["stateful-firewall", "packet-filtering", "network-security"]
  }
];
