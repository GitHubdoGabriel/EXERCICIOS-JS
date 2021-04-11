/*16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valoresnuméricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/
function calculadora(valor1,operacao, valor2){
    switch(operacao){
        case '+':
            resultado=valor1 + valor2
            console.log('O resultado desta operação é: ',resultado)
            break
        case '-':
            resultado=valor1 - valor2
            console.log('O resultado desta operação é: ',resultado)
            break
        case '*':
            resultado=valor1 * valor2
            console.log('O resultado desta operação é: ',resultado)
            break
        case '/':
            resultado=valor1 / valor2
            console.log('O resultado desta operação é: ',resultado)        
            break
        default:
            console.log('Insira um operador valido.')    
    }
}

calculadora(10,'*',10)