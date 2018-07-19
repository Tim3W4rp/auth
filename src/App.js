import React, {Component} from 'react';
import { View} from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAWHj6e_xVkuwVPLFsF9HouDMo8g8wmNGI',
      authDomain: 'authentication-17523.firebaseapp.com',
      databaseURL: 'https://authentication-17523.firebaseio.com',
      projectId: 'authentication-17523',
      storageBucket: 'authentication-17523.appspot.com',
      messagingSenderId: '953078450439'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
