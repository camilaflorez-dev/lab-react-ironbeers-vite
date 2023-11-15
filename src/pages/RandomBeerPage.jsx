import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {

    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setBeer(response.data);
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (!beer) return "Loading...";

  return (

    <div>
      <img src={beer.image_url} alt={beer.name} />
      <div>
        <div>
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        </div>
        <div>
          <p>{beer.attenuation_level}</p>
          <p>
            <strong>{beer.first_brewed}</strong>
          </p>
        </div>
      </div>

      <p>{beer.description}</p>
      <p>
        Created by: {beer.contributed_by}
      </p>
    </div>

  );
  
}

export default RandomBeerPage;
