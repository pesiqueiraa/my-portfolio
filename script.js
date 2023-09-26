const header = document.querySelector('header');

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 12)
})

let menu = document.querySelector("#menu-icon")
let navList = document.querySelector(".nav-list")

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navList.classList.remove('active');
}

const circles = document.querySelectorAll('.circle');
circles.forEach(elem =>{
    var dots = elem.getAttribute('data-dots');
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
       points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
        
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }

})


const iam = document.querySelector(".iam h1")

function changeText() {

    if(changeText === true){
        iam.innerHTML = "I'm"
    } else {
        iam.innerHTML = "Eu sou"
    }

    
}
    
    
    
