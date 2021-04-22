/*53)Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro.*/
function filtrarNumeros(array1){
    array2 = []
    for(i=0; i<array1.length;i++){
        if(typeof(array1[i]) === "number"){
            array2.push(array1[i])
        }
    } 
    return array2  
}
console.log(filtrarNumeros([1,2,'js',3,4,5,'teste','cachorro']))