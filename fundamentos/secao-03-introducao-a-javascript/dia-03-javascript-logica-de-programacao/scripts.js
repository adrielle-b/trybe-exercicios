//Exercicio 1
let fatorial= 10;
let resultado=1;

for(let index=fatorial; index > 0 ; index -= 1){
resultado *= index;
}
console.log(resultado);

//Exercicio 2
let texto = 'tryber';
let textoInverso;

textoInverso= texto.split("").reverse().join("");

console.log(textoInverso);

//Exercicio 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for(let i= 0; i < array.length; i += 1){
    if(array[i].length > maiorPalavra.length){
        maiorPalavra = array[i];
    }
}   
for(let i= 0; i < array.length; i += 1){
    if(array[i].length < menorPalavra.length){
    menorPalavra= array[i];
}
}
console.log(maiorPalavra);
console.log(menorPalavra);

//Exercicio 4
let maiorPrimo= 0;
let primos = true;

for(let numeros = 2; numeros <= 50; numeros += 1){
    let primos = true;
    for(numeroDivisor= 2; numeroDivisor < numeros; numeroDivisor += 1){
        if(numeros%numeroDivisor === 0){
            primos= false;
        }
    }
if(primos){
    maiorPrimo = numeros
}
}
    console.log(maiorPrimo);


       
      