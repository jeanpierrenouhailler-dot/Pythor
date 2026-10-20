import { Flashcard } from '../types';

export const pcesSection1CardsPart2: Flashcard[] = [
  {
    id: "pces-1-051",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Web Attacks",
    difficulty: "Intermediate",
    question: "What is a 'Watering Hole' attack?",
    codeSnippet: "# Watering hole strategy\n# 1. Profile target group (e.g. defense aerospace engineers)\n# 2. Identify legitimate third-party website they frequently visit (e.g. aerospace news forum)\n# 3. Compromise the news forum and inject exploit targeted at visitors from the defense contractor IP block",
    options: [
      "Dumping toxic liquids into a municipal data center reservoir",
      "Compromising a legitimate third-party website that is known to be frequently visited by members of a specific target organization",
      "Flooding an IRC chat room with repetitive text spam",
      "Intercepting satellite communications over coastal waters"
    ],
    correctAnswer: 1,
    explanation: "In a watering hole attack, attackers identify and compromise legitimate websites frequently visited by their target demographic to infect them via drive-by exploits.",
    officialRef: "PCES-30-01 Block 1.3 - Watering Hole",
    tags: ["watering-hole", "targeted-attacks", "apt"]
  },
  {
    id: "pces-1-052",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Physical & Social Engineering",
    difficulty: "Beginner",
    question: "What is 'Tailgating' (or 'Piggybacking') in physical access security?",
    codeSnippet: "# Physical security access badge simulation\ndef access_turnstile(badge_id: str, person_count: int):\n    # Tailgating occurs when person_count > 1 on a single badge_id scan\n    return person_count > 1",
    options: [
      "Following an authorized employee through a secure door or barrier without scanning one's own credential",
      "Sniffing Bluetooth packets behind a delivery vehicle",
      "Stealing copper cables from telephone poles",
      "Tracing IP packets using traceroute"
    ],
    correctAnswer: 0,
    explanation: "Tailgating is a physical security breach where an unauthorized individual closely follows an authorized person through a secured entry point.",
    officialRef: "PCES-30-01 Block 1.3 - Physical Security",
    tags: ["tailgating", "physical-security", "social-engineering"]
  },
  {
    id: "pces-1-053",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Physical Security & Baiting",
    difficulty: "Beginner",
    question: "An attacker leaves infected USB flash drives labeled 'Q4 Executive Salaries.xlsx' in an office parking lot. What attack technique is this?",
    codeSnippet: "# USB Baiting / Drop attack\n# Attacker exploits curiosity or greed to trick victim into plugging malicious hardware into corporate PC",
    options: [
      "Watering hole attack",
      "Baiting (USB drop)",
      "Typosquatting",
      "DNS poisoning"
    ],
    correctAnswer: 1,
    explanation: "Baiting (such as leaving infected USB drives in public locations) exploits human curiosity or greed to entice victims into connecting malicious storage media to internal networks.",
    officialRef: "PCES-30-01 Block 1.3 - Social Engineering",
    tags: ["baiting", "usb-drop", "social-engineering"]
  },
  {
    id: "pces-1-054",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Wireless Attacks",
    difficulty: "Intermediate",
    question: "What is an 'Evil Twin' attack in wireless networking?",
    codeSnippet: "# Evil twin access point configuration\n# Attacker broadcasts exact same SSID ('Starbucks_Guest') with stronger signal\n# Victims automatically associate with attacker's rogue AP",
    options: [
      "A rogue Wi-Fi access point configured to broadcast the exact same SSID as a legitimate trusted network to intercept traffic",
      "A computer with two identical network interface cards running in parallel",
      "A mirror database replica configured on AWS",
      "A duplicate SSH key used by two different administrators"
    ],
    correctAnswer: 0,
    explanation: "An Evil Twin is a rogue wireless access point masquerading as a legitimate network by spoofing its SSID and MAC address to harvest credentials and intercept victim traffic.",
    officialRef: "PCES-30-01 Block 1.3 - Wireless Attacks",
    tags: ["evil-twin", "wireless", "rogue-ap"]
  },
  {
    id: "pces-1-055",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Network Attacks",
    difficulty: "Intermediate",
    question: "What is DNS Cache Poisoning (DNS Spoofing)?",
    codeSnippet: "# DNS cache poisoning concept\n# Corrupting DNS resolver cache with fraudulent IP mappings:\n# 'mybank.com' -> Attacker IP (198.51.100.99) instead of Legitimate IP (203.0.113.1)",
    options: [
      "Corrupting a DNS resolver's cache so that domain name queries return the IP address of an attacker-controlled server",
      "Deleting the /etc/hosts file on a local computer",
      "Flooding an authoritative name server with ICMP ping requests",
      "Purchasing an expired domain name legally on a domain exchange"
    ],
    correctAnswer: 0,
    explanation: "DNS cache poisoning corrupts the resolver's cache with fraudulent IP records, silently redirecting users trying to access legitimate sites to attacker-controlled phishing servers.",
    officialRef: "PCES-30-01 Block 1.3 - Network Attacks",
    tags: ["dns-poisoning", "dns-spoofing", "network-attacks"]
  },
  {
    id: "pces-1-056",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Social Engineering",
    difficulty: "Beginner",
    question: "How do 'Smishing' and 'Vishing' differ from standard email phishing?",
    codeSnippet: "# Attack delivery channel classification\ndef classify_channel(medium: str) -> str:\n    if medium == 'sms': return 'Smishing'\n    elif medium == 'voice_call': return 'Vishing'\n    elif medium == 'email': return 'Phishing'",
    options: [
      "Smishing uses SMS text messages; Vishing uses voice phone calls",
      "Smishing targets small businesses; Vishing targets universities",
      "Smishing uses malicious USBs; Vishing uses compromised websites",
      "Smishing is legal; Vishing is illegal"
    ],
    correctAnswer: 0,
    explanation: "Smishing is phishing delivered via SMS text messages. Vishing is voice phishing conducted via telephone calls.",
    officialRef: "PCES-30-01 Block 1.3 - Social Engineering",
    tags: ["smishing", "vishing", "phishing"]
  },
  {
    id: "pces-1-057",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Malware Types",
    difficulty: "Beginner",
    question: "What is a 'Keylogger'?",
    codeSnippet: "# Keylogger concept\n# Intercepts keyboard input interrupts to record keystrokes\ndef on_key_press(key):\n    with open('keylog.txt', 'a') as f:\n        f.write(str(key))",
    options: [
      "A hardware or software tool that silently records every keystroke typed by a user to capture passwords and sensitive data",
      "A device that locks server rack doors using cryptographic keys",
      "A Python utility that automatically formats source code indentation",
      "A protocol that synchronizes keyboard layouts across international servers"
    ],
    correctAnswer: 0,
    explanation: "A keylogger is spyware (hardware or software) designed to covertly record keystrokes typed by a victim to harvest usernames, passwords, credit card numbers, and confidential messages.",
    officialRef: "PCES-30-01 Block 1.3 - Malware Types",
    tags: ["keylogger", "spyware", "credential-theft"]
  },
  {
    id: "pces-1-058",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Malware Types",
    difficulty: "Beginner",
    question: "What is 'Spyware'?",
    codeSnippet: "# Spyware stealth operation\n# Covertly gathers telemetry, browser history, microphone audio without user consent",
    options: [
      "Malware designed to covertly monitor user activity, gather confidential data, and transmit it to an unauthorized third party",
      "Software used by intelligence agents to play chess online",
      "A Python framework for unit testing async functions",
      "A network router diagnostic utility"
    ],
    correctAnswer: 0,
    explanation: "Spyware covertly tracks user activity, keystrokes, browsing history, and credentials, exfiltrating this telemetry without user knowledge or consent.",
    officialRef: "PCES-30-01 Block 1.3 - Malware Types",
    tags: ["spyware", "privacy", "malware"]
  },
  {
    id: "pces-1-059",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Social Engineering",
    difficulty: "Beginner",
    question: "What is 'Shoulder Surfing'?",
    codeSnippet: "# Shoulder surfing mitigation: Privacy filters on laptop screens\n# Restricts viewing angle to prevent casual eavesdropping from bystanders",
    options: [
      "Looking over someone's shoulder to covertly view passwords, PINs, or confidential information displayed on their screen or keypad",
      "Tapping someone on the shoulder to ask for the time",
      "Hacking into fitness tracker shoulder sensors",
      "Connecting a secondary monitor over HDMI without authorization"
    ],
    correctAnswer: 0,
    explanation: "Shoulder surfing is a direct observation technique where an attacker watches a victim's keyboard, screen, or ATM keypad to steal passwords, PINs, or sensitive information.",
    officialRef: "PCES-30-01 Block 1.3 - Physical Security",
    tags: ["shoulder-surfing", "physical-security", "social-engineering"]
  },
  {
    id: "pces-1-060",
    track: 'pces',
    section: "Section 1",
    chapter: "1.3",
    category: "Cryptographic Attacks",
    difficulty: "Intermediate",
    question: "What is a 'Rainbow Table' attack against password hashes?",
    codeSnippet: "# Rainbow table concept:\n# Precomputed table of plaintext passwords and their corresponding cryptographic hash digests\n# Looking up hash in table reveals plaintext instantly: hash -> plaintext",
    options: [
      "A visual display of colorful server log metrics on a SOC dashboard",
      "Using precomputed tables of reverse cryptographic hash values to rapidly crack password hashes",
      "Flooding a wireless access point with multi-frequency radio interference",
      "Using optical lasers to transmit data between server racks"
    ],
    correctAnswer: 1,
    explanation: "Rainbow tables are precomputed lookup tables of cryptographic hashes used to reverse password hashes without performing time-consuming brute-force hashing in real time (defeated by salting).",
    officialRef: "PCES-30-01 Block 1.3 - Cryptographic Attacks",
    tags: ["rainbow-tables", "passwords", "salting"]
  },
  {
    id: "pces-1-061",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Risk Management",
    difficulty: "Intermediate",
    question: "What is the mathematical definition of Annualized Loss Expectancy (ALE) in quantitative risk analysis?",
    codeSnippet: "# Quantitative risk formula\n# ALE = SLE x ARO\ndef calculate_ale(single_loss_expectancy: float, annualized_rate_of_occurrence: float) -> float:\n    return single_loss_expectancy * annualized_rate_of_occurrence",
    options: [
      "ALE = Single Loss Expectancy (SLE) x Annualized Rate of Occurrence (ARO)",
      "ALE = Asset Value / Annual Depreciation",
      "ALE = Total Vulnerabilities x Patch Speed",
      "ALE = Number of Employees x Insurance Deductible"
    ],
    correctAnswer: 0,
    explanation: "In quantitative risk analysis, Annualized Loss Expectancy (ALE) equals the cost of a single incident (Single Loss Expectancy, SLE) multiplied by the frequency of occurrence per year (ARO).",
    officialRef: "PCES-30-01 Block 1.4 - Quantitative Risk",
    tags: ["ale", "sle", "aro", "quantitative-risk"]
  },
  {
    id: "pces-1-062",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Risk Treatment",
    difficulty: "Beginner",
    question: "When an organization purchases a comprehensive Cybersecurity Insurance policy, which risk treatment strategy are they employing?",
    codeSnippet: "# Risk treatment strategies:\n# 1. Mitigation (apply controls)\n# 2. Transference (shift financial burden via insurance/outsourcing)\n# 3. Acceptance (retain risk)\n# 4. Avoidance (eliminate risky activity)",
    options: [
      "Risk Mitigation",
      "Risk Transference",
      "Risk Avoidance",
      "Risk Acceptance"
    ],
    correctAnswer: 1,
    explanation: "Risk Transference (or risk sharing) shifts the financial consequences of a loss to a third party, most commonly through insurance policies or contractual warranties.",
    officialRef: "PCES-30-01 Block 1.4 - Risk Treatment",
    tags: ["risk-transference", "cyber-insurance", "risk-treatment"]
  },
  {
    id: "pces-1-063",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Risk Treatment",
    difficulty: "Beginner",
    question: "An enterprise decides to shut down and decommission an insecure legacy FTP server completely rather than attempting to patch it. Which risk strategy is this?",
    codeSnippet: "# Decommissioning the high-risk asset entirely\n# Result: Risk probability drops to zero because the activity ceases",
    options: [
      "Risk Acceptance",
      "Risk Transference",
      "Risk Avoidance",
      "Risk Diffusion"
    ],
    correctAnswer: 2,
    explanation: "Risk Avoidance involves eliminating the risk entirely by ceasing the risky activity, shutting down the vulnerable system, or not deploying a high-risk feature.",
    officialRef: "PCES-30-01 Block 1.4 - Risk Treatment",
    tags: ["risk-avoidance", "decommissioning", "risk-treatment"]
  },
  {
    id: "pces-1-064",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Risk Treatment",
    difficulty: "Beginner",
    question: "Implementing multi-factor authentication (MFA) and host firewalls to reduce the likelihood of credential theft is an example of which risk strategy?",
    codeSnippet: "# Applying security controls to reduce risk probability/impact\n# Controls deployed: MFA, firewalls, endpoint detection",
    options: [
      "Risk Mitigation",
      "Risk Avoidance",
      "Risk Transference",
      "Risk Ignorance"
    ],
    correctAnswer: 0,
    explanation: "Risk Mitigation (or risk reduction) involves implementing technical, administrative, or physical controls to reduce the likelihood and/or impact of a threat.",
    officialRef: "PCES-30-01 Block 1.4 - Risk Treatment",
    tags: ["risk-mitigation", "controls", "remediation"]
  },
  {
    id: "pces-1-065",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Risk Treatment",
    difficulty: "Intermediate",
    question: "When is 'Risk Acceptance' an appropriate business decision?",
    codeSnippet: "# Cost-benefit evaluation for risk treatment\ncontrol_cost = 50000.0   # $50,000 annual cost to implement WAF control\nannualized_loss = 1200.0  # $1,200 annual expected loss\n# If control cost drastically exceeds the potential loss, risk acceptance may be rational",
    options: [
      "When the cost of implementing a countermeasure significantly exceeds the total potential loss of the asset",
      "Whenever a vulnerability has a CVSS score of 10.0",
      "When the CEO does not want to read security reports",
      "Only when all servers are disconnected from the internet"
    ],
    correctAnswer: 0,
    explanation: "Risk Acceptance is appropriate when the cost of remediating or transferring the risk is greater than the potential loss, or when the risk falls well within the organization's defined risk tolerance.",
    officialRef: "PCES-30-01 Block 1.4 - Risk Treatment",
    tags: ["risk-acceptance", "risk-tolerance", "cost-benefit"]
  },
  {
    id: "pces-1-066",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Business Continuity",
    difficulty: "Intermediate",
    question: "In disaster recovery and business continuity planning, what does Recovery Time Objective (RTO) define?",
    codeSnippet: "# RTO: Maximum acceptable downtime duration\n# Target: Database must be fully restored and online within 4 hours of failure",
    options: [
      "The maximum acceptable amount of time that a system can remain offline following a disaster",
      "The maximum age of data that can be lost in a failure",
      "The time required to complete an annual cybersecurity audit",
      "The duration of an employee's password reset call"
    ],
    correctAnswer: 0,
    explanation: "Recovery Time Objective (RTO) is the targeted duration of time within which a business process or IT system must be restored after a disruption to avoid unacceptable consequences.",
    officialRef: "PCES-30-01 Block 1.4 - Business Continuity",
    tags: ["rto", "recovery-time-objective", "bcp"]
  },
  {
    id: "pces-1-067",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Business Continuity",
    difficulty: "Intermediate",
    question: "In disaster recovery planning, what does Recovery Point Objective (RPO) define?",
    codeSnippet: "# RPO: Maximum acceptable data loss period\n# If backups run every 6 hours, maximum data loss in a crash is 6 hours (RPO = 6h)",
    options: [
      "The maximum acceptable amount of data loss measured in time backwards from the disruption point",
      "The geographic coordinates of the secondary data center",
      "The number of hours needed to rewrite all Python code",
      "The percentage of CPU utilization allowed during recovery"
    ],
    correctAnswer: 0,
    explanation: "Recovery Point Objective (RPO) is the maximum acceptable period of data loss measured in time (e.g. up to 1 hour of transactions), determining how frequently backups must be performed.",
    officialRef: "PCES-30-01 Block 1.4 - Business Continuity",
    tags: ["rpo", "recovery-point-objective", "backups"]
  },
  {
    id: "pces-1-068",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Impact Analysis",
    difficulty: "Beginner",
    question: "What is the primary objective of a Business Impact Analysis (BIA)?",
    codeSnippet: "# BIA objectives: Catalog critical business functions, assess disruption impacts, define RTO/RPO",
    options: [
      "To determine the impact of a disruption on critical business operations and identify resource recovery requirements",
      "To calculate the marketing budget for advertising new products",
      "To install antivirus agents on guest Wi-Fi smartphones",
      "To fire employees who click simulated phishing links"
    ],
    correctAnswer: 0,
    explanation: "A Business Impact Analysis (BIA) identifies critical business processes, evaluates the operational and financial impact of their disruption, and establishes recovery priorities (RTO/RPO).",
    officialRef: "PCES-30-01 Block 1.4 - Business Impact Analysis",
    tags: ["bia", "business-impact", "continuity"]
  },
  {
    id: "pces-1-069",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Incident Fallout",
    difficulty: "Beginner",
    question: "Which of the following is considered an Indirect (intangible) financial impact of a major customer data breach?",
    codeSnippet: "# Categorizing breach consequences\n# Direct: Incident response contractor fees, legal penalties, forensic retainer\n# Indirect: Reputational brand damage, loss of customer trust, declining stock valuation",
    options: [
      "Reputational damage and loss of future customer trust",
      "Paying an immediate invoice to an external forensic consultant",
      "Mailing notification letters to breached customers",
      "Replacing broken hard drive hardware"
    ],
    correctAnswer: 0,
    explanation: "While forensic fees and notification mailings are direct out-of-pocket costs, reputational damage, customer churn, and depressed brand value are indirect, long-term impacts.",
    officialRef: "PCES-30-01 Block 1.4 - Incident Fallout",
    tags: ["reputational-damage", "breach-impact", "intangible-costs"]
  },
  {
    id: "pces-1-070",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Operational Metrics",
    difficulty: "Intermediate",
    question: "What does Mean Time to Detect (MTTD) measure in security operations?",
    codeSnippet: "# MTTD Metric calculation\ndef calculate_mttd(incident_durations: list) -> float:\n    # Average time from initial breach/event to detection by SOC\n    return sum(incident_durations) / len(incident_durations)",
    options: [
      "The average time elapsed between when a security incident begins and when security personnel first detect it",
      "The average time it takes a developer to fix a syntax error in Python",
      "The time required to install security patches on Windows",
      "The download speed of threat intelligence feeds"
    ],
    correctAnswer: 0,
    explanation: "Mean Time to Detect (MTTD) measures the average time an organization takes to discover and identify a security incident or intrusion.",
    officialRef: "PCES-30-01 Block 1.4 - SecOps Metrics",
    tags: ["mttd", "metrics", "detection"]
  },
  {
    id: "pces-1-071",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Operational Metrics",
    difficulty: "Intermediate",
    question: "What does Mean Time to Remediate (MTTR) measure?",
    codeSnippet: "# MTTR calculation: Time from detection to complete resolution/containment\ndef calculate_mttr(resolution_times: list) -> float:\n    return sum(resolution_times) / len(resolution_times)",
    options: [
      "The average time required to contain, eliminate, and resolve a security incident after it has been detected",
      "The duration of time an attacker remains quiet before striking",
      "The time required to reboot a web server after a power outage",
      "The time taken to write a post-mortem blog post"
    ],
    correctAnswer: 0,
    explanation: "Mean Time to Remediate (MTTR) is the average time taken from the moment an incident is identified until the vulnerability is closed and systems are fully restored to clean operation.",
    officialRef: "PCES-30-01 Block 1.4 - SecOps Metrics",
    tags: ["mttr", "remediation", "metrics"]
  },
  {
    id: "pces-1-072",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Risk Assessment",
    difficulty: "Beginner",
    question: "What distinguishes Qualitative Risk Assessment from Quantitative Risk Assessment?",
    codeSnippet: "# Assessment comparison\n# Qualitative: High / Medium / Low rating based on expert consensus\n# Quantitative: Concrete financial dollar figures ($ALE, $SLE)",
    options: [
      "Qualitative uses descriptive rankings (e.g. High/Medium/Low); Quantitative uses numerical and financial dollar calculations",
      "Qualitative is for hardware; Quantitative is for software",
      "Qualitative is conducted by law enforcement; Quantitative is conducted by internal developers",
      "Qualitative requires Python; Quantitative requires C++"
    ],
    correctAnswer: 0,
    explanation: "Qualitative risk assessment relies on subjective scales (High, Medium, Low) based on impact and likelihood. Quantitative risk assessment calculates concrete numerical values and monetary losses.",
    officialRef: "PCES-30-01 Block 1.4 - Risk Assessment",
    tags: ["qualitative", "quantitative", "risk-methodology"]
  },
  {
    id: "pces-1-073",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Quantitative Risk",
    difficulty: "Intermediate",
    question: "If a database server has an Asset Value (AV) of $200,000 and an Exposure Factor (EF) of 25% for a flood event, what is the Single Loss Expectancy (SLE)?",
    codeSnippet: "# SLE formula: SLE = Asset Value (AV) x Exposure Factor (EF)\nav = 200000.0\nef = 0.25\nsle = av * ef  # $50,000.0",
    options: [
      "$5,000",
      "$50,000",
      "$150,000",
      "$25,000"
    ],
    correctAnswer: 1,
    explanation: "SLE = AV x EF = $200,000 x 0.25 = $50,000. If the event occurs, the expected monetary loss for that single occurrence is $50,000.",
    officialRef: "PCES-30-01 Block 1.4 - Quantitative Risk",
    tags: ["sle", "exposure-factor", "calculations"]
  },
  {
    id: "pces-1-074",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Quantitative Risk",
    difficulty: "Intermediate",
    question: "If an organization calculates an SLE of $50,000 and expects an event to occur once every 2 years (ARO = 0.5), what is the Annualized Loss Expectancy (ALE)?",
    codeSnippet: "# ALE calculation\nsle = 50000.0\naro = 0.5  # Once every 2 years\nale = sle * aro  # $25,000 per year",
    options: [
      "$25,000",
      "$50,000",
      "$100,000",
      "$12,500"
    ],
    correctAnswer: 0,
    explanation: "ALE = SLE x ARO = $50,000 x 0.5 = $25,000 per year. The company can justify spending up to $25,000 annually on countermeasures to mitigate this risk.",
    officialRef: "PCES-30-01 Block 1.4 - Quantitative Risk",
    tags: ["ale", "aro", "calculations"]
  },
  {
    id: "pces-1-075",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Risk Governance",
    difficulty: "Beginner",
    question: "What is a 'Risk Register' in cybersecurity management?",
    codeSnippet: "# Sample risk register row dictionary\nrisk_item = {\n    'id': 'RISK-014',\n    'threat': 'Ransomware via unpatched VPN',\n    'owner': 'SecOps Lead',\n    'inherent_risk': 'Critical',\n    'mitigation_plan': 'Deploy MFA and emergency VPN firmware patch',\n    'status': 'In Progress'\n}",
    options: [
      "A centralized document or database that logs identified risks, their severity, assigned owners, and remediation status",
      "A cryptographic ledger for buying bitcoin during ransomware extortion",
      "A list of employee usernames who forgot their passwords",
      "A hardware registry inside the CPU memory controller"
    ],
    correctAnswer: 0,
    explanation: "A Risk Register is an essential governance document that catalogs all identified risks, their potential impact/likelihood, remediation actions, and accountability owners.",
    officialRef: "PCES-30-01 Block 1.4 - Risk Governance",
    tags: ["risk-register", "governance", "risk-management"]
  },
  {
    id: "pces-1-076",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Risk Types",
    difficulty: "Intermediate",
    question: "What is 'Residual Risk' in risk management?",
    codeSnippet: "# Risk equation:\n# Residual Risk = Inherent Risk - Countermeasure Effect\n# (The risk that remains after all controls are implemented)",
    options: [
      "The risk that remains after security countermeasures and controls have been implemented",
      "The risk present before any security controls were designed",
      "The cost of disposing of old server hardware",
      "The risk that all employees will leave the company on the same day"
    ],
    correctAnswer: 0,
    explanation: "Residual risk is the remaining level of risk after security countermeasures, policies, and controls have been applied to mitigate inherent risk.",
    officialRef: "PCES-30-01 Block 1.4 - Risk Types",
    tags: ["residual-risk", "inherent-risk", "controls"]
  },
  {
    id: "pces-1-077",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Regulatory Impact",
    difficulty: "Beginner",
    question: "How do data protection regulations (such as GDPR) increase the financial impact of a data breach?",
    codeSnippet: "# Calculating total breach liability\nregulatory_fine = min(20000000, annual_global_turnover * 0.04)\n# Regulatory fines can reach up to 4% of global annual turnover under GDPR",
    options: [
      "By eliminating the need to report breaches to authorities",
      "By imposing severe statutory monetary fines and mandatory breach disclosure timelines",
      "By prohibiting companies from buying cyber insurance",
      "By requiring all Python code to be audited by government inspectors"
    ],
    correctAnswer: 1,
    explanation: "Regulations like GDPR introduce heavy financial penalties (up to \u20ac20M or 4% of global turnover) for failing to safeguard personal data and notify authorities within tight deadlines (72 hours).",
    officialRef: "PCES-30-01 Block 1.4 - Regulatory Impact",
    tags: ["gdpr", "compliance", "penalties"]
  },
  {
    id: "pces-1-078",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Disaster Recovery",
    difficulty: "Intermediate",
    question: "What is the difference between a 'Hot Site' and a 'Cold Site' in disaster recovery architecture?",
    codeSnippet: "# Disaster Recovery site types:\n# Hot Site: Fully equipped, synchronized real-time data, near-instantaneous cutover\n# Cold Site: Physical facility with power/cooling but no pre-installed hardware or active data",
    options: [
      "A Hot Site is a fully redundant, operational replica ready for immediate failover; a Cold Site has space and utilities but requires hardware and data restoration before use",
      "A Hot Site is located in tropical climates; a Cold Site is located near the Arctic",
      "A Hot Site only runs Python; a Cold Site runs COBOL",
      "A Hot Site is owned by the government; a Cold Site is private"
    ],
    correctAnswer: 0,
    explanation: "A Hot Site is a continuously synchronized facility capable of taking over operations in minutes. A Cold Site provides basic infrastructure (power, space) but takes days or weeks to equip and load data.",
    officialRef: "PCES-30-01 Block 1.4 - Disaster Recovery",
    tags: ["hot-site", "cold-site", "disaster-recovery"]
  },
  {
    id: "pces-1-079",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Supply Chain Risk",
    difficulty: "Intermediate",
    question: "Why is third-party vendor risk management critical to organizational security?",
    codeSnippet: "# Vendor integration check\n# A breach at a SaaS billing vendor can expose customer payment records\n# even if the company's internal servers are completely uncompromised",
    options: [
      "Third-party vendors never use encryption",
      "A security breach at a vendor or partner who has access to enterprise networks or data can compromise the parent organization",
      "Vendors are legally responsible for all internal IT mistakes",
      "Vendors cannot sign non-disclosure agreements"
    ],
    correctAnswer: 1,
    explanation: "Organizations frequently grant third-party vendors network access or share sensitive data with them. A compromise at a vendor creates an attack vector into the contracting enterprise.",
    officialRef: "PCES-30-01 Block 1.4 - Vendor Risk",
    tags: ["vendor-risk", "supply-chain", "third-party"]
  },
  {
    id: "pces-1-080",
    track: 'pces',
    section: "Section 1",
    chapter: "1.4",
    category: "Incident Fallout",
    difficulty: "Beginner",
    question: "How does unmitigated operational downtime directly impact an e-commerce business during peak holiday sales?",
    codeSnippet: "# Estimating downtime revenue loss\ndef downtime_loss(hourly_sales: float, hours_down: float) -> float:\n    return hourly_sales * hours_down\n# e.g. $100,000/hr x 6 hours = $600,000 lost revenue",
    options: [
      "Immediate lost transactional revenue and permanent loss of shoppers to competing retailers",
      "Increased server performance due to lower CPU temperature",
      "Decreased bandwidth costs saving significant money",
      "Automatic upgrade of database software versions"
    ],
    correctAnswer: 0,
    explanation: "System unavailability during peak periods causes immediate transactional revenue loss, damages brand reputation, and permanently drives frustrated customers to competitors.",
    officialRef: "PCES-30-01 Block 1.4 - Incident Fallout",
    tags: ["downtime", "business-impact", "availability"]
  },
  {
    id: "pces-1-081",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Data Privacy & GDPR",
    difficulty: "Beginner",
    question: "Under the European Union General Data Protection Regulation (GDPR), what is the mandatory reporting window to notify supervisory authorities of a personal data breach?",
    codeSnippet: "# GDPR Article 33 compliance timer\nmax_notification_window_hours = 72\ndef is_gdpr_notification_compliant(hours_elapsed: int) -> bool:\n    return hours_elapsed <= 72",
    options: [
      "Within 24 hours",
      "Within 72 hours",
      "Within 30 business days",
      "Only at the end of the calendar year"
    ],
    correctAnswer: 1,
    explanation: "GDPR Article 33 mandates that organizations notify the relevant supervisory authority without undue delay and, where feasible, not later than 72 hours after becoming aware of a personal data breach.",
    officialRef: "PCES-30-01 Block 1.5 - GDPR Compliance",
    tags: ["gdpr", "breach-notification", "72-hours"]
  },
  {
    id: "pces-1-082",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Data Privacy & GDPR",
    difficulty: "Intermediate",
    question: "What is the GDPR principle of 'Data Minimization'?",
    codeSnippet: "# Data minimization implementation in user signup model\n# Only collecting fields strictly necessary for the service\nuser_signup = {\n    'email': 'user@example.com',  # Necessary\n    'password_hash': '...',       # Necessary\n    # 'ssn', 'shoe_size', 'political_party' EXCLUDED - violates minimization!\n}",
    options: [
      "Collecting only the personal data that is strictly necessary for the specified, legitimate processing purposes",
      "Compressing databases using zip algorithms to minimize hard drive usage",
      "Deleting all company emails every 30 days",
      "Restricting database queries to 10 rows maximum"
    ],
    correctAnswer: 0,
    explanation: "Data Minimization requires that personal data collected must be adequate, relevant, and limited to what is strictly necessary in relation to the purposes for which it is processed.",
    officialRef: "PCES-30-01 Block 1.5 - Data Privacy",
    tags: ["data-minimization", "gdpr", "privacy"]
  },
  {
    id: "pces-1-083",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Healthcare Regulations",
    difficulty: "Beginner",
    question: "Which US federal law governs the security and privacy of Protected Health Information (PHI)?",
    codeSnippet: "# Healthcare data classification\n# PHI: Medical history, patient records, diagnostic lab tests, insurance billing",
    options: [
      "HIPAA (Health Insurance Portability and Accountability Act)",
      "DMCA (Digital Millennium Copyright Act)",
      "FERPA (Family Educational Rights and Privacy Act)",
      "CFAA (Computer Fraud and Abuse Act)"
    ],
    correctAnswer: 0,
    explanation: "HIPAA mandates strict administrative, physical, and technical safeguards to ensure the confidentiality, integrity, and availability of Protected Health Information (PHI).",
    officialRef: "PCES-30-01 Block 1.5 - Regulatory Standards",
    tags: ["hipaa", "phi", "compliance"]
  },
  {
    id: "pces-1-084",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "State Privacy Laws",
    difficulty: "Beginner",
    question: "What notable rights does the California Consumer Privacy Act (CCPA) grant to consumers regarding their personal data?",
    codeSnippet: "# CCPA rights: Know what data is collected, delete personal data, opt-out of data sale",
    options: [
      "The right to know what personal information is collected, the right to delete it, and the right to opt-out of the sale of personal information",
      "The right to free high-speed broadband internet in California",
      "The right to access the source code of proprietary operating systems",
      "The right to launch penetration tests against any California company"
    ],
    correctAnswer: 0,
    explanation: "The CCPA gives California consumers the right to know what personal info is collected, request its deletion, and opt out of the sale or sharing of their personal information.",
    officialRef: "PCES-30-01 Block 1.5 - Privacy Regulations",
    tags: ["ccpa", "privacy", "consumer-rights"]
  },
  {
    id: "pces-1-085",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Ethical Hacking",
    difficulty: "Beginner",
    question: "What is the single most critical factor that distinguishes an Ethical Hacker (White Hat) from a Malicious Hacker (Black Hat)?",
    codeSnippet: "# Checking authorization status before port scanning\nauthorized_by_written_contract = True\nif not authorized_by_written_contract:\n    raise PermissionError('Unauthorized testing is illegal under CFAA!')",
    options: [
      "Ethical hackers only use open-source operating systems",
      "Ethical hackers have explicit, formal written authorization from the system owner before conducting security testing",
      "Ethical hackers never use automated tools",
      "Ethical hackers write code exclusively in Python"
    ],
    correctAnswer: 1,
    explanation: "Explicit, formal written permission and authorization from the system owner defines ethical security testing; without authorization, testing is illegal under computer crime legislation.",
    officialRef: "PCES-30-01 Block 1.5 - Ethical Hacking",
    tags: ["authorization", "rules-of-engagement", "ethics"]
  },
  {
    id: "pces-1-086",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Computer Crime Laws",
    difficulty: "Intermediate",
    question: "Which major United States federal statute criminalizes unauthorized access to protected computers?",
    codeSnippet: "# Legal reference: Accessing computers without authorization or exceeding authorized access\n# Penalties include federal imprisonment and significant fines",
    options: [
      "CFAA (Computer Fraud and Abuse Act)",
      "Sarbanes-Oxley Act (SOX)",
      "Federal Information Security Modernization Act (FISMA)",
      "Telecommunications Act of 1996"
    ],
    correctAnswer: 0,
    explanation: "The Computer Fraud and Abuse Act (CFAA, 18 U.S.C. \u00a7 1030) is the primary U.S. federal anti-hacking statute, penalizing unauthorized access to protected computer systems.",
    officialRef: "PCES-30-01 Block 1.5 - Legal Standards",
    tags: ["cfaa", "anti-hacking", "legal"]
  },
  {
    id: "pces-1-087",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Vulnerability Disclosure",
    difficulty: "Intermediate",
    question: "What is 'Responsible Disclosure' (Coordinated Vulnerability Disclosure) in security research?",
    codeSnippet: "# Coordinated disclosure workflow\n# 1. Researcher discovers flaw\n# 2. Privately notifies vendor security team\n# 3. Grants vendor 90 days to develop and release a patch\n# 4. Joint public advisory released after fix is distributed",
    options: [
      "Publishing exploit code immediately to social media to force users to stop using the software",
      "Privately reporting the vulnerability to the affected vendor and giving them a reasonable time window to patch before making it public",
      "Selling zero-day exploits to unregulated dark web marketplaces",
      "Secretly using the exploit to download database tables without alerting the vendor"
    ],
    correctAnswer: 1,
    explanation: "Responsible disclosure entails privately informing the vendor of a flaw and agreeing on a reasonable timeframe to develop a patch before disclosing details to the public.",
    officialRef: "PCES-30-01 Block 1.5 - Vulnerability Disclosure",
    tags: ["responsible-disclosure", "coordination", "ethics"]
  },
  {
    id: "pces-1-088",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Bug Bounty Programs",
    difficulty: "Beginner",
    question: "What is the purpose of an organization hosting a public 'Bug Bounty' program?",
    codeSnippet: "# HackerOne / Bugcrowd scope definition\nscope = {\n    'in_scope': ['*.api.company.com', 'webapp.company.com'],\n    'out_of_scope': ['Denial of service', 'Physical offices', 'Social engineering'],\n    'rewards': {'Critical': 5000, 'High': 2000, 'Medium': 500}\n}",
    options: [
      "To crowd-source vulnerability discovery by offering financial rewards and safe-harbor rules of engagement to external security researchers",
      "To hire full-time exterminators to clean bugs from server hardware rooms",
      "To replace internal software engineering teams with external hackers",
      "To sell customer telemetry data to advertising agencies"
    ],
    correctAnswer: 0,
    explanation: "Bug bounty programs incentivize external security researchers to discover and report security vulnerabilities responsibly within a defined scope in exchange for monetary rewards.",
    officialRef: "PCES-30-01 Block 1.5 - Bug Bounties",
    tags: ["bug-bounty", "crowd-sourced", "incentives"]
  },
  {
    id: "pces-1-089",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Incident Response Lifecycle",
    difficulty: "Intermediate",
    question: "What are the six phases of the incident response lifecycle according to the NIST SP 800-61 / SANS frameworks?",
    codeSnippet: "# NIST Incident Response Framework\nphases = [\n    'Preparation',\n    'Detection and Analysis',\n    'Containment',\n    'Eradication',\n    'Recovery',\n    'Post-Incident Activity (Lessons Learned)'\n]",
    options: [
      "Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Lessons Learned",
      "Planning, Coding, Building, Testing, Deploying, and Maintaining",
      "Scanning, Exploiting, Rooting, Exfiltrating, Erasing, and Departing",
      "Buying, Unboxing, Installing, Configuring, Backing up, and Decommissioning"
    ],
    correctAnswer: 0,
    explanation: "The canonical NIST SP 800-61 incident response phases are Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Post-Incident Activity (Lessons Learned).",
    officialRef: "PCES-30-01 Block 1.5 - Incident Response Lifecycle",
    tags: ["nist", "sans", "incident-response-phases"]
  },
  {
    id: "pces-1-090",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Incident Response Lifecycle",
    difficulty: "Intermediate",
    question: "During an ongoing active breach where an infected server is communicating with an external Command & Control (C2) server, which phase takes immediate priority?",
    codeSnippet: "# Isolating compromised host from production network\n# Phase: Containment\n# Action: Disconnect VLAN / apply firewall rule blocking egress to C2 IP",
    options: [
      "Lessons Learned",
      "Containment",
      "Preparation",
      "Decommissioning"
    ],
    correctAnswer: 1,
    explanation: "Containment is prioritized to prevent the intruder or malware from expanding their foothold, exfiltrating more data, or spreading laterally across the enterprise.",
    officialRef: "PCES-30-01 Block 1.5 - Incident Response",
    tags: ["containment", "incident-response", "mitigation"]
  },
  {
    id: "pces-1-091",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Incident Response Lifecycle",
    difficulty: "Beginner",
    question: "What action takes place during the 'Eradication' phase of incident response?",
    codeSnippet: "# Eradication activities:\n# - Remove malware binaries and persistence artifacts\n# - Disable compromised credentials\n# - Patch the underlying vulnerability exploited for initial access",
    options: [
      "Writing the initial corporate security policy document",
      "Eliminating all components of the malware or intrusion, closing vulnerabilities, and cleaning compromised accounts",
      "Reconnecting the server to the internet without testing",
      "Sending the final marketing press release to customers"
    ],
    correctAnswer: 1,
    explanation: "Eradication involves locating and completely removing all malicious software, tools, backdoors, and compromised credentials from the environment, and patching the initial attack vector.",
    officialRef: "PCES-30-01 Block 1.5 - Incident Response",
    tags: ["eradication", "remediation", "incident-phases"]
  },
  {
    id: "pces-1-092",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Incident Response Lifecycle",
    difficulty: "Beginner",
    question: "Why is the 'Lessons Learned' (Post-Incident Review) phase vital for organizational security maturity?",
    codeSnippet: "# Post-incident retrospective agenda:\n# - How did the breach occur?\n# - Were our detection mechanisms fast enough?\n# - What procedural or technical gaps need remediation to prevent recurrence?",
    options: [
      "It provides an opportunity to assign blame and publicly fire junior staff",
      "It identifies what worked well, what failed, and how to improve defenses and response playbooks to prevent recurrence",
      "It allows the legal team to destroy all forensic evidence",
      "It guarantees that the company will never experience another attack"
    ],
    correctAnswer: 1,
    explanation: "The Lessons Learned phase ensures the organization reflects on the incident, updates defense playbooks, fixes architectural gaps, and improves training to prevent similar breaches.",
    officialRef: "PCES-30-01 Block 1.5 - Lessons Learned",
    tags: ["lessons-learned", "post-incident", "continuous-improvement"]
  },
  {
    id: "pces-1-093",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Digital Forensics",
    difficulty: "Intermediate",
    question: "What is 'Chain of Custody' in digital forensics and cyber incident investigations?",
    codeSnippet: "# Forensic evidence tracking record\nlog_entry = {\n    'evidence_id': 'EVD-2026-08',\n    'description': 'Bitstream image of compromised web server NVMe drive',\n    'sha256': 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e',\n    'custody_transferred_from': 'Analyst Alice',\n    'custody_transferred_to': 'Lead Investigator Bob',\n    'timestamp': '2026-09-28T14:30:00Z'\n}",
    options: [
      "A physical chain used to lock server rack doors",
      "The chronological documentation demonstrating the collection, custody, transfer, analysis, and preservation of digital evidence",
      "A blockchain network for recording financial transactions",
      "A list of employee badge swipes at the data center door"
    ],
    correctAnswer: 1,
    explanation: "Chain of custody provides an unbroken, verifiable audit trail demonstrating who handled digital evidence, when, and where, ensuring its admissibility in court proceedings.",
    officialRef: "PCES-30-01 Block 1.5 - Forensics & Chain of Custody",
    tags: ["chain-of-custody", "forensics", "evidence"]
  },
  {
    id: "pces-1-094",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Incident Response Ethics",
    difficulty: "Beginner",
    question: "When responding to an active cyber attack, why should security teams NOT attempt to 'hack back' against the suspected attacker's servers?",
    codeSnippet: "# Attacker infrastructure analysis\n# Attackers often route traffic through compromised third-party servers (e.g. hospitals or schools)\n# Counter-attacking ('hacking back') risks damaging innocent third parties and is illegal!",
    options: [
      "Attacking external servers without legal authorization is illegal and risks harming innocent intermediary third-party infrastructure",
      "Hacking back requires installing ancient versions of Python",
      "Modern firewalls automatically ban users who hack back",
      "Attackers will always be protected by diplomatic immunity"
    ],
    correctAnswer: 0,
    explanation: "'Hacking back' is illegal under anti-hacking statutes like the CFAA. Attackers routinely route attacks through compromised legitimate servers (e.g. universities, hospitals), risking severe collateral harm.",
    officialRef: "PCES-30-01 Block 1.5 - Legal & Ethical Boundaries",
    tags: ["hack-back", "legality", "ethics"]
  },
  {
    id: "pces-1-095",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Forensics Best Practices",
    difficulty: "Intermediate",
    question: "Why must digital forensics investigators work from a bitstream cryptographic image (clone) rather than the live original storage device?",
    codeSnippet: "# Forensic imaging with dd and sha256 checksum\n# dd if=/dev/sdb of=/forensics/evidence.img bs=64K status=progress\n# Read-only write-blocker ensures original drive bits remain pristine",
    options: [
      "To preserve the original physical media in its pristine, untampered state and avoid altering volatile forensic evidence",
      "To speed up the file transfer over USB 2.0 cables",
      "Because original hard drives can only be booted once",
      "Because Python cannot read SATA hard drives directly"
    ],
    correctAnswer: 0,
    explanation: "Booting or examining original media alters metadata, access timestamps, and temporary files. Forensic examiners use hardware write-blockers to create exact bitstream images for analysis.",
    officialRef: "PCES-30-01 Block 1.5 - Digital Forensics",
    tags: ["forensic-imaging", "evidence-integrity", "write-blocker"]
  },
  {
    id: "pces-1-096",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Security Teamwork & Communication",
    difficulty: "Beginner",
    question: "During a major corporate ransomware incident, who should manage external communications with media and the public?",
    codeSnippet: "# Incident response communication plan\n# Individual technicians must NOT post updates to personal social media\n# Communications must be synchronized through designated Public Relations / Legal counsel",
    options: [
      "Any developer who is active on social media",
      "The designated communications / PR team and legal counsel in alignment with corporate incident response policy",
      "The external ransom negotiator only",
      "The server hardware manufacturer"
    ],
    correctAnswer: 1,
    explanation: "Unauthorized, contradictory statements damage credibility and increase legal liability. External public and press communication must be managed strictly by designated spokespersons.",
    officialRef: "PCES-30-01 Block 1.5 - Incident Communication",
    tags: ["incident-communication", "pr", "teamwork"]
  },
  {
    id: "pces-1-097",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Data Privacy & Anonymization",
    difficulty: "Intermediate",
    question: "What is the difference between 'Anonymization' and 'Pseudonymization' under privacy regulations?",
    codeSnippet: "# Privacy transformations\n# Pseudonymization: Replace 'Alice Smith' with 'User_8921' (reversible with lookup key)\n# Anonymization: Irreversibly strip all identifying linkages so data cannot be re-identified",
    options: [
      "Anonymization is permanently irreversible; Pseudonymization separates identity using a key or token and remains reversible",
      "Anonymization uses AES; Pseudonymization uses SHA-256",
      "Anonymization is forbidden by GDPR; Pseudonymization is required",
      "They are identical techniques with no legal difference"
    ],
    correctAnswer: 0,
    explanation: "Anonymized data is irreversibly destroyed of all identifying links and falls outside GDPR. Pseudonymized data replaces identifiers with pseudonyms but can be re-identified using a separate key.",
    officialRef: "PCES-30-01 Block 1.5 - Data Privacy",
    tags: ["anonymization", "pseudonymization", "gdpr"]
  },
  {
    id: "pces-1-098",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Incident Response Readiness",
    difficulty: "Beginner",
    question: "What is a 'Tabletop Exercise' in incident response readiness?",
    codeSnippet: "# Tabletop exercise simulation\n# Scenario: 'It is Friday 5 PM. The Active Directory domain controller is encrypting files with .locked extension. What does each team member do?'",
    options: [
      "A discussion-based simulation where team members walk through their roles and responses to a hypothetical cyber incident scenario",
      "Testing the physical weight capacity of wooden computer desks in the office",
      "A competitive video gaming tournament among network engineers",
      "Replacing network switch cables while sitting around a conference table"
    ],
    correctAnswer: 0,
    explanation: "Tabletop exercises gather key technical, legal, executive, and communications stakeholders to talk through hypothetical breach scenarios and test incident readiness without touching production systems.",
    officialRef: "PCES-30-01 Block 1.5 - Incident Readiness",
    tags: ["tabletop-exercise", "simulation", "preparedness"]
  },
  {
    id: "pces-1-099",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "Professional Ethics",
    difficulty: "Beginner",
    question: "If a security professional accidentally discovers a severe vulnerability in an unauthorized third-party system while performing personal browsing, what is the ethical course of action?",
    codeSnippet: "# Ethical response decision\n# Do NOT exploit, exfiltrate data, or run automated scanners\n# Notify the organization securely through their established vulnerability disclosure channel",
    options: [
      "Exploit the bug immediately to extract database records as proof",
      "Report the issue responsibly through the organization's official vulnerability disclosure or security contact without exploiting it",
      "Post the vulnerability details and exploit code to Reddit immediately",
      "Demand $10,000 in cryptocurrency before telling them where the flaw is"
    ],
    correctAnswer: 1,
    explanation: "Ethical guidelines dictate reporting the issue through official security contact channels (e.g. security.txt, responsible disclosure) without attempting further exploitation or demanding extortion.",
    officialRef: "PCES-30-01 Block 1.5 - Professional Ethics",
    tags: ["ethics", "disclosure", "professionalism"]
  },
  {
    id: "pces-1-100",
    track: 'pces',
    section: "Section 1",
    chapter: "1.5",
    category: "PCI-DSS Compliance",
    difficulty: "Beginner",
    question: "Which security compliance standard applies specifically to entities that store, process, or transmit cardholder payment data?",
    codeSnippet: "# Payment security standard check\n# Requires strict firewalling, encryption in transit and rest, and regular penetration testing",
    options: [
      "PCI-DSS (Payment Card Industry Data Security Standard)",
      "FERPA (Family Educational Rights and Privacy Act)",
      "FedRAMP (Federal Risk and Authorization Management Program)",
      "OSHA (Occupational Safety and Health Administration)"
    ],
    correctAnswer: 0,
    explanation: "PCI-DSS (Payment Card Industry Data Security Standard) is the global technical and operational standard required of all organizations handling credit card transactions and cardholder data.",
    officialRef: "PCES-30-01 Block 1.5 - PCI-DSS Compliance",
    tags: ["pci-dss", "cardholder-data", "compliance"]
  }
];
