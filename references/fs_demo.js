const fs = require('fs');
const path = require('path')

//Create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, function(err) {
//   if(err) throw err;
//   console.log('Folder created...')
// })

//Create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
//   if(err) throw err;
//   console.log('File is created with text...')

//   //Appending the file using fs.appendFile
  // fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' I fucking love Node.js omfg jeez', err => {
  //   if(err) throw err;
  //   console.log('The file is updated yasss byotch')
  // })
// })


//Read file
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
  if(err) throw err;
  console.log("The data is \n" + data)
})

//Rename a file
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'hello-world.txt'), err => {
  if(err) throw err;
  console.log('File renamed')
})
