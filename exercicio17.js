/*17)​ Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano     Aumento
A           10%
B           15%
C           20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/
function planoAumento(plano, salario){
    switch(plano){
        case 'a':
            salarioNovo= salario+(salario *= 0.1)
            console.log('Seu novo salario sera: R$'+salarioNovo)
            break
        case 'b':
            salarioNovo= salario+(salario *= 0.15)
            console.log('Seu novo salario sera: R$'+salarioNovo)
            break
        case 'c':
            salarioNovo= salario+(salario *= 0.2)
            console.log('Seu novo salario sera: R$'+salarioNovo)
            break
        default:
            console.log('Plano invalido')
            
    }
}

planoAumento('c',1000)