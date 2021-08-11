/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import Axios from 'axios';
import '../style/createListingPage.css';
import { getItemAPI } from '../models/ApiModel';

class CreateListingPage extends React.Component {
  state = {
    name: '',
    price: '',
    category: 'Clothing',
    image: '',
    description: '',
    err: '',
    success: '',
  };

  resetForm = () => {
    this.setState((prevState) => ({
      name: '',
      price: '',
      category: '',
      image: '',
      description: '',
      err: '',
      success: false,
    }));
  };

  onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', this.state.name);
    data.append('price', this.state.price);
    data.append('category', this.state.category);
    data.append('description', this.state.description);
    data.append('image', this.state.image);
    // fetch(getItemAPI, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   body: JSON.stringify({ data }),
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => {
    //     console.log(`Error:${err}`);
    //   });
    Axios.post(getItemAPI, data)
      .then(() => {
        this.resetForm();
        this.setState({ success: 'Listing posted successfully !' });
      })
      .catch(() => this.setState({ err: 'Please try another name!' }));
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
                required
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a price"
                required
                value={this.state.price}
                onChange={(e) => this.setState({ price: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                required
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
                id="image"
                required
                name="image"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  this.setState({
                    image: e.target.files ? e.target.files[0] : {},
                  })
                }
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                required
                rows={8}
                value={this.state.description}
                onChange={(e) => this.setState({ description: e.target.value })}
              />
            </Form.Group>
            <br />
            <p style={{ color: 'red' }}>{this.state.err}</p>
            <p style={{ color: 'green' }}>{this.state.success}</p>
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
