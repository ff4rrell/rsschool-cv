const spanOne = document.getElementById("span-one");
const spanTwo = document.getElementById("span-two");
const spanThree = document.getElementById("span-three");
const nav = document.getElementById("nav");
const burgerBtn = document.getElementById("burger-btn");
const navLink = document.querySelector(".nav__link");

burgerBtn.addEventListener("click", function(){
    if(!nav.classList.contains("active")){
        spanOne.style.transform = "translateY(0) rotate(-45deg)";
        spanTwo.style.opacity = "0";
        spanThree.style.transform = "translateY(0) rotate(45deg)";
        nav.classList.add("active");
    }else{
        nav.classList.remove("active");
        spanOne.style.transform = "";
        spanTwo.style.opacity = "";
        spanThree.style.transform = "";
    }
})


function scrollMenu(){
    nav.classList.remove("active");
    spanOne.style.transform = "";
    spanTwo.style.opacity = "";
    spanThree.style.transform = "";
}

navLink.addEventListener("click", function(){
    nav.classList.remove("active");
    spanOne.style.transform = "";
    spanTwo.style.opacity = "";
    spanThree.style.transform = "";
})
