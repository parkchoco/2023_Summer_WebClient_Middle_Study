function plus(min, max){
    let output = 0;
    for(let i =min;i<=max;i++){
        output += i;
    }
    return output;
}
console.log(plus(1,100));