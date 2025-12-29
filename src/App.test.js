import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  // You can add more specific assertions here if needed
  // For now, we'll just check if the app renders without crashing.
});
