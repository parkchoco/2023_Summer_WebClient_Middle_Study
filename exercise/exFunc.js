let score = [85, 75, 99, 90, 100];

function arrSum(score) {
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        sum += score[i];
    }
    return sum;
}
console.log("문제1: 배열 원소의 합: " + arrSum(score));

function arrAvg(score) {
    let sum = 0;
    for (let i = 0; i < score.length; i++) {
        sum += score[i];
    }
    return sum / score.length;
}
console.log("문제2: 배열 원소의 평균: " + arrAvg(score));

function arrGrade(score) {
    for (let i = 0; i < score.length; i++) {
        if (100 >= score[i] && score[i] >= 90)
            console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: A`);
        else if (score[i] >= 80)
            console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: B`);
        else if (score[i] >= 70)
            console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: C`);
        else
            console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: F`);
    }
}
console.log("문제3: 학생들의 성적 :");arrGrade(score);

function arrMin(score){
    let min = score[0]
    let x=0;
    for(let i =0;i<score.length;i++){
        if(min>=score[i])
        min = score[i];
        x=i;
    }
    return x;
}

console.log(`문제4: 꼴등(${score.length}등)은 ${Number(arrMin(score))+1}번 학생. ${score[(arrMin(score))]}점 입니다.`);
let minI = arrMin(score);