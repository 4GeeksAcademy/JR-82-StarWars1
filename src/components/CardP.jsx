import React from 'react';
import { Link } from "react-router-dom";

const CardPeople = ({ uid, name, gender, eyeColor, hairColor }) => {
  const handleLearnMore = async () => {
    const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
    const data = await response.json();
    console.log(data);
    // You can navigate or set state here if needed
  };

  return (
     <div className="card-people" style={{
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '300px',
    backgroundColor: '#435a8eff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    fontFamily: 'sans-serif',
    padding: '12px',
    margin: '12px',
  }}>
      <div>
     <div style={{ padding: '0px' }}>
        <img src="" alt="" />
        <h3>{name}</h3>
        <p>Gender: {gender}</p>
        <p>Eye Color: {eyeColor}</p>
        <p>Hair Color: {hairColor}</p>
        <Link to={`/details/people/${uid}`}>
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default CardPeople;