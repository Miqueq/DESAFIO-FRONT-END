let multa = 0.50
let valorTotal = 0

let dias = parseInt(prompt("Há quantos dias você possui o livro?"))
if (dias > 0) {
    valorTotal = multa * dias
    alert(`A sua multa é $${valorTotal}`)
} else {
    alert("Você não tem nada a pagar.")
}
