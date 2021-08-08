import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import baseApiUrl from '../models/ApiModel';

interface Props {
  itemId: string;
  picture: string;
  name: string;
  price: number;
  handleDelete: () => void;
}

const CartItem: React.FC<Props> = ({
  itemId,
  picture,
  name,
  price,
  handleDelete,
}: Props) => (
  <Card style={{ marginTop: '1em', marginBottom: '10em' }}>
    <div className="row" style={{ height: '10rem' }}>
      <Link
        to={`/item-detail/${itemId}`}
        className="col-3"
        style={{ height: '100%' }}
      >
        <Card.Title>
          <b>{name}</b>
        </Card.Title>
        <img
          style={{ height: '100%', objectFit: 'contain' }}
          src={baseApiUrl + picture}
          alt="Card Item"
        />
      </Link>
      <div className="col my-auto">
        <span>$</span> {price}
        <Button onClick={handleDelete}> Delete</Button>
      </div>
    </div>
  </Card>
);

export default CartItem;
