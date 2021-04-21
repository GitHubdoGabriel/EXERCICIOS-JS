/*43) Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$X", em que X é o quanto o funcionário ganhou no mês.*/
function pagamento(qtdHoras, valorHoras){
    salario = qtdHoras * valorHoras
    return `Salário é igual a R$${salario}`
}

console.log(pagamento(10,50))
console.log(pagamento(1,50))
console.log(pagamento(30,75))