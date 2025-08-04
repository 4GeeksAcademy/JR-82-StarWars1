import React from 'react';
import { Link } from 'react-router-dom';

const CardPlanets = ({ uid, name, terrain, population }) => {
  const handleLearnMore = async () => {
    const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="card-planets" style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      width: '300px',
      backgroundColor: '#435a8eff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      fontFamily: 'sans-serif',
      padding: '12x',
      margin: '12px',
    }}>
      <div style={{ padding: '0px' }}>
        <img src="" alt="" />
        <div style={{ padding: '16px'}}>
          <h3>{name}</h3>
          <p>Terrain: {terrain}</p>
          <p>Population: {population}</p>
          <Link to={`/details/planets/${uid}`}>
            <button>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardPlanets;