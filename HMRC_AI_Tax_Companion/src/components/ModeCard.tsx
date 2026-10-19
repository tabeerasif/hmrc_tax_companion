import type { ReactNode } from "react";
import { Link } from "react-router";

function Chevron() {
  return (
    <span aria-hidden="true" className="tax-companion-chevron">
      ›
    </span>
  );
}

type ModeCardProps = {
  kind: "information" | "journey";
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  navigate: string;
};

export default function ModeCard({
  kind,
  title,
  description,
  href,
  icon,
  navigate,
}: ModeCardProps) {
  return (
    <article
      className={`tax-companion-mode-card tax-companion-mode-card--${kind}`}
    >
      <div className="tax-companion-mode-card__summary">
        <div className="tax-companion-mode-icon" aria-hidden="true">
          {icon}
        </div>

        <div className="tax-companion-mode-card__intro">
          <h2 className="govuk-heading-l tax-companion-mode-card__title">
            {title}
          </h2>

          <p className="govuk-body-l tax-companion-mode-card__description">
            {description}
          </p>
        </div>

        <Chevron />
      </div>

      {/* <div className="tax-companion-mode-card__details">
        <h3 className="govuk-heading-s">{listTitle}</h3>

        <ul className="govuk-list govuk-list--bullet">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div> */}

      <Link
        className={`govuk-button tax-companion-mode-button tax-companion-mode-button--${kind}`}
        to={href}
      >
        <span>{navigate}</span>
        <Chevron />
      </Link>
    </article>
  );
}