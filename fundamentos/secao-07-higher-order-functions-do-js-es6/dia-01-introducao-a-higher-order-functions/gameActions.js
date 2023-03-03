const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const danoDoDragon = (dragao) => {
    const força = dragao.strength;
    const dano = Math.floor(Math.random() * (força - 15 + 1) + 15);
    return dano;
  }
  console.log(danoDoDragon(dragon));

  const danoDoWarrior = (warrior) => {
    const forçaMin = warrior.strength;
    const forçaMax = forçaMin * warrior.weaponDmg;
    const dano = Math.floor(Math.random() * (forçaMax- forçaMin + 1) + forçaMin);
    return dano;
  };
  console.log(danoDoWarrior(warrior));