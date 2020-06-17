const readline = require("readline");
const fs = require("fs");
const path = require('path')

const readable = fs.createReadStream(path.resolve(__dirname, 'testesinho.csv'));

console.time("time this");

const rl = readline.createInterface({
  input: readable,
  //output: process.stdout
});

let count = 0;

const keys = []
const json = []

rl.on("line", (line) => {
  if(!count) {
    line.split(',').forEach(key => {
      keys.push(key)
    })
  } else {

    const fields = line.split(',')
    const object = {}
  
    keys.forEach((key, index) => {
      object[key] = fields[index];
    })
    
    json.push(object)
  }

  count += 1;
});

rl.on("close", () => {
  console.log(JSON.stringify(json))
  console.timeEnd("time this");
});
//const writeFileTxt = fs.writeFile("C:\Workspace\trabalho-martin\src", "Hello, txt!");
