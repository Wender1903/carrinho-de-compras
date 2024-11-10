let total
limpar()
document.getElementById("valor-total").innerHTML = 'R$ 0';
document.getElementById("lista-produtos").textContent = ' '
function adicionar() {
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnidade = produto.split("R$")[1];
    let quantidade = parseInt(document.getElementById("quantidade").value);



    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

     

    let subTotal =  valorUnidade * quantidade
    let textoCarrinho = document.getElementById("lista-produtos");
    textoCarrinho.innerHTML = textoCarrinho.innerHTML + `
    <section class="carrinho__produtos__produto" id="section">
    <span class="texto-azul"> ${quantidade}x</span> ${nomeProduto}<span class="texto-azul"> R$${subTotal}</span>
    </section>`
    

    total = subTotal + total
    let totalFinal = document.getElementById("valor-total")
    totalFinal.innerHTML = `R$${total}`
    
    document.getElementById("quantidade").value = ' ';

}

function limpar() {
    total = 0
    document.getElementById("valor-total").innerHTML = 'R$ 0';
    document.getElementById("lista-produtos").textContent = ' '

}

