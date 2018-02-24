 {
     {
         {
             {
                var sera = 'Será???'
                console.log(sera)
             }
        }
    }
}

console.log(sera)
//variavel sera ficou visivel fora de seu bloco


function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)
//variavel local não ficou visivel fora da função, pois não é seu escopo

//variaveis var só possuem dois escopos possíveis, escopo global ou em funções