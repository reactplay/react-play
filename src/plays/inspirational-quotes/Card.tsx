import React from 'react';
import { CardProps } from './Types';
import './card.css';

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card__content">
          <p className="card__info">
            <i>''{props.quote}''</i>
          </p>
          <h3 className="card__author">... {props.author}</h3>
          <button className="card__button" onClick={props.onClick}>
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
