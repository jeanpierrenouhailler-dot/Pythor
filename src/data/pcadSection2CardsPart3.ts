import { Flashcard } from '../types';

export const pcadSection2CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.4 CONTINUED: ADVANCED SQL & SUBQUERIES [Cards 71-80]
  // =========================================================================
  {
    id: 'pcad-sec2-071',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Subqueries',
    topic: 'Scalar Subqueries in WHERE and SELECT Clauses',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How do you query all products whose price is strictly higher than the overall average product price using a scalar subquery?',
    codeSnippet: `SELECT product_name, price
FROM products
WHERE price > (
    SELECT AVG(price) 
    FROM products
);`,
    options: [
      'Embed a scalar subquery (SELECT AVG(price) FROM products) inside the WHERE price > condition, which returns a single scalar value evaluated against each outer row',
      'WHERE price > AVG(price);',
      'SELECT product_name, price, AVG(price) FROM products HAVING price > AVG(price);',
      'Use a GROUP BY price HAVING price > AVG(price);'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Embed a scalar subquery (SELECT AVG(price) FROM products) inside the WHERE price > condition, which returns a single scalar value evaluated against each outer row',
    explanationTitle: 'Scalar Subquery in WHERE Filter',
    explanationText:
      'A scalar subquery returns exactly one value (one row, one column). You cannot write `WHERE price > AVG(price)` directly because aggregate functions are prohibited in `WHERE` clauses. The scalar subquery computes the global average first, supplying it to the outer `WHERE`.',
    deepDive:
      'If a scalar subquery returns more than one row, the database raises an error: `ERROR: more than one row returned by a subquery used as an expression`.',
    tags: ['SQL', 'Scalar Subqueries', 'WHERE', 'Aggregates', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-072',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Subqueries',
    topic: 'EXISTS vs. IN for Subquery Membership Evaluation',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Why is `WHERE EXISTS (SELECT 1 ...)` frequently faster than `WHERE id IN (SELECT ...)` on large subqueries?',
    codeSnippet: `-- Checking for customers with active subscriptions:
SELECT c.customer_id, c.name
FROM customers c
WHERE EXISTS (
    SELECT 1 
    FROM subscriptions s 
    WHERE s.customer_id = c.customer_id 
      AND s.status = 'ACTIVE'
);`,
    options: [
      'EXISTS evaluates existence short-circuit style: it stops scanning the inner table as soon as the first matching row is found, and is completely immune to the NULL trap that breaks NOT IN',
      'IN is deprecated in ANSI SQL',
      'EXISTS executes in parallel threads automatically',
      'Because SELECT 1 converts the query to binary'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'EXISTS evaluates existence short-circuit style: it stops scanning the inner table as soon as the first matching row is found, and is completely immune to the NULL trap that breaks NOT IN',
    explanationTitle: 'Short-Circuit Evaluation with EXISTS',
    explanationText:
      '`EXISTS` returns a boolean `TRUE` as soon as the inner query produces a single row, immediately halting execution for that candidate. `IN` typically materializes the full set of subquery results. Furthermore, `NOT EXISTS` handles `NULL` values safely, unlike `NOT IN`.',
    deepDive:
      'The expression inside `SELECT` in an `EXISTS` subquery (e.g. `SELECT 1` or `SELECT *`) is ignored by query optimizers; only row existence is checked.',
    tags: ['SQL', 'EXISTS', 'IN', 'Subqueries', 'Query Optimization', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-073',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Subqueries',
    topic: 'Correlated Subqueries: Row-by-Row Context Binding',
    category: 'Programming and Database Skills',
    difficulty: 'advanced',
    question: 'What defines a "Correlated Subquery", and how does its execution lifecycle differ from an independent subquery?',
    codeSnippet: `-- Find employees earning above their specific department average:
SELECT e.employee_name, e.department, e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(sub.salary)
    FROM employees sub
    WHERE sub.department = e.department -- References outer table 'e'!
);`,
    options: [
      'A correlated subquery references columns from the outer query; conceptually, it must be re-evaluated for every individual row processed by the outer query',
      'It is a subquery that joins two unrelated tables on the primary key',
      'It executes once before the outer query runs and caches the result',
      'It is only supported in NoSQL databases'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A correlated subquery references columns from the outer query; conceptually, it must be re-evaluated for every individual row processed by the outer query',
    explanationTitle: 'Correlated Subquery Mechanics',
    explanationText:
      'Unlike self-contained subqueries that run once, a correlated subquery depends on data from the outer row (`sub.department = e.department`). The database logically re-executes the inner query for each outer candidate row. Modern cost-based optimizers rewrite correlated subqueries into efficient joins when possible.',
    deepDive:
      'Window functions like `AVG(salary) OVER (PARTITION BY department)` often replace correlated subqueries with far superior performance.',
    tags: ['SQL', 'Correlated Subqueries', 'Outer Reference', 'Optimization', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-074',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Subqueries',
    topic: 'Derived Tables in the FROM Clause',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'What is a mandatory requirement when nesting a subquery inside the SQL `FROM` clause (a derived table / inline view)?',
    codeSnippet: `-- Querying from an inline aggregated subquery:
SELECT t.region, t.avg_regional_revenue
FROM (
    SELECT region, AVG(revenue) AS avg_regional_revenue
    FROM regional_sales
    GROUP BY region
) AS t -- Mandatory table alias!
WHERE t.avg_regional_revenue > 50000;`,
    options: [
      'The derived table must be assigned an explicit table alias (e.g. AS t), or the database will reject the query with a syntax error',
      'The derived table can only contain a single column',
      'The subquery must contain a LIMIT clause',
      'Derived tables are not permitted in SQL'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The derived table must be assigned an explicit table alias (e.g. AS t), or the database will reject the query with a syntax error',
    explanationTitle: 'Mandatory Aliasing of Derived Tables',
    explanationText:
      'SQL treats a subquery in the `FROM` clause as an on-the-fly temporary table. Relational algebra requires every table source in a query to have an identifiable relation name so outer clauses can reference its columns unambiguously. Omitting `AS alias` raises `ERROR: subquery in FROM must have an alias`.',
    deepDive:
      'In PostgreSQL and MySQL 8+, aliasing is strictly enforced; omitting it causes query failure.',
    tags: ['SQL', 'Derived Tables', 'FROM Subquery', 'Aliases', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-075',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Architecture',
    topic: 'Common Table Expressions (CTEs) with the WITH Clause',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Why are Common Table Expressions (CTEs, `WITH cte AS (...)`) preferred over deeply nested subqueries in production data analytics pipelines?',
    codeSnippet: `WITH regional_metrics AS (
    SELECT region, SUM(revenue) AS total_revenue
    FROM sales
    GROUP BY region
),
benchmark AS (
    SELECT AVG(total_revenue) AS threshold
    FROM regional_metrics
)
SELECT r.region, r.total_revenue
FROM regional_metrics r, benchmark b
WHERE r.total_revenue > b.threshold;`,
    options: [
      'CTEs structure complex queries into sequential, named, and reusable modular blocks that read from top to bottom, vastly improving readability, maintenance, and query debugging',
      'CTEs permanently save tables to the hard drive',
      'CTEs disable all SQL security checks',
      'CTEs are only used for recursive graph traversal'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'CTEs structure complex queries into sequential, named, and reusable modular blocks that read from top to bottom, vastly improving readability, maintenance, and query debugging',
    explanationTitle: 'Modular Querying with Common Table Expressions',
    explanationText:
      'Deeply nested subqueries (subqueries within subqueries) read from inside-out, making code inscrutable. CTEs define temporary named result sets at the top of the query, allowing multiple downstream joins and references to reuse the same named logic.',
    deepDive:
      'In PostgreSQL 12+, CTEs are inlined automatically by the optimizer unless marked `WITH cte AS MATERIALIZED (...)`.',
    tags: ['SQL', 'CTE', 'WITH clause', 'Modular SQL', 'Clean Code', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-076',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Set Operations',
    topic: 'UNION vs. UNION ALL: Deduplication & Performance',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'What is the functional and performance difference between `UNION` and `UNION ALL` when combining two query results?',
    codeSnippet: `-- Query 1:
SELECT city FROM customers
UNION
SELECT city FROM suppliers; -- De-duplicates rows! (Sort/Hash overhead)

-- Query 2:
SELECT city FROM customers
UNION ALL
SELECT city FROM suppliers; -- Preserves ALL rows, fast linear append!`,
    options: [
      'UNION eliminates duplicate rows by performing an expensive sort/hash deduplication pass; UNION ALL concatenates all rows directly without checking for duplicates, executing significantly faster',
      'UNION ALL removes duplicates; UNION keeps duplicates',
      'UNION is for numbers; UNION ALL is for strings',
      'UNION ALL can only join up to 10 rows'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'UNION eliminates duplicate rows by performing an expensive sort/hash deduplication pass; UNION ALL concatenates all rows directly without checking for duplicates, executing significantly faster',
    explanationTitle: 'UNION vs. UNION ALL Performance Tradeoffs',
    explanationText:
      '`UNION` performs a `DISTINCT` pass across the combined dataset, consuming CPU and memory to sort and hash rows. If you know the two sets are disjoint or if duplicates are intentionally permitted, always prefer `UNION ALL` for maximum execution speed.',
    deepDive:
      'Both operations require both queries to project the exact same number of columns with compatible data types in the same order.',
    tags: ['SQL', 'UNION', 'UNION ALL', 'Set Operations', 'Performance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-077',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Set Operations',
    topic: 'Set Operations: INTERSECT and EXCEPT / MINUS',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How do `INTERSECT` and `EXCEPT` (or `MINUS` in Oracle) evaluate two query result sets?',
    codeSnippet: `-- Set Intersection:
SELECT user_id FROM mobile_users
INTERSECT
SELECT user_id FROM web_users; -- Returns users present in BOTH sets

-- Set Difference:
SELECT user_id FROM mobile_users
EXCEPT
SELECT user_id FROM web_users; -- Returns users present in mobile but NOT web`,
    options: [
      'INTERSECT returns rows present in both result sets; EXCEPT (or MINUS) returns rows present in the first result set that do not exist in the second result set',
      'INTERSECT adds all numbers; EXCEPT multiplies all numbers',
      'INTERSECT returns the union of both sets; EXCEPT deletes the database',
      'Both operators are identical to INNER JOIN'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'INTERSECT returns rows present in both result sets; EXCEPT (or MINUS) returns rows present in the first result set that do not exist in the second result set',
    explanationTitle: 'Relational Set Difference and Intersection',
    explanationText:
      '`INTERSECT` implements mathematical set intersection $A \cap B$. `EXCEPT` implements set difference $A \setminus B$. Both operations perform automatic deduplication of the output rows.',
    deepDive:
      'Oracle uses the keyword `MINUS` instead of the ANSI standard `EXCEPT`.',
    tags: ['SQL', 'INTERSECT', 'EXCEPT', 'MINUS', 'Set Theory', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-078',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Window Functions',
    topic: 'The Window Function Paradigm: The OVER Clause',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How does a SQL Window Function using `OVER (PARTITION BY ...)` differ from a standard `GROUP BY` query?',
    codeSnippet: `SELECT 
    employee_name,
    department,
    salary,
    -- Window aggregation preserves individual employee rows:
    AVG(salary) OVER (PARTITION BY department) AS dept_avg_salary
FROM employees;`,
    options: [
      'A GROUP BY query collapses individual rows into a single summary row per group; a Window Function computes an aggregate over a defined window frame while preserving individual row identity',
      'Window functions can only be executed in web browsers',
      'Window functions delete duplicate rows from the table',
      'Window functions cannot be sorted'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A GROUP BY query collapses individual rows into a single summary row per group; a Window Function computes an aggregate over a defined window frame while preserving individual row identity',
    explanationTitle: 'The Power of the OVER() Window Clause',
    explanationText:
      'In standard `GROUP BY`, detail is lost because rows are collapsed into group summaries. Window functions calculate aggregations across subsets of rows (`PARTITION BY`), but return the calculated metric alongside every single original record.',
    deepDive:
      'Window functions are evaluated after `WHERE`, `GROUP BY`, and `HAVING` clauses, but before `ORDER BY` and `LIMIT`.',
    tags: ['SQL', 'Window Functions', 'OVER', 'PARTITION BY', 'Analytics', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-079',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Window Functions',
    topic: 'Ranking Functions: ROW_NUMBER vs. RANK vs. DENSE_RANK',
    category: 'Programming and Database Skills',
    difficulty: 'advanced',
    question: 'Given salaries `[100k, 90k, 90k, 80k]`, what ranks are assigned by `ROW_NUMBER()`, `RANK()`, and `DENSE_RANK()`?',
    codeSnippet: `SELECT 
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num,
    RANK()       OVER (ORDER BY salary DESC) AS rnk,
    DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk
FROM salaries;`,
    options: [
      'ROW_NUMBER: [1, 2, 3, 4] (strictly unique); RANK: [1, 2, 2, 4] (ties share rank, leaves gap); DENSE_RANK: [1, 2, 2, 3] (ties share rank, no gaps)',
      'ROW_NUMBER: [1, 2, 2, 3]; RANK: [1, 2, 3, 4]; DENSE_RANK: [1, 1, 1, 1]',
      'All three functions produce identical rankings [1, 2, 3, 4]',
      'RANK leaves no gaps; DENSE_RANK leaves gaps'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ROW_NUMBER: [1, 2, 3, 4] (strictly unique); RANK: [1, 2, 2, 4] (ties share rank, leaves gap); DENSE_RANK: [1, 2, 2, 3] (ties share rank, no gaps)',
    explanationTitle: 'ROW_NUMBER vs. RANK vs. DENSE_RANK',
    explanationText:
      '`ROW_NUMBER()` assigns sequential integers with no ties. `RANK()` gives tied items the same rank, but skips subsequent rank numbers ($1, 2, 2, 4$). `DENSE_RANK()` assigns tied items the same rank without skipping subsequent ranks ($1, 2, 2, 3$).',
    deepDive:
      'To find the top 1 item per group, wrap `ROW_NUMBER() OVER (PARTITION BY group_id ORDER BY score DESC)` in a CTE and filter `WHERE row_num = 1`.',
    tags: ['SQL', 'ROW_NUMBER', 'RANK', 'DENSE_RANK', 'Window Functions', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-080',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Window Functions',
    topic: 'Running Totals and Cumulative Sums',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How do you calculate a running cumulative total of daily sales revenue ordered chronologically in SQL?',
    codeSnippet: `SELECT 
    order_date,
    revenue,
    -- Running cumulative sum:
    SUM(revenue) OVER (
        ORDER BY order_date 
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_total
FROM daily_sales;`,
    options: [
      'SUM(revenue) OVER (ORDER BY order_date) (or with explicit frame ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)',
      'SUM(revenue) GROUP BY order_date CUMULATIVE',
      'CUMSUM(revenue) OVER (order_date)',
      'RUNNING_SUM(revenue) BY order_date'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'SUM(revenue) OVER (ORDER BY order_date) (or with explicit frame ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)',
    explanationTitle: 'Running Totals via Window Frames',
    explanationText:
      'When an `ORDER BY` is included inside `OVER()`, the default window frame expands to `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`, summing all preceding rows up to the current row to generate a cumulative running total.',
    deepDive:
      'Using `ROWS BETWEEN 6 PRECEDING AND CURRENT ROW` computes a 7-day rolling moving sum.',
    tags: ['SQL', 'SUM OVER', 'Running Total', 'Window Frame', 'Time Series', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 2.5: DATABASE CONNECTIVITY WITH PYTHON [Cards 81-100]
  // =========================================================================
  {
    id: 'pcad-sec2-081',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'DB-API 2.0',
    topic: 'Python Database API Specification (PEP 249)',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'In Python’s DB-API 2.0 standard (PEP 249), what are the core responsibilities of the `Connection` object versus the `Cursor` object?',
    codeSnippet: `import sqlite3

# Connection: manages session, transaction commits/rollbacks
conn = sqlite3.connect('analytics.db')

# Cursor: executes SQL commands and traverses result sets
cursor = conn.cursor()
cursor.execute("SELECT * FROM kpis")`,
    options: [
      'The Connection object manages the database connection, transactions, and session state; the Cursor object executes SQL statements and traverses result rows',
      'The Cursor connects to the database; the Connection executes SQL queries',
      'The Connection encrypts data; the Cursor formats the HTML output',
      'Both objects are identical aliases in Python'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The Connection object manages the database connection, transactions, and session state; the Cursor object executes SQL statements and traverses result rows',
    explanationTitle: 'PEP 249 Connection and Cursor Lifecycle',
    explanationText:
      'PEP 249 standardizes database interfaces across all Python drivers (`sqlite3`, `psycopg2`, `pymysql`). `connect()` establishes the socket/file session. `conn.cursor()` spawns a cursor to parse and execute queries, hold result row buffers, and fetch data.',
    deepDive:
      'Always close cursors and connections when finished to prevent database connection exhaustion.',
    tags: ['PEP 249', 'DB-API', 'Connection', 'Cursor', 'Python SQL', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-082',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Python SQLite',
    topic: 'In-Memory Database Prototyping with sqlite3',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How do you create an ultra-fast, transient, in-memory SQLite database for unit tests using Python’s standard library `sqlite3`?',
    codeSnippet: `import sqlite3

# Create transient in-memory database:
conn = sqlite3.connect(':memory:')
cursor = conn.cursor()
cursor.execute("CREATE TABLE staging (id INT, val TEXT)")`,
    options: [
      'Pass the special URI string ":memory:" into sqlite3.connect(":memory:")',
      'Pass filename="RAM"',
      'sqlite3.connect(temp=True)',
      'sqlite3.create_in_memory_db()'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pass the special URI string ":memory:" into sqlite3.connect(":memory:")',
    explanationTitle: 'Transient In-Memory SQLite Datastores',
    explanationText:
      'Passing `":memory:"` builds the entire relational database inside RAM without touching disk storage. When the connection closes, the database is instantly erased. This provides lightning-fast execution for automated test suites and prototyping.',
    deepDive:
      'Every call to `sqlite3.connect(":memory:")` creates a distinct, isolated in-memory database.',
    tags: ['sqlite3', ':memory:', 'In-Memory DB', 'Unit Testing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-083',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'DB-API 2.0',
    topic: 'Fetching Query Results: fetchone, fetchall, and fetchmany',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'When querying a table with 10 million rows, why should an analyst avoid `cursor.fetchall()` in favor of `cursor.fetchmany(size)` or iterating the cursor directly?',
    codeSnippet: `cursor.execute("SELECT * FROM massive_table")

# Memory danger:
# all_rows = cursor.fetchall() # Loads all 10M tuples into RAM at once!

# Memory-safe streaming:
while True:
    batch = cursor.fetchmany(10000)
    if not batch:
        break
    process_batch(batch)`,
    options: [
      'fetchall() loads the entire 10-million-row result set into Python RAM simultaneously, causing MemoryError; fetchmany(n) streams manageable batches iteratively',
      'fetchall() converts all numbers to strings',
      'fetchmany() automatically deletes rows after reading',
      'fetchall() only works on Windows computers'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'fetchall() loads the entire 10-million-row result set into Python RAM simultaneously, causing MemoryError; fetchmany(n) streams manageable batches iteratively',
    explanationTitle: 'Result Fetching Strategies in PEP 249',
    explanationText:
      '`cursor.fetchone()` fetches 1 row. `cursor.fetchall()` eagerly materializes all rows into a giant Python list. `cursor.fetchmany(size)` retrieves batches of `size` records, maintaining constant memory usage while retaining high vector throughput.',
    deepDive:
      'PEP 249 cursors are iterators: `for row in cursor:` streams records row-by-row with minimal memory overhead.',
    tags: ['fetchmany', 'fetchall', 'fetchone', 'Memory Management', 'DB-API', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-084',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Python SQLite',
    topic: 'Column-Name Access with sqlite3.Row Factory',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'By default, `sqlite3` queries return raw tuples `(101, "Alice")`. How do you configure the connection so rows can be accessed by column name like dictionaries (`row["name"]`)?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect('app.db')
# Configure row factory:
conn.row_factory = sqlite3.Row

cursor = conn.cursor()
cursor.execute("SELECT user_id, username FROM users LIMIT 1")
row = cursor.fetchone()

# Access by column name or integer index:
print(row['username']) # 'Alice'
print(row[0])          # 101`,
    options: [
      'Set conn.row_factory = sqlite3.Row before executing queries',
      'Pass named_tuples=True to sqlite3.connect()',
      'Use cursor.execute_dict()',
      'Wrap cursor in dict(cursor)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Set conn.row_factory = sqlite3.Row before executing queries',
    explanationTitle: 'Named Field Access via sqlite3.Row',
    explanationText:
      '`sqlite3.Row` is an optimized row factory that supports case-insensitive column-name lookups, index lookups, iteration, and mapping conversions (`dict(row)`), significantly reducing bugs caused by hardcoded tuple index offsets.',
    deepDive:
      'You can also write custom row factories (e.g. returning dataclass instances or custom objects).',
    tags: ['sqlite3', 'row_factory', 'sqlite3.Row', 'Clean Code', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-085',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Database Security',
    topic: 'Preventing SQL Injection with Parameterized Placeholders',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'Why is using Python f-strings `f"SELECT * FROM users WHERE email = \'{user_input}\'"` a critical security vulnerability, and what is the proper fix?',
    codeSnippet: `# Vulnerable to catastrophic SQL Injection (' OR '1'='1):
# query = f"SELECT * FROM users WHERE email = '{user_input}'"

# Secure Parameterized Query:
query = "SELECT * FROM users WHERE email = ?"
cursor.execute(query, (user_input,)) # Database escapes value safely!`,
    options: [
      'String formatting allows malicious user input to alter SQL query structure (SQL Injection); parameterized queries pass data separately from code, allowing the database engine to escape input safely',
      'f-strings run 100 times slower than database queries',
      'f-strings convert all text to uppercase',
      'SQL databases do not support strings containing @ symbols'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'String formatting allows malicious user input to alter SQL query structure (SQL Injection); parameterized queries pass data separately from code, allowing the database engine to escape input safely',
    explanationTitle: 'Preventing SQL Injection via Parameterization',
    explanationText:
      'Never concatenate untrusted input into SQL strings. Attackers inject statements (e.g. "\' OR \'1\'=\'1\' --") to bypass authentication or drop tables. Parameter placeholders (`?` in SQLite, `%s` in PostgreSQL) treat input strictly as literal values, never executable SQL syntax.',
    deepDive:
      'Parameter arguments must always be passed as an iterable (e.g. a 1-element tuple `(val,)`), not a bare scalar string.',
    tags: ['SQL Injection', 'Security', 'Parameterized Queries', 'Placeholders', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-086',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'DB-API 2.0',
    topic: 'High-Speed Batch Insertion with cursor.executemany',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How do you insert 50,000 transaction records efficiently in a single database operation using DB-API 2.0?',
    codeSnippet: `records = [
    (101, 45.50, 'USD'),
    (102, 120.00, 'EUR'),
    # ... 50,000 tuples
]

# Batch insertion:
cursor.executemany(
    "INSERT INTO transactions (id, amount, currency) VALUES (?, ?, ?)",
    records
)
conn.commit()`,
    options: [
      'Use cursor.executemany(sql, records), which prepares the statement once and executes it across the entire sequence of parameter tuples in a batched C-loop',
      'Run a Python for loop with cursor.execute() for every record',
      'Call conn.insert_all(records)',
      'Convert the records into a single giant SQL string'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Use cursor.executemany(sql, records), which prepares the statement once and executes it across the entire sequence of parameter tuples in a batched C-loop',
    explanationTitle: 'Batch Ingestion with cursor.executemany()',
    explanationText:
      'Calling `cursor.execute()` inside a Python `for` loop incurs severe round-trip network/interpreter overhead and repeatedly recompiles query plans. `executemany()` prepares the query plan once and pushes batches efficiently into the database engine.',
    deepDive:
      'In PostgreSQL drivers like `psycopg2`, use `psycopg2.extras.execute_batch` or `execute_values` for 10x higher throughput than standard `executemany`.',
    tags: ['executemany', 'Batch Insertion', 'Performance', 'DB-API', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-087',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Database Transactions',
    topic: 'Transaction Management: commit() vs. rollback()',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'In an ETL pipeline, what happens if an error occurs mid-way and `conn.rollback()` is executed before closing the connection?',
    codeSnippet: `try:
    cursor.execute("UPDATE account SET balance = balance - 100 WHERE id = 1")
    cursor.execute("UPDATE account SET balance = balance + 100 WHERE id = 2") # Fails!
    conn.commit() # Save changes permanently
except Exception as err:
    conn.rollback() # Abort! Reverts both updates to original state!
    raise`,
    options: [
      'All database modifications made during the pending uncommitted transaction are completely discarded and reverted, preserving ACID consistency',
      'The database deletes all tables',
      'Only the line that caused the error is skipped',
      'The database commits all changes anyway'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'All database modifications made during the pending uncommitted transaction are completely discarded and reverted, preserving ACID consistency',
    explanationTitle: 'ACID Transactions: commit vs. rollback',
    explanationText:
      'Databases enforce Atomicity (the "A" in ACID). A transaction is all-or-nothing. `conn.commit()` makes changes permanent and visible to other transactions; `conn.rollback()` restores the database to the exact state before the transaction began.',
    deepDive:
      'If a script crashes or exits without an explicit `commit()`, database engines automatically issue an implicit rollback.',
    tags: ['Transactions', 'ACID', 'commit', 'rollback', 'Data Integrity', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-088',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Python SQLite',
    topic: 'Automated Transaction Context with with conn:',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'When using `sqlite3` connection objects as a context manager (`with conn:`), what automated behavior occurs upon exiting the block?',
    codeSnippet: `import sqlite3

conn = sqlite3.connect('warehouse.db')

with conn: # Manages transaction lifecycle!
    conn.execute("INSERT INTO audits (event) VALUES ('START')")
    process_pipeline()
    conn.execute("INSERT INTO audits (event) VALUES ('FINISH')")
# If no error: automatically COMMITS!
# If an exception was raised: automatically ROLLS BACK!`,
    options: [
      'If the block finishes without exception, conn.commit() is automatically called; if an exception is raised, conn.rollback() is automatically called',
      'The connection is automatically closed (conn.close())',
      'All tables are converted into CSV files',
      'It creates an automatic git commit'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'If the block finishes without exception, conn.commit() is automatically called; if an exception is raised, conn.rollback() is automatically called',
    explanationTitle: 'Automated Transaction Contexts in sqlite3',
    explanationText:
      'In Python’s `sqlite3`, using `with conn:` manages the transaction, NOT the connection itself! It issues `commit()` on success and `rollback()` on error. Note: you still need to call `conn.close()` explicitly when finished.',
    deepDive:
      'To manage both connection closing AND transactions automatically, nest context managers or use `contextlib.closing(conn)`.',
    tags: ['sqlite3', 'Transactions', 'Context Managers', 'ACID', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-089',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'SQLAlchemy',
    topic: 'Engine & Connection Abstraction with SQLAlchemy',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How do you instantiate a database Engine for a remote PostgreSQL database using SQLAlchemy, and what does the Engine object represent?',
    codeSnippet: `from sqlalchemy import create_engine

# Database URI connection string:
# dialect+driver://username:password@host:port/database
engine = create_engine('postgresql+psycopg2://analyst:secret@db.company.com:5432/analytics')`,
    options: [
      'create_engine(uri) creates the central Engine abstraction representing the dialect translator and connection pool to the database',
      'create_engine() immediately downloads all tables into RAM',
      'create_engine() creates a new database on AWS',
      'create_engine() is deprecated in favor of urllib'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'create_engine(uri) creates the central Engine abstraction representing the dialect translator and connection pool to the database',
    explanationTitle: 'SQLAlchemy Engine Abstraction',
    explanationText:
      'The SQLAlchemy `Engine` manages dialect compilation (translating ANSI SQL to PostgreSQL, Oracle, SQLite, etc.) and maintains a connection pool. It does not actually establish a live socket connection until the first query is executed (lazy connection).',
    deepDive:
      'Always execute queries within a connection context: `with engine.connect() as conn: conn.execute(...)`.',
    tags: ['SQLAlchemy', 'create_engine', 'Connection Pooling', 'Pipelines', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-090',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Pandas SQL',
    topic: 'Reading SQL Queries Directly into DataFrames (read_sql_query)',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How do you execute a parameterized SQL query and load the resulting dataset directly into a pandas DataFrame using `pd.read_sql_query()`?',
    codeSnippet: `import pandas as pd
from sqlalchemy import create_engine

engine = create_engine('sqlite:///sales.db')

query = "SELECT order_id, customer_id, amount FROM orders WHERE amount > :min_amount"
# Safe parameterized query directly into DataFrame:
df = pd.read_sql_query(query, con=engine, params={'min_amount': 250.0})`,
    options: [
      'pd.read_sql_query(query, con=engine, params=...) executes the query via the engine and constructs a DataFrame with matching column names and inferred types',
      'df = engine.to_pandas(query)',
      'df = pd.DataFrame(engine.run(query))',
      'pd.load_sql(query, engine)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'pd.read_sql_query(query, con=engine, params=...) executes the query via the engine and constructs a DataFrame with matching column names and inferred types',
    explanationTitle: 'Ingesting SQL via pd.read_sql_query()',
    explanationText:
      '`pd.read_sql_query()` executes the query against the database connection or SQLAlchemy engine, fetches results, and constructs a DataFrame. Passing `params=` parameterizes dynamic values, preventing SQL injection.',
    deepDive:
      'You can also specify `parse_dates=["order_date"]` inside `read_sql_query()` to parse dates on the fly during extraction.',
    tags: ['pandas', 'read_sql_query', 'SQLAlchemy', 'ETL', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-091',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Pandas SQL',
    topic: 'Ingesting Full Tables with pd.read_sql_table()',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'What is the advantage of `pd.read_sql_table("transactions", con=engine, columns=["id", "amount"])` over `read_sql_query()`?',
    codeSnippet: `import pandas as pd

# Load specific columns from database table:
df = pd.read_sql_table('transactions', con=engine, columns=['id', 'amount'])`,
    options: [
      'read_sql_table reads database schema metadata directly through SQLAlchemy, automatically mapping exact SQL types (integers, datetimes, decimals) without relying on heuristic type guessing',
      'read_sql_table works without a database connection',
      'read_sql_table converts all text to JSON',
      'read_sql_table is 50 times slower than read_sql_query'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'read_sql_table reads database schema metadata directly through SQLAlchemy, automatically mapping exact SQL types (integers, datetimes, decimals) without relying on heuristic type guessing',
    explanationTitle: 'Schema-Aware Ingestion with read_sql_table()',
    explanationText:
      '`pd.read_sql_table()` requires a SQLAlchemy engine (does not accept raw sqlite3 connections). Because it inspects table metadata, it maps exact database datatypes directly to pandas dtypes, avoiding type coercion mistakes common with ad-hoc queries.',
    deepDive:
      'Pass `index_col="id"` to designate a primary key column as the DataFrame index during ingestion.',
    tags: ['pandas', 'read_sql_table', 'SQLAlchemy', 'Metadata', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-092',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Pandas SQL',
    topic: 'Exporting DataFrames to SQL with df.to_sql()',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How do you append a cleaned pandas DataFrame to an existing SQL table named `"cleaned_customers"` without saving the DataFrame index as a column?',
    codeSnippet: `import pandas as pd

# Export DataFrame to SQL:
df.to_sql(
    name='cleaned_customers',
    con=engine,
    if_exists='append',
    index=False
)`,
    options: [
      'df.to_sql("cleaned_customers", con=engine, if_exists="append", index=False)',
      'df.write_sql("cleaned_customers", engine)',
      'pd.export_sql(df, "cleaned_customers", append=True)',
      'df.to_database("cleaned_customers", if_exists="insert")'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df.to_sql("cleaned_customers", con=engine, if_exists="append", index=False)',
    explanationTitle: 'Loading DataFrames to SQL via df.to_sql()',
    explanationText:
      '`df.to_sql()` handles table creation and record insertion. Passing `if_exists="append"` inserts new records without dropping existing data. Setting `index=False` prevents pandas from polluting the SQL table with an unwanted integer index column.',
    deepDive:
      'If the table does not exist, `to_sql()` creates it automatically using inferred SQL column types.',
    tags: ['pandas', 'to_sql', 'SQLAlchemy', 'ETL', 'index=False', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-093',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Pandas SQL',
    topic: 'Handling Table Collisions with if_exists Parameters',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'What are the three possible behaviors of the `if_exists` parameter in `df.to_sql()`?',
    codeSnippet: `# Options for if_exists:
# 1. 'fail'   (default): Raises ValueError if table exists.
# 2. 'replace': Drops table, creates new schema, and inserts rows.
# 3. 'append' : Inserts new rows into existing table.`,
    options: [
      '"fail" (raises ValueError if table exists), "replace" (drops existing table and recreates it), and "append" (inserts rows into existing table)',
      '"ignore", "overwrite", and "skip"',
      '"backup", "restore", and "purge"',
      '"truncate", "commit", and "delete"'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '"fail" (raises ValueError if table exists), "replace" (drops existing table and recreates it), and "append" (inserts rows into existing table)',
    explanationTitle: 'Collision Strategies in to_sql()',
    explanationText:
      'The default is `if_exists="fail"` to guard against accidental overwrites. Use `if_exists="replace"` for staging mart refreshes (warning: drops primary keys and foreign key constraints). Use `if_exists="append"` for incremental log streams.',
    deepDive:
      'To truncate rows without dropping table constraints, run `conn.execute("TRUNCATE TABLE ...")` before calling `to_sql(if_exists="append")`.',
    tags: ['pandas', 'to_sql', 'if_exists', 'ETL', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-094',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Pandas SQL',
    topic: 'High-Performance Batch Writes with method="multi" and chunksize',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Why does inserting 500,000 rows with default `df.to_sql()` take minutes, and how do you accelerate it by 10x?',
    codeSnippet: `# High-throughput bulk loading:
df.to_sql(
    'large_dataset',
    con=engine,
    if_exists='append',
    index=False,
    chunksize=10000,
    method='multi' # Inserts multiple rows per INSERT statement!
)`,
    options: [
      'Default to_sql() issues single-row INSERT statements; setting method="multi" groups multiple records into single multi-row INSERT statements and chunksize batches them, accelerating loading by 10x-50x',
      'By converting all numbers into integers',
      'By passing fast=True',
      'By turning off the computer monitor'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Default to_sql() issues single-row INSERT statements; setting method="multi" groups multiple records into single multi-row INSERT statements and chunksize batches them, accelerating loading by 10x-50x',
    explanationTitle: 'Multi-Row SQL Ingestion via method="multi"',
    explanationText:
      'By default, pandas executes `INSERT INTO t VALUES (...)` row-by-row. Specifying `method="multi"` writes `INSERT INTO t VALUES (...), (...), (...)`, slashing network round-trips. Combined with `chunksize=10000`, millions of rows insert in seconds.',
    deepDive:
      'For maximum PostgreSQL ingestion speed, pass a custom callable using `psycopg2.copy_expert()` or `COPY FROM STDIN`.',
    tags: ['to_sql', 'method=multi', 'chunksize', 'Bulk Loading', 'Performance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-095',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Pandas SQL',
    topic: 'Enforcing Exact SQL Column Datatypes with dtype',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How do you force `df.to_sql()` to create a column as `VARCHAR(64)` rather than unlimited `TEXT` using SQLAlchemy datatypes?',
    codeSnippet: `from sqlalchemy.types import Integer, VARCHAR
import pandas as pd

dtype_mapping = {
    'user_id': Integer(),
    'email': VARCHAR(64) # Enforce bounded VARCHAR instead of TEXT!
}

df.to_sql('users', con=engine, dtype=dtype_mapping, index=False)`,
    options: [
      'Pass a dictionary mapping column names to SQLAlchemy data types via the dtype parameter in df.to_sql()',
      'Call df["email"].astype("varchar64")',
      'Set schema_types={"email": "VARCHAR(64)"}',
      'SQLAlchemy cannot specify column lengths'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pass a dictionary mapping column names to SQLAlchemy data types via the dtype parameter in df.to_sql()',
    explanationTitle: 'Explicit Schema Typing in df.to_sql()',
    explanationText:
      'Pandas defaults string columns to unbounded `TEXT` (or `CLOB`) in SQL. Passing `dtype={"col": VARCHAR(64)}` creates strict, index-friendly bounded columns with appropriate constraints in the target database DDL.',
    deepDive:
      'Import standard types directly from `sqlalchemy.types` (`Integer`, `Float`, `VARCHAR`, `DateTime`, `Boolean`).',
    tags: ['to_sql', 'dtype', 'SQLAlchemy', 'DDL', 'Data Types', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-096',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Database Drivers',
    topic: 'PostgreSQL Connectivity with psycopg2 and Connection Strings',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'What is the standard connection URI format used by SQLAlchemy to connect to a PostgreSQL database via the `psycopg2` driver?',
    codeSnippet: `# PostgreSQL SQLAlchemy URI format:
# postgresql+psycopg2://user:password@host:port/database_name
uri = "postgresql+psycopg2://data_analyst:P@ssw0rd123@10.0.0.15:5432/warehouse"`,
    options: [
      'postgresql+psycopg2://username:password@host:port/database_name',
      'postgres://host:username:password/port',
      'psycopg2://database@host',
      'sql://postgresql/user:pass/db'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'postgresql+psycopg2://username:password@host:port/database_name',
    explanationTitle: 'SQLAlchemy Database URL Format (RFC-1738)',
    explanationText:
      'SQLAlchemy follows RFC-1738 URL conventions: `dialect+driver://user:password@host:port/dbname`. For PostgreSQL with psycopg2, specify `postgresql+psycopg2://`. For pure Python without C-dependencies, use `postgresql+pg8000://`.',
    deepDive:
      'Special characters in passwords (e.g. `@`, `:`, `/`) must be URL-encoded using `urllib.parse.quote_plus(password)`.',
    tags: ['PostgreSQL', 'psycopg2', 'SQLAlchemy', 'Connection String', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-097',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Database Drivers',
    topic: 'MySQL & MariaDB Drivers: PyMySQL vs. mysqlclient',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'When connecting Python to MySQL or MariaDB, what is the primary difference between `pymysql` and `mysqlclient`?',
    codeSnippet: `# SQLAlchemy connection using PyMySQL:
engine = create_engine('mysql+pymysql://root:pass@localhost:3306/sales_db')`,
    options: [
      'PyMySQL is a pure-Python driver that installs seamlessly without C compiler dependencies; mysqlclient is a C-extension wrapper around the MySQL C client library offering maximum throughput',
      'PyMySQL only works on Python 2; mysqlclient only works on Python 3',
      'mysqlclient can only execute SELECT queries',
      'PyMySQL is proprietary commercial software'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'PyMySQL is a pure-Python driver that installs seamlessly without C compiler dependencies; mysqlclient is a C-extension wrapper around the MySQL C client library offering maximum throughput',
    explanationTitle: 'PyMySQL vs. mysqlclient Drivers',
    explanationText:
      '`pymysql` is easy to install on any OS (`pip install pymysql`) because it has no binary compilation requirements. `mysqlclient` requires MySQL development headers to build, but provides faster execution for high-throughput production services.',
    deepDive:
      'MariaDB provides its own native connector: `mariadb` with URI `mariadb+mariadbconnector://`.',
    tags: ['MySQL', 'MariaDB', 'PyMySQL', 'Drivers', 'SQLAlchemy', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-098',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Connection Pooling',
    topic: 'Connection Pooling with SQLAlchemy QueuePool',
    category: 'Programming and Database Skills',
    difficulty: 'advanced',
    question: 'Why does SQLAlchemy maintain a "Connection Pool" (`pool_size=5`, `max_overflow=10`) rather than creating a new physical TCP connection on every query?',
    codeSnippet: `engine = create_engine(
    'postgresql+psycopg2://user:pass@host/db',
    pool_size=10,        # Keep 10 persistent connections open
    max_overflow=20,     # Allow 20 extra surge connections
    pool_timeout=30      # Timeout waiting for pool connection
)`,
    options: [
      'Establishing a new TCP and SSL handshake with authentication to a database server is computationally expensive; connection pooling maintains a cache of open connections that queries borrow and return',
      'Because databases only permit a single connection per computer',
      'Connection pooling encrypts internet bandwidth',
      'To prevent the computer from sleeping during long queries'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Establishing a new TCP and SSL handshake with authentication to a database server is computationally expensive; connection pooling maintains a cache of open connections that queries borrow and return',
    explanationTitle: 'Connection Pooling Efficiency',
    explanationText:
      'Opening a database connection takes 20–100 milliseconds due to network TCP handshakes, TLS negotiation, authentication, and backend process spawning. A connection pool keeps connections warm. When code calls `engine.connect()`, it gets an existing connection instantly.',
    deepDive:
      'When the `with conn:` block exits, `conn.close()` does NOT terminate the underlying socket; it returns the connection back to the pool for the next caller.',
    tags: ['Connection Pooling', 'QueuePool', 'SQLAlchemy', 'Performance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-099',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'Schema Migrations',
    topic: 'Version-Controlled Schema Migrations (Alembic & Flyway)',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Why do software engineering and data teams manage database schema changes using migration tools (like Alembic) rather than running manual `ALTER TABLE` statements in production?',
    codeSnippet: `# Alembic migration script (revision 1a2b3c4d):
def upgrade():
    op.add_column('users', sa.Column('last_login', sa.DateTime()))

def downgrade():
    op.drop_column('users', 'last_login')`,
    options: [
      'Migration scripts track DDL changes as version-controlled code, providing reproducible, automated forward upgrades and backward rollbacks across staging, test, and production environments',
      'Manual ALTER TABLE statements are prohibited by ANSI standards',
      'Alembic automatically translates SQL into Python',
      'Because databases automatically delete tables if altered manually'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Migration scripts track DDL changes as version-controlled code, providing reproducible, automated forward upgrades and backward rollbacks across staging, test, and production environments',
    explanationTitle: 'Database Schema Migrations via Alembic',
    explanationText:
      'Manual database edits cause environment drift, untracked bugs, and catastrophic outages. Schema migration tools track each DDL revision in git, execute changes deterministically via CI/CD pipelines, and record the current revision hash in a metadata table (`alembic_version`).',
    deepDive:
      'Every migration defines an `upgrade()` function to apply changes and a matching `downgrade()` function to revert them if an emergency rollback is required.',
    tags: ['Alembic', 'Migrations', 'DDL', 'DevOps', 'Reproducibility', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-100',
    section: 'Section 2',
    chapter: '2.5',
    track: 'pcad',
    cardType: 'ETL Pipelines',
    topic: 'Building an End-to-End Python & SQL ETL Data Pipeline',
    category: 'Programming and Database Skills',
    difficulty: 'advanced',
    question: 'What are the sequential stages in an end-to-end Python/SQL ETL data pipeline extracting transactional data, transforming it in pandas, and publishing it to an analytical mart?',
    codeSnippet: `from sqlalchemy import create_engine
import pandas as pd

# Stage 1: EXTRACT from OLTP Database
oltp_engine = create_engine('postgresql+psycopg2://user:pass@oltp/db')
raw_df = pd.read_sql_query("SELECT * FROM orders WHERE status = 'COMPLETED'", con=oltp_engine)

# Stage 2: TRANSFORM in pandas
clean_df = (
    raw_df.dropna(subset=['customer_id'])
          .assign(revenue=lambda d: d['qty'] * d['unit_price'])
          .groupby('customer_id')['revenue'].sum().reset_index()
)

# Stage 3: LOAD to OLAP Data Warehouse
olap_engine = create_engine('postgresql+psycopg2://user:pass@warehouse/db')
clean_df.to_sql('fact_customer_revenue', con=olap_engine, if_exists='append', index=False)`,
    options: [
      'Extract: Query raw source tables; Transform: Clean, deduplicate, filter, and aggregate in pandas; Load: Bulk insert structured records into the analytical data warehouse',
      'Extract: Print data to console; Transform: Save to desktop; Load: Email to manager',
      'Compile Python into C++; Delete raw database; Re-run queries',
      'Extract: Convert CSV to JSON; Transform: Encrypt keys; Load: Archive to tape drive'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Extract: Query raw source tables; Transform: Clean, deduplicate, filter, and aggregate in pandas; Load: Bulk insert structured records into the analytical data warehouse',
    explanationTitle: 'End-to-End ETL Pipeline Architecture',
    explanationText:
      'The ETL paradigm extracts raw data from operational systems without impacting transactional performance, applies business rules, cleansing, and aggregations in memory (pandas), and loads the refined facts and dimensions into an analytical data mart for BI reporting.',
    deepDive:
      'In modern cloud architectures, ELT (Extract, Load, Transform) is also popular, loading raw data directly into the warehouse and performing transformations via SQL tools like dbt.',
    tags: ['ETL', 'Pipelines', 'Extract', 'Transform', 'Load', 'End-to-End', 'PCAD-31-02']
  }
];
