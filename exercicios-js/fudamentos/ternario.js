/* Operador ternário funciona da seguinte forma
 * A primeira parte constitui-se de uma expressão relacional
 * Logo em seguida utiliza-se o ponto de interrogação
 * Depois em seguida, vem o resultado caso a expressão seja verdadeira
 * Depois vem o resultado caso a expressão seja falsa, logo após os dois pontos.
 */ 

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

let nota = 7
const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(status)