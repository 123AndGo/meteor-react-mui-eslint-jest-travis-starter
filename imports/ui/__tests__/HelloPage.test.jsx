/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';

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
  it('Should not display any message innitially', () => {
    act(() => {
      render(<HelloPage />, container);
    });
    expect(document.getElementById('hello-message')).toBe(null);
  });

  it('Should display "Hello World" if the user does not type any name and clicks submit', () => {
    act(() => {
      render(<HelloPage />, container);
    });
    document.getElementById('name-submit-button').click();
    expect(document.getElementById('hello-message').textContent).toBe('Hello World');
  });

  it('Should display "Hello World" if the user types just a space and clicks submit', () => {
    act(() => {
      render(<HelloPage />, container);
    });
    const nameInputField = document.getElementById('name-input-field');
    nameInputField.value = ' ';
    Simulate.change(nameInputField);

    document.getElementById('name-submit-button').click();

    expect(document.getElementById('hello-message').textContent).toBe('Hello World');
  });

  it('Should display "Hello X" (where X is what the user typed in the input field) after the user clicks submit', () => {
    act(() => {
      render(<HelloPage />, container);
    });
    const nameInputField = document.getElementById('name-input-field');
    nameInputField.value = 'Test';
    Simulate.change(nameInputField);

    document.getElementById('name-submit-button').click();

    expect(document.getElementById('hello-message').textContent).toBe('Hello Test');
  });
});
