import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

import ItemProps from '../interfaces/ItemInterface';
import baseAPI from '../models/ApiModel';
import '../style/item.css';

const ItemCard: React.FC<ItemProps> = ({
  _id,
  image,
  name,
  price,
  description,
}: ItemProps) => {
  const newTo = {
    pathname: `/item-detail/${_id}`,
  };
  return (
    <Card
      style={{ border: 'none', cursor: 'pointer' }}
      className="card card-animate"
    >
      <Link to={newTo}>
        <Card.Img variant="top" src={baseAPI + image} />
      </Link>
      <Card.Body>
        <Card.Title className="text-limit">{name}</Card.Title>
        <Card.Text className="text-limit">
          <div>{`$${price.toFixed(2)}`}</div>
          <div>{description}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
