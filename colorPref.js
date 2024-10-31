const ps = require('prompt-sync');
const prompt = ps();

let favColor = [];

for (let i = 0; i < 3; i++){
    let addColor = prompt("Enter color that you like:");

    favColor.push(addColor);
    console.log(favColor);
}

console.log("Final list", favColor);

