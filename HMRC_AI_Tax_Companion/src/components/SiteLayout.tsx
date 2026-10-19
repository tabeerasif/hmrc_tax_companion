import { Outlet } from "react-router";

import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function SiteLayout() {
  return (
    <div className="tax-companion-site">
      <a className="govuk-skip-link" href="#main-content">
        Skip to main content
      </a>

      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}