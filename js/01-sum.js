function sum(a, b) {
    if (typeof a !== 'number' && typeof a !== 'number'
        || a.toString() === 'NaN' || b.toString() === 'NaN'
        || isNaN(a) || isNaN(b)
        || !isFinite(a) || !isFinite(b)) {
            return 'WRONG input';
        }
    return a + b;
}
module.exports.sum = sum;