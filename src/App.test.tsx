import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

test('renders learn react link', () => {
  render(<Provider store={store}><App foo="xfoo"/></Provider>);
  
  const btn = screen.getByRole('button', {
    name: /Click me!/i
  })
  act(() => {
  btn.click()
  } ) 
  const linkElement = screen.getByText(/BeforeDDD/i);
  expect(linkElement).toBeInTheDocument();
  const foo = screen.getByText(/xfoo/i)
  expect(foo).toBeInTheDocument()
});
