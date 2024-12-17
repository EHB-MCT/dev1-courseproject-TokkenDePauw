"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let raindrops = [];
let wind = 0;
let sat = 0;

setup();
update();

function setup() {
	window.onmousemove = mouseMove;
}

function createRaindrop() {
	x: Utils.randomNumber(0, width);
	y: Utils.randomNumber(0, height);
	size: Utils.randomNumber(2, 7);
	speed: Utils.randomNumber(5, 10);
	opacity: Utils.randomNumber(0.6, 1);
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

	requestAnimationFrame(update);
}

function mouseMove(eventData) {
	let xOffset = width / 2 - eventData.pageX;
	wind = xOffset / 100;
	sat = eventData.pageY / 2;
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
