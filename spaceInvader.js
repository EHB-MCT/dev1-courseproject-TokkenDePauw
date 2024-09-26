let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

context.fillStyle = "#000000";
context.fillRect(0, 0, 300, 300)

context.fillStyle = "#D957C4"
context.fillRect(75, 25, 150, 100)
context.fillRect(125, 125, 50, 100)
context.fillRect(75, 175, 50, 100)
context.fillRect(175, 175, 50, 100)