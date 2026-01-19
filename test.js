console.log('TEST FILE EXECUTED');
console.log('Node version:', process.version);
console.log('Current dir:', process.cwd());
console.log('Files:', require('fs').readdirSync('.'));