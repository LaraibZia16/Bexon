
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Contact Us", path: "/contact" },
];

const services = [
  "Business Strategy",
  "Creative Solutions",
  "Business Consulting",
  "Risk Management",
  "Digital Transformation",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          {/* Company Information */}
          <div className="footer-column footer-about">
            <Link to="/" className="footer-logo">
              BEXON
            </Link>

            <p>
              We help businesses grow through innovative
              strategies, expert guidance, and meaningful
              solutions built for long-term success.
            </p>

            <Link to="/contact" className="footer-contact-link">
              Let's Work Together
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Our Services</h3>

            <ul className="footer-links">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>Get in Touch</h3>

            <p className="footer-contact-intro">
              Have a question or a project in mind?
              We'd love to hear from you.
            </p>

            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <Mail size={19} />
                <Link to="/contact">
                  Send Us a Message
                </Link>
              </div>

              <div className="footer-contact-item">
                <MapPin size={19} />
                <span>Location details coming soon</span>
              </div>

              <div className="footer-contact-item">
                <Phone size={19} />
                <span>Contact details coming soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {currentYear} Bexon. All rights reserved.
          </p>

          <p>
            Built with React & GSAP
          </p>

          <button
            type="button"
            className="footer-back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
