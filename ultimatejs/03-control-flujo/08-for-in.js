let user = {
	id: 1,
	name: 'Dragon',
	age: 25
}

for(let prop in user){
	console.log(prop);
}

let animales = ['Gato', 'Perro', 'Dragon'];
for(let indice in animeles){
	console.log(indice, animales[indice]);
}