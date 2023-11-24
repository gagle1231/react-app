import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const counterElement = screen.getByTextId("counter");
  expect(counterElement).toHaveTextContent(0);
});
