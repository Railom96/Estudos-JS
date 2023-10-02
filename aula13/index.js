//               01234567                  //incicies da string 
let umaString = 'Um texto carai'; 

console.log(umaString.concat(" em um lindo dia."));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.` );


console.log(umaString.indexOf('o', 3)); // aqui eu pedi para o software buscar do início para o fim a posição da letra 'o' a partir do indicie 3. 
console.log(umaString.lastIndexOf('U', 3)); // aqui eu pedi para o software buscar do fim para o início a posição da letra 'U' a partir do indicie 3. 
console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[a-z]/));
console.log(umaString.search(/x/)); // vejo  qual posição do index a letra 'x' está.
console.log(umaString.replace ('Um', 'Outro')); // subistitui um texto pelo outro. 
console.log(umaString.length); // vejo a quantidade de índicies da string (começando do zero)
console.log(umaString.slice (3,8)); //  
console.log(umaString.split (' ', 2)); // 
console.log(umaString.toLocaleLowerCase());
console.log(umaString.toLocaleUpperCase());
console.log(umaString[3]) // pedi para exebir o elemento no terceiro indicie