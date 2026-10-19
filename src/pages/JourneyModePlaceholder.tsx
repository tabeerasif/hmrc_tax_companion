import { Link } from "react-router";

export default function JourneyModePlaceholder() {
  return (
    <main
      className="govuk-width-container govuk-main-wrapper"
      id="main-content"
    >
      <Link className="govuk-back-link" to="/information-mode">
        Back to Information Mode
      </Link>

      <strong className="govuk-tag govuk-tag--green">
        Journey mode
      </strong>

      <h1 className="govuk-heading-xl govuk-!-margin-top-4">
        Journey Mode
      </h1>

      <p className="govuk-body-l">
        This page has not been implemented yet.
      </p>

      <Link className="govuk-button" to="/">
        Return to Tax Companion
      </Link>
    </main>
  );
}