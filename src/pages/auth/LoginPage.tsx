/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/destructuring-assignment */
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import auth from '../../models/AuthModel';
import UserContext from '../../context/UserContext';

interface Props {
  show?: boolean;
  renderAsPage?: boolean;
  onRequestClose: () => void;
  onClick: () => void;
  location: any;
}
const Login: React.FC<Props> = (props: Props) => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState(false);

  const login = (e: React.SyntheticEvent) => {
    e.preventDefault();
    auth
      .authenticate(email, password)
      .then((res) => {
        console.log(res);
        localStorage.setItem('jwtToken', res.jwtToken);
        setSuccess((prev) => true);
        setUser(res.data.user);
      })
      .catch(() => {
        setSuccess(false);
        setErr('Oops, that is not a match. Try again!');
      });
  };

  const from = props.location || { from: { pathname: '/' } };
  if (success) {
    return <Redirect to={from} />;
  }
  return (
    <Modal
      id="login"
      show={props.show && !success}
      onHide={(props.onRequestClose || success) && props.renderAsPage}
    >
      <form onSubmit={login}>
        <Modal.Header className="text-center">
          <h4 className="w-100 font-weight-bold">Login</h4>
          {!props.renderAsPage && (
            <Button
              className="close"
              variant="outline-dark"
              onClick={props.onRequestClose}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </Button>
          )}
        </Modal.Header>
        <Modal.Body>
          <div className="md-form mb-4">
            <input
              type="text"
              id="defaultForm-user"
              className="form-control validate"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="md-form mb-4">
            <input
              type="password"
              id="defaultForm-pass"
              className="form-control validate"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p style={{ color: 'red' }}>{err}</p>
          <Button type="submit" className="btn-block">
            Login
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <p>Not a Member?</p>
          <Button className="btn-secondary" onClick={props.onClick}>
            Sign Up
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default Login;
