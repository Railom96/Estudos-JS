function meuEscopo () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    
    
    function recebeEventoForm (evento) {
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        evento.preventDefault();

        console.log(nome.value, sobrenome.value, peso.value, altura.value);

        pessoas.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += ` <p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}  </p> `
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo ();


    //form.onsubmit = function (evento) {
    //    evento.preventDefault();
    //   alert('socorro!');
    //    console.log('Foi enviado.');
    //};

    //let contador = 1;
    //function recebeEventoForm (evento) {
    //    evento.preventDefault();
    //    console.log(`Form não foi enviado ${contador}`);
    //    contador++;
    //};