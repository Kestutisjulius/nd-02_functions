function to(a) {
    if (typeof a !== 'number' || a.toString() === 'NaN'
            || isNaN(a)
            || !isFinite(a)
            || a < 1 ){
        console.log('Pateikta netinkamo tipo reikšmė');
    }
    let sum = 0;
        for (var i = 0; i <= a; i++) {
            sum += i;
        }
    return sum;
}
module.exports.to = to;