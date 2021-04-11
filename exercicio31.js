/*31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/
vetor = [-1,-5,-6,2,3,6,8,9,-2,-5,-10,-11,-3]
function contaNegativo(vetor){
    contaNum = 0
    for(i=0;i<vetor.length;i++){
        if(vetor[i]<0){
            contaNum++
        }
        console.log(vetor[i])
    }
    console.log('Existem ',contaNum,'negativos neste array.' )

}

contaNegativo(vetor)