import React, { useEffect, useState } from 'react';

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setForm({[e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        console.log('sg: login.js : handleSubmit : form submitted: ',form)
        e.preventDefault();
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