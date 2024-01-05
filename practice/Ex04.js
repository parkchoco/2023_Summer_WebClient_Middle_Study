let score = [85, 75, 99, 90, 100];
let x = score[0];
let y = 0;
for (let i = 0; i < score.length; i++) {
    if (x >= score[i]) {
        x = score[i];
        y = i;
    }
}
console.log(`꼴등(${score.length})은 ${y+1}번 학생. ${score[y]}점입니다.`);