/*33) ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.*/
let vetorInteiro = [1,2,3,4]
let vetorString = ['Cachorro','Gato','Galinha','Rato']
let vetorDouble = [1.4,2.7,5.8,6.9]

function concatenaArray(vetorInteiro,vetorString,vetorDouble){
    console.log(uniao1 = vetorInteiro.concat(vetorString,vetorDouble))
    console.log(uniao2 = vetorString.concat(vetorInteiro,vetorDouble))
}

concatenaArray(vetorInteiro,vetorString,vetorDouble)