import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import baseApiUrl from '../models/ApiModel';
import '../style/cart.css';

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
  <tr className="cart-item-container">
    <td>
      <div className="cart-info">
        <Link to={`/item-detail/${itemId}`}>
          <img src={baseApiUrl + picture} alt="Card Item" />
        </Link>
        <div className="cart-description">
          <p>{name}</p>
          <small>${price && price.toFixed(2)}</small>
          <br />
          <Button
            style={{ color: 'red', padding: '0' }}
            variant="link"
            size="sm"
            onClick={handleDelete}
          >
            Remove
          </Button>
        </div>
      </div>
    </td>
    <td>
      <small>${price && price.toFixed(2)}</small>
    </td>
  </tr>
);

export default CartItem;
