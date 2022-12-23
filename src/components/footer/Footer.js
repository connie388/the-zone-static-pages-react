import React from "react";
import "../../styles/Footer.css";
import { Link } from "react-router-dom";
import termFile from "../../assets/documents/terms-and-conditions.pdf";
import privacyFile from "../../assets/documents/privacy-policy.pdf";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Company</h2>
            <Link to="/about-us">About Us</Link>
            {/* <Link to={`/pdf-reader?filename=${termFile}`}>
              Terms of Service
            </Link> */}
            <a href={termFile} target="_blank">
              <p>Terms of Service</p>
            </a>
            {/* <Link to={`/pdf-reader?filename=${privacyFile}`}>
              Privacy Policy
            </Link> */}
            <a href={privacyFile} target="_blank">
              <p>Privacy Policy</p>
            </a>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/career">Careers</Link>
            <Link to="/advertising">Advertise</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Connect</h2>
            <div>
              <Link to="/" target="_blank" aria-label="Facebook">
                <i className="social-media-icon fab fa-facebook-f" />
              </Link>
              <Link to="/" target="_blank" aria-label="Instagram">
                <i className="social-media-icon fab fa-instagram" />
              </Link>
              <Link to="/" target="_blank" aria-label="Youtube">
                <i className="social-media-icon fab fa-youtube" />
              </Link>
              <Link to="/" target="_blank" aria-label="Twitter">
                <i className="social-media-icon fab fa-twitter" />
              </Link>
              <Link to="/" target="_blank" aria-label="LinkedIn">
                <i className="social-media-icon fab fa-linkedin" />
              </Link>
            </div>

            <small className="website-rights">The ZONE © 2022</small>
          </div>

          <div className="footer-link-items">
            <div className="inline">
              <a className="mobile-app-icon" href="/">
                <img
                  className="mobile-app-icon-google mobile-app-image"
                  alt="Download mobile app from google"
                  src={require(`../../assets/icons/google-play-badge.png`)}
                />
              </a>

              <a className="mobile-app-icon" href="/">
                <img
                  className="mobile-app-icon-apple mobile-app-image"
                  alt="Download mobile app from apple"
                  src={require(`../../assets/icons/download-on-the-app-store-badge.png`)}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
