let score = [85, 75, 99, 90, 100];

for (let i = 0; i < score.length; i++) {
    let a = "";
    for (let x = 0; x < score[i]; x++) {
        a += "■";
    }
    console.log(`${score[i]}점: ${a} `);
}