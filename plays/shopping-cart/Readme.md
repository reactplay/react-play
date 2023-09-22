# Shopping Cart

It is a shopping cart where the total price and number of items get instantly updated when user changes a state. The project uses combination of useReducer and useContext hook provided by the React framework.

## Play Demographic

- Language: ts
- Level: Intermediate
- React Concepts: Context API, useReducer Hook

## Creator Information

- User: joshi-kaushal
- Gihub Link: https://github.com/joshi-kaushal

## Implementation Details

The state is shared by three components, namely the Navbar, the Shopping Cart Container, and the individual cart item. We used the 'context API' to store all of the state to avoid prop drilling and to seamlessly share state between components.
The state contains an array of items added to the cart, the total number of items added, the total price, and a boolean state that toggles when data retrieval is successful.
On the state, we have seven different actions to take. As a result, using the 'useReducer' hook is feasible.

The context is in charge of managing the state and dispatching actions based on the trigger.

## Resources

This project was based on John Smigla's **[Code 15 React Projects - Complete Course](https://youtu.be/a_7Z7C_JCyo?t=24121)** playlist available on YouTube.
