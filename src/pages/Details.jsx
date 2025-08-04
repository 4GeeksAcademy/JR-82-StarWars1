// Import necessary hooks and components from react-router-dom and other libraries.
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// Define and export the Details component which displays individual item details.
export const Details = () => {
  const { type, uid } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
      const data = await response.json();
      if (data.result) {
        setItem(data.result.properties);
      } else {
        setItem(null);
      }
    };
    fetchItem();
  }, [type, uid]);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="container text-center">
      <hr className="my-4" />  {/* A horizontal rule for visual separation. */}

      {/* A Link component acts as an anchor tag but is used for client-side routing to prevent page reloads. */}
      <Link to="/">
        <span className="btn btn-primary btn-lg" role="button">
          Back home
        </span>
      </Link>

      <h2>{item.name}</h2>
      {type === "people" ? (
        <>
        <div className="card-details-people">
         <div>Name: <div>{item.name}</div></div>
          <div>Birth Year: <div>{item.birth_year}</div></div>
          <div>Gender: <div>{item.gender}</div></div>
          <div>Height: <div>{item.height}</div></div>
          <div>Skin Color: <div>{item.skin_color}</div></div>
        </div>
        </>
      ) : (
        <>
        <div className="card-details-planets">
          <div>Terrain: <div>{item.terrain}</div></div>
          <div>Population: <div>{item.population}</div></div>
          <div>Climate: <div>{item.climate}</div></div>
          <div>Population: <div>{item.population}</div></div>
          <div>Orbital Period: <div>{item.orbital_period}</div></div>
          <div>Diameter: <div>{item.diameter}</div></div>
          <div>Rotation Period: <div>{item.rotation_period}</div></div>
        </div>
        </>
      )}
    </div>
  );
};
