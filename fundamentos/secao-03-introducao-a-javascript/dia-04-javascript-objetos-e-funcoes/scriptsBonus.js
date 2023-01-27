//Exercicio Bonus
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
let pares = [];

function arrayOfNumbers (vector){

    for(let lista=0; lista < vector.length; lista += 1){
        for(let sublista=0; sublista < vector[lista].length; sublista += 1){
            if (vector[lista][sublista]%2 === 0){
                pares.push(vector[lista][sublista]);
            }
        }
    }
    return pares;
}
console.log (arrayOfNumbers(vector));


