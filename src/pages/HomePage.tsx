import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../style/home.css';
import '../style/whitespaceLogo.css';

const HomePage: React.FC = () => (
  <div className="landing-container">
    <div className="center">
      <h1>
        <span className="larger-text white">
          White·<span className="italic">Space</span>
        </span>
      </h1>

      <Link to="/item" className="center">
        <Button variant="dark" className="btn-landing">
          <span className="larger-text white">Start Shopping</span>
        </Button>
      </Link>
    </div>

    <div className="overlay">
      <video autoPlay muted loop>
        <source
          src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
);

export default HomePage;
