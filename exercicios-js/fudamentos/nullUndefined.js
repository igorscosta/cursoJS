let valor //não inicializada
console.log(valor)
//undefine representa uma variável não inicializada


//Null significa que uma variável não aponta para nenhum endereço de memória, e nem possui nenhum valor primitivo
valor = null
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

//delete produto.preco //retira o atributo preco do produto
produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)