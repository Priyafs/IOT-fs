// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDLsv_zz378xY3mEJV1nrukxe0hHGVL2lM",
  authDomain: "auth-form-a660f.firebaseapp.com",
  projectId: "auth-form-a660f",
  storageBucket: "auth-form-a660f.appspot.com",
  messagingSenderId: "55737543922",
  appId: "1:55737543922:web:d8392c06004f0e8885b46b",
  measurementId: "G-M7JQZTETKB"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      alert("You are Signed Up");
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};

// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      console.log(result);
      window.location.href = 'inside.html';
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};

// Sign Out function
const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      window.location.href = 'signin.html';
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
