/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import HistoryPage from '../pages/HistoryPage.jsx';

jest.mock('meteor/react-meteor-data', () => ({
  useTracker: () => ({
    names: [{ _id: 'id1', text: 'Test1' }, { _id: 'id2', text: 'Test2' }],
    isLoading: false,
  }),
}));

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
  it("Should display the list of greeted user names as 'Hello X' where X is the user's name", () => {
    act(() => {
      render(<HistoryPage />, container);
    });
    expect(document.getElementById('id1').textContent).toBe('Hello Test1');
    expect(document.getElementById('id2').textContent).toBe('Hello Test2');
  });
});
