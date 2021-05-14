/*58)Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas. Crie uma função que receba um array de produtos e retorne o total das despesas.*/

function somaDespesas(despesas){
    total = despesas.reduce((a,b) => a + b.preco, 0)
    return total
}
despesasTotais = [{nome: "Jornal online", categoria: "Informação", preco: 90},
{nome: "Cinema", categoria: "Entretenimento", preco: 150},
{nome: "Combustivel", categoria: "Carro", preco: 250},
{nome: "Seguro", categoria: "Carro", preco: 150}]
console.log(somaDespesas(despesasTotais))