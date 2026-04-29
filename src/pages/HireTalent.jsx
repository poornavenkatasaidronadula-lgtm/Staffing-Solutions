import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Send } from 'lucide-react';
import './HireTalent.css';

const hiringTypes = [
  { id: 'permanent', icon: '👥', label: 'Permanent Hiring', desc: 'Full-time talent, placed with precision' },
  { id: 'contract', icon: '📋', label: 'Contract Hiring', desc: 'Agile workforce for your projects' },
  { id: 'executive', icon: '🎯', label: 'Leadership / CXO', desc: 'Executive and senior leadership roles' },
  { id: 'rpo', icon: '🔄', label: 'RPO', desc: 'Full recruitment process outsourcing' },
  { id: 'meetup', icon: '🤝', label: 'Hire Meetup', desc: 'Curated hiring events' },
  { id: 'global', icon: '🌏', label: 'Global Hiring', desc: 'Cross-border talent acquisition' },
];

const benefits = [
  '70% faster shortlisting than traditional methods',
  'Pre-vetted, culture-fit candidates only',
  'Dedicated account manager from day one',
  '90-day replacement guarantee on permanent hires',
  'Free first consultation — no commitment needed',
  'Results in as few as 7 days for contract roles',
];

export default function HireTalent() {
  const [selectedType, setSelectedType] = useState('permanent');
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="hire-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content text-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>🚀 Start Hiring</div>
            <h1 className="section-title">
              Tell Us Who You <span className="text-gradient">Need to Hire</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Fill in the details below and our AI-powered matching engine gets to work immediately. 
              First candidates in your inbox within 48 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="hire-layout">
            {/* Left: Benefits */}
            <div className="hire-benefits">
              <h2 className="hire-benefits__title">Why Hire with Us?</h2>
              <div className="hire-benefits__list">
                {benefits.map(b => (
                  <div key={b} className="hire-benefit-item">
                    <CheckCircle size={18} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="hire-stats">
                {[
                  { num: '2M+', label: 'Pre-vetted candidates' },
                  { num: '7 Days', label: 'Avg. time-to-hire' },
                  { num: '500+', label: 'Happy clients' },
                  { num: '94%', label: 'Match accuracy' },
                ].map(({ num, label }) => (
                  <div key={label} className="hire-stat">
                    <div className="hire-stat__num">{num}</div>
                    <div className="hire-stat__label">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div className="hire-success card text-center">
                  <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎉</div>
                  <h2>Request Received!</h2>
                  <p>Our talent advisors will reach out within 24 hours with a personalized hiring plan.</p>
                  <Link to="/" className="btn btn-primary" style={{ marginTop: '24px' }}>
                    Back to Home
                  </Link>
                </div>
              ) : (
                <form className="hire-form card" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                  <h3 className="hire-form__title">Hiring Request Form</h3>

                  {/* Hiring Type */}
                  <div className="form-group">
                    <label className="form-label">What are you looking for? *</label>
                    <div className="hire-type-grid">
                      {hiringTypes.map(({ id, icon, label, desc }) => (
                        <button
                          key={id}
                          type="button"
                          className={`hire-type-btn ${selectedType === id ? 'hire-type-btn--active' : ''}`}
                          onClick={() => setSelectedType(id)}
                        >
                          <span className="hire-type-btn__icon">{icon}</span>
                          <span className="hire-type-btn__label">{label}</span>
                          <span className="hire-type-btn__desc">{desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input className="form-input" type="text" placeholder="Priya Sharma" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Work Email *</label>
                      <input className="form-input" type="email" placeholder="priya@company.com" required />
                    </div>
                  </div>
                  <div className="contact-form__row">
                    <div className="form-group">
                      <label className="form-label">Company Name *</label>
                      <input className="form-input" type="text" placeholder="Tech Corp India" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Number of Open Roles</label>
                      <select className="form-select" defaultValue="">
                        <option value="" disabled>Select range</option>
                        <option>1–5 roles</option>
                        <option>6–20 roles</option>
                        <option>21–50 roles</option>
                        <option>50+ roles</option>
                      </select>
                    </div>
                  </div>
                  <div className="contact-form__row">
                    <div className="form-group">
                      <label className="form-label">Industry / Sector</label>
                      <select className="form-select" defaultValue="">
                        <option value="" disabled>Select sector</option>
                        <option>GCC / Captive</option>
                        <option>Startup</option>
                        <option>Tech-first Company</option>
                        <option>IT / Offshoring</option>
                        <option>BFSI</option>
                        <option>Manufacturing</option>
                        <option>Healthcare</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Expected Timeline</label>
                      <select className="form-select" defaultValue="">
                        <option value="" disabled>Select timeline</option>
                        <option>ASAP (within 1 week)</option>
                        <option>Within 1 month</option>
                        <option>1–3 months</option>
                        <option>3+ months</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Describe the roles / skills needed</label>
                    <textarea
                      className="form-textarea"
                      placeholder="e.g. Senior React Engineers with 5+ years experience, comfortable with TypeScript and Node.js..."
                      style={{ minHeight: '120px' }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    <Send size={18} />
                    Submit Hiring Request
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '12px', color: '#475569' }}>
                    🔒 Your information is confidential. We respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
