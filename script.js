const navmenu = document.querySelector(".nav-menu")
const hambuger = document.querySelector(".hamburger")


hambuger.addEventListener("click",() => {
    navmenu.classList.remove("hidden")
})
// const navlink = document.querySelectorAll(".nav-link")

// navlink.forEach(n=>n.addEventListener("click",closeMenu))
// function closeMenu(){
//     navlink =classList
// }
// navlink.forEach(n=>n.addEventListener("click",closenavMenu))
// function closenavMenu(){
//     hambuger.addEventListener("click",() =>{
//         navmenu.style.disply="none"
//     })
// }