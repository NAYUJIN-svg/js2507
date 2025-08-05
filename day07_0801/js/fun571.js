function multiple(a, b = 5, c = 10) {
    return a * b + c;
} //b=5, c=10 으로 기본값 지정

console.log(multiple(5, 10, 20)) ; //a=5,b=10,c=20
console.log(multiple(10,20)) ; //a=10, b=20 ,c=10(기본값)
console.log(multiple(30)); //a=30, b=5(기본값),

