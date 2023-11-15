import React from "react";
import AllBeer from "../assets/beers.png";
import RandomBeer from "../assets/random-beer.png";
import NewBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";
import "../App.css";

function HomePage() {

  return (
    <div className="home-container">
      <Link to="/beers" className="home-link">

        <img src={AllBeer} alt="All Beers" />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </Link>
      <Link to="/random-beer" className="home-link">
        <img src={RandomBeer} alt="randomBeer" />
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </Link>
      <Link to="/new-beer" className="home-link">
        <img src={NewBeer} alt="New beer" />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </p>
      </Link>
    </div>

  );


}

export default HomePage;
