let hp = 100
let dano = 20
let danoFinal = 0

let numAtaques = parseInt(prompt("Quantos ataques você sofreu?"))
if (numAtaques > 0) {
    danoFinal = numAtaques * dano
    hp = 100 - danoFinal
    if (hp < 0) {
        alert(`Seu dano foi de ${danoFinal} e seu HP acabou. Você morreu!`)
    } else if (hp > 0) {
        alert(`Seu dano foi de ${danoFinal} e seu HP restante é de ${hp} pontos de vida`)
    }
} else {
    alert("Você não sofreu dano !")
}
