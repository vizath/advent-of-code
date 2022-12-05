const fs = require("fs");

const content = fs.readFileSync("./input.txt");

const lines = content
  .toString()
  .split("\n")
  .map((s) => s.split(","))
  .map((s) =>
    s.map((sections) => {
      const n = sections.split("-");
      const t = [];
      for (let i = Number(n[0]); i <= Number(n[1]); i++) {
        t.push(i);
      }
      return t;
    })
  );
console.log("first line:", lines.at(0));
console.log("last line:", lines.at(-1));

const isIncluded = lines.filter(([g1, g2]) => {
  return (
    g1.some((section) => g2.includes(section)) ||
    g2.some((section) => g1.includes(section))
  );
});

const answers = isIncluded.length;

console.log("answer", answers);
