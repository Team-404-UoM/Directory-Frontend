import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDwM42_192AtG4MCR5vHR-foSB9PahHf8M",
    authDomain: "web-member-directory.firebaseapp.com",
    projectId: "web-member-directory",
    storageBucket: "web-member-directory.appspot.com",
    messagingSenderId: "284536674801",
    appId: "1:284536674801:web:0b55ca99959f710dc54c50",
    measurementId: "G-3ZC8YVJTG5"
};

const fire = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = fire.auth();



