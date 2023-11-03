function calculaIdade() {
    const nome = (document.getElementById('nomeCompleto').value);
    const dataNascimeto = parseFloat(document.getElementById('anoNascimento').value);
    const anoCorrente = parseFloat(document.getElementById('anoCorrente').value);


    const suaIdade = anoCorrente - dataNascimeto;

    const resultado = `Olá, ${nome}! Sua idade é ${suaIdade} anos.`;

    document.getElementById('resultado').textContent = resultado;

}

function recebeEventoForm(evento) {
    evento.preventDefault();
    calculaIdade();
}

const form = document.getElementById('form');
form.addEventListener('submit', recebeEventoForm);