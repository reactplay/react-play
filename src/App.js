import 'App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className="app-body">
      <Outlet />
    </main>
  );
}

export default App;
