import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
  componentWillMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyAL45Q4XeBetLPiDkn-uBLyTFNBnRTtx_A',
    authDomain: 'auth-udemy-25bd6.firebaseapp.com',
    databaseURL: 'https://auth-udemy-25bd6.firebaseio.com',
    projectId: 'auth-udemy-25bd6',
    storageBucket: 'auth-udemy-25bd6.appspot.com',
    messagingSenderId: '739358249411'
  });
  }
  render(){
    return(
      <View>
        <Header headerText='Authentication'/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
