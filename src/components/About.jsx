import logo from '../assets/logo.jpg'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-inner">
        <div className="about-media">
          <img src={logo} alt="KS Dairy Farm emblem with barn, cows and farmer" />
        </div>
        <div className="about-copy">
          <span className="section-kicker">Our Story</span>
          <h2>Rooted in Rajupeta, Delivered With Care</h2>
          <p>KS Dairy Farm is a family-run dairy in Rajupeta, Nalgonda, raising our own healthy buffaloes and milking them the traditional way. Every drop is bottled fresh and delivered to your doorstep — because we believe pure milk shouldn&apos;t be complicated.</p>
          <p>From our farm gate to your kitchen table, we handle every bottle with the same care our own family expects at breakfast.</p>
        </div>
      </div>
    </section>
  )
}
