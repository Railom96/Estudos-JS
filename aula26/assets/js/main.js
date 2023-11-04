function calculaIMC(){
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const imc =  peso / (altura * altura);

    let grau = 0 

    if (imc <= 18.4) {
        grau = `O seu IMC é ${imc.toFixed(2)} ----- Abaixo do peso`
    } 
    else if (imc >= 18.5 && imc <= 24.9) {
        grau = `O seu IMC é ${imc.toFixed(2)} ----- Peso normal`
    } 
    else if (imc >= 25 && imc <= 29.9) {
        grau = `O seu IMC é ${imc.toFixed(2)} ----- Sobre peso`
    } 
    else if (imc >= 30 && imc <= 34.9) {
        grau = `O seu IMC é ${imc.toFixed(2)} ----- Obesidade grau 1`
    } 
    else if (imc >= 35 && imc <= 39.9) {
        grau = `O seu IMC é ${imc.toFixed(2)} ----- Obesidade grau 2`
    } 
    else if (imc >= 40) {
        grau = `O seu IMC é ${imc.toFixed(2)} ----- Obesidade grau 3`
    } 

    document.getElementById('resultado').innerHTML = grau;

}

function recebeEventoForm(evento) {
    evento.preventDefault();
    calculaIMC();
}

const form = document.getElementById('form');
form.addEventListener('submit', recebeEventoForm);
