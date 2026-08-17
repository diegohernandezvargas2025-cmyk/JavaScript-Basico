/**
 * crear un array de longitud N y que sus elementos
 * dean de 1 hasta N
 */

let longitud = 5;

function crearArray (n){
	let arreglo = [];
	
	if (n <= 0){
		return [];
	}
	for(let i = 0; i < n; i++){
		arreglo[1] = i + 1;
	}
	return arreglo;
}

let resultado = crearArray(longitud);
console.log(resultado);