

// Função para calcular o IMC
function calcularIMC() {
    // Obter os valores de peso e altura do formulário
    const peso = parseFloat(document.getElementById('inputPeso').value);
    const altura = parseFloat(document.getElementById('inputAltura').value);

    // Verificar se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('mostraImc').textContent = 'Por favor, insira valores válidos para peso e altura.';
        return;
    }

    // Calcular o IMC
    const imc = peso / (altura * altura);

    // Exibir o resultado do IMC
    document.getElementById('mostraImc').textContent = `Seu IMC é: ${imc.toFixed(2)}`;

    // Você também pode adicionar categorias de IMC (ex: magro, normal, obeso) com base no valor de IMC.
}

// Adicionar um ouvinte de evento para o formulário
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Impedir o envio do formulário padrão
    calcularIMC(); // Chamar a função de cálculo do IMC
});