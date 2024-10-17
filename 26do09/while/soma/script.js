let res, rf = 0
let n = 1
 res = Number(prompt("Digite o número de inicio: "))
while (n <= 20) {
    console.log(res)
    res = res + res+1
    rf = rf + res
    n++
}
console.log("A soma de todos os número e iqual a: " + rf)