import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import CandidatePage from "./pages/CandidatePage";
import MaintenancePage from "./components/MaintenancePage";

// Toggle this to true to show maintenance page, false to show normal site
const MAINTENANCE_MODE = true;

const App: React.FC = () => {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path=":candidateId" element={<CandidatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
