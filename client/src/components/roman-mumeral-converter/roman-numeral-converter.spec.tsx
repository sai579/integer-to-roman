import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RomanNumeralConverter from './roman-mumeral-converter';

describe('RomanNumeralConverter', () => {

    test('renders RomanNumeralConverter', () => {
        const { baseElement } = render(<RomanNumeralConverter />);
        expect(baseElement).toBeTruthy();
    });

    test('RomanNumeralConverter header', () => {
        render(<RomanNumeralConverter />);
        const linkElement = screen.getByText(/Roman Numeral Converter/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('verify input label to be rendered', () => {
        render(<RomanNumeralConverter />);
        const linkElement = screen.getByText(/Enter a number/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('updates input value when user types number', () => {
        render(<RomanNumeralConverter />);

        const inputElement = screen.getByPlaceholderText('Enter a number')

        // Simulate user typing "55"
        fireEvent.change(inputElement, { target: { value: '55' } });

        // Expect the input value to be updated
        expect(inputElement).toHaveValue('55');
    });

    test('renders button with the correct label', () => {
        render(<RomanNumeralConverter />);

        // Check if the button is rendered with the correct label
        const buttonElement = screen.getByRole('button', { name: /Convert to Roman Numeral/i });
        expect(buttonElement).toBeInTheDocument();
    });
})