function dna(input) {
    if (typeof input !== 'string') {
        throw new Error('Input should be a string');
    }

    if (input === '') {
        return '';
    }

    const validBases = ['C', 'T', 'A', 'G'];

    return input
        .split('')
        .filter(base => validBases.includes(base.toUpperCase()))
        .join('');
}

module.exports = dna;
