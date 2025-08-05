function factorial(n) {
     if (n <=1) return 1;      //종료 조건
     return n * factorial(n -1); //재귀 호출 + 결과 반환
}
console.log(factorial(5));  //120

//