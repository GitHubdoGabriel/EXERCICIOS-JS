/*55)Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares.*/

function retornaArraypar(arraynum){
    pares = []
    for(i=0;i<arraynum.length;i++){
        if(arraynum[i]%2 === 0){
            pares.push(arraynum[i])
        }
    }
    return pares
}

console.log(retornaArraypar([1,2,3,12,4,5,0,6,7,8,10,14]))