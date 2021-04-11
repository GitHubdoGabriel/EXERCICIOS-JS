/*01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/
function funcao(valor1, valor2) {
    soma=valor1+valor2
    divisao=valor1/valor2
    subtracao=valor1-valor2
    console.log("A soma destes valores é: "+soma )
    console.log("A divisão destes valores é: "+ divisao)
    console.log("A subtração destes valores é: "+ subtracao)
    console.log("A multiplicação destes valores é: "+ valor1*valor2)
}

funcao(5, 5)