let input = '';

for(let i = 0;i<10;i++){
    for(let x = 10;x>=i;x--)
    {
        input +=' ';
    }
    for(let x = 0;x<=i;x++){
        input += '*';
    }
    input +='\n';
}
console.log(input);