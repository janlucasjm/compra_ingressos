function comprar() {
    const selecaoIngresso = document.getElementById('tipo-ingresso').value;
    const quantidadeIngresso = document.getElementById('qtd').value;

    const ingressoElementos = {
        'pista' : document.getElementById('qtd-pista'),
        'inferior' : document.getElementById('qtd-inferior'),
        'superior' : document.getElementById('qtd-superior')
    }

    const quantidadeDisponivel = parseInt(ingressoElementos[selecaoIngresso].textContent)

    if(quantidadeDisponivel > 0 && quantidadeIngresso <= getMaxQuantidade(selecaoIngresso) && quantidadeIngresso <= quantidadeDisponivel) {
        ingressoElementos[selecaoIngresso].textContent -= quantidadeIngresso;
    } else {
        alert(`Quantidade indisponível para ${selecaoIngresso}`)
    }

}

function getMaxQuantidade(tipoIngresso) {
    const maxQuantidades = {
        'pista' : 100,
        'inferior' : 400,
        'superior' : 200
    };

    return maxQuantidades[tipoIngresso] || 0;
}
