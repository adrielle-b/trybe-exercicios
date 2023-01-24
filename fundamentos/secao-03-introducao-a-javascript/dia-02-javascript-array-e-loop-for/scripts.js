//Exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 0; i < numbers.length; i += 1) {
    console.log (numbers[i])
}

//Exercicio 2
let soma= 0;
for (i = 0; i < numbers.length; i += 1) {
    soma += numbers[i]
}
    console.log (soma)

//Exercicio 3
let somaDaMedia = 0;
let media = 0;
for (i = 0; i < numbers.length; i += 1){
    somaDaMedia += numbers[i]
}
media = somaDaMedia/numbers.length;
    console.log(media)

//Exercicio 4
if (media > 20){
    console.log('Valor maior que 20')
}
else {
    console.log ('Valor menor ou igual a 20')
}

//Exercicio 5
let maior= numbers[0];
for (i = 0; i < numbers.length; i += 1){
    if (numbers[i] > maior ){
        maior = numbers[i]
    }
}
    console.log (maior)

//Exercicio 6
let numerosImpares= []

for (i = 0; i < numbers.length; i += 1){
    if(numbers[i]%2 !== 0){
        numerosImpares.push(numbers[i])
    }
}
    if(numerosImpares === 0){
        console.log('Nenhum valor ímpar encontrado')
    }
    else {
        console.log (numerosImpares.length)
    }
    
//Exercicio 7
let menorValor= numbers[0];

for(i = 0; i < numbers.length; i += 1){
    if(numbers[i] < menorValor){
        menorValor= numbers[i]
    }
}
    console.log(menorValor)

//Exercicio 8
let array = [];

for(i = 1; i <= 25; i += 1){
    array.push (i)
}
    console.log(array)

//Exercicio 9

for(i= 0; i < array.length; i += 1){
    console.log(array[i] / 2)
}