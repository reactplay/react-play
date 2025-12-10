import './App.css';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <main className="app-body">
        <Outlet />
      </main>
    </Provider>
  );
}

export default App;
