// novo recurso do ES2015

/* Destructuring é um operador que serve para desestruturação
 * ou seja, ele tira informação de objetos 
 */

//criando o objeto pessoa
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Extraindo o atributos nome e idade de pessoa usando destructuring
// Tire de dentro do objeto pessoa, os atributos nome e idade
const { nome, idade } = pessoa
console.log(nome, idade)

//Extraindo os atributos e armazenando em uma variável com nome diferente
const {nome:n , idade: i} = pessoa
console.log(n, i)

//Extraindo um atributo inexistente no ojeto
const { sobrenome, bemHumorada = true} = pessoa // se não vier nada, assuma o valor default de true
console.log(sobrenome, bemHumorada)

//Acessando atributos aninhados
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//Misturando téncnicas
const {endereco: {logradouro: l, numero: nr, cep: c = null}} = pessoa
console.log(l,nr,c)