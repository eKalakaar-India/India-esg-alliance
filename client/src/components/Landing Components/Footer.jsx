import "./Footer.css";
import {
  FaShareAlt,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa";
import logo from '../../assets/logo.jpeg'



export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-column company">
          <img src={logo} width={90} height={70} className='nav-logo' /> 
          {/* <h2>India ESG Alliance</h2> */}

          <p>
            Advancing sustainable stewardship across the
            Indian industrial landscape through innovation
            and ethical governance.
          </p>

          <div className="social-links">

            <a href="/">
              <FaShareAlt />
            </a>

            <a href="/">
              <FaGlobe />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h4>QUICK LINKS</h4>

          <ul>

            <li>
              <a href="/">Impact Reports</a>
            </li>

            <li>
              <a href="/">Governance Framework</a>
            </li>

            <li>
              <a href="/">MSME Support</a>
            </li>

          </ul>

        </div>

        {/* Resources */}

        <div className="footer-column">

          <h4>RESOURCES</h4>

          <ul>

            <li>
              <a href="/">Climate Action</a>
            </li>

            <li>
              <a href="/">Privacy Policy</a>
            </li>

            <li>
              <a href="/">Terms of Service</a>
            </li>

          </ul>

        </div>

        {/* Newsletter */}

        <div className="footer-column newsletter">

          <h4>NEWSLETTER</h4>

          <p>
            Stay updated on the latest ESG regulations and
            insights.
          </p>

          <div className="newsletter-box">

            <input
              type="email"
              placeholder="Your Email"
            />

            <button>
              <FaPaperPlane />
            </button>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2024 India ESG Alliance. All rights reserved.
        </p>

        <div className="footer-right">

          <span>Made with Integrity</span>

          <span>ISO 26000 Aligned</span>

        </div>

      </div>

    </footer>
  );
}