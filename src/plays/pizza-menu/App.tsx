import React from 'react';

import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="pizza-menu_container pizza-menu_body">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
