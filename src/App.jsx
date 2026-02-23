import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Features from './components/Features';
import Solutions from './components/Solutions';
import HowItWorks from './components/HowItWorks';
import Dashboard from './components/Dashboard';
import Industries from './components/Industries';
import Security from './components/Security';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <div className="font-display bg-background-light text-slate-900 antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Comparison />
      <Features />
      <Solutions />
      <HowItWorks />
      <Dashboard />
      <Industries />
      <Security />
      <Benefits />
      <CTA />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
