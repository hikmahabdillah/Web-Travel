import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DetailPackages from './DetailPackages.jsx'
import AllPackagesPage from './AllPackagesPage.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}/>
              <Route path="/all-package" element={<AllPackagesPage/>} />
              <Route path="/detail-package/:id" element={<DetailPackages/>} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
  </React.StrictMode>,
)
