const sum = (...numeros) => {
return numeros.reduce((acumulador, numero) => acumulador + numero);
};
console.log(sum(4,5,6));