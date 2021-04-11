/*30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/
function maioreMenor(){
    var vetor = [48,9,10,11,125,1,2,36,7,16,17,18,19,20,21]
    console.log(vetor.sort((a,b) => a>b ? 1:-1))
    console.log('O menor valor é: ',vetor[0])
    console.log('O maior valor é: ',vetor[vetor.length-1])

}

maioreMenor()