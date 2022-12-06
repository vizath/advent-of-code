const fs = require("fs");

const content = fs.readFileSync("./input.txt");

const lines = content.toString();
console.log("first line:", lines.at(0));
console.log("last line:", lines.at(-1));

let answers = 0;

const markerLength = 14;
const line = lines;
for (let i = markerLength - 1; i < line.length; i++) {
  if (
    new Set(
      Array(markerLength)
        .fill(0)
        .map((_, k) => line[i - k])
    ).size === markerLength
  ) {
    answers = i + 1;
    break;
  }
}

console.log("answer", answers);
