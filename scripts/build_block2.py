#!/usr/bin/env python3
import json

cards = []

def add_c(id_num, chap, cat, diff, q, snippet, opts, ans, exp, ref, tags):
    cards.append({
        "id": f"pces-2-{id_num:03d}",
        "section": "Section 2",
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

# --- CHAPTER 2.1: Core Security Principles & Architecture (Cards 1-20) ---
add_c(1, "2.1", "Zero Trust Architecture", "Intermediate",
      "What is the foundational philosophy behind Zero Trust Architecture (ZTA)?",
      "# Zero Trust verification logic\ndef grant_access(request):\n    # 1. Never trust implicitly, regardless of network location\n    # 2. Always verify identity, device health, and context dynamically\n    # 3. Assume breach has already occurred\n    return verify_identity(request) and verify_posture(request)",
      ["Never trust, always verify every request regardless of whether it originates inside or outside the corporate perimeter", "Trust all internal network traffic once inside the corporate office Wi-Fi", "Disable all user passwords and rely on IP whitelisting", "Grant root privileges to all network monitoring services"],
      0,
      "Zero Trust eliminates implicit trust based on network location. Its core tenets are: verify explicitly, use least privileged access, and assume breach.",
      "PCES-30-01 Block 2.1 - Zero Trust Architecture",
      ["zero-trust", "principles", "perimeterless"])

add_c(2, "2.1", "Zero Trust Principles", "Intermediate",
      "Which of the following is NOT one of the three core principles of NIST Zero Trust Architecture (SP 800-207)?",
      "# NIST SP 800-207 Zero Trust Tenets:\n# - Verify explicitly\n# - Use least privilege access\n# - Assume breach",
      ["Verify explicitly", "Use least privilege access", "Assume breach", "Trust internal VLAN traffic implicitly"],
      3,
      "Zero Trust explicitly rejects trusting internal networks or VLANs. All requests must be authenticated, authorized, and encrypted regardless of origin.",
      "PCES-30-01 Block 2.1 - Zero Trust Architecture",
      ["zero-trust", "nist-800-207", "principles"])

add_c(3, "2.1", "Security Architecture", "Beginner",
      "What is 'Defense in Depth'?",
      "# Layered defensive architecture\n# Layer 1: DNS Filtering -> Layer 2: Cloud WAF -> Layer 3: Network Firewall\n# -> Layer 4: Host EDR -> Layer 5: Database Column Encryption",
      ["A strategy that employs multiple concentric defensive layers of security controls throughout an IT infrastructure", "Burying database servers in deep underground bunkers", "Installing multiple antivirus scanners on the exact same Windows machine", "Encrypting files multiple times with the exact same Caesar cipher"],
      0,
      "Defense-in-depth ensures that if one security barrier is breached or fails (e.g. firewall), subsequent layers (e.g. host EDR, database encryption) continue to protect critical assets.",
      "PCES-30-01 Block 2.1 - Defense in Depth",
      ["defense-in-depth", "layered-security", "architecture"])

add_c(4, "2.1", "Security Principles", "Beginner",
      "What does the Principle of 'Separation of Duties' (SoD) prevent?",
      "# Separation of Duties in finance deployment\ndef deploy_financial_release(code_author: str, approver: str):\n    # An engineer cannot approve their own code deployment to production\n    if code_author == approver:\n        raise SecurityError('Separation of duties violation!')",
      ["A single person from possessing total control to execute a critical or fraudulent task without oversight or collusion", "Developers from talking to quality assurance testers", "Computers from connecting to more than one Wi-Fi network", "Python scripts from running on multi-core processors"],
      0,
      "Separation of Duties (SoD) divides critical tasks among multiple individuals so no single rogue employee can commit fraud, abuse, or unauthorized changes unnoticed.",
      "PCES-30-01 Block 2.1 - Separation of Duties",
      ["separation-of-duties", "governance", "fraud-prevention"])

add_c(5, "2.1", "Security Defaults", "Intermediate",
      "In software design and firewall configuration, what is 'Fail-Secure' (Fail-Closed) versus 'Fail-Open'?",
      "# Fail-Secure access control evaluation\ndef verify_authorization(user_id: str) -> bool:\n    try:\n        return auth_service.check_permission(user_id)\n    except NetworkTimeoutError:\n        # Fail-secure: If auth service is unreachable, DEFAULT TO DENY ACCESS!\n        return False",
      ["Fail-secure defaults to denying access upon system failure; Fail-open defaults to granting access", "Fail-secure shuts down the entire data center power grid; Fail-open restarts the server", "Fail-secure is used only for air conditioners; Fail-open is for databases", "Fail-secure means passwords are saved in plaintext upon error"],
      0,
      "A fail-secure (fail-closed) architecture ensures that if an exception or failure occurs, the system defaults to the safest state (denying access or blocking traffic).",
      "PCES-30-01 Block 2.1 - Secure Defaults",
      ["fail-secure", "fail-closed", "error-handling"])

add_c(6, "2.1", "Security Lifecycle", "Beginner",
      "Why is cybersecurity described as a 'Continuous Lifecycle Process' rather than a one-time project?",
      "# Continuous security lifecycle: Identify -> Protect -> Detect -> Respond -> Recover -> Iterate\n# New vulnerabilities emerge daily; IT environments and threats evolve constantly",
      ["Because once a firewall is configured, software never changes", "Because threats, vulnerabilities, software updates, and organizational infrastructure evolve continuously over time", "Because security engineers must be paid hourly rather than on salary", "Because operating systems can only boot for 24 hours at a time"],
      1,
      "Security is an ongoing operational lifecycle. New vulnerabilities (CVEs) and attack tactics emerge constantly, requiring continuous monitoring, patching, and adaptation.",
      "PCES-30-01 Block 2.1 - Security Lifecycle",
      ["continuous-process", "security-lifecycle", "adaptation"])

add_c(7, "2.1", "Security Principles", "Beginner",
      "What is 'Economy of Mechanism' in secure system design?",
      "# Keeping security design as simple and small as possible\n# Simple designs are easier to test, verify, audit, and maintain without hidden flaws",
      ["Keeping the security design and architecture as simple and small as possible to minimize flaws and simplify verification", "Spending as little money as possible on cybersecurity software", "Outsourcing all server hosting to foreign countries to save taxes", "Using cheap hardware components to maximize profit margins"],
      0,
      "Economy of mechanism (one of Saltzer and Schroeder's design principles) states that simpler designs are easier to understand, test, verify, and defend against unintended vulnerabilities.",
      "PCES-30-01 Block 2.1 - Design Principles",
      ["economy-of-mechanism", "simplicity", "saltzer-schroeder"])

add_c(8, "2.1", "Security Principles", "Intermediate",
      "What does 'Complete Mediation' require in an operating system or web service?",
      "# Complete Mediation: Every single access request must be checked against access policy\ndef handle_file_read(user, file_id):\n    # Cannot rely on cached permissions from 2 hours ago without re-checking\n    if not access_control_matrix.can_read(user, file_id):\n        raise PermissionDenied('Access check failed')",
      ["Every single access to every resource must be checked for authorization, without bypassing checks via cached shortcuts", "Access is only checked when the user first powers on their laptop in the morning", "Mediation occurs only when a court order is filed", "Mediation is only performed on Saturdays during maintenance windows"],
      0,
      "Complete mediation requires that every access request to any resource must be validated against the access control policy, preventing bypasses or stale permission caching.",
      "PCES-30-01 Block 2.1 - Design Principles",
      ["complete-mediation", "access-control", "principles"])

add_c(9, "2.1", "Security Principles", "Beginner",
      "What is the Principle of 'Open Design' in cryptography and security engineering?",
      "# Open Design: Security does not depend on keeping the algorithm secret\n# AES, RSA, and SHA-256 are fully public specifications; their security lies in keys and mathematics",
      ["The design should be open to public scrutiny; security should not depend on secrecy of the algorithm (reaffirming Kerckhoffs's principle)", "The server room doors should be left open to the public", "Source code must have zero access controls so anyone can edit it", "Databases should accept unauthenticated connections from any IP"],
      0,
      "Open design states that the security of a mechanism should not depend on keeping its inner workings secret; public scrutiny and battle-testing make designs robust.",
      "PCES-30-01 Block 2.1 - Design Principles",
      ["open-design", "kerckhoffs", "principles"])

add_c(10, "2.1", "Security Principles", "Intermediate",
      "What is 'Least Common Mechanism'?",
      "# Least Common Mechanism:\n# Minimize mechanisms shared between different users/tenants to avoid cross-tenant information leakage\n# e.g. Container isolation vs shared single global temp directory (/tmp)",
      ["The design should minimize the functions and mechanisms shared by different users to avoid unintentional sharing channels and privilege leaks", "Using the cheapest network switch available on the market", "Sharing a single administrator account among all staff members", "Reusing the same database connection string across all microservices"],
      0,
      "Least common mechanism dictates minimizing shared resources and mechanisms between distinct users or processes, preventing accidental cross-talk, data leakage, and covert channels.",
      "PCES-30-01 Block 2.1 - Design Principles",
      ["least-common-mechanism", "isolation", "tenancy"])

add_c(11, "2.1", "Attack Surface Reduction", "Beginner",
      "Which action directly accomplishes Attack Surface Reduction on a Linux production database server?",
      "# Hardening script: Disabling unneeded services and stopping listeners\n# systemctl disable --now cups.service      # Disable print daemon\n# systemctl disable --now avahi-daemon.service  # Disable mDNS\n# systemctl disable --now telnet.service        # Disable insecure telnet",
      ["Uninstalling and disabling unnecessary network services, daemons, and closing unused firewall ports", "Increasing the hard drive capacity from 1TB to 4TB", "Adding 10 additional administrative users to the server", "Opening port 21 so support technicians can upload logs via FTP"],
      0,
      "Attack surface reduction involves eliminating unnecessary software, closing unused ports, disabling legacy protocols, and restricting network exposure to the bare minimum.",
      "PCES-30-01 Block 2.1 - Attack Surface Reduction",
      ["attack-surface", "hardening", "services"])

add_c(12, "2.1", "Security Architecture", "Intermediate",
      "What is a 'DMZ' (Demilitarized Zone) in network security architecture?",
      "# Network architecture segmentation:\n# Internet <-> External Firewall <-> DMZ (Public Web/Mail Proxies) <-> Internal Firewall <-> LAN (Database/Active Directory)",
      ["A physical buffer zone between two warring nations", "A perimeter network segment that separates an internal private network from untrusted external networks like the Internet", "A software utility that deletes temp files every night", "A high-speed Wi-Fi router used in military camps"],
      1,
      "A DMZ is an isolated subnetwork hosting public-facing services (e.g. web servers, reverse proxies). If a server in the DMZ is compromised, internal firewalls prevent lateral movement into the private corporate LAN.",
      "PCES-30-01 Block 2.1 - Network Architecture",
      ["dmz", "perimeter", "segmentation"])

add_c(13, "2.1", "Security Principles", "Beginner",
      "What is the difference between 'Need to Know' and 'Least Privilege'?",
      "# Access evaluation\n# Least Privilege: Grants minimum necessary technical rights (e.g. read-only instead of admin)\n# Need-to-Know: Requires a legitimate business/operational justification to access specific data",
      ["Least privilege restricts technical permissions; Need-to-know restricts access to specific information based on legitimate job necessity", "Least privilege applies only to executives; Need-to-know applies only to interns", "They are identical technical concepts in Python code", "Need-to-know is for Linux; Least privilege is for Windows"],
      0,
      "Least privilege limits the scope of actions and technical rights a user or process possesses. Need-to-know ensures that even if a user has clearance, they can only access data required for their specific current task.",
      "PCES-30-01 Block 2.1 - Access Principles",
      ["need-to-know", "least-privilege", "access-control"])

add_c(14, "2.1", "Security Architecture", "Intermediate",
      "What is 'Microsegmentation' in modern data center and cloud security?",
      "# Microsegmentation policy:\n# Workload A (Billing Web) can ONLY talk to Workload B (Billing DB) on TCP 5432\n# Lateral communication between peer web servers is completely blocked!",
      ["Creating granular, isolated network security zones down to individual workloads or containers to prevent lateral movement", "Splitting an Ethernet cable into smaller copper strands", "Dividing hard drives into 1MB FAT32 partitions", "Compressing network packets to under 64 bytes"],
      0,
      "Microsegmentation applies fine-grained security policies to individual workloads, containers, or VMs, isolating workloads from each other to halt lateral threat propagation.",
      "PCES-30-01 Block 2.1 - Microsegmentation",
      ["microsegmentation", "cloud-security", "zero-trust"])

add_c(15, "2.1", "Threat Modeling", "Intermediate",
      "In the PASTA threat modeling methodology, what is the core focus?",
      "# PASTA: Process for Attack Simulation and Threat Analysis\n# Risk-centric approach linking technical vulnerabilities to business impact and asset value",
      ["A risk-centric framework that aligns technical vulnerabilities with business objectives and threat simulation", "A recipe book for Italian cybersecurity conferences", "A Python package for parsing JSON configuration files", "A physical lock mechanism for server room doors"],
      0,
      "PASTA (Process for Attack Simulation and Threat Analysis) is a structured 7-step risk-centric threat modeling methodology that aligns business context and asset values with attack simulation.",
      "PCES-30-01 Block 2.1 - Threat Modeling",
      ["pasta", "threat-modeling", "risk-centric"])

add_c(16, "2.1", "Zero Trust Architecture", "Intermediate",
      "How does Zero Trust handle device security (device posture)?",
      "# Device posture verification check before granting session\ndef evaluate_device_posture(device_info: dict) -> bool:\n    return (\n        device_info['disk_encrypted'] and\n        device_info['os_patched'] and\n        device_info['edr_active'] and\n        not device_info['is_jailbroken']\n    )",
      ["Devices are trusted forever once they connect to office Wi-Fi", "Device health, encryption status, OS patch level, and security agent telemetry are continually evaluated before granting resource access", "Only devices manufactured by Apple are permitted on the network", "Device security is ignored if the user knows their password"],
      1,
      "In Zero Trust, device posture (disk encryption, compliance, up-to-date EDR agent, OS patching) is continuously assessed; untrusted or non-compliant devices are denied access.",
      "PCES-30-01 Block 2.1 - Zero Trust Posture",
      ["device-posture", "zero-trust", "endpoint"])

add_c(17, "2.1", "Security Principles", "Beginner",
      "What does 'Psychological Acceptability' mean as a security design principle?",
      "# Principle of Psychological Acceptability:\n# Security mechanisms should not make normal work so frustrating or complex\n# that users bypass them (e.g. users writing 30-char passwords on yellow sticky notes)",
      ["Security controls should be intuitive and not impose excessive burdens, ensuring users do not actively circumvent them to get work done", "Psychologists must interview all employees before granting email access", "Using soothing blue background colors on login screens to calm angry users", "Allowing users to opt out of security rules whenever they feel stressed"],
      0,
      "Psychological acceptability (Saltzer and Schroeder) emphasizes that security controls must be user-friendly; overly cumbersome procedures lead users to find dangerous workarounds.",
      "PCES-30-01 Block 2.1 - Design Principles",
      ["psychological-acceptability", "usability", "human-factors"])

add_c(18, "2.1", "System Baselines", "Beginner",
      "What is a 'Security Baseline Configuration'?",
      "# Security baseline deployment\n# All corporate workstations must conform to documented standard:\n# - Disk encryption: Enabled\n# - Screen lock timeout: 5 minutes\n# - Guest account: Disabled\n# - Firewall: Active",
      ["A documented, standardized set of security specifications and settings established as the required minimum configuration for all systems", "The physical height of server cabinets in a warehouse", "The minimum typing speed required for system administrators", "The baseline internet bandwidth contract with an ISP"],
      0,
      "A security baseline defines the mandatory minimum configuration settings (hardening, password rules, services, audit logging) that must be applied across an enterprise's systems.",
      "PCES-30-01 Block 2.1 - Security Baselines",
      ["baseline", "hardening", "configuration"])

add_c(19, "2.1", "Security Architecture", "Intermediate",
      "What is an 'Air Gap' in high-security environment architecture?",
      "# Air-gapped network: Completely isolated from public Internet and external LANs\n# No physical cables, no wireless interfaces, no routing pathways",
      ["A physical network isolation measure where a secure network has no physical or wireless connections to external untrusted networks", "An empty space between two server racks to improve cooling airflow", "A pause in network transmissions to reduce packet collisions", "A ventilation duct above the server room ceiling"],
      0,
      "An air-gapped system or network is physically and logically isolated from unsecured networks, including the Internet and local corporate LANs, preventing remote electronic intrusion.",
      "PCES-30-01 Block 2.1 - Network Isolation",
      ["air-gap", "isolation", "physical-security"])

add_c(20, "2.1", "Security Architecture", "Beginner",
      "What is the security risk of a 'Single Point of Failure' (SPOF)?",
      "# Architecture evaluation: If Router-1 fails, entire corporate network loses connection!\n# Redundant Router-2 eliminates this SPOF",
      ["If that specific single component fails or is compromised, the entire system or availability collapses", "It speeds up network traffic by removing duplicate routers", "It requires two passwords to log in", "It prevents Python from executing recursive functions"],
      0,
      "A Single Point of Failure (SPOF) is any component whose failure will disrupt the entire system's operation, violating the Availability pillar of the CIA Triad.",
      "PCES-30-01 Block 2.1 - High Availability",
      ["spof", "availability", "redundancy"])

# --- CHAPTER 2.2: System Hardening & Endpoint Protection (Cards 21-40) ---
add_c(21, "2.2", "System Hardening", "Beginner",
      "What is the primary objective of 'System Hardening'?",
      "# Hardening workflow: Close ports, update firmware, remove bloatware, enforce strict permissions",
      ["To physically reinforce computer metal casings against sledgehammer attacks", "To securely configure an operating system or application by reducing vulnerabilities and eliminating unnecessary services and features", "To overclock CPU clock speeds for faster gaming", "To make computer screens resistant to scratches"],
      1,
      "System hardening is the process of securing a system by minimizing its vulnerabilities and reducing its attack surface (e.g. disabling unused services, enforcing least privilege, applying patches).",
      "PCES-30-01 Block 2.2 - System Hardening",
      ["hardening", "configuration", "attack-surface"])

add_c(22, "2.2", "CIS Benchmarks", "Beginner",
      "What are the CIS (Center for Internet Security) Benchmarks?",
      "# CIS Benchmark reference\n# Globally recognized, consensus-based best practice configuration guidelines for hardening OSes, clouds, and databases",
      ["Prescriptive, consensus-based best-practice configuration guides and checklists for securely hardening operating systems, software, and cloud environments", "A Python benchmarking tool that tests floating-point calculation speeds", "A certification exam for selling computer hardware", "A database of retail laptop prices"],
      0,
      "CIS Benchmarks provide vendor-agnostic, industry-standard configuration guidelines for hardening operating systems, web servers, databases, and network devices.",
      "PCES-30-01 Block 2.2 - CIS Benchmarks",
      ["cis-benchmarks", "hardening", "best-practices"])

add_c(23, "2.2", "Host Firewalls", "Beginner",
      "What is the difference between a Network Firewall and a Host-Based Firewall?",
      "# Linux host firewall: UFW (Uncomplicated Firewall)\n# sudo ufw default deny incoming\n# sudo ufw allow 22/tcp\n# sudo ufw enable",
      ["Network firewalls filter traffic entering/exiting subnets; Host firewalls run as software directly on individual endpoints protecting that specific host", "Network firewalls are made of software; Host firewalls are made of brick", "Host firewalls protect the entire building; Network firewalls only protect one laptop", "Network firewalls operate only on Wi-Fi; Host firewalls operate only on Bluetooth"],
      0,
      "Network firewalls protect perimeter boundaries and subnets. Host-based firewalls (like Windows Defender Firewall or Linux iptables/ufw) inspect traffic directly on individual endpoints.",
      "PCES-30-01 Block 2.2 - Host Firewalls",
      ["host-firewall", "ufw", "iptables"])

add_c(24, "2.2", "Endpoint Security", "Intermediate",
      "What does an Endpoint Detection and Response (EDR) agent do that traditional Antivirus (AV) typically does not?",
      "# EDR telemetry monitoring: Continuous behavioral tracking of process spawns, memory injection, and network connections",
      ["EDR provides continuous behavioral monitoring, threat hunting, telemetry recording, and automated incident response capabilities across endpoints", "Traditional AV scans incoming emails; EDR cleans dust from computer cooling fans", "EDR deletes all Python scripts automatically", "EDR replaces the need for operating system kernels"],
      0,
      "While legacy AV relies primarily on static file signature matching, EDR continuously collects granular process, memory, and network behaviors, detecting zero-days and living-off-the-land attacks.",
      "PCES-30-01 Block 2.2 - EDR & Endpoint",
      ["edr", "endpoint", "behavioral-analysis"])

add_c(25, "2.2", "Linux Security & Permissions", "Intermediate",
      "In Unix/Linux file permissions, what does 'chmod 600 config.json' enforce?",
      "# chmod 600 config.json\n# Owner: read + write (4 + 2 = 6)\n# Group: no permissions (0)\n# Others: no permissions (0)",
      ["Read and write access exclusively for the file owner; no access for group or others", "Read, write, and execute for all users on the system", "Read-only access for everyone", "Executes the file as root automatically"],
      0,
      "chmod 600 grants read (4) and write (2) permissions to the owner (6), and zero permissions (0) to group members and all other users.",
      "PCES-30-01 Block 2.2 - File Permissions",
      ["chmod", "linux-permissions", "hardening"])

add_c(26, "2.2", "Linux Security & SUID", "Intermediate",
      "Why is the SUID (Set User ID) permission bit a potential security hazard on Linux executables?",
      "# SUID bit represented by 's' in owner execute position: -rwsr-xr-x\n# When executed, the binary runs with the PRIVILEGES OF THE FILE OWNER (e.g. root)!\n# If the binary has a buffer overflow or command injection flaw, an attacker gains root!",
      ["It causes the file to be deleted upon execution", "It causes the executable to run with the privileges of the file owner (often root) rather than the executing user, risking privilege escalation if flawed", "It slows down hard drive read speeds by 50%", "It encrypts the source code using an unreadable cipher"],
      1,
      "SUID binaries run with the file owner's permissions (frequently root). If a SUID binary has any vulnerability, an unprivileged user can exploit it to achieve root privilege escalation.",
      "PCES-30-01 Block 2.2 - SUID & Privileges",
      ["suid", "privilege-escalation", "linux-security"])

add_c(27, "2.2", "System Auditing", "Beginner",
      "What is the role of 'syslog' and remote log aggregation in enterprise system security?",
      "# Configuring rsyslog to forward local events to centralized SIEM collector\n# *.* @@siem.corp.internal:514\n# If an attacker compromises a host, they cannot delete logs already shipped to SIEM!",
      ["Forwarding system logs to a centralized server ensures logs cannot be easily altered or wiped if a local host is compromised", "Compressing photos to save cloud storage space", "Automatically restarting failed web services", "Upgrading Linux distributions across Wi-Fi"],
      0,
      "Centralized log forwarding (e.g. via syslog to a SIEM) preserves an immutable audit trail off-host, preventing an attacker who roots an endpoint from tampering with forensic evidence.",
      "PCES-30-01 Block 2.2 - Logging & Syslog",
      ["syslog", "centralized-logging", "auditability"])

add_c(28, "2.2", "Boot Security", "Intermediate",
      "What is 'Secure Boot'?",
      "# Secure Boot workflow: UEFI firmware validates cryptographic signatures of bootloader and OS kernel against trusted keys embedded in firmware before booting",
      ["A mechanism where UEFI firmware checks cryptographic digital signatures of boot loaders and OS kernels before allowing them to execute, preventing bootkits", "A password typed when turning on a computer monitor", "A feature that only allows computers to boot when plugged into wall power", "A physical metal lock that clamps around the laptop power button"],
      0,
      "Secure Boot uses cryptographic signatures in UEFI firmware to verify the authenticity of the bootloader, kernel, and boot drivers, blocking persistent rootkits and bootkits.",
      "PCES-30-01 Block 2.2 - Secure Boot",
      ["secure-boot", "uefi", "bootkit-defense"])

add_c(29, "2.2", "Account Hardening", "Beginner",
      "Why should the default 'root' (or 'Administrator') account be disabled or blocked from direct remote SSH logins?",
      "# /etc/ssh/sshd_config hardening\n# PermitRootLogin no\n# Forces administrators to log in as named user and sudo, providing individual accountability",
      ["Attackers constantly target known default usernames like 'root'; disabling direct root login enforces named user login and individual auditability", "Root accounts cannot process network packets over port 22", "Linux servers crash if root logs in remotely", "Root accounts cannot execute Python scripts"],
      0,
      "Blocking direct remote root access prevents automated brute-force attacks against the known root username and ensures all administrative actions are tied to individual named user accounts via sudo.",
      "PCES-30-01 Block 2.2 - Account Hardening",
      ["ssh-hardening", "root-account", "accountability"])

add_c(30, "2.2", "Application Whitelisting", "Intermediate",
      "What is Application Whitelisting (Application Control)?",
      "# Whitelisting policy: Default DENY\n# Only binaries with matching cryptographic hash or vendor signature in approved list can execute",
      ["A security practice that only allows explicitly approved and authorized programs and scripts to execute, blocking all others by default", "A list of email addresses allowed to send marketing newsletters", "A whitelist of IP addresses allowed to access public YouTube videos", "An automated tool that colors Python code editor syntax white"],
      0,
      "Application whitelisting (application control) uses default-deny: only executables, DLLs, and scripts that match approved cryptographic hashes or trusted vendor certificates are permitted to run.",
      "PCES-30-01 Block 2.2 - Application Control",
      ["whitelisting", "application-control", "malware-prevention"])

add_c(31, "2.2", "Patch Management", "Beginner",
      "What does 'Automated Vulnerability Patching' accomplish in system administration?",
      "# Automated security patching script / unattended-upgrades\n# Automatically fetches and applies critical security patches for CVEs",
      ["Automatically applies vendor security updates to operating systems and dependencies to remediate vulnerabilities quickly", "Automatically rewrites legacy Python code to Rust", "Automatically deletes user files that are older than 1 year", "Automatically orders new hard drives when storage reaches 90%"],
      0,
      "Automated patching reduces exposure windows by promptly deploying critical security fixes before threat actors can exploit newly disclosed vulnerabilities.",
      "PCES-30-01 Block 2.2 - Patch Management",
      ["patching", "automation", "vulnerability-management"])

add_c(32, "2.2", "Linux Security & Umask", "Intermediate",
      "What is the function of the 'umask' in Linux?",
      "# umask calculation\n# Default base for files: 666\n# umask: 027\n# Resulting permissions: 666 - 027 = 640 (Owner rw, Group r, Others none)",
      ["A mask that determines the default permissions stripped from newly created files and directories", "A facial recognition mask used for biometric login", "A tool that hides IP addresses during ping requests", "A firewall that filters UDP broadcast packets"],
      0,
      "The umask (user file-creation mask) specifies which permission bits are automatically masked (removed) when a process creates new files or directories.",
      "PCES-30-01 Block 2.2 - Umask & Permissions",
      ["umask", "linux-security", "permissions"])

add_c(33, "2.2", "Endpoint Security", "Beginner",
      "What is 'Full Disk Encryption' (FDE) such as BitLocker or LUKS designed to protect against?",
      "# LUKS encryption on Linux partition /dev/nvme0n1p3\n# If laptop is physically stolen, data cannot be read without the decryption passphrase/TPM key",
      ["Data extraction and theft if a physical laptop or storage drive is lost or stolen", "Phishing emails received over the Internet", "DDoS attacks overwhelming the network card", "SQL injection vulnerabilities in web applications"],
      0,
      "Full Disk Encryption (FDE) protects data at rest by encrypting the entire volume, ensuring that if a device is physically stolen, unauthorized actors cannot access files without the key.",
      "PCES-30-01 Block 2.2 - Full Disk Encryption",
      ["fde", "bitlocker", "luks", "data-at-rest"])

add_c(34, "2.2", "Service Hardening", "Beginner",
      "Why should legacy protocols like Telnet, FTP, and HTTP be replaced with SSH, SFTP, and HTTPS?",
      "# Legacy vs Secure protocol comparison:\n# Telnet (port 23) -> SSH (port 22) [Encrypted]\n# FTP (port 21)    -> SFTP (port 22) [Encrypted]\n# HTTP (port 80)   -> HTTPS (port 443) [Encrypted]",
      ["Because legacy protocols transmit credentials and data in cleartext plaintext across the network, exposing them to packet sniffing", "Because SSH and HTTPS use 10 times less CPU than Telnet", "Because Telnet only works on monochrome computer screens", "Because FTP cannot transmit files larger than 1 megabyte"],
      0,
      "Legacy protocols lack encryption, transmitting passwords and data in unencrypted plaintext across networks where any eavesdropper or intermediary can intercept them.",
      "PCES-30-01 Block 2.2 - Protocol Hardening",
      ["legacy-protocols", "cleartext", "ssh", "https"])

add_c(35, "2.2", "Linux Security & Mandatory Access", "Intermediate",
      "What are SELinux and AppArmor in Linux operating systems?",
      "# SELinux enforcing mode check\n# getenforce -> 'Enforcing'\n# Enforces Mandatory Access Control (MAC) policies restricting even root processes",
      ["Mandatory Access Control (MAC) security modules that restrict programs to only the files, sockets, and capabilities they need", "Text editors used for writing bash scripts", "Network hardware drivers for Realtek Ethernet cards", "Python web frameworks for building e-commerce sites"],
      0,
      "SELinux and AppArmor provide Mandatory Access Control (MAC) in Linux, confining processes to strict security profiles so that even compromised root daemons cannot access unauthorized resources.",
      "PCES-30-01 Block 2.2 - MAC & SELinux",
      ["selinux", "apparmor", "mac", "hardening"])

add_c(36, "2.2", "Screen Lock & Inactivity", "Beginner",
      "What physical security threat is mitigated by enforcing an automated 5-minute screen lock policy on workstations?",
      "# Screen lock policy: Screen locks and requires password after 300 seconds of inactivity\n# Mitigates unauthorized access by passerby when employee walks away from desk",
      ["Unauthorized physical access or tampering by unauthorized persons while the employee is away from their unattended desk", "Overheating of the computer monitor backlight", "Power outages in the local city electric grid", "Automated port scanning over the internet"],
      0,
      "Automated screen lock prevents unauthorized individuals (e.g. visitors, cleaners, malicious coworkers) from accessing unattended unlocked computers.",
      "PCES-30-01 Block 2.2 - Physical Hardening",
      ["screen-lock", "unattended-workstation", "physical-security"])

add_c(37, "2.2", "Integrity Monitoring", "Intermediate",
      "What does a File Integrity Monitoring (FIM) tool (such as Tripwire or AIDE) do?",
      "# AIDE / FIM monitoring logic:\n# Baseline: /bin/ls -> sha256: 4a8f...\n# Nightly scan: Computes current sha256 and alerts if hash changed unexpectedly (trojanized!)",
      ["Monitors system files, libraries, and binaries against a baseline of cryptographic hashes, alerting administrators if unauthorized modifications occur", "Defragments file system clusters to improve disk read speed", "Automatically deletes duplicate PDF downloads", "Backs up photos to external USB drives"],
      0,
      "File Integrity Monitoring (FIM) computes cryptographic hashes of critical system files and compares them against a known-good baseline, detecting unauthorized modifications or rootkits.",
      "PCES-30-01 Block 2.2 - File Integrity Monitoring",
      ["fim", "aide", "tripwire", "integrity"])

add_c(38, "2.2", "System Hardening", "Beginner",
      "What is 'Bloatware' and why does removing it improve endpoint security?",
      "# Pre-installed unnecessary OEM software: trial games, promotional toolbars\n# Each unneeded application increases the attack surface and potential CVE exposure",
      ["Unnecessary pre-installed software; removing it reduces the attack surface and eliminates unneeded background services and vulnerabilities", "A specialized virus that inflates hard drive partition tables", "Excessive thermal paste applied on top of the CPU chip", "Large font sizes used in terminal windows"],
      0,
      "Bloatware refers to unneeded pre-installed applications and utilities. Removing bloatware minimizes the attack surface and removes vulnerable third-party update services.",
      "PCES-30-01 Block 2.2 - Bloatware & Hardening",
      ["bloatware", "attack-surface", "clean-os"])

add_c(39, "2.2", "Configuration Management", "Intermediate",
      "How do Infrastructure as Code (IaC) and configuration management tools (like Ansible, Terraform, Puppet) improve system hardening?",
      "# Ansible hardening playbook snippet:\n# - name: Enforce SSH hardening\n#   lineinfile:\n#     path: /etc/ssh/sshd_config\n#     regexp: '^PermitRootLogin'\n#     line: 'PermitRootLogin no'",
      ["They allow automated, reproducible, and verifiable baseline hardening across thousands of servers without human configuration drift", "They translate Python code into assembly language", "They eliminate the need for server operating systems", "They provide free hardware upgrades from cloud providers"],
      0,
      "Configuration management ensures that hardening baselines are applied consistently, reproducibly, and auditably across all infrastructure, preventing human error and configuration drift.",
      "PCES-30-01 Block 2.2 - Configuration Management",
      ["iac", "ansible", "hardening-automation"])

add_c(40, "2.2", "Hardware Security", "Intermediate",
      "What is a TPM (Trusted Platform Module)?",
      "# TPM 2.0 cryptographic chip on motherboard\n# Hardware-based secure storage for cryptographic keys, platform measurements, and BitLocker keys",
      ["A dedicated hardware crypto-processor chip on the motherboard that securely stores cryptographic keys and ensures platform integrity", "A software program that speeds up internet downloads", "A high-capacity external backup hard drive", "A temperature monitoring sensor for computer chassis fans"],
      0,
      "A Trusted Platform Module (TPM) is a hardware security chip that provides hardware-based key generation, secure cryptographic storage (e.g. for BitLocker keys), and tamper detection.",
      "PCES-30-01 Block 2.2 - Hardware Security & TPM",
      ["tpm", "hardware-security", "cryptography"])

# --- CHAPTER 2.3: Network Security Fundamentals & Protocols (Cards 41-60) ---
add_c(41, "2.3", "Network Models", "Beginner",
      "At which layer of the OSI model do IP addressing and packet routing occur?",
      "# OSI Layers:\n# Layer 7: Application | Layer 4: Transport (TCP/UDP)\n# Layer 3: Network (IP, ICMP, Routing) | Layer 2: Data Link (MAC, ARP)",
      ["Layer 1 (Physical)", "Layer 2 (Data Link)", "Layer 3 (Network)", "Layer 4 (Transport)"],
      2,
      "Layer 3 (Network Layer) handles logical addressing (IPv4, IPv6), packet forwarding, and path routing between disparate networks.",
      "PCES-30-01 Block 2.3 - OSI Model",
      ["osi-model", "layer-3", "network-layer"])

add_c(42, "2.3", "TCP vs UDP", "Beginner",
      "What is the key functional difference between TCP and UDP at the Transport layer?",
      "# Transport protocols\n# TCP: Connection-oriented, 3-way handshake, guaranteed delivery, retransmission\n# UDP: Connectionless, lightweight, fire-and-forget, no delivery guarantee (DNS, VoIP)",
      ["TCP is connection-oriented and guarantees reliable packet delivery; UDP is connectionless and prioritizes low latency without delivery guarantees", "TCP is wireless; UDP is wired Ethernet", "TCP cannot transmit data over the Internet; UDP is the only web protocol", "TCP is unencrypted; UDP is always encrypted with AES"],
      0,
      "TCP establishes a stateful connection via a 3-way handshake and guarantees in-order delivery. UDP is lightweight and connectionless, suitable for streaming and DNS queries where speed matters.",
      "PCES-30-01 Block 2.3 - TCP vs UDP",
      ["tcp", "udp", "transport-layer"])

add_c(43, "2.3", "TCP Handshake", "Intermediate",
      "What sequence of flags is exchanged during the standard TCP 3-Way Handshake?",
      "# Client -> Server: SYN\n# Server -> Client: SYN-ACK\n# Client -> Server: ACK\n# (Connection established!)",
      ["SYN -> SYN-ACK -> ACK", "ACK -> SYN -> FIN", "RST -> SYN -> PSH", "HELLO -> VERIFY -> READY"],
      0,
      "The TCP 3-way handshake establishes a reliable connection using the sequence: SYN (Synchronize), SYN-ACK (Synchronize-Acknowledge), and ACK (Acknowledge).",
      "PCES-30-01 Block 2.3 - TCP Handshake",
      ["tcp-handshake", "syn", "ack"])

add_c(44, "2.3", "Standard Ports", "Beginner",
      "Which standard well-known port is assigned to secure SSH (Secure Shell) remote administration?",
      "# Connecting via SSH: ssh user@server.example -p 22",
      ["Port 21", "Port 22", "Port 23", "Port 25"],
      1,
      "Port 22 is the standard TCP port for SSH. Port 21 is FTP, Port 23 is Telnet, and Port 25 is SMTP.",
      "PCES-30-01 Block 2.3 - Well-Known Ports",
      ["ssh", "port-22", "ports"])

add_c(45, "2.3", "Standard Ports", "Beginner",
      "Which well-known port and protocol are primarily used for Domain Name System (DNS) queries?",
      "# Standard DNS query: Resolves hostname to IP\n# Protocol: UDP (and TCP for zone transfers/large responses) on Port 53",
      ["Port 53 (UDP/TCP)", "Port 80 (TCP)", "Port 443 (TCP)", "Port 3389 (TCP)"],
      0,
      "Port 53 is the standard port for DNS operations, primarily utilizing UDP for standard name resolution queries and TCP for zone transfers or large responses.",
      "PCES-30-01 Block 2.3 - DNS Port",
      ["dns", "port-53", "protocols"])

add_c(46, "2.3", "Standard Ports", "Beginner",
      "Which port is standard for HTTPS (Hypertext Transfer Protocol Secure)?",
      "# HTTPS server listening on default encrypted TLS port\n# https://example.com:443",
      ["Port 80", "Port 443", "Port 8080", "Port 8443"],
      1,
      "Port 443 is the standard port for HTTPS encrypted with TLS. Port 80 is unencrypted plaintext HTTP.",
      "PCES-30-01 Block 2.3 - Well-Known Ports",
      ["https", "port-443", "tls"])

add_c(47, "2.3", "ARP Spoofing", "Intermediate",
      "How does ARP Spoofing (ARP Poisoning) operate on a local Area Network (LAN)?",
      "# ARP Poisoning packet craft:\n# Attacker sends gratuitous ARP replies mapping Default Gateway IP to Attacker MAC address\n# Target victim caches fake mapping and sends all outbound packets to attacker!",
      ["An attacker sends forged ARP messages to associate their MAC address with the IP address of a legitimate default gateway or server", "An attacker alters DNS records on a root name server", "An attacker physically cuts Ethernet cables in a wall jack", "An attacker floods the CPU with mathematical division by zero"],
      0,
      "ARP spoofing exploits the lack of authentication in ARP by broadcasting forged ARP replies, tricking hosts into routing their traffic through the attacker's machine.",
      "PCES-30-01 Block 2.3 - ARP Spoofing",
      ["arp-spoofing", "layer-2", "mitm"])

add_c(48, "2.3", "DNS Security", "Intermediate",
      "What security extension was designed to protect DNS against spoofing and cache poisoning by cryptographically signing DNS records?",
      "# DNSSEC validation: Verifies cryptographic signatures (RRSIG) using DNSKEY public keys\n# Proves that DNS response originated from legitimate zone and was not tampered with",
      ["DNSSEC (DNS Security Extensions)", "DNSSPEED", "HTTP/3", "DHCPv6"],
      0,
      "DNSSEC (Domain Name System Security Extensions) provides origin authentication and integrity verification for DNS responses using public key cryptography and digital signatures.",
      "PCES-30-01 Block 2.3 - DNSSEC",
      ["dnssec", "dns-security", "cryptography"])

add_c(49, "2.3", "Network Address Translation", "Beginner",
      "What is Network Address Translation (NAT) and what incidental security benefit does it provide?",
      "# NAT router: Translates internal private IPs (192.168.1.50) to single public IP (203.0.113.1)\n# Inbound connections from Internet cannot directly address private internal hosts",
      ["NAT maps multiple private internal IP addresses to a single public IP, hiding internal IP topology from direct unsolicited inbound internet probes", "NAT encrypts all web traffic with AES-256", "NAT prevents malware from executing in RAM", "NAT speeds up Wi-Fi signal frequencies"],
      0,
      "NAT translates private RFC 1918 IP addresses to a public routable IP. By default, external internet hosts cannot initiate unsolicited inbound connections directly to private IP hosts behind NAT.",
      "PCES-30-01 Block 2.3 - NAT",
      ["nat", "ip-addressing", "perimeter"])

add_c(50, "2.3", "Firewall Types", "Intermediate",
      "What distinguishes a Stateful Packet Inspection (SPI) firewall from a Stateless Packet Filtering firewall?",
      "# Stateful tracking: Firewall maintains connection state table (SYN_SENT, ESTABLISHED)\n# Automatically permits inbound packets if they belong to an existing outbound connection initiated by client!",
      ["Stateful firewalls track active connection states (e.g. TCP handshakes) and allow return traffic automatically; Stateless filters evaluate each packet in isolation against static rules", "Stateful firewalls run on battery power; Stateless run on wall electricity", "Stateful firewalls only block email; Stateless only block video games", "There is no technical difference"],
      0,
      "A stateful firewall tracks the context and state of active network conversations. When an internal client initiates an outbound connection, return packets are automatically allowed without needing static inbound rules.",
      "PCES-30-01 Block 2.3 - Firewall Architecture",
      ["stateful-firewall", "packet-filtering", "network-security"])

# --- CHAPTER 2.3 (cont): Cards 51-60 ---
add_c(51, "2.3", "Virtual Private Networks", "Beginner",
      "What is the primary function of a Virtual Private Network (VPN)?",
      "# VPN tunnel creation\n# Encapsulates and encrypts traffic across an untrusted network (Internet)\n# Providing a secure virtual extension of a private enterprise network",
      ["To create an encrypted tunnel over an untrusted public network, protecting data confidentiality and integrity in transit", "To double the physical download speed of home internet connections", "To automatically remove viruses from a laptop hard drive", "To allow users to bypass copyright laws legally"],
      0,
      "A VPN creates an encrypted tunnel across untrusted networks (such as the Internet or public Wi-Fi), providing confidentiality, integrity, and secure access to private resources.",
      "PCES-30-01 Block 2.3 - VPNs",
      ["vpn", "encryption", "tunnels"])

add_c(52, "2.3", "TLS/SSL Handshake", "Intermediate",
      "During a TLS handshake, how does the client verify the identity of the web server?",
      "# TLS Certificate verification: Client verifies server's X.509 certificate signature\n# against trusted Certificate Authority (CA) root certificates stored in OS/browser trust store",
      ["By validating the digital signature on the server's X.509 certificate against trusted root Certificate Authorities (CAs)", "By sending a ping request to port 80", "By matching the server's IP address with the user's home ZIP code", "By checking if the server URL contains numbers"],
      0,
      "The client verifies the server's X.509 digital certificate against pre-installed trusted root Certificate Authorities (CAs) in the client's trust store, confirming authenticity.",
      "PCES-30-01 Block 2.3 - TLS Certificates",
      ["tls", "certificates", "x509", "pki"])

add_c(53, "2.3", "VLAN Segmentation", "Beginner",
      "What is the security purpose of configuring Virtual Local Area Networks (VLANs) on network switches?",
      "# Switch configuration: Segmenting networks into isolated broadcast domains\n# VLAN 10: Guest Wi-Fi | VLAN 20: Corporate Staff | VLAN 30: Production Databases",
      ["To logically segment a physical network into isolated broadcast domains, containing traffic and preventing unauthorized lateral snooping", "To increase the physical cable length of Ethernet lines", "To turn on Wi-Fi on desktop computers that lack antennas", "To automatically recharge server batteries"],
      0,
      "VLANs divide a single physical network switch into isolated logical networks, keeping sensitive traffic (e.g. database communication) segregated from untrusted guest or user traffic.",
      "PCES-30-01 Block 2.3 - VLANs",
      ["vlan", "segmentation", "switch-security"])

add_c(54, "2.3", "WAF", "Intermediate",
      "What is the difference between a Network Firewall and a Web Application Firewall (WAF)?",
      "# WAF inspection at Layer 7: Inspects HTTP body and headers for SQLi, XSS, CSRF\n# Network Firewall at Layers 3/4: Inspects IP addresses, TCP/UDP ports",
      ["A network firewall filters by IP and port (Layers 3/4); a WAF inspects Layer 7 application traffic for web attacks like SQL injection and XSS", "A network firewall protects web servers; a WAF protects physical printers", "A WAF only works on Linux; a network firewall only works on Windows", "They are identical tools with different marketing names"],
      0,
      "Traditional network firewalls filter packets based on IP, protocol, and port (Layers 3 and 4). A Web Application Firewall (WAF) operates at Layer 7, inspecting HTTP/HTTPS payloads for web application vulnerabilities.",
      "PCES-30-01 Block 2.3 - WAF",
      ["waf", "layer-7", "web-security"])

add_c(55, "2.3", "SYN Flood", "Intermediate",
      "How does a SYN Flood attack exploit the TCP 3-way handshake mechanism?",
      "# SYN Flood attack mechanism:\n# Attacker sends flood of SYN packets with spoofed source IPs\n# Server allocates resources in half-open SYN_RCVD state and waits for ACK\n# Server connection queue (backlog) exhausts, rejecting legitimate users!",
      ["The attacker sends massive numbers of SYN packets with spoofed IPs, filling the server's half-open connection table and exhausting its memory", "The attacker sends FIN packets that immediately reset all user passwords", "The attacker steals the server's private RSA encryption keys over TCP", "The attacker physically burns out the Ethernet network card"],
      0,
      "A SYN flood sends a flood of SYN requests without completing the handshake with an ACK, forcing the server to keep connections half-open until its connection backlog is exhausted.",
      "PCES-30-01 Block 2.3 - SYN Flood",
      ["syn-flood", "tcp", "dos"])

add_c(56, "2.3", "SYN Flood Defense", "Intermediate",
      "What defense mechanism allows a server to resist SYN Flood attacks without pre-allocating connection state memory?",
      "# SYN Cookies mechanism:\n# Server encodes connection state into the Initial Sequence Number (ISN) of the SYN-ACK\n# No memory allocated until client returns valid ACK containing calculated cookie!",
      ["SYN Cookies", "Disabling TCP completely and using only UDP", "Increasing the font size of web pages", "Resetting the server every 60 seconds"],
      0,
      "SYN Cookies encode TCP connection parameters into the Initial Sequence Number (ISN) sent in the SYN-ACK packet, eliminating the need to allocate kernel memory until the final ACK arrives.",
      "PCES-30-01 Block 2.3 - SYN Cookies",
      ["syn-cookies", "dos-mitigation", "tcp-defense"])

add_c(57, "2.3", "IPsec", "Intermediate",
      "In IPsec VPN architecture, what is the difference between Transport Mode and Tunnel Mode?",
      "# IPsec Modes:\n# Transport Mode: Encrypts only payload; original IP header preserved (host-to-host)\n# Tunnel Mode: Encrypts entire original packet (payload + original header) and adds new IP header (site-to-site / gateway-to-gateway)",
      ["Transport mode encrypts only the payload; Tunnel mode encrypts the entire original IP packet and adds a new IP header", "Transport mode is for airplanes; Tunnel mode is for subways", "Transport mode uses UDP; Tunnel mode uses ICMP", "Transport mode is unencrypted; Tunnel mode is encrypted"],
      0,
      "Transport mode encrypts only the IP data payload, leaving original headers visible (typical for host-to-host). Tunnel mode encapsulates and encrypts the entire original packet inside a new IP header (typical for site-to-site VPNs).",
      "PCES-30-01 Block 2.3 - IPsec",
      ["ipsec", "tunnel-mode", "vpn"])

add_c(58, "2.3", "Dynamic ARP Inspection", "Intermediate",
      "What network switch security feature mitigates ARP Poisoning attacks on a LAN?",
      "# Dynamic ARP Inspection (DAI) on managed switches\n# Validates ARP packets against DHCP snooping database and drops invalid IP-to-MAC bindings",
      ["Dynamic ARP Inspection (DAI)", "Spanning Tree Protocol (STP)", "Quality of Service (QoS)", "Jumbo Frames"],
      0,
      "Dynamic ARP Inspection (DAI) is a switch security feature that inspects ARP packets on untrusted ports, verifying IP-to-MAC bindings against a trusted DHCP snooping database.",
      "PCES-30-01 Block 2.3 - DAI & Switch Security",
      ["dai", "arp-inspection", "switch-security"])

add_c(59, "2.3", "ICMP & Security", "Beginner",
      "Why do enterprise firewalls often restrict or disable inbound ICMP Echo Request (Ping) traffic from the public Internet?",
      "# Firewall rule dropping public ping requests\n# iptables -A INPUT -p icmp --icmp-type echo-request -j DROP\n# Prevents automated network sweeps from discovering active live hosts",
      ["To prevent automated network scanning tools from easily discovering live hosts and map the internal IP topology", "Because ping packets permanently delete routing tables", "Because ICMP packets consume 100% of CPU memory per packet", "Because ICMP traffic is forbidden by international law"],
      0,
      "Blocking inbound ICMP echo requests prevents automated reconnaissance scanners from discovering live active hosts on public IP ranges.",
      "PCES-30-01 Block 2.3 - ICMP & Scanning",
      ["icmp", "ping", "reconnaissance-defense"])

add_c(60, "2.3", "Standard Ports", "Beginner",
      "Which well-known port is standard for RDP (Remote Desktop Protocol)?",
      "# Connecting to Windows remote desktop\n# mstsc.exe /v:server.example:3389",
      ["Port 22", "Port 80", "Port 3389", "Port 8080"],
      2,
      "Port 3389 is the standard TCP/UDP port for Microsoft Remote Desktop Protocol (RDP).",
      "PCES-30-01 Block 2.3 - Well-Known Ports",
      ["rdp", "port-3389", "remote-access"])

# --- CHAPTER 2.4: Authentication, Authorization & Access Control (Cards 61-80) ---
add_c(61, "2.4", "Access Control Models", "Beginner",
      "What is Role-Based Access Control (RBAC)?",
      "# RBAC implementation model\ndef check_rbac(user_roles: list, required_permission: str, role_permissions: dict) -> bool:\n    for role in user_roles:\n        if required_permission in role_permissions.get(role, []):\n            return True\n    return False",
      ["An access control model where permissions are assigned to specific roles, and users are assigned to roles based on their job responsibilities", "An access control system where users roll dice to determine their password", "A model where only managers have access to computers", "A system where permissions change randomly every 24 hours"],
      0,
      "Role-Based Access Control (RBAC) grants permissions based on defined job roles (e.g. 'Auditor', 'Developer', 'HR') rather than assigning permissions directly to individual users.",
      "PCES-30-01 Block 2.4 - RBAC",
      ["rbac", "access-control", "roles"])

add_c(62, "2.4", "Access Control Models", "Intermediate",
      "What is Attribute-Based Access Control (ABAC)?",
      "# ABAC evaluation: Subject attributes + Resource attributes + Environmental context\ndef check_abac(user, resource, context):\n    return (\n        user['department'] == resource['department'] and\n        user['clearance'] >= resource['classification'] and\n        context['time_of_day'] in range(8, 18) and\n        context['device_location'] == 'Office_LAN'\n    )",
      ["An access control model that evaluates attributes of the subject, resource, action, and environment dynamically to determine access", "Access control based solely on a user's date of birth", "A system where users must attribute their code in comments", "A method of securing passwords with SHA-1"],
      0,
      "ABAC evaluates multiple contextual attributes (subject, resource, action, and environmental factors like time, IP, location) using boolean logic to make fine-grained access decisions.",
      "PCES-30-01 Block 2.4 - ABAC",
      ["abac", "dynamic-access", "attributes"])

add_c(63, "2.4", "Access Control Models", "Intermediate",
      "What characterizes Mandatory Access Control (MAC) as used in military and high-security systems?",
      "# MAC Model: Fixed classification labels (Top Secret, Secret, Confidential)\n# Access is strictly enforced by operating system kernel based on clearance levels\n# Data owners CANNOT change or transfer permissions themselves!",
      ["The operating system enforces access based on fixed security labels (e.g. Top Secret) and user clearance levels; data owners cannot change permissions", "The system administrator must manually click 'Allow' for every mouse click", "Users are mandated to change passwords every 3 hours", "Access is decided by an external voting committee"],
      0,
      "In Mandatory Access Control (MAC), access is strictly determined by central system security policy and classification labels. Users and resource owners cannot override or grant access to others.",
      "PCES-30-01 Block 2.4 - MAC",
      ["mac", "mandatory-access", "security-labels"])

add_c(64, "2.4", "Access Control Models", "Beginner",
      "What characterizes Discretionary Access Control (DAC) such as standard Unix file permissions?",
      "# DAC: File owner has full discretion to set permissions\n# Alice can run 'chmod 777 alice_doc.txt' to grant everyone access at her own discretion",
      ["The resource owner has the discretion to grant or deny access permissions to other users", "Access is determined exclusively by government agencies", "Permissions cannot be modified once a file is saved", "All files are public by default with zero access controls"],
      0,
      "In Discretionary Access Control (DAC), the creator or owner of an object has full discretion to define which users or groups can access or modify that object.",
      "PCES-30-01 Block 2.4 - DAC",
      ["dac", "discretionary-access", "unix-permissions"])

add_c(65, "2.4", "AAA Framework", "Beginner",
      "What do the three 'A's in the network security AAA framework stand for?",
      "# AAA Framework in RADIUS / TACACS+:\n# Authentication: Verify who the user is\n# Authorization: Determine what the user can do\n# Accounting: Log and track what the user did and for how long",
      ["Authentication, Authorization, and Accounting", "Access, Action, and Auditing", "Algorithm, Asymmetry, and Availability", "Address, Allocation, and Assertion"],
      0,
      "AAA stands for Authentication (verifying identity), Authorization (enforcing permissions), and Accounting (tracking resource consumption and recording activity logs).",
      "PCES-30-01 Block 2.4 - AAA Framework",
      ["aaa", "authentication", "authorization", "accounting"])

add_c(66, "2.4", "MFA Mechanics", "Intermediate",
      "How does a Time-Based One-Time Password (TOTP) algorithm (like Google Authenticator) work?",
      "# TOTP calculation: TOTP = HMAC(Shared_Secret, Floor(Current_Time / 30))\n# Both client and server calculate identical 6-digit code based on shared key and current 30-sec time slice",
      ["It generates a temporary numeric code using a cryptographic HMAC of a shared secret key and the current Unix time interval (typically 30 seconds)", "It sends an unencrypted SMS message through the local cell tower", "It generates random numbers based on ambient room temperature", "It requires scanning an iris photo every 10 seconds"],
      0,
      "TOTP (RFC 6238) computes a one-time code using HMAC between a pre-shared secret key and the current counter derived from Unix epoch time divided by a step interval (usually 30s).",
      "PCES-30-01 Block 2.4 - TOTP & MFA",
      ["totp", "mfa", "hmac"])

add_c(67, "2.4", "MFA Security", "Beginner",
      "Why is SMS-based verification considered less secure than hardware security keys (FIDO2/WebAuthn)?",
      "# SMS vulnerabilities: SIM swapping, SS7 network interception, lack of mutual origin binding\n# FIDO2 keys provide hardware cryptographic challenge-response immune to phishing",
      ["SMS is susceptible to SIM swapping attacks, mobile network interception (SS7 flaws), and phishing websites", "SMS messages use 10 times more smartphone battery power", "SMS text messages can only contain lowercase letters", "SMS is banned by telecommunication laws in Europe"],
      0,
      "SMS OTPs are vulnerable to SIM swapping, cellular interception, and adversary-in-the-middle phishing. FIDO2/WebAuthn keys use cryptographic origin binding that completely defeats phishing.",
      "PCES-30-01 Block 2.4 - MFA Security",
      ["mfa", "sms-risks", "fido2", "sim-swapping"])

add_c(68, "2.4", "Password Security", "Beginner",
      "According to modern NIST SP 800-63B password guidelines, which practice is recommended?",
      "# NIST SP 800-63B Recommendations:\n# - Prioritize password length (passphrases >= 16 chars) over arbitrary special character complexity\n# - Screen passwords against known breached password dictionaries\n# - Eliminate arbitrary 30-day periodic password expirations",
      ["Encouraging long passphrases and screening passwords against lists of breached credentials rather than forcing arbitrary periodic resets", "Forcing users to change passwords every 30 days without fail", "Requiring at least 4 symbols and 2 non-ASCII emojis", "Storing passwords in base64 format in configuration files"],
      0,
      "NIST SP 800-63B advises prioritizing length (passphrases >= 16 characters), screening against compromised dictionaries, and discontinuing mandatory periodic changes that cause users to choose predictable patterns.",
      "PCES-30-01 Block 2.4 - Password Guidelines",
      ["nist-800-63b", "passwords", "hygiene"])

add_c(69, "2.4", "Password Hashing", "Intermediate",
      "Why is SHA-256 by itself INSUFFICIENT for securely storing user passwords?",
      "# Fast hash functions like SHA-256 can be computed BILLIONS of times per second on GPUs:\n# Attackers crack fast hashes using offline GPU brute force in minutes!\n# Password storage requires SLOW, memory-hard key derivation functions (bcrypt, Argon2)",
      ["SHA-256 is designed to be extremely fast, enabling modern GPU rigs to compute billions of guesses per second during offline dictionary cracking", "SHA-256 passwords can be reversed with a single click", "SHA-256 only works on numbers, not letters", "SHA-256 causes database index corruption"],
      0,
      "General-purpose hash functions (like SHA-256 or MD5) are engineered for high throughput. Password hashing requires adaptive, slow, memory-hard algorithms (bcrypt, Argon2, PBKDF2) to resist GPU cracking.",
      "PCES-30-01 Block 2.4 - Password Storage",
      ["password-hashing", "bcrypt", "argon2", "gpu-cracking"])

add_c(70, "2.4", "Password Salting", "Beginner",
      "What is the security purpose of adding a unique 'Salt' to each password before hashing?",
      "# Salting passwords\n# hash = bcrypt.hashpw(password, bcrypt.gensalt())\n# Ensures two users with identical password 'Secret123' have completely different hashes\n# Defeats precomputed rainbow tables!",
      ["To ensure identical passwords generate distinct hash outputs, neutralizing precomputed rainbow table attacks", "To make passwords taste better to database engines", "To encrypt the password using AES-GCM", "To compress the password string to under 4 bytes"],
      0,
      "A cryptographic salt is random data added to a password before hashing. It guarantees that identical passwords produce completely different hashes, thwarting rainbow tables and multi-target attacks.",
      "PCES-30-01 Block 2.4 - Password Salting",
      ["salting", "rainbow-tables", "passwords"])

add_c(71, "2.4", "Tokens & Sessions", "Intermediate",
      "What is a JSON Web Token (JWT) and what are its three components?",
      "# JWT structure: Header.Payload.Signature\n# eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      ["A compact, URL-safe token consisting of Header, Payload, and Signature, used to securely transmit identity claims between parties", "A hardware token plugged into a USB port", "A Python library for parsing XML files", "A database record stored exclusively in SQLite"],
      0,
      "A JSON Web Token (JWT) is composed of three Base64URL-encoded parts separated by periods: Header (algorithm), Payload (claims/data), and Signature (cryptographic tamper-proofing).",
      "PCES-30-01 Block 2.4 - JWT",
      ["jwt", "tokens", "authentication"])

add_c(72, "2.4", "Tokens & Security", "Intermediate",
      "What critical vulnerability occurs if a backend JWT validation service fails to verify the token signature or accepts the 'none' algorithm?",
      "# Vulnerable JWT validation accepting 'alg': 'none'\n# Attacker modifies payload: {'user': 'admin'} and strips signature\n# Server trusts altered claims without cryptographic proof!",
      ["An attacker can tamper with claims (e.g. change user ID or role to 'admin') and the server will trust the forged token without verification", "The server automatically reboots into recovery mode", "The database drops all customer records", "The web browser displays a CSS styling error"],
      0,
      "If the signature is ignored or the 'none' algorithm is permitted, an attacker can modify token payload claims (privilege escalation to admin) without possessing the server's secret signing key.",
      "PCES-30-01 Block 2.4 - JWT Security",
      ["jwt-vulnerabilities", "signature-verification", "tokens"])

add_c(73, "2.4", "OAuth 2.0", "Intermediate",
      "What is the primary purpose of the OAuth 2.0 framework?",
      "# OAuth 2.0 Authorization Flow:\n# User allows Third-Party App to access Google Photos WITHOUT giving Third-Party App their Google password!",
      ["To enable delegated authorization, allowing a third-party application to access user resources without exposing user credentials to the application", "To encrypt hard drives on Windows laptops", "To replace SQL queries with GraphQL", "To establish high-speed IPsec VPN tunnels"],
      0,
      "OAuth 2.0 is an authorization framework that lets users grant applications limited access to their protected resources (via scoped access tokens) without sharing their passwords.",
      "PCES-30-01 Block 2.4 - OAuth 2.0",
      ["oauth2", "delegated-authorization", "access-tokens"])

add_c(74, "2.4", "SSO", "Beginner",
      "What is Single Sign-On (SSO)?",
      "# SSO workflow: Authenticate once at central IdP (e.g. Okta / Azure AD)\n# Access multiple enterprise applications (Slack, GitHub, Salesforce) without re-entering credentials",
      ["An authentication service that permits a user to log in once with a single set of credentials and access multiple related applications and services", "Writing passwords on a single whiteboard in the office", "Allowing only a single user to log into a server at any one time", "Using a single 4-digit PIN for all company bank accounts"],
      0,
      "Single Sign-On (SSO) enables a user to authenticate once with a centralized Identity Provider (IdP) and gain seamless, authorized access to multiple disparate software systems.",
      "PCES-30-01 Block 2.4 - SSO",
      ["sso", "identity-provider", "federation"])

add_c(75, "2.4", "Session Management", "Intermediate",
      "Why must the 'HttpOnly' flag be set on sensitive session cookies in web applications?",
      "# Setting secure cookie headers in Python web framework\nresponse.set_cookie('session_id', token, httponly=True, secure=True, samesite='Strict')",
      ["It prevents client-side JavaScript from accessing the cookie, mitigating session hijacking via Cross-Site Scripting (XSS)", "It ensures cookies can only be loaded on high-speed internet connections", "It forces the cookie to expire in 5 seconds", "It encrypts the cookie using the user's graphics card"],
      0,
      "The HttpOnly flag blocks client-side scripts (e.g. document.cookie in JavaScript) from reading the cookie, shielding session tokens from exfiltration during XSS attacks.",
      "PCES-30-01 Block 2.4 - Session Cookies",
      ["httponly", "cookies", "xss-mitigation"])

add_c(76, "2.4", "Session Management", "Beginner",
      "What does the 'Secure' flag on an HTTP cookie enforce?",
      "# Cookie Secure attribute check\n# Instructs browser that cookie must ONLY be transmitted over encrypted HTTPS connections",
      ["The cookie must only be transmitted over secure, encrypted HTTPS connections, never over unencrypted plaintext HTTP", "The cookie cannot be viewed by system administrators", "The cookie is stored in a password-protected zip file", "The cookie can only be edited using Python"],
      0,
      "The Secure cookie flag instructs browsers to only transmit the cookie over encrypted TLS/HTTPS connections, preventing transmission over unencrypted HTTP where it could be sniffed.",
      "PCES-30-01 Block 2.4 - Cookie Security",
      ["secure-flag", "cookies", "tls"])

add_c(77, "2.4", "Session Management", "Intermediate",
      "What is 'Session Fixation' in web security?",
      "# Session Fixation attack pattern:\n# 1. Attacker obtains valid session ID 'XYZ'\n# 2. Attacker tricks victim into logging in with session 'XYZ'\n# 3. Attacker uses session 'XYZ' to access victim's authenticated account!\n# Fix: Always regenerate session ID immediately upon successful login!",
      ["An attack where an attacker forces a victim to use a known session identifier, enabling the attacker to hijack the session once the victim logs in", "Permanently fixing broken database sessions with a software patch", "Locking user accounts after three incorrect password entries", "A technique for speeding up browser rendering times"],
      0,
      "In a session fixation attack, the attacker tricks the victim into authenticating using a predetermined session ID known to the attacker. Mitigated by regenerating session IDs upon login.",
      "PCES-30-01 Block 2.4 - Session Fixation",
      ["session-fixation", "session-management", "web-attacks"])

add_c(78, "2.4", "Access Control Matrix", "Intermediate",
      "What is an Access Control Matrix (ACM)?",
      "# Conceptual Access Control Matrix:\n# Columns: Objects (Files, Resources) | Rows: Subjects (Users, Roles)\n# Cell(Subject, Object): Set of permitted operations {Read, Write, Execute}",
      ["A table that defines the permissions of subjects (users/processes) over objects (resources/files)", "A 3D matrix screen used by cybersecurity movie hackers", "A mathematical formula used exclusively in quantum physics", "A spreadsheet tracking employee salaries"],
      0,
      "An Access Control Matrix is a fundamental security model representing the rights each subject has over each object in a two-dimensional grid of rows (subjects) and columns (objects).",
      "PCES-30-01 Block 2.4 - Access Models",
      ["access-matrix", "acm", "access-control"])

add_c(79, "2.4", "Privilege Creep", "Beginner",
      "What is 'Privilege Creep' (or Privilege Accumulation) in access management?",
      "# Privilege creep scenario:\n# Alice moves from Support -> Sales -> Engineering\n# Retains old Support and Sales permissions on top of Engineering grants!\n# Violates least privilege over time",
      ["The gradual accumulation of access rights and permissions by users as they change roles or projects over time, exceeding what is necessary for their current job", "A software bug that causes CPU clock speed to decrease slowly", "A hacker moving slowly through a corporate building", "A memory leak in a Python dictionary"],
      0,
      "Privilege creep occurs when employees change roles or projects and are granted new permissions without old, unnecessary permissions being revoked, violating least privilege over time.",
      "PCES-30-01 Block 2.4 - Access Hygiene",
      ["privilege-creep", "least-privilege", "identity-governance"])

add_c(80, "2.4", "Access Reviews", "Beginner",
      "What security control directly combats Privilege Creep?",
      "# Scheduled access review workflow\n# Managers must formally review and certify employee access rights quarterly",
      ["Periodic User Access Reviews (access recertification audits)", "Upgrading to faster network cables", "Changing all user desktop wallpapers to company logos", "Reinstalling the operating system weekly"],
      0,
      "Regular periodic User Access Reviews (recertification) require managers to review and confirm whether each user still requires their assigned permissions, revoking stale access.",
      "PCES-30-01 Block 2.4 - Access Hygiene",
      ["access-reviews", "recertification", "governance"])

# --- CHAPTER 2.5: Cloud & Remote Work Security (Cards 81-100) ---
add_c(81, "2.5", "Cloud Shared Responsibility", "Beginner",
      "In the Cloud Shared Responsibility Model for Infrastructure as a Service (IaaS), which component is the CUSTOMER's responsibility?",
      "# Cloud IaaS Responsibility:\n# Provider: Physical data center, hardware, virtualization hypervisor\n# Customer: Guest OS, patching, middleware, application code, data encryption, IAM",
      ["Physical data center security and server rack cabling", "Guest operating system patching, application code, and data configuration", "Replacing failed hard drive hardware in the cloud provider's facility", "Cooling the provider's server facility"],
      1,
      "In IaaS (like AWS EC2 or GCP Compute Engine), the customer manages the guest OS, software updates, firewall rules, identity access, and customer data, while the CSP manages the physical infrastructure.",
      "PCES-30-01 Block 2.5 - Shared Responsibility",
      ["shared-responsibility", "iaas", "cloud-security"])

add_c(82, "2.5", "Cloud Shared Responsibility", "Intermediate",
      "In a Software as a Service (SaaS) cloud model (like Google Workspace or Microsoft 365), what is the customer primarily responsible for?",
      "# SaaS Responsibility:\n# Provider manages: Physical infra, OS, runtime, application code, high availability\n# Customer manages: User access management, data classification, and data sharing policies",
      ["Managing customer data, identity and access management (IAM), and endpoint device security", "Patching the underlying Linux operating system kernels running the SaaS software", "Managing physical data center generators", "Maintaining database storage hardware"],
      0,
      "In SaaS, the provider manages the entire application, runtime, and infrastructure. The customer remains responsible for managing their users, access permissions, and their own data.",
      "PCES-30-01 Block 2.5 - Shared Responsibility",
      ["saas", "cloud-security", "iam"])

add_c(83, "2.5", "Cloud Storage Misconfiguration", "Beginner",
      "What is one of the most common and damaging cloud security misconfigurations?",
      "# Insecure Cloud Storage Bucket Policy:\n# 'Principal': '*', 'Action': 's3:GetObject', 'Effect': 'Allow'\n# Exposes proprietary files publicly to anyone on the Internet!",
      ["Leaving cloud storage buckets (e.g. AWS S3) publicly readable to the unauthenticated Internet", "Running Python scripts in a Linux container", "Using TLS 1.3 for API endpoints", "Setting up automated daily snapshots"],
      0,
      "Unrestricted public read/write permissions on cloud object storage buckets (like AWS S3 or GCP Cloud Storage) have led to numerous massive data breaches worldwide.",
      "PCES-30-01 Block 2.5 - Cloud Misconfigurations",
      ["s3-buckets", "cloud-storage", "misconfiguration"])

add_c(84, "2.5", "Cloud IAM", "Intermediate",
      "What is an IAM 'Role' versus an IAM 'User' in cloud security architecture?",
      "# Cloud IAM Role assumption\n# EC2 Instance assumes temporary IAM Role to read S3 bucket\n# No long-term hardcoded access keys stored in configuration files!",
      ["An IAM Role is an identity with specific permissions meant to be assumed temporarily by trusted users, applications, or cloud services without hardcoding static credentials", "An IAM Role is only for human executives; Users are for developers", "An IAM Role is permanently deleted after 1 hour", "There is no difference between the two"],
      0,
      "An IAM Role provides temporary security credentials for workloads or federated users to assume as needed, eliminating the risk of hardcoded, static long-term secret keys.",
      "PCES-30-01 Block 2.5 - Cloud IAM",
      ["iam-roles", "cloud-security", "least-privilege"])

add_c(85, "2.5", "SSH Hardening", "Intermediate",
      "Which configuration setting in `/etc/ssh/sshd_config` enforces public key authentication and blocks password guessing attacks?",
      "# /etc/ssh/sshd_config\nPasswordAuthentication no\nPubkeyAuthentication yes",
      ["PasswordAuthentication no", "PermitEmptyPasswords yes", "X11Forwarding yes", "Port 23"],
      0,
      "Setting `PasswordAuthentication no` disables password-based logins, requiring users to authenticate exclusively using cryptographic SSH key pairs, rendering brute-force guessing useless.",
      "PCES-30-01 Block 2.5 - SSH Hardening",
      ["ssh", "key-authentication", "sshd_config"])

add_c(86, "2.5", "Remote Access & RDP", "Intermediate",
      "Why is exposing RDP (TCP port 3389) directly to the public Internet without a VPN or gateway highly dangerous?",
      "# Public RDP risks:\n# - Automated brute-force botnets scanning 3389 24/7\n# - Critical past RCE vulnerabilities (e.g. BlueKeep CVE-2019-0708)\n# Best practice: Restrict RDP behind VPN or RDP Gateway with MFA",
      ["RDP services are targeted by relentless automated brute-force attacks and known unauthenticated remote code execution vulnerabilities (e.g. BlueKeep)", "RDP cannot display graphics over the Internet", "RDP disables Windows Defender antivirus when exposed", "RDP packets are blocked by all major telecommunications companies"],
      0,
      "Publicly exposed RDP ports are heavily targeted by ransomware operators and brute-force botnets, and have been subject to wormable vulnerabilities like BlueKeep.",
      "PCES-30-01 Block 2.5 - Remote Access Security",
      ["rdp", "remote-access", "bluekeep"])

add_c(87, "2.5", "BYOD Security", "Beginner",
      "What is 'BYOD' (Bring Your Own Device) and what is its primary security risk?",
      "# BYOD challenge: Corporate sensitive data intermingled with personal apps, games, and unmanaged devices",
      ["Employees using personal laptops/phones for work; unmanaged personal devices may lack security controls, harbor malware, and mix corporate and personal data", "Buying brand new computers for all employees every month", "A policy banning all personal smartphones from office premises", "A program where employees build their own desktop computers from parts"],
      0,
      "BYOD introduces risks because personal devices are not under full IT management, may run outdated OS versions, lack encryption, and can expose corporate data if lost or compromised.",
      "PCES-30-01 Block 2.5 - BYOD",
      ["byod", "mobile-security", "endpoint-risk"])

add_c(88, "2.5", "Mobile Device Management", "Beginner",
      "How does a Mobile Device Management (MDM) solution secure mobile devices and corporate data?",
      "# MDM capabilities:\n# - Enforce PIN/biometrics and disk encryption\n# - Containerize corporate apps away from personal apps\n# - Remotely wipe corporate data if device is lost or employee leaves",
      ["Enforces encryption, passcode policies, application whitelisting, and allows remote wipe of corporate data if the device is lost or stolen", "Boosts cellular download speeds by overriding telecom limits", "Replaces the smartphone camera with a fingerprint scanner", "Prevents employees from making telephone calls after 5 PM"],
      0,
      "MDM allows enterprise administrators to enforce device encryption, require passcodes, deploy security policies, containerize business apps, and remotely wipe data from lost devices.",
      "PCES-30-01 Block 2.5 - MDM",
      ["mdm", "remote-wipe", "mobile-security"])

add_c(89, "2.5", "Remote Work & Wi-Fi", "Beginner",
      "Why is connecting to open, unencrypted public Wi-Fi networks in coffee shops or airports risky for remote workers?",
      "# Open Wi-Fi risks: Eavesdropping on unencrypted packets, evil twin access points, rogue DHCP/DNS",
      ["Anyone in physical radio range can eavesdrop on unencrypted traffic, execute ARP spoofing, or host rogue Evil Twin access points", "Public Wi-Fi permanently damages computer laptop batteries", "Public Wi-Fi only connects to search engine websites", "Laptops cannot display web pages without an Ethernet cable"],
      0,
      "Open public Wi-Fi networks transmit data across unencrypted radio waves, enabling attackers to intercept cleartext traffic, inject malicious packets, or set up rogue Evil Twin networks.",
      "PCES-30-01 Block 2.5 - Wi-Fi Security",
      ["public-wifi", "evil-twin", "remote-work"])

add_c(90, "2.5", "Split Tunneling", "Intermediate",
      "What is 'Split Tunneling' in enterprise VPN configuration and why does it present a security trade-off?",
      "# Split Tunneling configuration:\n# Corporate traffic -> Routed through encrypted VPN tunnel\n# General Internet traffic (YouTube, browsing) -> Direct to local ISP\n# Risk: Compromised home LAN can pivot into corporate network!",
      ["Routing only corporate traffic through the VPN while general internet traffic goes directly out the local ISP; saves corporate bandwidth but bypasses corporate security inspection", "Splitting an Ethernet wire into two physical connections", "A technique for encrypting data with two different keys simultaneously", "A mechanism that doubles internet download speeds"],
      0,
      "Split tunneling conserves corporate network bandwidth by directing non-work web traffic directly out the user's home ISP, but leaves the client exposed to local network threats that can pivot into corporate assets.",
      "PCES-30-01 Block 2.5 - VPN Architecture",
      ["split-tunneling", "vpn", "traffic-inspection"])

add_c(91, "2.5", "Cloud Security Posture", "Intermediate",
      "What does a Cloud Security Posture Management (CSPM) tool do?",
      "# CSPM automated scan:\n# Discovers unencrypted S3 buckets, open security groups (0.0.0.0/0 on port 22), overly permissive IAM policies",
      ["Continuously monitors cloud environments for misconfigurations, compliance deviations, and security policy violations", "Designs 3D architectural models of cloud data centers", "Measures the physical altitude of satellites in orbit", "Calculates monthly server power bills"],
      0,
      "CSPM tools automatically scan cloud infrastructure against security baselines (e.g. CIS benchmarks) to detect misconfigurations, public buckets, and compliance gaps across cloud tenants.",
      "PCES-30-01 Block 2.5 - CSPM",
      ["cspm", "cloud-misconfiguration", "compliance"])

add_c(92, "2.5", "Cloud Storage & Ransomware", "Beginner",
      "What cloud storage feature helps protect stored objects from accidental deletion or malicious ransomware tampering?",
      "# S3 Object Versioning & Object Lock (WORM: Write Once, Read Many)\n# Even if an attacker overwrites a file, prior versions remain intact and unmodifiable",
      ["Object Versioning and Object Lock (WORM storage)", "Converting images to JPEG format", "Renaming files with uppercase letters", "Downloading files to a desktop floppy disk"],
      0,
      "Object Versioning keeps previous iterations of objects, and Object Lock (Write Once, Read Many) prevents objects from being overwritten or deleted for a fixed retention period.",
      "PCES-30-01 Block 2.5 - Cloud Storage Resilience",
      ["object-versioning", "worm-storage", "ransomware-defense"])

add_c(93, "2.5", "Cloud Network Security", "Intermediate",
      "In Amazon Web Services (AWS) or similar clouds, what is the difference between a Security Group and a Network ACL (NACL)?",
      "# AWS Security Groups vs NACLs:\n# Security Group: Operates at instance/ENI level, stateful\n# NACL: Operates at subnet level, stateless",
      ["Security Groups are stateful and operate at the virtual instance/ENI level; NACLs are stateless and operate at the subnet boundary level", "Security Groups are only for Linux; NACLs are only for Windows", "Security Groups are physical firewalls; NACLs are software firewalls", "There is no difference between them"],
      0,
      "Security Groups act as stateful firewalls attached to individual virtual network interfaces. Network Access Control Lists (NACLs) are stateless subnet-level packet filters.",
      "PCES-30-01 Block 2.5 - Cloud Firewalls",
      ["security-groups", "nacl", "aws-security"])

add_c(94, "2.5", "Remote Wipe", "Beginner",
      "When an employee resigns or their smartphone is stolen, what MDM capability protects corporate email and documents from falling into unauthorized hands?",
      "# Remote Wipe action executed via MDM console\n# Erases all corporate profiles, tokens, emails, and data from the mobile device instantly",
      ["Remote Wipe", "Screen Mirroring", "Bluetooth Pairing", "GPS Navigation"],
      0,
      "Remote Wipe allows administrators to wirelessly erase all enterprise data, profiles, and certificates from a managed mobile device when it is reported lost, stolen, or during offboarding.",
      "PCES-30-01 Block 2.5 - MDM & Data Protection",
      ["remote-wipe", "mobile-security", "offboarding"])

add_c(95, "2.5", "SSH Bastion", "Intermediate",
      "What is a 'Bastion Host' (or Jump Box) in cloud network architecture?",
      "# Bastion Host (Jump Box) architecture:\n# Internet -> SSH -> Bastion Host (in Public Subnet, strictly hardened, MFA enforced)\n# Bastion Host -> SSH -> Private Database / Application Servers (no public IPs!)",
      ["A strictly hardened, monitored proxy server that serves as the single secure entry point for administrators connecting to private internal cloud instances", "A powerful gaming server used during lunch breaks", "A tool for compressing log archives before uploading to S3", "A backup battery unit for cloud servers"],
      0,
      "A bastion host is a specially hardened server positioned in a public subnet to provide a single, strictly controlled, and audited entry point to manage instances residing in private subnets.",
      "PCES-30-01 Block 2.5 - Bastion Hosts",
      ["bastion-host", "jump-box", "cloud-architecture"])

add_c(96, "2.5", "Zero Trust Network Access", "Intermediate",
      "How does Zero Trust Network Access (ZTNA) differ from traditional corporate perimeter VPNs?",
      "# VPN vs ZTNA:\n# VPN: Connects user to ENTIRE subnet (broad lateral network access)\n# ZTNA: Grants access ONLY to the specific authorized application, never the underlying network",
      ["Traditional VPNs grant broad network-level access to the entire subnet; ZTNA grants granular, identity-based access only to specific authorized applications", "ZTNA requires copper cables; VPNs use Wi-Fi", "ZTNA is only for mobile phones; VPN is for servers", "ZTNA transmits passwords in plaintext"],
      0,
      "Traditional VPNs place the remote worker directly on the corporate LAN, enabling lateral movement. ZTNA abstracts network access, providing access strictly to specific authorized applications.",
      "PCES-30-01 Block 2.5 - ZTNA",
      ["ztna", "vpn-alternative", "zero-trust"])

add_c(97, "2.5", "Shadow IT", "Beginner",
      "What is 'Shadow IT' in corporate enterprise security?",
      "# Shadow IT scenario:\n# Employees using unapproved consumer cloud apps (Dropbox, Trello, ChatGPT)\n# to store confidential company files without IT security review or governance",
      ["Information technology systems, software, or cloud services used within an organization without explicit IT department approval or oversight", "Computers used by hackers at night in dark rooms", "Hardware components that have no serial numbers", "Software written exclusively in dark mode themes"],
      0,
      "Shadow IT refers to unvetted software, cloud apps, and hardware used by staff without organizational knowledge, creating unmonitored compliance risks and data leaks.",
      "PCES-30-01 Block 2.5 - Shadow IT",
      ["shadow-it", "cloud-risk", "governance"])

add_c(98, "2.5", "CASB", "Intermediate",
      "What is a Cloud Access Security Broker (CASB)?",
      "# CASB enforcement point:\n# Positioned between cloud users and cloud applications (SaaS/IaaS)\n# Enforces security policies: DLP, access control, threat protection, and Shadow IT discovery",
      ["A security policy enforcement point situated between cloud service consumers and providers to consolidate security controls across multiple clouds", "A stockbroker who trades cloud computing company equities", "A hardware switch installed in physical telephone closets", "A database server running PostgreSQL in the cloud"],
      0,
      "A CASB is a software tool or service that sits between on-premises infrastructure and cloud providers, enforcing security policies, data loss prevention (DLP), encryption, and compliance.",
      "PCES-30-01 Block 2.5 - CASB",
      ["casb", "cloud-governance", "dlp"])

add_c(99, "2.5", "Container Security", "Intermediate",
      "Why is running a Docker container with `--privileged` considered dangerous in production?",
      "# Insecure container launch:\n# docker run --privileged ...\n# Grants container access to ALL host devices and kernel capabilities, bypassing container isolation!",
      ["It grants the container full root capabilities and direct access to all host devices, effectively breaking container isolation and enabling easy host takeover", "It slows down container startup by 30 minutes", "It prevents Python scripts from reading environment variables", "It automatically exposes all ports to the public internet"],
      0,
      "The `--privileged` flag gives the container almost all capabilities of the host kernel and access to host devices, severely compromising isolation and allowing container escape to host root.",
      "PCES-30-01 Block 2.5 - Container Security",
      ["containers", "docker", "privilege-escalation"])

add_c(100, "2.5", "Credential Exposure", "Beginner",
      "What is the danger of accidentally committing a `.env` file containing cloud access secret keys (`AWS_SECRET_ACCESS_KEY`) to a public GitHub repository?",
      "# Accidental secret leak in git commit\n# Automated bots scan public commits within SECONDS of push\n# Attackers immediately spin up unauthorized crypto-mining clusters or exfiltrate databases!",
      ["Automated scraper bots scan public code commits in real time, immediately extracting exposed credentials to compromise cloud infrastructure", "Git will refuse to push files that end in .env", "The GitHub repository will automatically be converted to private", "The computer processor will permanently throttle its speed"],
      0,
      "Malicious bots continually monitor public GitHub commits. Leaked API secrets and cloud credentials are often exploited within seconds to deploy crypto-miners or steal data.",
      "PCES-30-01 Block 2.5 - Secret Management",
      ["secret-exposure", "api-keys", "git-leaks"])

print(f"Total Block 2 cards created: {len(cards)}")
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

write_ts_file("src/data/pcesSection2CardsPart1.ts", "pcesSection2CardsPart1", cards[:50])
write_ts_file("src/data/pcesSection2CardsPart2.ts", "pcesSection2CardsPart2", cards[50:])

with open("src/data/pcesSection2Flashcards.ts", "w") as f:
    f.write("""import { Flashcard } from '../types';
import { pcesSection2CardsPart1 } from './pcesSection2CardsPart1';
import { pcesSection2CardsPart2 } from './pcesSection2CardsPart2';

export const pcesSection2Flashcards: Flashcard[] = [
  ...pcesSection2CardsPart1,
  ...pcesSection2CardsPart2,
];
""")
print("Wrote pcesSection2Flashcards.ts")
