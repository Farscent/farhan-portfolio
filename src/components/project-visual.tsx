import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Check,
  Database,
  FileSpreadsheet,
  GitBranch,
  Mail,
  ShieldCheck,
} from "lucide-react";
import type { Visual } from "@/data/projects";

// Conceptual illustrations; no fabricated dashboard metrics.
export function ProjectVisual({
  variant,
  large = false,
}: {
  variant: Visual;
  large?: boolean;
}) {
  return (
    <div
      className={`project-visual visual-${variant} ${large ? "visual-large" : ""}`}
      role="img"
      aria-label={`Conceptual ${variant} project illustration; not a screenshot or measured result`}
    >
      <div className="visual-grid" />
      {variant === "warehouse" ? (
        <div className="warehouse-illustration">
          <div className="mini-label">Analytics architecture</div>
          <div className="pipeline-row">
            <div className="pipeline-node">
              <FileSpreadsheet size={22} />
              <span>Raw events</span>
            </div>
            <span className="pipeline-line" />
            <div className="pipeline-node pipeline-primary">
              <Database size={25} />
              <span>Warehouse</span>
            </div>
            <span className="pipeline-line" />
            <div className="pipeline-node">
              <Activity size={22} />
              <span>Insights</span>
            </div>
          </div>
          <div className="schema-branches">
            <span>dim_customer</span>
            <span>fact_booking</span>
            <span>dim_route</span>
          </div>
          <div className="visual-foot">
            <span>
              <Check size={11} /> Validate
            </span>
            <span>
              <GitBranch size={11} /> Transform
            </span>
            <span>
              <Database size={11} /> Model
            </span>
          </div>
        </div>
      ) : variant === "dashboard" ? (
        <div className="dashboard-illustration">
          <div className="dashboard-top">
            <span>
              <span className="mini-blue-dot" /> NEXAHUB{" "}
              <b>/ marketing intelligence</b>
            </span>
            <span>Channel overview</span>
          </div>
          <div className="dashboard-widgets">
            <div>
              <span>Acquisition</span>
              <div className="mini-bars">
                {[38, 62, 48, 82, 67, 95, 78, 106, 89].map((h, i) => (
                  <i key={i} style={{ height: h }} />
                ))}
              </div>
            </div>
            <div>
              <span>Channel mix</span>
              <div className="donut" />
            </div>
          </div>
          <div className="dashboard-bottom">
            Google Sheets <ArrowRight size={12} /> BigQuery{" "}
            <ArrowRight size={12} /> Looker Studio
          </div>
          <span className="illustration-caption">Illustrative view</span>
        </div>
      ) : variant === "workflow" ? (
        <div className="workflow-illustration">
          <div className="mini-label">Automation with human review</div>
          <div className="pipeline-row">
            <div className="pipeline-node">
              <Mail size={24} />
              <span>Email</span>
            </div>
            <span className="pipeline-line" />
            <div className="pipeline-node pipeline-primary">
              <BrainCircuit size={27} />
              <span>Extract</span>
            </div>
            <span className="pipeline-line" />
            <div className="pipeline-node">
              <Check size={24} />
              <span>Review</span>
            </div>
          </div>
          <div className="workflow-caption">
            <span className="tiny-dot" /> AI-assisted. Human-verified.
          </div>
        </div>
      ) : variant === "security" ? (
        <div className="security-illustration">
          <div className="radar">
            <span />
            <span />
            <span />
            <ShieldCheck size={47} />
            <i />
            <i />
          </div>
          <div>
            <p className="mini-label">AutoSIEM · Investigation support</p>
            <div className="signal-lines">
              <i />
              <i />
              <i />
            </div>
            <span className="visual-note">
              Detect patterns. Understand context.
            </span>
          </div>
        </div>
      ) : variant === "health" ? (
        <div className="health-illustration">
          <div className="mini-label">Interpretable risk screening</div>
          <svg viewBox="0 0 360 110" fill="none">
            <path
              d="M0 60H65L85 45L105 72L130 18L151 98L178 43L197 60H250L268 45L287 68L307 55H360"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M0 104H360" stroke="currentColor" opacity=".2" />
          </svg>
          <div className="health-labels">
            <span>Logistic regression</span>
            <span>Decision trees</span>
          </div>
          <p>Supporting decisions with clarity.</p>
        </div>
      ) : variant === "cafes" ? (
        <div className="scatter-illustration">
          <div className="mini-label">Yogyakarta · Café profiles</div>
          <div className="scatter-plot">
            {Array.from({ length: 36 }, (_, i) => (
              <i
                key={i}
                className={`cluster-${i % 4}`}
                style={{
                  left: `${8 + ((i * 37) % 84)}%`,
                  top: `${12 + ((i * 23) % 70)}%`,
                }}
              />
            ))}
            <span>Comfort →</span>
          </div>
          <div className="cluster-legend">
            <span>Study</span>
            <span>Facilities</span>
            <span>Comfort</span>
          </div>
        </div>
      ) : variant === "fiscal" ? (
        <div className="fiscal-illustration">
          <div className="mini-label">Indonesia · Regional perspectives</div>
          <div className="fiscal-chart">
            {[30, 42, 66, 45, 89, 60, 75, 105, 81, 120, 90, 110].map((h, i) => (
              <div key={i}>
                <i style={{ height: h }} />
                <i style={{ height: h * 0.62 + 15 }} />
              </div>
            ))}
          </div>
          <div className="visual-note">
            Fiscal transfers × human development
          </div>
        </div>
      ) : (
        <div className="attrition-illustration">
          <div className="mini-label">Model evaluation · Beyond accuracy</div>
          <svg viewBox="0 0 340 145" fill="none">
            <path d="M20 15V125H325" stroke="currentColor" opacity=".3" />
            <path
              d="M20 120L65 65L110 45L155 32L210 27L260 24L320 20"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              d="M20 125L320 20"
              stroke="currentColor"
              strokeDasharray="4 5"
              opacity=".3"
            />
          </svg>
          <div className="health-labels">
            <span>Precision</span>
            <span>Recall</span>
            <span>Interpretation</span>
          </div>
          <span className="illustration-caption">Conceptual curve</span>
        </div>
      )}
    </div>
  );
}
