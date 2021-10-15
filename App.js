import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FBScreen from './screens/fb';
import INScreen from './screens/in';
export default class App extends React.Component {
  render() {
    return (
      <AppContainer></AppContainer>
  );}
}

const TabNavigator = createBottomTabNavigator({
  FaceBook:{screen:FBScreen},
  InstaGram:{screen:INScreen}
},
  )
const AppContainer = createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

