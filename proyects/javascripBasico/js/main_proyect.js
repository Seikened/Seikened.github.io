const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Que edad tienes? ', function(answer) {
    console.log(`Muchos anos ${answer}!`);
    rl.close();
});