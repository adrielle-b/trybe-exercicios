// Fonte: <https://restcountries.com/v2/all>
const countries = [
    {
        name: 'Afghanistan',
        region: 'Asia',
        currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
        capital: 'Kabul',
        population: 40218234,
        area: 652230
    },
    {
        name: 'Åland Islands',
        region: 'Europe',
        currencies: [{ code: 'EUR', name: 'Euro' }],
        capital: 'Mariehamn',
        population: 28875,
        area: 1580
    },
    {
        name: 'Albania',
        region: 'Europe',
        currencies: [{ code: 'ALL', name: 'Albanian lek' }],
        capital: 'Tirana',
        population: 2837743,
        area: 28748
    },
    {
        name: 'Algeria',
        region: 'Africa',
        currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
        capital: 'Algiers',
        population: 44700000,
        area: 2381741
    },
    {
        name: 'American Samoa',
        region: 'Oceania',
        currencies: [{ code: 'USD', name: 'United States Dollar' }],
        capital: 'Pago Pago',
        population: 55197,
        area: 199
    },
    {
        name: 'Andorra',
        region: 'Europe',
        currencies: [{ code: 'EUR', name: 'Euro' }],
        capital: 'Andorra la Vella',
        population: 77265,
        area: 468
    },
    {
        name: 'Angola',
        region: 'Africa',
        currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
        capital: 'Luanda',
        population: 32866268,
        area: 1246700
    },
    {
        name: 'Anguilla',
        region: 'Americas',
        currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
        capital: 'The Valley',
        population: 13452,
        area: 91
    }
];

const getPopulation = () => {
    const soma = countries.reduce((acumulador, country) => acumulador + country.population, 0);
    return soma;
};

const getTotalArea = () => {
    const area = countries.reduce((acumulador, country) => acumulador + country.area, 0);
    return area;
};

const longestName = () => {
    const maiorNome = countries.reduce((acumulador, country) => {
        return acumulador.name.length > country.name.length ? acumulador : country;
    })
    return maiorNome;
};

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const countA = () => {
    let contador = 0;
    const letrasNomes = names.join(' ').toLowerCase().split('');
    letrasNomes.forEach((letra) => {
        if (letra === 'a') { contador += 1 }
    })
    return contador;
};

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => {
    const nomeEMedia = students.map((student, index) => (
        {
            name: student,
            average: (grades[index].reduce((acc, notas) => acc + notas, 0) / grades[index].length),
        }
    ));
    return nomeEMedia;
};
