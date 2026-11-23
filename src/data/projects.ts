export const categories = [
  "All",
  "Data Engineering",
  "Data Analytics",
  "Machine Learning",
] as const;
export type Category = Exclude<(typeof categories)[number], "All">;
export type Visual =
  | "warehouse"
  | "dashboard"
  | "workflow"
  | "security"
  | "health"
  | "cafes"
  | "fiscal"
  | "attrition"
  | "stocks"
  | "sentiment"
  | "poverty"
  | "calories";
export interface Project {
  slug: string;
  title: string;
  category: Category;
  secondaryFocus: string;
  summary: string;
  problem: string;
  approach: string[];
  architecture: string[];
  outcome: string;
  limitations: string;
  technologies: string[];
  repositoryUrl: string;
  demoUrl?: string;
  image: Visual;
  featured: boolean;
  status: string;
  eyebrow: string;
  sourceReviewed: string;
  screenshot?: { url: string; alt: string };
}
// Curated public order also drives numbering, static routes, sitemap, and next-project links.
export const projects: Project[] = [
  {
    "slug": "travel-booking-analytics",
    "title": "Travel Booking Data Warehouse",
    "category": "Data Engineering",
    "eyebrow": "From raw events to reliable answers",
    "summary": "An end-to-end data warehousing project transforming synthetic travel-booking data into reliable analytical models and an interactive BI dashboard.",
    "problem": "Duplicate events, late booking updates, and invalid records make consistent booking and cancellation reporting difficult. A fictional travel platform provides a practical setting for designing reliable analytics.",
    "approach": [
      "Define one latest-valid booking per fact row and explicit metric contracts.",
      "Load synthetic CSV batches with Python, then validate and transform inside SQLite using SQL.",
      "Model customer history with SCD Type 2, route updates with Type 1, and booking facts in a star schema.",
      "Quarantine invalid records, support safe retries and late-dependency repair, and surface quality checks in Streamlit."
    ],
    "architecture": [
      "Synthetic CSV batches",
      "Python ingestion",
      "Raw event history",
      "SQL validation + quarantine",
      "Star schema + KPI views",
      "Streamlit / Plotly"
    ],
    "outcome": "The documented deterministic run produces 3,400 unique bookings from 3,563 raw booking versions, with three quarantined versions. The repository includes 33 automated tests and a dashboard with business filters and pipeline monitoring.",
    "limitations": "All data is synthetic. Booking value is not recognized revenue. SQLite is a local warehouse simulator; this project does not implement production CDC, distributed processing, or enterprise access controls.",
    "technologies": [
      "Python",
      "SQL",
      "SQLite",
      "Streamlit",
      "Plotly"
    ],
    "repositoryUrl": "https://github.com/Farscent/Travel-Booking-Data-Warehouse",
    "demoUrl": "https://travel-booking-datawarehouse.streamlit.app",
    "image": "warehouse",
    "featured": true,
    "status": "Independent project · Synthetic data",
    "sourceReviewed": "2026-11-19",
    "secondaryFocus": "Data Warehousing & Business Intelligence"
  },
  {
    "slug": "nexahub-marketing",
    "title": "NexaHub Marketing Performance Dashboard",
    "category": "Data Engineering",
    "eyebrow": "A clearer view of acquisition",
    "summary": "A business intelligence project connecting marketing lead data with advertising spend through BigQuery analytical models and interactive Looker Studio reporting.",
    "problem": "Lead acquisition and monthly advertising spend need consistent definitions and a shared reporting grain to compare channel efficiency without misleading cost-per-lead calculations.",
    "approach": [
      "Prepare and validate lead and spend inputs in Google Sheets before manual BigQuery imports.",
      "Aggregate both inputs to month and channel before a FULL OUTER JOIN, preserving unmatched records.",
      "Define paid CPL from summed spend and paid leads, retaining missing spend as NULL.",
      "Build channel filters and complete-month reporting in Looker Studio and manually reconcile totals."
    ],
    "architecture": [
      "Google Sheets",
      "Preparation + manual import",
      "BigQuery source tables",
      "SQL analytical views",
      "Looker Studio"
    ],
    "outcome": "For the documented March–May 2026 sample, the report reconciles 30 leads, 14 paid-channel leads, and $7,900 in spend. Paid CPL is $564.29. Google Ads had lower CPL than LinkedIn in this small sample; lead quality requires further analysis.",
    "limitations": "The full source register is not committed. Findings are descriptive, not measured business impact. Imports and reconciliation are manual; monthly spend does not support accurate partial-month CPL.",
    "technologies": [
      "Google Sheets",
      "BigQuery",
      "SQL",
      "Looker Studio"
    ],
    "repositoryUrl": "https://github.com/Farscent/NexaHub-Marketing-Performance-Dashboard",
    "demoUrl": "https://datastudio.google.com/reporting/75eefa77-a75c-403f-9579-2e3bc702f48b",
    "image": "dashboard",
    "featured": true,
    "status": "Business intelligence project",
    "sourceReviewed": "2026-11-19",
    "screenshot": {
      "url": "/images/projects/nexahub.png",
      "alt": "NexaHub Looker Studio marketing performance dashboard from the project README"
    },
    "secondaryFocus": "Business Intelligence"
  },
  {
    "slug": "regional-fiscal-analytics",
    "title": "TECHFEST 2025 — Regional Fiscal Analytics",
    "category": "Data Analytics",
    "eyebrow": "Evidence for a nuanced policy conversation",
    "summary": "A First Place team study at TECHFEST 2025 examining regional fiscal transfers and human development across Indonesian provinces.",
    "problem": "How do regional transfer realization, population, poverty, and economic conditions relate to differences in human development across provinces?",
    "approach": [
      "Clean numeric formats and impute missing values by island group.",
      "Engineer realization ratios, island groups, and transfer-per-capita features.",
      "Explore provincial comparisons, outliers, and geographic distributions.",
      "Apply Pearson correlation, PCA, and K-Means to interpret regional profiles and discuss policy recommendations."
    ],
    "architecture": [
      "2023 provincial dataset",
      "Cleaning + imputation",
      "Fiscal indicators",
      "Correlation + PCA",
      "K-Means profiles",
      "Policy interpretation"
    ],
    "outcome": "Team BebasAja won First Place in the TECHFEST 2025 Data Analytics Competition. The notebook found a weak, statistically non-significant association between realized transfers and HDI (r ≈ 0.23, p = 0.1578).",
    "limitations": "Exploratory associations across 38 provinces in a single year, including imputed values. Correlations do not establish a causal effect of fiscal transfers on human development.",
    "technologies": [
      "Python",
      "Pandas",
      "Statistical Analysis",
      "PCA",
      "K-Means"
    ],
    "repositoryUrl": "https://github.com/Farscent/Data-Analysis-Techfest2025",
    "image": "fiscal",
    "featured": false,
    "status": "Competition · First Place",
    "sourceReviewed": "2026-11-19",
    "secondaryFocus": "Data Science & Public Policy"
  },
  {
    "slug": "maternal-health-risk",
    "title": "Maternal Health Risk Prediction",
    "category": "Machine Learning",
    "eyebrow": "Interpretable models. Thoughtful decisions.",
    "summary": "An academic decision-support study in R exploring interpretable maternal health risk screening with Logistic Regression and CART.",
    "problem": "Resource-limited healthcare settings need ways to prioritize patients for review using routinely collected maternal health indicators.",
    "approach": [
      "Clean maternal-health records and inspect missing, duplicate, and physiologically implausible values.",
      "Explore clinical indicators, correlations, and multicollinearity.",
      "Compare logistic regression and a pruned CART decision tree on a stratified 70/30 split.",
      "Examine recall and precision trade-offs at different logistic-regression thresholds."
    ],
    "architecture": [
      "Maternal-health records",
      "R data preparation",
      "Exploratory analysis",
      "Logistic regression / CART",
      "Threshold evaluation",
      "Risk-screening interpretation"
    ],
    "outcome": "The documented experiment retained 1,169 records after cleaning. Lowering the logistic-regression threshold increased high-risk recall, while CART provided a more balanced set of reported classification metrics.",
    "limitations": "Academic decision-support study, not a clinically validated diagnostic application. Dataset results do not establish clinical safety, external validity, or readiness for patient care. It does not replace professional medical judgment.",
    "technologies": [
      "R",
      "Logistic Regression",
      "CART",
      "Statistical Analysis",
      "data.table",
      "ggplot2",
      "rpart"
    ],
    "repositoryUrl": "https://github.com/Farscent/Maternal-Health-Risk-Prediction-for-Early-Pregnancy-Risk-Screening",
    "image": "health",
    "featured": false,
    "status": "NTU GEM Trailblazer 2026 · Team study",
    "sourceReviewed": "2026-11-19",
    "secondaryFocus": "Applied Data Science"
  },
  {
    "slug": "employee-attrition",
    "title": "Employee Attrition Prediction",
    "category": "Machine Learning",
    "eyebrow": "Beyond accuracy, toward useful evaluation",
    "summary": "An academic predictive modeling project exploring employee attrition through feature engineering, classification pipelines, and rigorous model evaluation.",
    "problem": "Can classification models identify attrition cases more usefully than a majority-class baseline on a small, course-modified HR dataset?",
    "approach": [
      "Explore development-data distributions and class balance, then engineer ratio and interaction features.",
      "Use year-labelled development and holdout sets with no shared employee IDs; keep imputation, scaling, and encoding inside preprocessing pipelines and validation folds.",
      "Compare a dummy baseline, Logistic Regression, Random Forest, and XGBoost on five stratified folds, selecting by Average Precision with ROC-AUC and F1 as supporting metrics.",
      "Tune the classification threshold on out-of-fold development predictions, then evaluate the unchanged model and threshold on the holdout and interpret permutation importance."
    ],
    "architecture": [
      "Course-modified HR data",
      "Disjoint-ID split",
      "Preprocessing pipeline",
      "Cross-validation",
      "Threshold selection",
      "Holdout + interpretation"
    ],
    "outcome": "The selected XGBoost model achieved 0.5791 holdout average precision. At the development-selected 0.30 threshold, it identified 22 of 50 attrition cases while missing 28 and incorrectly flagging 13 non-attrition cases.",
    "limitations": "A teaching case, not verified current IBM workforce data. Scores are not calibrated; prediction horizon, fairness, and intervention costs need further validation. Feature importance is not causal evidence. The supplied year labels do not establish prospective evaluation, and earlier analysis of the dataset means this is not independent external validation.",
    "technologies": [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas"
    ],
    "repositoryUrl": "https://github.com/Farscent/IBM-Employee-Attrition-Prediction",
    "image": "attrition",
    "featured": false,
    "status": "GCI Global 2025 · Student project",
    "sourceReviewed": "2026-11-19",
    "secondaryFocus": "Predictive Analytics"
  },
  {
    "slug": "productive-study-cafes",
    "title": "Study Café Classification & Clustering",
    "category": "Machine Learning",
    "eyebrow": "A local question, a data-driven approach",
    "summary": "A machine learning study analyzing café reviews and characteristics to identify and map study-friendly café profiles in Yogyakarta.",
    "problem": "Star ratings do not capture everything that makes a café productive. Comfort, facilities, and crowd patterns provide additional context for choosing a study space.",
    "approach": [
      "Normalize keyword-based study, facility, and comfort signals by each café’s review count.",
      "Combine these with ratings and crowd data, then standardize six modeling features.",
      "Evaluate K-Means solutions and select four interpretable café profiles.",
      "Train k-NN to approximate the cluster-derived categories and map the results with Folium."
    ],
    "architecture": [
      "Google Reviews + metadata",
      "Keyword feature engineering",
      "Standardization",
      "K-Means profiles",
      "k-NN classification",
      "Folium map"
    ],
    "outcome": "The project creates four interpretable segments from 2,241 reviews and 196 café profiles, along with geographic visualizations and ranked study recommendations.",
    "limitations": "k-NN predicts cluster-derived recommendation labels, not independently collected ground truth. Its scores describe reproduction of those labels; recommendations have not been independently validated against actual user preferences. Fold-local preprocessing is future work.",
    "technologies": [
      "Python",
      "Pandas",
      "Scikit-learn",
      "K-Means",
      "k-NN",
      "Folium"
    ],
    "repositoryUrl": "https://github.com/Farscent/Classifying-and-Clustering-Productive-Study-Cafes-in-Yogyakarta",
    "image": "cafes",
    "featured": false,
    "status": "Data science study",
    "sourceReviewed": "2026-11-19",
    "secondaryFocus": "Clustering & Recommendation Analysis"
  },
  {
    slug: "stockscope",
    title: "StockScope — Stock Market Analytics",
    category: "Data Analytics",
    secondaryFocus: "Financial Analytics / Business Intelligence",
    eyebrow: "Market movements, in business context",
    summary: "An interactive financial analytics platform exploring stock performance, market indicators, and company revenue through a reproducible Python pipeline.",
    problem: "Daily stock prices and quarterly revenue have different frequencies and meanings. Comparing Tesla and GameStop requires validated dates, explicit price adjustments, and consistent revenue units.",
    approach: [
      "Collect adjusted historical prices through yfinance; validate, sort, and deduplicate observations while preserving missing volume.",
      "Calculate daily returns, complete-window 20/50-session moving averages, and trading-volume summaries.",
      "Analyze reported quarterly revenue in USD millions independently of the price window and compare stocks on shared trading dates.",
      "Share modular data, preprocessing, analytics, and Plotly functions between a research notebook and a five-view Streamlit dashboard, with mocked-provider tests."
    ],
    architecture: ["Yahoo Finance / yfinance", "Validation + preprocessing", "Pure analytics functions", "Plotly visualizations", "Streamlit + research notebook", "Automated tests"],
    outcome: "Delivers interactive price, volume, revenue, and comparative performance views, plus data exploration and CSV downloads. Tesla (TSLA) and GameStop (GME) are the primary research examples; findings depend on the selected window and provider coverage.",
    limitations: "Provider data may be delayed, revised, or unavailable. Prices and revenue are descriptive series with different reporting frequencies; their comparison establishes no causal relationship. This is not a forecasting or trading recommendation system. Tests use synthetic inputs and mocked providers.",
    technologies: ["Python", "Pandas", "NumPy", "yfinance", "Plotly", "Streamlit", "pytest"],
    repositoryUrl: "https://github.com/Farscent/Stock-Scope",
    demoUrl: "https://stock-scope-dashboard.streamlit.app",
    image: "stocks",
    featured: false,
    status: "Independent financial analytics project",
    sourceReviewed: "2026-11-23"
  },
  {
    slug: "gamadata-tni-sentiment",
    title: "Gamadata 1 — TNI Law Sentiment Analysis",
    category: "Data Analytics",
    secondaryFocus: "Natural Language Processing / Social Research",
    eyebrow: "Reading patterns in public discourse",
    summary: "A social media sentiment analysis project examining public discourse surrounding Indonesia's 2025 TNI Law revision through NLP and data visualization.",
    problem: "How do collected Twitter posts express sentiment toward the 2025 TNI Law revision, and which words recur within the resulting sentiment categories?",
    approach: [
      "Collect Twitter posts using topic-specific keyword queries, then remove duplicates and clean mentions, punctuation, and noisy text.",
      "Tokenize Indonesian text, remove Sastrawi stopwords, normalize slang, and apply Gemini-assisted text normalization.",
      "Prompt Gemini 2.0 Flash to label sentiment specifically toward the proposed law, using positive, neutral, and negative categories.",
      "Explore category counts, keyword frequencies, and word clouds with Pandas, Matplotlib, and Seaborn."
    ],
    architecture: ["Keyword-based Twitter collection", "Cleaning + deduplication", "Indonesian text processing", "Gemini-assisted labeling", "Keyword analysis", "Sentiment visualizations"],
    outcome: "The README reports analysis of 4,472 collected tweets. The research delivers sentiment summaries and recurring-keyword visualizations as part of the Data Research Division of BEM KM UGM's Gamadata initiative.",
    limitations: "These are patterns in a keyword-selected Twitter dataset, not representative estimates of Indonesian public opinion. LLM-generated labels have no documented independent validation metrics and may misread context or sarcasm. The batching code can pad missing responses with neutral labels, potentially affecting category counts.",
    technologies: ["Python", "Pandas", "Sastrawi", "NLTK", "Gemini API", "Matplotlib", "Seaborn", "WordCloud"],
    repositoryUrl: "https://github.com/Farscent/Gamadata-1-Sentiment-Analysis",
    image: "sentiment",
    featured: false,
    status: "BEM KM UGM · Data Research Division",
    sourceReviewed: "2026-11-23"
  },
  {
    slug: "gamadata-poverty-forecasting",
    title: "Gamadata 2 — Poverty Line Forecasting",
    category: "Data Analytics",
    secondaryFocus: "Socioeconomic Forecasting / Data Science",
    eyebrow: "Historical statistics, future questions",
    summary: "A socioeconomic forecasting study analyzing Indonesia's poverty-line trends using historical government statistics and data-driven modeling.",
    problem: "How can historical BPS poverty-line statistics and socioeconomic indicators support an exploratory view of future poverty-line trends across Indonesia?",
    approach: [
      "Collect and standardize BPS poverty-line data and supporting socioeconomic series, including wages, unemployment, and regional economic indicators.",
      "Align regional and year identifiers, inspect missingness, and prepare features for exploratory analysis and modeling.",
      "Build provincial forecasts with auto-ARIMA, Linear Regression, and Prophet; investigate an explicitly unfinished XGBoost experiment with lag and rolling-mean socioeconomic features.",
      "Visualize provincial projections and their unweighted mean in a separate national-summary notebook, keeping projections distinct from observations."
    ],
    architecture: ["BPS historical statistics", "Regional data preparation", "Socioeconomic indicators", "Exploratory analysis", "Predictive modeling", "Provincial + summary visualizations"],
    outcome: "Developed under the Data Research Division of BEM KM UGM. The README frames a 2025–2030 forecasting study; the national-summary notebook visualizes supplied provincial projections for 2025–2029 and calculates their unweighted mean.",
    limitations: "Project projections are research estimates, not observed outcomes or official BPS forecasts. The poverty line is a monetary threshold, not the poverty rate. An unweighted mean of provincial projections does not reproduce an official national statistic. The notebook marks its multivariate XGBoost experiment as unfinished; no validated final-model selection or accuracy score is claimed here. Missing data and future socioeconomic changes limit interpretation.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "pmdarima", "Prophet", "XGBoost"],
    repositoryUrl: "https://github.com/Farscent/Gamadata-2-Forecasting-Poverty-Rate",
    image: "poverty",
    featured: false,
    status: "BEM KM UGM · Data Research Division",
    sourceReviewed: "2026-11-23"
  },
  {
    slug: "calorie-expenditure-prediction",
    title: "Calorie Expenditure Prediction",
    category: "Machine Learning",
    secondaryFocus: "Regression / Predictive Modeling",
    eyebrow: "From exercise measurements to model evaluation",
    summary: "An end-to-end machine learning regression project predicting exercise-related calorie expenditure using XGBoost and hyperparameter optimization.",
    problem: "Can physiological characteristics and exercise measurements estimate calorie expenditure within an academic regression dataset?",
    approach: [
      "Follow CRISP-DM to define the objective and explore demographic, physiological, and exercise features across 9,000 labeled observations documented in the README.",
      "Prepare features using IQR-based outlier capping and categorical encoding, then create an 80/20 training-validation split.",
      "Compare Linear Regression, Random Forest Regressor, and XGBoost Regressor; configure Optuna to minimize validation RMSE across 1,000 trials.",
      "Report regression evaluation with MAE, MSE, R², and five-fold cross-validation; generate predictions for the supplied unlabeled exercise records."
    ],
    architecture: ["Exercise + physiological data", "EDA + preprocessing", "Regression comparison", "Optuna optimization", "Validation + cross-validation", "Dataset predictions"],
    outcome: "Best Project — OmahTI Learning Center, Data Science & AI Track. The saved tuned-model notebook output reports MAE 0.9518, MSE 2.0415, and R² 0.9995 on its validation split. These are academic dataset results, not externally validated performance.",
    limitations: "Optuna repeatedly evaluates the same validation split, so its final scores are not an untouched test estimate. Preprocessing occurs before the split, and the saved optimization output does not document completion of all 1,000 configured trials. External validation remains necessary. This academic model is not clinically validated or suitable for medical decision-making.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Optuna"],
    repositoryUrl: "https://github.com/Farscent/Calorie-Expenditure-Prediction",
    image: "calories",
    featured: false,
    status: "Best Project · OmahTI Learning Center, Data Science & AI Track",
    sourceReviewed: "2026-11-23"
  }
];
