import { useState } from 'react';
import { signIn } from '../util/Auth';

async function onSubmit(e, email, password) {
    e.preventDefault();
    await signIn(email, password);
}

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
        <h1>Login</h1>
        <form onSubmit={(e) => onSubmit(e, email, password)}>
        <label>
          Email:
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </label>
        <input type="submit" value="Submit" />
        </form>
        </>
    )
}

export default AuthForm;