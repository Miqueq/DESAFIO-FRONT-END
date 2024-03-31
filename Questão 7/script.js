let preco = []
let precoTotal = 0
for (i = 0; i < 3; i++) {
    preco[i] = parseFloat(prompt("Digite o preço dos itens :"))
    precoTotal += preco[i]

}
alert(`O preço total é $${precoTotal.toFixed(2)}`)


