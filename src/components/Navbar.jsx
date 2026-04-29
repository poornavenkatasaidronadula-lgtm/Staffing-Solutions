import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Zap } from 'lucide-react';
import './Navbar.css';

const services = [
  { label: 'Permanent Hiring', path: '/services/permanent-hiring' },
  { label: 'Contract Hiring', path: '/services/contract-hiring' },
  { label: 'Leadership Hiring', path: '/services/leadership-hiring' },
  { label: 'Global Hiring', path: '/services/global-hiring' },
  { label: 'Managed Recruitment Service', path: '/services/managed-recruitment' },
  { label: 'HR Outsourcing', path: '/services/hr-outsourcing' },
  { label: 'Talent Intelligence', path: '/services/talent-intelligence' },
  { label: 'Hire Meetups', path: '/services/hire-meetups' },
  { label: 'Payroll Processing', path: '/services/payroll' },
  { label: 'Recruitment Process Outsourcing', path: '/services/rpo' },
];


const insights = [
  { label: 'Blogs', path: '/resources/blogs' },
  { label: 'Reports', path: '/resources/reports' },
  { label: 'News & Coverage', path: '/resources/news' },
  { label: 'Whitepapers', path: '/resources/whitepapers' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const dropdownTimer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleMouseEnter = (key) => {
    clearTimeout(dropdownTimer.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const toggleMobile = (key) => {
    setMobileExpanded(prev => prev === key ? null : key);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <Zap size={18} />
          </div>
          <span className="navbar__logo-text">StaffingEdge</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {/* Services Dropdown */}
          <li
            className="navbar__item navbar__item--has-dropdown"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`navbar__link ${activeDropdown === 'services' ? 'navbar__link--active' : ''}`}>
              Services <ChevronDown size={15} className={`navbar__chevron ${activeDropdown === 'services' ? 'rotated' : ''}`} />
            </button>
            {activeDropdown === 'services' && (
              <div className="navbar__dropdown navbar__dropdown--simple">
                {services.map((s) => (
                  <Link key={s.label} to={s.path} className="dropdown__item-simple">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </li>


          {/* Insights Dropdown */}
          <li
            className="navbar__item navbar__item--has-dropdown"
            onMouseEnter={() => handleMouseEnter('insights')}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`navbar__link ${activeDropdown === 'insights' ? 'navbar__link--active' : ''}`}>
              Insights <ChevronDown size={15} className={`navbar__chevron ${activeDropdown === 'insights' ? 'rotated' : ''}`} />
            </button>
            {activeDropdown === 'insights' && (
              <div className="navbar__dropdown navbar__dropdown--simple">
                {insights.map((r) => (
                  <Link key={r.label} to={r.path} className="dropdown__item-simple">
                    {r.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li className="navbar__item"><Link to="/about" className="navbar__link">About</Link></li>
          <li className="navbar__item"><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="navbar__link">Find a Job</a></li>
        </ul>

        {/* CTA */}
        <div className="navbar__cta">
          <Link to="/contact" className="btn btn-outline btn-sm">Contact Us</Link>
          <Link to="/hire" className="btn btn-primary btn-sm">Hire Talent</Link>
        </div>

        {/* Hamburger */}
        <button className="navbar__hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="navbar__mobile">
          <div className="mobile-nav">
            <div className="mobile-nav__section">
              <button className="mobile-nav__toggle" onClick={() => toggleMobile('services')}>
                Services
                <ChevronDown size={16} className={mobileExpanded === 'services' ? 'rotated' : ''} />
              </button>
              {mobileExpanded === 'services' && (
                <div className="mobile-nav__submenu">
                  {services.map(s => (
                    <Link key={s.label} to={s.path} className="mobile-nav__link">{s.label}</Link>
                  ))}
                </div>
              )}
            </div>


            <div className="mobile-nav__section">
              <button className="mobile-nav__toggle" onClick={() => toggleMobile('insights')}>
                Insights
                <ChevronDown size={16} className={mobileExpanded === 'insights' ? 'rotated' : ''} />
              </button>
              {mobileExpanded === 'insights' && (
                <div className="mobile-nav__submenu">
                  {insights.map(r => (
                    <Link key={r.label} to={r.path} className="mobile-nav__link">{r.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="mobile-nav__top-link">About</Link>
            <Link to="/contact" className="mobile-nav__top-link">Contact</Link>

            <div className="mobile-nav__ctas">
              <Link to="/hire" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Hire Talent</Link>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Find a Job</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
