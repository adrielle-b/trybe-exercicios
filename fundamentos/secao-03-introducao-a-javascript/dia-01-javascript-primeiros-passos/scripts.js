//Exercicio 1
const x= 40;
const y= 40;
const z= 100;

let somaDosAngulos= x + y + z;
let todosAngulosPositivos= x > 0 && y > 0 && z > 0;

if (todosAngulosPositivos){
    if(somaDosAngulos === 180){
        console.log(true)
    }
}
else {
    console.log('Erro. Ângulo inválido')
}

//Exercicio 2
const num1= 11;
const num2= 3;
const num3= 10;

if (num1%2 === 0 || num2%2 === 0|| num3%2 === 0){
    console.log(true)
}
else {
    console.log(false)
}

//Exercicio 3
const a=5;
const b=13;
const c=20;

if (num1%2 !== 0 || num2%2 !== 0|| num3%2 !== 0){
    console.log(true)
}
else {
    console.log(false)
}

//Exercicio 4
const custoDoProduto= 10;
const valorDaVenda= 20;

const imposto = custoDoProduto * (20/100);
const lucro = valorDaVenda - (custoDoProduto + imposto);

if(lucro> 0){
    console.log(lucro*1000)
}
else {
    console.log ('Erro:Valor menor que zero.')
}

//Exercicio 5
let salarioBruto= 3000;
let salarioLiquido;
let inss;
let ir;

    if(salarioBruto <= 1556,94) {
    inss= salarioBruto * (8/100)
}
    else if (salarioBruto >= 1556.95 || salarioBruto <= 2594.92 ){
        inss= salarioBruto *(9/100)
    }
    else if (salarioBruto >= 2594.93 || salarioBruto <= 5189.82){
        inss= salarioBruto *(11/100)
    }
    else if (salarioBruto > 5189.82){
        inss= 570.88
    }

    salarioLiquido = salarioBruto - inss;

    if (salarioLiquido <= 1903.98){
        ir= 0
    }
    else if (salarioLiquido >= 1903.99 || salarioLiquido <= 2826.65){
        ir= salarioLiquido * (7.5/100) - 142.80
    }
    else if (salarioLiquido >= 2826.6 || salarioLiquido <= 3751.05){
        ir= salarioLiquido * (15/100) - 354.80
    }
    else if (salarioLiquido >= 3751.06 || salarioLiquido <= 4664.68){
        ir= salarioLiquido * (22.5/100) - 636.13
    }
    else if (salarioLiquido > 4664.68){
        ir= salarioLiquido * (27.5/100) - 869.36
    }

    salarioLiquido = salarioLiquido - ir

    console.log (salarioLiquido)