import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Target, Award, Zap, Shield } from 'lucide-react';
import './About.css';

const team = [
  { name: 'Vikram Anand', role: 'Founder & CEO', avatar: 'VA', desc: '20+ years in talent advisory and executive search across India & APAC.' },
  { name: 'Meera Nair', role: 'CTO', avatar: 'MN', desc: 'Built Edge-AI™ from scratch. Former Lead Engineer at Razorpay & Flipkart.' },
  { name: 'Rohan Das', role: 'Head of RPO', avatar: 'RD', desc: 'Delivered 10,000+ hires across GCCs, startups, and enterprises.' },
  { name: 'Anita Bose', role: 'VP Talent Intelligence', avatar: 'AB', desc: 'SHRM-certified HR strategist with expertise in compensation benchmarking.' },
];

const milestones = [
  { year: '2004', title: 'Founded', desc: 'Started as a boutique staffing firm in Bangalore.' },
  { year: '2012', title: 'Pan-India Expansion', desc: 'Opened offices in Mumbai, Delhi, Hyderabad, and Pune.' },
  { year: '2018', title: 'Global Presence', desc: 'Expanded to MENA, APAC, and ANZ markets.' },
  { year: '2022', title: 'Edge-AI™ Launch', desc: 'Launched our proprietary AI hiring platform, reducing TTH by 70%.' },
  { year: '2024', title: '500+ Clients', desc: 'Crossed 500 enterprise clients and 2M talent pool.' },
  { year: '2026', title: 'Industry Leader', desc: "Recognized as India's #1 AI-augmented staffing firm." },
];

export default function About() {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__bg" />
        <div className="container">
          <div className="about-hero__content">
            <div className="section-label" style={{ justifyContent: 'center' }}>About StaffingEdge</div>
            <h1 className="section-title text-center">
              Two Decades of Human Expertise,<br />
              <span className="text-gradient">Now Powered by AI</span>
            </h1>
            <p className="section-subtitle text-center" style={{ margin: '0 auto 40px' }}>
              We are India's leading AI-augmented Talent Advisory Firm — combining the precision of 
              artificial intelligence with the wisdom of 20+ years of recruitment mastery.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link to="/hire" className="btn btn-primary btn-lg">Work With Us <ArrowRight size={18} /></Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="text-center section-header">
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Values</div>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="about-values">
            {[
              { icon: Zap, title: 'Speed', desc: 'We believe time is the most valuable resource in hiring. Our AI processes 1000+ profiles in minutes.' },
              { icon: Target, title: 'Precision', desc: '94% match rate through behavioral AI and role-specific benchmarking. No guesswork.' },
              { icon: Users, title: 'Human-led', desc: 'AI ranks, humans decide. Every placement is validated by experienced recruiters.' },
              { icon: Globe, title: 'Global', desc: 'From Bangalore to Dubai to Singapore — we source talent wherever the best candidates are.' },
              { icon: Shield, title: 'Trust', desc: 'Discretion, confidentiality, and integrity are non-negotiable in everything we do.' },
              { icon: Award, title: 'Excellence', desc: '4.9/5 client satisfaction. We settle for nothing less than exceptional outcomes.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="about-value-card card">
                <div className="about-value-card__icon"><Icon size={24} /></div>
                <h3 className="about-value-card__title">{title}</h3>
                <p className="about-value-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="text-center section-header">
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Journey</div>
            <h2 className="section-title">Built Over <span className="text-gradient">Two Decades</span></h2>
          </div>
          <div className="timeline">
            {milestones.map(({ year, title, desc }, i) => (
              <div key={year} className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}>
                <div className="timeline-item__content card">
                  <span className="timeline-item__year">{year}</span>
                  <h3 className="timeline-item__title">{title}</h3>
                  <p className="timeline-item__desc">{desc}</p>
                </div>
                <div className="timeline-item__dot" />
              </div>
            ))}
            <div className="timeline__line" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="text-center section-header">
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Leaders</div>
            <h2 className="section-title">Meet the <span className="text-gradient">Team</span></h2>
          </div>
          <div className="team-grid">
            {team.map(({ name, role, avatar, desc }) => (
              <div key={name} className="team-card card">
                <div className="team-card__avatar">{avatar}</div>
                <h3 className="team-card__name">{name}</h3>
                <p className="team-card__role">{role}</p>
                <p className="team-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="about-cta card text-center">
            <Globe size={40} style={{ color: '#60a5fa', margin: '0 auto 20px', display: 'block' }} />
            <h2 className="section-title">Ready to Partner with Us?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
              Join 500+ companies who trust StaffingEdge for their talent needs.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/hire" className="btn btn-primary btn-lg">Hire Talent <ArrowRight size={18} /></Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Talk to Us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
