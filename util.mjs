import util from 'util';

const firstName = "Eko";
const lastName = "Kurniawan";


console.log(`Hello ${firstName} ${lastName}`);
console.log(util.format("Hello %s %s",firstName,lastName));

const person = {
    firstName: "Eko",
    lastName: "Khanedy"
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
