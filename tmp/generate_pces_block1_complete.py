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

# Load cards 1-50 from previous script
exec(open("tmp/make_pces_block1_full.py", "r", encoding="utf-8").read())

# Cards 51-60: Cryptography Continued
cards.extend([
    {
        "id": "pces-1-051",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Intermediate",
        "question": "What is the primary operational advantage of Elliptic Curve Cryptography (ECC) compared to traditional RSA?",
        "codeSnippet": "# Key strength comparison:\n# RSA 3072-bit key provides ~128-bit security level\n# ECC 256-bit key provides equivalent ~128-bit security level with much smaller key size & faster compute",
        "options": [
            "ECC is a symmetric cipher while RSA is asymmetric",
            "ECC provides equivalent cryptographic security with much smaller key sizes, reducing compute and bandwidth overhead",
            "ECC cannot be processed by quantum computers",
            "ECC eliminates the need for initialization vectors"
        ],
        "correctAnswer": 1,
        "explanation": "ECC offers equivalent cryptographic security to RSA with significantly smaller key lengths (e.g., a 256-bit ECC key matches a 3072-bit RSA key), dramatically reducing computational load, power, and storage requirements.",
        "officialRef": "PCES-30-01 Block 1.3 - Asymmetric Cryptography & ECC",
        "tags": ["ecc", "rsa", "asymmetric-ciphers", "key-size"]
    },
    {
        "id": "pces-1-052",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Intermediate",
        "question": "How does a 'Hybrid Cryptosystem' (such as TLS/HTTPS) combine symmetric and asymmetric cryptography?",
        "codeSnippet": "# Hybrid Cryptosystem workflow:\n# Step 1: Client and Server use asymmetric crypto (RSA or ECDHE) to securely agree on a shared session key\n# Step 2: Bulk application payload data is encrypted with fast symmetric cipher (AES-GCM)",
        "options": [
            "It hashes passwords with MD5 and signs them with SHA-256",
            "It uses asymmetric encryption to securely exchange a symmetric key, then uses symmetric encryption for fast bulk data transfer",
            "It runs two simultaneous firewalls on the client and server",
            "It splits files into halves and encrypts half with DES and half with 3DES"
        ],
        "correctAnswer": 1,
        "explanation": "Asymmetric cryptography is computationally expensive for large payloads. Hybrid cryptosystems use asymmetric encryption for key exchange / authentication and fast symmetric encryption (like AES) for encrypting the actual payload stream.",
        "officialRef": "PCES-30-01 Block 1.3 - Hybrid Cryptosystems",
        "tags": ["hybrid-cryptosystem", "tls", "key-exchange"]
    },
    {
        "id": "pces-1-053",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Intermediate",
        "question": "What is the primary function of the Diffie-Hellman (DH) key exchange protocol?",
        "codeSnippet": "# Diffie-Hellman Key Exchange:\n# Alice and Bob compute shared secret over insecure public channel\n# without either party ever transmitting the secret key across the wire",
        "options": [
            "To encrypt stored database records on a hard drive",
            "To enable two parties to establish a shared secret key over an untrusted public communication channel",
            "To verify user biometric fingerprints against an active directory",
            "To compress log archives before transmission"
        ],
        "correctAnswer": 1,
        "explanation": "Diffie-Hellman allows two parties that have no prior knowledge of each other to jointly establish a shared secret key over an insecure channel, which can subsequently be used for symmetric encryption.",
        "officialRef": "PCES-30-01 Block 1.3 - Key Exchange Protocols",
        "tags": ["diffie-hellman", "key-exchange", "cryptography"]
    },
    {
        "id": "pces-1-054",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Intermediate",
        "question": "What is an Online Certificate Status Protocol (OCSP) query used for in TLS certificate validation?",
        "codeSnippet": "# OCSP verification check\n# Client queries CA OCSP responder: 'Is certificate serial number X still valid or revoked?'\n# Responder returns: 'Good', 'Revoked', or 'Unknown'",
        "options": [
            "To download the latest Python security patches",
            "To check the real-time revocation status of an X.509 digital certificate",
            "To encrypt DNS requests over TLS (DoT)",
            "To sign git commits cryptographically"
        ],
        "correctAnswer": 1,
        "explanation": "OCSP is an internet protocol used by clients to query a Certificate Authority in real time to verify whether a given digital certificate has been revoked prior to its scheduled expiration date.",
        "officialRef": "PCES-30-01 Block 1.3 - Certificate Validation & Revocation",
        "tags": ["ocsp", "pki", "certificate-revocation"]
    },
    {
        "id": "pces-1-055",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Intermediate",
        "question": "What is 'OCSP Stapling' and what problem does it solve?",
        "codeSnippet": "# OCSP Stapling:\n# Web server periodically queries CA for a signed OCSP response\n# Server 'staples' this cached signed response directly into the TLS handshake with clients",
        "options": [
            "It saves client browser passwords to an encrypted SQLite database",
            "The web server caches the CA's signed revocation response and delivers it during the TLS handshake, improving privacy and reducing CA query load",
            "It merges the public key and private key into a single unencrypted PEM file",
            "It staples multiple TLS certificates together into a single master root"
        ],
        "correctAnswer": 1,
        "explanation": "OCSP Stapling delegates revocation fetching to the web server, which attaches a time-stamped, CA-signed OCSP response directly to the TLS handshake. This improves client connection latency, eliminates client privacy leaks to the CA, and prevents CA server overload.",
        "officialRef": "PCES-30-01 Block 1.3 - OCSP Stapling",
        "tags": ["ocsp-stapling", "tls", "performance", "privacy"]
    },
    {
        "id": "pces-1-056",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Beginner",
        "question": "What is a Certificate Revocation List (CRL)?",
        "codeSnippet": "# CRL structure:\n# A digitally signed file published periodically by a CA\n# Contains a list of serial numbers of certificates that have been prematurely invalidated",
        "options": [
            "A list of expired web domains available for purchase",
            "A regularly updated, digitally signed blacklist of revoked certificates issued by a Certificate Authority",
            "A dictionary of compromised passwords used for offline cracking",
            "A system log file tracking successful user logins"
        ],
        "correctAnswer": 1,
        "explanation": "A CRL (Certificate Revocation List) is a timestamped, signed file published periodically by a Certificate Authority enumerating certificate serial numbers that have been revoked before their expiration date.",
        "officialRef": "PCES-30-01 Block 1.3 - Certificate Revocation",
        "tags": ["crl", "pki", "revocation"]
    },
    {
        "id": "pces-1-057",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Intermediate",
        "question": "What is a 'Collision' in the context of cryptographic hash functions?",
        "codeSnippet": "# Hash collision condition:\n# message_A != message_B\n# BUT: hash_function(message_A) == hash_function(message_B)",
        "options": [
            "When two network packets collide on a half-duplex Ethernet segment",
            "When two different input plaintexts produce the exact same output hash digest",
            "When two users choose the same username in a registration form",
            "When an encryption key matches a decryption key in asymmetric crypto"
        ],
        "correctAnswer": 1,
        "explanation": "A hash collision occurs when two distinct, different input messages produce the identical hash digest. A strong cryptographic hash function must be collision-resistant.",
        "officialRef": "PCES-30-01 Block 1.3 - Cryptographic Hash Properties",
        "tags": ["hash-collision", "integrity", "cryptanalysis"]
    },
    {
        "id": "pces-1-058",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Intermediate",
        "question": "What is the minimum recommended key size for RSA to ensure security against modern factoring attacks?",
        "codeSnippet": "# Generating secure RSA key in Python\nfrom cryptography.hazmat.primitives.asymmetric import rsa\nprivate_key = rsa.generate_private_key(\n    public_exponent=65537,\n    key_size=2048  # 2048 bits is minimum recommended; 3072 or 4096 preferred\n)",
        "options": [
            "128 bits",
            "512 bits",
            "2048 bits",
            "64 bits"
        ],
        "correctAnswer": 2,
        "explanation": "NIST and industry standards mandate a minimum key length of 2048 bits for RSA (with 3072-bit or 4096-bit recommended for long-term protection). 512-bit and 1024-bit RSA keys are broken and insecure.",
        "officialRef": "PCES-30-01 Block 1.3 - Key Lengths & Security Levels",
        "tags": ["rsa", "key-length", "nist-standards"]
    },
    {
        "id": "pces-1-059",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Intermediate",
        "question": "What is Authenticated Encryption with Associated Data (AEAD), such as AES-GCM?",
        "codeSnippet": "# AES-GCM provides both encryption (confidentiality) and authentication tag (integrity)\nfrom cryptography.hazmat.primitives.ciphers.aead import AESGCM\naesgcm = AESGCM(key)\n# Any tampering with ct or aad will raise InvalidTag on decrypt\nct = aesgcm.encrypt(nonce, b'Confidential Payload', associated_data=b'Header:Metadata')",
        "options": [
            "A method to encrypt data using only public keys",
            "A cryptographic scheme that simultaneously guarantees both confidentiality and ciphertext authenticity/integrity",
            "A protocol that sends passwords over cleartext HTTP",
            "A mechanism that compresses data before storing on disk"
        ],
        "correctAnswer": 1,
        "explanation": "AEAD (e.g. AES-GCM, ChaCha20-Poly1305) provides both confidentiality (encryption) and data integrity/authenticity (authentication tag) in a single integrated cryptographic operation.",
        "officialRef": "PCES-30-01 Block 1.3 - Authenticated Encryption (AEAD)",
        "tags": ["aead", "aes-gcm", "integrity", "confidentiality"]
    },
    {
        "id": "pces-1-060",
        "section": "Section 1",
        "chapter": "1.3",
        "category": "Cryptography",
        "difficulty": "Intermediate",
        "question": "Why is ECB (Electronic Codebook) mode strictly forbidden for encrypting multi-block data with AES?",
        "codeSnippet": "# ECB Mode flaw:\n# Identical 16-byte plaintext blocks produce identical ciphertext blocks\n# Plaintext patterns (e.g., bitmap images, structured JSON) remain visible in ciphertext",
        "options": [
            "It requires an asymmetric public key to run",
            "It encrypts identical plaintext blocks into identical ciphertext blocks, leaking structural data patterns",
            "It is restricted solely to military hardware",
            "It operates 100 times slower than CBC mode"
        ],
        "correctAnswer": 1,
        "explanation": "In ECB mode, each plaintext block is encrypted independently with the same key. Identical plaintext blocks produce identical ciphertext blocks, completely leaking underlying data structures and patterns.",
        "officialRef": "PCES-30-01 Block 1.3 - Block Cipher Modes",
        "tags": ["ecb-mode", "block-ciphers", "cipher-modes"]
    }
])

# =========================================================================
# CHAPTER 1.4: Identity, Authentication & Access Control (Cards 61-80)
# =========================================================================
cards.extend([
    {
        "id": "pces-1-061",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Authentication",
        "difficulty": "Beginner",
        "question": "What are the three classical factors of authentication?",
        "codeSnippet": "# Authentication Factors Taxonomy:\n# Factor 1: Knowledge (Something you know)\n# Factor 2: Possession (Something you have)\n# Factor 3: Inherence (Something you are)",
        "options": [
            "Something you know, something you have, something you are",
            "Something you want, something you buy, something you send",
            "Username, password, and email address",
            "Public key, private key, and session token"
        ],
        "correctAnswer": 0,
        "explanation": "The three classical authentication factors are: Knowledge (something you know: password/PIN), Possession (something you have: smartcard/token), and Inherence (something you are: biometric fingerprint/iris).",
        "officialRef": "PCES-30-01 Block 1.4 - Multi-Factor Authentication",
        "tags": ["mfa", "authentication-factors", "identity"]
    },
    {
        "id": "pces-1-062",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Authentication",
        "difficulty": "Intermediate",
        "question": "Entering a password and then entering a temporary PIN sent via email is an example of what?",
        "codeSnippet": "# Analysis: Password = Something you know; Email PIN = Knowledge factor delivered over network\n# If both rely on 'something you know', is it true two-factor authentication?",
        "options": [
            "True Multi-Factor Authentication (MFA)",
            "Two-Step Verification (Two instances of 'Something you know'), not distinct physical possession factors",
            "Biometric Inherence Authentication",
            "Zero Trust Mutual TLS"
        ],
        "correctAnswer": 1,
        "explanation": "True MFA requires combining at least two distinct factor categories (Knowledge + Possession, or Knowledge + Inherence). A password plus an email code is technically two-step verification of knowledge, though often marketed colloquially as 2FA.",
        "officialRef": "PCES-30-01 Block 1.4 - Multi-Factor Authentication",
        "tags": ["2fa", "two-step-verification", "authentication"]
    },
    {
        "id": "pces-1-063",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Password Security",
        "difficulty": "Beginner",
        "question": "What is the purpose of adding a cryptographic 'Salt' before hashing a user password?",
        "codeSnippet": "import hashlib, os\nsalt = os.urandom(16)  # Unique random salt per user\npassword = b'MySecretPassword123'\n# Hash includes salt: prevents precomputed rainbow table attacks\nhashed = hashlib.pbkdf2_hmac('sha256', password, salt, 100000)",
        "options": [
            "To encrypt the password so the system administrator can recover it later",
            "To ensure identical passwords generate completely different hashes and defeat precomputed Rainbow Table attacks",
            "To compress the password string to under 8 characters",
            "To send the password securely across an unencrypted HTTP connection"
        ],
        "correctAnswer": 1,
        "explanation": "A salt is a unique, random string added to passwords before hashing. It ensures that two users with identical passwords have different hash digests, completely neutralizing precomputed lookup attacks (Rainbow Tables).",
        "officialRef": "PCES-30-01 Block 1.4 - Password Storage & Salting",
        "tags": ["salt", "password-hashing", "rainbow-tables"]
    },
    {
        "id": "pces-1-064",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Password Security",
        "difficulty": "Intermediate",
        "question": "What is a 'Rainbow Table' in password cracking?",
        "codeSnippet": "# Precomputed hash lookup:\n# Hash -> Reduction Function -> Plaintext chain\n# Allows instantaneous reverse lookup of unsalted hashes",
        "options": [
            "A colorful graphical user interface for password reset forms",
            "A precomputed table of cryptographic hash chains used to reverse unsalted password hashes quickly without brute-forcing",
            "A database of rainbow-colored CAPTCHA images",
            "A list of default Wi-Fi passwords supplied by router manufacturers"
        ],
        "correctAnswer": 1,
        "explanation": "A Rainbow Table is a precomputed table of cryptographically reversed hash chains that allows attackers to crack unsalted password hashes in seconds. Proper random salting renders rainbow tables obsolete.",
        "officialRef": "PCES-30-01 Block 1.4 - Password Cracking Techniques",
        "tags": ["rainbow-table", "cryptanalysis", "salting"]
    },
    {
        "id": "pces-1-065",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Password Security",
        "difficulty": "Intermediate",
        "question": "Which of the following functions is a secure, deliberately slow Key Derivation Function (KDF) designed specifically for password storage?",
        "codeSnippet": "# Why not standard SHA-256 for passwords?\n# SHA-256 is designed to be FAST (billions/sec on GPU/ASIC).\n# Password KDFs (bcrypt, Argon2, PBKDF2) are deliberately SLOW and memory-hard.",
        "options": [
            "MD5",
            "Argon2 (or bcrypt / PBKDF2)",
            "CRC32",
            "Base64"
        ],
        "correctAnswer": 1,
        "explanation": "Argon2, bcrypt, and PBKDF2 are slow, resource-intensive Key Derivation Functions with tunable work factors (computational and memory hardness) specifically designed to resist offline GPU/ASIC brute-force attacks.",
        "officialRef": "PCES-30-01 Block 1.4 - Secure Password Hashing",
        "tags": ["argon2", "bcrypt", "pbkdf2", "kdf"]
    },
    {
        "id": "pces-1-066",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Authentication",
        "difficulty": "Intermediate",
        "question": "How does a Time-Based One-Time Password (TOTP, RFC 6238) algorithm generate 6-digit codes on mobile authenticator apps (e.g. Google Authenticator)?",
        "codeSnippet": "# TOTP concept:\n# Inputs: Shared secret key K + Current Unix time divided by time step (30s)\n# Counter C = floor(time.time() / 30)\n# TOTP = Truncate(HMAC-SHA1(K, C)) % 10^6",
        "options": [
            "The app sends an SMS to the server every 30 seconds to fetch the code",
            "The server and app independently compute an HMAC using a shared secret key and the current 30-second time window counter",
            "The app scans nearby Wi-Fi beacons to verify proximity",
            "The app decrypts the user password using RSA"
        ],
        "correctAnswer": 1,
        "explanation": "TOTP generates 6-digit codes by taking a shared secret key and the current time step counter (typically 30 seconds) and computing an HMAC hash, then truncating it. No network connection is needed by the authenticator app.",
        "officialRef": "PCES-30-01 Block 1.4 - One-Time Passwords & TOTP",
        "tags": ["totp", "rfc-6238", "mfa", "hmac"]
    },
    {
        "id": "pces-1-067",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Identity Federation",
        "difficulty": "Intermediate",
        "question": "What is the primary role of OAuth 2.0 in modern web applications?",
        "codeSnippet": "# OAuth 2.0 Authorization grant:\n# App requests access to user's Google Calendar without receiving the user's Google password\n# Google returns an access_token with scoped permissions",
        "options": [
            "To encrypt hard drive partitions with AES-256",
            "An authorization framework that allows third-party applications to obtain limited access to user resources without sharing user passwords",
            "A protocol for sending encrypted emails over SMTP",
            "A hashing algorithm for credit card transactions"
        ],
        "correctAnswer": 1,
        "explanation": "OAuth 2.0 is an authorization framework that delegates access. It allows a resource owner to authorize third-party applications to access their resources (via scoped access tokens) without disclosing their credentials.",
        "officialRef": "PCES-30-01 Block 1.4 - Federation & OAuth 2.0",
        "tags": ["oauth2", "authorization", "tokens"]
    },
    {
        "id": "pces-1-068",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Identity Federation",
        "difficulty": "Intermediate",
        "question": "What layer does OpenID Connect (OIDC) add on top of the OAuth 2.0 framework?",
        "codeSnippet": "# OIDC = Authentication layer built on OAuth 2.0\n# OAuth 2.0 provides: access_token (Authorization)\n# OIDC adds: id_token (Authentication / Identity assertion formatted as a signed JWT)",
        "options": [
            "Symmetric database encryption",
            "An identity and authentication layer that issues an ID Token (JWT) verifying the user's identity",
            "Hardware biometric verification",
            "Network firewall packet filtering"
        ],
        "correctAnswer": 1,
        "explanation": "While OAuth 2.0 is designed for authorization, OpenID Connect (OIDC) extends it by adding an authentication layer. It provides clients with a cryptographically signed ID Token (in JWT format) confirming the user's identity.",
        "officialRef": "PCES-30-01 Block 1.4 - OpenID Connect & SSO",
        "tags": ["oidc", "oauth2", "jwt", "authentication"]
    },
    {
        "id": "pces-1-069",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Identity Federation",
        "difficulty": "Intermediate",
        "question": "What are the three core components of a JSON Web Token (JWT)?",
        "codeSnippet": "# JWT format: base64(header).base64(payload).base64(signature)\ntoken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTYifQ.sflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'",
        "options": [
            "Username, Password, Salt",
            "Header, Payload, Signature",
            "Symmetric key, Asymmetric key, Hash",
            "Public key, Private key, Certificate"
        ],
        "correctAnswer": 1,
        "explanation": "A JWT consists of three parts separated by dots (.): Header (algorithm & token type), Payload (claims & identity data), and Signature (cryptographic verification hash or digital signature).",
        "officialRef": "PCES-30-01 Block 1.4 - Token Security & JWT",
        "tags": ["jwt", "tokens", "identity"]
    },
    {
        "id": "pces-1-070",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Identity Federation",
        "difficulty": "Intermediate",
        "question": "What is Single Sign-On (SSO)?",
        "codeSnippet": "# SSO Architecture:\n# User authenticates ONCE at Identity Provider (IdP) (e.g. Okta, Azure AD)\n# User gains access to multiple Service Providers (Slack, Jira, GitHub, AWS) without re-authenticating",
        "options": [
            "Restricting users to only one single password attempt before permanent ban",
            "An authentication scheme that allows a user to log in with a single set of credentials and access multiple related independent systems",
            "Using one single password for all personal and corporate email accounts",
            "A single-user operating system configuration"
        ],
        "correctAnswer": 1,
        "explanation": "Single Sign-On (SSO) centralizes authentication at an Identity Provider (IdP), allowing users to authenticate once and access multiple authorized services without entering credentials repeatedly.",
        "officialRef": "PCES-30-01 Block 1.4 - Single Sign-On",
        "tags": ["sso", "identity-provider", "access-management"]
    },
    {
        "id": "pces-1-071",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Authentication",
        "difficulty": "Intermediate",
        "question": "Why is SMS-based two-factor authentication considered less secure than hardware security keys (FIDO2 / WebAuthn)?",
        "codeSnippet": "# Threats to SMS 2FA:\n# 1. SIM Swapping (attacker tricks telecom carrier into porting victim's phone number)\n# 2. SS7 cellular protocol interception\n# 3. Phishing sites proxying OTP codes in real time",
        "options": [
            "SMS messages are limited to 160 characters",
            "SMS is vulnerable to SIM-swapping, SS7 protocol interception, and real-time reverse proxy phishing attacks",
            "SMS requires an active Bluetooth connection",
            "SMS tokens expire within 2 seconds of transmission"
        ],
        "correctAnswer": 1,
        "explanation": "SMS authentication is susceptible to SIM swapping (social engineering carriers to take over victim numbers), SS7 network eavesdropping, and proxy phishing. FIDO2 hardware keys cryptographically bind to the domain, preventing phishing.",
        "officialRef": "PCES-30-01 Block 1.4 - MFA Weaknesses & FIDO2",
        "tags": ["sms-2fa", "sim-swapping", "fido2", "mfa"]
    },
    {
        "id": "pces-1-072",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Access Control",
        "difficulty": "Beginner",
        "question": "In access control, what is the fundamental distinction between Authentication and Authorization?",
        "codeSnippet": "# AuthN vs AuthZ:\ndef handle_request(req):\n    user = authenticate(req.token)       # AuthN: 'Who are you?'\n    if not authorize(user, 'admin_panel'): # AuthZ: 'What are you permitted to do?'\n        raise PermissionError('Forbidden')",
        "options": [
            "Authentication validates identity ('Who are you?'); Authorization determines permissions ('What can you access?')",
            "Authentication encrypts files; Authorization deletes them",
            "Authentication is for networks; Authorization is for databases",
            "They are exact synonyms under NIST 800-63"
        ],
        "correctAnswer": 0,
        "explanation": "Authentication (AuthN) verifies the identity of a subject ('Who are you?'). Authorization (AuthZ) checks whether the authenticated subject has permission to access a specific resource or perform an action ('What are you allowed to do?').",
        "officialRef": "PCES-30-01 Block 1.4 - Authentication vs Authorization",
        "tags": ["authn", "authz", "access-control"]
    },
    {
        "id": "pces-1-073",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Password Security",
        "difficulty": "Intermediate",
        "question": "What is password 'Entropy' and why does pass-phrase length contribute more to security than character complexity alone?",
        "codeSnippet": "# Password Entropy calculation:\n# E = L * log2(R)\n# Short complex (8 chars, mixed): 8 * log2(94) = ~52.4 bits\n# Long passphrase (4 words, 20 chars): 20 * log2(26) = ~94 bits (drastically harder to crack)",
        "options": [
            "Entropy measures how quickly a password expires in the database",
            "Entropy measures the unpredictability and information density of a password; increasing length exponentially expands the search space against brute-force",
            "Entropy is the physical heat generated by the CPU while hashing",
            "Entropy counts the number of vowel characters in a string"
        ],
        "correctAnswer": 1,
        "explanation": "Password entropy quantifies unpredictable randomness (in bits). Because combinatorial search space scales exponentially with string length, longer passphrases provide vastly higher entropy and resistance to cracking than short, complex passwords.",
        "officialRef": "PCES-30-01 Block 1.4 - Password Entropy & Guidelines",
        "tags": ["entropy", "passwords", "nist-guidelines"]
    },
    {
        "id": "pces-1-074",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Password Security",
        "difficulty": "Intermediate",
        "question": "What is the NIST Special Publication 800-63B recommendation regarding arbitrary mandatory password rotation periods (e.g. forcing resets every 60 or 90 days)?",
        "codeSnippet": "# Modern NIST 800-63B guidelines:\n# Periodic forced password rotation without evidence of compromise leads to predictable patterns\n# (e.g., 'Spring2026!' -> 'Summer2026!') and is discouraged",
        "options": [
            "Passwords must be forcibly rotated every 15 days",
            "Arbitrary periodic password changes are discouraged unless there is evidence of an actual breach or compromise",
            "All passwords must be published in employee directories",
            "Users must never be allowed to change passwords once set"
        ],
        "correctAnswer": 1,
        "explanation": "NIST SP 800-63B advises against periodic forced password changes without reason. Frequent forced changes encourage users to select predictable patterns or write them down. Passwords should be changed only upon evidence of compromise.",
        "officialRef": "PCES-30-01 Block 1.4 - NIST Password Guidelines",
        "tags": ["nist-800-63b", "password-rotation", "best-practices"]
    },
    {
        "id": "pces-1-075",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Password Security",
        "difficulty": "Intermediate",
        "question": "What is a 'Pepper' in password storage, and how does it differ from a 'Salt'?",
        "codeSnippet": "# Salt vs Pepper:\n# Salt: Stored directly alongside hash in database per user\n# Pepper: Secret key stored SEPARATELY (e.g. in Hardware Security Module or environment variable)\ncombined = password + salt + PEPPER_SECRET\nhash_val = hashlib.sha256(combined).hexdigest()",
        "options": [
            "A pepper is an unencrypted text file with all passwords",
            "A pepper is a secret cryptographic value stored separately from the database (e.g. in an HSM or KMS) and combined with the password and salt before hashing",
            "A pepper is public while a salt is private",
            "A pepper is only used with symmetric encryption algorithms"
        ],
        "correctAnswer": 1,
        "explanation": "While a salt is stored openly next to the hash in the database, a pepper is a secret key kept in a separate secure store (such as an HSM or environment secret). If the database is leaked, hashes cannot be cracked without the external pepper.",
        "officialRef": "PCES-30-01 Block 1.4 - Salts and Peppers",
        "tags": ["pepper", "salt", "password-storage"]
    },
    {
        "id": "pces-1-076",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Authentication",
        "difficulty": "Intermediate",
        "question": "What is a 'Side-Channel Timing Attack' against password or token verification, and how is it prevented in Python?",
        "codeSnippet": "# Vulnerable string comparison:\n# if user_token == correct_token:  # Returns False immediately on first mismatched byte! Leaks timing!\n\n# Secure constant-time comparison:\nimport hmac\nif hmac.compare_digest(user_token, correct_token):\n    grant_access()",
        "options": [
            "An attack that alters the system BIOS clock",
            "An attack that measures microscopic variations in CPU execution time during string comparison to deduce secret characters; prevented with hmac.compare_digest()",
            "An attack that floods the network card with NTP synchronization packets",
            "An attack that reads residual CRT monitor emissions"
        ],
        "correctAnswer": 1,
        "explanation": "Standard string equality (`==`) exits early on the first mismatched byte, creating timing discrepancies an attacker can measure to determine the secret character-by-character. `hmac.compare_digest()` executes in constant time.",
        "officialRef": "PCES-30-01 Block 1.4 - Timing Attacks & Mitigation",
        "tags": ["timing-attack", "compare-digest", "side-channel"]
    },
    {
        "id": "pces-1-077",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Identity",
        "difficulty": "Intermediate",
        "question": "What standard security token format does SAML 2.0 utilize for exchanging authentication assertions between an Identity Provider and a Service Provider?",
        "codeSnippet": "# SAML 2.0 Assertion structure:\n# <saml:Assertion xmlns:saml='urn:oasis:names:tc:SAML:2.0:assertion' ...>\n#   <saml:Issuer>https://idp.company.com</saml:Issuer>\n#   <saml:Subject>alice@company.com</saml:Subject>\n# </saml:Assertion>",
        "options": [
            "JSON (JavaScript Object Notation)",
            "XML (eXtensible Markup Language)",
            "YAML (YAML Ain't Markup Language)",
            "Protocol Buffers (Protobuf)"
        ],
        "correctAnswer": 1,
        "explanation": "SAML 2.0 (Security Assertion Markup Language) is an XML-based open standard for exchanging authentication and authorization data between an Identity Provider (IdP) and a Service Provider (SP).",
        "officialRef": "PCES-30-01 Block 1.4 - SAML & Enterprise Identity",
        "tags": ["saml", "xml", "sso", "identity"]
    },
    {
        "id": "pces-1-078",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Authentication",
        "difficulty": "Intermediate",
        "question": "What is the vulnerability known as 'Pass-the-Hash' (PtH) in Windows Active Directory environments?",
        "codeSnippet": "# Pass-the-Hash exploitation:\n# Attacker extracts NTLM hash from LSASS memory\n# Authenticates to lateral servers using the hash DIRECTLY without needing plaintext password",
        "options": [
            "Passing an invalid hash to a Python compiler",
            "An attack where an adversary captures an NTLM password hash and reuses it directly to authenticate to remote services without cracking the plaintext password",
            "A flaw in the SHA-256 algorithm that permits hash duplication",
            "Sharing hashing algorithms over public GitHub repositories"
        ],
        "correctAnswer": 1,
        "explanation": "Pass-the-Hash allows an attacker who has dumped NTLM hashes from memory (e.g. LSASS) to authenticate directly to other network systems using the NTLM hash itself, bypassing the need to crack the cleartext password.",
        "officialRef": "PCES-30-01 Block 1.4 - Windows Authentication Attacks",
        "tags": ["pass-the-hash", "ntlm", "active-directory"]
    },
    {
        "id": "pces-1-079",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Authentication",
        "difficulty": "Beginner",
        "question": "Which of the following is a biometric authentication factor (Something you are)?",
        "codeSnippet": "# Biometric authentication evaluation\n# Modalities: Fingerprint, Facial Recognition, Retina scan, Iris scan, Voiceprint",
        "options": [
            "A 16-character alphanumeric password",
            "An RSA SecurID hardware token",
            "A capacitive fingerprint or facial scan",
            "An email verification link"
        ],
        "correctAnswer": 2,
        "explanation": "Biometrics rely on physical or physiological human characteristics (something you are), including fingerprint patterns, facial geometry, iris/retina patterns, and voiceprints.",
        "officialRef": "PCES-30-01 Block 1.4 - Biometrics",
        "tags": ["biometrics", "authentication", "identity"]
    },
    {
        "id": "pces-1-080",
        "section": "Section 1",
        "chapter": "1.4",
        "category": "Authentication",
        "difficulty": "Intermediate",
        "question": "What is the primary risk of using 'Security Questions' (e.g. 'What was your mother's maiden name?') for account password recovery?",
        "codeSnippet": "# Flaws of Knowledge-Based Authentication (KBA):\n# Answers to security questions are frequently discoverable via OSINT, genealogy records, or social media",
        "options": [
            "They require too much database storage space",
            "The answers often constitute static public knowledge that can be harvested through Open Source Intelligence (OSINT) or social media",
            "They are encrypted with symmetric keys that expire daily",
            "Web browsers automatically disable security question fields"
        ],
        "correctAnswer": 1,
        "explanation": "Knowledge-Based Authentication (security questions) relies on data (first pet, high school, maiden name) that is easily found via public records, social media scraping, or direct social engineering.",
        "officialRef": "PCES-30-01 Block 1.4 - Account Recovery & KBA Risks",
        "tags": ["security-questions", "osint", "account-recovery"]
    }
])

# =========================================================================
# CHAPTER 1.5: Security Economics, Governance, Legal & Ethics (Cards 81-100)
# =========================================================================
cards.extend([
    {
        "id": "pces-1-081",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Disaster Recovery",
        "difficulty": "Intermediate",
        "question": "In Business Continuity and Disaster Recovery (BCDR), what does Recovery Time Objective (RTO) define?",
        "codeSnippet": "# BCDR Metrics:\n# System outage occurs at 10:00 AM\n# RTO = 2 Hours -> System MUST be restored and operational by 12:00 PM\n# RPO = 15 Minutes -> Maximum tolerable data loss is 15 minutes of transactions",
        "options": [
            "The maximum acceptable amount of data loss measured in time",
            "The targeted maximum acceptable duration of time within which a system must be restored after a disaster or disruption",
            "The total financial cost of replacing damaged hardware",
            "The percentage of employees who survive a facility disaster"
        ],
        "correctAnswer": 1,
        "explanation": "RTO (Recovery Time Objective) is the maximum acceptable duration of time that a system, network, or application can remain offline after a disaster before severe business impact occurs.",
        "officialRef": "PCES-30-01 Block 1.5 - Business Continuity & Disaster Recovery",
        "tags": ["rto", "bcdr", "disaster-recovery"]
    },
    {
        "id": "pces-1-082",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Disaster Recovery",
        "difficulty": "Intermediate",
        "question": "In Business Continuity and Disaster Recovery, what does Recovery Point Objective (RPO) define?",
        "codeSnippet": "# Measuring allowable data loss:\n# Database crashes at 04:00 PM\n# Backups run every hour on the hour (last backup at 03:00 PM)\n# If RPO is 30 minutes, 1 hour of data loss VIOLATES the RPO threshold",
        "options": [
            "The geographical coordinates of the secondary backup datacenter",
            "The maximum acceptable age of files or transactions that must be recovered from backup storage (i.e. maximum tolerable data loss)",
            "The return on investment (ROI) of security training",
            "The number of security analysts assigned to an incident"
        ],
        "correctAnswer": 1,
        "explanation": "RPO (Recovery Point Objective) determines the maximum acceptable amount of data loss measured in time backward from the incident. It dictates how frequently backups and data replication must occur.",
        "officialRef": "PCES-30-01 Block 1.5 - Business Continuity & RPO",
        "tags": ["rpo", "backups", "disaster-recovery"]
    },
    {
        "id": "pces-1-083",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Data Governance",
        "difficulty": "Beginner",
        "question": "Why is 'Data Classification' foundational to implementing effective data protection controls?",
        "codeSnippet": "# Data Classification Tiers:\n# Tier 1: Public (Marketing brochures, public blogs)\n# Tier 2: Internal (Company policies, intranet memos)\n# Tier 3: Confidential (Financial reports, employee records)\n# Tier 4: Restricted / Secret (Source code, trade secrets, encryption keys)",
        "options": [
            "It allows sorting files in alphabetical order in file explorers",
            "It enables organizations to apply proportionate security and encryption controls based on the sensitivity and criticality of the data",
            "It automatically converts legacy Python 2 files to Python 3",
            "It ensures all company documents are accessible to the public"
        ],
        "correctAnswer": 1,
        "explanation": "Data classification categorizes organizational data by its level of sensitivity and impact if compromised. This enables appropriate, cost-effective controls (encryption, access limits, DLP) to be applied where needed most.",
        "officialRef": "PCES-30-01 Block 1.5 - Data Governance & Classification",
        "tags": ["data-classification", "governance", "compliance"]
    },
    {
        "id": "pces-1-084",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Compliance & Privacy",
        "difficulty": "Intermediate",
        "question": "Under the European Union General Data Protection Regulation (GDPR), within how many hours must a data breach posing a risk to individuals be reported to the supervisory authority?",
        "codeSnippet": "# GDPR Article 33 Breach Notification:\ndef check_gdpr_breach_window(breach_discovery_time, current_time):\n    hours_elapsed = (current_time - breach_discovery_time).total_seconds() / 3600\n    return hours_elapsed <= 72  # 72-hour regulatory threshold",
        "options": [
            "24 hours",
            "72 hours",
            "30 days",
            "1 year"
        ],
        "correctAnswer": 1,
        "explanation": "GDPR Article 33 mandates that in the event of a personal data breach, the data controller must notify the competent supervisory authority without undue delay and, where feasible, not later than 72 hours after becoming aware of it.",
        "officialRef": "PCES-30-01 Block 1.5 - Legal and Regulatory Duties (GDPR)",
        "tags": ["gdpr", "breach-notification", "compliance", "regulations"]
    },
    {
        "id": "pces-1-085",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Compliance & Privacy",
        "difficulty": "Intermediate",
        "question": "What is the 'Right to be Forgotten' (Right to Erasure) under GDPR?",
        "codeSnippet": "# Right to Erasure implementation:\ndef handle_erasure_request(user_id):\n    # Anonymize or permanently delete customer PII upon valid request\n    db.execute('DELETE FROM customer_pii WHERE user_id = ?', (user_id,))",
        "options": [
            "The right of users to clear their browser cache history",
            "The right of a data subject to request the erasure of their personal data without undue delay under specific legal grounds",
            "The right of employees to refuse to attend security awareness meetings",
            "The requirement that web servers delete all log files every 24 hours"
        ],
        "correctAnswer": 1,
        "explanation": "Under GDPR Article 17, the Right to Erasure ('Right to be Forgotten') entitles individuals to request that an organization delete their personal data when it is no longer necessary for its original purpose or consent is withdrawn.",
        "officialRef": "PCES-30-01 Block 1.5 - Privacy Regulations",
        "tags": ["gdpr", "right-to-erasure", "privacy"]
    },
    {
        "id": "pces-1-086",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Compliance & Regulations",
        "difficulty": "Beginner",
        "question": "Which United States federal regulation governs the security, privacy, and handling of Electronic Protected Health Information (ePHI)?",
        "codeSnippet": "# Regulated entity check:\n# Storing electronic medical records, patient diagnoses, or medical billing data\napplicable_regulation = 'HIPAA'",
        "options": [
            "PCI-DSS",
            "FERPA",
            "HIPAA (Health Insurance Portability and Accountability Act)",
            "SOX (Sarbanes-Oxley Act)"
        ],
        "correctAnswer": 2,
        "explanation": "HIPAA regulates the security, privacy, and breach notification standards for protected health information (PHI and ePHI) handled by healthcare providers, insurers, and business associates in the US.",
        "officialRef": "PCES-30-01 Block 1.5 - Industry Regulations (HIPAA)",
        "tags": ["hipaa", "ephi", "compliance", "privacy"]
    },
    {
        "id": "pces-1-087",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Compliance & Regulations",
        "difficulty": "Beginner",
        "question": "What industry security standard mandates specific technical requirements (such as encryption, network segmentation, and vulnerability scanning) for organizations that store, process, or transmit credit card data?",
        "codeSnippet": "# Payment card data environment:\n# Primary Account Numbers (PAN), CVV codes, expiration dates\nstandard = 'PCI-DSS'  # Payment Card Industry Data Security Standard",
        "options": [
            "PCI-DSS",
            "ISO 9001",
            "FISMA",
            "IEEE 802.11"
        ],
        "correctAnswer": 0,
        "explanation": "PCI-DSS (Payment Card Industry Data Security Standard) is a set of security standards mandated by major credit card brands to ensure that all companies that accept, process, store, or transmit cardholder data maintain a secure environment.",
        "officialRef": "PCES-30-01 Block 1.5 - Industry Regulations (PCI-DSS)",
        "tags": ["pci-dss", "payment-security", "compliance"]
    },
    {
        "id": "pces-1-088",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Ethics & Law",
        "difficulty": "Beginner",
        "question": "What is the critical legal difference between 'Ethical Hacking' (White Hat) and 'Malicious Hacking' (Black Hat)?",
        "codeSnippet": "# Rules of engagement:\n# White Hat: Explicit written authorization, defined scope, signed Rules of Engagement (RoE)\n# Black Hat: Unauthorized access, exceeding authorization",
        "options": [
            "Ethical hackers only use open-source operating systems",
            "Ethical hackers operate with explicit, formal written authorization and defined rules of engagement from the system owner",
            "Ethical hackers are legally allowed to break any law if finding a zero-day",
            "Ethical hackers never use automated scanning tools"
        ],
        "correctAnswer": 1,
        "explanation": "The defining legal difference is explicit authorization and consent. Ethical hackers have prior written authorization from the system owner detailing scope, boundaries, and rules of engagement. Without authorization, testing is illegal.",
        "officialRef": "PCES-30-01 Block 1.5 - Ethics in Cybersecurity",
        "tags": ["ethical-hacking", "authorization", "legal-boundaries"]
    },
    {
        "id": "pces-1-089",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Ethics & Law",
        "difficulty": "Intermediate",
        "question": "What is 'Responsible Disclosure' (Coordinated Vulnerability Disclosure)?",
        "codeSnippet": "# Coordinated Vulnerability Disclosure workflow:\n# 1. Security researcher finds flaw in vendor software\n# 2. Researcher confidentially notifies vendor with technical reproduction details\n# 3. Vendor develops and releases patch (typically 30-90 day window)\n# 4. Researcher and vendor publicly disclose details simultaneously with fix",
        "options": [
            "Selling unpatched zero-day exploits to the highest bidder on the dark web",
            "Privately reporting a discovered security flaw to the affected vendor and giving them reasonable time to remediate it before publishing details",
            "Immediately broadcasting an unpatched vulnerability on public social media",
            "Silently keeping vulnerabilities hidden without ever patching them"
        ],
        "correctAnswer": 1,
        "explanation": "Responsible disclosure (or Coordinated Vulnerability Disclosure) is the ethical practice of reporting vulnerabilities privately to the software vendor first, allowing them adequate time to patch the flaw before public dissemination.",
        "officialRef": "PCES-30-01 Block 1.5 - Vulnerability Disclosure Ethics",
        "tags": ["responsible-disclosure", "cvd", "ethics"]
    },
    {
        "id": "pces-1-090",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Cyber Law",
        "difficulty": "Intermediate",
        "question": "What primary United States federal statute criminalizes unauthorized access or exceeding authorized access to protected computers?",
        "codeSnippet": "# US Federal Statute governing cyber intrusions:\n# 18 U.S. Code § 1030 - Fraud and related activity in connection with computers",
        "options": [
            "CFAA (Computer Fraud and Abuse Act)",
            "DMCA (Digital Millennium Copyright Act)",
            "CAN-SPAM Act",
            "COPPA"
        ],
        "correctAnswer": 0,
        "explanation": "The Computer Fraud and Abuse Act (CFAA, 18 U.S.C. § 1030) is the primary US federal legislation that criminalizes unauthorized computer access, data theft, and intentional damage to protected computer systems.",
        "officialRef": "PCES-30-01 Block 1.5 - Cybersecurity Law (CFAA)",
        "tags": ["cfaa", "cyber-law", "unauthorized-access"]
    },
    {
        "id": "pces-1-091",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Incident Response",
        "difficulty": "Intermediate",
        "question": "According to the NIST Computer Security Incident Handling Guide (SP 800-61), what are the four core phases of the Incident Response lifecycle?",
        "codeSnippet": "# NIST SP 800-61 Incident Response Lifecycle:\n# Phase 1: Preparation\n# Phase 2: Detection and Analysis\n# Phase 3: Containment, Eradication, and Recovery\n# Phase 4: Post-Incident Activity (Lessons Learned)",
        "options": [
            "Ignore, Deny, Blame, Settle",
            "Preparation; Detection and Analysis; Containment, Eradication & Recovery; Post-Incident Activity (Lessons Learned)",
            "Scan, Exploit, Exfiltrate, Delete Logs",
            "Audit, Encrypt, Backup, Restore"
        ],
        "correctAnswer": 1,
        "explanation": "NIST SP 800-61 defines four incident response phases: 1) Preparation, 2) Detection & Analysis, 3) Containment, Eradication, and Recovery, and 4) Post-Incident Activity (Lessons Learned).",
        "officialRef": "PCES-30-01 Block 1.5 - Incident Handling (NIST SP 800-61)",
        "tags": ["incident-response", "nist-800-61", "lifecycle"]
    },
    {
        "id": "pces-1-092",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Incident Response",
        "difficulty": "Intermediate",
        "question": "What is the immediate priority during the 'Containment' phase of an active ransomware incident?",
        "codeSnippet": "# Active ransomware response:\n# Action: Immediately isolate infected host from local network and internet\n# Disconnect physical Ethernet cable and disable wireless adapter",
        "options": [
            "Immediately pay the ransom in cryptocurrency",
            "Isolate compromised systems from the network to prevent lateral movement and further encryption spread",
            "Format all hard drives immediately without preserving memory",
            "Reboot all domain controllers simultaneously"
        ],
        "correctAnswer": 1,
        "explanation": "The primary goal of containment is to stop the spread of the attack and limit damage. Isolating infected hosts from the network prevents ransomware from moving laterally to servers or encrypting network shares.",
        "officialRef": "PCES-30-01 Block 1.5 - Incident Containment",
        "tags": ["containment", "ransomware", "incident-response"]
    },
    {
        "id": "pces-1-093",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Digital Forensics",
        "difficulty": "Intermediate",
        "question": "In digital forensics, what is the 'Order of Volatility'?",
        "codeSnippet": "# Order of Volatility (most volatile to least volatile):\n# 1. CPU registers and cache\n# 2. Routing tables, ARP cache, process table, kernel statistics, RAM (memory)\n# 3. Temporary file systems\n# 4. Disk storage\n# 5. Remote logging data\n# 6. Physical configuration and network topology",
        "options": [
            "The price fluctuation of cybersecurity stocks",
            "The sequence in which evidence must be collected, starting with the most fragile and rapidly changing data (e.g. RAM) down to permanent media",
            "The speed at which zero-day vulnerabilities are patched",
            "The order in which employees are interviewed during an investigation"
        ],
        "correctAnswer": 1,
        "explanation": "The Order of Volatility dictates collecting evidence starting with the most perishable and volatile data (CPU registers, RAM, network connections) before powering down or collecting non-volatile data (hard drives, optical media).",
        "officialRef": "PCES-30-01 Block 1.5 - Digital Forensics & Volatility",
        "tags": ["forensics", "order-of-volatility", "evidence"]
    },
    {
        "id": "pces-1-094",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Digital Forensics",
        "difficulty": "Intermediate",
        "question": "Why is establishing a 'Chain of Custody' essential for digital evidence in legal proceedings?",
        "codeSnippet": "# Chain of Custody record:\n# Item: Hard Drive Image (SHA-256: 7f83...)\n# Collected by: Forensics Analyst Alice (2026-09-28 14:00)\n# Transferred to: Evidence Vault Officer Bob (2026-09-28 15:30)\n# Purpose: Secure evidentiary storage for litigation",
        "options": [
            "To track the monetary value of seized server hardware",
            "To provide a chronologically detailed, unbroken log showing who collected, accessed, transferred, and analyzed the evidence, proving it was not altered",
            "To assign cryptographic keys to forensic examiners",
            "To encrypt evidence so defense attorneys cannot view it"
        ],
        "correctAnswer": 1,
        "explanation": "Chain of Custody documents the comprehensive history of evidence handling: collection, custody, transfer, analysis, and disposition. Without an intact chain of custody, evidence is inadmissible in court.",
        "officialRef": "PCES-30-01 Block 1.5 - Chain of Custody & Evidence",
        "tags": ["chain-of-custody", "digital-forensics", "legal"]
    },
    {
        "id": "pces-1-095",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Data Sanitization",
        "difficulty": "Intermediate",
        "question": "What is the difference between data 'Clearing' and data 'Purging' (or Destruction) under NIST SP 800-88?",
        "codeSnippet": "# NIST SP 800-88 Guidelines for Media Sanitization:\n# Clear: Overwriting storage with standard write commands (protects against simple non-invasive recovery)\n# Purge: Degaussing or cryptographic erasure making data unrecoverable even in laboratory environments\n# Destroy: Physical disintegration, incineration, or shredding",
        "options": [
            "Clearing deletes files to the Recycle Bin; Purging empties the Recycle Bin",
            "Clearing uses standard read/write tools to overwrite data; Purging renders recovery impossible even with advanced laboratory techniques",
            "Clearing is for magnetic tape; Purging is for cloud storage only",
            "They are identical terms under NIST 800-88"
        ],
        "correctAnswer": 1,
        "explanation": "NIST SP 800-88 defines Clear (logical overwrite of user-accessible locations), Purge (rendering recovery infeasible against laboratory techniques via degaussing, sanitize commands, or crypto erase), and Destroy (physical destruction).",
        "officialRef": "PCES-30-01 Block 1.5 - Media Sanitization (NIST SP 800-88)",
        "tags": ["sanitization", "nist-800-88", "data-disposal"]
    },
    {
        "id": "pces-1-096",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Security Program Management",
        "difficulty": "Intermediate",
        "question": "What is a 'Bug Bounty' program?",
        "codeSnippet": "# Bug Bounty Program Policy (e.g. on HackerOne / Bugcrowd):\n# Target Scope: *.company.com\n# Out of Scope: Denial of Service, Physical attacks, Social engineering\n# Payout: Critical vulnerabilities reward $5,000 - $25,000",
        "options": [
            "A company contest where employees catch physical insects in the office",
            "A crowdsourced initiative that rewards independent external security researchers for ethically identifying and reporting valid security vulnerabilities",
            "An insurance claim payout following a ransomware attack",
            "A fee paid to criminal hackers to retrieve stolen company records"
        ],
        "correctAnswer": 1,
        "explanation": "A bug bounty program is an official deal offered by organizations where external ethical security researchers receive recognition and monetary compensation for discovering and reporting bugs and vulnerabilities.",
        "officialRef": "PCES-30-01 Block 1.5 - Vulnerability Management Programs",
        "tags": ["bug-bounty", "crowdsourced-security", "ethics"]
    },
    {
        "id": "pces-1-097",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Risk Management",
        "difficulty": "Intermediate",
        "question": "In quantitative risk analysis, what is the formula for calculating the Annualized Loss Expectancy (ALE)?",
        "codeSnippet": "# Quantitative Risk Analysis:\n# Asset Value (AV) = $1,000,000\n# Exposure Factor (EF) = 20% (loss per incident = $200,000 -> Single Loss Expectancy SLE)\n# Annualized Rate of Occurrence (ARO) = 0.5 (occurs once every 2 years)\n# ALE = SLE * ARO = $200,000 * 0.5 = $100,000 / year",
        "options": [
            "ALE = Asset Value + Firewall Cost",
            "ALE = Single Loss Expectancy (SLE) × Annualized Rate of Occurrence (ARO)",
            "ALE = Threat Likelihood / Disaster Duration",
            "ALE = Maximum Tolerable Downtime × RTO"
        ],
        "correctAnswer": 1,
        "explanation": "Annualized Loss Expectancy (ALE) is calculated as Single Loss Expectancy (SLE = Asset Value × Exposure Factor) multiplied by the Annualized Rate of Occurrence (ARO): ALE = SLE × ARO.",
        "officialRef": "PCES-30-01 Block 1.5 - Quantitative Risk Assessment",
        "tags": ["ale", "sle", "quantitative-risk", "metrics"]
    },
    {
        "id": "pces-1-098",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Governance",
        "difficulty": "Beginner",
        "question": "What is an Acceptable Use Policy (AUP)?",
        "codeSnippet": "# Policy document signed by new hires:\n# 'Employees may use corporate network and laptops strictly for authorized business duties.'\n# 'Prohibited activities: unauthorized file sharing, installing unapproved software, scanning networks.'",
        "options": [
            "A manual explaining how to configure Apache web servers",
            "A formal policy document outlining the boundaries, rules, and permitted practices for employees utilizing organizational IT assets and networks",
            "A software license agreement for the Python interpreter",
            "A document listing current firewall rules"
        ],
        "correctAnswer": 1,
        "explanation": "An Acceptable Use Policy (AUP) specifies the constraints, rules, and operational practices that employees, contractors, and partners must agree to follow when using corporate computing equipment and network resources.",
        "officialRef": "PCES-30-01 Block 1.5 - Security Governance & Policies",
        "tags": ["aup", "governance", "policies"]
    },
    {
        "id": "pces-1-099",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Security Architecture",
        "difficulty": "Intermediate",
        "question": "What is the 'Principle of Complete Mediation' in security engineering?",
        "codeSnippet": "# Complete Mediation in authorization:\n# Every single access attempt to every resource MUST be validated against the security policy;\n# no caching access decisions that allow subsequent unauthorized actions",
        "options": [
            "Hiring a third-party lawyer to mediate all network disputes",
            "Ensuring that every access request to every object is checked and validated every time without bypass or assumption of prior permission",
            "Encrypting data completely before writing to memory",
            "Replacing all human administrators with artificial intelligence"
        ],
        "correctAnswer": 1,
        "explanation": "The principle of Complete Mediation requires that every access to every object must be checked for authority every time, preventing bypass mechanisms or cached permissions from conferring unchecked access.",
        "officialRef": "PCES-30-01 Block 1.5 - Saltzer-Schroeder Principles",
        "tags": ["complete-mediation", "access-control", "design-principles"]
    },
    {
        "id": "pces-1-100",
        "section": "Section 1",
        "chapter": "1.5",
        "category": "Security Principles",
        "difficulty": "Beginner",
        "question": "Why is regular, ongoing Security Awareness Training for employees critical to an organization's security posture?",
        "codeSnippet": "# Security Posture Reality:\n# A company can have $1M in firewalls and EDR agents, but a single employee clicking\n# a malicious link in an email bypasses perimeter controls.",
        "options": [
            "It satisfies insurance requirements without needing technical controls",
            "Humans are frequently the target of social engineering and phishing attacks; training transforms employees into an active security defense layer",
            "It guarantees that employees will never make a typo in passwords",
            "It replaces the need for automated patching and backups"
        ],
        "correctAnswer": 1,
        "explanation": "Technology alone cannot stop attacks that target human psychology (phishing, social engineering, baiting). Continuous security awareness training educates users to recognize, avoid, and report suspicious activities, strengthening the human defense line.",
        "officialRef": "PCES-30-01 Block 1.5 - Security Awareness & Culture",
        "tags": ["awareness-training", "human-factor", "defense-in-depth"]
    }
])

print(f"Total cards in Block 1: {len(cards)}")
assert len(cards) == 100, f"Expected 100 cards, got {len(cards)}"

part1_cards = cards[:50]
part2_cards = cards[50:]

os.makedirs("src/data", exist_ok=True)
write_ts_file("src/data/pcesSection1CardsPart1.ts", "pcesSection1CardsPart1", part1_cards)
write_ts_file("src/data/pcesSection1CardsPart2.ts", "pcesSection1CardsPart2", part2_cards)

# Write barrel file
barrel_content = """import { Flashcard } from '../types';
import { pcesSection1CardsPart1 } from './pcesSection1CardsPart1';
import { pcesSection1CardsPart2 } from './pcesSection1CardsPart2';

export const pcesSection1Flashcards: Flashcard[] = [
  ...pcesSection1CardsPart1,
  ...pcesSection1CardsPart2,
];
"""
with open("src/data/pcesSection1Flashcards.ts", "w", encoding="utf-8") as f:
    f.write(barrel_content)
print("Wrote src/data/pcesSection1Flashcards.ts")
