import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__logo">FORMAX</span>
        <p className="footer__copy">
          © {new Date().getFullYear()} Formax Construction. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
