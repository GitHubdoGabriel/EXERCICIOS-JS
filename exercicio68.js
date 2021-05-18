/*68)Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.*/

function contaCasas(arrayNum, contador){
    resultado = []
    for(i=0; i<arrayNum.length; i++){
        condutor = String(arrayNum[i])
        if(contador == condutor.length){
            resultado.push(arrayNum[i])
        }

    }
    return resultado
}

console.log(contaCasas([38, 2, 365, 10, 11, 5, 9, 1, 125], 3))