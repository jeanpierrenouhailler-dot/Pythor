import { Flashcard } from '../types';

export const pcadSection3CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 3.4 CONTINUED: HYPOTHESIS TESTING & COMPARISONS [Cards 71-80]
  // =========================================================================
  {
    id: 'pcad-sec3-071',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Parametric Tests',
    topic: 'Paired Samples t-Test for Repeated Measures (ttest_rel)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'When analyzing user response times before and after a UI speed optimization on the exact same group of 50 users, why must a Paired t-Test (`ttest_rel`) be used instead of an independent two-sample t-test?',
    codeSnippet: `from scipy import stats

# Pre-test and post-test measurements on the SAME users:
t_stat, p_val = stats.ttest_rel(before_times, after_times)`,
    options: [
      'The paired t-test calculates differences within each individual subject (d_i = post_i - pre_i), eliminating subject-to-subject baseline variance and dramatically increasing statistical power',
      'Because independent t-tests cannot run on more than 30 users',
      'Because response times can never be negative',
      'Paired t-tests are exclusively used for animal studies'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The paired t-test calculates differences within each individual subject (d_i = post_i - pre_i), eliminating subject-to-subject baseline variance and dramatically increasing statistical power',
    explanationTitle: 'Paired Samples t-Test Advantage',
    explanationText:
      'In repeated-measures or matched-pair designs, each subject acts as their own control. By analyzing the difference scores $d_i = x_{1i} - x_{2i}$, the paired t-test controls for inter-individual differences, resulting in a much smaller standard error and higher power to detect true treatment effects.',
    deepDive:
      'A paired t-test on two arrays `stats.ttest_rel(a, b)` is mathematically identical to a one-sample t-test on their differences: `stats.ttest_1samp(a - b, 0)`.',
    tags: ['Paired t-Test', 'ttest_rel', 'Repeated Measures', 'scipy.stats', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-072',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Statistical Assumptions',
    topic: 'Assumptions Governing Student’s t-Tests',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Which set of assumptions must be verified before relying on the validity of an independent Student’s two-sample t-test?',
    codeSnippet: `# Four Core Assumptions of Student's t-Test:
# 1. Continuous Scale (Interval or Ratio data)
# 2. Random Sampling and Independence of observations
# 3. Normality of the distribution (or large sample n >= 30 by CLT)
# 4. Homoscedasticity (Equal variances between groups)`,
    options: [
      'Continuous scale, independent random sampling, approximate normality of populations (or large n via CLT), and homogeneity of variances',
      'Categorical data, identical sample sizes, and zero variance',
      'Normal distribution, uniform distribution, and Poisson distribution simultaneously',
      'Linear regression with R^2 > 0.9'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Continuous scale, independent random sampling, approximate normality of populations (or large n via CLT), and homogeneity of variances',
    explanationTitle: 't-Test Foundational Assumptions',
    explanationText:
      'Violating independence (e.g. cluster sampling or temporal autocorrelation) is the most severe flaw. Violating normality is mitigated by the CLT for $n \ge 30$, but severe skewness with small $n$ requires non-parametric alternatives (Mann-Whitney U). Violating equal variance is solved by Welch’s t-test.',
    deepDive:
      'Ordinal Likert-scale data (1 to 5 ratings) strictly violates the continuous scale assumption, though frequently analyzed with t-tests in industry.',
    tags: ['t-Test Assumptions', 'Normality', 'Homoscedasticity', 'Independence', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-073',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Normality Testing',
    topic: 'Shapiro-Wilk Test and Q-Q Probability Plots',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'How do you formally test whether a sample dataset departs significantly from normality using the Shapiro-Wilk test, and how do you interpret its $p$-value?',
    codeSnippet: `from scipy import stats

stat, p_val = stats.shapiro(data)
# H0: The data is normally distributed.
# H1: The data significantly deviates from normality.

if p_val < 0.05:
    print("Reject H0: Data is significantly NON-NORMAL (violation!)")
else:
    print("Fail to reject H0: Cannot reject normality assumption")`,
    options: [
      'stats.shapiro(data); a p-value < 0.05 rejects the null hypothesis, indicating significant departure from normality',
      'stats.shapiro(data); a p-value < 0.05 proves the data is perfectly normal',
      'stats.normality_check(data)',
      'stats.qq_plot(data).p_value'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'stats.shapiro(data); a p-value < 0.05 rejects the null hypothesis, indicating significant departure from normality',
    explanationTitle: 'Testing Normality via Shapiro-Wilk and Q-Q Plots',
    explanationText:
      'The Shapiro-Wilk test is the most powerful omnibus normality test for sample sizes $n < 5000$. Because formal tests can reject normality on trivial departures when $n$ is very large, statisticians visually verify normality using Quantile-Quantile (Q-Q) plots (`stats.probplot(data, plot=plt)`), where normal data falls tightly along a 45-degree diagonal.',
    deepDive:
      'For larger samples ($n > 5000$), use the D’Agostino-Pearson omnibus test: `scipy.stats.normaltest(data)`.',
    tags: ['Shapiro-Wilk', 'Normality Testing', 'Q-Q Plot', 'scipy.stats', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-074',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Variance Testing',
    topic: 'Testing Equal Variances: Levene’s Test vs. Bartlett’s Test',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Why is Levene’s test preferred over Bartlett’s test when checking for equal variances (homoscedasticity) across groups in real-world data?',
    codeSnippet: `from scipy import stats

# Levene's test using median (Brown-Forsythe robust variant):
stat, p_val = stats.levene(group_a, group_b, center='median')
# H0: Variances are equal across groups (homoscedastic).
# H1: Variances are significantly unequal (heteroscedastic).`,
    options: [
      'Levene’s test (especially centered at the median) is robust to non-normal distributions; Bartlett’s test is notoriously sensitive to even slight non-normality and falsely rejects equal variances',
      'Bartlett’s test only accepts integer data',
      'Levene’s test runs in parallel on multiple GPUs',
      'Bartlett’s test is deprecated in Python 3'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Levene’s test (especially centered at the median) is robust to non-normal distributions; Bartlett’s test is notoriously sensitive to even slight non-normality and falsely rejects equal variances',
    explanationTitle: 'Homoscedasticity via Levene’s Test',
    explanationText:
      'Bartlett’s test conflates non-normality with unequal variance: if data is leptokurtic or skewed, Bartlett’s test rejects $H_0$ even if true population variances are identical. Levene’s test with `center="median"` (the Brown-Forsythe test) is robust against distributional departures.',
    deepDive:
      'If Levene’s test yields $p < 0.05$, use Welch’s t-test or Welch’s ANOVA instead of standard pooled models.',
    tags: ['Levene Test', 'Bartlett Test', 'Homoscedasticity', 'Variance Testing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-075',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Non-Parametric Tests',
    topic: 'Mann-Whitney U Test (Wilcoxon Rank-Sum)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'When comparing two independent groups where data is severely skewed or ordinal, which non-parametric test replaces the independent two-sample t-test?',
    codeSnippet: `from scipy import stats

# Non-parametric comparison of two independent groups:
u_stat, p_val = stats.mannwhitneyu(group_a, group_b, alternative='two-sided')`,
    options: [
      'The Mann-Whitney U test (Wilcoxon Rank-Sum test), which tests whether the distribution of one group is stochastically greater than the other by evaluating ranked values',
      'The Chi-Square test of independence',
      'The Pearson correlation test',
      'The Paired Student\'s t-test'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The Mann-Whitney U test (Wilcoxon Rank-Sum test), which tests whether the distribution of one group is stochastically greater than the other by evaluating ranked values',
    explanationTitle: 'Mann-Whitney U Non-Parametric Test',
    explanationText:
      'The Mann-Whitney U test pools and ranks all observations across both groups ($1$ to $N$). If the groups have similar distributions, the average rank in both groups will be comparable. It makes no assumptions regarding normality or variance homogeneity, making it ideal for skewed metrics (e.g. revenue per user, app ratings).',
    deepDive:
      'If the two distributions have the same shape, the Mann-Whitney U test functions as a test of difference in medians.',
    tags: ['Mann-Whitney U', 'Non-Parametric', 'Rank-Sum', 'Robust Testing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-076',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Non-Parametric Tests',
    topic: 'Wilcoxon Signed-Rank Test for Paired Data',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'When paired difference scores ($d_i = \text{post}_i - \text{pre}_i$) violate the normality assumption, which non-parametric test replaces the paired t-test?',
    codeSnippet: `from scipy import stats

# Non-parametric paired comparison:
stat, p_val = stats.wilcoxon(pre_scores, post_scores)`,
    options: [
      'The Wilcoxon Signed-Rank test, which ranks the absolute differences between pairs and attaches signs (+ or -) to determine if median differences deviate from zero',
      'The Kruskal-Wallis test',
      'The Chi-Square goodness-of-fit test',
      'The Kolmogorov-Smirnov test'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The Wilcoxon Signed-Rank test, which ranks the absolute differences between pairs and attaches signs (+ or -) to determine if median differences deviate from zero',
    explanationTitle: 'Wilcoxon Signed-Rank Test',
    explanationText:
      'The Wilcoxon Signed-Rank test is the non-parametric counterpart to the paired t-test. It discards zero differences, ranks the absolute magnitude of non-zero differences $|d_i|$, sums the ranks with positive vs negative signs, and evaluates whether one direction significantly dominates.',
    deepDive:
      'Requires difference scores to be at least ordinal and symmetric around the median.',
    tags: ['Wilcoxon Signed-Rank', 'Non-Parametric', 'Paired Data', 'scipy.stats', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-077',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'ANOVA',
    topic: 'One-Way Analysis of Variance (ANOVA) with f_oneway',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Why should an analyst use One-Way ANOVA to compare mean sales across 4 regional marketing teams (A, B, C, D) instead of running 6 individual two-sample t-tests?',
    codeSnippet: `from scipy import stats

# One-Way ANOVA comparing 4 groups simultaneously:
f_stat, p_val = stats.f_oneway(group_a, group_b, group_c, group_d)`,
    options: [
      'Running 6 separate t-tests causes catastrophic inflation of the Family-Wise Error Rate (alpha compounding to 1 - (0.95)^6 ≈ 26.5% false positive risk); ANOVA evaluates all group means in a single omnibus test',
      'Because t-tests cannot run on datasets with letters as names',
      'ANOVA calculates the median instead of the mean',
      'ANOVA is only used for image processing'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Running 6 separate t-tests causes catastrophic inflation of the Family-Wise Error Rate (alpha compounding to 1 - (0.95)^6 ≈ 26.5% false positive risk); ANOVA evaluates all group means in a single omnibus test',
    explanationTitle: 'One-Way ANOVA and Alpha Inflation',
    explanationText:
      'The number of pairwise comparisons across $k$ groups is $\binom{k}{2} = \frac{k(k-1)}{2}$. For 4 groups, 6 comparisons at $\alpha = 0.05$ creates a $\approx 26.5\%$ chance of at least one false positive. ANOVA compares between-group variance to within-group variance ($F = \frac{MS_{between}}{MS_{within}}$) in a single omnibus test.',
    deepDive:
      'A significant ANOVA ($p < 0.05$) only indicates that AT LEAST ONE group differs from the others; it does not tell you WHICH specific pairs differ.',
    tags: ['ANOVA', 'f_oneway', 'F-Test', 'Family-Wise Error', 'Alpha Inflation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-078',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Post-Hoc Testing',
    topic: 'Tukey’s Honestly Significant Difference (HSD) Post-Hoc Test',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'After a One-Way ANOVA rejects the null hypothesis ($p < 0.05$), how do you determine which specific group pairs have statistically significant differences using Tukey’s HSD in `statsmodels`?',
    codeSnippet: `from statsmodels.stats.multicomp import pairwise_tukeyhsd
import pandas as pd

# Pairwise comparisons with Family-Wise Error Rate control:
tukey = pairwise_tukeyhsd(endog=df['sales'], groups=df['region'], alpha=0.05)
print(tukey.summary())`,
    options: [
      'Execute statsmodels.stats.multicomp.pairwise_tukeyhsd, which performs all pairwise comparisons using the studentized range statistic, controlling the family-wise error rate at 0.05',
      'Run t-tests with alpha = 0.50',
      'Sort the groups by mean and pick the top two',
      'Fit a polynomial regression curve'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Execute statsmodels.stats.multicomp.pairwise_tukeyhsd, which performs all pairwise comparisons using the studentized range statistic, controlling the family-wise error rate at 0.05',
    explanationTitle: 'Tukey’s HSD Post-Hoc Analysis',
    explanationText:
      'Tukey’s HSD calculates simultaneous confidence intervals for all pairwise mean differences. The summary output displays mean difference (`meandiff`), adjusted $p$-value (`p-adj`), confidence interval bounds (`lower`, `upper`), and a boolean flag (`reject = True/False`) indicating statistical significance.',
    deepDive:
      'If sample sizes per group are unequal, Tukey’s HSD automatically generalizes into the Tukey-Kramer method.',
    tags: ['Tukey HSD', 'Post-Hoc', 'pairwise_tukeyhsd', 'statsmodels', 'ANOVA', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-079',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Non-Parametric Tests',
    topic: 'Kruskal-Wallis H-Test (Non-Parametric ANOVA)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'When comparing 3 or more independent groups where data is ordinal or violates normality and equal variance assumptions, which non-parametric test is used?',
    codeSnippet: `from scipy import stats

# Non-parametric comparison of 3+ independent groups:
h_stat, p_val = stats.kruskal(group_1, group_2, group_3)`,
    options: [
      'The Kruskal-Wallis H-test, which ranks all observations across all groups and evaluates whether the median ranks differ significantly',
      'The Welch t-test',
      'The Paired Wilcoxon test',
      'The McNemar test'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The Kruskal-Wallis H-test, which ranks all observations across all groups and evaluates whether the median ranks differ significantly',
    explanationTitle: 'Kruskal-Wallis Non-Parametric ANOVA',
    explanationText:
      'The Kruskal-Wallis test generalizes the two-sample Mann-Whitney U test to 3 or more groups. It converts raw continuous metrics into ranks, computing an $H$-statistic that approximately follows a $\chi^2$ distribution with $k - 1$ degrees of freedom. If $p < 0.05$, follow up with Dunn’s post-hoc test.',
    deepDive:
      'Dunn’s test with Bonferroni correction is the standard non-parametric post-hoc test following a significant Kruskal-Wallis result.',
    tags: ['Kruskal-Wallis', 'Non-Parametric ANOVA', 'scipy.stats', 'kruskal', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-080',
    section: 'Section 3',
    chapter: '3.4',
    track: 'pcad',
    cardType: 'Multiple Testing',
    topic: 'Controlling Multiple Testing: Bonferroni vs. Benjamini-Hochberg (FDR)',
    category: 'Statistical Analysis',
    difficulty: 'advanced',
    question: 'When screening 1,000 marketing features for statistically significant differences, why is the Benjamini-Hochberg False Discovery Rate (FDR) preferred over the ultra-conservative Bonferroni correction?',
    codeSnippet: `from statsmodels.stats.multitest import multipletests

# Adjust 1,000 raw p-values:
# Bonferroni divides alpha by m: 0.05 / 1000 = 0.00005 (extreme false negatives!)
# Benjamini-Hochberg controls the expected proportion of false discoveries:
rejected, p_adjusted, _, _ = multipletests(p_values, alpha=0.05, method='fdr_bh')`,
    options: [
      'Bonferroni controls the Family-Wise Error Rate (FWER) so strictly that it causes catastrophic loss of statistical power (massive false negatives); Benjamini-Hochberg controls False Discovery Rate (FDR), balancing discovery with error control',
      'Bonferroni only works if all p-values are identical',
      'Benjamini-Hochberg converts p-values into Z-scores',
      'Both methods produce identical results'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Bonferroni controls the Family-Wise Error Rate (FWER) so strictly that it causes catastrophic loss of statistical power (massive false negatives); Benjamini-Hochberg controls False Discovery Rate (FDR), balancing discovery with error control',
    explanationTitle: 'FWER vs. False Discovery Rate (FDR)',
    explanationText:
      'When testing $m = 1000$ hypotheses, Bonferroni requires $p < \frac{0.05}{1000} = 0.00005$, destroying power to find real effects. The Benjamini-Hochberg procedure controls the expected proportion of false positives among rejected tests ($Q = 0.05$ guarantees that no more than 5% of discovered significant features are false alarms), making it standard for high-dimensional feature screening.',
    deepDive:
      'In Python: `statsmodels.stats.multitest.multipletests(pvals, method="fdr_bh")`.',
    tags: ['Multiple Comparisons', 'Bonferroni', 'Benjamini-Hochberg', 'FDR', 'FWER', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 3.5: CATEGORICAL TESTS, REGRESSION & APPLIED STATS [Cards 81-100]
  // =========================================================================
  {
    id: 'pcad-sec3-081',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Categorical Tests',
    topic: 'Chi-Square Goodness-of-Fit Test with chisquare',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'How do you test whether a 6-sided die is fair after rolling it 600 times and observing counts `[90, 110, 85, 120, 95, 100]` using `scipy.stats.chisquare`?',
    codeSnippet: `from scipy import stats

observed = [90, 110, 85, 120, 95, 100]
# Fair die: Expected count = 600 / 6 = 100 per face
chi2_stat, p_val = stats.chisquare(f_obs=observed)
print(f"Chi2: {chi2_stat:.2f}, p-value: {p_val:.4f}")`,
    options: [
      'stats.chisquare(f_obs=observed) compares observed counts against equal uniform expected counts using the Chi-Square statistic sum((O - E)^2 / E)',
      'stats.ttest_1samp(observed, 100)',
      'stats.binom_test(observed)',
      'stats.f_oneway(observed)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'stats.chisquare(f_obs=observed) compares observed counts against equal uniform expected counts using the Chi-Square statistic sum((O - E)^2 / E)',
    explanationTitle: 'Chi-Square Goodness-of-Fit Mechanics',
    explanationText:
      'The goodness-of-fit test evaluates whether an observed categorical frequency distribution matches an expected theoretical distribution. The test statistic is $\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$ with $k - 1$ degrees of freedom. By default, `stats.chisquare` assumes equal expected frequencies across all categories.',
    deepDive:
      'You can specify non-uniform expected proportions by passing the `f_exp` array parameter.',
    tags: ['Chi-Square', 'Goodness-of-Fit', 'chisquare', 'Categorical', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-082',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Categorical Tests',
    topic: 'Chi-Square Test of Independence with chi2_contingency',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'How do you determine if customer subscription tier (Basic, Pro, Enterprise) is statistically independent of device type (Mobile, Desktop) using `scipy.stats.chi2_contingency`?',
    codeSnippet: `from scipy import stats
import numpy as np

# 2x3 Contingency Table:
# Rows: Mobile, Desktop. Columns: Basic, Pro, Enterprise
table = np.array([
    [120, 50, 30],  # Mobile
    [80,  70, 50]   # Desktop
])

chi2_stat, p_val, dof, expected = stats.chi2_contingency(table)
print(f"p-value: {p_val:.4f}")`,
    options: [
      'stats.chi2_contingency(table) calculates expected frequencies E = (Row_Total * Col_Total) / Grand_Total, computing the Chi-Square test of independence',
      'stats.ttest_ind(table[0], table[1])',
      'stats.f_oneway(table)',
      'stats.mannwhitneyu(table)'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'stats.chi2_contingency(table) calculates expected frequencies E = (Row_Total * Col_Total) / Grand_Total, computing the Chi-Square test of independence',
    explanationTitle: 'Chi-Square Test of Independence',
    explanationText:
      'The test of independence assesses whether two categorical variables are related. It generates expected cell frequencies under the null hypothesis of independence: $E_{ij} = \frac{R_i C_j}{N}$. Degrees of freedom equal $(r - 1)(c - 1)$. If $p < 0.05$, device type and subscription tier are dependent.',
    deepDive:
      'Rule of thumb assumption: all expected cell counts $E_{ij}$ should be $\ge 5$. If expected counts are smaller, use Fisher\'s exact test.',
    tags: ['Chi-Square', 'chi2_contingency', 'Independence', 'Contingency Table', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-083',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Categorical Tests',
    topic: 'Fisher’s Exact Test for Small Contingency Tables',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Why must Fisher’s Exact Test (`scipy.stats.fisher_exact`) be used instead of the Chi-Square test for a $2 \times 2$ table with small cell counts (e.g. expected frequency $< 5$)?',
    codeSnippet: `from scipy import stats

# 2x2 table with small counts:
# Rare adverse drug reactions:
table = [[3, 1], 
         [1, 15]]

odds_ratio, p_val = stats.fisher_exact(table)
print(f"Fisher Exact p-value: {p_val:.4f}")`,
    options: [
      'The Chi-Square test relies on a continuous asymptotic approximation that breaks down when expected cell frequencies are below 5; Fisher’s Exact Test calculates the exact hypergeometric probability of the table',
      'Fisher\'s test is faster on big data',
      'Fisher\'s test converts data to continuous variables',
      'Chi-Square cannot run on 2x2 tables'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The Chi-Square test relies on a continuous asymptotic approximation that breaks down when expected cell frequencies are below 5; Fisher’s Exact Test calculates the exact hypergeometric probability of the table',
    explanationTitle: 'Fisher’s Exact Test Mechanics',
    explanationText:
      'When table counts are small, the continuous $\chi^2$ distribution poorly approximates the true discrete distribution. Sir Ronald Fisher formulated an exact permutation test based on the hypergeometric distribution, conditioning on the marginal totals. It returns an exact $p$-value and Odds Ratio without approximation error.',
    deepDive:
      'By default in SciPy, `stats.fisher_exact` runs a two-sided test using `alternative="two-sided"`.',
    tags: ['Fisher Exact', 'fisher_exact', 'Small Samples', 'Hypergeometric', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-084',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Effect Size',
    topic: 'Cohen’s d for Standardized Mean Difference',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'What is Cohen’s $d$, and how are values of $d = 0.2$, $d = 0.5$, and $d = 0.8$ conventionally interpreted in behavioral and analytical research?',
    codeSnippet: `# Cohen's d formula:
# d = (mean_1 - mean_2) / pooled_standard_deviation
# Standard benchmarks:
# d = 0.2 -> Small effect size
# d = 0.5 -> Medium effect size
# d = 0.8 -> Large effect size`,
    options: [
      'Cohen’s d is the difference between two means divided by the pooled standard deviation; 0.2 is small, 0.5 is medium, and 0.8 is large',
      'Cohen’s d is the p-value divided by sample size',
      '0.2 is large, 0.5 is small, and 0.8 is zero',
      'Cohen’s d is only defined for categorical variables'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Cohen’s d is the difference between two means divided by the pooled standard deviation; 0.2 is small, 0.5 is medium, and 0.8 is large',
    explanationTitle: 'Standardized Effect Size via Cohen’s d',
    explanationText:
      'A $p$-value indicates whether an effect is statistically distinguishable from zero, but reveals nothing about magnitude. Cohen’s $d$ standardizes the difference into standard deviation units. $d = 0.5$ means the treatment group mean is half a standard deviation higher than the control group.',
    deepDive:
      'Unlike $p$-values, Cohen’s $d$ does NOT inflate with larger sample sizes $n$; it estimates the true physical magnitude of the phenomenon.',
    tags: ['Cohen d', 'Effect Size', 'Standardized Difference', 'Benchmarks', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-085',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Effect Size',
    topic: 'Effect Size for Contingency Tables: Cramér’s V',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'How does Cramér’s $V$ measure the strength of association between two categorical variables in a contingency table?',
    codeSnippet: `import numpy as np

# Cramér's V Formula:
# V = sqrt( chi2 / (n * min(r - 1, c - 1)) )
# Bounded strictly between 0.0 (no association) and 1.0 (perfect association)`,
    options: [
      'It rescales the Chi-Square statistic by sample size n and table dimensions into a normalized metric bounded between 0.0 (no association) and 1.0 (complete association)',
      'It computes the ratio of means',
      'It is identical to Pearson r',
      'It calculates the probability that chi-square is negative'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'It rescales the Chi-Square statistic by sample size n and table dimensions into a normalized metric bounded between 0.0 (no association) and 1.0 (complete association)',
    explanationTitle: 'Cramér’s V for Categorical Association',
    explanationText:
      'The raw $\chi^2$ statistic grows infinitely with sample size $n$. Cramér’s $V = \sqrt{\frac{\chi^2}{n \cdot \min(r-1, c-1)}}$ normalizes it. In a $2 \times 2$ table, Cramér’s $V$ simplifies to the Phi coefficient ($\phi$). Values $> 0.3$ represent strong categorical association.',
    deepDive:
      'For a $2 \times 2$ table, $\phi = \sqrt{\chi^2 / n}$.',
    tags: ['Cramer V', 'Categorical Association', 'Effect Size', 'Contingency Table', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-086',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Risk Metrics',
    topic: 'Relative Risk (RR) vs. Odds Ratio (OR)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'In epidemiology and conversion studies, what is the mathematical difference between Relative Risk ($RR$) and Odds Ratio ($OR$)?',
    codeSnippet: `# Treatment: 10 conversions out of 100 (Risk = 10/100 = 0.10; Odds = 10/90 = 0.111)
# Control:   5 conversions out of 100 (Risk = 5/100 = 0.05;  Odds = 5/95 = 0.0526)
# Relative Risk (RR) = Risk_T / Risk_C = 0.10 / 0.05 = 2.0 (Double the probability!)
# Odds Ratio (OR) = Odds_T / Odds_C = (10/90) / (5/95) = 2.11`,
    options: [
      'Relative Risk is the ratio of probabilities (Risk = events / total); Odds Ratio is the ratio of odds (Odds = events / non-events). When events are rare, OR closely approximates RR',
      'RR is for numbers; OR is for categories',
      'OR is always less than 1.0',
      'Relative Risk cannot be calculated if control group has conversions'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Relative Risk is the ratio of probabilities (Risk = events / total); Odds Ratio is the ratio of odds (Odds = events / non-events). When events are rare, OR closely approximates RR',
    explanationTitle: 'Relative Risk vs. Odds Ratio',
    explanationText:
      'Risk is intuitive: $P = \frac{A}{A + B}$. Odds is the ratio of wins to losses: $\text{Odds} = \frac{A}{B} = \frac{P}{1 - P}$. In case-control studies where baseline incidence is unknown, Relative Risk cannot be computed, but Odds Ratios can. When disease incidence is rare ($< 5\%$), the "Rare Disease Assumption" ensures $OR \approx RR$.',
    deepDive:
      'Logistic regression coefficients exponentiate to Odds Ratios ($e^\beta = OR$), not Relative Risks.',
    tags: ['Relative Risk', 'Odds Ratio', 'RR', 'OR', 'Epidemiology', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-087',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Linear Regression',
    topic: 'Simple Linear Regression & Ordinary Least Squares (OLS)',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'In the Ordinary Least Squares (OLS) regression equation $y = \beta_0 + \beta_1 x + \epsilon$, what criterion does OLS minimize to fit the optimal line?',
    codeSnippet: `# OLS Minimization Objective:
# Minimize the Sum of Squared Residuals (SSR):
# SSR = sum( (y_i - y_hat_i)^2 )`,
    options: [
      'The sum of the squared vertical differences (residuals) between the observed values y_i and the fitted line y_hat_i',
      'The sum of the absolute differences',
      'The horizontal distance between points',
      'The slope of the line'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'The sum of the squared vertical differences (residuals) between the observed values y_i and the fitted line y_hat_i',
    explanationTitle: 'Ordinary Least Squares (OLS) Criterion',
    explanationText:
      'OLS seeks coefficients $\beta_0$ (intercept) and $\beta_1$ (slope) that minimize $\sum_{i=1}^n e_i^2 = \sum (y_i - (\beta_0 + \beta_1 x_i))^2$. Squaring ensures positive and negative errors don’t cancel each other out, while heavily penalizing large outliers.',
    deepDive:
      'The closed-form analytical solution for the slope is $\hat{\beta}_1 = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2} = r \frac{s_y}{s_x}$.',
    tags: ['Linear Regression', 'OLS', 'Least Squares', 'Residuals', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-088',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Regression Assumptions',
    topic: 'Assumptions of Classical OLS Regression (LINE Mnemonic)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Which four core assumptions are summarized by the classic "LINE" mnemonic for Ordinary Least Squares linear regression?',
    codeSnippet: `# LINE Mnemonic for OLS Assumptions:
# L - Linearity of the relationship between X and Y
# I - Independence of residual errors (no autocorrelation)
# N - Normality of residuals (errors are normally distributed)
# E - Equal variance of residuals (Homoscedasticity across all fitted values)`,
    options: [
      'Linearity, Independence of errors, Normality of residuals, and Equal variance of residuals (Homoscedasticity)',
      'Limits, Infinity, Numbers, and Equations',
      'Logarithms, Integrals, Networks, and Estimators',
      'Least squares, Intercept, Normalization, and Evaluation'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Linearity, Independence of errors, Normality of residuals, and Equal variance of residuals (Homoscedasticity)',
    explanationTitle: 'The LINE Assumptions of Linear Regression',
    explanationText:
      'For OLS coefficients to be BLUE (Best Linear Unbiased Estimator under Gauss-Markov): 1. Linearity; 2. Independence of errors (violated in time series); 3. Normality of residuals (needed for valid $p$-values and CIs); 4. Equal variance (heteroscedasticity causes invalid standard errors).',
    deepDive:
      'Notice that OLS does NOT require the independent variable $X$ or dependent variable $Y$ to be normally distributed; only the RESIDUALS $\epsilon$ must be normal!',
    tags: ['Regression Assumptions', 'LINE', 'Homoscedasticity', 'Gauss-Markov', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-089',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Residual Diagnostics',
    topic: 'Residual Analysis: Detecting Heteroscedasticity',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'When inspecting a "Residuals vs. Fitted Values" plot, what does a distinct "fan" or "megaphone" shape (residuals fanning outward as fitted values increase) diagnose?',
    codeSnippet: `# Residual vs Fitted Plot:
# Ideal: Random cloud of points centered around 0 with constant width.
# Fan / Megaphone shape:
# Residual spread expands at higher fitted values -> HETEROSCEDASTICITY!`,
    options: [
      'Heteroscedasticity (non-constant variance); residual error variance expands at higher predictions, violating the equal variance assumption and invalidating standard errors',
      'Perfect linear fit with R^2 = 1.0',
      'Severe negative autocorrelation',
      'Multicollinearity among predictors'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Heteroscedasticity (non-constant variance); residual error variance expands at higher predictions, violating the equal variance assumption and invalidating standard errors',
    explanationTitle: 'Diagnosing Heteroscedasticity',
    explanationText:
      'A funnel or megaphone pattern in residuals indicates heteroscedasticity (common in wealth or price data, where high-income variance dwarfs low-income variance). Fixes include log-transforming the dependent variable ($\ln(y)$) or using Heteroscedasticity-Consistent (HC) robust standard errors (White’s standard errors).',
    deepDive:
      'Formally test for heteroscedasticity using the Breusch-Pagan test: `statsmodels.stats.diagnostic.het_breuschpagan`.',
    tags: ['Heteroscedasticity', 'Residual Analysis', 'Diagnostics', 'Breusch-Pagan', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-090',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Regression Metrics',
    topic: 'Coefficient of Determination (R^2)',
    category: 'Statistical Analysis',
    difficulty: 'beginner',
    question: 'An OLS linear regression model predicting sales from advertising spend reports $R^2 = 0.81$. What does this value mean?',
    codeSnippet: `# R-squared = 1 - (SSR / SST) = 0.81
# SST = Total Sum of Squares (baseline variance around y_bar)
# SSR = Residual Sum of Squares (unexplained error)`,
    options: [
      '81% of the total variance in sales is explained by advertising spend through the linear regression model; 19% remains unexplained residual variance',
      'Advertising causes 81% of customer decisions',
      'The model has an 81% chance of making an error',
      'The correlation coefficient r is 0.81'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: '81% of the total variance in sales is explained by advertising spend through the linear regression model; 19% remains unexplained residual variance',
    explanationTitle: 'Interpreting R-Squared (R^2)',
    explanationText:
      '$R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}$ quantifies the proportion of total variance in the dependent variable explained by the regression model. In simple bivariate regression, $R^2$ is exactly the square of Pearson’s correlation coefficient: $R^2 = r^2$ ($0.9^2 = 0.81$).',
    deepDive:
      'A high $R^2$ does not mean the model is correctly specified; an omitted variable or non-linear curve can still exhibit high $R^2$.',
    tags: ['R-Squared', 'Coefficient of Determination', 'Variance Explained', 'OLS', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-091',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Multiple Regression',
    topic: 'Adjusted R^2 vs. Standard R^2',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Why should modelers evaluate Adjusted $R^2$ rather than standard $R^2$ when adding new independent predictor variables to a Multiple Linear Regression model?',
    codeSnippet: `# Adjusted R^2 Formula:
# R^2_adj = 1 - [ (1 - R^2) * (n - 1) / (n - k - 1) ]
# Standard R^2 NEVER decreases when new predictors are added, even if they are pure random noise!
# Adjusted R^2 penalizes models for adding useless features!`,
    options: [
      'Standard R^2 mathematically never decreases when additional predictors are added, incentivizing overfitting; Adjusted R^2 imposes a penalty for each additional parameter k, increasing only if the new feature improves fit more than expected by chance',
      'Adjusted R^2 converts R^2 into a percentage',
      'Standard R^2 cannot be computed with more than 2 variables',
      'Adjusted R^2 is only used when the sample size is less than 10'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Standard R^2 mathematically never decreases when additional predictors are added, incentivizing overfitting; Adjusted R^2 imposes a penalty for each additional parameter k, increasing only if the new feature improves fit more than expected by chance',
    explanationTitle: 'Adjusted R-Squared and Overfitting Control',
    explanationText:
      'Adding irrelevant random noise variables to an OLS model slightly fits random sample quirks, artificially inflating raw $R^2$. Adjusted $R^2$ penalizes for degrees of freedom lost ($n - k - 1$). If an added variable does not meaningfully improve the model, Adjusted $R^2$ declines.',
    deepDive:
      'Unlike standard $R^2$ which is strictly $[0, 1]$, Adjusted $R^2$ can occasionally be negative if model fit is worse than a horizontal flat mean line.',
    tags: ['Adjusted R-Squared', 'Multiple Regression', 'Overfitting', 'Model Selection', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-092',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Multicollinearity',
    topic: 'Multicollinearity & Variance Inflation Factor (VIF)',
    category: 'Statistical Analysis',
    difficulty: 'advanced',
    question: 'What is Multicollinearity in multiple regression, and what Variance Inflation Factor (VIF) threshold indicates severe multicollinearity that distorts coefficient estimates?',
    codeSnippet: `from statsmodels.stats.outliers_influence import variance_inflation_factor

# VIF formula: VIF_i = 1 / (1 - R_i^2)
# Where R_i^2 is the R^2 from regressing feature X_i on all OTHER predictors.
# Benchmark: VIF > 5 or VIF > 10 indicates severe multicollinearity!`,
    options: [
      'Multicollinearity occurs when independent predictor variables are highly correlated with each other; a VIF > 5 or VIF > 10 indicates severe inflation of coefficient standard errors, making estimates unstable',
      'Multicollinearity occurs when y is correlated with x; VIF should be exactly 0',
      'Multicollinearity means the residuals are non-normal; VIF > 1.0 is an error',
      'VIF measures CPU memory consumption during matrix inversion'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Multicollinearity occurs when independent predictor variables are highly correlated with each other; a VIF > 5 or VIF > 10 indicates severe inflation of coefficient standard errors, making estimates unstable',
    explanationTitle: 'Multicollinearity and Variance Inflation Factor (VIF)',
    explanationText:
      'When two predictors provide redundant information (e.g. `square_meters` and `square_feet`), the regression cannot isolate their individual partial effects. Coefficient standard errors blow up, $p$-values become insignificant, and signs can invert. A VIF of 10 indicates $R_i^2 = 0.90$ with other features.',
    deepDive:
      'Solve multicollinearity by dropping one of the redundant variables, using Principal Component Analysis (PCA), or applying Ridge / Lasso regularization.',
    tags: ['Multicollinearity', 'VIF', 'Variance Inflation Factor', 'Regression Diagnostics', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-093',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Statsmodels Regression',
    topic: 'OLS Regression Modeling with statsmodels.formula.api',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'How do you specify, fit, and inspect an OLS regression in Python using R-style formulas with `statsmodels`?',
    codeSnippet: `import statsmodels.formula.api as smf

# Formula: y ~ x1 + x2
model = smf.ols(formula='revenue ~ ad_spend + discount_pct', data=df).fit()
print(model.summary()) # Detailed regression table!`,
    options: [
      'smf.ols(formula="revenue ~ ad_spend + discount_pct", data=df).fit() compiles the design matrix, estimates parameters, and provides model.summary()',
      'model = smf.fit_regression(df, y="revenue")',
      'model = df.ols("revenue ~ ad_spend")',
      'smf.linear_model(revenue, [ad_spend, discount_pct])'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'smf.ols(formula="revenue ~ ad_spend + discount_pct", data=df).fit() compiles the design matrix, estimates parameters, and provides model.summary()',
    explanationTitle: 'Statsmodels OLS with R-Style Formulas',
    explanationText:
      '`statsmodels.formula.api` (Patsy) parses strings like "\'y ~ x1 + x2\'", automatically adds an intercept constant $\\beta_0$, and encodes categorical variables into dummy variables. The `.summary()` table reports coefficients, standard errors, $t$-statistics, $p$-values ($P > |t|$), and confidence intervals.',
    deepDive:
      'To interact two variables, use the colon `:` or multiplication `*` operator (e.g. "\'y ~ x1 * x2\'" includes main effects and interaction).',
    tags: ['statsmodels', 'smf.ols', 'Formulas', 'Regression Summary', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-094',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Logistic Regression',
    topic: 'Logistic Regression & The Logit Link Function',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'Why can’t standard OLS linear regression be used directly to predict binary probabilities ($y \in \{0, 1\}$), and how does Logistic Regression solve this?',
    codeSnippet: `# OLS Linear Probability Model flaw:
# Can predict probabilities < 0.0 or > 1.0 (e.g. Probability = 1.45 - nonsensical!)

# Logistic Regression solves this using the Logit (Sigmoid) Link:
# p = 1 / (1 + e^-(beta_0 + beta_1*x))
# S-curve maps (-infinity, +infinity) strictly into [0.0, 1.0]!`,
    options: [
      'OLS produces unbounded predictions below 0 or above 1 and violates normality of residuals; Logistic regression uses the Logit link (sigmoid function) to map linear inputs strictly into valid probabilities [0, 1]',
      'OLS cannot run on datasets with numbers 0 and 1',
      'Logistic regression requires only 1 data point',
      'Logistic regression converts numbers into logarithms'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'OLS produces unbounded predictions below 0 or above 1 and violates normality of residuals; Logistic regression uses the Logit link (sigmoid function) to map linear inputs strictly into valid probabilities [0, 1]',
    explanationTitle: 'The Logit Link and Sigmoid Function',
    explanationText:
      'The linear probability model $p = \beta_0 + \beta_1 x$ fails because probabilities must be bounded in $[0, 1]$ and residuals are heteroscedastic. Logistic regression models the log-odds (logit): $\ln(\frac{p}{1-p}) = \beta_0 + \beta_1 x$. Inverting this yields the sigmoid curve $p = \frac{1}{1 + e^{-z}}$.',
    deepDive:
      'Parameters are estimated using Maximum Likelihood Estimation (MLE) rather than Ordinary Least Squares.',
    tags: ['Logistic Regression', 'Logit', 'Sigmoid', 'Binary Classification', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-095',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Logistic Regression',
    topic: 'Interpreting Logistic Regression Coefficients as Odds Ratios',
    category: 'Statistical Analysis',
    difficulty: 'advanced',
    question: 'In a logistic regression model predicting churn, a predictor has coefficient $\beta_1 = 0.693$. What does exponentiating this coefficient ($e^{0.693} \approx 2.0$) indicate?',
    codeSnippet: `import numpy as np

beta_1 = 0.693
odds_ratio = np.exp(beta_1)
print(f"Odds Ratio: {odds_ratio:.1f}") # 2.0`,
    options: [
      'For every 1-unit increase in the predictor, the odds of churning double (increase by a factor of 2.0, or +100%)',
      'The churn probability increases by exactly 69.3 percentage points',
      'The churn rate decreases by 50%',
      'The model is 69.3% accurate'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'For every 1-unit increase in the predictor, the odds of churning double (increase by a factor of 2.0, or +100%)',
    explanationTitle: 'Exponentiated Coefficients as Odds Ratios',
    explanationText:
      'Because logistic regression models the natural log of odds $\ln(\text{Odds}) = \beta_0 + \beta_1 x$, a 1-unit increase in $x$ changes log-odds by $\beta_1$. Taking $e^{\beta_1}$ yields the multiplicative change in odds (the Odds Ratio). If $\beta > 0$, $OR > 1$ (odds increase); if $\beta < 0$, $OR < 1$ (odds decrease).',
    deepDive:
      'Common error: confusing an increase in ODDS with an increase in PROBABILITY. A doubling of odds does not mean a doubling of probability.',
    tags: ['Logistic Regression', 'Odds Ratio', 'Exponentiation', 'Coefficients', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-096',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'A/B Testing',
    topic: 'Minimum Detectable Effect (MDE) and Sample Sizing in A/B Tests',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'What is the "Minimum Detectable Effect" (MDE) in pre-experiment A/B test design, and how does aiming for a smaller MDE impact required sample size?',
    codeSnippet: `# A/B Test Sizing:
# Baseline Conversion: 5.0%
# Target MDE: 5% relative lift (5.0% -> 5.25% absolute) -> Requires ~125,000 users per variant!
# Target MDE: 20% relative lift (5.0% -> 6.0% absolute) -> Requires ~8,000 users per variant!`,
    options: [
      'MDE is the smallest true effect size that an experiment is powered to detect with statistical significance; detecting smaller MDEs requires quadratically larger sample sizes',
      'MDE is the minimum number of bugs allowed in production',
      'MDE is the p-value threshold',
      'MDE requires running tests for exactly 365 days'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'MDE is the smallest true effect size that an experiment is powered to detect with statistical significance; detecting smaller MDEs requires quadratically larger sample sizes',
    explanationTitle: 'Minimum Detectable Effect (MDE) Planning',
    explanationText:
      'MDE represents the sensitivity floor of an A/B experiment. If your test only has enough traffic to achieve $80\%$ power for a $10\%$ lift (MDE), and the true feature lift is $3\%$, the test will likely return an inconclusive null result ($p > 0.05$). Sample size scales inversely with $\text{MDE}^2$.',
    deepDive:
      'Calculate required A/B sample sizes using `statsmodels.stats.power.NormalIndPower().solve_power(...)`.',
    tags: ['A/B Testing', 'MDE', 'Minimum Detectable Effect', 'Sample Size', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-097',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'A/B Testing',
    topic: 'The "Peeking Problem" & Continuous Monitoring Fallacy',
    category: 'Statistical Analysis',
    difficulty: 'advanced',
    question: 'Why does "peeking" at A/B test results every day and stopping the experiment as soon as $p < 0.05$ corrupt statistical validity?',
    codeSnippet: `# Continuous Monitoring Hazard:
# Nominal alpha = 0.05 (5% false positive rate for a single planned evaluation at fixed sample size n)
# Checking p-values 10 times over the test duration inflates the TRUE False Positive Rate to ~20%!
# Checking continuously everyday inflates False Positive Rate to over 30%!`,
    options: [
      'Repeatedly evaluating unadjusted p-values over time multiplies opportunities to catch random noise crossing the significance threshold by chance (optional stopping), dramatically inflating the Type I false positive rate',
      'Peeking causes the web server to cache expired cookies',
      'Because p-values can only be computed on Sundays',
      'Peeking deletes users from the database'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Repeatedly evaluating unadjusted p-values over time multiplies opportunities to catch random noise crossing the significance threshold by chance (optional stopping), dramatically inflating the Type I false positive rate',
    explanationTitle: 'The Peeking Problem and Optional Stopping',
    explanationText:
      'Classical hypothesis testing assumes sample size $n$ is fixed in advance. Continuously checking results creates a multiple testing problem across time. Given enough looks, random Brownian motion will inevitably cause $p < 0.05$ temporarily, leading teams to ship ineffective features.',
    deepDive:
      'To monitor tests continuously without inflating errors, use Sequential Testing (e.g. Wald’s Sequential Probability Ratio Test or alpha spending functions).',
    tags: ['Peeking Problem', 'Optional Stopping', 'A/B Testing', 'Alpha Inflation', 'Sequential Testing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-098',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Bayesian vs. Frequentist',
    topic: 'Bayesian Credible Interval vs. Frequentist Confidence Interval',
    category: 'Statistical Analysis',
    difficulty: 'advanced',
    question: 'What is the conceptual difference between a Bayesian 95% Credible Interval and a Frequentist 95% Confidence Interval?',
    codeSnippet: `# Bayesian Credible Interval:
# Combines Prior P(theta) + Data Likelihood -> Posterior Distribution P(theta | Data).
# Statement: "There is a 95% probability that the true parameter theta lies in [A, B] given our prior and data."
# (Valid probabilistic statement about the parameter itself!)`,
    options: [
      'A Bayesian Credible Interval treats the parameter as a random variable and directly bounds where it lies with 95% probability; a Frequentist Confidence Interval treats the parameter as fixed and describes the long-run coverage rate of the procedure',
      'Bayesian intervals are always twice as wide as Frequentist intervals',
      'Frequentist intervals require prior distributions',
      'Credible intervals can only be computed with pen and paper'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'A Bayesian Credible Interval treats the parameter as a random variable and directly bounds where it lies with 95% probability; a Frequentist Confidence Interval treats the parameter as fixed and describes the long-run coverage rate of the procedure',
    explanationTitle: 'Credible vs. Confidence Intervals',
    explanationText:
      'Frequentists consider parameters fixed and intervals random (across repeated runs). Bayesians update a probability distribution over the parameter itself (the posterior distribution). The Bayesian Highest Posterior Density (HPD) interval captures 95% of the posterior mass, matching what non-statisticians intuitively assume confidence intervals mean.',
    deepDive:
      'When Bayesian analysis uses flat, uninformative priors, the numerical bounds of a Credible Interval often coincide closely with the Frequentist Confidence Interval.',
    tags: ['Bayesian', 'Frequentist', 'Credible Interval', 'Confidence Interval', 'Inference', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-099',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Time Series Analysis',
    topic: 'Classical Time Series Decomposition (Additive vs. Multiplicative)',
    category: 'Statistical Analysis',
    difficulty: 'intermediate',
    question: 'When decomposing a time series into Trend, Seasonality, and Residual components, when should an analyst choose a Multiplicative model over an Additive model?',
    codeSnippet: `from statsmodels.tsa.seasonal import seasonal_decompose

# Additive model:       Y[t] = Trend[t] + Seasonal[t] + Residual[t]
# Multiplicative model: Y[t] = Trend[t] * Seasonal[t] * Residual[t]
# Choose Multiplicative when seasonal swings expand proportionally with the trend!`,
    options: [
      'Choose a Multiplicative model when the amplitude of seasonal fluctuations grows proportionally as the baseline trend increases; choose Additive when seasonal swings remain constant in magnitude regardless of trend level',
      'Multiplicative is only for daily data',
      'Additive is used only when trend is negative',
      'Multiplicative decomposition requires fitting a neural network'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Choose a Multiplicative model when the amplitude of seasonal fluctuations grows proportionally as the baseline trend increases; choose Additive when seasonal swings remain constant in magnitude regardless of trend level',
    explanationTitle: 'Additive vs. Multiplicative Time Series Decomposition',
    explanationText:
      'In an additive model, seasonal variations add a fixed amount (e.g. +$10,000 every December). In a multiplicative model, seasonal variations scale proportionally (e.g. +30% every December). For retail and airline data where business growth magnifies holiday spikes, multiplicative decomposition is standard.',
    deepDive:
      'Taking the logarithm of multiplicative data transforms it into an additive relationship: $\ln(T \cdot S \cdot R) = \ln(T) + \ln(S) + \ln(R)$.',
    tags: ['Time Series', 'seasonal_decompose', 'Trend', 'Seasonality', 'statsmodels', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec3-100',
    section: 'Section 3',
    chapter: '3.5',
    track: 'pcad',
    cardType: 'Time Series Analysis',
    topic: 'Stationarity & The Augmented Dickey-Fuller (ADF) Unit Root Test',
    category: 'Statistical Analysis',
    difficulty: 'advanced',
    question: 'Why must time series data be Stationary before fitting ARIMA models, and how does the Augmented Dickey-Fuller (ADF) test determine stationarity?',
    codeSnippet: `from statsmodels.tsa.stattools import adfuller

# Augmented Dickey-Fuller Test:
# H0: The series has a unit root (NON-STATIONARY).
# H1: The series has no unit root (STATIONARY).
result = adfuller(df['sales'])
p_value = result[1]

if p_value < 0.05:
    print("Reject H0: Series is STATIONARY!")
else:
    print("Fail to reject H0: Series is NON-STATIONARY (differencing required!)")`,
    options: [
      'Stationarity requires constant mean, constant variance, and autocovariance independent of time; the ADF test tests for a unit root (H0: non-stationary), where p < 0.05 confirms stationarity',
      'Stationary series never change value',
      'ADF tests whether the series is alphabetical',
      'ARIMA models require non-stationary series to run'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Stationarity requires constant mean, constant variance, and autocovariance independent of time; the ADF test tests for a unit root (H0: non-stationary), where p < 0.05 confirms stationarity',
    explanationTitle: 'Stationarity and the Augmented Dickey-Fuller Test',
    explanationText:
      'Non-stationary time series (trends, changing volatility) cause spurious regressions. Weak stationarity requires: 1. Constant mean $E[Y_t] = \mu$; 2. Constant variance $\text{Var}(Y_t) = \sigma^2$; 3. Autocovariance depending only on time lag $k$, not time $t$. Non-stationary series are made stationary via differencing (`df.diff()`).',
    deepDive:
      'The "I" (Integrated) in ARIMA($p, d, q$) indicates the degree of differencing $d$ applied to achieve stationarity.',
    tags: ['Time Series', 'Stationarity', 'ADF Test', 'adfuller', 'ARIMA', 'PCAD-31-02']
  }
];
