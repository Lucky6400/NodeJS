const fs = require('fs');

fs.readFile('index.js', 'utf-8', (err, data) => {
    console.log(err, data + "\n");
}) // this will read the file and return the data inside of it




// --------------------- readFileSync ------------------------- // 

const readedFile = fs.readFileSync('second.js');
console.log(readedFile.toString());



fs.writeFile('writtenFile.js', '// this file was created using writeFile function \n const amigo = "amigo is here"', () => {
    console.log("File successfully created");
})