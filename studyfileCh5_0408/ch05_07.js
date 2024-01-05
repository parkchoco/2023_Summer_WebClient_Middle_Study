function mul(min, max) {
    let output = 0;
    for (let i = min; i <= max; i++) {
        output += i;
    }
    return output;
}
console.log(mul(1, 100));