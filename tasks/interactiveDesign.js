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
