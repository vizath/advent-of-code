const fs = require("fs");

const content = fs.readFileSync("./input.txt");

const lines = content
  .toString()
  .split("\n\n")[1]
  .split("\n")
  .map((s) => /move (\d+) from (\d+) to (\d+)/.exec(s))
  .map(([_, nb, start, end]) => [Number(nb), Number(start), Number(end)]);
console.log("first line:", lines.at(0));
console.log("last line:", lines.at(-1));

const containers = content.toString().split("\n\n")[0].split("\n").reverse();
containers.shift();

const nbContainers = 9;
const parsed = Array(nbContainers)
  .fill(null)
  .map(() => []);
containers.forEach((line) => {
  let col = 0;
  for (let i = 1; i < line.length; i += 4) {
    if (line[i] && line[i] !== " ") {
      parsed[col].push(line[i]);
    }
    col++;
  }
});

lines.forEach(([nb, start, end]) => {
  for (let i = 0; i < nb; i++) {
    parsed[end - 1].push(parsed[start - 1].pop());
  }
});

console.log(parsed);

const answers = parsed.map((p) => p[p.length - 1]).join("");

console.log("answer", answers);
