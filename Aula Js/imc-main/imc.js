altura = parseFloat(prompt("Qual o seu altura em metro?"))
peso = parseFloat(prompt("Qual o seu peso em kg?"))
imc = peso/(altura*altura)
if(imc<18.5){
    alert("O seu IMC e de " + imc + ". Você está magro" )
}
else if(18.5 >= imc && imc<25){
    alert("O seu IMC e de " + imc + ". Você está no peso normal" )
}
else if(25 >= imc && imc <30){
    alert("O seu IMC e de " + imc + ". Você está no sobrepeso no grau de obesidade I" )
}
else if(30 >= imc && imc <34){
    alert("O seu IMC e de " + imc + ". Você está obeso no grau de obesidade II" )
}
else{
    alert("O seu IMC e de " + imc + ". Você está em obesidade grave no grau de obesidade III" )
}