/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { CardGroup, Row, Col } from 'react-bootstrap';

import ItemCard from './ItemCard';
import Item from '../interfaces/ItemInterface';
import { getItemAPI } from '../models/ApiModel';
import NavDropdown from './NavDropdown';
import '../style/item.css';

interface Prop {
  category: string;
}

const ItemPage: React.FC<Prop> = ({ category }: Prop) => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const url: string = getItemAPI + category;

    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data.items);
        setData(
          result.data.items.map((item: Item) => (
            <Col key={item._id} className="col-card">
              <ItemCard
                _id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                description={item.description}
              />
            </Col>
          )),
        );
      })
      .catch(() => console.log('ERROR: Fetching Products'));
  }, []);

  return (
    <div className="page-container">
      <div className="nav-dropdown">
        <header className="header-category">Category</header>
        <div className="container-dropdown">
          <NavDropdown />
        </div>
      </div>
      <div className="card-container">
        <CardGroup>
          <Row xs={1} md={2} lg={3} xl={4}>
            {data}
          </Row>
        </CardGroup>
      </div>
    </div>
  );
};

export default ItemPage;
