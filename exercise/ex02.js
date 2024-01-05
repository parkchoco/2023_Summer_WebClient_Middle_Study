let score = [85,75,99,90,100];
let sum = 0;
let av =0;
for(let i =0;i<score.length;i++){
    sum +=score[i];
}
av = sum/score.length;
console.log(av);