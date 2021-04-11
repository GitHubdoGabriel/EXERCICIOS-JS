/*36) ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5*/
var vetor = [1,4,2,7,5,8,6]

function multiplicaParam(vetor,param2){
    novoVetor = []
    for(i=0;i<vetor.length;i++){
        novoVetor[i]=vetor[i]*param2
    }
    return novoVetor
}

function multiplicaParam2(vetor,param2){
    novoVetor2 = []
    j=0
    for(i=0;i<vetor.length;i++){
        if(vetor[i]>5){
            novoVetor2[j]=vetor[i]*param2
            j++
        }
        
    }
    return novoVetor2

}

console.log(multiplicaParam(vetor,10))
console.log(multiplicaParam2(vetor,10))