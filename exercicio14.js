/*14) ​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/
function supermercado(fruta){
    switch(fruta){
        case "maca":
            console.log("Não vendemos esta fruta aqui")
            break
        case "kiwi":
            console.log("Estamos com escassez de kiwi")
            break
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo")
            break
        default:
            console.error("ERRO 404 - FRUTA NÃO RECONHECIDA")
    }

}

supermercado("maca")
supermercado("kiwi")
supermercado("melancia")
supermercado("morango")