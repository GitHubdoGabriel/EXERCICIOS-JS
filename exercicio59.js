/*59)Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário. Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.*/

function calculaMedia(arrayNum){
    total = 0
    for(i=0; i<arrayNum.length;i++){
        total += arrayNum[i]
    }
    total /= (arrayNum.length)
    return total

}

console.log(calculaMedia([2,2,2,3]))