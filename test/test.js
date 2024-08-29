const { expect } = require('chai');
const { addNumbers, concatenateStrings } = require('../math');

describe('Math Functions', () => {
    describe('addNumbers()', () => {
        it('should return the sum of two numbers', () => {
            const result = addNumbers(2, 3);
            expect(result).to.equal(5);
        });

        it('should throw an error if the arguments are not numbers', () => {
            expect(() => addNumbers('2', 3)).to.throw('Parameters must be numbers');
        });
    });

    describe('concatenateStrings()', () => {
        it('should return the concatenation of two strings', () => {
            const result = concatenateStrings('Hello', ' World');
            expect(result).to.equal('Hello World');
        });

        it('should throw an error if the arguments are not strings', () => {
            expect(() => concatenateStrings(2, 'World')).to.throw('Parameters must be strings');
        });
    });
});
