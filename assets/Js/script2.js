let arrow =document.querySelector(".arrow");
let nav =document.querySelector("nav");
window.addEventListener("scroll" ,()=>{
    if(window.scrollY >0){
      nav.classList.add("change")
    }
    else{
        nav.classList.remove("change");
    }
})
window.addEventListener("scroll" ,()=>{
    if(window.scrollY >100){
     arrow.style.visibility ="visible"
    }
    else{
        arrow.style.visibility="hidden"
    }
})
