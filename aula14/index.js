let num1 = 1500; //number
let num2 = 2.5; //number

console.log(num1+num2);

console.log(num1.toString() + num2); // converte temporáriamente a variável para string 
num1 = num1.toString(); // transforma permanetemente a variável em string
console.log(num1.toString(2)); // exibe a string com valor binário 
console.log(Number.isInteger(num1)); // mostra se o número é inteiro com um valor de false ou positive
console.log(num1.toFixed(4)) //exibo o número com um número X de casas decimais.