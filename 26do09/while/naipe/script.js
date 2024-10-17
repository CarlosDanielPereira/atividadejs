let naipe, num, naipef, rep = 0
let n = Number(prompt("Quantas cartas você quer tirar do baralho"))
while (rep < n){
    naipe = parseInt(Math.random() * 4 + 1)
    switch (naipe) {
        case 1:
            naipef = "Copas"
            break;
    
        case 2:
            naipef = "Ouro"
            break;

        case 3:
            naipef = "Espadas"
            break;

        case 4:
            naipef = "Pausa"
            break; 
           
    }
    num = parseInt(Math.random() * 10 + 1)

    console.log("A sua carta é um "+ num + " de " + naipef)
    rep++
}