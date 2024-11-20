"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as noise from "../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

background();

function background() {
	context.fillStyle = "#000000";
	context.fillRect(0, 0, width, height);
}

drawLines();

function drawLines(lineScaping) {
	context.strokeStyle = "#43F51B";
	context.lineWidth = 0.25;
	let x = width / 2;
	let y = height / 2;

	for (let i = 0; i < width / lineScaping; i++) {
		Utils.drawLine(x, y, i * lineScaping, 0);
		Utils.drawLine(x, y, i * lineScaping, height);
	}

	context.strokeStyle = "#43F51B";
	for (let i = 0; i < height / lineScaping; i++) {
		Utils.drawLine(x, y, 0, i * lineScaping);
		Utils.drawLine(x, y, width, i * lineScaping);
	}
}

perlin();
// Adapted by Peter Dickx for the DEV1 course @ Erasmushogeschool Brussel
function perlin() {
	for (let i = 0; i < width; i++) {
		let n = noise.perlinNoise(i / 75) * 300 + height / 3;
		context.fillStyle = "#43F51B";
		context.fillRect(i, n, 5, 5);
	}
}

bpm();

function bpm() {
	let randomNumber = Math.random();

	if (randomNumber < 0.33) {
		context.fillStyle = "#FF0000";
	} else if (randomNumber < 0.66) {
		context.fillStyle = "#FFFF00";
	} else {
		context.fillStyle = "#00FF00";
	}

	//B
	context.fillRect(width - 400, 50, 10, 110);
	context.fillRect(width - 360, 60, 10, 40);
	context.fillRect(width - 360, 110, 10, 40);
	context.fillRect(width - 400, 50, 40, 10);
	context.fillRect(width - 400, 100, 40, 10);
	context.fillRect(width - 400, 150, 40, 10);
	//P
	context.fillRect(width - 325, 50, 10, 110);
	context.fillRect(width - 285, 60, 10, 40);
	context.fillRect(width - 325, 50, 40, 10);
	context.fillRect(width - 325, 100, 40, 10);
	//M
	context.fillRect(width - 250, 60, 10, 100);
	context.fillRect(width - 240, 50, 20, 10);
	context.fillRect(width - 220, 60, 10, 50);
	context.fillRect(width - 210, 50, 20, 10);
	context.fillRect(width - 190, 60, 10, 100);
	//6
	context.fillRect(width - 150, 60, 10, 90);
	context.fillRect(width - 140, 50, 30, 10);
	context.fillRect(width - 150, 100, 40, 10);
	context.fillRect(width - 140, 150, 30, 10);
	context.fillRect(width - 110, 110, 10, 40);
	//9
	context.fillRect(width - 40, 60, 10, 90);
	context.fillRect(width - 70, 50, 30, 10);
	context.fillRect(width - 70, 100, 40, 10);
	context.fillRect(width - 70, 150, 30, 10);
	context.fillRect(width - 80, 60, 10, 40);
}
