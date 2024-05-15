import readline from "readline";
import process from 'process';



const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
input.question("Como te llamas? ", (name) => {
    console.info(`Hola ${name}`);
    input.close();
});
