import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Play, Star, TrendingUp,
  Users, Clock, Award, ChevronDown, ChevronUp, Zap,
  Globe, BarChart3, Shield, Rocket, Target, Brain, Sparkles
} from 'lucide-react';
import './Home.css';

/* ╔═══════════════════════════════════════════╗
   ║  COUNTER HOOK                             ║
   ╚═══════════════════════════════════════════╝ */
function useCounter(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

/* ╔═══════════════════════════════════════════╗
   ║  INTERSECTION OBSERVER HOOK               ║
   ╚═══════════════════════════════════════════╝ */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ╔═══════════════════════════════════════════╗
   ║  STATS DATA                               ║
   ╚═══════════════════════════════════════════╝ */
const stats = [
  { value: 2, suffix: 'Mn+', label: 'Talent Pool', icon: Users },
  { value: 500, suffix: '+', label: 'Clients Served', icon: Award },
  { value: 70, suffix: '%', label: 'Faster Shortlisting', icon: TrendingUp },
  { value: 7, suffix: ' Days', label: 'Avg Time-to-Hire', icon: Clock },
];

/* ╔═══════════════════════════════════════════╗
   ║  SERVICES DATA                            ║
   ╚═══════════════════════════════════════════╝ */
const services = [
  {
    icon: '👥', title: 'Permanent Hiring',
    desc: 'High-quality, full-time talent sourced and placed with precision. We ensure every hire aligns with your culture and goals.',
    link: '/services/permanent-hiring', color: 'blue',
  },
  {
    icon: '📋', title: 'Contract Hiring',
    desc: 'Agile workforce models to meet your project and seasonal demands. Scale up or down without long-term commitments.',
    link: '/services/contract-hiring', color: 'purple',
  },
  {
    icon: '🎯', title: 'Leadership Hiring',
    desc: 'Discreet, high-touch search for CXO and leadership roles. We find leaders who drive transformation.',
    link: '/services/leadership-hiring', color: 'teal',
  },
  {
    icon: '🌏', title: 'Global Hiring',
    desc: 'Global hiring across MENA, APAC, ANZ, and remote India talent pools with local expertise.',
    link: '/services/global-hiring', color: 'orange',
  },
  {
    icon: '🔄', title: 'RPO',
    desc: 'End-to-end recruitment process outsourcing tailored to your scale and culture. Fully managed hiring.',
    link: '/services/rpo', color: 'pink', badge: 'New',
  },
  {
    icon: '⚡', title: 'Managed Recruitment',
    desc: 'Flexible, on-demand talent delivered with a free trial. No risk, just results.',
    link: '/services/managed-recruitment', color: 'yellow',
  },
  {
    icon: '🤝', title: 'Hire Meetups',
    desc: 'Curated hiring events connecting top candidates with your team in a structured format.',
    link: '/services/hire-meetups', color: 'green',
  },
  {
    icon: '📊', title: 'Talent Intelligence',
    desc: 'Market insights, compensation benchmarks, and skill heatmaps to drive hiring strategy.',
    link: '/services/talent-intelligence', color: 'teal',
  },
  {
    icon: '💰', title: 'Payroll Processing',
    desc: 'Accurate, compliant payroll—handled end-to-end so you can focus on growth.',
    link: '/services/payroll', color: 'blue',
  },
];

/* ╔═══════════════════════════════════════════╗
   ║  SECTORS DATA                             ║
   ╚═══════════════════════════════════════════╝ */
const sectors = [
  { icon: '🌐', title: 'GCC / Captives', desc: 'Global Capability Centers require specialized niche talent. We deliver.' },
  { icon: '🚀', title: 'Startups', desc: 'Scale from 50 to 500+ with agile hiring aligned to your growth stage.', badge: 'New' },
  { icon: '💻', title: 'Tech-first Companies', desc: 'Deep expertise in engineering, product, data, AI and more.' },
  { icon: '🖥️', title: 'IT | Offshoring', desc: 'Indian talent for global teams — cost-effective and high quality.' },
];

/* ╔═══════════════════════════════════════════╗
   ║  TESTIMONIALS DATA                        ║
   ╚═══════════════════════════════════════════╝ */
const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'VP of Engineering, TechCorp India',
    rating: 5,
    text: 'StaffingEdge transformed our hiring. We went from weeks to days. Their AI-matching is genuinely impressive and the quality of candidates was far above what we experienced with traditional recruiters.',
    company: 'TechCorp',
  },
  {
    name: 'Arjun Mehta',
    role: 'CEO, GrowthStartup',
    rating: 5,
    text: 'As a fast-growing startup, we needed to hire 40 engineers in 3 months. StaffingEdge delivered in 6 weeks. The cultural fit was exceptional — everyone they placed is still with us.',
    company: 'GrowthStartup',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Talent, GlobalGCC',
    rating: 5,
    text: 'We run a GCC with very specific hiring needs. The Talent Intelligence reports alone are worth the partnership. Outstanding data, market benchmarks, and unbeatable talent access.',
    company: 'GlobalGCC',
  },
  {
    name: 'Raj Patel',
    role: 'CHRO, Enterprise Fintech',
    rating: 5,
    text: 'The leadership hiring team is phenomenal. Very discreet, thorough, and connected. They placed our CTO and CFO within 45 days. Incredible outcome.',
    company: 'FinTech Corp',
  },
];

/* ╔═══════════════════════════════════════════╗
   ║  FAQ DATA                                 ║
   ╚═══════════════════════════════════════════╝ */
const faqs = [
  {
    q: 'What makes StaffingEdge different from traditional recruitment agencies?',
    a: "StaffingEdge combines advanced AI hiring technology with over two decades of human expertise. Unlike traditional agencies, we deliver 70% faster shortlisting, better candidate matches, and scalable solutions aligned to your long-term business goals.",
  },
  {
    q: 'Can you handle both volume hiring and specialized senior roles?',
    a: "Absolutely. We provide flexible solutions for both volume hiring (campus drives, large teams) and specialized roles (CXOs, AI experts, product innovators). Whether you need to scale fast or hire for mission-critical positions, we ensure speed, precision, and cost efficiency.",
  },
  {
    q: 'How fast is your average time-to-hire?',
    a: "With our proprietary AI-powered hiring model, we achieve 70% faster shortlisting, under 7-day time-to-hire averages, and save 23 recruiter hours per opening. Your team spends less time searching and more time scaling.",
  },
  {
    q: 'How do you ensure cultural fit, not just skills match?',
    a: "We use behavioral AI assessments, recruiter insights, and role-specific benchmarks to evaluate both technical and cultural fit. Every hire is aligned with your company's values, growth stage, and strategic goals.",
  },
  {
    q: 'What industries and sectors do you specialize in?',
    a: "We partner with diverse industries including GCCs, tech-first companies, startups, IT offshoring, manufacturing, BFSI, supply chain, and healthcare. With proven expertise across tech, non-tech, and emerging skills.",
  },
  {
    q: 'Do you offer end-to-end hiring solutions?',
    a: "Yes! We offer permanent and contract hiring, RPO, managed recruitment, executive search, hire meetups, talent intelligence, and payroll processing for complete workforce management.",
  },
];

/* ╔═══════════════════════════════════════════╗
   ║  STAT CARD COMPONENT                      ║
   ╚═══════════════════════════════════════════╝ */
function StatCard({ value, suffix, label, icon: Icon, animate }) {
  const count = useCounter(value, 1800, animate);
  return (
    <div className="stat-card">
      <div className="stat-card__icon"><Icon size={22} /></div>
      <div className="stat-card__value">
        {count}{suffix}
      </div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}

/* ╔═══════════════════════════════════════════╗
   ║  FAQ ITEM                                 ║
   ╚═══════════════════════════════════════════╝ */
function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-item__question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <div className={`faq-item__answer ${open ? 'faq-item__answer--open' : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

/* ╔═══════════════════════════════════════════╗
   ║  HERO BACKGROUND COMPONENT                ║
   ╚═══════════════════════════════════════════╝ */
/* ── BLK DESIGN SYSTEM EXACT BACKGROUND ── */
const HeroBackground = () => (
  <div className="hero__bg-container">
    {/* Base navy background rendered via CSS on .hero */}

    {/* ── Large dark navy blobs (top-left, top-right, bottom-left corners) ── */}
    <div className="blk-blob blk-blob--top-left" />
    <div className="blk-blob blk-blob--top-right-1" />
    <div className="blk-blob blk-blob--top-right-2" />
    <div className="blk-blob blk-blob--bottom-left" />

    {/* ── Two bright blue gradient accent squares ── */}
    <div className="blk-square blk-square--left" />
    <div className="blk-square blk-square--right" />

    {/* ── Subtle particle dots ── */}
    <div className="blk-dots" />
  </div>
);

/* ============================================================
   MAIN HOME PAGE
   ============================================================ */
export default function Home() {
  const [statsRef, statsInView] = useInView(0.2);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="home">
      {/* ══════════════════════════ HERO (Vector Wave Style) ══════════════════════════ */}
      <section className="hero">
        <HeroBackground />

        <div className="container">
          <div className="hero__content-left animate-fade-up">
            <h1 className="hero__headline-left">
              STAFFING<br />
              SOLUTIONS
            </h1>

            <p className="hero__subhead-left delay-100 animate-fade-up">
              Connecting elite talent with innovative businesses.
              Experience premium hiring powered by domain experts and advanced technology.
            </p>

            <div className="hero__actions-left delay-200 animate-fade-up">
              <Link to="/contact" className="btn-white-pill">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ INTRO SECTION (Domed Top) ══════════════════════════ */}
      <section className="intro-section">
        <div className="container">
          <h2 className="intro-title">We Hired Exceptional Talents<br />for Top Brands</h2>
          
          <div className="intro-content">
            <h3 className="intro-subtitle">AI Augmented<br />Talent Advisory & Hiring</h3>
            <p className="intro-text">
              <strong>Staffing Solutions</strong> is a premier AI-augmented Talent Advisory Firm, trusted by top enterprises to hire exceptional talent across tech, non-tech, and emerging skills. We blend 20+ years of expertise with advanced AI to deliver hiring outcomes that are faster, sharper, and aligned with your goals—helping you build teams that fuel growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ PREMIUM BENTO GRID ══════════════════════════ */}
      <section className="bento-section">
        <div className="bento-container">
          <div className="bento-grid">
            
            {/* ─── 20 Years ─── */}
            <div className="bcard bcard-20">
              <h3 className="bcard-num text-orange">20</h3>
              <p className="bcard-label">Years of Industry<br/>Presence</p>
            </div>

            {/* ─── 25K+ ─── */}
            <div className="bcard bcard-25k">
              <h3 className="bcard-num text-orange">25K+</h3>
              <p className="bcard-label">Hires</p>
            </div>

            {/* ─── Center Purple Card ─── */}
            <div className="bcard bcard-center">
              <p className="bcard-center-sub">Talent Advisory with</p>
              <h2 className="bcard-center-title">Deep Evaluation & Smart Hiring<br/>with AI</h2>
              <div className="bcard-orb-wrapper">
                <img src="/images/diamond_gem_orb.png" alt="AI Orb" className="bcard-orb" />
              </div>
            </div>

            {/* ─── Human + AI Synergy ─── */}
            <div className="bcard bcard-human">
              <div className="bcard-icon">🧠</div>
              <h4 className="bcard-title">Human + AI Synergy</h4>
              <p className="bcard-desc">Automation empowers<br/>(Not replaces) our<br/>seasoned recruiters.</p>
            </div>

            {/* ─── More Accurate ─── */}
            <div className="bcard bcard-accurate">
              <h4 className="bcard-title">More Accurate Matches</h4>
              <p className="bcard-desc">80% reduction in candidate<br/>mismatches, 63% higher<br/>offer-acceptance</p>
              <div className="bcard-icon bcard-icon-bottom">📋</div>
            </div>

            {/* ─── Deeply Evaluated ─── */}
            <div className="bcard bcard-deep">
              <div className="bcard-icon">👥</div>
              <h4 className="bcard-title">Deeply Evaluated Talent</h4>
              <p className="bcard-desc">Interview only those<br/>who've cleared AI and<br/>expert benchmarks</p>
            </div>

            {/* ─── Efficient Scale ─── */}
            <div className="bcard bcard-scale">
              <div className="bcard-icon">⚙️</div>
              <h4 className="bcard-title">Efficient Scale</h4>
              <p className="bcard-desc">Handle campus drives,<br/>volume hiring, and niche<br/>searches with confidence</p>
            </div>

            {/* ─── 1500+ ─── */}
            <div className="bcard bcard-1500">
              <h3 className="bcard-num text-orange">1500+</h3>
              <p className="bcard-label">Customers</p>
              <div className="bcard-dots">
                <span className="dot dot-w"></span>
                <span className="dot dot-o"></span>
              </div>
            </div>

            {/* ─── 2Mn+ ─── */}
            <div className="bcard bcard-2mn">
              <h3 className="bcard-num text-orange">2Mn+</h3>
              <p className="bcard-label">Talent Pool</p>
              <div className="bcard-icon bcard-icon-corner">💬</div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════ SECTORS (Industries We Serve) ══════════════════════════ */}
      <section className="section sectors-section" style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Sector-Specific <span className="text-gradient">Expertise</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Deep domain knowledge across the most competitive and fast-moving sectors.</p>
          </div>
          <div className="sector-ai-grid">
            {[
              { id: 'gcc', img: 'sector_gcc.png', icon: '🌐', title: 'GCC | Captives', desc: 'Global Capability Centers require specialized niche talent across tech, finance, and ops. We deliver pre-vetted talent at scale.', tag: 'Most Active' },
              { id: 'startups', img: 'sector_startups.png', icon: '🚀', title: 'Startups', desc: 'Scale from 50 to 500+ with agile hiring aligned to your growth stage. We understand the speed and culture startup teams need.', tag: 'New' },
              { id: 'tech', img: 'sector_tech.png', icon: '💻', title: 'Tech-first Companies', desc: 'Deep expertise in engineering, product, data, and AI roles. We source candidates who think in systems and ship fast.' },
              { id: 'offshore', img: 'sector_offshore.png', icon: '🖥️', title: 'IT | Offshoring', desc: 'Cost-effective Indian talent for global teams across MENA, APAC, ANZ, and beyond. Quality without compromise.' },
            ].map(({ id, img, icon, title, desc, tag }) => (
              <Link to="/sectors" key={id} className="sector-ai-card">
                <div className="sector-ai-card__bg">
                  <img src={`/images/${img}`} alt={title} />
                  <div className="sector-ai-card__overlay"></div>
                </div>
                <div className="sector-ai-card__content">
                  <div className="sector-ai-card__header">
                    <span className="sector-ai-card__icon">{icon}</span>
                    {tag && <span className="sector-ai-card__tag">{tag}</span>}
                  </div>
                  <div className="sector-ai-card__body">
                    <h3 className="sector-ai-card__title">{title}</h3>
                    <p className="sector-ai-card__desc">{desc}</p>
                  </div>
                  <div className="sector-ai-card__cta">
                    Know More <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ SERVICES (Sticky Premium Layout) ══════════════════════════ */}
      <section className="section services-section">
        <div className="container">
          <div className="services-sticky-layout">
            <div className="services-sticky-left">
              <div className="sticky-content">
                <div className="section-label">What We Offer</div>
                <h2 className="section-title">End-to-End <br/><span className="text-gradient">Talent Solutions</span></h2>
                <p className="section-subtitle">
                  From entry-level to C-suite, contract to permanent — we cover every hiring need
                  with speed, precision, and strategic foresight.
                </p>
                <Link to="/contact" className="btn btn-outline" style={{ marginTop: '24px' }}>
                  Explore All Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="services-sticky-right">
              <div className="services-premium-list">
                {services.map((service, i) => (
                  <Link key={service.title} to={service.link} className="service-row-card">
                    <div className="service-row-card__icon-box">
                      <span className="service-row-card__icon">{service.icon}</span>
                    </div>
                    <div className="service-row-card__content">
                      <h3 className="service-row-card__title">
                        {service.title}
                        {service.badge && <span className="service-row-card__badge">{service.badge}</span>}
                      </h3>
                      <p className="service-row-card__desc">{service.desc}</p>
                    </div>
                    <div className="service-row-card__action">
                      <ArrowRight size={24} className="service-row-card__arrow" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TESTIMONIALS (Marquee) ══════════════════════════ */}
      <section className="section testimonials-section" style={{ overflow: 'hidden' }}>
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">From Their Experience <span className="text-gradient">to Your Inspiration</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Trusted by startups, unicorns, and enterprises.</p>
          </div>
        </div>

        <div className="testimonials-marquee">
          <div className="testimonials-marquee-track">
            {/* Double map for infinite scroll effect */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="tcard tcard--marquee">
                <div className="tcard__stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="tcard__text">"{t.text}"</p>
                <div className="tcard__author">
                  <div className="tcard__avatar">{t.name.split(' ').map(w => w[0]).join('')}</div>
                  <div>
                    <span className="tcard__name">{t.name}</span>
                    <span className="tcard__role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ CONTACT FORM ══════════════════════════ */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <div className="section-label">Get Started</div>
              <h2 className="section-title">
                Let's Find Your <span className="text-gradient">Perfect Hire</span>
              </h2>
              <p className="section-subtitle">
                Fill out the form and our talent advisors will reach out within 24 hours.
                No spam, just solutions.
              </p>

              <div className="contact-points">
                {[
                  { icon: '⚡', text: 'Response within 24 hours guaranteed' },
                  { icon: '🎯', text: 'Tailored hiring strategy for your needs' },
                  { icon: '🆓', text: 'First consultation is completely free' },
                  { icon: '🌐', text: 'Available across 10+ countries' },
                ].map(({ icon, text }) => (
                  <div key={text} className="contact-point">
                    <span>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <form className="contact-form" onSubmit={e => { e.preventDefault(); }}>
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
                  <label className="form-label">Company Name</label>
                  <input className="form-input" type="text" placeholder="Tech Corp India" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input className="form-input" type="tel" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">I'm looking to *</label>
                <select className="form-select" required>
                  <option value="" disabled selected>Select your goal</option>
                  <option>Hire talent (Employer)</option>
                  <option>Find a job (Candidate)</option>
                  <option>Get recruitment consulting</option>
                  <option>Learn about RPO services</option>
                  <option>Get talent intelligence reports</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" placeholder="Tell us about your hiring needs, team size, roles, timeline..." />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <ArrowRight size={18} />
              </button>
              <p className="contact-form__note">
                🔒 Your information is secure and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FAQ ══════════════════════════ */}
      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="faq-layout">
            <div className="faq-header">
              <div className="section-label">Got Questions?</div>
              <h2 className="section-title">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="section-subtitle">
                Everything you need to know about our hiring process, technology, and solutions.
              </p>
              <Link to="/contact" className="btn btn-outline" style={{ marginTop: '24px' }}>
                Ask Us Anything <ArrowRight size={16} />
              </Link>
            </div>

            <div className="faq-list">
              {faqs.map(({ q, a }) => (
                <FaqItem key={q} question={q} answer={a} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
