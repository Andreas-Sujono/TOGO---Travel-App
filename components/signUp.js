import React, {Component} from 'react'

import {View,Text,StyleSheet,ImageBackground,TextInput,TouchableOpacity,Image} from 'react-native'

export default class SignUp extends Component{

    static navigationOptions = {
        header: null,
    };

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error:{
            isTrue:false,
            payload:'',
        }
    }

    handleSignUp = () => {

        if(this.state.firstName == '' || this.state.lastName == '' || this.state.email == '' || this.state.password == ''){
            this.setState({
                error:{
                    isTrue:true,
                    payload:'All must be entered'
                }
            })
            return 
        }
        if(this.state.email=='test'  && this.state.password=="test"){
            this.setState({
                error:{
                    isTrue:true,
                    payload:'email already exists'
                }
            })
            return 
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
                        <Text style={style.title}> SignUp </Text>
                        <TextInput style={style.input} placeholder="First Name" value={this.state.firstName} onChangeText={(text) => this.setState({firstName:text})}/>
                        <TextInput style={style.input} placeholder="Last Name" value={this.state.lastName} onChangeText={(text) => this.setState({lastName:text})}/>
                        <TextInput style={style.input} placeholder="Email" value={this.state.email} onChangeText={(text) => this.setState({email:text})}/>
                        <TextInput style={style.input} placeholder="Password" secureTextEntry value={this.state.password} onChangeText={(text) => this.setState({password:text})}/>

                        <TouchableOpacity style={style.button} onPress={this.handleSignUp}> 
                            <Text style={{textAlign:'center',color:'white',paddingTop:5}}>SignUp</Text> 
                        </TouchableOpacity>

                        <Text style={{textAlign:'center',color:'#4C6CB5',marginVertical:20,fontSize:20}}> Or </Text>

                        <View style={{flexDirection:'row'}}>
                            <Image source={require('../assets/googleLogo.png')} />
                            <TouchableOpacity style={style.gmailTextContainer}>
                                <Text style={{textAlign:'center',color:'white'}}>SignUp/Login using Gmail</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={style.loginLinkContainer}>
                            <Text style={{color:'grey',textAlign:'center'}}> If you already have an acount, login </Text>
                            <TouchableOpacity onPress={ ()=> this.props.navigation.navigate('Login')}>
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
        minHeight:400,
        backgroundColor:'white',
        padding:30,
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
    gmailTextContainer:{
        backgroundColor:'#FF6464',
        padding:5,
        borderRadius:20,
        paddingLeft:10,
        paddingRight:10,
        marginLeft:15,
    },
    errorContainer:{
        marginTop:20,
    },
    loginLinkContainer:{
        marginTop:10,
        flexDirection:'row'
    }
})