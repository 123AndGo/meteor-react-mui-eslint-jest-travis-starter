import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppContainer from './AppContainer.jsx';

const HelloPage = lazy(() => import('./pages/HelloPage.jsx'));
const HistoryPage = lazy(() => import('./pages/HistoryPage.jsx'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContainer page={<HelloPage />} />} />
        <Route path="/history" element={<AppContainer page={<HistoryPage />} />} />
      </Routes>
    </Router>
  );
}

export default App;
