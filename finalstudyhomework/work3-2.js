let score = [85, 75, 99, 90, 100];


for (let i = 0; i < score.length; i++) {
    switch (Math.floor(score[i] / 10)) {
        case 10: case 9:
            console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: A`);
            break;
        case 8:
            console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: B`);
            break;
        case 7:
            console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: C`);
            break;
        default:
            console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: F`);
            break;
    }
}