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
