let score = [85,75,99,90,100];
let max = score[0];
let n =0;
for(let i = 0;i<score.length;i++){
    if(score[i]>=max)
    {
        max=score[i];
        n=i+1;
    }
}
console.log(`1등은 ${n}번 학생. ${max}입니다.`);