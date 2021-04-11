/*39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/
let vetorA = [1,3,5,7,9]
let vetorB = [2,4,6,8,0]

function trocaElemento(vetorA,vetorB){
    for(i=0;i<vetorA.length;i++){
        vetorA[i] = vetorB[i] + vetorA[i] 
        vetorB[i] = vetorA[i] - vetorB[i] 
        vetorA[i] = vetorA[i] - vetorB[i] 

    }
    console.log('Vetor A: ',vetorA)
    console.log('Vetor B: ',vetorB)
}

trocaElemento(vetorA,vetorB)
