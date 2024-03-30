
const homepage = document.querySelector(".homepage");
const gallerypage = document.querySelector(".gallerypage");
const contactpage = document.querySelector(".contactpage");
const servicepage = document.querySelector(".servicepage");
const aboutpage = document.querySelector(".aboutpage");

function changepage(button,loc){
    button.addEventListener("click",()=>{
        window.location.href="../"+loc+"/";
   });
}

changepage(homepage,"HomePage");
changepage(gallerypage,"ReasonPage");
changepage(contactpage,"ContactPage");
changepage(servicepage,"ServicePage");
changepage(aboutpage,"AboutPage");


const navigation = document.querySelector(".navigation");

 window.addEventListener("scroll",()=>{
       navigation.classList.toggle("sticky",window.scrollY > 0);
 });