import { React, useState } from 'react';
import login from '../services/login';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await login({ email, password });
    setMessage(data.message);

    if (data.success) {
      navigation('/home');
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type='submit' name='submit' />
      </form>
      {error && <p>{message}</p>}
    </div>
  );
}
