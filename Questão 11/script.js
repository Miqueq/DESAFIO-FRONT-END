function calcularIdade(dataNascimento) {
    let hoje = new Date();
    let dataNasc = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    let mes = hoje.getMonth() - dataNasc.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc())) {
        idade--;
    }

    return idade;

}

let dataNascimento = prompt("Quando você nasceu?");
let idade = calcularIdade(dataNascimento);
alert(`A sua idade é : ${idade}`);