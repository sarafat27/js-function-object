var computer = {
    price: 42000,
    storage: '1tb',
    processor: 'intel core i3'
};
// console.log(computer);
// if we want to see only one property:
// console.log(computer.processor);
// if we want to keep a property in a variable
var computerPrice = computer.price;
// console.log(computerPrice);
// set a object property value
computer.storage = '1.2tb';
console.log(computer);

// different way of setting an object property value
computer["price"] = 30000;
// console.log(computer);

// 3rd way of setting an object property value
var priceProperty = "price";
computer[priceProperty] = 20000;

var storageProperty = 'storage';
computer[storageProperty] = '2tb'
// console.log(computer);
// console.log(computer['processor']);