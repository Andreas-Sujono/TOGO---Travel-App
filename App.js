/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
} from 'react-native';

import { Provider as PaperProvider } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';

import AppNavigator from './components/splashScreen.js'

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{

  render(){
    return(
      <PaperProvider>
        <View style={{flex:1}}>
          <AppContainer/>
        </View>
      </PaperProvider>

    );
  }
}


