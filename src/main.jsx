import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import OverviewPage from './OverviewPage.jsx'
import OurWorkPage from './OurWorkPage.jsx'
import OurPeoplePage from './OurPeoplePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<OverviewPage />} />
          <Route path="our-work" element={<OurWorkPage />} />
          <Route path="our-people" element={<OurPeoplePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
