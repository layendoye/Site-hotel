var navCoul=document.getElementById("coul-transp");
var tetxCoul1=document.querySelector(".chang-coul1");
var tetxCoul2=document.querySelector(".chang-coul2");
var tetxCoul3=document.querySelector(".chang-coul3");
var tetxCoul4=document.querySelector(".chang-coul4");
var tetxCoul5=document.querySelector(".chang-coul5");
window.addEventListener("scroll", changerCoul);

function changerCoul(){

    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1){
        navCoul.style.backgroundColor="#f8f9fa";
        tetxCoul1.style.color="black";
        tetxCoul2.style.color="black";
        tetxCoul3.style.color="black";
        tetxCoul4.style.color="black";
        tetxCoul5.style.color="black";
    }
    else{
        navCoul.style.backgroundColor="rgba(0,0,0, 0)";
        tetxCoul1.style.color="white";
        tetxCoul2.style.color="white";
        tetxCoul3.style.color="white";
        tetxCoul4.style.color="white";
        tetxCoul5.style.color="white";
    }
} 