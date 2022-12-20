// DRAWING BASICS

// SET UP THE CANVAS ADN GRAPHICS CONTEXT
let cnv = document.getElementById("canv");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// LET'S DRAW SOMETHING USING THE GRAPHICS COMNTEX (CTX)
// DRAW RECTANGLES
ctx.strokeRect(50, 20, 150, 50);
