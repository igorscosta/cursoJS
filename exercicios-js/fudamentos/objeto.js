//Objetos em JS são coloções de chave-valor 
//Podem ser definidos métodos e atributos de forma dinâmica

const prod1 = {}
prod1.nome = 'Celular Ultra Mega' //nome foi criado dinâmicamente no objeto
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

// Definindo objeto utilizando notação literal
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)