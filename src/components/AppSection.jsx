import appQr from '../assets/app-qr.jpg'
import appDeployed from '../assets/app-deployed.png'

export default function AppSection() {
  return (
    <section className="section app alt-bg" id="app">
      <div className="container app-inner">
        <div className="app-copy">
          <span className="section-kicker">Now Live</span>
          <h2>Introducing Our Self-Service Milk Delivery App</h2>
          <p>Manage your milk delivery anytime, anywhere — right from your phone.</p>
          <ul className="app-features">
            <li><strong>Manage Deliveries</strong> — Pause, resume or change daily quantity instantly, no need to call.</li>
            <li><strong>View &amp; Pay Bills</strong> — Get your monthly bill and pay securely via UPI, Wallet or Card.</li>
            <li><strong>Get Notifications</strong> — Real-time alerts for deliveries, billing and payments.</li>
            <li><strong>Raise Service Requests</strong> — Need extra milk or have an issue? Submit requests with a tap.</li>
          </ul>
          <div className="app-steps">
            <h3>How to Get Started</h3>
            <ol>
              <li>Download the app — search for <strong>KS DAIRY</strong> on the Google Play Store.</li>
              <li>Login using your registered mobile number.</li>
              <li>Start managing your milk account 24x7 — simple &amp; secure.</li>
            </ol>
            <p className="app-help">Need help? Call / WhatsApp <a href="tel:9849649222">9849649222</a></p>
          </div>
        </div>
        <div className="app-media">
          <div className="download-card">
            <img src={appDeployed} alt="KS Dairy Farm delivery app successfully deployed" className="download-banner" />
            <div className="download-qr-wrap">
              <img src={appQr} alt="Scan to download the KS Dairy Farm delivery app for Android" />
            </div>
            <p className="app-soon">* Coming soon on the Apple App Store</p>
          </div>
        </div>
      </div>
    </section>
  )
}
