const projects = [
  {
    name: 'Compass Travel Studio',
    description: 'Responsive suite for planning aspirational travel experiences, pairing editorial storytelling with a selectable pricing matrix.',
    status: 'Product live',
    metrics: '4.8/5 satisfaction, 30% faster onboarding',
    tags: ['Research', 'Motion', 'Web']
  },
  {
    name: 'Citrine Finance OS',
    description: 'A dashboard for finance operators that surfaces runway, efficiency, and scenario modeling in one glance.',
    status: 'Prototype',
    metrics: 'Beta with 10 users',
    tags: ['Data Viz', 'Systems Thinking']
  },
  {
    name: 'Lumen Health Studio',
    description: 'Mobile-first care experience with guided check-ins, asynchronous consults, and healthy habit nudges.',
    status: 'Design sprint',
    metrics: '4-week build, inclusive flows',
    tags: ['Accessibility', 'Mobile']
  }
];

const practices = [
  'Pair research with prototyping: every insight earns a click-ready artifact.',
  'Design systems first: consistent tokens keep surface-level polish and dev velocity aligned.',
  'Narrative handoff: share tapestries of context so engineers ship the story, not just components.'
];

export default function ProjectsPage() {
  return (
    <section className="page-section">
      <div className="section-hero">
        <p className="eyebrow">Projects</p>
        <h1>Work in motion</h1>
        <p>A curated set of recent engagements and the rhythms that keep the work grounded in clarity.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div>
              <h3>{project.name}</h3>
              <p className="project-meta">{project.status} · {project.metrics}</p>
            </div>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="insight-panel">
        {practices.map((practice) => (
          <article className="insight-card" key={practice}>
            <p>{practice}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
