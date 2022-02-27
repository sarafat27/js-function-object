function bringSingara(taka) {
    console.log('singara er jonno dise', taka);
    console.log('mama singara den');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}

// bringSingara(100); or,variable diye o kora jai.....
var money = 200;
var singara = bringSingara(money);
console.log('ai nen singara', singara);