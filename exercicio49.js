/*49)Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado*/
function repetir(param1,param2){
    repetido = []
    for(i=0;i<param2;i++){
        repetido.push(param1)
    }
    return repetido
}

console.log(repetir(7,3))
console.log(repetir("teste",3))