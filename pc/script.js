let atualiza
let computador = {
    modelo: "",
    cpu: "",
    ram: "",
    hd: ""
}

function preencheDados(pc){
    pc.modelo = prompt("Qual o modelo do computador?")
    pc.cpu = prompt("Qual o processador?")
    pc.ram = prompt(" Quanto de RAM ele tem?")
    pc.hd = prompt("Qual o tamanho do Hd?")
}

function imprimeDados(){
    console.log(computador)
}

function atualizaPC(pc){
    let peça
    do{
    atualiza = prompt("Você deseja atualizar o seu pc(sim ou nao)")
    if( atualiza == "sim"){
        peça = prompt("Você deseja atualizar o modelo, processador, ram ou hd")
        switch (peça) {
            case "modelo":
                pc.modelo = prompt("Qual o modelo do computador?")
                break;
        
            case "processador":
                pc.processador = prompt("Qual o processador?")
                break;
            
            case "ram":
                pc.ram = prompt("Quanto de RAM ele tem?")
                break;

            case "hd":
                pc.hd = prompt("Qual o tamanho do Hd?")
                break;
        }
        console.log(computador)
    }
    }while(atualiza == "sim")
    

}

preencheDados(computador)
imprimeDados()
atualizaPC(computador)