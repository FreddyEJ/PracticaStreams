const fs = require('fs');
const readline = require('readline');

let i = readline.createInterface(process.stdin, process.stdout);
i.question('Nombre del archivo...', (archivo)=>{
    let stream = fs.createWriteStream(`./${archivo}.txt`);
    stream.write(`Almacenar ${archivo} \n`);
    
    process.stdout.write('Escribe lo que deseas almacenar... \n');

    i.on('line', (texto)=>{
        if(texto.trim() == 'exit'){
            stream.close();
            i.close();
        }else{
            stream.write(texto.trim() + '\n');
        }
    });
});