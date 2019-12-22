// **************************************************
let a = "I'm a string at the moment, but not for much longer";
console.log(a);

a = 1; // 'a' is now a number - JS lets you change one data type into another
window.b = 2; // here the 'window' object represents a browser tab
const c = 3;
console.log(a, b, window.c); // 1 2 undefined

// **************************************************
const i = 999;
for (let i = 0, j = -1; i < 2; i++) {
	console.log(i); // 0 1
} // the 'i' and 'j' inside the loop can't be seen outside it
console.log(i); // 999

try {
	console.log(j);
}
catch (error) {
	console.log(error); // ReferenceError: j is not defined
}

// **************************************************
const array1 = [1, 2, 3];
const array2 = array1; // 'array2' isn't a copy of 'array1' - it's the same array as 'array1'
array2.push(4);
console.log(array1); // [1, 2, 3, 4]
console.log(array1.shift(), array2); // 1 [2, 3, 4]

// **************************************************
const name = 'Andy';
const myObject = {
	name: 'Ben',
	method: function () {
		return this.name; // 'this' points to 'name' inside 'myObject'
	}
};
console.log(name, myObject.method(), myObject.length); // Andy Ben undefined
console.log(JSON.stringify(myObject)); // {"name":"Ben"} - and turned into a string
console.log(JSON.stringify(myObject).length); // 14
console.log(JSON.parse(JSON.stringify(myObject))); // { name: 'Ben' } - turned back into an object
console.log(JSON.parse(JSON.stringify(myObject)).length); // undefined

// **************************************************
const today = new Date().getDay();
const tomorrow = (today + 1) % 7;
const dayAfter = (today + 2) % 7;
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
console.log(days[today], days[tomorrow], days[dayAfter]);

// **************************************************
import {person, animal} from './from.js';
console.log(person, animal);

// **************************************************
// the rest operator and the spread operator in action
const foo = (...data) => {
	const [first, second, ...theRest] = data; // destructuring the 'data' array
	const spread = [...theRest]; // using the spread operator to copy 'theRest'
	console.log(theRest, spread);
};
foo(1, 22, 333, 4444); // [333, 4444] [333, 4444]

// **************************************************
console.log("Starting to fetch...");

fetch(`https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status`)
	.then(response => response.json())
	.then(data => console.log("FIRST FETCH:\n", data[0].lineStatuses[0].statusSeverityDescription))
	.catch(error => console.log(error));

(async function () {
	const response = await fetch(`https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status`);
	const data = await response.json();
	console.log("SECOND FETCH:\n", data[0].lineStatuses[0].statusSeverityDescription);
})(); // this is an immediately-invoked function expression (IIFE) that uses async/await

console.log("Finished fetching?"); // probably not!
