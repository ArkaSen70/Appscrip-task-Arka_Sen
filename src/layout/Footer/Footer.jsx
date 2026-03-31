import "./Footer.css";
import { ChevronDown, Instagram, LinkedIn, PaymentIcon } from "@/lib/icons";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Stories", href: "/stories" },
  { label: "Artisans", href: "/artisans" },
  { label: "Boutiques", href: "/boutiques" },
  { label: "Contact Us", href: "/contact" },
  { label: "EU Compliances Docs", href: "/eu-compliance" },
];

const QUICK_LINKS = [
  { label: "Orders & Shipping", href: "/orders-shipping" },
  { label: "Join/Login as a Seller", href: "/seller-login" },
  { label: "Payment & Pricing", href: "/payment-pricing" },
  { label: "Return & Refunds", href: "/returns" },
  { label: "FAQs", href: "/faqs" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/mettamuse",
    icon: <Instagram size={20} />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/mettamuse",
    icon: <LinkedIn size={20} />,
  },
];

const PAYMENT_METHODS = [
  { label: "Google Pay" },
  { label: "Mastercard" },
  { label: "PayPal" },
  { label: "American Express" },
  { label: "Apple Pay" },
  { label: "Samsung Pay" },
];

const ChevronDownIcon = () => (
  <ChevronDown className="footer_chevron" size={16} strokeWidth={2} aria-hidden="true" />
);

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="footer_container">

        <div className="footer_top">
          <section className="footer_newsletter" aria-labelledby="newsletter-heading">
            <h2 id="newsletter-heading" className="footer_section-title">BE THE FIRST TO KNOW</h2>
            <p className="footer_newsletter-desc">Sign up for updates from metta muse.</p>
            <form className="footer_newsletter-form" action="#" method="post" aria-label="Newsletter subscription">
              <label htmlFor="email-input" className="sr-only">Enter your e-mail address</label>
              <input
                id="email-input"
                type="email"
                name="email"
                className="footer_email-input"
                placeholder="Enter your e-mail..."
                required
                aria-required="true"
                autoComplete="email"
              />
              <button type="submit" className="footer_subscribe-btn">SUBSCRIBE</button>
            </form>
          </section>

          <div className="footer_right-info">
            <section className="footer_contact" aria-labelledby="contact-heading-desktop contact-heading-mobile">
              <h2 id="contact-heading-desktop" className="footer_section-title footer_contact-title-desktop">CONTACT US</h2>
              <h2 id="contact-heading-mobile" className="footer_section-title footer_contact-title-mobile">CALL US</h2>
              <address className="footer_address">
                <span className="footer_contact-desktop">
                  <a href="tel:+442211335360" className="footer_link footer_link-block" aria-label="Call us at +44 221 133 5360">
                    +44 221 133 5360
                  </a>
                  <a href="mailto:customercare@mettamuse.com" className="footer_link footer_link-block" aria-label="Email us at customercare@mettamuse.com">
                    customercare@mettamuse.com
                  </a>
                </span>
                <span className="footer_contact-mobile">
                  <a href="tel:+442211335360" className="footer_link" aria-label="Call us at +44 221 133 5360">
                    +44 221 133 5360
                  </a>
                  <span className="footer_bullet" aria-hidden="true">&bull;</span>
                  <a href="mailto:customercare@mettamuse.com" className="footer_link" aria-label="Email us at customercare@mettamuse.com">
                    customercare@mettamuse.com
                  </a>
                </span>
              </address>
            </section>

            <section className="footer_currency" aria-labelledby="currency-heading">
              <h2 id="currency-heading" className="footer_section-title">CURRENCY</h2>
              <div className="footer_currency-row">
                <img
                  src="https://flagcdn.com/w20/us.png"
                  srcSet="https://flagcdn.com/w40/us.png 2x"
                  width="20"
                  height="14"
                  alt="US Flag"
                  className="footer_flag"
                  loading="lazy"
                />
                <span className="footer_currency-text">&bull; USD</span>
              </div>
              <p className="footer_currency-note footer_currency-note-desktop">
                Transactions will be completed in Euros and a currency reference is available on hover.
              </p>
            </section>
          </div>
        </div>

        <hr className="footer_divider" aria-hidden="true" />

        <div className="footer_bottom">

          <section className="footer_col" aria-labelledby="company-heading">
            <input type="checkbox" id="toggle-company" className="footer_toggle" aria-hidden="true" />
            <label htmlFor="toggle-company" className="footer_accordion-label">
              <h2 id="company-heading" className="footer_brand-name">metta muse</h2>
              <ChevronDownIcon />
            </label>
            <nav className="footer_accordion-body" aria-label="Company navigation">
              <ul className="footer_nav-list">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href} className="footer_nav-item">
                    <a href={link.href} className="footer_link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          <section className="footer_col" aria-labelledby="quicklinks-heading">
            <input type="checkbox" id="toggle-quicklinks" className="footer_toggle" aria-hidden="true" />
            <label htmlFor="toggle-quicklinks" className="footer_accordion-label">
              <h2 id="quicklinks-heading" className="footer_section-title">QUICK LINKS</h2>
              <ChevronDownIcon />
            </label>
            <nav className="footer_accordion-body" aria-label="Quick links navigation">
              <ul className="footer_nav-list">
                {QUICK_LINKS.map((link) => (
                  <li key={link.href} className="footer_nav-item">
                    <a href={link.href} className="footer_link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          <section className="footer_col footer_col-last" aria-labelledby="follow-heading">
            <input type="checkbox" id="toggle-follow" className="footer_toggle" aria-hidden="true" />
            <label htmlFor="toggle-follow" className="footer_accordion-label">
              <h2 id="follow-heading" className="footer_section-title">FOLLOW US</h2>
              <ChevronDownIcon />
            </label>
            <div className="footer_accordion-body">
              <div className="footer_social-icons" role="list">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    className="footer_social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.label}`}
                    role="listitem"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer_payments">
              <h2 className="footer_accepts-title">
                metta muse <span>ACCEPTS</span>
              </h2>
              <div className="footer_payment-icons" role="list" aria-label="Accepted payment methods">
                {PAYMENT_METHODS.map((method) => (
                  <div
                    key={method.label}
                    className="footer_payment-badge"
                    role="listitem"
                    aria-label={method.label}
                    title={method.label}
                  >
                    <PaymentIcon label={method.label} />
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

        <div className="footer_copyright">
          <p>Copyright &copy; {new Date().getFullYear()} mettamuse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

