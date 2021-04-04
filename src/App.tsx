import React from 'react';
import GlobalStyle from './styles/global';
import Navbar from './components/Navbar/Navbar'; 
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

const App: React.FC = () => {
   return (
     <>
      <GlobalStyle />
      <Navbar />
      <Home />
      <Footer />
     </>
   );
}

export default App;
