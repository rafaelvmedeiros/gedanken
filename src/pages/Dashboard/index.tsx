import React from 'react';

import { Wrapper } from './styles';

import Transactions from '../../components/Transactions';

const Dashboard: React.FC = () => (
  <Wrapper>
    <Transactions />
  </Wrapper>
);

export default Dashboard;
