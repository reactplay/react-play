import { render, screen } from '@testing-library/react';
import Total from '../index';

describe('Total: Basic rendering', () => {
  test('should display total amount sent in props', () => {
    const total = 2327.99;
    const currency = 'INR';

    render(<Total currency={currency} total={total} />);

    const totalElement = screen.getByText(/₹/);

    expect(totalElement).toHaveTextContent(total);
  });
});
