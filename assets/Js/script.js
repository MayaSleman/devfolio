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
var num1 = document.getElementById("count1");
var num2 = document.getElementById("count2");
var num3 = document.getElementById("count3");
var num4 = document.getElementById("count4");

function animatedCounter(element, start, end, duration){
    var range =end - start;
    var current = start;
    var increment = 0;
    if( end > start){
        increment = 1;
    }
    else{
        increment = -1;
    }
var timer = setInterval(function(){
    current += increment;
    element.textContent = current;
    if(current == end)
    {
        clearInterval(timer);
    }
},duration);
}
animatedCounter(num1, 1, 450, 100);
animatedCounter(num2, 1, 25, 300);
animatedCounter(num3, 1, 550, 100);
animatedCounter(num4, 1, 48, 300);




