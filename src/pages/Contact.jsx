import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, PhoneCall, Mail, Share2 } from 'lucide-react';
import './Contact.css';

const LinkedinIcon = ({ size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = ({ size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = ({ size }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="zyoin-contact-page">
      {/* Top Banner */}
      <section className="zyoin-contact-hero">
        <div className="zyoin-contact-hero__bg">
          <div className="zyoin-contact-hero__image-wrapper">
            <img src="/contact_banner_woman.png" alt="Contact Us" />
            <div className="zyoin-contact-hero__overlay"></div>
          </div>
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="zyoin-contact-hero__content">
            <span className="zyoin-contact-hero__label">Powered by AI. Perfected by Human Expertise</span>
            <h1 className="zyoin-contact-hero__title">Connect With Us</h1>
            <p className="zyoin-contact-hero__desc">let's Hire the Top 1% Talent for your Business.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="zyoin-contact-main">
        <div className="container">
          <h2 className="zyoin-contact-main__heading text-center">Fill Out The Form To Get Started</h2>

          <div className="zyoin-contact-layout">

            {/* Left Column: Info & Image */}
            <div className="zyoin-contact-info-col">
              <p className="zyoin-contact-info-text">
                Looking to hire or find a job? We help businesses hire top talent and job seekers find great opportunities. Reach out and let's get started
              </p>

              <div className="zyoin-contact-info-img">
                <img src="/corp_banner_2.png" alt="Handshake" />
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="zyoin-contact-form-col">
              {submitted ? (
                <div className="zyoin-success-card text-center">
                  <CheckCircle size={64} className="zyoin-success-icon" />
                  <h2>Message Sent!</h2>
                  <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                  <Link to="/" className="btn" style={{ background: '#f97316', color: '#fff', marginTop: '24px' }}>
                    Back to Home
                  </Link>
                </div>
              ) : (
                <form className="zyoin-contact-form-card" onSubmit={handleSubmit}>
                  <div className="zyoin-form-group">
                    <label className="zyoin-form-label">Name*</label>
                    <input className="zyoin-form-input" type="text" required />
                  </div>

                  <div className="zyoin-form-group">
                    <label className="zyoin-form-label">Email ID*</label>
                    <input className="zyoin-form-input" type="email" required />
                  </div>

                  <div className="zyoin-form-group">
                    <label className="zyoin-form-label">Phone Number*</label>
                    <input className="zyoin-form-input" type="tel" required />
                  </div>

                  <div className="zyoin-form-group">
                    <label className="zyoin-form-label">Reason to Connect*</label>
                    <div className="zyoin-checkbox-group-inline">
                      <label className="zyoin-checkbox-label">
                        <input type="checkbox" name="reason" value="hiring" /> I'm Hiring
                      </label>
                      <label className="zyoin-checkbox-label">
                        <input type="checkbox" name="reason" value="job_seeker" /> I'm a Job Seeker
                      </label>
                      <label className="zyoin-checkbox-label">
                        <input type="checkbox" name="reason" value="others" /> Others
                      </label>
                    </div>
                  </div>

                  <div className="zyoin-form-group">
                    <textarea className="zyoin-form-input" placeholder="Message*" required style={{ minHeight: '100px', resize: 'vertical' }} />
                  </div>

                  <div className="zyoin-form-group zyoin-consent-group">
                    <label className="zyoin-consent-label">
                      <input type="checkbox" required />
                      <span>
                        By providing your contact details, you consent to receive communications from us regarding upcoming events, promotions, and relevant information. We respect your privacy and will not share your information with third parties.
                      </span>
                    </label>
                  </div>

                  <div className="zyoin-recaptcha-mock">
                    <div className="zyoin-recaptcha-mock__left">
                      <input type="checkbox" required className="zyoin-recaptcha-checkbox" />
                      <span>I'm not a robot</span>
                    </div>
                    <div className="zyoin-recaptcha-mock__right">
                      <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
                      <span>reCAPTCHA</span>
                    </div>
                  </div>

                  <button type="submit" className="zyoin-form-submit">
                    Let's get started
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Bottom Info Cards */}
          <div className="zyoin-contact-bottom-cards">
            <div className="zyoin-contact-info-card">
              <div className="zyoin-contact-info-icon">
                <PhoneCall size={22} />
              </div>
              <div className="zyoin-contact-info-content">
                <span className="zyoin-contact-info-label">Call Us:</span>
                <a href="tel:8102224444" className="zyoin-contact-info-value">81022 24444</a>
              </div>
            </div>

            <div className="zyoin-contact-info-card">
              <div className="zyoin-contact-info-icon">
                <Mail size={22} />
              </div>
              <div className="zyoin-contact-info-content">
                <span className="zyoin-contact-info-label">Email Us:</span>
                <a href="mailto:info@zyoin.com" className="zyoin-contact-info-value">info@zyoin.com</a>
              </div>
            </div>

            <div className="zyoin-contact-info-card">
              <div className="zyoin-contact-info-icon">
                <Share2 size={22} />
              </div>
              <div className="zyoin-contact-info-content">
                <span className="zyoin-contact-info-label">Follow Us:</span>
                <div className="zyoin-contact-socials">
                  <a href="#" className="zyoin-social-link"><LinkedinIcon size={14} /></a>
                  <a href="#" className="zyoin-social-link"><YoutubeIcon size={14} /></a>
                  <a href="#" className="zyoin-social-link"><InstagramIcon size={14} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
