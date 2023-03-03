const checkerNum = (myNum, num) => myNum === num;

const sorteio = (Mynum, checkerNum) => {
    const numSorteado = Math.floor((Math.random()* 5));

    return checkerNum(Mynum, numSorteado) ? 'Parabéns, você ganhou' : 'Tente novamente';
};

console.log(sorteio(3,checkerNum));