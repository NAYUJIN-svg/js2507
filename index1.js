var d = document //변수선언 바깥에서도 쓸 수있는 변수
let num1 = 5; //변수선언 변할수 있는 수
let num2 = 3; //변수선언 변할수 있는 수
const num3 = 8; // 상수선언 변하지않는 수 

console.log(typeof 42); //number
console.log(typeof null); // object
console.log(typeof true); // boolean
console.log(typeof "hello"); //string

//typeof는 데이터의 타입(자료형을) 확인할 때 사용하는 연산자

let birthYear = 2000;
let bigIntNumber = 12345678901234567890..n
let greeting = "Hello!";
let birtyYear = "2000";
let isEmpty = true;
let seasons = ['봄', '여름', '가을', '겨울'];
let date = new Date();

console.log('I\'m studing Javascript')
// \'는 작은따옴표 문자 //
let path = "C:\\Users\\User\\Documents\\file.txt";
console.log(path);
// 백슬래시 \ //
let quote = 'She said, "Hello\nWorld"';
console.log(quote);
// She said, "Hello
// World!"///

let smile = "\u{1F600}";
console.log(smile);
// 웃음표시 스티커//

// \141 은 8진수 141 = 1*8제곱 + 4*8 + 1*1 = 97 (ASCII 'a')
console.log('\141');
// \101 은 8진수 101 = 65 (ASCII 'A')
console.log('\101'); //출력:A
// \012 은 8진수 012 = 10 (newline)
console.log('Line\012Line2');
//출력:
//Line1
//Line2

// \x61 은 16진수 61 = 6*16 + 1 = 97 (ASCII 'a')
console.log('\x61'); //출력:a
// \x41 은 16진수 41 = 4*16 + 1 = 65 (ASCII 'A')
console.log('\x41'); //출력:A
//\x0A 는 16진수 0A = 10 (newline)
console.log('Line1\x0ALine2');
//출력:
//Line1
//Line2
console.log(0o12); //8진수 12s = 10
console.log(0xA); /// 16진수 A = 10
// 8진수는 0-7 (3비트) , 16진수는 0-9,A-F (4비트)
