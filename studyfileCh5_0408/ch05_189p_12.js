function power(Num1, Num2 = 2) {
    let output = 1;
    for (let i = 0; i < Num2; i++) {
        output *= Num1;
    }
    return output;
}
console.log(power(3));

function multiply() {
    let output = 1;
    for (let item of arguments) {
        output *= item;
    }
    return output;
}

console.log(multiply(1, 2, 3));
console.log(multiply(1, 2, 3, 4, 5));