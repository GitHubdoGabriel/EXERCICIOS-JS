/*38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/
function somaParam(inicio = 0, fim = 100){
    if (inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim        
    }
    let vetor = []
    for(i=0;inicio<=fim;i++){
        vetor[i] = inicio

        if(inicio % 2 == 1){
            console.log(inicio)
        }
        inicio++
    }
    console.log(vetor)
    
}

somaParam(19,3)