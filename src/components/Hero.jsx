import bottleHero from '../assets/bottle-hero.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">🌞 Farm to Home, Every Morning &amp; Evening</span>
          <h1>Pure Buffalo Milk,<br />Straight From Our Farm.</h1>
          <p>No water. No preservatives. No compromise. Just 100% pure, farm-fresh buffalo milk delivered daily in hygienic, food-grade glass bottles.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">Order Fresh Milk</a>
            <a href="#app" className="btn btn-ghost btn-lg">Get the Delivery App</a>
          </div>
          <div className="hero-stats">
            <div><strong>500ml / 750ml / 1L</strong><span>Glass Bottle Sizes</span></div>
            <div><strong>6–8 AM &amp; 6–8 PM</strong><span>Daily Delivery Windows</span></div>
            <div><strong>100%</strong><span>Pure &amp; Natural</span></div>
          </div>
        </div>
        <div className="hero-media">
          <img src={bottleHero} alt="KS Dairy Farm pure buffalo milk glass bottle" />
        </div>
      </div>
      <svg className="hero-wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z"></path>
      </svg>
    </section>
  )
}
