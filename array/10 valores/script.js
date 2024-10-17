let num = []

for (let i = 0; i < 10; i++) {
    num[i] = Number(prompt("Digite um número:"))
}

let intervalo = Number(prompt("Escreva o intervalo de 0 a 9:"))

while(intervalo <= 9){
    console.log(num[intervalo])
    intervalo++
}