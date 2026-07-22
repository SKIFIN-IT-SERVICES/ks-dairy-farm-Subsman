import qrPay from '../assets/qr-pay.jpg'

const GUIDELINES = [
  { icon: '📌', title: 'No Wait Delivery Policy', text: 'To ensure timely milk delivery for all customers, please follow our No Wait Policy.' },
  { icon: '🚪', title: 'No Door Knocking or Calling', text: 'Our delivery person will not knock, call or wait at your door.' },
  { icon: '⏱️', title: 'No Delays', text: 'For smooth service, deliveries are done swiftly house-to-house. Delays affect others.' },
  { icon: '📍', title: 'Place Bottles in Advance', text: 'Kindly keep your empty bottles at the designated spot before your delivery time.' },
  { icon: '💧', title: 'Rinse Bottles After Use', text: 'Always rinse bottles with clean water immediately after emptying.' },
]

export default function Guidelines() {
  return (
    <section className="section guidelines" id="guidelines">
      <div className="container guidelines-inner">
        <div>
          <span className="section-kicker">Customer Guidelines</span>
          <h2>Our No-Wait Delivery Policy</h2>
          <p>To ensure smooth and timely delivery for every customer, we kindly request you to follow these simple guidelines.</p>
          <div className="guideline-grid">
            {GUIDELINES.map((g) => (
              <div className="guideline-card" key={g.title}>
                <span className="g-icon">{g.icon}</span>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="billing-card">
          <h3>Monthly Billing &amp; Payments</h3>
          <ul className="billing-list">
            <li>Bills are generated at the end of each month and shared via WhatsApp, SMS or the app.</li>
            <li>Please make payment by the <strong>5th of every month</strong>.</li>
            <li>Mention your <strong>Customer ID</strong> in the payment note.</li>
            <li>Scan the QR code to pay online, or hand exact cash to our delivery person.</li>
          </ul>
          <div className="qr-wrap">
            <img src={qrPay} alt="KS Dairy Farm Scan and Pay QR code, UPI ID 9849649222@sbi" />
          </div>
          <p className="upi-id">UPI ID: <strong>9849649222@sbi</strong></p>
          <p className="pay-methods">Accepted: BHIM · UPI · Google Pay · PhonePe · Paytm · SBI YONO</p>
        </div>
      </div>
    </section>
  )
}
