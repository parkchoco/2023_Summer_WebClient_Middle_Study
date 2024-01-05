let input = '';

for(let i = 0;i<8;i++){
    for(let x = 8;x>i+1;x--)
    {
        input +=' ';
    }
    for(let x = 0;x<i+i+1;x++){
        input+='*';
    }
    input += '\n';

}
console.log(input);