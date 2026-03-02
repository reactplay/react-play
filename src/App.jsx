import { ThemeProvider } from 'common/theme/ThemeContext';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <main className="app-body">
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default App;
