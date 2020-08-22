// Overlay hamburger menu transitions 
function openNav() {
    document.getElementById("mobile-nav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mobile-nav").style.width = "0%";
  }

// Trigger hamburger state and mobile nav transitions
// Lock body scroll when hamburger menu is up.
var body = document.querySelector("body");
var hamburger = document.querySelector(".hamburger");
var navWidth = 0; 
hamburger.addEventListener("click", hamburgerStates);

  function hamburgerStates(){
    hamburger.classList.toggle("is-active");
      if (navWidth !== 100){ 
      openNav();
      body.style.position = "fixed";
      navWidth = 100;
      } else {
          closeNav();
          body.style.position = "static";
          navWidth = 0;
      }}


/* Main content image transitions */
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var image = document.getElementById("container1-image");
var link = document.getElementById("link");

    function test1(){
        console.log("Test1 working");
        link1.style.opacity = "1";
        link2.style.opacity = ".4";
        link3.style.opacity = ".4";
        image.src="images/hotclub.jpg";
        link.href="";
    }

    function test2(){
        console.log("Test2 working");
        link1.style.opacity = ".4";
        link2.style.opacity = "1";
        link3.style.opacity = ".4";
        image.src="images/test_image.png";
    }

    function test3(){
        console.log("Test3 working");
        link1.style.opacity = ".4";
        link2.style.opacity = ".4";
        link3.style.opacity = "1";
    }


        function linksDefaultState(){
        console.log("Link default state loaded");
        link1.style.opacity = "1";
        link2.style.opacity = ".4";
        link3.style.opacity = ".4";
    }

    function linksMobileState(){
        link1.style.opacity = "1";
        link2.style.opacity = "1";
        link3.style.opacity = "1";
    }

    function mobileImage(){
        document.getElementById("illustration").src="images/floating_selfie_optimized.png";
    }

    function desktopImage(){
        document.getElementById("illustration").src="images/floating_selfie.png";
    }

    if (matchMedia) {
        const mq = window.matchMedia("(min-width: 600px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
        }

    function WidthChange(mq) {
    if (mq.matches) {
        //window width is at least 600px
        linksDefaultState();
        desktopImage();
    } else {
        linksMobileState();
        mobileImage();
    }}

    link1.onmouseenter = function() {test1()};
    link2.onmouseenter = function() {test2()};
    link3.onmouseenter = function() {test3()};  
   
