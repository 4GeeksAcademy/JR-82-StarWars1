import React from 'react';
import { Link } from 'react-router-dom';
import useGlobalReducer from '../hooks/useGlobalReducer.jsx';

const CardPlanets = ({ uid, name, terrain, population }) => {
  const { dispatch } = useGlobalReducer();

  const handleLearnMore = async () => {
    const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
    const data = await response.json();
    console.log(data);
  };

    const addFavorite = () => {
    dispatch({
      type: "ADD_FAVORITE",
      payload: { uid, name, type: "planets" }
    });
  };

  return (
    <div className="card-planets" style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      width: '300px',
      backgroundColor: '#4d69abff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      fontFamily: 'sans-serif',
      padding: '12x',
      margin: '12px',
    }}>
      <div style={{ padding: '0px' }}>
        <img src="" alt="" />
        <div style={{ padding: '16px'}}>
          <div>
            <h3>{name}</h3>
            <p>Terrain: {terrain}</p>
            <p>Population: {population}</p>
            <Link to={`/details/planets/${uid}`}>
              <button>Learn More</button>
            </Link>
            <button onClick={() => addFavorite()}>Favorite</button>
          </div>
        </div>
      </div>
    </div>);
};

export default CardPlanets;