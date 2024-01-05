let array = [23,'사과', 536, '바나나', 'park'];

for(let i in array){
    console.log(`${i}번째 ${array[i]}`);
}
for(let i of array){
    console.log(`${i}`);
}