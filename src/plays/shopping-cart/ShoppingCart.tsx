import React from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import { CartProvider } from './context';
import Navbar from './components/Navbar';
import Container from './components/Container';

function ShoppingCart(props: any) {
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <CartProvider>
            <main>
              <Navbar />
              <Container />
            </main>
          </CartProvider>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
