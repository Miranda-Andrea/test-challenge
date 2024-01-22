const calcularFactorial = require('./factorial');

describe('Cálculo Factorial', () => {
    it('debería calcular el factorial de 0 como 1', () => {
        expect(calcularFactorial(0)).toBe(1);
    });

    it('debería calcular el factorial de 1 como 1', () => {
        expect(calcularFactorial(1)).toBe(1);
    });

    it('debería calcular el factorial de números mayores a 1', () => {
        expect(calcularFactorial(5)).toBe(120);
        expect(calcularFactorial(10)).toBe(3628800);
    });

    it('debería arrojar un error para números negativos', () => {
        expect(() => calcularFactorial(-1)).toThrow('El factorial no está definido para números negativos');
    });

    
});
