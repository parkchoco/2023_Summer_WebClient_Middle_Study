function avgScore(){
    let input = 0;
    for(let i =0;i< score.length;i++){
        input +=Number[score[i]];
    }
    return input/score.length;
    
}

console.log(avgScore("9,7,8,5,8,10"));