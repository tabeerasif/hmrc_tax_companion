import ModeCard from "../components/ModeCard";



function BookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="tax-companion-mode-icon__svg"
      fill="none"
    >
      <path
        d="M8 15c10-3 18-1 24 5v34c-6-6-14-8-24-5V15Zm48 0c-10-3-18-1-24 5v34c6-6 14-8 24-5V15Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function JourneyIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="tax-companion-mode-icon__svg"
      fill="none"
    >
      <path
        d="M14 8h30v26H14V8Zm8 10h14M22 26h10"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="43"
        cy="44"
        r="13"
        fill="white"
        stroke="currentColor"
        strokeWidth="5"
      />

      <path
        d="m37 44 4 4 8-9"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
      <main
        className="govuk-width-container tax-companion-main"
        id="main-content"
      >
        <div className="tax-companion-page-heading">
          <div>
            <div className="tax-companion-title-row">
              <h1 className="govuk-heading-xl tax-companion-page-title">
                Tax Companion
              </h1>

              <strong className="govuk-tag govuk-tag--grey">
                Beta
              </strong>
            </div>

            <p className="govuk-body-l tax-companion-lead">
              Get guidance and complete tax tasks with personalised support.
            </p>
          </div>

          <a
            className="govuk-link tax-companion-about-link"
            href="#"
          >
            About Tax Companion
          </a>
        </div>

        <section
          className="tax-companion-mode-grid"
          aria-label="Choose a Tax Companion mode"
        >
          <ModeCard
            kind="information"
            title="Information Mode"
            description="Explain your situation or ask a question"
            href="/information-mode"
            icon={<BookIcon />}
            navigate="Get guidance"
          />

          <ModeCard
            kind="journey"
            title="Journey Mode"
            description="Complete an HMRC task with guided, step-by-step support from start to submission"
            href="/journey-mode"
            icon={<JourneyIcon />}
            navigate="Start a task"
          />
        </section>

        <aside
          className="tax-companion-help-panel"
          aria-labelledby="choice-help-title"
        >
          <span
            className="tax-companion-info-icon"
            aria-hidden="true"
          >
            i
          </span>

          <div>
            <h2
              className="govuk-heading-s tax-companion-help-panel__title"
              id="choice-help-title"
            >
              Not sure which option to choose?
            </h2>

            <p className="govuk-body tax-companion-help-panel__body">
              You can switch between Information Mode and Journey Mode at any
              time.
            </p>
          </div>
        </aside>
      </main>
  );
}