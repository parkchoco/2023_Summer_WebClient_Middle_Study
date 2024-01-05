function arrSum(score) {
    let sum =0;
    for(let i=0;i<score.length;i++){
        sum += score[i];
    }
    return sum;
} //문제 1번

function arrAvg(score) {
    let avg, sum = 0;
    for(let i=0;i<score.length;i++){
        sum += score[i];
    }
    return avg = sum / score.length;
} //문제 2번

function arrGrade(score) {
    for(let i=0;i<score.length;i++){
        if(100>=score[i]&&score[i]>=90)
        console.log(`${i+1}번 학생의 점수: ${score[i]}, 성적: A`);
        else if(90>score[i]&&score[i]>=80)
        console.log(`${i+1}번 학생의 점수: ${score[i]}, 성적: B`);
        else if(80>score[i]&&score[i]>=70)
        console.log(`${i+1}번 학생의 점수: ${score[i]}, 성적: C`);
        else
        console.log(`${i+1}번 학생의 점수: ${score[i]}, 성적: F`);
    }
} //문제 3번

function arrMin(score) {
    let index =0, min =score[0];

    for(let i=0;i<score.length;i++) {
        if(min>=score[i]){
            min = score[i];
            index = i;
        }
    }
    return index;
} //문제 4번

function arrMax(score) {
    let index = 0, max = score[0];

    for(let i =0;i<score.length;i++) {
        if(max<=score[i]) {
            max = score[i];
            index = i;
        }
    }
return index;
} //문제 5번

function arrGraph(score) {
    for(let i =0;i<score.length;i++){
        let array ="";
        for(let j = 0;j<score[i];j++) {
            array += "■";
        }
        console.log(`${score[i]}점: ${array}`);
    }
} //문제 6번

let score = [85,75,99,90,100];
console.log("문제1: 배열 원소의 합: " + arrSum(score));
console.log("문제2: 배열 원소의 평균:" + arrAvg(score));
console.log("문제3: 학생들의 성적 : "); arrGrade(score);
console.log(`문제4: 꼴등(${score.length}등)은 ${Number(arrMin(score))+1}번 학생. ${score[(arrMin(score))]}점 입니다.`);
let minI=arrMin(score);
console.log(`문제4: 꼴등(${score.length}등)은 ${Number(arrMin(minI))+1}번 학생. ${score[minI]}점 입니다.`);

console.log(`문제5: 1등은 ${Number(arrMax(score))+1}번 학생. ${score[(arrMax(score))]}점 입니다.`);
let maxI = arrMax(score);
console.log(`문제5: 1등은 ${Number(maxI)+1}번 학생. ${score[maxI]}점 입니다.`);
console.log("문제6: 점수 그래프: "); arrGraph(score);