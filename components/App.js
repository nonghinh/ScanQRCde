import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Navigator, AsyncStorage
} from 'react-native';

var Home = require('../components/Home');
var QRCode = require('../components/QRCode');
var QRCodeScreen = require('../components/QRCodeScreen');
var ExcData = require('../components/ExcData');
var Login = require('../components/login/Login');

class App extends Component{
  constructor(props){
    super(props);
    root = this;
  }
  async checkData(){
    let accessToken = await AsyncStorage.getItem('access_token');
    console.log('AppCC '+accessToken);
    if(typeof(accessToken) !== null){
      root.setState({redirect: 'Home'});
      return true;
    }
    return false;
  }
  renderScene(route, navigator){
    switch(route.name){
      case 'Home' : return(<Home scanQRCode={()=>{navigator.push({name: 'QRCode'})}} navigator={navigator} />);
      case 'QRCode' : return(<QRCode />);
      case 'ExcData' : return(<ExcData />);
      case 'Login' : return(<Login navigator={navigator} />);
    }
  }
  render(){
    return(
      <Navigator
        initialRoute={{name: this.checkData() ? 'Home' : 'Login'}}
        renderScene={this.renderScene}
      />
    );
  }
}

module.exports = App;
