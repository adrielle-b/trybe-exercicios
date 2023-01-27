//Exercicio 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log ('Bem-vinda, ' + info.personagem);

//Exercicio 2
info.recorrente = 'Sim';

//Exercicio 3
for(let chaves in info){
  console.log(chaves);
}

//Exercicio 4
for(let valores in info){
  console.log(info[valores]);
}

//Exercicio 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let chaves2 in info) {
  if (chaves2 === 'recorrente' &&
    info[chaves2] === 'Sim' &&
    info2[chaves2] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[chaves2] + ' e ' + info2[chaves2]);
  }
}

//Exercicio 6 - foguete

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de '+ leitor.nome + ' '+ leitor.sobrenome +
' se chama: '+ leitor.livrosFavoritos[0].titulo)

//Exercicio 7
leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
}) 


console.log('Julia tem '+ leitor.livrosFavoritos.length+ ' livros favoritos.')