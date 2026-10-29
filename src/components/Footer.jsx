import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "About & Approach", to: "/about" },
  { label: "Areas of Practice", to: "/services" },
  { label: "Fees & Insurance", to: "/fees" },
  { label: "Resources", to: "/resources" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__columns">
          <div className="footer__about">
            <p className="footer__name">The Healing Spot Counseling</p>
            <p className="footer__blurb">
              Individual and couples therapy for trauma, depression, and anxiety, offered in person in Ludington, MI and via
              telehealth across Michigan and Texas. Brian Counts, LPC.
            </p>
          </div>
          <div className="footer__links">
            <div className="footer__col">
              <p className="footer__heading">Explore</p>
              {FOOTER_LINKS.map((link) => (
                <Link key={link.to} to={link.to} className="footer__link">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="footer__col">
              <p className="footer__heading">Hours</p>
              <p className="footer__text">By Appointment Only</p>
              <p className="footer__text">(231) 425-1102</p>
            </div>
          </div>
        </div>
        <div className="crisis">
          <div className="crisis__dot" aria-hidden="true"></div>
          <p className="crisis__text">
            <span className="crisis__label">Emergency Support:</span> If you are experiencing an immediate crisis,
            please call or text <a href="tel:988" className="crisis__link">988</a> to reach the Suicide &amp; Crisis
            Lifeline, available 24/7.
          </p>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© 2026 The Healing Spot Counseling PLLC. All rights reserved.</p>
          <div className="footer__legal">
            <span className="footer__legal-link">Privacy Policy</span>
            <span className="footer__legal-link">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
