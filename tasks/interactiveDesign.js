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

createRaindrop();

function createRaindrop() {
	x: Utils.randomNumber(0, width);
	y: Utils.randomNumber(0, height);
	size: Utils.randomNumber(2, 7);
	speed: Utils.randomNumber(5, 10);
	opacity: Utils.randomNumber(0.6, 1);
}
