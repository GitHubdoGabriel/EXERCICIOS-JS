/*64)Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.*/

function contaCaractere(caractere, palavra){
    resultado = []
    for (var letra = 0; letra < palavra.length; letra++) {
        if(caractere == palavra[letra]){
            resultado.push (palavra[letra])
        }
    }
    return resultado.length     
}

console.log(contaCaractere('a','Armando'))