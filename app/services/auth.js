// import { auth } from "./../config/firebase-config";
import app from "./../config/firebase-config";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const socialMediaAuth = (provider, providerObject) => {
  return signInWithPopup(auth,provider)
    .then((result) => {
      var providerAuth = '';
      switch(providerObject){
        case 'facebook':
          providerAuth = FacebookAuthProvider;
          break;
        case 'google':
          providerAuth = GoogleAuthProvider;
          break;
      }
      const credential = providerAuth.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      return user;
    })
    .catch((er) => {
      return er;
    });
};

export default socialMediaAuth;
