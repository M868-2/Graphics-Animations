// DRAWING BASICS

// SET UP THE CANVAS ADN GRAPHICS CONTEXT
let cnv = document.getElementById("canv");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// LET'S DRAW SOMETHING USING THE GRAPHICS COMNTEX (CTX)
// DRAW RECTANGLES
// SET THE OUTLINE AND FILL COLOURS
// USE ANY VALID CSS COLOURS: NAME, RGB (), RGBA (), HEX #FF0033
ctx.strokeStyle = "purple";
ctx.strokeRect(50, 20, 150, 50);

ctx.fillStyle = "pink";
ctx.fillRect(225, 150, 200, 200);

// DRAW TEXT
ctx.font = "40px Times New Roman";
ctx.fillStyle = "black";
ctx.fillText("I Found You :)", 300, 50);

ctx.font = "30px Arial";
ctx.strokeStyle = "rgb(0, 20, 40)";
ctx.strokeText("Save me", 300, 100);

// DRAW LINES 
ctx.beginPath()
