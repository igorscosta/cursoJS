//Utilizando destructuring em arrays
//Tirando o primeiro elemento de um array e o atribuindo a variável a 
const [a] = [10]
console.log(a)

//Utilizando com múltiplos elementos, e saltando elementos 
const [n1,,n3,,n5,n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//Utilizando em arrays de mais de uma dimensão
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)