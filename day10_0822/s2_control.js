let r3 = document.querySelector("#result3")
let flag = true
let r3_2 = document.querySelector("#result3_2")
// let walkAmount = prompt("당신의 하루 걷는 양은 몇 보인가요", "0")
// // let walkAmount = propmt

let walkAmount = 10000

if (walkAmount >= 10000) {
    // 사용자의 긍정적인 응답만 반응
    flag = true
    r3.innerHTML = " 매우 좋은 습관이네요~ " + "<hr>"
} else {
    //사용자의 모든* 부정 답변 반응
    flag = false
    r3.innerHTML = `걷는 습관은 건강에 좋아요. 추천! + <hr>`
}
// //추천
// walkAmount >= 10000 ? flag = true : flag = false
// // 비추
// walkAmount >= 10000 ? r3.innerHTML = `매우 좋은 습관이네요~ <hr> ` : r3.innerHTML = `걷는 습관은 건강에 좋아요. 만보걷기 추천!~ <hr>`;

//-------------------------------------------------
let walkAmount2 = 8000
// *** if~elseif문은 위에서부터 순차적으로 내려오면서, 모두 비교한다. 
if (walkAmount2 >= 10000) {
    // 사용자의 긍정1 응답에 반응
    r3_2.innerHTML = "하루에 만보이상 걸으시는군요~ 훌륭합니다"
} else if (walkAmount2 >= 8000 && walkAmount2 < 10000) {
    // 사용자의 긍정2 응답에 반응
    r3_2.innerHTML = "8000이상인 당신, 하루 만보 걷기 습관을 추천!~"
} else if (walkAmount2 >= 3000 && walkAmount2 < 8000) {
    // 사용자의 긍정3 응답에 반응
    r3_2.innerHTML = "3000이상인 당신, 하루 만보 걷기 습관을 추천!~"
} else if (walkAmount2 >= 1000 && walkAmount2 < 3000) {
    // 사용자의 긍정4 응답에 반응
    r3_2.innerHTML = "1000이상인 당신, 하루 만보 걷기 습관을 추천!~"
} else {
    // 사용자의 나머지 부정 답변 반응
    r3_2.innerHTML = "ㅜ.ㅜ 건강이 걱정됩니다. 산책 추천~!"
}

r3_2.innerHTML += `<hr>`
// -----------------------------------------------------------------------------------------
// *** switch문은 조건에 맞는 case로 바로 분기한다.
let r3_3 = document.querySelector("#result3_3")
r3_3.innerHTML = "test"
let site = "네이버"

// switch (site) {
//     case "구글":
//         url = "www.google.com"
//         r3_3.innerHTML = url
//         break;
//     case "다음":
//         url = "www.daum.net"
//         r3_3.innerHTML = url
//         break;
//     case "네이버":
//         url = "www.naver.com"
//         r3_3.innerHTML = url
//         break;
//     case "네이트":
//         url = "www.nate.com"
//         r3_3.innerHTML = url
//         break;
//     default:
//         // alert("보기 중에 없는 사이트입니다.")
//         r3_3.innerHTML = url
//         break;

// }
// // if (url) location.href = "http://" + url;

let r3_4 = document.querySelector("#result3_4")
r3_4.innerHTML = "test"

let i = 1
let sum = 0
while (i <= 10) {
   
    sum += i
    console.log("sum ==>> ", sum)
    
    // 종료환경 *필수*


    i++
     console.log(i)
}
r3_4.innerHTML = `i변수값은  ${i}<br>`
r3_4.innerHTML += `sum합계값은 ${sum}`













