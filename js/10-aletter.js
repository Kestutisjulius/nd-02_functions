function aTxt(a) {
    let aCount = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 'a') {
            aCount++;
        }
    }
    return 'raidziu "a" tekste yra: ' + aCount;
}
module.exports.aTxt = aTxt;