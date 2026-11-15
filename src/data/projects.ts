export const categories = [
  "All",
  "Data Engineering",
  "Data Science & ML",
  "AI & Automation",
  "Analytics & Strategy",
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
const repo = (name: string) => `https://github.com/Farscent/${name}`;
export const projects: Project[] = [
  {
    slug: "travel-booking-analytics",
    title: "Travel Booking Analytics",
    category: "Data Engineering",
    eyebrow: "From raw events to reliable answers",
    summary:
      "An end-to-end dimensional warehouse and BI dashboard that turns synthetic travel-booking events into traceable insights.",
    problem:
      "Duplicate events, late booking updates, and invalid records make consistent booking and cancellation reporting difficult. A fictional travel platform provides a practical setting for designing reliable analytics.",
    approach: [
      "Define one latest-valid booking per fact row and explicit metric contracts.",
      "Load synthetic CSV batches with Python, then validate and transform inside SQLite using SQL.",
      "Model customer history with SCD Type 2, route updates with Type 1, and booking facts in a star schema.",
      "Quarantine invalid records, support safe retries and late-dependency repair, and surface quality checks in Streamlit.",
    ],
    architecture: [
      "Synthetic CSV batches",
      "Python ingestion",
      "Raw event history",
      "SQL validation + quarantine",
      "Star schema + KPI views",
      "Streamlit / Plotly",
    ],
    outcome:
      "The documented deterministic run produces 3,400 unique bookings from 3,563 raw booking versions, with three quarantined versions. The repository includes 33 automated tests and a dashboard with business filters and pipeline monitoring.",
    limitations:
      "All data is synthetic. Booking value is not recognized revenue. SQLite is a local warehouse simulator; this project does not implement production CDC, distributed processing, or enterprise access controls.",
    technologies: ["Python", "SQL", "SQLite", "Streamlit", "Plotly"],
    repositoryUrl: repo("Travel-Booking-Data-Warehouse"),
    demoUrl: "https://travel-booking-datawarehouse.streamlit.app",
    image: "warehouse",
    featured: true,
    status: "Independent project · Synthetic data",
    sourceReviewed: "2026-11-15",
  },
  {
    slug: "nexahub-marketing",
    title: "NexaHub Marketing Performance",
    category: "Analytics & Strategy",
    eyebrow: "A clearer view of acquisition",
    summary:
      "Connecting marketing leads and ad spend through BigQuery views and a focused Looker Studio dashboard.",
    problem:
      "Lead acquisition and monthly advertising spend need consistent definitions and a shared reporting grain to compare channel efficiency without misleading cost-per-lead calculations.",
    approach: [
      "Prepare and validate lead and spend inputs in Google Sheets before manual BigQuery imports.",
      "Aggregate both inputs to month and channel before a FULL OUTER JOIN, preserving unmatched records.",
      "Define paid CPL from summed spend and paid leads, retaining missing spend as NULL.",
      "Build channel filters and complete-month reporting in Looker Studio and manually reconcile totals.",
    ],
    architecture: [
      "Google Sheets",
      "Preparation + manual import",
      "BigQuery source tables",
      "SQL analytical views",
      "Looker Studio",
    ],
    outcome:
      "For the documented March–May 2026 sample, the report reconciles 30 leads, 14 paid-channel leads, and $7,900 in spend. Paid CPL is $564.29. Google Ads had lower CPL than LinkedIn in this small sample; lead quality requires further analysis.",
    limitations:
      "The full source register is not committed. Findings are descriptive, not measured business impact. Imports and reconciliation are manual; monthly spend does not support accurate partial-month CPL.",
    technologies: ["Google Sheets", "BigQuery", "SQL", "Looker Studio"],
    repositoryUrl: repo("NexaHub-Marketing-Performance-Dashboard"),
    demoUrl:
      "https://datastudio.google.com/reporting/75eefa77-a75c-403f-9579-2e3bc702f48b",
    image: "dashboard",
    featured: true,
    status: "Business intelligence project",
    sourceReviewed: "2026-11-15",
    screenshot: {
      url: "https://github.com/user-attachments/assets/fd413b00-d62c-4e83-97f7-8d67a624407f",
      alt: "NexaHub Looker Studio marketing performance dashboard from the project README",
    },
  },
  {
    slug: "internship-intelligence",
    title: "Internship Intelligence",
    category: "AI & Automation",
    eyebrow: "Less tracking. More intention.",
    summary:
      "A human-reviewed AI workflow for organizing recruitment emails, application records, and upcoming deadlines.",
    problem:
      "Internship updates arrive across multiple emails. Manually maintaining application stages and deadlines creates repetitive work and opportunities for missed actions.",
    approach: [
      "Normalize Gmail messages with JavaScript and record them in an email log.",
      "Use Gemini to extract structured information into a review queue.",
      "Keep approval and application-sheet updates manual in the current MVP.",
      "Build separate n8n workflows for calendar synchronization and a digest of deadlines in the next three days.",
    ],
    architecture: [
      "Gmail intake",
      "JavaScript normalization",
      "Gemini extraction",
      "Human review queue",
      "Applications sheet",
      "Calendar + deadline digest",
    ],
    outcome:
      "Four locally built MVP workflows cover application intake, AI email extraction, calendar synchronization, and deadline digests. Sanitized workflow exports and setup documentation are available in the repository.",
    limitations:
      "This is a local Docker MVP, not a verified 24/7 autonomous deployment. Approved review records require manual transfer. Changed deadlines and multiple calendar events per application are not yet supported.",
    technologies: [
      "n8n",
      "Google Gemini",
      "Gmail API",
      "Google Sheets",
      "Google Calendar",
      "JavaScript",
      "Docker",
    ],
    repositoryUrl: repo("Internship-Intelligence"),
    image: "workflow",
    featured: true,
    status: "Local MVP · Human in the loop",
    sourceReviewed: "2026-11-15",
  },
  {
    slug: "autosiem",
    title: "AutoSIEM",
    category: "AI & Automation",
    eyebrow: "Signals into security context",
    summary:
      "A security analytics prototype bringing machine learning and generative AI into fraud investigation.",
    problem:
      "High transaction volumes make manual fraud triage difficult. Analysts need useful signals and readable context to support investigations.",
    approach: [
      "Explore transaction behavior and balance-related features.",
      "Build an XGBoost fraud classifier with Optuna hyperparameter optimization.",
      "Use Gemini to support human-readable alert summaries and investigation timelines.",
      "Visualize fraud patterns, suspicious accounts, and transaction drilldowns with Plotly.",
    ],
    architecture: [
      "Transaction dataset",
      "Feature preparation",
      "XGBoost + Optuna",
      "Behavioral analysis",
      "Gemini summaries",
      "Plotly prototype",
    ],
    outcome:
      "The team prototype received an Honorable Mention at the UGM DCSE Summer Course 2025. The repository documents the model approach and dashboard concepts for security investigation.",
    limitations:
      "A course prototype rather than an operational security service. Reported classifier accuracy alone does not establish real-world fraud detection quality or a production false-positive rate.",
    technologies: ["Python", "XGBoost", "Optuna", "Gemini API", "Plotly"],
    repositoryUrl: repo("AUTOSIEM"),
    image: "security",
    featured: true,
    status: "Course prototype · Honorable Mention",
    sourceReviewed: "2026-11-15",
  },
  {
    slug: "maternal-health-risk",
    title: "Maternal Health Risk Prediction",
    category: "Data Science & ML",
    eyebrow: "Interpretable models. Thoughtful decisions.",
    summary:
      "Exploring interpretable early pregnancy risk screening during the NTU GEM Trailblazer Summer Programme.",
    problem:
      "Resource-limited healthcare settings need ways to prioritize patients for review using routinely collected maternal health indicators.",
    approach: [
      "Clean maternal-health records and inspect missing, duplicate, and physiologically implausible values.",
      "Explore clinical indicators, correlations, and multicollinearity.",
      "Compare logistic regression and a pruned CART decision tree on a stratified 70/30 split.",
      "Examine recall and precision trade-offs at different logistic-regression thresholds.",
    ],
    architecture: [
      "Maternal-health records",
      "R data preparation",
      "Exploratory analysis",
      "Logistic regression / CART",
      "Threshold evaluation",
      "Risk-screening interpretation",
    ],
    outcome:
      "The documented experiment retained 1,169 records after cleaning. Lowering the logistic-regression threshold increased high-risk recall, while CART provided a more balanced set of reported classification metrics.",
    limitations:
      "Educational clinical decision-support prototype, not a diagnostic medical application. Dataset results do not establish clinical safety, external validity, or readiness for patient care.",
    technologies: [
      "R",
      "data.table",
      "ggplot2",
      "Logistic Regression",
      "CART",
      "rpart",
    ],
    repositoryUrl: repo(
      "Maternal-Health-Risk-Prediction-for-Early-Pregnancy-Risk-Screening",
    ),
    image: "health",
    featured: false,
    status: "NTU summer programme · Team project",
    sourceReviewed: "2026-11-15",
  },
  {
    slug: "productive-study-cafes",
    title: "Finding a Better Place to Study",
    category: "Data Science & ML",
    eyebrow: "A local question, a data-driven approach",
    summary:
      "Turning Google Reviews and café metadata into interpretable study-friendly café profiles in Yogyakarta.",
    problem:
      "Star ratings do not capture everything that makes a café productive. Comfort, facilities, and crowd patterns provide additional context for choosing a study space.",
    approach: [
      "Normalize keyword-based study, facility, and comfort signals by each café’s review count.",
      "Combine these with ratings and crowd data, then standardize six modeling features.",
      "Evaluate K-Means solutions and select four interpretable café profiles.",
      "Train k-NN to approximate the cluster-derived categories and map the results with Folium.",
    ],
    architecture: [
      "Google Reviews + metadata",
      "Keyword feature engineering",
      "Standardization",
      "K-Means profiles",
      "k-NN classification",
      "Folium map",
    ],
    outcome:
      "The project creates four interpretable segments from 2,241 reviews and 196 café profiles, along with geographic visualizations and ranked study recommendations.",
    limitations:
      "Recommendation labels are generated by clustering, not independent ground truth. k-NN scores describe reproduction of those labels. Independent user validation and fold-local preprocessing are future work.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "K-Means",
      "k-NN",
      "Folium",
    ],
    repositoryUrl: repo(
      "Classifying-and-Clustering-Productive-Study-Cafes-in-Yogyakarta",
    ),
    image: "cafes",
    featured: false,
    status: "Data science study",
    sourceReviewed: "2026-11-15",
  },
  {
    slug: "regional-fiscal-analytics",
    title: "Regional Fiscal Transfer Analytics",
    category: "Analytics & Strategy",
    eyebrow: "Evidence for a nuanced policy conversation",
    summary:
      "Examining regional fiscal transfers and human development across Indonesia’s provinces.",
    problem:
      "How do regional transfer realization, population, poverty, and economic conditions relate to differences in human development across provinces?",
    approach: [
      "Clean numeric formats and impute missing values by island group.",
      "Engineer realization ratios, island groups, and transfer-per-capita features.",
      "Explore provincial comparisons, outliers, and geographic distributions.",
      "Apply Pearson correlation, PCA, and K-Means to interpret regional profiles and discuss policy recommendations.",
    ],
    architecture: [
      "2023 provincial dataset",
      "Cleaning + imputation",
      "Fiscal indicators",
      "Correlation + PCA",
      "K-Means profiles",
      "Policy interpretation",
    ],
    outcome:
      "Team BebasAja won First Place in the TECHFEST 2025 Data Analytics Competition. The notebook found a weak, statistically non-significant association between realized transfers and HDI (r ≈ 0.23, p = 0.1578).",
    limitations:
      "Exploratory associations across 38 provinces in a single year, including imputed values. Correlations do not establish a causal effect of fiscal transfers on human development.",
    technologies: [
      "Python",
      "Pandas",
      "Statistical Analysis",
      "PCA",
      "Clustering",
      "Visualization",
    ],
    repositoryUrl: repo("Data-Analysis-Techfest2025"),
    image: "fiscal",
    featured: false,
    status: "Competition · First Place",
    sourceReviewed: "2026-11-15",
  },
  {
    slug: "employee-attrition",
    title: "Employee Attrition Prediction",
    category: "Data Science & ML",
    eyebrow: "Beyond accuracy, toward useful evaluation",
    summary:
      "A student ML study of workforce attrition, with careful validation, model comparison, and explainable evaluation.",
    problem:
      "Can classification models identify attrition cases more usefully than a majority-class baseline on a small, course-modified HR dataset?",
    approach: [
      "Use year-labelled development and holdout sets with no shared employee IDs.",
      "Keep imputation, scaling, and encoding inside cross-validation folds.",
      "Compare a dummy baseline, logistic regression, random forest, and XGBoost by average precision.",
      "Select a threshold on development predictions and interpret holdout performance with permutation importance.",
    ],
    architecture: [
      "Course-modified HR data",
      "Disjoint-ID split",
      "Preprocessing pipeline",
      "Cross-validation",
      "Threshold selection",
      "Holdout + interpretation",
    ],
    outcome:
      "The selected XGBoost model achieved 0.5791 holdout average precision. At the development-selected 0.30 threshold, it identified 22 of 50 attrition cases while missing 28 and incorrectly flagging 13 non-attrition cases.",
    limitations:
      "A teaching case, not verified current IBM workforce data. Scores are not calibrated; prediction horizon, fairness, and intervention costs need further validation. Feature importance is not causal evidence.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    repositoryUrl: repo("IBM-Employee-Attrition-Prediction"),
    image: "attrition",
    featured: false,
    status: "GCI Global 2025 · Student project",
    sourceReviewed: "2026-11-15",
  },
];
