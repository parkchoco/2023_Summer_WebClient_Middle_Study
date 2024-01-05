class StdObj {
    constructor(name, birth) {
        this.name = name;
        this.birth = birth;
    }
    print(birth) {
        let year = new Date().getFullYear();
        let month = new Date().getMonth()
        let day = new Date().getDay();
        let str =String(birth);
        let star = '';
        switch (year % 20) {
            case 1:
                age = 21;
                break;
            case 2:
                age = 22;
                break;
            case 3:
                age = 23;
                break;
        }
        if((month+1)==1){
            if(day>=20)
            star = '물병자리';
            else
            star = '염소자리';
        }
        else if((month+1)==2)
        {
            if(day<=18)
            star = '물병자리'
            else
            star = '물고기자리'
        }else if((month+1)==3)
        {
            if(day<=20)
            star = '물고기자리'
            else
            star = '양자리'
        }
        else if((month+1)==4)
        {
            if(day<=19)
            star = '양자리'
            else
            star = '황소자리'
        }
        else if((month+1)==5)
        {
            if(day<=20)
            star = '황소자리'
            else
            star = '쌍둥이자리'
        }
        else if((month+1)==6)
        {
            if(day<=21)
            star = '쌍둥이자리'
            else
            star = '게자리'
        }
        else if((month+1)==7)
        {
            if(day<=22)
            star = '게자리'
            else
            star = '사자자리'
        }
        else if((month+1)==8)
        {
            if(day<=22)
            star = '사자자리'
            else
            star = '처녀자리'
        }
        else if((month+1)==9)
        {
            if(day<=23)
            star = '처녀자리'
            else
            star = '천칭자리'
        }
        else if((month+1)==10)
        {
            if(day<=23)
            star = '천칭자리'
            else
            star = '전갈자리'
        }
        else if((month+1)==11)
        {
            if(day<=22)
            star = '전갈자리'
            else
            star = '사수자리'
        }
        else if((month+1)==12)
        {
            if(day<=24)
            star = '사수자리'
            else
            star = '염소자리'
        }
        
        console.log(`이름${this.name}, 생년월일:${str.slice(this.birth)}, 나이:${this.year}, 별자리:${this.star}`);
    }
}
let str =String(birth);
//객체 생성
gil = new StdObj("홍길동", "2000.04.19");
sku = new StdObj("이서경", "1999.09.28");
sw = new StdObj("고소웨", "2001.04.20");
cho = new StdObj("박찬호", "2000.05.05");
yha = new StdObj("김연아");

