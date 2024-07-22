import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // Importa el CSS compilado
import App from './App';
import reportWebVitals from './reportWebVitals';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router basename="/Seikened.github.io">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
