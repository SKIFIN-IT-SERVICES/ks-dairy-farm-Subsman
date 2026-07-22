const FEATURES = [
  { icon: '🐃', title: 'Farm Fresh Milk', text: 'Straight from our own healthy buffaloes, milked with care every single day.' },
  { icon: '✅', title: '100% Pure & Natural', text: 'No water, no preservatives, no compromise on quality — ever.' },
  { icon: '🚪', title: 'Daily Home Delivery', text: 'Fresh milk delivered every morning and evening, right to your doorstep.' },
  { icon: '💰', title: 'Affordable & Reliable', text: 'Quality milk at a fair price, delivered consistently — no surprises.' },
  { icon: '🧼', title: 'Hygienic Handling', text: 'Clean milking and packaging process from farm to bottle.' },
  { icon: '🍶', title: 'Glass Bottles', text: 'Supplied in 500 ml, 750 ml and 1 litre food-grade glass bottles — non-reactive and safer for freshness.' },
  { icon: '♻️', title: 'Bottle Return & Reuse', text: 'Empty bottles are collected daily, sanitized thoroughly and reused responsibly.' },
  { icon: '⏰', title: 'Delivery Timings', text: 'Morning: 6:00 – 8:00 AM  |  Evening: 6:00 – 8:00 PM' },
]

export default function WhyUs() {
  return (
    <section className="section why-us alt-bg" id="why-us">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">Why KS Dairy Farm?</span>
          <h2>Quality You Can Taste, Trust You Can Rely On</h2>
        </div>
        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
