const { count } = require('console');
const { ENGINE_METHOD_ALL } = require('constants');
const fs = require('fs');
const depths = fs.readFileSync('input.txt').toString().split("\n");

let counter = 0;
let sum = 0;

for(let i =0; i<=depths.length; i++) {
    sum = parseInt(depths[i-1]) + parseInt(depths[i]) + parseInt(depths[i+1]);
    if (sum < parseInt(depths[i]) + parseInt(depths[i+1])+ parseInt(depths[i+2])) {
        counter ++;
   console.log(sum, ' ', parseInt(depths[i]) + parseInt(depths[i+1])+ parseInt(depths[i+2]), ' ', counter);

    }
}

console.log(counter);