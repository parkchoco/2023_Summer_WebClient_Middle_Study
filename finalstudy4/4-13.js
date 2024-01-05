let input ='';

for(let i = 0;i<10;i++){
    for(let x=10;x>i+1;x--){
        input +=' ';
    }
    for(let y=0;y<i;y++){
        input +='*';
    }
    input += '\n';
}
console.log(input);