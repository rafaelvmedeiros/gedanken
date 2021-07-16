import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

import GlobalStyles from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Navbar />
    <Routes />
  </BrowserRouter>
);

export default App;
