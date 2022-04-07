function square(a) {
    if (typeof a !== 'number' || a.toString() === 'NaN'
            || isNaN(a)
            || !isFinite(a) ){
        console.log('Pateikta netinkamo tipo reikšmė');
    }
return a * a;
}
module.exports.square = square;