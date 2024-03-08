var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = 0
btn.addEventListener("click", function () {
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow"
        console.log("Cliocked")
        flag = 1
    }else{
        bulb.style.backgroundColor = "white"
        console.log("Click again")  
        flag = 0
      }

})