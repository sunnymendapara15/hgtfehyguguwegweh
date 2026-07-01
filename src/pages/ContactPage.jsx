const contactDetails = [
  { label: 'Email', value: 'hello@maya.studio', detail: 'Replies within 24 hours' },
  { label: 'Call', value: '+1 (415) 555-0193', detail: 'Weekdays, 9am–5pm PT' }
];

const socials = ['Dribbble', 'LinkedIn', 'Behance'];

export default function ContactPage() {
  return (
    <section className="page-section contact-section">
      <div className="section-hero">
        <p className="eyebrow">Contact</p>
        <h1>Let’s craft the next chapter</h1>
        <p>Share the challenge and I’ll respond with a roadmap for design, prototyping, and launch-ready engineering.</p>
      </div>

      <div className="contact-grid">
        <article className="contact-card">
          <h3>Availability</h3>
          <p className="contact-meta">Open to freelance partnerships, long-term product roles, and advisory conversations.</p>
          {contactDetails.map((detail) => (
            <div key={detail.label}>
              <p className="contact-meta" style={{ margin: 0 }}>{detail.label}</p>
              <p style={{ margin: '0.1rem 0' }}>{detail.value}</p>
              <p className="contact-meta" style={{ margin: 0 }}>{detail.detail}</p>
            </div>
          ))}
          <p className="contact-meta">Prefer async first contact to shape the scope before scheduling a call.</p>
          <div className="contact-meta" style={{ display: 'flex', gap: '0.75rem' }}>
            {socials.map((platform) => (
              <span key={platform}>{platform}</span>
            ))}
          </div>
        </article>

        <form className="contact-form">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell me about the project" required />
          </div>
          <div className="form-actions">
            <button type="submit">Send note →</button>
          </div>
        </form>
      </div>
    </section>
  );
}
