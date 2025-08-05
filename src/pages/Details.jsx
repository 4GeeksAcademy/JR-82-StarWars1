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
<span className="description">
      <h1 className="my-4">Details of {item.name}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consectetur porro
         repellendus inventore similique, 
        esse id nulla, vitae temporibus cum asperiores non culpa rem eveniet explicabo sequi
         repellat est ad.</p>
         </span>
      {type === "people" ? (
        <>
          <div className="planet-details-row">
            <div>
              <strong>Name:</strong>
              <div>{item.name}</div>
            </div>
            <div>
              <strong>Birth Year:</strong>
              <div>{item.birth_year}</div>
            </div>
            <div>
              <strong>Gender:</strong>
              <div>{item.gender}</div>
            </div>
            <div>Height: <div>{item.height}</div></div>
            <div>Skin Color: <div>{item.skin_color}</div></div>
          </div>
        </>
      ) : (
        <>
          <div className="planet-details-row">
            <div>
              <strong>Name:</strong>
              <div>{item.name}</div>
            </div>
            <div>
              <strong>Terrain:</strong>
              <div>{item.terrain}</div>
            </div>
            <div>
              <strong>Population:</strong>
              <div>{item.population}</div>
            </div>
            <div>
              <strong>Climate:</strong>
              <div>{item.climate}</div>
            </div>
            <div>
              <strong>Orbital Period:</strong>
              <div>{item.orbital_period}</div>
            </div>
            <div>
              <strong>Diameter:</strong>
              <div>{item.diameter}</div>
            </div>
            <div>
              <strong>Rotation Period:</strong>
              <div>{item.rotation_period}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
