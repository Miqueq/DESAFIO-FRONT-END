let frase = prompt("Digite uma frase :")


let numPalavras = 0
let i = 0

while (frase[i] != undefined) {
    if (frase[i] != " " && (frase[i + 1] == " " || frase[i + 1] == undefined)) {
        numPalavras++
    }

    i++
}

alert(numPalavras)
