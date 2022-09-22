
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2"); 
var body = document.getElementById("gradient");
var GRC = document.getElementById("colorgenerator");

//First Page Load
setGradientColor(color1);
setGradientColor(color2);
css.textContent = body.style.background + ";";

function setGradientColor() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", "
    + color2.value
    + ")";

    css.textContent = body.style.background + ";";
}

// Generate Random Gradient GRC
function randomNum() {
    const x = Math.floor((Math.random() * 255))
    return x;
}

function setGradientColor2() {
    body.style.background = "linear-gradient(to right, " 
    + "rgb(" +  randomNum() + ", " + randomNum() + ", " + randomNum() + ")"
    + ", "
    + "rgb(" +  randomNum() + ", " + randomNum() + ", " + randomNum() + ")"
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradientColor);
color2.addEventListener("input", setGradientColor);
GRC.addEventListener("click", setGradientColor2);

