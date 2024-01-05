function print(name, count){
    if(typeof(count)=='undefined')
    count =1;
    console.log(`${name}는${count}개`);
}
print('사과');