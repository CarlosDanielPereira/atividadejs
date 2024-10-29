//Elementos HTML//

const personagens = ["Luke", "Leia", "Han Solo"]

const conteudo = document.createElement("div")
document.body.appendChild(conteudo)

for(let i=0; i <3; i++){
    let personagemAtual = document.createElement("p")
    personagemAtual.innerHTML = personagens[i]
    conteudo.appendChild(personagemAtual)
}

let nomes = document.getElementsByTagName("p")

for( let i; i<3; i++){
    nomes[i].innerHTML = "Carlos"
}