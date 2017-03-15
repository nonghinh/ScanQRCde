import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, TouchableOpacity, AsyncStorage
} from 'react-native';

class Home extends Component{
  constructor(props){
    super(props);
    root = this;
  }
  onLogpoutPressed(){
    AsyncStorage.removeItem('access_token');
    root.props.navigator.pop({name: 'Login'});
    console.log('OUT++++++++++++++++++++');
  }
  render(){
    return(
      <View style={styles.container}>
      <View style={styles.toolbar}>
        <View style={styles.btnLogout}>
          <TouchableOpacity onPress={this.onLogpoutPressed}>
            <Text style={styles.textLogout}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={this.props.scanQRCode}>
          <View style={styles.btnRead}>
            <Text style={styles.textRead}>Read QRCode</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ff5050',
  },
  content:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRead:{
    width: 200,
    height: 60,
    borderRadius: 4,
    backgroundColor: '#ff3333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRead:{
    color: '#fff',
    fontSize: 22,
  },
  toolbar:{
    height: 50,
    backgroundColor: 'transparent',
    flexDireaction: 'row',
    alignItems: 'flex-end',
  },
  btnLogout:{
    flex: 1,
    width: 90,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  textLogout:{
    color: '#fff',
    borderRadius: 4,
  }
});
module.exports = Home;
