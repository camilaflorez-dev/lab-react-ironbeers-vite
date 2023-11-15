import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {

    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => 
      setBeers(response.data))
      .catch((error) => 
      console.error("Error:", error));
  }, []);

  return (

    <div>
      {beers.map((beer) => (
        <Link to={`/beers/${beer._id}`} key={beer._id}>
          <img src={beer.image_url} alt={beer.name} />

          <div>
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>
              <strong>Created by:</strong> {beer.contributed_by}
            </p>
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AllBeersPage;
