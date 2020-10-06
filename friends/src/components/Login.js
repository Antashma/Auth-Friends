import React, { useEffect, useState } from 'react';
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
        console.log('sg: login.js : handleSubmit : form submitted: ',form)
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/login', form)
            .then(res => {
                console.log('sg: Login.js : handleSubmit : axoisWithAuth res', res);
                localStorage.setItem('token', res.data.payload)
                props.history.push('./friends')
            })
            .catch(err => {
                console.error('There was an error logging in: ', err)
            })

    }

//print form value 
    useEffect(() => {console.log('sg: login.js : useeffect: form value : ', form)}, [form]) 
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:
                    <input 
                        type='text' 
                        name='username' 
                        value={form.username} 
                        onChange={handleChange}
                    />
                </label>
                <label>Password: 
                    <input 
                        type='password' 
                        name='password' 
                        value={form.password} 
                        onChange={handleChange}
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;