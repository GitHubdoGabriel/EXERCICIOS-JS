/*61) Criar uma função que receba um array de números e retorne o menor número desse array.*/

function menorArray(arrayNum){
    resultado = arrayNum.sort((a, b) => a > b ? 1 : -1)
    return resultado[0]
}

console.log(menorArray([12,4,5,6,7,8,10,14]))