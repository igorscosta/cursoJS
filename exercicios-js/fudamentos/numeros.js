const peso0 = 1.1 //considera como float
const peso1 = 1.0 //considera como inteiro
const peso2 = Number('2.0') //Casting de string pra valor numérico

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) //verifica se o número é inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //toFixed é usado para controlar a quantidade de casas decimais de um valor
console.log(media.toString()) //toString conver o valor para String
console.log(media.toString(2)) //converte para binário
console.log(typeof media) //mostra o tipo de uma variável