let product = {
    이름 : 'Nature of Code',
    가격 : '30000',
    저자 : '다니엘 쉬프만',
    ISBN : '97889839283',
   
}
for(let i in product){
console.log(`${i}:${product[i]}`);
}