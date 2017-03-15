import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, TextInput,
  View, TouchableOpacity,
} from 'react-native';
import LoginForm from'./LoginForm';

class Login extends Component{

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Logo</Text>
          <Text style={styles.title}>An app to scan code payment</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm navigator={this.props.navigator}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#3498db',
    paddingBottom: 20,
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo:{
    width: 100,
    height: 100,
  },
  title:{
    width: 160,
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
  }
});
module.exports = Login;
