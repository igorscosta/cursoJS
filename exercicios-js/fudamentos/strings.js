const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // retorna vazio
console.log(escola.charCodeAt(3)) // retorna o valor unicode
console.log(escola.indexOf('o')) // retorna o indice de um caráctere

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // Vai do indice 0 ao 3 sem incluir o 3

console.log('Escola '.concat(escola).concat("!")) //concatenação de strings
console.log('Escola ' + escola + "!") //outra forma de concaternar strings
console.log(escola.replace(3, 'e')) // substituição de caracteres

console.log('Igu,Maria,Jão'.split(',')) //pegando elementos de uma string e jogando em um array, aceita regex

