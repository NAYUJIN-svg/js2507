const myP = document.createElement("p")
const mytxt = document.createTextNode("세 번째")
myP.appendChild(mytxt)

let div1 = document.getElementById("div1")
div1.appendChild(myP)
