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
  | "attrition";
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
  }
];
