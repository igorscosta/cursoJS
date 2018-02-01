console.log(42 / 0) // retorna valor infinito 
console.log(typeof Infinity)
console.log("10" / 2) // retorna 5
console.log("Igor" * 2) // retorna NaN
console.log(0.1 + 0.7) // retorn 0.7999999999
console.log(10.toString())// não funciona 
console.log((10).toString())// funciona
console.log((10.354).toFixed(2))// funciona, pois a chamada de função para um litral direto não funciona, mas dentro de () funciona
console.log('3'+ 2) //concate pois string tem preferencia