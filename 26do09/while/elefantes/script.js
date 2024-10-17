let ele = Number(prompt("Quantos elefantes tem na sala?"))
let rep = 1
while(rep < ele) {
    if(rep== 1){
        console.log(rep+" elefante incomonda muita gente, "+(rep +1)+" elefantes incomodam muito mais")
    }
    else{
        console.log(rep+" elefantes incomodam muita gente, "+(rep +1)+" elefantes incomonda muito mais")
    }
    rep++
}