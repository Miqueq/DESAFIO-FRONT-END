let num
let numeros = []
let primos = []
for (i = 0; i < 8; i++) {
    num = parseInt(prompt("Insira o valor:"))
    numeros[i] = num
}
for (j = 0; j < 8; j++) {
    if (numeros[j] % 2 != 0 && numeros[j] % 3 != 0) {
        primos.push(numeros[j])
    }
}
alert(primos)