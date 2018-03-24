let dobro = function(a){
    return 2 * a
}

//Função arrow é sempre uma função anônima
//Caso deseje chamá-la depois, deve-se armazena-la em uma
//constante ou variável

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())

