const os = require('os');

console.log('Arch = '+os.arch());


const freeMem = os.freemem();
console.log('Free Memory = '+ freeMem + ' byte');
console.log('Free Memory = '+ `${freeMem/1024/1024/1024}` + ' GB');

const totMem = os.totalmem();
console.log('Total Memory = '+ totMem + ' byte');
console.log('Total Memory = '+ `${totMem/1024/1024/1024}` + ' GB');

console.log('Hostname = '+os.hostname());

console.log('Platform = '+os.platform());

console.log('Tmp Dir = '+os.tmpdir());

console.log('Type = '+os.type());
