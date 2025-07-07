import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tax-check" element={<TaxCheck />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Changwe Advisory</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/tax-check">Tax Check Tool</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <section className="section">
      <h1>Welcome to Changwe Advisory</h1>
      <p>We simplify tax, accounting, and compliance for Zambian SMEs.</p>
      <a href="/contact" className="btn">Get Free Tax Checkup</a>
    </section>
  );
}

function Services() {
  return (
    <section className="section">
      <h2>Our Services</h2>
      <ul>
        <li><strong>Tax Filing & Advisory:</strong> Turnover Tax, VAT, PAYE</li>
        <li><strong>Bookkeeping & Reports:</strong> Monthly/Quarterly Financials</li>
        <li><strong>Business Registration:</strong> PACRA, ZRA, NAPSA setup</li>
      </ul>
      <a href="/contact" className="btn">Get a Quote</a>
    </section>
  );
}

function TaxCheck() {
  return (
    <section className="section">
      <h2>Free Tax Check Tool</h2>
      <p>This is a placeholder. You can embed a Google Form or smart assistant here to collect business data and suggest the best tax regime.</p>
      <p>Want help adding this tool? Just ask ChatGPT.</p>
    </section>
  );
}

function Contact() {
  return (
    <section className="section">
      <h2>Contact Us</h2>
      <p><strong>Email:</strong> info@changweadvisory.com</p>
      <p><strong>Phone:</strong> +260 97 123 4567</p>
      <p>
        <a className="btn" href="https://wa.me/260971234567?text=Hello%20Changwe%20Advisory%2C%20I%20need%20tax%20assistance!" target="_blank" rel="noopener noreferrer">
          Chat on WhatsApp
        </a>
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Changwe Advisory | Lusaka, Zambia</p>
    </footer>
  );
}

export default App;
