let array = [1,31,273,57,8,11,32];
let i = 0;

while(true){
    if(array[i]%2==0)
    {
        console.log(`처음 발견한 짝수는 ${array[i]}입니다.`);
        break;
    }
    i++;
}