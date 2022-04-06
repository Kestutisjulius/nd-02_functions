function compare(a, b) {
        if (a > b) {
            return `number: ${a} is a bigger than ${b}`;
        }
        if (a < b) {
            return `number: ${a} is a smaller than ${b}`;
        }
        if (a === b) {
            return `number: ${a} are equal ${b}`;
        }
    return a + b;
}
module.exports.compare = compare;