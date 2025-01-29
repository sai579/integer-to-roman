import { integerToRoman } from './integer-to-roman.service';

describe('integerToRoman function', () => {
    test('converts 1 to "I"', () => {
        expect(integerToRoman(1)).toBe('I');
    });

    test('converts 4 to "IV"', () => {
        expect(integerToRoman(4)).toBe('IV');
    });

    test('converts 9 to "IX"', () => {
        expect(integerToRoman(9)).toBe('IX');
    });

    test('converts 10 to "X"', () => {
        expect(integerToRoman(10)).toBe('X');
    });

    test('converts 400 to "CD"', () => {
        expect(integerToRoman(400)).toBe('CD');
    });

    test('converts 900 to "CM"', () => {
        expect(integerToRoman(900)).toBe('CM');
    });

    test('converts 3999 to "MMMCMXCIX"', () => {
        expect(integerToRoman(3999)).toBe('MMMCMXCIX');
    });

    test('returns emtpy string if the number exceeds range', () => {
        expect(integerToRoman(4000)).toBe('');
    });
});
