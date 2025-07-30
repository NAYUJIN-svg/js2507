//선언부
let name = "Kim"; 
let age = 25;

//구현부
greeting = "안녕하세요!";
nameInfo = `이름 : ${name}`;
ageInfo = `나이 : ${age}`;
userObj = {name, age};

//출력부
// 실제로 콘솔에 값을 찍는다//
console.log(greeting); //"안녕하세요"
console.log(nameInfo); // "이름:Kim"
console.log(ageInfo); //"나이:25살"
console.log(userObj); //{ name: "Kim" , age : 25}
