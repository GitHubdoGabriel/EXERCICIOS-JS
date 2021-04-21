/*45)Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.*/
function maiorouIgual(num1, num2){
    if(num1 === num2){
        resultado = num1 === num2
        return resultado
    }
    else if(num1 > num2){
        resultado = true
        return resultado
    }
    else if(num1 < num2){
        resultado = false
        return resultado
    }
    else{
        return false
    }

}
console.log(maiorouIgual(0,0))
console.log(maiorouIgual(0,"0"))
console.log(maiorouIgual(5,1))