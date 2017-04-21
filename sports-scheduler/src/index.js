import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBfDDx_GK3oz3i5ac3cKstQOAdsO9Ydadc",
    authDomain: "sports-scheduler-4920d.firebaseapp.com",
    databaseURL: "https://sports-scheduler-4920d.firebaseio.com",
    projectId: "sports-scheduler-4920d",
    storageBucket: "sports-scheduler-4920d.appspot.com",
    messagingSenderId: "912191316224"
  };

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
