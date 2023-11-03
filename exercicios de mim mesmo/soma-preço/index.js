let produtos = [];
let total = 0;

function somaPreco() {
    const nomeProduto = (document.getElementById('nomeProduto').value);
    const precoProduto = parseFloat(document.getElementById('precoProduto').value);

    let valorTotal = precoProduto + precoProduto;

    if (!/^[a-zA-Z\s]+$/.test(nomeProduto)) {
        alert('O campo de nome do produto deve conter apenas letras e espaços.');
        return;
    }

    produtos.push({ nome: nomeProduto, preco: precoProduto });


    let notinha = `${nomeProduto} =============== ${precoProduto.toFixed(2)}`;
    document.getElementById('notinha').innerHTML = notinha


    const listaProdutos = document.getElementById('listaProdutos');
    const novoItem = document.createElement('li');
    novoItem.textContent = `${nomeProduto} - R$ ${precoProduto.toFixed(2)}`;
    listaProdutos.appendChild(novoItem);

    total += precoProduto;
    document.getElementById('notinha').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function recebeEventoForm(evento) {
    evento.preventDefault();
    somaPreco();
}

const form = document.getElementById('form');
form.addEventListener('submit', recebeEventoForm);