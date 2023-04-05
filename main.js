canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image; 
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
		alphabetkey();
		document.getElementById("d1").innerHTML="You Pressed an Alphabet Key.";
		console.log("alphabet key")
		}
		else if(keyPressed>=48 && keyPressed<=57){
			numberkey()
			document.getElementById("d1").innerHTML="You pressed a number key."
			console.log("number_key")
		}
		else if(keyPressed>=37 && keyPressed<=40){
			arrowkey()
			document.getElementById("d1").innerHTML="You pressed a arrow key."
			console.log("arrow_key")
		}
		else if(keyPressed==17 || keyPressed==18|| keyPressed==27){
			specialkey()
			document.getElementById("d1").innerHTML="You pressed a special key."
			console.log("special_key")
		}
	else {
		otherkey();
		document.getElementById("d1").innerHTML="You pressed a symbol or an other key";
	}
}

function alphabetkey()
{
	img_image="Alpkey.png"
	add();
}
function numberkey()
{
	img_image="numkey.png"
	add();
}
function arrowkey()
{
	img_image="Arrkey.png"
	add();
}
function specialkey()
{
	img_image="spkey.png"
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}