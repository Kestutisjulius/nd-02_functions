function dvd(a) {
    let numCount = 0;
    for (let i = 2; i < a; i++) {
        if (!(a % i)) {
        numCount++;
        }
    }
    return `${numCount} sveikas/-i skaicius/-iai dalijasi be liekanos, neitraukiant 1 ir ${a}`;
}
module.exports.divide = dvd;