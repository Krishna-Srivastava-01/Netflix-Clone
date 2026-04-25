import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-top">Questions? Call 000-800-919-1694</p>
        <ul className="footer-links">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Help Centre</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#">Media Centre</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Jobs</a></li>
          <li>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub Repository
            </a>
          </li>
          <li><a href="#">Ways to Watch</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Cookie Preferences</a></li>
          <li><a href="#">Corporate Information</a></li>
        </ul>
        <p className="footer-country">Netflux India</p>
      </div>
    </footer>
  );
}
