import React from 'react';

const CardPeople = ({ name, gender, eyeColor, hairColor }) => (
  <div className="card-people" style={{
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    fontFamily: 'sans-serif',
    padding: '0px',
  }}>
    <div style={{ padding: '0px' }}>
      <img src="" alt="" />
      <div style={{ padding: '16px'}}>
      <h3>{name}</h3>
      <p>Gender: {gender}</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Hair Color: {hairColor}</p>
      </div>
    </div>
  </div>
);

export default CardPeople;