import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyBvMOq2qujtp49TPbATE-JjAjkwb8JRfIo",
    authDomain: "becs-3a3bb.firebaseapp.com",
    databaseURL: "https://becs-3a3bb.firebaseio.com"});

const base= Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;