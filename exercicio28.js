/*28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares*/
var vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
var par=0
var impar=0
for (var cont = 0; cont in vetor; cont++){
    if(vetor[cont]%2==0){
        par++
    }
    else if(vetor[cont]%2==1){
        impar++
    }

}
console.log('Pares: ',par)
console.log('impares: ',impar)