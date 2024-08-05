import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DetailPackages from "./DetailPackages.jsx";
import AllPackagesPage from "./AllPackagesPage.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterTripContextProvider from "./context/FilterTrip";
import {AuthContextProvider} from "./context/AuthContext";
import "./index.css";
import LoginPage from "./LoginPage.jsx";
import RegisterPage from "./RegisterPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
    <FilterTripContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/all-package" element={<AllPackagesPage />} />
          <Route path="/detail-package/:id" element={<DetailPackages />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </FilterTripContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
