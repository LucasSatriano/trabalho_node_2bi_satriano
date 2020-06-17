fs.writeFile("C:\\Workspace\\trabalho-martin\\trabalho-martin\\src\\meuarquivo.json", (JSON.stringify(json)) ,function(erro) { //cria o arquivo na pasta
    console.time("time this");
    fs.writeFileSync('meuarquivo.json', JSON.stringify(json)); //adciona os dados
    if(erro) {
    throw erro;
    }
    console.timeEnd("time this");
   console.log("Arquivo salvo");// Salva o arquivo.
   });