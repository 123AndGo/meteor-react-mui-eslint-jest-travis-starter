import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { Container } from '@mui/material';

import TopAppBar from './components/TopAppBar.jsx';
import BottomAppBar from './components/BottomAppBar.jsx';

function AppContainer({ page }) {
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

AppContainer.propTypes = { page: PropTypes.element };
AppContainer.defaultProps = { page: <div /> };

export default AppContainer;
