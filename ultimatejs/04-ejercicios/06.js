/**
 * Crear un algoritmo que devuelva la cantidad de
 *  numeros positivos de un array
 */

	let array = [2, 5, 7, 15, -5, -100, 55, -2, -56, 4, 6, 6];

	function cuantosPositivos (arr){
		let negativo = 0;
		let positivo = 0;

		for (numero of arr){
			if(numero > 0){
				positivo = positivo + 1;
			}else if (numero < 0){
				negativo = negativo + 1;
			}
		}
		return [positivo, negativo];
	}

	let resultado = cuantosPositivos (array);
	console.log(resultado);