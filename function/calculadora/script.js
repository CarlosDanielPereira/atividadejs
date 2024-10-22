let n1
let n2
let result
let conta
let rep

function calculadora(calculadora){
do {
    conta = Number(prompt("Digite 1 para fazer adição, 2 para subtração, 3 para multiplicação é 4 divisão:"))   

    n1 = parseInt(prompt("Digite um número"))
    n2 = parseInt(prompt("Digite outro número"))

    switch (conta) {
        case 1:
            result = n1 + n2
            break;
    
        case 2:
            result = n1 - n2
            break;
    
        case 3:
            result = n1 * n2
            break;
        
        case 4:
            result = n1 / n2
            break;

        default:
            console.log("Você não digitou um número válido")
            break;
    }
    console.log(result)
    rep = prompt("Se você quiser fazer mais uma conta digite 1, se quiser sair digite outro número")

}while(rep == 1)
}

calculadora()                           