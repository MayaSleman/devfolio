let loading = document.getElementById("loading");
let arrow =document.querySelector(".arrow");
let nav =document.querySelector("nav");
setTimeout(function(){
    loading.style.display = "none";
    arrow.style.opacity = 1 ;
    nav.style.opacity = 0.8;
},3000
);
var typed = new Typed(".auto-type", {
    strings: ["Designer","Developer","Freelancer","Photographer"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true,
});
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
let nums = document.querySelectorAll(".num");
let section = document.querySelector(".count");
let started=false;
window.onscroll = function(){
    if(window.scrollY >= section.offsetTop){
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started =true;
    }
}
function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() =>{
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    },3000 /goal)
}
startCount(document.querySelectorAll(".num"))

