import logo from '../assets/logo.jpg'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="KS Dairy Farm logo" className="footer-logo" />
          <p>Pure Milk in Glass Bottles — Farm to Home, delivered daily with care.</p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Rajupeta, Nalgonda</p>
          <p>📞 <a href="tel:9849649222">9849649222</a>, <a href="tel:9640722751">9640722751</a></p>
          <p>✉️ <a href="mailto:ksdairy534@gmail.com">ksdairy534@gmail.com</a></p>
          <p>
            📷 <a href="https://instagram.com/ksdairy534" target="_blank" rel="noopener noreferrer">Instagram</a>
            {' '}|{' '}
            <a href="https://facebook.com/ksdairy534" target="_blank" rel="noopener noreferrer">Facebook</a>
            {' '}— @ksdairy534
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <p><a href="#about">About Us</a></p>
          <p><a href="#why-us">Why Choose Us</a></p>
          <p><a href="#products">Our Products</a></p>
          <p><a href="#app">Delivery App</a></p>
          <p><a href="#guidelines">Guidelines &amp; Billing</a></p>
        </div>

        <div className="footer-col">
          <h4>Delivery Hours</h4>
          <p>Morning: 6:00 – 8:00 AM</p>
          <p>Evening: 6:00 – 8:00 PM</p>
          <p className="footer-order">Order Now: <a href="tel:9849649222">9849649222</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {year} KS Dairy Farm, Rajupeta, Nalgonda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
