/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Button } from 'react-bootstrap';

import Login from '../pages/auth/LoginPage';
import SignUp from '../pages/auth/SignUpPage';

interface Props {
  show?: boolean;
  renderAsPage?: boolean;
  onRequestClose?: () => void;
  onClick?: () => void;
  location: any;
}
class Registration extends React.Component<Props> {
  state = {
    loginOpened: false,
    signupOpened: false,
  };

  componentDidMount() {
    if (this.props.renderAsPage) {
      this.openModal('login');
    }
  }

  openModal = (modalType: string) => {
    if (modalType === 'login') {
      this.setState({
        loginOpened: true,
        signupOpened: false,
      });
    } else if (modalType === 'signup') {
      this.setState({
        loginOpened: false,
        signupOpened: true,
      });
    }
  };

  closeModal = () => {
    this.setState({
      loginOpened: false,
      signupOpened: false,
    });
  };

  render() {
    const { loginOpened, signupOpened } = this.state;
    return (
      <>
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => this.openModal('login')}
        >
          Login
        </Button>
        <Login
          show={loginOpened}
          renderAsPage={this.props.renderAsPage}
          onRequestClose={() => this.closeModal()}
          onClick={() => this.openModal('signup')}
          location={this.props.location}
        />
        <SignUp
          show={signupOpened}
          renderAsPage={this.props.renderAsPage}
          onRequestClose={() => this.closeModal()}
          onClick={() => this.openModal('login')}
          location={this.props.location}
        />
      </>
    );
  }
}

export default Registration;
