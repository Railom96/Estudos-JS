function calculaMedia(){
    
    const nome = parseInt(document.getElementById('nomeAluno').value);
    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const nota3 = parseInt(document.getElementById('nota3').value);
    
    const media = (nota1 + nota2 + nota3) / 3;

    if (media >= 60) {
        const resultado = `Olá, ${nome}! Sua média é ${media}, você passou!`;
    }

    else if (media < 60) {
        const resultado = `Olá, ${nome}! Sua média é ${media}, reprovou.`;
    }

    document.getElementById('resultado').innerHTML = resultado;
} 

function recebeEventoForm(evento) {
    evento.preventDefault();
    calculaMedia();
}

const form = document.getElementById('form');
form.addEventListener('submit', recebeEventoForm);