/*57)Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.*/

function somaArrays(arrayNum){
    total = 0
    for(i=0; i<arrayNum.length;i++){
        total += arrayNum[i]
    }
    return total
}

console.log(somaArrays([1,2,3,12,4,5,0,6,7,8,10,14]))