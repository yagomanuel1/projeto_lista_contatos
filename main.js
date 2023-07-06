const form = document.getElementById('form-contato');
const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi adicionado`)
    } else {
        contatos.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumeroContato));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = ''; 
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}