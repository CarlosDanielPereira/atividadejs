let a = parseFloat(prompt("Bem vindo a calculadora, para realizar a operação que deseja digite o número correspondente a operação: 1/Adição 2/Subtração 3/Multiplicação ou 4/Divisão"))

let res, n1, n2

if(a >= 1 && a <=4){
    n1 = parseFloat(prompt("Digite o primeiro número da operação:"))
    n2 = parseFloat(prompt("Digite o segundo número da operação:"))
switch(a){
    case 1 :
        res = n1 + n2
        break
    case 2 :
        res = n1 - n2
        break
    case 3 :
        res = n1 * n2
        break
    case 4 :
        if(n2 != 0)
        res = n1 / n2
    else
    alert("Divisão inválida")
        break
}
alert("O resultado da operação deu: " + res)
}
else{
    alert("Você colocou um número inválido")
}