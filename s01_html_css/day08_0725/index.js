// 선언부
var r = document.getElementById("result");
let num1 = 10;
let num2 = 3;
let result = 0;

//덧셈 ------------------------
//구현부
result = num1 + num2;
//출력부
console.log(`${result}`);
r.innerHTML = `<h1>[더하기 + ]${result}</h1>` ;

//초기화
result = 0;
//뺄셈 -------------------------
result = num1 - num2;
console.log(`${result}`)
r.innerHTML =  r.innerHTML + `<h1>[빼기-] ${result}</h1>`;
// r.innerHTML = r.innerHTML + `<h1>[빼기-] ${result}</h1>`;

//초기화
result = 0;
//곱셉 -----------------------
result = num1 * num2
console.log(`${result}`)
r.innerHTML = r.innerHTML +`<h1>[곱셈*] ${result}</h1>`;

// 초기화
result = 0;
// 나눗셈 -------나누어 떨어지는 몫-----------------
result = num1 / num2
console.log(`${result}`)
console.log(`${result.toFixed(3)}`)
r.innerHTML = r.innerHTML + `<h1>[나눗셈/ ] ${result}</h1>`;
r.innerHTML = r.innerHTML + `<h1>[나눗셈.toFixed(3)/] ${result.toFixed(3)}</h1>`;

