let score = [85,75,99,90,100];
let min = score[0];
let n =0;
for(let i = 0;i<score.length;i++){
    if(score[i]<=min)
    {
        min=score[i];
        n=i+1;
    }
}
console.log(`꼴등(5등)은 ${n}번 학생. ${min}입니다.`);