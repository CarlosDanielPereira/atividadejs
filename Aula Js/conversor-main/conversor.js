let dinheiro = parseFloat(prompt("Quantos Reais você quer converter(Utilize ponto final ao invés de virgúla):"))
let a = parseFloat(prompt("Se você quiser converter de Real para Euro digite 1, se voce quiser converter para Dólar digite 2, oud digite 3 se você quiser converter para os dois"))
let euro = dinheiro/6.07
let dol = dinheiro/5.46

if(a == 1){
    alert("Essa quantidade de reais dá €" + euro)
}
else if(a == 2){
    alert("Essa quantidade de reais dá $" + dol)
}
else if(a == 3){
    alert("Essa quantidade de reais dá $" + dol + "ou €" + euro)
}
else{
    alert("Você não escreveu um número válido")
}