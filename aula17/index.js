function palavrao (nome) {
 return `Se fudê ${nome}`
}
const variavel = palavrao ('Raelzudo');
console.log(variavel);

//

function soma (x, y) {
    const resultado = x + y;
    return resultado;
}
console.log(soma(10,20));

//

const raiz = function (n) {
    return n ** 0.5;
};
console.log(raiz(1024));

//

const raizq = n => n ** 0.5;

console.log(raizq(1024));
