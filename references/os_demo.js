const os = require('os');

//Platform
console.log(os.platform());

//CPU architecture
console.log(os.arch());

//CPU Core info
console.log(os.cpus());

//Free memory
console.log(os.freemem())

//Total memory
console.log(os.totalmem())

//Home directory
console.log(os.homedir());

//Uptime - the amount of time your system has been up
console.log(os.uptime());