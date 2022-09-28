import React from "react";
import "../src/App.css";
import Girl from "../src/assets/Girl.png";
import Plane from "../src/assets/Plane.png";
import Cloud from "../src/assets/Cloud.png";
import Mountain from "../src/assets/Mountain.png";
import Star from "../src/assets/Star.png";
import Polygon from "../src/assets/Polygon.png";
import DottedMap from "../src/assets/dottedmap.png";
import Bali from "../src/assets/Bali.png";
import Pune from "../src/assets/Pune.png";
import Rome from "../src/assets/Rome.png";
import Tune from "../src/assets/Tune.png";

function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="left-nav-section">
          <p className="nav-text">Yash</p>
          <input className="input-box" placeholder="Search" />
        </div>
        <div className="right-nav-section">
          <p>Review</p>
          <p>Destination</p>
          <p>Products</p>
          <p>Pricing</p>
          <div className="nav-button">
            <p>Contact us</p>
          </div>
        </div>
      </nav>
      <div>
        <img src={Plane} className="plane-icon" />
        <img src={Plane} className="plane-icon2" />

        <img src={Cloud} className="cloud-icon" />
      </div>
      <p className="text-1">
        Travel With The Best Travel Agents And Get Best Experience{" "}
      </p>
      <p className="text-2">
        Get best experience and memories of your adventures with best
        international and local treavel agents listed with us
      </p>
      <div className="plan-button">
        <p>Plan A Trip</p>
        <img src={Polygon} className="Polygon" />
      </div>
      <img src={DottedMap} className="dotted-map" />
      <div className="ellipse">
        <div className="girl">
          <img src={Girl} />
        </div>
      </div>
      <div className="details">
        <div className="info">
          <p>Mountains Of Joys</p>
          <div className="Stars">
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
            <img src={Star} />
          </div>
          <p>Plan now</p>
        </div>

        <img src={Mountain} className="mountain" />
      </div>
      <div>
        <img src={Bali} className="Bali" />
        <img src={Pune} className="Rome" />
        <img src={Rome} className="Pune" />
        <img src={Tune} className="Tune" />
      </div>
    </div>
  );
}

export default Home;
