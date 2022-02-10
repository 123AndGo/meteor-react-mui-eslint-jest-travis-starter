import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { Container } from '@mui/material';

import TopAppBar from './components/TopAppBar.jsx';
import BottomAppBar from './components/BottomAppBar.jsx';

function App({ page }) {
  return (
    <>
      <TopAppBar />
      <Container maxWidth="sm">
        <Suspense fallback={<div>Loading...</div>}>
          {page}
        </Suspense>
      </Container>
      <BottomAppBar />
    </>
  );
}

App.propTypes = { page: PropTypes.element };
App.defaultProps = { page: <div /> };

export default App;
