const fizzbuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {
    it('should return Fizz if divisible by 3', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
        expect(fizzbuzz(9)).toBe('Fizz');
        // Agregar más casos de prueba para números divisibles por 3
    });

    it('should return Buzz if divisible by 5', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
        expect(fizzbuzz(10)).toBe('Buzz');
        // Agregar más casos de prueba para números divisibles por 5
    });

    it('should return FizzBuzz if divisible by both 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
        expect(fizzbuzz(30)).toBe('FizzBuzz');
        // Agregar más casos de prueba para números divisibles por ambos 3 y 5
    });

    it('should return the original number if not divisible by 3 or 5', () => {
        expect(fizzbuzz(1)).toBe(1);
        expect(fizzbuzz(7)).toBe(7);
        // Agregar más casos de prueba para números que no son divisibles por 3 o 5
    });
});
