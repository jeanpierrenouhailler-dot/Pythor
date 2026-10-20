import { SyllabusSection, Flashcard, CertificationTrackInfo } from '../types';
import { pcesSection1Flashcards } from './pcesSection1Flashcards';
import { pcesSection2Flashcards } from './pcesSection2Flashcards';
import { pcesSection3Flashcards } from './pcesSection3Flashcards';
import { pcesSection4Flashcards } from './pcesSection4Flashcards';

export const pcesTrackInfo: CertificationTrackInfo = {
  id: 'pces',
  code: 'PCES-30-01',
  name: 'Certified Entry-Level Security Specialist with Python',
  shortName: 'PCES',
  level: 'Entry-Level Security Specialist',
  officialRef: 'Python Institute PCES-30-01',
  totalSections: 4,
  durationMinutes: 45,
  questionCount: 40,
  passingScore: 70,
  description:
    'Validates foundational proficiency in cybersecurity principles, IT infrastructure hardening, threat analysis, and practical Python implementation for security operations, file integrity checking, network scanning, process auditing, and secure software development.',
};

export const pcesSyllabusSections: SyllabusSection[] = [
  {
    id: 'pces-section-1',
    number: 1,
    title: 'Security Essentials',
    weight: '22%',
    description:
      'Foundations of information security: The CIA Triad (Confidentiality, Integrity, Availability) and extended security concepts (Authenticity, Accountability, Non-repudiation); IT threat taxonomy, vulnerability management (CVE, CVSS, CWE), threat actors and motivations (Script Kiddies, APTs, Insiders, Hacktivists); common attack types and vectors (Phishing, Whaling, Ransomware, DoS/DDoS, MitM, Credential Stuffing, Typosquatting); incident fallout and quantitative/qualitative risk analysis (SLE, ARO, ALE, RTO, RPO); and legal, regulatory, and ethical standards (GDPR, CCPA, HIPAA, CFAA, ethical hacking boundaries, and NIST incident response phases).',
    chapters: [
      { id: '1.1', title: 'The CIA Triad & Expanded Security Model', cardCount: 20 },
      { id: '1.2', title: 'IT Threats, Vulnerabilities & Threat Actors', cardCount: 20 },
      { id: '1.3', title: 'Common Attack Types & Threat Vectors', cardCount: 20 },
      { id: '1.4', title: 'Impacts of Security Incidents & Risk Management', cardCount: 20 },
      { id: '1.5', title: 'Legal, Compliance & Incident Response Ethics', cardCount: 20 },
    ],
  },
  {
    id: 'pces-section-2',
    number: 2,
    title: 'IT Systems Security',
    weight: '27%',
    description:
      'Securing modern IT infrastructure: Core security principles and architecture (Zero Trust Architecture, Defense-in-Depth, Least Privilege, Fail-Secure defaults, Separation of Duties); System and OS hardening (CIS Benchmarks, host firewalls, file permissions, SUID hazards, Secure Boot, EDR, syslog); Network security fundamentals and protocols (OSI/TCP-IP models, TCP 3-way handshake, UDP, well-known ports, ARP spoofing, DNSSEC, NAT, stateful firewalls, TLS/SSL, IPsec VPNs); Authentication, authorization, and identity control (AAA, MFA/TOTP, RBAC, ABAC, MAC, DAC, NIST password guidelines, password salting/hashing, JWT tokens, OAuth 2.0); and Cloud and remote work security (Shared Responsibility Model, S3 bucket misconfigurations, IAM roles, SSH hardening, RDP risks, BYOD/MDM).',
    chapters: [
      { id: '2.1', title: 'Core Security Principles & Architecture', cardCount: 20 },
      { id: '2.2', title: 'System & OS Hardening', cardCount: 20 },
      { id: '2.3', title: 'Network Security Fundamentals & Protocols', cardCount: 20 },
      { id: '2.4', title: 'Authentication, Authorization & Access Control', cardCount: 20 },
      { id: '2.5', title: 'Cloud & Remote Work Security', cardCount: 20 },
    ],
  },
  {
    id: 'pces-section-3',
    number: 3,
    title: 'Python for Security Operations',
    weight: '29%',
    description:
      'Applying Python to security tasks and automated defensive operations: Ethical testing guidelines, scoping rules of engagement (ROE), and CLI development with argparse; Network scanning and socket programming with Python (socket module, connect vs connect_ex, socket timeouts, TCP connect scans, multi-threading with ThreadPoolExecutor, banner grabbing, python-nmap); System and process monitoring with psutil (process_iter, memory/CPU tracking, parent-child process lineage, listening ports, anomaly and reverse shell detection); File integrity verification with hashlib (SHA-256, chunked streaming for large files, baseline hash manifests, collision detection); and Security automation, subprocess execution (safe shell=False execution, timeouts, capture_output), structured reporting in JSON/CSV, Paramiko SSH automation, and TLS context verification.',
    chapters: [
      { id: '3.1', title: 'Ethical Testing, Scoping & Python Automation', cardCount: 20 },
      { id: '3.2', title: 'Network Scanning & Socket Programming with Python', cardCount: 20 },
      { id: '3.3', title: 'System & Process Monitoring with psutil', cardCount: 20 },
      { id: '3.4', title: 'File Integrity Verification with hashlib', cardCount: 20 },
      { id: '3.5', title: 'Security Automation, Subprocess & Structured Reporting', cardCount: 20 },
    ],
  },
  {
    id: 'pces-section-4',
    number: 4,
    title: 'Secure Development & Implementation in Python',
    weight: '22%',
    description:
      'Writing secure, resilient Python software: Secure SDLC principles (Shift-Left, peer code reviews, SAST with bandit, dependency checking with pip-audit, evil user stories); Injection vulnerabilities and defenses (SQL injection in sqlite3 and parameterized queries, OS command injection in subprocess and shell=False, Path Traversal and pathlib sandboxing, LDAP/XPath injection); Insecure deserialization and unsafe operations (pickle RCE dangers and __reduce__, safe JSON/YAML loading with yaml.safe_load, XXE prevention with defusedxml, hazards of eval/exec and safe ast.literal_eval); Data anonymization and log sanitization (PII protection, credit card masking, regex redaction, log forging/injection defense, pseudonymization vs anonymization); and Cryptographic best practices in Python (secrets module vs pseudo-random random, Fernet authenticated symmetric encryption, password hashing with bcrypt and Argon2, timing attack defense with hmac.compare_digest).',
    chapters: [
      { id: '4.1', title: 'Secure Software Development Lifecycle & Code Review', cardCount: 20 },
      { id: '4.2', title: 'Injection Vulnerabilities & Path Traversal', cardCount: 20 },
      { id: '4.3', title: 'Insecure Deserialization & Unsafe Operations', cardCount: 20 },
      { id: '4.4', title: 'Data Anonymization, Log Sanitization & PII Protection', cardCount: 20 },
      { id: '4.5', title: 'Cryptographic Best Practices & Security Libraries', cardCount: 20 },
    ],
  },
];

export const pcesAllFlashcards: Flashcard[] = [
  ...pcesSection1Flashcards,
  ...pcesSection2Flashcards,
  ...pcesSection3Flashcards,
  ...pcesSection4Flashcards,
];
