let pessoas, lucro, lucrof = 0, ingf = 0
let ing = 150
pessoas = parseInt(prompt("Quantas pessoas estão previstas de ir:"))
while (ing > 0) {
    lucro = (ing * pessoas) - 1000

    if(lucro > lucrof) {
        lucrof = lucro
        ingf = ing
    }

    pessoas = pessoas + 50
    ing -= 10
}
alert("O maior lucro possivel será de R$" + lucrof + " vendendo o ingresso a R$" + ingf)
