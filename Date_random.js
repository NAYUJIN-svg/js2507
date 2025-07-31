const now = new Date();
const randomHour = Math.floor(Math.random() * 24); //0~23
const randomMinute = Math.floor(Math.random() * 60); //0~59
const randomSecond = Math.floor(Math.random() * 60); //0~59

const randomTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    randomHour,
    randomMinute,
    randomSecond
);


document.getElementById("randomtime").innerHTML =`오늘의 무작위 시각:  ${randomTime.toLocaleString()}`;