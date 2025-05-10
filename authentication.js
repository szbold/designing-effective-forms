// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiaPUrCdW35f9gh9zZlnReVmyQNPKUPds",
  authDomain: "tpf04-8f444.firebaseapp.com",
  projectId: "tpf04-8f444",
  storageBucket: "tpf04-8f444.firebasestorage.app",
  messagingSenderId: "598605576063",
  appId: "1:598605576063:web:c452d94d385cc594250c4a",
  measurementId: "G-ND2K0441VD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

const userSignIn = async () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;

      const firstName = user.displayName.split(" ")[0];
      const lastName = user.displayName.split(" ")[1];
      const email = user.email;

      const firstNameField = document.getElementById("firstName");
      const lastNameField = document.getElementById("lastName");
      const emailField = document.getElementById("exampleInputEmail1");

      firstNameField.value = firstName;
      lastNameField.value = lastName;
      emailField.value = email;
    })
    .catch((error) => {
      const errorCode = error.code;

      const errorMessage = error.message;
    });
};

const userSignOut = async () => {
  signOut(auth)
    .then(() => {
      alert("You have been signed out!");
    })
    .catch((error) => {
      const errorCode = error.code;

      const errorMessage = error.message;
    });
};
onAuthStateChanged(auth, (user) => {
  if (user) {
    alert("You are authenticated with Google");

    console.log(user);
  }
});

signInButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click", userSignOut);
