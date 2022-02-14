import { Meteor } from 'meteor/meteor';
import '../imports/api/namesMethods';

import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';

const HelloPage = lazy(() => import('../imports/ui/pages/HelloPage.jsx'));
const HistoryPage = lazy(() => import('../imports/ui/pages/HistoryPage.jsx'));

Meteor.startup(() => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<App page={<HelloPage />} />} />
        <Route path="/history" element={<App page={<HistoryPage />} />} />
      </Routes>
    </Router>,
    document.getElementById('react-target'),
  );
});
