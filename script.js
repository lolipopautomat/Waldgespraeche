const toggleButton = document.getElementsByClassName("toggle")[0];
const navbarLinks = document.getElementsByClassName("Navbar-links")[0];
const Brandname = document.getElementsByClassName("Brandname")[0];
const logo = document.getElementsByClassName("logo_home")[0];
const toggle = document.getElementsByClassName("toggle")[0];

const nav = document.querySelector("nav");
const sectionOne = document.getElementsByClassName("home")[0];

const sectionOneOptions = {
    rootMargin:"-50px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.remove("start");
      //Brandname.classList.remove("start");//
      logo.classList.remove("start");
      toggle.classList.remove("start");
      navbarLinks.classList.remove("start");
    } else {
      nav.classList.add("start");
      logo.classList.add("start");
      //Brandname.classList.add("start");//
      toggle.classList.add("start");
      navbarLinks.classList.add("start");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

let menuOpen = false;

function toggleNavbar(){
    if (window.innerWidth<600){
      toggleButton.classList.toggle("open");
      navbarLinks.classList.toggle("active");
    }
}
toggleButton.addEventListener("click", () => toggleNavbar());
