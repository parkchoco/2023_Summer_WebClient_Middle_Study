let input = 0;
let array = [1,3,273,57,8,11,32];

while(true){
    if(array[input]%2==0){
        break;
    }
    input++;
}
console.log(`처음 발견한 짝수는 ${array[input]}입니다.`);