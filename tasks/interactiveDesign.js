"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as noise from "../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

let raindrops = [];
let wind = 0;
let sat = 0;

setup();
update();

function setup() {
	window.onmousemove = mouseMove;

	for (let i = 0; i < 500; i++) {
		raindrops.push(createRaindrop());
	}
}

function createRaindrop() {
	return {
		x: Utils.randomNumber(0, width),
		y: Utils.randomNumber(0, height),
		size: Utils.randomNumber(2, 7),
		speed: Utils.randomNumber(5, 10),
		opacity: Utils.randomNumber(0.6, 1),
	};
}

function drawRaindrop(x, y, size) {
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x, y + size);
	context.strokeStyle = Utils.hsla(200, 100, 100 - (sat / height) * 100, 50);
	context.lineWidth = 2;
	context.stroke();
}

function update() {
	context.fillStyle = Utils.hsl(200, 50, 20);
	context.fillRect(0, 0, width, height);

	for (let i = 0; i < raindrops.length; i++) {
		let drop = raindrops[i];

		if (drop.y > height) {
			drop.y = -drop.size;
			drop.x = Utils.randomNumber(0, width);
		}

		drop.y += drop.speed;
		drop.x += Utils.randomNumber(-1, 1) + wind;

		drawRaindrop(drop.x, drop.y, drop.size);
	}

	perlin();

	bpm();

	drawSignature();

	requestAnimationFrame(update);
}

/**
 *
 * @param {MouseEvent} eventData
 */
function mouseMove(eventData) {
	let xOffset = width / 2 - eventData.pageX;
	wind = xOffset / 100;
	sat = eventData.pageY / 2;
}

// Adapted by Peter Dickx for the DEV1 course @ Erasmushogeschool Brussel
function perlin() {
	for (let i = 0; i < width; i++) {
		let n = noise.perlinNoise(i / 75) * 300 + height / 3;
		context.fillStyle = "#43F51B";
		context.fillRect(i, n, 5, 5);
	}
}

function bpm() {
	context.fillStyle = "#00FF00";

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

function drawSignature() {
	context.fillStyle = "#000000";
	context.fillRect(width - 300, height - 300, 300, 300);

	context.fillStyle = "#D957C4";
	context.fillRect(width - 225, height - 275, 150, 100);
	context.fillRect(width - 175, height - 175, 50, 100);
	context.fillRect(width - 225, height - 125, 50, 100);
	context.fillRect(width - 125, height - 125, 50, 100);
}
