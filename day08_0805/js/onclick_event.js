document.getElementById("myBtn").onclick = displayDate; //속성값을 전달하므로 ()생략

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}