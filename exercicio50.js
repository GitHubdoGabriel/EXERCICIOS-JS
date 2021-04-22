/*50)Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/
function simboloMais(qtd){
    simbolo = ''
    for(i=0;i<qtd;i++){
        simbolo += '+'
    }
    return `"${simbolo}"`
}
console.log(simboloMais(2))