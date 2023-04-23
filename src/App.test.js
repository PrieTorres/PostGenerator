import { render } from '@testing-library/react';
import App from './App';

test('renders APP', () => {
  window.scrollTo = jest.fn();
  render(<App />);
  /*const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();*/
});

