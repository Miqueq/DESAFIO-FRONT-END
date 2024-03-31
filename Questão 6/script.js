let num = parseInt(prompt("Digite o número :"))

if (num == 0 || num == 1) {
    alert("O número fatorial é !1")
} else {
    for (i = num - 1; i >= 1; i--) {
        num = num * i
    }
    alert(`O número fatorial é ${num}`)
}
