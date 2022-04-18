import React from 'react';

// Creating the context here to hold the social card data and 
// the function to update the data.
export const SocialContext = React.createContext({
  social: {}, 
  setSocial: () => {}
});