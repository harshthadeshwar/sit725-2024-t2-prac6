function addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Parameters must be numbers');
    }
    return a + b;
}

function concatenateStrings(a, b) {
    if (typeof a !== 'string' || typeof b !== 'string') {
        throw new Error('Parameters must be strings');
    }
    return a + b;
}

module.exports = { addNumbers, concatenateStrings };
