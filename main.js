// GRAPHICS ASSIGNEMNT 1
// SET UP THE CANVAS AND GRAPHICS CONTEXT
let cnv = document.getElementById("canv");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// IMAGE VARIABLE
let cloud = document.getElementById("cloud-img");

// VARIABLES
let mouseIsClicked = false;

// BACKGROUNG COLOUR
ctx.fillStyle = "Blue";
ctx.fillRect(0, 0, 800, 400);

ctx.fillStyle = "Green";
ctx.fillRect(0, 400, 800, 200);

// DRAW HALF CIRCLE
ctx.lineWidth = 2;
ctx.fillStyle = "rgb(" + circRed + " , 0, 0)";
ctx.beginPath();
ctx.arc(400, 400, 50, Math.PI, 0);
ctx.fill();

// CLOUD IMAGE
ctx.drawImage(cloud, 350, 175);
ctx.drawImage(cloud, 400, 150);

requestAnimationFrame(loop);
function loop() {
  if (mouseIsPressed) {
    cloud++;
    CircRed -= 2;
  }
}

// EVENTS
document.addEventListener("mousedown", mouseDownHandler);
document.addEventListener("mouseup", mouseUpHandler);

function mouseDownHandler() {}

// DRAWING BASICS
// STORE IMAGES IN VARIABLES
// let gucciLogo = document.getElementById("gucci-logo");

// // LET'S DRAW SOMETHING USING THE GRAPHICS COMNTEX (CTX)
// // DRAW RECTANGLES
// // SET THE OUTLINE AND FILL COLOURS
// // USE ANY VALID CSS COLOURS: NAME, RGB (), RGBA (), HEX #FF0033
// ctx.strokeStyle = "purple";
// ctx.strokeRect(50, 20, 150, 50);

// ctx.fillStyle = "pink";
// ctx.fillRect(225, 150, 200, 200);

// // DRAW TEXT
// ctx.font = "40px Times New Roman";
// ctx.fillStyle = "black";
// ctx.fillText("I Found You :)", 300, 50);

// ctx.font = "30px Arial";
// ctx.strokeStyle = "rgb(0, 20, 40)";
// ctx.strokeText("Save me", 300, 100);

// // DRAW LINES
// ctx.lineWidth = 2;
// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.moveTo(500, 200);
// ctx.lineTo(700, 150);
// ctx.lineTo(600, 100);
// ctx.stroke();

// // DRAW POLYGON
// ctx.lineWidth = 2;
// ctx.fillStyle = "cyan";
// ctx.beginPath();
// ctx.moveTo(500, 400);
// ctx.lineTo(700, 350);
// ctx.lineTo(600, 300);
// ctx.closePath();
// ctx.fill();

// // DRAW CIRCLES
// ctx.lineWidth = 2;
// ctx.strokeStyle = "black";
// ctx.beginPath();
// ctx.arc(100, 500, 50, 0, 2 * Math.PI);
// ctx.stroke();

// ctx.lineWidth = 2;
// ctx.fillStyle = "grey";
// ctx.beginPath();
// ctx.arc(250, 500, 30, 0, 2 * Math.PI);
// ctx.fill();

// ctx.fillStyle = "cyan";
// ctx.beginPath();
// ctx.arc(250, 500, 20, 0, 2 * Math.PI);
// ctx.fill();

// // DRAW IMAGES
// ctx.drawImage(gucciLogo, 300, 400);
