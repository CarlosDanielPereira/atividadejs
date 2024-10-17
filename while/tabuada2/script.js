let num1 = 1, rep = 1, n

while(rep <= 9){
    while(num1 <= 10){

        n = rep * num1

        console.log(n)
        num1++
    }

    rep++
    num1 = 1
}