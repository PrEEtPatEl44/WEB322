const readline = require("readline");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });
const path = require("path");
const fs = require("fs");

let PATH_TO_FILE = "./log.txt";
let PATH_TO_DIRECTORY = path.join(__dirname, "./data");
let totalSize = 0;

rl.question(
  "Do you wish to process a File (f) or directory (d): ",
  (answer) => {
    if (answer.toLocaleLowerCase() === "f") {
      getFileReport(PATH_TO_FILE, "log.txt");
    } else if (answer.toLocaleLowerCase() === "d") {
      fs.readdir(PATH_TO_DIRECTORY, (err, files) => {
        if (err) throw err;

        console.log(`Number Of files ${files.length}\n`);

        for (let i = 0; i < files.length; i++) {
          filePath = path.join(PATH_TO_DIRECTORY, files[i]);
          let stats = fs.statSync(filePath);
          console.log(`${files[i]}:  ${stats.size / 1000} KB`);
          totalSize += stats.size;
          getFileReport(filePath, files[i]);
        }

        console.log(`\nsize of directory: ${totalSize / 1000}KB`);
      });
    } else {
      console.log("Invalid Selection");
    }
  }
);

//functions

function countLine(content) {
  let lines = content.split("\n");
  console.log(`Number of Lines: ${lines.length}`);
}
function countChar(content) {
  let chars = content;
  console.log(`Number of characters: ${chars.length}`);
}
function countWords(content) {
  let words = content.split(" ");
  console.log(`Number of Words: ${words.length}`);
}
function countFrequency(content) {
  let freq = content.replace(/[^a-zA-Z]/g, "").toLocaleLowerCase();
  let arr = [];

  for (let i = 0; i < freq.length; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].char === freq[i]) {
        arr[j].count += 1;
        found = true;
      }
    }
    if (!found) {
      arr.push({ char: freq[i], count: 1 });
    }
  }
  arr.sort((a, b) => a.count - b.count);
  console.log(`Frequency of Each Alphabet: `);
  console.log(arr);
}

//get function for the file report
function getFileReport(pathToFile, fileName) {
  fs.readFile(pathToFile, (err, data) => {
    if (err) throw err;
    console.log("\nFilename: " + fileName.toUpperCase());
    let content = data.toString();
    countLine(content);
    countWords(content);
    countChar(content);
    countFrequency(content);
  });
}
