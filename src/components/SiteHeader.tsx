import { Link } from "react-router";

export default function SiteHeader() {
  return (
    <header className="tax-companion-header">
      <div className="tax-companion-header__top">
        <div className="govuk-width-container tax-companion-header__top-inner">
          <Link
            className="tax-companion-brand"
            to="/"
            aria-label="GOV.UK home"
          >
            <img
              className="tax-companion-brand__icon"
              src="/assets/images/govuk-opengraph-image.png"
              alt=""
            />
          </Link>

          <nav
            className="tax-companion-language-nav"
            aria-label="Language and account"
          >
            <a className="govuk-link tax-companion-header-link" href="#">
              English
            </a>
            <a className="govuk-link tax-companion-header-link" href="#">
              Cymraeg
            </a>
            <a className="govuk-link tax-companion-header-link" href="#">
              Sign out
            </a>
          </nav>
        </div>
      </div>

      <div className="tax-companion-account-header">
        <div className="govuk-width-container">
          <div className="tax-companion-account-heading">
            <p className="govuk-heading-s tax-companion-account-title">
              Personal tax account
            </p>
          </div>

          <div className="tax-companion-account-row">
            <button
              className="govuk-button govuk-button--secondary tax-companion-menu-button"
              type="button"
              aria-label="Open personal tax account navigation"
            >
              Menu
            </button>

            <nav
              className="tax-companion-account-nav"
              aria-label="Personal tax account"
            >
              <ul className="govuk-list tax-companion-account-nav__list">
                <li>
                  <a className="govuk-link" href="#">
                    Account home
                  </a>
                </li>
                <li>
                  <a className="govuk-link tax-companion-message-link" href="#">
                    Messages
                    <span
                      className="tax-companion-notification"
                      aria-label="2 unread messages"
                    >
                      2
                    </span>
                  </a>
                </li>
                <li>
                  <a className="govuk-link" href="#">
                    Check progress
                  </a>
                </li>
                <li>
                  <Link
                    className="govuk-link tax-companion-account-nav__current"
                    to="/"
                    aria-current="page"
                  >
                    Tax Companion
                  </Link>
                </li>
                <li>
                  <a className="govuk-link" href="#">
                    Profile and settings
                  </a>
                </li>
                <li>
                  <a className="govuk-link" href="#">
                    Business tax account
                  </a>
                </li>
              </ul>
            </nav>

            <div
              className="tax-companion-language-short"
              aria-label="Language selection"
            >
              ENG <span aria-hidden="true">|</span> CYM
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}