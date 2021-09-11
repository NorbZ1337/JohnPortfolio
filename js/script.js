let burger = document.getElementById("burger")

burger.onclick = function() {
    if([...burger.classList].includes("close")){
        burger.classList.add("header__burger")
        burger.classList.remove("close")
    } else {
       burger.classList.add("close")
       burger.classList.remove("header__burger")
    }
} 

