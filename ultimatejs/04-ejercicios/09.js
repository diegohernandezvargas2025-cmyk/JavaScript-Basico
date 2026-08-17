/**
 * crear algoritmo que devuelva un array de 
 * objetos en base a pares
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
	[
		1, 
		{id: 1, name: "Juan"}
	],
	[
		2, 
		{id: 2, name: "Diego"}
	],
	[
		3, 
		{id: 3, name: "Felipe"}
	]
]

function toCollection (arreglo){
	let coleccion = [];
	for(indice in  arreglo){
		let elemento = arreglo[indice];
		coleccion [indice] = elemento[1];
		coleccion[indice].id = elemento[0];
	}
	return coleccion;
}

let rest = toCollection(pares);
console.log(rest);