import {React, useState} from 'react';
import signup from '../services/signup';
import {useNavigate} from 'react-router-dom';

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

    const loginClick = () => {
        navigation('/login')
    };

    return (
        <div
            className='container-lg bg-black-special flex flex-col w-full min-h-screen overflow-x-hidden justify-center'>
            <h1 className='text-white flex justify-center text-5xl mb-20'>Sign up.</h1>
            <div className='flex flex-col justify-center items-center'>
                <button
                    className='w-80 h-10 rounded-lg bg-black-special text-white border border-white border-opacity-40  flex justify-center p-2'>
                    <svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                         stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <path d="M17.788 5.108A9 9 0 1021 12h-8"/>
                    </svg>
                    <p className='ml-2'>Continue with Google </p>
                </button>
                <h2 className='text-white mb-2 mt-2'>or</h2>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-full'>
                <input
                    type='text'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    className='w-80 h-10 rounded-lg bg-black-special text-white border-white border border-opacity-40  p-2 mb-4'
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    className='w-80 h-10 rounded-lg bg-black-special text-white border-white border border-opacity-40  p-2 mb-4'
                />
                <input
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                    }}
                    className='w-80 h-10 rounded-lg bg-black-special text-white border-white border border-opacity-40  p-2 mb-4'
                />
                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    className='w-80 h-10 rounded-lg bg-black-special text-white border-white border border-opacity-40  p-2 mb-4'
                />
                <label className="block mb-4 text-sm font-medium text-white " htmlFor="file_input">Upload
                    file</label>
                <input
                    value={file}
                    onChange={(e) => {
                        setFile(e.target.files[0]);
                    }}
                    className="block w-80 h-10 file:bg-gradient-to-l from-orange-special to-purple-special file:rounded-lg file:text-white file:h-10  text-sm text-white bg-black-special rounded-lg border border-white border-opacity-40 cursor-pointer mb-6 focus:outline-none "
                    id="file_input" type="file"/>

                <button type='submit'
                        className='w-80 h-10 rounded-lg bg-gradient-to-l from-orange-special to-purple-special text-white p-2 mb-3'>Sign
                    Up
                </button>
            </form>
            <div className='flex mt-2 justify-center items-center'>
                <p className='text-white text-opacity-60 mr-2'>Have you already an account?</p>
                <button onClick={loginClick} className='text-white mr-1'>Log in.</button>
            </div>
            <div className='flex mt-2 justify-center items-center'>
                {error && <p className='text-white mt-2'>{message}</p>}
            </div>
        </div>
    );
};
export default SignUp;
