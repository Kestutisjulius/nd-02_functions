const leap = function (yers){  
    let range = true;
    if (!(9999 < yers) && (yers >= 1)) {

        if (yers % 4 != 0) {

            range = false;

        } else 
        if (yers % 100 === 0 && yers % 400 !== 0) {

            range = false;
        }
        
    } else return false;
    return range;
}
module.exports.leap = leap;