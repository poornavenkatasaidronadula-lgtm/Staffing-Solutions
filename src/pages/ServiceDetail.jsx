import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import './ServiceDetail.css';

const serviceData = {
  'permanent-hiring': {
    title: 'Permanent Hiring',
    tagline: 'High-quality, full-time talent sourced and placed with precision.',
    image: '/permanent_hiring_hero.png',
    whyChooseText: 'Staffing Solutions is a leading AI-augmented Talent Advisory Firm, trusted by enterprises worldwide to find and hire exceptional full-time talent. With deep industry leadership and thousands of successful placements, we combine advanced AI tools with human insight to deliver hiring outcomes that are faster and sharper. We help you build a dedicated core team that perfectly aligns with your technical requirements and long-term company culture.',
    description: 'We help you build your core team with top-tier talent. Our AI-driven approach ensures that candidates not only match your technical requirements but also align with your company culture.',
    benefits: ['AI-ranked shortlists', 'Cultural fit analysis', '90-day guarantee', 'Dedicated account manager'],
    content: 'Finding the right full-time employee is critical for your company\'s long-term success. Our permanent hiring solution leverages a combination of deep industry expertise and advanced AI matching to deliver candidates who are ready to make an immediate impact. From initial sourcing to final negotiation, we handle the entire process with discretion and professionalism.',
    banners: [
      { title: 'LONG-TERM COMMITMENT', subtitle: 'Find employees who share your vision.', image: '/corp_banner_1.png' },
      { title: 'CULTURAL ALIGNMENT', subtitle: 'Match with candidates who fit your culture.', image: '/corp_banner_2.png' },
      { title: 'TOP 1% TALENT', subtitle: 'Access exclusive pre-vetted professionals.', image: '/corp_banner_3.png' }
    ]
  },
  'leadership-hiring': {
    title: 'Leadership Hiring',
    tagline: 'Discreet, high-touch search for CXO and leadership roles.',
    image: '/leadership_hiring_hero.png',
    whyChooseText: 'Staffing Solutions is a leading AI-augmented Talent Advisory Firm, trusted by boards and founders to secure transformative executive leadership. We combine advanced market intelligence with discreet human insight to deliver C-suite outcomes that are precise and highly strategic. We help organizations identify, engage, and onboard visionary leaders who can drive your business forward in a competitive landscape.',
    description: 'Securing the right leadership is transformative. We provide discreet, high-touch executive search services for C-suite and critical leadership positions.',
    benefits: ['Board-level discretion', 'Executive assessment', 'Reference verification', 'Global network access'],
    content: 'Our leadership hiring practice is designed to identify and attract visionary executives who can drive your business forward. We utilize a highly targeted, research-driven approach to map the market and engage with passive, high-caliber leaders who are not actively seeking new roles.',
    banners: [
      { title: 'EXECUTIVE SEARCH', subtitle: 'Discreet search for C-level executives.', image: '/corp_banner_4.png' },
      { title: 'VISIONARY LEADERS', subtitle: 'Find leaders who drive transformation.', image: '/corp_banner_2.png' },
      { title: 'BOARD ADVISORY', subtitle: 'Expert guidance on board appointments.', image: '/corp_banner_1.png' }
    ]
  },
  'global-hiring': {
    title: 'Global Hiring',
    tagline: 'Global hiring across MENA, APAC, ANZ, and remote India talent.',
    image: '/global_hiring_hero.png',
    whyChooseText: 'Staffing Solutions is a leading AI-augmented Talent Advisory Firm, trusted by enterprises worldwide to find and hire exceptional global talent. With proven expertise across international markets, we combine advanced AI tools with human insight to deliver hiring outcomes that are globally scalable. We help international companies build distributed teams, relocate skilled professionals, and establish high-performing Global Capability Centres (GCCs) — seamlessly and compliantly.',
    description: 'Expand your team beyond borders. We specialize in cross-border hiring and remote talent acquisition, ensuring compliance and cultural alignment.',
    benefits: ['10+ countries covered', 'Visa & compliance support', 'Local HR expertise', 'Remote-first hiring models'],
    content: 'In today\'s interconnected world, talent has no boundaries. Whether you are setting up a Global Capability Center (GCC) or building a distributed team, our global hiring solutions provide you with access to world-class professionals across multiple geographies, managing all the complexities of international recruitment.',
    banners: [
      { title: 'BORDERLESS TALENT', subtitle: 'Access professionals across 10+ countries.', image: '/corp_banner_6.png' },
      { title: 'LOCAL COMPLIANCE', subtitle: 'Navigate global employment laws with ease.', image: '/corp_banner_5.png' },
      { title: 'REMOTE TEAMS', subtitle: 'Build and manage distributed remote teams.', image: '/corp_banner_3.png' }
    ]
  },
  'contract-hiring': {
    title: 'Contract Hiring',
    tagline: 'Agile workforce models to meet your project and seasonal demands.',
    image: '/contract_hiring_hero.png',
    whyChooseText: 'Staffing Solutions is a leading AI-augmented Talent Advisory Firm, providing agile and highly scalable contract hiring services. We combine advanced AI sourcing with dedicated deployment teams to deliver specialized skills exactly when you need them. Whether you are managing seasonal spikes or critical short-term projects, we help you optimize your budget and scale your team up or down with absolute ease and compliance.',
    description: 'Scale your workforce dynamically with our flexible contract hiring solutions. Perfect for short-term projects or seasonal spikes.',
    benefits: ['Rapid onboarding', 'Flexible engagement terms', 'Skills-first matching', 'Pan-India coverage'],
    content: 'Stay agile in a fast-changing market. Our contract staffing services allow you to quickly onboard specialized skills without long-term commitments, ensuring your projects are delivered on time and within budget.',
    banners: [
      { title: 'AGILE WORKFORCE SOLUTIONS', subtitle: 'Scale your team up or down with ease.', image: '/corp_banner_1.png' },
      { title: 'FASTER DEPLOYMENT', subtitle: 'Onboard specialized skills in days, not weeks.', image: '/corp_banner_2.png' },
      { title: 'COST-EFFICIENT HIRING', subtitle: 'Optimize your budget with flexible terms.', image: '/corp_banner_3.png' }
    ]
  },
  'rpo': {
    title: 'Recruitment Process Outsourcing (RPO)',
    tagline: 'End-to-end recruitment process outsourcing tailored to your scale.',
    image: '/rpo_hero.png',
    whyChooseText: 'Staffing Solutions is a leading AI-augmented Talent Advisory Firm, trusted by high-growth companies to manage their entire talent acquisition lifecycle. By blending our proprietary AI technology with dedicated on-site or off-site human recruiters, we deliver RPO solutions that drastically reduce time-to-hire and improve candidate quality. We take full ownership of your hiring process, allowing your internal teams to focus on strategic growth.',
    description: 'Transform your talent acquisition function. We take ownership of your end-to-end hiring process, improving quality and reducing time-to-hire.',
    benefits: ['Dedicated RPO team', 'ATS integration', 'Employer branding', 'Custom analytics dashboard'],
    content: 'Our RPO solutions act as a seamless extension of your internal HR team. We design, build, and execute a bespoke recruitment strategy that scales with your business needs, delivering measurable improvements in hiring metrics.',
    banners: [
      { title: 'END-TO-END MANAGEMENT', subtitle: 'Full ownership of your hiring lifecycle.', image: '/corp_banner_4.png' },
      { title: 'SCALABLE SOLUTIONS', subtitle: 'Ramp up hiring seamlessly during peaks.', image: '/corp_banner_5.png' },
      { title: 'DATA-DRIVEN INSIGHTS', subtitle: 'Advanced analytics for better decisions.', image: '/corp_banner_6.png' }
    ]
  },
  'managed-recruitment': {
    title: 'Managed Recruitment Service',
    tagline: 'Flexible, on-demand talent delivered with a free trial.',
    image: '/managed_recruitment_hero.png',
    whyChooseText: 'Staffing Solutions provides a deeply integrated Managed Recruitment Service that minimizes your hiring risks. Trusted by enterprises to find exceptional talent, we combine our AI-driven talent mapping with a highly curated portfolio of professionals. We offer unique flexibility, allowing you to test candidates on-demand before committing, ensuring that every hire is exactly the right fit for your immediate and future needs.',
    description: 'Experience risk-free hiring with our managed recruitment service. We provide curated talent on-demand to meet your immediate needs.',
    benefits: ['Free 7-day trial', 'Pay-per-hire model', 'No lock-in contracts', 'Instant team scaling'],
    content: 'Need to hire fast but want to minimize risk? Our managed recruitment model offers unparalleled flexibility. Test out candidates before making a long-term commitment, ensuring you always get the right fit.',
    banners: [
      { title: 'RISK-FREE TRIAL', subtitle: 'Test candidates before long-term commitments.', image: '/corp_banner_1.png' },
      { title: 'CURATED PORTFOLIOS', subtitle: 'Review pre-vetted professionals quickly.', image: '/corp_banner_4.png' },
      { title: 'INSTANT SCALING', subtitle: 'Expand your team on-demand instantly.', image: '/corp_banner_3.png' }
    ]
  },
  'hire-meetups': {
    title: 'Hire Meetups',
    tagline: 'Curated hiring events connecting top candidates with your team.',
    image: '/hire_meetups_hero.png',
    whyChooseText: 'Staffing Solutions redefines volume recruitment through our exclusive Hire Meetups. As an AI-augmented Talent Advisory Firm, we leverage our vast 2M+ talent network to curate high-impact hiring events. We pre-screen top-tier passive and active candidates, managing all logistics so your team can focus purely on evaluating talent and making multiple high-quality hires in a single day.',
    description: 'Accelerate your hiring through our exclusive, curated recruitment events designed to connect you with multiple top-tier candidates in one go.',
    benefits: ['Pre-screened candidates', 'Structured interviews', 'High-volume hiring events', 'Virtual & in-person formats'],
    content: 'Our Hire Meetups are high-impact hiring drives that significantly reduce your time-to-hire. We handle all the logistics, sourcing, and pre-screening, allowing your team to focus purely on evaluating talent.',
    banners: [
      { title: 'EXCLUSIVE EVENTS', subtitle: 'Connect with top-tier passive candidates.', image: '/corp_banner_3.png' },
      { title: 'HIGH-VOLUME HIRING', subtitle: 'Fill multiple roles in a single day.', image: '/corp_banner_2.png' },
      { title: 'PRE-SCREENED TALENT', subtitle: 'Meet candidates who meet your criteria.', image: '/corp_banner_1.png' }
    ]
  },
  'talent-intelligence': {
    title: 'Talent Intelligence',
    tagline: 'Market insights, compensation benchmarks, and skill heatmaps.',
    image: '/talent_intelligence_hero.png',
    whyChooseText: 'Staffing Solutions empowers your strategic decisions with our deep Talent Intelligence. We combine our AI-augmented proprietary data models with real-world human insight to provide comprehensive market analyses. From real-time compensation benchmarks to complex skill heatmaps, we help enterprises and high-growth companies build an informed, proactive, and highly competitive hiring strategy.',
    description: 'Make data-driven hiring decisions. Our talent intelligence reports provide deep insights into market trends and talent availability.',
    benefits: ['Real-time benchmarks', 'Skill gap analysis', 'Competitor mapping', 'Strategic hiring forecasts'],
    content: 'Knowledge is power in the war for talent. Leverage our proprietary data and market research to understand compensation trends, map competitor talent pools, and build an informed, proactive hiring strategy.',
    banners: [
      { title: 'MARKET INSIGHTS', subtitle: 'Understand talent availability and trends.', image: '/corp_banner_6.png' },
      { title: 'COMPETITOR MAPPING', subtitle: 'Analyze where top talent is moving.', image: '/corp_banner_4.png' },
      { title: 'COMPENSATION DATA', subtitle: 'Benchmark salaries against industry standards.', image: '/corp_banner_5.png' }
    ]
  },
  'payroll': {
    title: 'Payroll Processing',
    tagline: 'Accurate, compliant payroll — handled end-to-end.',
    image: '/payroll_processing_hero.png',
    whyChooseText: 'Staffing Solutions offers an end-to-end Payroll Processing system trusted by enterprises to maintain 100% compliance and flawless execution. By leveraging advanced automation and deep statutory expertise, we simplify complex multi-state payroll operations. We take the administrative burden completely off your shoulders, ensuring your workforce is paid accurately, securely, and always on time.',
    description: 'Simplify your operations with our comprehensive payroll management services, ensuring 100% compliance and timely disbursement.',
    benefits: ['Statutory compliance', 'Multi-state payroll capabilities', 'Leave & attendance management', 'Direct deposit automation'],
    content: 'Managing payroll can be complex and time-consuming. We take the burden off your shoulders by providing an end-to-end payroll solution that is accurate, secure, and compliant with all local regulations.',
    banners: [
      { title: '100% COMPLIANCE', subtitle: 'Adhere to all statutory requirements.', image: '/corp_banner_1.png' },
      { title: 'TIMELY DISBURSEMENT', subtitle: 'Ensure employees are paid accurately and on time.', image: '/corp_banner_2.png' },
      { title: 'MULTI-STATE SUPPORT', subtitle: 'Manage payroll across different regions.', image: '/corp_banner_6.png' }
    ]
  },
  'hr-outsourcing': {
    title: 'HR Outsourcing',
    tagline: 'End-to-end HR operations, compliance, and employee lifecycle.',
    image: '/hr_outsourcing_hero.png',
    whyChooseText: 'Staffing Solutions is a leading Talent Advisory Firm providing complete HR Outsourcing. We help enterprises and fast-growing startups scale by acting as your dedicated, off-site HR department. Combining advanced HR tech stacks with human expertise, we handle the entire employee lifecycle—from onboarding and policy formulation to performance management—allowing your leadership to focus purely on core business growth.',
    description: 'Focus on your core business while we manage your entire HR function, from onboarding to performance management.',
    benefits: ['Onboarding & offboarding', 'Policy formulation', 'Performance management frameworks', 'Modern HR tech stack'],
    content: 'Our HR Outsourcing services provide a complete, scalable HR department for your business. We handle the day-to-day HR operations, ensuring your employees are supported and your business remains compliant.',
    banners: [
      { title: 'FULL LIFECYCLE', subtitle: 'From onboarding to offboarding.', image: '/corp_banner_5.png' },
      { title: 'POLICY MANAGEMENT', subtitle: 'Develop and enforce company policies.', image: '/corp_banner_1.png' },
      { title: 'PERFORMANCE REVIEWS', subtitle: 'Structured frameworks for employee growth.', image: '/corp_banner_4.png' }
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const data = serviceData[id];

  if (!data) {
    return (
      <div className="service-detail-error">
        <h1>Service not found</h1>
        <Link to="/services" className="btn btn-primary">Back to Services</Link>
      </div>
    );
  }

  return (
    <main className="service-detail-page">
      <section className="service-hero">
        <div className="service-hero__bg">
          <img src={data.image} alt={data.title} className="service-hero__image" />
          <div className="service-hero__overlay"></div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="service-hero__content">
            <h1 className="service-hero__title animate-fade-up">{data.title}</h1>
            <p className="service-hero__subtitle delay-100 animate-fade-up">{data.tagline}</p>
            <div className="service-hero__actions delay-200 animate-fade-up">
              <Link to="/contact" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW BANNERS SECTION WITH TEXT ABOVE */}
      <section className="service-banners-section">
        <div className="container">
          
          <div className="service-banners-header">
            <h2>Why Choose Staffing Solutions For {data.title}?</h2>
            <p>{data.whyChooseText}</p>
          </div>

          <div className="service-banners-grid">
            {data.banners.map((banner, index) => (
              <div key={index} className="service-banner-card">
                <img src={banner.image} alt={banner.title} className="service-banner-image" />
                <div className="service-banner-overlay">
                  <div className="service-banner-content">
                    <h3 className="service-banner-title">
                      <span className="service-banner-accent"></span>
                      {banner.title}
                    </h3>
                    <p className="service-banner-subtitle">{banner.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-content section">
        <div className="container">
          <div className="service-grid">
            <div className="service-main-col">
              <h2 className="section-title">Overview</h2>
              <p className="service-text">{data.description}</p>
              <p className="service-text">{data.content}</p>
              
              <div className="service-cta-box">
                <h3>Ready to transform your hiring?</h3>
                <p>Talk to our experts today and discover how our {data.title} solutions can drive your business forward.</p>
                <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
              </div>
            </div>
            
            <div className="service-side-col">
              <div className="service-benefits-card">
                <h3>Key Benefits</h3>
                <ul className="service-benefits-list">
                  {data.benefits.map((benefit, i) => (
                    <li key={i}>
                      <CheckCircle size={20} className="benefit-icon" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
