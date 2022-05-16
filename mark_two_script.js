const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {hamburger.classList.
remove("active");navMenu.classList.remove("active");
}))
// https://www.youtube.com/watch?v=flItyHiDm7E&ab_channel=codefoxx
function myFunction() {
    document.body.style.backgroundImage = "url('20220516_144204.jpg')";
  }