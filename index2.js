//선언부
var d = document
let num1 = 3;
let num2 = 5;
let result
//덧셈
result = num1 + num2 //구현부
d.getElementById("result1").innerHTML = `<b>${result}</b>` //출력부
//뺄셈
result = num2 - num1 //구현부
d.getElementById("result2").innerHTML = `<b>${result}</b>` //출력부
//곱셈
result = num1 * num2 //구현부
d.getElementById("result3").innerHTML = `<b>${result}</b>` //출력부
//나눗셈
result = (num2 / num1).toFixed(2) //구현부
d.getElementById("result4").innerHTML = `<b>나눗셈: ${result}</b>` //출력부
//나머지
result = num2 % num1 //구현부
d.getElementById("result5").innerHTML = `<b>나머지: ${result}</b>` //출력부

//선언부
let num01 = 10; let num02 = 10; let num03 = 10; let num04 = 10

// ++선행(num01)
result = ++num01 //구현부
d.getElementById("result6").innerHTML = `<b>결과는 ${result}</b>,변수는 <i> ${num01}</i>` //출력부
// --선행(num02)
result = --num02 //구현부
d.getElementById("result7").innerHTML = `<b>결과는 ${result}</b>, 변수는 <i>${num02}</i>` //출력부
// 후행++(num03)
result = num03++ //구현부
d.getElementById("result8").innerHTML = `<b>결과는 ${result}</b>, 변수는 <i>${num03}</i>` //출력부
// 후행--(num04)
result = num04-- //구현부
d.getElementById("result9").innerHTML = `<b>결과는 ${result}</b>, 변수는 <i>${num04}</i>` //출력부
