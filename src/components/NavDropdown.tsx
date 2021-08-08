import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/navBar.css';

const Dropdown: React.FC = () => (
  <div>
    <NavDropdown.Item>
      <Link to="/accessories" className="link-no-style">
        <div>Accessories</div>
      </Link>
    </NavDropdown.Item>
    <NavDropdown.Item>
      <Link to="/fashion" className="link-no-style">
        <div>Fashion</div>
      </Link>
    </NavDropdown.Item>
    <NavDropdown.Item>
      <Link to="/tent" className="link-no-style">
        <div>Tent</div>
      </Link>
    </NavDropdown.Item>
    <NavDropdown.Item>
      <Link to="/item" className="link-no-style">
        <div>Shop All Item</div>
      </Link>
    </NavDropdown.Item>
  </div>
);

export default Dropdown;
