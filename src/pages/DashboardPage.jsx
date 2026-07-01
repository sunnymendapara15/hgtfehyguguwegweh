const metrics = [
  { label: 'Active clients', value: '8', detail: '+2 this month' },
  { label: 'Projects in flight', value: '5', detail: '3 UX studies · 2 product builds' },
  { label: 'Avg. delivery time', value: '14 days', detail: 'from kickoff to ready-for-review' },
  { label: 'Conversion lift', value: '+18%', detail: 'after last staggered launch' }
];

const highlights = [
  {
    title: 'Rebuilt Analytics Platform',
    detail: 'Delivered a dashboard concept that reduced cognitive load for finance leads and secured stakeholder buy-in for the next sprint.',
    timestamp: 'June 2026'
  },
  {
    title: 'Product Lab Session',
    detail: 'Led a research day with 4 user interviews and surfaced a new cross-platform navigation pattern.',
    timestamp: 'May 2026'
  },
  {
    title: 'Design System Refresh',
    detail: 'Published updated tokens and motion specs so the engineering team could ship faster with confidence.',
    timestamp: 'May 2026'
  }
];

export default function DashboardPage() {
  return (
    <section className="page-section">
      <div className="section-hero">
        <p className="eyebrow">Dashboard</p>
        <h1>Portfolio pulse</h1>
        <p>High-level metrics and qualitative highlights that illustrate how I approach product design and front-end craft.</p>
      </div>

      <div className="stats-grid">
        {metrics.map((metric) => (
          <article className="stat-card" key={metric.label}>
            <p className="stat-label">{metric.label}</p>
            <p className="stat-value">{metric.value}</p>
            <p className="stat-detail">{metric.detail}</p>
          </article>
        ))}
      </div>

      <div className="highlight-area">
        <div className="section-row">
          <div>
            <h2>Recent highlights</h2>
            <p>Stories from the last few launches that reflect impact, clarity, and momentum.</p>
          </div>
          <span>Updated weekly</span>
        </div>
        <div className="highlight-list">
          {highlights.map((highlight) => (
            <article className="highlight-item" key={highlight.title}>
              <div>
                <strong>{highlight.title}</strong>
                <p>{highlight.detail}</p>
              </div>
              <div>
                <span>{highlight.timestamp}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
