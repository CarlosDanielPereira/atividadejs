let divprincipal = document.getElementsByTagName("p")
let elementoBotaoGerar = document.getElementById("GerarAluno")

for(let paragrafo of divprincipal){
    paragrafo.innerHTML += " Boa tarde"
}

elementoBotaoGerar.addEventListener("click", ()=>{
    let nome = prompt("Digite um nome")
    let nota = prompt("Digite sua nota")
    let elementonome = document.createElement("p")
    elementonome.innerHTML = `<h2>${nome} </h2> <p>${nota} </p>`

    let elementoDivAluno = document.getElementById("aluno")
    elementoDivAluno.appendChild(elementonome)
})
