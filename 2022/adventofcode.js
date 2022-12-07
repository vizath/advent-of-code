const fs = require("fs");

const content = fs.readFileSync("./input.txt");

const lines = content.toString().split("\n");
console.log("first line:", lines.at(0));
console.log("last line:", lines.at(-1));

const tree = lines.reduce(
  (carry, line) => {
    // console.log(line);
    if (line[0] === "$") {
      // command
      const [dollar, command, arg] = line.split(" ");
      if (command === "cd") {
        if (arg === "/") {
          carry.currentDirectory = "/";
        } else if (arg === "..") {
          carry.currentDirectory = carry.currentDirectory.substring(
            0,
            carry.currentDirectory.lastIndexOf("/")
          );
        } else if (carry.currentDirectory === "/") {
          carry.currentDirectory += arg;
        } else {
          carry.currentDirectory += "/" + arg;
        }
      } else if (command === "ls") {
        carry.files[carry.currentDirectory] = [];
      } else {
        console.log("what?");
      }
    } else if (line[0] === "d") {
      // directory
    } else {
      const [size, filename, other] = line.split(" ");
      if (other) {
        console.log("other", line);
      }
      carry.files[carry.currentDirectory].push({
        filename,
        size: Number(size),
      });
    }
    // console.log(carry);
    return carry;
  },
  {
    currentDirectory: "/",
    files: {},
  }
);

console.log(tree.files);
const answers = Object.entries(tree.files)
  .map(([directory]) => {
    const sudDirectories = Object.keys(tree.files).filter(
      (d) => `${d}/`.indexOf(`${directory}/`) === 0
    );
    return sudDirectories
      .map((d) => tree.files[d].map((f) => Number(f.size)))
      .flat()
      .reduce((c, f) => c + f);
  })
  .filter((s) => s <= 100000)
  .reduce((c, s) => c + s, 0);

console.log("answer", answers);
