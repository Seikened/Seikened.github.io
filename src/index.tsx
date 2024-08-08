import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import { DayNightProvider } from './components/DayNightContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <DayNightProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </DayNightProvider>
  </React.StrictMode>
);

reportWebVitals();
