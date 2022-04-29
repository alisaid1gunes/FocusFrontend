import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/home'
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
