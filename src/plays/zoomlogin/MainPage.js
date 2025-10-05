import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import HomePage from '../../common/home/Home';
import ZoomPage from './components/Zoom/ZoomPage';

export function MainPage() {
  return (
    <BrowserRouter basename="/react-login-form">
      <App>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ZoomPage />} path="/zoom" />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
export default MainPage;
