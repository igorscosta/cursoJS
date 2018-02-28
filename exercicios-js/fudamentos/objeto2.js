console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())

//EM JS é possivel instanciar uma função, ou seja uma função exerce o papel de uma classe.
//Funções podem ser instaciandas através da palavra reservada new
//A utilização da palavra class é somente um açúcar sintático, internamente é criada uma função
//Funçõe em JS podem ter métodos e atributos, essas funções podem ser instânciadas 