
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
changepage(gallerypage,"GalleryPage");
changepage(contactpage,"ContactPage");
changepage(servicepage,"ServicePage");
changepage(aboutpage,"AboutPage");
