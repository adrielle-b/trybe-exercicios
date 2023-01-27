// 1
function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
      console.log('Idade dentro do for:', idade)
    }

  }
  imprimeIdade();

// 2
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa.nome ='Luna',
  pessoa.idade = 19
 
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);
  
  // 3
  let favoriteFood = 'Lasanha';
  favoriteFood = 'Hamburguer';
  console.log(favoriteFood);

  // 4
  const nome = 'Adriana';
  const lastName = 'Soares';
  console.log(`Olá ${nome} ${lastName}!`);
  function soma(a,b) {
    let resultado = a + b;
    return resultado;
  }
  let a = 3;
  let b = 5;
  console.log(`O resultado da soma de ${a} + ${b} é ${soma(a,b)}`);
  
  // 5
const numeroAleatorio = () => (Math.random());
console.log(numeroAleatorio());

// 6
 const hello = (nome) => (`Olá, ${nome}!`)
console.log(hello('Dri'));

// 7
let nome1 = 'Ivan';
  let sobrenome = 'Pires';
  const nomeCompleto = (nome1 , sobrenome) => (`${nome1} ${sobrenome}`);
  console.log(nomeCompleto(nome1, sobrenome));

// 8
let speed = 90;
const speedCar = (speed) => ((speed >= 120) ? 'Você ultrapassou o limite de velocidade' : 'Você está na velocidade permitida'
  );
console.log(speedCar(speed));

