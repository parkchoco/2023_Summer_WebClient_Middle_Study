function power(A, B = 2) {

    let output = 1;

    for (let i = 0; i < B; i++) {
        output *= A;
    }

    return output;
}
function multiply() {

    let output = 1;

    for (let i = 0; i < arguments.length; i++) {
        output *= arguments[i];
    }
    return output;
}
console.log(power(2));
console.log(power(2, 3));

console.log(multiply(1, 2, 3));
console.log(multiply(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));