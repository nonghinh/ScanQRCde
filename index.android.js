/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var App = require('./components/App');
export default class GetPayCode extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('GetPayCode', () => GetPayCode);
