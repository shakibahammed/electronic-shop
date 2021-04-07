import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig)


const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () =>{

        firebase.auth() .signInWithPopup(provider)
        .then((result) => {
      
          var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;
        
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          
        });
    }

    return (
        
        <div>
            <h2>this is login</h2>
            <button onClick={handleGoogleSignIn}>Continue with google</button>
        </div>
    );
};

export default Login;