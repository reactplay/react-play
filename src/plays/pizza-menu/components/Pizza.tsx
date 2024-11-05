import React from 'react';

interface PizzaProps {
  pizzaObj: {
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    soldOut: boolean;
  };
}

const Pizza: React.FC<PizzaProps> = ({ pizzaObj }) => {
  return (
    <li className={`pizza-menu_pizza ${pizzaObj.soldOut ? 'pizza-menu_sold-out' : ''}`}>
      <img alt={pizzaObj.name} src={pizzaObj.photoName} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : `$${pizzaObj.price}`}</span>
      </div>
    </li>
  );
};

export default Pizza;
