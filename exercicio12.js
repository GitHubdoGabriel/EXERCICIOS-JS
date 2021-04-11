/*12)​ Faça um algoritmo que calcule o fatorial de um número*/
function fatorial(valor){
    resultado = 1
    for(i=1;i<=valor;i++){
        resultado *= i
        
    }
    return resultado

}

console.log(fatorial(10))