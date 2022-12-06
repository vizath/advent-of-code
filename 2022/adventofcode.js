const fs = require("fs");

const content = fs.readFileSync("./input.txt");

const lines = content.toString();
console.log("first line:", lines.at(0));
console.log("last line:", lines.at(-1));

let answers = 0;

const line = lines;
for (let i = 3; i < line.length; i++) {
  if (new Set([line[i - 3], line[i - 2], line[i - 1], line[i]]).size === 4) {
    answers = i + 1;
    break;
  }
}

console.log("answer", answers);
