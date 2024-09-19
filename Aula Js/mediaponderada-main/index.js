let nota1 = parseFloat(prompt("Qual a sua nota?"))
let peso1 = parseFloat(prompt("Qual o peso dessa nota?"))
let nota2 = parseFloat(prompt("Qual a sua nota?"))
let peso2 = parseFloat(prompt("Qual o peso dessa nota?"))
let nota3 = parseFloat(prompt("Qual a sua nota?"))
let peso3 = parseFloat(prompt("Qual o peso dessa nota?"))
let notaf = (nota1*peso1)+(nota2*peso2)+(nota3*peso3)
let pesof = peso1+peso2+peso3
let rest = notaf/pesof
alert("A média ponderada e: " + rest)
alert(pesof)
alert(notaf)