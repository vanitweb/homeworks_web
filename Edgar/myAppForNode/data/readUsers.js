'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('users.json');  
let student = JSON.parse(rawdata);  
console.log(student);  