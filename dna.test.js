const dna = require('./dna');

describe('DNA', () => {
    it('should filter non-canonical bases and maintain case sensitivity', () => {
        expect(dna('CTAGGGTA')).toBe('CTAGGGTA');
        expect(dna('ctagggta')).toBe('ctagggta');
        expect(dna('CTYAGGgTa')).toBe('CTAGGTA');
    });

    it('should handle empty strings', () => {
        expect(dna('')).toBe('');
    });

    it('should throw an error for non-string inputs', () => {
        expect(() => dna(123)).toThrow('Input should be a string');
        expect(() => dna(true)).toThrow('Input should be a string');
    });
});
