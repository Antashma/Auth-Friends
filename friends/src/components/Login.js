import React, { useState } from 'react';
import {axiosWithAuth} from '../api/axiosWithAuth'

const Login = (props) => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => { //login
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/login', form)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push('./friends')
            })
            .catch(err => {
                console.error('There was an error logging in: ', err)
            })

    }

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <label>Username: &nbsp;
                    <input 
                        type='text' 
                        name='username' 
                        value={form.username} 
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>Password: &nbsp;
                    <input 
                        type='password' 
                        name='password' 
                        value={form.password} 
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;