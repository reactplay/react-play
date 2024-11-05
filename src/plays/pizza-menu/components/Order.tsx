import React from 'react';

interface OrderProps {
  closeHour: number;
  openHour: number;
}

const Order: React.FC<OrderProps> = ({ closeHour, openHour }) => {
  return (
    <div className="pizza-menu_order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
      </p>
      <button className="pizza-menu_btn">Order</button>
    </div>
  );
};

export default Order;
