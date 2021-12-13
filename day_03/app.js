const {
    count
} = require('console');
const {
    ENGINE_METHOD_ALL
} = require('constants');
const fs = require('fs');
let depths = fs.readFileSync('input.txt').toString().split('\n');

let horizontalSum = 0;
let depthSum = 0;
let total = 0;


for (let i = 0; i < depths.length; i++) {
    if (depths[i].split(' ')[0] === 'forward') {
        horizontalSum += parseInt(depths[i].split(' ')[1]);
    } else if (depths[i].split(' ')[0] === 'down') {
        depthSum += parseInt(depths[i].split(' ')[1]);
    } else if (depths[i].split(' ')[0] === 'up') {
        depthSum -= parseInt(depths[i].split(' ')[1]);
    }
    total = horizontalSum * depthSum;
}

console.log(total);