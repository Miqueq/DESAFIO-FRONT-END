let maior = 0;
let menor = 99999;
let num;
for (let c = 0; c < 7; c++) {
    num = parseInt(prompt("Insira o valor:"))
    if (num >= maior) {
        maior = num;
    }

    if (num <= menor) {
        menor = num;
    }
}
alert(`O maior número é ${maior} e o menor é ${menor}`)
