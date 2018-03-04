//Usando destructuring como parametro para funções
//Extrai os atributos de uma função sem precisar de acesso aos atributos 
//Extração ocorre através  do destructuring

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//chamando a função passando objeto como parâmetro
 console.log(rand({max: 50, min: 40}))

const obj = {max: 50, min:40}
console.log(rand(obj)) 

// Valores min e max possuem um valor setado por default,
// então ambos, ou apenas um dos parâmetros pode ser omitido
console.log(rand({min: 955})) 
console.log(rand({}))