const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const telefone = order.phoneNumber;
    const customerName = order.name;
    const street = order.address.street;
    const number = order.address.number;
    const ap = order.address.apartment;

    return `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${telefone}, R ${street}, N°: ${number}, AP: ${ap}`;
  };
  
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  const novoComprador = order.name = 'Luiz Silva';
  const novoTotal = order.payment.total = '50';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;

  return `Olá ${novoComprador}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${novoTotal},00.`
  };
  
  console.log(orderModifier(order));

