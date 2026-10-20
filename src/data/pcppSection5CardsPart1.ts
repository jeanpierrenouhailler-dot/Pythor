import { Flashcard } from '../types';

/**
 * PCPP-32-10x SECTION 5: FILE PROCESSING AND DATA PERSISTENCE (Part 1: Cards 1 to 40)
 * - Chapter 5.1: Relational Database Operations with sqlite3 (Cards 1 to 20)
 * - Chapter 5.2: XML Processing with xml.etree.ElementTree (Cards 21 to 40)
 */
export const pcppSection5CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 5.1: RELATIONAL DATABASE OPERATIONS WITH SQLITE3 (Cards 1 to 20)
  // =========================================================================
  {
    id: 'pcpp-s5-fc-001',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Python DB-API 2.0 (PEP 249) and sqlite3 module overview',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'What is Python DB-API 2.0 (PEP 249), and how does the built-in sqlite3 module implement it?',
    codeSnippet: `import sqlite3

# PEP 249 specifies standard database interface classes:
# 1. Connection: Manages the database connection, transactions, and commits.
# 2. Cursor: Manages query execution and result fetching.

print("sqlite3 version:", sqlite3.version)
print("sqlite underlying lib version:", sqlite3.sqlite_version)
print("PEP 249 apilevel:", sqlite3.apilevel)
print("threadsafety:", sqlite3.threadsafety)
print("paramstyle:", sqlite3.paramstyle)`,
    stdoutExpected: 'sqlite3 version: 2.6.0\nsqlite underlying lib version: 3.39.5\nPEP 249 apilevel: 2.0\nthreadsafety: 1\nparamstyle: qmark',
    explanationTitle: 'Python DB-API 2.0 & sqlite3',
    explanationText:
      'PEP 249 defines the Python Database API Specification v2.0, standardizing how Python connects to SQL databases. sqlite3 is a built-in standard library module that adheres to DB-API 2.0 (apilevel="2.0", paramstyle="qmark" or "named"), providing a lightweight, zero-configuration serverless database engine.',
    complexityInfo: 'PCPP 5.1 DB-API 2.0 specification standards',
  },
  {
    id: 'pcpp-s5-fc-002',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'In-memory databases (":memory:") vs. file-based databases',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How do you create an ultra-fast in-memory SQLite database in Python, and what is its lifecycle?',
    codeSnippet: `import sqlite3

# Connecting to special path ':memory:' creates a database in RAM:
conn = sqlite3.connect(":memory:")
cursor = conn.cursor()

cursor.execute("CREATE TABLE temp_logs (id INT, msg TEXT)")
cursor.execute("INSERT INTO temp_logs VALUES (1, 'Boot OK')")
cursor.execute("SELECT msg FROM temp_logs WHERE id=1")
row = cursor.fetchone()
print("Retrieved from RAM:", row[0])

# When connection closes, the entire database is completely discarded:
conn.close()`,
    stdoutExpected: 'Retrieved from RAM: Boot OK',
    explanationTitle: 'In-Memory Databases (":memory:")',
    explanationText:
      'Passing ":memory:" to sqlite3.connect() instantiates a transient database residing entirely in RAM. It offers maximum performance for automated unit tests and caching. Once the connection is closed, all data and schemas in the in-memory database are permanently discarded.',
    complexityInfo: 'PCPP 5.1 In-memory SQLite lifecycle',
  },
  {
    id: 'pcpp-s5-fc-003',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Connection objects, cursor creation, and resource cleanup',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'What is the role of the Cursor object, and why must database connections be explicitly closed?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
# Cursors are created from Connection objects:
cur1 = conn.cursor()
cur2 = conn.cursor()

print("Cur1 is Cur2:", cur1 is cur2)
print("Cur1 connection is conn:", cur1.connection is conn)

cur1.close()
cur2.close()
conn.close()`,
    stdoutExpected: 'Cur1 is Cur2: False\nCur1 connection is conn: True',
    explanationTitle: 'Connections and Cursors',
    explanationText:
      'The Connection object represents the physical database file or memory session. Cursors represent the working context through which SQL statements are executed and result rows are fetched. Multiple independent cursors can be spawned from a single connection. Both cursors and connections should be closed to release file locks.',
    complexityInfo: 'PCPP 5.1 Connection and Cursor architecture',
  },
  {
    id: 'pcpp-s5-fc-004',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Executing DDL (Data Definition Language) commands',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How do you create tables with primary keys and constraints using cursor.execute()?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()

# DDL: CREATE TABLE IF NOT EXISTS
cur.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        score REAL DEFAULT 0.0
    )
""")

# Inspect master table for created schema:
cur.execute("SELECT name, sql FROM sqlite_master WHERE type='table'")
table_name, schema = cur.fetchone()
print("Created table:", table_name)
print("Contains AUTOINCREMENT:", "AUTOINCREMENT" in schema)`,
    stdoutExpected: 'Created table: users\nContains AUTOINCREMENT: True',
    explanationTitle: 'DDL Schema Creation in sqlite3',
    explanationText:
      'cursor.execute() executes single SQL statements including DDL commands (CREATE TABLE, DROP TABLE, ALTER TABLE). SQLite stores schema definitions in the special system table sqlite_master (or sqlite_schema in SQLite 3.33+).',
    complexityInfo: 'PCPP 5.1 Table creation and sqlite_master queries',
  },
  {
    id: 'pcpp-s5-fc-005',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'SQL injection risks and why Python string formatting must NEVER be used',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'Why is using f-strings, %, or str.format() to insert values into SQL queries a catastrophic security vulnerability?',
    codeSnippet: `# DANGEROUS / VULNERABLE PATTERN (NEVER DO THIS):
# user_input = "admin' OR '1'='1"
# query = f"SELECT * FROM users WHERE username = '{user_input}'"
# Result: SELECT * FROM users WHERE username = 'admin' OR '1'='1'
# -> Bypasses authentication completely and exposes all user records!

# SAFE PATTERN: Parameterized queries!
# cursor.execute("SELECT * FROM users WHERE username = ?", (user_input,))
# -> The SQLite engine compiles the SQL query structure FIRST,
#    then binds data values safely as literal data, preventing injection!

print("Rule: NEVER format SQL strings; ALWAYS use parameter binding (?, :name)")`,
    stdoutExpected: 'Rule: NEVER format SQL strings; ALWAYS use parameter binding (?, :name)',
    explanationTitle: 'SQL Injection Prevention',
    explanationText:
      'SQL injection occurs when unvalidated user input is concatenated directly into SQL command strings, altering query logic. The DB-API 2.0 parameterized query mechanism separates SQL compilation from parameter binding, making injection impossible by treating input purely as literal values.',
    complexityInfo: 'High-frequency exam security trap on query formatting',
  },
  {
    id: 'pcpp-s5-fc-006',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Parameterized queries: positional placeholders ("?")',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How do you pass positional parameters to cursor.execute() using "?" placeholders?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE products (id INT, name TEXT, price REAL)")

# Positional parameters: second argument MUST be a sequence (tuple or list):
cur.execute("INSERT INTO products VALUES (?, ?, ?)", (101, "Laptop", 899.99))

# Query with positional parameter:
target_id = 101
# CRITICAL TRAP: A single-element tuple requires a trailing comma: (target_id,)
cur.execute("SELECT name, price FROM products WHERE id = ?", (target_id,))
row = cur.fetchone()
print("Product:", row[0], "Price:", row[1])`,
    stdoutExpected: 'Product: Laptop Price: 899.99',
    explanationTitle: 'Positional Parameters ("qmark" Style)',
    explanationText:
      'In sqlite3, positional parameters are denoted by the "?" question mark symbol. The second argument to execute() must be a sequence (such as a tuple or list). For a single parameter, the tuple must have a trailing comma (e.g. (val,)), otherwise Python treats (val) as a grouped expression.',
    complexityInfo: 'Exam trap: single-element parameter tuples require a trailing comma (val,)',
  },
  {
    id: 'pcpp-s5-fc-007',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Parameterized queries: named placeholders (":name")',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How do you use named parameter placeholders (":name") with dictionary mapping in sqlite3?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE accounts (acc_id INT, owner TEXT, balance REAL)")

# Named placeholders use :key syntax matching dictionary keys:
data = {"owner": "Alice", "balance": 1500.50, "id": 5001}
cur.execute("""
    INSERT INTO accounts VALUES (:id, :owner, :balance)
""", data)

# Querying with named placeholders:
cur.execute("SELECT balance FROM accounts WHERE owner = :owner", {"owner": "Alice"})
print("Alice balance:", cur.fetchone()[0])`,
    stdoutExpected: 'Alice balance: 1500.5',
    explanationTitle: 'Named Parameters (":name" Style)',
    explanationText:
      'sqlite3 supports named placeholders prefixed with a colon (e.g. :id, :owner). When using named placeholders, the second argument to execute() must be a dict or a mapping where keys match placeholder names without the leading colon.',
    complexityInfo: 'PCPP 5.1 Named placeholder dictionary binding',
  },
  {
    id: 'pcpp-s5-fc-008',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Batch insertion with cursor.executemany()',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How do you efficiently insert a large batch of records using cursor.executemany()?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE colors (id INT, code TEXT)")

# executemany accepts a sequence of parameter tuples/lists:
records = [
    (1, "RED"),
    (2, "GREEN"),
    (3, "BLUE")
]
cur.executemany("INSERT INTO colors VALUES (?, ?)", records)

cur.execute("SELECT COUNT(*) FROM colors")
print("Total colors inserted:", cur.fetchone()[0])`,
    stdoutExpected: 'Total colors inserted: 3',
    explanationTitle: 'cursor.executemany() Batch Operations',
    explanationText:
      'cursor.executemany(sql, seq_of_parameters) optimizes batch operations by compiling the parameterized SQL statement once and executing it repeatedly across an iterable of sequences or dictionaries, drastically improving performance over a Python for-loop.',
    complexityInfo: 'PCPP 5.1 Batch database insertion',
  },
  {
    id: 'pcpp-s5-fc-009',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Executing multi-statement SQL scripts with cursor.executescript()',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'What is unique about cursor.executescript(), and what does it do with open transactions?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()

# executescript runs multiple raw SQL statements separated by semicolons:
script = """
    CREATE TABLE dept (id INT, name TEXT);
    INSERT INTO dept VALUES (10, 'Engineering');
    INSERT INTO dept VALUES (20, 'Marketing');
"""
# CRITICAL NOTE: executescript issues a COMMIT statement before running!
cur.executescript(script)

cur.execute("SELECT COUNT(*) FROM dept")
print("Department count:", cur.fetchone()[0])`,
    stdoutExpected: 'Department count: 2',
    explanationTitle: 'cursor.executescript() Semantics',
    explanationText:
      'cursor.executescript(sql_script) executes multiple semicolon-delimited SQL statements in one call. Crucial exam note: executescript() automatically issues an implicit COMMIT before executing, committing any pending uncommitted work in the current transaction!',
    complexityInfo: 'Critical exam trap: executescript automatically commits',
  },
  {
    id: 'pcpp-s5-fc-010',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Data retrieval methods: fetchone(), fetchall(), and fetchmany(size)',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How do fetchone(), fetchmany(size), and fetchall() behave when results are exhausted?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE nums (n INT)")
cur.executemany("INSERT INTO nums VALUES (?)", [(1,), (2,), (3,)])

cur.execute("SELECT n FROM nums ORDER BY n")
print("fetchone:", cur.fetchone())        # Returns single tuple (1,)
print("fetchmany(1):", cur.fetchmany(1))  # Returns list with 1 tuple [(2,)]
print("fetchall:", cur.fetchall())        # Returns list of remaining [(3,)]

# When exhausted:
print("fetchone exhausted:", cur.fetchone() is None)  # Returns None!
print("fetchall exhausted:", cur.fetchall() == [])    # Returns empty list []!`,
    stdoutExpected: 'fetchone: (1,)\nfetchmany(1): [(2,)]\nfetchall: [(3,)]\nfetchone exhausted: True\fetchall exhausted: True',
    explanationTitle: 'Result Fetching Methods',
    explanationText:
      'fetchone() returns the next row as a tuple, or None when no more rows remain. fetchall() returns all remaining rows as a list of tuples, or an empty list [] if exhausted. fetchmany(size=cursor.arraysize) returns a list up to size elements.',
    complexityInfo: 'Exam trap: fetchone returns None when exhausted; fetchall returns []',
  },
  {
    id: 'pcpp-s5-fc-011',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Direct cursor iteration without calling fetchall()',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'Why is directly iterating over a cursor preferred over calling cursor.fetchall() in a for-loop?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE ranks (title TEXT)")
cur.executemany("INSERT INTO ranks VALUES (?)", [("Gold",), ("Silver",), ("Bronze",)])

cur.execute("SELECT title FROM ranks")

# Preferred memory-efficient iterator pattern:
# The cursor acts as an iterator, streaming one row at a time:
results = []
for row in cur:
    results.append(row[0])

print("Fetched via direct iteration:", results)`,
    stdoutExpected: "Fetched via direct iteration: ['Gold', 'Silver', 'Bronze']",
    explanationTitle: 'Cursor as an Iterator',
    explanationText:
      'In Python DB-API 2.0, Cursor objects implement the Python iterator protocol (__iter__ and __next__). Directly looping with "for row in cursor:" streams rows lazily from the underlying engine without loading millions of rows into system memory at once like fetchall().',
    complexityInfo: 'PCPP 5.1 Memory-efficient cursor streaming',
  },
  {
    id: 'pcpp-s5-fc-012',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Transaction management: commit() and rollback()',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'Where are commit() and rollback() defined (Connection vs Cursor), and what happens if you close without committing?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE balance (user TEXT, amount INT)")
cur.execute("INSERT INTO balance VALUES ('Bob', 100)")

# commit() and rollback() belong to CONNECTION, NOT CURSOR!
print("conn has commit:", hasattr(conn, "commit"))
print("cur has commit:", hasattr(cur, "commit"))

# Modifying data and rolling back:
cur.execute("UPDATE balance SET amount = 999 WHERE user = 'Bob'")
conn.rollback() # Reverts uncommitted changes!

cur.execute("SELECT amount FROM balance WHERE user = 'Bob'")
print("Bob balance after rollback:", cur.fetchone()[0])`,
    stdoutExpected: 'conn has commit: True\ncur has commit: False\nBob balance after rollback: 100',
    explanationTitle: 'conn.commit() and conn.rollback()',
    explanationText:
      'Transactions in sqlite3 are managed on the Connection object (conn.commit(), conn.rollback()), NOT the cursor. Any uncommitted data modifications (INSERT, UPDATE, DELETE) are lost if the connection closes without calling conn.commit().',
    complexityInfo: 'Critical exam trap: commit() belongs to Connection, not Cursor',
  },
  {
    id: 'pcpp-s5-fc-013',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Connection as a context manager ("with conn:")',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'CRITICAL TRAP: What does "with conn:" do upon normal exit versus an exception, and does it close the connection?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE ledger (id INT PRIMARY KEY, val TEXT)")

# "with conn" manages TRANSACTIONS, NOT connection lifetime!
# On successful block exit: calls conn.commit() automatically!
# On exception: calls conn.rollback() automatically!
with conn:
    cur.execute("INSERT INTO ledger VALUES (1, 'Trans A')")

# IMPORTANT: It does NOT close the connection!
print("Connection still open after 'with conn':", True)

try:
    with conn:
        cur.execute("INSERT INTO ledger VALUES (1, 'Duplicate ID')") # IntegrityError!
except sqlite3.IntegrityError:
    print("Caught integrity violation; transaction was rolled back automatically")`,
    stdoutExpected: 'Connection still open after \'with conn\': True\nCaught integrity violation; transaction was rolled back automatically',
    explanationTitle: 'Connection Context Manager Semantics',
    explanationText:
      'When used as a context manager ("with conn:"), the Connection manages transactions: it automatically commits on clean exit and rolls back if an exception occurs. Crucial exam trap: "with conn:" DOES NOT close the connection! conn.close() must still be called.',
    complexityInfo: 'High-frequency exam trap: with conn manages transactions, not closing',
  },
  {
    id: 'pcpp-s5-fc-014',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Custom Row Factory: sqlite3.Row for dict-like column access',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How do you access SQL result columns by column name instead of integer indices using sqlite3.Row?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
# Setting row_factory to sqlite3.Row provides named column access:
conn.row_factory = sqlite3.Row

cur = conn.cursor()
cur.execute("CREATE TABLE employees (emp_id INT, name TEXT, role TEXT)")
cur.execute("INSERT INTO employees VALUES (1, 'Diana', 'Architect')")

cur.execute("SELECT emp_id, name, role FROM employees")
row = cur.fetchone()

# sqlite3.Row supports index access, name access, and keys() method:
print("By index:", row[1])
print("By column name:", row["role"])
print("Column keys:", row.keys())`,
    stdoutExpected: "By index: Diana\nBy column name: Architect\nColumn keys: ['emp_id', 'name', 'role']",
    explanationTitle: 'sqlite3.Row Factory',
    explanationText:
      'Setting conn.row_factory = sqlite3.Row transforms rows from standard tuples into sqlite3.Row instances. These objects support both 0-based integer indexing (row[0]) and case-insensitive column name indexing (row["name"]), as well as row.keys().',
    complexityInfo: 'PCPP 5.1 Named column access with row_factory',
  },
  {
    id: 'pcpp-s5-fc-015',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Cursor attributes: lastrowid and rowcount',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'What do cursor.lastrowid and cursor.rowcount report after executing SQL commands?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)")

cur.execute("INSERT INTO tasks (name) VALUES ('Task A')")
print("First lastrowid:", cur.lastrowid)

cur.execute("INSERT INTO tasks (name) VALUES ('Task B')")
print("Second lastrowid:", cur.lastrowid)

cur.execute("UPDATE tasks SET name = 'Completed' WHERE id <= 2")
print("Rows affected (rowcount):", cur.rowcount)`,
    stdoutExpected: 'First lastrowid: 1\nSecond lastrowid: 2\nRows affected (rowcount): 2',
    explanationTitle: 'lastrowid and rowcount Attributes',
    explanationText:
      'cursor.lastrowid returns the integer primary key of the last inserted row (or None if no INSERT took place). cursor.rowcount returns the number of rows modified by an INSERT, UPDATE, or DELETE statement (note: in SQLite, rowcount is -1 for SELECT until all rows are fetched).',
    complexityInfo: 'PCPP 5.1 Cursor metadata tracking',
  },
  {
    id: 'pcpp-s5-fc-016',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'SQLite dynamic typing and type affinity system',
    category: 'T5: Data Persistence',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How does SQLite dynamic type affinity differ from strict relational databases like PostgreSQL or MySQL?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()
# In SQLite, column types are hints ("affinities"), not rigid constraints!
cur.execute("CREATE TABLE flexible (val INTEGER)")

# Storing text inside an INTEGER column is allowed in standard SQLite!
cur.execute("INSERT INTO flexible VALUES (?)", ("Not An Integer",))
cur.execute("SELECT val, typeof(val) FROM flexible")
val, col_type = cur.fetchone()

print("Stored value:", val)
print("Underlying SQLite storage type:", col_type)`,
    stdoutExpected: 'Stored value: Not An Integer\nUnderlying SQLite storage type: text',
    explanationTitle: 'SQLite Type Affinity',
    explanationText:
      'Unlike standard SQL databases with static data types, SQLite uses dynamic typing with 5 storage classes: NULL, INTEGER, REAL, TEXT, and BLOB. The column type declared in CREATE TABLE defines a type affinity, but SQLite will happily store any datatype unless strict table constraints are enabled.',
    complexityInfo: 'PCPP 5.1 SQLite storage classes and type affinities',
  },
  {
    id: 'pcpp-s5-fc-017',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Custom type adapters (register_adapter) and converters (register_converter)',
    category: 'T5: Data Persistence',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How do you store and retrieve complex Python objects (like Point or datetime) automatically using adapters and converters?',
    codeSnippet: `import sqlite3

class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __repr__(self):
        return f"Point({self.x},{self.y})"

# Adapter: Python Object -> SQLite string
def adapt_point(pt):
    return f"{pt.x};{pt.y}"

# Converter: SQLite string bytes -> Python Object
def convert_point(raw_bytes):
    x, y = map(float, raw_bytes.split(b";"))
    return Point(x, y)

sqlite3.register_adapter(Point, adapt_point)
sqlite3.register_converter("point", convert_point)

# PARSE_DECLTYPES tells sqlite3 to inspect declared column types:
conn = sqlite3.connect(":memory:", detect_types=sqlite3.PARSE_DECLTYPES)
cur = conn.cursor()
cur.execute("CREATE TABLE geo (p point)")
cur.execute("INSERT INTO geo VALUES (?)", (Point(3.5, 7.2),))

cur.execute("SELECT p FROM geo")
recovered = cur.fetchone()[0]
print("Recovered type:", type(recovered).__name__)
print("Recovered repr:", repr(recovered))`,
    stdoutExpected: 'Recovered type: Point\nRecovered repr: Point(3.5,7.2)',
    explanationTitle: 'Type Adapters & Converters',
    explanationText:
      'sqlite3.register_adapter(PyType, func) converts custom Python instances to primitive SQLite values before insertion. sqlite3.register_converter("TYPENAME", func) decodes raw bytes from the database back into custom objects when detect_types=sqlite3.PARSE_DECLTYPES is passed to connect().',
    complexityInfo: 'PCPP 5.1 Object serialization in relational tables',
  },
  {
    id: 'pcpp-s5-fc-018',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'sqlite3 exception hierarchy: Error, DatabaseError, IntegrityError, OperationalError',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'What is the exception inheritance hierarchy in sqlite3, and which exceptions catch syntax errors vs. unique constraint violations?',
    codeSnippet: `import sqlite3

# DB-API 2.0 Exception Hierarchy:
# Exception
#  └── sqlite3.Error
#       ├── sqlite3.DatabaseError
#       │    ├── sqlite3.IntegrityError   (UNIQUE, NOT NULL, FOREIGN KEY failures)
#       │    ├── sqlite3.OperationalError (Syntax error, table not found, locked db)
#       │    ├── sqlite3.DataError        (Value out of range)
#       │    ├── sqlite3.InternalError
#       │    ├── sqlite3.ProgrammingError (Closed connection, bad parameter count)
#       │    └── sqlite3.NotSupportedError
#       └── sqlite3.Warning

print("IntegrityError is DatabaseError:", issubclass(sqlite3.IntegrityError, sqlite3.DatabaseError))
print("OperationalError is DatabaseError:", issubclass(sqlite3.OperationalError, sqlite3.DatabaseError))
print("DatabaseError is Error:", issubclass(sqlite3.DatabaseError, sqlite3.Error))`,
    stdoutExpected: 'IntegrityError is DatabaseError: True\nOperationalError is DatabaseError: True\nDatabaseError is Error: True',
    explanationTitle: 'sqlite3 Exception Hierarchy',
    explanationText:
      'All database errors inherit from sqlite3.Error. Common subclasses include IntegrityError (raised when schema constraints like UNIQUE or NOT NULL are violated) and OperationalError (raised for SQL syntax errors, missing tables, or locked database files). Catching sqlite3.Error catches all of them.',
    complexityInfo: 'High-frequency exam exception hierarchy question',
  },
  {
    id: 'pcpp-s5-fc-019',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Creating custom SQL scalar functions with conn.create_function()',
    category: 'T5: Data Persistence',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How do you register a custom Python function to be called directly inside SQL statements using conn.create_function()?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()

# Registering a custom Python function inside SQLite:
# Signature: conn.create_function(name, num_params, func)
def reverse_str(text):
    return text[::-1] if text else None

conn.create_function("py_rev", 1, reverse_str)

cur.execute("SELECT py_rev('PCPP-32-10x')")
result = cur.fetchone()[0]
print("Reversed via SQL:", result)`,
    stdoutExpected: 'Reversed via SQL: x01-23-PPCP',
    explanationTitle: 'conn.create_function()',
    explanationText:
      'conn.create_function(name, num_params, func) defines a user-defined SQL scalar function implemented in Python that can be invoked inside SELECT, WHERE, and ORDER BY clauses. Passing num_params=-1 allows variable numbers of arguments.',
    complexityInfo: 'PCPP 5.1 User-defined SQL function registration',
  },
  {
    id: 'pcpp-s5-fc-020',
    track: 'pcpp',
    cardType: 'PCPP 5.1 • SQLite3 Operations',
    topic: 'Database backups using conn.backup()',
    category: 'T5: Data Persistence',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.1',
    section: 'Section 5',
    question: 'How do you make an online, non-blocking backup of a live SQLite database using the backup() method?',
    codeSnippet: `import sqlite3

# Source database (e.g. in-memory working database)
src = sqlite3.connect(":memory:")
cur = src.cursor()
cur.execute("CREATE TABLE settings (key TEXT, val TEXT)")
cur.execute("INSERT INTO settings VALUES ('theme', 'dark')")
src.commit()

# Target database (destination)
dest = sqlite3.connect(":memory:")

# Perform online database copy without manual SELECT/INSERT:
src.backup(dest)

dest_cur = dest.cursor()
dest_cur.execute("SELECT val FROM settings WHERE key='theme'")
print("Backed up setting:", dest_cur.fetchone()[0])

src.close()
dest.close()`,
    stdoutExpected: 'Backed up setting: dark',
    explanationTitle: 'Online Backups with conn.backup()',
    explanationText:
      'The conn.backup(target_conn) method allows making online copies of a SQLite database to another connection (e.g. persisting an in-memory database to disk, or creating live replicas) safely without locking the source database or copying raw files on disk while writes are active.',
    complexityInfo: 'PCPP 5.1 Enterprise backup and migration API',
  },

  // =========================================================================
  // CHAPTER 5.2: XML PROCESSING WITH XML.ETREE.ELEMENTTREE (Cards 21 to 40)
  // =========================================================================
  {
    id: 'pcpp-s5-fc-021',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'XML syntax structure: tags, elements, attributes, text, and root hierarchy',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What are the essential building blocks of an XML document according to the W3C specification?',
    codeSnippet: `# XML Document Structure:
# <?xml version="1.0" encoding="utf-8"?>  <- XML Declaration / Prolog
# <library name="Central">                <- Root Element (tag="library", attrib={"name": "Central"})
#     <book id="b1">                      <- Child Element
#         <title>Python Mastery</title>   <- tag="title", text="Python Mastery"
#     </book>
# </library>

# Rules:
# 1. Exactly ONE single root element that encloses all other elements.
# 2. All tags must be properly closed (<tag>...</tag> or <tag/>).
# 3. Tags are case-sensitive (<Book> != <book>).
# 4. Attribute values MUST be quoted ("val" or 'val').

print("XML has exactly 1 root element, case-sensitive tags, and quoted attributes")`,
    stdoutExpected: 'XML has exactly 1 root element, case-sensitive tags, and quoted attributes',
    explanationTitle: 'XML Specification Fundamentals',
    explanationText:
      'XML (eXtensible Markup Language) organizes hierarchical data into a tree. An XML document must be well-formed: it must contain exactly one root element, every opening tag must have a matching closing tag (case-sensitive), elements must be properly nested, and attribute values must be enclosed in quotes.',
    complexityInfo: 'PCPP 5.2 XML specification fundamentals',
  },
  {
    id: 'pcpp-s5-fc-022',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Parsing XML: ET.parse() vs. ET.fromstring()',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'CRITICAL TRAP: What is the difference in return types between ET.parse() and ET.fromstring()?',
    codeSnippet: `import xml.etree.ElementTree as ET

xml_data = "<app id='app1'><version>2.0</version></app>"

# Case 1: fromstring() takes a string/bytes and returns the ROOT ELEMENT:
root = ET.fromstring(xml_data)
print("fromstring returns:", type(root).__name__) # Element

# Case 2: parse() takes a file path or file-like stream and returns an ELEMENTTREE:
# tree = ET.parse("config.xml") -> returns ElementTree
# To get the root element from an ElementTree:
# root = tree.getroot()

print("Root tag:", root.tag)
print("Root attribute 'id':", root.attrib.get("id"))`,
    stdoutExpected: 'fromstring returns: Element\nRoot tag: app\nRoot attribute \'id\': app1',
    explanationTitle: 'ET.parse() vs. ET.fromstring()',
    explanationText:
      'ET.fromstring(text) parses a string directly and returns the root Element instance. ET.parse(source) parses a file path or file stream and returns an ElementTree wrapper object; to access the root element of an ElementTree, you must call tree.getroot().',
    complexityInfo: 'Critical exam trap: parse() returns ElementTree; fromstring() returns Element',
  },
  {
    id: 'pcpp-s5-fc-023',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Element properties: tag, attrib (dictionary), and text',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What are the 3 primary data properties of an Element object in ElementTree?',
    codeSnippet: `import xml.etree.ElementTree as ET

xml = '<server ip="192.168.1.1" port="8080">Production Gateway</server>'
elem = ET.fromstring(xml)

# 1. elem.tag -> string containing the element name
# 2. elem.attrib -> Python dictionary containing element attributes
# 3. elem.text -> string content inside the element (or None if empty)

print("Tag:", elem.tag)
print("Attrib dict:", elem.attrib)
print("Text content:", elem.text.strip())`,
    stdoutExpected: "Tag: server\nAttrib dict: {'ip': '192.168.1.1', 'port': '8080'}\nText content: Production Gateway",
    explanationTitle: 'Element Core Properties',
    explanationText:
      'An ElementTree Element object models an XML node. Its three foundational attributes are tag (the element name as str), attrib (a standard Python dictionary containing all XML attribute key-value pairs), and text (the text content between opening and closing tags).',
    complexityInfo: 'PCPP 5.2 Element data model',
  },
  {
    id: 'pcpp-s5-fc-024',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Accessing child elements: sequence indexing, len(), and iteration',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How do Element objects behave like Python sequences for inspecting child nodes?',
    codeSnippet: `import xml.etree.ElementTree as ET

xml = """
<menu>
    <item name="Coffee">3.50</item>
    <item name="Tea">2.50</item>
    <item name="Juice">4.00</item>
</menu>
"""
root = ET.fromstring(xml)

# Elements support len() and sequence indexing [i]:
print("Total child items:", len(root))
print("First child tag:", root[0].tag, "item name:", root[0].attrib["name"])
print("Last child item:", root[-1].attrib["name"])

# Direct iteration loops over DIRECT children:
names = [child.attrib["name"] for child in root]
print("All children names:", names)`,
    stdoutExpected: "Total child items: 3\nFirst child tag: item item name: Coffee\nLast child item: Juice\nAll children names: ['Coffee', 'Tea', 'Juice']",
    explanationTitle: 'Element as a Sequence Container',
    explanationText:
      'An Element acts like a list of its direct child elements. You can query child count with len(elem), access children by 0-based index or slice (elem[0], elem[-1]), and iterate directly with "for child in elem:" which yields only direct children.',
    complexityInfo: 'PCPP 5.2 Element sequence operations',
  },
  {
    id: 'pcpp-s5-fc-025',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Finding elements: find(), findall(), and findtext()',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What is the distinction between find(), findall(), and findtext() in ElementTree?',
    codeSnippet: `import xml.etree.ElementTree as ET

xml = """
<catalog>
    <book id="1"><author>Knuth</author></book>
    <book id="2"><author>Lutz</author></book>
</catalog>
"""
root = ET.fromstring(xml)

# find(match): Returns FIRST matching element (or None if not found):
first_book = root.find("book")
print("find() author:", first_book.find("author").text)

# findall(match): Returns a LIST of ALL matching direct child elements:
all_books = root.findall("book")
print("findall() count:", len(all_books))

# findtext(match, default=None): Directly returns text of first match:
author_text = root.findtext("book/author")
print("findtext():", author_text)`,
    stdoutExpected: 'find() author: Knuth\nfindall() count: 2\nfindtext(): Knuth',
    explanationTitle: 'Element Search Methods',
    explanationText:
      'find() returns the first child matching the tag/path, or None. findall() returns a list containing all matching children (empty list [] if none match). findtext() retrieves the .text attribute of the first matching child directly, returning default (None) if not found.',
    complexityInfo: 'PCPP 5.2 Querying child nodes',
  },
  {
    id: 'pcpp-s5-fc-026',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Deep recursive traversal with elem.iter(tag)',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How do you find all occurrences of a tag anywhere in an XML tree regardless of nesting depth?',
    codeSnippet: `import xml.etree.ElementTree as ET

xml = """
<organization>
    <department name="Sales">
        <employee id="e1">Alice</employee>
    </department>
    <department name="Dev">
        <team name="Backend">
            <employee id="e2">Bob</employee>
        </team>
    </department>
</organization>
"""
root = ET.fromstring(xml)

# iter(tag) recursively traverses all descendants in document order:
# If tag is None or omitted, iter() yields ALL elements in the tree!
employees = [emp.text for emp in root.iter("employee")]
print("All nested employees:", employees)

total_nodes = sum(1 for _ in root.iter())
print("Total elements in document:", total_nodes)`,
    stdoutExpected: "All nested employees: ['Alice', 'Bob']\nTotal elements in document: 6",
    explanationTitle: 'Recursive Traversal with iter()',
    explanationText:
      'elem.iter(tag=None) creates a tree iterator that recursively walks all descendants (children, grandchildren, etc.) in document order. Passing a tag filters for matching elements, while omitting tag or passing None yields every element including the root node.',
    complexityInfo: 'PCPP 5.2 Deep tree traversal pattern',
  },
  {
    id: 'pcpp-s5-fc-027',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'XPath support in ElementTree: relative paths and wildcards',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'Which XPath syntax expressions are supported in ElementTree search methods?',
    codeSnippet: `import xml.etree.ElementTree as ET

xml = """
<store>
    <item category="fruit"><name>Apple</name><price>1.00</price></item>
    <item category="veggie"><name>Carrot</name><price>0.50</price></item>
    <aisle id="3"><item category="fruit"><name>Banana</name><price>0.75</price></item></aisle>
</store>
"""
root = ET.fromstring(xml)

# XPath in ElementTree:
# '.'     -> Current element
# '*'     -> All direct child elements (wildcard)
# './/'   -> All descendants anywhere at any depth
# 'parent/child' -> Direct hierarchical path

# All <item> tags anywhere in the tree:
any_item = root.findall(".//item")
print("Descendant items count:", len(any_item))

# Names of all direct items under store:
direct_names = [e.text for e in root.findall("item/name")]
print("Direct item names:", direct_names)`,
    stdoutExpected: "Descendant items count: 3\nDirect item names: ['Apple', 'Carrot']",
    explanationTitle: 'XPath Support in ElementTree',
    explanationText:
      'ElementTree supports a limited subset of XPath: "." selects self, "*" matches any child, "parent/child" matches direct children, and ".//tag" searches for tag anywhere among descendants. Note: ElementTree does not support full XPath 2.0 or axes like preceding-sibling.',
    complexityInfo: 'PCPP 5.2 Supported XPath expressions',
  },
  {
    id: 'pcpp-s5-fc-028',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'XPath attribute filtering predicates: [@attrib="val"]',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How do you filter elements by attribute existence or specific attribute value using XPath predicates?',
    codeSnippet: `import xml.etree.ElementTree as ET

xml = """
<fleet>
    <vehicle type="car" active="true">Sedan</vehicle>
    <vehicle type="truck" active="false">Pickup</vehicle>
    <vehicle type="car" active="false">Coupe</vehicle>
</fleet>
"""
root = ET.fromstring(xml)

# [@attrib='value']: Filters elements where attrib equals value
active_vehicles = root.findall("vehicle[@active='true']")
print("Active vehicles:", [v.text for v in active_vehicles])

# [@attrib]: Filters elements that POSSESS the attribute
cars = root.findall("vehicle[@type='car']")
print("Cars count:", len(cars))`,
    stdoutExpected: "Active vehicles: ['Sedan']\nCars count: 2",
    explanationTitle: 'XPath Attribute Predicates',
    explanationText:
      'ElementTree supports attribute predicates: "[@attr]" checks for the presence of an attribute, and "[@attr=\'val\']" checks for an exact attribute value match. Predicates are enclosed in square brackets and applied directly to the tag.',
    complexityInfo: 'PCPP 5.2 XPath predicate filters',
  },
  {
    id: 'pcpp-s5-fc-029',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Modifying element attributes: get(), set(), and attrib dict',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How do you inspect, add, update, and remove attributes on an Element node?',
    codeSnippet: `import xml.etree.ElementTree as ET

elem = ET.Element("device", attrib={"id": "dev-01"})

# 1. get(key, default=None): Safely read an attribute
print("Read id:", elem.get("id"))
print("Read missing with default:", elem.get("status", "offline"))

# 2. set(key, val): Add or mutate an attribute (value MUST be string!)
elem.set("status", "online")
elem.set("ip", "10.0.0.5")

# 3. del elem.attrib[key]: Remove an attribute
del elem.attrib["id"]

print("Final attributes:", elem.attrib)`,
    stdoutExpected: "Read id: dev-01\nRead missing with default: offline\nFinal attributes: {'status': 'online', 'ip': '10.0.0.5'}",
    explanationTitle: 'Attribute Manipulation',
    explanationText:
      'elem.get(key, default) reads an attribute safely. elem.set(key, val) updates or adds an attribute (the value must be a str). Attributes can also be directly modified or deleted via the elem.attrib dictionary.',
    complexityInfo: 'PCPP 5.2 Modifying element attributes',
  },
  {
    id: 'pcpp-s5-fc-030',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Creating elements: ET.Element() vs. ET.SubElement()',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How do you programmatically create and attach child elements using ET.SubElement()?',
    codeSnippet: `import xml.etree.ElementTree as ET

# 1. ET.Element(tag, attrib={}): Creates a standalone unattached element
root = ET.Element("company", {"name": "Acme Corp"})

# 2. ET.SubElement(parent, tag, attrib={}): Creates a child AND automatically appends it to parent!
emp = ET.SubElement(root, "employee", {"id": "100"})
emp.text = "Alice Smith"

# Or manually:
child2 = ET.Element("employee", {"id": "101"})
child2.text = "Bob Jones"
root.append(child2) # Explicit append

print("Child count:", len(root))
print("First employee name:", root[0].text)
print("Second employee id:", root[1].attrib["id"])`,
    stdoutExpected: 'Child count: 2\nFirst employee name: Alice Smith\nSecond employee id: 101',
    explanationTitle: 'Element and SubElement Construction',
    explanationText:
      'ET.Element(tag) creates an unattached element node. ET.SubElement(parent, tag, attrib) creates an element and automatically appends it to parent in one operation. Elements can also be manually attached to a parent using parent.append(child).',
    complexityInfo: 'PCPP 5.2 XML DOM tree generation',
  },
  {
    id: 'pcpp-s5-fc-031',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Understanding elem.text vs. elem.tail in mixed-content XML',
    category: 'T5: Data Persistence',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What is elem.tail in ElementTree, and how does it store mixed content text after an element?',
    codeSnippet: `import xml.etree.ElementTree as ET

# Mixed-content XML: text exists both inside and after tags
xml = "<p>Visit <b>Google</b> today for search.</p>"
root = ET.fromstring(xml)

bold_elem = root.find("b")
print("root.text:", repr(root.text))          # Text inside <p> before <b>
print("bold_elem.text:", repr(bold_elem.text)) # Text inside <b>
print("bold_elem.tail:", repr(bold_elem.tail)) # Text AFTER </b> but before </p>!`,
    stdoutExpected: "root.text: 'Visit '\nbold_elem.text: 'Google'\nbold_elem.tail: ' today for search.'",
    explanationTitle: 'elem.text vs. elem.tail',
    explanationText:
      'In ElementTree, elem.text holds text immediately following the opening tag up to the first child element or closing tag. elem.tail holds text that immediately follows the element closing tag up to the next sibling tag or parent closing tag.',
    complexityInfo: 'Advanced PCPP 5.2 mixed-content text representation',
  },
  {
    id: 'pcpp-s5-fc-032',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Removing child elements with parent.remove(child)',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How do you delete a specific child element from an XML tree using parent.remove()?',
    codeSnippet: `import xml.etree.ElementTree as ET

xml = "<tasks><task id='1'/><task id='2'/><task id='3'/></tasks>"
root = ET.fromstring(xml)

# To remove a child, you must call remove() ON THE PARENT:
task2 = root.find("task[@id='2']")
root.remove(task2)

remaining_ids = [t.attrib["id"] for t in root]
print("Remaining task IDs:", remaining_ids)`,
    stdoutExpected: "Remaining task IDs: ['1', '3']",
    explanationTitle: 'Element Removal (parent.remove)',
    explanationText:
      'In ElementTree, an element cannot delete itself; you must invoke parent.remove(child) on its direct parent. If child is not a direct child of parent, a ValueError is raised.',
    complexityInfo: 'PCPP 5.2 Node removal syntax',
  },
  {
    id: 'pcpp-s5-fc-033',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Serializing XML to string with ET.tostring() and encoding',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What does ET.tostring() return by default, and how do you specify string vs byte output?',
    codeSnippet: `import xml.etree.ElementTree as ET

root = ET.Element("root")
child = ET.SubElement(root, "msg")
child.text = "Hello XML"

# Default: returns raw BYTES encoded as us-ascii or utf-8
raw_bytes = ET.tostring(root, encoding="utf-8")
print("Default return type:", type(raw_bytes).__name__)

# Setting encoding="unicode" returns a Python STR!
unicode_str = ET.tostring(root, encoding="unicode")
print("Unicode return type:", type(unicode_str).__name__)
print("Serialized string:", unicode_str)`,
    stdoutExpected: 'Default return type: bytes\nUnicode return type: str\nSerialized string: <root><msg>Hello XML</msg></root>',
    explanationTitle: 'ET.tostring() Serialization',
    explanationText:
      'ET.tostring(element, encoding="utf-8") serializes an XML tree into raw bytes. To obtain a native Python str, specify encoding="unicode". By default, tostring() does not format with indentation.',
    complexityInfo: 'Exam trap: tostring() returns bytes by default; encoding="unicode" returns str',
  },
  {
    id: 'pcpp-s5-fc-034',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Writing XML files with tree.write() and xml_declaration',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How do you write an ElementTree to an XML file on disk with the XML declaration header?',
    codeSnippet: `import xml.etree.ElementTree as ET
import io

root = ET.Element("config")
ET.SubElement(root, "theme").text = "dark"
tree = ET.ElementTree(root)

# Writing to file stream:
stream = io.BytesIO()
tree.write(stream, encoding="utf-8", xml_declaration=True)

output = stream.getvalue().decode("utf-8")
print("Has XML declaration:", output.startswith("<?xml"))
print("First line:", output.splitlines()[0])`,
    stdoutExpected: "Has XML declaration: True\nFirst line: <?xml version='1.0' encoding='utf-8'?>",
    explanationTitle: 'tree.write() File Serialization',
    explanationText:
      'The tree.write(file_or_path, encoding="utf-8", xml_declaration=True) method writes the document to disk. Setting xml_declaration=True includes the standard "<?xml version=\'1.0\' encoding=\'utf-8\'?>" prolog at the start of the file.',
    complexityInfo: 'PCPP 5.2 Disk output and XML prolog generation',
  },
  {
    id: 'pcpp-s5-fc-035',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Pretty-printing XML with ET.indent() (Python 3.9+)',
    category: 'T5: Data Persistence',
    difficulty: 'Beginner',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How do you format an XML tree with clean indentation and newlines in modern Python?',
    codeSnippet: `import xml.etree.ElementTree as ET

root = ET.Element("zoo")
ET.SubElement(root, "animal").text = "Lion"
ET.SubElement(root, "animal").text = "Zebra"

# Python 3.9+ introduced built-in ET.indent() to format trees in-place:
ET.indent(root, space="  ", level=0)

formatted = ET.tostring(root, encoding="unicode")
print("Formatted output:")
print(formatted)`,
    stdoutExpected: 'Formatted output:\n<zoo>\n  <animal>Lion</animal>\n  <animal>Zebra</animal>\n</zoo>',
    explanationTitle: 'Pretty-Printing with ET.indent()',
    explanationText:
      'Python 3.9 added ET.indent(tree, space="  ", level=0), which modifies whitespace (.text and .tail attributes) in-place throughout the entire element tree to produce cleanly indented, human-readable XML without third-party libraries.',
    complexityInfo: 'PCPP 5.2 Built-in pretty-printing',
  },
  {
    id: 'pcpp-s5-fc-036',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Memory-efficient incremental parsing with ET.iterparse()',
    category: 'T5: Data Persistence',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How do you parse multi-gigabyte XML files without exhausting system RAM using ET.iterparse()?',
    codeSnippet: `import xml.etree.ElementTree as ET
import io

xml_data = b"<records><rec id='1'/><rec id='2'/><rec id='3'/></records>"
stream = io.BytesIO(xml_data)

# iterparse streams events ('start', 'end') lazily:
ids = []
for event, elem in ET.iterparse(stream, events=("end",)):
    if elem.tag == "rec":
        ids.append(elem.attrib["id"])
        # CRITICAL: elem.clear() frees memory for processed nodes!
        elem.clear()

print("Processed IDs incrementally:", ids)`,
    stdoutExpected: "Processed IDs incrementally: ['1', '2', '3']",
    explanationTitle: 'ET.iterparse() for Large Documents',
    explanationText:
      'ET.iterparse(source, events=("end",)) parses XML incrementally as a generator yielding (event, elem) tuples. Calling elem.clear() after processing each record discards finished child nodes from memory, allowing massive XML files to be parsed with minimal constant RAM.',
    complexityInfo: 'PCPP 5.2 High-volume XML streaming pattern',
  },
  {
    id: 'pcpp-s5-fc-037',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Error handling with ET.ParseError',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What exception is raised when parsing malformed or syntactically invalid XML?',
    codeSnippet: `import xml.etree.ElementTree as ET

# Unclosed tag: <open> without </open>
malformed_xml = "<open><unclosed></open>"

try:
    ET.fromstring(malformed_xml)
except ET.ParseError as err:
    print("Caught:", type(err).__name__)
    print("Is SyntaxError subclass:", issubclass(ET.ParseError, SyntaxError))
    # err.code, err.position (line, column)
    print("Error location exists:", hasattr(err, "position"))`,
    stdoutExpected: 'Caught: ParseError\nIs SyntaxError subclass: True\nError location exists: True',
    explanationTitle: 'ET.ParseError Exception',
    explanationText:
      'When the XML parser encounters ill-formed XML (mismatched tags, unquoted attributes, multiple roots), it raises xml.etree.ElementTree.ParseError (a subclass of SyntaxError). The exception object provides code and position (line, column) diagnostics.',
    complexityInfo: 'PCPP 5.2 XML parsing error handling',
  },
  {
    id: 'pcpp-s5-fc-038',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'XML Namespaces and Clark notation: {uri}tag',
    category: 'T5: Data Persistence',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How does ElementTree represent XML namespaces using Clark notation?',
    codeSnippet: `import xml.etree.ElementTree as ET

xml = """
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
    <title>Tech News</title>
    <media:content url="image.png"/>
</feed>
"""
root = ET.fromstring(xml)

# Clark Notation: {namespace_URI}local_tag_name
print("Root tag with default NS:", root.tag)

# Searching using namespaces dictionary:
ns = {"atom": "http://www.w3.org/2005/Atom", "media": "http://search.yahoo.com/mrss/"}
title_elem = root.find("atom:title", ns)
print("Title text:", title_elem.text)

media_elem = root.find("media:content", ns)
print("Media URL:", media_elem.attrib["url"])`,
    stdoutExpected: 'Root tag with default NS: {http://www.w3.org/2005/Atom}feed\nTitle text: Tech News\nMedia URL: image.png',
    explanationTitle: 'XML Namespaces in ElementTree',
    explanationText:
      'ElementTree uses James Clark notation for namespaces: "{URI}tag". In raw tags, the namespace URI is enclosed in curly braces followed by the local tag name. To search with prefixes, pass a dictionary mapping prefix names to URIs as the namespaces parameter to find() or findall().',
    complexityInfo: 'PCPP 5.2 XML namespace resolution',
  },
  {
    id: 'pcpp-s5-fc-039',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'Creating comments and CDATA sections in ElementTree',
    category: 'T5: Data Persistence',
    difficulty: 'Intermediate',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'How do you insert XML comments programmatically using ET.Comment()?',
    codeSnippet: `import xml.etree.ElementTree as ET

root = ET.Element("app")
# ET.Comment(text) creates an XML comment node: <!-- text -->
comment = ET.Comment("Database credentials below")
root.append(comment)

db = ET.SubElement(root, "db")
db.text = "postgres"

xml_str = ET.tostring(root, encoding="unicode")
print("Generated XML with comment:")
print(xml_str)`,
    stdoutExpected: 'Generated XML with comment:\n<app><!--Database credentials below--><db>postgres</db></app>',
    explanationTitle: 'ET.Comment() Factory',
    explanationText:
      'ET.Comment(text) constructs a comment element node that serializes to "<!-- text -->". It can be appended to any parent Element just like standard child elements.',
    complexityInfo: 'PCPP 5.2 Comment node generation',
  },
  {
    id: 'pcpp-s5-fc-040',
    track: 'pcpp',
    cardType: 'PCPP 5.2 • XML ElementTree',
    topic: 'XML entity expansion security (Billion Laughs attack) and defusedxml',
    category: 'T5: Data Persistence',
    difficulty: 'Advanced',
    factor: '2.5',
    intervalDays: 1,
    chapter: '5.2',
    section: 'Section 5',
    question: 'What security risk exists when parsing untrusted XML, and how does the defusedxml package mitigate it?',
    codeSnippet: `# Vulnerabilities in standard XML parsers:
# 1. XML Entity Expansion (Billion Laughs / Exponential entity expansion attack):
#    A tiny XML payload (1 KB) with nested DTD entities expands into gigabytes in RAM, crashing the server.
# 2. XML External Entity (XXE) Injection:
#    Entities pointing to local files (SYSTEM "file:///etc/passwd") read sensitive server files.

# Standard library xml.etree.ElementTree is NOT safe against maliciously constructed data!
# In production with untrusted input, use 'defusedxml.ElementTree':
# import defusedxml.ElementTree as SafeET
# root = SafeET.fromstring(untrusted_xml) # Safely rejects DTDs and entities!

print("Production rule: Use defusedxml when parsing untrusted user-supplied XML")`,
    stdoutExpected: 'Production rule: Use defusedxml when parsing untrusted user-supplied XML',
    explanationTitle: 'XML Security & defusedxml',
    explanationText:
      'Standard Python xml libraries are vulnerable to XML entity expansion denial of service (Billion Laughs) and XXE file disclosure if DTD processing is enabled. Python official documentation explicitly warns that xml.etree is not secure against untrusted input and recommends the third-party defusedxml package.',
    complexityInfo: 'PCPP 5.2 Security best practices for data interchange',
  },
];
