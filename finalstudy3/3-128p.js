let x = 15;
if (20 > x && x > 10)
    console.log("조건에 맞습니다.");

let level = 1;

switch (level) {
    case 1:
        console.log("수강해야 하는 전공 학점: 12학점");
        break;
    case 2: case 4:
        console.log("수강해야 하는 전공 학점: 18학점");
        break;
    case 3:
        console.log("수강해야하는 전공 학점: 10학점");
        break;
}