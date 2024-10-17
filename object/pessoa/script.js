const pessoa = {}

pessoa.nome = prompt("Qual o seu nome:")
pessoa.idade = Number(prompt("Qual a sua idade:"))
pessoa.cidade = prompt("Qual cidade você mora:")

console.log(pessoa)

let atual = Number(prompt("Se você quiser atualizar algum dado digite 1 se não quiser digite qualquer outro número:"))

while(atual == 1){
let mudar = Number(prompt("Se você quiser atualizar o nome digite 1, se você quiser mudar a cidade digite 2, e para mudar a cidade digite outro número"))
    if(mudar ==1){
    pessoa.nome = prompt("Qual o seu nome:")
    }
    else if(mudar == 2){
    pessoa.idade = Number(prompt("Qual a sua idade:"))
    }
    else{
    pessoa.cidade = prompt("Qual cidade você mora:")
    }
    console.log(pessoa)
    atual = Number(prompt("Se você quiser atualizar algum dado digite 1 se não quiser digite qualquer outro número:"))
}