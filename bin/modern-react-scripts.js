#!/usr/bin/env node

"use strict";

const commands = {
  build: require("./build"),
  lint: require("./lint"),
  eject: require("./eject"),
  test: require("./test"),
  preview: require("./preview"),
  start: require("./start"),
};

const knownCmd = commands[process.argv[2]];

if (knownCmd) {
  knownCmd.run();
}
