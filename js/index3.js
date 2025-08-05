var d = document
let num1 = 3;
let num2 = 5;
let result 
// =연산자//
result = (num2 = num1+2);
d.getElementById("result1").innerHTML = `<p>${result}</p>`

// +=연산자//
num1 = 3;
num2 = 5;
result = (num1 += num2);
d.getElementById("result2").innerHTML = `<p>${result}</p>`

//-=연산자//
num1 = 3;
num2 = 5;

result = (num2 -= num1);
d.getElementById("result3").innerHTML = `<p>${result}</p>`

//*=연산자//
num1 = 3;
num2 = 5;

result = (num2 *= num1);
d.getElementById("result4").innerHTML = `<p>${result}</p>`

//(/=연산자)//
num1 = 3;
num2 = 5;

result = (num2 /= num2);
d.getElementById("result5").innerHTML = `<p>${result}</p>`

//%=연산자//
num1 = 3;
num2 = 5;
result = (num2 %= num1);
d.getElementById("result6").innerHTML = `<p>${result}</p>`