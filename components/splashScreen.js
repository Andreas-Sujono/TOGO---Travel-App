import React, {Component} from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { ProgressBar, Colors } from 'react-native-paper';

import {View,Text,StyleSheet,Image} from 'react-native'

import SignUp from './signUp.js'
import Home from './home.js'
import Login from './login.js'
import Searching from './searching.js'


class SplashScreen extends Component{

    static navigationOptions = {
        header: null,
    };
    
    state = {
        loading:0
    }

    componentDidMount(){
        setInterval ( ()=> 
            this.setState( prevState => ({
                loading: prevState.loading + 0.1
            }))
        ,190)
        setTimeout( ()=> {
            this.props.navigation.navigate('Login')
          }, 2000)
      
    }

    render(){
        return(
            <View style={style.container}>

                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../assets/logo.png')}  style={{width:200,height:200}}/>
                    <Text style={style.text}> ToGo </Text>
                    <Text style={[style.text,{fontSize:20}]}> New Experience waiting you </Text>
                </View>
                
                <ProgressBar progress={this.state.loading} color='white' visible style={{marginTop:-5}}/>
                
            </View>
        );
    }
}

const style= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#4C6CB5',
    },
    text:{
        color:'white',
        fontSize:40
    }
})

const AppNavigator = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
    },
    SignUp:{
        screen: SignUp
    },
    Login:{
        screen: Login
    },
    Home:{
        screen: Home
    },
    Searching:{
        screen: Searching
    }
  },
    {
        initialRouteName: 'SplashScreen',
    }
);
  
export default createAppContainer(AppNavigator);