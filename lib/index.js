"use strict";

const robots = {
  input: require('./robots/input'),
  text: require('./robots/text.js')
};

async function start() {
  robots.input(); // await robots.text(content)
}

start();