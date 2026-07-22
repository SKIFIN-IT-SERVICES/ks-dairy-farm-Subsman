import bottleHero from '../assets/bottle-hero.png'

const PRODUCTS = [
  { size: '500 ml', title: '500 ml Bottle', text: 'Perfect for small households and single servings.' },
  { size: '750 ml', title: '750 ml Bottle', text: 'Our most popular size — ideal for daily family use.', featured: true },
  { size: '1 Litre', title: '1 Litre Bottle', text: 'Great for larger families and everyday cooking needs.' },
]

export default function Products() {
  return (
    <section className="section products" id="products">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">Our Milk</span>
          <h2>Pure Buffalo Milk, In Every Size You Need</h2>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <div className={`product-card${p.featured ? ' featured' : ''}`} key={p.size}>
              <div className="product-badge">{p.size}</div>
              <img src={bottleHero} alt={`${p.size} glass bottle of KS Dairy Farm milk`} />
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        <p className="products-note">All bottles are food-grade glass, sanitized and reused responsibly under our bottle return system.</p>
      </div>
    </section>
  )
}
