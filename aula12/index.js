let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const varATEMP = varA
varA = varB
varB = varC
varC = varATEMP

console.log (varA, varB, varC); 