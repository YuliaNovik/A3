//Yulia Novikova 991578236
//Create eventListener function that triggers text on click.
document.addEventListener("click", function(){
  document.getElementById("p1").innerHTML="A tooth fell out, and left a space" ;
  document.getElementById("p2").innerHTML="So big my tongue could touch my face." ;
  document.getElementById("p3").innerHTML="And every time I smile, I show" ;
  document.getElementById("p4").innerHTML="a space where something used to grow." ;
  document.getElementById("p5").innerHTML="I miss my tooth as you can guess..." ;
  document.getElementById("p6").innerHTML="But then, I have to brush one less!";
});

//This function hides elements
function hide (id){
	document.getElementById(id).style["visibility"]="hidden";

//This function shows elements
}
function show(id){
	document.getElementById(id).style["visibility"]="visible";
}
//This function makes faity inamge bidder
function big(x){
   x.style.height= "650px";
   x.style.width= "630px";
}
//This image makes fairy image smaller
function small(x){
	x.style.height= "350px";
	x.style.width= "330px";
}



    window.onload=function(){
    	var fairy = document.getElementById("mouse");
    	window.onmousemove=function(e){
    		mouse.style.left=e.clientX+"px";
    		mouse.style.top=e.clientY+"px";
    	}
    }



