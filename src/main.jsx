import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./styles.css";

const business = "Yameen Traders";
const brand = "SM mart";

const CONTACT_EMAIL = "syed.rehan123@gmail.com";
const CONTACT_PHONE = "9686420464";
const BUSINESS_ADDRESS = "914 jc road channapatna 562160";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand" aria-label="SM mart home">
        <span className="brand-mark">✳</span>
        <span>
          SM mart<span className="brand-dot">.</span>
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
          SM mart.
        </Link>
        <p>Everyday groceries, with care.</p>
      </div>
      <div className="footer-links">
        <Link to="/privacy">Privacy policy</Link>
        <Link to="/terms">Terms & conditions</Link>
        <Link to="/delete-account">Delete account</Link>
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
              Welcome to SM mart, a grocery brand operated by Yameen Traders.
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
              <small>SM mart Grocery</small>
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
                <strong>SM mart</strong> is the grocery brand operated by{" "}
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
              SM mart is the customer-facing brand. The business behind it is
              Yameen Traders.
            </p>
          </div>
          <div className="band-stamp">
            SM MART
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
                For questions about SM mart or our services, please contact
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
function PolicyLayout({ title, updated, children }) {
  const isPrivacy = title === "Privacy Policy";
  return (
    <>
      <Header />
      <main className="policy">
        <Link to="/" className="back-link">
          ← Back to website
        </Link>
        <div className="section-kicker">
          {isPrivacy ? "YAMEEN TRADERS · SM MART" : "YAMEEN TRADERS · SM MART"}
        </div>
        <h1>{title}</h1>
        <p className="policy-updated">Last updated: {updated}</p>
        {children}
      </main>
      <Footer />
    </>
  );
}
function Privacy() {
  return (
    <PolicyLayout title="Privacy Policy" updated="28 October 2026">
      <p>
        Yameen Traders (“we”, “us” or “our”) operates SM mart, a grocery shopping
        application and related services. This Privacy Policy explains how we
        collect, use, store, share and protect personal information when you use
        SM mart.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        Depending on the features you use, SM mart may collect or process the
        following information:
      </p>
      <p>
        <strong>Phone number and authentication:</strong> Your mobile phone
        number, including its country code, and authentication information
        needed to verify your account through WhatsApp and maintain a secure
        signed-in session. Verification codes are used to authenticate you.
      </p>
      <p>
        <strong>Delivery address and location:</strong> The delivery address you
        provide and the map coordinates associated with a location you select
        or save using the map feature.
      </p>
      <p>
        <strong>Order information:</strong> Products ordered, quantities,
        prices, order totals, order status and order history, including
        information needed to manage Cash on Delivery (COD) orders, deliveries
        and cancellations.
      </p>
      <p>
        <strong>Support and technical information:</strong> Information you send
        to customer support and limited technical or diagnostic information
        generated when you use the app or its supporting services.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We may use information to:</p>
      <ul>
        <li>Create and authenticate your SM mart account and send WhatsApp verification codes.</li>
        <li>Process, confirm, manage and deliver grocery orders.</li>
        <li>Save and use delivery addresses and map coordinates for delivery.</li>
        <li>Manage Cash on Delivery orders, cancellations and customer support.</li>
        <li>Secure the service, troubleshoot issues, prevent misuse and comply with legal obligations.</li>
      </ul>

      <h2>3. Third-Party Services</h2>
      <p>
        SM mart uses Supabase for backend services, including authentication and
        application data storage and management. We use Meta/WhatsApp services
        to send account verification messages. These services may process
        information needed to provide their respective functions, subject to
        their own terms and privacy practices. We may also use hosting and
        infrastructure providers to operate and maintain the service.
      </p>
      <p>
        We may disclose information when required by law, in response to lawful
        requests, or where reasonably necessary to protect users, the service or
        our legal rights. We do not claim that every provider receives every
        category of information.
      </p>

      <h2>4. Sharing of Information</h2>
      <p>
        We do not sell personal information. We share information only as
        reasonably necessary to operate SM mart, including with service
        providers supporting authentication, hosting and communications, and
        with personnel who need relevant order and delivery details to fulfil
        an order.
      </p>

      <h2>5. Delivery Location</h2>
      <p>
        When you choose a delivery location on a map, the address and associated
        coordinates may be saved and used to deliver your order. Selecting a
        location on a map does not, by itself, mean that SM mart continuously
        tracks your device.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We use appropriate technical and organisational safeguards intended to
        protect personal information from unauthorised access, disclosure,
        alteration, loss or misuse. No method of electronic transmission or
        storage can be guaranteed to be completely secure.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain information for as long as reasonably necessary to provide
        the service, manage accounts and orders, address disputes, maintain
        security and meet applicable legal or accounting obligations. When an
        account is deleted, we will delete or arrange deletion of associated
        personal information, subject to information that must be retained for
        legal compliance or other legitimate purposes.
      </p>

      <h2>8. Account Deletion and Privacy Requests</h2>
      <p>
        You can initiate account deletion through the account-deletion option
        inside the SM mart app. If you cannot access the app, visit our{" "}
        <Link to="/delete-account">account deletion request page</Link> or email{" "}
        <a href={`mailto:${CONTACT_EMAIL}?subject=SM%20mart%20Account%20Deletion%20Request`}>
          {CONTACT_EMAIL}
        </a>{" "}
        with “SM mart Account Deletion Request” in the subject line. Please do
        not send your password or one-time verification code. We may need to
        verify your identity before processing a request.
      </p>
      <p>
        We will process verified requests within a reasonable period, subject
        to applicable legal requirements. Certain order or transaction records
        may need to be retained where required by law or for legitimate purposes
        such as resolving disputes or preventing fraud. You may also contact us
        to ask questions about your information or request correction of
        inaccurate information.
      </p>

      <h2>9. Children’s Privacy</h2>
      <p>
        SM mart is a general grocery shopping service and is not intended to
        knowingly collect children’s personal information in circumstances
        where parental permission or other safeguards are required by law. If
        you believe a child has provided information inappropriately, contact
        us so we can review the matter.
      </p>

      <h2>10. International Processing</h2>
      <p>
        Our service providers may process information in locations outside your
        country or region. Where applicable, we will take steps required by law
        to protect personal information during such processing.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy as SM mart, our service providers or
        legal obligations change. The latest version will be published on this
        page with its updated date.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        <strong>Yameen Traders</strong>
        <br />
        App: SM mart
        <br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <br />
        Phone: {CONTACT_PHONE}
        <br />
        Address: 914 JC Road, Channapatna, Karnataka 562160, India
      </p>
    </PolicyLayout>
  );
}
function DeleteAccount() {
  return (
    <PolicyLayout title="SM mart Account Deletion" updated="28 October 2026">
      <p>
        You can delete your SM mart account using the account-deletion option
        inside the app. If you cannot access the app, you can request deletion
        by contacting Yameen Traders using the email link below.
      </p>
      <h2>How to request deletion</h2>
      <ol>
        <li>Open your email application using the button below.</li>
        <li>Use the subject “SM mart Account Deletion Request”.</li>
        <li>Include the phone number associated with your SM mart account, including its country code, so we can identify the account. Do not include your password or OTP.</li>
        <li>We may contact you to verify the request before processing it.</li>
      </ol>
      <p>
        We will process verified requests within a reasonable period. Account
        information will be deleted subject to applicable legal requirements
        and records that must be retained for legitimate purposes, such as
        legal compliance or dispute resolution.
      </p>
      <p>
        <a
          className="button button-primary"
          href={`mailto:${CONTACT_EMAIL}?subject=SM%20mart%20Account%20Deletion%20Request`}
        >
          Request account deletion <span>↗</span>
        </a>
      </p>
      <h2>Contact</h2>
      <p>
        <strong>Yameen Traders</strong>
        <br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        <br />
        Phone: {CONTACT_PHONE}
        <br />
        Address: 914 JC Road, Channapatna, Karnataka 562160, India
      </p>
    </PolicyLayout>
  );
}
function Terms() {
  return (
    <PolicyLayout title="Terms & Conditions" updated="18 October 2026">
      <p>
        These Terms & Conditions apply to the SM mart grocery brand operated by{" "}
        <strong>Yameen Traders</strong>. By accessing the website or using our
        services, you agree to these terms, as applicable.
      </p>
      <h2>1. Services</h2>
      <p>
        SM mart provides information about our grocery brand and may support
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
        <Route path="/delete-account" element={<DeleteAccount />} />
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
