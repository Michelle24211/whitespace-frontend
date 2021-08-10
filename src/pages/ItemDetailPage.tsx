import React, { useState, useEffect, useContext } from 'react';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import CartContext from '../context/CartContext';
import Item from '../interfaces/ItemInterface';
import baseApiUrl, { getItemAPI, cartApi } from '../models/ApiModel';
import '../style/itemDetailPage.css';

interface Props {
  match: { params: { productId: String } };
}

const ItemDetailPage: React.FC<Props> = ({ match }: Props) => {
  const [data, setData] = useState<Item>();
  const [isLoading, setLoading] = useState(false);
  const { totalItem, setTotalItem } = useContext(CartContext);

  useEffect(() => {
    const url: string = getItemAPI + match.params.productId;

    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((result) => setData(result.data.item))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = async (productId: string) => {
    const jwtToken = localStorage.getItem('jwtToken');
    setLoading(true);
    fetch(cartApi, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ jwtToken, productId }),
    })
      .then((response) => {
        if (response.ok) {
          setTotalItem(totalItem + 1);
        } else {
          alert('Item already in cart!');
        }

        return response.json();
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(productId));
  };
  if (data) {
    return (
      <Container key={data._id} className="item-container">
        <Row className="row">
          <Col xs={12} lg="6" className="image-col">
            <Image
              className="product-image"
              src={baseApiUrl + data.image}
              alt={data.name}
            />
          </Col>
          <Col xs={12} lg="6" className="text-col">
            <h3>{data.name}</h3>
            <p>{data.description}</p>
            <p>${data.price.toFixed(2)}</p>

            {!isLoading && (
              <Button onClick={() => addToCart(data._id)}>Add to Cart</Button>
            )}
            {isLoading && <Button>Processing</Button>}
          </Col>
        </Row>
      </Container>
    );
  }
  return <p>No Product Found</p>;
};

export default ItemDetailPage;
