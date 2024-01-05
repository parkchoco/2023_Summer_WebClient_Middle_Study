let input = '';

for(let i = 0;i<8;i++){
    for(let x=8;x>i+1;x--){
        input += ' ';
    }
    for(let y=1;y<=i*2+1;y++)
    {
        input += '*';
    }
    input += '\n';
}
console.log(input);

let array = [52, 273, 32, 93, 103];

for(let i in array){
    console.log(array[i]);
}