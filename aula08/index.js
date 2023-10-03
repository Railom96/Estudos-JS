const nome = 'Israel Messias';
const sobrenome = 'Moreira';
const idade = 26;
const peso = 76.80;
const altura = 1.79;
const anoCorrente = 2023;
let imc;
let anoNascimento; 

imc = peso / (altura * altura) 
anoNascimento = anoCorrente - idade 

console.log (`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log (`tem ${altura} de altura e seu imc é de ${imc}`)
console.log (`${nome} ${sobrenome} nasceu em ${anoNascimento} `)