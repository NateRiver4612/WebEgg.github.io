var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector(".gradient");
var css = document.querySelector("h3");
var random = document.querySelector("label")


setGradient();
function getRandom(){
	var letters = '0123456789ABCDEF';
	var color = "#";
	for(var i=0;i<6;i++){
			color+=letters[Math.floor(Math.random()*16)];
	}
	return color;
}
function setRandom(event){
	console.log(event.target.tagName);
	console.log(getRandom());
	var c1 = getRandom();
	var c2 = getRandom();
	body.style.background="linear-gradient(to right,"+c1+", "+c2+")";
	color1.value = c1;
	color2.value = c2;
	css.innerHTML = body.style.background;
}
random.addEventListener("click",setRandom);

function setGradient(){
	body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";
	css.innerHTML = body.style.background;
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
