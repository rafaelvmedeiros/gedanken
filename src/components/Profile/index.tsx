import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { ProfileWrapper, Logo, Message } from './styles';

import profilePicture from '../../assets/rafael.jpeg';

const Profile: React.FC = () => {
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
  });

  useEffect(() => {
    const getUserProfile = async () => {
      const { data } = await api.get('/usuario');
      setUser(data);
    };

    getUserProfile();
  }, []);

  return (
    <ProfileWrapper>
      <Logo src={profilePicture} alt="logo" />
      <Message>
        <p>Olá,</p>
        <p>{user.name}</p>
      </Message>
    </ProfileWrapper>
  );
};

export default Profile;
