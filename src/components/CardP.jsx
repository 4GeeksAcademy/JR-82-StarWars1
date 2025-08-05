import React from 'react';
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const CardPeople = ({ uid, name, gender, eyeColor, hairColor }) => {
  const { dispatch } = useGlobalReducer();

  const addFavorite = () => {
    dispatch({
      type: "ADD_FAVORITE",
      payload: { uid, name, type: "people" }
    });
  };

  return (
     <div className="card-people" style={{
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '300px',
    backgroundColor: '#4d69abff',
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
        <button onClick={addFavorite}>Favorite</button>
      </div>
    </div>
  </div>
  );
};

export default CardPeople;