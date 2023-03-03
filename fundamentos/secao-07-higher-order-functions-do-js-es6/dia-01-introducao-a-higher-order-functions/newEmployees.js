const novoContratado = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().replace(/\s+/g, '_');
    return { nomeCompleto, email: `${email}@trybe.com`, };
};

const newEmployees = () => {
    const employees = {
      id1: novoContratado('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: novoContratado('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: novoContratado('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };
