const path = require('path');

console.log(path.extname(__filename)) // returns extension name of this file
console.log(path.basename(__dirname)) // returns the name of this directory
console.log(path.basename(__filename)) // returns the name of this file