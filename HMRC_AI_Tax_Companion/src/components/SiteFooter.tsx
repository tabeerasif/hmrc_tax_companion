const footerLinks = [
  "Help",
  "Cookies",
  "Privacy",
  "Accessibility",
  "Contact",
  "Terms and conditions",
];

export default function SiteFooter() {
  return (
    <footer className="govuk-footer tax-companion-footer">
      <div className="govuk-width-container tax-companion-footer__inner">
        <nav aria-label="Footer">
          <ul className="govuk-footer__inline-list">
            {footerLinks.map((item) => (
              <li className="govuk-footer__inline-list-item" key={item}>
                <a className="govuk-footer__link" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="tax-companion-hmrc-mark"
          aria-label="HM Revenue and Customs"
        >
          <img
            className="tax-companion-hmrc-mark"
            src="/assets/images/govuk-crest.svg"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
}