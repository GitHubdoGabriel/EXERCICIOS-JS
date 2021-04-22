/*48)Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.*/
function multiplcar(num1, num2){
    if(num1<0 ||num2<0){
        return `Insira um numero não negativo.`
    }
    resultado = 0
    for(i=0;i<num2;i++){
        resultado += num1
    }
    return resultado
}

console.log(multiplcar(10,5))