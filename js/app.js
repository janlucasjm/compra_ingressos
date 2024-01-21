function comprar() {
    const selecaoIngresso = document.getElementById('tipo-ingresso').value;
    const quantidadeIngresso = document.getElementById('qtd').value;
    let quantidadeIngressoPista = document.getElementById('qtd-pista');
    let quantidadeIngressoInferior = document.getElementById('qtd-inferior');
    let quantidadeIngressoSuperior = document.getElementById('qtd-superior');

    switch (selecaoIngresso) {
        case 'pista':
            if(quantidadeIngressoPista.textContent > 0 && quantidadeIngresso <= 100) {
                quantidadeIngressoPista.textContent -= quantidadeIngresso
            } else {
                alert(`Quantidade indisponivel para ${selecaoIngresso}`)
            }
            break;

        case 'inferior':
            if(quantidadeIngressoInferior.textContent > 0 && quantidadeIngresso <= 400) {
                quantidadeIngressoInferior.textContent -= quantidadeIngresso
            } else {
                alert(`Quantidade indisponivel para ${selecaoIngresso}`)
            }
            break
    
        case 'superior':
            if(quantidadeIngressoSuperior.textContent > 0 && quantidadeIngresso <= 200) {
                quantidadeIngressoSuperior.textContent -= quantidadeIngresso
            } else {
                alert(`Quantidade indisponivel para ${selecaoIngresso}`)
            }
            break;

        default:
            break;
    }
}
