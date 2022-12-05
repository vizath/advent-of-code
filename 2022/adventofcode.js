const fs = require("fs");

const content = fs.readFileSync("./input.txt");

const lines = content
  .toString()
  .split("\n")
  .map((s) => s.split(""))
  .reduce((carry, b, i) => {
    if (i % 3 === 0) {
      carry.push([b]);
    } else {
      carry[carry.length - 1].push(b);
    }
    return carry;
  }, []);
console.log("first line:", lines.at(0));
console.log("last line:", lines.at(-1));

const backpacks = lines.map(([c1, c2, c3]) => {
  const intersection = c1
    .filter((x) => c2.includes(x))
    .filter((x) => c3.includes(x));
  const code = intersection[0].charCodeAt(0);
  if (code >= 97) {
    return code - 96;
  } else {
    return code - 38;
  }
});

const answers = backpacks.reduce((a, b) => a + b);

console.log("answer", answers);
