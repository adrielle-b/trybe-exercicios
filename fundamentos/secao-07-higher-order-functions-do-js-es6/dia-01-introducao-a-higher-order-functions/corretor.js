const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaArrays = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    if (RIGHT_ANSWERS === STUDENT_ANSWERS) {
        return 1;
    } if (STUDENT_ANSWERS === 'N.A') {
        return 0;
    }
    return -0.5;
};

const pontuacao = (RIGHT_ANSWERS, STUDENT_ANSWERS, comparacao) => {
    let total = 0;
    for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
        const comparacaoReturn = comparacao(RIGHT_ANSWERS[index], STUDENT_ANSWERS[index]);
        total += comparacaoReturn;
    }
    return `Resultado final: ${total} pontos`;
};

console.log(pontuacao(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaArrays));