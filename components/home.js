import React, { Component } from 'react';
import {View, Text, StyleSheet,Image,ImageBackground,TextInput,TouchableOpacity} from 'react-native'

import { Searchbar } from 'react-native-paper';


class Home extends Component {
    static navigationOptions = {
        header: null,
    };

    state= {
        search:"",
        imageDiscovery :[
            require('../assets/background2.png'),
            require('../assets/background3.png'),
            require('../assets/background4.png'),
            require('../assets/background5.png')
        ],
        currentImageIndex : 2
    }

    componentDidMount(){
        //let random = parseInt(Math.random()* prevState.imageDiscovery.length)
        setInterval( () => {
            this.setState( prevState => ({
                currentImageIndex:parseInt(Math.random()* prevState.imageDiscovery.length),
            }))
        },
        3000
        )
        
    }


    render() {
        return (
            <View style={style.container}>
                <View style={style.container}>
                    <Image source={require('../assets/background2.png')} style={{width:'100%',height:100}}/>
                    <ImageBackground source={require('../assets/blueToWhiteBackground.png')} style={{width:'100%',height:300,position:'absolute',top:70}}>
                        <View style={[style.container,style.middle]}>
                            <Text style={style.title}>Hello Andreas, Where are you going today? </Text>

                            <Searchbar  style={style.input} placeholder="Search" value={this.state.search} onChangeText={(text) => this.setState({search:text})}/>

                            <View style={style.searchButton}>
                                <TouchableOpacity onPress={ () => this.props.navigation.navigate('Searching',{searchParams:this.state.search}) }>
                                    <Image source={require('../assets/search.png')} style={{width:40,height:40,marginTop:20,marginLeft:20}} />
                                </TouchableOpacity>
                            </View> 
                        </View>
                    </ImageBackground>
                </View>

                <View style={style.container}>
                    <Text style={{fontSize:25, color:'#4C6CB5',marginLeft:20,marginBottom:0}}> Discover </Text>
                    <Text style={{fontSize:15, color:'#4C6CB5',marginLeft:22,marginBottom:30,opacity:0.8}}> Read more here > </Text>

                    <View style={{flex:1,alignItems:'center'}}>
                        <ImageBackground source={this.state.imageDiscovery[this.state.currentImageIndex]} style={{width:300,height:150,position:'relative'}}>
                            <View style={{flex:1,flexDirection:'row',alignItems:'flex-end',justifyContent:'center',paddingBottom:10}}>
                                {this.state.imageDiscovery.map((link) => (
                                    <TouchableOpacity key={Math.random()} style={style.circle} onPress={()=> this.setState({currentImageIndex:this.state.imageDiscovery.indexOf(link)})}></TouchableOpacity>
                                ))}
                            

                                
                            </View>
                        </ImageBackground>
                    </View>

                    <View>
                        <TouchableOpacity style={style.searchBottom}>
                            <Text style={{fontSize:20,color:'white',textAlign:'center',marginTop:5}}> Search </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
        fontSize:23,
        color:'white',
        width:'70%',
        marginTop:40,
        marginLeft:20,
    },
    middle:{
        alignItems:'center'
    },  
    input:{
        borderWidth:0.5,
        width:'80%',
        height:40,
        backgroundColor:'white',
        marginTop:30,
        paddingLeft:10,
    },
    searchButton:{
        backgroundColor:'white',
        width:80,
        height:80,
        borderRadius:80,
        marginTop:40
    },
    searchBottom:{
        width:'100%',
        height:40,
        backgroundColor:'#4C6CB5'
    },
    circle:{
        backgroundColor:'lightgrey',
        width:15,
        height:15,
        borderRadius:20,
        marginLeft:5
    }
})

export default Home;