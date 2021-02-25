const path = require('path')

//Some Path methods

//1. Base file name
console.log(path.basename(__filename))

//2. Directory name
console.log(path.dirname(__filename))

//3. Create Path Object
console.log(path.parse(__filename))

//4. Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))