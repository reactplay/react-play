// /src/Redux/Store/index.jsx
// Configure and export the Redux store using Redux Toolkit.
// The "list" slice is handled by the default export from ../reducer/index.jsx

import { configureStore } from '@reduxjs/toolkit';
import index from '../Reducer/index.jsx';

export const store = configureStore({
  reducer: {
    // 'list' will be available on the state as state.list
    list: index
  }
  // You can add middleware or devTools options here if needed
});
