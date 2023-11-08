function criaTarefaAFazer(){
    const tarefaAfazer = (document.getElementById(inputAFazer).value);
    const listaAFazer = [];
    listaAFazer.push({ nome: tarefaAfazer });
}

function criaTarefaEmAndamento(){
    const tarefaEmAndamento = (document.getElementById(inputEmAndamento).value);
    const listaEmAndamento = [];
    listaEmAndamento.push({ nome: tarefaEmAndamento });
}

function criaTarefaFinalizada(){
    const tarefaFinalizada = (document.getElementById(inputFinalizado).value);
    const listaFinalizada = [];
    listaFinalizada.push({ nome: tarefaFinalizada });
}




function recebeEventoForm(evento) {
    evento.preventDefault();
    criaTarefaAFazer();
    criaTarefaEmAndamento();
    criaTarefaFinalizada();
}

const form = document.getElementById('form-aFazer', 'form-emAndamento', 'form-Finalizado');
form.addEventListener('submit', recebeEventoForm);