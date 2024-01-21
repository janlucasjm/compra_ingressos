# e-Ticket

Este é um projeto simples de compra de ingressos online, denominado e-Ticket. A aplicação é uma página HTML com um formulário que permite ao usuário selecionar o tipo de ingresso desejado e a quantidade desejada. Ao clicar no botão "Comprar", a página verifica a disponibilidade do ingresso escolhido e, se disponível, atualiza a quantidade disponível.

## Como Usar

1. **Escolha o Tipo de Ingresso:**
   - Use o menu suspenso para escolher entre "Cadeira Inferior", "Cadeira Superior" e "Pista".

2. **Informe a Quantidade Desejada:**
   - Digite a quantidade desejada no campo de entrada numérica.

3. **Clique em Comprar:**
   - Clique no botão "Comprar" para processar a compra.

4. **Visualize a Quantidade Disponível:**
   - A seção "Quantidade disponível" exibe a quantidade atualizada de ingressos disponíveis para cada tipo.

## Estrutura do Projeto

- **HTML:**
  - Arquivo principal: `index.html`.
  - Utilização de tags semânticas e formulário para interação.

- **CSS:**
  - Estilos estão divididos em dois arquivos: `_reset.css` e `style.css`.
  - Utilização de fontes externas do Google Fonts.
  - Imagens na pasta `assets` para logotipo, hachuras e símbolo de ingresso.

- **JavaScript:**
  - Arquivo de script: `js/app.js`.
  - Função `comprar()` processa a compra, verificando a disponibilidade e atualizando a quantidade.
  - Função `getMaxQuantidade(tipoIngresso)` retorna a quantidade máxima permitida para cada tipo de ingresso.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades. Basta criar um fork do repositório, implementar suas alterações e enviar um pull request.

Esperamos que o e-Ticket seja útil e proporciona uma experiência de compra de ingressos simples e eficiente!
