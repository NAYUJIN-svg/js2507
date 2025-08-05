//선언부 memNum= 총 입장객 수  colNum = 한 열에 있는 인원수
let memNum = parseInt(prompt('입장객은 몇 명인가요?'));
let colNum = parseInt(prompt('한 줄에 몇 명씩 앉습니까?'));
//colNum = 6 ; memNum = 49;
if (isNaN(memNum) || isNaN(colNum) ||
    memNum <= 0 || colNum <= 0) {
    alert("사람 수와 한 줄에 앉을 사람 수는 숫자를 입력해주세요.") //예외처리(숫자가 아니거나 0또는 음수면)
}
else {
    if (memNum % colNum === 0) {
        rowNum = memNum / colNum;
    }
    else {
        rowNum = parseInt(memNum / colNum) + 1;
    }
}
//  49/6=8 ---- 1   rowNum= 8+1=9 
// memNum = 49 , colNum = 6 rowNum = 9


document.writeln('<table>');
for (let i = 0; i < rowNum; i++) // 행  0 1 2 3 4 5 6 7 8   // 
{
    document.writeln('<tr>');
    for (let j = 1; j <= colNum; j++) //열  1 2 3 4 5 6 // 
    {
        seatNo = i * colNum + j; //좌석번호 =  i * 6 + j;
        if (seatNo > memNum) break; //좌석번호가 전체 입장객 수보다 크면 종료;
        document.writeln(`<td>좌석 ${seatNo}</td>`); //좌석번호 출력
    }
    document.writeln('</tr>');
    document.writeln('<br>'); //좌석번호가 한줄출력되면 한칸띄어쓰기
}
document.writeln('</table>');
