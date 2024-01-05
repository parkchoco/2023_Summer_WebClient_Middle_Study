function multiply(){
    let input = 1;
    for(let i of arguments)
    {
        input *=i;
    }
    return input;
}
console.log(multiply(1,2,3));