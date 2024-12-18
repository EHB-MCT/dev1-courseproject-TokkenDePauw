"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as noise from "../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

let raindrops = []; //Array van regendruppels
let wind = 0; //windsterkt regendruppels
let sat = 0; //Saturation regendruppels

setup();
update();

//Stelt de muisbeweging en regen in
function setup() {
	document.onmousemove = mouseMove;

	//Maakt 500 regendruppels
	for (let i = 0; i < 500; i++) {
		raindrops.push(createRaindrop());
	}
}

//Maakt een regendruppel
function createRaindrop() {
	return {
		x: Utils.randomNumber(0, width), //Random x-position
		y: Utils.randomNumber(0, height), //Random y-position
		size: Utils.randomNumber(2, 7), //Random size
		speed: Utils.randomNumber(5, 10), //Random speed
		opacity: Utils.randomNumber(0.6, 1), //Random opacity
	};
}

//Tekent een regendrubbel
function drawRaindrop(x, y, size) {
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x, y + size);
	context.strokeStyle = Utils.hsla(120, 100, 50 - (sat / height) * 100, 50);
	context.lineWidth = 5;
	context.stroke();
}

//Update de functie voor de animatie
function update() {
	context.fillStyle = "#0A0F0A";
	context.fillRect(0, 0, width, height);

	//Werkt elke regendruppel bij
	for (let i = 0; i < raindrops.length; i++) {
		let drop = raindrops[i];

		//Zet de druppel weer bovenaan als hij uit het scherm gaat
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
 * Deze functie wordt uitgevoerd wanneer de muis beweegt
 * @param {MouseEvent} e
 */
function mouseMove(e) {
	let xOffset = width / 2 - e.pageX; //Berekent de afstand van de muis
	wind = xOffset / 100; //Zet de wind op basis van de muisbeweging
	sat = e.pageY / 5; // Zet de saturation op basis van de muisbeweging
}

//Adapted by Peter Dickx for the DEV1 course @ Erasmushogeschool Brussel
//Voegt noise functie toe
function perlin() {
	for (let i = 0; i < width; i++) {
		let n = noise.perlinNoise(i / 75) * 300 + height / 3;
		context.fillStyle = Utils.hsla(120, 100, 50 - (sat / height) * 100, 50);
		context.fillRect(i, n, 5, 5);
	}
}

//Tekent BMP 69
function bpm() {
	context.fillStyle = Utils.hsla(120, 100, 50 - (sat / height) * 100, 50);

	//B
	context.fillRect(width - 400, 50, 10, 110);
	context.fillRect(width - 360, 60, 10, 40);
	context.fillRect(width - 360, 110, 10, 40);
	context.fillRect(width - 390, 50, 30, 10);
	context.fillRect(width - 390, 100, 30, 10);
	context.fillRect(width - 390, 150, 30, 10);
	//P
	context.fillRect(width - 325, 50, 10, 110);
	context.fillRect(width - 285, 60, 10, 40);
	context.fillRect(width - 315, 50, 30, 10);
	context.fillRect(width - 315, 100, 30, 10);
	//M
	context.fillRect(width - 250, 60, 10, 100);
	context.fillRect(width - 240, 50, 20, 10);
	context.fillRect(width - 220, 60, 10, 50);
	context.fillRect(width - 210, 50, 20, 10);
	context.fillRect(width - 190, 60, 10, 100);
	//6
	context.fillRect(width - 150, 60, 10, 90);
	context.fillRect(width - 140, 50, 30, 10);
	context.fillRect(width - 140, 100, 30, 10);
	context.fillRect(width - 140, 150, 30, 10);
	context.fillRect(width - 110, 110, 10, 40);
	//9
	context.fillRect(width - 40, 60, 10, 90);
	context.fillRect(width - 70, 50, 30, 10);
	context.fillRect(width - 70, 100, 30, 10);
	context.fillRect(width - 70, 150, 30, 10);
	context.fillRect(width - 80, 60, 10, 40);
}

//Tekent spaceinvader
function drawSignature() {
	context.fillStyle = "#000000";
	context.fillRect(width - 300, height - 300, 300, 300);

	context.fillStyle = "#D957C4";
	context.fillRect(width - 225, height - 275, 150, 100);
	context.fillRect(width - 175, height - 175, 50, 100);
	context.fillRect(width - 225, height - 125, 50, 100);
	context.fillRect(width - 125, height - 125, 50, 100);
}
