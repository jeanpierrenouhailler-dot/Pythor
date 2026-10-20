import { Flashcard } from '../types';

export const pcedSection3CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.4: NUMPY FUNDAMENTALS & VECTORIZED CALCULATIONS (CONT.) [Cards 71-80]
  // =========================================================================
  {
    id: 'pced-sec3-071',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'How does boolean indexing (masking) work when filtering a NumPy array?',
    codeSnippet: `import numpy as np

scores = np.array([55, 82, 94, 48, 76])
passing = scores[scores >= 60]
print(passing)  # [82, 94, 76]`,
    options: [
      "scores >= 60 modifies the original array in place",
      "scores >= 60 produces a boolean array of True/False flags; passing it into brackets selects only elements corresponding to True",
      "NumPy converts passing scores to None",
      "scores >= 60 returns the count of passing students as an integer"
    ],
    correctAnswer: 1,
    explanation:
      "A condition like scores >= 60 creates a boolean mask [False, True, True, False, True]. Indexing with this mask (scores[mask]) extracts only the elements where the condition is True.",
    deepDive:
      "Boolean indexing is vectorization at its best. To combine multiple boolean conditions in NumPy, you must use bitwise operators (& for AND, | for OR, ~ for NOT) with parentheses: scores[(scores >= 60) & (scores < 90)]. Standard Python 'and'/'or' will raise a ValueError.",
    difficulty: 'intermediate',
    tags: ['Boolean Masking', 'Filtering', 'NumPy', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-072',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'What does the np.where() function do when given a condition, a value if True, and a value if False?',
    codeSnippet: `import numpy as np

temps = np.array([32, 45, 18, 50])
status = np.where(temps >= 32, "Above Freezing", "Freezing")
print(status)`,
    options: [
      "It searches the file system for files named 'Freezing'",
      "It acts as a vectorized if-else ternary operator, returning an array with values chosen from either option based on the boolean condition",
      "It deletes all temperatures below 32",
      "It calculates the standard deviation of temperatures"
    ],
    correctAnswer: 1,
    explanation:
      "np.where(condition, x, y) yields an ndarray where elements are taken from x where condition is True, and from y where condition is False.",
    deepDive:
      "If only the condition is provided (np.where(condition)), it returns a tuple of index arrays indicating the positions where the condition evaluates to True. This is widely used to locate outliers or specific data indices.",
    difficulty: 'intermediate',
    tags: ['np.where', 'Conditional Vectorization', 'NumPy', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-073',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'What is the effect of passing axis=0 versus axis=1 to np.sum() on a 2D matrix?',
    codeSnippet: `import numpy as np

matrix = np.array([
    [1, 2, 3],
    [4, 5, 6]
])
sum_col = np.sum(matrix, axis=0)
sum_row = np.sum(matrix, axis=1)`,
    options: [
      "axis=0 sums across rows (calculating column sums: [5, 7, 9]); axis=1 sums across columns (calculating row sums: [6, 15])",
      "axis=0 sums across columns; axis=1 sums across rows",
      "axis=0 sums the entire matrix to a single scalar; axis=1 does nothing",
      "axis=0 is only for 1D arrays; axis=1 is for 3D arrays"
    ],
    correctAnswer: 0,
    explanation:
      "In NumPy, axis=0 refers to the first dimension (rows). Collapsing axis=0 calculates column-wise aggregates ([1+4, 2+5, 3+6] = [5, 7, 9]). Collapsing axis=1 calculates row-wise aggregates ([1+2+3, 4+5+6] = [6, 15]).",
    deepDive:
      "A helpful mental model: the axis specified is the dimension that gets collapsed or eliminated. Collapsing axis 0 (rows) leaves only column sums; collapsing axis 1 (columns) leaves row sums.",
    difficulty: 'intermediate',
    tags: ['axis Parameter', 'np.sum', 'Aggregation', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-074',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'How do you reshape a 1D array of 6 elements into a 2D matrix with 2 rows and 3 columns?',
    codeSnippet: `import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6])
matrix = arr.reshape(2, 3)
print(matrix.shape)  # (2, 3)`,
    options: [
      "matrix = arr.to_matrix(2, 3)",
      "matrix = arr.reshape(2, 3)",
      "matrix = arr.split(2, 3)",
      "matrix = arr.resize_dims(2, 3)"
    ],
    correctAnswer: 1,
    explanation:
      "arr.reshape(rows, cols) gives a new shape to an array without changing its underlying data, provided the total number of elements (size) remains identical (2 * 3 = 6).",
    deepDive:
      "You can pass -1 for one of the dimensions (e.g. arr.reshape(2, -1)), and NumPy will automatically infer the required dimension based on the total array size.",
    difficulty: 'beginner',
    tags: ['reshape', 'Array Dimensions', 'NumPy', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-075',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'What happens to the original array when you modify a basic slice of a NumPy array?',
    codeSnippet: `import numpy as np

a = np.array([10, 20, 30, 40])
b = a[1:3]  # [20, 30]
b[0] = 999
print(a)    # What does 'a' print?`,
    options: [
      "[10, 20, 30, 40] (a remains unchanged)",
      "[10, 999, 30, 40] (modifying slice 'b' modifies original array 'a'!)",
      "TypeError: slices cannot be modified",
      "[999, 999, 999, 999]"
    ],
    correctAnswer: 1,
    explanation:
      "Unlike Python lists, basic slicing in NumPy creates a view of the original array, sharing the exact same underlying memory buffer. Modifying the slice mutates the original array!",
    deepDive:
      "This design choice enables extreme performance by avoiding redundant memory copies. If you need an independent copy that can be modified without altering the original, you must explicitly call .copy(): b = a[1:3].copy().",
    difficulty: 'intermediate',
    tags: ['Views vs Copies', 'Memory Buffer', 'NumPy Slicing Trap', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-076',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'Which NumPy functions compute the mean, median, and sample standard deviation of an array?',
    codeSnippet: `import numpy as np

data = np.array([10, 20, 30, 40, 50])
m = np.mean(data)
med = np.median(data)
s = np.std(data, ddof=1)`,
    options: [
      "np.average(), np.middle(), np.stdev()",
      "np.mean(), np.median(), np.std()",
      "np.calc_mean(), np.calc_median(), np.calc_std()",
      "np.sum(), np.count(), np.var()"
    ],
    correctAnswer: 1,
    explanation:
      "NumPy provides np.mean(), np.median(), and np.std() for calculating the arithmetic mean, median, and standard deviation.",
    deepDive:
      "Note the ddof parameter (Delta Degrees of Freedom): by default, np.std() uses ddof=0 (population standard deviation, dividing by N). In statistics, for a sample standard deviation, ddof=1 (dividing by N - 1) is required.",
    difficulty: 'beginner',
    tags: ['np.mean', 'np.median', 'np.std', 'ddof', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-077',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'How do you find the minimum and maximum values and their index positions in a NumPy array?',
    codeSnippet: `import numpy as np

scores = np.array([88, 95, 72, 99, 64])
min_val, max_val = np.min(scores), np.max(scores)
min_idx, max_idx = np.argmin(scores), np.argmax(scores)
print(max_val, max_idx)  # 99, 3`,
    options: [
      "np.minimum() / np.maximum() and np.find_min() / np.find_max()",
      "np.min() / np.max() for values, and np.argmin() / np.argmax() for index positions",
      "scores.bottom() / scores.top()",
      "scores.loc_min() / scores.loc_max()"
    ],
    correctAnswer: 1,
    explanation:
      "np.min() and np.max() return the extreme values; np.argmin() and np.argmax() return the indices (positions) of the minimum and maximum values.",
    deepDive:
      "np.minimum(a, b) and np.maximum(a, b) are element-wise comparison functions between two arrays. For aggregating a single array, use np.min() / np.max() (or arr.min() / arr.max()).",
    difficulty: 'beginner',
    tags: ['np.min', 'np.max', 'argmin', 'argmax', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-078',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'What is the result of performing an element-wise division by zero on a floating-point NumPy array?',
    codeSnippet: `import numpy as np

arr = np.array([1.0, 2.0, 0.0])
result = arr / 0.0
# Outputs: [inf, inf, nan] with a RuntimeWarning!`,
    options: [
      "Python crashes immediately with ZeroDivisionError",
      "NumPy emits a RuntimeWarning and returns special IEEE 754 floating-point values: inf (infinity) for non-zero numbers and nan (Not a Number) for 0.0/0.0",
      "NumPy automatically replaces zeros with ones",
      "The entire array is deleted from RAM"
    ],
    correctAnswer: 1,
    explanation:
      "In NumPy floating-point arrays, division by zero follows IEEE 754 arithmetic: non-zero / 0 yields inf (or -inf), while 0.0 / 0.0 yields nan, issuing a RuntimeWarning rather than halting execution.",
    deepDive:
      "This differs from standard Python (1.0 / 0.0 raises ZeroDivisionError). Analysts can test for these special values in arrays using np.isinf(arr) and np.isnan(arr).",
    difficulty: 'intermediate',
    tags: ['Division by Zero', 'np.inf', 'np.nan', 'RuntimeWarning', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-079',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'How do you calculate the dot product or matrix multiplication of two compatible 2D NumPy arrays in Python 3.5+?',
    codeSnippet: `import numpy as np

A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = A @ B  # Matrix product!`,
    options: [
      "C = A * B",
      "C = A @ B (or np.matmul(A, B) / np.dot(A, B))",
      "C = A.multiply(B)",
      "C = A.cross(B)"
    ],
    correctAnswer: 1,
    explanation:
      "In Python 3.5+, the '@' operator is defined as the matrix multiplication operator. In NumPy, A @ B or np.matmul(A, B) computes the matrix product.",
    deepDive:
      "A * B performs element-wise multiplication (Hadamard product), where C[i, j] = A[i, j] * B[i, j]. A @ B performs algebraic matrix multiplication (row dot column).",
    difficulty: 'intermediate',
    tags: ['Matrix Multiplication', '@ Operator', 'np.dot', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-080',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pced',
    question: 'Which method returns a flattened 1D copy of a multi-dimensional NumPy array?',
    codeSnippet: `import numpy as np

matrix = np.array([[1, 2], [3, 4]])
flat = matrix.flatten()
print(flat)  # [1, 2, 3, 4]`,
    options: [
      "matrix.collapse()",
      "matrix.flatten()",
      "matrix.to_single()",
      "matrix.linearize()"
    ],
    correctAnswer: 1,
    explanation:
      "arr.flatten() returns a copy of the array collapsed into one dimension. arr.ravel() returns a contiguous flattened view if possible.",
    deepDive:
      "flatten() always allocates new memory and returns a copy, making it safe from modifying the original array. ravel() returns a view whenever possible, saving memory.",
    difficulty: 'intermediate',
    tags: ['flatten()', 'ravel()', '1D Conversion', 'PCED-30-02']
  },

  // =========================================================================
  // CHAPTER 3.5: DESCRIPTIVE STATISTICS & EXPLORATORY DATA ANALYSIS (EDA) [Cards 81-100]
  // =========================================================================
  {
    id: 'pced-sec3-081',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'In statistics and exploratory data analysis, what are the three primary measures of central tendency?',
    codeSnippet: `data = [10, 20, 20, 30, 40, 50]
# Mean = 28.33
# Median = 25.0
# Mode = 20`,
    options: [
      "Range, Variance, Standard Deviation",
      "Mean, Median, Mode",
      "Quartiles, Deciles, Percentiles",
      "Minimum, Maximum, Count"
    ],
    correctAnswer: 1,
    explanation:
      "Central tendency describes the central or typical value of a probability distribution. The three classic measures are the Mean (average), Median (middle value), and Mode (most frequent value).",
    deepDive:
      "Measures of dispersion (Range, Variance, Standard Deviation) describe the spread of data, while measures of central tendency describe its central location.",
    difficulty: 'beginner',
    tags: ['Central Tendency', 'Mean', 'Median', 'Mode', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-082',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'How is the median calculated when a dataset contains an even number of observations?',
    codeSnippet: `sample = [12, 18, 24, 30]  # n = 4 (even)
# Middle two numbers are 18 and 24
# Median = (18 + 24) / 2 = 21.0`,
    options: [
      "Python takes the lower middle number (18)",
      "Python takes the arithmetic average (mean) of the two middle numbers: (18 + 24) / 2 = 21.0",
      "Python takes the upper middle number (24)",
      "The median cannot be determined for even sample sizes"
    ],
    correctAnswer: 1,
    explanation:
      "When sample size N is even, the median is defined as the arithmetic mean of the two central numbers at positions N/2 and (N/2) + 1 after sorting.",
    deepDive:
      "In standard Python, statistics.median([12, 18, 24, 30]) returns 21.0. statistics.median_low() returns 18, and statistics.median_high() returns 24.",
    difficulty: 'beginner',
    tags: ['Median', 'Even Sample Size', 'Descriptive Stats', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-083',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'In a right-skewed (positively skewed) distribution, what is the typical mathematical relationship between the Mean, Median, and Mode?',
    codeSnippet: `# Right-skewed distribution (e.g. salaries):
# Long tail extends towards higher values
# Relationship: Mode < Median < Mean`,
    options: [
      "Mean < Median < Mode",
      "Mode < Median < Mean",
      "Mean = Median = Mode",
      "Median < Mode < Mean"
    ],
    correctAnswer: 1,
    explanation:
      "In a right-skewed distribution, the long tail of high values pulls the mean to the right (higher). The mode remains at the peak, resulting in Mode < Median < Mean.",
    deepDive:
      "In a perfectly symmetrical normal distribution, Mean = Median = Mode. In a left-skewed (negatively skewed) distribution, the long left tail pulls the mean down: Mean < Median < Mode.",
    difficulty: 'intermediate',
    tags: ['Skewness', 'Central Tendency', 'Distribution Shapes', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-084',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'What is the statistical "Range" of a dataset and what is its primary analytical limitation?',
    codeSnippet: `values = [10, 15, 14, 18, 95]
data_range = max(values) - min(values)  # 95 - 10 = 85`,
    options: [
      "Range is the average distance from the mean; its limitation is that it cannot be negative",
      "Range is max - min; its limitation is that it relies solely on the two extreme values and is highly vulnerable to outliers",
      "Range is the count of items; its limitation is memory size",
      "Range is the sum divided by N; its limitation is rounding error"
    ],
    correctAnswer: 1,
    explanation:
      "Range = Maximum - Minimum. Because it only accounts for the two outermost extreme values, a single rogue outlier can wildly inflate the perceived spread of the data.",
    deepDive:
      "Because Range ignores all values between the min and max, analysts use more robust measures of dispersion such as the Interquartile Range (IQR) and standard deviation.",
    difficulty: 'beginner',
    tags: ['Range', 'Dispersion', 'Outliers', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-085',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'What is the Interquartile Range (IQR) and how is it calculated?',
    codeSnippet: `# Q1 = 25th percentile
# Q3 = 75th percentile
IQR = Q3 - Q1`,
    options: [
      "The difference between the maximum and minimum values",
      "The range of the middle 50% of the data: IQR = Q3 - Q1 (75th percentile minus 25th percentile)",
      "The square root of variance",
      "The ratio of the mean to the median"
    ],
    correctAnswer: 1,
    explanation:
      "IQR measures the spread of the central 50% of the data, calculated as the 3rd quartile (Q3) minus the 1st quartile (Q1).",
    deepDive:
      "Because IQR focuses strictly on the middle 50% of observations, it is completely immune to extreme values and outliers in the tails, making it the preferred measure of spread for skewed distributions.",
    difficulty: 'intermediate',
    tags: ['IQR', 'Quartiles', 'Robust Statistics', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-086',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'Under Tukey\'s standard boxplot rule, what formulas define the lower and upper outlier fences?',
    codeSnippet: `# Tukey's Fences for Outlier Detection:
lower_fence = Q1 - 1.5 * IQR
upper_fence = Q3 + 1.5 * IQR`,
    options: [
      "Lower = Mean - Std; Upper = Mean + Std",
      "Lower = Q1 - 1.5 * IQR; Upper = Q3 + 1.5 * IQR",
      "Lower = Min * 0.5; Upper = Max * 1.5",
      "Lower = Q2 - IQR; Upper = Q2 + IQR"
    ],
    correctAnswer: 1,
    explanation:
      "John Tukey's rule flags any data point below Q1 - 1.5 * IQR or above Q3 + 1.5 * IQR as a statistical outlier.",
    deepDive:
      "Points falling outside [Q1 - 1.5*IQR, Q3 + 1.5*IQR] are standard (mild) outliers. Points outside [Q1 - 3*IQR, Q3 + 3*IQR] are considered extreme outliers. This is the exact formula used to draw whiskers in boxplots.",
    difficulty: 'intermediate',
    tags: ['Tukey Fences', 'Outlier Detection', 'IQR Rule', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-087',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'Why does sample variance divide by (N - 1) instead of N (Bessel\'s correction)?',
    codeSnippet: `import statistics

# statistics.variance() divides by (N - 1) for sample data
# statistics.pvariance() divides by N for population data`,
    options: [
      "Because Python indexing starts at 0",
      "Dividing by (N - 1) corrects the downward bias when estimating population variance from a sample, producing an unbiased estimator",
      "To prevent division by zero when N = 100",
      "Because one observation is always assumed to be missing"
    ],
    correctAnswer: 1,
    explanation:
      "Sample observations tend to cluster closer to their sample mean than to the true population mean. Dividing by N underestimates variance; dividing by (N - 1) corrects this bias.",
    deepDive:
      "In the Python statistics module, variance(data) uses N - 1 (sample), while pvariance(data) uses N (population). In NumPy, np.var(data) defaults to ddof=0 (population); use np.var(data, ddof=1) for sample variance.",
    difficulty: 'intermediate',
    tags: ['Bessel Correction', 'Variance', 'Degrees of Freedom', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-088',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'What is the relationship between Variance and Standard Deviation?',
    codeSnippet: `import math

# Variance = average squared deviation
# Standard Deviation = sqrt(Variance)`,
    options: [
      "Standard deviation is the square of variance",
      "Standard deviation is the positive square root of variance, restoring measurements back to the original units of the data",
      "They are identical values with different names",
      "Variance is only used for integers; standard deviation is for floats"
    ],
    correctAnswer: 1,
    explanation:
      "Standard deviation is sqrt(Variance). While variance is expressed in squared units (e.g., dollars squared), standard deviation returns the dispersion metric back to original units (e.g., dollars).",
    deepDive:
      "Having dispersion in original units makes standard deviation directly interpretable alongside the mean: for a normal distribution, approximately 68% of observations lie within mean ± 1 std.",
    difficulty: 'beginner',
    tags: ['Standard Deviation', 'Variance', 'Descriptive Stats', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-089',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'Under the 68-95-99.7 Empirical Rule for a normal distribution, what percentage of values fall within 2 standard deviations of the mean?',
    codeSnippet: `# Empirical Rule for Normal Distribution:
# Mean ± 1 std ≈ 68.2%
# Mean ± 2 std ≈ 95.4%
# Mean ± 3 std ≈ 99.7%`,
    options: [
      "Approximately 50%",
      "Approximately 68%",
      "Approximately 95% (specifically ~95.4%)",
      "100%"
    ],
    correctAnswer: 2,
    explanation:
      "In a normal (Gaussian) distribution, ~68% of data lies within 1 standard deviation, ~95% lies within 2 standard deviations, and ~99.7% lies within 3 standard deviations.",
    deepDive:
      "This rule forms the basis for the Z-score outlier detection method: data points with |z| > 3 occur less than 0.3% of the time by random chance and are flagged as potential anomalies.",
    difficulty: 'intermediate',
    tags: ['Empirical Rule', 'Normal Distribution', 'Z-score', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-090',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'What does a Pearson correlation coefficient of r = -0.92 between advertising spend and churn rate indicate?',
    codeSnippet: `# Correlation r = -0.92
# Sign (-) = Direction (Inverse / Negative)
# Magnitude (|0.92|) = Strong relationship`,
    options: [
      "A weak positive relationship where churn increases with spend",
      "A strong negative (inverse) linear relationship, meaning higher advertising spend is strongly associated with lower churn rates",
      "That advertising spend causes churn to decrease by exactly 92%",
      "No linear association whatsoever"
    ],
    correctAnswer: 1,
    explanation:
      "The sign indicates direction (- is inverse: as X increases, Y decreases). The magnitude |r| = 0.92 indicates a very strong linear association.",
    deepDive:
      "Pearson r ranges from -1.0 (perfect negative linear correlation) to +1.0 (perfect positive linear correlation). A value of 0.0 indicates no linear correlation. Crucially, correlation does not imply causation.",
    difficulty: 'beginner',
    tags: ['Pearson r', 'Correlation', 'Direction and Strength', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-091',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'Why does "Correlation does not imply Causation" represent a critical principle for data analysts?',
    codeSnippet: `# Ice cream sales and drowning rates correlate positively (r = +0.85)
# Underlying confounding variable: Summer temperature / heat!`,
    options: [
      "Because Python correlation functions only calculate estimates",
      "Because two variables may correlate strongly due to a shared lurking (confounding) third variable, coincidence, or reverse causality, without one directly causing the other",
      "Because correlation is only valid for financial datasets",
      "Because negative correlations cannot exist in nature"
    ],
    correctAnswer: 1,
    explanation:
      "A statistical correlation between X and Y demonstrates that they move together, but cannot prove that X causes Y. A confounding factor (like sunny weather) often drives both.",
    deepDive:
      "Spurious correlation examples abound: ice cream sales correlate with drowning incidents not because ice cream causes drowning, but because high summer temperatures increase both ice cream consumption and swimming activity.",
    difficulty: 'beginner',
    tags: ['Correlation vs Causation', 'Confounding Variable', 'Analytical Thinking', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-092',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'How does Pearson correlation differ from Spearman rank correlation?',
    codeSnippet: `# Data with monotonic curve: y = x^3
# Pearson r measures LINEAR association
# Spearman rho measures MONOTONIC association using ranks`,
    options: [
      "Pearson is only for integers; Spearman is only for strings",
      "Pearson measures the strength of linear relationships between continuous variables; Spearman measures monotonic relationships based on ranked order",
      "Pearson correlation can never be negative",
      "Spearman correlation requires at least 10,000 rows"
    ],
    correctAnswer: 1,
    explanation:
      "Pearson r evaluates linear relationships and is sensitive to outliers. Spearman rank correlation evaluates monotonic relationships (whether variables increase together, regardless of linearity) by ranking data first.",
    deepDive:
      "If Y increases with X but along an exponential or curved path, Pearson r may be moderate, while Spearman rho will be close to 1.0. Spearman is also robust against extreme outliers.",
    difficulty: 'intermediate',
    tags: ['Pearson vs Spearman', 'Monotonicity', 'Correlation', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-093',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'How do you sort a list of dictionary customer records by revenue in descending order in Python?',
    codeSnippet: `customers = [
    {"name": "Alpha", "revenue": 12000},
    {"name": "Beta", "revenue": 45000},
    {"name": "Gamma", "revenue": 28000}
]

sorted_customers = sorted(
    customers,
    key=lambda c: c["revenue"],
    reverse=True
)`,
    options: [
      "customers.sort_by('revenue', order='desc')",
      "sorted(customers, key=lambda c: c['revenue'], reverse=True)",
      "sorted(customers, descending=True)",
      "customers.order(key='revenue')"
    ],
    correctAnswer: 1,
    explanation:
      "The built-in sorted() function accepts a key parameter (a callable extracting the sort comparison key) and reverse=True for descending sort.",
    deepDive:
      "Using operator.itemgetter('revenue') as the key is often even faster than a lambda: from operator import itemgetter; sorted(customers, key=itemgetter('revenue'), reverse=True).",
    difficulty: 'intermediate',
    tags: ['sorted()', 'lambda key', 'reverse=True', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-094',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'What analytical step is typically performed during the initial phase of Exploratory Data Analysis (EDA)?',
    codeSnippet: `# Initial EDA checks:
# 1. Inspect record counts and column types
# 2. Check for missing values and duplicates
# 3. Calculate five-number summary (Min, Q1, Median, Q3, Max)`,
    options: [
      "Deploying machine learning models directly into production",
      "Inspecting data types, summary statistics (mean, quantiles), missing value frequencies, and distribution shapes to understand the dataset",
      "Deleting 50% of the data to speed up processing",
      "Converting all numbers to Roman numerals"
    ],
    correctAnswer: 1,
    explanation:
      "EDA is an investigative process where analysts use summary statistics and graphical representations to discover patterns, spot anomalies, and test hypotheses.",
    deepDive:
      "John Tukey pioneered EDA to emphasize understanding data structure and verifying assumptions before imposing rigid confirmatory modeling or statistical hypothesis tests.",
    difficulty: 'beginner',
    tags: ['EDA', 'Summary Statistics', 'Analytical Workflow', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-095',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'How do you calculate the frequency distribution of categorical values using standard Python?',
    codeSnippet: `from collections import Counter

channels = ["Email", "Social", "Email", "Search", "Social", "Email"]
counts = Counter(channels)
print(counts)  # Counter({'Email': 3, 'Social': 2, 'Search': 1})`,
    options: [
      "channels.frequency()",
      "Use collections.Counter(channels) to count occurrences of each unique element",
      "channels.value_counts()",
      "set(channels).count()"
    ],
    correctAnswer: 1,
    explanation:
      "collections.Counter is a dict subclass designed specifically for counting hashable objects, mapping each distinct element to its integer frequency count.",
    deepDive:
      "Counter objects provide .most_common(n), which returns the top n most frequent elements and their counts as tuples: counts.most_common(2) -> [('Email', 3), ('Social', 2)].",
    difficulty: 'beginner',
    tags: ['Counter', 'Frequency Distribution', 'EDA', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-096',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'What is the "Five-Number Summary" used to construct box plots in exploratory data analysis?',
    codeSnippet: `# Five-Number Summary:
# [Minimum, Q1, Median, Q3, Maximum]`,
    options: [
      "Mean, Standard Deviation, Variance, Range, Count",
      "Minimum, First Quartile (Q1), Median (Q2), Third Quartile (Q3), Maximum",
      "Five random numbers selected from the dataset",
      "Top 5 largest values in the dataset"
    ],
    correctAnswer: 1,
    explanation:
      "The Five-Number Summary consists of: Minimum, Q1 (25th percentile), Median (50th percentile), Q3 (75th percentile), and Maximum.",
    deepDive:
      "This non-parametric summary provides a complete visual overview of center, spread, and skewness, completely defining the elements of a standard box-and-whisker plot.",
    difficulty: 'beginner',
    tags: ['Five-Number Summary', 'Boxplot', 'Quartiles', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-097',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'How do you group transactions by department and compute the total revenue for each group using a Python dictionary?',
    codeSnippet: `transactions = [
    {"dept": "Sales", "amount": 100},
    {"dept": "IT", "amount": 250},
    {"dept": "Sales", "amount": 150}
]

totals = {}
for t in transactions:
    dept = t["dept"]
    totals[dept] = totals.get(dept, 0) + t["amount"]
# Output: {'Sales': 250, 'IT': 250}`,
    options: [
      "totals = transactions.group_by('dept').sum()",
      "Accumulate sums using totals[dept] = totals.get(dept, 0) + t['amount'] (or using collections.defaultdict(float))",
      "totals = dict(transactions)",
      "totals = sum(transactions, by='dept')"
    ],
    correctAnswer: 1,
    explanation:
      "Using dict.get(key, 0) handles initialization for new departments on the fly, accumulating totals in a single O(N) pass.",
    deepDive:
      "Alternatively, collections.defaultdict(float) simplifies this further: totals = defaultdict(float); for t in transactions: totals[t['dept']] += t['amount'].",
    difficulty: 'intermediate',
    tags: ['Group By', 'Aggregation', 'defaultdict', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-098',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'What is Simpson\'s Paradox in data analysis?',
    codeSnippet: `# Treatment A appears better than Treatment B in both Clinic 1 and Clinic 2 individually,
# but when data from both clinics is combined, Treatment B appears better overall!`,
    options: [
      "A phenomenon where a trend appears in different groups of data but disappears or reverses when the groups are combined",
      "A bug in Python where float division rounds to infinity",
      "When standard deviation exceeds variance",
      "When a dataset contains exactly 50% missing values"
    ],
    correctAnswer: 0,
    explanation:
      "Simpson's Paradox occurs when a correlation or trend observed across distinct subgroups is reversed or eliminated when aggregated, usually caused by an unaddressed lurking or confounding variable.",
    deepDive:
      "Simpson's Paradox emphasizes why exploratory data analysis must investigate disaggregated subgroups rather than relying purely on high-level global aggregations.",
    difficulty: 'intermediate',
    tags: ["Simpson's Paradox", 'Aggregations', 'Confounding Factors', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-099',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'How do you calculate the percentage contribution of each item to the overall total?',
    codeSnippet: `sales = {"Product A": 300, "Product B": 500, "Product C": 200}
total_sales = sum(sales.values())  # 1000

pct_shares = {k: (v / total_sales) * 100 for k, v in sales.items()}
# {'Product A': 30.0, 'Product B': 50.0, 'Product C': 20.0}`,
    options: [
      "pct_shares = sales / 100",
      "Compute total = sum(sales.values()), then divide each value by total and multiply by 100 in a dictionary comprehension",
      "sales.percentage()",
      "pct_shares = [v % total_sales for v in sales]"
    ],
    correctAnswer: 1,
    explanation:
      "Divide individual values by the sum of all values and multiply by 100: (value / total) * 100. A dictionary comprehension cleanly maps names to percentage shares.",
    deepDive:
      "When presenting shares in executive reports, format with f'{share:.1f}%'. Always verify that the individual shares sum to 100% (within rounding margins).",
    difficulty: 'beginner',
    tags: ['Percentage Share', 'Aggregations', 'Dict Comprehension', 'PCED-30-02']
  },
  {
    id: 'pced-sec3-0100',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pced',
    question: 'What is the primary risk of blindly deleting statistical outliers without investigating their root cause?',
    codeSnippet: `# Sensor reads: [21.5, 22.0, 21.8, 85.0, 22.1]
# Is 85.0 a faulty sensor glitch, or a genuine critical industrial explosion warning?`,
    options: [
      "Python will raise an IndexError",
      "Outliers may represent genuine high-value real-world events, fraud attempts, or system failures; deleting them erases the most important business signals",
      "Deleting outliers changes the file extension of the dataset",
      "Outlier deletion always makes the mean equal to zero"
    ],
    correctAnswer: 1,
    explanation:
      "Outliers are not always data entry errors or noise. In credit card fraud, cybersecurity intrusion, or medical diagnosis, the outliers ARE the primary phenomenon of interest.",
    deepDive:
      "Best practice in data analytics is to document outliers, inspect whether they stem from measurement errors (e.g. human typo '999' for missing) vs genuine extreme occurrences, and analyze models both with and without outliers.",
    difficulty: 'beginner',
    tags: ['Outlier Handling', 'Data Ethics', 'Analytical Judgment', 'PCED-30-02']
  }
];
