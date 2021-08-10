/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import '../style/createListingPage.css';

class CreateListingPage extends React.Component {
  state = {
    name: '',
    price: '',
    category: 'Clothing',
    picture: {},
    description: '',
    isDonation: false,
  };

  onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(this.state);
    fetch('/api/items/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...this.state }),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(`Error:${err}`);
      });
  };

  render() {
    return (
      <div className="form-container">
        <Card
          style={{
            width: '40rem',
            padding: '1rem',
            margin: '1rem',
          }}
        >
          <Form onSubmit={this.onFormSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a price"
                value={this.state.price}
                onChange={(e) => this.setState({ price: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={this.state.category}
                onChange={(e) => this.setState({ category: e.target.value })}
              >
                <option>Select a Category...</option>
                <option>Accessories</option>
                <option>Fashion</option>
                <option>Tent</option>
              </Form.Control>
            </Form.Group>
            <br />
            <Form.Group controlId="formPicture">
              <Form.Label>Image URL</Form.Label>
              <input
                type="file"
                onChange={(e) =>
                  this.setState({
                    picture: e.target.files ? e.target.files[0] : {},
                  })
                }
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                value={this.state.description}
                onChange={(e) => this.setState({ description: e.target.value })}
              />
            </Form.Group>
            <br />
            <br />
            <Button variant="primary" type="submit">
              Create Listing
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default CreateListingPage;
