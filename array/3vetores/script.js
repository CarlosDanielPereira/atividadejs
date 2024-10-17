let A = [], B = [], C = []
for (let i = 0; i < 5; i++) {
    A[i] = Number(prompt("Digite um número:"))

    B[i] = parseInt(Math.random () * 5 + 1)

    C[i] = A[i] * B[i]
}

for(let rep = 0; rep < 5; rep++){
    console.log(C[rep])
}