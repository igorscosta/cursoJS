function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name, 
        msg: erro.message,
        date: new Date
    }
}

/* Tente evitar exibir para o usuário,
 * Detalhes de infraestrutura,
 * Mensagens de Stack Trace ,
 * Mensagens em linguas diferentes, ou que não façam sentido pro usuário.
 * Pode-se gerar um hash que também é gerado no log do sistema, 
 * assim que o usuário compartilha o hash,
 * é possível verificar no log do sistema a causa do erro
 */

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final') // acontecendo o erro, ou não, o bloco finally será executado
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)