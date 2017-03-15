import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, TouchableOpacity,
} from 'react-native';

import io from 'socket.io-client/dist/socket.io.js';
var e;

class ExcData extends Component{
  constructor(props){
    super(props);
    e = this;
    this.socket = io('http://192.168.1.109:3000/', {jsonp: false});
    this.state = {
      bgColor: '#fff',
    };

    this.socket.on('changed', function(){
      e.setState({
        bgColor: 'red',
      });
    });
  }

  changeBg(){
    e.socket.emit('changeBg', 'red');
  }
  render(){
    return(
      <View style={{ backgroundColor: this.state.bgColor}}>
        <Text onPress={this.changeBg}>áddad</Text>
      </View>
    );
  }
}

module.exports = ExcData;
