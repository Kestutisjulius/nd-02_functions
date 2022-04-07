/* 1.*/
function sum(a, b) {
    if (typeof a !== 'number' && typeof a !== 'number'
        || a.toString() === 'NaN' || b.toString() === 'NaN'
        || isNaN(a) || isNaN(b)
        || !isFinite(a) || !isFinite(b)) {
            return 'WRONG input';
        }
    return a + b;
}
    console.log(sum(2, 3));

/*2.*/
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
console.log(compare(12.9, 3.2));

/*3.*/
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
console.log(leap(2024));

/*4.*/
function square(a) {
return a * a;
}
console.log(square(4));

/*5.*/
function to(a) {
    let sum = 0;
    if ( a < 1 ){
        console.log('turi būti didesnis už vienetą');
    }
        for (let i = 0; i <= a; i++) {
            sum += i;
        }
    return sum;
}
console.log(to(2));

/*6.*/
function dvd(a) {
    let numCount = 0;
    for (let i = 2; i < a; i++) {
        if (!(a % i)) {
        numCount++;
        }
    }
    return `${numCount} sveikas/-i skaicius/-iai dalijasi be liekanos, neitraukiant 1 ir ${a}`;
}
console.log(dvd(4));

/*7.*/
function txtLength(a) {
    const string = '' + a;
    return `teksto: ${string} - simboliu kiekis : ${string.length}`;
}
console.log(txtLength('nebepasikiskiakopusteliaudamas'));

/*8.*/
function numberT(arr) {
    const a = arr.toString();
    if (a.length !== 10) {
        return 'not 10 numbers !!!'
    }
    let string = '';
    let number = '';
    for (let i = 0; i < 3; i++) {
        string += a[i];
    }
    number = '(' + string + ') '
    string = '';
    for (let i = 3; i < 6; i++) {
        string += a[i];
    }
    number += string + '-'
    string = '';
    for (let i = 6; i < 10; i++) {
        string += a[i];
    }
    number += string;

    return number;
}
console.log(numberT([7061377180]));

/*9.*/
function abLength(a, b) {
    if(a.length > b.length) {
        return 'ilgesnis PIRMASIS tekstas.';
    }
    if(a.length < b.length) {
        return 'ilgesnis ANTRASIS tekstas.';
    }
    if(a.length === b.length) {
        return 'tekstu ilgiai VIENODI';
    }
}
console.log(abLength('firstTXT', 'secondTXT'));

/*10.*/
function aTxt(a) {
    let aCount = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 'a') {
            aCount++;
        }
    }
    return 'raidziu "a" tekste yra: ' + aCount;
}
console.log(aTxt('nebepasikiskiakopusteliaudamas'));