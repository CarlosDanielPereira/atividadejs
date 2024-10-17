let n, num, fat=1
n = Number(prompt("Digite um número: "))
num = 1
while(num <= n){
  
    fat = fat * num
    num++
}
alert(fat)