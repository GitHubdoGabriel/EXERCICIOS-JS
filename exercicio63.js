/*63)Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.*/

function contaPalavras(palavras){
    contador = palavras.split(" ",palavras.length)
    resultado = contador.length
    return resultado
}

console.log(contaPalavras('Me divirto aprendendo a programar'))
console.log(contaPalavras('Sou uma frase'))

