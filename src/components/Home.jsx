import { React, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import logout from '../services/logout';

export default function Home() {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const username = localStorage.getItem('username');
  const id = jwt_decode(localStorage.getItem('accessToken'))._id;
  const refreshToken = localStorage.getItem('refreshToken');
  const navigation = useNavigate();
  console.log(id);
  const handleClick = async () => {
    const data = await logout({ refreshToken });
    setMessage(data.message);
    if (data.success) {
      navigation('/');
    } else {
      setError(true);
    }
  };
  return (
    <div>
      welcome home {username}
      <br />
      <button onClick={handleClick}>logout</button>
      <br />
      {error && <p>{message}</p>}
    </div>
  );
}
