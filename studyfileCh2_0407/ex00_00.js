let output = '';

for(let a = 0;a<10;a++){
    for(let b=0;b<=a;b++)
    {
        output +=' ';
    }
    for(let b=0;b<10;b++)
    {
        output +='*';
    }
    output +='\n';
}

console.log(output);