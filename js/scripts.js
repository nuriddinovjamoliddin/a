var toggle = document.getElementById("menuTo");
var menu = document.getElementById("menu");
var sbar = document.getElementById("sidebar");
var bool=true;
toggle.addEventListener("click",function(){
	if(bool==false){
		menu.style.display="none";
		setTimeout(function(){bool=true;},10);
	}
	if(bool==true){
		menu.style.display="flex";
		setTimeout(function(){bool=false;},10);
	}
});
var trigger=true;
var miniMenu=document.getElementById("menuToo");
miniMenu.addEventListener("click",function(){
	if(trigger==false){
		document.getElementById("mySidepanel1").style.height = "0";
		setTimeout(function(){trigger=true;},10);
	}
	if(trigger==true){
		document.getElementById("mySidepanel1").style.height = "100%";
		setTimeout(function(){trigger=false;},10);
	}
});

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
	// document.getElementById("f-sidepanel").style.maxWidth = "400px";
	// document.getElementById("f-sidepanel").style.width = "100%";
	document.getElementById("f-sidepanel").style.display = "block";
	document.getElementById("content").style.display = "none";
}


function closeNav() {
	// document.getElementById("f-sidepanel").style.width = "0";
	document.getElementById("f-sidepanel").style.display = "none";
	closeNav2();
	document.getElementById("content").style.display = "block";
}

function openNav2() {
	// document.getElementById("content").style.display = "none";
	document.getElementById("f-sidepanel-2").style.display = "block";
	document.getElementById("f-sidepanel-2").style.width = "100%";
	
}


function closeNav2() {
	// document.getElementById("f-sidepanel-2").style.width = "0";
	document.getElementById("f-sidepanel-2").style.display = "none";
	// document.getElementById("content").style.display = "block";
}
function openNavM() {
	// document.getElementById("f-sidepanel").style.maxWidth = "400px";
	// document.getElementById("f-sidepanel").style.width = "100%";
	document.getElementById("mySidepanel1").style.height = "0";
	document.getElementById("f-sidepanel").style.display = "block";
	document.getElementById("content").style.display = "none";
}
var dark=false;
function changeTheme(){
	if(!dark){
		document.getElementById("body").classList.add("dark");
		dark=true;
	}else{
		document.getElementById("body").classList.remove("dark");
		dark=false;
	}
}

// function myFunction(varOnMobile) {
//   if (varOnMobile.matches) {
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }

// var varOnMobile = window.matchMedia("(max-width: 576px)");
// myFunction(x);
// x.addListener(myFunction);