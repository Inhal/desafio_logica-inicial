let nomeDoHeroi = "Bob"
let QuantidadeDeXP = 8914
let nivel

if (QuantidadeDeXP<=1000) {
    nivel = "ferro"

}else if( QuantidadeDeXP<=2000){
    nivel = "bronze"

}else if(QuantidadeDeXP<=5000){
    nivel = "prata"

}else if(QuantidadeDeXP<=7000){
    nivel = "ouro"

}else if(QuantidadeDeXP<=8000){
    nivel = "platina"
}else if (QuantidadeDeXP<=9000){
    nivel = "ascendente"

}else if(QuantidadeDeXP<=10000){
    nivel = "imortal"

}else{
    nivel = "radiante"
}

console.log(`O heroi de nome ${nomeDoHeroi} esta no nivel ${nivel}`);











