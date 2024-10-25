const fs = require('fs');

let conteudoDoArquivo = fs.readFileSync('db.json', "utf-8");
conteudoDoArquivo = JSON.parse(conteudoDoArquivo);
conteudoDoArquivo.products.push({name: "produto 2"});

fs.writeFileSync("db.json", JSON.stringify(conteudoDoArquivo, null, 2));