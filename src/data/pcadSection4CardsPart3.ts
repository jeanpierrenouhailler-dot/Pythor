import { Flashcard } from '../types';

export const pcadSection4CardsPart3: Flashcard[] = [
  // =========================================================================
  // CHAPTER 4.4: SUPERVISED LEARNING: REGRESSION, CLASSIFICATION & METRICS (Cont.) [Cards 71-80]
  // =========================================================================
  {
    id: 'pcad-sec4-071',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Ensemble Learning',
    topic: 'Gradient Boosting vs Random Forest (Sequential vs Parallel)',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'What is the fundamental architectural difference between Gradient Boosted Trees (`GradientBoostingClassifier` / `HistGradientBoostingClassifier`) and a Random Forest?',
    codeSnippet: `from sklearn.ensemble import GradientBoostingClassifier, RandomForestClassifier

# Model A: Gradient Boosting (Sequential error correction)
# Model B: Random Forest (Parallel independent bootstrap trees)`,
    options: [
      'Gradient Boosting builds shallow trees sequentially, where each new tree is trained to predict the pseudo-residuals (gradients of the loss) of all prior trees; Random Forest builds deep trees in parallel independently',
      'Random Forest is for classification only; Gradient Boosting is for regression only',
      'Gradient Boosting does not use decision trees under the hood',
      'Random Forest requires data scaling while Gradient Boosting does not'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Gradient Boosting sequentially minimizes loss gradients (reduces bias); Random Forest averages independent trees (reduces variance)',
    explanationTitle: 'Boosting vs Bagging Paradigms',
    explanationText:
      'Bagging (Random Forest) trains independent high-capacity models in parallel on bootstrap samples, reducing variance through averaging. Boosting trains shallow weak learners (stumps) sequentially: each new learner fits the negative gradient of the loss function, steadily chipping away at bias.',
    deepDive:
      'For large datasets ($N > 10,000$), use `HistGradientBoostingClassifier`. It bins continuous features into 256 integer buckets (like LightGBM), running 10x to 100x faster than standard `GradientBoostingClassifier`.',
    tags: ['GradientBoosting', 'RandomForest', 'Boosting vs Bagging', 'Ensemble', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-072',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Multiclass Classification',
    topic: 'One-vs-Rest (OvR) vs One-vs-One (OvO) Strategies',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When training a naturally binary linear classifier (like `LinearSVC`) on a 4-class problem (`["Apple", "Banana", "Cherry", "Date"]`), how does the One-vs-Rest (OvR) strategy formulate the problem?',
    codeSnippet: `from sklearn.multiclass import OneVsRestClassifier
from sklearn.svm import LinearSVC

ovr = OneVsRestClassifier(LinearSVC())
ovr.fit(X, y)`,
    options: [
      'It trains 4 separate binary classifiers: Apple vs [Others], Banana vs [Others], Cherry vs [Others], and Date vs [Others]; the class with the highest confidence score wins at prediction time',
      'It trains $\\frac{K(K-1)}{2} = 6$ pairwise classifiers comparing every pair against each other',
      'It merges all 4 classes into a single binary label',
      'It converts the categorical labels into floating point coordinates'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'OvR fits K classifiers (one per class against all remaining); OvO fits K*(K-1)/2 pairwise classifiers',
    explanationTitle: 'Multiclass Decomposition: OvR vs OvO',
    explanationText:
      'One-vs-Rest (OvR or One-vs-All) trains $K$ models. For $K=4$, 4 models are trained. One-vs-One (OvO) trains $\\frac{K(K-1)}{2}$ models (6 models for $K=4$). OvR is computationally efficient and easily interpretable, making it the default multiclass strategy in Scikit-Learn.',
    deepDive:
      'LogisticRegression can also handle multiclass problems directly using the multinomial cross-entropy loss (Softmax regression) via `multi_class="multinomial"`.',
    tags: ['OneVsRest', 'OneVsOne', 'Multiclass', 'Classification', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-073',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Bias-Variance Trade-off',
    topic: 'Diagnosing Underfitting vs Overfitting via Learning Curves',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'An analyst generates a learning curve plotting training score and validation score across increasing training sample sizes. Both training score and validation score plateau at low, unsatisfactory performance (~60% accuracy) with almost no gap between them. What does this diagnose?',
    codeSnippet: `from sklearn.model_selection import learning_curve

train_sizes, train_scores, val_scores = learning_curve(
    estimator, X, y, cv=5, scoring='accuracy'
)
# Result: train_score ~ 0.61, val_score ~ 0.60 across all sample sizes!`,
    options: [
      'High Bias (Underfitting): the model is too simplistic to capture underlying patterns; gathering more data will not help, and the analyst should use a more expressive model or engineer non-linear features',
      'High Variance (Overfitting): the model has memorized training noise',
      'Data Leakage between training and validation folds',
      'Class imbalance requiring downsampling'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Low training score + low validation score + zero gap = High Bias (Underfitting)',
    explanationTitle: 'Learning Curve Diagnostic Profiles',
    explanationText:
      'High Bias (Underfitting): Both training and validation curves converge early at an unacceptably low score. Solution: Increase model capacity, add polynomial/interaction features, reduce regularization. High Variance (Overfitting): High training score (e.g. 99%) but large gap to lower validation score (e.g. 75%). Solution: Add more data, prune tree depth, increase regularization (higher $\\alpha$, lower $C$).',
    deepDive:
      'When high variance is present, the validation score continues to creep upward as sample size grows, confirming that acquiring additional training examples will improve generalization.',
    tags: ['Learning Curve', 'Bias-Variance', 'Underfitting', 'Overfitting', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-074',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Model Interpretability',
    topic: 'Permutation Feature Importance vs Impurity-Based Importance',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'Why is `sklearn.inspection.permutation_importance` considered superior and less biased than `RandomForest.feature_importances_` (mean decrease in impurity)?',
    codeSnippet: `from sklearn.inspection import permutation_importance

result = permutation_importance(model, X_val, y_val, n_repeats=10, random_state=42)
importances = result.importances_mean`,
    options: [
      'Mean decrease in impurity is heavily biased toward high-cardinality numerical/categorical features and calculated strictly on training data; permutation importance is computed on held-out validation data and measures true loss degradation when a feature is shuffled',
      'Permutation importance can only be run on linear models',
      'Mean decrease in impurity computes permutation p-values',
      'Permutation importance permanently scrambles the input dataset'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Permutation importance evaluates drops in out-of-sample score, overcoming MDI cardinality bias',
    explanationTitle: 'Permutation Importance vs Impurity-Based Importance',
    explanationText:
      'Default tree feature importances (MDI) measure total impurity reduction during node splits. Even a completely random noise column with high cardinality (like arbitrary unique IDs) will produce split points and falsely appear "important". Permutation importance randomly shuffles feature $j$ on unseen validation data: if shuffling doesn’t drop the validation score, the feature has zero real predictive importance.',
    deepDive:
      'If two features are highly collinear, permuting either one will have minimal impact because the model uses the duplicate feature as a proxy, resulting in artificially low importance for both.',
    tags: ['permutation_importance', 'feature_importances_', 'Model Interpretability', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-075',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Regression Diagnostics',
    topic: 'Residual Analysis: Homoscedasticity vs Heteroscedasticity',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When plotting regression residuals ($y - \\hat{y}$) against predicted values $\\hat{y}$, you observe that the residual spread widens dramatically in a funnel shape as $\\hat{y}$ increases. What regression assumption is violated, and how is it mitigated?',
    codeSnippet: `residuals = y_test - y_pred
# Scatter plot shows funnel-shaped widening variance (Heteroscedasticity)
# How to address this in modeling?`,
    options: [
      'Heteroscedasticity (non-constant residual variance): address by applying a variance-stabilizing log or power transform to the target variable ($y$), or by using Weighted Least Squares (WLS)',
      'Multicollinearity: address by dropping duplicate columns',
      'Autocorrelation: address by adding a lag term',
      'Endogeneity: address by using instrumental variables'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Heteroscedasticity (funnel shape in residual plot) requires log/Box-Cox transform or robust standard errors',
    explanationTitle: 'Heteroscedasticity in Regression Residuals',
    explanationText:
      'OLS assumes homoscedasticity (constant error variance across all levels of $\\hat{y}$). Heteroscedasticity does not bias point estimates of $\\beta$, but invalidates standard errors, confidence intervals, and p-values, making hypothesis tests untrustworthy. Transforming $y$ via $\\ln(y)$ compresses multiplicative variance into additive homoscedastic noise.',
    deepDive:
      'In statsmodels, the Breusch-Pagan test (`statsmodels.stats.diagnostic.het_breuschpagan`) provides a formal statistical hypothesis test for heteroscedasticity.',
    tags: ['Heteroscedasticity', 'Residuals', 'OLS Assumptions', 'Log Transform', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-076',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Classification Metrics',
    topic: 'Log Loss (Cross-Entropy) for Probability Calibration',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'Why is Logarithmic Loss (`log_loss`) often preferred over simple Classification Accuracy when evaluating risk scoring or loan default probabilities?',
    codeSnippet: `from sklearn.metrics import log_loss

# Model A: predicts 0.51 -> correct class 1 (Loss = -log(0.51) = 0.67)
# Model B: predicts 0.99 -> correct class 1 (Loss = -log(0.99) = 0.01)
# Both have 100% accuracy, but Model B is much better calibrated!
loss = log_loss(y_true, y_pred_prob)`,
    options: [
      'Log Loss heavily penalizes false confidence: an overconfident wrong prediction (e.g. predicting 99% probability of survival for a patient who dies) receives an exponentially massive loss penalty ($-\\ln(0.01) \\approx 4.60$)',
      'Log Loss is always between 0 and 1',
      'Accuracy cannot be calculated on binary outcomes',
      'Log Loss does not require the true labels'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Log loss measures probability calibration: heavily penalizes overconfident incorrect predictions',
    explanationTitle: 'Logarithmic Loss and Calibration',
    explanationText:
      'Accuracy only checks whether $\\hat{p} > 0.5$, completely ignoring whether the model was 51% sure or 99.9% sure. Log Loss: $L = -\\frac{1}{N}\\sum [y_i \\ln(p_i) + (1-y_i) \\ln(1-p_i)]$. In risk management, well-calibrated probabilities are critical for pricing policies and financial hedging.',
    deepDive:
      'Use `sklearn.calibration.CalibrationDisplay` to plot a reliability curve (calibration curve) checking whether predicted probabilities match empirical observed frequencies.',
    tags: ['log_loss', 'Cross-Entropy', 'Probability Calibration', 'Risk Modeling', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-077',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Threshold Optimization',
    topic: 'Tuning Decision Thresholds for Business Cost Matrices',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'A credit card fraud model predicts probabilities $P(\\text{fraud})$. A False Negative costs the bank $500 in stolen funds, while a False Positive (declining a legitimate card) costs $5 in customer service inquiry costs. How should the classification threshold be set?',
    codeSnippet: `# Default threshold: 0.50
# Optimal business threshold:
thresholds = np.linspace(0.01, 0.99, 100)
costs = [compute_business_cost(y_true, y_probs >= t, cost_fn=500, cost_fp=5) for t in thresholds]
optimal_threshold = thresholds[np.argmin(costs)]`,
    options: [
      'Lower the decision threshold significantly below 0.5 (e.g. to ~0.05 or 0.10) to flag any suspicious transactions where expected fraud loss exceeds the $5 verification cost, minimizing total monetary cost',
      'Keep the threshold at exactly 0.50 because 0.5 is statistically optimal for all distributions',
      'Raise the threshold to 0.95 so only completely guaranteed fraud is flagged',
      'Randomly assign thresholds between 0 and 1 for each transaction'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Optimal threshold minimizes expected monetary loss: Cost = FN * $500 + FP * $5',
    explanationTitle: 'Cost-Sensitive Decision Threshold Tuning',
    explanationText:
      'Standard 0.5 thresholds assume equal error costs ($C_{FP} = C_{FN}$). In reality, business costs are asymmetric. When $C_{FN} \\gg C_{FP}$, lowering the threshold catches more fraud (boosting Recall) while accepting more False Positives, dramatically lowering net enterprise loss.',
    deepDive:
      'The theoretical Bayes optimal decision threshold is $p^* = \\frac{C_{FP}}{C_{FP} + C_{FN}} = \\frac{5}{5 + 500} \\approx 0.0099$. Flagging any transaction with $> 1\\%$ estimated fraud probability minimizes expected loss.',
    tags: ['Cost-Sensitive Learning', 'Decision Threshold', 'Business Metrics', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-078',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Ensemble Learning',
    topic: 'VotingClassifier and StackingClassifier Architecture',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'How does a `StackingClassifier` differ from a `VotingClassifier(voting="soft")`?',
    codeSnippet: `from sklearn.ensemble import StackingClassifier, VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC

estimators = [('rf', RandomForestClassifier()), ('svc', SVC(probability=True))]
# Stacking trains a meta-model on out-of-fold predictions:
stack = StackingClassifier(estimators=estimators, final_estimator=LogisticRegression())`,
    options: [
      '`VotingClassifier` combines predictions using fixed arithmetic/weighted averaging; `StackingClassifier` trains a higher-level meta-estimator (e.g. Logistic Regression) on out-of-fold predictions to learn how to weight each base model optimally',
      '`StackingClassifier` can only be used on neural networks',
      '`VotingClassifier` trains models sequentially while stacking trains them in parallel',
      'There is no functional difference; they are aliases of the same class'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Stacking trains a meta-learner on out-of-fold base predictions; Voting uses simple or weighted average',
    explanationTitle: 'Ensemble Stacking vs Voting Mechanics',
    explanationText:
      '`VotingClassifier` averages probability outputs or takes majority votes. `StackingClassifier` generates out-of-fold prediction matrices from base estimators (Random Forest, SVM, LightGBM) and trains a `final_estimator` (meta-learner) that discovers which base model is most reliable under different conditions.',
    deepDive:
      'Stacking uses internal cross-validation to produce base predictions for the training set, preventing the meta-model from overfitting to base models that have memorized training data.',
    tags: ['StackingClassifier', 'VotingClassifier', 'Meta-Learning', 'Ensemble', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-079',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Model Evaluation',
    topic: 'Cohen’s Kappa and Matthews Correlation Coefficient (MCC)',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'Why is Matthews Correlation Coefficient (MCC) considered the most robust single summary metric for evaluating binary classification on severely imbalanced datasets?',
    codeSnippet: `from sklearn.metrics import matthews_corrcoef

mcc = matthews_corrcoef(y_true, y_pred)
# Returns a score between -1.0 (total disagreement) and +1.0 (perfect prediction)`,
    options: [
      'MCC incorporates all four confusion matrix quadrants ($TP, TN, FP, FN$) proportionally and only yields a high score if predictions perform well on both the minority AND majority classes',
      'MCC is unaffected by False Negatives',
      'MCC converts continuous targets into binary labels automatically',
      'MCC is identical to accuracy when multiplied by 100'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'MCC = (TP*TN - FP*FN) / sqrt((TP+FP)(TP+FN)(TN+FP)(TN+FN)); symmetric across both classes',
    explanationTitle: 'Matthews Correlation Coefficient (MCC)',
    explanationText:
      'Unlike F1-score (which completely ignores True Negatives and depends on which class is designated "positive"), MCC is a contingency matrix correlation coefficient between -1 and +1. It treats positive and negative classes symmetrically, remaining dependable even when positive cases represent < 0.1% of records.',
    deepDive:
      'An MCC score of 0.0 corresponds to random chance performance. Any model scoring MCC < 0 performs worse than random guessing.',
    tags: ['MCC', 'Confusion Matrix', 'Imbalanced Data', 'Model Evaluation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-080',
    section: 'Section 4',
    chapter: '4.4',
    track: 'pcad',
    cardType: 'Supervised Learning',
    topic: 'Support Vector Machines: Kernel Trick and Slack Penalty (C)',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'In Support Vector Classifiers (`SVC`), what role does the "kernel trick" (e.g. `kernel="rbf"`) play when feature relationships are non-linearly separable?',
    codeSnippet: `from sklearn.svm import SVC

# Linear boundary impossible in 2D space?
# RBF kernel maps to higher-dimensional Hilbert space where linear separation exists!
clf = SVC(kernel='rbf', C=1.0, gamma='scale')`,
    options: [
      'It implicitly maps feature vectors into a higher-dimensional space where a linear separating hyper-plane can be found, without explicitly computing the costly coordinates in that higher space',
      'It rounds floating point coordinates to the nearest whole integer',
      'It replaces non-linear features with random noise',
      'It disables support vector optimization to run in linear time'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Kernel trick computes inner products in high-dimensional space without explicit coordinate transformation',
    explanationTitle: 'The Support Vector Machine Kernel Trick',
    explanationText:
      'The kernel function $K(x_i, x_j) = \\exp(-\\gamma \\|x_i - x_j\\|^2)$ evaluates the inner product between points in an infinite-dimensional feature space. This allows the maximum-margin hyperplane algorithm to separate complex non-linear decision boundaries with high precision.',
    deepDive:
      'The $C$ hyperparameter controls the trade-off between maximizing margin width and penalizing slack variable misclassifications. Large $C$ creates a strict margin (risking overfitting); small $C$ creates a soft margin (allowing more margin violations to reduce variance).',
    tags: ['SVC', 'Kernel Trick', 'RBF', 'Support Vector Machines', 'PCAD-31-02']
  },

  // =========================================================================
  // CHAPTER 4.5: UNSUPERVISED LEARNING, HYPERPARAMETER TUNING & EVALUATION [Cards 81-100]
  // =========================================================================
  {
    id: 'pcad-sec4-081',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Clustering',
    topic: 'K-Means Algorithm Convergence and Inertia',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'What mathematical quantity does the K-Means clustering algorithm (`KMeans` in Scikit-Learn) minimize during its iterative centroid convergence?',
    codeSnippet: `from sklearn.cluster import KMeans

kmeans = KMeans(n_clusters=4, random_state=42, n_init='auto')
kmeans.fit(X)
print(kmeans.inertia_)`,
    options: [
      'Inertia (Within-Cluster Sum of Squares, WCSS): $\\sum_{k=1}^K \\sum_{x_i \\in C_k} \\|x_i - \\mu_k\\|^2$',
      'The Euclidean distance between the most distant cluster centroids',
      'The total number of samples divided by the number of clusters',
      'The Pearson correlation between feature pairs'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Inertia minimizes the sum of squared Euclidean distances of samples to their closest cluster center',
    explanationTitle: 'K-Means Objective: Within-Cluster Sum of Squares (WCSS)',
    explanationText:
      'K-Means alternates between two steps until convergence: (1) Assignment step: assign each observation to the nearest centroid $\\mu_k$. (2) Update step: recompute centroid coordinates as the arithmetic mean of all points assigned to that cluster. `inertia_` is the final sum of squared distances from points to their assigned centroid.',
    deepDive:
      'By default, Scikit-Learn uses `init="k-means++"`, which seeds initial centroids distant from one another, drastically speeding up convergence and avoiding poor local minima.',
    tags: ['KMeans', 'Inertia', 'WCSS', 'Clustering', 'Unsupervised Learning', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-082',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Clustering Evaluation',
    topic: 'Elbow Method vs Silhouette Score for Optimal K Selection',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When determining the optimal number of clusters $K$ for customer segmentation, why is Silhouette Analysis generally more definitive than the Elbow Method?',
    codeSnippet: `from sklearn.metrics import silhouette_score

# silhouette_score = (b - a) / max(a, b)
# a = mean intra-cluster distance
# b = mean nearest-cluster distance
scores = [silhouette_score(X, KMeans(k).fit_predict(X)) for k in range(2, 7)]`,
    options: [
      'Inertia in the Elbow Method always decreases monotonically toward 0 as $K$ increases (often showing no distinct bend); Silhouette Score provides a normalized metric in $[-1, +1]$ balancing cohesion and separation, with an explicit peak at the optimal $K$',
      'The Elbow Method only works when $K=2$',
      'Silhouette analysis requires labeled ground-truth classes',
      'Silhouette score converts clusters into regression coefficients'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Silhouette score peaks at the optimal cluster count by balancing intra-cluster cohesion (a) vs separation (b)',
    explanationTitle: 'Silhouette Analysis vs Elbow Method',
    explanationText:
      'The Silhouette coefficient $s_i = \\frac{b_i - a_i}{\\max(a_i, b_i)}$ measures how close point $i$ is to its own cluster ($a_i$) compared to neighboring clusters ($b_i$). A score near $+1$ indicates well-separated dense clusters; near $0$ indicates overlapping clusters; negative scores mean points were assigned to the wrong cluster.',
    deepDive:
      'Because `silhouette_score` computes pairwise Euclidean distances across all samples, its complexity is $O(N^2)$. For large datasets, evaluate on a random subsample: `silhouette_score(X, labels, sample_size=10000)`.',
    tags: ['silhouette_score', 'Elbow Method', 'KMeans', 'Clustering Evaluation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-083',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Dimensionality Reduction',
    topic: 'Principal Component Analysis (PCA): Explained Variance Ratio',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'How do you determine the minimum number of principal components needed to retain 95% of the total variance from a 50-variable dataset using Scikit-Learn?',
    codeSnippet: `from sklearn.decomposition import PCA

pca = PCA(n_components=0.95, svd_solver='full')
X_pca = pca.fit_transform(X_scaled)
print(pca.n_components_)`,
    options: [
      'Passing a floating-point number between 0.0 and 1.0 (e.g. `n_components=0.95`) instructs PCA to select the smallest number of components such that cumulative explained variance ratio $\\ge 95\\%$',
      'Set `n_components=50 * 0.95 = 47` manually',
      'You must run 50 separate PCA models and inspect eigenvalues manually',
      'PCA always outputs exactly 2 components for plotting'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'PCA(n_components=0.95) automatically selects component count to satisfy cumulative explained variance >= 95%',
    explanationTitle: 'PCA Variance Retention Mechanics',
    explanationText:
      'When `n_components` is a float between 0.0 and 1.0, Scikit-Learn computes all eigenvectors and selects the minimal subset whose eigenvalues sum to at least that fraction of total variance. The chosen number of components can be inspected via `pca.n_components_`.',
    deepDive:
      'Features MUST be centered and scaled via `StandardScaler` prior to PCA. Otherwise, features with large variances purely due to measurement units will dominate the principal axes.',
    tags: ['PCA', 'n_components', 'Dimensionality Reduction', 'explained_variance_ratio_', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-084',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Dimensionality Reduction',
    topic: 'Orthogonality and Component Loadings in PCA',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'What mathematical property ensures that principal components extracted by PCA are completely free of multicollinearity?',
    codeSnippet: `pca = PCA()
X_trans = pca.fit_transform(X_scaled)
# Pearson correlation between X_trans[:, 0] and X_trans[:, 1] is exactly 0.0!`,
    options: [
      'Principal components are mutually orthogonal (eigenvectors of the covariance matrix are perpendicular), ensuring zero linear correlation between any pair of distinct components',
      'PCA applies a Lasso L1 penalty to all components',
      'PCA drops all negative eigenvalues',
      'PCA normalizes all components between -1 and +1'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Eigenvectors of the real symmetric covariance matrix are mutually orthogonal, yielding zero correlation (r = 0.0)',
    explanationTitle: 'Orthogonality of Principal Components',
    explanationText:
      'Because the sample covariance matrix $X^T X$ is symmetric, its eigenvectors are orthogonal ($v_j^T v_k = 0$ for $j \\ne k$). Projecting data onto these orthogonal axes rotates the coordinate system to eliminate covariance, producing completely uncorrelated transformed features.',
    deepDive:
      'Principal components are linear combinations of original variables: `pca.components_` contains the factor loadings (weights). An analyst inspects these weights to understand what underlying latent concepts each component represents.',
    tags: ['PCA', 'Orthogonality', 'Eigenvectors', 'Covariance', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-085',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Cross-Validation',
    topic: 'K-Fold vs StratifiedKFold vs TimeSeriesSplit Applications',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When validating a financial predictive model on daily stock prices from 2020 to 2026, why must `TimeSeriesSplit` be used instead of standard `KFold` cross-validation?',
    codeSnippet: `from sklearn.model_selection import TimeSeriesSplit

tscv = TimeSeriesSplit(n_splits=5)
for train_index, test_index in tscv.split(X):
    # Train is always strictly historical; Test is strictly future!
    ...`,
    options: [
      'Standard `KFold` randomly shuffles data, training on future data (e.g. 2025) to predict past data (e.g. 2021), creating massive temporal data leakage; `TimeSeriesSplit` enforces strict forward-chaining rolling origin splits',
      '`TimeSeriesSplit` automatically calculates ARIMA models',
      '`KFold` cannot process datasets with DateTime indices',
      '`TimeSeriesSplit` doubles the training speed of estimators'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'TimeSeriesSplit enforces chronological splits (expanding/rolling window) to prevent temporal data leakage',
    explanationTitle: 'Temporal Cross-Validation with TimeSeriesSplit',
    explanationText:
      'In time-series data, observations are autocorrelated over time. Standard cross-validation shuffles instances, allowing future events to leak into training folds. `TimeSeriesSplit` uses forward chaining: fold 1 trains on $T_1$ and tests on $T_2$; fold 2 trains on $T_1+T_2$ and tests on $T_3$, maintaining realistic chronological deployment conditions.',
    deepDive:
      'Summary of splitters: Continuous tabular $\\rightarrow$ `KFold`; Imbalanced categorical $\\rightarrow$ `StratifiedKFold`; Clustered customer groups $\\rightarrow$ `GroupKFold`; Time-series $\\rightarrow$ `TimeSeriesSplit`.',
    tags: ['TimeSeriesSplit', 'KFold', 'Cross-Validation', 'Data Leakage', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-086',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Hyperparameter Tuning',
    topic: 'GridSearchCV vs RandomizedSearchCV Efficiency and Scalability',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When tuning 8 continuous and discrete hyperparameters across a wide search space, why is `RandomizedSearchCV` preferred over exhaustive `GridSearchCV`?',
    codeSnippet: `from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import uniform, randint

param_dist = {
    'max_depth': randint(3, 20),
    'learning_rate': uniform(0.01, 0.3),
    'n_estimators': randint(50, 500)
}
search = RandomizedSearchCV(estimator, param_dist, n_iter=50, cv=5, random_state=42)`,
    options: [
      '`GridSearchCV` suffers from combinatorial explosion ($O(\\prod |P_i|)$), testing thousands of combinations; `RandomizedSearchCV` samples a fixed budget of $N$ configurations from continuous distributions, discovering optimal regions far more efficiently',
      '`RandomizedSearchCV` guarantees finding the global mathematical maximum while GridSearchCV does not',
      '`GridSearchCV` only works on decision trees',
      '`RandomizedSearchCV` does not require a cross-validation parameter'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'RandomizedSearchCV evaluates fixed n_iter samples, exploring continuous distributions without combinatorial explosion',
    explanationTitle: 'Randomized vs Exhaustive Grid Search',
    explanationText:
      'Bergstra and Bengio (2012) proved that in high-dimensional hyperparameter spaces, only a few hyperparameters significantly impact model performance. Grid search wastes dozens of evaluations repeating values along unimportant dimensions. Randomized search tests distinct values for every parameter on every iteration, exploring the search space efficiently.',
    deepDive:
      'Use continuous probability distributions from `scipy.stats` (e.g. `loguniform(1e-4, 1e-1)` for learning rates or regularization $\\alpha$) in `param_distributions`.',
    tags: ['RandomizedSearchCV', 'GridSearchCV', 'Hyperparameter Tuning', 'scipy.stats', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-087',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Clustering',
    topic: 'DBSCAN vs K-Means for Arbitrary Shapes and Noise Outliers',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'Why does DBSCAN (`DBSCAN(eps=..., min_samples=...)`) succeed on crescent-shaped or ring-shaped spatial clusters where K-Means fails completely?',
    codeSnippet: `from sklearn.cluster import DBSCAN

dbscan = DBSCAN(eps=0.5, min_samples=5)
labels = dbscan.fit_predict(X)
# Outlier noise points receive label == -1`,
    options: [
      'DBSCAN identifies clusters as continuous dense regions connected by core points, discovering arbitrary non-convex geometries and isolating outliers as noise (`label = -1`), whereas K-Means assumes spherical, convex, equal-variance clusters',
      'DBSCAN fits quadratic polynomial equations to data points',
      'K-Means requires labeled supervised targets while DBSCAN is unsupervised',
      'DBSCAN requires users to specify the exact number of clusters in advance'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'DBSCAN discovers arbitrary-shaped density clusters and flags outliers with label == -1 without requiring K',
    explanationTitle: 'Density-Based Clustering with DBSCAN',
    explanationText:
      'K-Means partitions space using Voronoi cells, forcing clusters to be convex and spherical around centroids. DBSCAN groups points based on local density: a point is a "core point" if at least `min_samples` exist within radius `eps`. Points in sparse regions that cannot reach a core point are flagged as noise (`-1`), making DBSCAN an anomaly detector.',
    deepDive:
      'Choosing `eps`: Plot the distance to the $k$-th nearest neighbor sorted ascending; look for the sharp elbow in the $k$-distance graph to set `eps`.',
    tags: ['DBSCAN', 'KMeans', 'Density-Based Clustering', 'Anomaly Detection', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-088',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Hyperparameter Search',
    topic: 'Tuning Pipeline Hyperparameters with Double Underscore Syntax',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When tuning an entire pipeline containing a `StandardScaler` and a `RandomForestClassifier` with `GridSearchCV`, how must the hyperparameter keys in `param_grid` be named?',
    codeSnippet: `pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('rf', RandomForestClassifier())
])

param_grid = {
    'rf__n_estimators': [100, 200],
    'rf__max_depth': [5, 10, None],
    'scaler__with_mean': [True, False]
}`,
    options: [
      'Use the step name followed by a double underscore and the parameter name: `<step_name>__<param_name>` (e.g. `"rf__max_depth"`)',
      'Use dot notation: `"rf.max_depth"`',
      'Pass separate dictionaries inside a list for each pipeline step',
      'Parameters must be defined as global variables before instantiating the pipeline'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Double underscore syntax step__param routes hyperparameters to specific pipeline steps during tuning',
    explanationTitle: 'Pipeline Hyperparameter Routing Syntax',
    explanationText:
      'Scikit-Learn’s parameter routing protocol uses double underscores (`__`) to traverse nested estimator hierarchies. For example, `ColumnTransformer` inside a `Pipeline` can be accessed via `preprocessor__num_pipe__imputer__strategy`.',
    deepDive:
      'You can even search over alternative algorithms within the pipeline step itself: `param_grid = {"classifier": [LogisticRegression(), RandomForestClassifier()]}`.',
    tags: ['Pipeline', 'GridSearchCV', 'double underscore', 'Hyperparameter Routing', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-089',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Hierarchical Clustering',
    topic: 'Agglomerative Clustering and Linkage Criteria (ward, complete, average)',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'In bottom-up Agglomerative Hierarchical Clustering, how does Ward’s linkage criterion (`linkage="ward"`) decide which pair of clusters to merge at each step?',
    codeSnippet: `from sklearn.cluster import AgglomerativeClustering

agg = AgglomerativeClustering(n_clusters=3, linkage='ward')
labels = agg.fit_predict(X)`,
    options: [
      'Ward’s linkage merges the pair of clusters that minimizes the total increase in within-cluster sum of squared errors (variance), producing compact, balanced clusters',
      'Ward’s linkage merges clusters based on the maximum distance between any single pair of points',
      'Ward’s linkage merges clusters based on the median coordinate distance',
      'Ward’s linkage splits clusters top-down starting from a single mega-cluster'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Ward linkage minimizes within-cluster variance increase when merging pairs; similar to K-Means objective',
    explanationTitle: 'Agglomerative Linkage Criteria Comparison',
    explanationText:
      'Linkage options: `ward` minimizes total within-cluster variance increase (requires Euclidean distance). `complete` (maximum linkage) merges clusters with smallest maximum pairwise distance (avoids elongated chains). `single` merges based on minimum pairwise distance (prone to chaining). `average` uses average pairwise distances.',
    deepDive:
      'Use `scipy.cluster.hierarchy.dendrogram` and `linkage` to visualize the full hierarchical tree structure and identify the natural cut height for $K$.',
    tags: ['AgglomerativeClustering', 'Ward Linkage', 'Hierarchical Clustering', 'Dendrogram', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-090',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Model Persistence',
    topic: 'Serializing Trained Models with joblib vs pickle',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'Why is `joblib.dump` / `joblib.load` standard for serializing trained Scikit-Learn models and pipelines to disk rather than standard Python `pickle`?',
    codeSnippet: `import joblib

# Saving trained pipeline:
joblib.dump(pipe, 'fraud_model_v1.joblib')

# Loading for production inference:
loaded_pipe = joblib.load('fraud_model_v1.joblib')
predictions = loaded_pipe.predict(X_new)`,
    options: [
      '`joblib` is optimized for serializing Python objects containing large internal NumPy arrays (model weights, trees, vocabulary dictionaries) using memory-efficient disk compression',
      '`joblib` encrypts model files with AES-256 automatically',
      '`pickle` cannot serialize objects created with Scikit-Learn',
      '`joblib` converts models into executable C++ binary files'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'joblib handles large NumPy arrays efficiently without memory bloat during serialization',
    explanationTitle: 'Model Persistence with joblib',
    explanationText:
      '`joblib` provides a drop-in replacement for `pickle` that handles large numeric arrays efficiently. It avoids in-memory duplication and supports multi-compression backends (e.g. `compress=3` with zlib/gzip).',
    deepDive:
      'Security Warning: Never load untrusted `.joblib` or `.pkl` files from untrusted sources, as unpickling arbitrary binary streams can execute arbitrary malicious code via Python’s `__reduce__` exploit.',
    tags: ['joblib', 'Model Persistence', 'Serialization', 'pickle', 'Production ML', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-091',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Clustering',
    topic: 'Centroid Inspection and Segment Profiling with pandas',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'After running K-Means clustering to create customer segments, how does an analyst extract the average behavioral profile of each segment to present to business stakeholders?',
    codeSnippet: `df['segment'] = kmeans.labels_

# How to generate the segment profile table?
profile = df.groupby('segment')[['recency', 'frequency', 'monetary_val']].mean()`,
    options: [
      'Group the original unscaled DataFrame by the assigned cluster label and calculate `.mean()` (or `.median()`) across key business variables',
      'Print `kmeans.cluster_centers_` directly because raw scaled centroids are in dollar units',
      'Calculate the correlation matrix between the segment column and all features',
      'Run an OLS regression using segment as the dependent variable'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'df.groupby("segment").mean() profiles customer archetypes in natural, interpretable business units',
    explanationTitle: 'Cluster Profiling in Natural Business Units',
    explanationText:
      'While clustering must be performed on scaled data, presenting standardized centroids ($z$-scores like $-0.45, +1.2$) confuses executive stakeholders. Mapping assigned labels back onto the raw, unscaled DataFrame and computing `df.groupby("segment").mean()` communicates actionable archetypes (e.g. "Segment 2 averages 45 purchases and $1,200 annual spend").',
    deepDive:
      'Combine group means with group counts (`size()`) to quantify both the composition and population size of each business cohort.',
    tags: ['Customer Segmentation', 'Profiling', 'groupby', 'KMeans', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-092',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Cross-Validation Nuance',
    topic: 'Nested Cross-Validation for Unbiased Performance Estimation',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'Why is Nested Cross-Validation (an outer CV loop for evaluation and an inner CV loop for hyperparameter tuning) required when reporting true generalization performance on small datasets?',
    codeSnippet: `from sklearn.model_selection import cross_val_score, GridSearchCV, KFold

inner_cv = KFold(n_splits=3, shuffle=True, random_state=42)
outer_cv = KFold(n_splits=5, shuffle=True, random_state=42)

clf = GridSearchCV(estimator=model, param_grid=params, cv=inner_cv)
nested_scores = cross_val_score(clf, X, y, cv=outer_cv)`,
    options: [
      'To prevent hyperparameter optimization bias: optimizing hyperparameters on a single CV split and reporting that same split’s best score overestimates model accuracy; the outer loop tests the entire tuning process on truly unseen data',
      'Nested CV makes models run 15 times faster',
      'Nested CV is required by law for healthcare algorithms',
      'Nested CV converts all models into neural networks'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Nested CV decouples model selection (inner loop) from unbiased generalization error estimation (outer loop)',
    explanationTitle: 'Nested Cross-Validation for Unbiased Assessment',
    explanationText:
      'When testing many hyperparameter combinations in standard cross-validation, the selected configuration might achieve high performance simply by chance on that specific partition (optimization bias). Nested CV wraps `GridSearchCV` inside `cross_val_score`, evaluating the entire tuning workflow on completely independent outer test folds.',
    deepDive:
      'If sample size $N > 100,000$, standard train-validation-test split (e.g. 70/15/15) is typically sufficient and avoids the high computational cost of nested CV.',
    tags: ['Nested CV', 'Cross-Validation', 'Model Selection', 'Optimization Bias', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-093',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Dimensionality Reduction',
    topic: 't-SNE vs PCA for High-Dimensional Visualization',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'When visualizing complex high-dimensional single-cell genomic or image data in a 2D scatter plot, why does t-SNE (`TSNE`) frequently reveal discrete non-linear clusters that PCA collapses together?',
    codeSnippet: `from sklearn.manifold import TSNE

tsne = TSNE(n_components=2, perplexity=30, random_state=42)
X_embedded = tsne.fit_transform(X)`,
    options: [
      't-SNE is a non-linear manifold learning technique that preserves local neighborhood structures by modeling pairwise similarities as probabilities, whereas PCA is a linear projection that only preserves global variance',
      't-SNE trains a decision tree on each pixel',
      't-SNE can predict future values while PCA cannot',
      'PCA can only reduce data down to 10 dimensions'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 't-SNE preserves non-linear local neighborhood similarities, revealing manifold clusters invisible to linear PCA',
    explanationTitle: 'Non-linear Manifold Visualization with t-SNE',
    explanationText:
      'PCA finds linear hyperplanes maximizing variance. If clusters lie on non-linear manifolds (curved swiss-roll geometries), PCA projects them on top of each other. t-SNE maps points so that similar points in high-dimensional space remain neighbors in 2D space.',
    deepDive:
      'Caution: t-SNE is strictly an exploratory visualization tool, not a feature extractor. It does not preserve global distances, cluster sizes or densities, and its `.fit_transform()` cannot transform new unseen data points.',
    tags: ['TSNE', 'PCA', 'Manifold Learning', 'Data Visualization', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-094',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Pipeline Tuning',
    topic: 'HalvingGridSearchCV and Successive Halving for Fast Search',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'How does `HalvingGridSearchCV` achieve a 5x to 10x speedup over standard `GridSearchCV` when searching broad parameter grids?',
    codeSnippet: `from sklearn.model_selection import HalvingGridSearchCV

search = HalvingGridSearchCV(
    estimator, param_grid, 
    factor=3, 
    resource='n_samples', 
    random_state=42
)`,
    options: [
      'It uses Successive Halving: evaluates all candidate configurations on a small subset of training data, discards the bottom fraction, and promotes only the top-performing candidates to successive rounds with increasing sample sizes',
      'It runs only half the code using Python C extensions',
      'It converts the model into a half-precision 16-bit float model',
      'It skips cross-validation completely'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Successive halving prunes poor candidates early on small sample subsets, investing compute only in top contenders',
    explanationTitle: 'Successive Halving Parameter Search',
    explanationText:
      '`HalvingGridSearchCV` starts by training all parameter candidates on a small fraction of data (`min_resources`). The top candidates (e.g. top $1/3$ if `factor=3`) are promoted to the next round with $3\\times$ more training samples. This process repeats until the final round, where only the top few configurations are trained on full data.',
    deepDive:
      'In Scikit-Learn, Successive Halving is available via `HalvingGridSearchCV` and `HalvingRandomSearchCV` under `sklearn.model_selection`.',
    tags: ['HalvingGridSearchCV', 'Successive Halving', 'Hyperparameter Tuning', 'Efficiency', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-095',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Unsupervised Anomaly Detection',
    topic: 'IsolationForest for Tabular Outlier Detection',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'What is the core algorithmic intuition behind `IsolationForest` for unsupervised anomaly and fraud detection in multi-dimensional datasets?',
    codeSnippet: `from sklearn.ensemble import IsolationForest

iso = IsolationForest(contamination=0.01, random_state=42)
preds = iso.fit_predict(X)
# Outliers receive -1, inliers receive 1`,
    options: [
      'Anomalies are few and structurally different, meaning they require far fewer random feature splits (shorter path lengths from root to leaf in isolation trees) to isolate than normal cluster points',
      'Anomalies always have the highest numerical value in the dataset',
      'It computes the distance of every point to the grand mean',
      'It fits a Gaussian distribution to each column independently'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Outliers are isolated quickly near tree roots (short average path lengths); inliers require deep partitioning',
    explanationTitle: 'Isolation Forest Anomaly Detection',
    explanationText:
      '`IsolationForest` recursively partitions data by randomly selecting a feature and a random split value. Inliers require many splits to isolate in dense clusters. Anomalies reside in sparse regions, getting isolated in just a few cuts. Points with average path length significantly shorter than normal receive anomaly label `-1`.',
    deepDive:
      'The `contamination` parameter defines the expected proportion of outliers (e.g. `0.01` for 1%). If set to `"auto"`, the threshold is determined based on the original paper’s decision function offset.',
    tags: ['IsolationForest', 'Anomaly Detection', 'Outliers', 'Unsupervised Learning', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-096',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Cross-Validation',
    topic: 'GroupKFold for Preventing Data Leakage in Grouped Observations',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'A hospital dataset contains 50,000 chest X-ray images collected from 2,000 unique patients (multiple images per patient). Why must `GroupKFold` (grouped on `patient_id`) be used instead of standard `KFold` cross-validation?',
    codeSnippet: `from sklearn.model_selection import GroupKFold

gkf = GroupKFold(n_splits=5)
for train_idx, val_idx in gkf.split(X, y, groups=df['patient_id']):
    # All images from any single patient appear strictly in train OR val, never both!
    ...`,
    options: [
      'Standard `KFold` places images from the same patient into both training and validation folds, causing the model to memorize patient-specific physical features rather than disease pathology; `GroupKFold` guarantees no patient spans both splits',
      '`GroupKFold` groups data into clusters using K-Means before splitting',
      'GroupKFold is required because hospitals have multiple buildings',
      'KFold cannot handle datasets with more than 1,000 rows'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'GroupKFold guarantees that all observations for any given group (patient/device) remain within a single fold',
    explanationTitle: 'Preventing Identity Leakage with GroupKFold',
    explanationText:
      'When multiple records share an underlying identity (e.g. multiple transactions per customer, multiple sensor pings per engine, multiple scans per patient), random splitting causes identity leakage. The model learns identity quirks instead of general patterns. `GroupKFold` keeps groups intact.',
    deepDive:
      'To combine grouping with stratification on class labels, use `StratifiedGroupKFold`.',
    tags: ['GroupKFold', 'Data Leakage', 'Grouped Data', 'Cross-Validation', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-097',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Evaluation Scoring',
    topic: 'Custom Scoring Functions with make_scorer',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'How can an analyst pass a custom business evaluation metric (e.g. profit calculated from True Positives and False Positives) into `GridSearchCV` or `cross_val_score`?',
    codeSnippet: `from sklearn.metrics import make_scorer

def custom_business_profit(y_true, y_pred):
    tp = np.sum((y_true == 1) & (y_pred == 1))
    fp = np.sum((y_true == 0) & (y_pred == 1))
    return tp * 100 - fp * 25

profit_scorer = make_scorer(custom_business_profit, greater_is_better=True)
search = GridSearchCV(model, param_grid, scoring=profit_scorer, cv=5)`,
    options: [
      'Wrap the custom Python function with `sklearn.metrics.make_scorer()`, specifying `greater_is_better=True` (or `False` if minimizing cost)',
      'Pass the Python function name directly to `scoring="custom_business_profit"` as a string',
      'Modify Scikit-Learn’s internal source code to add the function',
      'Set `greater_is_better` to None and let Python guess'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'make_scorer(func, greater_is_better=True) wraps custom functions into Scikit-Learn scoring objects',
    explanationTitle: 'Custom Metric Wrapping with make_scorer',
    explanationText:
      '`make_scorer()` converts any callable with signature `score_func(y_true, y_pred, **kwargs)` into an evaluation scorer object recognized by `cross_val_score`, `GridSearchCV`, and `learning_curve`. If your metric requires predicted probabilities (like ROC-AUC or Brier score), pass `response_method="predict_proba"`.',
    deepDive:
      'By convention, Scikit-Learn maximizes scores. When optimizing losses/errors (e.g. MSE), Scikit-Learn uses negated scores (`"neg_mean_squared_error"`), so higher values (closer to zero) remain better.',
    tags: ['make_scorer', 'Custom Metrics', 'GridSearchCV', 'cross_val_score', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-098',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Model Diagnostics',
    topic: 'Partial Dependence Plots (PDP) for Feature Effect Inspection',
    category: 'Data Analysis and Modeling',
    difficulty: 'advanced',
    question: 'What analytical insight does a Partial Dependence Plot (`PartialDependenceDisplay`) provide when interpreting a black-box Random Forest or Gradient Boosting model?',
    codeSnippet: `from sklearn.inspection import PartialDependenceDisplay

fig, ax = plt.subplots(figsize=(8, 4))
PartialDependenceDisplay.from_estimator(model, X_train, features=['income', 'age'], ax=ax)`,
    options: [
      'It visualizes the marginal effect that one or two target features have on the predicted outcome of the model, holding all other features fixed at their observed values',
      'It plots the correlation between features and the target',
      'It plots the training loss curve over iterations',
      'It displays the memory consumption of individual decision trees'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'PDP plots the marginal average effect of a feature on model predictions across the dataset',
    explanationTitle: 'Partial Dependence Plots (PDP)',
    explanationText:
      'PDP calculates the average prediction of the model when feature $X_s$ is fixed to a value $v$ across all rows in the dataset, repeating across a grid of values. This shows whether the relationship between feature and target is linear, monotonic, step-like, or non-linear, providing clear model explainability to business leaders.',
    deepDive:
      'Individual Conditional Expectation (ICE) plots (`kind="individual"` or `kind="both"`) plot the curve for each sample separately, revealing hidden interaction effects or sub-population heterogeneity.',
    tags: ['PartialDependenceDisplay', 'PDP', 'ICE Plots', 'Model Explainability', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-099',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Pipeline Inspection',
    topic: 'Accessing Individual Fitted Steps within a Pipeline',
    category: 'Data Analysis and Modeling',
    difficulty: 'beginner',
    question: 'After fitting a pipeline `pipe = Pipeline([("scaler", StandardScaler()), ("reg", LinearRegression())])`, how do you access the learned coefficients `coef_` of the fitted regression step?',
    codeSnippet: `pipe.fit(X_train, y_train)

# Method 1:
# coefs = pipe.named_steps['reg'].coef_

# Method 2:
# coefs = pipe['reg'].coef_`,
    options: [
      'Both Method 1 and Method 2 are valid: individual steps are accessible via dictionary lookup `pipe["reg"]` or via the `named_steps` attribute dictionary',
      'Coefficients cannot be accessed once inside a pipeline; the model must be trained standalone',
      '`pipe.coef_` is exposed directly on the parent pipeline object',
      'You must call `pipe.unfit()` first'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'pipe["reg"].coef_ or pipe.named_steps["reg"].coef_ extracts the fitted estimator parameters',
    explanationTitle: 'Accessing Sub-Estimator State in Pipelines',
    explanationText:
      '`Pipeline` implements dictionary-like indexing: `pipe["step_name"]` retrieves the fitted step. You can inspect any attribute of the underlying step, such as `pipe["scaler"].mean_` or `pipe["reg"].coef_`.',
    deepDive:
      'To replace or modify a step dynamically: `pipe.set_params(reg__fit_intercept=False)`.',
    tags: ['Pipeline', 'named_steps', 'Model Inspection', 'Scikit-Learn', 'PCAD-31-02']
  },
  {
    id: 'pcad-sec4-100',
    section: 'Section 4',
    chapter: '4.5',
    track: 'pcad',
    cardType: 'Model Deployment',
    topic: 'Model Governance: Concept Drift vs Data Drift Detection',
    category: 'Data Analysis and Modeling',
    difficulty: 'intermediate',
    question: 'In production machine learning lifecycle management, what is the key distinction between Data Drift (Covariate Shift) and Concept Drift?',
    codeSnippet: `# Data Drift: P(X) changes while P(Y|X) remains constant
# Concept Drift: P(Y|X) changes while P(X) may remain identical`,
    options: [
      'Data Drift is a shift in the distribution of input features $P(X)$ over time; Concept Drift is a shift in the underlying statistical relationship between features and the target $P(Y|X)$ (e.g. consumer purchasing behavior changes after inflation)',
      'Data Drift affects SQL databases; Concept Drift affects NoSQL databases',
      'Data Drift occurs only when columns are renamed; Concept Drift occurs when data types change',
      'Data Drift is caused by network outages; Concept Drift is caused by memory leaks'
    ],
    correctAnswer: 0,
    correctOption: 0,
    stdoutExpected: 'Data Drift shifts input distribution P(X); Concept Drift shifts relationship P(Y|X), degrading model predictions',
    explanationTitle: 'Data Drift vs Concept Drift in Model Lifecycle',
    explanationText:
      'Data Drift occurs when input demographics change (e.g. app attracts younger users). The relationship between features and churn may still hold, but inputs have shifted. Concept Drift occurs when the ground truth relationship changes (e.g. a pandemic altering travel demand), causing a once-accurate model to degrade even if input values look familiar.',
    deepDive:
      'Monitor Data Drift using population stability index (PSI) or Kolmogorov-Smirnov (KS) tests comparing production feature distributions against training baselines.',
    tags: ['Data Drift', 'Concept Drift', 'Covariate Shift', 'Model Monitoring', 'MLOps', 'PCAD-31-02']
  }
];
