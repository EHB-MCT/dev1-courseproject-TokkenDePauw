"use strict";
import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";
import * as noise from "../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

background();

function background() {
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);
}

stars();

function stars() {
	let stars = 200;

	for (let i = 0; i < stars; i++) {
		let x = Utils.randomNumber(0, width);
		let y = Utils.randomNumber(0, height);
		let r = Utils.randomNumber(0, 2);

		context.fillStyle = "white";
		Utils.fillCircle(x, y, r);
	}
}

sun();

function sun() {
	let sunX = width - 100;
	let SunY = 100;
	let sunR = 75;

	context.fillStyle = "#FF8000";
	Utils.fillCircle(sunX, SunY, sunR + 10);
	context.fillStyle = "#FFDD00";
	Utils.fillCircle(sunX, SunY, sunR);
}

planets();

function planets() {
	let planets = 15;

	for (let i = 0; i < planets; i++) {
		let x = Utils.randomNumber(0, width);
		let y = Utils.randomNumber(0, height);
		let r = Utils.randomNumber(5, 20);
		let h = i * 24;
		let s = Utils.randomNumber(40, 60);
		let l = Utils.randomNumber(40, 50);

		context.fillStyle = Utils.hsl(h, s, l);
		Utils.fillCircle(x, y, r);
	}
}

rocket();

function rocket() {
	let rocketX = Utils.randomNumber(0, width);
	let rocketY = Utils.randomNumber(0, height);
	let rocketWidth = 50;
	let rocketHeight = 100;

	// Bovenste deel van de raket
	context.fillStyle = "#D32F2F";
	Utils.fillEllipse(rocketX + 25, rocketY, rocketWidth / 2, rocketHeight / 4);

	// Motor van de raket
	context.fillStyle = "#262626";
	Utils.fillEllipse(rocketX + 25, rocketY + 125, rocketWidth, rocketHeight / 2);
	context.fillStyle = "#000000";
	context.fillRect(rocketX - 25, rocketY + 125, 100, 50);

	// Middenste deel van de raket
	context.fillStyle = "#B0B0B0";
	context.fillRect(rocketX, rocketY, rocketWidth, rocketHeight);

	// Raam van de raket
	context.fillStyle = "#4A4A4A";
	Utils.fillCircle(rocketX + 25, rocketY + 50, 15);
	context.fillStyle = "#ADD8E6";
	Utils.fillCircle(rocketX + 25, rocketY + 50, 10);

	// Onderste deel van de raket
	context.fillStyle = "#4A4A4A";
	context.fillRect(rocketX, rocketY + 100, rocketWidth, rocketHeight / 4);

	// Vuur van de raket
	context.fillStyle = "#FF4500";
	Utils.fillCircle(rocketX + 25, rocketY + 210, 20, 20);
	context.fillStyle = "#FFA500";
	Utils.fillCircle(rocketX + 25, rocketY + 180, 20, 20);
	context.fillStyle = "#700";
	Utils.fillCircle(rocketX + 25, rocketY + 150, 20, 20);
}

ufo();

function ufo() {
	let ufos = 3;
	for (let i = 0; i < ufos; i++) {
		let ufoX = Utils.randomNumber(0, width);
		let ufoY = Utils.randomNumber(0, height);
		let ufoR = 25;
		let uforX = 25;
		let uforY = 10;

		context.fillStyle = "#ADD8E6";
		Utils.fillCircle(ufoX, ufoY + -10, ufoR - 10);
		context.fillStyle = "#00FF00";
		Utils.fillCircle(ufoX, ufoY - 15, ufoR - 20);
		context.fillStyle = "black";
		Utils.fillCircle(ufoX - 2, ufoY - 15, ufoR - 24);
		context.fillStyle = "black";
		Utils.fillCircle(ufoX + 2, ufoY - 15, ufoR - 24);
		context.fillStyle = "#808080";
		Utils.fillEllipse(ufoX, ufoY, uforX, uforY);
	}
}
