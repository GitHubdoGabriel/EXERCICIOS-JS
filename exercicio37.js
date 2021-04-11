/*37) ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos ,
bem como a soma dos elementos.*/
function progreArit(n,a1,r){
    vetorA =[]
    totalA = 0
    for(i=0;i<n;i++){
        vetorA[i] = a1
        totalA += vetorA[i]
        a1 += r
               
    }
    console.log(vetorA)
    console.log('A soma dos elementos é: ',totalA)
}
function progreGeo(n,a1,r){
    vetorG =[]
    totalG = 0
    for(i=0;i<n;i++){
        vetorG[i] = a1
        totalG += vetorG[i]
        a1 *= r
    }
    console.log(vetorG)
    console.log('A soma dos elementos é: ',totalG)
}

progreArit(4,4,3)
console.log('----------------')
progreGeo(4,4,3)