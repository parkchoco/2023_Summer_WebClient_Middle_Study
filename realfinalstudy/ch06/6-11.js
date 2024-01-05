let fruit = [
    {name:'배', price:'3000'},
    {name:'고구마', price:'700'},
    {name:'감자', price:'600'},
];

function printfruit(pr){
    console.log(`${pr.name}의 가격은 ${pr.price}원 입니다.`);
}

console.log(fruit);

for(let pr of fruit){
    console.log(`반복`+fruit.indexOf(pr));
    printfruit(pr);
}