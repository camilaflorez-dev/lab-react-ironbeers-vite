import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function BeerDetailsPage() {

  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => setBeer(response.data))
      .catch((error) => console.error("Error:", error));
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

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

export default BeerDetailsPage;
