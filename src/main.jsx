import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./styles.css";

const business = "Yameen Traders";
const brand = "Sprout";

const CONTACT_EMAIL = "syed.rehan123@gmail.com";
const CONTACT_PHONE = "9686420464";
const BUSINESS_ADDRESS = "914 jc road channapatna 562160";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand" aria-label="Sprout home">
        <span className="brand-mark">✳</span>
        <span>
          sprout<span className="brand-dot">.</span>
          <small>GROCERY, MADE SIMPLE</small>
        </span>
      </Link>
      <nav>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="/" className="footer-brand">
          sprout.
        </Link>
        <p>Everyday groceries, with care.</p>
      </div>
      <div className="footer-links">
        <Link to="/privacy">Privacy policy</Link>
        <Link to="/terms">Terms & conditions</Link>
      </div>
      <p className="legal">
        {brand} is a customer-facing brand operated by{" "}
        <strong>{business}</strong>.
      </p>
      <p className="copyright">
        © {new Date().getFullYear()} {business}. All rights reserved.
      </p>
    </footer>
  );
}
function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" /> YOUR EVERYDAY GROCERY BRAND
            </span>
            <h1>
              Good food.
              <br />
              <em>Good days.</em>
            </h1>
            <p className="hero-text">
              Welcome to Sprout, a grocery brand operated by Yameen Traders.
              We’re building a simpler way for customers to shop for everyday
              grocery essentials.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#about">
                Get to know us <span>↗</span>
              </a>
              <a className="text-link" href="#contact">
                Contact our team <span>→</span>
              </a>
            </div>
            <div className="hero-note">
              <span className="note-icon">✓</span>
              <span>
                <strong>Local business. Customer-first service.</strong>
                <small>Operated by Yameen Traders</small>
              </span>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="Illustration of fresh grocery produce"
          >
            <div className="sun"></div>
            <div className="art-label">
              FRESH PICKS
              <br />
              <span>FOR EVERY DAY</span>
            </div>
            <div className="produce produce-one">🥬</div>
            <div className="produce produce-two">🥑</div>
            <div className="produce produce-three">🍊</div>
            <div className="produce produce-four">🥕</div>
            <div className="produce produce-five">🍅</div>
            <div className="art-caption">
              A little greener, a little simpler.
            </div>
          </div>
        </section>
        <section className="trust-strip">
          <div>
            <span className="strip-icon">✳</span>
            <span>
              <strong>Our brand</strong>
              <small>Sprout Grocery</small>
            </span>
          </div>
          <div>
            <span className="strip-icon">⌂</span>
            <span>
              <strong>Operated by</strong>
              <small>Yameen Traders</small>
            </span>
          </div>
          <div>
            <span className="strip-icon">♡</span>
            <span>
              <strong>Our focus</strong>
              <small>Everyday essentials</small>
            </span>
          </div>
        </section>
        <section id="about" className="section about">
          <div className="section-kicker">A LITTLE ABOUT US</div>
          <div className="about-grid">
            <h2>
              Small details.
              <br />
              <em>Better grocery days.</em>
            </h2>
            <div>
              <p>
                <strong>Sprout</strong> is the grocery brand operated by{" "}
                <strong>Yameen Traders</strong>, a GST-registered sole
                proprietorship. Our aim is to make grocery shopping convenient
                and straightforward for customers.
              </p>
              <p>
                We’re developing our digital shopping experience around everyday
                essentials, clear information and helpful customer support.
              </p>
            </div>
          </div>
          <div className="values">
            <article>
              <span>01</span>
              <h3>Everyday essentials</h3>
              <p>
                A grocery-first experience designed around regular household
                needs.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Clear communication</h3>
              <p>
                Useful information and a way to reach the business when you need
                help.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Built with care</h3>
              <p>
                A straightforward shopping experience that we continue to
                improve.
              </p>
            </article>
          </div>
        </section>
        <section className="brand-band">
          <div className="band-symbol">✳</div>
          <div>
            <div className="section-kicker light">
              THE BUSINESS BEHIND THE BRAND
            </div>
            <h2>
              One business.
              <br />
              <em>A fresh new name.</em>
            </h2>
            <p>
              Sprout is the customer-facing brand. The business behind it is
              Yameen Traders.
            </p>
          </div>
          <div className="band-stamp">
            SPROUT
            <br />
            <span>BY YAMEEN TRADERS</span>
          </div>
        </section>
        <section id="contact" className="section contact">
          <div className="section-kicker">WE’RE HERE TO HELP</div>
          <div className="contact-grid">
            <div>
              <h2>
                Let’s talk
                <br />
                <em>groceries.</em>
              </h2>
              <p>
                For questions about Sprout or our services, please contact
                Yameen Traders using the business details below.
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-row">
                <span className="contact-icon">✉</span>
                <div>
                  <small>EMAIL</small>
                  <p>{CONTACT_EMAIL}</p>
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-icon">☎</span>
                <div>
                  <small>PHONE</small>
                  <p>{CONTACT_PHONE}</p>
                </div>
              </div>
              <div className="contact-row">
                <span className="contact-icon">⌖</span>
                <div>
                  <small>BUSINESS ADDRESS</small>
                  <p>{BUSINESS_ADDRESS}</p>
                </div>
              </div>
              <p className="contact-warning">
                Before publishing this website, replace the placeholder contact
                details with accurate business information.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
function PolicyLayout({ title, updated, children }) {
  return (
    <>
      <Header />
      <main className="policy">
        <Link to="/" className="back-link">
          ← Back to Sprout
        </Link>
        <div className="section-kicker">YAMEEN TRADERS · SPROUT</div>
        <h1>{title}</h1>
        <p className="policy-updated">Last updated: {updated}</p>
        {children}
        <div className="policy-notice">
          <strong>Publication checklist:</strong> Review this draft carefully
          and replace all placeholders with accurate business details before
          making the site public.
        </div>
      </main>
      <Footer />
    </>
  );
}
function Privacy() {
  return (
    <PolicyLayout title="Privacy Policy" updated="18 October 2026">
      <p>
        This Privacy Policy explains how <strong>Yameen Traders</strong> (“we”,
        “us” or “our”), which operates the <strong>Sprout</strong> grocery
        brand, may handle information when you visit our website or use our
        services.
      </p>
      <h2>1. Information we may handle</h2>
      <p>
        Depending on the features you use, information may include contact
        details you provide, delivery information, order details, and messages
        sent to customer support. The exact information collected depends on the
        service and app features in use.
      </p>
      <h2>2. How information may be used</h2>
      <p>
        Information may be used to respond to enquiries, process and deliver
        orders, provide customer support, maintain service security, and meet
        applicable legal obligations.
      </p>
      <h2>3. Sharing and service providers</h2>
      <p>
        Information may be shared with service providers needed to operate the
        service, such as hosting, authentication, communications or payment
        providers, and where required by law. Update this section to accurately
        reflect the providers and practices used by Sprout before publication.
      </p>
      <h2>4. Retention and security</h2>
      <p>
        We aim to protect information using appropriate safeguards and retain it
        only as needed for the purposes described or as required by law.
        Specific retention periods depend on the type of information and legal
        requirements.
      </p>
      <h2>5. Your choices and requests</h2>
      <p>
        For questions about personal information or to request account deletion,
        contact us using the verified contact details published on this website.
        We may need to verify your identity before acting on a request.
      </p>
      <h2>6. Children’s privacy</h2>
      <p>
        Our services are not intended to knowingly collect personal information
        from children without appropriate permission where required by law.
      </p>
      <h2>7. Changes to this policy</h2>
      <p>
        We may update this policy as our services change. The updated version
        will be published on this page with a revised date.
      </p>
      <h2>8. Contact</h2>
      <p>
        <strong>Yameen Traders</strong>
        <br />
        Sprout Grocery
        <br />
        Email: {CONTACT_EMAIL}
        <br />
        Phone: {CONTACT_PHONE}
        <br />
        Address: {BUSINESS_ADDRESS}
      </p>
    </PolicyLayout>
  );
}
function Terms() {
  return (
    <PolicyLayout title="Terms & Conditions" updated="18 October 2026">
      <p>
        These Terms & Conditions apply to the Sprout grocery brand operated by{" "}
        <strong>Yameen Traders</strong>. By accessing the website or using our
        services, you agree to these terms, as applicable.
      </p>
      <h2>1. Services</h2>
      <p>
        Sprout provides information about our grocery brand and may support
        grocery ordering and related services through our app or other channels.
        Availability, product range and service areas may change.
      </p>
      <h2>2. Orders and pricing</h2>
      <p>
        Where ordering is available, product availability, prices, applicable
        charges and order totals will be shown through the relevant ordering
        channel. An order may require confirmation before it is accepted.
      </p>
      <h2>3. Delivery</h2>
      <p>
        Delivery availability and estimated times depend on the service area,
        product availability and operating conditions. Any delivery commitments
        will be communicated through the ordering channel.
      </p>
      <h2>4. Cancellations, returns and refunds</h2>
      <p>
        Cancellation, return and refund terms should be shown at checkout or
        communicated through customer support. Add the final policy here before
        accepting public orders, including how customers can report missing,
        damaged or incorrect items.
      </p>
      <h2>5. Acceptable use</h2>
      <p>
        You agree to provide accurate information, use the service lawfully, and
        not attempt to disrupt or misuse our website or services.
      </p>
      <h2>6. Changes and availability</h2>
      <p>
        We may update the website, services or these terms as needed. We will
        publish updated terms on this page.
      </p>
      <h2>7. Contact</h2>
      <p>
        For questions about these terms, contact <strong>Yameen Traders</strong>{" "}
        using the verified business contact details below.
        <br />
        Email: {CONTACT_EMAIL}
        <br />
        Phone: {CONTACT_PHONE}
        <br />
        Address: {BUSINESS_ADDRESS}
      </p>
    </PolicyLayout>
  );
}
function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found">
        <h1>Page not found</h1>
        <p>That page may have moved.</p>
        <Link className="button button-primary" to="/">
          Return home
        </Link>
      </main>
      <Footer />
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
