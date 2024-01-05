let score = [85, 75, 99, 90, 100];


for (let i = 0; i < score.length; i++) {
    if (100 >= score[i] && score[i] >= 90) {
        console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: A`);
    }
    else if (90 > score[i] && score[i] >= 80) {
        console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: B`);
    } else if (80 > score[i] && score[i] >= 70) {
        ;
        console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: C`);
    }
    else {
        console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: F`);
    }
}