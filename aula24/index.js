/*
entre 0-11 bom dia
12-17 boa tarde
18-23 boa noite
*/

const hora = 22;

if (hora >= 0 && hora <= 11 ) {
    console.log('bom dia!');
} 

else if (hora >= 12 && hora <= 17) {
    console.log('boa tarde!');
}

else if (hora >= 18 && hora <= 23) {
    console.log('boa noite!');
}