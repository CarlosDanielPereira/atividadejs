let naipe, num, naipef
let n = Number(prompt("Quantas cartas você quer tirar do baralho"))
for (let rep = 0; rep < n; rep++) {
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
           
        default:
            break;
    }
}