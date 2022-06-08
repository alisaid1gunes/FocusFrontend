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
    <div className='container-lg bg-black-special flex flex-col w-full min-h-screen overflow-x-hidden justify-center items-center'>

      <h1 className='text-white flex justify-center text-5xl mb-20'>Log in.</h1>
        <div className='w-64 h-10 rounded-lg bg-gradient-to-l from-orange-special to-purple-special text-white border border-1 flex justify-center p-2'>
          <svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
               stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M17.788 5.108A9 9 0 1021 12h-8"/>
          </svg>
          <p className='ml-1'>Continue with Google </p>
        </div>
        <h2 className='text-white mb-1 mt-1'>or</h2>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center' >
        <input
          type='text'
          name='username'
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          className='w-64 h-10 rounded-lg bg-black-special text-white border border-1 p-2 mb-4'
        />

        <input
          type='password'
          name='password'
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          className='w-64 h-10 rounded-lg bg-black-special text-white border border-1 p-2 mb-6'
        />
        <input type='submit' name='submit' className='w-64 h-10 rounded-lg bg-gradient-to-l from-orange-special to-purple-special text-white border border-1 p-2 mb-3' />
      </form>
      <div className='flex'>
        <p className='text-white text-opacity-60 mr-2'>Don't you have an account?</p>
        <p className='text-white mr-1'>Create Account</p>
      </div>
      <p className='text-white'>Forgot Password?</p>

      {error && <p>{message}</p>}

    </div>
  );
}
