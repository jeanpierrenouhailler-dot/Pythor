import { Flashcard } from '../types';

export const pcadSection3CardsPart1: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.1: DESCRIPTIVE STATISTICS & DISPERSION [Cards 1-20]
  // =========================================================================
  {
    id: 'pcad-sec3-001',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Central Tendency',
    topic: 'Mean vs. Median: Outlier Sensitivity',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'A software company reports salaries for 5 employees: $60k, $65k, $70k, $75k, and $1.5M (CEO). Why does the median give a more realistic measure of "typical" employee compensation than the mean?',
    codeSnippet: `import numpy as np

salaries = np.array([60, 65, 70, 75, 1500])
print(f"Mean:   \${salaries.mean():.1f}k")   # $354.0k (heavily distorted!)
print(f"Median: \${np.median(salaries):.1f}k") # $70.0k  (robust typical value)`,
    options: [
      'The mean incorporates every value and is heavily dragged upward by the extreme outlier ($1.5M); the median depends only on rank order and remains robust at the 50th percentile ($70k)',
      'The mean cannot be calculated for non-normal distributions',
      'The median represents the most frequent salary in the company',
      'The mean and median are always identical in samples larger than 3'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The mean incorporates every value and is heavily dragged upward by the extreme outlier ($1.5M); the median depends only on rank order and remains robust at the 50th percentile ($70k)',
    explanationTitle: 'Outlier Sensitivity of Mean vs. Median',
    explanationText:
      'The arithmetic mean $\mu = \frac{\sum x_i}{N}$ has a breakdown point of $0\%$—a single extreme outlier can pull the mean to infinity. The median has a breakdown point of $50\%$, making it the preferred metric of central tendency for skewed data (salaries, home prices, wealth).',
    deepDive:
      'In symmetric bell-shaped distributions, the mean and median are equal. In right-skewed distributions, Mean $>$ Median.',
    tags: ['Mean', 'Median', 'Outliers', 'Central Tendency', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-002',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Robust Statistics',
    topic: 'Trimmed Mean for Outlier-Resistant Estimation',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'How does a "10% Trimmed Mean" compute central tendency, and how is it calculated in `scipy.stats`?',
    codeSnippet: `from scipy import stats
import numpy as np

data = np.array([1, 2, 10, 11, 12, 13, 14, 15, 100, 500])
# Discard lowest 10% and highest 10% of values before averaging:
t_mean = stats.trim_mean(data, proportiontocut=0.10)
print(f"Trimmed Mean: {t_mean:.2f}")`,
    options: [
      'It sorts observations, discards the lowest 10% and highest 10% of extreme values, and computes the arithmetic mean of the remaining 80% central observations',
      'It subtracts 10 from every observation before calculating the mean',
      'It rounds the mean to 10 decimal places',
      'It computes the mean of the top 10 largest values'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It sorts observations, discards the lowest 10% and highest 10% of extreme values, and computes the arithmetic mean of the remaining 80% central observations',
    explanationTitle: 'Trimmed Mean Mechanics',
    explanationText:
      'A trimmed mean compromises between the efficiency of the mean and the robustness of the median. By discarding equal fractions from both tails (`proportiontocut=0.10` removes 10% from bottom and 10% from top), it prevents tail noise from corrupting the estimate.',
    deepDive:
      'A 50% trimmed mean (discarding 50% from each side) is mathematically identical to the sample median.',
    tags: ['Trimmed Mean', 'scipy.stats', 'Robust Statistics', 'Central Tendency', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-003',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Central Tendency',
    topic: 'Weighted Arithmetic Mean Formulation',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'When calculating the average product rating across stores with vastly different customer review volumes, why is a weighted mean mandatory?',
    codeSnippet: `import numpy as np

# Store A: 5.0 stars with 2 reviews. Store B: 4.0 stars with 1,000 reviews.
ratings = np.array([5.0, 4.0])
weights = np.array([2, 1000])

# Unweighted: (5.0 + 4.0)/2 = 4.5
# Weighted:
weighted_avg = np.average(ratings, weights=weights)
print(f"Weighted Rating: {weighted_avg:.3f}") # 4.002`,
    options: [
      'A simple unweighted mean treats a store with 2 reviews identically to a store with 1,000 reviews; the weighted mean weights each observation by its volume (sample size), reflecting true overall customer sentiment',
      'Unweighted means cannot accept floating-point numbers',
      'The weighted mean is only required if ratings are negative',
      'NumPy average crashes without weights'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A simple unweighted mean treats a store with 2 reviews identically to a store with 1,000 reviews; the weighted mean weights each observation by its volume (sample size), reflecting true overall customer sentiment',
    explanationTitle: 'Weighted Mean Formulation',
    explanationText:
      'The weighted mean formula is $\bar{x}_w = \frac{\sum w_i x_i}{\sum w_i}$. When aggregating subgroups of unequal sizes (e.g. state populations, transaction volumes, survey sample weights), the unweighted average produces severe aggregation bias.',
    deepDive:
      'Failing to weight subgroup means before calculating an overall average is a frequent cause of Simpson’s Paradox in business reporting.',
    tags: ['Weighted Mean', 'np.average', 'Aggregation Bias', 'Descriptive Stats', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-004',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Measures of Dispersion',
    topic: 'Population vs. Sample Variance & Bessel’s Correction (N - 1)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Why does sample variance divide by $(n - 1)$ (Bessel’s correction, `ddof=1`) rather than $N$?',
    codeSnippet: `import numpy as np
import pandas as pd

sample = np.array([10, 12, 14, 15, 18])

# NumPy defaults to ddof=0 (population variance):
print(np.var(sample))          # Divided by N: 7.44
# Pandas defaults to ddof=1 (sample variance):
print(pd.Series(sample).var()) # Divided by N - 1: 9.30`,
    options: [
      'Dividing by n systematically underestimates population variance because deviations are measured from the sample mean rather than the true population mean; dividing by (n - 1) provides an unbiased estimator',
      'Because one observation is always lost to corruption during data collection',
      'To make variance equal to standard deviation',
      'Bessel’s correction is only used when the sample size exceeds 1,000'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Dividing by n systematically underestimates population variance because deviations are measured from the sample mean rather than the true population mean; dividing by (n - 1) provides an unbiased estimator',
    explanationTitle: 'Bessel’s Correction and Unbiased Variance',
    explanationText:
      'The sample observations tend to be closer to their own sample mean $\bar{x}$ than to the true unknown population mean $\mu$. Using $N$ in the denominator produces a negatively biased estimate $E[s^2] < \sigma^2$. Dividing by $n - 1$ (Degrees of Freedom) corrects this bias.',
    deepDive:
      'Critical library gotcha: NumPy’s `np.var()` defaults to `ddof=0` (population), while pandas’ `Series.var()` defaults to `ddof=1` (sample). Always specify `ddof=1` in NumPy for sample statistics.',
    tags: ['Variance', 'Bessel Correction', 'ddof', 'Degrees of Freedom', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-005',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Measures of Dispersion',
    topic: 'Standard Deviation vs. Variance: Unit Interpretability',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'Why do analysts prefer Standard Deviation over Variance when communicating data dispersion to non-technical business stakeholders?',
    codeSnippet: `# House prices in dollars ($):
# Variance = $^2 (squared dollars, e.g. 2,500,000,000 $^2 - incomprehensible!)
# Standard Deviation = sqrt(Variance) = $50,000 (expressed in original currency units!)`,
    options: [
      'Standard deviation is the square root of variance, restoring the metric back to the exact same physical units as the original data (e.g. dollars or seconds), making it directly interpretable alongside the mean',
      'Standard deviation is always a positive whole integer',
      'Variance cannot be plotted on a computer screen',
      'Standard deviation is immune to outliers'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Standard deviation is the square root of variance, restoring the metric back to the exact same physical units as the original data (e.g. dollars or seconds), making it directly interpretable alongside the mean',
    explanationTitle: 'Physical Interpretability of Standard Deviation',
    explanationText:
      'Variance squares the deviations from the mean, resulting in squared units ($\text{dollars}^2$, $\text{kg}^2$, $\text{hours}^2$) that have no intuitive physical meaning. Taking the square root $s = \sqrt{s^2}$ returns the measure of spread to the original baseline unit.',
    deepDive:
      'In a normal distribution, the standard deviation allows instant application of the Empirical Rule: $\approx 68\%$ of data falls within $\pm 1s$ of the mean.',
    tags: ['Standard Deviation', 'Variance', 'Interpretability', 'Dispersion', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-006',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Measures of Dispersion',
    topic: 'Interquartile Range (IQR) vs. Range',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'Why is the Interquartile Range ($IQR = Q3 - Q1$) a superior measure of spread compared to the full Range ($\text{Max} - \text{Min}$) for real-world analytical datasets?',
    codeSnippet: `import pandas as pd

s = pd.Series([10, 12, 14, 15, 18, 20, 22, 1000]) # 1000 is an outlier
print(f"Full Range: {s.max() - s.min()}")           # 990 (distorted by outlier!)
print(f"IQR:        {s.quantile(0.75) - s.quantile(0.25)}") # 7.5 (stable core spread)`,
    options: [
      'The full range relies entirely on the two most extreme boundary observations and is catastrophically distorted by a single outlier; the IQR measures the spread of the middle 50% of data and is resistant to outliers',
      'The full range cannot be computed if minimum is negative',
      'IQR requires fewer CPU clock cycles to compute than Range',
      'Full range is only used for categorical data'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The full range relies entirely on the two most extreme boundary observations and is catastrophically distorted by a single outlier; the IQR measures the spread of the middle 50% of data and is resistant to outliers',
    explanationTitle: 'Robust Spread via Interquartile Range',
    explanationText:
      'The range uses only the sample minimum and maximum. The Interquartile Range spans from the 25th percentile ($Q1$) to the 75th percentile ($Q3$). It captures the dispersion of the central 50% of the distribution, making it the non-parametric counterpart to standard deviation.',
    deepDive:
      'IQR is the core engine behind Tukey’s boxplots, defining the height of the central box and the boundary for outlier whiskers ($1.5 \times IQR$).',
    tags: ['IQR', 'Range', 'Quantiles', 'Dispersion', 'Robust Statistics', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-007',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Quantiles',
    topic: 'Percentile Interpolation Methods in pandas (df.quantile)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'When computing `df["val"].quantile(0.50)`, how does pandas handle the median when the dataset contains an even number of observations?',
    codeSnippet: `import pandas as pd

s = pd.Series([10, 20, 30, 40])
# Default interpolation='linear':
print(s.quantile(0.5)) # 25.0 (midpoint between 20 and 30)`,
    options: [
      'By default, it uses linear interpolation (interpolation="linear") between the two surrounding data points: i + (j - i) * fraction',
      'It always rounds down to the lower integer',
      'It throws an EvenDatasetError',
      'It selects a random number between the two points'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'By default, it uses linear interpolation (interpolation="linear") between the two surrounding data points: i + (j - i) * fraction',
    explanationTitle: 'Quantile Interpolation in pandas',
    explanationText:
      'When a desired quantile falls between index positions $i$ and $j$, pandas interpolates. Options for `interpolation` include `"linear"` (default), `"lower"`, `"higher"`, `"nearest"`, and `"midpoint"`. For $[10, 20, 30, 40]$, linear interpolation at 0.5 yields $(20 + 30)/2 = 25.0$.',
    deepDive:
      'NumPy 1.22+ replaced the `interpolation` parameter with `method="linear"`, aligning with international statistical definitions (Hyndman and Fan types 1–9).',
    tags: ['quantile', 'Percentiles', 'Interpolation', 'pandas', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-008',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Relative Dispersion',
    topic: 'Coefficient of Variation (CV = sigma / mu)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'An analyst wants to compare the volatility of Stock A (mean price $10, standard deviation $2) versus Stock B (mean price $500, standard deviation $20). Why is comparing their Coefficients of Variation ($CV$) more meaningful than raw standard deviations?',
    codeSnippet: `# Stock A: mean = 10, std = 2  -> CV = 2 / 10 = 0.20 (20% relative volatility)
# Stock B: mean = 500, std = 20 -> CV = 20 / 500 = 0.04 (4% relative volatility)
# Raw std says Stock B is 10x more volatile; CV proves Stock A has 5x higher relative volatility!`,
    options: [
      'The Coefficient of Variation (CV = std / mean) is a dimensionless normalized ratio that measures relative variability per unit of mean, allowing fair comparisons across datasets with different scales or measurement units',
      'Raw standard deviations cannot be calculated for stock prices',
      'CV converts stock prices into cryptocurrency tokens',
      'CV is only valid when standard deviation is zero'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The Coefficient of Variation (CV = std / mean) is a dimensionless normalized ratio that measures relative variability per unit of mean, allowing fair comparisons across datasets with different scales or measurement units',
    explanationTitle: 'Relative Dispersion via Coefficient of Variation',
    explanationText:
      'A standard deviation of 2 on a $10 asset represents massive 20% fluctuations, whereas a standard deviation of 20 on a $500 asset represents modest 4% fluctuation. $CV = \frac{s}{\bar{x}}$ normalizes dispersion against the magnitude of the mean.',
    deepDive:
      'Warning: CV is only mathematically meaningful for ratio-scale data where zero represents a true physical absence (it is invalid for interval scales like Celsius temperature).',
    tags: ['Coefficient of Variation', 'CV', 'Relative Dispersion', 'Volatility', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-009',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Distribution Shape',
    topic: 'Skewness: Positive (Right) vs. Negative (Left) Asymmetry',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'In a positively skewed (right-skewed) distribution such as household income, which direction does the long tail extend, and how do Mean, Median, and Mode typically order?',
    codeSnippet: `import scipy.stats as stats

# Right-skewed distribution:
# Tail stretches towards positive infinity (right side).
# Mode < Median < Mean`,
    options: [
      'The long tail extends to the right (toward higher positive values); typically Mode < Median < Mean',
      'The long tail extends to the left; typically Mean < Median < Mode',
      'The distribution has two identical peaks; Mean = Mode = 0',
      'The tail extends downwards; Median is always negative'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The long tail extends to the right (toward higher positive values); typically Mode < Median < Mean',
    explanationTitle: 'Skewness Asymmetry and Central Tendency Ordering',
    explanationText:
      'Skewness measures the asymmetry of a distribution around its mean. A positive skew ($Skew > 0$) means extreme values pull the tail to the right. Because extreme high values pull the mean the furthest, the classic ordering is $\text{Mode} < \text{Median} < \text{Mean}$.',
    deepDive:
      'In pandas, `df["col"].skew()` computes Fisher-Pearson standardized third moment ($g_1$). A value between -0.5 and +0.5 indicates approximate symmetry.',
    tags: ['Skewness', 'Right-Skewed', 'Left-Skewed', 'Distribution Shape', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-010',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Distribution Shape',
    topic: 'Detecting Left-Skewed (Negatively Skewed) Distributions',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'A university exam was so easy that most students scored 95%, with only a few struggling students scoring 20% or 30%. What is the skewness of these test scores?',
    codeSnippet: `# Test scores clustered near 100, long tail dragging left towards 0:
# Mean < Median < Mode
# Skewness < 0 (Negative Skew)`,
    options: [
      'Negatively skewed (left-skewed); the long tail points to the left toward low scores, pulling the Mean below the Median',
      'Positively skewed (right-skewed); Mean > Median',
      'Perfect normal distribution with skewness of +3.0',
      'Bimodal symmetric distribution'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Negatively skewed (left-skewed); the long tail points to the left toward low scores, pulling the Mean below the Median',
    explanationTitle: 'Negative Skewness (Left-Tailed Distribution)',
    explanationText:
      'When high values cluster near an upper boundary (e.g. human age at death, easy exam scores), the tail extends to the left toward zero or negative numbers. The few low outliers pull the arithmetic mean down, resulting in $\text{Mean} < \text{Median} < \text{Mode}$.',
    deepDive:
      'Applying log transformations to negatively skewed data requires reflecting the data first: $\log(K - x)$.',
    tags: ['Negative Skew', 'Left-Skewed', 'Exam Scores', 'Distributions', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-011',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Distribution Shape',
    topic: 'Kurtosis & Heavy Tails: Leptokurtic vs. Platykurtic',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'In financial risk management, why is a "Leptokurtic" return distribution (excess kurtosis $> 0$) of extreme concern to quantitative analysts?',
    codeSnippet: `from scipy.stats import kurtosis
import numpy as np

# Excess kurtosis (Fisher definition where Normal = 0.0):
returns_kurt = kurtosis(asset_returns, fisher=True)
# If returns_kurt > 0: Leptokurtic ("fat tails", higher probability of extreme market crashes!)`,
    options: [
      'Leptokurtic distributions have "fat tails" and high peak density; extreme outlier events (market crashes) occur far more frequently than predicted by a standard Gaussian normal model',
      'Leptokurtic distributions have zero variance',
      'It means the asset is guaranteed to gain 10% value every month',
      'It indicates the stock can only be traded on Mondays'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Leptokurtic distributions have "fat tails" and high peak density; extreme outlier events (market crashes) occur far more frequently than predicted by a standard Gaussian normal model',
    explanationTitle: 'Kurtosis and Tail Risk (Fat Tails)',
    explanationText:
      'Kurtosis measures tail heaviness (the standardized fourth moment). A normal distribution has a kurtosis of 3 (or Excess Kurtosis = 0). A Leptokurtic distribution (Excess Kurtosis $> 0$) features fat tails, meaning "black swan" tail risk is elevated. Platykurtic ($< 0$) indicates thin tails (e.g. uniform distribution).',
    deepDive:
      'Pandas and SciPy compute Fisher’s excess kurtosis where Normal = 0 by default. Pearson kurtosis includes the +3 offset.',
    tags: ['Kurtosis', 'Leptokurtic', 'Fat Tails', 'Risk Management', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-012',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Descriptive Statistics',
    topic: 'Tukey’s Five-Number Summary and Boxplots',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'Which five statistical measures constitute Tukey’s "Five-Number Summary" displayed visually on a standard box-and-whisker plot?',
    codeSnippet: `# Visualized by Boxplot:
# 1. Minimum (excluding outliers)
# 2. First Quartile (Q1, 25th percentile)
# 3. Median (Q2, 50th percentile)
# 4. Third Quartile (Q3, 75th percentile)
# 5. Maximum (excluding outliers)`,
    options: [
      'Minimum, First Quartile (Q1), Median (Q2), Third Quartile (Q3), and Maximum',
      'Mean, Median, Mode, Variance, and Standard Deviation',
      'Count, Sum, Mean, Min, and Max',
      'Z-score, p-value, Alpha, Beta, and Power'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Minimum, First Quartile (Q1), Median (Q2), Third Quartile (Q3), and Maximum',
    explanationTitle: 'The Five-Number Summary',
    explanationText:
      'Introduced by John Tukey, the Five-Number Summary provides a non-parametric overview of location, spread, and skewness. The box spans from $Q1$ to $Q3$ with a center line at the Median. Whiskers extend to the most extreme non-outlier data points within $1.5 \times IQR$.',
    deepDive:
      'Points plotted beyond the whisker tips are identified as outliers and displayed as individual dots or asterisks.',
    tags: ['Five-Number Summary', 'Boxplot', 'Tukey', 'Quartiles', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-013',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Bivariate Analysis',
    topic: 'Covariance: Direction vs. Scale Sensitivity',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Why is Covariance alone insufficient to determine the strength of the linear relationship between two variables $X$ and $Y$?',
    codeSnippet: `import numpy as np

x_meters = np.array([1, 2, 3, 4, 5])
y_dollars = np.array([10, 20, 30, 40, 50])
cov_m = np.cov(x_meters, y_dollars)[0, 1] # Covariance = 25.0

# Change units from meters to millimeters:
x_mm = x_meters * 1000
cov_mm = np.cov(x_mm, y_dollars)[0, 1]    # Covariance = 25,000.0!
# The strength of the relationship did NOT change, but covariance exploded 1,000x!`,
    options: [
      'Covariance indicates only the direction (positive or negative) of the relationship; its numerical magnitude is scale-dependent and changes arbitrarily when measurement units change (e.g. meters to millimeters)',
      'Covariance cannot handle negative numbers',
      'Covariance is only valid for non-linear relationships',
      'Covariance can never exceed 1.0'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Covariance indicates only the direction (positive or negative) of the relationship; its numerical magnitude is scale-dependent and changes arbitrarily when measurement units change (e.g. meters to millimeters)',
    explanationTitle: 'Covariance Scale-Dependence',
    explanationText:
      'Covariance $Cov(X, Y) = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{n - 1}$ has units equal to the product of the units of $X$ and $Y$ (e.g. $\text{meter} \cdot \text{dollars}$). Because it is unbounded, a covariance of $+25,000$ does not imply a stronger relationship than a covariance of $+0.25$.',
    deepDive:
      'To make covariance scale-independent, we standardize it by dividing by the product of both standard deviations, yielding the Pearson correlation coefficient.',
    tags: ['Covariance', 'Scale Dependence', 'Bivariate', 'Correlation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-014',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Bivariate Analysis',
    topic: 'Pearson Correlation Coefficient (r) & Linearity Assumption',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'What does a Pearson correlation coefficient of $r = 0$ signify between two continuous variables $X$ and $Y$?',
    codeSnippet: `import numpy as np

x = np.linspace(-10, 10, 100)
y = x ** 2 # Perfect parabolic relationship!
r = np.corrcoef(x, y)[0, 1]
print(f"Pearson r: {r:.4f}") # r ≈ 0.0000!`,
    options: [
      'There is no LINEAR relationship between X and Y; however, there could still be a strong or perfect non-linear (curvilinear) relationship between them',
      'X and Y are completely statistically independent under all circumstances',
      'X and Y are identical variables',
      'The data was entered backwards'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'There is no LINEAR relationship between X and Y; however, there could still be a strong or perfect non-linear (curvilinear) relationship between them',
    explanationTitle: 'Pearson r and Non-Linear Relationships',
    explanationText:
      'Pearson $r$ strictly measures linear association bounded in $[-1.0, +1.0]$. A perfect parabola $y = x^2$ symmetric around zero yields $r = 0$ because positive slopes cancel negative slopes, despite $Y$ being 100% predictable from $X$. Always visualize bivariate data with scatter plots.',
    deepDive:
      'Anscombe’s Quartet famously demonstrated four distinct datasets with identical Pearson correlation ($r = 0.816$) that looked completely different when plotted.',
    tags: ['Pearson r', 'Correlation', 'Linearity', 'Bivariate', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-015',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Non-Parametric Correlation',
    topic: 'Spearman’s Rank Correlation (rho) for Monotonic Relationships',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'When should an analyst use Spearman’s Rank Correlation ($\rho$) instead of Pearson’s Correlation ($r$)?',
    codeSnippet: `import scipy.stats as stats

# Non-linear monotonic relationship: y = exp(x) with outliers
# Pearson r = 0.72 (penalized by non-linearity)
# Spearman rho = 1.00 (perfect monotonic ranking!)
rho, p_val = stats.spearmanr(x, y)`,
    options: [
      'When the relationship between variables is monotonic but non-linear, when data is ordinal, or when continuous data contains severe outliers that violate normality assumptions',
      'When both variables are nominal categories with no natural ordering',
      'Only when the sample size is less than 5',
      'Spearman correlation is only used for time-series stock data'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'When the relationship between variables is monotonic but non-linear, when data is ordinal, or when continuous data contains severe outliers that violate normality assumptions',
    explanationTitle: 'Spearman Rank Correlation Mechanics',
    explanationText:
      'Spearman’s $\rho$ converts raw continuous values into integer ranks ($1, 2, \dots, n$) and computes the Pearson correlation on those ranks. Because it evaluates monotonic rank preservation rather than linear distance, it is unaffected by extreme outliers or exponential curves.',
    deepDive:
      'In pandas, calculate rank correlation directly via `df.corr(method="spearman")`.',
    tags: ['Spearman rho', 'Rank Correlation', 'Monotonicity', 'Non-Parametric', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-016',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Non-Parametric Correlation',
    topic: 'Kendall’s Tau (tau): Concordant and Discordant Pairs',
    category: 'Statistical Analysis',
    difficulty: 'advanced',
    question: 'How does Kendall’s Tau ($\tau$) quantify association between two ranked ordinal variables?',
    codeSnippet: `import scipy.stats as stats

# Evaluate ranking agreement:
tau, p_val = stats.kendalltau(evaluator_1_ranks, evaluator_2_ranks)`,
    options: [
      'By comparing the number of concordant pairs (where relative ranks agree) versus discordant pairs (where relative ranks disagree): tau = (Concordant - Discordant) / Total Pairs',
      'By taking the ratio of standard deviations',
      'By computing a regression line slope',
      'By calculating the Euclidean distance between matrices'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'By comparing the number of concordant pairs (where relative ranks agree) versus discordant pairs (where relative ranks disagree): tau = (Concordant - Discordant) / Total Pairs',
    explanationTitle: 'Concordance in Kendall’s Tau',
    explanationText:
      'A pair $(x_i, y_i)$ and $(x_j, y_j)$ is concordant if both $x_i > x_j$ and $y_i > y_j$ (or both smaller). It is discordant if the directions differ. Kendall’s $\tau$ is preferred over Spearman’s $\rho$ for small sample sizes with many tied ranks because its sampling distribution approaches normality faster.',
    deepDive:
      'Calculate in pandas with `df.corr(method="kendall")`.',
    tags: ['Kendall tau', 'Concordant Pairs', 'Rank Correlation', 'Ordinal Data', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-017',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Statistical Paradoxes',
    topic: 'Simpson’s Paradox & Confounding Variables',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'What is "Simpson’s Paradox", and what causes a statistical trend observed across multiple separate subgroups to completely reverse when the data is aggregated?',
    codeSnippet: `# Classic UC Berkeley 1973 Admissions Case:
# Subgroup A (Dept Eng): Men 60% admitted, Women 70% admitted (Women favored!)
# Subgroup B (Dept Arts): Men 20% admitted, Women 25% admitted (Women favored!)
# Aggregated: Total Men 44% admitted, Total Women 35% admitted (Men appear favored!)
# Cause: Women applied disproportionately to highly competitive departments with low acceptance rates!`,
    options: [
      'A statistical phenomenon where a trend appears in different groups of data but disappears or reverses when these groups are combined, caused by a hidden lurking or confounding variable',
      'A software bug in Python’s float arithmetic',
      'When sample size is so large that p-values become meaningless',
      'When two variables have a correlation of exactly -1.0'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A statistical phenomenon where a trend appears in different groups of data but disappears or reverses when these groups are combined, caused by a hidden lurking or confounding variable',
    explanationTitle: 'Simpson’s Paradox Mechanics',
    explanationText:
      'Simpson’s Paradox occurs when an unobserved or ignored confounding variable (e.g. department difficulty, patient severity) correlates with both the independent predictor and the dependent outcome. Stratifying data across the confounder reveals the true causal relationships.',
    deepDive:
      'Always investigate subgroup distributions before drawing sweeping business conclusions from aggregated enterprise dashboards.',
    tags: ['Simpson Paradox', 'Confounding Variables', 'Aggregation Bias', 'Causality', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-018',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Pandas Diagnostics',
    topic: 'Comprehensive Summaries with DataFrame.describe()',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'How do you force `df.describe()` to include summary statistics for categorical and string columns in addition to numeric columns?',
    codeSnippet: `import pandas as pd

# Summarize ALL columns including strings/categories:
summary = df.describe(include='all')
# Shows: count, unique, top, freq for strings
# Shows: count, mean, std, min, 25%, 50%, 75%, max for numbers`,
    options: [
      'Pass include="all" (or include=[object, category, number]) to df.describe()',
      'Call df.describe_all()',
      'Set pd.options.display.all_columns = True',
      'Pass categorical=True'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Pass include="all" (or include=[object, category, number]) to df.describe()',
    explanationTitle: 'Full Schema Diagnostics with describe(include="all")',
    explanationText:
      'By default, `df.describe()` analyzes only numeric columns. Passing `include="all"` generates a unified summary table, populating `unique` (distinct value count), `top` (the mode / most frequent value), and `freq` (frequency of the mode) for non-numeric columns.',
    deepDive:
      'Custom percentiles can be requested: `df.describe(percentiles=[0.01, 0.05, 0.95, 0.99])`.',
    tags: ['pandas', 'describe', 'Summary Statistics', 'include=all', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-019',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Specialized Means',
    topic: 'Geometric Mean vs. Harmonic Mean for Rates and Ratios',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Why must financial portfolio compound annual growth rates (CAGR) be calculated using the Geometric Mean, and vehicle travel speeds over fixed distances using the Harmonic Mean?',
    codeSnippet: `from scipy.stats import gmean, hmean

# Investment: +100% year 1 (factor 2.0), -50% year 2 (factor 0.5)
# Wealth: $100 -> $200 -> $100 (0% true net return)
# Arithmetic mean of factors: (2.0 + 0.5)/2 = 1.25 (+25% false return!)
# Geometric mean: sqrt(2.0 * 0.5) = 1.00 (0% true compound return!)`,
    options: [
      'Arithmetic mean is for additive processes; Geometric mean is for multiplicative compounding processes (growth rates/investment returns); Harmonic mean is for rates over fixed distances (km/h, price/earnings ratios)',
      'Because geometric mean only works on triangles',
      'Harmonic mean is exclusively used in musical acoustic analysis',
      'All three means produce identical answers in Python'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Arithmetic mean is for additive processes; Geometric mean is for multiplicative compounding processes (growth rates/investment returns); Harmonic mean is for rates over fixed distances (km/h, price/earnings ratios)',
    explanationTitle: 'Pythagorean Means: Geometric and Harmonic',
    explanationText:
      'The Pythagorean inequality states: $\text{Harmonic Mean} \le \text{Geometric Mean} \le \text{Arithmetic Mean}$. Arithmetic mean inflates multiplicative compound returns. For rates with identical numerators (traveling 100km at 60km/h and 100km at 40km/h), harmonic mean $2 / (\frac{1}{60} + \frac{1}{40}) = 48\text{ km/h}$ gives the true average speed.',
    deepDive:
      'In machine learning, the F1-Score is the Harmonic Mean of Precision and Recall.',
    tags: ['Geometric Mean', 'Harmonic Mean', 'Rates', 'CAGR', 'scipy.stats', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-020',
    section: 'Section 3',
    chapter: '3.1',
    track: 'pcad',
    cardType: 'Measures of Dispersion',
    topic: 'Median Absolute Deviation (MAD) for Robust Dispersion',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'What is the Median Absolute Deviation (MAD), and why is it preferred over Standard Deviation in robust statistics?',
    codeSnippet: `from scipy import stats
import numpy as np

data = np.array([10, 12, 14, 15, 16, 18, 1000]) # 1000 is an outlier
# Compute MAD:
mad = stats.median_abs_deviation(data)
print(f"MAD: {mad}") # 3.0 (completely unaffected by 1000!)`,
    options: [
      'MAD is the median of the absolute deviations from the data’s median; it has a 50% breakdown point, making it completely resistant to extreme outliers that inflate standard deviation',
      'MAD is the maximum absolute difference between min and max',
      'MAD is another name for variance',
      'MAD requires fitting a neural network'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'MAD is the median of the absolute deviations from the data’s median; it has a 50% breakdown point, making it completely resistant to extreme outliers that inflate standard deviation',
    explanationTitle: 'Robust Dispersion with Median Absolute Deviation',
    explanationText:
      '$\text{MAD} = \text{median}(|x_i - \text{median}(X)|)$. Just as the median replaces the mean for robust central tendency, MAD replaces standard deviation for robust dispersion. For normal distributions, multiplying MAD by $1.4826$ estimates the standard deviation $\sigma$ without outlier distortion.',
    deepDive:
      'SciPy provides `scipy.stats.median_abs_deviation(data, scale="normal")` which includes the $1.4826$ scaling factor automatically.',
    tags: ['MAD', 'Median Absolute Deviation', 'Robust Statistics', 'scipy.stats', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 3.2: PROBABILITY & THEORETICAL DISTRIBUTIONS [Cards 21-35]
  // =========================================================================
  {
    id: 'pcad-sec3-021',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Probability Theory',
    topic: 'Kolmogorov Axioms of Probability',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'What are the three fundamental Kolmogorov axioms that govern all mathematical probability calculations?',
    codeSnippet: `# Kolmogorov Axioms:
# 1. Non-negativity: P(E) >= 0 for any event E
# 2. Unitarity: P(S) = 1 (Sample space S has probability 1)
# 3. Countable Additivity: P(A U B) = P(A) + P(B) for mutually exclusive events`,
    options: [
      '1. Non-negativity (P(E) >= 0); 2. Unitarity (P(Sample Space) = 1.0); 3. Countable Additivity (P(A union B) = P(A) + P(B) for mutually exclusive events)',
      '1. All probabilities must be 0.5; 2. Sum must equal 100; 3. Normal distribution required',
      '1. p-value < 0.05; 2. Sample size > 30; 3. Independence',
      'Probabilities must be integers between 1 and 10'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '1. Non-negativity (P(E) >= 0); 2. Unitarity (P(Sample Space) = 1.0); 3. Countable Additivity (P(A union B) = P(A) + P(B) for mutually exclusive events)',
    explanationTitle: 'The Kolmogorov Axioms of Probability',
    explanationText:
      'Published by Andrey Kolmogorov in 1933, these three axioms form the axiomatic foundation of modern probability theory. All derivative theorems (complement rule $P(A^c) = 1 - P(A)$, conditional probability, Bayes\' theorem) derive logically from these three principles.',
    deepDive:
      'Because of Axioms 1 and 2, any calculated probability outside $[0.0, 1.0]$ indicates a mathematical error.',
    tags: ['Probability', 'Kolmogorov', 'Axioms', 'Foundations', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-022',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Probability Theory',
    topic: 'Independent Events & The Multiplication Rule',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'If Event A (server cluster 1 failing, $P(A) = 0.01$) and Event B (server cluster 2 failing, $P(B) = 0.02$) are statistically independent, what is the joint probability that BOTH servers fail simultaneously?',
    codeSnippet: `# Independent Multiplication Rule:
# P(A and B) = P(A) * P(B)
p_joint = 0.01 * 0.02
print(f"P(Both Fail): {p_joint:.4f}") # 0.0002 (0.02%)`,
    options: [
      'P(A and B) = P(A) * P(B) = 0.01 * 0.02 = 0.0002 (0.02%)',
      'P(A and B) = P(A) + P(B) = 0.03',
      'P(A and B) = 0.01 / 0.02 = 0.5',
      'P(A and B) = 0.02 - 0.01 = 0.01'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'P(A and B) = P(A) * P(B) = 0.01 * 0.02 = 0.0002 (0.02%)',
    explanationTitle: 'Multiplication Rule for Independent Events',
    explanationText:
      'Two events $A$ and $B$ are statistically independent if and only if $P(A \cap B) = P(A) \cdot P(B)$. Occurrence of Event A conveys zero information about the probability of Event B ($P(A|B) = P(A)$).',
    deepDive:
      'If events are dependent, the generalized multiplication rule must be used: $P(A \cap B) = P(A) \cdot P(B|A)$.',
    tags: ['Probability', 'Independence', 'Multiplication Rule', 'Reliability', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-023',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Probability Theory',
    topic: 'Mutually Exclusive Events & The Addition Rule',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'How does the general Addition Rule $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ simplify when events A and B are mutually exclusive (disjoint)?',
    codeSnippet: `# Mutually exclusive: Rolling a 2 OR rolling a 5 on a single 6-sided die.
# You cannot roll both simultaneously: P(2 and 5) = 0!
# P(2 or 5) = P(2) + P(5) = 1/6 + 1/6 = 2/6 = 1/3`,
    options: [
      'Because mutually exclusive events cannot occur simultaneously, their intersection P(A and B) = 0, so the formula simplifies to P(A or B) = P(A) + P(B)',
      'The formula simplifies to P(A) * P(B)',
      'The probability becomes 1.0 automatically',
      'Mutually exclusive events cannot be added'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Because mutually exclusive events cannot occur simultaneously, their intersection P(A and B) = 0, so the formula simplifies to P(A or B) = P(A) + P(B)',
    explanationTitle: 'Addition Rule for Mutually Exclusive Events',
    explanationText:
      'Mutually exclusive events have an empty intersection ($A \cap B = \emptyset$). When events are NOT mutually exclusive (e.g. drawing an Ace OR drawing a Heart), the intersection must be subtracted to prevent double-counting the Ace of Hearts.',
    deepDive:
      'Common confusion: Mutually exclusive events with non-zero probabilities can NEVER be independent, because knowing A occurred guarantees B did not occur ($P(B|A) = 0 \ne P(B)$).',
    tags: ['Addition Rule', 'Mutually Exclusive', 'Disjoint', 'Probability', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-024',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Conditional Probability',
    topic: 'Conditional Probability Formula: P(A|B)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'In e-commerce conversion analytics, what is the probability that a visitor completes a purchase ($A$) given that they added an item to cart ($B$)?',
    codeSnippet: `# Overall conversion metrics:
# P(Add to Cart) = P(B) = 0.20
# P(Add to Cart AND Purchase) = P(A and B) = 0.08
# Conditional: P(Purchase | Added to Cart) = P(A and B) / P(B)
p_conv_given_cart = 0.08 / 0.20
print(f"Conversion rate given cart: {p_conv_given_cart:.1%}") # 40.0%`,
    options: [
      'P(A|B) = P(A and B) / P(B) = 0.08 / 0.20 = 40.0%',
      'P(A|B) = P(A and B) * P(B) = 0.016',
      'P(A|B) = P(B) - P(A) = 0.12',
      'P(A|B) = P(A) / P(B)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'P(A|B) = P(A and B) / P(B) = 0.08 / 0.20 = 40.0%',
    explanationTitle: 'Conditional Probability Definition',
    explanationText:
      'Conditional probability $P(A|B)$ measures the probability of event $A$ occurring given the premise that condition $B$ has already occurred. It restricts the universal sample space $S$ down strictly to subset $B$.',
    deepDive:
      'Conditioning updates belief. If $P(A|B) > P(A)$, event $B$ positively associates with event $A$ (adding to cart significantly boosts purchase probability).',
    tags: ['Conditional Probability', 'Conversion Funnels', 'Analytics', 'Formulas', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-025',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Bayesian Probability',
    topic: 'Bayes’ Theorem: Prior, Likelihood, and Posterior',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'A rare disease affects 0.1% of people ($P(D) = 0.001$). A diagnostic test has 99% accuracy ($P(+|D) = 0.99$) with a 5% false positive rate ($P(+|\neg D) = 0.05$). If a patient tests positive, what is the Bayesian posterior probability that they actually have the disease?',
    codeSnippet: `# Bayes' Theorem: P(D|+) = [P(+|D) * P(D)] / P(+)
# P(+) = P(+|D)*P(D) + P(+|~D)*P(~D)
p_pos = (0.99 * 0.001) + (0.05 * 0.999) # 0.00099 + 0.04995 = 0.05094
p_d_given_pos = (0.99 * 0.001) / p_pos
print(f"Actual Disease Probability: {p_d_given_pos:.1%}") # ~1.94%!`,
    options: [
      'Approximately 1.94%; because the disease is extremely rare (low prior), the sheer volume of false positives from the 99.9% healthy population vastly outweighs true positives',
      '99.0% because the test accuracy is 99%',
      '50.0% like a coin flip',
      '0.001%'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Approximately 1.94%; because the disease is extremely rare (low prior), the sheer volume of false positives from the 99.9% healthy population vastly outweighs true positives',
    explanationTitle: 'Bayes’ Theorem and the Base Rate Fallacy',
    explanationText:
      'Bayes\' Theorem $P(A|B) = \frac{P(B|A)P(A)}{P(B)}$ demonstrates the "Base Rate Fallacy". Ignoring the prior probability leads people to assume a 99% accurate test implies a 99% chance of disease. Out of 100,000 people: 100 have the disease (99 test positive), while 99,900 are healthy ($\approx 4,995$ test positive). Positive test accuracy is $99 / (99 + 4995) \approx 1.94\%$.',
    deepDive:
      'This principle is why automated spam filters, cyber fraud detection, and cancer screenings require multi-stage verification before taking drastic action.',
    tags: ['Bayes Theorem', 'Base Rate Fallacy', 'Prior', 'Posterior', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-026',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Probability Theory',
    topic: 'Law of Total Probability',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'How does the Law of Total Probability compute the marginal probability $P(B)$ when a sample space is partitioned into mutually exclusive and exhaustive scenarios $A_1, A_2, \dots, A_k$?',
    codeSnippet: `# P(B) = P(B|A1)P(A1) + P(B|A2)P(A2) + ... + P(B|Ak)P(Ak)
# Example: Defect rate across 3 factories producing 50%, 30%, 20% of parts:
p_defect = (0.01 * 0.50) + (0.02 * 0.30) + (0.05 * 0.20)
print(f"Overall Defect Rate: {p_defect:.1%}") # 2.1%`,
    options: [
      'It computes the weighted sum of the conditional probabilities across all partitioned sub-scenarios: P(B) = sum(P(B|Ai) * P(Ai))',
      'It multiplies all scenario probabilities together',
      'It selects the maximum probability among the scenarios',
      'It divides the total by k'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It computes the weighted sum of the conditional probabilities across all partitioned sub-scenarios: P(B) = sum(P(B|Ai) * P(Ai))',
    explanationTitle: 'The Law of Total Probability',
    explanationText:
      'The Law of Total Probability decomposes a complex event into disjoint slices. It serves as the mathematical denominator (the marginal likelihood / normalizing constant) in Bayes’ Theorem: $P(B) = \sum_{i} P(B|A_i)P(A_i)$.',
    deepDive:
      'The partition $A_i$ must be mutually exclusive ($A_i \cap A_j = \emptyset$) and collectively exhaustive ($\bigcup A_i = S$).',
    tags: ['Law of Total Probability', 'Marginal Probability', 'Partitioning', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-027',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Random Variables',
    topic: 'PMF vs. PDF vs. CDF',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Why does the Probability Density Function (PDF) $f(x)$ for a continuous random variable NOT represent the probability of an exact point $P(X = x)$?',
    codeSnippet: `# Continuous random variable (e.g. exact height in cm):
# P(Height = exactly 175.0000000000... cm) = 0.000!
# Probabilities exist only over intervals (Area under the PDF curve):
# P(a <= X <= b) = Integral from a to b of f(x) dx`,
    options: [
      'For continuous variables, the probability of any single exact real number is mathematically 0; the PDF represents relative density, and probability is the area under the curve over an interval (or evaluated via the CDF)',
      'Because continuous distributions cannot be evaluated with calculus',
      'The PDF only works for integer counts',
      'Because computers experience floating-point underflow'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'For continuous variables, the probability of any single exact real number is mathematically 0; the PDF represents relative density, and probability is the area under the curve over an interval (or evaluated via the CDF)',
    explanationTitle: 'PMF vs. PDF vs. CDF Functions',
    explanationText:
      'Discrete variables use a Probability Mass Function (PMF) where $P(X=x) = p(x)$. Continuous variables use a Probability Density Function (PDF) where point probabilities are 0. The Cumulative Distribution Function (CDF) $F(x) = P(X \le x)$ applies to both, giving the probability that $X$ falls below $x$.',
    deepDive:
      'PDF values $f(x)$ can exceed 1.0 (e.g. Uniform distribution on $[0, 0.5]$ has height 2.0), but the total integral under the entire PDF must equal 1.0.',
    tags: ['PMF', 'PDF', 'CDF', 'Continuous Variables', 'Probability Density', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-028',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Random Variables',
    topic: 'Expected Value E[X] and Variance Var(X)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'What is the Expected Value $E[X]$ of a discrete random variable with values $x_i$ and probabilities $p_i$, and how is its Variance calculated?',
    codeSnippet: `# Expected Value: E[X] = sum(x_i * p_i)
# Variance: Var(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2
# Fair 6-sided die:
# E[X] = (1+2+3+4+5+6)/6 = 3.5`,
    options: [
      'E[X] is the probability-weighted sum: sum(x_i * p_i); Variance is Var(X) = E[X^2] - (E[X])^2',
      'E[X] is the simple unweighted average of values; Variance is the square of E[X]',
      'E[X] is the median value; Variance is the range',
      'E[X] is always 1.0'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'E[X] is the probability-weighted sum: sum(x_i * p_i); Variance is Var(X) = E[X^2] - (E[X])^2',
    explanationTitle: 'Moments of a Random Variable: Expectation & Variance',
    explanationText:
      'Expected value is the first moment (center of mass). The algebraic shortcut for variance $\text{Var}(X) = E[X^2] - (E[X])^2$ simplifies computational calculation by avoiding subtraction of the mean on every step.',
    deepDive:
      'Expectation is linear: $E[aX + b] = aE[X] + b$. However, variance scales quadratically: $\text{Var}(aX + b) = a^2 \text{Var}(X)$.',
    tags: ['Expected Value', 'Variance', 'Random Variables', 'Expectation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-029',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Discrete Distributions',
    topic: 'Bernoulli Distribution: Single Binary Experiment',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'What are the Mean and Variance of a Bernoulli random variable with success probability $p$?',
    codeSnippet: `from scipy.stats import bernoulli

# Conversion tracking: p = 0.20 (20% conversion probability)
rv = bernoulli(p=0.20)
print(f"Mean:     {rv.mean():.2f}") # p = 0.20
print(f"Variance: {rv.var():.2f}")  # p*(1-p) = 0.20 * 0.80 = 0.16`,
    options: [
      'Mean = p, Variance = p * (1 - p)',
      'Mean = 1 / p, Variance = p^2',
      'Mean = n * p, Variance = n * p * (1 - p)',
      'Mean = 0.5, Variance = 0.25'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Mean = p, Variance = p * (1 - p)',
    explanationTitle: 'Bernoulli Distribution Parameters',
    explanationText:
      'A Bernoulli distribution models a single binary trial ($X \in \{0, 1\}$). The expected value is $E[X] = 1 \cdot p + 0 \cdot (1-p) = p$. The variance is maximized when $p = 0.5$ ($\text{Var} = 0.25$), and drops to 0 when outcomes are deterministic ($p=0$ or $p=1$).',
    deepDive:
      'Summing $n$ independent, identically distributed Bernoulli trials yields the Binomial distribution.',
    tags: ['Bernoulli', 'Binary Trials', 'Mean', 'Variance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-030',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Discrete Distributions',
    topic: 'Binomial Distribution: n Independent Trials',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'If an e-commerce checkout page has a conversion rate of $p = 0.10$, how do you compute the probability of getting EXACTLY 3 conversions from the next 20 visitors using `scipy.stats.binom`?',
    codeSnippet: `from scipy.stats import binom

n = 20   # Number of independent trials
p = 0.10 # Probability of success per trial
k = 3    # Target number of successes

# PMF: P(X = 3) = (20 choose 3) * (0.1)^3 * (0.9)^17
prob_exact_3 = binom.pmf(k=3, n=20, p=0.10)
print(f"P(Exactly 3): {prob_exact_3:.4f}") # 0.1901 (19.01%)`,
    options: [
      'binom.pmf(k=3, n=20, p=0.10) calculates the exact probability using the Binomial PMF formula',
      'binom.cdf(k=3, n=20, p=0.10)',
      'binom.pdf(3, 20, 0.10)',
      'binom.mean(3, 20)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'binom.pmf(k=3, n=20, p=0.10) calculates the exact probability using the Binomial PMF formula',
    explanationTitle: 'Binomial Probability Mass Function (binom.pmf)',
    explanationText:
      'The Binomial PMF is $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$. Use `.pmf()` for the exact point probability $P(X = k)$, and `.cdf()` for cumulative probability $P(X \le k)$ (e.g. at most 3 conversions).',
    deepDive:
      'The mean of a Binomial distribution is $\mu = np$, and the variance is $\sigma^2 = np(1-p)$.',
    tags: ['Binomial', 'scipy.stats', 'binom.pmf', 'Discrete Distributions', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-031',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Discrete Distributions',
    topic: 'Poisson Distribution: Arrival Rates in Fixed Intervals',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'A website receives an average of $\lambda = 5$ support tickets per hour. What distribution models the probability of receiving $k$ tickets in a given hour, and what is unique about its variance?',
    codeSnippet: `from scipy.stats import poisson

# Average rate lambda = 5
rv = poisson(mu=5)
print(f"Mean:     {rv.mean()}") # 5.0
print(f"Variance: {rv.var()}")  # 5.0 (Mean equals Variance!)

# P(Exactly 8 tickets):
print(f"P(k=8): {rv.pmf(8):.4f}") # 0.0653`,
    options: [
      'The Poisson distribution; its unique mathematical property is that its Variance equals its Mean (Var(X) = E[X] = lambda)',
      'The Normal distribution; variance is always 0',
      'The Uniform distribution; variance equals lambda squared',
      'The Exponential distribution; variance equals 1 / lambda'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The Poisson distribution; its unique mathematical property is that its Variance equals its Mean (Var(X) = E[X] = lambda)',
    explanationTitle: 'Poisson Equidispersion Property',
    explanationText:
      'The Poisson distribution models event counts occurring independently at a constant average rate $\lambda$ in a fixed interval of time or space. The PMF is $P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}$. Because $E[X] = \text{Var}(X) = \lambda$, this is termed "equidispersion".',
    deepDive:
      'In real data, when sample variance significantly exceeds the mean ($\text{Var} > \text{Mean}$), data exhibits "overdispersion", requiring a Negative Binomial model instead.',
    tags: ['Poisson', 'Arrival Rates', 'Equidispersion', 'scipy.stats', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-032',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Discrete Distributions',
    topic: 'Geometric Distribution: Trials Until First Success',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'A cold-caller has a 5% success rate per call ($p = 0.05$). Which distribution models the number of calls needed until they achieve their very first sale?',
    codeSnippet: `from scipy.stats import geom

# Probability of first success on the 10th call:
p_first_on_10 = geom.pmf(k=10, p=0.05)
# Expected number of calls until first success: 1 / p = 1 / 0.05 = 20 calls!`,
    options: [
      'The Geometric distribution; the expected number of trials until the first success is 1 / p',
      'The Binomial distribution with n = 100',
      'The Hypergeometric distribution',
      'The Student\'s t-distribution'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The Geometric distribution; the expected number of trials until the first success is 1 / p',
    explanationTitle: 'Geometric Distribution: First Success',
    explanationText:
      'The Geometric distribution models the number of Bernoulli trials $k$ required to achieve the first success: $P(X = k) = (1-p)^{k-1} p$. The expected value is $E[X] = \frac{1}{p}$. Like the continuous Exponential distribution, the Geometric distribution is memoryless.',
    deepDive:
      'Memoryless property: having failed 15 times already does not change the probability that you will need $k$ more calls to get a sale.',
    tags: ['Geometric Distribution', 'First Success', 'Memoryless', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-033',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Continuous Distributions',
    topic: 'Continuous Uniform Distribution',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'A randomized test split allocates traffic uniformly between 0.0 and 1.0 ($U(0, 1)$). What is the probability that an incoming request receives a hash value between 0.20 and 0.50?',
    codeSnippet: `from scipy.stats import uniform

# Uniform on interval [a, a + scale] -> [0.0, 1.0]:
rv = uniform(loc=0.0, scale=1.0)
# Probability P(0.20 <= X <= 0.50) = CDF(0.50) - CDF(0.20)
prob = rv.cdf(0.50) - rv.cdf(0.20)
print(f"Probability: {prob:.2f}") # 0.30`,
    options: [
      '0.30 (the length of the sub-interval divided by the total interval length: (0.50 - 0.20) / (1.0 - 0.0) = 0.30)',
      '0.50',
      '0.10',
      '0.25'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '0.30 (the length of the sub-interval divided by the total interval length: (0.50 - 0.20) / (1.0 - 0.0) = 0.30)',
    explanationTitle: 'Uniform Distribution Probability Calculations',
    explanationText:
      'For a Continuous Uniform distribution on $[a, b]$, probability density is flat: $f(x) = \frac{1}{b - a}$. The probability of falling in any sub-interval $[c, d]$ is simply its proportional length: $\frac{d - c}{b - a}$.',
    deepDive:
      'The mean of $U(a, b)$ is $\frac{a+b}{2}$, and its variance is $\frac{(b - a)^2}{12}$.',
    tags: ['Uniform Distribution', 'Continuous', 'CDF', 'A/B Testing Splits', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-034',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Continuous Distributions',
    topic: 'Normal (Gaussian) Distribution Parameters',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'Which two parameters completely specify the shape and location of a Gaussian Normal Distribution $N(\mu, \sigma^2)$?',
    codeSnippet: `from scipy.stats import norm

# Standard Normal: loc = mean = 0, scale = std = 1
rv = norm(loc=0, scale=1)`,
    options: [
      'The Mean (mu), which controls the central location / peak, and the Standard Deviation (sigma) or Variance (sigma^2), which controls the spread / width',
      'The Median and Mode',
      'The Minimum and Maximum',
      'The Degrees of Freedom and Skewness'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The Mean (mu), which controls the central location / peak, and the Standard Deviation (sigma) or Variance (sigma^2), which controls the spread / width',
    explanationTitle: 'Parameters of the Normal Distribution',
    explanationText:
      'The Gaussian distribution is symmetric and unimodal. It is defined by its mean $\mu$ (first moment, determining location) and standard deviation $\sigma$ (square root of the second central moment, determining dispersion). Mean, median, and mode are all equal at $\mu$.',
    deepDive:
      'In SciPy `norm(loc=mu, scale=sigma)`, `loc` corresponds to mean $\mu$ and `scale` corresponds to standard deviation $\sigma$.',
    tags: ['Normal Distribution', 'Gaussian', 'Parameters', 'Mean', 'Standard Deviation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-035',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Empirical Rule',
    topic: 'The 68-95-99.7% Empirical Rule',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'According to the Empirical Rule for a normally distributed metric, what percentage of observations fall within $\pm 1$, $\pm 2$, and $\pm 3$ standard deviations from the mean?',
    codeSnippet: `# Empirical Rule for Normal Distribution:
# mu +/- 1*sigma: ~68.27% of data
# mu +/- 2*sigma: ~95.45% of data
# mu +/- 3*sigma: ~99.73% of data`,
    options: [
      'Approximately 68.3% within +/- 1 sigma, 95.5% within +/- 2 sigma, and 99.7% within +/- 3 sigma',
      '50% within 1 sigma, 75% within 2 sigma, 100% within 3 sigma',
      '33% within 1 sigma, 66% within 2 sigma, 99% within 3 sigma',
      '90% within 1 sigma, 95% within 2 sigma, 99% within 3 sigma'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Approximately 68.3% within +/- 1 sigma, 95.5% within +/- 2 sigma, and 99.7% within +/- 3 sigma',
    explanationTitle: 'The 68-95-99.7% Empirical Rule',
    explanationText:
      'The Empirical Rule provides rapid heuristic bounds for Gaussian data. Values falling beyond $3\sigma$ from the mean occur only $0.27\%$ of the time ($\approx 1$ in 370 observations), which is why $3\sigma$ is the foundation for Statistical Process Control (SPC) control charts.',
    deepDive:
      'For non-normal distributions, Chebyshev’s Inequality provides a weaker universal bound: at least $1 - \frac{1}{k^2}$ of data falls within $\pm k$ standard deviations for any distribution (e.g. at least 75% within $\pm 2\sigma$).',
    tags: ['Empirical Rule', '68-95-99.7', 'Normal Distribution', 'Standard Deviation', 'PCAD-31-02']
  }
];
