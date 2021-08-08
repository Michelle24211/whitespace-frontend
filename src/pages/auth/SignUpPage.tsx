/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

import { signUpApi } from '../../models/ApiModel';
import '../../style/signUpModal.css';

interface Props {
  show?: boolean;
  renderAsPage?: boolean;
  onRequestClose: () => void;
  onClick: () => void;
  location: any;
}

class SignUp extends Component<Props> {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    message: '',
    success: false,
    passwordType: 'password',
  };

  resetForm = () => {
    this.setState((prevState) => ({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
      message: '',
      success: false,
    }));
  };

  closeModal = () => {
    this.resetForm();
    this.props.onRequestClose();
  };

  switchModal = () => {
    this.resetForm();
    this.props.onClick();
  };

  signUp = (event: React.SyntheticEvent) => {
    event.preventDefault();
    fetch(signUpApi, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        passwordConfirm: this.state.passwordConfirm,
      }),
    })
      .then((res) => {
        if (res.ok) {
          this.resetForm();
          this.setState((prevState) => ({
            success: true,
            message: 'Sign up success! Please Login',
          }));
          return res.json();
        }
        res.json().then((error) => this.setState({ message: error.message }));
        throw new Error('Error with sign up!');
      })
      .catch((err) => {
        this.setState({ message: 'Cannot SignUp' });
      });
  };

  fieldChanged = (name: string) => (event: { target: { value: string } }) => {
    const { value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Modal
          id="signup"
          show={this.props.show}
          onHide={
            (this.closeModal || this.state.success) && this.props.renderAsPage
          }
        >
          <form onSubmit={this.signUp}>
            <Modal.Header className="text-center">
              <h4 className="w-100 font-weight-bold">Sign Up</h4>
              {!this.props.renderAsPage && (
                <Button
                  variant="outline-dark"
                  className="close"
                  onClick={this.closeModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </Button>
              )}
            </Modal.Header>
            <Modal.Body>
              <div className="row mb-4">
                <div className="col-6">
                  <input
                    type="text"
                    id="firstName"
                    value={this.state.firstName}
                    className="form-control"
                    placeholder="First Name"
                    required
                    onChange={this.fieldChanged('firstName')}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    id="lastName"
                    value={this.state.lastName}
                    className="form-control"
                    placeholder="Last Name"
                    required
                    onChange={this.fieldChanged('lastName')}
                  />
                </div>
              </div>
              <input
                type="email"
                id="email"
                value={this.state.email}
                className="form-control mb-4"
                placeholder="Email"
                required
                onChange={this.fieldChanged('email')}
              />
              <div className="input-eye">
                <input
                  type={this.state.passwordType}
                  id="password"
                  value={this.state.password}
                  className="form-control mb-4"
                  placeholder="Create Password"
                  minLength={8}
                  required
                  onChange={this.fieldChanged('password')}
                />
                <span
                  className="iconify"
                  id="password-eye"
                  data-icon="bi-eye"
                  data-inline="false"
                />
              </div>
              <div className="input-eye">
                <input
                  type="password"
                  id="confirmPassword"
                  value={this.state.passwordConfirm}
                  className="form-control mb-4"
                  placeholder="Confirm Password"
                  pattern=".{8,}"
                  required
                  onChange={this.fieldChanged('passwordConfirm')}
                />
                <span
                  className="iconify"
                  id="password-confirm-eye"
                  data-icon="bi-eye-slash"
                  data-inline="false"
                />
              </div>
              <p
                style={{
                  textAlign: 'center',
                  color: this.state.success ? 'blue' : 'red',
                }}
              >
                {this.state.message}
              </p>
              <Button type="submit reset" value="reset" className="btn-block">
                Sign Up
              </Button>
            </Modal.Body>
            <Modal.Footer>
              <p>Already a Member?</p>
              <Button className="btn-secondary" onClick={this.switchModal}>
                Login
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}

export default SignUp;
