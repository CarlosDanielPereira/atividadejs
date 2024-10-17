let livro1 = {}, livro2 = {}

livro1.nome = prompt("Digite o nome do primeiro livro:")
livro1.autor = prompt("Digite o nome do autor do primeiro livro:")
livro1.ano = prompt("Digite o ano de publicação do primeiro livro:")

let antigo = livro1.nome

livro2.nome = prompt("Digite o nome do segundo livro:")
livro2.autor = prompt("Digite o nome do autor do segundo livro:")
livro2.ano = prompt("Digite o ano de publicação do segundo livro:")

if(livro1.ano > livro2.ano){
    antigo = livro2.nome
}

console.log(`O livro mais antigo e o ${antigo}`);

if (livro1.nome == "estudando programação" ||livro2.nome == "estudando programação") {
    console.log("Sim existe um livro com o nome estudando programação");
} 

else {
    console.log("Não existe um livro com o nome estudando programação");
}

if (livro1.autor == livro2.autor) {
    console.log("Os autores dos dois livros são o mesmo");
    
} 
