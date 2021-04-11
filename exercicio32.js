/*32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/
var vetor = [48,9,10,11,125,1,2,36,7,16,17,18,19,20,21]

function calculaMedia(vetor){
    total = 0
    for(i=0;i<vetor.length;i++){
        total += vetor[i]
    }
    console.log(total /= vetor.length)
    
}

calculaMedia(vetor)