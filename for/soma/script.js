let res, rf = 0
 res = Number(prompt("Digite o número de inicio: "))
for (let n = 1; n <= 20; n++) {
    console.log(res)
    res = res + res+1
    rf = rf + res
}
console.log("A soma de todos os número e iqual a: " + rf)