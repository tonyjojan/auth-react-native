import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
  state = { loggedIn: null };
  componentWillMount(){
    firebase.initializeApp({
    apiKey: 'AIzaSyAL45Q4XeBetLPiDkn-uBLyTFNBnRTtx_A',
    authDomain: 'auth-udemy-25bd6.firebaseapp.com',
    databaseURL: 'https://auth-udemy-25bd6.firebaseio.com',
    projectId: 'auth-udemy-25bd6',
    storageBucket: 'auth-udemy-25bd6.appspot.com',
    messagingSenderId: '739358249411'
  });

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    switch(this.state.loggedIn){
      case true:
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render(){
    return(
      <View>
        <Header headerText='Authentication'/>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
