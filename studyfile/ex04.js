let score = [85,75,99,90,100];
let min=score[0];
let y=0;

for(let i = 1;i<score.length;i++)
{
    if(score[i]<=min){
    min=score[i];
    y=i+1;
    }
}
console.log(`꼴등(5등)은 ${y}번 학생, ${min}점 입니다.`);