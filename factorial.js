function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else if (n < 0) {
        throw new Error('El factorial no está definido para números negativos');
    } else {
        return n * calcularFactorial(n - 1);
    }
}

module.exports = calcularFactorial;
