import logo from '../logo.svg';
import AuthForm from './AuthForm';
import { useEffect, useState } from 'react';
import { loggedIn, signOut } from '../util/Auth';
import ImageUploadForm from './ImageUploadForm';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    var user = await loggedIn();
    if(user != undefined && user != null) setIsLoggedIn(true);
    setIsLoading(false);
  }, []);
  
  if(isLoading) 
    return (
      <div className="App">
        <header className="App-header">
          <h1>Loading!</h1>
        </header>
      </div>
    )
  else
    return isLoggedIn ? (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ImageUploadForm />
            <button onClick={signOut}>Sign Out</button>
          </header>
        </div>
      ) : (
        <AuthForm />
      );
};

export default Admin;
