import { Auth } from 'aws-amplify';

const signIn = async (email, password) => {
    try {
        const user = await Auth.signIn(email, password);
        return user;
    } catch (error) {
        console.log('error signing in', error);
    }
}

const signOut = async () => {
  try {
      await Auth.signOut();
  } catch (error) {
      console.log('error signing out: ', error);
  }
}

const loggedIn = async () => {
    try{
      return await Auth.currentAuthenticatedUser();
    }catch(e){
      return null;
    }
  }

export {
    signIn,
    signOut,
    loggedIn
};
