import React, { useState, useEffect } from "react";
import CardPeople from "../components/CardP.jsx";

export const Home = () => {
  const [people, setPeople] = useState([]);

  // Define fetchAllPeople outside useEffect
  const fetchAllPeople = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/people");
      if (response.ok) {
        const data = await response.json();
        // Limit to first 5 people
        const limitedResults = data.results.slice(0, 7);
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

  useEffect(() => {
    fetchAllPeople();
  }, []);

  return (
    <div className="scrollmenu">
      {people.map(person => (
	   <CardPeople
          key={person.uid}
          name={person.name}
          gender={person.gender}
          eyeColor={person.eyeColor}
          hairColor={person.hairColor}
        />
      ))}
    </div>
  );
};