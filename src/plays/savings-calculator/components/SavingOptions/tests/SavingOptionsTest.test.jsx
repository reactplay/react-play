import { act, fireEvent, render, screen } from '@testing-library/react';
import SavingOptions from '../index';

describe('Saving Options: Basic rendering and functionality', () => {
  test('should have default values in form', () => {
    render(<SavingOptions currency="INR" />);

    const currencyOptions = screen.getByRole('option', { name: 'INR' });
    const startingBalance = screen.getByPlaceholderText('Enter initial balance');
    const monthlyContribution = screen.getByPlaceholderText('Enter monthly contribution');
    const period = screen.getByPlaceholderText('Enter period of contribution');
    const periodChoice = screen.getByLabelText('Years');
    const annualInterest = screen.getByPlaceholderText('Enter interest rate per annum');

    expect(currencyOptions.selected).toBeTruthy();
    expect(startingBalance).toHaveValue(1000);
    expect(monthlyContribution).toHaveValue(100);
    expect(period).toHaveValue(1);
    expect(periodChoice).toBeChecked();
    expect(annualInterest).toHaveValue(8);
  });

  test('should be able to change currency', () => {
    const changeCurrency = jest.fn();

    render(<SavingOptions currency="INR" setCurrency={changeCurrency} />);

    const selectCurrency = screen.getByRole('combobox', { name: 'Currency:' });

    act(() => {
      fireEvent.change(selectCurrency, {
        target: { value: 'USD' }
      });
    });

    expect(changeCurrency).toHaveBeenCalledWith('USD');
  });

  test('should return total amount', () => {
    let total;
    const setTotal = (result) => {
      total = result;
    };

    render(<SavingOptions currency="INR" setTotal={setTotal} />);

    const calculateButton = screen.getByRole('button', { name: /Calculate/i });
    act(() => {
      fireEvent.click(calculateButton);
    });

    expect(total).toBe(2327);
  });
});
