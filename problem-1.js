// without passing arguement to the parameter
function namta() {
    for (var i = 1; i <= 10; i++) {
        var multiplication = 13 * i;
        console.log(13, '*', i, '=', multiplication)
    }
}

namta();

// eita wrong
// function namta(num) {
//     for (var i = 1; i <= 10; i++) {
//         var multiplication = num * i;
//         return multiplication;
//         console.log(value, '*', i, '=', answer);
       
//     }
// }
// var value = 17;
// var answer = namta(value);

// By passing arguement in the parameter
// function namta(num) {
//     for (var i = 1; i <= 10; i++) {
//         var multiplication = num * i;
//         console.log(num, '*', i, '=', multiplication);
//     }
// }
// namta(17);
