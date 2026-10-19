import { FormEvent, useState } from "react";
import { Link } from "react-router";

type ConversationMessage = {
  id: number;
  sender: "user" | "assistant";
  text: string;
};

function InformationIcon() {
  return (
    <span
      className="information-mode-warning__icon"
      aria-hidden="true"
    >
      i
    </span>
  );
}

function AssistantIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="information-mode-assistant-icon"
      fill="none"
    >
      <path
        d="M32 15V8"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <circle cx="32" cy="6" r="3" fill="currentColor" />

      <rect
        x="10"
        y="17"
        width="44"
        height="34"
        rx="12"
        stroke="currentColor"
        strokeWidth="4"
      />

      <circle cx="24" cy="34" r="4" fill="currentColor" />
      <circle cx="40" cy="34" r="4" fill="currentColor" />

      <path
        d="M25 43h14"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M10 30H6M58 30h-4"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MicrophoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="information-mode-action-icon"
      fill="none"
    >
      <rect
        x="11"
        y="3"
        width="10"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M7 15c0 5 4 9 9 9s9-4 9-9M16 24v5M11 29h10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="information-mode-action-icon"
      fill="none"
    >
      <circle
        cx="16"
        cy="10"
        r="5"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M6 28c1-7 4.5-10 10-10s9 3 10 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="information-mode-send-icon"
      fill="none"
    >
      <path
        d="m5 5 23 11L5 27l4-9 11-2-11-2-4-9Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function InformationModePage() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [announcement, setAnnouncement] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      setAnnouncement("Enter a question or explain your situation.");
      return;
    }

    const userMessage: ConversationMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedQuestion,
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
    ]);

    setQuestion("");
    setAnnouncement("Your message has been added to the conversation.");

    /*
     * Mock responses can be added here later.
     *
     * Example:
     *
     * const assistantMessage: ConversationMessage = {
     *   id: Date.now() + 1,
     *   sender: "assistant",
     *   text: "This is an example prototype response.",
     * };
     *
     * setMessages((currentMessages) => [
     *   ...currentMessages,
     *   userMessage,
     *   assistantMessage,
     * ]);
     */
  }

  function handleVoiceInput() {
    setAnnouncement(
      "Voice input is not available in this prototype.",
    );
  }

  return (
      <main
        className="govuk-width-container information-mode-main"
        id="main-content"
      >
        <div className="information-mode-heading">
          <div>
            <div className="tax-companion-title-row">
              <h1 className="govuk-heading-xl tax-companion-page-title">
                Tax Companion
              </h1>

              <strong className="govuk-tag govuk-tag--grey">
                Beta
              </strong>
            </div>

            <p className="govuk-body-l information-mode-lead">
              Your personal assistant for tax.
            </p>
          </div>

          <a className="govuk-link information-mode-about-link" href="#">
            About Tax Companion
          </a>
        </div>

        <nav
          className="information-mode-switcher"
          aria-label="Tax Companion mode"
        >
          <Link
            className="information-mode-switcher__option information-mode-switcher__option--current"
            to="/information-mode"
            aria-current="page"
          >
            Information Mode
          </Link>

          <Link
            className="information-mode-switcher__option"
            to="/journey-mode"
          >
            Journey Mode
          </Link>
        </nav>

        <div className="information-mode-layout">
          <div className="information-mode-primary">
            <section
              className="information-mode-status"
              aria-labelledby="information-mode-status-title"
            >
              <InformationIcon />

              <div>
                <h2
                  className="govuk-heading-m information-mode-status__title"
                  id="information-mode-status-title"
                >
                  You are in Information Mode
                </h2>

                <p className="govuk-body information-mode-status__text">
                  Get answers, guidance and explanations about tax topics.
                </p>
              </div>
            </section>

            <section
              className="information-mode-chat"
              aria-label="Conversation with Tax Companion"
            >
              <div
                className="govuk-visually-hidden"
                aria-live="polite"
                aria-atomic="true"
              >
                {announcement}
              </div>

              <div className="information-mode-chat__messages">
                <article className="information-mode-message information-mode-message--assistant">
                  <div className="information-mode-message__avatar">
                    <AssistantIcon />
                  </div>

                  <div className="information-mode-message__bubble">
                    <p className="govuk-body information-mode-message__heading">
                      Hello,
                      <br />
                      How can I help you today?
                    </p>

                    <p className="govuk-body-s information-mode-message__supporting">
                      Ask a question about tax or explain your situation below.
                    </p>
                  </div>
                </article>

                {messages.map((message) => (
                  <article
                    className={`information-mode-message information-mode-message--${message.sender}`}
                    key={message.id}
                  >
                    {message.sender === "assistant" && (
                      <div className="information-mode-message__avatar">
                        <AssistantIcon />
                      </div>
                    )}

                    <div className="information-mode-message__bubble">
                      <p className="govuk-body">{message.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <form
                className="information-mode-composer"
                onSubmit={handleSubmit}
              >
                <div className="information-mode-composer__input">
                  <label
                    className="govuk-visually-hidden"
                    htmlFor="information-mode-question"
                  >
                    Explain your situation or ask a tax question
                  </label>

                  <textarea
                    className="govuk-textarea information-mode-textarea"
                    id="information-mode-question"
                    name="informationModeQuestion"
                    rows={2}
                    value={question}
                    placeholder="Explain your situation..."
                    onChange={(event) => setQuestion(event.target.value)}
                  />
                </div>

                <button
                  className="information-mode-icon-button"
                  type="button"
                  onClick={handleVoiceInput}
                  aria-label="Use voice input"
                  aria-describedby="voice-input-description"
                >
                  <MicrophoneIcon />
                </button>

                <span
                  className="govuk-visually-hidden"
                  id="voice-input-description"
                >
                  Voice input is not available in this prototype.
                </span>

                <a
                  className="information-mode-icon-button"
                  href="#"
                  aria-label="Request human support"
                >
                  <SupportIcon />
                </a>

                <button
                  className="govuk-button information-mode-send-button"
                  type="submit"
                  aria-label="Send message"
                >
                  <SendIcon />
                </button>
              </form>
            </section>
          </div>

          <aside
            className="information-mode-sidebar"
            aria-label="Additional Information Mode guidance"
          >
            <details className="govuk-details information-mode-details">
              <summary className="govuk-details__summary">
                <span className="govuk-details__summary-text">
                  Suggested next steps
                </span>
              </summary>

              <div className="govuk-details__text">
                <ul className="govuk-list govuk-list--bullet">
                  <li>Explain the tax topic you need help with.</li>
                  <li>Do not include sensitive personal information.</li>
                  <li>Check the supporting GOV.UK guidance.</li>
                </ul>
              </div>
            </details>

            <details className="govuk-details information-mode-details">
              <summary className="govuk-details__summary">
                <span className="govuk-details__summary-text">
                  Useful links
                </span>
              </summary>

              <div className="govuk-details__text">
                <ul className="govuk-list">
                  <li>
                    <a className="govuk-link" href="#">
                      Browse HMRC guidance
                    </a>
                  </li>

                  <li>
                    <a className="govuk-link" href="#">
                      Contact HMRC
                    </a>
                  </li>

                  <li>
                    <a className="govuk-link" href="#">
                      Get help with tax
                    </a>
                  </li>
                </ul>
              </div>
            </details>

            <div className="information-mode-warning">
              <InformationIcon />

              <div>
                <h2 className="govuk-heading-s information-mode-warning__title">
                  This is general guidance, not personal advice
                </h2>

                <p className="govuk-body-s information-mode-warning__text">
                  For complex situations, you may wish to{" "}
                  <a className="govuk-link" href="#">
                    request human support
                  </a>
                  .
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
  );
}