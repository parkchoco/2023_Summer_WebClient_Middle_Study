class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    print(){
        console.log(`${this.name}의 가격은 ${this.price}입니다.`);
    }
}

let products = [
    new Product('바나나', 1200),
    new Product('사과', 2000)
];

console.log(products);

for(let product of products){
    console.log('반복' + products.indexOf(product));
    product.print();
}