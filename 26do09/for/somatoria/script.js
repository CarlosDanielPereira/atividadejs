let n, res = 0

do {
    n = Number(prompt("Digite um número(Digite 0 para fechar o programa): "))

    res = res + n 
} while (n != 0);
console.log(res)
alert(res)