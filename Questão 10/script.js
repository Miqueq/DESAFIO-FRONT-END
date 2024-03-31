function contarMaiusculas(frase) {
    let contador = 0
    for (i = 0; i < frase.length; i++) {
        if (frase[i] >= "A" && frase[i] <= "Z") {
            contador++;
        }
    }
    return contador;
}

let frase = prompt("Digite uma frase:")
let numeroMaiusculas = contarMaiusculas(frase)
alert(`O número de maiusculas é : ${numeroMaiusculas}`)
