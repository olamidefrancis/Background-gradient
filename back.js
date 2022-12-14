var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var ara=document.getElementById("ara");

function iseara(){

        ara.style.background= "linear-gradient(to right, "+ color1.value +","+ color2.value +")";
        css.textContent = ara.style.background + ";";
}

color1.addEventListener("input",iseara);
color2.addEventListener("input",iseara);
