const { ENGINE_METHOD_ALL } = require('constants');
const fs = require('fs');
const depths = fs.readFileSync('input.txt').toString().split("\n");

let counter = 1;

for (let i=1; i <= depths.length; i++) {
	if (depths[i] > depths[i-1]){
        counter ++
    }
}

console.log(counter);