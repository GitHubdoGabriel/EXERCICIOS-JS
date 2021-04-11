/*27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/
function calculaAltura(altura1,altura2,taxacres1,taxacres2){
    if(altura1>altura2){
        console.log('A primeira criança é maior.')
        if(taxacres1<taxacres2){
            for(anos=0;altura1>altura2;anos++){
                altura1+=taxacres1
                altura2+=taxacres2
            }
            console.log('Porém a segunda criança lhe passara em',anos,'ano(s).')

        }
        else{
            console.log('E será sempre assim.')
        }
    }
    else if(altura1<altura2){
        console.log('A segunda criança é maior.')
        if(taxacres1>taxacres2){
            for(anos=0;altura2>altura1;anos++){
                altura1+=taxacres1
                altura2+=taxacres2
            }
            console.log('Porém a primeira criança lhe passara em',anos,'ano(s).')
        }
        else{
            console.log('E será sempre assim.')
        }
    }
    else{
        console.log('A duas crianças possuem o mesmo tamanho.')
    }


}

calculaAltura(130,100,1,12)