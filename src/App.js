import 'App.css';
import { HeaderForPlaysPage } from 'common/header/DynamicHeader';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <HeaderForPlaysPage />
      <main className="app-body">
        <Outlet />
      </main>
    </>
  );
}

export default App;
