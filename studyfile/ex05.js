let score = [85,75,99,90,100];
let max = score[0];
let x;

for(let i = 0;i<score.length;i++){
    if(max<=score[i]){
        max = score[i];
        x=i+1;
    }
}
console.log(`1등은 ${x}번 학생. ${max}점 입니다.`);