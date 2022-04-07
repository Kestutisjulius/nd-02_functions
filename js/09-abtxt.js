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
module.exports.abTxt = abLength;