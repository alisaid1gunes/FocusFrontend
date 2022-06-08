import { React, useState } from 'react';
import signup from '../services/signup';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      formData.append('email', email);
      formData.append('file', file);
      const data = await signup(formData);
      setMessage(data.message);
      if (data.success) {
        navigation('/login');
      } else {
        setError(true);
      }
    }
  };
  return (
    <div>
      SignUp
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type='password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type='file'
          value={file}
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <button type='submit'>Sign Up</button>
      </form>
      {error && <p>{message}</p>}
    </div>
  );
};
export default SignUp;
