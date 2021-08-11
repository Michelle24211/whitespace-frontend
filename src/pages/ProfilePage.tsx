import React, { useContext } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import '../style/profile.css';

const Profile: React.FC = () => {
  const { user } = useContext(UserContext);
  const { firstName, lastName, email } = user;
  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <br />
      <Card style={{ width: '18rem' }}>
        <ListGroup variant="flush">
          <div className="user-group">
            <div className="user-info">
              <ListGroup.Item>{firstName}</ListGroup.Item>
            </div>
            <ListGroup.Item>Edit</ListGroup.Item>
          </div>
          <div className="user-group">
            <div className="user-info">
              <ListGroup.Item>{lastName}</ListGroup.Item>
            </div>
            <ListGroup.Item>Edit</ListGroup.Item>
          </div>
          <div className="user-group">
            <div className="user-info">
              <ListGroup.Item>{email}</ListGroup.Item>
            </div>
            <ListGroup.Item>Edit</ListGroup.Item>
          </div>
        </ListGroup>
      </Card>
    </div>
  );
};

export default Profile;
