/*
This method implements integer to  roman numeral conversion.
Reference specification: 
    1. https://en.wikipedia.org/wiki/Roman_numerals
    2. https://www.cuemath.com/numbers/roman-numerals/
*/

export function integerToRoman(integer: number): string {
    if (integer < 1 || integer > 3999) {
        return ""
    }
    // Define a mapping of Roman numeral values and their symbols
    const romanMap: { value: number; numeral: string }[] = [
        { value: 1000, numeral: 'M' },  // 1000 -> M
        { value: 900, numeral: 'CM' },  // 900 -> CM
        { value: 500, numeral: 'D' },   // 500 -> D
        { value: 400, numeral: 'CD' },  // 400 -> CD
        { value: 100, numeral: 'C' },   // 100 -> C
        { value: 90, numeral: 'XC' },   // 90 -> XC
        { value: 50, numeral: 'L' },    // 50 -> L
        { value: 40, numeral: 'XL' },   // 40 -> XL
        { value: 10, numeral: 'X' },    // 10 -> X
        { value: 9, numeral: 'IX' },    // 9 -> IX
        { value: 5, numeral: 'V' },     // 5 -> V
        { value: 4, numeral: 'IV' },    // 4 -> IV
        { value: 1, numeral: 'I' }      // 1 -> I
    ];

    // Initialize an empty string to store the resulting Roman numeral
    let romanNumeral: string = '';

    // Loop through each mapping in the Roman numeral map
    for (const { value, numeral } of romanMap) {
        // While the current value fits into the number,
        // append the corresponding numeral to the result and reduce the number
        while (integer >= value) {
            romanNumeral += numeral;  // Add the Roman numeral to the result
            integer -= value;       // Subtract the value from the number
        }
    }

    // Return the final Roman numeral
    return romanNumeral;
}

export default integerToRoman;