import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import AuthProvider from './store/authProvider';

import Routes from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <GlobalStyle />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
