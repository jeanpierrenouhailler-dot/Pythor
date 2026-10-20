import { Flashcard } from '../types';

export const pcadSection2CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 2.2 CONTINUED: FUNCTIONS, OOP & EXCEPTION HANDLING [Cards 36-40]
  // =========================================================================
  {
    id: 'pcad-sec2-036',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Exception Handling',
    topic: 'Exception Chaining with raise ... from err',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Why should a data pipeline wrap low-level system errors into domain exceptions using explicit exception chaining: `raise DataIngestionError("Failed to ingest CSV") from err`?',
    codeSnippet: `try:
    with open('corrupt_data.csv', 'r') as f:
        parse_records(f)
except OSError as err:
    # Explicit exception chaining:
    raise DataIngestionError("ETL Stage 1 Ingestion Failure") from err`,
    options: [
      'It preserves the original root cause traceback (PEP 3134) under __cause__, providing clear context to engineers while presenting a high-level domain exception to callers',
      'It forces Python to retry reading the file 3 times',
      'It deletes the original exception from memory to save RAM',
      'It converts the exception into a JSON string'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It preserves the original root cause traceback (PEP 3134) under __cause__, providing clear context to engineers while presenting a high-level domain exception to callers',
    explanationTitle: 'Explicit Exception Chaining (PEP 3134)',
    explanationText:
      'Without `from err`, the console displays confusing "During handling of the above exception, another exception occurred" messages. Using `raise NewException(...) from original_err` clearly states "The above exception was the direct cause of the following exception", maintaining forensic traceability.',
    deepDive:
      'To deliberately suppress the original traceback when exposing errors to external API clients, use `raise CustomError(...) from None`.',
    tags: ['Exceptions', 'raise from', 'Traceback', 'Clean Code', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-037',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Exception Handling',
    topic: 'Defining Custom Domain Exceptions',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How do you define a custom exception hierarchy for an enterprise analytics system in Python?',
    codeSnippet: `class AnalyticsPipelineError(Exception):
    """Base exception for all pipeline errors."""
    pass

class SchemaMismatchError(AnalyticsPipelineError):
    """Raised when incoming dataset schema does not match contract."""
    pass

class NullThresholdExceededError(AnalyticsPipelineError):
    """Raised when column null rate exceeds acceptable tolerance."""
    pass`,
    options: [
      'Subclass Python’s built-in Exception class (or a custom pipeline base exception) using standard class inheritance',
      'Subclass BaseException directly',
      'Create a dictionary with keys "error_name" and "code"',
      'Call sys.create_exception("SchemaMismatchError")'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Subclass Python’s built-in Exception class (or a custom pipeline base exception) using standard class inheritance',
    explanationTitle: 'Custom Exception Hierarchies',
    explanationText:
      'Custom exceptions inherit from `Exception`. Creating an intermediate base class like `AnalyticsPipelineError` allows downstream callers to catch either specific errors (`except SchemaMismatchError:`) or all pipeline errors at once (`except AnalyticsPipelineError:`).',
    deepDive:
      'Never subclass `BaseException` directly, as that would bypass standard application exception catching mechanisms.',
    tags: ['Custom Exceptions', 'OOP', 'Error Handling', 'Architecture', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-038',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Type Hinting',
    topic: 'Type Hinting for Analytical Pipelines (typing module)',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'What does the type signature `def calculate_metric(values: list[float], scale: float | None = None) -> dict[str, float]:` specify?',
    codeSnippet: `from typing import Optional

# Modern Python 3.10+ union syntax:
def calculate_metric(
    values: list[float],
    scale: float | None = None
) -> dict[str, float]:
    pass`,
    options: [
      'values must be a list of floats, scale can be a float or None (optional), and the function returns a dictionary mapping strings to floats',
      'The function returns a list of dictionaries containing floats',
      'The function will raise an error at runtime if an integer is passed',
      'The function executes in C++ mode'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'values must be a list of floats, scale can be a float or None (optional), and the function returns a dictionary mapping strings to floats',
    explanationTitle: 'Type Annotations and Static Analysis',
    explanationText:
      'Python type hints clarify input and output expectations for data functions. While Python does not enforce types at runtime, static type checkers like `mypy` and IDEs catch bugs (e.g. passing a string to a numeric calculation) before deployment.',
    deepDive:
      'Python 3.10 introduced the pipe `|` operator for union types, replacing the older `Optional[float]` and `Union[float, None]` syntax.',
    tags: ['Type Hints', 'typing', 'mypy', 'Clean Code', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-039',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Documentation',
    topic: 'Standard Docstring Conventions (NumPy / Google Style)',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'Why are structured docstrings (e.g. Google or NumPy format) with `Args`, `Returns`, and `Raises` sections standard in production data science codebases?',
    codeSnippet: `def remove_outliers(df, threshold=3.0):
    """Filter rows exceeding a Z-score threshold.

    Args:
        df (pd.DataFrame): The input dataset.
        threshold (float, optional): Z-score cutoff. Defaults to 3.0.

    Returns:
        pd.DataFrame: Cleaned dataset without outliers.

    Raises:
        ValueError: If threshold is negative.
    """
    pass`,
    options: [
      'They provide standardized, human-readable documentation that IDEs parse for autocompletion tooltips and automated tools (Sphinx) compile into API documentation websites',
      'Python refuses to compile code without docstrings',
      'Docstrings prevent SQL injection attacks',
      'Docstrings are executed by the CPU during startup'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'They provide standardized, human-readable documentation that IDEs parse for autocompletion tooltips and automated tools (Sphinx) compile into API documentation websites',
    explanationTitle: 'Structured Docstrings in Data Engineering',
    explanationText:
      'Data pipelines frequently change hands. Structured docstrings clearly state data expectations, edge cases, default parameters, and potential exceptions. Tools like Sphinx and MkDocs parse them automatically to generate living technical documentation.',
    deepDive:
      'Access any object’s docstring at runtime via its `.__doc__` attribute or by calling `help(func)`.',
    tags: ['Docstrings', 'Documentation', 'PEP 257', 'Clean Code', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-040',
    section: 'Section 2',
    chapter: '2.2',
    track: 'pcad',
    cardType: 'Testing',
    topic: 'Unit Testing Data Transformations with pytest',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How do you write an automated unit test with `pytest` using fixtures to verify that a data cleaning function properly handles null values?',
    codeSnippet: `import pytest
import pandas as pd
import numpy as np

@pytest.fixture
def sample_dirty_data():
    return pd.DataFrame({'val': [10.0, np.nan, 30.0]})

def test_impute_median(sample_dirty_data):
    cleaned = impute_median(sample_dirty_data, col='val')
    # Assert no nulls remain and median (20.0) was used:
    assert cleaned['val'].isna().sum() == 0
    assert cleaned['val'].iloc[1] == 20.0`,
    options: [
      'Define test functions prefixed with test_ using standard assert statements, and provide reusable test datasets using the @pytest.fixture decorator',
      'Call unittest.main() inside every test function',
      'Write tests inside a try-except block that prints "PASS"',
      'Pytest requires test files to be written in JSON format'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Define test functions prefixed with test_ using standard assert statements, and provide reusable test datasets using the @pytest.fixture decorator',
    explanationTitle: 'Unit Testing Pipelines with pytest',
    explanationText:
      '`pytest` is the industry standard for Python testing. Functions prefixed with `test_` are discovered automatically. `@pytest.fixture` creates clean, isolated test data setups. Simple `assert` expressions provide clear diff reports when expectations fail.',
    deepDive:
      'Use `pandas.testing.assert_frame_equal(df1, df2)` for asserting exact equality between DataFrames, including column types and float tolerances.',
    tags: ['pytest', 'Unit Testing', 'Fixtures', 'assert', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 2.3: RELATIONAL DATABASE FUNDAMENTALS & BASIC SQL [Cards 41-60]
  // =========================================================================
  {
    id: 'pcad-sec2-041',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'Relational Theory',
    topic: 'The Relational Model: Relations, Tuples, and Attributes',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'In formal relational database theory (E.F. Codd), how do the formal terms "Relation", "Tuple", and "Attribute" map to standard database concepts?',
    codeSnippet: `# Relational Terminology Mapping:
# Relation   <---> Table
# Tuple      <---> Row (Record)
# Attribute  <---> Column (Field)`,
    options: [
      'Relation maps to Table; Tuple maps to Row (Record); Attribute maps to Column (Field)',
      'Relation maps to Database; Tuple maps to Primary Key; Attribute maps to Index',
      'Relation maps to Foreign Key; Tuple maps to Constraint; Attribute maps to SQL Query',
      'All three terms refer exclusively to Python data types'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Relation maps to Table; Tuple maps to Row (Record); Attribute maps to Column (Field)',
    explanationTitle: 'Foundations of the Relational Model',
    explanationText:
      'In Codd’s 1970 relational model, data is structured as mathematical relations (tables). Each row is an ordered $n$-tuple representing an entity instance, and each column is an attribute belonging to a defined domain (datatype).',
    deepDive:
      'A true relational relation has no duplicate tuples and order of rows is mathematically immaterial.',
    tags: ['Relational Model', 'Codd', 'Tuple', 'Attribute', 'SQL', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-042',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'Database Integrity',
    topic: 'Foreign Keys & Cascading Deletes (ON DELETE CASCADE)',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'What happens when a customer record is deleted from `customers` if the `orders` table defines `FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE`?',
    codeSnippet: `CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    total_amount DECIMAL(10, 2),
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

DELETE FROM customers WHERE id = 101;`,
    options: [
      'The database automatically deletes all related order records belonging to customer 101, preserving referential integrity and preventing orphan records',
      'The database raises a ForeignKeyViolation error and refuses to delete the customer',
      'The customer_id in orders is set to NULL',
      'The orders table is dropped entirely'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The database automatically deletes all related order records belonging to customer 101, preserving referential integrity and preventing orphan records',
    explanationTitle: 'Referential Integrity and ON DELETE CASCADE',
    explanationText:
      'Foreign keys link child records to parent records. `ON DELETE CASCADE` automatically propagates parent deletions to child rows. In contrast, `ON DELETE RESTRICT` (or `NO ACTION`) blocks deletion of the parent while children exist; `ON DELETE SET NULL` sets child FKs to NULL.',
    deepDive:
      'In analytical databases, cascading deletes should be used with extreme caution to prevent accidental loss of historical financial ledger records.',
    tags: ['Foreign Keys', 'Referential Integrity', 'CASCADE', 'DDL', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-043',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'Normalization',
    topic: 'Database Normalization: 1NF, 2NF, and 3NF',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'A table is in Third Normal Form (3NF) if and only if it satisfies 2NF and what additional condition?',
    codeSnippet: `# Normalization Ladder:
# 1NF: Atomic values (no repeating groups/arrays)
# 2NF: 1NF + No partial dependencies (every non-key attribute depends on the WHOLE primary key)
# 3NF: 2NF + No transitive dependencies (non-key attributes must NOT depend on other non-key attributes!)`,
    options: [
      'There are no transitive functional dependencies; all non-key attributes depend solely and directly on the primary key ("the key, the whole key, and nothing but the key")',
      'The table contains fewer than 1,000 rows',
      'All columns are formatted as lowercase strings',
      'The table has at least 3 foreign keys'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'There are no transitive functional dependencies; all non-key attributes depend solely and directly on the primary key ("the key, the whole key, and nothing but the key")',
    explanationTitle: 'Third Normal Form (3NF) Definition',
    explanationText:
      'A transitive dependency occurs when non-key attribute $A$ determines non-key attribute $B$ (e.g. `zip_code -> city_name`). 3NF eliminates transitive dependencies by splitting them into a separate lookup table, preventing update, insertion, and deletion anomalies.',
    deepDive:
      'Bill Kent’s famous summary of 3NF: "Every non-key attribute must provide a fact about the key, the whole key, and nothing but the key, so help me Codd."',
    tags: ['Normalization', '1NF', '2NF', '3NF', 'Database Design', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-044',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'Data Architecture',
    topic: 'OLTP vs. OLAP: The Star Schema for Analytics',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Why do data warehouses (OLAP) use dimensional modeling (Star Schemas) instead of highly normalized 3NF transactional schemas (OLTP)?',
    codeSnippet: `# Star Schema Design:
# Central Fact Table: fact_sales (sales_id, date_id, customer_id, product_id, revenue, quantity)
# Surrounding Dimension Tables: dim_date, dim_customer, dim_product
# Simple joins, fast aggregations, intuitive for BI analysts!`,
    options: [
      'OLTP prioritizes normalized 3NF to ensure fast single-row writes and eliminate write anomalies; OLAP star schemas denormalize data into central Fact tables and surrounding Dimension tables to simplify queries and maximize aggregation speed',
      'Star schemas eliminate the need for primary keys',
      'OLAP systems cannot execute SQL joins',
      'OLTP systems are only used on mobile phones'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'OLTP prioritizes normalized 3NF to ensure fast single-row writes and eliminate write anomalies; OLAP star schemas denormalize data into central Fact tables and surrounding Dimension tables to simplify queries and maximize aggregation speed',
    explanationTitle: 'OLTP vs. OLAP Architectural Divergence',
    explanationText:
      'Online Transaction Processing (OLTP) handles thousands of concurrent row updates (e-commerce checkouts) where 3NF avoids duplicate write penalties. Online Analytical Processing (OLAP) scans millions of rows for reporting; Star Schemas minimize join hops and optimize columnar scanning.',
    deepDive:
      'Fact tables hold numerical measurements/metrics; Dimension tables hold textual descriptive context (who, what, where, when).',
    tags: ['OLTP', 'OLAP', 'Star Schema', 'Data Warehousing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-045',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Fundamentals',
    topic: 'Logical Query Processing Order of Execution',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Why does attempting `WHERE revenue > 1000` fail when `revenue` is a column alias defined in `SELECT price * quantity AS revenue`?',
    codeSnippet: `-- This query fails with "column revenue does not exist"!
SELECT price * quantity AS revenue
FROM order_items
WHERE revenue > 1000; -- Syntax error!`,
    options: [
      'Because SQL evaluates FROM and WHERE clauses before the SELECT clause; the alias "revenue" has not been created yet when WHERE is evaluated',
      'Because revenue is a reserved keyword in SQL',
      'Because multiplication is not supported in WHERE clauses',
      'Because SQL queries must always be executed in alphabetical order'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Because SQL evaluates FROM and WHERE clauses before the SELECT clause; the alias "revenue" has not been created yet when WHERE is evaluated',
    explanationTitle: 'Logical SQL Execution Order',
    explanationText:
      'SQL does not execute in written lexical order. The logical execution order is: 1. `FROM` -> 2. `WHERE` -> 3. `GROUP BY` -> 4. `HAVING` -> 5. `SELECT` -> 6. `DISTINCT` -> 7. `ORDER BY` -> 8. `LIMIT`. Aliases created in `SELECT` are visible in `ORDER BY`, but not in `WHERE`.',
    deepDive:
      'To filter on a calculated column in the same query, repeat the expression (`WHERE price * quantity > 1000`) or wrap it in a CTE/subquery.',
    tags: ['SQL Execution Order', 'WHERE', 'SELECT', 'Aliases', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-046',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Querying',
    topic: 'SELECT, Column Aliasing, and SELECT DISTINCT',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How do you query a deduplicated list of all distinct country names from the `customers` table, aliasing the column as `nation`?',
    codeSnippet: `SELECT DISTINCT country AS nation
FROM customers;`,
    options: [
      'SELECT DISTINCT country AS nation FROM customers;',
      'SELECT UNIQUE country AS nation FROM customers;',
      'SELECT DEDUPE country TO nation FROM customers;',
      'SELECT country (DISTINCT) AS nation FROM customers;'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'SELECT DISTINCT country AS nation FROM customers;',
    explanationTitle: 'SELECT DISTINCT and Aliasing Syntax',
    explanationText:
      '`SELECT DISTINCT` evaluates the entire row projection and eliminates duplicate rows from the output. The `AS` keyword assigns an alias to the output column for display or downstream referencing.',
    deepDive:
      'If you specify `SELECT DISTINCT country, city`, SQL deduplicates unique *combinations* of country and city, not just country alone.',
    tags: ['SQL', 'SELECT DISTINCT', 'Aliasing', 'Queries', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-047',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Querying',
    topic: 'Filtering with WHERE Comparison Operators',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'Which SQL operator signifies "Not Equal To" across standard ANSI SQL dialects?',
    codeSnippet: `SELECT * FROM inventory
WHERE stock_count <> 0; -- or != 0`,
    options: [
      '<> (standard ANSI SQL) or !=',
      'NOT ==',
      '!==',
      'IS NOT EQUAL'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '<> (standard ANSI SQL) or !=',
    explanationTitle: 'SQL Comparison Operators',
    explanationText:
      'The standard ANSI SQL inequality operator is `<>`. Almost all modern relational database engines (PostgreSQL, MySQL, SQLite, Oracle, SQL Server) also support `!=`.',
    deepDive:
      'Remember that `<>` comparisons against `NULL` evaluate to UNKNOWN, not TRUE. `WHERE status <> "Inactive"` will NOT return rows where status is NULL.',
    tags: ['SQL', 'WHERE', 'Comparison Operators', 'ANSI SQL', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-048',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Querying',
    topic: 'Logical Operator Precedence: AND before OR',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'In SQL, what is the evaluation precedence between `AND` and `OR` when parentheses are omitted?',
    codeSnippet: `SELECT * FROM employees
WHERE department = 'Sales' OR department = 'Marketing' AND salary > 80000;
-- Does this return all Sales employees, or only high-earning Sales employees?`,
    options: [
      'AND has higher precedence than OR; the condition is evaluated as department = "Sales" OR (department = "Marketing" AND salary > 80000)',
      'OR has higher precedence than AND',
      'Expressions are strictly evaluated from left to right',
      'It raises a syntax error unless parentheses are explicitly provided'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'AND has higher precedence than OR; the condition is evaluated as department = "Sales" OR (department = "Marketing" AND salary > 80000)',
    explanationTitle: 'Operator Precedence: AND over OR',
    explanationText:
      'Just as multiplication precedes addition in arithmetic, `AND` precedes `OR` in boolean logic. Without parentheses, all Sales employees are returned regardless of salary. Always use explicit parentheses `(department = "Sales" OR department = "Marketing") AND salary > 80000`.',
    deepDive:
      'Failing to use parentheses with mixed `AND`/`OR` clauses is one of the most frequent sources of data leakage and reporting bugs in business analytics.',
    tags: ['SQL', 'AND', 'OR', 'Operator Precedence', 'Logic', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-049',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Querying',
    topic: 'Pattern Matching with LIKE Wildcards (% and _)',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'In SQL `LIKE` pattern matching, what do the `%` and `_` wildcard characters represent?',
    codeSnippet: `-- Pattern 1: Any name starting with 'A' and ending with 'n'
SELECT * FROM users WHERE username LIKE 'A%n';

-- Pattern 2: Exactly 4-character codes starting with 'US'
SELECT * FROM regions WHERE code LIKE 'US__';`,
    options: [
      '% matches zero or more characters; _ matches exactly one single character',
      '% matches numbers; _ matches letters',
      '% matches exactly one character; _ matches any string',
      '% matches whitespace; _ matches punctuation'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '% matches zero or more characters; _ matches exactly one single character',
    explanationTitle: 'LIKE Wildcard Matching Rules',
    explanationText:
      '`%` represents a variable-length wildcard (0, 1, or many characters). `_` is a fixed single-character wildcard. For example, "\'J_n\'" matches "\'Jan\'", "\'Jon\'", "\'Jen\'", but not "\'John\'".',
    deepDive:
      'In PostgreSQL, `ILIKE` performs case-insensitive wildcard matching. In standard SQL, use `LOWER(col) LIKE "pattern"`.',
    tags: ['SQL', 'LIKE', 'Wildcards', 'Pattern Matching', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-050',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Querying',
    topic: 'Set Membership with IN and NOT IN',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'Why does the query `SELECT * FROM t WHERE col NOT IN (1, 2, NULL)` return ZERO rows, even if `col` contains values like `3` or `4`?',
    codeSnippet: `-- Dangerous Three-Valued Logic trap:
SELECT * FROM accounts 
WHERE account_id NOT IN (101, 102, NULL);
-- Output: 0 rows returned! Why?`,
    options: [
      'NOT IN expands to col <> 1 AND col <> 2 AND col <> NULL; because col <> NULL evaluates to UNKNOWN, the entire conjunction evaluates to UNKNOWN (or False), returning no rows',
      'Because SQL databases delete all data when NULL appears in a list',
      'Because NOT IN only accepts integer literals',
      'Because account_id is a primary key'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'NOT IN expands to col <> 1 AND col <> 2 AND col <> NULL; because col <> NULL evaluates to UNKNOWN, the entire conjunction evaluates to UNKNOWN (or False), returning no rows',
    explanationTitle: 'The NOT IN with NULL Subquery Trap',
    explanationText:
      'In SQL three-valued logic, `x <> NULL` is `UNKNOWN`. Any boolean expression `TRUE AND UNKNOWN` yields `UNKNOWN`, and `WHERE` filters out rows unless the condition is strictly `TRUE`. If a subquery returns even a single `NULL`, `NOT IN` fails completely.',
    deepDive:
      'Best practice: always use `NOT EXISTS` instead of `NOT IN` when comparing against subqueries that could return NULLs.',
    tags: ['SQL', 'NOT IN', 'NULL', 'Three-Valued Logic', 'Traps', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-051',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Querying',
    topic: 'Range Filtering with BETWEEN ... AND ...',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'Is the SQL `BETWEEN low AND high` operator inclusive or exclusive of the boundary values?',
    codeSnippet: `SELECT product_name, price
FROM products
WHERE price BETWEEN 10.00 AND 20.00;`,
    options: [
      'It is strictly inclusive; it is mathematically equivalent to price >= 10.00 AND price <= 20.00',
      'It is strictly exclusive; it is equivalent to price > 10.00 AND price < 20.00',
      'It includes the lower bound but excludes the upper bound [low, high)',
      'Boundary behavior depends on whether numbers are integers or floats'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It is strictly inclusive; it is mathematically equivalent to price >= 10.00 AND price <= 20.00',
    explanationTitle: 'Inclusivity of the BETWEEN Operator',
    explanationText:
      'In standard SQL, `BETWEEN` is always inclusive of both the lower and upper bounds. Note: when querying timestamps (e.g. `BETWEEN "2026-01-01" AND "2026-01-31"`), the upper bound resolves to midnight `2026-01-31 00:00:00`, accidentally excluding events on January 31 afternoon.',
    deepDive:
      'For datetime queries, use explicit half-open intervals: `ts >= "2026-01-01" AND ts < "2026-02-01"`.',
    tags: ['SQL', 'BETWEEN', 'Range', 'Filtering', 'Timestamps', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-052',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Fundamentals',
    topic: 'Three-Valued Logic: IS NULL vs. = NULL',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'Why does executing `SELECT * FROM users WHERE referral_code = NULL;` return zero rows, even when referral codes are genuinely missing?',
    codeSnippet: `-- Incorrect:
SELECT * FROM users WHERE referral_code = NULL; -- 0 rows!

-- Correct:
SELECT * FROM users WHERE referral_code IS NULL;`,
    options: [
      'NULL represents an unknown value, not a literal quantity; comparing anything to NULL with = evaluates to UNKNOWN, requiring the IS NULL predicate to test for absence of data',
      'Because referral_code is stored as an integer',
      'Because SQL databases automatically replace missing values with empty strings',
      'Because = NULL is only valid in MySQL'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'NULL represents an unknown value, not a literal quantity; comparing anything to NULL with = evaluates to UNKNOWN, requiring the IS NULL predicate to test for absence of data',
    explanationTitle: 'Three-Valued Logic and IS NULL',
    explanationText:
      'In SQL, `NULL = NULL` is not `TRUE`; it is `UNKNOWN`. You cannot determine whether two unknown quantities are equal. Therefore, standard equality operators (`=`, `!=`) fail on NULLs. You must test nullity using `IS NULL` or `IS NOT NULL`.',
    deepDive:
      'Some databases (e.g. PostgreSQL) provide null-safe equality operators: `col IS NOT DISTINCT FROM val`.',
    tags: ['SQL', 'IS NULL', 'Three-Valued Logic', 'Nullity', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-053',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Querying',
    topic: 'Conditional Logic with CASE WHEN Expressions',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How do you create a categorical tier column based on sales amount using a SQL `CASE` expression?',
    codeSnippet: `SELECT 
    order_id,
    amount,
    CASE 
        WHEN amount >= 1000 THEN 'Tier 1 (Enterprise)'
        WHEN amount >= 250  THEN 'Tier 2 (Mid-Market)'
        ELSE 'Tier 3 (Standard)'
    END AS customer_tier
FROM orders;`,
    options: [
      'Use CASE WHEN condition THEN result ... ELSE default END AS alias',
      'Use IF(condition, result, default)',
      'Use SWITCH condition CASE result',
      'Use DECODE(amount, 1000, "Tier 1")'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Use CASE WHEN condition THEN result ... ELSE default END AS alias',
    explanationTitle: 'SQL Searched CASE Expression Syntax',
    explanationText:
      '`CASE` is an ANSI SQL expression that evaluates conditions sequentially from top to bottom. It returns the `THEN` result of the first condition that evaluates to `TRUE`. If no condition matches, it returns the `ELSE` value (or `NULL` if `ELSE` is omitted).',
    deepDive:
      'Because `CASE` is an expression (not a statement), it can appear inside `SELECT`, `WHERE`, `ORDER BY`, or inside aggregate functions like `SUM(CASE WHEN status="Returned" THEN 1 ELSE 0 END)`.',
    tags: ['SQL', 'CASE WHEN', 'Conditional Logic', 'Feature Engineering', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-054',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Functions',
    topic: 'Null Handling with COALESCE and NULLIF',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How do `COALESCE()` and `NULLIF()` safeguard against missing data and division-by-zero errors in analytical SQL queries?',
    codeSnippet: `-- Safe calculation: Prevents division-by-zero!
SELECT 
    dept_name,
    COALESCE(phone, 'No Phone') AS contact_phone,
    total_sales / NULLIF(num_transactions, 0) AS avg_ticket_size
FROM department_stats;`,
    options: [
      'COALESCE() returns the first non-null argument; NULLIF(a, b) returns NULL if a equals b, which prevents division-by-zero because dividing by NULL returns NULL instead of crashing',
      'COALESCE() computes the average; NULLIF() deletes the row',
      'Both functions are identical aliases',
      'NULLIF() forces the computer to restart on error'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'COALESCE() returns the first non-null argument; NULLIF(a, b) returns NULL if a equals b, which prevents division-by-zero because dividing by NULL returns NULL instead of crashing',
    explanationTitle: 'Defensive SQL with COALESCE and NULLIF',
    explanationText:
      '`COALESCE(val1, val2, ...)` substitutes the first non-null fallback value. `NULLIF(val, 0)` returns `NULL` when `val == 0`. Since `number / NULL = NULL` in SQL, wrapping denominators in `NULLIF(..., 0)` prevents queries from crashing with `division by zero`.',
    deepDive:
      'In PostgreSQL and SQLite, `NULLIF` is a standard ANSI function supported in all production database engines.',
    tags: ['SQL', 'COALESCE', 'NULLIF', 'Division by Zero', 'Defensive SQL', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-055',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Querying',
    topic: 'Sorting Results: ORDER BY and NULLS LAST',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'When sorting a column descending in PostgreSQL or Oracle, where do `NULL` values appear by default, and how do you force them to the bottom?',
    codeSnippet: `SELECT employee_name, commission_pct
FROM sales_reps
ORDER BY commission_pct DESC NULLS LAST;`,
    options: [
      'By default in DESC sorting, NULLs appear first; specifying NULLS LAST explicitly pushes all missing commission records to the end of the result set',
      'NULLs always appear in the middle of the result set',
      'NULL values are automatically deleted when ORDER BY is used',
      'NULLS LAST is a syntax error in SQL'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'By default in DESC sorting, NULLs appear first; specifying NULLS LAST explicitly pushes all missing commission records to the end of the result set',
    explanationTitle: 'Controlling Null Placement with NULLS FIRST / LAST',
    explanationText:
      'Standard SQL treats NULLs as either larger than any value (PostgreSQL/Oracle: NULLS FIRST on DESC) or smaller than any value (MySQL/SQL Server: NULLS LAST on DESC). Adding `NULLS LAST` explicitly guarantees identical behavior across database engines.',
    deepDive:
      'In MySQL which does not support the `NULLS LAST` clause, achieve the same result with: `ORDER BY commission_pct IS NULL, commission_pct DESC`.',
    tags: ['SQL', 'ORDER BY', 'NULLS LAST', 'Sorting', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-056',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Querying',
    topic: 'Multi-Column Sorting Hierarchies',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How do you sort customer orders primarily by `order_date` descending (newest first), and secondarily by `order_total` ascending (cheapest first) for orders placed on the same day?',
    codeSnippet: `SELECT order_id, order_date, order_total
FROM orders
ORDER BY order_date DESC, order_total ASC;`,
    options: [
      'ORDER BY order_date DESC, order_total ASC;',
      'ORDER BY (order_date DESC AND order_total ASC);',
      'ORDER BY order_date, order_total (DESC, ASC);',
      'SORT BY order_date DESC THEN order_total ASC;'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ORDER BY order_date DESC, order_total ASC;',
    explanationTitle: 'Multi-Column Sorting Syntax',
    explanationText:
      'Separate sort keys with commas. SQL sorts rows using the first column; ties in the first column are broken by evaluating the second column, and so forth. Each column has its own independent `ASC` (default) or `DESC` qualifier.',
    deepDive:
      'You can also sort by column position numbers (e.g. `ORDER BY 2 DESC, 3 ASC`), but naming columns explicitly is far safer against schema edits.',
    tags: ['SQL', 'ORDER BY', 'Multi-Column Sorting', 'Queries', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-057',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Querying',
    topic: 'Pagination with LIMIT and OFFSET',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How do you retrieve page 3 of search results (displaying 20 items per page) using `LIMIT` and `OFFSET`?',
    codeSnippet: `-- Page 1: LIMIT 20 OFFSET 0
-- Page 2: LIMIT 20 OFFSET 20
-- Page 3: Fetch 20 rows, skipping the first 40 rows:
SELECT product_id, product_name
FROM products
ORDER BY product_id
LIMIT 20 OFFSET 40;`,
    options: [
      'LIMIT 20 OFFSET 40; (Page size is 20, skipping (page_num - 1) * page_size = 40 rows)',
      'LIMIT 40 OFFSET 20;',
      'PAGE 3 SIZE 20;',
      'LIMIT 20 TO 40;'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'LIMIT 20 OFFSET 40; (Page size is 20, skipping (page_num - 1) * page_size = 40 rows)',
    explanationTitle: 'Database Pagination via LIMIT and OFFSET',
    explanationText:
      '`LIMIT` specifies the maximum number of rows to return. `OFFSET` specifies how many rows to skip from the beginning. Always include an explicit `ORDER BY` clause; otherwise, relational row order is non-deterministic and pages will duplicate or miss rows.',
    deepDive:
      'For deep pagination on massive tables (e.g. page 10,000), `OFFSET` degrades performance because the database must scan and discard all prior rows. Use keyset pagination (`WHERE id > last_seen_id LIMIT 20`) instead.',
    tags: ['SQL', 'LIMIT', 'OFFSET', 'Pagination', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-058',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Functions',
    topic: 'Scalar String Functions in SQL',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'Which standard SQL string functions extract the first 3 characters of a string, remove surrounding spaces, and convert the result to uppercase?',
    codeSnippet: `SELECT 
    TRIM(UPPER(SUBSTRING(country_name FROM 1 FOR 3))) AS country_code
FROM nations;
-- Alternatively in MySQL/SQLite: SUBSTR(country_name, 1, 3)`,
    options: [
      'SUBSTRING() (or SUBSTR()), TRIM(), and UPPER()',
      'SLICE(), STRIP(), and TO_UPPER()',
      'LEFT(), CLEAN(), and CAPITALS()',
      'CUT(), SQUEEZE(), and MAJUSCULE()'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'SUBSTRING() (or SUBSTR()), TRIM(), and UPPER()',
    explanationTitle: 'Standard SQL String Transformations',
    explanationText:
      '`UPPER()` transforms text to uppercase. `TRIM()` strips leading and trailing whitespace. ANSI SQL uses `SUBSTRING(string FROM start FOR length)`, where indexing starts at 1 (NOT 0 like Python).',
    deepDive:
      'Remember: SQL string indexing is 1-based. `SUBSTRING("PYTHON" FROM 1 FOR 2)` returns `"PY"`.',
    tags: ['SQL', 'String Functions', 'UPPER', 'TRIM', 'SUBSTRING', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-059',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Functions',
    topic: 'Scalar Numeric Functions in SQL',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'In SQL, what is the difference between `ROUND(4.7)`, `CEIL(4.2)`, and `FLOOR(4.8)`?',
    codeSnippet: `SELECT 
    ROUND(4.7) AS r,   -- Rounds to nearest integer: 5
    CEIL(4.2)  AS c,   -- Rounds UP to ceiling: 5
    FLOOR(4.8) AS f;   -- Rounds DOWN to floor: 4`,
    options: [
      'ROUND() rounds to the nearest integer (or specified decimal places); CEIL() (or CEILING()) rounds up to the next integer; FLOOR() rounds down to the previous integer',
      'CEIL() rounds down; FLOOR() rounds up',
      'ROUND() converts numbers to text strings',
      'All three functions compute the square root'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'ROUND() rounds to the nearest integer (or specified decimal places); CEIL() (or CEILING()) rounds up to the next integer; FLOOR() rounds down to the previous integer',
    explanationTitle: 'Mathematical Rounding Functions in SQL',
    explanationText:
      '`ROUND(val, d)` rounds to $d$ decimal places using standard half-up or bankers rounding. `CEIL(val)` returns the smallest integer $\ge val$. `FLOOR(val)` returns the largest integer $\le val$.',
    deepDive:
      'The modulo operator in standard SQL is `MOD(dividend, divisor)` (e.g. `MOD(10, 3)` returns 1).',
    tags: ['SQL', 'ROUND', 'CEIL', 'FLOOR', 'Math Functions', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-060',
    section: 'Section 2',
    chapter: '2.3',
    track: 'pcad',
    cardType: 'SQL Functions',
    topic: 'Temporal Truncation with DATE_TRUNC',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'In analytical SQL (PostgreSQL, Snowflake, BigQuery), what does `DATE_TRUNC("month", timestamp_col)` accomplish?',
    codeSnippet: `SELECT 
    DATE_TRUNC('month', order_date) AS order_month,
    SUM(revenue) AS monthly_revenue
FROM orders
GROUP BY order_month
ORDER BY order_month;`,
    options: [
      'It rounds the timestamp down to the first moment of the specified interval (e.g. "2026-10-12 14:32:00" becomes "2026-10-01 00:00:00"), enabling clean monthly aggregation',
      'It extracts the integer month number (10) as a string',
      'It deletes records older than one month from the table',
      'It converts timestamps into Julian calendar days'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It rounds the timestamp down to the first moment of the specified interval (e.g. "2026-10-12 14:32:00" becomes "2026-10-01 00:00:00"), enabling clean monthly aggregation',
    explanationTitle: 'Temporal Aggregation via DATE_TRUNC',
    explanationText:
      '`DATE_TRUNC` is essential for cohort and time-series rollups. Truncating by "\'month\'", "\'quarter\'", or "\'year\'" replaces smaller date/time fields with zero/one, grouping disparate days into a single bucket timestamp that remains sortable and recognizable as a date.',
    deepDive:
      'To extract a raw numerical integer part (e.g. day of week or year), use `EXTRACT(YEAR FROM timestamp_col)`.',
    tags: ['SQL', 'DATE_TRUNC', 'Time Series', 'Aggregation', 'Temporal', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 2.4: ADVANCED SQL QUERIES & AGGREGATIONS [Cards 61-70]
  // =========================================================================
  {
    id: 'pcad-sec2-061',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Aggregations',
    topic: 'COUNT(*) vs. COUNT(column) vs. COUNT(DISTINCT column)',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'Given 100 rows where `discount_code` is NULL in 20 rows and contains the value `"PROMO"` in 30 rows, what do `COUNT(*)`, `COUNT(discount_code)`, and `COUNT(DISTINCT discount_code)` return?',
    codeSnippet: `SELECT 
    COUNT(*) AS total_rows,                         -- Counts ALL rows (100)
    COUNT(discount_code) AS non_null_discounts,     -- Ignores NULLs (80)
    COUNT(DISTINCT discount_code) AS unique_codes   -- Counts unique non-null values
FROM promotions;`,
    options: [
      'COUNT(*) counts all physical rows regardless of NULLs; COUNT(col) counts only non-null values; COUNT(DISTINCT col) counts distinct non-null values',
      'COUNT(*) counts only non-null rows',
      'COUNT(col) and COUNT(*) are identical in all databases',
      'COUNT(DISTINCT col) counts NULL as a distinct category'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'COUNT(*) counts all physical rows regardless of NULLs; COUNT(col) counts only non-null values; COUNT(DISTINCT col) counts distinct non-null values',
    explanationTitle: 'COUNT Variations and Null Semantics',
    explanationText:
      '`COUNT(*)` counts table rows unconditionally. `COUNT(column_name)` ignores NULLs and counts only non-null occurrences. `COUNT(DISTINCT column_name)` computes the cardinality of unique non-null values.',
    deepDive:
      'Because `COUNT(col)` skips NULLs, `COUNT(*) - COUNT(col)` calculates the count of missing values in SQL.',
    tags: ['SQL', 'COUNT', 'COUNT DISTINCT', 'Aggregations', 'NULLs', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-062',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Aggregations',
    topic: 'Aggregate Functions and NULL Omission: SUM, AVG, MIN, MAX',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'A table column contains values `[10, 20, NULL]`. What does `AVG(col)` return?',
    codeSnippet: `SELECT AVG(score) FROM (
    VALUES (10), (20), (NULL)
) AS t(score);
-- Is the average (10 + 20 + 0) / 3 = 10, or (10 + 20) / 2 = 15?`,
    options: [
      '15; standard SQL aggregate functions (SUM, AVG, MIN, MAX) completely ignore NULL values when calculating results',
      '10; NULL is treated as 0 in mathematical calculations',
      'NULL; if any value is NULL, the entire average evaluates to NULL',
      'An error is raised because AVG requires non-null columns'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '15; standard SQL aggregate functions (SUM, AVG, MIN, MAX) completely ignore NULL values when calculating results',
    explanationTitle: 'Aggregate Null Omission in SQL',
    explanationText:
      'ANSI SQL mandates that aggregate functions discard NULL values before computation. `AVG` divides by the count of non-null values ($30 / 2 = 15$). If you want NULLs treated as zero, you must explicitly coalesce them: `AVG(COALESCE(score, 0))` ($30 / 3 = 10$).',
    deepDive:
      'If a table contains exclusively NULL values, `SUM()`, `AVG()`, `MIN()`, and `MAX()` evaluate to `NULL`, whereas `COUNT()` evaluates to 0.',
    tags: ['SQL', 'AVG', 'SUM', 'Aggregates', 'NULLs', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-063',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Aggregations',
    topic: 'The GROUP BY Clause and Non-Aggregated Column Rules',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'Why does executing `SELECT department, employee_name, AVG(salary) FROM employees GROUP BY department;` fail in standard SQL?',
    codeSnippet: `-- Syntax Error:
SELECT department, employee_name, AVG(salary)
FROM employees
GROUP BY department;
-- ERROR: column "employees.employee_name" must appear in the GROUP BY clause or be used in an aggregate function!`,
    options: [
      'Every column appearing in the SELECT list that is not enclosed inside an aggregate function must be explicitly included in the GROUP BY clause',
      'Because AVG() can only be run on departments with fewer than 10 employees',
      'Because salary is a private attribute',
      'Because GROUP BY must precede the FROM clause'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Every column appearing in the SELECT list that is not enclosed inside an aggregate function must be explicitly included in the GROUP BY clause',
    explanationTitle: 'The Strict GROUP BY Integrity Rule',
    explanationText:
      'When grouping by `department`, multiple employee names exist within a single department group. The database does not know which employee name to collapse into the single group summary row unless `employee_name` is either added to `GROUP BY` or wrapped in an aggregate like `MAX(employee_name)` or `STRING_AGG()`.',
    deepDive:
      'Legacy MySQL allowed this via `ONLY_FULL_GROUP_BY` disabled, returning arbitrary unpredictable rows; modern databases strictly forbid it.',
    tags: ['SQL', 'GROUP BY', 'Aggregations', 'Integrity Rules', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-064',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Filtering',
    topic: 'Filtering Aggregates: HAVING vs. WHERE Clauses',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'What is the operational distinction between the `WHERE` clause and the `HAVING` clause in an aggregated SQL query?',
    codeSnippet: `SELECT department, COUNT(*) AS emp_count, AVG(salary) AS avg_sal
FROM employees
WHERE hire_date >= '2020-01-01' -- Filters individual rows BEFORE grouping
GROUP BY department
HAVING AVG(salary) > 90000;      -- Filters aggregated groups AFTER grouping`,
    options: [
      'WHERE filters individual rows before aggregation takes place and cannot evaluate aggregate functions; HAVING filters grouped summary rows after aggregation and evaluates aggregate expressions',
      'HAVING filters individual rows; WHERE filters groups',
      'WHERE only works on numbers; HAVING only works on strings',
      'HAVING and WHERE can be used interchangeably in any clause'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'WHERE filters individual rows before aggregation takes place and cannot evaluate aggregate functions; HAVING filters grouped summary rows after aggregation and evaluates aggregate expressions',
    explanationTitle: 'WHERE vs. HAVING Operational Pipeline',
    explanationText:
      'In SQL’s execution order, `WHERE` acts on raw incoming rows from the `FROM` table. The remaining rows are then partitioned into groups by `GROUP BY`. Finally, `HAVING` discards entire groups that fail the aggregate condition.',
    deepDive:
      'Never put non-aggregate conditions in `HAVING`. Filtering rows in `WHERE` first minimizes the dataset size before grouping, drastically boosting query performance.',
    tags: ['SQL', 'WHERE', 'HAVING', 'GROUP BY', 'Performance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-065',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Aggregations',
    topic: 'Hierarchical Multi-Column Grouping',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'What does grouping by two columns `GROUP BY region, product_category` produce?',
    codeSnippet: `SELECT 
    region, 
    product_category, 
    SUM(sales_amount) AS total_revenue
FROM sales
GROUP BY region, product_category;`,
    options: [
      'One summary row for every unique combination of region and product category, aggregating revenue across that specific cross-section',
      'Two separate tables: one grouped by region and one by product category',
      'A cross join of all sales rows',
      'A single grand total row'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'One summary row for every unique combination of region and product category, aggregating revenue across that specific cross-section',
    explanationTitle: 'Multi-Dimensional Grouping Combinations',
    explanationText:
      'Multi-column grouping partitions rows into composite buckets. If there are 4 regions and 5 categories, the query emits up to $4 \times 5 = 20$ rows, computing metrics for each distinct pair.',
    deepDive:
      'For automated sub-totals and grand totals, modern SQL provides `GROUP BY ROLLUP(region, product_category)` and `GROUP BY CUBE(region, product_category)`.',
    tags: ['SQL', 'GROUP BY', 'Multi-Column', 'Aggregations', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-066',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Joins',
    topic: 'SQL INNER JOIN Mechanics and Predicates',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'How does an `INNER JOIN` combine rows from two tables `orders` and `customers` on `customer_id`?',
    codeSnippet: `SELECT 
    orders.order_id,
    customers.customer_name,
    orders.total_amount
FROM orders
INNER JOIN customers ON orders.customer_id = customers.customer_id;`,
    options: [
      'It evaluates the ON predicate for all row combinations and returns only rows where a matching key exists in both tables; non-matching rows are omitted from both sides',
      'It appends the customers table underneath the orders table',
      'It returns all customers, filling missing order values with NULL',
      'It creates a Cartesian product of every customer with every order'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It evaluates the ON predicate for all row combinations and returns only rows where a matching key exists in both tables; non-matching rows are omitted from both sides',
    explanationTitle: 'INNER JOIN Row Matching',
    explanationText:
      '`INNER JOIN` returns the intersection of the two datasets based on the join predicate (`ON`). If an order has a `customer_id` not found in `customers`, or if a customer has placed no orders, neither appears in the result.',
    deepDive:
      'If keys contain duplicates (e.g. 2 identical customer_ids on the left and 3 on the right), an inner join outputs $2 \times 3 = 6$ matched rows.',
    tags: ['SQL', 'INNER JOIN', 'Joins', 'Relational', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-067',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Joins',
    topic: 'SQL LEFT JOIN & Anti-Joins for Orphan Detection',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How do you write an "Anti-Join" in SQL to find all customers who have NEVER placed an order?',
    codeSnippet: `SELECT customers.customer_id, customers.customer_name
FROM customers
LEFT JOIN orders ON customers.customer_id = orders.customer_id
WHERE orders.order_id IS NULL;`,
    options: [
      'Perform a LEFT JOIN from customers to orders, and add WHERE orders.order_id IS NULL to filter for customers with no matching order records',
      'SELECT * FROM customers WHERE orders = 0',
      'SELECT customers EXCEPT ALL orders',
      'INNER JOIN customers WITH orders WHERE count = 0'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Perform a LEFT JOIN from customers to orders, and add WHERE orders.order_id IS NULL to filter for customers with no matching order records',
    explanationTitle: 'The SQL Anti-Join Pattern',
    explanationText:
      'A `LEFT JOIN` keeps all customers. When a customer has no orders, all joined `orders` columns become `NULL`. Checking `WHERE orders.order_id IS NULL` selects only the non-purchasing customers, creating a clean Anti-Join.',
    deepDive:
      'This pattern is mathematically equivalent to `WHERE NOT EXISTS (SELECT 1 FROM orders WHERE orders.customer_id = customers.customer_id)`.',
    tags: ['SQL', 'LEFT JOIN', 'Anti-Join', 'Orphan Detection', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-068',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Joins',
    topic: 'SQL RIGHT JOIN and FULL OUTER JOIN',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'When is a `FULL OUTER JOIN` necessary in business analytics?',
    codeSnippet: `SELECT 
    COALESCE(budget.dept_id, actuals.dept_id) AS dept_id,
    budget.projected_cost,
    actuals.realized_cost
FROM budget
FULL OUTER JOIN actuals ON budget.dept_id = actuals.dept_id;`,
    options: [
      'When reconciling two financial datasets where departments might exist in the budget but have no realized spend yet, OR exist in actual spend without a formal budget, ensuring no line item is omitted',
      'When joining tables that have no common columns',
      'When deleting duplicate rows from a database',
      'To speed up queries by bypassing table scans'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'When reconciling two financial datasets where departments might exist in the budget but have no realized spend yet, OR exist in actual spend without a formal budget, ensuring no line item is omitted',
    explanationTitle: 'Reconciliation with FULL OUTER JOIN',
    explanationText:
      '`FULL OUTER JOIN` preserves all rows from both tables. Matched rows appear together; unmatched rows from either side are padded with `NULL`s. It is standard for reconciliation, data migration auditing, and variance reporting.',
    deepDive:
      'Note: MySQL does not natively support `FULL OUTER JOIN`; in MySQL, you must emulate it by combining a `LEFT JOIN` and a `RIGHT JOIN` with `UNION`.',
    tags: ['SQL', 'FULL OUTER JOIN', 'Reconciliation', 'Joins', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-069',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Joins',
    topic: 'CROSS JOIN & Cartesian Products',
    category: 'Programming and Database Skills',
    difficulty: 'beginner',
    question: 'If Table A has 5 rows and Table B has 10 rows, how many rows does `SELECT * FROM TableA CROSS JOIN TableB;` return?',
    codeSnippet: `-- Generating all product-size combinations:
SELECT products.name, sizes.label
FROM products 
CROSS JOIN sizes;`,
    options: [
      '50 rows (the Cartesian product: 5 * 10 = 50 rows)',
      '15 rows (5 + 10 = 15)',
      '10 rows (the size of the larger table)',
      '5 rows (the size of the smaller table)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '50 rows (the Cartesian product: 5 * 10 = 50 rows)',
    explanationTitle: 'Cartesian Products via CROSS JOIN',
    explanationText:
      'A `CROSS JOIN` matches every row of the left table with every row of the right table without any join condition. It is useful for generating all possible permutations (e.g. every store crossed with every date to populate zero-sales reporting calendars).',
    deepDive:
      'Accidental cross joins (omitting an `ON` clause in legacy comma joins: `FROM tableA, tableB`) on large tables can generate trillions of rows, crashing the database server.',
    tags: ['SQL', 'CROSS JOIN', 'Cartesian Product', 'Combinations', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec2-070',
    section: 'Section 2',
    chapter: '2.4',
    track: 'pcad',
    cardType: 'SQL Joins',
    topic: 'SQL Self-Join for Hierarchical Structures',
    category: 'Programming and Database Skills',
    difficulty: 'intermediate',
    question: 'How do you query an `employees` table to display each employee’s name alongside their manager’s name when both reside in the same table?',
    codeSnippet: `SELECT 
    e.employee_name AS employee,
    m.employee_name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;`,
    options: [
      'Join the employees table to itself using distinct table aliases (e and m), matching e.manager_id to m.employee_id with a LEFT JOIN',
      'Use a GROUP BY clause on manager_id',
      'Create a temporary table using a subquery',
      'Self-joins are not supported in relational databases'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Join the employees table to itself using distinct table aliases (e and m), matching e.manager_id to m.employee_id with a LEFT JOIN',
    explanationTitle: 'Hierarchical Self-Joins',
    explanationText:
      'A self-join joins a table to itself. Distinct table aliases (`e` for employee, `m` for manager) are mandatory to disambiguate column references. A `LEFT JOIN` ensures top executives who have no manager (`manager_id IS NULL`) are not dropped.',
    deepDive:
      'To traverse multi-level hierarchies (e.g. CEO -> VP -> Director -> Manager -> Staff), use recursive Common Table Expressions (`WITH RECURSIVE`).',
    tags: ['SQL', 'Self-Join', 'Hierarchies', 'Table Aliases', 'PCAD-31-02']
  }
];
