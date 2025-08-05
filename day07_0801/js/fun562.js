var x = 10; //전역 변수 선언

function displayNumber() {
    console.log(`x is ${x}`);
    console.log(`y is ${y}`);
    var y = 20; //지역 변수 선언 및 값 할당
}

displayNumber();