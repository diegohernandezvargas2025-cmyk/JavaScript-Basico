function suma (a, b){
	console.log(arguments);
	return a + b;
}

let rest = suma(2,2,3,4,5 ,8,8);
console.log(rest);
console.log(typeof suma);
