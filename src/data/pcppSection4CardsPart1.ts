import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 4: NETWORK PROGRAMMING (Part 1: Cards 1 to 40)
 * - Chapter 4.1: Network Fundamentals, TCP/IP & Sockets Architecture (Cards 1 to 20)
 * - Chapter 4.2: Socket Programming: Server and Client Implementation (Cards 21 to 40)
 */
export const pcppSection4CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.1: NETWORK FUNDAMENTALS, TCP/IP & SOCKETS ARCHITECTURE (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pcpp-s4-fc-001',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'TCP/IP 4-layer model vs OSI 7-layer reference model',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'How do the layers of the practical TCP/IP model map to the theoretical OSI 7-layer model?',
    codeSnippet: `# TCP/IP 4-Layer Architecture:
# 1. Application Layer  -> Maps to OSI Application, Presentation, Session (HTTP, FTP, DNS)
# 2. Transport Layer    -> Maps to OSI Transport (TCP, UDP)
# 3. Internet Layer     -> Maps to OSI Network (IP, ICMP, ARP)
# 4. Network Access     -> Maps to OSI Data Link, Physical (Ethernet, Wi-Fi)

layers = ["Application", "Transport", "Internet", "Network Access"]
print(f"TCP/IP Layer count: {len(layers)}")`,
    stdoutExpected: 'TCP/IP Layer count: 4',
    explanationTitle: 'TCP/IP vs. OSI Models',
    explanationText:
      'The OSI model specifies 7 layers (Physical, Data Link, Network, Transport, Session, Presentation, Application). In contrast, the practical Internet TCP/IP stack condenses these into 4 functional layers: Network Access (Link/Physical), Internet (IP), Transport (TCP/UDP), and Application (HTTP, SMTP, DNS).',
    complexityInfo: 'PCPP 4.1 Core networking model fundamentals',
  },
  {
    id: 'pcpp-s4-fc-002',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'IP addresses, IPv4 vs IPv6, and the loopback interface',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What are IPv4 and IPv6 address formats, and what is the standard loopback (localhost) address for each?',
    codeSnippet: `import ipaddress

ipv4_loopback = ipaddress.IPv4Address("127.0.0.1")
ipv6_loopback = ipaddress.IPv6Address("::1")

print("IPv4 bits:", ipv4_loopback.max_prefixlen)
print("IPv6 bits:", ipv6_loopback.max_prefixlen)
print("Is loopback:", ipv4_loopback.is_loopback and ipv6_loopback.is_loopback)`,
    stdoutExpected: 'IPv4 bits: 32\nIPv6 bits: 128\nIs loopback: True',
    explanationTitle: 'IP Address Standards & Loopback',
    explanationText:
      'IPv4 uses 32-bit addresses formatted as dotted-quad decimals (e.g. 127.0.0.1). IPv6 uses 128-bit addresses formatted as eight colon-separated hexadecimal 16-bit blocks (e.g. ::1). The loopback interface routes packets internally within the local operating system without touching physical network hardware.',
    complexityInfo: 'PCPP 4.1 Addressing and interfaces',
  },
  {
    id: 'pcpp-s4-fc-003',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'Transport layer: TCP (Transmission Control Protocol) vs UDP (User Datagram Protocol)',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What are the key differences in reliability, ordering, and connection state between TCP and UDP?',
    codeSnippet: `# TCP Characteristics:
# - Connection-oriented (requires 3-way handshake)
# - Reliable (acknowledgments, retransmissions, error checking)
# - Ordered byte stream (no message boundaries)
# - Flow control & congestion control

# UDP Characteristics:
# - Connectionless (no handshake, sends directly)
# - Unreliable / Best-effort (packets may drop or arrive out of order)
# - Datagram-oriented (preserves discrete message boundaries)
# - Minimal overhead, lower latency

protocols = {"TCP": "Stream-oriented", "UDP": "Datagram-oriented"}
print(protocols["TCP"], "vs", protocols["UDP"])`,
    stdoutExpected: 'Stream-oriented vs Datagram-oriented',
    explanationTitle: 'TCP vs. UDP Fundamentals',
    explanationText:
      'TCP guarantees delivery, packet ordering, and data integrity over a stateful stream connection, making it suitable for HTTP, SSH, and file transfers. UDP is a stateless, lightweight protocol without delivery confirmations or retransmissions, ideal for DNS queries, real-time gaming, and video streaming.',
    complexityInfo: 'High-frequency exam comparison between transport protocols',
  },
  {
    id: 'pcpp-s4-fc-004',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'Network ports: well-known, registered, and dynamic/ephemeral ranges',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is the valid range of TCP/UDP port numbers, and how are the 3 major IANA port ranges divided?',
    codeSnippet: `# Total 16-bit port address space: 0 to 65535 (2^16 - 1)
# 1. Well-known ports: 0 - 1023 (HTTP: 80, HTTPS: 443, SSH: 22, DNS: 53)
#    Requires administrative / root privileges to bind on Unix.
# 2. Registered ports: 1024 - 49151 (e.g. MySQL: 3306, Flask: 5000)
# 3. Dynamic / Ephemeral ports: 49152 - 65535 (auto-assigned to clients)

total_ports = 65536
well_known_max = 1023
print(f"Max port: {total_ports - 1}, Well-known bound: {well_known_max}")`,
    stdoutExpected: 'Max port: 65535, Well-known bound: 1023',
    explanationTitle: 'IANA Port Number Ranges',
    explanationText:
      'Port numbers identify specific software processes running on a host. The 16-bit space spans 0–65535. Ports 0–1023 are Well-Known (reserved for system services), 1024–49151 are Registered (vendor/application services), and 49152–65535 are Dynamic/Ephemeral (allocated temporarily by the OS for outgoing client connections).',
    complexityInfo: 'PCPP 4.1 Port allocation architecture',
  },
  {
    id: 'pcpp-s4-fc-005',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'The Python socket module and address family constants (AF_INET, AF_INET6, AF_UNIX)',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What address family constants are provided by Python’s socket module, and what network protocol does each correspond to?',
    codeSnippet: `import socket

# AF stands for "Address Family"
print(socket.AF_INET.name)   # IPv4 internet protocol
print(socket.AF_INET6.name)  # IPv6 internet protocol
# socket.AF_UNIX exists on POSIX systems for inter-process communication (IPC)
print("AF_INET value is int:", isinstance(socket.AF_INET, int))`,
    stdoutExpected: 'AF_INET\nAF_INET6\nAF_INET value is int: True',
    explanationTitle: 'Socket Address Families (AF_*)',
    explanationText:
      'Address family constants dictate the network layer addressing scheme. socket.AF_INET specifies IPv4, socket.AF_INET6 specifies IPv6, and socket.AF_UNIX (Unix domain sockets) enables fast local inter-process communication using filesystem paths on POSIX operating systems.',
    complexityInfo: 'PCPP 4.1 Socket family definitions',
  },
  {
    id: 'pcpp-s4-fc-006',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'Socket types: SOCK_STREAM vs SOCK_DGRAM',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'Which socket type constant creates a TCP socket, and which creates a UDP socket?',
    codeSnippet: `import socket

# SOCK_STREAM -> Connection-oriented byte stream (TCP)
# SOCK_DGRAM  -> Connectionless datagram packets (UDP)
# SOCK_RAW    -> Raw network protocol access (requires root)

print("TCP type:", socket.SOCK_STREAM.name)
print("UDP type:", socket.SOCK_DGRAM.name)`,
    stdoutExpected: 'TCP type: SOCK_STREAM\nUDP type: SOCK_DGRAM',
    explanationTitle: 'Socket Types (SOCK_STREAM vs. SOCK_DGRAM)',
    explanationText:
      'socket.SOCK_STREAM creates a reliable, ordered, full-duplex TCP stream socket. socket.SOCK_DGRAM creates a connectionless, unreliable UDP datagram socket. Together with AF_INET, they form the most common socket initializations.',
    complexityInfo: 'PCPP 4.1 Socket constructor options',
  },
  {
    id: 'pcpp-s4-fc-007',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'Creating a socket with socket.socket() and default constructor parameters',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What are the default parameter values when socket.socket() is instantiated without arguments in Python 3?',
    codeSnippet: `import socket

# Default signature: socket.socket(family=AF_INET, type=SOCK_STREAM, proto=0, fileno=None)
s = socket.socket()

print("Default family:", s.family == socket.AF_INET)
print("Default type:", s.type == socket.SOCK_STREAM)
print("Default proto:", s.proto == 0)
s.close()`,
    stdoutExpected: 'Default family: True\nDefault type: True\nDefault proto: True',
    explanationTitle: 'socket.socket() Default Constructor',
    explanationText:
      'Calling socket.socket() with no arguments defaults to socket(family=socket.AF_INET, type=socket.SOCK_STREAM, proto=0). This automatically creates an IPv4 TCP stream socket.',
    complexityInfo: 'Frequent exam question regarding socket() defaults',
  },
  {
    id: 'pcpp-s4-fc-008',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'DNS name resolution with socket.gethostbyname() and socket.gethostbyname_ex()',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'How do you resolve a domain name or hostname to its IPv4 address string in Python?',
    codeSnippet: `import socket

# Resolving localhost:
ip = socket.gethostbyname("localhost")
print("Localhost IP:", ip)

# gethostbyname_ex returns: (hostname, alias_list, ip_address_list)
name, aliases, ip_list = socket.gethostbyname_ex("localhost")
print("Returns tuple:", isinstance(ip_list, list))`,
    stdoutExpected: 'Localhost IP: 127.0.0.1\nReturns tuple: True',
    explanationTitle: 'socket.gethostbyname() and gethostbyname_ex()',
    explanationText:
      'socket.gethostbyname(hostname) contacts the OS resolver and returns the first IPv4 address as a string (e.g. "127.0.0.1"). socket.gethostbyname_ex(hostname) returns a 3-tuple containing (primary_hostname, aliases_list, ip_addresses_list).',
    complexityInfo: 'PCPP 4.1 Domain name resolution APIs',
  },
  {
    id: 'pcpp-s4-fc-009',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'Reverse DNS lookup with socket.gethostbyaddr()',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'How do you perform a reverse DNS lookup to find the domain name associated with an IP address?',
    codeSnippet: `import socket

# gethostbyaddr(ip_address) returns: (hostname, alias_list, ip_address_list)
host, aliases, ips = socket.gethostbyaddr("127.0.0.1")
print("Localhost resolved:", isinstance(host, str) and len(ips) > 0)`,
    stdoutExpected: 'Localhost resolved: True',
    explanationTitle: 'socket.gethostbyaddr() Reverse Resolution',
    explanationText:
      'socket.gethostbyaddr(ip_address) performs a reverse DNS lookup (PTR query). It takes an IP address string and returns a 3-tuple (hostname, aliaslist, ipaddrlist). If lookup fails, it raises socket.herror or socket.gaierror.',
    complexityInfo: 'PCPP 4.1 Reverse DNS queries',
  },
  {
    id: 'pcpp-s4-fc-010',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'Retrieving local system hostname with socket.gethostname()',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'How do you obtain the local machine’s network hostname and its primary IP address in Python?',
    codeSnippet: `import socket

hostname = socket.gethostname()
# Resolve host to find primary network IP:
primary_ip = socket.gethostbyname(hostname)

print("Hostname is string:", isinstance(hostname, str))
print("Primary IP resolved:", isinstance(primary_ip, str))`,
    stdoutExpected: 'Hostname is string: True\nPrimary IP resolved: True',
    explanationTitle: 'socket.gethostname() System Name',
    explanationText:
      'socket.gethostname() queries the operating system for the current machine’s network hostname. Chaining this with socket.gethostbyname(socket.gethostname()) discovers the machine’s primary IP address.',
    complexityInfo: 'PCPP 4.1 Local machine network discovery',
  },
  {
    id: 'pcpp-s4-fc-011',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'Service port lookups with socket.getservbyname() and socket.getservbyport()',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'How do you translate between human-readable service names (e.g. "http", "ssh") and their port numbers?',
    codeSnippet: `import socket

# getservbyname(servicename, protocolname) -> port int
http_port = socket.getservbyname("http", "tcp")
ssh_port = socket.getservbyname("ssh", "tcp")

# getservbyport(port, protocolname) -> servicename str
https_name = socket.getservbyport(443, "tcp")

print(f"HTTP: {http_port}, SSH: {ssh_port}, Port 443: {https_name}")`,
    stdoutExpected: 'HTTP: 80, SSH: 22, Port 443: https',
    explanationTitle: 'socket.getservbyname() and getservbyport()',
    explanationText:
      'socket.getservbyname(servicename, protocol) maps a standard service name (like "http" or "ftp") to its integer port number (80 or 21). Conversely, socket.getservbyport(port, protocol) performs the reverse lookup, returning the service name string.',
    complexityInfo: 'PCPP 4.1 Service port database translation',
  },
  {
    id: 'pcpp-s4-fc-012',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'Network byte order (Big-Endian) and htons, htonl, ntohs, ntohl conversion',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is network byte order, and what functions convert 16-bit and 32-bit integers between host and network endianness?',
    codeSnippet: `import socket

# Network byte order is ALWAYS Big-Endian (most significant byte first).
# Host byte order on x86/x64/ARM is typically Little-Endian.

# htons = host to network short (16-bit, ports)
# htonl = host to network long  (32-bit, IPv4)
# ntohs = network to host short
# ntohl = network to host long

port = 8080
net_port = socket.htons(port)
host_port = socket.ntohs(net_port)

print("Roundtrip preserved:", host_port == port)`,
    stdoutExpected: 'Roundtrip preserved: True',
    explanationTitle: 'Network Byte Order (Endianness Conversion)',
    explanationText:
      'Network protocols mandate big-endian representation for multi-byte header integers. The helper functions htons (16-bit short) and htonl (32-bit long) convert from host architecture endianness to big-endian network order. Their complements, ntohs and ntohl, convert network data back to host order.',
    complexityInfo: 'Exam trap: network byte order is ALWAYS big-endian',
  },
  {
    id: 'pcpp-s4-fc-013',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'IP address binary packing and unpacking: inet_aton, inet_ntoa, inet_pton, inet_ntop',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'How do you convert between dotted-quad IP strings and 4-byte packed binary representations in Python?',
    codeSnippet: `import socket

# inet_aton: ASCII IP string to 4-byte packed binary
packed = socket.inet_aton("192.168.1.1")
print("Packed length:", len(packed), "Bytes:", list(packed))

# inet_ntoa: 4-byte binary to dotted ASCII string
ip_str = socket.inet_ntoa(packed)
print("Unpacked string:", ip_str)

# inet_pton / inet_ntop support IPv6 (AF_INET6) as well:
packed_v6 = socket.inet_pton(socket.AF_INET6, "::1")
print("IPv6 packed length:", len(packed_v6))`,
    stdoutExpected: 'Packed length: 4 Bytes: [192, 168, 1, 1]\nUnpacked string: 192.168.1.1\nIPv6 packed length: 16',
    explanationTitle: 'IP Address Binary Conversion (inet_aton / inet_ntoa)',
    explanationText:
      'socket.inet_aton() converts a dotted-decimal IPv4 string into a 4-byte bytes object in network byte order. socket.inet_ntoa() does the reverse. For modern code supporting IPv6, socket.inet_pton(family, str) and socket.inet_ntop(family, packed) are used.',
    complexityInfo: 'PCPP 4.1 Binary address manipulation',
  },
  {
    id: 'pcpp-s4-fc-014',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'Configuring socket timeouts with settimeout() and gettimeout()',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'How do you configure a socket operation (connect, send, recv) to abort if it takes longer than a specified duration?',
    codeSnippet: `import socket

s = socket.socket()
# Set timeout to 2.5 seconds:
s.settimeout(2.5)

print("Current timeout:", s.gettimeout())

# Resetting timeout to None restores default blocking mode:
s.settimeout(None)
print("Restored blocking:", s.gettimeout() is None)
s.close()`,
    stdoutExpected: 'Current timeout: 2.5\nRestored blocking: True',
    explanationTitle: 'Socket Timeouts (settimeout)',
    explanationText:
      's.settimeout(seconds) configures a timeout on blocking socket operations (like connect, recv, and accept). If the operation does not complete within the specified float seconds, socket.timeout (a subclass of OSError) is raised.',
    complexityInfo: 'PCPP 4.1 Socket operation timeouts',
  },
  {
    id: 'pcpp-s4-fc-015',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'Blocking vs. non-blocking socket modes (setblocking)',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is the relationship between socket.setblocking(flag) and socket.settimeout(value)?',
    codeSnippet: `import socket

s = socket.socket()

# setblocking(False) is strictly equivalent to settimeout(0.0)
s.setblocking(False)
print("Non-blocking timeout:", s.gettimeout())

# setblocking(True) is strictly equivalent to settimeout(None)
s.setblocking(True)
print("Blocking timeout:", s.gettimeout())
s.close()`,
    stdoutExpected: 'Non-blocking timeout: 0.0\nBlocking timeout: None',
    explanationTitle: 'setblocking() vs. settimeout() Equivalence',
    explanationText:
      's.setblocking(False) puts the socket in non-blocking mode, exactly equivalent to s.settimeout(0.0). Any operation that would block immediately raises BlockingIOError (or socket.error with EWOULDBLOCK/EAGAIN). s.setblocking(True) is equivalent to s.settimeout(None).',
    complexityInfo: 'Key exam equivalence: setblocking(False) == settimeout(0.0)',
  },
  {
    id: 'pcpp-s4-fc-016',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'Socket options: setsockopt() and SO_REUSEADDR',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'Why does restarting a TCP server often fail with "Address already in use", and how is this avoided using setsockopt()?',
    codeSnippet: `import socket

s = socket.socket()

# Enable SO_REUSEADDR to immediately reuse a port in TIME_WAIT state:
# level: socket.SOL_SOCKET (socket-level option)
# optname: socket.SO_REUSEADDR
# value: 1 (boolean True / enabled)
s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

# Verify option is active:
val = s.getsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR)
print("SO_REUSEADDR active:", val != 0)
s.close()`,
    stdoutExpected: 'SO_REUSEADDR active: True',
    explanationTitle: 'SO_REUSEADDR and setsockopt()',
    explanationText:
      'When a server closes, TCP keeps the socket in TIME_WAIT state for several minutes to handle late packets. By default, rebinding the port fails with OSError: [Errno 98] Address already in use. Calling s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1) before bind() permits immediate port reuse.',
    complexityInfo: 'High-frequency exam question for robust server coding',
  },
  {
    id: 'pcpp-s4-fc-017',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'Context manager protocol with socket.socket()',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'Can Python sockets be used in a "with" statement, and what occurs upon exiting the context block?',
    codeSnippet: `import socket

# Sockets implement __enter__ and __exit__ (context manager protocol)
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    fileno_before = s.fileno()
    print("Socket open (fileno >= 0):", fileno_before >= 0)

# Once the with-block terminates, s.close() is automatically called:
print("Socket closed (fileno == -1):", s.fileno() == -1)`,
    stdoutExpected: 'Socket open (fileno >= 0): True\nSocket closed (fileno == -1): True',
    explanationTitle: 'Socket Context Manager Support',
    explanationText:
      'Since Python 3.2, socket objects support the context management protocol (with socket(...) as s:). Upon exiting the block—even due to unhandled exceptions—the socket’s __exit__ method calls s.close(), releasing the operating system file descriptor and cleaning up resources.',
    complexityInfo: 'PCPP 4.1 Resource management best practices',
  },
  {
    id: 'pcpp-s4-fc-018',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'Protocol numbers and socket.getprotobyname()',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What are the standardized IANA protocol numbers for TCP, UDP, and ICMP in IP headers, and how are they looked up?',
    codeSnippet: `import socket

# Looking up IP protocol header numbers:
tcp_proto = socket.getprotobyname("tcp")
udp_proto = socket.getprotobyname("udp")
icmp_proto = socket.getprotobyname("icmp")

print(f"TCP: {tcp_proto}, UDP: {udp_proto}, ICMP: {icmp_proto}")
print("Matches IPPROTO_TCP constant:", tcp_proto == socket.IPPROTO_TCP)`,
    stdoutExpected: 'TCP: 6, UDP: 17, ICMP: 1\nMatches IPPROTO_TCP constant: True',
    explanationTitle: 'Protocol Header Numbers (getprotobyname)',
    explanationText:
      'In IPv4 packet headers, the 8-bit Protocol field identifies the payload protocol: TCP is 6, UDP is 17, and ICMP is 1. socket.getprotobyname(name) returns these integer protocol constants (matching socket.IPPROTO_TCP, socket.IPPROTO_UDP, etc.).',
    complexityInfo: 'PCPP 4.1 Protocol identification constants',
  },
  {
    id: 'pcpp-s4-fc-019',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'TCP 3-way handshake and connection termination lifecycle',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What are the three control packets exchanged during the TCP 3-way handshake, and how does connection teardown occur?',
    codeSnippet: `# TCP Handshake Steps:
# 1. Client sends SYN (Synchronize Sequence Number)
# 2. Server responds with SYN-ACK (Synchronize + Acknowledgment)
# 3. Client replies with ACK (Acknowledgment) -> Connection ESTABLISHED!

# TCP Teardown (Graceful 4-way close):
# 1. Initiator sends FIN (Finish)
# 2. Receiver responds with ACK (half-closed)
# 3. Receiver finishes work and sends its own FIN
# 4. Initiator replies with ACK -> enters TIME_WAIT state

handshake = ["SYN", "SYN-ACK", "ACK"]
print("Handshake steps:", " -> ".join(handshake))`,
    stdoutExpected: 'Handshake steps: SYN -> SYN-ACK -> ACK',
    explanationTitle: 'TCP Connection Lifecycle Handshakes',
    explanationText:
      'Establishing a TCP stream requires a 3-way handshake (SYN, SYN-ACK, ACK) to synchronize initial sequence numbers between client and server. Teardown uses a 4-step sequence (FIN, ACK, FIN, ACK) allowing each side to independently close its send direction.',
    complexityInfo: 'PCPP 4.1 Transport layer connection state machine',
  },
  {
    id: 'pcpp-s4-fc-020',
    track: 'pcpp',
    cardType: 'PCPP 4.1 • Network Fundamentals',
    topic: 'Socket exceptions hierarchy: OSError, socket.gaierror, socket.herror, and socket.timeout',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.1',
    section: 'Section 4',
    question: 'What is the inheritance hierarchy of socket exceptions in modern Python?',
    codeSnippet: `import socket

# In Python 3.3+, socket.error is an alias for built-in OSError!
print("socket.error is OSError:", socket.error is OSError)

# Subclasses:
# 1. socket.gaierror: Address resolution error (getaddrinfo / gethostbyname)
# 2. socket.herror: Host lookup error (gethostbyaddr)
# 3. socket.timeout: Operation timed out (subclass of OSError)

print("gaierror subclass of OSError:", issubclass(socket.gaierror, OSError))
print("timeout subclass of OSError:", issubclass(socket.timeout, OSError))`,
    stdoutExpected: 'socket.error is OSError: True\ngaierror subclass of OSError: True\ntimeout subclass of OSError: True',
    explanationTitle: 'Socket Exception Hierarchy in Python 3',
    explanationText:
      'Since Python 3.3, socket.error is an alias for OSError. Specialized socket exceptions include socket.gaierror (for getaddrinfo DNS resolution failures), socket.herror (for legacy host lookup errors), and socket.timeout (when an operation exceeds the settimeout threshold).',
    complexityInfo: 'High-frequency exam trap: socket.error is OSError in Python 3.3+',
  },

  // =========================================================================
  // CHAPTER 4.2: SOCKET PROGRAMMING: SERVER AND CLIENT IMPLEMENTATION (Cards 21 to 40)
  // =========================================================================
  {
    id: 'pcpp-s4-fc-021',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'TCP server lifecycle method sequence (socket, bind, listen, accept)',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What is the mandatory method call sequence to create and run a basic TCP server in Python?',
    codeSnippet: `# TCP Server Lifecycle Steps:
# 1. socket()  -> Create socket instance
# 2. bind()    -> Associate socket with IP and Port
# 3. listen()  -> Put socket into passive listening mode
# 4. accept()  -> Block until incoming client connects, returns (conn, addr)
# 5. recv/send -> Communicate with client via conn
# 6. close()   -> Close connection and server sockets

server_steps = ["socket", "bind", "listen", "accept", "recv/send", "close"]
print("Server order:", " -> ".join(server_steps[:4]))`,
    stdoutExpected: 'Server order: socket -> bind -> listen -> accept',
    explanationTitle: 'TCP Server Lifecycle Sequence',
    explanationText:
      'A TCP server must strictly follow: 1) create socket(), 2) bind((host, port)) to reserve the endpoint, 3) listen(backlog) to enable queuing of client connection attempts, and 4) accept() to accept an incoming client connection.',
    complexityInfo: 'Fundamental PCPP 4.2 exam requirement',
  },
  {
    id: 'pcpp-s4-fc-022',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'The bind() method: address tuple format and binding to all interfaces ("0.0.0.0" / "")',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What data structure does s.bind() expect for AF_INET, and what does binding to "" or "0.0.0.0" mean?',
    codeSnippet: `import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# For AF_INET, bind takes a 2-tuple: (host_string, port_integer)
# Binding to '' or '0.0.0.0' binds to INADDR_ANY (all available network interfaces)

# Port 0 instructs the OS to dynamically allocate any available free port:
s.bind(("", 0))
assigned_host, assigned_port = s.getsockname()

print("Bound port > 0:", assigned_port > 0)
s.close()`,
    stdoutExpected: 'Bound port > 0: True',
    explanationTitle: 's.bind() Address Tuple and INADDR_ANY',
    explanationText:
      'For AF_INET sockets, s.bind() accepts a 2-tuple (host, port). Binding to "" or "0.0.0.0" binds the socket to all network interfaces on the host. Binding to port 0 requests an ephemeral free port from the OS kernel, which can then be inspected via s.getsockname().',
    complexityInfo: 'Exam trap: bind() requires a single tuple argument (host, port)',
  },
  {
    id: 'pcpp-s4-fc-023',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'The listen() method: backlog queue parameter and socket.SOMAXCONN',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What does the backlog parameter in s.listen(backlog) control, and what happens if omitted in Python 3.5+?',
    codeSnippet: `import socket

s = socket.socket()
s.bind(("127.0.0.1", 0))

# s.listen(5): backlog specifies the maximum number of queued unaccepted connections.
# In Python 3.5+, backlog is optional; if omitted, Python chooses a sensible default
# (usually socket.SOMAXCONN or system max).
s.listen()

print("Socket listening, SOMAXCONN available:", hasattr(socket, "SOMAXCONN"))
s.close()`,
    stdoutExpected: 'Socket listening, SOMAXCONN available: True',
    explanationTitle: 's.listen() and the Backlog Queue',
    explanationText:
      's.listen(backlog) switches a socket to passive listening mode. The backlog integer sets the maximum length of the queue of pending unaccepted connections before new connection attempts are refused. Since Python 3.5, backlog is optional and defaults to a system-determined maximum (socket.SOMAXCONN).',
    complexityInfo: 'PCPP 4.2 Server backlog queue mechanics',
  },
  {
    id: 'pcpp-s4-fc-024',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'The accept() method: return tuple (conn, address) and welcoming vs. connection socket',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What does server_socket.accept() return upon receiving a client, and which socket is used to transmit data?',
    codeSnippet: `# server_socket.accept() returns: (conn, address)
# - conn: A NEW socket object dedicated exclusively to communicating with that connected client!
# - address: A 2-tuple (client_ip, client_port)
#
# CRITICAL CONCEPT:
# Data transfer (send/recv) is performed via the NEW 'conn' socket!
# The original 'server_socket' remains open to continue accepting other clients.

return_structure = ("conn_socket", ("client_ip", 54321))
conn_obj, client_addr = return_structure
print(f"Address format: {client_addr[0]}:{client_addr[1]}")`,
    stdoutExpected: 'Address format: client_ip:54321',
    explanationTitle: 'accept() Return Tuple and Socket Separation',
    explanationText:
      'accept() is a blocking call that waits for an incoming connection. It returns a 2-tuple (conn, address). The welcoming server socket continues listening on the main port, while all read/write communication with that client occurs through the newly spawned conn socket.',
    complexityInfo: 'High-frequency exam trap: communicating on server_socket vs conn',
  },
  {
    id: 'pcpp-s4-fc-025',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'TCP client lifecycle method sequence (socket, connect, send/recv, close)',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What is the method sequence for a TCP client to establish a connection and exchange data with a server?',
    codeSnippet: `# TCP Client Lifecycle:
# 1. socket()  -> Create client socket
# 2. connect() -> Initiate 3-way handshake to server (host, port)
# 3. sendall() / recv() -> Exchange encoded byte buffers
# 4. close()   -> Terminate connection

client_steps = ["socket", "connect", "send/recv", "close"]
print("Client sequence:", " -> ".join(client_steps))`,
    stdoutExpected: 'Client sequence: socket -> connect -> send/recv -> close',
    explanationTitle: 'TCP Client Lifecycle',
    explanationText:
      'Unlike servers, a client does not call bind(), listen(), or accept(). It instantiates socket(), calls connect((host, port)) to perform the TCP handshake, sends and receives data, and finally calls close().',
    complexityInfo: 'PCPP 4.2 Client socket workflow',
  },
  {
    id: 'pcpp-s4-fc-026',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 's.connect() vs. s.connect_ex() error handling',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How does s.connect_ex() differ from s.connect(), and why is it preferred for port scanning?',
    codeSnippet: `import socket

s = socket.socket()
# Try connecting to a non-existent port on localhost:
# connect() raises an exception: ConnectionRefusedError / OSError
# connect_ex() suppresses the exception and returns an integer C-level error indicator!
# Returns 0 on success, or an errno value (like errno.ECONNREFUSED) on error.

err_code = s.connect_ex(("127.0.0.1", 65530))
print("connect_ex returned non-zero error:", err_code != 0)
s.close()`,
    stdoutExpected: 'connect_ex returned non-zero error: True',
    explanationTitle: 's.connect() vs. s.connect_ex()',
    explanationText:
      's.connect(addr) raises an OSError (e.g. ConnectionRefusedError) if the connection cannot be established. s.connect_ex(addr) does not raise an exception; instead, it returns 0 if the connection succeeded, or the C-level errno integer on failure. This makes connect_ex ideal for building port scanners without try/except overhead.',
    complexityInfo: 'Frequent PCPP exam question on connect_ex() return codes',
  },
  {
    id: 'pcpp-s4-fc-027',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'Sending data: s.send() vs. s.sendall()',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What is the danger of using s.send() instead of s.sendall() when transmitting large byte buffers?',
    codeSnippet: `# s.send(bytes_data):
# Sends some or all of the bytes depending on network buffer availability.
# Returns: The NUMBER OF BYTES ACTUALLY SENT!
# Programmer must loop until all bytes are sent.

# s.sendall(bytes_data):
# Built-in Python method that automatically loops internally calling send()
# until the entire buffer is transmitted, or raises an error.
# Returns: None on success!

print("send() returns byte count; sendall() returns None on success")`,
    stdoutExpected: 'send() returns byte count; sendall() returns None on success',
    explanationTitle: 's.send() vs. s.sendall() Transmission Guarantee',
    explanationText:
      's.send() transmits as much data as the network buffer allows and returns the integer count of bytes sent; it is the developer’s responsibility to check this count and re-slice the buffer. s.sendall() continues transmitting in a loop until all data is sent, returning None on success or raising an exception on failure.',
    complexityInfo: 'Exam trap: sendall() returns None on success, not the byte count',
  },
  {
    id: 'pcpp-s4-fc-028',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'Receiving data: s.recv(bufsize) and EOF detection (empty bytes b"")',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What does s.recv(bufsize) return when the peer has closed the connection orderly (EOF)?',
    codeSnippet: `# s.recv(1024):
# - If data is available: returns bytes object (up to 1024 bytes)
# - If connection was orderly closed by the remote host: returns b"" (empty bytes)
#
# Standard read loop pattern:
# while True:
#     chunk = conn.recv(4096)
#     if not chunk: # b"" evaluates to False!
#         break     # Peer disconnected
#     process(chunk)

empty_payload = b""
print("Peer closed EOF detected:", len(empty_payload) == 0 and not empty_payload)`,
    stdoutExpected: 'Peer closed EOF detected: True',
    explanationTitle: 'EOF Detection via s.recv() Returning b""',
    explanationText:
      'When the remote peer gracefully closes its socket (sending FIN), s.recv() unblocks and returns empty bytes (b""). Checking "if not data:" or "if len(data) == 0:" is the standard and required way in Python socket programming to detect client disconnection.',
    complexityInfo: 'High-frequency exam trap: EOF in sockets is b"", not None or exception',
  },
  {
    id: 'pcpp-s4-fc-029',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'String encoding/decoding requirements for socket communication',
    category: 'T4: Network Programming',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'Why does passing a Python string to s.send() raise a TypeError, and how is it properly transmitted?',
    codeSnippet: `msg = "Hello, PCPP!"

# In Python 3, sockets ONLY accept bytes-like objects (bytes, bytearray):
# s.send("Hello") -> TypeError: a bytes-like object is required, not 'str'

# Correct transmission:
encoded = msg.encode("utf-8")  # Or b"Hello, PCPP!"
decoded = encoded.decode("utf-8")

print("Encoded type:", type(encoded).__name__)
print("Decoded string:", decoded)`,
    stdoutExpected: 'Encoded type: bytes\nDecoded string: Hello, PCPP!',
    explanationTitle: 'Byte Encoding / Decoding Rule',
    explanationText:
      'Python 3 separates text (str) from raw binary data (bytes). Operating system sockets transmit raw octets. Senders must encode strings into bytes (e.g. text.encode("utf-8")), and receivers must decode incoming bytes back into strings (chunk.decode("utf-8")).',
    complexityInfo: 'Fundamental Python 3 network requirement',
  },
  {
    id: 'pcpp-s4-fc-030',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'UDP server & client: sendto() and recvfrom()',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How does UDP communication differ from TCP in terms of socket methods used for sending and receiving?',
    codeSnippet: `import socket

# UDP Socket creation:
s_udp = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# UDP does NOT use listen() or accept(), nor connect() before sending!
# Sending: s.sendto(data_bytes, (dest_ip, dest_port))
# Receiving: data, sender_addr = s.recvfrom(bufsize)

print("UDP methods: sendto() and recvfrom()")
s_udp.close()`,
    stdoutExpected: 'UDP methods: sendto() and recvfrom()',
    explanationTitle: 'UDP Socket Methods (sendto / recvfrom)',
    explanationText:
      'Because UDP is connectionless, there is no persistent connection stream. Senders use s.sendto(data, address) providing the target tuple on every packet. Receivers use data, address = s.recvfrom(bufsize), which returns both the incoming datagram bytes and the sender’s address tuple.',
    complexityInfo: 'PCPP 4.2 Datagram socket API differences',
  },
  {
    id: 'pcpp-s4-fc-031',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'Closing vs. shutting down sockets: s.shutdown() and SHUT constants',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What is the purpose of s.shutdown(how), and what do SHUT_RD, SHUT_WR, and SHUT_RDWR do?',
    codeSnippet: `import socket

# s.shutdown(how) informs the peer that transmission/reception is ending
# without yet destroying the socket object itself.
# socket.SHUT_RD   (0): Disallows further receives
# socket.SHUT_WR   (1): Disallows further sends; sends FIN to peer (half-close)
# socket.SHUT_RDWR (2): Disallows both sends and receives

# s.close() deallocates the socket and releases the OS file descriptor.
print(socket.SHUT_RD, socket.SHUT_WR, socket.SHUT_RDWR)`,
    stdoutExpected: '0 1 2',
    explanationTitle: 's.shutdown() Half-Close Mechanics',
    explanationText:
      's.shutdown(how) alters the underlying TCP connection state. Using socket.SHUT_WR sends a FIN packet to the peer, signaling that this host has finished sending data while still allowing it to receive incoming data (a half-close). s.close() should always be called afterward to release local resources.',
    complexityInfo: 'PCPP 4.2 Half-close states and SHUT_* constants',
  },
  {
    id: 'pcpp-s4-fc-032',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'Message framing over TCP streams (delimiters vs. length-prefixing)',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'Why can two consecutive s.send() calls arrive as a single chunk in s.recv(), and how is message framing solved?',
    codeSnippet: `import struct

# TCP is a continuous byte stream, NOT a message protocol.
# Consecutive sends may be concatenated (Nagle's algorithm) or fragmented.

# Framing Solution 1: Delimiters (e.g. newline \\n or \\r\\n like HTTP/SMTP)
# Framing Solution 2: Length-Prefixing (pack 4-byte header before payload)
payload = b"User login payload"
header = struct.pack("!I", len(payload)) # 4-byte big-endian unsigned int
framed_message = header + payload

unpacked_len = struct.unpack("!I", framed_message[:4])[0]
print("Framed length prefix:", unpacked_len == len(payload))`,
    stdoutExpected: 'Framed length prefix: True',
    explanationTitle: 'TCP Stream Framing Problem',
    explanationText:
      'TCP does not preserve application-level message boundaries. Packets can be merged or split unpredictably across recv() calls. Applications must implement framing: either using special delimiters (such as "\\r\\n") or prepending a fixed-width binary length prefix (e.g. struct.pack("!I", length)).',
    complexityInfo: 'Critical real-world networking design concept',
  },
  {
    id: 'pcpp-s4-fc-033',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'Multi-client concurrency using the threading module',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How do you handle multiple simultaneous client connections in a standard multi-threaded TCP server?',
    codeSnippet: `import threading

def handle_client(conn, addr):
    # Process client requests in dedicated thread
    conn.close()

# Pattern inside server loop:
# while True:
#     conn, addr = server_sock.accept()
#     thread = threading.Thread(target=handle_client, args=(conn, addr))
#     thread.daemon = True
#     thread.start()

print("Multi-threading pattern: one worker thread per accepted client connection")`,
    stdoutExpected: 'Multi-threading pattern: one worker thread per accepted client connection',
    explanationTitle: 'Thread-Per-Client Concurrency Pattern',
    explanationText:
      'A simple synchronous server blocks on accept() and recv(), preventing other clients from connecting. By spawning a new threading.Thread(target=handle_client, args=(conn, addr)) for each accepted socket, the server can service thousands of concurrent client connections simultaneously.',
    complexityInfo: 'PCPP 4.2 Concurrent socket servers',
  },
  {
    id: 'pcpp-s4-fc-034',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'The socketserver framework: TCPServer and BaseRequestHandler',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How does Python’s standard socketserver module simplify server creation via BaseRequestHandler?',
    codeSnippet: `import socketserver

class EchoHandler(socketserver.BaseRequestHandler):
    def handle(self):
        # self.request is the client socket object for TCPServer!
        # self.client_address is the (ip, port) tuple
        data = self.request.recv(1024)
        self.request.sendall(data)

# Usage:
# server = socketserver.TCPServer(("127.0.0.1", 9999), EchoHandler)
# server.serve_forever()

print("socketserver: subclass BaseRequestHandler and override handle()")`,
    stdoutExpected: 'socketserver: subclass BaseRequestHandler and override handle()',
    explanationTitle: 'Python socketserver Architecture',
    explanationText:
      'The socketserver module provides high-level classes (TCPServer, UDPServer). Developers subclass socketserver.BaseRequestHandler and override the handle() method. Inside handle(), self.request holds the connected client socket, and self.client_address provides the remote address tuple.',
    complexityInfo: 'PCPP 4.2 Standard library server abstractions',
  },
  {
    id: 'pcpp-s4-fc-035',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'socketserver.ThreadingTCPServer for concurrent client servicing',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How do you make a socketserver.TCPServer handle multiple clients concurrently using threads?',
    codeSnippet: `import socketserver

class ThreadedServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    pass

# Or use the pre-composed built-in convenience class:
# server = socketserver.ThreadingTCPServer(("0.0.0.0", 8888), MyHandler)

print("ThreadingTCPServer combines ThreadingMixIn with TCPServer")`,
    stdoutExpected: 'ThreadingTCPServer combines ThreadingMixIn with TCPServer',
    explanationTitle: 'socketserver.ThreadingTCPServer',
    explanationText:
      'socketserver.TCPServer handles requests synchronously one by one. By mixing in ThreadingMixIn (or directly instantiating socketserver.ThreadingTCPServer), the server automatically spawns a new operating system thread for each incoming client connection without manual thread creation.',
    complexityInfo: 'PCPP 4.2 Threaded server mixins',
  },
  {
    id: 'pcpp-s4-fc-036',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'I/O Multiplexing with the select.select() function',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What are the parameters and return values of the select.select() function in Python?',
    codeSnippet: `import select

# select.select(rlist, wlist, xlist[, timeout])
# rlist: sockets/descriptors to wait until ready for reading
# wlist: sockets to wait until ready for writing
# xlist: sockets to wait for an "exceptional condition"
# timeout: seconds to block (None = block indefinitely, 0 = poll without blocking)
#
# Returns: (readable_list, writable_list, exceptional_list)

print("select.select returns: 3 lists of ready descriptors")`,
    stdoutExpected: 'select.select returns: 3 lists of ready descriptors',
    explanationTitle: 'select.select() I/O Multiplexing',
    explanationText:
      'select.select() monitors multiple socket file descriptors simultaneously on a single thread. When any socket is ready to read or write without blocking, select returns three subsets of the provided lists. This was the historical foundation for asynchronous single-threaded networking.',
    complexityInfo: 'PCPP 4.2 I/O multiplexing primitives',
  },
  {
    id: 'pcpp-s4-fc-037',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'Modern event-driven multiplexing: the selectors module',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'Why is the selectors module preferred over select.select() in modern Python 3?',
    codeSnippet: `import selectors

# selectors.DefaultSelector automatically selects the most efficient OS mechanism:
# - epoll on Linux
# - kqueue on macOS / BSD
# - select on Windows fallback

sel = selectors.DefaultSelector()
print("Selector type:", type(sel).__name__)
print("Event flags:", hasattr(selectors, "EVENT_READ"), hasattr(selectors, "EVENT_WRITE"))
sel.close()`,
    stdoutExpected: 'Selector type: KqueueSelector\nEvent flags: True True',
    explanationTitle: 'selectors Module (DefaultSelector)',
    explanationText:
      'The selectors module provides high-level, platform-independent I/O multiplexing. selectors.DefaultSelector automatically picks the fastest OS notification mechanism (epoll on Linux, kqueue on macOS, Devpoll on Solaris, or select on Windows), avoiding O(N) descriptor scanning bottlenecks.',
    complexityInfo: 'PCPP 4.2 Modern I/O multiplexing',
  },
  {
    id: 'pcpp-s4-fc-038',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'Inspecting socket state with s.getsockname() and s.getpeername()',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How do you inspect the local address/port versus the remote peer’s address/port of an active socket?',
    codeSnippet: `import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(("127.0.0.1", 0))

# getsockname(): returns local socket address tuple (host, port)
local_addr = s.getsockname()
print("Local host:", local_addr[0])

# getpeername(): returns remote connected peer's address tuple
# Raises OSError: [Errno 57] Socket is not connected if not connected!

s.close()`,
    stdoutExpected: 'Local host: 127.0.0.1',
    explanationTitle: 's.getsockname() vs. s.getpeername()',
    explanationText:
      's.getsockname() returns the socket’s own local address (host, port) tuple. s.getpeername() returns the remote address tuple of the connected peer. Calling getpeername() on an unconnected socket raises an OSError.',
    complexityInfo: 'PCPP 4.2 Socket endpoint discovery',
  },
  {
    id: 'pcpp-s4-fc-039',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'Socket buffer sizes: SO_RCVBUF and SO_SNDBUF',
    category: 'T4: Network Programming',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'How do you check and adjust the operating system’s send and receive socket buffer sizes?',
    codeSnippet: `import socket

s = socket.socket()

# Inspect current OS receive buffer size:
rcvbuf = s.getsockopt(socket.SOL_SOCKET, socket.SO_RCVBUF)
# Modify receive buffer to 64KB:
s.setsockopt(socket.SOL_SOCKET, socket.SO_RCVBUF, 65536)

print("Receive buffer is positive int:", rcvbuf > 0)
s.close()`,
    stdoutExpected: 'Receive buffer is positive int: True',
    explanationTitle: 'SO_RCVBUF and SO_SNDBUF Options',
    explanationText:
      'The OS allocates kernel memory buffers for every socket. SO_RCVBUF sets the maximum receive buffer size, while SO_SNDBUF sets the send buffer size. Adjusting these via setsockopt() can optimize throughput on high-latency or high-bandwidth network links.',
    complexityInfo: 'PCPP 4.2 Kernel socket buffer tuning',
  },
  {
    id: 'pcpp-s4-fc-040',
    track: 'pcpp',
    cardType: 'PCPP 4.2 • Socket Programming',
    topic: 'Network error recovery: ConnectionResetError, ConnectionRefusedError, BrokenPipeError',
    category: 'T4: Network Programming',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '4.2',
    section: 'Section 4',
    question: 'What specific built-in OSError subclasses are raised when a server is offline, resets a connection, or writes to a closed socket?',
    codeSnippet: `# Common Network Exception Subclasses in Python 3:
# 1. ConnectionRefusedError: No server is listening on target host:port (RST packet received)
# 2. ConnectionResetError: Peer forcibly closed an existing connection (TCP RST)
# 3. ConnectionAbortedError: Local network stack aborted the connection
# 4. BrokenPipeError: Writing/sending to a socket that has already been closed by the peer

errs = [ConnectionRefusedError, ConnectionResetError, BrokenPipeError]
print("All inherit from ConnectionError/OSError:", all(issubclass(e, OSError) for e in errs))`,
    stdoutExpected: 'All inherit from ConnectionError/OSError: True',
    explanationTitle: 'Python 3 Connection Error Subclasses',
    explanationText:
      'Python 3 organizes OS socket errors into explicit exception subclasses of ConnectionError (which inherits from OSError): ConnectionRefusedError (server refused connection), ConnectionResetError (connection abruptly closed by peer), and BrokenPipeError (attempting to write to a closed peer socket).',
    complexityInfo: 'PCPP 4.2 Network exception handling',
  },
];
