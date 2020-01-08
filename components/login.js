import React, {Component} from 'react'

import {View,Text,StyleSheet,ImageBackground,TextInput,TouchableOpacity,Image} from 'react-native'

export default class Login extends Component{

    static navigationOptions = {
        header: null,
    };

    state = {
        email: '',
        password: '',
        error:{
            isTrue:false,
            payload:'',
        }
    }

    handleSignUp = () => {

        if(this.state.email == '' || this.state.password == ''){
            this.setState({
                error:{
                    isTrue:true,
                    payload:'All must be entered'
                }
            })
            return 
        }
        if(this.state.email=='test' || this.state.email =='Test'  && this.state.password=="test"){
            this.props.navigation.navigate('Home')
        }
        else{
            this.setState({
                error:{
                    isTrue:true,
                    payload:'invalid email or password'
                }
            })
        }
        
        
    }

    render(){
        return(
            <ImageBackground source={require('../assets/background1.png')} style={{width: '100%', height: '100%'}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <View style={style.container}>
                        <Text style={style.title}> Login </Text>
                        <TextInput style={style.input} placeholder="Email" value={this.state.email} onChangeText={(text) => this.setState({email:text})}/>
                        <TextInput style={style.input} placeholder="Password" secureTextEntry value={this.state.password} onChangeText={(text) => this.setState({password:text})}/>

                        <TouchableOpacity style={style.button} onPress={this.handleSignUp}> 
                            <Text style={{textAlign:'center',color:'white',paddingTop:5}}>Login</Text> 
                        </TouchableOpacity>

                        <View style={style.signUpContainer}>
                            <Text style={{color:'grey',textAlign:'center'}}> don't have an account, signUp </Text>
                            <TouchableOpacity onPress={ ()=> this.props.navigation.navigate('SignUp')}>
                                <Text style={{color:'blue',opacity:0.8}}>Here </Text>
                            </TouchableOpacity> 
                        </View>

                        { this.state.error.isTrue && 
                        <View style={style.errorContainer}> 
                            <Text style={{color:'#ED4337',textAlign:'center'}}> Error: {this.state.error.payload} </Text>
                        </View>
                        }


                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const style= StyleSheet.create({
    container:{
        width:'80%',
        minHeight:300,
        backgroundColor:'white',
        padding:40,
        paddingBottom:20,
        borderRadius:40
    },
    title:{
        color:'#4C6CB5',
        fontSize:25,
        textAlign:'center',
        marginBottom:10
    },
    input:{
        borderWidth:0.5,
        marginVertical:10,
        height:30,
        padding:5
    },
    button:{
        backgroundColor:'#4C6CB5',
        width:100,
        height:30,
        borderRadius:20,
    },
    errorContainer:{
        marginTop:20,
    },
    signUpContainer:{
        marginTop:10,
        flexDirection:'row'
    }
})