function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade:idade
    };
}

const pessoa1 = criaPessoa('Israel', 'Moreira', 26)
const pessoa2 = criaPessoa('Melissa', 'Pimentel', 28)
const pessoa3 = criaPessoa('Adriana', 'Santa', 46)
const pessoa4 = criaPessoa('Helene', 'Moreira', 1)
const pessoa5 = criaPessoa('Adelaide', 'Moreira', 66)

console.log(pessoa1.nome, pessoa2.nome)

//

