var navCoul=document.getElementById("coul-transp");
window.addEventListener("scroll", changerCoul);

function changerCoul(){

    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1){
        navCoul.style.backgroundColor="#f8f9fa";
    }
    else{
        navCoul.style.backgroundColor="rgba(0,0,0, 0)";
    }
}