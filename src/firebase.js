import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDyYTiIs43NHwCYuSh5YTXerYusigEoGOo",
    authDomain: "discord-clone-yt-26b99.firebaseapp.com",
    projectId: "discord-clone-yt-26b99",
    storageBucket: "discord-clone-yt-26b99.appspot.com",
    messagingSenderId: "123185938590",
    appId: "1:123185938590:web:ace42efa73c02270d53b8f",
    measurementId: "G-WPEWGRZWX3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;