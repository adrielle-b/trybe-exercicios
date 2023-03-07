const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
    // bornIn: nascido em
  ];
  
  const filterPeople = () => {
    const nasceramNoSeculo20 = people.filter((pessoa) => 
        pessoa.bornIn >= 1901 && pessoa.bornIn <= 2000 && pessoa.nationality === 'Australian');
    return nasceramNoSeculo20;
  };
  console.log(filterPeople());