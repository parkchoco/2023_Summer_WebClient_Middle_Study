let park = {
    name : '박성영',
    school : 'sku',
    print : function(){
        console.log(`${this.name}의 학교는${this.school}입니다.`);
    }
};

park.print();