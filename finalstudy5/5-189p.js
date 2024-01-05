function multiply(){
    let output = 1;
    for(let i of arguments){
        output *= i;
    }
    return output;
}

console.log(multiply(1,2,3));
console.log(multiply(3,7,5,6,2,8,4));