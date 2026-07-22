import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Products from './components/Products'
import AppSection from './components/AppSection'
import Guidelines from './components/Guidelines'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Products />
        <AppSection />
        <Guidelines />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
