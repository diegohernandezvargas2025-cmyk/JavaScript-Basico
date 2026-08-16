/**
 * crear algoritmo que tome un array de
 * objetos y devuelva un array de pares
 */

let array = [
	{
		id: 1, 
		name: 'Juan'
	},
	{
		id: 2, 
		name: 'Felipe'
	},
	{
		id: 3,
		name: 'Diego'
	}
];

let pares = [
	[1, {id: 1, name: "Juan"}],
	[2, {id: 2, name: "Diego"}],
	[3, {id: 3, name: "Felipe"}]
]

function toPares (arr){
	let paris = [];
	for(idx in arr){
		let elemento = arr[idx];
		paris[idx] = [elemento.id, elemento];
	}

	return paris;
}

let resultado = toPares(array);
console.log(resultado);
