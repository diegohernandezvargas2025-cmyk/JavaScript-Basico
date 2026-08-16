/**
 * Nombre: ancho x alto
 *  8k      7682 x 4320
 *  4k      3840 x 2168
 *  WQHD    2560 x 1080
 *  HD      1280 x 720 
 */

function nombreResolucion (ancho, alto){
	if(ancho >= 7682 && alto >=4320){
		return '8K';
	}
	else if(ancho >= 3840 && alto >=2168){
		return '4k';
	}
	else if(ancho >= 2560 && alto >=1080){
		return 'WQHD';
	}
	else if(ancho >= 1280 && alto >=720){
		return 'HD';
	}else{
		return false;
	}
}

let nombre = nombreResolucion (3560, 2654);
console.log(nombre);