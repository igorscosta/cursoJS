//Usando destructuring em arrays que são passados como parâmetros para funções

function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] // Usando operador destructuring para trocar o valor de max e min caso min seja maior que max 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) //troca os valores
console.log(rand([992])) // Passou só o mínimo com o valor de 992
console.log(rand([,10])) //Passando só valor máximo com o valor de 10
console.log(rand([])) // A função ira assumir os valores default de min = 0 e max = 1000


