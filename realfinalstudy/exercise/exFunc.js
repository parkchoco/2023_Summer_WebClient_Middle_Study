function arrSum(score) {
    let input = 0;
    for (let i = 0; i < score.length; i++) {
        input += score[i];
    }
    return input;
}//1번

function arrAvg(score) {
    let input = 0, avg = 0;
    for (let i = 0; i < score.length; i++) {
        input += score[i];
    }
    return avg = input / score.length;
}//2번

function arrGrade(score) {
    for (let i = 0; i < score.length; i++) {
        if (100 >= score[i] && score[i] >= 90)
            console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: A`);
        else if (89 >= score[i] && score[i] >= 80)
            console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: B`);
        else if (79 >= score[i] && score[i] >= 70)
            console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: C`);
        else
            console.log(`${i + 1}번 학생의 점수: ${score[i]}, 성적: F`);

    }
}//3번

function arrMin(score) {
    let min = score[0], x = 0;
    for (let i = 0; i < score.length; i++) {
        if (min >= score[i]) {
            min = score[i];
            x = i;
        }
    }
    return x;
}
function arrGraph(score){
    for(let i =0;i<score.length;i++){
        let output = '';
        for(let x = 0;x<score[i];x++)
        output+='■';
        console.log(`${score[i]}: ${output}`);
    }
}


let score = [85, 75, 99, 90, 100];
console.log("문제1: 배열 원소의 합:" + arrSum(score));
console.log("문제2: 배열 원소의 평균:" + arrAvg(score));
console.log("문제3: 학생들의 성적: "); arrGrade(score);
console.log(`문제4: 꼴등(${score.length}등)은 ${Number(arrMin(score) + 1)}번 학생. ${score[(arrMin(score))]}점 입니다.`);
console.log("문제6: 점수 그래프:"); arrGraph(score);
