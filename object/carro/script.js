let carro = {}
let carrocaro = {
     valor: 0
}
let rep

do {

carro.marca = prompt("Qual a marca do carro:")
carro.modelo = prompt("Qual o modelo:")
carro.ano = prompt("Qual o ano:")
carro.valor = prompt("Qual o valor:")

if(carro.valor>carrocaro.valor){
    carrocaro.marca = carro.marca
    carrocaro.modelo = carro.modelo
    carrocaro.ano = carro.ano
    carrocaro.valor = carro.valor
}

rep = Number(prompt("Se você quiser adicionar mais um carro digite 1, se não quiser digite outro número:"))

} while (rep == 1);
console.log(carrocaro);
