import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyCCSJJcYauARP5UYQWpDOmIx--qYPMrCyU",
  authDomain: "netflix-ca0bb.firebaseapp.com",
  projectId: "netflix-ca0bb",
  storageBucket: "netflix-ca0bb.appspot.com",
  messagingSenderId: "585595256826",
  appId: "1:585595256826:web:5c98b402e5facb3f4aee43",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
