function mul(min, max){
    let output =1;
    for(let i = min;i<max;i++){
        output*=i;
    }
    return output;
}
console.log(mul(1,10));