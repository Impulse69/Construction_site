
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



var index=1;
const animtext=[...document.querySelectorAll(".animtext")];
const spanres=[...document.querySelectorAll(".spanres")];


function animatespanres(){
    setTimeout(()=>{

     for(var t=0;t<spanres.length;t++){
         spanres[t].classList.remove("active");
         animtext[t].classList.remove("active");    
     }

     spanres[index].classList.add("active");
     animtext[index].classList.add("active");

     if(index==spanres.length-1){
        index=0;
     }else{
        index+=1;
     }

     animatespanres();

    },3000);
}

animatespanres();
