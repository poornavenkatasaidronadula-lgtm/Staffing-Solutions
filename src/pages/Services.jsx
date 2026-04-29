import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import './Services.css';

const allServices = [
  {
    icon: '👥', title: 'Permanent Hiring', color: 'blue', badge: null,
    tagline: 'High-quality, full-time talent sourced and placed with precision.',
    features: ['AI-ranked shortlists', 'Cultural fit analysis', '90-day guarantee', 'Dedicated account manager'],
    path: '/services/permanent-hiring',
  },
  {
    icon: '📋', title: 'Contract Hiring', color: 'purple', badge: null,
    tagline: 'Agile workforce models to meet your project and seasonal demands.',
    features: ['Rapid onboarding', 'Flexible engagement', 'Skills-first matching', 'Pan-India coverage'],
    path: '/services/contract-hiring',
  },
  {
    icon: '🎯', title: 'Leadership Hiring', color: 'teal', badge: null,
    tagline: 'Discreet, high-touch search for CXO and leadership roles.',
    features: ['Board-level discretion', 'Executive assessment', 'Reference verification', 'Global network'],
    path: '/services/leadership-hiring',
  },
  {
    icon: '🌏', title: 'Global Hiring', color: 'orange', badge: null,
    tagline: 'Global hiring across MENA, APAC, ANZ, and remote India talent.',
    features: ['10+ countries covered', 'Visa & compliance support', 'Local HR expertise', 'Remote-first hiring'],
    path: '/services/global-hiring',
  },
  {
    icon: '🔄', title: 'RPO', color: 'pink', badge: 'New',
    tagline: 'End-to-end recruitment process outsourcing tailored to your scale.',
    features: ['Dedicated RPO team', 'ATS integration', 'Employer branding', 'Analytics dashboard'],
    path: '/services/rpo',
  },
  {
    icon: '⚡', title: 'Managed Recruitment', color: 'yellow', badge: null,
    tagline: 'Flexible, on-demand talent delivered with a free trial.',
    features: ['Free 7-day trial', 'Pay-per-hire model', 'No lock-in contracts', 'Instant scaling'],
    path: '/services/managed-recruitment',
  },
  {
    icon: '🤝', title: 'Hire Meetups', color: 'green', badge: null,
    tagline: 'Curated hiring events connecting top candidates with your team.',
    features: ['Pre-screened candidates', 'Structured interviews', 'Bulk hiring events', 'Virtual & in-person'],
    path: '/services/hire-meetups',
  },
  {
    icon: '📊', title: 'Talent Intelligence', color: 'teal', badge: null,
    tagline: 'Market insights, compensation benchmarks, and skill heatmaps.',
    features: ['Real-time benchmarks', 'Skill gap analysis', 'Competitor mapping', 'Hiring forecasts'],
    path: '/services/talent-intelligence',
  },
  {
    icon: '💰', title: 'Payroll Processing', color: 'blue', badge: null,
    tagline: 'Accurate, compliant payroll — handled end-to-end.',
    features: ['Statutory compliance', 'Multi-state payroll', 'Leave management', 'Direct deposit'],
    path: '/services/payroll',
  },
  {
    icon: '🏢', title: 'HR Outsourcing', color: 'purple', badge: null,
    tagline: 'End-to-end HR operations, compliance, and employee lifecycle.',
    features: ['Onboarding & offboarding', 'Policy management', 'Performance frameworks', 'HR tech stack'],
    path: '/services/hr-outsourcing',
  },
];

export default function Services() {
  return (
    <main className="services-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content text-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>What We Offer</div>
            <h1 className="section-title">
              Complete Talent <span className="text-gradient">Solutions</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
              From entry-level to CEOs, contract to permanent — every hiring need covered 
              with AI precision and human expertise.
            </p>
            <Link to="/hire" className="btn btn-primary btn-lg">
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="srv-grid">
            {allServices.map((s, i) => (
              <div key={s.title} className={`srv-card srv-card--${s.color}`}>
                <div className="srv-card__top">
                  <div className="srv-card__icon">{s.icon}</div>
                  <div className="srv-card__meta">
                    <h2 className="srv-card__title">
                      {s.title}
                      {s.badge && <span className="srv-card__badge">{s.badge}</span>}
                    </h2>
                    <p className="srv-card__tagline">{s.tagline}</p>
                  </div>
                </div>
                <div className="srv-card__features">
                  {s.features.map(f => (
                    <div key={f} className="srv-card__feature">
                      <CheckCircle size={14} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Link to={s.path} className="btn btn-outline btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="services-cta card text-center">
            <div className="services-cta__stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <h2 className="section-title">Not sure which service is right for you?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
              Talk to our talent advisors for a free consultation. We'll recommend the 
              perfect solution for your hiring goals.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Free Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
