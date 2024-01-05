let score = [85,75,99,90,100];

for(let i =0;i<score.length;i++){
    let output ='';
    for(let x=0;x<score[i];x++){
        output += '■';
    }
    console.log(`${score[i]}점:${output}`);
}