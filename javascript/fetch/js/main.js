const url = 'https://viacep.com.br/ws';

const formCalcularFrete = document.getElementById('calcular-frete');
const enderecoOrigem = document.getElementById('endereco-origem');
const enderecoDestino = document.getElementById('endereco-destino');

formCalcularFrete.addEventListener('submit', function(event) {
    event.preventDefault();

    let cepOrigem = event.target.querySelector('#cep-origem');

    fetch(`${url}/${cepOrigem.value}/json`).then(function(response) {
        return response.json();
    }).then(function(responseBody) {
        enderecoOrigem.innerHTML = `${responseBody.logradouro}, ${responseBody.bairro}, ${responseBody.localidade}, ${responseBody.estado}, ${responseBody.cep}`;
    });

    let cepDestino = event.target.querySelector('#cep-destino');

    fetch(`${url}/${cepDestino.value}/json`).then(function(response) {
        return response.json();
    }).then(function(responseBody) {
        enderecoDestino.innerHTML = `${responseBody.logradouro}, ${responseBody.bairro}, ${responseBody.localidade}, ${responseBody.estado}, ${responseBody.cep}`;
    });

});