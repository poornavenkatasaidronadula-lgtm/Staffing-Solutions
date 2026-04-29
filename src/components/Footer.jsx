import { Link } from 'react-router-dom';
import { Zap, ArrowRight, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

// Custom SVG social icons (lucide-react v0.x doesn't export social brand icons)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
import './Footer.css';

const footerLinks = {
  services: [
    { label: 'Permanent Hiring', path: '/services/permanent-hiring' },
    { label: 'Contract Hiring', path: '/services/contract-hiring' },
    { label: 'Leadership Hiring', path: '/services/leadership-hiring' },
    { label: 'Global Hiring', path: '/services/global-hiring' },
    { label: 'RPO', path: '/services/rpo', badge: 'New' },
    { label: 'Managed Recruitment', path: '/services/managed-recruitment' },
    { label: 'Talent Intelligence', path: '/services/talent-intelligence' },
    { label: 'Hire Meetups', path: '/services/hire-meetups' },
    { label: 'Payroll Processing', path: '/services/payroll' },
    { label: 'HR Outsourcing', path: '/services/hr-outsourcing' },
  ],
  sectors: [
    { label: 'GCC / Captives', path: '/sectors' },
    { label: 'Startups', path: '/sectors', badge: 'New' },
    { label: 'Tech-first Companies', path: '/sectors' },
    { label: 'IT | Offshoring', path: '/sectors' },
  ],
  resources: [
    { label: 'Reports', path: '/resources/reports' },
    { label: 'Blogs', path: '/resources/blogs' },
    { label: 'News & Coverage', path: '/resources/news' },
    { label: 'Whitepapers', path: '/resources/whitepapers' },
    { label: 'Publications', path: '/resources/publications' },
    { label: 'Newsletters', path: '/resources/newsletters' },
    { label: 'FAQ', path: '/#faq' },
  ],
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Hire Talent', path: '/hire' },
    { label: 'Find a Job', path: 'https://linkedin.com', external: true },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Cookie Settings', path: '/cookies' },
  ],
};

const socialLinks = [
  { icon: LinkedInIcon, label: 'LinkedIn', url: 'https://linkedin.com' },
  { icon: InstagramIcon, label: 'Instagram', url: 'https://instagram.com' },
  { icon: TwitterIcon, label: 'X / Twitter', url: 'https://twitter.com' },
  { icon: FacebookIcon, label: 'Facebook', url: 'https://facebook.com' },
];

export default function Footer() {
  return (
    <footer className="footer">


      {/* Main Footer */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Brand Column */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <div className="footer__logo-icon"><Zap size={18} /></div>
                <span>StaffingEdge</span>
              </Link>
              <p className="footer__brand-desc">
                India's leading AI-augmented Talent Advisory Firm combining advanced AI hiring 
                technology with over two decades of human expertise.
              </p>
              <div className="footer__contact-info">
                <div className="footer__contact-item">
                  <Mail size={15} />
                  <span>hello@staffingedge.com</span>
                </div>
                <div className="footer__contact-item">
                  <Phone size={15} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="footer__contact-item">
                  <MapPin size={15} />
                  <span>Bangalore, India</span>
                </div>
              </div>
              <div className="footer__socials">
                {socialLinks.map(({ icon: Icon, label, url }) => (
                  <a key={label} href={url} target="_blank" rel="noreferrer" className="footer__social" aria-label={label}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="footer__col">
              <h4 className="footer__col-title">Services</h4>
              <ul className="footer__links">
                {footerLinks.services.map(({ label, path, badge }) => (
                  <li key={label}>
                    <Link to={path} className="footer__link">
                      {label}
                      {badge && <span className="footer__badge">{badge}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sectors & Resources */}
            <div className="footer__col">
              <h4 className="footer__col-title">Sectors</h4>
              <ul className="footer__links">
                {footerLinks.sectors.map(({ label, path, badge }) => (
                  <li key={label}>
                    <Link to={path} className="footer__link">
                      {label}
                      {badge && <span className="footer__badge">{badge}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
              <h4 className="footer__col-title" style={{ marginTop: '28px' }}>Resources</h4>
              <ul className="footer__links">
                {footerLinks.resources.map(({ label, path }) => (
                  <li key={label}>
                    <Link to={path} className="footer__link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="footer__col">
              <h4 className="footer__col-title">Company</h4>
              <ul className="footer__links">
                {footerLinks.company.map(({ label, path, external }) => (
                  <li key={label}>
                    {external ? (
                      <a href={path} target="_blank" rel="noreferrer" className="footer__link">{label}</a>
                    ) : (
                      <Link to={path} className="footer__link">{label}</Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="footer__newsletter">
                <h5>Stay Updated</h5>
                <p>Get hiring insights delivered to your inbox</p>
                <div className="footer__newsletter-form">
                  <input type="email" placeholder="Enter your email" className="footer__newsletter-input" />
                  <button className="footer__newsletter-btn"><ArrowRight size={16} /></button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer__bottom">
            <p>© {new Date().getFullYear()} StaffingEdge. All rights reserved.</p>
            <div className="footer__bottom-stats">
              <span>🤝 500+ Clients</span>
              <span>|</span>
              <span>⚡ 2M+ Talent Pool</span>
              <span>|</span>
              <span>🌏 10+ Countries</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
