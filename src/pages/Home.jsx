import React, { useState, useEffect } from "react";
import CardPeople from "../components/CardP.jsx";
import CardPlanets from "../components/CardPlanet.jsx";

export const Home = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);

  // Define fetchAllPeople outside useEffect
  const fetchAllPeople = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/people");
      if (response.ok) {
        const data = await response.json();
        // Limit to first 5 people
        const limitedResults = data.results.slice(0, 5);
        const detailedPeople = await Promise.all(
          limitedResults.map(async (person) => {
            const detailRes = await fetch(person.url);
            const detailData = await detailRes.json();
            return {
              uid: person.uid,
              name: detailData.result.properties.name,
              gender: detailData.result.properties.gender,
              eyeColor: detailData.result.properties.eye_color,
              hairColor: detailData.result.properties.hair_color,
            };
          })
        );
        setPeople(detailedPeople);
      } else {
        console.error("Failed to fetch people data");
      }
    } catch (error) {
      console.error("Error fetching people data:", error);
    }
  };

   const fetchAllPlanets = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/planets");
      if (response.ok) {
        const data = await response.json();
        const limitedResults = data.results.slice(0, 5);
        const detailedPlanets = await Promise.all(
          limitedResults.map(async (planet) => {
            const detailRes = await fetch(planet.url);
            const detailData = await detailRes.json();
            console.log("UID:", planet.uid); // <-- Log here
            return {
              uid: planet.uid,
              name: detailData.result.properties.name,
              terrain: detailData.result.properties.terrain,
              population: detailData.result.properties.population,
            };
          })
        );
        setPlanets(detailedPlanets);
      } else {
        console.error("Failed to fetch planets data");
        console.log("UID:", uid);
      }
    } catch (error) {
      console.error("Error fetching planets data:", error);
    }
  };



  useEffect(() => {
    fetchAllPeople();
    fetchAllPlanets();
  }, []);


  return (
   <div className="scrollmenu">
   <h2>Characters</h2>
      {people.map(person => (
	   <CardPeople
          key={person.uid}
          uid={person.uid}
          name={person.name}
          gender={person.gender}
          eyeColor={person.eyeColor}
          hairColor={person.hairColor}
        />
      ))}
      <br />
      <br />
      <h2>Planets</h2>
      {planets.map(planet => (
        <CardPlanets
          key={planet.uid}
          uid={planet.uid}
          name={planet.name}
          terrain={planet.terrain}
          population={planet.population}
        />
      ))}
    </div>
  );
};