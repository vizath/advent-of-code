const fs = require("fs");

const content = fs.readFileSync("./input.txt");

const lines = content
  .toString()
  .split("\n")
  .map((s) => s.split(" "));
console.log("first line:", lines.at(0));
console.log("last line:", lines.at(-1));

const scores = {
  A: 1,
  B: 2,
  C: 3,
  // X: 1,
  // Y: 2,
  // Z: 3,
  X: [null, 3, 1, 2],
  Y: [null, 1, 2, 3],
  Z: [null, 2, 3, 1],
};

// const myScores = lines.map((line) => {
//   const oppScore = scores[line[0]];
//   const myScore = scores[line[1]];

//   if (oppScore === myScore) {
//     return myScore + 3;
//   } else if (oppScore === 3) {
//     return myScore + (myScore === 1 ? 6 : 0);
//   } else if (myScore === 3) {
//     return myScore + (oppScore === 2 ? 6 : 0);
//   } else {
//     return myScore + (oppScore === 2 ? 0 : 6);
//   }
// });

const myScores = lines.map((line) => {
  const myScore = scores[line[1]][scores[line[0]]];
  return myScore + (line[1] === "X" ? 0 : line[1] === "Y" ? 3 : 6);
});

const answers = myScores.reduce((a, b) => a + b);

console.log("answer", answers);
