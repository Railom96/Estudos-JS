//                0         1           2         3         4          5
const alunos = ['Israel', 'Melissa', 'Adriana', 'Marcos', 'Izabel', 'Helena'];

console.log(alunos); // exibo array completo
console.log(alunos[3]); // exibe o elemente específico

alunos [0] = 'Israel Moreira'; // alterei a string dentro da array

console.log(alunos.length); // mostra o tamanho do meu array

alunos[6] = 'Enedir'; // acrescentei a string 'Enedir' na posição 6 do array
alunos[alunos.length] = 'José'; // acrecentei uma string ao final do array
lunos.push ('Leleu'); //  acrecentei uma string ao final do array
alunos.unshift ('Carlos'); // acrecentei uma string no início do array
alunos.pop(); // remove do final do array
alunos.shift(); // remove do final do array

const removido = alunos.pop; // armazena o que foi removido


console.log(alunos.slice(1,6)) // mostro o itens do array dentro do intervalo especificado

console.log(typeof alunos); // mostro de que tipo é este elemento
console.log(alunos instanceof Array); // pergunto sé é um array 




//* Const com valores mutáveis
//const descreve uma variável que não pode ser reatribuída (com o operador de atribuição =). Depois de criá-la, não podemos fazer algo assim:

//const nome = 'luiz';
//nome = 'joão'; // Erro: Assignment to constant variable.
//Porém, existe uma diferença entre variável e valor.

//Variáveis são como um apelido para um valor, uma espécie de alias para mencionar algum valor salvo na memória.

//Já valores são os dados que realmente ficam salvos na memória e sustentam determinado tipo. Alguns tipos de valores são imutáveis, como number, string, boolean, undefined, null, symbol e bigint (os primitivos todos são imutáveis). Outros tipos são mutáveis, como arrays e objetos (objetos em geral são mutáveis, com exceção de null).

//Valores mutáveis geralmente são estruturas de dados mais complexas que sustentam outros valores ou comportamentos internamente. Como é o caso do array, que pode ser composto por vários outros tipos de dados.

//Quando usamos const com tipos primitivos, esse valor nunca mais poderá ser alterado. Nesse caso, além de const não permitir reatribuição, o valor também é imutável (consequentemente, nunca podemos alterar essa constante).

//Já quando usamos const com valores mutáveis (como arrays e objetos), a variável continua sendo constante, porém os valores dentro do objeto poderão ser alterados. Isso acontece porque quando alteramos um valor interno de um objeto, não ocorre a reatribuição da variável com sinal de atribuição = (a variável continua apontando para o mesmo local na memória), apenas a alteração de um valor interno do mesmo objeto.

//Por este motivo, pode-se usar const com objetos mutáveis e ainda assim alterar seus valores internos. A única coisa que não vamos conseguir fazer é reatribuir o valor da variável.

//Exemplos:

//Isso pode

//const array = [1, 2, 3, 4, 5];
//array.pop();
//array[0] = 1024;
//console.log(array); // [ 1024, 2, 3, 4 ]
 
//Isso NÃO pode

//const array = [1, 2, 3, 4, 5];
//array = 'Legal'; // Assignment to constant variable. 