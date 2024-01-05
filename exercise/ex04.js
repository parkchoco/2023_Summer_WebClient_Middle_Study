let score = [85, 75, 99, 90, 100];
let min, x;
min = score[0];

for (let i = 0; i < score.length; i++) {
    if (min >= score[i]) {
        min = score[i];
        x = i;
    }

}
console.log(`꼴등(5등)은 ${x + 1}번 학생. ${score[x]}점 입니다.`);