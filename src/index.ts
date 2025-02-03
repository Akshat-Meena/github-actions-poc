import { getInput } from "@actions/core";

const name = getInput("name");

greet(name);

function greet(name: string){
	console.log(`Hello ${name}`);
}