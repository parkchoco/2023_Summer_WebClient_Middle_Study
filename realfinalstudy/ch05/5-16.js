setTimeout(function(){
    console.log("1초가 지남");
}, 1000);

let id = setInterval(function(){
    console.log("1초 경과");
}, 1000);

setTimeout(function(){
    clearInterval(id);
}, 3000)