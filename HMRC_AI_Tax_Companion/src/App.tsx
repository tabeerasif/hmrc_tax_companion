import { Route, Routes } from "react-router";

import SiteLayout from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import InformationModePage from "./pages/InformationModePage";
import JourneyModePlaceholder from "./pages/JourneyModePlaceholder";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/information-mode"
          element={<InformationModePage />}
        />

        <Route
          path="/journey-mode"
          element={<JourneyModePlaceholder />}
        />
      </Route>
    </Routes>
  );
}