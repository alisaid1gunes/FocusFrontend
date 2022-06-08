import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
function App() {
  return (
      <div className='h-full'>
    <Routes>
      <Route exact path='/' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route
        path='/home'
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
      </div>
  );
}

export default App;
