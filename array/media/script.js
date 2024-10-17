let nome = [], num = [], media, soma = 0

for (i = 0; i < 5; i++) {
    nome [i] = prompt("Qual o nome do aluno:")
    num [i]= Number(prompt("Qual a nota da prova: "))
    soma = soma + num[i]
}
media = soma / 5

for (let rep = 0; rep < 5; rep++) {
    if(media > num[rep]){
        console.log("O aluno " + nome[rep] + " tirou " + num[rep] + " com isso ficou abaixo da média")
    }
}
