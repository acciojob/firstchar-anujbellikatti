function firstChar(text) {
  // your code here
	let x = text.split('')
	return x[0].toString();
}
// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
