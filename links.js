// Responsive Navbar

function hamburger() {
  var x = document.getElementById("topNav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

//GSAP Scripts

gsap.from(".firstfloat", { duration: 2, y: -100 });

// Links with GSAP Animations
function toProjects() {
  var element = document.getElementsByClassName("secondtitle");
  element[0].scrollIntoView({ behavior: "smooth" });
  gsap.from(".secondfloat", { duration: 2, y: -100 });
}
function toCertificates() {
  var element = document.getElementsByClassName("thirdtitle");
  element[0].scrollIntoView({ behavior: "smooth" });
  gsap.from(".container", { duration: 2, x: -100 });
}

function toLinkedin() {
    window.open("https://www.linkedin.com/in/mindaugas-jurgelevi%C4%8Dius-39017412a/", "_blank");
}

function toAbout() {
  var element = document.getElementsByClassName("firstfloat");
  element[0].scrollIntoView({ behavior: "smooth" });
  gsap.from(".firstfloat", { duration: 2, y: -100 });
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementsByClassName("navbar");
var responsive = document.getElementsByClassName("navbar responsive")

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.add("navbar")
    responsive.add("navbar")
  }
}
