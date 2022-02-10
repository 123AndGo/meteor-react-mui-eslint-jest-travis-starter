/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import HelloPage from '../pages/HelloPage.jsx';

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

describe('Hello Page', () => {
  it('Should render "Hello World" when the user does not input any name', () => {
    act(() => {
      render(<HelloPage />, container);
    });
    expect(document.getElementById('hello-message').textContent).toBe('Hello World');
  });
});
