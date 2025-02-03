import { getInput } from "@actions/core";

const name = getInput("name");
const testSecret = getInput("test_secret");

greet(name);
printSecret(testSecret);

function greet(name: string){
	console.log(`Hello ${name}`);
}

function printSecret(secret: string){
	console.log(`Secret: ${secret}`);
}