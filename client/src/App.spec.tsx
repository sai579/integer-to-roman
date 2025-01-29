import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeAll(() => {
    global.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === "(prefers-color-scheme: dark)",
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));
  });
  test('renders App', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
})
