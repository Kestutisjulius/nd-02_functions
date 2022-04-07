function numberT(arr) {
    const a = arr.toString();
    if (a.length !== 10) {
        return 'not 10 numbers !!!'
    }
    let string = '';
    let number = '';
    for (var i = 0; i < 3; i++) {
        string += a[i];
    }
    number = '(' + string + ') '
    string = '';
    for (var i = 3; i < 6; i++) {
        string += a[i];
    }
    number += string + '-'
    string = '';
    for (var i = 6; i < 10; i++) {
        string += a[i];
    }
    number += string;

    return number;
}
module.exports.numberT = numberT;