let i = '';

for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 10 - a; b++) {
        i += ' ';
    }
    for (let b = 0; b < a + 1; b++){
    i += '*';
    }
    i += '\n';
}

console.log(i);