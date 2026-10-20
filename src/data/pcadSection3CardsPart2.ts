import { Flashcard } from '../types';

export const pcadSection3CardsPart2: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.2 CONTINUED: THEORETICAL DISTRIBUTIONS [Cards 36-40]
  // =========================================================================
  {
    id: 'pcad-sec3-036',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Standardization',
    topic: 'Standard Normal Distribution and Z-Score Calculation',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'A student scores 85 on an exam with mean $\mu = 70$ and $\sigma = 10$. What is the student’s $Z$-score, and what does it communicate?',
    codeSnippet: `# Z-Score Formula: Z = (X - mu) / sigma
z_score = (85 - 70) / 10
print(f"Z-score: {z_score}") # +1.5`,
    options: [
      'Z = +1.5; the student’s score is exactly 1.5 standard deviations above the class mean, placing them in the standard normal N(0, 1) scale',
      'Z = +15; the student answered 15 questions correctly',
      'Z = 0.85; the percentile rank is 85%',
      'Z = 1.0; all Z-scores are rounded to 1'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Z = +1.5; the student’s score is exactly 1.5 standard deviations above the class mean, placing them in the standard normal N(0, 1) scale',
    explanationTitle: 'Z-Score Standardization Formula',
    explanationText:
      'The $Z$-score $Z = \frac{x - \mu}{\sigma}$ measures distance from the mean in standard deviation units. Standardizing transforms any normal distribution $N(\mu, \sigma^2)$ into the Standard Normal distribution $N(0, 1)$, enabling direct comparisons across different subjects, tests, or metrics.',
    deepDive:
      'In SciPy, compute the cumulative percentile from a Z-score with `scipy.stats.norm.cdf(1.5)` ($\approx 93.3\%$ percentile).',
    tags: ['Z-Score', 'Standard Normal', 'Standardization', 'scipy.stats', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-037',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Continuous Distributions',
    topic: 'Log-Normal Distribution for Skewed Positive Data',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Why are financial stock prices, income distributions, and web page latencies frequently modeled using a Log-Normal distribution?',
    codeSnippet: `import numpy as np
from scipy.stats import lognorm

# Log-normal: Values are bounded by 0 at the bottom, with an unbounded long positive tail:
# If Y = ln(X) follows a Normal distribution, then X follows a Log-Normal distribution!`,
    options: [
      'These variables are strictly positive (cannot be negative) and exhibit multiplicative growth or right-skewed compound dynamics; taking the natural log transforms them into a symmetric Normal distribution',
      'Because log-normal distributions have zero variance',
      'Because log-normal distributions are identical to uniform distributions',
      'To force the mean to equal zero'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'These variables are strictly positive (cannot be negative) and exhibit multiplicative growth or right-skewed compound dynamics; taking the natural log transforms them into a symmetric Normal distribution',
    explanationTitle: 'Log-Normal Distribution Dynamics',
    explanationText:
      'A random variable $X$ is log-normally distributed if $\ln(X) \sim N(\mu, \sigma^2)$. It is naturally bounded at zero ($X > 0$), highly right-skewed, and models multiplicative processes. Applying `np.log(df["income"])` normalizes the feature for linear regression and neural networks.',
    deepDive:
      'The geometric mean of a log-normal distribution equals its median ($e^\mu$).',
    tags: ['Log-Normal', 'Multiplicative Processes', 'Log Transformation', 'Right-Skewed', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-038',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Continuous Distributions',
    topic: 'Exponential Distribution & The Memoryless Property',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'What is the "Memoryless Property" of the continuous Exponential distribution, and what does it imply for hardware server lifetimes?',
    codeSnippet: `from scipy.stats import expon

# P(T > s + t | T > s) = P(T > t)
# Example: Waiting for a taxi or modeling radioactive decay.
# A server that has survived 500 hours is NO MORE OR LESS likely to fail in the next hour than a brand new server!`,
    options: [
      'The probability that an event occurs in the next interval t is completely independent of how much time has already elapsed: P(T > s + t | T > s) = P(T > t)',
      'The server forgets its IP address after 24 hours',
      'The exponential distribution has no parameters',
      'Memoryless means the variance is infinite'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The probability that an event occurs in the next interval t is completely independent of how much time has already elapsed: P(T > s + t | T > s) = P(T > t)',
    explanationTitle: 'The Memoryless Property of Exponential Decay',
    explanationText:
      'The Exponential distribution models continuous waiting time between Poisson events. It is the only continuous distribution with the memoryless property: past duration gives zero information about remaining waiting time. The PDF is $f(t) = \lambda e^{-\lambda t}$, with mean $\frac{1}{\lambda}$ and variance $\frac{1}{\lambda^2}$.',
    deepDive:
      'If components experience wear-and-tear aging (where failure probability increases over time), the Weibull distribution is used instead of Exponential.',
    tags: ['Exponential Distribution', 'Memoryless', 'Waiting Times', 'Poisson Process', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-039',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Continuous Distributions',
    topic: 'Student’s t-Distribution & Degrees of Freedom',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'How does Student’s t-distribution differ from the standard normal distribution, and what happens as degrees of freedom ($df$) approach infinity?',
    codeSnippet: `from scipy.stats import t, norm

# Small sample (df = 5): Fatter tails than Normal, accounts for sample std uncertainty!
# Large sample (df = 1000): Effectively identical to standard Normal N(0, 1)!`,
    options: [
      'Student’s t has heavier ("fatter") tails to account for the added uncertainty of estimating population variance from small samples; as df approaches infinity, it converges exactly to the Standard Normal distribution',
      'Student’s t is skewed to the right, whereas normal is symmetric',
      'Student’s t can only take integer values',
      'Degrees of freedom have no impact on the t-distribution curve'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Student’s t has heavier ("fatter") tails to account for the added uncertainty of estimating population variance from small samples; as df approaches infinity, it converges exactly to the Standard Normal distribution',
    explanationTitle: 'Student’s t-Distribution Convergence',
    explanationText:
      'Derived by William Sealy Gosset (writing under the pseudonym "Student" for Guinness Brewery), the t-distribution accounts for extra sampling variability when estimating standard deviation with sample $s$. Fatter tails yield wider, more conservative confidence intervals for small $n$ ($df = n - 1$). At $n \ge 30$, it closely approximates the normal distribution.',
    deepDive:
      'Critical values for 95% confidence: Normal $Z = 1.96$; Student’s t with $df = 4$ requires $t = 2.776$ to capture 95% of probability density.',
    tags: ['Student t', 'Degrees of Freedom', 'Gosset', 'Small Samples', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-040',
    section: 'Section 3',
    chapter: '3.2',
    track: 'pcad',
    cardType: 'Continuous Distributions',
    topic: 'Chi-Square (chi^2) and F-Distributions',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'How are the Chi-Square ($\chi^2$) and Snedecor’s $F$-distributions derived from standard normal variables?',
    codeSnippet: `# Chi-Square: Sum of k independent squared standard normal variables:
# Q = Z_1^2 + Z_2^2 + ... + Z_k^2 ~ ChiSquare(k)

# F-Distribution: Ratio of two independent scaled Chi-Square variables:
# F = (Chi1 / d1) / (Chi2 / d2) ~ F(d1, d2)`,
    options: [
      'Chi-Square is the sum of k independent squared standard normal variables; F is the ratio of two independent Chi-Square variables divided by their respective degrees of freedom',
      'Chi-Square is the square root of a normal variable; F is the logarithm',
      'Both distributions are identical to Student’s t',
      'Chi-Square is symmetric around zero; F is negative'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Chi-Square is the sum of k independent squared standard normal variables; F is the ratio of two independent Chi-Square variables divided by their respective degrees of freedom',
    explanationTitle: 'Chi-Square and F-Distribution Derivations',
    explanationText:
      'Because they are sums and ratios of squares, both $\chi^2$ and $F$ distributions are non-negative ($[0, \infty)$) and positively skewed. $\chi^2$ powers categorical independence tests and goodness-of-fit tests. The $F$-distribution powers Analysis of Variance (ANOVA) and regression $F$-tests comparing variance between groups versus within groups.',
    deepDive:
      'The mean of a $\chi^2$ distribution with $k$ degrees of freedom is simply $k$, and its variance is $2k$.',
    tags: ['Chi-Square', 'F-Distribution', 'ANOVA', 'Variance Testing', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 3.3: SAMPLING THEORY & ESTIMATION [Cards 41-60]
  // =========================================================================
  {
    id: 'pcad-sec3-041',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Sampling Theory',
    topic: 'Population Parameter vs. Sample Statistic',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'In statistical inference, what is the fundamental distinction between a Parameter and a Statistic?',
    codeSnippet: `# Parameter: Fixed, unknown true characteristic of the ENTIRE population (mu, sigma, p)
# Statistic: Numerical value calculated from a SAMPLE drawn from the population (x_bar, s, p_hat)`,
    options: [
      'A parameter is a fixed (usually unknown) numerical summary of the entire population; a statistic is a variable computed from an observed sample to estimate the parameter',
      'Parameters are always integers; statistics are floating-point numbers',
      'Statistics describe populations; parameters describe samples',
      'Parameters can only be estimated using deep learning'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A parameter is a fixed (usually unknown) numerical summary of the entire population; a statistic is a variable computed from an observed sample to estimate the parameter',
    explanationTitle: 'Parameters vs. Sample Statistics',
    explanationText:
      'Greek letters ($\mu, \sigma, \pi$) denote population parameters (true reality). Latin letters ($\bar{x}, s, \hat{p}$) denote sample statistics (measurements from data). Because different random samples yield different statistics, sample statistics are random variables with their own probability distributions.',
    deepDive:
      'The goal of inferential statistics is using sample statistics to draw probabilistic conclusions about unknown population parameters.',
    tags: ['Parameter', 'Statistic', 'Population', 'Inference', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-042',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Sampling Theory',
    topic: 'The Sampling Distribution of the Mean',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'What is the "Sampling Distribution of the Mean"?',
    codeSnippet: `# If we draw 10,000 independent random samples of size n=50 from a population,
# compute x_bar for each sample, and plot the 10,000 resulting means:
# That histogram is the Sampling Distribution of the Mean!`,
    options: [
      'The theoretical probability distribution of all possible sample means that would be obtained by repeatedly drawing random samples of size n from the population',
      'The histogram of the raw population data',
      'The distribution of sample errors',
      'A chart showing how data was sampled across time'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The theoretical probability distribution of all possible sample means that would be obtained by repeatedly drawing random samples of size n from the population',
    explanationTitle: 'Concept of the Sampling Distribution',
    explanationText:
      'Do not confuse the data distribution with the sampling distribution. The data distribution represents individual observations. The sampling distribution represents the variability of the summary statistic itself ($\bar{x}$) across hypothetical repeated experiments.',
    deepDive:
      'The mean of the sampling distribution of $\bar{x}$ is always equal to the population mean: $E[\bar{x}] = \mu$ (unbiased).',
    tags: ['Sampling Distribution', 'Sample Mean', 'Theory', 'Inference', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-043',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Central Limit Theorem',
    topic: 'The Central Limit Theorem (CLT)',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'What does the Central Limit Theorem (CLT) state regarding the distribution of sample means as sample size $n$ increases?',
    codeSnippet: `# CLT in action:
# Start with a heavily skewed, bimodal, or uniform population.
# As sample size n >= 30, the distribution of sample means (x_bar)
# converges to a Gaussian Normal distribution N(mu, sigma^2 / n)!`,
    options: [
      'Regardless of the underlying population distribution shape, the sampling distribution of the sample mean approaches a Normal distribution as sample size n becomes sufficiently large (typically n >= 30)',
      'All datasets in nature automatically become normal over time',
      'The population variance shrinks to zero as sample size grows',
      'The median equals the mode when n > 100'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Regardless of the underlying population distribution shape, the sampling distribution of the sample mean approaches a Normal distribution as sample size n becomes sufficiently large (typically n >= 30)',
    explanationTitle: 'The Central Limit Theorem (CLT)',
    explanationText:
      'The CLT is the cornerstone of classical statistical inference. Even if the raw population is heavily skewed (e.g. exponential service times or Bernoulli click rates), the distribution of the average $\bar{x}$ will be approximately bell-shaped and normal, centered at $\mu$ with variance $\frac{\sigma^2}{n}$.',
    deepDive:
      'Rule of thumb: $n \ge 30$ is usually sufficient for mild skewness; severe skewness or heavy tails may require $n \ge 100$.',
    tags: ['CLT', 'Central Limit Theorem', 'Normality', 'Sampling Theory', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-044',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Standard Error',
    topic: 'Standard Error of the Mean (SEM = sigma / sqrt(n))',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'If you quadruple the sample size from $n = 100$ to $n = 400$, what happens to the Standard Error of the Mean ($SEM$)?',
    codeSnippet: `# SEM Formula: SEM = sigma / sqrt(n)
# For n = 100: SEM_1 = sigma / 10
# For n = 400: SEM_2 = sigma / 20 = 0.5 * SEM_1
# Standard error is cut exactly in half!`,
    options: [
      'The Standard Error is cut in half (divided by 2), because SEM is inversely proportional to the square root of n',
      'The Standard Error is cut to 1/4th',
      'The Standard Error quadruples',
      'The Standard Error remains completely unchanged'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The Standard Error is cut in half (divided by 2), because SEM is inversely proportional to the square root of n',
    explanationTitle: 'Standard Error and Sample Size Scaling',
    explanationText:
      'The Standard Error $SE = \frac{s}{\sqrt{n}}$ measures the precision/uncertainty of the sample mean. Because of the square root ($\sqrt{n}$), returns diminish rapidly: gaining twice the precision requires four times as much data ($4\times$); gaining 10x precision requires $100\times$ more data.',
    deepDive:
      'In pandas and SciPy: `stats.sem(data)` or `df["col"].sem()`.',
    tags: ['Standard Error', 'SEM', 'Square Root Law', 'Precision', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-045',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Estimation Theory',
    topic: 'Properties of Good Estimators: Unbiasedness, Consistency, Efficiency',
    category: 'Statistical Analysis',
    difficulty: 'advanced',
    question: 'In mathematical statistics, what does it mean for an estimator $\hat{\theta}$ to be "Consistent"?',
    codeSnippet: `# Estimator Criteria:
# 1. Unbiased: E[theta_hat] = theta (no systematic over/underestimation)
# 2. Consistent: As n -> infinity, theta_hat converges in probability to theta (plim = theta)
# 3. Efficient: Has the smallest variance among all unbiased estimators (Cramér-Rao bound)`,
    options: [
      'As the sample size n approaches infinity, the estimate converges in probability to the true population parameter theta (error drops to zero)',
      'The estimator produces the exact same number every time it is run',
      'The estimator runs in O(1) constant time',
      'The estimator requires no assumptions about variance'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'As the sample size n approaches infinity, the estimate converges in probability to the true parameter value theta (error drops to zero)',
    explanationTitle: 'Consistency of Estimators',
    explanationText:
      'An estimator is consistent if larger samples guarantee convergence to the true value: $\lim_{n \to \infty} P(|\hat{\theta}_n - \theta| < \epsilon) = 1$. The sample mean $\bar{x}$ is both an unbiased and consistent estimator of the population mean $\mu$.',
    deepDive:
      'An estimator can be biased for small samples but still consistent as $n \to \infty$ (e.g. population variance with denominator $N$).',
    tags: ['Estimators', 'Consistency', 'Unbiasedness', 'Efficiency', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-046',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Estimation Theory',
    topic: 'Mathematical Formulation of Estimator Bias',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'How is the statistical "Bias" of a point estimator $\hat{\theta}$ mathematically defined?',
    codeSnippet: `# Bias Definition:
# Bias(theta_hat) = E[theta_hat] - theta
# If Bias = 0, the estimator is Unbiased (E[theta_hat] == theta).`,
    options: [
      'Bias is the difference between the expected value of the estimator and the true parameter value: Bias = E[theta_hat] - theta',
      'Bias is the ratio of variance to standard deviation',
      'Bias is the absolute maximum minus minimum',
      'Bias is the p-value multiplied by alpha'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Bias is the difference between the expected value of the estimator and the true parameter value: Bias = E[theta_hat] - theta',
    explanationTitle: 'Estimator Bias Definition',
    explanationText:
      'Bias measures systematic error. If $E[\hat{\theta}] = \theta$, the estimator is strictly unbiased. The Mean Squared Error (MSE) decomposes into bias and variance: $\text{MSE}(\hat{\theta}) = \text{Var}(\hat{\theta}) + \text{Bias}(\hat{\theta})^2$, which is the foundation of the Bias-Variance Tradeoff in predictive modeling.',
    deepDive:
      'Sample variance with $n$ in denominator has negative bias: $E[S_n^2] = \frac{n-1}{n}\sigma^2$. Multiplying by $\frac{n}{n-1}$ eliminates this bias.',
    tags: ['Bias', 'Estimators', 'Expected Value', 'MSE', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-047',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Confidence Intervals',
    topic: 'Frequentist Interpretation of a 95% Confidence Interval',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'What is the mathematically correct Frequentist interpretation of a 95% Confidence Interval $[45.2, 52.8]$ for population mean $\mu$?',
    codeSnippet: `# Correct Frequentist meaning:
# If we were to repeat this sampling experiment 100 times and construct a 95% CI from each sample,
# approximately 95 of those 100 constructed intervals would contain the true fixed parameter mu.
# 
# Common fallacy: "There is a 95% probability that mu lies inside [45.2, 52.8]".
# (False! In frequentist statistics, mu is fixed; it is either inside (1) or outside (0)!)`,
    options: [
      'If the sampling procedure were repeated indefinitely, 95% of the calculated confidence intervals would contain the true fixed population parameter; the interval is random, the parameter is fixed',
      'There is a 95% probability that the true mean is between 45.2 and 52.8',
      '95% of the raw data points fall between 45.2 and 52.8',
      'The sample mean has a 95% chance of being wrong'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'If the sampling procedure were repeated indefinitely, 95% of the calculated confidence intervals would contain the true fixed population parameter; the interval is random, the parameter is fixed',
    explanationTitle: 'The Frequentist Confidence Interval Meaning',
    explanationText:
      'Under Frequentist theory, the population parameter $\mu$ is a fixed constant, not a random variable. Therefore, it does not have a probability distribution. It either lies within a specific calculated bracket or it does not. The "95%" refers to the long-run coverage reliability of the estimation procedure.',
    deepDive:
      'To make statements like "There is a 95% probability that $\mu$ lies in $[A, B]$", one must use Bayesian statistics and construct a Credible Interval with prior distributions.',
    tags: ['Confidence Intervals', 'Frequentist', 'Coverage Probability', 'Interpretation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-048',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Confidence Intervals',
    topic: 'Z-Interval for the Mean (Known Population Variance)',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'What is the formula for a $(1 - \alpha)$ Confidence Interval for the mean when the population standard deviation $\sigma$ is known?',
    codeSnippet: `# Z-Interval Formula:
# CI = x_bar +/- Z_(alpha/2) * (sigma / sqrt(n))
# For 95% confidence, alpha = 0.05, Z_(0.025) = 1.96`,
    options: [
      'x_bar +/- Z_(alpha/2) * (sigma / sqrt(n))',
      'x_bar +/- t_(alpha/2) * (s / n)',
      'mu +/- Z * sigma',
      'x_bar +/- (sigma^2 / n)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'x_bar +/- Z_(alpha/2) * (sigma / sqrt(n))',
    explanationTitle: 'Z-Confidence Interval Formula',
    explanationText:
      'When population $\sigma$ is known and data is normally distributed (or $n \ge 30$ by CLT), the standard normal critical value $Z_{\alpha/2}$ is used. For 90% confidence $Z = 1.645$; for 95% confidence $Z = 1.96$; for 99% confidence $Z = 2.576$.',
    deepDive:
      'In real data analysis, true $\sigma$ is almost never known, necessitating the use of Student’s t-interval with sample standard deviation $s$.',
    tags: ['Z-Interval', 'Confidence Intervals', 'Known Variance', 'Formulas', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-049',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Confidence Intervals',
    topic: 't-Interval for the Mean (Unknown Population Variance)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'When constructing a 95% Confidence Interval for the mean of a sample of $n = 16$ items where population variance is unknown, which distribution and degrees of freedom are required?',
    codeSnippet: `from scipy import stats

n = 16
df = n - 1 # Degrees of freedom = 15
t_crit = stats.t.ppf(0.975, df=df) # t_crit ≈ 2.131 (wider than Z=1.96!)
# CI = x_bar +/- t_crit * (s / sqrt(n))`,
    options: [
      'Student’s t-distribution with df = n - 1 = 15 degrees of freedom',
      'Standard Normal distribution Z with df = 16',
      'F-distribution with df = (15, 1)',
      'Chi-Square distribution with df = 15'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Student’s t-distribution with df = n - 1 = 15 degrees of freedom',
    explanationTitle: 'Student’s t Confidence Interval',
    explanationText:
      'When population $\sigma$ is unknown and estimated using sample standard deviation $s$, the test statistic follows Student’s t-distribution with $df = n - 1$. The critical value $t_{\alpha/2, 15} \approx 2.131$ is wider than $Z = 1.96$, correctly expanding the confidence interval to reflect sample estimation uncertainty.',
    deepDive:
      'Compute automatically with `stats.t.interval(confidence=0.95, df=n-1, loc=mean, scale=stats.sem(data))`.',
    tags: ['t-Interval', 'Degrees of Freedom', 'Small Samples', 'scipy.stats', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-050',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Proportions',
    topic: 'Confidence Interval for Proportions: Wald vs. Wilson Score',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Why does the standard Wald interval $\hat{p} \pm Z \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$ fail catastrophically when measuring rare event conversion rates ($p \approx 0.001$), and what interval should be used instead?',
    codeSnippet: `# If 0 conversions out of 100 trials: p_hat = 0
# Wald interval: 0 +/- 1.96 * 0 = [0.0, 0.0] (Absurd! Claims 100% certainty that true rate is 0!)
# Wilson Score interval properly yields [0.0, 0.036] (reflects realistic uncertainty!)`,
    options: [
      'The Wald interval assumes normal approximation of proportions which breaks down near boundaries (p near 0 or 1), yielding absurd zero-width intervals or negative bounds; the Wilson Score interval handles extreme proportions reliably',
      'The Wald interval requires sample size n > 1,000,000',
      'Proportions cannot be evaluated using intervals',
      'The Wilson interval converts proportions to logarithmic decibels'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The Wald interval assumes normal approximation of proportions which breaks down near boundaries (p near 0 or 1), yielding absurd zero-width intervals or negative bounds; the Wilson Score interval handles extreme proportions reliably',
    explanationTitle: 'Wilson Score Interval vs. Wald Approximation',
    explanationText:
      'The Wald interval relies on the normal approximation to the binomial, which requires $np \ge 10$ and $n(1-p) \ge 10$. For small $n$ or extreme proportions (low CTRs, rare defects), Wald provides poor coverage and can produce bounds $< 0$ or $> 1$. The Wilson score interval inverts the score test, guaranteeing valid coverage.',
    deepDive:
      'In Python, compute Wilson intervals using `statsmodels.stats.proportion.proportion_confint(count, nobs, method="wilson")`.',
    tags: ['Proportions', 'Wilson Score', 'Wald Interval', 'Rare Events', 'statsmodels', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-051',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Margin of Error',
    topic: 'Margin of Error (MoE) Components',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'In the confidence interval expression $\bar{x} \pm \text{MoE}$, what components determine the Margin of Error ($MoE$)?',
    codeSnippet: `# Margin of Error formula:
# MoE = Critical_Value * Standard_Error
# MoE = Z_(alpha/2) * (sigma / sqrt(n))`,
    options: [
      'The Critical Value (reflecting desired confidence level 1 - alpha) multiplied by the Standard Error of the estimator (sigma / sqrt(n))',
      'The Mean divided by the Standard Deviation',
      'The Range divided by 2',
      'The p-value multiplied by sample size n'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The Critical Value (reflecting desired confidence level 1 - alpha) multiplied by the Standard Error of the estimator (sigma / sqrt(n))',
    explanationTitle: 'Components of Margin of Error',
    explanationText:
      'Margin of Error determines the half-width of a confidence interval. It depends on three levers: 1. Confidence Level (higher confidence $\to$ larger critical value $\to$ wider MoE); 2. Population Variability ($\sigma$); 3. Sample Size ($n$, larger $n \to$ narrower MoE).',
    deepDive:
      'A political poll reporting $52\% \pm 3\%$ at $95\%$ confidence has a margin of error of 3 percentage points.',
    tags: ['Margin of Error', 'MoE', 'Confidence Level', 'Sample Size', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-052',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Sample Size Determination',
    topic: 'Calculating Required Sample Size for Target Margin of Error',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'How do you calculate the minimum sample size $n$ needed to estimate a population proportion within a margin of error $E = 0.03$ (3%) at 95% confidence ($Z = 1.96$), assuming no prior knowledge of $p$?',
    codeSnippet: `# Conservative sample size formula for proportions (setting p = 0.50 to maximize variance):
# n = (Z^2 * p * (1 - p)) / E^2
# n = (1.96^2 * 0.5 * 0.5) / 0.03^2
# n = (3.8416 * 0.25) / 0.0009 = 0.9604 / 0.0009 ≈ 1,067.1 -> round UP to 1,068!`,
    options: [
      'n = (Z^2 * p * (1 - p)) / E^2; setting p = 0.50 yields a conservative sample size of approximately 1,068 respondents',
      'n = 100 * E = 300 respondents',
      'n = Z / E = 1.96 / 0.03 = 65 respondents',
      'Sample size cannot be planned mathematically'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'n = (Z^2 * p * (1 - p)) / E^2; setting p = 0.50 yields a conservative sample size of approximately 1,068 respondents',
    explanationTitle: 'Sample Size Calculation for Survey Proportions',
    explanationText:
      'To guarantee the margin of error does not exceed $E$, we choose $p = 0.50$ because $p(1-p)$ peaks at $0.25$, ensuring maximum possible variance. This yields the standard polling benchmark: $\approx 1,068$ respondents for $\pm 3\%$ margin of error at $95\%$ confidence.',
    deepDive:
      'Always round up the final sample size calculation to the nearest whole integer using `math.ceil()`.',
    tags: ['Sample Size', 'Power Planning', 'Margin of Error', 'Surveys', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-053',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Resampling Methods',
    topic: 'Bootstrapping: Non-Parametric Resampling with Replacement',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'What is the core mechanism of "Bootstrapping", and why is it valuable for estimating confidence intervals on complex metrics like the Median or 90th percentile?',
    codeSnippet: `import numpy as np

data = np.array([12, 15, 18, 22, 29, 35, 40, 95]) # Non-normal sample
n = len(data)
boot_medians = []

# Generate 5,000 bootstrap resamples WITH REPLACEMENT:
for _ in range(5000):
    resample = np.random.choice(data, size=n, replace=True)
    boot_medians.append(np.median(resample))

# 95% Bootstrap Percentile Confidence Interval:
ci_lower, ci_upper = np.percentile(boot_medians, [2.5, 97.5])`,
    options: [
      'It repeatedly draws samples of size n WITH REPLACEMENT from the observed data to approximate the sampling distribution empirically, requiring zero parametric normality assumptions',
      'It resamples without replacement until all data is depleted',
      'It creates artificial Gaussian data with matching mean and variance',
      'Bootstrapping is only used for sorting numbers'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It repeatedly draws samples of size n WITH REPLACEMENT from the observed data to approximate the sampling distribution empirically, requiring zero parametric normality assumptions',
    explanationTitle: 'Non-Parametric Bootstrap Resampling',
    explanationText:
      'Introduced by Bradley Efron (1979), bootstrapping treats the observed sample as a proxy for the entire population. By repeatedly resampling $n$ items with replacement, we simulate the sampling distribution directly. It generates robust confidence intervals for statistics that lack closed-form formulas (e.g. median, ratios, Gini coefficient).',
    deepDive:
      'Resampling must strictly be done WITH replacement (`replace=True`); resampling without replacement would produce identical permutations of the original sample.',
    tags: ['Bootstrapping', 'Resampling', 'Non-Parametric', 'Percentile CI', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-054',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Resampling Methods',
    topic: 'Jackknife Resampling: Leave-One-Out Parameter Estimation',
    category: 'Statistical Analysis',
    difficulty: 'advanced',
    question: 'How does Jackknife resampling differ from Bootstrap resampling?',
    codeSnippet: `# Jackknife: Exactly n deterministic resamples of size (n - 1)
# Sub-sample 1: Exclude x_1
# Sub-sample 2: Exclude x_2
# ...
# Sub-sample n: Exclude x_n
# Deterministic leave-one-out estimation of bias and standard error!`,
    options: [
      'Jackknife deterministically creates n distinct sub-samples of size (n - 1), systematically dropping exactly one observation at a time; Bootstrap randomly draws thousands of resamples with replacement',
      'Jackknife drops 50% of the data at random',
      'Bootstrap is deterministic, while Jackknife is random',
      'Jackknife is only used for linear regression'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Jackknife deterministically creates n distinct sub-samples of size (n - 1), systematically dropping exactly one observation at a time; Bootstrap randomly draws thousands of resamples with replacement',
    explanationTitle: 'Jackknife vs. Bootstrap Resampling',
    explanationText:
      'Preceding the bootstrap, Maurice Quenouille (1949) developed the Jackknife. Because it systematically leaves out one observation at a time, it is completely deterministic with exactly $n$ iterations. It is primarily used for estimating estimator bias and standard errors for smooth statistics.',
    deepDive:
      'The jackknife fails on non-smooth statistics like the sample median, where the bootstrap thrives.',
    tags: ['Jackknife', 'Resampling', 'Leave-One-Out', 'Bias Estimation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-055',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Estimation Theory',
    topic: 'Maximum Likelihood Estimation (MLE) Paradigm',
    category: 'Statistical Analysis',
    difficulty: 'advanced',
    question: 'What is the objective of Maximum Likelihood Estimation (MLE) when fitting a parametric probability model to observed data?',
    codeSnippet: `# MLE Objective:
# Given observed data X = {x_1, x_2, ..., x_n},
# Find parameter values theta_hat that maximize the Likelihood function L(theta | X)
# (or maximize the Log-Likelihood: ln L(theta))`,
    options: [
      'To find the parameter values that maximize the probability (likelihood) of observing the exact sample data that was collected',
      'To minimize the sample size required for testing',
      'To force the distribution to match a uniform shape',
      'To make p-values equal to zero'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'To find the parameter values that maximize the probability (likelihood) of observing the exact sample data that was collected',
    explanationTitle: 'The Maximum Likelihood Principle',
    explanationText:
      'Likelihood $L(\theta | X) = \prod f(x_i | \theta)$ treats parameters as variables and observed data as fixed constants. In practice, algorithms maximize the Log-Likelihood $\ln L(\theta) = \sum \ln f(x_i | \theta)$, turning products into sums for numerical stability. MLE estimators are asymptotically unbiased, normal, and minimum variance.',
    deepDive:
      'Logistic regression, GLMs, and deep neural network loss functions (cross-entropy) are derived directly from Maximum Likelihood Estimation.',
    tags: ['MLE', 'Maximum Likelihood', 'Estimation', 'Log-Likelihood', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-056',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Probability Laws',
    topic: 'The Law of Large Numbers (LLN)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'What does the Law of Large Numbers (LLN) guarantee as the number of independent trials $n$ grows toward infinity?',
    codeSnippet: `# Simulating coin flips:
# Flip 10 times: 7 heads (70% - high variance)
# Flip 1,000 times: 512 heads (51.2% - closer to theoretical 50%)
# Flip 1,000,000 times: 500,103 heads (50.01% - converges to expected value!)`,
    options: [
      'The sample average converges in probability (Weak LLN) and almost surely (Strong LLN) to the true expected value of the population as sample size n approaches infinity',
      'The sample standard deviation grows to infinity',
      'The Gambler\'s Fallacy is mathematically proven true',
      'All random variables become discrete'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The sample average converges in probability (Weak LLN) and almost surely (Strong LLN) to the true expected value of the population as sample size n approaches infinity',
    explanationTitle: 'The Law of Large Numbers (LLN)',
    explanationText:
      'The LLN ensures that empirical sample averages become stable benchmarks of true expected values when sufficient data is gathered. Do not confuse LLN with the "Gambler\'s Fallacy": the LLN does not compensate for past runs of bad luck; it simply dilutes them into insignificance across millions of future trials.',
    deepDive:
      'The Weak LLN (Khinchin) proves convergence in probability; the Strong LLN (Kolmogorov) proves almost sure convergence.',
    tags: ['LLN', 'Law of Large Numbers', 'Convergence', 'Probability Laws', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-057',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Sampling Bias',
    topic: 'Survivorship, Self-Selection, and Non-Response Bias',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'During World War II, engineers noticed returning bombers had bullet holes clustered heavily on wings and tail sections, and proposed adding armor there. Why was this proposal a catastrophic example of "Survivorship Bias"?',
    codeSnippet: `# Abraham Wald’s Insight (1943):
# The armor should be added where bullet holes were ABSENT on returning planes!
# Planes hit in the engine or cockpit crashed and never returned to be counted!`,
    options: [
      'The sample only analyzed planes that SURVIVED their missions; planes shot in vital areas (engines/cockpit) crashed and were omitted from the dataset, creating a dangerously inverted conclusion',
      'Because bullet holes cannot be counted statistically',
      'Because the sample size was too small (n < 30)',
      'Because the data was collected on paper rather than in SQL'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The sample only analyzed planes that SURVIVED their missions; planes shot in vital areas (engines/cockpit) crashed and were omitted from the dataset, creating a dangerously inverted conclusion',
    explanationTitle: 'Survivorship Bias in Data Analysis',
    explanationText:
      'Survivorship bias concentrates on people or things that passed a selection process while overlooking those that failed because of their lack of visibility. In business, studying only successful unicorns (Apple, Google) while ignoring thousands of bankrupt startups leads to false causal recipes for success.',
    deepDive:
      'Similarly, customer satisfaction surveys suffer from voluntary response bias: only extremely ecstatic or furious customers bother responding.',
    tags: ['Survivorship Bias', 'Sampling Bias', 'Abraham Wald', 'Critical Thinking', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-058',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'Sampling Correction',
    topic: 'Finite Population Correction (FPC) Factor',
    category: 'Statistical Analysis',
    difficulty: 'advanced',
    question: 'When sampling WITHOUT replacement from a small finite population $N$, when must the Finite Population Correction (FPC) factor $\sqrt{\frac{N - n}{N - 1}}$ be applied to the standard error?',
    codeSnippet: `# Standard SEM assumes infinite population or sampling with replacement.
# When sample n exceeds 5% of population N (n / N > 0.05):
# SEM_corrected = (sigma / sqrt(n)) * sqrt((N - n) / (N - 1))`,
    options: [
      'Whenever the sample size n represents more than 5% of the total finite population (n / N > 0.05); as n approaches N, standard error drops toward zero',
      'Only when population N is greater than 1,000,000',
      'Whenever the data is collected via web scraping',
      'Only when testing proportions below 0.01'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Whenever the sample size n represents more than 5% of the total finite population (n / N > 0.05); as n approaches N, standard error drops toward zero',
    explanationTitle: 'Finite Population Correction (FPC)',
    explanationText:
      'When sampling without replacement from a finite group (e.g. sampling 200 employees out of a 500-person company, $40\%$), each sampled individual removes variability from the remaining population. The FPC shrinks the standard error, preventing artificially inflated confidence intervals.',
    deepDive:
      'Notice that if $n = N$ (a complete census), the numerator $N - n = 0$, correctly reducing standard error to zero.',
    tags: ['FPC', 'Finite Population Correction', 'Standard Error', 'Sampling Theory', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-059',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'SciPy Implementation',
    topic: 'Calculating Parametric Confidence Intervals with scipy.stats',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'How do you compute a 95% confidence interval for a sample mean using `scipy.stats.t.interval` in Python?',
    codeSnippet: `from scipy import stats
import numpy as np

data = np.array([12.5, 14.2, 13.8, 15.1, 12.9, 14.5])
n = len(data)
mean = np.mean(data)
sem = stats.sem(data) # Sample standard error (s / sqrt(n))

# 95% Confidence Interval with Student's t:
ci_low, ci_high = stats.t.interval(
    confidence=0.95,
    df=n - 1,
    loc=mean,
    scale=sem
)`,
    options: [
      'stats.t.interval(confidence=0.95, df=n-1, loc=mean, scale=sem)',
      'stats.t.ci(data, alpha=0.05)',
      'np.percentile(data, [2.5, 97.5])',
      'stats.norm.conf(data, 0.95)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'stats.t.interval(confidence=0.95, df=n-1, loc=mean, scale=sem)',
    explanationTitle: 'Parametric Intervals via scipy.stats',
    explanationText:
      '`scipy.stats.t.interval` calculates symmetric confidence intervals using Student’s t-distribution. Specify the confidence level, degrees of freedom $n - 1$, the center location (`mean`), and scale (`sem = stats.sem(data)`).',
    deepDive:
      'SciPy 1.9+ standardized the first argument name as `confidence` (replacing the deprecated `alpha`).',
    tags: ['scipy.stats', 't.interval', 'Confidence Intervals', 'Python Stats', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-060',
    section: 'Section 3',
    chapter: '3.3',
    track: 'pcad',
    cardType: 'SciPy Implementation',
    topic: 'Automated Bootstrapping with scipy.stats.bootstrap',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'How do you calculate a BCa (bias-corrected and accelerated) bootstrap confidence interval for a dataset using `scipy.stats.bootstrap`?',
    codeSnippet: `from scipy.stats import bootstrap
import numpy as np

data = (np.array([45, 52, 68, 71, 85, 99, 102, 150]),) # Must be a tuple of arrays!

res = bootstrap(
    data,
    statistic=np.median,
    confidence_level=0.95,
    n_resamples=5000,
    method='BCa' # Bias-corrected and accelerated bootstrap
)
print(f"95% CI for Median: [{res.confidence_interval.low:.1f}, {res.confidence_interval.high:.1f}]")`,
    options: [
      'Call scipy.stats.bootstrap(data_tuple, statistic=np.median, confidence_level=0.95, method="BCa")',
      'Call np.bootstrap(data, 0.95)',
      'Use pandas.Series.boot_ci()',
      'Bootstrap cannot calculate confidence intervals for the median'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Call scipy.stats.bootstrap(data_tuple, statistic=np.median, confidence_level=0.95, method="BCa")',
    explanationTitle: 'Modern Bootstrapping with scipy.stats.bootstrap',
    explanationText:
      'Introduced in SciPy 1.7.0, `scipy.stats.bootstrap` provides vectorized, multi-threaded bootstrap inference. The input data must be supplied as a tuple of 1D arrays. The `"BCa"` method corrects for skewness and bias, outperforming simple percentile intervals.',
    deepDive:
      'BCa intervals are second-order accurate ($O(1/n)$ coverage error compared to $O(1/\sqrt{n})$ for standard normal intervals).',
    tags: ['scipy.stats', 'bootstrap', 'BCa', 'Resampling', 'Python Stats', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 3.4: HYPOTHESIS TESTING & SIGNIFICANCE [Cards 61-70]
  // =========================================================================
  {
    id: 'pcad-sec3-061',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Hypothesis Testing',
    topic: 'Null Hypothesis (H0) vs. Alternative Hypothesis (H1)',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'In an A/B test evaluating whether a new checkout flow increases conversion rates, how are the Null ($H_0$) and Alternative ($H_1$) hypotheses framed?',
    codeSnippet: `# Null Hypothesis (H0): Status quo / no effect
# H0: p_new <= p_old (The new flow produces NO improvement in conversion rate)

# Alternative Hypothesis (H1): Research hypothesis / treatment effect
# H1: p_new > p_old (The new flow produces a statistically significant increase)`,
    options: [
      'H0 represents the baseline assumption of no effect, no difference, or status quo; H1 represents the claim or effect you are attempting to demonstrate with statistical evidence',
      'H0 means the test succeeded; H1 means the test failed',
      'H0 is always positive; H1 is always negative',
      'H0 and H1 can both be true simultaneously'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'H0 represents the baseline assumption of no effect, no difference, or status quo; H1 represents the claim or effect you are attempting to demonstrate with statistical evidence',
    explanationTitle: 'Framing H0 and H1 Hypotheses',
    explanationText:
      'The Null Hypothesis ($H_0$) acts like the presumption of innocence in a court trial: assumed true until overwhelming evidence rejects it. We never "accept" $H_0$; we either "reject $H_0$" (evidence favors $H_1$) or "fail to reject $H_0$" (insufficient evidence to conclude an effect exists).',
    deepDive:
      'Failure to reject $H_0$ does not prove $H_0$ is true (absence of evidence is not evidence of absence).',
    tags: ['Null Hypothesis', 'Alternative Hypothesis', 'H0', 'H1', 'Testing Framework', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-062',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Error Types',
    topic: 'Type I Error (alpha) vs. Type II Error (beta)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'What is the distinction between a Type I Error ($\alpha$) and a Type II Error ($\beta$)?',
    codeSnippet: `# Decision Matrix:
# Reality: H0 is TRUE (No effect)
# -> Reject H0: TYPE I ERROR (False Positive, alpha, e.g. Convicting an innocent person)
# 
# Reality: H0 is FALSE (Effect exists)
# -> Fail to reject H0: TYPE II ERROR (False Negative, beta, e.g. Letting a guilty criminal go free)`,
    options: [
      'Type I error (alpha) is a False Positive: rejecting a true null hypothesis; Type II error (beta) is a False Negative: failing to reject a false null hypothesis',
      'Type I error is a calculation error; Type II error is a database crash',
      'Type I error is failing to reject H0; Type II error is rejecting H0',
      'Both errors always equal 0.05'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Type I error (alpha) is a False Positive: rejecting a true null hypothesis; Type II error (beta) is a False Negative: failing to reject a false null hypothesis',
    explanationTitle: 'Type I (alpha) vs. Type II (beta) Errors',
    explanationText:
      'Type I error ($\alpha$, false alarm) occurs when you conclude a feature works when it actually does nothing. Setting $\alpha = 0.05$ caps this risk at 5%. Type II error ($\beta$, missed detection) occurs when you miss a real effect. Reducing $\alpha$ typically increases $\beta$ unless sample size $n$ is increased.',
    deepDive:
      'In medical diagnosis: Type I error is telling a healthy patient they are sick; Type II error is telling a sick patient they are healthy.',
    tags: ['Type I Error', 'Type II Error', 'Alpha', 'Beta', 'False Positive', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-063',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Statistical Power',
    topic: 'Statistical Power (1 - beta) Definition',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'What does "Statistical Power" ($1 - \beta$) represent in experiment design?',
    codeSnippet: `# Power = 1 - beta
# Industry standard: Power = 0.80 (80% power)
# Means: If a true effect exists, the test has an 80% chance of detecting it with statistical significance!`,
    options: [
      'The probability of correctly rejecting the null hypothesis when an actual effect exists (1 - beta, the true positive rate)',
      'The CPU processing power of the computer running the test',
      'The probability that the null hypothesis is true',
      'The statistical significance level alpha'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The probability of correctly rejecting the null hypothesis when an actual effect exists (1 - beta, the true positive rate)',
    explanationTitle: 'Statistical Power (1 - beta)',
    explanationText:
      'Statistical power measures an experiment’s sensitivity to detect real effects. Underpowered experiments ($\text{Power} < 80\%$) waste resources: even if an engineering improvement is genuinely valuable, an underpowered test has high probability of returning an inconclusive $p > 0.05$ null result.',
    deepDive:
      'Calculate statistical power in Python using `statsmodels.stats.power.TTestIndPower().power(...)`.',
    tags: ['Statistical Power', '1 - Beta', 'Sensitivity', 'A/B Testing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-064',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Statistical Power',
    topic: 'Four Interconnected Factors Governing Statistical Power',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Which four mathematical factors are linked in power analysis, such that determining any three fixes the fourth?',
    codeSnippet: `# The Power Quartet:
# 1. Sample Size (n)
# 2. Effect Size (delta or Cohen's d)
# 3. Significance Level (alpha)
# 4. Statistical Power (1 - beta)`,
    options: [
      'Sample Size (n), Effect Size (magnitude of true difference), Significance Level (alpha), and Statistical Power (1 - beta)',
      'Mean, Median, Mode, and Standard Deviation',
      'CPU Speed, RAM, Network Bandwidth, and Latency',
      'Z-score, t-score, F-score, and Chi-Square score'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Sample Size (n), Effect Size (magnitude of true difference), Significance Level (alpha), and Statistical Power (1 - beta)',
    explanationTitle: 'The Power Calculation Quartet',
    explanationText:
      'To increase power: 1. Increase sample size $n$; 2. Detect a larger effect size (big changes are easier to spot than tiny changes); 3. Relax $\alpha$ (e.g. from 0.01 to 0.05); or 4. Reduce measurement noise/variance. In pre-experiment planning, power analysis determines the exact sample size $n$ required.',
    deepDive:
      'Detecting a tiny 1% lift requires dramatically larger sample sizes than detecting a 10% lift.',
    tags: ['Power Analysis', 'Sample Size', 'Effect Size', 'Alpha', 'Beta', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-065',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Hypothesis Testing',
    topic: 'Precise Mathematical Definition of the p-value',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'What is the precise definition of a $p$-value in inferential hypothesis testing?',
    codeSnippet: `# Formal p-value definition:
# p-value = P(Test Statistic >= Observed | H0 is TRUE)
# If p-value <= alpha (e.g. 0.05), the observed data is too rare under H0, so we REJECT H0!`,
    options: [
      'The probability of obtaining test results at least as extreme as the results actually observed, under the assumption that the null hypothesis (H0) is true',
      'The probability that the null hypothesis is true',
      'The probability that the alternative hypothesis is false',
      'The probability that the study was conducted properly'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The probability of obtaining test results at least as extreme as the results actually observed, under the assumption that the null hypothesis (H0) is true',
    explanationTitle: 'The Formal Definition of the p-Value',
    explanationText:
      'A $p$-value is conditional on $H_0$ being true: $P(\text{Data} \mid H_0)$. It measures compatibility between the sample data and the null hypothesis. A small $p$-value ($p < 0.05$) indicates the observed data would be very unusual if $H_0$ were true, giving grounds to reject $H_0$.',
    deepDive:
      'A $p$-value of $0.03$ does NOT mean there is a 3% chance $H_0$ is true. It means there is a 3% chance of seeing such data if $H_0$ were true.',
    tags: ['p-value', 'Definition', 'Hypothesis Testing', 'Statistical Significance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-066',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Hypothesis Testing',
    topic: 'Common Misconceptions About p-Values (ASA Statement)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Which statement accurately describes what a $p$-value does NOT measure, according to the American Statistical Association (ASA)?',
    codeSnippet: `# ASA Statement on p-Values:
# 1. p-values do NOT measure the probability that the studied hypothesis is true.
# 2. p-values do NOT measure the size of an effect or the importance of a result!
# (With massive n, tiny practically meaningless differences yield p < 0.0001!)`,
    options: [
      'A p-value does not measure the practical importance or magnitude of an effect; with large enough sample sizes, trivial real-world differences yield tiny p-values',
      'A p-value cannot be calculated in Python',
      'A p-value is identical to the effect size',
      'A p-value proves causality'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A p-value does not measure the practical importance or magnitude of an effect; with large enough sample sizes, trivial real-world differences yield tiny p-values',
    explanationTitle: 'Statistical vs. Practical Significance',
    explanationText:
      'Statistical significance ($p < 0.05$) is not practical significance. If $n = 10,000,000$, an e-commerce checkout button color change that increases revenue by 0.001 cents will have $p < 0.00001$, yet the cost of deploying it may exceed any business return. Always report Effect Sizes (Cohen’s $d$) alongside $p$-values.',
    deepDive:
      'Never rely solely on $p$-values to make critical business decisions; evaluate effect size magnitude and confidence intervals.',
    tags: ['p-value', 'Misconceptions', 'ASA', 'Practical Significance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-067',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Hypothesis Testing',
    topic: 'One-Tailed vs. Two-Tailed Hypothesis Tests',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'When is a Two-Tailed test preferred over a One-Tailed test in scientific and business analytics?',
    codeSnippet: `# Two-Tailed Test:
# H0: mu1 = mu2, H1: mu1 != mu2 (Detects changes in EITHER direction: improvement OR degradation!)

# One-Tailed Test:
# H0: mu1 <= mu2, H1: mu1 > mu2 (Detects changes strictly in ONE direction)`,
    options: [
      'Two-tailed tests evaluate whether the effect is significantly different in EITHER direction (positive or negative), protecting against unanticipated negative outcomes',
      'Two-tailed tests are only valid when sample size is an even number',
      'One-tailed tests are required by law for medical drugs',
      'Two-tailed tests have twice as much power as one-tailed tests'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Two-tailed tests evaluate whether the effect is significantly different in EITHER direction (positive or negative), protecting against unanticipated negative outcomes',
    explanationTitle: 'One-Tailed vs. Two-Tailed Strategy',
    explanationText:
      'A two-tailed test splits $\alpha = 0.05$ into two equal tails of $0.025$. It detects whether a redesign made things better OR worse. A one-tailed test places all $0.05$ in one tail, increasing statistical power in that direction, but is completely blind to unexpected disastrous regressions in the opposite direction.',
    deepDive:
      'SciPy’s `ttest_ind` and `ttest_rel` accept `alternative="two-sided"` (default), `"greater"`, or `"less"`.',
    tags: ['One-Tailed', 'Two-Tailed', 'Directional Testing', 'Hypothesis Testing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-068',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Parametric Tests',
    topic: 'One-Sample t-Test with scipy.stats.ttest_1samp',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'How do you perform a One-Sample t-test in Python to verify if a batch of product weights differs significantly from the 500g specification target?',
    codeSnippet: `from scipy import stats
import numpy as np

weights = np.array([498.2, 501.5, 497.9, 499.1, 498.8, 502.1])

# Test H0: mu = 500g vs H1: mu != 500g
t_stat, p_val = stats.ttest_1samp(weights, popmean=500.0)
print(f"t-statistic: {t_stat:.3f}, p-value: {p_val:.4f}")`,
    options: [
      'stats.ttest_1samp(weights, popmean=500.0) tests if the sample mean differs significantly from the population mean constant',
      'stats.ttest_ind(weights, 500.0)',
      'stats.one_sample_test(weights, 500.0)',
      'weights.ttest(500.0)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'stats.ttest_1samp(weights, popmean=500.0) tests if the sample mean differs significantly from the population mean constant',
    explanationTitle: 'One-Sample t-Test Implementation',
    explanationText:
      '`stats.ttest_1samp` computes the test statistic $t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$ with $n - 1$ degrees of freedom. It returns the calculated $t$-statistic and the two-sided $p$-value. If $p < 0.05$, you reject $H_0$ and conclude the batch deviates from 500g.',
    deepDive:
      'Assumes the underlying sample data is approximately normally distributed, especially for small $n < 30$.',
    tags: ['One-Sample t-Test', 'ttest_1samp', 'scipy.stats', 'Quality Control', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-069',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Parametric Tests',
    topic: 'Independent Two-Sample Student’s t-Test (Equal Variance)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'When using `scipy.stats.ttest_ind(a, b, equal_var=True)`, what critical assumption must be satisfied by both samples?',
    codeSnippet: `from scipy import stats

# Classical Student's two-sample t-test:
t_stat, p_val = stats.ttest_ind(group_a, group_b, equal_var=True)`,
    options: [
      'Both populations must have equal variances (homoscedasticity, sigma_A^2 = sigma_B^2), in addition to independence and approximate normality',
      'Both groups must have identical sample sizes',
      'The means of both groups must be positive',
      'Data must be categorical'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Both populations must have equal variances (homoscedasticity, sigma_A^2 = sigma_B^2), in addition to independence and approximate normality',
    explanationTitle: 'Student’s Independent t-Test Assumptions',
    explanationText:
      'Classical Student’s t-test pools sample variances: $s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}$. If the true population variances are unequal ($\sigma_1^2 \ne \sigma_2^2$), especially with unequal sample sizes ($n_1 \ne n_2$), Student’s t-test inflates Type I error rates severely.',
    deepDive:
      'Test for equal variances using Levene’s test: `scipy.stats.levene(group_a, group_b)`.',
    tags: ['Student t-Test', 'ttest_ind', 'Equal Variance', 'Homoscedasticity', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-070',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Parametric Tests',
    topic: 'Welch’s t-Test (Unequal Variance Default)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Why do modern statisticians recommend Welch’s t-test (`equal_var=False`) as the default test when comparing two independent group means?',
    codeSnippet: `from scipy import stats

# Welch's t-test (Robust to unequal variances!):
t_stat, p_val = stats.ttest_ind(control, variant, equal_var=False)`,
    options: [
      'Welch’s t-test does not assume equal variances, dynamically adjusts degrees of freedom via the Welch-Satterthwaite equation, and performs just as well as Student’s t-test when variances are equal',
      'Welch’s t-test works on datasets with missing values',
      'Welch’s t-test does not require any data points',
      'Welch’s t-test is 10 times faster to run on GPUs'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Welch’s t-test does not assume equal variances, dynamically adjusts degrees of freedom via the Welch-Satterthwaite equation, and performs just as well as Student’s t-test when variances are equal',
    explanationTitle: 'Welch’s t-Test as the Superior Default',
    explanationText:
      'In real data, equal variance is rare. Welch’s t-test avoids variance pooling and calculates effective degrees of freedom via the Welch-Satterthwaite equation. It protects against inflated Type I errors when variances differ, while sacrificing virtually no statistical power when variances happen to be equal.',
    deepDive:
      'In R, `t.test()` uses Welch’s t-test as the default. In SciPy, you must explicitly set `equal_var=False`.',
    tags: ['Welch t-Test', 'equal_var=False', 'Robust Statistics', 'A/B Testing', 'PCAD-31-02']
  }
];
