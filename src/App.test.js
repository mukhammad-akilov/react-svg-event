import { render, screen } from '@testing-library/react';
import App from './App';

test('renders svg element', () => {
  render(<App />);
  const svgElement = screen.getByTestId("automatika-roadmap");
  expect(svgElement).toBeInTheDocument();
});
