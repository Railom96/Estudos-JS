function calculaMedia() {
    const nome = document.getElementById('nomeAluno').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    if (!/^[a-zA-Z\s]+$/.test(nome)) {
        alert('O campo de nome deve conter apenas letras e espaços.');
        return; // Interrompe a execução da função se o nome for inválido
    }

    const media = (nota1 + nota2 + nota3) / 3;

    let resultado;

    if (media >= 60) {
        resultado = `Olá, ${nome}! Sua média é ${media.toFixed(2)}, você passou!`;
    }

    else if (media < 60) {
        resultado = `Olá, ${nome}! Sua média é ${media.toFixed(2)}. REPROVADO.`;
    }

    document.getElementById('resultado').innerHTML = resultado;
}

function recebeEventoForm(evento) {
    evento.preventDefault();
    calculaMedia();
}

const form = document.getElementById('form');
form.addEventListener('submit', recebeEventoForm);


