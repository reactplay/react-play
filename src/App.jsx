import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main className="app-body">
      <Outlet />
    </main>
  );
}

export default App;
