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

      {/* ══════════════════════════ LOGO STRIP (Client Logos) ══════════════════════════ */}
      <section className="logo-strip">
        <div className="container">
          <p className="logo-strip__label">Trusted by leading companies across India & beyond</p>
          <div className="logo-strip__track">
            {['Infosys', 'Wipro', 'Zomato', 'Paytm', 'Razorpay', 'CRED', 'Meesho', 'BharatPe', 'Slice', 'Groww', 'PhonePe', 'Dream11'].map(logo => (
              <div key={logo} className="logo-strip__logo">{logo}</div>
            ))}
            {['Infosys', 'Wipro', 'Zomato', 'Paytm', 'Razorpay', 'CRED', 'Meesho', 'BharatPe'].map(logo => (
              <div key={logo + '_2'} className="logo-strip__logo">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ STATS ══════════════════════════ */}
      <section className="section stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} animate={statsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ HOW IT WORKS ══════════════════════════ */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Process</div>
            <h2 className="section-title">Hire Smarter in <span className="text-gradient">3 Simple Steps</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>From first call to final offer — our AI-powered process is built for speed and precision.</p>
          </div>
          <div className="process-steps">
            {[
              { step: '01', icon: '🎯', title: 'Define Your Need', desc: 'Share your role requirements, culture, and timeline. Our advisors craft a precision hiring brief in under 24 hours.' },
              { step: '02', icon: '🤖', title: 'AI Matches & Vets', desc: 'Our Edge-AI™ scans 2M+ profiles, ranks by 50+ parameters, and our recruiters curate only the top 1% for your role.' },
              { step: '03', icon: '🚀', title: 'You Hire, We Handle', desc: 'Receive pre-vetted shortlists within 7 days. We manage scheduling, assessments, and offer negotiation end-to-end.' },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="process-step">
                <div className="process-step__number">{step}</div>
                <div className="process-step__icon">{icon}</div>
                <h3 className="process-step__title">{title}</h3>
                <p className="process-step__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ EDGE AI FEATURE ══════════════════════════ */}
      <section className="section edge-section">
        <div className="container">
          <div className="edge-layout">
            {/* Left: Visual */}
            <div className="edge-visual">
              <div className="edge-orb" />
              <div className="edge-card edge-card--main">
                <div className="edge-card__label">Edge-AI™ Platform</div>
                <div className="edge-metrics">
                  {[
                    { label: 'Shortlisting Speed', value: 70, unit: '% faster' },
                    { label: 'Match Accuracy', value: 94, unit: '% precision' },
                    { label: 'Offer Acceptance', value: 88, unit: '% rate' },
                  ].map(({ label, value, unit }) => (
                    <div key={label} className="edge-metric-item">
                      <div className="edge-metric-header">
                        <span className="edge-metric-label">{label}</span>
                        <span className="edge-metric-value">{value}{unit}</span>
                      </div>
                      <div className="edge-metric-bar">
                        <div className="edge-metric-fill" style={{ width: `${value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="edge-pill edge-pill--1"><Zap size={13} /> AI Ranked</div>
              <div className="edge-pill edge-pill--2"><Shield size={13} /> Pre-Vetted</div>
              <div className="edge-pill edge-pill--3"><BarChart3 size={13} /> Benchmarked</div>
            </div>

            {/* Right: Content */}
            <div className="edge-content">
              <div className="section-label">Our Technology</div>
              <h2 className="section-title">
                Introducing{' '}
                <span className="text-gradient">Edge-AI™</span>
                <br />Smarter Hiring, Every Time
              </h2>
              <p className="section-subtitle">
                Our proprietary AI model combines behavioral assessments, role-specific benchmarks,
                and recruiter intelligence to deliver pre-vetted, culture-fit candidates — at unprecedented speed.
              </p>

              <div className="edge-features">
                {[
                  { icon: Target, title: 'AI-Ranked Matching', desc: 'Candidates ranked and scored based on 50+ data parameters.' },
                  { icon: Shield, title: 'Behavioral Assessment', desc: 'Deep evaluation of cultural fit, not just technical skills.' },
                  { icon: BarChart3, title: 'Market Intelligence', desc: 'Compensation benchmarks and skill heatmaps in real-time.' },
                  { icon: Rocket, title: 'Auto-benchmarking', desc: 'Role-specific benchmarks updated against live market data.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="edge-feature">
                    <div className="edge-feature__icon"><Icon size={18} /></div>
                    <div>
                      <h4 className="edge-feature__title">{title}</h4>
                      <p className="edge-feature__desc">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/hire" className="btn btn-primary" style={{ marginTop: '32px' }}>
                See How It Works <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ SERVICES ══════════════════════════ */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>What We Offer</div>
            <h2 className="section-title">End-to-End <span className="text-gradient">Talent Solutions</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              From entry-level to C-suite, contract to permanent — we cover every hiring need
              with speed, precision, and strategic foresight.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <Link key={service.title} to={service.link} className={`service-card service-card--${service.color}`}
                style={{ animationDelay: `${i * 0.07}s` }}>
                <div className="service-card__icon">{service.icon}</div>
                <div className="service-card__body">
                  <h3 className="service-card__title">
                    {service.title}
                    {service.badge && <span className="service-card__badge">{service.badge}</span>}
                  </h3>
                  <p className="service-card__desc">{service.desc}</p>
                </div>
                <div className="service-card__arrow"><ArrowRight size={16} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ SECTORS ══════════════════════════ */}
      <section className="section sectors-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>Industries We Serve</div>
            <h2 className="section-title">Sector-Specific <span className="text-gradient">Expertise</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Deep domain knowledge across the most competitive and fast-moving sectors.</p>
          </div>
          <div className="sector-cards-grid">
            {[
              { icon: '🌐', emoji_bg: 'rgba(29,114,232,0.15)', title: 'GCC | Captives', desc: 'Global Capability Centers require specialized niche talent across tech, finance, and ops. We deliver pre-vetted talent at scale.', tag: 'Most Active' },
              { icon: '🚀', emoji_bg: 'rgba(233,30,99,0.15)', title: 'Startups', desc: 'Scale from 50 to 500+ with agile hiring aligned to your growth stage. We understand the speed and culture startup teams need.', tag: 'New' },
              { icon: '💻', emoji_bg: 'rgba(139,92,246,0.15)', title: 'Tech-first Companies', desc: 'Deep expertise in engineering, product, data, and AI roles. We source candidates who think in systems and ship fast.' },
              { icon: '🖥️', emoji_bg: 'rgba(20,184,166,0.15)', title: 'IT | Offshoring', desc: 'Cost-effective Indian talent for global teams across MENA, APAC, ANZ, and beyond. Quality without compromise.' },
            ].map(({ icon, emoji_bg, title, desc, tag }) => (
              <Link to="/sectors" key={title} className="sector-big-card">
                <div className="sector-big-card__icon-wrap" style={{ background: emoji_bg }}>
                  <span className="sector-big-card__icon">{icon}</span>
                  {tag && <span className="sector-big-card__tag">{tag}</span>}
                </div>
                <div className="sector-big-card__body">
                  <h3 className="sector-big-card__title">{title}</h3>
                  <p className="sector-big-card__desc">{desc}</p>
                </div>
                <div className="sector-big-card__cta">
                  Know More <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ WHY US ══════════════════════════ */}
      <section className="section why-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>Why StaffingEdge</div>
            <h2 className="section-title">
              The Smarter Way to <span className="text-gradient">Hire</span>
            </h2>
          </div>
          <div className="why-grid">
            {[
              { icon: '⚡', title: '70% Faster', desc: 'Shortlisting powered by AI that processes 1000+ profiles in minutes.' },
              { icon: '🎯', title: '94% Match Rate', desc: 'Precision AI-matching across 50+ behavioral and technical parameters.' },
              { icon: '👥', title: '2M+ Pool', desc: 'Pre-vetted talent database built over two decades of industry work.' },
              { icon: '🌏', title: 'Global Reach', desc: 'Hiring expertise across India, MENA, APAC, ANZ, and beyond.' },
              { icon: '🔒', title: 'Pre-Vetted Only', desc: 'Every candidate is assessed, benchmarked, and culture-checked.' },
              { icon: '📈', title: 'Data-Driven', desc: 'Market intelligence and compensation benchmarks at your fingertips.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="why-card">
                <div className="why-card__icon">{icon}</div>
                <h4 className="why-card__title">{title}</h4>
                <p className="why-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TESTIMONIALS ══════════════════════════ */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>Client Stories</div>
            <h2 className="section-title">
              From Their Experience <span className="text-gradient">to Your Inspiration</span>
            </h2>
          </div>

          {/* Testimonials grid */}
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="tcard">
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

      {/* ══════════════════════════ CTA BANNER ══════════════════════════ */}
      <section className="cta-banner">
        <div className="cta-banner__bg" />
        <div className="container">
          <div className="cta-banner__content">
            <div className="cta-banner__text">
              <Globe size={48} className="cta-banner__icon" />
              <h2>Ready to Hire Your<br /><span className="text-gradient">Dream Team?</span></h2>
              <p>Get a free consultation with our talent advisors. No obligations, pure clarity.</p>
            </div>
            <div className="cta-banner__actions">
              <Link to="/hire" className="btn btn-primary btn-lg">
                Start Hiring Now <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Free Consultation</Link>
            </div>
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
    </main>
  );
}
