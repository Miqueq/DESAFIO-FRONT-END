let numeros = [];

for (let i = 0; i < 8; i++) {
    let num = parseInt(prompt("Digite o valor:"));
    numeros.push(num);
}

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (numeros[j] > numeros[j + 1]) {
            [numeros[j], numeros[j + 1]] = [numeros[j + 1], numeros[j]];
        }
    }
}


alert(`A sequência ordenada é: ${numeros}`);

