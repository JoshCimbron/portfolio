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

    if (matchMedia) {
        const mq = window.matchMedia("(min-width: 600px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
        }

    function WidthChange(mq) {
    if (mq.matches) {
        //window width is at least 600px
        linksDefaultState();
    } else {
        linksMobileState();
    }}

    link1.onmouseenter = function() {test1()};
    link2.onmouseenter = function() {test2()};
    link3.onmouseenter = function() {test3()};  
   
