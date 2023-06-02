const menuBtn = document.querySelector(".fa-bars")
const overlay = document.querySelector(".overlay")
const navMenu = document.querySelector(".nav-links-container")
const portfolio = document.querySelector(".portfolio")
const dot = document.querySelector(".dot-effect")
const home = document.querySelector(".home")
const navMenua = document.querySelectorAll(".link-m")


window.addEventListener("click", (e)=>{
    console.log(e.target);
    if (e.target === menuBtn) {
        overlay.style.display = "block"
        navMenu.style.left = "0%"
    }
    if (e.target === overlay) {
        overlay.style.display = "none"
        navMenu.style.left = "-105%"
    }

    for (let i = 0; i < navMenua.length; i++) {
        if (e.target === navMenua[i]) {
            overlay.style.display = "none"
            navMenu.style.left = "-105%"
        }
    }
    
})

home.addEventListener("click", ()=>{
    dot.style.left = "25%"
})
portfolio.addEventListener("click", ()=>{
    dot.style.left = "67%"
})


window.addEventListener('scroll', function () {
    var aboutus = document.getElementById('about');
    var aboutus_top = aboutus.getBoundingClientRect().top;
    var aboutus_bottom = aboutus.getBoundingClientRect().bottom;

    var products = document.getElementById('portfolio');
    var products_top = products.getBoundingClientRect().top;
    var products_bottom = products.getBoundingClientRect().bottom;


    if (aboutus_top + 300 < window.innerHeight) {
        dot.style.left = "25%";
    }
    if (products_top + 300 < window.innerHeight) {
        dot.style.left = "67%";
    }


});


function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);