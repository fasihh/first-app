import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [failed, setFailed] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, password };
        console.log(user);

        fetch('http://localhost:3001/user/login',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
        })
        .then(res => {
            if (!res.ok) throw new Error();

            return res.json();
        })
        .then(data => {
            localStorage.setItem('token', data.token.split(' ')[1]);
            localStorage.setItem('email', user.email);
            localStorage.setItem('password', user.password);
            history.push('/');
            window.location.reload();
        })
        .catch(err => {
            setFailed(true);
        });
    }

    return ( 
        <div className="signin-form">
            <h2>sign in</h2>
            { failed && <div>Incorrect username or password</div> }
            <form>
                <div className="form-input">
                    <label>email { failed && email.length === 0 && <div className="error-message">* missing field</div> }</label>
                    <input 
                        type="text"
                        required
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                
                <div className="form-input">
                    <label>password { failed && password.length === 0 && <div className="error-message">* missing field</div> }</label>
                    <input 
                        type="password"
                        required
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>
            </form>
            <button onClick={ handleSubmit }>sign in</button>
        </div> 
    );
}
 
export default SignIn;