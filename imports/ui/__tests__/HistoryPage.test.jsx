/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import HistoryPage from '../pages/HistoryPage.jsx';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('History Page', () => {
  it('Should render "Coming soon..."', () => {
    act(() => {
      render(<HistoryPage />, container);
    });
    expect(document.getElementById('history').textContent).toBe('Coming soon...');
  });
});
