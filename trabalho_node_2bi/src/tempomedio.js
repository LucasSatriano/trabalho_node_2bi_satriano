console.time("time this");

const readline = require('readline')
const fs = require('fs')

const readable = fs.createReadStream('brasil.csv')
console.timeEnd("time this");

const rl = readline.createInterface({
    input: readable,
    //output: process.stdout 
})

rl.on('line', (line)=>{
    console.log('>>>>', line)
})
rl.on("close", () => {
    console.timeEnd("time this");
  });