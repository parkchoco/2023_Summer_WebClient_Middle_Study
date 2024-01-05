let score = [85, 75, 99, 90, 100];
let max, x;
max = score[0];

for (let i = 0; i < score.length; i++) {
    if (max <= score[i]) {
        max = score[i];
        x = i;
    }

}
console.log(`일등(1등)은 ${x + 1}번 학생. ${score[x]}점 입니다.`);