let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//utilizando o valor 1
isAtivo = 1
console.log(!!isAtivo) //testando se o valor é verdadeiro ou falso

//verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//exemplos

let nome = ''
console.log(nome || 'Desconhecido')