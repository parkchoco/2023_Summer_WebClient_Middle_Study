let score = [85,75,99,90,100];
let sum = 0;
let grade ='';

for(let i = 0;i<score.length;i++){
    if(100>=score[i]&&score[i]>=90){
        grade = 'A';
    }
    else if(90>score[i]&&score[i]>=80){
        grade = 'B';
    }
    else if(80>score[i]&&score[i]>=70){
        grade = 'C';
    }
    else
    grade = 'F'
    console.log(`${i+1}번 학생의 점수: ${score[i]}, 성적: ${grade}`);
}