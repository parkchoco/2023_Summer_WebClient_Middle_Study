let output = '';

for(let i = 0;i<10;i++){
    for(let x = 10;x>i;x--){
        output +=' ';
    }
    for(let y=0;y<=i;y++){
        output +='*';
    }
    output+='\n';
}
console.log(output);