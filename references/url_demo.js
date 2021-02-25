const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

//Serialize url
console.log(myUrl.href);
//Host (root domain)
console.log(myUrl.host);
//Hostname - does not get the port number if any
console.log(myUrl.hostname);
//Path name
console.log(myUrl.pathname);
//Serialize Query
console.log(myUrl.search);
//Params object
console.log(myUrl.searchParams)
//Add params dynamically
myUrl.searchParams.append('abc',"xyz");
//Loop through params
myUrl.searchParams.forEach((value, nameOfValue) => console.log(`${nameOfValue}, and its value is ${value}`));