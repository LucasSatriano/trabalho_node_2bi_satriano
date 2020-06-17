const readline = require("readline");
const fs = require("fs");
const path = require('path')

console.time("time this");
const readable = fs.createReadStream(path.resolve(__dirname, 'planilha_trabalho.csv'));
console.timeEnd("time this");
console.time("time this");

const rl = readline.createInterface({
  input: readable,
});

let x = 0;

const keys = []
const json = []

rl.on("line", (line) => {
     if(!x) {
             line.split(',').forEach(key => {
              keys.push(key)
              })
            } else {

    const fields = line.split(',')
    const object = {}
  
    keys.forEach((key, principal) => {
      object[key] = fields[principal];
    })
    
    json.push(object)
  }

  x += 1;
});

rl.on("close", () => {
  console.log(JSON.stringify(json)) 
  console.timeEnd("time this"); 

  console.time("time this"); 
  fs.writeFile("C:\\Users\\Satriano\\Documents\\3-2020\\java\\trabalho\\trabalho_node_2bi\\src\\meuarquivo.txt", (JSON.stringify(json)) ,function(erro) { 
    if(erro) {
    throw erro;
    }
   console.log("Salvo");
   console.timeEnd("time this");
   });
}); 