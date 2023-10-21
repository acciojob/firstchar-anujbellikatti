function firstChar(text) {
  // your code here
	let x = text.split('')
	if(x[0]==" "){
		return x[1].toString();
	}else if(x.length==1&&x[0]==" "){
		return " "
	}
	else{
	return x[0].toString();
		
	}
	
}
// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));


