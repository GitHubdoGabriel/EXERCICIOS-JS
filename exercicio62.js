/*62)Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.*/

function daSorte(num){
    arrayNum = [1,2,3,4,5,6,7,8,9,10]
    valor = Math.random(arrayNum)*10
    valor = valor.toFixed(0)
    if(num == valor){
        return `Parabens! O número sorteado foi ${valor}`
    }
    else return `Que pena! O número sorteado foi ${valor}`
}

console.log(daSorte(8))