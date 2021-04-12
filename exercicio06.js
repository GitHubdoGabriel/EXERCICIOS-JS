/*06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/
function jSimples(capitalinicial1, taxadejuros1, tempodeaplicacao1){
    taxadejuros1 /= 100
    juros1 = (capitalinicial1 * taxadejuros1) * tempodeaplicacao1
    total1 = capitalinicial1 + juros1
    console.log("O montante em juros simples será: R$"+ total1.toFixed(2))
}
function jComposto(capitalinicial, taxadejuros, tempodeaplicacao){
    taxadejuros /= 100
    montante = capitalinicial * (1+taxadejuros) ** tempodeaplicacao
    console.log("O montante em juros simples será: R$"+ montante.toFixed(2))
}

jSimples(1000, 10, 3)
jComposto(1000, 10, 3)
