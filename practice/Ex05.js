let score = [85, 75, 99, 90, 100];
let index = 0, max = score[0];
for (let i = 0; i < score.length; i++) {
    if (max <= score[i]) {
        max = score[i];
        index = i;
    }
}
console.log(`1등은 ${index + 1}번 학생. ${score[index]}점 입니다.`);