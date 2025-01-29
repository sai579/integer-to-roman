import axios, { AxiosError } from "axios";
import { useState } from "react";
import './roman-numeral-converter.scss';

// Regex to allow only integers as input
const NUMBER_REGEX = /^[0-9]*$/;

// Functional component that render roman numeral convertet form
export function RomanNumeralConverter() {
    const [integerInput, setIntegerInput] = useState<string>('');
    const [convertedRomanNumeral, setConvertedRomanNumeral] = useState<string>('');
    const [error, setError] = useState<string>('');

    // handle updates to the "integerInput" when user inputs number
    const handleInputOnChange = (integer: string) => {
        setIntegerInput(integer);
    };

    // Method that checks for a valid number and if valid makes API call to the backend 
    // to get the corresponding roman numeral of the provided number.
    // If the user inputs an invalid number, then sets an error message to display on UI
    const convertIntToRoman = () => {
        if (new RegExp(NUMBER_REGEX).test(integerInput)) {
            axios.get('http://localhost:3001/romannumeral', { params: { query: integerInput } })
                .then((res) => {
                    setConvertedRomanNumeral(res.data);
                    setError('');
                })
                .catch((error: AxiosError) => {
                    setError(error.response?.data as string)
                })
        } else {
            setError('Invalid number. Input must be an integer.')
        }
    };

    return (
        <div className="integer-to-roman-form-contaner">
            <div className="header">
                Roman Numeral Converter
            </div>
            <div className="input-container">
                <label className="input-label">Enter a number</label>
                <input
                    type="text"
                    placeholder="Enter a number"
                    value={integerInput}
                    className={!error ? "input-form" : "input-form-error-state"}
                    onChange={(event) => handleInputOnChange(event.target.value)}
                />
            </div>
            <button className="button" onClick={convertIntToRoman}>Convert to Roman Numeral</button>
            <div className="roman-numeral-result">Roman numeral: {!error ? convertedRomanNumeral : ''}</div>
            {error && (
                <div className="error-container">{error}</div>
            )}
        </div>
    )
}

export default RomanNumeralConverter;