// short-circuit

/**
 * Falso
 * false
 * 0
 * ''
 * null
 * undefined
 * NaN
 */

let nombre = 'Diego';
let username = nombre || 'Anonimo';
console.log(username);

// AND se ejecuta para evaluar situaciones en las que la primera sea evaluada en true
function fn1 (){
	console.log("Funcion 1");
	return false;
}

function fn2 (){
	console.log("Funcion 2");
	return false;
}

let x = fn1() && fn2();
