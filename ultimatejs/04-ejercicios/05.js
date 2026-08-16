/**
 * crear elgoritmo que devuelva numero 
 * menor y mayor de un array
 */
let array = [1, 4, 8, 1, -1, -6, 10];


function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];

    for ( numero of arr){
        if(menor > numero){
            menor = numero
        }
        if(mayor < numero ){
            mayor = numero
        }
    }

    return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);