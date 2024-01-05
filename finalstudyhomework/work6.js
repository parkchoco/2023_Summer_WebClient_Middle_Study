let score = [85, 75, 99, 90, 100];

for (let x = 0; x < score.length; x++) {
    let input='';
    for (let i = 0; i < score[x]; i++)
    {
        input +='■';
    }
    console.log(`${score[x]}점: ${input}`);
}