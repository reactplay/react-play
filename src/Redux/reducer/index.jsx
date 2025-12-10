import { createSlice } from '@reduxjs/toolkit';

// Initial state for this slice: an array of basket items.
// Each item is expected to be an object with at least an `id` property.
const initialState = [];

// createSlice automatically generates action creators and action types
// based on the reducers we provide below.
const reduxReducer = createSlice({
  name: 'index',
  initialState,
  reducers: {
    // addItem: adds one or more items into the basket state.
    // Payload expectation:
    // - If you dispatch a single item object, use: dispatch(addItem(item))
    // - If you dispatch an array of items, use: dispatch(addItem(itemsArray))
    //
    // Note: current implementation uses state.push(...item), so the payload
    // should be an iterable (e.g. array). If you intend to add a single object,
    // change to state.push(item).
    addItem: (state, action) => {
      const item = action.payload;

      // Spread the payload into state (works if payload is an array).
      state.push(...item);
    },

    // removeItem: removes an item by id.
    // Expects the payload to be the id of the item to remove.
    removeItem: (state, action) => {
      const newState = state.filter((item) => item.id !== action.payload);

      // Returning a new array replaces the current slice state.
      return newState;
    }
  }
});

// Export generated action creators for use in components.
export const { addItem, removeItem } = reduxReducer.actions;

// Export the reducer to be included in the store.
export default reduxReducer.reducer;
