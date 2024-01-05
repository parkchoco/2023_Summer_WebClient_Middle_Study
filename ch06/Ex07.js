class product2 {
    constructor(name, unit, weight, price){
        this.name = name;
        this.unit = unit;
        this.weight = weight;
        this.price = price;
    }

    calculate(weight){
        let nPrice = this.price / this.weight;
        let total = nPrice * weight;
        console.log(`${this.name}의 ${weight+this.unit}가격은 ${total.toFixed(1)}원 입니다.`);
    }
}

//객체 생성
pork = new product2('돼지삼겹살', 'g', 100, 500);
banana = new product2('바나나', '개', 1, 600);
sweetpotato = new product2('고구마', 'kg', 5, 10500);

pork.calculate(850);
banana.calculate(5);
sweetpotato.calculate(10);