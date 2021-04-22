/*51)Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array*/
let a = [8,1,9,3,8,9,7,3]
function criaArray(conjunto){
    newArray = []
    newArray.push(conjunto[0])
    newArray.push(conjunto[conjunto.length-1])
    return newArray
}
console.log(criaArray(a))
console.log(criaArray([7,14,"teste"]))