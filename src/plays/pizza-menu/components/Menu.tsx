import React from 'react';

import Pizza from './Pizza';
import focaccia from '../assets/focaccia.jpg';
import margherita from '../assets/margherita.jpg';
import spinaci from '../assets/spinaci.jpg';
import funghi from '../assets/funghi.jpg';
import salamino from '../assets/salamino.jpg';
import prosciutto from '../assets/prosciutto.jpg';

const Menu = () => {
  const pizzaData = [
    {
      name: 'Focaccia',
      ingredients: 'Bread with italian olive oil and rosemary',
      price: 6,
      photoName: focaccia,
      soldOut: false
    },
    {
      name: 'Pizza Margherita',
      ingredients: 'Tomato and mozarella',
      price: 10,
      photoName: margherita,
      soldOut: false
    },
    {
      name: 'Pizza Spinaci',
      ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
      price: 12,
      photoName: spinaci,
      soldOut: false
    },
    {
      name: 'Pizza Funghi',
      ingredients: 'Tomato, mozarella, mushrooms, and onion',
      price: 12,
      photoName: funghi,
      soldOut: false
    },
    {
      name: 'Pizza Salamino',
      ingredients: 'Tomato, mozarella, and pepperoni',
      price: 15,
      photoName: salamino,
      soldOut: true
    },
    {
      name: 'Pizza Prosciutto',
      ingredients: 'Tomato, mozarella, ham, arugula, and burrata cheese',
      price: 18,
      photoName: prosciutto,
      soldOut: false
    }
  ];

  return (
    <main className="pizza-menu_menu">
      <h2>Our menu</h2>

      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven,
            all organic, all delicious.
          </p>

          <ul className="pizza-menu_pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

export default Menu;
