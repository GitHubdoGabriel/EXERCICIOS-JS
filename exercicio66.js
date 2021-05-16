/*66) Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.*/
function retiraVogais(palavra){
    resultado = ""
    for (i=0; i<palavra.length; i++){
        if(palavra[i] == "a" || palavra[i] == "A" ){}
        else if(palavra[i] == "e" || palavra[i] == "E" ){}
        else if(palavra[i] == "i" || palavra[i] == "I"){}
        else if(palavra[i] == "o" || palavra[i] == "O"){}
        else if(palavra[i] == "u" || palavra[i] == "U"){}
        else {resultado += palavra[i]}
    }  

    return resultado  
}

console.log(retiraVogais("Gabriel"))